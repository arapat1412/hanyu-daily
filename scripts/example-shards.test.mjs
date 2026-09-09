import test from "node:test";
import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import { LESSON_COUNTS, LEVELS } from "./hsk-core.mjs";
import { isPublishableExample } from "../src/lib/example-loader.mjs";

test("lesson and vocabulary-unit shards are small, valid and match the manifest", async () => {
  const manifest = JSON.parse(
    await readFile("src/data/hsk-examples-manifest.json", "utf8"),
  );
  const usedChinese = new Map();
  let lessonCount = 0;
  let exampleCount = 0;
  for (const code of LEVELS) {
    const level = JSON.parse(await readFile(`public/data/hsk/${code}.json`, "utf8"));
    const wordPool = [...level.words, ...(level.lessonWords || [])];
    const files = await readdir(`public/data/hsk-examples/${code}`);
    assert.equal(files.length, level.lessons.length);
    let levelExamples = 0;
    for (const lesson of level.lessons) {
      const path = `public/data/hsk-examples/${code}/${lesson.number}.json`;
      assert.ok((await stat(path)).size < 50_000, `${path} is unexpectedly large`);
      const shard = JSON.parse(await readFile(path, "utf8"));
      assert.equal(shard.version, 1);
      assert.equal(shard.code, code);
      assert.equal(shard.unit, lesson.number);
      for (const [id, example] of Object.entries(shard.examples)) {
        const word = wordPool.find((item) => item.id === id);
        assert.ok(word && lesson.wordIds.includes(id));
        assert.ok(isPublishableExample(example));
        assert.ok(example.chinese.includes(word.hanzi));
        if (usedChinese.has(example.chinese))
          assert.equal(usedChinese.get(example.chinese), id);
        else usedChinese.set(example.chinese, id);
        levelExamples++;
      }
      lessonCount++;
    }
    assert.equal(levelExamples, manifest.levels[code].lessonExamplePlacements);
    exampleCount += levelExamples;
  }
  assert.equal(lessonCount, LESSON_COUNTS.reduce((sum, count) => sum + count, 0));
  assert.equal(exampleCount, manifest.lessonExamplePlacements);
  assert.equal(manifest.totalExamples, 11_000);
  assert.equal(manifest.totalExamples + manifest.fallbackExamples, 11_000);
});
