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
function meaningParts(word) {
  return new Set(
    [...(word.definitions || []), ...word.meaning.split(/[;/]/)]
      .map(answerKey)
      .filter(Boolean),
  );
}
export function buildQuestions(words, pool, mode, random = Math.random) {
  return shuffle(
    words.filter((word) => mode !== "meaning" || isMeaningEligible(word)),
    random,
  ).flatMap((word) => {
    if (mode === "typing") return [{ word, answer: word.pinyin, options: [] }];
    const field =
      mode === "meaning"
        ? "meaning"
        : mode === "listening"
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
