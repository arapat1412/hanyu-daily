import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Trophy, ArrowLeft, Zap, Sparkles, X, ChevronRight, Award } from "lucide-react";
import { CULTURE_TOPICS, getTopicProgress, CultureTopic } from "../data/cultureTopics";
import { useAuth, useLeaderboard } from "../lib/auth";
import { syncAllCultureProgress } from "../lib/culture-progress";

export const CultureTopicsPage: React.FC = () => {
  const { user } = useAuth();
  const [showRankModal, setShowRankModal] = useState(false);
  const [rankTab, setRankTab] = useState<"weekly" | "overall">("weekly");
  const [rankPage, setRankPage] = useState(0);
  const { users: leaderboardUsers, totalCount: leaderboardTotal } = useLeaderboard({
    period: rankTab,
    scope: "culture",
    offset: rankPage * 100,
  });

  useEffect(() => setRankPage(0), [rankTab]);

  // Read progress for all 7 topics
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const handleFocus = () => {
      setRevision((r) => r + 1);
      void syncAllCultureProgress();
    };
    void syncAllCultureProgress();
    window.addEventListener("focus", handleFocus);
    window.addEventListener("visibilitychange", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("visibilitychange", handleFocus);
    };
  }, []);

  const topicsProgress = useMemo(() => {
    return CULTURE_TOPICS.map((topic) => {
      const prog = getTopicProgress(topic.storageKey);
      const total = topic.totalLessons;
      const pct = total ? Math.min(100, Math.round((prog.doneCount / total) * 100)) : 0;
      const stars = pct >= 100 ? "★★★" : pct >= 60 ? "★★☆" : pct >= 20 ? "★☆☆" : "☆☆☆";
      const cta = prog.doneCount === 0 ? "▶ Chơi" : pct >= 100 ? "↺ Chơi lại" : "▶ Tiếp tục";
      return {
        topic,
        done: prog.doneCount,
        xp: prog.xp,
        pct,
        stars,
        cta,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revision]);

  const totalDone = useMemo(
    () => topicsProgress.reduce((sum, item) => sum + item.done, 0),
    [topicsProgress]
  );
  const totalQuestions = useMemo(
    () => CULTURE_TOPICS.reduce((sum, t) => sum + t.totalLessons, 0),
    []
  );
  const totalXp = useMemo(
    () => topicsProgress.reduce((sum, item) => sum + item.xp, 0),
    [topicsProgress]
  );
  const overallPercent = Math.min(100, Math.round((totalDone / totalQuestions) * 100));

  // Resume item: find first unfinished topic with progress, or first topic
  const nextActiveItem = useMemo(() => {
    return (
      topicsProgress.find((item) => item.done > 0 && item.done < item.topic.totalLessons) ??
      topicsProgress[0]
    );
  }, [topicsProgress]);

  return (
    <div className="min-h-screen pb-24 selection:bg-brand/20 selection:text-brand-dark" style={{ background: "#FFF8F0" }}>
      {/* ================= GAME TOP BAR ================= */}
      <header
        className="sticky top-0 z-30 shadow-[0_4px_24px_rgba(23,48,63,.35)]"
        style={{ background: "linear-gradient(135deg,#17303F 0%,#2C5670 55%,#3D6A82 100%)" }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3 sm:px-7">
          {/* Logo & Game Title */}
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/kham-pha"
              className="group flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white border border-white/25 p-0.5 shadow-sm transition-transform hover:scale-105"
            >
              <img
                src="/gautruc.png"
                alt="Hanyu Daily"
                className="h-full w-full object-cover scale-[1.35]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                  const parent = (e.target as HTMLElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="font-display text-base font-black text-slate-800">汉</span>';
                  }
                }}
              />
            </Link>
            <div className="leading-tight min-w-0 truncate">
              <div className="text-[11px] text-white/75 font-semibold">Game · 中国文化常识</div>
              <div className="truncate text-sm sm:text-base font-bold text-white">
                1000 câu hỏi Văn hóa Trung Quốc
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowRankModal(true)}
              className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-white/25 active:scale-95"
              style={{ background: "rgba(255,255,255,.16)" }}
            >
              <Trophy className="h-3.5 w-3.5 text-amber-300" />
              <span className="hidden sm:inline">Bảng Xếp Hạng</span>
            </button>

            <Link
              to="/kham-pha"
              className="inline-flex items-center gap-1 text-xs font-semibold text-white/85 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Thoát game</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-4 pt-7 sm:px-7">
        {/* ================= HERO BANNER ================= */}
        <div
          className="relative overflow-hidden rounded-[24px] px-6 pt-7 pb-6 text-white shadow-xl sm:px-8"
          style={{ background: "linear-gradient(100deg,#2C5670 0%,#25485E 55%,#1D3A4C 100%)" }}
        >
          {/* Subtle Watermark */}
          <span
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 select-none font-hanzi text-[140px] font-black text-white/[0.06] sm:text-[180px]"
          >
            知
          </span>

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <span
                className="w-fit rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-[0.08em] shadow-xs"
                style={{ color: "#8A6A15", background: "#FBF6E8" }}
              >
                游戏 YÓUXÌ · 7 CHUYÊN ĐỀ
              </span>
              <h1 className="font-hanzi text-2xl font-black text-white sm:text-3xl">
                Khám phá Trung Quốc
              </h1>
              <div className="text-sm font-bold" style={{ color: "#C9E7F5" }}>
                中国文化常识 1000 问
              </div>
            </div>

            {/* Quick Play CTA */}
            {nextActiveItem && (
              <Link
                to={`/kham-pha/van-hoa-trung-quoc/${nextActiveItem.topic.slug}`}
                className="w-fit rounded-[14px] px-6 py-3 text-sm font-extrabold text-slate-900 no-underline shadow-lg transition-all hover:scale-105 active:scale-95 sm:text-base"
                style={{ background: "linear-gradient(135deg,#F0C64C,#E0A62A)", color: "#40300A" }}
              >
                ▶ {totalDone > 0 ? `Tiếp tục · ${nextActiveItem.topic.title}` : "Bắt đầu chơi ngay"}
              </Link>
            )}
          </div>

          {/* Overall Progress Bar */}
          <div className="relative mt-6 flex flex-col sm:flex-row sm:items-center gap-3 border-t border-white/10 pt-4">
            <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/25">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${overallPercent}%`,
                  background: "linear-gradient(90deg,#F0C64C,#E0A62A)",
                }}
              />
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3 font-mono text-xs text-white/90">
              <span>
                {totalDone} / {totalQuestions} câu ({overallPercent}%)
              </span>
              {totalXp > 0 && (
                <span className="flex items-center gap-1 font-bold text-amber-300">
                  <Zap className="h-3.5 w-3.5 fill-amber-300" />
                  {totalXp} XP
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ================= 7 CHAPTERS GRID ================= */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicsProgress.map(({ topic, done, xp, pct, stars, cta }) => (
            <div
              key={topic.slug}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: topic.grad,
                boxShadow: topic.shadow,
              }}
            >
              {/* Giant Glyph Watermark */}
              <span
                className="pointer-events-none absolute right-3 bottom-[-10px] select-none font-hanzi text-[88px] font-black opacity-15 transition-transform duration-300 group-hover:scale-105"
              >
                {topic.glyph}
              </span>

              <div className="relative">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider"
                    style={{ background: "rgba(255,255,255,.18)" }}
                  >
                    Chuyên đề 0{topic.num}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-widest text-amber-300">
                    {stars}
                  </span>
                </div>

                {/* Titles */}
                <h2 className="mt-3 font-display text-lg font-bold text-white group-hover:text-amber-200 transition-colors">
                  {topic.title}
                </h2>
                <div className="mt-0.5 text-xs font-medium" style={{ color: topic.soft }}>
                  {topic.zh} · {topic.py}
                </div>
              </div>

              {/* Bottom Details & Play CTA */}
              <div className="relative mt-6 flex items-end justify-between border-t border-white/15 pt-3.5">
                <div>
                  <div className="text-[11.5px] text-white/80">
                    {done > 0 ? (
                      <>
                        <strong className="font-mono text-white font-bold">{done}</strong> /{" "}
                        {topic.totalLessons} bài xong
                      </>
                    ) : (
                      `${topic.totalLessons} câu trắc nghiệm`
                    )}
                  </div>
                  {xp > 0 && (
                    <div className="mt-0.5 font-mono text-[11px] font-bold text-amber-300">
                      ✦ {xp} XP đạt được
                    </div>
                  )}
                </div>

                <Link
                  to={`/kham-pha/van-hoa-trung-quoc/${topic.slug}`}
                  className="inline-flex items-center gap-1 rounded-[11px] px-3.5 py-1.5 text-xs font-bold text-slate-900 no-underline shadow-sm transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: done > 0 ? "#F0C64C" : "rgba(255,255,255,.9)",
                    color: "#2C2C2C",
                  }}
                >
                  <span>{cta}</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= LEADERBOARD MODAL ================= */}
      {showRankModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-2xl animate-scaleUp">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                <h3 className="font-display text-lg font-bold text-ink">Bảng Xếp Hạng Khám Phá</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowRankModal(false)}
                className="rounded-xl p-1 text-muted hover:bg-cream hover:text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-4 inline-flex rounded-xl bg-tint p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setRankTab("weekly")}
                className={`rounded-lg px-4 py-1.5 transition-all ${
                  rankTab === "weekly" ? "bg-white text-brand shadow-xs" : "text-ink-2"
                }`}
              >
                Tuần này
              </button>
              <button
                type="button"
                onClick={() => setRankTab("overall")}
                className={`rounded-lg px-4 py-1.5 transition-all ${
                  rankTab === "overall" ? "bg-white text-brand shadow-xs" : "text-ink-2"
                }`}
              >
                Chung
              </button>
            </div>

            {/* List */}
            <div className="max-h-[50vh] divide-y divide-line/60 overflow-y-auto">
              {leaderboardUsers.some((u) => !u.isSupplemental) ? (
                leaderboardUsers.filter((u) => !u.isSupplemental).map((u) => (
                  <div
                    key={u.id}
                    className={`flex items-center justify-between py-2.5 px-2 text-xs ${
                      u.id === user?.id ? "bg-tint/60 rounded-xl" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-muted w-5 text-center">
                        {u.rank}
                      </span>
                      <span className="font-bold text-ink truncate max-w-[160px]">{u.name}</span>
                      {u.id === user?.id && (
                        <span className="rounded-full bg-brand px-1.5 py-0.2 text-[9px] text-white">
                          Bạn
                        </span>
                      )}
                    </div>
                    <span className="font-mono font-bold text-brand">
                      {(rankTab === "weekly" ? u.cultureWeeklyXp : u.cultureXp).toLocaleString("vi-VN")} XP
                    </span>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-muted">
                  Chưa có dữ liệu xếp hạng. Hãy hoàn thành bài học để xuất hiện tại đây!
                </div>
              )}
            </div>

            {leaderboardTotal > 100 && (
              <div className="mt-4 flex items-center justify-between text-[11px] text-muted">
                <span>Trang {rankPage + 1}/{Math.ceil(leaderboardTotal / 100)}</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    disabled={rankPage === 0}
                    onClick={() => setRankPage((page) => Math.max(0, page - 1))}
                    className="rounded-lg border border-line px-2.5 py-1 disabled:opacity-40"
                  >
                    Trước
                  </button>
                  <button
                    type="button"
                    disabled={(rankPage + 1) * 100 >= leaderboardTotal}
                    onClick={() => setRankPage((page) => page + 1)}
                    className="rounded-lg border border-line px-2.5 py-1 disabled:opacity-40"
                  >
                    Sau
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5">
              <Link
                to="/xep-hang"
                className="block w-full text-center text-xs font-bold text-brand hover:underline"
              >
                Xem Bảng Phong Vân Toàn Hệ Thống →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
