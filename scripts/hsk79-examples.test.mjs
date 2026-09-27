import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const ROOT = new URL("../", import.meta.url);
const LEVEL = "hsk7-9";
const EXPECTED_COUNT = 5_600;
const HANZI = /[\p{Script=Han}]/u;

async function readJson(path) {
  return JSON.parse(await readFile(new URL(path, ROOT), "utf8"));
}

async function loadPublishedExamples(lessons) {
  const examples = new Map();
  for (const lesson of lessons) {
    const shard = await readJson(
      `public/data/hsk-examples/${LEVEL}/${lesson.number}.json`,
    );
    for (const [id, example] of Object.entries(shard.examples)) {
      if (examples.has(id)) {
        assert.deepEqual(
          example,
          examples.get(id),
          `${id} differs between lesson shards`,
        );
      }
      examples.set(id, example);
    }
  }
  return examples;
}

test("all HSK 7-9 words have complete, target-matching review examples", async () => {
  const canonicalLines = (
    await readFile(new URL("data/hsk-example-overrides.jsonl", ROOT), "utf8")
  )
    .split(/\r?\n/u)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const canonical = new Map(canonicalLines.map((example) => [example.id, example]));
  const catalog = await readJson(`public/data/hsk/${LEVEL}.json`);
  const published = await loadPublishedExamples(catalog.lessons);

  assert.equal(catalog.words.length, EXPECTED_COUNT);
  assert.deepEqual(
    new Set(catalog.words.map((word) => word.id)),
    new Set(
      catalog.words
        .map((word) => word.id)
        .filter((id) => canonical.has(id)),
    ),
    "HSK 7-9 canonical examples do not match its vocabulary ids",
  );

  for (const word of catalog.words) {
    const example = canonical.get(word.id);
    assert.ok(example.chinese?.trim(), `${word.id} is missing Chinese`);
    assert.ok(example.pinyin?.trim(), `${word.id} is missing pinyin`);
    assert.ok(example.vietnamese?.trim(), `${word.id} is missing Vietnamese`);
    assert.ok(
      example.chinese.includes(word.hanzi),
      `${word.id} example does not contain ${word.hanzi}`,
    );
    assert.doesNotMatch(example.pinyin, HANZI, `${word.id} pinyin has Hanzi`);
    assert.doesNotMatch(
      example.vietnamese,
      HANZI,
      `${word.id} Vietnamese has Hanzi`,
    );

    if (published.has(word.id)) {
      const output = published.get(word.id);
      assert.deepEqual(
        [output.chinese, output.pinyin, output.vietnamese],
        [example.chinese, example.pinyin, example.vietnamese],
        `${word.id} published example is stale`,
      );
    }
  }
});

test("HSK 7-9 editorial repairs match canonical and published examples", async () => {
  const repairs = await readJson("data/hsk-example-repairs.json");
  const canonicalLines = (
    await readFile(new URL("data/hsk-example-overrides.jsonl", ROOT), "utf8")
  )
    .split(/\r?\n/u)
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  const canonical = new Map(canonicalLines.map((example) => [example.id, example]));
  const catalog = await readJson(`public/data/hsk/${LEVEL}.json`);
  const published = await loadPublishedExamples(catalog.lessons);
  const scopedRepairs = Object.entries(repairs).filter(([id]) => {
    const sort = Number(id.replace("hsk30-", ""));
    return sort >= 5_401 && sort <= 11_000;
  });

  assert.ok(scopedRepairs.length > 0, "no HSK 7-9 repairs were found");
  for (const [id, [chinese, vietnamese]] of scopedRepairs) {
    const source = canonical.get(id);
    const output = published.get(id);
    assert.ok(source, `${id} is missing from the canonical source`);
    assert.deepEqual(
      [source.chinese, source.vietnamese],
      [chinese, vietnamese],
      `${id} canonical repair is stale`,
    );
    if (output) {
      assert.deepEqual(
        [output.chinese, output.pinyin, output.vietnamese],
        [source.chinese, source.pinyin, source.vietnamese],
        `${id} published repair is stale`,
      );
    }
  }
});
