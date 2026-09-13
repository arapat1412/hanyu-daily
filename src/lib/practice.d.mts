import type { VocabularyWord } from "../types";
export type PracticeMode =
  | "pinyin"
  | "meaning"
  | "listening"
  | "typing"
  | "cloze"
  | "scramble"
  | "matching";
export interface Question {
  word: VocabularyWord;
  answer: string;
  options: string[];
}
export interface ScrambleToken {
  id: string;
  text: string;
}
export interface SentenceScrambleQuestion {
  word: VocabularyWord;
  tokens: string[];
  scrambledTokens: ScrambleToken[];
  punctuation: string;
  fullSentence: string;
  pinyin: string;
  vietnamese: string;
}
export interface WordMatchingCard {
  id: string;
  wordId: string;
  type: "hanzi" | "meaning";
  text: string;
  pinyin: string;
  word: VocabularyWord;
}
export interface WordMatchingRound {
  words: VocabularyWord[];
  leftCards: WordMatchingCard[];
  rightCards: WordMatchingCard[];
}
export function shuffle<T>(items: T[], random?: () => number): T[];
export function answerKey(value: string): string;
export function matchesPinyin(answer: string, pinyin: string): boolean;
export function isMeaningEligible(word: VocabularyWord): boolean;
export function isClozeEligible(word: VocabularyWord): boolean;
export function isSentenceScrambleEligible(word: VocabularyWord): boolean;
export function tokenizeChineseSentence(
  sentence: string,
  targetWord?: string,
): {
  tokens: string[];
  punctuation: string;
  fullSentence: string;
};
export function buildSentenceScrambleQuestions(
  words: VocabularyWord[],
  random?: () => number,
): SentenceScrambleQuestion[];
export function buildWordMatchingPairs(
  words: VocabularyWord[],
  count?: number,
  random?: () => number,
): WordMatchingRound | null;
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

