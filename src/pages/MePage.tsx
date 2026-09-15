import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BookOpen,
  Camera,
  Flame,
  LogIn,
  LogOut,
  Trophy,
  Zap,
  Sparkles,
  Star,
  Target,
  CheckCircle2,
  ChevronRight,
  Bookmark,
  AlertCircle,
  ArrowUpRight,
  GraduationCap,
  ShieldCheck,
  Clock,
  Brain,
  Layers,
  Calendar,
  User,
  History,
  Check,
  Lightbulb,
  KeyRound,
  Pencil,
  Save,
  Settings,
  ChevronDown,
  X,
} from "lucide-react";
import {
  changePassword,
  logoutAccount,
  updateNickname,
  uploadAvatar,
  useAuth,
  useLeaderboard,
} from "../lib/auth";
import { useProgress } from "../lib/hsk";
import { calculateProgressStats } from "../lib/progress-stats";
import { HSK_LEVELS } from "../data/hskLevels";
import { VocabularyModal, type VocabularyTab } from "../components/VocabularyModal";
import { SkillRadarChart } from "../components/SkillRadarChart";
import {
  analyzeSkills,
  getSkillLevelLabel,
  type SkillAnalysisResult,
} from "../lib/skills";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function formatLessonId(id: string) {
  const match = /^(hsk(?:[1-6]|7-9))-(\d+)$/i.exec(id);
  if (!match) return id.toUpperCase();
  const levelCode = match[1].toUpperCase();
  const num = match[2];
  if (levelCode === "HSK7-9") return `HSK 7–9 · Phần ${num}`;
  return `${levelCode.replace("HSK", "HSK ")} · Bài ${num}`;
}

function getScoreBadge(score: number) {
  if (score >= 90)
    return { label: "Xuất sắc", style: "text-emerald-700 bg-emerald-50 border-emerald-300" };
  if (score >= 80)
    return { label: "Giỏi", style: "text-blue-700 bg-blue-50 border-blue-300" };
  if (score >= 60)
    return { label: "Đạt", style: "text-amber-700 bg-amber-50 border-amber-300" };
  return { label: "Cần ôn", style: "text-rose-700 bg-rose-50 border-rose-300" };
}

