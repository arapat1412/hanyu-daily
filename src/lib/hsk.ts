import { useEffect, useState, useSyncExternalStore } from "react";
import manifest from "../data/hsk-manifest.json";
import enrichment from "../data/hsk-enrichment.json";
import { createFallbackExample } from "./examples.mjs";
import {
  createExampleShardLoader,
  mergeExampleWords,
  type LoadedExample,
} from "./example-loader.mjs";
import { sameReading } from "./pronunciation.mjs";
import { SAMPLE_VOCABULARY } from "../data/sampleVocab";
import type { VocabularyWord } from "../types";
import {
  AUTH_CHANGED_EVENT,
  PROGRESS_SYNCED_EVENT,
  getCurrentAccountId,
} from "./auth";
import { supabase } from "./supabase";

export { manifest, enrichment };
export type LevelCode = keyof typeof manifest.levels;
export interface Lesson {
  id: string;
  level: string;
  number: number;
  title: string;
  titlePinyin?: string;
  titleVi?: string;
  subtitle: string;
  wordIds: string[];
}
export interface SyllabusGrammar {
  examLevelId: string;
  content: string;
  grammarType: string;
  categoryType: string;
  grammarDetail: string;
  cases: string;
}
export interface SyllabusTopic {
  examLevelId: string;
  level1Content: string;
  level2Content: string;
  level3Content?: string;
}
export interface HskData {
  code: string;
  words: VocabularyWord[];
  lessonWords?: VocabularyWord[];
  lessons: Lesson[];
  grammar: SyllabusGrammar[];
  hanzi: { word: string; type: string; examLevelId: string }[];
  topic: SyllabusTopic[];
  task: SyllabusTopic[];
}
export function isLevelCode(code: string): code is LevelCode {
  return Object.hasOwnProperty.call(manifest.levels, code);
}
export function isVocabularyGroupLevel(code: string) {
  return new Set(["hsk4", "hsk5", "hsk6", "hsk7-9"]).has(code);
}
export function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .replace(/ü/g, "v")
    .replace(/[ǖǘǚǜ]/g, "v")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^\p{L}\p{N}]/gu, "");
}
const partOfSpeech: Record<string, string> = {
  数量: "Số lượng",
  前缀: "Tiền tố",
  后缀: "Hậu tố",
  名: "Danh từ",
  动: "Động từ",
  形: "Tính từ",
  副: "Phó từ",
  代: "Đại từ",
  数: "Số từ",
  量: "Lượng từ",
  介: "Giới từ",
  连: "Liên từ",
  助: "Trợ từ",
  叹: "Thán từ",
  拟声: "Từ tượng thanh",
  拟: "Từ tượng thanh",
  区: "Từ phân biệt",
};
const localWords = Object.values(SAMPLE_VOCABULARY).flat();
const cache = new Map<string, Promise<HskData>>();
const loadExampleShard = createExampleShardLoader();
export function loadLevel(code: string): Promise<HskData> {
  if (!isLevelCode(code))
    return Promise.reject(new Error("Không tìm thấy cấp độ HSK."));
  if (!cache.has(code)) {
    cache.set(
      code,
      Promise.all([
        fetch(`/data/hsk/${code}.json`, { signal: AbortSignal.timeout(20000) }),
        fetch(`/data/hsk-annotations/${code}.json`, {
          signal: AbortSignal.timeout(20000),
        }),
      ])
        .then(async ([response, annotationResponse]) => {
          if (!response.ok || !annotationResponse.ok)
            throw new Error(
              "Không tải được dữ liệu. Kiểm tra kết nối và thử lại.",
            );
          const data: HskData = await response.json();
          const supplement: {
            code: string;
            version: number;
            annotations: Record<string, Partial<VocabularyWord>>;
          } = await annotationResponse.json();
          if (
            supplement.code !== code ||
            supplement.version !== 1 ||
            !supplement.annotations
          )
            throw new Error("Dữ liệu nghĩa Việt không hợp lệ.");
          if (
            data.code !== code ||
            data.words.length !== manifest.levels[code].vocabCount
          )
            throw new Error("Dữ liệu cấp độ không hợp lệ.");
          const hydrateWord = (word: VocabularyWord) => {
            const local = localWords.find(
              (item) =>
                item.hanzi === word.hanzi &&
                sameReading(item.pinyin, word.pinyin),
            );
            const annotation = supplement.annotations[word.id] || {};
            const meaning =
              local?.meaning || annotation.meaning || word.meaning || "";
            const exampleSentence = local?.exampleSentence
              ? { ...local.exampleSentence, source: "curated" as const }
              : word.exampleSentence || createFallbackExample(word, meaning);
            return {
              ...word,
              definitions: annotation.definitions || word.definitions,
              dictionary: annotation.dictionary || word.dictionary,
              partOfSpeech:
                word.partOfSpeech.replace(
                  /数量|前缀|后缀|拟声|[名动形副代数量介连助叹拟区]/g,
                  (token) => partOfSpeech[token] || token,
                ) || "Chưa phân loại",
              meaning,
              meaningStatus: local?.meaning
                ? "local"
                : annotation.meaning
                  ? annotation.meaningStatus || "dictionary"
                  : word.meaningStatus || "missing",
              meaningQuizEligible: local?.meaning
                ? true
                : annotation.meaning
                  ? !!annotation.meaningQuizEligible
                  : !!word.meaningQuizEligible,
              sinoVietnamese:
                local?.sinoVietnamese ||
                annotation.sinoVietnamese ||
                word.sinoVietnamese,
              sinoVietnameseMethod: local?.sinoVietnamese
                ? "local"
                : annotation.sinoVietnameseMethod || word.sinoVietnameseMethod,
              exampleSentence,
            };
          };
          data.words = data.words.map(hydrateWord);
          data.lessonWords = (data.lessonWords || []).map(hydrateWord);
          return data;
        })
        .catch((error) => {
          cache.delete(code);
          throw error;
        }),
    );
  }
  return cache.get(code)!;
}
export function useHskData(code: string) {
  const [state, setState] = useState<{
    code: string;
    data?: HskData;
    error?: string;
  }>({ code });
  const [attempt, retry] = useState(0);
  useEffect(() => {
    let active = true;
    setState({ code });
    loadLevel(code)
      .then((data) => {
        if (active) setState({ code, data });
      })
      .catch((error) => {
        if (active)
          setState({
            code,
            error:
              error.name === "TimeoutError"
                ? "Tải dữ liệu quá lâu. Vui lòng thử lại."
                : error.message,
          });
      });
    return () => {
      active = false;
    };
  }, [code, attempt]);
  return {
    ...(state.code === code ? state : { code }),
    retry: () => retry((n) => n + 1),
  };
}

