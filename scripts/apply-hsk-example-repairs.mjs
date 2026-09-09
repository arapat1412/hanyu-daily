import { readFile, writeFile } from "node:fs/promises";

const target = "data/hsk-example-overrides.jsonl";
const rejectedPath = "data/hsk-example-rejected.jsonl";
const repairs = JSON.parse(await readFile("data/hsk-example-repairs.json", "utf8"));
const current = (await readFile(target, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const existingIds = new Set(current.map((entry) => entry.id));
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

const additions = rejectedIds
  .filter((id) => !existingIds.has(id))
  .map((id) => ({
    id,
    chinese: repairs[id][0],
    vietnamese: repairs[id][1],
    source: "ai",
    sourceName: "editorial-repair",
    reviewStatus: "ai-generated",
  }));
await writeFile(
  target,
  `${[...current, ...additions].map((entry) => JSON.stringify(entry)).join("\n")}\n`,
);
console.error(`Applied ${additions.length} targeted example repairs.`);
