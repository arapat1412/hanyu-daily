import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  ExternalLink,
  ShieldCheck,
  Target,
  Heart,
  Calendar,
} from 'lucide-react';

interface CredentialItem {
  icon?: string;
  image?: string;
  badge?: string;
  title: string;
  detail?: string;
}

const EDUCATION: CredentialItem[] = [
  {
    image: '/dhv-logo.png',
    badge: 'Đào tạo chính quy',
    title: 'Trường Đại học Hùng Vương TP. HCM (DHV)',
    detail: 'Cử nhân Xuất sắc chuyên ngành Ngôn ngữ Trung Quốc · Tốt nghiệp chính quy với nền tảng vững chắc về ngữ pháp Hán ngữ hiện đại, ngữ âm và dịch thuật chuyên sâu.',
  },
];

const SCHOLARSHIPS_AND_CERTS: CredentialItem[] = [
  {
    icon: '📜',
    badge: 'Cấp độ cao nhất',
    title: 'Chứng chỉ HSK 6 (Bậc cao cấp)',
    detail: 'Thành thạo toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết và biên dịch tiếng Trung học thuật & thương mại.',
  },
  {
    icon: '🗣️',
    badge: 'Khẩu ngữ chuẩn',
    title: 'Chứng chỉ HSKK (Khẩu ngữ)',
    detail: 'Phát âm chuẩn phổ thông thoại (Bắc Kinh), khẩu ngữ lưu loát và phản xạ giao tiếp tự nhiên.',
  },
  {
    icon: '🎓',
    badge: 'Tốt nghiệp Xuất sắc',
    title: 'Cử nhân Xuất sắc Ngôn ngữ Trung Quốc',
    detail: 'Tốt nghiệp loại Xuất sắc Trường Đại học Hùng Vương TP. HCM với chuyên ngành tiếng Trung ứng dụng.',
  },
  {
    icon: '👩‍🏫',
    badge: 'Phương pháp đổi mới',
    title: 'Biên soạn & Giảng dạy chuẩn 3.0',
    detail: 'Ứng dụng công nghệ tương tác, flashcard SRS ghi nhớ sâu và bài tập phản xạ trực quan theo đề cương mới nhất.',
  },
];


const METHODOLOGY = [
  {
    step: '01',
    title: 'Phát âm chuẩn từ buổi đầu tiên',
    desc: 'Nắm vững hệ thống thanh mẫu, vận mẫu và thanh điệu Pinyin. Chỉnh khẩu hình chi tiết để có ngữ điệu tự nhiên như người bản xứ.',
    icon: '🗣️',
  },
  {
    step: '02',
    title: 'Nhớ chữ Hán qua chiết tự & câu chuyện',
    desc: 'Không học vẹt máy móc. Học viên hiểu rõ gốc bộ thủ, kết cấu chữ và câu chuyện văn hóa đằng sau từng chữ Hán để nhớ sâu và lâu.',
    icon: '🧩',
  },
  {
    step: '03',
    title: 'Phản xạ giao tiếp thực tế liên tục',
    desc: 'Ứng dụng ngay từ vựng và ngữ pháp vào các đoạn hội thoại thực chiến trong công việc, đời sống và thi cử.',
    icon: '⚡',
  },
];