export function useExamplesForWords(
  code: string,
  words: VocabularyWord[],
  requestedUnits?: number[],
) {
  const units = [
    ...new Set(
      requestedUnits || words.map((word) => word.unit).filter(Boolean),
    ),
  ].sort((a, b) => a! - b!) as number[];
  const key = `${code}:${units.join(",")}`;
  const [loaded, setLoaded] = useState<{
    key: string;
    examples: Record<string, LoadedExample>;
  }>({ key: "", examples: {} });

  useEffect(() => {
    let active = true;
    if (!units.length) {
      setLoaded({ key, examples: {} });
      return () => {
        active = false;
      };
    }
    Promise.all(
      units.map((unit) => loadExampleShard(code, unit).catch(() => ({}))),
    ).then((shards) => {
      if (active)
        setLoaded({ key, examples: Object.assign({}, ...shards) });
    });
    return () => {
      active = false;
    };
  }, [key]);

  return mergeExampleWords(words, loaded.key === key ? loaded.examples : {});
}

export interface ScoreAttempt {
  lessonId: string;
  score: number;
  at: string;
}
export interface Progress {
  version: 1;
  bookmarks: string[];
  known: string[];
  mistakes: string[];
  lessons: Record<
    string,
    {
      completed: boolean;
      score?: number;
      scoreUpdatedAt?: string;
      updatedAt: string;
    }
  >;
  attempts: ScoreAttempt[];
}
const empty: Progress = {
  version: 1,
  bookmarks: [],
  known: [],
  mistakes: [],
  lessons: {},
  attempts: [],
};
const baseStorageKey = "hsk30-learning-v1";
function progressStorageKey() {
  const accountId = getCurrentAccountId();
  return accountId ? `${baseStorageKey}:${accountId}` : baseStorageKey;
}
let activeStorageKey = progressStorageKey();
function parseProgress(value: any): Progress {
  if (value?.version !== 1) return { ...empty };
  const ids = (list: unknown) =>
    Array.isArray(list)
      ? [
          ...new Set(
            list.filter(
              (id): id is string =>
                typeof id === "string" && /^(?:hsk30|meiday)-\d+$/.test(id),
            ),
          ),
        ]
      : [];
  const lessons: Progress["lessons"] = {};
  if (value.lessons && typeof value.lessons === "object")
    for (const [key, entry] of Object.entries(value.lessons)) {
      if (
        /^hsk(?:[1-6]|7-9)-\d+$/.test(key) &&
        entry &&
        typeof entry === "object" &&
        "completed" in entry &&
        typeof entry.completed === "boolean"
      ) {
        const item = entry as Progress["lessons"][string];
        lessons[key] = {
          completed: item.completed,
          updatedAt: typeof item.updatedAt === "string" ? item.updatedAt : "",
          scoreUpdatedAt:
            typeof item.scoreUpdatedAt === "string"
              ? item.scoreUpdatedAt
              : undefined,
          score:
            typeof item.score === "number" && item.score >= 0 && item.score <= 100
              ? item.score
              : undefined,
        };
      }
    }
  return {
    version: 1,
    bookmarks: ids(value.bookmarks),
    known: ids(value.known),
    mistakes: ids(value.mistakes),
    lessons,
    attempts: Array.isArray(value.attempts)
      ? value.attempts
          .filter(
            (attempt: unknown): attempt is ScoreAttempt =>
              !!attempt &&
              typeof attempt === "object" &&
              "lessonId" in attempt &&
              typeof attempt.lessonId === "string" &&
              /^hsk(?:[1-6]|7-9)-\d+$/.test(attempt.lessonId) &&
              "score" in attempt &&
              typeof attempt.score === "number" &&
              attempt.score >= 0 &&
              attempt.score <= 100 &&
              "at" in attempt &&
              typeof attempt.at === "string",
          )
          .slice(-500)
      : [],
  };
}

