import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { LEVELS } from "./hsk-core.mjs";
import {
  createFallbackExample,
  splitHighlightedText,
} from "../src/lib/examples.mjs";

test("generated example contains Chinese, pinyin, Vietnamese and the target", () => {
  const example = createFallbackExample(
    { hanzi: "朋友", pinyin: "péngyou" },
    "bạn bè; bạn hữu",
  );
  assert.ok(example.chinese.includes("朋友"));
  assert.ok(example.pinyin.includes("péngyou"));
  assert.ok(example.vietnamese.includes("bạn bè; bạn hữu"));
  assert.equal(example.source, "generated-template");
});

test("generated Vietnamese example has exactly one final punctuation mark", () => {
  for (const meaning of ["được chứ?", "đồng ý!", "bạn bè。", "học tập； "]) {
    const example = createFallbackExample(
      { hanzi: "好", pinyin: "hǎo" },
      meaning,
    );
    assert.match(example.vietnamese, /[^.!?。！？;；]\.$/u);
    assert.doesNotMatch(example.vietnamese, /[.!?。！？;；]{2,}$/u);
  }
});

test("generated glosses use unambiguous brackets for parenthetical labels", () => {
  const example = createFallbackExample(
    { id: "hsk30-3", hanzi: "爸爸", pinyin: "bàba", sort: 3 },
    "(thông tục) cha; ba",
  );
  assert.ok(example.vietnamese.includes("“爸爸” [(thông tục) cha; ba]"));
  assert.doesNotMatch(example.vietnamese, /\(\(/u);
});

test("adjacent syllabus words rotate through visibly different learning frames", async () => {
  const data = JSON.parse(
    await readFile(new URL("../public/data/hsk/hsk1.json", import.meta.url)),
  );
  const frames = data.words.slice(0, 32).map((word) =>
    createFallbackExample(word, "nghĩa mẫu").chinese.replaceAll(
      word.hanzi,
      "{word}",
    ),
  );
  assert.equal(new Set(frames).size, 32);
});

test("highlight splitter marks every target occurrence without changing text", () => {
  const text = "朋友是我的好朋友。";
  const parts = splitHighlightedText(text, "朋友");
  assert.equal(parts.map((part) => part.text).join(""), text);
  assert.equal(parts.filter((part) => part.highlighted).length, 2);
});

test("all 11,000 syllabus words can receive a complete fallback example", async () => {
  let total = 0;
  for (const code of LEVELS) {
    const data = JSON.parse(
      await readFile(new URL(`../public/data/hsk/${code}.json`, import.meta.url)),
    );
    const supplement = JSON.parse(
      await readFile(
        new URL(
          `../public/data/hsk-annotations/${code}.json`,
          import.meta.url,
        ),
      ),
    );
    for (const word of data.words) {
      const meaning = supplement.annotations[word.id]?.meaning;
      const example = createFallbackExample(word, meaning);
      assert.ok(example.chinese.includes(word.hanzi));
      assert.ok(example.pinyin.includes(word.pinyin));
      assert.ok(example.vietnamese.includes(word.hanzi));
      assert.ok(example.vietnamese.length > meaning.length);
      total++;
    }
  }
  assert.equal(total, 11000);
});
