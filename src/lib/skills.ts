import type {
  Progress,
  SkillPracticeEvent,
  SkillPracticeMode,
} from "./hsk";

export type SkillKey = "hanzi" | "vocab" | "grammar" | "listening";
export type SkillLevelLabel = "Cần cải thiện" | "Khá" | "Tốt" | "Xuất sắc";

export interface SkillScore {
  key: SkillKey;
  label: string;
  icon: string;
  score: number;
  levelLabel: SkillLevelLabel;
  color: string;
  description: string;
  actionRoute: string;
  actionText: string;
}

export interface SkillAnalysisResult {
  skills: SkillScore[];
  averageScore: number;
  weakestSkill: SkillScore;
  strongestSkill: SkillScore;
  summaryFeedback: string;
  isEstimated: boolean;
}

const LEVELS = ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6", "hsk7-9"] as const;
const LEVEL_TARGETS: Record<(typeof LEVELS)[number], { vocabCount: number; lessonsCount: number }> = {
  hsk1: { vocabCount: 300, lessonsCount: 15 },
  hsk2: { vocabCount: 200, lessonsCount: 15 },
  hsk3: { vocabCount: 500, lessonsCount: 18 },
  hsk4: { vocabCount: 1000, lessonsCount: 100 },
  hsk5: { vocabCount: 1600, lessonsCount: 160 },
  hsk6: { vocabCount: 1800, lessonsCount: 180 },
  "hsk7-9": { vocabCount: 5600, lessonsCount: 560 },
};
const BASELINE = 52;

function clamp(value: number, minimum = 0, maximum = 100): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function average(values: number[]): number | null {
  if (values.length === 0) return null;
  return values.reduce((total, value) => total + value, 0) / values.length;
}

function stabilizedScore(rawScore: number, evidence: number, targetEvidence: number): number {
  const confidence = clamp(evidence / targetEvidence, 0, 1);
  return Math.round(clamp(BASELINE * (1 - confidence) + rawScore * confidence));
}

export function getSkillLevelLabel(score: number): SkillLevelLabel {
  if (score < 55) return "Cần cải thiện";
  if (score < 70) return "Khá";
  if (score < 85) return "Tốt";
  return "Xuất sắc";
}

function getCurrentLevel(progress: Progress): (typeof LEVELS)[number] {
  const ranks = new Map(LEVELS.map((level, index) => [level, index]));
  let highestRank = -1;
  for (const [lessonId, lesson] of Object.entries(progress.lessons)) {
    if (!lesson.completed) continue;
    const match = /^(hsk(?:[1-6]|7-9))-/.exec(lessonId);
    if (match) highestRank = Math.max(highestRank, ranks.get(match[1] as (typeof LEVELS)[number]) ?? -1);
  }
  if (highestRank >= 0) return LEVELS[highestRank];

  const knownCount = progress.known.length;
  let cumulativeVocabulary = 0;
  for (const level of LEVELS) {
    cumulativeVocabulary += LEVEL_TARGETS[level].vocabCount;
    if (knownCount < cumulativeVocabulary) return level;
  }
  return "hsk7-9";
}

function cumulativeTarget(level: (typeof LEVELS)[number], field: "vocabCount" | "lessonsCount"): number {
  const endIndex = LEVELS.indexOf(level);
  return LEVELS.slice(0, endIndex + 1).reduce(
    (total, currentLevel) => total + LEVEL_TARGETS[currentLevel][field],
    0,
  );
}

function recentModeAverage(
  history: SkillPracticeEvent[],
  modes: SkillPracticeMode[],
): number | null {
  const scores = history
    .filter((event) => modes.includes(event.mode) && typeof event.score === "number")
    .slice(-10)
    .map((event) => event.score as number);
  return average(scores);
}

function createSkill(
  input: Omit<SkillScore, "score" | "levelLabel"> & { score: number },
): SkillScore {
  const score = Math.round(clamp(input.score));
  return { ...input, score, levelLabel: getSkillLevelLabel(score) };
}

