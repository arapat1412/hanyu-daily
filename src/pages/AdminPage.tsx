import React, { useEffect, useState } from "react";
import {
  Activity,
  AtSign,
  Ban,
  BarChart3,
  Bot,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe2,
  ImagePlus,
  LockKeyhole,
  LogOut,
  MessageSquare,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Search,
  ShieldCheck,
  Trash2,
  UserCheck,
  Users,
  UserX,
  X,
} from "lucide-react";
import {
  AdminFeedback,
  AdminSummary,
  AdminUser,
  AdminVisit,
  BlockedIp,
  blockIp,
  checkAdminAccess,
  createSyntheticLearner,
  deleteSyntheticLearner,
  fetchAdminFeedback,
  fetchAdminSummary,
  fetchAdminUsers,
  fetchAdminVisits,
  fetchBlockedIps,
  fetchSyntheticLearners,
  removeSyntheticAvatar,
  setSyntheticLearnerEnabled,
  setSyntheticLearnersEnabled,
  SyntheticLearner,
  SyntheticLearnerInput,
  unblockIp,
  updateSyntheticLearner,
  uploadSyntheticAvatar,
  VisitKind,
} from "../lib/admin";
import { loginAccount, logoutAccount, useAuth } from "../lib/auth";

type AccessState = "checking" | "signed-out" | "denied" | "allowed";
type AdminTab = "overview" | "visits" | "blocked" | "users" | "synthetic" | "feedback";

const PAGE_SIZE = 30;
const HSK_OPTIONS = ["Mới học", "HSK 1", "HSK 2", "HSK 3", "HSK 4", "HSK 5", "HSK 6", "HSK 7-9"];
const SITE_LAUNCH_UTC = Date.UTC(2026, 8, 10);

function currentSiteAgeDays() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Bangkok",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value || 0);
  const bangkokDayUtc = Date.UTC(value("year"), value("month") - 1, value("day"));
  return Math.max(1, Math.floor((bangkokDayUtc - SITE_LAUNCH_UTC) / 86_400_000) + 1);
}

function formatDate(value: string | null) {
  if (!value) return "Chưa ghi nhận";
  return new Intl.DateTimeFormat("vi-VN", {
    dateStyle: "short",
    timeStyle: "medium",
    timeZone: "Asia/Bangkok",
  }).format(new Date(value));
}

function compactId(value: string) {
  return value.length > 16 ? `${value.slice(0, 8)}…${value.slice(-4)}` : value;
}

function Pagination({
  page,
  total,
  onChange,
}: {
  page: number;
  total: number;
  onChange: (page: number) => void;
}) {
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (total <= PAGE_SIZE) return null;
  return (
    <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3 text-xs text-slate-500">
      <span>Trang {page + 1}/{pageCount} · {total.toLocaleString("vi-VN")} mục</span>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, page - 1))}
          disabled={page === 0}
          className="rounded-lg border border-slate-200 p-2 disabled:opacity-40"
          aria-label="Trang trước"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => onChange(Math.min(pageCount - 1, page + 1))}
          disabled={page + 1 >= pageCount}
          className="rounded-lg border border-slate-200 p-2 disabled:opacity-40"
          aria-label="Trang sau"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function EmptyState({ loading }: { loading: boolean }) {
  return (
    <div className="px-6 py-14 text-center text-sm text-slate-500">
      {loading ? "Đang tải dữ liệu…" : "Chưa có dữ liệu."}
    </div>
  );
}

