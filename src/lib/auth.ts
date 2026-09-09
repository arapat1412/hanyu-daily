import type { User } from "@supabase/supabase-js";
import { useSyncExternalStore } from "react";
import {
  isSupabaseConfigured,
  supabase,
  SUPABASE_CONFIGURATION_MESSAGE,
} from "./supabase";

export const AUTH_CHANGED_EVENT = "hanyu-auth-change";
export const PROGRESS_SYNCED_EVENT = "hanyu-progress-synced";

export interface AuthUser {
  id: string;
  name: string;
  username: string;
  createdAt: string;
  avatarUrl?: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  username: string;
  xp: number;
  weeklyXp: number;
  completed: number;
  averageScore: number;
  streak: number;
  hsk: string;
  avatarUrl?: string;
}

interface AuthSnapshot {
  user: AuthUser | null;
  isReady: boolean;
  error: string;
}

let authSnapshot: AuthSnapshot = {
  user: null,
  isReady: !isSupabaseConfigured,
  error: isSupabaseConfigured ? "" : SUPABASE_CONFIGURATION_MESSAGE,
};
const authSubscribers = new Set<() => void>();

function emitAuth() {
  authSubscribers.forEach((subscriber) => subscriber());
}

function setAuthSnapshot(next: AuthSnapshot) {
  const previousId = authSnapshot.user?.id || null;
  authSnapshot = next;
  emitAuth();
  if (previousId !== (next.user?.id || null))
    window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

function subscribeAuth(subscriber: () => void) {
  authSubscribers.add(subscriber);
  return () => authSubscribers.delete(subscriber);
}

function normalizeUsername(value: string) {
  return value.trim().toLocaleLowerCase("vi-VN");
}

function normalizeEmail(value: string) {
  return value.trim().toLocaleLowerCase("vi-VN");
}

function internalEmail(username: string) {
  return `${username}@accounts.hanyudaily.app`;
}

function userFromMetadata(user: User): AuthUser {
  const metadata = user.user_metadata || {};
  const emailName = (user.email || "hoc-vien").split("@")[0];
  return {
    id: user.id,
    name:
      typeof metadata.display_name === "string" && metadata.display_name.trim()
        ? metadata.display_name.trim()
        : emailName,
    username:
      typeof metadata.username === "string" && metadata.username.trim()
        ? metadata.username.trim()
        : emailName,
    createdAt: user.created_at,
  };
}

async function loadAuthUser(user: User | null) {
  if (!user || !supabase) return user ? userFromMetadata(user) : null;
  const fallback = userFromMetadata(user);
  const { data, error } = await supabase
    .from("profiles")
    .select("username, display_name, avatar_url, created_at")
    .eq("id", user.id)
    .maybeSingle();
  if (error || !data) return fallback;
  return {
    ...fallback,
    name: data.display_name || fallback.name,
    username: data.username || fallback.username,
    avatarUrl: data.avatar_url || undefined,
    createdAt: data.created_at || fallback.createdAt,
  };
}

if (supabase) {
  supabase.auth.getSession().then(async ({ data, error }) => {
    setAuthSnapshot({
      user: await loadAuthUser(data.session?.user || null),
      isReady: true,
      error: error?.message || "",
    });
  });
  supabase.auth.onAuthStateChange((_event, session) => {
    // Supabase recommends deferring additional client calls outside this callback.
    setTimeout(async () => {
      setAuthSnapshot({
        user: await loadAuthUser(session?.user || null),
        isReady: true,
        error: "",
      });
    }, 0);
  });
}

export function useAuth() {
  const value = useSyncExternalStore(subscribeAuth, () => authSnapshot);
  return {
    ...value,
    isAuthenticated: Boolean(value.user),
    isConfigured: isSupabaseConfigured,
  };
}

export function getCurrentAccountId() {
  return authSnapshot.user?.id || null;
}

function requireSupabase() {
  if (!supabase) throw new Error(SUPABASE_CONFIGURATION_MESSAGE);
  return supabase;
}

function friendlyAuthError(message: string) {
  const normalized = message.toLowerCase();
  if (normalized.includes("invalid login credentials"))
    return "Tên tài khoản hoặc mật khẩu không đúng.";
  if (normalized.includes("email not confirmed"))
    return "Project Supabase vẫn đang yêu cầu xác nhận email. Hãy tắt Confirm email trong cấu hình Auth.";
  if (normalized.includes("user already registered"))
    return "Tên tài khoản này đã được đăng ký.";
  if (normalized.includes("database error saving new user"))
    return "Không thể tạo hồ sơ. Tên đăng nhập có thể đã được sử dụng.";
  if (normalized.includes("rate limit"))
    return "Bạn thao tác quá nhanh. Vui lòng đợi một lát rồi thử lại.";
  return message;
}

export async function registerAccount(input: {
  username: string;
  password: string;
}) {
  const client = requireSupabase();
  const username = normalizeUsername(input.username);
  if (!/^[a-z0-9._]{3,24}$/.test(username))
    throw new Error(
      "Tên đăng nhập cần 3–24 ký tự, chỉ gồm chữ thường không dấu, số, dấu chấm hoặc gạch dưới.",
    );
  if (input.password.length < 6)
    throw new Error("Mật khẩu phải có ít nhất 6 ký tự.");

  const { data: existingProfile, error: lookupError } = await client
    .from("profiles")
    .select("id")
    .eq("username", username)
    .maybeSingle();
  if (lookupError)
    throw new Error("Không kiểm tra được tên đăng nhập. Vui lòng thử lại.");
  if (existingProfile) throw new Error("Tên đăng nhập đã được sử dụng.");

  const { data, error } = await client.auth.signUp({
    email: internalEmail(username),
    password: input.password,
    options: { data: { display_name: username, username } },
  });
  if (error) {
    if (error.message.toLowerCase().includes("rate limit"))
      throw new Error(
        "Supabase đang bật xác nhận email và đã chạm giới hạn gửi thư. Quản trị viên cần tắt Confirm email trong Authentication.",
      );
    throw new Error(friendlyAuthError(error.message));
  }
  if (data.session?.user) {
    setAuthSnapshot({
      user: await loadAuthUser(data.session.user),
      isReady: true,
      error: "",
    });
  }
  return {
    user: data.user ? userFromMetadata(data.user) : null,
    requiresEmailConfirmation: !data.session,
  };
}

export async function loginAccount(identifier: string, password: string) {
  const client = requireSupabase();
  const normalizedIdentifier = normalizeEmail(identifier);
  const isLegacyEmail = normalizedIdentifier.includes("@");
  if (!isLegacyEmail && !/^[a-z0-9._]{3,24}$/.test(normalizedIdentifier))
    throw new Error("Tên tài khoản chưa đúng định dạng.");
  const { data, error } = await client.auth.signInWithPassword({
    email: isLegacyEmail
      ? normalizedIdentifier
      : internalEmail(normalizedIdentifier),
    password,
  });
  if (error) throw new Error(friendlyAuthError(error.message));
  const user = await loadAuthUser(data.user);
  setAuthSnapshot({ user, isReady: true, error: "" });
  return user;
}

export async function logoutAccount() {
  const client = requireSupabase();
  const { error } = await client.auth.signOut();
  if (error) throw new Error(friendlyAuthError(error.message));
}

export async function submitFeedback(message: string) {
  const client = requireSupabase();
  const currentUser = authSnapshot.user;
  if (!currentUser) throw new Error("Bạn cần đăng nhập để gửi phản hồi.");
  const normalizedMessage = message.trim();
  if (!normalizedMessage) throw new Error("Hãy nhập nội dung phản hồi.");
  if (normalizedMessage.length > 1500)
    throw new Error("Phản hồi không được dài quá 1.500 ký tự.");

  const { error } = await client.from("feedback_messages").insert({
    user_id: currentUser.id,
    message: normalizedMessage,
  });
  if (error) {
    if (error.message.toLowerCase().includes("rate limit"))
      throw new Error("Bạn đã gửi nhiều phản hồi. Vui lòng thử lại sau một giờ.");
    throw new Error("Chưa gửi được phản hồi. Vui lòng thử lại sau.");
  }
}

async function resizeAvatar(file: File) {
  if (!file.type.startsWith("image/"))
    throw new Error("Hãy chọn một tệp ảnh JPG, PNG hoặc WebP.");
  if (file.size > 8 * 1024 * 1024)
    throw new Error("Ảnh gốc không được lớn hơn 8 MB.");

  let bitmap: ImageBitmap;
  try {
    bitmap = await createImageBitmap(file);
  } catch {
    throw new Error("Không đọc được định dạng ảnh này. Hãy thử ảnh JPG, PNG hoặc WebP.");
  }
  const sourceSize = Math.min(bitmap.width, bitmap.height);
  const sourceX = Math.floor((bitmap.width - sourceSize) / 2);
  const sourceY = Math.floor((bitmap.height - sourceSize) / 2);
  const outputSize = Math.min(512, sourceSize);
  const canvas = document.createElement("canvas");
  canvas.width = outputSize;
  canvas.height = outputSize;
  const context = canvas.getContext("2d");
  if (!context) {
    bitmap.close();
    throw new Error("Trình duyệt không thể xử lý ảnh đại diện.");
  }
  context.drawImage(
    bitmap,
    sourceX,
    sourceY,
    sourceSize,
    sourceSize,
    0,
    0,
    outputSize,
    outputSize,
  );
  bitmap.close();
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/webp", 0.86),
  );
  if (!blob) throw new Error("Không thể nén ảnh đại diện.");
  return blob;
}

