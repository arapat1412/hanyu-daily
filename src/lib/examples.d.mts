export interface ExampleInput {
  id?: string;
  hanzi: string;
  pinyin: string;
  sort?: number;
}

export interface GeneratedExample {
  chinese: string;
  pinyin: string;
  vietnamese: string;
  source: "generated-template";
}

export function createFallbackExample(
  word: ExampleInput,
  meaning: string,
): GeneratedExample;

export function splitHighlightedText(
  text: string,
  target: string,
): { text: string; highlighted: boolean }[];
