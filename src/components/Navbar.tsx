import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BobaTeaModal } from './BobaTeaModal';
import { useProgress } from '../lib/hsk';
import { useAuth } from '../lib/auth';
import { calculateProgressStats } from '../lib/progress-stats';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const progress = useProgress();
  const { user } = useAuth();
  const completedCount = Object.values(progress.lessons).filter(lesson => lesson.completed).length;
  const accountStats = user ? calculateProgressStats(progress) : null;
  const [bobaOpen, setBobaOpen] = useState(false);

  // Exact links from Meiday Chinese bundle (var Gu)
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

  const isActive = (href: string) => {
    if (href === '/hsk' && location.pathname.startsWith('/lesson/')) return true;
    if (href === '/' && (location.pathname === '/' || location.pathname === '/dashboard')) return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-30 bg-gradient-to-br from-brand-dark via-brand to-brand-light shadow-[0_4px_24px_rgba(23,48,63,0.3)]">
        {/* Top Header Row */}
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-3 px-4 sm:px-7 py-3">
          {/* Logo & Slogan */}
          <Link to="/" className="flex items-center gap-3 no-underline group">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)] group-hover:scale-105 transition-transform">
              <img 
                src="/logo.png" 
                alt="Hanyu Daily" 
                className="h-full w-full object-cover scale-[1.38]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-display text-xl font-black text-white">每</span>';
                  }
                }}
              />
            </div>
            <div className="leading-tight">
              <div className="text-[19px] font-bold tracking-[-0.4px] text-white">
                Hanyu Daily
              </div>
              <div className="text-[11px] text-white/70">
                每日汉语 — Học mỗi ngày
              </div>
            </div>
          </Link>

          {/* Right actions: Streaks & User Avatar */}
          <div className="flex items-center gap-2.5">
            {/* Streak pill */}
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[20px] bg-white/16 px-3 py-1.5 text-[12.5px] font-bold text-white">
              <span>🔥</span>
              <span>{accountStats?.streak || 0} ngày</span>
            </span>
            {/* Completed lessons pill */}
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[20px] bg-gold px-3 py-1.5 text-[12.5px] font-bold text-[#7A5A0A]">
              <span>📖</span>
              <span>{completedCount} bài</span>
            </span>

            {/* User account */}
            {user ? (
              <Link
                to="/me"
                title={`Tài khoản ${user.name}`}
                className="group relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full overflow-hidden ring-2 ring-white/80 hover:ring-amber-300 shadow-[0_2px_8px_rgba(0,0,0,0.25)] hover:shadow-[0_0_12px_rgba(251,191,36,0.5)] transition-all duration-200 hover:scale-105 no-underline bg-brand-dark"
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
                        parent.innerHTML = `<span class="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 to-amber-500 text-[13px] font-black text-[#3D2800] select-none">${initial}</span>`;
                      }
                    }}
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-[13px] font-black text-[#3D2800] uppercase select-none">
                    {user.name.trim().split(/\s+/).pop()?.[0]?.toUpperCase() || 'U'}
                  </span>
                )}
              </Link>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full bg-white/16 hover:bg-white/25 px-3.5 py-1.5 text-[12.5px] font-bold text-white shadow-sm border border-white/20 transition-all hover:scale-105 no-underline whitespace-nowrap"
              >
                Đăng nhập
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Sub-Navigation Row (Exact Meiday Chinese Sub-Bar) */}
        <div className="bg-black/10 border-t border-white/10">
          <div className="mx-auto flex max-w-[1180px] items-center gap-1.5 overflow-x-auto px-4 sm:px-5.5 py-1.5 scrollbar-none">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              if (item.ready === false) {
                return (
                  <span
                    key={item.label}
                    className="flex-shrink-0 whitespace-nowrap px-3 py-1.5 text-center text-[12.5px] font-medium text-white/50 cursor-not-allowed"
                  >
                    {item.label}
                  </span>
                );
              }
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex-shrink-0 whitespace-nowrap rounded-[12px] px-3 py-1.5 text-center text-[14px] font-bold no-underline transition-all ${
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

      {/* Boba Tea Modal */}
      <BobaTeaModal isOpen={bobaOpen} onClose={() => setBobaOpen(false)} />
    </>
  );
};
