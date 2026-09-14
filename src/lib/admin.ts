import { isSupabaseConfigured, supabase } from "./supabase";

export type VisitKind = "all" | "anonymous" | "authenticated";

export interface AdminSummary {
  visitsToday: number;
  visitsLast7Days: number;
  uniqueVisitorsToday: number;
  uniqueIpsToday: number;
  anonymousToday: number;
  authenticatedToday: number;
  totalUsers: number;
  totalFeedback: number;
  blockedIps: number;
}

export interface BlockedIp {
  ipAddress: string;
  reason: string;
  blockedAt: string;
  blockedBy: string;
  totalCount: number;
}

export interface AdminVisit {
  visitedAt: string;
  ipAddress: string | null;
  visitorId: string;
  userId: string | null;
  displayName: string | null;
  username: string | null;
  path: string;
  referrer: string | null;
  userAgent: string | null;
  isAuthenticated: boolean;
  totalCount: number;
}

export interface AdminUser {
  userId: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  createdAt: string;
  xp: number;
  weeklyXp: number;
  completed: number;
  averageScore: number;
  streak: number;
  hsk: string;
  lastSeenAt: string | null;
  totalCount: number;
}

export interface AdminFeedback {
  feedbackId: string;
  userId: string | null;
  username: string | null;
  displayName: string | null;
  message: string;
  createdAt: string;
  totalCount: number;
}

type RpcRow = Record<string, unknown>;

function requireClient() {
  if (!supabase || !isSupabaseConfigured)
    throw new Error("Website chưa được cấu hình kết nối Supabase.");
  return supabase;
}

function adminError(message?: string) {
  const normalized = message?.toLowerCase() || "";
  if (normalized.includes("admin access required"))
    return new Error("Tài khoản này không có quyền quản trị.");
  if (normalized.includes("cannot block your current ip"))
    return new Error("Không thể chặn IP bạn đang sử dụng để tránh tự khóa quyền truy cập.");
  if (normalized.includes("invalid ip address"))
    return new Error("Địa chỉ IP không hợp lệ.");
  return new Error("Không tải được dữ liệu quản trị. Vui lòng thử lại.");
}

function asNumber(value: unknown) {
  const result = Number(value);
  return Number.isFinite(result) ? result : 0;
}

function asNullableString(value: unknown) {
  return typeof value === "string" && value ? value : null;
}

export async function trackPageView(visitorId: string, path: string) {
  if (!supabase || !isSupabaseConfigured) return false;
  const { data, error } = await supabase.rpc("track_page_view", {
    p_visitor_id: visitorId,
    p_path: path,
  });
  if (error) return false;
  return data === true;
}

export async function checkAdminAccess() {
  if (!supabase || !isSupabaseConfigured) return false;
  const { data, error } = await supabase.rpc("hanyu_is_admin");
  if (error) return false;
  return data === true;
}

export async function checkCurrentIpBlocked() {
  if (!supabase || !isSupabaseConfigured) return false;
  const { data, error } = await supabase.rpc("current_ip_is_blocked");
  // Fail open when the database is unavailable or the migration is not installed.
  if (error) return false;
  return data === true;
}

export async function fetchAdminSummary(): Promise<AdminSummary> {
  const { data, error } = await requireClient().rpc("admin_get_summary");
  if (error) throw adminError(error.message);
  const row = (data || {}) as RpcRow;
  return {
    visitsToday: asNumber(row.visits_today),
    visitsLast7Days: asNumber(row.visits_last_7_days),
    uniqueVisitorsToday: asNumber(row.unique_visitors_today),
    uniqueIpsToday: asNumber(row.unique_ips_today),
    anonymousToday: asNumber(row.anonymous_today),
    authenticatedToday: asNumber(row.authenticated_today),
    totalUsers: asNumber(row.total_users),
    totalFeedback: asNumber(row.total_feedback),
    blockedIps: asNumber(row.blocked_ips),
  };
}

