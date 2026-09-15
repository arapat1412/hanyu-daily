import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Sparkles,
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  MessageCircle,
  Flame,
  ShieldCheck,
  Award,
} from 'lucide-react';

export const CoursesPage: React.FC = () => {
  const zaloUrl = 'https://zalo.me/0772550044';

  const highlights = [
    {
      hz: '助',
      title: 'Trợ giảng HSK 6 đồng hành',
      text: 'Trợ giảng trình độ HSK 6 theo sát mỗi buổi học, chữa bài và hỗ trợ giải đáp 24/7.',
      bg: '#E7EFF2',
      fg: '#1F4E5F',
    },
    {
      hz: '新',
      title: 'Chuẩn New HSK 3.0 mới',
      text: 'Toàn diện từ vựng, ngữ pháp và cập nhật cấu trúc đề thi thực tế mới nhất hiện nay.',
      bg: '#FFF6E6',
      fg: '#B07A12',
    },
    {
      hz: '时',
      title: 'Lịch học cố định & tối ưu',
      text: '2 buổi tối mỗi tuần, tương tác trực tiếp 100%, phù hợp người đi làm và sinh viên.',
      bg: '#EAF7EF',
      fg: '#27AE60',
    },
  ];

  interface Course {
    id: string;
    hz: string;
    title: string;
    subtitle: string;
    duration: string;
    vocab: string;
    badge: string;
    badgeColor: string;
    isFeatured?: boolean;
    breakdown: string[];
    note?: string;
    extra?: string;
  }

  const courses: Course[] = [
    {
      id: 'hsk1',
      hz: '一',
      title: 'HSK Cấp 1',
      subtitle: 'Từ số 0 đến đầu ra HSK 1 (chuẩn 3.0 mới)',
      duration: '22 buổi',
      vocab: '300 từ',
      badge: 'CHỈ CÒN 2 SLOT',
      badgeColor: 'bg-amber-500 text-white',
      isFeatured: true,
      breakdown: [
        '2 buổi phát âm chuẩn & làm quen chữ Hán',
        '19 buổi học giáo trình, ngữ pháp & ôn tập',
        '1 buổi thi thử & kiểm tra tổng kết',
      ],
      note: 'Lớp tối đa 8 học viên.',
      extra: 'Kèm bộ video luyện viết chữ Hán theo giáo trình chuẩn',
    },
    {
      id: 'hsk2',
      hz: '二',
      title: 'HSK Cấp 2',
      subtitle: 'Từ đầu ra HSK 1 đến đầu ra HSK 2',
      duration: '25 buổi',
      vocab: '200 từ',
      badge: 'ĐANG TUYỂN SINH',
      badgeColor: 'bg-emerald-600 text-white',
      breakdown: [
        '24 buổi học giáo trình, từ vựng & ngữ pháp nâng cao',
        '1 buổi thi thử & kiểm tra tổng kết',
      ],
      note: 'Lớp tối đa 8 học viên.',
    },
    {
      id: 'hsk3',
      hz: '三',
      title: 'HSK Cấp 3',
      subtitle: 'Từ đầu ra HSK 2 đến đầu ra HSK 3 & HSKK',
      duration: '34 buổi',
      vocab: '500 từ',
      badge: 'ĐANG TUYỂN SINH',
      badgeColor: 'bg-brand text-white',
      breakdown: [
        '32 buổi học giáo trình chuyên sâu & luyện đề',
        '1 buổi luyện chuyên đề khẩu ngữ HSKK',
        '1 buổi thi thử & tổng kết khóa học',
      ],
      note: 'Lớp tối đa 8 học viên.',
    },
  ];


  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-4 sm:px-7 pt-6 pb-20">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            to="/hsk/hsk1"
            className="group inline-flex items-center gap-2 rounded-xl border border-line/80 bg-white px-3.5 py-1.5 text-xs font-bold text-ink-2 shadow-2xs transition-all hover:border-brand/40 hover:text-brand"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>Trang HSK 1</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
            <span>Hanyu Daily</span>
            <span>·</span>
            <span className="text-brand font-bold">Lớp học trực tuyến</span>
          </span>
        </div>

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white via-white to-tint/30 p-6 sm:p-8 shadow-sm text-center">
          {/* Decorative Background Hanzi */}
          <div className="pointer-events-none absolute -right-4 -bottom-8 select-none font-serif text-[140px] font-black leading-none text-brand/5">
            学
          </div>
          <div className="pointer-events-none absolute -left-4 -top-8 select-none font-serif text-[140px] font-black leading-none text-brand/5">
            语
          </div>

          <div className="relative mx-auto flex max-w-[680px] flex-col items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3.5 py-1 text-[11px] font-bold tracking-wider text-brand uppercase shadow-2xs">
              <Sparkles size={13} className="text-gold" />
              HSK 3.0 · CHUẨN ĐỀ CƯƠNG MỚI NHẤT
            </span>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-ink">
              Khóa học tiếng Trung HSK 3.0
            </h1>

            <p className="text-xs sm:text-sm leading-relaxed text-ink-2 max-w-[580px]">
              Lộ trình từ số 0 đến đầu ra HSK 1, 2, 3 bài bản và dễ hiểu. Lớp học trực tuyến tương tác cao, quy mô nhỏ 8 học viên, có trợ giảng HSK 6 kèm cặp xuyên suốt.
            </p>

            {/* Quick Trust Badges */}
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs font-semibold text-ink-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-3 py-1 shadow-2xs">
                <Users size={13} className="text-brand" /> Lớp nhỏ 8 học viên
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-3 py-1 shadow-2xs">
                <GraduationCap size={13} className="text-emerald-600" /> Giáo viên DHV HSK 6
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-line px-3 py-1 shadow-2xs">
                <ShieldCheck size={13} className="text-gold" /> Chuẩn New HSK 3.0
              </span>
            </div>
          </div>
        </section>

        {/* Teacher Showcase Banner (Full Width Horizontal Card) */}
        <section className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-[#EBF2F6] via-[#E2EDF4] to-[#D5E5EF] p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar Container with fixed dimensions */}
            <div className="relative h-24 w-24 sm:h-28 sm:w-28 flex-shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
              <img
                src="/kimchi-320.webp"
                alt="Cô Nguyễn Thị Kim Chi"
                width={320}
                height={361}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[50%_20%]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces';
                }}
              />
              <span
                className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 shadow-xs"
                title="Đang hoạt động"
              />
            </div>

            {/* Teacher Details */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="rounded-full bg-brand/15 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                  Giáo viên đứng lớp
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 shadow-2xs">
                  <Award size={13} /> HSK 6 Cao cấp
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold text-brand-dark shadow-2xs">
                  <GraduationCap size={13} /> ĐH Hùng Vương (DHV)
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Cô Nguyễn Thị Kim Chi
              </h2>

              <p className="mt-1 text-xs sm:text-[13px] font-semibold text-brand-dark">
                Cử nhân Xuất sắc Ngôn ngữ Trung Quốc · Đại học Hùng Vương TP. HCM
              </p>

              <p className="mt-2.5 max-w-[720px] text-xs sm:text-[13px] leading-relaxed text-ink-2">
                Toàn bộ bài học và phương pháp phản xạ được cô trực tiếp biên soạn theo chuẩn New HSK 3.0 — đồng hành kèm cặp từng học viên từ phát âm chuẩn, sửa bài tập đến khi tự tin thi đỗ chứng chỉ và giao tiếp thực tế.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <Link
                  to="/giao-vien"
                  className="group inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-dark hover:scale-[1.02] active:scale-98"
                >
                  <span>Xem hồ sơ & bằng cấp giáo viên</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-brand/30 bg-white/90 px-4 py-2.5 text-xs font-bold text-brand shadow-2xs transition-all hover:bg-white hover:border-brand hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle size={13} />
                  <span>Tư vấn trực tiếp với cô</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Free Learning Resources & Roadmaps */}
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                <BookOpen size={13} />
                <span>Tài liệu & Lộ trình tự học</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink mt-1">
                Hệ thống giáo trình & Lộ trình miễn phí
              </h3>
            </div>
            <p className="text-xs text-muted max-w-md sm:text-right">
              Tích hợp đầy đủ từ vựng chuẩn, bài tập tương tác, audio và file PDF tải về miễn phí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: HSK 3.0 */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-md">
              <div>
                <div className="flex items-start gap-4">
                  <div className="h-24 w-18 flex-shrink-0 overflow-hidden rounded-2xl border border-line/80 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-amber-50/40">
                    <img
                      src="/hsk1-textbook-cover.jpg"
                      alt="Lộ trình New HSK 3.0"
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-amber-100/70 px-2.5 py-1 text-[10.5px] font-bold text-amber-900 tracking-wide uppercase">
                      <GraduationCap size={12} /> Lộ trình chuẩn
                    </span>
                    <h4 className="mt-2 text-[15px] font-bold text-ink group-hover:text-amber-700 transition-colors leading-snug">
                      New HSK 3.0 (Cấp 1 – 9)
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-amber-800/80">
                      9 cấp độ · 11.000+ từ vựng
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-ink-2 leading-relaxed">
                  Lộ trình học toàn diện theo chuẩn HSK 3.0 mới nhất, kèm tra cứu từ vựng, ngữ pháp chi tiết và luyện tập phản xạ.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-line/60">
                <Link
                  to="/hsk"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-2.5 text-xs font-bold text-white shadow-2xs transition-all hover:bg-amber-600 hover:scale-[1.01] active:scale-98"
                >
                  <span>Khám phá lộ trình HSK</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 2: Boya */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-md">
              <div>
                <div className="flex items-start gap-4">
                  <div className="h-24 w-18 flex-shrink-0 overflow-hidden rounded-2xl border border-line/80 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-tint/40">
                    <img
                      src="/boyasocap1.png"
                      alt="Giáo trình Hán ngữ Boya Sơ cấp 1"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-brand/10 px-2.5 py-1 text-[10.5px] font-bold text-brand tracking-wide uppercase">
                      <BookOpen size={12} /> Kho tài liệu tự học
                    </span>
                    <h4 className="mt-2 text-[15px] font-bold text-ink group-hover:text-brand transition-colors leading-snug">
                      Giáo trình Boya Sơ cấp 1
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-brand-dark/80">
                      30 bài học · 678 từ vựng
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-ink-2 leading-relaxed">
                  Trọn bộ 30 bài học kèm audio phát âm chuẩn, bài tập trắc nghiệm củng cố và flashcard thông minh hoàn toàn miễn phí.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-line/60">
                <Link
                  to="/boya/so-cap-1"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-xs font-bold text-white shadow-2xs transition-all hover:bg-brand-dark hover:scale-[1.01] active:scale-98"
                >
                  <span>Vào học Boya miễn phí</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Card 3: YCT */}
            <div className="group relative flex flex-col justify-between rounded-3xl border border-line bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-md">
              <div>
                <div className="flex items-start gap-4">
                  <div className="h-24 w-18 flex-shrink-0 overflow-hidden rounded-2xl border border-line/80 shadow-xs transition-transform duration-300 group-hover:scale-105 bg-emerald-50/40">
                    <img
                      src="/yct1.png"
                      alt="Tủ Sách Tiếng Trung Thiếu Nhi YCT"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100/70 px-2.5 py-1 text-[10.5px] font-bold text-emerald-800 tracking-wide uppercase">
                      <Sparkles size={12} /> Tiếng Trung thiếu nhi
                    </span>
                    <h4 className="mt-2 text-[15px] font-bold text-ink group-hover:text-emerald-700 transition-colors leading-snug">
                      Tủ Sách YCT (Cấp 1 – 6)
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-emerald-800/80">
                      6 cấp độ · Trọn bộ PDF SGK & SBT
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs text-ink-2 leading-relaxed">
                  Giáo trình chuẩn quốc tế cho học sinh 6–15 tuổi với tranh vẽ sinh động, audio bản xứ và link tải file PDF miễn phí.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-line/60">
                <Link
                  to="/yct"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-xs font-bold text-white shadow-2xs transition-all hover:bg-emerald-700 hover:scale-[1.01] active:scale-98"
                >
                  <span>Khám phá sách YCT</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Course Highlights / Quality Commitment Strip */}
        <section className="rounded-3xl border border-line/80 bg-white p-6 sm:p-7 shadow-xs">
          <div className="mb-4 sm:mb-5 pb-3 border-b border-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Đặc quyền khi tham gia lớp học cùng cô Kim Chi
            </span>
            <span className="text-[11px] font-semibold text-brand">
              Kèm cặp 1-1 · Sửa phát âm & bài tập mỗi ngày
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line/70 gap-5 md:gap-0">
            {highlights.map((h, index) => (
              <div
                key={h.title}
                className={`flex items-start gap-4 ${
                  index === 0
                    ? 'md:pr-6'
                    : index === 1
                    ? 'md:px-6 pt-5 md:pt-0'
                    : 'md:pl-6 pt-5 md:pt-0'
                }`}
              >
                <div
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-display text-xl font-black shadow-2xs transition-transform hover:scale-105"
                  style={{ background: h.bg, color: h.fg }}
                >
                  {h.hz}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink">
                    {h.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink-2 leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discount Coupon Banner */}
        <section className="relative overflow-hidden rounded-2xl border border-dashed border-[#E3B863] bg-gradient-to-r from-[#FFF9EE] via-[#FFF3D6] to-[#FFF9EE] px-5 sm:px-6 py-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#E0A62A] text-white font-black text-base shadow-xs">
                %
              </span>
              <div>
                <span className="font-bold text-sm text-[#5C3E0A]">
                  Ưu đãi học nhóm: Giảm 200.000đ học phí mỗi bạn
                </span>
                <p className="text-xs text-[#8A6A1E] mt-0.5">
                  Áp dụng khi đăng ký từ 2 học viên trở lên cho bất kỳ khóa học nào trong tháng này.
                </p>
              </div>
            </div>

            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 flex-shrink-0 rounded-xl bg-[#B07A12] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#8F630E] hover:scale-105 active:scale-98"
            >
              <span>Nhận ưu đãi qua Zalo</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </section>


        {/* 3 Course Tier Cards */}
        <section className="space-y-4">
          <div className="text-center sm:text-left">
            <h2 className="font-display text-2xl font-bold text-ink">
              Các khóa học đang mở
            </h2>
            <p className="mt-1 text-xs text-muted">
              Lựa chọn cấp độ phù hợp với trình độ hiện tại và mục tiêu của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`group relative flex flex-col justify-between rounded-3xl border-2 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${
                  course.isFeatured
                    ? 'border-brand/70 shadow-md ring-4 ring-brand/5'
                    : 'border-line hover:border-brand/40'
                }`}
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10.5px] font-extrabold tracking-wider uppercase shadow-2xs ${course.badgeColor}`}
                  >
                    {course.isFeatured && <Flame size={12} />}
                    {course.badge}
                  </span>

                  <span className="text-[11px] font-bold text-muted">
                    Lớp nhỏ 8 người
                  </span>
                </div>

                {/* Course Header */}
                <div className="flex items-start gap-3.5 mb-5">
                  <div
                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl font-display text-xl font-black shadow-xs ${
                      course.isFeatured
                        ? 'bg-brand text-white'
                        : 'bg-tint text-brand'
                    }`}
                  >
                    {course.hz}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">
                      {course.title}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink-2 leading-snug">
                      {course.subtitle}
                    </p>
                  </div>
                </div>

                {/* Stats Pills */}
                <div className="grid grid-cols-2 gap-2 rounded-2xl bg-page/50 p-2.5 mb-5 border border-line/50 text-center">
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-muted">
                      Thời lượng
                    </div>
                    <div className="text-sm font-bold text-ink mt-0.5">
                      {course.duration}
                    </div>
                  </div>
                  <div className="border-l border-line/60">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-muted">
                      Lượng từ
                    </div>
                    <div className="text-sm font-bold text-brand mt-0.5">
                      {course.vocab}
                    </div>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="rounded-2xl border border-line/60 bg-page/20 p-4 mb-5">
                  <div className="text-xs font-bold text-ink mb-2 flex items-center gap-1.5">
                    <Clock size={13} className="text-brand" />
                    <span>Lộ trình chi tiết:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-ink-2 leading-relaxed">
                    {course.breakdown.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features & Extras */}
                <div className="space-y-2 text-xs text-ink-2 mb-6 pt-2 border-t border-line/50">
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="font-medium">Quy mô lớp tối đa 8 học viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span className="font-medium">Có trợ giảng HSK 6 hỗ trợ xuyên suốt</span>
                  </div>
                  {course.extra && (
                    <div className="flex items-center gap-2">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                        <Sparkles size={11} strokeWidth={3} />
                      </span>
                      <span className="font-medium text-ink">{course.extra}</span>
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn mt-auto inline-flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-center text-xs font-bold transition-all duration-200 hover:scale-[1.01] active:scale-98 shadow-sm ${
                    course.isFeatured
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'bg-tint text-brand hover:bg-brand hover:text-white'
                  }`}
                >
                  <span>Đăng ký {course.title}</span>
                  <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Consultation Banner */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-dark via-brand to-[#224A61] p-7 sm:p-10 text-white shadow-elevated">
          {/* Decorative Background Text */}
          <div className="pointer-events-none absolute right-4 -bottom-10 font-serif text-[140px] font-black leading-none opacity-10 select-none">
            通
          </div>

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="max-w-[620px]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 mb-2">
                <MessageCircle size={13} /> Tư vấn 1-1 trực tiếp
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Bạn chưa biết nên chọn lớp nào?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/85 leading-relaxed">
                Nhắn tin trực tiếp với cô Kim Chi để được kiểm tra trình độ miễn phí và tư vấn lộ trình học phù hợp nhất với quỹ thời gian của bạn.
              </p>
            </div>

            <a
              href={zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 flex-shrink-0 rounded-2xl bg-white px-6 py-3.5 text-xs font-bold text-brand-dark shadow-md transition-all hover:bg-white/95 hover:scale-105 active:scale-98"
            >
              <span>Nhắn Zalo tư vấn ngay</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
