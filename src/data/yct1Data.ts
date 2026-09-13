import type { VocabularyWord } from "../types";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: YctCategoryId;
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
  | "actions";

export interface YctCategory {
  id: YctCategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export const YCT_CATEGORIES: YctCategory[] = [
  {
    id: "greetings",
    nameVi: "Chào hỏi & Lễ phép",
    nameZh: "问候礼貌",
    icon: "👋",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    description: "Các câu chào hỏi, cảm ơn, tạm biệt và xưng hô thân thiện",
  },
  {
    id: "numbers",
    nameVi: "Số đếm & Thời gian",
    nameZh: "数字时间",
    icon: "🔢",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    description: "Đếm số từ 1 đến 10, hỏi mấy giờ, hôm nay, ngày mai và các thứ",
  },
  {
    id: "family",
    nameVi: "Gia đình & Con người",
    nameZh: "家庭人物",
    icon: "👨‍👩‍👧",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    description: "Tên gọi các thành viên trong nhà, thầy cô giáo và bạn bè",
  },
  {
    id: "animals",
    nameVi: "Động vật đáng yêu",
    nameZh: "可爱动物",
    icon: "🐼",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    description: "Các loài vật cưng quen thuộc: mèo, chó, chim, gấu trúc",
  },
  {
    id: "food",
    nameVi: "Món ăn & Đồ uống",
    nameZh: "美食饮品",
    icon: "🍎",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    description: "Táo, bánh bao, cơm, mì sợi, sữa bò và nước uống",
  },
  {
    id: "body",
    nameVi: "Cơ thể & Miêu tả",
    nameZh: "身体外貌",
    icon: "👁️",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    description: "Mắt, mũi, miệng, tai, tay tóc và các tính từ to nhỏ cao dài",
  },
  {
    id: "school",
    nameVi: "Trường học & Đồ dùng",
    nameZh: "学校文具",
    icon: "🎒",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    description: "Cặp sách, sách vở, bút chì, bàn ghế và lớp học",
  },
  {
    id: "actions",
    nameVi: "Hành động & Sở thích",
    nameZh: "动作爱好",
    icon: "🏃",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    description: "Ăn, uống, nhìn, nghe, nói, đi, thích, yêu và vui vẻ",
  },
];

export const YCT1_WORDS: YctWord[] = [
  // 1. Chào hỏi & Lễ phép (greetings)
  {
    id: "yct1-ni-hao",
    hanzi: "你好",
    pinyin: "nǐ hǎo",
    meaning: "xin chào, chào bạn",
    category: "greetings",
    example: "老师，你好！",
    examplePinyin: "Lǎoshī, nǐ hǎo!",
    exampleVi: "Em chào thầy/cô ạ!",
  },
  {
    id: "yct1-xiexie",
    hanzi: "谢谢",
    pinyin: "xièxie",
    meaning: "cảm ơn",
    category: "greetings",
    example: "谢谢你，朋友！",
    examplePinyin: "Xièxie nǐ, péngyou!",
    exampleVi: "Cảm ơn bạn nhé!",
  },
  {
    id: "yct1-bu-keqi",
    hanzi: "不客气",
    pinyin: "bú kèqi",
    meaning: "không có gì, đừng khách sáo",
    category: "greetings",
    example: "不用谢，不客气！",
    examplePinyin: "Bú yòng xiè, bú kèqi!",
    exampleVi: "Không cần cảm ơn, đừng khách sáo!",
  },
  {
    id: "yct1-zaijian",
    hanzi: "再见",
    pinyin: "zàijiàn",
    meaning: "tạm biệt, hẹn gặp lại",
    category: "greetings",
    example: "明天见，再见！",
    examplePinyin: "Míngtiān jiàn, zàijiàn!",
    exampleVi: "Mai gặp lại nhé, tạm biệt!",
  },
  {
    id: "yct1-wo",
    hanzi: "我",
    pinyin: "wǒ",
    meaning: "tôi, con, tớ, em",
    category: "greetings",
    example: "我是小学生。",
    examplePinyin: "Wǒ shì xiǎoxuéshēng.",
    exampleVi: "Tớ là học sinh tiểu học.",
  },
  {
    id: "yct1-ni",
    hanzi: "你",
    pinyin: "nǐ",
    meaning: "bạn, cậu, con",
    category: "greetings",
    example: "你高兴吗？",
    examplePinyin: "Nǐ gāoxìng ma?",
    exampleVi: "Bạn có vui không?",
  },
  {
    id: "yct1-ta-m",
    hanzi: "他",
    pinyin: "tā",
    meaning: "anh ấy, cậu ấy (nam)",
    category: "greetings",
    example: "他是我的朋友。",
    examplePinyin: "Tā shì wǒ de péngyou.",
    exampleVi: "Cậu ấy là bạn của tớ.",
  },
  {
    id: "yct1-ta-f",
    hanzi: "她",
    pinyin: "tā",
    meaning: "cô ấy, bạn ấy (nữ)",
    category: "greetings",
    example: "她是我的姐姐。",
    examplePinyin: "Tā shì wǒ de jiějie.",
    exampleVi: "Chị ấy là chị gái của tớ.",
  },
  {
    id: "yct1-women",
    hanzi: "我们",
    pinyin: "wǒmen",
    meaning: "chúng tôi, chúng mình, chúng con",
    category: "greetings",
    example: "我们爱学汉语。",
    examplePinyin: "Wǒmen ài xué Hànyǔ.",
    exampleVi: "Chúng mình yêu thích học tiếng Trung.",
  },
  {
    id: "yct1-zhe",
    hanzi: "这",
    pinyin: "zhè",
    meaning: "đây, này",
    category: "greetings",
    example: "这是什么？",
    examplePinyin: "Zhè shì shénme?",
    exampleVi: "Đây là cái gì?",
  },
  {
    id: "yct1-zher",
    hanzi: "这儿",
    pinyin: "zhèr",
    meaning: "ở đây, chỗ này",
    category: "greetings",
    example: "我在这儿！",
    examplePinyin: "Wǒ zài zhèr!",
    exampleVi: "Tớ ở đây nè!",
  },
  {
    id: "yct1-na",
    hanzi: "那",
    pinyin: "nà",
    meaning: "kia, đó",
    category: "greetings",
    example: "那是我的书包。",
    examplePinyin: "Nà shì wǒ de shūbāo.",
    exampleVi: "Kia là cặp sách của tớ.",
  },
  {
    id: "yct1-nar",
    hanzi: "那儿",
    pinyin: "nàr",
    meaning: "ở kia, đằng đó",
    category: "greetings",
    example: "小猫在那儿。",
    examplePinyin: "Xiǎomāo zài nàr.",
    exampleVi: "Mèo con ở đằng kia.",
  },
  {
    id: "yct1-na-which",
    hanzi: "哪",
    pinyin: "nǎ",
    meaning: "nào",
    category: "greetings",
    example: "你喜欢哪一个？",
    examplePinyin: "Nǐ xǐhuan nǎ yí gè?",
    exampleVi: "Bạn thích cái nào?",
  },
  {
    id: "yct1-nar-where",
    hanzi: "哪儿",
    pinyin: "nǎr",
    meaning: "ở đâu, đâu",
    category: "greetings",
    example: "你在哪儿？",
    examplePinyin: "Nǐ zài nǎr?",
    exampleVi: "Cậu đang ở đâu thế?",
  },
  {
    id: "yct1-shei",
    hanzi: "谁",
    pinyin: "shéi",
    meaning: "ai, người nào",
    category: "greetings",
    example: "他是谁？",
    examplePinyin: "Tā shì shéi?",
    exampleVi: "Cậu ấy là ai vậy?",
  },
  {
    id: "yct1-shenme",
    hanzi: "什么",
    pinyin: "shénme",
    meaning: "cái gì, gì",
    category: "greetings",
    example: "你叫什么名字？",
    examplePinyin: "Nǐ jiào shénme míngzi?",
    exampleVi: "Bạn tên là gì thế?",
  },

  // 2. Số đếm & Thời gian (numbers)
  {
    id: "yct1-yi",
    hanzi: "一",
    pinyin: "yī",
    meaning: "số 1, một",
    category: "numbers",
    example: "我有一个苹果。",
    examplePinyin: "Wǒ yǒu yí gè píngguǒ.",
    exampleVi: "Tớ có một quả táo.",
  },
  {
    id: "yct1-er",
    hanzi: "二",
    pinyin: "èr",
    meaning: "số 2, hai",
    category: "numbers",
    example: "他有两只眼睛，我有二。",
    examplePinyin: "Yī, èr, sān...",
    exampleVi: "Một, hai, ba...",
  },
  {
    id: "yct1-san",
    hanzi: "三",
    pinyin: "sān",
    meaning: "số 3, ba",
    category: "numbers",
    example: "我家有三口人。",
    examplePinyin: "Wǒ jiā yǒu sān kǒu rén.",
    exampleVi: "Nhà tớ có ba người.",
  },
  {
    id: "yct1-si",
    hanzi: "四",
    pinyin: "sì",
    meaning: "số 4, bốn",
    category: "numbers",
    example: "桌子有四条腿。",
    examplePinyin: "Zhuōzi yǒu sì tiáo tuǐ.",
    exampleVi: "Cái bàn có bốn chân.",
  },
  {
    id: "yct1-wu",
    hanzi: "五",
    pinyin: "wǔ",
    meaning: "số 5, năm",
    category: "numbers",
    example: "一只手有五个手指。",
    examplePinyin: "Yì zhī shǒu yǒu wǔ gè shǒuzhǐ.",
    exampleVi: "Một bàn tay có năm ngón tay.",
  },
  {
    id: "yct1-liu",
    hanzi: "六",
    pinyin: "liù",
    meaning: "số 6, sáu",
    category: "numbers",
    example: "我今年六岁。",
    examplePinyin: "Wǒ jīnnián liù suì.",
    exampleVi: "Năm nay tớ sáu tuổi.",
  },
  {
    id: "yct1-qi",
    hanzi: "七",
    pinyin: "qī",
    meaning: "số 7, bảy",
    category: "numbers",
    example: "一个星期有七天。",
    examplePinyin: "Yí gè xīngqī yǒu qī tiān.",
    exampleVi: "Một tuần có bảy ngày.",
  },
  {
    id: "yct1-ba",
    hanzi: "八",
    pinyin: "bā",
    meaning: "số 8, tám",
    category: "numbers",
    example: "现在是八点。",
    examplePinyin: "Xiànzài shì bā diǎn.",
    exampleVi: "Bây giờ là tám giờ.",
  },
  {
    id: "yct1-jiu",
    hanzi: "九",
    pinyin: "jiǔ",
    meaning: "số 9, chín",
    category: "numbers",
    example: "九只小鸟在树上。",
    examplePinyin: "Jiǔ zhī xiǎoniǎo zài shù shang.",
    exampleVi: "Chín chú chim nhỏ ở trên cây.",
  },
  {
    id: "yct1-shi",
    hanzi: "十",
    pinyin: "shí",
    meaning: "số 10, mười",
    category: "numbers",
    example: "我们有十支铅笔。",
    examplePinyin: "Wǒmen yǒu shí zhī qiānbǐ.",
    exampleVi: "Chúng mình có mười chiếc bút chì.",
  },
  {
    id: "yct1-ji",
    hanzi: "几",
    pinyin: "jǐ",
    meaning: "mấy, bao nhiêu",
    category: "numbers",
    example: "你有几个苹果？",
    examplePinyin: "Nǐ yǒu jǐ gè píngguǒ?",
    exampleVi: "Bạn có mấy quả táo?",
  },
  {
    id: "yct1-dian",
    hanzi: "点",
    pinyin: "diǎn",
    meaning: "giờ (đồng hồ), chút xíu",
    category: "numbers",
    example: "现在几点了？",
    examplePinyin: "Xiànzài jǐ diǎn le?",
    exampleVi: "Bây giờ mấy giờ rồi?",
  },
  {
    id: "yct1-nian",
    hanzi: "年",
    pinyin: "nián",
    meaning: "năm (thời gian)",
    category: "numbers",
    example: "新年好！",
    examplePinyin: "Xīnnián hǎo!",
    exampleVi: "Chúc mừng năm mới!",
  },
  {
    id: "yct1-jintian",
    hanzi: "今天",
    pinyin: "jīntiān",
    meaning: "hôm nay",
    category: "numbers",
    example: "今天星期一。",
    examplePinyin: "Jīntiān xīngqīyī.",
    exampleVi: "Hôm nay là thứ Hai.",
  },
  {
    id: "yct1-mingtian",
    hanzi: "明天",
    pinyin: "míngtiān",
    meaning: "ngày mai",
    category: "numbers",
    example: "明天去学校。",
    examplePinyin: "Míngtiān qù xuéxiào.",
    exampleVi: "Ngày mai đến trường.",
  },
  {
    id: "yct1-xingqi",
    hanzi: "星期",
    pinyin: "xīngqī",
    meaning: "tuần, thứ trong tuần",
    category: "numbers",
    example: "今天星期几？",
    examplePinyin: "Jīntiān xīngqī jǐ?",
    exampleVi: "Hôm nay là thứ mấy?",
  },

  // 3. Gia đình & Con người (family)
  {
    id: "yct1-baba",
    hanzi: "爸爸",
    pinyin: "bàba",
    meaning: "bố, ba, cha",
    category: "family",
    example: "我爱爸爸。",
    examplePinyin: "Wǒ ài bàba.",
    exampleVi: "Con yêu bố.",
  },
  {
    id: "yct1-mama",
    hanzi: "妈妈",
    pinyin: "māma",
    meaning: "mẹ, má, u",
    category: "family",
    example: "妈妈爱我。",
    examplePinyin: "Māma ài wǒ.",
    exampleVi: "Mẹ yêu thương con.",
  },
  {
    id: "yct1-gege",
    hanzi: "哥哥",
    pinyin: "gēge",
    meaning: "anh trai",
    category: "family",
    example: "哥哥很高。",
    examplePinyin: "Gēge hěn gāo.",
    exampleVi: "Anh trai rất cao.",
  },
  {
    id: "yct1-jiejie",
    hanzi: "姐姐",
    pinyin: "jiějie",
    meaning: "chị gái",
    category: "family",
    example: "姐姐喜欢小猫。",
    examplePinyin: "Jiějie xǐhuan xiǎomāo.",
    exampleVi: "Chị gái thích mèo con.",
  },
  {
    id: "yct1-didi",
    hanzi: "弟弟",
    pinyin: "dìdi",
    meaning: "em trai",
    category: "family",
    example: "弟弟真可爱！",
    examplePinyin: "Dìdi zhēn kě'ài!",
    exampleVi: "Em trai thật đáng yêu!",
  },
  {
    id: "yct1-meimei",
    hanzi: "妹妹",
    pinyin: "mèimei",
    meaning: "em gái",
    category: "family",
    example: "妹妹吃苹果。",
    examplePinyin: "Mèimei chī píngguǒ.",
    exampleVi: "Em gái đang ăn táo.",
  },
  {
    id: "yct1-laoshi",
    hanzi: "老师",
    pinyin: "lǎoshī",
    meaning: "thầy giáo, cô giáo",
    category: "family",
    example: "老师好！",
    examplePinyin: "Lǎoshī hǎo!",
    exampleVi: "Em chào thầy/cô ạ!",
  },
  {
    id: "yct1-pengyou",
    hanzi: "朋友",
    pinyin: "péngyou",
    meaning: "bạn bè, bạn",
    category: "family",
    example: "他是我的好朋友。",
    examplePinyin: "Tā shì wǒ de hǎo péngyou.",
    exampleVi: "Cậu ấy là bạn thân của tớ.",
  },
  {
    id: "yct1-ren",
    hanzi: "人",
    pinyin: "rén",
    meaning: "người",
    category: "family",
    example: "中国人。",
    examplePinyin: "Zhōngguó rén.",
    exampleVi: "Người Trung Quốc.",
  },
  {
    id: "yct1-jia",
    hanzi: "家",
    pinyin: "jiā",
    meaning: "nhà, gia đình",
    category: "family",
    example: "这是我的家。",
    examplePinyin: "Zhè shì wǒ de jiā.",
    exampleVi: "Đây là ngôi nhà của tớ.",
  },
  {
    id: "yct1-mingzi",
    hanzi: "名字",
    pinyin: "míngzi",
    meaning: "tên, họ tên",
    category: "family",
    example: "我的名字叫明明。",
    examplePinyin: "Wǒ de míngzi jiào Míngming.",
    exampleVi: "Tên của tớ là Minh Minh.",
  },

  // 4. Động vật đáng yêu (animals)
  {
    id: "yct1-mao",
    hanzi: "猫",
    pinyin: "māo",
    meaning: "con mèo",
    category: "animals",
    example: "这只小猫真白。",
    examplePinyin: "Zhè zhī xiǎomāo zhēn bái.",
    exampleVi: "Chú mèo con này thật trắng.",
  },
  {
    id: "yct1-gou",
    hanzi: "狗",
    pinyin: "gǒu",
    meaning: "con chó, cún",
    category: "animals",
    example: "小狗在跑。",
    examplePinyin: "Xiǎogǒu zài pǎo.",
    exampleVi: "Cún con đang chạy tung tăng.",
  },
  {
    id: "yct1-niao",
    hanzi: "鸟",
    pinyin: "niǎo",
    meaning: "con chim",
    category: "animals",
    example: "小鸟在飞。",
    examplePinyin: "Xiǎoniǎo zài fēi.",
    exampleVi: "Chú chim nhỏ đang bay lượn.",
  },
  {
    id: "yct1-xiongmao",
    hanzi: "熊猫",
    pinyin: "xióngmāo",
    meaning: "gấu trúc",
    category: "animals",
    example: "大熊猫吃竹子。",
    examplePinyin: "Dàxióngmāo chī zhúzi.",
    exampleVi: "Gấu trúc lớn đang ăn tre trúc.",
  },

  // 5. Món ăn & Đồ uống (food)
  {
    id: "yct1-shui",
    hanzi: "水",
    pinyin: "shuǐ",
    meaning: "nước (uống)",
    category: "food",
    example: "我想喝水。",
    examplePinyin: "Wǒ xiǎng hē shuǐ.",
    exampleVi: "Con muốn uống nước.",
  },
  {
    id: "yct1-niunai",
    hanzi: "牛奶",
    pinyin: "niúnǎi",
    meaning: "sữa bò tươi",
    category: "food",
    example: "早饭喝牛奶。",
    examplePinyin: "Zǎofàn hē niúnǎi.",
    exampleVi: "Bữa sáng uống sữa bò.",
  },
  {
    id: "yct1-pingguo",
    hanzi: "苹果",
    pinyin: "píngguǒ",
    meaning: "quả táo tây",
    category: "food",
    example: "大红苹果很甜。",
    examplePinyin: "Dà hóng píngguǒ hěn tián.",
    exampleVi: "Quả táo đỏ to rất ngọt.",
  },
  {
    id: "yct1-baozi",
    hanzi: "包子",
    pinyin: "bāozi",
    meaning: "bánh bao",
    category: "food",
    example: "我爱吃热包子。",
    examplePinyin: "Wǒ ài chī rè bāozi.",
    exampleVi: "Con thích ăn bánh bao nóng hổi.",
  },
  {
    id: "yct1-mifan",
    hanzi: "米饭",
    pinyin: "mǐfàn",
    meaning: "cơm trắng",
    category: "food",
    example: "今天吃米饭。",
    examplePinyin: "Jīntiān chī mǐfàn.",
    exampleVi: "Hôm nay chúng mình ăn cơm.",
  },
  {
    id: "yct1-miantiao",
    hanzi: "面条",
    pinyin: "miàntiáo",
    meaning: "mì sợi",
    category: "food",
    example: "妈妈做的面条很好吃。",
    examplePinyin: "Māma zuò de miàntiáo hěn hǎochī.",
    exampleVi: "Mì mẹ nấu ngon lắm.",
  },
  {
    id: "yct1-cha",
    hanzi: "茶",
    pinyin: "chá",
    meaning: "trà, chè",
    category: "food",
    example: "爸爸喝中国茶。",
    examplePinyin: "Bàba hē Zhōngguó chá.",
    exampleVi: "Bố uống trà Trung Quốc.",
  },

  // 6. Cơ thể & Miêu tả (body)
  {
    id: "yct1-yanjing",
    hanzi: "眼睛",
    pinyin: "yǎnjing",
    meaning: "đôi mắt, mắt",
    category: "body",
    example: "小猫的眼睛大大的。",
    examplePinyin: "Xiǎomāo de yǎnjing dàdà de.",
    exampleVi: "Mắt mèo con tròn xoe to đùng.",
  },
  {
    id: "yct1-bizi",
    hanzi: "鼻子",
    pinyin: "bízi",
    meaning: "cái mũi",
    category: "body",
    example: "摸摸小鼻子。",
    examplePinyin: "Mōmo xiǎo bízi.",
    exampleVi: "Xoa xoa chiếc mũi nhỏ xinh.",
  },
  {
    id: "yct1-kou",
    hanzi: "口",
    pinyin: "kǒu",
    meaning: "cái miệng (hoặc người)",
    category: "body",
    example: "张开口说汉语。",
    examplePinyin: "Zhāng kāi kǒu shuō Hànyǔ.",
    exampleVi: "Mở miệng nói tiếng Trung nào.",
  },
  {
    id: "yct1-zuiba",
    hanzi: "嘴巴",
    pinyin: "zuǐba",
    meaning: "miệng, mồm",
    category: "body",
    example: "小嘴巴，笑哈哈。",
    examplePinyin: "Xiǎo zuǐba, xiào hāhā.",
    exampleVi: "Khuôn miệng nhỏ cười ha ha.",
  },
  {
    id: "yct1-erduo",
    hanzi: "耳朵",
    pinyin: "ěrduo",
    meaning: "cái tai, đôi tai",
    category: "body",
    example: "小白兔耳朵长。",
    examplePinyin: "Xiǎo báitù ěrduo cháng.",
    exampleVi: "Chú thỏ trắng tai dài.",
  },
  {
    id: "yct1-toufa",
    hanzi: "头发",
    pinyin: "tóufa",
    meaning: "mái tóc, tóc",
    category: "body",
    example: "姐姐的头发很长。",
    examplePinyin: "Jiějie de tóufa hěn cháng.",
    exampleVi: "Tóc của chị gái rất dài.",
  },
  {
    id: "yct1-shou",
    hanzi: "手",
    pinyin: "shǒu",
    meaning: "bàn tay, tay",
    category: "body",
    example: "拍拍你的小手。",
    examplePinyin: "Pāipai nǐ de xiǎoshǒu.",
    exampleVi: "Vỗ vỗ đôi bàn tay nhỏ của con nào.",
  },
  {
    id: "yct1-da",
    hanzi: "大",
    pinyin: "dà",
    meaning: "to, lớn",
    category: "body",
    example: "这个苹果很大。",
    examplePinyin: "Zhè gè píngguǒ hěn dà.",
    exampleVi: "Quả táo này to thật đấy.",
  },
  {
    id: "yct1-xiao",
    hanzi: "小",
    pinyin: "xiǎo",
    meaning: "nhỏ, bé",
    category: "body",
    example: "那是小狗。",
    examplePinyin: "Nà字体 shì xiǎogǒu.",
    exampleVi: "Kia là chú cún con bé xíu.",
  },
  {
    id: "yct1-duo",
    hanzi: "多",
    pinyin: "duō",
    meaning: "nhiều",
    category: "body",
    example: "学校里朋友很多。",
    examplePinyin: "Xuéxiào lǐ péngyou hěn duō.",
    exampleVi: "Ở trường có rất nhiều bạn bè.",
  },
  {
    id: "yct1-shao",
    hanzi: "少",
    pinyin: "shǎo",
    meaning: "ít",
    category: "body",
    example: "苹果少，香蕉多。",
    examplePinyin: "Píngguǒ shǎo, xiāngjiāo duō.",
    exampleVi: "Táo thì ít, chuối thì nhiều.",
  },
  {
    id: "yct1-gao",
    hanzi: "高",
    pinyin: "gāo",
    meaning: "cao",
    category: "body",
    example: "爸爸个子高。",
    examplePinyin: "Bàba gèzi gāo.",
    exampleVi: "Bố có vóc dáng cao lớn.",
  },
  {
    id: "yct1-re",
    hanzi: "热",
    pinyin: "rè",
    meaning: "nóng",
    category: "body",
    example: "今天天气很热。",
    examplePinyin: "Jīntiān tiānqì hěn rè.",
    exampleVi: "Hôm nay trời rất nóng bức.",
  },
  {
    id: "yct1-hao",
    hanzi: "好",
    pinyin: "hǎo",
    meaning: "tốt, đẹp, ngoan",
    category: "body",
    example: "你真是一个好孩子！",
    examplePinyin: "Nǐ zhēn shì yí gè hǎo háizi!",
    exampleVi: "Con thật là một em bé ngoan!",
  },
  {
    id: "yct1-gaoxing",
    hanzi: "高兴",
    pinyin: "gāoxìng",
    meaning: "vui vẻ, vui mừng",
    category: "body",
    example: "认识你很高兴！",
    examplePinyin: "Rènshi nǐ hěn gāoxìng!",
    exampleVi: "Rất vui được làm quen với bạn!",
  },

  // 7. Trường học & Đồ dùng (school)
  {
    id: "yct1-xuexiao",
    hanzi: "学校",
    pinyin: "xuéxiào",
    meaning: "trường học",
    category: "school",
    example: "我去学校上课。",
    examplePinyin: "Wǒ qù xuéxiào shàngkè.",
    exampleVi: "Tớ đến trường đi học.",
  },
  {
    id: "yct1-shangdian",
    hanzi: "商店",
    pinyin: "shāngdiàn",
    meaning: "cửa hàng, tiệm tạp hóa",
    category: "school",
    example: "我们去商店买书。",
    examplePinyin: "Wǒmen qù shāngdiàn mǎi shū.",
    exampleVi: "Chúng mình đến tiệm mua sách.",
  },
  {
    id: "yct1-shu",
    hanzi: "书",
    pinyin: "shū",
    meaning: "sách",
    category: "school",
    example: "这是一本汉语书。",
    examplePinyin: "Zhè shì yì běn Hànyǔ shū.",
    exampleVi: "Đây là một cuốn sách tiếng Trung.",
  },
  {
    id: "yct1-shubao",
    hanzi: "书包",
    pinyin: "shūbāo",
    meaning: "cặp sách, ba lô đi học",
    category: "school",
    example: "我的书包很漂亮。",
    examplePinyin: "Wǒ de shūbāo hěn piàoliang.",
    exampleVi: "Cặp sách của tớ rất đẹp.",
  },
  {
    id: "yct1-qianbi",
    hanzi: "铅笔",
    pinyin: "qiānbǐ",
    meaning: "bút chì",
    category: "school",
    example: "给你一支铅笔。",
    examplePinyin: "Gěi nǐ yì zhī qiānbǐ.",
    exampleVi: "Cho cậu mượn một chiếc bút chì nè.",
  },
  {
    id: "yct1-zhuozi",
    hanzi: "桌子",
    pinyin: "zhuōzi",
    meaning: "cái bàn học",
    category: "school",
    example: "书在桌子上。",
    examplePinyin: "Shū zài zhuōzi shang.",
    exampleVi: "Sách nằm ở trên bàn.",
  },
  {
    id: "yct1-yizi",
    hanzi: "椅子",
    pinyin: "yǐzi",
    meaning: "cái ghế ngồi",
    category: "school",
    example: "请坐在椅子上。",
    examplePinyin: "Qǐng zuò zài yǐzi shang.",
    exampleVi: "Mời bạn ngồi xuống ghế nhé.",
  },
  {
    id: "yct1-zhongguo",
    hanzi: "中国",
    pinyin: "Zhōngguó",
    meaning: "nước Trung Quốc",
    category: "school",
    example: "大熊猫住在中国。",
    examplePinyin: "Dàxióngmāo zhù zài Zhōngguó.",
    exampleVi: "Gấu trúc lớn sống ở Trung Quốc.",
  },
  {
    id: "yct1-beijing",
    hanzi: "北京",
    pinyin: "Běijīng",
    meaning: "Bắc Kinh (thủ đô)",
    category: "school",
    example: "北京很美丽。",
    examplePinyin: "Běijīng hěn měilì.",
    exampleVi: "Bắc Kinh rất xinh đẹp.",
  },

  // 8. Hành động & Cảm xúc (actions)
  {
    id: "yct1-chi",
    hanzi: "吃",
    pinyin: "chī",
    meaning: "ăn",
    category: "actions",
    example: "小猫爱吃鱼。",
    examplePinyin: "Xiǎomāo ài chī yú.",
    exampleVi: "Mèo con thích ăn cá.",
  },
  {
    id: "yct1-he",
    hanzi: "喝",
    pinyin: "hē",
    meaning: "uống",
    category: "actions",
    example: "我喝牛奶。",
    examplePinyin: "Wǒ hē niúnǎi.",
    exampleVi: "Con uống sữa tươi.",
  },
  {
    id: "yct1-kan",
    hanzi: "看",
    pinyin: "kàn",
    meaning: "nhìn, xem, đọc",
    category: "actions",
    example: "看书，看老师。",
    examplePinyin: "Kàn shū, kàn lǎoshī.",
    exampleVi: "Đọc sách, nhìn thầy cô.",
  },
  {
    id: "yct1-ting",
    hanzi: "听",
    pinyin: "tīng",
    meaning: "nghe",
    category: "actions",
    example: "认真听老师讲课。",
    examplePinyin: "Rènzhēn tīng lǎoshī jiǎngkè.",
    exampleVi: "Chăm chú lắng nghe cô giáo giảng bài.",
  },
  {
    id: "yct1-shuo",
    hanzi: "说",
    pinyin: "shuō",
    meaning: "nói",
    category: "actions",
    example: "你会说汉语吗？",
    examplePinyin: "Nǐ huì shuō Hànyǔ ma?",
    exampleVi: "Cậu có biết nói tiếng Trung không?",
  },
  {
    id: "yct1-qu",
    hanzi: "去",
    pinyin: "qù",
    meaning: "đi",
    category: "actions",
    example: "我去学校。",
    examplePinyin: "Wǒ qù xuéxiào.",
    exampleVi: "Tớ đi đến trường.",
  },
  {
    id: "yct1-lai",
    hanzi: "来",
    pinyin: "lái",
    meaning: "đến, lại đây",
    category: "actions",
    example: "来，我们一起玩！",
    examplePinyin: "Lái, wǒmen yìqǐ wán!",
    exampleVi: "Lại đây, chúng mình cùng chơi nào!",
  },
  {
    id: "yct1-ai",
    hanzi: "爱",
    pinyin: "ài",
    meaning: "yêu, thích",
    category: "actions",
    example: "我爱爸爸妈妈。",
    examplePinyin: "Wǒ ài bàba māma.",
    exampleVi: "Con yêu bố mẹ rất nhiều.",
  },
  {
    id: "yct1-xihuan",
    hanzi: "喜欢",
    pinyin: "xǐhuan",
    meaning: "thích",
    category: "actions",
    example: "我喜欢学中文。",
    examplePinyin: "Wǒ xǐhuan xué Zhōngwén.",
    exampleVi: "Tớ thích học tiếng Trung Quốc.",
  },
  {
    id: "yct1-renshi",
    hanzi: "认识",
    pinyin: "rènshi",
    meaning: "quen biết, nhận ra",
    category: "actions",
    example: "我认识这个汉字。",
    examplePinyin: "Wǒ rènshi zhè gè hànzì.",
    exampleVi: "Em nhận ra chữ Hán này rồi ạ.",
  },
  {
    id: "yct1-jiao",
    hanzi: "叫",
    pinyin: "jiào",
    meaning: "kêu, gọi là, tên là",
    category: "actions",
    example: "小狗汪汪叫。",
    examplePinyin: "Xiǎogǒu wāngwāng jiào.",
    exampleVi: "Cún con sủa gâu gâu.",
  },
  {
    id: "yct1-zai",
    hanzi: "在",
    pinyin: "zài",
    meaning: "ở, tại, đang",
    category: "actions",
    example: "妈妈在家。",
    examplePinyin: "Māma zài jiā.",
    exampleVi: "Mẹ đang ở nhà.",
  },
  {
    id: "yct1-you",
    hanzi: "有",
    pinyin: "yǒu",
    meaning: "có",
    category: "actions",
    example: "我有两只小鸟。",
    examplePinyin: "Wǒ yǒu liǎng zhī xiǎoniǎo.",
    exampleVi: "Tớ có hai chú chim non.",
  },
  {
    id: "yct1-shi-verb",
    hanzi: "是",
    pinyin: "shì",
    meaning: "là, phải",
    category: "actions",
    example: "我是好学生。",
    examplePinyin: "Wǒ shì hǎo xuésheng.",
    exampleVi: "Em là học sinh ngoan.",
  },
  {
    id: "yct1-bu",
    hanzi: "不",
    pinyin: "bù",
    meaning: "không, chẳng",
    category: "actions",
    example: "我不喝茶。",
    examplePinyin: "Wǒ bù hē chá.",
    exampleVi: "Con không uống trà.",
  },
  {
    id: "yct1-mei",
    hanzi: "没",
    pinyin: "méi",
    meaning: "không, chưa có",
    category: "actions",
    example: "他没有苹果。",
    examplePinyin: "Tā méiyǒu píngguǒ.",
    exampleVi: "Bạn ấy không có quả táo nào.",
  },
  {
    id: "yct1-hen",
    hanzi: "很",
    pinyin: "hěn",
    meaning: "rất, lắm",
    category: "actions",
    example: "小猫很好看。",
    examplePinyin: "Xiǎomāo hěn hǎokàn.",
    exampleVi: "Mèo con nhìn rất xinh.",
  },
  {
    id: "yct1-de",
    hanzi: "的",
    pinyin: "de",
    meaning: "của (trợ từ sở hữu)",
    category: "actions",
    example: "我的小熊。",
    examplePinyin: "Wǒ de xiǎoxióng.",
    exampleVi: "Chú gấu của tớ.",
  },
  {
    id: "yct1-ge-classifier",
    hanzi: "个",
    pinyin: "gè",
    meaning: "cái, quả, con (lượng từ)",
    category: "actions",
    example: "一个大苹果。",
    examplePinyin: "Yí gè dà píngguǒ.",
    exampleVi: "Một quả táo to.",
  },
  {
    id: "yct1-ma",
    hanzi: "吗",
    pinyin: "ma",
    meaning: "... không? (trợ từ hỏi)",
    category: "actions",
    example: "你好吗？",
    examplePinyin: "Nǐ hǎo ma?",
    exampleVi: "Bạn khỏe không?",
  },
  {
    id: "yct1-le",
    hanzi: "了",
    pinyin: "le",
    meaning: "... rồi (hoàn thành)",
    category: "actions",
    example: "下课了！",
    examplePinyin: "Xiàkè le!",
    exampleVi: "Tan học rồi!",
  },
  {
    id: "yct1-he-and",
    hanzi: "和",
    pinyin: "hé",
    meaning: "và, cùng với",
    category: "actions",
    example: "爸爸和我。",
    examplePinyin: "Bàba hé wǒ.",
    exampleVi: "Bố và con.",
  },
  {
    id: "yct1-shang",
    hanzi: "上",
    pinyin: "shàng",
    meaning: "ở trên, lên trên",
    category: "actions",
    example: "在桌子上。",
    examplePinyin: "Zài zhuōzi shang.",
    exampleVi: "Ở trên mặt bàn.",
  },
  {
    id: "yct1-xia",
    hanzi: "下",
    pinyin: "xià",
    meaning: "ở dưới, xuống",
    category: "actions",
    example: "椅子下有小猫。",
    examplePinyin: "Yǐzi xià yǒu xiǎomāo.",
    exampleVi: "Dưới gầm ghế có chú mèo con.",
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
    titleVi: "Giáo trình Chuẩn YCT Cấp 1",
    titleZh: "YCT 标准教程 1",
    desc: "Dành cho học sinh bắt đầu làm quen với tiếng Trung (~80 từ vựng cốt lõi). Sách in màu sắc bắt mắt, nét vẽ hoạt họa sinh động.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1MnUqk3RHQOsOdW6sO_Umm0jKYsWnMnae",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=16YhBwyo5irjnHtV4RS2plRnjX_6kBTgQ",
    sizeMbTextbook: 5.3,
    sizeMbWorkbook: 4.8,
    wordsCount: 80,
  },
  {
    level: 2,
    titleVi: "Giáo trình Chuẩn YCT Cấp 2",
    titleZh: "YCT 标准教程 2",
    desc: "Mở rộng lên 150 từ vựng, rèn luyện kỹ năng nghe hiểu câu ngắn và miêu tả tranh sinh động.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1JJ_nBw0gght38E0o7l0aBSmOD8MobqL-",
    workbookUrl:
      "https://drive.google.com/uc?export=download&id=1MvEMC5fBxK9yqI95_SyR8v_NZq_XObvT",
    sizeMbTextbook: 7.2,
    sizeMbWorkbook: 6.1,
    wordsCount: 150,
  },
  {
    level: 3,
    titleVi: "Giáo trình Chuẩn YCT Cấp 3 (Tập 3 & 4)",
    titleZh: "YCT 标准教程 3 & 4",
    desc: "Tích lũy 300 từ vựng, giao tiếp tự tin các chủ đề đời sống học đường và gia đình.",
    textbookUrl:
      "https://drive.google.com/uc?export=download&id=1IssMKQEkP6zwxwaWFnaTPFe98ZI8Hi5w",
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

// Helper to convert YctWord to standard VocabularyWord for modals
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

// Progress persistence
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
  const updated: YctProgress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + xpGain,
  };
  saveYctProgress(updated);
  return updated;
}

export function recordQuizCompletion(score: number, total: number): { progress: YctProgress; earnedXp: number } {
  const current = getYctProgress();
  const earnedXp = Math.round((score / total) * 30);
  const updated: YctProgress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYctProgress(updated);
  return { progress: updated, earnedXp };
}

// Quiz Generator for kids
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

export function generateYctQuiz(count = 10, category?: YctCategoryId): YctQuizQuestion[] {
  const pool = category
    ? YCT1_WORDS.filter((w) => w.category === category)
    : YCT1_WORDS;

  // Shuffle pool
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((word, idx) => {
    // Decide question type
    const types: ("meaning" | "pinyin" | "listen")[] = ["meaning", "pinyin", "listen"];
    const type = types[idx % types.length];

    // Pick 3 distractor words from all YCT1 words
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
      // listen type
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

export const WORD_EMOJIS: Record<string, string> = {
  // greetings
  "yct1-ni-hao": "👋",
  "yct1-xiexie": "🙏",
  "yct1-bu-keqi": "🥰",
  "yct1-zaijian": "🙋",
  "yct1-wo": "👦",
  "yct1-ni": "👧",
  "yct1-ta-m": "👦",
  "yct1-ta-f": "👧",
  "yct1-women": "👨‍👩‍👧‍👦",
  "yct1-zhe": "👉",
  "yct1-zher": "📍",
  "yct1-na": "👉",
  "yct1-nar": "🔭",
  "yct1-na-which": "🤔",
  "yct1-nar-where": "🗺️",
  "yct1-shei": "🕵️",
  "yct1-shenme": "❓",
  // numbers
  "yct1-yi": "1️⃣",
  "yct1-er": "2️⃣",
  "yct1-san": "3️⃣",
  "yct1-si": "4️⃣",
  "yct1-wu": "5️⃣",
  "yct1-liu": "6️⃣",
  "yct1-qi": "7️⃣",
  "yct1-ba": "8️⃣",
  "yct1-jiu": "9️⃣",
  "yct1-shi": "🔟",
  "yct1-ji": "🔢",
  "yct1-dian": "⏰",
  "yct1-nian": "📅",
  "yct1-jintian": "☀️",
  "yct1-mingtian": "🌅",
  "yct1-xingqi": "🗓️",
  // family
  "yct1-baba": "👨",
  "yct1-mama": "👩",
  "yct1-gege": "👦",
  "yct1-jiejie": "👧",
  "yct1-didi": "👶",
  "yct1-meimei": "👧",
  "yct1-laoshi": "👩‍🏫",
  "yct1-pengyou": "🤝",
  "yct1-ren": "🧑",
  "yct1-jia": "🏡",
  "yct1-mingzi": "🏷️",
  // animals
  "yct1-mao": "🐱",
  "yct1-gou": "🐶",
  "yct1-niao": "🐦",
  "yct1-xiongmao": "🐼",
  // food
  "yct1-shui": "💧",
  "yct1-niunai": "🥛",
  "yct1-pingguo": "🍎",
  "yct1-baozi": "🥟",
  "yct1-mifan": "🍚",
  "yct1-miantiao": "🍜",
  "yct1-cha": "🍵",
  // body
  "yct1-yanjing": "👀",
  "yct1-bizi": "👃",
  "yct1-kou": "👄",
  "yct1-zuiba": "👄",
  "yct1-erduo": "👂",
  "yct1-toufa": "💇",
  "yct1-shou": "🖐️",
  "yct1-da": "🐘",
  "yct1-xiao": "🐥",
  "yct1-duo": "🍇",
  "yct1-shao": "🍒",
  "yct1-gao": "🦒",
  "yct1-re": "🔥",
  "yct1-hao": "👍",
  "yct1-gaoxing": "😄",
  // school
  "yct1-xuexiao": "🏫",
  "yct1-shangdian": "🏪",
  "yct1-shu": "📖",
  "yct1-shubao": "🎒",
  "yct1-qianbi": "✏️",
  "yct1-zhuozi": "🪑",
  "yct1-yizi": "🪑",
  "yct1-zhongguo": "🇨🇳",
  "yct1-beijing": "🏯",
  // actions
  "yct1-chi": "😋",
  "yct1-he": "🥤",
  "yct1-kan": "👀",
  "yct1-ting": "🎧",
  "yct1-shuo": "🗣️",
  "yct1-qu": "🚶",
  "yct1-lai": "🏃",
  "yct1-ai": "❤️",
  "yct1-xihuan": "💖",
  "yct1-renshi": "🤝",
  "yct1-jiao": "📢",
  "yct1-zai": "📍",
  "yct1-you": "🎁",
  "yct1-shi-verb": "✅",
  "yct1-bu": "❌",
  "yct1-mei": "🚫",
  "yct1-hen": "💯",
  "yct1-de": "🎀",
  "yct1-ge-classifier": "📦",
  "yct1-ma": "❓",
  "yct1-le": "🔔",
  "yct1-he-and": "➕",
  "yct1-shang": "⬆️",
  "yct1-xia": "⬇️",
};

export function getWordEmoji(word: YctWord): string {
  return WORD_EMOJIS[word.id] || "✨";
}