function SyntheticLearnerEditor({
  learner,
  busy,
  onClose,
  onSave,
}: {
  learner: SyntheticLearner | null;
  busy: boolean;
  onClose: () => void;
  onSave: (input: SyntheticLearnerInput, avatarFile: File | null) => void;
}) {
  const [displayName, setDisplayName] = useState(learner?.displayName || "");
  const [xp, setXp] = useState(String(learner?.xp ?? 0));
  const [hsk, setHsk] = useState(learner?.hsk || "Mới học");
  const [dailyMin, setDailyMin] = useState(String(learner?.dailyXpMin ?? 5));
  const [dailyMax, setDailyMax] = useState(String(learner?.dailyXpMax ?? 30));
  const [streakDays, setStreakDays] = useState(String(learner?.streakDays ?? 1));
  const [avatarUrl, setAvatarUrl] = useState<string | null>(learner?.avatarUrl || null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const maxStreakDays = learner?.maxStreakDays || currentSiteAgeDays();

  useEffect(() => {
    if (!avatarFile) { setPreviewUrl(null); return; }
    const nextUrl = URL.createObjectURL(avatarFile);
    setPreviewUrl(nextUrl);
    return () => URL.revokeObjectURL(nextUrl);
  }, [avatarFile]);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({
      displayName,
      xp: Number(xp),
      hsk,
      dailyXpMin: Number(dailyMin),
      dailyXpMax: Number(dailyMax),
      streakDays: Number(streakDays),
      avatarUrl,
    }, avatarFile);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="synthetic-editor-title">
      <form onSubmit={submit} className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="synthetic-editor-title" className="text-lg font-black text-slate-950">{learner ? "Sửa học viên mô phỏng" : "Thêm học viên mô phỏng"}</h2>
            <p className="mt-1 text-xs text-slate-500">XP hiện tại có thể chỉnh trực tiếp và sẽ tiếp tục tăng theo mức mỗi ngày.</p>
          </div>
          <button type="button" disabled={busy} onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Đóng"><X className="h-5 w-5" /></button>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-slate-400">
            {previewUrl || avatarUrl ? <img src={previewUrl || avatarUrl || ""} alt="Ảnh đại diện xem trước" className="h-full w-full object-cover" /> : <Bot className="h-9 w-9" />}
          </div>
          <div className="space-y-2">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-100">
              <ImagePlus className="h-4 w-4" /> Chọn ảnh
              <input type="file" className="hidden" accept="image/jpeg,image/png,image/webp" onChange={(event) => setAvatarFile(event.target.files?.[0] || null)} />
            </label>
            {(avatarUrl || avatarFile) && <button type="button" onClick={() => { setAvatarFile(null); setAvatarUrl(null); }} className="ml-2 text-xs font-semibold text-red-600 hover:underline">Gỡ ảnh</button>}
            <p className="text-[11px] leading-5 text-slate-400">JPG, PNG hoặc WebP; ảnh được cắt vuông và nén tối đa 512×512.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2"><span className="mb-1.5 block text-xs font-bold text-slate-700">Tên hiển thị</span><input required minLength={2} maxLength={80} value={displayName} onChange={(event) => setDisplayName(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500" /></label>
          <label><span className="mb-1.5 block text-xs font-bold text-slate-700">XP hiện tại</span><input required type="number" min={0} max={10000000} step={1} value={xp} onChange={(event) => setXp(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500" /></label>
          <label><span className="mb-1.5 block text-xs font-bold text-slate-700">Cấp độ</span><select value={hsk} onChange={(event) => setHsk(event.target.value)} className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-indigo-500">{HSK_OPTIONS.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span className="mb-1.5 block text-xs font-bold text-slate-700">XP/ngày tối thiểu</span><input required type="number" min={0} max={500} step={1} value={dailyMin} onChange={(event) => setDailyMin(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500" /></label>
          <label><span className="mb-1.5 block text-xs font-bold text-slate-700">XP/ngày tối đa</span><input required type="number" min={0} max={500} step={1} value={dailyMax} onChange={(event) => setDailyMax(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500" /></label>
          <label className="sm:col-span-2"><span className="mb-1.5 block text-xs font-bold text-slate-700">Chuỗi ngày học</span><input required type="number" min={0} max={maxStreakDays} step={1} value={streakDays} onChange={(event) => setStreakDays(event.target.value)} className="w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-indigo-500" /><span className="mt-1.5 block text-[11px] text-slate-400">Tối đa {maxStreakDays} ngày, bằng số ngày website đã hoạt động.</span></label>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button type="button" disabled={busy} onClick={onClose} className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-50">Hủy</button>
          <button type="submit" disabled={busy} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50"><Save className="h-4 w-4" /> {busy ? "Đang lưu…" : "Lưu học viên"}</button>
        </div>
      </form>
    </div>
  );
}

function AdminDashboard({ username }: { username: string }) {
  const [tab, setTab] = useState<AdminTab>("overview");
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<AdminSummary | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [syntheticBusy, setSyntheticBusy] = useState(false);

  const [visitKind, setVisitKind] = useState<VisitKind>("all");
  const [visitDraft, setVisitDraft] = useState("");
  const [visitSearch, setVisitSearch] = useState("");
  const [visitPage, setVisitPage] = useState(0);
  const [visits, setVisits] = useState<AdminVisit[]>([]);
  const [visitsLoading, setVisitsLoading] = useState(false);

  const [blockedIps, setBlockedIps] = useState<BlockedIp[]>([]);
  const [blockedLoading, setBlockedLoading] = useState(false);
  const [blockActionIp, setBlockActionIp] = useState("");
  const [manualIp, setManualIp] = useState("");
  const [blockReason, setBlockReason] = useState("");

  const [userDraft, setUserDraft] = useState("");
  const [userSearch, setUserSearch] = useState("");
  const [userPage, setUserPage] = useState(0);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);

  const [syntheticDraft, setSyntheticDraft] = useState("");
  const [syntheticSearch, setSyntheticSearch] = useState("");
  const [syntheticPage, setSyntheticPage] = useState(0);
  const [syntheticLearners, setSyntheticLearners] = useState<SyntheticLearner[]>([]);
  const [syntheticLoading, setSyntheticLoading] = useState(false);
  const [syntheticEditor, setSyntheticEditor] = useState<SyntheticLearner | "new" | null>(null);
  const [syntheticAction, setSyntheticAction] = useState("");

  const [feedbackPage, setFeedbackPage] = useState(0);
  const [feedback, setFeedback] = useState<AdminFeedback[]>([]);
  const [feedbackLoading, setFeedbackLoading] = useState(false);

  useEffect(() => {
    let active = true;
    setSummaryLoading(true);
    fetchAdminSummary()
      .then((value) => active && setSummary(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được thống kê."))
      .finally(() => active && setSummaryLoading(false));
    return () => { active = false; };
  }, [refreshKey]);

  useEffect(() => {
    if (tab !== "visits") return;
    let active = true;
    setVisitsLoading(true);
    setError("");
    fetchAdminVisits({ kind: visitKind, search: visitSearch, limit: PAGE_SIZE, offset: visitPage * PAGE_SIZE })
      .then((value) => active && setVisits(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được lượt truy cập."))
      .finally(() => active && setVisitsLoading(false));
    return () => { active = false; };
  }, [tab, visitKind, visitSearch, visitPage, refreshKey]);

  useEffect(() => {
    if (tab !== "users") return;
    let active = true;
    setUsersLoading(true);
    setError("");
    fetchAdminUsers({ search: userSearch, limit: PAGE_SIZE, offset: userPage * PAGE_SIZE })
      .then((value) => active && setUsers(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được người dùng."))
      .finally(() => active && setUsersLoading(false));
    return () => { active = false; };
  }, [tab, userSearch, userPage, refreshKey]);

  useEffect(() => {
    if (tab !== "blocked" && tab !== "visits") return;
    let active = true;
    setBlockedLoading(true);
    fetchBlockedIps({ limit: 200 })
      .then((value) => active && setBlockedIps(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được danh sách chặn."))
      .finally(() => active && setBlockedLoading(false));
    return () => { active = false; };
  }, [tab, refreshKey]);

  useEffect(() => {
    if (tab !== "synthetic") return;
    let active = true;
    setSyntheticLoading(true);
    setError("");
    fetchSyntheticLearners({ search: syntheticSearch, limit: PAGE_SIZE, offset: syntheticPage * PAGE_SIZE })
      .then((value) => active && setSyntheticLearners(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được học viên mô phỏng."))
      .finally(() => active && setSyntheticLoading(false));
    return () => { active = false; };
  }, [tab, syntheticSearch, syntheticPage, refreshKey]);

  useEffect(() => {
    if (tab !== "feedback") return;
    let active = true;
    setFeedbackLoading(true);
    setError("");
    fetchAdminFeedback({ limit: PAGE_SIZE, offset: feedbackPage * PAGE_SIZE })
      .then((value) => active && setFeedback(value))
      .catch((reason) => active && setError(reason instanceof Error ? reason.message : "Không tải được phản hồi."))
      .finally(() => active && setFeedbackLoading(false));
    return () => { active = false; };
  }, [tab, feedbackPage, refreshKey]);

  const tabs: Array<{ id: AdminTab; label: string; icon: React.ReactNode }> = [
    { id: "overview", label: "Tổng quan", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "visits", label: "Truy cập & IP", icon: <Eye className="h-4 w-4" /> },
    { id: "blocked", label: "IP đã chặn", icon: <Ban className="h-4 w-4" /> },
    { id: "users", label: "Người dùng", icon: <Users className="h-4 w-4" /> },
    { id: "synthetic", label: "Học viên mô phỏng", icon: <Bot className="h-4 w-4" /> },
    { id: "feedback", label: "Phản hồi", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  const cards = [
    { label: "Lượt xem hôm nay", value: summary?.visitsToday || 0, icon: Activity, tone: "bg-blue-50 text-blue-700" },
    { label: "Khách riêng hôm nay", value: summary?.uniqueVisitorsToday || 0, icon: Eye, tone: "bg-violet-50 text-violet-700" },
    { label: "IP riêng hôm nay", value: summary?.uniqueIpsToday || 0, icon: Globe2, tone: "bg-cyan-50 text-cyan-700" },
    { label: "Lượt chưa đăng nhập", value: summary?.anonymousToday || 0, icon: UserX, tone: "bg-amber-50 text-amber-700" },
    { label: "Lượt đã đăng nhập", value: summary?.authenticatedToday || 0, icon: UserCheck, tone: "bg-emerald-50 text-emerald-700" },
    { label: "Tổng tài khoản", value: summary?.totalUsers || 0, icon: Users, tone: "bg-rose-50 text-rose-700" },
    { label: "Học viên mô phỏng", value: summary?.syntheticUsers || 0, icon: Bot, tone: "bg-indigo-50 text-indigo-700" },
    { label: "IP đang bị chặn", value: summary?.blockedIps || 0, icon: Ban, tone: "bg-red-50 text-red-700" },
  ];

  const blockedSet = new Set(blockedIps.map((item) => item.ipAddress));

  const handleBlockIp = async (ipAddress: string, reason = "") => {
    if (!ipAddress || !window.confirm(`Chặn IP ${ipAddress} truy cập website?`)) return;
    setBlockActionIp(ipAddress);
    setError("");
    try {
      await blockIp(ipAddress, reason);
      setManualIp("");
      setBlockReason("");
      setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      setError(reasonValue instanceof Error ? reasonValue.message : "Không chặn được IP.");
    } finally {
      setBlockActionIp("");
    }
  };

  const handleUnblockIp = async (ipAddress: string) => {
    if (!window.confirm(`Bỏ chặn IP ${ipAddress}?`)) return;
    setBlockActionIp(ipAddress);
    setError("");
    try {
      await unblockIp(ipAddress);
      setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      setError(reasonValue instanceof Error ? reasonValue.message : "Không bỏ chặn được IP.");
    } finally {
      setBlockActionIp("");
    }
  };

  const handleSetAllSynthetic = async (enabled: boolean) => {
    setSyntheticBusy(true);
    setSyntheticAction("all");
    setError("");
    try {
      await setSyntheticLearnersEnabled(enabled);
      setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      setError(reasonValue instanceof Error ? reasonValue.message : "Không thay đổi được dữ liệu mô phỏng.");
    } finally {
      setSyntheticBusy(false);
      setSyntheticAction("");
    }
  };

  const handleSyntheticToggle = async () => {
    await handleSetAllSynthetic(!(summary?.syntheticEnabled ?? false));
  };

  const handleToggleSyntheticLearner = async (learner: SyntheticLearner) => {
    setSyntheticAction(learner.learnerId);
    setError("");
    try {
      await setSyntheticLearnerEnabled(learner.learnerId, !learner.active);
      setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      setError(reasonValue instanceof Error ? reasonValue.message : "Không đổi được trạng thái học viên mô phỏng.");
    } finally {
      setSyntheticAction("");
    }
  };

  const handleSaveSynthetic = async (input: SyntheticLearnerInput, avatarFile: File | null) => {
    const current = syntheticEditor === "new" ? null : syntheticEditor;
    setSyntheticAction(current?.learnerId || "new");
    setError("");
    let createdId = "";
    try {
      const learnerId = current?.learnerId || await createSyntheticLearner({ ...input, avatarUrl: null });
      if (!current) createdId = learnerId;
      const avatarUrl = avatarFile ? await uploadSyntheticAvatar(learnerId, avatarFile) : input.avatarUrl;
      if (current || avatarFile) await updateSyntheticLearner(learnerId, { ...input, avatarUrl });
      if (current?.avatarUrl && !avatarUrl) await removeSyntheticAvatar(learnerId);
      setSyntheticEditor(null);
      setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      if (createdId) await deleteSyntheticLearner(createdId).catch(() => undefined);
      setError(reasonValue instanceof Error ? reasonValue.message : "Không lưu được học viên mô phỏng.");
    } finally {
      setSyntheticAction("");
    }
  };

  const handleDeleteSynthetic = async (learner: SyntheticLearner) => {
    if (!window.confirm(`Xóa học viên mô phỏng “${learner.displayName}”? Thao tác này không thể hoàn tác.`)) return;
    setSyntheticAction(learner.learnerId);
    setError("");
    try {
      await deleteSyntheticLearner(learner.learnerId);
      if (syntheticLearners.length === 1 && syntheticPage > 0) setSyntheticPage((page) => page - 1);
      else setRefreshKey((value) => value + 1);
    } catch (reasonValue) {
      setError(reasonValue instanceof Error ? reasonValue.message : "Không xóa được học viên mô phỏng.");
    } finally {
      setSyntheticAction("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-5">
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-slate-950 p-3 text-white"><ShieldCheck className="h-6 w-6" /></div>
            <div>
              <h1 className="text-xl font-black text-slate-950">Quản trị Hanyu Daily</h1>
              <p className="text-xs text-slate-500">Đang đăng nhập: @{username}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setRefreshKey((value) => value + 1)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"
            >
              <RefreshCw className="h-4 w-4" /> Làm mới
            </button>
            <button
              type="button"
              onClick={() => void logoutAccount()}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800"
            >
              <LogOut className="h-4 w-4" /> Đăng xuất
            </button>
          </div>
        </header>

        <nav className="flex gap-1 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm" aria-label="Mục quản trị">
          {tabs.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${tab === item.id ? "bg-slate-950 text-white" : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
            >
              {item.icon}{item.label}
            </button>
          ))}
        </nav>

        {error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        {tab === "overview" && (
          <section className="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map(({ label, value, icon: Icon, tone }) => (
                <article key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className={`mb-4 inline-flex rounded-xl p-2.5 ${tone}`}><Icon className="h-5 w-5" /></div>
                  <p className="text-xs font-semibold text-slate-500">{label}</p>
                  <p className="mt-1 text-3xl font-black text-slate-950">{summaryLoading ? "…" : value.toLocaleString("vi-VN")}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">7 ngày gần nhất</p>
                <p className="mt-2 text-3xl font-black text-slate-950">{summaryLoading ? "…" : (summary?.visitsLast7Days || 0).toLocaleString("vi-VN")}</p>
                <p className="mt-1 text-sm text-slate-500">lượt xem trang đã ghi nhận</p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phản hồi</p>
                <p className="mt-2 text-3xl font-black text-slate-950">{summaryLoading ? "…" : (summary?.totalFeedback || 0).toLocaleString("vi-VN")}</p>
                <button type="button" onClick={() => setTab("feedback")} className="mt-1 text-sm font-semibold text-brand hover:underline">Mở hộp phản hồi →</button>
              </article>
              <article className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 shadow-sm md:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-500"><Bot className="h-4 w-4" /> Dữ liệu mô phỏng</p>
                    <p className="mt-2 text-sm font-bold text-slate-900">{summary?.syntheticEnabled ? "Đang hiển thị trên bảng xếp hạng" : "Đang tắt khỏi bảng xếp hạng"}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{(summary?.syntheticUsers || 0).toLocaleString("vi-VN")} học viên mô phỏng nhận XP theo ngày Bangkok. Không tạo tài khoản đăng nhập, IP hay lượt truy cập giả.</p>
                  </div>
                  <button
                    type="button"
                    disabled={summaryLoading || syntheticBusy || !summary?.syntheticUsers}
                    onClick={() => void handleSyntheticToggle()}
                    className={`shrink-0 rounded-xl px-4 py-2.5 text-xs font-bold text-white disabled:opacity-50 ${summary?.syntheticEnabled ? "bg-slate-700 hover:bg-slate-800" : "bg-indigo-600 hover:bg-indigo-700"}`}
                  >
                    {syntheticBusy ? "Đang cập nhật…" : summary?.syntheticEnabled ? "Tắt mô phỏng" : "Bật mô phỏng"}
                  </button>
                </div>
              </article>
            </div>
          </section>
        )}

        {tab === "visits" && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-100 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {(["all", "anonymous", "authenticated"] as VisitKind[]).map((kind) => (
                  <button
                    type="button"
                    key={kind}
                    onClick={() => { setVisitKind(kind); setVisitPage(0); }}
                    className={`rounded-lg px-3 py-2 text-xs font-bold ${visitKind === kind ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}
                  >
                    {kind === "all" ? "Tất cả" : kind === "anonymous" ? "Chưa đăng nhập" : "Đã đăng nhập"}
                  </button>
                ))}
              </div>
              <form
                className="flex min-w-0 gap-2 sm:min-w-80"
                onSubmit={(event) => { event.preventDefault(); setVisitSearch(visitDraft); setVisitPage(0); }}
              >
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input value={visitDraft} onChange={(event) => setVisitDraft(event.target.value)} placeholder="IP, đường dẫn, tài khoản…" className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-xs outline-none focus:border-slate-500" />
                </div>
                <button className="rounded-xl bg-slate-900 px-3 text-xs font-bold text-white">Tìm</button>
              </form>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1080px] text-left text-xs">
                <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">Thời gian</th><th className="px-4 py-3">IP</th><th className="px-4 py-3">Khách / tài khoản</th><th className="px-4 py-3">Trang</th><th className="px-4 py-3">Thiết bị</th><th className="px-4 py-3">Quản lý</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {visits.map((visit) => (
                    <tr key={`${visit.visitorId}-${visit.visitedAt}`} className="align-top hover:bg-slate-50/70">
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">{formatDate(visit.visitedAt)}</td>
                      <td className="px-4 py-3 font-mono font-semibold text-slate-900">{visit.ipAddress || "Không xác định"}</td>
                      <td className="px-4 py-3"><div className="font-semibold text-slate-800">{visit.username ? `@${visit.username}` : "Khách ẩn danh"}</div><div title={visit.visitorId} className="mt-1 font-mono text-[10px] text-slate-400">{compactId(visit.visitorId)}</div></td>
                      <td className="px-4 py-3"><div className="font-semibold text-slate-800">{visit.path}</div>{visit.referrer && <div title={visit.referrer} className="mt-1 max-w-xs truncate text-[10px] text-slate-400">Từ: {visit.referrer}</div>}</td>
                      <td title={visit.userAgent || ""} className="max-w-xs px-4 py-3 text-slate-500"><span className="line-clamp-2">{visit.userAgent || "Không xác định"}</span></td>
                      <td className="px-4 py-3">
                        {visit.ipAddress ? (
                          blockedSet.has(visit.ipAddress) ? (
                            <button type="button" disabled={blockActionIp === visit.ipAddress} onClick={() => void handleUnblockIp(visit.ipAddress!)} className="whitespace-nowrap rounded-lg bg-emerald-50 px-3 py-2 font-bold text-emerald-700 disabled:opacity-50">Bỏ chặn</button>
                          ) : (
                            <button type="button" disabled={blockActionIp === visit.ipAddress} onClick={() => void handleBlockIp(visit.ipAddress!)} className="whitespace-nowrap rounded-lg bg-red-50 px-3 py-2 font-bold text-red-700 disabled:opacity-50">Chặn IP</button>
                          )
                        ) : <span className="text-slate-300">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!visits.length && <EmptyState loading={visitsLoading} />}
            </div>
            <Pagination page={visitPage} total={visits[0]?.totalCount || 0} onChange={setVisitPage} />
          </section>
        )}

        {tab === "blocked" && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-5">
              <h2 className="font-bold text-slate-900">Danh sách IP bị chặn</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">Lệnh chặn có hiệu lực trên website production sau tối đa 30 giây. Trang quản trị luôn được giữ lại để bạn có thể bỏ chặn.</p>
              <form
                className="mt-4 grid gap-2 md:grid-cols-[minmax(180px,0.7fr)_minmax(240px,1.3fr)_auto]"
                onSubmit={(event) => { event.preventDefault(); void handleBlockIp(manualIp, blockReason); }}
              >
                <input required value={manualIp} onChange={(event) => setManualIp(event.target.value)} placeholder="Địa chỉ IPv4 hoặc IPv6" className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs outline-none focus:border-slate-500" />
                <input value={blockReason} maxLength={300} onChange={(event) => setBlockReason(event.target.value)} placeholder="Lý do chặn (không bắt buộc)" className="rounded-xl border border-slate-200 px-3 py-2.5 text-xs outline-none focus:border-slate-500" />
                <button type="submit" disabled={Boolean(blockActionIp)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white disabled:opacity-50"><Ban className="h-4 w-4" /> Chặn IP</button>
              </form>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-xs">
                <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">IP</th><th className="px-4 py-3">Lý do</th><th className="px-4 py-3">Thời gian chặn</th><th className="px-4 py-3">Thao tác</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {blockedIps.map((item) => (
                    <tr key={item.ipAddress} className="hover:bg-slate-50/70">
                      <td className="px-4 py-3 font-mono font-bold text-slate-900">{item.ipAddress}</td>
                      <td className="max-w-md px-4 py-3 text-slate-600">{item.reason}</td>
                      <td className="whitespace-nowrap px-4 py-3 text-slate-500">{formatDate(item.blockedAt)}</td>
                      <td className="px-4 py-3"><button type="button" disabled={blockActionIp === item.ipAddress} onClick={() => void handleUnblockIp(item.ipAddress)} className="rounded-lg bg-emerald-50 px-3 py-2 font-bold text-emerald-700 disabled:opacity-50">Bỏ chặn</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!blockedIps.length && <EmptyState loading={blockedLoading} />}
            </div>
          </section>
        )}

        {tab === "users" && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div><h2 className="font-bold text-slate-900">Danh sách tài khoản</h2><p className="mt-1 text-xs text-slate-500">Mật khẩu được Supabase lưu dưới dạng băm và không thể xem lại.</p></div>
              <form className="flex gap-2 sm:min-w-80" onSubmit={(event) => { event.preventDefault(); setUserSearch(userDraft); setUserPage(0); }}>
                <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={userDraft} onChange={(event) => setUserDraft(event.target.value)} placeholder="Tên hoặc tài khoản…" className="w-full rounded-xl border border-slate-200 py-2 pl-9 pr-3 text-xs outline-none focus:border-slate-500" /></div>
                <button className="rounded-xl bg-slate-900 px-3 text-xs font-bold text-white">Tìm</button>
              </form>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] text-left text-xs">
                <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">Tài khoản</th><th className="px-4 py-3">Ngày tạo</th><th className="px-4 py-3">XP</th><th className="px-4 py-3">Tuần này</th><th className="px-4 py-3">Bài hoàn thành</th><th className="px-4 py-3">Lần cuối truy cập</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {users.map((item) => (
                    <tr key={item.userId} className="hover:bg-slate-50/70"><td className="px-4 py-3"><div className="font-bold text-slate-900">{item.displayName}</div><div className="text-[10px] text-slate-400">@{item.username} · {item.hsk}</div></td><td className="whitespace-nowrap px-4 py-3 text-slate-500">{formatDate(item.createdAt)}</td><td className="px-4 py-3 font-bold text-slate-900">{item.xp.toLocaleString("vi-VN")}</td><td className="px-4 py-3 text-slate-600">{item.weeklyXp.toLocaleString("vi-VN")}</td><td className="px-4 py-3 text-slate-600">{item.completed.toLocaleString("vi-VN")}</td><td className="whitespace-nowrap px-4 py-3 text-slate-500">{formatDate(item.lastSeenAt)}</td></tr>
                  ))}
                </tbody>
              </table>
              {!users.length && <EmptyState loading={usersLoading} />}
            </div>
            <Pagination page={userPage} total={users[0]?.totalCount || 0} onChange={setUserPage} />
          </section>
        )}

        {tab === "synthetic" && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-bold text-slate-900">Quản lý học viên mô phỏng</h2>
                <p className="mt-1 text-xs leading-5 text-slate-500">Thêm, sửa hoặc xóa dữ liệu mẫu. XP và chuỗi ngày tiếp tục tăng hằng ngày sau khi bạn chỉnh.</p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <form className="flex min-w-0 gap-2 sm:min-w-72" onSubmit={(event) => { event.preventDefault(); setSyntheticSearch(syntheticDraft); setSyntheticPage(0); }}>
                  <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input value={syntheticDraft} onChange={(event) => setSyntheticDraft(event.target.value)} placeholder="Tên hoặc mã mô phỏng…" className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-indigo-500" /></div>
                  <button className="rounded-xl bg-slate-900 px-3 text-xs font-bold text-white">Tìm</button>
                </form>
                <button type="button" onClick={() => setSyntheticEditor("new")} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-indigo-700"><Plus className="h-4 w-4" /> Thêm học viên</button>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b border-slate-100 bg-slate-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
              <div><p className="text-xs font-bold text-slate-700">Hiển thị trên bảng xếp hạng</p><p className="mt-0.5 text-[11px] text-slate-500">Có thể điều khiển toàn bộ tại đây hoặc bấm trực tiếp vào trạng thái của từng học viên.</p></div>
              <div className="flex gap-2">
                <button type="button" disabled={syntheticBusy || Boolean(syntheticAction)} onClick={() => void handleSetAllSynthetic(true)} className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-700 disabled:opacity-50"><UserCheck className="h-4 w-4" /> Bật toàn bộ</button>
                <button type="button" disabled={syntheticBusy || Boolean(syntheticAction)} onClick={() => void handleSetAllSynthetic(false)} className="inline-flex items-center gap-1.5 rounded-xl bg-slate-700 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800 disabled:opacity-50"><UserX className="h-4 w-4" /> Tắt toàn bộ</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1040px] text-left text-xs">
                <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">Học viên</th><th className="px-4 py-3">XP hiện tại</th><th className="px-4 py-3">Tuần này</th><th className="px-4 py-3">XP mỗi ngày</th><th className="px-4 py-3">Chuỗi ngày</th><th className="px-4 py-3">Cấp độ</th><th className="px-4 py-3">Trạng thái</th><th className="px-4 py-3 text-right">Thao tác</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {syntheticLearners.map((learner) => (
                    <tr key={learner.learnerId} className="hover:bg-slate-50/70">
                      <td className="px-4 py-3"><div className="flex items-center gap-3"><div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-indigo-50 text-indigo-500">{learner.avatarUrl ? <img src={learner.avatarUrl} alt="" className="h-full w-full object-cover" /> : <Bot className="h-5 w-5" />}</div><div><div className="font-bold text-slate-900">{learner.displayName}</div><div className="text-[10px] text-slate-400">@{learner.username}</div></div></div></td>
                      <td className="px-4 py-3 font-bold text-slate-900">{learner.xp.toLocaleString("vi-VN")}</td>
                      <td className="px-4 py-3 text-slate-600">{learner.weeklyXp.toLocaleString("vi-VN")}</td>
                      <td className="px-4 py-3 text-slate-600">{learner.dailyXpMin}–{learner.dailyXpMax} XP</td>
                      <td className="px-4 py-3 font-semibold text-rose-600">{learner.streakDays} ngày</td>
                      <td className="px-4 py-3"><span className="rounded-full bg-indigo-50 px-2 py-1 font-bold text-indigo-700">{learner.hsk}</span></td>
                      <td className="px-4 py-3"><button type="button" disabled={Boolean(syntheticAction)} onClick={() => void handleToggleSyntheticLearner(learner)} title={learner.active ? "Bấm để tắt học viên này" : "Bấm để bật học viên này"} className={`rounded-full px-2.5 py-1.5 font-bold transition disabled:opacity-50 ${learner.active ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}>{syntheticAction === learner.learnerId ? "Đang đổi…" : learner.active ? "Đang bật" : "Đang tắt"}</button></td>
                      <td className="px-4 py-3"><div className="flex justify-end gap-2"><button type="button" disabled={Boolean(syntheticAction)} onClick={() => setSyntheticEditor(learner)} className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-2 font-bold text-indigo-700 hover:bg-indigo-100 disabled:opacity-50"><Pencil className="h-3.5 w-3.5" /> Sửa</button><button type="button" disabled={Boolean(syntheticAction)} onClick={() => void handleDeleteSynthetic(learner)} className="inline-flex items-center gap-1.5 rounded-lg bg-red-50 px-3 py-2 font-bold text-red-700 hover:bg-red-100 disabled:opacity-50"><Trash2 className="h-3.5 w-3.5" /> Xóa</button></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!syntheticLearners.length && <EmptyState loading={syntheticLoading} />}
            </div>
            <Pagination page={syntheticPage} total={syntheticLearners[0]?.totalCount || 0} onChange={setSyntheticPage} />
          </section>
        )}

        {tab === "feedback" && (
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-4"><h2 className="font-bold text-slate-900">Phản hồi từ người học</h2><p className="mt-1 text-xs text-slate-500">Nội dung này chỉ tài khoản quản trị có thể đọc.</p></div>
            <div className="divide-y divide-slate-100">
              {feedback.map((item) => (
                <article key={item.feedbackId} className="p-5"><div className="mb-2 flex flex-wrap items-center justify-between gap-2"><div><span className="font-bold text-slate-900">{item.displayName || "Tài khoản đã xóa"}</span>{item.username && <span className="ml-2 text-xs text-slate-400">@{item.username}</span>}</div><time className="text-xs text-slate-400">{formatDate(item.createdAt)}</time></div><p className="whitespace-pre-wrap text-sm leading-6 text-slate-700">{item.message}</p></article>
              ))}
              {!feedback.length && <EmptyState loading={feedbackLoading} />}
            </div>
            <Pagination page={feedbackPage} total={feedback[0]?.totalCount || 0} onChange={setFeedbackPage} />
          </section>
        )}
      </div>
      {syntheticEditor && (
        <SyntheticLearnerEditor
          key={syntheticEditor === "new" ? "new" : syntheticEditor.learnerId}
          learner={syntheticEditor === "new" ? null : syntheticEditor}
          busy={Boolean(syntheticAction)}
          onClose={() => setSyntheticEditor(null)}
          onSave={(input, avatarFile) => void handleSaveSynthetic(input, avatarFile)}
        />
      )}
    </div>
  );
}

export const AdminPage: React.FC = () => {
  const { user, isReady, isConfigured } = useAuth();
  const [access, setAccess] = useState<AccessState>("checking");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isReady) return;
    if (!user) { setAccess("signed-out"); return; }
    let active = true;
    setAccess("checking");
    checkAdminAccess().then((allowed) => active && setAccess(allowed ? "allowed" : "denied"));
    return () => { active = false; };
  }, [isReady, user?.id]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      await loginAccount(username, password);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Không thể đăng nhập.");
    } finally {
      setBusy(false);
    }
  };

  if (!isReady || access === "checking") return <div className="flex min-h-[75vh] items-center justify-center bg-slate-50 text-sm text-slate-500">Đang xác minh quyền quản trị…</div>;
  if (access === "allowed" && user) return <AdminDashboard username={user.username} />;

  if (access === "denied" && user) {
    return (
      <div className="flex min-h-[75vh] items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <LockKeyhole className="mx-auto h-10 w-10 text-red-600" />
          <h1 className="mt-4 text-xl font-black text-slate-950">Không có quyền truy cập</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">Tài khoản @{user.username} không được cấp quyền quản trị.</p>
          <button type="button" onClick={() => void logoutAccount()} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white"><LogOut className="h-4 w-4" /> Đăng xuất</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
        <div className="text-center"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white"><ShieldCheck className="h-7 w-7" /></div><h1 className="mt-4 text-2xl font-black text-slate-950">Đăng nhập quản trị</h1><p className="mt-2 text-xs text-slate-500">Khu vực riêng, được bảo vệ bởi Supabase Auth và quyền database.</p></div>
        <form onSubmit={handleLogin} className="mt-7 space-y-4">
          <label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Tên tài khoản</span><span className="relative block"><AtSign className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input required minLength={3} autoComplete="username" autoCapitalize="none" value={username} onChange={(event) => setUsername(event.target.value.toLowerCase())} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-500" /></span></label>
          <label className="block"><span className="mb-1.5 block text-xs font-bold text-slate-700">Mật khẩu</span><span className="relative block"><LockKeyhole className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /><input type="password" required minLength={6} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-500" /></span></label>
          {!isConfigured && <p role="alert" className="rounded-xl bg-amber-50 p-3 text-xs text-amber-800">Website chưa được cấu hình kết nối Supabase.</p>}
          {error && <p role="alert" className="rounded-xl bg-red-50 p-3 text-xs text-red-700">{error}</p>}
          <button type="submit" disabled={busy || !isConfigured} className="w-full rounded-xl bg-slate-950 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:opacity-50">{busy ? "Đang xác minh…" : "Đăng nhập"}</button>
        </form>
      </div>
    </div>
  );
};
