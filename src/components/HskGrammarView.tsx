import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Volume2,
  Bookmark,
  Sparkles,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Check,
  Layers,
  HelpCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  HSK1_ENRICHED_GRAMMAR,
  HSK1_GRAMMAR_CATEGORIES,
  type EnrichedGrammarPoint,
  type GrammarCategory
} from '../data/hsk1GrammarData';
import {
  HSK2_ENRICHED_GRAMMAR,
  HSK2_GRAMMAR_CATEGORIES
} from '../data/hsk2GrammarData';
import {
  HSK3_ENRICHED_GRAMMAR,
  HSK3_GRAMMAR_CATEGORIES
} from '../data/hsk3GrammarData';
import {
  HSK4_ENRICHED_GRAMMAR,
  HSK4_GRAMMAR_CATEGORIES
} from '../data/hsk4GrammarData';
import {
  HSK5_ENRICHED_GRAMMAR,
  HSK5_GRAMMAR_CATEGORIES
} from '../data/hsk5GrammarData';
import {
  HSK6_ENRICHED_GRAMMAR,
  HSK6_GRAMMAR_CATEGORIES
} from '../data/hsk6GrammarData';
import {
  HSK79_ENRICHED_GRAMMAR,
  HSK79_GRAMMAR_CATEGORIES
} from '../data/hsk79GrammarData';
import { speakChinese, toggleBookmark, useProgress, normalizeSearch } from '../lib/hsk';

interface HskGrammarViewProps {
  levelCode: string; // 'hsk1' .. 'hsk7-9'
}