export function analyzeSkills(progress: Progress): SkillAnalysisResult {
  const history = [...(progress.practiceHistory ?? [])].sort(
    (first, second) => Date.parse(first.at) - Date.parse(second.at),
  );
  const completedLessons = Object.values(progress.lessons).filter((lesson) => lesson.completed).length;
  const knownCount = new Set(progress.known).size;
  const mistakeCount = new Set(progress.mistakes).size;
  const reviewedWordCount = knownCount + mistakeCount;
  const recallAccuracy = reviewedWordCount > 0 ? (knownCount / reviewedWordCount) * 100 : 55;
  const attemptScores = progress.attempts.slice(-10).map((attempt) => attempt.score);
  const scoredLessonValues = Object.values(progress.lessons)
    .filter((lesson) => typeof lesson.score === "number")
    .map((lesson) => lesson.score as number);
  const generalTestScore = average(attemptScores) ?? average(scoredLessonValues) ?? 55;
  const currentLevel = getCurrentLevel(progress);
  const vocabularyTarget = Math.max(1, cumulativeTarget(currentLevel, "vocabCount"));
  const lessonTarget = Math.max(1, cumulativeTarget(currentLevel, "lessonsCount"));
  const vocabularyCoverage = clamp((knownCount / vocabularyTarget) * 100);
  const lessonCompletion = clamp((completedLessons / lessonTarget) * 100);

  const hanziHistory = history.filter((event) => ["pinyin", "typing", "hanzi"].includes(event.mode));
  const hanziPracticeScore = recentModeAverage(history, ["pinyin", "typing", "hanzi"]) ?? generalTestScore;
  const hanziRaw = recallAccuracy * 0.6 + hanziPracticeScore * 0.4;
  const hanziScore = stabilizedScore(
    hanziRaw,
    Math.min(4, reviewedWordCount / 5) + Math.min(4, hanziHistory.length),
    8,
  );

  const meaningHistory = history.filter((event) => event.mode === "meaning");
  const meaningScore = recentModeAverage(history, ["meaning", "matching"]) ?? recallAccuracy;
  const vocabularyRaw = vocabularyCoverage * 0.5 + recallAccuracy * 0.25 + meaningScore * 0.15 + lessonCompletion * 0.1;
  const vocabularyScore = stabilizedScore(
    vocabularyRaw,
    Math.min(5, reviewedWordCount / 10) + Math.min(3, meaningHistory.length) + Math.min(2, completedLessons),
    10,
  );

  const grammarHistory = history.filter((event) => event.mode === "cloze" || event.mode === "scramble");
  const grammarPracticeScore = recentModeAverage(history, ["cloze", "scramble"]) ?? generalTestScore;
  const grammarRaw = lessonCompletion * 0.55 + grammarPracticeScore * 0.45;
  const grammarScore = stabilizedScore(
    grammarRaw,
    Math.min(5, completedLessons) + Math.min(5, grammarHistory.length),
    10,
  );

  const listeningHistory = history.filter((event) => event.mode === "listening");
  const handsFreeCount = history.filter((event) => event.mode === "handsFree").length;
  const listeningPracticeScore = recentModeAverage(history, ["listening"]) ?? generalTestScore;
  const listeningFrequency = clamp(((listeningHistory.length + handsFreeCount) / 12) * 100);
  const listeningRaw = listeningPracticeScore * 0.75 + listeningFrequency * 0.25;
  const listeningScore = stabilizedScore(
    listeningRaw,
    Math.min(6, listeningHistory.length * 1.5 + handsFreeCount),
    6,
  );

  const levelRoute = `/hsk/${currentLevel}`;
  const skills: SkillScore[] = [
    createSkill({
      key: "hanzi",
      label: "Nhận diện mặt chữ",
      icon: "🈳",
      score: hanziScore,
      color: "#0284C7",
      description: "Khả năng nhận mặt chữ, nhớ âm đọc và viết đúng thứ tự nét.",
      actionRoute: `${levelRoute}/review`,
      actionText: "Luyện nhận diện chữ ngay",
    }),
    createSkill({
      key: "vocab",
      label: "Vốn từ vựng",
      icon: "📖",
      score: vocabularyScore,
      color: "#F472B6",
      description: "Độ phủ từ vựng và khả năng chọn đúng nghĩa trong ngữ cảnh.",
      actionRoute: `${levelRoute}/review`,
      actionText: "Ôn Flashcard ngay",
    }),
    createSkill({
      key: "grammar",
      label: "Ngữ pháp & Cú pháp",
      icon: "📘",
      score: grammarScore,
      color: "#7C3AED",
      description: "Tiến độ ngữ pháp, điền từ và sắp xếp câu hoàn chỉnh.",
      actionRoute: `${levelRoute}/grammar`,
      actionText: "Bổ trợ ngữ pháp ngay",
    }),
    createSkill({
      key: "listening",
      label: "Kỹ năng nghe hiểu",
      icon: "🎧",
      score: listeningScore,
      color: "#D97706",
      description: "Độ chính xác khi nghe chọn chữ và thói quen nghe rảnh tay.",
      actionRoute: `${levelRoute}/review`,
      actionText: "Luyện nghe rảnh tay ngay",
    }),
  ];

  const sorted = [...skills].sort((first, second) => first.score - second.score);
  const weakestSkill = sorted[0];
  const strongestSkill = sorted[sorted.length - 1];
  const averageScore = Math.round(average(skills.map((skill) => skill.score)) ?? BASELINE);
  const evidenceCount = reviewedWordCount + completedLessons + progress.attempts.length + history.length;
  const categorizedScores = history.filter((event) => typeof event.score === "number").length;
  const isEstimated = evidenceCount < 12 || categorizedScores < 2;

  return {
    skills,
    averageScore,
    weakestSkill,
    strongestSkill,
    isEstimated,
    summaryFeedback: `${weakestSkill.label} đang là kỹ năng cần ưu tiên. Dành thêm 10 phút luyện tập hôm nay để cân bằng năng lực thi HSK.`,
  };
}
