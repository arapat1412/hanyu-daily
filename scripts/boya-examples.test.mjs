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

function parseCsv(source) {
  const text = source.replace(/^\uFEFF/u, "");
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field !== "" || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const [header, ...records] = rows;
  return records
    .filter((record) => record.some((value) => value !== ""))
    .map((record) =>
      Object.fromEntries(header.map((name, index) => [name, record[index] ?? ""])),
    );
}

async function loadBoya1Sources() {
  const [csvSource, tsSource] = await Promise.all([
    readFile(new URL("../data/boya1_vocab.csv", import.meta.url), "utf8"),
    readFile(new URL("../src/data/boya1Data.ts", import.meta.url), "utf8"),
  ]);
  return {
    rows: parseCsv(csvSource),
    vocabulary: loadVocabulary(tsSource, "BOYA1_VOCABULARY"),
  };
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

test("Boya 1 CSV and TypeScript expose the same 678 example triplets", async () => {
  const { rows, vocabulary } = await loadBoya1Sources();

  assert.equal(rows.length, 678);
  assert.equal(vocabulary.length, 678);
  assert.deepEqual(
    rows.map((row) => Number(row.STT)),
    Array.from({ length: 678 }, (_, index) => index + 1),
    "CSV sequence order changed",
  );

  for (const [index, word] of vocabulary.entries()) {
    const row = rows[index];
    assert.equal(word.hanzi, row["Chữ Hán"], `Row ${row.STT} hanzi mismatch for ${word.id}`);
    assert.deepEqual(
      word.exampleSentence,
      {
        chinese: row["Ví dụ tiếng Trung"],
        pinyin: row["Phiên âm ví dụ"],
        vietnamese: row["Dịch ví dụ"],
      },
      `Row ${row.STT} (${word.id}) example mismatch between CSV and TypeScript`,
    );
  }
});

test("Boya 1 reviewed examples keep polyphonic and neutral-tone readings", async () => {
  const { rows, vocabulary } = await loadBoya1Sources();
  const byId = new Map(vocabulary.map((word) => [word.id, word]));

  function assertExample(id, example) {
    const word = byId.get(id);
    assert.ok(word, `Missing ${id}`);
    assert.deepEqual(word.exampleSentence, example, `${id} example changed unexpectedly`);
  }

  assertExample("boya1-18-15", {
    chinese: "我得去上课了。",
    pinyin: "Wǒ děi qù shàngkè le.",
    vietnamese: "Tôi phải đi học rồi.",
  });
  assertExample("boya1-25-18", {
    chinese: "你的汉语说得很棒。",
    pinyin: "Nǐ de Hànyǔ shuō de hěn bàng.",
    vietnamese: "Bạn nói tiếng Trung rất giỏi.",
  });
  assertExample("boya1-14-2", {
    chinese: "这件毛衣是白色的。",
    pinyin: "Zhè jiàn máoyī shì báisè de.",
    vietnamese: "Chiếc áo len này màu trắng.",
  });
  assertExample("boya1-21-16", {
    chinese: "杯子倒了",
    pinyin: "Bēizi dǎo le.",
    vietnamese: "Cái cốc đã bị đổ",
  });
  assertExample("boya1-11-12", {
    chinese: "这把椅子坐着很舒服。",
    pinyin: "Zhè bǎ yǐzi zuòzhe hěn shūfu.",
    vietnamese: "Ngồi trên chiếc ghế này rất thoải mái.",
  });
  assertExample("boya1-8-21", {
    chinese: "我住在三〇二室。",
    pinyin: "Wǒ zhù zài sān líng èr shì.",
    vietnamese: "Tôi ở phòng 302.",
  });

  const complementParticle = byId.get("boya1-28-6");
  assertExample("boya1-28-6", {
    chinese: "你考得怎么样？",
    pinyin: "Nǐ kǎo de zěnmeyàng?",
    vietnamese: "Bạn thi thế nào?",
  });
  assert.equal(complementParticle.meaning, "trợ từ dẫn bổ ngữ");
  assert.equal(complementParticle.partOfSpeech, "Trợ từ");

  const csvRow = rows.find((row) => Number(row.STT) === 616);
  assert.equal(csvRow["Nghĩa tiếng Việt"], "trợ từ dẫn bổ ngữ");
  assert.equal(csvRow["Từ loại"], "Trợ từ");
});
