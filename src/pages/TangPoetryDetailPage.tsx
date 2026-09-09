import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Volume2,
  BookOpen,
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  HelpCircle,
  PenTool,
  ChevronLeft,
  ChevronRight,
  Share2,
  Check,
  Feather,
  Eye,
} from "lucide-react";
import {
  TANG_POEMS,
  markPoemAsRead,
  recordPoemQuizPass,
  getPoetryProgress,
} from "../data/tangPoems";
import { speakChinese } from "../lib/hsk";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import type { VocabularyWord } from "../types";

export const TangPoetryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find poem and index
  const currentIndex = useMemo(() => {
    return TANG_POEMS.findIndex((item) => item.id === id);
  }, [id]);

  const poem = currentIndex !== -1 ? TANG_POEMS[currentIndex] : null;
  const prevPoem = currentIndex > 0 ? TANG_POEMS[currentIndex - 1] : null;
  const nextPoem = currentIndex < TANG_POEMS.length - 1 ? TANG_POEMS[currentIndex + 1] : null;

  // State
  const [userProgress, setUserProgress] = useState(getPoetryProgress);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showSino, setShowSino] = useState(true);
  const [showLiteral, setShowLiteral] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [xpEarned, setXpEarned] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);

  // Mark poem as read on open
  useEffect(() => {
    if (poem) {
      const updated = markPoemAsRead(poem.id);
      setUserProgress(updated);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setXpEarned(null);
    }
  }, [poem?.id]);

  if (!poem) {
    return (
      <div className="mx-auto min-h-[60vh] max-w-xl px-4 py-20 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-muted/50" />
        <h2 className="mt-3 text-lg font-bold text-ink">Không tìm thấy bài thơ này</h2>
        <p className="mt-1 text-xs text-muted">Vui lòng quay lại danh sách để chọn bài thơ khác.</p>
        <Link
          to="/kham-pha/tho-duong"
          className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Về danh sách thơ Đường</span>
        </Link>
      </div>
    );
  }

  const isAlreadyPassed = userProgress.quizPassedIds.includes(poem.id);

  // Recite entire poem
  const handleRecitePoem = () => {
    const fullText = poem.lines.map((l) => l.chinese).join("，");
    speakChinese(fullText);
  };

  const handleAnswerOption = (index: number) => {
    if (isSubmitted || isAlreadyPassed) return;
    setSelectedAnswer(index);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);

    if (selectedAnswer === poem.quiz.correctIndex) {
      const { progress: updated, justEarned } = recordPoemQuizPass(poem.id, 10);
      setUserProgress(updated);
      if (justEarned) {
        setXpEarned(10);
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleOpenStrokeModal = () => {
    setStrokeWord({
      id: poem.id,
      hanzi: poem.title,
      pinyin: poem.pinyinTitle,
      meaning: poem.sinoTitle,
      sinoVietnamese: poem.sinoTitle,
      partOfSpeech: "唐诗",
      hskLevel: "HSK 5",
    } as unknown as VocabularyWord);
  };

  return (
    <div className="min-h-screen bg-cream pb-28 selection:bg-brand/20 selection:text-brand-dark">
      {/* Top Header Banner */}
      <div className="border-b border-line/60 bg-gradient-to-b from-[#0B241C] via-[#13382D] to-[#1B4D3E] px-4 pt-6 pb-8 text-white shadow-md sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb row */}
          <div className="flex items-center justify-between">
            <Link
              to="/kham-pha/tho-duong"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              <span>Tuyển tập Thơ Đường</span>
            </Link>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white transition-all hover:bg-white/20"
              >
                {copiedLink ? <Check size={12} className="text-emerald-300" /> : <Share2 size={12} />}
                <span>{copiedLink ? "Đã chép link" : "Chia sẻ"}</span>
              </button>

              <span className="rounded-md bg-emerald-400/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
                {currentIndex + 1} / {TANG_POEMS.length}
              </span>
            </div>
          </div>

          {/* Hero Banner with Poem Title */}
          <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-white/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-200">
                  {poem.form}
                </span>
                <span className="rounded-md bg-black/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-100">
                  {poem.authorDynasty} · {poem.author}
                </span>
              </div>

              {/* Hanzi Big */}
              <div className="mt-3 flex items-baseline gap-3">
                <h1 className="font-hanzi text-4xl font-black tracking-wider text-white sm:text-5xl">
                  {poem.title}
                </h1>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRecitePoem}
                    title="Nghe ngâm toàn bài thơ"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Volume2 size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenStrokeModal}
                    title="Xem thứ tự nét viết tựa đề"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
                  >
                    <PenTool size={15} />
                  </button>
                </div>
              </div>

              {/* Pinyin and Sino-Vietnamese */}
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-emerald-100">
                <span className="font-sans font-bold text-amber-300 text-base">{poem.pinyinTitle}</span>
                <span className="opacity-60">•</span>
                <span className="font-bold text-white text-base">{poem.sinoTitle}</span>
              </div>
            </div>

            {/* Status card if passed */}
            {isAlreadyPassed && (
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2.5 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-emerald-300">Đã vượt thử thách thi ca</div>
                  <div className="text-[10px] text-emerald-200">+10 XP đã ghi nhận</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Narrative Container */}
      <div className="mx-auto mt-6 max-w-4xl px-4 sm:px-8 space-y-6">
        {/* ================= 1. NGUYÊN TÁC THƠ & BÍNH ÂM ================= */}
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
          {/* Controls to toggle Pinyin / Sino / Literal */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-line pb-4">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
              <Feather className="h-5 w-5 text-[#1B4D3E]" />
              <span>Nguyên Tác Thi Ca (唐诗原作)</span>
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setShowPinyin(!showPinyin)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  showPinyin ? "bg-[#1B4D3E] text-white" : "bg-cream text-muted hover:bg-tint"
                }`}
              >
                Bính âm (拼)
              </button>
              <button
                type="button"
                onClick={() => setShowSino(!showSino)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  showSino ? "bg-[#1B4D3E] text-white" : "bg-cream text-muted hover:bg-tint"
                }`}
              >
                Hán Việt (越)
              </button>
              <button
                type="button"
                onClick={() => setShowLiteral(!showLiteral)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all ${
                  showLiteral ? "bg-[#1B4D3E] text-white" : "bg-cream text-muted hover:bg-tint"
                }`}
              >
                Dịch nghĩa (义)
              </button>
            </div>
          </div>

          {/* Verses Display */}
          <div className="mt-8 space-y-6 text-center">
            {poem.lines.map((line, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-3 transition-colors hover:bg-emerald-50/40"
              >
                {/* Chinese Characters */}
                <div className="flex items-center justify-center gap-3">
                  <span className="font-hanzi text-2xl sm:text-3xl font-black tracking-widest text-ink group-hover:text-[#1B4D3E]">
                    {line.chinese}
                  </span>
                  <button
                    type="button"
                    onClick={() => speakChinese(line.chinese)}
                    title="Nghe phát âm câu thơ này"
                    className="opacity-40 group-hover:opacity-100 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white transition-all"
                  >
                    <Volume2 size={13} />
                  </button>
                </div>

                {/* Pinyin */}
                {showPinyin && (
                  <div className="mt-1 font-sans text-xs font-bold text-emerald-800 sm:text-sm">
                    {line.pinyin}
                  </div>
                )}

                {/* Sino-Vietnamese */}
                {showSino && (
                  <div className="mt-0.5 text-xs font-bold text-slate-600 sm:text-sm">
                    {line.sinoVietnamese}
                  </div>
                )}

                {/* Literal Meaning */}
                {showLiteral && (
                  <div className="mt-1 text-xs italic text-muted max-w-md mx-auto">
                    {line.literal}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Recite Button */}
          <div className="mt-8 flex justify-center border-t border-line/60 pt-6">
            <button
              type="button"
              onClick={handleRecitePoem}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1B4D3E] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#13382D] active:scale-95"
            >
              <Volume2 size={16} />
              <span>Ngâm toàn bộ bài thơ</span>
            </button>
          </div>
        </div>

        {/* ================= 2. BẢN DỊCH THƠ KINH ĐIỂN ================= */}
        <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-cream/60 to-white p-6 shadow-card sm:p-8">
          <div className="flex items-center justify-between border-b border-amber-200/60 pb-3">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-amber-950 sm:text-lg">
              <Sparkles className="h-5 w-5 text-amber-600" />
              <span>Bản Dịch Thơ Tiếng Việt</span>
            </h2>
            <span className="text-xs font-bold text-amber-800">
              {poem.poeticTranslator}
            </span>
          </div>

          <div className="mt-6 text-center">
            <div className="inline-block rounded-2xl bg-white/90 border border-amber-200/70 px-8 py-6 shadow-sm">
              <div className="font-ui text-base sm:text-lg font-semibold text-ink leading-loose whitespace-pre-line tracking-normal">
                {poem.poeticTranslation}
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. BỐI CẢNH & CẢM THỤ NGHỆ THUẬT ================= */}
        <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8 space-y-6">
          {/* Background */}
          <div>
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
              <BookOpen className="h-4 w-4 text-[#1B4D3E]" />
              <span>Bối Cảnh Sáng Tác</span>
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#2C2416] sm:text-base">
              {poem.background}
            </p>
          </div>

          {/* Literary Appreciation */}
          <div className="border-t border-line/60 pt-5">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted">
              <Sparkles className="h-4 w-4 text-amber-600" />
              <span>Bình Thơ & Triết Lý Nghệ Thuật</span>
            </h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-[#2C2416] sm:text-base">
              {poem.appreciation}
            </p>
          </div>
        </div>

        {/* ================= 4. THỬ THÁCH THI CA (QUIZ) ================= */}
        <div className="rounded-3xl border-2 border-dashed border-[#1B4D3E]/30 bg-white p-5 shadow-card sm:p-7">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
              <HelpCircle className="h-5 w-5 text-[#1B4D3E]" />
              <span>Thử Thách Thi Ca (Mini Quiz)</span>
            </h2>
            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200">
              <Zap size={13} className="fill-amber-500" />
              <span>+10 XP</span>
            </span>
          </div>

          <p className="mt-4 text-sm font-bold text-ink sm:text-base">
            {poem.quiz.question}
          </p>

          {/* Options */}
          <div className="mt-4 space-y-2.5">
            {poem.quiz.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = isSubmitted && idx === poem.quiz.correctIndex;
              const isWrong = isSubmitted && isSelected && idx !== poem.quiz.correctIndex;

              let style = "border-line bg-cream/40 text-ink hover:bg-cream";
              if (isSelected && !isSubmitted) {
                style = "border-[#1B4D3E] bg-emerald-50/50 text-[#1B4D3E] font-bold";
              } else if (isCorrect) {
                style = "border-emerald-500 bg-emerald-50 text-emerald-900 font-bold";
              } else if (isWrong) {
                style = "border-rose-500 bg-rose-50 text-rose-900 line-through opacity-80";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted || isAlreadyPassed}
                  onClick={() => handleAnswerOption(idx)}
                  className={`flex w-full items-center justify-between rounded-2xl border p-3.5 text-left text-xs sm:text-sm transition-all duration-200 ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />}
                  {isWrong && <XCircle className="h-4 w-4 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Submit button & Result */}
          {!isSubmitted && !isAlreadyPassed && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                disabled={selectedAnswer === null}
                onClick={handleSubmitQuiz}
                className="rounded-xl bg-[#1B4D3E] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#13382D] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {/* Feedback section */}
          {(isSubmitted || isAlreadyPassed) && (
            <div className="mt-5 rounded-2xl border border-line bg-cream/60 p-4">
              <div className="flex items-center gap-2">
                {isAlreadyPassed || selectedAnswer === poem.quiz.correctIndex ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-800 sm:text-sm">
                      Chính xác! {xpEarned ? `Chúc mừng bạn đã nhận được +${xpEarned} XP!` : ""}
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-5 w-5 text-rose-600" />
                    <span className="text-xs font-bold text-rose-800 sm:text-sm">
                      Chưa chính xác! Hãy đọc lại bài thơ và thử lại nhé.
                    </span>
                  </>
                )}
              </div>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                <strong>Giải thích:</strong> {poem.quiz.explanation}
              </p>
            </div>
          )}
        </div>

        {/* ================= BOTTOM NAVIGATION ================= */}
        <div className="flex items-center justify-between pt-4">
          {prevPoem ? (
            <Link
              to={`/kham-pha/tho-duong/${prevPoem.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-bold text-ink shadow-xs hover:bg-cream transition-all"
            >
              <ChevronLeft size={16} />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-muted font-normal">Bài trước</div>
                <div>{prevPoem.title} · {prevPoem.sinoTitle}</div>
              </div>
              <span className="sm:hidden">Bài trước</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/kham-pha/tho-duong"
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-bold text-muted hover:text-ink transition-all"
          >
            Danh sách thơ
          </Link>

          {nextPoem ? (
            <Link
              to={`/kham-pha/tho-duong/${nextPoem.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#1B4D3E] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#13382D] transition-all"
            >
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-emerald-200 font-normal">Bài kế tiếp</div>
                <div>{nextPoem.title} · {nextPoem.sinoTitle}</div>
              </div>
              <span className="sm:hidden">Bài sau</span>
              <ChevronRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Hanzi Stroke Modal */}
      <HanziStrokeModal
        isOpen={!!strokeWord}
        onClose={() => setStrokeWord(null)}
        word={strokeWord}
      />
    </div>
  );
};
