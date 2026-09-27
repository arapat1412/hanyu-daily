import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

function loadVocabulary(source, name) {
  const match = source.match(
    new RegExp(`export const ${name}: BoyaVocabularyWord\\[\\] = (\\[.*?\\]);\\n\\n/\\*\\*`, "s"),
  );
  assert.ok(match, `Could not find ${name}`);
  return JSON.parse(match[1]);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const fixtures = [
  ["boya1Data.ts", "BOYA1_VOCABULARY", 678],
  ["boya2Data.ts", "BOYA2_VOCABULARY", 864],
];

for (const [file, exportName, expectedCount] of fixtures) {
  test(`${exportName} has usable bilingual examples for every review item`, async () => {
    const source = await readFile(new URL(`../src/data/${file}`, import.meta.url), "utf8");
    const vocabulary = loadVocabulary(source, exportName);
    assert.equal(vocabulary.length, expectedCount);

    for (const word of vocabulary) {
      const example = word.exampleSentence;
      assert.ok(example?.chinese, `${word.id} has no Chinese example`);
      assert.ok(example?.pinyin, `${word.id} has no example pinyin`);
      assert.ok(example?.vietnamese, `${word.id} has no Vietnamese translation`);
      assert.ok(
        example.chinese.includes(word.hanzi),
        `${word.id} example does not contain ${word.hanzi}: ${example.chinese}`,
      );
      assert.doesNotMatch(
        example.chinese,
        new RegExp(`^这个${escapeRegExp(word.hanzi)}很好。?$`, "u"),
        `${word.id} still uses the meaningless placeholder template`,
      );
      assert.doesNotMatch(
        example.pinyin,
        /[\u3400-\u9fff]/u,
        `${word.id} pinyin contains Hanzi`,
      );
      assert.doesNotMatch(
        example.vietnamese,
        /[\u3400-\u9fff]/u,
        `${word.id} Vietnamese translation contains Hanzi`,
      );
    }
  });
}
