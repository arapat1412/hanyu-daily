import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { asyncBufferFromUrl, parquetMetadataAsync, parquetReadObjects } from "hyparquet";
import { compressors } from "hyparquet-compressors";
import { getNumOfTone, pinyin, segment } from "pinyin-pro";
import { LEVELS } from "./hsk-core.mjs";
import {
  readingKey,
  sameReading,
  tonelessKey,
} from "../src/lib/pronunciation.mjs";

const DATASET = {
  name: "thevan2404/merged-zh-vi-sentences-clean",
  revision: "813c1cfe2fe406fc870a4c8a473bccbb5c0d0ea5",
  url: "https://huggingface.co/datasets/thevan2404/merged-zh-vi-sentences-clean",
  parquet:
    "https://huggingface.co/datasets/thevan2404/merged-zh-vi-sentences-clean/resolve/refs%2Fconvert%2Fparquet/default/train/0000.parquet",
  rows: 1_711_362,
  bytes: 561_197_430,
  license: "Apache-2.0",
};
const MAX_CANDIDATES = 16;
const EXCLUDED_SOURCES = new Set(["tran-vi-teacher", "ViBidirectionMT-Eval"]);
const sourceRank = new Map([
  ["cn-vi", 0],
  ["WikiMatrix", 1],
  ["ccalign-triplet", 2],
]);

function createTrie(terms) {
  const root = { children: new Map(), terms: [] };
  for (const term of terms) {
    let node = root;
    for (const character of term) {
      if (!node.children.has(character))
        node.children.set(character, { children: new Map(), terms: [] });
      node = node.children.get(character);
    }
    node.terms.push(term);
  }
  return root;
}

function findTerms(text, trie) {
  const characters = [...text];
  const found = new Set();
  for (let start = 0; start < characters.length; start++) {
    let node = trie;
    for (let index = start; index < characters.length; index++) {
      node = node.children.get(characters[index]);
      if (!node) break;
      for (const term of node.terms) found.add(term);
    }
  }
  return found;
}

