import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowLeft,
  Search,
  BookOpen,
  CheckCircle2,
  Zap,
  Volume2,
  ChevronRight,
  Filter,
  Trophy,
} from "lucide-react";
import {
  CHENGYU_STORIES,
  CHENGYU_CATEGORIES,
  getChengyuProgress,
  type ChengyuStoryItem,
} from "../data/chengyuStories";
import { speakChinese, normalizeSearch } from "../lib/hsk";

export const ChengyuHubPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const progress = useMemo(() => getChengyuProgress(), []);

  // Filtered idioms
  const filteredStories = useMemo(() => {
    const q = searchQuery.trim();
    const normalizedQ = normalizeSearch(q);

    return CHENGYU_STORIES.filter((item) => {
      // Category check
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      // Search check
      if (!q) return true;
      const matchHanzi = item.hanzi.includes(q);
      const matchPinyin = normalizeSearch(item.pinyin).includes(normalizedQ);
      const matchSino = normalizeSearch(item.sinoVietnamese).includes(normalizedQ);
      const matchMeaning = normalizeSearch(item.figurativeMeaning).includes(normalizedQ) ||
                           normalizeSearch(item.literalMeaning).includes(normalizedQ);
      return matchHanzi || matchPinyin || matchSino || matchMeaning;
    });
  }, [selectedCategory, searchQuery]);

  const totalStories = CHENGYU_STORIES.length;
  const readCount = progress.readIds.length;
  const quizPassedCount = progress.quizPassedIds.length;
  const percentCompleted = Math.round((quizPassedCount / totalStories) * 100);

  return (
    <div className="min-h-screen bg-cream pb-24 selection:bg-brand/20 selection:text-brand-dark">
      {/* Top Breadcrumb & Header */}
      <div className="border-b border-line/60 bg-gradient-to-b from-[#380B16] via-[#5B1B25] to-[#7C2D37] px-4 pt-7 pb-10 text-white shadow-lg sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back to Discover link */}
          <Link
            to="/kham-pha"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200/90 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Quay lại Khám phá</span>
          </Link>

          {/* Title Area */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-bold tracking-wide text-amber-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>成语 · 20 ĐIỂN TÍCH KINH ĐIỂN</span>
              </div>
              <h1 className="mt-2.5 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
                Điển Cố & Thành Ngữ Trung Hoa
              </h1>
              <p className="mt-1 text-xs text-rose-100/90 sm:text-sm">
                Khám phá kho tàng trí tuệ ngàn năm qua các câu chuyện ngụ ngôn và điển tích lịch sử bất hủ.
              </p>
            </div>

            {/* Overall stats pill */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md shrink-0">
              <div className="text-center px-2 border-r border-white/15">
                <div className="text-[10px] font-semibold text-amber-200 uppercase">Đã đọc</div>
                <div className="font-mono text-lg font-black text-white">
                  {readCount}/{totalStories}
                </div>
              </div>
              <div className="text-center px-2 border-r border-white/15">
                <div className="text-[10px] font-semibold text-emerald-300 uppercase">Vượt Quiz</div>
                <div className="font-mono text-lg font-black text-emerald-400">
                  {quizPassedCount}/{totalStories}
                </div>
              </div>
              <div className="text-center px-2">
                <div className="text-[10px] font-semibold text-amber-300 uppercase">Điểm thưởng</div>
                <div className="flex items-center justify-center gap-1 font-mono text-lg font-black text-amber-300">
                  <Zap size={14} className="fill-amber-300" />
                  <span>{progress.xp} XP</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between text-xs text-rose-100">
              <span>Tiến độ hoàn thành</span>
              <span className="font-mono font-bold text-amber-300">{percentCompleted}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-500"
                style={{ width: `${percentCompleted}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-8">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo chữ Hán, Pinyin, Hán Việt hoặc ý nghĩa..."
              className="w-full rounded-xl border border-line bg-cream/50 pl-10 pr-4 py-2 text-xs font-medium text-ink outline-none transition-all placeholder:text-muted/70 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10 sm:text-sm"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto">
            {CHENGYU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#7C2D37] text-white shadow-xs"
                    : "bg-cream text-ink-2 hover:bg-tint"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between px-1 text-xs text-muted">
          <span>
            Hiển thị <strong>{filteredStories.length}</strong> / {totalStories} thành ngữ
          </span>
          {selectedCategory !== "all" && (
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="font-semibold text-brand hover:underline"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Grid of Idiom Cards */}
        {filteredStories.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-line bg-white p-12 text-center shadow-sm">
            <BookOpen className="mx-auto h-12 w-12 text-muted/50" />
            <p className="mt-3 text-sm font-semibold text-ink">Không tìm thấy thành ngữ phù hợp</p>
            <p className="mt-1 text-xs text-muted">Vui lòng thử tìm kiếm với từ khóa khác.</p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {filteredStories.map((item) => {
              const isRead = progress.readIds.includes(item.id);
              const isQuizPassed = progress.quizPassedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#7C2D37]/40 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Category Tag & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-[#7C2D37] border border-rose-100">
                          {item.categoryLabel}
                        </span>
                        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold text-slate-600">
                          {item.hskLevel}
                        </span>
                      </div>

                      {/* Status indicator */}
                      {isQuizPassed ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 size={12} />
                          <span>Đã vượt quiz (+10 XP)</span>
                        </span>
                      ) : isRead ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10.5px] font-bold text-amber-700 border border-amber-200">
                          <BookOpen size={12} />
                          <span>Đã đọc tích</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-muted">Chưa học</span>
                      )}
                    </div>

                    {/* Hanzi, Audio & Pinyin */}
                    <div className="mt-3 flex items-baseline justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="font-hanzi text-2xl font-black tracking-wider text-ink sm:text-3xl">
                          {item.hanzi}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            speakChinese(item.hanzi);
                          }}
                          title="Nghe phát âm"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-[#7C2D37] transition-all hover:bg-[#7C2D37] hover:text-white"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Pinyin and Sino-Vietnamese */}
                    <div className="mt-1 flex items-center gap-2 text-xs">
                      <span className="font-sans font-bold text-rose-800">{item.pinyin}</span>
                      <span className="text-muted/60">•</span>
                      <span className="font-medium text-muted">{item.sinoVietnamese}</span>
                    </div>

                    {/* Meanings */}
                    <div className="mt-3 space-y-1 text-xs">
                      <p className="text-ink line-clamp-2 leading-relaxed font-medium">
                        {item.figurativeMeaning}
                      </p>
                      <p className="text-[11px] text-muted line-clamp-1 italic">
                        Nghĩa đen: {item.literalMeaning}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3">
                    <span className="text-[11px] text-muted/80">
                      Xuất xứ: {item.origin.split("·")[0]}
                    </span>
                    <Link
                      to={`/kham-pha/thanh-ngu-dien-co/${item.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#7C2D37] group-hover:underline"
                    >
                      <span>Đọc điển tích & Làm quiz</span>
                      <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
