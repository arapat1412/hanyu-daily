import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Repeat,
  Sparkles,
  BookOpen,
  Music,
  Check,
  ChevronRight,
  ChevronDown,
  Info,
  Compass,
  Headphones,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  Layers,
} from 'lucide-react';
import { getSongById, Song, SongLine, SongWordToken, SongVocabItem } from '../data/songsData';
import { speakChinese, stopChineseSpeech } from '../lib/hsk';

export const SongPlayerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const song = useMemo(() => (id ? getSongById(id) : undefined), [id]);

  // Audio & Playback States
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(song ? song.duration : 0);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [isLoopLine, setIsLoopLine] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  // Display Settings
  const [showPinyin, setShowPinyin] = useState(true);
  const [showVietnamese, setShowVietnamese] = useState(true);
  const [fontSize, setFontSize] = useState<'md' | 'lg' | 'xl'>('lg');

  // Interactive Token / Vocab State
  const [selectedToken, setSelectedToken] = useState<SongWordToken | null>(null);
  const [selectedLineForVocab, setSelectedLineForVocab] = useState<SongLine | null>(null);
  const [activeTab, setActiveTab] = useState<'lyrics' | 'allVocab' | 'culture'>('lyrics');

  // Ref for line elements to enable auto scroll
  const lineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Active line index based on currentTime
  const activeLineIndex = useMemo(() => {
    if (!song) return -1;
    return song.lines.findIndex(
      (l) => currentTime >= l.startTime && currentTime <= l.endTime
    );
  }, [song, currentTime]);

  const activeLine = useMemo(() => {
    if (!song || activeLineIndex === -1) return null;
    return song.lines[activeLineIndex];
  }, [song, activeLineIndex]);

  // Handle loop line behavior
  useEffect(() => {
    if (!isLoopLine || !activeLine || !audioRef.current) return;
    if (currentTime >= activeLine.endTime - 0.1) {
      audioRef.current.currentTime = activeLine.startTime;
    }
  }, [isLoopLine, activeLine, currentTime]);

  // Auto scroll active line into view
  useEffect(() => {
    if (!autoScroll || activeLineIndex === -1 || !song) return;
    const currentLine = song.lines[activeLineIndex];
    if (currentLine && lineRefs.current[currentLine.id]) {
      lineRefs.current[currentLine.id]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeLineIndex, autoScroll, song]);

  // Audio Event Listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Update playback rate
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      stopChineseSpeech();
    };
  }, []);

  if (!song) {
    return (
      <div className="min-h-screen bg-cream/70 flex flex-col items-center justify-center p-6 text-center">
        <Music className="w-16 h-16 text-slate-300 mb-4 animate-bounce" />
        <h2 className="text-xl font-bold text-slate-800">Không tìm thấy bài hát</h2>
        <p className="text-sm text-slate-500 mt-2 mb-6">Bài hát này không tồn tại hoặc đã được chuyển mục.</p>
        <button
          onClick={() => navigate('/am-nhac')}
          className="px-5 py-2.5 bg-pink-600 text-white rounded-2xl font-bold text-sm shadow-md hover:bg-pink-700 transition-all"
        >
          Quay lại danh sách bài hát
        </button>
      </div>
    );
  }

  // Play / Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback error, fallback to visual timer:', err);
        setIsPlaying(true);
      });
    }
  };

  // Jump to specific time / line
  const handleSeekLine = (line: SongLine) => {
    if (audioRef.current) {
      audioRef.current.currentTime = line.startTime;
      if (!isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(true));
      }
    } else {
      setCurrentTime(line.startTime);
    }
  };

  // Pronounce slow single token or character
  const handlePronounceSlow = (char: string, token?: SongWordToken, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (token) setSelectedToken(token);
    // Read at 0.65 rate for slow, clear learning pronunciation
    speakChinese(char, { rate: 0.65 });
  };

  // Read entire sentence with native TTS
  const handleSpeakLine = (line: SongLine, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    speakChinese(line.zh, { rate: 0.8 });
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Collect all unique vocabularies for the whole song
  const allSongVocab = useMemo(() => {
    const list: SongVocabItem[] = [];
    const seen = new Set<string>();
    song.lines.forEach((line) => {
      line.vocab?.forEach((v) => {
        if (!seen.has(v.word)) {
          seen.add(v.word);
          list.push(v);
        }
      });
    });
    return list;
  }, [song]);

  return (
    <div className="min-h-screen bg-cream/70 pb-32 sm:pb-24 pt-3 sm:pt-5">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={song.audioUrl}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="mx-auto max-w-5xl px-3 sm:px-6">
        
        {/* Navigation Breadcrumb & Back */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to="/am-nhac"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-700 hover:text-pink-900 bg-white/80 hover:bg-white px-3 py-1.5 rounded-xl border border-pink-200/80 shadow-2xs transition-all no-underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tủ nhạc</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-pink-100/90 text-pink-800 text-xs font-black">
              {song.categoryLabel.split('·')[0].trim()}
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-teal-100 text-teal-800 text-xs font-black">
              {song.hskLevel}
            </span>
          </div>
        </div>

        {/* ================= HEADER CARD WITH DISC INFO ================= */}
        <div className="rounded-3xl bg-white border border-slate-200/90 p-4 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          {/* Cover Art */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md shrink-0 border-2 border-slate-100">
            <img
              src={song.coverImage}
              alt={song.titleVi}
              className="w-full h-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            {isPlaying && (
              <div className="absolute inset-0 bg-pink-900/30 flex items-center justify-center">
                <div className="flex items-end gap-0.5 h-5">
                  <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
                  <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s] h-5" />
                  <span className="w-1 bg-white rounded-full animate-bounce h-3" />
                </div>
              </div>
            )}
          </div>

          {/* Titles & Artist */}
          <div className="flex-1 text-center md:text-left min-w-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                {song.titleZh}
              </h1>
              <span className="text-sm sm:text-base font-bold text-pink-600 font-sans">
                {song.titlePy}
              </span>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-700">
              {song.titleVi}
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Ca sĩ: <span className="font-semibold text-slate-800">{song.artist}</span> · {song.lines.length} câu hát
            </div>
          </div>

          {/* Quick View Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl self-center shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('lyrics')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'lyrics'
                  ? 'bg-white text-pink-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lời bài hát
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('allVocab')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'allVocab'
                  ? 'bg-white text-pink-700 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Từ vựng ({allSongVocab.length})
            </button>
            {song.culturalNote && (
              <button
                type="button"
                onClick={() => setActiveTab('culture')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'culture'
                    ? 'bg-white text-pink-700 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Ý nghĩa
              </button>
            )}
          </div>
        </div>

        {/* ================= CONTROLS & DISPLAY TOGGLES ================= */}
        {activeTab === 'lyrics' && (
          <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-sm p-3 sm:p-4 mb-5">
            {/* Audio Progress Bar */}
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[11px] font-mono text-slate-500 w-9 text-right shrink-0">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setCurrentTime(val);
                  if (audioRef.current) audioRef.current.currentTime = val;
                }}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-pink-600"
              />
              <span className="text-[11px] font-mono text-slate-500 w-9 shrink-0">
                {formatTime(duration)}
              </span>
            </div>

            {/* Playback Controls & Utility Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              {/* Left: Play/Pause, Rewind, Loop */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white flex items-center justify-center shadow-md active:scale-95 transition-all"
                  title={isPlaying ? 'Tạm dừng' : 'Phát bài hát'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 5);
                    }
                  }}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
                  title="Tua lùi 5 giây"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                {/* Loop Line Button */}
                <button
                  type="button"
                  onClick={() => setIsLoopLine(!isLoopLine)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                    isLoopLine
                      ? 'bg-amber-400 text-slate-950 shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                  title="Lặp lại câu hát này để luyện hát theo"
                >
                  <Repeat className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Lặp câu</span>
                </button>

                {/* Playback Speed Selector */}
                <div className="flex items-center gap-0.5 bg-slate-100 p-1 rounded-xl text-xs font-bold">
                  {[0.75, 1.0, 1.25].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setPlaybackRate(rate)}
                      className={`px-2 py-0.5 rounded-lg transition-all ${
                        playbackRate === rate
                          ? 'bg-white text-slate-950 shadow-2xs'
                          : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Display Toggles (Pinyin, Vietnamese, AutoScroll) */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={() => setShowPinyin(!showPinyin)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    showPinyin
                      ? 'bg-pink-50 text-pink-700 border border-pink-200'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                  title="Bật/Tắt hiển thị Pinyin"
                >
                  Pinyin
                </button>

                <button
                  type="button"
                  onClick={() => setShowVietnamese(!showVietnamese)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    showVietnamese
                      ? 'bg-teal-50 text-teal-700 border border-teal-200'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                  title="Bật/Tắt hiển thị nghĩa tiếng Việt"
                >
                  Dịch Việt
                </button>

                <button
                  type="button"
                  onClick={() => setAutoScroll(!autoScroll)}
                  className={`p-1.5 rounded-xl text-xs font-bold transition-all ${
                    autoScroll
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                  title="Tự động cuộn lời bài hát theo nhạc"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= MAIN CONTENT TABS ================= */}
        {activeTab === 'lyrics' && (
          <div className="space-y-4">
            
            {/* Guide Banner */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-amber-900 text-xs">
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-amber-600 shrink-0" />
                <span>
                  💡 <strong>Mẹo học:</strong> Bấm vào từng chữ Hán để nghe phát âm chậm giọng chuẩn, hoặc bấm vào câu hát để tua nhạc đến đoạn đó!
                </span>
              </div>
            </div>

            {/* Selected Token Popover Detail (Sticky or Floating) */}
            {selectedToken && (
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 shadow-sm flex items-center justify-between animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center font-hanzi text-xl font-bold shadow-xs">
                    {selectedToken.c}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-pink-900 text-sm font-sans">
                        {selectedToken.p}
                      </span>
                      {selectedToken.hanviet && (
                        <span className="text-[11px] text-pink-700 bg-pink-100/80 px-1.5 py-0.5 rounded font-medium">
                          Hán-Việt: {selectedToken.hanviet}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-700 font-medium mt-0.5">
                      Nghĩa: {selectedToken.meaning || 'Từ trong bài'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => speakChinese(selectedToken.c, { rate: 0.65 })}
                    className="p-2 rounded-xl bg-white hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs font-bold transition-colors flex items-center gap-1"
                    title="Nghe lại phát âm chậm"
                  >
                    <Volume2 className="w-4 h-4" />
                    <span className="text-[11px]">Đọc chậm</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedToken(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 text-xs rounded-lg hover:bg-white/60"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* List of Lyric Lines */}
            <div className="space-y-3 sm:space-y-4">
              {song.lines.map((line, idx) => {
                const isActive = idx === activeLineIndex;

                return (
                  <div
                    key={line.id}
                    ref={(el) => (lineRefs.current[line.id] = el)}
                    onClick={() => handleSeekLine(line)}
                    className={`relative p-4 sm:p-5 rounded-3xl transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-500/10 via-rose-50 to-white border-pink-400 shadow-md scale-[1.01]'
                        : 'bg-white hover:bg-pink-50/30 border-slate-200/80 hover:border-pink-200'
                    }`}
                  >
                    {/* Active Line Marker Indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-pink-500 to-rose-600 rounded-r-full" />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 space-y-1.5">
                        
                        {/* 1. Hanzi Row with Individual Clickable Word Tokens */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-hanzi font-black text-xl sm:text-2xl md:text-3xl tracking-wide leading-snug">
                          {line.tokens && line.tokens.length > 0 ? (
                            line.tokens.map((token, tIdx) => {
                              const isPunc = !token.p || /[，。！？、“”：；（）…—]/g.test(token.c);
                              if (isPunc) {
                                return (
                                  <span key={tIdx} className="text-slate-400 select-none">
                                    {token.c}
                                  </span>
                                );
                              }

                              return (
                                <button
                                  key={tIdx}
                                  type="button"
                                  onClick={(e) => handlePronounceSlow(token.c, token, e)}
                                  className={`inline-flex flex-col items-center group transition-transform hover:-translate-y-0.5 active:scale-95 cursor-pointer rounded-lg px-1 py-0.5 ${
                                    isActive ? 'text-slate-950 font-black' : 'text-slate-800'
                                  } hover:bg-pink-100/70 hover:text-pink-700`}
                                  title={`Bấm nghe phát âm chậm: ${token.c} [${token.p || ''}]`}
                                >
                                  <span>{token.c}</span>
                                </button>
                              );
                            })
                          ) : (
                            <span className={isActive ? 'text-pink-900' : 'text-slate-800'}>
                              {line.zh}
                            </span>
                          )}
                        </div>

                        {/* 2. Pinyin Row */}
                        {showPinyin && (
                          <div className="text-xs sm:text-sm font-bold text-pink-700 font-sans tracking-wide">
                            {line.py}
                          </div>
                        )}

                        {/* 3. Vietnamese Meaning Row */}
                        {showVietnamese && (
                          <div className="text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed">
                            {line.vi}
                          </div>
                        )}

                        {/* 4. Grammar Note (if available) */}
                        {line.grammarNote && (
                          <div className="mt-2 text-[11.5px] text-amber-900 bg-amber-50 px-2.5 py-1.5 rounded-xl border border-amber-200/60 inline-flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                            <span>{line.grammarNote}</span>
                          </div>
                        )}
                      </div>

                      {/* Right Side Buttons: Speak Line & View Vocab */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        {/* Button: Listen to whole sentence */}
                        <button
                          type="button"
                          onClick={(e) => handleSpeakLine(line, e)}
                          className="p-2 rounded-xl bg-slate-100 hover:bg-pink-100 text-slate-600 hover:text-pink-700 transition-colors"
                          title="Đọc chuẩn cả câu này"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>

                        {/* Button: View Vocabulary for this line */}
                        {line.vocab && line.vocab.length > 0 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLineForVocab(
                                selectedLineForVocab?.id === line.id ? null : line
                              );
                            }}
                            className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                              selectedLineForVocab?.id === line.id
                                ? 'bg-pink-600 text-white'
                                : 'bg-pink-50 hover:bg-pink-100 text-pink-700'
                            }`}
                            title="Xem từ vựng trong câu hát"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{line.vocab.length} từ</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Inline Vocabulary Panel for this line */}
                    {selectedLineForVocab?.id === line.id && line.vocab && (
                      <div className="mt-4 pt-3.5 border-t border-pink-200/60 animate-fadeIn">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-pink-700 mb-2 flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Từ vựng trọng tâm trong câu hát này:</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {line.vocab.map((v, vIdx) => (
                            <div
                              key={vIdx}
                              className="p-2.5 rounded-xl bg-white border border-pink-100 shadow-2xs flex items-center justify-between gap-2"
                            >
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-hanzi font-bold text-base text-slate-900">
                                    {v.word}
                                  </span>
                                  <span className="text-xs font-bold text-pink-700 font-sans">
                                    [{v.pinyin}]
                                  </span>
                                  {v.hskLevel && (
                                    <span className="text-[9.5px] bg-teal-50 text-teal-800 px-1.5 py-0.5 rounded font-black">
                                      {v.hskLevel}
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-600 mt-0.5">
                                  {v.meaning} {v.hanviet && `· Hán-Việt: ${v.hanviet}`}
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  speakChinese(v.word);
                                }}
                                className="p-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 transition-colors"
                                title="Phát âm từ vựng"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ================= TAB 2: ALL VOCABULARY ================= */}
        {activeTab === 'allVocab' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <span>Toàn bộ từ vựng bài hát</span>
                  <span className="text-xs font-bold text-pink-700 bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
                    {allSongVocab.length} từ chọn lọc
                  </span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Được tổng hợp từ các câu hát kèm phiên âm Pinyin, âm Hán-Việt và cấp độ HSK.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allSongVocab.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-pink-300 transition-all flex items-start justify-between gap-3 group"
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-hanzi font-bold text-lg text-slate-900 group-hover:text-pink-600 transition-colors">
                        {item.word}
                      </span>
                      <span className="text-xs font-bold text-pink-700 font-sans">
                        {item.pinyin}
                      </span>
                      {item.hskLevel && (
                        <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded-md font-bold">
                          {item.hskLevel}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">
                      {item.meaning}
                    </div>
                    {item.hanviet && (
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        Âm Hán-Việt: {item.hanviet}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => speakChinese(item.word)}
                    className="p-2 rounded-xl bg-white group-hover:bg-pink-50 text-slate-500 group-hover:text-pink-600 border border-slate-200/80 transition-colors"
                    title="Nghe phát âm"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 3: CULTURE & CONTEXT ================= */}
        {activeTab === 'culture' && song.culturalNote && (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-pink-700 font-bold text-xs uppercase tracking-wider">
              <Info className="w-4 h-4" />
              <span>Góc Văn Hóa & Hoàn Cảnh Sáng Tác</span>
            </div>
            <h3 className="text-xl font-black text-slate-900">
              {song.titleZh} ({song.titleVi})
            </h3>
            <div className="text-sm text-slate-600 leading-relaxed p-4 rounded-2xl bg-pink-50/50 border border-pink-100">
              {song.culturalNote}
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Âm nhạc luôn là chiếc cầu nối tuyệt vời để chạm vào tâm hồn của ngôn ngữ. Khi học thuộc một bài hát, bạn không chỉ ghi nhớ từ vựng và mẫu câu mà còn thấm nhuần cả ngữ điệu và tình cảm của người bản xứ.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default SongPlayerPage;
