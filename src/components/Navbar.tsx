import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  GraduationCap,
  BookOpen,
  Trophy,
  Coffee,
  Download,
  LogOut,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Award,
  Search,
  User,
  Flame,
  Compass,
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
  const { isStandalone, openInstallModal } = usePwa();
  const completedCount = Object.values(progress.lessons).filter((lesson) => lesson.completed).length;
  const accountStats = user ? calculateProgressStats(progress) : null;
  const [bobaOpen, setBobaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [curriculumOpen, setCurriculumOpen] = useState(false);
  const [extensionOpen, setExtensionOpen] = useState(false);
  const curriculumRef = useRef<HTMLDivElement>(null);
  const extensionRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (curriculumRef.current && !curriculumRef.current.contains(e.target as Node)) {
        setCurriculumOpen(false);
      }
      if (extensionRef.current && !extensionRef.current.contains(e.target as Node)) {
        setExtensionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close drawer and dropdowns automatically when route changes
  useEffect(() => {
    setDrawerOpen(false);
    setCurriculumOpen(false);
    setExtensionOpen(false);
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

  // Primary navigation links for desktop: Before "Giáo trình"
  const navLinksBefore = [
    { label: 'Trang chủ', href: '/' },
    { label: 'HSK 3.0', href: '/hsk' },
  ];

  const navLinksAfter = [
    { label: 'Khóa học', href: '/khoa-hoc' },
    { label: 'Xếp hạng', href: '/xep-hang' },
    { label: 'Giáo viên', href: '/giao-vien' },
  ];

  // Drawer menu items for mobile
  const drawerItems = [
    { label: 'Trang chủ', href: '/', icon: Home, desc: 'Bảng tin & bài học tiếp theo' },
    { label: 'Lộ trình New HSK 3.0', href: '/hsk', icon: GraduationCap, desc: 'HSK 1 đến HSK 6 & HSK 7-9' },
    { label: 'Tủ sách Giáo trình', href: '/giao-trinh', icon: BookOpen, desc: 'Giáo trình Boya & Thiếu nhi YCT' },
    { label: 'Tủ truyện tiếng Trung', href: '/tu-truyen', icon: BookOpen, desc: 'Truyện tranh song ngữ Hán - Việt', badge: 'MỚI' },
    { label: 'Bảng xếp hạng tuần', href: '/xep-hang', icon: Trophy, desc: 'Thi đua sao & điểm kinh nghiệm' },
    { label: 'Khóa học tiếng Trung', href: '/khoa-hoc', icon: Sparkles, desc: 'Các lớp học cùng cô Kim Chi' },
    { label: 'Giới thiệu Giáo viên', href: '/giao-vien', icon: Award, desc: 'Cô Nguyễn Thị Kim Chi' },
  ];

  const isActive = (href: string) => {
    if (href === '/hsk' && location.pathname.startsWith('/lesson/')) return true;
    if (href === '/giao-trinh' && (location.pathname.startsWith('/giao-trinh') || location.pathname.startsWith('/boya') || location.pathname.startsWith('/yct'))) return true;
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

  const handleInstallApp = () => {
    setDrawerOpen(false);
    openInstallModal();
  };

  return (
    <>
      {/* Header thanh lịch, 1 hàng duy nhất, nền kính mờ hiện đại */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] pt-safe">
        <div className="mx-auto flex max-w-7xl w-full items-center justify-between gap-2 sm:gap-3 px-3 sm:px-6 h-14 sm:h-16">
          
          {/* 1. Logo & Tên nền tảng */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 no-underline group shrink-0 min-w-0">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 border border-slate-200/70 p-0.5 shadow-2xs group-hover:scale-105 transition-transform">
              <img
                src="/gautruc-192.webp"
                alt="Hanyu Daily"
                width={192}
                height={192}
                decoding="async"
                className="h-full w-full object-cover scale-[1.35]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-display text-lg font-black text-slate-800">汉</span>';
                  }
                }}
              />
            </div>
            <div className="leading-tight min-w-0">
              <div className="text-sm sm:text-base md:text-lg font-black tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors truncate">
                Hanyu Daily
              </div>
              <div className="text-[10px] text-teal-700 font-bold uppercase tracking-wider hidden sm:block">
                泡菜学汉语 · Kim Chi học tiếng Trung
              </div>
            </div>
          </Link>

          {/* 2. Menu Điều Hướng Desktop (Hàng ngang tích hợp) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1 rounded-2xl border border-slate-200/50">
            {/* Các tab trước Mở rộng: Trang chủ, HSK 3.0, Boya, YCT */}
            {navLinksBefore.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    active
                      ? 'bg-gradient-to-r from-sky-100 to-pink-100 text-sky-950 font-black shadow-2xs border border-sky-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-bold'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Tab Giáo trình (Boya & YCT) */}
            <div className="relative" ref={curriculumRef}>
              <button
                type="button"
                onClick={() => setCurriculumOpen(!curriculumOpen)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer select-none ${
                  location.pathname.startsWith('/giao-trinh') ||
                  location.pathname.startsWith('/boya') ||
                  location.pathname.startsWith('/yct')
                    ? 'bg-gradient-to-r from-sky-100 to-pink-100 text-sky-950 font-black shadow-2xs border border-sky-200/80'
                    : curriculumOpen
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                title="Giáo trình Hán ngữ chuẩn (Boya & YCT)"
              >
                <span>Giáo trình</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    curriculumOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu sổ xuống khi bấm vô Giáo trình */}
              {curriculumOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-100 mb-1.5">
                    <span>Tủ sách giáo trình</span>
                    <span className="text-[10px] text-teal-700 font-extrabold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                      Boya & YCT
                    </span>
                  </div>

                  {/* Mục 1: Giáo trình Boya */}
                  <Link
                    to="/boya"
                    onClick={() => setCurriculumOpen(false)}
                    className="block p-2.5 rounded-xl bg-gradient-to-br from-sky-50/90 via-sky-50/40 to-indigo-50/30 border border-sky-200/80 hover:border-sky-400 transition-all group no-underline text-inherit shadow-2xs mb-1.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <span className="font-black text-slate-900 text-xs sm:text-sm group-hover:text-sky-700">
                          Giáo trình Boya
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[9.5px] font-black uppercase tracking-wider border border-sky-200">
                        ĐH Bắc Kinh
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 pl-9">
                      Giáo trình chuẩn cho người lớn & sinh viên, phản xạ giao tiếp và ngữ pháp toàn diện.
                    </p>
                    <div className="mt-1.5 pl-9 flex items-center gap-1 text-[10.5px] font-bold text-sky-800 group-hover:translate-x-0.5 transition-transform">
                      <span>Xem Boya Sơ cấp 1 & Sơ cấp 2</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>

                  {/* Mục 2: Giáo trình YCT */}
                  <Link
                    to="/yct"
                    onClick={() => setCurriculumOpen(false)}
                    className="block p-2.5 rounded-xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-teal-50/30 border border-amber-200/80 hover:border-amber-400 transition-all group no-underline text-inherit shadow-2xs mb-1.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span className="font-black text-slate-900 text-xs sm:text-sm group-hover:text-amber-900">
                          Tủ sách Thiếu nhi YCT
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[9.5px] font-black uppercase tracking-wider border border-amber-300">
                        Thiếu nhi
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 pl-9">
                      Giáo trình chuẩn YCT 1 đến 6 tranh vẽ sinh động, trò chơi tương tác và audio cho bé.
                    </p>
                    <div className="mt-1.5 pl-9 flex items-center gap-1 text-[10.5px] font-bold text-amber-800 group-hover:translate-x-0.5 transition-transform">
                      <span>Xem sách YCT 1 đến 6</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>

                  {/* Link chân menu: Xem tổng quan hệ thống giáo trình */}
                  <Link
                    to="/giao-trinh"
                    onClick={() => setCurriculumOpen(false)}
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 text-[11px] font-bold text-slate-700 hover:text-slate-900 transition-colors border-t border-slate-100 pt-2 no-underline"
                  >
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <Compass className="w-3.5 h-3.5 text-slate-400" />
                      <span>Tổng quan tủ sách Giáo trình</span>
                    </span>
                    <ChevronRight className="w-3 h-3 text-slate-400" />
                  </Link>
                </div>
              )}
            </div>

            {/* Tab Mở rộng nằm ngay bên phải Tab Giáo trình */}
            <div className="relative" ref={extensionRef}>
              <button
                type="button"
                onClick={() => setExtensionOpen(!extensionOpen)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer select-none ${
                  location.pathname.startsWith('/tu-truyen') ||
                  location.pathname.startsWith('/mo-rong')
                    ? 'bg-gradient-to-r from-sky-100 to-pink-100 text-sky-950 font-black shadow-2xs border border-sky-200/80'
                    : extensionOpen
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
                title="Khám phá các nội dung mở rộng"
              >
                <span>Mở rộng</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${
                    extensionOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'
                  }`}
                />
              </button>

              {/* Dropdown Menu sổ xuống khi bấm vô Mở rộng */}
              {extensionOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2.5 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between border-b border-slate-100 mb-1.5">
                    <span>Kho tàng mở rộng</span>
                    <span className="text-[10px] text-teal-700 font-extrabold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                      Phong phú
                    </span>
                  </div>

                  {/* Ô thứ 1: Tủ truyện (Điểm nhấn chính) */}
                  <Link
                    to="/tu-truyen"
                    onClick={() => setExtensionOpen(false)}
                    className="block p-2.5 rounded-xl bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-teal-50/30 border border-amber-200/80 hover:border-amber-400 transition-all group no-underline text-inherit shadow-2xs mb-1.5"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs shadow-xs">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <span className="font-black text-slate-900 text-xs sm:text-sm group-hover:text-amber-900">
                          Tủ truyện
                        </span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-rose-500 text-white text-[9.5px] font-black uppercase tracking-wider shadow-2xs">
                        MỚI
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug line-clamp-2 pl-9">
                      Đọc truyện tranh song ngữ Hán - Việt, minh họa sống động, kèm audio & từ vựng.
                    </p>
                    <div className="mt-1.5 pl-9 flex items-center gap-1 text-[10.5px] font-bold text-amber-800 group-hover:translate-x-0.5 transition-transform">
                      <span>Khám phá các truyện mới</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>

                </div>
              )}
            </div>

            {/* Các tab sau Mở rộng: Khóa học, Xếp hạng, Giáo viên */}
            {navLinksAfter.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-3.5 py-1.5 rounded-xl text-xs transition-all ${
                    active
                      ? 'bg-gradient-to-r from-sky-100 to-pink-100 text-sky-950 font-black shadow-2xs border border-sky-200/80'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60 font-bold'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* 3. Tiện ích bên phải: Tra cứu, Chuỗi ngày, Tài khoản */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Nút tìm kiếm nhanh Desktop */}
            <button
              type="button"
              onClick={openGlobalSearch}
              aria-label="Tìm kiếm nhanh toàn trang"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/70 text-xs transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-xs text-slate-500">Tra từ...</span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-400">
                Ctrl K
              </kbd>
            </button>

            {/* Streak Pill */}
            <span className="inline-flex items-center gap-1 sm:gap-1.5 rounded-xl bg-amber-50 border border-amber-200/80 px-2 sm:px-2.5 py-1 text-xs font-bold text-amber-900 select-none shadow-2xs shrink-0">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
              <span>{accountStats?.streak || 0}</span>
              <span className="hidden sm:inline font-medium text-amber-800/80">ngày</span>
            </span>

            {/* Mobile Search Icon */}
            <button
              type="button"
              onClick={openGlobalSearch}
              aria-label="Tìm kiếm nhanh"
              className="lg:hidden flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 active:scale-95 transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Tài khoản Người dùng (Avatar) - Luôn hiển thị trọn vẹn, không bị che */}
            {user ? (
              <Link
                to="/me"
                title={`Tài khoản ${user.name}`}
                className="group relative flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full overflow-hidden ring-2 ring-teal-500/60 hover:ring-teal-500 transition-all hover:scale-105 active:scale-95 no-underline bg-slate-100 shadow-2xs"
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
                        parent.innerHTML = `<span class="flex h-full w-full items-center justify-center bg-teal-500 text-xs font-black text-white select-none">${initial}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-teal-500 text-xs font-black text-white uppercase select-none">
                    {user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U'}
                  </span>
                )}
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-xs font-bold text-white shadow-xs transition-all hover:scale-[1.02] active:scale-98 no-underline whitespace-nowrap shrink-0"
              >
                Đăng nhập
              </Link>
            )}

            {/* Nút Menu Hamburger cho Mobile */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Mở thực đơn di động"
              className="md:hidden flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/70 text-slate-700 active:scale-95 transition-all shrink-0"
            >
              <Menu className="w-4 h-4" />
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 pt-safe pb-safe overflow-hidden animate-in slide-in-from-right duration-250">
            
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200/80 bg-slate-50/50">
              <div className="flex items-center gap-2.5">
                <img src="/gautruc-192.webp" alt="Hanyu Daily" width={192} height={192} decoding="async" className="w-8 h-8 rounded-xl shadow-xs" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Hanyu Daily</h3>
                  <p className="text-[11px] text-slate-500">泡菜学汉语 · Kim Chi học tiếng Trung</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Đóng menu"
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 momentum-scroll">
              
              {/* User Profile Card */}
              {user ? (
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-teal-600 ring-2 ring-teal-200 shrink-0">
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="flex w-full h-full items-center justify-center font-black text-xs text-white">
                          {user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U'}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">@{user.username}</p>
                    </div>
                  </div>
                  <Link
                    to="/me"
                    onClick={() => setDrawerOpen(false)}
                    className="px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg transition-colors no-underline shrink-0"
                  >
                    Hồ sơ
                  </Link>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-4 rounded-2xl shadow-xs">
                  <p className="text-xs font-bold mb-1">Đăng nhập tài khoản</p>
                  <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                    Lưu tiến độ học tập, điểm XP và đồng bộ thứ hạng cá nhân.
                  </p>
                  <div className="flex gap-2">
                    <Link
                      to="/login"
                      onClick={() => setDrawerOpen(false)}
                      className="flex-1 text-center py-2 bg-white text-slate-900 font-bold text-xs rounded-xl shadow-xs no-underline"
                    >
                      Đăng nhập
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setDrawerOpen(false)}
                      className="flex-1 text-center py-2 bg-white/15 hover:bg-white/25 text-white font-bold text-xs rounded-xl no-underline"
                    >
                      Đăng ký
                    </Link>
                  </div>
                </div>
              )}

              {/* Install PWA Button if available */}
              {!isStandalone && (
                <button
                  type="button"
                  onClick={handleInstallApp}
                  className="w-full p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between text-left group shadow-xs active:scale-98 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                      <Download className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-amber-950">Cài đặt ứng dụng Hanyu</p>
                      <p className="text-[10.5px] text-amber-800/80">Mở toàn màn hình & học nhanh</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}

              {/* Navigation Items */}
              <div className="space-y-1">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 pt-2">
                  Danh mục học tập
                </p>
                {drawerItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <div key={item.href} className="space-y-1">
                      <Link
                        to={item.href}
                        onClick={() => setDrawerOpen(false)}
                        className={`flex items-center justify-between p-2.5 rounded-xl no-underline transition-all ${
                          active
                            ? 'bg-gradient-to-r from-sky-500 to-pink-500 text-white font-bold shadow-xs'
                            : 'text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                              active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <p className="text-xs font-bold leading-tight">{item.label}</p>
                              {'badge' in item && Boolean((item as any).badge) && (
                                <span className="px-1.5 py-0.2 rounded-md bg-rose-500 text-white text-[9px] font-black uppercase shadow-2xs">
                                  {(item as any).badge}
                                </span>
                              )}
                            </div>
                            <p
                              className={`text-[10px] leading-tight ${
                                active ? 'text-slate-100' : 'text-slate-400'
                              }`}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight
                          className={`w-3.5 h-3.5 ${active ? 'text-white' : 'text-slate-300'}`}
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>

              {/* Support / Boba tea */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setDrawerOpen(false);
                    setBobaOpen(true);
                  }}
                  className="w-full p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-slate-800 flex items-center gap-3 text-xs font-bold hover:bg-amber-100 transition-colors text-left cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
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
            <div className="p-4 border-t border-slate-200/80 bg-slate-50/50 space-y-3 shrink-0">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <Link to="/dieu-khoan" onClick={() => setDrawerOpen(false)} className="hover:underline">
                  Điều khoản
                </Link>
                <span>·</span>
                <Link to="/chinh-sach-bao-mat" onClick={() => setDrawerOpen(false)} className="hover:underline">
                  Bảo mật
                </Link>
                <span>·</span>
                <span>v1.0.0</span>
              </div>

              {user && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Đăng xuất tài khoản</span>
                </button>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Modal Mời trà sữa */}
      <BobaTeaModal isOpen={bobaOpen} onClose={() => setBobaOpen(false)} />
    </>
  );
};

export default Navbar;
