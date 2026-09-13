import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, X } from "lucide-react";
import type { VocabularyWord } from "../types";
import { recordSrsAnswer, speakChinese, useProgress } from "../lib/hsk";
import {
  createSrsCard,
  previewNextIntervals,
  type SrsRating,
} from "../lib/srs";
import { useModalFocus } from "./HskLearning";
import ExampleSentence from "./ExampleSentence";

export function FlashcardModal({
  isOpen,
  onClose,
  words,
  title = "Ôn tập Flashcard",
}: {
  isOpen: boolean;
  onClose: () => void;
  words: VocabularyWord[];
  title?: string;
}) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [ratings, setRatings] = useState<Record<string, SrsRating>>({});
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState("");
  const progress = useProgress();
  const ref = useModalFocus(isOpen, onClose);
  useEffect(() => {
    if (isOpen) {
      setIndex(0);
      setFlipped(false);
      setRatings({});
      setFinished(false);
      setError("");
    }
  }, [isOpen]);
  const word = words[Math.min(index, words.length - 1)];
  const count = Object.values(ratings).filter((rating) => rating >= 3).length;
  const intervals = word
    ? previewNextIntervals(progress.srs?.[word.id] ?? createSrsCard(word.id))
    : null;
  function rate(rating: SrsRating) {
    if (!word) return;
    setRatings((previous) => ({ ...previous, [word.id]: rating }));
    recordSrsAnswer(word.id, rating);
    if (index >= words.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setFlipped(false);
    }
  }
  useEffect(() => {
    if (!isOpen || !flipped || finished || !word) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || !/^[1-4]$/.test(event.key)) return;
      event.preventDefault();
      rate(Number(event.key) as SrsRating);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, flipped, finished, word, index, words.length]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm animate-fadeIn">
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl outline-none pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex flex-col"
      >
        <div className="flex items-center justify-between border-b border-line bg-cream p-4 sm:p-5 shrink-0">
          <div>
            <h2 className="font-bold">{title}</h2>
            <p className="text-xs text-muted">
              {words.length
                ? `Thẻ ${Math.min(index + 1, words.length)}/${words.length} · Đã nhớ: ${count}`
                : "Chưa có từ"}
            </p>
          </div>
          <button
            aria-label="Đóng flashcard"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white"
          >
            <X size={20} />
          </button>
        </div>
        {!word ? (
          <p className="p-8 text-center text-muted">
            Chọn bài học hoặc lưu từ trước khi ôn tập.
          </p>
        ) : finished ? (
          <div className="p-8 text-center">
            <span className="text-5xl">🎉</span>
            <h3 className="mt-4 text-xl font-bold">Đã ôn xong lượt này</h3>
            <p className="my-3 text-sm text-muted">
              Đã đánh giá {Object.keys(ratings).length}/{words.length} thẻ ·{" "}
              {count} từ đã nhớ. Từ chưa nhớ nằm trong mục Ôn tập → Cần ôn lại.
            </p>
            <button
              onClick={onClose}
              className="mt-3 rounded-2xl bg-brand px-6 py-3 font-bold text-white shadow-sm hover:bg-brand-dark transition-all"
            >
              Hoàn tất
            </button>
          </div>
        ) : (
          <div className="p-5 sm:p-7">
            <div className="mb-4 h-1.5 rounded-full bg-track">
              <div
                className="h-full rounded-full bg-gold"
                style={{
                  width: `${(Object.keys(ratings).length / words.length) * 100}%`,
                }}
              />
            </div>
            <button
              onClick={() => setFlipped((value) => !value)}
              className="flex min-h-[220px] sm:min-h-[270px] w-full flex-col items-center justify-center gap-3 sm:gap-4 rounded-3xl border-2 border-line bg-gradient-to-b from-page/60 to-white p-5 sm:p-6 text-center cursor-pointer active:scale-[0.99] transition-transform"
            >
              <span className="text-xs text-muted">
                {flipped
                  ? "Chạm để xem chữ Hán"
                  : "Nhớ pinyin rồi chạm để lật thẻ"}
              </span>
              {flipped ? (
                <>
                  <strong className="text-2xl text-brand">{word.pinyin}</strong>
                  <span className="text-xl">
                    {word.meaning || "Chưa có nghĩa Việt trong nguồn"}
                  </span>
                  {word.meaningStatus === "dictionary" && (
                    <span className="text-[11px] text-muted">
                      Nghĩa tham khảo · CVDICT
                      {word.dictionary?.match?.startsWith("reviewed")
                        ? " · đã đối chiếu mục từ"
                        : " · AI hỗ trợ"}
                    </span>
                  )}
                  {word.meaningStatus === "reviewed" && (
                    <span className="text-[11px] text-muted">
                      Nghĩa Việt đã rà soát · Hanyu Daily
                    </span>
                  )}
                  {word.sinoVietnamese && (
                    <span className="text-xs text-muted">
                      Hán Việt
                      {word.sinoVietnameseMethod === "character-pinyin"
                        ? " (ghép từng chữ)"
                        : ""}
                      : {word.sinoVietnamese}
                    </span>
                  )}
                </>
              ) : (
                <span className="break-all font-hanzi text-6xl">
                  {word.hanzi}
                </span>
              )}
              <span className="text-xs text-muted">{word.partOfSpeech}</span>
            </button>
            {flipped && <ExampleSentence word={word} compact />}
            <button
              onClick={() => speakChinese(word.hanzi, setError)}
              className="mx-auto my-3 sm:my-4 flex items-center gap-2 rounded-xl bg-tint/80 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-tint active:scale-95 touch-manipulation"
            >
              <Volume2 size={16} /> Nghe phát âm
            </button>
            {error && (
              <p role="alert" className="mb-3 text-xs text-red-700">
                {error}
              </p>
            )}
            {flipped && intervals && (
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {([
                  [1, "Quên", intervals[1], "border-rose-300 bg-rose-50 text-rose-800 hover:bg-rose-100"],
                  [2, "Khó", intervals[2], "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100"],
                  [3, "Nhớ tốt", intervals[3], "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100"],
                  [4, "Rất dễ", intervals[4], "border-sky-300 bg-sky-50 text-sky-800 hover:bg-sky-100"],
                ] as const).map(([rating, label, interval, color]) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => rate(rating)}
                    aria-label={`${rating}. ${label}, ôn lại sau ${interval}`}
                    className={`min-h-[58px] rounded-2xl border py-2.5 px-2 text-sm font-bold shadow-2xs transition active:scale-95 touch-manipulation ${color}`}
                  >
                    <span className="block">{rating} · {label}</span>
                    <span className="mt-0.5 block text-[11px] font-semibold opacity-75">{interval}</span>
                  </button>
                ))}
              </div>
            )}
            {!flipped && (
              <p className="rounded-2xl bg-page px-4 py-3 text-center text-xs font-medium text-muted">
                Lật thẻ để chọn mức độ ghi nhớ
              </p>
            )}
            <div className="mt-2 flex items-center justify-between gap-2">
              <button
                aria-label="Thẻ trước"
                disabled={index === 0}
                onClick={() => {
                  setIndex((value) => value - 1);
                  setFlipped(false);
                }}
                className="flex h-12 w-11 shrink-0 items-center justify-center rounded-xl p-2 transition hover:bg-page disabled:opacity-30 active:scale-95 touch-manipulation"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-center text-[11px] font-medium text-muted">
                {flipped ? "Phím tắt: 1 · 2 · 3 · 4" : "Dùng mũi tên để đổi thẻ"}
              </span>
              <button
                aria-label="Thẻ tiếp"
                disabled={index === words.length - 1}
                onClick={() => {
                  setIndex((value) => value + 1);
                  setFlipped(false);
                }}
                className="flex h-12 w-11 shrink-0 items-center justify-center rounded-xl p-2 transition hover:bg-page disabled:opacity-30 active:scale-95 touch-manipulation"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
