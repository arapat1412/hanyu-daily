import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  GraduationCap,
  Layers,
  Bookmark,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Headphones,
  PenTool,
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
      edition: 'Tập 1 — ĐH Bắc Kinh',
      levelBadge: 'Sơ cấp (A1 - A2)',
      targetHsk: 'HSK 1 – 2',
      lessonsCount: 30,
      unitsCount: 6,
      wordsCount: BOYA1_STATS.totalWords,
      status: 'ready',
      coverImage: '/boyasocap1.png',
      description: 'Nền tảng mở đầu chuẩn xác: phát âm Pinyin chuẩn, ngữ pháp căn bản và 678 từ vựng giao tiếp thực tế.',
      highlights: ['30 bài học · 6 đơn nguyên', '678 từ vựng kèm audio', 'Bút thuận từng nét chữ'],
      link: '/boya/so-cap-1',
      cardBg: 'bg-gradient-to-br from-white via-sky-50/40 to-sky-100/50',
      cardBorder: 'border-sky-200/90 hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/10',
      badgeBg: 'bg-sky-600 text-white',
      btnHover: 'group-hover:bg-sky-600',
      hanzi: '博',
      hanziColor: 'text-sky-600/15',
    },
    {
      id: 'so-cap-2',
      title: 'Boya Sơ cấp 2',
      titleZh: '博雅汉语 · 初级起步篇 II',
      edition: 'Tập 2 — ĐH Bắc Kinh',
      levelBadge: 'Sơ cấp nâng cao (A2+)',
      targetHsk: 'HSK 2 – 3',
      lessonsCount: 25,
      unitsCount: 5,
      wordsCount: BOYA2_STATS.totalWords,
      status: 'ready',
      coverImage: '/boyasocap2.png',
      description: 'Mở rộng vốn từ vựng đàm thoại đời sống, nâng cấp câu ghép và phản xạ giao tiếp tự nhiên.',
      highlights: ['25 bài học · 5 đơn nguyên', '864 từ vựng đàm thoại', 'Luyện Flashcard & Trắc nghiệm'],
      link: '/boya/so-cap-2',
      cardBg: 'bg-gradient-to-br from-white via-pink-50/40 to-pink-100/50',
      cardBorder: 'border-pink-200/90 hover:border-pink-400 hover:shadow-md hover:shadow-pink-500/10',
      badgeBg: 'bg-pink-600 text-white',
      btnHover: 'group-hover:bg-pink-600',
      hanzi: '雅',
      hanziColor: 'text-pink-600/15',
    },
    {
      id: 'chuan-trung-cap-1',
      title: 'Boya Trung cấp 1',
      titleZh: '博雅汉语 · 准中级加速篇 I',
      edition: 'Tập 1 — ĐH Bắc Kinh',
      levelBadge: 'Tiền trung cấp (B1)',
      targetHsk: 'HSK 3 – 4',
      lessonsCount: 20,
      unitsCount: 4,
      wordsCount: 550,
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      coverImage: '/boyatrungcap1.png',
      description: 'Tăng tốc khả năng đọc hiểu và diễn đạt đoạn văn ngắn, phân tích cấu trúc liên kết câu.',
      highlights: ['Tăng tốc từ vựng', 'Đọc hiểu đoạn văn', 'Ngữ pháp liên kết'],
      cardBg: 'bg-gradient-to-br from-white via-amber-50/30 to-amber-100/40',
      cardBorder: 'border-amber-200/80',
      badgeBg: 'bg-amber-600 text-white',
      btnHover: 'group-hover:bg-amber-600',
      hanzi: '汉',
      hanziColor: 'text-amber-600/15',
    },
    {
      id: 'chuan-trung-cap-2',
      title: 'Boya Trung cấp 2',
      titleZh: '博雅汉语 · 中级冲刺篇',
      edition: 'Tập 2 — ĐH Bắc Kinh',
      levelBadge: 'Trung cấp (B1+)',
      targetHsk: 'HSK 4',
      lessonsCount: 20,
      unitsCount: 4,
      wordsCount: 600,
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      coverImage: '/boyatrungcap2.png',
      description: 'Làm chủ kỹ năng thảo luận, đọc hiểu bài văn ngắn và đào sâu ngữ cảnh văn hóa Trung Hoa.',
      highlights: ['Chủ đề văn hóa', 'Kỹ năng thảo luận', 'Từ vựng chuyên sâu'],
      cardBg: 'bg-gradient-to-br from-white via-purple-50/30 to-purple-100/40',
      cardBorder: 'border-purple-200/80',
      badgeBg: 'bg-purple-600 text-white',
      btnHover: 'group-hover:bg-purple-600',
      hanzi: '语',
      hanziColor: 'text-purple-600/15',
    }
  ];

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">

        {/* Nút quay lại trang chủ */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors mb-5 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Trang chủ</span>
        </Link>

        {/* 1. Header Banner phong cách Luminous Gradient đậm đà & có chiều sâu */}
        <header 
          className="relative mb-8 overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-lg shadow-sky-950/10 border border-sky-400/30"
          style={{
            background: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 30%, #38BDF8 58%, #F472B6 100%)'
          }}
        >
          {/* Ambient glow orbs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold mb-3 backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-200" />
                <span>博雅汉语 · Giáo Trình Chuẩn Đại Học Bắc Kinh</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-snug drop-shadow-xs">
                Tủ Sách Hán Ngữ Boya
              </h1>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                Bộ giáo trình Hán ngữ kinh điển phân cấp khoa học từ Sơ cấp đến Trung cấp — từ vựng chuẩn hóa, audio phát âm bản xứ và bài tập tương tác.
              </p>
            </div>

            {/* 2 Thẻ chỉ số nổi kính mờ sang trọng */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-sky-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    {(BOYA1_STATS.totalWords + BOYA2_STATS.totalWords).toLocaleString("vi-VN")}
                  </div>
                  <div className="text-[11px] text-white/85 font-semibold mt-1">
                    Từ vựng Sơ cấp
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-sky-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    {BOYA1_STATS.totalLessons + BOYA2_STATS.totalLessons} bài
                  </div>
                  <div className="text-[11px] text-white/85 font-semibold mt-1">
                    11 Đơn nguyên
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Thanh thông báo gọn gàng, súc tích */}
        <div className="mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">Dữ liệu Boya Sơ cấp 1 & 2 đã hoàn tất số hóa</span>
            <span className="text-slate-300">|</span>
            <span>Phát âm bản xứ · Bút thuận từng nét · Flashcard thông minh</span>
          </div>
          <span className="font-medium text-slate-400">
            {boyaBookmarkCount > 0 ? `Đã lưu ${boyaBookmarkCount} từ trong sổ tay` : 'Bấm chọn sách bên dưới để vào học'}
          </span>
        </div>

        {/* 3. Lưới các tập sách Boya (博雅汉语) */}
        <section className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-5 pb-2.5 border-b border-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Bộ Giáo Trình Boya Toàn Tập
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700">
                4 Cấp độ · 9 Tập
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Sơ cấp 1 & Sơ cấp 2 sẵn sàng học ngay
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {boyaSeries.map(book => {
              const isReady = book.status === 'ready';

              return (
                <div
                  key={book.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4.5 border transition-all ${book.cardBg} ${book.cardBorder} shadow-xs hover:shadow-md hover:-translate-y-0.5`}
                >
                  {/* Chữ Hán mờ đại diện đằng sau: 博 - 雅 - 汉 - 语 */}
                  <span 
                    aria-hidden="true" 
                    className={`pointer-events-none absolute -right-2 -bottom-3 select-none font-serif text-[100px] sm:text-[110px] font-black leading-none transition-transform duration-300 group-hover:scale-105 ${book.hanziColor}`}
                  >
                    {book.hanzi}
                  </span>

                  {/* Nội dung nổi bên trên chữ mờ */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Bìa sách 3D sang trọng */}
                      {isReady ? (
                        <Link
                          to={book.link || "/boya/so-cap-1"}
                          className="group/cover block relative mb-3.5 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-slate-900/10 bg-slate-100 aspect-[3/4] max-h-52 mx-auto"
                          title={`Mở ${book.title}`}
                        >
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover/cover:scale-105 transition-transform duration-300 block"
                          />
                          {/* Gáy sách hiệu ứng 3D */}
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                          {/* Chip sẵn sàng */}
                          <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                            <span className="rounded-full bg-emerald-600/95 text-white text-[10.5px] font-bold px-2.5 py-0.5 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                              <span>Sẵn sàng học</span>
                            </span>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="relative mb-3.5 overflow-hidden rounded-xl shadow-xs ring-1 ring-slate-900/10 bg-slate-100 aspect-[3/4] max-h-52 mx-auto opacity-80"
                          title={book.title}
                        >
                          <img
                            src={book.coverImage}
                            alt={book.title}
                            className="w-full h-full object-cover block filter contrast-[0.95]"
                          />
                          {/* Gáy sách hiệu ứng 3D */}
                          <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                          {/* Chip đang biên soạn */}
                          <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                            <span className="rounded-full bg-slate-900/80 text-white text-[10.5px] font-bold px-2.5 py-0.5 shadow-xs backdrop-blur-xs flex items-center gap-1.5 border border-white/15">
                              <Clock className="h-3 w-3 text-amber-300" />
                              <span>Sắp ra mắt</span>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Header thẻ: Badge cấp độ + Tag */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span className={`inline-flex items-center justify-center font-display text-xs font-black px-2.5 py-0.5 rounded-lg shadow-xs tracking-wide ${book.badgeBg}`}>
                          {book.title}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {book.targetHsk}
                        </span>
                      </div>

                      {/* Tên chữ Hán & phân cấp */}
                      <div className="font-hanzi text-xs font-bold text-slate-500 mb-1.5">
                        {book.titleZh}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                        {book.description}
                      </p>

                      {/* Điểm nhấn nổi bật */}
                      <div className="space-y-1 mb-3">
                        {book.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer thẻ: Nút hành động */}
                    <div className="pt-3 border-t border-slate-200/80">
                      {isReady ? (
                        <div className="flex flex-col gap-2">
                          <Link
                            to={book.link || "/boya/so-cap-1"}
                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-800 hover:bg-sky-600 text-white font-bold text-xs py-2 px-3.5 shadow-xs transition-all cursor-pointer group-hover:bg-sky-600"
                          >
                            <span>Vào học ngay</span>
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                          <div className="grid grid-cols-2 gap-1.5">
                            <button
                              onClick={() => {
                                setFlashcardBook(book.id as any);
                                setFlashcardOpen(true);
                              }}
                              className="inline-flex items-center justify-center gap-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <Sparkles className="h-3 w-3" />
                              <span>Flashcard</span>
                            </button>
                            <Link
                              to={`${book.link || "/boya/so-cap-1"}?action=practice`}
                              className="inline-flex items-center justify-center gap-1 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 py-1.5 text-[11px] font-bold transition-colors cursor-pointer"
                            >
                              <GraduationCap className="h-3 w-3" />
                              <span>Trắc nghiệm</span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full text-center py-2 px-3 rounded-xl bg-slate-100 border border-slate-200/70 text-slate-400 text-xs font-semibold select-none">
                          Đang biên soạn dữ liệu
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Hướng dẫn phương pháp học Boya tinh gọn & hiện đại */}
        <section className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-slate-200">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Phương pháp học Boya tối ưu trên Hanyu Daily
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 text-xs leading-relaxed">
            <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-200/70">
              <div className="flex items-center gap-2 font-bold text-sky-700 mb-1.5 text-sm">
                <Headphones className="h-4 w-4" />
                <span>1. Luyện nghe & Phát âm</span>
              </div>
              <p className="text-slate-500">
                Phát âm audio bản xứ chuẩn cho từng từ vựng và câu mẫu — nghe, nhại giọng và chuẩn hóa thanh điệu.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-200/70">
              <div className="flex items-center gap-2 font-bold text-pink-700 mb-1.5 text-sm">
                <PenTool className="h-4 w-4" />
                <span>2. Bút thuận Chữ Hán</span>
              </div>
              <p className="text-slate-500">
                Tra cứu chuyển động nét viết sinh động theo thứ tự quy chuẩn, nhớ lâu mặt chữ và viết chuẩn tay.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50/80 p-4 border border-slate-200/70">
              <div className="flex items-center gap-2 font-bold text-emerald-700 mb-1.5 text-sm">
                <Sparkles className="h-4 w-4" />
                <span>3. Flashcard & Trắc nghiệm</span>
              </div>
              <p className="text-slate-500">
                Lật thẻ thông minh và trắc nghiệm phản xạ giúp củng cố vốn từ nhanh chóng, không lo quên bài.
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
