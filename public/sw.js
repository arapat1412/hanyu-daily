/**
 * Hanyu Daily Service Worker
 * Lightweight Vanilla Service Worker (~2KB, zero external dependencies)
 * Optimized for instant load (~0.1s), offline learning, and safe Supabase bypass.
 */

const CACHE_VERSION = 'v2';
const STATIC_CACHE = `hanyu-static-${CACHE_VERSION}`;
const DATA_CACHE = `hanyu-data-${CACHE_VERSION}`;
const CDN_CACHE = `hanyu-cdn-${CACHE_VERSION}`;
const CURRENT_CACHES = [STATIC_CACHE, DATA_CACHE, CDN_CACHE];

// Core App Shell assets to pre-cache on install
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.ico',
  '/logo.png',
  '/gautruc.png',
  '/icon-192.png',
  '/icon-512.png',
];

// Install Event: pre-cache app shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(async (cache) => {
        // Resilient pre-caching: continue even if an optional asset fails
        await Promise.all(
          PRECACHE_ASSETS.map(async (url) => {
            try {
              const response = await fetch(url);
              if (response.ok) {
                await cache.put(url, response);
              }
            } catch (err) {
              console.warn('[SW] Pre-cache failed for:', url, err);
            }
          })
        );
      })
      .then(() => self.skipWaiting())
  );
});

// Activate Event: clean up legacy caches and claim active clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (!CURRENT_CACHES.includes(key) && key.startsWith('hanyu-')) {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch Event: handle caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests and http/https protocols
  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) return;

  const url = new URL(request.url);

  // 1. Supabase API / Auth: Network-Only. NEVER cache.
  if (
    url.hostname.includes('supabase.co') ||
    url.pathname.startsWith('/rest/v1/') ||
    url.pathname.startsWith('/auth/v1/')
  ) {
    return; // Pass through directly to browser network
  }

  // 2. SPA Navigation requests (e.g. /hsk/hsk1, /boya, /lesson/1)
  // Network-first with fallback to cached index.html so refreshing offline works flawlessly
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(STATIC_CACHE).then((cache) => cache.put('/index.html', clone));
          }
          return response;
        })
        .catch(async () => {
          const cachedIndex = await caches.match('/index.html');
          return cachedIndex || caches.match('/');
        })
    );
    return;
  }

  // 3. Lesson and Quiz Data (/data/hsk/, /data/hsk-annotations/, /hoc-va-choi/*.json)
  // Stale-While-Revalidate: Return cached content instantly (~0.1s) and refresh in background
  const isLessonData =
    url.pathname.startsWith('/data/') ||
    (url.pathname.startsWith('/hoc-va-choi/') && url.pathname.endsWith('.json'));

  if (isLessonData) {
    event.respondWith(
      caches.open(DATA_CACHE).then(async (cache) => {
        const cachedResponse = await cache.match(request);

        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => null);

        // Return cached response immediately if available, otherwise wait for network
        return cachedResponse || (await networkFetch);
      })
    );
    return;
  }

  // 4. External CDN Assets (Hanzi Writer stroke data, Google Fonts)
  // Cache-First: Once fetched, keep cached for offline Hanzi stroke animation & fonts
  const isCdn =
    url.hostname.includes('cdn.jsdelivr.net') ||
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com');

  if (isCdn) {
    event.respondWith(
      caches.open(CDN_CACHE).then(async (cache) => {
        const cached = await cache.match(request);
        if (cached) return cached;

        try {
          const response = await fetch(request);
          if (response && (response.ok || response.type === 'opaque')) {
            cache.put(request, response.clone());
          }
          return response;
        } catch (err) {
          return cached || null;
        }
      })
    );
    return;
  }

  // 5. Static Assets (Vite hashed bundles, images, icons on same origin)
  if (url.origin === self.location.origin) {
    // For hashed /assets/ bundles, Cache-First is fastest & safest (hashes change on every build)
    const isHashedAsset = url.pathname.startsWith('/assets/');

    if (isHashedAsset) {
      event.respondWith(
        caches.open(STATIC_CACHE).then(async (cache) => {
          const cached = await cache.match(request);
          if (cached) return cached;

          const response = await fetch(request);
          if (response && response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        })
      );
      return;
    }

    // For other same-origin static assets: Stale-While-Revalidate
    event.respondWith(
      caches.open(STATIC_CACHE).then(async (cache) => {
        const cached = await cache.match(request);

        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.ok) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => null);

        return cached || (await networkFetch);
      })
    );
  }
});

// Support manual skip-waiting trigger from the client app
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
