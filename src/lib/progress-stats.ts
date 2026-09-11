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
  bookmarks?: unknown[];
  mistakes?: unknown[];
  lessons?: Record<
    string,
    {
      completed?: boolean;
      score?: number;
      updatedAt?: string;
      scoreUpdatedAt?: string;
    }
  >;
  attempts?: Array<{
    lessonId?: string;
    score?: number;
    at?: string;
  }> | unknown[];
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
  const key = localDateKey(date);
  return Boolean(key && activitySet.has(key));
}

/**
 * Returns info for the 7 days of the current week (Monday to Sunday in local time)
 */
export function getWeekDays(
  activityDaysInput: Set<string> | string[] = [],
  baseDate: Date = new Date()
): WeekDayInfo[] {
  const activitySet =
    activityDaysInput instanceof Set ? activityDaysInput : new Set(activityDaysInput);
  const todayKey = localDateKey(new Date());

  // In JS Date: Sunday=0, Monday=1, ..., Saturday=6
  // We want Monday as index 0 ... Sunday as index 6
  const dayOfWeek = (baseDate.getDay() + 6) % 7;
  const monday = new Date(
    baseDate.getFullYear(),
    baseDate.getMonth(),
    baseDate.getDate() - dayOfWeek
  );
  const labels = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const weekDays: WeekDayInfo[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
    const dateKey = localDateKey(date);
    const isToday = dateKey === todayKey;
    const isPast = dateKey < todayKey;
    const isFuture = dateKey > todayKey;
    const hasActivity = activitySet.has(dateKey);

    weekDays.push({
      date,
      dateKey,
      label: labels[i],
      dayNumber: date.getDate(),
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
export function calculateProgressStats(value: ProgressLike = {}): ProgressStats {
  const lessons =
    value.lessons && typeof value.lessons === "object"
      ? Object.entries(value.lessons)
      : [];
  const known = Array.isArray(value.known) ? new Set(value.known).size : 0;
  const completed = lessons.filter(([, entry]) => entry?.completed).length;
  const scored = lessons.filter(([, entry]) => typeof entry?.score === "number");
  const scoreTotal = scored.reduce((sum, [, entry]) => sum + (entry.score || 0), 0);
  const averageScore = scored.length ? Math.round(scoreTotal / scored.length) : 0;
  const weekStart = Date.now() - 7 * 24 * 60 * 60 * 1000;

  const weeklyXp = lessons.reduce((sum, [, entry]) => {
    const completionActivity = Date.parse(entry?.updatedAt || "");
    const scoreActivity = Date.parse(entry?.scoreUpdatedAt || entry?.updatedAt || "");
    return (
      sum +
      (entry?.completed && Number.isFinite(completionActivity) && completionActivity >= weekStart
        ? 25
        : 0) +
      (typeof entry?.score === "number" &&
      Number.isFinite(scoreActivity) &&
      scoreActivity >= weekStart
        ? entry.score
        : 0)
    );
  }, 0);

  // 1. Aggregate activity days from BOTH lessons (updatedAt, scoreUpdatedAt) AND quiz attempts (at)
  const rawDates: string[] = [];

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
      .map((dateStr) => localDateKey(dateStr))
      .filter(Boolean)
  );

  // 2. Streak calculation
  const today = new Date();
  const todayKey = localDateKey(today);
  const hasStudiedToday = activityDaysSet.has(todayKey);

  const cursor = new Date(today);
  // If not studied today yet, evaluate streak continuity starting from yesterday
  if (!hasStudiedToday) {
    cursor.setDate(cursor.getDate() - 1);
  }

  let streak = 0;
  while (activityDaysSet.has(localDateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
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
      if (localDateKey((attempt as { at: string }).at) === todayKey) {
        todayCount++;
      }
    }
  }
  for (const [, entry] of lessons) {
    const u = entry?.updatedAt ? localDateKey(entry.updatedAt) : "";
    const s = entry?.scoreUpdatedAt ? localDateKey(entry.scoreUpdatedAt) : "";
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
