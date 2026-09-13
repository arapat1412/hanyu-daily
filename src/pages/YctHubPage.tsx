import React, { useState, useMemo, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Volume2,
  Sparkles,
  Zap,
  BookOpen,
  Search,
  CheckCircle2,
  RotateCcw,
  Trophy,
  Download,
  PenTool,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  FileDown,
  Gamepad2,
  Star,
  PartyPopper,
  Smile,
  Heart,
} from "lucide-react";
import {
  YCT1_WORDS,
  YCT_CATEGORIES,
  YCT_PDF_RESOURCES,
  YctCategoryId,
  YctWord,
  getYctProgress,
  toggleLearnedWord,
  recordQuizCompletion,
  generateYctQuiz,
  toVocabularyWord,
  getWordEmoji,
  YctQuizQuestion,
} from "../data/yct1Data";
import { speakChinese } from "../lib/hsk";
import { playSfx } from "../lib/audio-effects";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import { WordMatchGameModal } from "../components/WordMatchGameModal";
import type { VocabularyWord } from "../types";

export const YctHubPage: React.FC = () => {
  const { tab } = useParams<{ tab?: string }>();

  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"vocab" | "flashcard" | "quiz" | "pdf">(() => {
    if (tab && ["vocab", "flashcard", "quiz", "pdf"].includes(tab)) {
      return tab as "vocab" | "flashcard" | "quiz" | "pdf";
    }
    return "vocab";
  });

  useEffect(() => {
    if (tab && ["vocab", "flashcard", "quiz", "pdf"].includes(tab)) {
      setActiveTab(tab as "vocab" | "flashcard" | "quiz" | "pdf");
    }
  }, [tab]);

  // Category filter & Search
  const [selectedCategory, setSelectedCategory] = useState<YctCategoryId | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Progress state
  const [progress, setProgress] = useState(getYctProgress);

  // Modals state
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);
  const [isMatchGameOpen, setIsMatchGameOpen] = useState(false);

  // Flashcard state
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [fcShowPinyin, setFcShowPinyin] = useState(true);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<YctQuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState<number | null>(null);

  // Filtered words for vocab view
  const filteredWords = useMemo(() => {
    let result = YCT1_WORDS;
    if (selectedCategory !== "all") {
      result = result.filter((w) => w.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (w) =>
          w.hanzi.includes(q) ||
          w.pinyin.toLowerCase().includes(q) ||
          w.meaning.toLowerCase().includes(q)
      );
    }
    return result;
  }, [selectedCategory, searchQuery]);

  // Flashcard word list
  const flashcardWords = useMemo(() => {
    if (selectedCategory === "all") return YCT1_WORDS;
    return YCT1_WORDS.filter((w) => w.category === selectedCategory);
  }, [selectedCategory]);

  const currentFcWord = flashcardWords[Math.min(fcIndex, flashcardWords.length - 1)];

  // Convert for Word Match Modal
  const matchWords = useMemo(() => {
    return YCT1_WORDS.map(toVocabularyWord);
  }, []);

  // Handle Mark Learned Word
  const handleToggleLearned = (wordId: string) => {
    const updated = toggleLearnedWord(wordId);
    setProgress(updated);
    playSfx("correct");
  };

  // Start new quiz
  const startQuiz = useCallback(() => {
    const questions = generateYctQuiz(
      10,
      selectedCategory === "all" ? undefined : selectedCategory
    );
    setQuizQuestions(questions);
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setScore(0);
    setQuizFinished(false);
    setEarnedXp(null);
  }, [selectedCategory]);

  useEffect(() => {
    if (activeTab === "quiz" && quizQuestions.length === 0) {
      startQuiz();
    }
  }, [activeTab, quizQuestions.length, startQuiz]);

  // Handle option select in Quiz
  const handleSelectQuizOption = (option: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(option);
    setIsAnswerChecked(true);

    const currentQ = quizQuestions[quizIndex];
    if (option === currentQ.correctAnswer) {
      playSfx("correct");
      setScore((prev) => prev + 1);
    } else {
      playSfx("wrong");
    }
  };

  // Next question or finish quiz
  const handleNextQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
    } else {
      const finalScore = score;
      const { progress: updated, earnedXp: xp } = recordQuizCompletion(finalScore, quizQuestions.length);
      setProgress(updated);
      setEarnedXp(xp);
      setQuizFinished(true);
      playSfx("victory");
    }
  };

  // Audio helper
  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    speakChinese(text);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] pb-32 font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* ========================================================
          1. HEADER KHU VƯỜN HOẠT HÌNH CỦA BÉ VÀ GẤU TRÚC PIPI
      ======================================================== */}
      <header className="relative overflow-hidden border-b-4 border-amber-300 bg-gradient-to-b from-amber-200 via-orange-100 to-[#FFFDF5] pt-6 pb-10 shadow-sm">
        {/* Floating Cartoon Clouds / Bubbles */}
        <div className="pointer-events-none absolute top-4 left-6 h-20 w-36 rounded-full bg-white/60 blur-xs" />
        <div className="pointer-events-none absolute top-12 right-10 h-24 w-44 rounded-full bg-white/70 blur-xs" />
        <div className="pointer-events-none absolute -bottom-10 right-1/3 h-32 w-52 rounded-full bg-amber-200/40 blur-md" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          
          {/* Top Bar: Back button + Mascot Welcome Message */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/yct"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-amber-300 bg-white/90 px-4 py-2 text-xs font-black text-amber-900 shadow-[0_4px_0_#fcd34d] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            >
              <ArrowLeft size={16} className="text-amber-600" />
              <span>Tủ sách YCT</span>
            </Link>

            {/* Score & Star Badges */}
            <div className="flex items-center gap-2.5">
              <div className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-yellow-300 bg-yellow-100/90 px-3.5 py-1.5 text-xs font-black text-yellow-900 shadow-[0_3px_0_#fde047]">
                <Star className="h-4 w-4 fill-amber-400 text-amber-500 animate-spin-slow" />
                <span>{progress.xp} Điểm Sao</span>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-emerald-300 bg-emerald-100/90 px-3.5 py-1.5 text-xs font-black text-emerald-900 shadow-[0_3px_0_#86efac]">
                <Trophy className="h-4 w-4 text-emerald-600" />
                <span>{progress.learnedWordIds.length}/80 Từ</span>
              </div>
            </div>
          </div>

          {/* Main Hero Card with Mascot Pipi */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6 rounded-[36px] border-4 border-amber-300 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-6 sm:p-8 text-white shadow-[0_10px_0_#d97706]">
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
                <span>🎈 Vườn Hoa Thiếu Nhi · 少儿汉语 1</span>
              </div>

              <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                Góc Thiếu Nhi YCT 1
              </h1>

              <p className="mt-2.5 max-w-xl text-xs sm:text-sm font-semibold leading-relaxed text-amber-50">
                Chào mừng các bạn nhỏ! Cùng Gấu Trúc Pipi học 80 từ vựng tiếng Trung qua tranh vẽ vui nhộn, lật thẻ ma thuật và thử tài đố vui nhận sao thưởng nhé!
              </p>

              {/* Action Buttons in Hero */}
              <div className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-3">
                <button
                  type="button"
                  onClick={() => setIsMatchGameOpen(true)}
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-orange-200 bg-yellow-300 px-5 py-3 text-xs sm:text-sm font-black text-amber-950 shadow-[0_5px_0_#d97706] transition-all hover:scale-105 active:translate-y-1 active:shadow-none"
                >
                  <Gamepad2 className="h-4 w-4 text-amber-900" />
                  <span>Chơi Nối Từ 30s 🎮</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("quiz")}
                  className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/40 bg-white/20 px-4 py-3 text-xs sm:text-sm font-black text-white backdrop-blur-md transition hover:bg-white/30"
                >
                  <PartyPopper className="h-4 w-4 text-yellow-200" />
                  <span>Đố Vui Có Thưởng 🎯</span>
                </button>
              </div>
            </div>

            {/* Right Mascot: Panda Pipi with Speech Bubble */}
            <div className="relative shrink-0 flex flex-col items-center">
              {/* Cute speech bubble */}
              <div className="relative mb-2 rounded-2xl border-2 border-amber-300 bg-white px-4 py-2 text-xs font-black text-amber-900 shadow-md">
                <span>"Bé đã sẵn sàng cùng Pipi chưa nào? 🐾"</span>
                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-t-8 border-t-white" />
              </div>

              {/* Big Panda Avatar Card */}
              <div className="flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-3xl border-4 border-white bg-amber-100 shadow-xl text-6xl sm:text-7xl select-none hover:rotate-6 transition-transform">
                🐼
              </div>
            </div>

          </div>

          {/* ========================================================
              2. BẢNG ĐIỀU KHIỂN CHƠI CỦA BÉ (5 TABS CHUNKY 3D)
          ======================================================== */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            
            {/* Tab 1: Xem Tranh Từ Vựng */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("vocab");
                playSfx("click");
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "vocab"
                  ? "border-3 border-sky-400 bg-sky-400 text-white shadow-[0_5px_0_#0284c7] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-sky-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-base">🎨</span>
              <span>80 Thẻ Tranh Từ Vựng</span>
            </button>

            {/* Tab 2: Lật Thẻ Ma Thuật */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("flashcard");
                setFcIndex(0);
                setFcFlipped(false);
                playSfx("click");
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "flashcard"
                  ? "border-3 border-purple-400 bg-purple-500 text-white shadow-[0_5px_0_#7e22ce] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-purple-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-base">🃏</span>
              <span>Lật Thẻ Kì Diệu</span>
            </button>

            {/* Tab 3: Đố Vui Có Thưởng */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("quiz");
                startQuiz();
                playSfx("click");
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "quiz"
                  ? "border-3 border-rose-400 bg-rose-500 text-white shadow-[0_5px_0_#be123c] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-rose-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-base">🎯</span>
              <span>Đố Vui Có Thưởng</span>
            </button>

            {/* Tab 4: Tủ Sách PDF Cho Ba Mẹ */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("pdf");
                playSfx("click");
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "pdf"
                  ? "border-3 border-emerald-400 bg-emerald-500 text-white shadow-[0_5px_0_#047857] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-emerald-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-base">📖</span>
              <span>Tủ Sách Cho Ba Mẹ</span>
            </button>

          </div>

        </div>
      </header>

      {/* ========================================================
          3. NỘI DUNG TƯƠNG TÁC CHÍNH
      ======================================================== */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">

        {/* ========================================================
            TAB 1: BỘ SƯU TẬP 80 THẺ TRANH TỪ VỰNG
        ======================================================== */}
        {activeTab === "vocab" && (
          <div className="space-y-6">
            
            {/* 8 Quả Bong Bóng Chủ Đề Cho Bé */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h3 className="font-display text-sm font-black uppercase tracking-wider text-amber-900">
                  Chọn Vùng Đất Khám Phá:
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    playSfx("click");
                  }}
                  className={`rounded-2xl px-4 py-2.5 text-xs font-black transition-all ${
                    selectedCategory === "all"
                      ? "border-2 border-amber-400 bg-amber-400 text-amber-950 shadow-[0_4px_0_#d97706] -translate-y-0.5"
                      : "border-2 border-amber-200 bg-white text-slate-700 hover:bg-amber-50 shadow-xs"
                  }`}
                >
                  🌈 Tất Cả (80)
                </button>

                {YCT_CATEGORIES.map((cat) => {
                  const count = YCT1_WORDS.filter((w) => w.category === cat.id).length;
                  const isSelected = selectedCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        playSfx("click");
                      }}
                      className={`flex items-center gap-1.5 rounded-2xl px-3.5 py-2 text-xs font-black transition-all ${
                        isSelected
                          ? "border-2 border-amber-500 bg-amber-500 text-white shadow-[0_4px_0_#b45309] -translate-y-0.5"
                          : "border-2 border-amber-200 bg-white text-slate-700 hover:bg-amber-50 shadow-xs"
                      }`}
                    >
                      <span className="text-base">{cat.icon}</span>
                      <span>{cat.nameVi}</span>
                      <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-[10px] font-mono">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Thanh Tìm Kiếm Đáng Yêu */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border-3 border-amber-200 bg-amber-50/70 p-4">
              <div className="flex items-center gap-2 text-xs font-black text-amber-900">
                <Smile className="h-5 w-5 text-amber-600" />
                <span>
                  Đang hiển thị <strong>{filteredWords.length}</strong> từ vựng sinh động
                </span>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-amber-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 Bé tìm quả táo, chú mèo, số 1..."
                  className="w-full rounded-2xl border-2 border-amber-300 bg-white py-2 pl-10 pr-4 text-xs font-bold text-slate-800 placeholder:text-amber-300 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
                />
              </div>
            </div>

            {/* Lưới 80 Thẻ Bài Siêu Đẳng (Kid Trading Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {filteredWords.map((word) => {
                const isLearned = progress.learnedWordIds.includes(word.id);
                const emoji = getWordEmoji(word);
                const categoryObj = YCT_CATEGORIES.find((c) => c.id === word.category);

                return (
                  <div
                    key={word.id}
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-[32px] border-3 p-5 transition-all duration-200 hover:-translate-y-2 select-none ${
                      isLearned
                        ? "border-emerald-300 bg-gradient-to-b from-emerald-50 via-white to-emerald-50/50 shadow-[0_6px_0_#6ee7b7]"
                        : "border-amber-200 bg-white shadow-[0_6px_0_#fde68a] hover:border-amber-300 hover:shadow-[0_10px_0_#fcd34d]"
                    }`}
                  >
                    {/* Hình minh họa hoạt hình mờ đằng sau thẻ (Faint Cartoon Watermark) */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -bottom-2 select-none text-[96px] sm:text-[108px] leading-none opacity-[0.15] filter drop-shadow-xs transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:opacity-[0.25]"
                    >
                      {emoji}
                    </div>

                    {/* Top Row: Category tag + Stroke order button */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-black text-amber-800">
                        <span>{categoryObj?.icon}</span>
                        <span>{categoryObj?.nameZh}</span>
                      </span>

                      <button
                        type="button"
                        onClick={() => setStrokeWord(toVocabularyWord(word))}
                        title="Tập viết từng nét chữ Hán này"
                        className="inline-flex items-center gap-1 rounded-xl border border-sky-200 bg-sky-50 px-2.5 py-1 text-[11px] font-black text-sky-700 hover:bg-sky-100 transition active:scale-95"
                      >
                        <PenTool size={12} />
                        <span>Viết nét</span>
                      </button>
                    </div>

                    {/* Big Visual Emoji Icon */}
                    <div className="my-1 text-center">
                      <span className="inline-block text-5xl sm:text-6xl drop-shadow-sm group-hover:scale-110 transition-transform">
                        {emoji}
                      </span>
                    </div>

                    {/* Hanzi, Pinyin & Meaning */}
                    <div className="my-2 text-center">
                      <div className="font-hanzi text-5xl font-black tracking-wide text-slate-900 group-hover:text-amber-600 transition-colors">
                        {word.hanzi}
                      </div>

                      <div className="mt-1 font-mono text-sm font-extrabold text-amber-600">
                        {word.pinyin}
                      </div>

                      <div className="mt-1 font-display text-sm font-black text-slate-800">
                        {word.meaning}
                      </div>
                    </div>

                    {/* Big Friendly Speaker Button */}
                    <button
                      type="button"
                      onClick={(e) => handleSpeak(word.hanzi, e)}
                      className="my-2 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-400 to-orange-400 py-2.5 text-xs font-black text-white shadow-[0_3px_0_#d97706] transition hover:brightness-105 active:translate-y-0.5 active:shadow-none"
                    >
                      <Volume2 size={16} />
                      <span>Bé bấm nghe đọc 🔊</span>
                    </button>

                    {/* Example Story Bubble */}
                    <div className="rounded-2xl bg-amber-50/70 p-2.5 text-[11px] leading-relaxed border border-amber-100/80">
                      <div className="flex items-center justify-between gap-1 text-slate-800 font-bold">
                        <span className="font-hanzi text-xs">{word.example}</span>
                        <button
                          type="button"
                          onClick={(e) => handleSpeak(word.example, e)}
                          className="text-amber-600 hover:text-amber-800"
                        >
                          <Volume2 size={12} />
                        </button>
                      </div>
                      <div className="font-mono text-[10px] text-amber-600/80">{word.examplePinyin}</div>
                      <div className="text-[10.5px] font-medium text-slate-600">{word.exampleVi}</div>
                    </div>

                    {/* Bottom Sticker: Learned button */}
                    <div className="mt-3 pt-2">
                      <button
                        type="button"
                        onClick={() => handleToggleLearned(word.id)}
                        className={`w-full py-2 rounded-2xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                          isLearned
                            ? "border-2 border-emerald-400 bg-emerald-400 text-white shadow-[0_3px_0_#059669]"
                            : "border-2 border-amber-200 bg-white text-amber-800 hover:bg-yellow-50 shadow-xs"
                        }`}
                      >
                        {isLearned ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>Bé đã thuộc làu 🎉</span>
                          </>
                        ) : (
                          <>
                            <Star size={14} className="fill-amber-400 text-amber-500" />
                            <span>Bé bấm để nhận sao ⭐</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 2: LẬT THẺ MA THUẬT 3D CHO BÉ
        ======================================================== */}
        {activeTab === "flashcard" && (
          <div className="mx-auto max-w-xl py-2">
            
            {/* Flashcard Header Bar */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-black text-purple-900">
                  🃏 Thẻ Bài {fcIndex + 1}/{flashcardWords.length}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setFcShowPinyin((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-purple-200 bg-white px-3.5 py-1.5 text-xs font-black text-purple-900 shadow-xs hover:bg-purple-50 transition"
              >
                {fcShowPinyin ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{fcShowPinyin ? "Ú òa giấu Pinyin" : "Hiện Pinyin"}</span>
              </button>
            </div>

            {/* Giant Kid-Friendly Flashcard */}
            {currentFcWord && (
              <div
                onClick={() => {
                  setFcFlipped((v) => !v);
                  playSfx("click");
                }}
                role="button"
                tabIndex={0}
                className={`relative min-h-[400px] w-full cursor-pointer overflow-hidden rounded-[40px] p-8 text-center border-4 transition-all duration-300 flex flex-col justify-between select-none ${
                  fcFlipped
                    ? "border-orange-300 bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50 shadow-[0_12px_0_#fdba74]"
                    : "border-purple-300 bg-gradient-to-b from-white via-purple-50/30 to-white shadow-[0_12px_0_#d8b4fe] hover:-translate-y-1"
                }`}
              >
                {/* Hình minh họa hoạt hình mờ khổng lồ ở nền sau Flashcard */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[180px] sm:text-[220px] leading-none opacity-[0.08] filter drop-shadow-sm transition-all duration-300"
                >
                  {getWordEmoji(currentFcWord)}
                </div>

                {/* Card Top Label */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-black text-slate-700 shadow-xs border border-slate-200">
                    <span>{YCT_CATEGORIES.find((c) => c.id === currentFcWord.category)?.icon}</span>
                    <span>{YCT_CATEGORIES.find((c) => c.id === currentFcWord.category)?.nameVi}</span>
                  </span>

                  {/* Big Speaker Button */}
                  <button
                    type="button"
                    onClick={(e) => handleSpeak(currentFcWord.hanzi, e)}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-amber-300 bg-amber-400 text-amber-950 shadow-[0_4px_0_#b45309] hover:scale-105 active:scale-95 transition"
                    title="Bấm để nghe phát âm"
                  >
                    <Volume2 size={24} />
                  </button>
                </div>

                {/* Card Center Area */}
                <div className="my-auto py-4">
                  {!fcFlipped ? (
                    /* Mặt trước: Tranh Emoji + Chữ Hán to + Lời gợi ý */
                    <div className="space-y-4">
                      <div className="text-7xl sm:text-8xl drop-shadow-md animate-bounce-slow">
                        {getWordEmoji(currentFcWord)}
                      </div>

                      <div className="font-hanzi text-6xl sm:text-7xl font-black tracking-wider text-slate-900">
                        {currentFcWord.hanzi}
                      </div>

                      {fcShowPinyin && (
                        <div className="font-mono text-2xl font-black text-amber-600">
                          {currentFcWord.pinyin}
                        </div>
                      )}

                      <div className="pt-2 text-xs font-black text-purple-600">
                        ✨ Bé chạm vào thẻ để xem nghĩa nhé!
                      </div>
                    </div>
                  ) : (
                    /* Mặt sau: Nghĩa tiếng Việt + Câu ví dụ */
                    <div className="space-y-4 animate-fadeIn">
                      <div className="font-mono text-xl font-black text-orange-600">
                        {currentFcWord.pinyin}
                      </div>

                      <div className="font-display text-3xl sm:text-4xl font-black text-slate-900">
                        {currentFcWord.meaning}
                      </div>

                      <div className="mx-auto max-w-sm rounded-3xl border-2 border-orange-200 bg-white p-4 text-left shadow-xs">
                        <div className="flex items-center justify-between text-sm font-black text-slate-800">
                          <span className="font-hanzi text-base">{currentFcWord.example}</span>
                          <button
                            type="button"
                            onClick={(e) => handleSpeak(currentFcWord.example, e)}
                            className="text-amber-600 hover:text-amber-800"
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                        <div className="mt-1 font-mono text-xs font-semibold text-amber-600">
                          {currentFcWord.examplePinyin}
                        </div>
                        <div className="mt-1 text-xs font-bold text-slate-600">
                          {currentFcWord.exampleVi}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Bottom: Stroke modal button */}
                <div className="flex items-center justify-between border-t border-slate-200/60 pt-3 text-xs">
                  <span className="font-bold text-slate-400">
                    {fcFlipped ? "🔄 Chạm để quay lại" : "💡 Đố bé biết nghĩa là gì?"}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setStrokeWord(toVocabularyWord(currentFcWord));
                    }}
                    className="inline-flex items-center gap-1 font-black text-sky-700 hover:underline"
                  >
                    <PenTool size={14} /> Tập viết nét
                  </button>
                </div>

              </div>
            )}

            {/* Bottom 3D Buttons for Flashcard Navigation */}
            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setFcIndex((prev) => Math.max(0, prev - 1));
                  setFcFlipped(false);
                  playSfx("click");
                }}
                disabled={fcIndex === 0}
                className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-xs font-black text-slate-700 shadow-[0_4px_0_#cbd5e1] hover:bg-slate-50 disabled:opacity-40 transition active:translate-y-1 active:shadow-none"
              >
                <ChevronLeft size={18} />
                <span>Từ trước</span>
              </button>

              <button
                type="button"
                onClick={() => handleToggleLearned(currentFcWord.id)}
                className={`rounded-2xl px-6 py-3 text-xs sm:text-sm font-black transition-all ${
                  progress.learnedWordIds.includes(currentFcWord?.id)
                    ? "border-2 border-emerald-500 bg-emerald-500 text-white shadow-[0_4px_0_#047857]"
                    : "border-2 border-amber-400 bg-amber-400 text-amber-950 shadow-[0_4px_0_#d97706]"
                } active:translate-y-1 active:shadow-none`}
              >
                {progress.learnedWordIds.includes(currentFcWord?.id)
                  ? "✓ Bé đã nhớ rồi! 🎉"
                  : "⭐ Đánh dấu thuộc (+5 XP)"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setFcIndex((prev) => Math.min(flashcardWords.length - 1, prev + 1));
                  setFcFlipped(false);
                  playSfx("click");
                }}
                disabled={fcIndex >= flashcardWords.length - 1}
                className="inline-flex items-center gap-1.5 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-xs font-black text-slate-700 shadow-[0_4px_0_#cbd5e1] hover:bg-slate-50 disabled:opacity-40 transition active:translate-y-1 active:shadow-none"
              >
                <span>Từ tiếp</span>
                <ChevronRight size={18} />
              </button>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 3: ĐỐ VUI CÓ THƯỞNG CÙNG GẤU TRÚC (QUIZ GAME)
        ======================================================== */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-xl py-2">
            {!quizFinished ? (
              <div className="rounded-[36px] border-4 border-rose-300 bg-white p-6 sm:p-8 shadow-[0_10px_0_#f43f5e]">
                
                {/* Progress bar like a candy bar */}
                <div className="flex items-center justify-between text-xs font-black text-slate-700 mb-2">
                  <span>Câu đố {quizIndex + 1}/{quizQuestions.length}</span>
                  <span className="font-mono text-rose-600">Đúng: {score} câu 🌟</span>
                </div>

                <div className="h-3.5 w-full overflow-hidden rounded-full border-2 border-rose-200 bg-rose-50 mb-6">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 transition-all duration-300"
                    style={{
                      width: `${((quizIndex + 1) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>

                {/* Question Box */}
                {quizQuestions[quizIndex] && (
                  <div>
                    <div className="text-center">
                      <div className="inline-block rounded-2xl bg-rose-100 px-4 py-1.5 text-xs font-black text-rose-900 mb-3">
                        {quizQuestions[quizIndex].prompt}
                      </div>

                      {/* Display Question Graphic */}
                      <div className="relative overflow-hidden my-4 flex flex-col items-center justify-center rounded-3xl border-3 border-rose-200 bg-gradient-to-b from-rose-50 to-orange-50 p-6 shadow-inner">
                        {/* Hình minh họa hoạt hình mờ trong khung câu hỏi */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-2 -bottom-2 select-none text-[110px] leading-none opacity-[0.14] filter drop-shadow-xs"
                        >
                          {getWordEmoji(quizQuestions[quizIndex].word)}
                        </div>
                        {quizQuestions[quizIndex].type === "listen" ? (
                          <button
                            type="button"
                            onClick={() => handleSpeak(quizQuestions[quizIndex].audioText)}
                            className="flex h-24 w-24 items-center justify-center rounded-3xl border-3 border-amber-300 bg-amber-400 text-white shadow-[0_6px_0_#d97706] hover:scale-105 active:scale-95 transition"
                          >
                            <Volume2 size={44} />
                          </button>
                        ) : (
                          <>
                            <div className="text-5xl mb-2">
                              {getWordEmoji(quizQuestions[quizIndex].word)}
                            </div>

                            <div className="font-hanzi text-5xl sm:text-6xl font-black text-slate-900">
                              {quizQuestions[quizIndex].hanzi}
                            </div>

                            {quizQuestions[quizIndex].pinyin && (
                              <div className="mt-1.5 font-mono text-base font-extrabold text-amber-600">
                                {quizQuestions[quizIndex].pinyin}
                              </div>
                            )}

                            <button
                              type="button"
                              onClick={() => handleSpeak(quizQuestions[quizIndex].audioText)}
                              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-black text-amber-700 shadow-xs border border-amber-200 hover:bg-amber-50"
                            >
                              <Volume2 size={14} /> Nghe đọc nè 🔊
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    {/* 4 Chunky Option Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                      {quizQuestions[quizIndex].options.map((option, idx) => {
                        const isCorrect = option === quizQuestions[quizIndex].correctAnswer;
                        const isChosen = option === selectedOption;

                        let btnStyle = "border-2 border-slate-200 bg-white text-slate-800 shadow-[0_4px_0_#e2e8f0] hover:border-amber-300 hover:bg-amber-50";
                        if (isAnswerChecked) {
                          if (isCorrect) {
                            btnStyle = "border-2 border-emerald-400 bg-emerald-100 text-emerald-950 font-black shadow-[0_4px_0_#34d399]";
                          } else if (isChosen && !isCorrect) {
                            btnStyle = "border-2 border-rose-400 bg-rose-100 text-rose-950 font-bold shadow-[0_4px_0_#f87171]";
                          } else {
                            btnStyle = "border-2 border-slate-200 bg-slate-50 text-slate-400 opacity-50";
                          }
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            disabled={isAnswerChecked}
                            onClick={() => handleSelectQuizOption(option)}
                            className={`flex items-center justify-between rounded-2xl p-4 text-left text-xs sm:text-sm font-extrabold transition-all active:translate-y-1 active:shadow-none ${btnStyle}`}
                          >
                            <span>{option}</span>
                            {isAnswerChecked && isCorrect && (
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Next Question CTA */}
                    {isAnswerChecked && (
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNextQuestion}
                          className="inline-flex items-center gap-2 rounded-2xl border-2 border-rose-400 bg-rose-500 hover:bg-rose-600 px-6 py-3 text-xs sm:text-sm font-black text-white shadow-[0_4px_0_#be123c] active:translate-y-1 active:shadow-none transition"
                        >
                          <span>{quizIndex < quizQuestions.length - 1 ? "Câu tiếp theo 👉" : "Xem phần thưởng 🏆"}</span>
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    )}

                  </div>
                )}

              </div>
            ) : (
              /* Quiz Victory Celebration */
              <div className="rounded-[40px] border-4 border-yellow-300 bg-white p-8 text-center shadow-[0_12px_0_#eab308]">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border-3 border-amber-300 bg-amber-100 text-6xl shadow-inner animate-bounce-slow">
                  🏆
                </div>

                <h3 className="mt-4 font-display text-2xl sm:text-3xl font-black text-slate-900">
                  Bé Giỏi Quá! Hoàn Thành Rồi! 🎉
                </h3>

                <p className="mt-2 text-sm font-bold text-slate-600">
                  Bé đã trả lời đúng{" "}
                  <strong className="text-amber-600 text-lg">
                    {score}/{quizQuestions.length}
                  </strong>{" "}
                  câu hỏi YCT 1!
                </p>

                {earnedXp !== null && earnedXp > 0 && (
                  <div className="my-5 inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-100 px-5 py-2 text-sm font-black text-amber-900 shadow-sm">
                    <Zap className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <span>+{earnedXp} Điểm Sao Thưởng</span>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={startQuiz}
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-amber-400 bg-amber-400 px-6 py-3 text-xs sm:text-sm font-black text-amber-950 shadow-[0_4px_0_#d97706] hover:bg-amber-300 active:translate-y-1 active:shadow-none transition"
                  >
                    <RotateCcw size={18} />
                    <span>Làm lượt mới</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("vocab")}
                    className="inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-5 py-3 text-xs sm:text-sm font-black text-slate-700 shadow-[0_3px_0_#cbd5e1] hover:bg-slate-50 transition"
                  >
                    <BookOpen size={18} />
                    <span>Xem lại từ vựng</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            TAB 4: TỦ SÁCH PDF CHUẨN DÀNH CHO BA MẸ & THẦY CÔ
        ======================================================== */}
        {activeTab === "pdf" && (
          <div className="space-y-6">
            
            {/* Parent Guide Banner */}
            <div className="rounded-[36px] border-4 border-emerald-300 bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500 p-6 sm:p-8 text-white shadow-[0_10px_0_#059669]">
              <div className="max-w-2xl">
                <span className="rounded-full bg-white/25 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                  👨‍👩‍👧 Góc Dành Cho Ba Mẹ & Thầy Cô
                </span>

                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black text-white">
                  Tải Giáo Trình Chuẩn YCT (Bản PDF In Màu)
                </h2>

                <p className="mt-2 text-xs sm:text-sm font-semibold leading-relaxed text-emerald-50">
                  Ba mẹ và thầy cô có thể tải trọn bộ Sách Giáo Khoa (Textbook) và Sách Bài Tập (Workbook) in màu chính thức để in ra cho bé tô màu, tập viết và rèn luyện tại nhà!
                </p>
              </div>
            </div>

            {/* List 4 Levels of YCT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {YCT_PDF_RESOURCES.map((res) => (
                <div
                  key={res.level}
                  className="flex flex-col justify-between rounded-[32px] border-3 border-emerald-200 bg-white p-6 shadow-[0_6px_0_#a7f3d0]"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-black text-amber-800">
                        <span>Cấp độ {res.level}</span>
                        <span className="font-normal font-mono">({res.wordsCount} từ vựng)</span>
                      </span>

                      <span className="text-xs font-black text-slate-400 font-hanzi">
                        {res.titleZh}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-xl font-black text-slate-900">
                      {res.titleVi}
                    </h3>

                    <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                      {res.desc}
                    </p>
                  </div>

                  {/* 2 Big Download Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={res.textbookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-emerald-400 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 text-xs font-black shadow-[0_3px_0_#047857] transition active:translate-y-0.5 active:shadow-none"
                    >
                      <Download size={16} />
                      <span>Sách Giáo Khoa ({res.sizeMbTextbook}MB)</span>
                    </a>

                    <a
                      href={res.workbookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 px-4 py-3 text-xs font-black shadow-[0_3px_0_#cbd5e1] transition active:translate-y-0.5 active:shadow-none"
                    >
                      <Download size={16} />
                      <span>Sách Bài Tập ({res.sizeMbWorkbook}MB)</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* Modal Tập Viết Chữ Hán Bút Thuận */}
      {strokeWord && (
        <HanziStrokeModal
          isOpen={!!strokeWord}
          onClose={() => setStrokeWord(null)}
          word={strokeWord}
        />
      )}

      {/* Modal Game Nối Từ 30s */}
      {isMatchGameOpen && (
        <WordMatchGameModal
          isOpen={isMatchGameOpen}
          onClose={() => setIsMatchGameOpen(false)}
          words={matchWords}
          title="Ghép Nối Nhanh 30 Giây · YCT 1"
          onComplete={(stats) => {
            const current = getYctProgress();
            const updated = {
              ...current,
              xp: current.xp + stats.points,
            };
            localStorage.setItem("hanyu.yct1.progress.v1", JSON.stringify(updated));
            setProgress(updated);
          }}
        />
      )}

    </div>
  );
};
