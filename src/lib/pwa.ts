import { useEffect, useState } from 'react';

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// Global state for deferred prompt
let deferredPrompt: BeforeInstallPromptEvent | null = null;
let updateWaitingRegistration: ServiceWorkerRegistration | null = null;

const listeners = new Set<() => void>();
function notifyListeners() {
  listeners.forEach((callback) => callback());
}

/**
 * Check if the app is currently running in Standalone (Installed PWA) mode
 */
export function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true ||
    document.referrer.includes('android-app://')
  );
}

/**
 * Check if user is on an iOS device (iPhone, iPad, iPod) and not yet installed to home screen
 */
export function isIosDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent.toLowerCase();
  const isApple =
    /iphone|ipad|ipod/.test(ua) ||
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
  return isApple && !isStandalone();
}

/**
 * Check if the user is in an in-app browser on iOS (Zalo, Messenger, Facebook, TikTok...)
 */
export function isIosInAppBrowser(): boolean {
  if (typeof window === 'undefined') return false;
  const ua = window.navigator.userAgent.toLowerCase();
  return (
    isIosDevice() &&
    /zalo|fbav|fbios|fban|messenger|instagram|line|micromessenger|tiktok|snapchat/i.test(ua)
  );
}

/**
 * Alias for backward compatibility
 */
export const isIosSafari = isIosDevice;

/**
 * Trigger PWA Install Modal / Guide from anywhere in the app
 */
export function openPwaInstallModal(): void {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('hanyu-open-pwa-install'));
  }
}

/**
 * Prompt user to install the PWA (Chrome, Edge, Android)
 */
export async function promptInstall(): Promise<boolean> {
  if (!deferredPrompt) return false;

  try {
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    deferredPrompt = null;
    notifyListeners();
    return choice.outcome === 'accepted';
  } catch (err) {
    console.error('[PWA] Error triggering install prompt:', err);
    return false;
  }
}

/**
 * Apply the waiting Service Worker update and reload the page
 */
export function applyUpdate(): void {
  if (updateWaitingRegistration && updateWaitingRegistration.waiting) {
    updateWaitingRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
  window.location.reload();
}

/**
 * Register Service Worker in production
 */
export function registerServiceWorker(): void {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }

  // Listen for Chrome/Android beforeinstallprompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
    notifyListeners();
  });

  // Listen for successful installation
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    notifyListeners();
    console.log('[PWA] Hanyu Daily was successfully installed as an app.');
  });

  // Only activate Service Worker in production or preview to avoid breaking HMR in dev
  if (!import.meta.env.PROD) {
    // In dev mode, unregister any legacy service workers on localhost
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
    return;
  }

  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((registration) => {
        console.log('[PWA] Service Worker registered with scope:', registration.scope);

        // Check if an updated worker is already waiting
        if (registration.waiting) {
          updateWaitingRegistration = registration;
          notifyListeners();
        }

        // Listen for new updates found
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.addEventListener('statechange', () => {
            if (
              installingWorker.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              // New content is available once current tabs close or user refreshes
              updateWaitingRegistration = registration;
              notifyListeners();
            }
          });
        });
      })
      .catch((err) => {
        console.error('[PWA] Service Worker registration failed:', err);
      });

    // Refresh page when the new Service Worker takes over (after skipWaiting)
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });
  });
}

/**
 * React hook to interact with PWA installation and update states
 */
export function usePwa() {
  const [, setTick] = useState(0);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleUpdate = () => setTick((t) => t + 1);
    listeners.add(handleUpdate);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      listeners.delete(handleUpdate);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    isInstallable: !!deferredPrompt,
    isStandalone: isStandalone(),
    isIos: isIosDevice(),
    isInAppBrowser: isIosInAppBrowser(),
    isOffline,
    updateAvailable: !!updateWaitingRegistration,
    promptInstall,
    applyUpdate,
    openInstallModal: openPwaInstallModal,
  };
}
