import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  buildQuestions,
  shuffle,
  matchesPinyin,
  answerKey,
  isClozeEligible,
  maskVietnameseHint,
  isSentenceScrambleEligible,
  tokenizeChineseSentence,
  buildSentenceScrambleQuestions,
  buildWordMatchingPairs,
} from "../src/lib/practice.mjs";
const words = [
  {
    id: "1",
    hanzi: "他",
    pinyin: "tā",
    meaning: "anh ấy",
    exampleSentence: {
      chinese: "他是我的老师。",
      pinyin: "tā shì wǒ de lǎoshī.",
      vietnamese: "Anh ấy là giáo viên của tôi.",
    },
  },
  {
    id: "2",
    hanzi: "她",
    pinyin: "tā",
    meaning: "cô ấy",
    exampleSentence: {
      chinese: "她是学生。",
      pinyin: "tā shì xuésheng.",
      vietnamese: "Cô ấy là học sinh.",
    },
  },
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
test("isClozeEligible validates presence of exampleSentence and target hanzi", () => {
  assert.ok(isClozeEligible(words[0]));
  assert.ok(isClozeEligible(words[1]));
  assert.ok(!isClozeEligible(words[2])); // no exampleSentence
  assert.ok(
    !isClozeEligible({
      id: "6",
      hanzi: "苹果",
      exampleSentence: { chinese: "今天天气很好。" },
    }),
  ); // target hanzi not in sentence
  assert.ok(
    !isClozeEligible({
      id: "7",
      hanzi: "苹果",
      exampleSentence: { chinese: "" },
    }),
  );
  assert.ok(
    !isClozeEligible({
      id: "8",
      hanzi: "白天",
      exampleSentence: {
        chinese: "你知道“白天”是什么意思吗？",
        source: "generated-template",
      },
    }),
  );
  assert.ok(!isClozeEligible(null));
  assert.ok(!isClozeEligible(undefined));
});
test("cloze questions build correctly with hanzi answers and valid distractors", () => {
  const clozeQuestions = buildQuestions(words, words, "cloze", () => 0.3);
  // Only words 0 and 1 have exampleSentence containing the hanzi
  assert.equal(clozeQuestions.length, 2);
  for (const question of clozeQuestions) {
    assert.equal(question.answer, question.word.hanzi);
    assert.equal(
      question.options.filter((opt) => opt === question.answer).length,
      1,
    );
    assert.equal(
      new Set(question.options.map(answerKey)).size,
      question.options.length,
    );
    assert.ok(question.options.length > 1 && question.options.length <= 4);
    assert.ok(isClozeEligible(question.word));
  }
});
test("maskVietnameseHint masks target hanzi, quotes, and pinyin in translation", () => {
  // Exact case reported by user (fallback template)
  assert.equal(
    maskVietnameseHint(
      "Hôm nay tôi vừa học từ mới “包子” [bánh bao (bánh hấp có nhân)].",
      "包子",
      "bāozi",
    ),
    "Hôm nay tôi vừa học từ mới ( _____ ) [bánh bao (bánh hấp có nhân)].",
  );

  // Quotes variations
  assert.equal(
    maskVietnameseHint('Tôi đã ghi nhớ "包子" [bánh bao].', "包子"),
    "Tôi đã ghi nhớ ( _____ ) [bánh bao].",
  );
  assert.equal(
    maskVietnameseHint("Từ ‘包子’ [bánh bao].", "包子"),
    "Từ ( _____ ) [bánh bao].",
  );
  assert.equal(
    maskVietnameseHint("Bánh bao (包子).", "包子"),
    "Bánh bao ( _____ ).",
  );

  // Standalone hanzi in Vietnamese
  assert.equal(
    maskVietnameseHint("Món 包子 này rất ngon.", "包子"),
    "Món ( _____ ) này rất ngon.",
  );

  // Natural sentence with no target hanzi remains untouched
  assert.equal(
    maskVietnameseHint("Tôi thích ăn táo.", "苹果"),
    "Tôi thích ăn táo.",
  );

  // Empty or invalid input
  assert.equal(maskVietnameseHint("", "包子"), "");
  assert.equal(maskVietnameseHint(null, "包子"), "");
  assert.equal(maskVietnameseHint(undefined, "包子"), "");
});

test("isSentenceScrambleEligible validates presence of valid chinese & vietnamese sentences", () => {
  assert.ok(isSentenceScrambleEligible(words[0]));
  assert.ok(isSentenceScrambleEligible(words[1]));
  assert.ok(!isSentenceScrambleEligible(words[2])); // no exampleSentence
  assert.ok(
    !isSentenceScrambleEligible({
      id: "9",
      hanzi: "车",
      exampleSentence: {
        chinese: "车。",
        vietnamese: "Xe.",
      },
    }),
  ); // too short
  assert.ok(
    !isSentenceScrambleEligible({
      id: "10",
      hanzi: "白天",
      exampleSentence: {
        chinese: "你知道“白天”是什么意思吗？",
        vietnamese: "Bạn có biết...",
        source: "generated-template",
      },
    }),
  ); // template fallback
});

test("tokenizeChineseSentence segments sentences into 4-7 meaningful chunks preserving punctuation & target word", () => {
  const result1 = tokenizeChineseSentence("他是我的好朋友。", "朋友");
  assert.equal(result1.punctuation, "。");
  assert.equal(result1.fullSentence, "他是我的好朋友。");
  assert.ok(result1.tokens.length >= 3 && result1.tokens.length <= 7);
  assert.equal(result1.tokens.join(""), "他是我的好朋友");
  // Target word preserved intact
  assert.ok(result1.tokens.some((tok) => tok.includes("朋友")));

  const result2 = tokenizeChineseSentence("明天我想去商店买很多好吃的零食！", "商店");
  assert.equal(result2.punctuation, "！");
  assert.ok(result2.tokens.length >= 4 && result2.tokens.length <= 7);
  assert.equal(result2.tokens.join(""), "明天我想去商店买很多好吃的零食");
  assert.ok(result2.tokens.some((tok) => tok.includes("商店")));
});

test("buildSentenceScrambleQuestions constructs solvable scrambled questions", () => {
  const scrambleQuestions = buildSentenceScrambleQuestions(words, () => 0.4);
  assert.equal(scrambleQuestions.length, 2);
  for (const q of scrambleQuestions) {
    assert.ok(q.tokens.length >= 3);
    assert.equal(q.scrambledTokens.length, q.tokens.length);
    assert.equal(
      q.scrambledTokens.map((t) => t.text).sort().join(""),
      q.tokens.slice().sort().join(""),
    );
    assert.equal(q.fullSentence, q.tokens.join("") + q.punctuation);
    assert.ok(q.vietnamese.length > 0);
  }
});

test("buildWordMatchingPairs generates matched and distinct pairs", () => {
  const round = buildWordMatchingPairs(words, 3, () => 0.5);
  assert.ok(round);
  assert.equal(round.words.length, 3);
  assert.equal(round.leftCards.length, 3);
  assert.equal(round.rightCards.length, 3);

  // Left cards are hanzi, right cards are meaning
  assert.ok(round.leftCards.every((c) => c.type === "hanzi" && c.text.length > 0));
  assert.ok(round.rightCards.every((c) => c.type === "meaning" && c.text.length > 0));

  // Every wordId in left exists in right
  const leftIds = round.leftCards.map((c) => c.wordId).sort();
  const rightIds = round.rightCards.map((c) => c.wordId).sort();
  assert.deepEqual(leftIds, rightIds);
});



