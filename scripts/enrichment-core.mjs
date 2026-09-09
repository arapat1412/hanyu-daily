import { parseCsv } from "./hsk-core.mjs";
import {
  numberedSyllable,
  readingKey,
  readingVariants,
  sameReading,
  tonelessKey,
} from "../src/lib/pronunciation.mjs";

export function parseCvdict(text) {
  const entries = [],
    malformed = [];
  for (const [index, line] of text
    .replace(/^\uFEFF/, "")
    .split(/\r?\n/)
    .entries()) {
    if (!line.trim() || line.startsWith("#")) continue;
    // The pinned upstream has one duplicate bracket wrapper; normalize only
    // that syntactic wrapper, preserving all headwords, readings and glosses.
    const normalized = line.replace(/\[\[([^\]]+)\]\s*\]/, "[$1]");
    const match = /^(\S+)\s+(\S+)\s+\[([^\]]+)\]\s+\/(.*)\/$/.exec(normalized);
    if (!match) {
      malformed.push(index + 1);
      continue;
    }
    const definitions = match[4]
      .split("/")
      .map((value) => value.trim())
      .filter(Boolean);
    entries.push({
      traditional: match[1],
      simplified: match[2],
      pinyin: match[3],
      definitions,
      line: index + 1,
    });
  }
  if (!entries.length || malformed.length)
    throw new Error(
      `Invalid CVDICT format at lines: ${malformed.slice(0, 10).join(",")}`,
    );
  return entries;
}
export function indexDictionary(entries) {
  const index = new Map();
  for (const entry of entries)
    for (const form of new Set([entry.simplified, entry.traditional])) {
      if (!index.has(form)) index.set(form, []);
      index.get(form).push(entry);
    }
  return index;
}
export function parseHanviet(text) {
  const index = new Map();
  for (const row of parseCsv(text)) {
    const readings = [...row.hanviet.matchAll(/'([^']+)'/g)].map(
      (match) => match[1],
    );
    if (!index.has(row.char)) index.set(row.char, new Map());
    index.get(row.char).set(row.pinyin.trim(), readings);
  }
  return index;
}
export function hanvietReading(entry, index) {
  const characters = Array.from(entry.traditional);
  const syllables = entry.pinyin.toLowerCase().split(/\s+/);
  if (characters.length !== syllables.length) return null;
  const parts = characters.map((char, i) => {
    const candidates = index.get(char);
    if (!candidates) return null;
    const result = candidates.get(syllables[i]) ?? candidates.get("*");
    return result?.length ? result.join("/") : null;
  });
  return parts.every(Boolean) ? parts.join(" ") : null;
}
// Only explicit 一/不 tone-sandhi forms may use this tier. Neutral-tone
// changes, different vowels or other tone changes are never silently accepted.
export function sandhiMatch(word, entry) {
  if (!/[一不]/.test(word.hanzi)) return false;
  const chars = Array.from(word.hanzi),
    syllables = entry.pinyin.split(/\s+/);
  if (chars.length !== syllables.length) return false;
  const pattern = syllables
    .map((syllable, i) => {
      const key = readingKey(syllable);
      if (chars[i] === "一" && key === "yī") return "y[īíì]";
      if (chars[i] === "不" && key === "bù") return "b[ùú]";
      return key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("");
  return readingVariants(word.pinyin).some((key) =>
    new RegExp(`^${pattern}$`).test(key),
  );
}
const markedTones = new Map(
  [
    ["āēīōūǖ", 1],
    ["áéíóúǘńḿ", 2],
    ["ǎěǐǒǔǚň", 3],
    ["àèìòùǜǹ", 4],
  ].flatMap(([letters, tone]) =>
    Array.from(letters).map((letter) => [letter, tone]),
  ),
);
function markedTone(value) {
  for (const letter of Array.from(value.normalize("NFC").toLowerCase()))
    if (markedTones.has(letter)) return markedTones.get(letter);
  return 0;
}
// Review matching is intentionally gated by stable syllabus IDs. It accepts a
// neutral/full-tone difference, while rejecting competing entries whose two
// explicitly written tones conflict. If the source itself documents a more
// complex variant, a reviewed single candidate is still usable.
export function selectReviewedCandidates(word, candidates) {
  const scored = candidates.map((entry) => {
    const syllables = entry.pinyin.trim().split(/\s+/);
    const bases = syllables.map(tonelessKey);
    let best = -1;
    for (const variant of word.pinyin.split("/")) {
      if (tonelessKey(variant) !== bases.join("")) continue;
      const marked = Array.from(readingKey(variant));
      let offset = 0,
        score = 0,
        compatible = true;
      for (let i = 0; i < syllables.length; i++) {
        const length = Array.from(bases[i]).length;
        const syllabusTone = markedTone(
          marked.slice(offset, offset + length).join(""),
        );
        const dictionaryTone = markedTone(numberedSyllable(syllables[i]));
        offset += length;
        if (
          syllabusTone &&
          dictionaryTone &&
          syllabusTone !== dictionaryTone
        ) {
          compatible = false;
          break;
        }
        if (syllabusTone && syllabusTone === dictionaryTone) score++;
      }
      if (compatible) best = Math.max(best, score);
    }
    return { entry, score: best };
  });
  const compatible = scored.filter(({ score }) => score >= 0);
  if (!compatible.length) return candidates;
  const best = Math.max(...compatible.map(({ score }) => score));
  return compatible
    .filter(({ score }) => score === best)
    .map(({ entry }) => entry);
}
export function findEntries(word, index, options = {}) {
  const candidates = index.get(word.hanzi) || [];
  const isUpper = (value) => /^\p{Lu}/u.test(value.trim());
  const exact = candidates
    .filter((entry) => sameReading(word.pinyin, entry.pinyin))
    .sort(
      (a, b) =>
        Number(isUpper(b.pinyin) === isUpper(word.pinyin)) -
        Number(isUpper(a.pinyin) === isUpper(word.pinyin)),
    );
  if (exact.length) return { matches: exact, tier: "exact", candidates: [] };
  const sandhi = candidates.filter((entry) => sandhiMatch(word, entry));
  if (sandhi.length) return { matches: sandhi, tier: "sandhi", candidates: [] };
  const pronunciationCandidates = candidates.filter((entry) =>
    word.pinyin
      .split("/")
      .some((value) => tonelessKey(value) === tonelessKey(entry.pinyin)),
  );
  if (options.reviewedPronunciation && pronunciationCandidates.length)
    return {
      matches: selectReviewedCandidates(word, pronunciationCandidates),
      tier: "reviewed-pronunciation",
      candidates: [],
    };
  return {
    matches: [],
    tier: "missing",
    candidates: pronunciationCandidates,
  };
}
function isReference(value) {
  return (
    /^(?:xem |(?:biến thể|dạng|cách viết)(?: .*?)? của )/i.test(value) &&
    /[\p{Script=Han}]\[[^\]]+\]/u.test(value)
  );
}
function isMetadata(value) {
  return /^(LT:|CL:|cũng đọc là|cũng phát âm)/i.test(value);
}
export function resolveDefinitions(entry, index, seen = new Set()) {
  if (seen.has(entry.line) || seen.size >= 4)
    return { definitions: [], refs: [] };
  const visited = new Set([...seen, entry.line]);
  const direct = entry.definitions.filter(
    (value) => !isReference(value) && !isMetadata(value),
  );
  const refs = [entry.line];
  for (const definition of entry.definitions.filter(isReference)) {
    const match =
      /([\p{Script=Han}]+)(?:\|([\p{Script=Han}]+))?\[([^\]]+)\]/u.exec(
        definition,
      );
    if (!match) continue;
    const targets = (index.get(match[2] || match[1]) || []).filter(
      (candidate) => sameReading(candidate.pinyin, match[3]),
    );
    for (const target of targets) {
      const resolved = resolveDefinitions(target, index, visited);
      direct.push(...resolved.definitions);
      refs.push(...resolved.refs);
    }
  }
  return { definitions: [...new Set(direct)], refs: [...new Set(refs)] };
}
function manualAnnotation(word, manual) {
  const definitions = [...new Set(manual.definitions)];
  const meaning = definitions.slice(0, 3).join("; ");
  return {
    meaning,
    definitions,
    meaningStatus:
      manual.source === "editorial" ? "reviewed" : "dictionary",
    meaningQuizEligible:
      definitions.length > 0 &&
      !/\d$/.test(word.sourceWord || "") &&
      meaning.length <= 240,
    dictionary: {
      source:
        manual.source === "editorial" ? "editorial" : "cvdict",
      match: "reviewed",
      lines: manual.sourceLines || [],
      pronunciations: manual.sourcePronunciations || [word.pinyin],
      traditional: [manual.traditional || word.hanzi],
      notes: manual.note || "",
      url: manual.sourceUrl,
    },
  };
}
export function enrichWord(word, dictionary, hanviet, options = {}) {
  if (options.manual) {
    return { annotation: manualAnnotation(word, options.manual), review: null };
  }
  const found = findEntries(word, dictionary, options);
  if (!found.matches.length)
    return {
      annotation: null,
      review: {
        id: word.id,
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        reason: found.candidates.length
          ? "pronunciation-mismatch"
          : "not-found",
        candidates: found.candidates.map((entry) => ({
          line: entry.line,
          pinyin: entry.pinyin,
          definitions: entry.definitions,
        })),
      },
    };
  const definitions = [],
    refs = [],
    hv = new Set();
  for (const entry of found.matches) {
    const resolved = resolveDefinitions(entry, dictionary);
    definitions.push(...resolved.definitions);
    refs.push(...resolved.refs);
    const reading = hanvietReading(entry, hanviet);
    if (reading) hv.add(reading);
  }
  const senses = [...new Set(definitions)];
  const numberedSense = /\d$/.test(word.sourceWord || "");
  // Prefer the syllabus' classifier sense for a numbered measure-word entry.
  // Full dictionary senses remain available; this does not make it quiz-eligible.
  const preview = [...senses];
  if (/^量/.test(word.partOfSpeech || ""))
    preview.sort(
      (a, b) => Number(/^lượng từ/i.test(b)) - Number(/^lượng từ/i.test(a)),
    );
  const meaning = preview
    .slice(0, 3)
    .map((value) => value.replace(/\s*\((?:LT|CL):[^)]*\)/g, ""))
    .join("; ");
  const notes = [];
  if (numberedSense)
    notes.push(
      "Nguồn HSK tách mục đồng tự; nghĩa từ điển chưa được tách theo số mục.",
    );
  if (found.tier === "reviewed-pronunciation")
    notes.push(
      "Đã đối chiếu thủ công khác biệt thanh điệu hoặc âm nhẹ; pinyin hiển thị giữ nguyên đề cương.",
    );
  return {
    annotation: {
      meaning,
      definitions: senses,
      meaningStatus: senses.length ? "dictionary" : "missing",
      meaningQuizEligible:
        senses.length > 0 && !numberedSense && meaning.length <= 240,
      sinoVietnamese: hv.size === 1 ? [...hv][0] : undefined,
      sinoVietnameseMethod: hv.size === 1 ? "character-pinyin" : undefined,
      dictionary: {
        source: "cvdict",
        match: found.tier,
        lines: [...new Set(refs)],
        pronunciations: [
          ...new Set(found.matches.map((entry) => entry.pinyin)),
        ],
        traditional: [
          ...new Set(found.matches.map((entry) => entry.traditional)),
        ],
        notes: notes.join(" "),
      },
    },
    review: senses.length
      ? null
      : {
          id: word.id,
          hanzi: word.hanzi,
          pinyin: word.pinyin,
          reason: "unresolved-reference",
          candidates: found.matches,
        },
  };
}