function SkillAnalysisCard({ analysis, className = "" }: { analysis: SkillAnalysisResult; className?: string }) {
  return (
    <section className={`overflow-hidden rounded-3xl border border-sky-200/70 bg-white shadow-card ${className}`}>
      <div className="border-b border-line bg-gradient-to-r from-sky-50 via-white to-pink-50 px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#17303F] text-white shadow-sm">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-display text-base font-black text-[#17303F] sm:text-lg">
                Bản Đồ Năng Lực Học Viên (Skill Matrix)
              </h2>
              <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted">
                Phân tích trực quan 4 kỹ năng cốt lõi giúp bạn phát hiện điểm mạnh và điểm hổng cần bù đắp.
              </p>
            </div>
          </div>
          <div className="shrink-0 rounded-2xl border border-sky-200 bg-white px-4 py-2.5 text-center shadow-xs">
            <div className="font-mono text-xl font-black text-sky-700">{analysis.averageScore}/100</div>
            <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
              Hạng {getSkillLevelLabel(analysis.averageScore)}
            </div>
          </div>
        </div>
        {analysis.isEstimated && (
          <p className="mt-3 rounded-xl border border-sky-100 bg-white/80 px-3 py-2 text-[11px] font-medium text-sky-800">
            Điểm ước tính ban đầu — Hãy hoàn thành thêm bài test để điểm số chuẩn xác hơn.
          </p>
        )}
      </div>

      <div className="grid items-center gap-4 p-4 sm:p-6 lg:grid-cols-2 lg:gap-7">
        <div className="flex min-w-0 justify-center rounded-2xl bg-slate-50/70 px-1 py-2 sm:px-4">
          <SkillRadarChart skills={analysis.skills} />
        </div>

        <div className="space-y-4">
          {analysis.skills.map((skill) => (
            <div key={skill.key}>
              <div className="mb-1.5 flex items-center justify-between gap-3 text-xs">
                <div className="min-w-0">
                  <span className="mr-1.5">{skill.icon}</span>
                  <span className="font-bold text-ink">{skill.label}</span>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <span className="font-mono font-black" style={{ color: skill.color }}>{skill.score}%</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                    {skill.levelLabel}
                  </span>
                </div>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{ width: `${skill.score}%`, backgroundColor: skill.color }}
                />
              </div>
              <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mb-4 flex flex-col gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-pink-50 p-4 sm:mx-6 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
          <div>
            <div className="text-xs font-black text-amber-900">
              Điểm cần bứt phá: {analysis.weakestSkill.label} · {analysis.weakestSkill.score}%
            </div>
            <p className="mt-1 text-[11px] leading-relaxed text-amber-900/80">{analysis.summaryFeedback}</p>
          </div>
        </div>
        <Link
          to={analysis.weakestSkill.actionRoute}
          className="inline-flex min-h-[42px] shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#17303F] px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-sky-800 active:scale-95"
        >
          {analysis.weakestSkill.actionText}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}

export function MePage() {
  const { user, isReady, isConfigured } = useAuth();
  const progress = useProgress();
  const { users: leaderboardUsers } = useLeaderboard({
    period: "overall",
    includeCurrent: true,
  });

  const avatarInput = useRef<HTMLInputElement>(null);
  const [avatarBusy, setAvatarBusy] = useState(false);
  const [avatarMessage, setAvatarMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [nickname, setNickname] = useState("");
  const [nicknameBusy, setNicknameBusy] = useState(false);
  const [nicknameMessage, setNicknameMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordBusy, setPasswordBusy] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<{ text: string; isError?: boolean } | null>(null);
  const [examTab, setExamTab] = useState<"best" | "recent">("best");
  const [vocabModalOpen, setVocabModalOpen] = useState(false);
  const [vocabInitialTab, setVocabInitialTab] = useState<VocabularyTab>("known");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settingsTab, setSettingsTab] = useState<"nickname" | "password">("nickname");

  useEffect(() => {
    if (user) setNickname(user.name);
  }, [user?.id, user?.name]);

  const handleOpenVocab = (tab: VocabularyTab) => {
    setVocabInitialTab(tab);
    setVocabModalOpen(true);
  };

  const stats = useMemo(() => calculateProgressStats(progress), [progress]);
  const skillAnalysis = useMemo(() => analyzeSkills(progress), [
    progress.known,
    progress.mistakes,
    progress.lessons,
    progress.attempts,
    progress.practiceHistory,
  ]);

  // Leaderboard Rank
  const userRank = useMemo(() => {
    if (!user) return null;
    return leaderboardUsers.find((u) => u.id === user.id)?.rank ?? null;
  }, [leaderboardUsers, user]);

  // Scored Lessons & Attempts
  const scoredLessons = useMemo(() => {
    return Object.entries(progress.lessons)
      .filter(([, lesson]) => typeof lesson.score === "number")
      .sort(([, first], [, second]) => {
        const dateA = Date.parse(first.scoreUpdatedAt || first.updatedAt || "");
        const dateB = Date.parse(second.scoreUpdatedAt || second.updatedAt || "");
        return dateB - dateA;
      });
  }, [progress.lessons]);

  const recentAttempts = useMemo(() => {
    return [...progress.attempts].reverse().slice(0, 10);
  }, [progress.attempts]);

  const handleAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    setAvatarBusy(true);
    setAvatarMessage(null);
    try {
      await uploadAvatar(file);
      setAvatarMessage({ text: "Ảnh đại diện đã được cập nhật thành công!" });
    } catch (reason) {
      setAvatarMessage({
        text: reason instanceof Error ? reason.message : "Không thể cập nhật ảnh đại diện.",
        isError: true,
      });
    } finally {
      setAvatarBusy(false);
      setTimeout(() => setAvatarMessage(null), 4000);
    }
  };

  const handleNickname = async (event: React.FormEvent) => {
    event.preventDefault();
    setNicknameBusy(true);
    setNicknameMessage(null);
    try {
      const savedName = await updateNickname(nickname);
      setNickname(savedName);
      setNicknameMessage({ text: "Nickname đã được cập nhật trên bảng xếp hạng." });
    } catch (reason) {
      setNicknameMessage({
        text: reason instanceof Error ? reason.message : "Không thể cập nhật Nickname.",
        isError: true,
      });
    } finally {
      setNicknameBusy(false);
    }
  };

  const handlePassword = async (event: React.FormEvent) => {
    event.preventDefault();
    setPasswordMessage(null);
    if (newPassword !== confirmPassword) {
      setPasswordMessage({ text: "Hai lần nhập mật khẩu mới chưa trùng nhau.", isError: true });
      return;
    }
    setPasswordBusy(true);
    try {
      await changePassword(currentPassword, newPassword);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setPasswordMessage({ text: "Mật khẩu đã được thay đổi thành công." });
    } catch (reason) {
      setPasswordMessage({
        text: reason instanceof Error ? reason.message : "Không thể thay đổi mật khẩu.",
        isError: true,
      });
    } finally {
      setPasswordBusy(false);
    }
  };

  // Loading State
  if (!isReady) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-page px-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-brand animate-pulse">
          <GraduationCap className="h-7 w-7" />
        </div>
        <p className="mt-4 text-sm font-semibold text-ink-2">Đang tải hồ sơ học viên…</p>
      </div>
    );
  }

  // ================= GUEST PROFILE STATE =================
  if (!user) {
    return (
      <div className="min-h-screen bg-page pb-20">
        {/* Guest Banner */}
        <div className="border-b border-line/60 bg-gradient-to-b from-[#122736] via-[#1B384D] to-[#254A65] px-4 pt-8 pb-10 sm:pb-12 text-white shadow-xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>HỒ SƠ HỌC TẬP KHÁCH</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Trung Tâm Học Tập Của Bạn
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-200 sm:text-sm">
              Tiến độ học tập đang được ghi nhận trực tiếp trên trình duyệt này. Tạo tài khoản hoặc đăng nhập để
              bảo lưu vĩnh viễn và vinh danh trên Bảng Vàng toàn quốc.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 max-w-4xl px-4 sm:px-6">
          {/* Guest CTA Card */}
          <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center sm:justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-amber-100 text-amber-700 text-2xl shadow-inner">
                  👤
                </div>
                <div>
                  <h2 className="text-lg font-bold text-ink sm:text-xl">Chưa liên kết tài khoản đám mây</h2>
                  <p className="mt-1 text-xs text-muted max-w-md">
                    {isConfigured
                      ? "Kết nối tài khoản Supabase ngay để không lo mất dữ liệu khi đổi thiết bị hoặc xoá cache trình duyệt."
                      : "Hệ thống tài khoản Supabase đang bảo trì hoặc chưa được cấu hình."}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
                <Link
                  to="/register"
                  className="rounded-xl bg-brand px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-brand-dark transition-all"
                >
                  Tạo tài khoản miễn phí
                </Link>
                <Link
                  to="/login"
                  className="rounded-xl border border-line bg-cream px-4 py-2.5 text-xs font-semibold text-ink-2 hover:bg-tint transition-all"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>

            {/* Local Stats Preview */}
            <div className="mt-8 border-t border-line/60 pt-6">
              <h3 className="text-xs font-bold tracking-wider text-muted uppercase">
                Thành tích ghi nhận trên máy này
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-line bg-cream/50 p-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-amber-600">
                    <Zap className="h-3.5 w-3.5 fill-amber-500" />
                    <span>Tổng XP</span>
                  </div>
                  <div className="mt-1 font-mono text-xl font-black text-brand">
                    {stats.xp.toLocaleString("vi-VN")}
                  </div>
                </div>

                <div className="rounded-2xl border border-line bg-cream/50 p-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-emerald-600">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>Bài hoàn thành</span>
                  </div>
                  <div className="mt-1 font-mono text-xl font-black text-brand">{stats.completed}</div>
                </div>

                <div className="rounded-2xl border border-line bg-cream/50 p-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-rose-600">
                    <Flame className="h-3.5 w-3.5 fill-rose-500" />
                    <span>Chuỗi Streak</span>
                  </div>
                  <div className="mt-1 font-mono text-xl font-black text-brand">{stats.streak} ngày</div>
                </div>

                <div className="rounded-2xl border border-line bg-cream/50 p-4 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-xs font-semibold text-blue-600">
                    <Trophy className="h-3.5 w-3.5" />
                    <span>Điểm kiểm tra TB</span>
                  </div>
                  <div className="mt-1 font-mono text-xl font-black text-brand">{stats.averageScore}%</div>
                </div>
              </div>
            </div>

            <SkillAnalysisCard analysis={skillAnalysis} className="mt-6" />

            {/* Local Vocabulary & Flashcard Cards for Guest */}
            <div className="mt-6 border-t border-line/60 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-xs font-bold tracking-wider text-muted uppercase flex items-center gap-1.5">
                  <Brain className="h-4 w-4 text-brand" />
                  <span>Kho Dữ Liệu Từ Vựng & Flashcard</span>
                </h3>
                <span className="text-[11px] text-muted">Lưu trên trình duyệt này</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => handleOpenVocab("known")}
                  title="Bấm để xem danh sách từ vựng đã thuộc"
                  className="group flex items-center justify-between rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-emerald-50/30 p-3.5 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-300 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 transition-transform group-hover:scale-105">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xl font-black text-emerald-800">
                        {progress.known.length.toLocaleString("vi-VN")}
                      </div>
                      <div className="text-xs font-bold text-emerald-900">Từ đã thuộc</div>
                    </div>
                  </div>
                  <span className="rounded-lg bg-emerald-100/90 px-2 py-1 text-[10px] font-bold text-emerald-800 opacity-80 group-hover:opacity-100 transition-all shrink-0">
                    Xem ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenVocab("bookmarks")}
                  title="Bấm để xem danh sách từ vựng đã đánh dấu"
                  className="group flex items-center justify-between rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 to-amber-50/30 p-3.5 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-300 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition-transform group-hover:scale-105">
                      <Bookmark className="h-5 w-5 fill-amber-700/20" />
                    </div>
                    <div>
                      <div className="font-mono text-xl font-black text-amber-800">
                        {progress.bookmarks.length.toLocaleString("vi-VN")}
                      </div>
                      <div className="text-xs font-bold text-amber-900">Đã đánh dấu</div>
                    </div>
                  </div>
                  <span className="rounded-lg bg-amber-100/90 px-2 py-1 text-[10px] font-bold text-amber-800 opacity-80 group-hover:opacity-100 transition-all shrink-0">
                    Xem ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenVocab("mistakes")}
                  title="Bấm để xem danh sách từ vựng cần ôn lại"
                  className="group flex items-center justify-between rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50/80 to-rose-50/30 p-3.5 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-rose-300 active:scale-98"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-700 transition-transform group-hover:scale-105">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-xl font-black text-rose-800">
                        {progress.mistakes.length.toLocaleString("vi-VN")}
                      </div>
                      <div className="text-xs font-bold text-rose-900">Cần ôn lại</div>
                    </div>
                  </div>
                  <span className="rounded-lg bg-rose-100/90 px-2 py-1 text-[10px] font-bold text-rose-800 opacity-80 group-hover:opacity-100 transition-all shrink-0">
                    Xem ↗
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vocabulary Detail Modal for Guest */}
        <VocabularyModal
          isOpen={vocabModalOpen}
          onClose={() => setVocabModalOpen(false)}
          initialTab={vocabInitialTab}
        />
      </div>
    );
  }

  // ================= LOGGED-IN LEARNER PROFILE =================
  const joinDate = user.createdAt
    ? new Date(user.createdAt).toLocaleDateString("vi-VN", { month: "long", year: "numeric" })
    : null;

  return (
    <div className="min-h-screen bg-page pb-24 selection:bg-brand/20 selection:text-brand-dark">
      {/* ================= PROFILE HERO BANNER ================= */}
      <div className="relative overflow-hidden border-b border-line/60 bg-gradient-to-b from-[#122736] via-[#1B384D] to-[#254A65] px-4 pt-8 pb-10 sm:pb-12 text-white shadow-xl sm:px-6 lg:px-8">
        {/* Subtle Decorative Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -right-24 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />

        {/* Chinese Calligraphy Watermark */}
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none font-display text-[100px] font-black tracking-widest text-white/[0.04] sm:right-10 sm:text-[170px] lg:text-[220px]">
          学而不厌
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Top Bar: Settings Toggle + Sync Status + Logout */}
          <div className="flex items-center justify-between gap-2 text-xs mb-4">
            {/* Nút Cài đặt tài khoản nằm TRÊN ô HÁN NGỮ SĨ TỬ */}
            <button
              type="button"
              onClick={() => setIsSettingsOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all shadow-xs backdrop-blur-md active:scale-95 ${
                isSettingsOpen
                  ? "border-amber-400 bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <Settings className={`h-3.5 w-3.5 transition-transform duration-300 ${isSettingsOpen ? "rotate-90 text-slate-950" : "text-white/80"}`} />
              <span>Cài đặt</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isSettingsOpen ? "rotate-180 text-slate-950" : "text-white/70"}`} />
            </button>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Cloud sync status indicator */}
              <span className="flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                      progress.syncStatus === "error"
                        ? "bg-rose-400"
                        : progress.syncStatus === "syncing"
                        ? "bg-amber-400"
                        : "bg-emerald-400"
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      progress.syncStatus === "error"
                        ? "bg-rose-500"
                        : progress.syncStatus === "syncing"
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }`}
                  />
                </span>
                <span className="hidden sm:inline">
                  {progress.syncStatus === "synced" && "Đồng bộ an toàn"}
                  {progress.syncStatus === "syncing" && "Đang đồng bộ…"}
                  {progress.syncStatus === "local" && "Lưu trên máy"}
                  {progress.syncStatus === "error" && "Chưa đồng bộ"}
                </span>
              </span>

              {/* Logout Button */}
              <button
                type="button"
                onClick={() => void logoutAccount()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
              >
                <LogOut size={13} />
                <span className="hidden xs:inline">Đăng xuất</span>
              </button>
            </div>
          </div>

          {/* ================= COLLAPSIBLE ACCOUNT SETTINGS PANEL (SIMPLIFIED & COMPACT) ================= */}
          {isSettingsOpen && (
            <div className="mb-6 max-w-lg rounded-2xl border border-white/20 bg-white text-slate-900 shadow-2xl transition-all animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Header with minimal tab switcher & close button */}
              <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-5">
                <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setSettingsTab("nickname")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all ${
                      settingsTab === "nickname"
                        ? "bg-white text-sky-800 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Pencil size={13} />
                    <span>Đổi tên</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSettingsTab("password")}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-all ${
                      settingsTab === "password"
                        ? "bg-white text-amber-800 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <KeyRound size={13} />
                    <span>Đổi mật khẩu</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(false)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition active:scale-95"
                  title="Đóng cài đặt"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Tab 1: Đổi Nickname */}
              {settingsTab === "nickname" && (
                <form onSubmit={handleNickname} className="p-4 sm:p-5">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="settings-nickname" className="text-xs font-bold text-slate-700">
                        Tên hiển thị công khai
                      </label>
                      <span className="text-[11px] font-mono text-slate-400">@{user.username}</span>
                    </div>
                    <input
                      id="settings-nickname"
                      required
                      minLength={2}
                      maxLength={80}
                      value={nickname}
                      onChange={(event) => setNickname(event.target.value)}
                      placeholder="Nhập nickname mới..."
                      className="w-full rounded-xl border border-line bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100"
                    />
                    <p className="mt-1.5 text-[11px] text-slate-400">
                      Tên này hiển thị trên Bảng Xếp Hạng và hồ sơ của bạn.
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsSettingsOpen(false)}
                      className="rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 transition"
                    >
                      Đóng
                    </button>
                    <button
                      type="submit"
                      disabled={nicknameBusy || nickname.trim() === user.name}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-sky-700 px-4 py-1.5 text-xs font-bold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
                    >
                      <Save size={13} />
                      <span>{nicknameBusy ? "Đang lưu…" : "Lưu thay đổi"}</span>
                    </button>
                  </div>

                  {nicknameMessage && (
                    <p
                      className={`mt-2.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                        nicknameMessage.isError
                          ? "bg-rose-50 text-rose-600 border border-rose-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {nicknameMessage.text}
                    </p>
                  )}
                </form>
              )}

              {/* Tab 2: Đổi Mật khẩu */}
              {settingsTab === "password" && (
                <form onSubmit={handlePassword} className="p-4 sm:p-5">
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="settings-current-pwd" className="mb-1 block text-xs font-bold text-slate-700">
                        Mật khẩu hiện tại
                      </label>
                      <input
                        id="settings-current-pwd"
                        required
                        type="password"
                        autoComplete="current-password"
                        placeholder="••••••••"
                        value={currentPassword}
                        onChange={(event) => setCurrentPassword(event.target.value)}
                        className="w-full rounded-xl border border-line bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="settings-new-pwd" className="mb-1 block text-xs font-bold text-slate-700">
                          Mật khẩu mới
                        </label>
                        <input
                          id="settings-new-pwd"
                          required
                          type="password"
                          minLength={6}
                          autoComplete="new-password"
                          placeholder="Ít nhất 6 ký tự"
                          value={newPassword}
                          onChange={(event) => setNewPassword(event.target.value)}
                          className="w-full rounded-xl border border-line bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                        />
                      </div>
                      <div>
                        <label htmlFor="settings-confirm-pwd" className="mb-1 block text-xs font-bold text-slate-700">
                          Nhập lại mật khẩu mới
                        </label>
                        <input
                          id="settings-confirm-pwd"
                          required
                          type="password"
                          minLength={6}
                          autoComplete="new-password"
                          placeholder="Nhập lại mật khẩu"
                          value={confirmPassword}
                          onChange={(event) => setConfirmPassword(event.target.value)}
                          className="w-full rounded-xl border border-line bg-slate-50/60 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-100"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsSettingsOpen(false)}
                      className="rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-500 hover:bg-slate-100 transition"
                    >
                      Đóng
                    </button>
                    <button
                      type="submit"
                      disabled={passwordBusy}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 px-4 py-1.5 text-xs font-bold text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
                    >
                      <KeyRound size={13} />
                      <span>{passwordBusy ? "Đang đổi…" : "Cập nhật mật khẩu"}</span>
                    </button>
                  </div>

                  {passwordMessage && (
                    <p
                      className={`mt-2.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                        passwordMessage.isError
                          ? "bg-rose-50 text-rose-600 border border-rose-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {passwordMessage.text}
                    </p>
                  )}
                </form>
              )}
            </div>
          )}

          {/* Ô HÁN NGỮ SĨ TỬ */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 font-semibold text-amber-300 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-300" />
            <span>HÁN NGỮ SĨ TỬ · 学海无涯</span>
          </div>

          {/* User Profile Card Header */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
            {/* Avatar with Camera Overlay */}
            <div className="group relative shrink-0">
              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-amber-400/80 bg-tint font-black text-brand text-2xl sm:text-3xl shadow-xl ring-4 ring-amber-400/20">
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt={`Ảnh đại diện ${user.name}`} className="h-full w-full object-cover" />
                ) : (
                  initials(user.name)
                )}
              </div>

              {/* Upload trigger overlay button */}
              <input
                ref={avatarInput}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleAvatar}
                className="hidden"
              />
              <button
                type="button"
                disabled={avatarBusy}
                onClick={() => avatarInput.current?.click()}
                title="Thay đổi ảnh đại diện"
                className="absolute -bottom-1 -right-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-amber-500 text-slate-950 shadow-md transition-all hover:bg-amber-400 active:scale-95 disabled:opacity-50"
              >
                <Camera size={14} className="sm:hidden" />
                <Camera size={16} className="hidden sm:block" />
              </button>
            </div>

            {/* Profile Info */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <h1 className="truncate font-display text-xl font-bold sm:text-2xl lg:text-3xl text-white">
                  {user.name}
                </h1>
                <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-mono font-medium text-amber-200">
                  @{user.username}
                </span>
                <span className="rounded-full border border-amber-300/40 bg-amber-400/20 px-2.5 py-0.5 text-xs font-bold text-amber-300">
                  {stats.hsk}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-xs text-slate-300">
                {joinDate && (
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-amber-300" />
                    Tham gia từ {joinDate}
                  </span>
                )}
                <span>•</span>
                {userRank ? (
                  <Link
                    to="/xep-hang"
                    className="flex items-center gap-1 font-bold text-amber-300 hover:underline"
                  >
                    <Trophy size={13} className="text-amber-400" />
                    Hạng #{userRank} Bảng Vàng
                  </Link>
                ) : (
                  <Link to="/xep-hang" className="text-slate-300 hover:text-white hover:underline">
                    Xem Bảng Xếp Hạng →
                  </Link>
                )}
              </div>

              {/* Fast Action Buttons */}
              <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <Link
                  to="/hsk"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-3.5 py-1.5 sm:py-2 text-xs font-bold text-slate-900 shadow-sm transition-all hover:bg-amber-300 active:scale-95"
                >
                  <BookOpen size={14} />
                  <span>Vào học tiếp</span>
                </Link>
                <Link
                  to="/xep-hang"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3.5 py-1.5 sm:py-2 text-xs font-semibold text-white transition-all hover:bg-white/20 active:scale-95"
                >
                  <Trophy size={14} className="text-amber-400" />
                  <span>Bảng Phong Vân</span>
                </Link>
                {avatarMessage && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      avatarMessage.isError ? "text-rose-300" : "text-emerald-300"
                    }`}
                  >
                    <Check size={14} />
                    {avatarMessage.text}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN DASHBOARD CONTAINER ================= */}
      <div className="mx-auto mt-6 sm:mt-8 max-w-5xl px-3.5 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {/* ================= 4 CORE STATS CARDS ================= */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
          {/* 1. Tổng XP */}
          <div className="rounded-2xl border border-line bg-white p-3.5 sm:p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wide">Tổng XP</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-amber-500" />
              </div>
            </div>
            <div className="mt-1.5 sm:mt-2 font-mono text-xl sm:text-2xl lg:text-3xl font-black text-brand truncate">
              {stats.xp.toLocaleString("vi-VN")}
            </div>
            <div className="mt-1 text-[10.5px] sm:text-[11px] font-semibold text-emerald-600 truncate">
              +{stats.weeklyXp.toLocaleString("vi-VN")} XP tuần này
            </div>
          </div>

          {/* 2. Bài hoàn thành */}
          <div className="rounded-2xl border border-line bg-white p-3.5 sm:p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wide">Bài hoàn thành</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
            <div className="mt-1.5 sm:mt-2 font-mono text-xl sm:text-2xl lg:text-3xl font-black text-brand truncate">
              {stats.completed}
            </div>
            <div className="mt-1 text-[10.5px] sm:text-[11px] text-muted truncate">Chuẩn New HSK 3.0</div>
          </div>

          {/* 3. Điểm trung bình */}
          <div className="rounded-2xl border border-line bg-white p-3.5 sm:p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wide">Điểm TB test</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
            </div>
            <div className="mt-1.5 sm:mt-2 font-mono text-xl sm:text-2xl lg:text-3xl font-black text-brand truncate">
              {stats.averageScore}%
            </div>
            <div className="mt-1 text-[10.5px] sm:text-[11px] text-muted truncate">
              {stats.averageScore >= 80 ? "Năng lực xuất sắc" : "Cần rèn luyện thêm"}
            </div>
          </div>

          {/* 4. Chuỗi streak */}
          <div className="rounded-2xl border border-line bg-white p-3.5 sm:p-5 shadow-card">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wide">Chuỗi streak</span>
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Flame className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-rose-500 text-rose-500" />
              </div>
            </div>
            <div className="mt-1.5 sm:mt-2 font-mono text-xl sm:text-2xl lg:text-3xl font-black text-brand truncate">
              {stats.streak}
              <span className="text-xs font-bold text-muted ml-1">ngày</span>
            </div>
            <div className="mt-1 text-[10.5px] sm:text-[11px] text-rose-600 font-semibold truncate">
              Giữ vững ngọn lửa
            </div>
          </div>
        </div>



        <SkillAnalysisCard analysis={skillAnalysis} />

        {/* ================= KHO DỮ LIỆU TỪ VỰNG ================= */}
        <div className="rounded-3xl border border-line bg-white p-4 sm:p-6 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3 border-b border-line pb-3.5 sm:pb-4">
            <div>
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
                <Brain className="h-5 w-5 text-brand" />
                <span>Kho Dữ Liệu Từ Vựng & Flashcard</span>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Theo dõi quá trình ghi nhớ và các từ vựng cần lưu ý rèn luyện
              </p>
            </div>
            <Link
              to="/hsk"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-dark self-start sm:self-auto"
            >
              <span>Luyện Flashcard</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-3.5 sm:mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3">
            {/* 1. Từ đã thuộc */}
            <button
              type="button"
              onClick={() => handleOpenVocab("known")}
              title="Bấm để xem danh sách từ vựng đã thuộc"
              className="group flex items-center justify-between rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-emerald-50/30 p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-emerald-300 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition-transform group-hover:scale-105">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-emerald-800">
                    {progress.known.length.toLocaleString("vi-VN")}
                  </div>
                  <div className="text-xs font-bold text-emerald-900">Từ vựng đã thuộc</div>
                  <div className="text-[10px] text-emerald-700">+2 XP cho mỗi từ</div>
                </div>
              </div>
              <span className="rounded-lg bg-emerald-100/90 px-2 py-1 text-[10.5px] font-bold text-emerald-800 opacity-80 group-hover:opacity-100 group-hover:bg-emerald-200 transition-all shrink-0">
                Xem từ ↗
              </span>
            </button>

            {/* 2. Từ lưu dấu bookmark */}
            <button
              type="button"
              onClick={() => handleOpenVocab("bookmarks")}
              title="Bấm để xem danh sách từ vựng đã đánh dấu"
              className="group flex items-center justify-between rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/80 to-amber-50/30 p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-amber-300 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-transform group-hover:scale-105">
                  <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 fill-amber-700/20" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-amber-800">
                    {progress.bookmarks.length.toLocaleString("vi-VN")}
                  </div>
                  <div className="text-xs font-bold text-amber-900">Từ đã đánh dấu</div>
                  <div className="text-[10px] text-amber-700">Bộ sưu tập quan trọng</div>
                </div>
              </div>
              <span className="rounded-lg bg-amber-100/90 px-2 py-1 text-[10.5px] font-bold text-amber-800 opacity-80 group-hover:opacity-100 group-hover:bg-amber-200 transition-all shrink-0">
                Xem từ ↗
              </span>
            </button>

            {/* 3. Từ vựng cần khắc phục */}
            <button
              type="button"
              onClick={() => handleOpenVocab("mistakes")}
              title="Bấm để xem danh sách từ vựng cần ôn lại"
              className="group flex items-center justify-between rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50/80 to-rose-50/30 p-3.5 sm:p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-rose-300 active:scale-98"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700 transition-transform group-hover:scale-105">
                  <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="font-mono text-xl sm:text-2xl font-black text-rose-800">
                    {progress.mistakes.length.toLocaleString("vi-VN")}
                  </div>
                  <div className="text-xs font-bold text-rose-900">Từ cần ôn lại</div>
                  <div className="text-[10px] text-rose-700">Từng trả lời sai</div>
                </div>
              </div>
              <span className="rounded-lg bg-rose-100/90 px-2 py-1 text-[10.5px] font-bold text-rose-800 opacity-80 group-hover:opacity-100 group-hover:bg-rose-200 transition-all shrink-0">
                Xem từ ↗
              </span>
            </button>
          </div>
        </div>

        {/* ================= TIẾN ĐỘ 7 CẤP ĐỘ HSK ================= */}
        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
                <Layers className="h-5 w-5 text-brand" />
                <span>Tiến Độ Theo Cấp Độ HSK (New HSK 3.0)</span>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Lộ trình 7 nấc thang từ Sơ cấp đến Bậc thầy Hán ngữ
              </p>
            </div>
            <Link
              to="/hsk"
              className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:text-brand-dark"
            >
              <span>Xem toàn bộ</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HSK_LEVELS.map((level) => {
              const doneCount = Object.entries(progress.lessons).filter(
                ([id, entry]) => id.startsWith(`${level.code}-`) && entry.completed
              ).length;
              const totalLessons = level.lessonsCount || 1;
              const percent = Math.min(100, Math.round((doneCount / totalLessons) * 100));

              return (
                <Link
                  key={level.code}
                  to={`/hsk/${level.code}`}
                  className="group relative overflow-hidden rounded-2xl border border-line p-4 transition-all hover:border-brand/40 hover:shadow-sm hover:bg-cream/30"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="rounded-md px-2 py-0.5 text-xs font-bold text-white shadow-xs"
                          style={{ backgroundColor: level.accentColor }}
                        >
                          {level.name}
                        </span>
                        <span className="text-xs font-bold text-ink">{level.title}</span>
                      </div>
                      <div className="mt-2 text-xs text-muted">
                        Hoàn thành{" "}
                        <strong className="text-ink font-mono font-bold">{doneCount}</strong> / {totalLessons} bài
                      </div>
                    </div>
                    <span className="font-mono text-sm font-black text-brand">{percent}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-track">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${percent}%`,
                        backgroundColor: level.accentColor,
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ================= BẢNG ĐIỂM & LỊCH SỬ THI THỬ ================= */}
        <div className="rounded-3xl border border-line bg-white p-4 sm:p-6 shadow-card">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-line pb-3.5 sm:pb-4">
            <div>
              <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink sm:text-lg">
                <Trophy className="h-5 w-5 text-gold" />
                <span>Bảng Điểm & Lịch Sử Kiểm Tra</span>
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Điểm số bài kiểm tra được tích luỹ trực tiếp vào xếp hạng XP
              </p>
            </div>

            {/* Tab Switcher */}
            <div className="flex rounded-xl bg-tint p-1 text-xs font-semibold self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setExamTab("best")}
                className={`rounded-lg px-2.5 sm:px-3 py-1.5 transition-all text-[11px] sm:text-xs ${
                  examTab === "best"
                    ? "bg-white text-brand shadow-xs font-bold"
                    : "text-ink-2 hover:text-brand"
                }`}
              >
                Điểm cao nhất ({scoredLessons.length})
              </button>
              <button
                type="button"
                onClick={() => setExamTab("recent")}
                className={`rounded-lg px-2.5 sm:px-3 py-1.5 transition-all text-[11px] sm:text-xs ${
                  examTab === "recent"
                    ? "bg-white text-brand shadow-xs font-bold"
                    : "text-ink-2 hover:text-brand"
                }`}
              >
                Lịch sử gần đây ({recentAttempts.length})
              </button>
            </div>
          </div>

          {/* Tab 1: Scored Lessons Best */}
          {examTab === "best" && (
            <div className="mt-4">
              {scoredLessons.length > 0 ? (
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {scoredLessons.map(([id, lesson]) => {
                    const badge = getScoreBadge(lesson.score || 0);
                    return (
                      <Link
                        key={id}
                        to={`/lesson/${id}/test`}
                        className="group flex items-center justify-between rounded-2xl border border-line bg-cream/40 p-3.5 transition-all hover:border-brand/40 hover:bg-tint/40 hover:shadow-xs"
                      >
                        <div className="min-w-0">
                          <div className="font-display text-xs font-bold text-ink group-hover:text-brand transition-colors">
                            {formatLessonId(id)}
                          </div>
                          <div className="text-[11px] text-muted">
                            Làm bài lại để cải thiện XP →
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-bold ${badge.style}`}>
                            {badge.label}
                          </span>
                          <span className="font-mono text-base font-black text-brand">
                            {lesson.score}%
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <Award className="mx-auto h-10 w-10 text-muted" />
                  <p className="mt-2 text-xs font-bold text-ink">Chưa có bài kiểm tra nào được hoàn thành</p>
                  <p className="mt-1 text-xs text-muted">
                    Làm bài kiểm tra cuối mỗi bài học để nhận thêm lên tới 100 XP!
                  </p>
                  <Link
                    to="/hsk"
                    className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-brand-dark"
                  >
                    <span>Làm bài kiểm tra ngay</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Recent Attempts */}
          {examTab === "recent" && (
            <div className="mt-4">
              {recentAttempts.length > 0 ? (
                <div className="divide-y divide-line/60">
                  {recentAttempts.map((attempt, index) => {
                    const badge = getScoreBadge(attempt.score);
                    const formattedDate = new Date(attempt.at).toLocaleString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    });

                    return (
                      <div
                        key={`${attempt.at}-${index}`}
                        className="flex items-center justify-between py-3 px-2 transition-colors hover:bg-cream/40"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint text-brand text-xs font-bold">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-display text-xs font-bold text-ink">
                              {formatLessonId(attempt.lessonId)}
                            </div>
                            <div className="text-[11px] text-muted">{formattedDate}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`rounded-lg border px-2 py-0.5 text-[10px] font-bold ${badge.style}`}>
                            {badge.label}
                          </span>
                          <span className="font-mono text-base font-black text-brand">
                            {attempt.score}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="py-10 text-center">
                  <History className="mx-auto h-10 w-10 text-muted" />
                  <p className="mt-2 text-xs font-bold text-ink">Chưa có nhật ký làm bài</p>
                  <p className="mt-1 text-xs text-muted">
                    Các lượt thi trắc nghiệm sẽ tự động lưu lại tại đây.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ================= SECURITY & SYNC FOOTER ================= */}
        <div className="rounded-2xl border border-line bg-white/70 p-4 text-center text-xs text-muted">
          <div className="flex items-center justify-center gap-1.5 font-semibold text-ink-2">
            <ShieldCheck className="h-4 w-4 text-brand" />
            <span>Dữ liệu học tập được bảo vệ & sao lưu tự động</span>
          </div>
          <p className="mt-1 text-[11px]">
            {progress.syncStatus === "synced" && "Tiến độ học tập và điểm số đã được đồng bộ dữ liệu an toàn với hệ thống đám mây."}
            {progress.syncStatus === "syncing" && "Đang gửi dữ liệu đồng bộ lên hệ thống đám mây…"}
            {progress.syncStatus === "local" && "Tiến độ đang lưu trên trình duyệt này."}
            {progress.syncStatus === "error" && (progress.syncError || "Không thể đồng bộ; bản trên thiết bị vẫn được bảo lưu an toàn.")}
          </p>
        </div>
      </div>

      {/* Vocabulary Detail Modal */}
      <VocabularyModal
        isOpen={vocabModalOpen}
        onClose={() => setVocabModalOpen(false)}
        initialTab={vocabInitialTab}
      />
    </div>
  );
}
