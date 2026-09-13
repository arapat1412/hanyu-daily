export interface ProgressStats {
  xp: number;
  weeklyXp: number;
  completed: number;
  averageScore: number;
  streak: number;
  hsk: string;
  activityDays: string[];
  todayCount: number;
  hasStudiedToday: boolean;
}

export interface WeekDayInfo {
  date: Date;
  dateKey: string; // "YYYY-MM-DD"
  label: string;   // "T2", "T3", "T4", "T5", "T6", "T7", "CN"
  dayNumber: number; // 1..31
  isToday: boolean;
  isPast: boolean;
  isFuture: boolean;
  hasActivity: boolean;
}

interface ProgressLike {
  known?: unknown[];
  knownAt?: Record<string, string>;
  bookmarks?: unknown[];
  mistakes?: unknown[];
  lessons?: Record<
    string,
    {
      completed?: boolean;
      score?: number;
      updatedAt?: string;
      scoreUpdatedAt?: string;
      completedAt?: string;
    }
  >;
  attempts?: Array<{
    lessonId?: string;
    score?: number;
    at?: string;
  }> | unknown[];
}

const BANGKOK_OFFSET_MS = 7 * 60 * 60 * 1000;

/** Start of the current Monday-Sunday leaderboard week in Asia/Bangkok. */
export function bangkokWeekStart(baseDate: Date = new Date()): number {
  const shifted = new Date(baseDate.getTime() + BANGKOK_OFFSET_MS);
  const dayFromMonday = (shifted.getUTCDay() + 6) % 7;
  const start = Date.UTC(
    shifted.getUTCFullYear(),
    shifted.getUTCMonth(),
    shifted.getUTCDate() - dayFromMonday,
  );
  return start - BANGKOK_OFFSET_MS;
}

