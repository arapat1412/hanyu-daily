import { mkdir, writeFile, readFile, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { pinyin } from "pinyin-pro";
import {
  LEVELS,
  LESSON_COUNTS,
  parseCsv,
  normalizeVocabulary,
  createLessons,
  validateDataset,
} from "./hsk-core.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const rawDir = resolve(root, "data/hsk-source");
const output = resolve(root, "public/data/hsk");
const offline = process.argv.includes("--offline");
const refresh = process.argv.includes("--refresh");
const source = "https://raw.githubusercontent.com/profesorm/hsk30/main/";
const lessonLayout = JSON.parse(
  await readFile(resolve(root, "data/meiday-lesson-layout.json"), "utf8"),
);
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
await mkdir(rawDir, { recursive: true });
await mkdir(output, { recursive: true });
async function download(file) {
  const path = resolve(rawDir, file);
  if (!refresh) {
    try {
      await access(path);
      return await readFile(path, "utf8");
    } catch {}
  }
  if (offline) throw new Error(`Missing cached source: ${file}`);
  const response = await fetch(
    source + (file === "LICENCE" ? file : `data/${file}`),
    { signal: AbortSignal.timeout(30000) },
  );
  if (!response.ok) throw new Error(`${file}: HTTP ${response.status}`);
  const text = await response.text();
  await writeFile(path, text, "utf8");
  return text;
}
const csv = await download("hsk_vocabulary.csv");
const words = normalizeVocabulary(parseCsv(csv));
const automaticLessons = Object.fromEntries(
  LEVELS.map((code, i) => [
    code,
    createLessons(code, words[code], LESSON_COUNTS[i]),
  ]),
);
validateDataset(words, automaticLessons);
const lessons = Object.fromEntries(
  LEVELS.map((code) => {
    const curated = lessonLayout.levels?.[code]?.lessons;
    if (!curated) return [code, automaticLessons[code]];
    if (curated.length !== LESSON_COUNTS[LEVELS.indexOf(code)])
      throw new Error(`Unexpected Meiday lesson count for ${code}`);
    return [
      code,
      curated.map((lesson) => ({
        id: `${code}-${lesson.number}`,
        level: code,
        number: lesson.number,
        title: lesson.title,
        titlePinyin:
          lesson.titlePinyin || formatLessonPinyin(lesson.title),
        titleVi: lesson.titleVi,
        subtitle: lesson.subtitle,
        wordIds: lesson.wordIds,
      })),
    ];
  }),
);
const extras = {};
for (const kind of ["grammar", "hanzi", "topic", "task"]) {
  const raw = JSON.parse(await download(`hsk_${kind}_pretty.json`));
  if (raw.code !== 0 || !Array.isArray(raw.data?.records))
    throw new Error(`Invalid ${kind} response`);
  extras[kind] = raw.data.records;
  if (
    extras[kind].some((row) => !LEVELS.includes(row.examLevelId.toLowerCase()))
  )
    throw new Error(`Unknown ${kind} level`);
}
await download("LICENCE");
const metadata = {
  version: 1,
  source: "https://github.com/profesorm/hsk30",
  sourceAttribution:
    "profesorm/hsk30; đề cương HSK của Chinese Testing International",
  license: "CC BY 4.0",
  vocabularySha256: createHash("sha256").update(csv).digest("hex"),
  totalWords: 11000,
  totalLessons: LESSON_COUNTS.reduce((a, b) => a + b, 0),
  lessonPolicy:
    "HSK 1-3 dùng thứ tự bài và từ công khai của Meiday; HSK 4-9 chia thành các mục 10 từ ổn định theo thứ tự đề cương, theo mô hình trình bày từ vựng của Meiday.",
  lessonLayoutSource: lessonLayout.source,
  lessonLayoutCapturedAt: lessonLayout.capturedAt,
  levels: {},
};
for (const code of LEVELS) {
  const data = {
    code,
    words: words[code],
    lessons: lessons[code],
    lessonWords: lessonLayout.levels?.[code]?.supplementalWords || [],
  };
  for (const [kind, rows] of Object.entries(extras))
    data[kind] = rows.filter((row) => row.examLevelId.toLowerCase() === code);
  metadata.levels[code] = {
    vocabCount: data.words.length,
    lessonsCount: data.lessons.length,
    grammarCount: data.grammar.length,
    hanziCount: data.hanzi.length,
    topicCount: data.topic.length,
    taskCount: data.task.length,
  };
  await writeFile(
    resolve(output, `${code}.json`),
    JSON.stringify(data),
    "utf8",
  );
}
await writeFile(
  resolve(root, "src/data/hsk-manifest.json"),
  JSON.stringify(metadata, null, 2) + "\n",
);
console.log(JSON.stringify(metadata, null, 2));
