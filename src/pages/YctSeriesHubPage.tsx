import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Download,
  BookOpen,
  Trophy,
  Layers,
  Star,
  Gamepad2,
  FileText,
  HelpCircle,
  ExternalLink,
} from 'lucide-react';
import { getYctProgress, YCT1_WORDS, YCT_PDF_RESOURCES } from '../data/yct1Data';

export interface YctBookItem {
  id: string;
  level: number;
  title: string;
  titleZh: string;
  edition: string;
  levelBadge: string;
  targetAge: string;
  wordsCount: number;
  lessonsCount: string;
  status: 'ready' | 'upcoming';
  badgeText?: string;
  description: string;
  highlights: string[];
  link?: string;
  cardBg: string;
  cardBorder: string;
  badgeBg: string;
  accentColor: string;
  btnHover: string;
  hanzi: string;
  hanziColor: string;
  coverGradient: string;
  textbookUrl?: string;
  workbookUrl?: string;
}

export const YctSeriesHubPage: React.FC = () => {
  const yctProgress = useMemo(() => getYctProgress(), []);

  // Danh sách 6 quyển trong bộ giáo trình chuẩn YCT (Youth Chinese Test)
  const yctSeries: YctBookItem[] = [
    {
      id: 'yct-1',
      level: 1,
      title: 'YCT Cấp 1',
      titleZh: 'YCT 标准教程 1',
      edition: 'Tập 1 — Khởi đầu',
      levelBadge: 'Khởi đầu (A1)',
      targetAge: 'Trẻ 6–10 tuổi',
      wordsCount: 80,
      lessonsCount: '12 bài học · 8 chủ đề',
      status: 'ready',
      description: 'Làm quen tiếng Trung qua tranh vẽ hoạt hình, 80 từ vựng cốt lõi, flashcard phát âm chuẩn và trò chơi nối từ.',
      highlights: [
        '80 từ vựng hoạt hình kèm audio',
        'Luyện Flashcard & Tập viết chữ Hán',
        'Trò chơi nối từ 30s & Đố vui có thưởng',
        'Trọn bộ PDF Sách bài học & bài tập',
      ],
      link: '/yct/1',
      cardBg: 'bg-gradient-to-br from-white via-amber-50/40 to-orange-100/50',
      cardBorder: 'border-amber-200/90 hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/10',
      badgeBg: 'bg-amber-600 text-white',
      accentColor: 'text-amber-700',
      btnHover: 'group-hover:bg-amber-600',
      hanzi: '幼',
      hanziColor: 'text-amber-600/15',
      coverGradient: 'from-amber-400 via-orange-500 to-rose-500',
      textbookUrl: YCT_PDF_RESOURCES[0]?.textbookUrl,
      workbookUrl: YCT_PDF_RESOURCES[0]?.workbookUrl,
    },
    {
      id: 'yct-2',
      level: 2,
      title: 'YCT Cấp 2',
      titleZh: 'YCT 标准教程 2',
      edition: 'Tập 2 — Sơ cấp',
      levelBadge: 'Sơ cấp (A1+)',
      targetAge: 'Trẻ 7–11 tuổi',
      wordsCount: 150,
      lessonsCount: '12 bài học · Nghe hiểu',
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      description: 'Mở rộng lên 150 từ vựng, rèn luyện kỹ năng nghe hiểu câu ngắn và miêu tả tranh sinh động hàng ngày.',
      highlights: [
        '150 từ vựng & mẫu câu đàm thoại',
        'Miêu tả tranh ảnh sinh động & nghe hiểu',
        'Đã có sẵn PDF Sách học & bài tập chuẩn',
      ],
      cardBg: 'bg-gradient-to-br from-white via-emerald-50/40 to-teal-100/50',
      cardBorder: 'border-emerald-200/90 hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/10',
      badgeBg: 'bg-emerald-600 text-white',
      accentColor: 'text-emerald-700',
      btnHover: 'group-hover:bg-emerald-600',
      hanzi: '童',
      hanziColor: 'text-emerald-600/15',
      coverGradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      textbookUrl: YCT_PDF_RESOURCES[1]?.textbookUrl,
      workbookUrl: YCT_PDF_RESOURCES[1]?.workbookUrl,
    },
    {
      id: 'yct-3',
      level: 3,
      title: 'YCT Cấp 3',
      titleZh: 'YCT 标准教程 3',
      edition: 'Tập 3 — Tiền trung cấp',
      levelBadge: 'Tiền trung cấp (A2)',
      targetAge: 'Trẻ 8–12 tuổi',
      wordsCount: 300,
      lessonsCount: '12 bài học · Giao tiếp',
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      description: 'Tích lũy 300 từ vựng, tự tin giao tiếp chủ đề đời sống học đường, thầy cô, bạn bè và sinh hoạt gia đình.',
      highlights: [
        '300 từ vựng & cấu trúc ngữ pháp mở rộng',
        'Giao tiếp tự nhiên môi trường học đường',
        'Đã có sẵn PDF Sách học & bài tập chuẩn',
      ],
      cardBg: 'bg-gradient-to-br from-white via-sky-50/40 to-blue-100/50',
      cardBorder: 'border-sky-200/90 hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/10',
      badgeBg: 'bg-sky-600 text-white',
      accentColor: 'text-sky-700',
      btnHover: 'group-hover:bg-sky-600',
      hanzi: '学',
      hanziColor: 'text-sky-600/15',
      coverGradient: 'from-sky-400 via-blue-500 to-indigo-600',
      textbookUrl: YCT_PDF_RESOURCES[2]?.textbookUrl,
      workbookUrl: YCT_PDF_RESOURCES[2]?.workbookUrl,
    },
    {
      id: 'yct-4',
      level: 4,
      title: 'YCT Cấp 4',
      titleZh: 'YCT 标准教程 4',
      edition: 'Tập 4 — Trung cấp',
      levelBadge: 'Trung cấp (B1)',
      targetAge: 'Trẻ 9–14 tuổi',
      wordsCount: 600,
      lessonsCount: '12 bài học · Chuyên sâu',
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      description: 'Đạt mốc 600 từ vựng cao nhất bậc YCT, tự tin giao tiếp thành thạo và chuẩn bị điều kiện du học ngắn hạn.',
      highlights: [
        '600 từ vựng & mẫu câu phức hợp',
        'Tự tin giao tiếp và diễn đạt ý tưởng',
        'Đã có sẵn PDF Sách học & bài tập chuẩn',
      ],
      cardBg: 'bg-gradient-to-br from-white via-purple-50/40 to-violet-100/50',
      cardBorder: 'border-purple-200/90 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/10',
      badgeBg: 'bg-purple-600 text-white',
      accentColor: 'text-purple-700',
      btnHover: 'group-hover:bg-purple-600',
      hanzi: '语',
      hanziColor: 'text-purple-600/15',
      coverGradient: 'from-purple-400 via-violet-500 to-fuchsia-600',
      textbookUrl: YCT_PDF_RESOURCES[3]?.textbookUrl,
      workbookUrl: YCT_PDF_RESOURCES[3]?.workbookUrl,
    },
    {
      id: 'yct-5',
      level: 5,
      title: 'YCT Cấp 5',
      titleZh: 'YCT 标准教程 5',
      edition: 'Tập 5 — Nâng cao',
      levelBadge: 'Trung cấp nâng cao (B1+)',
      targetAge: 'Trẻ 10–15 tuổi',
      wordsCount: 800,
      lessonsCount: 'Đang biên soạn',
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      description: 'Nâng cao khả năng đọc hiểu các mẩu chuyện ngắn, bài luận thiếu nhi và phát triển tư duy ngôn ngữ phản biện.',
      highlights: [
        'Đọc hiểu đoạn văn & viết câu hoàn chỉnh',
        'Phát triển tư duy ngôn ngữ độc lập',
        'Chuẩn bị kiến thức chuyển tiếp New HSK',
      ],
      cardBg: 'bg-gradient-to-br from-white via-rose-50/40 to-pink-100/50',
      cardBorder: 'border-rose-200/90 hover:border-rose-400 hover:shadow-md hover:shadow-rose-500/10',
      badgeBg: 'bg-rose-600 text-white',
      accentColor: 'text-rose-700',
      btnHover: 'group-hover:bg-rose-600',
      hanzi: '乐',
      hanziColor: 'text-rose-600/15',
      coverGradient: 'from-rose-400 via-pink-500 to-amber-500',
    },
    {
      id: 'yct-6',
      level: 6,
      title: 'YCT Cấp 6',
      titleZh: 'YCT 标准教程 6',
      edition: 'Tập 6 — Hoàn thiện',
      levelBadge: 'Cao cấp thiếu nhi (B2)',
      targetAge: 'Trẻ 11–16 tuổi',
      wordsCount: 1000,
      lessonsCount: 'Đang biên soạn',
      status: 'upcoming',
      badgeText: 'Sắp ra mắt',
      description: 'Hoàn thiện toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết. Bệ phóng vững chắc để thi đậu HSK 4 và HSK 5.',
      highlights: [
        'Thành thạo 4 kỹ năng ngôn ngữ thiếu nhi',
        'Đạt đỉnh cao khung chuẩn YCT quốc tế',
        'Bệ phóng chuyển tiếp trực tiếp lên HSK 4–5',
      ],
      cardBg: 'bg-gradient-to-br from-white via-indigo-50/40 to-slate-100/50',
      cardBorder: 'border-indigo-200/90 hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10',
      badgeBg: 'bg-indigo-600 text-white',
      accentColor: 'text-indigo-700',
      btnHover: 'group-hover:bg-indigo-600',
      hanzi: '智',
      hanziColor: 'text-indigo-600/15',
      coverGradient: 'from-indigo-500 via-blue-600 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-slate-900 pb-20 selection:bg-amber-200 selection:text-amber-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-6">

        {/* Nút quay lại trang chủ */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-600 transition-colors mb-5 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Trang chủ</span>
        </Link>

        {/* 1. Header Banner phong cách Luminous Gradient ấm áp, tươi vui cho thiếu nhi */}
        <header
          className="relative mb-8 overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-lg shadow-amber-950/10 border border-amber-300/40"
          style={{
            background: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 38%, #D97706 70%, #B45309 100%)',
          }}
        >
          {/* Ambient glow orbs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold mb-3 backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                <span>少儿汉语考试 · Giáo Trình Chuẩn Youth Chinese Test (YCT)</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-snug drop-shadow-xs">
                Tủ Sách Tiếng Trung Thiếu Nhi YCT
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-amber-50 leading-relaxed font-medium">
                Chương trình chuẩn quốc tế 6 cấp độ (YCT 1 – 6) dành riêng cho trẻ em và học sinh tiểu học: hình ảnh minh họa sinh động, phát âm chuẩn bản xứ, flashcard tập viết và trò chơi tương tác.
              </p>
            </div>

            {/* Thẻ chỉ số nổi kính mờ */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-3.5 px-4.5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-amber-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    6 Quyển
                  </div>
                  <div className="text-[11px] text-amber-100 font-semibold mt-1">
                    Cấp độ 1 – 6
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 px-4.5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-amber-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    {yctProgress.learnedWordIds.length}/{YCT1_WORDS.length} từ
                  </div>
                  <div className="text-[11px] text-amber-100 font-semibold mt-1">
                    Tiến độ YCT 1 ({yctProgress.xp} sao)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Thanh thông báo trạng thái */}
        <div className="mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 rounded-2xl bg-white border border-amber-200/80 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-slate-800">Dữ liệu YCT 1 đã hoàn tất số hóa</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Flashcard phát âm · Bút thuận · Trò chơi nối từ 30s · Đố vui</span>
          </div>
          <span className="font-medium text-amber-700">
            {yctProgress.learnedWordIds.length > 0
              ? `Bé đã học thuộc ${yctProgress.learnedWordIds.length} từ trong YCT 1 🌟`
              : 'Chọn YCT 1 bên dưới để cùng Gấu Trúc Pipi vào học nhé! 🐼'}
          </span>
        </div>

        {/* 3. Lưới 6 quyển sách YCT (YCT 标准教程 1 – 6) */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-6 pb-2.5 border-b border-amber-200/70">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Bộ Giáo Trình Chuẩn YCT Toàn Tập
              </h2>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-800 border border-amber-200">
                6 Cấp độ · YCT 1 đến 6
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              YCT 1 sẵn sàng học ngay · YCT 2 đến 6 tải trước PDF
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {yctSeries.map((book) => {
              const isReady = book.status === 'ready';

              return (
                <div
                  key={book.id}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 border transition-all ${book.cardBg} ${book.cardBorder} shadow-xs hover:shadow-md hover:-translate-y-0.5`}
                >
                  {/* Chữ Hán mờ đại diện đằng sau: 幼 - 童 - 学 - 语 - 乐 - 智 */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-2 -bottom-4 select-none font-hanzi text-[110px] sm:text-[130px] font-black leading-none transition-transform duration-300 group-hover:scale-105 ${book.hanziColor}`}
                  >
                    {book.hanzi}
                  </span>

                  {/* Nội dung nổi bên trên */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Bìa sách 3D thiết kế đặc sắc */}
                      {isReady ? (
                        <Link
                          to={book.link || '/yct/1'}
                          className="group/cover block relative mb-4 overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ring-1 ring-slate-900/10 aspect-[3/4] max-h-56 mx-auto cursor-pointer"
                          title={`Mở ${book.title}`}
                        >
                          <div
                            className={`w-full h-full p-4 flex flex-col justify-between text-white bg-gradient-to-br ${book.coverGradient} relative`}
                          >
                            {/* Texture & decorative circles */}
                            <div className="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xs pointer-events-none" />
                            <div className="absolute bottom-4 left-2 w-14 h-14 bg-white/10 rounded-full blur-xs pointer-events-none" />

                            {/* Top header on book cover */}
                            <div className="relative z-10 flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-black/20 backdrop-blur-xs">
                                YCT 1
                              </span>
                              <span className="text-lg">🐼</span>
                            </div>

                            {/* Center Book Title on Cover */}
                            <div className="relative z-10 my-auto text-center">
                              <div className="font-display text-2xl font-black tracking-tight leading-none drop-shadow-sm">
                                YCT 1
                              </div>
                              <div className="font-hanzi text-xs font-bold text-amber-100 mt-1">
                                标准教程
                              </div>
                              <div className="text-[11px] font-bold text-white/90 mt-2 bg-black/15 py-1 px-2.5 rounded-full inline-block backdrop-blur-xs">
                                80 Từ vựng cốt lõi
                              </div>
                            </div>

                            {/* Gáy sách hiệu ứng 3D */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/35 via-white/15 to-transparent" />

                            {/* Bottom tag on cover */}
                            <div className="relative z-10 flex justify-center">
                              <span className="rounded-full bg-emerald-600/95 text-white text-[10.5px] font-bold px-3 py-0.5 shadow-xs backdrop-blur-xs flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
                                <span>Sẵn sàng học ngay</span>
                              </span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div
                          className="relative mb-4 overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-900/10 aspect-[3/4] max-h-56 mx-auto opacity-90"
                          title={book.title}
                        >
                          <div
                            className={`w-full h-full p-4 flex flex-col justify-between text-white bg-gradient-to-br ${book.coverGradient} relative`}
                          >
                            <div className="absolute top-2 right-2 w-16 h-16 bg-white/10 rounded-full blur-xs pointer-events-none" />

                            {/* Top header on book cover */}
                            <div className="relative z-10 flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-black/20 backdrop-blur-xs">
                                YCT {book.level}
                              </span>
                              <span className="text-lg">📚</span>
                            </div>

                            {/* Center Book Title on Cover */}
                            <div className="relative z-10 my-auto text-center">
                              <div className="font-display text-2xl font-black tracking-tight leading-none drop-shadow-sm">
                                YCT {book.level}
                              </div>
                              <div className="font-hanzi text-xs font-bold text-white/80 mt-1">
                                标准教程
                              </div>
                              <div className="text-[11px] font-semibold text-white/90 mt-2 bg-black/20 py-1 px-2.5 rounded-full inline-block backdrop-blur-xs">
                                {book.wordsCount} Từ vựng
                              </div>
                            </div>

                            {/* Gáy sách hiệu ứng 3D */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/35 via-white/15 to-transparent" />

                            {/* Chip trạng thái đang biên soạn */}
                            <div className="relative z-10 flex justify-center">
                              <span className="rounded-full bg-slate-900/80 text-white text-[10.5px] font-bold px-2.5 py-0.5 shadow-xs backdrop-blur-xs flex items-center gap-1.5 border border-white/15">
                                <Clock className="h-3 w-3 text-amber-300" />
                                <span>{book.badgeText || 'Sắp ra mắt'}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Header thẻ: Badge cấp độ + Đối tượng */}
                      <div className="flex items-center justify-between gap-1 mb-2">
                        <span
                          className={`inline-flex items-center justify-center font-display text-xs font-black px-2.5 py-0.5 rounded-lg shadow-xs tracking-wide ${book.badgeBg}`}
                        >
                          {book.title}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          {book.targetAge}
                        </span>
                      </div>

                      {/* Tên chữ Hán & phân cấp */}
                      <div className="font-hanzi text-xs font-bold text-slate-500 mb-1.5">
                        {book.titleZh} · {book.edition}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                        {book.description}
                      </p>

                      {/* Điểm nhấn nổi bật */}
                      <div className="space-y-1.5 mb-4">
                        {book.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                            to={book.link || '/yct/1'}
                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-2.5 px-3.5 shadow-xs transition-all cursor-pointer group-hover:scale-[1.01]"
                          >
                            <span>Vào học ngay</span>
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </Link>

                          <div className="grid grid-cols-2 gap-1.5">
                            <Link
                              to="/yct/1/flashcard"
                              className="inline-flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-semibold py-1.5 px-2 transition-colors"
                            >
                              <span>⚡ Flashcard</span>
                            </Link>

                            {book.textbookUrl && (
                              <a
                                href={book.textbookUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-semibold py-1.5 px-2 transition-colors"
                              >
                                <Download className="w-3 h-3 text-amber-600" />
                                <span>Tải PDF sách</span>
                              </a>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2">
                          {book.textbookUrl ? (
                            <div className="grid grid-cols-2 gap-1.5">
                              <a
                                href={book.textbookUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold py-2 px-2 transition-colors shadow-2xs"
                              >
                                <Download className="w-3 h-3 text-amber-600" />
                                <span>PDF Sách học</span>
                              </a>
                              {book.workbookUrl && (
                                <a
                                  href={book.workbookUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-bold py-2 px-2 transition-colors shadow-2xs"
                                >
                                  <Download className="w-3 h-3 text-amber-600" />
                                  <span>PDF Bài tập</span>
                                </a>
                              )}
                            </div>
                          ) : (
                            <div className="text-center py-1 text-[11px] text-slate-400 font-medium italic">
                              Đang trong giai đoạn chuẩn bị dữ liệu
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Khối tiện ích & phương pháp học tiếng Trung thiếu nhi */}
        <section className="rounded-3xl bg-white border border-amber-200/80 p-6 sm:p-8 shadow-xs">
          <div className="max-w-2xl mb-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
              Phương Pháp Học Tiếng Trung Thiếu Nhi Chuẩn Quốc Tế
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bộ giáo trình YCT (Youth Chinese Test) do Hanban biên soạn, được tối ưu riêng theo đặc điểm tâm lý tiếp thu của trẻ em.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-bold text-xs text-slate-800">Hình ảnh minh họa</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Từng chữ Hán đều kèm icon và tranh minh họa dễ thương, giúp bé nhớ từ qua hình ảnh.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="text-2xl mb-2">🔊</div>
              <div className="font-bold text-xs text-slate-800">Phát âm chuẩn bản xứ</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Hệ thống audio giọng chuẩn Bắc Kinh rõ ràng, tốc độ vừa phải giúp bé nghe và bắt chước chuẩn ngay từ đầu.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
              <div className="text-2xl mb-2">🎮</div>
              <div className="font-bold text-xs text-slate-800">Trò chơi ghép từ 30s</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Game tương tác lật thẻ và nối chữ Hán với nghĩa tiếng Việt, tích lũy điểm sao thưởng vui vẻ.
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100">
              <div className="text-2xl mb-2">📥</div>
              <div className="font-bold text-xs text-slate-800">Tải miễn phí PDF sách</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Trọn bộ sách học và sách bài tập in màu chuẩn chất lượng cao để phụ huynh in ra cho bé làm bài.
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
