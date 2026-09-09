import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pinyin } from "pinyin-pro";
import {
  LEVELS,
  EXPECTED_COUNTS,
  LESSON_COUNTS,
  parseCsv,
  normalizeVocabulary,
  createLessons,
} from "./hsk-core.mjs";

function formatLessonPinyin(value) {
  return pinyin(value, { nonZh: "consecutive" })
    .replace(/[，]/g, ",")
    .replace(/[。]/g, ".")
    .replace(/[！]/g, "!")
    .replace(/[？]/g, "?")
    .replace(/[；]/g, ";")
    .replace(/[：]/g, ":")
    .replace(/\s+([,.!?;:、）”’])/g, "$1")
    .replace(/([（“‘])\s+/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

test("CSV supports BOM, quotes, commas, multiline and trailing blanks", () => {
  assert.deepEqual(parseCsv('\uFEFFa,b\r\n"字,词","a""b\nc"\r\n\r\n'), [
    { a: "字,词", b: 'a"b\nc' },
  ]);
  assert.throws(() => parseCsv('a,b\n"bad'), /quote/);
  assert.throws(() => parseCsv("a,b\n1,2,3"), /row/);
});
test("source levels use first level, homographs retain distinct IDs", () => {
  const rows = [
    {
      sort: "1",
      word: "本1",
      pinyin: "běn",
      cixing: "量",
      levelName: "一级（四级）",
    },
    { sort: "2", word: "本2", pinyin: "běn", cixing: "名", levelName: "二级" },
  ];
  const data = normalizeVocabulary(rows);
  assert.equal(data.hsk1[0].hanzi, "本");
  assert.equal(data.hsk1[0].sourceWord, "本1");
  assert.notEqual(data.hsk1[0].id, data.hsk2[0].id);
  assert.throws(() => normalizeVocabulary([rows[0], rows[0]]), /Invalid/);
  assert.throws(
    () => normalizeVocabulary([{ ...rows[0], levelName: "unknown" }]),
    /Unknown/,
  );
});
test("the 11,000-word catalog uses Meiday lessons for HSK 1-3", async () => {
  const csv = await readFile(
    new URL("../data/hsk-source/hsk_vocabulary.csv", import.meta.url),
    "utf8",
  );
  const data = normalizeVocabulary(parseCsv(csv));
  const meiday = JSON.parse(
    await readFile(
      new URL("../data/meiday-lesson-layout.json", import.meta.url),
      "utf8",
    ),
  );
  assert.equal(Object.values(data).flat().length, 11000);
  let lessonCount = 0;
  for (const [i, code] of LEVELS.entries()) {
    const saved = JSON.parse(
      await readFile(
        new URL(`../public/data/hsk/${code}.json`, import.meta.url),
        "utf8",
      ),
    );
    assert.equal(saved.words.length, EXPECTED_COUNTS[i]);
    assert.equal(saved.lessons.length, LESSON_COUNTS[i]);
    assert.ok(saved.lessons.every((lesson) => lesson.wordIds.length > 0));
    assert.ok(saved.words.every((w) => w.unit > 0 && w.pinyin && w.hanzi));
    assert.ok(saved.grammar.every((g) => g.examLevelId.toLowerCase() === code));

    const wordPool = [...saved.words, ...(saved.lessonWords || [])];
    const wordIds = new Set(wordPool.map((word) => word.id));
    assert.ok(
      saved.lessons.every((lesson) =>
        lesson.wordIds.every((id) => wordIds.has(id)),
      ),
      `${code} has an unresolved lesson word`,
    );

    if (i < 3) {
      const expected = meiday.levels[code].lessons.map((lesson) => ({
        id: `${code}-${lesson.number}`,
        level: code,
        ...lesson,
        titlePinyin:
          lesson.titlePinyin || formatLessonPinyin(lesson.title),
      }));
      assert.deepEqual(saved.lessons, expected);
    } else {
      const automatic = createLessons(code, data[code], LESSON_COUNTS[i]);
      assert.deepEqual(saved.lessons, automatic);
    }
    lessonCount += saved.lessons.length;
  }
  assert.equal(
    lessonCount,
    LESSON_COUNTS.reduce((sum, count) => sum + count, 0),
  );
  assert.deepEqual(
    JSON.parse(
      await readFile(
        new URL("../public/data/hsk/hsk1.json", import.meta.url),
        "utf8",
      ),
    ).lessons[0].wordIds,
    [
      "hsk30-147",
      "hsk30-107",
      "hsk30-71",
      "hsk30-26",
      "hsk30-124",
      "hsk30-211",
      "hsk30-148",
      "hsk30-248",
      "hsk30-150",
      "hsk30-241",
      "hsk30-14",
      "hsk30-272",
    ],
  );
});
