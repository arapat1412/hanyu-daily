import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BobaTeaModal } from '../components/BobaTeaModal';
import { useProgress } from '../lib/hsk';
import { submitFeedback, useAuth, useLeaderboard } from '../lib/auth';

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '?';
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const DAYS_OF_WEEK = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

export const DashboardPage: React.FC = () => {
  const progress = useProgress();
  const { user } = useAuth();
  const { users: leaderboardUsers } = useLeaderboard();
  const completedCount = Object.values(progress.lessons).filter((l) => l.completed).length;
  const [bobaOpen, setBobaOpen] = useState(false);
  const [leaderboardTab, setLeaderboardTab] = useState<'weekly' | 'overall'>('weekly');
  const [feedback, setFeedback] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);
  const [feedbackSending, setFeedbackSending] = useState(false);
  const leaderboardRows = leaderboardUsers
    .map((item) => ({
      ...item,
      stars: leaderboardTab === 'weekly' ? item.weeklyXp : item.xp,
      avatar: item.avatarUrl || null,
    }))
    .sort((first, second) => second.stars - first.stars)
    .slice(0, 3);

  // Weekday calculations: Monday=0 ... Sunday=6
  const now = new Date();
  const currentDayIndex = (now.getDay() + 6) % 7;

  const handleSendFeedback = async () => {
    if (!feedback.trim()) return;
    setFeedbackSending(true);
    setFeedbackStatus(null);
    setFeedbackError(null);
    try {
      await submitFeedback(feedback);
      setFeedbackStatus('Đã gửi! Cảm ơn bạn rất nhiều 💌');
      setFeedback('');
    } catch (error) {
      setFeedbackError(error instanceof Error ? error.message : 'Chưa gửi được phản hồi.');
    } finally {
      setFeedbackSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* 2-Column Grid: Main Content & 300px Right Sidebar */}
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-6 px-4 sm:px-7 pt-6 pb-16 lg:grid-cols-[1fr_300px]">
        
        {/* ================= LEFT MAIN COLUMN ================= */}
        <div className="flex flex-col gap-6">

          {/* 1. Teacher Banner (Cô Nguyễn Thị Kim Chi) */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[22px] bg-gradient-to-br from-[#DCEEFB] to-[#C3E0F7] p-6 sm:p-7 text-ink shadow-sm">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <img
                  src="/kimchi.png"
                  alt="Cô Nguyễn Thị Kim Chi"
                  className="h-full w-full object-cover object-[50%_20%]"
                />
              </div>

              <div>
                <div className="mb-1.5 text-[11px] font-bold tracking-[0.12em] text-brand uppercase">
                  Biên soạn và phát triển website
                </div>
                <h2 className="mb-1.5 font-display text-2xl sm:text-[26px] font-bold text-ink">
                  Cô Nguyễn Thị Kim Chi
                </h2>
                <div className="mb-2 text-[13px] font-medium text-brand-dark">
                  Cử nhân Xuất sắc Ngôn ngữ Trung · ĐH Hùng Vương TP. HCM · HSK 6
                </div>
                <p className="mb-4 max-w-[540px] text-[13px] leading-[1.55] text-ink-2">
                  Toàn bộ bài học và giáo trình do cô trực tiếp biên soạn theo chuẩn New HSK 3.0 — đồng hành cùng bạn qua từng kỳ thi.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to="/giao-vien"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-[13px] font-bold text-white no-underline shadow-xs hover:bg-brand-dark transition-all hover:scale-[1.02] active:scale-98"
                  >
                    Giới thiệu giáo viên →
                  </Link>
                  <Link
                    to="/khoa-hoc"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border-2 border-brand px-4 py-1.5 text-[13px] font-bold text-brand no-underline hover:bg-brand/5 transition-all hover:scale-[1.02] active:scale-98"
                  >
                    Khám phá khóa học →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. HSK1 Banner */}
          <Link
            to="/hsk/hsk1"
            className="relative flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-brand-dark to-brand p-6 sm:px-7 sm:py-5 text-white no-underline shadow-sm hover:shadow-md transition-all group"
          >
            <span
              className="pointer-events-none absolute right-[-8px] bottom-[-25px] font-sans text-[100px] leading-[.8] font-black select-none opacity-10"
            >
              课
            </span>

            <div className="relative">
              <div className="mb-1 text-[10.5px] font-bold tracking-[0.12em] text-white/85 uppercase">
                HSK 3.0 · Cấp 1
              </div>
              <h2 className="font-display text-[18px] sm:text-[19px] font-bold">
                HSK1 đã có đầy đủ Từ vựng · Ngữ pháp · Luyện tập
              </h2>
            </div>

            <span className="relative flex-shrink-0 rounded-xl bg-white px-4 py-2.5 text-[13px] font-extrabold whitespace-nowrap text-brand-dark shadow-xs group-hover:scale-105 transition-transform">
              Vào học ngay →
            </span>
          </Link>

          {/* 3. Game 1000 Câu hỏi Văn hóa Trung Quốc */}
          <div
            className="relative overflow-hidden rounded-2xl sm:rounded-[22px] p-6 sm:p-7 text-white shadow-sm"
            style={{ background: 'linear-gradient(120deg, #2C5670 0%, #25485E 55%, #1D3A4C 100%)' }}
          >
            <span
              className="pointer-events-none absolute right-[-10px] bottom-[-30px] font-sans text-[130px] leading-[.8] font-black select-none opacity-10"
            >
              游
            </span>

            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-[0.12em] text-[#C9E7F5] uppercase">
                    Game học tập
                  </span>
                  <span className="rounded-full bg-[#E14848] px-2 py-0.5 text-[10px] font-extrabold tracking-[0.06em] text-white uppercase">
                    Mới
                  </span>
                </div>
                <h2 className="mb-1.5 font-display text-[22px] sm:text-[24px] font-bold">
                  1000 câu hỏi Văn hóa Trung Quốc
                </h2>
                <p className="max-w-[540px] text-[13px] leading-[1.55] text-white/80">
                  7 chuyên đề trắc nghiệm về lịch sử, văn học, nghệ thuật, khoa học... Trung Quốc — vừa chơi vừa học, tích XP, leo bảng xếp hạng.
                </p>
              </div>

              <Link
                to="/kham-pha"
                className="inline-flex flex-shrink-0 items-center justify-center gap-1.5 rounded-xl px-5 py-2.5 text-[13.5px] font-extrabold whitespace-nowrap no-underline shadow-sm hover:scale-105 active:scale-98 transition-transform"
                style={{ background: 'linear-gradient(135deg, #F0C64C, #E0A62A)', color: '#40300A' }}
              >
                ▶ Khám phá ngay
              </Link>
            </div>
          </div>

          {/* 4. Greeting Banner */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[22px] bg-gradient-to-br from-brand to-brand-dark p-6 sm:p-8 text-white shadow-sm">
            <div
              className="pointer-events-none absolute top-1/2 -right-2 -translate-y-1/2 font-display text-[230px] leading-none font-black opacity-10 select-none"
            >
              学
            </div>

            <div className="relative">
              <div className="mb-1.5 text-[13px] font-semibold opacity-90">
                Chào mừng, MoGia 👋
              </div>
              <h1 className="mb-2 font-display text-2xl sm:text-[28px] lg:text-[30px] font-bold">
                Bắt đầu hành trình học tiếng Trung nào!
              </h1>
              <p className="mb-5 max-w-[460px] text-[13.5px] leading-[1.55] opacity-90">
                Chọn một lộ trình bên dưới và hoàn thành bài học đầu tiên để mở khoá chuỗi ngày của bạn.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  to="/lesson/hsk1-1/list"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[13.5px] font-bold text-brand no-underline shadow-md hover:bg-white/95 transition-all hover:scale-[1.02] active:scale-98"
                >
                  <span>▶</span>
                  <span>Bắt đầu bài học đầu tiên</span>
                </Link>
                <Link
                  to="/hsk"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/15 px-5 py-3 text-[13.5px] font-bold text-white no-underline hover:bg-white/25 transition-all hover:scale-[1.02] active:scale-98 backdrop-blur-xs"
                >
                  <span>🧭</span>
                  <span>Chọn lộ trình phù hợp</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 5. 2 Mini Stats (Bo góc tròn và căn giữa đẹp mắt) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFF3E0] text-2xl shadow-xs">
                🔥
              </div>
              <div className="font-display text-[28px] sm:text-[32px] leading-tight font-extrabold text-ink">
                0
              </div>
              <div className="mt-1 text-xs sm:text-[13px] font-semibold text-ink-2">
                Ngày liên tục
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition-all">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#EAF7EF] text-2xl shadow-xs">
                📖
              </div>
              <div className="font-display text-[28px] sm:text-[32px] leading-tight font-extrabold text-ink">
                {completedCount}
              </div>
              <div className="mt-1 text-xs sm:text-[13px] font-semibold text-ink-2">
                Bài đã hoàn thành
              </div>
            </div>
          </div>

          {/* 6. Gợi ý cho bạn */}
          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="border-l-4 border-brand pl-3 font-display text-[19px] font-bold text-ink">
                Gợi ý cho bạn
              </h3>
              <Link to="/hsk" className="text-[12.5px] font-semibold text-brand no-underline hover:text-brand-dark">
                Xem tất cả →
              </Link>
            </div>

            <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-white sm:grid-cols-[180px_1fr] shadow-sm">
              <div className="flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#E7F2F8] to-[#D9EAF3] p-6 text-center">
                <div className="font-display text-[52px] leading-none font-black text-brand">
                  汉语
                </div>
                <small className="text-[11px] font-semibold text-brand-dark">
                  HSK 3.0 · Cấp 1 · Bài 1
                </small>
              </div>

              <div className="p-6">
                <div className="mb-1 text-[11px] font-bold tracking-[0.06em] text-brand uppercase">
                  Bài học mở đầu
                </div>
                <h4 className="mb-1 font-hanzi text-xl font-bold text-ink">
                  你好!
                </h4>
                <div className="mb-3.5 text-[13px] text-ink-2">
                  Xin chào!
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    to="/lesson/hsk1-1/list"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-brand px-5 py-2.5 text-[13.5px] font-bold text-white no-underline hover:bg-brand-dark transition-colors shadow-xs hover:scale-[1.02] active:scale-98"
                  >
                    ▶ Bắt đầu học
                  </Link>
                  <span className="ml-auto text-xs font-semibold text-ink-2">
                    12 từ
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Lộ trình của bạn */}
          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="border-l-4 border-brand pl-3 font-display text-[19px] font-bold text-ink">
                Lộ trình của bạn
              </h3>
              <Link to="/hsk" className="text-[12.5px] font-semibold text-brand no-underline hover:text-brand-dark">
                Tất cả →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Link
                to="/hsk"
                className="rounded-2xl border border-line bg-white p-5 no-underline shadow-sm hover:shadow-md hover:border-brand/40 transition-all group"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="font-display text-[26px] leading-none font-black text-[#D4A017]">
                    汉语
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink group-hover:text-brand transition-colors">
                      HSK 3.0
                    </div>
                    <div className="text-[11.5px] text-ink-2">
                      9 cấp · 11.000 từ
                    </div>
                  </div>
                </div>
                <div className="text-[13px] font-semibold text-ink-2">
                  <b className="font-display text-[18px] font-bold text-[#D4A017]">{progress.known.length}</b> từ đã học
                </div>
              </Link>

              <Link
                to="/hsk/hsk7-9"
                className="rounded-2xl border border-line bg-white p-5 no-underline shadow-sm hover:shadow-md hover:border-brand/40 transition-all group"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="font-display text-[26px] leading-none font-black text-[#2C5670]">
                    顶石
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink group-hover:text-brand transition-colors">
                      HSK 7-9
                    </div>
                    <div className="text-[11.5px] text-ink-2">
                      Nâng cao học thuật
                    </div>
                  </div>
                </div>
                <div className="text-[13px] font-semibold text-ink-2">
                  <b className="font-display text-[18px] font-bold text-[#2C5670]">5.636</b> từ vựng
                </div>
              </Link>

              <Link
                to="/csca"
                className="rounded-2xl border border-line bg-white p-5 opacity-70 no-underline hover:opacity-100 transition-opacity shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="font-display text-[26px] leading-none font-black text-[#2C5670]">
                    入
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink">
                      CSCA
                    </div>
                    <div className="text-[11.5px] leading-[1.35] text-ink-2">
                      Ôn thi xin học bổng đại học Trung Quốc
                    </div>
                  </div>
                </div>
                <span className="inline-block rounded-full bg-track px-2.5 py-1 text-[10.5px] font-semibold text-ink-2">
                  Sắp ra mắt
                </span>
              </Link>

              <div className="rounded-2xl border border-line bg-white p-5 opacity-70 shadow-sm">
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="font-display text-[26px] leading-none font-black text-[#2C5670]">
                    教
                  </div>
                  <div>
                    <div className="text-[15px] font-bold text-ink">
                      CTCSOL
                    </div>
                    <div className="text-[11.5px] leading-[1.35] text-ink-2">
                      Chứng chỉ giáo viên tiếng Trung quốc tế
                    </div>
                  </div>
                </div>
                <span className="inline-block rounded-full bg-track px-2.5 py-1 text-[10.5px] font-semibold text-ink-2">
                  Sắp ra mắt
                </span>
              </div>
            </div>
          </section>

          {/* 8. Đã lưu của bạn */}
          <section>
            <div className="mb-3 flex items-baseline justify-between">
              <h3 className="border-l-4 border-gold pl-3 font-display text-[19px] font-bold text-ink">
                Đã lưu của bạn
              </h3>
              <Link to="/hsk" className="text-[12.5px] font-semibold text-brand no-underline hover:text-brand-dark">
                Ôn flashcard →
              </Link>
            </div>

            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF6E6] text-[18px]">
                  🔖
                </div>
                <div className="text-[15px] font-bold text-ink">
                  Từ vựng đã lưu ({progress.bookmarks.length})
                </div>
              </div>
              <p className="m-0 text-[12.5px] leading-[1.55] text-ink-2">
                Đánh dấu từ khi ôn flashcard trong một buổi học — sổ tay lưu lại lâu dài giữa các lần vào app chưa có, tính năng này sẽ sớm ra mắt.
              </p>
            </div>
          </section>

        </div>

        {/* ================= RIGHT SIDEBAR (300px) ================= */}
        <div className="flex flex-col gap-4">

          {/* 1. Ngôi sao từ vựng */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] text-ink-2 uppercase">
              <span className="text-gold">⭐</span>
              <span>Ngôi sao từ vựng</span>
            </div>

            <div className="mb-3 flex rounded-full bg-tint p-1 text-[12px] font-semibold">
              <button
                type="button"
                onClick={() => setLeaderboardTab('weekly')}
                className={`flex-1 rounded-full py-1.5 transition-colors ${
                  leaderboardTab === 'weekly'
                    ? 'bg-white text-brand shadow-xs font-bold'
                    : 'text-ink-2 hover:text-brand'
                }`}
              >
                Tuần
              </button>
              <button
                type="button"
                onClick={() => setLeaderboardTab('overall')}
                className={`flex-1 rounded-full py-1.5 transition-colors ${
                  leaderboardTab === 'overall'
                    ? 'bg-white text-brand shadow-xs font-bold'
                    : 'text-ink-2 hover:text-brand'
                }`}
              >
                Chung
              </button>
            </div>

            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {leaderboardRows.map((item, idx) => (
                <li key={item.id} className="flex items-center gap-2.5 text-[13px]">
                  <span className="w-4 text-center font-bold text-gold">
                    {idx + 1}
                  </span>
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="h-7 w-7 flex-shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-tint text-[11px] font-bold text-brand-dark">
                      {getInitials(item.name)}
                    </span>
                  )}
                  <span className="flex-1 truncate font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="font-bold whitespace-nowrap text-gold">
                    {item.stars} ⭐
                  </span>
                </li>
              ))}
              {!leaderboardRows.length && (
                <li className="rounded-xl bg-page p-3 text-center text-xs text-muted">
                  Chưa có tài khoản. Đăng ký để lưu điểm và XP.
                </li>
              )}
            </ul>

            <p className="m-0 mt-3.5 mb-2 text-center text-[12px] font-semibold text-brand">
              Luyện từ vựng để giành thêm sao!
            </p>
            <Link
              to="/xep-hang"
              className="block text-center text-[12px] font-semibold text-brand no-underline hover:text-brand-dark"
            >
              Xem bảng đầy đủ →
            </Link>
          </div>

          {/* 2. Mời cô giáo một ly trà sữa */}
          <button
            type="button"
            onClick={() => setBobaOpen(true)}
            className="flex w-full items-center gap-3.5 rounded-2xl border border-[#F0DDA8] bg-gradient-to-br from-[#FDEEC9] to-[#F0C64C] p-4.5 text-left shadow-xs hover:scale-[1.02] active:scale-98 transition-transform group"
          >
            <img
              src="/tra-sua-icon.png"
              alt="Trà sữa"
              className="h-12 w-12 flex-shrink-0 object-contain group-hover:rotate-6 transition-transform"
            />
            <span className="min-w-0 flex-1">
              <span className="block text-[13.5px] font-bold text-[#5C3E0A]">
                Mời cô giáo một ly trà sữa
              </span>
              <span className="block text-[11px] text-[#8A6A1E]">
                Ủng hộ để website luôn cập nhật nhé ~
              </span>
            </span>
          </button>

          {/* 3. Chuỗi ngày học */}
          <div className="rounded-2xl border border-[#F0DDA8] bg-gradient-to-b from-[#FFF6E6] to-[#FDEEC9] p-5 text-center shadow-xs">
            <div className="mb-1 text-[11px] font-bold tracking-[0.08em] text-[#B07A12] uppercase">
              Chuỗi ngày học
            </div>
            <div className="text-[36px] leading-none">
              🔥
            </div>
            <div className="mt-0.5 font-display text-[40px] leading-none font-black text-brand">
              0
            </div>
            <div className="text-[11.5px] font-bold tracking-[0.04em] text-[#B07A12]">
              NGÀY LIÊN TỤC
            </div>

            <div className="mt-3.5 flex justify-center gap-2">
              {DAYS_OF_WEEK.map((dayLabel, idx) => {
                const isToday = idx === currentDayIndex;
                return (
                  <div key={dayLabel} className="text-center">
                    <span className="mb-1 block text-[10px] font-semibold text-ink-2">
                      {dayLabel}
                    </span>
                    <i
                      className={`block h-7 w-7 rounded-xl text-[12px] font-bold not-italic flex items-center justify-center ${
                        isToday
                          ? 'bg-white text-brand border-2 border-dashed border-brand shadow-xs'
                          : 'bg-white text-muted border border-line'
                      }`}
                    >
                      {isToday ? '?' : ''}
                    </i>
                  </div>
                );
              })}
            </div>

            <Link
              to="/hsk"
              className="mt-4 block w-full rounded-xl bg-[#2C5670] py-2.5 text-[13px] font-bold text-white no-underline hover:bg-[#17303F] transition-all hover:scale-[1.01] active:scale-98 shadow-xs"
            >
              Học ngay để giữ chuỗi
            </Link>
          </div>

          {/* 4. Hôm nay */}
          <div className="rounded-2xl border border-line bg-white p-5 text-center shadow-xs">
            <div className="mb-1 text-[11px] font-bold tracking-[0.08em] text-ink-2 uppercase">
              Hôm nay
            </div>
            <div className="text-[18px] font-bold text-ink">
              0 mục đã luyện tập
            </div>
            <div className="text-xs text-ink-2/80 mt-0.5">
              tính theo bài/đơn vị có hoạt động hôm nay
            </div>
          </div>

          {/* 5. Đánh giá */}
          <div className="rounded-2xl border border-line bg-white p-5 shadow-xs">
            <div className="mb-2 text-[11px] font-bold tracking-[0.08em] text-ink-2 uppercase">
              Đánh giá
            </div>
            <p className="mb-2.5 text-[12px] leading-[1.5] text-ink-2">
              Bạn thấy trang web thế nào? Để lại vài dòng góp ý, báo lỗi, hoặc một lời động viên cho tụi mình nha 💌
            </p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              maxLength={1500}
              aria-label="Nội dung phản hồi"
              placeholder="Viết lời nhắn của bạn ở đây..."
              rows={3}
              className="w-full resize-none rounded-xl border-[1.5px] border-line p-3 text-[13px] text-ink focus:border-brand focus:outline-none transition-colors"
            />
            <p className="mt-1.5 text-[11px] leading-[1.5] text-ink-2">
              {user ? (
                <>Phản hồi được lưu riêng tư và chỉ quản trị viên có thể đọc.</>
              ) : (
                <>
                  <Link to="/login" className="font-semibold text-brand hover:underline">Đăng nhập</Link>
                  {' '}để gửi phản hồi.
                </>
              )}
            </p>
            {feedbackStatus && (
              <div className="mt-2 text-[12px] font-semibold text-brand" role="status">
                {feedbackStatus}
              </div>
            )}
            {feedbackError && (
              <div className="mt-2 text-[12px] font-semibold text-red-700" role="alert">
                {feedbackError}
              </div>
            )}
            <button
              type="button"
              disabled={!user || !feedback.trim() || feedbackSending}
              onClick={() => void handleSendFeedback()}
              className="mt-2.5 w-full rounded-xl bg-tint py-2.5 text-[13px] font-bold text-brand hover:bg-brand/15 disabled:opacity-60 transition-colors"
            >
              {feedbackSending ? 'Đang gửi…' : 'Gửi'}
            </button>
          </div>

        </div>

      </div>

      {/* Boba Tea Modal */}
      <BobaTeaModal isOpen={bobaOpen} onClose={() => setBobaOpen(false)} />
    </div>
  );
};
