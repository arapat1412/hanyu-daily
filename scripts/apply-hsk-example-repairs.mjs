import { readFile, writeFile } from "node:fs/promises";
import { pinyin } from "pinyin-pro";
import { LEVELS } from "./hsk-core.mjs";

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
  return formatPinyin(
    chinese
      .split(word.hanzi)
      .map((piece) => pinyin(piece, { nonZh: "consecutive" }))
      .join(` ${word.pinyin} `),
  );
}

const target = "data/hsk-example-overrides.jsonl";
const rejectedPath = "data/hsk-example-rejected.jsonl";
const repairs = JSON.parse(await readFile("data/hsk-example-repairs.json", "utf8"));
const current = (await readFile(target, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const existingIds = new Set(current.map((entry) => entry.id));
const wordsById = new Map();
for (const code of LEVELS) {
  const data = JSON.parse(await readFile(`public/data/hsk/${code}.json`, "utf8"));
  for (const word of data.words) wordsById.set(word.id, word);
}
const rejectedIds = (await readFile(rejectedPath, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line).id);

const missingRepairs = rejectedIds.filter((id) => !repairs[id]);
const extraRepairs = Object.keys(repairs).filter(
  (id) => !rejectedIds.includes(id) && !existingIds.has(id),
);
if (missingRepairs.length || extraRepairs.length)
  throw new Error(
    `Repair coverage mismatch. Missing: ${missingRepairs.join(", ")}; extra: ${extraRepairs.join(", ")}`,
  );

const repaired = new Map(current.map((entry) => [entry.id, entry]));
for (const [id, [chinese, vietnamese]] of Object.entries(repairs)) {
  const word = wordsById.get(id);
  if (!word) throw new Error(`Unknown repair id: ${id}`);
  repaired.set(id, {
    id,
    chinese,
    pinyin: sentencePinyin(chinese, word),
    vietnamese,
    source: "ai",
    sourceName: "editorial-repair",
    reviewStatus: "ai-generated",
  });
}
await writeFile(
  target,
  `${[...repaired.values()].map((entry) => JSON.stringify(entry)).join("\n")}\n`,
);
console.error(`Applied ${Object.keys(repairs).length} targeted example repairs.`);
