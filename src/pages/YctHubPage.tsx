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
  Gamepad2,
  Star,
  PartyPopper,
  Smile,
  Clock,
  ArrowRight,
  Layers,
  Check,
} from "lucide-react";
import {
  YCT1_WORDS,
  YCT1_LESSONS,
  YCT_CATEGORIES,
  YctLesson,
  YCT_PDF_RESOURCES,
  YctCategoryId,
  YctWord,
  getYctProgress,
  saveYctProgress,
  toggleLearnedWord,
  recordQuizCompletion,
  generateYctQuiz,
  toVocabularyWord,
  getWordEmoji,
} from "../data/yct1Data";
import {
  YCT2_WORDS,
  YCT2_CATEGORIES,
  YCT2_LESSONS,
  Yct2CategoryId,
  Yct2Lesson,
  getYct2Progress,
  saveYct2Progress,
  toggleLearnedWord2,
  recordQuizCompletion2,
  generateYct2Quiz,
  toVocabularyWord2,
  getWordEmoji2,
} from "../data/yct2Data";
import {
  YCT3_WORDS,
  YCT3_CATEGORIES,
  YCT3_LESSONS,
  Yct3CategoryId,
  Yct3Lesson,
  getYct3Progress,
  saveYct3Progress,
  toggleLearnedWord3,
  recordQuizCompletion3,
  generateYct3Quiz,
  toVocabularyWord3,
  getWordEmoji3,
} from "../data/yct3Data";
import { awardDailyXp, getXpByPrefix, speakChinese, useProgress } from "../lib/hsk";
import { playSfx } from "../lib/audio-effects";
import { HanziStrokeModal } from "../components/HanziStrokeModal";
import { WordMatchGameModal } from "../components/WordMatchGameModal";
import type { VocabularyWord } from "../types";

