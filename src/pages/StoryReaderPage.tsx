import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  BookOpen,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle2,
  Trophy,
  RotateCcw,
  Maximize2,
  Minimize2,
  Layers,
  HelpCircle,
  Award,
  X,
} from 'lucide-react';
import { getStoryById, getPageTokens, StoryPage } from '../data/storiesData';
import { getStoryProgress, saveStoryProgress } from '../data/storyProgress';
import { getOptimizedStoryImage, getStoryThumbnail } from '../lib/story-media';
import { speakChinese, stopChineseSpeech, isAppleDevice } from '../lib/hsk';

function HanziTextWithPinyin({
  page,
  showPinyin,
  fontSize,
  isFullscreen,
  onCharClick,
}: {
  page: StoryPage;
  showPinyin: boolean;
  fontSize: 'base' | 'lg' | 'xl';
  isFullscreen: boolean;
  onCharClick?: (char: string) => void;
}) {
  const tokens = getPageTokens(page);

  const charClass =
    fontSize === 'base'
      ? 'text-lg sm:text-xl'
      : fontSize === 'lg'
      ? 'text-xl sm:text-2xl'
      : 'text-2xl sm:text-3xl';

  const pyClass =
    fontSize === 'base'
      ? 'text-[11px] sm:text-xs'
      : fontSize === 'lg'
      ? 'text-xs sm:text-[13px]'
      : 'text-xs sm:text-sm';

  return (
    <div className="flex flex-wrap items-start gap-x-1 sm:gap-x-1.5 gap-y-3 sm:gap-y-4.5 leading-none py-1">
      {tokens.map((token, idx) => {
        const isPunctuation = !token.p || /[，。！？、“”：；（）…—]/g.test(token.c);

        if (isPunctuation) {
          return (
            <span
              key={idx}
              className="inline-flex flex-col items-center justify-start select-none"
            >
              {/* Dấu câu ngang hàng với chữ Hán */}
              <span
                className={`font-hanzi font-bold ${charClass} ${
                  isFullscreen ? 'text-stone-200' : 'text-slate-900'
                }`}
              >
                {token.c}
              </span>
              {/* Spacer để dấu câu cùng hàng chữ Hán mà không bị rơi xuống dưới */}
              {showPinyin && (
                <span className={`opacity-0 select-none mt-1 sm:mt-1.5 ${pyClass}`}>
                  _
                </span>
              )}
            </span>
          );
        }

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onCharClick && onCharClick(token.c)}
            className="inline-flex flex-col items-center justify-start group transition-transform hover:-translate-y-0.5 active:scale-90 cursor-pointer bg-transparent border-0 p-0 text-left"
            title={`Bấm để nghe: ${token.c} [${token.p}]`}
          >
            {/* Chữ Hán ở trên */}
            <span
              className={`font-hanzi font-bold tracking-tight transition-colors group-hover:text-teal-700 ${charClass} ${
                isFullscreen ? 'text-stone-100' : 'text-slate-900'
              }`}
            >
              {token.c}
            </span>

            {/* Pinyin nằm ngay dưới chữ tiếng Trung có cùng màu đen như chữ Hán */}
            {showPinyin && (
              <span
                className={`font-mono font-bold select-none mt-1 sm:mt-1.5 tracking-normal ${pyClass} ${
                  isFullscreen ? 'text-stone-100' : 'text-slate-900'
                }`}
              >
                {token.p}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export const StoryReaderPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const story = useMemo(() => (id ? getStoryById(id) : undefined), [id]);

  // Reader Preferences
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [showPinyin, setShowPinyin] = useState<boolean>(true);
  const [showVietnamese, setShowVietnamese] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg');
  const [viewMode, setViewMode] = useState<'single' | 'scroll'>('single');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Audio / Speech Synthesis State
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioSupported, setAudioSupported] = useState<boolean>(true);
  const [showIosAudioTip, setShowIosAudioTip] = useState<boolean>(false);

  // Quiz State for completion
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [earnedXp, setEarnedXp] = useState<number>(0);

  // Restore saved progress if available
  useEffect(() => {
    if (story) {
      const prog = getStoryProgress(story.id);
      if (prog && prog.currentPage > 1 && prog.currentPage <= story.totalPages) {
        setCurrentPageIndex(prog.currentPage - 1);
      }
    }
  }, [story]);

  // Check speech synthesis support
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setAudioSupported(false);
    }
  }, []);

  // Stop audio on unmount or page change
  useEffect(() => {
    return () => {
      stopChineseSpeech();
      setIsPlayingAudio(false);
    };
  }, [currentPageIndex]);

  // Tự ẩn gợi ý chuông iPhone sau 7s
  useEffect(() => {
    if (showIosAudioTip) {
      const timer = setTimeout(() => setShowIosAudioTip(false), 7000);
      return () => clearTimeout(timer);
    }
  }, [showIosAudioTip]);

  // Save progress when page changes
  useEffect(() => {
    if (!story) return;
    const isCompleted = currentPageIndex === story.totalPages - 1;
    saveStoryProgress(story.id, currentPageIndex + 1, isCompleted, isCompleted ? 15 : 0);
  }, [currentPageIndex, story]);

  const currentPage: StoryPage | undefined = story?.pages[currentPageIndex];

  // Keep navigation instant without downloading every illustration up front.
  useEffect(() => {
    const nextPage = story?.pages[currentPageIndex + 1];
    if (!nextPage) return;
    const image = new Image();
    image.decoding = 'async';
    image.src = getOptimizedStoryImage(nextPage.image);
  }, [currentPageIndex, story]);

  // TTS handler
  const handlePlaySpeech = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isPlayingAudio) {
      stopChineseSpeech();
      setIsPlayingAudio(false);
      return;
    }

    // Hiển thị gợi ý nút gạt rung trên iPhone nếu người dùng đang dùng thiết bị iOS
    if (isAppleDevice()) {
      setShowIosAudioTip(true);
    }

    setIsPlayingAudio(true);
    speakChinese(text, {
      onStart: () => setIsPlayingAudio(true),
      onEnd: () => setIsPlayingAudio(false),
      onError: () => setIsPlayingAudio(false),
    });
  }, [isPlayingAudio]);

  const handleWordSpeak = useCallback((word: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    if (isAppleDevice()) {
      setShowIosAudioTip(true);
    }
    speakChinese(word);
  }, []);

  // Navigation handlers
  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (story && currentPageIndex < story.totalPages - 1) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  // Touch swipe support for mobile page turning
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe: minimum 40px, and horizontal travel must be > 1.3x vertical travel
    if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY) * 1.3) {
      if (diffX < 0) {
        handleNextPage();
      } else {
        handlePrevPage();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.key === 'ArrowRight') {
        handleNextPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex, story]);

  // Quiz submission handler
  const handleQuizOptionSelect = (qIdx: number, optIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    if (!story || !story.quiz) return;
    let correct = 0;
    story.quiz.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctIndex) {
        correct++;
      }
    });
    setQuizSubmitted(true);
    const xp = correct * 10;
    setEarnedXp(xp);
    if (xp > 0) {
      saveStoryProgress(story.id, story.totalPages, true, xp);
    }
  };

  if (!story) {
    return (
      <div className="min-h-screen bg-cream/70 flex flex-col items-center justify-center p-6 text-center">
        <BookOpen className="w-12 h-12 text-slate-300 mb-3" />
        <h2 className="text-xl font-bold text-slate-800">Không tìm thấy câu chuyện</h2>
        <p className="text-xs text-slate-500 mt-1 max-w-sm">
          Truyện này có thể đã được cập nhật hoặc không tồn tại.
        </p>
        <button
          type="button"
          onClick={() => navigate('/tu-truyen')}
          className="mt-4 px-4 py-2 bg-teal-700 text-white text-xs font-bold rounded-xl hover:bg-teal-800"
        >
          Quay lại Tủ truyện
        </button>
      </div>
    );
  }

  const isLastPage = currentPageIndex === story.totalPages - 1;

  return (
    <div className={`min-h-screen bg-stone-100/70 pb-16 sm:pb-20 ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto bg-stone-900 text-white' : ''}`}>
      
      {/* Top Sticky Reader Header */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
        isFullscreen ? 'bg-stone-950/90 border-stone-800 text-white' : 'bg-white/95 border-slate-200/80 text-slate-900'
      }`}>
        <div className="mx-auto max-w-5xl px-2.5 sm:px-6 h-13 sm:h-14 flex items-center justify-between gap-1.5 sm:gap-2">
          
          {/* Back Button & Title */}
          <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
            <Link
              to="/tu-truyen"
              className={`p-1.5 sm:p-2 rounded-xl transition-colors shrink-0 ${
                isFullscreen ? 'hover:bg-stone-800 text-stone-300' : 'hover:bg-slate-100 text-slate-600'
              }`}
              title="Trở về Tủ truyện"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0">
              <h1 className="font-bold text-xs sm:text-base truncate flex items-center gap-1.5 sm:gap-2">
                <span className="font-hanzi text-teal-700 font-black text-sm sm:text-base">{story.titleZh}</span>
                <span className="text-slate-300">·</span>
                <span className="truncate text-xs sm:text-sm font-semibold text-slate-700 max-w-[110px] xs:max-w-[180px] sm:max-w-none">{story.titleVi}</span>
              </h1>
              <div className="text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1.5">
                <span className="hidden xs:inline">{story.level} ·</span>
                <span className="font-semibold text-teal-700">Trang {currentPageIndex + 1}/{story.totalPages}</span>
              </div>
            </div>
          </div>

          {/* Reader Controls Toolbar */}
          <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
            
            {/* Quick Audio Play Button in Header */}
            {audioSupported && currentPage && (
              <button
                type="button"
                onClick={() => handlePlaySpeech(currentPage.zh)}
                className={`px-2 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1 ${
                  isPlayingAudio
                    ? 'bg-amber-400 text-slate-950 border-amber-500 animate-pulse shadow-xs'
                    : isFullscreen
                    ? 'bg-stone-800 text-amber-300 border-stone-700 hover:bg-stone-700'
                    : 'bg-amber-50 text-amber-900 border-amber-200 hover:bg-amber-100'
                }`}
                title={isPlayingAudio ? 'Dừng đọc âm thanh' : 'Nghe đọc trang này'}
              >
                {isPlayingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-600" />}
                <span className="hidden sm:inline">{isPlayingAudio ? 'Dừng' : 'Nghe'}</span>
              </button>
            )}

            {/* Toggle Pinyin */}
            <button
              type="button"
              onClick={() => setShowPinyin(!showPinyin)}
              className={`px-2 sm:px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                showPinyin
                  ? 'bg-teal-50 text-teal-800 border-teal-300/80 shadow-2xs'
                  : isFullscreen
                  ? 'bg-stone-800 text-stone-400 border-stone-700'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title="Bật/Tắt phiên âm Pinyin"
            >
              Pinyin
            </button>

            {/* Toggle Vietnamese translation */}
            <button
              type="button"
              onClick={() => setShowVietnamese(!showVietnamese)}
              className={`px-2 sm:px-2.5 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1 ${
                showVietnamese
                  ? 'bg-amber-50 text-amber-900 border-amber-300/80 shadow-2xs'
                  : isFullscreen
                  ? 'bg-stone-800 text-stone-400 border-stone-700'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
              title="Ẩn/Hiện bản dịch tiếng Việt"
            >
              {showVietnamese ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
              <span className="hidden sm:inline">Dịch</span>
            </button>

            {/* Font Size Selector */}
            <button
              type="button"
              onClick={() => {
                if (fontSize === 'base') setFontSize('lg');
                else if (fontSize === 'lg') setFontSize('xl');
                else setFontSize('base');
              }}
              className={`px-2 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isFullscreen
                  ? 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title="Đổi cỡ chữ"
            >
              <span className="font-serif font-black">{fontSize === 'base' ? 'A' : fontSize === 'lg' ? 'A+' : 'A++'}</span>
            </button>

            {/* View Mode (Single page vs Continuous scroll) */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === 'single' ? 'scroll' : 'single')}
              className={`p-1.5 sm:px-2 sm:py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border flex items-center gap-1 ${
                viewMode === 'scroll'
                  ? 'bg-indigo-50 text-indigo-800 border-indigo-200'
                  : isFullscreen
                  ? 'bg-stone-800 text-stone-300 border-stone-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
              title="Chế độ Lật trang / Cuộn tranh liên tục"
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{viewMode === 'single' ? 'Lật trang' : 'Cuộn tranh'}</span>
            </button>

            {/* Fullscreen Toggle */}
            <button
              type="button"
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`p-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                isFullscreen
                  ? 'bg-amber-400 text-slate-950 border-amber-500'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title={isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình'}
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="mx-auto max-w-4xl px-3 sm:px-6 pt-5">
        
        {/* ================= VIEW MODE: SINGLE PAGE SLIDER ================= */}
        {viewMode === 'single' && currentPage && (
          <div className="space-y-4 sm:space-y-6">
            
            {/* Story Card Container with Touch Swipe page flipping */}
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`rounded-3xl overflow-hidden shadow-xl border transition-colors select-none sm:select-auto ${
                isFullscreen ? 'bg-stone-900 border-stone-800' : 'bg-white border-slate-200/90'
              }`}
            >
              
              {/* Illustrated Image Display with responsive height constraints */}
              <div className="relative aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/10] max-h-[48vh] sm:max-h-[56vh] md:max-h-[64vh] min-h-[220px] sm:min-h-[340px] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={getOptimizedStoryImage(currentPage.image)}
                  alt={`Trang ${currentPage.pageNumber}`}
                  className="w-full h-full object-contain select-none pointer-events-none"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  draggable={false}
                />

                {/* Page Indicator Tag */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[11px] sm:text-xs font-bold shadow-md">
                    Trang {currentPage.pageNumber} / {story.totalPages}
                  </span>
                </div>

                {/* Mobile swipe gesture tip hint on first page */}
                {currentPageIndex === 0 && (
                  <div className="absolute top-3 right-3 sm:hidden z-10 pointer-events-none">
                    <span className="px-2 py-0.5 rounded-full bg-black/55 text-white/90 text-[10px] backdrop-blur-xs font-medium">
                      👈 Vuốt để lật 👉
                    </span>
                  </div>
                )}

                {/* Audio Listen Overlay Button */}
                {audioSupported && (
                  <button
                    type="button"
                    onClick={() => handlePlaySpeech(currentPage.zh)}
                    className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl backdrop-blur-md text-xs font-bold transition-all shadow-lg active:scale-95 cursor-pointer ${
                      isPlayingAudio
                        ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 animate-pulse'
                        : 'bg-black/65 hover:bg-black/85 text-white'
                    }`}
                  >
                    {isPlayingAudio ? (
                      <>
                        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-950" />
                        <span>Dừng đọc</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
                        <span>Nghe đọc trang</span>
                      </>
                    )}
                  </button>
                )}

                {/* Prev / Next Nav Buttons Overlay */}
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={currentPageIndex === 0}
                  className={`absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all disabled:opacity-0 disabled:pointer-events-none cursor-pointer ${
                    currentPageIndex === 0 ? 'opacity-0' : 'opacity-85 sm:opacity-90 hover:scale-110 active:scale-95'
                  }`}
                  aria-label="Trang trước"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={currentPageIndex === story.totalPages - 1}
                  className={`absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs transition-all disabled:opacity-0 disabled:pointer-events-none cursor-pointer ${
                    currentPageIndex === story.totalPages - 1 ? 'opacity-0' : 'opacity-85 sm:opacity-90 hover:scale-110 active:scale-95'
                  }`}
                  aria-label="Trang tiếp theo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Text & Bilingual Section */}
              <div className="p-4 sm:p-7 space-y-3 sm:space-y-4">
                
                {/* Chinese Text with Pinyin directly underneath - tap character to listen */}
                <div className="py-1">
                  <HanziTextWithPinyin
                    page={currentPage}
                    showPinyin={showPinyin}
                    fontSize={fontSize}
                    isFullscreen={isFullscreen}
                    onCharClick={handleWordSpeak}
                  />
                </div>

                {/* Vietnamese Translation */}
                {showVietnamese && (
                  <div className={`pt-3 border-t text-sm sm:text-base leading-relaxed ${
                    isFullscreen ? 'border-stone-800 text-stone-300' : 'border-slate-100 text-slate-700'
                  }`}>
                    <span className="font-semibold text-teal-700 mr-2">Dịch nghĩa:</span>
                    {currentPage.vi}
                  </div>
                )}

                {/* Key Vocabulary of this page */}
                {currentPage.keyVocab && currentPage.keyVocab.length > 0 && (
                  <div className="pt-3.5 border-t border-slate-100 dark:border-stone-800">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Từ vựng trọng tâm trong trang này ({currentPage.keyVocab.length})</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentPage.keyVocab.map((v) => (
                        <div
                          key={v.word}
                          onClick={() => handleWordSpeak(v.word)}
                          className={`p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between group active:scale-[0.99] touch-manipulation ${
                            isFullscreen
                              ? 'bg-stone-800/80 border-stone-700 hover:border-amber-400'
                              : 'bg-slate-50/80 border-slate-200/80 hover:border-teal-400 hover:bg-teal-50/40'
                          }`}
                          title="Bấm để nghe phát âm"
                        >
                          <div className="min-w-0">
                            <div className="flex items-baseline gap-2">
                              <span className="font-hanzi font-bold text-base text-teal-700 group-hover:text-teal-800">
                                {v.word}
                              </span>
                              <span className="text-xs font-mono text-slate-500">{v.pinyin}</span>
                              {v.hanviet && (
                                <span className="text-[10px] text-slate-400 italic">[{v.hanviet}]</span>
                              )}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-stone-300 truncate mt-0.5">
                              {v.meaning}
                            </div>
                          </div>
                          <Volume2 className="w-4 h-4 text-slate-400 group-hover:text-teal-700 shrink-0 ml-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Card Navigation Footer */}
              <div className={`p-3 sm:p-4 border-t flex items-center justify-between gap-2 sm:gap-3 ${
                isFullscreen ? 'bg-stone-950 border-stone-800' : 'bg-slate-50/80 border-slate-200/80'
              }`}>
                <button
                  type="button"
                  onClick={handlePrevPage}
                  disabled={currentPageIndex === 0}
                  className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden xs:inline">Trang trước</span>
                  <span className="xs:hidden">Trước</span>
                </button>

                {/* Current Page Indicator Dots */}
                <div className="flex items-center gap-1 sm:gap-1.5">
                  {story.pages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentPageIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentPageIndex
                          ? 'w-5 sm:w-6 bg-teal-700'
                          : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Đi tới trang ${idx + 1}`}
                    />
                  ))}
                </div>

                {isLastPage ? (
                  <button
                    type="button"
                    onClick={() => {
                      // Scroll smoothly down to celebration / quiz section
                      const endElem = document.getElementById('story-completion-section');
                      endElem?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Hoàn thành 🎉</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNextPage}
                    className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs hover:bg-teal-800 active:scale-95 transition-all flex items-center gap-1 shadow-xs cursor-pointer"
                  >
                    <span className="hidden xs:inline">Trang sau</span>
                    <span className="xs:hidden">Sau</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Page Strip */}
            <div className="bg-white rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-xs flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[11px] sm:text-xs font-bold text-slate-500 whitespace-nowrap px-1 sm:px-2">
                Trang ({story.totalPages}):
              </span>
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
                {story.pages.map((p, idx) => (
                  <button
                    key={p.pageNumber}
                    type="button"
                    onClick={() => setCurrentPageIndex(idx)}
                    className={`relative w-12 sm:w-16 aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      idx === currentPageIndex
                        ? 'border-teal-600 scale-105 shadow-md ring-2 ring-teal-200'
                        : 'border-slate-200 opacity-70 hover:opacity-100 active:scale-95'
                    }`}
                  >
                    <img
                      src={getStoryThumbnail(p.image)}
                      alt={`Trang ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/70 text-white text-[10px] text-center font-bold font-mono">
                      {idx + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW MODE: CONTINUOUS SCROLL ================= */}
        {viewMode === 'scroll' && (
          <div className="space-y-6 sm:space-y-8">
            {story.pages.map((page, index) => (
              <div
                key={page.pageNumber}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/90"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[48vh] sm:max-h-[60vh] bg-slate-900 flex items-center justify-center">
                  <img
                    src={getOptimizedStoryImage(page.image)}
                    alt={`Trang ${page.pageNumber}`}
                    className="w-full h-full object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 text-white text-xs font-bold font-mono">
                      Trang {page.pageNumber} / {story.totalPages}
                    </span>
                  </div>
                  {audioSupported && (
                    <button
                      type="button"
                      onClick={() => handlePlaySpeech(page.zh)}
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2 rounded-xl bg-black/60 hover:bg-black/80 text-amber-300 backdrop-blur-xs transition-colors"
                      title="Nghe đọc trang này"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Text */}
                <div className="p-4 sm:p-6 space-y-3">
                  {/* Chinese Text with Pinyin directly underneath */}
                  <div className="py-1">
                    <HanziTextWithPinyin
                      page={page}
                      showPinyin={showPinyin}
                      fontSize={fontSize}
                      isFullscreen={isFullscreen}
                      onCharClick={handleWordSpeak}
                    />
                  </div>
                  {showVietnamese && (
                    <div className="text-sm text-slate-700 pt-2 border-t border-slate-100">
                      <span className="font-bold text-teal-700 mr-2">Dịch:</span>
                      {page.vi}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= COMPLETION, MORAL LESSON & QUIZ SECTION ================= */}
        <div id="story-completion-section" className="mt-10 sm:mt-12 space-y-6">
          
          {/* Moral Lesson Card */}
          <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-slate-950 shadow-xl border border-amber-300/40">
            <div className="flex items-center gap-2 text-slate-950/80 font-black text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-white fill-white" />
              <span>Ý nghĩa nhân văn sâu sắc</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Bài học từ câu chuyện 《{story.titleZh}》
            </h3>
            <p className="text-sm sm:text-lg text-amber-950 font-medium leading-relaxed bg-white/30 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-white/40">
              "{story.moralLesson}"
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-950 font-semibold">
              <span>Được biên soạn bởi Hanyu Daily</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setCurrentPageIndex(0);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-3 py-1.5 rounded-xl bg-white/40 hover:bg-white/60 text-slate-950 font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Đọc lại từ đầu</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Interactive Quiz (Mini Test) */}
          {story.quiz && story.quiz.length > 0 && (
            <div className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold mb-1">
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    <span>Thử thách đọc hiểu · 测一测</span>
                  </div>
                  <h4 className="text-base sm:text-xl font-bold text-slate-900">
                    Câu hỏi ôn tập & nhận điểm thưởng (+{story.quiz.length * 10} XP)
                  </h4>
                </div>

                {quizSubmitted && (
                  <div className="self-start sm:self-auto px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span>+{earnedXp} XP đã nhận</span>
                  </div>
                )}
              </div>

              <div className="space-y-5 sm:space-y-6 mt-6">
                {story.quiz.map((q, qIdx) => {
                  const selectedOpt = quizAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div key={qIdx} className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                      <div className="font-bold text-sm sm:text-base text-slate-900">
                        {qIdx + 1}. {q.question}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                        {q.options.map((opt, optIdx) => {
                          const optionLabel = String.fromCharCode(65 + optIdx); // A, B, C, D
                          let optStyle = 'bg-white border-slate-200 hover:border-teal-400 text-slate-700';

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                            } else if (selectedOpt === optIdx) {
                              optStyle = 'bg-rose-50 border-rose-400 text-rose-900 line-through';
                            }
                          } else if (selectedOpt === optIdx) {
                            optStyle = 'bg-teal-50 border-teal-600 text-teal-950 font-bold ring-1 ring-teal-500';
                          }

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleQuizOptionSelect(qIdx, optIdx)}
                              className={`p-3 sm:p-3.5 rounded-xl border text-xs sm:text-sm text-left transition-all cursor-pointer flex items-center gap-2.5 active:scale-[0.99] touch-manipulation ${optStyle}`}
                            >
                              <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                                {optionLabel}
                              </span>
                              <span className="flex-1">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className={`p-2.5 rounded-xl text-xs ${
                          isCorrect ? 'bg-emerald-100/60 text-emerald-900' : 'bg-amber-100/60 text-amber-900'
                        }`}>
                          <strong className="mr-1">{isCorrect ? '✓ Chính xác!' : '💡 Giải thích:'}</strong>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                {!quizSubmitted ? (
                  <button
                    type="button"
                    onClick={handleSubmitQuiz}
                    disabled={Object.keys(quizAnswers).length < story.quiz.length}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm hover:bg-teal-800 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer shadow-md active:scale-95"
                  >
                    Kiểm tra kết quả
                  </button>
                ) : (
                  <Link
                    to="/tu-truyen"
                    className="w-full sm:w-auto text-center px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all no-underline active:scale-95"
                  >
                    Quay lại Tủ truyện
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Bottom Action Card */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <div className="font-bold text-slate-900 text-sm">Muốn khám phá thêm nhiều câu chuyện khác?</div>
              <div className="text-xs text-slate-500">Tủ truyện có nhiều tác phẩm đồng thoại và ngụ ngôn đặc sắc.</div>
            </div>
            <Link
              to="/tu-truyen"
              className="px-4 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 font-bold text-xs no-underline shrink-0"
            >
              Vào Tủ truyện
            </Link>
          </div>

        </div>

        {/* Floating iOS Silent Switch Tip Toast */}
        {showIosAudioTip && (
          <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-md w-[92%] bg-slate-950/95 text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-amber-400/40 backdrop-blur-md flex items-center justify-between gap-3 transition-all">
            <div className="flex items-center gap-2.5 min-w-0">
              <Volume2 className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <p className="text-slate-200 text-[11px] sm:text-xs leading-snug">
                <strong className="text-amber-400 font-bold">Mẹo iPhone:</strong> Nếu không nghe thấy tiếng, hãy kiểm tra nút gạt rung (bật chuông) bên sườn máy nhé!
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowIosAudioTip(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors shrink-0 cursor-pointer"
              aria-label="Đóng thông báo"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default StoryReaderPage;
