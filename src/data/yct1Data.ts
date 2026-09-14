import type { VocabularyWord } from "../types";
import { awardDailyXp, awardXp } from "../lib/hsk";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: YctCategoryId;
  lessonNumber?: number; // 1 to 11, or undefined for cumulative & expansion
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type YctCategoryId =
  | "greetings"
  | "numbers"
  | "family"
  | "animals"
  | "food"
  | "body"
  | "school"
  | "actions"
  | "pronouns"
  | "grammar";

export interface YctCategory {
  id: YctCategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface YctLesson {
  id: string;
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordsCount: number;
  wordCount: number;
  estMinutes: number;
  estimatedMinutes: number;
  color: string;
  words: string[];
}

export const YCT_CATEGORIES: YctCategory[] = [
  {
    id: "greetings",
    nameVi: "Chào hỏi & Lễ phép",
    nameZh: "问候礼貌",
    icon: "👋",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    description: "Các câu chào hỏi, cảm ơn, tạm biệt và lễ phép thường dùng",
  },
  {
    id: "numbers",
    nameVi: "Số đếm & Thời gian",
    nameZh: "数字时间",
    icon: "🔢",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    description: "Đếm số 1-10, các thứ trong tuần, ngày tháng, giờ giấc",
  },
  {
    id: "pronouns",
    nameVi: "Đại từ & Hỏi đáp",
    nameZh: "代词疑问",
    icon: "🙋‍♂️",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    description: "Tôi, bạn, anh ấy, cô ấy, cái gì, ai, ở đâu, thế nào",
  },
  {
    id: "family",
    nameVi: "Gia đình & Con người",
    nameZh: "家庭人物",
    icon: "👨‍👩‍👧",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    description: "Bố mẹ, anh chị em, bạn bè, thầy cô và con người",
  },
  {
    id: "animals",
    nameVi: "Động vật đáng yêu",
    nameZh: "可爱动物",
    icon: "🐼",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    description: "Mèo, chó, chim, cá, gấu trúc thân quen",
  },
  {
    id: "food",
    nameVi: "Món ăn & Đồ uống",
    nameZh: "美食饮品",
    icon: "🍎",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    description: "Cơm, mì, táo, bánh ngọt, sữa, nước uống thanh mát",
  },
  {
    id: "body",
    nameVi: "Cơ thể & Miêu tả",
    nameZh: "身体外貌",
    icon: "👁️",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    description: "Mắt, mũi, miệng, tai, tay và các đặc điểm to nhỏ cao dài",
  },
  {
    id: "school",
    nameVi: "Trường học & Nơi chốn",
    nameZh: "学校文具",
    icon: "🎒",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    description: "Trường học, cửa hàng, sách vở, bàn ghế học tập",
  },
  {
    id: "actions",
    nameVi: "Hành động & Sở thích",
    nameZh: "动作爱好",
    icon: "🏃",
    badgeColor: "bg-lime-100 text-lime-800 border-lime-300",
    description: "Ăn, uống, nhìn, nghe, nói, đi, yêu thích và vui vẻ",
  },
  {
    id: "grammar",
    nameVi: "Mức độ & Ngữ pháp",
    nameZh: "虚词语法",
    icon: "❓",
    badgeColor: "bg-pink-100 text-pink-800 border-pink-300",
    description: "Rất, thật, cũng, không, của, ở, có và các lượng từ",
  },
];

export interface YctPdfResource {
  level: number;
  titleVi: string;
  titleZh: string;
  desc: string;
  textbookUrl: string;
  workbookUrl: string;
  sizeMbTextbook: number;
  sizeMbWorkbook: number;
  wordsCount: number;
}

export const YCT_PDF_RESOURCES: YctPdfResource[] = [
  {
    level: 1,
    titleVi: "Giáo trình Chuẩn YCT Cấp 1 (Tập 1)",
    titleZh: "YCT 标准教程 1",
    desc: "Dành cho thiếu nhi mới bắt đầu làm quen tiếng Trung qua tranh ảnh, 11 bài học sinh động và 129 từ vựng cơ bản.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1G2L2r4zG5mP-Q8m2d2b_0lZ1X5s_sample1",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=1H3M3s5zH6nQ-R9n3e3c_1mZ2Y6t_sample1",
    sizeMbTextbook: 8.4,
    sizeMbWorkbook: 6.2,
    wordsCount: 129,
  },
  {
    level: 2,
    titleVi: "Giáo trình Chuẩn YCT Cấp 2 (Tập 2)",
    titleZh: "YCT 标准教程 2",
    desc: "Mở rộng mẫu câu hội thoại hàng ngày, thời gian biểu, miêu tả đồ vật và động vật với 154 từ vựng theo 10 bài học.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=10Qp7R-0iO7H2n3P8gX1Z-sample2",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=11Rq8S-1jP8I3o4Q9hY2A-sample2",
    sizeMbTextbook: 9.7,
    sizeMbWorkbook: 7.5,
    wordsCount: 154,
  },
  {
    level: 3,
    titleVi: "Giáo trình Chuẩn YCT Cấp 3 (Tập 3 & 4)",
    titleZh: "YCT 标准教程 3 & 4",
    desc: "Tích lũy 300 từ vựng nâng cao, làm quen bài đọc ngắn, câu phức và cấu trúc ngữ pháp giao tiếp hoàn chỉnh.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1vW5b-8yL0N_kM8lO1rTvC6Q1T0S_sample3",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=14ge0HzCiX-IudVbsMgyviOHA3kkshX2p",
    sizeMbTextbook: 11.5,
    sizeMbWorkbook: 9.8,
    wordsCount: 300,
  },
  {
    level: 4,
    titleVi: "Giáo trình Chuẩn YCT Cấp 4 (Tập 5 & 6)",
    titleZh: "YCT 标准教程 5 & 6",
    desc: "Đạt mốc 600 từ vựng cao nhất bậc YCT, tương đương chuẩn đầu vào học sinh quốc tế tự tin du học ngắn hạn.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1caMjV9SogFRzbY8wcxK4znvonSdiek_d",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=1kc7Y0jCieM2jKOHb9HDHv66tPy7LwMj7",
    sizeMbTextbook: 14.8,
    sizeMbWorkbook: 12.2,
    wordsCount: 600,
  },
];

export function toVocabularyWord(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct1",
    hskLevel: "HSK1",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

const STORAGE_KEY = "hanyu.yct1.progress.v1";

export interface YctProgress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYctProgress(): YctProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as YctProgress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYctProgress(progress: YctProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord(wordId: string): YctProgress {
  const current = getYctProgress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];
  
  const xpGain = exists ? 0 : 5;
  const earnedXp = exists
    ? 0
    : awardXp(`yct:1:word:${encodeURIComponent(wordId)}`, "yct", xpGain);
  const updated: YctProgress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + earnedXp,
  };
  saveYctProgress(updated);
  return updated;
}

export function recordQuizCompletion(score: number, total: number): { progress: YctProgress; earnedXp: number } {
  const current = getYctProgress();
  const reward = total > 0 ? Math.round((score / total) * 30) : 0;
  const earnedXp = reward > 0 ? awardDailyXp("yct:1:quiz", "yct", reward) : 0;
  const updated: YctProgress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYctProgress(updated);
  return { progress: updated, earnedXp };
}

export interface YctQuizQuestion {
  id: string;
  type: "meaning" | "pinyin" | "listen";
  prompt: string;
  hanzi: string;
  pinyin: string;
  audioText: string;
  options: string[];
  correctAnswer: string;
  word: YctWord;
}

export function generateYctQuiz(
  lessonNumber?: number | "all",
  count: number = 10,
  category?: YctCategoryId
): YctQuizQuestion[] {
  let pool = YCT1_WORDS;
  if (lessonNumber && lessonNumber !== "all") {
    if (lessonNumber === 0) {
      pool = YCT1_WORDS.filter((w) => !w.lessonNumber);
    } else {
      pool = YCT1_WORDS.filter((w) => w.lessonNumber === lessonNumber);
    }
  } else if (category) {
    pool = YCT1_WORDS.filter((w) => w.category === category);
  }

  if (pool.length < 4) {
    pool = YCT1_WORDS;
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((word, idx) => {
    const types: ("meaning" | "pinyin" | "listen")[] = ["meaning", "pinyin", "listen"];
    const type = types[idx % types.length];

    const distractors = YCT1_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q-${word.id}-${idx}`,
        type: "meaning",
        prompt: "Từ này nghĩa tiếng Việt là gì bé nhỉ?",
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      };
    } else if (type === "pinyin") {
      const correct = word.pinyin;
      const options = [correct, ...distractors.map((d) => d.pinyin)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q-${word.id}-${idx}`,
        type: "pinyin",
        prompt: "Cách đọc Pinyin nào đúng cho chữ này?",
        hanzi: word.hanzi,
        pinyin: "",
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      };
    } else {
      const correct = `${word.hanzi} (${word.pinyin})`;
      const options = [
        correct,
        ...distractors.map((d) => `${d.hanzi} (${d.pinyin})`),
      ].sort(() => Math.random() - 0.5);
      return {
        id: `q-${word.id}-${idx}`,
        type: "listen",
        prompt: "Bé hãy bấm nghe loa và chọn chữ Hán đúng nhé!",
        hanzi: "🔊",
        pinyin: "",
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      };
    }
  });
}