export const HskGrammarView: React.FC<HskGrammarViewProps> = ({ levelCode }) => {
  const progress = useProgress();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => {
    const prefix = levelCode === 'hsk7-9' ? 'hsk79' : levelCode;
    return new Set([`${prefix}-g-01`, `${prefix}-g-02`, `${prefix}-g-03`]);
  });
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  const [playingSentence, setPlayingSentence] = useState<string | null>(null);

  // Dynamic Level Config
  const { grammarData, categories, levelTitle, levelBadge, pointsCount, examplesCount } = useMemo(() => {
    if (levelCode === 'hsk2') {
      return {
        grammarData: HSK2_ENRICHED_GRAMMAR,
        categories: HSK2_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 2 Toàn diện & Dễ hiểu',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 2',
        pointsCount: 78,
        examplesCount: 195,
      };
    }
    if (levelCode === 'hsk3') {
      return {
        grammarData: HSK3_ENRICHED_GRAMMAR,
        categories: HSK3_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 3 Toàn diện & Dễ hiểu',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 3',
        pointsCount: 96,
        examplesCount: 302,
      };
    }
    if (levelCode === 'hsk4') {
      return {
        grammarData: HSK4_ENRICHED_GRAMMAR,
        categories: HSK4_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 4 Toàn diện & Dễ hiểu',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 4',
        pointsCount: 95,
        examplesCount: 365,
      };
    }
    if (levelCode === 'hsk5') {
      return {
        grammarData: HSK5_ENRICHED_GRAMMAR,
        categories: HSK5_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 5 Toàn diện & Dễ hiểu',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 5',
        pointsCount: 70,
        examplesCount: 245,
      };
    }
    if (levelCode === 'hsk6') {
      return {
        grammarData: HSK6_ENRICHED_GRAMMAR,
        categories: HSK6_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 6 Toàn diện & Dễ hiểu',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 6',
        pointsCount: 50,
        examplesCount: 147,
      };
    }
    if (levelCode === 'hsk7-9') {
      return {
        grammarData: HSK79_ENRICHED_GRAMMAR,
        categories: HSK79_GRAMMAR_CATEGORIES,
        levelTitle: 'Ngữ pháp HSK 7–9 Cao cấp & Toàn diện',
        levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 7–9',
        pointsCount: 134,
        examplesCount: 596,
      };
    }
    return {
      grammarData: HSK1_ENRICHED_GRAMMAR,
      categories: HSK1_GRAMMAR_CATEGORIES,
      levelTitle: 'Ngữ pháp HSK 1 Toàn diện & Dễ hiểu',
      levelBadge: 'Chương trình New HSK 3.0 · Cấp độ HSK 1',
      pointsCount: 70,
      examplesCount: 204,
    };
  }, [levelCode]);

  // Search & Filter
  const normalizedQuery = normalizeSearch(searchQuery);

  const filteredGrammar = useMemo(() => {
    return grammarData.filter((point) => {
      // Category filter
      if (selectedCategory !== 'all' && point.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (normalizedQuery) {
        const searchableText = `${point.titleVi} ${point.titleZh} ${point.structure} ${point.explanationVi} ${point.tips || ''} ${point.categoryName} ${point.examples.map(e => `${e.chinese} ${e.pinyin} ${e.vietnamese}`).join(' ')}`;
        if (!normalizeSearch(searchableText).includes(normalizedQuery)) {
          return false;
        }
      }
      return true;
    });
  }, [grammarData, selectedCategory, normalizedQuery]);

  // Expand / Collapse Helpers
  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredGrammar.map((p) => p.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  // Play Audio
  const handlePlayAudio = (text: string) => {
    setPlayingSentence(text);
    speakChinese(text, () => setPlayingSentence(null));
    setTimeout(() => setPlayingSentence(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-[#1B3B4B]/5 via-tint/40 to-white p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{levelBadge}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-ink tracking-tight">
              {levelTitle}
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-ink-2 max-w-2xl leading-relaxed">
              Tổng hợp <strong>{pointsCount} điểm ngữ pháp trọng tâm</strong> được biên soạn lại với tiêu đề tiếng Việt rõ ràng,
              công thức trực quan, giải thích bản chất ngắn gọn và <strong>{examplesCount} câu ví dụ thực tế</strong> kèm phiên âm & audio phát âm.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
            <div className="rounded-xl bg-white border border-line p-3 text-center min-w-[90px] shadow-2xs">
              <div className="text-lg font-black text-brand">{pointsCount}</div>
              <div className="text-[11px] font-medium text-muted">Mục ngữ pháp</div>
            </div>
            <div className="rounded-xl bg-white border border-line p-3 text-center min-w-[90px] shadow-2xs">
              <div className="text-lg font-black text-amber-600">{examplesCount}</div>
              <div className="text-[11px] font-medium text-muted">Câu ví dụ mẫu</div>
            </div>
            <div className="rounded-xl bg-white border border-line p-3 text-center min-w-[90px] shadow-2xs">
              <div className="text-lg font-black text-emerald-600">100%</div>
              <div className="text-[11px] font-medium text-muted">Có Audio & Pinyin</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-ink-2">
          <span className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-brand" />
            <span>Phân loại chủ đề ngữ pháp</span>
          </span>
          <span className="text-muted font-normal">
            Đang hiển thị {filteredGrammar.length} / {grammarData.length} mục
          </span>
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand text-white shadow-xs scale-[1.02]'
                    : 'bg-white text-ink-2 border border-line hover:bg-tint/40 hover:border-brand/30'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Utility Control Bar */}
      <div className="rounded-2xl border border-line bg-white p-4 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search box */}
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm ngữ pháp (ví dụ: câu chữ 是, 会, 能, 想, 吗, đại từ, trợ từ, pinyin...)"
              className="w-full rounded-xl bg-page pl-9 pr-9 py-2 text-sm text-ink placeholder:text-muted focus:outline-hidden focus:ring-2 focus:ring-brand/30 border border-line transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink cursor-pointer text-xs"
              >
                ✕
              </button>
            )}
          </div>

          {/* Action toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Show/hide Pinyin */}
            <button
              onClick={() => setShowPinyin(!showPinyin)}
              title={showPinyin ? 'Ẩn Pinyin trong ví dụ' : 'Hiện Pinyin'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                showPinyin
                  ? 'bg-tint text-brand border-brand/20'
                  : 'bg-page text-muted border-line hover:text-ink'
              }`}
            >
              {showPinyin ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              <span>Pinyin</span>
            </button>

            {/* Show/hide Translation */}
            <button
              onClick={() => setShowTranslation(!showTranslation)}
              title={showTranslation ? 'Ẩn dịch nghĩa tiếng Việt' : 'Hiện dịch nghĩa'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                showTranslation
                  ? 'bg-tint text-brand border-brand/20'
                  : 'bg-page text-muted border-line hover:text-ink'
              }`}
            >
              {showTranslation ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
              <span>Dịch Việt</span>
            </button>

            {/* Expand / Collapse All */}
            <button
              onClick={expandedIds.size > 0 ? collapseAll : expandAll}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold bg-page hover:bg-tint/50 text-ink border border-line transition-all cursor-pointer"
            >
              {expandedIds.size > 0 ? (
                <>
                  <ChevronUp className="h-3.5 w-3.5 text-muted" />
                  <span>Thu gọn</span>
                </>
              ) : (
                <>
                  <ChevronDown className="h-3.5 w-3.5 text-muted" />
                  <span>Mở rộng</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Grammar Cards List */}
      {filteredGrammar.length === 0 ? (
        <div className="rounded-2xl border border-line bg-white p-12 text-center my-6">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-tint text-2xl">
            🔍
          </div>
          <h3 className="text-base font-bold text-ink">Không tìm thấy điểm ngữ pháp phù hợp</h3>
          <p className="mt-1 text-xs text-muted max-w-sm mx-auto">
            Hãy thử tìm bằng từ khóa khác hoặc chọn lại phân loại chủ đề ở thanh công cụ phía trên.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white hover:bg-brand-dark transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Xem lại tất cả ngữ pháp
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredGrammar.map((point) => {
            const isExpanded = expandedIds.has(point.id);
            const isBookmarked = progress.bookmarks.includes(point.id);

            return (
              <article
                key={point.id}
                className={`rounded-2xl border transition-all duration-200 bg-white ${
                  isExpanded
                    ? 'border-brand/30 shadow-md ring-1 ring-brand/10'
                    : 'border-line hover:border-brand/30 hover:shadow-2xs'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(point.id)}
                  className="flex items-start justify-between gap-3 p-4 sm:p-5 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    {/* Index Badge */}
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-tint text-brand text-xs font-black">
                      {point.order}
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Meta Pills */}
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="inline-flex items-center gap-1 rounded-md bg-page px-2 py-0.5 text-[10.5px] font-bold text-ink-2 border border-line/60">
                          <span>{point.categoryIcon}</span>
                          <span>{point.categoryName}</span>
                        </span>
                        {point.grammarDetail && (
                          <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10.5px] font-semibold text-amber-700">
                            {point.grammarDetail}
                          </span>
                        )}
                        <span className="text-[11px] font-hanzi text-muted">
                          {point.titleZh}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-base sm:text-lg font-bold text-ink leading-snug">
                        {point.titleVi}
                      </h3>

                      {/* Formula preview when collapsed */}
                      {!isExpanded && (
                        <div className="mt-1.5 text-xs text-brand font-mono line-clamp-1">
                          📐 {point.structure}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0 pt-1">
                    {/* Bookmark Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBookmark(point.id);
                      }}
                      title={isBookmarked ? 'Bỏ lưu điểm ngữ pháp này' : 'Lưu điểm ngữ pháp'}
                      className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                        isBookmarked
                          ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                          : 'text-muted hover:text-ink hover:bg-page'
                      }`}
                    >
                      <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>

                    {/* Toggle Chevron */}
                    <div className="rounded-lg p-1.5 text-muted hover:text-ink transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="border-t border-line/60 p-4 sm:p-6 bg-[#FAFBFD] rounded-b-2xl space-y-4">
                    {/* Formula Box */}
                    <div className="rounded-xl border border-brand/20 bg-white p-3.5 shadow-2xs">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-brand uppercase tracking-wider mb-1.5">
                        <span>📐 Công thức / Cấu trúc:</span>
                      </div>
                      <div className="font-mono text-sm sm:text-[15px] font-bold text-ink bg-page px-3 py-2 rounded-lg border border-line">
                        {point.structure}
                      </div>
                    </div>

                    {/* Explanation Box */}
                    <div className="rounded-xl bg-white border border-line p-4 space-y-2 text-sm text-ink leading-relaxed">
                      <div className="text-xs font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1">
                        <BookOpen className="h-3.5 w-3.5 text-brand" />
                        <span>Giải thích chi tiết:</span>
                      </div>
                      <div className="whitespace-pre-line text-ink-2 text-xs sm:text-[13.5px]">
                        {point.explanationVi}
                      </div>
                    </div>

                    {/* Pro Tip Box (if available) */}
                    {point.tips && (
                      <div className="rounded-xl bg-amber-50/80 border border-amber-200/80 p-3 text-xs text-amber-900 flex items-start gap-2.5">
                        <Lightbulb className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-amber-800">Lưu ý quan trọng: </span>
                          <span>{point.tips}</span>
                        </div>
                      </div>
                    )}

                    {/* Examples Section */}
                    {point.examples.length > 0 && (
                      <div className="space-y-2.5 pt-1">
                        <div className="flex items-center justify-between text-xs font-bold text-ink-2 uppercase tracking-wider">
                          <span>Ví dụ minh họa thực tế ({point.examples.length}):</span>
                          <span className="text-muted font-normal text-[11px]">
                            Bấm loa để nghe phát âm
                          </span>
                        </div>

                        <div className="grid gap-2">
                          {point.examples.map((ex, exIdx) => {
                            const isPlaying = playingSentence === ex.chinese;

                            return (
                              <div
                                key={exIdx}
                                className="group flex items-start justify-between gap-3 rounded-xl border border-line bg-white p-3 hover:border-brand/40 transition-all"
                              >
                                <div className="min-w-0 flex-1 space-y-0.5">
                                  {/* Chinese Character */}
                                  <div className="font-hanzi text-base sm:text-lg font-bold text-ink tracking-wide">
                                    {ex.chinese}
                                  </div>

                                  {/* Pinyin */}
                                  {showPinyin && (
                                    <div className="font-mono text-xs font-bold text-brand">
                                      {ex.pinyin}
                                    </div>
                                  )}

                                  {/* Vietnamese Translation */}
                                  {showTranslation && (
                                    <div className="text-xs sm:text-[13px] text-ink-2 font-medium">
                                      {ex.vietnamese}
                                    </div>
                                  )}
                                </div>

                                {/* Audio Button */}
                                <button
                                  onClick={() => handlePlayAudio(ex.chinese)}
                                  title="Nghe phát âm câu ví dụ"
                                  className={`flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-lg transition-all cursor-pointer ${
                                    isPlaying
                                      ? 'bg-brand text-white scale-105'
                                      : 'bg-tint text-brand hover:bg-brand hover:text-white'
                                  }`}
                                >
                                  <Volume2 className={`h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
