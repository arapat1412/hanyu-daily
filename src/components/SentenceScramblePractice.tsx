import React, { useState, useMemo, useEffect } from 'react';
import {
  Volume2,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { speakChinese, recordAnswer, recordSkillPractice } from '../lib/hsk';
import {
  buildSentenceScrambleQuestions,
  type SentenceScrambleQuestion,
  type ScrambleToken,
} from '../lib/practice.mjs';
import { playSfx } from '../lib/audio-effects';
import type { VocabularyWord } from '../types';

interface SentenceScramblePracticeProps {
  words: VocabularyWord[];
  onComplete?: (score: number) => void;
  onExit?: () => void;
}

export const SentenceScramblePractice: React.FC<SentenceScramblePracticeProps> = ({
  words,
  onComplete,
  onExit,
}) => {
  const questions: SentenceScrambleQuestion[] = useMemo(() => {
    return buildSentenceScrambleQuestions(words);
  }, [words]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTokens, setSelectedTokens] = useState<ScrambleToken[]>([]);
  const [availableTokens, setAvailableTokens] = useState<ScrambleToken[]>([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState('');

  const currentQ = questions[currentIndex];

  // Initialize tokens for current question
  useEffect(() => {
    if (currentQ) {
      setSelectedTokens([]);
      setAvailableTokens([...currentQ.scrambledTokens]);
      setChecked(false);
      setIsCorrect(null);
      setIsShaking(false);
      setError('');
    }
  }, [currentIndex, currentQ]);

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-3xl border border-line bg-white p-8 text-center">
        <AlertCircle className="mx-auto mb-3 h-12 w-12 text-amber-500" />
        <h3 className="text-xl font-bold text-ink">Chưa có câu ví dụ phù hợp</h3>
        <p className="mt-2 text-sm text-muted">
          Danh sách từ đang chọn chưa có câu ví dụ đạt chuẩn để tạo bài sắp xếp câu.
        </p>
        {onExit && (
          <button
            type="button"
            onClick={onExit}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-brand-dark transition-all cursor-pointer"
          >
            Quay lại
          </button>
        )}
      </div>
    );
  }

  const handleSelectFromBank = (token: ScrambleToken) => {
    if (checked && isCorrect) return;
    playSfx('click');
    setAvailableTokens((prev) => prev.filter((t) => t.id !== token.id));
    setSelectedTokens((prev) => [...prev, token]);
    setIsCorrect(null);
  };

  const handleRemoveFromSelected = (token: ScrambleToken) => {
    if (checked && isCorrect) return;
    playSfx('click');
    setSelectedTokens((prev) => prev.filter((t) => t.id !== token.id));
    setAvailableTokens((prev) => [...prev, token]);
    setIsCorrect(null);
  };

  const handleReset = () => {
    playSfx('click');
    setSelectedTokens([]);
    setAvailableTokens([...currentQ.scrambledTokens]);
    setIsCorrect(null);
    setChecked(false);
  };

  const handleCheck = () => {
    if (selectedTokens.length === 0) return;

    const assembled = selectedTokens.map((t) => t.text).join('');
    const target = currentQ.tokens.join('');
    const correct = assembled === target;

    setChecked(true);
    setIsCorrect(correct);
    setResults((previous) => {
      if (previous[currentIndex] !== undefined) return previous;
      const next = [...previous];
      next[currentIndex] = correct;
      return next;
    });

    if (correct) {
      playSfx('correct');
      speakChinese(currentQ.fullSentence, setError);
      recordAnswer(currentQ.word.id, true);
    } else {
      playSfx('wrong');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      recordAnswer(currentQ.word.id, false);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      const correctCount = results.filter(Boolean).length;
      const score = Math.round((correctCount / questions.length) * 100);
      setFinished(true);
      recordSkillPractice('scramble', score);
      onComplete?.(score);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setResults([]);
    setFinished(false);
  };

  if (finished) {
    const correctCount = results.filter(Boolean).length;
    const score = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8 text-center max-w-xl mx-auto shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-500">
          <Trophy className="h-8 w-8" />
        </div>
        <h2 className="text-2xl font-bold text-ink">Hoàn thành Sắp xếp câu!</h2>
        <p className="my-4 text-5xl font-black text-brand font-mono">{score}%</p>
        <p className="text-sm text-muted">
          Đúng ngay lần đầu {correctCount} / {questions.length} câu ví dụ
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={handleRestart}
            className="flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-xs hover:bg-brand-dark transition-all cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
            Luyện lại từ đầu
          </button>
          {onExit && (
            <button
              type="button"
              onClick={onExit}
              className="rounded-2xl border border-line bg-white px-6 py-3.5 text-sm font-bold text-ink hover:bg-page transition-all cursor-pointer"
            >
              Đổi chế độ luyện tập
            </button>
          )}
        </div>
      </div>
    );
  }

  const isAllPlaced = selectedTokens.length === currentQ.tokens.length;

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-line bg-white p-5 sm:p-8 shadow-sm">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs text-muted mb-3">
        <span className="font-semibold text-ink">
          Câu {currentIndex + 1} / {questions.length}
        </span>
        <span className="font-mono text-emerald-600 font-bold">
          {results.filter(Boolean).length} câu đúng lần đầu
        </span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full rounded-full bg-track overflow-hidden mb-6">
        <div
          className="h-full bg-gradient-to-r from-sky-500 to-brand transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + (checked && isCorrect ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Vietnamese Prompt & Audio Hint */}
      <div className="rounded-2xl bg-tint/60 border border-brand/20 p-4 sm:p-5 mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sắp xếp các từ theo câu dịch tiếng Việt</span>
        </div>
        <p className="text-base sm:text-lg font-bold text-ink leading-relaxed">
          “{currentQ.vietnamese}”
        </p>

        <div className="mt-3 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => speakChinese(currentQ.fullSentence, setError)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white text-brand border border-brand/25 text-xs font-semibold hover:bg-brand/5 active:scale-95 transition-all cursor-pointer touch-manipulation shadow-2xs"
            title="Nghe phát âm gợi ý"
          >
            <Volume2 className="w-4 h-4" />
            <span>Nghe câu mẫu</span>
          </button>
          <span className="text-xs text-muted">
            Từ trọng tâm: <strong className="font-hanzi text-ink">{currentQ.word.hanzi}</strong> ({currentQ.word.pinyin})
          </span>
        </div>
      </div>

      {/* Answer Dropzone */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-muted">
            Câu của bạn:
          </span>
          {selectedTokens.length > 0 && !isCorrect && (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-brand transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Đặt lại</span>
            </button>
          )}
        </div>

        <div
          className={`min-h-[76px] rounded-2xl border-2 p-3 sm:p-4 flex flex-wrap items-center gap-2 transition-all duration-200 ${
            isShaking ? 'animate-shake border-red-500 bg-red-50/50' : ''
          } ${
            isCorrect === true
              ? 'border-emerald-500 bg-emerald-50/50 ring-2 ring-emerald-400/20'
              : isCorrect === false
                ? 'border-red-400 bg-red-50/30'
                : selectedTokens.length > 0
                  ? 'border-brand/40 bg-page/40'
                  : 'border-dashed border-line bg-page/30'
          }`}
        >
          {selectedTokens.length === 0 ? (
            <span className="text-xs sm:text-sm text-muted italic w-full text-center py-3 select-none">
              Chạm vào các mảnh từ vựng bên dưới để xếp câu...
            </span>
          ) : (
            <>
              {selectedTokens.map((token) => (
                <button
                  key={token.id}
                  type="button"
                  onClick={() => handleRemoveFromSelected(token)}
                  disabled={isCorrect === true}
                  className={`group relative inline-flex items-center justify-center px-3.5 py-2 rounded-xl font-hanzi font-bold text-lg sm:text-xl transition-all active:scale-95 cursor-pointer touch-manipulation min-h-[44px] shadow-xs ${
                    isCorrect === true
                      ? 'bg-emerald-600 text-white border border-emerald-700 pointer-events-none'
                      : isCorrect === false
                        ? 'bg-red-100 text-red-900 border border-red-300 hover:bg-red-200'
                        : 'bg-white text-ink border-2 border-brand/30 hover:border-brand hover:bg-brand/5 text-slate-900'
                  }`}
                  title="Bấm để đưa về ngân hàng từ"
                >
                  <span>{token.text}</span>
                  {isCorrect !== true && (
                    <span className="ml-1 text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      ✕
                    </span>
                  )}
                </button>
              ))}

              {/* Fixed Ending Punctuation */}
              {currentQ.punctuation && (
                <span className="inline-flex items-center justify-center px-2 py-1 font-hanzi text-xl font-bold text-slate-400 select-none">
                  {currentQ.punctuation}
                </span>
              )}
            </>
          )}
        </div>
      </div>

      {/* Word Bank (Scrambled Pieces) */}
      <div className="mb-6">
        <div className="text-xs font-bold uppercase tracking-wider text-muted mb-2.5">
          Ngân hàng từ ghép:
        </div>
        <div className="min-h-[64px] rounded-2xl bg-slate-50 border border-slate-200/80 p-3 sm:p-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {availableTokens.length === 0 ? (
            <span className="text-xs text-muted italic select-none">
              Đã đưa toàn bộ từ lên ô ghép câu.
            </span>
          ) : (
            availableTokens.map((token) => (
              <button
                key={token.id}
                type="button"
                onClick={() => handleSelectFromBank(token)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white border-2 border-slate-200 hover:border-brand hover:bg-tint/40 text-ink font-hanzi font-bold text-lg sm:text-xl shadow-xs active:scale-95 transition-all cursor-pointer touch-manipulation min-h-[46px] hover:shadow-sm"
              >
                {token.text}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Feedback Banner */}
      {checked && (
        <div
          role="status"
          className={`mb-6 rounded-2xl p-4 text-sm transition-all ${
            isCorrect
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
              : 'bg-red-50 border border-red-200 text-red-900'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              )}
              <strong className="text-base font-bold">
                {isCorrect ? 'Tuyệt vời! Bạn đã sắp xếp đúng câu.' : 'Chưa đúng, hãy thử sắp xếp lại!'}
              </strong>
            </div>
            {isCorrect && (
              <button
                type="button"
                onClick={() => speakChinese(currentQ.fullSentence, setError)}
                className="p-1.5 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                title="Nghe lại câu"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-2.5 pt-2.5 border-t border-current/15">
            <p className="font-hanzi text-lg font-bold">
              {currentQ.fullSentence}
            </p>
            {currentQ.pinyin && (
              <p className="font-sans text-xs text-slate-600 mt-0.5 font-medium">
                {currentQ.pinyin}
              </p>
            )}
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="mb-4 text-xs text-red-600">
          {error}
        </p>
      )}

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        {checked && isCorrect ? (
          <button
            type="button"
            onClick={handleNext}
            className="w-full min-h-[48px] rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>
              {currentIndex === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCheck}
            disabled={selectedTokens.length === 0}
            className="w-full min-h-[48px] rounded-2xl bg-brand hover:bg-brand-dark disabled:opacity-40 text-white font-bold text-sm shadow-md shadow-brand/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            {isAllPlaced ? 'Kiểm tra câu' : 'Kiểm tra'}
          </button>
        )}
      </div>

      {onExit && (
        <button
          type="button"
          onClick={onExit}
          className="mx-auto mt-4 block text-xs text-muted hover:text-ink transition-colors cursor-pointer"
        >
          Quay lại chọn chế độ
        </button>
      )}
    </section>
  );
};
