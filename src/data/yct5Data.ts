import type { VocabularyWord } from "../types";
import { awardDailyXp, awardXp } from "../lib/hsk";
import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct5CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type Yct5CategoryId =
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

export interface Yct5Category {
  id: Yct5CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface Yct5Lesson {
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}

export const YCT5_LESSONS: Yct5Lesson[] = [
  {
    "lessonNumber": 1,
    "lessonSlug": "bai-1-are-you-interested-in-chinese-kung-fu",
    "titleVi": "Bạn có hứng thú với kung fu Trung Quốc không?",
    "titleZh": "你对中国功夫感兴趣吗？",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 2,
    "lessonSlug": "bai-2-rabbits-are-even-cuter",
    "titleVi": "Thỏ đáng yêu hơn",
    "titleZh": "兔子更可爱。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 3,
    "lessonSlug": "bai-3-there-is-something-wrong-with-the-elevator",
    "titleVi": "Thang máy hỏng rồi",
    "titleZh": "电梯坏了。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 4,
    "lessonSlug": "bai-4-everyone-has-their-own-habits",
    "titleVi": "Mỗi người đều có thói quen riêng",
    "titleZh": "每个人都有自己的习惯。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 5,
    "lessonSlug": "bai-5-they-re-so-young",
    "titleVi": "Họ trẻ biết bao!",
    "titleZh": "他们多么年轻啊！",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 6,
    "lessonSlug": "bai-6-the-one-standing-or-the-one-sitting",
    "titleVi": "Người đứng hay người ngồi?",
    "titleZh": "站着的还是坐着的？",
    "wordCount": 10,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 7,
    "lessonSlug": "bai-7-i-often-go-to-the-gym-to-work-out",
    "titleVi": "Tôi thường đến nhà thi đấu rèn luyện sức khỏe",
    "titleZh": "我经常去体育馆锻炼身体。",
    "wordCount": 10,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 8,
    "lessonSlug": "bai-8-beijing-has-four-seasons-altogether",
    "titleVi": "Bắc Kinh có tất cả bốn mùa",
    "titleZh": "北京一共有四个季节。",
    "wordCount": 14,
    "estimatedMinutes": 15
  },
  {
    "lessonNumber": 9,
    "lessonSlug": "bai-9-the-ice-cream-is-delicious-and-cheap",
    "titleVi": "Kem vừa ngon vừa rẻ",
    "titleZh": "冰激凌既好吃又便宜。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 10,
    "lessonSlug": "bai-10-your-chinese-will-get-better-and-better",
    "titleVi": "Tiếng Trung của bạn sẽ ngày càng giỏi",
    "titleZh": "你的汉语会越来越好。",
    "wordCount": 11,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 11,
    "lessonSlug": "bai-11-i-d-like-a-plate-of-lamb-dumplings",
    "titleVi": "Cho một đĩa sủi cảo thịt cừu",
    "titleZh": "来一盘羊肉饺子。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 12,
    "lessonSlug": "bai-12-you-can-either-take-the-plane-or-the-train",
    "titleVi": "Đi máy bay hoặc tàu hỏa đều được",
    "titleZh": "坐飞机或者坐火车都可以。",
    "wordCount": 12,
    "estimatedMinutes": 10
  },
  {
    "lessonNumber": 13,
    "lessonSlug": "bai-13-i-ll-do-the-filling-for-you-first",
    "titleVi": "Tôi trám răng cho bạn trước",
    "titleZh": "我先帮你补牙。",
    "wordCount": 13,
    "estimatedMinutes": 14
  },
  {
    "lessonNumber": 14,
    "lessonSlug": "bai-14-i-m-planning-to-go-travelling-in-china",
    "titleVi": "Tôi định đi du lịch Trung Quốc",
    "titleZh": "我打算去中国旅游。",
    "wordCount": 11,
    "estimatedMinutes": 9
  }
];

export const YCT5_CATEGORIES: Yct5Category[] = [
  {
    "id": "do-an-va-do-uong",
    "nameVi": "Đồ ăn & Thức uống",
    "nameZh": "美食饮品",
    "icon": "🍜",
    "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
    "description": "Món ăn, hoa quả, đồ uống, súp, thịt cừu, vịt quay, kem"
  },
  {
    "id": "gia-dinh",
    "nameVi": "Gia đình & Con người",
    "nameZh": "家庭人物",
    "icon": "👨‍👩‍👧",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Bố mẹ, anh chị em, con cái, họ hàng, người khác, hàng xóm"
  },
  {
    "id": "nha-va-cuoc-song",
    "nameVi": "Nhà cửa & Đời sống",
    "nameZh": "居家生活",
    "icon": "🏡",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Tòa nhà, tầng gác, thang máy, điều hòa, đồ gia dụng"
  },
  {
    "id": "hoc",
    "nameVi": "Học tập & Trường lớp",
    "nameZh": "学习教育",
    "icon": "📚",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "description": "Nghỉ hè, nghỉ đông, ôn tập, rèn luyện, nâng cao kiến thức"
  },
  {
    "id": "cong-viec",
    "nameVi": "Công việc & Nghề nghiệp",
    "nameZh": "工作职场",
    "icon": "💼",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "description": "Làm việc, đi công tác, bác sĩ, y tá, người phục vụ"
  },
  {
    "id": "ngay-le-va-giai-tri",
    "nameVi": "Vui chơi & Giải trí",
    "nameZh": "娱乐活动",
    "icon": "🎉",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Du lịch, chụp ảnh, đánh đàn, leo núi, tập thể thao"
  },
  {
    "id": "giao-tiep-va-tuong-tac",
    "nameVi": "Giao tiếp & Xã giao",
    "nameZh": "人际交往",
    "icon": "🤝",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Giúp đỡ, giới thiệu, nói cho biết, mời mọc, chào đón"
  },
  {
    "id": "suc-khoe-va-co-the",
    "nameVi": "Sức khỏe & Cơ thể",
    "nameZh": "身体健康",
    "icon": "💪",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "description": "Đau bụng, sốt, tiêm thuốc, trám răng, kê đơn, rèn luyện"
  },
  {
    "id": "tinh-cam-va-cam-xuc",
    "nameVi": "Tình cảm & Cảm xúc",
    "nameZh": "情感心理",
    "icon": "😊",
    "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
    "description": "Vui mừng, lo lắng, chán ghét, tin tưởng, ngạc nhiên"
  },
  {
    "id": "thoi-gian",
    "nameVi": "Thời gian & Khoảnh khắc",
    "nameZh": "时间日期",
    "icon": "⏰",
    "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
    "description": "Tương lai, cuối tuần, một lát, trước đây, quá khứ"
  },
  {
    "id": "thien-nhien",
    "nameVi": "Thiên nhiên & Muông thú",
    "nameZh": "自然物候",
    "icon": "🌿",
    "badgeColor": "bg-green-100 text-green-800 border-green-300",
    "description": "Con voi, thỏ, bướm, sâu bọ, bốn mùa xuân hạ thu đông"
  },
  {
    "id": "noi",
    "nameVi": "Địa điểm & Nơi chốn",
    "nameZh": "场所地点",
    "icon": "📍",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Công viên, nhà thi đấu, miền Nam, miền Bắc, bản đồ"
  },
  {
    "id": "giao-thong-va-giao-thong",
    "nameVi": "Giao thông & Đi lại",
    "nameZh": "交通出行",
    "icon": "🚗",
    "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
    "description": "Tàu điện ngầm, tàu hỏa, đi dạo, rời khỏi, bay lượn"
  },
  {
    "id": "cac-tu-chuc-nang-va-cau-hoi",
    "nameVi": "Hư từ & Cấu trúc ngữ pháp",
    "nameZh": "虚词句式",
    "icon": "❓",
    "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "description": "Trợ từ ngữ khí, càng ngày càng, hơn nữa, hay là"
  },
  {
    "id": "pho-tu",
    "nameVi": "Phó từ chỉ mức độ",
    "nameZh": "程度副词",
    "icon": "⚡",
    "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    "description": "Rất, cực kỳ, đặc biệt, nhất định, đột nhiên, ngay lập tức"
  },
  {
    "id": "dem-tu",
    "nameVi": "Lượng từ & Đếm đồ vật",
    "nameZh": "计量量词",
    "icon": "🔢",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Tòa, tầng, đôi, tấm, cái đĩa, cái bát, cái nĩa"
  },
  {
    "id": "tinh-tu",
    "nameVi": "Tính từ miêu tả đặc điểm",
    "nameZh": "性质特征",
    "icon": "🎨",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Lợi hại, thấp, ngắn, đẹp trai, nghiêm túc, thuận tiện, an toàn"
  },
  {
    "id": "thu-tu-trinh-bay",
    "nameVi": "Liên từ & Thứ tự",
    "nameZh": "连词逻辑",
    "icon": "🔗",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Trước tiên, sau đó, ngoài ra, nếu... thì, hoặc là"
  },
  {
    "id": "dong-tu",
    "nameVi": "Động từ hành vi & Thao tác",
    "nameZh": "动作行为",
    "icon": "🏃",
    "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
    "description": "Đặt để, mang theo, dùng, nằm, đứng, ngồi, chuẩn bị, đánh răng"
  },
  {
    "id": "khac",
    "nameVi": "Từ vựng tổng hợp khác",
    "nameZh": "综合其他",
    "icon": "✨",
    "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
    "description": "Đồ vật, ảnh chụp, thói quen và các từ vựng bổ trợ"
  }
];

export const YCT5_WORDS: YctWord[] = [
  {
    "id": "yct5-gngfu",
    "hanzi": "功夫",
    "pinyin": "gōng fu",
    "meaning": "công phu, thời gian và công sức; võ thuật Trung Hoa (kungfu)",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 1,
    "example": "他练了很多年功夫。",
    "examplePinyin": "Tā liàn le hěnduō nián gōngfu.",
    "exampleVi": "Anh ấy đã tập võ nhiều năm."
  },
  {
    "id": "yct5-fichng",
    "hanzi": "非常",
    "pinyin": "fēi cháng",
    "meaning": "cực kỳ, rất",
    "category": "pho-tu",
    "lessonNumber": 1,
    "example": "这本书非常好。",
    "examplePinyin": "Zhè běn shū fēicháng hǎo.",
    "exampleVi": "Quyển sách này rất hay."
  },
  {
    "id": "yct5-fi",
    "hanzi": "飞",
    "pinyin": "fēi",
    "meaning": "bay",
    "category": "dong-tu",
    "lessonNumber": 1,
    "example": "鸟在天上飞",
    "examplePinyin": "Niǎo zài tiān shàng fēi",
    "exampleVi": "Chim đang bay trên trời"
  },
  {
    "id": "yct5-dngrn",
    "hanzi": "当然",
    "pinyin": "dāng rán",
    "meaning": "tất nhiên, đương nhiên",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 1,
    "example": "你当然可以参加这个活动。",
    "examplePinyin": "Nǐ dāngrán kěyǐ cānjiā zhège huódòng.",
    "exampleVi": "Bạn tất nhiên có thể tham gia hoạt động này."
  },
  {
    "id": "yct5-tbi",
    "hanzi": "特别",
    "pinyin": "tè bié",
    "meaning": "đặc biệt",
    "category": "pho-tu",
    "lessonNumber": 1,
    "example": "今天特别冷",
    "examplePinyin": "jīn tiān tè bié lěng",
    "exampleVi": "Hôm nay đặc biệt lạnh"
  },
  {
    "id": "yct5-lhai",
    "hanzi": "厉害",
    "pinyin": "lì hai",
    "meaning": "ngầu, lợi hại, ghê gớm",
    "category": "tinh-tu",
    "lessonNumber": 1,
    "example": "他真厉害，什么都会。",
    "examplePinyin": "Tā zhēn lìhai, shénme dōu huì.",
    "exampleVi": "Anh ấy thật lợi hại, gì cũng biết."
  },
  {
    "id": "yct5-bngzh",
    "hanzi": "帮助",
    "pinyin": "bāng zhù",
    "meaning": "giúp đỡ, tương trợ",
    "category": "dong-tu",
    "lessonNumber": 1,
    "example": "谢谢你帮助我",
    "examplePinyin": "xiè xie nǐ bāng zhù wǒ",
    "exampleVi": "Cảm ơn bạn đã giúp đỡ tôi"
  },
  {
    "id": "yct5-birn",
    "hanzi": "别人",
    "pinyin": "bié rén",
    "meaning": "người khác, người ngoài",
    "category": "gia-dinh",
    "lessonNumber": 1,
    "example": "不要嘲笑别人",
    "examplePinyin": "Bú yào cháo xiào bié rén",
    "exampleVi": "Đừng cười chê người khác"
  },
  {
    "id": "yct5-dxing",
    "hanzi": "大象",
    "pinyin": "dà xiàng",
    "meaning": "con voi",
    "category": "thien-nhien",
    "lessonNumber": 2,
    "example": "孩子们在动物园看到了大象。",
    "examplePinyin": "Háizimen zài dòngwùyuán kàndàole dàxiàng.",
    "exampleVi": "Trẻ em đã thấy voi ở sở thú."
  },
  {
    "id": "yct5-tzi",
    "hanzi": "兔子",
    "pinyin": "tù zi",
    "meaning": "thỏ",
    "category": "thien-nhien",
    "lessonNumber": 2,
    "example": "兔子很可爱。",
    "examplePinyin": "Tùzi hěn kě'ài.",
    "exampleVi": "Thỏ rất dễ thương."
  },
  {
    "id": "yct5-hdi",
    "hanzi": "蝴蝶",
    "pinyin": "hú dié",
    "meaning": "con bướm",
    "category": "thien-nhien",
    "lessonNumber": 2,
    "example": "一只美丽的蝴蝶停在花朵上。",
    "examplePinyin": "yì zhī měi lì de hú dié tíng zài huā duǒ shàng.",
    "exampleVi": "Một chú bướm xinh đẹp đậu trên đóa hoa."
  },
  {
    "id": "yct5-chngzi",
    "hanzi": "虫子",
    "pinyin": "chóng zi",
    "meaning": "sâu bọ",
    "category": "thien-nhien",
    "lessonNumber": 2,
    "example": "树上有很多虫子。",
    "examplePinyin": "shù shàng yǒu hěn duō chóng zi.",
    "exampleVi": "Trên cây có rất nhiều sâu."
  },
  {
    "id": "yct5-wiba",
    "hanzi": "尾巴",
    "pinyin": "wěi ba",
    "meaning": "đuôi",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 2,
    "example": "小狗高兴地摇着尾巴。",
    "examplePinyin": "xiǎo gǒu gāo xìng de yáo zhe wěi ba.",
    "exampleVi": "Chú chó con vui vẻ vẫy đuôi."
  },
  {
    "id": "yct5-i",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "meaning": "thấp",
    "category": "tinh-tu",
    "lessonNumber": 2,
    "example": "我弟弟比我矮。",
    "examplePinyin": "wǒ dì di bǐ wǒ ǎi.",
    "exampleVi": "Em trai tôi thấp hơn tôi."
  },
  {
    "id": "yct5-png",
    "hanzi": "胖",
    "pinyin": "pàng",
    "meaning": "béo, mập",
    "category": "gia-dinh",
    "lessonNumber": 2,
    "example": "他很胖",
    "examplePinyin": "Tā hěn pàng",
    "exampleVi": "Anh ấy rất mập"
  },
  {
    "id": "yct5-dun",
    "hanzi": "短",
    "pinyin": "duǎn",
    "meaning": "ngắn",
    "category": "tinh-tu",
    "lessonNumber": 2,
    "example": "时间太短了",
    "examplePinyin": "shí jiān tài duǎn le",
    "exampleVi": "Thời gian quá ngắn"
  },
  {
    "id": "yct5-gng",
    "hanzi": "更",
    "pinyin": "gèng",
    "meaning": "hơn",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 2,
    "example": "今天更冷",
    "examplePinyin": "jīn tiān gèng lěng",
    "exampleVi": "Hôm nay lạnh hơn"
  },
  {
    "id": "yct5-toyn",
    "hanzi": "讨厌",
    "pinyin": "tǎo yàn",
    "meaning": "chán ghét",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 2,
    "example": "我很讨厌下雨天。",
    "examplePinyin": "Wǒ hěn tǎoyàn xiàyǔtiān.",
    "exampleVi": "Tôi rất ghét những ngày mưa."
  },
  {
    "id": "yct5-gosu",
    "hanzi": "告诉",
    "pinyin": "gào su",
    "meaning": "báo cho, nói cho ai biết",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 2,
    "example": "我告诉你一个秘密",
    "examplePinyin": "Wǒ gàosu nǐ yī gè mìmì",
    "exampleVi": "Tôi báo cho bạn một bí mật"
  },
  {
    "id": "yct5-jingli",
    "hanzi": "将来",
    "pinyin": "jiāng lái",
    "meaning": "tương lai",
    "category": "thoi-gian",
    "lessonNumber": 2,
    "example": "你将来想做什么工作？",
    "examplePinyin": "Nǐ jiānglái xiǎng zuò shénme gōngzuò?",
    "exampleVi": "Tương lai bạn muốn làm công việc gì?"
  },
  {
    "id": "yct5-lu",
    "hanzi": "楼",
    "pinyin": "lóu",
    "meaning": "tòa nhà, tầng",
    "category": "dem-tu",
    "lessonNumber": 3,
    "example": "楼房",
    "examplePinyin": "Lóu fáng",
    "exampleVi": "Nhà cao tầng"
  },
  {
    "id": "yct5-dint",
    "hanzi": "电梯",
    "pinyin": "diàn tī",
    "meaning": "thang máy",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "电梯坏了，我们得走楼梯。",
    "examplePinyin": "diàn tī huài le, wǒ men děi zǒu lóu tī.",
    "exampleVi": "Thang máy hỏng rồi, chúng ta phải đi cầu thang."
  },
  {
    "id": "yct5-kngtio",
    "hanzi": "空调",
    "pinyin": "kōng tiáo",
    "meaning": "máy điều hòa không khí; điều chỉnh nhiệt độ",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "夏天需要开空调。",
    "examplePinyin": "Xiàtiān xūyào kāi kōngtiáo.",
    "exampleVi": "Mùa hè cần bật điều hòa."
  },
  {
    "id": "yct5-chunghu",
    "hanzi": "窗户",
    "pinyin": "chuāng hu",
    "meaning": "cửa sổ",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "请打开窗户。",
    "examplePinyin": "Qǐng dǎkāi chuānghù.",
    "exampleVi": "Hãy mở cửa sổ."
  },
  {
    "id": "yct5-shf",
    "hanzi": "沙发",
    "pinyin": "shā fā",
    "meaning": "ghế sofa",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "他坐在沙发上看电视。",
    "examplePinyin": "tā zuò zài shā fā shàng kàn diàn shì.",
    "exampleVi": "Anh ấy ngồi trên ghế sofa xem ti vi."
  },
  {
    "id": "yct5-xshujin",
    "hanzi": "洗手间",
    "pinyin": "xǐ shǒu jiān",
    "meaning": "nhà vệ sinh",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 3,
    "example": "请问，洗手间在哪里？",
    "examplePinyin": "Qǐngwèn, xǐshǒujiān zài nǎli?",
    "exampleVi": "Xin hỏi, nhà vệ sinh ở đâu?"
  },
  {
    "id": "yct5-dng",
    "hanzi": "等",
    "pinyin": "děng",
    "meaning": "đợi, chờ đợi",
    "category": "dong-tu",
    "lessonNumber": 3,
    "example": "请等一下",
    "examplePinyin": "Qǐng děng yīxià",
    "exampleVi": "Xin hãy đợi một chút"
  },
  {
    "id": "yct5-zh",
    "hanzi": "住",
    "pinyin": "zhù",
    "meaning": "ở, cư trú, dừng lại",
    "category": "dong-tu",
    "lessonNumber": 3,
    "example": "我住在北京",
    "examplePinyin": "Wǒ zhù zài Běijīng",
    "exampleVi": "Tôi ở tại Bắc Kinh"
  },
  {
    "id": "yct5-cng",
    "hanzi": "层",
    "pinyin": "céng",
    "meaning": "tầng",
    "category": "dem-tu",
    "lessonNumber": 3,
    "example": "这栋楼有十层",
    "examplePinyin": "zhè dòng lóu yǒu shí céng",
    "exampleVi": "Tòa nhà này có mười tầng"
  },
  {
    "id": "yct5-hishi",
    "hanzi": "还是",
    "pinyin": "hái shi",
    "meaning": "hay là, hoặc (trong câu hỏi lựa chọn); vẫn, vẫn còn",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 3,
    "example": "你喜欢咖啡还是茶？",
    "examplePinyin": "Nǐ xǐhuan kāfēi háishì chá?",
    "exampleVi": "Bạn thích cà phê hay trà?"
  },
  {
    "id": "yct5-a",
    "hanzi": "啊",
    "pinyin": "a",
    "meaning": "trợ từ ngữ khí cuối câu: à, nhé, nhỉ; ồ, a (thán từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 3,
    "example": "是啊",
    "examplePinyin": "shì a",
    "exampleVi": "Vậy ạ/đúng vậy"
  },
  {
    "id": "yct5-fng",
    "hanzi": "放",
    "pinyin": "fàng",
    "meaning": "đặt, để, thả",
    "category": "dong-tu",
    "lessonNumber": 3,
    "example": "把书放在桌子上",
    "examplePinyin": "Bǎ shū fàng zài zhuōzi shàng",
    "exampleVi": "Đặt sách lên bàn"
  },
  {
    "id": "yct5-lnj",
    "hanzi": "邻居",
    "pinyin": "lín jū",
    "meaning": "hàng xóm",
    "category": "gia-dinh",
    "lessonNumber": 4,
    "example": "我的邻居很友好。",
    "examplePinyin": "Wǒ de línjū hěn yǒuhǎo.",
    "exampleVi": "Hàng xóm của tôi rất thân thiện."
  },
  {
    "id": "yct5-xgun",
    "hanzi": "习惯",
    "pinyin": "xí guàn",
    "meaning": "thói quen",
    "category": "gia-dinh",
    "lessonNumber": 4,
    "example": "早起是个好习惯",
    "examplePinyin": "zǎo qǐ shì gè hǎo xí guàn",
    "exampleVi": "Dậy sớm là một thói quen tốt"
  },
  {
    "id": "yct5-yhur",
    "hanzi": "一会儿",
    "pinyin": "yī huìr",
    "meaning": "một lát, một chốc, một lúc",
    "category": "thoi-gian",
    "lessonNumber": 4,
    "example": "请等我一会儿。",
    "examplePinyin": "Qǐng děng wǒ yīhuìr.",
    "exampleVi": "Xin hãy đợi tôi một lát."
  },
  {
    "id": "yct5-yqin",
    "hanzi": "以前",
    "pinyin": "yǐ qián",
    "meaning": "trước đây",
    "category": "pho-tu",
    "lessonNumber": 4,
    "example": "以前我住在这里",
    "examplePinyin": "yǐ qián wǒ zhù zài zhè li",
    "exampleVi": "Trước đây tôi sống ở đây"
  },
  {
    "id": "yct5-zhum",
    "hanzi": "周末",
    "pinyin": "zhōu mò",
    "meaning": "cuối tuần",
    "category": "thoi-gian",
    "lessonNumber": 4,
    "example": "周末你做什么",
    "examplePinyin": "zhōu mò nǐ zuò shén me",
    "exampleVi": "Cuối tuần bạn làm gì"
  },
  {
    "id": "yct5-di",
    "hanzi": "带",
    "pinyin": "dài",
    "meaning": "mang; mang theo",
    "category": "dong-tu",
    "lessonNumber": 4,
    "example": "请带身份证",
    "examplePinyin": "qǐng dài shēn fèn zhèng",
    "exampleVi": "Vui lòng mang theo thẻ căn cước"
  },
  {
    "id": "yct5-qgui",
    "hanzi": "奇怪",
    "pinyin": "qí guài",
    "meaning": "lạ thường, kỳ lạ",
    "category": "tinh-tu",
    "lessonNumber": 4,
    "example": "这件事情很奇怪。",
    "examplePinyin": "Zhè jiàn shìqíng hěn qíguài.",
    "exampleVi": "Việc này rất lạ thường."
  },
  {
    "id": "yct5-kfi",
    "hanzi": "咖啡",
    "pinyin": "kā fēi",
    "meaning": "cà phê",
    "category": "do-an-va-do-uong",
    "lessonNumber": 4,
    "example": "我每天早上都喝咖啡。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē kāfēi.",
    "exampleVi": "Tôi uống cà phê mỗi buổi sáng."
  },
  {
    "id": "yct5-tngngqn",
    "hanzi": "弹钢琴",
    "pinyin": "tán gāng qín",
    "meaning": "chơi piano",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 4,
    "example": "我会弹钢琴。",
    "examplePinyin": "Wǒ huì tán gāngqín.",
    "exampleVi": "Tôi biết chơi piano."
  },
  {
    "id": "yct5-gngyun",
    "hanzi": "公园",
    "pinyin": "gōng yuán",
    "meaning": "công viên",
    "category": "noi",
    "lessonNumber": 4,
    "example": "我们在公园散步",
    "examplePinyin": "wǒ men zài gōng yuán sàn bù",
    "exampleVi": "Chúng tôi đi dạo ở công viên"
  },
  {
    "id": "yct5-snb",
    "hanzi": "散步",
    "pinyin": "sàn bù",
    "meaning": "đi dạo, tản bộ",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 4,
    "example": "晚饭后，我们去公园散步。",
    "examplePinyin": "Wǎnfàn hòu, wǒmen qù gōngyuán sànbù.",
    "exampleVi": "Sau bữa tối, chúng ta đi dạo ở công viên."
  },
  {
    "id": "yct5-pshn",
    "hanzi": "爬山",
    "pinyin": "pá shān",
    "meaning": "leo núi",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 4,
    "example": "我们周末去爬山",
    "examplePinyin": "wǒ men zhōu mò qù pá shān",
    "exampleVi": "Cuối tuần chúng tôi đi leo núi"
  },
  {
    "id": "yct5-rzi",
    "hanzi": "儿子",
    "pinyin": "ér zi",
    "meaning": "con trai",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "我儿子今年五岁。",
    "examplePinyin": "Wǒ érzi jīnnián wǔ suì.",
    "exampleVi": "Con trai tôi năm nay năm tuổi."
  },
  {
    "id": "yct5-y",
    "hanzi": "阿姨",
    "pinyin": "ā yí",
    "meaning": "dì",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "阿姨，请问洗手间在哪里？",
    "examplePinyin": "ā yí, qǐng wèn xǐ shǒu jiān zài nǎ lǐ?",
    "exampleVi": "Cô ơi, cho cháu hỏi nhà vệ sinh ở đâu ạ?"
  },
  {
    "id": "yct5-shui",
    "hanzi": "帅",
    "pinyin": "shuài",
    "meaning": "đẹp trai, phong độ, ngầu",
    "category": "tinh-tu",
    "lessonNumber": 5,
    "example": "他哥哥长得很帅。",
    "examplePinyin": "tā gē ge zhǎng de hěn shuài.",
    "exampleVi": "Anh trai cậu ấy rất đẹp trai."
  },
  {
    "id": "yct5-nr",
    "hanzi": "女儿",
    "pinyin": "nǚ'ér",
    "meaning": "con gái",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "这是我女儿",
    "examplePinyin": "Zhè shì wǒ nǚ'ér",
    "exampleVi": "Đây là con gái tôi"
  },
  {
    "id": "yct5-ninqng",
    "hanzi": "年轻",
    "pinyin": "nián qīng",
    "meaning": "trẻ",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "她很年轻",
    "examplePinyin": "tā hěn nián qīng",
    "exampleVi": "Cô ấy rất trẻ"
  },
  {
    "id": "yct5-zhoxing",
    "hanzi": "照相",
    "pinyin": "zhào xiàng",
    "meaning": "chụp ảnh",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 5,
    "example": "我们去照相吧",
    "examplePinyin": "wǒ men qù zhào xiàng ba",
    "exampleVi": "Chúng tôi đi chụp ảnh nhé"
  },
  {
    "id": "yct5-zhng",
    "hanzi": "张",
    "pinyin": "zhāng",
    "meaning": "tờ, tấm, chiếc (lượng từ cho vật phẳng như giấy, bàn, giường); mở, giương ra",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 5,
    "example": "我买了一张桌子。",
    "examplePinyin": "Wǒ mǎi le yì zhāng zhuōzi.",
    "exampleVi": "Tôi mua một cái bàn."
  },
  {
    "id": "yct5-zhopin",
    "hanzi": "照片",
    "pinyin": "zhào piàn",
    "meaning": "bức ảnh",
    "category": "khac",
    "lessonNumber": 5,
    "example": "这张照片很漂亮",
    "examplePinyin": "zhè zhāng zhào piàn hěn piào liang",
    "exampleVi": "Bức ảnh này rất đẹp"
  },
  {
    "id": "yct5-dume",
    "hanzi": "多么",
    "pinyin": "duō me",
    "meaning": "đến mức nào, làm sao",
    "category": "pho-tu",
    "lessonNumber": 5,
    "example": "多么漂亮的风景",
    "examplePinyin": "duō me piào liang de fēng jǐng",
    "exampleVi": "Cảnh đẹp biết mấy"
  },
  {
    "id": "yct5-hizi",
    "hanzi": "孩子",
    "pinyin": "hái zi",
    "meaning": "đứa trẻ, trẻ em",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "他们有一个孩子",
    "examplePinyin": "Tāmen yǒu yī gè háizi",
    "exampleVi": "Họ có một đứa con"
  },
  {
    "id": "yct5-shshu",
    "hanzi": "叔叔",
    "pinyin": "shū shu",
    "meaning": "chú",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "叔叔给了我一本书。",
    "examplePinyin": "shū shu gěi le wǒ yī běn shū.",
    "exampleVi": "Chú cho tôi một quyển sách."
  },
  {
    "id": "yct5-snzi",
    "hanzi": "孙子",
    "pinyin": "sūn zi",
    "meaning": "cháu trai",
    "category": "gia-dinh",
    "lessonNumber": 5,
    "example": "我的孙子已经上小学了。",
    "examplePinyin": "Wǒ de sūnzi yǐjīng shàng xiǎoxué le.",
    "exampleVi": "Cháu trai tôi đã vào tiểu học."
  },
  {
    "id": "yct5-zhn",
    "hanzi": "站",
    "pinyin": "zhàn",
    "meaning": "đứng",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 6,
    "example": "请站起来。",
    "examplePinyin": "qǐng zhàn qǐ lái.",
    "exampleVi": "Vui lòng đứng dậy."
  },
  {
    "id": "yct5-zhe",
    "hanzi": "着",
    "pinyin": "zhe",
    "meaning": "trợ từ chỉ hành động hoặc trạng thái đang tiếp diễn, duy trì (开着门: cửa đang mở)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 6,
    "example": "他看着书",
    "examplePinyin": "Tā kànzhe shū",
    "exampleVi": "Anh ấy đang đọc sách"
  },
  {
    "id": "yct5-di-dai",
    "hanzi": "戴",
    "pinyin": "dài",
    "meaning": "đeo",
    "category": "dong-tu",
    "lessonNumber": 6,
    "example": "外面很冷，戴上帽子吧。",
    "examplePinyin": "wài miàn hěn lěng, dài shàng mào zi ba.",
    "exampleVi": "Bên ngoài rất lạnh, đội mũ vào đi."
  },
  {
    "id": "yct5-ynjng",
    "hanzi": "眼镜",
    "pinyin": "yǎn jìng",
    "meaning": "kính (mắt)",
    "category": "khac",
    "lessonNumber": 6,
    "example": "我的眼镜找不到了。",
    "examplePinyin": "wǒ de yǎn jìng zhǎo bu dào le.",
    "exampleVi": "Tôi không tìm thấy kính của mình nữa."
  },
  {
    "id": "yct5-cu",
    "hanzi": "错",
    "pinyin": "cuò",
    "meaning": "sai, lầm; sai lầm; lẫn lộn",
    "category": "tinh-tu",
    "lessonNumber": 6,
    "example": "我写错了",
    "examplePinyin": "Wǒ xiěcuòle",
    "exampleVi": "Tôi viết sai rồi"
  },
  {
    "id": "yct5-dji",
    "hanzi": "大家",
    "pinyin": "dà jiā",
    "meaning": "mọi người",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 6,
    "example": "大家好",
    "examplePinyin": "dà jiā hǎo",
    "exampleVi": "Chào mọi người"
  },
  {
    "id": "yct5-knjin",
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
    "id": "yct5-xingqun",
    "hanzi": "项圈",
    "pinyin": "xiàng quān",
    "meaning": "vòng cổ",
    "category": "khac",
    "lessonNumber": 6,
    "example": "小狗的项圈是红色的。",
    "examplePinyin": "xiǎo gǒu de xiàng quān shì hóng sè de.",
    "exampleVi": "Vòng cổ của chú chó con màu đỏ."
  },
  {
    "id": "yct5-linx",
    "hanzi": "联系",
    "pinyin": "lián xì",
    "meaning": "liên lạc, liên hệ",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 6,
    "example": "请通过电话跟我联系。",
    "examplePinyin": "Qǐng tōngguò diànhuà gēn wǒ liánxì.",
    "exampleVi": "Vui lòng liên lạc với tôi qua điện thoại."
  },
  {
    "id": "yct5-hom",
    "hanzi": "号码",
    "pinyin": "hào mǎ",
    "meaning": "Số",
    "category": "khac",
    "lessonNumber": 6,
    "example": "请告诉我你的电话号码。",
    "examplePinyin": "Qǐng gàosù wǒ nǐ de diànhuà hàomǎ.",
    "exampleVi": "Hãy cho tôi biết số điện thoại của bạn."
  },
  {
    "id": "yct5-xunz",
    "hanzi": "选择",
    "pinyin": "xuǎn zé",
    "meaning": "chọn; lựa chọn",
    "category": "dong-tu",
    "lessonNumber": 7,
    "example": "你可以选择你喜欢的颜色。",
    "examplePinyin": "nǐ kě yǐ xuǎn zé nǐ xǐ huan de yán sè.",
    "exampleVi": "Bạn có thể chọn màu mình thích."
  },
  {
    "id": "yct5-jngchng",
    "hanzi": "经常",
    "pinyin": "jīng cháng",
    "meaning": "thường xuyên",
    "category": "pho-tu",
    "lessonNumber": 7,
    "example": "我经常去图书馆。",
    "examplePinyin": "wǒ jīng cháng qù tú shū guǎn.",
    "exampleVi": "Tôi thường xuyên đi thư viện."
  },
  {
    "id": "yct5-dunlin",
    "hanzi": "锻炼",
    "pinyin": "duàn liàn",
    "meaning": "tập thể dục",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 7,
    "example": "我每天早上都锻炼身体。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu duànliàn shēntǐ.",
    "exampleVi": "Tôi đều tập thể dục vào mỗi buổi sáng."
  },
  {
    "id": "yct5-jinkng",
    "hanzi": "健康",
    "pinyin": "jiàn kāng",
    "meaning": "khỏe mạnh",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 7,
    "example": "祝你健康",
    "examplePinyin": "zhù nǐ jiàn kāng",
    "exampleVi": "Chúc bạn khỏe mạnh"
  },
  {
    "id": "yct5-xnqng",
    "hanzi": "心情",
    "pinyin": "xīn qíng",
    "meaning": "tâm trạng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 7,
    "example": "我今天心情很好",
    "examplePinyin": "wǒ jīn tiān xīn qíng hěn hǎo",
    "exampleVi": "Hôm nay tâm trạng tôi rất tốt"
  },
  {
    "id": "yct5-lihn",
    "hanzi": "流汗",
    "pinyin": "liú hàn",
    "meaning": "đổ mồ hôi",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 7,
    "example": "天气很热，我一直在流汗。",
    "examplePinyin": "Tiānqì hěn rè, wǒ yīzhí zài liúhàn.",
    "exampleVi": "Thời tiết rất nóng, tôi cứ đổ mồ hôi liên tục."
  },
  {
    "id": "yct5-wngqi",
    "hanzi": "网球",
    "pinyin": "wǎng qiú",
    "meaning": "quần vợt",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 7,
    "example": "他喜欢打网球",
    "examplePinyin": "tā xǐ huan dǎ wǎng qiú",
    "exampleVi": "Anh ấy thích chơi quần vợt"
  },
  {
    "id": "yct5-piqi",
    "hanzi": "排球",
    "pinyin": "pái qiú",
    "meaning": "bóng chuyền",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 7,
    "example": "我们打排球吧",
    "examplePinyin": "wǒ men dǎ pái qiú ba",
    "exampleVi": "Chúng tôi chơi bóng chuyền nhé"
  },
  {
    "id": "yct5-pngpngqi",
    "hanzi": "乒乓球",
    "pinyin": "pīng pāng qiú",
    "meaning": "bóng bàn",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 7,
    "example": "我喜欢打乒乓球。",
    "examplePinyin": "Wǒ xǐhuān dǎ pīngpāngqiú.",
    "exampleVi": "Tôi thích chơi bóng bàn."
  },
  {
    "id": "yct5-tygun",
    "hanzi": "体育馆",
    "pinyin": "tǐ yù guǎn",
    "meaning": "nhà thi đấu",
    "category": "noi",
    "lessonNumber": 7,
    "example": "体育馆里有很多比赛",
    "examplePinyin": "tǐ yù guǎn lǐ yǒu hěn duō bǐ sài",
    "exampleVi": "Trong nhà thi đấu có nhiều trận đấu"
  },
  {
    "id": "yct5-qng",
    "hanzi": "晴",
    "pinyin": "qíng",
    "meaning": "nắng, trong",
    "category": "tinh-tu",
    "lessonNumber": 8,
    "example": "今天很晴",
    "examplePinyin": "jīn tiān hěn qíng",
    "exampleVi": "Hôm nay trời tạnh nắng"
  },
  {
    "id": "yct5-yn",
    "hanzi": "阴",
    "pinyin": "yīn",
    "meaning": "u ám",
    "category": "tinh-tu",
    "lessonNumber": 8,
    "example": "今天天阴",
    "examplePinyin": "jīn tiān tiān yīn",
    "exampleVi": "Hôm nay trời âm u"
  },
  {
    "id": "yct5-gufng",
    "hanzi": "刮风",
    "pinyin": "guā fēng",
    "meaning": "gió thổi",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "外面在刮风。",
    "examplePinyin": "Wàimiàn zài guāfēng.",
    "exampleVi": "Bên ngoài đang gió."
  },
  {
    "id": "yct5-chntin",
    "hanzi": "春天",
    "pinyin": "chūn tiān",
    "meaning": "mùa xuân",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "春天来了",
    "examplePinyin": "chūn tiān lái le",
    "exampleVi": "Mùa xuân đến rồi"
  },
  {
    "id": "yct5-xitin",
    "hanzi": "夏天",
    "pinyin": "xià tiān",
    "meaning": "mùa hè",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "夏天很热",
    "examplePinyin": "xià tiān hěn rè",
    "exampleVi": "Mùa hè rất nóng"
  },
  {
    "id": "yct5-qitin",
    "hanzi": "秋天",
    "pinyin": "qiū tiān",
    "meaning": "mùa thu",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "秋天到了",
    "examplePinyin": "qiū tiān dào le",
    "exampleVi": "Mùa thu đến rồi"
  },
  {
    "id": "yct5-dngtin",
    "hanzi": "冬天",
    "pinyin": "dōng tiān",
    "meaning": "mùa đông",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "冬天很冷",
    "examplePinyin": "dōng tiān hěn lěng",
    "exampleVi": "Mùa đông rất lạnh"
  },
  {
    "id": "yct5-binhu",
    "hanzi": "变化",
    "pinyin": "biàn huà",
    "meaning": "thay đổi, biến đổi",
    "category": "khac",
    "lessonNumber": 8,
    "example": "这几年家乡的变化很大。",
    "examplePinyin": "Zhè jǐ nián jiāxiāng de biànhuà hěn dà.",
    "exampleVi": "Vài năm qua quê hương thay đổi rất lớn."
  },
  {
    "id": "yct5-ygng",
    "hanzi": "一共",
    "pinyin": "yī gòng",
    "meaning": "tổng cộng",
    "category": "dem-tu",
    "lessonNumber": 8,
    "example": "一共三个人",
    "examplePinyin": "yī gòng sān gè rén",
    "exampleVi": "Tổng cộng ba người"
  },
  {
    "id": "yct5-jji",
    "hanzi": "季节",
    "pinyin": "jì jié",
    "meaning": "mùa",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "你最喜欢哪个季节？",
    "examplePinyin": "nǐ zuì xǐ huan nǎ ge jì jié?",
    "exampleVi": "Bạn thích mùa nào nhất?"
  },
  {
    "id": "yct5-nunhuo",
    "hanzi": "暖和",
    "pinyin": "nuǎn huo",
    "meaning": "ấm áp, ấm; dễ chịu",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "今天天气很暖和。",
    "examplePinyin": "jīn tiān tiān qì hěn nuǎn huo.",
    "exampleVi": "Hôm nay trời rất ấm áp."
  },
  {
    "id": "yct5-doch",
    "hanzi": "到处",
    "pinyin": "dào chù",
    "meaning": "khắp nơi",
    "category": "noi",
    "lessonNumber": 8,
    "example": "到处都是花",
    "examplePinyin": "dào chù dōu shì huā",
    "exampleVi": "Khắp nơi đều là hoa"
  },
  {
    "id": "yct5-lingkuai",
    "hanzi": "凉快",
    "pinyin": "liáng kuai",
    "meaning": "mát mẻ",
    "category": "thien-nhien",
    "lessonNumber": 8,
    "example": "今天很凉快",
    "examplePinyin": "jīn tiān hěn liáng kuai",
    "exampleVi": "Hôm nay rất mát mẻ"
  },
  {
    "id": "yct5-duxurn",
    "hanzi": "堆雪人",
    "pinyin": "duī xuě rén",
    "meaning": "đắp người tuyết",
    "category": "khac",
    "lessonNumber": 8,
    "example": "下雪了，我们去堆雪人吧！",
    "examplePinyin": "xià xuě le, wǒ men qù duī xuě rén ba!",
    "exampleVi": "Tuyết rơi rồi, chúng ta đi đắp người tuyết đi!"
  },
  {
    "id": "yct5-ynlio",
    "hanzi": "饮料",
    "pinyin": "yǐn liào",
    "meaning": "đồ uống: các loại thức uống (nước ngọt, nước trái cây, trà, v.v.); bao gồm cả đồ uống có cồn và không cồn, nhưng thường hiểu là đồ uống không cồn.",
    "category": "do-an-va-do-uong",
    "lessonNumber": 9,
    "example": "超市里有很多种饮料可以选择",
    "examplePinyin": "Chāoshì lǐ yǒu hěn duō zhǒng yǐnliào kěyǐ xuǎnzé",
    "exampleVi": "Trong siêu thị có rất nhiều loại đồ uống để lựa chọn"
  },
  {
    "id": "yct5-qiokl",
    "hanzi": "巧克力",
    "pinyin": "qiǎo kè lì",
    "meaning": "sô cô la",
    "category": "do-an-va-do-uong",
    "lessonNumber": 9,
    "example": "我很喜欢吃巧克力。",
    "examplePinyin": "wǒ hěn xǐ huan chī qiǎo kè lì.",
    "exampleVi": "Tôi rất thích ăn sô cô la."
  },
  {
    "id": "yct5-bnggn",
    "hanzi": "饼干",
    "pinyin": "bǐng gān",
    "meaning": "bánh quy",
    "category": "do-an-va-do-uong",
    "lessonNumber": 9,
    "example": "我想吃饼干。",
    "examplePinyin": "Wǒ xiǎng chī bǐnggān.",
    "exampleVi": "Tôi muốn ăn bánh quy."
  },
  {
    "id": "yct5-bngjlng",
    "hanzi": "冰激凌",
    "pinyin": "bīng jī líng",
    "meaning": "kem",
    "category": "do-an-va-do-uong",
    "lessonNumber": 9,
    "example": "夏天吃冰激凌很舒服。",
    "examplePinyin": "Xiàtiān chī bīngjīlíng hěn shūfu.",
    "exampleVi": "Mùa hè ăn kem rất thoải mái."
  },
  {
    "id": "yct5-wnj",
    "hanzi": "玩具",
    "pinyin": "wán jù",
    "meaning": "đồ chơi",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 9,
    "example": "这些玩具都是我弟弟的。",
    "examplePinyin": "zhè xiē wán jù dōu shì wǒ dì di de.",
    "exampleVi": "Những đồ chơi này đều là của em trai tôi."
  },
  {
    "id": "yct5-chosh",
    "hanzi": "超市",
    "pinyin": "chāo shì",
    "meaning": "siêu thị",
    "category": "noi",
    "lessonNumber": 9,
    "example": "我们去超市买东西",
    "examplePinyin": "wǒ men qù chāo shì mǎi dōng xi",
    "exampleVi": "Chúng tôi đi siêu thị mua đồ"
  },
  {
    "id": "yct5-shubio",
    "hanzi": "手表",
    "pinyin": "shǒu biǎo",
    "meaning": "đồng hồ đeo tay",
    "category": "khac",
    "lessonNumber": 9,
    "example": "我有一块新手表",
    "examplePinyin": "wǒ yǒu yī kuài xīn shǒu biǎo",
    "exampleVi": "Tôi có một chiếc đồng hồ đeo tay mới"
  },
  {
    "id": "yct5-jde",
    "hanzi": "记得",
    "pinyin": "jì de",
    "meaning": "nhớ, không quên",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 9,
    "example": "我记得你",
    "examplePinyin": "Wǒ jì de nǐ",
    "exampleVi": "Tôi nhớ bạn"
  },
  {
    "id": "yct5-yjng",
    "hanzi": "已经",
    "pinyin": "yǐ jīng",
    "meaning": "đã",
    "category": "pho-tu",
    "lessonNumber": 9,
    "example": "我已经吃饭了",
    "examplePinyin": "wǒ yǐ jīng chī fàn le",
    "exampleVi": "Tôi đã ăn cơm rồi"
  },
  {
    "id": "yct5-bnf",
    "hanzi": "办法",
    "pinyin": "bàn fǎ",
    "meaning": "cách",
    "category": "cong-viec",
    "lessonNumber": 9,
    "example": "我没办法了。",
    "examplePinyin": "wǒ méi bàn fǎ le.",
    "exampleVi": "Tôi không còn cách nào."
  },
  {
    "id": "yct5-chng",
    "hanzi": "尝",
    "pinyin": "cháng",
    "meaning": "thử",
    "category": "do-an-va-do-uong",
    "lessonNumber": 9,
    "example": "你尝一尝这个菜。",
    "examplePinyin": "nǐ cháng yī cháng zhè ge cài.",
    "exampleVi": "Bạn nếm thử món này xem."
  },
  {
    "id": "yct5-pinyi",
    "hanzi": "便宜",
    "pinyin": "pián yi",
    "meaning": "rẻ",
    "category": "tinh-tu",
    "lessonNumber": 9,
    "example": "这家店的东西很便宜。",
    "examplePinyin": "zhè jiā diàn de dōng xi hěn pián yi.",
    "exampleVi": "Đồ vật ở cửa hàng này rất rẻ."
  },
  {
    "id": "yct5-kosh",
    "hanzi": "考试",
    "pinyin": "kǎo shì",
    "meaning": "thi, kỳ thi",
    "category": "hoc",
    "lessonNumber": 10,
    "example": "明天有考试",
    "examplePinyin": "Míngtiān yǒu kǎoshì",
    "exampleVi": "Ngày mai có thi"
  },
  {
    "id": "yct5-chngj",
    "hanzi": "成绩",
    "pinyin": "chéng jì",
    "meaning": "thành tích; điểm số",
    "category": "hoc",
    "lessonNumber": 10,
    "example": "考试成绩很好",
    "examplePinyin": "kǎo shì chéng jì hěn hǎo",
    "exampleVi": "Điểm thi rất tốt"
  },
  {
    "id": "yct5-liotinr",
    "hanzi": "聊天儿",
    "pinyin": "liáo tiānr",
    "meaning": "Trò chuyện, tán gẫu",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 10,
    "example": "我们坐下来好好聊天儿吧。",
    "examplePinyin": "Wǒmen zuò xiàlái hǎohǎo liáo tiānr ba.",
    "exampleVi": "Chúng ta ngồi xuống trò chuyện tử tế đi."
  },
  {
    "id": "yct5-ydng",
    "hanzi": "一定",
    "pinyin": "yī dìng",
    "meaning": "nhất định",
    "category": "pho-tu",
    "lessonNumber": 10,
    "example": "我一定去",
    "examplePinyin": "wǒ yī dìng qù",
    "exampleVi": "Tôi nhất định sẽ đi"
  },
  {
    "id": "yct5-rnzhn",
    "hanzi": "认真",
    "pinyin": "rèn zhēn",
    "meaning": "nghiêm túc, kỹ càng, có trách nhiệm",
    "category": "gia-dinh",
    "lessonNumber": 10,
    "example": "他工作很认真",
    "examplePinyin": "Tā gōngzuò hěn rènzhēn",
    "exampleVi": "Anh ấy làm việc rất nghiêm túc"
  },
  {
    "id": "yct5-linx-lianxi",
    "hanzi": "练习",
    "pinyin": "liàn xí",
    "meaning": "luyện tập",
    "category": "hoc",
    "lessonNumber": 10,
    "example": "我每天练习汉语",
    "examplePinyin": "wǒ měi tiān liàn xí hàn yǔ",
    "exampleVi": "Tôi mỗi ngày luyện tập tiếng Trung"
  },
  {
    "id": "yct5-yuliyu",
    "hanzi": "越来越",
    "pinyin": "yuè lái yuè",
    "meaning": "càng ngày càng",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 10,
    "example": "天气越来越冷",
    "examplePinyin": "tiān qì yuè lái yuè lěng",
    "exampleVi": "Thời tiết càng ngày càng lạnh"
  },
  {
    "id": "yct5-xingxn",
    "hanzi": "相信",
    "pinyin": "xiāng xìn",
    "meaning": "tin tưởng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 10,
    "example": "我相信你",
    "examplePinyin": "wǒ xiāng xìn nǐ",
    "exampleVi": "Tôi tin tưởng bạn"
  },
  {
    "id": "yct5-fx",
    "hanzi": "复习",
    "pinyin": "fù xí",
    "meaning": "ôn tập",
    "category": "hoc",
    "lessonNumber": 10,
    "example": "我正在复习考试",
    "examplePinyin": "wǒ zhèng zài fù xí kǎo shì",
    "exampleVi": "Tôi đang ôn thi"
  },
  {
    "id": "yct5-zhnbi",
    "hanzi": "准备",
    "pinyin": "zhǔn bèi",
    "meaning": "chuẩn bị, dự định, sắp sửa",
    "category": "dong-tu",
    "lessonNumber": 10,
    "example": "我们正在准备考试。",
    "examplePinyin": "wǒ men zhèng zài zhǔn bèi kǎo shì.",
    "exampleVi": "Chúng tôi đang chuẩn bị cho kỳ thi."
  },
  {
    "id": "yct5-nl",
    "hanzi": "努力",
    "pinyin": "nǔ lì",
    "meaning": "cố gắng",
    "category": "cong-viec",
    "lessonNumber": 10,
    "example": "我会努力学习的",
    "examplePinyin": "wǒ huì nǔ lì xué xí de",
    "exampleVi": "Tôi sẽ cố gắng học tập"
  },
  {
    "id": "yct5-koy",
    "hanzi": "烤鸭",
    "pinyin": "kǎo yā",
    "meaning": "vịt quay, vịt nướng; món ăn nổi tiếng của Bắc Kinh",
    "category": "do-an-va-do-uong",
    "lessonNumber": 11,
    "example": "北京烤鸭很有名。",
    "examplePinyin": "Běijīng kǎoyā hěn yǒumíng.",
    "exampleVi": "Vịt quay Bắc Kinh rất nổi tiếng."
  },
  {
    "id": "yct5-fwyun",
    "hanzi": "服务员",
    "pinyin": "fúwùyuán",
    "meaning": "nhân viên phục vụ, phục vụ viên",
    "category": "cong-viec",
    "lessonNumber": 11,
    "example": "服务员来了",
    "examplePinyin": "Fúwùyuán lái le",
    "exampleVi": "Nhân viên phục vụ đến rồi"
  },
  {
    "id": "yct5-pnzi",
    "hanzi": "盘子",
    "pinyin": "pán zi",
    "meaning": "đĩa, mâm",
    "category": "do-an-va-do-uong",
    "lessonNumber": 11,
    "example": "请把盘子洗干净。",
    "examplePinyin": "Qǐng bǎ pánzi xǐ gānjìng.",
    "exampleVi": "Vui lòng rửa đĩa sạch."
  },
  {
    "id": "yct5-wn",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "meaning": "cái bát",
    "category": "dem-tu",
    "lessonNumber": 11,
    "example": "给我一碗饭",
    "examplePinyin": "gěi wǒ yī wǎn fàn",
    "exampleVi": "Cho tôi một bát cơm"
  },
  {
    "id": "yct5-kuizi",
    "hanzi": "筷子",
    "pinyin": "kuài zi",
    "meaning": "đũa",
    "category": "do-an-va-do-uong",
    "lessonNumber": 11,
    "example": "中国人用筷子吃饭。",
    "examplePinyin": "Zhōngguó rén yòng kuàizi chīfàn.",
    "exampleVi": "Người Trung Quốc dùng đũa để ăn cơm."
  },
  {
    "id": "yct5-chzi",
    "hanzi": "叉子",
    "pinyin": "chā zi",
    "meaning": "cái nĩa",
    "category": "nha-va-cuoc-song",
    "lessonNumber": 11,
    "example": "请给我一把叉子",
    "examplePinyin": "Qǐng gěi wǒ yì bǎ chāzi",
    "exampleVi": "Làm ơn cho tôi một cái nĩa"
  },
  {
    "id": "yct5-yngru",
    "hanzi": "羊肉",
    "pinyin": "yáng ròu",
    "meaning": "thịt cừu",
    "category": "do-an-va-do-uong",
    "lessonNumber": 11,
    "example": "羊肉火锅很好吃。",
    "examplePinyin": "Yángròu huǒguō hěn hǎochī.",
    "exampleVi": "Lẩu cừu rất ngon."
  },
  {
    "id": "yct5-tng",
    "hanzi": "汤",
    "pinyin": "tāng",
    "meaning": "canh, súp",
    "category": "do-an-va-do-uong",
    "lessonNumber": 11,
    "example": "我想喝一碗鸡蛋汤。",
    "examplePinyin": "wǒ xiǎng hē yī wǎn jī dàn tāng.",
    "exampleVi": "Tôi muốn ăn một bát canh trứng."
  },
  {
    "id": "yct5-qt",
    "hanzi": "其他",
    "pinyin": "qí tā",
    "meaning": "khác",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "lessonNumber": 11,
    "example": "其他人",
    "examplePinyin": "qí tā rén",
    "exampleVi": "những người khác"
  },
  {
    "id": "yct5-yng",
    "hanzi": "用",
    "pinyin": "yòng",
    "meaning": "dùng, sử dụng",
    "category": "dong-tu",
    "lessonNumber": 11,
    "example": "我用电脑",
    "examplePinyin": "Wǒ yòng diànnǎo",
    "exampleVi": "Tôi dùng máy tính"
  },
  {
    "id": "yct5-lki",
    "hanzi": "离开",
    "pinyin": "lí kāi",
    "meaning": "rời khỏi",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 11,
    "example": "我明天要离开这个城市。",
    "examplePinyin": "wǒ míng tiān yào lí kāi zhè ge chéng shì.",
    "exampleVi": "Ngày mai tôi phải rời khỏi thành phố này."
  },
  {
    "id": "yct5-shung",
    "hanzi": "双",
    "pinyin": "shuāng",
    "meaning": "đôi; cặp; hai",
    "category": "dem-tu",
    "lessonNumber": 11,
    "example": "我买了一双新鞋。",
    "examplePinyin": "Wǒ mǎi le yì shuāng xīn xié.",
    "exampleVi": "Tôi mua một đôi giày mới."
  },
  {
    "id": "yct5-dti",
    "hanzi": "地铁",
    "pinyin": "dì tiě",
    "meaning": "tàu điện ngầm",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 12,
    "example": "坐地铁",
    "examplePinyin": "zuò dì tiě",
    "exampleVi": "Đi tàu điện ngầm"
  },
  {
    "id": "yct5-huch",
    "hanzi": "火车",
    "pinyin": "huǒ chē",
    "meaning": "tàu hỏa, tàu lửa",
    "category": "giao-thong-va-giao-thong",
    "lessonNumber": 12,
    "example": "坐火车去北京",
    "examplePinyin": "Zuò huǒchē qù Běijīng",
    "exampleVi": "Đi tàu hỏa đến Bắc Kinh"
  },
  {
    "id": "yct5-huzh",
    "hanzi": "或者",
    "pinyin": "huò zhě",
    "meaning": "hoặc",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 12,
    "example": "你可以喝茶或者咖啡",
    "examplePinyin": "nǐ kě yǐ hē chá huò zhě kā fēi",
    "exampleVi": "Bạn có thể uống trà hoặc cà phê"
  },
  {
    "id": "yct5-fngbin",
    "hanzi": "方便",
    "pinyin": "fāng biàn",
    "meaning": "thuận tiện",
    "category": "tinh-tu",
    "lessonNumber": 12,
    "example": "很方便",
    "examplePinyin": "hěn fāng biàn",
    "exampleVi": "Rất thuận tiện"
  },
  {
    "id": "yct5-knng",
    "hanzi": "可能",
    "pinyin": "kě néng",
    "meaning": "có thể",
    "category": "pho-tu",
    "lessonNumber": 12,
    "example": "明天可能下雨",
    "examplePinyin": "míng tiān kě néng xià yǔ",
    "exampleVi": "Ngày mai có thể mưa"
  },
  {
    "id": "yct5-dnxn",
    "hanzi": "担心",
    "pinyin": "dān xīn",
    "meaning": "lo lắng",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 12,
    "example": "我很担心他的健康。",
    "examplePinyin": "Wǒ hěn dānxīn tā de jiànkāng.",
    "exampleVi": "Tôi rất lo lắng cho sức khỏe của anh ấy."
  },
  {
    "id": "yct5-rgu",
    "hanzi": "如果",
    "pinyin": "rú guǒ",
    "meaning": "nếu",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 12,
    "example": "如果明天不下雨，我们就去",
    "examplePinyin": "rú guǒ míng tiān bù xià yǔ, wǒ men jiù qù",
    "exampleVi": "Nếu mai không mưa, chúng ta sẽ đi"
  },
  {
    "id": "yct5-nme",
    "hanzi": "那么",
    "pinyin": "nà me",
    "meaning": "vậy thì; như vậy",
    "category": "pho-tu",
    "lessonNumber": 12,
    "example": "那么，我们走吧",
    "examplePinyin": "nà me, wǒ men zǒu ba",
    "exampleVi": "Vậy thì chúng ta đi thôi"
  },
  {
    "id": "yct5-gngzu",
    "hanzi": "工作",
    "pinyin": "gōng zuò",
    "meaning": "công việc, làm việc",
    "category": "cong-viec",
    "lessonNumber": 12,
    "example": "我在工作",
    "examplePinyin": "Wǒ zài gōngzuò",
    "exampleVi": "Tôi đang làm việc"
  },
  {
    "id": "yct5-chchi",
    "hanzi": "出差",
    "pinyin": "chū chāi",
    "meaning": "đi công tác",
    "category": "cong-viec",
    "lessonNumber": 12,
    "example": "他去出差了",
    "examplePinyin": "Tā qù chūchāi le",
    "exampleVi": "Anh ấy đi công tác rồi."
  },
  {
    "id": "yct5-nqun",
    "hanzi": "安全",
    "pinyin": "ān quán",
    "meaning": "an toàn",
    "category": "khac",
    "lessonNumber": 12,
    "example": "请注意安全。",
    "examplePinyin": "qǐng zhù yì ān quán.",
    "exampleVi": "Vui lòng chú ý an toàn."
  },
  {
    "id": "yct5-zhnsh",
    "hanzi": "准时",
    "pinyin": "zhǔn shí",
    "meaning": "đúng giờ",
    "category": "pho-tu",
    "lessonNumber": 12,
    "example": "会议准时开始。",
    "examplePinyin": "Huìyì zhǔnshí kāishǐ.",
    "exampleVi": "Cuộc họp bắt đầu đúng giờ."
  },
  {
    "id": "yct5-shuy",
    "hanzi": "刷牙",
    "pinyin": "shuā yá",
    "meaning": "đánh răng",
    "category": "dong-tu",
    "lessonNumber": 13,
    "example": "我每天早晚都刷牙。",
    "examplePinyin": "wǒ měi tiān zǎo wǎn dōu shuā yá.",
    "exampleVi": "Sáng và tối nào tôi cũng đánh răng."
  },
  {
    "id": "yct5-hshi",
    "hanzi": "护士",
    "pinyin": "hù shi",
    "meaning": "y tá",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "她是医院的护士。",
    "examplePinyin": "Tā shì yīyuàn de hùshi.",
    "exampleVi": "Cô ấy là y tá bệnh viện."
  },
  {
    "id": "yct5-dzi",
    "hanzi": "肚子",
    "pinyin": "dù zi",
    "meaning": "bụng",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "我肚子饿了。",
    "examplePinyin": "wǒ dù zi è le.",
    "exampleVi": "Tôi đang đói bụng."
  },
  {
    "id": "yct5-fsho",
    "hanzi": "发烧",
    "pinyin": "fā shāo",
    "meaning": "sốt, bị sốt",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "我发烧了。",
    "examplePinyin": "Wǒ fāshāo le.",
    "exampleVi": "Tôi bị sốt."
  },
  {
    "id": "yct5-dzhn",
    "hanzi": "打针",
    "pinyin": "dǎ zhēn",
    "meaning": "tiêm",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "护士给我打针。",
    "examplePinyin": "Hùshi gěi wǒ dǎzhēn.",
    "exampleVi": "Y tá tiêm cho tôi."
  },
  {
    "id": "yct5-xin",
    "hanzi": "先",
    "pinyin": "xiān",
    "meaning": "trước, trước tiên",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 13,
    "example": "我先去",
    "examplePinyin": "Wǒ xiān qù",
    "exampleVi": "Tôi đi trước"
  },
  {
    "id": "yct5-by",
    "hanzi": "补牙",
    "pinyin": "bǔ yá",
    "meaning": "trám răng",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "我明天要去医院补牙。",
    "examplePinyin": "wǒ míng tiān yào qù yī yuàn bǔ yá.",
    "exampleVi": "Ngày mai tôi phải đến bệnh viện trám răng."
  },
  {
    "id": "yct5-jio",
    "hanzi": "教",
    "pinyin": "jiāo",
    "meaning": "giảng dạy, dạy",
    "category": "hoc",
    "lessonNumber": 13,
    "example": "教中文",
    "examplePinyin": "Jiāo zhōng wén",
    "exampleVi": "Dạy tiếng Trung"
  },
  {
    "id": "yct5-trn",
    "hanzi": "突然",
    "pinyin": "tū rán",
    "meaning": "đột nhiên",
    "category": "pho-tu",
    "lessonNumber": 13,
    "example": "突然下雨了，我们快跑吧。",
    "examplePinyin": "Tūrán xiàyǔ le, wǒmen kuài pǎo ba.",
    "exampleVi": "Trời mưa đột ngột, chúng ta chạy nhanh đi."
  },
  {
    "id": "yct5-mshng",
    "hanzi": "马上",
    "pinyin": "mǎ shàng",
    "meaning": "ngay lập tức, ngay",
    "category": "pho-tu",
    "lessonNumber": 13,
    "example": "我马上来",
    "examplePinyin": "Wǒ mǎshàng lái",
    "exampleVi": "Tôi đến ngay"
  },
  {
    "id": "yct5-kiyo",
    "hanzi": "开药",
    "pinyin": "kāi yào",
    "meaning": "kê đơn thuốc",
    "category": "suc-khoe-va-co-the",
    "lessonNumber": 13,
    "example": "医生给我开药了。",
    "examplePinyin": "yī shēng gěi wǒ kāi yào le.",
    "exampleVi": "Bác sĩ đã kê đơn thuốc cho tôi."
  },
  {
    "id": "yct5-yzh",
    "hanzi": "一直",
    "pinyin": "yī zhí",
    "meaning": "thẳng",
    "category": "pho-tu",
    "lessonNumber": 13,
    "example": "一直往前走",
    "examplePinyin": "yī zhí wǎng qián zǒu",
    "exampleVi": "Đi thẳng về phía trước"
  },
  {
    "id": "yct5-tng-tang",
    "hanzi": "躺",
    "pinyin": "tǎng",
    "meaning": "nằm, nằm xuống, nghỉ ngơi",
    "category": "dong-tu",
    "lessonNumber": 13,
    "example": "他躺在床上看书。",
    "examplePinyin": "Tā tǎng zài chuángshàng kànshū.",
    "exampleVi": "Anh ấy nằm trên giường đọc sách."
  },
  {
    "id": "yct5-dt",
    "hanzi": "地图",
    "pinyin": "dì tú",
    "meaning": "bản đồ",
    "category": "noi",
    "lessonNumber": 14,
    "example": "我需要一张地图",
    "examplePinyin": "Wǒ xū yào yī zhāng dì tú",
    "exampleVi": "Tôi cần một bản đồ"
  },
  {
    "id": "yct5-hnji",
    "hanzi": "寒假",
    "pinyin": "hán jià",
    "meaning": "kỳ nghỉ đông, nghỉ đông",
    "category": "hoc",
    "lessonNumber": 14,
    "example": "寒假快到了。",
    "examplePinyin": "Hánjià kuài dào le.",
    "exampleVi": "Kỳ nghỉ đông sắp đến."
  },
  {
    "id": "yct5-dsun",
    "hanzi": "打算",
    "pinyin": "dǎ suàn",
    "meaning": "kế hoạch",
    "category": "tinh-cam-va-cam-xuc",
    "lessonNumber": 14,
    "example": "我打算去中国",
    "examplePinyin": "wǒ dǎ suàn qù zhōng guó",
    "exampleVi": "Tôi dự định đi Trung Quốc"
  },
  {
    "id": "yct5-lyu",
    "hanzi": "旅游",
    "pinyin": "lǚ yóu",
    "meaning": "du lịch",
    "category": "ngay-le-va-giai-tri",
    "lessonNumber": 14,
    "example": "我喜欢旅游",
    "examplePinyin": "wǒ xǐ huan lǚ yóu",
    "exampleVi": "Tôi thích du lịch"
  },
  {
    "id": "yct5-nnfng",
    "hanzi": "南方",
    "pinyin": "nán fāng",
    "meaning": "miền Nam",
    "category": "noi",
    "lessonNumber": 14,
    "example": "南方很温暖",
    "examplePinyin": "nán fāng hěn wēn nuǎn",
    "exampleVi": "Miền Nam rất ấm áp"
  },
  {
    "id": "yct5-bifng",
    "hanzi": "北方",
    "pinyin": "běi fāng",
    "meaning": "phía Bắc",
    "category": "noi",
    "lessonNumber": 14,
    "example": "北方很冷",
    "examplePinyin": "běi fāng hěn lěng",
    "exampleVi": "Phía Bắc rất lạnh"
  },
  {
    "id": "yct5-chle",
    "hanzi": "除了",
    "pinyin": "chú le",
    "meaning": "ngoài ra, trừ ra",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 14,
    "example": "除了中文，我还会说英文。",
    "examplePinyin": "Chúle Zhōngwén, wǒ hái huì shuō Yīngwén.",
    "exampleVi": "Ngoài tiếng Trung, tôi còn biết nói tiếng Anh."
  },
  {
    "id": "yct5-yumng",
    "hanzi": "有名",
    "pinyin": "yǒu míng",
    "meaning": "nổi tiếng",
    "category": "tinh-tu",
    "lessonNumber": 14,
    "example": "北京烤鸭很有名。",
    "examplePinyin": "Běijīng kǎoyā hěn yǒumíng.",
    "exampleVi": "Vịt quay Bắc Kinh rất nổi tiếng."
  },
  {
    "id": "yct5-jisho",
    "hanzi": "介绍",
    "pinyin": "jiè shào",
    "meaning": "giới thiệu",
    "category": "giao-tiep-va-tuong-tac",
    "lessonNumber": 14,
    "example": "让我介绍一下",
    "examplePinyin": "Ràng wǒ jièshǎo yīxià",
    "exampleVi": "Để tôi giới thiệu một chút"
  },
  {
    "id": "yct5-shji",
    "hanzi": "暑假",
    "pinyin": "shǔ jià",
    "meaning": "kỳ nghỉ hè",
    "category": "hoc",
    "lessonNumber": 14,
    "example": "暑假你打算去哪儿玩？",
    "examplePinyin": "shǔ jià nǐ dǎ suàn qù nǎr wán?",
    "exampleVi": "Kỳ nghỉ hè bạn định đi đâu chơi?"
  },
  {
    "id": "yct5-rnhu",
    "hanzi": "然后",
    "pinyin": "rán hòu",
    "meaning": "sau đó",
    "category": "thu-tu-trinh-bay",
    "lessonNumber": 14,
    "example": "先吃饭，然后走",
    "examplePinyin": "xiān chī fàn, rán hòu zǒu",
    "exampleVi": "Ăn cơm trước, sau đó đi"
  }
];

export function toVocabularyWord5(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct5",
    hskLevel: "HSK3",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

const STORAGE_KEY_YCT5 = "hanyu.yct5.progress.v1";

export interface Yct5Progress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYct5Progress(): Yct5Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YCT5);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as Yct5Progress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYct5Progress(progress: Yct5Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY_YCT5, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord5(wordId: string): Yct5Progress {
  const current = getYct5Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const earnedXp = exists
    ? 0
    : awardXp(`yct:5:word:${encodeURIComponent(wordId)}`, "yct", xpGain);
  const updated: Yct5Progress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + earnedXp,
  };
  saveYct5Progress(updated);
  return updated;
}

export function recordQuizCompletion5(
  score: number,
  total: number
): { progress: Yct5Progress; earnedXp: number } {
  const current = getYct5Progress();
  const reward = total > 0 ? Math.round((score / total) * 30) : 0;
  const earnedXp = reward > 0 ? awardDailyXp("yct:5:quiz", "yct", reward) : 0;
  const updated: Yct5Progress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYct5Progress(updated);
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

export function generateYct5Quiz(
  count = 10,
  filter?: { category?: Yct5CategoryId; lessonNumber?: number }
): YctQuizQuestion[] {
  let pool = YCT5_WORDS;
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

    const distractors = YCT5_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q5-${word.id}-${idx}`,
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
        id: `q5-${word.id}-${idx}`,
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
        id: `q5-${word.id}-${idx}`,
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

const CATEGORY_EMOJIS_5: Record<string, string> = {
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

export const WORD_EMOJIS_5: Record<string, string> = {
};

export function getWordEmoji5(word: YctWord): string {
  return WORD_EMOJIS_5[word.id] || CATEGORY_EMOJIS_5[word.category] || "✨";
}
