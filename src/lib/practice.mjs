import { readingKey } from "./pronunciation.mjs";

export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function answerKey(value) {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\s’'·.,!?，。！？]/g, "");
}
export function matchesPinyin(answer, pinyin) {
  return (
    !!answer.trim() &&
    pinyin
      .split("/")
      .some((variant) => readingKey(variant) === readingKey(answer))
  );
}
export function isMeaningEligible(word) {
  return !!word.meaning && word.meaningQuizEligible !== false;
}
export function isClozeEligible(word) {
  return (
    !!word?.exampleSentence?.chinese &&
    typeof word.exampleSentence.chinese === "string" &&
    word.exampleSentence.chinese.includes(word.hanzi) &&
    word.exampleSentence.source !== "generated-template"
  );
}
export function maskVietnameseHint(vietnamese, hanzi, pinyin) {
  if (!vietnamese) return "";
  let text = String(vietnamese);

  if (hanzi) {
    text = text
      .replaceAll(`“${hanzi}”`, "( _____ )")
      .replaceAll(`"${hanzi}"`, "( _____ )")
      .replaceAll(`'${hanzi}'`, "( _____ )")
      .replaceAll(`‘${hanzi}’`, "( _____ )")
      .replaceAll(`(${hanzi})`, "( _____ )")
      .replaceAll(`（${hanzi}）`, "( _____ )")
      .replaceAll(`[${hanzi}]`, "( _____ )")
      .replaceAll(`【${hanzi}】`, "( _____ )")
      .replaceAll(hanzi, "( _____ )");
  }

  if (pinyin && typeof pinyin === "string") {
    pinyin.split("/").forEach((variant) => {
      const trimmed = variant.trim();
      if (trimmed.length >= 2) {
        text = text
          .replaceAll(`“${trimmed}”`, "( _____ )")
          .replaceAll(`"${trimmed}"`, "( _____ )")
          .replaceAll(`(${trimmed})`, "( _____ )")
          .replaceAll(trimmed, "( _____ )");
      }
    });
  }

  text = text.replace(/\(\s*_____\s*\)\s*\(\s*_____\s*\)/g, "( _____ )");
  text = text.replace(/\(\s*\(\s*_____\s*\)\s*\)/g, "( _____ )");

  return text;
}
function meaningParts(word) {
  return new Set(
    [...(word.definitions || []), ...word.meaning.split(/[;/]/)]
      .map(answerKey)
      .filter(Boolean),
  );
}
export function buildQuestions(words, pool, mode, random = Math.random) {
  return shuffle(
    words.filter(
      (word) =>
        (mode !== "meaning" || isMeaningEligible(word)) &&
        (mode !== "cloze" || isClozeEligible(word)),
    ),
    random,
  ).flatMap((word) => {
    if (mode === "typing") return [{ word, answer: word.pinyin, options: [] }];
    const field =
      mode === "meaning"
        ? "meaning"
        : (mode === "listening" || mode === "cloze")
          ? "hanzi"
          : "pinyin";
    const answer = word[field];
    const used = new Set([answerKey(answer)]);
    if (mode === "pinyin")
      word.pinyin.split("/").forEach((variant) => used.add(answerKey(variant)));
    const distractors = [];
    for (const candidate of shuffle(pool, random)) {
      if (
        mode === "meaning" &&
        (!isMeaningEligible(candidate) ||
          [...meaningParts(candidate)].some((part) =>
            meaningParts(word).has(part),
          ))
      )
        continue;
      const value = candidate[field];
      if (
        !value ||
        used.has(answerKey(value)) ||
        candidate.hanzi === word.hanzi
      )
        continue;
      if (
        mode === "listening" &&
        candidate.pinyin
          .split("/")
          .some((p) =>
            word.pinyin.split("/").some((w) => answerKey(p) === answerKey(w)),
          )
      )
        continue;
      if (
        mode === "pinyin" &&
        value.split("/").some((variant) => used.has(answerKey(variant)))
      )
        continue;
      used.add(answerKey(value));
      distractors.push(value);
      if (distractors.length === 3) break;
    }
    return distractors.length
      ? [{ word, answer, options: shuffle([answer, ...distractors], random) }]
      : [];
  });
}

export function isSentenceScrambleEligible(word) {
  return (
    !!word?.exampleSentence?.chinese &&
    typeof word.exampleSentence.chinese === "string" &&
    word.exampleSentence.chinese.trim().length >= 4 &&
    !!word?.exampleSentence?.vietnamese &&
    typeof word.exampleSentence.vietnamese === "string" &&
    word.exampleSentence.source !== "generated-template"
  );
}