export async function uploadAvatar(file: File) {
  const client = requireSupabase();
  const currentUser = authSnapshot.user;
  if (!currentUser) throw new Error("Bạn cần đăng nhập để đổi ảnh đại diện.");
  const avatar = await resizeAvatar(file);
  const path = `${currentUser.id}/avatar.webp`;
  const { error: uploadError } = await client.storage
    .from("avatars")
    .upload(path, avatar, {
      upsert: true,
      contentType: "image/webp",
      cacheControl: "3600",
    });
  if (uploadError) throw new Error(`Không tải được ảnh: ${uploadError.message}`);

  const { data } = client.storage.from("avatars").getPublicUrl(path);
  const avatarUrl = `${data.publicUrl}?v=${Date.now()}`;
  const { error: profileError } = await client
    .from("profiles")
    .update({ avatar_url: avatarUrl, updated_at: new Date().toISOString() })
    .eq("id", currentUser.id);
  if (profileError)
    throw new Error(`Ảnh đã tải lên nhưng chưa cập nhật được hồ sơ: ${profileError.message}`);

  setAuthSnapshot({
    ...authSnapshot,
    user: { ...currentUser, avatarUrl },
    error: "",
  });
  void refreshLeaderboard();
  return avatarUrl;
}

let leaderboardSnapshot: LeaderboardEntry[] = [];
let leaderboardLoading = false;
let leaderboardError = "";
let leaderboardRevision = 0;
const leaderboardSubscribers = new Set<() => void>();

