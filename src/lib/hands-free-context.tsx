import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import type { VocabularyWord } from '../types';
import {
  getBestChineseVoice,
  getBestVietnameseVoice,
  isAppleDevice,
  recordSkillPractice,
} from './hsk';

export type PlaybackMode = 'zh_vi' | 'zh_only';
export type PlaybackSpeed = 0.75 | 0.9 | 1.0;
export type IntervalDelay = 1000 | 2000 | 3000;

export interface PlayListRequest {
  title: string;
  words: VocabularyWord[];
  startIndex?: number;
}

export interface HandsFreeContextValue {
  isOpen: boolean;
  isExpanded: boolean;
  isPlaying: boolean;
  title: string;
  words: VocabularyWord[];
  currentIndex: number;
  currentWord: VocabularyWord | null;
  mode: PlaybackMode;
  speed: PlaybackSpeed;
  intervalDelay: IntervalDelay;
  isLoop: boolean;
  isShuffle: boolean;
  step: 'idle' | 'speaking_zh' | 'pause_zh' | 'speaking_vi' | 'pause_next';
  hasVietnameseVoice: boolean;

  // Actions
  playWordList: (req: PlayListRequest) => void;
  togglePlay: () => void;
  play: () => void;
  pause: () => void;
  nextWord: () => void;
  prevWord: () => void;
  jumpToWord: (index: number) => void;
  setSpeed: (speed: PlaybackSpeed) => void;
  setIntervalDelay: (delay: IntervalDelay) => void;
  setMode: (mode: PlaybackMode) => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  openExpanded: () => void;
  closeExpanded: () => void;
  closePlayer: () => void;
}

const STORAGE_SETTINGS_KEY = 'hanyu_hands_free_settings';

interface SavedSettings {
  mode?: PlaybackMode;
  speed?: PlaybackSpeed;
  intervalDelay?: IntervalDelay;
  isLoop?: boolean;
  isShuffle?: boolean;
}

