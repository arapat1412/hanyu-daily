// src/data/boya2Data.ts
// Tổng hợp dữ liệu từ vựng Giáo trình Hán ngữ Boya Sơ cấp 2 (25 bài học, 5 đơn vị)
// Thu thập chuẩn xác từ Thư viện Boya Chinese (XieHanzi) - Tổng cộng 864 từ vựng kèm Audio, Ví dụ & Âm Hán Việt.

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

export const BOYA2_UNITS: BoyaUnit[] = [
  {
    "unit": 1,
    "title": "Cuộc sống & Sinh hoạt thường nhật",
    "titleZh": "日常生活与交际",
    "description": "Các tình huống đàm thoại thực tế khi máy bay trễ, tìm phòng thuê ra ngoài ở, miêu tả trang phục và ẩm thực.",
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
    "title": "Đời sống học đường & Hoạt động thể thao",
    "titleZh": "校园生活与文体活动",
    "description": "Đọc thông báo dán trên bảng tin, sinh hoạt ký túc xá, theo dõi trận đấu bóng kịch tính và leo núi ngắm cảnh.",
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
    "title": "Kỹ năng sống & Giao tiếp xã hội",
    "titleZh": "生活技能与社会交往",
    "description": "Tự tay nấu món ăn gia đình, kinh nghiệm dọn dẹp chuyển nhà, viết thư thăm hỏi người thân và bí quyết thành công.",
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
    "title": "Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "titleZh": "文化体验与生活感悟",
    "description": "Góc nhìn thú vị qua thói quen hằng ngày, viết nhật ký sinh viên, thưởng thức Kinh kịch truyền thống và những suy ngẫm sâu sắc.",
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
    "title": "Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "titleZh": "假日旅游与人生哲理",
    "description": "Kế hoạch du lịch dịp Tuần lễ vàng, trao đổi công việc qua điện thoại, câu chuyện vui hóm hỉnh và bài học làm người.",
    "lessonRange": "Bài 21 – 25",
    "lessons": [
      21,
      22,
      23,
      24,
      25
    ]
  }
];

export const BOYA2_LESSONS: BoyaLesson[] = [
  {
    "number": 1,
    "unit": 1,
    "titleZh": "飞机晚点了",
    "titlePinyin": "Fēijī wǎndiǎn le",
    "titleVi": "Máy bay bị trễ giờ",
    "wordCount": 24
  },
  {
    "number": 2,
    "unit": 1,
    "titleZh": "我想搬到外面去",
    "titlePinyin": "Wǒ xiǎng bān dào wàimiàn qù",
    "titleVi": "Tôi muốn dọn ra ngoài ở",
    "wordCount": 29
  },
  {
    "number": 3,
    "unit": 1,
    "titleZh": "她穿着一件黄衬衫",
    "titlePinyin": "Tā chuān zhe yí jiàn huáng chènshān",
    "titleVi": "Cô ấy mặc chiếc áo sơ mi vàng",
    "wordCount": 31
  },
  {
    "number": 4,
    "unit": 1,
    "titleZh": "俄罗斯没有这么多自行车",
    "titlePinyin": "Éluósī méiyǒu zhème duō zìxíngchē",
    "titleVi": "Nước Nga không có nhiều xe đạp như thế này",
    "wordCount": 30
  },
  {
    "number": 5,
    "unit": 1,
    "titleZh": "这家餐厅的菜不错",
    "titlePinyin": "Zhè jiā cāntīng de cài búcuò",
    "titleVi": "Món ăn của nhà hàng này khá ngon",
    "wordCount": 30
  },
  {
    "number": 6,
    "unit": 2,
    "titleZh": "广告栏上贴着一个通知",
    "titlePinyin": "Guǎnggàolán shang tiē zhe yí ge tōngzhī",
    "titleVi": "Trên bảng tin dán một thông báo",
    "wordCount": 31
  },
  {
    "number": 7,
    "unit": 2,
    "titleZh": "冰箱塞得满满的",
    "titlePinyin": "Bīngxiāng sāi de mǎnmǎn de",
    "titleVi": "Tủ lạnh nhét đầy ắp",
    "wordCount": 37
  },
  {
    "number": 8,
    "unit": 2,
    "titleZh": "比赛很精彩",
    "titlePinyin": "Bǐsài hěn jīngcǎi",
    "titleVi": "Trận đấu rất hấp dẫn",
    "wordCount": 35
  },
  {
    "number": 9,
    "unit": 2,
    "titleZh": "我进不去了",
    "titlePinyin": "Wǒ jìn bu qù le",
    "titleVi": "Tôi không vào được nữa",
    "wordCount": 35
  },
  {
    "number": 10,
    "unit": 2,
    "titleZh": "山上的风景美极了",
    "titlePinyin": "Shān shang de fēngjǐng měi jí le!",
    "titleVi": "Phong cảnh trên núi đẹp tuyệt",
    "wordCount": 47
  },
  {
    "number": 11,
    "unit": 3,
    "titleZh": "西红柿炒鸡蛋",
    "titlePinyin": "Xīhóngshì chǎo jīdàn",
    "titleVi": "Trứng xào cà chua",
    "wordCount": 43
  },
  {
    "number": 12,
    "unit": 3,
    "titleZh": "搬家",
    "titlePinyin": "Bānjiā",
    "titleVi": "Chuyển nhà",
    "wordCount": 33
  },
  {
    "number": 13,
    "unit": 3,
    "titleZh": "一封信",
    "titlePinyin": "Yì fēng xìn",
    "titleVi": "Một bức thư",
    "wordCount": 33
  },
  {
    "number": 14,
    "unit": 3,
    "titleZh": "成功需要多长时间",
    "titlePinyin": "Chénggōng xūyào duō cháng shíjiān",
    "titleVi": "Thành công cần bao nhiêu thời gian",
    "wordCount": 41
  },
  {
    "number": 15,
    "unit": 3,
    "titleZh": "请稍等",
    "titlePinyin": "Qǐng shāoděng",
    "titleVi": "Xin chờ một chút",
    "wordCount": 39
  },
  {
    "number": 16,
    "unit": 4,
    "titleZh": "从哪一头儿吃香蕉",
    "titlePinyin": "Cóng nǎ yì tóur chī xiāngjiāo?",
    "titleVi": "Ăn chuối từ đầu nào",
    "wordCount": 33
  },
  {
    "number": 17,
    "unit": 4,
    "titleZh": "李军的日记",
    "titlePinyin": "Lǐ Jūn de rìjì",
    "titleVi": "Nhật ký của Lý Quân",
    "wordCount": 38
  },
  {
    "number": 18,
    "unit": 4,
    "titleZh": "我看过京剧",
    "titlePinyin": "Wǒ kàn guo Jīngjù",
    "titleVi": "Tôi từng xem Kinh kịch",
    "wordCount": 26
  },
  {
    "number": 19,
    "unit": 4,
    "titleZh": "如果有一天…",
    "titlePinyin": "Rúguǒ yǒu yì tiān...",
    "titleVi": "Nếu một ngày nào đó…",
    "wordCount": 35
  },
  {
    "number": 20,
    "unit": 4,
    "titleZh": "好咖啡总是放在热杯子里的",
    "titlePinyin": "Hǎo kāfēi zǒngshì fàng zài rè bēizi lǐ de",
    "titleVi": "Cà phê ngon luôn đựng trong tách nóng",
    "wordCount": 36
  },
  {
    "number": 21,
    "unit": 5,
    "titleZh": "黄金周，痛痛快快玩儿一周",
    "titlePinyin": "Huángjīnzhōu, tòngtòng-kuàikuài wánr yì zhōu",
    "titleVi": "Tuần lễ vàng, chơi thỏa thích một tuần",
    "wordCount": 35
  },
  {
    "number": 22,
    "unit": 5,
    "titleZh": "一个电话",
    "titlePinyin": "Yí ge diànhuà",
    "titleVi": "Một cuộc điện thoại",
    "wordCount": 35
  },
  {
    "number": 23,
    "unit": 5,
    "titleZh": "笑话",
    "titlePinyin": "Xiàohuà",
    "titleVi": "Chuyện cười",
    "wordCount": 41
  },
  {
    "number": 24,
    "unit": 5,
    "titleZh": "人生",
    "titlePinyin": "Rénshēng",
    "titleVi": "Cuộc đời",
    "wordCount": 38
  },
  {
    "number": 25,
    "unit": 5,
    "titleZh": "点心小姐",
    "titlePinyin": "Diǎnxin xiǎojiě",
    "titleVi": "Cô nàng điểm tâm",
    "wordCount": 29
  }
];

export const BOYA2_VOCABULARY: BoyaVocabularyWord[] = [
  {
    "id": "boya2-1-1",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "都",
    "pinyin": "dōu",
    "sinoVietnamese": "đô",
    "meaning": "tất cả",
    "partOfSpeech": "Phó từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/都.mp3",
    "exampleSentence": {
      "chinese": "我们都喜欢中文",
      "pinyin": "Wǒmen dōu xǐhuan Zhōngwén",
      "vietnamese": "Chúng tôi đều thích tiếng Trung"
    }
  },
  {
    "id": "boya2-1-2",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "送",
    "pinyin": "sòng",
    "sinoVietnamese": "tống",
    "meaning": "tặng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/送.mp3",
    "exampleSentence": {
      "chinese": "我送你",
      "pinyin": "Wǒ sòng nǐ",
      "vietnamese": "Tôi đưa tiễn bạn"
    }
  },
  {
    "id": "boya2-1-3",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "接",
    "pinyin": "jiē",
    "sinoVietnamese": "tiếp",
    "meaning": "đón",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/接.mp3",
    "exampleSentence": {
      "chinese": "请接电话",
      "pinyin": "Qǐng jiē diànhuà",
      "vietnamese": "Làm ơn nghe điện thoại"
    }
  },
  {
    "id": "boya2-1-4",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "次",
    "pinyin": "cì",
    "sinoVietnamese": "thứ",
    "meaning": "lần",
    "partOfSpeech": "Lượng từ / Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/次.mp3",
    "exampleSentence": {
      "chinese": "第一次",
      "pinyin": "Dì yī cì",
      "vietnamese": "Lần thứ nhất"
    }
  },
  {
    "id": "boya2-1-5",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "看见",
    "pinyin": "kànjiàn",
    "sinoVietnamese": "khán kiến",
    "meaning": "thấy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看见.mp3",
    "exampleSentence": {
      "chinese": "我看见他了",
      "pinyin": "Wǒ kànjiàn tā le",
      "vietnamese": "Tôi thấy anh ấy rồi"
    }
  },
  {
    "id": "boya2-1-6",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "飞机",
    "pinyin": "fēijī",
    "sinoVietnamese": "phi cơ",
    "meaning": "máy bay",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/飞机.mp3",
    "exampleSentence": {
      "chinese": "坐飞机去",
      "pinyin": "Zuò fēijī qù",
      "vietnamese": "Đi máy bay"
    }
  },
  {
    "id": "boya2-1-7",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "父母",
    "pinyin": "fùmǔ",
    "sinoVietnamese": "phụ mẫu",
    "meaning": "cha mẹ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/父母.mp3",
    "exampleSentence": {
      "chinese": "我的父母都在北京工作。",
      "pinyin": "Wǒ de fùmǔ dōu zài Běijīng gōngzuò.",
      "vietnamese": "Bố mẹ tôi đều làm việc tại Bắc Kinh."
    }
  },
  {
    "id": "boya2-1-8",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "航班",
    "pinyin": "hángbān",
    "sinoVietnamese": "hàng ban",
    "meaning": "chuyến bay",
    "partOfSpeech": "Danh từ (noun)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/航班.mp3",
    "exampleSentence": {
      "chinese": "我错过了航班。",
      "pinyin": "Wǒ cuòguò le hángbān.",
      "vietnamese": "Tôi lỡ chuyến bay."
    }
  },
  {
    "id": "boya2-1-9",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "奇怪",
    "pinyin": "qíguài",
    "sinoVietnamese": "kỳ quái",
    "meaning": "lạ lùng; ngạc nhiên",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/奇怪.mp3",
    "exampleSentence": {
      "chinese": "这件事情很奇怪。",
      "pinyin": "Zhè jiàn shìqíng hěn qíguài.",
      "vietnamese": "Việc này rất lạ thường."
    }
  },
  {
    "id": "boya2-1-10",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "查",
    "pinyin": "chá",
    "sinoVietnamese": "tra",
    "meaning": "kiểm tra",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/查.mp3",
    "exampleSentence": {
      "chinese": "请查一下字典",
      "pinyin": "Qǐng chá yī xià zì diǎn",
      "vietnamese": "Vui lòng tra từ điển"
    }
  },
  {
    "id": "boya2-1-11",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "晚点",
    "pinyin": "wǎndiǎn",
    "sinoVietnamese": "vãn điểm",
    "meaning": "muộn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晚点.mp3",
    "exampleSentence": {
      "chinese": "火车晚点了",
      "pinyin": "huǒchē wǎndiǎn le",
      "vietnamese": "Tàu hỏa bị trễ rồi"
    }
  },
  {
    "id": "boya2-1-12",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "日记",
    "pinyin": "rìjì",
    "sinoVietnamese": "nhật ký",
    "meaning": "nhật ký",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/日记.mp3",
    "exampleSentence": {
      "chinese": "我每天睡觉前都写日记。",
      "pinyin": "Wǒ měitiān shuìjiào qián dōu xiě rìjì.",
      "vietnamese": "Tôi đều viết nhật ký trước khi đi ngủ mỗi ngày."
    }
  },
  {
    "id": "boya2-1-13",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "晴",
    "pinyin": "qíng",
    "sinoVietnamese": "tình",
    "meaning": "nắng, trong",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晴.mp3",
    "exampleSentence": {
      "chinese": "今天很晴",
      "pinyin": "Jīn tiān hěn qíng",
      "vietnamese": "Hôm nay trời tạnh nắng"
    }
  },
  {
    "id": "boya2-1-14",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "转",
    "pinyin": "zhuǎn",
    "sinoVietnamese": "chuyển",
    "meaning": "xoay quanh",
    "partOfSpeech": "Động từ (movement verb)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/转.mp3",
    "exampleSentence": {
      "chinese": "请向后转。",
      "pinyin": "Qǐng xiàng hòu zhuǎn.",
      "vietnamese": "Xin hãy quay về phía sau."
    }
  },
  {
    "id": "boya2-1-15",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "阴",
    "pinyin": "yīn",
    "sinoVietnamese": "âm",
    "meaning": "u ám",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/阴.mp3",
    "exampleSentence": {
      "chinese": "今天天阴",
      "pinyin": "Jīn tiān tiān yīn",
      "vietnamese": "Hôm nay trời âm u"
    }
  },
  {
    "id": "boya2-1-16",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "父亲",
    "pinyin": "fùqīn",
    "sinoVietnamese": "phụ thân",
    "meaning": "cha",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/父亲.mp3",
    "exampleSentence": {
      "chinese": "我的父亲是一名老师。",
      "pinyin": "Wǒ de fùqīn shì yīmíng lǎoshī.",
      "vietnamese": "Bố của tôi là một giáo viên."
    }
  },
  {
    "id": "boya2-1-17",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "母亲",
    "pinyin": "mǔqīn",
    "sinoVietnamese": "mẫu thân",
    "meaning": "mẹ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/母亲.mp3",
    "exampleSentence": {
      "chinese": "我母亲是一位老师。",
      "pinyin": "Wǒ mǔqīn shì yīwèi lǎoshī.",
      "vietnamese": "Mẹ tôi là một giáo viên."
    }
  },
  {
    "id": "boya2-1-18",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "机会",
    "pinyin": "jīhuì",
    "sinoVietnamese": "cơ hội",
    "meaning": "cơ hội, dịp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/机会.mp3",
    "exampleSentence": {
      "chinese": "这是一个很好的机会",
      "pinyin": "Zhè shì yī gè hěn hǎo de jī huì",
      "vietnamese": "Đây là một cơ hội rất tốt"
    }
  },
  {
    "id": "boya2-1-19",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "机场",
    "pinyin": "jīchǎng",
    "sinoVietnamese": "cơ trường",
    "meaning": "sân bay",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/机场.mp3",
    "exampleSentence": {
      "chinese": "我们去机场送朋友。",
      "pinyin": "Wǒmen qù jīchǎng sòng péngyǒu.",
      "vietnamese": "Chúng tôi ra sân bay tiễn bạn."
    }
  },
  {
    "id": "boya2-1-20",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "起飞",
    "pinyin": "qǐfēi",
    "sinoVietnamese": "khởi phi",
    "meaning": "cất cánh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/起飞.mp3",
    "exampleSentence": {
      "chinese": "飞机即将起飞。",
      "pinyin": "Fēi jī jí jiāng qǐ fēi.",
      "vietnamese": "Máy bay sắp cất cánh."
    }
  },
  {
    "id": "boya2-1-21",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "遇到",
    "pinyin": "yùdào",
    "sinoVietnamese": "ngộ đáo",
    "meaning": "gặp phải",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/遇到.mp3",
    "exampleSentence": {
      "chinese": "这个遇到很好。",
      "pinyin": "Zhè gè yù dào hěn hǎo.",
      "vietnamese": "gặp phải này rất tốt."
    }
  },
  {
    "id": "boya2-1-22",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "泰国",
    "pinyin": "Tàiguó",
    "sinoVietnamese": "thái quốc",
    "meaning": "nước Thái Lan",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/泰国.mp3",
    "exampleSentence": {
      "chinese": "明年暑假我想去泰国旅游。",
      "pinyin": "Míngnián shǔjià wǒ xiǎng qù Tàiguó lǚyóu.",
      "vietnamese": "Kỳ nghỉ hè năm sau tôi muốn đi du lịch Thái Lan."
    }
  },
  {
    "id": "boya2-1-23",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "正点",
    "pinyin": "zhèngdiǎn",
    "sinoVietnamese": "chính điểm",
    "meaning": "đúng giờ, đúng kế hoạch",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/正点.mp3",
    "exampleSentence": {
      "chinese": "这趟列车总是正点到达。",
      "pinyin": "Zhè tàng lièchē zǒngshì zhèngdiǎn dàodá.",
      "vietnamese": "Chuyến tàu này luôn đến đúng giờ."
    }
  },
  {
    "id": "boya2-1-24",
    "lesson": 1,
    "lessonTitle": "Bài 1: 飞机晚点了 (Máy bay bị trễ giờ)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "进门",
    "pinyin": "jìnmén",
    "sinoVietnamese": "tiến môn",
    "meaning": "vào cửa, bước vào nhà",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/进门.mp3",
    "exampleSentence": {
      "chinese": "一进门，就闻到饭菜的香味。",
      "pinyin": "Yī jìnmén, jiù wén dào fàncài de xiāngwèi.",
      "vietnamese": "Vừa bước vào nhà đã ngửi thấy mùi thơm của thức ăn."
    }
  },
  {
    "id": "boya2-2-1",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "对",
    "pinyin": "duì",
    "sinoVietnamese": "đối",
    "meaning": "đối với",
    "partOfSpeech": "Giới từ / Tính từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对.mp3",
    "exampleSentence": {
      "chinese": "你说得对",
      "pinyin": "Nǐ shuō de duì",
      "vietnamese": "Bạn nói đúng"
    }
  },
  {
    "id": "boya2-2-2",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "房子",
    "pinyin": "fángzi",
    "sinoVietnamese": "phòng tử",
    "meaning": "nhà, căn hộ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/房子.mp3",
    "exampleSentence": {
      "chinese": "这是我的房子。",
      "pinyin": "Zhè shì wǒ de fángzi.",
      "vietnamese": "Đây là nhà tôi."
    }
  },
  {
    "id": "boya2-2-3",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "搬",
    "pinyin": "bān",
    "sinoVietnamese": "ban",
    "meaning": "chuyển, di chuyển",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/搬.mp3",
    "exampleSentence": {
      "chinese": "我们下个月搬家。",
      "pinyin": "Wǒmen xià gè yuè bānjiā.",
      "vietnamese": "Tháng sau chúng tôi chuyển nhà."
    }
  },
  {
    "id": "boya2-2-4",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "外面",
    "pinyin": "wàimiàn",
    "sinoVietnamese": "ngoại diện, miến",
    "meaning": "bên ngoài",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/外面.mp3",
    "exampleSentence": {
      "chinese": "外面下雨了。",
      "pinyin": "Wàimian xiàyǔ le.",
      "vietnamese": "Ở bên ngoài trời đang mưa."
    }
  },
  {
    "id": "boya2-2-5",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "方便",
    "pinyin": "fāngbiàn",
    "sinoVietnamese": "phương tiện",
    "meaning": "thuận tiện",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/方便.mp3",
    "exampleSentence": {
      "chinese": "很方便",
      "pinyin": "Hěn fāng biàn",
      "vietnamese": "Rất thuận tiện"
    }
  },
  {
    "id": "boya2-2-6",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "离",
    "pinyin": "lí",
    "sinoVietnamese": "li",
    "meaning": "từ",
    "partOfSpeech": "Giới từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/离.mp3",
    "exampleSentence": {
      "chinese": "我家离学校很远",
      "pinyin": "Wǒ jiā lí xué xiào hěn yuǎn",
      "vietnamese": "Nhà tôi cách trường rất xa"
    }
  },
  {
    "id": "boya2-2-7",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "近",
    "pinyin": "jìn",
    "sinoVietnamese": "cận",
    "meaning": "gần",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/近.mp3",
    "exampleSentence": {
      "chinese": "我家很近",
      "pinyin": "Wǒ jiā hěn jìn",
      "vietnamese": "Nhà tôi rất gần"
    }
  },
  {
    "id": "boya2-2-8",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "房租",
    "pinyin": "fángzū",
    "sinoVietnamese": "phòng tô",
    "meaning": "tiền thuê nhà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/房租.mp3",
    "exampleSentence": {
      "chinese": "每个月五号以前必须交房租。",
      "pinyin": "Měi ge yuè wǔ hào yǐqián bìxū jiāo fángzū.",
      "vietnamese": "Trước ngày mùng 5 hàng tháng phải nộp tiền thuê nhà."
    }
  },
  {
    "id": "boya2-2-9",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "比",
    "pinyin": "bǐ",
    "sinoVietnamese": "tỉ",
    "meaning": "so sánh; hơn",
    "partOfSpeech": "Giới từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比.mp3",
    "exampleSentence": {
      "chinese": "你比我高",
      "pinyin": "Nǐ bǐ wǒ gāo",
      "vietnamese": "Bạn cao hơn tôi"
    }
  },
  {
    "id": "boya2-2-10",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "厨房",
    "pinyin": "chúfáng",
    "sinoVietnamese": "trù phòng",
    "meaning": "nhà bếp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/厨房.mp3",
    "exampleSentence": {
      "chinese": "妈妈在厨房做饭",
      "pinyin": "Māma zài chúfáng zuò fàn",
      "vietnamese": "Mẹ đang nấu ăn trong bếp"
    }
  },
  {
    "id": "boya2-2-11",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "主要",
    "pinyin": "zhǔyào",
    "sinoVietnamese": "chủ yếu",
    "meaning": "chính",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/主要.mp3",
    "exampleSentence": {
      "chinese": "这是主要原因",
      "pinyin": "Zhè shì zhǔ yào yuán yīn",
      "vietnamese": "Đây là nguyên nhân chính"
    }
  },
  {
    "id": "boya2-2-12",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "周围",
    "pinyin": "zhōuwéi",
    "sinoVietnamese": "chu, châu vi",
    "meaning": "xung quanh",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/周围.mp3",
    "exampleSentence": {
      "chinese": "房子周围有很多树。",
      "pinyin": "Fángzi zhōuwéi yǒu hěnduō shù.",
      "vietnamese": "Xung quanh nhà có nhiều cây."
    }
  },
  {
    "id": "boya2-2-13",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "练习",
    "pinyin": "liànxí",
    "sinoVietnamese": "luyện tập",
    "meaning": "luyện tập",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/练习.mp3",
    "exampleSentence": {
      "chinese": "我每天练习汉语",
      "pinyin": "Wǒ měi tiān liàn xí hàn yǔ",
      "vietnamese": "Tôi mỗi ngày luyện tập tiếng Trung"
    }
  },
  {
    "id": "boya2-2-14",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "好处",
    "pinyin": "hǎochù",
    "sinoVietnamese": "hảo xứ",
    "meaning": "lợi ích",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好处.mp3",
    "exampleSentence": {
      "chinese": "运动有很多好处",
      "pinyin": "Yùn dòng yǒu hěn duō hǎo chù",
      "vietnamese": "Vận động có nhiều lợi ích"
    }
  },
  {
    "id": "boya2-2-15",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "注意",
    "pinyin": "zhùyì",
    "sinoVietnamese": "chú ý",
    "meaning": "chú ý",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/注意.mp3",
    "exampleSentence": {
      "chinese": "请注意听老师讲课。",
      "pinyin": "Qǐng zhùyì tīng lǎoshī jiǎngkè.",
      "vietnamese": "Vui lòng chú ý nghe thầy giáo giảng bài."
    }
  },
  {
    "id": "boya2-2-16",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "合适",
    "pinyin": "héshì",
    "sinoVietnamese": "hợp thích",
    "meaning": "phù hợp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/合适.mp3",
    "exampleSentence": {
      "chinese": "这件衣服很合适",
      "pinyin": "Zhè jiàn yī fú hěn hé shì",
      "vietnamese": "Cái quần áo này rất vừa"
    }
  },
  {
    "id": "boya2-2-17",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "中介",
    "pinyin": "zhōngjiè",
    "sinoVietnamese": "trung giới",
    "meaning": "đại lý",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中介.mp3",
    "exampleSentence": {
      "chinese": "我通过中介公司租了一套房子。",
      "pinyin": "wǒ tōng guò zhōng jiè gōng sī zū le yí tào fáng zi.",
      "vietnamese": "Tôi đã thuê một căn nhà thông qua công ty môi giới."
    }
  },
  {
    "id": "boya2-2-18",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "公司",
    "pinyin": "gōngsī",
    "sinoVietnamese": "công ti, tư",
    "meaning": "công ty",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/公司.mp3",
    "exampleSentence": {
      "chinese": "我在一家公司工作",
      "pinyin": "Wǒ zài yī jiā gōng sī gōng zuò",
      "vietnamese": "Tôi làm việc ở một công ty"
    }
  },
  {
    "id": "boya2-2-19",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "发现",
    "pinyin": "fāxiàn",
    "sinoVietnamese": "phát hiện",
    "meaning": "phát hiện",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发现.mp3",
    "exampleSentence": {
      "chinese": "我发现了一个错误",
      "pinyin": "Wǒ fā xiàn le yī gè cuò wù",
      "vietnamese": "Tôi đã phát hiện một lỗi"
    }
  },
  {
    "id": "boya2-2-20",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "进步",
    "pinyin": "jìnbù",
    "sinoVietnamese": "tiến bộ",
    "meaning": "tiến bộ",
    "partOfSpeech": "Động từ / Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/进步.mp3",
    "exampleSentence": {
      "chinese": "他的汉语进步很快。",
      "pinyin": "Tā de Hànyǔ jìnbù hěn kuài.",
      "vietnamese": "Tiếng Trung của anh ấy tiến bộ rất nhanh."
    }
  },
  {
    "id": "boya2-2-21",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "以前",
    "pinyin": "yǐqián",
    "sinoVietnamese": "dĩ tiền",
    "meaning": "trước đây",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/以前.mp3",
    "exampleSentence": {
      "chinese": "以前我住在这里",
      "pinyin": "Yǐ qián wǒ zhù zài zhè lǐ",
      "vietnamese": "Trước đây tôi sống ở đây"
    }
  },
  {
    "id": "boya2-2-22",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "水平",
    "pinyin": "shuǐpíng",
    "sinoVietnamese": "thủy bình",
    "meaning": "mức độ, tiêu chuẩn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/水平.mp3",
    "exampleSentence": {
      "chinese": "英语水平很高",
      "pinyin": "Yīng yǔ shuǐ píng hěn gāo",
      "vietnamese": "Trình độ tiếng Anh rất cao"
    }
  },
  {
    "id": "boya2-2-23",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "高",
    "pinyin": "gāo",
    "sinoVietnamese": "cao",
    "meaning": "cao",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/高.mp3",
    "exampleSentence": {
      "chinese": "很高",
      "pinyin": "hěn gāo",
      "vietnamese": "Rất cao"
    }
  },
  {
    "id": "boya2-2-24",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "流利",
    "pinyin": "liúlì",
    "sinoVietnamese": "lưu lợi",
    "meaning": "lưu loát",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/流利.mp3",
    "exampleSentence": {
      "chinese": "他说得很流利",
      "pinyin": "Tā shuō dé hěn liú lì",
      "vietnamese": "Anh ấy nói rất lưu loát"
    }
  },
  {
    "id": "boya2-2-25",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "原来",
    "pinyin": "yuánlái",
    "sinoVietnamese": "nguyên lai",
    "meaning": "ban đầu; trước đây",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/原来.mp3",
    "exampleSentence": {
      "chinese": "原来是他",
      "pinyin": "Yuán lái shì tā",
      "vietnamese": "Thì ra là anh ấy"
    }
  },
  {
    "id": "boya2-2-26",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "套",
    "pinyin": "tào",
    "sinoVietnamese": "sáo",
    "meaning": "bộ",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/套.mp3",
    "exampleSentence": {
      "chinese": "一套家具",
      "pinyin": "Yī tào jiā jù",
      "vietnamese": "Một bộ đồ gia dụng"
    }
  },
  {
    "id": "boya2-2-27",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "公寓",
    "pinyin": "gōngyù",
    "sinoVietnamese": "công ngụ",
    "meaning": "căn hộ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/公寓.mp3",
    "exampleSentence": {
      "chinese": "这是公寓",
      "pinyin": "Zhè shì 公寓",
      "vietnamese": "Đây là căn hộ"
    }
  },
  {
    "id": "boya2-2-28",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "远",
    "pinyin": "yuǎn",
    "sinoVietnamese": "viễn",
    "meaning": "xa",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/远.mp3",
    "exampleSentence": {
      "chinese": "我家很远",
      "pinyin": "Wǒ jiā hěn yuǎn",
      "vietnamese": "Nhà tôi rất xa"
    }
  },
  {
    "id": "boya2-2-29",
    "lesson": 2,
    "lessonTitle": "Bài 2: 我想搬到外面去 (Tôi muốn dọn ra ngoài ở)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "搬家",
    "pinyin": "bānjiā",
    "sinoVietnamese": "ban gia",
    "meaning": "chuyển nhà",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/搬家.mp3",
    "exampleSentence": {
      "chinese": "我们这个月搬家。",
      "pinyin": "Wǒmen zhège yuè bānjiā.",
      "vietnamese": "Tháng này chúng tôi chuyển nhà."
    }
  },
  {
    "id": "boya2-3-1",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "包",
    "pinyin": "bāo",
    "sinoVietnamese": "bao",
    "meaning": "gói",
    "partOfSpeech": "Động từ / Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/包.mp3",
    "exampleSentence": {
      "chinese": "给我一个包",
      "pinyin": "Gěi wǒ yī gè bāo",
      "vietnamese": "Cho tôi một cái bao"
    }
  },
  {
    "id": "boya2-3-2",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "先生",
    "pinyin": "xiānsheng",
    "sinoVietnamese": "tiên sinh, sanh",
    "meaning": "ông, ngài, chồng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/先生.mp3",
    "exampleSentence": {
      "chinese": "这位先生贵姓",
      "pinyin": "Zhè wèi xiānsheng guì xìng",
      "vietnamese": "Ông này tên gì"
    }
  },
  {
    "id": "boya2-3-3",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "不久",
    "pinyin": "bùjiǔ",
    "sinoVietnamese": "bất cửu",
    "meaning": "sắp tới",
    "partOfSpeech": "Danh từ / Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不久.mp3",
    "exampleSentence": {
      "chinese": "不久就要下雨",
      "pinyin": "Bù jiǔ jiù yào xià yǔ",
      "vietnamese": "Sắp tới sẽ có mưa"
    }
  },
  {
    "id": "boya2-3-4",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "长",
    "pinyin": "zhǎng",
    "sinoVietnamese": "trưởng",
    "meaning": "phát triển",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/长.mp3",
    "exampleSentence": {
      "chinese": "他的头发很长",
      "pinyin": "Tā de tóu fā hěn zhǎng",
      "vietnamese": "Tóc anh ấy rất dài"
    }
  },
  {
    "id": "boya2-3-5",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "样子",
    "pinyin": "yàngzi",
    "sinoVietnamese": "dạng tử",
    "meaning": "hình dạng, loại, mẫu mã",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/样子.mp3",
    "exampleSentence": {
      "chinese": "他的样子很奇怪。",
      "pinyin": "Tā de yàng zi hěn qí guài.",
      "vietnamese": "Dáng vẻ của anh ấy rất lạ."
    }
  },
  {
    "id": "boya2-3-6",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "sinoVietnamese": "đầu phát",
    "meaning": "tóc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/头发.mp3",
    "exampleSentence": {
      "chinese": "她的头发很长",
      "pinyin": "Tā de tóu fā hěn zhǎng",
      "vietnamese": "Tóc cô ấy rất dài"
    }
  },
  {
    "id": "boya2-3-7",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "眼睛",
    "pinyin": "yǎnjing",
    "sinoVietnamese": "nhãn tình",
    "meaning": "mắt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/眼睛.mp3",
    "exampleSentence": {
      "chinese": "我眼睛很大",
      "pinyin": "Wǒ yǎn jīng hěn dà",
      "vietnamese": "Mắt tôi to"
    }
  },
  {
    "id": "boya2-3-8",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "个子",
    "pinyin": "gèzi",
    "sinoVietnamese": "cá tử",
    "meaning": "chiều cao",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/个子.mp3",
    "exampleSentence": {
      "chinese": "他个子很高",
      "pinyin": "Tā gè zi hěn gāo",
      "vietnamese": "Anh ấy cao lớn"
    }
  },
  {
    "id": "boya2-3-9",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "米",
    "pinyin": "mǐ",
    "sinoVietnamese": "mễ",
    "meaning": "mét",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/米.mp3",
    "exampleSentence": {
      "chinese": "三米长",
      "pinyin": "Sān mǐ zhǎng",
      "vietnamese": "Dài ba mét"
    }
  },
  {
    "id": "boya2-3-10",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "穿",
    "pinyin": "chuān",
    "sinoVietnamese": "xuyên",
    "meaning": "mặc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/穿.mp3",
    "exampleSentence": {
      "chinese": "穿衣服",
      "pinyin": "chuān yīfu",
      "vietnamese": "mặc quần áo"
    }
  },
  {
    "id": "boya2-3-11",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "着",
    "pinyin": "zhe",
    "sinoVietnamese": "trước",
    "meaning": "động từ tiếp diễn",
    "partOfSpeech": "Trợ từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/着.mp3",
    "exampleSentence": {
      "chinese": "他看着书",
      "pinyin": "Tā kànzhe shū",
      "vietnamese": "Anh ấy đang đọc sách"
    }
  },
  {
    "id": "boya2-3-12",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "衬衫",
    "pinyin": "chènshān",
    "sinoVietnamese": "sấn sam",
    "meaning": "áo sơ mi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/衬衫.mp3",
    "exampleSentence": {
      "chinese": "他今天穿着一件白衬衫。",
      "pinyin": "Tā jīntiān chuān zhe yí jiàn bái chènshān.",
      "vietnamese": "Hôm nay anh ấy mặc một chiếc áo sơ mi trắng."
    }
  },
  {
    "id": "boya2-3-13",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "牛仔裤",
    "pinyin": "niúzǎikù",
    "sinoVietnamese": "ngưu tể khố",
    "meaning": "quần jean",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牛仔裤.mp3",
    "exampleSentence": {
      "chinese": "他平时最喜欢穿牛仔裤和运动鞋。",
      "pinyin": "tā píng shí zuì xǐ huan chuān niú zǎi kù hé yùn dòng xié.",
      "vietnamese": "Ngày thường anh ấy thích mặc quần jean và giày thể thao nhất."
    }
  },
  {
    "id": "boya2-3-14",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "背",
    "pinyin": "bēi",
    "sinoVietnamese": "bối, bội",
    "meaning": "mang trên lưng; lưng",
    "partOfSpeech": "Động từ / Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/背.mp3",
    "exampleSentence": {
      "chinese": "他背着书包",
      "pinyin": "Tā bèi zhe shū bāo",
      "vietnamese": "Anh ấy mang ba lô trên lưng"
    }
  },
  {
    "id": "boya2-3-15",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "左右",
    "pinyin": "zuǒyòu",
    "sinoVietnamese": "tả hữu",
    "meaning": "khoảng",
    "partOfSpeech": "Danh từ / Phó từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/左右.mp3",
    "exampleSentence": {
      "chinese": "我的左右手都受伤了。",
      "pinyin": "Wǒde zuǒyòu shǒu dōu shòushāng le.",
      "vietnamese": "Cả tay trái và tay phải của tôi đều bị thương."
    }
  },
  {
    "id": "boya2-3-16",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "寻",
    "pinyin": "xún",
    "sinoVietnamese": "tầm",
    "meaning": "tìm kiếm",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/寻.mp3",
    "exampleSentence": {
      "chinese": "警察正在寻找走失的孩子。",
      "pinyin": "Jǐngchá zhèngzài xúnzhǎo zǒushī de háizi.",
      "vietnamese": "Cảnh sát đang tìm kiếm đứa trẻ bị lạc."
    }
  },
  {
    "id": "boya2-3-17",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "启事",
    "pinyin": "qǐshì",
    "sinoVietnamese": "khải sự",
    "meaning": "thông báo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/启事.mp3",
    "exampleSentence": {
      "chinese": "学校布告栏上贴了一张寻物启事。",
      "pinyin": "Xuéxiào bùgàolán shang tiē le yì zhāng xúnwù qǐshì.",
      "vietnamese": "Trên bảng thông báo của trường dán một tờ thông báo tìm đồ thất lạc."
    }
  },
  {
    "id": "boya2-3-18",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "南",
    "pinyin": "nán",
    "sinoVietnamese": "nam",
    "meaning": "nam",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/南.mp3",
    "exampleSentence": {
      "chinese": "南方",
      "pinyin": "Nánfāng",
      "vietnamese": "phương nam, miền nam"
    }
  },
  {
    "id": "boya2-3-19",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "操场",
    "pinyin": "cāochǎng",
    "sinoVietnamese": "thao trường",
    "meaning": "sân thể thao",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/操场.mp3",
    "exampleSentence": {
      "chinese": "学生们在操场上踢足球。",
      "pinyin": "Xuéshēngmen zài cāochǎng shàng tī zúqiú.",
      "vietnamese": "Học sinh đang chơi bóng đá trên sân thể thao."
    }
  },
  {
    "id": "boya2-3-20",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "红色",
    "pinyin": "hóngsè",
    "sinoVietnamese": "hồng sắc",
    "meaning": "màu đỏ",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/红色.mp3",
    "exampleSentence": {
      "chinese": "红色代表幸运",
      "pinyin": "Hóng sè dài biǎo xìng yùn",
      "vietnamese": "Màu đỏ biểu thị sự may mắn"
    }
  },
  {
    "id": "boya2-3-21",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "里面",
    "pinyin": "lǐmiàn",
    "sinoVietnamese": "lí diện, miến",
    "meaning": "bên trong",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/里面.mp3",
    "exampleSentence": {
      "chinese": "房间里面有三个人。",
      "pinyin": "Fángjiān lǐmiàn yǒu sān gè rén.",
      "vietnamese": "Trong phòng có ba người."
    }
  },
  {
    "id": "boya2-3-22",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "支",
    "pinyin": "zhī",
    "sinoVietnamese": "chi",
    "meaning": "chống đỡ, hỗ trợ",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/支.mp3",
    "exampleSentence": {
      "chinese": "请你支持我的工作。",
      "pinyin": "Qǐng nǐ zhīchí wǒ de gōngzuò.",
      "vietnamese": "Xin hãy ủng hộ công việc của tôi."
    }
  },
  {
    "id": "boya2-3-23",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "本子",
    "pinyin": "běnzi",
    "sinoVietnamese": "bản tử",
    "meaning": "vở bài tập",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/本子.mp3",
    "exampleSentence": {
      "chinese": "我买了一个本子。",
      "pinyin": "Wǒ mǎile yí gè běnzi.",
      "vietnamese": "Tôi mua một cuốn vở."
    }
  },
  {
    "id": "boya2-3-24",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "拾",
    "pinyin": "shí",
    "sinoVietnamese": "thập",
    "meaning": "nhặt lên",
    "partOfSpeech": "Động từ / Số từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拾.mp3",
    "exampleSentence": {
      "chinese": "我在地上拾到钱",
      "pinyin": "Wǒ zài dìshàng shí dào qián",
      "vietnamese": "Tôi nhặt được tiền trên đất"
    }
  },
  {
    "id": "boya2-3-25",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "或者",
    "pinyin": "huòzhě",
    "sinoVietnamese": "hoặc giả",
    "meaning": "hoặc",
    "partOfSpeech": "Liên từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/或者.mp3",
    "exampleSentence": {
      "chinese": "你可以喝茶或者咖啡",
      "pinyin": "Nǐ kě yǐ hē chá huò zhě kā fēi",
      "vietnamese": "Bạn có thể uống trà hoặc cà phê"
    }
  },
  {
    "id": "boya2-3-26",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "联系",
    "pinyin": "liánxì",
    "sinoVietnamese": "liên hệ",
    "meaning": "liên lạc",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/联系.mp3",
    "exampleSentence": {
      "chinese": "请通过电话跟我联系。",
      "pinyin": "Qǐng tōngguò diànhuà gēn wǒ liánxì.",
      "vietnamese": "Vui lòng liên lạc với tôi qua điện thoại."
    }
  },
  {
    "id": "boya2-3-27",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "感谢",
    "pinyin": "gǎnxiè",
    "sinoVietnamese": "cảm tạ",
    "meaning": "cảm ơn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/感谢.mp3",
    "exampleSentence": {
      "chinese": "感谢你的帮助。",
      "pinyin": "Gǎn xiè nǐ de bāng zhù.",
      "vietnamese": "Cảm ơn sự giúp đỡ của bạn."
    }
  },
  {
    "id": "boya2-3-28",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "走散",
    "pinyin": "zǒusàn",
    "sinoVietnamese": "tẩu tán",
    "meaning": "đi lạc, thất lạc, tản ra",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/走散.mp3",
    "exampleSentence": {
      "chinese": "我们逛街的时候不小心走散了。",
      "pinyin": "Wǒmen guàngjiē de shíhòu bù xiǎoxīn zǒusàn le.",
      "vietnamese": "Chúng tôi không may bị lạc khi đi dạo phố."
    }
  },
  {
    "id": "boya2-3-29",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "物",
    "pinyin": "wù",
    "sinoVietnamese": "vật",
    "meaning": "vật, đồ vật, sự vật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/物.mp3",
    "exampleSentence": {
      "chinese": "博物馆里陈列着许多珍贵的文物。",
      "pinyin": "Bówùguǎn lǐ chénliè zhe xǔduō zhēnguì de wénwù.",
      "vietnamese": "Trong bảo tàng trưng bày nhiều cổ vật quý giá."
    }
  },
  {
    "id": "boya2-3-30",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "笔",
    "pinyin": "bǐ",
    "sinoVietnamese": "bút",
    "meaning": "bút; Lượng từ cho các khoản tiền, các giao dịch.",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/笔.mp3",
    "exampleSentence": {
      "chinese": "请给我一支笔。",
      "pinyin": "Qǐng gěi wǒ yī zhī bǐ.",
      "vietnamese": "Xin hãy đưa cho tôi một cây bút."
    }
  },
  {
    "id": "boya2-3-31",
    "lesson": 3,
    "lessonTitle": "Bài 3: 她穿着一件黄衬衫 (Cô ấy mặc chiếc áo sơ mi vàng)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "德国人",
    "pinyin": "déguórén",
    "sinoVietnamese": "đức quốc nhân",
    "meaning": "người Đức",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/德国人.mp3",
    "exampleSentence": {
      "chinese": "他是一位很友善的德国人。",
      "pinyin": "Tā shì yī wèi hěn yǒushàn de Déguórén.",
      "vietnamese": "Anh ấy là một người Đức rất thân thiện."
    }
  },
  {
    "id": "boya2-4-1",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "开",
    "pinyin": "kāi",
    "sinoVietnamese": "khai",
    "meaning": "mở, bắt đầu",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开.mp3",
    "exampleSentence": {
      "chinese": "请开门",
      "pinyin": "Qǐng kāimén",
      "vietnamese": "Làm ơn mở cửa"
    }
  },
  {
    "id": "boya2-4-2",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "地方",
    "pinyin": "dìfang",
    "sinoVietnamese": "địa phương",
    "meaning": "nơi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地方.mp3",
    "exampleSentence": {
      "chinese": "这是什么地方？",
      "pinyin": "Zhè shì shénme dìfāng?",
      "vietnamese": "Đây là nơi nào?"
    }
  },
  {
    "id": "boya2-4-3",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "短",
    "pinyin": "duǎn",
    "sinoVietnamese": "đoản",
    "meaning": "ngắn",
    "partOfSpeech": "Tính từ / Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/短.mp3",
    "exampleSentence": {
      "chinese": "时间太短了",
      "pinyin": "Shí jiān tài duǎn le",
      "vietnamese": "Thời gian quá ngắn"
    }
  },
  {
    "id": "boya2-4-4",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "一样",
    "pinyin": "yīyàng",
    "sinoVietnamese": "nhất dạng",
    "meaning": "giống nhau",
    "partOfSpeech": "Tính từ / Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一样.mp3",
    "exampleSentence": {
      "chinese": "我们一样",
      "pinyin": "Wǒmen yīyàng",
      "vietnamese": "Chúng tôi giống nhau"
    }
  },
  {
    "id": "boya2-4-5",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "比如说",
    "pinyin": "bǐrúshuō",
    "sinoVietnamese": "tỉ như thuyết",
    "meaning": "ví dụ như",
    "partOfSpeech": "Động từ / Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比如说.mp3",
    "exampleSentence": {
      "chinese": "我喜欢的运动有很多，比如说跑步、游泳",
      "pinyin": "Wǒ xǐ huān de yùn dòng yǒu hěn duō, bǐ rú shuō pǎo bù 、 yóu yǒng",
      "vietnamese": "Môn thể thao tôi thích rất nhiều, ví dụ như chạy bộ, bơi lội"
    }
  },
  {
    "id": "boya2-4-6",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "面积",
    "pinyin": "miànjī",
    "sinoVietnamese": "diện, miến tích",
    "meaning": "diện tích",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面积.mp3",
    "exampleSentence": {
      "chinese": "这个房间面积很大。",
      "pinyin": "Zhège fángjiān miànjī hěn dà.",
      "vietnamese": "Căn phòng này có diện tích rất lớn."
    }
  },
  {
    "id": "boya2-4-7",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "人口",
    "pinyin": "rénkǒu",
    "sinoVietnamese": "nhân khẩu",
    "meaning": "dân số",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人口.mp3",
    "exampleSentence": {
      "chinese": "中国人口很多",
      "pinyin": "Zhōng guó rén kǒu hěn duō",
      "vietnamese": "Dân số Trung Quốc rất nhiều"
    }
  },
  {
    "id": "boya2-4-8",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "发达",
    "pinyin": "fādá",
    "sinoVietnamese": "phát đạt",
    "meaning": "phát triển",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发达.mp3",
    "exampleSentence": {
      "chinese": "这是一个发达国家。",
      "pinyin": "Zhè shì yīgè fādá guójiā.",
      "vietnamese": "Đây là một nước phát triển."
    }
  },
  {
    "id": "boya2-4-9",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "国家",
    "pinyin": "guójiā",
    "sinoVietnamese": "quốc gia",
    "meaning": "quốc gia",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/国家.mp3",
    "exampleSentence": {
      "chinese": "我爱我的国家",
      "pinyin": "Wǒ ài wǒ de guójiā",
      "vietnamese": "Tôi yêu đất nước tôi"
    }
  },
  {
    "id": "boya2-4-10",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "发展",
    "pinyin": "fāzhǎn",
    "sinoVietnamese": "phát triển",
    "meaning": "phát triển",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发展.mp3",
    "exampleSentence": {
      "chinese": "中国经济近年来发展很快。",
      "pinyin": "Zhōngguó jīngjì jìnnián lái fāzhǎn hěn kuài.",
      "vietnamese": "Kinh tế Trung Quốc những năm gần đây phát triển rất nhanh."
    }
  },
  {
    "id": "boya2-4-11",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "上班",
    "pinyin": "shàngbān",
    "sinoVietnamese": "thượng ban",
    "meaning": "đi làm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上班.mp3",
    "exampleSentence": {
      "chinese": "我每天八点上班",
      "pinyin": "Wǒ měitiān bā diǎn shàngbān",
      "vietnamese": "Tôi mỗi ngày tám giờ đi làm"
    }
  },
  {
    "id": "boya2-4-12",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "上学",
    "pinyin": "shàngxué",
    "sinoVietnamese": "thượng học",
    "meaning": "đi học",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上学.mp3",
    "exampleSentence": {
      "chinese": "我每天早上上学。",
      "pinyin": "Wǒ měitiān zǎoshang shàngxué.",
      "vietnamese": "Tôi đi học mỗi buổi sáng."
    }
  },
  {
    "id": "boya2-4-13",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "亿",
    "pinyin": "yì",
    "sinoVietnamese": "ức",
    "meaning": "một trăm triệu",
    "partOfSpeech": "Số từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/亿.mp3",
    "exampleSentence": {
      "chinese": "中国有十四亿人",
      "pinyin": "Zhōng guó yǒu shí sì yì rén",
      "vietnamese": "Trung Quốc có một tỷ bốn trăm triệu người"
    }
  },
  {
    "id": "boya2-4-14",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "到处",
    "pinyin": "dàochù",
    "sinoVietnamese": "đáo xứ",
    "meaning": "khắp nơi",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/到处.mp3",
    "exampleSentence": {
      "chinese": "到处都是花",
      "pinyin": "Dào chù dōu shì huā",
      "vietnamese": "Khắp nơi đều là hoa"
    }
  },
  {
    "id": "boya2-4-15",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "下班",
    "pinyin": "xiàbān",
    "sinoVietnamese": "hạ ban",
    "meaning": "tan làm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下班.mp3",
    "exampleSentence": {
      "chinese": "我六点下班",
      "pinyin": "Wǒ liù diǎn xiàbān",
      "vietnamese": "Tôi sáu giờ tan làm"
    }
  },
  {
    "id": "boya2-4-16",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "汽车",
    "pinyin": "qìchē",
    "sinoVietnamese": "khí xa",
    "meaning": "xe ô tô",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/汽车.mp3",
    "exampleSentence": {
      "chinese": "我买了汽车",
      "pinyin": "Wǒ mǎi le qì chē",
      "vietnamese": "Tôi mua xe ô tô"
    }
  },
  {
    "id": "boya2-4-17",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "像",
    "pinyin": "xiàng",
    "sinoVietnamese": "tượng",
    "meaning": "giống như",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/像.mp3",
    "exampleSentence": {
      "chinese": "他像他父亲",
      "pinyin": "Tā xiàng tā fù qīn",
      "vietnamese": "Anh ấy giống bố anh ấy"
    }
  },
  {
    "id": "boya2-4-18",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "壮观",
    "pinyin": "zhuàngguān",
    "sinoVietnamese": "tráng quan",
    "meaning": "cảnh tượng hùng vĩ",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/壮观.mp3",
    "exampleSentence": {
      "chinese": "长城的景色十分壮观",
      "pinyin": "Chángchéng de jǐngsè shífēn zhuàngguān",
      "vietnamese": "Cảnh quan của Vạn Lý Trường Thành rất hùng vĩ"
    }
  },
  {
    "id": "boya2-4-19",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "种类",
    "pinyin": "zhǒnglèi",
    "sinoVietnamese": "chủng loại",
    "meaning": "loại",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/种类.mp3",
    "exampleSentence": {
      "chinese": "这里有很多种类的书。",
      "pinyin": "Zhèlǐ yǒu hěnduō zhǒnglèi de shū.",
      "vietnamese": "Ở đây có nhiều loại sách."
    }
  },
  {
    "id": "boya2-4-20",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "名胜古迹",
    "pinyin": "míngshèng gǔjì",
    "sinoVietnamese": "danh thắng, thăng cổ tích",
    "meaning": "danh lam thắng cảnh và di tích lịch sử",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/名胜古迹.mp3",
    "exampleSentence": {
      "chinese": "北京有长城和故宫等许多名胜古迹。",
      "pinyin": "běi jīng yǒu cháng chéng hé gù gōng děng xǔ duō míng shèng gǔ jì.",
      "vietnamese": "Bắc Kinh có nhiều danh lam thắng cảnh và di tích lịch sử như Vạn Lý Trường Thành và Cố Cung."
    }
  },
  {
    "id": "boya2-4-21",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "千",
    "pinyin": "qiān",
    "sinoVietnamese": "thiên",
    "meaning": "ngàn",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/千.mp3",
    "exampleSentence": {
      "chinese": "一千人",
      "pinyin": "Yī qiān rén",
      "vietnamese": "Một nghìn người"
    }
  },
  {
    "id": "boya2-4-22",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "民族",
    "pinyin": "mínzú",
    "sinoVietnamese": "dân tộc",
    "meaning": "dân tộc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/民族.mp3",
    "exampleSentence": {
      "chinese": "中国有56个民族。",
      "pinyin": "Zhōngguó yǒu 56 gè mínzú.",
      "vietnamese": "Trung Quốc có 56 dân tộc."
    }
  },
  {
    "id": "boya2-4-23",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "少数",
    "pinyin": "shǎoshù",
    "sinoVietnamese": "thiểu số",
    "meaning": "thiểu số",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/少数.mp3",
    "exampleSentence": {
      "chinese": "只有少数人同意",
      "pinyin": "Zhǐ yǒu shǎo shù rén tóng yì",
      "vietnamese": "Chỉ có thiểu số người đồng ý"
    }
  },
  {
    "id": "boya2-4-24",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "亚洲",
    "pinyin": "Yàzhōu",
    "sinoVietnamese": "á châu",
    "meaning": "châu Á",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/亚洲.mp3",
    "exampleSentence": {
      "chinese": "来自亚洲",
      "pinyin": "Láizì Yàzhōu",
      "vietnamese": "Đến từ châu Á"
    }
  },
  {
    "id": "boya2-4-25",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "据说",
    "pinyin": "jùshuō",
    "sinoVietnamese": "cứ thuyết",
    "meaning": "nghe nói là",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/据说.mp3",
    "exampleSentence": {
      "chinese": "据说这里以前是一个湖泊。",
      "pinyin": "Jùshuō zhèlǐ yǐqián shì yí gè húpō.",
      "vietnamese": "Nghe nói ở đây trước kia là một cái hồ."
    }
  },
  {
    "id": "boya2-4-26",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "遗憾",
    "pinyin": "yíhàn",
    "sinoVietnamese": "di hám",
    "meaning": "hối tiếc",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/遗憾.mp3",
    "exampleSentence": {
      "chinese": "没能参加你的婚礼，我感到非常遗憾。",
      "pinyin": "méi néng cān jiā nǐ de hūn lǐ, wǒ gǎn dào fēi cháng yí hàn.",
      "vietnamese": "Không thể tham dự đám cưới của bạn, tôi cảm thấy vô cùng đáng tiếc."
    }
  },
  {
    "id": "boya2-4-27",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "人们",
    "pinyin": "rénmen",
    "sinoVietnamese": "nhân môn",
    "meaning": "mọi người, người ta",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人们.mp3",
    "exampleSentence": {
      "chinese": "人们都说他是个好医生。",
      "pinyin": "Rénmen dōu shuō tā shì ge hǎo yīshēng.",
      "vietnamese": "Mọi người đều nói anh ấy là một bác sĩ giỏi."
    }
  },
  {
    "id": "boya2-4-28",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "河流",
    "pinyin": "héliú",
    "sinoVietnamese": "hà lưu",
    "meaning": "sông, dòng sông",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/河流.mp3",
    "exampleSentence": {
      "chinese": "这条河流穿过好几个城市。",
      "pinyin": "Zhè tiáo héliú chuānguò hǎo jǐ gè chéngshì.",
      "vietnamese": "Con sông này chảy qua vài thành phố."
    }
  },
  {
    "id": "boya2-4-29",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "菜系",
    "pinyin": "càixì",
    "sinoVietnamese": "thái hệ",
    "meaning": "trường phái ẩm thực, phong cách nấu ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/菜系.mp3",
    "exampleSentence": {
      "chinese": "中国有八大菜系。",
      "pinyin": "Zhōngguó yǒu bādà càixì.",
      "vietnamese": "Trung Quốc có tám trường phái ẩm thực lớn."
    }
  },
  {
    "id": "boya2-4-30",
    "lesson": 4,
    "lessonTitle": "Bài 4: 俄罗斯没有这么多自行车 (Nước Nga không có nhiều xe đạp như thế này)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "平方公里",
    "pinyin": "píngfāng gōnglǐ",
    "sinoVietnamese": "bình phương công lí",
    "meaning": "kilômét vuông (km²)",
    "partOfSpeech": "Danh từ / Đơn vị đo lường",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/平方公里.mp3",
    "exampleSentence": {
      "chinese": "这个城市的面积有两千平方公里。",
      "pinyin": "Zhège chéngshì de miànjī yǒu liǎngqiān píngfāng gōnglǐ.",
      "vietnamese": "Diện tích thành phố này là hai nghìn kilômét vuông."
    }
  },
  {
    "id": "boya2-5-1",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "点",
    "pinyin": "diǎn",
    "sinoVietnamese": "điểm",
    "meaning": "giờ",
    "partOfSpeech": "Lượng từ / Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点.mp3",
    "exampleSentence": {
      "chinese": "现在三点",
      "pinyin": "Xiànzài sān diǎn",
      "vietnamese": "Bây giờ 3 giờ"
    }
  },
  {
    "id": "boya2-5-2",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "早",
    "pinyin": "zǎo",
    "sinoVietnamese": "tảo",
    "meaning": "sớm",
    "partOfSpeech": "Phó từ / Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/早.mp3",
    "exampleSentence": {
      "chinese": "我每天早上六点起床",
      "pinyin": "Wǒ měitiān zǎoshang liù diǎn qǐchuáng",
      "vietnamese": "Tôi mỗi ngày sáng sáu giờ thức dậy"
    }
  },
  {
    "id": "boya2-5-3",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "家",
    "pinyin": "jiā",
    "sinoVietnamese": "gia",
    "meaning": "gia đình, nhà",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/家.mp3",
    "exampleSentence": {
      "chinese": "我爱我家",
      "pinyin": "Wǒ ài wǒ jiā",
      "vietnamese": "Tôi yêu gia đình tôi"
    }
  },
  {
    "id": "boya2-5-4",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "位",
    "pinyin": "wèi",
    "sinoVietnamese": "vị",
    "meaning": "vị (từ để chỉ người kính trọng)",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/位.mp3",
    "exampleSentence": {
      "chinese": "这五位客人",
      "pinyin": "Zhè wǔ wèi kè rén",
      "vietnamese": "Năm vị khách này"
    }
  },
  {
    "id": "boya2-5-5",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "女士",
    "pinyin": "nǚshì",
    "sinoVietnamese": "nữ sĩ",
    "meaning": "quý bà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/女士.mp3",
    "exampleSentence": {
      "chinese": "这个女士很好。",
      "pinyin": "Zhè gè nǚ shì hěn hǎo.",
      "vietnamese": "quý bà này rất tốt."
    }
  },
  {
    "id": "boya2-5-6",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "饱",
    "pinyin": "bǎo",
    "sinoVietnamese": "bão",
    "meaning": "no",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饱.mp3",
    "exampleSentence": {
      "chinese": "我吃饱了",
      "pinyin": "Wǒ chī bǎo le",
      "vietnamese": "Tôi đã ăn no"
    }
  },
  {
    "id": "boya2-5-7",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "餐厅",
    "pinyin": "cāntīng",
    "sinoVietnamese": "xan sảnh",
    "meaning": "quán ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/餐厅.mp3",
    "exampleSentence": {
      "chinese": "这家餐厅的川菜非常地道。",
      "pinyin": "zhè jiā cān tīng de chuān cài fēi cháng dì dào.",
      "vietnamese": "Món ăn Tứ Xuyên của nhà hàng này rất chuẩn vị."
    }
  },
  {
    "id": "boya2-5-8",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "经常",
    "pinyin": "jīngcháng",
    "sinoVietnamese": "kinh thường",
    "meaning": "thường xuyên",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/经常.mp3",
    "exampleSentence": {
      "chinese": "我经常去图书馆。",
      "pinyin": "Wǒ jīng cháng qù tú shū guǎn.",
      "vietnamese": "Tôi thường xuyên đi thư viện."
    }
  },
  {
    "id": "boya2-5-9",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "饭馆",
    "pinyin": "fànguǎn",
    "sinoVietnamese": "phạn quán",
    "meaning": "nhà hàng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饭馆.mp3",
    "exampleSentence": {
      "chinese": "我们去饭馆吃饭吧",
      "pinyin": "Wǒ men qù fàn guǎn chī fàn ba",
      "vietnamese": "Chúng ta đi nhà hàng ăn cơm đi"
    }
  },
  {
    "id": "boya2-5-10",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "偶尔",
    "pinyin": "ǒuěr",
    "sinoVietnamese": "ngẫu nhĩ",
    "meaning": "thỉnh thoảng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/偶尔.mp3",
    "exampleSentence": {
      "chinese": "我偶尔去电影院看电影",
      "pinyin": "Wǒ ǒu'ěr qù diànyǐngyuàn kàn diànyǐng",
      "vietnamese": "Tôi thỉnh thoảng đi rạp chiếu phim xem phim"
    }
  },
  {
    "id": "boya2-5-11",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "还是",
    "pinyin": "háishi",
    "sinoVietnamese": "hoàn thị",
    "meaning": "hoặc (trong câu hỏi)",
    "partOfSpeech": "Liên từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/还是.mp3",
    "exampleSentence": {
      "chinese": "你喜欢咖啡还是茶？",
      "pinyin": "Nǐ xǐhuan kāfēi háishì chá?",
      "vietnamese": "Bạn thích cà phê hay trà?"
    }
  },
  {
    "id": "boya2-5-12",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "第",
    "pinyin": "dì",
    "sinoVietnamese": "đệ",
    "meaning": "thứ",
    "partOfSpeech": "Trợ từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/第.mp3",
    "exampleSentence": {
      "chinese": "第一",
      "pinyin": "Dì yī",
      "vietnamese": "Thứ nhất, đầu tiên"
    }
  },
  {
    "id": "boya2-5-13",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "煮",
    "pinyin": "zhǔ",
    "sinoVietnamese": "chử",
    "meaning": "đun sôi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/煮.mp3",
    "exampleSentence": {
      "chinese": "我今天晚上煮了牛肉面。",
      "pinyin": "wǒ jīn tiān wǎn shang zhǔ le niú ròu miàn.",
      "vietnamese": "Tối nay tôi đã nấu mì thịt bò."
    }
  },
  {
    "id": "boya2-5-14",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "方便面",
    "pinyin": "fāngbiànmiàn",
    "sinoVietnamese": "phương tiện diện, miến",
    "meaning": "mì ăn liền",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/方便面.mp3",
    "exampleSentence": {
      "chinese": "我泡了一碗方便面",
      "pinyin": "Wǒ pào le yī wǎn fāng biàn miàn",
      "vietnamese": "Tôi pha một bát mì ăn liền"
    }
  },
  {
    "id": "boya2-5-15",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "肚子",
    "pinyin": "dùzi",
    "sinoVietnamese": "đỗ tử",
    "meaning": "bụng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/肚子.mp3",
    "exampleSentence": {
      "chinese": "我肚子饿了。",
      "pinyin": "Wǔzi è le.",
      "vietnamese": "Tôi đang đói bụng."
    }
  },
  {
    "id": "boya2-5-16",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "告诉",
    "pinyin": "gàosu",
    "sinoVietnamese": "cáo tố",
    "meaning": "báo, nói",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/告诉.mp3",
    "exampleSentence": {
      "chinese": "我告诉你一个秘密",
      "pinyin": "Wǒ gàosu nǐ yī gè mìmì",
      "vietnamese": "Tôi báo cho bạn một bí mật"
    }
  },
  {
    "id": "boya2-5-17",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "火锅",
    "pinyin": "huǒguō",
    "sinoVietnamese": "hỏa oa",
    "meaning": "lẩu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/火锅.mp3",
    "exampleSentence": {
      "chinese": "朋友们一起去吃火锅",
      "pinyin": "Péngyǒumen yīqǐ qù chī huǒguō",
      "vietnamese": "Nhóm bạn cùng nhau đi ăn lẩu"
    }
  },
  {
    "id": "boya2-5-18",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "最近",
    "pinyin": "zuìjìn",
    "sinoVietnamese": "tối cận",
    "meaning": "gần đây",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/最近.mp3",
    "exampleSentence": {
      "chinese": "你最近怎么样？",
      "pinyin": "Nǐ zuì jìn zěn me yàng ？",
      "vietnamese": "Dạo này bạn thế nào?"
    }
  },
  {
    "id": "boya2-5-19",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "开张",
    "pinyin": "kāizhāng",
    "sinoVietnamese": "khai trương",
    "meaning": "mở cửa kinh doanh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开张.mp3",
    "exampleSentence": {
      "chinese": "这家店明天开张",
      "pinyin": "Zhè jiā diàn míngtiān kāizhāng",
      "vietnamese": "Cửa hàng này ngày mai khai trương"
    }
  },
  {
    "id": "boya2-5-20",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "酒水",
    "pinyin": "jiǔshuǐ",
    "sinoVietnamese": "tửu thủy",
    "meaning": "đồ uống có cồn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/酒水.mp3",
    "exampleSentence": {
      "chinese": "婚宴上的酒水费用很贵",
      "pinyin": "Hūnyàn shàng de jiǔshuǐ fèiyòng hěn guì",
      "vietnamese": "Chi phí đồ uống trong tiệc cưới rất đắt"
    }
  },
  {
    "id": "boya2-5-21",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "免费",
    "pinyin": "miǎnfèi",
    "sinoVietnamese": "miễn phí",
    "meaning": "miễn phí",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/免费.mp3",
    "exampleSentence": {
      "chinese": "这个展览免费",
      "pinyin": "zhège zhǎnlǎn miǎnfèi",
      "vietnamese": "Triển lãm này miễn phí"
    }
  },
  {
    "id": "boya2-5-22",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "跟",
    "pinyin": "gēn",
    "sinoVietnamese": "cân",
    "meaning": "với; theo",
    "partOfSpeech": "Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/跟.mp3",
    "exampleSentence": {
      "chinese": "我跟你一起去。",
      "pinyin": "Wǒ gēn nǐ yìqǐ qù.",
      "vietnamese": "Tôi đi cùng với bạn."
    }
  },
  {
    "id": "boya2-5-23",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "环境",
    "pinyin": "huánjìng",
    "sinoVietnamese": "hoàn cảnh",
    "meaning": "môi trường",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/环境.mp3",
    "exampleSentence": {
      "chinese": "保护环境是每个人的责任。",
      "pinyin": "Bǎohù huánjìng shì měi gèrén de zérèn.",
      "vietnamese": "Bảo vệ môi trường là trách nhiệm của mỗi người."
    }
  },
  {
    "id": "boya2-5-24",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "服务员",
    "pinyin": "fúwùyuán",
    "sinoVietnamese": "phục vụ viên, vân",
    "meaning": "nhân viên phục vụ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/服务员.mp3",
    "exampleSentence": {
      "chinese": "服务员来了",
      "pinyin": "Fúwùyuán lái le",
      "vietnamese": "Nhân viên phục vụ đến rồi"
    }
  },
  {
    "id": "boya2-5-25",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "态度",
    "pinyin": "tàidu",
    "sinoVietnamese": "thái độ",
    "meaning": "thái độ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/态度.mp3",
    "exampleSentence": {
      "chinese": "他的态度很好",
      "pinyin": "Tā de tài dù hěn hǎo",
      "vietnamese": "Thái độ của anh ấy rất tốt"
    }
  },
  {
    "id": "boya2-5-26",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "价钱",
    "pinyin": "jiàqian",
    "sinoVietnamese": "giá tiền",
    "meaning": "giá",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/价钱.mp3",
    "exampleSentence": {
      "chinese": "这件衣服的价钱很便宜。",
      "pinyin": "Zhè jiàn yī fú de jià qián hěn biàn yí.",
      "vietnamese": "Cái áo này giá rất rẻ."
    }
  },
  {
    "id": "boya2-5-27",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "算",
    "pinyin": "suàn",
    "sinoVietnamese": "toán",
    "meaning": "đếm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/算.mp3",
    "exampleSentence": {
      "chinese": "让我算一下这次旅行要花多少钱。",
      "pinyin": "ràng wǒ suàn yī xià zhè cì lǚ xíng yào huā duō shǎo qián.",
      "vietnamese": "Để tôi tính một chút xem chuyến du lịch lần này tốn bao nhiêu tiền."
    }
  },
  {
    "id": "boya2-5-28",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "公道",
    "pinyin": "gōngdao",
    "sinoVietnamese": "công đạo",
    "meaning": "công bằng",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/公道.mp3",
    "exampleSentence": {
      "chinese": "这家商店收费公道，顾客很多。",
      "pinyin": "zhè jiā shāng diàn shōu fèi gōng dao, gù kè hěn duō.",
      "vietnamese": "Cửa hàng này thu phí công bằng, khách hàng rất đông."
    }
  },
  {
    "id": "boya2-5-29",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "辣",
    "pinyin": "là",
    "sinoVietnamese": "lạt",
    "meaning": "cay",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辣.mp3",
    "exampleSentence": {
      "chinese": "四川菜非常辣，但是很好吃。",
      "pinyin": "Sìchuān cài fēicháng là, dànshì hěn hǎochī.",
      "vietnamese": "Món ăn Tứ Xuyên rất cay, nhưng rất ngon."
    }
  },
  {
    "id": "boya2-5-30",
    "lesson": 5,
    "lessonTitle": "Bài 5: 这家餐厅的菜不错 (Món ăn của nhà hàng này khá ngon)",
    "unit": 1,
    "unitTitle": "Đơn vị 1: Cuộc sống & Sinh hoạt thường nhật",
    "hanzi": "一些",
    "pinyin": "yìxiē",
    "sinoVietnamese": "nhất ta",
    "meaning": "một vài",
    "partOfSpeech": "Số từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一些.mp3",
    "exampleSentence": {
      "chinese": "我有一些中国朋友。",
      "pinyin": "Wǒ yǒu yìxiē Zhōngguó péngyou.",
      "vietnamese": "Tôi có một số bạn Trung Quốc."
    }
  },
  {
    "id": "boya2-6-1",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "sinoVietnamese": "học hiệu",
    "meaning": "trường học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学校.mp3",
    "exampleSentence": {
      "chinese": "他是学校的老师。",
      "pinyin": "Tā shì xuéxiào de lǎoshī.",
      "vietnamese": "Anh ấy là giáo viên của trường."
    }
  },
  {
    "id": "boya2-6-2",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "围",
    "pinyin": "wéi",
    "sinoVietnamese": "vi",
    "meaning": "bao quanh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/围.mp3",
    "exampleSentence": {
      "chinese": "很多人围着歌手拍照。",
      "pinyin": "Hěn duō rén wéi zhe gē shǒu pāi zhào.",
      "vietnamese": "Rất nhiều người vây quanh ca sĩ chụp ảnh."
    }
  },
  {
    "id": "boya2-6-3",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "发生",
    "pinyin": "fāshēng",
    "sinoVietnamese": "phát sinh, sanh",
    "meaning": "xảy ra",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发生.mp3",
    "exampleSentence": {
      "chinese": "昨天发生了一件奇怪的事情。",
      "pinyin": "Zuó tiān fā shēng le yī jiàn qí guài de shì qíng.",
      "vietnamese": "Hôm qua đã xảy ra một việc lạ."
    }
  },
  {
    "id": "boya2-6-4",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "过去",
    "pinyin": "guòqù",
    "sinoVietnamese": "quá khứ",
    "meaning": "trong quá khứ; quá khứ; đi qua",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/过去.mp3",
    "exampleSentence": {
      "chinese": "过去的事情就让它过去吧。",
      "pinyin": "Guò qù de shì qíng jiù ràng tā guò qù ba.",
      "vietnamese": "Việc quá khứ cứ để nó qua đi."
    }
  },
  {
    "id": "boya2-6-5",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "广告",
    "pinyin": "guǎnggào",
    "sinoVietnamese": "quảng cáo",
    "meaning": "quảng cáo",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/广告.mp3",
    "exampleSentence": {
      "chinese": "我在电视上看到了这个广告。",
      "pinyin": "Wǒ zài diànshì shàng kàndào le zhège guǎnggào.",
      "vietnamese": "Tôi đã nhìn thấy quảng cáo này trên TV."
    }
  },
  {
    "id": "boya2-6-6",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "栏",
    "pinyin": "lán",
    "sinoVietnamese": "lan",
    "meaning": "cột",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/栏.mp3",
    "exampleSentence": {
      "chinese": "请看广告栏里的最新招聘信息。",
      "pinyin": "Qǐng kàn guǎnggàolán lǐ de zuìxīn zhāopìn xìnxī.",
      "vietnamese": "Xin hãy xem thông tin tuyển dụng mới nhất trong cột quảng cáo."
    }
  },
  {
    "id": "boya2-6-7",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "贴",
    "pinyin": "tiē",
    "sinoVietnamese": "thiếp",
    "meaning": "dán",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/贴.mp3",
    "exampleSentence": {
      "chinese": "墙上贴着一张世界地图。",
      "pinyin": "Qiáng shang tiē zhe yì zhāng shìjiè dìtú.",
      "vietnamese": "Trên tường dán một tấm bản đồ thế giới."
    }
  },
  {
    "id": "boya2-6-8",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "通知",
    "pinyin": "tōngzhī",
    "sinoVietnamese": "thông tri",
    "meaning": "thông báo",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/通知.mp3",
    "exampleSentence": {
      "chinese": "老师通知我们明天考试",
      "pinyin": "Lǎo shī tōng zhī wǒ men míng tiān kǎo shì",
      "vietnamese": "Thầy giáo thông báo cho chúng tôi ngày mai kiểm tra"
    }
  },
  {
    "id": "boya2-6-9",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "活动",
    "pinyin": "huódòng",
    "sinoVietnamese": "hoạt động",
    "meaning": "hoạt động; sự kiện",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/活动.mp3",
    "exampleSentence": {
      "chinese": "我们参加很多活动",
      "pinyin": "Wǒ men cān jiā hěn duō huó dòng",
      "vietnamese": "Chúng tôi tham gia nhiều hoạt động"
    }
  },
  {
    "id": "boya2-6-10",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "读",
    "pinyin": "dú",
    "sinoVietnamese": "độc",
    "meaning": "đọc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/读.mp3",
    "exampleSentence": {
      "chinese": "我喜欢读书",
      "pinyin": "Wǒ xǐhuan dúshū",
      "vietnamese": "Tôi thích đọc sách"
    }
  },
  {
    "id": "boya2-6-11",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "交流",
    "pinyin": "jiāoliú",
    "sinoVietnamese": "giao lưu",
    "meaning": "trao đổi; tương tác",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/交流.mp3",
    "exampleSentence": {
      "chinese": "多跟中国朋友交流能提高汉语水平。",
      "pinyin": "Duō gēn Zhōngguó péngyou jiāoliú néng tígāo Hànyǔ shuǐpíng.",
      "vietnamese": "Giao lưu nhiều với bạn Trung Quốc có thể nâng cao trình độ tiếng Hán."
    }
  },
  {
    "id": "boya2-6-12",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "将",
    "pinyin": "jiāng",
    "sinoVietnamese": "tương",
    "meaning": "sẽ",
    "partOfSpeech": "Phó từ / Giới từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/将.mp3",
    "exampleSentence": {
      "chinese": "下周学校将举办一场汉语演讲比赛。",
      "pinyin": "Xià zhōu xuéxiào jiāng jǔbàn yì chǎng Hànyǔ yǎnjiǎng bǐsài.",
      "vietnamese": "Tuần tới nhà trường sẽ tổ chức một cuộc thi hùng biện tiếng Hán."
    }
  },
  {
    "id": "boya2-6-13",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "组织",
    "pinyin": "zǔzhī",
    "sinoVietnamese": "tổ chức",
    "meaning": "tổ chức",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/组织.mp3",
    "exampleSentence": {
      "chinese": "学生会组织了一次郊游活动。",
      "pinyin": "Xuéshēnghuì zǔzhī le yí cì jiāoyóu huódòng.",
      "vietnamese": "Hội học sinh đã tổ chức một hoạt động dã ngoại."
    }
  },
  {
    "id": "boya2-6-14",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "郊区",
    "pinyin": "jiāoqū",
    "sinoVietnamese": "giao khu",
    "meaning": "ngoại ô",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/郊区.mp3",
    "exampleSentence": {
      "chinese": "这里的郊区空气新鲜而且风景优美。",
      "pinyin": "zhè lǐ de jiāo qū kōng qì xīn xiān ér qiě fēng jǐng yōu měi",
      "vietnamese": "Không khí ở vùng ngoại ô này trong lành và phong cảnh rất đẹp."
    }
  },
  {
    "id": "boya2-6-15",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "参观",
    "pinyin": "cānguān",
    "sinoVietnamese": "tham quan",
    "meaning": "tham quan",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/参观.mp3",
    "exampleSentence": {
      "chinese": "我们去参观博物馆",
      "pinyin": "Wǒ men qù cān guān bó wù guǎn",
      "vietnamese": "Chúng tôi đi tham quan bảo tàng"
    }
  },
  {
    "id": "boya2-6-16",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "办公室",
    "pinyin": "bàngōngshì",
    "sinoVietnamese": "biện công thất",
    "meaning": "văn phòng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/办公室.mp3",
    "exampleSentence": {
      "chinese": "我在办公室工作",
      "pinyin": "Wǒ zài bàn gōng shì gōng zuò",
      "vietnamese": "Tôi làm việc ở văn phòng"
    }
  },
  {
    "id": "boya2-6-17",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "办",
    "pinyin": "bàn",
    "sinoVietnamese": "biện",
    "meaning": "làm, quản lý",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/办.mp3",
    "exampleSentence": {
      "chinese": "我来办这件事",
      "pinyin": "Wǒ lái bàn zhè jiàn shì",
      "vietnamese": "Để tôi xử lý việc này"
    }
  },
  {
    "id": "boya2-6-18",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "手续",
    "pinyin": "shǒuxù",
    "sinoVietnamese": "thủ tục",
    "meaning": "thủ tục",
    "partOfSpeech": "Danh từ (noun - procedure)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/手续.mp3",
    "exampleSentence": {
      "chinese": "办签证需要很多手续。",
      "pinyin": "Bàn qiānzhèng xūyào hěn duō shǒuxù.",
      "vietnamese": "Làm visa cần nhiều thủ tục."
    }
  },
  {
    "id": "boya2-6-19",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "马上",
    "pinyin": "mǎshàng",
    "sinoVietnamese": "mã thượng",
    "meaning": "ngay lập tức",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/马上.mp3",
    "exampleSentence": {
      "chinese": "我马上来",
      "pinyin": "Wǒ mǎshàng lái",
      "vietnamese": "Tôi đến ngay"
    }
  },
  {
    "id": "boya2-6-20",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "拿",
    "pinyin": "ná",
    "sinoVietnamese": "nã",
    "meaning": "lấy, giữ, mang",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拿.mp3",
    "exampleSentence": {
      "chinese": "请拿一本书",
      "pinyin": "Qǐng ná yī běn shū",
      "vietnamese": "Làm ơn lấy một cuốn sách"
    }
  },
  {
    "id": "boya2-6-21",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "为了",
    "pinyin": "wèile",
    "sinoVietnamese": "vị liễu",
    "meaning": "để",
    "partOfSpeech": "Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/为了.mp3",
    "exampleSentence": {
      "chinese": "为了学习汉语，我来中国",
      "pinyin": "Wèile xuéxí Hànyǔ, wǒ lái Zhōngguó",
      "vietnamese": "Để học tiếng Trung, tôi đến Trung Quốc"
    }
  },
  {
    "id": "boya2-6-22",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "鼓励",
    "pinyin": "gǔlì",
    "sinoVietnamese": "cổ lệ",
    "meaning": "khuyến khích",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/鼓励.mp3",
    "exampleSentence": {
      "chinese": "老师鼓励我们努力学习。",
      "pinyin": "Lǎoshī gǔlì wǒmen nǔlì xuéxí.",
      "vietnamese": "Thầy cô khuyến khích chúng tôi học chăm chỉ."
    }
  },
  {
    "id": "boya2-6-23",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "积极",
    "pinyin": "jījí",
    "sinoVietnamese": "tích cực",
    "meaning": "tích cực",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/积极.mp3",
    "exampleSentence": {
      "chinese": "我们要积极参加活动。",
      "pinyin": "Wǒ men yào jī jí cān jiā huó dòng.",
      "vietnamese": "Chúng ta cần tích cực tham gia hoạt động."
    }
  },
  {
    "id": "boya2-6-24",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "体育",
    "pinyin": "tǐyù",
    "sinoVietnamese": "thể dục",
    "meaning": "thể thao",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/体育.mp3",
    "exampleSentence": {
      "chinese": "我们上体育课",
      "pinyin": "Wǒ men shàng tǐ yù kè",
      "vietnamese": "Chúng tôi có lớp thể dục"
    }
  },
  {
    "id": "boya2-6-25",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "运动",
    "pinyin": "yùndòng",
    "sinoVietnamese": "vận động",
    "meaning": "tập thể dục; thể thao",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/运动.mp3",
    "exampleSentence": {
      "chinese": "我喜欢运动",
      "pinyin": "Wǒ xǐ huān yùn dòng",
      "vietnamese": "Tôi thích thể thao"
    }
  },
  {
    "id": "boya2-6-26",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "举办",
    "pinyin": "jǔbàn",
    "sinoVietnamese": "cử biện",
    "meaning": "tổ chức",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/举办.mp3",
    "exampleSentence": {
      "chinese": "学校下周将举办运动会。",
      "pinyin": "Xuéxiào xià zhōu jiāng jǔbàn yùndònghuì.",
      "vietnamese": "Tuần sau trường sẽ tổ chức đại hội thể thao."
    }
  },
  {
    "id": "boya2-6-27",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "篮球",
    "pinyin": "lánqiú",
    "sinoVietnamese": "lam cầu",
    "meaning": "bóng rổ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/篮球.mp3",
    "exampleSentence": {
      "chinese": "他喜欢打篮球",
      "pinyin": "Tā xǐ huān dǎ lán qiú",
      "vietnamese": "Anh ấy thích chơi bóng rổ"
    }
  },
  {
    "id": "boya2-6-28",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "地点",
    "pinyin": "dìdiǎn",
    "sinoVietnamese": "địa điểm",
    "meaning": "địa điểm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地点.mp3",
    "exampleSentence": {
      "chinese": "我们在什么地点见面？",
      "pinyin": "Wǒmen zài shénme dìdiǎn jiànmiàn?",
      "vietnamese": "Chúng ta gặp nhau ở địa điểm nào?"
    }
  },
  {
    "id": "boya2-6-29",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "部",
    "pinyin": "bù",
    "sinoVietnamese": "bộ",
    "meaning": "quyển",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/部.mp3",
    "exampleSentence": {
      "chinese": "教育部发布了新的政策。",
      "pinyin": "Jiàoyùbù fābù le xīn de zhèngcè.",
      "vietnamese": "Bộ Giáo dục đã ban hành chính sách mới."
    }
  },
  {
    "id": "boya2-6-30",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "广告栏",
    "pinyin": "guǎnggàolán",
    "sinoVietnamese": "quảng cáo lan",
    "meaning": "bảng quảng cáo, cột quảng cáo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/广告栏.mp3",
    "exampleSentence": {
      "chinese": "请把通知贴在广告栏上。",
      "pinyin": "Qǐng bǎ tōngzhī tiē zài guǎnggàolán shàng.",
      "vietnamese": "Xin hãy dán thông báo lên bảng quảng cáo."
    }
  },
  {
    "id": "boya2-6-31",
    "lesson": 6,
    "lessonTitle": "Bài 6: 广告栏上贴着一个通知 (Trên bảng tin dán một thông báo)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "学生证",
    "pinyin": "xuéshēngzhèng",
    "sinoVietnamese": "học sinh, sanh chứng",
    "meaning": "thẻ học sinh/sinh viên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/学生证.mp3",
    "exampleSentence": {
      "chinese": "请出示您的学生证。",
      "pinyin": "Qǐng chūshì nín de xuéshēngzhèng.",
      "vietnamese": "Xin hãy xuất trình thẻ học sinh của bạn."
    }
  },
  {
    "id": "boya2-7-1",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "毛",
    "pinyin": "máo",
    "sinoVietnamese": "mao",
    "meaning": "lông, len",
    "partOfSpeech": "Danh từ / Lượng từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/毛.mp3",
    "exampleSentence": {
      "chinese": "一毛钱",
      "pinyin": "Yī máo qián",
      "vietnamese": "Một mao (10 phân)"
    }
  },
  {
    "id": "boya2-7-2",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "应该",
    "pinyin": "yīnggāi",
    "sinoVietnamese": "ưng cai",
    "meaning": "nên",
    "partOfSpeech": "Trợ động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/应该.mp3",
    "exampleSentence": {
      "chinese": "你应该多喝水",
      "pinyin": "Nǐ yīng gāi duō hē shuǐ",
      "vietnamese": "Bạn nên uống nhiều nước"
    }
  },
  {
    "id": "boya2-7-3",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "sinoVietnamese": "bình quả",
    "meaning": "táo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/苹果.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃苹果。",
      "pinyin": "Wǒ xǐhuān chī píngguǒ.",
      "vietnamese": "Tôi thích ăn táo."
    }
  },
  {
    "id": "boya2-7-4",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "报",
    "pinyin": "bào",
    "sinoVietnamese": "báo",
    "meaning": "báo",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/报.mp3",
    "exampleSentence": {
      "chinese": "请报一下你的名字。",
      "pinyin": "Qǐng bào yī xià nǐ de míng zì.",
      "vietnamese": "Hãy báo tên của bạn."
    }
  },
  {
    "id": "boya2-7-5",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "sinoVietnamese": "sinh, sanh bệnh",
    "meaning": "bị ốm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生病.mp3",
    "exampleSentence": {
      "chinese": "他生病了",
      "pinyin": "Tā shēngbìng le",
      "vietnamese": "Anh ấy bị ốm rồi"
    }
  },
  {
    "id": "boya2-7-6",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "sinoVietnamese": "thủy quả",
    "meaning": "trái cây",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/水果.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃水果",
      "pinyin": "Wǒ xǐhuan chī shuǐguǒ",
      "vietnamese": "Tôi thích ăn trái cây"
    }
  },
  {
    "id": "boya2-7-7",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "再说",
    "pinyin": "zàishuō",
    "sinoVietnamese": "tái thuyết",
    "meaning": "hơn nữa",
    "partOfSpeech": "Liên từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/再说.mp3",
    "exampleSentence": {
      "chinese": "我不想去，再说天气也不好。",
      "pinyin": "wǒ bù xiǎng qù, zài shuō tiān qì yě bù hǎo.",
      "vietnamese": "Tôi không muốn đi, hơn nữa thời tiết cũng không tốt."
    }
  },
  {
    "id": "boya2-7-8",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "橘子",
    "pinyin": "júzi",
    "sinoVietnamese": "quất tử",
    "meaning": "quýt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/橘子.mp3",
    "exampleSentence": {
      "chinese": "吃橘子",
      "pinyin": "Chī júzi",
      "vietnamese": "Ăn quýt"
    }
  },
  {
    "id": "boya2-7-9",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "酸",
    "pinyin": "suān",
    "sinoVietnamese": "toan",
    "meaning": "chua",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/酸.mp3",
    "exampleSentence": {
      "chinese": "这个柠檬太酸了，我吃不下。",
      "pinyin": "Zhè ge níngméng tài suān le, wǒ chī bu xià.",
      "vietnamese": "Quả chanh này chua quá, tôi không ăn nổi."
    }
  },
  {
    "id": "boya2-7-10",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "维生素",
    "pinyin": "wéishēngsù",
    "sinoVietnamese": "duy sinh, sanh tố",
    "meaning": "vitamin",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/维生素.mp3",
    "exampleSentence": {
      "chinese": "蔬菜富含维生素。",
      "pinyin": "Shūcài fù hán wéishēngsù.",
      "vietnamese": "Rau củ giàu vitamin."
    }
  },
  {
    "id": "boya2-7-11",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "结果",
    "pinyin": "jiéguǒ",
    "sinoVietnamese": "kết quả",
    "meaning": "kết quả; do đó",
    "partOfSpeech": "Danh từ / Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/结果.mp3",
    "exampleSentence": {
      "chinese": "结果很好",
      "pinyin": "Jié guǒ hěn hǎo",
      "vietnamese": "Kết quả rất tốt"
    }
  },
  {
    "id": "boya2-7-12",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "放",
    "pinyin": "fàng",
    "sinoVietnamese": "phóng",
    "meaning": "đặt",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/放.mp3",
    "exampleSentence": {
      "chinese": "把书放在桌子上",
      "pinyin": "Bǎ shū fàng zài zhuōzi shàng",
      "vietnamese": "Đặt sách lên bàn"
    }
  },
  {
    "id": "boya2-7-13",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "冰箱",
    "pinyin": "bīngxiāng",
    "sinoVietnamese": "băng sương, tương",
    "meaning": "tủ lạnh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/冰箱.mp3",
    "exampleSentence": {
      "chinese": "冰箱里有饮料。",
      "pinyin": "Bīngxiāng lǐ yǒu yǐnliào.",
      "vietnamese": "Trong tủ lạnh có đồ uống."
    }
  },
  {
    "id": "boya2-7-14",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "塞",
    "pinyin": "sāi",
    "sinoVietnamese": "tái, tắc",
    "meaning": "nhét",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/塞.mp3",
    "exampleSentence": {
      "chinese": "他把书塞进了书包里。",
      "pinyin": "Tā bǎ shū sāi jìn le shūbāo lǐ.",
      "vietnamese": "Cậu ấy nhét sách vào trong cặp."
    }
  },
  {
    "id": "boya2-7-15",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "满",
    "pinyin": "mǎn",
    "sinoVietnamese": "mãn",
    "meaning": "đầy đủ",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/满.mp3",
    "exampleSentence": {
      "chinese": "房间满了",
      "pinyin": "Fáng jiān mǎn le",
      "vietnamese": "Phòng đã đầy"
    }
  },
  {
    "id": "boya2-7-16",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "看来",
    "pinyin": "kànlái",
    "sinoVietnamese": "khán lai",
    "meaning": "dường như",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看来.mp3",
    "exampleSentence": {
      "chinese": "看来明天会下雨。",
      "pinyin": "Kànlái míngtiān huì xiàyǔ.",
      "vietnamese": "Trông có vẻ ngày mai sẽ mưa."
    }
  },
  {
    "id": "boya2-7-17",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "猜",
    "pinyin": "cāi",
    "sinoVietnamese": "sai",
    "meaning": "đoán",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/猜.mp3",
    "exampleSentence": {
      "chinese": "你猜猜我手里拿的是什么？",
      "pinyin": "Nǐ cāicai wǒ shǒu lǐ ná de shì shénme?",
      "vietnamese": "Bạn đoán xem trong tay tôi cầm cái gì nào?"
    }
  },
  {
    "id": "boya2-7-18",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "圆",
    "pinyin": "yuán",
    "sinoVietnamese": "viên",
    "meaning": "tròn",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/圆.mp3",
    "exampleSentence": {
      "chinese": "桌子是圆的",
      "pinyin": "Zhuōzi shì yuán de",
      "vietnamese": "Cái bàn hình tròn"
    }
  },
  {
    "id": "boya2-7-19",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "胖",
    "pinyin": "pàng",
    "sinoVietnamese": "bàn",
    "meaning": "béo",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/胖.mp3",
    "exampleSentence": {
      "chinese": "他很胖",
      "pinyin": "Tā hěn pàng",
      "vietnamese": "Anh ấy rất mập"
    }
  },
  {
    "id": "boya2-7-20",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "身上",
    "pinyin": "shēnshàng",
    "sinoVietnamese": "thân thượng",
    "meaning": "trên tay",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/身上.mp3",
    "exampleSentence": {
      "chinese": "他身上没有钱。",
      "pinyin": "Tā shēnshang méiyǒu qián.",
      "vietnamese": "Anh ấy không mang tiền trên người."
    }
  },
  {
    "id": "boya2-7-21",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "sinoVietnamese": "nhĩ đóa",
    "meaning": "tai",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/耳朵.mp3",
    "exampleSentence": {
      "chinese": "我的耳朵疼",
      "pinyin": "Wǒ de ěrduo téng",
      "vietnamese": "Tai của tôi đau"
    }
  },
  {
    "id": "boya2-7-22",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "四肢",
    "pinyin": "sìzhī",
    "sinoVietnamese": "tứ chi",
    "meaning": "tứ chi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/四肢.mp3",
    "exampleSentence": {
      "chinese": "运动前要做好热身，活动一下四肢。",
      "pinyin": "yùn dòng qián yào zuò hǎo rè shēn, huó dòng yí xià sì zhī.",
      "vietnamese": "Trước khi vận động cần khởi động kỹ, vận động tứ chi một chút."
    }
  },
  {
    "id": "boya2-7-23",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "戴",
    "pinyin": "dài",
    "sinoVietnamese": "đái",
    "meaning": "đeo",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/戴.mp3",
    "exampleSentence": {
      "chinese": "他戴着一副黑色的眼镜。",
      "pinyin": "Tā dài zhe yí fù hēisè de yǎnjìng.",
      "vietnamese": "Anh ấy đeo một cặp kính màu đen."
    }
  },
  {
    "id": "boya2-7-24",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "副",
    "pinyin": "fù",
    "sinoVietnamese": "phó",
    "meaning": "phó",
    "partOfSpeech": "Tính từ / Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/副.mp3",
    "exampleSentence": {
      "chinese": "我买了一副新的手套。",
      "pinyin": "Wǒ mǎi le yí fù xīn de shǒutào.",
      "vietnamese": "Tôi đã mua một đôi găng tay mới."
    }
  },
  {
    "id": "boya2-7-25",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "可爱",
    "pinyin": "kě'ài",
    "sinoVietnamese": "khả ái",
    "meaning": "đáng yêu",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可爱.mp3",
    "exampleSentence": {
      "chinese": "你的妹妹真可爱",
      "pinyin": "Nǐ de mèi mèi zhēn kě ài",
      "vietnamese": "Em gái cậu thật đáng yêu"
    }
  },
  {
    "id": "boya2-7-26",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "食物",
    "pinyin": "shíwù",
    "sinoVietnamese": "thực vật",
    "meaning": "thức ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/食物.mp3",
    "exampleSentence": {
      "chinese": "这家餐厅的食物很好吃。",
      "pinyin": "Zhè jiā cān tīng de shí wù hěn hǎo chī.",
      "vietnamese": "Thức ăn ở nhà hàng này rất ngon."
    }
  },
  {
    "id": "boya2-7-27",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "竹子",
    "pinyin": "zhúzi",
    "sinoVietnamese": "trúc tử",
    "meaning": "tre",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/竹子.mp3",
    "exampleSentence": {
      "chinese": "院子里种了很多竹子。",
      "pinyin": "Yuànzi lǐ zhòng le hěnduō zhúzi.",
      "vietnamese": "Trong sân trồng nhiều tre."
    }
  },
  {
    "id": "boya2-7-28",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "出来",
    "pinyin": "chūlai",
    "sinoVietnamese": "xuất lai",
    "meaning": "ra ngoài",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出来.mp3",
    "exampleSentence": {
      "chinese": "请出来一下。",
      "pinyin": "Qǐng chūlái yīxià.",
      "vietnamese": "Xin hãy ra ngoài một chút."
    }
  },
  {
    "id": "boya2-7-29",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "熊猫",
    "pinyin": "xióngmāo",
    "sinoVietnamese": "hùng miêu",
    "meaning": "gấu trúc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/熊猫.mp3",
    "exampleSentence": {
      "chinese": "熊猫是中国的国宝。",
      "pinyin": "Xióngmāo shì Zhōngguó de guóbǎo.",
      "vietnamese": "Gấu trúc là quốc bảo của Trung Quốc."
    }
  },
  {
    "id": "boya2-7-30",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "地区",
    "pinyin": "dìqū",
    "sinoVietnamese": "địa khu",
    "meaning": "khu vực",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地区.mp3",
    "exampleSentence": {
      "chinese": "这个地区发展很快。",
      "pinyin": "Zhège dìqū fāzhǎn hěn kuài.",
      "vietnamese": "Khu vực này phát triển rất nhanh."
    }
  },
  {
    "id": "boya2-7-31",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "粗",
    "pinyin": "cū",
    "sinoVietnamese": "thô",
    "meaning": "thô",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/粗.mp3",
    "exampleSentence": {
      "chinese": "这棵大树的树干非常粗。",
      "pinyin": "Zhè kē dàshù de shùgàn fēicháng cū.",
      "vietnamese": "Thân cây to này rất to và thô."
    }
  },
  {
    "id": "boya2-7-32",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "柱子",
    "pinyin": "zhùzi",
    "sinoVietnamese": "trụ tử",
    "meaning": "cột",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/柱子.mp3",
    "exampleSentence": {
      "chinese": "支撑柱子",
      "pinyin": "zhīchēng zhùzi",
      "vietnamese": "cột chống đỡ"
    }
  },
  {
    "id": "boya2-7-33",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "扇子",
    "pinyin": "shànzi",
    "sinoVietnamese": "phiến tử",
    "meaning": "quạt giấy",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/扇子.mp3",
    "exampleSentence": {
      "chinese": "奶奶在树下拿着扇子乘凉。",
      "pinyin": "nǎi nai zài shù xià ná zhe shàn zi chéng liáng.",
      "vietnamese": "Bà nội cầm chiếc quạt hóng mát dưới gốc cây."
    }
  },
  {
    "id": "boya2-7-34",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "勤劳",
    "pinyin": "qínláo",
    "sinoVietnamese": "cần lao",
    "meaning": "chăm chỉ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/勤劳.mp3",
    "exampleSentence": {
      "chinese": "越南人民非常勤劳和善良。",
      "pinyin": "Yuè nán rén mín fēi cháng qín láo hé shàn liáng.",
      "vietnamese": "Người dân Việt Nam rất chăm chỉ và lương thiện."
    }
  },
  {
    "id": "boya2-7-35",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "眼圈",
    "pinyin": "yǎnquān",
    "sinoVietnamese": "nhãn khuyên",
    "meaning": "vòng mắt, vành mắt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/眼圈.mp3",
    "exampleSentence": {
      "chinese": "他熬夜了，所以眼圈有点黑。",
      "pinyin": "Tā áoyè le, suǒyǐ yǎnquān yǒudiǎn hēi.",
      "vietnamese": "Anh ấy thức khuya nên vành mắt hơi thâm."
    }
  },
  {
    "id": "boya2-7-36",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "墨镜",
    "pinyin": "mòjìng",
    "sinoVietnamese": "mặc kính",
    "meaning": "kính râm, kính mát",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/墨镜.mp3",
    "exampleSentence": {
      "chinese": "夏天出门，我喜欢戴墨镜。",
      "pinyin": "Xiàtiān chūmén, wǒ xǐhuān dài mòjìng.",
      "vietnamese": "Mùa hè ra ngoài, tôi thích đeo kính râm."
    }
  },
  {
    "id": "boya2-7-37",
    "lesson": 7,
    "lessonTitle": "Bài 7: 冰箱塞得满满的 (Tủ lạnh nhét đầy ắp)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "印度",
    "pinyin": "Yìndù",
    "sinoVietnamese": "ấn độ",
    "meaning": "ấn Độ",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/印度.mp3",
    "exampleSentence": {
      "chinese": "印度是一个人口大国。",
      "pinyin": "Yìndù shì yī gè rénkǒu dàguó.",
      "vietnamese": "Ấn Độ là một quốc gia đông dân."
    }
  },
  {
    "id": "boya2-8-1",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "比",
    "pinyin": "bǐ",
    "sinoVietnamese": "tỉ",
    "meaning": "so sánh; hơn",
    "partOfSpeech": "Giới từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比.mp3",
    "exampleSentence": {
      "chinese": "你比我高",
      "pinyin": "Nǐ bǐ wǒ gāo",
      "vietnamese": "Bạn cao hơn tôi"
    }
  },
  {
    "id": "boya2-8-2",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "精彩",
    "pinyin": "jīngcǎi",
    "sinoVietnamese": "tinh thái, thải",
    "meaning": "tuyệt vời",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/精彩.mp3",
    "exampleSentence": {
      "chinese": "昨天的比赛非常精彩。",
      "pinyin": "Zuó tiān de bǐ sài fēi cháng jīng cǎi.",
      "vietnamese": "Trận đấu hôm qua rất tuyệt vời."
    }
  },
  {
    "id": "boya2-8-3",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "赢",
    "pinyin": "yíng",
    "sinoVietnamese": "doanh",
    "meaning": "thắng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/赢.mp3",
    "exampleSentence": {
      "chinese": "我们赢了比赛。",
      "pinyin": "Wǒ men yíng le bǐ sài.",
      "vietnamese": "Chúng ta đã thắng trận đấu."
    }
  },
  {
    "id": "boya2-8-4",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "输",
    "pinyin": "shū",
    "sinoVietnamese": "thâu",
    "meaning": "thua",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/输.mp3",
    "exampleSentence": {
      "chinese": "我们不想输。",
      "pinyin": "Wǒ men bù xiǎng shū.",
      "vietnamese": "Chúng ta không muốn thua."
    }
  },
  {
    "id": "boya2-8-5",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "踢",
    "pinyin": "tī",
    "sinoVietnamese": "thích",
    "meaning": "đá",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/踢.mp3",
    "exampleSentence": {
      "chinese": "下午我们去操场踢足球吧。",
      "pinyin": "Xiàwǔ wǒmen qù cāochǎng tī zúqiú ba.",
      "vietnamese": "Chiều nay chúng mình ra sân tập đá bóng nhé."
    }
  },
  {
    "id": "boya2-8-6",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "平",
    "pinyin": "píng",
    "sinoVietnamese": "bình",
    "meaning": "phẳng",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/平.mp3",
    "exampleSentence": {
      "chinese": "这条路很平",
      "pinyin": "Zhè tiáo lù hěn píng",
      "vietnamese": "Con đường này rất phẳng"
    }
  },
  {
    "id": "boya2-8-7",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "怪",
    "pinyin": "guài",
    "sinoVietnamese": "quái",
    "meaning": "khá là",
    "partOfSpeech": "Trợ từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怪.mp3",
    "exampleSentence": {
      "chinese": "今天怪冷的。",
      "pinyin": "Jīntiān guài lěng de.",
      "vietnamese": "Hôm nay khá là lạnh."
    }
  },
  {
    "id": "boya2-8-8",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "浪费",
    "pinyin": "làngfèi",
    "sinoVietnamese": "lãng phí",
    "meaning": "lãng phí",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/浪费.mp3",
    "exampleSentence": {
      "chinese": "不要浪费食物。",
      "pinyin": "Bù yào làng fèi shí wù.",
      "vietnamese": "Đừng lãng phí thức ăn."
    }
  },
  {
    "id": "boya2-8-9",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "要是",
    "pinyin": "yàoshi",
    "sinoVietnamese": "yếu thị",
    "meaning": "nếu",
    "partOfSpeech": "Liên từ giả định",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/要是.mp3",
    "exampleSentence": {
      "chinese": "要是明天不下雨，我们就去公园。",
      "pinyin": "Yàoshì míngtiān bù xià yǔ, wǒmen jiù qù gōngyuán.",
      "vietnamese": "Nếu ngày mai không mưa, chúng tôi sẽ đi công viên."
    }
  },
  {
    "id": "boya2-8-10",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "进去",
    "pinyin": "jìnqù",
    "sinoVietnamese": "tiến khứ",
    "meaning": "đi vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/进去.mp3",
    "exampleSentence": {
      "chinese": "请进来。",
      "pinyin": "Qǐng jìnlái.",
      "vietnamese": "Xin mời vào."
    }
  },
  {
    "id": "boya2-8-11",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "胜利",
    "pinyin": "shènglì",
    "sinoVietnamese": "thắng lợi",
    "meaning": "chiến thắng",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/胜利.mp3",
    "exampleSentence": {
      "chinese": "我们庆祝胜利！",
      "pinyin": "Wǒ men qìng zhù shèng lì ！",
      "vietnamese": "Chúng ta ăn mừng chiến thắng!"
    }
  },
  {
    "id": "boya2-8-12",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "sinoVietnamese": "tẩy táo",
    "meaning": "tắm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/洗澡.mp3",
    "exampleSentence": {
      "chinese": "我每天晚上洗澡",
      "pinyin": "Wǒ měi tiān wǎn shàng xǐ zǎo",
      "vietnamese": "Tôi tắm mỗi tối"
    }
  },
  {
    "id": "boya2-8-13",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "对手",
    "pinyin": "duìshǒu",
    "sinoVietnamese": "đối thủ",
    "meaning": "đối thủ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/对手.mp3",
    "exampleSentence": {
      "chinese": "在这次比赛中，他遇到了一个非常强大的对手。",
      "pinyin": "Zài zhè cǐ bǐsài zhōng, tā yùdào le yī gè fēicháng qiángdà de duìshǒu.",
      "vietnamese": "Trong trận đấu lần này, anh ấy gặp một đối thủ rất mạnh."
    }
  },
  {
    "id": "boya2-8-14",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "数学",
    "pinyin": "shùxué",
    "sinoVietnamese": "số học",
    "meaning": "toán học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/数学.mp3",
    "exampleSentence": {
      "chinese": "我数学不太好",
      "pinyin": "Wǒ shùxué bù tài hǎo",
      "vietnamese": "Toán của tôi không quá tốt"
    }
  },
  {
    "id": "boya2-8-15",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "厉害",
    "pinyin": "lìhai",
    "sinoVietnamese": "lệ hại",
    "meaning": "ngầu",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/厉害.mp3",
    "exampleSentence": {
      "chinese": "他真厉害，什么都会。",
      "pinyin": "Tā zhēn lìhai, shénme dōu huì.",
      "vietnamese": "Anh ấy thật lợi hại, gì cũng biết."
    }
  },
  {
    "id": "boya2-8-16",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "加油",
    "pinyin": "jiāyóu",
    "sinoVietnamese": "gia du",
    "meaning": "cố lên!",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/加油.mp3",
    "exampleSentence": {
      "chinese": "加油！你能行的！",
      "pinyin": "Jiā yóu ！ nǐ néng xíng de ！",
      "vietnamese": "Cố lên! Bạn làm được!"
    }
  },
  {
    "id": "boya2-8-17",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "响",
    "pinyin": "xiǎng",
    "sinoVietnamese": "hưởng",
    "meaning": "phát ra âm thanh, kêu",
    "partOfSpeech": "Động từ / Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/响.mp3",
    "exampleSentence": {
      "chinese": "电话响了。",
      "pinyin": "Diàn huà xiǎng le.",
      "vietnamese": "Điện thoại reo."
    }
  },
  {
    "id": "boya2-8-18",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "听见",
    "pinyin": "tīngjiàn",
    "sinoVietnamese": "thính kiến",
    "meaning": "nghe thấy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听见.mp3",
    "exampleSentence": {
      "chinese": "我听见声音了",
      "pinyin": "Wǒ tīng jiàn shēng yīn le",
      "vietnamese": "Tôi nghe thấy tiếng rồi"
    }
  },
  {
    "id": "boya2-8-19",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "醒",
    "pinyin": "xǐng",
    "sinoVietnamese": "tỉnh",
    "meaning": "tỉnh giấc",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/醒.mp3",
    "exampleSentence": {
      "chinese": "今天早上我六点就醒了。",
      "pinyin": "Jīntiān zǎoshang wǒ liù diǎn jiù xǐng le.",
      "vietnamese": "Sáng nay mới sáu giờ tôi đã tỉnh giấc rồi."
    }
  },
  {
    "id": "boya2-8-20",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "急忙",
    "pinyin": "jímáng",
    "sinoVietnamese": "cấp mang",
    "meaning": "vội vàng",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/急忙.mp3",
    "exampleSentence": {
      "chinese": "听到电话后，他急忙穿上衣服出门了。",
      "pinyin": "tīng dào diàn huà hòu, tā jí máng chuān shàng yī fu chū mén le.",
      "vietnamese": "Sau khi nghe điện thoại, anh ấy vội vàng mặc quần áo rồi đi ra ngoài."
    }
  },
  {
    "id": "boya2-8-21",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "爬",
    "pinyin": "pá",
    "sinoVietnamese": "bà",
    "meaning": "leo",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/爬.mp3",
    "exampleSentence": {
      "chinese": "猴子会爬树",
      "pinyin": "Hóu zi huì pá shù",
      "vietnamese": "Khỉ biết leo cây"
    }
  },
  {
    "id": "boya2-8-22",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "起来",
    "pinyin": "qǐlái",
    "sinoVietnamese": "khởi lai",
    "meaning": "đứng lên",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/起来.mp3",
    "exampleSentence": {
      "chinese": "请站起来",
      "pinyin": "Qǐng zhàn qǐ lái",
      "vietnamese": "Làm ơn đứng lên"
    }
  },
  {
    "id": "boya2-8-23",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "推",
    "pinyin": "tuī",
    "sinoVietnamese": "thôi",
    "meaning": "đẩy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/推.mp3",
    "exampleSentence": {
      "chinese": "请把门推开。",
      "pinyin": "Qǐng bǎ mén tuī kāi.",
      "vietnamese": "Vui lòng đẩy cửa ra."
    }
  },
  {
    "id": "boya2-8-24",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "气",
    "pinyin": "qì",
    "sinoVietnamese": "khí",
    "meaning": "khí, không khí, hơi nước",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/气.mp3",
    "exampleSentence": {
      "chinese": "空气很好",
      "pinyin": "Kōng qì hěn hǎo",
      "vietnamese": "Không khí rất tốt"
    }
  },
  {
    "id": "boya2-8-25",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "扔",
    "pinyin": "rēng",
    "sinoVietnamese": "nhưng",
    "meaning": "ném",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/扔.mp3",
    "exampleSentence": {
      "chinese": "请不要随地乱扔垃圾。",
      "pinyin": "Qǐng bú yào suídì luàn rēng lājī.",
      "vietnamese": "Xin đừng vứt rác bừa bãi khắp nơi."
    }
  },
  {
    "id": "boya2-8-26",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "上去",
    "pinyin": "shàngqu",
    "sinoVietnamese": "thượng khứ",
    "meaning": "lên",
    "partOfSpeech": "Động từ kết quả",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上去.mp3",
    "exampleSentence": {
      "chinese": "请跑上去。",
      "pinyin": "Qǐng pǎo shàngqu.",
      "vietnamese": "Làm ơn chạy lên trên."
    }
  },
  {
    "id": "boya2-8-27",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "站",
    "pinyin": "zhàn",
    "sinoVietnamese": "trạm",
    "meaning": "đứng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/站.mp3",
    "exampleSentence": {
      "chinese": "请站起来。",
      "pinyin": "Qǐng zhàn qǐ lái.",
      "vietnamese": "Vui lòng đứng dậy."
    }
  },
  {
    "id": "boya2-8-28",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "下来",
    "pinyin": "xiàlái",
    "sinoVietnamese": "hạ lai",
    "meaning": "đi xuống",
    "partOfSpeech": "Động từ hướng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下来.mp3",
    "exampleSentence": {
      "chinese": "请下来吧。",
      "pinyin": "Qǐng xiàlái ba.",
      "vietnamese": "Làm ơn xuống đây đi."
    }
  },
  {
    "id": "boya2-8-29",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "出租车",
    "pinyin": "chūzūchē",
    "sinoVietnamese": "xuất tô xa",
    "meaning": "taxi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出租车.mp3",
    "exampleSentence": {
      "chinese": "我叫了一辆出租车",
      "pinyin": "Wǒ jiào le yī liàng chū zū chē",
      "vietnamese": "Tôi gọi một chiếc taxi"
    }
  },
  {
    "id": "boya2-8-30",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "错过",
    "pinyin": "cuòguò",
    "sinoVietnamese": "thác quá",
    "meaning": "bỏ lỡ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/错过.mp3",
    "exampleSentence": {
      "chinese": "要是再不走，我们就会错过这趟火车。",
      "pinyin": "Yàoshi zài bù zǒu, wǒmen jiù huì cuòguò zhè tàng huǒchē.",
      "vietnamese": "Nếu không đi ngay thì chúng ta sẽ bỏ lỡ chuyến tàu này."
    }
  },
  {
    "id": "boya2-8-31",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "后悔",
    "pinyin": "hòuhuǐ",
    "sinoVietnamese": "hậu hối, hổi",
    "meaning": "hối hận",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/后悔.mp3",
    "exampleSentence": {
      "chinese": "没能去留学，他感到非常后悔。",
      "pinyin": "Méi néng qù liúxué, tā gǎndào fēicháng hòuhuǐ.",
      "vietnamese": "Không thể đi du học, anh ấy cảm thấy rất hối hận."
    }
  },
  {
    "id": "boya2-8-32",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "射门",
    "pinyin": "shèmén",
    "sinoVietnamese": "xạ môn",
    "meaning": "sút bóng (vào gôn), dứt điểm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/射门.mp3",
    "exampleSentence": {
      "chinese": "他抓住机会，果断射门得分。",
      "pinyin": "Tā zhuāzhù jīhuì, guǒduàn shèmén dé fēn.",
      "vietnamese": "Anh ấy nắm bắt cơ hội, dứt khoát sút bóng ghi bàn."
    }
  },
  {
    "id": "boya2-8-33",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "一块儿",
    "pinyin": "yīkuàir",
    "sinoVietnamese": "nhất khối nhi",
    "meaning": "cùng nhau, cùng một chỗ",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一块儿.mp3",
    "exampleSentence": {
      "chinese": "我们一块儿去图书馆吧。",
      "pinyin": "Wǒmen yīkuàir qù túshūguǎn ba.",
      "vietnamese": "Chúng ta cùng nhau đi thư viện đi."
    }
  },
  {
    "id": "boya2-8-34",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "好不",
    "pinyin": "hǎobù",
    "sinoVietnamese": "hảo bất",
    "meaning": "thật là, rất là (biểu thị sự ngạc nhiên, cảm thán)",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/好不.mp3",
    "exampleSentence": {
      "chinese": "他好不容易才做完这项工作。",
      "pinyin": "Tā hǎobù róngyì cái zuò wán zhè xiàng gōngzuò.",
      "vietnamese": "Anh ấy thật không dễ dàng gì mới hoàn thành công việc này."
    }
  },
  {
    "id": "boya2-8-35",
    "lesson": 8,
    "lessonTitle": "Bài 8: 比赛很精彩 (Trận đấu rất hấp dẫn)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "乌龟",
    "pinyin": "wūguī",
    "sinoVietnamese": "ô quy",
    "meaning": "rùa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/乌龟.mp3",
    "exampleSentence": {
      "chinese": "这只乌龟活了很久。",
      "pinyin": "Zhè zhī wūguī huó le hěn jiǔ.",
      "vietnamese": "Con rùa này đã sống rất lâu rồi."
    }
  },
  {
    "id": "boya2-9-1",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "着",
    "pinyin": "zhe",
    "sinoVietnamese": "trước",
    "meaning": "động từ tiếp diễn",
    "partOfSpeech": "Trợ từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/着.mp3",
    "exampleSentence": {
      "chinese": "他看着书",
      "pinyin": "Tā kànzhe shū",
      "vietnamese": "Anh ấy đang đọc sách"
    }
  },
  {
    "id": "boya2-9-2",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "腿",
    "pinyin": "tuǐ",
    "sinoVietnamese": "thối",
    "meaning": "chân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/腿.mp3",
    "exampleSentence": {
      "chinese": "我的腿很酸",
      "pinyin": "Wǒ de tuǐ hěn suān",
      "vietnamese": "Chân tôi rất đau"
    }
  },
  {
    "id": "boya2-9-3",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "拐",
    "pinyin": "guǎi",
    "sinoVietnamese": "quải",
    "meaning": "khập khiễng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拐.mp3",
    "exampleSentence": {
      "chinese": "走到十字路口请向右拐。",
      "pinyin": "Zǒu dào shízì lùkǒu qǐng xiàng yòu guǎi.",
      "vietnamese": "Đi đến ngã tư xin hãy rẽ phải."
    }
  },
  {
    "id": "boya2-9-4",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "因为",
    "pinyin": "yīnwèi",
    "sinoVietnamese": "nhân vị",
    "meaning": "bởi vì",
    "partOfSpeech": "Liên từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/因为.mp3",
    "exampleSentence": {
      "chinese": "因为生病，所以没来上班",
      "pinyin": "Yīn wèi shēng bìng, suǒ yǐ méi lái shàng bān",
      "vietnamese": "Vì ốm nên không đến làm việc"
    }
  },
  {
    "id": "boya2-9-5",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "来不及",
    "pinyin": "láibují",
    "sinoVietnamese": "lai bất cập",
    "meaning": "không đủ thời gian",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/来不及.mp3",
    "exampleSentence": {
      "chinese": "快走，不然来不及了。",
      "pinyin": "Kuài zǒu, bùrán láibují le.",
      "vietnamese": "Đi nhanh, không thì không kịp rồi."
    }
  },
  {
    "id": "boya2-9-6",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "窗户",
    "pinyin": "chuānghu",
    "sinoVietnamese": "song hộ",
    "meaning": "cửa sổ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/窗户.mp3",
    "exampleSentence": {
      "chinese": "请打开窗户。",
      "pinyin": "Qǐng dǎkāi chuānghù.",
      "vietnamese": "Hãy mở cửa sổ."
    }
  },
  {
    "id": "boya2-9-7",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "层",
    "pinyin": "céng",
    "sinoVietnamese": "tằng",
    "meaning": "tầng",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/层.mp3",
    "exampleSentence": {
      "chinese": "这栋楼有十层",
      "pinyin": "Zhè dòng lóu yǒu shí céng",
      "vietnamese": "Tòa nhà này có mười tầng"
    }
  },
  {
    "id": "boya2-9-8",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "隔壁",
    "pinyin": "gébì",
    "sinoVietnamese": "cách bích",
    "meaning": "bên cạnh",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/隔壁.mp3",
    "exampleSentence": {
      "chinese": "我住在隔壁房间",
      "pinyin": "Wǒ zhù zài gébì fángjiān",
      "vietnamese": "Tôi ở trong phòng kế bên"
    }
  },
  {
    "id": "boya2-9-9",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "危险",
    "pinyin": "wēixiǎn",
    "sinoVietnamese": "nguy hiểm",
    "meaning": "nguy hiểm",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/危险.mp3",
    "exampleSentence": {
      "chinese": "这里很危险，不要靠近。",
      "pinyin": "Zhè lǐ hěn wēi xiǎn, bù yào kào jìn.",
      "vietnamese": "Nơi này rất nguy hiểm, đừng lại gần."
    }
  },
  {
    "id": "boya2-9-10",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "往",
    "pinyin": "wǎng",
    "sinoVietnamese": "vãng",
    "meaning": "đến, hướng tới",
    "partOfSpeech": "Động từ / Giới từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/往.mp3",
    "exampleSentence": {
      "chinese": "往东走",
      "pinyin": "Wǎng dōng zǒu",
      "vietnamese": "Đi về phía đông"
    }
  },
  {
    "id": "boya2-9-11",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "跳",
    "pinyin": "tiào",
    "sinoVietnamese": "khiêu",
    "meaning": "nhảy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/跳.mp3",
    "exampleSentence": {
      "chinese": "兔子跳走了。",
      "pinyin": "Tùzi tiào zǒu le.",
      "vietnamese": "Con thỏ nhảy đi rồi."
    }
  },
  {
    "id": "boya2-9-12",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "一下子",
    "pinyin": "yīxiàzi",
    "sinoVietnamese": "nhất hạ tử",
    "meaning": "bất thình lình",
    "partOfSpeech": "Phó từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一下子.mp3",
    "exampleSentence": {
      "chinese": "他一下子就跑过来了",
      "pinyin": "Tā yīxiàzi jiù pǎo guòlái le",
      "vietnamese": "Anh ấy chạy tới ngay lập tức"
    }
  },
  {
    "id": "boya2-9-13",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "摔",
    "pinyin": "shuāi",
    "sinoVietnamese": "suất",
    "meaning": "ngã",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/摔.mp3",
    "exampleSentence": {
      "chinese": "地太滑了，他不小心摔了一跤。",
      "pinyin": "dì tài huá le, tā bù xiǎo xīn shuāi le yì jiāo.",
      "vietnamese": "Đường trơn quá, anh ấy vô ý ngã một cú."
    }
  },
  {
    "id": "boya2-9-14",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "变成",
    "pinyin": "biànchéng",
    "sinoVietnamese": "biến thành",
    "meaning": "trở thành",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/变成.mp3",
    "exampleSentence": {
      "chinese": "水变成冰",
      "pinyin": "Shuǐ biàn chéng bīng",
      "vietnamese": "Nước biến thành băng"
    }
  },
  {
    "id": "boya2-9-15",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "近视",
    "pinyin": "jìnshì",
    "sinoVietnamese": "cận thị",
    "meaning": "cận thị",
    "partOfSpeech": "Danh từ / Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/近视.mp3",
    "exampleSentence": {
      "chinese": "经常看手机容易导致眼睛近视。",
      "pinyin": "Jīngcháng kàn shǒujī róngyì dǎozhì yǎnjìng jìnshì.",
      "vietnamese": "Thường xuyên xem điện thoại rất dễ dẫn đến cận thị mắt."
    }
  },
  {
    "id": "boya2-9-16",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "清楚",
    "pinyin": "qīngchu",
    "sinoVietnamese": "thanh sở",
    "meaning": "rõ ràng",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/清楚.mp3",
    "exampleSentence": {
      "chinese": "说清楚",
      "pinyin": "Shuō qīng chǔ",
      "vietnamese": "Nói cho rõ ràng"
    }
  },
  {
    "id": "boya2-9-17",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "脱",
    "pinyin": "tuō",
    "sinoVietnamese": "thoát",
    "meaning": "cởi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/脱.mp3",
    "exampleSentence": {
      "chinese": "进门前请先脱掉鞋子。",
      "pinyin": "Jìn mén qián qǐng xiān tuō diào xiézi.",
      "vietnamese": "Trước khi vào cửa xin hãy cởi giày ra."
    }
  },
  {
    "id": "boya2-9-18",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "挂",
    "pinyin": "guà",
    "sinoVietnamese": "quải",
    "meaning": "treo",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挂.mp3",
    "exampleSentence": {
      "chinese": "请把衣服挂在衣架上。",
      "pinyin": "Qǐng bǎ yī fú guà zài yī jià shàng.",
      "vietnamese": "Hãy treo áo lên giá treo quần áo."
    }
  },
  {
    "id": "boya2-9-19",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "墙",
    "pinyin": "qiáng",
    "sinoVietnamese": "tường",
    "meaning": "tường",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/墙.mp3",
    "exampleSentence": {
      "chinese": "墙是白色的",
      "pinyin": "Qiáng shì bái sè de",
      "vietnamese": "Cái tường màu trắng"
    }
  },
  {
    "id": "boya2-9-20",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "掉",
    "pinyin": "diào",
    "sinoVietnamese": "điệu",
    "meaning": "rơi",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/掉.mp3",
    "exampleSentence": {
      "chinese": "我的笔掉了。",
      "pinyin": "Wǒ de bǐ diào le.",
      "vietnamese": "Bút của tôi bị rơi."
    }
  },
  {
    "id": "boya2-9-21",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "钉子",
    "pinyin": "dīngzi",
    "sinoVietnamese": "đinh tử",
    "meaning": "đinh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/钉子.mp3",
    "exampleSentence": {
      "chinese": "用钉子固定",
      "pinyin": "Yòng dīngzi gùdìng",
      "vietnamese": "Dùng đinh để cố định"
    }
  },
  {
    "id": "boya2-9-22",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "只",
    "pinyin": "zhǐ",
    "sinoVietnamese": "chỉ",
    "meaning": "chỉ",
    "partOfSpeech": "Phó từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/只.mp3",
    "exampleSentence": {
      "chinese": "我只说一次",
      "pinyin": "Wǒ zhǐ shuō yī cì",
      "vietnamese": "Tôi chỉ nói một lần"
    }
  },
  {
    "id": "boya2-9-23",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "苍蝇",
    "pinyin": "cāngyíng",
    "sinoVietnamese": "thương dăng",
    "meaning": "ruồi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/苍蝇.mp3",
    "exampleSentence": {
      "chinese": "厨房里飞来了一只苍蝇",
      "pinyin": "Chúfáng lǐ fēiláile yī zhī cāngying",
      "vietnamese": "Một con ruồi bay vào nhà bếp"
    }
  },
  {
    "id": "boya2-9-24",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "立刻",
    "pinyin": "lìkè",
    "sinoVietnamese": "lập khắc",
    "meaning": "ngay lập tức",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/立刻.mp3",
    "exampleSentence": {
      "chinese": "请立刻回复我的邮件。",
      "pinyin": "Qǐng lìkè huífù wǒ de yóujiàn.",
      "vietnamese": "Hãy trả lời email của tôi ngay lập tức."
    }
  },
  {
    "id": "boya2-9-25",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "飞",
    "pinyin": "fēi",
    "sinoVietnamese": "phi",
    "meaning": "bay",
    "partOfSpeech": "Động từ / Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/飞.mp3",
    "exampleSentence": {
      "chinese": "鸟在天上飞",
      "pinyin": "Niǎo zài tiān shàng fēi",
      "vietnamese": "Chim đang bay trên trời"
    }
  },
  {
    "id": "boya2-9-26",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "蚊子",
    "pinyin": "wénzi",
    "sinoVietnamese": "văn tử",
    "meaning": "muỗi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/蚊子.mp3",
    "exampleSentence": {
      "chinese": "蚊子咬了我",
      "pinyin": "wénzi yǎo le wǒ",
      "vietnamese": "Muỗi đã đốt tôi"
    }
  },
  {
    "id": "boya2-9-27",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "落",
    "pinyin": "luò",
    "sinoVietnamese": "lạc",
    "meaning": "rơi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/落.mp3",
    "exampleSentence": {
      "chinese": "这个落很好。",
      "pinyin": "Zhè gè luò hěn hǎo.",
      "vietnamese": "rơi này rất tốt."
    }
  },
  {
    "id": "boya2-9-28",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "轻",
    "pinyin": "qīng",
    "sinoVietnamese": "khinh",
    "meaning": "nhẹ",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/轻.mp3",
    "exampleSentence": {
      "chinese": "这个箱子很轻",
      "pinyin": "Zhè gè xiāng zi hěn qīng",
      "vietnamese": "Cái thùng này rất nhẹ"
    }
  },
  {
    "id": "boya2-9-29",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "下去",
    "pinyin": "xiàqu",
    "sinoVietnamese": "hạ khứ",
    "meaning": "đi xuống",
    "partOfSpeech": "Động từ hướng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下去.mp3",
    "exampleSentence": {
      "chinese": "请走下去。",
      "pinyin": "Qǐng zǒu xiàqu.",
      "vietnamese": "Làm ơn đi xuống."
    }
  },
  {
    "id": "boya2-9-30",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "突然",
    "pinyin": "tūrán",
    "sinoVietnamese": "đột nhiên",
    "meaning": "đột nhiên",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/突然.mp3",
    "exampleSentence": {
      "chinese": "突然下雨了，我们快跑吧。",
      "pinyin": "Tūrán xiàyǔ le, wǒmen kuài pǎo ba.",
      "vietnamese": "Trời mưa đột ngột, chúng ta chạy nhanh đi."
    }
  },
  {
    "id": "boya2-9-31",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "感到",
    "pinyin": "gǎndào",
    "sinoVietnamese": "cảm đáo",
    "meaning": "cảm thấy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/感到.mp3",
    "exampleSentence": {
      "chinese": "我感到很荣幸。",
      "pinyin": "Wǒ gǎn dào hěn róng xìng.",
      "vietnamese": "Tôi cảm thấy rất vinh dự."
    }
  },
  {
    "id": "boya2-9-32",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "承认",
    "pinyin": "chéngrèn",
    "sinoVietnamese": "thừa nhận",
    "meaning": "thừa nhận",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/承认.mp3",
    "exampleSentence": {
      "chinese": "他承认自己错了。",
      "pinyin": "Tā chéngrèn zìjǐ cuò le.",
      "vietnamese": "Anh ấy thừa nhận mình sai rồi."
    }
  },
  {
    "id": "boya2-9-33",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "庙",
    "pinyin": "miào",
    "sinoVietnamese": "miếu",
    "meaning": "chùa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/庙.mp3",
    "exampleSentence": {
      "chinese": "这座古庙已经有五百多年的历史了。",
      "pinyin": "Zhè zuò gǔ miào yǐjīng yǒu wǔbǎi duō nián de lìshǐ le.",
      "vietnamese": "Ngôi chùa cổ này đã có hơn năm trăm năm lịch sử."
    }
  },
  {
    "id": "boya2-9-34",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "巴掌",
    "pinyin": "bāzhang",
    "sinoVietnamese": "ba chưởng",
    "meaning": "lòng bàn tay; cái tát",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/巴掌.mp3",
    "exampleSentence": {
      "chinese": "他用巴掌捂住脸。",
      "pinyin": "Tā yòng bāzhang wǔ zhù liǎn.",
      "vietnamese": "Anh ấy dùng lòng bàn tay che mặt."
    }
  },
  {
    "id": "boya2-9-35",
    "lesson": 9,
    "lessonTitle": "Bài 9: 我进不去了 (Tôi không vào được nữa)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "匾",
    "pinyin": "biǎn",
    "sinoVietnamese": "biển",
    "meaning": "biển hiệu, hoành phi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/匾.mp3",
    "exampleSentence": {
      "chinese": "这家店门口挂着一块旧匾。",
      "pinyin": "Zhè jiā diàn ménkǒu guàzhe yī kuài jiù biǎn.",
      "vietnamese": "Trước cửa hàng này treo một tấm biển cũ."
    }
  },
  {
    "id": "boya2-10-1",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "地区",
    "pinyin": "dìqū",
    "sinoVietnamese": "địa khu",
    "meaning": "khu vực",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地区.mp3",
    "exampleSentence": {
      "chinese": "这个地区发展很快。",
      "pinyin": "Zhège dìqū fāzhǎn hěn kuài.",
      "vietnamese": "Khu vực này phát triển rất nhanh."
    }
  },
  {
    "id": "boya2-10-2",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "站",
    "pinyin": "zhàn",
    "sinoVietnamese": "trạm",
    "meaning": "đứng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/站.mp3",
    "exampleSentence": {
      "chinese": "请站起来。",
      "pinyin": "Qǐng zhàn qǐ lái.",
      "vietnamese": "Vui lòng đứng dậy."
    }
  },
  {
    "id": "boya2-10-3",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "后悔",
    "pinyin": "hòuhuǐ",
    "sinoVietnamese": "hậu hối, hổi",
    "meaning": "hối hận",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/后悔.mp3",
    "exampleSentence": {
      "chinese": "没能去留学，他感到非常后悔。",
      "pinyin": "Méi néng qù liúxué, tā gǎndào fēicháng hòuhuǐ.",
      "vietnamese": "Không thể đi du học, anh ấy cảm thấy rất hối hận."
    }
  },
  {
    "id": "boya2-10-4",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "农村",
    "pinyin": "nóngcūn",
    "sinoVietnamese": "nông thôn",
    "meaning": "vùng nông thôn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/农村.mp3",
    "exampleSentence": {
      "chinese": "我来自一个农村。",
      "pinyin": "Wǒ láizì yī gè nóngcūn.",
      "vietnamese": "Tôi đến từ một vùng nông thôn."
    }
  },
  {
    "id": "boya2-10-5",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "所",
    "pinyin": "suǒ",
    "sinoVietnamese": "sở",
    "meaning": "cơ sở",
    "partOfSpeech": "Danh từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/所.mp3",
    "exampleSentence": {
      "chinese": "我去图书馆学习。",
      "pinyin": "Wǒ qù túshūguǎn xuéxí.",
      "vietnamese": "Tôi đến thư viện để học."
    }
  },
  {
    "id": "boya2-10-6",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "幼儿园",
    "pinyin": "yòu'éryuán",
    "sinoVietnamese": "ấu nhi viên",
    "meaning": "nhà trẻ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/幼儿园.mp3",
    "exampleSentence": {
      "chinese": "我的孩子在幼儿园上学",
      "pinyin": "Wǒ de háizi zài yòu'éryuán shàngxué",
      "vietnamese": "Con tôi học tại trường mầm non"
    }
  },
  {
    "id": "boya2-10-7",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "游戏",
    "pinyin": "yóuxì",
    "sinoVietnamese": "du hí",
    "meaning": "trò chơi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/游戏.mp3",
    "exampleSentence": {
      "chinese": "孩子们在院子里做游戏。",
      "pinyin": "Háizimen zài yuànzi lǐ zuò yóuxì.",
      "vietnamese": "Đứa trẻ đang chơi trò chơi trong sân."
    }
  },
  {
    "id": "boya2-10-8",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "农民",
    "pinyin": "nóngmín",
    "sinoVietnamese": "nông dân",
    "meaning": "nông dân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/农民.mp3",
    "exampleSentence": {
      "chinese": "中国有很多农民。",
      "pinyin": "Zhōngguó yǒu hěn duō nóngmín.",
      "vietnamese": "Trung Quốc có rất nhiều nông dân."
    }
  },
  {
    "id": "boya2-10-9",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "后来",
    "pinyin": "hòulái",
    "sinoVietnamese": "hậu lai",
    "meaning": "sau này",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/后来.mp3",
    "exampleSentence": {
      "chinese": "后来他来了",
      "pinyin": "Hòu lái tā lái le",
      "vietnamese": "Sau đó anh ấy đến"
    }
  },
  {
    "id": "boya2-10-10",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "附近",
    "pinyin": "fùjìn",
    "sinoVietnamese": "phụ cận",
    "meaning": "gần đây",
    "partOfSpeech": "Danh từ / Locality noun",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/附近.mp3",
    "exampleSentence": {
      "chinese": "学校附近有很多商店。",
      "pinyin": "Xuéxiào fùjìn yǒu hěn duō shāngdiàn.",
      "vietnamese": "Gần trường học có nhiều cửa hàng."
    }
  },
  {
    "id": "boya2-10-11",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "座",
    "pinyin": "zuò",
    "sinoVietnamese": "tọa",
    "meaning": "tòa",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/座.mp3",
    "exampleSentence": {
      "chinese": "一座大山",
      "pinyin": "Yī zuò dà shān",
      "vietnamese": "Một ngọn núi lớn"
    }
  },
  {
    "id": "boya2-10-12",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "山",
    "pinyin": "shān",
    "sinoVietnamese": "san, sơn",
    "meaning": "núi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/山.mp3",
    "exampleSentence": {
      "chinese": "山上有很多树",
      "pinyin": "Shānshàng yǒu hěnduō shù",
      "vietnamese": "Trên núi có rất nhiều cây"
    }
  },
  {
    "id": "boya2-10-13",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "古老",
    "pinyin": "gǔlǎo",
    "sinoVietnamese": "cổ lão",
    "meaning": "cổ xưa",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/古老.mp3",
    "exampleSentence": {
      "chinese": "这是一座古老的城市。",
      "pinyin": "Zhè shì yī zuò gǔlǎo de chéngshì.",
      "vietnamese": "Đây là một thành phố cổ kính."
    }
  },
  {
    "id": "boya2-10-14",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "雄伟",
    "pinyin": "xióngwěi",
    "sinoVietnamese": "hùng vĩ",
    "meaning": "hùng vĩ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/雄伟.mp3",
    "exampleSentence": {
      "chinese": "长城是世界上最雄伟的建筑之一。",
      "pinyin": "cháng chéng shì shì jiè shàng zuì xióng wěi de jiàn zhù zhī yī.",
      "vietnamese": "Vạn Lý Trường Thành là một trong những kiến trúc hùng vĩ nhất trên thế giới."
    }
  },
  {
    "id": "boya2-10-15",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "百",
    "pinyin": "bǎi",
    "sinoVietnamese": "bách",
    "meaning": "trăm",
    "partOfSpeech": "Số từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/百.mp3",
    "exampleSentence": {
      "chinese": "一百",
      "pinyin": "Yī bǎi",
      "vietnamese": "Một trăm"
    }
  },
  {
    "id": "boya2-10-16",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "云",
    "pinyin": "yún",
    "sinoVietnamese": "vân",
    "meaning": "mây",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/云.mp3",
    "exampleSentence": {
      "chinese": "天上有云",
      "pinyin": "Tiān shàng yǒu yún",
      "vietnamese": "Trên trời có mây"
    }
  },
  {
    "id": "boya2-10-17",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "草",
    "pinyin": "cǎo",
    "sinoVietnamese": "thảo",
    "meaning": "cỏ",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/草.mp3",
    "exampleSentence": {
      "chinese": "地上有很多草",
      "pinyin": "Dì shàng yǒu hěn duō cǎo",
      "vietnamese": "Trên đất có nhiều cỏ"
    }
  },
  {
    "id": "boya2-10-18",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "sinoVietnamese": "điểu",
    "meaning": "chim",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/鸟.mp3",
    "exampleSentence": {
      "chinese": "树上有鸟",
      "pinyin": "Shù shàng yǒu niǎo",
      "vietnamese": "Trên cây có chim"
    }
  },
  {
    "id": "boya2-10-19",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "天上",
    "pinyin": "tiānshàng",
    "sinoVietnamese": "thiên thượng",
    "meaning": "trên trời",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/天上.mp3",
    "exampleSentence": {
      "chinese": "天上有白云",
      "pinyin": "Tiān shàng yǒu bái yún",
      "vietnamese": "Trên trời có mây trắng"
    }
  },
  {
    "id": "boya2-10-20",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "幅",
    "pinyin": "fú",
    "sinoVietnamese": "phúc",
    "meaning": "bức",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/幅.mp3",
    "exampleSentence": {
      "chinese": "墙上挂着一幅美丽的油画。",
      "pinyin": "qiáng shàng guà zhe yī fú měi lì de yóu huà.",
      "vietnamese": "Trên tường treo một bức tranh sơn dầu đẹp đẽ."
    }
  },
  {
    "id": "boya2-10-21",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "照",
    "pinyin": "zhào",
    "sinoVietnamese": "chiếu",
    "meaning": "chụp ảnh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/照.mp3",
    "exampleSentence": {
      "chinese": "我们在这里照一张合影吧。",
      "pinyin": "Wǒmen zài zhèlǐ zhào yì zhāng héyǐng ba.",
      "vietnamese": "Chúng mình chụp một tấm ảnh tập thể ở đây nhé."
    }
  },
  {
    "id": "boya2-10-22",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "相片",
    "pinyin": "xiàngpiàn",
    "sinoVietnamese": "tướng phiến",
    "meaning": "ảnh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/相片.mp3",
    "exampleSentence": {
      "chinese": "这个相片很好。",
      "pinyin": "Zhè gè xiāng piàn hěn hǎo.",
      "vietnamese": "ảnh này rất tốt."
    }
  },
  {
    "id": "boya2-10-23",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "阳光",
    "pinyin": "yángguāng",
    "sinoVietnamese": "dương quang",
    "meaning": "ánh nắng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/阳光.mp3",
    "exampleSentence": {
      "chinese": "今天的阳光非常温暖。",
      "pinyin": "Jīntiān de yángguāng fēicháng wēnnuǎn.",
      "vietnamese": "Ánh nắng hôm nay rất ấm áp."
    }
  },
  {
    "id": "boya2-10-24",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "灿烂",
    "pinyin": "cànlàn",
    "sinoVietnamese": "xán lạn",
    "meaning": "rực rỡ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/灿烂.mp3",
    "exampleSentence": {
      "chinese": "阳光灿烂的日子里，心情也会变好。",
      "pinyin": "yáng guāng càn làn de rì zi lǐ, xīn qíng yě huì biàn hǎo.",
      "vietnamese": "Vào những ngày nắng rực rỡ, tâm trạng cũng sẽ trở nên tốt hơn."
    }
  },
  {
    "id": "boya2-10-25",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "龙",
    "pinyin": "lóng",
    "sinoVietnamese": "long",
    "meaning": "rồng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/龙.mp3",
    "exampleSentence": {
      "chinese": "龙是中国文化的象征。",
      "pinyin": "Lóng shì Zhōngguó wénhuà de xiàngzhēng.",
      "vietnamese": "Rồng là biểu tượng văn hóa Trung Quốc."
    }
  },
  {
    "id": "boya2-10-26",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "卧",
    "pinyin": "wò",
    "sinoVietnamese": "ngọa",
    "meaning": "nằm; ngủ",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/卧.mp3",
    "exampleSentence": {
      "chinese": "小狗在沙发上安静地卧着。",
      "pinyin": "Xiǎogǒu zài shāfā shang ānjìng de wò zhe.",
      "vietnamese": "Chú cún đang nằm ngoan ngoãn trên ghế sofa."
    }
  },
  {
    "id": "boya2-10-27",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "山峰",
    "pinyin": "shānfēng",
    "sinoVietnamese": "san, sơn phong",
    "meaning": "đỉnh núi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/山峰.mp3",
    "exampleSentence": {
      "chinese": "山峰被白雪覆盖",
      "pinyin": "Shānfēng bèi báixuě fùgài",
      "vietnamese": "Đỉnh núi phủ đầy tuyết trắng"
    }
  },
  {
    "id": "boya2-10-28",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "低",
    "pinyin": "dī",
    "sinoVietnamese": "đê",
    "meaning": "thấp",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/低.mp3",
    "exampleSentence": {
      "chinese": "气温很低",
      "pinyin": "Qì wēn hěn dī",
      "vietnamese": "Nhiệt độ rất thấp"
    }
  },
  {
    "id": "boya2-10-29",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "朝",
    "pinyin": "cháo",
    "sinoVietnamese": "triều",
    "meaning": "hướng tới",
    "partOfSpeech": "Giới từ / Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/朝.mp3",
    "exampleSentence": {
      "chinese": "我们的窗户都朝南开。",
      "pinyin": "wǒ men de chuāng hu dōu cháo nán kāi.",
      "vietnamese": "Cửa sổ của chúng tôi đều mở hướng về phía nam."
    }
  },
  {
    "id": "boya2-10-30",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "延伸",
    "pinyin": "yánshēn",
    "sinoVietnamese": "diên thân",
    "meaning": "kéo dài",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/延伸.mp3",
    "exampleSentence": {
      "chinese": "这条公路延伸到了山区。",
      "pinyin": "Zhè tiáo gōnglù yánshēn dào le shānqū.",
      "vietnamese": "Con đường bộ này kéo dài đến vùng núi."
    }
  },
  {
    "id": "boya2-10-31",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "笑",
    "pinyin": "xiào",
    "sinoVietnamese": "tiếu",
    "meaning": "cười; để cười",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/笑.mp3",
    "exampleSentence": {
      "chinese": "他笑得很开心",
      "pinyin": "Tā xiào de hěn kāixīn",
      "vietnamese": "Anh ấy cười rất vui"
    }
  },
  {
    "id": "boya2-10-32",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "开心",
    "pinyin": "kāixīn",
    "sinoVietnamese": "khai tâm",
    "meaning": "vui vẻ",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开心.mp3",
    "exampleSentence": {
      "chinese": "我今天很开心。",
      "pinyin": "Wǒ jīn tiān hěn kāi xīn.",
      "vietnamese": "Hôm nay tôi rất vui."
    }
  },
  {
    "id": "boya2-10-33",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "右",
    "pinyin": "yòu",
    "sinoVietnamese": "hữu",
    "meaning": "phải",
    "partOfSpeech": "Từ chỉ phương vị / Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/右.mp3",
    "exampleSentence": {
      "chinese": "向右转",
      "pinyin": "Xiàng yòu zhuǎn",
      "vietnamese": "Quẹo phải"
    }
  },
  {
    "id": "boya2-10-34",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "摆",
    "pinyin": "bǎi",
    "sinoVietnamese": "bài",
    "meaning": "đặt, để",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/摆.mp3",
    "exampleSentence": {
      "chinese": "桌子上摆着一盆盛开的鲜花。",
      "pinyin": "zhuō zi shàng bǎi zhe yì pén shèng kāi de xiān huā.",
      "vietnamese": "Trên bàn bày một chậu hoa tươi đang nở rộ."
    }
  },
  {
    "id": "boya2-10-35",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "上面",
    "pinyin": "shàngmiàn",
    "sinoVietnamese": "thượng diện, miến",
    "meaning": "bên trên",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上面.mp3",
    "exampleSentence": {
      "chinese": "书在桌子上面。",
      "pinyin": "Shū zài zhuōzi shàngmiàn.",
      "vietnamese": "Quyển sách ở trên bàn."
    }
  },
  {
    "id": "boya2-10-36",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "行",
    "pinyin": "xíng",
    "sinoVietnamese": "hành",
    "meaning": "được",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/行.mp3",
    "exampleSentence": {
      "chinese": "这样可以吗",
      "pinyin": "Zhè yàng kě yǐ ma",
      "vietnamese": "Được như vậy không"
    }
  },
  {
    "id": "boya2-10-37",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "登",
    "pinyin": "dēng",
    "sinoVietnamese": "đăng",
    "meaning": "leo lên",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/登.mp3",
    "exampleSentence": {
      "chinese": "周末我们要去登长城。",
      "pinyin": "Zhōumò wǒmen yào qù dēng Chángchéng.",
      "vietnamese": "Cuối tuần chúng tôi sẽ đi leo Vạn Lý Trường Thành."
    }
  },
  {
    "id": "boya2-10-38",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "长城",
    "pinyin": "Chángchéng",
    "sinoVietnamese": "trường thành",
    "meaning": "vạn Lý Trường Thành",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/长城.mp3",
    "exampleSentence": {
      "chinese": "长城是中国最著名的建筑。",
      "pinyin": "Chángchéng shì Zhōngguó zuì zhùmíng de jiànzhù.",
      "vietnamese": "Vạn Lý Trường Thành là công trình kiến trúc nổi tiếng nhất của Trung Quốc."
    }
  },
  {
    "id": "boya2-10-39",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "工厂",
    "pinyin": "gōngchǎng",
    "sinoVietnamese": "công xưởng",
    "meaning": "nhà máy",
    "partOfSpeech": "Danh từ (noun - workplace)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/工厂.mp3",
    "exampleSentence": {
      "chinese": "我爸爸在工厂工作。",
      "pinyin": "Wǒ bàba zài gōngchǎng gōngzuò.",
      "vietnamese": "Bố tôi làm việc trong nhà máy."
    }
  },
  {
    "id": "boya2-10-40",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "难忘",
    "pinyin": "nánwàng",
    "sinoVietnamese": "nan vong",
    "meaning": "không thể quên",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难忘.mp3",
    "exampleSentence": {
      "chinese": "那是一次令人难忘的旅行。",
      "pinyin": "Nà shì yí cì lìng rén nánwàng de lǚxíng.",
      "vietnamese": "Đó là một chuyến du lịch khó quên."
    }
  },
  {
    "id": "boya2-10-41",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "种",
    "pinyin": "zhǒng",
    "sinoVietnamese": "chủng",
    "meaning": "loại",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/种.mp3",
    "exampleSentence": {
      "chinese": "这种水果我从来没吃过。",
      "pinyin": "Zhè zhǒng shuǐguǒ wǒ cónglái méi chīguo.",
      "vietnamese": "Loại quả này tôi chưa từng ăn."
    }
  },
  {
    "id": "boya2-10-42",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "决心",
    "pinyin": "juéxīn",
    "sinoVietnamese": "quyết tâm",
    "meaning": "quyết tâm",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/决心.mp3",
    "exampleSentence": {
      "chinese": "他下定决心一定要学好中文。",
      "pinyin": "Tā xiàdìng juéxīn yídìng yào xuéhǎo Zhōngwén.",
      "vietnamese": "Anh ấy hạ quyết tâm nhất định phải học giỏi tiếng Trung."
    }
  },
  {
    "id": "boya2-10-43",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "敬老院",
    "pinyin": "jìnglǎoyuàn",
    "sinoVietnamese": "kính lão viện",
    "meaning": "viện dưỡng lão",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/敬老院.mp3",
    "exampleSentence": {
      "chinese": "他每个周末都会去敬老院探望老人。",
      "pinyin": "Tā měi ge zhōumò dōu huì qù jìnglǎoyuàn tànwàng lǎorén.",
      "vietnamese": "Anh ấy đến viện dưỡng lão thăm người già mỗi cuối tuần."
    }
  },
  {
    "id": "boya2-10-44",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "画儿",
    "pinyin": "huàr",
    "sinoVietnamese": "họa nhi",
    "meaning": "bức tranh, bức vẽ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/画儿.mp3",
    "exampleSentence": {
      "chinese": "墙上挂着一幅漂亮的画儿。",
      "pinyin": "Qiáng shàng guàzhe yī fú piàoliang de huàr.",
      "vietnamese": "Trên tường treo một bức tranh đẹp."
    }
  },
  {
    "id": "boya2-10-45",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "食指",
    "pinyin": "shízhǐ",
    "sinoVietnamese": "thực chỉ",
    "meaning": "ngón trỏ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/食指.mp3",
    "exampleSentence": {
      "chinese": "他用食指指着地图。",
      "pinyin": "Tā yòng shízhǐ zhǐzhe dìtú.",
      "vietnamese": "Anh ấy dùng ngón trỏ chỉ vào bản đồ."
    }
  },
  {
    "id": "boya2-10-46",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "中指",
    "pinyin": "zhōngzhǐ",
    "sinoVietnamese": "trung chỉ",
    "meaning": "ngón giữa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中指.mp3",
    "exampleSentence": {
      "chinese": "他的中指戴着一枚戒指。",
      "pinyin": "Tā de zhōngzhǐ dài zhe yī méi jièzhǐ.",
      "vietnamese": "Ngón giữa của anh ấy đeo một chiếc nhẫn."
    }
  },
  {
    "id": "boya2-10-47",
    "lesson": 10,
    "lessonTitle": "Bài 10: 山上的风景美极了 (Phong cảnh trên núi đẹp tuyệt)",
    "unit": 2,
    "unitTitle": "Đơn vị 2: Đời sống học đường & Hoạt động thể thao",
    "hanzi": "T恤",
    "pinyin": "<tì>xù",
    "sinoVietnamese": "tuất",
    "meaning": "áo phông, áo thun",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/T恤.mp3",
    "exampleSentence": {
      "chinese": "他今天穿了一件白色的T恤。",
      "pinyin": "Tā jīntiān chuān le yī jiàn báisè de Tìxù.",
      "vietnamese": "Hôm nay anh ấy mặc một chiếc áo phông màu trắng."
    }
  },
  {
    "id": "boya2-11-1",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "点",
    "pinyin": "diǎn",
    "sinoVietnamese": "điểm",
    "meaning": "giờ",
    "partOfSpeech": "Lượng từ / Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点.mp3",
    "exampleSentence": {
      "chinese": "现在三点",
      "pinyin": "Xiànzài sān diǎn",
      "vietnamese": "Bây giờ 3 giờ"
    }
  },
  {
    "id": "boya2-11-2",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "教",
    "pinyin": "jiāo",
    "sinoVietnamese": "giáo",
    "meaning": "giảng dạy",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/教.mp3",
    "exampleSentence": {
      "chinese": "教中文",
      "pinyin": "Jiāo zhōng wén",
      "vietnamese": "Dạy tiếng Trung"
    }
  },
  {
    "id": "boya2-11-3",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "西红柿",
    "pinyin": "xīhóngshì",
    "sinoVietnamese": "tây hồng thị",
    "meaning": "cà chua",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/西红柿.mp3",
    "exampleSentence": {
      "chinese": "西红柿炒鸡蛋很好吃。",
      "pinyin": "Xīhóngshì chǎo jīdàn hěn hǎochī.",
      "vietnamese": "Cà chua xào trứng rất ngon."
    }
  },
  {
    "id": "boya2-11-4",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "鸡蛋",
    "pinyin": "jīdàn",
    "sinoVietnamese": "kê đản",
    "meaning": "trứng gà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/鸡蛋.mp3",
    "exampleSentence": {
      "chinese": "我要吃鸡蛋",
      "pinyin": "Wǒ yào chī jīdàn",
      "vietnamese": "Tôi muốn ăn trứng"
    }
  },
  {
    "id": "boya2-11-5",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "筷子",
    "pinyin": "kuàizi",
    "sinoVietnamese": "khoái tử",
    "meaning": "đũa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/筷子.mp3",
    "exampleSentence": {
      "chinese": "中国人用筷子吃饭。",
      "pinyin": "Zhōngguó rén yòng kuàizi chīfàn.",
      "vietnamese": "Người Trung Quốc dùng đũa để ăn cơm."
    }
  },
  {
    "id": "boya2-11-6",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "搅拌",
    "pinyin": "jiǎobàn",
    "sinoVietnamese": "giảo bạn",
    "meaning": "khuấy",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/搅拌.mp3",
    "exampleSentence": {
      "chinese": "用勺子把咖啡和牛奶搅拌均匀。",
      "pinyin": "yòng sháo zi bǎ kā fēi hé niú nǎi jiǎo bàn jūn yún",
      "vietnamese": "Dùng thìa khuấy đều cà phê và sữa."
    }
  },
  {
    "id": "boya2-11-7",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "均匀",
    "pinyin": "jūnyún",
    "sinoVietnamese": "quân quân",
    "meaning": "đều, phân bố đều",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/均匀.mp3",
    "exampleSentence": {
      "chinese": "请把面粉和水搅拌均匀后再揉面。",
      "pinyin": "qǐng bǎ miàn fěn hé shuǐ jiǎo bàn jūn yún hòu zài róu miàn.",
      "vietnamese": "Hãy khuấy đều bột mì và nước trước khi nhào bột."
    }
  },
  {
    "id": "boya2-11-8",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "切",
    "pinyin": "qiē",
    "sinoVietnamese": "thiết",
    "meaning": "cắt",
    "partOfSpeech": "Động từ / Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/切.mp3",
    "exampleSentence": {
      "chinese": "请帮我把这块蛋糕切成八等份。",
      "pinyin": "qǐng bāng wǒ bǎ zhè kuài dàn gāo qiē chéng bā děng fèn.",
      "vietnamese": "Xin hãy giúp tôi cắt miếng bánh ngọt này thành tám phần bằng nhau."
    }
  },
  {
    "id": "boya2-11-9",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "火",
    "pinyin": "huǒ",
    "sinoVietnamese": "hỏa",
    "meaning": "lửa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/火.mp3",
    "exampleSentence": {
      "chinese": "做饭需要用火。",
      "pinyin": "Zuòfàn xūyào yòng huǒ.",
      "vietnamese": "Nấu ăn cần dùng lửa."
    }
  },
  {
    "id": "boya2-11-10",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "锅",
    "pinyin": "guō",
    "sinoVietnamese": "oa",
    "meaning": "nồi",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/锅.mp3",
    "exampleSentence": {
      "chinese": "妈妈在厨房里用铁锅炒菜。",
      "pinyin": "mā ma zài chú fáng lǐ yòng tiě guō chǎo cài.",
      "vietnamese": "Mẹ đang xào thức ăn bằng chảo sắt trong bếp."
    }
  },
  {
    "id": "boya2-11-11",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "油",
    "pinyin": "yóu",
    "sinoVietnamese": "du",
    "meaning": "dầu",
    "partOfSpeech": "Danh từ / Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/油.mp3",
    "exampleSentence": {
      "chinese": "炒菜要放油",
      "pinyin": "Chǎo cài yào fàng yóu",
      "vietnamese": "Xào ăn phải cho dầu"
    }
  },
  {
    "id": "boya2-11-12",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "熟",
    "pinyin": "shú",
    "sinoVietnamese": "thục",
    "meaning": "chín",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/熟.mp3",
    "exampleSentence": {
      "chinese": "肉已经熟了，可以吃了。",
      "pinyin": "Ròu yǐ jīng shú le, kě yǐ chī le.",
      "vietnamese": "Thịt đã chín rồi, có thể ăn được."
    }
  },
  {
    "id": "boya2-11-13",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "加",
    "pinyin": "jiā",
    "sinoVietnamese": "gia",
    "meaning": "cộng; thêm vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/加.mp3",
    "exampleSentence": {
      "chinese": "喝咖啡的时候请帮我加一点糖。",
      "pinyin": "Hē kāfēi de shíhou qǐng bāng wǒ jiā yìdiǎnr táng.",
      "vietnamese": "Lúc uống cà phê xin hãy cho thêm một chút đường giúp tôi."
    }
  },
  {
    "id": "boya2-11-14",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "最后",
    "pinyin": "zuìhòu",
    "sinoVietnamese": "tối hậu",
    "meaning": "cuối cùng",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/最后.mp3",
    "exampleSentence": {
      "chinese": "我最后到了",
      "pinyin": "Wǒ zuìhòu dào le",
      "vietnamese": "Tôi đến cuối cùng"
    }
  },
  {
    "id": "boya2-11-15",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "盐",
    "pinyin": "yán",
    "sinoVietnamese": "diêm",
    "meaning": "muối",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/盐.mp3",
    "exampleSentence": {
      "chinese": "这道菜有点淡，需要加点儿盐。",
      "pinyin": "Zhè dào cài yǒudiǎnr dàn, xūyào jiā diǎnr yán.",
      "vietnamese": "Món này hơi nhạt, cần cho thêm một chút muối."
    }
  },
  {
    "id": "boya2-11-16",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "尝",
    "pinyin": "cháng",
    "sinoVietnamese": "thường",
    "meaning": "thử",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/尝.mp3",
    "exampleSentence": {
      "chinese": "你尝一尝这道菜好不好吃。",
      "pinyin": "Nǐ cháng yì cháng zhè dào cài hǎo bu hǎochī.",
      "vietnamese": "Bạn nếm thử món này xem có ngon không."
    }
  },
  {
    "id": "boya2-11-17",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "特点",
    "pinyin": "tèdiǎn",
    "sinoVietnamese": "đặc điểm",
    "meaning": "đặc điểm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/特点.mp3",
    "exampleSentence": {
      "chinese": "每个人都有自己的特点",
      "pinyin": "Měi gè rén dōu yǒu zì jǐ de tè diǎn",
      "vietnamese": "Mỗi người đều có đặc điểm riêng"
    }
  },
  {
    "id": "boya2-11-18",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "闻",
    "pinyin": "wén",
    "sinoVietnamese": "văn",
    "meaning": "ngửi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/闻.mp3",
    "exampleSentence": {
      "chinese": "闻起来很香",
      "pinyin": "Wén qǐ lái hěn xiāng",
      "vietnamese": "Ngửi thấy rất thơm"
    }
  },
  {
    "id": "boya2-11-19",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "香",
    "pinyin": "xiāng",
    "sinoVietnamese": "hương",
    "meaning": "thơm",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/香.mp3",
    "exampleSentence": {
      "chinese": "厨房里飘来了米饭的香味。",
      "pinyin": "Chúfáng lǐ piāo lái le mǐfàn de xiāngwèi.",
      "vietnamese": "Từ nhà bếp bay ra mùi cơm thơm phức."
    }
  },
  {
    "id": "boya2-11-20",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "原料",
    "pinyin": "yuánliào",
    "sinoVietnamese": "nguyên liệu",
    "meaning": "nguyên liệu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/原料.mp3",
    "exampleSentence": {
      "chinese": "这道菜的原料很新鲜。",
      "pinyin": "Zhè dào cài de yuánliào hěn xīnxiān.",
      "vietnamese": "Nguyên liệu món này rất tươi."
    }
  },
  {
    "id": "boya2-11-21",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "克",
    "pinyin": "kè",
    "sinoVietnamese": "khắc",
    "meaning": "gam",
    "partOfSpeech": "Lượng từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/克.mp3",
    "exampleSentence": {
      "chinese": "五百克面粉",
      "pinyin": "Wǔ bǎi kè miàn fěn",
      "vietnamese": "năm trăm gam bột mì"
    }
  },
  {
    "id": "boya2-11-22",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "淀粉",
    "pinyin": "diànfěn",
    "sinoVietnamese": "điện phấn",
    "meaning": "tinh bột",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/淀粉.mp3",
    "exampleSentence": {
      "chinese": "玉米淀粉",
      "pinyin": "Yùmǐ diànfěn",
      "vietnamese": "Tinh bột ngô"
    }
  },
  {
    "id": "boya2-11-23",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "做法",
    "pinyin": "zuòfǎ",
    "sinoVietnamese": "tố pháp",
    "meaning": "cách nấu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/做法.mp3",
    "exampleSentence": {
      "chinese": "这个菜的做法很简单",
      "pinyin": "Zhè gè cài de zuò fǎ hěn jiǎn dān",
      "vietnamese": "Cách nấu món này rất đơn giản"
    }
  },
  {
    "id": "boya2-11-24",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "迅速",
    "pinyin": "xùnsù",
    "sinoVietnamese": "tấn tốc",
    "meaning": "nhanh",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/迅速.mp3",
    "exampleSentence": {
      "chinese": "消防员迅速赶到现场。",
      "pinyin": "Xiāofángyuán xùnsù gǎndào xiànchǎng.",
      "vietnamese": "Lính cứu hỏa nhanh chóng đến hiện trường."
    }
  },
  {
    "id": "boya2-11-25",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "可口",
    "pinyin": "kěkǒu",
    "sinoVietnamese": "khả khẩu",
    "meaning": "ngon",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/可口.mp3",
    "exampleSentence": {
      "chinese": "妈妈今天做了一桌可口的饭菜。",
      "pinyin": "mā ma jīn tiān zuò le yī zhuō kě kǒu de fàn cài.",
      "vietnamese": "Hôm nay mẹ đã nấu một bàn cơm canh ngon lành."
    }
  },
  {
    "id": "boya2-11-26",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "营养",
    "pinyin": "yíngyǎng",
    "sinoVietnamese": "doanh dưỡng",
    "meaning": "dinh dưỡng",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/营养.mp3",
    "exampleSentence": {
      "chinese": "蔬菜很有营养。",
      "pinyin": "Shūcài hěn yǒu yíngyǎng.",
      "vietnamese": "Rau rất giàu dinh dưỡng."
    }
  },
  {
    "id": "boya2-11-27",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "丰富",
    "pinyin": "fēngfù",
    "sinoVietnamese": "phong phú",
    "meaning": "phong phú",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/丰富.mp3",
    "exampleSentence": {
      "chinese": "中国的文化资源很丰富。",
      "pinyin": "Zhōngguó de wénhuà zīyuán hěn fēngfù.",
      "vietnamese": "Nguồn tài nguyên văn hóa của Trung Quốc rất phong phú."
    }
  },
  {
    "id": "boya2-11-28",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "土豆",
    "pinyin": "tǔdòu",
    "sinoVietnamese": "thổ đậu",
    "meaning": "khoai tây",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/土豆.mp3",
    "exampleSentence": {
      "chinese": "我今天晚饭想吃牛肉炖土豆。",
      "pinyin": "wǒ jīn tiān wǎn fàn xiǎng chī niú ròu dùn tǔ dòu.",
      "vietnamese": "Tối nay tôi muốn ăn thịt bò hầm khoai tây."
    }
  },
  {
    "id": "boya2-11-29",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "辣椒",
    "pinyin": "làjiāo",
    "sinoVietnamese": "lạt tiêu",
    "meaning": "ớt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辣椒.mp3",
    "exampleSentence": {
      "chinese": "四川人非常喜欢在菜里放很多辣椒。",
      "pinyin": "sì chuān rén fēi cháng xǐ huan zài cài lǐ fàng hěn duō là jiāo.",
      "vietnamese": "Người Tứ Xuyên rất thích bỏ nhiều ớt vào trong món ăn."
    }
  },
  {
    "id": "boya2-11-30",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "醋",
    "pinyin": "cù",
    "sinoVietnamese": "thố",
    "meaning": "giấm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/醋.mp3",
    "exampleSentence": {
      "chinese": "妈妈在做凉拌菜时放了一点醋。",
      "pinyin": "mā ma zài zuò liáng bàn cài shí fàng le yì diǎn cù",
      "vietnamese": "Mẹ cho một chút giấm khi làm món nộm."
    }
  },
  {
    "id": "boya2-11-31",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "酱油",
    "pinyin": "jiàngyóu",
    "sinoVietnamese": "tương du",
    "meaning": "nước tương",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/酱油.mp3",
    "exampleSentence": {
      "chinese": "打酱油",
      "pinyin": "dǎ jiàngyóu",
      "vietnamese": "mua nước tương (vui: không liên quan)"
    }
  },
  {
    "id": "boya2-11-32",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "味精",
    "pinyin": "wèijīng",
    "sinoVietnamese": "vị tinh",
    "meaning": "mì chính",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/味精.mp3",
    "exampleSentence": {
      "chinese": "炒菜放点味精。",
      "pinyin": "Chǎocài fàng diǎn wèijīng.",
      "vietnamese": "Xào thức cho chút bột ngọt."
    }
  },
  {
    "id": "boya2-11-33",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "葱",
    "pinyin": "cōng",
    "sinoVietnamese": "thông",
    "meaning": "hành lá",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/葱.mp3",
    "exampleSentence": {
      "chinese": "炒菜前先把葱切碎。",
      "pinyin": "Chǎo cài qián xiān bǎ cōng qiē suì.",
      "vietnamese": "Trước khi xào rau hãy thái nhỏ hành lá."
    }
  },
  {
    "id": "boya2-11-34",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "姜",
    "pinyin": "jiāng",
    "sinoVietnamese": "khương",
    "meaning": "gừng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/姜.mp3",
    "exampleSentence": {
      "chinese": "煮汤时放两片姜可以去腥味。",
      "pinyin": "Zhǔ tāng shí fàng liǎng piàn jiāng kěyǐ qù xīngwèi.",
      "vietnamese": "Khi nấu canh cho hai lát gừng có thể khử mùi tanh."
    }
  },
  {
    "id": "boya2-11-35",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "适量",
    "pinyin": "shìliàng",
    "sinoVietnamese": "thích lượng",
    "meaning": "lượng thích hợp",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/适量.mp3",
    "exampleSentence": {
      "chinese": "适量运动",
      "pinyin": "shìliàng yùndòng",
      "vietnamese": "Vận động vừa phải"
    }
  },
  {
    "id": "boya2-11-36",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "入",
    "pinyin": "rù",
    "sinoVietnamese": "nhập",
    "meaning": "đi vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/入.mp3",
    "exampleSentence": {
      "chinese": "请按顺序依次入内。",
      "pinyin": "Qǐng àn shùnxù yīcì rù nèi.",
      "vietnamese": "Xin hãy theo thứ tự lần lượt đi vào trong."
    }
  },
  {
    "id": "boya2-11-37",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "厘米",
    "pinyin": "límǐ",
    "sinoVietnamese": "li mễ",
    "meaning": "xentimét",
    "partOfSpeech": "Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/厘米.mp3",
    "exampleSentence": {
      "chinese": "这个房间有二十厘米高。",
      "pinyin": "Zhège fángjiān yǒu èrshí límǐ gāo.",
      "vietnamese": "Căn phòng này cao hai mươi xentimét."
    }
  },
  {
    "id": "boya2-11-38",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "家常菜",
    "pinyin": "jiāchángcài",
    "sinoVietnamese": "gia thường thái",
    "meaning": "món ăn gia đình, món ăn thường ngày",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/家常菜.mp3",
    "exampleSentence": {
      "chinese": "妈妈做的家常菜最好吃。",
      "pinyin": "Māmā zuò de jiāchángcài zuì hǎochī.",
      "vietnamese": "Món ăn gia đình mẹ nấu là ngon nhất."
    }
  },
  {
    "id": "boya2-11-39",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "块儿",
    "pinyin": "kuàir",
    "sinoVietnamese": "khối nhi",
    "meaning": "miếng, cục, mẩu",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/块儿.mp3",
    "exampleSentence": {
      "chinese": "给我一块儿蛋糕。",
      "pinyin": "Gěi wǒ yī kuàir dàngāo.",
      "vietnamese": "Cho tôi một miếng bánh gato."
    }
  },
  {
    "id": "boya2-11-40",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "白糖",
    "pinyin": "báitáng",
    "sinoVietnamese": "bạch đường",
    "meaning": "đường trắng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/白糖.mp3",
    "exampleSentence": {
      "chinese": "咖啡里加点白糖会更好喝。",
      "pinyin": "Kāfēi lǐ jiā diǎn báitáng huì gèng hǎohē.",
      "vietnamese": "Cho thêm chút đường trắng vào cà phê sẽ ngon hơn."
    }
  },
  {
    "id": "boya2-11-41",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "开锅",
    "pinyin": "kāiguō",
    "sinoVietnamese": "khai oa",
    "meaning": "sôi (nồi nước, cháo)",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开锅.mp3",
    "exampleSentence": {
      "chinese": "水快开锅了。",
      "pinyin": "Shuǐ kuài kāiguō le.",
      "vietnamese": "Nước sắp sôi rồi."
    }
  },
  {
    "id": "boya2-11-42",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "料酒",
    "pinyin": "liàojiǔ",
    "sinoVietnamese": "liệu tửu",
    "meaning": "rượu nấu ăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/料酒.mp3",
    "exampleSentence": {
      "chinese": "炒菜时放一点料酒可以去腥。",
      "pinyin": "Chǎocài shí fàng yī diǎn liàojiǔ kěyǐ qù xīng.",
      "vietnamese": "Khi xào rau cho chút rượu nấu ăn có thể khử mùi tanh."
    }
  },
  {
    "id": "boya2-11-43",
    "lesson": 11,
    "lessonTitle": "Bài 11: 西红柿炒鸡蛋 (Trứng xào cà chua)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "褐色",
    "pinyin": "hèsè",
    "sinoVietnamese": "hạt sắc",
    "meaning": "màu nâu",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/褐色.mp3",
    "exampleSentence": {
      "chinese": "我喜欢这种褐色的鞋子。",
      "pinyin": "Wǒ xǐhuan zhè zhǒng hèsè de xiézi.",
      "vietnamese": "Tôi thích đôi giày màu nâu này."
    }
  },
  {
    "id": "boya2-12-1",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "劳驾",
    "pinyin": "láojià",
    "sinoVietnamese": "lao giá",
    "meaning": "làm ơn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/劳驾.mp3",
    "exampleSentence": {
      "chinese": "劳驾，请问去地铁站怎么走？",
      "pinyin": "láo jià, qǐng wèn qù dì tiě zhàn zěn me zǒu?",
      "vietnamese": "Làm ơn cho hỏi đi đến ga tàu điện ngầm đi thế nào?"
    }
  },
  {
    "id": "boya2-12-2",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "纸",
    "pinyin": "zhǐ",
    "sinoVietnamese": "chỉ",
    "meaning": "giấy",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/纸.mp3",
    "exampleSentence": {
      "chinese": "请给我一张纸。",
      "pinyin": "Qǐng gěi wǒ yī zhāng zhǐ.",
      "vietnamese": "Vui lòng cho tôi một tờ giấy."
    }
  },
  {
    "id": "boya2-12-3",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "箱子",
    "pinyin": "xiāngzi",
    "sinoVietnamese": "sương, tương tử",
    "meaning": "hộp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/箱子.mp3",
    "exampleSentence": {
      "chinese": "箱子里装满了书。",
      "pinyin": "Xiāngzi lǐ zhuāng mǎn le shū.",
      "vietnamese": "Trong hộp chứa đầy sách."
    }
  },
  {
    "id": "boya2-12-4",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "按",
    "pinyin": "àn",
    "sinoVietnamese": "án",
    "meaning": "theo",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/按.mp3",
    "exampleSentence": {
      "chinese": "请按规定时间提交作业。",
      "pinyin": "Qǐng àn guīdìng shíjiān tíjiāo zuòyè.",
      "vietnamese": "Xin hãy nộp bài tập theo đúng thời gian quy định."
    }
  },
  {
    "id": "boya2-12-5",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "不要",
    "pinyin": "bùyào",
    "sinoVietnamese": "bất yếu",
    "meaning": "không",
    "partOfSpeech": "Trợ động từ / Phó từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不要.mp3",
    "exampleSentence": {
      "chinese": "不要紧",
      "pinyin": "Bù yào jǐn",
      "vietnamese": "không sao"
    }
  },
  {
    "id": "boya2-12-6",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "顺序",
    "pinyin": "shùnxù",
    "sinoVietnamese": "thuận tự",
    "meaning": "trật tự",
    "partOfSpeech": "Danh từ (noun)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/顺序.mp3",
    "exampleSentence": {
      "chinese": "请按顺序排队。",
      "pinyin": "Qǐng àn shùnxù páiduì.",
      "vietnamese": "Vui lòng xếp hàng theo thứ tự."
    }
  },
  {
    "id": "boya2-12-7",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "弄",
    "pinyin": "nòng",
    "sinoVietnamese": "lộng",
    "meaning": "làm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/弄.mp3",
    "exampleSentence": {
      "chinese": "弄坏了",
      "pinyin": "Nòng huài le",
      "vietnamese": "làm hỏng"
    }
  },
  {
    "id": "boya2-12-8",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "乱",
    "pinyin": "luàn",
    "sinoVietnamese": "loạn",
    "meaning": "bừa bãi",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/乱.mp3",
    "exampleSentence": {
      "chinese": "房间里很乱。",
      "pinyin": "Fáng jiān lǐ hěn luàn.",
      "vietnamese": "Trong phòng rất bừa bộn."
    }
  },
  {
    "id": "boya2-12-9",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "sinoVietnamese": "trác tử",
    "meaning": "bàn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/桌子.mp3",
    "exampleSentence": {
      "chinese": "请把书放在桌子上",
      "pinyin": "Qǐng bǎ shū fàng zài zhuō zi shàng",
      "vietnamese": "Làm ơn đặt sách lên bàn"
    }
  },
  {
    "id": "boya2-12-10",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "小心",
    "pinyin": "xiǎoxīn",
    "sinoVietnamese": "tiểu tâm",
    "meaning": "cẩn thận",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小心.mp3",
    "exampleSentence": {
      "chinese": "小心一点",
      "pinyin": "Xiǎo xīn yī diǎn",
      "vietnamese": "Cẩn thận một chút"
    }
  },
  {
    "id": "boya2-12-11",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "重",
    "pinyin": "zhòng",
    "sinoVietnamese": "trọng",
    "meaning": "nặng",
    "partOfSpeech": "Phó từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/重.mp3",
    "exampleSentence": {
      "chinese": "请重说一遍。",
      "pinyin": "Qǐng zhòng shuō yī biàn.",
      "vietnamese": "Làm ơn nói lại một lần nữa."
    }
  },
  {
    "id": "boya2-12-12",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "辛苦",
    "pinyin": "xīnkǔ",
    "sinoVietnamese": "tân khổ",
    "meaning": "vất vả",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辛苦.mp3",
    "exampleSentence": {
      "chinese": "你辛苦了。",
      "pinyin": "Nǐ xīnkǔ le.",
      "vietnamese": "Anh/chị vất vả rồi."
    }
  },
  {
    "id": "boya2-12-13",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "姓名",
    "pinyin": "xìngmíng",
    "sinoVietnamese": "tính danh",
    "meaning": "họ tên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/姓名.mp3",
    "exampleSentence": {
      "chinese": "请告诉我你的姓名",
      "pinyin": "Qǐng gào sù wǒ nǐ de xìng míng",
      "vietnamese": "Vui lòng cho tôi biết họ tên của bạn"
    }
  },
  {
    "id": "boya2-12-14",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "地址",
    "pinyin": "dìzhǐ",
    "sinoVietnamese": "địa chỉ",
    "meaning": "địa chỉ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地址.mp3",
    "exampleSentence": {
      "chinese": "这个地址很好。",
      "pinyin": "Zhè gè dì zhǐ hěn hǎo.",
      "vietnamese": "địa chỉ này rất tốt."
    }
  },
  {
    "id": "boya2-12-15",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "小区",
    "pinyin": "xiǎoqū",
    "sinoVietnamese": "tiểu khu",
    "meaning": "khu dân cư",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小区.mp3",
    "exampleSentence": {
      "chinese": "我家的小区很漂亮",
      "pinyin": "Wǒjiā de xiǎoqū hěn piàoliang",
      "vietnamese": "Khu chung cư nhà tôi rất đẹp"
    }
  },
  {
    "id": "boya2-12-16",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "看重",
    "pinyin": "kànzhòng",
    "sinoVietnamese": "khán trọng",
    "meaning": "xem trọng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看重.mp3",
    "exampleSentence": {
      "chinese": "老师很看重这个学生的努力。",
      "pinyin": "Lǎoshī hěn kànzhòng zhège xuésheng de nǔlì.",
      "vietnamese": "Thầy giáo rất coi trọng sự cố gắng của học sinh này."
    }
  },
  {
    "id": "boya2-12-17",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "居民",
    "pinyin": "jūmín",
    "sinoVietnamese": "cư dân",
    "meaning": "cư dân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/居民.mp3",
    "exampleSentence": {
      "chinese": "这个地区的居民大约有一万人",
      "pinyin": "Zhège dìqū de jūmín dàyuē yǒu yī wàn rén",
      "vietnamese": "Cư dân ở khu vực này khoảng một vạn người"
    }
  },
  {
    "id": "boya2-12-18",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "南边",
    "pinyin": "nánbiān",
    "sinoVietnamese": "nam biên",
    "meaning": "phía nam",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/南边.mp3",
    "exampleSentence": {
      "chinese": "南边有河",
      "pinyin": "Nánbiān yǒu hé",
      "vietnamese": "Phía nam có sông"
    }
  },
  {
    "id": "boya2-12-19",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "公园",
    "pinyin": "gōngyuán",
    "sinoVietnamese": "công viên",
    "meaning": "công viên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/公园.mp3",
    "exampleSentence": {
      "chinese": "我们在公园散步",
      "pinyin": "Wǒ men zài gōng yuán sàn bù",
      "vietnamese": "Chúng tôi đi dạo ở công viên"
    }
  },
  {
    "id": "boya2-12-20",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "下棋",
    "pinyin": "xiàqí",
    "sinoVietnamese": "hạ kỳ",
    "meaning": "chơi cờ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/下棋.mp3",
    "exampleSentence": {
      "chinese": "爷爷喜欢每天下午跟邻居下棋。",
      "pinyin": "Yéye xǐhuan měitiān xiàwǔ gēn línjū xiàqí.",
      "vietnamese": "Ông nội thích chơi cờ với hàng xóm vào mỗi buổi chiều."
    }
  },
  {
    "id": "boya2-12-21",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "满意",
    "pinyin": "mǎnyì",
    "sinoVietnamese": "mãn ý",
    "meaning": "hài lòng",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/满意.mp3",
    "exampleSentence": {
      "chinese": "我对这个结果很满意。",
      "pinyin": "Wǒ duì zhè gè jié guǒ hěn mǎn yì.",
      "vietnamese": "Tôi rất hài lòng với kết quả này."
    }
  },
  {
    "id": "boya2-12-22",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "认为",
    "pinyin": "rènwéi",
    "sinoVietnamese": "nhận vi",
    "meaning": "nghĩ rằng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/认为.mp3",
    "exampleSentence": {
      "chinese": "我认为这是对的",
      "pinyin": "Wǒ rèn wèi zhè shì duì de",
      "vietnamese": "Tôi cho rằng điều này là đúng"
    }
  },
  {
    "id": "boya2-12-23",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "条件",
    "pinyin": "tiáojiàn",
    "sinoVietnamese": "điều kiện",
    "meaning": "điều kiện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/条件.mp3",
    "exampleSentence": {
      "chinese": "这是我的条件。",
      "pinyin": "Zhè shì wǒ de tiáo jiàn.",
      "vietnamese": "Đây là điều kiện của tôi."
    }
  },
  {
    "id": "boya2-12-24",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "虽然",
    "pinyin": "suīrán",
    "sinoVietnamese": "tuy nhiên",
    "meaning": "mặc dù",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/虽然.mp3",
    "exampleSentence": {
      "chinese": "虽然下雨，但还是来了",
      "pinyin": "Suī rán xià yǔ, dàn hái shì lái le",
      "vietnamese": "Mặc dù mưa, nhưng vẫn đến"
    }
  },
  {
    "id": "boya2-12-25",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "但是",
    "pinyin": "dànshì",
    "sinoVietnamese": "đãn thị",
    "meaning": "nhưng",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/但是.mp3",
    "exampleSentence": {
      "chinese": "我想去，但是没时间",
      "pinyin": "Wǒ xiǎng qù, dàn shì méi shí jiān",
      "vietnamese": "Tôi muốn đi, nhưng không có thời gian"
    }
  },
  {
    "id": "boya2-12-26",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "房东",
    "pinyin": "fángdōng",
    "sinoVietnamese": "phòng đông",
    "meaning": "chủ nhà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/房东.mp3",
    "exampleSentence": {
      "chinese": "我的房东人非常热情和客气。",
      "pinyin": "Wǒ de fángdōng rén fēicháng rèqíng hé kèqi.",
      "vietnamese": "Bác chủ nhà của tôi rất nhiệt tình và lịch sự."
    }
  },
  {
    "id": "boya2-12-27",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "药店",
    "pinyin": "yàodiàn",
    "sinoVietnamese": "dược điếm",
    "meaning": "hiệu thuốc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/药店.mp3",
    "exampleSentence": {
      "chinese": "去药店买药",
      "pinyin": "Qù yào diàn mǎi yào",
      "vietnamese": "Đi hiệu thuốc mua thuốc"
    }
  },
  {
    "id": "boya2-12-28",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "更",
    "pinyin": "gèng",
    "sinoVietnamese": "canh",
    "meaning": "hơn",
    "partOfSpeech": "Phó từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/更.mp3",
    "exampleSentence": {
      "chinese": "今天更冷",
      "pinyin": "Jīn tiān gèng lěng",
      "vietnamese": "Hôm nay lạnh hơn"
    }
  },
  {
    "id": "boya2-12-29",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "保洁",
    "pinyin": "bǎojié",
    "sinoVietnamese": "bảo khiết",
    "meaning": "giữ gìn vệ sinh, làm sạch",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/保洁.mp3",
    "exampleSentence": {
      "chinese": "我们应该共同维护环境保洁。",
      "pinyin": "Wǒmen yīnggāi gòngtóng wéihù huánjìng bǎojié.",
      "vietnamese": "Chúng ta nên cùng nhau giữ gìn vệ sinh môi trường."
    }
  },
  {
    "id": "boya2-12-30",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "服务",
    "pinyin": "fúwù",
    "sinoVietnamese": "phục vụ",
    "meaning": "phục vụ, dịch vụ",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/服务.mp3",
    "exampleSentence": {
      "chinese": "这家餐厅的服务很好。",
      "pinyin": "Zhè jiā cāntīng de fúwù hěn hǎo.",
      "vietnamese": "Dịch vụ của nhà hàng này rất tốt."
    }
  },
  {
    "id": "boya2-12-31",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "贵姓",
    "pinyin": "guìxìng",
    "sinoVietnamese": "quý tính",
    "meaning": "quý danh (hỏi họ của người khác một cách lịch sự)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/贵姓.mp3",
    "exampleSentence": {
      "chinese": "请问您贵姓？",
      "pinyin": "Qǐngwèn nín guìxìng?",
      "vietnamese": "Xin hỏi quý danh của ngài là gì?"
    }
  },
  {
    "id": "boya2-12-32",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "免贵",
    "pinyin": "miǎnguì",
    "sinoVietnamese": "miễn quý",
    "meaning": "không dám (lời đáp lịch sự khi được hỏi quý danh)",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/免贵.mp3",
    "exampleSentence": {
      "chinese": "免贵姓张。",
      "pinyin": "Miǎnguì xìng Zhāng.",
      "vietnamese": "Không dám, tôi họ Trương."
    }
  },
  {
    "id": "boya2-12-33",
    "lesson": 12,
    "lessonTitle": "Bài 12: 搬家 (Chuyển nhà)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "西山",
    "pinyin": "Xīshān",
    "sinoVietnamese": "tây san, sơn",
    "meaning": "tây Sơn (tên địa danh)",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/西山.mp3",
    "exampleSentence": {
      "chinese": "我们周末去西山爬山。",
      "pinyin": "Wǒmen zhōumò qù Xīshān páshān.",
      "vietnamese": "Cuối tuần chúng tôi đi Tây Sơn leo núi."
    }
  },
  {
    "id": "boya2-13-1",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "比如",
    "pinyin": "bǐrú",
    "sinoVietnamese": "tỉ như",
    "meaning": "ví dụ",
    "partOfSpeech": "Động từ / Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/比如.mp3",
    "exampleSentence": {
      "chinese": "我喜欢很多水果，比如苹果、香蕉",
      "pinyin": "Wǒ xǐ huān hěn duō shuǐ guǒ, bǐ rú píng guǒ 、 xiāng jiāo",
      "vietnamese": "Tôi thích nhiều loại trái cây, ví dụ táo, chuối"
    }
  },
  {
    "id": "boya2-13-2",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "过",
    "pinyin": "guò",
    "sinoVietnamese": "quá",
    "meaning": "đã qua",
    "partOfSpeech": "Trợ từ / Động từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/过.mp3",
    "exampleSentence": {
      "chinese": "我吃过饭了",
      "pinyin": "Wǒ chī guò fàn le",
      "vietnamese": "Tôi đã ăn rồi"
    }
  },
  {
    "id": "boya2-13-3",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "一定",
    "pinyin": "yīdìng",
    "sinoVietnamese": "nhất định",
    "meaning": "nhất định",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一定.mp3",
    "exampleSentence": {
      "chinese": "我一定去",
      "pinyin": "Wǒ yī dìng qù",
      "vietnamese": "Tôi nhất định sẽ đi"
    }
  },
  {
    "id": "boya2-13-4",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "封",
    "pinyin": "fēng",
    "sinoVietnamese": "phong",
    "meaning": "phong thư",
    "partOfSpeech": "Danh từ / Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/封.mp3",
    "exampleSentence": {
      "chinese": "一封信",
      "pinyin": "Yī fēng xìn",
      "vietnamese": "Một bức thư"
    }
  },
  {
    "id": "boya2-13-5",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "信",
    "pinyin": "xìn",
    "sinoVietnamese": "tín",
    "meaning": "thư",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/信.mp3",
    "exampleSentence": {
      "chinese": "我收到了一封信",
      "pinyin": "Wǒ shōu dào le yī fēng xìn",
      "vietnamese": "Tôi đã nhận được một bức thư"
    }
  },
  {
    "id": "boya2-13-6",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "收到",
    "pinyin": "shōudào",
    "sinoVietnamese": "thu đáo",
    "meaning": "nhận được",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/收到.mp3",
    "exampleSentence": {
      "chinese": "我收到了你的礼物。",
      "pinyin": "Wǒ shōu dào le nǐ de lǐ wù.",
      "vietnamese": "Tôi đã nhận được quà của bạn."
    }
  },
  {
    "id": "boya2-13-7",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "一切",
    "pinyin": "yīqiè",
    "sinoVietnamese": "nhất thiết",
    "meaning": "tất cả",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一切.mp3",
    "exampleSentence": {
      "chinese": "一切都会好起来的。",
      "pinyin": "Yíqiè dōu huì hǎo qǐlái de.",
      "vietnamese": "Mọi thứ đều sẽ tốt lên."
    }
  },
  {
    "id": "boya2-13-8",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "去年",
    "pinyin": "qùnián",
    "sinoVietnamese": "khứ niên",
    "meaning": "năm ngoái",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/去年.mp3",
    "exampleSentence": {
      "chinese": "我去年去了中国",
      "pinyin": "Wǒ qùnián qùle Zhōngguó",
      "vietnamese": "Năm ngoái tôi đã đi Trung Quốc"
    }
  },
  {
    "id": "boya2-13-9",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "难过",
    "pinyin": "nánguò",
    "sinoVietnamese": "nan quá",
    "meaning": "buồn",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难过.mp3",
    "exampleSentence": {
      "chinese": "听到这个消息我很难过。",
      "pinyin": "Tīng dào zhè gè xiāo xī wǒ hěn nán guò.",
      "vietnamese": "Nghe tin này tôi rất buồn."
    }
  },
  {
    "id": "boya2-13-10",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "程度",
    "pinyin": "chéngdù",
    "sinoVietnamese": "trình độ",
    "meaning": "mức độ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/程度.mp3",
    "exampleSentence": {
      "chinese": "我对他的信任程度很高。",
      "pinyin": "Wǒ duì tā de xìn rèn chéng dù hěn gāo.",
      "vietnamese": "Mức độ tin tưởng của tôi đối với anh ấy rất cao."
    }
  },
  {
    "id": "boya2-13-11",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "提高",
    "pinyin": "tígāo",
    "sinoVietnamese": "đề cao",
    "meaning": "tăng, nâng cao",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/提高.mp3",
    "exampleSentence": {
      "chinese": "提高水平",
      "pinyin": "Tí gāo shuǐ píng",
      "vietnamese": "Nâng cao trình độ"
    }
  },
  {
    "id": "boya2-13-12",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "交",
    "pinyin": "jiāo",
    "sinoVietnamese": "giao",
    "meaning": "kết bạn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/交.mp3",
    "exampleSentence": {
      "chinese": "请交作业",
      "pinyin": "Qǐng jiāo zuò yè",
      "vietnamese": "Vui lòng nộp bài tập"
    }
  },
  {
    "id": "boya2-13-13",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "不但",
    "pinyin": "bùdàn",
    "sinoVietnamese": "bất đãn",
    "meaning": "không chỉ",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不但.mp3",
    "exampleSentence": {
      "chinese": "不但聪明，而且努力",
      "pinyin": "Bù dàn cōng míng, ér qiě nǔ lì",
      "vietnamese": "Không chỉ thông minh mà còn chăm chỉ"
    }
  },
  {
    "id": "boya2-13-14",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "而且",
    "pinyin": "érqiě",
    "sinoVietnamese": "nhi thả",
    "meaning": "ngoài ra",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/而且.mp3",
    "exampleSentence": {
      "chinese": "这件衣服便宜，而且很好看",
      "pinyin": "Zhè jiàn yī fú biàn yí, ér qiě hěn hǎo kàn",
      "vietnamese": "Cái áo này rẻ, hơn nữa lại rất đẹp"
    }
  },
  {
    "id": "boya2-13-15",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "世界",
    "pinyin": "shìjiè",
    "sinoVietnamese": "thế giới",
    "meaning": "thế giới",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/世界.mp3",
    "exampleSentence": {
      "chinese": "我想去世界各地旅游。",
      "pinyin": "Wǒ xiǎng qù shìjiè gèdì lǚyóu.",
      "vietnamese": "Tôi muốn du lịch khắp thế giới."
    }
  },
  {
    "id": "boya2-13-16",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "各",
    "pinyin": "gè",
    "sinoVietnamese": "các",
    "meaning": "mỗi",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/各.mp3",
    "exampleSentence": {
      "chinese": "各国都有自己的文化传统。",
      "pinyin": "Gè guó dōu yǒu zìjǐ de wénhuà chuántǒng.",
      "vietnamese": "Mỗi quốc gia đều có truyền thống văn hóa riêng."
    }
  },
  {
    "id": "boya2-13-17",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "互相",
    "pinyin": "hùxiāng",
    "sinoVietnamese": "hỗ tương",
    "meaning": "lẫn nhau",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/互相.mp3",
    "exampleSentence": {
      "chinese": "我们应该互相帮助，互相学习。",
      "pinyin": "Wǒmen yīnggāi hùxiāng bāngzhù, hùxiāng xuéxí.",
      "vietnamese": "Chúng ta nên giúp đỡ lẫn nhau, học hỏi lẫn nhau."
    }
  },
  {
    "id": "boya2-13-18",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "越来越",
    "pinyin": "yuèláiyuè",
    "sinoVietnamese": "việt lai việt",
    "meaning": "càng ngày càng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/越来越.mp3",
    "exampleSentence": {
      "chinese": "天气越来越冷",
      "pinyin": "Tiān qì yuè lái yuè lěng",
      "vietnamese": "Thời tiết càng ngày càng lạnh"
    }
  },
  {
    "id": "boya2-13-19",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "分之",
    "pinyin": "fēnzhī",
    "sinoVietnamese": "phân chi",
    "meaning": "phân số",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分之.mp3",
    "exampleSentence": {
      "chinese": "这个分之很好。",
      "pinyin": "Zhè gè fēn zhī hěn hǎo.",
      "vietnamese": "phân số này rất tốt."
    }
  },
  {
    "id": "boya2-13-20",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "进行",
    "pinyin": "jìnxíng",
    "sinoVietnamese": "tiến hành",
    "meaning": "tiến hành",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/进行.mp3",
    "exampleSentence": {
      "chinese": "会议正在进行",
      "pinyin": "Huì yì zhèng zài jìn xíng",
      "vietnamese": "Hội nghị đang tiến hành"
    }
  },
  {
    "id": "boya2-13-21",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "将来",
    "pinyin": "jiānglái",
    "sinoVietnamese": "tương lai",
    "meaning": "tương lai",
    "partOfSpeech": "Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/将来.mp3",
    "exampleSentence": {
      "chinese": "你将来想做什么工作？",
      "pinyin": "Nǐ jiānglái xiǎng zuò shénme gōngzuò?",
      "vietnamese": "Tương lai bạn muốn làm công việc gì?"
    }
  },
  {
    "id": "boya2-13-22",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "基本",
    "pinyin": "jīběn",
    "sinoVietnamese": "cơ bản",
    "meaning": "cơ bản",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/基本.mp3",
    "exampleSentence": {
      "chinese": "我们基本完成了任务。",
      "pinyin": "Wǒ men jī běn wán chéng le rèn wù.",
      "vietnamese": "Chúng ta cơ bản đã hoàn thành nhiệm vụ."
    }
  },
  {
    "id": "boya2-13-23",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "菜单",
    "pinyin": "càidān",
    "sinoVietnamese": "thái đơn",
    "meaning": "thực đơn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/菜单.mp3",
    "exampleSentence": {
      "chinese": "请给我菜单",
      "pinyin": "Qǐng gěi wǒ cài dān",
      "vietnamese": "Cho tôi thực đơn"
    }
  },
  {
    "id": "boya2-13-24",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "中餐",
    "pinyin": "zhōngcān",
    "sinoVietnamese": "trung xan",
    "meaning": "ẩm thực Trung Quốc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/中餐.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃中餐",
      "pinyin": "Wǒ xǐ huān chī zhōng cān",
      "vietnamese": "Tôi thích ăn món Trung Quốc"
    }
  },
  {
    "id": "boya2-13-25",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "地道",
    "pinyin": "dìdao",
    "sinoVietnamese": "địa đạo",
    "meaning": "đích thực",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/地道.mp3",
    "exampleSentence": {
      "chinese": "他能说一口非常流利且地道的英语。",
      "pinyin": "tā néng shuō yì kǒu fēi cháng liú lì qiě dì dao de yīng yǔ.",
      "vietnamese": "Anh ấy có thể nói một giọng tiếng Anh rất trôi chảy và chuẩn."
    }
  },
  {
    "id": "boya2-13-26",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "今年",
    "pinyin": "jīnnián",
    "sinoVietnamese": "kim niên",
    "meaning": "năm nay",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/今年.mp3",
    "exampleSentence": {
      "chinese": "我今年二十岁",
      "pinyin": "Wǒ jīnnián èrshí suì",
      "vietnamese": "Năm nay tôi 20 tuổi"
    }
  },
  {
    "id": "boya2-13-27",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "延长",
    "pinyin": "yáncháng",
    "sinoVietnamese": "diên trường",
    "meaning": "kéo dài",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/延长.mp3",
    "exampleSentence": {
      "chinese": "会议延长了一小时。",
      "pinyin": "Huìyì yáncháng le yī xiǎoshí.",
      "vietnamese": "Cuộc họp kéo dài thêm một tiếng."
    }
  },
  {
    "id": "boya2-13-28",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "明年",
    "pinyin": "míngnián",
    "sinoVietnamese": "minh niên",
    "meaning": "năm sau",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/明年.mp3",
    "exampleSentence": {
      "chinese": "明年我去中国",
      "pinyin": "Míngnián wǒ qù Zhōngguó",
      "vietnamese": "Năm sau tôi đi Trung Quốc"
    }
  },
  {
    "id": "boya2-13-29",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "了解",
    "pinyin": "liǎojiě",
    "sinoVietnamese": "liễu giải",
    "meaning": "hiểu rõ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/了解.mp3",
    "exampleSentence": {
      "chinese": "这个了解很好。",
      "pinyin": "Zhè gè le jiě hěn hǎo.",
      "vietnamese": "hiểu rõ này rất tốt."
    }
  },
  {
    "id": "boya2-13-30",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "文化",
    "pinyin": "wénhuà",
    "sinoVietnamese": "văn hóa",
    "meaning": "văn hóa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/文化.mp3",
    "exampleSentence": {
      "chinese": "中国有五千年的文化。",
      "pinyin": "Zhōngguó yǒu wǔqiān nián de wénhuà.",
      "vietnamese": "Trung Quốc có năm nghìn năm văn hóa."
    }
  },
  {
    "id": "boya2-13-31",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "健康",
    "pinyin": "jiànkāng",
    "sinoVietnamese": "kiện khang",
    "meaning": "khỏe mạnh; sức khỏe",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/健康.mp3",
    "exampleSentence": {
      "chinese": "祝你健康",
      "pinyin": "Zhù nǐ jiàn kāng",
      "vietnamese": "Chúc bạn khỏe mạnh"
    }
  },
  {
    "id": "boya2-13-32",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "简化字",
    "pinyin": "jiǎnhuàzì",
    "sinoVietnamese": "giản hóa tự",
    "meaning": "chữ giản thể",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/简化字.mp3",
    "exampleSentence": {
      "chinese": "我正在学习简化字。",
      "pinyin": "Wǒ zhèngzài xuéxí jiǎnhuàzì.",
      "vietnamese": "Tôi đang học chữ giản thể."
    }
  },
  {
    "id": "boya2-13-33",
    "lesson": 13,
    "lessonTitle": "Bài 13: 一封信 (Một bức thư)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "会话",
    "pinyin": "huìhuà",
    "sinoVietnamese": "hội thoại",
    "meaning": "hội thoại, đối thoại",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/会话.mp3",
    "exampleSentence": {
      "chinese": "我们的会话很有趣。",
      "pinyin": "Wǒmen de huìhuà hěn yǒuqù.",
      "vietnamese": "Cuộc hội thoại của chúng tôi rất thú vị."
    }
  },
  {
    "id": "boya2-14-1",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "算",
    "pinyin": "suàn",
    "sinoVietnamese": "toán",
    "meaning": "đếm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/算.mp3",
    "exampleSentence": {
      "chinese": "让我算一下这次旅行要花多少钱。",
      "pinyin": "ràng wǒ suàn yī xià zhè cì lǚ xíng yào huā duō shǎo qián.",
      "vietnamese": "Để tôi tính một chút xem chuyến du lịch lần này tốn bao nhiêu tiền."
    }
  },
  {
    "id": "boya2-14-2",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "加",
    "pinyin": "jiā",
    "sinoVietnamese": "gia",
    "meaning": "cộng; thêm vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/加.mp3",
    "exampleSentence": {
      "chinese": "喝咖啡的时候请帮我加一点糖。",
      "pinyin": "Hē kāfēi de shíhou qǐng bāng wǒ jiā yìdiǎnr táng.",
      "vietnamese": "Lúc uống cà phê xin hãy cho thêm một chút đường giúp tôi."
    }
  },
  {
    "id": "boya2-14-3",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "画家",
    "pinyin": "huàjiā",
    "sinoVietnamese": "họa gia",
    "meaning": "họa sĩ, nghệ sĩ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/画家.mp3",
    "exampleSentence": {
      "chinese": "他是一位著名的画家",
      "pinyin": "Tā shì yī wèi zhù míng de huà jiā",
      "vietnamese": "Anh ấy là một họa sĩ nổi tiếng"
    }
  },
  {
    "id": "boya2-14-4",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "美术",
    "pinyin": "měishù",
    "sinoVietnamese": "mĩ thuật",
    "meaning": "nghệ thuật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/美术.mp3",
    "exampleSentence": {
      "chinese": "她在美术学院学习。",
      "pinyin": "Tā zài měishù xuéyuàn xuéxí.",
      "vietnamese": "Cô ấy học tại trường đại học mỹ thuật."
    }
  },
  {
    "id": "boya2-14-5",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "得",
    "pinyin": "de",
    "sinoVietnamese": "đắc",
    "meaning": "được",
    "partOfSpeech": "Động từ / Trợ từ / Trợ động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/得.mp3",
    "exampleSentence": {
      "chinese": "我得到了好消息",
      "pinyin": "Wǒ dé dào le hǎo xiāo xī",
      "vietnamese": "Tôi đã nhận được tin tốt"
    }
  },
  {
    "id": "boya2-14-6",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "成功",
    "pinyin": "chénggōng",
    "sinoVietnamese": "thành công",
    "meaning": "thành công",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/成功.mp3",
    "exampleSentence": {
      "chinese": "祝贺你取得成功！",
      "pinyin": "Zhù hè nǐ qǔ dé chéng gōng ！",
      "vietnamese": "Chúc mừng bạn đã thành công!"
    }
  },
  {
    "id": "boya2-14-7",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "以为",
    "pinyin": "yǐwéi",
    "sinoVietnamese": "dĩ vi",
    "meaning": "nghĩ rằng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/以为.mp3",
    "exampleSentence": {
      "chinese": "我以为你知道",
      "pinyin": "Wǒ yǐ wèi nǐ zhī dào",
      "vietnamese": "Tôi nghĩ rằng bạn biết rồi"
    }
  },
  {
    "id": "boya2-14-8",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "事情",
    "pinyin": "shìqing",
    "sinoVietnamese": "sự tình",
    "meaning": "việc, sự kiện",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/事情.mp3",
    "exampleSentence": {
      "chinese": "我有重要的事情要告诉你。",
      "pinyin": "Wǒ yǒu zhòng yào de shì qíng yào gào sù nǐ.",
      "vietnamese": "Tôi có việc quan trọng muốn nói cho bạn biết."
    }
  },
  {
    "id": "boya2-14-9",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "其实",
    "pinyin": "qíshí",
    "sinoVietnamese": "kỳ thực",
    "meaning": "thực ra",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/其实.mp3",
    "exampleSentence": {
      "chinese": "其实我不同意你的看法。",
      "pinyin": "Qí shí wǒ bù tóng yì nǐ de kàn fǎ.",
      "vietnamese": "Thực ra tôi không đồng ý với quan điểm của bạn."
    }
  },
  {
    "id": "boya2-14-10",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "只要",
    "pinyin": "zhǐyào",
    "sinoVietnamese": "chỉ yếu",
    "meaning": "miễn là",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/只要.mp3",
    "exampleSentence": {
      "chinese": "只要你来就好",
      "pinyin": "Zhǐ yào nǐ lái jiù hǎo",
      "vietnamese": "Miễn là bạn đến là tốt"
    }
  },
  {
    "id": "boya2-14-11",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "坚持",
    "pinyin": "jiānchí",
    "sinoVietnamese": "kiên trì",
    "meaning": "kiên trì",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坚持.mp3",
    "exampleSentence": {
      "chinese": "我们要坚持学习。",
      "pinyin": "Wǒ men yào jiān chí xué xí.",
      "vietnamese": "Chúng ta phải kiên trì học tập."
    }
  },
  {
    "id": "boya2-14-12",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "理想",
    "pinyin": "lǐxiǎng",
    "sinoVietnamese": "lí tưởng",
    "meaning": "lý tưởng",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/理想.mp3",
    "exampleSentence": {
      "chinese": "这是我的理想",
      "pinyin": "Zhè shì wǒ de lǐ xiǎng",
      "vietnamese": "Đây là lý tưởng của tôi"
    }
  },
  {
    "id": "boya2-14-13",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "实现",
    "pinyin": "shíxiàn",
    "sinoVietnamese": "thực hiện",
    "meaning": "đạt được",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实现.mp3",
    "exampleSentence": {
      "chinese": "梦想实现了",
      "pinyin": "Mèng xiǎng shí xiàn le",
      "vietnamese": "Giấc mơ đã thành hiện thực"
    }
  },
  {
    "id": "boya2-14-14",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "画",
    "pinyin": "huà",
    "sinoVietnamese": "họa",
    "meaning": "bức tranh, vẽ",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/画.mp3",
    "exampleSentence": {
      "chinese": "墙上有一幅画",
      "pinyin": "Qiáng shàng yǒu yī fú huà",
      "vietnamese": "Trên tường có một bức tranh"
    }
  },
  {
    "id": "boya2-14-15",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "高中",
    "pinyin": "gāozhōng",
    "sinoVietnamese": "cao trung",
    "meaning": "trường trung học phổ thông",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/高中.mp3",
    "exampleSentence": {
      "chinese": "他在上高中",
      "pinyin": "Tā zài shàng gāo zhōng",
      "vietnamese": "Anh ấy đang học phổ thông"
    }
  },
  {
    "id": "boya2-14-16",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "年级",
    "pinyin": "niánjí",
    "sinoVietnamese": "niên cấp",
    "meaning": "lớp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/年级.mp3",
    "exampleSentence": {
      "chinese": "我上二年级",
      "pinyin": "Wǒ shàng èr nián jí",
      "vietnamese": "Tôi học lớp hai"
    }
  },
  {
    "id": "boya2-14-17",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "暂时",
    "pinyin": "zànshí",
    "sinoVietnamese": "tạm thì",
    "meaning": "tạm thời",
    "partOfSpeech": "Phó từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/暂时.mp3",
    "exampleSentence": {
      "chinese": "这个问题我们暂时还没有解决方案。",
      "pinyin": "Zhè ge wèntí wǒmen zànshí hái méiyǒu jiějué fāng'àn.",
      "vietnamese": "Vấn đề này chúng tôi tạm thời vẫn chưa có phương án giải quyết."
    }
  },
  {
    "id": "boya2-14-18",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "停止",
    "pinyin": "tíngzhǐ",
    "sinoVietnamese": "đình chỉ",
    "meaning": "dừng lại",
    "partOfSpeech": "Động từ (action verb)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/停止.mp3",
    "exampleSentence": {
      "chinese": "雨停了，我们可以走了。",
      "pinyin": "Yǔ tíng le, wǒmen kěyǐ zǒu le.",
      "vietnamese": "Mưa đã tạnh, chúng ta có thể đi rồi."
    }
  },
  {
    "id": "boya2-14-19",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "当",
    "pinyin": "dāng",
    "sinoVietnamese": "đương",
    "meaning": "trở thành, là, làm việc",
    "partOfSpeech": "Động từ / Giới từ / Trợ động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/当.mp3",
    "exampleSentence": {
      "chinese": "我想当医生",
      "pinyin": "Wǒ xiǎng dāng yī shēng",
      "vietnamese": "Tôi muốn làm bác sĩ"
    }
  },
  {
    "id": "boya2-14-20",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "辞",
    "pinyin": "cí",
    "sinoVietnamese": "từ",
    "meaning": "sa thải",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辞.mp3",
    "exampleSentence": {
      "chinese": "他上个月辞职了，打算自己创业。",
      "pinyin": "Tā shàng ge yuè cízhí le, dǎsuàn zìjǐ chuàngyè.",
      "vietnamese": "Tháng trước anh ấy đã từ chức, dự định tự mình khởi nghiệp."
    }
  },
  {
    "id": "boya2-14-21",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "游览",
    "pinyin": "yóulǎn",
    "sinoVietnamese": "du lãm",
    "meaning": "đi tham quan",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/游览.mp3",
    "exampleSentence": {
      "chinese": "我们计划下个月去北京游览万里长城。",
      "pinyin": "wǒ men jì huà xià gè yuè qù běi jīng yóu lǎn wàn lǐ cháng chéng.",
      "vietnamese": "Chúng tôi lên kế hoạch tháng sau đi Bắc Kinh tham quan Vạn Lý Trường Thành."
    }
  },
  {
    "id": "boya2-14-22",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "正好",
    "pinyin": "zhènghǎo",
    "sinoVietnamese": "chính hảo",
    "meaning": "vừa đúng",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/正好.mp3",
    "exampleSentence": {
      "chinese": "时间正好",
      "pinyin": "Shí jiān zhèng hǎo",
      "vietnamese": "Thời gian vừa đúng"
    }
  },
  {
    "id": "boya2-14-23",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "专门",
    "pinyin": "zhuānmén",
    "sinoVietnamese": "chuyên môn",
    "meaning": "chuyên môn",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/专门.mp3",
    "exampleSentence": {
      "chinese": "他是专门研究中国历史的专家。",
      "pinyin": "Tā shì zhuānmén yánjiū Zhōngguó lìshǐ de zhuānjiā.",
      "vietnamese": "Anh ấy là chuyên gia nghiên cứu lịch sử Trung Quốc."
    }
  },
  {
    "id": "boya2-14-24",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "奖",
    "pinyin": "jiǎng",
    "sinoVietnamese": "tưởng",
    "meaning": "thưởng; giải thưởng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/奖.mp3",
    "exampleSentence": {
      "chinese": "他在中文演讲比赛中获得了一等奖。",
      "pinyin": "Tā zài Zhōngwén yǎnjiǎng bǐsài zhōng huòdé le yìděngjiǎng.",
      "vietnamese": "Cậu ấy đã đạt giải nhất trong cuộc thi hùng biện tiếng Hán."
    }
  },
  {
    "id": "boya2-14-25",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "小时候",
    "pinyin": "xiǎoshíhou",
    "sinoVietnamese": "tiểu thì hậu",
    "meaning": "hồi nhỏ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小时候.mp3",
    "exampleSentence": {
      "chinese": "我小时候住在这里",
      "pinyin": "Wǒ xiǎo shí hòu zhù zài zhè lǐ",
      "vietnamese": "Hồi nhỏ tôi sống ở đây"
    }
  },
  {
    "id": "boya2-14-26",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "产生",
    "pinyin": "chǎnshēng",
    "sinoVietnamese": "sản sinh, sanh",
    "meaning": "sản xuất",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/产生.mp3",
    "exampleSentence": {
      "chinese": "这项决定产生了很大影响。",
      "pinyin": "Zhè xiàng jué dìng chǎn shēng le hěn dà yǐng xiǎng.",
      "vietnamese": "Quyết định này đã tạo ra ảnh hưởng lớn."
    }
  },
  {
    "id": "boya2-14-27",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "等于",
    "pinyin": "děngyú",
    "sinoVietnamese": "đẳng vu",
    "meaning": "bằng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/等于.mp3",
    "exampleSentence": {
      "chinese": "一加一等于二",
      "pinyin": "Yī jiā yī děng yú èr",
      "vietnamese": "Một cộng một bằng hai"
    }
  },
  {
    "id": "boya2-14-28",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "零",
    "pinyin": "líng",
    "sinoVietnamese": "linh",
    "meaning": "không",
    "partOfSpeech": "Số từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/零.mp3",
    "exampleSentence": {
      "chinese": "零度",
      "pinyin": "líng dù",
      "vietnamese": "không độ"
    }
  },
  {
    "id": "boya2-14-29",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "其他",
    "pinyin": "qítā",
    "sinoVietnamese": "kỳ tha",
    "meaning": "khác",
    "partOfSpeech": "Tính từ / Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/其他.mp3",
    "exampleSentence": {
      "chinese": "其他人",
      "pinyin": "Qí tā rén",
      "vietnamese": "những người khác"
    }
  },
  {
    "id": "boya2-14-30",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "看法",
    "pinyin": "kànfǎ",
    "sinoVietnamese": "khán pháp",
    "meaning": "quan điểm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/看法.mp3",
    "exampleSentence": {
      "chinese": "我对这件事有不同的看法",
      "pinyin": "Wǒ duì zhè jiàn shì yǒu bù tóng de kàn fǎ",
      "vietnamese": "Tôi có cách nhìn khác về việc này"
    }
  },
  {
    "id": "boya2-14-31",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "祝贺",
    "pinyin": "zhùhè",
    "sinoVietnamese": "chúc hạ",
    "meaning": "chúc mừng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/祝贺.mp3",
    "exampleSentence": {
      "chinese": "我祝贺你成功！",
      "pinyin": "Wǒ zhùhè nǐ chénggōng!",
      "vietnamese": "Tôi chúc mừng bạn thành công!"
    }
  },
  {
    "id": "boya2-14-32",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "鼠",
    "pinyin": "shǔ",
    "sinoVietnamese": "thử",
    "meaning": "chuột",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/鼠.mp3",
    "exampleSentence": {
      "chinese": "小猫正在抓一只小老鼠。",
      "pinyin": "Xiǎomāo zhèngzài zhuā yì zhī xiǎolǎoshǔ.",
      "vietnamese": "Chú mèo con đang bắt một con chuột nhỏ."
    }
  },
  {
    "id": "boya2-14-33",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "排",
    "pinyin": "pái",
    "sinoVietnamese": "bài",
    "meaning": "xếp hàng",
    "partOfSpeech": "Danh từ / Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/排.mp3",
    "exampleSentence": {
      "chinese": "前排的人",
      "pinyin": "Qián pái de rén",
      "vietnamese": "Người ở hàng trước"
    }
  },
  {
    "id": "boya2-14-34",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "必须",
    "pinyin": "bìxū",
    "sinoVietnamese": "tất tu",
    "meaning": "phải",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/必须.mp3",
    "exampleSentence": {
      "chinese": "你必须去",
      "pinyin": "Nǐ bì xū qù",
      "vietnamese": "Bạn phải đi"
    }
  },
  {
    "id": "boya2-14-35",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "出现",
    "pinyin": "chūxiàn",
    "sinoVietnamese": "xuất hiện",
    "meaning": "xuất hiện",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出现.mp3",
    "exampleSentence": {
      "chinese": "问题出现了",
      "pinyin": "Wèn tí chū xiàn le",
      "vietnamese": "Vấn đề đã xuất hiện"
    }
  },
  {
    "id": "boya2-14-36",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "吓",
    "pinyin": "xià",
    "sinoVietnamese": "hách",
    "meaning": "dọa",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吓.mp3",
    "exampleSentence": {
      "chinese": "突然传来的巨响把屋里的人都吓了一跳。",
      "pinyin": "tū rán chuán lái de jù xiǎng bǎ wū lǐ de rén dōu xià le yī tiào.",
      "vietnamese": "Tiếng động lớn đột ngột truyền đến làm mọi người trong nhà đều giật nảy mình."
    }
  },
  {
    "id": "boya2-14-37",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "呆",
    "pinyin": "dāi",
    "sinoVietnamese": "ngai",
    "meaning": "ở lại",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/呆.mp3",
    "exampleSentence": {
      "chinese": "我打算在家里多呆几天。",
      "pinyin": "wǒ dǎ suàn zài jiā lǐ duō dāi jǐ tiān.",
      "vietnamese": "Tôi dự định ở lại nhà thêm vài ngày."
    }
  },
  {
    "id": "boya2-14-38",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "糊涂",
    "pinyin": "hútu",
    "sinoVietnamese": "hồ đồ",
    "meaning": "ngu ngốc",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/糊涂.mp3",
    "exampleSentence": {
      "chinese": "我今天真糊涂，竟然把钱包丢了。",
      "pinyin": "wǒ jīn tiān zhēn hú tu, jìng rán bǎ qián bāo diū le.",
      "vietnamese": "Hôm nay tôi thật ngốc nghếch, lại có thể làm mất ví tiền."
    }
  },
  {
    "id": "boya2-14-39",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "洞",
    "pinyin": "dòng",
    "sinoVietnamese": "động",
    "meaning": "lỗ",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/洞.mp3",
    "exampleSentence": {
      "chinese": "小兔子跑进了树洞里。",
      "pinyin": "Xiǎotùzi pǎo jìn le shù dòng lǐ.",
      "vietnamese": "Chú thỏ con đã chạy vào trong hốc cây."
    }
  },
  {
    "id": "boya2-14-40",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "一齐",
    "pinyin": "yīqí",
    "sinoVietnamese": "nhất tề",
    "meaning": "cùng nhau",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一齐.mp3",
    "exampleSentence": {
      "chinese": "大家一齐鼓掌，场面非常热烈。",
      "pinyin": "Dàjiā yīqí gǔzhǎng, chǎngmiàn fēicháng rèliè.",
      "vietnamese": "Mọi người đồng loạt vỗ tay, không khí rất sôi nổi."
    }
  },
  {
    "id": "boya2-14-41",
    "lesson": 14,
    "lessonTitle": "Bài 14: 成功需要多长时间 (Thành công cần bao nhiêu thời gian)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "画笔",
    "pinyin": "huàbǐ",
    "sinoVietnamese": "họa bút",
    "meaning": "cọ vẽ, bút vẽ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/画笔.mp3",
    "exampleSentence": {
      "chinese": "他拿起画笔开始画画。",
      "pinyin": "Tā ná qǐ huàbǐ kāishǐ huàhuà.",
      "vietnamese": "Anh ấy cầm cọ vẽ lên và bắt đầu vẽ."
    }
  },
  {
    "id": "boya2-15-1",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "块",
    "pinyin": "kuài",
    "sinoVietnamese": "khối",
    "meaning": "miếng",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/块.mp3",
    "exampleSentence": {
      "chinese": "一块钱",
      "pinyin": "yí kuài qián",
      "vietnamese": "một đồng (tiền)"
    }
  },
  {
    "id": "boya2-15-2",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "上",
    "pinyin": "shàng",
    "sinoVietnamese": "thượng",
    "meaning": "trên",
    "partOfSpeech": "Từ chỉ phương vị / Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/上.mp3",
    "exampleSentence": {
      "chinese": "桌子上有书",
      "pinyin": "Zhuōzi shàng yǒu shū",
      "vietnamese": "Trên bàn có sách"
    }
  },
  {
    "id": "boya2-15-3",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "利用",
    "pinyin": "lìyòng",
    "sinoVietnamese": "lợi dụng",
    "meaning": "sử dụng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/利用.mp3",
    "exampleSentence": {
      "chinese": "我们要充分利用时间。",
      "pinyin": "Wǒ men yào chōng fēn lì yòng shí jiān.",
      "vietnamese": "Chúng ta phải tận dụng thời gian."
    }
  },
  {
    "id": "boya2-15-4",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "讲",
    "pinyin": "jiǎng",
    "sinoVietnamese": "giảng",
    "meaning": "nói, kể",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/讲.mp3",
    "exampleSentence": {
      "chinese": "老师在讲课",
      "pinyin": "Lǎo shī zài jiǎng kè",
      "vietnamese": "Thầy giáo đang giảng bài"
    }
  },
  {
    "id": "boya2-15-5",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "饭店",
    "pinyin": "fàndiàn",
    "sinoVietnamese": "phạn điếm",
    "meaning": "nhà hàng, khách sạn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/饭店.mp3",
    "exampleSentence": {
      "chinese": "我们去饭店吃饭。",
      "pinyin": "Wǒmen qù fàndiàn chīfàn.",
      "vietnamese": "Chúng tôi đi nhà hàng ăn cơm."
    }
  },
  {
    "id": "boya2-15-6",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "立",
    "pinyin": "lì",
    "sinoVietnamese": "lập",
    "meaning": "đứng",
    "partOfSpeech": "Động từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/立.mp3",
    "exampleSentence": {
      "chinese": "校门口立着一块石碑。",
      "pinyin": "Xiào ménkǒu lì zhe yí kuài shíbēi.",
      "vietnamese": "Trước cổng trường dựng một tấm bia đá."
    }
  },
  {
    "id": "boya2-15-7",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "牌子",
    "pinyin": "páizi",
    "sinoVietnamese": "bài tử",
    "meaning": "bảng hiệu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牌子.mp3",
    "exampleSentence": {
      "chinese": "这家店的牌子很大。",
      "pinyin": "Zhè jiā diàn de pái zi hěn dà.",
      "vietnamese": "Cửa hàng này có thương hiệu lớn."
    }
  },
  {
    "id": "boya2-15-8",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "周到",
    "pinyin": "zhōudào",
    "sinoVietnamese": "chu, châu đáo",
    "meaning": "chu đáo",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/周到.mp3",
    "exampleSentence": {
      "chinese": "这家酒店的服务非常周到。",
      "pinyin": "zhè jiā jiǔ diàn de fú wù fēi cháng zhōu dào.",
      "vietnamese": "Dịch vụ của khách sạn này vô cùng chu đáo."
    }
  },
  {
    "id": "boya2-15-9",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "经济",
    "pinyin": "jīngjì",
    "sinoVietnamese": "kinh tế",
    "meaning": "kinh tế",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/经济.mp3",
    "exampleSentence": {
      "chinese": "经济发展很快。",
      "pinyin": "Jīngjì fāzhǎn hěn kuài.",
      "vietnamese": "Kinh tế phát triển rất nhanh."
    }
  },
  {
    "id": "boya2-15-10",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "实惠",
    "pinyin": "shíhuì",
    "sinoVietnamese": "thực huệ",
    "meaning": "hữu ích",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实惠.mp3",
    "exampleSentence": {
      "chinese": "这种水果既实惠又好吃",
      "pinyin": "zhè zhǒng shuǐ guǒ jì shí huì yòu hǎo chī",
      "vietnamese": "Loại trái cây này vừa hữu ích vừa ngon"
    }
  },
  {
    "id": "boya2-15-11",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "午饭",
    "pinyin": "wǔfàn",
    "sinoVietnamese": "ngọ phạn",
    "meaning": "bữa trưa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/午饭.mp3",
    "exampleSentence": {
      "chinese": "我吃午饭。",
      "pinyin": "Wǒ chī wǔfàn.",
      "vietnamese": "Tôi ăn cơm trưa."
    }
  },
  {
    "id": "boya2-15-12",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "里边",
    "pinyin": "lǐbiān",
    "sinoVietnamese": "lí biên",
    "meaning": "bên trong",
    "partOfSpeech": "Từ chỉ phương vị / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/里边.mp3",
    "exampleSentence": {
      "chinese": "屋里边有很多人",
      "pinyin": "Wū lǐbiān yǒu hěnduō rén",
      "vietnamese": "Trong phòng có rất nhiều người"
    }
  },
  {
    "id": "boya2-15-13",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "蜡烛",
    "pinyin": "làzhú",
    "sinoVietnamese": "lạp chúc",
    "meaning": "nến",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/蜡烛.mp3",
    "exampleSentence": {
      "chinese": "停电了，妈妈点燃了一支蜡烛。",
      "pinyin": "tíng diàn le, mā ma diǎn rán le yì zhī là zhú.",
      "vietnamese": "Mất điện rồi, mẹ thắp lên một cây nến."
    }
  },
  {
    "id": "boya2-15-14",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "安静",
    "pinyin": "ānjìng",
    "sinoVietnamese": "an tĩnh",
    "meaning": "yên tĩnh, bình yên",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/安静.mp3",
    "exampleSentence": {
      "chinese": "图书馆里很安静。",
      "pinyin": "Tú shū guǎn lǐ hěn ān jìng.",
      "vietnamese": "Trong thư viện rất yên tĩnh."
    }
  },
  {
    "id": "boya2-15-15",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "外衣",
    "pinyin": "wàiyī",
    "sinoVietnamese": "ngoại y",
    "meaning": "áo khoác",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/外衣.mp3",
    "exampleSentence": {
      "chinese": "天气变冷了，记得穿外衣",
      "pinyin": "Tiānqì biàn lěng le, jìde chuān wàiyī",
      "vietnamese": "Trời trở lạnh rồi, nhớ mặc áo khoác ngoài"
    }
  },
  {
    "id": "boya2-15-16",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "边",
    "pinyin": "biān",
    "sinoVietnamese": "biên",
    "meaning": "bên",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị / Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/边.mp3",
    "exampleSentence": {
      "chinese": "在边上看",
      "pinyin": "Zài biān shàng kàn",
      "vietnamese": "Nhìn từ bên cạnh"
    }
  },
  {
    "id": "boya2-15-17",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "座位",
    "pinyin": "zuòwèi",
    "sinoVietnamese": "tọa vị",
    "meaning": "chỗ ngồi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/座位.mp3",
    "exampleSentence": {
      "chinese": "这是我的座位",
      "pinyin": "Zhè shì wǒ de zuò wèi",
      "vietnamese": "Đây là chỗ ngồi của tôi"
    }
  },
  {
    "id": "boya2-15-18",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "过来",
    "pinyin": "guòlai",
    "sinoVietnamese": "quá lai",
    "meaning": "đến đây",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/过来.mp3",
    "exampleSentence": {
      "chinese": "请过来一下。",
      "pinyin": "Qǐng guò lái yī xià.",
      "vietnamese": "Làm ơn qua đây một chút."
    }
  },
  {
    "id": "boya2-15-19",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "拳",
    "pinyin": "quán",
    "sinoVietnamese": "quyền",
    "meaning": "nắm đấm",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拳.mp3",
    "exampleSentence": {
      "chinese": "他挥动拳头表达自己的力量。",
      "pinyin": "Tā huīdòng quántou biǎodá zìjǐ de lìliang.",
      "vietnamese": "Cậu ấy vung nắm đấm thể hiện sức mạnh của mình."
    }
  },
  {
    "id": "boya2-15-20",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "靠",
    "pinyin": "kào",
    "sinoVietnamese": "kháo",
    "meaning": "phụ thuộc vào",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/靠.mp3",
    "exampleSentence": {
      "chinese": "靠自己",
      "pinyin": "Kào zì jǐ",
      "vietnamese": "Tự lực cánh sinh"
    }
  },
  {
    "id": "boya2-15-21",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "敢",
    "pinyin": "gǎn",
    "sinoVietnamese": "cảm",
    "meaning": "dám",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/敢.mp3",
    "exampleSentence": {
      "chinese": "你敢去吗？",
      "pinyin": "Nǐ gǎn qù ma ？",
      "vietnamese": "Bạn dám đi không?"
    }
  },
  {
    "id": "boya2-15-22",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "忍",
    "pinyin": "rěn",
    "sinoVietnamese": "nhẫn",
    "meaning": "chịu đựng",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忍.mp3",
    "exampleSentence": {
      "chinese": "牙疼得厉害，他实在忍不住了。",
      "pinyin": "Yá téng de lìhai, tā shízài rěn bu zhù le.",
      "vietnamese": "Đau răng dữ dội, anh ấy thực sự không chịu nổi nữa."
    }
  },
  {
    "id": "boya2-15-23",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "忍不住",
    "pinyin": "rěnbuzhù",
    "sinoVietnamese": "nhẫn bất trú",
    "meaning": "không thể chịu nổi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忍不住.mp3",
    "exampleSentence": {
      "chinese": "我忍不住笑了",
      "pinyin": "wǒ rěnbuzhù xiào le",
      "vietnamese": "tôi không kìm được cười"
    }
  },
  {
    "id": "boya2-15-24",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "猪",
    "pinyin": "zhū",
    "sinoVietnamese": "trư",
    "meaning": "lợn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/猪.mp3",
    "exampleSentence": {
      "chinese": "农场里养了很多猪。",
      "pinyin": "Nóngchǎng lǐ yǎng le hěnduō zhū.",
      "vietnamese": "Trại nuôi rất nhiều heo."
    }
  },
  {
    "id": "boya2-15-25",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "羊",
    "pinyin": "yáng",
    "sinoVietnamese": "dương",
    "meaning": "cừu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/羊.mp3",
    "exampleSentence": {
      "chinese": "草地上有一群白色的小山羊。",
      "pinyin": "Cǎodì shang yǒu yì qún báisè de xiǎoshānyáng.",
      "vietnamese": "Trên bãi cỏ có một đàn dê con màu trắng."
    }
  },
  {
    "id": "boya2-15-26",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "牛",
    "pinyin": "niú",
    "sinoVietnamese": "ngưu",
    "meaning": "bò",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牛.mp3",
    "exampleSentence": {
      "chinese": "农民用牛来耕地。",
      "pinyin": "Nóngmín yòng niú lái gēngdì.",
      "vietnamese": "Nông dân dùng bò/trâu để cày ruộng."
    }
  },
  {
    "id": "boya2-15-27",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "炸",
    "pinyin": "zhá",
    "sinoVietnamese": "tạc",
    "meaning": "chiên ngập dầu",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/炸.mp3",
    "exampleSentence": {
      "chinese": "弟弟最喜欢吃炸鸡翅。",
      "pinyin": "Dìdi zuì xǐhuan chī zhá jīchì.",
      "vietnamese": "Em trai thích ăn cánh gà chiên nhất."
    }
  },
  {
    "id": "boya2-15-28",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "丝",
    "pinyin": "sī",
    "sinoVietnamese": "ti",
    "meaning": "sợi",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/丝.mp3",
    "exampleSentence": {
      "chinese": "妈妈正在把土豆切成细丝。",
      "pinyin": "Māma zhèngzài bǎ tǔdòu qiē chéng xì sī.",
      "vietnamese": "Mẹ đang thái khoai tây thành sợi nhỏ."
    }
  },
  {
    "id": "boya2-15-29",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "肉",
    "pinyin": "ròu",
    "sinoVietnamese": "nhục",
    "meaning": "thịt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/肉.mp3",
    "exampleSentence": {
      "chinese": "吃肉",
      "pinyin": "Chī ròu",
      "vietnamese": "Ăn thịt"
    }
  },
  {
    "id": "boya2-15-30",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "汤",
    "pinyin": "tāng",
    "sinoVietnamese": "thang",
    "meaning": "canh, súp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/汤.mp3",
    "exampleSentence": {
      "chinese": "饭前喝一碗热汤对身体很好。",
      "pinyin": "Fàn qián hē yì wǎn rè tāng duì shēntǐ hěn hǎo.",
      "vietnamese": "Uống một bát canh nóng trước bữa ăn rất tốt cho sức khỏe."
    }
  },
  {
    "id": "boya2-15-31",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "人家",
    "pinyin": "rénjiā",
    "sinoVietnamese": "nhân gia",
    "meaning": "người ta",
    "partOfSpeech": "Đại từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人家.mp3",
    "exampleSentence": {
      "chinese": "人家都已经去了",
      "pinyin": "Rénjiā dōu yǐjīng qù le",
      "vietnamese": "Người ta đã đi rồi"
    }
  },
  {
    "id": "boya2-15-32",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "心",
    "pinyin": "xīn",
    "sinoVietnamese": "tâm",
    "meaning": "trái tim, tâm trí",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/心.mp3",
    "exampleSentence": {
      "chinese": "我心里很难过",
      "pinyin": "Wǒ xīnli hěn nánguò",
      "vietnamese": "Trong lòng tôi rất buồn"
    }
  },
  {
    "id": "boya2-15-33",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "光临",
    "pinyin": "guānglín",
    "sinoVietnamese": "quang lâm",
    "meaning": "có mặt",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/光临.mp3",
    "exampleSentence": {
      "chinese": "欢迎光临本店！",
      "pinyin": "Huānyíng guānglín běn diàn!",
      "vietnamese": "Chào mừng quý khách đến với cửa hàng chúng tôi!"
    }
  },
  {
    "id": "boya2-15-34",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "猪排",
    "pinyin": "zhūpái",
    "sinoVietnamese": "trư bài",
    "meaning": "sườn heo, cốt lết heo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/猪排.mp3",
    "exampleSentence": {
      "chinese": "今晚我们吃猪排。",
      "pinyin": "Jīnwǎn wǒmen chī zhūpái.",
      "vietnamese": "Tối nay chúng ta ăn sườn heo."
    }
  },
  {
    "id": "boya2-15-35",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "羊排",
    "pinyin": "yángpái",
    "sinoVietnamese": "dương bài",
    "meaning": "sườn cừu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/羊排.mp3",
    "exampleSentence": {
      "chinese": "他点了份烤羊排。",
      "pinyin": "Tā diǎn le fèn kǎo yángpái.",
      "vietnamese": "Anh ấy đã gọi một phần sườn cừu nướng."
    }
  },
  {
    "id": "boya2-15-36",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "牛排",
    "pinyin": "niúpái",
    "sinoVietnamese": "ngưu bài",
    "meaning": "bít tết, sườn bò",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牛排.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃三分熟的牛排。",
      "pinyin": "Wǒ xǐhuān chī sānfēnshú de niúpái.",
      "vietnamese": "Tôi thích ăn bít tết tái vừa."
    }
  },
  {
    "id": "boya2-15-37",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "稍等",
    "pinyin": "shāoděng",
    "sinoVietnamese": "sảo đẳng",
    "meaning": "đợi chút, chờ một lát",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/稍等.mp3",
    "exampleSentence": {
      "chinese": "请稍等，他马上就来。",
      "pinyin": "Qǐng shāoděng, tā mǎshàng jiù lái.",
      "vietnamese": "Xin hãy đợi một lát, anh ấy sẽ đến ngay."
    }
  },
  {
    "id": "boya2-15-38",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "扎啤",
    "pinyin": "zhāpí",
    "sinoVietnamese": "trát ti",
    "meaning": "bia tươi, bia hơi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/扎啤.mp3",
    "exampleSentence": {
      "chinese": "我们去喝扎啤吧。",
      "pinyin": "Wǒmen qù hē zhāpí ba.",
      "vietnamese": "Chúng ta đi uống bia tươi đi."
    }
  },
  {
    "id": "boya2-15-39",
    "lesson": 15,
    "lessonTitle": "Bài 15: 请稍等 (Xin chờ một chút)",
    "unit": 3,
    "unitTitle": "Đơn vị 3: Kỹ năng sống & Giao tiếp xã hội",
    "hanzi": "鸭蛋",
    "pinyin": "yādàn",
    "sinoVietnamese": "áp đản",
    "meaning": "trứng vịt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/鸭蛋.mp3",
    "exampleSentence": {
      "chinese": "我喜欢吃咸鸭蛋。",
      "pinyin": "Wǒ xǐhuān chī xián yādàn.",
      "vietnamese": "Tôi thích ăn trứng vịt muối."
    }
  },
  {
    "id": "boya2-16-1",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "节",
    "pinyin": "jié",
    "sinoVietnamese": "tiết",
    "meaning": "ngày lễ",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/节.mp3",
    "exampleSentence": {
      "chinese": "这节课很有意思",
      "pinyin": "Zhè jié kè hěn yǒu yì sī",
      "vietnamese": "Tiết học này rất hay"
    }
  },
  {
    "id": "boya2-16-2",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "必须",
    "pinyin": "bìxū",
    "sinoVietnamese": "tất tu",
    "meaning": "phải",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/必须.mp3",
    "exampleSentence": {
      "chinese": "你必须去",
      "pinyin": "Nǐ bì xū qù",
      "vietnamese": "Bạn phải đi"
    }
  },
  {
    "id": "boya2-16-3",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "句",
    "pinyin": "jù",
    "sinoVietnamese": "cú",
    "meaning": "câu",
    "partOfSpeech": "Danh từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/句.mp3",
    "exampleSentence": {
      "chinese": "这是一个完整的句子",
      "pinyin": "Zhè shì yī gè wán zhěng de jù zi",
      "vietnamese": "Đây là một câu hoàn chỉnh"
    }
  },
  {
    "id": "boya2-16-4",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "留下",
    "pinyin": "liúxià",
    "sinoVietnamese": "lưu hạ",
    "meaning": "để lại",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/留下.mp3",
    "exampleSentence": {
      "chinese": "请留下你的名字",
      "pinyin": "Qǐng liú xià nǐ de míng zì",
      "vietnamese": "Vui lòng để lại tên của bạn"
    }
  },
  {
    "id": "boya2-16-5",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "深刻",
    "pinyin": "shēnkè",
    "sinoVietnamese": "thâm khắc",
    "meaning": "sâu sắc",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/深刻.mp3",
    "exampleSentence": {
      "chinese": "这部电影给我留下了深刻的印象。",
      "pinyin": "Zhè bù diànyǐng gěi wǒ liúxià le shēnkè de yìnxiàng.",
      "vietnamese": "Bộ phim này để lại ấn tượng sâu sắc với tôi."
    }
  },
  {
    "id": "boya2-16-6",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "印象",
    "pinyin": "yìnxiàng",
    "sinoVietnamese": "ấn tượng",
    "meaning": "ấn tượng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/印象.mp3",
    "exampleSentence": {
      "chinese": "他对我的印象很好。",
      "pinyin": "Tā duì wǒ de yìnxiàng hěn hǎo.",
      "vietnamese": "Anh ấy có ấn tượng tốt về tôi."
    }
  },
  {
    "id": "boya2-16-7",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "香蕉",
    "pinyin": "xiāngjiāo",
    "sinoVietnamese": "hương tiêu",
    "meaning": "chuối",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/香蕉.mp3",
    "exampleSentence": {
      "chinese": "我最喜欢吃的水果是香蕉。",
      "pinyin": "Wǒ zuì xǐhuan chī de shuǐguǒ shì xiāngjiāo.",
      "vietnamese": "Loại trái cây tôi thích ăn nhất là chuối."
    }
  },
  {
    "id": "boya2-16-8",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "总是",
    "pinyin": "zǒngshì",
    "sinoVietnamese": "tổng thị",
    "meaning": "luôn luôn",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/总是.mp3",
    "exampleSentence": {
      "chinese": "他总是很努力工作。",
      "pinyin": "Tā zǒngshì hěn nǔlì gōngzuò.",
      "vietnamese": "Anh ấy luôn luôn làm việc chăm chỉ."
    }
  },
  {
    "id": "boya2-16-9",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "尾巴",
    "pinyin": "wěiba",
    "sinoVietnamese": "vĩ ba",
    "meaning": "đuôi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/尾巴.mp3",
    "exampleSentence": {
      "chinese": "这个尾巴很好。",
      "pinyin": "Zhè gè wěi bā hěn hǎo.",
      "vietnamese": "đuôi này rất tốt."
    }
  },
  {
    "id": "boya2-16-10",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "剥",
    "pinyin": "bāo",
    "sinoVietnamese": "bác",
    "meaning": "bóc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/剥.mp3",
    "exampleSentence": {
      "chinese": "弟弟正在自己剥香蕉皮。",
      "pinyin": "Dìdi zhèngzài zìjǐ bāo xiāngjiāopí.",
      "vietnamese": "Em trai đang tự bóc vỏ chuối."
    }
  },
  {
    "id": "boya2-16-11",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "细",
    "pinyin": "xì",
    "sinoVietnamese": "tế",
    "meaning": "mỏng, mảnh",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/细.mp3",
    "exampleSentence": {
      "chinese": "她做事情非常细心。",
      "pinyin": "Tā zuò shìqing fēicháng xìxīn.",
      "vietnamese": "Cô ấy làm việc vô cùng cẩn thận và tỉ mỉ."
    }
  },
  {
    "id": "boya2-16-12",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "差别",
    "pinyin": "chābié",
    "sinoVietnamese": "sai biệt",
    "meaning": "sự khác biệt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/差别.mp3",
    "exampleSentence": {
      "chinese": "这两件商品没有太大差别。",
      "pinyin": "Zhè liǎng jiàn shāngpǐn méiyǒu tàidà chābié.",
      "vietnamese": "Hai món hàng này không có sự khác biệt quá lớn."
    }
  },
  {
    "id": "boya2-16-13",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "启发",
    "pinyin": "qǐfā",
    "sinoVietnamese": "khải phát",
    "meaning": "truyền cảm hứng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/启发.mp3",
    "exampleSentence": {
      "chinese": "这个启发了我",
      "pinyin": "zhè gè qǐfā le wǒ",
      "vietnamese": "điều này truyền cảm hứng cho tôi"
    }
  },
  {
    "id": "boya2-16-14",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "改变",
    "pinyin": "gǎibiàn",
    "sinoVietnamese": "cải biến",
    "meaning": "thay đổi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/改变.mp3",
    "exampleSentence": {
      "chinese": "世界在改变",
      "pinyin": "Shì jiè zài gǎi biàn",
      "vietnamese": "Thế giới đang thay đổi"
    }
  },
  {
    "id": "boya2-16-15",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "方式",
    "pinyin": "fāngshì",
    "sinoVietnamese": "phương thức",
    "meaning": "cách",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/方式.mp3",
    "exampleSentence": {
      "chinese": "每个人都有自己的生活方式。",
      "pinyin": "Měi ge rén dōu yǒu zìjǐ de shēnghuó fāngshì.",
      "vietnamese": "Mỗi người đều có phương thức sống riêng của mình."
    }
  },
  {
    "id": "boya2-16-16",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "戒烟",
    "pinyin": "jièyān",
    "sinoVietnamese": "giới yên",
    "meaning": "bỏ thuốc lá",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/戒烟.mp3",
    "exampleSentence": {
      "chinese": "为了健康，爸爸决定戒烟。",
      "pinyin": "wèi le jiàn kāng, bà ba jué dìng jiè yān.",
      "vietnamese": "Vì sức khỏe, bố quyết định bỏ thuốc lá."
    }
  },
  {
    "id": "boya2-16-17",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "难受",
    "pinyin": "nánshòu",
    "sinoVietnamese": "nan thụ",
    "meaning": "khó chịu",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难受.mp3",
    "exampleSentence": {
      "chinese": "我心里很难受。",
      "pinyin": "Wǒ xīn lǐ hěn nán shòu.",
      "vietnamese": "Trong lòng tôi rất khó chịu."
    }
  },
  {
    "id": "boya2-16-18",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "活",
    "pinyin": "huó",
    "sinoVietnamese": "hoạt",
    "meaning": "sống; sống",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/活.mp3",
    "exampleSentence": {
      "chinese": "爷爷已经活了九十岁，身体依然硬朗。",
      "pinyin": "Yéye yǐjīng huó le jiǔshí suì, shēntǐ yīrán yìnglang.",
      "vietnamese": "Ông nội đã sống đến 90 tuổi, sức khỏe vẫn rất dẻo dai."
    }
  },
  {
    "id": "boya2-16-19",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "万",
    "pinyin": "wàn",
    "sinoVietnamese": "vạn",
    "meaning": "mười ngàn",
    "partOfSpeech": "Số từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/万.mp3",
    "exampleSentence": {
      "chinese": "一万人",
      "pinyin": "Yī wàn rén",
      "vietnamese": "mười vạn người"
    }
  },
  {
    "id": "boya2-16-20",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "受罪",
    "pinyin": "shòuzuì",
    "sinoVietnamese": "thụ tội",
    "meaning": "chịu đựng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/受罪.mp3",
    "exampleSentence": {
      "chinese": "大热天停电真是让人受罪。",
      "pinyin": "dà rè tiān tíng diàn zhēn shì ràng rén shòu zuì.",
      "vietnamese": "Trời nóng mà mất điện thật là khiến người ta khổ sở."
    }
  },
  {
    "id": "boya2-16-21",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "算了",
    "pinyin": "suànle",
    "sinoVietnamese": "toán liễu",
    "meaning": "bỏ qua",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/算了.mp3",
    "exampleSentence": {
      "chinese": "既然你不想去，那就算了吧。",
      "pinyin": "jì rán nǐ bù xiǎng qù, nà jiù suàn le ba.",
      "vietnamese": "Đã là cậu không muốn đi, vậy thì bỏ qua đi."
    }
  },
  {
    "id": "boya2-16-22",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "失败",
    "pinyin": "shībài",
    "sinoVietnamese": "thất bại",
    "meaning": "thất bại",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/失败.mp3",
    "exampleSentence": {
      "chinese": "实验失败了，但我们不能放弃。",
      "pinyin": "Shíyàn shībài le, dàn wǒmen bùnéng fàngqì.",
      "vietnamese": "Thí nghiệm thất bại, nhưng chúng tôi không thể bỏ cuộc."
    }
  },
  {
    "id": "boya2-16-23",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "想法",
    "pinyin": "xiǎngfǎ",
    "sinoVietnamese": "tưởng pháp",
    "meaning": "ý tưởng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/想法.mp3",
    "exampleSentence": {
      "chinese": "我有一个好想法",
      "pinyin": "Wǒ yǒu yī gè hǎo xiǎng fǎ",
      "vietnamese": "Tôi có một ý tưởng tốt"
    }
  },
  {
    "id": "boya2-16-24",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "道理",
    "pinyin": "dàoli",
    "sinoVietnamese": "đạo lí",
    "meaning": "lý lẽ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/道理.mp3",
    "exampleSentence": {
      "chinese": "他说的话很有道理",
      "pinyin": "Tā shuō de huà hěn yǒu dào lǐ",
      "vietnamese": "Lời anh ấy nói rất có lý"
    }
  },
  {
    "id": "boya2-16-25",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "任何",
    "pinyin": "rènhé",
    "sinoVietnamese": "nhậm hà",
    "meaning": "bất kỳ",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/任何.mp3",
    "exampleSentence": {
      "chinese": "没有任何困难能阻止我们。",
      "pinyin": "Méiyǒu rènhé kùnnan néng zǔzhǐ wǒmen.",
      "vietnamese": "Không có khó khăn nào có thể ngăn cản chúng ta."
    }
  },
  {
    "id": "boya2-16-26",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "角度",
    "pinyin": "jiǎodù",
    "sinoVietnamese": "giác độ",
    "meaning": "góc độ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/角度.mp3",
    "exampleSentence": {
      "chinese": "从不同的角度看问题",
      "pinyin": "Cóng bù tóng de jiǎo dù kàn wèn tí",
      "vietnamese": "Nhìn vấn đề từ nhiều góc độ khác nhau"
    }
  },
  {
    "id": "boya2-16-27",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "核桃",
    "pinyin": "hétao",
    "sinoVietnamese": "hạch đào",
    "meaning": "quả óc chó",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/核桃.mp3",
    "exampleSentence": {
      "chinese": "核桃对大脑很有好处。",
      "pinyin": "Hétao duì dànǎo hěn yǒu hǎochù.",
      "vietnamese": "Quả óc chó rất tốt cho não bộ."
    }
  },
  {
    "id": "boya2-16-28",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "莲子",
    "pinyin": "liánzǐ",
    "sinoVietnamese": "liên tử",
    "meaning": "hạt sen",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/莲子.mp3",
    "exampleSentence": {
      "chinese": "莲子粥很好喝",
      "pinyin": "Liánzǐ zhōu hěn hǎohē",
      "vietnamese": "Cháo hạt sen rất ngon"
    }
  },
  {
    "id": "boya2-16-29",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "实验",
    "pinyin": "shíyàn",
    "sinoVietnamese": "thực nghiệm",
    "meaning": "thí nghiệm; tiến hành thí nghiệm",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实验.mp3",
    "exampleSentence": {
      "chinese": "科学家正在做一项重要的实验。",
      "pinyin": "Kē xué jiā zhèng zài zuò yī xiàng zhòng yào de shí yàn.",
      "vietnamese": "Các nhà khoa học đang thực hiện một thí nghiệm quan trọng."
    }
  },
  {
    "id": "boya2-16-30",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "装",
    "pinyin": "zhuāng",
    "sinoVietnamese": "trang",
    "meaning": "trang điểm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/装.mp3",
    "exampleSentence": {
      "chinese": "她在化妆",
      "pinyin": "Tā zài huà zhuāng",
      "vietnamese": "Cô ấy đang trang điểm"
    }
  },
  {
    "id": "boya2-16-31",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "人生",
    "pinyin": "rénshēng",
    "sinoVietnamese": "nhân sinh, sanh",
    "meaning": "cuộc sống",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人生.mp3",
    "exampleSentence": {
      "chinese": "人生有很多困难。",
      "pinyin": "Rénshēng yǒu hěnduō kùnnán.",
      "vietnamese": "Cuộc sống có nhiều khó khăn."
    }
  },
  {
    "id": "boya2-16-32",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "真正",
    "pinyin": "zhēnzhèng",
    "sinoVietnamese": "chân chính",
    "meaning": "thực sự",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/真正.mp3",
    "exampleSentence": {
      "chinese": "他是我的真正朋友",
      "pinyin": "Tā shì wǒ de zhēn zhèng péng yǒu",
      "vietnamese": "Anh ấy là bạn thực sự của tôi"
    }
  },
  {
    "id": "boya2-16-33",
    "lesson": 16,
    "lessonTitle": "Bài 16: 从哪一头儿吃香蕉 (Ăn chuối từ đầu nào)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "头儿",
    "pinyin": "tóur",
    "sinoVietnamese": "đầu nhi",
    "meaning": "ông chủ, thủ trưởng, người đứng đầu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/头儿.mp3",
    "exampleSentence": {
      "chinese": "我们的头儿今天不在办公室。",
      "pinyin": "Wǒmen de tóur jīntiān bù zài bàngōngshì.",
      "vietnamese": "Ông chủ của chúng tôi hôm nay không có ở văn phòng."
    }
  },
  {
    "id": "boya2-17-1",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "暑假",
    "pinyin": "shǔjià",
    "sinoVietnamese": "thử giá",
    "meaning": "kỳ nghỉ hè",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/暑假.mp3",
    "exampleSentence": {
      "chinese": "今年暑假你打算去哪里旅游？",
      "pinyin": "Jīnnián shǔjià nǐ dǎsuàn qù nǎlǐ lǚyóu?",
      "vietnamese": "Kỳ nghỉ hè năm nay bạn dự định đi du lịch ở đâu?"
    }
  },
  {
    "id": "boya2-17-2",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "约",
    "pinyin": "yuē",
    "sinoVietnamese": "ước",
    "meaning": "hẹn",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/约.mp3",
    "exampleSentence": {
      "chinese": "我们约在图书馆见面。",
      "pinyin": "Wǒ men yuē zài tú shū guǎn jiàn miàn.",
      "vietnamese": "Chúng ta hẹn gặp nhau ở thư viện."
    }
  },
  {
    "id": "boya2-17-3",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "除了",
    "pinyin": "chúle",
    "sinoVietnamese": "trừ liễu",
    "meaning": "ngoài ra, trừ ra",
    "partOfSpeech": "Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/除了.mp3",
    "exampleSentence": {
      "chinese": "除了中文，我还会说英文。",
      "pinyin": "Chúle Zhōngwén, wǒ hái huì shuō Yīngwén.",
      "vietnamese": "Ngoài tiếng Trung, tôi còn biết nói tiếng Anh."
    }
  },
  {
    "id": "boya2-17-4",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "从来",
    "pinyin": "cónglái",
    "sinoVietnamese": "tòng lai",
    "meaning": "luôn luôn",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/从来.mp3",
    "exampleSentence": {
      "chinese": "我从来没去过中国，但我很想学中文。",
      "pinyin": "Wǒ cónglái méi qù guo Zhōngguó, dàn wǒ hěn xiǎng xué Zhōngwén.",
      "vietnamese": "Tôi chưa bao giờ đi Trung Quốc, nhưng tôi rất muốn học tiếng Trung."
    }
  },
  {
    "id": "boya2-17-5",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "能够",
    "pinyin": "nénggòu",
    "sinoVietnamese": "năng cấu",
    "meaning": "có thể",
    "partOfSpeech": "Động từ / Trợ động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/能够.mp3",
    "exampleSentence": {
      "chinese": "我能够帮你",
      "pinyin": "Wǒ néng gòu bāng nǐ",
      "vietnamese": "Tôi có thể giúp bạn"
    }
  },
  {
    "id": "boya2-17-6",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "聚",
    "pinyin": "jù",
    "sinoVietnamese": "tụ",
    "meaning": "tụ tập",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/聚.mp3",
    "exampleSentence": {
      "chinese": "这个聚很好。",
      "pinyin": "Zhè gè jù hěn hǎo.",
      "vietnamese": "tụ tập này rất tốt."
    }
  },
  {
    "id": "boya2-17-7",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "讨论",
    "pinyin": "tǎolùn",
    "sinoVietnamese": "thảo luận",
    "meaning": "thảo luận",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/讨论.mp3",
    "exampleSentence": {
      "chinese": "我们讨论这个问题",
      "pinyin": "Wǒ men tǎo lùn zhè gè wèn tí",
      "vietnamese": "Chúng tôi thảo luận vấn đề này"
    }
  },
  {
    "id": "boya2-17-8",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "离开",
    "pinyin": "líkāi",
    "sinoVietnamese": "li khai",
    "meaning": "rời khỏi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/离开.mp3",
    "exampleSentence": {
      "chinese": "我明天要离开这个城市。",
      "pinyin": "Wǒ míng tiān yào lí kāi zhè gè chéng shì.",
      "vietnamese": "Ngày mai tôi phải rời khỏi thành phố này."
    }
  },
  {
    "id": "boya2-17-9",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "日子",
    "pinyin": "rìzi",
    "sinoVietnamese": "nhật tử",
    "meaning": "cuộc sống",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/日子.mp3",
    "exampleSentence": {
      "chinese": "我们的日子越来越好",
      "pinyin": "Wǒ men de rì zi yuè lái yuè hǎo",
      "vietnamese": "Cuộc sống của chúng ta ngày càng tốt"
    }
  },
  {
    "id": "boya2-17-10",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "实话",
    "pinyin": "shíhuà",
    "sinoVietnamese": "thực thoại",
    "meaning": "sự thật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实话.mp3",
    "exampleSentence": {
      "chinese": "说实话，我不太喜欢这个主意。",
      "pinyin": "shuō shí huà, wǒ bú tài xǐ huan zhè gè zhǔ yi.",
      "vietnamese": "Nói thật lòng, tôi không thích ý kiến này lắm."
    }
  },
  {
    "id": "boya2-17-11",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "变化",
    "pinyin": "biànhuà",
    "sinoVietnamese": "biến hóa",
    "meaning": "thay đổi",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/变化.mp3",
    "exampleSentence": {
      "chinese": "这几年家乡的变化很大。",
      "pinyin": "Zhè jǐ nián jiāxiāng de biànhuà hěn dà.",
      "vietnamese": "Vài năm qua quê hương thay đổi rất lớn."
    }
  },
  {
    "id": "boya2-17-12",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "共同",
    "pinyin": "gòngtóng",
    "sinoVietnamese": "cộng đồng",
    "meaning": "chung",
    "partOfSpeech": "Tính từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/共同.mp3",
    "exampleSentence": {
      "chinese": "这是我们要共同完成的目标。",
      "pinyin": "Zhè shì wǒmen yào gòngtóng wánchéng de mùbiāo.",
      "vietnamese": "Đây là mục tiêu chúng ta cần cùng nhau hoàn thành."
    }
  },
  {
    "id": "boya2-17-13",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "话题",
    "pinyin": "huàtí",
    "sinoVietnamese": "thoại đề",
    "meaning": "chủ đề",
    "partOfSpeech": "Danh từ (noun - topic)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/话题.mp3",
    "exampleSentence": {
      "chinese": "这是一个有趣的话题。",
      "pinyin": "Zhè shì yī gè yǒuqù de huàtí.",
      "vietnamese": "Đây là một chủ đề thú vị."
    }
  },
  {
    "id": "boya2-17-14",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "陌生",
    "pinyin": "mòshēng",
    "sinoVietnamese": "mạch sinh, sanh",
    "meaning": "lạ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/陌生.mp3",
    "exampleSentence": {
      "chinese": "走在陌生的城市里，他感到很孤单。",
      "pinyin": "zǒu zài mò shēng de chéng shì lǐ tā gǎn dào hěn gū dān.",
      "vietnamese": "Đi bộ trong một thành phố xa lạ, anh ấy cảm thấy rất cô đơn."
    }
  },
  {
    "id": "boya2-17-15",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "似乎",
    "pinyin": "sìhū",
    "sinoVietnamese": "tự hồ, hô",
    "meaning": "hình như, dường như",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/似乎.mp3",
    "exampleSentence": {
      "chinese": "他似乎不太高兴。",
      "pinyin": "Tā sìhū bù tài gāoxìng.",
      "vietnamese": "Anh ấy dường như không quá vui."
    }
  },
  {
    "id": "boya2-17-16",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "亲热",
    "pinyin": "qīnrè",
    "sinoVietnamese": "thân nhiệt",
    "meaning": "yêu thương",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/亲热.mp3",
    "exampleSentence": {
      "chinese": "久别重逢，两人亲热地拥抱在一起。",
      "pinyin": "Jiǔ bié chóng féng, liǎng rén qīnrè de yǒngbào zài yīqǐ.",
      "vietnamese": "Lâu ngày gặp lại, hai người ôm nhau âu yếm."
    }
  },
  {
    "id": "boya2-17-17",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "握手",
    "pinyin": "wòshǒu",
    "sinoVietnamese": "ác thủ",
    "meaning": "bắt tay",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/握手.mp3",
    "exampleSentence": {
      "chinese": "他们握手表示友好。",
      "pinyin": "Tāmen wòshǒu biǎoshì yǒuhǎo.",
      "vietnamese": "Họ bắt tay để thể hiện sự thân thiện."
    }
  },
  {
    "id": "boya2-17-18",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "一边",
    "pinyin": "yībiān",
    "sinoVietnamese": "nhất biên",
    "meaning": "một bên",
    "partOfSpeech": "Phó từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/一边.mp3",
    "exampleSentence": {
      "chinese": "请坐在一边",
      "pinyin": "Qǐng zuò zài yībiān",
      "vietnamese": "Mời ngồi ở một bên"
    }
  },
  {
    "id": "boya2-17-19",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "回忆",
    "pinyin": "huíyì",
    "sinoVietnamese": "hồi ức",
    "meaning": "nhớ lại",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/回忆.mp3",
    "exampleSentence": {
      "chinese": "我喜欢回忆童年时光",
      "pinyin": "Wǒ xǐhuan huíyì tóngnián shíguāng",
      "vietnamese": "Tôi thích hồi tưởng thời thơ ấu"
    }
  },
  {
    "id": "boya2-17-20",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "坏事",
    "pinyin": "huài shì",
    "sinoVietnamese": "hoại sự",
    "meaning": "ác",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坏事.mp3",
    "exampleSentence": {
      "chinese": "不要做坏事",
      "pinyin": "Bùyào zuò huàishì",
      "vietnamese": "Đừng làm việc xấu"
    }
  },
  {
    "id": "boya2-17-21",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "傻",
    "pinyin": "shǎ",
    "sinoVietnamese": "soạ",
    "meaning": "ngu ngốc",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/傻.mp3",
    "exampleSentence": {
      "chinese": "你怎么这么傻，相信他的谎话？",
      "pinyin": "nǐ zěn me zhè me shǎ, xiāng xìn tā de huǎng huà?",
      "vietnamese": "Sao bạn ngốc thế, lại tin lời nói dối của anh ta?"
    }
  },
  {
    "id": "boya2-17-22",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "痛快",
    "pinyin": "tòngkuai",
    "sinoVietnamese": "thống khoái",
    "meaning": "vui sướng",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/痛快.mp3",
    "exampleSentence": {
      "chinese": "今天我们玩得真痛快，不想回家了。",
      "pinyin": "jīn tiān wǒ men wán de zhēn tòng kuai, bù xiǎng huí jiā le.",
      "vietnamese": "Hôm nay chúng tôi chơi thật sảng khoái, không muốn về nhà nữa."
    }
  },
  {
    "id": "boya2-17-23",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "体育馆",
    "pinyin": "tǐyùguǎn",
    "sinoVietnamese": "thể dục quán",
    "meaning": "sân vận động, nhà thi đấu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/体育馆.mp3",
    "exampleSentence": {
      "chinese": "体育馆里有很多比赛",
      "pinyin": "Tǐ yù guǎn lǐ yǒu hěn duō bǐ sài",
      "vietnamese": "Trong nhà thi đấu có nhiều trận đấu"
    }
  },
  {
    "id": "boya2-17-24",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "曾经",
    "pinyin": "céngjīng",
    "sinoVietnamese": "tằng kinh",
    "meaning": "đã từng",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/曾经.mp3",
    "exampleSentence": {
      "chinese": "我曾经去过北京。",
      "pinyin": "Wǒ céngjīng qùguo Běijīng.",
      "vietnamese": "Tôi đã từng đến Bắc Kinh."
    }
  },
  {
    "id": "boya2-17-25",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "照相",
    "pinyin": "zhàoxiàng",
    "sinoVietnamese": "chiếu tướng",
    "meaning": "chụp ảnh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/照相.mp3",
    "exampleSentence": {
      "chinese": "我们去照相吧",
      "pinyin": "Wǒ men qù zhào xiāng ba",
      "vietnamese": "Chúng tôi đi chụp ảnh nhé"
    }
  },
  {
    "id": "boya2-17-26",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "合影",
    "pinyin": "héyǐng",
    "sinoVietnamese": "hợp ảnh",
    "meaning": "ảnh nhóm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/合影.mp3",
    "exampleSentence": {
      "chinese": "毕业典礼结束后，同学们纷纷合影留念。",
      "pinyin": "bì yè diǎn lǐ jié shù hòu, tóng xué men fēn fēn hé yǐng liú niàn.",
      "vietnamese": "Sau khi lễ tốt nghiệp kết thúc, các bạn học sinh lần lượt chụp ảnh chung làm kỷ niệm."
    }
  },
  {
    "id": "boya2-17-27",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "作为",
    "pinyin": "zuòwéi",
    "sinoVietnamese": "tác vi",
    "meaning": "như",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/作为.mp3",
    "exampleSentence": {
      "chinese": "作为一名老师，我很关心学生。",
      "pinyin": "Zuòwéi yī míng lǎoshī, wǒ hěn guānxīn xuéshēng.",
      "vietnamese": "Với tư cách là một giáo viên, tôi rất quan tâm đến học sinh."
    }
  },
  {
    "id": "boya2-17-28",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "留念",
    "pinyin": "liúniàn",
    "sinoVietnamese": "lưu niệm",
    "meaning": "giữ làm kỷ niệm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/留念.mp3",
    "exampleSentence": {
      "chinese": "请在这里签名留念",
      "pinyin": "Qǐng zài zhèlǐ qiānmíng liúniàn",
      "vietnamese": "Xin hãy ký tên vào đây để lưu niệm"
    }
  },
  {
    "id": "boya2-17-29",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "愉快",
    "pinyin": "yúkuài",
    "sinoVietnamese": "du khoái",
    "meaning": "vui vẻ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/愉快.mp3",
    "exampleSentence": {
      "chinese": "祝你有个愉快的周末",
      "pinyin": "Zhù nǐ yǒu gè yúkuài de zhōumò",
      "vietnamese": "Chúc bạn có một cuối tuần vui vẻ"
    }
  },
  {
    "id": "boya2-17-30",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "载",
    "pinyin": "zài",
    "sinoVietnamese": "tái",
    "meaning": "chở",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/载.mp3",
    "exampleSentence": {
      "chinese": "他骑摩托车载着妹妹回家。",
      "pinyin": "Tā qí mótuōchē zài zhe mèimei huíjiā.",
      "vietnamese": "Anh ấy đi xe máy chở em gái về nhà."
    }
  },
  {
    "id": "boya2-17-31",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "扶",
    "pinyin": "fú",
    "sinoVietnamese": "phù",
    "meaning": "hỗ trợ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/扶.mp3",
    "exampleSentence": {
      "chinese": "那个好心的年轻人扶老人过马路。",
      "pinyin": "nà ge hǎo xīn de nián qīng rén fú lǎo rén guò mǎ lù.",
      "vietnamese": "Người thanh niên tốt bụng đó đỡ người già qua đường."
    }
  },
  {
    "id": "boya2-17-32",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "腰",
    "pinyin": "yāo",
    "sinoVietnamese": "yêu",
    "meaning": "eo",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/腰.mp3",
    "exampleSentence": {
      "chinese": "坐久了应该站起来活动一下腰。",
      "pinyin": "zuò jiǔ le yīng gāi zhàn qǐ lái huó dòng yí xià yāo.",
      "vietnamese": "Ngồi lâu thì nên đứng dậy vận động lưng eo một chút."
    }
  },
  {
    "id": "boya2-17-33",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "坡",
    "pinyin": "pō",
    "sinoVietnamese": "pha",
    "meaning": "dốc",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坡.mp3",
    "exampleSentence": {
      "chinese": "自行车骑上下坡的时候要特别小心。",
      "pinyin": "Zìxíngchē qí shàng xià pō de shíhou yào tèbié xiǎoxīn.",
      "vietnamese": "Khi đi xe đạp lên xuống dốc phải đặc biệt cẩn thận."
    }
  },
  {
    "id": "boya2-17-34",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "分别",
    "pinyin": "fēnbié",
    "sinoVietnamese": "phân biệt",
    "meaning": "sự khác biệt",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分别.mp3",
    "exampleSentence": {
      "chinese": "我们要分别对待这些问题。",
      "pinyin": "Wǒ men yào fēn bié duì dài zhè xiē wèn tí.",
      "vietnamese": "Chúng ta cần phân biệt xử dụng các vấn đề này."
    }
  },
  {
    "id": "boya2-17-35",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "唯一",
    "pinyin": "wéiyī",
    "sinoVietnamese": "duy nhất",
    "meaning": "chỉ có, duy nhất",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/唯一.mp3",
    "exampleSentence": {
      "chinese": "这是我唯一的选择",
      "pinyin": "Zhè shì wǒ wéiyī de xuǎnzé",
      "vietnamese": "Đây là lựa chọn duy nhất của tôi"
    }
  },
  {
    "id": "boya2-17-36",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "怀念",
    "pinyin": "huáiniàn",
    "sinoVietnamese": "hoài niệm",
    "meaning": "nhớ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怀念.mp3",
    "exampleSentence": {
      "chinese": "这个怀念很好。",
      "pinyin": "Zhè gè huái niàn hěn hǎo.",
      "vietnamese": "nhớ này rất tốt."
    }
  },
  {
    "id": "boya2-17-37",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "母校",
    "pinyin": "mǔxiào",
    "sinoVietnamese": "mẫu hiệu",
    "meaning": "trường cũ, trường mẹ, alma mater",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/母校.mp3",
    "exampleSentence": {
      "chinese": "我明天要回母校看看。",
      "pinyin": "Wǒ míngtiān yào huí mǔxiào kànkan.",
      "vietnamese": "Ngày mai tôi sẽ về thăm trường cũ."
    }
  },
  {
    "id": "boya2-17-38",
    "lesson": 17,
    "lessonTitle": "Bài 17: 李军的日记 (Nhật ký của Lý Quân)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "问好",
    "pinyin": "wènhǎo",
    "sinoVietnamese": "vấn hảo",
    "meaning": "hỏi thăm, gửi lời hỏi thăm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/问好.mp3",
    "exampleSentence": {
      "chinese": "请代我向你父母问好。",
      "pinyin": "Qǐng dài wǒ xiàng nǐ fùmǔ wènhǎo.",
      "vietnamese": "Xin hãy thay tôi gửi lời hỏi thăm bố mẹ bạn."
    }
  },
  {
    "id": "boya2-18-1",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "差",
    "pinyin": "chà",
    "sinoVietnamese": "sai",
    "meaning": "khác nhau",
    "partOfSpeech": "Tính từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/差.mp3",
    "exampleSentence": {
      "chinese": "这两个很不一样，差很多",
      "pinyin": "Zhè liǎng gè hěn bù yīyàng, chà hěnduō",
      "vietnamese": "Hai cái này rất khác, khác nhiều"
    }
  },
  {
    "id": "boya2-18-2",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "等",
    "pinyin": "děng",
    "sinoVietnamese": "đẳng",
    "meaning": "đợi",
    "partOfSpeech": "Động từ / Danh từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/等.mp3",
    "exampleSentence": {
      "chinese": "请等一下",
      "pinyin": "Qǐng děng yīxià",
      "vietnamese": "Xin hãy đợi một chút"
    }
  },
  {
    "id": "boya2-18-3",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "京剧",
    "pinyin": "jīngjù",
    "sinoVietnamese": "kinh kịch",
    "meaning": "kinh kịch",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/京剧.mp3",
    "exampleSentence": {
      "chinese": "奶奶很喜欢看京剧。",
      "pinyin": "Nǎinai hěn xǐhuan kàn jīngjù.",
      "vietnamese": "Bà nội rất thích xem Kinh kịch."
    }
  },
  {
    "id": "boya2-18-4",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "演员",
    "pinyin": "yǎnyuán",
    "sinoVietnamese": "diễn viên",
    "meaning": "diễn viên",
    "partOfSpeech": "Danh từ nghề nghiệp",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/演员.mp3",
    "exampleSentence": {
      "chinese": "他想当电影演员。",
      "pinyin": "Tā xiǎng dāng diànyǐng yǎnyuán.",
      "vietnamese": "Anh ấy muốn làm diễn viên điện ảnh."
    }
  },
  {
    "id": "boya2-18-5",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "演出",
    "pinyin": "yǎnchū",
    "sinoVietnamese": "diễn xuất",
    "meaning": "biểu diễn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/演出.mp3",
    "exampleSentence": {
      "chinese": "这台演出很精彩。",
      "pinyin": "Zhè tái yǎnchū hěn jīngcǎi.",
      "vietnamese": "Buổi biểu diễn này rất xuất sắc."
    }
  },
  {
    "id": "boya2-18-6",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "内容",
    "pinyin": "nèiróng",
    "sinoVietnamese": "nội dung",
    "meaning": "nội dung",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/内容.mp3",
    "exampleSentence": {
      "chinese": "这本书的内容很有趣。",
      "pinyin": "Zhè běn shū de nèi róng hěn yǒu qù.",
      "vietnamese": "Nội dung cuốn sách này rất thú vị."
    }
  },
  {
    "id": "boya2-18-7",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "完全",
    "pinyin": "wánquán",
    "sinoVietnamese": "hoàn toàn",
    "meaning": "hoàn toàn",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/完全.mp3",
    "exampleSentence": {
      "chinese": "我完全同意",
      "pinyin": "Wǒ wán quán tóng yì",
      "vietnamese": "Tôi hoàn toàn đồng ý"
    }
  },
  {
    "id": "boya2-18-8",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "当时",
    "pinyin": "dāngshí",
    "sinoVietnamese": "đương thì",
    "meaning": "lúc đó",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/当时.mp3",
    "exampleSentence": {
      "chinese": "当时我在家。",
      "pinyin": "Dāng shí wǒ zài jiā.",
      "vietnamese": "Lúc đó tôi ở nhà."
    }
  },
  {
    "id": "boya2-18-9",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "听力",
    "pinyin": "tīnglì",
    "sinoVietnamese": "thính lực",
    "meaning": "nghe hiểu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听力.mp3",
    "exampleSentence": {
      "chinese": "我的听力不太好。",
      "pinyin": "Wǒ de tīng lì bù tài hǎo.",
      "vietnamese": "Khả năng nghe hiểu của tôi không quá tốt."
    }
  },
  {
    "id": "boya2-18-10",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "辅导",
    "pinyin": "fǔdǎo",
    "sinoVietnamese": "phụ đạo",
    "meaning": "hướng dẫn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/辅导.mp3",
    "exampleSentence": {
      "chinese": "老师每天放学后都会辅导成绩落后的学生。",
      "pinyin": "lǎo shī měi tiān fàng xué hòu dōu huì fǔ dǎo chéng jì luò hòu de xué sheng.",
      "vietnamese": "Mỗi ngày sau khi tan học, thầy giáo đều phụ đạo cho những học sinh có thành tích kém."
    }
  },
  {
    "id": "boya2-18-11",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "词汇",
    "pinyin": "cíhuì",
    "sinoVietnamese": "từ hối",
    "meaning": "từ vựng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/词汇.mp3",
    "exampleSentence": {
      "chinese": "这本书的词汇很难。",
      "pinyin": "Zhè běn shū de cíhuì hěn nán.",
      "vietnamese": "Từ vựng cuốn sách này rất khó."
    }
  },
  {
    "id": "boya2-18-12",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "量",
    "pinyin": "liàng",
    "sinoVietnamese": "lượng",
    "meaning": "dung lượng",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/量.mp3",
    "exampleSentence": {
      "chinese": "多读书能增加你的词汇量。",
      "pinyin": "Duō dúshū néng zēngjiā nǐ de cíhuìliàng.",
      "vietnamese": "Đọc nhiều sách có thể làm tăng vốn từ vựng của bạn."
    }
  },
  {
    "id": "boya2-18-13",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "增加",
    "pinyin": "zēngjiā",
    "sinoVietnamese": "tăng gia",
    "meaning": "tăng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/增加.mp3",
    "exampleSentence": {
      "chinese": "我们要增加新的课程。",
      "pinyin": "Wǒmen yào zēngjiā xīn de kèchéng.",
      "vietnamese": "Chúng ta cần thêm các khóa học mới."
    }
  },
  {
    "id": "boya2-18-14",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "新闻",
    "pinyin": "xīnwén",
    "sinoVietnamese": "tân văn",
    "meaning": "tin tức",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/新闻.mp3",
    "exampleSentence": {
      "chinese": "我每天都看新闻",
      "pinyin": "Wǒ měi tiān dōu kàn xīn wén",
      "vietnamese": "Tôi mỗi ngày đều xem tin tức"
    }
  },
  {
    "id": "boya2-18-15",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "广播",
    "pinyin": "guǎngbō",
    "sinoVietnamese": "quảng bá",
    "meaning": "phát sóng",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/广播.mp3",
    "exampleSentence": {
      "chinese": "我每天听新闻广播。",
      "pinyin": "Wǒ měi tiān tīng xīn wén guǎng bō.",
      "vietnamese": "Mình đều nghe bản tin phát thanh mỗi ngày."
    }
  },
  {
    "id": "boya2-18-16",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "取得",
    "pinyin": "qǔdé",
    "sinoVietnamese": "thủ đắc",
    "meaning": "đạt được",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/取得.mp3",
    "exampleSentence": {
      "chinese": "取得成功",
      "pinyin": "Qǔ dé chéng gōng",
      "vietnamese": "Đạt được thành công"
    }
  },
  {
    "id": "boya2-18-17",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "难道",
    "pinyin": "nándào",
    "sinoVietnamese": "nan đạo",
    "meaning": "chẳng lẽ",
    "partOfSpeech": "Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难道.mp3",
    "exampleSentence": {
      "chinese": "难道你真的不知道这件事吗？",
      "pinyin": "Nándào nǐ zhēn de bù zhīdào zhè jiàn shì ma?",
      "vietnamese": "Chẳng lẽ bạn thật sự không biết chuyện này sao?"
    }
  },
  {
    "id": "boya2-18-18",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "苦恼",
    "pinyin": "kǔnǎo",
    "sinoVietnamese": "khổ não",
    "meaning": "phiền muộn",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/苦恼.mp3",
    "exampleSentence": {
      "chinese": "他为此事苦恼",
      "pinyin": "Tā wèi cǐ shì kǔnǎo",
      "vietnamese": "Cậu ấy lo âu vì chuyện này"
    }
  },
  {
    "id": "boya2-18-19",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "普通话",
    "pinyin": "pǔtōnghuà",
    "sinoVietnamese": "phổ thông thoại",
    "meaning": "tiếng phổ thông",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/普通话.mp3",
    "exampleSentence": {
      "chinese": "我说普通话",
      "pinyin": "Wǒ shuō pǔ tōng huà",
      "vietnamese": "Tôi nói tiếng phổ thông"
    }
  },
  {
    "id": "boya2-18-20",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "政治",
    "pinyin": "zhèngzhì",
    "sinoVietnamese": "chính trị",
    "meaning": "chính trị",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/政治.mp3",
    "exampleSentence": {
      "chinese": "这个政治很好。",
      "pinyin": "Zhè gè zhèng zhì hěn hǎo.",
      "vietnamese": "chính trị này rất tốt."
    }
  },
  {
    "id": "boya2-18-21",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "教育",
    "pinyin": "jiàoyù",
    "sinoVietnamese": "giáo dục",
    "meaning": "giáo dục",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/教育.mp3",
    "exampleSentence": {
      "chinese": "教育很重要",
      "pinyin": "Jiào yù hěn zhòng yào",
      "vietnamese": "Giáo dục rất quan trọng"
    }
  },
  {
    "id": "boya2-18-22",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "社会",
    "pinyin": "shèhuì",
    "sinoVietnamese": "xã hội",
    "meaning": "xã hội",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/社会.mp3",
    "exampleSentence": {
      "chinese": "我们需要建设一个和谐社会。",
      "pinyin": "Wǒ men xū yào jiàn shè yī gè hé xié shè huì.",
      "vietnamese": "Chúng ta cần xây dựng một xã hội hòa hợp."
    }
  },
  {
    "id": "boya2-18-23",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "情况",
    "pinyin": "qíngkuàng",
    "sinoVietnamese": "tình huống",
    "meaning": "tình hình",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/情况.mp3",
    "exampleSentence": {
      "chinese": "请告诉我更多的情况。",
      "pinyin": "Qǐng gào sù wǒ gèng duō de qíng kuàng.",
      "vietnamese": "Hãy cho tôi biết thêm về tình hình."
    }
  },
  {
    "id": "boya2-18-24",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "艺术",
    "pinyin": "yìshù",
    "sinoVietnamese": "nghệ thuật",
    "meaning": "nghệ thuật",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/艺术.mp3",
    "exampleSentence": {
      "chinese": "她对音乐和表演艺术很有兴趣。",
      "pinyin": "Tā duì yīnyuè hé biǎoyǎn yìshù hěn yǒu xìngqù.",
      "vietnamese": "Cô ấy rất thích âm nhạc và nghệ thuật biểu diễn."
    }
  },
  {
    "id": "boya2-18-25",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "知识",
    "pinyin": "zhīshi",
    "sinoVietnamese": "tri thức",
    "meaning": "kiến thức",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/知识.mp3",
    "exampleSentence": {
      "chinese": "读书能增长知识。",
      "pinyin": "Dúshū néng zēngzhǎng zhīshi.",
      "vietnamese": "Đọc sách có thể tăng kiến thức."
    }
  },
  {
    "id": "boya2-18-26",
    "lesson": 18,
    "lessonTitle": "Bài 18: 我看过京剧 (Tôi từng xem Kinh kịch)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "台词",
    "pinyin": "táicí",
    "sinoVietnamese": "đài từ",
    "meaning": "lời thoại (trong kịch, phim)",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/台词.mp3",
    "exampleSentence": {
      "chinese": "他记不住所有的台词。",
      "pinyin": "Tā jìbuzhù suǒyǒu de táicí.",
      "vietnamese": "Anh ấy không nhớ hết được tất cả các lời thoại."
    }
  },
  {
    "id": "boya2-19-1",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "人生",
    "pinyin": "rénshēng",
    "sinoVietnamese": "nhân sinh, sanh",
    "meaning": "cuộc sống",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/人生.mp3",
    "exampleSentence": {
      "chinese": "人生有很多困难。",
      "pinyin": "Rénshēng yǒu hěnduō kùnnán.",
      "vietnamese": "Cuộc sống có nhiều khó khăn."
    }
  },
  {
    "id": "boya2-19-2",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "脆",
    "pinyin": "cuì",
    "sinoVietnamese": "thúy",
    "meaning": "giòn",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/脆.mp3",
    "exampleSentence": {
      "chinese": "这个苹果又甜又脆，非常好吃。",
      "pinyin": "Zhè ge píngguǒ yòu tián yòu cuì, fēicháng hǎochī.",
      "vietnamese": "Quả táo này vừa ngọt vừa giòn, rất ngon."
    }
  },
  {
    "id": "boya2-19-3",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "反应",
    "pinyin": "fǎnyìng",
    "sinoVietnamese": "phản ứng",
    "meaning": "phản ứng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/反应.mp3",
    "exampleSentence": {
      "chinese": "他对这个消息反应很快。",
      "pinyin": "Tā duì zhè gè xiāo xī fǎn yīng hěn kuài.",
      "vietnamese": "Anh ấy phản ứng rất nhanh với tin tức này."
    }
  },
  {
    "id": "boya2-19-4",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "老",
    "pinyin": "lǎo",
    "sinoVietnamese": "lão",
    "meaning": "già",
    "partOfSpeech": "Tính từ / Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/老.mp3",
    "exampleSentence": {
      "chinese": "他老了",
      "pinyin": "Tā lǎo le",
      "vietnamese": "Ông ấy đã già"
    }
  },
  {
    "id": "boya2-19-5",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "别人",
    "pinyin": "biérén",
    "sinoVietnamese": "biệt nhân",
    "meaning": "người khác",
    "partOfSpeech": "Đại từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/别人.mp3",
    "exampleSentence": {
      "chinese": "不要嘲笑别人",
      "pinyin": "Bú yào cháo xiào bié rén",
      "vietnamese": "Đừng cười chê người khác"
    }
  },
  {
    "id": "boya2-19-6",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "照顾",
    "pinyin": "zhàogù",
    "sinoVietnamese": "chiếu cố",
    "meaning": "chăm sóc",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/照顾.mp3",
    "exampleSentence": {
      "chinese": "请照顾好自己",
      "pinyin": "Qǐng zhào gù hǎo zì jǐ",
      "vietnamese": "Hãy chăm sóc tốt bản thân mình"
    }
  },
  {
    "id": "boya2-19-7",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "关心",
    "pinyin": "guānxīn",
    "sinoVietnamese": "quan tâm",
    "meaning": "quan tâm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/关心.mp3",
    "exampleSentence": {
      "chinese": "妈妈很关心我的学习",
      "pinyin": "Mā mā hěn guān xīn wǒ de xué xí",
      "vietnamese": "Mẹ rất quan tâm đến việc học của tôi"
    }
  },
  {
    "id": "boya2-19-8",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "顽皮",
    "pinyin": "wánpí",
    "sinoVietnamese": "ngoan bì",
    "meaning": "nghịch ngợm",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/顽皮.mp3",
    "exampleSentence": {
      "chinese": "那个小男孩非常顽皮可爱。",
      "pinyin": "Nà ge xiǎo nánhái fēicháng wánpí kě'ài.",
      "vietnamese": "Cậu bé kia rất nghịch ngợm đáng yêu."
    }
  },
  {
    "id": "boya2-19-9",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "皱纹",
    "pinyin": "zhòuwén",
    "sinoVietnamese": "trứu văn",
    "meaning": "nếp nhăn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/皱纹.mp3",
    "exampleSentence": {
      "chinese": "奶奶脸上有很深的皱纹。",
      "pinyin": "Nǎinai liǎn shàng yǒu hěn shēn de zhòuwén.",
      "vietnamese": "Bà nội có những nếp nhăn sâu trên mặt."
    }
  },
  {
    "id": "boya2-19-10",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "臭",
    "pinyin": "chòu",
    "sinoVietnamese": "xú",
    "meaning": "hôi thối",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/臭.mp3",
    "exampleSentence": {
      "chinese": "这双鞋子太臭了，快拿去洗洗。",
      "pinyin": "zhè shuāng xié zi tài chòu le, kuài ná qù xǐ xi.",
      "vietnamese": "Đôi giày này thối quá, mau mang đi giặt đi."
    }
  },
  {
    "id": "boya2-19-11",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "嫌",
    "pinyin": "xián",
    "sinoVietnamese": "hiềm",
    "meaning": "ghét",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/嫌.mp3",
    "exampleSentence": {
      "chinese": "他嫌房间太小，想换一间大的。",
      "pinyin": "Tā xián fángjiān tài xiǎo, xiǎng huàn yì jiān dà de.",
      "vietnamese": "Cậu ấy chê phòng nhỏ quá, muốn đổi một phòng lớn hơn."
    }
  },
  {
    "id": "boya2-19-12",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "千万",
    "pinyin": "qiānwàn",
    "sinoVietnamese": "thiên vạn",
    "meaning": "nhất định",
    "partOfSpeech": "Phó từ / Số từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/千万.mp3",
    "exampleSentence": {
      "chinese": "路上千万要小心。",
      "pinyin": "Lù shàng qiān wàn yào xiǎo xīn.",
      "vietnamese": "Trên đường nhất định phải cẩn thận."
    }
  },
  {
    "id": "boya2-19-13",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "享受",
    "pinyin": "xiǎngshòu",
    "sinoVietnamese": "hưởng thụ",
    "meaning": "tận hưởng",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/享受.mp3",
    "exampleSentence": {
      "chinese": "退休以后，他很享受晚年生活。",
      "pinyin": "tuì xiū yǐ hòu, tā hěn xiǎng shòu wǎn nián shēng huó.",
      "vietnamese": "Sau khi nghỉ hưu, ông ấy rất tận hưởng cuộc sống tuổi già."
    }
  },
  {
    "id": "boya2-19-14",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "爱",
    "pinyin": "ài",
    "sinoVietnamese": "ái",
    "meaning": "yêu; tình yêu",
    "partOfSpeech": "Động từ / Danh từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/爱.mp3",
    "exampleSentence": {
      "chinese": "我爱妈妈",
      "pinyin": "Wǒ ài māma",
      "vietnamese": "Tôi yêu mẹ"
    }
  },
  {
    "id": "boya2-19-15",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "牙齿",
    "pinyin": "yáchǐ",
    "sinoVietnamese": "nha xỉ",
    "meaning": "răng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牙齿.mp3",
    "exampleSentence": {
      "chinese": "他每天都认真刷牙齿",
      "pinyin": "Tā měitiān dōu rènzhēn shuā yáchǐ",
      "vietnamese": "Anh ấy mỗi ngày đều đánh răng cẩn thận"
    }
  },
  {
    "id": "boya2-19-16",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "咬",
    "pinyin": "yǎo",
    "sinoVietnamese": "giảo",
    "meaning": "cắn",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/咬.mp3",
    "exampleSentence": {
      "chinese": "苹果太硬了，我几乎咬不动它。",
      "pinyin": "píng guǒ tài yìng le, wǒ jī hū yǎo bú dòng tā.",
      "vietnamese": "Quả táo cứng quá, tôi hầu như không cắn nổi."
    }
  },
  {
    "id": "boya2-19-17",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "动",
    "pinyin": "dòng",
    "sinoVietnamese": "động",
    "meaning": "di chuyển",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/动.mp3",
    "exampleSentence": {
      "chinese": "别动",
      "pinyin": "Bié dòng",
      "vietnamese": "Đừng cử động/đừng động đậy"
    }
  },
  {
    "id": "boya2-19-18",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "出生",
    "pinyin": "chūshēng",
    "sinoVietnamese": "xuất sinh, sanh",
    "meaning": "sinh ra",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/出生.mp3",
    "exampleSentence": {
      "chinese": "我出生在北京",
      "pinyin": "Wǒ chū shēng zài běi jīng",
      "vietnamese": "Tôi sinh ra ở Bắc Kinh"
    }
  },
  {
    "id": "boya2-19-19",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "忙碌",
    "pinyin": "mánglù",
    "sinoVietnamese": "mang lục",
    "meaning": "bận rộn",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忙碌.mp3",
    "exampleSentence": {
      "chinese": "工作很忙碌",
      "pinyin": "gōngzuò hěn mánglù",
      "vietnamese": "Công việc rất bận rộn"
    }
  },
  {
    "id": "boya2-19-20",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "能力",
    "pinyin": "nénglì",
    "sinoVietnamese": "năng lực",
    "meaning": "khả năng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/能力.mp3",
    "exampleSentence": {
      "chinese": "他有很强的学习能力。",
      "pinyin": "Tā yǒu hěn qiáng de xuéxí nénglì.",
      "vietnamese": "Anh ấy có khả năng học tập rất mạnh."
    }
  },
  {
    "id": "boya2-19-21",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "经验",
    "pinyin": "jīngyàn",
    "sinoVietnamese": "kinh nghiệm",
    "meaning": "kinh nghiệm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/经验.mp3",
    "exampleSentence": {
      "chinese": "他有很多教学经验。",
      "pinyin": "Tā yǒu hěn duō jiào xué jīng yàn.",
      "vietnamese": "Anh ấy có nhiều kinh nghiệm giảng dạy."
    }
  },
  {
    "id": "boya2-19-22",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "读书",
    "pinyin": "dúshū",
    "sinoVietnamese": "độc thư",
    "meaning": "học tập",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/读书.mp3",
    "exampleSentence": {
      "chinese": "我喜欢读书。",
      "pinyin": "Wǒ xǐhuan dúshū.",
      "vietnamese": "Tôi thích đọc sách."
    }
  },
  {
    "id": "boya2-19-23",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "了",
    "pinyin": "le",
    "sinoVietnamese": "liễu",
    "meaning": "trợ từ \"le\"",
    "partOfSpeech": "Trợ từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/了.mp3",
    "exampleSentence": {
      "chinese": "我吃完了",
      "pinyin": "Wǒ chī wán le",
      "vietnamese": "Tôi ăn xong rồi"
    }
  },
  {
    "id": "boya2-19-24",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "未来",
    "pinyin": "wèilái",
    "sinoVietnamese": "vị lai",
    "meaning": "tương lai",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/未来.mp3",
    "exampleSentence": {
      "chinese": "未来充满了希望。",
      "pinyin": "Wèilái chōngmǎn le xīwàng.",
      "vietnamese": "Tương lai đầy ắp hy vọng."
    }
  },
  {
    "id": "boya2-19-25",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "遮",
    "pinyin": "zhē",
    "sinoVietnamese": "già",
    "meaning": "che",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/遮.mp3",
    "exampleSentence": {
      "chinese": "她用帽子遮住了阳光。",
      "pinyin": "Tā yòng màozi zhēzhù le yángguāng.",
      "vietnamese": "Cô ấy dùng mũ che đi ánh nắng."
    }
  },
  {
    "id": "boya2-19-26",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "赶不上",
    "pinyin": "gǎnbushàng",
    "sinoVietnamese": "cản bất thượng",
    "meaning": "không theo kịp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/赶不上.mp3",
    "exampleSentence": {
      "chinese": "我跑得太慢，赶不上那辆公交车",
      "pinyin": "Wǒ pǎo de tài màn, gǎn bu shàng nà liàng gōngjiāochē",
      "vietnamese": "Tôi chạy quá chậm, không kịp chuyến xe buýt đó"
    }
  },
  {
    "id": "boya2-19-27",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "失去",
    "pinyin": "shīqù",
    "sinoVietnamese": "thất khứ",
    "meaning": "mất",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/失去.mp3",
    "exampleSentence": {
      "chinese": "他失去了一份好工作。",
      "pinyin": "Tā shī qù le yī fèn hǎo gōng zuò.",
      "vietnamese": "Anh ấy mất một công việc tốt."
    }
  },
  {
    "id": "boya2-19-28",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "宁静",
    "pinyin": "níngjìng",
    "sinoVietnamese": "ninh tĩnh",
    "meaning": "yên bình, tĩnh lặng",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/宁静.mp3",
    "exampleSentence": {
      "chinese": "乡村的夜晚非常宁静。",
      "pinyin": "Xiāngcūn de yèwǎn fēicháng níngjìng.",
      "vietnamese": "Đêm ở vùng quê rất yên bình."
    }
  },
  {
    "id": "boya2-19-29",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "吵",
    "pinyin": "chǎo",
    "sinoVietnamese": "sảo",
    "meaning": "ồn ào",
    "partOfSpeech": "Động từ / Tính từ (verb / Adjective)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吵.mp3",
    "exampleSentence": {
      "chinese": "别吵，我在睡觉。",
      "pinyin": "Bié chǎo, wǒ zài shuìjiào.",
      "vietnamese": "Đừng ồn, tôi đang ngủ."
    }
  },
  {
    "id": "boya2-19-30",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "难吃",
    "pinyin": "nánchī",
    "sinoVietnamese": "nan cật, ngật",
    "meaning": "khó ăn, dở (món ăn)",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难吃.mp3",
    "exampleSentence": {
      "chinese": "这道菜太难吃了。",
      "pinyin": "Zhè dào cài tài nánchī le.",
      "vietnamese": "Món ăn này dở quá."
    }
  },
  {
    "id": "boya2-19-31",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "稀饭",
    "pinyin": "xīfàn",
    "sinoVietnamese": "hi phạn",
    "meaning": "cháo loãng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/稀饭.mp3",
    "exampleSentence": {
      "chinese": "我生病的时候喜欢喝稀饭。",
      "pinyin": "Wǒ shēngbìng de shíhou xǐhuān hē xīfàn.",
      "vietnamese": "Khi tôi bị bệnh, tôi thích ăn cháo loãng."
    }
  },
  {
    "id": "boya2-19-32",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "抽空",
    "pinyin": "chōukòng",
    "sinoVietnamese": "trừu không",
    "meaning": "bớt chút thời gian, tranh thủ thời gian",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/抽空.mp3",
    "exampleSentence": {
      "chinese": "你什么时候有空抽空来我家玩？",
      "pinyin": "Nǐ shénme shíhou yǒu kòng chōukòng lái wǒ jiā wán?",
      "vietnamese": "Khi nào bạn có thời gian rảnh thì ghé nhà tôi chơi nhé?"
    }
  },
  {
    "id": "boya2-19-33",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "味",
    "pinyin": "wèi",
    "sinoVietnamese": "vị",
    "meaning": "vị, mùi vị",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/味.mp3",
    "exampleSentence": {
      "chinese": "这道菜的味道很独特。",
      "pinyin": "Zhè dào cài de wèidào hěn dútè.",
      "vietnamese": "Hương vị của món ăn này rất độc đáo."
    }
  },
  {
    "id": "boya2-19-34",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "有味儿",
    "pinyin": "yǒuwèir",
    "sinoVietnamese": "hữu, dựu vị nhi",
    "meaning": "có mùi vị (thơm ngon), có hương vị",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/有味儿.mp3",
    "exampleSentence": {
      "chinese": "这个菜很有味儿。",
      "pinyin": "Zhège cài hěn yǒu mèir.",
      "vietnamese": "Món ăn này rất đậm đà."
    }
  },
  {
    "id": "boya2-19-35",
    "lesson": 19,
    "lessonTitle": "Bài 19: 如果有一天… (Nếu một ngày nào đó…)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "海鸥",
    "pinyin": "hǎiōu",
    "sinoVietnamese": "hải âu",
    "meaning": "chim hải âu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/海鸥.mp3",
    "exampleSentence": {
      "chinese": "海鸥在海边自由飞翔。",
      "pinyin": "Hǎi'ōu zài hǎibiān zìyóu fēixiáng.",
      "vietnamese": "Hải âu tự do bay lượn trên bờ biển."
    }
  },
  {
    "id": "boya2-20-1",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "跟",
    "pinyin": "gēn",
    "sinoVietnamese": "cân",
    "meaning": "với; theo",
    "partOfSpeech": "Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/跟.mp3",
    "exampleSentence": {
      "chinese": "我跟你一起去。",
      "pinyin": "Wǒ gēn nǐ yìqǐ qù.",
      "vietnamese": "Tôi đi cùng với bạn."
    }
  },
  {
    "id": "boya2-20-2",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "寒假",
    "pinyin": "hánjià",
    "sinoVietnamese": "hàn giá",
    "meaning": "kỳ nghỉ đông",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/寒假.mp3",
    "exampleSentence": {
      "chinese": "寒假快到了。",
      "pinyin": "Hánjià kuài dào le.",
      "vietnamese": "Kỳ nghỉ đông sắp đến."
    }
  },
  {
    "id": "boya2-20-3",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "爱人",
    "pinyin": "àirén",
    "sinoVietnamese": "ái nhân",
    "meaning": "vợ chồng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/爱人.mp3",
    "exampleSentence": {
      "chinese": "这是我爱人",
      "pinyin": "Zhè shì wǒ ài rén",
      "vietnamese": "Đây là vợ/chồng tôi"
    }
  },
  {
    "id": "boya2-20-4",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "经过",
    "pinyin": "jīngguò",
    "sinoVietnamese": "kinh quá",
    "meaning": "đi qua; trải qua; thông qua",
    "partOfSpeech": "Động từ / Giới từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/经过.mp3",
    "exampleSentence": {
      "chinese": "我经过那家店",
      "pinyin": "Wǒ jīng guò nà jiā diàn",
      "vietnamese": "Tôi đi qua cửa hàng đó"
    }
  },
  {
    "id": "boya2-20-5",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "美丽",
    "pinyin": "měilì",
    "sinoVietnamese": "mĩ lệ",
    "meaning": "đẹp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/美丽.mp3",
    "exampleSentence": {
      "chinese": "她是一个非常美丽的女孩。",
      "pinyin": "Tā shì yī gè fēi cháng měi lì de nǚ hái.",
      "vietnamese": "Cô ấy là một cô gái rất xinh đẹp."
    }
  },
  {
    "id": "boya2-20-6",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "清晨",
    "pinyin": "qīngchén",
    "sinoVietnamese": "thanh thần",
    "meaning": "sáng sớm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/清晨.mp3",
    "exampleSentence": {
      "chinese": "清晨的公园空气非常清新。",
      "pinyin": "Qīngchén de gōngyuán kōngqì fēicháng qīngxīn.",
      "vietnamese": "Không khí trong công viên vào sáng sớm rất trong lành."
    }
  },
  {
    "id": "boya2-20-7",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "穿过",
    "pinyin": "chuānguò",
    "sinoVietnamese": "xuyên quá",
    "meaning": "xuyên qua",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/穿过.mp3",
    "exampleSentence": {
      "chinese": "我们穿过树林到达了湖边。",
      "pinyin": "Wǒmen chuānguò shùlín dàodá le húbiān.",
      "vietnamese": "Chúng tôi đi xuyên qua rừng cây đến được bờ hồ."
    }
  },
  {
    "id": "boya2-20-8",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "拼",
    "pinyin": "pīn",
    "sinoVietnamese": "bính",
    "meaning": "ghép",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拼.mp3",
    "exampleSentence": {
      "chinese": "大家一起拼搏，终于赢得了比赛。",
      "pinyin": "Dàjiā yìqǐ pīnbó, zhōngyú yíngdé le bǐsài.",
      "vietnamese": "Mọi người cùng nhau nỗ lực hết mình, cuối cùng đã thắng trận đấu."
    }
  },
  {
    "id": "boya2-20-9",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "街道",
    "pinyin": "jiēdào",
    "sinoVietnamese": "nhai đạo",
    "meaning": "đường phố",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/街道.mp3",
    "exampleSentence": {
      "chinese": "这条街道很热闹。",
      "pinyin": "Zhè tiáo jiēdào hěn rènao.",
      "vietnamese": "Con phố này rất nhộn nhịp."
    }
  },
  {
    "id": "boya2-20-10",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "目的地",
    "pinyin": "mùdìdì",
    "sinoVietnamese": "mục đích địa",
    "meaning": "điểm đến",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/目的地.mp3",
    "exampleSentence": {
      "chinese": "我们的目的地是北京。",
      "pinyin": "Wǒmen de mùdìdì shì Běijīng.",
      "vietnamese": "Điểm đến của chúng tôi là Bắc Kinh."
    }
  },
  {
    "id": "boya2-20-11",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "踏",
    "pinyin": "tà",
    "sinoVietnamese": "đạp",
    "meaning": "dẫm lên",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/踏.mp3",
    "exampleSentence": {
      "chinese": "他脚踏实地，一步步走向成功。",
      "pinyin": "Tā jiǎotà-shídì, yíbù-bù zǒuxiàng chénggōng.",
      "vietnamese": "Anh ấy làm việc chắc chắn, từng bước một đi đến thành công."
    }
  },
  {
    "id": "boya2-20-12",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "忽然",
    "pinyin": "hūrán",
    "sinoVietnamese": "hốt nhiên",
    "meaning": "đột nhiên",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/忽然.mp3",
    "exampleSentence": {
      "chinese": "忽然下雨了",
      "pinyin": "Hū rán xià yǔ le",
      "vietnamese": "Đột nhiên trời mưa"
    }
  },
  {
    "id": "boya2-20-13",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "飘",
    "pinyin": "piāo",
    "sinoVietnamese": "phiêu",
    "meaning": "bay lượn trong không khí",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/飘.mp3",
    "exampleSentence": {
      "chinese": "秋天到了，红叶在空中慢慢飘落。",
      "pinyin": "qiū tiān dào le, hóng yè zài kōng zhōng màn màn piāo luò.",
      "vietnamese": "Mùa thu đến rồi, lá đỏ từ từ bay rụng trong không trung."
    }
  },
  {
    "id": "boya2-20-14",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "瓷",
    "pinyin": "cí",
    "sinoVietnamese": "từ",
    "meaning": "sứ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/瓷.mp3",
    "exampleSentence": {
      "chinese": "中国景德镇的瓷器闻名世界。",
      "pinyin": "Zhōngguó Jǐngdézhèn de cíqì wénmíng shìjiè.",
      "vietnamese": "Đồ gốm sứ Cảnh Đức Trấn của Trung Quốc nổi tiếng thế giới."
    }
  },
  {
    "id": "boya2-20-15",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "厚",
    "pinyin": "hòu",
    "sinoVietnamese": "hậu",
    "meaning": "dày",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/厚.mp3",
    "exampleSentence": {
      "chinese": "冬天到了，要穿厚衣服。",
      "pinyin": "Dōngtiān dào le, yào chuān hòu yīfu.",
      "vietnamese": "Mùa đông đến rồi, phải mặc quần áo dày."
    }
  },
  {
    "id": "boya2-20-16",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "捧",
    "pinyin": "pěng",
    "sinoVietnamese": "phủng",
    "meaning": "nâng lên bằng hai tay",
    "partOfSpeech": "Động từ / Lượng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/捧.mp3",
    "exampleSentence": {
      "chinese": "她双手捧着一杯热茶。",
      "pinyin": "Tā shuāngshǒu pěng zhe yì bēi rè chá.",
      "vietnamese": "Cô ấy hai tay nâng một tách trà nóng."
    }
  },
  {
    "id": "boya2-20-17",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "惊讶",
    "pinyin": "jīngyà",
    "sinoVietnamese": "kinh nhạ",
    "meaning": "ngạc nhiên",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/惊讶.mp3",
    "exampleSentence": {
      "chinese": "听到这个消息，她感到十分惊讶。",
      "pinyin": "Tīng dào zhège xiāoxi, tā gǎndào shífēn jīngyà.",
      "vietnamese": "Khi nghe tin này, cô ấy cảm thấy vô cùng ngạc nhiên."
    }
  },
  {
    "id": "boya2-20-18",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "转身",
    "pinyin": "zhuǎnshēn",
    "sinoVietnamese": "chuyển thân",
    "meaning": "quay lại",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/转身.mp3",
    "exampleSentence": {
      "chinese": "他转身走了。",
      "pinyin": "Tā zhuǎnshēn zǒu le.",
      "vietnamese": "Anh ấy quay người đi rồi."
    }
  },
  {
    "id": "boya2-20-19",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "凉",
    "pinyin": "liáng",
    "sinoVietnamese": "lương",
    "meaning": "mát",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/凉.mp3",
    "exampleSentence": {
      "chinese": "今天天气很凉",
      "pinyin": "Jīn tiān tiān qì hěn liáng",
      "vietnamese": "Hôm nay thời tiết rất mát"
    }
  },
  {
    "id": "boya2-20-20",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "淡",
    "pinyin": "dàn",
    "sinoVietnamese": "đạm",
    "meaning": "nhạt",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/淡.mp3",
    "exampleSentence": {
      "chinese": "这道菜的味道太淡了，加点盐吧。",
      "pinyin": "zhè dào cài de wèi dao tài dàn le, jiā diǎn yán ba.",
      "vietnamese": "Món ăn này vị nhạt quá, thêm chút muối đi."
    }
  },
  {
    "id": "boya2-20-21",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "端",
    "pinyin": "duān",
    "sinoVietnamese": "đoan",
    "meaning": "đầu cuối",
    "partOfSpeech": "Danh từ / Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/端.mp3",
    "exampleSentence": {
      "chinese": "服务员给我们端上来了一盘热菜。",
      "pinyin": "Fúwùyuán gěi wǒmen duān shang lái le yì pán rè cài.",
      "vietnamese": "Người phục vụ bưng lên cho chúng tôi một đĩa đồ ăn nóng."
    }
  },
  {
    "id": "boya2-20-22",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "愿",
    "pinyin": "yuàn",
    "sinoVietnamese": "nguyện",
    "meaning": "ước, nguyện",
    "partOfSpeech": "Trợ động từ / Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/愿.mp3",
    "exampleSentence": {
      "chinese": "愿你天天开心，学业进步！",
      "pinyin": "Yuàn nǐ tiāntiān kāixīn, xuéyè jìnbù!",
      "vietnamese": "Chúc bạn mỗi ngày đều vui vẻ, học tập tiến bộ!"
    }
  },
  {
    "id": "boya2-20-23",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "认真",
    "pinyin": "rènzhēn",
    "sinoVietnamese": "nhận chân",
    "meaning": "chăm chỉ",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/认真.mp3",
    "exampleSentence": {
      "chinese": "他工作很认真",
      "pinyin": "Tā gōngzuò hěn rènzhēn",
      "vietnamese": "Anh ấy làm việc rất nghiêm túc"
    }
  },
  {
    "id": "boya2-20-24",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "仔细",
    "pinyin": "zǐ xì",
    "sinoVietnamese": "tể, tử tế",
    "meaning": "cẩn thận",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/仔细.mp3",
    "exampleSentence": {
      "chinese": "请仔细检查作业。",
      "pinyin": "Qǐng zǐxì jiǎnchá zuòyè.",
      "vietnamese": "Hãy kiểm tra bài tập cẩn thận."
    }
  },
  {
    "id": "boya2-20-25",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "温暖",
    "pinyin": "wēnnuǎn",
    "sinoVietnamese": "ôn noãn",
    "meaning": "ấm áp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/温暖.mp3",
    "exampleSentence": {
      "chinese": "母爱是温暖的。",
      "pinyin": "Mǔ ài shì wēn nuǎn de.",
      "vietnamese": "Tình mẫu thân rất ấm áp."
    }
  },
  {
    "id": "boya2-20-26",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "带动",
    "pinyin": "dàidòng",
    "sinoVietnamese": "đái, đới động",
    "meaning": "dẫn dắt",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/带动.mp3",
    "exampleSentence": {
      "chinese": "新技术带动了经济发展。",
      "pinyin": "Xīn jì shù dài dòng le jīng jì fā zhǎn.",
      "vietnamese": "Công nghệ mới đã thúc đẩy sự phát triển kinh tế."
    }
  },
  {
    "id": "boya2-20-27",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "欧洲",
    "pinyin": "Ōuzhōu",
    "sinoVietnamese": "âu châu",
    "meaning": "châu Âu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/欧洲.mp3",
    "exampleSentence": {
      "chinese": "这个欧洲很好。",
      "pinyin": "Zhège 欧洲 hěn hǎo.",
      "vietnamese": "欧洲 này rất tốt."
    }
  },
  {
    "id": "boya2-20-28",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "发脾气",
    "pinyin": "fāpíqì",
    "sinoVietnamese": "phát tì khí",
    "meaning": "nổi giận",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/发脾气.mp3",
    "exampleSentence": {
      "chinese": "他一遇到挫折就爱发脾气",
      "pinyin": "Tā yī yùdào cuòzhé jiù ài fā píqì",
      "vietnamese": "Anh ấy hễ gặp thất bại là hay nổi giận"
    }
  },
  {
    "id": "boya2-20-29",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "吵架",
    "pinyin": "chǎojià",
    "sinoVietnamese": "sảo giá",
    "meaning": "cãi nhau",
    "partOfSpeech": "Động từ (conflict verb)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/吵架.mp3",
    "exampleSentence": {
      "chinese": "他们又吵架了。",
      "pinyin": "Tāmen yòu chǎojià le.",
      "vietnamese": "Họ lại cãi nhau rồi."
    }
  },
  {
    "id": "boya2-20-30",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "控制",
    "pinyin": "kòngzhì",
    "sinoVietnamese": "khống chế",
    "meaning": "kiểm soát",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/控制.mp3",
    "exampleSentence": {
      "chinese": "他无法控制自己的情绪",
      "pinyin": "Tā wúfǎ kòngzhì zìjǐ de qíngxù",
      "vietnamese": "Anh ta không thể kiểm soát cảm xúc của mình"
    }
  },
  {
    "id": "boya2-20-31",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "拔",
    "pinyin": "bá",
    "sinoVietnamese": "bạt",
    "meaning": "kéo ra, nhổ ra",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/拔.mp3",
    "exampleSentence": {
      "chinese": "请拔牙",
      "pinyin": "Qǐng bá yá",
      "vietnamese": "Xin hãy nhổ răng"
    }
  },
  {
    "id": "boya2-20-32",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "伤口",
    "pinyin": "shāngkǒu",
    "sinoVietnamese": "thương khẩu",
    "meaning": "vết thương",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/伤口.mp3",
    "exampleSentence": {
      "chinese": "护士正在帮他处理伤口。",
      "pinyin": "Hùshi zhèngzài bāng tā chǔlǐ shāngkǒu.",
      "vietnamese": "Y tá đang giúp anh ấy xử lý vết thương."
    }
  },
  {
    "id": "boya2-20-33",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "石",
    "pinyin": "shí",
    "sinoVietnamese": "thạch",
    "meaning": "đá, hòn đá",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/石.mp3",
    "exampleSentence": {
      "chinese": "这座山有很多大石头。",
      "pinyin": "Zhè zuò shān yǒu hěn duō dà shítou.",
      "vietnamese": "Ngọn núi này có rất nhiều tảng đá lớn."
    }
  },
  {
    "id": "boya2-20-34",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "三三两两",
    "pinyin": "sānsanliǎngliǎng",
    "sinoVietnamese": "tam tam lưỡng, lượng, lạng lưỡng, lượng, lạng",
    "meaning": "lác đác vài ba (người/vật), rải rác từng tốp nhỏ.",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/三三两两.mp3",
    "exampleSentence": {
      "chinese": "他们三三两两地走在街上。",
      "pinyin": "Tāmen sānsānliǎngliǎng de zǒu zài jiē shàng.",
      "vietnamese": "Họ lác đác vài ba người đi trên đường."
    }
  },
  {
    "id": "boya2-20-35",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "洁白",
    "pinyin": "jiébái",
    "sinoVietnamese": "khiết bạch",
    "meaning": "trắng tinh, trắng muốt, trong trắng.",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/洁白.mp3",
    "exampleSentence": {
      "chinese": "雪花洁白无瑕。",
      "pinyin": "Xuěhuā jiébái wúxiá.",
      "vietnamese": "Bông tuyết trắng tinh không tì vết."
    }
  },
  {
    "id": "boya2-20-36",
    "lesson": 20,
    "lessonTitle": "Bài 20: 好咖啡总是放在热杯子里的 (Cà phê ngon luôn đựng trong tách nóng)",
    "unit": 4,
    "unitTitle": "Đơn vị 4: Văn hóa nghệ thuật & Chiêm nghiệm cuộc sống",
    "hanzi": "罗马",
    "pinyin": "Luómǎ",
    "sinoVietnamese": "la mã",
    "meaning": "roma (thủ đô của Ý).",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/罗马.mp3",
    "exampleSentence": {
      "chinese": "罗马是意大利的首都。",
      "pinyin": "Luómǎ shì Yìdàlì de shǒudū.",
      "vietnamese": "Roma là thủ đô của Ý."
    }
  },
  {
    "id": "boya2-21-1",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "老家",
    "pinyin": "lǎojiā",
    "sinoVietnamese": "lão gia",
    "meaning": "quê hương",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/老家.mp3",
    "exampleSentence": {
      "chinese": "春节回老家。",
      "pinyin": "Chūnjié huí lǎojiā.",
      "vietnamese": "Tết về quê."
    }
  },
  {
    "id": "boya2-21-2",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "城",
    "pinyin": "chéng",
    "sinoVietnamese": "thành",
    "meaning": "thành phố",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/城.mp3",
    "exampleSentence": {
      "chinese": "北京是一座大城。",
      "pinyin": "Běijīng shì yī zuò dà chéng.",
      "vietnamese": "Bắc Kinh là một thành phố lớn."
    }
  },
  {
    "id": "boya2-21-3",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "以外",
    "pinyin": "yǐwài",
    "sinoVietnamese": "dĩ ngoại",
    "meaning": "bên ngoài",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/以外.mp3",
    "exampleSentence": {
      "chinese": "这周以外",
      "pinyin": "Zhè zhōu yǐ wài",
      "vietnamese": "Ngoài tuần này"
    }
  },
  {
    "id": "boya2-21-4",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "团圆",
    "pinyin": "tuányuán",
    "sinoVietnamese": "đoàn viên",
    "meaning": "đoàn tụ",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/团圆.mp3",
    "exampleSentence": {
      "chinese": "中秋节是家人团圆的传统节日。",
      "pinyin": "zhōng qiū jié shì jiā rén tuán yuán de chuán tǒng jié rì.",
      "vietnamese": "Tết Trung thu là ngày lễ truyền thống để gia đình đoàn tụ."
    }
  },
  {
    "id": "boya2-21-5",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "羡慕",
    "pinyin": "xiànmù",
    "sinoVietnamese": "tiện mộ",
    "meaning": "ngưỡng mộ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/羡慕.mp3",
    "exampleSentence": {
      "chinese": "我很羡慕他",
      "pinyin": "Wǒ hěn xiànmù tā",
      "vietnamese": "Tôi rất ngưỡng mộ anh ấy"
    }
  },
  {
    "id": "boya2-21-6",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "遍",
    "pinyin": "biàn",
    "sinoVietnamese": "biến",
    "meaning": "lần",
    "partOfSpeech": "Danh từ / Lượng từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/遍.mp3",
    "exampleSentence": {
      "chinese": "读了一遍",
      "pinyin": "Dú le yī biàn",
      "vietnamese": "Đọc một lượt"
    }
  },
  {
    "id": "boya2-21-7",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "愿望",
    "pinyin": "yuànwàng",
    "sinoVietnamese": "nguyện vọng",
    "meaning": "mong muốn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/愿望.mp3",
    "exampleSentence": {
      "chinese": "我的愿望是成为一名医生。",
      "pinyin": "Wǒ de yuànwàng shì chéngwéi yīmíng yīshēng.",
      "vietnamese": "Ước mơ của tôi là trở thành một bác sĩ."
    }
  },
  {
    "id": "boya2-21-8",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "政府",
    "pinyin": "zhèngfǔ",
    "sinoVietnamese": "chính phủ",
    "meaning": "chính phủ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/政府.mp3",
    "exampleSentence": {
      "chinese": "这个政府很好。",
      "pinyin": "Zhè gè zhèng fǔ hěn hǎo.",
      "vietnamese": "chính phủ này rất tốt."
    }
  },
  {
    "id": "boya2-21-9",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "实行",
    "pinyin": "shíxíng",
    "sinoVietnamese": "thực hành",
    "meaning": "thực hiện",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实行.mp3",
    "exampleSentence": {
      "chinese": "我们要实行新政策。",
      "pinyin": "Wǒ men yào shí xíng xīn zhèng cè.",
      "vietnamese": "Chúng ta phải thực hiện chính sách mới."
    }
  },
  {
    "id": "boya2-21-10",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "休假",
    "pinyin": "xiūjià",
    "sinoVietnamese": "hưu giá",
    "meaning": "nghỉ phép",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/休假.mp3",
    "exampleSentence": {
      "chinese": "我下个月休假",
      "pinyin": "Wǒ xià gè yuè xiū jiǎ",
      "vietnamese": "Tháng sau tôi nghỉ phép"
    }
  },
  {
    "id": "boya2-21-11",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "制度",
    "pinyin": "zhìdù",
    "sinoVietnamese": "chế độ",
    "meaning": "hệ thống",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/制度.mp3",
    "exampleSentence": {
      "chinese": "这个公司有很多规章制度。",
      "pinyin": "Zhège gōngsī yǒu hěn duō guīzhāng zhìdù.",
      "vietnamese": "Công ty này có rất nhiều quy chế và quy định."
    }
  },
  {
    "id": "boya2-21-12",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "难得",
    "pinyin": "nándé",
    "sinoVietnamese": "nan đắc",
    "meaning": "hiếm",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/难得.mp3",
    "exampleSentence": {
      "chinese": "这是难得的机会。",
      "pinyin": "Zhè shì nándé de jīhuì.",
      "vietnamese": "Đây là cơ hội hiếm có."
    }
  },
  {
    "id": "boya2-21-13",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "旅行社",
    "pinyin": "lǚxíngshè",
    "sinoVietnamese": "lữ hành xã",
    "meaning": "công ty du lịch",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/旅行社.mp3",
    "exampleSentence": {
      "chinese": "我通过旅行社订了机票。",
      "pinyin": "Wǒ tōngguò lǚxíngshè dìng le jīpiào.",
      "vietnamese": "Tôi đặt vé máy bay qua công ty du lịch."
    }
  },
  {
    "id": "boya2-21-14",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "海边",
    "pinyin": "hǎibiān",
    "sinoVietnamese": "hải biên",
    "meaning": "bờ biển",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/海边.mp3",
    "exampleSentence": {
      "chinese": "我们去海边玩",
      "pinyin": "Wǒ men qù hǎi biān wán",
      "vietnamese": "Chúng tôi đi biển chơi"
    }
  },
  {
    "id": "boya2-21-15",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "晒",
    "pinyin": "shài",
    "sinoVietnamese": "sái",
    "meaning": "phơi nắng; làm khô dưới ánh mặt trời",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/晒.mp3",
    "exampleSentence": {
      "chinese": "这个晒很好。",
      "pinyin": "Zhè gè shài hěn hǎo.",
      "vietnamese": "phơi nắng; làm khô dưới ánh mặt trời này rất tốt."
    }
  },
  {
    "id": "boya2-21-16",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "草原",
    "pinyin": "cǎoyuán",
    "sinoVietnamese": "thảo nguyên",
    "meaning": "thảo nguyên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/草原.mp3",
    "exampleSentence": {
      "chinese": "内蒙古有大片的草原。",
      "pinyin": "Nèi Měnggǔ yǒu dà piàn de cǎoyuán.",
      "vietnamese": "Nội Mông có những vùng thảo nguyên rộng lớn."
    }
  },
  {
    "id": "boya2-21-17",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "马",
    "pinyin": "mǎ",
    "sinoVietnamese": "mã",
    "meaning": "ngựa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/马.mp3",
    "exampleSentence": {
      "chinese": "这匹马跑得很快。",
      "pinyin": "Zhè pǐ mǎ pǎo de hěn kuài.",
      "vietnamese": "Con ngựa này chạy rất nhanh."
    }
  },
  {
    "id": "boya2-21-18",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "制订",
    "pinyin": "zhìdìng",
    "sinoVietnamese": "chế đính",
    "meaning": "lập",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/制订.mp3",
    "exampleSentence": {
      "chinese": "我们制订了计划",
      "pinyin": "wǒmen zhìdìng le jìhuà",
      "vietnamese": "Chúng tôi đã lập kế hoạch"
    }
  },
  {
    "id": "boya2-21-19",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "省",
    "pinyin": "shěng",
    "sinoVietnamese": "tỉnh",
    "meaning": "tỉnh",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/省.mp3",
    "exampleSentence": {
      "chinese": "我来自广东省",
      "pinyin": "Wǒ lái zì guǎng dōng shěng",
      "vietnamese": "Tôi đến từ tỉnh Quảng Đông"
    }
  },
  {
    "id": "boya2-21-20",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "普通",
    "pinyin": "pǔtōng",
    "sinoVietnamese": "phổ thông",
    "meaning": "thông thường",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/普通.mp3",
    "exampleSentence": {
      "chinese": "我是一个普通的学生",
      "pinyin": "Wǒ shì yī gè pǔ tōng de xué shēng",
      "vietnamese": "Tôi là một học sinh bình thường"
    }
  },
  {
    "id": "boya2-21-21",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "青年",
    "pinyin": "qīngnián",
    "sinoVietnamese": "thanh niên",
    "meaning": "thanh niên",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/青年.mp3",
    "exampleSentence": {
      "chinese": "很多青年喜欢音乐",
      "pinyin": "Hěn duō qīng nián xǐ huān yīn lè",
      "vietnamese": "Rất nhiều thanh niên thích âm nhạc"
    }
  },
  {
    "id": "boya2-21-22",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "外国",
    "pinyin": "wàiguó",
    "sinoVietnamese": "ngoại quốc",
    "meaning": "nước ngoài",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/外国.mp3",
    "exampleSentence": {
      "chinese": "他去过很多外国",
      "pinyin": "Tā qùguo hěnduō wàiguó",
      "vietnamese": "Anh ấy đã đi rất nhiều nước ngoài"
    }
  },
  {
    "id": "boya2-21-23",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "长江",
    "pinyin": "Chángjiāng",
    "sinoVietnamese": "trường giang",
    "meaning": "Trường Giang",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/长江.mp3",
    "exampleSentence": {
      "chinese": "长江是中国最长的河流。",
      "pinyin": "Cháng Jiāng shì Zhōngguó zuì cháng de héliú.",
      "vietnamese": "Trường Giang là con sông dài nhất Trung Quốc."
    }
  },
  {
    "id": "boya2-21-24",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "奇迹",
    "pinyin": "qíjì",
    "sinoVietnamese": "kỳ, cơ tích",
    "meaning": "phép lạ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/奇迹.mp3",
    "exampleSentence": {
      "chinese": "医生说他的康复简直是一个奇迹。",
      "pinyin": "yī shēng shuō tā de kāng fù jiǎn zhí shì yí gè qí jì.",
      "vietnamese": "Bác sĩ nói sự hồi phục của anh ấy quả là một phép màu."
    }
  },
  {
    "id": "boya2-21-25",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "感动",
    "pinyin": "gǎndòng",
    "sinoVietnamese": "cảm động",
    "meaning": "cảm động",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/感动.mp3",
    "exampleSentence": {
      "chinese": "这个故事很感动",
      "pinyin": "Zhè gè gù shì hěn gǎn dòng",
      "vietnamese": "Câu chuyện này rất cảm động"
    }
  },
  {
    "id": "boya2-21-26",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "祖国",
    "pinyin": "zǔguó",
    "sinoVietnamese": "tổ quốc",
    "meaning": "tổ quốc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/祖国.mp3",
    "exampleSentence": {
      "chinese": "我热爱我的祖国和人民。",
      "pinyin": "wǒ rè ài wǒ de zǔ guó hé rén mín.",
      "vietnamese": "Tôi yêu tổ quốc và nhân dân của tôi."
    }
  },
  {
    "id": "boya2-21-27",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "退休",
    "pinyin": "tuìxiū",
    "sinoVietnamese": "thối, thoái hưu",
    "meaning": "nghỉ hưu",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/退休.mp3",
    "exampleSentence": {
      "chinese": "我爸爸明年就要退休了。",
      "pinyin": "Wǒ bàba míngnián jiù yào tuìxiū le.",
      "vietnamese": "Bố tôi năm sau sẽ nghỉ hưu."
    }
  },
  {
    "id": "boya2-21-28",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "群",
    "pinyin": "qún",
    "sinoVietnamese": "quần",
    "meaning": "một từ đo lường cho đàn hoặc nhóm",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/群.mp3",
    "exampleSentence": {
      "chinese": "一群孩子在操场上玩。",
      "pinyin": "Yì qún háizi zài cāochǎng shàng wán.",
      "vietnamese": "Một nhóm trẻ em đang chơi trên sân vận động."
    }
  },
  {
    "id": "boya2-21-29",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "相遇",
    "pinyin": "xiāngyù",
    "sinoVietnamese": "tương ngộ",
    "meaning": "gặp nhau",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/相遇.mp3",
    "exampleSentence": {
      "chinese": "我们在图书馆相遇",
      "pinyin": "Wǒmen zài túshūguǎn xiāngyù",
      "vietnamese": "Chúng tôi gặp nhau ở thư viện"
    }
  },
  {
    "id": "boya2-21-30",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "推销员",
    "pinyin": "tuīxiāoyuán",
    "sinoVietnamese": "thôi tiêu viên",
    "meaning": "nhân viên tiếp thị, nhân viên bán hàng, người bán dạo.",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/推销员.mp3",
    "exampleSentence": {
      "chinese": "他是一名成功的推销员。",
      "pinyin": "Tā shì yī míng chénggōng de tuīxiāoyuán.",
      "vietnamese": "Anh ấy là một nhân viên bán hàng thành công."
    }
  },
  {
    "id": "boya2-21-31",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "黄金周",
    "pinyin": "huángjīnzhōu",
    "sinoVietnamese": "hoàng, huỳnh kim chu, châu",
    "meaning": "tuần lễ vàng (kỳ nghỉ dài 7 ngày ở Trung Quốc, thường là Quốc khánh hoặc Quốc tế Lao động).",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/黄金周.mp3",
    "exampleSentence": {
      "chinese": "黄金周期间，旅游景点人山人海。",
      "pinyin": "Huángjīnzhōu qíjiān, lǚyóu jǐngdiǎn rénshānrénhǎi.",
      "vietnamese": "Trong Tuần lễ vàng, các điểm du lịch đông nghịt người."
    }
  },
  {
    "id": "boya2-21-32",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "五一",
    "pinyin": "wǔyī",
    "sinoVietnamese": "ngũ nhất",
    "meaning": "mùng 1 tháng 5 (Ngày Quốc tế Lao động).",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/五一.mp3",
    "exampleSentence": {
      "chinese": "五一劳动节是公共假日。",
      "pinyin": "Wǔyī Láodòngjié shì gōnggòng jiàrì.",
      "vietnamese": "Ngày Quốc tế Lao động Mùng 1 tháng 5 là ngày nghỉ lễ công cộng."
    }
  },
  {
    "id": "boya2-21-33",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "十一",
    "pinyin": "shíyī",
    "sinoVietnamese": "thập nhất",
    "meaning": "mùng 1 tháng 10 (Quốc khánh Trung Quốc).",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/十一.mp3",
    "exampleSentence": {
      "chinese": "十一国庆节快到了。",
      "pinyin": "Shíyī Guóqìngjié kuài dào le.",
      "vietnamese": "Ngày Quốc khánh Mùng 1 tháng 10 sắp đến rồi."
    }
  },
  {
    "id": "boya2-21-34",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "黄河",
    "pinyin": "Huánghé",
    "sinoVietnamese": "hoàng, huỳnh hà",
    "meaning": "sông Hoàng Hà.",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/黄河.mp3",
    "exampleSentence": {
      "chinese": "黄河是中国第二大河流。",
      "pinyin": "Huánghé shì Zhōngguó dì èr dà héliú.",
      "vietnamese": "Hoàng Hà là con sông lớn thứ hai của Trung Quốc."
    }
  },
  {
    "id": "boya2-21-35",
    "lesson": 21,
    "lessonTitle": "Bài 21: 黄金周，痛痛快快玩儿一周 (Tuần lễ vàng, chơi thỏa thích một tuần)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "河北",
    "pinyin": "Héběi",
    "sinoVietnamese": "hà bắc",
    "meaning": "hà Bắc (tỉnh ở Trung Quốc).",
    "partOfSpeech": "Danh từ riêng",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/河北.mp3",
    "exampleSentence": {
      "chinese": "河北省位于中国北方。",
      "pinyin": "Héběi shěng wèiyú Zhōngguó běifāng.",
      "vietnamese": "Tỉnh Hà Bắc nằm ở phía bắc Trung Quốc."
    }
  },
  {
    "id": "boya2-22-1",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "会",
    "pinyin": "huì",
    "sinoVietnamese": "hội",
    "meaning": "có thể",
    "partOfSpeech": "Trợ động từ / Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/会.mp3",
    "exampleSentence": {
      "chinese": "我会说中文",
      "pinyin": "Wǒ huì shuō Zhōng wén",
      "vietnamese": "Tôi biết nói tiếng Trung"
    }
  },
  {
    "id": "boya2-22-2",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "决心",
    "pinyin": "juéxīn",
    "sinoVietnamese": "quyết tâm",
    "meaning": "quyết tâm",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/决心.mp3",
    "exampleSentence": {
      "chinese": "他下定决心一定要学好中文。",
      "pinyin": "Tā xiàdìng juéxīn yídìng yào xuéhǎo Zhōngwén.",
      "vietnamese": "Anh ấy hạ quyết tâm nhất định phải học giỏi tiếng Trung."
    }
  },
  {
    "id": "boya2-22-3",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "儿子",
    "pinyin": "érzi",
    "sinoVietnamese": "nhi tử",
    "meaning": "con trai",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/儿子.mp3",
    "exampleSentence": {
      "chinese": "我儿子今年五岁。",
      "pinyin": "Wǒ érzi jīnnián wǔ suì.",
      "vietnamese": "Con trai tôi năm nay năm tuổi."
    }
  },
  {
    "id": "boya2-22-4",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "去世",
    "pinyin": "qùshì",
    "sinoVietnamese": "khứ thế",
    "meaning": "qua đời",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/去世.mp3",
    "exampleSentence": {
      "chinese": "他的祖父在上个月因病不幸去世了。",
      "pinyin": "tā de zǔ fù zài shàng gè yuè yīn bìng bù xìng qù shì le.",
      "vietnamese": "Ông nội của anh ấy đã không may qua đời vì bệnh vào tháng trước."
    }
  },
  {
    "id": "boya2-22-5",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "性格",
    "pinyin": "xìnggé",
    "sinoVietnamese": "tính các, cách",
    "meaning": "tính cách",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/性格.mp3",
    "exampleSentence": {
      "chinese": "他的性格很开朗。",
      "pinyin": "Tā de xìnggé hěn kāilǎng.",
      "vietnamese": "Tính cách của anh ấy rất cởi mở."
    }
  },
  {
    "id": "boya2-22-6",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "成绩",
    "pinyin": "chéngjì",
    "sinoVietnamese": "thành tích",
    "meaning": "thành tích",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/成绩.mp3",
    "exampleSentence": {
      "chinese": "考试成绩很好",
      "pinyin": "Kǎo shì chéng jì hěn hǎo",
      "vietnamese": "Điểm thi rất tốt"
    }
  },
  {
    "id": "boya2-22-7",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "愿意",
    "pinyin": "yuànyì",
    "sinoVietnamese": "nguyện ý",
    "meaning": "sẵn lòng",
    "partOfSpeech": "Trợ động từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/愿意.mp3",
    "exampleSentence": {
      "chinese": "我很愿意帮助你。",
      "pinyin": "Wǒ hěn yuànyì bāngzhù nǐ.",
      "vietnamese": "Tôi rất sẵn lòng giúp đỡ bạn."
    }
  },
  {
    "id": "boya2-22-8",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "谈话",
    "pinyin": "tánhuà",
    "sinoVietnamese": "đàm thoại",
    "meaning": "cuộc nói chuyện",
    "partOfSpeech": "Động từ / Danh từ (verb / Noun)",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/谈话.mp3",
    "exampleSentence": {
      "chinese": "我们谈话谈了一个小时。",
      "pinyin": "Wǒmen tánhuà tán le yī gè xiǎoshí.",
      "vietnamese": "Chúng tôi nói chuyện được một tiếng."
    }
  },
  {
    "id": "boya2-22-9",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "结束",
    "pinyin": "jiéshù",
    "sinoVietnamese": "kết thúc",
    "meaning": "kết thúc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/结束.mp3",
    "exampleSentence": {
      "chinese": "会议已经结束了。",
      "pinyin": "Huì yì yǐ jīng jié shù le.",
      "vietnamese": "Cuộc họp đã kết thúc rồi."
    }
  },
  {
    "id": "boya2-22-10",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "物理",
    "pinyin": "wùlǐ",
    "sinoVietnamese": "vật lí",
    "meaning": "vật lý",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/物理.mp3",
    "exampleSentence": {
      "chinese": "学习物理",
      "pinyin": "Xuéxí wùlǐ",
      "vietnamese": "Học vật lý"
    }
  },
  {
    "id": "boya2-22-11",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "化学",
    "pinyin": "huàxué",
    "sinoVietnamese": "hóa học",
    "meaning": "hóa học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/化学.mp3",
    "exampleSentence": {
      "chinese": "我对化学这门学科非常感兴趣。",
      "pinyin": "Wǒ duì huà xué zhè mén xué kē fēi cháng gǎn xìng qù.",
      "vietnamese": "Tôi rất có hứng thú với môn hóa học này."
    }
  },
  {
    "id": "boya2-22-12",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "外语",
    "pinyin": "wàiyǔ",
    "sinoVietnamese": "ngoại ngữ",
    "meaning": "ngoại ngữ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/外语.mp3",
    "exampleSentence": {
      "chinese": "我想学外语。",
      "pinyin": "Wǒ xiǎng xué wàiyǔ.",
      "vietnamese": "Tôi muốn học ngoại ngữ."
    }
  },
  {
    "id": "boya2-22-13",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "及格",
    "pinyin": "jígé",
    "sinoVietnamese": "cập các, cách",
    "meaning": "đạt yêu cầu",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/及格.mp3",
    "exampleSentence": {
      "chinese": "考试及格了。",
      "pinyin": "Kǎoshì jígé le.",
      "vietnamese": "Kỳ thi đã qua môn."
    }
  },
  {
    "id": "boya2-22-14",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "批评",
    "pinyin": "pīpíng",
    "sinoVietnamese": "phê bình",
    "meaning": "phê bình",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/批评.mp3",
    "exampleSentence": {
      "chinese": "老师批评他没有完成作业。",
      "pinyin": "Lǎoshī pīpíng tā méiyǒu wánchéng zuòyè.",
      "vietnamese": "Thầy cô phê bình em ấy vì không hoàn thành bài tập."
    }
  },
  {
    "id": "boya2-22-15",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "表扬",
    "pinyin": "biǎoyáng",
    "sinoVietnamese": "biểu dương",
    "meaning": "khen ngợi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/表扬.mp3",
    "exampleSentence": {
      "chinese": "老师表扬了他的进步。",
      "pinyin": "Lǎoshī biǎoyáng le tā de jìnbù.",
      "vietnamese": "Thầy giáo đã khen ngợi sự tiến bộ của anh ấy."
    }
  },
  {
    "id": "boya2-22-16",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "作用",
    "pinyin": "zuòyòng",
    "sinoVietnamese": "tác dụng",
    "meaning": "tác dụng",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/作用.mp3",
    "exampleSentence": {
      "chinese": "这个药有很好的作用。",
      "pinyin": "Zhè gè yào yǒu hěn hǎo de zuò yòng.",
      "vietnamese": "Thuốc này có tác dụng rất tốt."
    }
  },
  {
    "id": "boya2-22-17",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "回答",
    "pinyin": "huídá",
    "sinoVietnamese": "hồi đáp",
    "meaning": "trả lời",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/回答.mp3",
    "exampleSentence": {
      "chinese": "请回答问题",
      "pinyin": "Qǐng huídá wèntí",
      "vietnamese": "Xin hãy trả lời câu hỏi"
    }
  },
  {
    "id": "boya2-22-18",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "家长",
    "pinyin": "jiāzhǎng",
    "sinoVietnamese": "gia trưởng",
    "meaning": "phụ huynh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/家长.mp3",
    "exampleSentence": {
      "chinese": "明天开家长会",
      "pinyin": "Míng tiān kāi jiā zhǎng huì",
      "vietnamese": "Ngày mai họp phụ huynh"
    }
  },
  {
    "id": "boya2-22-19",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "记得",
    "pinyin": "jìde",
    "sinoVietnamese": "ký đắc",
    "meaning": "nhớ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/记得.mp3",
    "exampleSentence": {
      "chinese": "我记得你",
      "pinyin": "Wǒ jì de nǐ",
      "vietnamese": "Tôi nhớ bạn"
    }
  },
  {
    "id": "boya2-22-20",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "点头",
    "pinyin": "diǎntóu",
    "sinoVietnamese": "điểm đầu",
    "meaning": "gật đầu",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点头.mp3",
    "exampleSentence": {
      "chinese": "他向我点头",
      "pinyin": "Tā xiàng wǒ diǎn tóu",
      "vietnamese": "Anh ấy gật đầu với tôi"
    }
  },
  {
    "id": "boya2-22-21",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "本来",
    "pinyin": "běnlái",
    "sinoVietnamese": "bản lai",
    "meaning": "nguyên bản",
    "partOfSpeech": "Trạng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/本来.mp3",
    "exampleSentence": {
      "chinese": "我本来不想去的，但他邀请我了。",
      "pinyin": "Wǒ běnlái bù xiǎng qù de, dàn tā yāoqǐng wǒ le.",
      "vietnamese": "Tôi vốn không định đi, nhưng anh ấy mời rồi."
    }
  },
  {
    "id": "boya2-22-22",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "开玩笑",
    "pinyin": "kāi wánxiào",
    "sinoVietnamese": "khai ngoạn tiếu",
    "meaning": "đùa cợt",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开玩笑.mp3",
    "exampleSentence": {
      "chinese": "别开玩笑,我是认真的",
      "pinyin": "Bié kāiwánxiào, wǒ shì rènzhēn de",
      "vietnamese": "Đừng đùa, tôi nói nghiệt đấy"
    }
  },
  {
    "id": "boya2-22-23",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "成为",
    "pinyin": "chéngwéi",
    "sinoVietnamese": "thành vi",
    "meaning": "trở thành",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/成为.mp3",
    "exampleSentence": {
      "chinese": "他成为了医生",
      "pinyin": "Tā chéng wèi le yī shēng",
      "vietnamese": "Anh ấy đã trở thành bác sĩ"
    }
  },
  {
    "id": "boya2-22-24",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "骄傲",
    "pinyin": "jiāo'ào",
    "sinoVietnamese": "kiêu ngạo",
    "meaning": "tự hào",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/骄傲.mp3",
    "exampleSentence": {
      "chinese": "老师和父母都为你的成绩感到骄傲。",
      "pinyin": "Lǎoshī hé fùmǔ dōu wèi nǐ de chéngjì gǎndào jiāo'ào.",
      "vietnamese": "Thầy cô và cha mẹ đều cảm thấy tự hào về thành tích của con."
    }
  },
  {
    "id": "boya2-22-25",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "家教",
    "pinyin": "jiājiào",
    "sinoVietnamese": "gia giáo",
    "meaning": "gia sư",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/家教.mp3",
    "exampleSentence": {
      "chinese": "她找了一位家教辅导孩子的数学",
      "pinyin": "Tā zhǎo le yī wèi jiājiào fǔdǎo háizi de shùxué",
      "vietnamese": "Cô tìm một gia sư kèm toán cho con"
    }
  },
  {
    "id": "boya2-22-26",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "打工",
    "pinyin": "dǎgōng",
    "sinoVietnamese": "đả công",
    "meaning": "làm thêm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打工.mp3",
    "exampleSentence": {
      "chinese": "学生在餐厅打工",
      "pinyin": "Xué shēng zài cān tīng dǎ gōng",
      "vietnamese": "Học sinh làm thêm ở nhà hàng"
    }
  },
  {
    "id": "boya2-22-27",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "听讲",
    "pinyin": "tīngjiǎng",
    "sinoVietnamese": "thính giảng",
    "meaning": "nghe giảng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/听讲.mp3",
    "exampleSentence": {
      "chinese": "上课要认真听讲",
      "pinyin": "Shàng kè yào rèn zhēn tīng jiǎng",
      "vietnamese": "Học phải chăm chú nghe giảng"
    }
  },
  {
    "id": "boya2-22-28",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "故意",
    "pinyin": "gùyì",
    "sinoVietnamese": "cố ý",
    "meaning": "cố ý",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/故意.mp3",
    "exampleSentence": {
      "chinese": "我不是故意的",
      "pinyin": "Wǒ bù shì gù yì de",
      "vietnamese": "Tôi không cố ý"
    }
  },
  {
    "id": "boya2-22-29",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "放弃",
    "pinyin": "fàngqì",
    "sinoVietnamese": "phóng khí",
    "meaning": "từ bỏ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/放弃.mp3",
    "exampleSentence": {
      "chinese": "遇到困难千万不要轻易放弃。",
      "pinyin": "Yù dào kùnnan qiānwàn bú yào qīngyì fàngqì.",
      "vietnamese": "Khi gặp khó khăn tuyệt đối đừng dễ dàng từ bỏ."
    }
  },
  {
    "id": "boya2-22-30",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "不管",
    "pinyin": "bùguǎn",
    "sinoVietnamese": "bất quản",
    "meaning": "bất kể",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/不管.mp3",
    "exampleSentence": {
      "chinese": "不管多晚，我都要回家。",
      "pinyin": "Bùguǎn duō wǎn, wǒ dōu yào huíjiā.",
      "vietnamese": "Bất kể muộn thế nào, tôi cũng phải về nhà."
    }
  },
  {
    "id": "boya2-22-31",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "沟通",
    "pinyin": "gōu tōng",
    "sinoVietnamese": "câu thông",
    "meaning": "giao tiếp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/沟通.mp3",
    "exampleSentence": {
      "chinese": "我们需要加强沟通。",
      "pinyin": "Wǒmen xūyào jiāqiáng gōutōng.",
      "vietnamese": "Chúng ta cần tăng cường giao tiếp."
    }
  },
  {
    "id": "boya2-22-32",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "缺课",
    "pinyin": "quēkè",
    "sinoVietnamese": "khuyết khóa",
    "meaning": "bỏ học, nghỉ học, vắng mặt trong giờ học.",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/缺课.mp3",
    "exampleSentence": {
      "chinese": "他因为生病缺课了。",
      "pinyin": "Tā yīnwèi shēngbìng quēkè le.",
      "vietnamese": "Anh ấy nghỉ học vì bị ốm."
    }
  },
  {
    "id": "boya2-22-33",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "成绩单",
    "pinyin": "chéngjìdān",
    "sinoVietnamese": "thành tích đơn",
    "meaning": "bảng điểm, phiếu báo kết quả học tập.",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/成绩单.mp3",
    "exampleSentence": {
      "chinese": "老师发下了期末成绩单。",
      "pinyin": "Lǎoshī fā xià le qīmò chéngjìdān.",
      "vietnamese": "Giáo viên đã phát bảng điểm cuối kỳ."
    }
  },
  {
    "id": "boya2-22-34",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "课余",
    "pinyin": "kèyú",
    "sinoVietnamese": "khóa dư",
    "meaning": "ngoài giờ học, giờ giải lao.",
    "partOfSpeech": "Danh từ / Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/课余.mp3",
    "exampleSentence": {
      "chinese": "课余时间他喜欢打篮球。",
      "pinyin": "Kèyú shíjiān tā xǐhuān dǎ lánqiú.",
      "vietnamese": "Ngoài giờ học anh ấy thích chơi bóng rổ."
    }
  },
  {
    "id": "boya2-22-35",
    "lesson": 22,
    "lessonTitle": "Bài 22: 一个电话 (Một cuộc điện thoại)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "玩笑",
    "pinyin": "wánxiào",
    "sinoVietnamese": "ngoạn tiếu",
    "meaning": "chuyện đùa, trò đùa; đùa giỡn, bông đùa.",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/玩笑.mp3",
    "exampleSentence": {
      "chinese": "他只是开个玩笑，你别当真。",
      "pinyin": "Tā zhǐshì kāi gè wánxiào, nǐ bié dàngzhēn.",
      "vietnamese": "Anh ấy chỉ đùa thôi, bạn đừng coi là thật."
    }
  },
  {
    "id": "boya2-23-1",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "叫",
    "pinyin": "jiào",
    "sinoVietnamese": "khiếu",
    "meaning": "gọi",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/叫.mp3",
    "exampleSentence": {
      "chinese": "你叫什么名字？",
      "pinyin": "Nǐ jiào shénme míngzi?",
      "vietnamese": "Bạn tên gì?"
    }
  },
  {
    "id": "boya2-23-2",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "敢",
    "pinyin": "gǎn",
    "sinoVietnamese": "cảm",
    "meaning": "dám",
    "partOfSpeech": "Động từ / Trợ từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/敢.mp3",
    "exampleSentence": {
      "chinese": "你敢去吗？",
      "pinyin": "Nǐ gǎn qù ma ？",
      "vietnamese": "Bạn dám đi không?"
    }
  },
  {
    "id": "boya2-23-3",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "沟通",
    "pinyin": "gōu tōng",
    "sinoVietnamese": "câu thông",
    "meaning": "giao tiếp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/沟通.mp3",
    "exampleSentence": {
      "chinese": "我们需要加强沟通。",
      "pinyin": "Wǒmen xūyào jiāqiáng gōutōng.",
      "vietnamese": "Chúng ta cần tăng cường giao tiếp."
    }
  },
  {
    "id": "boya2-23-4",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "开学",
    "pinyin": "kāixué",
    "sinoVietnamese": "khai học",
    "meaning": "khai giảng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/开学.mp3",
    "exampleSentence": {
      "chinese": "九月一号开学",
      "pinyin": "Jiǔ yuè yī hào kāi xué",
      "vietnamese": "Mùng một tháng chín khai giảng"
    }
  },
  {
    "id": "boya2-23-5",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "班主任",
    "pinyin": "bānzhǔrèn",
    "sinoVietnamese": "ban chủ nhậm",
    "meaning": "giáo viên chủ nhiệm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/班主任.mp3",
    "exampleSentence": {
      "chinese": "我们的班主任是一位非常负责任的老师。",
      "pinyin": "wǒ men de bān zhǔ rèn shì yī wèi fēi cháng fù zé rèn de lǎo shī.",
      "vietnamese": "Giáo viên chủ nhiệm của chúng tôi là một người thầy rất có trách nhiệm."
    }
  },
  {
    "id": "boya2-23-6",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "于是",
    "pinyin": "yúshì",
    "sinoVietnamese": "vu thị",
    "meaning": "sau đó",
    "partOfSpeech": "Liên từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/于是.mp3",
    "exampleSentence": {
      "chinese": "下雨了，于是比赛取消了。",
      "pinyin": "Xiàyǔ le, yúshì bǐsài qǔxiāo le.",
      "vietnamese": "Trời mưa, sau đó trận đấu bị hủy bỏ."
    }
  },
  {
    "id": "boya2-23-7",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "紧",
    "pinyin": "jǐn",
    "sinoVietnamese": "khẩn",
    "meaning": "chặt",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/紧.mp3",
    "exampleSentence": {
      "chinese": "时间很紧。",
      "pinyin": "Shí jiān hěn jǐn.",
      "vietnamese": "Thời gian rất gấp."
    }
  },
  {
    "id": "boya2-23-8",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "挨",
    "pinyin": "āi",
    "sinoVietnamese": "ai",
    "meaning": "gần",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挨.mp3",
    "exampleSentence": {
      "chinese": "两座教学楼挨得很近。",
      "pinyin": "Liǎng zuò jiàoxuélóu āi de hěn jìn.",
      "vietnamese": "Hai toà nhà giảng đường nằm sát kề nhau."
    }
  },
  {
    "id": "boya2-23-9",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "接着",
    "pinyin": "jiēzhe",
    "sinoVietnamese": "tiếp trước",
    "meaning": "tiếp tục; sau đó, rồi",
    "partOfSpeech": "Liên từ / Phó từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/接着.mp3",
    "exampleSentence": {
      "chinese": "吃完饭接着看电视",
      "pinyin": "Chī wán fàn jiē zhe kàn diàn shì",
      "vietnamese": "Ăn xong cơm rồi xem TV"
    }
  },
  {
    "id": "boya2-23-10",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "顿",
    "pinyin": "dùn",
    "sinoVietnamese": "đốn",
    "meaning": "một bữa",
    "partOfSpeech": "Lượng từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/顿.mp3",
    "exampleSentence": {
      "chinese": "我们吃了一顿丰盛的晚餐。",
      "pinyin": "Wǒmen chī le yí dùn fēngshèng de wǎncān.",
      "vietnamese": "Chúng tôi đã ăn một bữa tối thịnh soạn."
    }
  },
  {
    "id": "boya2-23-11",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "小声",
    "pinyin": "xiǎoshēng",
    "sinoVietnamese": "tiểu thanh",
    "meaning": "thì thầm",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/小声.mp3",
    "exampleSentence": {
      "chinese": "图书馆里请小声说话。",
      "pinyin": "tú shū guǎn lǐ qǐng xiǎo shēng shuō huà.",
      "vietnamese": "Trong thư viện xin vui lòng nói nhỏ."
    }
  },
  {
    "id": "boya2-23-12",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "从前",
    "pinyin": "cóngqián",
    "sinoVietnamese": "tòng tiền",
    "meaning": "ngày xưa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/从前.mp3",
    "exampleSentence": {
      "chinese": "从前有一个美丽的村庄。",
      "pinyin": "Cóngqián yǒu yīgè měilì de cūnzhuāng.",
      "vietnamese": "Ngày xưa có một ngôi làng đẹp."
    }
  },
  {
    "id": "boya2-23-13",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "外号",
    "pinyin": "wàihào",
    "sinoVietnamese": "ngoại hiệu",
    "meaning": "biệt danh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/外号.mp3",
    "exampleSentence": {
      "chinese": "他有一个外号",
      "pinyin": "Tā yǒu yī ge wài hào",
      "vietnamese": "Hắn có một biệt danh"
    }
  },
  {
    "id": "boya2-23-14",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "馋",
    "pinyin": "chán",
    "sinoVietnamese": "sàm",
    "meaning": "háu ăn",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/馋.mp3",
    "exampleSentence": {
      "chinese": "看到满桌的美食，我嘴馋极了。",
      "pinyin": "Kàndào mǎn zhuō de měishí, wǒ zuǐ chán jí le.",
      "vietnamese": "Trông thấy đồ ăn ngon đầy bàn, tôi thèm ơi là thèm."
    }
  },
  {
    "id": "boya2-23-15",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "老婆",
    "pinyin": "lǎopo",
    "sinoVietnamese": "lão bà",
    "meaning": "vợ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/老婆.mp3",
    "exampleSentence": {
      "chinese": "他和老婆结婚已经十年了。",
      "pinyin": "tā hé lǎo po jié hūn yǐ jīng shí nián le.",
      "vietnamese": "Anh ấy và vợ đã kết hôn được mười năm rồi."
    }
  },
  {
    "id": "boya2-23-16",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "宴会",
    "pinyin": "yànhuì",
    "sinoVietnamese": "yến hội",
    "meaning": "tiệc",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/宴会.mp3",
    "exampleSentence": {
      "chinese": "今天的宴会是为了欢迎新同事。",
      "pinyin": "jīn tiān de yàn huì shì wèi le huān yíng xīn tóng shì.",
      "vietnamese": "Bữa tiệc hôm nay là để chào đón đồng nghiệp mới."
    }
  },
  {
    "id": "boya2-23-17",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "屋子",
    "pinyin": "wūzi",
    "sinoVietnamese": "ốc tử",
    "meaning": "nhà",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/屋子.mp3",
    "exampleSentence": {
      "chinese": "请把屋子打扫得干干净净。",
      "pinyin": "Qǐng bǎ wūzi dǎsǎo de gāngānjìngjìng.",
      "vietnamese": "Xin hãy dọn dẹp căn phòng thật sạch sẽ."
    }
  },
  {
    "id": "boya2-23-18",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "sinoVietnamese": "ngưu nãi",
    "meaning": "sữa",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/牛奶.mp3",
    "exampleSentence": {
      "chinese": "我每天早上都喝牛奶。",
      "pinyin": "Wǒ měitiān zǎoshang dōu hē niúnǎi.",
      "vietnamese": "Tôi uống sữa mỗi buổi sáng."
    }
  },
  {
    "id": "boya2-23-19",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "反正",
    "pinyin": "fǎnzhèng",
    "sinoVietnamese": "phản chính",
    "meaning": "dù sao",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/反正.mp3",
    "exampleSentence": {
      "chinese": "反正我已经决定了。",
      "pinyin": "Fǎnzhèng wǒ yǐjīng juédìng le.",
      "vietnamese": "Dù sao thì tôi đã quyết định rồi."
    }
  },
  {
    "id": "boya2-23-20",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "犯",
    "pinyin": "fàn",
    "sinoVietnamese": "phạm",
    "meaning": "phạm",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/犯.mp3",
    "exampleSentence": {
      "chinese": "犯了错误就要勇敢改正。",
      "pinyin": "Fàn le cuòwù jiù yào yǒnggǎn gǎizhèng.",
      "vietnamese": "Phạm phải sai lầm thì phải dũng cảm sửa đổi."
    }
  },
  {
    "id": "boya2-23-21",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "报道",
    "pinyin": "bàodào",
    "sinoVietnamese": "báo đạo",
    "meaning": "báo cáo",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/报道.mp3",
    "exampleSentence": {
      "chinese": "报纸上报道了这条新闻。",
      "pinyin": "Bàozhǐ shàng bàodào le zhè tiáo xīnwén.",
      "vietnamese": "Báo giấy đã đưa tin này."
    }
  },
  {
    "id": "boya2-23-22",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "实在",
    "pinyin": "shízài",
    "sinoVietnamese": "thực tại",
    "meaning": "thực sự",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/实在.mp3",
    "exampleSentence": {
      "chinese": "实在太好了",
      "pinyin": "Shí zài tài hǎo le",
      "vietnamese": "Thực sự quá tốt"
    }
  },
  {
    "id": "boya2-23-23",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "船",
    "pinyin": "chuán",
    "sinoVietnamese": "thuyền",
    "meaning": "thuyền, tàu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/船.mp3",
    "exampleSentence": {
      "chinese": "湖面上有很多小船。",
      "pinyin": "hú miàn shàng yǒu hěn duō xiǎo chuán.",
      "vietnamese": "Trên mặt hồ có rất nhiều thuyền nhỏ."
    }
  },
  {
    "id": "boya2-23-24",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "护照",
    "pinyin": "hùzhào",
    "sinoVietnamese": "hộ chiếu",
    "meaning": "hộ chiếu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/护照.mp3",
    "exampleSentence": {
      "chinese": "我需要一本护照",
      "pinyin": "Wǒ xū yào yī běn hù zhào",
      "vietnamese": "Tôi cần một hộ chiếu"
    }
  },
  {
    "id": "boya2-23-25",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "太太",
    "pinyin": "tàitai",
    "sinoVietnamese": "thái thái",
    "meaning": "bà, vợ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/太太.mp3",
    "exampleSentence": {
      "chinese": "这是我太太",
      "pinyin": "Zhè shì wǒ tài tài",
      "vietnamese": "Đây là vợ tôi"
    }
  },
  {
    "id": "boya2-23-26",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "面包",
    "pinyin": "miànbāo",
    "sinoVietnamese": "diện, miến bao",
    "meaning": "bánh mì",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面包.mp3",
    "exampleSentence": {
      "chinese": "我吃面包",
      "pinyin": "Wǒ chī miànbāo",
      "vietnamese": "Tôi ăn bánh mì"
    }
  },
  {
    "id": "boya2-23-27",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "声音",
    "pinyin": "shēngyīn",
    "sinoVietnamese": "thanh âm",
    "meaning": "âm thanh",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/声音.mp3",
    "exampleSentence": {
      "chinese": "她的声音很好听。",
      "pinyin": "Tā de shēng yīn hěn hǎo tīng.",
      "vietnamese": "Giọng nói của cô ấy rất dễ nghe."
    }
  },
  {
    "id": "boya2-23-28",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "眼泪",
    "pinyin": "yǎnlèi",
    "sinoVietnamese": "nhãn lệ",
    "meaning": "nước mắt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/眼泪.mp3",
    "exampleSentence": {
      "chinese": "听到这个感人的故事，她流下了眼泪。",
      "pinyin": "Tīng dào zhè ge gǎnrén de gùshi, tā liúxià le yǎnlèi.",
      "vietnamese": "Nghe xong câu chuyện cảm động này, cô ấy đã rơi nước mắt."
    }
  },
  {
    "id": "boya2-23-29",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "擦",
    "pinyin": "cā",
    "sinoVietnamese": "sát",
    "meaning": "chà, lau",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/擦.mp3",
    "exampleSentence": {
      "chinese": "这个擦很好。",
      "pinyin": "Zhè gè cā hěn hǎo.",
      "vietnamese": "chà, lau này rất tốt."
    }
  },
  {
    "id": "boya2-23-30",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "抱",
    "pinyin": "bào",
    "sinoVietnamese": "bão",
    "meaning": "ôm",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/抱.mp3",
    "exampleSentence": {
      "chinese": "这个抱很好。",
      "pinyin": "Zhè gè bào hěn hǎo.",
      "vietnamese": "ôm này rất tốt."
    }
  },
  {
    "id": "boya2-23-31",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "哭",
    "pinyin": "kū",
    "sinoVietnamese": "khốc",
    "meaning": "khóc",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哭.mp3",
    "exampleSentence": {
      "chinese": "婴儿在哭。",
      "pinyin": "Yīng ér zài kū.",
      "vietnamese": "Em bé đang khóc."
    }
  },
  {
    "id": "boya2-23-32",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "挨打",
    "pinyin": "āidǎ",
    "sinoVietnamese": "ai đả",
    "meaning": "bị đánh",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挨打.mp3",
    "exampleSentence": {
      "chinese": "他挨打了",
      "pinyin": "Tā áidǎle",
      "vietnamese": "Anh ta bị đánh"
    }
  },
  {
    "id": "boya2-23-33",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "女儿",
    "pinyin": "nǚ'ér",
    "sinoVietnamese": "nữ nhi",
    "meaning": "con gái",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/女儿.mp3",
    "exampleSentence": {
      "chinese": "这是我女儿",
      "pinyin": "Zhè shì wǒ nǚ'ér",
      "vietnamese": "Đây là con gái tôi"
    }
  },
  {
    "id": "boya2-23-34",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "似的",
    "pinyin": "shìde",
    "sinoVietnamese": "tự đích",
    "meaning": "giống như",
    "partOfSpeech": "Trợ từ so sánh",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/似的.mp3",
    "exampleSentence": {
      "chinese": "他像个孩子似的。",
      "pinyin": "Tā xiàng gè háizi shìde.",
      "vietnamese": "Anh ấy giống như một đứa trẻ."
    }
  },
  {
    "id": "boya2-23-35",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "馒头",
    "pinyin": "mántou",
    "sinoVietnamese": "man đầu",
    "meaning": "bánh bao hấp",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/馒头.mp3",
    "exampleSentence": {
      "chinese": "吃馒头",
      "pinyin": "Chī mántou",
      "vietnamese": "Ăn bánh bao"
    }
  },
  {
    "id": "boya2-23-36",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "狠心",
    "pinyin": "hěnxīn",
    "sinoVietnamese": "ngận tâm",
    "meaning": "quyết tâm",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/狠心.mp3",
    "exampleSentence": {
      "chinese": "他怎么能狠心抛弃自己生病的小狗？",
      "pinyin": "tā zěn me néng hěn xīn pāo qì zì jǐ shēng bìng de xiǎo gǒu?",
      "vietnamese": "Sao anh ta có thể nhẫn tâm bỏ rơi chú chó con bị bệnh của mình chứ?"
    }
  },
  {
    "id": "boya2-23-37",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "sinoVietnamese": "kiểm, thiểm",
    "meaning": "mặt",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/脸.mp3",
    "exampleSentence": {
      "chinese": "她的脸很漂亮",
      "pinyin": "Tā de liǎn hěn piāo liàng",
      "vietnamese": "Khuôn mặt cô ấy rất đẹp"
    }
  },
  {
    "id": "boya2-23-38",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "摸",
    "pinyin": "mō",
    "sinoVietnamese": "mô",
    "meaning": "chạm vào",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/摸.mp3",
    "exampleSentence": {
      "chinese": "这是摸",
      "pinyin": "Zhè shì 摸",
      "vietnamese": "Đây là chạm vào"
    }
  },
  {
    "id": "boya2-23-39",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "聚餐",
    "pinyin": "jùcān",
    "sinoVietnamese": "tụ xan",
    "meaning": "ăn liên hoan, tụ tập ăn uống, bữa ăn tập thể.",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/聚餐.mp3",
    "exampleSentence": {
      "chinese": "周末我们班组织了一次聚餐。",
      "pinyin": "Zhōumò wǒmen bān zǔzhī le yī cì jùcān.",
      "vietnamese": "Cuối tuần lớp chúng tôi đã tổ chức một bữa liên hoan."
    }
  },
  {
    "id": "boya2-23-40",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "班会",
    "pinyin": "bānhuì",
    "sinoVietnamese": "ban hội",
    "meaning": "buổi họp lớp, sinh hoạt lớp.",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/班会.mp3",
    "exampleSentence": {
      "chinese": "今天下午有班会。",
      "pinyin": "Jīntiān xiàwǔ yǒu bānhuì.",
      "vietnamese": "Chiều nay có buổi họp lớp."
    }
  },
  {
    "id": "boya2-23-41",
    "lesson": 23,
    "lessonTitle": "Bài 23: 笑话 (Chuyện cười)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "烙饼",
    "pinyin": "làobǐng",
    "sinoVietnamese": "lạc bính",
    "meaning": "bánh rán, bánh dẹt áp chảo (một loại bánh mì dẹt của Trung Quốc).",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/烙饼.mp3",
    "exampleSentence": {
      "chinese": "妈妈早上做了烙饼给我吃。",
      "pinyin": "Māma zǎoshang zuò le làobǐng gěi wǒ chī.",
      "vietnamese": "Sáng nay mẹ làm bánh rán cho tôi ăn."
    }
  },
  {
    "id": "boya2-24-1",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "分",
    "pinyin": "fēn",
    "sinoVietnamese": "phân",
    "meaning": "sự khác biệt; phân biệt",
    "partOfSpeech": "Động từ / Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分.mp3",
    "exampleSentence": {
      "chinese": "现在三点十分",
      "pinyin": "Xiànzài sān diǎn shí fēn",
      "vietnamese": "Bây giờ là 3 giờ 10 phút"
    }
  },
  {
    "id": "boya2-24-2",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "错过",
    "pinyin": "cuòguò",
    "sinoVietnamese": "thác quá",
    "meaning": "bỏ lỡ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/错过.mp3",
    "exampleSentence": {
      "chinese": "要是再不走，我们就会错过这趟火车。",
      "pinyin": "Yàoshi zài bù zǒu, wǒmen jiù huì cuòguò zhè tàng huǒchē.",
      "vietnamese": "Nếu không đi ngay thì chúng ta sẽ bỏ lỡ chuyến tàu này."
    }
  },
  {
    "id": "boya2-24-3",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "分别",
    "pinyin": "fēnbié",
    "sinoVietnamese": "phân biệt",
    "meaning": "sự khác biệt",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/分别.mp3",
    "exampleSentence": {
      "chinese": "我们要分别对待这些问题。",
      "pinyin": "Wǒ men yào fēn bié duì dài zhè xiē wèn tí.",
      "vietnamese": "Chúng ta cần phân biệt xử dụng các vấn đề này."
    }
  },
  {
    "id": "boya2-24-4",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "迷",
    "pinyin": "mí",
    "sinoVietnamese": "mê",
    "meaning": "bối rối; bị bối rối",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/迷.mp3",
    "exampleSentence": {
      "chinese": "他是一个地道的足球迷。",
      "pinyin": "tā shì yí gè dì dào de zú qiú mí.",
      "vietnamese": "Anh ấy là một người hâm mộ bóng đá đích thực."
    }
  },
  {
    "id": "boya2-24-5",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "姑娘",
    "pinyin": "gūniang",
    "sinoVietnamese": "cô nương",
    "meaning": "cô gái",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/姑娘.mp3",
    "exampleSentence": {
      "chinese": "那个姑娘长得很漂亮，性格也很好。",
      "pinyin": "Nàge gūniang zhǎng de hěn piàoliang, xìnggé yě hěn hǎo.",
      "vietnamese": "Cô gái đó rất xinh đẹp, tính cách cũng rất tốt."
    }
  },
  {
    "id": "boya2-24-6",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "敲",
    "pinyin": "qiāo",
    "sinoVietnamese": "xao",
    "meaning": "gõ",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/敲.mp3",
    "exampleSentence": {
      "chinese": "有人在敲门",
      "pinyin": "Yǒu rén zài qiāomén",
      "vietnamese": "Có người đang gõ cửa"
    }
  },
  {
    "id": "boya2-24-7",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "妻子",
    "pinyin": "qīzi",
    "sinoVietnamese": "thê tử",
    "meaning": "vợ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/妻子.mp3",
    "exampleSentence": {
      "chinese": "这是我的妻子。",
      "pinyin": "Zhè shì wǒ de qīzi.",
      "vietnamese": "Đây là vợ tôi."
    }
  },
  {
    "id": "boya2-24-8",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "仍然",
    "pinyin": "réngrán",
    "sinoVietnamese": "nhưng nhiên",
    "meaning": "vẫn",
    "partOfSpeech": "Trạng từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/仍然.mp3",
    "exampleSentence": {
      "chinese": "虽然下雨了，但他仍然坚持锻炼。",
      "pinyin": "Suīrán xià yǔ le, dàn tā réngrán jiānchí duànliàn.",
      "vietnamese": "Dù đã mưa, nhưng anh ấy vẫn kiên trì tập thể dục."
    }
  },
  {
    "id": "boya2-24-9",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "研究",
    "pinyin": "yánjiū",
    "sinoVietnamese": "nghiên cứu",
    "meaning": "nghiên cứu",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/研究.mp3",
    "exampleSentence": {
      "chinese": "他研究中国文化已经十年了。",
      "pinyin": "Tā yánjiū Zhōngguó wénhuà yǐjī shí nián le.",
      "vietnamese": "Anh ấy nghiên cứu văn hóa Trung Quốc đã mười năm rồi."
    }
  },
  {
    "id": "boya2-24-10",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "哲学",
    "pinyin": "zhéxué",
    "sinoVietnamese": "triết học",
    "meaning": "triết học",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哲学.mp3",
    "exampleSentence": {
      "chinese": "哲学是一门探讨人生意义的深奥学科。",
      "pinyin": "zhé xué shì yī mén tàn tǎo rén shēng yì yì de shēn ào xué kē.",
      "vietnamese": "Triết học là một môn học sâu sắc nghiên cứu về ý nghĩa nhân sinh."
    }
  },
  {
    "id": "boya2-24-11",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "精神",
    "pinyin": "jīngshén",
    "sinoVietnamese": "tinh thần",
    "meaning": "tinh thần",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/精神.mp3",
    "exampleSentence": {
      "chinese": "这种精神值得我们学习。",
      "pinyin": "Zhè zhǒng jīng shén zhí dé wǒ men xué xí.",
      "vietnamese": "Tinh thần này đáng để chúng ta học hỏi."
    }
  },
  {
    "id": "boya2-24-12",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "坏处",
    "pinyin": "huàichu",
    "sinoVietnamese": "hoại xứ, xử",
    "meaning": "điều xấu",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/坏处.mp3",
    "exampleSentence": {
      "chinese": "抽烟的坏处很多",
      "pinyin": "Chōu yān de huài chù hěn duō",
      "vietnamese": "Hút thuốc có nhiều điều xấu"
    }
  },
  {
    "id": "boya2-24-13",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "列",
    "pinyin": "liè",
    "sinoVietnamese": "liệt",
    "meaning": "hàng",
    "partOfSpeech": "Danh từ / Lượng từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/列.mp3",
    "exampleSentence": {
      "chinese": "请把这些文件按顺序排列。",
      "pinyin": "Qǐng bǎ zhèxiē wénjiàn àn shùnxù páiliè.",
      "vietnamese": "Vui lòng sắp xếp các tài liệu này theo thứ tự."
    }
  },
  {
    "id": "boya2-24-14",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "复杂",
    "pinyin": "fùzá",
    "sinoVietnamese": "phục, phú, phúc, phức tạp",
    "meaning": "phức tạp",
    "partOfSpeech": "Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/复杂.mp3",
    "exampleSentence": {
      "chinese": "这个问题很复杂，需要仔细研究。",
      "pinyin": "Zhège wèntí hěn fùzá, xūyào zǐxì yánjiū.",
      "vietnamese": "Vấn đề này rất phức tạp, cần nghiên cứu kỹ."
    }
  },
  {
    "id": "boya2-24-15",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "结论",
    "pinyin": "jiélùn",
    "sinoVietnamese": "kết luận",
    "meaning": "kết luận",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/结论.mp3",
    "exampleSentence": {
      "chinese": "经过充分讨论，大家得出了统一的结论。",
      "pinyin": "Jīngguò chōngfèn tǎolùn, dàjiā déchū le tǒngyī de jiélùn.",
      "vietnamese": "Trải qua thảo luận kỹ lưỡng, mọi người đã rút ra được kết luận thống nhất."
    }
  },
  {
    "id": "boya2-24-16",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "选择",
    "pinyin": "xuǎnzé",
    "sinoVietnamese": "tuyển trạch",
    "meaning": "chọn; lựa chọn",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/选择.mp3",
    "exampleSentence": {
      "chinese": "这个选择很好。",
      "pinyin": "Zhè gè xuǎn zé hěn hǎo.",
      "vietnamese": "chọn; lựa chọn này rất tốt."
    }
  },
  {
    "id": "boya2-24-17",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "面前",
    "pinyin": "miànqián",
    "sinoVietnamese": "diện, miến tiền",
    "meaning": "trước mặt",
    "partOfSpeech": "Danh từ / Từ chỉ phương vị",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/面前.mp3",
    "exampleSentence": {
      "chinese": "在我面前",
      "pinyin": "Zài wǒ miàn qián",
      "vietnamese": "Trước mặt tôi"
    }
  },
  {
    "id": "boya2-24-18",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "经历",
    "pinyin": "jīnglì",
    "sinoVietnamese": "kinh lịch",
    "meaning": "trải nghiệm",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/经历.mp3",
    "exampleSentence": {
      "chinese": "他有很多工作经验。",
      "pinyin": "Tā yǒu hěn duō gōng zuò jīng yàn.",
      "vietnamese": "Anh ấy có nhiều kinh nghiệm làm việc."
    }
  },
  {
    "id": "boya2-24-19",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "娶",
    "pinyin": "qǔ",
    "sinoVietnamese": "thú",
    "meaning": "cưới",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/娶.mp3",
    "exampleSentence": {
      "chinese": "他梦想有一天能娶到自己心爱的女孩。",
      "pinyin": "tā mèng xiǎng yǒu yì tiān néng qǔ dào zì jǐ xīn ài de nǚ hái.",
      "vietnamese": "Anh ấy mơ ước có một ngày có thể cưới được cô gái mình yêu thương."
    }
  },
  {
    "id": "boya2-24-20",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "挡",
    "pinyin": "dǎng",
    "sinoVietnamese": "đáng",
    "meaning": "chặn",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/挡.mp3",
    "exampleSentence": {
      "chinese": "别挡我的路，请让一下。",
      "pinyin": "bié dǎng wǒ de lù, qǐng ràng yí xià.",
      "vietnamese": "Đừng chặn đường của tôi, xin nhường đường một chút."
    }
  },
  {
    "id": "boya2-24-21",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "几乎",
    "pinyin": "jīhū",
    "sinoVietnamese": "kỉ hồ, hô",
    "meaning": "hầu như",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/几乎.mp3",
    "exampleSentence": {
      "chinese": "这个几乎很好。",
      "pinyin": "Zhè gè jǐ hū hěn hǎo.",
      "vietnamese": "hầu như này rất tốt."
    }
  },
  {
    "id": "boya2-24-22",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "相信",
    "pinyin": "xiāngxìn",
    "sinoVietnamese": "tương tín",
    "meaning": "tin tưởng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/相信.mp3",
    "exampleSentence": {
      "chinese": "我相信你",
      "pinyin": "Wǒ xiāng xìn nǐ",
      "vietnamese": "Tôi tin tưởng bạn"
    }
  },
  {
    "id": "boya2-24-23",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "临",
    "pinyin": "lín",
    "sinoVietnamese": "lâm",
    "meaning": "sắp",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/临.mp3",
    "exampleSentence": {
      "chinese": "临走前他向大家挥手告别。",
      "pinyin": "Lín zǒu qián tā xiàng dàjiā huīshǒu gàobié.",
      "vietnamese": "Trước lúc đi anh ấy vẫy tay chào tạm biệt mọi người."
    }
  },
  {
    "id": "boya2-24-24",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "所有",
    "pinyin": "suǒyǒu",
    "sinoVietnamese": "sở hữu",
    "meaning": "tất cả",
    "partOfSpeech": "Đại từ / Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/所有.mp3",
    "exampleSentence": {
      "chinese": "所有人",
      "pinyin": "Suǒ yǒu rén",
      "vietnamese": "Tất cả mọi người"
    }
  },
  {
    "id": "boya2-24-25",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "段",
    "pinyin": "duàn",
    "sinoVietnamese": "đoạn",
    "meaning": "đoạn",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/段.mp3",
    "exampleSentence": {
      "chinese": "这一段路很长",
      "pinyin": "Zhè yī duàn lù hěn cháng",
      "vietnamese": "Đoạn đường này rất dài"
    }
  },
  {
    "id": "boya2-24-26",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "犹豫",
    "pinyin": "yóuyù",
    "sinoVietnamese": "do dự",
    "meaning": "do dự",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/犹豫.mp3",
    "exampleSentence": {
      "chinese": "他犹豫了一下才回答",
      "pinyin": "Tā yóuyù le yīxià cái huídá",
      "vietnamese": "Anh ta do dự một lúc rồi mới trả lời"
    }
  },
  {
    "id": "boya2-24-27",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "追求",
    "pinyin": "zhuīqiú",
    "sinoVietnamese": "truy cầu",
    "meaning": "theo đuổi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/追求.mp3",
    "exampleSentence": {
      "chinese": "这个追求很好。",
      "pinyin": "Zhè gè zhuī qiú hěn hǎo.",
      "vietnamese": "theo đuổi này rất tốt."
    }
  },
  {
    "id": "boya2-24-28",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "消息",
    "pinyin": "xiāoxi",
    "sinoVietnamese": "tiêu tức",
    "meaning": "tin tức",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/消息.mp3",
    "exampleSentence": {
      "chinese": "你听到什么消息了吗？",
      "pinyin": "Nǐ tīng dào shén me xiāo xī le ma ？",
      "vietnamese": "Bạn nghe được tin tức gì chưa?"
    }
  },
  {
    "id": "boya2-24-29",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "塌",
    "pinyin": "tā",
    "sinoVietnamese": "tháp",
    "meaning": "sụp đổ",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/塌.mp3",
    "exampleSentence": {
      "chinese": "暴雨过后，那堵老墙塌了。",
      "pinyin": "Bàoyǔ guòhòu, nà dǔ lǎo qiáng tā le.",
      "vietnamese": "Sau cơn mưa lớn, bức tường cũ kia đã đổ sụp xuống."
    }
  },
  {
    "id": "boya2-24-30",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "叹气",
    "pinyin": "tànqì",
    "sinoVietnamese": "thán khí",
    "meaning": "thở dài",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/叹气.mp3",
    "exampleSentence": {
      "chinese": "他听到这个消息后不停地叹气",
      "pinyin": "Tā tīng dào zhège xiāoxi hòu bùtíng de tàn qì",
      "vietnamese": "Anh ấy không ngừng thở dài sau khi nghe tin đó"
    }
  },
  {
    "id": "boya2-24-31",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "怀疑",
    "pinyin": "huáiyí",
    "sinoVietnamese": "hoài nghi",
    "meaning": "nghi ngờ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/怀疑.mp3",
    "exampleSentence": {
      "chinese": "我们没有理由怀疑他的诚信。",
      "pinyin": "Wǒmen méiyǒu lǐyóu huáiyí tā de chéngxìn.",
      "vietnamese": "Chúng tôi không có lý do gì để nghi ngờ tính trung thực của anh ấy."
    }
  },
  {
    "id": "boya2-24-32",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "抢",
    "pinyin": "qiǎng",
    "sinoVietnamese": "thưởng, thảng, sảng",
    "meaning": "cướp",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/抢.mp3",
    "exampleSentence": {
      "chinese": "他的钱包在火车站被小偷抢走了。",
      "pinyin": "tā de qián bāo zài huǒ chē zhàn bèi xiǎo tōu qiǎng zǒu le.",
      "vietnamese": "Ví tiền của anh ấy đã bị tên trộm cướp mất ở ga tàu hỏa."
    }
  },
  {
    "id": "boya2-24-33",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "冒险",
    "pinyin": "màoxiǎn",
    "sinoVietnamese": "mạo hiểm",
    "meaning": "phiêu lưu",
    "partOfSpeech": "Động từ / Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/冒险.mp3",
    "exampleSentence": {
      "chinese": "独自去森林探险是一次伟大的冒险。",
      "pinyin": "dú zì qù sēn lín tàn xiǎn shì yí cì wěi dà de mào xiǎn.",
      "vietnamese": "Tự mình đi khám phá rừng rậm là một chuyến phiêu lưu vĩ đại."
    }
  },
  {
    "id": "boya2-24-34",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "竟然",
    "pinyin": "jìngrán",
    "sinoVietnamese": "cánh nhiên",
    "meaning": "không ngờ",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/竟然.mp3",
    "exampleSentence": {
      "chinese": "这个竟然很好。",
      "pinyin": "Zhè gè jìng rán hěn hǎo.",
      "vietnamese": "không ngờ này rất tốt."
    }
  },
  {
    "id": "boya2-24-35",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "哲学家",
    "pinyin": "zhéxuéjiā",
    "sinoVietnamese": "triết học gia",
    "meaning": "nhà triết học.",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/哲学家.mp3",
    "exampleSentence": {
      "chinese": "柏拉图是一位著名的古希腊哲学家。",
      "pinyin": "Bólātú shì yī wèi zhùmíng de gǔ Xīlà zhéxuéjiā.",
      "vietnamese": "Plato là một nhà triết học Hy Lạp cổ đại nổi tiếng."
    }
  },
  {
    "id": "boya2-24-36",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "重病",
    "pinyin": "zhòngbìng",
    "sinoVietnamese": "trọng bệnh",
    "meaning": "bệnh nặng, bệnh hiểm nghèo.",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/重病.mp3",
    "exampleSentence": {
      "chinese": "他得了重病，正在住院治疗。",
      "pinyin": "Tā dé le zhòngbìng, zhèngzài zhùyuàn zhìliáo.",
      "vietnamese": "Anh ấy mắc bệnh nặng, đang nằm viện điều trị."
    }
  },
  {
    "id": "boya2-24-37",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "痘",
    "pinyin": "dòu",
    "sinoVietnamese": "đậu",
    "meaning": "đậu (bệnh đậu mùa, mụn nhọt, nốt sần).",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/痘.mp3",
    "exampleSentence": {
      "chinese": "他脸上长了很多痘痘。",
      "pinyin": "Tā liǎn shàng zhǎng le hěn duō dòudou.",
      "vietnamese": "Mặt anh ấy mọc rất nhiều mụn trứng cá."
    }
  },
  {
    "id": "boya2-24-38",
    "lesson": 24,
    "lessonTitle": "Bài 24: 人生 (Cuộc đời)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "万幸",
    "pinyin": "wànxìng",
    "sinoVietnamese": "vạn hạnh",
    "meaning": "may mắn thay, may mắn tột cùng, thật may mắn.",
    "partOfSpeech": "Trạng từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/万幸.mp3",
    "exampleSentence": {
      "chinese": "万幸，他及时赶到了。",
      "pinyin": "Wànxìng, tā jíshí gǎndào le.",
      "vietnamese": "May mắn thay, anh ấy đã đến kịp thời."
    }
  },
  {
    "id": "boya2-25-1",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "真正",
    "pinyin": "zhēnzhèng",
    "sinoVietnamese": "chân chính",
    "meaning": "thực sự",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/真正.mp3",
    "exampleSentence": {
      "chinese": "他是我的真正朋友",
      "pinyin": "Tā shì wǒ de zhēn zhèng péng yǒu",
      "vietnamese": "Anh ấy là bạn thực sự của tôi"
    }
  },
  {
    "id": "boya2-25-2",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "群",
    "pinyin": "qún",
    "sinoVietnamese": "quần",
    "meaning": "một từ đo lường cho đàn hoặc nhóm",
    "partOfSpeech": "Lượng từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/群.mp3",
    "exampleSentence": {
      "chinese": "一群孩子在操场上玩。",
      "pinyin": "Yì qún háizi zài cāochǎng shàng wán.",
      "vietnamese": "Một nhóm trẻ em đang chơi trên sân vận động."
    }
  },
  {
    "id": "boya2-25-3",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "打工",
    "pinyin": "dǎgōng",
    "sinoVietnamese": "đả công",
    "meaning": "làm thêm",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/打工.mp3",
    "exampleSentence": {
      "chinese": "学生在餐厅打工",
      "pinyin": "Xué shēng zài cān tīng dǎ gōng",
      "vietnamese": "Học sinh làm thêm ở nhà hàng"
    }
  },
  {
    "id": "boya2-25-4",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "故意",
    "pinyin": "gùyì",
    "sinoVietnamese": "cố ý",
    "meaning": "cố ý",
    "partOfSpeech": "Phó từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/故意.mp3",
    "exampleSentence": {
      "chinese": "我不是故意的",
      "pinyin": "Wǒ bù shì gù yì de",
      "vietnamese": "Tôi không cố ý"
    }
  },
  {
    "id": "boya2-25-5",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "点心",
    "pinyin": "diǎnxīn",
    "sinoVietnamese": "điểm tâm",
    "meaning": "món tráng miệng",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/点心.mp3",
    "exampleSentence": {
      "chinese": "下午茶时间，我们吃了一些精致的点心。",
      "pinyin": "xià wǔ chá shí jiān, wǒ men chī le yì xiē jīng zhì de diǎn xīn.",
      "vietnamese": "Vào giờ trà chiều, chúng tôi đã ăn một số món tráng miệng tinh tế."
    }
  },
  {
    "id": "boya2-25-6",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "负责",
    "pinyin": "fùzé",
    "sinoVietnamese": "phụ trách",
    "meaning": "chịu trách nhiệm",
    "partOfSpeech": "Động từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/负责.mp3",
    "exampleSentence": {
      "chinese": "谁负责这个项目？",
      "pinyin": "Shéi fùzé zhège xiàngmù?",
      "vietnamese": "Ai chịu trách nhiệm dự án này?"
    }
  },
  {
    "id": "boya2-25-7",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "卖",
    "pinyin": "mài",
    "sinoVietnamese": "mại",
    "meaning": "bán",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/卖.mp3",
    "exampleSentence": {
      "chinese": "这家店卖水果",
      "pinyin": "Zhè jiā diàn mài shuǐ guǒ",
      "vietnamese": "Cửa hàng này bán trái cây"
    }
  },
  {
    "id": "boya2-25-8",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "生意",
    "pinyin": "shēngyi",
    "sinoVietnamese": "sinh, sanh ý",
    "meaning": "kinh doanh, buôn bán",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/生意.mp3",
    "exampleSentence": {
      "chinese": "他的生意做得很好。",
      "pinyin": "Tā de shēngyi zuò de hěn hǎo.",
      "vietnamese": "Việc kinh doanh của anh ấy làm rất tốt."
    }
  },
  {
    "id": "boya2-25-9",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "sinoVietnamese": "ỷ tử",
    "meaning": "ghế",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/椅子.mp3",
    "exampleSentence": {
      "chinese": "请坐在这把椅子上。",
      "pinyin": "Qǐng zuò zài zhè bǎ yǐ zi shàng.",
      "vietnamese": "Vui lòng ngồi trên cái ghế này."
    }
  },
  {
    "id": "boya2-25-10",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "耐心",
    "pinyin": "nàixīn",
    "sinoVietnamese": "nại tâm",
    "meaning": "kiên nhẫn; sự kiên nhẫn",
    "partOfSpeech": "Danh từ / Tính từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/耐心.mp3",
    "exampleSentence": {
      "chinese": "老师对学生很耐心。",
      "pinyin": "Lǎoshī duì xuésheng hěn nàixīn.",
      "vietnamese": "Thầy giáo rất kiên nhẫn với học sinh."
    }
  },
  {
    "id": "boya2-25-11",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "渐渐",
    "pinyin": "jiànjiàn",
    "sinoVietnamese": "tiệm tiệm",
    "meaning": "dần dần",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/渐渐.mp3",
    "exampleSentence": {
      "chinese": "这个渐渐很好。",
      "pinyin": "Zhè gè jiàn jiàn hěn hǎo.",
      "vietnamese": "dần dần này rất tốt."
    }
  },
  {
    "id": "boya2-25-12",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "悄悄",
    "pinyin": "qiāoqiāo",
    "sinoVietnamese": "tiễu tiễu",
    "meaning": "lặng lẽ",
    "partOfSpeech": "Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/悄悄.mp3",
    "exampleSentence": {
      "chinese": "趁大家不注意，他悄悄地离开了会议室。",
      "pinyin": "chèn dà jiā bú zhù yì, tā qiāo qiāo de lí kāi le huì yì shì.",
      "vietnamese": "Nhân lúc mọi người không chú ý, anh ấy đã lặng lẽ rời khỏi phòng họp."
    }
  },
  {
    "id": "boya2-25-13",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "相处",
    "pinyin": "xiāngchǔ",
    "sinoVietnamese": "tương xử",
    "meaning": "hoà thuận",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/相处.mp3",
    "exampleSentence": {
      "chinese": "这个相处很好。",
      "pinyin": "Zhè gè xiāng chù hěn hǎo.",
      "vietnamese": "hoà thuận này rất tốt."
    }
  },
  {
    "id": "boya2-25-14",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "亲密",
    "pinyin": "qīnmì",
    "sinoVietnamese": "thân mật",
    "meaning": "thân thiết",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/亲密.mp3",
    "exampleSentence": {
      "chinese": "这个亲密很好。",
      "pinyin": "Zhè gè qīn mì hěn hǎo.",
      "vietnamese": "thân thiết này rất tốt."
    }
  },
  {
    "id": "boya2-25-15",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "替",
    "pinyin": "tì",
    "sinoVietnamese": "thế",
    "meaning": "thay thế",
    "partOfSpeech": "Động từ / Giới từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/替.mp3",
    "exampleSentence": {
      "chinese": "我替你买了这本书。",
      "pinyin": "Wǒ tì nǐ mǎi le zhè běn shū.",
      "vietnamese": "Tôi mua cuốn sách này thay cho bạn."
    }
  },
  {
    "id": "boya2-25-16",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "还",
    "pinyin": "huán",
    "sinoVietnamese": "hoàn",
    "meaning": "trả lại (vd 还书)",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/还_huan2.mp3",
    "exampleSentence": {
      "chinese": "我要还书。",
      "pinyin": "Wǒ yào huán shū.",
      "vietnamese": "Tôi phải trả sách."
    }
  },
  {
    "id": "boya2-25-17",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "严肃",
    "pinyin": "yánsù",
    "sinoVietnamese": "nghiêm túc",
    "meaning": "nghiêm túc",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/严肃.mp3",
    "exampleSentence": {
      "chinese": "老师对学生很严肃。",
      "pinyin": "Lǎoshī duì xuéshēng hěn yánsù.",
      "vietnamese": "Thầy giáo rất nghiêm khắc."
    }
  },
  {
    "id": "boya2-25-18",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "表示",
    "pinyin": "biǎoshì",
    "sinoVietnamese": "biểu thị",
    "meaning": "biểu hiện",
    "partOfSpeech": "Động từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/表示.mp3",
    "exampleSentence": {
      "chinese": "他表示感谢。",
      "pinyin": "Tā biǎo shì gǎn xiè.",
      "vietnamese": "Anh ấy bày tỏ lòng biết ơn."
    }
  },
  {
    "id": "boya2-25-19",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "安全",
    "pinyin": "ānquán",
    "sinoVietnamese": "an toàn",
    "meaning": "an toàn; an ninh",
    "partOfSpeech": "Tính từ / Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/安全.mp3",
    "exampleSentence": {
      "chinese": "请注意安全。",
      "pinyin": "Qǐng zhù yì ān quán.",
      "vietnamese": "Vui lòng chú ý an toàn."
    }
  },
  {
    "id": "boya2-25-20",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "了不起",
    "pinyin": "liǎobuqǐ",
    "sinoVietnamese": "liễu bất khởi",
    "meaning": "tuyệt vời",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/了不起.mp3",
    "exampleSentence": {
      "chinese": "能在这个年纪取得这样的成就，真了不起！",
      "pinyin": "Néng zài zhè ge niánjì qǔdé zhèyàng de chéngjiù, zhēn liǎobuqǐ!",
      "vietnamese": "Có thể đạt được thành tựu như thế này ở độ tuổi này, thật là cừ khôi!"
    }
  },
  {
    "id": "boya2-25-21",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "夫人",
    "pinyin": "fūren",
    "sinoVietnamese": "phu nhân",
    "meaning": "phu nhân",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/夫人.mp3",
    "exampleSentence": {
      "chinese": "王夫人",
      "pinyin": "Wáng fūren",
      "vietnamese": "Phu nhân Vương"
    }
  },
  {
    "id": "boya2-25-22",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "双胞胎",
    "pinyin": "shuāngbāotāi",
    "sinoVietnamese": "song bào thai",
    "meaning": "sinh đôi",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/双胞胎.mp3",
    "exampleSentence": {
      "chinese": "这对双胞胎长得一模一样。",
      "pinyin": "zhè duì shuāng bāo tāi zhǎng de yī mú yī yàng.",
      "vietnamese": "Cặp song sinh này trông giống hệt nhau."
    }
  },
  {
    "id": "boya2-25-23",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "捎",
    "pinyin": "shāo",
    "sinoVietnamese": "siếu, sao",
    "meaning": "mang theo; đem theo",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/捎.mp3",
    "exampleSentence": {
      "chinese": "你能帮我给李老师捎一句话吗？",
      "pinyin": "Nǐ néng bāng wǒ gěi Lǐ lǎoshī shāo yí jù huà ma?",
      "vietnamese": "Bạn có thể nhắn hộ tôi một lời tới thầy Lý được không?"
    }
  },
  {
    "id": "boya2-25-24",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "话",
    "pinyin": "huà",
    "sinoVietnamese": "thoại",
    "meaning": "câu nói",
    "partOfSpeech": "Danh từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/话.mp3",
    "exampleSentence": {
      "chinese": "我想和你说句话",
      "pinyin": "Wǒ xiǎng hé nǐ shuō jù huà",
      "vietnamese": "Tôi muốn nói với bạn vài câu"
    }
  },
  {
    "id": "boya2-25-25",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "深夜",
    "pinyin": "shēnyè",
    "sinoVietnamese": "thâm dạ",
    "meaning": "đêm khuya",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/深夜.mp3",
    "exampleSentence": {
      "chinese": "他深夜还在加班，处理紧急的工作。",
      "pinyin": "Tā shēnyè hái zài jiābān, chǔlǐ jínjí de gōngzuò.",
      "vietnamese": "Đêm khuya anh ấy vẫn còn làm thêm giờ, xử lý công việc khẩn cấp."
    }
  },
  {
    "id": "boya2-25-26",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "司机",
    "pinyin": "sījī",
    "sinoVietnamese": "ti, tư cơ",
    "meaning": "tài xế",
    "partOfSpeech": "Danh từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/司机.mp3",
    "exampleSentence": {
      "chinese": "他是出租车司机",
      "pinyin": "Tā shì chū zū chē sī jī",
      "vietnamese": "Anh ấy là tài xế taxi"
    }
  },
  {
    "id": "boya2-25-27",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "陪",
    "pinyin": "péi",
    "sinoVietnamese": "bồi",
    "meaning": "đi cùng",
    "partOfSpeech": "Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/陪.mp3",
    "exampleSentence": {
      "chinese": "我陪你去",
      "pinyin": "Wǒ péi nǐ qù",
      "vietnamese": "Tôi đi cùng bạn/anh đi nhé"
    }
  },
  {
    "id": "boya2-25-28",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "准时",
    "pinyin": "zhǔnshí",
    "sinoVietnamese": "chuẩn thì",
    "meaning": "đúng giờ",
    "partOfSpeech": "Tính từ / Phó từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/准时.mp3",
    "exampleSentence": {
      "chinese": "会议准时开始。",
      "pinyin": "Huìyì zhǔnshí kāishǐ.",
      "vietnamese": "Cuộc họp bắt đầu đúng giờ."
    }
  },
  {
    "id": "boya2-25-29",
    "lesson": 25,
    "lessonTitle": "Bài 25: 点心小姐 (Cô nàng điểm tâm)",
    "unit": 5,
    "unitTitle": "Đơn vị 5: Du lịch kỳ nghỉ & Triết lý nhân sinh",
    "hanzi": "失望",
    "pinyin": "shīwàng",
    "sinoVietnamese": "thất vọng",
    "meaning": "thất vọng",
    "partOfSpeech": "Tính từ / Động từ",
    "hskLevel": "boya2",
    "audioUrl": "https://static.xiehanzi.com/word_audios/失望.mp3",
    "exampleSentence": {
      "chinese": "他的表现让教练感到非常失望。",
      "pinyin": "tā de biǎo xiàn ràng jiào liàn gǎn dào fēi cháng shī wàng.",
      "vietnamese": "Biểu hiện của anh ấy khiến huấn luyện viên cảm thấy rất thất vọng."
    }
  }
];

/**
 * Lấy danh sách từ vựng theo số thứ tự bài học (1-25)
 */
export function getBoya2WordsByLesson(lessonNum: number): BoyaVocabularyWord[] {
  return BOYA2_VOCABULARY.filter(w => w.lesson === lessonNum);
}

/**
 * Lấy danh sách từ vựng theo Đơn vị (1-5)
 */
export function getBoya2WordsByUnit(unitNum: number): BoyaVocabularyWord[] {
  return BOYA2_VOCABULARY.filter(w => w.unit === unitNum);
}

/**
 * Thống kê từ vựng Boya 2
 */
export const BOYA2_STATS = {
  totalWords: 864,
  totalLessons: 25,
  totalUnits: 5
};
