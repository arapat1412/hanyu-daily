import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  GraduationCap,
  BookOpen,
  Compass,
  Trophy,
  Coffee,
  Download,
  LogOut,
  ChevronRight,
  Shield,
  FileText,
  Sparkles,
  Award,
  Search,
} from 'lucide-react';
import { BobaTeaModal } from './BobaTeaModal';
import { useProgress } from '../lib/hsk';
import { useAuth, logoutAccount } from '../lib/auth';
import { calculateProgressStats } from '../lib/progress-stats';
import { usePwa } from '../lib/pwa';
import { openGlobalSearch } from '../lib/search';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const progress = useProgress();
  const { user } = useAuth();
  const { isInstallable, isIos, isStandalone, promptInstall } = usePwa();
  const completedCount = Object.values(progress.lessons).filter((lesson) => lesson.completed).length;
  const accountStats = user ? calculateProgressStats(progress) : null;
  const [bobaOpen, setBobaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close drawer automatically when route changes
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Exact links for desktop sub-bar
  const navLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'HSK 3.0', href: '/hsk' },
    { label: 'Boya', href: '/boya' },
    { label: 'Khóa học', href: '/khoa-hoc' },
    { label: 'Khám phá', href: '/kham-pha' },
    { label: 'Giới thiệu GV', href: '/giao-vien' },
    { label: 'Của tôi', href: '/me' },
    { label: 'Bảng xếp hạng', href: '/xep-hang' },
    { label: 'Sản phẩm đang phát triển', href: '/dang-phat-trien', ready: false },
  ];

  // Drawer menu items for mobile
  const drawerItems = [
    { label: 'Trang chủ', href: '/', icon: Home, desc: 'Bảng tin & bài học tiếp theo' },
    { label: 'Lộ trình New HSK 3.0', href: '/hsk', icon: GraduationCap, desc: 'HSK 1 đến HSK 6 & HSK 7-9' },
    { label: 'Giáo trình Hán ngữ Boya', href: '/boya', icon: BookOpen, desc: 'Boya Sơ cấp 1 & Sơ cấp 2' },
    { label: 'Khám phá & Trò chơi', href: '/kham-pha', icon: Compass, desc: 'Văn hóa, thành ngữ, thơ Đường' },
    { label: 'Bảng xếp hạng tuần', href: '/xep-hang', icon: Trophy, desc: 'Thi đua sao & điểm kinh nghiệm' },
    { label: 'Khóa học tiếng Trung', href: '/khoa-hoc', icon: Sparkles, desc: 'Các lớp học cùng cô Kim Chi' },
    { label: 'Giới thiệu Giáo viên', href: '/giao-vien', icon: Award, desc: 'Cô Nguyễn Thị Kim Chi' },
    { label: 'Luyện thi CSCA', href: '/csca', icon: Award, desc: 'Chứng chỉ chuẩn hóa' },
  ];

  const isActive = (href: string) => {
    if (href === '/hsk' && location.pathname.startsWith('/lesson/')) return true;
    if (href === '/' && (location.pathname === '/' || location.pathname === '/dashboard')) return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const handleLogout = async () => {
    try {
      await logoutAccount();
      setDrawerOpen(false);
      navigate('/');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleInstallApp = async () => {
    setDrawerOpen(false);
    await promptInstall();
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-gradient-to-br from-brand-dark via-brand to-brand-light shadow-[0_4px_24px_rgba(23,48,63,0.3)] pt-safe">
        {/* Top Header Row */}
        <div className="mx-auto flex max-w-[1180px] w-full items-center justify-between gap-2 px-3.5 sm:px-7 py-2.5 sm:py-3">
          {/* Logo & Slogan */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 no-underline group shrink-0">
            <div className="flex h-9 w-9 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-[10px] sm:rounded-[12px] bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Hanyu Daily"
                className="h-full w-full object-cover scale-[1.38]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-display text-lg sm:text-xl font-black text-white">每</span>';
                  }
                }}
              />
            </div>
            <div className="leading-tight">
              <div className="text-[16px] sm:text-[19px] font-bold tracking-[-0.4px] text-white">
                Hanyu Daily
              </div>
              <div className="text-[10px] sm:text-[11px] text-white/70 hidden xs:block">
                每日汉语 — Học mỗi ngày
              </div>
            </div>
          </Link>

          {/* Desktop Search Button */}
          <button
            type="button"
            onClick={openGlobalSearch}
            aria-label="Tìm kiếm nhanh toàn trang"
            className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/12 hover:bg-white/20 text-white/80 hover:text-white border border-white/16 transition-all text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer select-none group"
          >
            <Search className="w-3.5 h-3.5 text-white/70 group-hover:text-white shrink-0 transition-colors" />
            <span className="text-white/75 group-hover:text-white text-[12px] transition-colors">
              Tìm từ vựng, ngữ pháp...
            </span>
          </button>

          {/* Right actions: Streaks & User Avatar & Mobile Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Streak pill */}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-[20px] bg-white/16 px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12.5px] font-bold text-white select-none">
              <span>🔥</span>
              <span>{accountStats?.streak || 0}<span className="hidden xs:inline"> ngày</span></span>
            </span>
            {/* Completed lessons pill */}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-[20px] bg-gold px-2 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-[12.5px] font-bold text-[#7A5A0A] select-none">
              <span>📖</span>
              <span>{completedCount}<span className="hidden xs:inline"> bài</span></span>
            </span>

            {/* Mobile Search Button */}
            <button
              type="button"
              onClick={openGlobalSearch}
              aria-label="Tìm kiếm nhanh"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/16 text-white hover:bg-white/25 active:scale-95 transition-all"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* User account */}
            {user ? (
              <Link
                to="/me"
                title={`Tài khoản ${user.name}`}
                className="group relative flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center rounded-full overflow-hidden ring-2 ring-white/80 hover:ring-amber-300 shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(251,191,36,0.5)] transition-all duration-200 hover:scale-105 active:scale-95 no-underline bg-brand-dark"
              >
                {user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const parent = (e.target as HTMLElement).parentElement;
                      if (parent) {
                        const initial = user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U';
                        parent.innerHTML = `<span class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 text-[12px] sm:text-[13px] font-black text-[#3D2800] select-none">${initial}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-[12px] sm:text-[13px] font-black text-[#3D2800] uppercase select-none">
                    {user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U'}
                  </span>
                )}
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-white/16 hover:bg-white/25 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-[12.5px] font-bold text-white shadow-sm border border-white/20 transition-all hover:scale-105 active:scale-95 no-underline whitespace-nowrap"
              >
                Đăng nhập
              </Link>
            )}

            {/* Mobile Drawer Trigger (Hamburger Menu) */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Mở thực đơn di động"
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-white/16 text-white hover:bg-white/25 active:scale-95 transition-all ml-0.5"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Bottom Sub-Navigation Row (Exact Meiday Chinese Sub-Bar, hidden on mobile for cleaner screen space) */}
        <div className="hidden md:block bg-black/10 border-t border-white/10 w-full">
          <div className="mx-auto flex max-w-[1180px] w-full items-center gap-1.5 overflow-x-auto px-3 sm:px-5.5 py-1.5 scrollbar-none momentum-scroll overscroll-x-contain">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              if (item.ready === false) {
                return (
                  <span
                    key={item.label}
                    className="flex-shrink-0 whitespace-nowrap px-2.5 sm:px-3 py-1.5 text-center text-[12px] sm:text-[12.5px] font-medium text-white/50 cursor-not-allowed"
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex-shrink-0 whitespace-nowrap rounded-[12px] px-2.5 sm:px-3 py-1.5 text-center text-[13px] sm:text-[14px] font-bold no-underline transition-all active:scale-95 touch-manipulation ${
                    active
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-white/90 hover:bg-white/12'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-[85%] max-w-sm h-full bg-[#FDFBF7] shadow-2xl flex flex-col z-10 pt-safe pb-safe overflow-hidden animate-in slide-in-from-right duration-250">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200/80 bg-white/70">
              <div className="flex items-center gap-2.5">
                <img src="/logo.png" alt="Hanyu Daily" className="w-8 h-8 rounded-xl shadow-xs" />
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">Hanyu Daily</h3>
                  <p className="text-[11px] text-stone-500">Học tiếng Trung mỗi ngày</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Đóng menu"
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 momentum-scroll">
              {/* User Profile Card */}
              {user ? (
                <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-brand-dark ring-2 ring-brand/20 shrink-0">
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="flex w-full h-full items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 font-black text-xs text-[#3D2800]">
                          {user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U'}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-stone-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-stone-500 truncate">@{user.username}</p>
                    </div>
                  </div>
                  <Link
                    to="/me"
                    onClick={() => setDrawerOpen(false)}
                    className="px-2.5 py-1 bg-brand/10 hover:bg-brand/20 text-brand text-xs font-bold rounded-lg transition-colors no-underline shrink-0"
                  >
                    Hồ sơ
                  </Link>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-[#2C5670] to-[#17303F] text-white p-4 rounded-2xl shadow-xs">
                  <p className="text-xs font-bold mb-1">Đăng nhập tài khoản</p>
                  <p className="text-[11px] text-white/75 mb-3 leading-relaxed">
                    Lưu tiến độ học tập, điểm XP và đồng bộ thứ hạng cá nhân.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      to="/login"
                      onClick={() => setDrawerOpen(false)}
                      className="flex-1 text-center py-2 bg-white text-stone-900 font-bold text-xs rounded-xl shadow-xs no-underline"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setDrawerOpen(false)}
                      className="flex-1 text-center py-2 bg-white/20 hover:bg-white/30 text-white font-bold text-xs rounded-xl no-underline"
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              )}

              {/* Install PWA Button if available and not installed */}
              {!isStandalone && (isInstallable || isIos) && (
                <button
                  type="button"
                  onClick={handleInstallApp}
                  className="w-full p-3 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 flex items-center justify-between text-left group shadow-xs active:scale-98 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-900 flex items-center justify-center shrink-0 shadow-xs">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-950">Cài đặt ứng dụng Hanyu</p>
                      <p className="text-[10.5px] text-amber-800/80">Mở app toàn màn hình & học ngoại tuyến</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              {/* Quick Search Button in Mobile Drawer */}
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  openGlobalSearch();
                }}
                className="w-full p-3 rounded-2xl bg-white border border-stone-200/80 hover:border-brand/40 flex items-center justify-between text-left group shadow-xs active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">Tìm kiếm nhanh toàn trang</p>
                    <p className="text-[10.5px] text-stone-500">Từ vựng, ngữ pháp, bài học...</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Navigation Section */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 px-2 pt-2">
                  Danh mục học tập
                </p>
                {drawerItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`flex items-center justify-between p-2.5 rounded-xl no-underline transition-all ${
                        active
                          ? 'bg-brand text-white font-bold shadow-xs'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            active ? 'bg-white/20 text-white' : 'bg-stone-100 text-brand'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-tight">{item.label}</p>
                          <p
                            className={`text-[10px] leading-tight ${
                              active ? 'text-white/80' : 'text-stone-400'
                            }`}
                          >
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-stone-300'}`}
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Support & Boba tea */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    setBobaOpen(true);
                  }}
                  className="w-full p-2.5 rounded-xl bg-amber-100/60 border border-amber-200 text-stone-800 flex items-center gap-3 text-xs font-bold hover:bg-amber-100 transition-colors text-left"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-amber-950 flex items-center justify-center shrink-0">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-950">Mời cô ly trà sữa 🧋</p>
                    <p className="text-[10px] text-amber-800 font-normal">Tiếp thêm năng lượng phát triển website</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-stone-200/80 bg-white/70 space-y-3 shrink-0">
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <Link to="/dieu-khoan" onClick={() => setDrawerOpen(false)} className="hover:underline">
                  Điều khoản
                </Link>
                <span>·</span>
                <Link to="/chinh-sach-bao-mat" onClick={() => setDrawerOpen(false)} className="hover:underline">
                  Bảo mật
                </Link>
                <span>·</span>
                <span>v1.0 PWA</span>
              </div>

              {user && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full py-2 px-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng xuất tài khoản</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Boba Tea Modal */}
      <BobaTeaModal isOpen={bobaOpen} onClose={() => setBobaOpen(false)} />
    </>
  );
};
