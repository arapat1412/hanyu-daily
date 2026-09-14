import React, { useEffect, useState } from "react";
import {
  Activity,
  AtSign,
  Ban,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Eye,
  Globe2,
  LockKeyhole,
  LogOut,
  MessageSquare,
  RefreshCw,
  Search,
  ShieldCheck,
  UserCheck,
  Users,
  UserX,
} from "lucide-react";
import {
  AdminFeedback,
  AdminSummary,
  AdminUser,
  AdminVisit,
  BlockedIp,
  blockIp,
  checkAdminAccess,
  fetchAdminFeedback,
  fetchAdminSummary,
  fetchAdminUsers,
  fetchAdminVisits,
  fetchBlockedIps,
  unblockIp,
  VisitKind,
} from "../lib/admin";
import { loginAccount, logoutAccount, useAuth } from "../lib/auth";

type AccessState = "checking" | "signed-out" | "denied" | "allowed";
type AdminTab = "overview" | "visits" | "blocked" | "users" | "feedback";

const PAGE_SIZE = 30;

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

function AdminDashboard({ username }: { username: string }) {
  const [tab, setTab] = useState<AdminTab>("overview");
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState("");
  const [summary, setSummary] = useState<AdminSummary | null>(null);
  const [summaryLoading, setSummaryLoading] = useState(true);

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
    { id: "feedback", label: "Phản hồi", icon: <MessageSquare className="h-4 w-4" /> },
  ];

  const cards = [
    { label: "Lượt xem hôm nay", value: summary?.visitsToday || 0, icon: Activity, tone: "bg-blue-50 text-blue-700" },
    { label: "Khách riêng hôm nay", value: summary?.uniqueVisitorsToday || 0, icon: Eye, tone: "bg-violet-50 text-violet-700" },
    { label: "IP riêng hôm nay", value: summary?.uniqueIpsToday || 0, icon: Globe2, tone: "bg-cyan-50 text-cyan-700" },
    { label: "Lượt chưa đăng nhập", value: summary?.anonymousToday || 0, icon: UserX, tone: "bg-amber-50 text-amber-700" },
    { label: "Lượt đã đăng nhập", value: summary?.authenticatedToday || 0, icon: UserCheck, tone: "bg-emerald-50 text-emerald-700" },
    { label: "Tổng tài khoản", value: summary?.totalUsers || 0, icon: Users, tone: "bg-rose-50 text-rose-700" },
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
