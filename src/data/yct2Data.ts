import type { VocabularyWord } from "../types";
import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct2CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type Yct2CategoryId =
  | "greetings"
  | "numbers"
  | "family"
  | "animals"
  | "food"
  | "body"
  | "school"
  | "actions"
  | "descriptions"
  | "grammar";

export interface Yct2Category {
  id: Yct2CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface Yct2Lesson {
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}

export const YCT2_LESSONS: Yct2Lesson[] = [
  {
    lessonNumber: 1,
    lessonSlug: "bai-1-may-i-sit-here",
    titleVi: "Tôi ngồi đây được không?",
    titleZh: "我可以坐这儿吗？",
    wordCount: 8,
    estimatedMinutes: 8,
  },
  {
    lessonNumber: 2,
    lessonSlug: "bai-2-when-do-you-get-up-in-the-morning",
    titleVi: "Buổi sáng bạn dậy lúc mấy giờ?",
    titleZh: "你早上几点起床？",
    wordCount: 7,
    estimatedMinutes: 7,
  },
  {
    lessonNumber: 3,
    lessonSlug: "bai-3-where-is-your-pencil",
    titleVi: "Bút chì của bạn đâu?",
    titleZh: "你的铅笔呢？",
    wordCount: 10,
    estimatedMinutes: 10,
  },
  {
    lessonNumber: 4,
    lessonSlug: "bai-4-there-are-two-books-in-the-schoolbag",
    titleVi: "Trong cặp có hai quyển sách",
    titleZh: "书包里有两本书。",
    wordCount: 9,
    estimatedMinutes: 9,
  },
  {
    lessonNumber: 5,
    lessonSlug: "bai-5-can-you-cook",
    titleVi: "Bạn có biết nấu ăn không?",
    titleZh: "你会不会做饭？",
    wordCount: 7,
    estimatedMinutes: 7,
  },
  {
    lessonNumber: 6,
    lessonSlug: "bai-6-how-much-is-one-baozi",
    titleVi: "Bánh bao bao nhiêu tiền một cái?",
    titleZh: "包子多少钱一个？",
    wordCount: 6,
    estimatedMinutes: 6,
  },
  {
    lessonNumber: 7,
    lessonSlug: "bai-7-today-is-hotter-than-yesterday",
    titleVi: "Hôm nay nóng hơn hôm qua",
    titleZh: "今天比昨天热。",
    wordCount: 9,
    estimatedMinutes: 9,
  },
  {
    lessonNumber: 8,
    lessonSlug: "bai-8-martin-is-three-years-older-than-me",
    titleVi: "Martin lớn hơn tôi ba tuổi",
    titleZh: "马丁比我大三岁。",
    wordCount: 6,
    estimatedMinutes: 6,
  },
  {
    lessonNumber: 9,
    lessonSlug: "bai-9-what-did-you-do-today",
    titleVi: "Hôm nay bạn đã làm gì?",
    titleZh: "你今天做什么了？",
    wordCount: 6,
    estimatedMinutes: 6,
  },
  {
    lessonNumber: 10,
    lessonSlug: "bai-10-what-s-wrong-with-you",
    titleVi: "Bạn bị làm sao vậy?",
    titleZh: "你怎么了？",
    wordCount: 4,
    estimatedMinutes: 4,
  },
];

export const YCT2_CATEGORIES: Yct2Category[] = [
  {
    id: "greetings",
    nameVi: "Chào hỏi & Lễ phép",
    nameZh: "问候礼貌",
    icon: "👋",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    description: "Các câu chào hỏi, cảm ơn, xin lỗi, mời mọc và xưng hô thân thiện",
  },
  {
    id: "numbers",
    nameVi: "Số đếm & Thời gian",
    nameZh: "数字时间",
    icon: "🔢",
    badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
    description: "Đếm số từ 0 đến 10, sáng, tối, hôm qua, hôm nay, giờ và phút",
  },
  {
    id: "family",
    nameVi: "Gia đình & Con người",
    nameZh: "家庭人物",
    icon: "👨‍👩‍👧",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    description: "Thành viên gia đình, bạn học, học sinh, thầy cô, bác sĩ và đầu bếp",
  },
  {
    id: "animals",
    nameVi: "Động vật & Thiên nhiên",
    nameZh: "动物自然",
    icon: "🐼",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    description: "Mèo, chó, chim, gấu trúc, cá và thế giới tự nhiên xung quanh",
  },
  {
    id: "food",
    nameVi: "Món ăn & Đồ uống",
    nameZh: "美食饮品",
    icon: "🍎",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    description: "Bánh bao, cơm, mì sợi, táo, chuối, trái cây, trà, sữa và nước đá",
  },
  {
    id: "body",
    nameVi: "Cơ thể & Sức khỏe",
    nameZh: "身体健康",
    icon: "👁️",
    badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
    description: "Mắt, mũi, tai, miệng, tay, chân, tóc và hỏi thăm khi bị đau ốm",
  },
  {
    id: "school",
    nameVi: "Đồ vật & Nơi chốn",
    nameZh: "物品场所",
    icon: "🎒",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    description: "Cặp sách, bút chì, bàn ghế, giường ngủ, tivi, trường học, bệnh viện",
  },
  {
    id: "actions",
    nameVi: "Hành động & Động từ",
    nameZh: "日常动作",
    icon: "🏃",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    description: "Ngồi, dậy, ngủ, ăn, uống, đi, đến, xem, vẽ, chơi, mua và học",
  },
  {
    id: "descriptions",
    nameVi: "Miêu tả & Tính từ",
    nameZh: "特征描述",
    icon: "🎨",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    description: "To nhỏ, cao thấp, nóng lạnh, nhanh chậm, đẹp đẽ và ngon miệng",
  },
  {
    id: "grammar",
    nameVi: "Từ chức năng & Câu hỏi",
    nameZh: "虚词问句",
    icon: "❓",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    description: "Có thể, đừng, muốn, bao nhiêu, thế nào, so sánh hơn, rồi, cũng, không",
  },
];

export const YCT2_WORDS: YctWord[] = [
  {
    "id": "yct2-keyi",
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "meaning": "có thể",
    "category": "grammar",
    "lessonNumber": 1,
    "example": "我可以坐这儿吗？",
    "examplePinyin": "Wǒ kěyǐ zuò zhèr ma?",
    "exampleVi": "Tôi có thể ngồi ở đây được không?"
  },
  {
    "id": "yct2-zuo",
    "hanzi": "坐",
    "pinyin": "zuò",
    "meaning": "ngồi",
    "category": "actions",
    "lessonNumber": 1,
    "example": "请坐，请喝茶。",
    "examplePinyin": "Qǐng zuò, qǐng hē chá.",
    "exampleVi": "Mời ngồi, mời uống trà."
  },
  {
    "id": "yct2-qing",
    "hanzi": "请",
    "pinyin": "qǐng",
    "meaning": "mời",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "请进，请坐！",
    "examplePinyin": "Qǐng jìn, qǐng zuò!",
    "exampleVi": "Mời vào, mời ngồi!"
  },
  {
    "id": "yct2-bu-keqi",
    "hanzi": "不客气",
    "pinyin": "bú kèqi",
    "meaning": "không có chi",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "谢谢你！— 不客气。",
    "examplePinyin": "Xièxie nǐ! — Bú kèqi.",
    "exampleVi": "Cảm ơn bạn! — Không có gì đâu."
  },
  {
    "id": "yct2-buyao",
    "hanzi": "不要",
    "pinyin": "bùyào",
    "meaning": "không, không muốn",
    "category": "grammar",
    "lessonNumber": 1,
    "example": "上课请不要说话。",
    "examplePinyin": "Shàngkè qǐng bú yào shuōhuà.",
    "exampleVi": "Trong giờ học xin đừng nói chuyện."
  },
  {
    "id": "yct2-shuohua",
    "hanzi": "说话",
    "pinyin": "shuōhuà",
    "meaning": "nói chuyện",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "妹妹在跟小猫说话。",
    "examplePinyin": "Mèimei zài gēn xiǎomāo shuōhuà.",
    "exampleVi": "Em gái đang nói chuyện với mèo con."
  },
  {
    "id": "yct2-duibuqi",
    "hanzi": "对不起",
    "pinyin": "duìbuqǐ",
    "meaning": "tôi xin lỗi",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "对不起，我迟到了。",
    "examplePinyin": "Duìbuqǐ, wǒ chídào le.",
    "exampleVi": "Xin lỗi, em đến muộn rồi."
  },
  {
    "id": "yct2-mei-guanxi",
    "hanzi": "没关系",
    "pinyin": "méi guānxi",
    "meaning": "không sao",
    "category": "greetings",
    "lessonNumber": 1,
    "example": "没关系，请进吧。",
    "examplePinyin": "Méi guānxi, qǐng jìn ba.",
    "exampleVi": "Không sao đâu, em vào đi."
  },
  {
    "id": "yct2-qichuang",
    "hanzi": "起床",
    "pinyin": "qǐchuáng",
    "meaning": "thức dậy",
    "category": "actions",
    "lessonNumber": 2,
    "example": "你早上几点起床？",
    "examplePinyin": "Nǐ zǎoshang jǐ diǎn qǐchuáng?",
    "exampleVi": "Buổi sáng bạn thức dậy lúc mấy giờ?"
  },
  {
    "id": "yct2-shuijiao",
    "hanzi": "睡觉",
    "pinyin": "shuìjiào",
    "meaning": "đi ngủ, ngủ",
    "category": "actions",
    "lessonNumber": 2,
    "example": "晚上九点我要睡觉了。",
    "examplePinyin": "Wǎnshang jiǔ diǎn wǒ yào shuìjiào le.",
    "exampleVi": "Chín giờ tối con phải đi ngủ rồi."
  },
  {
    "id": "yct2-zaoshang",
    "hanzi": "早上",
    "pinyin": "zǎoshang",
    "meaning": "buổi sáng",
    "category": "numbers",
    "lessonNumber": 2,
    "example": "老师，早上好！",
    "examplePinyin": "Lǎoshī, zǎoshang hǎo!",
    "exampleVi": "Em chào thầy/cô buổi sáng ạ!"
  },
  {
    "id": "yct2-wanshang",
    "hanzi": "晚上",
    "pinyin": "wǎnshang",
    "meaning": "buổi tối",
    "category": "numbers",
    "lessonNumber": 2,
    "example": "晚上我们一家人在家看电视。",
    "examplePinyin": "Wǎnshang wǒmen yī jiā rén zài jiā kàn diànshì.",
    "exampleVi": "Buổi tối cả nhà em ở nhà xem tivi."
  },
  {
    "id": "yct2-dao",
    "hanzi": "到",
    "pinyin": "dào",
    "meaning": "đến",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "从学校到家很近。",
    "examplePinyin": "Cóng xuéxiào dào jiā hěn jìn.",
    "exampleVi": "Từ trường về đến nhà rất gần."
  },
  {
    "id": "yct2-ne",
    "hanzi": "呢",
    "pinyin": "ne",
    "meaning": "một hạt cho câu hỏi đặc biệt, thay thế hoặc tu từ",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "你的铅笔呢？",
    "examplePinyin": "Nǐ de qiānbǐ ne?",
    "exampleVi": "Bút chì của bạn đâu rồi?"
  },
  {
    "id": "yct2-yao",
    "hanzi": "要",
    "pinyin": "yào",
    "meaning": "muốn, cần",
    "category": "grammar",
    "lessonNumber": 2,
    "example": "我要一杯温牛奶。",
    "examplePinyin": "Wǒ yào yī bēi wēn niúnǎi.",
    "exampleVi": "Con muốn một cốc sữa ấm."
  },
  {
    "id": "yct2-chuang",
    "hanzi": "床",
    "pinyin": "chuáng",
    "meaning": "giường",
    "category": "school",
    "lessonNumber": 3,
    "example": "我的小猫在床上睡觉。",
    "examplePinyin": "Wǒ de xiǎomāo zài chuáng shang shuìjiào.",
    "exampleVi": "Mèo con của tôi đang ngủ trên giường."
  },
  {
    "id": "yct2-fangjian",
    "hanzi": "房间",
    "pinyin": "fángjiān",
    "meaning": "phòng",
    "category": "school",
    "lessonNumber": 3,
    "example": "这是我的小房间。",
    "examplePinyin": "Zhè shì wǒ de xiǎo fángjiān.",
    "exampleVi": "Đây là căn phòng nhỏ của em."
  },
  {
    "id": "yct2-dianshi",
    "hanzi": "电视",
    "pinyin": "diànshì",
    "meaning": "TV, truyền hình",
    "category": "school",
    "lessonNumber": 3,
    "example": "弟弟喜欢看电视。",
    "examplePinyin": "Dìdi xǐhuan kàn diànshì.",
    "exampleVi": "Em trai thích xem tivi."
  },
  {
    "id": "yct2-zhuozi",
    "hanzi": "桌子",
    "pinyin": "zhuōzi",
    "meaning": "mấy, vài (hỏi số lượng)",
    "category": "school",
    "lessonNumber": 3,
    "example": "书包在桌子上边。",
    "examplePinyin": "Shūbāo zài zhuōzi shàngbiān.",
    "exampleVi": "Cặp sách ở bên trên bàn."
  },
  {
    "id": "yct2-yizi",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "meaning": "ghế",
    "category": "school",
    "lessonNumber": 3,
    "example": "请坐在这把椅子上。",
    "examplePinyin": "Qǐng zuò zài zhè bǎ yǐzi shang.",
    "exampleVi": "Mời ngồi trên chiếc ghế này."
  },
  {
    "id": "yct2-qianbi",
    "hanzi": "铅笔",
    "pinyin": "qiānbǐ",
    "meaning": "bút chì",
    "category": "school",
    "lessonNumber": 3,
    "example": "我有三支彩色铅笔。",
    "examplePinyin": "Wǒ yǒu sān zhī cǎisè qiānbǐ.",
    "exampleVi": "Tôi có ba chiếc bút chì màu."
  },
  {
    "id": "yct2-shubao",
    "hanzi": "书包",
    "pinyin": "shūbāo",
    "meaning": "cặp sách",
    "category": "school",
    "lessonNumber": 3,
    "example": "书包里有两本书。",
    "examplePinyin": "Shūbāo li yǒu liǎng běn shū.",
    "exampleVi": "Trong cặp có hai quyển sách."
  },
  {
    "id": "yct2-limian",
    "hanzi": "里面",
    "pinyin": "lǐmiàn",
    "meaning": "bên trong",
    "category": "school",
    "lessonNumber": 3,
    "example": "盒子里面有一只小熊。",
    "examplePinyin": "Hézi lǐmiàn yǒu yī zhī xiǎoxióng.",
    "exampleVi": "Bên trong chiếc hộp có một chú gấu nhỏ."
  },
  {
    "id": "yct2-shangbian",
    "hanzi": "上边",
    "pinyin": "shàngbiān",
    "meaning": "bên trên",
    "category": "school",
    "lessonNumber": 3,
    "example": "小鸟在树上边唱歌。",
    "examplePinyin": "Xiǎoniǎo zài shù shàngbiān chànggē.",
    "exampleVi": "Chú chim đang hót ở bên trên cây."
  },
  {
    "id": "yct2-ai",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "meaning": "thấp",
    "category": "descriptions",
    "lessonNumber": 3,
    "example": "哥哥高，弟弟矮。",
    "examplePinyin": "Gēge gāo, dìdi ǎi.",
    "exampleVi": "Anh trai thì cao, em trai thì thấp."
  },
  {
    "id": "yct2-hongse",
    "hanzi": "红色",
    "pinyin": "hóngsè",
    "meaning": "màu đỏ",
    "category": "school",
    "lessonNumber": 4,
    "example": "苹果是红色的。",
    "examplePinyin": "Píngguǒ shì hóngsè de.",
    "exampleVi": "Quả táo có màu đỏ."
  },
  {
    "id": "yct2-huangse",
    "hanzi": "黄色",
    "pinyin": "huángsè",
    "meaning": "màu vàng",
    "category": "school",
    "lessonNumber": 4,
    "example": "香蕉是黄色的。",
    "examplePinyin": "Xiāngjiāo shì huángsè de.",
    "exampleVi": "Quả chuối có màu vàng."
  },
  {
    "id": "yct2-luse",
    "hanzi": "绿色",
    "pinyin": "lǜsè",
    "meaning": "màu xanh lá cây",
    "category": "school",
    "lessonNumber": 4,
    "example": "春天草地是绿色的。",
    "examplePinyin": "Chūntiān cǎodì shì lǜsè de.",
    "exampleVi": "Mùa xuân bãi cỏ có màu xanh lá."
  },
  {
    "id": "yct2-zhi",
    "hanzi": "只",
    "pinyin": "zhī",
    "meaning": "chỉ",
    "category": "numbers",
    "lessonNumber": 4,
    "example": "我家有一只可爱的小猫。",
    "examplePinyin": "Wǒ jiā yǒu yī zhī kě'ài de xiǎomāo.",
    "exampleVi": "Nhà tôi có một chú mèo nhỏ đáng yêu."
  },
  {
    "id": "yct2-mingzi",
    "hanzi": "名字",
    "pinyin": "míngzi",
    "meaning": "tên",
    "category": "family",
    "lessonNumber": 4,
    "example": "你叫什么名字？",
    "examplePinyin": "Nǐ jiào shénme míngzi?",
    "exampleVi": "Bạn tên là gì?"
  },
  {
    "id": "yct2-piaoliang",
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "meaning": "đẹp",
    "category": "descriptions",
    "lessonNumber": 4,
    "example": "这朵花真漂亮！",
    "examplePinyin": "Zhè duǒ huā zhēn piàoliang!",
    "exampleVi": "Bông hoa này thật xinh đẹp!"
  },
  {
    "id": "yct2-yanse",
    "hanzi": "颜色",
    "pinyin": "yánsè",
    "meaning": "màu sắc",
    "category": "school",
    "lessonNumber": 4,
    "example": "你喜欢什么颜色？",
    "examplePinyin": "Nǐ xǐhuan shénme yánsè?",
    "exampleVi": "Bạn thích màu sắc nào?"
  },
  {
    "id": "yct2-liang",
    "hanzi": "两",
    "pinyin": "liǎng",
    "meaning": "hai",
    "category": "numbers",
    "lessonNumber": 4,
    "example": "我有两个好朋友。",
    "examplePinyin": "Wǒ yǒu liǎng gè hǎo péngyou.",
    "exampleVi": "Tôi có hai người bạn tốt."
  },
  {
    "id": "yct2-ben",
    "hanzi": "本",
    "pinyin": "běn",
    "meaning": "một từ để đo sách",
    "category": "numbers",
    "lessonNumber": 4,
    "example": "我买了一本汉语书。",
    "examplePinyin": "Wǒ mǎi le yī běn Hànyǔ shū.",
    "exampleVi": "Tôi đã mua một cuốn sách tiếng Trung."
  },
  {
    "id": "yct2-baozi",
    "hanzi": "包子",
    "pinyin": "bāozi",
    "meaning": "bánh bao",
    "category": "food",
    "lessonNumber": 5,
    "example": "早上我吃了一个热包子。",
    "examplePinyin": "Zǎoshang wǒ chī le yī gè rè bāozi.",
    "exampleVi": "Buổi sáng tôi ăn một chiếc bánh bao nóng."
  },
  {
    "id": "yct2-yisheng",
    "hanzi": "医生",
    "pinyin": "yīshēng",
    "meaning": "bác sĩ",
    "category": "family",
    "lessonNumber": 5,
    "example": "生病了要去看医生。",
    "examplePinyin": "Shēngbìng le yào qù kàn yīshēng.",
    "exampleVi": "Khi bị ốm phải đi khám bác sĩ."
  },
  {
    "id": "yct2-chushi",
    "hanzi": "厨师",
    "pinyin": "chúshī",
    "meaning": "đầu bếp",
    "category": "family",
    "lessonNumber": 5,
    "example": "叔叔是一位好厨师，做菜很好吃。",
    "examplePinyin": "Shūshu shì yī wèi hǎo chúshī, zuò cài hěn hǎochī.",
    "exampleVi": "Chú là một đầu bếp giỏi, nấu ăn rất ngon."
  },
  {
    "id": "yct2-hui",
    "hanzi": "会",
    "pinyin": "huì",
    "meaning": "có thể",
    "category": "grammar",
    "lessonNumber": 5,
    "example": "你会不会做饭？",
    "examplePinyin": "Nǐ huì bu huì zuò fàn?",
    "exampleVi": "Bạn có biết nấu cơm không?"
  },
  {
    "id": "yct2-zuo-1",
    "hanzi": "做",
    "pinyin": "zuò",
    "meaning": "làm",
    "category": "actions",
    "lessonNumber": 5,
    "example": "妈妈在厨房做饭。",
    "examplePinyin": "Māma zài chúfáng zuò fàn.",
    "exampleVi": "Mẹ đang nấu cơm trong bếp."
  },
  {
    "id": "yct2-zhen",
    "hanzi": "真",
    "pinyin": "zhēn",
    "meaning": "thật",
    "category": "descriptions",
    "lessonNumber": 5,
    "example": "今天天气真好！",
    "examplePinyin": "Jīntiān tiānqì zhēn hǎo!",
    "exampleVi": "Hôm nay thời tiết thật là đẹp!"
  },
  {
    "id": "yct2-haochi",
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "meaning": "ngon (về đồ ăn)",
    "category": "food",
    "lessonNumber": 5,
    "example": "妈妈做的饺子真好吃。",
    "examplePinyin": "Māma zuò de jiǎozi zhēn hǎochī.",
    "exampleVi": "Bánh chẻo mẹ làm thật là ngon."
  },
  {
    "id": "yct2-qian",
    "hanzi": "钱",
    "pinyin": "qián",
    "meaning": "tiền",
    "category": "actions",
    "lessonNumber": 6,
    "example": "这个多少钱？",
    "examplePinyin": "Zhège duōshao qián?",
    "exampleVi": "Cái này bao nhiêu tiền?"
  },
  {
    "id": "yct2-cha",
    "hanzi": "茶",
    "pinyin": "chá",
    "meaning": "trà",
    "category": "food",
    "lessonNumber": 6,
    "example": "爷爷喜欢喝绿茶。",
    "examplePinyin": "Yéye xǐhuan hē lǜchá.",
    "exampleVi": "Ông nội thích uống trà xanh."
  },
  {
    "id": "yct2-mai",
    "hanzi": "买",
    "pinyin": "mǎi",
    "meaning": "mua",
    "category": "actions",
    "lessonNumber": 6,
    "example": "我想买一本画画的书。",
    "examplePinyin": "Wǒ xiǎng mǎi yī běn huàhuà de shū.",
    "exampleVi": "Tôi muốn mua một cuốn sách tập vẽ."
  },
  {
    "id": "yct2-duoshao",
    "hanzi": "多少",
    "pinyin": "duōshao",
    "meaning": "bao nhiêu",
    "category": "numbers",
    "lessonNumber": 6,
    "example": "包子多少钱一个？",
    "examplePinyin": "Bāozi duōshao qián yī gè?",
    "exampleVi": "Bánh bao bao nhiêu tiền một cái?"
  },
  {
    "id": "yct2-kuai",
    "hanzi": "块",
    "pinyin": "kuài",
    "meaning": "đồng, tệ (đơn vị tiền tệ), miếng",
    "category": "numbers",
    "lessonNumber": 6,
    "example": "一个面包五块钱。",
    "examplePinyin": "Yī gè miànbāo wǔ kuài qián.",
    "exampleVi": "Một ổ bánh mì năm đồng."
  },
  {
    "id": "yct2-bei",
    "hanzi": "杯",
    "pinyin": "bēi",
    "meaning": "cái cốc",
    "category": "numbers",
    "lessonNumber": 6,
    "example": "请给我一杯水。",
    "examplePinyin": "Qǐng gěi wǒ yī bēi shuǐ.",
    "exampleVi": "Làm ơn cho tôi một cốc nước."
  },
  {
    "id": "yct2-leng",
    "hanzi": "冷",
    "pinyin": "lěng",
    "meaning": "lạnh",
    "category": "descriptions",
    "lessonNumber": 7,
    "example": "今天很冷，要多穿衣服。",
    "examplePinyin": "Jīntiān hěn lěng, yào duō chuān yīfu.",
    "exampleVi": "Hôm nay rất lạnh, phải mặc thêm nhiều áo."
  },
  {
    "id": "yct2-re",
    "hanzi": "热",
    "pinyin": "rè",
    "meaning": "nóng",
    "category": "descriptions",
    "lessonNumber": 7,
    "example": "今天比昨天热多了。",
    "examplePinyin": "Jīntiān bǐ zuótiān rè duō le.",
    "exampleVi": "Hôm nay nóng hơn hôm qua nhiều."
  },
  {
    "id": "yct2-bingshui",
    "hanzi": "冰水",
    "pinyin": "bīngshuǐ",
    "meaning": "nước đá, nước lạnh",
    "category": "food",
    "lessonNumber": 7,
    "example": "夏天我喜欢喝冰水。",
    "examplePinyin": "Xiàtiān wǒ xǐhuan hē bīngshuǐ.",
    "exampleVi": "Mùa hè con thích uống nước đá mát lạnh."
  },
  {
    "id": "yct2-tianqi",
    "hanzi": "天气",
    "pinyin": "tiānqì",
    "meaning": "thời tiết",
    "category": "actions",
    "lessonNumber": 7,
    "example": "今天北京的天气很好。",
    "examplePinyin": "Jīntiān Běijīng de tiānqì hěn hǎo.",
    "exampleVi": "Thời tiết Bắc Kinh hôm nay rất đẹp."
  },
  {
    "id": "yct2-zenmeyang",
    "hanzi": "怎么样",
    "pinyin": "zěnmeyàng",
    "meaning": "Thế nào?",
    "category": "actions",
    "lessonNumber": 7,
    "example": "你觉得这本书怎么样？",
    "examplePinyin": "Nǐ juéde zhè běn shū zěnmeyàng?",
    "exampleVi": "Bạn thấy quyển sách này thế nào?"
  },
  {
    "id": "yct2-bi",
    "hanzi": "比",
    "pinyin": "bǐ",
    "meaning": "so sánh, hơn",
    "category": "grammar",
    "lessonNumber": 7,
    "example": "马丁比我大三岁。",
    "examplePinyin": "Mǎdīng bǐ wǒ dà sān suì.",
    "exampleVi": "Martin lớn hơn tôi ba tuổi."
  },
  {
    "id": "yct2-zuotian",
    "hanzi": "昨天",
    "pinyin": "zuótiān",
    "meaning": "hôm qua",
    "category": "numbers",
    "lessonNumber": 7,
    "example": "昨天我和妈妈去公园了。",
    "examplePinyin": "Zuótiān wǒ hé māma qù gōngyuán le.",
    "exampleVi": "Hôm qua tôi cùng mẹ đi công viên rồi."
  },
  {
    "id": "yct2-juede",
    "hanzi": "觉得",
    "pinyin": "juéde",
    "meaning": "cảm thấy, nghĩ",
    "category": "actions",
    "lessonNumber": 7,
    "example": "我觉得学中文很有趣。",
    "examplePinyin": "Wǒ juéde xué Zhōngwén hěn yǒuqù.",
    "exampleVi": "Tôi cảm thấy học tiếng Trung rất thú vị."
  },
  {
    "id": "yct2-haohe",
    "hanzi": "好喝",
    "pinyin": "hǎohē",
    "meaning": "ngon (đồ uống)",
    "category": "food",
    "lessonNumber": 7,
    "example": "这杯西瓜汁真好喝！",
    "examplePinyin": "Zhè bēi xīguāzhī zhēn hǎohē!",
    "exampleVi": "Cốc nước dưa hấu này ngon tuyệt!"
  },
  {
    "id": "yct2-didi",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "meaning": "em trai",
    "category": "family",
    "lessonNumber": 8,
    "example": "我弟弟今年四岁。",
    "examplePinyin": "Wǒ dìdi jīnnián sì suì.",
    "exampleVi": "Em trai tôi năm nay bốn tuổi."
  },
  {
    "id": "yct2-meimei",
    "hanzi": "妹妹",
    "pinyin": "mèimei",
    "meaning": "em gái",
    "category": "family",
    "lessonNumber": 8,
    "example": "妹妹在跳舞。",
    "examplePinyin": "Mèimei zài tiàowǔ.",
    "exampleVi": "Em gái đang nhảy múa."
  },
  {
    "id": "yct2-pengyou",
    "hanzi": "朋友",
    "pinyin": "péngyou",
    "meaning": "bạn",
    "category": "family",
    "lessonNumber": 8,
    "example": "我们都是好朋友。",
    "examplePinyin": "Wǒmen dōu shì hǎo péngyou.",
    "exampleVi": "Chúng mình đều là bạn tốt."
  },
  {
    "id": "yct2-tongxue",
    "hanzi": "同学",
    "pinyin": "tóngxué",
    "meaning": "bạn học",
    "category": "family",
    "lessonNumber": 8,
    "example": "这是我的新同桌同学。",
    "examplePinyin": "Zhè shì wǒ de xīn tóngzhuō tóngxué.",
    "exampleVi": "Đây là người bạn học cùng bàn mới của tôi."
  },
  {
    "id": "yct2-ye",
    "hanzi": "也",
    "pinyin": "yě",
    "meaning": "cũng",
    "category": "grammar",
    "lessonNumber": 8,
    "example": "他喜欢画画，我也喜欢。",
    "examplePinyin": "Tā xǐhuan huàhuà, wǒ yě xǐhuan.",
    "exampleVi": "Bạn ấy thích vẽ tranh, tôi cũng thích."
  },
  {
    "id": "yct2-xuesheng",
    "hanzi": "学生",
    "pinyin": "xuéshēng",
    "meaning": "sinh viên",
    "category": "family",
    "lessonNumber": 8,
    "example": "我们是快乐的小学生。",
    "examplePinyin": "Wǒmen shì kuàilè de xiǎoxuéshēng.",
    "exampleVi": "Chúng em là những học sinh tiểu học vui vẻ."
  },
  {
    "id": "yct2-xiangjiao",
    "hanzi": "香蕉",
    "pinyin": "xiāngjiāo",
    "meaning": "chuối",
    "category": "food",
    "lessonNumber": 9,
    "example": "猴子最喜欢吃香蕉。",
    "examplePinyin": "Hóuzi zuì xǐhuan chī xiāngjiāo.",
    "exampleVi": "Con khỉ thích ăn chuối nhất."
  },
  {
    "id": "yct2-xiongmao",
    "hanzi": "熊猫",
    "pinyin": "xióngmāo",
    "meaning": "gấu trúc",
    "category": "animals",
    "lessonNumber": 9,
    "example": "大熊猫黑白相间，真可爱。",
    "examplePinyin": "Dàxióngmāo hēibái xiāngjiàn, zhēn kě'ài.",
    "exampleVi": "Gấu trúc hai màu đen trắng, thật đáng yêu."
  },
  {
    "id": "yct2-shuiguo",
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "meaning": "trái cây",
    "category": "food",
    "lessonNumber": 9,
    "example": "多吃水果身体好。",
    "examplePinyin": "Duō chī shuǐguǒ shēntǐ hǎo.",
    "exampleVi": "Ăn nhiều trái cây rất tốt cho sức khỏe."
  },
  {
    "id": "yct2-le",
    "hanzi": "了",
    "pinyin": "le",
    "meaning": "rồi (trợ từ hoàn thành)",
    "category": "grammar",
    "lessonNumber": 9,
    "example": "下课了，我们去玩吧！",
    "examplePinyin": "Xiàkè le, wǒmen qù wán ba!",
    "exampleVi": "Hết giờ học rồi, chúng mình đi chơi thôi!"
  },
  {
    "id": "yct2-hua",
    "hanzi": "画",
    "pinyin": "huà",
    "meaning": "bức tranh, vẽ",
    "category": "actions",
    "lessonNumber": 9,
    "example": "我画了一只可爱的小狗。",
    "examplePinyin": "Wǒ huà le yī zhī kě'ài de xiǎogǒu.",
    "exampleVi": "Tôi đã vẽ một chú cún con xinh xắn."
  },
  {
    "id": "yct2-meiyou",
    "hanzi": "没有",
    "pinyin": "méiyǒu",
    "meaning": "không, không muốn",
    "category": "grammar",
    "lessonNumber": 9,
    "example": "书包里没有铅笔。",
    "examplePinyin": "Shūbāo li méiyǒu qiānbǐ.",
    "exampleVi": "Trong cặp sách không có bút chì."
  },
  {
    "id": "yct2-jiao",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "meaning": "bàn chân",
    "category": "body",
    "lessonNumber": 10,
    "example": "跳绳的时候要小心脚。",
    "examplePinyin": "Tiàoshéng de shíhou yào xiǎoxīn jiǎo.",
    "exampleVi": "Khi nhảy dây phải cẩn thận chân nhé."
  },
  {
    "id": "yct2-yiyuan",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "meaning": "bệnh viện",
    "category": "school",
    "lessonNumber": 10,
    "example": "生病了要早点去医院看医生。",
    "examplePinyin": "Shēngbìng le yào zǎodiǎn qù yīyuàn kàn yīshēng.",
    "exampleVi": "Bị ốm thì nên đến bệnh viện khám sớm."
  },
  {
    "id": "yct2-zenme-le",
    "hanzi": "怎么了",
    "pinyin": "zěnme le",
    "meaning": "bị làm sao, sao thế",
    "category": "greetings",
    "lessonNumber": 10,
    "example": "你怎么了？哪里不舒服吗？",
    "examplePinyin": "Nǐ zěnme le? Nǎlǐ bù shūfu ma?",
    "exampleVi": "Bạn bị làm sao thế? Có khó chịu ở đâu không?"
  },
  {
    "id": "yct2-teng",
    "hanzi": "疼",
    "pinyin": "téng",
    "meaning": "đau, nhức",
    "category": "body",
    "lessonNumber": 10,
    "example": "医生，我的肚子有点儿疼。",
    "examplePinyin": "Yīshēng, wǒ de dùzi yǒudiǎnr téng.",
    "exampleVi": "Bác sĩ ơi, bụng cháu hơi bị đau ạ."
  },
  {
    "id": "yct2-mifan",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "meaning": "cơm",
    "category": "food",
    "example": "中午我们吃米饭和蔬菜。",
    "examplePinyin": "Zhōngwǔ wǒmen chī mǐfàn hé shūcài.",
    "exampleVi": "Buổi trưa chúng mình ăn cơm và rau củ."
  },
  {
    "id": "yct2-miantiao",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "meaning": "mì",
    "category": "food",
    "example": "生日的时候吃长寿面条。",
    "examplePinyin": "Shēngrì de shíhou chī chángshòu miàntiáo.",
    "exampleVi": "Vào ngày sinh nhật thì ăn mì trường thọ."
  },
  {
    "id": "yct2-pingguo",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "meaning": "táo",
    "category": "food",
    "example": "一天一个红苹果，身体棒！",
    "examplePinyin": "Yī tiān yī gè hóng píngguǒ, shēntǐ bàng!",
    "exampleVi": "Mỗi ngày một quả táo đỏ, sức khỏe dồi dào!"
  },
  {
    "id": "yct2-chi",
    "hanzi": "吃",
    "pinyin": "chī",
    "meaning": "ăn",
    "category": "actions",
    "example": "大熊猫在吃竹子。",
    "examplePinyin": "Dàxióngmāo zài chī zhúzi.",
    "exampleVi": "Gấu trúc đang ăn lá trúc."
  },
  {
    "id": "yct2-he",
    "hanzi": "喝",
    "pinyin": "hē",
    "meaning": "uống",
    "category": "actions",
    "example": "多喝水对身体好。",
    "examplePinyin": "Duō hē shuǐ duì shēntǐ hǎo.",
    "exampleVi": "Uống nhiều nước rất tốt cho cơ thể."
  },
  {
    "id": "yct2-niunai",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "meaning": "sữa",
    "category": "food",
    "example": "早上喝一杯热牛奶。",
    "examplePinyin": "Zǎoshang hē yī bēi rè niúnǎi.",
    "exampleVi": "Buổi sáng uống một cốc sữa nóng."
  },
  {
    "id": "yct2-baba",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "meaning": "bố",
    "category": "family",
    "example": "爸爸陪我骑自行车。",
    "examplePinyin": "Bàba péi wǒ qí zìxíngchē.",
    "exampleVi": "Bố cùng tôi đạp xe đạp."
  },
  {
    "id": "yct2-gege",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "meaning": "anh trai",
    "category": "family",
    "example": "哥哥在教我写汉字。",
    "examplePinyin": "Gēge zài jiāo wǒ xiě hànzì.",
    "exampleVi": "Anh trai đang dạy tôi viết chữ Hán."
  },
  {
    "id": "yct2-jiejie",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "meaning": "chị gái",
    "category": "family",
    "example": "姐姐唱歌很好听。",
    "examplePinyin": "Jiějie chànggē hěn hǎotīng.",
    "exampleVi": "Chị gái hát rất hay."
  },
  {
    "id": "yct2-mama",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "meaning": "mẹ",
    "category": "family",
    "example": "我最爱妈妈。",
    "examplePinyin": "Wǒ zuì ài māma.",
    "exampleVi": "Con yêu mẹ nhất trên đời."
  },
  {
    "id": "yct2-jia",
    "hanzi": "家",
    "pinyin": "jiā",
    "meaning": "gia đình, nhà",
    "category": "family",
    "example": "我家在北京。",
    "examplePinyin": "Wǒ jiā zài Běijīng.",
    "exampleVi": "Nhà tôi ở Bắc Kinh."
  },
  {
    "id": "yct2-ji",
    "hanzi": "几",
    "pinyin": "jǐ",
    "meaning": "mấy, vài (hỏi số lượng)",
    "category": "numbers",
    "example": "现在几点了？",
    "examplePinyin": "Xiànzài jǐ diǎn le?",
    "exampleVi": "Bây giờ là mấy giờ rồi?"
  },
  {
    "id": "yct2-bizi",
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "meaning": "mũi",
    "category": "body",
    "example": "大象有长长的鼻子。",
    "examplePinyin": "Dàxiàng yǒu chángcháng de bízi.",
    "exampleVi": "Con voi có chiếc vòi/mũi thật dài."
  },
  {
    "id": "yct2-erduo",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "meaning": "tai",
    "category": "body",
    "example": "小兔子的耳朵长长的。",
    "examplePinyin": "Xiǎotùzi de ěrduo chángcháng de.",
    "exampleVi": "Đôi tai của chú thỏ con dài dài."
  },
  {
    "id": "yct2-kou",
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaning": "miệng",
    "category": "body",
    "example": "张开嘴巴，张大口。",
    "examplePinyin": "Zhāngkāi zuǐba, zhāng dà kǒu.",
    "exampleVi": "Há miệng ra nào, há to miệng."
  },
  {
    "id": "yct2-shou",
    "hanzi": "手",
    "pinyin": "shǒu",
    "meaning": "tay",
    "category": "body",
    "example": "吃饭前要认真洗手。",
    "examplePinyin": "Chīfàn qián yào rènzhēn xǐshǒu.",
    "exampleVi": "Trước khi ăn cơm phải rửa tay cẩn thận nhé."
  },
  {
    "id": "yct2-toufa",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "meaning": "tóc",
    "category": "body",
    "example": "妹妹梳着漂亮的头发。",
    "examplePinyin": "Mèimei shū zhe piàoliang de tóufa.",
    "exampleVi": "Em gái chải mái tóc thật xinh."
  },
  {
    "id": "yct2-yanjing",
    "hanzi": "眼睛",
    "pinyin": "yǎnjing",
    "meaning": "mắt",
    "category": "body",
    "example": "小猫的眼睛亮晶晶的。",
    "examplePinyin": "Xiǎomāo de yǎnjing liàngjīngjīng de.",
    "exampleVi": "Đôi mắt chú mèo con sáng lấp lánh."
  },
  {
    "id": "yct2-kuai-1",
    "hanzi": "快",
    "pinyin": "kuài",
    "meaning": "nhanh",
    "category": "descriptions",
    "example": "小马跑得真快！",
    "examplePinyin": "Xiǎomǎ pǎo de zhēn kuài!",
    "exampleVi": "Chú ngựa chạy thật là nhanh!"
  },
  {
    "id": "yct2-zher",
    "hanzi": "这儿",
    "pinyin": "zhèr",
    "meaning": "ở đây",
    "category": "school",
    "example": "请到这儿来坐。",
    "examplePinyin": "Qǐng dào zhèr lái zuò.",
    "exampleVi": "Mời bạn lại đây ngồi."
  },
  {
    "id": "yct2-nar",
    "hanzi": "那儿",
    "pinyin": "nàr",
    "meaning": "ở đó",
    "category": "school",
    "example": "那儿有一棵大树。",
    "examplePinyin": "Nàr yǒu yī kē dà shù.",
    "exampleVi": "Đằng kia có một cái cây to."
  },
  {
    "id": "yct2-chang",
    "hanzi": "长",
    "pinyin": "cháng",
    "meaning": "dài, chiều dài",
    "category": "descriptions",
    "example": "小猴子的尾巴很长。",
    "examplePinyin": "Xiǎohóuzi de wěiba hěn cháng.",
    "exampleVi": "Cái đuôi của chú khỉ nhỏ rất dài."
  },
  {
    "id": "yct2-da",
    "hanzi": "大",
    "pinyin": "dà",
    "meaning": "lớn",
    "category": "descriptions",
    "example": "大象的身体很大。",
    "examplePinyin": "Dàxiàng de shēntǐ hěn dà.",
    "exampleVi": "Cơ thể của con voi rất to lớn."
  },
  {
    "id": "yct2-xiao",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "meaning": "nhỏ",
    "category": "descriptions",
    "example": "这是一只可爱的小鸟。",
    "examplePinyin": "Zhè shì yī zhī kě'ài de xiǎoniǎo.",
    "exampleVi": "Đây là một chú chim nhỏ đáng yêu."
  },
  {
    "id": "yct2-gao",
    "hanzi": "高",
    "pinyin": "gāo",
    "meaning": "cao",
    "category": "descriptions",
    "example": "长颈鹿真高啊！",
    "examplePinyin": "Chángjǐnglù zhēn gāo a!",
    "exampleVi": "Hươu cao cổ cao thật đấy!"
  },
  {
    "id": "yct2-hao",
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaning": "tốt",
    "category": "descriptions",
    "example": "今天心情真好！",
    "examplePinyin": "Jīntiān xīnqíng zhēn hǎo!",
    "exampleVi": "Hôm nay tâm trạng thật tốt!"
  },
  {
    "id": "yct2-gaoxing",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "meaning": "vui mừng, vui vẻ",
    "category": "descriptions",
    "example": "今天收到礼物我很高兴。",
    "examplePinyin": "Jīntiān shōudào lǐwù wǒ hěn gāoxìng.",
    "exampleVi": "Hôm nay nhận được quà tôi rất vui."
  },
  {
    "id": "yct2-hong",
    "hanzi": "红",
    "pinyin": "hóng",
    "meaning": "đỏ",
    "category": "school",
    "example": "草莓是红的。",
    "examplePinyin": "Cǎoméi shì hóng de.",
    "exampleVi": "Quả dâu tây màu đỏ."
  },
  {
    "id": "yct2-huang",
    "hanzi": "黄",
    "pinyin": "huáng",
    "meaning": "vàng",
    "category": "school",
    "example": "小鸭子是黄色的。",
    "examplePinyin": "Xiǎoyāzi shì huángsè de.",
    "exampleVi": "Chú vịt con màu vàng."
  },
  {
    "id": "yct2-lu",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "meaning": "xanh lá",
    "category": "school",
    "example": "小草发出了绿芽。",
    "examplePinyin": "Xiǎocǎo fāchū le lǜ yá.",
    "exampleVi": "Cỏ non đã nhú mầm xanh biếc."
  },
  {
    "id": "yct2-kan",
    "hanzi": "看",
    "pinyin": "kàn",
    "meaning": "nhìn, xem",
    "category": "actions",
    "example": "我们一起看童话书吧。",
    "examplePinyin": "Wǒmen yīqǐ kàn tónghuà shū ba.",
    "exampleVi": "Chúng mình cùng đọc sách truyện cổ tích nhé."
  },
  {
    "id": "yct2-lai",
    "hanzi": "来",
    "pinyin": "lái",
    "meaning": "đến",
    "category": "actions",
    "example": "欢迎你来我家做客！",
    "examplePinyin": "Huānyíng nǐ lái wǒ jiā zuòkè!",
    "exampleVi": "Hoan nghênh bạn đến nhà mình chơi!"
  },
  {
    "id": "yct2-ai-1",
    "hanzi": "爱",
    "pinyin": "ài",
    "meaning": "yêu, tình yêu",
    "category": "actions",
    "example": "我爱爸爸妈妈。",
    "examplePinyin": "Wǒ ài bàba māma.",
    "exampleVi": "Con yêu bố và mẹ."
  },
  {
    "id": "yct2-qu",
    "hanzi": "去",
    "pinyin": "qù",
    "meaning": "đi",
    "category": "actions",
    "example": "明天我们要去动物园。",
    "examplePinyin": "Míngtiān wǒmen yào qù dòngwùyuán.",
    "exampleVi": "Ngày mai chúng tôi sẽ đi sở thú."
  },
  {
    "id": "yct2-you",
    "hanzi": "有",
    "pinyin": "yǒu",
    "meaning": "có",
    "category": "actions",
    "example": "盒子里有彩笔吗？",
    "examplePinyin": "Hézi li yǒu cǎibǐ ma?",
    "exampleVi": "Trong hộp có bút màu không?"
  },
  {
    "id": "yct2-wan",
    "hanzi": "玩",
    "pinyin": "wán",
    "meaning": "chơi với",
    "category": "actions",
    "example": "小朋友们在草地上玩皮球。",
    "examplePinyin": "Xiǎopéngyoumen zài cǎodì shang wán píqiú.",
    "exampleVi": "Các bạn nhỏ đang chơi bóng trên bãi cỏ."
  },
  {
    "id": "yct2-ge",
    "hanzi": "个",
    "pinyin": "gè",
    "meaning": "cái, con (lượng từ chung)",
    "category": "numbers",
    "example": "我吃了一个甜苹果。",
    "examplePinyin": "Wǒ chī le yī gè tián píngguǒ.",
    "exampleVi": "Tôi đã ăn một quả táo ngọt."
  },
  {
    "id": "yct2-hen",
    "hanzi": "很",
    "pinyin": "hěn",
    "meaning": "rất",
    "category": "descriptions",
    "example": "这道菜很好吃。",
    "examplePinyin": "Zhè dào cài hěn hǎochī.",
    "exampleVi": "Món ăn này rất ngon."
  },
  {
    "id": "yct2-shi",
    "hanzi": "是",
    "pinyin": "shì",
    "meaning": "là",
    "category": "actions",
    "example": "我是中国小学生。",
    "examplePinyin": "Wǒ shì Zhōngguó xiǎoxuéshēng.",
    "exampleVi": "Tôi là học sinh tiểu học Trung Quốc."
  },
  {
    "id": "yct2-shenme",
    "hanzi": "什么",
    "pinyin": "shénme",
    "meaning": "gì?",
    "category": "grammar",
    "example": "你最喜欢吃什么水果？",
    "examplePinyin": "Nǐ zuì xǐhuan chī shénme shuǐguǒ?",
    "exampleVi": "Bạn thích ăn loại trái cây gì nhất?"
  },
  {
    "id": "yct2-zuo-2",
    "hanzi": "座",
    "pinyin": "zuò",
    "meaning": "tòa, cây, ngọn (lượng từ cho công trình, núi)",
    "category": "school",
    "example": "山脚下有一座红色的房子。",
    "examplePinyin": "Shān jiǎoxià yǒu yī zuò hóngsè de fángzi.",
    "exampleVi": "Dưới chân núi có một ngôi nhà màu đỏ."
  },
  {
    "id": "yct2-ma",
    "hanzi": "吗",
    "pinyin": "ma",
    "meaning": "không, phải không (trợ từ nghi vấn)",
    "category": "grammar",
    "example": "你今天去学校吗？",
    "examplePinyin": "Nǐ jīntiān qù xuéxiào ma?",
    "exampleVi": "Hôm nay bạn có đến trường không?"
  },
  {
    "id": "yct2-na",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "meaning": "nào?",
    "category": "grammar",
    "example": "你想看哪本书？",
    "examplePinyin": "Nǐ xiǎng kàn nǎ běn shū?",
    "exampleVi": "Bạn muốn đọc cuốn sách nào?"
  },
  {
    "id": "yct2-shei",
    "hanzi": "谁",
    "pinyin": "shéi",
    "meaning": "ai",
    "category": "grammar",
    "example": "谁是你的好朋友？",
    "examplePinyin": "Shéi shì nǐ de hǎo péngyou?",
    "exampleVi": "Ai là bạn thân của bạn?"
  },
  {
    "id": "yct2-zenme",
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "meaning": "Sao? Tại sao?",
    "category": "grammar",
    "example": "这只小鸟怎么飞走了？",
    "examplePinyin": "Zhè zhī xiǎoniǎo zěnme fēi zǒu le?",
    "exampleVi": "Sao chú chim nhỏ này lại bay đi mất rồi?"
  },
  {
    "id": "yct2-nar-1",
    "hanzi": "哪儿",
    "pinyin": "nǎr",
    "meaning": "Ở đâu?",
    "category": "school",
    "example": "小猫躲在哪儿呢？",
    "examplePinyin": "Xiǎomāo duǒ zài nǎr ne?",
    "exampleVi": "Mèo con trốn ở đâu thế nhỉ?"
  },
  {
    "id": "yct2-zhe",
    "hanzi": "这",
    "pinyin": "zhè",
    "meaning": "điều này",
    "category": "grammar",
    "example": "这是我的新铅笔盒。",
    "examplePinyin": "Zhè shì wǒ de xīn qiānbǐhé.",
    "exampleVi": "Đây là hộp bút chì mới của tôi."
  },
  {
    "id": "yct2-na-1",
    "hanzi": "那",
    "pinyin": "nà",
    "meaning": "đó",
    "category": "grammar",
    "example": "那是天上的白云。",
    "examplePinyin": "Nà shì tiānshang de báiyún.",
    "exampleVi": "Đó là đám mây trắng trên trời."
  },
  {
    "id": "yct2-ni",
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaning": "bạn",
    "category": "grammar",
    "example": "你好，很高兴认识你！",
    "examplePinyin": "Nǐ hǎo, hěn gāoxìng rènshi nǐ!",
    "exampleVi": "Chào bạn, rất vui được làm quen với bạn!"
  },
  {
    "id": "yct2-ta",
    "hanzi": "他",
    "pinyin": "tā",
    "meaning": "anh ấy",
    "category": "grammar",
    "example": "他是我们班的班长。",
    "examplePinyin": "Tā shì wǒmen bān de bānzhǎng.",
    "exampleVi": "Cậu ấy là lớp trưởng lớp chúng tôi."
  },
  {
    "id": "yct2-ta-1",
    "hanzi": "她",
    "pinyin": "tā",
    "meaning": "cô ấy",
    "category": "grammar",
    "example": "她跳舞跳得真美。",
    "examplePinyin": "Tā tiàowǔ tiào de zhēn měi.",
    "exampleVi": "Cô ấy nhảy múa thật đẹp."
  },
  {
    "id": "yct2-wo",
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaning": "tôi",
    "category": "grammar",
    "example": "我喜欢唱中文歌。",
    "examplePinyin": "Wǒ xǐhuan chàng Zhōngwén gē.",
    "exampleVi": "Tôi thích hát bài hát tiếng Trung."
  },
  {
    "id": "yct2-women",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "meaning": "chúng tôi",
    "category": "grammar",
    "example": "我们大家一起加油！",
    "examplePinyin": "Wǒmen dàjiā yīqǐ jiāyóu!",
    "exampleVi": "Tất cả chúng ta cùng cố lên nhé!"
  },
  {
    "id": "yct2-laoshi",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "meaning": "giáo viên",
    "category": "family",
    "example": "老师教我们学汉字。",
    "examplePinyin": "Lǎoshī jiāo wǒmen xué hànzì.",
    "exampleVi": "Thầy cô dạy chúng em học chữ Hán."
  },
  {
    "id": "yct2-hanyu",
    "hanzi": "汉语",
    "pinyin": "hànyǔ",
    "meaning": "tiếng Trung",
    "category": "school",
    "example": "学汉语非常有趣。",
    "examplePinyin": "Xué Hànyǔ fēicháng yǒuqù.",
    "exampleVi": "Học tiếng Trung vô cùng thú vị."
  },
  {
    "id": "yct2-shangban",
    "hanzi": "上班",
    "pinyin": "shàngbān",
    "meaning": "đi làm",
    "category": "school",
    "example": "妈妈每天坐地铁上班。",
    "examplePinyin": "Māma měitiān zuò dìtiě shàngbān.",
    "exampleVi": "Mẹ đi tàu điện ngầm đi làm mỗi ngày."
  },
  {
    "id": "yct2-xuexi",
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "meaning": "học",
    "category": "school",
    "example": "我们在学校快乐学习。",
    "examplePinyin": "Wǒmen zài xuéxiào kuàilè xuéxí.",
    "exampleVi": "Chúng em vui vẻ học tập tại trường."
  },
  {
    "id": "yct2-xuexiao",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "meaning": "trường học",
    "category": "school",
    "example": "我们的学校又大又漂亮。",
    "examplePinyin": "Wǒmen de xuéxiào yòu dà yòu piàoliang.",
    "exampleVi": "Trường học của chúng tôi vừa to vừa đẹp."
  },
  {
    "id": "yct2-nian",
    "hanzi": "年",
    "pinyin": "nián",
    "meaning": "năm",
    "category": "numbers",
    "example": "我今年七岁了。",
    "examplePinyin": "Wǒ jīnnián qī suì le.",
    "exampleVi": "Năm nay con bảy tuổi rồi."
  },
  {
    "id": "yct2-fenzhong",
    "hanzi": "分钟",
    "pinyin": "fēnzhōng",
    "meaning": "phút",
    "category": "numbers",
    "example": "休息十分钟再玩吧。",
    "examplePinyin": "Xiūxi shí fēnzhōng zài wán ba.",
    "exampleVi": "Nghỉ ngơi mười phút rồi hãy chơi tiếp nhé."
  },
  {
    "id": "yct2-beijing",
    "hanzi": "北京",
    "pinyin": "Běijīng",
    "meaning": "Bắc Kinh",
    "category": "school",
    "example": "北京有很多名胜古迹。",
    "examplePinyin": "Běijīng yǒu hěnduō míngshèng gǔjì.",
    "exampleVi": "Bắc Kinh có rất nhiều danh lam thắng cảnh cổ kính."
  },
  {
    "id": "yct2-shangdian",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "meaning": "cửa hàng",
    "category": "school",
    "example": "商店里有很多好看的书。",
    "examplePinyin": "Shāngdiàn li yǒu hěnduō hǎokàn de shū.",
    "exampleVi": "Trong cửa hàng có rất nhiều cuốn sách hay."
  },
  {
    "id": "yct2-zhongguoren",
    "hanzi": "中国人",
    "pinyin": "zhōngguórén",
    "meaning": "người Trung Quốc",
    "category": "family",
    "example": "李老师是中国人。",
    "examplePinyin": "Lǐ lǎoshī shì Zhōngguórén.",
    "exampleVi": "Cô Lý là người Trung Quốc."
  },
  {
    "id": "yct2-gezi",
    "hanzi": "个子",
    "pinyin": "gèzi",
    "meaning": "vóc dáng, chiều cao",
    "category": "descriptions",
    "example": "小明个子长高了。",
    "examplePinyin": "Xiǎomíng gèzi zhǎng gāo le.",
    "exampleVi": "Tiểu Minh dáng người đã cao lớn hơn rồi."
  },
  {
    "id": "yct2-gou",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "meaning": "con chó",
    "category": "animals",
    "example": "小狗摇着小尾巴。",
    "examplePinyin": "Xiǎogǒu yáo zhe xiǎo wěiba.",
    "exampleVi": "Chú cún con đang vẫy chiếc đuôi nhỏ."
  },
  {
    "id": "yct2-mao",
    "hanzi": "猫",
    "pinyin": "māo",
    "meaning": "con mèo",
    "category": "animals",
    "example": "小猫在阳光下睡觉。",
    "examplePinyin": "Xiǎomāo zài yángguāng xià shuìjiào.",
    "exampleVi": "Mèo con đang ngủ dưới ánh nắng."
  },
  {
    "id": "yct2-niao",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "meaning": "chim",
    "category": "animals",
    "example": "小鸟在天空自由飞翔。",
    "examplePinyin": "Xiǎoniǎo zài tiānkōng zìyóu fēixiáng.",
    "exampleVi": "Chú chim nhỏ tự do bay lượn trên bầu trời."
  },
  {
    "id": "yct2-shui",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaning": "nước",
    "category": "food",
    "example": "口渴了请喝温水。",
    "examplePinyin": "Kǒukě le qǐng hē wēn shuǐ.",
    "exampleVi": "Khát nước thì hãy uống nước ấm nhé."
  },
  {
    "id": "yct2-yu",
    "hanzi": "鱼",
    "pinyin": "yú",
    "meaning": "cá",
    "category": "animals",
    "example": "小金鱼在水里游来游去。",
    "examplePinyin": "Xiǎojīnyú zài shuǐ li yóu lái yóu qù.",
    "exampleVi": "Chú cá vàng bơi qua bơi lại trong nước."
  },
  {
    "id": "yct2-yi",
    "hanzi": "一",
    "pinyin": "yī",
    "meaning": "một",
    "category": "numbers",
    "example": "树上有一只小松鼠。",
    "examplePinyin": "Shù shang yǒu yī zhī xiǎosōngshǔ.",
    "exampleVi": "Trên cây có một chú sóc nhỏ."
  },
  {
    "id": "yct2-er",
    "hanzi": "二",
    "pinyin": "èr",
    "meaning": "hai",
    "category": "numbers",
    "example": "我有两只眼睛。",
    "examplePinyin": "Wǒ yǒu liǎng zhī yǎnjing.",
    "exampleVi": "Em có hai đôi mắt."
  },
  {
    "id": "yct2-san",
    "hanzi": "三",
    "pinyin": "sān",
    "meaning": "ba",
    "category": "numbers",
    "example": "三只小猪盖房子。",
    "examplePinyin": "Sān zhī xiǎozhū gài fángzi.",
    "exampleVi": "Ba chú heo con xây nhà."
  },
  {
    "id": "yct2-si",
    "hanzi": "四",
    "pinyin": "sì",
    "meaning": "bốn",
    "category": "numbers",
    "example": "一年有四个季节。",
    "examplePinyin": "Yī nián yǒu sì gè jìjié.",
    "exampleVi": "Một năm có bốn mùa."
  },
  {
    "id": "yct2-wu",
    "hanzi": "五",
    "pinyin": "wǔ",
    "meaning": "năm",
    "category": "numbers",
    "example": "一只手有五个手指头。",
    "examplePinyin": "Yī zhī shǒu yǒu wǔ gè shǒuzhǐtou.",
    "exampleVi": "Một bàn tay có năm ngón tay."
  },
  {
    "id": "yct2-liu",
    "hanzi": "六",
    "pinyin": "liù",
    "meaning": "sáu",
    "category": "numbers",
    "example": "盒子里有六支彩色笔。",
    "examplePinyin": "Hézi li yǒu liù zhī cǎisèbǐ.",
    "exampleVi": "Trong hộp có sáu chiếc bút màu."
  },
  {
    "id": "yct2-qi",
    "hanzi": "七",
    "pinyin": "qī",
    "meaning": "bảy",
    "category": "numbers",
    "example": "彩虹有七种颜色。",
    "examplePinyin": "Cǎihóng yǒu qī zhǒng yánsè.",
    "exampleVi": "Cầu vồng có bảy sắc màu."
  },
  {
    "id": "yct2-ba",
    "hanzi": "八",
    "pinyin": "bā",
    "meaning": "tám",
    "category": "numbers",
    "example": "早上八点我们开始上课。",
    "examplePinyin": "Zǎoshang bā diǎn wǒmen kāishǐ shàngkè.",
    "exampleVi": "Tám giờ sáng chúng tôi bắt đầu vào học."
  },
  {
    "id": "yct2-jiu",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "meaning": "chín",
    "category": "numbers",
    "example": "九点了，该上床睡觉了。",
    "examplePinyin": "Jiǔ diǎn le, gāi shàngchuáng shuìjiào le.",
    "exampleVi": "Chín giờ rồi, đến lúc lên giường đi ngủ rồi."
  },
  {
    "id": "yct2-shi-1",
    "hanzi": "十",
    "pinyin": "shí",
    "meaning": "mười",
    "category": "numbers",
    "example": "十个小朋友排队做游戏。",
    "examplePinyin": "Shí gè xiǎopéngyou páiduì zuò yóuxì.",
    "exampleVi": "Mười bạn nhỏ xếp hàng chơi trò chơi."
  },
  {
    "id": "yct2-ling",
    "hanzi": "零",
    "pinyin": "líng",
    "meaning": "không, không muốn",
    "category": "numbers",
    "example": "今天气温是零度。",
    "examplePinyin": "Jīntiān qìwēn shì líng dù.",
    "exampleVi": "Hôm nay nhiệt độ là không độ."
  },
  {
    "id": "yct2-duo",
    "hanzi": "多",
    "pinyin": "duō",
    "meaning": "nhiều",
    "category": "descriptions",
    "example": "天上有好多亮星星。",
    "examplePinyin": "Tiānshang yǒu hǎoduō liàng xīngxing.",
    "exampleVi": "Trên trời có rất nhiều vì sao lấp lánh."
  },
  {
    "id": "yct2-dadianhua",
    "hanzi": "打电话",
    "pinyin": "dǎdiànhuà",
    "meaning": "gọi điện thoại",
    "category": "greetings",
    "example": "我给外婆打电话问好。",
    "examplePinyin": "Wǒ gěi wàipó dǎ diànhuà wènhǎo.",
    "exampleVi": "Con gọi điện thoại hỏi thăm sức khỏe bà ngoại."
  }
];

// Helper to convert YctWord to standard VocabularyWord for modals
export function toVocabularyWord2(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct2",
    hskLevel: "HSK2",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

// Progress persistence for YCT2
const STORAGE_KEY_YCT2 = "hanyu.yct2.progress.v1";

export interface Yct2Progress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYct2Progress(): Yct2Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YCT2);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as Yct2Progress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYct2Progress(progress: Yct2Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY_YCT2, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord2(wordId: string): Yct2Progress {
  const current = getYct2Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const updated: Yct2Progress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + xpGain,
  };
  saveYct2Progress(updated);
  return updated;
}

export function recordQuizCompletion2(
  score: number,
  total: number
): { progress: Yct2Progress; earnedXp: number } {
  const current = getYct2Progress();
  const earnedXp = Math.round((score / total) * 30);
  const updated: Yct2Progress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYct2Progress(updated);
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

export function generateYct2Quiz(
  count = 10,
  filter?: { category?: Yct2CategoryId; lessonNumber?: number }
): YctQuizQuestion[] {
  let pool = YCT2_WORDS;
  if (filter?.lessonNumber) {
    pool = pool.filter((w) => w.lessonNumber === filter.lessonNumber);
  } else if (filter?.category) {
    pool = pool.filter((w) => w.category === filter.category);
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));

  return selected.map((word, idx) => {
    const types: ("meaning" | "pinyin" | "listen")[] = ["meaning", "pinyin", "listen"];
    const type = types[idx % types.length];

    const distractors = YCT2_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q2-${word.id}-${idx}`,
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
        id: `q2-${word.id}-${idx}`,
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
        id: `q2-${word.id}-${idx}`,
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

export const WORD_EMOJIS_2: Record<string, string> = {
  "yct2-keyi": "👌",
  "yct2-zuo": "🪑",
  "yct2-qing": "🙏",
  "yct2-bu-keqi": "🥰",
  "yct2-bu-yao": "🙅",
  "yct2-shuohua": "🗣️",
  "yct2-duibuqi": "🙇",
  "yct2-mei-guanxi": "🤝",
  "yct2-qichuang": "⏰",
  "yct2-shuijiao": "😴",
  "yct2-zaoshang": "🌅",
  "yct2-wanshang": "🌙",
  "yct2-dao": "📍",
  "yct2-ne": "❓",
  "yct2-yao": "👉",
  "yct2-chuang": "🛏️",
  "yct2-fangjian": "🚪",
  "yct2-dianshi": "📺",
  "yct2-zhuozi": "🪑",
  "yct2-yizi": "🪑",
  "yct2-qianbi": "✏️",
  "yct2-shubao": "🎒",
  "yct2-limian": "📦",
  "yct2-shangbian": "⬆️",
  "yct2-ai": "🦒",
  "yct2-hongse": "🔴",
  "yct2-huangse": "🟡",
  "yct2-lvse": "🟢",
  "yct2-zhi": "🐥",
  "yct2-mingzi": "🏷️",
  "yct2-piaoliang": "✨",
  "yct2-yanse": "🎨",
  "yct2-liang": "✌️",
  "yct2-ben": "📚",
  "yct2-baozi": "🥟",
  "yct2-yisheng": "👨‍⚕️",
  "yct2-chushi": "👨‍🍳",
  "yct2-hui": "💡",
  "yct2-zuo-1": "🍳",
  "yct2-zhen": "💯",
  "yct2-haochi": "😋",
  "yct2-qian": "💰",
  "yct2-cha": "🍵",
  "yct2-mai": "🛒",
  "yct2-duoshao": "🔢",
  "yct2-kuai": "💵",
  "yct2-bei": "🥛",
  "yct2-leng": "❄️",
  "yct2-re": "🔥",
  "yct2-bingshui": "🧊",
  "yct2-tianqi": "⛅",
  "yct2-zenmeyang": "🤔",
  "yct2-bi": "⚖️",
  "yct2-zuotian": "🗓️",
  "yct2-juede": "💭",
  "yct2-haohe": "🥤",
  "yct2-didi": "👶",
  "yct2-meimei": "👧",
  "yct2-pengyou": "🤝",
  "yct2-tongxue": "🎒",
  "yct2-ye": "➕",
  "yct2-xuesheng": "🧑‍🎓",
  "yct2-xiangjiao": "🍌",
  "yct2-xiongmao": "🐼",
  "yct2-shuiguo": "🍉",
  "yct2-le": "🔔",
  "yct2-hua": "🎨",
  "yct2-meiyou": "🚫",
  "yct2-jiao": "🦶",
  "yct2-yiyuan": "🏥",
  "yct2-zenme-le": "🩹",
  "yct2-teng": "😢",
  "yct2-mifan": "🍚",
  "yct2-miantiao": "🍜",
  "yct2-pingguo": "🍎",
  "yct2-chi": "😋",
  "yct2-he": "🥤",
  "yct2-niunai": "🥛",
  "yct2-baba": "👨",
  "yct2-gege": "👦",
  "yct2-jiejie": "👧",
  "yct2-mama": "👩",
  "yct2-jia": "🏡",
  "yct2-ji": "🔢",
  "yct2-bizi": "👃",
  "yct2-erduo": "👂",
  "yct2-kou": "👄",
  "yct2-shou": "🖐️",
  "yct2-toufa": "💇",
  "yct2-yanjing": "👀",
  "yct2-kuai-1": "⚡",
  "yct2-zher": "📍",
  "yct2-nar": "🔭",
  "yct2-chang": "📏",
  "yct2-da": "🐘",
  "yct2-xiao": "🐥",
  "yct2-gao": "🦒",
  "yct2-hao": "👍",
  "yct2-gaoxing": "😄",
  "yct2-hong": "🔴",
  "yct2-huang": "🟡",
  "yct2-lv": "🟢",
  "yct2-kan": "👀",
  "yct2-lai": "🏃",
  "yct2-ai-1": "❤️",
  "yct2-qu": "🚶",
  "yct2-you": "🎁",
  "yct2-wan": "🎮",
  "yct2-ge": "📦",
  "yct2-hen": "💯",
  "yct2-shi": "✅",
  "yct2-shenme": "❓",
  "yct2-zuo-2": "🏛️",
  "yct2-ma": "❓",
  "yct2-na": "🤔",
  "yct2-shei": "🕵️",
  "yct2-zenme": "❓",
  "yct2-nar-1": "🗺️",
  "yct2-zhe": "👉",
  "yct2-na-1": "👉",
  "yct2-ni": "👧",
  "yct2-ta": "👦",
  "yct2-ta-1": "👧",
  "yct2-wo": "👦",
  "yct2-women": "👨‍👩‍👧‍👦",
  "yct2-laoshi": "👩‍🏫",
  "yct2-hanyu": "🇨🇳",
  "yct2-shangban": "💼",
  "yct2-xuexi": "📖",
  "yct2-xuexiao": "🏫",
  "yct2-nian": "📅",
  "yct2-fenzhong": "⏱️",
  "yct2-beijing": "🏯",
  "yct2-shangdian": "🏪",
  "yct2-zhongguoren": "🇨🇳",
  "yct2-gezi": "🧍",
  "yct2-gou": "🐶",
  "yct2-mao": "🐱",
  "yct2-niao": "🐦",
  "yct2-shui": "💧",
  "yct2-yu": "🐟",
  "yct2-yi": "1️⃣",
  "yct2-er": "2️⃣",
  "yct2-san": "3️⃣",
  "yct2-si": "4️⃣",
  "yct2-wu": "5️⃣",
  "yct2-liu": "6️⃣",
  "yct2-qi": "7️⃣",
  "yct2-ba": "8️⃣",
  "yct2-jiu": "9️⃣",
  "yct2-shi-1": "🔟",
  "yct2-ling": "0️⃣",
  "yct2-duo": "🍇",
  "yct2-dadianhua": "📞",
};

export function getWordEmoji2(word: YctWord): string {
  return WORD_EMOJIS_2[word.id] || "✨";
}
