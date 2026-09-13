import React, { useState, useEffect, useMemo } from "react";
import {
  X,
  CheckCircle2,
  Bookmark,
  AlertCircle,
  Volume2,
  Search,
  Sparkles,
  BookOpen,
  ArrowRight,
  PenTool,
  RotateCw,
  Zap,
  Check,
  Download,
  Headphones,
  Clock3,
  Brain,
} from "lucide-react";
import type { VocabularyWord } from "../types";
import {
  useProgress,
  toggleBookmark,
  recordAnswer,
  speakChinese,
  fetchWordsByIds,
  normalizeSearch,
  getDueSrsWordIds,
  getSrsSummary,
} from "../lib/hsk";
import { HanziStrokeModal } from "./HanziStrokeModal";
import { FlashcardModal } from "./FlashcardModal";
import { useHandsFreePlayer } from "../lib/hands-free-context";

export type VocabularyTab =
  | "known"
  | "bookmarks"
  | "mistakes"
  | "due"
  | "learning"
  | "mastered";

const TAB_CONTENT: Record<VocabularyTab, { title: string; description: string; label: string; empty: string; exportName: string }> = {
  known: {
    title: "Từ vựng đã thuộc",
    description: "Các từ vựng bạn đã trả lời chính xác khi luyện tập (+2 XP/từ)",
    label: "Đã thuộc",
    empty: "Chưa có từ vựng đã thuộc",
    exportName: "da-thuoc",
  },
  bookmarks: {
    title: "Từ vựng đã đánh dấu",
    description: "Bộ sưu tập các từ vựng bạn đã đánh dấu để ghi nhớ đặc biệt",
    label: "Đã đánh dấu",
    empty: "Chưa có từ vựng được đánh dấu",
    exportName: "da-luu",
  },
  mistakes: {
    title: "Từ vựng cần ôn lại",
    description: "Các từ từng làm sai, cần ôn tập thêm để nắm vững kiến thức",
    label: "Cần ôn lại",
    empty: "Không có từ vựng cần ôn lại",
    exportName: "can-on-lai",
  },
  due: {
    title: "Từ đến hạn hôm nay",
    description: "Các thẻ đã đến thời điểm vàng để ôn lại theo chu kỳ SRS",
    label: "Đến hạn",
    empty: "Hôm nay không có thẻ SRS nào đến hạn",
    exportName: "den-han-hom-nay",
  },
  learning: {
    title: "Từ vựng đang học",
    description: "Các thẻ SRS có khoảng cách ôn tập dưới 21 ngày",
    label: "Đang học",
    empty: "Chưa có từ vựng trong giai đoạn đang học",
    exportName: "dang-hoc-srs",
  },
  mastered: {
    title: "Từ vựng đã ghi nhớ sâu",
    description: "Các thẻ SRS đã đạt khoảng cách ôn tập từ 21 ngày trở lên",
    label: "Ghi nhớ sâu",
    empty: "Chưa có từ vựng đạt mức ghi nhớ sâu",
    exportName: "ghi-nho-sau",
  },
};

function formatDueBadge(dueDate: string): string {
  const difference = Date.parse(dueDate) - Date.now();
  if (!Number.isFinite(difference) || difference <= 0) return "Đến hạn hôm nay";
  const days = Math.max(1, Math.ceil(difference / (24 * 60 * 60 * 1000)));
  return `Còn ${days} ngày`;
}

interface VocabularyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: VocabularyTab;
}

