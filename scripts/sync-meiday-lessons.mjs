import { readFile, writeFile } from "node:fs/promises";
import { pinyin } from "pinyin-pro";
import { LEVELS } from "./hsk-core.mjs";
import { sameReading, tonelessKey } from "../src/lib/pronunciation.mjs";

const BASE_URL = process.env.MEIDAY_SUPABASE_URL;
const ANON_KEY = process.env.MEIDAY_SUPABASE_ANON_KEY;
const OUTPUT = "data/meiday-lesson-layout.json";
const LEVEL_BY_NUMBER = { 1: "hsk1", 2: "hsk2", 3: "hsk3" };
const MANUAL_MATCHES = new Map([
  [463, "hsk30-358"],
  [648, "hsk30-358"],
]);

if (!BASE_URL || !ANON_KEY)
  throw new Error(
    "Set MEIDAY_SUPABASE_URL and MEIDAY_SUPABASE_ANON_KEY before syncing.",
  );

const headers = {
  apikey: ANON_KEY,
  Authorization: `Bearer ${ANON_KEY}`,
};

async function fetchRows(path) {
  const rows = [];
  for (let start = 0; ; start += 1_000) {
    const response = await fetch(`${BASE_URL}/rest/v1/${path}`, {
      headers: { ...headers, Range: `${start}-${start + 999}` },
      signal: AbortSignal.timeout(30_000),
    });
    if (!response.ok)
      throw new Error(`${path}: HTTP ${response.status} ${await response.text()}`);
    const page = await response.json();
    rows.push(...page);
    if (page.length < 1_000) return rows;
  }
}

function clean(value) {
  return String(value || "").normalize("NFC").trim();
}

