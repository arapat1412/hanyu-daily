import React, { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getTopicBySlug } from "../data/cultureTopics";
import { scheduleCultureProgressSync } from "../lib/culture-progress";

export const CultureGamePlayerPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!topic) return;
    scheduleCultureProgressSync(topic);
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.type !== "hanyu-culture-progress" ||
        event.data?.storageKey !== topic.storageKey
      ) return;
      scheduleCultureProgressSync(topic);
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [topic]);

  if (!topic) {
    return <Navigate to="/kham-pha/van-hoa-trung-quoc" replace />;
  }

  return (
    <div className="fixed inset-0 z-40 h-screen w-screen overflow-hidden bg-[#FFF8F0]">
      <iframe
        ref={iframeRef}
        title={topic.title}
        src={`/hoc-va-choi/${topic.slug}.html?v=20260913`}
        className="block h-full w-full border-0"
      />
    </div>
  );
};
