export const LEVELS = [
  "hsk1",
  "hsk2",
  "hsk3",
  "hsk4",
  "hsk5",
  "hsk6",
  "hsk7-9",
];
export const EXPECTED_COUNTS = [300, 200, 500, 1000, 1600, 1800, 5600];
export const LESSON_COUNTS = [15, 15, 18, 100, 160, 180, 560];
const levelNames = ["一级", "二级", "三级", "四级", "五级", "六级", "七-九级"];

// RFC 4180: quoted commas, escaped quotes, CRLF and multiline cells.
export function parseCsv(text) {
  const rows = [];
  let row = [],
    cell = "",
    quoted = false;
  text = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (quoted && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else quoted = !quoted;
    } else if (c === "," && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((c === "\n" || c === "\r") && !quoted) {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell);
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else cell += c;
  }
  if (quoted) throw new Error("Unterminated CSV quote");
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const headers = rows.shift();
  if (!headers) throw new Error("Empty CSV");
  return rows.map((values, index) => {
    if (values.length !== headers.length)
      throw new Error(`Invalid CSV row ${index + 2}`);
    return Object.fromEntries(headers.map((key, i) => [key, values[i]]));
  });
}

export function normalizeVocabulary(rows) {
  const seen = new Set();
  const grouped = Object.fromEntries(LEVELS.map((code) => [code, []]));
  for (const row of rows) {
    const index = levelNames.indexOf(row.levelName.split("（")[0]);
    if (index < 0) throw new Error(`Unknown level: ${row.levelName}`);
    const sort = Number(row.sort);
    if (
      !Number.isInteger(sort) ||
      sort < 1 ||
      seen.has(sort) ||
      !row.word ||
      !row.pinyin
    ) {
      throw new Error(`Invalid vocabulary record: ${JSON.stringify(row)}`);
    }
    seen.add(sort);
    const code = LEVELS[index];
    grouped[code].push({
      id: `hsk30-${sort}`,
      hanzi: row.word.replace(/[0-9]+$/u, ""),
      sourceWord: row.word,
      pinyin: row.pinyin,
      partOfSpeech: row.cixing,
      hskLevel: code,
      sourceLevel: row.levelName,
      sort,
      meaning: "",
      meaningStatus: "missing",
    });
  }
  for (const code of LEVELS) grouped[code].sort((a, b) => a.sort - b.sort);
  return grouped;
}

export function createLessons(code, words, count) {
  if (!Number.isInteger(count) || count < 1 || count > words.length)
    throw new Error("Invalid lesson count");
  return Array.from({ length: count }, (_, index) => {
    const start = Math.floor((index * words.length) / count);
    const end = Math.floor(((index + 1) * words.length) / count);
    const section = words.slice(start, end);
    const vocabularyUnit = ["hsk4", "hsk5", "hsk6", "hsk7-9"].includes(code);
    section.forEach((word) => {
      word.unit = index + 1;
    });
    return {
      id: `${code}-${index + 1}`,
      level: code,
      number: index + 1,
      title: vocabularyUnit
        ? `Mục ${index + 1}`
        : `Bài ${index + 1}: ${section[0].hanzi} – ${section.at(-1).hanzi}`,
      subtitle: vocabularyUnit
        ? `${section.length} từ · Nhóm ôn tập`
        : `Từ ${start + 1}–${end} · Theo thứ tự đề cương`,
      wordIds: section.map((word) => word.id),
    };
  });
}

export function validateDataset(grouped, lessons) {
  for (const [index, code] of LEVELS.entries()) {
    if (grouped[code].length !== EXPECTED_COUNTS[index])
      throw new Error(`Unexpected count for ${code}`);
    const ids = lessons[code].flatMap((lesson) => lesson.wordIds);
    if (
      new Set(ids).size !== ids.length ||
      ids.length !== grouped[code].length ||
      ids.some((id, i) => id !== grouped[code][i].id)
    )
      throw new Error(`Incomplete lessons: ${code}`);
  }
}
