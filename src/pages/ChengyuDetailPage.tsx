import React, { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
} from "lucide-react";
import {
  CHENGYU_STORIES,
  markStoryAsRead,
  recordQuizPass,
  getChengyuProgress,
} from "../data/chengyuStories";
import { speakChinese } from "../lib/hsk";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import type { VocabularyWord } from "../types";

export const ChengyuDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find current story and index
  const currentIndex = useMemo(() => {
    return CHENGYU_STORIES.findIndex((item) => item.id === id);
  }, [id]);

  const story = currentIndex !== -1 ? CHENGYU_STORIES[currentIndex] : null;

  // Previous and next stories
  const prevStory = currentIndex > 0 ? CHENGYU_STORIES[currentIndex - 1] : null;
  const nextStory = currentIndex < CHENGYU_STORIES.length - 1 ? CHENGYU_STORIES[currentIndex + 1] : null;

  // State
  const [userProgress, setUserProgress] = useState(getChengyuProgress);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [xpEarned, setXpEarned] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);

  // Mark story as read on open
  useEffect(() => {
    if (story) {
      const updated = markStoryAsRead(story.id);
      setUserProgress(updated);
      setSelectedAnswer(null);
      setIsSubmitted(false);
      setXpEarned(null);
    }
  }, [story?.id]);

  if (!story) {
    return (
      <div className="mx-auto min-h-[60vh] max-w-xl px-4 py-20 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-muted/50" />
        <h2 className="mt-3 text-lg font-bold text-ink">Không tìm thấy điển cố thành ngữ này</h2>
        <p className="mt-1 text-xs text-muted">Vui lòng quay lại danh sách để chọn câu chuyện khác.</p>
        <Link
          to="/kham-pha/thanh-ngu-dien-co"
          className="mt-5 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-sm"
        >
          <ArrowLeft size={14} />
          <span>Về danh sách thành ngữ</span>
        </Link>
      </div>
    );
  }

  const isAlreadyPassed = userProgress.quizPassedIds.includes(story.id);

  // Handle quiz submit
  const handleAnswerOption = (index: number) => {
    if (isSubmitted || isAlreadyPassed) return;
    setSelectedAnswer(index);
  };

  const handleSubmitQuiz = () => {
    if (selectedAnswer === null || isSubmitted) return;
    setIsSubmitted(true);

    if (selectedAnswer === story.quiz.correctIndex) {
      const { progress: updated, justEarned } = recordQuizPass(story.id, 10);
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
      id: story.id,
      hanzi: story.hanzi,
      pinyin: story.pinyin,
      meaning: story.sinoVietnamese,
      sinoVietnamese: story.sinoVietnamese,
      partOfSpeech: "成语",
      hskLevel: story.hskLevel,
    } as unknown as VocabularyWord);
  };

  return (
    <div className="min-h-screen bg-cream pb-28 selection:bg-brand/20 selection:text-brand-dark">
      {/* Top Header Banner */}
      <div className="border-b border-line/60 bg-gradient-to-b from-[#380B16] via-[#5B1B25] to-[#7C2D37] px-4 pt-6 pb-8 text-white shadow-md sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb row */}
          <div className="flex items-center justify-between">
            <Link
              to="/kham-pha/thanh-ngu-dien-co"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-200 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} />
              <span>Tuyển tập Thành Ngữ</span>
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

              <span className="rounded-md bg-amber-400/20 px-2 py-0.5 text-[11px] font-bold text-amber-300">
                {currentIndex + 1} / {CHENGYU_STORIES.length}
              </span>
            </div>
          </div>

          {/* Hero Banner with Idiom Title */}
          <div className="mt-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-white/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-200">
                  {story.categoryLabel}
                </span>
                <span className="rounded-md bg-black/20 px-2 py-0.5 text-[11px] font-semibold text-rose-100">
                  {story.hskLevel}
                </span>
              </div>

              {/* Hanzi Big */}
              <div className="mt-3 flex items-baseline gap-3">
                <h1 className="font-hanzi text-4xl font-black tracking-wider text-white sm:text-5xl">
                  {story.hanzi}
                </h1>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => speakChinese(story.hanzi)}
                    title="Nghe phát âm chuẩn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-slate-900 shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Volume2 size={17} />
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenStrokeModal}
                    title="Xem thứ tự nét viết thuận bút"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-all hover:bg-white/20 active:scale-95"
                  >
                    <PenTool size={15} />
                  </button>
                </div>
              </div>

              {/* Pinyin and Sino-Vietnamese */}
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-rose-100">
                <span className="font-sans font-bold text-amber-300 text-base">{story.pinyin}</span>
                <span className="opacity-60">•</span>
                <span className="font-bold text-white text-base">{story.sinoVietnamese}</span>
              </div>
            </div>

            {/* Status card if passed */}
            {isAlreadyPassed && (
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2.5 backdrop-blur-sm">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-emerald-300">Đã vượt thử thách</div>
                  <div className="text-[10px] text-emerald-200">+10 XP đã ghi nhận</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Narrative Container */}
      <div className="mx-auto mt-6 max-w-4xl px-4 sm:px-8 space-y-6">
        {/* ================= 1. NGHĨA ĐEN & NGHĨA BÓNG ================= */}
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted">
            <Sparkles className="h-4 w-4 text-[#7C2D37]" />
            <span>Giải Nghĩa Thành Ngữ</span>
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Nghĩa đen (Chữ theo chữ)
              </div>
              <p className="mt-1.5 text-sm font-semibold text-ink leading-relaxed">
                {story.literalMeaning}
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-4">
              <div className="text-xs font-bold text-[#7C2D37] uppercase tracking-wide">
                Nghĩa bóng (Ý nghĩa sâu xa)
              </div>
              <p className="mt-1.5 text-sm font-semibold text-ink leading-relaxed">
                {story.figurativeMeaning}
              </p>
            </div>
          </div>
        </div>

        {/* ================= 2. CÂU CHUYỆN ĐIỂN TÍCH ================= */}
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-line pb-4">
            <h2 className="flex items-center gap-2 font-display text-lg font-black text-ink sm:text-xl">
              <BookOpen className="h-5 w-5 text-[#7C2D37]" />
              <span>Câu Chuyện Điển Cố (成语典故)</span>
            </h2>
            <span className="text-xs font-semibold text-muted">
              Xuất xứ: <strong className="text-ink">{story.origin}</strong>
            </span>
          </div>

          {/* Story Paragraphs */}
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#2C2416] sm:text-base">
            {story.story.split("\n\n").map((para, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {para}
              </p>
            ))}
          </div>

          {/* Moral Lesson Card */}
          <div className="mt-7 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-50/40 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-700">
                <Sparkles size={18} />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                  Bài Học Nhân Sinh & Ứng Dụng
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-950 leading-relaxed">
                  {story.moralLesson}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 3. VÍ DỤ ỨNG DỤNG HSK ================= */}
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted">
            <Volume2 className="h-4 w-4 text-brand" />
            <span>Ví Dụ Trong Giao Tiếp & Thi HSK</span>
          </h2>

          <div className="mt-3.5 rounded-2xl border border-line/70 bg-cream/40 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-hanzi text-lg font-bold text-ink sm:text-xl leading-relaxed">
                {story.example.chinese}
              </p>
              <button
                type="button"
                onClick={() => speakChinese(story.example.chinese)}
                title="Nghe câu ví dụ"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-all"
              >
                <Volume2 size={15} />
              </button>
            </div>
            <p className="mt-1.5 font-sans text-xs font-bold text-brand">
              {story.example.pinyin}
            </p>
            <p className="mt-2 text-xs font-medium text-muted sm:text-sm">
              {story.example.vietnamese}
            </p>
          </div>
        </div>

        {/* ================= 4. MINI QUIZ NHẬN XP ================= */}
        <div className="rounded-3xl border-2 border-dashed border-[#7C2D37]/30 bg-white p-5 shadow-card sm:p-7">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
              <HelpCircle className="h-5 w-5 text-[#7C2D37]" />
              <span>Thử Thách Trí Tuệ (Mini Quiz)</span>
            </h2>
            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-700 border border-amber-200">
              <Zap size={13} className="fill-amber-500" />
              <span>+10 XP</span>
            </span>
          </div>

          <p className="mt-4 text-sm font-bold text-ink sm:text-base">
            {story.quiz.question}
          </p>

          {/* Options */}
          <div className="mt-4 space-y-2.5">
            {story.quiz.options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = isSubmitted && idx === story.quiz.correctIndex;
              const isWrong = isSubmitted && isSelected && idx !== story.quiz.correctIndex;

              let style = "border-line bg-cream/40 text-ink hover:bg-cream";
              if (isSelected && !isSubmitted) {
                style = "border-[#7C2D37] bg-rose-50/50 text-[#7C2D37] font-bold";
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
                className="rounded-xl bg-[#7C2D37] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#5B1B25] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {/* Feedback section */}
          {(isSubmitted || isAlreadyPassed) && (
            <div className="mt-5 rounded-2xl border border-line bg-cream/60 p-4">
              <div className="flex items-center gap-2">
                {isAlreadyPassed || selectedAnswer === story.quiz.correctIndex ? (
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
                      Chưa chính xác! Hãy đọc lại câu chuyện trên và thử lại nhé.
                    </span>
                  </>
                )}
              </div>
              <p className="mt-2 text-xs text-ink/80 leading-relaxed">
                <strong>Giải thích:</strong> {story.quiz.explanation}
              </p>
            </div>
          )}
        </div>

        {/* ================= BOTTOM NAVIGATION ================= */}
        <div className="flex items-center justify-between pt-4">
          {prevStory ? (
            <Link
              to={`/kham-pha/thanh-ngu-dien-co/${prevStory.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-bold text-ink shadow-xs hover:bg-cream transition-all"
            >
              <ChevronLeft size={16} />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-muted font-normal">Bài trước</div>
                <div>{prevStory.hanzi} · {prevStory.sinoVietnamese}</div>
              </div>
              <span className="sm:hidden">Bài trước</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/kham-pha/thanh-ngu-dien-co"
            className="rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-bold text-muted hover:text-ink transition-all"
          >
            Danh sách
          </Link>

          {nextStory ? (
            <Link
              to={`/kham-pha/thanh-ngu-dien-co/${nextStory.id}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#7C2D37] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#5B1B25] transition-all"
            >
              <div className="text-right hidden sm:block">
                <div className="text-[10px] text-rose-200 font-normal">Bài kế tiếp</div>
                <div>{nextStory.hanzi} · {nextStory.sinoVietnamese}</div>
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
