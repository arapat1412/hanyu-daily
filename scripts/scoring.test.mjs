import test from "node:test";
import assert from "node:assert/strict";
import {
  bangkokDateKey,
  bangkokWeekStart,
  calculateProgressStats,
} from "../src/lib/progress-stats.ts";
import { analyzeSkills } from "../src/lib/skills.ts";

test("leaderboard week starts at Monday 00:00 in Asia/Bangkok", () => {
  const sunday = new Date("2026-09-13T12:00:00.000Z");
  assert.equal(
    new Date(bangkokWeekStart(sunday)).toISOString(),
    "2026-09-06T17:00:00.000Z",
  );
  assert.equal(bangkokDateKey("2026-09-06T17:00:00.000Z"), "2026-09-07");
});

test("weekly XP includes newly remembered words and immutable completion time", () => {
  const now = new Date("2026-09-13T12:00:00.000Z");
  const stats = calculateProgressStats(
    {
      known: ["hsk30-1", "hsk30-2"],
      knownAt: {
        "hsk30-1": "2026-09-07T01:00:00.000Z",
        "hsk30-2": "2026-09-01T01:00:00.000Z",
      },
      lessons: {
        "hsk1-1": {
          completed: true,
          completedAt: "2026-09-08T01:00:00.000Z",
          updatedAt: "2026-09-13T01:00:00.000Z",
          score: 90,
          scoreUpdatedAt: "2026-09-09T01:00:00.000Z",
        },
      },
      attempts: [],
    },
    now,
  );
  assert.equal(stats.xp, 119);
  assert.equal(stats.weeklyXp, 117);
});

test("retrying an old completed lesson does not renew its weekly completion bonus", () => {
  const stats = calculateProgressStats(
    {
      known: [],
      knownAt: {},
      lessons: {
        "hsk1-1": {
          completed: true,
          completedAt: "2026-08-01T01:00:00.000Z",
          updatedAt: "2026-09-13T01:00:00.000Z",
          score: 80,
          scoreUpdatedAt: "2026-08-01T01:00:00.000Z",
        },
      },
      attempts: [],
    },
    new Date("2026-09-13T12:00:00.000Z"),
  );
  assert.equal(stats.weeklyXp, 0);
});

test("unified XP events contribute to overall, weekly XP, activity and streak", () => {
  const now = new Date("2026-09-13T12:00:00.000Z");
  const stats = calculateProgressStats(
    {
      known: ["boya1-1-1"],
      knownAt: { "boya1-1-1": "2026-09-08T01:00:00.000Z" },
      lessons: {},
      attempts: [],
      xpEvents: {
        "yct:1:quiz:2026-09-13": {
          source: "yct",
          amount: 10,
          earnedAt: "2026-09-13T01:00:00.000Z",
        },
        "yct:1:legacy": {
          source: "yct",
          amount: 30,
          earnedAt: "1970-01-01T00:00:00.000Z",
        },
      },
    },
    now,
  );
  assert.equal(stats.xp, 42);
  assert.equal(stats.weeklyXp, 12);
  assert.equal(stats.hasStudiedToday, true);
  assert.equal(stats.streak, 1);
});

test("an incomplete high-level attempt does not change skill targets", () => {
  const baseProgress = {
    version: 1,
    bookmarks: [],
    known: Array.from({ length: 30 }, (_, index) => `hsk30-${index + 1}`),
    knownAt: {},
    mistakes: [],
    lessons: {},
    attempts: [],
    srs: {},
    practiceHistory: [],
  };
  const baseline = analyzeSkills(baseProgress);
  const withFailedHighLevelAttempt = analyzeSkills({
    ...baseProgress,
    lessons: {
      "hsk7-9-1": {
        completed: false,
        score: 20,
        scoreUpdatedAt: "2026-09-13T01:00:00.000Z",
        updatedAt: "2026-09-13T01:00:00.000Z",
      },
    },
  });
  assert.equal(
    withFailedHighLevelAttempt.skills.find((skill) => skill.key === "vocab")?.score,
    baseline.skills.find((skill) => skill.key === "vocab")?.score,
  );
});
