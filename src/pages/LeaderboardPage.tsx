import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Crown,
  Flame,
  Zap,
  Sparkles,
  Search,
  Award,
  ArrowUpRight,
  RefreshCw,
  Users,
  BookOpen,
  HelpCircle,
  CheckCircle2,
  X,
  Target,
  GraduationCap,
} from "lucide-react";
import { useAuth, useLeaderboard } from "../lib/auth";
import { checkAdminAccess } from "../lib/admin";
import { useProgress } from "../lib/hsk";
import { calculateProgressStats } from "../lib/progress-stats";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function getHskBadgeStyle(hsk: string) {
  const norm = (hsk || "").toLowerCase();
  if (norm.includes("1")) return "bg-amber-500/10 text-amber-700 border-amber-300";
  if (norm.includes("2")) return "bg-orange-500/10 text-orange-700 border-orange-300";
  if (norm.includes("3")) return "bg-rose-500/10 text-rose-700 border-rose-300";
  if (norm.includes("4")) return "bg-emerald-500/10 text-emerald-700 border-emerald-300";
  if (norm.includes("5")) return "bg-blue-500/10 text-blue-700 border-blue-300";
  if (norm.includes("6")) return "bg-purple-500/10 text-purple-700 border-purple-300";
  if (norm.includes("7") || norm.includes("8") || norm.includes("9"))
    return "bg-slate-900 text-amber-300 border-amber-400/40";
  return "bg-slate-100 text-slate-700 border-slate-300";
}

const HSK_TABS = ["Tất cả", "HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6", "HSK 7–9"];