function loadSavedSettings(): SavedSettings {
  try {
    const raw = localStorage.getItem(STORAGE_SETTINGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Ignore storage parse error
  }
  return {};
}

function saveSettings(settings: SavedSettings) {
  try {
    localStorage.setItem(STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage write error
  }
}

/**
 * Lọc sạch nghĩa tiếng Việt để đọc TTS tự nhiên nhất
 */
export function cleanMeaningForTts(meaning: string): string {
  if (!meaning) return '';
  return meaning
    .replace(/\([^)]*\)/g, '') // Bỏ chú thích trong ngoặc đơn (động từ, phó từ...)
    .replace(/\[[^\]]*\]/g, '') // Bỏ ngoặc vuông
    .replace(/\{[^}]*\}/g, '')
    .replace(/^\d+\.\s*/gm, '') // Bỏ số thứ tự 1., 2.
    .replace(/[;/]/g, ', ') // Thay dấu chấm phẩy hoặc gạch chéo bằng dấu phẩy để ngắt giọng
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Xáo trộn mảng ngẫu nhiên (Fisher-Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const HandsFreeContext = createContext<HandsFreeContextValue | null>(null);

export const HandsFreePlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialSettings = useMemo(() => loadSavedSettings(), []);

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState('');
  const [rawWords, setRawWords] = useState<VocabularyWord[]>([]);
  const [displayWords, setDisplayWords] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [mode, setModeState] = useState<PlaybackMode>(
    initialSettings.mode || 'zh_vi'
  );
  const [speed, setSpeedState] = useState<PlaybackSpeed>(
    initialSettings.speed || 0.9
  );
  const [intervalDelay, setIntervalDelayState] = useState<IntervalDelay>(
    initialSettings.intervalDelay || 2000
  );
  const [isLoop, setIsLoopState] = useState<boolean>(
    initialSettings.isLoop ?? true
  );
  const [isShuffle, setIsShuffleState] = useState<boolean>(
    initialSettings.isShuffle ?? false
  );
  const [step, setStep] = useState<
    'idle' | 'speaking_zh' | 'pause_zh' | 'speaking_vi' | 'pause_next'
  >('idle');

  const [hasViVoice, setHasViVoice] = useState(true);

  // References to keep state synced inside async callbacks
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  const modeRef = useRef(mode);
  modeRef.current = mode;

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const intervalDelayRef = useRef(intervalDelay);
  intervalDelayRef.current = intervalDelay;

  const isLoopRef = useRef(isLoop);
  isLoopRef.current = isLoop;

  const isShuffleRef = useRef(isShuffle);
  isShuffleRef.current = isShuffle;

  const wordsRef = useRef(displayWords);
  wordsRef.current = displayWords;

  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const keepAliveIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );
  const activeSessionIdRef = useRef(0);

  // Check if speech synthesis and Vietnamese voice exist
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const checkVi = () => {
      const v = getBestVietnameseVoice();
      setHasViVoice(!!v);
    };
    checkVi();
    if (typeof window.speechSynthesis.addEventListener === 'function') {
      window.speechSynthesis.addEventListener('voiceschanged', checkVi);
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', checkVi);
      };
    }
  }, []);

  // Save settings when modified
  const setMode = useCallback((newMode: PlaybackMode) => {
    setModeState(newMode);
    saveSettings({ ...loadSavedSettings(), mode: newMode });
  }, []);

  const setSpeed = useCallback((newSpeed: PlaybackSpeed) => {
    setSpeedState(newSpeed);
    saveSettings({ ...loadSavedSettings(), speed: newSpeed });
  }, []);

  const setIntervalDelay = useCallback((newDelay: IntervalDelay) => {
    setIntervalDelayState(newDelay);
    saveSettings({ ...loadSavedSettings(), intervalDelay: newDelay });
  }, []);

  const toggleLoop = useCallback(() => {
    setIsLoopState((prev) => {
      const next = !prev;
      saveSettings({ ...loadSavedSettings(), isLoop: next });
      return next;
    });
  }, []);

  const toggleShuffle = useCallback(() => {
    setIsShuffleState((prev) => {
      const next = !prev;
      saveSettings({ ...loadSavedSettings(), isShuffle: next });
      if (next) {
        // Shuffle display words while keeping current word first
        const curWord = wordsRef.current[currentIndexRef.current];
        const rest = rawWords.filter((w) => w.id !== curWord?.id);
        const shuffled = curWord ? [curWord, ...shuffleArray(rest)] : shuffleArray(rawWords);
        setDisplayWords(shuffled);
        setCurrentIndex(0);
      } else {
        // Restore original order
        const curWord = wordsRef.current[currentIndexRef.current];
        const origIdx = rawWords.findIndex((w) => w.id === curWord?.id);
        setDisplayWords(rawWords);
        setCurrentIndex(origIdx >= 0 ? origIdx : 0);
      }
      return next;
    });
  }, [rawWords]);

  // Cancel any active speech or pending timeout
  const cancelAll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // Ignore
      }
    }
  }, []);

  // Core Sequencer: Play word at index
  const playWordAtIndex = useCallback(
    (index: number) => {
      cancelAll();
      const currentList = wordsRef.current;
      if (!currentList || currentList.length === 0 || index >= currentList.length) {
        setIsPlaying(false);
        setStep('idle');
        return;
      }

      const word = currentList[index];
      const sessionId = ++activeSessionIdRef.current;

      // Resume synthesis if paused (Safari iOS bug)
      if (typeof window !== 'undefined' && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      // Step 1: Speak Chinese Hanzi
      setStep('speaking_zh');
      const zhUtterance = new SpeechSynthesisUtterance(word.hanzi);
      zhUtterance.lang = 'zh-CN';
      const zhVoice = getBestChineseVoice();
      if (zhVoice) {
        zhUtterance.voice = zhVoice;
        if (zhVoice.lang) zhUtterance.lang = zhVoice.lang;
      }

      const isIOS = isAppleDevice();
      if (isIOS) {
        const isEnhanced = zhVoice
          ? /enhanced|premium|natural|siri/i.test(zhVoice.name)
          : false;
        zhUtterance.rate = isEnhanced ? speedRef.current : 1.0;
      } else {
        zhUtterance.rate = speedRef.current * 0.95;
      }
      zhUtterance.pitch = 1.0;

      zhUtterance.onend = () => {
        if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;

        // Step 2: Pause after Chinese to recall
        setStep('pause_zh');
        const zhPauseDuration = Math.min(1500, Math.max(1000, intervalDelayRef.current * 0.75));

        timeoutRef.current = setTimeout(() => {
          if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;

          const currentMode = modeRef.current;
          const viVoice = getBestVietnameseVoice();
          const cleanVi = cleanMeaningForTts(word.meaning);

          if (currentMode === 'zh_vi' && viVoice && cleanVi) {
            // Step 3A: Speak Vietnamese meaning
            setStep('speaking_vi');
            const viUtterance = new SpeechSynthesisUtterance(cleanVi);
            viUtterance.lang = 'vi-VN';
            viUtterance.voice = viVoice;
            viUtterance.rate = speedRef.current;
            viUtterance.pitch = 1.0;

            viUtterance.onend = () => {
              if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;
              scheduleNextWord(sessionId, index);
            };

            viUtterance.onerror = (e) => {
              if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;
              if (!['interrupted', 'canceled'].includes(e.error)) {
                scheduleNextWord(sessionId, index);
              }
            };

            window.speechSynthesis.speak(viUtterance);
          } else {
            // Step 3B: Repeat Chinese Hanzi (for zh_only mode or when no Vietnamese voice)
            setStep('speaking_zh');
            const repeatZh = new SpeechSynthesisUtterance(word.hanzi);
            repeatZh.lang = 'zh-CN';
            if (zhVoice) repeatZh.voice = zhVoice;
            repeatZh.rate = zhUtterance.rate;
            repeatZh.pitch = zhUtterance.pitch;

            repeatZh.onend = () => {
              if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;
              scheduleNextWord(sessionId, index);
            };

            repeatZh.onerror = (e) => {
              if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;
              if (!['interrupted', 'canceled'].includes(e.error)) {
                scheduleNextWord(sessionId, index);
              }
            };

            window.speechSynthesis.speak(repeatZh);
          }
        }, zhPauseDuration);
      };

      zhUtterance.onerror = (e) => {
        if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;
        if (!['interrupted', 'canceled'].includes(e.error)) {
          scheduleNextWord(sessionId, index);
        }
      };

      window.speechSynthesis.speak(zhUtterance);
    },
    [cancelAll]
  );

  // Schedule advance to the next word
  const scheduleNextWord = useCallback(
    (sessionId: number, currentIdx: number) => {
      setStep('pause_next');
      timeoutRef.current = setTimeout(() => {
        if (sessionId !== activeSessionIdRef.current || !isPlayingRef.current) return;

        const list = wordsRef.current;
        if (currentIdx < list.length - 1) {
          const nextIdx = currentIdx + 1;
          setCurrentIndex(nextIdx);
          playWordAtIndex(nextIdx);
        } else {
          // Reached end of playlist
          if (isLoopRef.current) {
            const nextIdx = 0;
            setCurrentIndex(nextIdx);
            playWordAtIndex(nextIdx);
          } else {
            setIsPlaying(false);
            setStep('idle');
          }
        }
      }, intervalDelayRef.current);
    },
    [playWordAtIndex]
  );

  // Safari background speech keep-alive timer
  useEffect(() => {
    if (isPlaying) {
      keepAliveIntervalRef.current = setInterval(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis) {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
        }
      }, 2000);
    } else {
      if (keepAliveIntervalRef.current) {
        clearInterval(keepAliveIntervalRef.current);
        keepAliveIntervalRef.current = null;
      }
    }
    return () => {
      if (keepAliveIntervalRef.current) {
        clearInterval(keepAliveIntervalRef.current);
        keepAliveIntervalRef.current = null;
      }
    };
  }, [isPlaying]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      cancelAll();
    };
  }, [cancelAll]);

  // Public Actions
  const playWordList = useCallback(
    (req: PlayListRequest) => {
      if (!req.words || req.words.length === 0) return;

      recordSkillPractice('handsFree');
      cancelAll();
      setTitle(req.title || 'Luyện nghe rảnh tay');
      setRawWords(req.words);

      let initialList = req.words;
      let startIdx = req.startIndex ?? 0;

      if (isShuffleRef.current) {
        const first = req.words[startIdx];
        const rest = req.words.filter((_, i) => i !== startIdx);
        initialList = first ? [first, ...shuffleArray(rest)] : shuffleArray(req.words);
        startIdx = 0;
      }

      setDisplayWords(initialList);
      setCurrentIndex(startIdx);
      setIsOpen(true);
      setIsPlaying(true);

      // Trigger playback
      playWordAtIndex(startIdx);
    },
    [cancelAll, playWordAtIndex]
  );

  const pause = useCallback(() => {
    activeSessionIdRef.current++;
    cancelAll();
    setIsPlaying(false);
    setStep('idle');
  }, [cancelAll]);

  const play = useCallback(() => {
    setIsPlaying(true);
    playWordAtIndex(currentIndexRef.current);
  }, [playWordAtIndex]);

  const togglePlay = useCallback(() => {
    if (isPlayingRef.current) {
      pause();
    } else {
      play();
    }
  }, [play, pause]);

  const nextWord = useCallback(() => {
    const list = wordsRef.current;
    if (list.length === 0) return;
    const nextIdx =
      currentIndexRef.current < list.length - 1
        ? currentIndexRef.current + 1
        : isLoopRef.current
        ? 0
        : currentIndexRef.current;
    setCurrentIndex(nextIdx);
    if (isPlayingRef.current) {
      playWordAtIndex(nextIdx);
    }
  }, [playWordAtIndex]);

  const prevWord = useCallback(() => {
    const list = wordsRef.current;
    if (list.length === 0) return;
    const prevIdx =
      currentIndexRef.current > 0
        ? currentIndexRef.current - 1
        : isLoopRef.current
        ? list.length - 1
        : 0;
    setCurrentIndex(prevIdx);
    if (isPlayingRef.current) {
      playWordAtIndex(prevIdx);
    }
  }, [playWordAtIndex]);

  const jumpToWord = useCallback(
    (index: number) => {
      const list = wordsRef.current;
      if (index < 0 || index >= list.length) return;
      setCurrentIndex(index);
      if (isPlayingRef.current) {
        playWordAtIndex(index);
      }
    },
    [playWordAtIndex]
  );

  const closePlayer = useCallback(() => {
    activeSessionIdRef.current++;
    cancelAll();
    setIsPlaying(false);
    setIsOpen(false);
    setIsExpanded(false);
    setStep('idle');
  }, [cancelAll]);

  const currentWord = displayWords[currentIndex] || null;

  const value: HandsFreeContextValue = {
    isOpen,
    isExpanded,
    isPlaying,
    title,
    words: displayWords,
    currentIndex,
    currentWord,
    mode,
    speed,
    intervalDelay,
    isLoop,
    isShuffle,
    step,
    hasVietnameseVoice: hasViVoice,
    playWordList,
    togglePlay,
    play,
    pause,
    nextWord,
    prevWord,
    jumpToWord,
    setSpeed,
    setIntervalDelay,
    setMode,
    toggleLoop,
    toggleShuffle,
    openExpanded: () => setIsExpanded(true),
    closeExpanded: () => setIsExpanded(false),
    closePlayer,
  };

  return (
    <HandsFreeContext.Provider value={value}>
      {children}
    </HandsFreeContext.Provider>
  );
};

export function useHandsFreePlayer(): HandsFreeContextValue {
  const context = useContext(HandsFreeContext);
  if (!context) {
    throw new Error('useHandsFreePlayer must be used within a HandsFreePlayerProvider');
  }
  return context;
}