function readProgress(): Progress {
  try {
    const value = JSON.parse(localStorage.getItem(activeStorageKey) || "null");
    return parseProgress(value);
  } catch {
    return { ...empty };
  }
}
let progress = readProgress();
let storageError = "";
let syncStatus: "local" | "syncing" | "synced" | "error" = "local";
let syncError = "";
let syncTimer: ReturnType<typeof setTimeout> | null = null;
let progressRevision = 0;
const subscribers = new Set<() => void>();
function emit() {
  progressRevision++;
  subscribers.forEach((fn) => fn());
}
window.addEventListener("storage", (event) => {
  if (event.key === activeStorageKey || event.key === null) {
    progress = readProgress();
    emit();
  }
});
window.addEventListener(AUTH_CHANGED_EVENT, () => {
  if (syncTimer) clearTimeout(syncTimer);
  activeStorageKey = progressStorageKey();
  const accountId = getCurrentAccountId();
  if (accountId && !localStorage.getItem(activeStorageKey)) {
    const legacySessionId =
      localStorage.getItem("hanyu-session-v1") ||
      sessionStorage.getItem("hanyu-session-temporary-v1");
    const migrationSource =
      (legacySessionId && localStorage.getItem(`${baseStorageKey}:${legacySessionId}`)) ||
      localStorage.getItem(baseStorageKey);
    if (migrationSource) localStorage.setItem(activeStorageKey, migrationSource);
  }
  progress = readProgress();
  syncStatus = accountId ? "syncing" : "local";
  syncError = "";
  emit();
  if (accountId) void loadCloudProgress(accountId);
});