export const YCT1_LESSONS: YctLesson[] = [
  {
    "id": "yct1-lesson-1",
    "lessonNumber": 1,
    "lessonSlug": "bai-1",
    "titleVi": "Xin chào!",
    "titleZh": "你好！",
    "wordsCount": 14,
    "wordCount": 14,
    "estMinutes": 14,
    "estimatedMinutes": 14,
    "color": "from-amber-400 to-orange-500",
    "words": [
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九",
      "十",
      "你",
      "好",
      "老师",
      "再见"
    ]
  },
  {
    "id": "yct1-lesson-2",
    "lessonNumber": 2,
    "lessonSlug": "bai-2",
    "titleVi": "Bạn tên là gì?",
    "titleZh": "你叫什么？",
    "wordsCount": 9,
    "wordCount": 9,
    "estMinutes": 9,
    "estimatedMinutes": 9,
    "color": "from-orange-400 to-rose-500",
    "words": [
      "我",
      "叫",
      "什么",
      "认识",
      "很",
      "高兴",
      "她",
      "吗",
      "不"
    ]
  },
  {
    "id": "yct1-lesson-3",
    "lessonNumber": 3,
    "lessonSlug": "bai-3",
    "titleVi": "Cậu ấy là ai?",
    "titleZh": "他是谁？",
    "wordsCount": 7,
    "wordCount": 7,
    "estMinutes": 7,
    "estimatedMinutes": 7,
    "color": "from-rose-400 to-pink-500",
    "words": [
      "他",
      "是",
      "谁",
      "哪",
      "国",
      "人",
      "中国人"
    ]
  },
  {
    "id": "yct1-lesson-4",
    "lessonNumber": 4,
    "lessonSlug": "bai-4",
    "titleVi": "Nhà tôi có bốn người",
    "titleZh": "我家有四口人。",
    "wordsCount": 12,
    "wordCount": 12,
    "estMinutes": 12,
    "estimatedMinutes": 12,
    "color": "from-pink-400 to-purple-500",
    "words": [
      "爸爸",
      "妈妈",
      "家",
      "哥哥",
      "姐姐",
      "妹妹",
      "有",
      "几",
      "口",
      "和",
      "没有",
      "个"
    ]
  },
  {
    "id": "yct1-lesson-5",
    "lessonNumber": 5,
    "lessonSlug": "bai-5",
    "titleVi": "Tôi 6 tuổi",
    "titleZh": "我6岁。",
    "wordsCount": 3,
    "wordCount": 3,
    "estMinutes": 3,
    "estimatedMinutes": 3,
    "color": "from-purple-400 to-indigo-500",
    "words": [
      "岁",
      "多大",
      "也"
    ]
  },
  {
    "id": "yct1-lesson-6",
    "lessonNumber": 6,
    "lessonSlug": "bai-6",
    "titleVi": "Bạn cao thật đấy!",
    "titleZh": "你的个子真高！",
    "wordsCount": 12,
    "wordCount": 12,
    "estMinutes": 12,
    "estimatedMinutes": 12,
    "color": "from-indigo-400 to-blue-500",
    "words": [
      "头发",
      "眼睛",
      "鼻子",
      "耳朵",
      "手",
      "的",
      "小",
      "大",
      "长",
      "个子",
      "真",
      "高"
    ]
  },
  {
    "id": "yct1-lesson-7",
    "lessonNumber": 7,
    "lessonSlug": "bai-7",
    "titleVi": "Đây là con chó của ai?",
    "titleZh": "这是谁的狗？",
    "wordsCount": 10,
    "wordCount": 10,
    "estMinutes": 10,
    "estimatedMinutes": 10,
    "color": "from-blue-400 to-cyan-500",
    "words": [
      "猫",
      "狗",
      "鱼",
      "鸟",
      "这",
      "那",
      "看",
      "这儿",
      "多",
      "那儿"
    ]
  },
  {
    "id": "yct1-lesson-8",
    "lessonNumber": 8,
    "lessonSlug": "bai-8",
    "titleVi": "Tôi đi đến cửa hàng",
    "titleZh": "我去商店。",
    "wordsCount": 8,
    "wordCount": 8,
    "estMinutes": 8,
    "estimatedMinutes": 8,
    "color": "from-cyan-400 to-teal-500",
    "words": [
      "学校",
      "商店",
      "在",
      "谢谢",
      "去",
      "你们",
      "我们",
      "哪儿"
    ]
  },
  {
    "id": "yct1-lesson-9",
    "lessonNumber": 9,
    "lessonSlug": "bai-9",
    "titleVi": "Hôm nay thứ mấy?",
    "titleZh": "今天星期几？",
    "wordsCount": 14,
    "wordCount": 14,
    "estMinutes": 14,
    "estimatedMinutes": 14,
    "color": "from-teal-400 to-emerald-500",
    "words": [
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
      "星期天",
      "生日",
      "月",
      "号",
      "今天",
      "星期",
      "明天",
      "喜欢"
    ]
  },
  {
    "id": "yct1-lesson-10",
    "lessonNumber": 10,
    "lessonSlug": "bai-10",
    "titleVi": "Bây giờ mấy giờ?",
    "titleZh": "现在几点？",
    "wordsCount": 5,
    "wordCount": 5,
    "estMinutes": 5,
    "estimatedMinutes": 5,
    "color": "from-emerald-400 to-green-500",
    "words": [
      "现在",
      "点",
      "分",
      "见",
      "早上"
    ]
  },
  {
    "id": "yct1-lesson-11",
    "lessonNumber": 11,
    "lessonSlug": "bai-11",
    "titleVi": "Bạn muốn ăn gì?",
    "titleZh": "你吃什么？",
    "wordsCount": 9,
    "wordCount": 9,
    "estMinutes": 9,
    "estimatedMinutes": 9,
    "color": "from-green-400 to-lime-500",
    "words": [
      "米饭",
      "面条",
      "苹果",
      "牛奶",
      "水",
      "吃",
      "喝",
      "爱",
      "蛋糕"
    ]
  }
];

