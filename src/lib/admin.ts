import { isSupabaseConfigured, supabase } from "./supabase";
import { resizeAvatarImage } from "./auth";

export type VisitKind = "all" | "anonymous" | "authenticated";

export interface AdminSummary {
  visitsToday: number;
  visitsLast7Days: number;
  uniqueVisitorsToday: number;
  uniqueIpsToday: number;
  anonymousToday: number;
  authenticatedToday: number;
  totalUsers: number;
  syntheticUsers: number;
  syntheticEnabled: boolean;
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

export interface SyntheticLearner {
  learnerId: string;
  username: string;
  displayName: string;
  avatarUrl: string | null;
  xp: number;
  weeklyXp: number;
  dailyXpMin: number;
  dailyXpMax: number;
  streakDays: number;
  maxStreakDays: number;
  hsk: string;
  active: boolean;
  joinedOn: string;
  createdAt: string;
  updatedAt: string;
  totalCount: number;
}

export interface SyntheticLearnerInput {
  displayName: string;
  xp: number;
  hsk: string;
  dailyXpMin: number;
  dailyXpMax: number;
  streakDays: number;
  avatarUrl?: string | null;
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
  if (normalized.includes("synthetic learner not found"))
    return new Error("Không tìm thấy học viên mô phỏng này.");
  if (normalized.includes("invalid synthetic learner name"))
    return new Error("Tên học viên phải có từ 2 đến 80 ký tự.");
  if (normalized.includes("invalid synthetic xp"))
    return new Error("XP phải là số nguyên từ 0 đến 10.000.000.");
  if (normalized.includes("invalid synthetic daily xp"))
    return new Error("XP mỗi ngày phải từ 0 đến 500 và mức tối thiểu không vượt mức tối đa.");
  if (normalized.includes("invalid synthetic streak"))
    return new Error("Chuỗi ngày không hợp lệ hoặc vượt quá số ngày website đã hoạt động.");
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

const IP_BLOCK_CACHE_TTL_MS = 60 * 1000;
let ipBlockCache: { blocked: boolean; expiresAt: number } | null = null;
let ipBlockRequest: Promise<boolean> | null = null;

export async function checkCurrentIpBlocked() {
  if (!supabase || !isSupabaseConfigured) return false;
  if (ipBlockCache && ipBlockCache.expiresAt > Date.now()) {
    return ipBlockCache.blocked;
  }
  if (ipBlockRequest) return ipBlockRequest;

  const request = Promise.resolve(supabase.rpc("current_ip_is_blocked"))
    .then(({ data, error }) => {
      // Fail open when the database is unavailable or the migration is not installed.
      const blocked = error ? false : data === true;
      ipBlockCache = {
        blocked,
        expiresAt: Date.now() + IP_BLOCK_CACHE_TTL_MS,
      };
      return blocked;
    })
    .finally(() => {
      ipBlockRequest = null;
    });
  ipBlockRequest = request;
  return request;
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
    syntheticUsers: asNumber(row.synthetic_users),
    syntheticEnabled: row.synthetic_enabled === true,
    totalFeedback: asNumber(row.total_feedback),
    blockedIps: asNumber(row.blocked_ips),
  };
}

export async function setSyntheticLearnersEnabled(enabled: boolean) {
  const { error } = await requireClient().rpc("admin_set_synthetic_learners_enabled", {
    p_enabled: enabled,
  });
  if (error) throw adminError(error.message);
}

export async function setSyntheticLearnerEnabled(learnerId: string, enabled: boolean) {
  const { error } = await requireClient().rpc("admin_set_synthetic_learner_enabled", {
    p_learner_id: learnerId,
    p_enabled: enabled,
  });
  if (error) throw adminError(error.message);
}

export async function fetchSyntheticLearners(input: {
  search?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<SyntheticLearner[]> {
  const { data, error } = await requireClient().rpc("admin_get_synthetic_learners", {
    p_search: input.search?.trim() || null,
    p_limit: input.limit || 50,
    p_offset: input.offset || 0,
  });
  if (error) throw adminError(error.message);
  return ((data || []) as RpcRow[]).map((row) => ({
    learnerId: String(row.learner_id || ""),
    username: String(row.username || ""),
    displayName: String(row.display_name || ""),
    avatarUrl: asNullableString(row.avatar_url),
    xp: asNumber(row.xp),
    weeklyXp: asNumber(row.weekly_xp),
    dailyXpMin: asNumber(row.daily_xp_min),
    dailyXpMax: asNumber(row.daily_xp_max),
    streakDays: asNumber(row.streak_days),
    maxStreakDays: asNumber(row.max_streak_days),
    hsk: String(row.hsk || "Mới học"),
    active: row.active === true,
    joinedOn: String(row.joined_on || ""),
    createdAt: String(row.created_at || ""),
    updatedAt: String(row.updated_at || ""),
    totalCount: asNumber(row.total_count),
  }));
}

function syntheticParams(input: SyntheticLearnerInput) {
  const xp = Math.round(input.xp);
  const dailyMin = Math.round(input.dailyXpMin);
  const dailyMax = Math.round(input.dailyXpMax);
  const streakDays = Math.round(input.streakDays);
  if (input.displayName.trim().length < 2 || input.displayName.trim().length > 80)
    throw new Error("Tên học viên phải có từ 2 đến 80 ký tự.");
  if (!Number.isFinite(xp) || xp < 0 || xp > 10_000_000)
    throw new Error("XP phải là số nguyên từ 0 đến 10.000.000.");
  if (!Number.isFinite(dailyMin) || !Number.isFinite(dailyMax)
    || dailyMin < 0 || dailyMax > 500 || dailyMin > dailyMax)
    throw new Error("XP mỗi ngày phải từ 0 đến 500 và mức tối thiểu không vượt mức tối đa.");
  if (!Number.isFinite(streakDays) || streakDays < 0 || streakDays > 10_000)
    throw new Error("Chuỗi ngày không hợp lệ.");
  return {
    p_display_name: input.displayName.trim(),
    p_xp: xp,
    p_hsk: input.hsk,
    p_daily_xp_min: dailyMin,
    p_daily_xp_max: dailyMax,
    p_streak_days: streakDays,
    p_avatar_url: input.avatarUrl?.trim() || null,
  };
}

export async function createSyntheticLearner(input: SyntheticLearnerInput) {
  const { data, error } = await requireClient().rpc(
    "admin_create_synthetic_learner",
    syntheticParams(input),
  );
  if (error) throw adminError(error.message);
  return String(data || "");
}

export async function updateSyntheticLearner(
  learnerId: string,
  input: SyntheticLearnerInput,
) {
  const { error } = await requireClient().rpc("admin_update_synthetic_learner", {
    p_learner_id: learnerId,
    ...syntheticParams(input),
  });
  if (error) throw adminError(error.message);
}

export async function uploadSyntheticAvatar(learnerId: string, file: File) {
  const client = requireClient();
  const avatar = await resizeAvatarImage(file);
  const path = `synthetic/${learnerId}/avatar.webp`;
  const { error } = await client.storage.from("avatars").upload(path, avatar, {
    upsert: true,
    contentType: "image/webp",
    cacheControl: "31536000",
  });
  if (error) throw new Error(`Không tải được ảnh: ${error.message}`);
  const { data } = client.storage.from("avatars").getPublicUrl(path);
  return `${data.publicUrl}?v=${Date.now()}`;
}

export async function removeSyntheticAvatar(learnerId: string) {
  const client = requireClient();
  await client.storage.from("avatars").remove([`synthetic/${learnerId}/avatar.webp`]);
}

export async function deleteSyntheticLearner(learnerId: string) {
  const client = requireClient();
  const { error } = await client.rpc("admin_delete_synthetic_learner", {
    p_learner_id: learnerId,
  });
  if (error) throw adminError(error.message);
  // Best-effort cleanup: the database row is authoritative, and a missing old
  // image should not make deletion appear to have failed.
  await removeSyntheticAvatar(learnerId);
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