function mergeProgress(first: Progress, second: Progress): Progress {
  const lessons: Progress["lessons"] = { ...first.lessons };
  for (const [id, candidate] of Object.entries(second.lessons)) {
    const current = lessons[id];
    if (!current) {
      lessons[id] = candidate;
      continue;
    }
    const candidateHasBestScore =
      candidate.score !== undefined &&
      (current.score === undefined || candidate.score > current.score);
    lessons[id] = {
      completed: current.completed || candidate.completed,
      score:
        current.score === undefined
          ? candidate.score
          : candidate.score === undefined
            ? current.score
            : Math.max(current.score, candidate.score),
      scoreUpdatedAt: candidateHasBestScore
        ? candidate.scoreUpdatedAt
        : current.scoreUpdatedAt || candidate.scoreUpdatedAt,
      updatedAt:
        Date.parse(candidate.updatedAt || "") > Date.parse(current.updatedAt || "")
          ? candidate.updatedAt
          : current.updatedAt,
    };
  }
  const attempts = [...first.attempts, ...second.attempts]
    .filter(
      (attempt, index, all) =>
        all.findIndex(
          (item) =>
            item.lessonId === attempt.lessonId &&
            item.score === attempt.score &&
            item.at === attempt.at,
        ) === index,
    )
    .sort((a, b) => Date.parse(a.at) - Date.parse(b.at))
    .slice(-500);
  return {
    version: 1,
    bookmarks: [...new Set([...first.bookmarks, ...second.bookmarks])],
    known: [...new Set([...first.known, ...second.known])],
    mistakes: [...new Set([...first.mistakes, ...second.mistakes])],
    lessons,
    attempts,
  };
}

async function loadCloudProgress(accountId: string) {
  if (!supabase) return;
  const { data, error } = await supabase
    .from("learning_progress")
    .select("progress")
    .eq("user_id", accountId)
    .maybeSingle();
  if (getCurrentAccountId() !== accountId) return;
  if (error) {
    syncStatus = "error";
    syncError = "Không tải được tiến độ từ đám mây. Bạn vẫn có thể học trên thiết bị này.";
    emit();
    return;
  }
  const remote = parseProgress(data?.progress);
  progress = mergeProgress(progress, remote);
  try {
    localStorage.setItem(activeStorageKey, JSON.stringify(progress));
  } catch {}
  emit();
  await syncCloudProgress(accountId, progress);
}

async function syncCloudProgress(accountId: string, value: Progress) {
  if (!supabase || getCurrentAccountId() !== accountId) return;
  syncStatus = "syncing";
  syncError = "";
  emit();
  const { error: progressError } = await supabase.from("learning_progress").upsert({
    user_id: accountId,
    progress: value,
    updated_at: new Date().toISOString(),
  });
  if (getCurrentAccountId() !== accountId) return;
  if (progressError) {
    syncStatus = "error";
    syncError = "Tiến độ đang lưu trên máy nhưng chưa đồng bộ được lên Supabase.";
  } else {
    syncStatus = "synced";
    syncError = "";
    window.dispatchEvent(new Event(PROGRESS_SYNCED_EVENT));
  }
  emit();
}