export const YctHubPage: React.FC = () => {
  const { level: rawLevel = "2", tab } = useParams<{ level?: string; tab?: string }>();
  const levelNum: 1 | 2 | 3 = rawLevel === "1" ? 1 : rawLevel === "3" ? 3 : 2;
  const isLevel1 = levelNum === 1;
  const isLevel2 = levelNum === 2;
  const isLevel3 = levelNum === 3;
  const unifiedProgress = useProgress();
  const levelXp = getXpByPrefix(unifiedProgress, `yct:${levelNum}:`);

  // Unified dynamic color theme for all UI components based on level
  const theme = useMemo(() => {
    if (levelNum === 3) {
      return {
        // Tab 1 Vocab
        vocabTabActive: "border-3 border-sky-400 bg-sky-500 text-white shadow-[0_5px_0_#0284c7] -translate-y-1",
        vocabTabInactiveHover: "hover:bg-sky-50",
        // Tab 4 PDF
        pdfTabActive: "border-3 border-sky-400 bg-sky-500 text-white shadow-[0_5px_0_#0284c7] -translate-y-1",
        pdfTabInactiveHover: "hover:bg-sky-50",
        // Search bar
        searchIcon: "text-sky-500",
        searchInput: "border-sky-200 focus:border-sky-500 focus:ring-sky-200",
        // View mode buttons
        viewModeActive: "bg-sky-600 text-white shadow-xs",
        viewModeInactive: "text-slate-600 hover:text-sky-700 hover:bg-sky-50",
        viewModeCountActive: "bg-white/20 text-white",
        viewModeCountInactive: "bg-sky-100 text-sky-800",
        // Header stats badge
        headerBadge: "text-sky-700 bg-sky-100 border-sky-200",
        // Lesson cards
        lessonCard: "border-sky-200/80 hover:border-sky-400 shadow-[0_4px_0_#bae6fd] hover:shadow-[0_8px_0_#7dd3fc]",
        lessonCardWatermark: "text-sky-600/10 group-hover:text-sky-600/20",
        lessonBadge: "bg-sky-600 text-white shadow-xs",
        lessonBookIcon: "text-sky-600",
        lessonTitleHover: "group-hover:text-sky-700",
        lessonTitleZh: "text-sky-800",
        lessonChip: "bg-sky-50 text-sky-900 border-sky-200/60 hover:bg-sky-200/70",
        lessonProgress: "bg-sky-500",
        lessonButton: "border-sky-400 bg-sky-500 text-white shadow-[0_2px_0_#0369a1] hover:bg-sky-600",
        // Word Card
        wordCardUnlearned: "border-sky-200 shadow-[0_6px_0_#bae6fd] hover:border-sky-400",
        wordLessonBadge: "bg-sky-100 border-sky-300 text-sky-800",
        wordHanziHover: "hover:text-sky-600",
        wordMeaningBadge: "text-sky-700 bg-sky-50 border-sky-100",
        wordActionListen: "border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100",
        wordActionHover: "hover:text-sky-600",
        // Lesson banner when selected
        selectedBanner: "border-sky-300 bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_6px_0_#0369a1]",
        selectedBannerSubtitle: "text-sky-100",
        // Quick lesson filter pill
        pillActive: "border-2 border-sky-600 bg-sky-600 text-white shadow-[0_3px_0_#0369a1] -translate-y-0.5",
        pillInactiveHover: "hover:bg-sky-50",
        // Grouped lesson container
        groupContainer: "border-sky-100 bg-sky-50/30",
        groupDivider: "border-sky-200/70",
        groupBadge: "bg-sky-600 text-white",
        groupTitleZh: "text-sky-800",
        groupButton: "text-sky-700 hover:text-sky-900 border-sky-300 hover:bg-sky-50",
        // Categories
        categoryActive: "border-2 border-sky-600 bg-sky-600 text-white shadow-[0_4px_0_#0369a1] -translate-y-0.5",
        // Flashcard
        fcCardFront: "border-sky-300 bg-gradient-to-br from-sky-50 via-white to-blue-50 shadow-[0_12px_0_#7dd3fc]",
        fcListenBtn: "border-2 border-sky-300 bg-white text-sky-800 shadow-xs hover:bg-sky-50",
        fcAccentText: "text-sky-600 hover:text-sky-700",
        // PDF Tab
        pdfHeader: "border-sky-300 bg-gradient-to-r from-sky-500 to-blue-600 shadow-[0_8px_0_#0369a1]",
        pdfSubtitle: "text-sky-50",
        pdfBtn: "border-sky-400 bg-sky-500 hover:bg-sky-600 shadow-[0_3px_0_#0369a1]",
      };
    }
    if (levelNum === 2) {
      return {
        // Tab 1 Vocab
        vocabTabActive: "border-3 border-emerald-400 bg-emerald-500 text-white shadow-[0_5px_0_#047857] -translate-y-1",
        vocabTabInactiveHover: "hover:bg-emerald-50",
        // Tab 4 PDF
        pdfTabActive: "border-3 border-emerald-400 bg-emerald-500 text-white shadow-[0_5px_0_#047857] -translate-y-1",
        pdfTabInactiveHover: "hover:bg-emerald-50",
        // Search bar
        searchIcon: "text-emerald-500",
        searchInput: "border-emerald-200 focus:border-emerald-500 focus:ring-emerald-200",
        // View mode buttons
        viewModeActive: "bg-emerald-600 text-white shadow-xs",
        viewModeInactive: "text-slate-600 hover:text-emerald-700 hover:bg-emerald-50",
        viewModeCountActive: "bg-white/20 text-white",
        viewModeCountInactive: "bg-emerald-100 text-emerald-800",
        // Header stats badge
        headerBadge: "text-emerald-700 bg-emerald-100 border-emerald-200",
        // Lesson cards
        lessonCard: "border-emerald-200/80 hover:border-emerald-400 shadow-[0_4px_0_#a7f3d0] hover:shadow-[0_8px_0_#6ee7b7]",
        lessonCardWatermark: "text-emerald-600/10 group-hover:text-emerald-600/20",
        lessonBadge: "bg-emerald-600 text-white shadow-xs",
        lessonBookIcon: "text-emerald-600",
        lessonTitleHover: "group-hover:text-emerald-700",
        lessonTitleZh: "text-emerald-800",
        lessonChip: "bg-emerald-50 text-emerald-900 border-emerald-200/60 hover:bg-emerald-200/70",
        lessonProgress: "bg-emerald-500",
        lessonButton: "border-emerald-400 bg-emerald-500 text-white shadow-[0_2px_0_#047857] hover:bg-emerald-600",
        // Word Card
        wordCardUnlearned: "border-emerald-200 shadow-[0_6px_0_#a7f3d0] hover:border-emerald-400",
        wordLessonBadge: "bg-emerald-100 border-emerald-300 text-emerald-800",
        wordHanziHover: "hover:text-emerald-600",
        wordMeaningBadge: "text-emerald-700 bg-emerald-50 border-emerald-100",
        wordActionListen: "border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
        wordActionHover: "hover:text-emerald-600",
        // Lesson banner when selected
        selectedBanner: "border-emerald-300 bg-gradient-to-r from-emerald-500 to-teal-600 shadow-[0_6px_0_#047857]",
        selectedBannerSubtitle: "text-emerald-100",
        // Quick lesson filter pill
        pillActive: "border-2 border-emerald-600 bg-emerald-600 text-white shadow-[0_3px_0_#065f46] -translate-y-0.5",
        pillInactiveHover: "hover:bg-emerald-50",
        // Grouped lesson container
        groupContainer: "border-emerald-100 bg-emerald-50/30",
        groupDivider: "border-emerald-200/70",
        groupBadge: "bg-emerald-600 text-white",
        groupTitleZh: "text-emerald-800",
        groupButton: "text-emerald-700 hover:text-emerald-900 border-emerald-300 hover:bg-emerald-50",
        // Categories
        categoryActive: "border-2 border-emerald-600 bg-emerald-600 text-white shadow-[0_4px_0_#065f46] -translate-y-0.5",
        // Flashcard
        fcCardFront: "border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-[0_12px_0_#6ee7b7]",
        fcListenBtn: "border-2 border-emerald-300 bg-white text-emerald-800 shadow-xs hover:bg-emerald-50",
        fcAccentText: "text-emerald-600 hover:text-emerald-700",
        // PDF Tab
        pdfHeader: "border-emerald-300 bg-gradient-to-r from-emerald-500 to-teal-600 shadow-[0_8px_0_#047857]",
        pdfSubtitle: "text-emerald-50",
        pdfBtn: "border-emerald-400 bg-emerald-500 hover:bg-emerald-600 shadow-[0_3px_0_#047857]",
      };
    }
    // Level 1: Orange / Amber
    return {
      // Tab 1 Vocab
      vocabTabActive: "border-3 border-amber-400 bg-amber-500 text-white shadow-[0_5px_0_#b45309] -translate-y-1",
      vocabTabInactiveHover: "hover:bg-amber-50",
      // Tab 4 PDF
      pdfTabActive: "border-3 border-amber-400 bg-amber-500 text-white shadow-[0_5px_0_#b45309] -translate-y-1",
      pdfTabInactiveHover: "hover:bg-amber-50",
      // Search bar
      searchIcon: "text-amber-500",
      searchInput: "border-amber-200 focus:border-amber-500 focus:ring-amber-200",
      // View mode buttons
      viewModeActive: "bg-amber-500 text-white shadow-xs",
      viewModeInactive: "text-slate-600 hover:text-amber-700 hover:bg-amber-50",
      viewModeCountActive: "bg-white/20 text-white",
      viewModeCountInactive: "bg-amber-100 text-amber-800",
      // Header stats badge
      headerBadge: "text-amber-800 bg-amber-100 border-amber-200",
      // Lesson cards
      lessonCard: "border-amber-200/80 hover:border-amber-400 shadow-[0_4px_0_#fde047] hover:shadow-[0_8px_0_#fcd34d]",
      lessonCardWatermark: "text-amber-600/10 group-hover:text-amber-600/20",
      lessonBadge: "bg-amber-500 text-white shadow-xs",
      lessonBookIcon: "text-amber-600",
      lessonTitleHover: "group-hover:text-amber-700",
      lessonTitleZh: "text-amber-800",
      lessonChip: "bg-amber-50 text-amber-900 border-amber-200/60 hover:bg-amber-200/70",
      lessonProgress: "bg-amber-500",
      lessonButton: "border-amber-400 bg-amber-500 text-white shadow-[0_2px_0_#b45309] hover:bg-amber-600",
      // Word Card
      wordCardUnlearned: "border-amber-200 shadow-[0_6px_0_#fde047] hover:border-amber-400",
      wordLessonBadge: "bg-amber-100 border-amber-300 text-amber-800",
      wordHanziHover: "hover:text-amber-600",
      wordMeaningBadge: "text-amber-700 bg-amber-50 border-amber-100",
      wordActionListen: "border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100",
      wordActionHover: "hover:text-amber-600",
      // Lesson banner when selected
      selectedBanner: "border-amber-300 bg-gradient-to-r from-amber-500 to-orange-600 shadow-[0_6px_0_#b45309]",
      selectedBannerSubtitle: "text-amber-100",
      // Quick lesson filter pill
      pillActive: "border-2 border-amber-600 bg-amber-600 text-white shadow-[0_3px_0_#92400e] -translate-y-0.5",
      pillInactiveHover: "hover:bg-amber-50",
      // Grouped lesson container
      groupContainer: "border-amber-100 bg-amber-50/30",
      groupDivider: "border-amber-200/70",
      groupBadge: "bg-amber-500 text-white",
      groupTitleZh: "text-amber-800",
      groupButton: "text-amber-700 hover:text-amber-900 border-amber-300 hover:bg-amber-50",
      // Categories
      categoryActive: "border-2 border-amber-500 bg-amber-500 text-white shadow-[0_4px_0_#b45309] -translate-y-0.5",
      // Flashcard
      fcCardFront: "border-amber-300 bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-[0_12px_0_#fde047]",
      fcListenBtn: "border-2 border-amber-300 bg-white text-amber-800 shadow-xs hover:bg-amber-50",
      fcAccentText: "text-amber-600 hover:text-amber-700",
      // PDF Tab
      pdfHeader: "border-amber-300 bg-gradient-to-r from-amber-500 to-orange-600 shadow-[0_8px_0_#b45309]",
      pdfSubtitle: "text-amber-50",
      pdfBtn: "border-amber-400 bg-amber-500 hover:bg-amber-600 shadow-[0_3px_0_#b45309]",
    };
  }, [levelNum]);

  // Active navigation tab
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

  // Words & Categories pool
  const allWords: any[] = isLevel3 ? YCT3_WORDS : isLevel2 ? YCT2_WORDS : YCT1_WORDS;
  const currentLessons: any[] = isLevel3 ? YCT3_LESSONS : isLevel2 ? YCT2_LESSONS : YCT1_LESSONS;
  const categories: any[] = isLevel3 ? YCT3_CATEGORIES : isLevel2 ? YCT2_CATEGORIES : YCT_CATEGORIES;

  // View mode: 'lessons' (default as requested) or 'categories'
  const [viewMode, setViewMode] = useState<"lessons" | "categories">("lessons");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLesson, setSelectedLesson] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getProgressForLevel = useCallback((lvl: 1 | 2 | 3) => {
    if (lvl === 3) return getYct3Progress();
    if (lvl === 2) return getYct2Progress();
    return getYctProgress();
  }, []);

  // Progress state
  const [progress, setProgress] = useState(() => getProgressForLevel(levelNum));

  // Reset state on level switch
  useEffect(() => {
    setProgress(getProgressForLevel(levelNum));
    setSelectedCategory("all");
    setSelectedLesson("all");
    setSearchQuery("");
    setFcIndex(0);
    setFcFlipped(false);
    setQuizQuestions([]);
    setQuizFinished(false);
  }, [levelNum, getProgressForLevel]);

  // Modals state
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);
  const [isMatchGameOpen, setIsMatchGameOpen] = useState(false);

  // Flashcard state
  const [fcIndex, setFcIndex] = useState(0);
  const [fcFlipped, setFcFlipped] = useState(false);
  const [fcShowPinyin, setFcShowPinyin] = useState(true);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState<number | null>(null);

  // Filtered words for vocab view
  const filteredWords = useMemo(() => {
    let result: any[] = allWords;

    if (viewMode === "lessons" && selectedLesson !== "all") {
      if (selectedLesson === 0) {
        // Ôn tập & Mở rộng (không thuộc 10 bài học SGK)
        result = result.filter((w) => !w.lessonNumber);
      } else {
        result = result.filter((w) => w.lessonNumber === selectedLesson);
      }
    } else if (selectedCategory !== "all") {
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
  }, [allWords, isLevel2, viewMode, selectedLesson, selectedCategory, searchQuery]);

  // Lessons data with progress counts
  const lessonsWithStats = useMemo(() => {
    return (currentLessons as any[]).map((l: any) => {
      const lessonWords = allWords.filter((w) => w.lessonNumber === l.lessonNumber);
      const learnedCount = lessonWords.filter((w) => progress.learnedWordIds.includes(w.id)).length;
      return {
        ...l,
        lessonWords,
        learnedCount,
        percent: Math.round((learnedCount / (lessonWords.length || 1)) * 100),
      };
    });
  }, [currentLessons, allWords, progress.learnedWordIds]);

  // Cumulative review words stats
  const reviewWords = useMemo(() => {
    return allWords.filter((w) => !w.lessonNumber);
  }, [allWords]);
  const reviewLearnedCount = useMemo(() => {
    return reviewWords.filter((w) => progress.learnedWordIds.includes(w.id)).length;
  }, [reviewWords, progress.learnedWordIds]);

  // Flashcard word list
  const flashcardWords = useMemo(() => {
    if (viewMode === "lessons" && selectedLesson !== "all") {
      if (selectedLesson === 0) {
        return allWords.filter((w) => !w.lessonNumber);
      }
      return allWords.filter((w) => w.lessonNumber === selectedLesson);
    }
    if (selectedCategory === "all") return allWords;
    return allWords.filter((w) => w.category === selectedCategory);
  }, [allWords, isLevel3, isLevel2, viewMode, selectedLesson, selectedCategory]);

  const currentFcWord = flashcardWords[Math.min(fcIndex, Math.max(0, flashcardWords.length - 1))];

  // Helper to get stroke word
  const getStrokeWord = useCallback((w: any): VocabularyWord => {
    if (isLevel3) return toVocabularyWord3(w);
    if (isLevel2) return toVocabularyWord2(w);
    return toVocabularyWord(w);
  }, [isLevel3, isLevel2]);

  // Convert for Word Match Modal
  const matchWords = useMemo(() => {
    const pool = flashcardWords.length > 0 ? flashcardWords : allWords;
    return pool.map((w) => getStrokeWord(w as any));
  }, [flashcardWords, allWords, getStrokeWord]);

  // Handle Mark Learned Word
  const handleToggleLearned = (wordId: string) => {
    if (isLevel3) {
      const updated = toggleLearnedWord3(wordId);
      setProgress(updated);
    } else if (isLevel2) {
      const updated = toggleLearnedWord2(wordId);
      setProgress(updated);
    } else {
      const updated = toggleLearnedWord(wordId);
      setProgress(updated);
    }
    playSfx("correct");
  };

  // Start new quiz
  const startQuiz = useCallback(() => {
    let questions: any[];
    if (isLevel3) {
      questions = generateYct3Quiz(10, {
        category: selectedCategory === "all" ? undefined : (selectedCategory as Yct3CategoryId),
        lessonNumber: viewMode === "lessons" && typeof selectedLesson === "number" && selectedLesson > 0 ? selectedLesson : undefined,
      });
    } else if (isLevel2) {
      questions = generateYct2Quiz(10, {
        category: selectedCategory === "all" ? undefined : (selectedCategory as Yct2CategoryId),
        lessonNumber: viewMode === "lessons" && typeof selectedLesson === "number" && selectedLesson > 0 ? selectedLesson : undefined,
      });
    } else {
      const lessonParam = viewMode === "lessons" && typeof selectedLesson === "number" && selectedLesson > 0 ? selectedLesson : undefined;
      questions = generateYctQuiz(lessonParam, 10);
    }
    setQuizQuestions(questions);
    setQuizIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setScore(0);
    setQuizFinished(false);
    setEarnedXp(null);
  }, [isLevel3, isLevel2, selectedCategory, viewMode, selectedLesson]);

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
      if (isLevel3) {
        const { progress: updated, earnedXp: xp } = recordQuizCompletion3(finalScore, quizQuestions.length);
        setProgress(updated);
        setEarnedXp(xp);
      } else if (isLevel2) {
        const { progress: updated, earnedXp: xp } = recordQuizCompletion2(finalScore, quizQuestions.length);
        setProgress(updated);
        setEarnedXp(xp);
      } else {
        const { progress: updated, earnedXp: xp } = recordQuizCompletion(finalScore, quizQuestions.length);
        setProgress(updated);
        setEarnedXp(xp);
      }
      setQuizFinished(true);
      playSfx("victory");
    }
  };

  // Audio helper
  const handleSpeak = (text: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    speakChinese(text);
  };

  // Emoji helper
  const getEmoji = (word: any) => {
    return isLevel3 ? getWordEmoji3(word) : isLevel2 ? getWordEmoji2(word) : getWordEmoji(word);
  };

  // Helper to render a Word Card
  const renderWordCard = (word: any) => {
    const isLearned = progress.learnedWordIds.includes(word.id);
    const emoji = getEmoji(word);
    const categoryObj = categories.find((c) => c.id === word.category);

    return (
      <div
        key={word.id}
        className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-[28px] border-2 sm:border-3 bg-white p-3.5 sm:p-5 transition-all hover:-translate-y-1.5 ${
          isLearned
            ? "border-emerald-300 shadow-[0_6px_0_#86efac]"
            : theme.wordCardUnlearned
        }`}
      >
        {/* Top Row: Category Tag / Lesson Tag + Learned Toggle */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categoryObj && (
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-black ${categoryObj.badgeColor}`}
              >
                <span>{categoryObj.icon}</span>
                <span>{categoryObj.nameVi}</span>
              </span>
            )}
            {word.lessonNumber && (
              <span className={`inline-flex items-center rounded-full ${theme.wordLessonBadge} border px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-bold`}>
                Bài {word.lessonNumber}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleToggleLearned(word.id)}
            className={`flex h-8 w-8 items-center justify-center rounded-xl border-2 transition shrink-0 ${
              isLearned
                ? "border-emerald-400 bg-emerald-500 text-white shadow-xs"
                : `border-slate-200 bg-slate-50 text-slate-400 ${theme.wordActionHover}`
            }`}
            title={isLearned ? "Đã thuộc từ này" : "Đánh dấu đã thuộc"}
          >
            <CheckCircle2 size={16} />
          </button>
        </div>

        {/* Middle: Big Hanzi & Emoji */}
        <div className="my-3 sm:my-4 text-center">
          <div className="text-3xl sm:text-4xl select-none group-hover:scale-110 transition-transform">
            {emoji}
          </div>

          <h4
            onClick={(e) => handleSpeak(word.hanzi, e)}
            className={`mt-1 sm:mt-2 font-hanzi text-3xl xs:text-4xl sm:text-5xl font-black text-slate-800 cursor-pointer transition ${theme.wordHanziHover} active:scale-95`}
          >
            {word.hanzi}
          </h4>

          <p className="mt-0.5 sm:mt-1 font-mono text-xs sm:text-sm font-bold text-slate-500">
            {word.pinyin}
          </p>

          <p className={`mt-1 text-[11px] sm:text-xs font-black ${theme.wordMeaningBadge} inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border`}>
            {word.meaning}
          </p>
        </div>

        {/* Example Sentence with Audio */}
        <div className="rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50/80 p-2.5 sm:p-3 text-left">
          <div className="flex items-start justify-between gap-1.5">
            <p className="font-hanzi text-xs font-bold text-slate-800 leading-snug">
              {word.example}
            </p>
            <button
              type="button"
              onClick={(e) => handleSpeak(word.example, e)}
              className={`text-slate-400 ${theme.wordActionHover} shrink-0 mt-0.5 p-1 -mr-1`}
              title="Nghe câu ví dụ"
            >
              <Volume2 size={14} />
            </button>
          </div>
          <p className="text-[10px] font-mono text-slate-400 mt-0.5">
            {word.examplePinyin}
          </p>
          <p className="text-[10px] sm:text-[11px] font-medium text-slate-600 mt-1 italic">
            {word.exampleVi}
          </p>
        </div>

        {/* Bottom Action: Stroke Order Modal & Speak Button */}
        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setStrokeWord(getStrokeWord(word as any))}
            className={`inline-flex items-center gap-1.5 text-xs font-black text-slate-600 ${theme.wordActionHover} transition py-1`}
          >
            <PenTool size={13} />
            <span>Tập viết</span>
          </button>

          <button
            type="button"
            onClick={(e) => handleSpeak(word.hanzi, e)}
            className={`inline-flex items-center gap-1.5 rounded-xl border ${theme.wordActionListen} px-3 py-1.5 text-xs font-black transition active:scale-95`}
          >
            <Volume2 size={14} />
            <span>Nghe</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen pb-28 sm:pb-32 font-sans ${isLevel3 ? "bg-[#F0F9FF] selection:bg-sky-200 selection:text-sky-900" : isLevel2 ? "bg-[#F7FDF9] selection:bg-emerald-200 selection:text-emerald-900" : "bg-[#FFFDF5] selection:bg-amber-200 selection:text-amber-900"}`}>
      
      {/* ========================================================
          1. HEADER KHU VƯỜN HOẠT HÌNH CỦA BÉ
      ======================================================== */}
      <header className={`relative overflow-hidden border-b-4 pt-4 pb-8 sm:pt-6 sm:pb-10 shadow-sm ${
        isLevel3
          ? "border-sky-300 bg-gradient-to-b from-sky-200 via-blue-100 to-[#F0F9FF]"
          : isLevel2
          ? "border-emerald-300 bg-gradient-to-b from-emerald-200 via-teal-100 to-[#F7FDF9]"
          : "border-amber-300 bg-gradient-to-b from-amber-200 via-orange-100 to-[#FFFDF5]"
      }`}>
        {/* Floating Cartoon Clouds / Bubbles */}
        <div className="pointer-events-none absolute top-4 left-6 h-20 w-36 rounded-full bg-white/60 blur-xs" />
        <div className="pointer-events-none absolute top-12 right-10 h-24 w-44 rounded-full bg-white/70 blur-xs" />
        <div className={`pointer-events-none absolute -bottom-10 right-1/3 h-32 w-52 rounded-full blur-md ${isLevel3 ? "bg-sky-200/40" : isLevel2 ? "bg-emerald-200/40" : "bg-amber-200/40"}`} />

        <div className="relative z-10 mx-auto max-w-6xl px-3 sm:px-6">
          
          {/* Top Bar: Back button + Level Switcher + Score & Star Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="flex items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
              <Link
                to="/yct"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl border-2 border-slate-300 bg-white/95 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-black text-slate-800 shadow-[0_3px_0_#cbd5e1] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none shrink-0"
              >
                <ArrowLeft size={15} className="text-slate-600" />
                <span className="hidden xs:inline">Tủ sách YCT</span>
                <span className="xs:hidden">Tủ sách</span>
              </Link>

              {/* Level Quick Switcher */}
              <div className="inline-flex items-center rounded-2xl border-2 border-slate-200 bg-white/90 p-0.5 sm:p-1 shadow-xs shrink-0">
                <Link
                  to="/yct/1"
                  className={`rounded-xl px-2.5 sm:px-3 py-1 text-xs font-black transition-all ${
                    levelNum === 1
                      ? "bg-amber-500 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="sm:hidden">YCT 1</span>
                  <span className="hidden sm:inline">YCT 1 (129 từ)</span>
                </Link>
                <Link
                  to="/yct/2"
                  className={`rounded-xl px-2.5 sm:px-3 py-1 text-xs font-black transition-all ${
                    levelNum === 2
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="sm:hidden">YCT 2</span>
                  <span className="hidden sm:inline">YCT 2 (154 từ)</span>
                </Link>
                <Link
                  to="/yct/3"
                  className={`rounded-xl px-2.5 sm:px-3 py-1 text-xs font-black transition-all ${
                    levelNum === 3
                      ? "bg-sky-600 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="sm:hidden">YCT 3</span>
                  <span className="hidden sm:inline">YCT 3 (335 từ)</span>
                </Link>
              </div>
            </div>

            {/* Score & Star Badges */}
            <div className="flex items-center justify-end gap-2 sm:gap-2.5">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-2xl border-2 border-yellow-300 bg-yellow-100/90 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black text-yellow-900 shadow-[0_3px_0_#fde047]">
                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-400 text-amber-500 animate-spin-slow" />
                <span>{levelXp} <span className="hidden xs:inline">XP</span></span>
              </div>
              <div className={`inline-flex items-center gap-1 sm:gap-1.5 rounded-2xl border-2 ${isLevel3 ? "border-sky-300 bg-sky-100/90 text-sky-900 shadow-[0_3px_0_#7dd3fc]" : isLevel2 ? "border-emerald-300 bg-emerald-100/90 text-emerald-900 shadow-[0_3px_0_#86efac]" : "border-amber-300 bg-amber-100/90 text-amber-900 shadow-[0_3px_0_#fde047]"} px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black`}>
                <Trophy className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isLevel3 ? "text-sky-600" : isLevel2 ? "text-emerald-600" : "text-amber-600"}`} />
                <span>{progress.learnedWordIds.length}/{allWords.length} Từ</span>
              </div>
            </div>
          </div>

          {/* Main Hero Card */}
          <div className={`mt-4 sm:mt-6 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 rounded-3xl sm:rounded-[36px] border-3 sm:border-4 p-4 sm:p-6 md:p-8 text-white ${
            isLevel3
              ? "border-sky-300 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 shadow-[0_10px_0_#0369a1]"
              : isLevel2
              ? "border-emerald-300 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 shadow-[0_10px_0_#047857]"
              : "border-amber-300 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 shadow-[0_10px_0_#d97706]"
          }`}>
            
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left w-full">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border-2 border-white/40 bg-white/20 px-3 sm:px-3.5 py-1 text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-xs">
                <span>{isLevel3 ? "🚀 Chinh Phục Ngôn Ngữ · 少儿汉语 3" : isLevel2 ? "🌿 Vườn Hoa Khám Phá · 少儿汉语 2" : "🎈 Vườn Hoa Thiếu Nhi · 少儿汉语 1"}</span>
              </div>

              <h1 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                {`Góc Thiếu Nhi YCT ${levelNum}`}
              </h1>

              <p className="mt-2 sm:mt-2.5 max-w-xl text-xs sm:text-sm font-semibold leading-relaxed text-white/90">
                {isLevel3
                  ? "Chào mừng các bạn nhỏ! Khám phá 11 bài học tiếng Trung chuẩn YCT 3 và 20 chủ đề toàn diện với 335 từ vựng, lật thẻ flashcard và thử tài đố vui nhận sao thưởng nhé!"
                  : isLevel2
                  ? "Chào mừng các bạn nhỏ! Khám phá 10 bài học tiếng Trung chuẩn YCT 2 với 154 từ vựng hoạt hình, lật thẻ flashcard và thử tài đố vui nhận sao thưởng nhé!"
                  : "Chào mừng các bạn nhỏ! Khám phá 11 bài học tiếng Trung chuẩn YCT 1 với 129 từ vựng hoạt hình, lật thẻ flashcard và thử tài đố vui nhận sao thưởng nhé!"}
              </p>

              {/* Action Buttons in Hero */}
              <div className="mt-4 sm:mt-5 grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsMatchGameOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-yellow-200 bg-yellow-300 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-amber-950 shadow-[0_5px_0_#d97706] transition-all hover:scale-105 active:translate-y-1 active:shadow-none"
                >
                  <Gamepad2 className="h-4 w-4 text-amber-900" />
                  <span>Chơi Nối Từ 30s 🎮</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("quiz")}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/20 px-4 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-white backdrop-blur-md transition hover:bg-white/30"
                >
                  <PartyPopper className="h-4 w-4 text-yellow-200" />
                  <span>Đố Vui Có Thưởng 🎯</span>
                </button>
              </div>
            </div>

            {/* Right Mascot Card with Speech Bubble */}
            <div className="relative shrink-0 flex flex-col items-center">
              <div className="relative mb-2 rounded-2xl border-2 border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-black text-slate-800 shadow-md max-w-xs text-center">
                <span>{isLevel3 ? "Cùng học YCT 3 nhận thật nhiều sao nhé! 🌟" : isLevel2 ? "Bé chọn bài học bên dưới để bắt đầu nhé! 🚀" : "Bé đã sẵn sàng cùng Pipi chưa nào? 🐾"}</span>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-x-6 border-x-transparent border-t-8 border-t-white" />
              </div>

              <div className={`flex h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 items-center justify-center rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-white shadow-xl text-4xl sm:text-6xl md:text-7xl select-none hover:rotate-6 transition-transform ${isLevel3 ? "bg-sky-100" : isLevel2 ? "bg-emerald-100" : "bg-amber-100"}`}>
                {isLevel3 ? "🦁" : isLevel2 ? "🐯" : "🐼"}
              </div>
            </div>

          </div>

          {/* ========================================================
              2. BẢNG ĐIỀU KHIỂN CHƠI CỦA BÉ (4 TABS CHUNKY 3D)
          ======================================================== */}
          <div className="mt-5 sm:mt-8 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2 sm:gap-3">
            
            {/* Tab 1: Xem Tranh Từ Vựng */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("vocab");
                playSfx("click");
              }}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "vocab"
                  ? theme.vocabTabActive
                  : `border-2 border-slate-200 bg-white text-slate-700 ${theme.vocabTabInactiveHover} shadow-[0_3px_0_#cbd5e1]`
              }`}
            >
              <span className="text-sm sm:text-base">🎨</span>
              <span className="truncate">{allWords.length} <span className="hidden xs:inline">Thẻ</span> Từ Vựng</span>
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
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "flashcard"
                  ? "border-3 border-purple-400 bg-purple-500 text-white shadow-[0_5px_0_#7e22ce] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-purple-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-sm sm:text-base">🃏</span>
              <span className="truncate">Lật Thẻ <span className="hidden xs:inline">Kì Diệu</span></span>
            </button>

            {/* Tab 3: Đố Vui Có Thưởng */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("quiz");
                startQuiz();
                playSfx("click");
              }}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "quiz"
                  ? "border-3 border-rose-400 bg-rose-500 text-white shadow-[0_5px_0_#be123c] -translate-y-1"
                  : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-rose-50 shadow-[0_3px_0_#cbd5e1]"
              }`}
            >
              <span className="text-sm sm:text-base">🎯</span>
              <span className="truncate">Đố Vui <span className="hidden xs:inline">Thưởng</span></span>
            </button>

            {/* Tab 4: Tủ Sách PDF Cho Ba Mẹ */}
            <button
              type="button"
              onClick={() => {
                setActiveTab("pdf");
                playSfx("click");
              }}
              className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-2xl px-3 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black transition-all ${
                activeTab === "pdf"
                  ? theme.pdfTabActive
                  : `border-2 border-slate-200 bg-white text-slate-700 ${theme.pdfTabInactiveHover} shadow-[0_3px_0_#cbd5e1]`
              }`}
            >
              <span className="text-sm sm:text-base">📖</span>
              <span className="truncate">Tủ Sách <span className="hidden xs:inline">PDF</span></span>
            </button>

          </div>

        </div>
      </header>

      {/* ========================================================
          3. NỘI DUNG TƯƠNG TÁC CHÍNH
      ======================================================== */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 pt-8">

        {/* ========================================================
            TAB 1: BỘ SƯU TẬP TỪ VỰNG CHIA THEO BÀI & CHỦ ĐỀ
        ======================================================== */}
        {activeTab === "vocab" && (
          <div className="space-y-8">
            
            {/* Thanh điều hướng chế độ chia bài */}
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b ${isLevel3 ? "border-sky-100" : isLevel2 ? "border-emerald-100" : "border-amber-100"} pb-4`}>
                {/* 2 nút lớn: Bài học vs Chủ đề */}
                <div className={`grid grid-cols-2 sm:flex items-center gap-1.5 rounded-2xl border-2 ${isLevel3 ? "border-sky-200" : isLevel2 ? "border-emerald-200" : "border-amber-200"} bg-white p-1.5 shadow-xs w-full sm:w-auto`}>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode("lessons");
                      setSelectedLesson("all");
                      playSfx("click");
                    }}
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-5 py-2 sm:py-2.5 text-xs font-black transition-all ${
                      viewMode === "lessons"
                        ? theme.viewModeActive
                        : theme.viewModeInactive
                    }`}
                  >
                    <BookOpen size={16} className="shrink-0" />
                    <span><span className="hidden xs:inline">Danh sách </span>Bài học</span>
                    <span className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] font-mono shrink-0 ${viewMode === "lessons" ? theme.viewModeCountActive : theme.viewModeCountInactive}`}>
                      {currentLessons.length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setViewMode("categories");
                      setSelectedCategory("all");
                      playSfx("click");
                    }}
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl px-2.5 sm:px-5 py-2 sm:py-2.5 text-xs font-black transition-all ${
                      viewMode === "categories"
                        ? theme.viewModeActive
                        : theme.viewModeInactive
                    }`}
                  >
                    <Sparkles size={16} className="shrink-0" />
                    <span><span className="hidden xs:inline">Theo </span>Chủ đề</span>
                    <span className={`rounded-full px-1.5 sm:px-2 py-0.5 text-[10px] font-mono shrink-0 ${viewMode === "categories" ? theme.viewModeCountActive : theme.viewModeCountInactive}`}>
                      {categories.length}
                    </span>
                  </button>
                </div>

                {/* Thanh tìm kiếm */}
                <div className="relative w-full sm:w-72">
                  <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 ${theme.searchIcon}`} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="🔍 Tìm chữ Hán, pinyin, nghĩa..."
                    className={`w-full rounded-2xl border-2 ${theme.searchInput} bg-white py-2.5 sm:py-2 pl-10 pr-4 text-xs font-bold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2`}
                  />
                </div>
              </div>

            {/* ========================================================
                CHẾ ĐỘ 1: XEM THEO BÀI HỌC
            ======================================================== */}
            {viewMode === "lessons" && (
              <div className="space-y-8">
                
                {/* 1.1 Khi đang xem TẤT CẢ các bài -> Hiển thị Lưới Card Bài Học */}
                {selectedLesson === "all" && !searchQuery.trim() && (
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h2 className="font-display text-xl font-black text-slate-900">
                          Danh sách {currentLessons.length} Bài học Giáo trình YCT {levelNum}
                        </h2>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          Chọn một bài học bên dưới để luyện tập trọng tâm hoặc cuộn xuống xem toàn bộ từ vựng
                        </p>
                      </div>

                      <span className={`text-xs font-black ${theme.headerBadge} px-3 py-1 rounded-full border`}>
                        {currentLessons.length} bài học · {allWords.length} từ
                      </span>
                    </div>

                    {/* Lưới 10 Card bài học (Thiết kế hiện đại với watermark số lớn) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                      {lessonsWithStats.map((l) => (
                        <div
                          key={l.lessonNumber}
                          className={`group relative overflow-hidden rounded-3xl border-3 ${theme.lessonCard} bg-white p-5 transition-all hover:-translate-y-1`}
                        >
                          {/* Số hiệu watermark lớn góc dưới phải */}
                          <span className={`pointer-events-none absolute -right-2 -bottom-4 font-hanzi text-7xl font-black leading-none ${theme.lessonCardWatermark} transition-colors select-none`}>
                            {String(l.lessonNumber).padStart(2, "0")}
                          </span>

                          <div className="relative z-10">
                            {/* Top row: Badge Bài & Thời gian */}
                            <div className="flex items-center justify-between gap-2">
                              <span className={`inline-flex items-center gap-1.5 rounded-full ${theme.lessonBadge} px-3 py-1 text-xs font-black uppercase tracking-wider`}>
                                <span>Bài {String(l.lessonNumber).padStart(2, "0")}</span>
                              </span>

                              <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <span className="flex items-center gap-1">
                                  <BookOpen className={`h-3.5 w-3.5 ${theme.lessonBookIcon}`} />
                                  <span>{(l.wordsCount || (l as any).wordCount || l.lessonWords?.length || 0)} từ</span>
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                                  <span>~{(l.estMinutes || (l as any).estimatedMinutes || 10)} phút</span>
                                </span>
                              </div>
                            </div>

                            {/* Tiêu đề tiếng Việt & Chữ Hán */}
                            <div className="mt-3">
                              <h3 className={`text-base sm:text-lg font-black text-slate-900 ${theme.lessonTitleHover} transition-colors`}>
                                {l.titleVi}
                              </h3>
                              <p className={`font-hanzi text-base font-bold ${theme.lessonTitleZh} mt-1`}>
                                {l.titleZh}
                              </p>
                            </div>

                            {/* Danh sách từ xem trước trong bài */}
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {l.lessonWords.map((w: any) => (
                                <span
                                  key={w.id}
                                  onClick={(e) => handleSpeak(w.hanzi, e)}
                                  className={`inline-flex items-center rounded-lg ${theme.lessonChip} px-2 py-0.5 text-xs font-bold border cursor-pointer transition`}
                                  title={`${w.hanzi} (${w.pinyin}): ${w.meaning}`}
                                >
                                  {w.hanzi}
                                </span>
                              ))}
                            </div>

                            {/* Thanh tiến độ thuộc bài */}
                            <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                              <div className="w-full xs:flex-1 min-w-0">
                                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                                  <span>Tiến độ: {l.learnedCount}/{l.lessonWords.length} từ</span>
                                  <span>{l.percent}%</span>
                                </div>

                                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                                  <div
                                    className={`h-full ${theme.lessonProgress} rounded-full transition-all duration-300`}
                                    style={{ width: `${l.percent}%` }}
                                  />
                                </div>
                              </div>

                              {/* Nút hành động */}
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedLesson(l.lessonNumber);
                                  playSfx("click");
                                }}
                                className={`inline-flex items-center justify-center gap-1.5 rounded-xl border-2 ${theme.lessonButton} px-3.5 py-2 text-xs font-black transition w-full xs:w-auto shrink-0`}
                              >
                                <span>Học bài này</span>
                                <ArrowRight size={13} />
                              </button>
                            </div>

                          </div>
                        </div>
                      ))}

                      {/* Card Bài Ôn tập & Mở rộng tích lũy */}
                      <div className="group relative overflow-hidden rounded-3xl border-3 border-teal-200/80 bg-white p-5 shadow-[0_4px_0_#99f6e4] transition-all hover:-translate-y-1 hover:border-teal-400 hover:shadow-[0_8px_0_#5eead4]">
                        <span className="pointer-events-none absolute -right-2 -bottom-4 font-hanzi text-7xl font-black leading-none text-teal-600/10 group-hover:text-teal-600/20 transition-colors select-none">
                          +
                        </span>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between gap-2">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-xs">
                              <span>Ôn tập & Mở rộng</span>
                            </span>

                            <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                              <span className="flex items-center gap-1">
                                <BookOpen className="h-3.5 w-3.5 text-teal-600" />
                                <span>{reviewWords.length} từ tích lũy</span>
                              </span>
                            </div>
                          </div>

                          <div className="mt-3">
                            <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-teal-700 transition-colors">
                              Từ vựng Mở rộng & Tích lũy YCT {levelNum}
                            </h3>
                            <p className="font-hanzi text-base font-bold text-teal-800 mt-1">
                              拓展复习词汇
                            </p>
                          </div>

                          <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                            Tổng hợp {reviewWords.length} từ vựng cơ bản và mở rộng bổ trợ theo khung đề cương quốc tế YCT {levelNum}.
                          </p>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
                            <div className="w-full xs:flex-1 min-w-0">
                              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1">
                                <span>Tiến độ: {reviewLearnedCount}/{reviewWords.length} từ</span>
                                <span>{Math.round((reviewLearnedCount / (reviewWords.length || 1)) * 100)}%</span>
                              </div>
                              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                                <div
                                  className="h-full bg-teal-500 rounded-full transition-all duration-300"
                                  style={{ width: `${Math.round((reviewLearnedCount / (reviewWords.length || 1)) * 100)}%` }}
                                />
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => {
                                setSelectedLesson(0);
                                playSfx("click");
                              }}
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-teal-400 bg-teal-500 text-white px-3.5 py-2 text-xs font-black shadow-[0_2px_0_#0f766e] hover:bg-teal-600 transition w-full xs:w-auto shrink-0"
                            >
                              <span>Học phần mở rộng</span>
                              <ArrowRight size={13} />
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 1.2 Khi ĐÃ CHỌN 1 BÀI HỌC CỤ THỂ -> Banner Bài Học & Nút Quay Lại */}
                {selectedLesson !== "all" && (
                  <div className={`rounded-3xl border-3 ${theme.selectedBanner} p-6 text-white`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedLesson("all");
                            playSfx("click");
                          }}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/40 bg-white/20 px-3 py-1 text-xs font-black text-white hover:bg-white/30 transition mb-2"
                        >
                          <ArrowLeft size={14} />
                          <span>Quay lại tất cả {currentLessons.length} bài</span>
                        </button>

                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-yellow-300 text-amber-950 font-mono text-xs font-black px-2 py-0.5">
                            {selectedLesson === 0 ? "ÔN TẬP" : `BÀI ${selectedLesson}`}
                          </span>
                          <h2 className="font-display text-xl sm:text-2xl font-black">
                            {selectedLesson === 0
                              ? "Từ vựng Mở rộng & Ôn tập tích lũy"
                              : currentLessons.find((l) => l.lessonNumber === selectedLesson)?.titleVi}
                          </h2>
                        </div>

                        <p className={`font-hanzi text-lg font-bold ${theme.selectedBannerSubtitle} mt-1`}>
                          {selectedLesson === 0
                            ? "拓展复习词汇"
                            : currentLessons.find((l) => l.lessonNumber === selectedLesson)?.titleZh}
                        </p>
                      </div>

                      {/* Nút hành động nhanh của bài */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("flashcard");
                            setFcIndex(0);
                            setFcFlipped(false);
                            playSfx("click");
                          }}
                          className="inline-flex items-center justify-center gap-1.5 rounded-2xl border-2 border-yellow-300 bg-yellow-300 text-amber-950 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-black shadow-xs hover:bg-yellow-400 transition"
                        >
                          <span>🃏 Flashcard bài này</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setActiveTab("quiz");
                            startQuiz();
                            playSfx("click");
                          }}
                          className="inline-flex items-center justify-center gap-1.5 rounded-2xl border-2 border-white/40 bg-white/20 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-black hover:bg-white/30 transition"
                        >
                          <span>🎯 Đố vui bài này</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 1.3 Thanh Lọc Nhanh Giữa Các Bài Học */}
                <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedLesson("all");
                      playSfx("click");
                    }}
                    className={`rounded-2xl px-4 py-2 text-xs font-black shrink-0 transition-all ${
                      selectedLesson === "all"
                        ? theme.pillActive
                        : `border-2 border-slate-200 bg-white text-slate-700 ${theme.pillInactiveHover}`
                    }`}
                  >
                    Tất Cả ({allWords.length})
                  </button>

                  {currentLessons.map((l) => {
                    const isSelected = selectedLesson === l.lessonNumber;
                    return (
                      <button
                        key={l.lessonNumber}
                        type="button"
                        onClick={() => {
                          setSelectedLesson(l.lessonNumber);
                          playSfx("click");
                        }}
                        className={`flex items-center gap-1.5 rounded-2xl px-3.5 py-2 text-xs font-black shrink-0 transition-all ${
                          isSelected
                            ? theme.pillActive
                            : `border-2 border-slate-200 bg-white text-slate-700 ${theme.pillInactiveHover}`
                        }`}
                      >
                        <span>Bài {l.lessonNumber}</span>
                        <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-[10px] font-mono">
                          {l.wordCount}
                        </span>
                      </button>
                    );
                  })}

                  {reviewWords.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLesson(0);
                        playSfx("click");
                      }}
                      className={`flex items-center gap-1.5 rounded-2xl px-3.5 py-2 text-xs font-black shrink-0 transition-all ${
                        selectedLesson === 0
                          ? "border-2 border-teal-600 bg-teal-600 text-white shadow-[0_3px_0_#115e59] -translate-y-0.5"
                          : "border-2 border-slate-200 bg-white text-slate-700 hover:bg-teal-50"
                      }`}
                    >
                      <span>Ôn tập & Mở rộng</span>
                      <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-[10px] font-mono">
                        {reviewWords.length}
                      </span>
                    </button>
                  )}
                </div>

                {/* 1.4 Hiển thị từ vựng: Nếu chọn 1 bài -> hiện từ vựng bài đó. Nếu chọn tất cả -> phân nhóm từng bài rõ ràng! */}
                {selectedLesson !== "all" ? (
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                    {filteredWords.map((word) => renderWordCard(word))}
                  </div>
                ) : (
                  /* Khi chọn "Tất Cả": Phân cụm nhóm theo từng bài học */
                  <div className="space-y-10">
                    {currentLessons.map((lesson) => {
                      const wordsInLesson = allWords.filter((w) => w.lessonNumber === lesson.lessonNumber);
                      if (wordsInLesson.length === 0) return null;

                      return (
                        <div key={lesson.lessonNumber} className={`rounded-3xl border-2 ${theme.groupContainer} p-4 sm:p-6 space-y-4`}>
                          {/* Header từng bài học */}
                          <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b ${theme.groupDivider} pb-3`}>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`rounded-lg ${theme.groupBadge} font-mono text-xs font-black px-2.5 py-0.5`}>
                                  Bài {lesson.lessonNumber}
                                </span>
                                <h3 className="font-display text-lg font-black text-slate-900">
                                  {lesson.titleVi}
                                </h3>
                              </div>
                              <p className={`font-hanzi text-sm font-bold ${theme.groupTitleZh} mt-0.5`}>
                                {lesson.titleZh}
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-500">
                                {wordsInLesson.length} từ vựng
                              </span>
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedLesson(lesson.lessonNumber);
                                  playSfx("click");
                                }}
                                className={`inline-flex items-center gap-1 text-xs font-black ${theme.groupButton} bg-white border rounded-xl px-3 py-1 shadow-2xs transition`}
                              >
                                <span>Luyện riêng bài này</span>
                                <ArrowRight size={12} />
                              </button>
                            </div>
                          </div>

                          {/* Lưới từ vựng của bài */}
                          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                            {wordsInLesson.map((word) => renderWordCard(word))}
                          </div>
                        </div>
                      );
                    })}

                    {/* Khối ôn tập mở rộng tích lũy */}
                    {reviewWords.length > 0 && (
                      <div className="rounded-3xl border-2 border-teal-100 bg-teal-50/30 p-4 sm:p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-200/70 pb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="rounded-lg bg-teal-600 text-white font-mono text-xs font-black px-2.5 py-0.5">
                                MỞ RỘNG
                              </span>
                              <h3 className="font-display text-lg font-black text-slate-900">
                                Từ vựng Mở rộng & Tích lũy YCT {levelNum}
                              </h3>
                            </div>
                            <p className="font-hanzi text-sm font-bold text-teal-800 mt-0.5">
                              拓展复习词汇
                            </p>
                          </div>

                          <span className="text-xs font-bold text-slate-500">
                            {reviewWords.length} từ vựng
                          </span>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                          {reviewWords.map((word) => renderWordCard(word))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ========================================================
                CHẾ ĐỘ 2: XEM THEO 10 CHỦ ĐỀ
            ======================================================== */}
            {viewMode === "categories" && (
              <div className="space-y-6">
                {/* Pills chủ đề */}
                <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("all");
                      playSfx("click");
                    }}
                    className={`rounded-2xl px-4 py-2.5 text-xs font-black shrink-0 transition-all ${
                      selectedCategory === "all"
                        ? theme.categoryActive
                        : `border-2 border-slate-200 bg-white text-slate-700 ${theme.pillInactiveHover} shadow-xs`
                    }`}
                  >
                    🌈 Tất Cả ({allWords.length})
                  </button>

                  {categories.map((cat) => {
                    const count = allWords.filter((w) => w.category === cat.id).length;
                    const isSelected = selectedCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          playSfx("click");
                        }}
                        className={`flex items-center gap-1.5 rounded-2xl px-3.5 py-2 text-xs font-black shrink-0 transition-all ${
                          isSelected
                            ? theme.categoryActive
                            : `border-2 border-slate-200 bg-white text-slate-700 ${theme.pillInactiveHover} shadow-xs`
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

                {/* Lưới từ vựng theo chủ đề */}
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5">
                  {filteredWords.map((word) => renderWordCard(word))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ========================================================
            TAB 2: LẬT THẺ MA THUẬT FLASHCARD
        ======================================================== */}
        {activeTab === "flashcard" && currentFcWord && (
          <div className="mx-auto max-w-xl space-y-6">
            
            {/* Top Toolbar: Chọn bài học để lật thẻ */}
            <div className={`flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border ${isLevel3 ? "border-sky-200" : isLevel2 ? "border-emerald-200" : "border-amber-200"} text-xs font-bold`}>
              <span className="text-slate-600 shrink-0">Lọc thẻ theo:</span>
              <select
                value={selectedLesson}
                onChange={(e) => {
                  const val = e.target.value === "all" ? "all" : Number(e.target.value);
                  setSelectedLesson(val);
                  setFcIndex(0);
                  setFcFlipped(false);
                }}
                className={`rounded-xl border ${isLevel3 ? "border-sky-300 bg-sky-50/50 text-sky-900" : isLevel2 ? "border-emerald-300 bg-emerald-50/50 text-emerald-900" : "border-amber-300 bg-amber-50/50 text-amber-900"} px-3 py-1.5 text-xs font-black focus:outline-none`}
              >
                <option value="all">Toàn bộ {currentLessons.length} bài học ({allWords.length} từ)</option>
                {currentLessons.map((l: any) => (
                  <option key={l.lessonNumber} value={l.lessonNumber}>
                    Bài {l.lessonNumber}: {l.titleVi} ({l.wordsCount || l.wordCount || l.words?.length || 0} từ)
                  </option>
                ))}
                {reviewWords.length > 0 && (
                  <option value={0}>Ôn tập & Mở rộng ({reviewWords.length} từ)</option>
                )}
              </select>
            </div>

            {/* Controls Bar */}
            <div className="flex items-center justify-between gap-3 text-xs font-black text-slate-600">
              <div className="flex items-center gap-2">
                <span>Thẻ {fcIndex + 1}/{flashcardWords.length}</span>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={() => setFcShowPinyin(!fcShowPinyin)}
                  className={`inline-flex items-center gap-1 ${theme.fcAccentText} hover:underline`}
                >
                  {fcShowPinyin ? <Eye size={14} /> : <EyeOff size={14} />}
                  <span>{fcShowPinyin ? "Ẩn Pinyin" : "Hiện Pinyin"}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  setFcIndex(Math.floor(Math.random() * flashcardWords.length));
                  setFcFlipped(false);
                }}
                className={`inline-flex items-center gap-1 text-slate-500 ${theme.fcAccentText}`}
              >
                <RotateCcw size={14} />
                <span>Trộn thẻ</span>
              </button>
            </div>

            {/* The 3D Flashcard */}
            <div
              onClick={() => {
                setFcFlipped(!fcFlipped);
                playSfx("click");
              }}
              className={`cursor-pointer select-none rounded-[36px] border-4 p-8 text-center transition-all duration-300 hover:scale-[1.02] ${
                fcFlipped
                  ? "border-purple-300 bg-gradient-to-br from-purple-50 via-white to-pink-50 shadow-[0_12px_0_#c084fc]"
                  : theme.fcCardFront
              }`}
              style={{ minHeight: "360px" }}
            >
              {!fcFlipped ? (
                /* Mặt Trước: Chữ Hán to, Emoji, nút nghe */
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-8">
                  <div className="text-6xl">{getEmoji(currentFcWord)}</div>
                  <h2 className="font-hanzi text-6xl sm:text-7xl font-black text-slate-800">
                    {currentFcWord.hanzi}
                  </h2>
                  {fcShowPinyin && (
                    <p className="font-mono text-lg font-bold text-slate-500">
                      {currentFcWord.pinyin}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={(e) => handleSpeak(currentFcWord.hanzi, e)}
                    className={`inline-flex items-center gap-2 rounded-2xl ${theme.fcListenBtn} px-4 py-2 text-xs font-black`}
                  >
                    <Volume2 size={16} />
                    <span>Nghe phát âm</span>
                  </button>
                  <p className="text-[11px] font-bold text-slate-400 mt-4">
                    👉 Bấm vào thẻ để lật xem nghĩa & ví dụ!
                  </p>
                </div>
              ) : (
                /* Mặt Sau: Nghĩa tiếng Việt & Câu ví dụ */
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-6">
                  <span className="rounded-full bg-purple-100 text-purple-800 px-3 py-1 text-xs font-black">
                    Nghĩa Tiếng Việt
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-purple-900">
                    {currentFcWord.meaning}
                  </h3>

                  <div className="mt-4 rounded-2xl border border-purple-100 bg-white/90 p-4 text-left w-full max-w-sm">
                    <p className="font-hanzi text-sm font-bold text-slate-800">
                      {currentFcWord.example}
                    </p>
                    <p className="font-mono text-xs text-slate-500 mt-1">
                      {currentFcWord.examplePinyin}
                    </p>
                    <p className="text-xs text-purple-700 font-semibold mt-1">
                      {currentFcWord.exampleVi}
                    </p>
                  </div>

                  <p className="text-[11px] font-bold text-purple-400">
                    👉 Bấm lần nữa để lật lại mặt chữ Hán
                  </p>
                </div>
              )}
            </div>

            {/* Navigation Buttons Prev / Next */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 pt-2">
              <button
                type="button"
                disabled={fcIndex === 0}
                onClick={() => {
                  setFcIndex((prev) => Math.max(0, prev - 1));
                  setFcFlipped(false);
                }}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black text-slate-700 shadow-[0_3px_0_#cbd5e1] transition disabled:opacity-40 shrink-0"
              >
                <ChevronLeft size={16} />
                <span><span className="hidden xs:inline">Thẻ </span>trước</span>
              </button>

              <button
                type="button"
                onClick={() => handleToggleLearned(currentFcWord.id)}
                className={`inline-flex items-center justify-center gap-1 sm:gap-2 rounded-2xl border-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black transition flex-1 sm:flex-initial truncate ${
                  progress.learnedWordIds.includes(currentFcWord.id)
                    ? "border-emerald-400 bg-emerald-500 text-white shadow-[0_3px_0_#047857]"
                    : `border-slate-200 bg-white text-slate-700 ${theme.pillInactiveHover}`
                }`}
              >
                <CheckCircle2 size={16} className="shrink-0" />
                <span className="truncate">{progress.learnedWordIds.includes(currentFcWord.id) ? "Đã thuộc" : "Đánh dấu thuộc"}</span>
              </button>

              <button
                type="button"
                disabled={fcIndex === flashcardWords.length - 1}
                onClick={() => {
                  setFcIndex((prev) => Math.min(flashcardWords.length - 1, prev + 1));
                  setFcFlipped(false);
                }}
                className="inline-flex items-center justify-center gap-1 sm:gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black text-slate-700 shadow-[0_3px_0_#cbd5e1] transition disabled:opacity-40 shrink-0"
              >
                <span><span className="hidden xs:inline">Thẻ </span>tiếp</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>
        )}

        {/* ========================================================
            TAB 3: ĐỐ VUI CÓ THƯỞNG (QUIZ)
        ======================================================== */}
        {activeTab === "quiz" && (
          <div className="mx-auto max-w-xl space-y-6">
            {/* Lọc đố vui theo bài học */}
            <div className="flex items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-rose-200 text-xs font-bold">
              <span className="text-slate-600 shrink-0">Đố vui theo:</span>
              <select
                value={selectedLesson}
                onChange={(e) => {
                  const val = e.target.value === "all" ? "all" : Number(e.target.value);
                  setSelectedLesson(val);
                  startQuiz();
                }}
                className="rounded-xl border border-rose-300 bg-rose-50/50 px-3 py-1.5 text-xs font-black text-rose-900 focus:outline-none"
              >
                <option value="all">Toàn bộ {currentLessons.length} bài học ({allWords.length} từ)</option>
                {currentLessons.map((l: any) => (
                  <option key={l.lessonNumber} value={l.lessonNumber}>
                    Bài {l.lessonNumber}: {l.titleVi} ({l.wordsCount || l.wordCount || l.words?.length || 0} từ)
                  </option>
                ))}
                {reviewWords.length > 0 && (
                  <option value={0}>Ôn tập & Mở rộng ({reviewWords.length} từ)</option>
                )}
              </select>
            </div>
            <p className="px-2 text-center text-[11px] font-semibold text-slate-500">
              Mỗi ngày, hệ thống giữ phần thưởng XP cao nhất của quiz và game nối từ ở từng cấp YCT.
            </p>

            {!quizFinished && quizQuestions.length > 0 ? (
              <div className="rounded-[36px] border-4 border-rose-300 bg-white p-6 sm:p-8 shadow-[0_12px_0_#fda4af]">
                
                {/* Quiz Progress Bar */}
                <div className="flex items-center justify-between text-xs font-black text-slate-500 mb-4">
                  <span>Câu {quizIndex + 1}/{quizQuestions.length}</span>
                  <span className="text-amber-600 font-mono">⭐ Điểm: {score * 10}</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden mb-6">
                  <div
                    className="h-full bg-rose-500 transition-all duration-300"
                    style={{ width: `${((quizIndex + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                {/* Question Prompt */}
                <div className="text-center my-4">
                  <p className="text-xs font-black text-rose-600 uppercase tracking-wider">
                    {quizQuestions[quizIndex].prompt}
                  </p>

                  <div className="my-5">
                    {quizQuestions[quizIndex].type === "listen" ? (
                      <button
                        type="button"
                        onClick={() => speakChinese(quizQuestions[quizIndex].audioText)}
                        className="inline-flex items-center justify-center h-20 w-20 rounded-full border-4 border-rose-400 bg-rose-50 text-3xl text-rose-600 shadow-md hover:scale-105 active:scale-95 transition"
                      >
                        🔊
                      </button>
                    ) : (
                      <h3
                        onClick={() => speakChinese(quizQuestions[quizIndex].audioText)}
                        className="font-hanzi text-5xl sm:text-6xl font-black text-slate-800 cursor-pointer hover:text-rose-600 transition"
                      >
                        {quizQuestions[quizIndex].hanzi}
                      </h3>
                    )}
                  </div>
                </div>

                {/* 4 Chunky Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {quizQuestions[quizIndex].options.map((opt: string, idx: number) => {
                    const isSelected = selectedOption === opt;
                    const isCorrect = opt === quizQuestions[quizIndex].correctAnswer;

                    let btnStyle = "border-2 border-slate-200 bg-slate-50 hover:bg-rose-50 text-slate-800";
                    if (isAnswerChecked) {
                      if (isCorrect) {
                        btnStyle = "border-2 border-emerald-500 bg-emerald-100 text-emerald-950 font-black";
                      } else if (isSelected) {
                        btnStyle = "border-2 border-rose-500 bg-rose-100 text-rose-950 font-black";
                      } else {
                        btnStyle = "border-2 border-slate-200 bg-white text-slate-400 opacity-60";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        disabled={isAnswerChecked}
                        onClick={() => handleSelectQuizOption(opt)}
                        className={`rounded-2xl p-4 text-xs sm:text-sm font-bold transition-all ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {/* Continue / Next Button */}
                {isAnswerChecked && (
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="inline-flex items-center gap-2 rounded-2xl border-2 border-rose-400 bg-rose-500 text-white px-6 py-3 text-xs font-black shadow-[0_4px_0_#be123c] hover:bg-rose-600 active:translate-y-0.5 active:shadow-none transition"
                    >
                      <span>{quizIndex < quizQuestions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}

              </div>
            ) : (
              /* Quiz Finished Celebration Screen */
              <div className="text-center rounded-[36px] border-4 border-yellow-300 bg-white p-8 shadow-[0_12px_0_#fde047] space-y-4">
                <div className="text-6xl animate-bounce">🏆</div>
                <h2 className="font-display text-3xl font-black text-slate-900">
                  Chúc Mừng Bé Yêu!
                </h2>
                <p className="text-sm font-bold text-slate-600">
                  Bé đã trả lời đúng <strong>{score} / {quizQuestions.length}</strong> câu hỏi!
                </p>
                {earnedXp && (
                  <div className="inline-flex items-center gap-2 rounded-2xl bg-amber-100 border border-amber-300 px-4 py-2 text-sm font-black text-amber-900">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-500" />
                    <span>+{earnedXp} XP!</span>
                  </div>
                )}
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={startQuiz}
                    className={`inline-flex items-center gap-2 rounded-2xl border-2 ${theme.lessonButton} px-6 py-3 text-xs font-black`}
                  >
                    <RotateCcw size={16} />
                    <span>Chơi Lại Lượt Khác</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            TAB 4: TỦ SÁCH PDF CHO BA MẸ
        ======================================================== */}
        {activeTab === "pdf" && (
          <div className="space-y-6">
            
            {/* Header Box */}
            <div className={`rounded-[36px] border-4 ${theme.pdfHeader} p-6 sm:p-8 text-white`}>
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-xs font-black uppercase tracking-wider backdrop-blur-md">
                  <span>Trọn Bộ Học Liệu Chính Thức</span>
                </div>
                <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black">
                  Tủ Sách PDF Chuẩn Giáo Trình YCT {levelNum}
                </h2>
                <p className={`mt-2 text-xs sm:text-sm font-semibold leading-relaxed ${theme.pdfSubtitle}`}>
                  Ba mẹ và thầy cô có thể tải trọn bộ Sách Giáo Khoa (Textbook) và Sách Bài Tập (Workbook) in màu chính thức để in ra cho bé tô màu, tập viết và rèn luyện tại nhà!
                </p>
              </div>
            </div>

            {/* List YCT Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {YCT_PDF_RESOURCES.map((res) => {
                const isCurrentLevel = res.level === levelNum;
                const cover = `/yct${res.level}.png`;

                return (
                  <div
                    key={res.level}
                    className={`flex flex-col justify-between rounded-[32px] border-3 bg-white p-6 ${
                      isCurrentLevel
                        ? isLevel3
                          ? "border-sky-400 shadow-[0_8px_0_#7dd3fc] ring-2 ring-sky-200"
                          : isLevel2
                          ? "border-emerald-400 shadow-[0_8px_0_#6ee7b7] ring-2 ring-emerald-200"
                          : "border-amber-400 shadow-[0_8px_0_#fde047] ring-2 ring-amber-200"
                        : "border-slate-200 shadow-[0_6px_0_#e2e8f0]"
                    }`}
                  >
                    <div className="flex gap-4 items-start">
                      {cover && (
                        <div className="w-16 sm:w-20 rounded-xl overflow-hidden shadow-xs border border-slate-200 shrink-0 bg-white aspect-[3/4]">
                          <img
                            src={cover}
                            alt={res.titleVi}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-black ${
                            isCurrentLevel
                              ? isLevel3
                                ? "border-sky-300 bg-sky-100 text-sky-900"
                                : isLevel2
                                ? "border-emerald-300 bg-emerald-100 text-emerald-900"
                                : "border-amber-300 bg-amber-100 text-amber-900"
                              : "border-slate-200 bg-slate-100 text-slate-800"
                          }`}>
                            <span>Cấp độ {res.level}</span>
                            <span className="font-normal font-mono">({res.wordsCount} từ vựng)</span>
                          </span>

                          <span className="text-xs font-black text-slate-400 font-hanzi">
                            {res.titleZh}
                          </span>
                        </div>

                        <h3 className="mt-2 font-display text-lg sm:text-xl font-black text-slate-900">
                          {res.titleVi}
                        </h3>

                        <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-600">
                          {res.desc}
                        </p>
                      </div>
                    </div>

                    {/* 2 Download Buttons */}
                    <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3">
                      <a
                        href={res.textbookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-2xl border-2 ${isLevel3 ? "border-sky-400 bg-sky-500 hover:bg-sky-600 shadow-[0_3px_0_#0369a1]" : isLevel2 ? "border-emerald-400 bg-emerald-500 hover:bg-emerald-600 shadow-[0_3px_0_#047857]" : "border-amber-400 bg-amber-500 hover:bg-amber-600 shadow-[0_3px_0_#b45309]"} text-white px-3 sm:px-4 py-2.5 sm:py-3 text-xs font-black transition active:translate-y-0.5 active:shadow-none`}
                      >
                        <Download size={16} className="shrink-0" />
                        <span className="truncate">Sách Bài Học ({res.sizeMbTextbook}MB)</span>
                      </a>

                      <a
                        href={res.workbookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 px-3 sm:px-4 py-2.5 sm:py-3 text-xs font-black shadow-[0_3px_0_#cbd5e1] transition active:translate-y-0.5 active:shadow-none"
                      >
                        <Download size={16} className="shrink-0" />
                        <span className="truncate">Sách Bài Tập ({res.sizeMbWorkbook}MB)</span>
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        )}

      </main>

      {/* ========================================================
          MODALS BỔ TRỢ
      ======================================================== */}
      {/* Modal Tập Viết Từng Nét Chữ Hán */}
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
          title={`Ghép Nối Nhanh 30 Giây · YCT ${levelNum}`}
          recordVocabularyProgress={false}
          onComplete={(stats) => {
            const earnedXp = awardDailyXp(
              `yct:${levelNum}:match`,
              "yct",
              Math.min(100, Math.max(0, stats.points)),
            );
            if (isLevel3) {
              const current = getYct3Progress();
              const updated = {
                ...current,
                xp: current.xp + earnedXp,
              };
              saveYct3Progress(updated);
              setProgress(updated);
            } else if (isLevel2) {
              const current = getYct2Progress();
              const updated = {
                ...current,
                xp: current.xp + earnedXp,
              };
              saveYct2Progress(updated);
              setProgress(updated);
            } else {
              const current = getYctProgress();
              const updated = {
                ...current,
                xp: current.xp + earnedXp,
              };
              saveYctProgress(updated);
              setProgress(updated);
            }
          }}
        />
      )}

    </div>
  );
};