export const TeacherPage: React.FC = () => {
  const zaloUrl = 'https://zalo.me/0772550044';
  const zaloPhone = '0772 550 044';
  const hotline = '0328 480 588';
  const facebookUrl = 'https://www.facebook.com/kimchi.nguyenvan.35';

  return (
    <div className="min-h-screen bg-cream text-ink">
      <main className="mx-auto flex max-w-[1180px] flex-col gap-8 px-4 sm:px-7 pt-6 pb-20">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to="/khoa-hoc"
            className="group inline-flex items-center gap-2 rounded-xl border border-line/80 bg-white px-3.5 py-1.5 text-xs font-bold text-ink-2 shadow-2xs transition-all hover:border-brand/40 hover:text-brand"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>Xem các khóa học</span>
          </Link>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted">
            <span>Hanyu Daily</span>
            <span>·</span>
            <span className="text-brand font-bold">Hồ sơ giảng viên</span>
          </span>
        </div>

        {/* Layout Grid: Sticky Profile Card + Main Body */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[320px_1fr]">
          {/* Left Column: Sticky Profile Card */}
          <aside className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-[#1F435B] via-[#254F6B] to-[#2C5670] p-7 text-center text-white shadow-card lg:sticky lg:top-24">
            {/* Ambient Watermark Character */}
            <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none font-serif text-[180px] font-black leading-none opacity-10">
              教
            </div>

            {/* Avatar Container */}
            <div className="relative mb-4 flex h-32 w-32 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-white/30 bg-white shadow-elevated">
              <img
                src="/kimchi.png"
                alt="Cô Nguyễn Thị Kim Chi"
                className="h-full w-full object-cover object-[50%_20%]"
              />
              <span
                className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-emerald-500 shadow-xs"
                title="Giáo viên sẵn sàng tư vấn"
              />
            </div>

            <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold tracking-wider text-amber-300 uppercase backdrop-blur-xs">
              <Award size={13} /> HSK 6 Cao cấp
            </span>

            <h1 className="font-display text-2xl font-bold text-white">
              Cô Nguyễn Thị Kim Chi
            </h1>

            <p className="mt-1 text-xs text-white/85 leading-relaxed">
              Cử nhân Xuất sắc Ngôn ngữ Trung Quốc<br />
              Đại học Hùng Vương TP. HCM (DHV)
            </p>

            {/* Quick Stat Pill */}
            <div className="my-5 grid w-full grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xs">
                <div className="font-display text-2xl font-black text-amber-300">
                  4+ Năm
                </div>
                <div className="text-[10.5px] font-medium text-white/80 mt-0.5">
                  Kinh nghiệm
                </div>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xs">
                <div className="font-display text-2xl font-black text-amber-300">
                  200+
                </div>
                <div className="text-[10.5px] font-medium text-white/80 mt-0.5">
                  Học viên đỗ HSK
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/khoa-hoc"
              className="group mb-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 py-3 text-xs font-bold text-amber-950 shadow-md transition-all hover:bg-amber-300 hover:scale-[1.02] active:scale-98"
            >
              <span>Đăng ký học cùng cô</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Direct Contacts Section */}
            <div className="w-full border-t border-white/15 pt-4">
              <span className="block mb-2.5 text-[10.5px] font-bold tracking-wider text-white/70 uppercase">
                Liên hệ trực tiếp
              </span>

              <div className="flex flex-col gap-2">
                <a
                  href={zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-brand shadow-xs transition-all hover:bg-white/95 hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle size={15} />
                  <span>Zalo: {zaloPhone}</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/25 hover:scale-[1.02] active:scale-98"
                >
                  <span>👤</span>
                  <span>Facebook: Kim Chi</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>

                <a
                  href={`tel:${hotline.replace(/\s+/g, '')}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-white/25 hover:scale-[1.02] active:scale-98"
                >
                  <Phone size={14} />
                  <span>Hotline: {hotline}</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Content Showcase */}
          <div className="flex flex-col gap-8">
            {/* Section 1: Học vấn & Đào tạo */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <GraduationCap size={16} />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  Học vấn & Đào tạo chính quy
                </h3>
              </div>

              <div className="flex flex-col gap-3">
                {EDUCATION.map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-3xl border border-line bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-brand/40 hover:shadow-md"
                  >
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-line/60 bg-white p-2 shadow-2xs overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[10.5px] font-bold text-brand uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-ink-2 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Chứng chỉ chuyên môn */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800">
                  <Award size={16} />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  Chứng chỉ & Năng lực chuyên môn
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SCHOLARSHIPS_AND_CERTS.map((item) => (
                  <div
                    key={item.title}
                    className="group flex flex-col justify-between rounded-3xl border border-line bg-white p-5 sm:p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-page text-xl shadow-2xs transition-transform group-hover:scale-110">
                          {item.icon}
                        </span>
                        <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700 border border-emerald-200/60">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-ink-2 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Phương pháp giảng dạy khác biệt */}
            <section className="rounded-3xl border border-line bg-gradient-to-br from-white to-tint/30 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Target size={16} />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  Phương pháp đào tạo khác biệt
                </h3>
              </div>
              <p className="text-xs text-muted mb-6">
                3 trụ cột giúp học viên tiếp thu nhanh, nhớ lâu và tự tin áp dụng vào thực tế.
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {METHODOLOGY.map((m) => (
                  <div
                    key={m.step}
                    className="rounded-2xl border border-line/70 bg-white p-5 shadow-2xs transition-all hover:border-brand/40"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-xs font-black text-brand uppercase tracking-wider">
                        BƯỚC {m.step}
                      </span>
                      <span className="text-xl">{m.icon}</span>
                    </div>
                    <h4 className="text-sm font-bold text-ink leading-snug">
                      {m.title}
                    </h4>
                    <p className="mt-2 text-xs text-ink-2 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Banner chuyển sang xem Khóa học */}
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-dark via-brand to-[#27506B] p-7 sm:p-9 text-white shadow-elevated">
              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
                <div className="max-w-[560px]">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/90 mb-2">
                    <Sparkles size={13} className="text-amber-300" /> Khai giảng định kỳ
                  </span>
                  <h3 className="font-display text-2xl font-bold">
                    Bắt đầu hành trình chinh phục tiếng Trung
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-white/85 leading-relaxed">
                    Khám phá các lớp HSK 1, 2, 3 trực tuyến quy mô nhỏ 8 người do cô Kim Chi trực tiếp giảng dạy và kèm cặp.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/khoa-hoc"
                    className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-xs font-bold text-amber-950 shadow-md transition-all hover:bg-amber-300 hover:scale-105 active:scale-98"
                  >
                    <span>Xem các khóa học</span>
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={zaloUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/30 bg-white/15 px-4 py-3 text-xs font-bold text-white transition-all hover:bg-white/25 active:scale-98"
                  >
                    <MessageCircle size={14} />
                    <span>Nhắn Zalo</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};
