import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../lib/admin";

const VISITOR_ID_KEY = "hanyu-anonymous-visitor-id";

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

export function VisitorTracker() {
  const { pathname } = useLocation();
  const visitorId = useRef<string>();

  if (!visitorId.current) visitorId.current = getVisitorId();

  useEffect(() => {
    void trackPageView(visitorId.current!, pathname);
  }, [pathname]);

  return null;
}
