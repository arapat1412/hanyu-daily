import React, { useState, useMemo } from 'react';
import {
  RotateCcw,
  Sparkles,
  Bookmark,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Volume2,
  Headphones,
  Keyboard,
  ArrowRight,
  Flame,
  Star,
  Check,
  Filter,
  Play,
  Layers,
  ChevronRight,
} from 'lucide-react';
import type { VocabularyWord } from '../types';
import { useProgress, speakChinese, toggleBookmark, useExamplesForWords, type HskData } from '../lib/hsk';
import { isMeaningEligible, isClozeEligible, type PracticeMode } from '../lib/practice.mjs';
import { HSK_LEVELS } from '../data/hskLevels';
import { PracticeSession } from './PracticeSession';
import { FlashcardModal } from './FlashcardModal';
import { HanziStrokeModal } from './HanziStrokeModal';

interface HskReviewViewProps {
  data: HskData;
}

type ReviewSource = 'all' | 'mistakes' | 'bookmarks' | 'unit';
type PracticeModeType = 'flashcard' | PracticeMode;

export const HskReviewView: React.FC<HskReviewViewProps> = ({ data }) => {
  const progress = useProgress();
  const level = HSK_LEVELS.find((item) => item.code === data.code)!;

  // Configuration States
  const [source, setSource] = useState<ReviewSource>('all');
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [batchSize, setBatchSize] = useState<number | 'all'>(20);
  
  // Active Practice States
  const [activeSession, setActiveSession] = useState<{
    mode: PracticeModeType;
    words: VocabularyWord[];
  } | null>(null);

  const [flashcardOpen, setFlashcardOpen] = useState(false);
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  // Filter words based on user selection
  const mistakeWords = useMemo(
    () => data.words.filter((w: VocabularyWord) => progress.mistakes.includes(w.id)),
    [data.words, progress.mistakes]
  );

  const bookmarkWords = useMemo(
    () => data.words.filter((w: VocabularyWord) => progress.bookmarks.includes(w.id)),
    [data.words, progress.bookmarks]
  );

  const knownWords = useMemo(
    () => data.words.filter((w: VocabularyWord) => progress.known.includes(w.id)),
    [data.words, progress.known]
  );

  // Eligible pool of words according to source & unit
  const eligiblePool = useMemo(() => {
    let pool = data.words;

    if (source === 'mistakes') {
      pool = mistakeWords;
    } else if (source === 'bookmarks') {
      pool = bookmarkWords;
    }

    if (selectedUnit !== 'all') {
      pool = pool.filter((w: VocabularyWord) => w.unit === selectedUnit);
    }

    return pool;
  }, [data.words, source, selectedUnit, mistakeWords, bookmarkWords]);

  // Selected batch of words for the practice round
  const reviewBatch = useMemo(() => {
    if (batchSize === 'all' || eligiblePool.length <= batchSize) {
      return eligiblePool;
    }
    // Pick first batchSize words
    return eligiblePool.slice(0, batchSize);
  }, [eligiblePool, batchSize]);

  // Enriched words with sample sentences for previews and cloze practice
  const enrichedReviewBatch = useExamplesForWords(data.code, reviewBatch);
  const previewWords = enrichedReviewBatch.slice(0, 12);

  // Audio helper
  const handlePlayAudio = (e: React.MouseEvent, word: VocabularyWord) => {
    e.stopPropagation();
    setPlayingId(word.id);
    speakChinese(word.hanzi, () => setPlayingId(null));
  };

  // Launch practice session
  const launchPractice = (mode: PracticeModeType, customWords?: VocabularyWord[]) => {
    const targetWords = customWords || (mode === 'cloze' ? enrichedReviewBatch : reviewBatch);
    if (targetWords.length === 0) return;

    if (mode === 'flashcard') {
      setFlashcardOpen(true);
    } else {
      setActiveSession({ mode, words: targetWords });
    }
  };

  // If a practice session is active, render it directly
  if (activeSession) {
    const modeLabels: Record<PracticeMode, string> = {
      pinyin: 'Chọn Pinyin',
      meaning: 'Chọn Nghĩa Việt',
      listening: 'Luyện Nghe',
      typing: 'Gõ Pinyin',
      cloze: 'Điền câu ví dụ',
    };

    return (
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white p-4">
          <button
            onClick={() => setActiveSession(null)}
            className="inline-flex items-center gap-2 text-sm font-bold text-brand transition hover:underline"
          >
            ← Quay lại Trung tâm Ôn tập
          </button>
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="rounded-full bg-brand/10 px-2.5 py-1 font-semibold text-brand">
              Chế độ: {modeLabels[activeSession.mode as PracticeMode] || activeSession.mode}
            </span>
            <span>·</span>
            <span>Đang luyện: <strong>{activeSession.words.length} từ</strong></span>
            <span>·</span>
            <span>Cấp độ: <strong>{level.name}</strong></span>
          </div>
        </div>

        <PracticeSession
          key={`${activeSession.mode}-${activeSession.words.map((w) => w.id).join('-')}`}
          words={activeSession.words}
          pool={data.words}
          initialMode={activeSession.mode as PracticeMode}
          autoStart={true}
          onComplete={() => {
            // Can show summary or return
          }}
        />
      </div>
    );
  }

  const percentMastered = Math.round((knownWords.length / Math.max(1, data.words.length)) * 100);

  return (
    <div className="space-y-8">
      {/* Overview Stats Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {/* Mistakes Card */}
        <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-red-50/50 p-5 transition hover:shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">Cần ôn lại</span>
            <AlertCircle size={18} className="text-red-500" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-600">{mistakeWords.length}</span>
            <span className="text-xs text-muted">từ hay sai</span>
          </div>
          {mistakeWords.length > 0 ? (
            <button
              onClick={() => launchPractice('pinyin', mistakeWords)}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-red-600 py-1.5 text-xs font-bold text-white shadow-2xs transition hover:bg-red-700"
            >
              <RotateCcw size={12} /> Ôn ngay
            </button>
          ) : (
            <p className="mt-3 text-[11px] text-muted">Chưa có từ nào bị sai. Rất tốt!</p>
          )}
        </div>

        {/* Bookmarked Card */}
        <div className="relative overflow-hidden rounded-2xl border border-amber-100 bg-amber-50/50 p-5 transition hover:shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Từ đã lưu</span>
            <Star size={18} className="text-amber-500 fill-amber-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-amber-700">{bookmarkWords.length}</span>
            <span className="text-xs text-muted">đã đánh dấu</span>
          </div>
          {bookmarkWords.length > 0 ? (
            <button
              onClick={() => launchPractice('pinyin', bookmarkWords)}
              className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-500 py-1.5 text-xs font-bold text-white shadow-2xs transition hover:bg-amber-600"
            >
              <Sparkles size={12} /> Luyện từ đã lưu
            </button>
          ) : (
            <p className="mt-3 text-[11px] text-muted">Bấm icon ⭐ ở từ vựng để lưu lại đây.</p>
          )}
        </div>

        {/* Mastered Card */}
        <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 transition hover:shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Đã thành thạo</span>
            <CheckCircle2 size={18} className="text-emerald-500" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-emerald-700">{knownWords.length}</span>
            <span className="text-xs text-muted">/ {data.words.length} từ</span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-[11px] text-muted mb-1">
              <span>Tiến độ</span>
              <span className="font-bold text-emerald-700">{percentMastered}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-emerald-100">
              <div
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${percentMastered}%` }}
              />
            </div>
          </div>
        </div>

        {/* Total Level Vocab */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-white p-5 transition hover:shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Tổng kho từ</span>
            <BookOpen size={18} className="text-brand" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-black text-ink">{data.words.length}</span>
            <span className="text-xs text-muted">từ chuẩn HSK 3.0</span>
          </div>
          <p className="mt-3 text-[11px] text-muted">
            Gồm {data.lessons.length} bài học từ vựng hoàn chỉnh.
          </p>
        </div>
      </div>

      {/* Review Configuration Hub */}
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Filter size={15} />
              </span>
              <h2 className="text-xl font-bold text-ink">Thiết lập Lượt ôn tập</h2>
            </div>
            <p className="mt-1 text-xs text-muted">
              Tùy chỉnh nguồn từ và số lượng từ bạn muốn kiểm tra trong phiên học này.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl bg-tint px-3.5 py-2 text-xs font-bold text-brand">
            <Flame size={15} className="text-gold" />
            <span>{eligiblePool.length} từ phù hợp trong bộ lọc</span>
          </div>
        </div>

        {/* Config Controls */}
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {/* Source Selection */}
          <div>
            <label className="block text-xs font-bold text-ink mb-2">
              1. Nguồn từ ôn tập
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'all', label: `Tất cả từ vựng (${data.words.length})`, icon: '📚' },
                {
                  id: 'mistakes',
                  label: `Từ hay làm sai (${mistakeWords.length})`,
                  icon: '❌',
                  disabled: mistakeWords.length === 0,
                },
                {
                  id: 'bookmarks',
                  label: `Từ đã đánh dấu (${bookmarkWords.length})`,
                  icon: '⭐',
                  disabled: bookmarkWords.length === 0,
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  disabled={opt.disabled}
                  onClick={() => setSource(opt.id as ReviewSource)}
                  className={`flex items-center justify-between rounded-xl border px-3.5 py-2.5 text-xs font-semibold text-left transition ${
                    source === opt.id
                      ? 'border-brand bg-tint text-brand shadow-2xs'
                      : 'border-line bg-page/50 text-muted hover:bg-page hover:text-ink disabled:opacity-35'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{opt.icon}</span>
                    <span>{opt.label}</span>
                  </span>
                  {source === opt.id && <Check size={14} className="text-brand" />}
                </button>
              ))}
            </div>
          </div>

          {/* Unit Scope */}
          <div>
            <label className="block text-xs font-bold text-ink mb-2">
              2. Phạm vi bài học
            </label>
            <select
              value={selectedUnit}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedUnit(val === 'all' ? 'all' : Number(val));
              }}
              className="w-full rounded-xl border border-line bg-white p-2.5 text-xs font-semibold text-ink outline-none focus:border-brand"
            >
              <option value="all">Tất cả {data.lessons.length} bài học</option>
              {data.lessons.map((lesson: any) => (
                <option key={lesson.id} value={lesson.number}>
                  Bài {lesson.number}: {lesson.title} ({data.words.filter((w: VocabularyWord) => w.unit === lesson.number).length} từ)
                </option>
              ))}
            </select>
            <p className="mt-2 text-[11px] text-muted leading-relaxed">
              Bạn có thể chọn riêng lẻ một bài vừa học để kiểm tra củng cố kiến thức.
            </p>
          </div>

          {/* Batch Size */}
          <div>
            <label className="block text-xs font-bold text-ink mb-2">
              3. Số lượng từ mỗi lượt
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { size: 10, label: '10 từ · Nhanh' },
                { size: 20, label: '20 từ · Tiêu chuẩn' },
                { size: 50, label: '50 từ · Thử thách' },
                { size: 'all', label: 'Tất cả từ' },
              ].map((b) => (
                <button
                  key={String(b.size)}
                  onClick={() => setBatchSize(b.size as number | 'all')}
                  className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                    batchSize === b.size
                      ? 'border-brand bg-tint text-brand'
                      : 'border-line bg-white text-muted hover:bg-page hover:text-ink'
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[11px] text-muted">
              Số từ sẽ đưa vào lượt ôn: <strong>{reviewBatch.length} từ</strong>.
            </p>
          </div>
        </div>

        {/* 4 Practice Modes Action Cards */}
        <div className="mt-8 pt-6 border-t border-line">
          <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
            Chọn chế độ ôn tập và bắt đầu:
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {/* Flashcard */}
            <button
              disabled={reviewBatch.length === 0}
              onClick={() => launchPractice('flashcard')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-orange-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Sparkles size={20} />
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-brand">Flashcard</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Lật thẻ ghi nhớ, âm thanh và ví dụ từng từ.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-700">
                Bắt đầu thẻ <ArrowRight size={12} />
              </span>
            </button>

            {/* Pinyin Choice */}
            <button
              disabled={reviewBatch.length === 0}
              onClick={() => launchPractice('pinyin')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-blue-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 font-hanzi text-lg font-bold text-blue-700">
                  拼
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-blue-600">Chọn Pinyin</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Trắc nghiệm 4 phương án nhận diện phiên âm.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-blue-700">
                Luyện Pinyin <ArrowRight size={12} />
              </span>
            </button>

            {/* Meaning Choice */}
            <button
              disabled={reviewBatch.length === 0 || !reviewBatch.some(isMeaningEligible)}
              onClick={() => launchPractice('meaning')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-emerald-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 font-hanzi text-lg font-bold text-emerald-700">
                  义
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-emerald-600">Chọn Nghĩa Việt</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Nhận diện mặt chữ Hán và đoán đúng nghĩa.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                Luyện Nghĩa <ArrowRight size={12} />
              </span>
            </button>

            {/* Listening Choice */}
            <button
              disabled={reviewBatch.length === 0}
              onClick={() => launchPractice('listening')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-purple-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-purple-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Headphones size={20} />
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-purple-600">Luyện Nghe</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Nghe phát âm chuẩn và chọn chữ Hán đúng.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-purple-700">
                Luyện Nghe <ArrowRight size={12} />
              </span>
            </button>

            {/* Typing Pinyin */}
            <button
              disabled={reviewBatch.length === 0}
              onClick={() => launchPractice('typing')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-rose-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                  <Keyboard size={20} />
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-rose-600">Gõ Pinyin</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Gõ phiên âm có dấu để khắc sâu trí nhớ.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-rose-700">
                Luyện Gõ <ArrowRight size={12} />
              </span>
            </button>

            {/* Cloze Sentence */}
            <button
              disabled={enrichedReviewBatch.length === 0 || !enrichedReviewBatch.some(isClozeEligible)}
              onClick={() => launchPractice('cloze')}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-white to-teal-50/30 p-4 text-left shadow-2xs transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-sm disabled:opacity-40"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 font-hanzi text-lg font-bold text-teal-700">
                  填
                </div>
                <h4 className="mt-3 font-bold text-sm text-ink group-hover:text-teal-600">Điền câu ví dụ</h4>
                <p className="mt-1 text-[11px] text-muted leading-relaxed">
                  Đọc ngữ cảnh câu mẫu và điền từ còn thiếu.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                Luyện Điền <ArrowRight size={12} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Word Preview List */}
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold text-ink flex items-center gap-2">
              <Layers size={18} className="text-brand" />
              <span>Danh sách từ trong lượt ôn này</span>
            </h3>
            <p className="mt-1 text-xs text-muted">
              Hiển thị {previewWords.length} / {reviewBatch.length} từ trong nhóm đã chọn.
            </p>
          </div>

          <button
            onClick={() => launchPractice('pinyin')}
            disabled={reviewBatch.length === 0}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-2xs transition hover:bg-brand-dark disabled:opacity-40"
          >
            <Play size={13} /> Bắt đầu ôn toàn bộ {reviewBatch.length} từ
          </button>
        </div>

        {previewWords.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {previewWords.map((word) => {
              const isWrong = progress.mistakes.includes(word.id);
              const isSaved = progress.bookmarks.includes(word.id);
              const isKnown = progress.known.includes(word.id);

              return (
                <div
                  key={word.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-line bg-page/30 p-4 transition hover:border-brand/40 hover:bg-white hover:shadow-xs"
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-hanzi text-2xl font-bold text-ink">
                        {word.hanzi}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => handlePlayAudio(e, word)}
                          aria-label="Phát âm"
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-muted hover:bg-tint hover:text-brand transition"
                        >
                          <Volume2 size={15} className={playingId === word.id ? 'animate-pulse text-brand' : ''} />
                        </button>
                        <button
                          onClick={() => toggleBookmark(word.id)}
                          aria-label="Lưu từ"
                          className="flex h-7 w-7 items-center justify-center rounded-lg text-muted hover:bg-tint hover:text-amber-500 transition"
                        >
                          <Bookmark
                            size={15}
                            className={isSaved ? 'fill-amber-400 text-amber-500' : ''}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="mt-1 flex items-baseline gap-2">
                      <span className="text-xs font-bold text-brand">{word.pinyin}</span>
                      {word.sinoVietnamese && (
                        <span className="text-[10px] text-muted">[{word.sinoVietnamese}]</span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-muted line-clamp-2">
                      {word.meaning || word.definitions?.join(', ') || 'Đang cập nhật'}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-line/60 flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5">
                      {isWrong && (
                        <span className="inline-flex items-center gap-0.5 rounded-md bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-700">
                          Hay sai
                        </span>
                      )}
                      {isKnown && (
                        <span className="inline-flex items-center gap-0.5 rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                          Đã nhớ
                        </span>
                      )}
                      {!isWrong && !isKnown && (
                        <span className="text-muted">Chưa ôn</span>
                      )}
                    </div>

                    <button
                      onClick={() => setStrokeWord(word)}
                      className="text-[11px] font-semibold text-muted hover:text-brand transition"
                    >
                      Tập viết →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center text-muted">
            <p className="text-sm">Không có từ vựng nào phù hợp với bộ lọc hiện tại.</p>
          </div>
        )}
      </div>

      {/* Modals */}
      <FlashcardModal
        isOpen={flashcardOpen}
        onClose={() => setFlashcardOpen(false)}
        words={reviewBatch}
        title={`Flashcard ${level.name} (${reviewBatch.length} từ)`}
      />

      <HanziStrokeModal
        word={strokeWord}
        isOpen={Boolean(strokeWord)}
        onClose={() => setStrokeWord(null)}
      />
    </div>
  );
};
