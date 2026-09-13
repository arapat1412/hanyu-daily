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
  Feather,
  Filter,
} from "lucide-react";
import {
  TANG_POEMS,
  POEM_FORMS,
  FAMOUS_AUTHORS,
  getPoetryProgress,
  type TangPoemItem,
} from "../data/tangPoems";
import { speakChinese, normalizeSearch } from "../lib/hsk";

export const TangPoetryHubPage: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<string>("all");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("Tất cả tác giả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const progress = useMemo(() => getPoetryProgress(), []);

  // Filter poems
  const filteredPoems = useMemo(() => {
    const q = searchQuery.trim();
    const normalizedQ = normalizeSearch(q);

    return TANG_POEMS.filter((item) => {
      // Form filter
      if (selectedForm === "ngu-ngon-tuyet-cu" && item.form !== "Ngũ ngôn tuyệt cú") return false;
      if (selectedForm === "that-ngon-tuyet-cu" && item.form !== "Thất ngôn tuyệt cú") return false;
      if (selectedForm === "ngu-ngon-luat-thi" && item.form !== "Ngũ ngôn luật thi") return false;
      if (selectedForm === "that-ngon-luat-thi" && item.form !== "Thất ngôn luật thi") return false;

      // Author filter
      if (selectedAuthor !== "Tất cả tác giả" && !item.author.includes(selectedAuthor.split(" ")[0])) {
        return false;
      }

      // Search query filter
      if (!q) return true;
      const matchTitle = item.title.includes(q);
      const matchPinyin = normalizeSearch(item.pinyinTitle).includes(normalizedQ);
      const matchSino = normalizeSearch(item.sinoTitle).includes(normalizedQ);
      const matchAuthor = normalizeSearch(item.author).includes(normalizedQ);
      const matchLines = item.lines.some(
        (l) =>
          l.chinese.includes(q) ||
          normalizeSearch(l.pinyin).includes(normalizedQ) ||
          normalizeSearch(l.sinoVietnamese).includes(normalizedQ)
      );
      const matchTranslation = normalizeSearch(item.poeticTranslation).includes(normalizedQ);

      return matchTitle || matchPinyin || matchSino || matchAuthor || matchLines || matchTranslation;
    });
  }, [selectedForm, selectedAuthor, searchQuery]);

  const totalPoems = TANG_POEMS.length;
  const readCount = progress.readIds.length;
  const quizPassedCount = progress.quizPassedIds.length;
  const percentCompleted = Math.round((quizPassedCount / totalPoems) * 100);

  return (
    <div className="min-h-screen bg-cream pb-24 selection:bg-brand/20 selection:text-brand-dark">
      {/* Top Header Banner */}
      <div className="border-b border-line/60 bg-gradient-to-b from-[#0B241C] via-[#13382D] to-[#1B4D3E] px-4 pt-7 pb-10 text-white shadow-lg sm:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-200/90 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Về trang chủ</span>
          </Link>

          {/* Title Area */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>唐诗 · 25 THI PHẨM TINH HOA</span>
              </div>
              <h1 className="mt-2.5 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
                Đường Thi Tuyển Tập (唐诗精选)
              </h1>
              <p className="mt-1 text-xs text-emerald-100/90 sm:text-sm">
                Tuyển trích những áng thơ bất hủ từ Đường Thi Tam Bách Thủ (唐诗三百首) kèm phân tích, dịch nghĩa & bình thơ.
              </p>
            </div>

            {/* Overall stats pill */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-md shrink-0">
              <div className="text-center px-2 border-r border-white/15">
                <div className="text-[10px] font-semibold text-emerald-200 uppercase">Đã ngâm cứu</div>
                <div className="font-mono text-lg font-black text-white">
                  {readCount}/{totalPoems}
                </div>
              </div>
              <div className="text-center px-2 border-r border-white/15">
                <div className="text-[10px] font-semibold text-amber-300 uppercase">Vượt Quiz</div>
                <div className="font-mono text-lg font-black text-amber-400">
                  {quizPassedCount}/{totalPoems}
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
            <div className="flex items-center justify-between text-xs text-emerald-100">
              <span>Tiến độ hoàn thành</span>
              <span className="font-mono font-bold text-amber-300">{percentCompleted}%</span>
            </div>
            <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 transition-all duration-500"
                style={{ width: `${percentCompleted}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-8">
        {/* Search and Filters */}
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-sm sm:p-4">
          {/* Row 1: Search Box & Author Dropdown */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tựa thơ, thi sĩ, câu thơ chữ Hán hoặc lời dịch..."
                className="w-full rounded-xl border border-line bg-cream/50 pl-10 pr-4 py-2 text-xs font-medium text-ink outline-none transition-all placeholder:text-muted/70 focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10 sm:text-sm"
              />
            </div>

            <div className="w-full sm:w-auto shrink-0">
              <select
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
                className="w-full rounded-xl border border-line bg-cream/60 px-3 py-2 text-xs font-semibold text-ink outline-none transition-all focus:border-brand sm:text-sm"
              >
                {FAMOUS_AUTHORS.map((author) => (
                  <option key={author} value={author}>
                    {author}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Form Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pt-1 border-t border-line/50">
            {POEM_FORMS.map((form) => (
              <button
                key={form.id}
                type="button"
                onClick={() => setSelectedForm(form.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all whitespace-nowrap ${
                  selectedForm === form.id
                    ? "bg-[#1B4D3E] text-white shadow-xs"
                    : "bg-cream text-ink-2 hover:bg-tint"
                }`}
              >
                {form.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between px-1 text-xs text-muted">
          <span>
            Hiển thị <strong>{filteredPoems.length}</strong> / {totalPoems} bài thơ
          </span>
          {(selectedForm !== "all" || selectedAuthor !== "Tất cả tác giả" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedForm("all");
                setSelectedAuthor("Tất cả tác giả");
                setSearchQuery("");
              }}
              className="font-semibold text-brand hover:underline"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        {/* Poems Grid */}
        {filteredPoems.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-line bg-white p-12 text-center shadow-sm">
            <BookOpen className="mx-auto h-12 w-12 text-muted/50" />
            <p className="mt-3 text-sm font-semibold text-ink">Không tìm thấy bài thơ phù hợp</p>
            <p className="mt-1 text-xs text-muted">Vui lòng thử tìm kiếm với từ khóa khác.</p>
          </div>
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {filteredPoems.map((item) => {
              const isRead = progress.readIds.includes(item.id);
              const isQuizPassed = progress.quizPassedIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#1B4D3E]/40 hover:shadow-md"
                >
                  <div>
                    {/* Top Row: Form & Status */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-[#1B4D3E] border border-emerald-100">
                          {item.form}
                        </span>
                        <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-800">
                          {item.author}
                        </span>
                      </div>

                      {/* Status indicator */}
                      {isQuizPassed ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-bold text-emerald-700 border border-emerald-200">
                          <CheckCircle2 size={12} />
                          <span>Đã vượt quiz (+10 XP)</span>
                        </span>
                      ) : isRead ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50/60 px-2 py-0.5 text-[10.5px] font-bold text-emerald-800 border border-emerald-200">
                          <BookOpen size={12} />
                          <span>Đã ngâm thơ</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-medium text-muted">Chưa ngâm cứu</span>
                      )}
                    </div>

                    {/* Poem Title */}
                    <div className="mt-3.5 flex items-baseline justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-hanzi text-2xl font-black tracking-wide text-ink sm:text-3xl">
                            {item.title}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              speakChinese(item.title);
                            }}
                            title="Nghe phát âm tựa đề"
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[#1B4D3E] transition-all hover:bg-[#1B4D3E] hover:text-white"
                          >
                            <Volume2 size={14} />
                          </button>
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-xs">
                          <span className="font-sans font-bold text-emerald-800">{item.pinyinTitle}</span>
                          <span className="text-muted/60">•</span>
                          <span className="font-bold text-ink-2">{item.sinoTitle}</span>
                        </div>
                      </div>
                    </div>

                    {/* Verses Preview */}
                    <div className="mt-3.5 rounded-xl border border-line/60 bg-cream/40 p-3.5">
                      <div className="space-y-1 font-hanzi text-base font-bold text-ink sm:text-lg">
                        <p>{item.lines[0]?.chinese}</p>
                        <p>{item.lines[1]?.chinese}</p>
                      </div>
                      <div className="mt-2 text-[11px] font-medium italic text-muted line-clamp-2">
                        {item.poeticTranslation.split("\n").slice(0, 2).join(" / ")}...
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3">
                    <span className="text-[11px] text-muted/80">
                      {item.lines.length} câu · {item.poeticTranslator}
                    </span>
                    <Link
                      to={`/kham-pha/tho-duong/${item.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#1B4D3E] group-hover:underline"
                    >
                      <span>Ngâm thơ & Làm quiz</span>
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
