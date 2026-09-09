import { readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { LEVELS } from "./hsk-core.mjs";
import {
  parseCvdict,
  indexDictionary,
  parseHanviet,
  enrichWord,
} from "./enrichment-core.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const directory = resolve(root, "data/dictionary-source");
const output = resolve(root, "public/data/hsk-annotations");
const offline = process.argv.includes("--offline");
await mkdir(directory, { recursive: true });
await mkdir(output, { recursive: true });
const cvCommit = "c379d909e308343a247e51619f7839a2060a271c";
const hvCommit = "b9923df92c8b55f013001390e37cddd35e986dc1";
async function sourceFile(name, repo, commit, filename) {
  const path = resolve(directory, name);
  try {
    return await readFile(path, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  if (offline) throw new Error(`Missing pinned source ${name}`);
  const response = await fetch(
    `https://raw.githubusercontent.com/${repo}/${commit}/${filename}`,
    { signal: AbortSignal.timeout(30000) },
  );
  if (!response.ok) throw new Error(`Failed ${name}: ${response.status}`);
  const text = await response.text();
  await writeFile(path, text, "utf8");
  return text;
}
const cvText = await sourceFile(
  "CVDICT.u8",
  "ph0ngp/CVDICT",
  cvCommit,
  "CVDICT.u8",
);
const hvText = await sourceFile(
  "hanviet.csv",
  "ph0ngp/hanviet-pinyin-wordlist",
  hvCommit,
  "hanviet.csv",
);
const checksum = (value) => createHash("sha256").update(value).digest("hex");
if (
  checksum(cvText) !==
    "4dde4b204193efa9c192d7f7daeab1bb579c8ccd7c41ed90d1b6caee22ba0948" ||
  checksum(hvText) !==
    "dd90d59db1265a47317477c9f741baeff7cb4dfed58d9a0c2be5f69b9ed14d66"
)
  throw new Error(
    "Pinned dictionary checksum mismatch; do not use an altered source cache.",
  );
const cvReadme = await sourceFile(
  "CVDICT-README.md",
  "ph0ngp/CVDICT",
  cvCommit,
  "README.md",
);
const hvLicense = await sourceFile(
  "HANVIET-LICENSE",
  "ph0ngp/hanviet-pinyin-wordlist",
  hvCommit,
  "LICENSE",
);
await sourceFile(
  "HANVIET-README.md",
  "ph0ngp/hanviet-pinyin-wordlist",
  hvCommit,
  "README.md",
);
const entries = parseCvdict(cvText),
  dictionary = indexDictionary(entries),
  hv = parseHanviet(hvText);
const reviewed = JSON.parse(
  await readFile(resolve(root, "data/hsk-reviewed-overrides.json"), "utf8"),
);
if (
  reviewed.version !== 1 ||
  !Array.isArray(reviewed.reviewedPronunciationSorts) ||
  !reviewed.manualMeanings
)
  throw new Error("Invalid reviewed HSK override data.");
const reviewedPronunciationIds = new Set(
  reviewed.reviewedPronunciationSorts.map((sort) => `hsk30-${sort}`),
);
const manualMeanings = new Map(
  Object.entries(reviewed.manualMeanings).map(([sort, value]) => [
    `hsk30-${sort}`,
    value,
  ]),
);
const reviewedIds = new Set([
  ...reviewedPronunciationIds,
  ...manualMeanings.keys(),
]);
if (
  reviewedIds.size !==
  reviewedPronunciationIds.size + manualMeanings.size
)
  throw new Error("Reviewed pronunciation and manual meaning IDs overlap.");
const report = {
  version: 1,
  sources: {
    cvdict: {
      url: "https://github.com/ph0ngp/CVDICT",
      author: "Phong Phan; CC-CEDICT contributors",
      commit: cvCommit,
      license: "CC BY-SA 4.0",
      sha256: createHash("sha256").update(cvText).digest("hex"),
    },
    hanviet: {
      url: "https://github.com/ph0ngp/hanviet-pinyin-wordlist",
      author: "Phong Phan",
      commit: hvCommit,
      license: "MIT",
      sha256: createHash("sha256").update(hvText).digest("hex"),
    },
    editorial: {
      file: "data/hsk-reviewed-overrides.json",
      description:
        "Vietnamese glosses authored for this project and pronunciation matches explicitly reviewed against the pinned dictionary and linked Chinese dictionary entries.",
    },
  },
  dictionaryEntries: entries.length,
  totalMeanings: 0,
  totalHanviet: 0,
  totalQuizEligible: 0,
  totalReviewedMeanings: 0,
  totalEditorialMeanings: 0,
  levels: {},
};
const review = [];
const appliedReviewedIds = new Set();
for (const code of LEVELS) {
  const data = JSON.parse(
    await readFile(resolve(root, `public/data/hsk/${code}.json`), "utf8"),
  );
  const annotations = {};
  for (const word of data.words) {
    const manual = manualMeanings.get(word.id);
    const reviewedPronunciation = reviewedPronunciationIds.has(word.id);
    const result = enrichWord(word, dictionary, hv, {
      manual,
      reviewedPronunciation,
    });
    if (manual || reviewedPronunciation) appliedReviewedIds.add(word.id);
    if (result.annotation) annotations[word.id] = result.annotation;
    if (result.review) review.push({ level: code, ...result.review });
  }
  const values = Object.values(annotations);
  const counts = {
    total: data.words.length,
    meanings: values.filter((value) => value.meaning).length,
    hanviet: values.filter((value) => value.sinoVietnamese).length,
    quizEligible: values.filter((value) => value.meaningQuizEligible).length,
    reviewedMeanings: values.filter(
      (value) => value.dictionary?.match?.startsWith("reviewed"),
    ).length,
    editorialMeanings: values.filter(
      (value) => value.dictionary?.source === "editorial",
    ).length,
  };
  report.levels[code] = counts;
  report.totalMeanings += counts.meanings;
  report.totalHanviet += counts.hanviet;
  report.totalQuizEligible += counts.quizEligible;
  report.totalReviewedMeanings += counts.reviewedMeanings;
  report.totalEditorialMeanings += counts.editorialMeanings;
  await writeFile(
    resolve(output, `${code}.json`),
    JSON.stringify({
      version: 1,
      code,
      license:
        "CC BY-SA 4.0 (CVDICT-derived definitions); MIT (Hán Việt source); project-authored editorial glosses",
      annotations,
    }),
  );
}
const missingReviewedIds = [...reviewedIds].filter(
  (id) => !appliedReviewedIds.has(id),
);
if (missingReviewedIds.length)
  throw new Error(
    `Reviewed IDs not found in the syllabus: ${missingReviewedIds.join(", ")}`,
  );
await writeFile(
  resolve(root, "src/data/hsk-enrichment.json"),
  JSON.stringify(report, null, 2) + "\n",
);
await writeFile(
  resolve(root, "data/hsk-content-review.json"),
  JSON.stringify(review, null, 2) + "\n",
);
await writeFile(resolve(output, "CVDICT-README.md"), cvReadme);
await writeFile(resolve(output, "HANVIET-LICENSE"), hvLicense);
console.log(JSON.stringify(report, null, 2));
console.log(`Needs review: ${review.length}`);
