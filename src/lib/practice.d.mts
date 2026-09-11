import type { VocabularyWord } from "../types";
export type PracticeMode = "pinyin" | "meaning" | "listening" | "typing" | "cloze";
export interface Question {
  word: VocabularyWord;
  answer: string;
  options: string[];
}
export function shuffle<T>(items: T[], random?: () => number): T[];
export function answerKey(value: string): string;
export function matchesPinyin(answer: string, pinyin: string): boolean;
export function isMeaningEligible(word: VocabularyWord): boolean;
export function isClozeEligible(word: VocabularyWord): boolean;
export function maskVietnameseHint(
  vietnamese: string,
  hanzi: string,
  pinyin?: string,
): string;
export function buildQuestions(
  words: VocabularyWord[],
  pool: VocabularyWord[],
  mode: PracticeMode,
  random?: () => number,
): Question[];