function formatLessonPinyin(value) {
  return pinyin(value, { nonZh: "consecutive" })
    .replace(/[，]/g, ",")
    .replace(/[。]/g, ".")
    .replace(/[！]/g, "!")
    .replace(/[？]/g, "?")
    .replace(/[；]/g, ";")
    .replace(/[：]/g, ":")
    .replace(/\s+([,.!?;:、）”’])/g, "$1")
    .replace(/([（“‘])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function posScore(remote, local) {
  const value = clean(remote).toLowerCase();
  const expected = [
    [/(?:^|[/.])v\.|động/u, "动"],
    [/(?:^|[/.])n\.|danh/u, "名"],
    [/adj\.|tính/u, "形"],
    [/adv\.|phó/u, "副"],
    [/part\.|trợ/u, "助"],
    [/(?:^|[/.])m\.|lượng/u, "量"],
    [/prep\.|giới/u, "介"],
    [/pron\.|đại/u, "代"],
  ].filter(([pattern]) => pattern.test(value));
  return expected.some(([, token]) => local.partOfSpeech.includes(token)) ? 10 : 0;
}

function chooseOfficial(remote, targetCode, officialWords) {
  const manual = MANUAL_MATCHES.get(remote.id);
  if (manual) return officialWords.find((word) => word.id === manual);
  const sameHanzi = officialWords.filter((word) => word.hanzi === remote.hanzi);
  if (!sameHanzi.length) return undefined;
  const exact = sameHanzi.filter((word) => sameReading(word.pinyin, remote.pinyin));
  const toneless = sameHanzi.filter(
    (word) => tonelessKey(word.pinyin) === tonelessKey(remote.pinyin),
  );
  const candidates = exact.length ? exact : toneless.length ? toneless : sameHanzi;
  return candidates
    .map((word) => ({
      word,
      score:
        (word.hskLevel === targetCode ? 100 : 0) +
        (sameReading(word.pinyin, remote.pinyin) ? 20 : 0) +
        posScore(remote.pos, word),
    }))
    .sort((a, b) => b.score - a.score || a.word.sort - b.word.sort)[0].word;
}

function translatedPartOfSpeech(value) {
  const map = {
    "n.": "Danh từ",
    "v.": "Động từ",
    "adj.": "Tính từ",
    "adv.": "Phó từ",
    "pron.": "Đại từ",
    "prep.": "Giới từ",
    "part.": "Trợ từ",
    "m.": "Lượng từ",
    "int.": "Thán từ",
  };
  return map[clean(value).toLowerCase()] || clean(value) || "Chưa phân loại";
}

function supplementalFromOfficial(word, annotation) {
  return {
    ...word,
    meaning: annotation?.meaning || "",
    meaningStatus: annotation?.meaningStatus || "missing",
    meaningQuizEligible: !!annotation?.meaningQuizEligible,
    ...(annotation?.definitions ? { definitions: annotation.definitions } : {}),
    ...(annotation?.dictionary ? { dictionary: annotation.dictionary } : {}),
    ...(annotation?.sinoVietnamese
      ? {
          sinoVietnamese: annotation.sinoVietnamese,
          sinoVietnameseMethod: annotation.sinoVietnameseMethod,
        }
      : {}),
  };
}

function supplementalFromMeiday(remote, targetCode) {
  const example = remote.examples?.find((item) => item?.zh && item?.vi);
  return {
    id: `meiday-${remote.id}`,
    hanzi: clean(remote.hanzi),
    pinyin: clean(remote.pinyin),
    meaning: clean(remote.meaning_vi),
    partOfSpeech: translatedPartOfSpeech(remote.pos),
    hskLevel: targetCode,
    sourceWord: clean(remote.hanzi),
    sourceLevel: `Meiday ${targetCode.toUpperCase()}`,
    meaningStatus: "reviewed",
    meaningQuizEligible: true,
    ...(remote.hv ? { sinoVietnamese: clean(remote.hv) } : {}),
    ...(example
      ? {
          exampleSentence: {
            chinese: clean(example.zh),
            pinyin: pinyin(clean(example.zh), { nonZh: "consecutive" }),
            vietnamese: clean(example.vi),
            source: "curated",
            reviewStatus: "reviewed",
          },
        }
      : {}),
  };
}

const catalogs = {};
const annotations = new Map();
for (const code of LEVELS) {
  catalogs[code] = JSON.parse(
    await readFile(`public/data/hsk/${code}.json`, "utf8"),
  ).words;
  const supplement = JSON.parse(
    await readFile(`public/data/hsk-annotations/${code}.json`, "utf8"),
  );
  for (const [id, annotation] of Object.entries(supplement.annotations))
    annotations.set(id, annotation);
}
const officialWords = Object.values(catalogs).flat();

const lessons = await fetchRows(
  "lessons?select=id,level,lesson_no,title,title_vi,sort_order&order=level.asc,lesson_no.asc",
);
const placements = await fetchRows(
  "lesson_words?select=lesson_id,position,words(*)&order=lesson_id.asc,position.asc",
);
const placementsByLesson = Map.groupBy(placements, (row) => row.lesson_id);
const outputLevels = {};
let mappedPlacements = 0;
let customPlacements = 0;

for (const [levelNumber, targetCode] of Object.entries(LEVEL_BY_NUMBER)) {
  const supplementalWords = new Map();
  const levelLessons = lessons
    .filter((lesson) => lesson.level === Number(levelNumber))
    .map((lesson) => {
      const wordIds = (placementsByLesson.get(lesson.id) || []).map((row) => {
        const remote = row.words;
        const official = chooseOfficial(remote, targetCode, officialWords);
        if (!official) {
          const supplemental = supplementalFromMeiday(remote, targetCode);
          supplementalWords.set(supplemental.id, supplemental);
          customPlacements++;
          return supplemental.id;
        }
        mappedPlacements++;
        if (official.hskLevel !== targetCode)
          supplementalWords.set(
            official.id,
            supplementalFromOfficial(official, annotations.get(official.id)),
          );
        return official.id;
      });
      return {
        number: lesson.lesson_no,
        title: clean(lesson.title),
        titlePinyin: formatLessonPinyin(clean(lesson.title)),
        titleVi: clean(lesson.title_vi),
        subtitle: `${wordIds.length} từ · Theo giáo trình Meiday`,
        wordIds,
      };
    });
  outputLevels[targetCode] = {
    lessons: levelLessons,
    supplementalWords: [...supplementalWords.values()],
  };
}

const output = {
  version: 1,
  source: "https://meidaychinese.com",
  capturedAt: new Date().toISOString(),
  policy:
    "Public HSK 1-3 lesson titles and vocabulary placement; official 11,000-word catalog remains separate.",
  stats: {
    lessons: lessons.length,
    placements: placements.length,
    mappedPlacements,
    customPlacements,
  },
  levels: outputLevels,
};

await writeFile(OUTPUT, `${JSON.stringify(output, null, 2)}\n`);
console.log(
  `Saved ${lessons.length} lessons and ${placements.length} word placements to ${OUTPUT}.`,
);
