import { useEffect, useState } from "react";
import type {
  EnrichedGrammarPoint,
  GrammarCategory,
} from "../data/hsk1GrammarData";

export type GrammarLevelCode =
  | "hsk1"
  | "hsk2"
  | "hsk3"
  | "hsk4"
  | "hsk5"
  | "hsk6"
  | "hsk7-9";

export interface GrammarLevelData {
  grammarData: EnrichedGrammarPoint[];
  categories: GrammarCategory[];
}

const loaders: Record<GrammarLevelCode, () => Promise<GrammarLevelData>> = {
  hsk1: () =>
    import("../data/hsk1GrammarData").then((module) => ({
      grammarData: module.HSK1_ENRICHED_GRAMMAR,
      categories: module.HSK1_GRAMMAR_CATEGORIES,
    })),
  hsk2: () =>
    import("../data/hsk2GrammarData").then((module) => ({
      grammarData: module.HSK2_ENRICHED_GRAMMAR,
      categories: module.HSK2_GRAMMAR_CATEGORIES,
    })),
  hsk3: () =>
    import("../data/hsk3GrammarData").then((module) => ({
      grammarData: module.HSK3_ENRICHED_GRAMMAR,
      categories: module.HSK3_GRAMMAR_CATEGORIES,
    })),
  hsk4: () =>
    import("../data/hsk4GrammarData").then((module) => ({
      grammarData: module.HSK4_ENRICHED_GRAMMAR,
      categories: module.HSK4_GRAMMAR_CATEGORIES,
    })),
  hsk5: () =>
    import("../data/hsk5GrammarData").then((module) => ({
      grammarData: module.HSK5_ENRICHED_GRAMMAR,
      categories: module.HSK5_GRAMMAR_CATEGORIES,
    })),
  hsk6: () =>
    import("../data/hsk6GrammarData").then((module) => ({
      grammarData: module.HSK6_ENRICHED_GRAMMAR,
      categories: module.HSK6_GRAMMAR_CATEGORIES,
    })),
  "hsk7-9": () =>
    import("../data/hsk79GrammarData").then((module) => ({
      grammarData: module.HSK79_ENRICHED_GRAMMAR,
      categories: module.HSK79_GRAMMAR_CATEGORIES,
    })),
};

const resolvedCache = new Map<GrammarLevelCode, GrammarLevelData>();
const promiseCache = new Map<GrammarLevelCode, Promise<GrammarLevelData>>();

function normalizeLevelCode(levelCode: string): GrammarLevelCode {
  return levelCode in loaders ? (levelCode as GrammarLevelCode) : "hsk1";
}

export function loadGrammarLevel(levelCode: string) {
  const code = normalizeLevelCode(levelCode);
  const resolved = resolvedCache.get(code);
  if (resolved) return Promise.resolve(resolved);

  const pending = promiseCache.get(code);
  if (pending) return pending;

  const promise = loaders[code]().then(
    (data) => {
      resolvedCache.set(code, data);
      promiseCache.delete(code);
      return data;
    },
    (error) => {
      promiseCache.delete(code);
      throw error;
    },
  );
  promiseCache.set(code, promise);
  return promise;
}

export function useGrammarLevel(levelCode: string, enabled = true) {
  const code = normalizeLevelCode(levelCode);
  const cached = resolvedCache.get(code);
  const [state, setState] = useState<{
    code: GrammarLevelCode;
    data?: GrammarLevelData;
    loading: boolean;
    error?: unknown;
  }>(() => ({ code, data: cached, loading: enabled && !cached }));

  const isCurrentLevel = state.code === code;
  const data = isCurrentLevel ? state.data : cached;
  const loading = enabled && (isCurrentLevel ? state.loading : !cached);
  const error = isCurrentLevel ? state.error : undefined;

  useEffect(() => {
    if (!enabled) {
      setState({ code, data: resolvedCache.get(code), loading: false });
      return;
    }

    const cachedLevel = resolvedCache.get(code);
    if (cachedLevel) {
      setState({ code, data: cachedLevel, loading: false });
      return;
    }

    let active = true;
    setState({ code, loading: true });

    loadGrammarLevel(code).then(
      (level) => {
        if (!active) return;
        setState({ code, data: level, loading: false });
      },
      (loadError) => {
        if (!active) return;
        setState({ code, loading: false, error: loadError });
      },
    );

    return () => {
      active = false;
    };
  }, [code, enabled]);

  return { data, loading, error };
}
