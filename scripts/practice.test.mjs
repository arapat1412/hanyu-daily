import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  buildQuestions,
  shuffle,
  matchesPinyin,
  answerKey,
} from "../src/lib/practice.mjs";
const words = [
  { id: "1", hanzi: "他", pinyin: "tā", meaning: "anh ấy" },
  { id: "2", hanzi: "她", pinyin: "tā", meaning: "cô ấy" },
  { id: "3", hanzi: "谁", pinyin: "shéi/shuí", meaning: "ai" },
  { id: "4", hanzi: "水", pinyin: "shuǐ", meaning: "nước" },
  { id: "5", hanzi: "学", pinyin: "xué", meaning: "" },
];
test("shuffle preserves records without mutating input", () => {
  const source = [1, 2, 3, 4];
  assert.deepEqual(shuffle(source, () => 0).sort(), source);
  assert.deepEqual(source, [1, 2, 3, 4]);
});
test("pinyin accepts tone marks or tone numbers while preserving tones", () => {
  assert.ok(matchesPinyin(" XUÉ XÍ ", "xuéxí"));
  assert.ok(matchesPinyin("xuéxí".normalize("NFD"), "xuéxí"));
  assert.ok(matchesPinyin("xue2xi2", "xuéxí"));
  assert.ok(matchesPinyin("xue2 xi2", "xuéxí"));
  assert.ok(matchesPinyin("ZI4MU4", "zìmù"));
  assert.ok(matchesPinyin("zi4 mu4", "zìmù"));
  assert.ok(matchesPinyin("lv4", "lǜ"));
  assert.ok(matchesPinyin("lu:4", "lǜ"));
  assert.ok(matchesPinyin("ma5", "ma"));
  assert.ok(matchesPinyin("ma0", "ma"));
  assert.ok(matchesPinyin("shuí", "shéi/shuí"));
  assert.ok(!matchesPinyin("xuexi", "xuéxí"));
  assert.ok(!matchesPinyin("xue2xi", "xuéxí"));
  assert.ok(!matchesPinyin("zi2mu4", "zìmù"));
  assert.ok(!matchesPinyin("zímù", "zìmù"));
  assert.ok(!matchesPinyin("", "xuéxí"));
});
test("multiple choice contains exactly one correct option and no duplicates", () => {
  for (const mode of ["pinyin", "meaning", "listening"]) {
    for (const question of buildQuestions(words, words, mode, () => 0.4)) {
      assert.equal(
        question.options.filter((option) => option === question.answer).length,
        1,
      );
      assert.equal(
        new Set(question.options.map(answerKey)).size,
        question.options.length,
      );
      assert.ok(question.options.length > 1 && question.options.length <= 4);
      if (mode === "listening" && question.word.hanzi === "他")
        assert.ok(!question.options.includes("她"));
    }
  }
});
test("missing translations never become answers; empty and one-item pools are safe", () => {
  assert.equal(buildQuestions(words, words, "meaning").length, 4);
  assert.deepEqual(buildQuestions([], [], "pinyin"), []);
  assert.deepEqual(buildQuestions([words[0]], [words[0]], "pinyin"), []);
  assert.equal(buildQuestions([words[0]], [words[0]], "typing").length, 1);
});
test("a real lesson has complete pinyin, listening and typing practice coverage", async () => {
  for (const code of [
    "hsk1",
    "hsk2",
    "hsk3",
    "hsk4",
    "hsk5",
    "hsk6",
    "hsk7-9",
  ]) {
    const data = JSON.parse(
      await readFile(
        new URL(`../public/data/hsk/${code}.json`, import.meta.url),
        "utf8",
      ),
    );
    const selected = data.words.filter(
      (word) => word.unit === data.lessons.length,
    );
    for (const mode of ["pinyin", "listening", "typing"]) {
      const questions = buildQuestions(selected, data.words, mode);
      assert.equal(questions.length, selected.length, `${code}: ${mode}`);
      assert.ok(questions.every((question) => question.answer.length > 0));
    }
  }
});
