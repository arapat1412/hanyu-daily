// src/data/boya1Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 1 (30 bài học, 6 đơn vị)
// Thu thập chuẩn xác từ Thư viện Boya Chinese (XieHanzi) - Tổng cộng 678 từ vựng kèm Audio, Ví dụ & Âm Hán Việt.

import type { VocabularyWord } from '../types';

export interface BoyaUnit {
  unit: number;
  title: string;
  titleZh: string;
  description: string;
  lessonRange: string;
  lessons: number[];
}

export interface BoyaLesson {
  number: number;
  unit: number;
  titleZh: string;
  titlePinyin: string;
  titleVi: string;
  wordCount: number;
}

export interface BoyaVocabularyWord extends VocabularyWord {
  lesson: number;
  lessonTitle: string;
  unitTitle: string;
  exampleSentence?: {
    chinese: string;
    pinyin: string;
    vietnamese: string;
  };
}

export const BOYA1_UNITS: BoyaUnit[] = [
  {
    "unit": 1,
    "title": "Làm quen – Giới thiệu bản thân",
    "titleZh": "结识与自我介绍",
    "description": "Các bài học nhập môn giúp làm quen, chào hỏi, giới thiệu quốc tịch, trường lớp và phương vị cơ bản.",
    "lessonRange": "Bài 1 – 5",
    "lessons": [
      1,
      2,
      3,
      4,
      5
    ]
  },
  {
    "unit": 2,
    "title": "Thời gian – Sinh hoạt hằng ngày",
    "titleZh": "时间与日常生活",
    "description": "Cách nói giờ giấc, lịch trình học tập, số điện thoại, giá cả khi mua sắm và giới thiệu gia đình.",
    "lessonRange": "Bài 6 – 10",
    "lessons": [
      6,
      7,
      8,
      9,
      10
    ]
  },
  {
    "unit": 3,
    "title": "Thời tiết – Hoạt động – Sở thích",
    "titleZh": "天气、活动与爱好",
    "description": "Miêu tả các mùa và thời tiết, hành động đang tiếp diễn, hỏi đường đi, màu sắc trang phục và ngày sinh nhật.",
    "lessonRange": "Bài 11 – 15",
    "lessons": [
      11,
      12,
      13,
      14,
      15
    ]
  },
  {
    "unit": 4,
    "title": "Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "titleZh": "日常生活与交际",
    "description": "Lên kế hoạch cuối tuần, văn hóa đến thăm nhà làm khách, thói quen sinh hoạt và thăm người ốm.",
    "lessonRange": "Bài 16 – 20",
    "lessons": [
      16,
      17,
      18,
      19,
      20
    ]
  },
  {
    "unit": 5,
    "title": "Các tình huống sinh hoạt đa dạng",
    "titleZh": "丰富的生活情景",
    "description": "Tiệc tùng ăn uống, cảm cúm đi khám bệnh, thời lượng học tập, sắp xếp công việc và rèn luyện thân thể.",
    "lessonRange": "Bài 21 – 25",
    "lessons": [
      21,
      22,
      23,
      24,
      25
    ]
  },
  {
    "unit": 6,
    "title": "Giao tiếp trong học tập & Đời sống thực tế",
    "titleZh": "学习与实际生活",
    "description": "Chuẩn bị thi cử, kế hoạch nghỉ hè về quê, đánh giá kết quả học tập, đặt vé du lịch và tham gia dạ hội liên hoan.",
    "lessonRange": "Bài 26 – 30",
    "lessons": [
      26,
      27,
      28,
      29,
      30
    ]
  }
];

export const BOYA1_LESSONS: BoyaLesson[] = [
  {
    "number": 1,
    "unit": 1,
    "titleZh": "你好",
    "titlePinyin": "Nǐ hǎo",
    "titleVi": "Xin chào",
    "wordCount": 16
  },
  {
    "number": 2,
    "unit": 1,
    "titleZh": "你是哪国人",
    "titlePinyin": "Nǐ shì nǎ guó rén",
    "titleVi": "Bạn là người nước nào",
    "wordCount": 19
  },
  {
    "number": 3,
    "unit": 1,
    "titleZh": "这是你的书吗",
    "titlePinyin": "Zhè shì nǐ de shū ma",
    "titleVi": "Đây là sách của bạn phải không",
    "wordCount": 14
  },
  {
    "number": 4,
    "unit": 1,
    "titleZh": "图书馆在哪儿",
    "titlePinyin": "Túshūguǎn zài nǎr",
    "titleVi": "Thư viện ở đâu",
    "wordCount": 19
  },
  {
    "number": 5,
    "unit": 1,
    "titleZh": "清华大学在哪儿",
    "titlePinyin": "Qīnghuá Dàxué zài nǎr",
    "titleVi": "Đại học Thanh Hoa ở đâu",
    "wordCount": 20
  },
  {
    "number": 6,
    "unit": 2,
    "titleZh": "现在几点",
    "titlePinyin": "Xiànzài jǐ diǎn",
    "titleVi": "Bây giờ mấy giờ",
    "wordCount": 25
  },
  {
    "number": 7,
    "unit": 2,
    "titleZh": "明天你有课吗",
    "titlePinyin": "Míngtiān nǐ yǒu kè ma",
    "titleVi": "Ngày mai bạn có tiết học không",
    "wordCount": 25
  },
  {
    "number": 8,
    "unit": 2,
    "titleZh": "你的电话号码是多少",
    "titlePinyin": "Nǐ de diànhuà hàomǎ shì duōshao",
    "titleVi": "Số điện thoại của bạn là bao nhiêu",
    "wordCount": 25
  },
  {
    "number": 9,
    "unit": 2,
    "titleZh": "多少钱一本",
    "titlePinyin": "Duōshao qián yì běn",
    "titleVi": "Bao nhiêu tiền một quyển",
    "wordCount": 20
  },
  {
    "number": 10,
    "unit": 2,
    "titleZh": "你家有几口人",
    "titlePinyin": "Nǐ jiā yǒu jǐ kǒu rén",
    "titleVi": "Nhà bạn có mấy người",
    "wordCount": 18
  },
  {
    "number": 11,
    "unit": 3,
    "titleZh": "北京的冬天比较冷",
    "titlePinyin": "Běijīng de dōngtiān bǐjiào lěng",
    "titleVi": "Mùa đông Bắc Kinh khá lạnh",
    "wordCount": 25
  },
  {
    "number": 12,
    "unit": 3,
    "titleZh": "在干什么呢",
    "titlePinyin": "Zài gànshénme ne",
    "titleVi": "Đang làm gì đấy",
    "wordCount": 22
  },
  {
    "number": 13,
    "unit": 3,
    "titleZh": "我打算去商店买东西",
    "titlePinyin": "Wǒ dǎsuàn qù shāngdiàn mǎi dōngxi",
    "titleVi": "Tôi định đi cửa hàng mua đồ",
    "wordCount": 22
  },
  {
    "number": 14,
    "unit": 3,
    "titleZh": "你喜欢什么颜色的",
    "titlePinyin": "Nǐ xǐhuan shénme yánsè de",
    "titleVi": "Bạn thích màu gì",
    "wordCount": 25
  },
  {
    "number": 15,
    "unit": 3,
    "titleZh": "明天是我朋友的生日",
    "titlePinyin": "Míngtiān shì wǒ péngyou de shēngrì",
    "titleVi": "Ngày mai là sinh nhật bạn tôi",
    "wordCount": 21
  },
  {
    "number": 16,
    "unit": 4,
    "titleZh": "周末你干什么",
    "titlePinyin": "Zhōumò nǐ gànshénme",
    "titleVi": "Cuối tuần bạn làm gì",
    "wordCount": 24
  },
  {
    "number": 17,
    "unit": 4,
    "titleZh": "做客（一）",
    "titlePinyin": "Zuòkè (yī)",
    "titleVi": "Làm khách (Phần 1)",
    "wordCount": 26
  },
  {
    "number": 18,
    "unit": 4,
    "titleZh": "做客（二）",
    "titlePinyin": "Zuòkè (èr)",
    "titleVi": "Làm khách (Phần 2)",
    "wordCount": 27
  },
  {
    "number": 19,
    "unit": 4,
    "titleZh": "早睡早起比较好啊",
    "titlePinyin": "Zǎo shuì zǎo qǐ bǐjiào hǎo a",
    "titleVi": "Ngủ sớm dậy sớm tốt hơn nhé",
    "wordCount": 22
  },
  {
    "number": 20,
    "unit": 4,
    "titleZh": "看病人",
    "titlePinyin": "Kàn bìngrén",
    "titleVi": "Thăm người bệnh",
    "wordCount": 24
  },
  {
    "number": 21,
    "unit": 5,
    "titleZh": "中国朋友太热情了",
    "titlePinyin": "Zhōngguó péngyou tài rèqíng le",
    "titleVi": "Bạn bè Trung Quốc thật nhiệt tình",
    "wordCount": 25
  },
  {
    "number": 22,
    "unit": 5,
    "titleZh": "他感冒了",
    "titlePinyin": "Tā gǎnmào le",
    "titleVi": "Anh ấy bị cảm rồi",
    "wordCount": 24
  },
  {
    "number": 23,
    "unit": 5,
    "titleZh": "你学了多长时间汉语",
    "titlePinyin": "Nǐ xué le duō cháng shíjiān Hànyǔ",
    "titleVi": "Bạn học tiếng Trung bao lâu rồi",
    "wordCount": 24
  },
  {
    "number": 24,
    "unit": 5,
    "titleZh": "明天见",
    "titlePinyin": "Míngtiān jiàn",
    "titleVi": "Hẹn gặp lại ngày mai",
    "wordCount": 24
  },
  {
    "number": 25,
    "unit": 5,
    "titleZh": "你得多锻炼锻炼了",
    "titlePinyin": "Nǐ děi duō duànliàn duànliàn le",
    "titleVi": "Bạn cần tập luyện nhiều hơn rồi",
    "wordCount": 20
  },
  {
    "number": 26,
    "unit": 6,
    "titleZh": "快考试了",
    "titlePinyin": "Kuài kǎoshì le",
    "titleVi": "Sắp thi rồi",
    "wordCount": 29
  },
  {
    "number": 27,
    "unit": 6,
    "titleZh": "爸爸和妈妈让我回家",
    "titlePinyin": "Bàba hé māma ràng wǒ huíjiā",
    "titleVi": "Bố mẹ bảo tôi về nhà",
    "wordCount": 25
  },
  {
    "number": 28,
    "unit": 6,
    "titleZh": "考得怎么样",
    "titlePinyin": "Kǎo de zěnmeyàng",
    "titleVi": "Thi thế nào",
    "wordCount": 28
  },
  {
    "number": 29,
    "unit": 6,
    "titleZh": "你什么时候去旅行",
    "titlePinyin": "Nǐ shénme shíhou qù lǚxíng",
    "titleVi": "Khi nào bạn đi du lịch",
    "wordCount": 19
  },
  {
    "number": 30,
    "unit": 6,
    "titleZh": "我要参加联欢会",
    "titlePinyin": "Wǒ yào cānjiā liánhuānhuì",
    "titleVi": "Tôi sẽ tham gia buổi liên hoan",
    "wordCount": 21
  }
];

