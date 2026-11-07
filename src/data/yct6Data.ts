import type { VocabularyWord } from "../types";
import { awardDailyXp, awardXp } from "../lib/hsk";
import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct6CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type Yct6CategoryId =
  | "do-an-va-do-uong"
  | "gia-dinh"
  | "nha-va-cuoc-song"
  | "hoc"
  | "cong-viec"
  | "ngay-le-va-giai-tri"
  | "giao-tiep-va-tuong-tac"
  | "suc-khoe-va-co-the"
  | "tinh-cam-va-cam-xuc"
  | "thoi-gian"
  | "thien-nhien"
  | "noi"
  | "giao-thong-va-giao-thong"
  | "cac-tu-chuc-nang-va-cau-hoi"
  | "pho-tu"
  | "dem-tu"
  | "tinh-tu"
  | "thu-tu-trinh-bay"
  | "dong-tu"
  | "khac";

export interface Yct6Category {
  id: Yct6CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface Yct6Lesson {
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}

export const YCT6_LESSONS: Yct6Lesson[] = [
  {
    "lessonNumber": 1,
    "lessonSlug": "bai-1-i-was-born-in-the-year-of-the-monkey",
    "titleVi": "Tôi tuổi Khỉ",
    "titleZh": "我属猴。",
    "wordCount": 13,
    "estimatedMinutes": 14
  },
  {
    "lessonNumber": 2,
    "lessonSlug": "bai-2-he-s-really-good-at-math",
    "titleVi": "Cậu ấy học toán cực giỏi",
    "titleZh": "他数学好极了。",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 3,
    "lessonSlug": "bai-3-the-little-birds-are-singing",
    "titleVi": "Chim nhỏ đang hót",
    "titleZh": "小鸟正在唱歌。",
    "wordCount": 15,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 4,
    "lessonSlug": "bai-4-can-you-clean-the-room-please",
    "titleVi": "Bạn dọn phòng một chút được không?",
    "titleZh": "你打扫一下房间好吗？",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 5,
    "lessonSlug": "bai-5-you-are-so-careless",
    "titleVi": "Bạn cẩu thả quá!",
    "titleZh": "你太马虎了！",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 6,
    "lessonSlug": "bai-6-what-role-did-you-play",
    "titleVi": "Bạn biểu diễn vai gì?",
    "titleZh": "你表演什么？",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 7,
    "lessonSlug": "bai-7-they-are-not-twins",
    "titleVi": "Họ không phải sinh đôi",
    "titleZh": "他们不是双胞胎。",
    "wordCount": 13,
    "estimatedMinutes": 14
  },
  {
    "lessonNumber": 8,
    "lessonSlug": "bai-8-the-little-fish-was-eaten-by-the-kitten",
    "titleVi": "Cá nhỏ bị mèo con ăn mất rồi",
    "titleZh": "小鱼被小猫吃了。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 9,
    "lessonSlug": "bai-9-he-moved-house-near-the-zoo",
    "titleVi": "Nhà cậu ấy chuyển đến gần sở thú rồi",
    "titleZh": "他家搬到动物园附近了。",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 10,
    "lessonSlug": "bai-10-how-far-is-the-moon-from-us",
    "titleVi": "Mặt trăng cách chúng ta bao xa?",
    "titleZh": "月亮离我们多远？",
    "wordCount": 11,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 11,
    "lessonSlug": "bai-11-let-me-swap-my-hat-for-your-plate",
    "titleVi": "Tôi đổi mũ lấy đĩa của bạn",
    "titleZh": "我用帽子换你的盘子。",
    "wordCount": 13,
    "estimatedMinutes": 14
  },
  {
    "lessonNumber": 12,
    "lessonSlug": "bai-12-be-more-careful-in-the-future",
    "titleVi": "Sau này phải chú ý",
    "titleZh": "以后要注意。",
    "wordCount": 13,
    "estimatedMinutes": 14
  },
  {
    "lessonNumber": 13,
    "lessonSlug": "bai-13-i-like-spicy-food",
    "titleVi": "Tôi thích ăn cay",
    "titleZh": "我爱吃辣的。",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 14,
    "lessonSlug": "bai-14-some-pandas-slept-all-the-time",
    "titleVi": "Có con gấu trúc cứ ngủ suốt",
    "titleZh": "有的熊猫一直睡觉。",
    "wordCount": 13,
    "estimatedMinutes": 14
  }
];

export const YCT6_CATEGORIES: Yct6Category[] = [
  {
    "id": "do-an-va-do-uong",
    "nameVi": "Đồ ăn & Thức uống",
    "nameZh": "美食饮品",
    "icon": "🍜",
    "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
    "description": "Món ăn ngon, đồ uống, hương vị chua cay mặn ngọt"
  },
  {
    "id": "gia-dinh",
    "nameVi": "Gia đình & Con người",
    "nameZh": "家庭人物",
    "icon": "👨‍👩‍👧",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Gia đình, bạn bè, anh em sinh đôi, tuổi tác"
  },
  {
    "id": "nha-va-cuoc-song",
    "nameVi": "Nhà cửa & Đời sống",
    "nameZh": "居家生活",
    "icon": "🏡",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Dọn dẹp phòng ốc, đồ gia dụng, đĩa, bát, bể cá"
  },
  {
    "id": "hoc",
    "nameVi": "Học tập & Trường lớp",
    "nameZh": "学习教育",
    "icon": "📚",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "description": "Môn toán, trường học, bài học, kiến thức, rèn luyện"
  },
  {
    "id": "cong-viec",
    "nameVi": "Công việc & Nghề nghiệp",
    "nameZh": "工作职场",
    "icon": "💼",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "description": "Nghề nghiệp, công việc, trách nhiệm xã hội"
  },
  {
    "id": "ngay-le-va-giai-tri",
    "nameVi": "Vui chơi & Giải trí",
    "nameZh": "娱乐活动",
    "icon": "🎉",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Ca hát, biểu diễn kịch, ca nhạc, thể thao, trò chơi"
  },
  {
    "id": "giao-tiep-va-tuong-tac",
    "nameVi": "Giao tiếp & Xã giao",
    "nameZh": "人际交往",
    "icon": "🤝",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Đối thoại, thảo luận, lịch sự, trao đổi, tương tác"
  },
  {
    "id": "suc-khoe-va-co-the",
    "nameVi": "Sức khỏe & Y tế",
    "nameZh": "身体健康",
    "icon": "💪",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "description": "Sức khỏe, cơ thể, giữ gìn vệ sinh, thể lực"
  },
  {
    "id": "tinh-cam-va-cam-xuc",
    "nameVi": "Tình cảm & Cảm xúc",
    "nameZh": "情感心理",
    "icon": "😊",
    "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
    "description": "Cảm xúc, suy nghĩ, nhớ ra, chú ý, yêu thích"
  },
  {
    "id": "thoi-gian",
    "nameVi": "Thời gian & Khoảnh khắc",
    "nameZh": "时间日期",
    "icon": "⏰",
    "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
    "description": "Khoảnh khắc, thời gian, trước đây, sau này, tương lai"
  },
  {
    "id": "thien-nhien",
    "nameVi": "Thiên nhiên & Động vật",
    "nameZh": "自然动物",
    "icon": "🌿",
    "badgeColor": "bg-green-100 text-green-800 border-green-300",
    "description": "Mặt trăng, chim non, cá nhỏ, mèo, gấu trúc, khỉ"
  },
  {
    "id": "noi",
    "nameVi": "Địa điểm & Nơi chốn",
    "nameZh": "场所地点",
    "icon": "📍",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Sở thú, khoảng cách xa gần, xung quanh, phụ cận"
  },
  {
    "id": "giao-thong-va-giao-thong",
    "nameVi": "Giao thông & Đi lại",
    "nameZh": "交通出行",
    "icon": "🚗",
    "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
    "description": "Phương tiện di chuyển, chuyển nhà, xe cộ"
  },
  {
    "id": "cac-tu-chuc-nang-va-cau-hoi",
    "nameVi": "Hư từ & Cấu trúc câu",
    "nameZh": "虚词句式",
    "icon": "❓",
    "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "description": "Câu chữ bị, câu chữ bả, trợ từ, đại từ nghi vấn"
  },
  {
    "id": "pho-tu",
    "nameVi": "Phó từ & Trạng từ",
    "nameZh": "副词修饰",
    "icon": "⚡",
    "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    "description": "Cực kỳ, đang, luôn luôn, đặc biệt, rất, liên tục"
  },
  {
    "id": "dem-tu",
    "nameVi": "Lượng từ & Số lượng",
    "nameZh": "计量量词",
    "icon": "🔢",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Số lượng, con, cái, chiếc, bộ, đĩa, bát"
  },
  {
    "id": "tinh-tu",
    "nameVi": "Tính từ miêu tả",
    "nameZh": "性质特征",
    "icon": "🎨",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Dũng cảm, thông minh, hoạt bát, cẩu thả, cay, ngon"
  },
  {
    "id": "thu-tu-trinh-bay",
    "nameVi": "Liên từ & Thứ tự",
    "nameZh": "连词逻辑",
    "icon": "🔗",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Mối quan hệ nhân quả, điều kiện, chuyển ý"
  },
  {
    "id": "dong-tu",
    "nameVi": "Động từ hành động",
    "nameZh": "动作行为",
    "icon": "🏃",
    "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
    "description": "Đổi lấy, cất giấu, dọn dẹp, biểu diễn, chuyển nhà, ngủ"
  },
  {
    "id": "khac",
    "nameVi": "Từ vựng tổng hợp khác",
    "nameZh": "综合其他",
    "icon": "✨",
    "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
    "description": "Trang phục, đồ dùng, thông tin và các từ mở rộng"
  }
];

export const YCT6_WORDS: YctWord[] = [
  {
    "id": "yct6-ynggn",
    "hanzi": "勇敢",
    "pinyin": "yǒng gǎn",
    "meaning": "dũng cảm",
    "category": "tinh-tu",
    "lessonNumber": 1,
    "example": "他是一个勇敢的人。",
    "examplePinyin": "Tā shì yīgè yǒnggǎn de rén.",
    "exampleVi": "Anh ấy là một người dũng cảm."
  },
  {
    "id": "yct6-cngming",
    "hanzi": "聪明",
    "pinyin": "cōng ming",
    "meaning": "thông minh - có trí tuệ tốt, hiểu nhanh, học giỏi.",
    "category": "tinh-tu",
    "lessonNumber": 1,
    "example": "他很聪明",
    "examplePinyin": "Tā hěn cōngmíng",
    "exampleVi": "Anh ấy rất thông minh"
  },
  {
    "id": "yct6-lngwi",
    "hanzi": "另外",
    "pinyin": "lìng wài",
    "meaning": "ngoài ra; thêm nữa; riêng khác",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 1,
    "example": "另外，我还有一个问题。",
    "examplePinyin": "Lìngwài, wǒ hái yǒu yí gè wèntí.",
    "exampleVi": "Ngoài ra, tôi còn có một câu hỏi nữa."
  },
  {
    "id": "yct6-sh",
    "hanzi": "属",
    "pinyin": "shǔ",
    "meaning": "thuộc về; cầm tinh, tuổi (属狗: tuổi Tuất)",
    "category": "dong-tu",
    "lessonNumber": 1,
    "example": "这本书属于我。",
    "examplePinyin": "zhè běn shū shǔ yú wǒ.",
    "exampleVi": "Quyển sách này thuộc về tôi."
  },
  {
    "id": "yct6-shudo",
    "hanzi": "收到",
    "pinyin": "shōu dào",
    "meaning": "nhận được",
    "category": "khac",
    "lessonNumber": 1,
    "example": "我收到了你的礼物。",
    "examplePinyin": "wǒ shōu dào le nǐ de lǐ wù.",
    "exampleVi": "Tôi đã nhận được quà của bạn."
  },
  {
    "id": "yct6-zhh",
    "hanzi": "祝贺",
    "pinyin": "zhù hè",
    "meaning": "chúc mừng, chúc tụng",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 1,
    "example": "我祝贺你成功！",
    "examplePinyin": "Wǒ zhùhè nǐ chénggōng!",
    "exampleVi": "Tôi chúc mừng bạn thành công!"
  },
  {
    "id": "yct6-chzhng",
    "hanzi": "初中",
    "pinyin": "chū zhōng",
    "meaning": "trường trung học cơ sở, cấp 2",
    "category": "hoc",
    "lessonNumber": 1,
    "example": "我在初中学习三年。",
    "examplePinyin": "wǒ zài chū zhōng xué xí sān nián.",
    "exampleVi": "Tôi học ở cấp 2 ba năm."
  },
  {
    "id": "yct6-gu",
    "hanzi": "挂",
    "pinyin": "guà",
    "meaning": "treo, mắc",
    "category": "dong-tu",
    "lessonNumber": 1,
    "example": "请把衣服挂在衣架上。",
    "examplePinyin": "qǐng bǎ yī fu guà zài yī jià shàng.",
    "exampleVi": "Hãy treo áo lên giá treo quần áo."
  },
  {
    "id": "yct6-jir",
    "hanzi": "节日",
    "pinyin": "jié rì",
    "meaning": "lễ hội",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 1,
    "example": "春节是重要节日",
    "examplePinyin": "chūn jié shì zhòng yào jié rì",
    "exampleVi": "Tết Nguyên Đán là lễ hội quan trọng"
  },
  {
    "id": "yct6-huzi",
    "hanzi": "猴子",
    "pinyin": "hóu zi",
    "meaning": "khỉ",
    "category": "thien-nhien",
    "lessonNumber": 1,
    "example": "猴子在树上跳来跳去。",
    "examplePinyin": "Hóuzi zài shùshàng tiàoláitiàoqù.",
    "exampleVi": "Khỉ đang nhảy qua nhảy lại trên cây."
  },
  {
    "id": "yct6-by",
    "hanzi": "毕业",
    "pinyin": "bì yè",
    "meaning": "tốt nghiệp, ra trường",
    "category": "hoc",
    "lessonNumber": 1,
    "example": "我今年大学毕业。",
    "examplePinyin": "Wǒ jīnnián dàxué bìyè.",
    "exampleVi": "Tôi tốt nghiệp đại học năm nay."
  },
  {
    "id": "yct6-xnfng",
    "hanzi": "信封",
    "pinyin": "xìn fēng",
    "meaning": "phong bì",
    "category": "khac",
    "lessonNumber": 1,
    "example": "请把信装进信封里。",
    "examplePinyin": "qǐng bǎ xìn zhuāng jìn xìn fēng lǐ.",
    "exampleVi": "Hãy bỏ thư vào phong bì."
  },
  {
    "id": "yct6-dnglng",
    "hanzi": "灯笼",
    "pinyin": "dēng lóng",
    "meaning": "đèn lồng",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 1,
    "example": "节日里，门前挂起了红红的灯笼。",
    "examplePinyin": "jié rì lǐ, mén qián guà qǐ le hóng hóng de dēng lóng.",
    "exampleVi": "Vào ngày lễ, những chiếc đèn lồng đỏ rực được treo trước cửa."
  },
  {
    "id": "yct6-rngy",
    "hanzi": "容易",
    "pinyin": "róng yì",
    "meaning": "dễ, dễ dàng; dễ bị",
    "category": "tinh-tu",
    "lessonNumber": 2,
    "example": "这个问题很容易回答。",
    "examplePinyin": "zhè ge wèn tí hěn róng yì huí dá.",
    "exampleVi": "Câu hỏi này rất dễ trả lời."
  },
  {
    "id": "yct6-gngci",
    "hanzi": "刚才",
    "pinyin": "gāng cái",
    "meaning": "vừa rồi",
    "category": "thoi-gian",
    "lessonNumber": 2,
    "example": "他刚才来过电话。",
    "examplePinyin": "tā gāng cái lái guò diàn huà.",
    "exampleVi": "Anh ấy vừa gọi điện đến."
  },
  {
    "id": "yct6-jle",
    "hanzi": "极了",
    "pinyin": "jí le",
    "meaning": "cực kỳ; vô cùng; lắm",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 2,
    "example": "这道菜好吃极了！",
    "examplePinyin": "Zhè dào cài hǎochī jí le!",
    "exampleVi": "Món này ngon cực kỳ!"
  },
  {
    "id": "yct6-jing",
    "hanzi": "讲",
    "pinyin": "jiǎng",
    "meaning": "nói, kể, giảng",
    "category": "dong-tu",
    "lessonNumber": 2,
    "example": "老师在讲课",
    "examplePinyin": "lǎo shī zài jiǎng kè",
    "exampleVi": "Thầy giáo đang giảng bài"
  },
  {
    "id": "yct6-mngbai",
    "hanzi": "明白",
    "pinyin": "míng bai",
    "meaning": "hiểu, rõ ràng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 2,
    "example": "我明白了",
    "examplePinyin": "Wǒ míng bai le",
    "exampleVi": "Tôi hiểu rồi"
  },
  {
    "id": "yct6-q",
    "hanzi": "骑",
    "pinyin": "qí",
    "meaning": "cưỡi",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 2,
    "example": "我会骑自行车",
    "examplePinyin": "wǒ huì qí zì xíng chē",
    "exampleVi": "Tôi biết cưỡi xe đạp"
  },
  {
    "id": "yct6-xwng",
    "hanzi": "希望",
    "pinyin": "xī wàng",
    "meaning": "hy vọng, mong muốn",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 2,
    "example": "我希望明年能去中国。",
    "examplePinyin": "Wǒ xīwàng míngnián néng qù Zhōngguó.",
    "exampleVi": "Tôi hy vọng năm sau có thể đi Trung Quốc."
  },
  {
    "id": "yct6-cnji",
    "hanzi": "参加",
    "pinyin": "cān jiā",
    "meaning": "tham gia",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 2,
    "example": "我想参加这个活动",
    "examplePinyin": "wǒ xiǎng cān jiā zhè ge huó dòng",
    "exampleVi": "Tôi muốn tham gia hoạt động này"
  },
  {
    "id": "yct6-wn",
    "hanzi": "万",
    "pinyin": "wàn",
    "meaning": "vạn, mười nghìn",
    "category": "dem-tu",
    "lessonNumber": 2,
    "example": "一万人",
    "examplePinyin": "yī wàn rén",
    "exampleVi": "mười vạn người"
  },
  {
    "id": "yct6-ji",
    "hanzi": "加",
    "pinyin": "jiā",
    "meaning": "cộng; thêm vào",
    "category": "dong-tu",
    "lessonNumber": 2,
    "example": "二加三等于五。",
    "examplePinyin": "èr jiā sān děng yú wǔ.",
    "exampleVi": "Hai cộng ba bằng năm."
  },
  {
    "id": "yct6-jin",
    "hanzi": "减",
    "pinyin": "jiǎn",
    "meaning": "giảm",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 2,
    "example": "十减四等于六。",
    "examplePinyin": "shí jiǎn sì děng yú liù.",
    "exampleVi": "Mười trừ bốn bằng sáu."
  },
  {
    "id": "yct6-shxu",
    "hanzi": "数学",
    "pinyin": "shù xué",
    "meaning": "toán học là ngành khoa học nghiên cứu về số, cấu trúc, không gian và biến đổi thông qua lý luận và logic hình thức.",
    "category": "hoc",
    "lessonNumber": 2,
    "example": "我数学不太好",
    "examplePinyin": "Wǒ shùxué bù tài hǎo",
    "exampleVi": "Toán của tôi không quá tốt"
  },
  {
    "id": "yct6-zxngch",
    "hanzi": "自行车",
    "pinyin": "zì xíng chē",
    "meaning": "xe đạp",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 2,
    "example": "我骑自行车上班",
    "examplePinyin": "wǒ qí zì xíng chē shàng bān",
    "exampleVi": "Tôi đạp xe đi làm"
  },
  {
    "id": "yct6-bsi",
    "hanzi": "比赛",
    "pinyin": "bǐ sài",
    "meaning": "thi đấu, cuộc thi, trận đấu",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 2,
    "example": "明天的比赛很重要。",
    "examplePinyin": "Míngtiān de bǐsài hěn zhòngyào.",
    "exampleVi": "Trận đấu ngày mai rất quan trọng."
  },
  {
    "id": "yct6-xng",
    "hanzi": "醒",
    "pinyin": "xǐng",
    "meaning": "tỉnh giấc",
    "category": "dong-tu",
    "lessonNumber": 3,
    "example": "我早上六点就醒了。",
    "examplePinyin": "wǒ zǎo shang liù diǎn jiù xǐng le.",
    "exampleVi": "Sáu giờ sáng tôi đã tỉnh dậy rồi."
  },
  {
    "id": "yct6-k",
    "hanzi": "刻",
    "pinyin": "kè",
    "meaning": "một khắc (15 phút), khắc",
    "category": "thoi-gian",
    "lessonNumber": 3,
    "example": "三点一刻",
    "examplePinyin": "sān diǎn yī kè",
    "exampleVi": "Ba giờ mười lăm phút"
  },
  {
    "id": "yct6-xing",
    "hanzi": "响",
    "pinyin": "xiǎng",
    "meaning": "phát ra âm thanh",
    "category": "dem-tu",
    "lessonNumber": 3,
    "example": "电话响了。",
    "examplePinyin": "diàn huà xiǎng le.",
    "exampleVi": "Điện thoại reo."
  },
  {
    "id": "yct6-kihu",
    "hanzi": "开会",
    "pinyin": "kāi huì",
    "meaning": "họp, họp hành",
    "category": "cong-viec",
    "lessonNumber": 3,
    "example": "我们在开会",
    "examplePinyin": "Wǒmen zài kāihuì",
    "exampleVi": "Chúng tôi đang họp"
  },
  {
    "id": "yct6-zhoj",
    "hanzi": "着急",
    "pinyin": "zháo jí",
    "meaning": "lo lắng, sốt ruột, nôn nóng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 3,
    "example": "别着急，慢慢来。",
    "examplePinyin": "Bié zháojí, mànman lái.",
    "exampleVi": "Đừng nôn nóng, từ từ."
  },
  {
    "id": "yct6-lidej",
    "hanzi": "来得及",
    "pinyin": "lái de jí",
    "meaning": "kịp, còn kịp, kịp thời",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 3,
    "example": "还来得及",
    "examplePinyin": "hái láidejí",
    "exampleVi": "vẫn còn kịp"
  },
  {
    "id": "yct6-shngbn",
    "hanzi": "上班",
    "pinyin": "shàng bān",
    "meaning": "đi làm, bắt đầu ca làm việc",
    "category": "hoc",
    "lessonNumber": 3,
    "example": "我每天八点上班",
    "examplePinyin": "Wǒ měitiān bā diǎn shàngbān",
    "exampleVi": "Tôi mỗi ngày tám giờ đi làm"
  },
  {
    "id": "yct6-ywi",
    "hanzi": "以为",
    "pinyin": "yǐ wéi",
    "meaning": "nghĩ rằng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 3,
    "example": "我以为你知道",
    "examplePinyin": "wǒ yǐ wéi nǐ zhī dào",
    "exampleVi": "Tôi nghĩ rằng bạn biết rồi"
  },
  {
    "id": "yct6-zhngzi",
    "hanzi": "正在",
    "pinyin": "zhèng zài",
    "meaning": "đang (thì tiếp diễn lúc nói)",
    "category": "pho-tu",
    "lessonNumber": 3,
    "example": "我正在吃饭",
    "examplePinyin": "Wǒ zhèngzài chīfàn",
    "exampleVi": "Tôi đang ăn cơm"
  },
  {
    "id": "yct6-njng",
    "hanzi": "安静",
    "pinyin": "ān jìng",
    "meaning": "yên tĩnh",
    "category": "tinh-tu",
    "lessonNumber": 3,
    "example": "图书馆里很安静。",
    "examplePinyin": "tú shū guǎn lǐ hěn ān jìng.",
    "exampleVi": "Trong thư viện rất yên tĩnh."
  },
  {
    "id": "yct6-qli",
    "hanzi": "起来",
    "pinyin": "qǐ lái",
    "meaning": "đứng lên, dậy (phương hướng); bắt đầu (trợ từ động từ)",
    "category": "dong-tu",
    "lessonNumber": 3,
    "example": "请站起来",
    "examplePinyin": "Qǐng zhàn qǐ lái",
    "exampleVi": "Làm ơn đứng lên"
  },
  {
    "id": "yct6-nozhng",
    "hanzi": "闹钟",
    "pinyin": "nào zhōng",
    "meaning": "đồng hồ báo thức",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "我每天早上听见闹钟就会起床。",
    "examplePinyin": "wǒ měi tiān zǎo shang tīng jiàn nào zhōng jiù huì qǐ chuáng.",
    "exampleVi": "Mỗi sáng tôi nghe thấy tiếng chuông báo thức là sẽ thức dậy."
  },
  {
    "id": "yct6-xioyun",
    "hanzi": "校园",
    "pinyin": "xiào yuán",
    "meaning": "khuôn viên trường",
    "category": "hoc",
    "lessonNumber": 3,
    "example": "校园很美",
    "examplePinyin": "xiào yuán hěn měi",
    "exampleVi": "Khuôn viên trường rất đẹp"
  },
  {
    "id": "yct6-sh-shu",
    "hanzi": "树",
    "pinyin": "shù",
    "meaning": "cây (cây cối)",
    "category": "thien-nhien",
    "lessonNumber": 3,
    "example": "这棵树很高",
    "examplePinyin": "Zhè kē shù hěn gāo",
    "exampleVi": "Cây này rất cao"
  },
  {
    "id": "yct6-shngyn",
    "hanzi": "声音",
    "pinyin": "shēng yīn",
    "meaning": "âm thanh",
    "category": "khac",
    "lessonNumber": 3,
    "example": "她的声音很好听。",
    "examplePinyin": "tā de shēng yīn hěn hǎo tīng.",
    "exampleVi": "Giọng nói của cô ấy rất dễ nghe."
  },
  {
    "id": "yct6-minfn",
    "hanzi": "面粉",
    "pinyin": "miàn fěn",
    "meaning": "bột mì",
    "category": "do-an-va-do-uong",
    "lessonNumber": 4,
    "example": "用面粉做面包",
    "examplePinyin": "Yòng miànfěn zuò miànbāo",
    "exampleVi": "Dùng bột mì làm bánh mì"
  },
  {
    "id": "yct6-ji-jie",
    "hanzi": "接",
    "pinyin": "jiē",
    "meaning": "đón, tiếp đón; nối tiếp, tiếp theo; tiếp nhận; liền kề, tiếp xúc. Là động từ thường dùng trong văn nói và văn viết để chỉ việc đón tiếp hoặc nối tiếp nhau.",
    "category": "dong-tu",
    "lessonNumber": 4,
    "example": "请接电话",
    "examplePinyin": "Qǐng jiē diànhuà",
    "exampleVi": "Làm ơn nghe điện thoại"
  },
  {
    "id": "yct6-gu-gou",
    "hanzi": "够",
    "pinyin": "gòu",
    "meaning": "đủ",
    "category": "dem-tu",
    "lessonNumber": 4,
    "example": "钱不够",
    "examplePinyin": "qián bù gòu",
    "exampleVi": "Tiền không đủ"
  },
  {
    "id": "yct6-dso",
    "hanzi": "打扫",
    "pinyin": "dǎ sǎo",
    "meaning": "quét dọn",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 4,
    "example": "周末我在家打扫房间。",
    "examplePinyin": "zhōu mò wǒ zài jiā dǎ sǎo fáng jiān.",
    "exampleVi": "Cuối tuần tôi ở nhà dọn dẹp phòng."
  },
  {
    "id": "yct6-yxi",
    "hanzi": "一下",
    "pinyin": "yī xià",
    "meaning": "một lát; một chút",
    "category": "pho-tu",
    "lessonNumber": 4,
    "example": "请等一下。",
    "examplePinyin": "Qǐng děng yīxià.",
    "exampleVi": "Xin hãy đợi một lát."
  },
  {
    "id": "yct6-gnjng",
    "hanzi": "干净",
    "pinyin": "gān jìng",
    "meaning": "sạch sẽ",
    "category": "tinh-tu",
    "lessonNumber": 4,
    "example": "这个房间很干净。",
    "examplePinyin": "Zhège fángjiān hěn gānjìng.",
    "exampleVi": "Căn phòng này rất sạch sẽ."
  },
  {
    "id": "yct6-xijin",
    "hanzi": "修剪",
    "pinyin": "xiū jiǎn",
    "meaning": "cắt tỉa, sửa sang",
    "category": "noi",
    "lessonNumber": 4,
    "example": "园丁正在修剪树枝。",
    "examplePinyin": "Yuándīng zhèngzài xiūjiǎn shùzhī.",
    "exampleVi": "Người làm vườn đang cắt tỉa cành cây."
  },
  {
    "id": "yct6-zhog",
    "hanzi": "照顾",
    "pinyin": "zhào gù",
    "meaning": "chăm sóc",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 4,
    "example": "请照顾好自己",
    "examplePinyin": "qǐng zhào gù hǎo zì jǐ",
    "exampleVi": "Hãy chăm sóc tốt bản thân mình"
  },
  {
    "id": "yct6-shuzho",
    "hanzi": "睡着",
    "pinyin": "shuì zháo",
    "meaning": "ngủ rồi, đã ngủ",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 4,
    "example": "宝宝已经睡着了。",
    "examplePinyin": "Bǎobao yǐjīng shuìzháo le.",
    "exampleVi": "Bé đã ngủ rồi."
  },
  {
    "id": "yct6-hxing",
    "hanzi": "互相",
    "pinyin": "hù xiāng",
    "meaning": "lẫn nhau, qua lại",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 4,
    "example": "我们应该互相帮助，互相学习。",
    "examplePinyin": "Wǒmen yīnggāi hùxiāng bāngzhù, hùxiāng xuéxí.",
    "exampleVi": "Chúng ta nên giúp đỡ lẫn nhau, học hỏi lẫn nhau."
  },
  {
    "id": "yct6-shnghu",
    "hanzi": "生活",
    "pinyin": "shēng huó",
    "meaning": "cuộc sống",
    "category": "gia-dinh",
    "lessonNumber": 4,
    "example": "我们的生活越来越好",
    "examplePinyin": "wǒ men de shēng huó yuè lái yuè hǎo",
    "exampleVi": "Cuộc sống của chúng tôi ngày càng tốt đẹp hơn"
  },
  {
    "id": "yct6-jn",
    "hanzi": "斤",
    "pinyin": "jīn",
    "meaning": "cân (0.5kg)",
    "category": "dem-tu",
    "lessonNumber": 4,
    "example": "一斤苹果",
    "examplePinyin": "yī jīn píng guǒ",
    "exampleVi": "một cân táo"
  },
  {
    "id": "yct6-ptao",
    "hanzi": "葡萄",
    "pinyin": "pú tao",
    "meaning": "nho (từ mượn tiếng Ba Tư cổ)",
    "category": "do-an-va-do-uong",
    "lessonNumber": 4,
    "example": "我喜欢吃葡萄。",
    "examplePinyin": "Wǒ xǐhuān chī pútao.",
    "exampleVi": "Tôi thích ăn nho."
  },
  {
    "id": "yct6-cod",
    "hanzi": "草地",
    "pinyin": "cǎo dì",
    "meaning": "bãi cỏ",
    "category": "thien-nhien",
    "lessonNumber": 4,
    "example": "我们在草地上休息",
    "examplePinyin": "wǒ men zài cǎo dì shàng xiū xi",
    "exampleVi": "Chúng ta nghỉ ngơi trên bãi cỏ"
  },
  {
    "id": "yct6-bioyng",
    "hanzi": "表扬",
    "pinyin": "biǎo yáng",
    "meaning": "khen ngợi, biểu dương",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "老师表扬了他的进步。",
    "examplePinyin": "Lǎoshī biǎoyáng le tā de jìnbù.",
    "exampleVi": "Thầy giáo đã khen ngợi sự tiến bộ của anh ấy."
  },
  {
    "id": "yct6-jzi",
    "hanzi": "句子",
    "pinyin": "jù zi",
    "meaning": "câu",
    "category": "khac",
    "lessonNumber": 5,
    "example": "请造一个句子",
    "examplePinyin": "qǐng zào yī gè jù zi",
    "exampleVi": "Vui lòng đặt một câu"
  },
  {
    "id": "yct6-yuysi",
    "hanzi": "有意思",
    "pinyin": "yǒu yì si",
    "meaning": "thú vị, hay",
    "category": "tinh-tu",
    "lessonNumber": 5,
    "example": "这本书很有意思",
    "examplePinyin": "zhè běn shū hěn yǒu yì si",
    "exampleVi": "Quyển sách này rất thú vị"
  },
  {
    "id": "yct6-cng",
    "hanzi": "从",
    "pinyin": "cóng",
    "meaning": "từ, theo",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 5,
    "example": "我从中国来",
    "examplePinyin": "Wǒ cóng Zhōngguó lái",
    "exampleVi": "Tôi đến từ Trung Quốc"
  },
  {
    "id": "yct6-mhu",
    "hanzi": "马虎",
    "pinyin": "mǎ hu",
    "meaning": "qua loa, cẩu thả, không cẩn thận",
    "category": "tinh-tu",
    "lessonNumber": 5,
    "example": "他做事很马虎。",
    "examplePinyin": "Tā zuòshì hěn mǎhu.",
    "exampleVi": "Anh ấy làm việc rất hư cấu."
  },
  {
    "id": "yct6-ci",
    "hanzi": "才",
    "pinyin": "cái",
    "meaning": "chỉ; mới",
    "category": "pho-tu",
    "lessonNumber": 5,
    "example": "我才来",
    "examplePinyin": "wǒ cái lái",
    "exampleVi": "Tôi mới đến"
  },
  {
    "id": "yct6-xingqli",
    "hanzi": "想起来",
    "pinyin": "xiǎng qǐ lái",
    "meaning": "nhớ ra",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 5,
    "example": "我想起来了，他叫王明。",
    "examplePinyin": "wǒ xiǎng qǐ lái le, tā jiào wáng míng.",
    "exampleVi": "Tôi nhớ ra rồi, anh ấy tên là Vương Minh."
  },
  {
    "id": "yct6-wngj",
    "hanzi": "忘记",
    "pinyin": "wàng jì",
    "meaning": "quên",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 5,
    "example": "我忘记带钥匙了",
    "examplePinyin": "Wǒ wàng jì dài yào shi le",
    "exampleVi": "Tôi quên mang chìa khóa rồi"
  },
  {
    "id": "yct6-de",
    "hanzi": "地",
    "pinyin": "de",
    "meaning": "trợ từ kết cấu đứng sau trạng ngữ (慢慢地: một cách chậm rãi)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 5,
    "example": "他慢慢地走。",
    "examplePinyin": "Tā mànmàn de zǒu.",
    "exampleVi": "Anh ấy đi một cách chậm rãi."
  },
  {
    "id": "yct6-cu",
    "hanzi": "错",
    "pinyin": "cuò",
    "meaning": "sai, lầm; sai lầm; lẫn lộn",
    "category": "tinh-tu",
    "lessonNumber": 5,
    "example": "我写错了",
    "examplePinyin": "Wǒ xiěcuòle",
    "exampleVi": "Tôi viết sai rồi"
  },
  {
    "id": "yct6-k-ke",
    "hanzi": "渴",
    "pinyin": "kě",
    "meaning": "khát (nước)",
    "category": "do-an-va-do-uong",
    "lessonNumber": 5,
    "example": "我很渴",
    "examplePinyin": "Wǒ hěn kě",
    "exampleVi": "Tôi rất khát"
  },
  {
    "id": "yct6-tng",
    "hanzi": "停",
    "pinyin": "tíng",
    "meaning": "dừng; đậu xe",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 5,
    "example": "车停了",
    "examplePinyin": "chē tíng le",
    "exampleVi": "Xe đã dừng lại"
  },
  {
    "id": "yct6-yoshi",
    "hanzi": "钥匙",
    "pinyin": "yào shi",
    "meaning": "chìa khóa",
    "category": "khac",
    "lessonNumber": 5,
    "example": "我的钥匙丢了。",
    "examplePinyin": "Wǒ de yàoshi diū le.",
    "exampleVi": "Chìa khóa của tôi bị mất."
  },
  {
    "id": "yct6-shngq",
    "hanzi": "生气",
    "pinyin": "shēng qì",
    "meaning": "tức giận, nổi giận (phổ biến); sinh khí (ít dùng)",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 5,
    "example": "我生气了",
    "examplePinyin": "Wǒ shēngqì le",
    "exampleVi": "Tôi đã tức giận"
  },
  {
    "id": "yct6-jngch",
    "hanzi": "警察",
    "pinyin": "jǐng chá",
    "meaning": "cảnh sát",
    "category": "cong-viec",
    "lessonNumber": 6,
    "example": "警察正在抓小偷。",
    "examplePinyin": "Jǐngchá zhèngzài zhuā xiǎotōu.",
    "exampleVi": "Cảnh sát đang bắt trộm."
  },
  {
    "id": "yct6-shupioyun",
    "hanzi": "售票员",
    "pinyin": "shòu piào yuán",
    "meaning": "nhân viên bán vé, người soát vé",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 6,
    "example": "售票员在哪里？",
    "examplePinyin": "Shòupiàoyuán zài nǎlǐ?",
    "exampleVi": "Nhân viên bán vé ở đâu?"
  },
  {
    "id": "yct6-jzh",
    "hanzi": "记者",
    "pinyin": "jì zhě",
    "meaning": "phóng viên, nhà báo",
    "category": "cong-viec",
    "lessonNumber": 6,
    "example": "这位记者采访了很多名人。",
    "examplePinyin": "Zhè wèi jìzhě cǎifǎng le hěnduō míngrén.",
    "exampleVi": "Phóng viên này đã phỏng vấn rất nhiều người nổi tiếng."
  },
  {
    "id": "yct6-ynyun",
    "hanzi": "演员",
    "pinyin": "yǎn yuán",
    "meaning": "diễn viên",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 6,
    "example": "他想当电影演员。",
    "examplePinyin": "Tā xiǎng dāng diànyǐng yǎnyuán.",
    "exampleVi": "Anh ấy muốn làm diễn viên điện ảnh."
  },
  {
    "id": "yct6-bioyn",
    "hanzi": "表演",
    "pinyin": "biǎo yǎn",
    "meaning": "biểu diễn",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 6,
    "example": "孩子们在舞台上表演舞蹈。",
    "examplePinyin": "Háizimen zài wǔtái shàng biǎoyǎn wǔdǎo.",
    "exampleVi": "Các em bé đang biểu diễn múa trên sân khấu."
  },
  {
    "id": "yct6-jim",
    "hanzi": "节目",
    "pinyin": "jié mù",
    "meaning": "chương trình",
    "category": "khac",
    "lessonNumber": 6,
    "example": "这个节目很有意思",
    "examplePinyin": "zhè ge jié mù hěn yǒu yì si",
    "exampleVi": "Chương trình này rất thú vị"
  },
  {
    "id": "yct6-shuhunyng",
    "hanzi": "受欢迎",
    "pinyin": "shòu huān yíng",
    "meaning": "được yêu thích; được hoan nghênh",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 6,
    "example": "这个老师很受欢迎。",
    "examplePinyin": "zhè ge lǎo shī hěn shòu huān yíng.",
    "exampleVi": "Thầy giáo này rất được yêu mến."
  },
  {
    "id": "yct6-ci-cai",
    "hanzi": "猜",
    "pinyin": "cāi",
    "meaning": "đoán",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 6,
    "example": "你猜我今年多大？",
    "examplePinyin": "nǐ cāi wǒ jīn nián duō dà?",
    "exampleVi": "Bạn đoán xem năm nay tôi bao nhiêu tuổi?"
  },
  {
    "id": "yct6-dindng",
    "hanzi": "电灯",
    "pinyin": "diàn dēng",
    "meaning": "đèn điện, đèn bóng đèn",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 6,
    "example": "请打开电灯。",
    "examplePinyin": "Qǐng dǎkāi diàndēng.",
    "exampleVi": "Vui lòng bật đèn."
  },
  {
    "id": "yct6-dng",
    "hanzi": "当",
    "pinyin": "dāng",
    "meaning": "trở thành",
    "category": "cong-viec",
    "lessonNumber": 6,
    "example": "我想当医生",
    "examplePinyin": "wǒ xiǎng dāng yī shēng",
    "exampleVi": "Tôi muốn làm bác sĩ"
  },
  {
    "id": "yct6-zhngyo",
    "hanzi": "重要",
    "pinyin": "zhòng yào",
    "meaning": "quan trọng",
    "category": "tinh-tu",
    "lessonNumber": 6,
    "example": "这件事很重要",
    "examplePinyin": "Zhè jiàn shì hěn zhòngyào",
    "exampleVi": "Việc này rất quan trọng"
  },
  {
    "id": "yct6-xnwn",
    "hanzi": "新闻",
    "pinyin": "xīn wén",
    "meaning": "tin tức",
    "category": "khac",
    "lessonNumber": 6,
    "example": "我每天都看新闻",
    "examplePinyin": "wǒ měi tiān dōu kàn xīn wén",
    "exampleVi": "Tôi mỗi ngày đều xem tin tức"
  },
  {
    "id": "yct6-ynggi",
    "hanzi": "应该",
    "pinyin": "yīng gāi",
    "meaning": "nên",
    "category": "dong-tu",
    "lessonNumber": 6,
    "example": "你应该多喝水",
    "examplePinyin": "nǐ yīng gāi duō hē shuǐ",
    "exampleVi": "Bạn nên uống nhiều nước"
  },
  {
    "id": "yct6-knjin",
    "hanzi": "看见",
    "pinyin": "kàn jiàn",
    "meaning": "thấy, trông thấy",
    "category": "dong-tu",
    "lessonNumber": 6,
    "example": "我看见他了",
    "examplePinyin": "Wǒ kànjiàn tā le",
    "exampleVi": "Tôi thấy anh ấy rồi"
  },
  {
    "id": "yct6-cdin",
    "hanzi": "词典",
    "pinyin": "cí diǎn",
    "meaning": "từ điển",
    "category": "khac",
    "lessonNumber": 7,
    "example": "查词典",
    "examplePinyin": "chá cí diǎn",
    "exampleVi": "Tra từ điển"
  },
  {
    "id": "yct6-lin",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "meaning": "khuôn mặt",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 7,
    "example": "她的脸很漂亮",
    "examplePinyin": "tā de liǎn hěn piào liang",
    "exampleVi": "Khuôn mặt cô ấy rất đẹp"
  },
  {
    "id": "yct6-yun",
    "hanzi": "圆",
    "pinyin": "yuán",
    "meaning": "tròn, hình tròn",
    "category": "tinh-tu",
    "lessonNumber": 7,
    "example": "桌子是圆的",
    "examplePinyin": "Zhuōzi shì yuán de",
    "exampleVi": "Cái bàn hình tròn"
  },
  {
    "id": "yct6-xinsheng",
    "hanzi": "先生",
    "pinyin": "xiān sheng",
    "meaning": "ông, ngài",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 7,
    "example": "这位先生贵姓",
    "examplePinyin": "Zhè wèi xiānsheng guì xìng",
    "exampleVi": "Ông này tên gì"
  },
  {
    "id": "yct6-shungboti",
    "hanzi": "双胞胎",
    "pinyin": "shuāng bāo tāi",
    "meaning": "sinh đôi",
    "category": "gia-dinh",
    "lessonNumber": 7,
    "example": "这对双胞胎长得一模一样。",
    "examplePinyin": "zhè duì shuāng bāo tāi zhǎng de yī mú yī yàng.",
    "exampleVi": "Cặp song sinh này trông giống hệt nhau."
  },
  {
    "id": "yct6-rtngch",
    "hanzi": "儿童车",
    "pinyin": "ér tóng chē",
    "meaning": "xe đẩy trẻ em",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 7,
    "example": "妈妈推着儿童车去公园。",
    "examplePinyin": "mā ma tuī zhe ér tóng chē qù gōng yuán.",
    "exampleVi": "Mẹ đẩy xe đẩy em bé đi công viên."
  },
  {
    "id": "yct6-hun",
    "hanzi": "还",
    "pinyin": "huán",
    "meaning": "trả lại, hoàn trả (vd 还书 = trả sách)",
    "category": "dong-tu",
    "lessonNumber": 7,
    "example": "我要还书。",
    "examplePinyin": "Wǒ yào huán shū.",
    "exampleVi": "Tôi phải trả sách."
  },
  {
    "id": "yct6-ji-jie-2",
    "hanzi": "借",
    "pinyin": "jiè",
    "meaning": "vay, mượn",
    "category": "dong-tu",
    "lessonNumber": 7,
    "example": "我可以借你的笔吗",
    "examplePinyin": "wǒ kě yǐ jiè nǐ de bǐ ma",
    "exampleVi": "Tôi có thể mượn bút của bạn được không"
  },
  {
    "id": "yct6-y",
    "hanzi": "页",
    "pinyin": "yè",
    "meaning": "trang (sách, giấy)",
    "category": "dem-tu",
    "lessonNumber": 7,
    "example": "第一页",
    "examplePinyin": "Dì yī yè",
    "exampleVi": "Trang thứ nhất"
  },
  {
    "id": "yct6-li",
    "hanzi": "俩",
    "pinyin": "liǎ",
    "meaning": "hai người, cả hai, cặp đôi",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 7,
    "example": "咱们俩去吃饭吧。",
    "examplePinyin": "Zánmen liǎ qù chīfàn ba.",
    "exampleVi": "Hai mình đi ăn cơm đi."
  },
  {
    "id": "yct6-xing-xiang",
    "hanzi": "像",
    "pinyin": "xiàng",
    "meaning": "giống như",
    "category": "khac",
    "lessonNumber": 7,
    "example": "他像他父亲",
    "examplePinyin": "tā xiàng tā fù qīn",
    "exampleVi": "Anh ấy giống bố anh ấy"
  },
  {
    "id": "yct6-wile",
    "hanzi": "为了",
    "pinyin": "wèi le",
    "meaning": "để - chỉ mục đích hoặc lý do của một hành động.",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 7,
    "example": "为了学习汉语，我来中国",
    "examplePinyin": "Wèile xuéxí Hànyǔ, wǒ lái Zhōngguó",
    "exampleVi": "Để học tiếng Trung, tôi đến Trung Quốc"
  },
  {
    "id": "yct6-pizi",
    "hanzi": "牌子",
    "pinyin": "pái zi",
    "meaning": "bảng hiệu, biển; thẻ bài; thương hiệu",
    "category": "khac",
    "lessonNumber": 7,
    "example": "这家店的牌子很大。",
    "examplePinyin": "zhè jiā diàn de pái zi hěn dà.",
    "exampleVi": "Cửa hàng này có thương hiệu lớn."
  },
  {
    "id": "yct6-bi",
    "hanzi": "被",
    "pinyin": "bèi",
    "meaning": "bị, được (giới từ đánh dấu câu bị động); chăn (被子)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 8,
    "example": "我的自行车被人骑走了。",
    "examplePinyin": "wǒ de zì xíng chē bèi rén qí zǒu le.",
    "exampleVi": "Xe đạp của tôi bị người ta đi mất rồi."
  },
  {
    "id": "yct6-yu",
    "hanzi": "又",
    "pinyin": "yòu",
    "meaning": "lại, lại nữa; vừa… vừa…",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 8,
    "example": "他又来了",
    "examplePinyin": "tā yòu lái le",
    "exampleVi": "Anh ấy lại đến rồi"
  },
  {
    "id": "yct6-ygng",
    "hanzi": "鱼缸",
    "pinyin": "yú gāng",
    "meaning": "bể cá",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 8,
    "example": "鱼缸里有三条小鱼。",
    "examplePinyin": "yú gāng lǐ yǒu sān tiáo xiǎo yú.",
    "exampleVi": "Trong bể cá có ba con cá nhỏ."
  },
  {
    "id": "yct6-zhng",
    "hanzi": "种",
    "pinyin": "zhǒng",
    "meaning": "loại, giống, chủng loại",
    "category": "dem-tu",
    "lessonNumber": 8,
    "example": "这种水果我从来没吃过。",
    "examplePinyin": "Zhè zhǒng shuǐguǒ wǒ cónglái méi chīguo.",
    "exampleVi": "Loại quả này tôi chưa từng ăn."
  },
  {
    "id": "yct6-zujn",
    "hanzi": "最近",
    "pinyin": "zuì jìn",
    "meaning": "gần đây",
    "category": "thoi-gian",
    "lessonNumber": 8,
    "example": "你最近怎么样？",
    "examplePinyin": "nǐ zuì jìn zěn me yàng?",
    "exampleVi": "Dạo này bạn thế nào?"
  },
  {
    "id": "yct6-yux",
    "hanzi": "游戏",
    "pinyin": "yóu xì",
    "meaning": "trò chơi",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 8,
    "example": "孩子们在院子里做游戏。",
    "examplePinyin": "Háizimen zài yuànzi lǐ zuò yóuxì.",
    "exampleVi": "Đứa trẻ đang chơi trò chơi trong sân."
  },
  {
    "id": "yct6-bznmeyng",
    "hanzi": "不怎么样",
    "pinyin": "bù zěn me yàng",
    "meaning": "bình thường",
    "category": "tinh-tu",
    "lessonNumber": 8,
    "example": "这家新开的餐厅味道不怎么样",
    "examplePinyin": "zhè jiā xīn kāi de cān tīng wèi dào bù zěn me yàng",
    "exampleVi": "Mùi vị của nhà hàng mới mở này chẳng ra làm sao cả"
  },
  {
    "id": "yct6-ppng",
    "hanzi": "批评",
    "pinyin": "pī píng",
    "meaning": "phê bình; chỉ trích; nhận xét",
    "category": "gia-dinh",
    "lessonNumber": 8,
    "example": "老师批评他没有完成作业。",
    "examplePinyin": "Lǎoshī pīpíng tā méiyǒu wánchéng zuòyè.",
    "exampleVi": "Thầy cô phê bình em ấy vì không hoàn thành bài tập."
  },
  {
    "id": "yct6-judng",
    "hanzi": "决定",
    "pinyin": "jué dìng",
    "meaning": "quyết định, quyết đoán",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 8,
    "example": "我决定明天去北京。",
    "examplePinyin": "wǒ jué dìng míng tiān qù běi jīng.",
    "exampleVi": "Tôi quyết định ngày mai đi Bắc Kinh."
  },
  {
    "id": "yct6-kish",
    "hanzi": "开始",
    "pinyin": "kāi shǐ",
    "meaning": "bắt đầu, khởi đầu; điểm khởi đầu của một hành động, sự kiện hoặc quá trình",
    "category": "dong-tu",
    "lessonNumber": 8,
    "example": "电影开始了。",
    "examplePinyin": "Diànyǐng kāishǐ le.",
    "exampleVi": "Bộ phim đã bắt đầu."
  },
  {
    "id": "yct6-p",
    "hanzi": "破",
    "pinyin": "pò",
    "meaning": "vỡ, rách; phá, đập; vượt qua (kỷ lục)",
    "category": "dong-tu",
    "lessonNumber": 8,
    "example": "杯子破了。",
    "examplePinyin": "bēi zi pò le.",
    "exampleVi": "Cái ly đã vỡ."
  },
  {
    "id": "yct6-nngu",
    "hanzi": "难过",
    "pinyin": "nán guò",
    "meaning": "buồn",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 8,
    "example": "听到这个消息我很难过。",
    "examplePinyin": "tīng dào zhè ge xiāo xi wǒ hěn nán guò.",
    "exampleVi": "Nghe tin này tôi rất buồn."
  },
  {
    "id": "yct6-tshgun",
    "hanzi": "图书馆",
    "pinyin": "tú shū guǎn",
    "meaning": "thư viện",
    "category": "noi",
    "lessonNumber": 9,
    "example": "我去图书馆看书。",
    "examplePinyin": "Wǒ qù túshūguǎn kànshū.",
    "exampleVi": "Tôi đi thư viện đọc sách."
  },
  {
    "id": "yct6-bozh",
    "hanzi": "报纸",
    "pinyin": "bào zhǐ",
    "meaning": "báo",
    "category": "khac",
    "lessonNumber": 9,
    "example": "我每天早上都看报纸。",
    "examplePinyin": "wǒ měi tiān zǎo shang dōu kàn bào zhǐ.",
    "exampleVi": "Tôi mỗi sáng đều đọc báo."
  },
  {
    "id": "yct6-zzh",
    "hanzi": "杂志",
    "pinyin": "zá zhì",
    "meaning": "tạp chí; ấn phẩm định kỳ chứa nhiều bài viết, hình ảnh về các chủ đề khác nhau",
    "category": "khac",
    "lessonNumber": 9,
    "example": "我喜欢看时尚杂志。",
    "examplePinyin": "Wǒ xǐhuan kàn shíshàng zázhì.",
    "exampleVi": "Tôi thích đọc tạp chí thời trang."
  },
  {
    "id": "yct6-bnji",
    "hanzi": "搬家",
    "pinyin": "bān jiā",
    "meaning": "chuyển nhà; dọn đến nơi ở mới",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 9,
    "example": "我们这个月搬家。",
    "examplePinyin": "Wǒmen zhège yuè bānjiā.",
    "exampleVi": "Tháng này chúng tôi chuyển nhà."
  },
  {
    "id": "yct6-fjn",
    "hanzi": "附近",
    "pinyin": "fù jìn",
    "meaning": "gần đây, ở gần, lân cận",
    "category": "noi",
    "lessonNumber": 9,
    "example": "学校附近有很多商店。",
    "examplePinyin": "Xuéxiào fùjìn yǒu hěn duō shāngdiàn.",
    "exampleVi": "Gần trường học có nhiều cửa hàng."
  },
  {
    "id": "yct6-dzh",
    "hanzi": "地址",
    "pinyin": "dì zhǐ",
    "meaning": "địa chỉ",
    "category": "khac",
    "lessonNumber": 9,
    "example": "请把你的地址写在这里。",
    "examplePinyin": "qǐng bǎ nǐ de dì zhǐ xiě zài zhè li.",
    "exampleVi": "Vui lòng viết địa chỉ của bạn vào đây."
  },
  {
    "id": "yct6-dinzyujin",
    "hanzi": "电子邮件",
    "pinyin": "diàn zǐ yóu jiàn",
    "meaning": "email, thư điện tử",
    "category": "khac",
    "lessonNumber": 9,
    "example": "请给我发一封电子邮件。",
    "examplePinyin": "Qǐng gěi wǒ fā yī fēng diànzǐ yóujiàn.",
    "exampleVi": "Vui lòng gửi cho tôi một email."
  },
  {
    "id": "yct6-ml",
    "hanzi": "迷路",
    "pinyin": "mí lù",
    "meaning": "lạc đường",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 9,
    "example": "我在城市里迷路了。",
    "examplePinyin": "Wǒ zài chéngshì lǐ mílù le.",
    "exampleVi": "Tôi bị lạc trong thành phố."
  },
  {
    "id": "yct6-chf",
    "hanzi": "出发",
    "pinyin": "chū fā",
    "meaning": "khởi hành, xuất phát",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 9,
    "example": "我们明天一早就出发去北京。",
    "examplePinyin": "wǒ men míng tiān yī zǎo jiù chū fā qù běi jīng.",
    "exampleVi": "Sáng sớm mai chúng tôi sẽ xuất phát đi Bắc Kinh."
  },
  {
    "id": "yct6-jinmin",
    "hanzi": "见面",
    "pinyin": "jiàn miàn",
    "meaning": "gặp mặt, gặp nhau (trực tiếp)",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 9,
    "example": "我们明天见面吧",
    "examplePinyin": "Wǒmen míngtiān jiànmiàn ba",
    "exampleVi": "Ngày mai chúng ta gặp nhau nhé"
  },
  {
    "id": "yct6-xng-xing",
    "hanzi": "行",
    "pinyin": "xíng",
    "meaning": "được, ổn; đi; hàng, dãy",
    "category": "pho-tu",
    "lessonNumber": 9,
    "example": "他一个人去不行",
    "examplePinyin": "Tā yī gè rén qù bú xíng",
    "exampleVi": "Anh ấy đi một mình không được"
  },
  {
    "id": "yct6-gshi",
    "hanzi": "故事",
    "pinyin": "gù shi",
    "meaning": "câu chuyện",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 9,
    "example": "奶奶给我讲了一个故事",
    "examplePinyin": "nǎi nai gěi wǒ jiǎng le yī gè gù shi",
    "exampleVi": "Bà kể cho tôi nghe một câu chuyện"
  },
  {
    "id": "yct6-lq",
    "hanzi": "力气",
    "pinyin": "lì qì",
    "meaning": "sức mạnh, sức lực",
    "category": "tinh-tu",
    "lessonNumber": 9,
    "example": "我没有力气了。",
    "examplePinyin": "Wǒ méiyǒu lìqi le.",
    "exampleVi": "Tôi hết sức rồi."
  },
  {
    "id": "yct6-lo",
    "hanzi": "老",
    "pinyin": "lǎo",
    "meaning": "già",
    "category": "tinh-tu",
    "lessonNumber": 9,
    "example": "他老了",
    "examplePinyin": "tā lǎo le",
    "exampleVi": "Ông ấy đã già"
  },
  {
    "id": "yct6-yubng",
    "hanzi": "月饼",
    "pinyin": "yuè bǐng",
    "meaning": "bánh trung thu",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 10,
    "example": "中秋节吃月饼。",
    "examplePinyin": "Zhōngqiūjié chī yuèbǐng.",
    "exampleVi": "Tiết Trung Thu ăn bánh trung thu."
  },
  {
    "id": "yct6-dhi",
    "hanzi": "大海",
    "pinyin": "dà hǎi",
    "meaning": "biển, đại dương",
    "category": "noi",
    "lessonNumber": 10,
    "example": "我爱大海",
    "examplePinyin": "wǒ ài dà hǎi",
    "exampleVi": "Tôi yêu biển cả"
  },
  {
    "id": "yct6-coyun",
    "hanzi": "草原",
    "pinyin": "cǎo yuán",
    "meaning": "thảo nguyên, đồng cỏ",
    "category": "thien-nhien",
    "lessonNumber": 10,
    "example": "内蒙古有大片的草原。",
    "examplePinyin": "Nèi Měnggǔ yǒu dà piàn de cǎoyuán.",
    "exampleVi": "Nội Mông có những vùng thảo nguyên rộng lớn."
  },
  {
    "id": "yct6-yn",
    "hanzi": "云",
    "pinyin": "yún",
    "meaning": "mây",
    "category": "thien-nhien",
    "lessonNumber": 10,
    "example": "天上有云",
    "examplePinyin": "tiān shàng yǒu yún",
    "exampleVi": "Trên trời có mây"
  },
  {
    "id": "yct6-qm",
    "hanzi": "骑马",
    "pinyin": "qí mǎ",
    "meaning": "cưỡi ngựa",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 10,
    "example": "我在草原上骑马。",
    "examplePinyin": "Wǒ zài cǎoyuán shàng qímǎ.",
    "exampleVi": "Tôi cưỡi ngựa trên đồng cỏ."
  },
  {
    "id": "yct6-xngxing",
    "hanzi": "星星",
    "pinyin": "xīng xing",
    "meaning": "ngôi sao",
    "category": "thien-nhien",
    "lessonNumber": 10,
    "example": "天上有星星",
    "examplePinyin": "tiān shàng yǒu xīng xing",
    "exampleVi": "Trên trời có ngôi sao"
  },
  {
    "id": "yct6-l",
    "hanzi": "离",
    "pinyin": "lí",
    "meaning": "cách (chỉ khoảng cách không gian, thời gian); rời xa",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 10,
    "example": "我家离学校很远",
    "examplePinyin": "wǒ jiā lí xué xiào hěn yuǎn",
    "exampleVi": "Nhà tôi cách trường rất xa"
  },
  {
    "id": "yct6-dgi",
    "hanzi": "大概",
    "pinyin": "dà gài",
    "meaning": "khoảng, chừng, đại khái, có lẽ",
    "category": "pho-tu",
    "lessonNumber": 10,
    "example": "现在是大概下午三点左右。",
    "examplePinyin": "Xiànzài shì dàgài xiàwǔ sān diǎn zuǒyòu.",
    "exampleVi": "Bây giờ là khoảng ba giờ chiều."
  },
  {
    "id": "yct6-gngl",
    "hanzi": "公里",
    "pinyin": "gōng lǐ",
    "meaning": "kilômét (km), cây số",
    "category": "dem-tu",
    "lessonNumber": 10,
    "example": "学校离家五公里",
    "examplePinyin": "xué xiào lí jiā wǔ gōng lǐ",
    "exampleVi": "Trường học cách nhà năm ki-lô-mét"
  },
  {
    "id": "yct6-cngqli",
    "hanzi": "藏起来",
    "pinyin": "cáng qǐ lái",
    "meaning": "giấu đi; trốn đi",
    "category": "dong-tu",
    "lessonNumber": 10,
    "example": "小猫藏起来了。",
    "examplePinyin": "xiǎo māo cáng qǐ lái le.",
    "exampleVi": "Con mèo con trốn đi rồi."
  },
  {
    "id": "yct6-guji",
    "hanzi": "国家",
    "pinyin": "guó jiā",
    "meaning": "quốc gia, nhà nước",
    "category": "noi",
    "lessonNumber": 10,
    "example": "我爱我的国家",
    "examplePinyin": "Wǒ ài wǒ de guójiā",
    "exampleVi": "Tôi yêu đất nước tôi"
  },
  {
    "id": "yct6-yun-yuan",
    "hanzi": "元",
    "pinyin": "yuán",
    "meaning": "nhân dân tệ, đồng (tiền)",
    "category": "dem-tu",
    "lessonNumber": 11,
    "example": "一元",
    "examplePinyin": "Yī yuán",
    "exampleVi": "Một yuan, một đồng TQ"
  },
  {
    "id": "yct6-gu-gui",
    "hanzi": "贵",
    "pinyin": "guì",
    "meaning": "đắt, quý",
    "category": "tinh-tu",
    "lessonNumber": 11,
    "example": "很贵",
    "examplePinyin": "Hěn guì",
    "exampleVi": "Rất đắt"
  },
  {
    "id": "yct6-hu",
    "hanzi": "花",
    "pinyin": "huā",
    "meaning": "bông hoa",
    "category": "thien-nhien",
    "lessonNumber": 11,
    "example": "这朵花很漂亮",
    "examplePinyin": "Zhè duǒ huā hěn piào liang",
    "exampleVi": "Bông hoa này rất đẹp"
  },
  {
    "id": "yct6-mozi",
    "hanzi": "帽子",
    "pinyin": "mào zi",
    "meaning": "mũ",
    "category": "khac",
    "lessonNumber": 11,
    "example": "请戴上帽子，外面很冷。",
    "examplePinyin": "Qǐng dài shàng màozi, wàimiàn hěn lěng.",
    "exampleVi": "Hãy đội mũ lên, bên ngoài rất lạnh."
  },
  {
    "id": "yct6-hun-huan",
    "hanzi": "换",
    "pinyin": "huàn",
    "meaning": "đổi",
    "category": "dong-tu",
    "lessonNumber": 11,
    "example": "我想换一件衣服",
    "examplePinyin": "wǒ xiǎng huàn yī jiàn yī fu",
    "exampleVi": "Tôi muốn đổi một chiếc áo"
  },
  {
    "id": "yct6-ji-jiu",
    "hanzi": "旧",
    "pinyin": "jiù",
    "meaning": "cũ; cũ kỹ; đã qua",
    "category": "tinh-tu",
    "lessonNumber": 11,
    "example": "这件衣服太旧了，我买件新的。",
    "examplePinyin": "Zhè jiàn yīfu tài jiù le, wǒ mǎi jiàn xīn de.",
    "exampleVi": "Cái áo này quá cũ rồi, tôi mua cái mới."
  },
  {
    "id": "yct6-sh-shi",
    "hanzi": "试",
    "pinyin": "shì",
    "meaning": "thử, kiểm tra",
    "category": "khac",
    "lessonNumber": 11,
    "example": "试一下",
    "examplePinyin": "Shì yī xià",
    "exampleVi": "Thử một chút"
  },
  {
    "id": "yct6-hsh",
    "hanzi": "合适",
    "pinyin": "hé shì",
    "meaning": "phù hợp",
    "category": "tinh-tu",
    "lessonNumber": 11,
    "example": "这件衣服很合适",
    "examplePinyin": "zhè jiàn yī fu hěn hé shì",
    "exampleVi": "Cái quần áo này rất vừa"
  },
  {
    "id": "yct6-ling",
    "hanzi": "辆",
    "pinyin": "liàng",
    "meaning": "chiếc",
    "category": "dem-tu",
    "lessonNumber": 11,
    "example": "一辆车",
    "examplePinyin": "yī liàng chē",
    "exampleVi": "Một chiếc xe"
  },
  {
    "id": "yct6-wi",
    "hanzi": "为",
    "pinyin": "wéi",
    "meaning": "làm, là, trở thành; bị (为…所…)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 11,
    "example": "为人民服务",
    "examplePinyin": "wéi rén mín fú wù",
    "exampleVi": "Phục vụ nhân dân"
  },
  {
    "id": "yct6-jnzhng",
    "hanzi": "紧张",
    "pinyin": "jǐn zhāng",
    "meaning": "căng thẳng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 11,
    "example": "明天要考试，我感到很紧张。",
    "examplePinyin": "míng tiān yào kǎo shì, wǒ gǎn dào hěn jǐn zhāng.",
    "exampleVi": "Mai thi rồi, tôi cảm thấy rất căng thẳng."
  },
  {
    "id": "yct6-gn",
    "hanzi": "敢",
    "pinyin": "gǎn",
    "meaning": "dám, gan dạ",
    "category": "dong-tu",
    "lessonNumber": 11,
    "example": "你敢去吗？",
    "examplePinyin": "nǐ gǎn qù ma?",
    "exampleVi": "Bạn dám đi không?"
  },
  {
    "id": "yct6-hip",
    "hanzi": "害怕",
    "pinyin": "hài pà",
    "meaning": "sợ",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 11,
    "example": "我不害怕困难，我只怕放弃。",
    "examplePinyin": "wǒ bù hài pà kùn nan, wǒ zhǐ pà fàng qì.",
    "exampleVi": "Tôi không sợ khó khăn, tôi chỉ sợ bỏ cuộc."
  },
  {
    "id": "yct6-zhy",
    "hanzi": "注意",
    "pinyin": "zhù yì",
    "meaning": "chú ý, để ý, quan tâm",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 12,
    "example": "请注意听老师讲课。",
    "examplePinyin": "Qǐng zhùyì tīng lǎoshī jiǎngkè.",
    "exampleVi": "Vui lòng chú ý nghe thầy giáo giảng bài."
  },
  {
    "id": "yct6-jzh-jizhu",
    "hanzi": "记住",
    "pinyin": "jì zhù",
    "meaning": "ghi nhớ, nhớ kỹ (kết quả của hành động 记)",
    "category": "dong-tu",
    "lessonNumber": 12,
    "example": "请记住我的电话号码。",
    "examplePinyin": "Qǐng jì zhù wǒ de diànhuà hàomǎ.",
    "exampleVi": "Hãy nhớ số điện thoại của tôi."
  },
  {
    "id": "yct6-shn",
    "hanzi": "身",
    "pinyin": "shēn",
    "meaning": "thân; người",
    "category": "dem-tu",
    "lessonNumber": 12,
    "example": "他身上有很多钱。",
    "examplePinyin": "tā shēn shàng yǒu hěn duō qián.",
    "exampleVi": "Trên người anh ấy có rất nhiều tiền."
  },
  {
    "id": "yct6-br",
    "hanzi": "比如",
    "pinyin": "bǐ rú",
    "meaning": "ví dụ, chẳng hạn như",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 12,
    "example": "我喜欢很多水果，比如苹果、香蕉",
    "examplePinyin": "wǒ xǐ huan hěn duō shuǐ guǒ, bǐ rú píng guǒ, xiāng jiāo",
    "exampleVi": "Tôi thích nhiều loại trái cây, ví dụ táo, chuối"
  },
  {
    "id": "yct6-lmo",
    "hanzi": "礼貌",
    "pinyin": "lǐ mào",
    "meaning": "lịch sự; phép lịch sự",
    "category": "gia-dinh",
    "lessonNumber": 12,
    "example": "说话要客气，这是一种礼貌。",
    "examplePinyin": "shuō huà yào kè qi, zhè shì yì zhǒng lǐ mào.",
    "exampleVi": "Nói chuyện phải khách sáo, đây là một kiểu lịch sự."
  },
  {
    "id": "yct6-bx",
    "hanzi": "必须",
    "pinyin": "bì xū",
    "meaning": "phải",
    "category": "pho-tu",
    "lessonNumber": 12,
    "example": "你必须去",
    "examplePinyin": "nǐ bì xū qù",
    "exampleVi": "Bạn phải đi"
  },
  {
    "id": "yct6-xioxn",
    "hanzi": "小心",
    "pinyin": "xiǎo xīn",
    "meaning": "cẩn thận",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 12,
    "example": "小心一点",
    "examplePinyin": "xiǎo xīn yī diǎn",
    "exampleVi": "Cẩn thận một chút"
  },
  {
    "id": "yct6-dfang",
    "hanzi": "地方",
    "pinyin": "dì fang",
    "meaning": "nơi, chỗ",
    "category": "noi",
    "lessonNumber": 12,
    "example": "这是什么地方？",
    "examplePinyin": "Zhè shì shénme dìfāng?",
    "exampleVi": "Đây là nơi nào?"
  },
  {
    "id": "yct6-tu",
    "hanzi": "腿",
    "pinyin": "tuǐ",
    "meaning": "chân",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 12,
    "example": "我的腿很酸",
    "examplePinyin": "wǒ de tuǐ hěn suān",
    "exampleVi": "Chân tôi rất đau"
  },
  {
    "id": "yct6-wixin",
    "hanzi": "危险",
    "pinyin": "wēi xiǎn",
    "meaning": "nguy hiểm",
    "category": "khac",
    "lessonNumber": 12,
    "example": "这里很危险，不要靠近。",
    "examplePinyin": "zhè li hěn wēi xiǎn, bù yào kào jìn.",
    "exampleVi": "Nơi này rất nguy hiểm, đừng lại gần."
  },
  {
    "id": "yct6-tu-tuo",
    "hanzi": "脱",
    "pinyin": "tuō",
    "meaning": "cởi",
    "category": "dong-tu",
    "lessonNumber": 12,
    "example": "进门以前请脱鞋。",
    "examplePinyin": "jìn mén yǐ qián qǐng tuō xié.",
    "exampleVi": "Xin hãy cởi giày trước khi vào nhà."
  },
  {
    "id": "yct6-pidu",
    "hanzi": "排队",
    "pinyin": "pái duì",
    "meaning": "xếp hàng",
    "category": "dong-tu",
    "lessonNumber": 12,
    "example": "请在这里排队",
    "examplePinyin": "qǐng zài zhè li pái duì",
    "exampleVi": "Vui lòng xếp hàng ở đây"
  },
  {
    "id": "yct6-zhngjin",
    "hanzi": "中间",
    "pinyin": "zhōng jiān",
    "meaning": "ở giữa, trung gian",
    "category": "noi",
    "lessonNumber": 12,
    "example": "我坐在两个人中间",
    "examplePinyin": "Wǒ zuò zài liǎng gè rén zhōngjiān",
    "exampleVi": "Tôi ngồi giữa hai người"
  },
  {
    "id": "yct6-l-la",
    "hanzi": "辣",
    "pinyin": "là",
    "meaning": "cay",
    "category": "tinh-tu",
    "lessonNumber": 13,
    "example": "这个菜太辣了。",
    "examplePinyin": "zhè ge cài tài là le.",
    "exampleVi": "Món này cay quá."
  },
  {
    "id": "yct6-tin",
    "hanzi": "甜",
    "pinyin": "tián",
    "meaning": "ngọt",
    "category": "do-an-va-do-uong",
    "lessonNumber": 13,
    "example": "这个西瓜很甜。",
    "examplePinyin": "zhè ge xī guā hěn tián.",
    "exampleVi": "Quả dưa hấu này rất ngọt."
  },
  {
    "id": "yct6-chbulio",
    "hanzi": "吃不了",
    "pinyin": "chī bu liǎo",
    "meaning": "ăn không hết",
    "category": "do-an-va-do-uong",
    "lessonNumber": 13,
    "example": "菜太多了，我吃不了。",
    "examplePinyin": "cài tài duō le, wǒ chī bu liǎo.",
    "exampleVi": "Nhiều món quá, tôi ăn không hết."
  },
  {
    "id": "yct6-jinch",
    "hanzi": "坚持",
    "pinyin": "jiān chí",
    "meaning": "kiên trì, kiên quyết",
    "category": "dong-tu",
    "lessonNumber": 13,
    "example": "我们要坚持学习。",
    "examplePinyin": "wǒ men yào jiān chí xué xí.",
    "exampleVi": "Chúng ta phải kiên trì học tập."
  },
  {
    "id": "yct6-h",
    "hanzi": "盒",
    "pinyin": "hé",
    "meaning": "hộp",
    "category": "cong-viec",
    "lessonNumber": 13,
    "example": "我买了一盒巧克力。",
    "examplePinyin": "wǒ mǎi le yī hé qiǎo kè lì.",
    "exampleVi": "Tôi đã mua một hộp sô cô la."
  },
  {
    "id": "yct6-shubulio",
    "hanzi": "受不了",
    "pinyin": "shòu bu liǎo",
    "meaning": "không chịu nổi, không chịu được, quá sức",
    "category": "tinh-tu",
    "lessonNumber": 13,
    "example": "我受不了这么热。",
    "examplePinyin": "Wǒ shòubùliǎo zhème rè.",
    "exampleVi": "Tôi không chịu nổi nóng như thế này."
  },
  {
    "id": "yct6-tngy",
    "hanzi": "同意",
    "pinyin": "tóng yì",
    "meaning": "đồng ý, tán thành; có cùng ý kiến hoặc quan điểm với người khác",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 13,
    "example": "我同意你的看法。",
    "examplePinyin": "Wǒ tóngyì nǐ de kànfǎ.",
    "exampleVi": "Tôi đồng ý với quan điểm của bạn."
  },
  {
    "id": "yct6-toln",
    "hanzi": "讨论",
    "pinyin": "tǎo lùn",
    "meaning": "thảo luận",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 13,
    "example": "我们讨论这个问题",
    "examplePinyin": "wǒ men tǎo lùn zhè ge wèn tí",
    "exampleVi": "Chúng tôi thảo luận vấn đề này"
  },
  {
    "id": "yct6-bngxing",
    "hanzi": "冰箱",
    "pinyin": "bīng xiāng",
    "meaning": "tủ lạnh",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 13,
    "example": "冰箱里有饮料。",
    "examplePinyin": "Bīngxiāng lǐ yǒu yǐnliào.",
    "exampleVi": "Trong tủ lạnh có đồ uống."
  },
  {
    "id": "yct6-xhngsh",
    "hanzi": "西红柿",
    "pinyin": "xī hóng shì",
    "meaning": "cà chua",
    "category": "do-an-va-do-uong",
    "lessonNumber": 13,
    "example": "西红柿炒鸡蛋很好吃。",
    "examplePinyin": "Xīhóngshì chǎo jīdàn hěn hǎochī.",
    "exampleVi": "Cà chua xào trứng rất ngon."
  },
  {
    "id": "yct6-shu",
    "hanzi": "瘦",
    "pinyin": "shòu",
    "meaning": "gầy, gầy",
    "category": "gia-dinh",
    "lessonNumber": 13,
    "example": "他很瘦",
    "examplePinyin": "Tā hěn shòu",
    "exampleVi": "Anh ấy rất gầy"
  },
  {
    "id": "yct6-tng-tang",
    "hanzi": "糖",
    "pinyin": "táng",
    "meaning": "đường, kẹo",
    "category": "do-an-va-do-uong",
    "lessonNumber": 13,
    "example": "咖啡里不要放糖。",
    "examplePinyin": "kā fēi lǐ bù yào fàng táng.",
    "exampleVi": "Đừng cho đường vào cà phê."
  },
  {
    "id": "yct6-mpdufu",
    "hanzi": "麻婆豆腐",
    "pinyin": "má pó dòu fu",
    "meaning": "đậu phụ Tứ Xuyên (mapo tofu)",
    "category": "do-an-va-do-uong",
    "lessonNumber": 13,
    "example": "麻婆豆腐是四川菜。",
    "examplePinyin": "má pó dòu fu shì sì chuān cài.",
    "exampleVi": "Đậu phụ Ma Bà là món ăn Tứ Xuyên."
  },
  {
    "id": "yct6-xhngshchojdn",
    "hanzi": "西红柿炒鸡蛋",
    "pinyin": "xī hóng shì chǎo jī dàn",
    "meaning": "cà chua xào trứng",
    "category": "hoc",
    "lessonNumber": 13,
    "example": "西红柿炒鸡蛋是家常菜。",
    "examplePinyin": "Xīhóngshì chǎojīdàn shì jiāchángcài.",
    "exampleVi": "Cà chua xào trứng là món ăn nhà làm."
  },
  {
    "id": "yct6-dro",
    "hanzi": "打扰",
    "pinyin": "dǎ rǎo",
    "meaning": "làm phiền, quấy rầy: gây gián đoạn hoặc bất tiện cho người khác; thường dùng trong câu xin lỗi hoặc xin phép lịch sự.",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 14,
    "example": "对不起，打扰你一下",
    "examplePinyin": "Duìbuqǐ, dǎrǎo nǐ yīxià",
    "exampleVi": "Xin lỗi, làm phiền bạn một chút"
  },
  {
    "id": "yct6-cngun",
    "hanzi": "参观",
    "pinyin": "cān guān",
    "meaning": "tham quan",
    "category": "dong-tu",
    "lessonNumber": 14,
    "example": "我们去参观博物馆",
    "examplePinyin": "wǒ men qù cān guān bó wù guǎn",
    "exampleVi": "Chúng tôi đi tham quan bảo tàng"
  },
  {
    "id": "yct6-shx",
    "hanzi": "熟悉",
    "pinyin": "shú xī",
    "meaning": "quen thuộc",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 14,
    "example": "我对这个地方很熟悉。",
    "examplePinyin": "wǒ duì zhè ge dì fang hěn shú xī.",
    "exampleVi": "Tôi rất quen thuộc với nơi này."
  },
  {
    "id": "yct6-wng",
    "hanzi": "往",
    "pinyin": "wǎng",
    "meaning": "đến; hướng tới",
    "category": "noi",
    "lessonNumber": 14,
    "example": "往东走",
    "examplePinyin": "wǎng dōng zǒu",
    "exampleVi": "Đi về phía đông"
  },
  {
    "id": "yct6-zhun",
    "hanzi": "转",
    "pinyin": "zhuǎn",
    "meaning": "xoay; chuyển; đổi; rẽ",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 14,
    "example": "请向后转。",
    "examplePinyin": "Qǐng xiàng hòu zhuǎn.",
    "exampleVi": "Xin hãy quay về phía sau."
  },
  {
    "id": "yct6-knqli",
    "hanzi": "看起来",
    "pinyin": "kàn qǐ lái",
    "meaning": "trông có vẻ, hình như",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 14,
    "example": "他看起来很累。",
    "examplePinyin": "tā kàn qǐ lái hěn lèi.",
    "exampleVi": "Trông anh ấy có vẻ rất mệt."
  },
  {
    "id": "yct6-guny",
    "hanzi": "关于",
    "pinyin": "guān yú",
    "meaning": "về, liên quan đến",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 14,
    "example": "关于这个问题，我们再讨论一下吧。",
    "examplePinyin": "Guānyú zhège wèntí, wǒmen zài tǎolùn yīxià ba.",
    "exampleVi": "Về vấn đề này, chúng ta hãy thảo luận thêm nhé."
  },
  {
    "id": "yct6-zhshi",
    "hanzi": "知识",
    "pinyin": "zhī shi",
    "meaning": "kiến thức",
    "category": "khac",
    "lessonNumber": 14,
    "example": "读书能增长知识。",
    "examplePinyin": "Dúshū néng zēngzhǎng zhīshi.",
    "exampleVi": "Đọc sách có thể tăng kiến thức."
  },
  {
    "id": "yct6-qngchu",
    "hanzi": "清楚",
    "pinyin": "qīng chu",
    "meaning": "thanh sở, rõ ràng",
    "category": "tinh-tu",
    "lessonNumber": 14,
    "example": "说清楚",
    "examplePinyin": "shuō qīng chu",
    "exampleVi": "Nói cho rõ ràng"
  },
  {
    "id": "yct6-xioji",
    "hanzi": "小姐",
    "pinyin": "xiǎo jiě",
    "meaning": "cô, tiểu thư",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 14,
    "example": "这位小姐贵姓？",
    "examplePinyin": "Zhè wèi xiǎojiě guì xìng?",
    "exampleVi": "Cô này tên gì?"
  },
  {
    "id": "yct6-dng-dong",
    "hanzi": "东",
    "pinyin": "dōng",
    "meaning": "phía đông",
    "category": "noi",
    "lessonNumber": 14,
    "example": "东边",
    "examplePinyin": "dōngbiān",
    "exampleVi": "phía đông, bên phía đông"
  },
  {
    "id": "yct6-x",
    "hanzi": "西",
    "pinyin": "xī",
    "meaning": "tây; phương tây; phía tây",
    "category": "noi",
    "lessonNumber": 14,
    "example": "向西走",
    "examplePinyin": "Xiàng xī zǒu",
    "exampleVi": "Đi về phía tây"
  },
  {
    "id": "yct6-zhzi",
    "hanzi": "竹子",
    "pinyin": "zhú zi",
    "meaning": "cây tre, trúc",
    "category": "thien-nhien",
    "lessonNumber": 14,
    "example": "院子里种了很多竹子。",
    "examplePinyin": "Yuànzi lǐ zhòng le hěnduō zhúzi.",
    "exampleVi": "Trong sân trồng nhiều tre."
  }
];

export function toVocabularyWord6(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct6",
    hskLevel: "HSK3",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

const STORAGE_KEY_YCT6 = "hanyu.yct6.progress.v1";

export interface Yct6Progress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYct6Progress(): Yct6Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YCT6);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as Yct6Progress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYct6Progress(progress: Yct6Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY_YCT6, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord6(wordId: string): Yct6Progress {
  const current = getYct6Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const earnedXp = exists
    ? 0
    : awardXp(`yct:6:word:${encodeURIComponent(wordId)}`, "yct", xpGain);
  const updated: Yct6Progress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + earnedXp,
  };
  saveYct6Progress(updated);
  return updated;
}

export function recordQuizCompletion6(
  score: number,
  total: number
): { progress: Yct6Progress; earnedXp: number } {
  const current = getYct6Progress();
  const reward = total > 0 ? Math.round((score / total) * 30) : 0;
  const earnedXp = reward > 0 ? awardDailyXp("yct:6:quiz", "yct", reward) : 0;
  const updated: Yct6Progress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYct6Progress(updated);
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

export function generateYct6Quiz(
  count = 10,
  filter?: { category?: Yct6CategoryId; lessonNumber?: number }
): YctQuizQuestion[] {
  let pool = YCT6_WORDS;
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

    const distractors = YCT6_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q6-${word.id}-${idx}`,
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
        id: `q6-${word.id}-${idx}`,
        type: "pinyin",
        prompt: "Cách phát âm Pinyin chuẩn của chữ này là gì?",
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      };
    } else {
      const correct = word.hanzi;
      const options = [correct, ...distractors.map((d) => d.hanzi)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q6-${word.id}-${idx}`,
        type: "listen",
        prompt: "Nghe phát âm và chọn chữ Hán chính xác:",
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        audioText: word.hanzi,
        options,
        correctAnswer: correct,
        word,
      };
    }
  });
}

const CATEGORY_EMOJIS_6: Record<string, string> = {
  "do-an-va-do-uong": "🍜",
  "gia-dinh": "👨‍👩‍👧",
  "nha-va-cuoc-song": "🏡",
  "hoc": "📚",
  "cong-viec": "💼",
  "ngay-le-va-giai-tri": "🎉",
  "giao-tiep-va-tuong-tac": "🤝",
  "suc-khoe-va-co-the": "💪",
  "tinh-cam-va-cam-xuc": "😊",
  "thoi-gian": "⏰",
  "thien-nhien": "🌿",
  "noi": "📍",
  "giao-thong-va-giao-thong": "🚗",
  "cac-tu-chuc-nang-va-cau-hoi": "❓",
  "pho-tu": "⚡",
  "dem-tu": "🔢",
  "tinh-tu": "🎨",
  "thu-tu-trinh-bay": "🔗",
  "dong-tu": "🏃",
  "khac": "✨",
};

export const WORD_EMOJIS_6: Record<string, string> = {
};

export function getWordEmoji6(word: YctWord): string {
  return WORD_EMOJIS_6[word.id] || CATEGORY_EMOJIS_6[word.category] || "✨";
}
