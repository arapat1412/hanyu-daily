import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { LEVELS } from "./hsk-core.mjs";
import { numberedSyllable, sameReading } from "../src/lib/pronunciation.mjs";
import {
  parseCvdict,
  indexDictionary,
  parseHanviet,
  findEntries,
  sandhiMatch,
  selectReviewedCandidates,
  resolveDefinitions,
  enrichWord,
  hanvietReading,
} from "./enrichment-core.mjs";
import { buildQuestions, isMeaningEligible } from "../src/lib/practice.mjs";

test("numbered pinyin converts vowel priority, ü, neutral tones and syllabic consonants", () => {
  for (const [input, expected] of [
    ["ai4", "ài"],
    ["liu2", "liú"],
    ["gui4", "guì"],
    ["shui3", "shuǐ"],
    ["nv3", "nǚ"],
    ["lu:4", "lǜ"],
    ["r5", "r"],
    ["ma0", "ma"],
    ["n2", "ń"],
    ["ng4", "ǹg"],
  ])
    assert.equal(numberedSyllable(input), expected);
  assert.ok(sameReading("nǚ’ér", "nu:3 er2"));
  assert.ok(sameReading("shéi/shuí", "shui2"));
  assert.ok(!sameReading("mǎi", "mai4"));
  assert.ok(!sameReading("xuéshēng", "xue2 sheng5"));
});
test("parser accepts documented doubled wrapper but rejects other corrupt input", () => {
  assert.equal(parseCvdict("# comment\n字 字 [[zi4] ] /chữ/")[0].pinyin, "zi4");
  assert.throws(() => parseCvdict("bad input"), /Invalid/);
});
test("tone sandhi is scoped to 一 and 不 at the aligned position", () => {
  assert.ok(
    sandhiMatch(
      { hanzi: "一心一意", pinyin: "yìxīn-yíyì" },
      { pinyin: "yi1 xin1 yi1 yi4" },
    ),
  );
  assert.ok(
    sandhiMatch(
      { hanzi: "爱不释手", pinyin: "àibúshìshǒu" },
      { pinyin: "ai4 bu4 shi4 shou3" },
    ),
  );
  assert.ok(
    !sandhiMatch({ hanzi: "一心", pinyin: "yìxín" }, { pinyin: "yi1 xin1" }),
  );
});
test("ordinary Vietnamese gloss starting with xem is not mistaken for a cross-reference", () => {
  const entries = parseCvdict(
    "收看 收看 [shou1 kan4] /xem truyền hình/\n作主 作主 [zuo4 zhu3] /quyết định/\n做主 做主 [zuo4 zhu3] /xem 作主[zuo4 zhu3]/",
  );
  const index = indexDictionary(entries);
  assert.deepEqual(resolveDefinitions(entries[0], index).definitions, [
    "xem truyền hình",
  ]);
  assert.deepEqual(resolveDefinitions(entries[2], index).definitions, [
    "quyết định",
  ]);
  const cycle = parseCvdict(
    "甲 甲 [jia3] /xem 乙[yi3]/\n乙 乙 [yi3] /xem 甲[jia3]/",
  );
  assert.deepEqual(
    resolveDefinitions(cycle[0], indexDictionary(cycle)).definitions,
    [],
  );
  const plainVariant = parseCvdict(
    "惡心 恶心 [e3 xin1] /biến thể của 噁心|恶心[e3 xin1]/\n噁心 恶心 [e3 xin1] /buồn nôn/",
  );
  assert.deepEqual(
    resolveDefinitions(plainVariant[0], indexDictionary(plainVariant))
      .definitions,
    ["buồn nôn"],
  );
});
test("readings control dictionary matching; unresolved neutral-tone mismatch remains a review item", () => {
  const entries = parseCvdict(
    "買 买 [mai3] /mua/\n賣 卖 [mai4] /bán/\n學生 学生 [xue2 sheng5] /học sinh/",
  );
  const index = indexDictionary(entries);
  assert.equal(
    findEntries({ hanzi: "买", pinyin: "mǎi" }, index).matches.length,
    1,
  );
  assert.equal(
    findEntries({ hanzi: "买", pinyin: "mài" }, index).matches.length,
    0,
  );
  assert.equal(
    enrichWord({ id: "x", hanzi: "学生", pinyin: "xuéshēng" }, index, new Map())
      .review.reason,
    "pronunciation-mismatch",
  );
});
test("reviewed pronunciation matching is ID-gated and selects the safest neutral-tone candidate", () => {
  const index = indexDictionary(
    parseCvdict(
      "好處 好处 [hao3 chu3] /dễ hòa hợp/\n好處 好处 [hao3 chu5] /lợi ích/\n下載 下载 [xia4 zai3] /tải xuống/",
    ),
  );
  const word = { id: "reviewed", hanzi: "好处", pinyin: "hǎochù" };
  assert.equal(findEntries(word, index).matches.length, 0);
  assert.equal(
    findEntries(word, index, { reviewedPronunciation: true }).matches[0]
      .pinyin,
    "hao3 chu5",
  );
  assert.equal(
    selectReviewedCandidates(
      { hanzi: "下载", pinyin: "xiàzài" },
      index.get("下载"),
    )[0].pinyin,
    "xia4 zai3",
  );
});
test("manual reviewed meanings retain provenance and quiz eligibility", () => {
  const result = enrichWord(
    { id: "hsk30-1", hanzi: "新媒体", pinyin: "xīnméitǐ" },
    new Map(),
    new Map(),
    {
      manual: {
        definitions: ["truyền thông mới"],
        source: "editorial",
        sourceUrl: "https://example.test/dictionary",
      },
    },
  );
  assert.equal(result.review, null);
  assert.equal(result.annotation.meaningStatus, "reviewed");
  assert.equal(result.annotation.dictionary.source, "editorial");
  assert.equal(result.annotation.meaningQuizEligible, true);
});
test("numbered senses are never silently marked eligible for meaning quizzes", () => {
  const index = indexDictionary(
    parseCvdict("本 本 [ben3] /gốc/lượng từ cho sách/"),
  );
  const { annotation } = enrichWord(
    { id: "x", hanzi: "本", sourceWord: "本1", pinyin: "běn" },
    index,
    new Map(),
  );
  assert.equal(annotation.meaningQuizEligible, false);
  assert.ok(annotation.dictionary.notes);
});
test("common readings precede surname entries; classifier previews use the syllabus part of speech", () => {
  const index = indexDictionary(
    parseCvdict(
      "百 百 [Bai3] /họ [Bai3]/\n百 百 [bai3] /một trăm/\n本 本 [ben3] /gốc/lượng từ cho sách/",
    ),
  );
  const common = enrichWord(
    { hanzi: "百", pinyin: "bǎi" },
    index,
    new Map(),
  ).annotation;
  assert.ok(common.meaning.startsWith("một trăm"));
  const measure = enrichWord(
    { hanzi: "本", sourceWord: "本1", pinyin: "běn", partOfSpeech: "量" },
    index,
    new Map(),
  ).annotation;
  assert.ok(measure.meaning.startsWith("lượng từ cho sách"));
  assert.ok(!measure.meaningQuizEligible);
});
test("Sino-Vietnamese selects the matching pinyin, not the first character reading", () => {
  const index = parseHanviet(
    "char,hanviet,pinyin\n中,['trung'],zhong1\n中,['trúng'],zhong4\n國,['quốc'],*\n",
  );
  assert.equal(
    hanvietReading({ traditional: "中", pinyin: "zhong4" }, index),
    "trúng",
  );
  assert.equal(
    hanvietReading({ traditional: "中國", pinyin: "zhong1 guo2" }, index),
    "trung quốc",
  );
  assert.equal(
    hanvietReading({ traditional: "中", pinyin: "zhong3" }, index),
    null,
  );
});
test("meaning quizzes exclude uncertain entries as both answers and distractors", () => {
  const words = [
    {
      id: "a",
      hanzi: "甲",
      pinyin: "jiǎ",
      meaning: "mua",
      definitions: ["mua"],
    },
    {
      id: "b",
      hanzi: "乙",
      pinyin: "yǐ",
      meaning: "bán",
      meaningQuizEligible: false,
    },
    {
      id: "c",
      hanzi: "丙",
      pinyin: "bǐng",
      meaning: "mua; mua hàng",
      definitions: ["mua", "mua hàng"],
    },
    { id: "d", hanzi: "丁", pinyin: "dīng", meaning: "đọc" },
  ];
  assert.ok(!isMeaningEligible(words[1]));
  const questions = buildQuestions(words, words, "meaning");
  assert.ok(
    questions.every((q) => q.word.id !== "b" && !q.options.includes("bán")),
  );
  assert.ok(
    !questions.find((q) => q.word.id === "a").options.includes("mua; mua hàng"),
  );
});
test("generated enrichment counts, IDs, provenance and review coverage are consistent", async () => {
  const json = async (path) =>
    JSON.parse(await readFile(new URL(path, import.meta.url), "utf8"));
  const report = await json("../src/data/hsk-enrichment.json");
  const review = await json("../data/hsk-content-review.json");
  let meanings = 0,
    hanviet = 0,
    eligible = 0;
  for (const code of LEVELS) {
    const data = await json(`../public/data/hsk/${code}.json`);
    const supplement = await json(
      `../public/data/hsk-annotations/${code}.json`,
    );
    const ids = new Set(data.words.map((w) => w.id));
    for (const [id, value] of Object.entries(supplement.annotations)) {
      assert.ok(ids.has(id));
      assert.ok(
        value.dictionary.lines.every(
          (line) => Number.isInteger(line) && line > 0,
        ),
      );
      if (value.meaning) {
        meanings++;
        assert.ok(value.definitions.length);
      }
      if (value.sinoVietnamese) hanviet++;
      if (value.meaningQuizEligible) {
        eligible++;
        assert.ok(value.meaning);
      }
    }
    assert.equal(
      Object.values(supplement.annotations).filter((value) => value.meaning)
        .length,
      report.levels[code].meanings,
    );
  }
  assert.equal(meanings, report.totalMeanings);
  assert.equal(meanings, 11000);
  assert.equal(hanviet, report.totalHanviet);
  assert.equal(hanviet, 10759);
  assert.equal(eligible, report.totalQuizEligible);
  assert.equal(eligible, 10914);
  assert.equal(report.totalReviewedMeanings, 135);
  assert.equal(review.length, 11000 - meanings);
  assert.equal(new Set(review.map((word) => word.id)).size, review.length);
});