function clean(value) {
  return String(value || "")
    .normalize("NFC")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function balanced(text, opening, closing) {
  return (text.split(opening).length - 1) === (text.split(closing).length - 1);
}

function validPair(chinese, vietnamese) {
  const zh = [...chinese];
  const hanziCount = (chinese.match(/[\p{Script=Han}]/gu) || []).length;
  const latinCount = (chinese.match(/[A-Za-z]/g) || []).length;
  const viLetters = (vietnamese.match(/\p{L}/gu) || []).length;
  return (
    zh.length >= 4 &&
    zh.length <= 46 &&
    vietnamese.length >= 4 &&
    vietnamese.length <= 220 &&
    hanziCount >= 3 &&
    hanziCount / zh.length >= 0.45 &&
    latinCount <= 3 &&
    viLetters / vietnamese.length >= 0.45 &&
    !/(?:https?:\/\/|www\.|<[^>]+>|[_={}\\|@#])/i.test(
      `${chinese} ${vietnamese}`,
    ) &&
    balanced(chinese, "（", "）") &&
    balanced(vietnamese, "(", ")")
  );
}

function candidateScore(candidate) {
  return (
    (sourceRank.get(candidate.source) ?? 6) * 1_000 +
    [...candidate.chinese].length * 12 +
    Math.abs(candidate.vietnamese.length - [...candidate.chinese].length * 2)
  );
}

function retainCandidate(list, candidate) {
  if (list.some((item) => item.chinese === candidate.chinese)) return;
  list.push(candidate);
  list.sort((a, b) => candidateScore(a) - candidateScore(b));
  if (list.length > MAX_CANDIDATES) list.length = MAX_CANDIDATES;
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

function splitExpectedReading(actualSyllables, expectedReading) {
  const expectedCharacters = [...readingKey(expectedReading)];
  const expectedSyllables = [];
  let cursor = 0;
  for (const actual of actualSyllables) {
    const base = tonelessKey(actual);
    let end = cursor;
    while (
      end < expectedCharacters.length &&
      tonelessKey(expectedCharacters.slice(cursor, end).join("")).length < base.length
    )
      end++;
    const expected = expectedCharacters.slice(cursor, end).join("");
    if (tonelessKey(expected) !== base) return null;
    expectedSyllables.push(expected);
    cursor = end;
  }
  return cursor === expectedCharacters.length ? expectedSyllables : null;
}

function compatibleTargetReading(actualSyllables, word) {
  const adjustedSyllables = [...actualSyllables];
  if (word.hanzi.endsWith("儿") && readingKey(word.pinyin).endsWith("r"))
    adjustedSyllables[adjustedSyllables.length - 1] = "r";
  const actual = adjustedSyllables.join("");
  if (sameReading(actual, word.pinyin)) return true;
  if (tonelessKey(actual) !== tonelessKey(word.pinyin)) return false;
  const expectedSyllables = splitExpectedReading(adjustedSyllables, word.pinyin);
  return Boolean(
    expectedSyllables?.every(
      (expected, index) =>
        sameReading(adjustedSyllables[index], expected) ||
        getNumOfTone(expected) === "0",
    ),
  );
}

function hasExpectedReading(chinese, word) {
  const characters = [...chinese];
  const readings = pinyin(chinese, { type: "array", nonZh: "removed" });
  for (let index = 0; index <= characters.length - [...word.hanzi].length; index++) {
    if (characters.slice(index, index + [...word.hanzi].length).join("") !== word.hanzi)
      continue;
    const readingStart = characters
      .slice(0, index)
      .filter((character) => /\p{Script=Han}/u.test(character)).length;
    const readingLength = [...word.hanzi].filter((character) =>
      /\p{Script=Han}/u.test(character),
    ).length;
    if (compatibleTargetReading(readings.slice(readingStart, readingStart + readingLength), word))
      return true;
  }
  return segment(chinese).some(
    (part) =>
      part.origin === word.hanzi &&
      compatibleTargetReading(
        pinyin(part.origin, { type: "array", nonZh: "removed" }),
        word,
      ),
  );
}

async function loadWords() {
  const levels = {};
  for (const code of LEVELS) {
    const data = JSON.parse(await readFile(`public/data/hsk/${code}.json`, "utf8"));
    levels[code] = data;
  }
  return levels;
}

async function main() {
  const levels = await loadWords();
  const allWords = LEVELS.flatMap((code) => levels[code].words);
  const byHanzi = new Map();
  for (const word of allWords) {
    const values = byHanzi.get(word.hanzi) || [];
    values.push(word);
    byHanzi.set(word.hanzi, values);
  }
  const trie = createTrie(byHanzi.keys());
  const candidates = new Map([...byHanzi.keys()].map((hanzi) => [hanzi, []]));

  console.error(`Reading ${DATASET.rows.toLocaleString("en-US")} corpus rows…`);
  const file = await asyncBufferFromUrl({ url: DATASET.parquet });
  const metadata = await parquetMetadataAsync(file);
  if (Number(metadata.num_rows) !== DATASET.rows)
    throw new Error("Unexpected corpus row count");

  let rowStart = 0;
  for (const [groupIndex, group] of metadata.row_groups.entries()) {
    const rowEnd = rowStart + Number(group.num_rows);
    const rows = await parquetReadObjects({
      file,
      metadata,
      compressors,
      columns: ["source", "zh", "vi"],
      rowStart,
      rowEnd,
    });
    for (let offset = 0; offset < rows.length; offset++) {
      const chinese = clean(rows[offset].zh);
      const vietnamese = clean(rows[offset].vi);
      if (EXCLUDED_SOURCES.has(clean(rows[offset].source))) continue;
      if (!validPair(chinese, vietnamese)) continue;
      const match = {
        row: rowStart + offset,
        source: clean(rows[offset].source) || "unknown",
        chinese,
        vietnamese,
      };
      for (const term of findTerms(chinese, trie)) {
        if ([...chinese].length <= [...term].length + 1) continue;
        retainCandidate(candidates.get(term), match);
      }
    }
    rowStart = rowEnd;
    console.error(
      `Corpus ${groupIndex + 1}/${metadata.row_groups.length}: ${rowEnd.toLocaleString("en-US")} rows`,
    );
  }

  const selected = new Map();
  const usedSentences = new Set();
  const orderedWords = [...allWords].sort(
    (a, b) => [...b.hanzi].length - [...a.hanzi].length || a.sort - b.sort,
  );
  for (const word of orderedWords) {
    const options = candidates.get(word.hanzi) || [];
    const choice = options.find(
      (candidate) =>
        !usedSentences.has(candidate.chinese) &&
        hasExpectedReading(candidate.chinese, word),
    );
    if (!choice) continue;
    usedSentences.add(choice.chinese);
    selected.set(word.id, {
      chinese: choice.chinese,
      pinyin: sentencePinyin(choice.chinese, word),
      vietnamese: choice.vietnamese,
      source: "dataset",
      sourceName: choice.source,
      sourceRow: choice.row,
      reviewStatus: "machine-filtered",
    });
  }

  const outputRoot = "data/hsk-example-candidates";
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  const manifest = {
    version: 1,
    generatedAt: new Date().toISOString(),
    source: DATASET,
    totalWords: allWords.length,
    totalExamples: selected.size,
    fallbackExamples: allWords.length - selected.size,
    levels: {},
  };
  for (const code of LEVELS) {
    const directory = `${outputRoot}/${code}`;
    await mkdir(directory, { recursive: true });
    let levelExamples = 0;
    let levelBytes = 0;
    for (const lesson of levels[code].lessons) {
      const examples = {};
      for (const id of lesson.wordIds) {
        if (selected.has(id)) examples[id] = selected.get(id);
      }
      const payload = `${JSON.stringify({
        version: 1,
        code,
        unit: lesson.number,
        examples,
      })}\n`;
      await writeFile(`${directory}/${lesson.number}.json`, payload);
      levelExamples += Object.keys(examples).length;
      levelBytes += Buffer.byteLength(payload);
    }
    manifest.levels[code] = {
      lessons: levels[code].lessons.length,
      words: levels[code].words.length,
      examples: levelExamples,
      fallback: levels[code].words.length - levelExamples,
      bytes: levelBytes,
    };
  }
  const manifestText = `${JSON.stringify(manifest, null, 2)}\n`;
  manifest.sha256 = createHash("sha256").update(manifestText).digest("hex");
  await writeFile("data/hsk-example-candidates-manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
  console.error(
    `Generated ${selected.size.toLocaleString("en-US")}/${allWords.length.toLocaleString("en-US")} contextual examples.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
