import { appendFile, readFile } from "node:fs/promises";

const INPUT = "data/hsk-example-generation-batches.jsonl";
const OUTPUT = "data/hsk-example-overrides.jsonl";
const apiUrl = process.env.HSK_EXAMPLE_API_URL;
const apiKey = process.env.HSK_EXAMPLE_API_KEY;
const model = process.env.HSK_EXAMPLE_MODEL;
const limitArg = process.argv.find((value) => value.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.slice(8)) : Infinity;
const concurrencyArg = process.argv.find((value) => value.startsWith("--concurrency="));
const concurrency = concurrencyArg ? Number(concurrencyArg.slice(14)) : 4;

if (!Number.isInteger(concurrency) || concurrency < 1 || concurrency > 12) {
  console.error("--concurrency must be an integer from 1 to 12.");
  process.exit(1);
}

if (!apiUrl || !apiKey || !model) {
  console.error(
    "Set HSK_EXAMPLE_API_URL, HSK_EXAMPLE_API_KEY and HSK_EXAMPLE_MODEL before running generation.",
  );
  process.exit(1);
}

function parseJsonLines(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => JSON.parse(line));
}

function responseText(payload) {
  const content = payload?.choices?.[0]?.message?.content;
  if (typeof content === "string") return content;
  if (typeof payload?.output_text === "string") return payload.output_text;
  throw new Error("Model response did not contain text output");
}

function parseModelExamples(text, batch) {
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "");
  const parsed = JSON.parse(cleaned);
  const examples = Array.isArray(parsed) ? parsed : parsed.examples;
  if (!Array.isArray(examples)) throw new Error("Expected an examples array");
  const expected = new Set(batch.words.map((word) => word.id));
  if (examples.length !== expected.size)
    throw new Error(`Expected ${expected.size} examples, received ${examples.length}`);
  for (const example of examples) {
    if (!expected.delete(example.id))
      throw new Error(`Unexpected or duplicate id ${example.id}`);
    if (typeof example.chinese !== "string" || typeof example.vietnamese !== "string")
      throw new Error(`Incomplete example for ${example.id}`);
  }
  if (expected.size) throw new Error(`Missing ids: ${[...expected].join(", ")}`);
  return examples;
}

async function requestBatch(batch) {
  const prompt = `${batch.instruction}\n\nDữ liệu đầu vào:\n${JSON.stringify(batch.words)}\n\nTrả về đúng JSON object dạng {"examples":[{"id":"...","chinese":"...","vietnamese":"..."}]}.`;
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: "Return valid JSON only." },
            { role: "user", content: prompt },
          ],
          temperature: 0.65,
          thinking: { type: "disabled" },
          response_format: { type: "json_object" },
        }),
        signal: AbortSignal.timeout(120000),
      });
      if (!response.ok)
        throw new Error(`HTTP ${response.status}: ${(await response.text()).slice(0, 300)}`);
      return parseModelExamples(responseText(await response.json()), batch);
    } catch (error) {
      lastError = error;
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    }
  }
  throw lastError;
}

async function main() {
  const batches = parseJsonLines(await readFile(INPUT, "utf8"));
  let existing = [];
  try {
    existing = parseJsonLines(await readFile(OUTPUT, "utf8"));
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
  const completedIds = new Set(existing.map((entry) => entry.id));
  const pending = batches
    .filter((batch) => batch.words.some((word) => !completedIds.has(word.id)))
    .slice(0, limit);
  for (let start = 0; start < pending.length; start += concurrency) {
    const group = pending.slice(start, start + concurrency).map((original, offset) => ({
      index: start + offset,
      batch: {
        ...original,
        words: original.words.filter((word) => !completedIds.has(word.id)),
      },
    }));
    const results = await Promise.all(
      group.map(async ({ index, batch }) => ({
        index,
        batch,
        examples: await requestBatch(batch),
      })),
    );
    const lines = results.flatMap(({ examples }) =>
      examples.map((example) =>
        JSON.stringify({
          ...example,
          source: "ai",
          sourceName: model,
          reviewStatus: "ai-generated",
        }),
      ),
    );
    await appendFile(OUTPUT, `${lines.join("\n")}\n`);
    for (const { index, batch, examples } of results) {
      for (const example of examples) completedIds.add(example.id);
      console.error(
        `${index + 1}/${pending.length} ${batch.batchId}: ${completedIds.size.toLocaleString("en-US")} total rows`,
      );
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