export const YCT1_WORDS: YctWord[] = [
  {
    "id": "yct1-一",
    "hanzi": "一",
    "pinyin": "yī",
    "meaning": "một",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "我有一个妹妹",
    "examplePinyin": "Wǒ yǒu yī gè mèimei",
    "exampleVi": "Tôi có một người em gái"
  },
  {
    "id": "yct1-二",
    "hanzi": "二",
    "pinyin": "èr",
    "meaning": "hai",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "二年级",
    "examplePinyin": "èr niánjí",
    "exampleVi": "Lớp hai"
  },
  {
    "id": "yct1-三",
    "hanzi": "三",
    "pinyin": "sān",
    "meaning": "ba",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "我有三个哥哥",
    "examplePinyin": "Wǒ yǒu sān gè gēge",
    "exampleVi": "Tôi có ba người anh trai"
  },
  {
    "id": "yct1-四",
    "hanzi": "四",
    "pinyin": "sì",
    "meaning": "bốn",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "四个人",
    "examplePinyin": "sì gè rén",
    "exampleVi": "Bốn người"
  },
  {
    "id": "yct1-五",
    "hanzi": "五",
    "pinyin": "wǔ",
    "meaning": "năm",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "五个人",
    "examplePinyin": "wǔ gè rén",
    "exampleVi": "Năm người"
  },
  {
    "id": "yct1-六",
    "hanzi": "六",
    "pinyin": "liù",
    "meaning": "sáu",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "六个苹果",
    "examplePinyin": "liù gè píngguǒ",
    "exampleVi": "Sáu quả táo"
  },
  {
    "id": "yct1-七",
    "hanzi": "七",
    "pinyin": "qī",
    "meaning": "bảy",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "这家书店每个星期七天都正常营业。",
    "examplePinyin": "zhè jiā shū diàn měi gè xīng qī qī tiān dōu zhèng cháng yíng yè.",
    "exampleVi": "Nhà sách này mở cửa hoạt động bình thường cả bảy ngày mỗi tuần."
  },
  {
    "id": "yct1-八",
    "hanzi": "八",
    "pinyin": "bā",
    "meaning": "tám",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "八个人",
    "examplePinyin": "bā gè rén",
    "exampleVi": "Tám người"
  },
  {
    "id": "yct1-九",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "meaning": "chín",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "九点钟",
    "examplePinyin": "jiǔ diǎn zhōng",
    "exampleVi": "Chín giờ"
  },
  {
    "id": "yct1-十",
    "hanzi": "十",
    "pinyin": "shí",
    "meaning": "mười",
    "category": "numbers",
    "lessonNumber": 1,
    "example": "我十岁",
    "examplePinyin": "Wǒ shí suì",
    "exampleVi": "Tôi mười tuổi"
  },
  {
    "id": "yct1-你",
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaning": "bạn, ông/bà/nàng/cậu",
    "category": "pronouns",
    "lessonNumber": 1,
    "example": "你好",
    "examplePinyin": "Nǐ hǎo",
    "exampleVi": "Xin chào / Chào bạn"
  },
  {
    "id": "yct1-好",
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaning": "tốt",
    "category": "body",
    "lessonNumber": 1,
    "example": "好。",
    "examplePinyin": "hǎo",
    "exampleVi": "tốt"
  },
  {
    "id": "yct1-老师",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "meaning": "giáo viên",
    "category": "family",
    "lessonNumber": 1,
    "example": "她是我的中文老师。",
    "examplePinyin": "Tā shì wǒ de Zhōngwén lǎoshī.",
    "exampleVi": "Cô ấy là giáo viên tiếng Trung của tôi."
  },
  {
    "id": "yct1-再见",
    "hanzi": "再见",
    "pinyin": "zàijiàn",
    "meaning": "tạm biệt, chào gặp lại",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "再见，明天见",
    "examplePinyin": "Zàijiàn, míngtiān jiàn",
    "exampleVi": "Tạm biệt, gặp lại ngày mai"
  },
  {
    "id": "yct1-我",
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaning": "tôi, tao, mình",
    "category": "pronouns",
    "lessonNumber": 2,
    "example": "我是中国人",
    "examplePinyin": "Wǒ shì Zhōngguó rén",
    "exampleVi": "Tôi là người Trung Quốc"
  },
  {
    "id": "yct1-叫",
    "hanzi": "叫",
    "pinyin": "jiào",
    "meaning": "gọi, kêu, hô",
    "category": "actions",
    "lessonNumber": 2,
    "example": "你叫什么名字？",
    "examplePinyin": "Nǐ jiào shénme míngzi?",
    "exampleVi": "Bạn tên gì?"
  },
  {
    "id": "yct1-什么",
    "hanzi": "什么",
    "pinyin": "shénme",
    "meaning": "gì",
    "category": "pronouns",
    "lessonNumber": 2,
    "example": "这是什么？",
    "examplePinyin": "Zhè shì shénme?",
    "exampleVi": "Đây là cái gì?"
  },
  {
    "id": "yct1-认识",
    "hanzi": "认识",
    "pinyin": "rènshi",
    "meaning": "biết, nhận ra, quen biết",
    "category": "actions",
    "lessonNumber": 2,
    "example": "我认识他",
    "examplePinyin": "Wǒ rènshi tā",
    "exampleVi": "Tôi biết anh ấy/quen anh ấy"
  },
  {
    "id": "yct1-很",
    "hanzi": "很",
    "pinyin": "hěn",
    "meaning": "rất, lắm",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "很好",
    "examplePinyin": "hěn hǎo",
    "exampleVi": "Rất tốt / Rất tốt"
  },
  {
    "id": "yct1-高兴",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "meaning": "vui, vui vẻ",
    "category": "body",
    "lessonNumber": 2,
    "example": "我很高兴",
    "examplePinyin": "Wǒ hěn gāoxìng",
    "exampleVi": "Tôi rất vui"
  },
  {
    "id": "yct1-她",
    "hanzi": "她",
    "pinyin": "tā",
    "meaning": "cô ấy, chị ấy, bà ấy",
    "category": "pronouns",
    "lessonNumber": 2,
    "example": "她是我妹妹",
    "examplePinyin": "Tā shì wǒ mèimei",
    "exampleVi": "Cô ấy là em gái của tôi"
  },
  {
    "id": "yct1-吗",
    "hanzi": "吗",
    "pinyin": "ma",
    "meaning": "...phải không?",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "你好吗？",
    "examplePinyin": "Nǐ hǎo ma?",
    "exampleVi": "Bạn khỏe không?"
  },
  {
    "id": "yct1-不",
    "hanzi": "不",
    "pinyin": "bù",
    "meaning": "không",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "我不去",
    "examplePinyin": "Wǒ bù qù",
    "exampleVi": "Tôi không đi"
  },
  {
    "id": "yct1-他",
    "hanzi": "他",
    "pinyin": "tā",
    "meaning": "anh ấy, hắn ấy",
    "category": "pronouns",
    "lessonNumber": 3,
    "example": "他是我的哥哥",
    "examplePinyin": "Tā shì wǒ de gēge",
    "exampleVi": "Anh ấy là anh trai của tôi"
  },
  {
    "id": "yct1-是",
    "hanzi": "是",
    "pinyin": "shì",
    "meaning": "là (hệ từ)",
    "category": "grammar",
    "lessonNumber": 3,
    "example": "我是学生",
    "examplePinyin": "Wǒ shì xuésheng",
    "exampleVi": "Tôi là học sinh"
  },
  {
    "id": "yct1-谁",
    "hanzi": "谁",
    "pinyin": "shéi",
    "meaning": "ai",
    "category": "pronouns",
    "lessonNumber": 3,
    "example": "你是谁？",
    "examplePinyin": "Nǐ shì shéi?",
    "exampleVi": "Bạn là ai?"
  },
  {
    "id": "yct1-哪",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "meaning": "nào",
    "category": "pronouns",
    "lessonNumber": 3,
    "example": "哪。",
    "examplePinyin": "Nǐ shì nǎ guó rén?",
    "exampleVi": "nào"
  },
  {
    "id": "yct1-国",
    "hanzi": "国",
    "pinyin": "guó",
    "meaning": "quốc gia, nước",
    "category": "grammar",
    "lessonNumber": 3,
    "example": "中国是一个大国",
    "examplePinyin": "Zhōngguó shì yīgè dàguó",
    "exampleVi": "Trung Quốc là một nước lớn"
  },
  {
    "id": "yct1-人",
    "hanzi": "人",
    "pinyin": "rén",
    "meaning": "người",
    "category": "family",
    "lessonNumber": 3,
    "example": "我是中国人",
    "examplePinyin": "Wǒ shì Zhōng guó rén",
    "exampleVi": "Tôi là người Trung Quốc"
  },
  {
    "id": "yct1-中国人",
    "hanzi": "中国人",
    "pinyin": "zhōngguórén",
    "meaning": "Người Trung Quốc, người nước Trung Hoa",
    "category": "family",
    "lessonNumber": 3,
    "example": "他是中国人。",
    "examplePinyin": "Tā shì Zhōngguórén.",
    "exampleVi": "Anh ấy là người Trung Quốc."
  },
  {
    "id": "yct1-爸爸",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "meaning": "bố, cha",
    "category": "family",
    "lessonNumber": 4,
    "example": "这是我爸爸",
    "examplePinyin": "Zhè shì wǒ bàba",
    "exampleVi": "Đây là bố tôi"
  },
  {
    "id": "yct1-妈妈",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "meaning": "mẹ",
    "category": "family",
    "lessonNumber": 4,
    "example": "我妈妈是老师。",
    "examplePinyin": "Wǒ māma shì lǎoshī.",
    "exampleVi": "Mẹ tôi là giáo viên."
  },
  {
    "id": "yct1-家",
    "hanzi": "家",
    "pinyin": "jiā",
    "meaning": "gia đình",
    "category": "family",
    "lessonNumber": 4,
    "example": "家。",
    "examplePinyin": "jiā",
    "exampleVi": "gia đình"
  },
  {
    "id": "yct1-哥哥",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "meaning": "anh trai",
    "category": "family",
    "lessonNumber": 4,
    "example": "我哥哥比我大五岁。",
    "examplePinyin": "Wǒ gēge bǐ wǒ dà wǔ suì.",
    "exampleVi": "Anh trai tôi lớn hơn tôi năm tuổi."
  },
  {
    "id": "yct1-姐姐",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "meaning": "chị gái",
    "category": "family",
    "lessonNumber": 4,
    "example": "这是我姐姐",
    "examplePinyin": "Zhè shì wǒ jiějie",
    "exampleVi": "Đây là chị gái tôi"
  },
  {
    "id": "yct1-妹妹",
    "hanzi": "妹妹",
    "pinyin": "mèimei",
    "meaning": "em gái",
    "category": "family",
    "lessonNumber": 4,
    "example": "这是我妹妹",
    "examplePinyin": "Zhè shì wǒ mèimei",
    "exampleVi": "Đây là em gái tôi"
  },
  {
    "id": "yct1-有",
    "hanzi": "有",
    "pinyin": "yǒu",
    "meaning": "có",
    "category": "grammar",
    "lessonNumber": 4,
    "example": "我有哥哥",
    "examplePinyin": "Wǒ yǒu gēge",
    "exampleVi": "Tôi có anh trai"
  },
  {
    "id": "yct1-几",
    "hanzi": "几",
    "pinyin": "jǐ",
    "meaning": "mấy, bao nhiêu (từ hỏi số lượng)",
    "category": "numbers",
    "lessonNumber": 4,
    "example": "你多大？我二十几岁",
    "examplePinyin": "Nǐ duō dà? Wǒ èrshí jǐ suì",
    "exampleVi": "Bạn bao nhiêu tuổi? Tôi hai mươi mấy tuổi"
  },
  {
    "id": "yct1-口",
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaning": "miệng",
    "category": "body",
    "lessonNumber": 4,
    "example": "张口",
    "examplePinyin": "zhāng kǒu",
    "exampleVi": "Mở miệng"
  },
  {
    "id": "yct1-和",
    "hanzi": "和",
    "pinyin": "hé",
    "meaning": "và, với",
    "category": "grammar",
    "lessonNumber": 4,
    "example": "我和他是朋友",
    "examplePinyin": "Wǒ hé tā shì péngyǒu",
    "exampleVi": "Tôi và anh ấy là bạn bè"
  },
  {
    "id": "yct1-没有",
    "hanzi": "没有",
    "pinyin": "méiyǒu",
    "meaning": "không có, chưa",
    "category": "grammar",
    "lessonNumber": 4,
    "example": "我没有钱",
    "examplePinyin": "Wǒ méiyǒu qián",
    "exampleVi": "Tôi không có tiền"
  },
  {
    "id": "yct1-个",
    "hanzi": "个",
    "pinyin": "gè",
    "meaning": "cái, quả, con (lượng từ phổ biến nhất)",
    "category": "grammar",
    "lessonNumber": 4,
    "example": "一个人",
    "examplePinyin": "yī gè rén",
    "exampleVi": "Một người"
  },
  {
    "id": "yct1-岁",
    "hanzi": "岁",
    "pinyin": "suì",
    "meaning": "tuổi",
    "category": "grammar",
    "lessonNumber": 5,
    "example": "我今年二十岁",
    "examplePinyin": "Wǒ jīnnián èrshí suì",
    "exampleVi": "Năm nay tôi 20 tuổi"
  },
  {
    "id": "yct1-多大",
    "hanzi": "多大",
    "pinyin": "duōdà",
    "meaning": "bao nhiêu tuổi",
    "category": "pronouns",
    "lessonNumber": 5,
    "example": "多大。",
    "examplePinyin": "duōdà",
    "exampleVi": "bao nhiêu tuổi"
  },
  {
    "id": "yct1-也",
    "hanzi": "也",
    "pinyin": "yě",
    "meaning": "cũng",
    "category": "grammar",
    "lessonNumber": 5,
    "example": "我也是",
    "examplePinyin": "Wǒ yě shì",
    "exampleVi": "Tôi cũng là"
  },
  {
    "id": "yct1-头发",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "meaning": "tóc",
    "category": "body",
    "lessonNumber": 6,
    "example": "头发。",
    "examplePinyin": "tóufa",
    "exampleVi": "tóc"
  },
  {
    "id": "yct1-眼睛",
    "hanzi": "眼睛",
    "pinyin": "yǎnjing",
    "meaning": "mắt",
    "category": "body",
    "lessonNumber": 6,
    "example": "眼睛。",
    "examplePinyin": "yǎnjing",
    "exampleVi": "mắt"
  },
  {
    "id": "yct1-鼻子",
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "meaning": "mũi (cơ quan khứu giác)",
    "category": "body",
    "lessonNumber": 6,
    "example": "鼻子。",
    "examplePinyin": "Tā de bízi hěn dà",
    "exampleVi": "mũi (cơ quan khứu giác)"
  },
  {
    "id": "yct1-耳朵",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "meaning": "tai (cơ quan thính giác)",
    "category": "body",
    "lessonNumber": 6,
    "example": "耳朵。",
    "examplePinyin": "Wǒ de ěrduo téng",
    "exampleVi": "tai (cơ quan thính giác)"
  },
  {
    "id": "yct1-手",
    "hanzi": "手",
    "pinyin": "shǒu",
    "meaning": "tay",
    "category": "body",
    "lessonNumber": 6,
    "example": "我手很疼",
    "examplePinyin": "Wǒ shǒu hěn téng",
    "exampleVi": "Tay tôi rất đau"
  },
  {
    "id": "yct1-的",
    "hanzi": "的",
    "pinyin": "de",
    "meaning": "của, thuộc về",
    "category": "grammar",
    "lessonNumber": 6,
    "example": "这是我的书",
    "examplePinyin": "Zhè shì wǒ de shū",
    "exampleVi": "Đây là quyển sách của tôi"
  },
  {
    "id": "yct1-小",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "meaning": "nhỏ",
    "category": "body",
    "lessonNumber": 6,
    "example": "小。",
    "examplePinyin": "xiǎo",
    "exampleVi": "nhỏ"
  },
  {
    "id": "yct1-大",
    "hanzi": "大",
    "pinyin": "dà",
    "meaning": "to, lớn",
    "category": "body",
    "lessonNumber": 6,
    "example": "很大",
    "examplePinyin": "hěn dà",
    "exampleVi": "Rất to"
  },
  {
    "id": "yct1-长",
    "hanzi": "长",
    "pinyin": "cháng",
    "meaning": "dài",
    "category": "body",
    "lessonNumber": 6,
    "example": "长。",
    "examplePinyin": "cháng",
    "exampleVi": "dài"
  },
  {
    "id": "yct1-个子",
    "hanzi": "个子",
    "pinyin": "gèzi",
    "meaning": "chiều cao",
    "category": "body",
    "lessonNumber": 6,
    "example": "个子。",
    "examplePinyin": "gèzi",
    "exampleVi": "chiều cao"
  },
  {
    "id": "yct1-真",
    "hanzi": "真",
    "pinyin": "zhēn",
    "meaning": "thật, thật sự",
    "category": "grammar",
    "lessonNumber": 6,
    "example": "真的",
    "examplePinyin": "Zhēn de",
    "exampleVi": "Thật sự, thật"
  },
  {
    "id": "yct1-高",
    "hanzi": "高",
    "pinyin": "gāo",
    "meaning": "cao",
    "category": "body",
    "lessonNumber": 6,
    "example": "很高",
    "examplePinyin": "hěn gāo",
    "exampleVi": "Rất cao"
  },
  {
    "id": "yct1-猫",
    "hanzi": "猫",
    "pinyin": "māo",
    "meaning": "con mèo",
    "category": "animals",
    "lessonNumber": 7,
    "example": "猫。",
    "examplePinyin": "māo",
    "exampleVi": "con mèo"
  },
  {
    "id": "yct1-狗",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "meaning": "con chó",
    "category": "animals",
    "lessonNumber": 7,
    "example": "狗。",
    "examplePinyin": "gǒu",
    "exampleVi": "con chó"
  },
  {
    "id": "yct1-鱼",
    "hanzi": "鱼",
    "pinyin": "yú",
    "meaning": "cá",
    "category": "animals",
    "lessonNumber": 7,
    "example": "鱼。",
    "examplePinyin": "yú",
    "exampleVi": "cá"
  },
  {
    "id": "yct1-鸟",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "meaning": "chim",
    "category": "animals",
    "lessonNumber": 7,
    "example": "鸟。",
    "examplePinyin": "niǎo",
    "exampleVi": "chim"
  },
  {
    "id": "yct1-这",
    "hanzi": "这",
    "pinyin": "zhè",
    "meaning": "này, cái này",
    "category": "pronouns",
    "lessonNumber": 7,
    "example": "这是我的书",
    "examplePinyin": "Zhè shì wǒ de shū",
    "exampleVi": "Đây là sách của tôi"
  },
  {
    "id": "yct1-那",
    "hanzi": "那",
    "pinyin": "nà",
    "meaning": "đó",
    "category": "pronouns",
    "lessonNumber": 7,
    "example": "那。",
    "examplePinyin": "nà",
    "exampleVi": "đó"
  },
  {
    "id": "yct1-看",
    "hanzi": "看",
    "pinyin": "kàn",
    "meaning": "nhìn, xem",
    "category": "actions",
    "lessonNumber": 7,
    "example": "我看书",
    "examplePinyin": "Wǒ kàn shū",
    "exampleVi": "Tôi đọc sách"
  },
  {
    "id": "yct1-这儿",
    "hanzi": "这儿",
    "pinyin": "zhèr",
    "meaning": "ở đây",
    "category": "pronouns",
    "lessonNumber": 7,
    "example": "这儿。",
    "examplePinyin": "zhèr",
    "exampleVi": "ở đây"
  },
  {
    "id": "yct1-多",
    "hanzi": "多",
    "pinyin": "duō",
    "meaning": "nhiều",
    "category": "body",
    "lessonNumber": 7,
    "example": "多。",
    "examplePinyin": "duō",
    "exampleVi": "nhiều"
  },
  {
    "id": "yct1-那儿",
    "hanzi": "那儿",
    "pinyin": "nàr",
    "meaning": "ở đó, ở kia",
    "category": "pronouns",
    "lessonNumber": 7,
    "example": "那儿。",
    "examplePinyin": "nàr",
    "exampleVi": "ở đó, ở kia"
  },
  {
    "id": "yct1-学校",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "meaning": "Trường học, nơi dạy và học",
    "category": "school",
    "lessonNumber": 8,
    "example": "他是学校的老师。",
    "examplePinyin": "Tā shì xuéxiào de lǎoshī.",
    "exampleVi": "Anh ấy là giáo viên của trường."
  },
  {
    "id": "yct1-商店",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "meaning": "cửa hàng",
    "category": "school",
    "lessonNumber": 8,
    "example": "去商店",
    "examplePinyin": "qù shāngdiàn",
    "exampleVi": "đi cửa hàng"
  },
  {
    "id": "yct1-在",
    "hanzi": "在",
    "pinyin": "zài",
    "meaning": "ở, tại",
    "category": "grammar",
    "lessonNumber": 8,
    "example": "我在家",
    "examplePinyin": "Wǒ zài jiā",
    "exampleVi": "Tôi ở nhà"
  },
  {
    "id": "yct1-谢谢",
    "hanzi": "谢谢",
    "pinyin": "xièxie",
    "meaning": "cảm ơn",
    "category": "greetings",
    "lessonNumber": 8,
    "example": "谢谢你的帮助",
    "examplePinyin": "Xièxie nǐ de bāngzhù",
    "exampleVi": "Cảm ơn sự giúp đỡ của bạn"
  },
  {
    "id": "yct1-去",
    "hanzi": "去",
    "pinyin": "qù",
    "meaning": "đi",
    "category": "actions",
    "lessonNumber": 8,
    "example": "我去学校",
    "examplePinyin": "Wǒ qù xuéxiào",
    "exampleVi": "Tôi đi trường"
  },
  {
    "id": "yct1-你们",
    "hanzi": "你们",
    "pinyin": "nǐmen",
    "meaning": "các bạn (ngôi thứ 2 số nhiều)",
    "category": "pronouns",
    "lessonNumber": 8,
    "example": "你们好！",
    "examplePinyin": "Nǐmen hǎo!",
    "exampleVi": "Chào các bạn!"
  },
  {
    "id": "yct1-我们",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "meaning": "chúng tôi, chúng ta",
    "category": "pronouns",
    "lessonNumber": 8,
    "example": "我们是学生。",
    "examplePinyin": "Wǒmen shì xuésheng.",
    "exampleVi": "Chúng tôi là sinh viên."
  },
  {
    "id": "yct1-哪儿",
    "hanzi": "哪儿",
    "pinyin": "nǎr",
    "meaning": "ở đâu",
    "category": "pronouns",
    "lessonNumber": 8,
    "example": "哪儿。",
    "examplePinyin": "nǎr",
    "exampleVi": "ở đâu"
  },
  {
    "id": "yct1-星期一",
    "hanzi": "星期一",
    "pinyin": "xīngqīyī",
    "meaning": "thứ Hai",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期一。",
    "examplePinyin": "xīngqīyī",
    "exampleVi": "thứ Hai"
  },
  {
    "id": "yct1-星期二",
    "hanzi": "星期二",
    "pinyin": "xīngqīèr",
    "meaning": "thứ Ba",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期二。",
    "examplePinyin": "xīngqīèr",
    "exampleVi": "thứ Ba"
  },
  {
    "id": "yct1-星期三",
    "hanzi": "星期三",
    "pinyin": "xīngqīsān",
    "meaning": "thứ Tư",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "我星期三要去图书馆。",
    "examplePinyin": "Wǒ xīngqīsān yào qù túshūguǎn.",
    "exampleVi": "Tôi sẽ đi thư viện vào thứ Tư."
  },
  {
    "id": "yct1-星期四",
    "hanzi": "星期四",
    "pinyin": "xīngqīsì",
    "meaning": "thứ Năm",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期四。",
    "examplePinyin": "xīngqīsì",
    "exampleVi": "thứ Năm"
  },
  {
    "id": "yct1-星期五",
    "hanzi": "星期五",
    "pinyin": "xīngqīwǔ",
    "meaning": "thứ Sáu",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期五。",
    "examplePinyin": "xīngqīwǔ",
    "exampleVi": "thứ Sáu"
  },
  {
    "id": "yct1-星期六",
    "hanzi": "星期六",
    "pinyin": "xīngqīliù",
    "meaning": "thứ Bảy",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期六。",
    "examplePinyin": "xīngqīliù",
    "exampleVi": "thứ Bảy"
  },
  {
    "id": "yct1-星期天",
    "hanzi": "星期天",
    "pinyin": "xīngqītiān",
    "meaning": "Chủ nhật (ngày nghỉ cuối tuần)",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "星期天我不上班",
    "examplePinyin": "Xīngqītiān wǒ bù shàngbān",
    "exampleVi": "Chủ nhật tôi không đi làm"
  },
  {
    "id": "yct1-生日",
    "hanzi": "生日",
    "pinyin": "shēngrì",
    "meaning": "sinh nhật, ngày sinh",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "今天是我的生日",
    "examplePinyin": "Jīntiān shì wǒ de shēngrì",
    "exampleVi": "Hôm nay là sinh nhật của tôi"
  },
  {
    "id": "yct1-月",
    "hanzi": "月",
    "pinyin": "yuè",
    "meaning": "tháng",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "这个月很忙",
    "examplePinyin": "Zhège yuè hěn máng",
    "exampleVi": "Tháng này rất bận"
  },
  {
    "id": "yct1-号",
    "hanzi": "号",
    "pinyin": "hào",
    "meaning": "ngày (trong tháng)",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "今天是五月一号",
    "examplePinyin": "Jīntiān shì Wǔyuè yī hào",
    "exampleVi": "Hôm nay là mùng một tháng năm"
  },
  {
    "id": "yct1-今天",
    "hanzi": "今天",
    "pinyin": "jīntiān",
    "meaning": "hôm nay",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "今天天气很好",
    "examplePinyin": "Jīntiān tiānqì hěn hǎo",
    "exampleVi": "Hôm nay thời tiết rất tốt"
  },
  {
    "id": "yct1-星期",
    "hanzi": "星期",
    "pinyin": "xīngqī",
    "meaning": "tuần",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "今天星期几？",
    "examplePinyin": "Jīntiān xīngqī jǐ?",
    "exampleVi": "Hôm nay thứ mấy?"
  },
  {
    "id": "yct1-明天",
    "hanzi": "明天",
    "pinyin": "míngtiān",
    "meaning": "ngày mai",
    "category": "numbers",
    "lessonNumber": 9,
    "example": "我明天去学校",
    "examplePinyin": "Wǒ míngtiān qù xuéxiào",
    "exampleVi": "Ngày mai tôi đến trường"
  },
  {
    "id": "yct1-喜欢",
    "hanzi": "喜欢",
    "pinyin": "xǐhuan",
    "meaning": "thích (cảm xúc hướng towards, yêu thích)",
    "category": "actions",
    "lessonNumber": 9,
    "example": "我喜欢吃中国菜",
    "examplePinyin": "Wǒ xǐhuān chī Zhōngguó cài",
    "exampleVi": "Tôi thích ăn món Trung Quốc"
  },
  {
    "id": "yct1-现在",
    "hanzi": "现在",
    "pinyin": "xiànzài",
    "meaning": "bây giờ, hiện tại",
    "category": "numbers",
    "lessonNumber": 10,
    "example": "我现在很忙",
    "examplePinyin": "Wǒ xiànzài hěn máng",
    "exampleVi": "Tôi bây giờ rất bận"
  },
  {
    "id": "yct1-点",
    "hanzi": "点",
    "pinyin": "diǎn",
    "meaning": "giờ (trên đồng hồ), điểm",
    "category": "numbers",
    "lessonNumber": 10,
    "example": "现在三点",
    "examplePinyin": "Xiànzài sān diǎn",
    "exampleVi": "Bây giờ 3 giờ"
  },
  {
    "id": "yct1-分",
    "hanzi": "分",
    "pinyin": "fēn",
    "meaning": "phút, phân chia",
    "category": "numbers",
    "lessonNumber": 10,
    "example": "现在三点十分",
    "examplePinyin": "Xiànzài sān diǎn shí fēn",
    "exampleVi": "Bây giờ là 3 giờ 10 phút"
  },
  {
    "id": "yct1-见",
    "hanzi": "见",
    "pinyin": "jiàn",
    "meaning": "thấy, gặp",
    "category": "actions",
    "lessonNumber": 10,
    "example": "再见",
    "examplePinyin": "zàijiàn",
    "exampleVi": "tạm biệt, gặp lại"
  },
  {
    "id": "yct1-早上",
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "meaning": "buổi sáng (thời điểm từ khi thức dậy đến trưa)",
    "category": "numbers",
    "lessonNumber": 10,
    "example": "早上好！",
    "examplePinyin": "Zǎoshang hǎo!",
    "exampleVi": "Chào buổi sáng!"
  },
  {
    "id": "yct1-米饭",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "meaning": "cơm (gạo)",
    "category": "food",
    "lessonNumber": 11,
    "example": "我吃米饭",
    "examplePinyin": "Wǒ chī mǐfàn",
    "exampleVi": "Tôi ăn cơm"
  },
  {
    "id": "yct1-面条",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "meaning": "mì (sợi)",
    "category": "food",
    "lessonNumber": 11,
    "example": "我吃面条",
    "examplePinyin": "Wǒ chī miàntiáo",
    "exampleVi": "Tôi ăn mì"
  },
  {
    "id": "yct1-苹果",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "meaning": "Quả táo",
    "category": "food",
    "lessonNumber": 11,
    "example": "我喜欢吃苹果。",
    "examplePinyin": "Wǒ xǐhuān chī píngguǒ.",
    "exampleVi": "Tôi thích ăn táo."
  },
  {
    "id": "yct1-牛奶",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "meaning": "Sữa (bò)",
    "category": "food",
    "lessonNumber": 11,
    "example": "我每天早上都喝牛奶。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē niúnǎi.",
    "exampleVi": "Tôi uống sữa mỗi buổi sáng."
  },
  {
    "id": "yct1-水",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaning": "nước",
    "category": "food",
    "lessonNumber": 11,
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct1-吃",
    "hanzi": "吃",
    "pinyin": "chī",
    "meaning": "ăn",
    "category": "actions",
    "lessonNumber": 11,
    "example": "我吃苹果",
    "examplePinyin": "Wǒ chī píngguǒ",
    "exampleVi": "Tôi ăn táo"
  },
  {
    "id": "yct1-喝",
    "hanzi": "喝",
    "pinyin": "hē",
    "meaning": "uống",
    "category": "actions",
    "lessonNumber": 11,
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct1-爱",
    "hanzi": "爱",
    "pinyin": "ài",
    "meaning": "yêu, thích",
    "category": "actions",
    "lessonNumber": 11,
    "example": "我爱妈妈",
    "examplePinyin": "Wǒ ài māma",
    "exampleVi": "Tôi yêu mẹ"
  },
  {
    "id": "yct1-蛋糕",
    "hanzi": "蛋糕",
    "pinyin": "dàngāo",
    "meaning": "bánh",
    "category": "food",
    "lessonNumber": 11,
    "example": "蛋糕。",
    "examplePinyin": "Shēngrì dàngāo hěn hǎochī.",
    "exampleVi": "bánh"
  },
  {
    "id": "yct1-你好",
    "hanzi": "你好",
    "pinyin": "nǐ hǎo",
    "meaning": "xin chào",
    "category": "greetings",
    "example": "你好！很高兴认识你。",
    "examplePinyin": "Nǐ hǎo! Hěn gāoxìng rènshi nǐ.",
    "exampleVi": "Xin chào! Rất vui được gặp bạn."
  },
  {
    "id": "yct1-不客气",
    "hanzi": "不客气",
    "pinyin": "bú kèqi",
    "meaning": "đừng khách sáo, không có chi",
    "category": "greetings",
    "example": "谢谢你！—— 不客气。",
    "examplePinyin": "Xièxie nǐ! —— Bú kèqi.",
    "exampleVi": "Cảm ơn bạn! —— Không có chi."
  },
  {
    "id": "yct1-年",
    "hanzi": "年",
    "pinyin": "nián",
    "meaning": "năm",
    "category": "numbers",
    "example": "今年是2026年。",
    "examplePinyin": "Jīnnián shì èr líng èr liù nián.",
    "exampleVi": "Năm nay là năm 2026."
  },
  {
    "id": "yct1-弟弟",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "meaning": "em trai",
    "category": "family",
    "example": "我有一个可爱的弟弟。",
    "examplePinyin": "Wǒ yǒu yí ge kě'ài de dìdi.",
    "exampleVi": "Tôi có một người em trai đáng yêu."
  },
  {
    "id": "yct1-朋友",
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "meaning": "bạn bè",
    "category": "family",
    "example": "我们是好朋友。",
    "examplePinyin": "Wǒmen shì hǎo péngyou.",
    "exampleVi": "Chúng mình là bạn thân."
  },
  {
    "id": "yct1-名字",
    "hanzi": "名字",
    "pinyin": "míngzi",
    "meaning": "tên gọi",
    "category": "school",
    "example": "你的名字叫什么？",
    "examplePinyin": "Nǐ de míngzi jiào shénme?",
    "exampleVi": "Tên của bạn là gì?"
  },
  {
    "id": "yct1-熊猫",
    "hanzi": "熊猫",
    "pinyin": "xióngmāo",
    "meaning": "gấu trúc",
    "category": "animals",
    "example": "大熊猫真可爱！",
    "examplePinyin": "Dà xióngmāo zhēn kě'ài!",
    "exampleVi": "Gấu trúc thật là dễ thương!"
  },
  {
    "id": "yct1-包子",
    "hanzi": "包子",
    "pinyin": "bāozi",
    "meaning": "bánh bao",
    "category": "food",
    "example": "早上我吃包子。",
    "examplePinyin": "Zǎoshang wǒ chī bāozi.",
    "exampleVi": "Buổi sáng tôi ăn bánh bao."
  },
  {
    "id": "yct1-茶",
    "hanzi": "茶",
    "pinyin": "chá",
    "meaning": "trà",
    "category": "food",
    "example": "爸爸喜欢喝热茶。",
    "examplePinyin": "Bàba xǐhuan hē rè chá.",
    "exampleVi": "Bố thích uống trà nóng."
  },
  {
    "id": "yct1-嘴巴",
    "hanzi": "嘴巴",
    "pinyin": "zuǐba",
    "meaning": "miệng, mồm",
    "category": "body",
    "example": "张开嘴巴，啊——",
    "examplePinyin": "Zhāng kāi zuǐba, ā ——",
    "exampleVi": "Há miệng ra nào, a ——"
  },
  {
    "id": "yct1-少",
    "hanzi": "少",
    "pinyin": "shǎo",
    "meaning": "ít",
    "category": "body",
    "example": "盘子里苹果很少。",
    "examplePinyin": "Pánzi lǐ píngguǒ hěn shǎo.",
    "exampleVi": "Trong đĩa có rất ít táo."
  },
  {
    "id": "yct1-热",
    "hanzi": "热",
    "pinyin": "rè",
    "meaning": "nóng",
    "category": "body",
    "example": "今天天气很热。",
    "examplePinyin": "Jīntiān tiānqì hěn rè.",
    "exampleVi": "Hôm nay trời rất nóng."
  },
  {
    "id": "yct1-书",
    "hanzi": "书",
    "pinyin": "shū",
    "meaning": "sách",
    "category": "school",
    "example": "桌子上有一本书。",
    "examplePinyin": "Zhuōzi shang yǒu yì běn shū.",
    "exampleVi": "Trên bàn có một quyển sách."
  },
  {
    "id": "yct1-书包",
    "hanzi": "书包",
    "pinyin": "shūbāo",
    "meaning": "cặp sách",
    "category": "school",
    "example": "我的书包是红色的。",
    "examplePinyin": "Wǒ de shūbāo shì hóngsè de.",
    "exampleVi": "Cặp sách của tôi màu đỏ."
  },
  {
    "id": "yct1-铅笔",
    "hanzi": "铅笔",
    "pinyin": "qiānbǐ",
    "meaning": "bút chì",
    "category": "school",
    "example": "我用铅笔写字。",
    "examplePinyin": "Wǒ yòng qiānbǐ xiě zì.",
    "exampleVi": "Tôi dùng bút chì để viết chữ."
  },
  {
    "id": "yct1-桌子",
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "meaning": "cái bàn",
    "category": "school",
    "example": "小猫在桌子下面。",
    "examplePinyin": "Xiǎo māo zài zhuōzi xiàmiàn.",
    "exampleVi": "Chú mèo con ở dưới bàn."
  },
  {
    "id": "yct1-椅子",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "meaning": "cái ghế",
    "category": "school",
    "example": "请坐在椅子上。",
    "examplePinyin": "Qǐng zuò zài yǐzi shang.",
    "exampleVi": "Mời ngồi lên ghế."
  },
  {
    "id": "yct1-中国",
    "hanzi": "中国",
    "pinyin": "Zhōngguó",
    "meaning": "Trung Quốc",
    "category": "school",
    "example": "中国是一个美丽的国家。",
    "examplePinyin": "Zhōngguó shì yí ge měilì de guójiā.",
    "exampleVi": "Trung Quốc là một đất nước tươi đẹp."
  },
  {
    "id": "yct1-北京",
    "hanzi": "北京",
    "pinyin": "Běijīng",
    "meaning": "Bắc Kinh",
    "category": "school",
    "example": "我爱北京天安门。",
    "examplePinyin": "Wǒ ài Běijīng Tiān'ānmén.",
    "exampleVi": "Tôi yêu Thiên An Môn Bắc Kinh."
  },
  {
    "id": "yct1-听",
    "hanzi": "听",
    "pinyin": "tīng",
    "meaning": "nghe",
    "category": "actions",
    "example": "听老师说话。",
    "examplePinyin": "Tīng lǎoshī shuōhuà.",
    "exampleVi": "Lắng nghe cô giáo nói."
  },
  {
    "id": "yct1-说",
    "hanzi": "说",
    "pinyin": "shuō",
    "meaning": "nói",
    "category": "actions",
    "example": "你会说汉语吗？",
    "examplePinyin": "Nǐ huì shuō Hànyǔ ma?",
    "exampleVi": "Bạn có biết nói tiếng Trung không?"
  },
  {
    "id": "yct1-来",
    "hanzi": "来",
    "pinyin": "lái",
    "meaning": "đến, lại đây",
    "category": "actions",
    "example": "快来这里看！",
    "examplePinyin": "Kuài lái zhèlǐ kàn!",
    "exampleVi": "Mau đến đây xem này!"
  },
  {
    "id": "yct1-没",
    "hanzi": "没",
    "pinyin": "méi",
    "meaning": "chưa, không có",
    "category": "grammar",
    "example": "我没去过北京。",
    "examplePinyin": "Wǒ méi qùguo Běijīng.",
    "exampleVi": "Tôi chưa từng đi Bắc Kinh."
  },
  {
    "id": "yct1-了",
    "hanzi": "了",
    "pinyin": "le",
    "meaning": "rồi (trợ từ hoàn thành)",
    "category": "grammar",
    "example": "下雨了，快回家吧！",
    "examplePinyin": "Xià yǔ le, kuài huí jiā ba!",
    "exampleVi": "Mưa rồi, mau về nhà thôi!"
  },
  {
    "id": "yct1-上",
    "hanzi": "上",
    "pinyin": "shàng",
    "meaning": "trên, lên",
    "category": "grammar",
    "example": "书在桌子上。",
    "examplePinyin": "Shū zài zhuōzi shang.",
    "exampleVi": "Sách ở trên bàn."
  },
  {
    "id": "yct1-下",
    "hanzi": "下",
    "pinyin": "xià",
    "meaning": "dưới, xuống",
    "category": "grammar",
    "example": "小狗在椅子下。",
    "examplePinyin": "Xiǎo gǒu zài yǐzi xià.",
    "exampleVi": "Chú chó con ở dưới ghế."
  }
];