export const VocabularyModal: React.FC<VocabularyModalProps> = ({
  isOpen,
  onClose,
  initialTab = "known",
}) => {
  const progress = useProgress();
  const { playWordList } = useHandsFreePlayer();
  const [activeTab, setActiveTab] = useState<VocabularyTab>(initialTab);
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);
  const [isFlashcardOpen, setIsFlashcardOpen] = useState(false);
  const [audioError, setAudioError] = useState("");
  const srsSummary = useMemo(() => getSrsSummary(progress), [progress.srs]);

  // Sync activeTab when initialTab changes on open
  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      setQuery("");
      setLevelFilter("all");
    }
  }, [isOpen, initialTab]);

  // Current active word IDs depending on activeTab
  const activeIds = useMemo(() => {
    if (activeTab === "known") return progress.known;
    if (activeTab === "bookmarks") return progress.bookmarks;
    if (activeTab === "mistakes") return progress.mistakes;
    if (activeTab === "due") return getDueSrsWordIds(progress);
    const cards = Object.values(progress.srs ?? {});
    return cards
      .filter((card) => activeTab === "learning" ? card.interval < 21 : card.interval >= 21)
      .map((card) => card.wordId);
  }, [
    activeTab,
    progress.known,
    progress.bookmarks,
    progress.mistakes,
    progress.srs,
  ]);

  // Fetch words details when activeIds changes or modal opens
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;

    if (activeIds.length === 0) {
      setWords([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchWordsByIds(activeIds)
      .then((loadedWords) => {
        if (!cancelled) {
          setWords(loadedWords);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Failed to load vocabulary words:", err);
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, activeIds]);

  // Filter words by query and level
  const filteredWords = useMemo(() => {
    const q = normalizeSearch(query.trim());
    return words.filter((w) => {
      // Level filter
      if (levelFilter !== "all" && w.hskLevel !== levelFilter) {
        return false;
      }
      // Query search
      if (!q) return true;
      const matchHanzi = w.hanzi.includes(query.trim());
      const matchPinyin = normalizeSearch(w.pinyin).includes(q);
      const matchMeaning = normalizeSearch(w.meaning || "").includes(q);
      const matchSino = normalizeSearch(w.sinoVietnamese || "").includes(q);
      return matchHanzi || matchPinyin || matchMeaning || matchSino;
    });
  }, [words, query, levelFilter]);

  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const handleExportCsv = () => {
    if (filteredWords.length === 0) return;

    const headers = ["Chữ Hán", "Phiên âm", "Nghĩa tiếng Việt", "Hán Việt", "Cấp độ"];
    const escapeCsv = (str: string = "") => `"${str.replace(/"/g, '""')}"`;

    const rows = filteredWords.map((w) => [
      escapeCsv(w.hanzi),
      escapeCsv(w.pinyin),
      escapeCsv(w.meaning),
      escapeCsv(w.sinoVietnamese || ""),
      escapeCsv((w.hskLevel || "").toUpperCase()),
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `hanyu-tu-vung-${TAB_CONTENT[activeTab].exportName}-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setExportNotice(`Đã xuất ${filteredWords.length} từ vựng sang file CSV thành công!`);
    setTimeout(() => setExportNotice(null), 3500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      >
        <div
          className="relative flex flex-col w-full max-w-3xl max-h-[90dvh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-line animate-scaleUp"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-dark via-brand to-brand-light p-4 sm:p-6 text-white shrink-0 relative">
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng"
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/15 transition-colors active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Kho Dữ Liệu Từ Vựng · 词汇库</span>
            </div>
            <h2 className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
              {TAB_CONTENT[activeTab].title}
            </h2>
            <p className="mt-0.5 text-xs text-white/80">
              {TAB_CONTENT[activeTab].description}
            </p>

            {/* Legacy notebook and SRS filters */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none momentum-scroll overscroll-x-contain">
              <button
                type="button"
                onClick={() => setActiveTab("known")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "known"
                    ? "bg-white text-emerald-800 shadow-md ring-2 ring-emerald-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${activeTab === "known" ? "text-emerald-600" : ""}`} />
                <span>Đã thuộc</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                    activeTab === "known" ? "bg-emerald-100 text-emerald-800" : "bg-white/20 text-white"
                  }`}
                >
                  {progress.known.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("bookmarks")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "bookmarks"
                    ? "bg-white text-amber-900 shadow-md ring-2 ring-amber-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${activeTab === "bookmarks" ? "text-amber-600 fill-amber-600" : ""}`} />
                <span>Đã đánh dấu</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                    activeTab === "bookmarks" ? "bg-amber-100 text-amber-800" : "bg-white/20 text-white"
                  }`}
                >
                  {progress.bookmarks.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("mistakes")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "mistakes"
                    ? "bg-white text-rose-900 shadow-md ring-2 ring-rose-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <AlertCircle className={`w-3.5 h-3.5 ${activeTab === "mistakes" ? "text-rose-600" : ""}`} />
                <span>Cần ôn lại</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono font-bold ${
                    activeTab === "mistakes" ? "bg-rose-100 text-rose-800" : "bg-white/20 text-white"
                  }`}
                >
                  {progress.mistakes.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("due")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "due"
                    ? "bg-white text-rose-800 shadow-md ring-2 ring-rose-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Clock3 className="h-3.5 w-3.5" />
                <span>Đến hạn</span>
                <span className={`rounded-full px-1.5 text-[10px] font-mono font-bold ${activeTab === "due" ? "bg-rose-100 text-rose-800" : "bg-white/20"}`}>
                  {srsSummary.dueToday}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("learning")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "learning"
                    ? "bg-white text-sky-800 shadow-md ring-2 ring-sky-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Đang học</span>
                <span className={`rounded-full px-1.5 text-[10px] font-mono font-bold ${activeTab === "learning" ? "bg-sky-100 text-sky-800" : "bg-white/20"}`}>
                  {srsSummary.learning}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("mastered")}
                className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all whitespace-nowrap active:scale-95 touch-manipulation ${
                  activeTab === "mastered"
                    ? "bg-white text-indigo-800 shadow-md ring-2 ring-indigo-300"
                    : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                <Brain className="h-3.5 w-3.5" />
                <span>Ghi nhớ sâu</span>
                <span className={`rounded-full px-1.5 text-[10px] font-mono font-bold ${activeTab === "mastered" ? "bg-indigo-100 text-indigo-800" : "bg-white/20"}`}>
                  {srsSummary.mastered}
                </span>
              </button>
            </div>
          </div>

          {/* Search and Filter toolbar */}
          <div className="bg-cream/60 border-b border-line px-5 py-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm chữ Hán, pinyin, nghĩa..."
                className="w-full rounded-xl border border-line bg-white pl-9 pr-3 py-1.5 text-xs text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-medium text-ink focus:border-brand focus:outline-none"
              >
                <option value="all">Tất cả cấp độ</option>
                <option value="hsk1">HSK 1</option>
                <option value="hsk2">HSK 2</option>
                <option value="hsk3">HSK 3</option>
                <option value="hsk4">HSK 4</option>
                <option value="hsk5">HSK 5</option>
                <option value="hsk6">HSK 6</option>
                <option value="hsk7-9">HSK 7–9</option>
              </select>

              {filteredWords.length > 0 && (
                <>
                  <button
                    type="button"
                    onClick={handleExportCsv}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white hover:bg-tint hover:border-brand/40 text-ink-2 hover:text-brand px-3 py-1.5 text-xs font-semibold transition-all shadow-xs shrink-0 active:scale-95"
                    title="Tải về file CSV danh sách từ vựng này để in ra hoặc nhập vào Anki / Quizlet"
                  >
                    <Download className="w-3.5 h-3.5 text-brand" />
                    <span className="hidden sm:inline">Xuất danh sách</span>
                    <span className="sm:hidden">Xuất</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      playWordList({
                        title: `Sổ tay: ${TAB_CONTENT[activeTab].label} (${filteredWords.length} từ)`,
                        words: filteredWords,
                      });
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-900 px-3 py-1.5 text-xs font-bold transition-all shadow-xs shrink-0 active:scale-95 cursor-pointer"
                    title="Luyện nghe rảnh tay danh sách từ vựng này"
                  >
                    <Headphones className="w-3.5 h-3.5 text-stone-900" />
                    <span>🎧 Nghe rảnh tay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsFlashcardOpen(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 text-xs font-bold transition-all shadow-xs shrink-0 active:scale-95"
                    title="Luyện flashcard với danh sách này"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Luyện</span> Flashcard ({filteredWords.length})
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Export Toast / Alert Banner */}
          {exportNotice && (
            <div className="bg-emerald-50 border-b border-emerald-200 text-emerald-800 text-xs px-5 py-2 font-medium flex items-center justify-between shrink-0 animate-in fade-in">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{exportNotice}</span>
              </div>
              <button
                type="button"
                onClick={() => setExportNotice(null)}
                className="text-emerald-600 hover:text-emerald-900 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Word List Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3 bg-[#FCFAF6] scrollbar-thin">
            {loading ? (
              <div className="py-16 text-center text-muted">
                <RotateCw className="w-8 h-8 animate-spin mx-auto mb-2 text-brand" />
                <div className="text-sm font-medium">Đang nạp dữ liệu từ vựng...</div>
              </div>
            ) : filteredWords.length === 0 ? (
              <div className="py-14 text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 text-2xl shadow-inner">
                  {activeTab === "known" && "🌱"}
                  {activeTab === "bookmarks" && "⭐"}
                  {activeTab === "mistakes" && "🎉"}
                  {activeTab === "due" && "⏰"}
                  {activeTab === "learning" && "🌿"}
                  {activeTab === "mastered" && "🧠"}
                </div>
                <h3 className="font-display text-base font-bold text-ink mb-1">
                  {words.length === 0
                    ? TAB_CONTENT[activeTab].empty
                    : "Không tìm thấy từ phù hợp với bộ lọc"}
                </h3>
                <p className="text-xs text-muted max-w-sm mx-auto leading-relaxed mb-4">
                  {words.length === 0
                    ? activeTab === "known"
                      ? "Hãy tham gia luyện tập và làm bài tập HSK để mở khóa các từ vựng đã thuộc!"
                      : activeTab === "bookmarks"
                      ? "Bạn có thể bấm vào biểu tượng ngôi sao/bookmark ở các bài học để lưu từ quan trọng vào đây."
                      : activeTab === "mistakes"
                        ? "Tuyệt vời! Hiện tại bạn không có từ nào bị trả lời sai cần khắc phục."
                        : "Hãy luyện Flashcard để hệ thống bắt đầu xây dựng lịch ôn tập phù hợp cho bạn."
                    : "Hãy thử đổi từ khóa tìm kiếm hoặc chọn lại cấp độ HSK khác."}
                </p>
                <a
                  href="/hsk"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white hover:bg-brand-dark transition-colors"
                >
                  <span>Học từ vựng HSK ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredWords.map((word) => {
                  const isSaved = progress.bookmarks.includes(word.id);
                  const isKnown = progress.known.includes(word.id);
                  const isMistake = progress.mistakes.includes(word.id);
                  const srsCard = progress.srs?.[word.id];

                  return (
                    <article
                      key={word.id}
                      className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-4 shadow-xs transition-all hover:shadow-md hover:border-brand/40"
                    >
                      <div className="flex items-start justify-between gap-2.5">
                        <div className="flex items-start gap-3 min-w-0">
                          {/* Audio button */}
                          <button
                            type="button"
                            aria-label={`Nghe phát âm ${word.hanzi}`}
                            title="Phát âm"
                            onClick={() => {
                              setAudioError("");
                              speakChinese(word.hanzi, setAudioError);
                            }}
                            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint/80 text-brand transition hover:bg-tint hover:scale-105 active:scale-95"
                          >
                            <Volume2 size={16} />
                          </button>

                          {/* Hanzi & Pinyin */}
                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2 flex-wrap">
                              <button
                                type="button"
                                onClick={() => setStrokeWord(word)}
                                title="Bấm để xem thứ tự nét bút"
                                className="font-hanzi text-2xl font-bold text-ink transition hover:text-brand flex items-center gap-1 text-left"
                              >
                                <span>{word.hanzi}</span>
                                <PenTool size={12} className="opacity-0 group-hover:opacity-60 text-brand" />
                              </button>
                              <span className="font-mono text-sm font-bold text-brand">
                                {word.pinyin}
                              </span>
                            </div>

                            {/* Meaning */}
                            <p className="mt-1 text-xs leading-relaxed text-ink line-clamp-2">
                              {word.meaning || "Chưa có giải nghĩa tiếng Việt"}
                            </p>

                            {/* Sino Vietnamese & PoS */}
                            <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-muted">
                              {word.sinoVietnamese && (
                                <span className="rounded-md bg-[#F4EDE2] px-1.5 py-0.5 text-ink-2 font-medium">
                                  Hán Việt: {word.sinoVietnamese}
                                </span>
                              )}
                              {word.partOfSpeech && (
                                <span className="rounded-md bg-page px-1.5 py-0.5 font-medium">
                                  {word.partOfSpeech}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Top Right Bookmark Action */}
                        <button
                          type="button"
                          aria-label={isSaved ? "Bỏ lưu từ" : "Lưu từ"}
                          title={isSaved ? "Bỏ đánh dấu" : "Đánh dấu từ"}
                          onClick={() => toggleBookmark(word.id)}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition ${
                            isSaved
                              ? "border-amber-300 bg-amber-50 text-amber-600"
                              : "border-line text-muted hover:bg-page"
                          }`}
                        >
                          <Bookmark size={15} fill={isSaved ? "currentColor" : "none"} />
                        </button>
                      </div>

                      {/* Bottom Footer Status row */}
                      <div className="mt-3 flex items-center justify-between border-t border-line/60 pt-2.5 text-[11px]">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="font-mono font-bold uppercase text-muted tracking-wider">
                            {word.hskLevel ? word.hskLevel.toUpperCase() : "HSK"}
                          </span>
                          {srsCard && (
                            <span className={`inline-flex items-center gap-1 rounded-lg px-2 py-1 font-semibold ${
                              Date.parse(srsCard.dueDate) <= Date.now()
                                ? "bg-rose-50 text-rose-700"
                                : "bg-sky-50 text-sky-700"
                            }`}>
                              <Clock3 size={11} />
                              {formatDueBadge(srsCard.dueDate)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1.5">
                          {/* If in mistakes, allow marking as known */}
                          {activeTab === "mistakes" && (
                            <button
                              type="button"
                              onClick={() => recordAnswer(word.id, true)}
                              className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
                              title="Chuyển sang danh mục Đã thuộc"
                            >
                              <Check size={12} />
                              <span>Đã thuộc</span>
                            </button>
                          )}

                          {/* If in known, allow marking to review */}
                          {activeTab === "known" && (
                            <button
                              type="button"
                              onClick={() => recordAnswer(word.id, false)}
                              className="inline-flex items-center gap-1 rounded-lg bg-rose-50 px-2 py-1 font-semibold text-rose-700 hover:bg-rose-100 transition-colors"
                              title="Đánh dấu cần ôn lại"
                            >
                              <RotateCw size={11} />
                              <span>Cần ôn</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>

          {/* Modal Bottom Footer */}
          <div className="bg-white border-t border-line p-3.5 sm:p-4 sm:px-6 pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex items-center justify-between shrink-0">
            <div className="text-xs text-muted">
              Đang hiển thị <strong className="text-ink font-mono">{filteredWords.length}</strong> từ vựng
            </div>
            <button
              type="button"
              onClick={onClose}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-brand/10 hover:bg-brand/15 text-xs font-bold text-brand transition-colors active:scale-95 touch-manipulation flex items-center justify-center"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>

      {/* Stroke Order Modal */}
      <HanziStrokeModal
        isOpen={Boolean(strokeWord)}
        onClose={() => setStrokeWord(null)}
        word={strokeWord}
      />

      {/* Flashcard Practice Modal */}
      <FlashcardModal
        isOpen={isFlashcardOpen}
        onClose={() => setIsFlashcardOpen(false)}
        words={filteredWords}
        title={`Luyện Flashcard · ${TAB_CONTENT[activeTab].label}`}
      />
    </>
  );
};
