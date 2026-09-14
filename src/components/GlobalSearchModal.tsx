import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  Volume2,
  BookOpen,
  GraduationCap,
  Compass,
  Trophy,
  Sparkles,
  Award,
  Feather,
  BookMarked,
  Home,
  User,
  ArrowRight,
  CornerDownLeft,
  Flame,
} from 'lucide-react';
import { normalizeSearch, speakChinese, loadLevel } from '../lib/hsk';
import { SAMPLE_VOCABULARY } from '../data/sampleVocab';
import { BOYA1_VOCABULARY } from '../data/boya1Data';
import { BOYA2_VOCABULARY } from '../data/boya2Data';
import { HSK1_ENRICHED_GRAMMAR } from '../data/hsk1GrammarData';
import { SAMPLE_GRAMMAR } from '../data/grammarPoints';
import { CHENGYU_STORIES } from '../data/chengyuStories';
import { TANG_POEMS } from '../data/tangPoems';
import type { VocabularyWord } from '../types';

interface SearchResultItem {
  id: string;
  type: 'vocab' | 'grammar' | 'culture' | 'link';
  title: string;
  subtitle?: string;
  details?: string;
  tag: string;
  tagColor: string;
  url: string;
  hanziToSpeak?: string;
}

const QUICK_LINKS: SearchResultItem[] = [
  {
    id: 'link-home',
    type: 'link',
    title: 'Trang chủ',
    subtitle: 'Bảng tin học tập & lộ trình cá nhân',
    tag: 'Chính',
    tagColor: 'bg-stone-100 text-stone-700 border-stone-200',
    url: '/',
  },
  {
    id: 'link-hsk',
    type: 'link',
    title: 'Lộ trình New HSK 3.0',
    subtitle: 'Tổng hợp từ vựng & ngữ pháp HSK 1 đến HSK 7–9',
    tag: 'HSK',
    tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
    url: '/hsk',
  },
  {
    id: 'link-hsk1',
    type: 'link',
    title: 'HSK 1 (Sơ cấp khởi động)',
    subtitle: '300 từ vựng, 70 điểm ngữ pháp, 15 bài học chuẩn',
    tag: 'HSK 1',
    tagColor: 'bg-sky-100 text-sky-800 border-sky-200',
    url: '/hsk/hsk1',
  },
  {
    id: 'link-hsk2',
    type: 'link',
    title: 'HSK 2 (Sơ cấp giao tiếp)',
    subtitle: '200 từ vựng, 78 điểm ngữ pháp',
    tag: 'HSK 2',
    tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    url: '/hsk/hsk2',
  },
  {
    id: 'link-hsk3',
    type: 'link',
    title: 'HSK 3 (Trung cấp cơ sở)',
    subtitle: '500 từ vựng, 96 điểm ngữ pháp',
    tag: 'HSK 3',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
    url: '/hsk/hsk3',
  },
  {
    id: 'link-boya',
    type: 'link',
    title: 'Giáo trình Hán ngữ Boya',
    subtitle: 'Boya Sơ cấp 1 và Sơ cấp 2 toàn diện',
    tag: 'Boya',
    tagColor: 'bg-orange-100 text-orange-800 border-orange-200',
    url: '/boya',
  },
  {
    id: 'link-yct',
    type: 'link',
    title: 'Giáo trình Thiếu Nhi YCT',
    subtitle: 'Chuẩn quốc tế YCT 1 đến YCT 6 cho thanh thiếu nhi',
    tag: 'YCT',
    tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
    url: '/yct',
  },
  {
    id: 'link-culture-game',
    type: 'link',
    title: '1000 câu hỏi Văn hóa Trung Quốc',
    subtitle: 'Lịch sử, văn học, nghệ thuật, khoa học và đời sống',
    tag: 'Văn hóa',
    tagColor: 'bg-violet-100 text-violet-800 border-violet-200',
    url: '/kham-pha/van-hoa-trung-quoc',
  },
  {
    id: 'link-chengyu',
    type: 'link',
    title: 'Thành ngữ điển cố Trung Hoa',
    subtitle: 'Kho tàng 30 thành ngữ & câu chuyện lịch sử ngụ ngôn',
    tag: 'Thành ngữ',
    tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
    url: '/kham-pha/thanh-ngu-dien-co',
  },
  {
    id: 'link-poetry',
    type: 'link',
    title: 'Thơ Đường tuyển tập',
    subtitle: '30 thi phẩm Đường thi bất hủ kèm dịch thơ & phân tích',
    tag: 'Thơ Đường',
    tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
    url: '/kham-pha/tho-duong',
  },
  {
    id: 'link-leaderboard',
    type: 'link',
    title: 'Bảng xếp hạng tuần',
    subtitle: 'Thi đua điểm XP & sao chăm chỉ toàn quốc',
    tag: 'Xếp hạng',
    tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
    url: '/xep-hang',
  },
  {
    id: 'link-courses',
    type: 'link',
    title: 'Khóa học tiếng Trung',
    subtitle: 'Các lớp học cùng cô Nguyễn Thị Kim Chi',
    tag: 'Khóa học',
    tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    url: '/khoa-hoc',
  },
  {
    id: 'link-teacher',
    type: 'link',
    title: 'Giới thiệu Giáo viên',
    subtitle: 'Cô Nguyễn Thị Kim Chi · HSK 6 · ĐH Hùng Vương TP. HCM',
    tag: 'Giáo viên',
    tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    url: '/giao-vien',
  },
  {
    id: 'link-me',
    type: 'link',
    title: 'Hồ sơ của tôi',
    subtitle: 'Tiến độ học tập, điểm số & Sổ tay từ vựng cá nhân',
    tag: 'Cá nhân',
    tagColor: 'bg-brand/10 text-brand border-brand/20',
    url: '/me',
  },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hskWords, setHskWords] = useState<VocabularyWord[]>([]);

  // Pre-load HSK 1 and HSK 2 words in the background when modal is mounted
  useEffect(() => {
    let active = true;
    Promise.all([
      loadLevel('hsk1').then((d) => d.words).catch(() => []),
      loadLevel('hsk2').then((d) => d.words).catch(() => []),
    ]).then(([words1, words2]) => {
      if (active) {
        setHskWords([...words1, ...words2]);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  // Debounce input to keep UI responsive (<150ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
      setSelectedIndex(0);
    }, 120);
    return () => clearTimeout(timer);
  }, [query]);

  // Focus input automatically when modal opens & reset state
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setDebouncedQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Lock background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Search calculations
  const { vocabResults, grammarResults, cultureResults, linkResults } = useMemo(() => {
    if (!debouncedQuery) {
      return {
        vocabResults: [] as SearchResultItem[],
        grammarResults: [] as SearchResultItem[],
        cultureResults: [] as SearchResultItem[],
        linkResults: QUICK_LINKS.slice(0, 6),
      };
    }

    const q = normalizeSearch(debouncedQuery);
    const raw = debouncedQuery.toLowerCase();

    // 1. Vocabulary Search (HSK + Boya + Sample)
    const allVocabPool: Array<{
      id: string;
      hanzi: string;
      pinyin: string;
      meaning: string;
      sinoVietnamese?: string;
      level: string;
      url: string;
    }> = [];

    // Loaded HSK words
    for (const w of hskWords) {
      allVocabPool.push({
        id: w.id,
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        meaning: w.meaning,
        sinoVietnamese: w.sinoVietnamese,
        level: (w.hskLevel || 'hsk1').toUpperCase(),
        url: `/hsk/${w.hskLevel || 'hsk1'}`,
      });
    }

    // Boya 1
    for (const w of BOYA1_VOCABULARY) {
      allVocabPool.push({
        id: `boya1-${w.id}`,
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        meaning: w.meaning,
        sinoVietnamese: w.sinoVietnamese,
        level: 'Boya 1',
        url: `/boya/so-cap-1`,
      });
    }

    // Boya 2
    for (const w of BOYA2_VOCABULARY) {
      allVocabPool.push({
        id: `boya2-${w.id}`,
        hanzi: w.hanzi,
        pinyin: w.pinyin,
        meaning: w.meaning,
        sinoVietnamese: w.sinoVietnamese,
        level: 'Boya 2',
        url: `/boya/so-cap-2`,
      });
    }

    // Sample vocab fallback
    for (const list of Object.values(SAMPLE_VOCABULARY)) {
      for (const w of list) {
        if (!allVocabPool.some((item) => item.hanzi === w.hanzi)) {
          allVocabPool.push({
            id: `sample-${w.id}`,
            hanzi: w.hanzi,
            pinyin: w.pinyin,
            meaning: w.meaning,
            sinoVietnamese: w.sinoVietnamese,
            level: (w.hskLevel || 'hsk1').toUpperCase(),
            url: `/hsk/${w.hskLevel || 'hsk1'}`,
          });
        }
      }
    }

    const matchedVocab: SearchResultItem[] = [];
    for (const w of allVocabPool) {
      if (matchedVocab.length >= 6) break;

      const matchHanzi = w.hanzi.includes(raw);
      const matchPinyin = normalizeSearch(w.pinyin).includes(q);
      const matchMeaning = normalizeSearch(w.meaning || '').includes(q);
      const matchSino = normalizeSearch(w.sinoVietnamese || '').includes(q);

      if (matchHanzi || matchPinyin || matchMeaning || matchSino) {
        matchedVocab.push({
          id: w.id,
          type: 'vocab',
          title: `${w.hanzi} · ${w.pinyin}`,
          subtitle: w.sinoVietnamese ? `[Hán Việt: ${w.sinoVietnamese}] ${w.meaning}` : w.meaning,
          tag: w.level,
          tagColor: w.level.startsWith('HSK')
            ? 'bg-blue-100 text-blue-900 border-blue-200'
            : 'bg-orange-100 text-orange-900 border-orange-200',
          url: w.url,
          hanziToSpeak: w.hanzi,
        });
      }
    }

    // 2. Grammar Search
    const matchedGrammar: SearchResultItem[] = [];
    // From HSK1 enriched grammar
    for (const g of HSK1_ENRICHED_GRAMMAR) {
      if (matchedGrammar.length >= 4) break;
      const matchZh = g.titleZh?.includes(raw);
      const matchVi = normalizeSearch(g.titleVi || '').includes(q);
      const matchStruct = normalizeSearch(g.structure || '').includes(q);
      const matchExp = normalizeSearch(g.explanationVi || '').includes(q);

      if (matchZh || matchVi || matchStruct || matchExp) {
        matchedGrammar.push({
          id: `grammar-${g.id}`,
          type: 'grammar',
          title: g.titleVi,
          subtitle: `Cấu trúc: ${g.structure}`,
          details: g.explanationVi,
          tag: 'HSK 1',
          tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
          url: '/hsk/hsk1/grammar',
        });
      }
    }

    // From sample grammar
    for (const [levelCode, list] of Object.entries(SAMPLE_GRAMMAR)) {
      for (const g of list) {
        if (matchedGrammar.length >= 4) break;
        if (matchedGrammar.some((item) => item.id === `grammar-${g.id}`)) continue;
        const matchTitle = normalizeSearch(g.title).includes(q);
        const matchStruct = normalizeSearch(g.structure).includes(q);
        const matchExp = normalizeSearch(g.explanation).includes(q);

        if (matchTitle || matchStruct || matchExp) {
          matchedGrammar.push({
            id: `grammar-${g.id}`,
            type: 'grammar',
            title: g.title,
            subtitle: `Cấu trúc: ${g.structure}`,
            details: g.explanation,
            tag: levelCode.toUpperCase(),
            tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
            url: `/hsk/${levelCode}/grammar`,
          });
        }
      }
    }

    // 3. Culture Search (Chengyu & Tang Poems)
    const matchedCulture: SearchResultItem[] = [];
    // Chengyu
    for (const c of CHENGYU_STORIES) {
      if (matchedCulture.length >= 2) break;
      const matchHanzi = c.hanzi.includes(raw);
      const matchPinyin = normalizeSearch(c.pinyin).includes(q);
      const matchSino = normalizeSearch(c.sinoVietnamese).includes(q);
      const matchMeaning =
        normalizeSearch(c.figurativeMeaning).includes(q) ||
        normalizeSearch(c.literalMeaning).includes(q);

      if (matchHanzi || matchPinyin || matchSino || matchMeaning) {
        matchedCulture.push({
          id: `chengyu-${c.id}`,
          type: 'culture',
          title: `${c.hanzi} (${c.sinoVietnamese})`,
          subtitle: `${c.pinyin} · ${c.figurativeMeaning}`,
          tag: 'Thành ngữ',
          tagColor: 'bg-rose-100 text-rose-900 border-rose-200',
          url: `/kham-pha/thanh-ngu-dien-co/${c.id}`,
          hanziToSpeak: c.hanzi,
        });
      }
    }

    // Tang Poems
    for (const p of TANG_POEMS) {
      if (matchedCulture.length >= 4) break;
      const matchTitle = p.title.includes(raw);
      const matchPinyin = normalizeSearch(p.pinyinTitle).includes(q);
      const matchSino = normalizeSearch(p.sinoTitle).includes(q);
      const matchAuthor = normalizeSearch(p.author).includes(q);
      const matchTrans = normalizeSearch(p.poeticTranslation).includes(q);

      if (matchTitle || matchPinyin || matchSino || matchAuthor || matchTrans) {
        matchedCulture.push({
          id: `poem-${p.id}`,
          type: 'culture',
          title: `${p.title} (${p.sinoTitle})`,
          subtitle: `Tác giả: ${p.author} · ${p.pinyinTitle}`,
          tag: 'Đường thi',
          tagColor: 'bg-teal-100 text-teal-900 border-teal-200',
          url: `/kham-pha/tho-duong/${p.id}`,
          hanziToSpeak: p.title,
        });
      }
    }

    // 4. Quick Links matching
    const matchedLinks = QUICK_LINKS.filter((link) => {
      const matchTitle = normalizeSearch(link.title).includes(q);
      const matchSub = normalizeSearch(link.subtitle || '').includes(q);
      return matchTitle || matchSub;
    }).slice(0, 4);

    return {
      vocabResults: matchedVocab,
      grammarResults: matchedGrammar,
      cultureResults: matchedCulture,
      linkResults: matchedLinks,
    };
  }, [debouncedQuery, hskWords]);

  // Flattened array of all visible results for linear keyboard navigation
  const allResults = useMemo(() => {
    return [...vocabResults, ...grammarResults, ...cultureResults, ...linkResults];
  }, [vocabResults, grammarResults, cultureResults, linkResults]);

  // Execute selection
  const handleSelect = (item: SearchResultItem) => {
    navigate(item.url);
    onClose();
  };

  // Keyboard navigation handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (allResults.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % allResults.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + allResults.length) % allResults.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = allResults[selectedIndex];
      if (target) {
        handleSelect(target);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 pt-[6vh] sm:pt-[10vh] animate-in fade-in duration-150"
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-stone-200 bg-[#FCFAF6] shrink-0">
          <Search className="w-5 h-5 text-brand shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm chữ Hán, Pinyin, nghĩa tiếng Việt, ngữ pháp, thành ngữ..."
            className="flex-1 bg-transparent border-0 text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setDebouncedQuery('');
                inputRef.current?.focus();
              }}
              aria-label="Xóa tìm kiếm"
              className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md bg-stone-100 border border-stone-200 px-2 py-0.5 text-[11px] font-mono text-stone-500 select-none">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div ref={listRef} className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 momentum-scroll">
          {/* Empty state: No results found */}
          {debouncedQuery && allResults.length === 0 && (
            <div className="py-12 text-center text-stone-500">
              <div className="text-3xl mb-2">🔍</div>
              <p className="text-sm font-bold text-stone-800">Không tìm thấy kết quả phù hợp</p>
              <p className="text-xs text-stone-500 mt-1">
                Thử tìm từ khóa ngắn hơn, gõ Pinyin không dấu hoặc nghĩa tiếng Việt.
              </p>
            </div>
          )}

          {/* If query is empty, show welcoming tips & quick navigation */}
          {!debouncedQuery && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider px-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Điều hướng & Khám phá nhanh</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {linkResults.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand/8 border-brand shadow-xs'
                          : 'bg-stone-50/70 border-stone-200/80 hover:bg-stone-100/80'
                      }`}
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="text-xs font-bold text-stone-900 truncate">{item.title}</div>
                        <div className="text-[11px] text-stone-500 truncate">{item.subtitle}</div>
                      </div>
                      <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-brand' : 'text-stone-300'}`} />
                    </button>
                  );
                })}
              </div>
              <div className="px-2 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>💡 Gõ tiếng Việt có dấu hoặc không dấu (vd: <code>ni hao</code>, <code>xin chao</code>)</span>
                <span className="hidden sm:inline">Phím tắt: Ctrl + K</span>
              </div>
            </div>
          )}

          {/* 1. Group: Từ vựng HSK & Boya */}
          {vocabResults.length > 0 && (
            <section>
              <div className="flex items-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 mb-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Từ vựng HSK & Giáo trình Boya ({vocabResults.length})</span>
              </div>
              <div className="space-y-1">
                {vocabResults.map((item) => {
                  const globalIdx = allResults.findIndex((r) => r.id === item.id);
                  const isSelected = selectedIndex === globalIdx;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-brand/10 border-l-4 border-brand pl-3'
                          : 'hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="min-w-0 flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm sm:text-base text-stone-900">{item.title}</span>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${item.tagColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-xs text-stone-600 truncate mt-0.5">{item.subtitle}</div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.hanziToSpeak && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakChinese(item.hanziToSpeak!);
                            }}
                            title="Nghe phát âm"
                            className="p-1.5 rounded-lg text-stone-400 hover:text-brand hover:bg-stone-200/50 transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-brand hidden sm:block animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 2. Group: Ngữ pháp trọng tâm */}
          {grammarResults.length > 0 && (
            <section>
              <div className="flex items-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 mb-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ngữ pháp trọng tâm ({grammarResults.length})</span>
              </div>
              <div className="space-y-1">
                {grammarResults.map((item) => {
                  const globalIdx = allResults.findIndex((r) => r.id === item.id);
                  const isSelected = selectedIndex === globalIdx;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-emerald-50/80 border-l-4 border-emerald-600 pl-3'
                          : 'hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="min-w-0 flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-stone-900">{item.title}</span>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${item.tagColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-xs text-stone-500 font-mono truncate mt-0.5">{item.subtitle}</div>
                      </div>

                      {isSelected && (
                        <CornerDownLeft className="w-3.5 h-3.5 text-emerald-700 hidden sm:block animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 3. Group: Thành ngữ & Thơ Đường */}
          {cultureResults.length > 0 && (
            <section>
              <div className="flex items-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 mb-1.5">
                <Feather className="w-3.5 h-3.5 text-rose-600" />
                <span>Thành ngữ điển cố & Thơ Đường ({cultureResults.length})</span>
              </div>
              <div className="space-y-1">
                {cultureResults.map((item) => {
                  const globalIdx = allResults.findIndex((r) => r.id === item.id);
                  const isSelected = selectedIndex === globalIdx;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-rose-50/70 border-l-4 border-rose-600 pl-3'
                          : 'hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="min-w-0 flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-stone-900">{item.title}</span>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${item.tagColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-xs text-stone-600 truncate mt-0.5">{item.subtitle}</div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {item.hanziToSpeak && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakChinese(item.hanziToSpeak!);
                            }}
                            title="Nghe phát âm"
                            className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-stone-200/50 transition-colors"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        )}
                        {isSelected && (
                          <CornerDownLeft className="w-3.5 h-3.5 text-rose-600 hidden sm:block animate-pulse" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 4. Group: Điều hướng nhanh */}
          {debouncedQuery && linkResults.length > 0 && (
            <section>
              <div className="flex items-center gap-2 text-[11px] font-bold text-stone-400 uppercase tracking-wider px-2 mb-1.5">
                <Compass className="w-3.5 h-3.5 text-purple-600" />
                <span>Trang & Lộ trình ({linkResults.length})</span>
              </div>
              <div className="space-y-1">
                {linkResults.map((item) => {
                  const globalIdx = allResults.findIndex((r) => r.id === item.id);
                  const isSelected = selectedIndex === globalIdx;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(globalIdx)}
                      className={`group flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-purple-50/80 border-l-4 border-purple-600 pl-3'
                          : 'hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="min-w-0 flex-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs sm:text-sm text-stone-900">{item.title}</span>
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md border ${item.tagColor}`}
                          >
                            {item.tag}
                          </span>
                        </div>
                        <div className="text-xs text-stone-500 truncate mt-0.5">{item.subtitle}</div>
                      </div>

                      {isSelected && (
                        <CornerDownLeft className="w-3.5 h-3.5 text-purple-600 hidden sm:block animate-pulse" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono text-[10px] shadow-2xs">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono text-[10px] shadow-2xs">↓</kbd>
              <span>di chuyển</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono text-[10px] shadow-2xs">↵</kbd>
              <span>mở trang</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-200 font-mono text-[10px] shadow-2xs">esc</kbd>
              <span>đóng</span>
            </span>
          </div>
          <div className="text-[11px] text-stone-400 font-medium">
            Hanyu Daily Quick Search
          </div>
        </div>
      </div>
    </div>
  );
};
