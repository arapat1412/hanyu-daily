import type { VocabularyWord } from "../types";
import { awardDailyXp, awardXp } from "../lib/hsk";
import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct3CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type Yct3CategoryId =
  | "do-an-va-do-uong"
  | "nha-va-gia-dinh"
  | "suc-khoe-va-co-the"
  | "giai-tri-va-vui-choi-giai-tri"
  | "nhung-nguoi"
  | "nghien-cuu-va-lam-viec"
  | "thoi-gian"
  | "thien-nhien-va-dong-vat"
  | "giao-tiep-va-phep-xa-giao"
  | "dai-tu"
  | "cac-tu-chuc-nang-va-cau-hoi"
  | "dong-tu"
  | "giao-thong-va-giao-thong"
  | "so-luong-va-do-luong"
  | "pho-tu"
  | "quan-ao-va-phu-kien"
  | "noi"
  | "tinh-tu"
  | "suy-nghi-va-cam-xuc"
  | "khac";

export interface Yct3Category {
  id: Yct3CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface Yct3Lesson {
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}

export const YCT3_LESSONS: Yct3Lesson[] = [
  {
    "lessonNumber": 1,
    "lessonSlug": "bai-1-i-m-in-the-third-grade",
    "titleVi": "Tôi học lớp ba",
    "titleZh": "我三年级。",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 2,
    "lessonSlug": "bai-2-what-s-your-favorite-sport",
    "titleVi": "Bạn thích môn thể thao nào?",
    "titleZh": "你喜欢什么运动？",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 3,
    "lessonSlug": "bai-3-i-m-drawing-a-picture",
    "titleVi": "Tôi đang vẽ tranh",
    "titleZh": "我在画画儿呢。",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 4,
    "lessonSlug": "bai-4-hello",
    "titleVi": "A lô, xin chào!",
    "titleZh": "喂，您好！",
    "wordCount": 6,
    "estimatedMinutes": 6
  },
  {
    "lessonNumber": 5,
    "lessonSlug": "bai-5-have-some-more",
    "titleVi": "Ăn thêm vài cái nữa đi",
    "titleZh": "再吃几个。",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 6,
    "lessonSlug": "bai-6-i-can-put-it-on-by-myself",
    "titleVi": "Tôi tự mặc được",
    "titleZh": "我能自己穿。",
    "wordCount": 6,
    "estimatedMinutes": 6
  },
  {
    "lessonNumber": 7,
    "lessonSlug": "bai-7-happy-birthday",
    "titleVi": "Chúc mừng sinh nhật!",
    "titleZh": "生日快乐！",
    "wordCount": 9,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 8,
    "lessonSlug": "bai-8-it-s-snowing",
    "titleVi": "Tuyết rơi rồi",
    "titleZh": "下雪了。",
    "wordCount": 7,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 9,
    "lessonSlug": "bai-9-smile",
    "titleVi": "Cười lên nào!",
    "titleZh": "笑一笑！",
    "wordCount": 5,
    "estimatedMinutes": 5
  },
  {
    "lessonNumber": 10,
    "lessonSlug": "bai-10-who-runs-fast",
    "titleVi": "Ai chạy nhanh?",
    "titleZh": "谁跑得快？",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 11,
    "lessonSlug": "bai-11-mom-has-given-the-candy-to-your-brother",
    "titleVi": "Mẹ đã đưa kẹo cho em trai",
    "titleZh": "妈妈把糖给弟弟了。",
    "wordCount": 5,
    "estimatedMinutes": 5
  }
];

export const YCT3_CATEGORIES: Yct3Category[] = [
  {
    "id": "do-an-va-do-uong",
    "nameVi": "Đồ ăn & Thức uống",
    "nameZh": "美食饮品",
    "icon": "🍜",
    "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
    "description": "Bánh bao, món ăn, hoa quả, trà, sữa, nhà hàng"
  },
  {
    "id": "nha-va-gia-dinh",
    "nameVi": "Gia đình & Nhà cửa",
    "nameZh": "家庭居家",
    "icon": "🏡",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Người nhà, phòng ở, đồ đạc, đồ gia dụng trong gia đình"
  },
  {
    "id": "suc-khoe-va-co-the",
    "nameVi": "Sức khỏe & Cơ thể",
    "nameZh": "身体健康",
    "icon": "💪",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "description": "Các bộ phận cơ thể, trạng thái khỏe mạnh, ốm đau, khám bệnh"
  },
  {
    "id": "giai-tri-va-vui-choi-giai-tri",
    "nameVi": "Vui chơi & Thể thao",
    "nameZh": "运动娱乐",
    "icon": "⚽",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Bóng đá, bóng rổ, bơi lội, ca hát, nhảy múa, vẽ tranh"
  },
  {
    "id": "nhung-nguoi",
    "nameVi": "Con người & Nghề nghiệp",
    "nameZh": "人物职业",
    "icon": "👨‍👩‍👧",
    "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
    "description": "Bác sĩ, thầy cô, bạn học, học sinh, chú bác, tài xế"
  },
  {
    "id": "nghien-cuu-va-lam-viec",
    "nameVi": "Học tập & Trường lớp",
    "nameZh": "学习学校",
    "icon": "📚",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "description": "Lớp học, bài tập, kỳ thi, câu hỏi, trả lời, sách bút"
  },
  {
    "id": "thoi-gian",
    "nameVi": "Thời gian & Lịch trình",
    "nameZh": "时间日期",
    "icon": "⏰",
    "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
    "description": "Giờ phút, năm tháng ngày, sáng tối, các mùa trong năm"
  },
  {
    "id": "thien-nhien-va-dong-vat",
    "nameVi": "Thiên nhiên & Động vật",
    "nameZh": "动物自然",
    "icon": "🐼",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Mặt trời, mặt trăng, mưa, tuyết, hoa cỏ, muông thú đáng yêu"
  },
  {
    "id": "giao-tiep-va-phep-xa-giao",
    "nameVi": "Chào hỏi & Giao tiếp",
    "nameZh": "问候礼貌",
    "icon": "👋",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Chào hỏi, cảm ơn, xin lỗi, chúc mừng sinh nhật, lễ phép"
  },
  {
    "id": "dai-tu",
    "nameVi": "Đại từ xưng hô & Chỉ thị",
    "nameZh": "人称代词",
    "icon": "🙋‍♂️",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "description": "Tôi, bạn, anh ấy, chúng tôi, cái này, cái kia, mọi người"
  },
  {
    "id": "cac-tu-chuc-nang-va-cau-hoi",
    "nameVi": "Hư từ & Câu hỏi",
    "nameZh": "虚词问句",
    "icon": "❓",
    "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "description": "Từ để hỏi, trợ từ ngữ khí, liên từ, giới từ ngữ pháp"
  },
  {
    "id": "dong-tu",
    "nameVi": "Động từ hành động",
    "nameZh": "动作行为",
    "icon": "🏃",
    "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
    "description": "Đi, chạy, nhảy, mua, bán, mặc, cởi, mở, đóng, giúp đỡ"
  },
  {
    "id": "giao-thong-va-giao-thong",
    "nameVi": "Phương tiện giao thông",
    "nameZh": "交通出行",
    "icon": "🚗",
    "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
    "description": "Xe buýt, taxi, máy bay, tàu hỏa, xe đạp, đường sá"
  },
  {
    "id": "so-luong-va-do-luong",
    "nameVi": "Số lượng & Lượng từ",
    "nameZh": "数量量词",
    "icon": "🔢",
    "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "description": "Số đếm, lượng từ chỉ cái, con, quyển, chiếc, ly, mét"
  },
  {
    "id": "pho-tu",
    "nameVi": "Phó từ chỉ mức độ",
    "nameZh": "程度副词",
    "icon": "⚡",
    "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    "description": "Rất, cực kỳ, quá, hơn, đều, lại, cũng, nhất"
  },
  {
    "id": "quan-ao-va-phu-kien",
    "nameVi": "Trang phục & Phụ kiện",
    "nameZh": "服装配饰",
    "icon": "👕",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "description": "Áo quần, váy, giày dép, nón mũ, mắt kính, đồng hồ"
  },
  {
    "id": "noi",
    "nameVi": "Địa điểm & Nơi chốn",
    "nameZh": "地点场所",
    "icon": "📍",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Trường học, bệnh viện, sân bay, công viên, sở thú, thư viện"
  },
  {
    "id": "tinh-tu",
    "nameVi": "Tính từ miêu tả",
    "nameZh": "性质特征",
    "icon": "🎨",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Màu sắc, kích cỡ, tính chất, hình dáng đồ vật và con người"
  },
  {
    "id": "suy-nghi-va-cam-xuc",
    "nameVi": "Cảm xúc & Suy nghĩ",
    "nameZh": "心理情感",
    "icon": "😊",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Vui, buồn, sợ, thích, muốn, cảm thấy, nghĩ rằng, nhớ mong"
  },
  {
    "id": "khac",
    "nameVi": "Chủ đề tổng hợp khác",
    "nameZh": "综合其他",
    "icon": "✨",
    "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
    "description": "Các từ vựng bổ trợ đa dạng mở rộng cho giao tiếp"
  }
];

export const YCT3_WORDS: YctWord[] = [
  {
    "id": "yct3-ban-ban",
    "hanzi": "班",
    "pinyin": "bān",
    "meaning": "ca làm việc, lớp học",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我上早班",
    "examplePinyin": "Wǒ shàng zǎobān",
    "exampleVi": "Tôi làm ca sáng",
    "lessonNumber": 1
  },
  {
    "id": "yct3-dou",
    "hanzi": "都",
    "pinyin": "dōu",
    "meaning": "đều, tất cả, toàn bộ",
    "category": "pho-tu",
    "example": "我们都喜欢中文",
    "examplePinyin": "Wǒmen dōu xǐhuan Zhōngwén",
    "exampleVi": "Chúng tôi đều thích tiếng Trung",
    "lessonNumber": 1
  },
  {
    "id": "yct3-hai",
    "hanzi": "还",
    "pinyin": "hái",
    "meaning": "vẫn, còn",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我还没吃饭",
    "examplePinyin": "Wǒ hái méi chīfàn",
    "exampleVi": "Tôi vẫn chưa ăn cơm",
    "lessonNumber": 1
  },
  {
    "id": "yct3-ke",
    "hanzi": "课",
    "pinyin": "kè",
    "meaning": "bài học, lớp học (Hán-Việt: khóa)",
    "category": "nghien-cuu-va-lam-viec",
    "example": "上课",
    "examplePinyin": "Shàng kè",
    "exampleVi": "Vào lớp",
    "lessonNumber": 1
  },
  {
    "id": "yct3-nan",
    "hanzi": "男",
    "pinyin": "nán",
    "meaning": "đàn ông, con trai, nam giới",
    "category": "nhung-nguoi",
    "example": "他是男的",
    "examplePinyin": "Tā shì nán de",
    "exampleVi": "Anh ấy là nam",
    "lessonNumber": 1
  },
  {
    "id": "yct3-nian-ji",
    "hanzi": "年级",
    "pinyin": "niánjí",
    "meaning": "lớp",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我上二年级",
    "examplePinyin": "Wǒ shàng èr nián jí",
    "exampleVi": "Tôi học lớp hai",
    "lessonNumber": 1
  },
  {
    "id": "yct3-nv",
    "hanzi": "女",
    "pinyin": "nǚ",
    "meaning": "phụ nữ, con gái",
    "category": "nhung-nguoi",
    "example": "她是女学生",
    "examplePinyin": "Tā shì nǚ xuéshēng",
    "exampleVi": "Cô ấy là học sinh nữ",
    "lessonNumber": 1
  },
  {
    "id": "yct3-xin",
    "hanzi": "新",
    "pinyin": "xīn",
    "meaning": "mới (Hán-Việt: tân)",
    "category": "tinh-tu",
    "example": "新朋友",
    "examplePinyin": "Xīn péng yǒu",
    "exampleVi": "Bạn mới",
    "lessonNumber": 1
  },
  {
    "id": "yct3-da-lan-qiu",
    "hanzi": "打篮球",
    "pinyin": "dǎ lánqiú",
    "meaning": "chơi bóng rổ",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢打篮球",
    "examplePinyin": "Wǒ xǐhuān dǎ lánqiú",
    "exampleVi": "Tôi thích chơi bóng rổ",
    "lessonNumber": 2
  },
  {
    "id": "yct3-huan-ying",
    "hanzi": "欢迎",
    "pinyin": "huānyíng",
    "meaning": "hoan nghênh",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "欢迎来到中国！",
    "examplePinyin": "Huān yíng lái dào zhōng guó ！",
    "exampleVi": "Hoan nghênh đến Trung Quốc!",
    "lessonNumber": 2
  },
  {
    "id": "yct3-mei",
    "hanzi": "每",
    "pinyin": "měi",
    "meaning": "mỗi; từng; mỗi một",
    "category": "dai-tu",
    "example": "我每天早上都跑步。",
    "examplePinyin": "Wǒ měitiān zǎoshàng dōu pǎobù.",
    "exampleVi": "Tôi đều chạy bộ mỗi sáng.",
    "lessonNumber": 2
  },
  {
    "id": "yct3-tai",
    "hanzi": "太",
    "pinyin": "tài",
    "meaning": "quá, quá mức, rất, cực kỳ",
    "category": "pho-tu",
    "example": "太好了",
    "examplePinyin": "Tài hǎo le",
    "exampleVi": "Tốt quá, tốt lắm",
    "lessonNumber": 2
  },
  {
    "id": "yct3-ti-zu-qiu",
    "hanzi": "踢足球",
    "pinyin": "tī zúqiú",
    "meaning": "chơi bóng đá",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢踢足球",
    "examplePinyin": "Wǒ xǐhuān tī zúqiú",
    "exampleVi": "Tôi thích chơi bóng đá",
    "lessonNumber": 2
  },
  {
    "id": "yct3-yi-qi",
    "hanzi": "一起",
    "pinyin": "yīqǐ",
    "meaning": "chung với nhau",
    "category": "pho-tu",
    "example": "我们一起去",
    "examplePinyin": "Wǒmen yīqǐ qù",
    "exampleVi": "Chúng tôi đi cùng nhau",
    "lessonNumber": 2
  },
  {
    "id": "yct3-you-yong",
    "hanzi": "游泳",
    "pinyin": "yóuyǒng",
    "meaning": "bơi lội",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "夏天游泳很凉快。",
    "examplePinyin": "Xiàtiān yóuyǒng hěn liángkuai.",
    "exampleVi": "Mùa hè bơi lội rất mát.",
    "lessonNumber": 2
  },
  {
    "id": "yct3-yun-dong",
    "hanzi": "运动",
    "pinyin": "yùndòng",
    "meaning": "vận động, thể thao",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢运动",
    "examplePinyin": "Wǒ xǐ huān yùn dòng",
    "exampleVi": "Tôi thích thể thao",
    "lessonNumber": 2
  },
  {
    "id": "yct3-chang-ge",
    "hanzi": "唱歌",
    "pinyin": "chànggē",
    "meaning": "hát (hoạt động hát bài hát)",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢唱歌",
    "examplePinyin": "Wǒ xǐhuān chànggē",
    "exampleVi": "Tôi thích hát",
    "lessonNumber": 3
  },
  {
    "id": "yct3-nai-nai",
    "hanzi": "奶奶",
    "pinyin": "nǎinai",
    "meaning": "bà nội",
    "category": "nha-va-gia-dinh",
    "example": "奶奶对我很好",
    "examplePinyin": "Nǎinai duì wǒ hěn hǎo",
    "exampleVi": "Bà nội rất tốt với tôi",
    "lessonNumber": 3
  },
  {
    "id": "yct3-pao-bu",
    "hanzi": "跑步",
    "pinyin": "pǎobù",
    "meaning": "chạy bộ",
    "category": "dong-tu",
    "example": "我每天早上都跑步。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu pǎobù.",
    "exampleVi": "Tôi每 sáng đều chạy bộ.",
    "lessonNumber": 3
  },
  {
    "id": "yct3-rang",
    "hanzi": "让",
    "pinyin": "ràng",
    "meaning": "nhường, cho phép, mời",
    "category": "dong-tu",
    "example": "请让我先走",
    "examplePinyin": "Qǐng ràng wǒ xiān zǒu",
    "exampleVi": "Mời để tôi đi trước",
    "lessonNumber": 3
  },
  {
    "id": "yct3-tai-yang",
    "hanzi": "太阳",
    "pinyin": "tàiyáng",
    "meaning": "mặt trời",
    "category": "thien-nhien-va-dong-vat",
    "example": "太阳升起",
    "examplePinyin": "Tài yáng shēng qǐ",
    "exampleVi": "Mặt trời mọc",
    "lessonNumber": 3
  },
  {
    "id": "yct3-tiao-wu",
    "hanzi": "跳舞",
    "pinyin": "tiàowǔ",
    "meaning": "nhảy múa, khiêu vũ; di chuyển cơ thể theo nhịp điệu âm nhạc",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢跳舞,特别是交际舞。",
    "examplePinyin": "Wǒ xǐhuan tiàowǔ, tèbié shì jiāojìwǔ.",
    "exampleVi": "Tôi thích khiêu vũ, đặc biệt là nhảy giao tiếp.",
    "lessonNumber": 3
  },
  {
    "id": "yct3-ye-ye",
    "hanzi": "爷爷",
    "pinyin": "yéye",
    "meaning": "ông nội",
    "category": "nha-va-gia-dinh",
    "example": "这是我爷爷",
    "examplePinyin": "Zhè shì wǒ yéye",
    "exampleVi": "Đây là ông nội tôi",
    "lessonNumber": 3
  },
  {
    "id": "yct3-yue-liang",
    "hanzi": "月亮",
    "pinyin": "yuèliàng",
    "meaning": "mặt trăng",
    "category": "thien-nhien-va-dong-vat",
    "example": "月亮圆圆的",
    "examplePinyin": "Yuè liàng yuán yuán de",
    "exampleVi": "Mặt trăng tròn trịa",
    "lessonNumber": 3
  },
  {
    "id": "yct3-hui",
    "hanzi": "回",
    "pinyin": "huí",
    "meaning": "trở về",
    "category": "giao-thong-va-giao-thong",
    "example": "我回家了",
    "examplePinyin": "Wǒ huí jiā le",
    "exampleVi": "Tôi về nhà rồi",
    "lessonNumber": 4
  },
  {
    "id": "yct3-nin",
    "hanzi": "您",
    "pinyin": "nín",
    "meaning": "Ngài, ông/bà (xưng hô lịch sự) (Hán-Việt: nhẫn)",
    "category": "dai-tu",
    "example": "您好",
    "examplePinyin": "Nín hǎo",
    "exampleVi": "Ngài/Ông/Bà khỏe (xưng hô lịch sự)",
    "lessonNumber": 4
  },
  {
    "id": "yct3-wei",
    "hanzi": "喂",
    "pinyin": "wèi",
    "meaning": "a lô, này",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "喂，你好",
    "examplePinyin": "Wéi, nǐ hǎo",
    "exampleVi": "A lô, xin chào",
    "lessonNumber": 4
  },
  {
    "id": "yct3-wen",
    "hanzi": "问",
    "pinyin": "wèn",
    "meaning": "hỏi",
    "category": "dong-tu",
    "example": "我问老师一个问题",
    "examplePinyin": "Wǒ wèn lǎoshī yī gè wèntí",
    "exampleVi": "Tôi hỏi thầy một câu hỏi",
    "lessonNumber": 4
  },
  {
    "id": "yct3-wen-ti",
    "hanzi": "问题",
    "pinyin": "wèntí",
    "meaning": "vấn đề, câu hỏi",
    "category": "khac",
    "example": "我有一个问题",
    "examplePinyin": "Wǒ yǒu yí gè wèn tí",
    "exampleVi": "Tôi có một câu hỏi",
    "lessonNumber": 4
  },
  {
    "id": "yct3-zhao",
    "hanzi": "找",
    "pinyin": "zhǎo",
    "meaning": "tìm kiếm",
    "category": "dong-tu",
    "example": "我找书",
    "examplePinyin": "Wǒ zhǎo shū",
    "exampleVi": "Tôi tìm sách",
    "lessonNumber": 4
  },
  {
    "id": "yct3-bao",
    "hanzi": "饱",
    "pinyin": "bǎo",
    "meaning": "no",
    "category": "do-an-va-do-uong",
    "example": "我吃饱了",
    "examplePinyin": "Wǒ chī bǎo le",
    "exampleVi": "Tôi đã ăn no",
    "lessonNumber": 5
  },
  {
    "id": "yct3-e",
    "hanzi": "饿",
    "pinyin": "è",
    "meaning": "đói (Hán-Việt: ngạ)",
    "category": "do-an-va-do-uong",
    "example": "我饿了",
    "examplePinyin": "Wǒ è le",
    "exampleVi": "Tôi đã đói rồi",
    "lessonNumber": 5
  },
  {
    "id": "yct3-jiao-zi",
    "hanzi": "饺子",
    "pinyin": "jiǎozi",
    "meaning": "cảo tử",
    "category": "do-an-va-do-uong",
    "example": "饺子很好吃",
    "examplePinyin": "Jiǎo zi hěn hǎo chī",
    "exampleVi": "Sủi cảo rất ngon",
    "lessonNumber": 5
  },
  {
    "id": "yct3-mian-tiao-er",
    "hanzi": "面条儿",
    "pinyin": "miàntiáor",
    "meaning": "mì sợi",
    "category": "do-an-va-do-uong",
    "example": "面条儿",
    "examplePinyin": "miàntiáor",
    "exampleVi": "mì sợi",
    "lessonNumber": 5
  },
  {
    "id": "yct3-xiang",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "meaning": "nghĩ, suy nghĩ, nhớ",
    "category": "suy-nghi-va-cam-xuc",
    "example": "我想去中国",
    "examplePinyin": "Wǒ xiǎng qù Zhōngguó",
    "exampleVi": "Tôi muốn đi Trung Quốc",
    "lessonNumber": 5
  },
  {
    "id": "yct3-zai",
    "hanzi": "再",
    "pinyin": "zài",
    "meaning": "lại, nữa, thêm lần nữa (Hán-Việt: tái)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "再见",
    "examplePinyin": "Zài jiàn",
    "exampleVi": "Tạm biệt (gặp lại)",
    "lessonNumber": 5
  },
  {
    "id": "yct3-zui",
    "hanzi": "最",
    "pinyin": "zuì",
    "meaning": "nhất, cực kỳ, nhất (Hán-Việt: tối)",
    "category": "pho-tu",
    "example": "最好",
    "examplePinyin": "Zuì hǎo",
    "exampleVi": "Tốt nhất",
    "lessonNumber": 5
  },
  {
    "id": "yct3-bang",
    "hanzi": "帮",
    "pinyin": "bāng",
    "meaning": "giúp đỡ",
    "category": "dong-tu",
    "example": "我帮你",
    "examplePinyin": "Wǒ bāng nǐ",
    "exampleVi": "Tôi giúp bạn",
    "lessonNumber": 6
  },
  {
    "id": "yct3-chuan-chuan",
    "hanzi": "穿",
    "pinyin": "chuān",
    "meaning": "mặc (quần áo); xỏ (xuyên qua)",
    "category": "quan-ao-va-phu-kien",
    "example": "穿衣服",
    "examplePinyin": "chuān yīfu",
    "exampleVi": "mặc quần áo",
    "lessonNumber": 6
  },
  {
    "id": "yct3-neng",
    "hanzi": "能",
    "pinyin": "néng",
    "meaning": "có thể, năng lực, khả năng",
    "category": "dong-tu",
    "example": "我能去",
    "examplePinyin": "Wǒ néng qù",
    "exampleVi": "Tôi có thể đi",
    "lessonNumber": 6
  },
  {
    "id": "yct3-xie-xie-2",
    "hanzi": "鞋",
    "pinyin": "xié",
    "meaning": "giày",
    "category": "quan-ao-va-phu-kien",
    "example": "我买了一双新鞋",
    "examplePinyin": "Wǒ mǎi le yī shuāng xīn xié",
    "exampleVi": "Tôi mua một đôi giày mới",
    "lessonNumber": 6
  },
  {
    "id": "yct3-yi-fu",
    "hanzi": "衣服",
    "pinyin": "yīfu",
    "meaning": "quần áo",
    "category": "quan-ao-va-phu-kien",
    "example": "我买了很多新衣服",
    "examplePinyin": "Wǒ mǎi le hěn duō xīn yī fu",
    "exampleVi": "Tôi mua được rất nhiều quần áo mới",
    "lessonNumber": 6
  },
  {
    "id": "yct3-zi-ji",
    "hanzi": "自己",
    "pinyin": "zìjǐ",
    "meaning": "bản thân",
    "category": "dai-tu",
    "example": "我自己来",
    "examplePinyin": "Wǒ zì jǐ lái",
    "exampleVi": "Tôi tự làm",
    "lessonNumber": 6
  },
  {
    "id": "yct3-ba-ba-2",
    "hanzi": "吧",
    "pinyin": "ba",
    "meaning": "trợ từ ngữ khí điều thuận hoặc gợi ý",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我们去吧",
    "examplePinyin": "Wǒmen qù ba",
    "exampleVi": "Chúng ta đi nhé",
    "lessonNumber": 7
  },
  {
    "id": "yct3-dan-gao",
    "hanzi": "蛋糕",
    "pinyin": "dàngāo",
    "meaning": "bánh",
    "category": "do-an-va-do-uong",
    "example": "生日蛋糕很好吃。",
    "examplePinyin": "Shēngrì dàngāo hěn hǎochī.",
    "exampleVi": "Bánh kem sinh nhật rất ngon.",
    "lessonNumber": 7
  },
  {
    "id": "yct3-dan-shi",
    "hanzi": "但是",
    "pinyin": "dànshì",
    "meaning": "nhưng",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我想去，但是没时间",
    "examplePinyin": "Wǒ xiǎng qù ， dàn shì méi shí jiān",
    "exampleVi": "Tôi muốn đi, nhưng không có thời gian",
    "lessonNumber": 7
  },
  {
    "id": "yct3-gei",
    "hanzi": "给",
    "pinyin": "gěi",
    "meaning": "cho, đưa cho",
    "category": "dong-tu",
    "example": "我给你一本书",
    "examplePinyin": "Wǒ gěi nǐ yī běn shū",
    "exampleVi": "Tôi cho bạn một cuốn sách",
    "lessonNumber": 7
  },
  {
    "id": "yct3-hua-hua",
    "hanzi": "花",
    "pinyin": "huā",
    "meaning": "bông hoa",
    "category": "thien-nhien-va-dong-vat",
    "example": "这朵花很漂亮",
    "examplePinyin": "Zhè duǒ huā hěn piào liang",
    "exampleVi": "Bông hoa này rất đẹp",
    "lessonNumber": 7
  },
  {
    "id": "yct3-kuai-le",
    "hanzi": "快乐",
    "pinyin": "kuàilè",
    "meaning": "vui vẻ",
    "category": "suy-nghi-va-cam-xuc",
    "example": "祝你们生日快乐！",
    "examplePinyin": "Zhù nǐ men shēng rì kuài lè ！",
    "exampleVi": "Chúc các bạn sinh nhật vui vẻ!",
    "lessonNumber": 7
  },
  {
    "id": "yct3-li-wu",
    "hanzi": "礼物",
    "pinyin": "lǐwù",
    "meaning": "quà tặng",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "这是我送给你的礼物",
    "examplePinyin": "Zhè shì wǒ sòng gěi nǐ de lǐ wù",
    "exampleVi": "Đây là quà tôi tặng bạn",
    "lessonNumber": 7
  },
  {
    "id": "yct3-sheng-ri",
    "hanzi": "生日",
    "pinyin": "shēngrì",
    "meaning": "sinh nhật, ngày sinh",
    "category": "nhung-nguoi",
    "example": "今天是我的生日",
    "examplePinyin": "Jīntiān shì wǒ de shēngrì",
    "exampleVi": "Hôm nay là sinh nhật của tôi",
    "lessonNumber": 7
  },
  {
    "id": "yct3-song",
    "hanzi": "送",
    "pinyin": "sòng",
    "meaning": "đưa tiễn, tặng",
    "category": "dong-tu",
    "example": "我送你",
    "examplePinyin": "Wǒ sòng nǐ",
    "exampleVi": "Tôi đưa tiễn bạn",
    "lessonNumber": 7
  },
  {
    "id": "yct3-bie",
    "hanzi": "别",
    "pinyin": "bié",
    "meaning": "đừng; chớ; khác biệt; biệt",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "别在公共场所大声喧哗。",
    "examplePinyin": "Bié zài gōng gòng chǎng suǒ dà shēng xuān huá.",
    "exampleVi": "Đừng làm ồn ào ở nơi công cộng.",
    "lessonNumber": 8
  },
  {
    "id": "yct3-chu",
    "hanzi": "出",
    "pinyin": "chū",
    "meaning": "ra, đi ra (Hán-Việt: xuất)",
    "category": "giao-thong-va-giao-thong",
    "example": "出去",
    "examplePinyin": "Chū qù",
    "exampleVi": "Bước ra ngoài",
    "lessonNumber": 8
  },
  {
    "id": "yct3-ting",
    "hanzi": "听",
    "pinyin": "tīng",
    "meaning": "nghe, lắng nghe",
    "category": "dong-tu",
    "example": "我在听音乐",
    "examplePinyin": "Wǒ zài tīng yīnyuè",
    "exampleVi": "Tôi đang nghe nhạc",
    "lessonNumber": 8
  },
  {
    "id": "yct3-wai-mian",
    "hanzi": "外面",
    "pinyin": "wàimiàn",
    "meaning": "bên ngoài, ngoài trời; nước ngoài",
    "category": "noi",
    "example": "外面下雨了。",
    "examplePinyin": "Wàimian xiàyǔ le.",
    "exampleVi": "Ở bên ngoài trời đang mưa.",
    "lessonNumber": 8
  },
  {
    "id": "yct3-xia-xue",
    "hanzi": "下雪",
    "pinyin": "xiàxuě",
    "meaning": "tuyết rơi",
    "category": "thien-nhien-va-dong-vat",
    "example": "外面下雪了",
    "examplePinyin": "Wài miàn xià xuě le",
    "exampleVi": "Bên ngoài đang có tuyết rơi",
    "lessonNumber": 8
  },
  {
    "id": "yct3-xia-yu",
    "hanzi": "下雨",
    "pinyin": "xiàyǔ",
    "meaning": "trời mưa, mưa rơi",
    "category": "thien-nhien-va-dong-vat",
    "example": "今天下雨",
    "examplePinyin": "Jīntiān xiàyǔ",
    "exampleVi": "Hôm nay trời mưa",
    "lessonNumber": 8
  },
  {
    "id": "yct3-zuo-ye",
    "hanzi": "作业",
    "pinyin": "zuòyè",
    "meaning": "bài tập",
    "category": "nghien-cuu-va-lam-viec",
    "example": "今天的作业很多",
    "examplePinyin": "Jīn tiān de zuò yè hěn duō",
    "exampleVi": "Bài tập hôm nay rất nhiều",
    "lessonNumber": 8
  },
  {
    "id": "yct3-dao",
    "hanzi": "到",
    "pinyin": "dào",
    "meaning": "đến, tới",
    "category": "giao-thong-va-giao-thong",
    "example": "我到了",
    "examplePinyin": "Wǒ dào le",
    "exampleVi": "Tôi đã đến nơi",
    "lessonNumber": 9
  },
  {
    "id": "yct3-diu",
    "hanzi": "丢",
    "pinyin": "diū",
    "meaning": "đánh rơi, để mất, để lạc",
    "category": "dong-tu",
    "example": "我的钱包丢了",
    "examplePinyin": "Wǒ de qiánbāo diū le",
    "exampleVi": "Ví của tôi bị mất rơi",
    "lessonNumber": 9
  },
  {
    "id": "yct3-dong-xi",
    "hanzi": "东西",
    "pinyin": "dōngxi",
    "meaning": "đồ đạc, vật",
    "category": "khac",
    "example": "买很多东西",
    "examplePinyin": "Mǎi hěn duō dōngxi",
    "exampleVi": "Mua nhiều đồ",
    "lessonNumber": 9
  },
  {
    "id": "yct3-ku",
    "hanzi": "哭",
    "pinyin": "kū",
    "meaning": "khóc",
    "category": "suy-nghi-va-cam-xuc",
    "example": "婴儿在哭。",
    "examplePinyin": "Yīng ér zài kū 。",
    "exampleVi": "Em bé đang khóc.",
    "lessonNumber": 9
  },
  {
    "id": "yct3-xiao-xiao",
    "hanzi": "笑",
    "pinyin": "xiào",
    "meaning": "cười (diễn tả cảm xúc vui vẻ, miệng cong lên)",
    "category": "suy-nghi-va-cam-xuc",
    "example": "他笑得很开心",
    "examplePinyin": "Tā xiào de hěn kāixīn",
    "exampleVi": "Anh ấy cười rất vui",
    "lessonNumber": 9
  },
  {
    "id": "yct3-de",
    "hanzi": "得",
    "pinyin": "dé",
    "meaning": "được",
    "category": "dong-tu",
    "example": "我得到了好消息",
    "examplePinyin": "Wǒ dé dào le hǎo xiāo xī",
    "exampleVi": "Tôi đã nhận được tin tốt",
    "lessonNumber": 10
  },
  {
    "id": "yct3-di-yi",
    "hanzi": "第一",
    "pinyin": "dìyī",
    "meaning": "đầu tiên; thứ nhất",
    "category": "tinh-tu",
    "example": "我是第一个到的。",
    "examplePinyin": "Wǒ shì dì-yī gè dào de.",
    "exampleVi": "Tôi là người đầu tiên đến.",
    "lessonNumber": 10
  },
  {
    "id": "yct3-kuai-kuai",
    "hanzi": "快",
    "pinyin": "kuài",
    "meaning": "nhanh, nhanh",
    "category": "tinh-tu",
    "example": "请快一点",
    "examplePinyin": "Qǐng kuài yīdiǎn",
    "exampleVi": "Xin nhanh một chút",
    "lessonNumber": 10
  },
  {
    "id": "yct3-lao-hu",
    "hanzi": "老虎",
    "pinyin": "lǎohǔ",
    "meaning": "con hổ, hổ",
    "category": "thien-nhien-va-dong-vat",
    "example": "动物园有老虎",
    "examplePinyin": "Dòngwùyuán yǒu lǎohǔ",
    "exampleVi": "Sở thú có hổ",
    "lessonNumber": 10
  },
  {
    "id": "yct3-pang",
    "hanzi": "胖",
    "pinyin": "pàng",
    "meaning": "mập, mập",
    "category": "nhung-nguoi",
    "example": "他很胖",
    "examplePinyin": "Tā hěn pàng",
    "exampleVi": "Anh ấy rất mập",
    "lessonNumber": 10
  },
  {
    "id": "yct3-shou",
    "hanzi": "瘦",
    "pinyin": "shòu",
    "meaning": "gầy, gầy",
    "category": "nhung-nguoi",
    "example": "他很瘦",
    "examplePinyin": "Tā hěn shòu",
    "exampleVi": "Anh ấy rất gầy",
    "lessonNumber": 10
  },
  {
    "id": "yct3-xie-xie",
    "hanzi": "些",
    "pinyin": "xiē",
    "meaning": "một vài, một chút (lượng từ chỉ số lượng không xác định)",
    "category": "dai-tu",
    "example": "我想吃些水果。",
    "examplePinyin": "Wǒ xiǎng chī xiē shuǐguǒ.",
    "exampleVi": "Tôi muốn ăn một chút trái cây.",
    "lessonNumber": 10
  },
  {
    "id": "yct3-zhi-dao",
    "hanzi": "知道",
    "pinyin": "zhīdào",
    "meaning": "biết",
    "category": "dong-tu",
    "example": "我知道了",
    "examplePinyin": "Wǒ zhīdào le",
    "exampleVi": "Tôi đã biết rồi",
    "lessonNumber": 10
  },
  {
    "id": "yct3-ba",
    "hanzi": "把",
    "pinyin": "bǎ",
    "meaning": "cầm, nắm; giới từ (trong cấu trúc 把字句); lượng từ",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请把门关上。",
    "examplePinyin": "Qǐng bǎ mén guān shàng.",
    "exampleVi": "Xin hãy đóng cửa.",
    "lessonNumber": 11
  },
  {
    "id": "yct3-ji-dan",
    "hanzi": "鸡蛋",
    "pinyin": "jīdàn",
    "meaning": "trứng gà",
    "category": "do-an-va-do-uong",
    "example": "我要吃鸡蛋",
    "examplePinyin": "Wǒ yào chī jīdàn",
    "exampleVi": "Tôi muốn ăn trứng",
    "lessonNumber": 11
  },
  {
    "id": "yct3-shui-guo",
    "hanzi": "水果",
    "pinyin": "shuǐguǒ",
    "meaning": "trái cây, hoa quả",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃水果",
    "examplePinyin": "Wǒ xǐhuan chī shuǐguǒ",
    "exampleVi": "Tôi thích ăn trái cây",
    "lessonNumber": 11
  },
  {
    "id": "yct3-tang",
    "hanzi": "糖",
    "pinyin": "táng",
    "meaning": "đường, kẹo",
    "category": "do-an-va-do-uong",
    "example": "糖",
    "examplePinyin": "táng",
    "exampleVi": "đường, kẹo",
    "lessonNumber": 11
  },
  {
    "id": "yct3-xi-gua",
    "hanzi": "西瓜",
    "pinyin": "xīguā",
    "meaning": "dưa hấu",
    "category": "do-an-va-do-uong",
    "example": "夏天吃西瓜很解渴。",
    "examplePinyin": "Xiàtiān chī xīguā hěn jiěkě.",
    "exampleVi": "Mùa hè ăn dưa hấu rất giải khát.",
    "lessonNumber": 11
  },
  {
    "id": "yct3-ai",
    "hanzi": "爱",
    "pinyin": "ài",
    "meaning": "yêu, thích (động từ); Hán-Việt 'ái'",
    "category": "suy-nghi-va-cam-xuc",
    "example": "我爱妈妈",
    "examplePinyin": "Wǒ ài māma",
    "exampleVi": "Tôi yêu mẹ"
  },
  {
    "id": "yct3-ba-ba",
    "hanzi": "爸爸",
    "pinyin": "bàba",
    "meaning": "bố, cha",
    "category": "nha-va-gia-dinh",
    "example": "这是我爸爸",
    "examplePinyin": "Zhè shì wǒ bàba",
    "exampleVi": "Đây là bố tôi"
  },
  {
    "id": "yct3-ba-ba-3",
    "hanzi": "八",
    "pinyin": "bā",
    "meaning": "tám (số); Hán-Việt 'bát'",
    "category": "so-luong-va-do-luong",
    "example": "八个人",
    "examplePinyin": "bā gè rén",
    "exampleVi": "Tám người"
  },
  {
    "id": "yct3-bai",
    "hanzi": "百",
    "pinyin": "bǎi",
    "meaning": "trăm (Hán-Việt: bách)",
    "category": "so-luong-va-do-luong",
    "example": "一百",
    "examplePinyin": "Yī bǎi",
    "exampleVi": "Một trăm"
  },
  {
    "id": "yct3-bai-bai",
    "hanzi": "白",
    "pinyin": "bái",
    "meaning": "trắng (Hán-Việt: bạch)",
    "category": "quan-ao-va-phu-kien",
    "example": "白天",
    "examplePinyin": "Bái tiān",
    "exampleVi": "Ban ngày"
  },
  {
    "id": "yct3-ban",
    "hanzi": "半",
    "pinyin": "bàn",
    "meaning": "nửa, một nửa (Hán-Việt: bán)",
    "category": "so-luong-va-do-luong",
    "example": "半小时",
    "examplePinyin": "Bàn xiǎo shí",
    "exampleVi": "Nửa giờ, 30 phút"
  },
  {
    "id": "yct3-bang-zhu",
    "hanzi": "帮助",
    "pinyin": "bāngzhù",
    "meaning": "giúp đỡ, tương trợ",
    "category": "dong-tu",
    "example": "谢谢你帮助我",
    "examplePinyin": "Xiè xiè nǐ bāng zhù wǒ",
    "exampleVi": "Cảm ơn bạn đã giúp đỡ tôi"
  },
  {
    "id": "yct3-bao-zhi",
    "hanzi": "报纸",
    "pinyin": "bàozhǐ",
    "meaning": "báo",
    "category": "khac",
    "example": "我每天早上都看报纸。",
    "examplePinyin": "Wǒ měi tiān zǎo shàng dōu kàn bào zhǐ 。",
    "exampleVi": "Tôi mỗi sáng đều đọc báo."
  },
  {
    "id": "yct3-bao-zi",
    "hanzi": "包子",
    "pinyin": "bāozi",
    "meaning": "bánh bao",
    "category": "do-an-va-do-uong",
    "example": "我吃包子",
    "examplePinyin": "Wǒ chī bāozi",
    "exampleVi": "Tôi ăn bánh bao"
  },
  {
    "id": "yct3-bei-zi",
    "hanzi": "杯子",
    "pinyin": "bēizi",
    "meaning": "cốc, ly (đồ uống)",
    "category": "do-an-va-do-uong",
    "example": "我要这个杯子",
    "examplePinyin": "Wǒ yào zhège bēizi",
    "exampleVi": "Tôi muốn cái cốc này"
  },
  {
    "id": "yct3-ben",
    "hanzi": "本",
    "pinyin": "běn",
    "meaning": "quyển, bản (sách/vở), gốc, bản chất",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "一本书",
    "examplePinyin": "yì běn shū",
    "exampleVi": "Một quyển sách"
  },
  {
    "id": "yct3-bi",
    "hanzi": "比",
    "pinyin": "bǐ",
    "meaning": "so sánh, so",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你比我高",
    "examplePinyin": "Nǐ bǐ wǒ gāo",
    "exampleVi": "Bạn cao hơn tôi"
  },
  {
    "id": "yct3-bi-yi-bi",
    "hanzi": "比一比",
    "pinyin": "bǐ yī bǐ",
    "meaning": "so sánh, so sánh (vếng)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我们比一比谁高",
    "examplePinyin": "Wǒmen bǐ-yī bǐ shéi gāo",
    "exampleVi": "Chúng ta so sánh xem ai cao hơn"
  },
  {
    "id": "yct3-bi-zi",
    "hanzi": "鼻子",
    "pinyin": "bízi",
    "meaning": "mũi",
    "category": "suc-khoe-va-co-the",
    "example": "他的鼻子很大。",
    "examplePinyin": "Tā de bízi hěn dà.",
    "exampleVi": "Mũi của anh ấy rất to."
  },
  {
    "id": "yct3-cai",
    "hanzi": "菜",
    "pinyin": "cài",
    "meaning": "món ăn, rau",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃中国菜",
    "examplePinyin": "Wǒ xǐhuan chī Zhōngguó cài",
    "exampleVi": "Tôi thích ăn món Trung Quốc"
  },
  {
    "id": "yct3-cha",
    "hanzi": "茶",
    "pinyin": "chá",
    "meaning": "trà, chè (đồ uống)",
    "category": "do-an-va-do-uong",
    "example": "我喜欢喝茶",
    "examplePinyin": "Wǒ xǐhuan hē chá",
    "exampleVi": "Tôi thích uống trà"
  },
  {
    "id": "yct3-che-zhan",
    "hanzi": "车站",
    "pinyin": "chēzhàn",
    "meaning": "trạm xe (buýt/tàu)",
    "category": "giao-thong-va-giao-thong",
    "example": "车站在哪里？",
    "examplePinyin": "Chēzhàn zài nǎlǐ?",
    "exampleVi": "Trạm xe ở đâu?"
  },
  {
    "id": "yct3-chi",
    "hanzi": "吃",
    "pinyin": "chī",
    "meaning": "ăn (động từ); Hán-Việt 'thực' (gốc)",
    "category": "do-an-va-do-uong",
    "example": "我吃苹果",
    "examplePinyin": "Wǒ chī píngguǒ",
    "exampleVi": "Tôi ăn táo"
  },
  {
    "id": "yct3-chi-dao",
    "hanzi": "迟到",
    "pinyin": "chídào",
    "meaning": "đến muộn",
    "category": "dong-tu",
    "example": "对不起，我迟到了。",
    "examplePinyin": "Duìbuqǐ, wǒ chídào le.",
    "exampleVi": "Xin lỗi, tôi đến muộn."
  },
  {
    "id": "yct3-chu-zu-che",
    "hanzi": "出租车",
    "pinyin": "chūzūchē",
    "meaning": "taxi",
    "category": "giao-thong-va-giao-thong",
    "example": "我叫了一辆出租车",
    "examplePinyin": "Wǒ jiào le yī liàng chū zū chē",
    "exampleVi": "Tôi gọi một chiếc taxi"
  },
  {
    "id": "yct3-chuan",
    "hanzi": "船",
    "pinyin": "chuán",
    "meaning": "thuyền, tàu",
    "category": "giao-thong-va-giao-thong",
    "example": "湖面上有很多小船。",
    "examplePinyin": "hú miàn shàng yǒu hěn duō xiǎo chuán.",
    "exampleVi": "Trên mặt hồ có rất nhiều thuyền nhỏ."
  },
  {
    "id": "yct3-ci",
    "hanzi": "次",
    "pinyin": "cì",
    "meaning": "lần, thứ tự (Hán-Việt: thứ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "第一次",
    "examplePinyin": "Dì yī cì",
    "exampleVi": "Lần thứ nhất"
  },
  {
    "id": "yct3-cuo",
    "hanzi": "错",
    "pinyin": "cuò",
    "meaning": "sai, lầm; sai lầm; lẫn lộn",
    "category": "tinh-tu",
    "example": "我写错了",
    "examplePinyin": "Wǒ xiěcuòle",
    "exampleVi": "Tôi viết sai rồi"
  },
  {
    "id": "yct3-da",
    "hanzi": "大",
    "pinyin": "dà",
    "meaning": "to, lớn (tính từ); Hán-Việt 'đại'",
    "category": "tinh-tu",
    "example": "很大",
    "examplePinyin": "hěn dà",
    "exampleVi": "Rất to"
  },
  {
    "id": "yct3-da-jia",
    "hanzi": "大家",
    "pinyin": "dàjiā",
    "meaning": "mọi người",
    "category": "dai-tu",
    "example": "大家好",
    "examplePinyin": "Dà jiā hǎo",
    "exampleVi": "Chào mọi người"
  },
  {
    "id": "yct3-dang-ran",
    "hanzi": "当然",
    "pinyin": "dāngrán",
    "meaning": "Tất nhiên, đương nhiên",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你当然可以参加这个活动。",
    "examplePinyin": "Nǐ dāngrán kěyǐ cānjiā zhège huódòng.",
    "exampleVi": "Bạn tất nhiên có thể tham gia hoạt động này."
  },
  {
    "id": "yct3-deng",
    "hanzi": "等",
    "pinyin": "děng",
    "meaning": "đợi, chờ đợi",
    "category": "dong-tu",
    "example": "请等一下",
    "examplePinyin": "Qǐng děng yīxià",
    "exampleVi": "Xin hãy đợi một chút"
  },
  {
    "id": "yct3-di-di",
    "hanzi": "弟弟",
    "pinyin": "dìdi",
    "meaning": "em trai",
    "category": "nha-va-gia-dinh",
    "example": "这是我弟弟",
    "examplePinyin": "Zhè shì wǒ dìdi",
    "exampleVi": "Đây là em trai tôi"
  },
  {
    "id": "yct3-dian-nao",
    "hanzi": "电脑",
    "pinyin": "diànnǎo",
    "meaning": "máy tính (điện não)",
    "category": "nha-va-gia-dinh",
    "example": "我用电脑工作",
    "examplePinyin": "Wǒ yòng diànnǎo gōngzuò",
    "exampleVi": "Tôi dùng máy tính để làm việc"
  },
  {
    "id": "yct3-dian-shi",
    "hanzi": "电视",
    "pinyin": "diànshì",
    "meaning": "TV, truyền hình (chương trình hoặc thiết bị)",
    "category": "nha-va-gia-dinh",
    "example": "我看电视",
    "examplePinyin": "Wǒ kàn diànshì",
    "exampleVi": "Tôi xem TV"
  },
  {
    "id": "yct3-dian-ying",
    "hanzi": "电影",
    "pinyin": "diànyǐng",
    "meaning": "phim, phim ảnh (chương trình điện ảnh)",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我看了一部电影",
    "examplePinyin": "Wǒ kànle yī bù diànyǐng",
    "exampleVi": "Tôi đã xem một bộ phim"
  },
  {
    "id": "yct3-dong",
    "hanzi": "懂",
    "pinyin": "dǒng",
    "meaning": "hiểu",
    "category": "dong-tu",
    "example": "我懂了",
    "examplePinyin": "Wǒ dǒng le",
    "exampleVi": "Tôi hiểu rồi"
  },
  {
    "id": "yct3-dong-wu-yuan",
    "hanzi": "动物园",
    "pinyin": "dòngwùyuán",
    "meaning": "sở thú",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "孩子们喜欢去动物园",
    "examplePinyin": "Hái zi men xǐ huān qù dòng wù yuán",
    "exampleVi": "Trẻ em thích đi sở thú"
  },
  {
    "id": "yct3-du",
    "hanzi": "读",
    "pinyin": "dú",
    "meaning": "đọc (sách, văn bản)",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我喜欢读书",
    "examplePinyin": "Wǒ xǐhuan dúshū",
    "exampleVi": "Tôi thích đọc sách"
  },
  {
    "id": "yct3-dui",
    "hanzi": "对",
    "pinyin": "duì",
    "meaning": "đúng, đối với",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你说得对",
    "examplePinyin": "Nǐ shuō de duì",
    "exampleVi": "Bạn nói đúng"
  },
  {
    "id": "yct3-duo",
    "hanzi": "多",
    "pinyin": "duō",
    "meaning": "nhiều",
    "category": "so-luong-va-do-luong",
    "example": "很多人",
    "examplePinyin": "Hěn duō rén",
    "exampleVi": "Nhiều người"
  },
  {
    "id": "yct3-duo-shao",
    "hanzi": "多少",
    "pinyin": "duōshao",
    "meaning": "bao nhiêu",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你有多少钱？",
    "examplePinyin": "Nǐ yǒu duōshǎo qián?",
    "exampleVi": "Bạn có bao nhiêu tiền?"
  },
  {
    "id": "yct3-er",
    "hanzi": "二",
    "pinyin": "èr",
    "meaning": "hai (số); Hán-Việt 'nhị'",
    "category": "so-luong-va-do-luong",
    "example": "二年级",
    "examplePinyin": "èr niánjí",
    "exampleVi": "Lớp hai"
  },
  {
    "id": "yct3-er-duo",
    "hanzi": "耳朵",
    "pinyin": "ěrduo",
    "meaning": "tai",
    "category": "suc-khoe-va-co-the",
    "example": "兔子有长耳朵。",
    "examplePinyin": "Tùzi yǒu cháng ěrduo.",
    "exampleVi": "Thỏ có cái tai dài."
  },
  {
    "id": "yct3-er-zi",
    "hanzi": "儿子",
    "pinyin": "érzi",
    "meaning": "con trai",
    "category": "nha-va-gia-dinh",
    "example": "我儿子今年五岁。",
    "examplePinyin": "Wǒ érzi jīnnián wǔ suì.",
    "exampleVi": "Con trai tôi năm nay năm tuổi."
  },
  {
    "id": "yct3-fan-guan",
    "hanzi": "饭馆",
    "pinyin": "fànguǎn",
    "meaning": "nhà hàng",
    "category": "do-an-va-do-uong",
    "example": "我们去饭馆吃饭吧",
    "examplePinyin": "Wǒ men qù fàn guǎn chī fàn ba",
    "exampleVi": "Chúng ta đi nhà hàng ăn cơm đi"
  },
  {
    "id": "yct3-fang-jian",
    "hanzi": "房间",
    "pinyin": "fángjiān",
    "meaning": "phòng (nhà)",
    "category": "nha-va-gia-dinh",
    "example": "这是我的房间",
    "examplePinyin": "Zhè shì wǒ de fángjiān",
    "exampleVi": "Đây là phòng của tôi"
  },
  {
    "id": "yct3-fei-chang",
    "hanzi": "非常",
    "pinyin": "fēicháng",
    "meaning": "cực kỳ, rất",
    "category": "pho-tu",
    "example": "这本书非常好。",
    "examplePinyin": "Zhè běn shū fēicháng hǎo.",
    "exampleVi": "Quyển sách này rất hay."
  },
  {
    "id": "yct3-fei-ji",
    "hanzi": "飞机",
    "pinyin": "fēijī",
    "meaning": "máy bay",
    "category": "giao-thong-va-giao-thong",
    "example": "坐飞机去",
    "examplePinyin": "Zuò fēijī qù",
    "exampleVi": "Đi máy bay"
  },
  {
    "id": "yct3-fu-wu-yuan",
    "hanzi": "服务员",
    "pinyin": "fúwùyuán",
    "meaning": "nhân viên phục vụ, phục vụ viên",
    "category": "nhung-nguoi",
    "example": "服务员来了",
    "examplePinyin": "Fúwùyuán lái le",
    "exampleVi": "Nhân viên phục vụ đến rồi"
  },
  {
    "id": "yct3-gan-mao",
    "hanzi": "感冒",
    "pinyin": "gǎnmào",
    "meaning": "Cảm lạnh, cảm cúm",
    "category": "suc-khoe-va-co-the",
    "example": "我感冒了，头痛发热。",
    "examplePinyin": "Wǒ gǎnmào le, tóu tòng fā rè.",
    "exampleVi": "Tôi bị cảm, đau đầu sốt."
  },
  {
    "id": "yct3-gao",
    "hanzi": "高",
    "pinyin": "gāo",
    "meaning": "cao (tính từ); Hán-Việt 'cao'",
    "category": "tinh-tu",
    "example": "很高",
    "examplePinyin": "hěn gāo",
    "exampleVi": "Rất cao"
  },
  {
    "id": "yct3-gao-su",
    "hanzi": "告诉",
    "pinyin": "gàosu",
    "meaning": "báo cho, nói cho ai biết",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "我告诉你一个秘密",
    "examplePinyin": "Wǒ gàosu nǐ yī gè mìmì",
    "exampleVi": "Tôi báo cho bạn một bí mật"
  },
  {
    "id": "yct3-gao-xing",
    "hanzi": "高兴",
    "pinyin": "gāoxìng",
    "meaning": "vui, vui vẻ",
    "category": "suy-nghi-va-cam-xuc",
    "example": "我很高兴",
    "examplePinyin": "Wǒ hěn gāoxìng",
    "exampleVi": "Tôi rất vui"
  },
  {
    "id": "yct3-ge",
    "hanzi": "个",
    "pinyin": "gè",
    "meaning": "cái, quả, con (lượng từ phổ biến nhất)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "一个人",
    "examplePinyin": "yī gè rén",
    "exampleVi": "Một người"
  },
  {
    "id": "yct3-ge-ge",
    "hanzi": "哥哥",
    "pinyin": "gēge",
    "meaning": "anh trai",
    "category": "nha-va-gia-dinh",
    "example": "我哥哥比我大五岁。",
    "examplePinyin": "Wǒ gēge bǐ wǒ dà wǔ suì.",
    "exampleVi": "Anh trai tôi lớn hơn tôi năm tuổi."
  },
  {
    "id": "yct3-ge-zi",
    "hanzi": "个子",
    "pinyin": "gèzi",
    "meaning": "chiều cao",
    "category": "nhung-nguoi",
    "example": "他个子很高",
    "examplePinyin": "Tā gè zi hěn gāo",
    "exampleVi": "Anh ấy cao lớn"
  },
  {
    "id": "yct3-gong-gong-qi-che",
    "hanzi": "公共汽车",
    "pinyin": "gōnggòng qìchē",
    "meaning": "xe buýt",
    "category": "giao-thong-va-giao-thong",
    "example": "我每天坐公共汽车上班",
    "examplePinyin": "Wǒ měi tiān zuò gōng gòng qì chē shàng bān",
    "exampleVi": "Tôi hàng ngày ngồi xe buýt đi làm"
  },
  {
    "id": "yct3-gong-jin",
    "hanzi": "公斤",
    "pinyin": "gōngjīn",
    "meaning": "công cân",
    "category": "so-luong-va-do-luong",
    "example": "一公斤苹果",
    "examplePinyin": "Yī gōng jīn píng guǒ",
    "exampleVi": "Một ki-lô-gam táo"
  },
  {
    "id": "yct3-gong-si",
    "hanzi": "公司",
    "pinyin": "gōngsī",
    "meaning": "công ty",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我在一家公司工作",
    "examplePinyin": "Wǒ zài yī jiā gōng sī gōng zuò",
    "exampleVi": "Tôi làm việc ở một công ty"
  },
  {
    "id": "yct3-gong-zuo",
    "hanzi": "工作",
    "pinyin": "gōngzuò",
    "meaning": "công việc, làm việc",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我在工作",
    "examplePinyin": "Wǒ zài gōngzuò",
    "exampleVi": "Tôi đang làm việc"
  },
  {
    "id": "yct3-gou",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "meaning": "con chó",
    "category": "thien-nhien-va-dong-vat",
    "example": "这是我的狗",
    "examplePinyin": "Zhè shì wǒ de gǒu",
    "exampleVi": "Đây là con chó của tôi"
  },
  {
    "id": "yct3-gua-feng",
    "hanzi": "刮风",
    "pinyin": "guāfēng",
    "meaning": "gió thổi",
    "category": "thien-nhien-va-dong-vat",
    "example": "外面在刮风。",
    "examplePinyin": "Wàimiàn zài guāfēng.",
    "exampleVi": "Bên ngoài đang gió."
  },
  {
    "id": "yct3-guan",
    "hanzi": "关",
    "pinyin": "guān",
    "meaning": "đóng, tắt (Hán-Việt: quan)",
    "category": "dong-tu",
    "example": "关门",
    "examplePinyin": "Guān mén",
    "exampleVi": "Đóng cửa"
  },
  {
    "id": "yct3-gui",
    "hanzi": "贵",
    "pinyin": "guì",
    "meaning": "đắt, quý (Hán-Việt: quý)",
    "category": "tinh-tu",
    "example": "很贵",
    "examplePinyin": "Hěn guì",
    "exampleVi": "Rất đắt"
  },
  {
    "id": "yct3-guo",
    "hanzi": "过",
    "pinyin": "guò",
    "meaning": "đã qua",
    "category": "giao-thong-va-giao-thong",
    "example": "我吃过饭了",
    "examplePinyin": "Wǒ chī guò fàn le",
    "exampleVi": "Tôi đã ăn rồi"
  },
  {
    "id": "yct3-guo-zhi",
    "hanzi": "果汁",
    "pinyin": "guǒzhī",
    "meaning": "Nước ép trái cây",
    "category": "do-an-va-do-uong",
    "example": "我喜欢喝新鲜果汁。",
    "examplePinyin": "Wǒ xǐhuan hē xīnxiān guǒzhī.",
    "exampleVi": "Tôi thích uống nước ép trái cây tươi."
  },
  {
    "id": "yct3-hai-zi",
    "hanzi": "孩子",
    "pinyin": "háizi",
    "meaning": "đứa trẻ, trẻ em",
    "category": "nhung-nguoi",
    "example": "他们有一个孩子",
    "examplePinyin": "Tāmen yǒu yī gè háizi",
    "exampleVi": "Họ có một đứa con"
  },
  {
    "id": "yct3-han-yu",
    "hanzi": "汉语",
    "pinyin": "hànyǔ",
    "meaning": "tiếng Trung (ngôn ngữ)",
    "category": "khac",
    "example": "我在学习汉语",
    "examplePinyin": "Wǒ zài xuéxí Hànyǔ",
    "exampleVi": "Tôi đang học tiếng Trung"
  },
  {
    "id": "yct3-hao",
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaning": "tốt",
    "category": "tinh-tu",
    "example": "这是好书",
    "examplePinyin": "Zhè shì hǎo shū",
    "exampleVi": "Đây là quyển sách tốt"
  },
  {
    "id": "yct3-hao-chi",
    "hanzi": "好吃",
    "pinyin": "hǎochī",
    "meaning": "ngon",
    "category": "do-an-va-do-uong",
    "example": "这个菜很好吃。",
    "examplePinyin": "Zhège cài hěn hǎochī.",
    "exampleVi": "Món này rất ngon."
  },
  {
    "id": "yct3-he",
    "hanzi": "喝",
    "pinyin": "hē",
    "meaning": "uống (động từ); Hán-Việt 'hã' (gốc)",
    "category": "do-an-va-do-uong",
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct3-hei",
    "hanzi": "嘿",
    "pinyin": "hēi",
    "meaning": "này (thán từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "嘿，你来了",
    "examplePinyin": "Hēi, nǐ lái le",
    "exampleVi": "Này, bạn đến rồi"
  },
  {
    "id": "yct3-hei-hei",
    "hanzi": "黑",
    "pinyin": "hēi",
    "meaning": "đen",
    "category": "quan-ao-va-phu-kien",
    "example": "他的头发是黑色的",
    "examplePinyin": "Tā de tóu fà shì hēi sè de",
    "exampleVi": "Tóc anh ấy màu đen"
  },
  {
    "id": "yct3-hen",
    "hanzi": "很",
    "pinyin": "hěn",
    "meaning": "rất, lắm (phó từ tăng cường)",
    "category": "pho-tu",
    "example": "很好",
    "examplePinyin": "hěn hǎo",
    "exampleVi": "Rất tốt / Rất tốt"
  },
  {
    "id": "yct3-hong",
    "hanzi": "红",
    "pinyin": "hóng",
    "meaning": "màu đỏ",
    "category": "quan-ao-va-phu-kien",
    "example": "我喜欢红色",
    "examplePinyin": "Wǒ xǐ huān hóng sè",
    "exampleVi": "Tôi thích màu đỏ"
  },
  {
    "id": "yct3-hou-zi",
    "hanzi": "猴子",
    "pinyin": "hóuzi",
    "meaning": "khỉ",
    "category": "thien-nhien-va-dong-vat",
    "example": "猴子在树上跳来跳去。",
    "examplePinyin": "Hóuzi zài shùshàng tiàoláitiàoqù.",
    "exampleVi": "Khỉ đang nhảy qua nhảy lại trên cây."
  },
  {
    "id": "yct3-hua",
    "hanzi": "画",
    "pinyin": "huà",
    "meaning": "bức tranh",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "墙上有一幅画",
    "examplePinyin": "Qiáng shàng yǒu yī fú huà",
    "exampleVi": "Trên tường có một bức tranh"
  },
  {
    "id": "yct3-huai",
    "hanzi": "坏",
    "pinyin": "huài",
    "meaning": "xấu, hỏng",
    "category": "tinh-tu",
    "example": "这个坏了",
    "examplePinyin": "Zhège huài le",
    "exampleVi": "Cái này đã hỏng"
  },
  {
    "id": "yct3-huang",
    "hanzi": "黄",
    "pinyin": "huáng",
    "meaning": "hoàng",
    "category": "quan-ao-va-phu-kien",
    "example": "这是黄色的",
    "examplePinyin": "Zhè shì huáng sè de",
    "exampleVi": "Đây là màu vàng"
  },
  {
    "id": "yct3-hui-da",
    "hanzi": "回答",
    "pinyin": "huídá",
    "meaning": "trả lời",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "请回答问题",
    "examplePinyin": "Qǐng huídá wèntí",
    "exampleVi": "Xin hãy trả lời câu hỏi"
  },
  {
    "id": "yct3-huo-che-zhan",
    "hanzi": "火车站",
    "pinyin": "huǒchēzhàn",
    "meaning": "ga xe lửa, nhà ga; nơi tàu hỏa dừng và đón trả khách",
    "category": "giao-thong-va-giao-thong",
    "example": "火车站离这里很远。",
    "examplePinyin": "Huǒchēzhàn lí zhèlǐ hěn yuǎn.",
    "exampleVi": "Ga xe lửa cách đây rất xa."
  },
  {
    "id": "yct3-ji",
    "hanzi": "几",
    "pinyin": "jǐ",
    "meaning": "mấy, bao nhiêu (từ hỏi số lượng)",
    "category": "so-luong-va-do-luong",
    "example": "你多大？我二十几岁",
    "examplePinyin": "Nǐ duō dà? Wǒ èrshí jǐ suì",
    "exampleVi": "Bạn bao nhiêu tuổi? Tôi hai mươi mấy tuổi"
  },
  {
    "id": "yct3-ji-chang",
    "hanzi": "机场",
    "pinyin": "jīchǎng",
    "meaning": "sân bay",
    "category": "giao-thong-va-giao-thong",
    "example": "我们去机场送朋友。",
    "examplePinyin": "Wǒmen qù jīchǎng sòng péngyǒu.",
    "exampleVi": "Chúng tôi ra sân bay tiễn bạn."
  },
  {
    "id": "yct3-jia",
    "hanzi": "家",
    "pinyin": "jiā",
    "meaning": "gia đình",
    "category": "nha-va-gia-dinh",
    "example": "我爱我家",
    "examplePinyin": "Wǒ ài wǒ jiā",
    "exampleVi": "Tôi yêu gia đình tôi"
  },
  {
    "id": "yct3-jian",
    "hanzi": "件",
    "pinyin": "jiàn",
    "meaning": "cái, chiếc",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "一件衣服",
    "examplePinyin": "Yī jiàn yī fú",
    "exampleVi": "Một cái áo"
  },
  {
    "id": "yct3-jiao",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "meaning": "bàn chân",
    "category": "suc-khoe-va-co-the",
    "example": "我的脚很疼",
    "examplePinyin": "Wǒ de jiǎo hěn téng",
    "exampleVi": "Bàn chân tôi rất đau"
  },
  {
    "id": "yct3-jiao-shi",
    "hanzi": "教室",
    "pinyin": "jiàoshì",
    "meaning": "lớp học",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我们在教室上课",
    "examplePinyin": "Wǒ men zài jiào shì shàng kè",
    "exampleVi": "Chúng tôi học trong lớp học"
  },
  {
    "id": "yct3-jie-jie",
    "hanzi": "姐姐",
    "pinyin": "jiějie",
    "meaning": "chị gái",
    "category": "nha-va-gia-dinh",
    "example": "这是我姐姐",
    "examplePinyin": "Zhè shì wǒ jiějie",
    "exampleVi": "Đây là chị gái tôi"
  },
  {
    "id": "yct3-jie-shao",
    "hanzi": "介绍",
    "pinyin": "jièshào",
    "meaning": "giới thiệu",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "让我介绍一下",
    "examplePinyin": "Ràng wǒ jièshǎo yīxià",
    "exampleVi": "Để tôi giới thiệu một chút"
  },
  {
    "id": "yct3-jin",
    "hanzi": "进",
    "pinyin": "jìn",
    "meaning": "vào, tiến lên (Hán-Việt: tiến)",
    "category": "giao-thong-va-giao-thong",
    "example": "进去",
    "examplePinyin": "Jìn qù",
    "exampleVi": "Bước vào bên trong"
  },
  {
    "id": "yct3-jin-jin",
    "hanzi": "近",
    "pinyin": "jìn",
    "meaning": "gần",
    "category": "noi",
    "example": "我家很近",
    "examplePinyin": "Wǒ jiā hěn jìn",
    "exampleVi": "Nhà tôi rất gần"
  },
  {
    "id": "yct3-jiu",
    "hanzi": "就",
    "pinyin": "jiù",
    "meaning": "thì, liền, bèn; ngay lập tức; đã là (nhấn mạnh)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我就去",
    "examplePinyin": "Wǒ jiù qù",
    "exampleVi": "Tôi đi ngay/đâu phải đi"
  },
  {
    "id": "yct3-jiu-jiu",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "meaning": "chín (số); Hán-Việt 'cửu'",
    "category": "so-luong-va-do-luong",
    "example": "九点钟",
    "examplePinyin": "jiǔ diǎn zhōng",
    "exampleVi": "Chín giờ"
  },
  {
    "id": "yct3-jue-de",
    "hanzi": "觉得",
    "pinyin": "juéde",
    "meaning": "Cảm thấy, nghĩ, cho rằng",
    "category": "suy-nghi-va-cam-xuc",
    "example": "我觉得今天很冷。",
    "examplePinyin": "Wǒ juéde jīntiān hěn lěng.",
    "exampleVi": "Tôi cảm thấy hôm nay rất lạnh."
  },
  {
    "id": "yct3-ka-fei",
    "hanzi": "咖啡",
    "pinyin": "kāfēi",
    "meaning": "Cà phê",
    "category": "do-an-va-do-uong",
    "example": "我每天早上都喝咖啡。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē kāfēi.",
    "exampleVi": "Tôi uống cà phê mỗi buổi sáng."
  },
  {
    "id": "yct3-kai",
    "hanzi": "开",
    "pinyin": "kāi",
    "meaning": "Mở ra, bật; nở (hoa); bắt đầu; nấu sôi. Động từ chỉ hành động mở hoặc khởi sự.",
    "category": "dong-tu",
    "example": "请开门",
    "examplePinyin": "Qǐng kāimén",
    "exampleVi": "Làm ơn mở cửa"
  },
  {
    "id": "yct3-kai-shi",
    "hanzi": "开始",
    "pinyin": "kāishǐ",
    "meaning": "bắt đầu, khởi đầu; điểm khởi đầu của một hành động, sự kiện hoặc quá trình",
    "category": "dong-tu",
    "example": "电影开始了。",
    "examplePinyin": "Diànyǐng kāishǐ le.",
    "exampleVi": "Bộ phim đã bắt đầu."
  },
  {
    "id": "yct3-kan",
    "hanzi": "看",
    "pinyin": "kàn",
    "meaning": "nhìn, xem (động từ); Hán-Việt 'khán'",
    "category": "dong-tu",
    "example": "我看书",
    "examplePinyin": "Wǒ kàn shū",
    "exampleVi": "Tôi đọc sách"
  },
  {
    "id": "yct3-kan-jian",
    "hanzi": "看见",
    "pinyin": "kànjiàn",
    "meaning": "thấy, trông thấy",
    "category": "dong-tu",
    "example": "我看见他了",
    "examplePinyin": "Wǒ kànjiàn tā le",
    "exampleVi": "Tôi thấy anh ấy rồi"
  },
  {
    "id": "yct3-kao-shi",
    "hanzi": "考试",
    "pinyin": "kǎoshì",
    "meaning": "thi, kỳ thi",
    "category": "nghien-cuu-va-lam-viec",
    "example": "明天有考试",
    "examplePinyin": "Míngtiān yǒu kǎoshì",
    "exampleVi": "Ngày mai có thi"
  },
  {
    "id": "yct3-ke-ai",
    "hanzi": "可爱",
    "pinyin": "kě'ài",
    "meaning": "đáng yêu",
    "category": "tinh-tu",
    "example": "你的妹妹真可爱",
    "examplePinyin": "Nǐ de mèi mèi zhēn kě ài",
    "exampleVi": "Em gái cậu thật đáng yêu"
  },
  {
    "id": "yct3-ke-neng",
    "hanzi": "可能",
    "pinyin": "kěnéng",
    "meaning": "có thể",
    "category": "pho-tu",
    "example": "明天可能下雨",
    "examplePinyin": "Míng tiān kě néng xià yǔ",
    "exampleVi": "Ngày mai có thể mưa"
  },
  {
    "id": "yct3-ke-yi",
    "hanzi": "可以",
    "pinyin": "kěyǐ",
    "meaning": "có thể",
    "category": "pho-tu",
    "example": "我可以进去吗",
    "examplePinyin": "Wǒ kě yǐ jìn qù ma",
    "exampleVi": "Tôi có thể vào không"
  },
  {
    "id": "yct3-kou",
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaning": "miệng; Hán-Việt 'khẩu'",
    "category": "suc-khoe-va-co-the",
    "example": "张口",
    "examplePinyin": "zhāng kǒu",
    "exampleVi": "Mở miệng"
  },
  {
    "id": "yct3-ku-zi",
    "hanzi": "裤子",
    "pinyin": "kùzi",
    "meaning": "quần",
    "category": "quan-ao-va-phu-kien",
    "example": "这条裤子很合适",
    "examplePinyin": "Zhè tiáo kù zi hěn hé shì",
    "exampleVi": "Cái quần này rất vừa"
  },
  {
    "id": "yct3-kuai",
    "hanzi": "块",
    "pinyin": "kuài",
    "meaning": "miếng, khối, cục (lượng từ) hoặc đồng nhân dân tệ",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "一块钱",
    "examplePinyin": "yí kuài qián",
    "exampleVi": "một đồng (tiền)"
  },
  {
    "id": "yct3-lai",
    "hanzi": "来",
    "pinyin": "lái",
    "meaning": "đến, tới, đến nơi",
    "category": "giao-thong-va-giao-thong",
    "example": "他来了",
    "examplePinyin": "Tā lái le",
    "exampleVi": "Anh ấy đã đến"
  },
  {
    "id": "yct3-lan",
    "hanzi": "蓝",
    "pinyin": "lán",
    "meaning": "xanh da trời",
    "category": "quan-ao-va-phu-kien",
    "example": "天空是蓝色的",
    "examplePinyin": "Tiān kōng shì lán sè de",
    "exampleVi": "Bầu trời màu xanh"
  },
  {
    "id": "yct3-lao-shi",
    "hanzi": "老师",
    "pinyin": "lǎoshī",
    "meaning": "giáo viên",
    "category": "nghien-cuu-va-lam-viec",
    "example": "她是我的中文老师。",
    "examplePinyin": "Tā shì wǒ de Zhōngwén lǎoshī.",
    "exampleVi": "Cô ấy là giáo viên tiếng Trung của tôi."
  },
  {
    "id": "yct3-lei",
    "hanzi": "累",
    "pinyin": "lèi",
    "meaning": "mệt, mệt mỏi",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我很累",
    "examplePinyin": "Wǒ hěn lèi",
    "exampleVi": "Tôi rất mệt"
  },
  {
    "id": "yct3-li",
    "hanzi": "离",
    "pinyin": "lí",
    "meaning": "cách, khoảng cách",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我家离学校很远",
    "examplePinyin": "Wǒ jiā lí xué xiào hěn yuǎn",
    "exampleVi": "Nhà tôi cách trường rất xa"
  },
  {
    "id": "yct3-li-li",
    "hanzi": "里",
    "pinyin": "lǐ",
    "meaning": "trong, bên trong (chỉ vị trí ở bên trong)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "房间里有人在",
    "examplePinyin": "Fángjiān lǐ yǒu rén zài",
    "exampleVi": "Trong phòng có người"
  },
  {
    "id": "yct3-li-mian",
    "hanzi": "里面",
    "pinyin": "lǐmiàn",
    "meaning": "Bên trong",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "房间里面有三个人。",
    "examplePinyin": "Fángjiān lǐmiàn yǒu sān gè rén.",
    "exampleVi": "Trong phòng có ba người."
  },
  {
    "id": "yct3-liang",
    "hanzi": "两",
    "pinyin": "liǎng",
    "meaning": "hai",
    "category": "so-luong-va-do-luong",
    "example": "我有两本书",
    "examplePinyin": "Wǒ yǒu liǎng běn shū",
    "exampleVi": "Tôi có hai cuốn sách"
  },
  {
    "id": "yct3-ling",
    "hanzi": "零",
    "pinyin": "líng",
    "meaning": "không, con số không",
    "category": "so-luong-va-do-luong",
    "example": "零度",
    "examplePinyin": "líng dù",
    "exampleVi": "không độ"
  },
  {
    "id": "yct3-liu",
    "hanzi": "六",
    "pinyin": "liù",
    "meaning": "sáu (số); Hán-Việt 'lục'",
    "category": "so-luong-va-do-luong",
    "example": "六个苹果",
    "examplePinyin": "liù gè píngguǒ",
    "exampleVi": "Sáu quả táo"
  },
  {
    "id": "yct3-lu",
    "hanzi": "路",
    "pinyin": "lù",
    "meaning": "đường, lối đi (Hán-Việt: lộ)",
    "category": "giao-thong-va-giao-thong",
    "example": "走路",
    "examplePinyin": "Zǒu lù",
    "exampleVi": "Đi bộ, đi đường"
  },
  {
    "id": "yct3-lv",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "meaning": "màu xanh lá",
    "category": "quan-ao-va-phu-kien",
    "example": "树叶是绿色的",
    "examplePinyin": "Shù yè shì lǜ sè de",
    "exampleVi": "Lá cây có màu xanh"
  },
  {
    "id": "yct3-lv-you",
    "hanzi": "旅游",
    "pinyin": "lǚyóu",
    "meaning": "du lịch",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我喜欢旅游",
    "examplePinyin": "Wǒ xǐ huān lǚ yóu",
    "exampleVi": "Tôi thích du lịch"
  },
  {
    "id": "yct3-ma",
    "hanzi": "吗",
    "pinyin": "ma",
    "meaning": "...phải không? (trợ từ hỏi)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你好吗？",
    "examplePinyin": "Nǐ hǎo ma?",
    "exampleVi": "Bạn khỏe không?"
  },
  {
    "id": "yct3-ma-ma",
    "hanzi": "妈妈",
    "pinyin": "māma",
    "meaning": "mẹ",
    "category": "nha-va-gia-dinh",
    "example": "我妈妈是老师。",
    "examplePinyin": "Wǒ māma shì lǎoshī.",
    "exampleVi": "Mẹ tôi là giáo viên."
  },
  {
    "id": "yct3-ma-shang",
    "hanzi": "马上",
    "pinyin": "mǎshàng",
    "meaning": "ngay lập tức, ngay",
    "category": "pho-tu",
    "example": "我马上来",
    "examplePinyin": "Wǒ mǎshàng lái",
    "exampleVi": "Tôi đến ngay"
  },
  {
    "id": "yct3-mai",
    "hanzi": "卖",
    "pinyin": "mài",
    "meaning": "bán",
    "category": "dong-tu",
    "example": "这家店卖水果",
    "examplePinyin": "Zhè jiā diàn mài shuǐ guǒ",
    "exampleVi": "Cửa hàng này bán trái cây"
  },
  {
    "id": "yct3-man",
    "hanzi": "慢",
    "pinyin": "màn",
    "meaning": "chậm (Hán-Việt: man)",
    "category": "tinh-tu",
    "example": "慢慢走",
    "examplePinyin": "Màn màn zǒu",
    "exampleVi": "Đi chậm rãi"
  },
  {
    "id": "yct3-mang",
    "hanzi": "忙",
    "pinyin": "máng",
    "meaning": "bận, bận rộn",
    "category": "tinh-tu",
    "example": "我很忙",
    "examplePinyin": "Wǒ hěn máng",
    "exampleVi": "Tôi rất bận"
  },
  {
    "id": "yct3-mao",
    "hanzi": "猫",
    "pinyin": "māo",
    "meaning": "con mèo",
    "category": "thien-nhien-va-dong-vat",
    "example": "猫很可爱",
    "examplePinyin": "Māo hěn kě ài",
    "exampleVi": "Con mèo rất đáng yêu"
  },
  {
    "id": "yct3-mei-gui-hua",
    "hanzi": "玫瑰花",
    "pinyin": "méiguīhuā",
    "meaning": "bông hồng, hoa hồng",
    "category": "thien-nhien-va-dong-vat",
    "example": "这是一朵玫瑰花",
    "examplePinyin": "Zhè shì yī duǒ méiguīhuā",
    "exampleVi": "Đây là một bông hồng"
  },
  {
    "id": "yct3-mei-mei",
    "hanzi": "妹妹",
    "pinyin": "mèimei",
    "meaning": "em gái",
    "category": "nha-va-gia-dinh",
    "example": "这是我妹妹",
    "examplePinyin": "Zhè shì wǒ mèimei",
    "exampleVi": "Đây là em gái tôi"
  },
  {
    "id": "yct3-mei-mei-2",
    "hanzi": "没",
    "pinyin": "méi",
    "meaning": "không, chưa (phủ định quá khứ/hoàn thành); không có",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我没去",
    "examplePinyin": "Wǒ méi qù",
    "exampleVi": "Tôi chưa/đã không đi"
  },
  {
    "id": "yct3-men",
    "hanzi": "门",
    "pinyin": "mén",
    "meaning": "cửa, cổng",
    "category": "nha-va-gia-dinh",
    "example": "请关门",
    "examplePinyin": "Qǐng guān mén",
    "exampleVi": "Làm ơn đóng cửa"
  },
  {
    "id": "yct3-mi-fan",
    "hanzi": "米饭",
    "pinyin": "mǐfàn",
    "meaning": "cơm (gạo)",
    "category": "do-an-va-do-uong",
    "example": "我吃米饭",
    "examplePinyin": "Wǒ chī mǐfàn",
    "exampleVi": "Tôi ăn cơm"
  },
  {
    "id": "yct3-mian-bao",
    "hanzi": "面包",
    "pinyin": "miànbāo",
    "meaning": "bánh mì",
    "category": "do-an-va-do-uong",
    "example": "我吃面包",
    "examplePinyin": "Wǒ chī miànbāo",
    "exampleVi": "Tôi ăn bánh mì"
  },
  {
    "id": "yct3-mian-tiao",
    "hanzi": "面条",
    "pinyin": "miàntiáo",
    "meaning": "mì (sợi)",
    "category": "do-an-va-do-uong",
    "example": "我吃面条",
    "examplePinyin": "Wǒ chī miàntiáo",
    "exampleVi": "Tôi ăn mì"
  },
  {
    "id": "yct3-na",
    "hanzi": "那",
    "pinyin": "nà",
    "meaning": "đó",
    "category": "dai-tu",
    "example": "那是谁",
    "examplePinyin": "Nà shì shuí",
    "exampleVi": "Đó là ai"
  },
  {
    "id": "yct3-na--er-",
    "hanzi": "哪{儿}",
    "pinyin": "nǎr",
    "meaning": "Ở đâu, nơi nào; (hỏi vị trí)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你去哪儿？",
    "examplePinyin": "Nǐ qù nǎr?",
    "exampleVi": "Bạn đi đâu?"
  },
  {
    "id": "yct3-na--er--na{er}",
    "hanzi": "那{儿}",
    "pinyin": "nàr",
    "meaning": "ở đó, chỗ đó; đại từ chỉ nơi ở xa người nói",
    "category": "noi",
    "example": "书在那{儿}。",
    "examplePinyin": "Shū zài nàr.",
    "exampleVi": "Quyển sách ở đó."
  },
  {
    "id": "yct3-na-na",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "meaning": "đại từ hỏi: nào, ở đâu, cái nào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你是哪国人？",
    "examplePinyin": "Nǐ shì nǎ guó rén?",
    "exampleVi": "Bạn là người nước nào?"
  },
  {
    "id": "yct3-na-na-2",
    "hanzi": "拿",
    "pinyin": "ná",
    "meaning": "lấy, cầm, nắm",
    "category": "dong-tu",
    "example": "请拿一本书",
    "examplePinyin": "Qǐng ná yī běn shū",
    "exampleVi": "Làm ơn lấy một cuốn sách"
  },
  {
    "id": "yct3-nan-nan",
    "hanzi": "难",
    "pinyin": "nán",
    "meaning": "khó, gian nan (Hán-Việt: nan)",
    "category": "tinh-tu",
    "example": "很难",
    "examplePinyin": "Hěn nán",
    "exampleVi": "Rất khó"
  },
  {
    "id": "yct3-nan-ren",
    "hanzi": "男人",
    "pinyin": "nánrén",
    "meaning": "đàn ông, người nam",
    "category": "nhung-nguoi",
    "example": "他是我的男人",
    "examplePinyin": "Tā shì wǒ de nán rén",
    "exampleVi": "Anh ấy là đàn ông của tôi"
  },
  {
    "id": "yct3-ne",
    "hanzi": "呢",
    "pinyin": "ne",
    "meaning": "thì sao, ạ (trợ từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你呢",
    "examplePinyin": "Nǐ ne",
    "exampleVi": "Còn bạn thì sao"
  },
  {
    "id": "yct3-ni",
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaning": "bạn, ông/bà/nàng/cậu (đại từ ngôi thứ hai)",
    "category": "dai-tu",
    "example": "你好",
    "examplePinyin": "Nǐ hǎo",
    "exampleVi": "Xin chào / Chào bạn"
  },
  {
    "id": "yct3-niao",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "meaning": "chim",
    "category": "thien-nhien-va-dong-vat",
    "example": "树上有鸟",
    "examplePinyin": "Shù shàng yǒu niǎo",
    "exampleVi": "Trên cây có chim"
  },
  {
    "id": "yct3-niu-nai",
    "hanzi": "牛奶",
    "pinyin": "niúnǎi",
    "meaning": "Sữa (bò)",
    "category": "do-an-va-do-uong",
    "example": "我每天早上都喝牛奶。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē niúnǎi.",
    "exampleVi": "Tôi uống sữa mỗi buổi sáng."
  },
  {
    "id": "yct3-nv-er",
    "hanzi": "女儿",
    "pinyin": "nǚ'ér",
    "meaning": "con gái",
    "category": "nha-va-gia-dinh",
    "example": "这是我女儿",
    "examplePinyin": "Zhè shì wǒ nǚ'ér",
    "exampleVi": "Đây là con gái tôi"
  },
  {
    "id": "yct3-nv-ren",
    "hanzi": "女人",
    "pinyin": "nǚrén",
    "meaning": "phụ nữ, người phụ nữ",
    "category": "nhung-nguoi",
    "example": "她是我的女人",
    "examplePinyin": "Tā shì wǒ de nǚ rén",
    "exampleVi": "Cô ấy là người phụ nữ của tôi"
  },
  {
    "id": "yct3-pang-bian",
    "hanzi": "旁边",
    "pinyin": "pángbiān",
    "meaning": "bên cạnh",
    "category": "noi",
    "example": "我站在他旁边",
    "examplePinyin": "Wǒ zhàn zài tā pángbiān",
    "exampleVi": "Tôi đứng bên cạnh anh ấy"
  },
  {
    "id": "yct3-pian-yi",
    "hanzi": "便宜",
    "pinyin": "piányi",
    "meaning": "rẻ",
    "category": "tinh-tu",
    "example": "这家店的东西很便宜。",
    "examplePinyin": "Zhè jiā diàn de dōng xī hěn pián yi 。",
    "exampleVi": "Đồ vật ở cửa hàng này rất rẻ."
  },
  {
    "id": "yct3-piao",
    "hanzi": "票",
    "pinyin": "piào",
    "meaning": "vé, vé vào cửa",
    "category": "giao-thong-va-giao-thong",
    "example": "买一张票",
    "examplePinyin": "Mǎi yī zhāng piào",
    "exampleVi": "Mua một tấm vé"
  },
  {
    "id": "yct3-piao-liang",
    "hanzi": "漂亮",
    "pinyin": "piàoliang",
    "meaning": "đẹp",
    "category": "nhung-nguoi",
    "example": "她很漂亮",
    "examplePinyin": "Tā hěn piào liàng",
    "exampleVi": "Cô ấy rất đẹp"
  },
  {
    "id": "yct3-ping-guo",
    "hanzi": "苹果",
    "pinyin": "píngguǒ",
    "meaning": "Quả táo",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃苹果。",
    "examplePinyin": "Wǒ xǐhuān chī píngguǒ.",
    "exampleVi": "Tôi thích ăn táo."
  },
  {
    "id": "yct3-qi",
    "hanzi": "七",
    "pinyin": "qī",
    "meaning": "bảy (số); Hán-Việt 'thất'",
    "category": "so-luong-va-do-luong",
    "example": "这家书店每个星期七天都正常营业。",
    "examplePinyin": "zhè jiā shū diàn měi gè xīng qī qī tiān dōu zhèng cháng yíng yè.",
    "exampleVi": "Nhà sách này mở cửa hoạt động bình thường cả bảy ngày mỗi tuần."
  },
  {
    "id": "yct3-qi-zi",
    "hanzi": "妻子",
    "pinyin": "qīzi",
    "meaning": "vợ",
    "category": "nha-va-gia-dinh",
    "example": "这是我的妻子。",
    "examplePinyin": "Zhè shì wǒ de qīzi.",
    "exampleVi": "Đây là vợ tôi."
  },
  {
    "id": "yct3-qian",
    "hanzi": "前",
    "pinyin": "qián",
    "meaning": "trước, phía trước",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请往前走",
    "examplePinyin": "Qǐng wǎng qián zǒu",
    "exampleVi": "Xin hãy đi về phía trước"
  },
  {
    "id": "yct3-qian-bi",
    "hanzi": "铅笔",
    "pinyin": "qiānbǐ",
    "meaning": "bút chì",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我需要一支铅笔。",
    "examplePinyin": "Wǒ xūyào yī zhī qiānbǐ.",
    "exampleVi": "Tôi cần một cây bút chì."
  },
  {
    "id": "yct3-qian-mian",
    "hanzi": "前面",
    "pinyin": "qiánmiàn",
    "meaning": "phía trước; phần đầu, phần trước; tương lai",
    "category": "noi",
    "example": "前面就是银行。",
    "examplePinyin": "Qiánmiàn jiùshì yínháng.",
    "exampleVi": "Phía trước chính là ngân hàng."
  },
  {
    "id": "yct3-qian-qian",
    "hanzi": "千",
    "pinyin": "qiān",
    "meaning": "Ngàn",
    "category": "so-luong-va-do-luong",
    "example": "一千人",
    "examplePinyin": "Yī qiān rén",
    "exampleVi": "Một nghìn người"
  },
  {
    "id": "yct3-qing",
    "hanzi": "晴",
    "pinyin": "qíng",
    "meaning": "nắng, trong",
    "category": "tinh-tu",
    "example": "今天很晴",
    "examplePinyin": "Jīn tiān hěn qíng",
    "exampleVi": "Hôm nay trời tạnh nắng"
  },
  {
    "id": "yct3-qu",
    "hanzi": "去",
    "pinyin": "qù",
    "meaning": "đi (động từ di chuyển); Hán-Việt 'khứ'",
    "category": "giao-thong-va-giao-thong",
    "example": "我去学校",
    "examplePinyin": "Wǒ qù xuéxiào",
    "exampleVi": "Tôi đi trường"
  },
  {
    "id": "yct3-qu-nian",
    "hanzi": "去年",
    "pinyin": "qùnián",
    "meaning": "năm ngoái",
    "category": "thoi-gian",
    "example": "我去年去了中国",
    "examplePinyin": "Wǒ qùnián qùle Zhōngguó",
    "exampleVi": "Năm ngoái tôi đã đi Trung Quốc"
  },
  {
    "id": "yct3-qun-zi",
    "hanzi": "裙子",
    "pinyin": "qúnzi",
    "meaning": "váy (váy phụ nữ)",
    "category": "quan-ao-va-phu-kien",
    "example": "她穿着一条红色的裙子。",
    "examplePinyin": "Tā chuānzhe yì tiáo hóngsè de qúnzi.",
    "exampleVi": "Cô ấy đang mặc một chiếc váy màu đỏ."
  },
  {
    "id": "yct3-ren",
    "hanzi": "人",
    "pinyin": "rén",
    "meaning": "người",
    "category": "nhung-nguoi",
    "example": "我是中国人",
    "examplePinyin": "Wǒ shì Zhōng guó rén",
    "exampleVi": "Tôi là người Trung Quốc"
  },
  {
    "id": "yct3-ri",
    "hanzi": "日",
    "pinyin": "rì",
    "meaning": "mặt trời, ngày (thời gian)",
    "category": "thoi-gian",
    "example": "太阳从东方升起",
    "examplePinyin": "Tàiyáng cóng dōngfāng shēngqǐ",
    "exampleVi": "Mặt trời mọc từ phương đông"
  },
  {
    "id": "yct3-san",
    "hanzi": "三",
    "pinyin": "sān",
    "meaning": "ba (số); Hán-Việt 'tam'",
    "category": "so-luong-va-do-luong",
    "example": "我有三个哥哥",
    "examplePinyin": "Wǒ yǒu sān gè gēge",
    "exampleVi": "Tôi có ba người anh trai"
  },
  {
    "id": "yct3-shang-bian",
    "hanzi": "上边",
    "pinyin": "shàngbiān",
    "meaning": "bên trên, phía trên",
    "category": "noi",
    "example": "书在上边",
    "examplePinyin": "Shū zài shàngbiān",
    "exampleVi": "Quyển sách ở bên trên"
  },
  {
    "id": "yct3-shang-dian",
    "hanzi": "商店",
    "pinyin": "shāngdiàn",
    "meaning": "cửa hàng",
    "category": "khac",
    "example": "去商店",
    "examplePinyin": "qù shāngdiàn",
    "exampleVi": "đi cửa hàng"
  },
  {
    "id": "yct3-shang-wang",
    "hanzi": "上网",
    "pinyin": "shàngwǎng",
    "meaning": "lướt web, lên mạng (sử dụng Internet)",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我在上网",
    "examplePinyin": "Wǒ zài shàngwǎng",
    "exampleVi": "Tôi đang lướt web"
  },
  {
    "id": "yct3-shang-wu",
    "hanzi": "上午",
    "pinyin": "shàngwǔ",
    "meaning": "buổi sáng",
    "category": "thoi-gian",
    "example": "我上午去上班",
    "examplePinyin": "Wǒ shàngwǔ qù shàngbān",
    "exampleVi": "Sáng tôi đi làm"
  },
  {
    "id": "yct3-shao",
    "hanzi": "少",
    "pinyin": "shǎo",
    "meaning": "ít, thiếu, ít hơn",
    "category": "so-luong-va-do-luong",
    "example": "人很少",
    "examplePinyin": "Rén hěn shǎo",
    "exampleVi": "Người rất ít"
  },
  {
    "id": "yct3-shen-me",
    "hanzi": "什么",
    "pinyin": "shénme",
    "meaning": "gì",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "这是什么？",
    "examplePinyin": "Zhè shì shénme?",
    "exampleVi": "Đây là cái gì?"
  },
  {
    "id": "yct3-shen-ti",
    "hanzi": "身体",
    "pinyin": "shēntǐ",
    "meaning": "cơ thể, thân thể",
    "category": "suc-khoe-va-co-the",
    "example": "要注意身体健康",
    "examplePinyin": "Yào zhù yì shēn tǐ jiàn kāng",
    "exampleVi": "Cần chú ý đến sức khỏe cơ thể"
  },
  {
    "id": "yct3-sheng-bing",
    "hanzi": "生病",
    "pinyin": "shēngbìng",
    "meaning": "bị ốm, mắc bệnh",
    "category": "suc-khoe-va-co-the",
    "example": "他生病了",
    "examplePinyin": "Tā shēngbìng le",
    "exampleVi": "Anh ấy bị ốm rồi"
  },
  {
    "id": "yct3-shi",
    "hanzi": "是",
    "pinyin": "shì",
    "meaning": "là (hệ từ); Hán-ViT 'thị'",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我是学生",
    "examplePinyin": "Wǒ shì xuésheng",
    "exampleVi": "Tôi là học sinh"
  },
  {
    "id": "yct3-shi-hou",
    "hanzi": "时候",
    "pinyin": "shíhou",
    "meaning": "lúc, thời điểm",
    "category": "thoi-gian",
    "example": "我小时候喜欢游泳",
    "examplePinyin": "Wǒ xiǎoshíhou xǐhuān yóuyǒng",
    "exampleVi": "Lúc nhỏ tôi thích bơi lội"
  },
  {
    "id": "yct3-shi-jian",
    "hanzi": "时间",
    "pinyin": "shíjiān",
    "meaning": "thời gian",
    "category": "thoi-gian",
    "example": "我没有时间",
    "examplePinyin": "Wǒ méiyǒu shíjiān",
    "exampleVi": "Tôi không có thời gian"
  },
  {
    "id": "yct3-shi-qing",
    "hanzi": "事情",
    "pinyin": "shìqing",
    "meaning": "việc",
    "category": "khac",
    "example": "我有重要的事情要告诉你。",
    "examplePinyin": "Wǒ yǒu zhòng yào de shì qíng yào gào sù nǐ 。",
    "exampleVi": "Tôi có việc quan trọng muốn nói cho bạn biết."
  },
  {
    "id": "yct3-shi-shi",
    "hanzi": "十",
    "pinyin": "shí",
    "meaning": "mười (số); Hán-Việt 'thập'",
    "category": "so-luong-va-do-luong",
    "example": "我十岁",
    "examplePinyin": "Wǒ shí suì",
    "exampleVi": "Tôi mười tuổi"
  },
  {
    "id": "yct3-shou-biao",
    "hanzi": "手表",
    "pinyin": "shǒubiǎo",
    "meaning": "đồng hồ đeo tay",
    "category": "quan-ao-va-phu-kien",
    "example": "我有一块新手表",
    "examplePinyin": "Wǒ yǒu yī kuài xīn shǒu biǎo",
    "exampleVi": "Tôi có một chiếc đồng hồ đeo tay mới"
  },
  {
    "id": "yct3-shou-ji",
    "hanzi": "手机",
    "pinyin": "shǒujī",
    "meaning": "điện thoại di động, điện thoại cầm tay",
    "category": "khac",
    "example": "我的手机没电了",
    "examplePinyin": "Wǒ de shǒujī méidiàn le",
    "exampleVi": "Điện thoại của tôi hết pin rồi"
  },
  {
    "id": "yct3-shu",
    "hanzi": "书",
    "pinyin": "shū",
    "meaning": "sách, văn bản, thư",
    "category": "nghien-cuu-va-lam-viec",
    "example": "这是一本书",
    "examplePinyin": "Zhè shì yì běn shū",
    "exampleVi": "Đây là một quyển sách"
  },
  {
    "id": "yct3-shu-bao",
    "hanzi": "书包",
    "pinyin": "shūbāo",
    "meaning": "cặp sách",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我的书包很重。",
    "examplePinyin": "Wǒ de shūbāo hěn zhòng.",
    "exampleVi": "Cặp sách của tôi rất nặng."
  },
  {
    "id": "yct3-shu-fu",
    "hanzi": "舒服",
    "pinyin": "shūfu",
    "meaning": "thoải mái",
    "category": "suc-khoe-va-co-the",
    "example": "这个椅子很舒服",
    "examplePinyin": "Zhè ge yǐ zi hěn shū fú",
    "exampleVi": "Cái ghế này rất thoải mái"
  },
  {
    "id": "yct3-shui",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaning": "nước (danh từ); Hán-Việt 'thủy'",
    "category": "thien-nhien-va-dong-vat",
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct3-shui-shui",
    "hanzi": "谁",
    "pinyin": "shéi",
    "meaning": "ai (đại từ hỏi người)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你是谁？",
    "examplePinyin": "Nǐ shì shéi?",
    "exampleVi": "Bạn là ai?"
  },
  {
    "id": "yct3-si",
    "hanzi": "四",
    "pinyin": "sì",
    "meaning": "bốn (số); Hán-Việt 'tứ'",
    "category": "so-luong-va-do-luong",
    "example": "四个人",
    "examplePinyin": "sì gè rén",
    "exampleVi": "Bốn người"
  },
  {
    "id": "yct3-suo-yi",
    "hanzi": "所以",
    "pinyin": "suǒyǐ",
    "meaning": "vì vậy",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "因为下雨，所以没去",
    "examplePinyin": "Yīn wèi xià yǔ ， suǒ yǐ méi qù",
    "exampleVi": "Vì trời mưa nên không đi"
  },
  {
    "id": "yct3-ta",
    "hanzi": "他",
    "pinyin": "tā",
    "meaning": "anh ấy, hắn ấy (đại từ ngôi thứ ba nam)",
    "category": "dai-tu",
    "example": "他是我的哥哥",
    "examplePinyin": "Tā shì wǒ de gēge",
    "exampleVi": "Anh ấy là anh trai của tôi"
  },
  {
    "id": "yct3-ta-ta",
    "hanzi": "她",
    "pinyin": "tā",
    "meaning": "cô ấy, chị ấy, bà ấy (đại từ ngôi thứ ba nữ)",
    "category": "dai-tu",
    "example": "她是我妹妹",
    "examplePinyin": "Tā shì wǒ mèimei",
    "exampleVi": "Cô ấy là em gái của tôi"
  },
  {
    "id": "yct3-ta-ta-2",
    "hanzi": "它",
    "pinyin": "tā",
    "meaning": "nó",
    "category": "dai-tu",
    "example": "它是我的狗",
    "examplePinyin": "Tā shì wǒ de gǒu",
    "exampleVi": "Nó là con chó của tôi"
  },
  {
    "id": "yct3-teng",
    "hanzi": "疼",
    "pinyin": "téng",
    "meaning": "đau, nhức",
    "category": "suc-khoe-va-co-the",
    "example": "我头疼",
    "examplePinyin": "Wǒ tóu téng",
    "exampleVi": "Tôi đau đầu"
  },
  {
    "id": "yct3-ti",
    "hanzi": "题",
    "pinyin": "tí",
    "meaning": "đề bài; câu hỏi",
    "category": "nghien-cuu-va-lam-viec",
    "example": "这道题很难",
    "examplePinyin": "Zhè dào tí hěn nán",
    "exampleVi": "Câu hỏi này rất khó"
  },
  {
    "id": "yct3-tong-xue",
    "hanzi": "同学",
    "pinyin": "tóngxué",
    "meaning": "bạn học",
    "category": "nghien-cuu-va-lam-viec",
    "example": "她是我的同学。",
    "examplePinyin": "Tā shì wǒ de tóngxué.",
    "exampleVi": "Cô ấy là bạn học của tôi."
  },
  {
    "id": "yct3-tou-fa",
    "hanzi": "头发",
    "pinyin": "tóufa",
    "meaning": "tóc",
    "category": "nhung-nguoi",
    "example": "她的头发很长",
    "examplePinyin": "Tā de tóu fà hěn zhǎng",
    "exampleVi": "Tóc cô ấy rất dài"
  },
  {
    "id": "yct3-wai",
    "hanzi": "外",
    "pinyin": "wài",
    "meaning": "bên ngoài",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请在外边等",
    "examplePinyin": "Qǐng zài wàibiān děng",
    "exampleVi": "Xin hãy đợi bên ngoài"
  },
  {
    "id": "yct3-wan",
    "hanzi": "玩",
    "pinyin": "wán",
    "meaning": "Chơi đùa, nghịch ngợm; thưởng ngoạn; đồ chơi. Động từ hoặc danh từ.",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "孩子们在玩",
    "examplePinyin": "Háizimen zài wán",
    "exampleVi": "Đứa trẻ đang chơi"
  },
  {
    "id": "yct3-wan-wan",
    "hanzi": "完",
    "pinyin": "wán",
    "meaning": "hoàn thành",
    "category": "nghien-cuu-va-lam-viec",
    "example": "做完了",
    "examplePinyin": "Zuò wán le",
    "exampleVi": "Đã làm xong"
  },
  {
    "id": "yct3-wei-shen-me",
    "hanzi": "为什么",
    "pinyin": "wèishénme",
    "meaning": "tại sao",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你为什么来",
    "examplePinyin": "Nǐ wèi shén me lái",
    "exampleVi": "Tại sao bạn đến"
  },
  {
    "id": "yct3-wo",
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaning": "tôi, tao, mình (đại từ ngôi thứ nhất); Hán-Việt 'ngã'",
    "category": "dai-tu",
    "example": "我是中国人",
    "examplePinyin": "Wǒ shì Zhōngguó rén",
    "exampleVi": "Tôi là người Trung Quốc"
  },
  {
    "id": "yct3-wo-men",
    "hanzi": "我们",
    "pinyin": "wǒmen",
    "meaning": "chúng tôi, chúng ta",
    "category": "dai-tu",
    "example": "我们是学生。",
    "examplePinyin": "Wǒmen shì xuésheng.",
    "exampleVi": "Chúng tôi là sinh viên."
  },
  {
    "id": "yct3-wu",
    "hanzi": "五",
    "pinyin": "wǔ",
    "meaning": "năm (số); Hán-Việt 'ngũ'",
    "category": "so-luong-va-do-luong",
    "example": "五个人",
    "examplePinyin": "wǔ gè rén",
    "exampleVi": "Năm người"
  },
  {
    "id": "yct3-xi",
    "hanzi": "洗",
    "pinyin": "xǐ",
    "meaning": "rửa, làm sạch",
    "category": "dong-tu",
    "example": "我去洗手",
    "examplePinyin": "Wǒ qù xǐ shǒu",
    "exampleVi": "Tôi đi rửa tay"
  },
  {
    "id": "yct3-xi-wang",
    "hanzi": "希望",
    "pinyin": "xīwàng",
    "meaning": "Hy vọng, mong muốn",
    "category": "suy-nghi-va-cam-xuc",
    "example": "我希望明年能去中国。",
    "examplePinyin": "Wǒ xīwàng míngnián néng qù Zhōngguó.",
    "exampleVi": "Tôi hy vọng năm sau có thể đi Trung Quốc."
  },
  {
    "id": "yct3-xi-zao",
    "hanzi": "洗澡",
    "pinyin": "xǐzǎo",
    "meaning": "tắm",
    "category": "dong-tu",
    "example": "我每天晚上洗澡",
    "examplePinyin": "Wǒ měi tiān wǎn shàng xǐ zǎo",
    "exampleVi": "Tôi tắm mỗi tối"
  },
  {
    "id": "yct3-xia",
    "hanzi": "下",
    "pinyin": "xià",
    "meaning": "sau, dưới",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请往下看",
    "examplePinyin": "Qǐng wǎng xià kàn",
    "exampleVi": "Xin hãy nhìn xuống dưới"
  },
  {
    "id": "yct3-xia-wu",
    "hanzi": "下午",
    "pinyin": "xiàwǔ",
    "meaning": "buổi chiều",
    "category": "thoi-gian",
    "example": "我下午去学校",
    "examplePinyin": "Wǒ xiàwǔ qù xuéxiào",
    "exampleVi": "Chiều tôi đến trường"
  },
  {
    "id": "yct3-xian-sheng",
    "hanzi": "先生",
    "pinyin": "xiānsheng",
    "meaning": "ông, ngài",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "这位先生贵姓",
    "examplePinyin": "Zhè wèi xiānsheng guì xìng",
    "exampleVi": "Ông này tên gì"
  },
  {
    "id": "yct3-xiang-jiao",
    "hanzi": "香蕉",
    "pinyin": "xiāngjiāo",
    "meaning": "Chuối",
    "category": "do-an-va-do-uong",
    "example": "我最喜欢吃的水果是香蕉。",
    "examplePinyin": "Wǒ zuì xǐhuan chī de shuǐguǒ shì xiāngjiāo.",
    "exampleVi": "Loại trái cây tôi thích ăn nhất là chuối."
  },
  {
    "id": "yct3-xiao",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "meaning": "nhỏ",
    "category": "tinh-tu",
    "example": "这是一个小问题",
    "examplePinyin": "Zhè shì yí gè xiǎo wèn tí",
    "exampleVi": "Đây là một vấn đề nhỏ"
  },
  {
    "id": "yct3-xiao-jie",
    "hanzi": "小姐",
    "pinyin": "xiǎojiě",
    "meaning": "cô, tiểu thư",
    "category": "giao-tiep-va-phep-xa-giao",
    "example": "这位小姐贵姓？",
    "examplePinyin": "Zhè wèi xiǎojiě guì xìng?",
    "exampleVi": "Cô này tên gì?"
  },
  {
    "id": "yct3-xiao-shi",
    "hanzi": "小时",
    "pinyin": "xiǎoshí",
    "meaning": "giờ",
    "category": "thoi-gian",
    "example": "我学了三个小时中文",
    "examplePinyin": "Wǒ xué le sān gè xiǎoshí Zhōngwén",
    "exampleVi": "Tôi đã học tiếng Trung 3 tiếng"
  },
  {
    "id": "yct3-xie",
    "hanzi": "写",
    "pinyin": "xiě",
    "meaning": "viết, chép (văn bản, chữ)",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我会写汉字",
    "examplePinyin": "Wǒ huì xiě Hànzì",
    "exampleVi": "Tôi biết viết chữ Hán"
  },
  {
    "id": "yct3-xing",
    "hanzi": "姓",
    "pinyin": "xìng",
    "meaning": "họ",
    "category": "nhung-nguoi",
    "example": "你姓什么",
    "examplePinyin": "Nǐ xìng shén me",
    "exampleVi": "Bạn họ gì"
  },
  {
    "id": "yct3-xiong-mao",
    "hanzi": "熊猫",
    "pinyin": "xióngmāo",
    "meaning": "gấu trúc",
    "category": "thien-nhien-va-dong-vat",
    "example": "熊猫是中国的国宝。",
    "examplePinyin": "Xióngmāo shì Zhōngguó de guóbǎo.",
    "exampleVi": "Gấu trúc là quốc bảo của Trung Quốc."
  },
  {
    "id": "yct3-xiu-xi",
    "hanzi": "休息",
    "pinyin": "xiūxi",
    "meaning": "nghỉ ngơi, tạm dừng hoạt động để lấy lại sức",
    "category": "giai-tri-va-vui-choi-giai-tri",
    "example": "我累了,想休息一下",
    "examplePinyin": "Wǒ lèile, xiǎng xiūxi yíxià",
    "exampleVi": "Tôi mệt rồi, muốn nghỉ ngơi một chút"
  },
  {
    "id": "yct3-xue",
    "hanzi": "雪",
    "pinyin": "xuě",
    "meaning": "tuyết",
    "category": "thien-nhien-va-dong-vat",
    "example": "下雪了",
    "examplePinyin": "Xià xuě le",
    "exampleVi": "Có tuyết rơi rồi"
  },
  {
    "id": "yct3-xue-sheng",
    "hanzi": "学生",
    "pinyin": "xuéshēng",
    "meaning": "học sinh",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我是学生",
    "examplePinyin": "Wǒ shì xuéshēng",
    "exampleVi": "Tôi là học sinh"
  },
  {
    "id": "yct3-xue-xi",
    "hanzi": "学习",
    "pinyin": "xuéxí",
    "meaning": "học, học tập",
    "category": "nghien-cuu-va-lam-viec",
    "example": "我在学习中文",
    "examplePinyin": "Wǒ zài xuéxí Zhōngwén",
    "exampleVi": "Tôi đang học tiếng Trung"
  },
  {
    "id": "yct3-xue-xiao",
    "hanzi": "学校",
    "pinyin": "xuéxiào",
    "meaning": "Trường học, nơi dạy và học; trường (như tổ chức giáo dục)",
    "category": "nghien-cuu-va-lam-viec",
    "example": "他是学校的老师。",
    "examplePinyin": "Tā shì xuéxiào de lǎoshī.",
    "exampleVi": "Anh ấy là giáo viên của trường."
  },
  {
    "id": "yct3-yan-jing",
    "hanzi": "眼睛",
    "pinyin": "yǎnjing",
    "meaning": "mắt",
    "category": "suc-khoe-va-co-the",
    "example": "我眼睛很大",
    "examplePinyin": "Wǒ yǎn jīng hěn dà",
    "exampleVi": "Mắt tôi to"
  },
  {
    "id": "yct3-yan-jing-yanjing",
    "hanzi": "眼镜",
    "pinyin": "yǎnjìng",
    "meaning": "kính (mắt)",
    "category": "quan-ao-va-phu-kien",
    "example": "他戴着一副眼镜。",
    "examplePinyin": "Tā dàizhe yí fù yǎnjìng.",
    "exampleVi": "Anh ấy đang đeo một cặp kính."
  },
  {
    "id": "yct3-yan-se",
    "hanzi": "颜色",
    "pinyin": "yánsè",
    "meaning": "màu sắc",
    "category": "quan-ao-va-phu-kien",
    "example": "我喜欢红色",
    "examplePinyin": "Wǒ xǐ huān hóng sè",
    "exampleVi": "Tôi thích màu đỏ"
  },
  {
    "id": "yct3-yang-rou",
    "hanzi": "羊肉",
    "pinyin": "yángròu",
    "meaning": "thịt cừu",
    "category": "do-an-va-do-uong",
    "example": "羊肉火锅很好吃。",
    "examplePinyin": "Yángròu huǒguō hěn hǎochī.",
    "exampleVi": "Lẩu cừu rất ngon."
  },
  {
    "id": "yct3-yao",
    "hanzi": "药",
    "pinyin": "yào",
    "meaning": "thuốc",
    "category": "suc-khoe-va-co-the",
    "example": "吃药了吗",
    "examplePinyin": "Chī yào le ma",
    "exampleVi": "Đã uống thuốc chưa"
  },
  {
    "id": "yct3-yao-yao",
    "hanzi": "要",
    "pinyin": "yào",
    "meaning": "muốn",
    "category": "dong-tu",
    "example": "这个要很好。",
    "examplePinyin": "Zhè ge yào hěn hǎo 。",
    "exampleVi": "muốn này rất tốt."
  },
  {
    "id": "yct3-ye",
    "hanzi": "也",
    "pinyin": "yě",
    "meaning": "cũng (trợ từ) (Hán-Việt: dã)",
    "category": "pho-tu",
    "example": "我也是",
    "examplePinyin": "Wǒ yě shì",
    "exampleVi": "Tôi cũng là"
  },
  {
    "id": "yct3-yi",
    "hanzi": "一",
    "pinyin": "yī",
    "meaning": "một (số); Hán-Việt 'nhất'",
    "category": "so-luong-va-do-luong",
    "example": "我有一个妹妹",
    "examplePinyin": "Wǒ yǒu yī gè mèimei",
    "exampleVi": "Tôi có một người em gái"
  },
  {
    "id": "yct3-yi-jing",
    "hanzi": "已经",
    "pinyin": "yǐjīng",
    "meaning": "đã",
    "category": "pho-tu",
    "example": "我已经吃饭了",
    "examplePinyin": "Wǒ yǐ jīng chī fàn le",
    "exampleVi": "Tôi đã ăn cơm rồi"
  },
  {
    "id": "yct3-yi-si",
    "hanzi": "意思",
    "pinyin": "yìsi",
    "meaning": "ý nghĩa",
    "category": "khac",
    "example": "这个词是什么意思？",
    "examplePinyin": "Zhè ge cí shì shén me yì si ？",
    "exampleVi": "Từ này có ý nghĩa gì?"
  },
  {
    "id": "yct3-yi-yuan",
    "hanzi": "医院",
    "pinyin": "yīyuàn",
    "meaning": "bệnh viện",
    "category": "suc-khoe-va-co-the",
    "example": "我去了医院",
    "examplePinyin": "Wǒ qù le yīyuàn",
    "exampleVi": "Tôi đã đến bệnh viện"
  },
  {
    "id": "yct3-yi-zi",
    "hanzi": "椅子",
    "pinyin": "yǐzi",
    "meaning": "ghế",
    "category": "nha-va-gia-dinh",
    "example": "请坐在这把椅子上。",
    "examplePinyin": "Qǐng zuò zài zhè bǎ yǐ zi shàng 。",
    "exampleVi": "Vui lòng ngồi trên cái ghế này."
  },
  {
    "id": "yct3-yin",
    "hanzi": "阴",
    "pinyin": "yīn",
    "meaning": "u ám",
    "category": "tinh-tu",
    "example": "今天天阴",
    "examplePinyin": "Jīn tiān tiān yīn",
    "exampleVi": "Hôm nay trời âm u"
  },
  {
    "id": "yct3-yin-wei",
    "hanzi": "因为",
    "pinyin": "yīnwèi",
    "meaning": "nhân vi",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "因为生病，所以没来上班",
    "examplePinyin": "Yīn wèi shēng bìng ， suǒ yǐ méi lái shàng bān",
    "exampleVi": "Vì ốm nên không đến làm việc"
  },
  {
    "id": "yct3-you",
    "hanzi": "有",
    "pinyin": "yǒu",
    "meaning": "có (động từ); Hán-Việt 'hữu'",
    "category": "dong-tu",
    "example": "我有哥哥",
    "examplePinyin": "Wǒ yǒu gēge",
    "exampleVi": "Tôi có anh trai"
  },
  {
    "id": "yct3-you-bian",
    "hanzi": "右边",
    "pinyin": "yòubiān",
    "meaning": "bên phải",
    "category": "noi",
    "example": "右边有一家银行",
    "examplePinyin": "Yòubiān yǒu yījiā yínháng",
    "exampleVi": "Bên phải có một ngân hàng"
  },
  {
    "id": "yct3-you-you",
    "hanzi": "右",
    "pinyin": "yòu",
    "meaning": "phải (bên phải, hướng phải)",
    "category": "tinh-tu",
    "example": "向右转",
    "examplePinyin": "Xiàng yòu zhuǎn",
    "exampleVi": "Quẹo phải"
  },
  {
    "id": "yct3-yu",
    "hanzi": "鱼",
    "pinyin": "yú",
    "meaning": "cá",
    "category": "thien-nhien-va-dong-vat",
    "example": "水里有鱼",
    "examplePinyin": "Shuǐ lǐ yǒu yú",
    "exampleVi": "Trong nước có cá"
  },
  {
    "id": "yct3-yu-san",
    "hanzi": "雨伞",
    "pinyin": "yǔ sǎn",
    "meaning": "cái ô, ô",
    "category": "quan-ao-va-phu-kien",
    "example": "我带雨伞",
    "examplePinyin": "Wǒ dài yǔ sǎn",
    "exampleVi": "Tôi mang theo ô"
  },
  {
    "id": "yct3-yuan",
    "hanzi": "远",
    "pinyin": "yuǎn",
    "meaning": "xa, xa xôi",
    "category": "noi",
    "example": "我家很远",
    "examplePinyin": "Wǒ jiā hěn yuǎn",
    "exampleVi": "Nhà tôi rất xa"
  },
  {
    "id": "yct3-yuan-yuan",
    "hanzi": "圆",
    "pinyin": "yuán",
    "meaning": "tròn, hình tròn",
    "category": "tinh-tu",
    "example": "桌子是圆的",
    "examplePinyin": "Zhuōzi shì yuán de",
    "exampleVi": "Cái bàn hình tròn"
  },
  {
    "id": "yct3-zen-me",
    "hanzi": "怎么",
    "pinyin": "zěnme",
    "meaning": "thế nào, như thế nào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你怎么去？",
    "examplePinyin": "Nǐ zěnme qù?",
    "exampleVi": "Bạn đi thế nào?"
  },
  {
    "id": "yct3-zen-me-yang",
    "hanzi": "怎么样",
    "pinyin": "zěnmeyàng",
    "meaning": "Thế nào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你怎么样",
    "examplePinyin": "Nǐ zěn me yàng",
    "exampleVi": "Bạn thế nào"
  },
  {
    "id": "yct3-zhang",
    "hanzi": "张",
    "pinyin": "zhāng",
    "meaning": "tờ; chiếc; giương; mở",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我买了一张桌子。",
    "examplePinyin": "Wǒ mǎi le yì zhāng zhuōzi.",
    "exampleVi": "Tôi mua một cái bàn."
  },
  {
    "id": "yct3-zhang-fu",
    "hanzi": "丈夫",
    "pinyin": "zhàngfu",
    "meaning": "chồng",
    "category": "nha-va-gia-dinh",
    "example": "她的丈夫是一位医生。",
    "examplePinyin": "Tā de zhàngfu shì yí wèi yīshēng.",
    "exampleVi": "Chồng cô ấy là một bác sĩ."
  },
  {
    "id": "yct3-zhang-zhang",
    "hanzi": "长",
    "pinyin": "cháng",
    "meaning": "dài; trưởng thành",
    "category": "tinh-tu",
    "example": "他的头发很长",
    "examplePinyin": "Tā de tóu fà hěn zhǎng",
    "exampleVi": "Tóc anh ấy rất dài"
  },
  {
    "id": "yct3-zhao-ji",
    "hanzi": "着急",
    "pinyin": "zháojí",
    "meaning": "lo lắng, sốt ruột, nôn nóng",
    "category": "suy-nghi-va-cam-xuc",
    "example": "别着急，慢慢来。",
    "examplePinyin": "Bié zháojí, mànman lái.",
    "exampleVi": "Đừng nôn nóng, từ từ."
  },
  {
    "id": "yct3-zhe",
    "hanzi": "这",
    "pinyin": "zhè",
    "meaning": "này, cái này (đại từ chỉ định gần)",
    "category": "dai-tu",
    "example": "这是我的书",
    "examplePinyin": "Zhè shì wǒ de shū",
    "exampleVi": "Đây là sách của tôi"
  },
  {
    "id": "yct3-zhe--er-",
    "hanzi": "这{儿}",
    "pinyin": "zhèr",
    "meaning": "Ở đây, nơi này; chỗ này (phương ngữ Bắc Kinh với erhua 儿化)",
    "category": "noi",
    "example": "我这{儿}有好吃的。",
    "examplePinyin": "Wǒ zhèr yǒu hǎochī de.",
    "exampleVi": "Ở đây tôi có đồ ăn ngon."
  },
  {
    "id": "yct3-zhe-zhe",
    "hanzi": "着",
    "pinyin": "zhe",
    "meaning": "đang (tiếp diễn); trạng thái; dùng/để (thanh thứ 2)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "他看着书",
    "examplePinyin": "Tā kànzhe shū",
    "exampleVi": "Anh ấy đang đọc sách"
  },
  {
    "id": "yct3-zhen",
    "hanzi": "真",
    "pinyin": "zhēn",
    "meaning": "thật, thật sự (Hán-Việt: chân)",
    "category": "pho-tu",
    "example": "真的",
    "examplePinyin": "Zhēn de",
    "exampleVi": "Thật sự, thật"
  },
  {
    "id": "yct3-zheng-zai",
    "hanzi": "正在",
    "pinyin": "zhèngzài",
    "meaning": "đang (thì tiếp diễn lúc nói)",
    "category": "pho-tu",
    "example": "我正在吃饭",
    "examplePinyin": "Wǒ zhèngzài chīfàn",
    "exampleVi": "Tôi đang ăn cơm"
  },
  {
    "id": "yct3-zhi",
    "hanzi": "只",
    "pinyin": "zhī",
    "meaning": "chỉ",
    "category": "pho-tu",
    "example": "我只说一次",
    "examplePinyin": "Wǒ zhǐ shuō yī cì",
    "exampleVi": "Tôi chỉ nói một lần"
  },
  {
    "id": "yct3-zhong-guo",
    "hanzi": "中国",
    "pinyin": "Zhōngguó",
    "meaning": "Trung Quốc (nước Trung Hoa)",
    "category": "khac",
    "example": "我来自中国",
    "examplePinyin": "Wǒ láizì Zhōngguó",
    "exampleVi": "Tôi đến từ Trung Quốc"
  },
  {
    "id": "yct3-zhong-guo-ren",
    "hanzi": "中国人",
    "pinyin": "zhōngguórén",
    "meaning": "Người Trung Quốc, người nước Trung Hoa",
    "category": "nhung-nguoi",
    "example": "他是中国人。",
    "examplePinyin": "Tā shì Zhōngguórén.",
    "exampleVi": "Anh ấy là người Trung Quốc."
  },
  {
    "id": "yct3-zhong-wu",
    "hanzi": "中午",
    "pinyin": "zhōngwǔ",
    "meaning": "buổi trưa",
    "category": "thoi-gian",
    "example": "我中午吃饭",
    "examplePinyin": "Wǒ zhōngwǔ chīfàn",
    "exampleVi": "Tôi ăn trưa"
  },
  {
    "id": "yct3-zhu",
    "hanzi": "住",
    "pinyin": "zhù",
    "meaning": "ở, cư trú, dừng lại",
    "category": "dong-tu",
    "example": "我住在北京",
    "examplePinyin": "Wǒ zhù zài Běijīng",
    "exampleVi": "Tôi ở tại Bắc Kinh"
  },
  {
    "id": "yct3-zhun-bei",
    "hanzi": "准备",
    "pinyin": "zhǔnbèi",
    "meaning": "chuẩn bị, dự định, sắp sửa",
    "category": "dong-tu",
    "example": "我们正在准备考试。",
    "examplePinyin": "Wǒ men zhèng zài zhǔn bèi kǎo shì 。",
    "exampleVi": "Chúng tôi đang chuẩn bị cho kỳ thi."
  },
  {
    "id": "yct3-zi",
    "hanzi": "字",
    "pinyin": "zì",
    "meaning": "chữ (chữ viết), ký tự, từ",
    "category": "khac",
    "example": "汉字",
    "examplePinyin": "Hànzì",
    "exampleVi": "Chữ Hán"
  },
  {
    "id": "yct3-zi-xing-che",
    "hanzi": "自行车",
    "pinyin": "zìxíngchē",
    "meaning": "xe đạp",
    "category": "giao-thong-va-giao-thong",
    "example": "我骑自行车上班",
    "examplePinyin": "Wǒ qí zì xíng chē shàng bān",
    "exampleVi": "Tôi đạp xe đi làm"
  },
  {
    "id": "yct3-zou",
    "hanzi": "走",
    "pinyin": "zǒu",
    "meaning": "đi bộ, đi (Hán-Việt: tẩu)",
    "category": "giao-thong-va-giao-thong",
    "example": "我走去学校",
    "examplePinyin": "Wǒ zǒu qù xué xiào",
    "exampleVi": "Tôi đi bộ đến trường"
  },
  {
    "id": "yct3-zuo",
    "hanzi": "坐",
    "pinyin": "zuò",
    "meaning": "ngồi",
    "category": "dong-tu",
    "example": "请坐",
    "examplePinyin": "Qǐng zuò",
    "exampleVi": "Mời ngồi"
  },
  {
    "id": "yct3-zuo-bian",
    "hanzi": "左边",
    "pinyin": "zuǒbiān",
    "meaning": "bên trái",
    "category": "noi",
    "example": "左边有一棵大树",
    "examplePinyin": "Zuǒbiān yǒu yī kē dàshù",
    "exampleVi": "Bên trái có một cái cây lớn"
  },
  {
    "id": "yct3-zuo-zuo",
    "hanzi": "左",
    "pinyin": "zuǒ",
    "meaning": "bên trái",
    "category": "tinh-tu",
    "example": "请向左转",
    "examplePinyin": "Qǐng xiàng zuǒ zhuǎn",
    "exampleVi": "Xin hãy rẽ trái"
  }
];

// Helper to convert YctWord to standard VocabularyWord for modals
export function toVocabularyWord3(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct3",
    hskLevel: "HSK3",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

// Progress persistence for YCT3
const STORAGE_KEY_YCT3 = "hanyu.yct3.progress.v1";

export interface Yct3Progress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYct3Progress(): Yct3Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YCT3);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as Yct3Progress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYct3Progress(progress: Yct3Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY_YCT3, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord3(wordId: string): Yct3Progress {
  const current = getYct3Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const earnedXp = exists
    ? 0
    : awardXp(`yct:3:word:${encodeURIComponent(wordId)}`, "yct", xpGain);
  const updated: Yct3Progress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + earnedXp,
  };
  saveYct3Progress(updated);
  return updated;
}

export function recordQuizCompletion3(
  score: number,
  total: number
): { progress: Yct3Progress; earnedXp: number } {
  const current = getYct3Progress();
  const reward = total > 0 ? Math.round((score / total) * 30) : 0;
  const earnedXp = reward > 0 ? awardDailyXp("yct:3:quiz", "yct", reward) : 0;
  const updated: Yct3Progress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYct3Progress(updated);
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

export function generateYct3Quiz(
  count = 10,
  filter?: { category?: Yct3CategoryId; lessonNumber?: number }
): YctQuizQuestion[] {
  let pool = YCT3_WORDS;
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

    const distractors = YCT3_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q3-${word.id}-${idx}`,
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
        id: `q3-${word.id}-${idx}`,
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
        id: `q3-${word.id}-${idx}`,
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

export const WORD_EMOJIS_3: Record<string, string> = {
  "yct3-bao-zi": "🥟",
  "yct3-cai": "🥗",
  "yct3-fan-guan": "🏬",
  "yct3-guo-zhi": "🧃",
  "yct3-hao-chi": "🤤",
  "yct3-he": "🥤",
  "yct3-ji-dan": "🍜",
  "yct3-ka-fei": "🍜",
  "yct3-mi-fan": "🍚",
  "yct3-mian-bao": "🍜",
  "yct3-mian-tiao": "🍜",
  "yct3-xiang-jiao": "🍌",
  "yct3-bao": "🍜",
  "yct3-bei-zi": "🍜",
  "yct3-cha": "🍵",
  "yct3-chi": "😋",
  "yct3-e": "🍜",
  "yct3-jiao-zi": "🍜",
  "yct3-niu-nai": "🥛",
  "yct3-ping-guo": "🍎",
  "yct3-shui-guo": "🍉",
  "yct3-xi-gua": "🍜",
  "yct3-yang-rou": "🍜",
  "yct3-ba": "❓",
  "yct3-dian-nao": "💻",
  "yct3-dian-shi": "📺",
  "yct3-fang-jian": "🚪",
  "yct3-men": "🏡",
  "yct3-yi-zi": "🪑",
  "yct3-nv-er": "🏡",
  "yct3-qi-zi": "🏡",
  "yct3-ye-ye": "👴",
  "yct3-jia": "🏡",
  "yct3-ba-ba": "👨",
  "yct3-di-di": "👶",
  "yct3-er-zi": "🏡",
  "yct3-ge-ge": "👦",
  "yct3-jie-jie": "👧",
  "yct3-ma-ma": "👩",
  "yct3-mei-mei": "👧",
  "yct3-nai-nai": "👵",
  "yct3-zhang-fu": "🏡",
  "yct3-bi-zi": "👃",
  "yct3-er-duo": "👂",
  "yct3-gan-mao": "🤧",
  "yct3-jiao": "🦶",
  "yct3-yi-yuan": "🏥",
  "yct3-kou": "💪",
  "yct3-shen-ti": "💪",
  "yct3-sheng-bing": "💪",
  "yct3-shu-fu": "💪",
  "yct3-teng": "🩹",
  "yct3-yan-jing": "👀",
  "yct3-yao": "💪",
  "yct3-chang-ge": "🎤",
  "yct3-da-lan-qiu": "⚽",
  "yct3-dian-ying": "⚽",
  "yct3-dong-wu-yuan": "⚽",
  "yct3-hua": "⚽",
  "yct3-li-wu": "⚽",
  "yct3-lv-you": "⚽",
  "yct3-shang-wang": "⚽",
  "yct3-ti-zu-qiu": "⚽",
  "yct3-tiao-wu": "💃",
  "yct3-wan": "🎮",
  "yct3-xiu-xi": "⚽",
  "yct3-you-yong": "🏊",
  "yct3-yun-dong": "🏃",
  "yct3-nan": "🧑",
  "yct3-nan-ren": "🧑",
  "yct3-nv": "🧑",
  "yct3-nv-ren": "🧑",
  "yct3-ren": "🧑",
  "yct3-fu-wu-yuan": "🧑",
  "yct3-ge-zi": "🧍",
  "yct3-pang": "🧑",
  "yct3-shou": "🧑",
  "yct3-xing": "🧑",
  "yct3-hai-zi": "🧑",
  "yct3-tou-fa": "💇",
  "yct3-piao-liang": "✨",
  "yct3-sheng-ri": "🎂",
  "yct3-zhong-guo-ren": "🧑",
  "yct3-du": "📖",
  "yct3-jiao-shi": "🏫",
  "yct3-kao-shi": "📖",
  "yct3-ke": "📖",
  "yct3-lao-shi": "👩‍🏫",
  "yct3-nian-ji": "🎓",
  "yct3-qian-bi": "✏️",
  "yct3-shu-bao": "🎒",
  "yct3-ti": "📖",
  "yct3-tong-xue": "🎒",
  "yct3-xue-xiao": "🏫",
  "yct3-xue-xi": "📖",
  "yct3-xue-sheng": "🧑‍🎓",
  "yct3-xie": "📖",
  "yct3-shu": "📚",
  "yct3-wan-wan": "📖",
  "yct3-lei": "📖",
  "yct3-gong-zuo": "📖",
  "yct3-gong-si": "📖",
  "yct3-qu-nian": "⏰",
  "yct3-ri": "☀️",
  "yct3-shang-wu": "⏰",
  "yct3-shi-hou": "⏰",
  "yct3-shi-jian": "⏰",
  "yct3-xiao-shi": "⏰",
  "yct3-zhong-wu": "⏰",
  "yct3-xia-wu": "⏰",
  "yct3-gou": "🐶",
  "yct3-gua-feng": "🐼",
  "yct3-hou-zi": "🐼",
  "yct3-lao-hu": "🐼",
  "yct3-mao": "🐱",
  "yct3-mei-gui-hua": "🐼",
  "yct3-niao": "🐦",
  "yct3-shui": "💧",
  "yct3-xia-xue": "🐼",
  "yct3-xia-yu": "🐼",
  "yct3-xue": "❄️",
  "yct3-yu": "🐟",
  "yct3-yue-liang": "🌙",
  "yct3-tai-yang": "☀️",
  "yct3-xiong-mao": "🐼",
  "yct3-wei": "👋",
  "yct3-xian-sheng": "👋",
  "yct3-xiao-jie": "👋",
  "yct3-gao-su": "👋",
  "yct3-huan-ying": "👋",
  "yct3-hui-da": "👋",
  "yct3-jie-shao": "👋",
  "yct3-da-jia": "🙋",
  "yct3-mei": "🙋",
  "yct3-na": "🙋",
  "yct3-ni": "🙋",
  "yct3-nin": "🙋",
  "yct3-ta": "🙋",
  "yct3-ta-ta": "🙋",
  "yct3-ta-ta-2": "🙋",
  "yct3-wo": "🙋",
  "yct3-wo-men": "🙋",
  "yct3-xie-xie": "🙋",
  "yct3-zhe": "🙋",
  "yct3-zi-ji": "🙋",
  "yct3-ba-ba-2": "❓",
  "yct3-bi": "❓",
  "yct3-bie": "❓",
  "yct3-dan-shi": "❓",
  "yct3-dang-ran": "❓",
  "yct3-hei": "❓",
  "yct3-jiu": "❓",
  "yct3-li-mian": "❓",
  "yct3-yin-wei": "❓",
  "yct3-zhe-zhe": "❓",
  "yct3-de": "🏃",
  "yct3-bi-yi-bi": "❓",
  "yct3-dui": "❓",
  "yct3-duo-shao": "❓",
  "yct3-guo": "🚗",
  "yct3-hai": "❓",
  "yct3-ji": "🔢",
  "yct3-li": "❓",
  "yct3-li-li": "❓",
  "yct3-ma": "❓",
  "yct3-zai": "❓",
  "yct3-mei-mei-2": "❓",
  "yct3-na-na": "❓",
  "yct3-ne": "❓",
  "yct3-qian": "❓",
  "yct3-shi": "❓",
  "yct3-shen-me": "❓",
  "yct3-shui-shui": "❓",
  "yct3-suo-yi": "❓",
  "yct3-wai": "❓",
  "yct3-wei-shen-me": "❓",
  "yct3-xia": "❓",
  "yct3-zen-me": "❓",
  "yct3-zen-me-yang": "❓",
  "yct3-ge": "❓",
  "yct3-ben": "❓",
  "yct3-ci": "❓",
  "yct3-jian": "❓",
  "yct3-kuai": "❓",
  "yct3-zhang": "❓",
  "yct3-na--er-": "❓",
  "yct3-bang-zhu": "🏃",
  "yct3-zhang-zhang": "📏",
  "yct3-deng": "🏃",
  "yct3-gei": "🏃",
  "yct3-kai": "🏃",
  "yct3-kai-shi": "🏃",
  "yct3-kan": "🏃",
  "yct3-kan-jian": "🏃",
  "yct3-neng": "🏃",
  "yct3-zhu": "🏃",
  "yct3-zuo": "🏃",
  "yct3-chi-dao": "🏃",
  "yct3-diu": "🏃",
  "yct3-dong": "🏃",
  "yct3-guan": "🏃",
  "yct3-mai": "🏃",
  "yct3-na-na-2": "🏃",
  "yct3-pao-bu": "🏃",
  "yct3-zhun-bei": "🏃",
  "yct3-rang": "🏃",
  "yct3-song": "🏃",
  "yct3-ting": "🏃",
  "yct3-wen": "🏃",
  "yct3-xi": "🏃",
  "yct3-xi-zao": "🏃",
  "yct3-yao-yao": "🏃",
  "yct3-you": "🏃",
  "yct3-zhao": "🏃",
  "yct3-zhi-dao": "💡",
  "yct3-che-zhan": "🚗",
  "yct3-chu": "🚗",
  "yct3-chu-zu-che": "🚕",
  "yct3-chuan": "🚢",
  "yct3-dao": "🚗",
  "yct3-fei-ji": "✈️",
  "yct3-gong-gong-qi-che": "🚌",
  "yct3-ji-chang": "🚗",
  "yct3-jin": "🚗",
  "yct3-lai": "🚗",
  "yct3-lu": "🛣️",
  "yct3-qu": "🚗",
  "yct3-zi-xing-che": "🚲",
  "yct3-zou": "🚗",
  "yct3-hui": "🚗",
  "yct3-huo-che-zhan": "🚗",
  "yct3-piao": "🚗",
  "yct3-yi": "🔢",
  "yct3-er": "🔢",
  "yct3-san": "🔢",
  "yct3-si": "🔢",
  "yct3-wu": "🔢",
  "yct3-liu": "🔢",
  "yct3-qi": "🔢",
  "yct3-ba-ba-3": "🔢",
  "yct3-jiu-jiu": "🔢",
  "yct3-shi-shi": "🔢",
  "yct3-bai": "🔢",
  "yct3-ban": "🔢",
  "yct3-duo": "🍇",
  "yct3-gong-jin": "🔢",
  "yct3-liang": "🔢",
  "yct3-ling": "🔢",
  "yct3-qian-qian": "🔢",
  "yct3-shao": "🤏",
  "yct3-dou": "⚡",
  "yct3-fei-chang": "⚡",
  "yct3-hen": "⚡",
  "yct3-tai": "⚡",
  "yct3-ke-neng": "⚡",
  "yct3-ke-yi": "⚡",
  "yct3-ma-shang": "⚡",
  "yct3-ye": "⚡",
  "yct3-yi-jing": "⚡",
  "yct3-yi-qi": "⚡",
  "yct3-zhen": "⚡",
  "yct3-zheng-zai": "⚡",
  "yct3-zhi": "⚡",
  "yct3-zui": "⚡",
  "yct3-ku-zi": "👖",
  "yct3-qun-zi": "👗",
  "yct3-xie-xie-2": "👟",
  "yct3-hei-hei": "⚫",
  "yct3-bai-bai": "⚪",
  "yct3-hong": "🔴",
  "yct3-huang": "🟡",
  "yct3-chuan-chuan": "👕",
  "yct3-shou-biao": "👕",
  "yct3-yan-jing-yanjing": "👓",
  "yct3-yan-se": "👕",
  "yct3-yi-fu": "👕",
  "yct3-yu-san": "🌂",
  "yct3-lan": "🔵",
  "yct3-lv": "🟢",
  "yct3-shang-bian": "📍",
  "yct3-pang-bian": "📍",
  "yct3-you-bian": "📍",
  "yct3-zuo-bian": "📍",
  "yct3-jin-jin": "📍",
  "yct3-yuan": "📍",
  "yct3-qian-mian": "📍",
  "yct3-wai-mian": "📍",
  "yct3-zhe--er-": "📍",
  "yct3-na--er--na{er}": "📍",
  "yct3-mang": "🎨",
  "yct3-nan-nan": "🎨",
  "yct3-qing": "🎨",
  "yct3-xin": "✨",
  "yct3-yin": "🎨",
  "yct3-yuan-yuan": "🎨",
  "yct3-ke-ai": "🎨",
  "yct3-kuai-kuai": "⚡",
  "yct3-man": "🐢",
  "yct3-di-yi": "🎨",
  "yct3-zuo-zuo": "🎨",
  "yct3-you-you": "🎨",
  "yct3-gao": "🦒",
  "yct3-xiao": "🐥",
  "yct3-da": "🐘",
  "yct3-cuo": "🎨",
  "yct3-huai": "🎨",
  "yct3-hao": "🎨",
  "yct3-pian-yi": "🏷️",
  "yct3-gui": "💎",
  "yct3-gao-xing": "😄",
  "yct3-jue-de": "💭",
  "yct3-kuai-le": "😊",
  "yct3-xiang": "😊",
  "yct3-xiao-xiao": "😆",
  "yct3-ai": "❤️",
  "yct3-ku": "😢",
  "yct3-xi-wang": "😊",
  "yct3-zhao-ji": "😊",
  "yct3-dong-xi": "✨",
  "yct3-wen-ti": "✨",
  "yct3-shang-dian": "✨",
  "yct3-bao-zhi": "✨",
  "yct3-yi-si": "✨",
  "yct3-zi": "✨",
  "yct3-shou-ji": "✨",
  "yct3-zhong-guo": "✨",
  "yct3-shi-qing": "✨",
  "yct3-han-yu": "🇨🇳",
  "yct3-ban-ban": "📖",
  "yct3-mian-tiao-er": "🍜",
  "yct3-bang": "🏃",
  "yct3-hua-hua": "🌸",
  "yct3-dan-gao": "🎂",
  "yct3-zuo-ye": "📝",
  "yct3-tang": "🍬"
};

export function getWordEmoji3(word: YctWord): string {
  return WORD_EMOJIS_3[word.id] || "✨";
}