/** YYYY-MM-DD in Asia/Bangkok, independent of the learner's device timezone. */
export function bangkokDateKey(value: string | number | Date = new Date()): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const shifted = new Date(date.getTime() + BANGKOK_OFFSET_MS);
  return [
    shifted.getUTCFullYear(),
    String(shifted.getUTCMonth() + 1).padStart(2, "0"),
    String(shifted.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

/**
 * Returns local YYYY-MM-DD date key
 */
export function localDateKey(value: string | number | Date = new Date()): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Check if there is learning activity on a specific date
 */
export function hasActivityOnDate(
  activityDaysInput: Set<string> | string[] = [],
  date: string | number | Date = new Date()
): boolean {
  const activitySet =
    activityDaysInput instanceof Set ? activityDaysInput : new Set(activityDaysInput);
  const key = bangkokDateKey(date);
  return Boolean(key && activitySet.has(key));
}

/**
 * Returns the Monday-Sunday leaderboard week in Asia/Bangkok.
 */
export function getWeekDays(
  activityDaysInput: Set<string> | string[] = [],
  baseDate: Date = new Date()
): WeekDayInfo[] {
  const activitySet =
    activityDaysInput instanceof Set ? activityDaysInput : new Set(activityDaysInput);
  const todayKey = bangkokDateKey(baseDate);
  const mondayTime = bangkokWeekStart(baseDate);
  const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const weekDays: WeekDayInfo[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(mondayTime + i * 24 * 60 * 60 * 1000);
    const dateKey = bangkokDateKey(date);
    const isToday = dateKey === todayKey;
    const isPast = dateKey < todayKey;
    const isFuture = dateKey > todayKey;
    const hasActivity = activitySet.has(dateKey);

    weekDays.push({
      date,
      dateKey,
      label: labels[i],
      dayNumber: Number(dateKey.slice(-2)),
      isToday,
      isPast,
      isFuture,
      hasActivity,
    });
  }
  return weekDays;
}

/**
 * Calculate comprehensive progress stats, activity days, and streaks
 */
export function calculateProgressStats(
  value: ProgressLike = {},
  baseDate: Date = new Date(),
): ProgressStats {
  const lessons =
    value.lessons && typeof value.lessons === "object"
      ? Object.entries(value.lessons)
      : [];
  const knownIds = new Set(Array.isArray(value.known) ? value.known : []);
  const known = knownIds.size;
  const completed = lessons.filter(([, entry]) => entry?.completed).length;
  const scored = lessons.filter(([, entry]) => typeof entry?.score === "number");
  const scoreTotal = scored.reduce((sum, [, entry]) => sum + (entry.score || 0), 0);
  const averageScore = scored.length ? Math.round(scoreTotal / scored.length) : 0;
  const weekStart = bangkokWeekStart(baseDate);
  const weekEnd = weekStart + 7 * 24 * 60 * 60 * 1000;
  const isInCurrentWeek = (timestamp: number) =>
    Number.isFinite(timestamp) &&
    timestamp >= weekStart &&
    timestamp < weekEnd &&
    timestamp <= baseDate.getTime() + 5 * 60 * 1000;

  const weeklyKnownXp = Object.entries(value.knownAt ?? {}).reduce((sum, [id, at]) => {
    if (!knownIds.has(id)) return sum;
    return sum + (isInCurrentWeek(Date.parse(at)) ? 2 : 0);
  }, 0);

  const weeklyXp = weeklyKnownXp + lessons.reduce((sum, [, entry]) => {
    const completionActivity = Date.parse(entry?.completedAt || "");
    const scoreActivity = Date.parse(entry?.scoreUpdatedAt || entry?.updatedAt || "");
    return (
      sum +
      (entry?.completed && isInCurrentWeek(completionActivity)
        ? 25
        : 0) +
      (typeof entry?.score === "number" &&
      isInCurrentWeek(scoreActivity)
        ? entry.score
        : 0)
    );
  }, 0);

  // 1. Aggregate activity days from BOTH lessons (updatedAt, scoreUpdatedAt) AND quiz attempts (at)
  const rawDates: string[] = [];

  for (const at of Object.values(value.knownAt ?? {})) {
    if (typeof at === "string") rawDates.push(at);
  }

  for (const [, entry] of lessons) {
    if (entry?.updatedAt && typeof entry.updatedAt === "string") {
      rawDates.push(entry.updatedAt);
    }
    if (entry?.scoreUpdatedAt && typeof entry.scoreUpdatedAt === "string") {
      rawDates.push(entry.scoreUpdatedAt);
    }
  }

  const attempts = Array.isArray(value.attempts) ? value.attempts : [];
  for (const attempt of attempts) {
    if (
      attempt &&
      typeof attempt === "object" &&
      "at" in attempt &&
      typeof (attempt as { at?: unknown }).at === "string"
    ) {
      rawDates.push((attempt as { at: string }).at);
    }
  }

  const activityDaysSet = new Set(
    rawDates
      .filter((dateStr) => !Number.isNaN(Date.parse(dateStr)))
      .map((dateStr) => bangkokDateKey(dateStr))
      .filter(Boolean)
  );

  // 2. Streak calculation
  const today = new Date(baseDate);
  const todayKey = bangkokDateKey(today);
  const hasStudiedToday = activityDaysSet.has(todayKey);

  let cursorTime = Date.parse(`${todayKey}T12:00:00+07:00`);
  // If not studied today yet, evaluate streak continuity starting from yesterday
  if (!hasStudiedToday) {
    cursorTime -= 24 * 60 * 60 * 1000;
  }

  let streak = 0;
  while (activityDaysSet.has(bangkokDateKey(cursorTime))) {
    streak++;
    cursorTime -= 24 * 60 * 60 * 1000;
  }

  // 3. Today's practice count
  let todayCount = 0;
  for (const attempt of attempts) {
    if (
      attempt &&
      typeof attempt === "object" &&
      "at" in attempt &&
      typeof (attempt as { at?: unknown }).at === "string"
    ) {
      if (bangkokDateKey((attempt as { at: string }).at) === todayKey) {
        todayCount++;
      }
    }
  }
  for (const [, entry] of lessons) {
    const u = entry?.updatedAt ? bangkokDateKey(entry.updatedAt) : "";
    const s = entry?.scoreUpdatedAt ? bangkokDateKey(entry.scoreUpdatedAt) : "";
    if (u === todayKey || s === todayKey) {
      todayCount++;
    }
  }

  // 4. Highest HSK level rank
  const levelRank = (lessonId: string) => {
    if (lessonId.startsWith("hsk7-9-")) return 7;
    const match = /^hsk([1-6])-/.exec(lessonId);
    return match ? Number(match[1]) : 0;
  };

  const highest = Math.max(
    0,
    ...lessons.filter(([, entry]) => entry?.completed).map(([id]) => levelRank(id))
  );

  return {
    xp: known * 2 + completed * 25 + scoreTotal,
    weeklyXp,
    completed,
    averageScore,
    streak,
    hsk: highest === 7 ? "HSK 7–9" : highest ? `HSK ${highest}` : "Mới học",
    activityDays: Array.from(activityDaysSet).sort(),
    todayCount,
    hasStudiedToday,
  };
}