export const BOYA1_VOCABULARY: BoyaVocabularyWord[] = [
  {
    "id": "boya1-1-1",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "你好",
    "pinyin": "nǐhǎo",
    "sinoVietnamese": "nhĩ hảo",
    "meaning": "xin chào",
    "partOfSpeech": "Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/你好.mp3",
    "exampleSentence": {
      "chinese": "你好，很高兴认识你。",
      "pinyin": "Nǐ hǎo, hěn gāoxìng rènshi nǐ.",
      "vietnamese": "Xin chào, rất vui được làm quen với bạn."
    }
  },
  {
    "id": "boya1-1-2",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "你",
    "pinyin": "nǐ",
    "sinoVietnamese": "nhĩ",
    "meaning": "bạn",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/你.mp3",
    "exampleSentence": {
      "chinese": "你好",
      "pinyin": "Nǐ hǎo",
      "vietnamese": "Xin chào / Chào bạn"
    }
  },
  {
    "id": "boya1-1-3",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "是",
    "pinyin": "shì",
    "sinoVietnamese": "thị",
    "meaning": "là",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/是.mp3",
    "exampleSentence": {
      "chinese": "我是学生",
      "pinyin": "Wǒ shì xuésheng",
      "vietnamese": "Tôi là học sinh"
    }
  },
  {
    "id": "boya1-1-4",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "sinoVietnamese": "lão sư",
    "meaning": "giáo viên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/老师.mp3",
    "exampleSentence": {
      "chinese": "她是我的中文老师。",
      "pinyin": "Tā shì wǒ de Zhōngwén lǎoshī.",
      "vietnamese": "Cô ấy là giáo viên tiếng Trung của tôi."
    }
  },
  {
    "id": "boya1-1-5",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "吗",
    "pinyin": "ma",
    "sinoVietnamese": "ma",
    "meaning": "một từ nghi vấn",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吗.mp3",
    "exampleSentence": {
      "chinese": "你好吗？",
      "pinyin": "Nǐ hǎo ma?",
      "vietnamese": "Bạn khỏe không?"
    }
  },
  {
    "id": "boya1-1-6",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "不",
    "pinyin": "bù",
    "sinoVietnamese": "bất",
    "meaning": "không",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不.mp3",
    "exampleSentence": {
      "chinese": "我不去",
      "pinyin": "Wǒ bù qù",
      "vietnamese": "Tôi không đi"
    }
  },
  {
    "id": "boya1-1-7",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "我",
    "pinyin": "wǒ",
    "sinoVietnamese": "ngã",
    "meaning": "tôi",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/我.mp3",
    "exampleSentence": {
      "chinese": "我是中国人",
      "pinyin": "Wǒ shì Zhōngguó rén",
      "vietnamese": "Tôi là người Trung Quốc"
    }
  },
  {
    "id": "boya1-1-8",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "学生",
    "pinyin": "xuéshēng",
    "sinoVietnamese": "học sinh, sanh",
    "meaning": "sinh viên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学生.mp3",
    "exampleSentence": {
      "chinese": "我是学生",
      "pinyin": "Wǒ shì xuéshēng",
      "vietnamese": "Tôi là học sinh"
    }
  },
  {
    "id": "boya1-1-9",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "她",
    "pinyin": "tā",
    "sinoVietnamese": "tha",
    "meaning": "cô ấy",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/她.mp3",
    "exampleSentence": {
      "chinese": "她是我妹妹",
      "pinyin": "Tā shì wǒ mèimei",
      "vietnamese": "Cô ấy là em gái của tôi"
    }
  },
  {
    "id": "boya1-1-10",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "谢谢",
    "pinyin": "xièxie",
    "sinoVietnamese": "tạ tạ",
    "meaning": "cảm ơn",
    "partOfSpeech": "Động từ / Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/谢谢.mp3",
    "exampleSentence": {
      "chinese": "谢谢你的帮助",
      "pinyin": "Xièxie nǐ de bāngzhù",
      "vietnamese": "Cảm ơn sự giúp đỡ của bạn"
    }
  },
  {
    "id": "boya1-1-11",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "不客气",
    "pinyin": "bùkèqi",
    "sinoVietnamese": "bất khách khí",
    "meaning": "không có chi",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不客气.mp3",
    "exampleSentence": {
      "chinese": "谢谢——不客气",
      "pinyin": "Xièxie — Bú kèqi",
      "vietnamese": "Cảm ơn — Không có chi"
    }
  },
  {
    "id": "boya1-1-12",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "您",
    "pinyin": "nín",
    "sinoVietnamese": "nâm",
    "meaning": "ngài",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/您.mp3",
    "exampleSentence": {
      "chinese": "您好",
      "pinyin": "Nín hǎo",
      "vietnamese": "Ngài/Ông/Bà khỏe (xưng hô lịch sự)"
    }
  },
  {
    "id": "boya1-1-13",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "留学生",
    "pinyin": "liúxuéshēng",
    "sinoVietnamese": "lưu học sinh, sanh",
    "meaning": "du học sinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/留学生.mp3",
    "exampleSentence": {
      "chinese": "很多中国留学生来美国",
      "pinyin": "Hěn duō zhōng guó liú xué shēng lái měi guó",
      "vietnamese": "Nhiều du học sinh Trung Quốc đến Mỹ"
    }
  },
  {
    "id": "boya1-1-14",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "叫",
    "pinyin": "jiào",
    "sinoVietnamese": "khiếu",
    "meaning": "gọi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/叫.mp3",
    "exampleSentence": {
      "chinese": "你叫什么名字？",
      "pinyin": "Nǐ jiào shénme míngzi?",
      "vietnamese": "Bạn tên gì?"
    }
  },
  {
    "id": "boya1-1-15",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "什么",
    "pinyin": "shénme",
    "sinoVietnamese": "thậm ma",
    "meaning": "gì?",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/什么.mp3",
    "exampleSentence": {
      "chinese": "这是什么？",
      "pinyin": "Zhè shì shénme?",
      "vietnamese": "Đây là cái gì?"
    }
  },
  {
    "id": "boya1-1-16",
    "lesson": 1,
    "lessonTitle": "Bài 1: 你好 (Xin chào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "名字",
    "pinyin": "míngzi",
    "sinoVietnamese": "danh tự",
    "meaning": "tên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/名字.mp3",
    "exampleSentence": {
      "chinese": "你叫什么名字？",
      "pinyin": "Nǐ jiào shénme míngzi?",
      "vietnamese": "Bạn tên gì?"
    }
  },
  {
    "id": "boya1-2-1",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "同学",
    "pinyin": "tóngxué",
    "sinoVietnamese": "đồng học",
    "meaning": "bạn học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/同学.mp3",
    "exampleSentence": {
      "chinese": "她是我的同学。",
      "pinyin": "Tā shì wǒ de tóngxué.",
      "vietnamese": "Cô ấy là bạn học của tôi."
    }
  },
  {
    "id": "boya1-2-2",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "们",
    "pinyin": "men",
    "sinoVietnamese": "môn",
    "meaning": "một hậu tố chỉ số nhiều",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/们.mp3",
    "exampleSentence": {
      "chinese": "我们从没见过这么美的景色。",
      "pinyin": "wǒ men cóng méi jiàn guo zhè me měi de jǐng sè.",
      "vietnamese": "Chúng tôi chưa bao giờ thấy phong cảnh đẹp thế này."
    }
  },
  {
    "id": "boya1-2-3",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "来",
    "pinyin": "lái",
    "sinoVietnamese": "lai",
    "meaning": "đến",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/来.mp3",
    "exampleSentence": {
      "chinese": "他来了",
      "pinyin": "Tā lái le",
      "vietnamese": "Anh ấy đã đến"
    }
  },
  {
    "id": "boya1-2-4",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "介绍",
    "pinyin": "jièshào",
    "sinoVietnamese": "giới thiệu",
    "meaning": "giới thiệu",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/介绍.mp3",
    "exampleSentence": {
      "chinese": "让我介绍一下",
      "pinyin": "Ràng wǒ jièshǎo yīxià",
      "vietnamese": "Để tôi giới thiệu một chút"
    }
  },
  {
    "id": "boya1-2-5",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "一下",
    "pinyin": "yīxià",
    "sinoVietnamese": "nhất hạ",
    "meaning": "một lát",
    "partOfSpeech": "Lượng từ / Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一下.mp3",
    "exampleSentence": {
      "chinese": "请等一下。",
      "pinyin": "Qǐng děng yīxià.",
      "vietnamese": "Xin hãy đợi một lát."
    }
  },
  {
    "id": "boya1-2-6",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "中国",
    "pinyin": "Zhōngguó",
    "sinoVietnamese": "trung quốc",
    "meaning": "Trung Quốc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中国.mp3",
    "exampleSentence": {
      "chinese": "我来自中国",
      "pinyin": "Wǒ láizì Zhōngguó",
      "vietnamese": "Tôi đến từ Trung Quốc"
    }
  },
  {
    "id": "boya1-2-7",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "呢",
    "pinyin": "ne",
    "sinoVietnamese": "ni",
    "meaning": "một hạt cho câu hỏi đặc biệt, thay thế hoặc tu từ",
    "partOfSpeech": "Trợ từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/呢.mp3",
    "exampleSentence": {
      "chinese": "你呢",
      "pinyin": "Nǐ ne",
      "vietnamese": "Còn bạn thì sao"
    }
  },
  {
    "id": "boya1-2-8",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "也",
    "pinyin": "yě",
    "sinoVietnamese": "dã",
    "meaning": "cũng",
    "partOfSpeech": "Phó từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/也.mp3",
    "exampleSentence": {
      "chinese": "我也是",
      "pinyin": "Wǒ yě shì",
      "vietnamese": "Tôi cũng là"
    }
  },
  {
    "id": "boya1-2-9",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "sinoVietnamese": "cao hứng",
    "meaning": "vui mừng; vui vẻ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/高兴.mp3",
    "exampleSentence": {
      "chinese": "我很高兴",
      "pinyin": "Wǒ hěn gāoxìng",
      "vietnamese": "Tôi rất vui"
    }
  },
  {
    "id": "boya1-2-10",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "很",
    "pinyin": "hěn",
    "sinoVietnamese": "ngận",
    "meaning": "rất",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/很.mp3",
    "exampleSentence": {
      "chinese": "很好",
      "pinyin": "hěn hǎo",
      "vietnamese": "Rất tốt / Rất tốt"
    }
  },
  {
    "id": "boya1-2-11",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "认识",
    "pinyin": "rènshi",
    "sinoVietnamese": "nhận thức",
    "meaning": "biết",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/认识.mp3",
    "exampleSentence": {
      "chinese": "我认识他",
      "pinyin": "Wǒ rènshi tā",
      "vietnamese": "Tôi biết anh ấy/quen anh ấy"
    }
  },
  {
    "id": "boya1-2-12",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "他",
    "pinyin": "tā",
    "sinoVietnamese": "tha",
    "meaning": "anh ấy",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/他.mp3",
    "exampleSentence": {
      "chinese": "他是我的哥哥",
      "pinyin": "Tā shì wǒ de gēge",
      "vietnamese": "Anh ấy là anh trai của tôi"
    }
  },
  {
    "id": "boya1-2-13",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "人",
    "pinyin": "rén",
    "sinoVietnamese": "nhân",
    "meaning": "người",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人.mp3",
    "exampleSentence": {
      "chinese": "我是中国人",
      "pinyin": "Wǒ shì Zhōng guó rén",
      "vietnamese": "Tôi là người Trung Quốc"
    }
  },
  {
    "id": "boya1-2-14",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "国",
    "pinyin": "guó",
    "sinoVietnamese": "quốc",
    "meaning": "quốc gia",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/国.mp3",
    "exampleSentence": {
      "chinese": "中国是一个大国",
      "pinyin": "Zhōngguó shì yīgè dàguó",
      "vietnamese": "Trung Quốc là một nước lớn"
    }
  },
  {
    "id": "boya1-2-15",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "sinoVietnamese": "na",
    "meaning": "nào?",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哪.mp3",
    "exampleSentence": {
      "chinese": "你是哪国人？",
      "pinyin": "Nǐ shì nǎ guó rén?",
      "vietnamese": "Bạn người nước nào?"
    }
  },
  {
    "id": "boya1-2-16",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "的",
    "pinyin": "de",
    "sinoVietnamese": "đích",
    "meaning": "một hạt",
    "partOfSpeech": "Trợ từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/的.mp3",
    "exampleSentence": {
      "chinese": "这是我的书",
      "pinyin": "Zhè shì wǒ de shū",
      "vietnamese": "Đây là quyển sách của tôi"
    }
  },
  {
    "id": "boya1-2-17",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "姓",
    "pinyin": "xìng",
    "sinoVietnamese": "tính",
    "meaning": "họ",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/姓.mp3",
    "exampleSentence": {
      "chinese": "你姓什么",
      "pinyin": "Nǐ xìng shén me",
      "vietnamese": "Bạn họ gì"
    }
  },
  {
    "id": "boya1-2-18",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "白俄罗斯",
    "pinyin": "Báiéluósī",
    "sinoVietnamese": "bạch nga la tư",
    "meaning": "belarus",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/白俄罗斯.mp3",
    "exampleSentence": {
      "chinese": "白俄罗斯的首都是明斯克。",
      "pinyin": "Bái'éluósī de shǒudū shì Míngsīkè.",
      "vietnamese": "Thủ đô của Belarus là Minsk."
    }
  },
  {
    "id": "boya1-2-19",
    "lesson": 2,
    "lessonTitle": "Bài 2: 你是哪国人 (Bạn là người nước nào)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "俄罗斯",
    "pinyin": "Éluósī",
    "sinoVietnamese": "nga la tư",
    "meaning": "nga",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/俄罗斯.mp3",
    "exampleSentence": {
      "chinese": "俄罗斯是世界上最大的国家。",
      "pinyin": "Éluósī shì shìjiè shàng zuì dà de guójiā.",
      "vietnamese": "Nga là quốc gia lớn nhất thế giới."
    }
  },
  {
    "id": "boya1-3-1",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "那",
    "pinyin": "nà",
    "sinoVietnamese": "na",
    "meaning": "đó",
    "partOfSpeech": "Đại từ / Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/那.mp3",
    "exampleSentence": {
      "chinese": "那是谁",
      "pinyin": "Nà shì shuí",
      "vietnamese": "Đó là ai"
    }
  },
  {
    "id": "boya1-3-2",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "谁",
    "pinyin": "shéi",
    "sinoVietnamese": "thuỳ",
    "meaning": "ai",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/谁.mp3",
    "exampleSentence": {
      "chinese": "你是谁？",
      "pinyin": "Nǐ shì shéi?",
      "vietnamese": "Bạn là ai?"
    }
  },
  {
    "id": "boya1-3-3",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "书",
    "pinyin": "shū",
    "sinoVietnamese": "thư",
    "meaning": "sách",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/书.mp3",
    "exampleSentence": {
      "chinese": "这是一本书",
      "pinyin": "Zhè shì yì běn shū",
      "vietnamese": "Đây là một quyển sách"
    }
  },
  {
    "id": "boya1-3-4",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "汉语",
    "pinyin": "hànyǔ",
    "sinoVietnamese": "hán ngữ",
    "meaning": "tiếng Trung",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/汉语.mp3",
    "exampleSentence": {
      "chinese": "我在学习汉语",
      "pinyin": "Wǒ zài xuéxí Hànyǔ",
      "vietnamese": "Tôi đang học tiếng Trung"
    }
  },
  {
    "id": "boya1-3-5",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "课本",
    "pinyin": "kèběn",
    "sinoVietnamese": "khóa bản",
    "meaning": "sách giáo khoa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/课本.mp3",
    "exampleSentence": {
      "chinese": "请打开课本。",
      "pinyin": "Qǐng dǎkāi kèběn.",
      "vietnamese": "Mời mở sách giáo khoa."
    }
  },
  {
    "id": "boya1-3-6",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "词典",
    "pinyin": "cídiǎn",
    "sinoVietnamese": "từ điển",
    "meaning": "từ điển",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/词典.mp3",
    "exampleSentence": {
      "chinese": "查词典",
      "pinyin": "Chá cí diǎn",
      "vietnamese": "Tra từ điển"
    }
  },
  {
    "id": "boya1-3-7",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "就是",
    "pinyin": "jiù shì",
    "sinoVietnamese": "tựu thị",
    "meaning": "chính xác, thật sự",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/就是.mp3",
    "exampleSentence": {
      "chinese": "这就是我的汉语老师。",
      "pinyin": "Zhè jiù shì wǒ de Hànyǔ lǎoshī.",
      "vietnamese": "Đây chính là thầy giáo tiếng Trung của tôi."
    }
  },
  {
    "id": "boya1-3-8",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "日语",
    "pinyin": "Rìyǔ",
    "sinoVietnamese": "nhật ngữ",
    "meaning": "tiếng Nhật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/日语.mp3",
    "exampleSentence": {
      "chinese": "她大学专业是日语翻译。",
      "pinyin": "Tā dàxué zhuānyè shì Rìyǔ fānyì.",
      "vietnamese": "Chuyên ngành đại học của cô ấy là dịch thuật tiếng Nhật."
    }
  },
  {
    "id": "boya1-3-9",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "这",
    "pinyin": "zhè",
    "sinoVietnamese": "giá",
    "meaning": "điều này",
    "partOfSpeech": "Đại từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/这.mp3",
    "exampleSentence": {
      "chinese": "这是我的书",
      "pinyin": "Zhè shì wǒ de shū",
      "vietnamese": "Đây là sách của tôi"
    }
  },
  {
    "id": "boya1-3-10",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "杂志",
    "pinyin": "zázhì",
    "sinoVietnamese": "tạp chí",
    "meaning": "tạp chí",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/杂志.mp3",
    "exampleSentence": {
      "chinese": "我喜欢看时尚杂志。",
      "pinyin": "Wǒ xǐhuan kàn shíshàng zázhì.",
      "vietnamese": "Tôi thích đọc tạp chí thời trang."
    }
  },
  {
    "id": "boya1-3-11",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "音乐",
    "pinyin": "yīnyuè",
    "sinoVietnamese": "âm nhạc",
    "meaning": "âm nhạc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/音乐.mp3",
    "exampleSentence": {
      "chinese": "我喜欢听音乐",
      "pinyin": "Wǒ xǐ huān tīng yīn lè",
      "vietnamese": "Tôi thích nghe nhạc"
    }
  },
  {
    "id": "boya1-3-12",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "sinoVietnamese": "bằng hữu",
    "meaning": "bạn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/朋友.mp3",
    "exampleSentence": {
      "chinese": "他是我的好朋友",
      "pinyin": "Tā shì wǒ de hǎo péng you",
      "vietnamese": "Anh ấy là bạn tốt của tôi"
    }
  },
  {
    "id": "boya1-3-13",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "同屋",
    "pinyin": "tóngwū",
    "sinoVietnamese": "đồng ốc",
    "meaning": "bạn cùng phòng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/同屋.mp3",
    "exampleSentence": {
      "chinese": "我的同屋很友好。",
      "pinyin": "Wǒ de tóngwū hěn yǒuhǎo.",
      "vietnamese": "Bạn cùng phòng của tôi rất thân thiện."
    }
  },
  {
    "id": "boya1-3-14",
    "lesson": 3,
    "lessonTitle": "Bài 3: 这是你的书吗 (Đây là sách của bạn phải không)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "日本",
    "pinyin": "Rìběn",
    "sinoVietnamese": "nhật bản",
    "meaning": "nhật Bản",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/日本.mp3",
    "exampleSentence": {
      "chinese": "日本是一个岛国。",
      "pinyin": "Rìběn shì yīgè dǎoguó.",
      "vietnamese": "Nhật Bản là một quốc đảo."
    }
  },
  {
    "id": "boya1-4-1",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "请问",
    "pinyin": "qǐngwèn",
    "sinoVietnamese": "thỉnh vấn",
    "meaning": "xin hỏi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/请问.mp3",
    "exampleSentence": {
      "chinese": "请问,厕所在哪里",
      "pinyin": "Qǐng wèn, cè suǒ zài nǎ lǐ",
      "vietnamese": "Xin hỏi, nhà vệ sinh ở đâu"
    }
  },
  {
    "id": "boya1-4-2",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "图书馆",
    "pinyin": "túshūguǎn",
    "sinoVietnamese": "đồ thư quán",
    "meaning": "thư viện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/图书馆.mp3",
    "exampleSentence": {
      "chinese": "我去图书馆看书。",
      "pinyin": "Wǒ qù túshūguǎn kànshū.",
      "vietnamese": "Tôi đi thư viện đọc sách."
    }
  },
  {
    "id": "boya1-4-3",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "在",
    "pinyin": "zài",
    "sinoVietnamese": "tại",
    "meaning": "ở, tại",
    "partOfSpeech": "Giới từ / Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/在.mp3",
    "exampleSentence": {
      "chinese": "我在家",
      "pinyin": "Wǒ zài jiā",
      "vietnamese": "Tôi ở nhà"
    }
  },
  {
    "id": "boya1-4-4",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "哪儿",
    "pinyin": "nǎr",
    "sinoVietnamese": "na nhi",
    "meaning": "ở đâu",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哪儿.mp3",
    "exampleSentence": {
      "chinese": "请问，图书馆在哪儿？",
      "pinyin": "Qǐngwèn, túshūguǎn zài nǎr?",
      "vietnamese": "Xin hỏi, thư viện ở đâu?"
    }
  },
  {
    "id": "boya1-4-5",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "对不起",
    "pinyin": "duìbuqǐ",
    "sinoVietnamese": "đối bất khởi",
    "meaning": "tôi xin lỗi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对不起.mp3",
    "exampleSentence": {
      "chinese": "对不起，我错了",
      "pinyin": "Duìbuqǐ, wǒ cuò le",
      "vietnamese": "Xin lỗi, tôi sai rồi"
    }
  },
  {
    "id": "boya1-4-6",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "个",
    "pinyin": "gè",
    "sinoVietnamese": "cá",
    "meaning": "miếng, đơn vị (một từ để đo)",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/个.mp3",
    "exampleSentence": {
      "chinese": "一个人",
      "pinyin": "yī gè rén",
      "vietnamese": "Một người"
    }
  },
  {
    "id": "boya1-4-7",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "sinoVietnamese": "học hiệu",
    "meaning": "trường học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学校.mp3",
    "exampleSentence": {
      "chinese": "他是学校的老师。",
      "pinyin": "Tā shì xuéxiào de lǎoshī.",
      "vietnamese": "Anh ấy là giáo viên của trường."
    }
  },
  {
    "id": "boya1-4-8",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "知道",
    "pinyin": "zhīdào",
    "sinoVietnamese": "tri đạo",
    "meaning": "biết",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/知道.mp3",
    "exampleSentence": {
      "chinese": "我知道了",
      "pinyin": "Wǒ zhīdào le",
      "vietnamese": "Tôi đã biết rồi"
    }
  },
  {
    "id": "boya1-4-9",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "没关系",
    "pinyin": "méiguānxi",
    "sinoVietnamese": "một quan hệ",
    "meaning": "không sao",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/没关系.mp3",
    "exampleSentence": {
      "chinese": "没关系，我没事",
      "pinyin": "Méi guānxi, wǒ méi shì",
      "vietnamese": "Không sao đâu, tôi không sao"
    }
  },
  {
    "id": "boya1-4-10",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "这儿",
    "pinyin": "zhèr",
    "sinoVietnamese": "giá nhi",
    "meaning": "ở đây",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/这儿.mp3",
    "exampleSentence": {
      "chinese": "这儿的环境非常好。",
      "pinyin": "Zhèr de huánjìng fēicháng hǎo.",
      "vietnamese": "Môi trường ở đây rất tốt."
    }
  },
  {
    "id": "boya1-4-11",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "教学",
    "pinyin": "jiàoxué",
    "sinoVietnamese": "giáo học",
    "meaning": "dạy học; giảng dạy",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/教学.mp3",
    "exampleSentence": {
      "chinese": "他有丰富的教学经验",
      "pinyin": "Tā yǒu fēng fù de jiào xué jīng yàn",
      "vietnamese": "Anh ấy có nhiều kinh nghiệm dạy học"
    }
  },
  {
    "id": "boya1-4-12",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "楼",
    "pinyin": "lóu",
    "sinoVietnamese": "lâu",
    "meaning": "tòa nhà; tầng",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/楼.mp3",
    "exampleSentence": {
      "chinese": "楼房",
      "pinyin": "Lóu fáng",
      "vietnamese": "Nhà cao tầng"
    }
  },
  {
    "id": "boya1-4-13",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "那儿",
    "pinyin": "nàr",
    "sinoVietnamese": "na nhi",
    "meaning": "ở đó, ở kia",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/那儿.mp3",
    "exampleSentence": {
      "chinese": "那儿有一家中国超市。",
      "pinyin": "Nàr yǒu yì jiā Zhōngguó chāoshì.",
      "vietnamese": "Ở đằng kia có một siêu thị Trung Quốc."
    }
  },
  {
    "id": "boya1-4-14",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "宿舍",
    "pinyin": "sùshè",
    "sinoVietnamese": "túc xá",
    "meaning": "ký túc xá",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/宿舍.mp3",
    "exampleSentence": {
      "chinese": "学生住在学校宿舍里。",
      "pinyin": "Xué shēng zhù zài xué xiào sù shě lǐ.",
      "vietnamese": "Sinh viên sống trong ký túc xá của trường."
    }
  },
  {
    "id": "boya1-4-15",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "北边",
    "pinyin": "běibiān",
    "sinoVietnamese": "bắc biên",
    "meaning": "phía bắc",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/北边.mp3",
    "exampleSentence": {
      "chinese": "北边有山",
      "pinyin": "Běibiān yǒu shān",
      "vietnamese": "Phía bắc có núi"
    }
  },
  {
    "id": "boya1-4-16",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "左边",
    "pinyin": "zuǒbiān",
    "sinoVietnamese": "tả biên",
    "meaning": "bên trái",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/左边.mp3",
    "exampleSentence": {
      "chinese": "左边有一棵大树",
      "pinyin": "Zuǒbiān yǒu yī kē dàshù",
      "vietnamese": "Bên trái có một cái cây lớn"
    }
  },
  {
    "id": "boya1-4-17",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "右边",
    "pinyin": "yòubiān",
    "sinoVietnamese": "hữu biên",
    "meaning": "bên phải",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/右边.mp3",
    "exampleSentence": {
      "chinese": "右边有一家银行",
      "pinyin": "Yòubiān yǒu yījiā yínháng",
      "vietnamese": "Bên phải có một ngân hàng"
    }
  },
  {
    "id": "boya1-4-18",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "不用",
    "pinyin": "bùyòng",
    "sinoVietnamese": "bất dụng",
    "meaning": "không cần",
    "partOfSpeech": "Phó từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不用.mp3",
    "exampleSentence": {
      "chinese": "不用谢",
      "pinyin": "Bùyòng xiè",
      "vietnamese": "Không cần cảm ơn/Đừng khách sáo"
    }
  },
  {
    "id": "boya1-4-19",
    "lesson": 4,
    "lessonTitle": "Bài 4: 图书馆在哪儿 (Thư viện ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "不用谢",
    "pinyin": "búyòngxiè",
    "sinoVietnamese": "bất dụng tạ",
    "meaning": "không có gì (đáp lại lời cảm ơn)",
    "partOfSpeech": "Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不用谢.mp3",
    "exampleSentence": {
      "chinese": "“谢谢你！” “不用谢。”",
      "pinyin": "\"Xièxiè nǐ!\" \"Búyòngxiè.\"",
      "vietnamese": "\"Cảm ơn bạn!\" \"Không có gì.\""
    }
  },
  {
    "id": "boya1-5-1",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "专业",
    "pinyin": "zhuānyè",
    "sinoVietnamese": "chuyên nghiệp",
    "meaning": "chuyên nghiệp; chuyên môn",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/专业.mp3",
    "exampleSentence": {
      "chinese": "她是一个很专业的医生。",
      "pinyin": "Tā shì yīgè hěn zhuānyè de yīshēng.",
      "vietnamese": "Cô ấy là một bác sĩ rất chuyên nghiệp."
    }
  },
  {
    "id": "boya1-5-2",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "国际",
    "pinyin": "guójì",
    "sinoVietnamese": "quốc tế",
    "meaning": "quốc tế",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/国际.mp3",
    "exampleSentence": {
      "chinese": "国际机场",
      "pinyin": "Guó jì jī chǎng",
      "vietnamese": "Sân bay quốc tế"
    }
  },
  {
    "id": "boya1-5-3",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "关系",
    "pinyin": "guānxi",
    "sinoVietnamese": "quan hệ",
    "meaning": "liên quan đến; mối quan hệ, quan hệ",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/关系.mp3",
    "exampleSentence": {
      "chinese": "他们之间的关系很好。",
      "pinyin": "Tāmen zhījiān de guānxì hěn hǎo.",
      "vietnamese": "Mối quan hệ giữa họ rất tốt."
    }
  },
  {
    "id": "boya1-5-4",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "中文",
    "pinyin": "zhōngwén",
    "sinoVietnamese": "trung văn",
    "meaning": "tiếng Trung",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中文.mp3",
    "exampleSentence": {
      "chinese": "我学中文",
      "pinyin": "Wǒ xué Zhōngwén",
      "vietnamese": "Tôi học tiếng Trung"
    }
  },
  {
    "id": "boya1-5-5",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "系",
    "pinyin": "xì",
    "sinoVietnamese": "hệ",
    "meaning": "khoa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/系.mp3",
    "exampleSentence": {
      "chinese": "他是中文系的学生。",
      "pinyin": "Tā shì zhōng wén xì de xué shēng.",
      "vietnamese": "Anh ấy là sinh viên khoa Trung văn."
    }
  },
  {
    "id": "boya1-5-6",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "研究生",
    "pinyin": "yánjiūshēng",
    "sinoVietnamese": "nghiên cứu sinh, sanh",
    "meaning": "học viên cao học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/研究生.mp3",
    "exampleSentence": {
      "chinese": "我妹妹是研究生。",
      "pinyin": "Wǒ mèimei shì yánjiūshēng.",
      "vietnamese": "Em gái tôi là nghiên cứu sinh."
    }
  },
  {
    "id": "boya1-5-7",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "现代",
    "pinyin": "xiàndài",
    "sinoVietnamese": "hiện đại",
    "meaning": "hiện đại",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/现代.mp3",
    "exampleSentence": {
      "chinese": "现代生活很方便。",
      "pinyin": "Xiàndài shēnghuó hěn fāngbiàn.",
      "vietnamese": "Cuộc sống hiện đại rất tiện lợi."
    }
  },
  {
    "id": "boya1-5-8",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "文学",
    "pinyin": "wénxué",
    "sinoVietnamese": "văn học",
    "meaning": "văn học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/文学.mp3",
    "exampleSentence": {
      "chinese": "他非常喜欢中国文学。",
      "pinyin": "Tā fēi cháng xǐ huān zhōng guó wén xué.",
      "vietnamese": "Anh ấy rất thích văn học Trung Quốc."
    }
  },
  {
    "id": "boya1-5-9",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "东边",
    "pinyin": "dōngbiān",
    "sinoVietnamese": "đông biên",
    "meaning": "phía đông",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/东边.mp3",
    "exampleSentence": {
      "chinese": "太阳从东边升起",
      "pinyin": "Tàiyáng cóng dōngbiān shēngqǐ",
      "vietnamese": "Mặt trời mọc từ phía đông"
    }
  },
  {
    "id": "boya1-5-10",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "有",
    "pinyin": "yǒu",
    "sinoVietnamese": "hữu",
    "meaning": "có",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有.mp3",
    "exampleSentence": {
      "chinese": "我有哥哥",
      "pinyin": "Wǒ yǒu gēge",
      "vietnamese": "Tôi có anh trai"
    }
  },
  {
    "id": "boya1-5-11",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "时候",
    "pinyin": "shíhou",
    "sinoVietnamese": "thì hậu",
    "meaning": "thời gian",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/时候.mp3",
    "exampleSentence": {
      "chinese": "我小时候喜欢游泳",
      "pinyin": "Wǒ xiǎoshíhou xǐhuān yóuyǒng",
      "vietnamese": "Lúc nhỏ tôi thích bơi lội"
    }
  },
  {
    "id": "boya1-5-12",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "欢迎",
    "pinyin": "huānyíng",
    "sinoVietnamese": "hoan nghênh",
    "meaning": "hoan nghênh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/欢迎.mp3",
    "exampleSentence": {
      "chinese": "欢迎来到中国！",
      "pinyin": "Huān yíng lái dào zhōng guó ！",
      "vietnamese": "Hoan nghênh đến Trung Quốc!"
    }
  },
  {
    "id": "boya1-5-13",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "去",
    "pinyin": "qù",
    "sinoVietnamese": "khứ",
    "meaning": "đi",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/去.mp3",
    "exampleSentence": {
      "chinese": "我去学校",
      "pinyin": "Wǒ qù xuéxiào",
      "vietnamese": "Tôi đi trường"
    }
  },
  {
    "id": "boya1-5-14",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "卫生间",
    "pinyin": "wèishēngjiān",
    "sinoVietnamese": "vệ sinh, sanh gian",
    "meaning": "nhà vệ sinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/卫生间.mp3",
    "exampleSentence": {
      "chinese": "请问卫生间在哪里？",
      "pinyin": "Qǐngwèn wèishēngjiān zài nǎlǐ?",
      "vietnamese": "Xin hỏi nhà vệ sinh ở đâu?"
    }
  },
  {
    "id": "boya1-5-15",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "教室",
    "pinyin": "jiàoshì",
    "sinoVietnamese": "giáo thất",
    "meaning": "lớp học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/教室.mp3",
    "exampleSentence": {
      "chinese": "我们在教室上课",
      "pinyin": "Wǒ men zài jiào shì shàng kè",
      "vietnamese": "Chúng tôi học trong lớp học"
    }
  },
  {
    "id": "boya1-5-16",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "旁边",
    "pinyin": "pángbiān",
    "sinoVietnamese": "bàng biên",
    "meaning": "bên cạnh",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/旁边.mp3",
    "exampleSentence": {
      "chinese": "我站在他旁边",
      "pinyin": "Wǒ zhàn zài tā pángbiān",
      "vietnamese": "Tôi đứng bên cạnh anh ấy"
    }
  },
  {
    "id": "boya1-5-17",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "西边",
    "pinyin": "xībiān",
    "sinoVietnamese": "tây biên",
    "meaning": "phía tây",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/西边.mp3",
    "exampleSentence": {
      "chinese": "太阳在西边落下",
      "pinyin": "Tàiyáng zài xībiān luò xià",
      "vietnamese": "Mặt trời lặn ở phía tây"
    }
  },
  {
    "id": "boya1-5-18",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "对",
    "pinyin": "duì",
    "sinoVietnamese": "đối",
    "meaning": "đối với",
    "partOfSpeech": "Giới từ / Tính từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对.mp3",
    "exampleSentence": {
      "chinese": "你说得对",
      "pinyin": "Nǐ shuō de duì",
      "vietnamese": "Bạn nói đúng"
    }
  },
  {
    "id": "boya1-5-19",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "空儿",
    "pinyin": "kòngr",
    "sinoVietnamese": "không nhi",
    "meaning": "thời gian rảnh, lúc rảnh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/空儿.mp3",
    "exampleSentence": {
      "chinese": "你有空儿吗？",
      "pinyin": "Nǐ yǒu kòngr ma?",
      "vietnamese": "Bạn có rảnh không?"
    }
  },
  {
    "id": "boya1-5-20",
    "lesson": 5,
    "lessonTitle": "Bài 5: 清华大学在哪儿 (Đại học Thanh Hoa ở đâu)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Làm quen – Giới thiệu bản thân",
    "hanzi": "玩儿",
    "pinyin": "wánr",
    "sinoVietnamese": "ngoạn nhi",
    "meaning": "chơi, đi chơi, chơi đùa",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/玩儿.mp3",
    "exampleSentence": {
      "chinese": "我们一起去玩儿吧。",
      "pinyin": "Wǒmen yīqǐ qù wánr ba.",
      "vietnamese": "Chúng ta cùng đi chơi đi."
    }
  },
  {
    "id": "boya1-6-1",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "大学",
    "pinyin": "dàxué",
    "sinoVietnamese": "đại học",
    "meaning": "đại học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大学.mp3",
    "exampleSentence": {
      "chinese": "这是北京大学。",
      "pinyin": "Zhè shì Běijīng Dàxué.",
      "vietnamese": "Đây là Đại học Bắc Kinh."
    }
  },
  {
    "id": "boya1-6-2",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "sinoVietnamese": "tảo thượng",
    "meaning": "buổi sáng",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/早上.mp3",
    "exampleSentence": {
      "chinese": "早上好！",
      "pinyin": "Zǎoshang hǎo!",
      "vietnamese": "Chào buổi sáng!"
    }
  },
  {
    "id": "boya1-6-3",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "几",
    "pinyin": "jǐ",
    "sinoVietnamese": "kỉ",
    "meaning": "một vài",
    "partOfSpeech": "Số từ / Đại từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/几.mp3",
    "exampleSentence": {
      "chinese": "你多大？我二十几岁",
      "pinyin": "Nǐ duō dà? Wǒ èrshí jǐ suì",
      "vietnamese": "Bạn bao nhiêu tuổi? Tôi hai mươi mấy tuổi"
    }
  },
  {
    "id": "boya1-6-4",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "点",
    "pinyin": "diǎn",
    "sinoVietnamese": "điểm",
    "meaning": "giờ",
    "partOfSpeech": "Lượng từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点.mp3",
    "exampleSentence": {
      "chinese": "现在三点",
      "pinyin": "Xiànzài sān diǎn",
      "vietnamese": "Bây giờ 3 giờ"
    }
  },
  {
    "id": "boya1-6-5",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "上课",
    "pinyin": "shàngkè",
    "sinoVietnamese": "thượng khóa",
    "meaning": "đi học, dạy học",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上课.mp3",
    "exampleSentence": {
      "chinese": "我们在上课。",
      "pinyin": "Wǒmen zài shàngkè.",
      "vietnamese": "Chúng tôi đang trong lớp học."
    }
  },
  {
    "id": "boya1-6-6",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "大部分",
    "pinyin": "dàbùfen",
    "sinoVietnamese": "đại bộ phân, phận",
    "meaning": "phần lớn",
    "partOfSpeech": "Đại từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大部分.mp3",
    "exampleSentence": {
      "chinese": "大部分学生都喜欢运动",
      "pinyin": "Dà bù fēn xué shēng dōu xǐ huān yùn dòng",
      "vietnamese": "Đại đa số học sinh đều thích thể thao"
    }
  },
  {
    "id": "boya1-6-7",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "部分",
    "pinyin": "bùfen",
    "sinoVietnamese": "bộ phân, phận",
    "meaning": "phần",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/部分.mp3",
    "exampleSentence": {
      "chinese": "这是问题的一部分",
      "pinyin": "Zhè shì wèn tí de yī bù fēn",
      "vietnamese": "Đây là một phần của vấn đề"
    }
  },
  {
    "id": "boya1-6-8",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "sinoVietnamese": "cửu",
    "meaning": "chín",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/九.mp3",
    "exampleSentence": {
      "chinese": "九点钟",
      "pinyin": "jiǔ diǎn zhōng",
      "vietnamese": "Chín giờ"
    }
  },
  {
    "id": "boya1-6-9",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "sinoVietnamese": "ngã môn",
    "meaning": "chúng tôi",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/我们.mp3",
    "exampleSentence": {
      "chinese": "我们是学生。",
      "pinyin": "Wǒmen shì xuésheng.",
      "vietnamese": "Chúng tôi là sinh viên."
    }
  },
  {
    "id": "boya1-6-10",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "八",
    "pinyin": "bā",
    "sinoVietnamese": "bát",
    "meaning": "tám",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/八.mp3",
    "exampleSentence": {
      "chinese": "八个人",
      "pinyin": "bā gè rén",
      "vietnamese": "Tám người"
    }
  },
  {
    "id": "boya1-6-11",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "分",
    "pinyin": "fēn",
    "sinoVietnamese": "phân",
    "meaning": "sự khác biệt; phân biệt",
    "partOfSpeech": "Động từ / Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分.mp3",
    "exampleSentence": {
      "chinese": "现在三点十分",
      "pinyin": "Xiànzài sān diǎn shí fēn",
      "vietnamese": "Bây giờ là 3 giờ 10 phút"
    }
  },
  {
    "id": "boya1-6-12",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "下课",
    "pinyin": "xiàkè",
    "sinoVietnamese": "hạ khóa",
    "meaning": "kết thúc lớp học",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下课.mp3",
    "exampleSentence": {
      "chinese": "我们几点下课？",
      "pinyin": "Wǒmen jǐ diǎn xiàkè?",
      "vietnamese": "Khi nào chúng ta tan học?"
    }
  },
  {
    "id": "boya1-6-13",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "十",
    "pinyin": "shí",
    "sinoVietnamese": "thập",
    "meaning": "mười",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/十.mp3",
    "exampleSentence": {
      "chinese": "我十岁",
      "pinyin": "Wǒ shí suì",
      "vietnamese": "Tôi mười tuổi"
    }
  },
  {
    "id": "boya1-6-14",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "半",
    "pinyin": "bàn",
    "sinoVietnamese": "bán",
    "meaning": "nửa",
    "partOfSpeech": "Số từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/半.mp3",
    "exampleSentence": {
      "chinese": "半小时",
      "pinyin": "Bàn xiǎo shí",
      "vietnamese": "Nửa giờ, 30 phút"
    }
  },
  {
    "id": "boya1-6-15",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "早",
    "pinyin": "zǎo",
    "sinoVietnamese": "tảo",
    "meaning": "sớm",
    "partOfSpeech": "Phó từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/早.mp3",
    "exampleSentence": {
      "chinese": "我每天早上六点起床",
      "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng",
      "vietnamese": "Tôi mỗi ngày sáng sáu giờ thức dậy"
    }
  },
  {
    "id": "boya1-6-16",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "讲座",
    "pinyin": "jiǎngzuò",
    "sinoVietnamese": "giảng tọa",
    "meaning": "bài giảng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/讲座.mp3",
    "exampleSentence": {
      "chinese": "明天有一个学术讲座。",
      "pinyin": "Míngtiān yǒu yīgè xuéshù jiǎngzuò.",
      "vietnamese": "Ngày mai có một bài giảng học thuật."
    }
  },
  {
    "id": "boya1-6-17",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "开始",
    "pinyin": "kāishǐ",
    "sinoVietnamese": "khai thủy",
    "meaning": "bắt đầu",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开始.mp3",
    "exampleSentence": {
      "chinese": "电影开始了。",
      "pinyin": "Diànyǐng kāishǐ le.",
      "vietnamese": "Bộ phim đã bắt đầu."
    }
  },
  {
    "id": "boya1-6-18",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "六",
    "pinyin": "liù",
    "sinoVietnamese": "lục",
    "meaning": "sáu",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/六.mp3",
    "exampleSentence": {
      "chinese": "六个苹果",
      "pinyin": "liù gè píngguǒ",
      "vietnamese": "Sáu quả táo"
    }
  },
  {
    "id": "boya1-6-19",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "现在",
    "pinyin": "xiànzài",
    "sinoVietnamese": "hiện tại",
    "meaning": "bây giờ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/现在.mp3",
    "exampleSentence": {
      "chinese": "我现在很忙",
      "pinyin": "Wǒ xiànzài hěn máng",
      "vietnamese": "Tôi bây giờ rất bận"
    }
  },
  {
    "id": "boya1-6-20",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "差",
    "pinyin": "chà",
    "sinoVietnamese": "sai",
    "meaning": "khác nhau",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/差.mp3",
    "exampleSentence": {
      "chinese": "这两个很不一样，差很多",
      "pinyin": "Zhè liǎng gè hěn bù yīyàng, chà hěnduō",
      "vietnamese": "Hai cái này rất khác, khác nhiều"
    }
  },
  {
    "id": "boya1-6-21",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "一",
    "pinyin": "yī",
    "sinoVietnamese": "nhất",
    "meaning": "một",
    "partOfSpeech": "Số từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一.mp3",
    "exampleSentence": {
      "chinese": "我有一个妹妹",
      "pinyin": "Wǒ yǒu yī gè mèimei",
      "vietnamese": "Tôi có một người em gái"
    }
  },
  {
    "id": "boya1-6-22",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "刻",
    "pinyin": "kè",
    "sinoVietnamese": "khắc",
    "meaning": "một phần tư",
    "partOfSpeech": "Danh từ / Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/刻.mp3",
    "exampleSentence": {
      "chinese": "三点一刻",
      "pinyin": "Sān diǎn yī kè",
      "vietnamese": "Ba giờ mười lăm phút"
    }
  },
  {
    "id": "boya1-6-23",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "见",
    "pinyin": "jiàn",
    "sinoVietnamese": "kiến",
    "meaning": "gặp",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/见.mp3",
    "exampleSentence": {
      "chinese": "再见",
      "pinyin": "zàijiàn",
      "vietnamese": "tạm biệt, gặp lại"
    }
  },
  {
    "id": "boya1-6-24",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "五十",
    "pinyin": "wǔshí",
    "sinoVietnamese": "ngũ thập",
    "meaning": "năm mươi",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/五十.mp3",
    "exampleSentence": {
      "chinese": "我今年五十岁。",
      "pinyin": "Wǒ jīnnián wǔshí suì.",
      "vietnamese": "Năm nay tôi năm mươi tuổi."
    }
  },
  {
    "id": "boya1-6-25",
    "lesson": 6,
    "lessonTitle": "Bài 6: 现在几点 (Bây giờ mấy giờ)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "一会儿",
    "pinyin": "yīhuìr",
    "sinoVietnamese": "nhất hội, cối nhi",
    "meaning": "một lát, một chốc, một lúc",
    "partOfSpeech": "Danh từ chỉ thời gian",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一会儿.mp3",
    "exampleSentence": {
      "chinese": "请等我一会儿。",
      "pinyin": "Qǐng děng wǒ yīhuìr.",
      "vietnamese": "Xin hãy đợi tôi một lát."
    }
  },
  {
    "id": "boya1-7-1",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "有",
    "pinyin": "yǒu",
    "sinoVietnamese": "hữu",
    "meaning": "có",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有.mp3",
    "exampleSentence": {
      "chinese": "我有哥哥",
      "pinyin": "Wǒ yǒu gēge",
      "vietnamese": "Tôi có anh trai"
    }
  },
  {
    "id": "boya1-7-2",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "明天",
    "pinyin": "míngtiān",
    "sinoVietnamese": "minh thiên",
    "meaning": "ngày mai",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/明天.mp3",
    "exampleSentence": {
      "chinese": "我明天去学校",
      "pinyin": "Wǒ míngtiān qù xuéxiào",
      "vietnamese": "Ngày mai tôi đến trường"
    }
  },
  {
    "id": "boya1-7-3",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "上午",
    "pinyin": "shàngwǔ",
    "sinoVietnamese": "thượng ngọ",
    "meaning": "buổi sáng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上午.mp3",
    "exampleSentence": {
      "chinese": "我上午去上班",
      "pinyin": "Wǒ shàngwǔ qù shàngbān",
      "vietnamese": "Sáng tôi đi làm"
    }
  },
  {
    "id": "boya1-7-4",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "下午",
    "pinyin": "xiàwǔ",
    "sinoVietnamese": "hạ ngọ",
    "meaning": "buổi chiều",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下午.mp3",
    "exampleSentence": {
      "chinese": "我下午去学校",
      "pinyin": "Wǒ xiàwǔ qù xuéxiào",
      "vietnamese": "Chiều tôi đến trường"
    }
  },
  {
    "id": "boya1-7-5",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "自行车",
    "pinyin": "zìxíngchē",
    "sinoVietnamese": "tự hành xa",
    "meaning": "xe đạp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/自行车.mp3",
    "exampleSentence": {
      "chinese": "我骑自行车上班",
      "pinyin": "Wǒ qí zì xíng chē shàng bān",
      "vietnamese": "Tôi đạp xe đi làm"
    }
  },
  {
    "id": "boya1-7-6",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "吧",
    "pinyin": "ba",
    "sinoVietnamese": "ba",
    "meaning": "ba",
    "partOfSpeech": "Trợ từ / Từ tượng thanh",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吧.mp3",
    "exampleSentence": {
      "chinese": "我们去吧",
      "pinyin": "Wǒmen qù ba",
      "vietnamese": "Chúng ta đi nhé"
    }
  },
  {
    "id": "boya1-7-7",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "事",
    "pinyin": "shì",
    "sinoVietnamese": "sự",
    "meaning": "việc",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/事.mp3",
    "exampleSentence": {
      "chinese": "我有事要走",
      "pinyin": "Wǒ yǒu shì yào zǒu",
      "vietnamese": "Tôi có việc phải đi"
    }
  },
  {
    "id": "boya1-7-8",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "可是",
    "pinyin": "kěshì",
    "sinoVietnamese": "khả thị",
    "meaning": "nhưng",
    "partOfSpeech": "Liên từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可是.mp3",
    "exampleSentence": {
      "chinese": "我很想去，可是太忙了",
      "pinyin": "Wǒ hěn xiǎng qù, kě shì tài máng le",
      "vietnamese": "Tôi rất muốn đi, nhưng quá bận"
    }
  },
  {
    "id": "boya1-7-9",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "钥匙",
    "pinyin": "yàoshi",
    "sinoVietnamese": "thược thi",
    "meaning": "chìa khóa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/钥匙.mp3",
    "exampleSentence": {
      "chinese": "我的钥匙丢了。",
      "pinyin": "Wǒ de yàoshi diū le.",
      "vietnamese": "Chìa khóa của tôi bị mất."
    }
  },
  {
    "id": "boya1-7-10",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "车",
    "pinyin": "chē",
    "sinoVietnamese": "xa",
    "meaning": "xe",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/车.mp3",
    "exampleSentence": {
      "chinese": "汽车",
      "pinyin": "Qì chē",
      "vietnamese": "Ô tô, xe hơi"
    }
  },
  {
    "id": "boya1-7-11",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "下",
    "pinyin": "xià",
    "sinoVietnamese": "hạ",
    "meaning": "sau",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下.mp3",
    "exampleSentence": {
      "chinese": "请往下看",
      "pinyin": "Qǐng wǎng xià kàn",
      "vietnamese": "Xin hãy nhìn xuống dưới"
    }
  },
  {
    "id": "boya1-7-12",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "里",
    "pinyin": "lǐ",
    "sinoVietnamese": "lí",
    "meaning": "trong",
    "partOfSpeech": "Từ chỉ phương vị / Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/里.mp3",
    "exampleSentence": {
      "chinese": "房间里有人在",
      "pinyin": "Fángjiān lǐ yǒu rén zài",
      "vietnamese": "Trong phòng có người"
    }
  },
  {
    "id": "boya1-7-13",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "后边",
    "pinyin": "hòubiān",
    "sinoVietnamese": "hậu biên",
    "meaning": "đằng sau",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/后边.mp3",
    "exampleSentence": {
      "chinese": "他在我后边",
      "pinyin": "Tā zài wǒ hòubiān",
      "vietnamese": "Anh ấy ở đằng sau tôi"
    }
  },
  {
    "id": "boya1-7-14",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "今天",
    "pinyin": "jīntiān",
    "sinoVietnamese": "kim thiên",
    "meaning": "hôm nay",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/今天.mp3",
    "exampleSentence": {
      "chinese": "今天天气很好",
      "pinyin": "Jīntiān tiānqì hěn hǎo",
      "vietnamese": "Hôm nay thời tiết rất tốt"
    }
  },
  {
    "id": "boya1-7-15",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "晚上",
    "pinyin": "wǎnshang",
    "sinoVietnamese": "vãn thượng",
    "meaning": "buổi tối",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚上.mp3",
    "exampleSentence": {
      "chinese": "我晚上在家",
      "pinyin": "Wǒ wǎnshang zài jiā",
      "vietnamese": "Tối tôi ở nhà"
    }
  },
  {
    "id": "boya1-7-16",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "时间",
    "pinyin": "shíjiān",
    "sinoVietnamese": "thì gian",
    "meaning": "thời gian",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/时间.mp3",
    "exampleSentence": {
      "chinese": "我没有时间",
      "pinyin": "Wǒ méiyǒu shíjiān",
      "vietnamese": "Tôi không có thời gian"
    }
  },
  {
    "id": "boya1-7-17",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "电影院",
    "pinyin": "diànyǐngyuàn",
    "sinoVietnamese": "điện ảnh viện",
    "meaning": "rạp chiếu phim",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电影院.mp3",
    "exampleSentence": {
      "chinese": "我们去电影院看电影吧",
      "pinyin": "Wǒmen qù diànyǐngyuàn kàn diànyǐng ba",
      "vietnamese": "Chúng ta đi rạp xem phim nhé"
    }
  },
  {
    "id": "boya1-7-18",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "电影",
    "pinyin": "diànyǐng",
    "sinoVietnamese": "điện ảnh",
    "meaning": "phim",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电影.mp3",
    "exampleSentence": {
      "chinese": "我看了一部电影",
      "pinyin": "Wǒ kànle yī bù diànyǐng",
      "vietnamese": "Tôi đã xem một bộ phim"
    }
  },
  {
    "id": "boya1-7-19",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "听说",
    "pinyin": "tīngshuō",
    "sinoVietnamese": "thính thuyết",
    "meaning": "nghe nói",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听说.mp3",
    "exampleSentence": {
      "chinese": "我听说他是中国人。",
      "pinyin": "Wǒ tīngshuō tā shì Zhōngguó rén.",
      "vietnamese": "Tôi nghe nói anh ấy là người Trung Quốc."
    }
  },
  {
    "id": "boya1-7-20",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "有名",
    "pinyin": "yǒumíng",
    "sinoVietnamese": "hữu danh",
    "meaning": "nổi tiếng",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有名.mp3",
    "exampleSentence": {
      "chinese": "北京烤鸭很有名。",
      "pinyin": "Běijīng kǎoyā hěn yǒumíng.",
      "vietnamese": "Vịt quay Bắc Kinh rất nổi tiếng."
    }
  },
  {
    "id": "boya1-7-21",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "当然",
    "pinyin": "dāngrán",
    "sinoVietnamese": "đương nhiên",
    "meaning": "tất nhiên",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/当然.mp3",
    "exampleSentence": {
      "chinese": "你当然可以参加这个活动。",
      "pinyin": "Nǐ dāngrán kěyǐ cānjiā zhège huódòng.",
      "vietnamese": "Bạn tất nhiên có thể tham gia hoạt động này."
    }
  },
  {
    "id": "boya1-7-22",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "课",
    "pinyin": "kè",
    "sinoVietnamese": "khóa",
    "meaning": "bài học",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/课.mp3",
    "exampleSentence": {
      "chinese": "上课",
      "pinyin": "Shàng kè",
      "vietnamese": "Vào lớp"
    }
  },
  {
    "id": "boya1-7-23",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "没",
    "pinyin": "méi",
    "sinoVietnamese": "một",
    "meaning": "không có",
    "partOfSpeech": "Phó từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/没.mp3",
    "exampleSentence": {
      "chinese": "我没去",
      "pinyin": "Wǒ méi qù",
      "vietnamese": "Tôi chưa/đã không đi"
    }
  },
  {
    "id": "boya1-7-24",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "没问题",
    "pinyin": "méi wèntí",
    "sinoVietnamese": "một vấn đề",
    "meaning": "không vấn đề gì, được thôi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/没问题.mp3",
    "exampleSentence": {
      "chinese": "“你能帮我吗？” “没问题。”",
      "pinyin": "\"Nǐ néng bāng wǒ ma?\" \"Méi wèntí.\"",
      "vietnamese": "\"Bạn có thể giúp tôi không?\" \"Không vấn đề gì.\""
    }
  },
  {
    "id": "boya1-7-25",
    "lesson": 7,
    "lessonTitle": "Bài 7: 明天你有课吗 (Ngày mai bạn có tiết học không)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "车棚",
    "pinyin": "chēpéng",
    "sinoVietnamese": "xa bằng",
    "meaning": "nhà để xe (đạp, máy), mái che xe",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/车棚.mp3",
    "exampleSentence": {
      "chinese": "我把自行车停在车棚里。",
      "pinyin": "Wǒ bǎ zìxíngchē tíng zài chēpéng lǐ.",
      "vietnamese": "Tôi để xe đạp trong nhà để xe."
    }
  },
  {
    "id": "boya1-8-1",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "周末",
    "pinyin": "zhōumò",
    "sinoVietnamese": "chu, châu mạt",
    "meaning": "cuối tuần",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/周末.mp3",
    "exampleSentence": {
      "chinese": "周末你做什么",
      "pinyin": "Zhōu mò nǐ zuò shén me",
      "vietnamese": "Cuối tuần bạn làm gì"
    }
  },
  {
    "id": "boya1-8-2",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "啊",
    "pinyin": "a",
    "sinoVietnamese": "a",
    "meaning": "a",
    "partOfSpeech": "Trợ từ / Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/啊.mp3",
    "exampleSentence": {
      "chinese": "是啊",
      "pinyin": "Shì a",
      "vietnamese": "Vậy ạ/đúng vậy"
    }
  },
  {
    "id": "boya1-8-3",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "不过",
    "pinyin": "bùguò",
    "sinoVietnamese": "bất quá",
    "meaning": "nhưng",
    "partOfSpeech": "Liên từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不过.mp3",
    "exampleSentence": {
      "chinese": "这件衣服很漂亮，不过太贵了",
      "pinyin": "Zhè jiàn yī fú hěn piāo liàng, bù guò tài guì le",
      "vietnamese": "Cái áo này rất đẹp, nhưng quá đắt"
    }
  },
  {
    "id": "boya1-8-4",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "sinoVietnamese": "chẩm ma",
    "meaning": "sao? Tại sao?",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怎么.mp3",
    "exampleSentence": {
      "chinese": "你怎么去？",
      "pinyin": "Nǐ zěnme qù?",
      "vietnamese": "Bạn đi thế nào?"
    }
  },
  {
    "id": "boya1-8-5",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "走",
    "pinyin": "zǒu",
    "sinoVietnamese": "tẩu",
    "meaning": "đi bộ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/走.mp3",
    "exampleSentence": {
      "chinese": "我走去学校",
      "pinyin": "Wǒ zǒu qù xué xiào",
      "vietnamese": "Tôi đi bộ đến trường"
    }
  },
  {
    "id": "boya1-8-6",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "路",
    "pinyin": "lù",
    "sinoVietnamese": "lộ",
    "meaning": "đường",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/路.mp3",
    "exampleSentence": {
      "chinese": "走路",
      "pinyin": "Zǒu lù",
      "vietnamese": "Đi bộ, đi đường"
    }
  },
  {
    "id": "boya1-8-7",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "和",
    "pinyin": "hé",
    "sinoVietnamese": "hoà",
    "meaning": "và",
    "partOfSpeech": "Liên từ / Giới từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/和.mp3",
    "exampleSentence": {
      "chinese": "我和他是朋友",
      "pinyin": "Wǒ hé tā shì péngyǒu",
      "vietnamese": "Tôi và anh ấy là bạn bè"
    }
  },
  {
    "id": "boya1-8-8",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "公共汽车",
    "pinyin": "gōnggòng qìchē",
    "sinoVietnamese": "công cộng khí xa",
    "meaning": "xe buýt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/公共汽车.mp3",
    "exampleSentence": {
      "chinese": "我每天坐公共汽车上班",
      "pinyin": "Wǒ měi tiān zuò gōng gòng qì chē shàng bān",
      "vietnamese": "Tôi hàng ngày ngồi xe buýt đi làm"
    }
  },
  {
    "id": "boya1-8-9",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "都",
    "pinyin": "dōu",
    "sinoVietnamese": "đô",
    "meaning": "tất cả",
    "partOfSpeech": "Phó từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/都.mp3",
    "exampleSentence": {
      "chinese": "我们都喜欢中文",
      "pinyin": "Wǒmen dōu xǐhuan Zhōngwén",
      "vietnamese": "Chúng tôi đều thích tiếng Trung"
    }
  },
  {
    "id": "boya1-8-10",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "到",
    "pinyin": "dào",
    "sinoVietnamese": "đáo",
    "meaning": "đến",
    "partOfSpeech": "Động từ / Giới từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/到.mp3",
    "exampleSentence": {
      "chinese": "我到了",
      "pinyin": "Wǒ dào le",
      "vietnamese": "Tôi đã đến nơi"
    }
  },
  {
    "id": "boya1-8-11",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "骑",
    "pinyin": "qí",
    "sinoVietnamese": "kỵ",
    "meaning": "cưỡi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/骑.mp3",
    "exampleSentence": {
      "chinese": "我会骑自行车",
      "pinyin": "Wǒ huì qí zì xíng chē",
      "vietnamese": "Tôi biết cưỡi xe đạp"
    }
  },
  {
    "id": "boya1-8-12",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "快",
    "pinyin": "kuài",
    "sinoVietnamese": "khoái",
    "meaning": "nhanh",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/快.mp3",
    "exampleSentence": {
      "chinese": "请快一点",
      "pinyin": "Qǐng kuài yīdiǎn",
      "vietnamese": "Xin nhanh một chút"
    }
  },
  {
    "id": "boya1-8-13",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "分钟",
    "pinyin": "fēnzhōng",
    "sinoVietnamese": "phân chung",
    "meaning": "phút",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分钟.mp3",
    "exampleSentence": {
      "chinese": "还有五分钟",
      "pinyin": "Hái yǒu wǔ fēnzhōng",
      "vietnamese": "Còn năm phút nữa"
    }
  },
  {
    "id": "boya1-8-14",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "就",
    "pinyin": "jiù",
    "sinoVietnamese": "tựu",
    "meaning": "ngay lập tức",
    "partOfSpeech": "Phó từ / Động từ / Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/就.mp3",
    "exampleSentence": {
      "chinese": "我就去",
      "pinyin": "Wǒ jiù qù",
      "vietnamese": "Tôi đi ngay/đâu phải đi"
    }
  },
  {
    "id": "boya1-8-15",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "校园",
    "pinyin": "xiàoyuán",
    "sinoVietnamese": "hiệu viên",
    "meaning": "khuôn viên trường",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/校园.mp3",
    "exampleSentence": {
      "chinese": "校园很美",
      "pinyin": "Xiào yuán hěn měi",
      "vietnamese": "Khuôn viên trường rất đẹp"
    }
  },
  {
    "id": "boya1-8-16",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "东南",
    "pinyin": "dōngnán",
    "sinoVietnamese": "đông nam",
    "meaning": "đông nam",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/东南.mp3",
    "exampleSentence": {
      "chinese": "东南方向",
      "pinyin": "Dōng nán fāng xiàng",
      "vietnamese": "Hướng đông nam"
    }
  },
  {
    "id": "boya1-8-17",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "东",
    "pinyin": "dōng",
    "sinoVietnamese": "đông",
    "meaning": "đông",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/东.mp3",
    "exampleSentence": {
      "chinese": "东边",
      "pinyin": "dōngbiān",
      "vietnamese": "phía đông, bên phía đông"
    }
  },
  {
    "id": "boya1-8-18",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "号",
    "pinyin": "hào",
    "sinoVietnamese": "hiệu",
    "meaning": "ngày",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/号.mp3",
    "exampleSentence": {
      "chinese": "今天是五月一号",
      "pinyin": "Jīntiān shì Wǔyuè yī hào",
      "vietnamese": "Hôm nay là mùng một tháng năm"
    }
  },
  {
    "id": "boya1-8-19",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "房间",
    "pinyin": "fángjiān",
    "sinoVietnamese": "phòng gian",
    "meaning": "phòng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/房间.mp3",
    "exampleSentence": {
      "chinese": "这是我的房间",
      "pinyin": "Zhè shì wǒ de fángjiān",
      "vietnamese": "Đây là phòng của tôi"
    }
  },
  {
    "id": "boya1-8-20",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "多少",
    "pinyin": "duōshao",
    "sinoVietnamese": "đa thiểu, thiếu",
    "meaning": "bao nhiêu",
    "partOfSpeech": "Đại từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/多少.mp3",
    "exampleSentence": {
      "chinese": "你有多少钱？",
      "pinyin": "Nǐ yǒu duōshǎo qián?",
      "vietnamese": "Bạn có bao nhiêu tiền?"
    }
  },
  {
    "id": "boya1-8-21",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "室",
    "pinyin": "shì",
    "sinoVietnamese": "thất",
    "meaning": "phòng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/室.mp3",
    "exampleSentence": {
      "chinese": "我的宿舍在302室。",
      "pinyin": "Wǒ de sùshè zài 302 shì.",
      "vietnamese": "Phòng ký túc xá của tôi ở phòng 302."
    }
  },
  {
    "id": "boya1-8-22",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "电话",
    "pinyin": "diànhuà",
    "sinoVietnamese": "điện thoại",
    "meaning": "điện thoại",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电话.mp3",
    "exampleSentence": {
      "chinese": "我的电话号码",
      "pinyin": "Wǒ de diànhuà hàomǎ",
      "vietnamese": "Số điện thoại của tôi"
    }
  },
  {
    "id": "boya1-8-23",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "号码",
    "pinyin": "hàomǎ",
    "sinoVietnamese": "hiệu mã",
    "meaning": "số",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/号码.mp3",
    "exampleSentence": {
      "chinese": "请告诉我你的电话号码。",
      "pinyin": "Qǐng gàosù wǒ nǐ de diànhuà hàomǎ.",
      "vietnamese": "Hãy cho tôi biết số điện thoại của bạn."
    }
  },
  {
    "id": "boya1-8-24",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "手机",
    "pinyin": "shǒujī",
    "sinoVietnamese": "thủ cơ",
    "meaning": "điện thoại di động",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/手机.mp3",
    "exampleSentence": {
      "chinese": "我的手机没电了",
      "pinyin": "Wǒ de shǒujī méidiàn le",
      "vietnamese": "Điện thoại của tôi hết pin rồi"
    }
  },
  {
    "id": "boya1-8-25",
    "lesson": 8,
    "lessonTitle": "Bài 8: 你的电话号码是多少 (Số điện thoại của bạn là bao nhiêu)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "等",
    "pinyin": "děng",
    "sinoVietnamese": "đẳng",
    "meaning": "đợi",
    "partOfSpeech": "Động từ / Danh từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/等.mp3",
    "exampleSentence": {
      "chinese": "请等一下",
      "pinyin": "Qǐng děng yīxià",
      "vietnamese": "Xin hãy đợi một chút"
    }
  },
  {
    "id": "boya1-9-1",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "师傅",
    "pinyin": "shī fu",
    "sinoVietnamese": "sư phó, phụ",
    "meaning": "thầy, công nhân lành nghề",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/师傅.mp3",
    "exampleSentence": {
      "chinese": "他是我的书法师傅。",
      "pinyin": "Tā shì wǒ de shūfǎ shīfu.",
      "vietnamese": "Anh ấy là thầy thư pháp của tôi."
    }
  },
  {
    "id": "boya1-9-2",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "买",
    "pinyin": "mǎi",
    "sinoVietnamese": "mãi",
    "meaning": "mua",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/买.mp3",
    "exampleSentence": {
      "chinese": "我要买书",
      "pinyin": "Wǒ yào mǎi shū",
      "vietnamese": "Tôi muốn mua sách"
    }
  },
  {
    "id": "boya1-9-3",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "啤酒",
    "pinyin": "píjiǔ",
    "sinoVietnamese": "ti tửu",
    "meaning": "bia",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/啤酒.mp3",
    "exampleSentence": {
      "chinese": "夏天喝啤酒很舒服。",
      "pinyin": "Xiàtiān hē píjiǔ hěn shūfu.",
      "vietnamese": "Mùa hè uống bia rất thoải mái."
    }
  },
  {
    "id": "boya1-9-4",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "售货员",
    "pinyin": "shòuhuòyuán",
    "sinoVietnamese": "thụ hóa viên",
    "meaning": "nhân viên bán hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/售货员.mp3",
    "exampleSentence": {
      "chinese": "售货员态度很好。",
      "pinyin": "Shòuhuòyuán tàidù hěn hǎo.",
      "vietnamese": "Nhân viên bán hàng thái độ rất tốt."
    }
  },
  {
    "id": "boya1-9-5",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "瓶",
    "pinyin": "píng",
    "sinoVietnamese": "bình",
    "meaning": "chai",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/瓶.mp3",
    "exampleSentence": {
      "chinese": "一瓶水",
      "pinyin": "Yī píng shuǐ",
      "vietnamese": "Một chai nước"
    }
  },
  {
    "id": "boya1-9-6",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "钱",
    "pinyin": "qián",
    "sinoVietnamese": "tiền",
    "meaning": "tiền",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/钱.mp3",
    "exampleSentence": {
      "chinese": "我没钱了",
      "pinyin": "Wǒ méiqián le",
      "vietnamese": "Tôi hết tiền rồi"
    }
  },
  {
    "id": "boya1-9-7",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "块",
    "pinyin": "kuài",
    "sinoVietnamese": "khối",
    "meaning": "miếng",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/块.mp3",
    "exampleSentence": {
      "chinese": "一块钱",
      "pinyin": "yí kuài qián",
      "vietnamese": "một đồng (tiền)"
    }
  },
  {
    "id": "boya1-9-8",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "两",
    "pinyin": "liǎng",
    "sinoVietnamese": "lưỡng, lượng, lạng",
    "meaning": "hai",
    "partOfSpeech": "Số từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/两.mp3",
    "exampleSentence": {
      "chinese": "我有两本书",
      "pinyin": "Wǒ yǒu liǎng běn shū",
      "vietnamese": "Tôi có hai cuốn sách"
    }
  },
  {
    "id": "boya1-9-9",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "再",
    "pinyin": "zài",
    "sinoVietnamese": "tái",
    "meaning": "lại",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/再.mp3",
    "exampleSentence": {
      "chinese": "再见",
      "pinyin": "Zài jiàn",
      "vietnamese": "Tạm biệt (gặp lại)"
    }
  },
  {
    "id": "boya1-9-10",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "sinoVietnamese": "thủy",
    "meaning": "nước",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/水.mp3",
    "exampleSentence": {
      "chinese": "我喝水",
      "pinyin": "Wǒ hē shuǐ",
      "vietnamese": "Tôi uống nước"
    }
  },
  {
    "id": "boya1-9-11",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "一共",
    "pinyin": "yīgòng",
    "sinoVietnamese": "nhất cộng",
    "meaning": "tổng cộng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一共.mp3",
    "exampleSentence": {
      "chinese": "一共三个人",
      "pinyin": "Yī gòng sān gè rén",
      "vietnamese": "Tổng cộng ba người"
    }
  },
  {
    "id": "boya1-9-12",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "毛",
    "pinyin": "máo",
    "sinoVietnamese": "mao",
    "meaning": "lông, len",
    "partOfSpeech": "Danh từ / Lượng từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/毛.mp3",
    "exampleSentence": {
      "chinese": "一毛钱",
      "pinyin": "Yī máo qián",
      "vietnamese": "Một mao (10 phân)"
    }
  },
  {
    "id": "boya1-9-13",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "给",
    "pinyin": "gěi",
    "sinoVietnamese": "cấp",
    "meaning": "cho",
    "partOfSpeech": "Động từ / Giới từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/给.mp3",
    "exampleSentence": {
      "chinese": "我给你一本书",
      "pinyin": "Wǒ gěi nǐ yī běn shū",
      "vietnamese": "Tôi cho bạn một cuốn sách"
    }
  },
  {
    "id": "boya1-9-14",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "小姐",
    "pinyin": "xiǎojiě",
    "sinoVietnamese": "tiểu tỷ",
    "meaning": "cô",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小姐.mp3",
    "exampleSentence": {
      "chinese": "这位小姐贵姓？",
      "pinyin": "Zhè wèi xiǎojiě guì xìng?",
      "vietnamese": "Cô này tên gì?"
    }
  },
  {
    "id": "boya1-9-15",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "看",
    "pinyin": "kàn",
    "sinoVietnamese": "khán",
    "meaning": "nhìn, xem",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看.mp3",
    "exampleSentence": {
      "chinese": "我看书",
      "pinyin": "Wǒ kàn shū",
      "vietnamese": "Tôi đọc sách"
    }
  },
  {
    "id": "boya1-9-16",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "这些",
    "pinyin": "zhèxiē",
    "sinoVietnamese": "giá ta",
    "meaning": "những cái này",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/这些.mp3",
    "exampleSentence": {
      "chinese": "这些书都是我的。",
      "pinyin": "Zhè xiē shū dōu shì wǒ de.",
      "vietnamese": "Những cuốn sách này đều của tôi."
    }
  },
  {
    "id": "boya1-9-17",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "要",
    "pinyin": "yào",
    "sinoVietnamese": "yếu",
    "meaning": "muốn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/要.mp3",
    "exampleSentence": {
      "chinese": "这个要很好。",
      "pinyin": "Zhè gè yào hěn hǎo.",
      "vietnamese": "muốn này rất tốt."
    }
  },
  {
    "id": "boya1-9-18",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "本",
    "pinyin": "běn",
    "sinoVietnamese": "bản",
    "meaning": "một từ để đo sách",
    "partOfSpeech": "Lượng từ / Danh từ / Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/本.mp3",
    "exampleSentence": {
      "chinese": "一本书",
      "pinyin": "yì běn shū",
      "vietnamese": "Một quyển sách"
    }
  },
  {
    "id": "boya1-9-19",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "sinoVietnamese": "tiểu",
    "meaning": "nhỏ",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小.mp3",
    "exampleSentence": {
      "chinese": "这是一个小问题",
      "pinyin": "Zhè shì yī gè xiǎo wèn tí",
      "vietnamese": "Đây là một vấn đề nhỏ"
    }
  },
  {
    "id": "boya1-9-20",
    "lesson": 9,
    "lessonTitle": "Bài 9: 多少钱一本 (Bao nhiêu tiền một quyển)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "零钱",
    "pinyin": "língqián",
    "sinoVietnamese": "linh tiền",
    "meaning": "tiền lẻ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/零钱.mp3",
    "exampleSentence": {
      "chinese": "我的钱包里只有一些零钱。",
      "pinyin": "wǒ de qián bāo lǐ zhǐ yǒu yī xiē líng qián.",
      "vietnamese": "Trong ví của tôi chỉ có một ít tiền lẻ."
    }
  },
  {
    "id": "boya1-10-1",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "照片",
    "pinyin": "zhàopiàn",
    "sinoVietnamese": "chiếu phiến",
    "meaning": "bức ảnh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/照片.mp3",
    "exampleSentence": {
      "chinese": "这张照片很漂亮",
      "pinyin": "Zhè zhāng zhào piàn hěn piāo liàng",
      "vietnamese": "Bức ảnh này rất đẹp"
    }
  },
  {
    "id": "boya1-10-2",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "家",
    "pinyin": "jiā",
    "sinoVietnamese": "gia",
    "meaning": "gia đình, nhà",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/家.mp3",
    "exampleSentence": {
      "chinese": "我爱我家",
      "pinyin": "Wǒ ài wǒ jiā",
      "vietnamese": "Tôi yêu gia đình tôi"
    }
  },
  {
    "id": "boya1-10-3",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "口",
    "pinyin": "kǒu",
    "sinoVietnamese": "khẩu",
    "meaning": "miệng",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/口.mp3",
    "exampleSentence": {
      "chinese": "张口",
      "pinyin": "zhāng kǒu",
      "vietnamese": "Mở miệng"
    }
  },
  {
    "id": "boya1-10-4",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "爷爷",
    "pinyin": "yéye",
    "sinoVietnamese": "gia gia",
    "meaning": "ông nội",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/爷爷.mp3",
    "exampleSentence": {
      "chinese": "这是我爷爷",
      "pinyin": "Zhè shì wǒ yéye",
      "vietnamese": "Đây là ông nội tôi"
    }
  },
  {
    "id": "boya1-10-5",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "奶奶",
    "pinyin": "nǎinai",
    "sinoVietnamese": "nãi nãi",
    "meaning": "bà nội",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/奶奶.mp3",
    "exampleSentence": {
      "chinese": "奶奶对我很好",
      "pinyin": "Nǎinai duì wǒ hěn hǎo",
      "vietnamese": "Bà nội rất tốt với tôi"
    }
  },
  {
    "id": "boya1-10-6",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "sinoVietnamese": "ba ba",
    "meaning": "bố",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/爸爸.mp3",
    "exampleSentence": {
      "chinese": "这是我爸爸",
      "pinyin": "Zhè shì wǒ bàba",
      "vietnamese": "Đây là bố tôi"
    }
  },
  {
    "id": "boya1-10-7",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "sinoVietnamese": "ma ma",
    "meaning": "mẹ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/妈妈.mp3",
    "exampleSentence": {
      "chinese": "我妈妈是老师。",
      "pinyin": "Wǒ māma shì lǎoshī.",
      "vietnamese": "Mẹ tôi là giáo viên."
    }
  },
  {
    "id": "boya1-10-8",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "sinoVietnamese": "ca ca",
    "meaning": "anh trai",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哥哥.mp3",
    "exampleSentence": {
      "chinese": "我哥哥比我大五岁。",
      "pinyin": "Wǒ gēge bǐ wǒ dà wǔ suì.",
      "vietnamese": "Anh trai tôi lớn hơn tôi năm tuổi."
    }
  },
  {
    "id": "boya1-10-9",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "一般",
    "pinyin": "yībān",
    "sinoVietnamese": "nhất ban",
    "meaning": "thông thường",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一般.mp3",
    "exampleSentence": {
      "chinese": "一般情况",
      "pinyin": "Yī bān qíng kuàng",
      "vietnamese": "Tình huống thông thường"
    }
  },
  {
    "id": "boya1-10-10",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "只",
    "pinyin": "zhǐ",
    "sinoVietnamese": "chỉ",
    "meaning": "chỉ",
    "partOfSpeech": "Phó từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/只.mp3",
    "exampleSentence": {
      "chinese": "我只说一次",
      "pinyin": "Wǒ zhǐ shuō yī cì",
      "vietnamese": "Tôi chỉ nói một lần"
    }
  },
  {
    "id": "boya1-10-11",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "孩子",
    "pinyin": "háizi",
    "sinoVietnamese": "hài tử",
    "meaning": "trẻ em",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/孩子.mp3",
    "exampleSentence": {
      "chinese": "他们有一个孩子",
      "pinyin": "Tāmen yǒu yī gè háizi",
      "vietnamese": "Họ có một đứa con"
    }
  },
  {
    "id": "boya1-10-12",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "sinoVietnamese": "đệ đệ",
    "meaning": "em trai",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/弟弟.mp3",
    "exampleSentence": {
      "chinese": "这是我弟弟",
      "pinyin": "Zhè shì wǒ dìdi",
      "vietnamese": "Đây là em trai tôi"
    }
  },
  {
    "id": "boya1-10-13",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "妹妹",
    "pinyin": "mèimei",
    "sinoVietnamese": "muội muội",
    "meaning": "em gái",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/妹妹.mp3",
    "exampleSentence": {
      "chinese": "这是我妹妹",
      "pinyin": "Zhè shì wǒ mèimei",
      "vietnamese": "Đây là em gái tôi"
    }
  },
  {
    "id": "boya1-10-14",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "还",
    "pinyin": "hái",
    "sinoVietnamese": "hoàn",
    "meaning": "vẫn, thêm nữa",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/还.mp3",
    "exampleSentence": {
      "chinese": "我还没吃饭",
      "pinyin": "Wǒ hái méi chīfàn",
      "vietnamese": "Tôi vẫn chưa ăn cơm"
    }
  },
  {
    "id": "boya1-10-15",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "条",
    "pinyin": "tiáo",
    "sinoVietnamese": "điều",
    "meaning": "dải",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/条.mp3",
    "exampleSentence": {
      "chinese": "一条路",
      "pinyin": "Yī tiáo lù",
      "vietnamese": "Một con đường"
    }
  },
  {
    "id": "boya1-10-16",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "sinoVietnamese": "cẩu",
    "meaning": "con chó",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/狗.mp3",
    "exampleSentence": {
      "chinese": "这是我的狗",
      "pinyin": "Zhè shì wǒ de gǒu",
      "vietnamese": "Đây là con chó của tôi"
    }
  },
  {
    "id": "boya1-10-17",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "这样",
    "pinyin": "zhèyàng",
    "sinoVietnamese": "giá dạng",
    "meaning": "như vậy",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/这样.mp3",
    "exampleSentence": {
      "chinese": "这样做对不对",
      "pinyin": "Zhè yàng zuò duì bù duì",
      "vietnamese": "Làm như vậy đúng không"
    }
  },
  {
    "id": "boya1-10-18",
    "lesson": 10,
    "lessonTitle": "Bài 10: 你家有几口人 (Nhà bạn có mấy người)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Thời gian – Sinh hoạt hằng ngày",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "sinoVietnamese": "tỷ tỷ",
    "meaning": "chị gái",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/姐姐.mp3",
    "exampleSentence": {
      "chinese": "这是我姐姐",
      "pinyin": "Zhè shì wǒ jiějie",
      "vietnamese": "Đây là chị gái tôi"
    }
  },
  {
    "id": "boya1-11-1",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "下",
    "pinyin": "xià",
    "sinoVietnamese": "hạ",
    "meaning": "sau",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下.mp3",
    "exampleSentence": {
      "chinese": "请往下看",
      "pinyin": "Qǐng wǎng xià kàn",
      "vietnamese": "Xin hãy nhìn xuống dưới"
    }
  },
  {
    "id": "boya1-11-2",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "天气",
    "pinyin": "tiānqì",
    "sinoVietnamese": "thiên khí",
    "meaning": "thời tiết",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/天气.mp3",
    "exampleSentence": {
      "chinese": "今天天气很好",
      "pinyin": "Jīntiān tiānqì hěn hǎo",
      "vietnamese": "Hôm nay thời tiết rất tốt"
    }
  },
  {
    "id": "boya1-11-3",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "怎么样",
    "pinyin": "zěnmeyàng",
    "sinoVietnamese": "chẩm ma dạng",
    "meaning": "thế nào?",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怎么样.mp3",
    "exampleSentence": {
      "chinese": "你怎么样",
      "pinyin": "Nǐ zěn me yàng",
      "vietnamese": "Bạn thế nào"
    }
  },
  {
    "id": "boya1-11-4",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "不太",
    "pinyin": "bùtài",
    "sinoVietnamese": "bất thái",
    "meaning": "không quá",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不太.mp3",
    "exampleSentence": {
      "chinese": "我不太喜欢吃辣",
      "pinyin": "Wǒ bù tài xǐ huān chī là",
      "vietnamese": "Tôi không quá thích ăn cay"
    }
  },
  {
    "id": "boya1-11-5",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "风",
    "pinyin": "fēng",
    "sinoVietnamese": "phong",
    "meaning": "gió",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/风.mp3",
    "exampleSentence": {
      "chinese": "今天风很大",
      "pinyin": "Jīn tiān fēng hěn dà",
      "vietnamese": "Hôm nay gió rất lớn"
    }
  },
  {
    "id": "boya1-11-6",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "雨",
    "pinyin": "yǔ",
    "sinoVietnamese": "vũ",
    "meaning": "mưa",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/雨.mp3",
    "exampleSentence": {
      "chinese": "今天下雨了",
      "pinyin": "Jīn tiān xià yǔ le",
      "vietnamese": "Hôm nay trời mưa rồi"
    }
  },
  {
    "id": "boya1-11-7",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "冷",
    "pinyin": "lěng",
    "sinoVietnamese": "lãnh",
    "meaning": "lạnh",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/冷.mp3",
    "exampleSentence": {
      "chinese": "今天很冷",
      "pinyin": "Jīntiān hěn lěng",
      "vietnamese": "Hôm nay rất lạnh"
    }
  },
  {
    "id": "boya1-11-8",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "度",
    "pinyin": "dù",
    "sinoVietnamese": "độ",
    "meaning": "độ",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/度.mp3",
    "exampleSentence": {
      "chinese": "三十度",
      "pinyin": "Sān shí dù",
      "vietnamese": "30 độ"
    }
  },
  {
    "id": "boya1-11-9",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "晴天",
    "pinyin": "qíngtiān",
    "sinoVietnamese": "tình thiên",
    "meaning": "trời nắng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晴天.mp3",
    "exampleSentence": {
      "chinese": "今天是晴天",
      "pinyin": "Jīn tiān shì qíng tiān",
      "vietnamese": "Hôm nay trời nắng"
    }
  },
  {
    "id": "boya1-11-10",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "秋天",
    "pinyin": "qiūtiān",
    "sinoVietnamese": "thu thiên",
    "meaning": "mùa thu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/秋天.mp3",
    "exampleSentence": {
      "chinese": "秋天到了",
      "pinyin": "Qiū tiān dào le",
      "vietnamese": "Mùa thu đến rồi"
    }
  },
  {
    "id": "boya1-11-11",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "热",
    "pinyin": "rè",
    "sinoVietnamese": "nhiệt",
    "meaning": "nóng",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/热.mp3",
    "exampleSentence": {
      "chinese": "今天很热",
      "pinyin": "Jīntiān hěn rè",
      "vietnamese": "Hôm nay rất nóng"
    }
  },
  {
    "id": "boya1-11-12",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "sinoVietnamese": "thư phục",
    "meaning": "thoải mái, khỏe mạnh",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/舒服.mp3",
    "exampleSentence": {
      "chinese": "这个椅子很舒服",
      "pinyin": "Zhè gè yǐ zi hěn shū fú",
      "vietnamese": "Cái ghế này rất thoải mái"
    }
  },
  {
    "id": "boya1-11-13",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "最",
    "pinyin": "zuì",
    "sinoVietnamese": "tối",
    "meaning": "nhất",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/最.mp3",
    "exampleSentence": {
      "chinese": "最好",
      "pinyin": "Zuì hǎo",
      "vietnamese": "Tốt nhất"
    }
  },
  {
    "id": "boya1-11-14",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "季节",
    "pinyin": "jìjié",
    "sinoVietnamese": "quý tiết",
    "meaning": "mùa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/季节.mp3",
    "exampleSentence": {
      "chinese": "这个季节很好。",
      "pinyin": "Zhè gè jì jié hěn hǎo.",
      "vietnamese": "mùa này rất tốt."
    }
  },
  {
    "id": "boya1-11-15",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "冬天",
    "pinyin": "dōngtiān",
    "sinoVietnamese": "đông thiên",
    "meaning": "mùa đông",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/冬天.mp3",
    "exampleSentence": {
      "chinese": "冬天很冷",
      "pinyin": "Dōng tiān hěn lěng",
      "vietnamese": "Mùa đông rất lạnh"
    }
  },
  {
    "id": "boya1-11-16",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "比较",
    "pinyin": "bǐjiào",
    "sinoVietnamese": "tỉ giếu, giảo",
    "meaning": "tương đối",
    "partOfSpeech": "Phó từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比较.mp3",
    "exampleSentence": {
      "chinese": "这两本书，哪一本比较好？",
      "pinyin": "Zhè liǎng běn shū, nǎ yī běn bǐjiào hǎo?",
      "vietnamese": "Hai quyển sách này, quyển nào tốt hơn?"
    }
  },
  {
    "id": "boya1-11-17",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "差不多",
    "pinyin": "chàbuduō",
    "sinoVietnamese": "sai bất đa",
    "meaning": "gần như, hầu như",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/差不多.mp3",
    "exampleSentence": {
      "chinese": "时间差不多",
      "pinyin": "Shí jiān chà bù duō",
      "vietnamese": "Thời gian gần giống nhau"
    }
  },
  {
    "id": "boya1-11-18",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "零下",
    "pinyin": "língxià",
    "sinoVietnamese": "linh hạ",
    "meaning": "dưới không",
    "partOfSpeech": "Tính từ / Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/零下.mp3",
    "exampleSentence": {
      "chinese": "今天零下十度",
      "pinyin": "Jīn tiān líng xià shí dù",
      "vietnamese": "Hôm nay âm 10 độ"
    }
  },
  {
    "id": "boya1-11-19",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "常常",
    "pinyin": "chángcháng",
    "sinoVietnamese": "thường thường",
    "meaning": "thường xuyên",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/常常.mp3",
    "exampleSentence": {
      "chinese": "我常常去那里",
      "pinyin": "Wǒ chángcháng qù nàli",
      "vietnamese": "Tôi thường đi đó"
    }
  },
  {
    "id": "boya1-11-20",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "雪",
    "pinyin": "xuě",
    "sinoVietnamese": "tuyết",
    "meaning": "tuyết",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/雪.mp3",
    "exampleSentence": {
      "chinese": "下雪了",
      "pinyin": "Xià xuě le",
      "vietnamese": "Có tuyết rơi rồi"
    }
  },
  {
    "id": "boya1-11-21",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "喜欢",
    "pinyin": "xǐhuan",
    "sinoVietnamese": "hỉ hoan",
    "meaning": "thích",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/喜欢.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃中国菜",
      "pinyin": "Wǒ xǐhuān chī Zhōngguó cài",
      "vietnamese": "Tôi thích ăn món Trung Quốc"
    }
  },
  {
    "id": "boya1-11-22",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "夏天",
    "pinyin": "xiàtiān",
    "sinoVietnamese": "hạ thiên",
    "meaning": "mùa hè",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/夏天.mp3",
    "exampleSentence": {
      "chinese": "夏天很热",
      "pinyin": "Xià tiān hěn rè",
      "vietnamese": "Mùa hè rất nóng"
    }
  },
  {
    "id": "boya1-11-23",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "游泳",
    "pinyin": "yóuyǒng",
    "sinoVietnamese": "du vịnh",
    "meaning": "bơi lội",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/游泳.mp3",
    "exampleSentence": {
      "chinese": "夏天游泳很凉快。",
      "pinyin": "Xiàtiān yóuyǒng hěn liángkuai.",
      "vietnamese": "Mùa hè bơi lội rất mát."
    }
  },
  {
    "id": "boya1-11-24",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "春天",
    "pinyin": "chūntiān",
    "sinoVietnamese": "xuân thiên",
    "meaning": "mùa xuân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/春天.mp3",
    "exampleSentence": {
      "chinese": "春天来了",
      "pinyin": "Chūn tiān lái le",
      "vietnamese": "Mùa xuân đến rồi"
    }
  },
  {
    "id": "boya1-11-25",
    "lesson": 11,
    "lessonTitle": "Bài 11: 北京的冬天比较冷 (Mùa đông Bắc Kinh khá lạnh)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "北京",
    "pinyin": "Běijīng",
    "sinoVietnamese": "bắc kinh",
    "meaning": "Bắc Kinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/北京.mp3",
    "exampleSentence": {
      "chinese": "我想去北京旅游",
      "pinyin": "Wǒ xiǎng qù Běijīng lǚyóu",
      "vietnamese": "Tôi muốn đi du lịch Bắc Kinh"
    }
  },
  {
    "id": "boya1-12-1",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "啊",
    "pinyin": "a",
    "sinoVietnamese": "a",
    "meaning": "a",
    "partOfSpeech": "Trợ từ / Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/啊.mp3",
    "exampleSentence": {
      "chinese": "是啊",
      "pinyin": "Shì a",
      "vietnamese": "Vậy ạ/đúng vậy"
    }
  },
  {
    "id": "boya1-12-2",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "喂",
    "pinyin": "wèi",
    "sinoVietnamese": "uy",
    "meaning": "alo",
    "partOfSpeech": "Động từ / Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/喂.mp3",
    "exampleSentence": {
      "chinese": "喂，你好",
      "pinyin": "Wéi, nǐ hǎo",
      "vietnamese": "A lô, xin chào"
    }
  },
  {
    "id": "boya1-12-3",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "干",
    "pinyin": "gàn",
    "sinoVietnamese": "cán",
    "meaning": "làm, làm việc",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/干.mp3",
    "exampleSentence": {
      "chinese": "我正在干活",
      "pinyin": "Wǒ zhèngzài gànhuó",
      "vietnamese": "Tôi đang làm việc"
    }
  },
  {
    "id": "boya1-12-4",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "作业",
    "pinyin": "zuòyè",
    "sinoVietnamese": "tác nghiệp",
    "meaning": "bài tập",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/作业.mp3",
    "exampleSentence": {
      "chinese": "今天的作业很多",
      "pinyin": "Jīn tiān de zuò yè hěn duō",
      "vietnamese": "Bài tập hôm nay rất nhiều"
    }
  },
  {
    "id": "boya1-12-5",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "每",
    "pinyin": "měi",
    "sinoVietnamese": "mỗi",
    "meaning": "mỗi",
    "partOfSpeech": "Đại từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/每.mp3",
    "exampleSentence": {
      "chinese": "我每天早上都跑步。",
      "pinyin": "Wǒ měitiān zǎoshàng dōu pǎobù.",
      "vietnamese": "Tôi đều chạy bộ mỗi sáng."
    }
  },
  {
    "id": "boya1-12-6",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "天",
    "pinyin": "tiān",
    "sinoVietnamese": "thiên",
    "meaning": "ngày; trời",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/天.mp3",
    "exampleSentence": {
      "chinese": "今天天气很好。",
      "pinyin": "Jīntiān tiānqì hěn hǎo.",
      "vietnamese": "Hôm nay thời tiết rất đẹp."
    }
  },
  {
    "id": "boya1-12-7",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "多",
    "pinyin": "duō",
    "sinoVietnamese": "đa",
    "meaning": "nhiều",
    "partOfSpeech": "Tính từ / Phó từ / Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/多.mp3",
    "exampleSentence": {
      "chinese": "很多人",
      "pinyin": "Hěn duō rén",
      "vietnamese": "Nhiều người"
    }
  },
  {
    "id": "boya1-12-8",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "中午",
    "pinyin": "zhōngwǔ",
    "sinoVietnamese": "trung ngọ",
    "meaning": "buổi trưa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中午.mp3",
    "exampleSentence": {
      "chinese": "我中午吃饭",
      "pinyin": "Wǒ zhōngwǔ chīfàn",
      "vietnamese": "Tôi ăn trưa"
    }
  },
  {
    "id": "boya1-12-9",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "节",
    "pinyin": "jié",
    "sinoVietnamese": "tiết",
    "meaning": "ngày lễ",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/节.mp3",
    "exampleSentence": {
      "chinese": "这节课很有意思",
      "pinyin": "Zhè jié kè hěn yǒu yì sī",
      "vietnamese": "Tiết học này rất hay"
    }
  },
  {
    "id": "boya1-12-10",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "听写",
    "pinyin": "tīngxiě",
    "sinoVietnamese": "thính tả",
    "meaning": "nghe viết",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听写.mp3",
    "exampleSentence": {
      "chinese": "老师让我们做听写",
      "pinyin": "Lǎoshī ràng wǒmen zuò tīngxiě",
      "vietnamese": "Thầy giáo cho chúng tôi làm bài nghe viết"
    }
  },
  {
    "id": "boya1-12-11",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "所以",
    "pinyin": "suǒyǐ",
    "sinoVietnamese": "sở dĩ",
    "meaning": "vì vậy",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/所以.mp3",
    "exampleSentence": {
      "chinese": "因为下雨，所以没去",
      "pinyin": "Yīn wèi xià yǔ, suǒ yǐ méi qù",
      "vietnamese": "Vì trời mưa nên không đi"
    }
  },
  {
    "id": "boya1-12-12",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "酒吧",
    "pinyin": "jiǔbā",
    "sinoVietnamese": "tửu ba",
    "meaning": "quán bar",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/酒吧.mp3",
    "exampleSentence": {
      "chinese": "这个酒吧很好。",
      "pinyin": "Zhè gè jiǔ ba hěn hǎo.",
      "vietnamese": "quán bar này rất tốt."
    }
  },
  {
    "id": "boya1-12-13",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "喝",
    "pinyin": "hē",
    "sinoVietnamese": "hát",
    "meaning": "uống",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/喝.mp3",
    "exampleSentence": {
      "chinese": "我喝水",
      "pinyin": "Wǒ hē shuǐ",
      "vietnamese": "Tôi uống nước"
    }
  },
  {
    "id": "boya1-12-14",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "咖啡",
    "pinyin": "kāfēi",
    "sinoVietnamese": "ca phê",
    "meaning": "cà phê",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/咖啡.mp3",
    "exampleSentence": {
      "chinese": "我每天早上都喝咖啡。",
      "pinyin": "Wǒ měitiān zǎoshang dōu hē kāfēi.",
      "vietnamese": "Tôi uống cà phê mỗi buổi sáng."
    }
  },
  {
    "id": "boya1-12-15",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "书店",
    "pinyin": "shūdiàn",
    "sinoVietnamese": "thư điếm",
    "meaning": "hiệu sách",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/书店.mp3",
    "exampleSentence": {
      "chinese": "我想去书店买书。",
      "pinyin": "Wǒ xiǎng qù shūdiàn mǎi shū.",
      "vietnamese": "Tôi muốn đến hiệu sách mua sách."
    }
  },
  {
    "id": "boya1-12-16",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "对面",
    "pinyin": "duìmiàn",
    "sinoVietnamese": "đối diện, miến",
    "meaning": "đối diện",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对面.mp3",
    "exampleSentence": {
      "chinese": "学校对面有一个商店",
      "pinyin": "Xué xiào duì miàn yǒu yī gè shāng diàn",
      "vietnamese": "Đối diện trường học có một cửa hàng"
    }
  },
  {
    "id": "boya1-12-17",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "自己",
    "pinyin": "zìjǐ",
    "sinoVietnamese": "tự kỉ",
    "meaning": "bản thân, riêng",
    "partOfSpeech": "Đại từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/自己.mp3",
    "exampleSentence": {
      "chinese": "我自己来",
      "pinyin": "Wǒ zì jǐ lái",
      "vietnamese": "Tôi tự làm"
    }
  },
  {
    "id": "boya1-12-18",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "正在",
    "pinyin": "zhèngzài",
    "sinoVietnamese": "chính tại",
    "meaning": "đang",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/正在.mp3",
    "exampleSentence": {
      "chinese": "我正在吃饭",
      "pinyin": "Wǒ zhèngzài chīfàn",
      "vietnamese": "Tôi đang ăn cơm"
    }
  },
  {
    "id": "boya1-12-19",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "唱",
    "pinyin": "chàng",
    "sinoVietnamese": "xướng",
    "meaning": "hát",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/唱.mp3",
    "exampleSentence": {
      "chinese": "她喜欢唱歌",
      "pinyin": "Tā xǐhuān chànggē",
      "vietnamese": "Cô ấy thích hát"
    }
  },
  {
    "id": "boya1-12-20",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "歌",
    "pinyin": "gē",
    "sinoVietnamese": "ca",
    "meaning": "bài hát",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/歌.mp3",
    "exampleSentence": {
      "chinese": "我喜欢听这首歌",
      "pinyin": "Wǒ xǐhuān tīng zhè shǒu gē",
      "vietnamese": "Tôi thích nghe bài hát này"
    }
  },
  {
    "id": "boya1-12-21",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "回",
    "pinyin": "huí",
    "sinoVietnamese": "hồi",
    "meaning": "trở về",
    "partOfSpeech": "Động từ / Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/回.mp3",
    "exampleSentence": {
      "chinese": "我回家了",
      "pinyin": "Wǒ huí jiā le",
      "vietnamese": "Tôi về nhà rồi"
    }
  },
  {
    "id": "boya1-12-22",
    "lesson": 12,
    "lessonTitle": "Bài 12: 在干什么呢 (Đang làm gì đấy)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "星期三",
    "pinyin": "xīngqīsān",
    "sinoVietnamese": "tinh kỳ tam",
    "meaning": "thứ Tư",
    "partOfSpeech": "Danh từ chỉ thời gian",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/星期三.mp3",
    "exampleSentence": {
      "chinese": "我星期三要去图书馆。",
      "pinyin": "Wǒ xīngqīsān yào qù túshūguǎn.",
      "vietnamese": "Tôi sẽ đi thư viện vào thứ Tư."
    }
  },
  {
    "id": "boya1-13-1",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "借",
    "pinyin": "jiè",
    "sinoVietnamese": "tá",
    "meaning": "vay, mượn",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/借.mp3",
    "exampleSentence": {
      "chinese": "我可以借你的笔吗",
      "pinyin": "Wǒ kě yǐ jiè nǐ de bǐ ma",
      "vietnamese": "Tôi có thể mượn bút của bạn được không"
    }
  },
  {
    "id": "boya1-13-2",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "先",
    "pinyin": "xiān",
    "sinoVietnamese": "tiên",
    "meaning": "trước",
    "partOfSpeech": "Phó từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/先.mp3",
    "exampleSentence": {
      "chinese": "我先去",
      "pinyin": "Wǒ xiān qù",
      "vietnamese": "Tôi đi trước"
    }
  },
  {
    "id": "boya1-13-3",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "银行",
    "pinyin": "yínháng",
    "sinoVietnamese": "ngân hàng",
    "meaning": "ngân hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/银行.mp3",
    "exampleSentence": {
      "chinese": "银行在哪儿？",
      "pinyin": "Yínháng zài nǎr?",
      "vietnamese": "Ngân hàng ở đâu?"
    }
  },
  {
    "id": "boya1-13-4",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "换",
    "pinyin": "huàn",
    "sinoVietnamese": "hoán",
    "meaning": "đổi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/换.mp3",
    "exampleSentence": {
      "chinese": "我想换一件衣服",
      "pinyin": "Wǒ xiǎng huàn yī jiàn yī fú",
      "vietnamese": "Tôi muốn đổi một chiếc áo"
    }
  },
  {
    "id": "boya1-13-5",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "然后",
    "pinyin": "ránhòu",
    "sinoVietnamese": "nhiên hậu",
    "meaning": "sau đó",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/然后.mp3",
    "exampleSentence": {
      "chinese": "先吃饭，然后走",
      "pinyin": "Xiān chī fàn, rán hòu zǒu",
      "vietnamese": "Ăn cơm trước, sau đó đi"
    }
  },
  {
    "id": "boya1-13-6",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "sinoVietnamese": "thương điếm",
    "meaning": "cửa hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/商店.mp3",
    "exampleSentence": {
      "chinese": "去商店",
      "pinyin": "qù shāngdiàn",
      "vietnamese": "đi cửa hàng"
    }
  },
  {
    "id": "boya1-13-7",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "东西",
    "pinyin": "dōngxi",
    "sinoVietnamese": "đông tây",
    "meaning": "đồ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/东西.mp3",
    "exampleSentence": {
      "chinese": "买很多东西",
      "pinyin": "Mǎi hěn duō dōngxi",
      "vietnamese": "Mua nhiều đồ"
    }
  },
  {
    "id": "boya1-13-8",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "咱们",
    "pinyin": "zánmen",
    "sinoVietnamese": "cha môn",
    "meaning": "chúng ta",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/咱们.mp3",
    "exampleSentence": {
      "chinese": "咱们一起去吧",
      "pinyin": "Zán men yī qǐ qù ba",
      "vietnamese": "Chúng ta cùng đi đi"
    }
  },
  {
    "id": "boya1-13-9",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "一起",
    "pinyin": "yīqǐ",
    "sinoVietnamese": "nhất khởi",
    "meaning": "cùng nhau",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一起.mp3",
    "exampleSentence": {
      "chinese": "我们一起去",
      "pinyin": "Wǒmen yīqǐ qù",
      "vietnamese": "Chúng tôi đi cùng nhau"
    }
  },
  {
    "id": "boya1-13-10",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "星期天",
    "pinyin": "xīngqītiān",
    "sinoVietnamese": "tinh kỳ thiên",
    "meaning": "chủ nhật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/星期天.mp3",
    "exampleSentence": {
      "chinese": "星期天我不上班",
      "pinyin": "Xīngqītiān wǒ bù shàngbān",
      "vietnamese": "Chủ nhật tôi không đi làm"
    }
  },
  {
    "id": "boya1-13-11",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "打算",
    "pinyin": "dǎsuàn",
    "sinoVietnamese": "đả toán",
    "meaning": "kế hoạch; dự định",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打算.mp3",
    "exampleSentence": {
      "chinese": "我打算去中国",
      "pinyin": "Wǒ dǎ suàn qù zhōng guó",
      "vietnamese": "Tôi dự định đi Trung Quốc"
    }
  },
  {
    "id": "boya1-13-12",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "购物",
    "pinyin": "gòuwù",
    "sinoVietnamese": "cấu vật",
    "meaning": "mua sắm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/购物.mp3",
    "exampleSentence": {
      "chinese": "周末去购物",
      "pinyin": "zhōumò qù gòuwù",
      "vietnamese": "Cuối tuần đi mua sắm"
    }
  },
  {
    "id": "boya1-13-13",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "中心",
    "pinyin": "zhōngxīn",
    "sinoVietnamese": "trung tâm",
    "meaning": "trung tâm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中心.mp3",
    "exampleSentence": {
      "chinese": "市中心",
      "pinyin": "Shì zhōng xīn",
      "vietnamese": "trung tâm thành phố"
    }
  },
  {
    "id": "boya1-13-14",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "贵",
    "pinyin": "guì",
    "sinoVietnamese": "quý",
    "meaning": "đắt",
    "partOfSpeech": "Tính từ / Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/贵.mp3",
    "exampleSentence": {
      "chinese": "很贵",
      "pinyin": "Hěn guì",
      "vietnamese": "Rất đắt"
    }
  },
  {
    "id": "boya1-13-15",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "质量",
    "pinyin": "zhìliàng",
    "sinoVietnamese": "chất lượng",
    "meaning": "chất lượng",
    "partOfSpeech": "Danh từ (noun)",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/质量.mp3",
    "exampleSentence": {
      "chinese": "这个产品质量很好。",
      "pinyin": "Zhège chǎnpǐn zhìliàng hěn hǎo.",
      "vietnamese": "Sản phẩm này chất lượng rất tốt."
    }
  },
  {
    "id": "boya1-13-16",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "不错",
    "pinyin": "bùcuò",
    "sinoVietnamese": "bất thác",
    "meaning": "khá tốt",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不错.mp3",
    "exampleSentence": {
      "chinese": "这个菜不错",
      "pinyin": "Zhè gè cài bù cuò",
      "vietnamese": "Món này khá ngon"
    }
  },
  {
    "id": "boya1-13-17",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "正",
    "pinyin": "zhèng",
    "sinoVietnamese": "chính",
    "meaning": "thẳng",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/正.mp3",
    "exampleSentence": {
      "chinese": "请你把桌子放正。",
      "pinyin": "Qǐng nǐ bǎ zhuō zi fàng zhèng.",
      "vietnamese": "Làm ơn đặt cái bàn cho ngay ngắn."
    }
  },
  {
    "id": "boya1-13-18",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "衣服",
    "pinyin": "yīfu",
    "sinoVietnamese": "y phục",
    "meaning": "quần áo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/衣服.mp3",
    "exampleSentence": {
      "chinese": "我买了很多新衣服",
      "pinyin": "Wǒ mǎi le hěn duō xīn yī fu",
      "vietnamese": "Tôi mua được rất nhiều quần áo mới"
    }
  },
  {
    "id": "boya1-13-19",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "关门",
    "pinyin": "guānmén",
    "sinoVietnamese": "quan môn",
    "meaning": "đóng cửa (cửa hàng, doanh nghiệp), đóng cửa ra vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/关门.mp3",
    "exampleSentence": {
      "chinese": "商店晚上九点关门。",
      "pinyin": "Shāngdiàn wǎnshàng jiǔ diǎn guānmén.",
      "vietnamese": "Cửa hàng đóng cửa lúc 9 giờ tối."
    }
  },
  {
    "id": "boya1-13-20",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "购物中心",
    "pinyin": "gòuwùzhōngxīn",
    "sinoVietnamese": "cấu vật trung tâm",
    "meaning": "trung tâm mua sắm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/购物中心.mp3",
    "exampleSentence": {
      "chinese": "这个购物中心很大，商品种类很多。",
      "pinyin": "Zhège gòuwùzhōngxīn hěn dà, shāngpǐn zhǒnglèi hěn duō.",
      "vietnamese": "Trung tâm mua sắm này rất lớn, có nhiều loại hàng hóa."
    }
  },
  {
    "id": "boya1-13-21",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "还可以",
    "pinyin": "hái kěyǐ",
    "sinoVietnamese": "hoàn khả, khắc dĩ",
    "meaning": "tạm được, cũng được, vẫn được",
    "partOfSpeech": "Cụm từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/还可以.mp3",
    "exampleSentence": {
      "chinese": "“你最近怎么样？” “还可以。”",
      "pinyin": "\"Nǐ zuìjìn zěnmeyàng?\" \"Hái kěyǐ.\"",
      "vietnamese": "\"Dạo này bạn thế nào?\" \"Cũng tạm được.\""
    }
  },
  {
    "id": "boya1-13-22",
    "lesson": 13,
    "lessonTitle": "Bài 13: 我打算去商店买东西 (Tôi định đi cửa hàng mua đồ)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "开门",
    "pinyin": "kāimén",
    "sinoVietnamese": "khai môn",
    "meaning": "mở cửa (cửa hàng, doanh nghiệp), mở cửa ra vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开门.mp3",
    "exampleSentence": {
      "chinese": "这家店早上八点开门。",
      "pinyin": "Zhè jiā diàn zǎoshang bā diǎn kāimén.",
      "vietnamese": "Cửa hàng này mở cửa lúc 8 giờ sáng."
    }
  },
  {
    "id": "boya1-14-1",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "件",
    "pinyin": "jiàn",
    "sinoVietnamese": "kiện",
    "meaning": "cái, chiếc",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/件.mp3",
    "exampleSentence": {
      "chinese": "一件衣服",
      "pinyin": "Yī jiàn yī fú",
      "vietnamese": "Một cái áo"
    }
  },
  {
    "id": "boya1-14-2",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "白",
    "pinyin": "bái",
    "sinoVietnamese": "bạch",
    "meaning": "trắng",
    "partOfSpeech": "Tính từ / Phó từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/白.mp3",
    "exampleSentence": {
      "chinese": "白天",
      "pinyin": "Bái tiān",
      "vietnamese": "Ban ngày"
    }
  },
  {
    "id": "boya1-14-3",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "毛衣",
    "pinyin": "máoyī",
    "sinoVietnamese": "mao y",
    "meaning": "áo len",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/毛衣.mp3",
    "exampleSentence": {
      "chinese": "这件红毛衣很暖和。",
      "pinyin": "Zhè jiàn hóng máoyī hěn nuǎnhuo.",
      "vietnamese": "Chiếc áo len đỏ này rất ấm áp."
    }
  },
  {
    "id": "boya1-14-4",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "挺",
    "pinyin": "tǐng",
    "sinoVietnamese": "đĩnh",
    "meaning": "khá",
    "partOfSpeech": "Phó từ / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挺.mp3",
    "exampleSentence": {
      "chinese": "这个挺好",
      "pinyin": "Zhè gè tǐng hǎo",
      "vietnamese": "Cái này khá tốt"
    }
  },
  {
    "id": "boya1-14-5",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "好看",
    "pinyin": "hǎokàn",
    "sinoVietnamese": "hảo khán",
    "meaning": "đẹp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好看.mp3",
    "exampleSentence": {
      "chinese": "这本书很好看。",
      "pinyin": "Zhè běn shū hěn hǎokàn.",
      "vietnamese": "Quyển sách này rất hay."
    }
  },
  {
    "id": "boya1-14-6",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "容易",
    "pinyin": "róngyì",
    "sinoVietnamese": "dung dịch",
    "meaning": "dễ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/容易.mp3",
    "exampleSentence": {
      "chinese": "这个问题很容易回答。",
      "pinyin": "Zhè gè wèn tí hěn róng yì huí dá.",
      "vietnamese": "Câu hỏi này rất dễ trả lời."
    }
  },
  {
    "id": "boya1-14-7",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "脏",
    "pinyin": "zāng",
    "sinoVietnamese": "tang",
    "meaning": "bẩn",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/脏.mp3",
    "exampleSentence": {
      "chinese": "衣服很脏",
      "pinyin": "Yī fú hěn zàng",
      "vietnamese": "Quần áo rất bẩn"
    }
  },
  {
    "id": "boya1-14-8",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "蓝",
    "pinyin": "lán",
    "sinoVietnamese": "lam",
    "meaning": "xanh da trời",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/蓝.mp3",
    "exampleSentence": {
      "chinese": "天空是蓝色的",
      "pinyin": "Tiān kōng shì lán sè de",
      "vietnamese": "Bầu trời màu xanh"
    }
  },
  {
    "id": "boya1-14-9",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "颜色",
    "pinyin": "yánsè",
    "sinoVietnamese": "nhan sắc",
    "meaning": "màu sắc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/颜色.mp3",
    "exampleSentence": {
      "chinese": "我喜欢红色",
      "pinyin": "Wǒ xǐ huān hóng sè",
      "vietnamese": "Tôi thích màu đỏ"
    }
  },
  {
    "id": "boya1-14-10",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "有点儿",
    "pinyin": "yǒudiǎnr",
    "sinoVietnamese": "hữu, dựu điểm nhi",
    "meaning": "hơi, có chút",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有点儿.mp3",
    "exampleSentence": {
      "chinese": "今天天气有点儿冷。",
      "pinyin": "Jīntiān tiānqì yǒudiǎnr lěng.",
      "vietnamese": "Hôm nay thời tiết hơi lạnh một chút."
    }
  },
  {
    "id": "boya1-14-11",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "深",
    "pinyin": "shēn",
    "sinoVietnamese": "thâm",
    "meaning": "sâu; sâu sắc",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/深.mp3",
    "exampleSentence": {
      "chinese": "这条河很深，不能游泳。",
      "pinyin": "Zhè tiáo hé hěn shēn, bùnéng yóuyǒng.",
      "vietnamese": "Con sông này rất sâu, không thể bơi."
    }
  },
  {
    "id": "boya1-14-12",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "浅",
    "pinyin": "qiǎn",
    "sinoVietnamese": "thiển",
    "meaning": "nông",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/浅.mp3",
    "exampleSentence": {
      "chinese": "这条河很浅，小孩子也可以过去。",
      "pinyin": "zhè tiáo hé hěn qiǎn xiǎo hái zi yě kě yǐ guò qu",
      "vietnamese": "Con sông này rất nông, trẻ con cũng có thể qua được."
    }
  },
  {
    "id": "boya1-14-13",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "黄",
    "pinyin": "huáng",
    "sinoVietnamese": "hoàng, huỳnh",
    "meaning": "vàng",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/黄.mp3",
    "exampleSentence": {
      "chinese": "这是黄色的",
      "pinyin": "Zhè shì huáng sè de",
      "vietnamese": "Đây là màu vàng"
    }
  },
  {
    "id": "boya1-14-14",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "sinoVietnamese": "phiếu lượng",
    "meaning": "đẹp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/漂亮.mp3",
    "exampleSentence": {
      "chinese": "她很漂亮",
      "pinyin": "Tā hěn piāo liàng",
      "vietnamese": "Cô ấy rất đẹp"
    }
  },
  {
    "id": "boya1-14-15",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "它",
    "pinyin": "tā",
    "sinoVietnamese": "xà, tha",
    "meaning": "nó",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/它.mp3",
    "exampleSentence": {
      "chinese": "它是我的狗",
      "pinyin": "Tā shì wǒ de gǒu",
      "vietnamese": "Nó là con chó của tôi"
    }
  },
  {
    "id": "boya1-14-16",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "昨天",
    "pinyin": "zuótiān",
    "sinoVietnamese": "tạc thiên",
    "meaning": "hôm qua",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/昨天.mp3",
    "exampleSentence": {
      "chinese": "我昨天去商店",
      "pinyin": "Wǒ zuótiān qù shāngdiàn",
      "vietnamese": "Hôm qua tôi đi cửa hàng"
    }
  },
  {
    "id": "boya1-14-17",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "新",
    "pinyin": "xīn",
    "sinoVietnamese": "tân",
    "meaning": "mới",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/新.mp3",
    "exampleSentence": {
      "chinese": "新朋友",
      "pinyin": "Xīn péng yǒu",
      "vietnamese": "Bạn mới"
    }
  },
  {
    "id": "boya1-14-18",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "辆",
    "pinyin": "liàng",
    "sinoVietnamese": "lượng",
    "meaning": "chiếc",
    "partOfSpeech": "Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辆.mp3",
    "exampleSentence": {
      "chinese": "一辆车",
      "pinyin": "Yī liàng chē",
      "vietnamese": "Một chiếc xe"
    }
  },
  {
    "id": "boya1-14-19",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "旧",
    "pinyin": "jiù",
    "sinoVietnamese": "cựu",
    "meaning": "cũ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/旧.mp3",
    "exampleSentence": {
      "chinese": "这件衣服太旧了，我买件新的。",
      "pinyin": "Zhè jiàn yīfu tài jiù le, wǒ mǎi jiàn xīn de.",
      "vietnamese": "Cái áo này quá cũ rồi, tôi mua cái mới."
    }
  },
  {
    "id": "boya1-14-20",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "便宜",
    "pinyin": "piányi",
    "sinoVietnamese": "tiện nghi",
    "meaning": "rẻ",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/便宜.mp3",
    "exampleSentence": {
      "chinese": "这家店的东西很便宜。",
      "pinyin": "Zhè jiā diàn de dōng xī hěn biàn yí.",
      "vietnamese": "Đồ vật ở cửa hàng này rất rẻ."
    }
  },
  {
    "id": "boya1-14-21",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "丢",
    "pinyin": "diū",
    "sinoVietnamese": "đâu",
    "meaning": "đánh rơi, mất",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/丢.mp3",
    "exampleSentence": {
      "chinese": "我的钱包丢了",
      "pinyin": "Wǒ de qiánbāo diū le",
      "vietnamese": "Ví của tôi bị mất rơi"
    }
  },
  {
    "id": "boya1-14-22",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "别的",
    "pinyin": "biéde",
    "sinoVietnamese": "biệt đích",
    "meaning": "khác",
    "partOfSpeech": "Đại từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/别的.mp3",
    "exampleSentence": {
      "chinese": "你有别的问题吗？",
      "pinyin": "Nǐ yǒu bié de wèntí ma?",
      "vietnamese": "Bạn có câu hỏi khác không?"
    }
  },
  {
    "id": "boya1-14-23",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "黑",
    "pinyin": "hēi",
    "sinoVietnamese": "hắc",
    "meaning": "đen",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/黑.mp3",
    "exampleSentence": {
      "chinese": "他的头发是黑色的",
      "pinyin": "Tā de tóu fā shì hēi sè de",
      "vietnamese": "Tóc anh ấy màu đen"
    }
  },
  {
    "id": "boya1-14-24",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "灰",
    "pinyin": "huī",
    "sinoVietnamese": "hôi",
    "meaning": "màu xám",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/灰.mp3",
    "exampleSentence": {
      "chinese": "墙壁被刷成了浅灰色的。",
      "pinyin": "qiáng bì bèi shuā chéng le qiǎn huī sè de.",
      "vietnamese": "Bức tường đã được sơn thành màu xám nhạt."
    }
  },
  {
    "id": "boya1-14-25",
    "lesson": 14,
    "lessonTitle": "Bài 14: 你喜欢什么颜色的 (Bạn thích màu gì)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "sinoVietnamese": "lục",
    "meaning": "xanh lá",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/绿.mp3",
    "exampleSentence": {
      "chinese": "树叶是绿色的",
      "pinyin": "Shù yè shì lǜ sè de",
      "vietnamese": "Lá cây có màu xanh"
    }
  },
  {
    "id": "boya1-15-1",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "号",
    "pinyin": "hào",
    "sinoVietnamese": "hiệu",
    "meaning": "ngày",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/号.mp3",
    "exampleSentence": {
      "chinese": "今天是五月一号",
      "pinyin": "Jīntiān shì Wǔyuè yī hào",
      "vietnamese": "Hôm nay là mùng một tháng năm"
    }
  },
  {
    "id": "boya1-15-2",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "晚饭",
    "pinyin": "wǎnfàn",
    "sinoVietnamese": "vãn phạn",
    "meaning": "bữa tối",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚饭.mp3",
    "exampleSentence": {
      "chinese": "我们晚上一起吃晚饭。",
      "pinyin": "Wǒmen wǎnshang yīqǐ chī wǎnfàn.",
      "vietnamese": "Chúng tôi cùng nhau ăn bữa tối vào buổi tối."
    }
  },
  {
    "id": "boya1-15-3",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "以后",
    "pinyin": "yǐhòu",
    "sinoVietnamese": "dĩ hậu",
    "meaning": "sau này",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/以后.mp3",
    "exampleSentence": {
      "chinese": "以后我们还是朋友",
      "pinyin": "Yǐ hòu wǒ men hái shì péng yǒu",
      "vietnamese": "Sau này chúng ta vẫn là bạn"
    }
  },
  {
    "id": "boya1-15-4",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "一直",
    "pinyin": "yīzhí",
    "sinoVietnamese": "nhất trực",
    "meaning": "thẳng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一直.mp3",
    "exampleSentence": {
      "chinese": "一直往前走",
      "pinyin": "Yī zhí wǎng qián zǒu",
      "vietnamese": "Đi thẳng về phía trước"
    }
  },
  {
    "id": "boya1-15-5",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "忙",
    "pinyin": "máng",
    "sinoVietnamese": "mang",
    "meaning": "bận",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忙.mp3",
    "exampleSentence": {
      "chinese": "我很忙",
      "pinyin": "Wǒ hěn máng",
      "vietnamese": "Tôi rất bận"
    }
  },
  {
    "id": "boya1-15-6",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "sinoVietnamese": "chuẩn bị",
    "meaning": "chuẩn bị",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/准备.mp3",
    "exampleSentence": {
      "chinese": "我们正在准备考试。",
      "pinyin": "Wǒ men zhèng zài zhǔn bèi kǎo shì.",
      "vietnamese": "Chúng tôi đang chuẩn bị cho kỳ thi."
    }
  },
  {
    "id": "boya1-15-7",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "sinoVietnamese": "lễ vật",
    "meaning": "quà tặng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/礼物.mp3",
    "exampleSentence": {
      "chinese": "这是我送给你的礼物",
      "pinyin": "Zhè shì wǒ sòng gěi nǐ de lǐ wù",
      "vietnamese": "Đây là quà tôi tặng bạn"
    }
  },
  {
    "id": "boya1-15-8",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "生日",
    "pinyin": "shēngrì",
    "sinoVietnamese": "sinh, sanh nhật",
    "meaning": "sinh nhật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生日.mp3",
    "exampleSentence": {
      "chinese": "今天是我的生日",
      "pinyin": "Jīntiān shì wǒ de shēngrì",
      "vietnamese": "Hôm nay là sinh nhật của tôi"
    }
  },
  {
    "id": "boya1-15-9",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "蛋糕",
    "pinyin": "dàngāo",
    "sinoVietnamese": "đản cao",
    "meaning": "bánh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/蛋糕.mp3",
    "exampleSentence": {
      "chinese": "生日蛋糕很好吃。",
      "pinyin": "Shēngrì dàngāo hěn hǎochī.",
      "vietnamese": "Bánh kem sinh nhật rất ngon."
    }
  },
  {
    "id": "boya1-15-10",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "送",
    "pinyin": "sòng",
    "sinoVietnamese": "tống",
    "meaning": "tặng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/送.mp3",
    "exampleSentence": {
      "chinese": "我送你",
      "pinyin": "Wǒ sòng nǐ",
      "vietnamese": "Tôi đưa tiễn bạn"
    }
  },
  {
    "id": "boya1-15-11",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "说",
    "pinyin": "shuō",
    "sinoVietnamese": "thuyết",
    "meaning": "nói",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/说.mp3",
    "exampleSentence": {
      "chinese": "请你说慢一点",
      "pinyin": "Qǐng nǐ shuō màn yī diǎn",
      "vietnamese": "Làm ơn nói chậm một chút"
    }
  },
  {
    "id": "boya1-15-12",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "还是",
    "pinyin": "háishi",
    "sinoVietnamese": "hoàn thị",
    "meaning": "hoặc (trong câu hỏi)",
    "partOfSpeech": "Liên từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/还是.mp3",
    "exampleSentence": {
      "chinese": "你喜欢咖啡还是茶？",
      "pinyin": "Nǐ xǐhuan kāfēi háishì chá?",
      "vietnamese": "Bạn thích cà phê hay trà?"
    }
  },
  {
    "id": "boya1-15-13",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "女",
    "pinyin": "nǚ",
    "sinoVietnamese": "nữ",
    "meaning": "nữ",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/女.mp3",
    "exampleSentence": {
      "chinese": "她是女学生",
      "pinyin": "Tā shì nǚ xuéshēng",
      "vietnamese": "Cô ấy là học sinh nữ"
    }
  },
  {
    "id": "boya1-15-14",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "可",
    "pinyin": "kě",
    "sinoVietnamese": "khả",
    "meaning": "nhưng",
    "partOfSpeech": "Trợ động từ / Phó từ / Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可.mp3",
    "exampleSentence": {
      "chinese": "这件衣服可真漂亮！",
      "pinyin": "Zhè jiàn yīfu kě zhēn piàoliang!",
      "vietnamese": "Bộ quần áo này quả thật là đẹp!"
    }
  },
  {
    "id": "boya1-15-15",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "比如",
    "pinyin": "bǐrú",
    "sinoVietnamese": "tỉ như",
    "meaning": "ví dụ",
    "partOfSpeech": "Động từ / Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比如.mp3",
    "exampleSentence": {
      "chinese": "我喜欢很多水果，比如苹果、香蕉",
      "pinyin": "Wǒ xǐ huān hěn duō shuǐ guǒ, bǐ rú píng guǒ 、 xiāng jiāo",
      "vietnamese": "Tôi thích nhiều loại trái cây, ví dụ táo, chuối"
    }
  },
  {
    "id": "boya1-15-16",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "巧克力",
    "pinyin": "qiǎokèlì",
    "sinoVietnamese": "xảo khắc lực",
    "meaning": "sô cô la",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/巧克力.mp3",
    "exampleSentence": {
      "chinese": "我最喜欢吃黑巧克力。",
      "pinyin": "Wǒ zuì xǐhuan chī hēi qiǎokèlì.",
      "vietnamese": "Tôi thích ăn sô-cô-la đen nhất."
    }
  },
  {
    "id": "boya1-15-17",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "甜",
    "pinyin": "tián",
    "sinoVietnamese": "điềm",
    "meaning": "ngọt",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/甜.mp3",
    "exampleSentence": {
      "chinese": "这个西瓜特别甜。",
      "pinyin": "Zhè ge xīguā tèbié tián.",
      "vietnamese": "Quả dưa hấu này đặc biệt ngọt."
    }
  },
  {
    "id": "boya1-15-18",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "那么",
    "pinyin": "nàme",
    "sinoVietnamese": "na ma",
    "meaning": "vậy thì",
    "partOfSpeech": "Đại từ / Liên từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/那么.mp3",
    "exampleSentence": {
      "chinese": "那么，我们走吧",
      "pinyin": "Nà me, wǒ men zǒu ba",
      "vietnamese": "Vậy thì chúng ta đi thôi"
    }
  },
  {
    "id": "boya1-15-19",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "束",
    "pinyin": "shù",
    "sinoVietnamese": "thúc",
    "meaning": "bó, chùm",
    "partOfSpeech": "Lượng từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/束.mp3",
    "exampleSentence": {
      "chinese": "她买了一束玫瑰花。",
      "pinyin": "Tā mǎi le yí shù méiguīhuā.",
      "vietnamese": "Cô ấy mua một bó hoa hồng."
    }
  },
  {
    "id": "boya1-15-20",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "花",
    "pinyin": "huā",
    "sinoVietnamese": "hoa",
    "meaning": "hoa",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/花.mp3",
    "exampleSentence": {
      "chinese": "这朵花很漂亮",
      "pinyin": "Zhè duǒ huā hěn piào liang",
      "vietnamese": "Bông hoa này rất đẹp"
    }
  },
  {
    "id": "boya1-15-21",
    "lesson": 15,
    "lessonTitle": "Bài 15: 明天是我朋友的生日 (Ngày mai là sinh nhật bạn tôi)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Thời tiết – Hoạt động – Sở thích",
    "hanzi": "主意",
    "pinyin": "zhǔyì",
    "sinoVietnamese": "chủ ý",
    "meaning": "ý kiến, ý tưởng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/主意.mp3",
    "exampleSentence": {
      "chinese": "我有个好主意。",
      "pinyin": "Wǒ yǒu gè hǎo zhǔyì.",
      "vietnamese": "Tôi có một ý kiến hay."
    }
  },
  {
    "id": "boya1-16-1",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "又",
    "pinyin": "yòu",
    "sinoVietnamese": "hựu",
    "meaning": "một lần nữa",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/又.mp3",
    "exampleSentence": {
      "chinese": "他又来了",
      "pinyin": "Tā yòu lái le",
      "vietnamese": "Anh ấy lại đến rồi"
    }
  },
  {
    "id": "boya1-16-2",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "了",
    "pinyin": "le",
    "sinoVietnamese": "liễu",
    "meaning": "trợ từ \"le\"",
    "partOfSpeech": "Trợ từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/了.mp3",
    "exampleSentence": {
      "chinese": "我吃完了",
      "pinyin": "Wǒ chī wán le",
      "vietnamese": "Tôi ăn xong rồi"
    }
  },
  {
    "id": "boya1-16-3",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "看起来",
    "pinyin": "kànqǐlái",
    "sinoVietnamese": "khán khởi lai",
    "meaning": "trông như thể",
    "partOfSpeech": "Cụm từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看起来.mp3",
    "exampleSentence": {
      "chinese": "你今天看起来很有精神。",
      "pinyin": "Nǐ jīntiān kàn qilai hěn yǒu jīngshen.",
      "vietnamese": "Hôm nay trông bạn rất có tinh thần."
    }
  },
  {
    "id": "boya1-16-4",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "啦",
    "pinyin": "la",
    "sinoVietnamese": "lạp",
    "meaning": "trợ từ 'la'",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/啦.mp3",
    "exampleSentence": {
      "chinese": "快走吧，要迟到啦！",
      "pinyin": "Kuài zǒu ba, yào chídào la!",
      "vietnamese": "Đi mau thôi, sắp muộn rồi đấy!"
    }
  },
  {
    "id": "boya1-16-5",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "sinoVietnamese": "khả dĩ",
    "meaning": "có thể",
    "partOfSpeech": "Động từ / Trợ động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可以.mp3",
    "exampleSentence": {
      "chinese": "我可以进去吗",
      "pinyin": "Wǒ kě yǐ jìn qù ma",
      "vietnamese": "Tôi có thể vào không"
    }
  },
  {
    "id": "boya1-16-6",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "觉得",
    "pinyin": "juéde",
    "sinoVietnamese": "giác đắc",
    "meaning": "cảm thấy, nghĩ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/觉得.mp3",
    "exampleSentence": {
      "chinese": "我觉得今天很冷。",
      "pinyin": "Wǒ juéde jīntiān hěn lěng.",
      "vietnamese": "Tôi cảm thấy hôm nay rất lạnh."
    }
  },
  {
    "id": "boya1-16-7",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "没意思",
    "pinyin": "méi yìsi",
    "sinoVietnamese": "một ý tư, tai",
    "meaning": "chán",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/没意思.mp3",
    "exampleSentence": {
      "chinese": "这部电影真没意思",
      "pinyin": "Zhè bù diànyǐng zhēn méi yìsi",
      "vietnamese": "Bộ phim này thật chán"
    }
  },
  {
    "id": "boya1-16-8",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "电视",
    "pinyin": "diànshì",
    "sinoVietnamese": "điện thị",
    "meaning": "tV, truyền hình",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电视.mp3",
    "exampleSentence": {
      "chinese": "我看电视",
      "pinyin": "Wǒ kàn diànshì",
      "vietnamese": "Tôi xem TV"
    }
  },
  {
    "id": "boya1-16-9",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "洗",
    "pinyin": "xǐ",
    "sinoVietnamese": "tẩy",
    "meaning": "rửa",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/洗.mp3",
    "exampleSentence": {
      "chinese": "我去洗手",
      "pinyin": "Wǒ qù xǐ shǒu",
      "vietnamese": "Tôi đi rửa tay"
    }
  },
  {
    "id": "boya1-16-10",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "睡觉",
    "pinyin": "shuìjiào",
    "sinoVietnamese": "thụy giác",
    "meaning": "đi ngủ, ngủ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/睡觉.mp3",
    "exampleSentence": {
      "chinese": "我要睡觉了",
      "pinyin": "Wǒ yào shuìjiào le",
      "vietnamese": "Tôi muốn đi ngủ rồi"
    }
  },
  {
    "id": "boya1-16-11",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "出去",
    "pinyin": "chūqu",
    "sinoVietnamese": "xuất khứ",
    "meaning": "ra ngoài",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出去.mp3",
    "exampleSentence": {
      "chinese": "他出去买东西。",
      "pinyin": "Tā chūqù mǎi dōngxi.",
      "vietnamese": "Anh ấy đi ra ngoài mua đồ."
    }
  },
  {
    "id": "boya1-16-12",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "逛",
    "pinyin": "guàng",
    "sinoVietnamese": "cuống",
    "meaning": "dạo quanh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/逛.mp3",
    "exampleSentence": {
      "chinese": "周末我们一起去逛街吧。",
      "pinyin": "Zhōumò wǒmen yìqǐ qù guàngjiē ba.",
      "vietnamese": "Cuối tuần chúng mình cùng nhau đi dạo phố nhé."
    }
  },
  {
    "id": "boya1-16-13",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "sinoVietnamese": "học tập",
    "meaning": "học",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学习.mp3",
    "exampleSentence": {
      "chinese": "我在学习中文",
      "pinyin": "Wǒ zài xuéxí Zhōngwén",
      "vietnamese": "Tôi đang học tiếng Trung"
    }
  },
  {
    "id": "boya1-16-14",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "不同",
    "pinyin": "bùtóng",
    "sinoVietnamese": "bất đồng",
    "meaning": "khác biệt",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不同.mp3",
    "exampleSentence": {
      "chinese": "我们有很多不同",
      "pinyin": "Wǒ men yǒu hěn duō bù tóng",
      "vietnamese": "Chúng tôi có nhiều khác biệt"
    }
  },
  {
    "id": "boya1-16-15",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "安排",
    "pinyin": "ānpái",
    "sinoVietnamese": "an bài",
    "meaning": "sắp xếp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/安排.mp3",
    "exampleSentence": {
      "chinese": "周末你有什么特别的安排吗？",
      "pinyin": "Zhōumò nǐ yǒu shénme tèbié de ānpái ma?",
      "vietnamese": "Cuối tuần bạn có sắp xếp gì đặc biệt không?"
    }
  },
  {
    "id": "boya1-16-16",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "上",
    "pinyin": "shàng",
    "sinoVietnamese": "thượng",
    "meaning": "trên",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上.mp3",
    "exampleSentence": {
      "chinese": "桌子上有书",
      "pinyin": "Zhuōzi shàng yǒu shū",
      "vietnamese": "Trên bàn có sách"
    }
  },
  {
    "id": "boya1-16-17",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "包",
    "pinyin": "bāo",
    "sinoVietnamese": "bao",
    "meaning": "gói",
    "partOfSpeech": "Động từ / Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/包.mp3",
    "exampleSentence": {
      "chinese": "给我一个包",
      "pinyin": "Gěi wǒ yī gè bāo",
      "vietnamese": "Cho tôi một cái bao"
    }
  },
  {
    "id": "boya1-16-18",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "饺子",
    "pinyin": "jiǎozi",
    "sinoVietnamese": "giảo tử",
    "meaning": "há cảo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饺子.mp3",
    "exampleSentence": {
      "chinese": "饺子很好吃",
      "pinyin": "Jiǎo zi hěn hǎo chī",
      "vietnamese": "Sủi cảo rất ngon"
    }
  },
  {
    "id": "boya1-16-19",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "跳舞",
    "pinyin": "tiàowǔ",
    "sinoVietnamese": "khiêu vũ",
    "meaning": "nhảy múa",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/跳舞.mp3",
    "exampleSentence": {
      "chinese": "我喜欢跳舞,特别是交际舞。",
      "pinyin": "Wǒ xǐhuan tiàowǔ, tèbié shì jiāojìwǔ.",
      "vietnamese": "Tôi thích khiêu vũ, đặc biệt là nhảy giao tiếp."
    }
  },
  {
    "id": "boya1-16-20",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "听",
    "pinyin": "tīng",
    "sinoVietnamese": "thính",
    "meaning": "nghe",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听.mp3",
    "exampleSentence": {
      "chinese": "我在听音乐",
      "pinyin": "Wǒ zài tīng yīnyuè",
      "vietnamese": "Tôi đang nghe nhạc"
    }
  },
  {
    "id": "boya1-16-21",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "音乐会",
    "pinyin": "yīnyuèhuì",
    "sinoVietnamese": "âm nhạc hội",
    "meaning": "buổi hòa nhạc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/音乐会.mp3",
    "exampleSentence": {
      "chinese": "我们去听音乐会",
      "pinyin": "Wǒ men qù tīng yīn lè huì",
      "vietnamese": "Chúng tôi đi nghe hòa nhạc"
    }
  },
  {
    "id": "boya1-16-22",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "好好儿",
    "pinyin": "hǎohāor",
    "sinoVietnamese": "hảo, hiếu hảo, hiếu nhi",
    "meaning": "tử tế, cẩn thận, cho tốt, đàng hoàng",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好好儿.mp3",
    "exampleSentence": {
      "chinese": "你好好儿休息一下吧。",
      "pinyin": "Nǐ hǎohāor xiūxī yīxià ba.",
      "vietnamese": "Bạn hãy nghỉ ngơi cho tốt đi."
    }
  },
  {
    "id": "boya1-16-23",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "睡懒觉",
    "pinyin": "shuìlǎnjiào",
    "sinoVietnamese": "thụy lãn giác",
    "meaning": "ngủ nướng, ngủ dậy muộn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/睡懒觉.mp3",
    "exampleSentence": {
      "chinese": "周末我喜欢睡懒觉。",
      "pinyin": "Zhōumò wǒ xǐhuān shuìlǎnjiào.",
      "vietnamese": "Cuối tuần tôi thích ngủ nướng."
    }
  },
  {
    "id": "boya1-16-24",
    "lesson": 16,
    "lessonTitle": "Bài 16: 周末你干什么 (Cuối tuần bạn làm gì)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "迪厅",
    "pinyin": "dítīng",
    "sinoVietnamese": "địch sảnh",
    "meaning": "sàn nhảy, vũ trường, quán bar nhảy",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/迪厅.mp3",
    "exampleSentence": {
      "chinese": "他们晚上去了迪厅跳舞。",
      "pinyin": "Tāmen wǎnshang qùle dítīng tiàowǔ.",
      "vietnamese": "Tối họ đã đi sàn nhảy để khiêu vũ."
    }
  },
  {
    "id": "boya1-17-1",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "上",
    "pinyin": "shàng",
    "sinoVietnamese": "thượng",
    "meaning": "trên",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上.mp3",
    "exampleSentence": {
      "chinese": "桌子上有书",
      "pinyin": "Zhuōzi shàng yǒu shū",
      "vietnamese": "Trên bàn có sách"
    }
  },
  {
    "id": "boya1-17-2",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "做客",
    "pinyin": "zuòkè",
    "sinoVietnamese": "tố khách",
    "meaning": "làm khách",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/做客.mp3",
    "exampleSentence": {
      "chinese": "我们去朋友家做客。",
      "pinyin": "Wǒmen qù péngyǒu jiā zuòkè.",
      "vietnamese": "Chúng tôi đến nhà bạn làm khách."
    }
  },
  {
    "id": "boya1-17-3",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "请进",
    "pinyin": "qǐngjìn",
    "sinoVietnamese": "thỉnh tiến",
    "meaning": "mời vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/请进.mp3",
    "exampleSentence": {
      "chinese": "请进，请坐",
      "pinyin": "Qǐng jìn, qǐng zuò",
      "vietnamese": "Mời vào, mời ngồi"
    }
  },
  {
    "id": "boya1-17-4",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "真",
    "pinyin": "zhēn",
    "sinoVietnamese": "chân",
    "meaning": "thật",
    "partOfSpeech": "Phó từ / Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/真.mp3",
    "exampleSentence": {
      "chinese": "真的",
      "pinyin": "Zhēn de",
      "vietnamese": "Thật sự, thật"
    }
  },
  {
    "id": "boya1-17-5",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "干净",
    "pinyin": "gānjìng",
    "sinoVietnamese": "can tịnh",
    "meaning": "sạch sẽ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/干净.mp3",
    "exampleSentence": {
      "chinese": "这个房间很干净。",
      "pinyin": "Zhège fángjiān hěn gānjìng.",
      "vietnamese": "Căn phòng này rất sạch sẽ."
    }
  },
  {
    "id": "boya1-17-6",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "坐",
    "pinyin": "zuò",
    "sinoVietnamese": "toạ",
    "meaning": "ngồi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坐.mp3",
    "exampleSentence": {
      "chinese": "请坐",
      "pinyin": "Qǐng zuò",
      "vietnamese": "Mời ngồi"
    }
  },
  {
    "id": "boya1-17-7",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "哎呀",
    "pinyin": "āiyā",
    "sinoVietnamese": "ai nha",
    "meaning": "thán từ 'ai ya'",
    "partOfSpeech": "Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哎呀.mp3",
    "exampleSentence": {
      "chinese": "哎呀，我忘了带钥匙",
      "pinyin": "Āiyā, wǒ wàng le dài yàoshi",
      "vietnamese": "Ôi, tôi quên mang chìa khóa"
    }
  },
  {
    "id": "boya1-17-8",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "客气",
    "pinyin": "kèqi",
    "sinoVietnamese": "khách khí",
    "meaning": "lịch sự",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/客气.mp3",
    "exampleSentence": {
      "chinese": "他是个很客气的人。",
      "pinyin": "Tā shì gè hěn kèqi de rén.",
      "vietnamese": "Anh ấy là người rất lịch sự."
    }
  },
  {
    "id": "boya1-17-9",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "一点儿",
    "pinyin": "yìdiǎnr",
    "sinoVietnamese": "nhất điểm nhi",
    "meaning": "một chút, một ít",
    "partOfSpeech": "Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一点儿.mp3",
    "exampleSentence": {
      "chinese": "我想喝一点儿温水。",
      "pinyin": "Wǒ xiǎng hē yìdiǎnr wēnshuǐ.",
      "vietnamese": "Tôi muốn uống một chút nước ấm."
    }
  },
  {
    "id": "boya1-17-10",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "心意",
    "pinyin": "xīnyì",
    "sinoVietnamese": "tâm ý",
    "meaning": "ý định, tâm ý",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/心意.mp3",
    "exampleSentence": {
      "chinese": "这份礼物代表我的一点心意",
      "pinyin": "Zhè fèn lǐwù dàibiǎo wǒ de yīdiǎn xīnyì",
      "vietnamese": "Món quà này thể hiện một chút tấm lòng của tôi."
    }
  },
  {
    "id": "boya1-17-11",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "茶",
    "pinyin": "chá",
    "sinoVietnamese": "trà",
    "meaning": "trà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/茶.mp3",
    "exampleSentence": {
      "chinese": "我喜欢喝茶",
      "pinyin": "Wǒ xǐhuan hē chá",
      "vietnamese": "Tôi thích uống trà"
    }
  },
  {
    "id": "boya1-17-12",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "果汁",
    "pinyin": "guǒzhī",
    "sinoVietnamese": "quả trấp",
    "meaning": "nước ép trái cây",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/果汁.mp3",
    "exampleSentence": {
      "chinese": "我喜欢喝新鲜果汁。",
      "pinyin": "Wǒ xǐhuan hē xīnxiān guǒzhī.",
      "vietnamese": "Tôi thích uống nước ép trái cây tươi."
    }
  },
  {
    "id": "boya1-17-13",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "随便",
    "pinyin": "suíbiàn",
    "sinoVietnamese": "tuỳ tiện",
    "meaning": "tùy ý",
    "partOfSpeech": "Tính từ / Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/随便.mp3",
    "exampleSentence": {
      "chinese": "随便吃",
      "pinyin": "Suí biàn chī",
      "vietnamese": "Ăn tùy ý"
    }
  },
  {
    "id": "boya1-17-14",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "行",
    "pinyin": "xíng",
    "sinoVietnamese": "hành",
    "meaning": "được",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/行.mp3",
    "exampleSentence": {
      "chinese": "这样可以吗",
      "pinyin": "Zhè yàng kě yǐ ma",
      "vietnamese": "Được như vậy không"
    }
  },
  {
    "id": "boya1-17-15",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "路上",
    "pinyin": "lùshàng",
    "sinoVietnamese": "lộ thượng",
    "meaning": "trên đường",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/路上.mp3",
    "exampleSentence": {
      "chinese": "路上小心。",
      "pinyin": "Lùshang xiǎoxīn.",
      "vietnamese": "Cẩn thận trên đường."
    }
  },
  {
    "id": "boya1-17-16",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "顺利",
    "pinyin": "shùnlì",
    "sinoVietnamese": "thuận lợi",
    "meaning": "suôn sẻ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/顺利.mp3",
    "exampleSentence": {
      "chinese": "祝你工作顺利",
      "pinyin": "Zhù nǐ gōng zuò shùn lì",
      "vietnamese": "Chúc công việc suôn sẻ"
    }
  },
  {
    "id": "boya1-17-17",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "挤",
    "pinyin": "jǐ",
    "sinoVietnamese": "tễ",
    "meaning": "chật chội",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挤.mp3",
    "exampleSentence": {
      "chinese": "车里太挤了",
      "pinyin": "Chē lǐ tài jǐ le",
      "vietnamese": "Trong xe quá chật/chen lấn"
    }
  },
  {
    "id": "boya1-17-18",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "打车",
    "pinyin": "dǎchē",
    "sinoVietnamese": "đả xa",
    "meaning": "đón xe",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打车.mp3",
    "exampleSentence": {
      "chinese": "我们去打车吧。",
      "pinyin": "Wǒmen qù dǎchē ba.",
      "vietnamese": "Chúng ta hãy bắt taxi nhé."
    }
  },
  {
    "id": "boya1-17-19",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "空调",
    "pinyin": "kōngtiáo",
    "sinoVietnamese": "không điều",
    "meaning": "máy điều hòa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/空调.mp3",
    "exampleSentence": {
      "chinese": "夏天需要开空调。",
      "pinyin": "Xiàtiān xūyào kāi kōngtiáo.",
      "vietnamese": "Mùa hè cần bật điều hòa."
    }
  },
  {
    "id": "boya1-17-20",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "大巴",
    "pinyin": "dàbā",
    "sinoVietnamese": "đại ba",
    "meaning": "xe buýt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大巴.mp3",
    "exampleSentence": {
      "chinese": "我们坐大巴去机场",
      "pinyin": "Wǒmen zuò dàbā qù jīchǎng",
      "vietnamese": "Chúng tôi đi xe buýt ra sân bay"
    }
  },
  {
    "id": "boya1-17-21",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "地铁",
    "pinyin": "dìtiě",
    "sinoVietnamese": "địa thiết",
    "meaning": "tàu điện ngầm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地铁.mp3",
    "exampleSentence": {
      "chinese": "坐地铁",
      "pinyin": "Zuò dì tiě",
      "vietnamese": "Đi tàu điện ngầm"
    }
  },
  {
    "id": "boya1-17-22",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "饿",
    "pinyin": "è",
    "sinoVietnamese": "ngạ",
    "meaning": "đói",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饿.mp3",
    "exampleSentence": {
      "chinese": "我饿了",
      "pinyin": "Wǒ è le",
      "vietnamese": "Tôi đã đói rồi"
    }
  },
  {
    "id": "boya1-17-23",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "吃",
    "pinyin": "chī",
    "sinoVietnamese": "cật, ngật",
    "meaning": "ăn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吃.mp3",
    "exampleSentence": {
      "chinese": "我吃苹果",
      "pinyin": "Wǒ chī píngguǒ",
      "vietnamese": "Tôi ăn táo"
    }
  },
  {
    "id": "boya1-17-24",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "会",
    "pinyin": "huì",
    "sinoVietnamese": "hội",
    "meaning": "có thể",
    "partOfSpeech": "Trợ động từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/会.mp3",
    "exampleSentence": {
      "chinese": "我会说中文",
      "pinyin": "Wǒ huì shuō Zhōng wén",
      "vietnamese": "Tôi biết nói tiếng Trung"
    }
  },
  {
    "id": "boya1-17-25",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "试",
    "pinyin": "shì",
    "sinoVietnamese": "thí",
    "meaning": "thử",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/试.mp3",
    "exampleSentence": {
      "chinese": "试一下",
      "pinyin": "Shì yī xià",
      "vietnamese": "Thử một chút"
    }
  },
  {
    "id": "boya1-17-26",
    "lesson": 17,
    "lessonTitle": "Bài 17: 做客（一） (Làm khách (Phần 1))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "收下",
    "pinyin": "shōuxià",
    "sinoVietnamese": "thu hạ",
    "meaning": "nhận lấy, nhận cho",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/收下.mp3",
    "exampleSentence": {
      "chinese": "这份礼物请你收下。",
      "pinyin": "Zhè fèn lǐwù qǐng nǐ shōuxià.",
      "vietnamese": "Xin bạn hãy nhận món quà này."
    }
  },
  {
    "id": "boya1-18-1",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "节",
    "pinyin": "jié",
    "sinoVietnamese": "tiết",
    "meaning": "ngày lễ",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/节.mp3",
    "exampleSentence": {
      "chinese": "这节课很有意思",
      "pinyin": "Zhè jié kè hěn yǒu yì sī",
      "vietnamese": "Tiết học này rất hay"
    }
  },
  {
    "id": "boya1-18-2",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "花",
    "pinyin": "huā",
    "sinoVietnamese": "hoa",
    "meaning": "hoa",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/花.mp3",
    "exampleSentence": {
      "chinese": "这朵花很漂亮",
      "pinyin": "Zhè duǒ huā hěn piào liang",
      "vietnamese": "Bông hoa này rất đẹp"
    }
  },
  {
    "id": "boya1-18-3",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "sinoVietnamese": "hảo cật, ngật",
    "meaning": "ngon (về đồ ăn)",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好吃.mp3",
    "exampleSentence": {
      "chinese": "这个菜很好吃。",
      "pinyin": "Zhège cài hěn hǎochī.",
      "vietnamese": "Món này rất ngon."
    }
  },
  {
    "id": "boya1-18-4",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "味道",
    "pinyin": "wèidao",
    "sinoVietnamese": "vị đạo",
    "meaning": "hương vị",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/味道.mp3",
    "exampleSentence": {
      "chinese": "这个菜味道很好",
      "pinyin": "Zhè gè cài wèi dào hěn hǎo",
      "vietnamese": "Món ăn này rất ngon"
    }
  },
  {
    "id": "boya1-18-5",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "北方",
    "pinyin": "běifāng",
    "sinoVietnamese": "bắc phương",
    "meaning": "phía bắc",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/北方.mp3",
    "exampleSentence": {
      "chinese": "北方很冷",
      "pinyin": "Běi fāng hěn lěng",
      "vietnamese": "Phía Bắc rất lạnh"
    }
  },
  {
    "id": "boya1-18-6",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "过",
    "pinyin": "guò",
    "sinoVietnamese": "quá",
    "meaning": "đã qua",
    "partOfSpeech": "Trợ từ / Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/过.mp3",
    "exampleSentence": {
      "chinese": "我吃过饭了",
      "pinyin": "Wǒ chī guò fàn le",
      "vietnamese": "Tôi đã ăn rồi"
    }
  },
  {
    "id": "boya1-18-7",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "客人",
    "pinyin": "kèrén",
    "sinoVietnamese": "khách nhân",
    "meaning": "khách hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/客人.mp3",
    "exampleSentence": {
      "chinese": "店里有很多客人",
      "pinyin": "Diàn lǐ yǒu hěn duō kè rén",
      "vietnamese": "Tiệm có rất nhiều khách"
    }
  },
  {
    "id": "boya1-18-8",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "南方",
    "pinyin": "nánfāng",
    "sinoVietnamese": "nam phương",
    "meaning": "miền Nam",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/南方.mp3",
    "exampleSentence": {
      "chinese": "南方很温暖",
      "pinyin": "Nán fāng hěn wēn nuǎn",
      "vietnamese": "Miền Nam rất ấm áp"
    }
  },
  {
    "id": "boya1-18-9",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "sinoVietnamese": "mễ phạn",
    "meaning": "cơm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/米饭.mp3",
    "exampleSentence": {
      "chinese": "我吃米饭",
      "pinyin": "Wǒ chī mǐfàn",
      "vietnamese": "Tôi ăn cơm"
    }
  },
  {
    "id": "boya1-18-10",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "重要",
    "pinyin": "zhòngyào",
    "sinoVietnamese": "trọng yếu",
    "meaning": "quan trọng",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/重要.mp3",
    "exampleSentence": {
      "chinese": "这件事很重要",
      "pinyin": "Zhè jiàn shì hěn zhòngyào",
      "vietnamese": "Việc này rất quan trọng"
    }
  },
  {
    "id": "boya1-18-11",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "种",
    "pinyin": "zhǒng",
    "sinoVietnamese": "chủng",
    "meaning": "loại",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/种.mp3",
    "exampleSentence": {
      "chinese": "这种水果我从来没吃过。",
      "pinyin": "Zhè zhǒng shuǐguǒ wǒ cónglái méi chīguo.",
      "vietnamese": "Loại quả này tôi chưa từng ăn."
    }
  },
  {
    "id": "boya1-18-12",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "食品",
    "pinyin": "shípǐn",
    "sinoVietnamese": "thực phẩm",
    "meaning": "thực phẩm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/食品.mp3",
    "exampleSentence": {
      "chinese": "这种食品很健康。",
      "pinyin": "Zhè zhǒng shípǐn hěn jiànkāng.",
      "vietnamese": "Loại thực phẩm này rất tốt cho sức khỏe."
    }
  },
  {
    "id": "boya1-18-13",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "麻烦",
    "pinyin": "máfan",
    "sinoVietnamese": "ma phiền",
    "meaning": "phiền phức",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/麻烦.mp3",
    "exampleSentence": {
      "chinese": "这件事很麻烦。",
      "pinyin": "Zhè jiàn shì hěn má fán.",
      "vietnamese": "Việc này rất phiền phức."
    }
  },
  {
    "id": "boya1-18-14",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "少",
    "pinyin": "shǎo",
    "sinoVietnamese": "thiểu",
    "meaning": "ít",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/少.mp3",
    "exampleSentence": {
      "chinese": "人很少",
      "pinyin": "Rén hěn shǎo",
      "vietnamese": "Người rất ít"
    }
  },
  {
    "id": "boya1-18-15",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "得",
    "pinyin": "děi",
    "sinoVietnamese": "đắc",
    "meaning": "phải, cần",
    "partOfSpeech": "Động từ / Trợ từ / Trợ động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/得.mp3",
    "exampleSentence": {
      "chinese": "我得到了好消息",
      "pinyin": "Wǒ dé dào le hǎo xiāo xī",
      "vietnamese": "Tôi đã nhận được tin tốt"
    }
  },
  {
    "id": "boya1-18-16",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "超市",
    "pinyin": "chāoshì",
    "sinoVietnamese": "siêu thị",
    "meaning": "siêu thị",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/超市.mp3",
    "exampleSentence": {
      "chinese": "我们去超市买东西",
      "pinyin": "Wǒ men qù chāo shì mǎi dōng xī",
      "vietnamese": "Chúng tôi đi siêu thị mua đồ"
    }
  },
  {
    "id": "boya1-18-17",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "如果",
    "pinyin": "rúguǒ",
    "sinoVietnamese": "như quả",
    "meaning": "nếu",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/如果.mp3",
    "exampleSentence": {
      "chinese": "如果明天不下雨，我们就去",
      "pinyin": "Rú guǒ míng tiān bù xià yǔ, wǒ men jiù qù",
      "vietnamese": "Nếu mai không mưa, chúng ta sẽ đi"
    }
  },
  {
    "id": "boya1-18-18",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "的话",
    "pinyin": "dehuà",
    "sinoVietnamese": "đích thoại",
    "meaning": "nếu",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/的话.mp3",
    "exampleSentence": {
      "chinese": "如果不去的话",
      "pinyin": "Rú guǒ bù qù de huà",
      "vietnamese": "Nếu không đi"
    }
  },
  {
    "id": "boya1-18-19",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "sinoVietnamese": "tưởng",
    "meaning": "nghĩ",
    "partOfSpeech": "Trợ động từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/想.mp3",
    "exampleSentence": {
      "chinese": "我想去中国",
      "pinyin": "Wǒ xiǎng qù Zhōngguó",
      "vietnamese": "Tôi muốn đi Trung Quốc"
    }
  },
  {
    "id": "boya1-18-20",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "袋",
    "pinyin": "dài",
    "sinoVietnamese": "đại",
    "meaning": "túi",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/袋.mp3",
    "exampleSentence": {
      "chinese": "请给我一个塑料袋。",
      "pinyin": "Qǐng gěi wǒ yí ge sùliàodài.",
      "vietnamese": "Xin cho tôi một chiếc túi ni lông."
    }
  },
  {
    "id": "boya1-18-21",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "偷懒",
    "pinyin": "tōulǎn",
    "sinoVietnamese": "thâu lãn",
    "meaning": "lười biếng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/偷懒.mp3",
    "exampleSentence": {
      "chinese": "上班时间不能偷懒。",
      "pinyin": "Shàngbān shíjiān bù néng tōulǎn.",
      "vietnamese": "Trong giờ làm việc không được lười biếng."
    }
  },
  {
    "id": "boya1-18-22",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "大家",
    "pinyin": "dàjiā",
    "sinoVietnamese": "đại gia",
    "meaning": "mọi người",
    "partOfSpeech": "Đại từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大家.mp3",
    "exampleSentence": {
      "chinese": "大家好",
      "pinyin": "Dà jiā hǎo",
      "vietnamese": "Chào mọi người"
    }
  },
  {
    "id": "boya1-18-23",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "热闹",
    "pinyin": "rènao",
    "sinoVietnamese": "nhiệt náo",
    "meaning": "nhộn nhịp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/热闹.mp3",
    "exampleSentence": {
      "chinese": "这个热闹很好。",
      "pinyin": "Zhè gè rè nào hěn hǎo.",
      "vietnamese": "nhộn nhịp này rất tốt."
    }
  },
  {
    "id": "boya1-18-24",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "有意思",
    "pinyin": "yǒuyìsi",
    "sinoVietnamese": "hữu ý tư",
    "meaning": "thú vị",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有意思.mp3",
    "exampleSentence": {
      "chinese": "这本书很有意思",
      "pinyin": "Zhè běn shū hěn yǒu yì sī",
      "vietnamese": "Quyển sách này rất thú vị"
    }
  },
  {
    "id": "boya1-18-25",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "面食",
    "pinyin": "miànshí",
    "sinoVietnamese": "diện, miến thực",
    "meaning": "món ăn làm từ bột mì, thực phẩm bột mì",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面食.mp3",
    "exampleSentence": {
      "chinese": "北方人喜欢吃面食。",
      "pinyin": "Běifāngrén xǐhuān chī miànshí.",
      "vietnamese": "Người miền Bắc thích ăn các món từ bột mì."
    }
  },
  {
    "id": "boya1-18-26",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "速冻",
    "pinyin": "sùdòng",
    "sinoVietnamese": "tốc đống",
    "meaning": "đông lạnh nhanh, cấp đông",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/速冻.mp3",
    "exampleSentence": {
      "chinese": "这些饺子是速冻的。",
      "pinyin": "Zhèxiē jiǎozi shì sùdòng de.",
      "vietnamese": "Mấy cái há cảo này là loại cấp đông."
    }
  },
  {
    "id": "boya1-18-27",
    "lesson": 18,
    "lessonTitle": "Bài 18: 做客（二） (Làm khách (Phần 2))",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "馅儿",
    "pinyin": "xiànr",
    "sinoVietnamese": "hãm nhi",
    "meaning": "nhân (bánh, há cảo...)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/馅儿.mp3",
    "exampleSentence": {
      "chinese": "饺子馅儿很好吃。",
      "pinyin": "Jiǎozi xiànr hěn hǎochī.",
      "vietnamese": "Nhân há cảo rất ngon."
    }
  },
  {
    "id": "boya1-19-1",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "多",
    "pinyin": "duō",
    "sinoVietnamese": "đa",
    "meaning": "nhiều",
    "partOfSpeech": "Tính từ / Phó từ / Số từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/多.mp3",
    "exampleSentence": {
      "chinese": "很多人",
      "pinyin": "Hěn duō rén",
      "vietnamese": "Nhiều người"
    }
  },
  {
    "id": "boya1-19-2",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "长",
    "pinyin": "cháng",
    "sinoVietnamese": "trường",
    "meaning": "dài; chiều dài",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/长.mp3",
    "exampleSentence": {
      "chinese": "他的头发很长",
      "pinyin": "Tā de tóu fā hěn zhǎng",
      "vietnamese": "Tóc anh ấy rất dài"
    }
  },
  {
    "id": "boya1-19-3",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "年",
    "pinyin": "nián",
    "sinoVietnamese": "niên",
    "meaning": "năm",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/年.mp3",
    "exampleSentence": {
      "chinese": "医生建议他每年做一次常规体检。",
      "pinyin": "yī shēng jiàn yì tā měi nián zuò yī cì cháng guī tǐ jiǎn.",
      "vietnamese": "Bác sĩ khuyên anh ấy nên đi khám sức khỏe định kỳ mỗi năm."
    }
  },
  {
    "id": "boya1-19-4",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "习惯",
    "pinyin": "xíguàn",
    "sinoVietnamese": "tập quán",
    "meaning": "thói quen; quen thuộc",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/习惯.mp3",
    "exampleSentence": {
      "chinese": "早起是个好习惯",
      "pinyin": "Zǎo qǐ shì gè hǎo xí guàn",
      "vietnamese": "Dậy sớm là một thói quen tốt"
    }
  },
  {
    "id": "boya1-19-5",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "生活",
    "pinyin": "shēnghuó",
    "sinoVietnamese": "sinh, sanh hoạt",
    "meaning": "cuộc sống",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生活.mp3",
    "exampleSentence": {
      "chinese": "我们的生活越来越好",
      "pinyin": "Wǒ men de shēng huó yuè lái yuè hǎo",
      "vietnamese": "Cuộc sống của chúng tôi ngày càng tốt đẹp hơn"
    }
  },
  {
    "id": "boya1-19-6",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "刚",
    "pinyin": "gāng",
    "sinoVietnamese": "cương, cang",
    "meaning": "vừa mới",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/刚.mp3",
    "exampleSentence": {
      "chinese": "我刚到",
      "pinyin": "Wǒ gāng dào",
      "vietnamese": "Tôi vừa mới đến"
    }
  },
  {
    "id": "boya1-19-7",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "已经",
    "pinyin": "yǐjīng",
    "sinoVietnamese": "dĩ kinh",
    "meaning": "đã",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/已经.mp3",
    "exampleSentence": {
      "chinese": "我已经吃饭了",
      "pinyin": "Wǒ yǐ jīng chī fàn le",
      "vietnamese": "Tôi đã ăn cơm rồi"
    }
  },
  {
    "id": "boya1-19-8",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "不好意思",
    "pinyin": "bù hǎo yìsi",
    "sinoVietnamese": "bất hảo, hiếu ý tư, tai",
    "meaning": "xấu hổ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不好意思.mp3",
    "exampleSentence": {
      "chinese": "不好意思，我迟到了。",
      "pinyin": "Bù hǎo yì sī, wǒ chí dào le.",
      "vietnamese": "Xin lỗi, tôi đến muộn."
    }
  },
  {
    "id": "boya1-19-9",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "才",
    "pinyin": "cái",
    "sinoVietnamese": "tài",
    "meaning": "chỉ",
    "partOfSpeech": "Phó từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/才.mp3",
    "exampleSentence": {
      "chinese": "我才来",
      "pinyin": "Wǒ cái lái",
      "vietnamese": "Tôi mới đến"
    }
  },
  {
    "id": "boya1-19-10",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "起床",
    "pinyin": "qǐchuáng",
    "sinoVietnamese": "khởi sàng",
    "meaning": "thức dậy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/起床.mp3",
    "exampleSentence": {
      "chinese": "我七点起床",
      "pinyin": "Wǒ qī diǎn qǐchuáng",
      "vietnamese": "Tôi thức dậy lúc bảy giờ"
    }
  },
  {
    "id": "boya1-19-11",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "床",
    "pinyin": "chuáng",
    "sinoVietnamese": "sàng",
    "meaning": "giường",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/床.mp3",
    "exampleSentence": {
      "chinese": "我躺在床上",
      "pinyin": "Wǒ tǎng zài chuángshang",
      "vietnamese": "Tôi nằm trên giường"
    }
  },
  {
    "id": "boya1-19-12",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "睡",
    "pinyin": "shuì",
    "sinoVietnamese": "thụy",
    "meaning": "ngủ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/睡.mp3",
    "exampleSentence": {
      "chinese": "我睡了",
      "pinyin": "Wǒ shuì le",
      "vietnamese": "Tôi ngủ rồi/tôi đi ngủ đây"
    }
  },
  {
    "id": "boya1-19-13",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "夜里",
    "pinyin": "yèli",
    "sinoVietnamese": "dạ lí",
    "meaning": "vào ban đêm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/夜里.mp3",
    "exampleSentence": {
      "chinese": "夜里很冷",
      "pinyin": "Yè lǐ hěn lěng",
      "vietnamese": "Ban đêm rất lạnh"
    }
  },
  {
    "id": "boya1-19-14",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "工作",
    "pinyin": "gōngzuò",
    "sinoVietnamese": "công tác",
    "meaning": "công việc",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/工作.mp3",
    "exampleSentence": {
      "chinese": "我在工作",
      "pinyin": "Wǒ zài gōngzuò",
      "vietnamese": "Tôi đang làm việc"
    }
  },
  {
    "id": "boya1-19-15",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "毛病",
    "pinyin": "máobing",
    "sinoVietnamese": "mao bệnh",
    "meaning": "khuyết điểm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/毛病.mp3",
    "exampleSentence": {
      "chinese": "这台机器有什么毛病？",
      "pinyin": "Zhè tái jīqì yǒu shén máobìng?",
      "vietnamese": "Cái máy này có trục trặc gì không?"
    }
  },
  {
    "id": "boya1-19-16",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "改",
    "pinyin": "gǎi",
    "sinoVietnamese": "cải",
    "meaning": "thay đổi, sửa đổi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/改.mp3",
    "exampleSentence": {
      "chinese": "需要改正",
      "pinyin": "Xū yào gǎi zhèng",
      "vietnamese": "Cần sửa đổi"
    }
  },
  {
    "id": "boya1-19-17",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "年纪",
    "pinyin": "niánjì",
    "sinoVietnamese": "niên kỷ",
    "meaning": "tuổi tác",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/年纪.mp3",
    "exampleSentence": {
      "chinese": "你今年多大年纪？",
      "pinyin": "Nǐ jīnnián duō dà niánjì?",
      "vietnamese": "Năm nay bạn bao nhiêu tuổi?"
    }
  },
  {
    "id": "boya1-19-18",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "大概",
    "pinyin": "dàgài",
    "sinoVietnamese": "đại khái",
    "meaning": "khoảng",
    "partOfSpeech": "Phó từ / Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大概.mp3",
    "exampleSentence": {
      "chinese": "现在是大概下午三点左右。",
      "pinyin": "Xiànzài shì dàgài xiàwǔ sān diǎn zuǒyòu.",
      "vietnamese": "Bây giờ là khoảng ba giờ chiều."
    }
  },
  {
    "id": "boya1-19-19",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "岁",
    "pinyin": "suì",
    "sinoVietnamese": "tuế",
    "meaning": "tuổi",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/岁.mp3",
    "exampleSentence": {
      "chinese": "我今年二十岁",
      "pinyin": "Wǒ jīnnián èrshí suì",
      "vietnamese": "Năm nay tôi 20 tuổi"
    }
  },
  {
    "id": "boya1-19-20",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "大",
    "pinyin": "dà",
    "sinoVietnamese": "đại",
    "meaning": "lớn",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/大.mp3",
    "exampleSentence": {
      "chinese": "很大",
      "pinyin": "hěn dà",
      "vietnamese": "Rất to"
    }
  },
  {
    "id": "boya1-19-21",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "点钟",
    "pinyin": "diǎnzhōng",
    "sinoVietnamese": "điểm chung",
    "meaning": "giờ, giờ đồng hồ (thường dùng sau số)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点钟.mp3",
    "exampleSentence": {
      "chinese": "现在是十点钟。",
      "pinyin": "Xiànzài shì shí diǎnzhōng.",
      "vietnamese": "Bây giờ là mười giờ."
    }
  },
  {
    "id": "boya1-19-22",
    "lesson": 19,
    "lessonTitle": "Bài 19: 早睡早起比较好啊 (Ngủ sớm dậy sớm tốt hơn nhé)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "早睡早起",
    "pinyin": "zǎo shuì zǎo qǐ",
    "sinoVietnamese": "tảo thụy tảo khởi",
    "meaning": "ngủ sớm dậy sớm",
    "partOfSpeech": "Thành ngữ / Cụm động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/早睡早起.mp3",
    "exampleSentence": {
      "chinese": "早睡早起身体好。",
      "pinyin": "Zǎo shuì zǎo qǐ shēntǐ hǎo.",
      "vietnamese": "Ngủ sớm dậy sớm tốt cho sức khỏe."
    }
  },
  {
    "id": "boya1-20-1",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "看",
    "pinyin": "kàn",
    "sinoVietnamese": "khán",
    "meaning": "nhìn, xem",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看.mp3",
    "exampleSentence": {
      "chinese": "我看书",
      "pinyin": "Wǒ kàn shū",
      "vietnamese": "Tôi đọc sách"
    }
  },
  {
    "id": "boya1-20-2",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "别",
    "pinyin": "bié",
    "sinoVietnamese": "biệt",
    "meaning": "đừng",
    "partOfSpeech": "Phó từ / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/别.mp3",
    "exampleSentence": {
      "chinese": "别在公共场所大声喧哗。",
      "pinyin": "Bié zài gōng gòng chǎng suǒ dà shēng xuān huá.",
      "vietnamese": "Đừng làm ồn ào ở nơi công cộng."
    }
  },
  {
    "id": "boya1-20-3",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "无聊",
    "pinyin": "wúliáo",
    "sinoVietnamese": "vô liêu",
    "meaning": "nhàm chán",
    "partOfSpeech": "Tính từ (adjective)",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/无聊.mp3",
    "exampleSentence": {
      "chinese": "我很无聊，想找人聊天。",
      "pinyin": "Wǒ hěn wúliáo, xiǎng zhǎorén liáotiān.",
      "vietnamese": "Tôi đang chán, muốn tìm người trò chuyện."
    }
  },
  {
    "id": "boya1-20-4",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "sinoVietnamese": "y viện",
    "meaning": "bệnh viện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/医院.mp3",
    "exampleSentence": {
      "chinese": "我去了医院",
      "pinyin": "Wǒ qù le yīyuàn",
      "vietnamese": "Tôi đã đến bệnh viện"
    }
  },
  {
    "id": "boya1-20-5",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "做梦",
    "pinyin": "zuòmèng",
    "sinoVietnamese": "tố mộng",
    "meaning": "có một giấc mơ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/做梦.mp3",
    "exampleSentence": {
      "chinese": "昨天晚上我做了一个好梦。",
      "pinyin": "Zuótiān wǎnshang wǒ zuò le yí ge hǎo mèng.",
      "vietnamese": "Tối hôm qua tôi đã có một giấc mơ đẹp."
    }
  },
  {
    "id": "boya1-20-6",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "幸福",
    "pinyin": "xìngfú",
    "sinoVietnamese": "hạnh phúc",
    "meaning": "hạnh phúc",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/幸福.mp3",
    "exampleSentence": {
      "chinese": "祝你和家人幸福。",
      "pinyin": "Zhù nǐ hé jiārén xìngfú.",
      "vietnamese": "Chúc bạn và gia đình hạnh phúc."
    }
  },
  {
    "id": "boya1-20-7",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "背",
    "pinyin": "bēi",
    "sinoVietnamese": "bối, bội",
    "meaning": "mang trên lưng; lưng",
    "partOfSpeech": "Động từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/背.mp3",
    "exampleSentence": {
      "chinese": "他背着书包",
      "pinyin": "Tā bèi zhe shū bāo",
      "vietnamese": "Anh ấy mang ba lô trên lưng"
    }
  },
  {
    "id": "boya1-20-8",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "生词",
    "pinyin": "shēngcí",
    "sinoVietnamese": "sinh, sanh từ",
    "meaning": "từ mới",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生词.mp3",
    "exampleSentence": {
      "chinese": "今天学了十个生词",
      "pinyin": "Jīn tiān xué le shí gè shēng cí",
      "vietnamese": "Hôm nay học mười từ mới"
    }
  },
  {
    "id": "boya1-20-9",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "考试",
    "pinyin": "kǎoshì",
    "sinoVietnamese": "khảo thí",
    "meaning": "thi",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/考试.mp3",
    "exampleSentence": {
      "chinese": "明天有考试",
      "pinyin": "Míngtiān yǒu kǎoshì",
      "vietnamese": "Ngày mai có thi"
    }
  },
  {
    "id": "boya1-20-10",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "累",
    "pinyin": "lèi",
    "sinoVietnamese": "lụy",
    "meaning": "mệt mỏi",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/累.mp3",
    "exampleSentence": {
      "chinese": "我很累",
      "pinyin": "Wǒ hěn lèi",
      "vietnamese": "Tôi rất mệt"
    }
  },
  {
    "id": "boya1-20-11",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "死",
    "pinyin": "sǐ",
    "sinoVietnamese": "tử",
    "meaning": "chết",
    "partOfSpeech": "Động từ / Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/死.mp3",
    "exampleSentence": {
      "chinese": "今天跑了五公里，累死我了。",
      "pinyin": "Jīntiān pǎo le wǔ gōnglǐ, lèi sǐ wǒ le.",
      "vietnamese": "Hôm nay chạy 5 cây số, mệt chết tôi rồi."
    }
  },
  {
    "id": "boya1-20-12",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "住",
    "pinyin": "zhù",
    "sinoVietnamese": "trú",
    "meaning": "sống, cư trú",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/住.mp3",
    "exampleSentence": {
      "chinese": "我住在北京",
      "pinyin": "Wǒ zhù zài Běijīng",
      "vietnamese": "Tôi ở tại Bắc Kinh"
    }
  },
  {
    "id": "boya1-20-13",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "问",
    "pinyin": "wèn",
    "sinoVietnamese": "vấn",
    "meaning": "hỏi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/问.mp3",
    "exampleSentence": {
      "chinese": "我问老师一个问题",
      "pinyin": "Wǒ wèn lǎoshī yī gè wèntí",
      "vietnamese": "Tôi hỏi thầy một câu hỏi"
    }
  },
  {
    "id": "boya1-20-14",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "医生",
    "pinyin": "yīshēng",
    "sinoVietnamese": "y sinh, sanh",
    "meaning": "bác sĩ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/医生.mp3",
    "exampleSentence": {
      "chinese": "他是医生",
      "pinyin": "Tā shì yīshēng",
      "vietnamese": "Anh ấy là bác sĩ"
    }
  },
  {
    "id": "boya1-20-15",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "同意",
    "pinyin": "tóngyì",
    "sinoVietnamese": "đồng ý",
    "meaning": "đồng ý",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/同意.mp3",
    "exampleSentence": {
      "chinese": "我同意你的看法。",
      "pinyin": "Wǒ tóngyì nǐ de kànfǎ.",
      "vietnamese": "Tôi đồng ý với quan điểm của bạn."
    }
  },
  {
    "id": "boya1-20-16",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "炒",
    "pinyin": "chǎo",
    "sinoVietnamese": "sao",
    "meaning": "xào, chiên",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/炒.mp3",
    "exampleSentence": {
      "chinese": "妈妈正在厨房里炒青菜。",
      "pinyin": "mā ma zhèng zài chú fáng lǐ chǎo qīng cài.",
      "vietnamese": "Mẹ đang xào rau xanh ở trong bếp."
    }
  },
  {
    "id": "boya1-20-17",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "菜",
    "pinyin": "cài",
    "sinoVietnamese": "thái",
    "meaning": "món ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/菜.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃中国菜",
      "pinyin": "Wǒ xǐhuan chī Zhōngguó cài",
      "vietnamese": "Tôi thích ăn món Trung Quốc"
    }
  },
  {
    "id": "boya1-20-18",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "sinoVietnamese": "diện, miến điều",
    "meaning": "mì",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面条.mp3",
    "exampleSentence": {
      "chinese": "我吃面条",
      "pinyin": "Wǒ chī miàntiáo",
      "vietnamese": "Tôi ăn mì"
    }
  },
  {
    "id": "boya1-20-19",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "病人",
    "pinyin": "bìngrén",
    "sinoVietnamese": "bệnh nhân",
    "meaning": "bệnh nhân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/病人.mp3",
    "exampleSentence": {
      "chinese": "医生在治疗病人",
      "pinyin": "Yī shēng zài zhì liáo bìng rén",
      "vietnamese": "Bác sĩ đang chữa bệnh cho bệnh nhân"
    }
  },
  {
    "id": "boya1-20-20",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "身体",
    "pinyin": "shēntǐ",
    "sinoVietnamese": "thân thể",
    "meaning": "cơ thể",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/身体.mp3",
    "exampleSentence": {
      "chinese": "要注意身体健康",
      "pinyin": "Yào zhù yì shēn tǐ jiàn kāng",
      "vietnamese": "Cần chú ý đến sức khỏe cơ thể"
    }
  },
  {
    "id": "boya1-20-21",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "药",
    "pinyin": "yào",
    "sinoVietnamese": "dược",
    "meaning": "thuốc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/药.mp3",
    "exampleSentence": {
      "chinese": "吃药了吗",
      "pinyin": "Chī yào le ma",
      "vietnamese": "Đã uống thuốc chưa"
    }
  },
  {
    "id": "boya1-20-22",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "别客气",
    "pinyin": "biékèqi",
    "sinoVietnamese": "biệt khách khí",
    "meaning": "đừng khách sáo, đừng ngại",
    "partOfSpeech": "Cụm động từ / Lời nói xã giao",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/别客气.mp3",
    "exampleSentence": {
      "chinese": "谢谢你！别客气。",
      "pinyin": "Xièxie nǐ! Bié kèqi.",
      "vietnamese": "Cảm ơn bạn! Đừng khách sáo."
    }
  },
  {
    "id": "boya1-20-23",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "对了",
    "pinyin": "duìle",
    "sinoVietnamese": "đối liễu",
    "meaning": "à phải rồi, đúng rồi (dùng để chuyển chủ đề hoặc nhớ ra điều gì đó)",
    "partOfSpeech": "Thán từ / Trạng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对了.mp3",
    "exampleSentence": {
      "chinese": "对了，你明天有空吗？",
      "pinyin": "Duìle, nǐ míngtiān yǒu kòng ma?",
      "vietnamese": "À phải rồi, ngày mai bạn rảnh không?"
    }
  },
  {
    "id": "boya1-20-24",
    "lesson": 20,
    "lessonTitle": "Bài 20: 看病人 (Thăm người bệnh)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Cuộc sống hằng ngày & Giao tiếp mở rộng",
    "hanzi": "麦当劳",
    "pinyin": "Màidāngláo",
    "sinoVietnamese": "mạch đương lao",
    "meaning": "mcDonald's",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/麦当劳.mp3",
    "exampleSentence": {
      "chinese": "我们去麦当劳吃汉堡吧。",
      "pinyin": "Wǒmen qù Màidāngláo chī hànbǎo ba.",
      "vietnamese": "Chúng ta đi McDonald's ăn hamburger đi."
    }
  },
  {
    "id": "boya1-21-1",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "生气",
    "pinyin": "shēngqì",
    "sinoVietnamese": "sinh, sanh khí",
    "meaning": "nổi giận",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生气.mp3",
    "exampleSentence": {
      "chinese": "我生气了",
      "pinyin": "Wǒ shēngqì le",
      "vietnamese": "Tôi đã tức giận"
    }
  },
  {
    "id": "boya1-21-2",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "好像",
    "pinyin": "hǎoxiàng",
    "sinoVietnamese": "hảo tượng",
    "meaning": "dường như",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好像.mp3",
    "exampleSentence": {
      "chinese": "好像下雨了",
      "pinyin": "Hǎo xiàng xià yǔ le",
      "vietnamese": "Hình như trời mưa rồi"
    }
  },
  {
    "id": "boya1-21-3",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "脸色",
    "pinyin": "liǎnsè",
    "sinoVietnamese": "kiểm, thiểm sắc",
    "meaning": "sắc mặt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/脸色.mp3",
    "exampleSentence": {
      "chinese": "他的脸色不太好。",
      "pinyin": "Tā de liǎnsè bù tài hǎo.",
      "vietnamese": "Mặt anh ấy không được khỏe."
    }
  },
  {
    "id": "boya1-21-4",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "熬夜",
    "pinyin": "áoyè",
    "sinoVietnamese": "ngao dạ",
    "meaning": "thức khuya",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/熬夜.mp3",
    "exampleSentence": {
      "chinese": "他为了赶作业熬夜到凌晨",
      "pinyin": "Tā wèile gǎn zuòyè áoyè dào língchén",
      "vietnamese": "Anh ấy thức khuya đến tận nửa đêm để kịp bài tập"
    }
  },
  {
    "id": "boya1-21-5",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "斤",
    "pinyin": "jīn",
    "sinoVietnamese": "cân, cấn",
    "meaning": "cân",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/斤.mp3",
    "exampleSentence": {
      "chinese": "一斤苹果",
      "pinyin": "Yī jīn píng guǒ",
      "vietnamese": "một cân táo"
    }
  },
  {
    "id": "boya1-21-6",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "白酒",
    "pinyin": "báijiǔ",
    "sinoVietnamese": "bạch tửu",
    "meaning": "rượu trắng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/白酒.mp3",
    "exampleSentence": {
      "chinese": "中国人喜欢喝白酒。",
      "pinyin": "Zhōngguó rén xǐhuān hē báijiǔ.",
      "vietnamese": "Người Trung Quốc thích uống rượu trắng."
    }
  },
  {
    "id": "boya1-21-7",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "头",
    "pinyin": "tóu",
    "sinoVietnamese": "đầu",
    "meaning": "đầu",
    "partOfSpeech": "Danh từ / Lượng từ / Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/头.mp3",
    "exampleSentence": {
      "chinese": "我的头很疼",
      "pinyin": "Wǒ de tóu hěn téng",
      "vietnamese": "Đầu tôi rất đau"
    }
  },
  {
    "id": "boya1-21-8",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "疼",
    "pinyin": "téng",
    "sinoVietnamese": "đông",
    "meaning": "đau; nhức",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/疼.mp3",
    "exampleSentence": {
      "chinese": "我头疼",
      "pinyin": "Wǒ tóu téng",
      "vietnamese": "Tôi đau đầu"
    }
  },
  {
    "id": "boya1-21-9",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "疯",
    "pinyin": "fēng",
    "sinoVietnamese": "phong",
    "meaning": "điên, điên rồ",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/疯.mp3",
    "exampleSentence": {
      "chinese": "晚会上大家都玩疯了。",
      "pinyin": "Wǎnhuì shang dàjiā dōu wán fēng le.",
      "vietnamese": "Ở buổi dạ hội mọi người đều chơi thỏa thích."
    }
  },
  {
    "id": "boya1-21-10",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "醉",
    "pinyin": "zuì",
    "sinoVietnamese": "túy",
    "meaning": "say rượu",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/醉.mp3",
    "exampleSentence": {
      "chinese": "他昨天晚上喝醉了所以什么都不记得。",
      "pinyin": "tā zuó tiān wǎn shang hē zuì le suǒ yǐ shén me dōu bù jì de",
      "vietnamese": "Tối qua anh ấy uống say rồi nên không nhớ bất cứ điều gì."
    }
  },
  {
    "id": "boya1-21-11",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "吐",
    "pinyin": "tù",
    "sinoVietnamese": "thổ",
    "meaning": "nôn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吐.mp3",
    "exampleSentence": {
      "chinese": "他晕船晕得厉害，把晚饭都吐了。",
      "pinyin": "tā yùn chuán yùn de lì hai, bǎ wǎn fàn dōu tù le.",
      "vietnamese": "Anh ấy say sóng dữ dội, nôn hết cả bữa tối ra."
    }
  },
  {
    "id": "boya1-21-12",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "饭",
    "pinyin": "fàn",
    "sinoVietnamese": "phạn",
    "meaning": "bữa ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饭.mp3",
    "exampleSentence": {
      "chinese": "吃饭",
      "pinyin": "Chī fàn",
      "vietnamese": "Ăn cơm"
    }
  },
  {
    "id": "boya1-21-13",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "热情",
    "pinyin": "rèqíng",
    "sinoVietnamese": "nhiệt tình",
    "meaning": "nhiệt tình",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/热情.mp3",
    "exampleSentence": {
      "chinese": "他对我很热情",
      "pinyin": "Tā duì wǒ hěn rè qíng",
      "vietnamese": "Anh ấy rất nhiệt tình với tôi"
    }
  },
  {
    "id": "boya1-21-14",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "不停",
    "pinyin": "bùtíng",
    "sinoVietnamese": "bất đình",
    "meaning": "không ngừng",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不停.mp3",
    "exampleSentence": {
      "chinese": "窗外的雨不停地落下来",
      "pinyin": "chuāng wài de yǔ bù tíng de luò xià lái",
      "vietnamese": "Cơn mưa ngoài cửa sổ cứ rơi xuống không ngừng"
    }
  },
  {
    "id": "boya1-21-15",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "地",
    "pinyin": "de",
    "sinoVietnamese": "địa",
    "meaning": "trợ từ (đứng sau trạng ngữ, vd 慢慢地)",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地.mp3",
    "exampleSentence": {
      "chinese": "他慢慢地走。",
      "pinyin": "Tā mànmàn de zǒu.",
      "vietnamese": "Anh ấy đi một cách chậm rãi."
    }
  },
  {
    "id": "boya1-21-16",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "倒",
    "pinyin": "dǎo",
    "sinoVietnamese": "đảo",
    "meaning": "ngã, đổ; lộn ngược",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/倒.mp3",
    "exampleSentence": {
      "chinese": "杯子倒了",
      "pinyin": "Bēi zi dào le",
      "vietnamese": "Cái cốc đã bị đổ"
    }
  },
  {
    "id": "boya1-21-17",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "酒",
    "pinyin": "jiǔ",
    "sinoVietnamese": "tửu",
    "meaning": "rượu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/酒.mp3",
    "exampleSentence": {
      "chinese": "我们要不要喝一杯酒？",
      "pinyin": "Wǒ men yào bù yào hē yī bēi jiǔ ？",
      "vietnamese": "Chúng ta có muốn uống một ly rượu không?"
    }
  },
  {
    "id": "boya1-21-18",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "有的",
    "pinyin": "yǒude",
    "sinoVietnamese": "hữu đích",
    "meaning": "một số",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有的.mp3",
    "exampleSentence": {
      "chinese": "有的人喜欢喝茶。",
      "pinyin": "Yǒude rén xǐhuan hē chá.",
      "vietnamese": "Một số người thích uống trà."
    }
  },
  {
    "id": "boya1-21-19",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "请客",
    "pinyin": "qǐngkè",
    "sinoVietnamese": "thỉnh khách",
    "meaning": "mời",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/请客.mp3",
    "exampleSentence": {
      "chinese": "今天我请客",
      "pinyin": "Jīn tiān wǒ qǐng kè",
      "vietnamese": "Hôm nay tôi mời"
    }
  },
  {
    "id": "boya1-21-20",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "渴",
    "pinyin": "kě",
    "sinoVietnamese": "khát",
    "meaning": "khát",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/渴.mp3",
    "exampleSentence": {
      "chinese": "我很渴",
      "pinyin": "Wǒ hěn kě",
      "vietnamese": "Tôi rất khát"
    }
  },
  {
    "id": "boya1-21-21",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "帮",
    "pinyin": "bāng",
    "sinoVietnamese": "bang",
    "meaning": "giúp",
    "partOfSpeech": "Động từ / Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/帮.mp3",
    "exampleSentence": {
      "chinese": "我帮你",
      "pinyin": "Wǒ bāng nǐ",
      "vietnamese": "Tôi giúp bạn"
    }
  },
  {
    "id": "boya1-21-22",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "杯",
    "pinyin": "bēi",
    "sinoVietnamese": "bôi",
    "meaning": "cái cốc",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/杯.mp3",
    "exampleSentence": {
      "chinese": "一杯水",
      "pinyin": "Yī bēi shuǐ",
      "vietnamese": "Một cốc nước"
    }
  },
  {
    "id": "boya1-21-23",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "困",
    "pinyin": "kùn",
    "sinoVietnamese": "khốn",
    "meaning": "mệt mỏi",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/困.mp3",
    "exampleSentence": {
      "chinese": "我工作了一整天，非常困。",
      "pinyin": "Wǒ gōngzuò le yī zhěng tiān, fēicháng kùn.",
      "vietnamese": "Tôi làm việc cả ngày, rất mệt và buồn ngủ."
    }
  },
  {
    "id": "boya1-21-24",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "继续",
    "pinyin": "jìxù",
    "sinoVietnamese": "kế tục",
    "meaning": "tiếp tục",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/继续.mp3",
    "exampleSentence": {
      "chinese": "请继续说，我在听。",
      "pinyin": "Qǐng jì xù shuō, wǒ zài tīng.",
      "vietnamese": "Mời nói tiếp, tôi đang nghe."
    }
  },
  {
    "id": "boya1-21-25",
    "lesson": 21,
    "lessonTitle": "Bài 21: 中国朋友太热情了 (Bạn bè Trung Quốc thật nhiệt tình)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "劝酒",
    "pinyin": "quànjiǔ",
    "sinoVietnamese": "khuyến tửu",
    "meaning": "mời rượu, ép rượu (theo nghĩa tích cực là mời khách nhiệt tình)",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/劝酒.mp3",
    "exampleSentence": {
      "chinese": "他喜欢在饭桌上劝酒。",
      "pinyin": "Tā xǐhuān zài fànzhuō shàng quànjiǔ.",
      "vietnamese": "Anh ấy thích mời rượu trên bàn ăn."
    }
  },
  {
    "id": "boya1-22-1",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "能",
    "pinyin": "néng",
    "sinoVietnamese": "năng",
    "meaning": "có thể",
    "partOfSpeech": "Trợ động từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/能.mp3",
    "exampleSentence": {
      "chinese": "我能去",
      "pinyin": "Wǒ néng qù",
      "vietnamese": "Tôi có thể đi"
    }
  },
  {
    "id": "boya1-22-2",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "病",
    "pinyin": "bìng",
    "sinoVietnamese": "bệnh",
    "meaning": "bệnh",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/病.mp3",
    "exampleSentence": {
      "chinese": "他病了",
      "pinyin": "Tā bìng le",
      "vietnamese": "Anh ấy bị ốm rồi"
    }
  },
  {
    "id": "boya1-22-3",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "感冒",
    "pinyin": "gǎnmào",
    "sinoVietnamese": "cảm mạo",
    "meaning": "cảm; bị cảm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/感冒.mp3",
    "exampleSentence": {
      "chinese": "我感冒了，头痛发热。",
      "pinyin": "Wǒ gǎnmào le, tóu tòng fā rè.",
      "vietnamese": "Tôi bị cảm, đau đầu sốt."
    }
  },
  {
    "id": "boya1-22-4",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "头疼",
    "pinyin": "tóuténg",
    "sinoVietnamese": "đầu đông",
    "meaning": "đau đầu",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/头疼.mp3",
    "exampleSentence": {
      "chinese": "我今天头疼，不想出门。",
      "pinyin": "Wǒ jīntiān tóuténg, bù xiǎng chūmén.",
      "vietnamese": "Hôm nay tôi đau đầu, không muốn ra ngoài."
    }
  },
  {
    "id": "boya1-22-5",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "发烧",
    "pinyin": "fāshāo",
    "sinoVietnamese": "phát thiêu",
    "meaning": "sốt",
    "partOfSpeech": "Động từ (verb)",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发烧.mp3",
    "exampleSentence": {
      "chinese": "我发烧了。",
      "pinyin": "Wǒ fāshāo le.",
      "vietnamese": "Tôi bị sốt."
    }
  },
  {
    "id": "boya1-22-6",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "咳嗽",
    "pinyin": "késou",
    "sinoVietnamese": "khái thấu",
    "meaning": "ho",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/咳嗽.mp3",
    "exampleSentence": {
      "chinese": "他感冒很严重，整晚都在不停地咳嗽。",
      "pinyin": "tā gǎn mào hěn yán zhòng, zhěng wǎn dōu zài bù tíng de ké sou.",
      "vietnamese": "Anh ấy bị cảm rất nặng, cả đêm đều ho không ngừng."
    }
  },
  {
    "id": "boya1-22-7",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "前天",
    "pinyin": "qiántiān",
    "sinoVietnamese": "tiền thiên",
    "meaning": "ngày hôm kia",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/前天.mp3",
    "exampleSentence": {
      "chinese": "我前天去了上海",
      "pinyin": "Wǒ qiántiān qùle Shànghǎi",
      "vietnamese": "Ngày hôm kia tôi đã đi Thượng Hải"
    }
  },
  {
    "id": "boya1-22-8",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "场",
    "pinyin": "chǎng",
    "sinoVietnamese": "trường",
    "meaning": "một từ dùng đo lường cho trò chơi, trận đấu thể thao, cảnh",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/场.mp3",
    "exampleSentence": {
      "chinese": "一场比赛",
      "pinyin": "Yī chǎng bǐ sài",
      "vietnamese": "Một trận đấu"
    }
  },
  {
    "id": "boya1-22-9",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "足球",
    "pinyin": "zúqiú",
    "sinoVietnamese": "túc cầu",
    "meaning": "bóng đá",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/足球.mp3",
    "exampleSentence": {
      "chinese": "我喜欢踢足球。",
      "pinyin": "Wǒ xǐhuān tī zúqiú.",
      "vietnamese": "Tôi thích chơi bóng đá."
    }
  },
  {
    "id": "boya1-22-10",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "比赛",
    "pinyin": "bǐsài",
    "sinoVietnamese": "tỉ tái, trại",
    "meaning": "thi đấu",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比赛.mp3",
    "exampleSentence": {
      "chinese": "明天的比赛很重要。",
      "pinyin": "Míngtiān de bǐsài hěn zhòngyào.",
      "vietnamese": "Trận đấu ngày mai rất quan trọng."
    }
  },
  {
    "id": "boya1-22-11",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "回来",
    "pinyin": "huílai",
    "sinoVietnamese": "hồi lai",
    "meaning": "quay lại",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/回来.mp3",
    "exampleSentence": {
      "chinese": "他什么时候回来？",
      "pinyin": "Tā shénme shíhou huílai?",
      "vietnamese": "Anh ấy bao giờ quay lại?"
    }
  },
  {
    "id": "boya1-22-12",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "带",
    "pinyin": "dài",
    "sinoVietnamese": "đái, đới",
    "meaning": "mang, mang theo",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/带.mp3",
    "exampleSentence": {
      "chinese": "请带身份证",
      "pinyin": "Qǐng dài shēn fèn zhèng",
      "vietnamese": "Vui lòng mang theo thẻ căn cước"
    }
  },
  {
    "id": "boya1-22-13",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "伞",
    "pinyin": "sǎn",
    "sinoVietnamese": "tản",
    "meaning": "cái ô",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/伞.mp3",
    "exampleSentence": {
      "chinese": "外面下雨了，记得带雨伞。",
      "pinyin": "Wàimiàn xià yǔ le, jìde dài yǔsǎn.",
      "vietnamese": "Bên ngoài đang mưa, nhớ mang theo ô dù."
    }
  },
  {
    "id": "boya1-22-14",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "看病",
    "pinyin": "kàn bìng",
    "sinoVietnamese": "khán, khan bệnh",
    "meaning": "đi khám bác sĩ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看病.mp3",
    "exampleSentence": {
      "chinese": "我去看病",
      "pinyin": "Wǒ qù kànbìng",
      "vietnamese": "Tôi đi khám bác sĩ"
    }
  },
  {
    "id": "boya1-22-15",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "开",
    "pinyin": "kāi",
    "sinoVietnamese": "khai",
    "meaning": "mở, bắt đầu",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开.mp3",
    "exampleSentence": {
      "chinese": "请开门",
      "pinyin": "Qǐng kāimén",
      "vietnamese": "Làm ơn mở cửa"
    }
  },
  {
    "id": "boya1-22-16",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "打针",
    "pinyin": "dǎzhēn",
    "sinoVietnamese": "đả châm",
    "meaning": "tiêm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打针.mp3",
    "exampleSentence": {
      "chinese": "护士给我打针。",
      "pinyin": "Hùshi gěi wǒ dǎzhēn.",
      "vietnamese": "Y tá tiêm cho tôi."
    }
  },
  {
    "id": "boya1-22-17",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "最好",
    "pinyin": "zuìhǎo",
    "sinoVietnamese": "tối hảo",
    "meaning": "tốt nhất",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/最好.mp3",
    "exampleSentence": {
      "chinese": "今天天气最好",
      "pinyin": "Jīntiān tiānqì zuì hǎo",
      "vietnamese": "Hôm nay thời tiết tốt nhất"
    }
  },
  {
    "id": "boya1-22-18",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "休息",
    "pinyin": "xiūxi",
    "sinoVietnamese": "hưu tức",
    "meaning": "nghỉ ngơi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/休息.mp3",
    "exampleSentence": {
      "chinese": "我累了,想休息一下",
      "pinyin": "Wǒ lèile, xiǎng xiūxi yíxià",
      "vietnamese": "Tôi mệt rồi, muốn nghỉ ngơi một chút"
    }
  },
  {
    "id": "boya1-22-19",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "请假",
    "pinyin": "qǐngjià",
    "sinoVietnamese": "thỉnh giá",
    "meaning": "xin nghỉ phép",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/请假.mp3",
    "exampleSentence": {
      "chinese": "我想请假一天",
      "pinyin": "Wǒ xiǎng qǐngjià yī tiān",
      "vietnamese": "Tôi muốn xin nghỉ một ngày"
    }
  },
  {
    "id": "boya1-22-20",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "希望",
    "pinyin": "xīwàng",
    "sinoVietnamese": "hy vọng",
    "meaning": "hy vọng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/希望.mp3",
    "exampleSentence": {
      "chinese": "我希望明年能去中国。",
      "pinyin": "Wǒ xīwàng míngnián néng qù Zhōngguó.",
      "vietnamese": "Tôi hy vọng năm sau có thể đi Trung Quốc."
    }
  },
  {
    "id": "boya1-22-21",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "批准",
    "pinyin": "pīzhǔn",
    "sinoVietnamese": "phê chuẩn",
    "meaning": "phê duyệt",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/批准.mp3",
    "exampleSentence": {
      "chinese": "政府批准了这个新项目。",
      "pinyin": "Zhèngfǔ pīzhǔn le zhège xīn xiàngmù.",
      "vietnamese": "Chính phủ đã phê duyệt dự án mới này."
    }
  },
  {
    "id": "boya1-22-22",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "月",
    "pinyin": "yuè",
    "sinoVietnamese": "nguyệt",
    "meaning": "tháng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/月.mp3",
    "exampleSentence": {
      "chinese": "这个月很忙",
      "pinyin": "Zhège yuè hěn máng",
      "vietnamese": "Tháng này rất bận"
    }
  },
  {
    "id": "boya1-22-23",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "日",
    "pinyin": "rì",
    "sinoVietnamese": "nhật",
    "meaning": "mặt trời",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/日.mp3",
    "exampleSentence": {
      "chinese": "太阳从东方升起",
      "pinyin": "Tàiyáng cóng dōngfāng shēngqǐ",
      "vietnamese": "Mặt trời mọc từ phương đông"
    }
  },
  {
    "id": "boya1-22-24",
    "lesson": 22,
    "lessonTitle": "Bài 22: 他感冒了 (Anh ấy bị cảm rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "请假条",
    "pinyin": "qǐngjiàtiáo",
    "sinoVietnamese": "thỉnh giá điều",
    "meaning": "giấy xin nghỉ phép",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/请假条.mp3",
    "exampleSentence": {
      "chinese": "我需要写一张请假条。",
      "pinyin": "Wǒ xūyào xiě yī zhāng qǐngjiàtiáo.",
      "vietnamese": "Tôi cần viết một tờ giấy xin nghỉ phép."
    }
  },
  {
    "id": "boya1-23-1",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "下",
    "pinyin": "xià",
    "sinoVietnamese": "hạ",
    "meaning": "sau",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下.mp3",
    "exampleSentence": {
      "chinese": "请往下看",
      "pinyin": "Qǐng wǎng xià kàn",
      "vietnamese": "Xin hãy nhìn xuống dưới"
    }
  },
  {
    "id": "boya1-23-2",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "看",
    "pinyin": "kàn",
    "sinoVietnamese": "khán",
    "meaning": "nhìn, xem",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看.mp3",
    "exampleSentence": {
      "chinese": "我看书",
      "pinyin": "Wǒ kàn shū",
      "vietnamese": "Tôi đọc sách"
    }
  },
  {
    "id": "boya1-23-3",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "那么",
    "pinyin": "nàme",
    "sinoVietnamese": "na ma",
    "meaning": "vậy thì",
    "partOfSpeech": "Đại từ / Liên từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/那么.mp3",
    "exampleSentence": {
      "chinese": "那么，我们走吧",
      "pinyin": "Nà me, wǒ men zǒu ba",
      "vietnamese": "Vậy thì chúng ta đi thôi"
    }
  },
  {
    "id": "boya1-23-4",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "迟到",
    "pinyin": "chídào",
    "sinoVietnamese": "trì đáo",
    "meaning": "đến muộn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/迟到.mp3",
    "exampleSentence": {
      "chinese": "对不起，我迟到了。",
      "pinyin": "Duìbuqǐ, wǒ chídào le.",
      "vietnamese": "Xin lỗi, tôi đến muộn."
    }
  },
  {
    "id": "boya1-23-5",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "堵车",
    "pinyin": "dǔchē",
    "sinoVietnamese": "đổ xa",
    "meaning": "kẹt xe",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/堵车.mp3",
    "exampleSentence": {
      "chinese": "今天早上上班时堵车很严重。",
      "pinyin": "jīn tiān zǎo shang shàng bān shí dǔ chē hěn yán zhòng.",
      "vietnamese": "Sáng nay khi đi làm kẹt xe rất nghiêm trọng."
    }
  },
  {
    "id": "boya1-23-6",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "堵",
    "pinyin": "dǔ",
    "sinoVietnamese": "đổ",
    "meaning": "chặn lại",
    "partOfSpeech": "Động từ / Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/堵.mp3",
    "exampleSentence": {
      "chinese": "下班时间路上堵车很严重。",
      "pinyin": "Xiàbān shíjiān lùshang dǔchē hěn yánzhòng.",
      "vietnamese": "Giờ tan tầm trên đường tắc xe rất nghiêm trọng."
    }
  },
  {
    "id": "boya1-23-7",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "坏",
    "pinyin": "huài",
    "sinoVietnamese": "hoại",
    "meaning": "xấu",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坏.mp3",
    "exampleSentence": {
      "chinese": "这个坏了",
      "pinyin": "Zhège huài le",
      "vietnamese": "Cái này đã hỏng"
    }
  },
  {
    "id": "boya1-23-8",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "轮胎",
    "pinyin": "lúntāi",
    "sinoVietnamese": "luân thai",
    "meaning": "lốp xe",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/轮胎.mp3",
    "exampleSentence": {
      "chinese": "汽车轮胎磨损了，需要更换。",
      "pinyin": "Qìchē lúntāi mósǔn le, xūyào gēnghuàn.",
      "vietnamese": "Lốp xe ô tô bị mòn, cần thay thế."
    }
  },
  {
    "id": "boya1-23-9",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "破",
    "pinyin": "pò",
    "sinoVietnamese": "phá",
    "meaning": "vỡ",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/破.mp3",
    "exampleSentence": {
      "chinese": "杯子破了。",
      "pinyin": "Bēi zi pò le.",
      "vietnamese": "Cái ly đã vỡ."
    }
  },
  {
    "id": "boya1-23-10",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "倒霉",
    "pinyin": "dǎoméi",
    "sinoVietnamese": "đảo môi",
    "meaning": "vận rủi; không may",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/倒霉.mp3",
    "exampleSentence": {
      "chinese": "今天出门就下大雨，真是一件倒霉的事。",
      "pinyin": "jīn tiān chū mén jiù xià dà yǔ, zhēn shì yī jiàn dǎo méi de shì.",
      "vietnamese": "Hôm nay vừa ra cửa đã mưa to, thật là một chuyện xui xẻo."
    }
  },
  {
    "id": "boya1-23-11",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "小时",
    "pinyin": "xiǎoshí",
    "sinoVietnamese": "tiểu thì",
    "meaning": "giờ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小时.mp3",
    "exampleSentence": {
      "chinese": "我学了三个小时中文",
      "pinyin": "Wǒ xué le sān gè xiǎoshí Zhōngwén",
      "vietnamese": "Tôi đã học tiếng Trung 3 tiếng"
    }
  },
  {
    "id": "boya1-23-12",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "平时",
    "pinyin": "píngshí",
    "sinoVietnamese": "bình thì",
    "meaning": "thường ngày",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/平时.mp3",
    "exampleSentence": {
      "chinese": "平时很忙",
      "pinyin": "Píng shí hěn máng",
      "vietnamese": "Thường ngày rất bận"
    }
  },
  {
    "id": "boya1-23-13",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "钟头",
    "pinyin": "zhōngtóu",
    "sinoVietnamese": "chung đầu",
    "meaning": "giờ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/钟头.mp3",
    "exampleSentence": {
      "chinese": "我等了三个钟头",
      "pinyin": "Wǒ děng le sān gè zhōngtóu",
      "vietnamese": "Tôi đợi ba tiếng đồng hồ"
    }
  },
  {
    "id": "boya1-23-14",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "着急",
    "pinyin": "zháojí",
    "sinoVietnamese": "trước cấp",
    "meaning": "lo lắng",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/着急.mp3",
    "exampleSentence": {
      "chinese": "别着急，慢慢来。",
      "pinyin": "Bié zháojí, mànman lái.",
      "vietnamese": "Đừng nôn nóng, từ từ."
    }
  },
  {
    "id": "boya1-23-15",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "用",
    "pinyin": "yòng",
    "sinoVietnamese": "dụng",
    "meaning": "sử dụng",
    "partOfSpeech": "Động từ / Giới từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/用.mp3",
    "exampleSentence": {
      "chinese": "我用电脑",
      "pinyin": "Wǒ yòng diànnǎo",
      "vietnamese": "Tôi dùng máy tính"
    }
  },
  {
    "id": "boya1-23-16",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "写",
    "pinyin": "xiě",
    "sinoVietnamese": "tả",
    "meaning": "viết",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/写.mp3",
    "exampleSentence": {
      "chinese": "我会写汉字",
      "pinyin": "Wǒ huì xiě Hànzì",
      "vietnamese": "Tôi biết viết chữ Hán"
    }
  },
  {
    "id": "boya1-23-17",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "作文",
    "pinyin": "zuòwén",
    "sinoVietnamese": "tác văn",
    "meaning": "bài văn",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/作文.mp3",
    "exampleSentence": {
      "chinese": "写作文",
      "pinyin": "Xiě zuò wén",
      "vietnamese": "Viết bài văn"
    }
  },
  {
    "id": "boya1-23-18",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "口语",
    "pinyin": "kǒuyǔ",
    "sinoVietnamese": "khẩu ngữ",
    "meaning": "ngôn ngữ nói",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/口语.mp3",
    "exampleSentence": {
      "chinese": "练习口语很重要。",
      "pinyin": "Liànxí kǒuyǔ hěn zhòngyào.",
      "vietnamese": "Luyện tập tiếng nói rất quan trọng."
    }
  },
  {
    "id": "boya1-23-19",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "学",
    "pinyin": "xué",
    "sinoVietnamese": "học",
    "meaning": "học",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学.mp3",
    "exampleSentence": {
      "chinese": "学生",
      "pinyin": "Xué shēng",
      "vietnamese": "Học sinh"
    }
  },
  {
    "id": "boya1-23-20",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "初中",
    "pinyin": "chūzhōng",
    "sinoVietnamese": "sơ trung",
    "meaning": "trường trung học cơ sở",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/初中.mp3",
    "exampleSentence": {
      "chinese": "我在初中学习三年。",
      "pinyin": "Wǒ zài chū zhōng xué xí sān nián.",
      "vietnamese": "Tôi học ở cấp 2 ba năm."
    }
  },
  {
    "id": "boya1-23-21",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "语法",
    "pinyin": "yǔfǎ",
    "sinoVietnamese": "ngữ pháp",
    "meaning": "ngữ pháp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/语法.mp3",
    "exampleSentence": {
      "chinese": "学习语法对掌握语言很重要。",
      "pinyin": "Xuéxí yǔfǎ duì zhǎngwò yǔyán hěn zhòngyào.",
      "vietnamese": "Học ngữ pháp rất quan trọng để nắm vững ngôn ngữ."
    }
  },
  {
    "id": "boya1-23-22",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "简单",
    "pinyin": "jiǎndān",
    "sinoVietnamese": "giản đơn",
    "meaning": "đơn giản",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/简单.mp3",
    "exampleSentence": {
      "chinese": "这个问题很简单。",
      "pinyin": "Zhè gè wèn tí hěn jiǎn dān.",
      "vietnamese": "Vấn đề này rất đơn giản."
    }
  },
  {
    "id": "boya1-23-23",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "翻译",
    "pinyin": "fānyì",
    "sinoVietnamese": "phiên dịch",
    "meaning": "dịch giả; dịch",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/翻译.mp3",
    "exampleSentence": {
      "chinese": "请帮我翻译这封信。",
      "pinyin": "Qǐng bāng wǒ fānyì zhè fēng xìn.",
      "vietnamese": "Làm ơn giúp tôi dịch bức thư này."
    }
  },
  {
    "id": "boya1-23-24",
    "lesson": 23,
    "lessonTitle": "Bài 23: 你学了多长时间汉语 (Bạn học tiếng Trung bao lâu rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "学期",
    "pinyin": "xuéqī",
    "sinoVietnamese": "học kỳ",
    "meaning": "học kỳ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学期.mp3",
    "exampleSentence": {
      "chinese": "这个学期",
      "pinyin": "Zhè gè xué qī",
      "vietnamese": "Học kỳ này"
    }
  },
  {
    "id": "boya1-24-1",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "两",
    "pinyin": "liǎng",
    "sinoVietnamese": "lưỡng, lượng, lạng",
    "meaning": "hai",
    "partOfSpeech": "Số từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/两.mp3",
    "exampleSentence": {
      "chinese": "我有两本书",
      "pinyin": "Wǒ yǒu liǎng běn shū",
      "vietnamese": "Tôi có hai cuốn sách"
    }
  },
  {
    "id": "boya1-24-2",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "打",
    "pinyin": "dǎ",
    "sinoVietnamese": "đả",
    "meaning": "chơi",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打.mp3",
    "exampleSentence": {
      "chinese": "打篮球",
      "pinyin": "dǎ lánqiú",
      "vietnamese": "chơi bóng rổ"
    }
  },
  {
    "id": "boya1-24-3",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "球",
    "pinyin": "qiú",
    "sinoVietnamese": "cầu",
    "meaning": "quả bóng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/球.mp3",
    "exampleSentence": {
      "chinese": "这是一个球",
      "pinyin": "Zhè shì yī gè qiú",
      "vietnamese": "Đây là một quả bóng"
    }
  },
  {
    "id": "boya1-24-4",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "食堂",
    "pinyin": "shítáng",
    "sinoVietnamese": "thực đường",
    "meaning": "nhà ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/食堂.mp3",
    "exampleSentence": {
      "chinese": "在食堂吃饭",
      "pinyin": "zài shítáng chī fàn",
      "vietnamese": "Ăn ở căng tin"
    }
  },
  {
    "id": "boya1-24-5",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "聚会",
    "pinyin": "jùhuì",
    "sinoVietnamese": "tụ hội",
    "meaning": "tụ họp; bữa tiệc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/聚会.mp3",
    "exampleSentence": {
      "chinese": "这个聚会很好。",
      "pinyin": "Zhè gè jù huì hěn hǎo.",
      "vietnamese": "tụ họp; bữa tiệc này rất tốt."
    }
  },
  {
    "id": "boya1-24-6",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "祝",
    "pinyin": "zhù",
    "sinoVietnamese": "chúc",
    "meaning": "chúc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/祝.mp3",
    "exampleSentence": {
      "chinese": "祝你生日快乐！",
      "pinyin": "Zhù nǐ shēngrì kuàilè!",
      "vietnamese": "Chúc bạn sinh nhật vui vẻ!"
    }
  },
  {
    "id": "boya1-24-7",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "快乐",
    "pinyin": "kuàilè",
    "sinoVietnamese": "khoái lạc",
    "meaning": "vui vẻ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/快乐.mp3",
    "exampleSentence": {
      "chinese": "祝你们生日快乐！",
      "pinyin": "Zhù nǐ men shēng rì kuài lè ！",
      "vietnamese": "Chúc các bạn sinh nhật vui vẻ!"
    }
  },
  {
    "id": "boya1-24-8",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "sinoVietnamese": "oản",
    "meaning": "cái bát",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/碗.mp3",
    "exampleSentence": {
      "chinese": "给我一碗饭",
      "pinyin": "Gěi wǒ yī wǎn fàn",
      "vietnamese": "Cho tôi một bát cơm"
    }
  },
  {
    "id": "boya1-24-9",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "葡萄酒",
    "pinyin": "pútaojiǔ",
    "sinoVietnamese": "bồ đào tửu",
    "meaning": "rượu nho",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/葡萄酒.mp3",
    "exampleSentence": {
      "chinese": "法国的红葡萄酒非常有名。",
      "pinyin": "Fǎguó de hóng pútaojiǔ fēicháng yǒumíng.",
      "vietnamese": "Rượu vang đỏ của Pháp rất nổi tiếng."
    }
  },
  {
    "id": "boya1-24-10",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "女生",
    "pinyin": "nǚshēng",
    "sinoVietnamese": "nữ sinh, sanh",
    "meaning": "nữ sinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/女生.mp3",
    "exampleSentence": {
      "chinese": "她是我的学生。",
      "pinyin": "Tā shì wǒ de nǚshēng.",
      "vietnamese": "Cô ấy là học sinh nữ của tôi."
    }
  },
  {
    "id": "boya1-24-11",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "晚",
    "pinyin": "wǎn",
    "sinoVietnamese": "vãn",
    "meaning": "muộn",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚.mp3",
    "exampleSentence": {
      "chinese": "你来晚了",
      "pinyin": "Nǐ lái wǎnle",
      "vietnamese": "Bạn đến muộn rồi"
    }
  },
  {
    "id": "boya1-24-12",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "放心",
    "pinyin": "fàngxīn",
    "sinoVietnamese": "phóng tâm",
    "meaning": "an tâm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/放心.mp3",
    "exampleSentence": {
      "chinese": "请放心，我会照顾好自己。",
      "pinyin": "Qǐng fàng xīn, wǒ huì zhào gù hǎo zì jǐ.",
      "vietnamese": "Vui lòng an tâm, tôi sẽ chăm sóc tốt bản thân."
    }
  },
  {
    "id": "boya1-24-13",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "展览",
    "pinyin": "zhǎnlǎn",
    "sinoVietnamese": "triển lãm",
    "meaning": "triển lãm",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/展览.mp3",
    "exampleSentence": {
      "chinese": "我们明天去博物馆参观展览。",
      "pinyin": "wǒ men míng tiān qù bó wù guǎn cān guān zhǎn lǎn.",
      "vietnamese": "Ngày mai chúng tôi đi bảo tàng tham quan triển lãm."
    }
  },
  {
    "id": "boya1-24-14",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "意见",
    "pinyin": "yìjiàn",
    "sinoVietnamese": "ý kiến",
    "meaning": "phàn nàn, phản đối",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/意见.mp3",
    "exampleSentence": {
      "chinese": "我对这个计划有意见",
      "pinyin": "Wǒ duì zhè gè jì huà yǒu yì jiàn",
      "vietnamese": "Tôi có ý kiến về kế hoạch này"
    }
  },
  {
    "id": "boya1-24-15",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "早饭",
    "pinyin": "zǎofàn",
    "sinoVietnamese": "tảo phạn",
    "meaning": "bữa sáng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/早饭.mp3",
    "exampleSentence": {
      "chinese": "我吃早饭了。",
      "pinyin": "Wǒ chī zǎofàn le.",
      "vietnamese": "Tôi đã ăn sáng."
    }
  },
  {
    "id": "boya1-24-16",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "找",
    "pinyin": "zhǎo",
    "sinoVietnamese": "trảo",
    "meaning": "tìm kiếm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/找.mp3",
    "exampleSentence": {
      "chinese": "我找书",
      "pinyin": "Wǒ zhǎo shū",
      "vietnamese": "Tôi tìm sách"
    }
  },
  {
    "id": "boya1-24-17",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "门口",
    "pinyin": "ménkǒu",
    "sinoVietnamese": "môn khẩu",
    "meaning": "lối vào, cửa",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/门口.mp3",
    "exampleSentence": {
      "chinese": "在门口等你",
      "pinyin": "zài ménkǒu děng nǐ",
      "vietnamese": "đợi bạn ở cửa"
    }
  },
  {
    "id": "boya1-24-18",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "见面",
    "pinyin": "jiànmiàn",
    "sinoVietnamese": "kiến diện, miến",
    "meaning": "gặp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/见面.mp3",
    "exampleSentence": {
      "chinese": "我们明天见面吧",
      "pinyin": "Wǒmen míngtiān jiànmiàn ba",
      "vietnamese": "Ngày mai chúng ta gặp nhau nhé"
    }
  },
  {
    "id": "boya1-24-19",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "上网",
    "pinyin": "shàngwǎng",
    "sinoVietnamese": "thượng võng",
    "meaning": "lướt web",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上网.mp3",
    "exampleSentence": {
      "chinese": "我在上网",
      "pinyin": "Wǒ zài shàngwǎng",
      "vietnamese": "Tôi đang lướt web"
    }
  },
  {
    "id": "boya1-24-20",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "冰淇淋",
    "pinyin": "bīngqílín",
    "sinoVietnamese": "băng kì lâm",
    "meaning": "kem",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/冰淇淋.mp3",
    "exampleSentence": {
      "chinese": "夏天吃冰淇淋很舒服。",
      "pinyin": "Xiàtiān chī bīngqílín hěn shūfu.",
      "vietnamese": "Ăn kem vào mùa hè rất thoải mái."
    }
  },
  {
    "id": "boya1-24-21",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "美术馆",
    "pinyin": "měishùguǎn",
    "sinoVietnamese": "mĩ thuật quán",
    "meaning": "bảo tàng mỹ thuật, phòng trưng bày nghệ thuật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/美术馆.mp3",
    "exampleSentence": {
      "chinese": "周末我们去了美术馆。",
      "pinyin": "Zhōumò wǒmen qùle měishùguǎn.",
      "vietnamese": "Cuối tuần chúng tôi đã đi bảo tàng mỹ thuật."
    }
  },
  {
    "id": "boya1-24-22",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "没意见",
    "pinyin": "méi yìjiàn",
    "sinoVietnamese": "một ý kiến",
    "meaning": "không có ý kiến gì, đồng ý",
    "partOfSpeech": "Cụm động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/没意见.mp3",
    "exampleSentence": {
      "chinese": "你有什么意见吗？我没意见。",
      "pinyin": "Nǐ yǒu shénme yìjiàn ma? Wǒ méi yìjiàn.",
      "vietnamese": "Bạn có ý kiến gì không? Tôi không có ý kiến."
    }
  },
  {
    "id": "boya1-24-23",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "聊天儿",
    "pinyin": "liáotiānr",
    "sinoVietnamese": "liêu thiên nhi",
    "meaning": "trò chuyện, tán gẫu",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/聊天儿.mp3",
    "exampleSentence": {
      "chinese": "我们坐下来好好聊天儿吧。",
      "pinyin": "Wǒmen zuò xiàlái hǎohǎo liáo tiānr ba.",
      "vietnamese": "Chúng ta ngồi xuống trò chuyện tử tế đi."
    }
  },
  {
    "id": "boya1-24-24",
    "lesson": 24,
    "lessonTitle": "Bài 24: 明天见 (Hẹn gặp lại ngày mai)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "卡拉OK",
    "pinyin": "kǎlā<OK>",
    "sinoVietnamese": "ca lạp",
    "meaning": "karaoke (KTV)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/卡拉OK.mp3",
    "exampleSentence": {
      "chinese": "我们晚上去唱卡拉OK吧。",
      "pinyin": "Wǒmen wǎnshang qù chàng kǎlā OK ba.",
      "vietnamese": "Tối nay chúng ta đi hát karaoke đi."
    }
  },
  {
    "id": "boya1-25-1",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "晚安",
    "pinyin": "wǎn'ān",
    "sinoVietnamese": "vãn an",
    "meaning": "chúc ngủ ngon",
    "partOfSpeech": "Động từ / Thán từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚安.mp3",
    "exampleSentence": {
      "chinese": "晚安，做个好梦。",
      "pinyin": "Wǎn ān, zuò gè hǎo mèng.",
      "vietnamese": "Chúc ngủ ngon, ngủ mơ đẹp."
    }
  },
  {
    "id": "boya1-25-2",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "这么",
    "pinyin": "zhème",
    "sinoVietnamese": "giá ma",
    "meaning": "như thế",
    "partOfSpeech": "Đại từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/这么.mp3",
    "exampleSentence": {
      "chinese": "你怎么这么忙",
      "pinyin": "Nǐ zěn me zhè me máng",
      "vietnamese": "Sao bạn lại bận rộn như thế"
    }
  },
  {
    "id": "boya1-25-3",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "电视剧",
    "pinyin": "diànshìjù",
    "sinoVietnamese": "điện thị kịch",
    "meaning": "phim truyền hình",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电视剧.mp3",
    "exampleSentence": {
      "chinese": "这部电视剧非常受欢迎。",
      "pinyin": "Zhè bù diànshìjù fēicháng shòu huānyíng.",
      "vietnamese": "Bộ phim truyền hình này rất受欢迎."
    }
  },
  {
    "id": "boya1-25-4",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "太极拳",
    "pinyin": "tàijíquán",
    "sinoVietnamese": "thái cực quyền",
    "meaning": "thái Cực Quyền",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/太极拳.mp3",
    "exampleSentence": {
      "chinese": "爷爷每天早晨都去公园打太极拳。",
      "pinyin": "yé ye měi tiān zǎo chén dōu qù gōng yuán dǎ tài jí quán.",
      "vietnamese": "Ông nội mỗi buổi sáng đều đến công viên múa Thái Cực Quyền."
    }
  },
  {
    "id": "boya1-25-5",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "参加",
    "pinyin": "cānjiā",
    "sinoVietnamese": "tham gia",
    "meaning": "tham gia",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/参加.mp3",
    "exampleSentence": {
      "chinese": "我想参加这个活动",
      "pinyin": "Wǒ xiǎng cān jiā zhè gè huó dòng",
      "vietnamese": "Tôi muốn tham gia hoạt động này"
    }
  },
  {
    "id": "boya1-25-6",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "班",
    "pinyin": "bān",
    "sinoVietnamese": "ban",
    "meaning": "ca làm việc",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/班.mp3",
    "exampleSentence": {
      "chinese": "我上早班",
      "pinyin": "Wǒ shàng zǎobān",
      "vietnamese": "Tôi làm ca sáng"
    }
  },
  {
    "id": "boya1-25-7",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "报名",
    "pinyin": "bàomíng",
    "sinoVietnamese": "báo danh",
    "meaning": "đăng ký",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/报名.mp3",
    "exampleSentence": {
      "chinese": "我想报名参加",
      "pinyin": "Wǒ xiǎng bào míng cān jiā",
      "vietnamese": "Tôi muốn đăng ký tham gia"
    }
  },
  {
    "id": "boya1-25-8",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "忘",
    "pinyin": "wàng",
    "sinoVietnamese": "vong",
    "meaning": "quên",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忘.mp3",
    "exampleSentence": {
      "chinese": "我忘了",
      "pinyin": "Wǒ wàng le",
      "vietnamese": "Tôi quên rồi"
    }
  },
  {
    "id": "boya1-25-9",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "重新",
    "pinyin": "chóngxīn",
    "sinoVietnamese": "trùng tân",
    "meaning": "lại lần nữa",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/重新.mp3",
    "exampleSentence": {
      "chinese": "请重新开始",
      "pinyin": "Qǐng zhòng xīn kāi shǐ",
      "vietnamese": "Vui lòng bắt đầu lại"
    }
  },
  {
    "id": "boya1-25-10",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "闹钟",
    "pinyin": "nàozhōng",
    "sinoVietnamese": "náo chung",
    "meaning": "đồng hồ báo thức",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/闹钟.mp3",
    "exampleSentence": {
      "chinese": "我每天早上听见闹钟就会起床。",
      "pinyin": "wǒ měi tiān zǎo shang tīng jiàn nào zhōng jiù huì qǐ chuáng.",
      "vietnamese": "Mỗi sáng tôi nghe thấy tiếng chuông báo thức là sẽ thức dậy."
    }
  },
  {
    "id": "boya1-25-11",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "空气",
    "pinyin": "kōngqì",
    "sinoVietnamese": "không khí",
    "meaning": "không khí",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/空气.mp3",
    "exampleSentence": {
      "chinese": "空气很新鲜",
      "pinyin": "Kōng qì hěn xīn xiān",
      "vietnamese": "Không khí rất trong lành"
    }
  },
  {
    "id": "boya1-25-12",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "新鲜",
    "pinyin": "xīnxiān",
    "sinoVietnamese": "tân tiên",
    "meaning": "tươi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/新鲜.mp3",
    "exampleSentence": {
      "chinese": "超市里的蔬菜都很新鲜。",
      "pinyin": "Chāoshì lǐ de shūcài dōu hěn xīnxiān.",
      "vietnamese": "Rau trong siêu thị đều rất tươi ngon."
    }
  },
  {
    "id": "boya1-25-13",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "湖",
    "pinyin": "hú",
    "sinoVietnamese": "hồ",
    "meaning": "hồ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/湖.mp3",
    "exampleSentence": {
      "chinese": "湖很大",
      "pinyin": "Hú hěn dà",
      "vietnamese": "Hồ rất lớn"
    }
  },
  {
    "id": "boya1-25-14",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "跑步",
    "pinyin": "pǎobù",
    "sinoVietnamese": "bào bộ",
    "meaning": "chạy bộ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/跑步.mp3",
    "exampleSentence": {
      "chinese": "我每天早上都跑步。",
      "pinyin": "Wǒ měitiān zǎoshang dōu pǎobù.",
      "vietnamese": "Tôi每 sáng đều chạy bộ."
    }
  },
  {
    "id": "boya1-25-15",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "出",
    "pinyin": "chū",
    "sinoVietnamese": "xuất",
    "meaning": "ra ngoài",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出.mp3",
    "exampleSentence": {
      "chinese": "出去",
      "pinyin": "Chū qù",
      "vietnamese": "Bước ra ngoài"
    }
  },
  {
    "id": "boya1-25-16",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "汗",
    "pinyin": "hàn",
    "sinoVietnamese": "hãn",
    "meaning": "mồ hôi",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/汗.mp3",
    "exampleSentence": {
      "chinese": "打完球后他出了一身汗。",
      "pinyin": "Dǎ wán qiú hòu tā chū le yì shēn hàn.",
      "vietnamese": "Chơi bóng xong cậu ấy ra một thân mồ hôi."
    }
  },
  {
    "id": "boya1-25-17",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "锻炼",
    "pinyin": "duànliàn",
    "sinoVietnamese": "đoạn luyện",
    "meaning": "tập thể dục",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/锻炼.mp3",
    "exampleSentence": {
      "chinese": "我每天早上都锻炼身体。",
      "pinyin": "Wǒ měitiān zǎoshang dōu duànliàn shēntǐ.",
      "vietnamese": "Tôi đều tập thể dục vào mỗi buổi sáng."
    }
  },
  {
    "id": "boya1-25-18",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "棒",
    "pinyin": "bàng",
    "sinoVietnamese": "bổng",
    "meaning": "tuyệt vời",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/棒.mp3",
    "exampleSentence": {
      "chinese": "那个小男孩手里拿着一根棍棒。",
      "pinyin": "nà ge xiǎo nán hái shǒu lǐ ná zhe yī gēn gùn bàng.",
      "vietnamese": "Cậu bé kia đang cầm một cây gậy trong tay."
    }
  },
  {
    "id": "boya1-25-19",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "散步",
    "pinyin": "sànbù",
    "sinoVietnamese": "tán bộ",
    "meaning": "đi dạo",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/散步.mp3",
    "exampleSentence": {
      "chinese": "晚饭后，我们去公园散步。",
      "pinyin": "Wǎnfàn hòu, wǒmen qù gōngyuán sànbù.",
      "vietnamese": "Sau bữa tối, chúng ta đi dạo ở công viên."
    }
  },
  {
    "id": "boya1-25-20",
    "lesson": 25,
    "lessonTitle": "Bài 25: 你得多锻炼锻炼了 (Bạn cần tập luyện nhiều hơn rồi)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Các tình huống sinh hoạt đa dạng",
    "hanzi": "劲儿",
    "pinyin": "jìnr",
    "sinoVietnamese": "kình nhi",
    "meaning": "sức lực, khí lực; hứng thú, tinh thần",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/劲儿.mp3",
    "exampleSentence": {
      "chinese": "他干活很有劲儿。",
      "pinyin": "Tā gàn huó hěn yǒu jìnr.",
      "vietnamese": "Anh ấy làm việc rất hăng hái/có sức lực."
    }
  },
  {
    "id": "boya1-26-1",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "快",
    "pinyin": "kuài",
    "sinoVietnamese": "khoái",
    "meaning": "nhanh",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/快.mp3",
    "exampleSentence": {
      "chinese": "请快一点",
      "pinyin": "Qǐng kuài yīdiǎn",
      "vietnamese": "Xin nhanh một chút"
    }
  },
  {
    "id": "boya1-26-2",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "再",
    "pinyin": "zài",
    "sinoVietnamese": "tái",
    "meaning": "lại",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/再.mp3",
    "exampleSentence": {
      "chinese": "再见",
      "pinyin": "Zài jiàn",
      "vietnamese": "Tạm biệt (gặp lại)"
    }
  },
  {
    "id": "boya1-26-3",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "接",
    "pinyin": "jiē",
    "sinoVietnamese": "tiếp",
    "meaning": "đón",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/接.mp3",
    "exampleSentence": {
      "chinese": "请接电话",
      "pinyin": "Qǐng jiē diànhuà",
      "vietnamese": "Làm ơn nghe điện thoại"
    }
  },
  {
    "id": "boya1-26-4",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "电",
    "pinyin": "diàn",
    "sinoVietnamese": "điện",
    "meaning": "điện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/电.mp3",
    "exampleSentence": {
      "chinese": "停电了",
      "pinyin": "Tíngdiàn le",
      "vietnamese": "Mất điện rồi"
    }
  },
  {
    "id": "boya1-26-5",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "基础",
    "pinyin": "jīchǔ",
    "sinoVietnamese": "cơ sở",
    "meaning": "nền tảng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/基础.mp3",
    "exampleSentence": {
      "chinese": "学习外语需要打好基础。",
      "pinyin": "Xué xí wài yǔ xū yào dǎ hǎo jī chǔ.",
      "vietnamese": "Học ngoại ngữ cần phải nắm vững nền tảng."
    }
  },
  {
    "id": "boya1-26-6",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "只好",
    "pinyin": "zhǐhǎo",
    "sinoVietnamese": "chỉ hảo",
    "meaning": "đành phải",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/只好.mp3",
    "exampleSentence": {
      "chinese": "下雨了，我们只好取消计划。",
      "pinyin": "Xiàyǔ le, wǒmen zhǐhǎo qǔxiāo jìhuà.",
      "vietnamese": "Trời mưa rồi, chúng tôi đành phải hủy kế hoạch."
    }
  },
  {
    "id": "boya1-26-7",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "努力",
    "pinyin": "nǔlì",
    "sinoVietnamese": "nỗ lực",
    "meaning": "cố gắng",
    "partOfSpeech": "Động từ / Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/努力.mp3",
    "exampleSentence": {
      "chinese": "我会努力学习的",
      "pinyin": "Wǒ huì nǔ lì xué xí de",
      "vietnamese": "Tôi sẽ cố gắng học tập"
    }
  },
  {
    "id": "boya1-26-8",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "用功",
    "pinyin": "yònggōng",
    "sinoVietnamese": "dụng công",
    "meaning": "chăm chỉ, cần cù",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/用功.mp3",
    "exampleSentence": {
      "chinese": "他学习很用功。",
      "pinyin": "Tā xuéxí hěn yònggōng.",
      "vietnamese": "Anh ấy học rất chăm chỉ."
    }
  },
  {
    "id": "boya1-26-9",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "快要",
    "pinyin": "kuàiyào",
    "sinoVietnamese": "khoái yếu",
    "meaning": "sắp",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/快要.mp3",
    "exampleSentence": {
      "chinese": "天快要黑了",
      "pinyin": "Tiān kuài yào hēi le",
      "vietnamese": "Trời sắp tối"
    }
  },
  {
    "id": "boya1-26-10",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "放假",
    "pinyin": "fàngjià",
    "sinoVietnamese": "phóng giá",
    "meaning": "nghỉ phép",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/放假.mp3",
    "exampleSentence": {
      "chinese": "我们明天放假。",
      "pinyin": "Wǒmen míngtiān fàngjià.",
      "vietnamese": "Ngày mai chúng tôi được nghỉ."
    }
  },
  {
    "id": "boya1-26-11",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "假期",
    "pinyin": "jiàqī",
    "sinoVietnamese": "giá kỳ",
    "meaning": "kỳ nghỉ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/假期.mp3",
    "exampleSentence": {
      "chinese": "暑假很长",
      "pinyin": "Shǔ jiǎ hěn zhǎng",
      "vietnamese": "Kỳ nghỉ hè rất dài"
    }
  },
  {
    "id": "boya1-26-12",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "旅行",
    "pinyin": "lǚxíng",
    "sinoVietnamese": "lữ hành",
    "meaning": "du lịch",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/旅行.mp3",
    "exampleSentence": {
      "chinese": "我们去旅行吧",
      "pinyin": "Wǒ men qù lǚ xíng ba",
      "vietnamese": "Chúng ta hãy đi du lịch nào"
    }
  },
  {
    "id": "boya1-26-13",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "决定",
    "pinyin": "juédìng",
    "sinoVietnamese": "quyết định",
    "meaning": "quyết định; quyết định",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/决定.mp3",
    "exampleSentence": {
      "chinese": "我们决定明天早上八点出发。",
      "pinyin": "Wǒmen juédìng míngtiān zǎoshang bā diǎn chūfā.",
      "vietnamese": "Chúng tôi quyết định sáng mai tám giờ xuất phát."
    }
  },
  {
    "id": "boya1-26-14",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "可能",
    "pinyin": "kěnéng",
    "sinoVietnamese": "khả năng",
    "meaning": "có thể",
    "partOfSpeech": "Động từ / Trợ động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可能.mp3",
    "exampleSentence": {
      "chinese": "明天可能下雨",
      "pinyin": "Míng tiān kě néng xià yǔ",
      "vietnamese": "Ngày mai có thể mưa"
    }
  },
  {
    "id": "boya1-26-15",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "出发",
    "pinyin": "chūfā",
    "sinoVietnamese": "xuất phát",
    "meaning": "khởi hành",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出发.mp3",
    "exampleSentence": {
      "chinese": "我们明天一早就出发去北京。",
      "pinyin": "wǒ men míng tiān yī zǎo jiù chū fā qù běi jīng.",
      "vietnamese": "Sáng sớm mai chúng tôi sẽ xuất phát đi Bắc Kinh."
    }
  },
  {
    "id": "boya1-26-16",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "考虑",
    "pinyin": "kǎolǜ",
    "sinoVietnamese": "khảo lự",
    "meaning": "xem xét",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/考虑.mp3",
    "exampleSentence": {
      "chinese": "让我考虑一下。",
      "pinyin": "Ràng wǒ kǎolǜ yīxià.",
      "vietnamese": "Để tôi cân nhắc một chút."
    }
  },
  {
    "id": "boya1-26-17",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "明信片",
    "pinyin": "míngxìnpiàn",
    "sinoVietnamese": "minh tín phiến",
    "meaning": "bưu thiếp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/明信片.mp3",
    "exampleSentence": {
      "chinese": "我在巴黎给朋友寄了一张明信片。",
      "pinyin": "wǒ zài bā lí gěi péng you jì le yī zhāng míng xìn piàn.",
      "vietnamese": "Tôi đã gửi cho bạn bè một tấm bưu thiếp khi ở Paris."
    }
  },
  {
    "id": "boya1-26-18",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "圣诞节",
    "pinyin": "Shèngdàn jié",
    "sinoVietnamese": "thánh đản tiết",
    "meaning": "giáng sinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/圣诞节.mp3",
    "exampleSentence": {
      "chinese": "圣诞节快乐！",
      "pinyin": "Shèngdànjié kuàilè!",
      "vietnamese": "Chúc mừng Giáng sinh!"
    }
  },
  {
    "id": "boya1-26-19",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "新年",
    "pinyin": "xīnnián",
    "sinoVietnamese": "tân niên",
    "meaning": "năm mới",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/新年.mp3",
    "exampleSentence": {
      "chinese": "新年快乐",
      "pinyin": "Xīnnián kuàilè",
      "vietnamese": "Chúc mừng năm mới"
    }
  },
  {
    "id": "boya1-26-20",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "寄",
    "pinyin": "jì",
    "sinoVietnamese": "ký",
    "meaning": "gửi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/寄.mp3",
    "exampleSentence": {
      "chinese": "我给朋友寄了一份礼物。",
      "pinyin": "Wǒ gěi péngyǒu jì le yí fèn lǐwù.",
      "vietnamese": "Tôi gửi bạn một món quà."
    }
  },
  {
    "id": "boya1-26-21",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "贺卡",
    "pinyin": "hèkǎ",
    "sinoVietnamese": "hạ ca",
    "meaning": "thiệp chúc mừng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/贺卡.mp3",
    "exampleSentence": {
      "chinese": "我给朋友寄了一张生日贺卡。",
      "pinyin": "Wǒ gěi péngyǒu jì le yī zhāng shēngrì hèkǎ.",
      "vietnamese": "Tôi gửi cho bạn một tấm thiệp sinh nhật."
    }
  },
  {
    "id": "boya1-26-22",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "办法",
    "pinyin": "bànfǎ",
    "sinoVietnamese": "biện pháp",
    "meaning": "cách, phương pháp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/办法.mp3",
    "exampleSentence": {
      "chinese": "我没办法了。",
      "pinyin": "Wǒ méi bàn fǎ le.",
      "vietnamese": "Tôi không còn cách nào."
    }
  },
  {
    "id": "boya1-26-23",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "亲戚",
    "pinyin": "qīnqi",
    "sinoVietnamese": "thân thích",
    "meaning": "họ hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/亲戚.mp3",
    "exampleSentence": {
      "chinese": "走亲戚",
      "pinyin": "zǒu qīnqi",
      "vietnamese": "Thăm họ hàng"
    }
  },
  {
    "id": "boya1-26-24",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "整整",
    "pinyin": "zhěngzhěng",
    "sinoVietnamese": "chỉnh chỉnh",
    "meaning": "toàn bộ",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/整整.mp3",
    "exampleSentence": {
      "chinese": "我等了整整一个小时。",
      "pinyin": "Wǒ děng le zhěng zhěng yī gè xiǎo shí.",
      "vietnamese": "Tôi đã đợi nguyên một tiếng đồng hồ."
    }
  },
  {
    "id": "boya1-26-25",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "邮局",
    "pinyin": "yóujú",
    "sinoVietnamese": "bưu cục",
    "meaning": "bưu điện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/邮局.mp3",
    "exampleSentence": {
      "chinese": "我去邮局寄信。",
      "pinyin": "Wǒ qù yóujú jì xìn.",
      "vietnamese": "Tôi đi bưu điện gửi thư."
    }
  },
  {
    "id": "boya1-26-26",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "刚才",
    "pinyin": "gāngcái",
    "sinoVietnamese": "cương, cang tài",
    "meaning": "vừa rồi",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/刚才.mp3",
    "exampleSentence": {
      "chinese": "他刚才来过电话。",
      "pinyin": "Tā gāng cái lái guò diàn huà.",
      "vietnamese": "Anh ấy vừa gọi điện đến."
    }
  },
  {
    "id": "boya1-26-27",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "邮票",
    "pinyin": "yóupiào",
    "sinoVietnamese": "bưu phiếu",
    "meaning": "tem",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/邮票.mp3",
    "exampleSentence": {
      "chinese": "请贴一张邮票在信封上。",
      "pinyin": "Qǐng tiē yī zhāng yóu piào zài xìn fēng shàng.",
      "vietnamese": "Hãy dán một con tem lên phong bì."
    }
  },
  {
    "id": "boya1-26-28",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "排队",
    "pinyin": "páiduì",
    "sinoVietnamese": "bài đội",
    "meaning": "xếp hàng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/排队.mp3",
    "exampleSentence": {
      "chinese": "请在这里排队",
      "pinyin": "Qǐng zài zhè lǐ pái duì",
      "vietnamese": "Vui lòng xếp hàng ở đây"
    }
  },
  {
    "id": "boya1-26-29",
    "lesson": 26,
    "lessonTitle": "Bài 26: 快考试了 (Sắp thi rồi)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "东北",
    "pinyin": "Dōngběi",
    "sinoVietnamese": "đông bắc",
    "meaning": "đông Bắc",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/东北.mp3",
    "exampleSentence": {
      "chinese": "东北地区",
      "pinyin": "Dōng běi dì qū",
      "vietnamese": "Vùng Đông Bắc"
    }
  },
  {
    "id": "boya1-27-1",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "计划",
    "pinyin": "jìhuà",
    "sinoVietnamese": "kế hoạch",
    "meaning": "kế hoạch",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/计划.mp3",
    "exampleSentence": {
      "chinese": "我有学习计划",
      "pinyin": "Wǒ yǒu xué xí jì huà",
      "vietnamese": "Tôi có kế hoạch học tập"
    }
  },
  {
    "id": "boya1-27-2",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "待",
    "pinyin": "dāi",
    "sinoVietnamese": "đãi",
    "meaning": "ở lại",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/待.mp3",
    "exampleSentence": {
      "chinese": "暑假我打算在家里待几天。",
      "pinyin": "Shǔjià wǒ dǎsuàn zài jiā lǐ dāi jǐ tiān.",
      "vietnamese": "Kỳ nghỉ hè tôi dự định ở nhà vài ngày."
    }
  },
  {
    "id": "boya1-27-3",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "地方",
    "pinyin": "dìfang",
    "sinoVietnamese": "địa phương",
    "meaning": "nơi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地方.mp3",
    "exampleSentence": {
      "chinese": "这是什么地方？",
      "pinyin": "Zhè shì shénme dìfāng?",
      "vietnamese": "Đây là nơi nào?"
    }
  },
  {
    "id": "boya1-27-4",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "风景",
    "pinyin": "fēngjǐng",
    "sinoVietnamese": "phong cảnh",
    "meaning": "phong cảnh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/风景.mp3",
    "exampleSentence": {
      "chinese": "这个风景很好。",
      "pinyin": "Zhè gè fēng jǐng hěn hǎo.",
      "vietnamese": "phong cảnh này rất tốt."
    }
  },
  {
    "id": "boya1-27-5",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "美",
    "pinyin": "měi",
    "sinoVietnamese": "mĩ",
    "meaning": "đẹp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/美.mp3",
    "exampleSentence": {
      "chinese": "这里风景很美。",
      "pinyin": "Zhè lǐ fēng jǐng hěn měi.",
      "vietnamese": "Cảnh vật ở đây rất đẹp."
    }
  },
  {
    "id": "boya1-27-6",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "极了",
    "pinyin": "jíle",
    "sinoVietnamese": "cực liễu",
    "meaning": "cực kỳ",
    "partOfSpeech": "Trợ từ mức độ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/极了.mp3",
    "exampleSentence": {
      "chinese": "这道菜好吃极了！",
      "pinyin": "Zhè dào cài hǎochī jí le!",
      "vietnamese": "Món này ngon cực kỳ!"
    }
  },
  {
    "id": "boya1-27-7",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "复习",
    "pinyin": "fùxí",
    "sinoVietnamese": "phục, phú, phúc, phức tập",
    "meaning": "ôn tập",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/复习.mp3",
    "exampleSentence": {
      "chinese": "我正在复习考试",
      "pinyin": "Wǒ zhèng zài fù xí kǎo shì",
      "vietnamese": "Tôi đang ôn thi"
    }
  },
  {
    "id": "boya1-27-8",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "功课",
    "pinyin": "gōngkè",
    "sinoVietnamese": "công khóa",
    "meaning": "bài tập",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/功课.mp3",
    "exampleSentence": {
      "chinese": "我还没做完功课。",
      "pinyin": "Wǒ hái méi zuò wán gōng kè.",
      "vietnamese": "Tôi vẫn chưa làm xong bài tập."
    }
  },
  {
    "id": "boya1-27-9",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "毕业",
    "pinyin": "bìyè",
    "sinoVietnamese": "tất nghiệp",
    "meaning": "tốt nghiệp",
    "partOfSpeech": "Động từ (verb)",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/毕业.mp3",
    "exampleSentence": {
      "chinese": "我今年大学毕业。",
      "pinyin": "Wǒ jīnnián dàxué bìyè.",
      "vietnamese": "Tôi tốt nghiệp đại học năm nay."
    }
  },
  {
    "id": "boya1-27-10",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "抓紧",
    "pinyin": "zhuājǐn",
    "sinoVietnamese": "trảo khẩn",
    "meaning": "nắm chắc; tranh thủ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/抓紧.mp3",
    "exampleSentence": {
      "chinese": "快考试了，我们要抓紧时间复习。",
      "pinyin": "Kuài kǎoshì le, wǒmen yào zhuājǐn shíjiān fùxí.",
      "vietnamese": "Sắp thi rồi, chúng ta phải tranh thủ thời gian ôn tập."
    }
  },
  {
    "id": "boya1-27-11",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "方面",
    "pinyin": "fāngmiàn",
    "sinoVietnamese": "phương diện, miến",
    "meaning": "phương diện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/方面.mp3",
    "exampleSentence": {
      "chinese": "他在很多方面都很优秀。",
      "pinyin": "Tā zài hěn duō fāng miàn dōu hěn yōu xiù.",
      "vietnamese": "Anh ấy xuất sắc trên nhiều phương diện."
    }
  },
  {
    "id": "boya1-27-12",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "古代",
    "pinyin": "gǔdài",
    "sinoVietnamese": "cổ đại",
    "meaning": "cổ đại",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/古代.mp3",
    "exampleSentence": {
      "chinese": "中国古代有四大发明。",
      "pinyin": "Zhōngguó gǔdài yǒu sì dà fāmíng.",
      "vietnamese": "Trung Quốc cổ đại có bốn phát minh vĩ đại."
    }
  },
  {
    "id": "boya1-27-13",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "历史",
    "pinyin": "lìshǐ",
    "sinoVietnamese": "lịch sử",
    "meaning": "lịch sử",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/历史.mp3",
    "exampleSentence": {
      "chinese": "中国有五千年的历史。",
      "pinyin": "Zhōngguó yǒu wǔqiān nián de lìshǐ.",
      "vietnamese": "Trung Quốc có năm nghìn năm lịch sử."
    }
  },
  {
    "id": "boya1-27-14",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "感兴趣",
    "pinyin": "gǎnxìngqù",
    "sinoVietnamese": "cảm hứng thú",
    "meaning": "quan tâm đến",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/感兴趣.mp3",
    "exampleSentence": {
      "chinese": "我对中国文化很感兴趣。",
      "pinyin": "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.",
      "vietnamese": "Tôi rất thích thú với văn hóa Trung Quốc."
    }
  },
  {
    "id": "boya1-27-15",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "教授",
    "pinyin": "jiàoshòu",
    "sinoVietnamese": "giáo thụ",
    "meaning": "giáo sư",
    "partOfSpeech": "Danh từ (noun) / Động từ (verb)",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/教授.mp3",
    "exampleSentence": {
      "chinese": "他是北京大学教授。",
      "pinyin": "Tā shì Běijīng Dàxué jiàoshòu.",
      "vietnamese": "Ông ấy là giáo sư Đại học Bắc Kinh."
    }
  },
  {
    "id": "boya1-27-16",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "一定",
    "pinyin": "yīdìng",
    "sinoVietnamese": "nhất định",
    "meaning": "nhất định",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一定.mp3",
    "exampleSentence": {
      "chinese": "我一定去",
      "pinyin": "Wǒ yī dìng qù",
      "vietnamese": "Tôi nhất định sẽ đi"
    }
  },
  {
    "id": "boya1-27-17",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "考",
    "pinyin": "kǎo",
    "sinoVietnamese": "khảo",
    "meaning": "thi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/考.mp3",
    "exampleSentence": {
      "chinese": "考试",
      "pinyin": "Kǎo shì",
      "vietnamese": "Kỳ thi"
    }
  },
  {
    "id": "boya1-27-18",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "春节",
    "pinyin": "Chūnjié",
    "sinoVietnamese": "xuân tiết",
    "meaning": "tết Nguyên Đán",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/春节.mp3",
    "exampleSentence": {
      "chinese": "春节快乐",
      "pinyin": "Chūn jié kuài lè",
      "vietnamese": "Chúc mừng năm mới"
    }
  },
  {
    "id": "boya1-27-19",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "让",
    "pinyin": "ràng",
    "sinoVietnamese": "nhượng",
    "meaning": "cho phép",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/让.mp3",
    "exampleSentence": {
      "chinese": "请让我先走",
      "pinyin": "Qǐng ràng wǒ xiān zǒu",
      "vietnamese": "Mời để tôi đi trước"
    }
  },
  {
    "id": "boya1-27-20",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "问题",
    "pinyin": "wèntí",
    "sinoVietnamese": "vấn đề",
    "meaning": "câu hỏi, vấn đề",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/问题.mp3",
    "exampleSentence": {
      "chinese": "我有一个问题",
      "pinyin": "Wǒ yǒu yī gè wèn tí",
      "vietnamese": "Tôi có một câu hỏi"
    }
  },
  {
    "id": "boya1-27-21",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "sinoVietnamese": "ưng cai",
    "meaning": "nên",
    "partOfSpeech": "Trợ động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/应该.mp3",
    "exampleSentence": {
      "chinese": "你应该多喝水",
      "pinyin": "Nǐ yīng gāi duō hē shuǐ",
      "vietnamese": "Bạn nên uống nhiều nước"
    }
  },
  {
    "id": "boya1-27-22",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "想念",
    "pinyin": "xiǎngniàn",
    "sinoVietnamese": "tưởng niệm",
    "meaning": "nhớ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/想念.mp3",
    "exampleSentence": {
      "chinese": "我很想念我的家人",
      "pinyin": "Wǒ hěn xiǎngniàn wǒ de jiārén",
      "vietnamese": "Tôi rất nhớ gia đình của mình"
    }
  },
  {
    "id": "boya1-27-23",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "趟",
    "pinyin": "tàng",
    "sinoVietnamese": "thảng",
    "meaning": "chuyến",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/趟.mp3",
    "exampleSentence": {
      "chinese": "下午我得去一趟银行。",
      "pinyin": "Xiàwǔ wǒ děi qù yí tàng yínháng.",
      "vietnamese": "Chiều nay tôi phải đi một chuyến ngân hàng."
    }
  },
  {
    "id": "boya1-27-24",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "考上",
    "pinyin": "kǎoshàng",
    "sinoVietnamese": "khảo thượng",
    "meaning": "thi đỗ, đậu (kỳ thi)",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/考上.mp3",
    "exampleSentence": {
      "chinese": "他终于考上了理想的大学。",
      "pinyin": "Tā zhōngyú kǎoshàng le lǐxiǎng de dàxué.",
      "vietnamese": "Cuối cùng anh ấy cũng thi đỗ vào trường đại học mơ ước."
    }
  },
  {
    "id": "boya1-27-25",
    "lesson": 27,
    "lessonTitle": "Bài 27: 爸爸和妈妈让我回家 (Bố mẹ bảo tôi về nhà)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "哈尔滨",
    "pinyin": "Hāěrbīn",
    "sinoVietnamese": "cáp nhĩ tân",
    "meaning": "cáp Nhĩ Tân (thành phố ở Trung Quốc)",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哈尔滨.mp3",
    "exampleSentence": {
      "chinese": "哈尔滨的冬天非常冷。",
      "pinyin": "Hā'ěrbīn de dōngtiān fēicháng lěng.",
      "vietnamese": "Mùa đông ở Cáp Nhĩ Tân rất lạnh."
    }
  },
  {
    "id": "boya1-28-1",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "星期",
    "pinyin": "xīngqī",
    "sinoVietnamese": "tinh kỳ",
    "meaning": "tuần",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/星期.mp3",
    "exampleSentence": {
      "chinese": "今天星期几？",
      "pinyin": "Jīntiān xīngqī jǐ?",
      "vietnamese": "Hôm nay thứ mấy?"
    }
  },
  {
    "id": "boya1-28-2",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "门",
    "pinyin": "mén",
    "sinoVietnamese": "môn",
    "meaning": "cửa, cổng, lối vào",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/门.mp3",
    "exampleSentence": {
      "chinese": "请关门",
      "pinyin": "Qǐng guān mén",
      "vietnamese": "Làm ơn đóng cửa"
    }
  },
  {
    "id": "boya1-28-3",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "完",
    "pinyin": "wán",
    "sinoVietnamese": "hoàn",
    "meaning": "hoàn thành",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/完.mp3",
    "exampleSentence": {
      "chinese": "做完了",
      "pinyin": "Zuò wán le",
      "vietnamese": "Đã làm xong"
    }
  },
  {
    "id": "boya1-28-4",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "有些",
    "pinyin": "yǒuxiē",
    "sinoVietnamese": "hữu ta",
    "meaning": "một số",
    "partOfSpeech": "Đại từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有些.mp3",
    "exampleSentence": {
      "chinese": "有些人喜欢吃辣。",
      "pinyin": "Yǒuxiē rén xǐhuan chī là.",
      "vietnamese": "Một số người thích ăn cay."
    }
  },
  {
    "id": "boya1-28-5",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "报告",
    "pinyin": "bàogào",
    "sinoVietnamese": "báo cáo",
    "meaning": "báo cáo",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/报告.mp3",
    "exampleSentence": {
      "chinese": "经理让我做一个工作报告。",
      "pinyin": "Jīnglǐ ràng wǒ zuò yíge gōngzuò bàogào.",
      "vietnamese": "Giám đốc bảo tôi làm một báo cáo công việc."
    }
  },
  {
    "id": "boya1-28-6",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "得",
    "pinyin": "de",
    "sinoVietnamese": "đắc",
    "meaning": "được",
    "partOfSpeech": "Động từ / Trợ từ / Trợ động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/得.mp3",
    "exampleSentence": {
      "chinese": "我得到了好消息",
      "pinyin": "Wǒ dé dào le hǎo xiāo xī",
      "vietnamese": "Tôi đã nhận được tin tốt"
    }
  },
  {
    "id": "boya1-28-7",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "放松",
    "pinyin": "fàngsōng",
    "sinoVietnamese": "phóng tùng",
    "meaning": "thư giãn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/放松.mp3",
    "exampleSentence": {
      "chinese": "听音乐是缓解压力放松身心的好方法。",
      "pinyin": "tīng yīn yuè shì huǎn jiě yā lì fàng sōng shēn xīn de hǎo fāng fǎ.",
      "vietnamese": "Nghe nhạc là một phương pháp tốt để giải tỏa áp lực và thư giãn thân tâm."
    }
  },
  {
    "id": "boya1-28-8",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "紧张",
    "pinyin": "jǐnzhāng",
    "sinoVietnamese": "khẩn trương",
    "meaning": "căng thẳng",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/紧张.mp3",
    "exampleSentence": {
      "chinese": "明天要考试，我感到很紧张。",
      "pinyin": "Míng tiān yào kǎo shì, wǒ gǎn dào hěn jǐn zhāng.",
      "vietnamese": "Mai thi rồi, tôi cảm thấy rất căng thẳng."
    }
  },
  {
    "id": "boya1-28-9",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "效果",
    "pinyin": "xiàoguǒ",
    "sinoVietnamese": "hiệu quả",
    "meaning": "hiệu quả",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/效果.mp3",
    "exampleSentence": {
      "chinese": "这个方法很有效果。",
      "pinyin": "Zhè gè fāng fǎ hěn yǒu xiào guǒ.",
      "vietnamese": "Phương pháp này rất có hiệu quả."
    }
  },
  {
    "id": "boya1-28-10",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "呀",
    "pinyin": "ya",
    "sinoVietnamese": "nha",
    "meaning": "tiếng thán từ 'ya'",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/呀.mp3",
    "exampleSentence": {
      "chinese": "你真的要去呀？",
      "pinyin": "Nǐ zhēnde yào qù ya?",
      "vietnamese": "Bạn thực sự muốn đi á?"
    }
  },
  {
    "id": "boya1-28-11",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "道",
    "pinyin": "dào",
    "sinoVietnamese": "đạo",
    "meaning": "loại (dùng để đếm tòa nhà hoặc câu hỏi)",
    "partOfSpeech": "Lượng từ / Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/道.mp3",
    "exampleSentence": {
      "chinese": "这是一道难题",
      "pinyin": "Zhè shì yī dào nán tí",
      "vietnamese": "Đây là một câu hỏi khó"
    }
  },
  {
    "id": "boya1-28-12",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "题",
    "pinyin": "tí",
    "sinoVietnamese": "đề",
    "meaning": "đề bài",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/题.mp3",
    "exampleSentence": {
      "chinese": "这道题很难",
      "pinyin": "Zhè dào tí hěn nán",
      "vietnamese": "Câu hỏi này rất khó"
    }
  },
  {
    "id": "boya1-28-13",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "为什么",
    "pinyin": "wèishénme",
    "sinoVietnamese": "vị thậm ma",
    "meaning": "tại sao",
    "partOfSpeech": "Đại từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/为什么.mp3",
    "exampleSentence": {
      "chinese": "你为什么来",
      "pinyin": "Nǐ wèi shén me lái",
      "vietnamese": "Tại sao bạn đến"
    }
  },
  {
    "id": "boya1-28-14",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "够",
    "pinyin": "gòu",
    "sinoVietnamese": "cấu",
    "meaning": "đủ",
    "partOfSpeech": "Tính từ / Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/够.mp3",
    "exampleSentence": {
      "chinese": "钱不够",
      "pinyin": "Qián bù gòu",
      "vietnamese": "Tiền không đủ"
    }
  },
  {
    "id": "boya1-28-15",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "阅读",
    "pinyin": "yuèdú",
    "sinoVietnamese": "duyệt độc",
    "meaning": "đọc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/阅读.mp3",
    "exampleSentence": {
      "chinese": "我喜欢阅读小说。",
      "pinyin": "Wǒ xǐhuan yuèdú xiǎoshuō.",
      "vietnamese": "Tôi thích đọc tiểu thuyết."
    }
  },
  {
    "id": "boya1-28-16",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "汉字",
    "pinyin": "hànzì",
    "sinoVietnamese": "hán tự",
    "meaning": "chữ Hán",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/汉字.mp3",
    "exampleSentence": {
      "chinese": "我会写汉字。",
      "pinyin": "Wǒ huì xiě Hànzi.",
      "vietnamese": "Tôi biết viết chữ Hán."
    }
  },
  {
    "id": "boya1-28-17",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "难",
    "pinyin": "nán",
    "sinoVietnamese": "nan",
    "meaning": "khó",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难.mp3",
    "exampleSentence": {
      "chinese": "很难",
      "pinyin": "Hěn nán",
      "vietnamese": "Rất khó"
    }
  },
  {
    "id": "boya1-28-18",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "慢",
    "pinyin": "màn",
    "sinoVietnamese": "mạn",
    "meaning": "chậm",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/慢.mp3",
    "exampleSentence": {
      "chinese": "慢慢走",
      "pinyin": "Màn màn zǒu",
      "vietnamese": "Đi chậm rãi"
    }
  },
  {
    "id": "boya1-28-19",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "确实",
    "pinyin": "quèshí",
    "sinoVietnamese": "xác thực",
    "meaning": "thực sự",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/确实.mp3",
    "exampleSentence": {
      "chinese": "这部电影确实很有意思。",
      "pinyin": "zhè bù diàn yǐng què shí hěn yǒu yì si.",
      "vietnamese": "Bộ phim này quả thực rất thú vị."
    }
  },
  {
    "id": "boya1-28-20",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "记",
    "pinyin": "jì",
    "sinoVietnamese": "ký",
    "meaning": "ghi lại",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/记.mp3",
    "exampleSentence": {
      "chinese": "请记下来",
      "pinyin": "Qǐng jì xià lái",
      "vietnamese": "Làm ơn ghi lại"
    }
  },
  {
    "id": "boya1-28-21",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "方法",
    "pinyin": "fāngfǎ",
    "sinoVietnamese": "phương pháp",
    "meaning": "phương pháp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/方法.mp3",
    "exampleSentence": {
      "chinese": "这是一个好方法。",
      "pinyin": "Zhè shì yī gè hǎo fāng fǎ.",
      "vietnamese": "Đây là một phương pháp tốt."
    }
  },
  {
    "id": "boya1-28-22",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "编",
    "pinyin": "biān",
    "sinoVietnamese": "biên",
    "meaning": "tổ chức",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/编.mp3",
    "exampleSentence": {
      "chinese": "他在出版社编书。",
      "pinyin": "Tā zài chūbǎnshè biān shū.",
      "vietnamese": "Anh ấy biên tập sách tại nhà xuất bản."
    }
  },
  {
    "id": "boya1-28-23",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "故事",
    "pinyin": "gùshi",
    "sinoVietnamese": "cố sự",
    "meaning": "câu chuyện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/故事.mp3",
    "exampleSentence": {
      "chinese": "奶奶给我讲了一个故事",
      "pinyin": "Nǎi nǎi gěi wǒ jiǎng le yī gè gù shì",
      "vietnamese": "Bà kể cho tôi nghe một câu chuyện"
    }
  },
  {
    "id": "boya1-28-24",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "也许",
    "pinyin": "yěxǔ",
    "sinoVietnamese": "dã hứa",
    "meaning": "có lẽ",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/也许.mp3",
    "exampleSentence": {
      "chinese": "也许明天会好",
      "pinyin": "Yě xǔ míng tiān huì hǎo",
      "vietnamese": "Có lẽ ngày mai sẽ tốt lên"
    }
  },
  {
    "id": "boya1-28-25",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "sinoVietnamese": "bang trợ",
    "meaning": "giúp đỡ",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/帮助.mp3",
    "exampleSentence": {
      "chinese": "谢谢你帮助我",
      "pinyin": "Xiè xiè nǐ bāng zhù wǒ",
      "vietnamese": "Cảm ơn bạn đã giúp đỡ tôi"
    }
  },
  {
    "id": "boya1-28-26",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "担心",
    "pinyin": "dānxīn",
    "sinoVietnamese": "đảm tâm",
    "meaning": "lo lắng",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/担心.mp3",
    "exampleSentence": {
      "chinese": "我很担心他的健康。",
      "pinyin": "Wǒ hěn dānxīn tā de jiànkāng.",
      "vietnamese": "Tôi rất lo lắng cho sức khỏe của anh ấy."
    }
  },
  {
    "id": "boya1-28-27",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "解决",
    "pinyin": "jiějué",
    "sinoVietnamese": "giải quyết",
    "meaning": "giải quyết",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/解决.mp3",
    "exampleSentence": {
      "chinese": "大家一起想办法解决这个问题。",
      "pinyin": "Dàjiā yìqǐ xiǎng bànfǎ jiějué zhè ge wèntí.",
      "vietnamese": "Mọi người cùng nghĩ cách giải quyết vấn đề này."
    }
  },
  {
    "id": "boya1-28-28",
    "lesson": 28,
    "lessonTitle": "Bài 28: 考得怎么样 (Thi thế nào)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "欧美",
    "pinyin": "ōuměi",
    "sinoVietnamese": "âu mĩ",
    "meaning": "âu Mỹ (Châu Âu và Châu Mỹ)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/欧美.mp3",
    "exampleSentence": {
      "chinese": "这部电影在欧美很受欢迎。",
      "pinyin": "Zhè bù diànyǐng zài Ōuměi hěn shòu huānyíng.",
      "vietnamese": "Bộ phim này rất được ưa chuộng ở Âu Mỹ."
    }
  },
  {
    "id": "boya1-29-1",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "全部",
    "pinyin": "quánbù",
    "sinoVietnamese": "toàn bộ",
    "meaning": "toàn bộ, hoàn toàn",
    "partOfSpeech": "Danh từ / Tính từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/全部.mp3",
    "exampleSentence": {
      "chinese": "这个全部很好。",
      "pinyin": "Zhège 全部 hěn hǎo.",
      "vietnamese": "全部 này rất tốt."
    }
  },
  {
    "id": "boya1-29-2",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "终于",
    "pinyin": "zhōngyú",
    "sinoVietnamese": "chung vu",
    "meaning": "cuối cùng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/终于.mp3",
    "exampleSentence": {
      "chinese": "我们终于找到了答案。",
      "pinyin": "Wǒmen zhōngyú zhǎodào le dá'àn.",
      "vietnamese": "Chúng tôi cuối cùng cũng đã tìm ra câu trả lời."
    }
  },
  {
    "id": "boya1-29-3",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "提",
    "pinyin": "tí",
    "sinoVietnamese": "đề",
    "meaning": "cầm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/提.mp3",
    "exampleSentence": {
      "chinese": "他提着沉重的箱子",
      "pinyin": "Tā tí zhe chén zhòng de xiāng zi",
      "vietnamese": "Anh ấy xách chiếc vali nặng"
    }
  },
  {
    "id": "boya1-29-4",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "糟糕",
    "pinyin": "zāogāo",
    "sinoVietnamese": "tao cao",
    "meaning": "quá tệ, thật xui xẻo",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/糟糕.mp3",
    "exampleSentence": {
      "chinese": "糟糕！我忘记带钱包了",
      "pinyin": "Zāogāo! Wǒ wàngjì dài qiánbāo le",
      "vietnamese": "Thôi chết! Tôi quên mang ví tiền rồi"
    }
  },
  {
    "id": "boya1-29-5",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "声调",
    "pinyin": "shēngdiào",
    "sinoVietnamese": "thanh điệu",
    "meaning": "âm điệu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/声调.mp3",
    "exampleSentence": {
      "chinese": "汉语的声调对外国人来说很难。",
      "pinyin": "hàn yǔ de shēng diào duì wài guó rén lái shuō hěn nán.",
      "vietnamese": "Thanh điệu của tiếng Trung đối với người nước ngoài mà nói rất khó."
    }
  },
  {
    "id": "boya1-29-6",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "错",
    "pinyin": "cuò",
    "sinoVietnamese": "thác",
    "meaning": "sai",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/错.mp3",
    "exampleSentence": {
      "chinese": "我写错了",
      "pinyin": "Wǒ xiěcuòle",
      "vietnamese": "Tôi viết sai rồi"
    }
  },
  {
    "id": "boya1-29-7",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "谦虚",
    "pinyin": "qiānxū",
    "sinoVietnamese": "khiêm hư",
    "meaning": "khiêm tốn",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/谦虚.mp3",
    "exampleSentence": {
      "chinese": "他虽然很成功，但依然很谦虚。",
      "pinyin": "tā suī rán hěn chéng gōng, dàn yī rán hěn qiān xū.",
      "vietnamese": "Mặc dù anh ấy rất thành công, nhưng vẫn rất khiêm tốn."
    }
  },
  {
    "id": "boya1-29-8",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "火车",
    "pinyin": "huǒchē",
    "sinoVietnamese": "hỏa xa",
    "meaning": "tàu hỏa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/火车.mp3",
    "exampleSentence": {
      "chinese": "坐火车去北京",
      "pinyin": "Zuò huǒchē qù Běijīng",
      "vietnamese": "Đi tàu hỏa đến Bắc Kinh"
    }
  },
  {
    "id": "boya1-29-9",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "票",
    "pinyin": "piào",
    "sinoVietnamese": "phiếu",
    "meaning": "vé",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/票.mp3",
    "exampleSentence": {
      "chinese": "买一张票",
      "pinyin": "Mǎi yī zhāng piào",
      "vietnamese": "Mua một tấm vé"
    }
  },
  {
    "id": "boya1-29-10",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "张",
    "pinyin": "zhāng",
    "sinoVietnamese": "trương",
    "meaning": "một từ để đo các vật phẳng",
    "partOfSpeech": "Lượng từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/张.mp3",
    "exampleSentence": {
      "chinese": "我买了一张桌子。",
      "pinyin": "Wǒ mǎi le yì zhāng zhuōzi.",
      "vietnamese": "Tôi mua một cái bàn."
    }
  },
  {
    "id": "boya1-29-11",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "卧铺",
    "pinyin": "wòpù",
    "sinoVietnamese": "ngọa phố",
    "meaning": "giường nằm (trên tàu)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/卧铺.mp3",
    "exampleSentence": {
      "chinese": "我买了一张卧铺票",
      "pinyin": "Wǒ mǎile yī zhāng wòpù piào",
      "vietnamese": "Tôi đã mua một vé giường nằm"
    }
  },
  {
    "id": "boya1-29-12",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "补",
    "pinyin": "bǔ",
    "sinoVietnamese": "bổ",
    "meaning": "sửa chữa, bổ sung",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/补.mp3",
    "exampleSentence": {
      "chinese": "请补一下你的衣服。",
      "pinyin": "Qǐng bǔ yī xià nǐ de yī fú.",
      "vietnamese": "Hãy vá lại áo của bạn."
    }
  },
  {
    "id": "boya1-29-13",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "联欢",
    "pinyin": "liánhuān",
    "sinoVietnamese": "liên hoan",
    "meaning": "tổ chức cuộc gặp thân mật",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/联欢.mp3",
    "exampleSentence": {
      "chinese": "学校举办了一场联欢晚会，气氛非常热烈。",
      "pinyin": "Xuéxiào jǔbàn le yī chǎng liánhuān wǎnhuì, qìfēn fēicháng rèliè.",
      "vietnamese": "Trường tổ chức một buổi liên hoan tối, không khí vô cùng sôi nổi."
    }
  },
  {
    "id": "boya1-29-14",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "晚会",
    "pinyin": "wǎnhuì",
    "sinoVietnamese": "vãn hội",
    "meaning": "dạ tiệc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚会.mp3",
    "exampleSentence": {
      "chinese": "新年晚会很热闹",
      "pinyin": "Xīn nián wǎn huì hěn rè nào",
      "vietnamese": "Dạ tiệc năm mới rất náo nhiệt"
    }
  },
  {
    "id": "boya1-29-15",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "表演",
    "pinyin": "biǎoyǎn",
    "sinoVietnamese": "biểu diễn",
    "meaning": "biểu diễn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/表演.mp3",
    "exampleSentence": {
      "chinese": "孩子们在舞台上表演舞蹈。",
      "pinyin": "Háizimen zài wǔtái shàng biǎoyǎn wǔdǎo.",
      "vietnamese": "Các em bé đang biểu diễn múa trên sân khấu."
    }
  },
  {
    "id": "boya1-29-16",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "节目",
    "pinyin": "jiémù",
    "sinoVietnamese": "tiết mục",
    "meaning": "chương trình",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/节目.mp3",
    "exampleSentence": {
      "chinese": "这个节目很有意思",
      "pinyin": "Zhè gè jié mù hěn yǒu yì sī",
      "vietnamese": "Chương trình này rất thú vị"
    }
  },
  {
    "id": "boya1-29-17",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "另外",
    "pinyin": "lìngwài",
    "sinoVietnamese": "lánh ngoại",
    "meaning": "ngoài ra",
    "partOfSpeech": "Trạng từ / Giới từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/另外.mp3",
    "exampleSentence": {
      "chinese": "另外，我还有一个问题。",
      "pinyin": "Lìngwài, wǒ hái yǒu yí gè wèntí.",
      "vietnamese": "Ngoài ra, tôi còn có một câu hỏi nữa."
    }
  },
  {
    "id": "boya1-29-18",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "别提",
    "pinyin": "biétí",
    "sinoVietnamese": "biệt đề",
    "meaning": "đừng nhắc tới (thường dùng để diễn tả sự không hài lòng, khó chịu, hoặc quá mức không cần nói thêm)",
    "partOfSpeech": "Cụm động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/别提.mp3",
    "exampleSentence": {
      "chinese": "别提了，我昨天倒霉透了。",
      "pinyin": "Biétí le, wǒ zuótiān dǎoméi tòule.",
      "vietnamese": "Đừng nhắc tới nữa, hôm qua tôi xui xẻo cực kỳ."
    }
  },
  {
    "id": "boya1-29-19",
    "lesson": 29,
    "lessonTitle": "Bài 29: 你什么时候去旅行 (Khi nào bạn đi du lịch)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "硬座",
    "pinyin": "yìngzuò",
    "sinoVietnamese": "ngạnh tọa",
    "meaning": "ghế cứng (trên tàu, xe)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/硬座.mp3",
    "exampleSentence": {
      "chinese": "硬座车厢通常比较拥挤。",
      "pinyin": "Yìngzuò chēxiāng tōngcháng bǐjiào yōngjǐ.",
      "vietnamese": "Khoang ghế cứng thường khá đông đúc."
    }
  },
  {
    "id": "boya1-30-1",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "行李",
    "pinyin": "xíngli",
    "sinoVietnamese": "hành lí",
    "meaning": "hành lý",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/行李.mp3",
    "exampleSentence": {
      "chinese": "我们的行李很多，需要叫出租车。",
      "pinyin": "Wǒmen de xíngli hěn duō, xūyào jiào chūzūchē.",
      "vietnamese": "Hành lý của chúng tôi nhiều, cần gọi taxi."
    }
  },
  {
    "id": "boya1-30-2",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "收拾",
    "pinyin": "shōushi",
    "sinoVietnamese": "thu thập",
    "meaning": "dọn dẹp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/收拾.mp3",
    "exampleSentence": {
      "chinese": "离开前请把房间收拾干净。",
      "pinyin": "Líkāi qián qǐng bǎ fángjiān shōushi gānjìng.",
      "vietnamese": "Trước khi rời đi xin hãy dọn dẹp phòng sạch sẽ."
    }
  },
  {
    "id": "boya1-30-3",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "半天",
    "pinyin": "bàntiān",
    "sinoVietnamese": "bán thiên",
    "meaning": "một thời gian dài",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/半天.mp3",
    "exampleSentence": {
      "chinese": "我等了他半天",
      "pinyin": "Wǒ děng le tā bàntiān",
      "vietnamese": "Tôi đợi anh ấy một hồi lâu"
    }
  },
  {
    "id": "boya1-30-4",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "整天",
    "pinyin": "zhěngtiān",
    "sinoVietnamese": "chỉnh thiên",
    "meaning": "cả ngày",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/整天.mp3",
    "exampleSentence": {
      "chinese": "他整天都在看书。",
      "pinyin": "Tā zhěngtiān dōu zài kànshū.",
      "vietnamese": "Anh ấy đọc sách cả ngày."
    }
  },
  {
    "id": "boya1-30-5",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "需要",
    "pinyin": "xūyào",
    "sinoVietnamese": "nhu yếu",
    "meaning": "cần",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/需要.mp3",
    "exampleSentence": {
      "chinese": "我需要你的帮助。",
      "pinyin": "Wǒ xū yào nǐ de bāng zhù.",
      "vietnamese": "Tôi cần sự giúp đỡ của bạn."
    }
  },
  {
    "id": "boya1-30-6",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "英文",
    "pinyin": "Yīngwén",
    "sinoVietnamese": "anh văn",
    "meaning": "tiếng Anh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/英文.mp3",
    "exampleSentence": {
      "chinese": "我学英文",
      "pinyin": "Wǒ xué yīng wén",
      "vietnamese": "Tôi học tiếng Anh"
    }
  },
  {
    "id": "boya1-30-7",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "首",
    "pinyin": "shǒu",
    "sinoVietnamese": "thủ",
    "meaning": "đoạn",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/首.mp3",
    "exampleSentence": {
      "chinese": "这是诗歌的首句。",
      "pinyin": "Zhè shì shīgē de shǒujù.",
      "vietnamese": "Đây là câu đầu của bài thơ."
    }
  },
  {
    "id": "boya1-30-8",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "流行",
    "pinyin": "liúxíng",
    "sinoVietnamese": "lưu hành",
    "meaning": "phổ biến",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/流行.mp3",
    "exampleSentence": {
      "chinese": "这首歌很流行",
      "pinyin": "Zhè shǒu gē hěn liú xíng",
      "vietnamese": "Bài hát này rất phổ biến"
    }
  },
  {
    "id": "boya1-30-9",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "歌曲",
    "pinyin": "gēqǔ",
    "sinoVietnamese": "ca khúc",
    "meaning": "bài hát",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/歌曲.mp3",
    "exampleSentence": {
      "chinese": "我喜欢这首歌曲",
      "pinyin": "Wǒ xǐhuan zhè shǒu gēqǔ",
      "vietnamese": "Tôi thích bài hát này"
    }
  },
  {
    "id": "boya1-30-10",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "民歌",
    "pinyin": "míngē",
    "sinoVietnamese": "dân ca",
    "meaning": "dân ca",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/民歌.mp3",
    "exampleSentence": {
      "chinese": "奶奶特别喜欢听中国民歌。",
      "pinyin": "Nǎinai tèbié xǐhuan tīng Zhōngguó míngē.",
      "vietnamese": "Bà nội đặc biệt thích nghe dân ca Trung Quốc."
    }
  },
  {
    "id": "boya1-30-11",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "好听",
    "pinyin": "hǎotīng",
    "sinoVietnamese": "hảo thính",
    "meaning": "dễ nghe",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好听.mp3",
    "exampleSentence": {
      "chinese": "这首歌很好听。",
      "pinyin": "Zhè shǒu gē hěn hǎotīng.",
      "vietnamese": "Bài hát này rất hay."
    }
  },
  {
    "id": "boya1-30-12",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "懂",
    "pinyin": "dǒng",
    "sinoVietnamese": "đổng",
    "meaning": "hiểu, biết",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/懂.mp3",
    "exampleSentence": {
      "chinese": "我懂了",
      "pinyin": "Wǒ dǒng le",
      "vietnamese": "Tôi hiểu rồi"
    }
  },
  {
    "id": "boya1-30-13",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "熟悉",
    "pinyin": "shúxī",
    "sinoVietnamese": "thục tất",
    "meaning": "quen thuộc",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/熟悉.mp3",
    "exampleSentence": {
      "chinese": "我对这个地方很熟悉。",
      "pinyin": "Wǒ duì zhè gè dì fāng hěn shú xī.",
      "vietnamese": "Tôi rất quen thuộc với nơi này."
    }
  },
  {
    "id": "boya1-30-14",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "歌词",
    "pinyin": "gēcí",
    "sinoVietnamese": "ca từ",
    "meaning": "lời bài hát",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/歌词.mp3",
    "exampleSentence": {
      "chinese": "这首歌的歌词写得非常优美",
      "pinyin": "Zhè shǒu gē de gēcí xiě de fēicháng yōuměi",
      "vietnamese": "Lời bài hát này được viết rất đẹp"
    }
  },
  {
    "id": "boya1-30-15",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "标准",
    "pinyin": "biāozhǔn",
    "sinoVietnamese": "tiêu chuẩn",
    "meaning": "tiêu chuẩn",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/标准.mp3",
    "exampleSentence": {
      "chinese": "这是很高的标准。",
      "pinyin": "Zhè shì hěn gāo de biāozhǔn.",
      "vietnamese": "Đây là tiêu chuẩn rất cao."
    }
  },
  {
    "id": "boya1-30-16",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "面子",
    "pinyin": "miànzi",
    "sinoVietnamese": "diện, miến tử",
    "meaning": "thể diện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面子.mp3",
    "exampleSentence": {
      "chinese": "中国人非常重视面子。",
      "pinyin": "Zhōngguó rén fēicháng zhòngshì miànzi.",
      "vietnamese": "Người Trung Quốc rất coi trọng thể diện."
    }
  },
  {
    "id": "boya1-30-17",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "光盘",
    "pinyin": "guāngpán",
    "sinoVietnamese": "quang bàn",
    "meaning": "đĩa CD",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/光盘.mp3",
    "exampleSentence": {
      "chinese": "听光盘",
      "pinyin": "tīng guāngpán",
      "vietnamese": "nghe đĩa CD"
    }
  },
  {
    "id": "boya1-30-18",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "次",
    "pinyin": "cì",
    "sinoVietnamese": "thứ",
    "meaning": "lần",
    "partOfSpeech": "Lượng từ / Danh từ / Tính từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/次.mp3",
    "exampleSentence": {
      "chinese": "第一次",
      "pinyin": "Dì yī cì",
      "vietnamese": "Lần thứ nhất"
    }
  },
  {
    "id": "boya1-30-19",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "怕",
    "pinyin": "pà",
    "sinoVietnamese": "phạ",
    "meaning": "sợ",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怕.mp3",
    "exampleSentence": {
      "chinese": "我怕黑。",
      "pinyin": "Wǒ pà hēi.",
      "vietnamese": "Tôi sợ tối."
    }
  },
  {
    "id": "boya1-30-20",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "联欢会",
    "pinyin": "liánhuānhuì",
    "sinoVietnamese": "liên hoan hội",
    "meaning": "buổi liên hoan, tiệc mừng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/联欢会.mp3",
    "exampleSentence": {
      "chinese": "学校每年都会举行新年联欢会。",
      "pinyin": "Xuéxiào měinián dūhuì jǔxíng xīnnián liánhuānhuì.",
      "vietnamese": "Trường học mỗi năm đều tổ chức buổi liên hoan mừng năm mới."
    }
  },
  {
    "id": "boya1-30-21",
    "lesson": 30,
    "lessonTitle": "Bài 30: 我要参加联欢会 (Tôi sẽ tham gia buổi liên hoan)",
    "unit": 6,
    "unitTitle": "Đơn vị 6: Giao tiếp trong học tập & Đời sống thực tế",
    "hanzi": "发音",
    "pinyin": "fāyīn",
    "sinoVietnamese": "phát âm",
    "meaning": "phát âm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya1",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发音.mp3",
    "exampleSentence": {
      "chinese": "请您帮我纠正一下这个词的发音。",
      "pinyin": "Qǐng nín bāng wǒ jiūzhèng yīxià zhège cí de fāyīn.",
      "vietnamese": "Xin bạn giúp tôi sửa lại phát âm của từ này."
    }
  }
];

/**
 * Lấy danh sách từ vựng theo số thứ tự bài học (1-30)
 */
export function getBoyaWordsByLesson(lessonNum: number): BoyaVocabularyWord[] {
  return BOYA1_VOCABULARY.filter(w => w.lesson === lessonNum);
}

/**
 * Lấy danh sách từ vựng theo Đơn vị (1-6)
 */
export function getBoyaWordsByUnit(unitNum: number): BoyaVocabularyWord[] {
  return BOYA1_VOCABULARY.filter(w => w.unit === unitNum);
}

/**
 * Thống kê từ vựng Boya 1
 */
export const BOYA1_STATS = {
  totalWords: 678,
  totalLessons: 30,
  totalUnits: 6
};
