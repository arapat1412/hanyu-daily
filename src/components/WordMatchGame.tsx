import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Timer,
  Flame,
  Sparkles,
  RotateCcw,
  Trophy,
  CheckCircle2,
  Volume2,
  Zap,
} from 'lucide-react';
import { speakChinese, recordAnswer, recordSkillPractice } from '../lib/hsk';
import {
  buildWordMatchingPairs,
  type WordMatchingCard,
  type WordMatchingRound,
} from '../lib/practice.mjs';
import { playSfx } from '../lib/audio-effects';
import type { VocabularyWord } from '../types';

interface WordMatchGameProps {
  words: VocabularyWord[];
  onComplete?: (stats: { matchedPairs: number; points: number; maxStreak: number }) => void;
  onExit?: () => void;
  recordVocabularyProgress?: boolean;
  durationSeconds?: number;
}

const DEFAULT_DURATION_SECONDS = 30;

export const WordMatchGame: React.FC<WordMatchGameProps> = ({
  words,
  onComplete,
  onExit,
  recordVocabularyProgress = true,
  durationSeconds = DEFAULT_DURATION_SECONDS,
}) => {
  const totalTimeMs = durationSeconds * 1000;
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');
  const [timeLeftMs, setTimeLeftMs] = useState(totalTimeMs);
  const [totalMatched, setTotalMatched] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [floatingXp, setFloatingXp] = useState<{ id: number; text: string; x: number; y: number }[]>([]);

  // Current 5-pair round
  const [currentRound, setCurrentRound] = useState<WordMatchingRound | null>(null);
  const [matchedWordIds, setMatchedWordIds] = useState<Set<string>>(new Set());
  const [selectedCard, setSelectedCard] = useState<WordMatchingCard | null>(null);
  const [mismatchedCardIds, setMismatchedCardIds] = useState<string[]>([]);
  const [justMatchedId, setJustMatchedId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pointCounterRef = useRef(0);
  const completionRecordedRef = useRef(false);

  // Eligible pool with hanzi and meaning
  const eligibleWords = useMemo(() => {
    return words.filter((w) => !!w.hanzi && !!w.meaning);
  }, [words]);

  const loadNewRound = useCallback(() => {
    if (eligibleWords.length === 0) return;
    const newRound = buildWordMatchingPairs(eligibleWords, 5);
    setCurrentRound(newRound);
    setMatchedWordIds(new Set());
    setSelectedCard(null);
    setMismatchedCardIds([]);
  }, [eligibleWords]);

  // Start / restart game
  const startGame = useCallback(() => {
    completionRecordedRef.current = false;
    setTimeLeftMs(totalTimeMs);
    setTotalMatched(0);
    setStreak(0);
    setMaxStreak(0);
    setGameState('playing');
    setFloatingXp([]);
    loadNewRound();
  }, [loadNewRound, totalTimeMs]);

  // Initial load
  useEffect(() => {
    startGame();
  }, [startGame]);

  // Timer loop
  useEffect(() => {
    if (gameState !== 'playing') {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    const interval = 100;
    timerRef.current = setInterval(() => {
      setTimeLeftMs((prev) => {
        if (prev <= interval) {
          clearInterval(timerRef.current!);
          setGameState('gameover');
          playSfx('victory');
          return 0;
        }
        return prev - interval;
      });
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Trigger onComplete when game finishes
  useEffect(() => {
    if (gameState === 'gameover' && !completionRecordedRef.current) {
      completionRecordedRef.current = true;
      const points = totalMatched * 10;
      recordSkillPractice('matching', Math.min(100, totalMatched * 20));
      onComplete?.({
        matchedPairs: totalMatched,
        points,
        maxStreak,
      });
    }
  }, [gameState, totalMatched, maxStreak, onComplete]);

  // Handle Card Click
  const handleCardClick = (card: WordMatchingCard, event: React.MouseEvent) => {
    if (gameState !== 'playing') return;
    if (matchedWordIds.has(card.wordId)) return;
    if (mismatchedCardIds.length > 0) return;

    // First card selected
    if (!selectedCard) {
      setSelectedCard(card);
      playSfx('click');
      return;
    }

    // Clicked the exact same card -> unselect
    if (selectedCard.id === card.id) {
      setSelectedCard(null);
      playSfx('click');
      return;
    }

    // Clicked same column type -> switch selection
    if (selectedCard.type === card.type) {
      setSelectedCard(card);
      playSfx('click');
      return;
    }

    // MATCH CHECK!
    if (selectedCard.wordId === card.wordId) {
      // Correct match
      const wordId = card.wordId;
      const hanziText = card.type === 'hanzi' ? card.text : selectedCard.text;

      playSfx('correct');
      speakChinese(hanziText);
      if (recordVocabularyProgress) recordAnswer(card.word.id, true);

      // Trigger a local floating score effect at the click coordinate.
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const newPointId = ++pointCounterRef.current;
        setFloatingXp((prev) => [...prev, { id: newPointId, text: '+10 điểm', x, y }]);
        setTimeout(() => {
          setFloatingXp((prev) => prev.filter((item) => item.id !== newPointId));
        }, 850);
      }

      setMatchedWordIds((prev) => {
        const next = new Set(prev);
        next.add(wordId);
        return next;
      });

      setJustMatchedId(wordId);
      setTimeout(() => setJustMatchedId(null), 600);

      setSelectedCard(null);
      setTotalMatched((prev) => prev + 1);

      const nextStreak = streak + 1;
      setStreak(nextStreak);
      if (nextStreak > maxStreak) {
        setMaxStreak(nextStreak);
      }
      if (nextStreak >= 3) {
        playSfx('combo');
      }

      // If all 5 pairs matched in current round -> load next round!
      if (matchedWordIds.size + 1 === 5) {
        setTimeout(() => {
          loadNewRound();
        }, 350);
      }
    } else {
      // Wrong match
      playSfx('wrong');
      setStreak(0);
      setMismatchedCardIds([selectedCard.id, card.id]);
      setTimeout(() => {
        setMismatchedCardIds([]);
        setSelectedCard(null);
      }, 500);
    }
  };

  // Time formatting
  const secondsLeft = Math.ceil(timeLeftMs / 1000);
  const timeProgressPercent = Math.max(0, (timeLeftMs / totalTimeMs) * 100);

  // Time bar color
  const timerBarColor =
    timeLeftMs > totalTimeMs * 0.5
      ? 'from-emerald-500 to-teal-400'
      : timeLeftMs > totalTimeMs * 0.25
        ? 'from-amber-500 to-yellow-400'
        : 'from-rose-500 to-red-600 animate-pulse';

  if (eligibleWords.length < 5) {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 text-center">
        <Trophy className="mx-auto mb-3 h-12 w-12 text-muted" />
        <h3 className="text-xl font-bold text-ink">Chưa đủ từ vựng</h3>
        <p className="mt-2 text-sm text-muted">
          Cần ít nhất 5 từ vựng có nghĩa để kích hoạt trò chơi Nối từ phản xạ {durationSeconds} giây.
        </p>
        {onExit && (
          <button
            type="button"
            onClick={onExit}
            className="mt-6 rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark transition-all cursor-pointer"
          >
            Quay lại
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-2xl rounded-3xl border border-line bg-white p-5 sm:p-7 shadow-sm select-none"
    >
      {/* Floating local-score animation badges */}
      {floatingXp.map((item) => (
        <div
          key={item.id}
          className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2 font-black text-amber-500 font-mono text-xl sm:text-2xl drop-shadow-md animate-float-up-fade"
          style={{ left: item.x, top: item.y }}
        >
          {item.text}
        </div>
      ))}

      {/* GAME OVER SUMMARY VIEW */}
      {gameState === 'gameover' ? (
        <div className="py-6 text-center animate-fadeIn">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 border border-amber-200 text-amber-500 shadow-md">
            <Trophy className="h-10 w-10" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Hết {durationSeconds} giây · Tổng kết vinh danh
          </span>
          <h2 className="mt-1 font-display text-3xl font-black text-slate-900 tracking-tight">
            Thành Tích Phản Xạ!
          </h2>

          <div className="my-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-sky-50/70 border border-sky-200/80 p-4">
              <div className="text-[11px] font-bold text-sky-700">Cặp nối đúng</div>
              <div className="font-mono text-3xl font-black text-sky-950 mt-1">
                {totalMatched}
              </div>
            </div>

            <div className="rounded-2xl bg-amber-50/70 border border-amber-200/80 p-4">
              <div className="text-[11px] font-bold text-amber-700">Điểm phản xạ</div>
              <div className="font-mono text-3xl font-black text-amber-950 mt-1">
                +{totalMatched * 10}
              </div>
            </div>

            <div className="rounded-2xl bg-rose-50/70 border border-rose-200/80 p-4">
              <div className="text-[11px] font-bold text-rose-700">Combo đỉnh nhất</div>
              <div className="font-mono text-3xl font-black text-rose-950 mt-1">
                {maxStreak}🔥
              </div>
            </div>
          </div>

          <p className="text-xs text-muted max-w-md mx-auto leading-relaxed mb-6">
            Tốc độ trung bình: {(totalMatched * (60 / durationSeconds)).toFixed(1)} từ/phút. Thường xuyên luyện phản xạ sẽ giúp bạn ghi nhớ từ vựng tự nhiên và nhạy bén hơn.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={startGame}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-brand hover:from-sky-600 hover:to-brand-dark px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/20 active:scale-98 transition-all cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Chơi lại {durationSeconds} giây</span>
            </button>
            {onExit && (
              <button
                type="button"
                onClick={onExit}
                className="rounded-2xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink hover:bg-page active:scale-98 transition-all cursor-pointer"
              >
                Đổi chế độ luyện tập
              </button>
            )}
          </div>
        </div>
      ) : (
        /* ACTIVE GAME VIEW */
        <div>
          {/* Top HUD: Countdown Timer & Streaks */}
          <div className="mb-4 flex items-center justify-between gap-4">
            {/* Timer Display */}
            <div className="flex items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-2xl border transition-colors ${
                  secondsLeft <= 5
                    ? 'border-red-400 bg-red-50 text-red-600 animate-pulse'
                    : 'border-slate-200 bg-slate-50 text-slate-700'
                }`}
              >
                <Timer className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-mono text-2xl font-black leading-none ${
                      secondsLeft <= 5 ? 'text-red-600 animate-pulse' : 'text-slate-900'
                    }`}
                  >
                    {secondsLeft}
                  </span>
                  <span className="text-xs font-semibold text-muted">giây</span>
                </div>
                <div className="text-[10px] text-muted font-medium">Thời gian còn lại</div>
              </div>
            </div>

            {/* Score & Combo */}
            <div className="flex items-center gap-2 sm:gap-3">
              {streak >= 2 && (
                <div className="inline-flex items-center gap-1 rounded-xl bg-amber-50 border border-amber-200/80 px-2.5 py-1 text-xs font-extrabold text-amber-700 animate-bounce">
                  <Flame className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  <span>Combo x{streak}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-800">
                <Zap className="h-3.5 w-3.5 text-sky-600" />
                <span>{totalMatched} cặp</span>
              </div>

              <div className="flex items-center gap-1 rounded-xl bg-amber-100/70 px-3 py-1.5 text-xs font-black font-mono text-amber-900">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span>+{totalMatched * 10} điểm</span>
              </div>
            </div>
          </div>

          {/* Progress bar countdown */}
          <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full bg-gradient-to-r ${timerBarColor} transition-all duration-100 ease-linear rounded-full`}
              style={{ width: `${timeProgressPercent}%` }}
            />
          </div>

          {/* Cards Grid: 2 Columns */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Column Left: Hanzi Cards */}
            <div className="flex flex-col gap-2.5">
              <div className="text-center text-xs font-bold uppercase tracking-wider text-muted pb-1">
                Chữ Hán
              </div>
              {currentRound?.leftCards.map((card) => {
                const isMatched = matchedWordIds.has(card.wordId);
                const isSelected = selectedCard?.id === card.id;
                const isMismatched = mismatchedCardIds.includes(card.id);
                const isJustMatched = justMatchedId === card.wordId;

                return (
                  <button
                    key={card.id}
                    type="button"
                    disabled={isMatched}
                    onClick={(e) => handleCardClick(card, e)}
                    className={`relative min-h-[58px] sm:min-h-[64px] rounded-2xl border-2 px-3 py-2.5 text-center transition-all cursor-pointer touch-manipulation active:scale-98 ${
                      isMatched
                        ? 'border-emerald-200 bg-emerald-50/60 opacity-35 pointer-events-none'
                        : isMismatched
                          ? 'animate-shake border-red-500 bg-red-50 text-red-700 shadow-sm'
                          : isSelected
                            ? 'border-brand bg-tint/80 ring-2 ring-brand/30 shadow-sm -translate-y-0.5'
                            : isJustMatched
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                              : 'border-slate-200 bg-white hover:border-brand/50 hover:bg-slate-50/80 shadow-2xs'
                    }`}
                  >
                    <div className="font-hanzi text-2xl sm:text-3xl font-bold text-ink">
                      {card.text}
                    </div>
                    {isMatched && (
                      <div className="absolute right-2 top-2 text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Column Right: Meaning Cards */}
            <div className="flex flex-col gap-2.5">
              <div className="text-center text-xs font-bold uppercase tracking-wider text-muted pb-1">
                Nghĩa Việt
              </div>
              {currentRound?.rightCards.map((card) => {
                const isMatched = matchedWordIds.has(card.wordId);
                const isSelected = selectedCard?.id === card.id;
                const isMismatched = mismatchedCardIds.includes(card.id);
                const isJustMatched = justMatchedId === card.wordId;

                return (
                  <button
                    key={card.id}
                    type="button"
                    disabled={isMatched}
                    onClick={(e) => handleCardClick(card, e)}
                    className={`relative min-h-[58px] sm:min-h-[64px] rounded-2xl border-2 px-3 py-2.5 text-center flex flex-col items-center justify-center transition-all cursor-pointer touch-manipulation active:scale-98 ${
                      isMatched
                        ? 'border-emerald-200 bg-emerald-50/60 opacity-35 pointer-events-none'
                        : isMismatched
                          ? 'animate-shake border-red-500 bg-red-50 text-red-700 shadow-sm'
                          : isSelected
                            ? 'border-brand bg-tint/80 ring-2 ring-brand/30 shadow-sm -translate-y-0.5'
                            : isJustMatched
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                              : 'border-slate-200 bg-white hover:border-brand/50 hover:bg-slate-50/80 shadow-2xs'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-bold text-ink line-clamp-2 leading-tight">
                      {card.text}
                    </div>
                    <div className="text-[11px] text-muted font-sans mt-0.5">
                      {card.pinyin}
                    </div>
                    {isMatched && (
                      <div className="absolute right-2 top-2 text-emerald-600">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Helpful Hint footer */}
          <div className="mt-6 flex items-center justify-between text-xs text-muted">
            <span className="italic">
              Chạm 1 thẻ chữ Hán và 1 thẻ nghĩa tiếng Việt tương ứng.
            </span>
            {onExit && (
              <button
                type="button"
                onClick={onExit}
                className="font-semibold text-slate-500 hover:text-ink transition-colors cursor-pointer"
              >
                Kết thúc sớm
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
