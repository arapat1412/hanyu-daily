import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, GraduationCap, BookOpen, Sparkles, User } from 'lucide-react';
import { useAuth } from '../lib/auth';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    {
      label: 'Trang chủ',
      href: '/',
      icon: Home,
      isActive: (path: string) => path === '/' || path === '/dashboard',
    },
    {
      label: 'HSK 3.0',
      href: '/hsk',
      icon: GraduationCap,
      isActive: (path: string) => path.startsWith('/hsk') || path.startsWith('/lesson/'),
    },
    {
      label: 'Giáo trình',
      href: '/giao-trinh',
      icon: BookOpen,
      isActive: (path: string) => path.startsWith('/giao-trinh') || path.startsWith('/boya') || path.startsWith('/yct'),
    },
    {
      label: 'Tủ truyện',
      href: '/tu-truyen',
      icon: Sparkles,
      isActive: (path: string) => path.startsWith('/tu-truyen') || path.startsWith('/mo-rong'),
    },
    {
      label: 'Của tôi',
      href: user ? '/me' : '/login',
      icon: User,
      isActive: (path: string) => path === '/me' || path === '/login' || path === '/register',
    },
  ];

  // Khi người dùng đang đọc một truyện cụ thể (/tu-truyen/:id), ẩn thanh điều hướng di động để trải nghiệm đọc truyện tràn viền
  if (location.pathname.startsWith('/tu-truyen/') && location.pathname !== '/tu-truyen') {
    return null;
  }

  return (
    <nav
      aria-label="Thanh điều hướng di động"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-stone-200/90 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] pb-safe transition-all"
    >
      <div className="grid grid-cols-5 h-14 max-w-md mx-auto items-center px-1">
        {navItems.map((item) => {
          const active = item.isActive(location.pathname);
          const Icon = item.icon;

          return (
            <NavLink
              key={item.label}
              to={item.href}
              className={`flex flex-col items-center justify-center py-1 select-none transition-all active:scale-90 no-underline touch-manipulation relative ${
                active ? 'text-[#2C5670]' : 'text-stone-400 hover:text-stone-600'
              }`}
            >
              {/* Active pill background */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-all duration-200 ${
                  active ? 'bg-[#2C5670]/10 px-3 py-0.5' : 'px-2 py-0.5'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    active ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />
              </div>
              <span
                className={`text-[10px] mt-0.5 tracking-tight transition-colors ${
                  active ? 'font-bold text-[#2C5670]' : 'font-medium text-stone-500'
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
