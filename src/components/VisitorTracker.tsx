import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/admin";

const VISITOR_ID_KEY = "hanyu-anonymous-visitor-id";
const RECENT_VIEWS_KEY = "hanyu-recent-page-views-v1";
const PAGE_VIEW_DEDUP_MS = 30 * 1000;
const PAGE_VIEW_DEBOUNCE_MS = 750;
const recentPageViews = new Map<string, number>();

function createVisitorId() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
}

function getVisitorId() {
  try {
    const existing = window.localStorage.getItem(VISITOR_ID_KEY);
    if (existing && /^[0-9a-f-]{36}$/i.test(existing)) return existing;
    const created = createVisitorId();
    window.localStorage.setItem(VISITOR_ID_KEY, created);
    return created;
  } catch {
    return createVisitorId();
  }
}

function reservePageView(path: string) {
  const now = Date.now();
  const memoryTimestamp = recentPageViews.get(path) || 0;
  if (now - memoryTimestamp < PAGE_VIEW_DEDUP_MS) return false;

  try {
    const stored = JSON.parse(
      window.sessionStorage.getItem(RECENT_VIEWS_KEY) || "{}",
    ) as Record<string, number>;
    const recent = Object.fromEntries(
      Object.entries(stored)
        .filter(([, timestamp]) => now - timestamp < PAGE_VIEW_DEDUP_MS)
        .sort((first, second) => second[1] - first[1])
        .slice(0, 19),
    );
    if (now - (recent[path] || 0) < PAGE_VIEW_DEDUP_MS) return false;
    recent[path] = now;
    window.sessionStorage.setItem(RECENT_VIEWS_KEY, JSON.stringify(recent));
  } catch {
    // The in-memory guard still prevents duplicate SPA events.
  }

  recentPageViews.set(path, now);
  return true;
}

export function VisitorTracker() {
  const { pathname } = useLocation();
  const visitorId = useRef<string>();

  if (!visitorId.current) visitorId.current = getVisitorId();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (reservePageView(pathname)) {
        void trackPageView(visitorId.current!, pathname);
      }
    }, PAGE_VIEW_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
