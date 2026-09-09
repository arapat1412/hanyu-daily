import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Layers,
  ChevronRight,
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowRight,
  Headphones,
  PenTool,
  Award,
  BookMarked,
  Info
} from 'lucide-react';
import {
  BOYA1_UNITS,
  BOYA1_LESSONS,
  BOYA1_VOCABULARY,
  BOYA1_STATS
} from '../data/boya1Data';
import {
  BOYA2_UNITS,
  BOYA2_LESSONS,
  BOYA2_VOCABULARY,
  BOYA2_STATS
} from '../data/boya2Data';
import { useProgress } from '../lib/hsk';
import { FlashcardModal } from '../components/FlashcardModal';

export const BoyaHubPage: React.FC = () => {
  const navigate = useNavigate();
  const progress = useProgress();
  const [flashcardOpen, setFlashcardOpen] = useState(false);
  const [flashcardBook, setFlashcardBook] = useState<'so-cap-1' | 'so-cap-2'>('so-cap-1');

  // Số từ đã lưu trong Boya (tổng hợp cả Boya 1 & 2)
  const boyaBookmarkCount = useMemo(() => {
    const b1 = BOYA1_VOCABULARY.filter(w => progress.bookmarks.includes(w.id)).length;
    const b2 = BOYA2_VOCABULARY.filter(w => progress.bookmarks.includes(w.id)).length;
    return b1 + b2;
  }, [progress.bookmarks]);

  // Danh sách các tập trong bộ giáo trình Boya
  const boyaSeries = [
    {
      id: 'so-cap-1',
      title: 'Boya Sơ cấp 1',
      titleZh: '博雅汉语 · 初级起步篇 I',
      edition: 'Tập 1 — Phiên bản 2',
      levelBadge: 'Sơ cấp (A1 - A2)',
      targetHsk: 'HSK 1 – 2',
      lessonsCount: 30,
      unitsCount: 6,
      wordsCount: BOYA1_STATS.totalWords,
      status: 'ready',
      coverImage: '/boyasocap1.png',
      description: 'Giáo trình mở đầu chuẩn xác, rèn luyện phát âm pinyin, ngữ pháp cơ bản và 678 từ vựng đàm thoại đời sống.',
      highlights: ['30 bài học thực tế', '6 đơn nguyên hoàn chỉnh', 'Audio phát âm chuẩn', 'Bút thuận từng chữ'],
      link: '/boya/so-cap-1'
    },
    {
      id: 'so-cap-2',
      title: 'Boya Sơ cấp 2',
      titleZh: '博雅汉语 · 初级起步篇 II',
      edition: 'Tập 2 — Phiên bản 2',
      levelBadge: 'Sơ cấp nâng cao (A2+)',
      targetHsk: 'HSK 2 – 3',
      lessonsCount: 25,
      unitsCount: 5,
      wordsCount: BOYA2_STATS.totalWords,
      status: 'ready',
      coverImage: '/boyasocap2.png',
      description: 'Tiếp nối tập 1, mở rộng trường từ vựng giao tiếp thực tế và các mẫu câu phức trong đời sống hàng ngày.',
      highlights: ['25 bài học nâng cao', '864 từ vựng đàm thoại', 'Audio phát âm chuẩn & Ví dụ', 'Luyện Flashcard & Trắc nghiệm'],
      link: '/boya/so-cap-2'
    },
    {
      id: 'chuan-trung-cap-1',
      title: 'Boya Trung cấp 1',
      titleZh: '博雅汉语 · 准中级加速篇 I',
      edition: 'Tập 1 — Phiên bản 2',
      levelBadge: 'Tiền trung cấp (B1)',
      targetHsk: 'HSK 3 – 4',
      lessonsCount: 20,
      unitsCount: 4,
      wordsCount: 550,
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      coverImage: '/boyatrungcap1.png',
      description: 'Tăng tốc khả năng đọc hiểu và diễn đạt đoạn văn ngắn, phân tích ngữ pháp liên kết câu.',
      highlights: ['Tăng tốc từ vựng', 'Đọc hiểu đoạn văn', 'Ngữ pháp liên kết', 'Phản xạ giao tiếp']
    },
    {
      id: 'chuan-trung-cap-2',
      title: 'Boya Trung cấp 2',
      titleZh: '博雅汉语 · 中级冲刺篇',
      edition: 'Tập 2 — Phiên bản 2',
      levelBadge: 'Trung cấp (B1+)',
      targetHsk: 'HSK 4',
      lessonsCount: 20,
      unitsCount: 4,
      wordsCount: 600,
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      coverImage: '/boyatrungcap2.png',
      description: 'Làm chủ kỹ năng thảo luận, đọc bài văn ngắn và hiểu sâu về bối cảnh văn hóa Trung Hoa.',
      highlights: ['Chủ đề văn hóa', 'Kỹ năng thảo luận', 'Từ vựng trung cấp', 'Chuẩn bị HSK 4']
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FA] pb-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 pt-6">

        {/* Navigation Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-xs font-medium text-ink-2">
          <Link to="/" className="hover:text-brand transition-colors no-underline">Trang chủ</Link>
          <span>/</span>
          <span className="text-ink font-semibold">Giáo trình Boya</span>
        </div>

        {/* Hero Header Banner */}
        <header className="relative mb-8 overflow-hidden rounded-[26px] bg-gradient-to-br from-[#1B3B4B] via-[#245369] to-[#2D6682] px-6 py-8 text-white shadow-md sm:px-10 sm:py-10">
          {/* Chinese watermark background */}
          <span className="pointer-events-none absolute -right-6 -bottom-10 select-none font-hanzi text-[180px] font-black text-white/5 sm:text-[230px]">
            博雅
          </span>

          <div className="relative z-10 max-w-[760px]">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-xs">
              <span>📚</span>
              <span>博雅汉语系列教材 · PEKING UNIVERSITY PRESS</span>
            </div>
            <h1 className="text-2xl sm:text-[36px] font-black tracking-tight leading-tight">
              Tủ Sách Giáo Trình Hán Ngữ Boya
            </h1>
            <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-white/85">
              Bộ giáo trình Hán ngữ kinh điển do Đại học Bắc Kinh biên soạn, phân cấp khoa học từ Sơ cấp đến Cao cấp. 
              Trọn vẹn từ vựng chuẩn, tra cứu bút thuận, phát âm audio bản xứ và bộ công cụ ôn luyện tương tác.
            </p>

            {/* Quick stats pills */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/12 px-3 py-1.5 border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Boya Sơ cấp 1: <strong>{BOYA1_STATS.totalLessons} bài ({BOYA1_STATS.totalWords} từ)</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/12 px-3 py-1.5 border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Boya Sơ cấp 2: <strong>{BOYA2_STATS.totalLessons} bài ({BOYA2_STATS.totalWords} từ)</strong></span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/12 px-3 py-1.5 border border-white/10 backdrop-blur-xs">
                <BookMarked className="h-4 w-4 text-amber-300" />
                <span>Tổng cộng: <strong>{BOYA1_STATS.totalWords + BOYA2_STATS.totalWords}</strong> từ vựng chuẩn</span>
              </span>
              {boyaBookmarkCount > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400/20 px-3 py-1.5 border border-amber-300/30 text-amber-200">
                  <Bookmark className="h-4 w-4 fill-amber-300 text-amber-300" />
                  <span>Đã lưu <strong>{boyaBookmarkCount}</strong> từ</span>
                </span>
              )}
            </div>
          </div>
        </header>

        {/* ========================================================================= */}
        {/* BOYA SERIES BOOKS GRID (TỦ SÁCH GIÁO TRÌNH BOYA) */}
        {/* ========================================================================= */}
        <section className="mb-12">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-ink flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand text-white text-sm">📚</span>
                <span>Tủ Sách Giáo Trình Hán Ngữ Boya</span>
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted">
                Hệ thống hóa toàn bộ các cấp độ trong bộ sách Boya của Đại học Bắc Kinh. Chọn sách để bắt đầu học.
              </p>
            </div>
            <span className="self-start sm:self-auto rounded-full bg-tint px-3 py-1 text-xs font-bold text-brand border border-line">
              4 Cấp độ · 9 Tập
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boyaSeries.map(book => {
              const isReady = book.status === 'ready';
              return (
                <div
                  key={book.id}
                  className={`flex flex-col justify-between rounded-[22px] border p-5 transition-all ${
                    isReady
                      ? 'border-brand/40 bg-white shadow-md hover:shadow-xl hover:border-brand'
                      : 'border-line bg-white/70 opacity-90'
                  }`}
                >
                  <div>
                    {/* Book Cover Container */}
                    {book.coverImage ? (
                      isReady ? (
                        <Link
                          to={book.link || "/boya/so-cap-1"}
                          className="group/cover block relative mb-4 overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-black/10 bg-[#F4F6F8] aspect-[3/4]"
                          title={`Mở ${book.title}`}
                        >
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-300 block"
                          />
                          {/* Realistic 3D spine shadow */}
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                          {/* Overlay Ready Pill */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-center">
                            <span className="rounded-full bg-emerald-600/95 text-white text-[11px] font-bold px-3 py-1 shadow-sm backdrop-blur-xs flex items-center gap-1.5">
                              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                              <span>Sẵn sàng học</span>
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="group/cover relative mb-4 overflow-hidden rounded-2xl shadow-md transition-all duration-300 ring-1 ring-black/10 bg-[#F4F6F8] aspect-[3/4]"
                          title={book.title}
                        >
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-300 block filter contrast-[0.97]"
                          />
                          {/* Realistic 3D spine shadow */}
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                          {/* Overlay Status Pill */}
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex justify-center">
                            <span className="rounded-full bg-slate-900/85 text-white text-[11px] font-bold px-3 py-1 shadow-sm backdrop-blur-xs flex items-center gap-1.5 border border-white/15">
                              <Clock className="h-3 w-3 text-amber-300" />
                              <span>{book.badgeText || 'Đang cập nhật'}</span>
                            </span>
                          </div>
                        </div>
                      )
                    ) : (
                      <div className="relative mb-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1B3B4B]/5 via-[#245369]/10 to-amber-500/10 border border-line aspect-[3/4] flex flex-col items-center justify-center p-4 text-center">
                        <span className="font-hanzi text-6xl font-black text-brand/15 select-none mb-2">博雅</span>
                        <div className="font-bold text-sm text-ink">{book.title}</div>
                        <div className="font-hanzi text-xs text-muted mt-0.5">{book.titleZh}</div>
                        <span className="mt-3 rounded-full bg-amber-100 text-[#8A5F0C] text-[10.5px] font-bold px-2.5 py-0.5">
                          {book.badgeText}
                        </span>
                      </div>
                    )}

                    {/* Level Badge & Status */}
                    <div className="mb-2.5 flex items-center justify-between gap-1">
                      <span className="rounded-md bg-tint px-2 py-0.5 text-[10.5px] font-bold text-brand">
                        {book.levelBadge}
                      </span>
                      {isReady ? (
                        <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5">
                          ✓ ĐÃ CÓ ({book.wordsCount} từ)
                        </span>
                      ) : (
                        <span className="rounded-full bg-amber-100 text-[#8A5F0C] text-[10px] font-bold px-2 py-0.5">
                          {book.badgeText}
                        </span>
                      )}
                    </div>

                    {/* Book Title */}
                    <h3 className="text-base sm:text-lg font-black text-ink tracking-tight">
                      {isReady ? (
                        <Link
                          to={book.link || "/boya/so-cap-1"}
                          className="no-underline text-ink hover:text-brand transition-colors"
                        >
                          {book.title}
                        </Link>
                      ) : (
                        book.title
                      )}
                    </h3>
                    <div className="font-hanzi text-xs font-bold text-muted mt-0.5">
                      {book.titleZh}
                    </div>

                    <p className="mt-2 text-xs text-muted leading-relaxed line-clamp-3">
                      {book.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-3.5 space-y-1">
                      {book.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-ink-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-5 pt-3 border-t border-line/60">
                    {isReady ? (
                      <div className="flex flex-col gap-2">
                        <Link
                          to={book.link || "/boya/so-cap-1"}
                          className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand hover:bg-brand-dark px-4 py-2.5 text-xs font-bold text-white transition-all shadow-xs hover:scale-[1.02] active:scale-98 no-underline cursor-pointer"
                        >
                          <span>Vào học ngay</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <div className="grid grid-cols-2 gap-1.5">
                          <button
                            onClick={() => {
                              setFlashcardBook(book.id as any);
                              setFlashcardOpen(true);
                            }}
                            className="inline-flex items-center justify-center gap-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 px-2 py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
                          >
                            <Sparkles className="h-3 w-3" />
                            <span>Flashcard</span>
                          </button>
                          <Link
                            to={`${book.link || "/boya/so-cap-1"}?action=practice`}
                            className="inline-flex items-center justify-center gap-1 rounded-lg bg-page hover:bg-tint/60 text-ink-2 border border-line px-2 py-1.5 text-[11px] font-bold transition-colors no-underline cursor-pointer"
                          >
                            <GraduationCap className="h-3 w-3" />
                            <span>Trắc nghiệm</span>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <button
                        disabled
                        className="w-full inline-flex items-center justify-center rounded-xl bg-gray-100 px-3 py-2.5 text-xs font-semibold text-muted cursor-not-allowed"
                      >
                        Đang biên soạn dữ liệu
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOYA LEARNING TIPS & FEATURES */}
        {/* ========================================================================= */}
        <section className="rounded-2xl border border-line bg-white p-6 sm:p-8">
          <h3 className="text-base font-bold text-ink flex items-center gap-2 mb-4">
            <Info className="h-4 w-4 text-brand" />
            <span>Phương pháp học Giáo trình Hán ngữ Boya hiệu quả trên Hanyu Daily</span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-3 text-xs leading-relaxed text-ink-2">
            <div className="rounded-xl bg-page p-4 border border-line/60">
              <div className="flex items-center gap-2 font-bold text-brand mb-1.5 text-sm">
                <Headphones className="h-4 w-4" />
                <span>1. Luyện nghe & Phát âm</span>
              </div>
              <p className="text-muted">
                Mỗi từ vựng và câu ví dụ đều tích hợp nút phát âm bản xứ chuẩn. Hãy nghe và lặp lại theo nhịp điệu để nắm chắc thanh điệu.
              </p>
            </div>
            <div className="rounded-xl bg-page p-4 border border-line/60">
              <div className="flex items-center gap-2 font-bold text-brand mb-1.5 text-sm">
                <PenTool className="h-4 w-4" />
                <span>2. Bút thuận Chữ Hán</span>
              </div>
              <p className="text-muted">
                Tra cứu thứ tự các nét viết động của từng chữ Hán trong bài học, giúp bạn viết chữ đúng quy tắc và ghi nhớ mặt chữ lâu dài.
              </p>
            </div>
            <div className="rounded-xl bg-page p-4 border border-line/60">
              <div className="flex items-center gap-2 font-bold text-brand mb-1.5 text-sm">
                <Sparkles className="h-4 w-4" />
                <span>3. Flashcard & Trắc nghiệm</span>
              </div>
              <p className="text-muted">
                Củng cố trí nhớ với chế độ lật thẻ Flashcard thông minh và làm bài tập trắc nghiệm chọn nghĩa, pinyin để kiểm tra độ nhớ từ.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Flashcard Modal from Hub */}
      <FlashcardModal
        isOpen={flashcardOpen}
        onClose={() => setFlashcardOpen(false)}
        words={flashcardBook === 'so-cap-2' ? BOYA2_VOCABULARY : BOYA1_VOCABULARY}
        title={flashcardBook === 'so-cap-2' ? "Flashcard: Giáo trình Boya Sơ cấp 2" : "Flashcard: Giáo trình Boya Sơ cấp 1"}
      />
    </div>
  );
};
export default BoyaHubPage;
