import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Volume2,
  PenTool,
  Bookmark,
  Search,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  ListFilter,
  GraduationCap,
  Layers,
  ChevronRight,
  X
} from 'lucide-react';
import {
  BOYA1_UNITS,
  BOYA1_LESSONS,
  BOYA1_VOCABULARY,
  BOYA1_STATS,
  type BoyaVocabularyWord,
  type BoyaLesson,
  type BoyaUnit
} from '../data/boya1Data';
import {
  BOYA2_UNITS,
  BOYA2_LESSONS,
  BOYA2_VOCABULARY,
  BOYA2_STATS
} from '../data/boya2Data';
import { speakChinese, toggleBookmark, useProgress, normalizeSearch } from '../lib/hsk';
import { HanziStrokeModal } from '../components/HanziStrokeModal';
import { FlashcardModal } from '../components/FlashcardModal';
import { PracticeSession } from '../components/PracticeSession';

const WORDS_PER_PAGE = 24;

export const BoyaPage: React.FC = () => {
  const { lessonId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const progress = useProgress();

  const isBoya2 = location.pathname.includes('/boya/so-cap-2');

  const bookData = useMemo(() => {
    if (isBoya2) {
      return {
        id: 'so-cap-2',
        title: 'Boya Sơ cấp 2',
        titleZh: '博雅汉语 · 初级起步篇 (Tập 2)',
        subtitle: 'Tổng hợp toàn bộ từ vựng chuẩn của 25 bài học thuộc 5 đơn nguyên. Học chuẩn âm Pinyin, âm Hán Việt, tra cứu nét viết bút thuận, luyện thẻ ghi nhớ Flashcard và làm bài tập trắc nghiệm củng cố.',
        coverImage: '/boyasocap2.png',
        units: BOYA2_UNITS,
        lessons: BOYA2_LESSONS,
        vocabulary: BOYA2_VOCABULARY,
        stats: BOYA2_STATS,
        basePath: '/boya/so-cap-2',
        otherBook: { title: 'Boya Sơ cấp 1', link: '/boya/so-cap-1' }
      };
    }
    return {
      id: 'so-cap-1',
      title: 'Boya Sơ cấp 1',
      titleZh: '博雅汉语 · 初级起步篇 (Tập 1)',
      subtitle: 'Tổng hợp toàn bộ từ vựng chuẩn của 30 bài học thuộc 6 đơn nguyên. Học chuẩn âm Pinyin, âm Hán Việt, tra cứu nét viết bút thuận, luyện thẻ ghi nhớ Flashcard và làm bài tập trắc nghiệm củng cố.',
      coverImage: '/boyasocap1.png',
      units: BOYA1_UNITS,
      lessons: BOYA1_LESSONS,
      vocabulary: BOYA1_VOCABULARY,
      stats: BOYA1_STATS,
      basePath: '/boya/so-cap-1',
      otherBook: { title: 'Boya Sơ cấp 2', link: '/boya/so-cap-2' }
    };
  }, [isBoya2]);

  const unitParam = searchParams.get('unit');
  const initialUnit = unitParam ? parseInt(unitParam, 10) : 0;
  const initialLesson = (lessonId && lessonId !== 'so-cap-1' && lessonId !== 'so-cap-2')
    ? parseInt(lessonId, 10)
    : (searchParams.get('lesson') ? parseInt(searchParams.get('lesson')!, 10) : 0);

  const [selectedUnit, setSelectedUnit] = useState<number>(!isNaN(initialUnit) && initialUnit >= 1 && initialUnit <= bookData.stats.totalUnits ? initialUnit : 0);
  const [selectedLesson, setSelectedLesson] = useState<number>(!isNaN(initialLesson) && initialLesson >= 1 && initialLesson <= bookData.stats.totalLessons ? initialLesson : 0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'saved' | 'noun' | 'verb' | 'adj'>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Modals & Interactive States
  const [strokeWord, setStrokeWord] = useState<BoyaVocabularyWord | null>(null);
  const [flashcardOpen, setFlashcardOpen] = useState(searchParams.get('action') === 'flashcard');
  const [practiceModeOpen, setPracticeModeOpen] = useState(searchParams.get('action') === 'practice');
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Sync lesson from URL if changed or book changed
  useEffect(() => {
    if (lessonId && lessonId !== 'so-cap-1' && lessonId !== 'so-cap-2') {
      const num = parseInt(lessonId, 10);
      if (!isNaN(num) && num >= 1 && num <= bookData.stats.totalLessons) {
        setSelectedLesson(num);
        const l = bookData.lessons.find(item => item.number === num);
        if (l) setSelectedUnit(l.unit);
      }
    } else {
      setSelectedLesson(0);
      setSelectedUnit(0);
      setCurrentPage(1);
    }
  }, [lessonId, bookData]);

  // Sync unit and actions from query params
  useEffect(() => {
    const u = searchParams.get('unit');
    if (u) {
      const num = parseInt(u, 10);
      if (!isNaN(num) && num >= 1 && num <= bookData.stats.totalUnits) {
        setSelectedUnit(num);
      }
    }
    const act = searchParams.get('action');
    if (act === 'flashcard') setFlashcardOpen(true);
    if (act === 'practice') setPracticeModeOpen(true);
  }, [searchParams, bookData]);

  // Handle unit selection
  const handleSelectUnit = (unitNum: number) => {
    setSelectedUnit(unitNum);
    setSelectedLesson(0);
    setCurrentPage(1);
  };

  // Handle lesson selection
  const handleSelectLesson = (lessonNum: number) => {
    setSelectedLesson(lessonNum);
    if (lessonNum > 0) {
      const l = bookData.lessons.find(item => item.number === lessonNum);
      if (l) setSelectedUnit(l.unit);
    }
    setCurrentPage(1);
  };

  // Play audio
  const handleSpeak = (text: string, id: string, audioUrl?: string) => {
    setPlayingId(id);
    if (audioUrl) {
      try {
        const audio = new Audio(audioUrl);
        audio.onended = () => setPlayingId(null);
        audio.onerror = () => {
          speakChinese(text, () => setPlayingId(null));
        };
        audio.play().catch(() => {
          speakChinese(text, () => setPlayingId(null));
        });
        return;
      } catch {
        // fallback
      }
    }
    speakChinese(text, () => setPlayingId(null));
    setTimeout(() => setPlayingId(null), 1200);
  };

  // Normalized search query
  const normalizedQuery = normalizeSearch(searchQuery);

  // Filtered vocabulary list
  const filteredWords = useMemo(() => {
    return bookData.vocabulary.filter(word => {
      // Unit filter
      if (selectedUnit > 0 && word.unit !== selectedUnit) {
        return false;
      }
      // Lesson filter
      if (selectedLesson > 0 && word.lesson !== selectedLesson) {
        return false;
      }
      // Status filter
      if (activeFilter === 'saved' && !progress.bookmarks.includes(word.id)) {
        return false;
      }
      if (activeFilter === 'noun' && !word.partOfSpeech.includes('Danh từ')) {
        return false;
      }
      if (activeFilter === 'verb' && !word.partOfSpeech.includes('Động từ')) {
        return false;
      }
      if (activeFilter === 'adj' && !word.partOfSpeech.includes('Tính từ')) {
        return false;
      }
      // Search query filter
      if (normalizedQuery) {
        const text = `${word.hanzi} ${word.pinyin} ${word.meaning} ${word.sinoVietnamese || ''}`;
        if (!normalizeSearch(text).includes(normalizedQuery)) {
          return false;
        }
      }
      return true;
    });
  }, [bookData.vocabulary, selectedUnit, selectedLesson, activeFilter, normalizedQuery, progress.bookmarks]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredWords.length / WORDS_PER_PAGE);
  const displayedWords = useMemo(() => {
    const start = (currentPage - 1) * WORDS_PER_PAGE;
    return filteredWords.slice(start, start + WORDS_PER_PAGE);
  }, [filteredWords, currentPage]);

  const activeLessonMeta = selectedLesson > 0 ? bookData.lessons.find(l => l.number === selectedLesson) : null;
  const activeUnitMeta = selectedUnit > 0 ? bookData.units.find(u => u.unit === selectedUnit) : null;

  // Bookmarked count in Boya
  const boyaBookmarkCount = useMemo(() => {
    return bookData.vocabulary.filter(w => progress.bookmarks.includes(w.id)).length;
  }, [bookData.vocabulary, progress.bookmarks]);

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pt-6">
        
        {/* Navigation Breadcrumb & Back Link */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-2">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-brand transition-colors no-underline">Trang chủ</Link>
            <span>/</span>
            <Link to="/boya" className="hover:text-brand transition-colors no-underline">Giáo trình Boya</Link>
            <span>/</span>
            <span className="text-ink font-semibold">{bookData.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={bookData.otherBook.link}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200/80 hover:bg-amber-100 transition-all no-underline shadow-2xs hover:scale-105"
            >
              <span>{bookData.otherBook.title} →</span>
            </Link>
            <Link
              to="/boya"
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold text-brand bg-white border border-line hover:bg-tint/60 transition-all no-underline shadow-2xs hover:scale-105"
            >
              <span>← Tủ sách Boya</span>
            </Link>
          </div>
        </div>

        {/* Hero Header Banner with Book Cover */}
        <header className="relative mb-8 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1B3B4B] via-[#245369] to-[#2D6682] px-6 py-6 text-white shadow-md sm:px-8 sm:py-8">
          {/* Watermark character */}
          <span className="pointer-events-none absolute -right-6 -bottom-10 select-none font-hanzi text-[190px] font-black text-white/5 sm:text-[230px]">
            博雅
          </span>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-[700px]">
              {/* Book cover image */}
              <div className="relative flex-shrink-0 w-24 sm:w-28 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <img
                  src={bookData.coverImage}
                  alt={`Bìa sách ${bookData.title}`}
                  className="w-full h-auto object-cover block"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/30 to-transparent" />
              </div>

              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 backdrop-blur-xs">
                  <span>📚</span>
                  <span>{bookData.titleZh}</span>
                </div>
                <h1 className="text-2xl sm:text-[30px] font-black tracking-tight leading-tight">
                  Giáo trình Hán ngữ {bookData.title}
                </h1>
                <p className="mt-2 text-xs sm:text-[14px] leading-relaxed text-white/85">
                  {bookData.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setFlashcardOpen(true)}
                    disabled={filteredWords.length === 0}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 px-3.5 py-2 text-xs font-bold text-[#382600] shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Ôn Flashcard ({filteredWords.length} từ)</span>
                  </button>
                  <button
                    onClick={() => setPracticeModeOpen(!practiceModeOpen)}
                    disabled={filteredWords.length === 0}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white/20 hover:bg-white/30 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-xs border border-white/25 shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>{practiceModeOpen ? 'Đóng trắc nghiệm' : 'Luyện trắc nghiệm'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:flex lg:flex-col flex-shrink-0">
              <div className="rounded-2xl bg-white/12 px-4 py-2.5 text-center border border-white/10 backdrop-blur-xs">
                <strong className="block text-xl font-black text-white">{bookData.stats.totalWords}</strong>
                <span className="text-[10.5px] font-medium text-white/80">Từ vựng chuẩn</span>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-2.5 text-center border border-white/10 backdrop-blur-xs">
                <strong className="block text-xl font-black text-white">{bookData.stats.totalLessons}</strong>
                <span className="text-[10.5px] font-medium text-white/80">{bookData.stats.totalLessons} bài ({bookData.stats.totalUnits} đơn vị)</span>
              </div>
              <div className="rounded-2xl bg-white/12 px-4 py-2.5 text-center border border-white/10 backdrop-blur-xs">
                <strong className="block text-xl font-black text-amber-300">{boyaBookmarkCount}</strong>
                <span className="text-[10.5px] font-medium text-white/80">Từ đã lưu</span>
              </div>
            </div>
          </div>
        </header>

        {/* Practice Mode Container */}
        {practiceModeOpen && (
          <section className="mb-8 rounded-[22px] border border-brand/20 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tint text-brand">🎯</span>
                <h2 className="text-lg font-bold text-ink">
                  Chế độ luyện tập trắc nghiệm — {activeLessonMeta ? activeLessonMeta.titleVi : 'Toàn bộ ' + bookData.title}
                </h2>
              </div>
              <button
                onClick={() => setPracticeModeOpen(false)}
                className="rounded-lg p-1.5 text-muted hover:bg-page hover:text-ink transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <PracticeSession words={filteredWords} />
          </section>
        )}

        {/* Unit Selector Pills */}
        <section className="mb-6">
          <div className="mb-2.5 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-brand" />
              <span>Phân chia theo {bookData.stats.totalUnits} Đơn vị (Đơn nguyên)</span>
            </h3>
            {selectedUnit > 0 && (
              <button
                onClick={() => handleSelectUnit(0)}
                className="text-xs font-semibold text-brand hover:underline cursor-pointer"
              >
                Xem tất cả đơn vị
              </button>
            )}
          </div>
          <div className={`grid grid-cols-2 gap-2 sm:grid-cols-3 ${bookData.units.length <= 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
            {bookData.units.map(u => {
              const isActive = selectedUnit === u.unit;
              return (
                <button
                  key={u.unit}
                  onClick={() => handleSelectUnit(isActive ? 0 : u.unit)}
                  className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-brand bg-brand text-white shadow-sm scale-[1.02]'
                      : 'border-line bg-white hover:border-brand/40 hover:bg-tint/30 text-ink'
                  }`}
                >
                  <span className={`text-[11px] font-bold ${isActive ? 'text-amber-200' : 'text-brand'}`}>
                    Đơn vị {u.unit} ({u.lessonRange})
                  </span>
                  <span className={`text-xs font-bold line-clamp-1 mt-0.5 ${isActive ? 'text-white' : 'text-ink'}`}>
                    {u.title}
                  </span>
                  <span className={`text-[10.5px] mt-1 line-clamp-1 ${isActive ? 'text-white/80' : 'text-muted'}`}>
                    {u.titleZh}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Lesson Selector Row */}
        <section className="mb-6">
          <div className="mb-2.5 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-ink-2 flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-brand" />
              <span>
                Chọn bài học {selectedUnit > 0 ? `(Đơn vị ${selectedUnit})` : `(Bài 1 – ${bookData.stats.totalLessons})`}
              </span>
            </h3>
            {selectedLesson > 0 && (
              <button
                onClick={() => handleSelectLesson(0)}
                className="text-xs font-semibold text-brand hover:underline cursor-pointer"
              >
                Xem tất cả bài học
              </button>
            )}
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => handleSelectLesson(0)}
              className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                selectedLesson === 0
                  ? 'bg-brand text-white shadow-xs'
                  : 'bg-white text-ink-2 border border-line hover:bg-tint/50'
              }`}
            >
              Tất cả bài ({bookData.vocabulary.length} từ)
            </button>
            {bookData.lessons
              .filter(l => selectedUnit === 0 || l.unit === selectedUnit)
              .map(l => {
                const isActive = selectedLesson === l.number;
                return (
                  <button
                    key={l.number}
                    onClick={() => handleSelectLesson(isActive ? 0 : l.number)}
                    title={`Bài ${l.number}: ${l.titleZh} - ${l.titleVi}`}
                    className={`flex-shrink-0 flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-brand text-white shadow-xs'
                        : 'bg-white text-ink-2 border border-line hover:bg-tint/50'
                    }`}
                  >
                    <span>Bài {l.number}</span>
                    <span className={`text-[10px] font-normal ${isActive ? 'text-white/80' : 'text-muted'}`}>
                      ({l.titleZh})
                    </span>
                  </button>
                );
              })}
          </div>
        </section>

        {/* Search & Filter Bar */}
        <section className="mb-6 rounded-2xl bg-white border border-line p-3.5 sm:p-4 shadow-xs">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Box */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Tra cứu chữ Hán, Pinyin, Hán Việt hoặc nghĩa tiếng Việt..."
                className="w-full rounded-xl bg-page pl-9 pr-9 py-2 text-sm text-ink placeholder:text-muted focus:outline-hidden focus:ring-2 focus:ring-brand/30 border border-line transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-muted flex items-center gap-1 mr-1">
                <ListFilter className="h-3.5 w-3.5" /> Lọc:
              </span>
              {[
                { id: 'all', label: `Tất cả (${filteredWords.length})` },
                { id: 'saved', label: `Đã lưu (${boyaBookmarkCount})` },
                { id: 'noun', label: 'Danh từ' },
                { id: 'verb', label: 'Động từ' },
                { id: 'adj', label: 'Tính từ' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFilter(f.id as any);
                    setCurrentPage(1);
                  }}
                  className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? 'bg-brand text-white shadow-2xs'
                      : 'bg-page text-ink-2 hover:bg-tint/50 border border-line/60'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Context Banner */}
          {(activeLessonMeta || activeUnitMeta || searchQuery) && (
            <div className="mt-3 pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span>Đang hiển thị:</span>
                {activeLessonMeta ? (
                  <span className="font-bold text-brand bg-tint px-2 py-0.5 rounded-md">
                    Bài {activeLessonMeta.number}: {activeLessonMeta.titleZh} ({activeLessonMeta.titleVi})
                  </span>
                ) : activeUnitMeta ? (
                  <span className="font-bold text-brand bg-tint px-2 py-0.5 rounded-md">
                    Đơn vị {activeUnitMeta.unit}: {activeUnitMeta.title}
                  </span>
                ) : null}
                {searchQuery && (
                  <span className="font-medium text-ink bg-gray-100 px-2 py-0.5 rounded-md">
                    Từ khóa: &ldquo;{searchQuery}&rdquo;
                  </span>
                )}
                <span>— {filteredWords.length} từ</span>
              </div>

              <button
                onClick={() => {
                  setSelectedUnit(0);
                  setSelectedLesson(0);
                  setSearchQuery('');
                  setActiveFilter('all');
                  setCurrentPage(1);
                }}
                className="text-xs text-brand hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" /> Đặt lại tất cả
              </button>
            </div>
          )}
        </section>

        {/* Vocabulary Grid */}
        {displayedWords.length === 0 ? (
          <div className="my-12 rounded-2xl border border-line bg-white p-12 text-center">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-tint text-2xl">
              🔍
            </div>
            <h3 className="text-base font-bold text-ink">Không tìm thấy từ vựng phù hợp</h3>
            <p className="mt-1 text-xs text-muted max-w-sm mx-auto">
              Thử tìm với từ khóa khác, hoặc chọn lại bài học / đơn vị kiến thức trên thanh công cụ.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setSelectedUnit(0);
                setSelectedLesson(0);
              }}
              className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white hover:bg-brand-dark transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Xem toàn bộ từ vựng
            </button>
          </div>
        ) : (
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedWords.map(word => {
              const isBookmarked = progress.bookmarks.includes(word.id);
              const isPlaying = playingId === word.id;

              return (
                <div
                  key={word.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-4.5 shadow-2xs hover:shadow-md hover:border-brand/40 transition-all"
                >
                  <div>
                    {/* Top Row: Lesson tag, Part of speech, Bookmark */}
                    <div className="mb-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="rounded-md bg-tint px-2 py-0.5 text-[10.5px] font-bold text-brand">
                          Bài {word.lesson}
                        </span>
                        {word.partOfSpeech && (
                          <span className="rounded-md bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-ink-2">
                            {word.partOfSpeech}
                          </span>
                        )}
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={() => toggleBookmark(word.id)}
                        title={isBookmarked ? 'Bỏ lưu từ này' : 'Lưu từ để ôn tập'}
                        className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                          isBookmarked
                            ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                            : 'text-muted hover:text-ink hover:bg-page'
                        }`}
                      >
                        <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                      </button>
                    </div>

                    {/* Word Character & Pronunciation */}
                    <div className="mb-2 flex items-baseline gap-2.5">
                      <span className="font-hanzi text-2xl font-black text-ink tracking-tight">
                        {word.hanzi}
                      </span>
                      <span className="font-mono text-sm font-bold text-brand">
                        {word.pinyin}
                      </span>
                      {word.sinoVietnamese && (
                        <span className="rounded-md bg-amber-50 px-1.5 py-0.5 text-[10.5px] font-bold text-[#8A5F0C]">
                          {word.sinoVietnamese}
                        </span>
                      )}
                    </div>

                    {/* Meaning in Vietnamese */}
                    <p className="text-[13.5px] leading-snug font-medium text-ink mb-3">
                      {word.meaning}
                    </p>

                    {/* Example Sentence */}
                    {word.exampleSentence && (
                      <div className="rounded-xl bg-[#F8FAFC] border border-line/70 p-2.5 text-xs">
                        <div className="flex items-start justify-between gap-1.5">
                          <p className="font-hanzi text-ink font-semibold text-[13px]">
                            {word.exampleSentence.chinese}
                          </p>
                          <button
                            onClick={() => handleSpeak(word.exampleSentence!.chinese, `${word.id}-ex`)}
                            title="Nghe câu ví dụ"
                            className="text-muted hover:text-brand transition-colors p-0.5 cursor-pointer flex-shrink-0"
                          >
                            <Volume2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] font-medium text-brand/90 mt-0.5">
                          {word.exampleSentence.pinyin}
                        </p>
                        <p className="text-[11px] text-muted mt-0.5">
                          {word.exampleSentence.vietnamese}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                    <button
                      onClick={() => handleSpeak(word.hanzi, word.id, word.audioUrl)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-bold transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-brand text-white'
                          : 'bg-tint text-brand hover:bg-brand hover:text-white'
                      }`}
                    >
                      <Volume2 className={`h-3.5 w-3.5 ${isPlaying ? 'animate-pulse' : ''}`} />
                      <span>Phát âm</span>
                    </button>

                    <button
                      onClick={() => setStrokeWord(word)}
                      className="inline-flex items-center gap-1 text-muted hover:text-brand font-medium transition-colors cursor-pointer"
                    >
                      <PenTool className="h-3.5 w-3.5" />
                      <span>Nét bút thuận</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink hover:bg-tint disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              Trang trước
            </button>
            <div className="flex items-center gap-1 px-2 text-xs font-semibold text-ink-2">
              <span>Trang {currentPage} / {totalPages}</span>
              <span className="text-muted">({filteredWords.length} từ)</span>
            </div>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-line bg-white px-3 py-2 text-xs font-bold text-ink hover:bg-tint disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
            >
              Trang sau
            </button>
          </div>
        )}

      </div>

      {/* Stroke Modal */}
      {strokeWord && (
        <HanziStrokeModal
          isOpen={!!strokeWord}
          onClose={() => setStrokeWord(null)}
          word={strokeWord}
        />
      )}

      {/* Flashcard Modal */}
      <FlashcardModal
        isOpen={flashcardOpen}
        onClose={() => setFlashcardOpen(false)}
        words={filteredWords}
        title={`Flashcard: ${activeLessonMeta ? activeLessonMeta.titleVi : bookData.title}`}
      />
    </div>
  );
};