export const LeaderboardPage: React.FC = () => {
  const { user: currentUser, isAuthenticated } = useAuth();
  const localProgress = useProgress();
  const localStats = useMemo(() => calculateProgressStats(localProgress), [localProgress]);

  const [timeframe, setTimeframe] = useState<"weekly" | "overall">("weekly");
  const [selectedHsk, setSelectedHsk] = useState<string>("Tất cả");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [canSeeSyntheticLabels, setCanSeeSyntheticLabels] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedSearch(searchQuery), 350);
    return () => window.clearTimeout(timer);
  }, [searchQuery]);

  const { users, totalCount, filteredCount, totalXp, highestStreak, loading, error, refresh } = useLeaderboard({
    period: timeframe,
    hsk: selectedHsk === "Tất cả" ? undefined : selectedHsk,
    search: debouncedSearch,
    limit: 20,
    offset: page * 20,
    includeCurrent: true,
  });

  useEffect(() => {
    setPage(0);
    setVisibleCount(10);
  }, [timeframe, selectedHsk, debouncedSearch]);

  useEffect(() => {
    let active = true;
    setCanSeeSyntheticLabels(false);
    if (!currentUser) return () => { active = false; };
    checkAdminAccess().then((allowed) => {
      if (active) setCanSeeSyntheticLabels(allowed);
    });
    return () => { active = false; };
  }, [currentUser?.id]);

  // The database owns ordering and tie-breaking; supplemental rows only provide
  // the signed-in learner's standing when it falls outside the current page.
  const sortedUsers = useMemo(() => {
    return [...users].map((u) => ({
      ...u,
      displayXp: timeframe === "weekly" ? (u.weeklyXp ?? 0) : (u.xp ?? 0),
    })).sort((a, b) => a.rank - b.rank);
  }, [users, timeframe]);

  const pageUsers = sortedUsers.filter((u) => !u.isSupplemental);
  const visiblePageUsers = pageUsers.slice(0, page === 0 ? visibleCount : 20);

  // Top 3 from sorted list
  const top1 = sortedUsers.find((u) => u.rank === 1) || null;
  const top2 = sortedUsers.find((u) => u.rank === 2) || null;
  const top3 = sortedUsers.find((u) => u.rank === 3) || null;

  // Overview stats
  const totalLearners = totalCount;
  const totalSystemXp = totalXp;

  // Current user standing
  const currentUserData = useMemo(() => {
    if (!currentUser) return null;
    return sortedUsers.find((u) => u.id === currentUser.id) || null;
  }, [sortedUsers, currentUser]);
  const currentUserIndex = currentUserData ? currentUserData.rank - 1 : -1;
  const nextRankUser = currentUserData
    ? sortedUsers.find((u) => u.rank === currentUserData.rank - 1) || null
    : null;
  const xpNeededForNextRank =
    nextRankUser && currentUserData
      ? Math.max(
          1,
          (nextRankUser.displayXp || 0) -
            (currentUserData.displayXp || 0) +
            (currentUserData.streak > nextRankUser.streak ||
            (currentUserData.streak === nextRankUser.streak &&
              currentUserData.id.localeCompare(nextRankUser.id) < 0)
              ? 0
              : 1),
        )
      : null;

  const handleManualRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setPage(0);
    setVisibleCount(10);
    try {
      await refresh();
    } finally {
      setTimeout(() => setIsRefreshing(false), 600);
    }
  };

  // Determine if Podium should be shown: only when not searching and viewing "Tất cả", and we have at least 1 user
  const isPodiumActive = page === 0 && selectedHsk === "Tất cả" && !searchQuery.trim() && pageUsers.length > 0;

  // Table items: if podium is active, skip top 3; otherwise show all filtered items
  const tableUsers = isPodiumActive ? visiblePageUsers.filter((u) => u.rank > 3) : visiblePageUsers;
  const canExpandFirstPage = page === 0 && visibleCount < Math.min(20, filteredCount);
  const pageCount = Math.max(1, Math.ceil(filteredCount / 20));
  const showPagination = pageCount > 1 && (page > 0 || visibleCount >= 20);
  const firstVisibleRank = filteredCount ? page * 20 + 1 : 0;
  const lastVisibleRank = Math.min(filteredCount, page * 20 + (page === 0 ? visibleCount : 20));

  return (
    <div className="min-h-screen bg-page pb-24 selection:bg-brand/20 selection:text-brand-dark">
      {/* ================= HERO HEADER ================= */}
      <div className="relative overflow-hidden border-b border-line/60 bg-gradient-to-b from-[#122736] via-[#1B384D] to-[#254A65] px-4 pt-8 pb-10 sm:pb-12 text-white shadow-xl sm:px-6 lg:px-8">
        {/* Subtle Decorative Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        {/* Chinese Calligraphy Watermark Seal */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-display text-[110px] font-black tracking-widest text-white/[0.04] sm:right-12 sm:text-[180px] lg:text-[230px]">
          风云榜
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Top meta badge & live sync status */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 font-semibold text-amber-300 backdrop-blur-sm shadow-xs">
              <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-300" />
              <span>BẢNG VÀNG HÁN NGỮ · 每日争先</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {loading ? "Đang cập nhật..." : "Đồng bộ dữ liệu"}
              </span>

              <button
                type="button"
                onClick={handleManualRefresh}
                disabled={isRefreshing}
                title="Làm mới dữ liệu"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-white transition-all hover:bg-white/20 active:scale-95 disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isRefreshing ? "animate-spin text-amber-300" : ""}`} />
                <span className="hidden sm:inline">{isRefreshing ? "Đang tải…" : "Làm mới"}</span>
              </button>
            </div>
          </div>

          {/* Hero Main Titles */}
          <div className="mt-5 text-center sm:text-left">
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Bảng Vàng Phong Vân
            </h1>
            <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Một hệ XP chung cho New HSK 3.0, Boya và YCT.
            </p>
            <p className="mt-2 text-xs text-slate-300">
              Tiến độ do người học tự ghi nhận; bảng xếp hạng không phải kết quả thi có giám sát.
            </p>
            {canSeeSyntheticLabels && (
              <p className="mt-1 text-xs text-indigo-200">
                Nhãn “Mô phỏng” chỉ hiển thị cho quản trị viên và không phải tài khoản đăng nhập thật.
              </p>
            )}
          </div>

          {/* 4 Summary Stat Cards */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {/* 1. Top 1 Quán Quân */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-md transition-all hover:border-amber-400/40 hover:bg-white/[0.12]">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Crown className="h-4 w-4 text-amber-400" />
                <span>Quán Quân</span>
              </div>
              <div className="mt-2 truncate font-display text-base font-bold text-white sm:text-lg">
                {top1 ? top1.name : "Đang cập nhật"}
              </div>
              <div className="text-[11px] text-slate-300">
                {top1 ? `${top1.displayXp.toLocaleString("vi-VN")} XP` : "Chưa có"}
              </div>
            </div>

            {/* 2. Kỷ lục chuỗi ngày */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-md transition-all hover:border-rose-400/40 hover:bg-white/[0.12]">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-300">
                <Flame className="h-4 w-4 fill-rose-400 text-rose-400" />
                <span>Kỷ lục chuỗi</span>
              </div>
              <div className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                {highestStreak} ngày
              </div>
              <div className="text-[11px] text-slate-300">Học tập không gián đoạn</div>
            </div>

            {/* 3. Tổng XP trao tặng */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-md transition-all hover:border-sky-400/40 hover:bg-white/[0.12]">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                <Zap className="h-4 w-4 fill-sky-300 text-sky-300" />
                <span>Tổng XP ghi nhận</span>
              </div>
              <div className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                {totalSystemXp.toLocaleString("vi-VN")}
              </div>
              <div className="text-[11px] text-slate-300">
                {timeframe === "weekly" ? "Trong tuần hiện tại" : "Toàn bộ hệ thống"}
              </div>
            </div>

            {/* 4. Tổng học viên thi đua */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-3.5 backdrop-blur-md transition-all hover:border-emerald-400/40 hover:bg-white/[0.12]">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                <Users className="h-4 w-4 text-emerald-300" />
                <span>Học viên tham gia</span>
              </div>
              <div className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                {totalLearners} sĩ tử
              </div>
              <div className="text-[11px] text-slate-300">Cùng nỗ lực mỗi ngày</div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="mx-auto mt-8 sm:mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ================= CONTROLS & FILTER BAR ================= */}
        <div className="rounded-2xl border border-line bg-white p-3.5 shadow-card sm:p-4">
          <div className="flex flex-col gap-3.5 md:flex-row md:items-center md:justify-between">
            {/* Timeframe Switcher Tabs */}
            <div className="flex rounded-xl bg-tint p-1 font-semibold text-xs sm:text-sm">
              <button
                type="button"
                onClick={() => setTimeframe("weekly")}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
                  timeframe === "weekly"
                    ? "bg-white text-brand shadow-xs font-bold"
                    : "text-ink-2 hover:text-brand"
                }`}
              >
                <Zap className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                <span>Đua Top Tuần</span>
              </button>
              <button
                type="button"
                onClick={() => setTimeframe("overall")}
                className={`flex items-center gap-1.5 rounded-lg px-4 py-2 transition-all ${
                  timeframe === "overall"
                    ? "bg-white text-brand shadow-xs font-bold"
                    : "text-ink-2 hover:text-brand"
                }`}
              >
                <Trophy className="h-3.5 w-3.5 text-gold" />
                <span>Toàn Thời Gian</span>
              </button>
            </div>

            {/* Search Input & XP Rules trigger */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1 md:w-64">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm học viên..."
                  className="w-full rounded-xl border border-line bg-cream/70 py-2 pr-8 pl-9 text-xs text-ink placeholder:text-muted focus:border-brand focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setShowRulesModal(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-cream/70 px-3 py-2 text-xs font-semibold text-ink-2 transition-colors hover:border-brand/30 hover:bg-white hover:text-brand"
              >
                <HelpCircle className="h-4 w-4 text-brand" />
                <span className="hidden sm:inline">Cơ chế XP</span>
              </button>
            </div>
          </div>

          {/* HSK Level Filter Pills */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="mr-1 shrink-0 font-bold text-[11px] tracking-wide text-muted uppercase">
              Cấp độ:
            </span>
            {HSK_TABS.map((tab) => {
              const active = selectedHsk === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedHsk(tab)}
                  className={`shrink-0 rounded-lg px-3 py-1 font-semibold transition-all ${
                    active
                      ? "bg-brand text-white shadow-xs font-bold"
                      : "bg-cream text-ink-2 hover:bg-tint hover:text-brand"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= YOUR STANDING / CALL TO ACTION ================= */}
        <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-gradient-to-r from-amber-50/70 via-white to-sky-50/70 p-4 shadow-sm sm:p-5">
          {isAuthenticated && currentUser ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-brand/20 bg-tint text-base font-extrabold text-brand shadow-inner">
                    {currentUser.avatarUrl ? (
                      <img src={currentUser.avatarUrl} alt="" className="h-full w-full object-cover" />
                    ) : (
                      initials(currentUser.name)
                    )}
                  </div>
                  {currentUserIndex !== -1 && (
                    <span className="absolute -bottom-1.5 -right-1.5 rounded-md bg-brand px-1.5 py-0.5 font-mono text-[10px] font-black text-white shadow-xs">
                      #{currentUserIndex + 1}
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="truncate text-sm font-bold text-ink sm:text-base">
                      {currentUser.name}
                    </span>
                    <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold text-brand">
                      Bạn
                    </span>
                    {currentUserData && (
                      <span
                        className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${getHskBadgeStyle(
                          currentUserData.hsk
                        )}`}
                      >
                        {currentUserData.hsk}
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-2">
                    {currentUserIndex !== -1 ? (
                      <>
                        <span className="font-semibold text-brand">
                          Hạng hiện tại:{" "}
                          <strong className="text-ink font-mono text-sm">#{currentUserIndex + 1}</strong>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-mono font-bold text-amber-600">
                          <Zap className="h-3.5 w-3.5 fill-amber-500" />
                          {currentUserData?.displayXp.toLocaleString("vi-VN")} XP
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 font-semibold text-rose-600">
                          <Flame className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                          {currentUserData?.streak || 0} ngày
                        </span>
                      </>
                    ) : (
                      <span className="text-muted">
                        Bạn chưa có điểm trong bảng xếp hạng kỳ này. Học ngay để ghi danh!
                      </span>
                    )}
                  </div>

                  {/* Distance to next rank */}
                  {xpNeededForNextRank !== null && nextRankUser && (
                    <div className="mt-2 text-[11px] text-ink-2">
                      <span>
                        Chỉ cần thêm{" "}
                        <strong className="font-mono font-bold text-brand">+{xpNeededForNextRank} XP</strong> để
                        vượt qua <span className="font-semibold">{nextRankUser.name}</span> (#
                        {currentUserIndex})!
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:shrink-0">
                <Link
                  to="/giao-trinh"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-dark active:scale-95 sm:w-auto"
                >
                  <span>Chọn nội dung kiếm XP</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink">Ghi danh bảng vàng Hán ngữ</h3>
                  <p className="mt-0.5 text-xs text-ink-2 leading-relaxed">
                    {localStats.xp > 0 ? (
                      <>
                        Bạn đã tích luỹ được{" "}
                        <strong className="font-mono font-bold text-brand">{localStats.xp} XP</strong> trên thiết
                        bị này. Hãy tạo tài khoản hoặc đăng nhập để lưu vĩnh viễn và vinh danh trên bảng toàn quốc!
                      </>
                    ) : (
                      "Tạo tài khoản để lưu trữ chuỗi ngày học, điểm thi HSK và cùng thi đua với các sĩ tử toàn quốc."
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:shrink-0">
                <Link
                  to="/register"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs transition-all hover:bg-brand-dark sm:w-auto"
                >
                  Tạo tài khoản
                </Link>
                <Link
                  to="/login"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-line bg-white px-4 py-2 text-xs font-semibold text-ink-2 hover:bg-cream sm:w-auto"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* ================= TOP 3 CHAMPIONS PODIUM ================= */}
        {isPodiumActive && (
          <div className="mt-8">
            <div className="mb-4 text-center">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-muted uppercase">
                <Crown className="h-3.5 w-3.5 text-gold" />
                <span>Bục Vinh Danh Tam Khôi (Top 3 Sĩ Tử)</span>
              </span>
            </div>

            <div className="relative mx-auto grid max-w-3xl grid-cols-3 items-end gap-2 sm:gap-4 pt-8">
              {/* ================= RANK 2: BẢNG NHÃN (LEFT) ================= */}
              <div className="flex flex-col items-center">
                {top2 ? (
                  <>
                    <div className="relative mb-2.5 flex flex-col items-center">
                      <div className="mb-1 rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-extrabold text-slate-700 shadow-xs">
                        🥈 Bảng Nhãn
                      </div>
                      <div className="relative">
                        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border-2 border-slate-300 bg-slate-100 font-extrabold text-slate-700 shadow-md ring-4 ring-slate-200/60 sm:h-20 sm:w-20">
                          {top2.avatarUrl ? (
                            <img src={top2.avatarUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            initials(top2.name)
                          )}
                        </div>
                        {top2.id === currentUser?.id && (
                          <span className="absolute -top-1.5 -right-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white shadow-xs">
                            Bạn
                          </span>
                        )}
                      </div>

                      <div className="mt-2 max-w-[100px] truncate text-center text-xs font-bold text-ink sm:max-w-[140px] sm:text-sm">
                        {top2.name}
                      </div>
                      {canSeeSyntheticLabels && top2.isSynthetic && <span className="mt-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">Mô phỏng</span>}
                      <div className="mt-0.5 flex items-center gap-1 text-[11px] font-mono font-bold text-brand">
                        <Zap className="h-3 w-3 fill-brand" />
                        {top2.displayXp.toLocaleString("vi-VN")} XP
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-rose-600">
                        <Flame className="h-3 w-3 fill-rose-500 text-rose-500" />
                        {top2.streak} ngày
                      </div>
                    </div>

                    {/* Podium Pillar 2 */}
                    <div className="w-full rounded-t-2xl border-t border-r border-l border-slate-300 bg-gradient-to-b from-slate-200 via-slate-300/80 to-slate-300 p-3 text-center shadow-md sm:p-4">
                      <div className="font-display text-2xl font-black text-slate-600 sm:text-4xl">#2</div>
                      <span className="hidden font-mono text-[11px] font-bold text-slate-600 sm:inline">Á QUÂN</span>
                    </div>
                  </>
                ) : (
                  <div className="h-32 w-full rounded-t-2xl border border-dashed border-line bg-white/40" />
                )}
              </div>

              {/* ================= RANK 1: TRẠNG NGUYÊN (CENTER - HIGHEST) ================= */}
              <div className="flex flex-col items-center">
                {top1 ? (
                  <>
                    <div className="relative mb-3 flex flex-col items-center">
                      {/* Floating Crown Icon */}
                      <div className="animate-bounce text-2xl drop-shadow-md">👑</div>
                      <div className="mb-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-0.5 text-[10px] font-black tracking-wide text-white shadow-xs">
                        🥇 Trạng Nguyên
                      </div>

                      <div className="relative">
                        <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border-2 border-amber-400 bg-amber-50 font-black text-amber-800 shadow-xl ring-4 ring-amber-400/30 sm:h-24 sm:w-24">
                          {top1.avatarUrl ? (
                            <img src={top1.avatarUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            initials(top1.name)
                          )}
                        </div>
                        {top1.id === currentUser?.id && (
                          <span className="absolute -top-1.5 -right-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white shadow-xs">
                            Bạn
                          </span>
                        )}
                      </div>

                      <div className="mt-2 max-w-[120px] truncate text-center text-sm font-extrabold text-ink sm:max-w-[160px] sm:text-base">
                        {top1.name}
                      </div>
                      {canSeeSyntheticLabels && top1.isSynthetic && <span className="mt-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">Mô phỏng</span>}
                      <div className="mt-0.5 flex items-center gap-1 font-mono text-xs font-black text-amber-600 sm:text-sm">
                        <Zap className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        {top1.displayXp.toLocaleString("vi-VN")} XP
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] font-bold text-rose-600 sm:text-[11px]">
                        <Flame className="h-3 w-3 fill-rose-500 text-rose-500" />
                        {top1.streak} ngày liên tiếp
                      </div>
                    </div>

                    {/* Podium Pillar 1 */}
                    <div className="w-full rounded-t-2xl border-t border-r border-l border-amber-400 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 p-4 text-center text-white shadow-xl sm:p-5">
                      <div className="font-display text-3xl font-black drop-shadow-sm sm:text-5xl">#1</div>
                      <span className="hidden font-mono text-xs font-black tracking-widest text-amber-100 sm:inline">
                        QUÁN QUÂN
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="h-44 w-full rounded-t-2xl border border-dashed border-line bg-white/40" />
                )}
              </div>

              {/* ================= RANK 3: THÁM HOA (RIGHT) ================= */}
              <div className="flex flex-col items-center">
                {top3 ? (
                  <>
                    <div className="relative mb-2 flex flex-col items-center">
                      <div className="mb-1 rounded-full bg-amber-700/10 px-2 py-0.5 text-[10px] font-extrabold text-amber-800 shadow-xs">
                        🥉 Thám Hoa
                      </div>
                      <div className="relative">
                        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border-2 border-amber-600/70 bg-amber-50 font-extrabold text-amber-800 shadow-md ring-4 ring-amber-600/20 sm:h-18 sm:w-18">
                          {top3.avatarUrl ? (
                            <img src={top3.avatarUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            initials(top3.name)
                          )}
                        </div>
                        {top3.id === currentUser?.id && (
                          <span className="absolute -top-1.5 -right-1.5 rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white shadow-xs">
                            Bạn
                          </span>
                        )}
                      </div>

                      <div className="mt-2 max-w-[100px] truncate text-center text-xs font-bold text-ink sm:max-w-[140px] sm:text-sm">
                        {top3.name}
                      </div>
                      {canSeeSyntheticLabels && top3.isSynthetic && <span className="mt-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">Mô phỏng</span>}
                      <div className="mt-0.5 flex items-center gap-1 text-[11px] font-mono font-bold text-brand">
                        <Zap className="h-3 w-3 fill-brand" />
                        {top3.displayXp.toLocaleString("vi-VN")} XP
                      </div>
                      <div className="mt-1 flex items-center gap-1 text-[10px] font-semibold text-rose-600">
                        <Flame className="h-3 w-3 fill-rose-500 text-rose-500" />
                        {top3.streak} ngày
                      </div>
                    </div>

                    {/* Podium Pillar 3 */}
                    <div className="w-full rounded-t-2xl border-t border-r border-l border-amber-700/50 bg-gradient-to-b from-amber-700/70 via-amber-800/80 to-amber-900 p-2.5 text-center text-amber-100 shadow-md sm:p-3">
                      <div className="font-display text-xl font-black sm:text-3xl">#3</div>
                      <span className="hidden font-mono text-[10px] font-bold tracking-wider text-amber-200 sm:inline">
                        QUÝ QUÂN
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="h-24 w-full rounded-t-2xl border border-dashed border-line bg-white/40" />
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= LEADERBOARD TABLE ================= */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-white shadow-card">
          {/* Table Header Row */}
          <div className="flex items-center justify-between border-b border-line bg-cream px-5 py-4">
            <div className="flex items-center gap-2 font-display text-sm font-bold text-ink sm:text-base">
              <GraduationCap className="h-4 w-4 text-brand" />
              <span>
                {isPodiumActive
                  ? "Danh Sách Sĩ Tử (Hạng 4 trở đi)"
                  : `Kết quả xếp hạng (${filteredCount} học viên)`}
              </span>
            </div>
            <div className="text-xs text-muted">
              {timeframe === "weekly" ? "Tự động reset 00:00 thứ Hai" : "Tích luỹ mọi thời điểm"}
            </div>
          </div>

          {/* Loading Skeleton */}
          {loading && !users.length ? (
            <div className="divide-y divide-line/60 p-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex animate-pulse items-center justify-between gap-4 py-3.5">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-8 rounded-md bg-slate-200" />
                    <div className="h-11 w-11 rounded-2xl bg-slate-200" />
                    <div className="space-y-2">
                      <div className="h-4 w-36 rounded-md bg-slate-200" />
                      <div className="h-3 w-24 rounded-md bg-slate-100" />
                    </div>
                  </div>
                  <div className="space-y-1.5 text-right">
                    <div className="h-4 w-20 rounded-md bg-slate-200 ml-auto" />
                    <div className="h-3 w-14 rounded-md bg-slate-100 ml-auto" />
                  </div>
                </div>
              ))}
            </div>
          ) : tableUsers.length > 0 ? (
            <div className="divide-y divide-line/60">
              {tableUsers.map((user) => {
                const actualRank = user.rank;
                const isCurrent = user.id === currentUser?.id;

                return (
                  <div
                    key={user.id}
                    className={`flex items-center justify-between gap-3 px-4 py-3.5 transition-all sm:px-6 hover:bg-tint/40 ${
                      isCurrent ? "bg-amber-50/50 border-l-4 border-l-amber-500" : ""
                    }`}
                  >
                    {/* Left: Rank, Avatar & Info */}
                    <div className="flex min-w-0 items-center gap-3.5 sm:gap-4">
                      {/* Rank Number */}
                      <div className="flex w-9 shrink-0 items-center justify-center text-center font-mono font-black">
                        {actualRank <= 3 ? (
                          <span className="text-xl sm:text-2xl">
                            {actualRank === 1 ? "🥇" : actualRank === 2 ? "🥈" : "🥉"}
                          </span>
                        ) : actualRank <= 10 ? (
                          <span className="rounded-md bg-tint px-1.5 py-0.5 text-xs font-extrabold text-brand">
                            #{actualRank}
                          </span>
                        ) : (
                          <span className="text-sm font-bold text-muted">#{actualRank}</span>
                        )}
                      </div>

                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-line bg-tint text-sm font-black text-brand shadow-inner sm:h-12 sm:w-12">
                          {user.avatarUrl ? (
                            <img src={user.avatarUrl} alt="" className="h-full w-full object-cover" />
                          ) : (
                            initials(user.name)
                          )}
                        </div>
                        {actualRank <= 10 && (
                          <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[9px] font-bold text-white shadow-xs">
                            ★
                          </span>
                        )}
                      </div>

                      {/* Learner Details */}
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="truncate text-sm font-bold text-ink sm:text-[15px]">
                            {user.name}
                          </span>
                          {isCurrent && (
                            <span className="rounded-full bg-brand px-2 py-0.2 text-[9px] font-bold text-white">
                              Bạn
                            </span>
                          )}
                          {canSeeSyntheticLabels && user.isSynthetic && (
                            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[9px] font-bold text-indigo-600">
                              Mô phỏng
                            </span>
                          )}
                          <span
                            className={`rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${getHskBadgeStyle(
                              user.hsk
                            )}`}
                          >
                            {user.hsk}
                          </span>
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-2.5 text-[11px] text-muted sm:text-xs">
                          <span className="flex items-center gap-1 font-semibold text-rose-600">
                            <Flame className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                            {user.streak} ngày
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-ink-2">
                            <Target className="h-3 w-3 text-brand" />
                            Điểm TB {user.averageScore}%
                          </span>
                          <span className="hidden sm:inline">•</span>
                          <span className="hidden sm:inline text-ink-2">
                            {user.completed} bài đã học
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: XP display */}
                    <div className="shrink-0 text-right">
                      <div className="flex items-center justify-end gap-1 font-mono text-sm font-black text-brand sm:text-base">
                        <Zap className="h-4 w-4 fill-brand text-brand" />
                        <span>{user.displayXp.toLocaleString("vi-VN")}</span>
                        <span className="text-[11px] font-semibold text-muted">XP</span>
                      </div>
                      <div className="text-[10px] text-muted sm:text-[11px]">
                        {timeframe === "weekly" ? "trong tuần" : "tổng điểm"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Empty State */
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-50 text-3xl shadow-inner">
                🏮
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">
                {searchQuery ? "Không tìm thấy học viên phù hợp" : "Chưa có học viên trong danh mục này"}
              </h3>
              <p className="mx-auto mt-1.5 max-w-md text-xs text-muted sm:text-sm">
                {searchQuery
                  ? "Hãy thử tìm bằng từ khoá hoặc tên tài khoản khác."
                  : error
                  ? "Chưa kết nối được với máy chủ xếp hạng Supabase."
                  : "千里之行，始于足下 (Hành trình vạn dặm bắt đầu từ bước chân đầu tiên). Đăng ký ngay để ghi tên lên bảng vàng!"}
              </p>
              {!isAuthenticated && (
                <div className="mt-5">
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-dark"
                  >
                    <span>Tham gia ngay</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          )}
          {canExpandFirstPage && (
            <div className="flex flex-col items-center gap-2 border-t border-line bg-cream/50 px-5 py-4">
              <button
                type="button"
                disabled={loading}
                onClick={() => setVisibleCount(20)}
                className="inline-flex items-center gap-2 rounded-xl border border-brand/20 bg-white px-5 py-2.5 text-xs font-bold text-brand shadow-sm transition hover:border-brand/40 hover:bg-tint disabled:opacity-50"
              >
                <Users className="h-4 w-4" />
                {loading ? "Đang tải…" : "Xem thêm học viên"}
              </button>
              <span className="text-[11px] text-muted">Hiển thị Top 10 trong tổng số {filteredCount.toLocaleString("vi-VN")} học viên</span>
            </div>
          )}
          {showPagination && (
            <div className="flex flex-col gap-3 border-t border-line bg-cream/50 px-5 py-4 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-center text-muted sm:text-left">Trang {page + 1}/{pageCount} · Hạng {firstVisibleRank.toLocaleString("vi-VN")}–{lastVisibleRank.toLocaleString("vi-VN")}</span>
              <div className="flex justify-center gap-2">
                <button type="button" disabled={page === 0 || loading} onClick={() => { setPage((current) => Math.max(0, current - 1)); setVisibleCount(20); }} className="rounded-xl border border-line bg-white px-4 py-2 font-bold text-ink-2 hover:bg-tint disabled:opacity-40">Trang trước</button>
                <button type="button" disabled={page + 1 >= pageCount || loading} onClick={() => { setPage((current) => Math.min(pageCount - 1, current + 1)); setVisibleCount(20); }} className="rounded-xl bg-brand px-4 py-2 font-bold text-white hover:bg-brand-dark disabled:opacity-40">Trang sau</button>
              </div>
            </div>
          )}
        </div>

        {/* ================= MOTIVATIONAL CHINESE PROVERB BANNER ================= */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-gradient-to-r from-[#203a43] to-[#2c5364] p-5 text-white shadow-sm sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="font-hanzi text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                学如逆水行舟，不进则退
              </span>
              <p className="mt-1 text-xs text-slate-200">
                &ldquo;Học tập như chèo thuyền ngược nước, không tiến ắt sẽ lùi.&rdquo; — Duy trì bài học mỗi ngày để bảo vệ thứ hạng!
              </p>
            </div>
            <Link
              to="/hsk"
              className="shrink-0 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-900 shadow-sm transition-all hover:bg-amber-300 active:scale-95"
            >
              Học bài mới ngay
            </Link>
          </div>
        </div>

        {/* ================= GAMIFICATION & XP RULES EXPLANATION ================= */}
        <div className="mt-8 rounded-3xl border border-line bg-white p-6 shadow-card">
          <div className="flex items-center gap-2 border-b border-line pb-4">
            <Award className="h-5 w-5 text-gold" />
            <h2 className="font-display text-base font-bold text-ink sm:text-lg">
              Quy chế tích luỹ XP & Danh hiệu Bảng Vàng
            </h2>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Rule 1 */}
            <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <BookOpen className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-xs font-bold text-ink">Hoàn thành bài học</h3>
              <div className="mt-0.5 font-mono text-sm font-black text-brand">+25 XP / bài</div>
              <p className="mt-1 text-[11px] text-muted leading-relaxed">
                Được cộng khi hoàn thành đầy đủ các bước trong bài học HSK chuẩn.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-xs font-bold text-ink">Ghi nhớ từ vựng</h3>
              <div className="mt-0.5 font-mono text-sm font-black text-brand">+2–5 XP / từ</div>
              <p className="mt-1 text-[11px] text-muted leading-relaxed">
                +2 XP cho từ HSK/Boya đã thuộc; +5 XP cho mỗi từ YCT đánh dấu lần đầu.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <Target className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-xs font-bold text-ink">Kiểm tra & Thi thử</h3>
              <div className="mt-0.5 font-mono text-sm font-black text-brand">Tối đa 100 XP</div>
              <p className="mt-1 text-[11px] text-muted leading-relaxed">
                Điểm tốt nhất bài HSK và phần thưởng quiz/trò chơi YCT đều cộng vào cùng tổng XP.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="rounded-2xl border border-line/70 bg-cream/50 p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-xs font-bold text-ink">Thử thách & Đố vui</h3>
              <div className="mt-0.5 font-mono text-sm font-black text-rose-600">+5–10 XP / câu</div>
              <p className="mt-1 text-[11px] text-muted leading-relaxed">
                Các câu hỏi đố vui và bài tập thử thách đều ghi nhận điểm vào Bảng Vàng.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-tint/60 p-4 text-xs text-ink-2">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-brand mt-0.5" />
              <div>
                <strong>Một tài khoản, một tổng XP:</strong> thành tích được chống cộng lặp theo mã hoạt động và đồng bộ
                giữa các thiết bị. Khi bằng XP, chuỗi ngày học dài hơn được ưu tiên xếp hạng.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= XP RULES MODAL ================= */}
      {showRulesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-2xl animate-scaleUp">
            <button
              type="button"
              onClick={() => setShowRulesModal(false)}
              className="absolute right-4 top-4 rounded-xl p-2 text-muted hover:bg-cream hover:text-ink"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">Thể Lệ Bảng Vàng Hán Ngữ</h3>
                <p className="text-xs text-muted">Học tập mỗi ngày · Tích luỹ từng nét chữ</p>
              </div>
            </div>

            <div className="mt-5 space-y-3.5 text-xs text-ink-2">
              <div className="rounded-2xl border border-line bg-cream/50 p-3.5">
                <h4 className="font-bold text-brand">1. Phân định thứ hạng</h4>
                <p className="mt-1 leading-relaxed text-muted">
                  Thứ hạng được sắp xếp theo tổng XP trong khoảng thời gian tương ứng (Tuần hoặc Toàn bộ). Nếu hai sĩ tử
                  bằng điểm nhau, người có chuỗi ngày học (streak) dài hơn sẽ xếp trên.
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-cream/50 p-3.5">
                <h4 className="font-bold text-brand">2. Danh hiệu Tam Khôi phong kiến</h4>
                <p className="mt-1 leading-relaxed text-muted">
                  Top 3 học viên dẫn đầu được phong danh hiệu danh dự: 🥇 <strong>Trạng Nguyên</strong> (状元), 🥈{" "}
                  <strong>Bảng Nhãn</strong> (榜眼) và 🥉 <strong>Thám Hoa</strong> (探花).
                </p>
              </div>

              <div className="rounded-2xl border border-line bg-cream/50 p-3.5">
                <h4 className="font-bold text-brand">3. Chu kỳ làm mới Bảng Đua Top Tuần</h4>
                <p className="mt-1 leading-relaxed text-muted">
                  Bảng xếp hạng tuần tính XP phát sinh từ 00:00 thứ Hai đến 23:59 Chủ Nhật và tự động mở kỳ mới vào
                  00:00 sáng thứ Hai hàng tuần (GMT+7).
                </p>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowRulesModal(false)}
                className="w-full rounded-xl bg-brand py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-dark"
              >
                Đã hiểu thể lệ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