function scheduleCloudSync(value: Progress) {
  const accountId = getCurrentAccountId();
  if (!accountId || !supabase) return;
  syncStatus = "syncing";
  syncError = "";
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    syncTimer = null;
    void syncCloudProgress(accountId, value);
  }, 700);
}
function save(next: Progress) {
  progress = next;
  try {
    localStorage.setItem(activeStorageKey, JSON.stringify(next));
    storageError = "";
  } catch {
    storageError =
      "Trình duyệt không cho lưu tiến độ. Kết quả hiện chỉ giữ trong phiên này.";
  }
  scheduleCloudSync(next);
  emit();
}
function subscribe(fn: () => void) {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}
export function useProgress() {
  useSyncExternalStore(subscribe, () => progressRevision);
  return { ...progress, storageError, syncStatus, syncError };
}
export function toggleBookmark(id: string) {
  save({
    ...progress,
    bookmarks: progress.bookmarks.includes(id)
      ? progress.bookmarks.filter((item) => item !== id)
      : [...progress.bookmarks, id],
  });
}
export function recordAnswer(id: string, correct: boolean) {
  save({
    ...progress,
    known: correct
      ? [...new Set([...progress.known, id])]
      : progress.known.filter((item) => item !== id),
    mistakes: correct
      ? progress.mistakes.filter((item) => item !== id)
      : [...new Set([...progress.mistakes, id])],
  });
}
export function completeLesson(id: string, score?: number) {
  const previous = progress.lessons[id];
  const now = new Date().toISOString();
  const improved =
    score !== undefined &&
    (previous?.score === undefined || score > previous.score);
  save({
    ...progress,
    lessons: {
      ...progress.lessons,
      [id]: {
        completed: Boolean(
          previous?.completed || score === undefined || score >= 80,
        ),
        score:
          score === undefined
            ? previous?.score
            : Math.max(previous?.score || 0, score),
        scoreUpdatedAt: improved ? now : previous?.scoreUpdatedAt,
        updatedAt: now,
      },
    },
    attempts:
      score === undefined
        ? progress.attempts
        : [...progress.attempts, { lessonId: id, score, at: now }].slice(-500),
  });
}
// Cache voices and prewarm SpeechSynthesis for iOS/Safari & Android
let cachedVoices: SpeechSynthesisVoice[] = [];

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  const updateVoices = () => {
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices && voices.length > 0) {
        cachedVoices = voices;
      }
    } catch {
      // Ignore errors
    }
  };

  updateVoices();
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
  } else if ("onvoiceschanged" in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = updateVoices;
  }
}

/**
 * Phát hiện thiết bị iOS (iPhone, iPad, iPod)
 */
export function isAppleDevice(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

/**
 * Tìm giọng đọc tiếng Trung chất lượng cao nhất theo thứ tự ưu tiên
 */
export function getBestChineseVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return undefined;

  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return undefined;

  // 1. Ưu tiên các giọng zh-CN cao cấp (Enhanced, Premium, Natural, Siri, Google)
  const premiumZhCn = voices.find(
    (v) =>
      /^zh[-_](CN|Hans)/i.test(v.lang) &&
      /enhanced|premium|natural|siri|google/i.test(v.name)
  );
  if (premiumZhCn) return premiumZhCn;

  // 2. Ưu tiên giọng chuẩn Ting-Ting trên iOS hoặc Xiaoxiao/Huihui trên Windows/Edge
  const standardNamedZhCn = voices.find(
    (v) =>
      /^zh[-_](CN|Hans)/i.test(v.lang) &&
      /ting-?ting|xiaoxiao|yaoyao|kangkang|huihui|zhiyu/i.test(v.name)
  );
  if (standardNamedZhCn) return standardNamedZhCn;

  // 3. Bất kỳ giọng zh-CN / zh-Hans nào (Trung Quốc đại lục, Quan Thoại)
  const anyZhCn = voices.find((v) => /^zh[-_](CN|Hans)/i.test(v.lang));
  if (anyZhCn) return anyZhCn;

  // 4. Giọng tiếng Trung Quan Thoại Đài Loan (zh-TW/Hant) nếu không có zh-CN (tránh tiếng Quảng Đông zh-HK)
  const anyZhTw = voices.find((v) => /^zh[-_](TW|Hant)/i.test(v.lang));
  if (anyZhTw) return anyZhTw;

  // 5. Bất kỳ giọng zh nào còn lại
  return voices.find((v) => /^zh/i.test(v.lang));
}

