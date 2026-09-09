const ALLOWED_SOURCES = new Set(["dataset", "ai"]);
const ALLOWED_REVIEW_STATUS = new Set(["ai-generated", "reviewed"]);

export function isPublishableExample(value) {
  if (!value || typeof value !== "object") return false;
  if (!ALLOWED_SOURCES.has(value.source)) return false;
  if (!ALLOWED_REVIEW_STATUS.has(value.reviewStatus)) return false;
  if (value.source === "dataset" && value.reviewStatus !== "reviewed")
    return false;
  return [value.chinese, value.pinyin, value.vietnamese].every(
    (field) => typeof field === "string" && field.trim().length > 0,
  );
}

export function mergeExampleWords(words, examples) {
  return words.map((word) => {
    const candidate = examples[word.id];
    if (!isPublishableExample(candidate)) return word;
    if (word.exampleSentence?.source === "curated") return word;
    if (!candidate.chinese.includes(word.hanzi)) return word;
    return { ...word, exampleSentence: candidate };
  });
}

export function createExampleShardLoader(fetchImpl = globalThis.fetch) {
  const cache = new Map();
  return async function loadExampleShard(code, unit) {
    if (!/^hsk(?:[1-6]|7-9)$/.test(code) || !Number.isInteger(unit) || unit < 1)
      throw new Error("Invalid example shard key");
    const key = `${code}/${unit}`;
    if (!cache.has(key)) {
      const request = Promise.resolve(
        fetchImpl(`/data/hsk-examples/${code}/${unit}.json`, {
          signal: AbortSignal.timeout(10000),
        }),
      )
        .then(async (response) => {
          if (!response.ok) throw new Error("Example shard unavailable");
          const payload = await response.json();
          if (
            payload?.version !== 1 ||
            payload.code !== code ||
            payload.unit !== unit ||
            !payload.examples ||
            typeof payload.examples !== "object" ||
            Array.isArray(payload.examples)
          )
            throw new Error("Invalid example shard");
          return Object.fromEntries(
            Object.entries(payload.examples).filter(([, value]) =>
              isPublishableExample(value),
            ),
          );
        })
        .catch((error) => {
          cache.delete(key);
          throw error;
        });
      cache.set(key, request);
    }
    return cache.get(key);
  };
}
