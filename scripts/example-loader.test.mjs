import test from "node:test";
import assert from "node:assert/strict";
import {
  createExampleShardLoader,
  isPublishableExample,
  mergeExampleWords,
} from "../src/lib/example-loader.mjs";

const aiExample = {
  chinese: "我喝了一杯茶。",
  pinyin: "Wǒ hē le yì bēi chá.",
  vietnamese: "Tôi đã uống một tách trà.",
  source: "ai",
  reviewStatus: "ai-generated",
};

test("only reviewed corpus or transparently labeled AI examples are publishable", () => {
  assert.ok(isPublishableExample(aiExample));
  assert.ok(
    isPublishableExample({
      ...aiExample,
      source: "dataset",
      reviewStatus: "reviewed",
    }),
  );
  assert.equal(
    isPublishableExample({
      ...aiExample,
      source: "dataset",
      reviewStatus: "machine-filtered",
    }),
    false,
  );
});

test("loaded examples replace templates but never curated examples", () => {
  const template = {
    id: "hsk30-1",
    hanzi: "茶",
    exampleSentence: { ...aiExample, source: "generated-template" },
  };
  const curated = {
    ...template,
    id: "hsk30-2",
    exampleSentence: { ...aiExample, source: "curated" },
  };
  const merged = mergeExampleWords([template, curated], {
    "hsk30-1": aiExample,
    "hsk30-2": { ...aiExample, chinese: "他喝茶。" },
  });
  assert.equal(merged[0].exampleSentence, aiExample);
  assert.equal(merged[1], curated);
});

test("loader validates shards, caches success and allows fallback on failure", async () => {
  let calls = 0;
  const load = createExampleShardLoader(async () => {
    calls++;
    return {
      ok: true,
      json: async () => ({
        version: 1,
        code: "hsk1",
        unit: 1,
        examples: { "hsk30-1": aiExample },
      }),
    };
  });
  assert.deepEqual(await load("hsk1", 1), { "hsk30-1": aiExample });
  await load("hsk1", 1);
  assert.equal(calls, 1);

  const unavailable = createExampleShardLoader(async () => ({ ok: false }));
  await assert.rejects(unavailable("hsk1", 1), /unavailable/);
  assert.deepEqual(mergeExampleWords([{}], {}), [{}]);
});
