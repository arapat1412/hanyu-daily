import type { VocabularyWord } from "../types";

export type LoadedExample = NonNullable<VocabularyWord["exampleSentence"]>;

export function isPublishableExample(value: unknown): value is LoadedExample;
export function mergeExampleWords(
  words: VocabularyWord[],
  examples: Record<string, LoadedExample>,
): VocabularyWord[];
export function createExampleShardLoader(
  fetchImpl?: typeof fetch,
): (code: string, unit: number) => Promise<Record<string, LoadedExample>>;
