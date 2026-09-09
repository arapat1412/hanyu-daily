export interface ProgressStats {
  xp: number;
  weeklyXp: number;
  completed: number;
  averageScore: number;
  streak: number;
  hsk: string;
}

interface ProgressLike {
  known?: unknown[];
  lessons?: Record<string, {
    completed?: boolean;
    score?: number;
    updatedAt?: string;
    scoreUpdatedAt?: string;
  }>;
}

function localDateKey(value: string | number | Date) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function calculateProgressStats(value: ProgressLike): ProgressStats {
  const lessons = value.lessons && typeof value.lessons === "object"
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
    return sum +
      (entry?.completed && Number.isFinite(completionActivity) && completionActivity >= weekStart ? 25 : 0) +
      (typeof entry?.score === "number" && Number.isFinite(scoreActivity) && scoreActivity >= weekStart ? entry.score : 0);
  }, 0);
  const activityDays = new Set(
    lessons
      .map(([, entry]) => entry?.updatedAt)
      .filter((date): date is string => typeof date === "string" && !Number.isNaN(Date.parse(date)))
      .map(localDateKey),
  );
  const cursor = new Date();
  if (!activityDays.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (activityDays.has(localDateKey(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  const levelRank = (lessonId: string) => {
    if (lessonId.startsWith("hsk7-9-")) return 7;
    const match = /^hsk([1-6])-/.exec(lessonId);
    return match ? Number(match[1]) : 0;
  };
  const highest = Math.max(
    0,
    ...lessons.filter(([, entry]) => entry?.completed).map(([id]) => levelRank(id)),
  );

  return {
    xp: known * 2 + completed * 25 + scoreTotal,
    weeklyXp,
    completed,
    averageScore,
    streak,
    hsk: highest === 7 ? "HSK 7–9" : highest ? `HSK ${highest}` : "Mới học",
  };
}
