import { readFile, writeFile } from "node:fs/promises";

const target = "data/hsk-example-overrides.jsonl";
const rejectedPath = "data/hsk-example-rejected.jsonl";

const currentText = await readFile(target, "utf8");
const current = currentText
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line));
const ids = new Set(current.map((entry) => entry.id));
const rejected = (await readFile(rejectedPath, "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)
  .map((line) => JSON.parse(line))
  .map((entry) => entry.raw)
  .filter((entry) => entry && typeof entry === "object" && !ids.has(entry.id));

await writeFile(
  target,
  `${[...current, ...rejected].map((entry) => JSON.stringify(entry)).join("\n")}\n`,
);
console.error(`Restored ${rejected.length} rejected rows for validation retry.`);
