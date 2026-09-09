import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Volume2, X } from "lucide-react";
import type { VocabularyWord } from "../types";
import { recordAnswer, speakChinese } from "../lib/hsk";
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
  const [ratings, setRatings] = useState<Record<string, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState("");
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
  if (!isOpen) return null;
  const word = words[Math.min(index, words.length - 1)];
  const count = Object.values(ratings).filter(Boolean).length;
  function rate(correct: boolean) {
    setRatings((previous) => ({ ...previous, [word.id]: correct }));
    recordAnswer(word.id, correct);
    if (index >= words.length - 1) setFinished(true);
    else {
      setIndex((value) => value + 1);
      setFlipped(false);
    }
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white shadow-2xl outline-none"
      >
        <div className="flex items-center justify-between border-b border-line bg-cream p-5">
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
              className="flex min-h-[270px] w-full flex-col items-center justify-center gap-4 rounded-3xl border-2 border-line bg-gradient-to-b from-page/60 to-white p-6 text-center"
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
              className="mx-auto my-4 flex items-center gap-2 rounded-xl bg-tint/80 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-tint"
            >
              <Volume2 size={16} /> Nghe phát âm
            </button>
            {error && (
              <p role="alert" className="mb-3 text-xs text-red-700">
                {error}
              </p>
            )}
            <div className="flex items-center gap-2.5">
              <button
                aria-label="Thẻ trước"
                disabled={index === 0}
                onClick={() => {
                  setIndex((value) => value - 1);
                  setFlipped(false);
                }}
                className="rounded-xl p-2 transition hover:bg-page disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => rate(false)}
                className="flex-1 rounded-2xl bg-amber-50 py-3.5 text-sm font-bold text-amber-900 shadow-2xs transition hover:bg-amber-100"
              >
                Chưa nhớ
              </button>
              <button
                onClick={() => rate(true)}
                className="flex-1 rounded-2xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-2xs transition hover:bg-emerald-700"
              >
                Đã nhớ
              </button>
              <button
                aria-label="Thẻ tiếp"
                disabled={index === words.length - 1}
                onClick={() => {
                  setIndex((value) => value + 1);
                  setFlipped(false);
                }}
                className="rounded-xl p-2 transition hover:bg-page disabled:opacity-30"
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