export const WORD_EMOJIS: Record<string, string> = {
  "一": "1️⃣",
  "二": "2️⃣",
  "三": "3️⃣",
  "四": "4️⃣",
  "五": "5️⃣",
  "六": "6️⃣",
  "七": "7️⃣",
  "八": "8️⃣",
  "九": "9️⃣",
  "十": "🔟",
  "你": "👉",
  "好": "👍",
  "老师": "👩‍🏫",
  "再见": "👋",
  "我": "🙋‍♂️",
  "叫": "📢",
  "什么": "❓",
  "认识": "🤝",
  "很": "✨",
  "高兴": "😄",
  "她": "👧",
  "吗": "❔",
  "不": "❌",
  "他": "👦",
  "是": "✅",
  "谁": "🔍",
  "哪": "🧭",
  "国": "🌐",
  "人": "👤",
  "中国人": "🇨🇳",
  "爸爸": "👨",
  "妈妈": "👩",
  "家": "🏡",
  "哥哥": "👦",
  "姐姐": "👧",
  "妹妹": "🧒",
  "弟弟": "👶",
  "朋友": "👫",
  "有": "🎁",
  "几": "🔢",
  "口": "👄",
  "和": "➕",
  "没有": "🚫",
  "个": "📦",
  "岁": "🎂",
  "多大": "🎈",
  "也": "🤝",
  "头发": "💇",
  "眼睛": "👀",
  "鼻子": "👃",
  "耳朵": "👂",
  "手": "🖐️",
  "嘴巴": "👄",
  "的": "🎀",
  "小": "🐥",
  "大": "🐘",
  "长": "📏",
  "个子": "🧍",
  "真": "🌟",
  "高": "🦒",
  "热": "🔥",
  "少": "🍒",
  "多": "🍇",
  "猫": "🐱",
  "狗": "🐶",
  "鱼": "🐟",
  "鸟": "🐦",
  "熊猫": "🐼",
  "这": "👉",
  "那": "👉",
  "看": "👀",
  "这儿": "📍",
  "那儿": "📍",
  "学校": "🏫",
  "商店": "🏪",
  "在": "📌",
  "谢谢": "🙏",
  "去": "🚶",
  "你们": "👥",
  "我们": "👨‍👩‍👧",
  "哪儿": "🗺️",
  "星期一": "📅",
  "星期二": "📅",
  "星期三": "📅",
  "星期四": "📅",
  "星期五": "📅",
  "星期六": "🏖️",
  "星期天": "🎉",
  "生日": "🎂",
  "月": "🌙",
  "号": "🔢",
  "今天": "☀️",
  "星期": "🗓️",
  "明天": "🌅",
  "年": "📆",
  "喜欢": "💖",
  "爱": "❤️",
  "现在": "⏰",
  "点": "🕐",
  "分": "⏱️",
  "见": "👀",
  "早上": "🌅",
  "米饭": "🍚",
  "面条": "🍜",
  "苹果": "🍎",
  "牛奶": "🥛",
  "水": "💧",
  "吃": "😋",
  "喝": "🥤",
  "蛋糕": "🍰",
  "包子": "🥟",
  "茶": "🍵",
  "你好": "👋",
  "不客气": "😊",
  "名字": "🏷️",
  "书": "📖",
  "书包": "🎒",
  "铅笔": "✏️",
  "桌子": "🪑",
  "椅子": "🪑",
  "中国": "🇨🇳",
  "北京": "🏯",
  "听": "🎧",
  "说": "🗣️",
  "来": "🏃",
  "没": "🚫",
  "了": "🔔",
  "上": "⬆️",
  "下": "⬇️"
};

export function getWordEmoji(word: YctWord): string {
  return WORD_EMOJIS[word.hanzi] || WORD_EMOJIS[word.id] || "✨";
}