export async function fetchBlockedIps(input: {
  limit?: number;
  offset?: number;
} = {}): Promise<BlockedIp[]> {
  const { data, error } = await requireClient().rpc("admin_get_blocked_ips", {
    p_limit: input.limit || 100,
    p_offset: input.offset || 0,
  });
  if (error) throw adminError(error.message);
  return ((data || []) as RpcRow[]).map((row) => ({
    ipAddress: String(row.ip_address || ""),
    reason: String(row.reason || ""),
    blockedAt: String(row.blocked_at || ""),
    blockedBy: String(row.blocked_by || ""),
    totalCount: asNumber(row.total_count),
  }));
}

export async function blockIp(ipAddress: string, reason: string) {
  const { error } = await requireClient().rpc("admin_block_ip", {
    p_ip: ipAddress,
    p_reason: reason.trim() || "Bị chặn bởi quản trị viên",
  });
  if (error) throw adminError(error.message);
}

export async function unblockIp(ipAddress: string) {
  const { error } = await requireClient().rpc("admin_unblock_ip", {
    p_ip: ipAddress,
  });
  if (error) throw adminError(error.message);
}

export async function fetchAdminVisits(input: {
  kind?: VisitKind;
  search?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<AdminVisit[]> {
  const { data, error } = await requireClient().rpc("admin_get_visits", {
    p_kind: input.kind || "all",
    p_search: input.search?.trim() || null,
    p_limit: input.limit || 50,
    p_offset: input.offset || 0,
  });
  if (error) throw adminError(error.message);
  return ((data || []) as RpcRow[]).map((row) => ({
    visitedAt: String(row.visited_at || ""),
    ipAddress: asNullableString(row.ip_address),
    visitorId: String(row.visitor_id || ""),
    userId: asNullableString(row.user_id),
    displayName: asNullableString(row.display_name),
    username: asNullableString(row.username),
    path: String(row.path || "/"),
    referrer: asNullableString(row.referrer),
    userAgent: asNullableString(row.user_agent),
    isAuthenticated: row.is_authenticated === true,
    totalCount: asNumber(row.total_count),
  }));
}

export async function fetchAdminUsers(input: {
  search?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<AdminUser[]> {
  const { data, error } = await requireClient().rpc("admin_get_users", {
    p_search: input.search?.trim() || null,
    p_limit: input.limit || 50,
    p_offset: input.offset || 0,
  });
  if (error) throw adminError(error.message);
  return ((data || []) as RpcRow[]).map((row) => ({
    userId: String(row.user_id || ""),
    username: String(row.username || ""),
    displayName: String(row.display_name || ""),
    avatarUrl: asNullableString(row.avatar_url),
    createdAt: String(row.created_at || ""),
    xp: asNumber(row.xp),
    weeklyXp: asNumber(row.weekly_xp),
    completed: asNumber(row.completed),
    averageScore: asNumber(row.average_score),
    streak: asNumber(row.streak),
    hsk: String(row.hsk || "Mới học"),
    lastSeenAt: asNullableString(row.last_seen_at),
    totalCount: asNumber(row.total_count),
  }));
}

export async function fetchAdminFeedback(input: {
  limit?: number;
  offset?: number;
} = {}): Promise<AdminFeedback[]> {
  const { data, error } = await requireClient().rpc("admin_get_feedback", {
    p_limit: input.limit || 50,
    p_offset: input.offset || 0,
  });
  if (error) throw adminError(error.message);
  return ((data || []) as RpcRow[]).map((row) => ({
    feedbackId: String(row.feedback_id || ""),
    userId: asNullableString(row.user_id),
    username: asNullableString(row.username),
    displayName: asNullableString(row.display_name),
    message: String(row.message || ""),
    createdAt: String(row.created_at || ""),
    totalCount: asNumber(row.total_count),
  }));
}