function emitLeaderboard() {
  leaderboardRevision++;
  leaderboardSubscribers.forEach((subscriber) => subscriber());
}

export async function refreshLeaderboard() {
  if (!supabase) {
    leaderboardSnapshot = [];
    leaderboardError = SUPABASE_CONFIGURATION_MESSAGE;
    emitLeaderboard();
    return;
  }
  leaderboardLoading = true;
  emitLeaderboard();
  const { data, error } = await supabase
    .from("public_leaderboard")
    .select("user_id, display_name, username, avatar_url, xp, weekly_xp, completed, average_score, streak, hsk")
    .order("xp", { ascending: false })
    .limit(100);
  leaderboardLoading = false;
  leaderboardError = error?.message || "";
  leaderboardSnapshot = error
    ? leaderboardSnapshot
    : (data || []).map((row) => ({
        id: row.user_id,
        name: row.display_name,
        username: row.username,
        xp: row.xp,
        weeklyXp: row.weekly_xp,
        completed: row.completed,
        averageScore: row.average_score,
        streak: row.streak,
        hsk: row.hsk,
        avatarUrl: row.avatar_url || undefined,
      }));
  emitLeaderboard();
}

function subscribeLeaderboard(subscriber: () => void) {
  leaderboardSubscribers.add(subscriber);
  if (leaderboardSubscribers.size === 1) void refreshLeaderboard();
  return () => leaderboardSubscribers.delete(subscriber);
}

window.addEventListener(PROGRESS_SYNCED_EVENT, () => void refreshLeaderboard());

export function useLeaderboard() {
  useSyncExternalStore(subscribeLeaderboard, () => leaderboardRevision);
  return {
    users: leaderboardSnapshot,
    loading: leaderboardLoading,
    error: leaderboardError,
    refresh: refreshLeaderboard,
  };
}
