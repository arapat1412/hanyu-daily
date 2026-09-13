import React, { useEffect, useRef, useState } from "react";
import {
  X,
  Play,
  RefreshCw,
  Volume2,
  PenTool,
  CheckCircle,
  Info,
} from "lucide-react";
import { VocabularyWord } from "../types";
import HanziWriter from "hanzi-writer";
import { useModalFocus } from "./HskLearning";
import { recordSkillPractice, speakChinese } from "../lib/hsk";

interface HanziStrokeModalProps {
  isOpen: boolean;
  onClose: () => void;
  word: VocabularyWord | null;
}

export const HanziStrokeModal: React.FC<HanziStrokeModalProps> = ({
  isOpen,
  onClose,
  word,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const writerRef = useRef<HanziWriter | null>(null);
  const [charIndex, setCharIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [loadError, setLoadError] = useState("");
  const modalRef = useModalFocus(isOpen, onClose);
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const characters = word
    ? Array.from(word.hanzi).filter((char) => /\p{Script=Han}/u.test(char))
    : [];
  const activeChar = characters[Math.min(charIndex, characters.length - 1)];
  useEffect(() => {
    setCharIndex(0);
  }, [word?.id]);

  // Initialize or re-render HanziWriter when modal opens or word changes
  useEffect(() => {
    if (!isOpen || !word || !containerRef.current || !activeChar) return;
    let active = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setReady(false);
    setLoadError("");
    setIsQuizMode(false);

    // Clear previous container content
    containerRef.current.innerHTML = "";
    setQuizFinished(false);

    // Get the first character if it's a compound word
    const char = activeChar;

    if (HanziWriter) {
      try {
        writerRef.current = HanziWriter.create(containerRef.current, char, {
          width: 220,
          height: 220,
          padding: 15,
          showOutline: true,
          charDataLoader: (character, onComplete, onError) => {
            fetch(
              `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(character)}.json`,
              { signal: controller.signal },
            )
              .then((response) => {
                if (!response.ok)
                  throw new Error("Không tìm thấy dữ liệu nét chữ");
                return response.json();
              })
              .then((data) => {
                window.clearTimeout(timeout);
                if (active) onComplete(data);
              })
              .catch((error) => {
                window.clearTimeout(timeout);
                if (active) onError(error);
              });
          },
          onLoadCharDataSuccess: () => {
            if (active) setReady(true);
          },
          onLoadCharDataError: () => {
            if (active)
              setLoadError(
                "Chưa tải được nét chữ này. Kiểm tra kết nối hoặc chọn chữ khác.",
              );
          },
          strokeAnimationSpeed: 1.2,
          delayBetweenStrokes: 150,
          strokeColor: "#17303F",
          outlineColor: "#CBD5E1",
          drawingColor: "#2C5670",
          drawingWidth: 6,
          showCharacter: true,
        });

        // Auto animate once
        void writerRef.current.animateCharacter().catch(() => {});
      } catch (err) {
        setLoadError("Không khởi tạo được bảng tập viết.");
      }
    }
    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
      writerRef.current?.cancelQuiz();
      writerRef.current?.pauseAnimation();
      writerRef.current = null;
    };
  }, [isOpen, word, activeChar]);

  if (!isOpen || !word) return null;

  const handleAnimate = () => {
    setIsQuizMode(false);
    setQuizFinished(false);
    if (writerRef.current) {
      writerRef.current.cancelQuiz();
      writerRef.current.showCharacter();
      writerRef.current.animateCharacter();
    }
  };

  const handleStartQuiz = () => {
    setIsQuizMode(true);
    setQuizFinished(false);
    if (writerRef.current) {
      writerRef.current.quiz({
        onComplete: () => {
          setQuizFinished(true);
          recordSkillPractice("hanzi", 100);
        },
      });
    }
  };

  const handleSpeak = () => {
    speakChinese(word.hanzi, setLoadError);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Tập viết chữ Hán"
        tabIndex={-1}
        className="relative w-full max-w-md max-h-[88dvh] bg-white rounded-3xl shadow-2xl overflow-y-auto border border-line flex flex-col pb-[calc(env(safe-area-inset-bottom,0px)+10px)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-line bg-cream shrink-0">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-brand/10 text-brand">
              <PenTool className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-bold text-ink text-sm">
                Tập viết chữ Hán nét thuận
              </h3>
              <div className="text-[11px] text-muted">
                Mô phỏng quy tắc bút thuận chuẩn
              </div>
            </div>
          </div>
          <button
            aria-label="Đóng tập viết"
            onClick={onClose}
            className="p-1.5 rounded-full text-ink-2 hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Word Info Banner */}
        <div className="px-6 pt-4 pb-2 flex items-center justify-between border-b border-line/60">
          <div>
            <div className="text-xl font-bold text-brand font-mono flex items-center gap-2">
              {word.pinyin}
              <button
                onClick={handleSpeak}
                className="p-1 text-muted hover:text-brand transition-colors rounded-full hover:bg-tint"
                title="Nghe phát âm"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
            <div className="text-xs text-ink-2">
              Nghĩa:{" "}
              <strong className="text-ink">
                {word.meaning || "Chưa có trong nguồn"}
              </strong>
              {word.sinoVietnamese && ` (Hán Việt: ${word.sinoVietnamese})`}
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-xl bg-tint text-brand text-xs font-semibold">
            {word.partOfSpeech}
          </span>
        </div>

        {/* Traditional Mi Zi Ge (米字格) Grid Container */}
        <div className="p-6 flex flex-col items-center justify-center bg-[#FCFAF6]">
          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {characters.map((char, index) => (
              <button
                key={index}
                aria-label={`Tập viết chữ ${char}`}
                aria-pressed={index === charIndex}
                onClick={() => setCharIndex(index)}
                className={`rounded-xl border px-3.5 py-1.5 font-hanzi text-lg transition-all shadow-2xs ${index === charIndex ? "border-brand bg-brand text-white shadow-xs" : "border-line bg-white hover:bg-page"}`}
              >
                {char}
              </button>
            ))}
          </div>
          {loadError && (
            <p role="alert" className="mb-3 text-center text-xs text-red-700">
              {loadError}
            </p>
          )}
          {!ready && !loadError && (
            <p role="status" className="mb-2 text-xs text-muted">
              Đang tải nét chữ…
            </p>
          )}
          <div className="relative w-[230px] h-[230px] bg-white rounded-2xl border-2 border-red-300/80 shadow-md flex items-center justify-center overflow-hidden">
            {/* Red Mizi Grid Overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none stroke-red-200"
              strokeWidth="1"
              strokeDasharray="4 4"
            >
              {/* Horizontal center */}
              <line x1="0" y1="115" x2="230" y2="115" />
              {/* Vertical center */}
              <line x1="115" y1="0" x2="115" y2="230" />
              {/* Diagonals */}
              <line x1="0" y1="0" x2="230" y2="230" strokeDasharray="3 3" />
              <line x1="230" y1="0" x2="0" y2="230" strokeDasharray="3 3" />
            </svg>

            {/* Hanzi Target Element */}
            <div
              ref={containerRef}
              className="z-10 flex items-center justify-center"
            >
              {/* Fallback if HanziWriter CDN is slow */}
              <div className="font-hanzi text-8xl font-black text-ink">
                {activeChar}
              </div>
            </div>

            {/* Quiz Complete Badge */}
            {quizFinished && (
              <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-20 animate-fadeIn">
                <CheckCircle className="w-12 h-12 text-emerald-300 mb-2" />
                <span className="font-bold text-sm">Xuất sắc!</span>
                <span className="text-xs text-white/80">
                  Bạn đã viết đúng thứ tự nét
                </span>
              </div>
            )}
          </div>

          <div className="mt-3 text-[11px] text-muted text-center flex items-center gap-1">
            <Info className="w-3.5 h-3.5 text-brand" />
            {isQuizMode
              ? "Dùng chuột hoặc ngón tay vẽ theo nét trên ô kẻ để thực hành"
              : "Quy tắc: Ngang trước sổ sau, trên trước dưới sau, trái trước phải sau"}
          </div>
        </div>

        {/* Action Controls */}
        <div className="p-3 sm:p-4 bg-cream border-t border-line flex items-center justify-between gap-3 shrink-0">
          <button
            disabled={!ready}
            onClick={handleAnimate}
            className="flex-1 min-h-[46px] py-2.5 px-3 rounded-2xl border border-brand/20 bg-white hover:bg-tint text-brand text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95 touch-manipulation disabled:opacity-50"
          >
            <Play className="w-4 h-4 fill-brand" />
            Xem viết mẫu
          </button>

          <button
            disabled={!ready}
            onClick={handleStartQuiz}
            className="flex-1 min-h-[46px] py-2.5 px-3 rounded-2xl bg-brand hover:bg-brand-dark text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95 touch-manipulation disabled:opacity-50"
          >
            <PenTool className="w-4 h-4" />
            Tự tập viết
          </button>
        </div>
      </div>
    </div>
  );
};