export function tokenizeChineseSentence(sentence, targetWord = "") {
  let cleaned = String(sentence || "").trim();
  const endPunctuationMatch = cleaned.match(/[。！？!?.]+$/);
  const punctuation = endPunctuationMatch ? endPunctuationMatch[0] : "";
  cleaned = cleaned.replace(/[。！？!?.]+$/, "").trim();

  let tokens = [];
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
    tokens = [...segmenter.segment(cleaned)]
      .map((s) => s.segment.trim())
      .filter(Boolean);
  } else {
    tokens = cleaned.split("").filter((c) => !/\s/.test(c));
  }

  // Attach commas/pauses to preceding token
  for (let i = 1; i < tokens.length; i++) {
    if (/^[，,、：:;；]$/.test(tokens[i])) {
      tokens[i - 1] += tokens[i];
      tokens.splice(i, 1);
      i--;
    }
  }

  // Ensure targetWord is intact if provided and found in cleaned
  if (targetWord && cleaned.includes(targetWord)) {
    const recombined = [];
    let i = 0;
    while (i < tokens.length) {
      let accumulated = "";
      let matchEnd = -1;
      for (let j = i; j < tokens.length; j++) {
        accumulated += tokens[j].replace(/[，,、：:;；]/g, "");
        if (accumulated === targetWord) {
          matchEnd = j;
          break;
        }
        if (!targetWord.startsWith(accumulated)) break;
      }
      if (matchEnd !== -1) {
        const combined = tokens.slice(i, matchEnd + 1).join("");
        recombined.push(combined);
        i = matchEnd + 1;
      } else {
        recombined.push(tokens[i]);
        i++;
      }
    }
    tokens = recombined;
  }

  // Target token count: 4 to 7
  // If > 7, merge shortest adjacent tokens
  while (tokens.length > 7) {
    let minLen = Infinity;
    let bestIdx = 0;
    for (let i = 0; i < tokens.length - 1; i++) {
      const combined = tokens[i] + tokens[i + 1];
      if (combined.length < minLen) {
        minLen = combined.length;
        bestIdx = i;
      }
    }
    tokens.splice(bestIdx, 2, tokens[bestIdx] + tokens[bestIdx + 1]);
  }

  // If < 4, split any tokens with length >= 2 if possible (unless it equals targetWord)
  if (tokens.length < 4) {
    for (let i = 0; i < tokens.length; i++) {
      if (tokens.length >= 4) break;
      const tok = tokens[i];
      if (tok.length >= 2 && tok !== targetWord) {
        const mid = Math.floor(tok.length / 2);
        const part1 = tok.slice(0, mid);
        const part2 = tok.slice(mid);
        tokens.splice(i, 1, part1, part2);
        i++;
      }
    }
  }

  return {
    tokens,
    punctuation,
    fullSentence: cleaned + punctuation,
  };
}

export function buildSentenceScrambleQuestions(words, random = Math.random) {
  const eligible = words.filter(isSentenceScrambleEligible);
  return shuffle(eligible, random).flatMap((word) => {
    const rawSentence = word.exampleSentence?.chinese || "";
    const { tokens, punctuation, fullSentence } = tokenizeChineseSentence(
      rawSentence,
      word.hanzi,
    );
    if (!tokens.length) return [];

    const indexedTokens = tokens.map((text, idx) => ({
      id: `${word.id}-tok-${idx}-${text}`,
      text,
    }));

    let scrambled = shuffle(indexedTokens, random);
    let attempts = 0;
    while (
      scrambled.length > 1 &&
      scrambled.every((t, i) => t.text === tokens[i]) &&
      attempts < 5
    ) {
      scrambled = shuffle(indexedTokens, random);
      attempts++;
    }
    if (scrambled.length > 1 && scrambled.every((t, i) => t.text === tokens[i])) {
      scrambled = [scrambled[1], scrambled[0], ...scrambled.slice(2)];
    }

    return [
      {
        word,
        tokens,
        scrambledTokens: scrambled,
        punctuation,
        fullSentence,
        pinyin: word.exampleSentence?.pinyin || "",
        vietnamese: word.exampleSentence?.vietnamese || "",
      },
    ];
  });
}

export function buildWordMatchingPairs(words, count = 5, random = Math.random) {
  const eligible = words.filter((w) => !!w.hanzi && !!w.meaning);
  const selected = shuffle(eligible, random).slice(0, count);
  if (!selected.length) return null;

  const leftCards = selected.map((word) => ({
    id: `hanzi-${word.id}`,
    wordId: word.id,
    type: "hanzi",
    text: word.hanzi,
    pinyin: word.pinyin,
    word,
  }));

  const rightCards = shuffle(
    selected.map((word) => ({
      id: `meaning-${word.id}`,
      wordId: word.id,
      type: "meaning",
      text: word.meaning,
      pinyin: word.pinyin,
      word,
    })),
    random,
  );

  return {
    words: selected,
    leftCards,
    rightCards,
  };
}

