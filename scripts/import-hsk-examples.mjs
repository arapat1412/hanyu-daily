import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { pinyin } from "pinyin-pro";
import { LEVELS } from "./hsk-core.mjs";

const inputArg = process.argv.find((value) => value.startsWith("--input="));
const INPUT = inputArg?.slice("--input=".length) || "data/hsk-example-overrides.jsonl";
const OUTPUT_ROOT = "public/data/hsk-examples";

function clean(value) {
  return String(value || "")
    .normalize("NFC")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatPinyin(value) {
  const formatted = value
    .replace(/[，]/g, ",")
    .replace(/[。]/g, ".")
    .replace(/[！]/g, "!")
    .replace(/[？]/g, "?")
    .replace(/[；]/g, ";")
    .replace(/[：]/g, ":")
    .replace(/\s+([，。！？；：、,.!?;:）”’])/g, "$1")
    .replace(/([（“‘])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return formatted.replace(
    /[a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/u,
    (letter) => letter.toLocaleUpperCase(),
  );
}

function sentencePinyin(chinese, word) {
  const pieces = chinese.split(word.hanzi);
  return formatPinyin(
    pieces
      .map((piece) => pinyin(piece, { nonZh: "consecutive" }))
      .join(` ${word.pinyin} `),
  );
}

function validateEntry(raw, wordsById, lineNumber) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    throw new Error(`Line ${lineNumber}: expected an object`);
  const word = wordsById.get(raw.id);
  if (!word) throw new Error(`Line ${lineNumber}: unknown id ${raw.id}`);
  const chinese = clean(raw.chinese);
  const vietnamese = clean(raw.vietnamese);
  const source = clean(raw.source) || "ai";
  const reviewStatus = clean(raw.reviewStatus) || "ai-generated";
  if (!chinese.includes(word.hanzi))
    throw new Error(`Line ${lineNumber}: sentence does not contain ${word.hanzi}`);
  if ([...chinese].length < [...word.hanzi].length + 2 || [...chinese].length > 70)
    throw new Error(`Line ${lineNumber}: implausible Chinese length`);
  if (vietnamese.length < 4 || vietnamese.length > 260)
    throw new Error(`Line ${lineNumber}: implausible Vietnamese length`);
  if (/(?:这个词|这个字|意思是|怎么读|如何读|写在.{0,4}(?:本|纸|黑板)|[“”]$)/u.test(chinese))
    throw new Error(`Line ${lineNumber}: metalinguistic example rejected`);
  if (/(?:https?:\/\/|www\.|<[^>]+>|[_={}\\|@#])/i.test(`${chinese} ${vietnamese}`))
    throw new Error(`Line ${lineNumber}: markup or URL rejected`);
  if (!new Set(["ai", "dataset"]).has(source))
    throw new Error(`Line ${lineNumber}: unsupported source ${source}`);
  if (!new Set(["ai-generated", "reviewed"]).has(reviewStatus))
    throw new Error(`Line ${lineNumber}: unsupported review status ${reviewStatus}`);
  if (source === "dataset" && reviewStatus !== "reviewed")
    throw new Error(`Line ${lineNumber}: corpus examples must be reviewed`);
  return {
    chinese,
    pinyin: clean(raw.pinyin) || sentencePinyin(chinese, word),
    vietnamese,
    source,
    ...(raw.sourceName ? { sourceName: clean(raw.sourceName) } : {}),
    ...(Number.isInteger(raw.sourceRow) ? { sourceRow: raw.sourceRow } : {}),
    reviewStatus,
  };
}

async function readJsonl(path) {
  let text = "";
  try {
    text = await readFile(path, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    console.error(`${path} not found; generating empty safe shards.`);
  }
  return text
    .split(/\r?\n/)
    .map((line, index) => ({ line: line.trim(), number: index + 1 }))
    .filter((item) => item.line);
}

async function main() {
  const levels = {};
  const wordsById = new Map();
  for (const code of LEVELS) {
    const data = JSON.parse(await readFile(`public/data/hsk/${code}.json`, "utf8"));
    levels[code] = data;
    for (const word of data.words) wordsById.set(word.id, word);
  }

  const selected = new Map();
  const usedChinese = new Map();
  const rejected = [];
  for (const item of await readJsonl(INPUT)) {
    let raw;
    try {
      raw = JSON.parse(item.line);
      const example = validateEntry(raw, wordsById, item.number);
      if (selected.has(raw.id))
        throw new Error(`Line ${item.number}: duplicate id ${raw.id}`);
      if (usedChinese.has(example.chinese))
        throw new Error(
          `Line ${item.number}: duplicate Chinese sentence (also ${usedChinese.get(example.chinese)})`,
        );
      selected.set(raw.id, example);
      usedChinese.set(example.chinese, raw.id);
    } catch (error) {
      rejected.push({
        line: item.number,
        id: raw?.id || null,
        reason: error.message,
        raw: raw || item.line,
      });
    }
  }
  if (rejected.length) {
    await writeFile(
      "data/hsk-example-rejected.jsonl",
      `${rejected.map((entry) => JSON.stringify(entry)).join("\n")}\n`,
    );
    if (rejected.length > 1_000)
      throw new Error(
        `Rejected ${rejected.length} rows; source was not rewritten because the failure count is unsafe.`,
      );
    await writeFile(
      INPUT,
      `${[...selected.entries()]
        .map(([id, example]) => JSON.stringify({ id, ...example }))
        .join("\n")}\n`,
    );
    for (const entry of rejected.slice(0, 20))
      console.error(`${entry.id || `line ${entry.line}`}: ${entry.reason}`);
    throw new Error(
      `Rejected ${rejected.length} rows and preserved ${selected.size}; rerun generation to fill the missing IDs.`,
    );
  }
  await writeFile("data/hsk-example-rejected.jsonl", "");

  await mkdir(OUTPUT_ROOT, { recursive: true });
  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    input: INPUT,
    policy: "AI examples are labeled; corpus examples require editorial review.",
    totalWords: wordsById.size,
    totalExamples: selected.size,
    fallbackExamples: wordsById.size - selected.size,
    lessonPlacements: 0,
    lessonExamplePlacements: 0,
    lessonFallbackPlacements: 0,
    levels: {},
  };
  for (const code of LEVELS) {
    const directory = `${OUTPUT_ROOT}/${code}`;
    await mkdir(directory, { recursive: true });
    let lessonExamplePlacements = 0;
    let levelBytes = 0;
    for (const lesson of levels[code].lessons) {
      const examples = Object.fromEntries(
        lesson.wordIds
          .filter((id) => selected.has(id))
          .map((id) => [id, selected.get(id)]),
      );
      const payload = `${JSON.stringify({
        version: 1,
        code,
        unit: lesson.number,
        examples,
      })}\n`;
      await writeFile(`${directory}/${lesson.number}.json`, payload);
      lessonExamplePlacements += Object.keys(examples).length;
      levelBytes += Buffer.byteLength(payload);
    }
    const catalogExamples = levels[code].words.filter((word) =>
      selected.has(word.id),
    ).length;
    const lessonPlacements = levels[code].lessons.reduce(
      (total, lesson) => total + lesson.wordIds.length,
      0,
    );
    const lessonFallbackPlacements =
      lessonPlacements - lessonExamplePlacements;
    manifest.levels[code] = {
      lessons: levels[code].lessons.length,
      words: levels[code].words.length,
      examples: catalogExamples,
      fallback: levels[code].words.length - catalogExamples,
      lessonPlacements,
      lessonExamplePlacements,
      lessonFallbackPlacements,
      bytes: levelBytes,
    };
    manifest.lessonPlacements += lessonPlacements;
    manifest.lessonExamplePlacements += lessonExamplePlacements;
    manifest.lessonFallbackPlacements += lessonFallbackPlacements;
  }
  manifest.sha256 = createHash("sha256")
    .update(JSON.stringify([...selected.entries()]))
    .digest("hex");
  await writeFile(
    "src/data/hsk-examples-manifest.json",
    `${JSON.stringify(manifest, null, 2)}\n`,
  );
  console.error(
    `Published ${selected.size.toLocaleString("en-US")}/${wordsById.size.toLocaleString("en-US")} contextual examples.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
