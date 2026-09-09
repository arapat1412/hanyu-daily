export interface HskLevel {
  id: string; // 'hsk1', 'hsk2', ...
  code: string;
  name: string;
  title: string;
  levelNum: number | string;
  badgeColor: string;
  badgeBg: string;
  accentColor: string;
  vocabCount: number;
  grammarCount: number;
  lessonsCount: number;
  description: string;
  recommendedTime: string;
  progressPercent: number;
}

export interface VocabularyWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  sinoVietnamese?: string; // Âm Hán Việt
  partOfSpeech: string;
  hskLevel: string;
  unit?: number;
  sourceWord?: string;
  sourceLevel?: string;
  meaningStatus?: 'missing' | 'local' | 'dictionary' | 'reviewed';
  meaningQuizEligible?: boolean;
  definitions?: string[];
  sinoVietnameseMethod?: 'local' | 'character-pinyin';
  dictionary?: {
    source: 'cvdict' | 'editorial';
    match: 'exact' | 'sandhi' | 'reviewed-pronunciation' | 'reviewed';
    lines: number[];
    pronunciations: string[];
    traditional: string[];
    notes: string;
    url?: string;
  };
  sort?: number;
  exampleSentence?: {
    chinese: string;
    pinyin: string;
    vietnamese: string;
    source?: 'curated' | 'generated-template' | 'dataset' | 'ai';
    sourceName?: string;
    sourceRow?: number;
    reviewStatus?: 'machine-filtered' | 'ai-generated' | 'reviewed';
  };
  audioUrl?: string;
  isBookmarked?: boolean;
}

export interface GrammarPoint {
  id: string;
  title: string;
  structure: string;
  pinyinStructure?: string;
  explanation: string;
  hskLevel: string;
  examples: {
    chinese: string;
    pinyin: string;
    vietnamese: string;
  }[];
}

export interface ChengyuItem {
  id: string;
  hanzi: string;
  pinyin: string;
  sinoVietnamese: string;
  literalMeaning: string;
  figurativeMeaning: string;
  origin?: string;
  example: {
    chinese: string;
    pinyin: string;
    vietnamese: string;
  };
}
