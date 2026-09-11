import React, { useState, useEffect } from 'react';
import { Download, Share, X, RefreshCw, WifiOff, PlusSquare } from 'lucide-react';
import { usePwa } from '../lib/pwa';

const DISMISS_STORAGE_KEY = 'hanyu_pwa_dismissed_time';
const DISMISS_DURATION_DAYS = 7;

export const PwaInstallPrompt: React.FC = () => {
  const {
    isInstallable,
    isStandalone,
    isIos,
    isOffline,
    updateAvailable,
    promptInstall,
    applyUpdate,
  } = usePwa();

  const [isDismissed, setIsDismissed] = useState(true);
  const [showIosGuide, setShowIosGuide] = useState(false);

  useEffect(() => {
    try {
      const dismissedTime = localStorage.getItem(DISMISS_STORAGE_KEY);
      if (dismissedTime) {
        const diffMs = Date.now() - parseInt(dismissedTime, 10);
        const diffDays = diffMs / (1000 * 60 * 60 * 24);
        if (diffDays < DISMISS_DURATION_DAYS) {
          setIsDismissed(true);
          return;
        }
      }
      setIsDismissed(false);
    } catch {
      setIsDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setShowIosGuide(false);
    try {
      localStorage.setItem(DISMISS_STORAGE_KEY, Date.now().toString());
    } catch (e) {
      console.warn('Cannot set localStorage dismiss:', e);
    }
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const installed = await promptInstall();
      if (installed) {
        handleDismiss();
      }
    } else if (isIos) {
      setShowIosGuide(true);
    }
  };

  // 1. If an update is available, always show update banner with top priority
  if (updateAvailable) {
    return (
      <aside
        aria-label="Thông báo cập nhật ứng dụng"
        className="fixed bottom-18 md:bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 mb-safe animate-in fade-in slide-in-from-bottom-4 duration-300"
      >
        <div className="bg-[#2C5670] text-white p-4 rounded-2xl shadow-xl border border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <RefreshCw className="w-5 h-5 text-amber-300 animate-spin" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold truncate">Đã có bản cập nhật mới!</p>
              <p className="text-xs text-white/80 truncate">Tải lại để nhận tính năng mới nhất</p>
            </div>
          </div>
          <button
            onClick={applyUpdate}
            className="px-3.5 py-1.5 bg-amber-400 hover:bg-amber-300 text-stone-900 font-semibold text-xs rounded-xl shadow-sm shrink-0 transition-colors"
          >
            Làm mới
          </button>
        </div>
      </aside>
    );
  }

  // 2. If offline, display a gentle offline status badge
  if (isOffline) {
    return (
      <aside
        aria-label="Thông báo chế độ ngoại tuyến"
        className="fixed bottom-18 md:bottom-4 left-1/2 -translate-x-1/2 z-40 mb-safe animate-in fade-in duration-300 pointer-events-none"
      >
        <div className="bg-stone-900/90 backdrop-blur-sm text-stone-100 px-4 py-2 rounded-full shadow-lg text-xs font-medium flex items-center gap-2 border border-stone-700">
          <WifiOff className="w-3.5 h-3.5 text-amber-400" />
          <span>Đang ngoại tuyến — bạn vẫn có thể học các bài học đã tải</span>
        </div>
      </aside>
    );
  }

  // Do not show install prompt if already installed (standalone) or user recently dismissed
  if (isStandalone || isDismissed) {
    return null;
  }

  // 3. Show iOS Safari Add to Home Screen modal guide
  if (showIosGuide) {
    return (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4">
        <div className="bg-cream border border-[#E5E0D8] text-[#2C5670] w-full max-w-md rounded-3xl p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
          <button
            onClick={handleDismiss}
            aria-label="Đóng hướng dẫn"
            className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1.5 rounded-full hover:bg-stone-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Hanyu Daily" className="w-12 h-12 rounded-2xl shadow-md" />
            <div>
              <h3 className="font-bold text-base text-stone-900">Cài đặt Hanyu Daily trên iOS</h3>
              <p className="text-xs text-stone-500">Mở app toàn màn hình & học ngoại tuyến</p>
            </div>
          </div>

          <div className="space-y-3 my-4 text-sm text-stone-700">
            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 border border-stone-200/70">
              <span className="w-6 h-6 rounded-full bg-[#2C5670] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </span>
              <div>
                Bấm nút <span className="font-semibold text-stone-900">Chia sẻ</span> (biểu tượng <Share className="w-4 h-4 inline text-blue-600 mx-0.5 align-text-bottom" />) trên thanh công cụ Safari.
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 border border-stone-200/70">
              <span className="w-6 h-6 rounded-full bg-[#2C5670] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </span>
              <div>
                Cuộn xuống và chọn <span className="font-semibold text-stone-900">Thêm vào MH chính</span> (<PlusSquare className="w-4 h-4 inline text-stone-700 mx-0.5 align-text-bottom" /> Add to Home Screen).
              </div>
            </div>

            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/70 border border-stone-200/70">
              <span className="w-6 h-6 rounded-full bg-[#2C5670] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </span>
              <div>
                Bấm <span className="font-semibold text-stone-900">Thêm (Add)</span> ở góc trên để hoàn tất.
              </div>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="w-full py-2.5 bg-[#2C5670] text-white font-semibold text-sm rounded-xl hover:bg-[#23455a] transition-colors shadow-sm"
          >
            Đã hiểu
          </button>
        </div>
      </div>
    );
  }

  // 4. Install Banner (for Android/Chrome or iOS Safari)
  if (isInstallable || isIos) {
    return (
      <aside
        aria-label="Cài đặt ứng dụng Hanyu Daily"
        className="fixed bottom-18 md:bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-40 mb-safe animate-in fade-in slide-in-from-bottom-3 duration-300"
      >
        <div className="bg-white/95 backdrop-blur-md text-stone-800 p-3.5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/icon-192.png"
              alt="Hanyu Daily"
              className="w-10 h-10 rounded-xl shadow-sm shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-stone-900 truncate">Cài đặt Hanyu Daily</p>
              <p className="text-[11px] text-stone-500 truncate">Học mượt mà, mở tức thì & Offline</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 bg-[#2C5670] hover:bg-[#23455a] text-white font-medium text-xs rounded-xl shadow-sm flex items-center gap-1 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Cài app</span>
            </button>
            <button
              onClick={handleDismiss}
              aria-label="Đóng thông báo"
              className="p-1.5 text-stone-400 hover:text-stone-600 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    );
  }

  return null;
};