export function speakChinese(
  text: string,
  onError?: (message: string) => void,
) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    onError?.("Trình duyệt này không hỗ trợ đọc văn bản.");
    return;
  }

  // Khắc phục lỗi iOS Safari tự động suspended/paused speech synthesis
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";

  const isIOS = isAppleDevice();
  const bestVoice = getBestChineseVoice();

  if (bestVoice) {
    utterance.voice = bestVoice;
    if (bestVoice.lang) utterance.lang = bestVoice.lang;
  }

  // Tối ưu tốc độ đọc:
  // - Trên iOS: Với giọng mặc định Compact của Apple, nếu để rate < 1.0 (như 0.85) thì âm thanh bị bóp méo, rè và the the như robot.
  //   Nếu có giọng Enhanced/Premium/Siri thì đặt 0.95, nếu là giọng Compact thông thường thì giữ 1.0 để phát âm sắc nét và tự nhiên nhất.
  // - Trên Android / Windows: Google và Microsoft Neural TTS co dãn âm rất tốt, tốc độ 0.88 là chuẩn nhất cho người học.
  if (isIOS) {
    const isEnhanced = bestVoice
      ? /enhanced|premium|natural|siri/i.test(bestVoice.name)
      : false;
    utterance.rate = isEnhanced ? 0.95 : 1.0;
    utterance.pitch = 1.0;
  } else {
    utterance.rate = 0.88;
    utterance.pitch = 1.0;
  }

  utterance.onerror = (event) => {
    if (!["interrupted", "canceled"].includes(event.error))
      onError?.(
        "Không phát được giọng tiếng Trung. Hãy kiểm tra giọng đọc và âm thanh của thiết bị.",
      );
  };

  window.speechSynthesis.speak(utterance);
}

export function guessLevelForWordId(id: string): LevelCode {
  if (id.startsWith("hsk1-")) return "hsk1";
  if (id.startsWith("hsk2-")) return "hsk2";
  if (id.startsWith("hsk3-")) return "hsk3";
  if (id.startsWith("hsk4-")) return "hsk4";
  if (id.startsWith("hsk5-")) return "hsk5";
  if (id.startsWith("hsk6-")) return "hsk6";
  if (id.startsWith("hsk7-9-") || id.startsWith("hsk79-")) return "hsk7-9";

  const m = id.match(/hsk30-(\d+)/);
  if (m) {
    const num = parseInt(m[1], 10);
    if (num <= 300) return "hsk1";
    if (num <= 500) return "hsk2";
    if (num <= 1000) return "hsk3";
    if (num <= 2000) return "hsk4";
    if (num <= 3000) return "hsk5";
    if (num <= 4000) return "hsk6";
    return "hsk7-9";
  }
  return "hsk1";
}

export async function fetchWordsByIds(ids: string[]): Promise<VocabularyWord[]> {
  if (!ids || ids.length === 0) return [];
  const neededLevels = new Set<LevelCode>();
  for (const id of ids) {
    neededLevels.add(guessLevelForWordId(id));
  }

  const levelDataList = await Promise.all(
    Array.from(neededLevels).map((code) => loadLevel(code).catch(() => null))
  );

  const wordMap = new Map<string, VocabularyWord>();
  for (const data of levelDataList) {
    if (!data) continue;
    for (const w of data.words) {
      wordMap.set(w.id, w);
    }
    if (data.lessonWords) {
      for (const w of data.lessonWords) {
        if (!wordMap.has(w.id)) wordMap.set(w.id, w);
      }
    }
  }

  const localList = Object.values(SAMPLE_VOCABULARY).flat();
  for (const w of localList) {
    if (!wordMap.has(w.id)) wordMap.set(w.id, w);
  }

  const missing = ids.filter((id) => !wordMap.has(id));
  if (missing.length > 0) {
    const allLevels: LevelCode[] = ["hsk1", "hsk2", "hsk3", "hsk4", "hsk5", "hsk6", "hsk7-9"];
    const remaining = allLevels.filter((c) => !neededLevels.has(c));
    const moreData = await Promise.all(
      remaining.map((code) => loadLevel(code).catch(() => null))
    );
    for (const data of moreData) {
      if (!data) continue;
      for (const w of data.words) {
        wordMap.set(w.id, w);
      }
    }
  }

  const results: VocabularyWord[] = [];
  for (const id of ids) {
    const found = wordMap.get(id);
    if (found) results.push(found);
  }
  return results;
}
