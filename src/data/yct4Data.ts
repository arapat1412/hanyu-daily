import type { VocabularyWord } from "../types";
import { awardDailyXp, awardXp } from "../lib/hsk";
import { YCT_PDF_RESOURCES, type YctPdfResource } from "./yct1Data";

export interface YctWord {
  id: string;
  hanzi: string;
  pinyin: string;
  meaning: string;
  category: Yct4CategoryId;
  lessonNumber?: number;
  example: string;
  examplePinyin: string;
  exampleVi: string;
}

export type Yct4CategoryId =
  | "do-an-va-do-uong"
  | "gia-dinh"
  | "nha-va-cuoc-song"
  | "hoc"
  | "cong-viec"
  | "ngay-le-va-giai-tri"
  | "giao-tiep-va-tuong-tac"
  | "phep-lich-su"
  | "thong-tin-va-phuong-tien"
  | "cac-mon-the-thao"
  | "suc-khoe-va-co-the"
  | "tu-duy"
  | "tinh-cam-va-cam-xuc"
  | "thoi-gian"
  | "thien-nhien"
  | "thoi-tiet"
  | "noi"
  | "giao-thong-va-giao-thong"
  | "cac-tu-chuc-nang-va-cau-hoi"
  | "pho-tu"
  | "dai-tu"
  | "dem-tu"
  | "danh-tu"
  | "so-luong-va-do-luong"
  | "dia-ly"
  | "tinh-tu"
  | "thu-tu-trinh-bay"
  | "quan-ao-va-phu-kien"
  | "mo-ta-con-nguoi"
  | "dong-tu-toi"
  | "words-ii"
  | "dong-tu-ho-gia-dinh";

export interface Yct4Category {
  id: Yct4CategoryId;
  nameVi: string;
  nameZh: string;
  icon: string;
  badgeColor: string;
  description: string;
}

export interface Yct4Lesson {
  lessonNumber: number;
  lessonSlug: string;
  titleVi: string;
  titleZh: string;
  wordCount: number;
  estimatedMinutes: number;
}

export const YCT4_LESSONS: Yct4Lesson[] = [
  {
    "lessonNumber": 1,
    "lessonSlug": "bai-1-we-have-108-students",
    "titleVi": "Chúng tôi có 108 học sinh",
    "titleZh": "我们有一百零八个学生。",
    "wordCount": 7,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 2,
    "lessonSlug": "bai-2-how-long-have-you-been-learning-chinese",
    "titleVi": "Bạn học tiếng Trung bao lâu rồi?",
    "titleZh": "你学汉语多长时间了？",
    "wordCount": 7,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 3,
    "lessonSlug": "bai-3-it-opens-as-early-as-8-30-in-the-morning",
    "titleVi": "Tám giờ rưỡi sáng đã mở cửa",
    "titleZh": "早上八点半就开门。",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 4,
    "lessonSlug": "bai-4-i-have-a-cold",
    "titleVi": "Tôi bị cảm rồi",
    "titleZh": "我感冒了。",
    "wordCount": 8,
    "estimatedMinutes": 8
  },
  {
    "lessonNumber": 5,
    "lessonSlug": "bai-5-close-the-door",
    "titleVi": "Đóng cửa lại",
    "titleZh": "把门关上。",
    "wordCount": 6,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 6,
    "lessonSlug": "bai-6-have-you-been-to-our-new-classroom",
    "titleVi": "Bạn đã đến phòng học mới của chúng tôi chưa?",
    "titleZh": "你去过我们的新教室吗？",
    "wordCount": 7,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 7,
    "lessonSlug": "bai-7-how-do-you-go-to-school-every-day",
    "titleVi": "Hằng ngày các bạn đi học bằng cách nào?",
    "titleZh": "你们每天怎么去学校？",
    "wordCount": 10,
    "estimatedMinutes": 9
  },
  {
    "lessonNumber": 8,
    "lessonSlug": "bai-8-it-s-going-to-rain",
    "titleVi": "Trời sắp mưa rồi",
    "titleZh": "要下雨了。",
    "wordCount": 6,
    "estimatedMinutes": 7
  },
  {
    "lessonNumber": 9,
    "lessonSlug": "bai-9-when-did-you-go-there",
    "titleVi": "Bạn đã đi khi nào?",
    "titleZh": "你是什么时候去的？",
    "wordCount": 5,
    "estimatedMinutes": 6
  },
  {
    "lessonNumber": 10,
    "lessonSlug": "bai-10-why-doesn-t-dad-have-a-rest",
    "titleVi": "Sao bố không nghỉ ngơi?",
    "titleZh": "爸爸为什么不休息？",
    "wordCount": 5,
    "estimatedMinutes": 6
  },
  {
    "lessonNumber": 11,
    "lessonSlug": "bai-11-it-grows-really-fast",
    "titleVi": "Nó lớn rất nhanh",
    "titleZh": "它长得很快。",
    "wordCount": 8,
    "estimatedMinutes": 8
  }
];

export const YCT4_CATEGORIES: Yct4Category[] = [
  {
    "id": "do-an-va-do-uong",
    "nameVi": "Đồ ăn & Thức uống",
    "nameZh": "美食饮品",
    "icon": "🍜",
    "badgeColor": "bg-orange-100 text-orange-800 border-orange-300",
    "description": "Món ăn, hoa quả, đồ uống, no đói, bánh ngọt"
  },
  {
    "id": "gia-dinh",
    "nameVi": "Gia đình & Thân nhân",
    "nameZh": "家庭亲属",
    "icon": "👨‍👩‍👧",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Bố mẹ, anh chị em, cô chú, người thân trong nhà"
  },
  {
    "id": "nha-va-cuoc-song",
    "nameVi": "Nhà cửa & Sinh hoạt",
    "nameZh": "居家生活",
    "icon": "🏡",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Phòng ốc, đồ nội thất, thiết bị sinh hoạt gia đình"
  },
  {
    "id": "hoc",
    "nameVi": "Học tập & Giáo dục",
    "nameZh": "学习教育",
    "icon": "📚",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "description": "Trường lớp, bài học, ôn tập, thi cử, kỳ nghỉ hè"
  },
  {
    "id": "cong-viec",
    "nameVi": "Công việc & Văn phòng",
    "nameZh": "工作职场",
    "icon": "💼",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "description": "Công ty, văn phòng, hội nghị, phương pháp, ca làm"
  },
  {
    "id": "ngay-le-va-giai-tri",
    "nameVi": "Lễ hội & Giải trí",
    "nameZh": "节日娱乐",
    "icon": "🎉",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Sở thích, du lịch, leo núi, vẽ tranh, đánh đàn, nghỉ ngơi"
  },
  {
    "id": "giao-tiep-va-tuong-tac",
    "nameVi": "Giao tiếp & Tương tác",
    "nameZh": "交际互动",
    "icon": "🤝",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Gặp gỡ, giúp đỡ, trả lời, trò chuyện xã giao"
  },
  {
    "id": "phep-lich-su",
    "nameVi": "Phép lịch sự & Lễ phép",
    "nameZh": "礼貌用语",
    "icon": "🙏",
    "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "description": "Chào mừng, cẩn thận, làm phiền, quan tâm săn sóc"
  },
  {
    "id": "thong-tin-va-phuong-tien",
    "nameVi": "Thông tin & Truyền thông",
    "nameZh": "信息媒体",
    "icon": "📱",
    "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "description": "Điện thoại, máy tính, email, báo chí, từ điển"
  },
  {
    "id": "cac-mon-the-thao",
    "nameVi": "Thể thao & Rèn luyện",
    "nameZh": "体育运动",
    "icon": "⚽",
    "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
    "description": "Bóng rổ, bóng đá, thi đấu, rèn luyện, kungfu võ thuật"
  },
  {
    "id": "suc-khoe-va-co-the",
    "nameVi": "Sức khỏe & Cơ thể",
    "nameZh": "身体健康",
    "icon": "💪",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "description": "Bộ phận cơ thể, trạng thái sức khỏe, ốm đau, khám bệnh"
  },
  {
    "id": "tu-duy",
    "nameVi": "Suy nghĩ & Nhận thức",
    "nameZh": "思维认知",
    "icon": "💡",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "description": "Hiểu biết, suy nghĩ, dự định, xuất hiện, biểu thị"
  },
  {
    "id": "tinh-cam-va-cam-xuc",
    "nameVi": "Tình cảm & Cảm xúc",
    "nameZh": "情感心理",
    "icon": "😊",
    "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
    "description": "Vui vẻ, khóc, lo lắng, sợ hãi, hồi hộp, mệt mỏi"
  },
  {
    "id": "thoi-gian",
    "nameVi": "Thời gian & Khoảnh khắc",
    "nameZh": "时间日期",
    "icon": "⏰",
    "badgeColor": "bg-sky-100 text-sky-800 border-sky-300",
    "description": "Giờ, phút, cuối tuần, gần đây, quá khứ, năm ngoái"
  },
  {
    "id": "thien-nhien",
    "nameVi": "Thiên nhiên & Muông thú",
    "nameZh": "自然动植物",
    "icon": "🌿",
    "badgeColor": "bg-green-100 text-green-800 border-green-300",
    "description": "Cỏ cây, hoa lá, muông thú, cá, cảnh sắc đất trời"
  },
  {
    "id": "thoi-tiet",
    "nameVi": "Thời tiết & Mùa",
    "nameZh": "气候天气",
    "icon": "⛅",
    "badgeColor": "bg-blue-100 text-blue-800 border-blue-300",
    "description": "Mưa, tuyết, mây, các mùa xuân hạ thu đông"
  },
  {
    "id": "noi",
    "nameVi": "Địa điểm & Nơi chốn",
    "nameZh": "场所地点",
    "icon": "📍",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Siêu thị, khách sạn, vườn thú, nhà hàng, thành phố"
  },
  {
    "id": "giao-thong-va-giao-thong",
    "nameVi": "Giao thông & Đi lại",
    "nameZh": "交通出行",
    "icon": "🚗",
    "badgeColor": "bg-violet-100 text-violet-800 border-violet-300",
    "description": "Tàu điện ngầm, taxi, bến xe, thuyền bè, đi lại"
  },
  {
    "id": "cac-tu-chuc-nang-va-cau-hoi",
    "nameVi": "Hư từ & Câu hỏi",
    "nameZh": "虚词问句",
    "icon": "❓",
    "badgeColor": "bg-cyan-100 text-cyan-800 border-cyan-300",
    "description": "Từ để hỏi, câu chữ 把, 被, 比, trợ từ 過, ngữ khí"
  },
  {
    "id": "pho-tu",
    "nameVi": "Phó từ chỉ mức độ",
    "nameZh": "程度副词",
    "icon": "⚡",
    "badgeColor": "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300",
    "description": "So sánh, nhất định, mới, đại khái, bao nhiêu, rất"
  },
  {
    "id": "dai-tu",
    "nameVi": "Đại từ chỉ định & Xưng hô",
    "nameZh": "代词指称",
    "icon": "🙋‍♂️",
    "badgeColor": "bg-indigo-100 text-indigo-800 border-indigo-300",
    "description": "Mọi người, cả hai, mỗi người, cái này, cái kia"
  },
  {
    "id": "dem-tu",
    "nameVi": "Lượng từ đếm đồ vật",
    "nameZh": "计量量词",
    "icon": "🔢",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Con, quyển, tầng, cái, nhà, chiếc, nhánh"
  },
  {
    "id": "danh-tu",
    "nameVi": "Danh từ & Khái niệm",
    "nameZh": "名词概念",
    "icon": "📦",
    "badgeColor": "bg-slate-100 text-slate-800 border-slate-300",
    "description": "Đồ vật, hộp, lịch sử, câu nói, sự việc tổng hợp"
  },
  {
    "id": "so-luong-va-do-luong",
    "nameVi": "Số lượng & Đo lường",
    "nameZh": "数量度量",
    "icon": "📏",
    "badgeColor": "bg-yellow-100 text-yellow-800 border-yellow-300",
    "description": "Trăm, nửa, nhiều, ki-lô-gam, mét, kích thước"
  },
  {
    "id": "dia-ly",
    "nameVi": "Địa lý & Đất nước",
    "nameZh": "地理国家",
    "icon": "🌏",
    "badgeColor": "bg-teal-100 text-teal-800 border-teal-300",
    "description": "Bản đồ, quốc gia, phương bắc, Thượng Hải, biển cả"
  },
  {
    "id": "tinh-tu",
    "nameVi": "Tính từ miêu tả đặc điểm",
    "nameZh": "形容修饰",
    "icon": "🎨",
    "badgeColor": "bg-rose-100 text-rose-800 border-rose-300",
    "description": "Yên tĩnh, thấp, rẻ, lớn, nhỏ, nhanh, chậm, bận"
  },
  {
    "id": "thu-tu-trinh-bay",
    "nameVi": "Liên từ & Từ nối",
    "nameZh": "连词逻辑",
    "icon": "🔗",
    "badgeColor": "bg-purple-100 text-purple-800 border-purple-300",
    "description": "Không những... mà còn, tuy nhiên, đương nhiên"
  },
  {
    "id": "quan-ao-va-phu-kien",
    "nameVi": "Trang phục & Phụ kiện",
    "nameZh": "服装配饰",
    "icon": "👕",
    "badgeColor": "bg-red-100 text-red-800 border-red-300",
    "description": "Áo sơ mi, quần, mũ nón, váy vóc, ô dù che mưa"
  },
  {
    "id": "mo-ta-con-nguoi",
    "nameVi": "Miêu tả con người & Đời sống",
    "nameZh": "人物描绘",
    "icon": "👥",
    "badgeColor": "bg-pink-100 text-pink-800 border-pink-300",
    "description": "Khách khứa, hàng xóm, trẻ trung, cuộc sống thường nhật"
  },
  {
    "id": "dong-tu-toi",
    "nameVi": "Động từ hành vi (Phần 1)",
    "nameZh": "行为动词一",
    "icon": "🏃",
    "badgeColor": "bg-lime-100 text-lime-800 border-lime-300",
    "description": "Đứng, yêu thích, sinh trưởng, ôm ấp, đạt được, cầm lấy"
  },
  {
    "id": "words-ii",
    "nameVi": "Động từ hành vi (Phần 2)",
    "nameZh": "行为动词二",
    "icon": "🎯",
    "badgeColor": "bg-emerald-100 text-emerald-800 border-emerald-300",
    "description": "Mở, xem, tổ chức, đón nhận, khắc cốt ghi tâm"
  },
  {
    "id": "dong-tu-ho-gia-dinh",
    "nameVi": "Động từ sinh hoạt hằng ngày",
    "nameZh": "日常动词",
    "icon": "🧹",
    "badgeColor": "bg-amber-100 text-amber-800 border-amber-300",
    "description": "Dọn dẹp, đeo mặc, treo móc, ăn uống sinh hoạt gia đình"
  }
];

export const YCT4_WORDS: YctWord[] = [
  {
    "id": "yct4-bo",
    "hanzi": "饱",
    "pinyin": "bǎo",
    "meaning": "no",
    "category": "do-an-va-do-uong",
    "example": "我吃饱了",
    "examplePinyin": "wǒ chī bǎo le",
    "exampleVi": "Tôi đã ăn no"
  },
  {
    "id": "yct4-bozi",
    "hanzi": "包子",
    "pinyin": "bāo zi",
    "meaning": "bánh bao",
    "category": "do-an-va-do-uong",
    "example": "我吃包子",
    "examplePinyin": "Wǒ chī bāozi",
    "exampleVi": "Tôi ăn bánh bao"
  },
  {
    "id": "yct4-bizi",
    "hanzi": "杯子",
    "pinyin": "bēi zi",
    "meaning": "cốc, ly (đồ uống)",
    "category": "do-an-va-do-uong",
    "example": "我要这个杯子",
    "examplePinyin": "Wǒ yào zhège bēizi",
    "exampleVi": "Tôi muốn cái cốc này",
    "lessonNumber": 3
  },
  {
    "id": "yct4-bnggn",
    "hanzi": "饼干",
    "pinyin": "bǐng gān",
    "meaning": "bánh quy",
    "category": "do-an-va-do-uong",
    "example": "我想吃饼干。",
    "examplePinyin": "Wǒ xiǎng chī bǐnggān.",
    "exampleVi": "Tôi muốn ăn bánh quy."
  },
  {
    "id": "yct4-bngjlng",
    "hanzi": "冰激凌",
    "pinyin": "bīng jī líng",
    "meaning": "kem",
    "category": "do-an-va-do-uong",
    "example": "夏天吃冰激凌很舒服。",
    "examplePinyin": "Xiàtiān chī bīngjīlíng hěn shūfu.",
    "exampleVi": "Mùa hè ăn kem rất thoải mái."
  },
  {
    "id": "yct4-ci",
    "hanzi": "菜",
    "pinyin": "cài",
    "meaning": "món ăn, rau",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃中国菜",
    "examplePinyin": "Wǒ xǐhuan chī Zhōngguó cài",
    "exampleVi": "Tôi thích ăn món Trung Quốc",
    "lessonNumber": 5
  },
  {
    "id": "yct4-cidn",
    "hanzi": "菜单",
    "pinyin": "cài dān",
    "meaning": "thực đơn",
    "category": "do-an-va-do-uong",
    "example": "请给我菜单",
    "examplePinyin": "qǐng gěi wǒ cài dān",
    "exampleVi": "Cho tôi thực đơn"
  },
  {
    "id": "yct4-ch",
    "hanzi": "茶",
    "pinyin": "chá",
    "meaning": "trà, chè (đồ uống)",
    "category": "do-an-va-do-uong",
    "example": "我喜欢喝茶",
    "examplePinyin": "Wǒ xǐhuan hē chá",
    "exampleVi": "Tôi thích uống trà"
  },
  {
    "id": "yct4-dngo",
    "hanzi": "蛋糕",
    "pinyin": "dàn gāo",
    "meaning": "bánh",
    "category": "do-an-va-do-uong",
    "example": "生日蛋糕很好吃。",
    "examplePinyin": "Shēngrì dàngāo hěn hǎochī.",
    "exampleVi": "Bánh kem sinh nhật rất ngon."
  },
  {
    "id": "yct4-guzh",
    "hanzi": "果汁",
    "pinyin": "guǒ zhī",
    "meaning": "nước ép trái cây",
    "category": "do-an-va-do-uong",
    "example": "我喜欢喝新鲜果汁。",
    "examplePinyin": "Wǒ xǐhuan hē xīnxiān guǒzhī.",
    "exampleVi": "Tôi thích uống nước ép trái cây tươi.",
    "lessonNumber": 5
  },
  {
    "id": "yct4-jdn",
    "hanzi": "鸡蛋",
    "pinyin": "jī dàn",
    "meaning": "trứng gà",
    "category": "do-an-va-do-uong",
    "example": "我要吃鸡蛋",
    "examplePinyin": "Wǒ yào chī jīdàn",
    "exampleVi": "Tôi muốn ăn trứng"
  },
  {
    "id": "yct4-jiozi",
    "hanzi": "饺子",
    "pinyin": "jiǎo zi",
    "meaning": "sủi cảo, bánh chẻo",
    "category": "do-an-va-do-uong",
    "example": "饺子很好吃",
    "examplePinyin": "jiǎo zi hěn hǎo chī",
    "exampleVi": "Sủi cảo rất ngon"
  },
  {
    "id": "yct4-pnzi",
    "hanzi": "盘子",
    "pinyin": "pán zi",
    "meaning": "đĩa, mâm",
    "category": "do-an-va-do-uong",
    "example": "请把盘子洗干净。",
    "examplePinyin": "Qǐng bǎ pánzi xǐ gānjìng.",
    "exampleVi": "Vui lòng rửa đĩa sạch."
  },
  {
    "id": "yct4-k",
    "hanzi": "渴",
    "pinyin": "kě",
    "meaning": "khát (nước)",
    "category": "do-an-va-do-uong",
    "example": "我很渴",
    "examplePinyin": "Wǒ hěn kě",
    "exampleVi": "Tôi rất khát"
  },
  {
    "id": "yct4-",
    "hanzi": "饿",
    "pinyin": "è",
    "meaning": "đói",
    "category": "do-an-va-do-uong",
    "example": "我饿了",
    "examplePinyin": "Wǒ è le",
    "exampleVi": "Tôi đã đói rồi"
  },
  {
    "id": "yct4-hoch",
    "hanzi": "好吃",
    "pinyin": "hǎo chī",
    "meaning": "ngon",
    "category": "do-an-va-do-uong",
    "example": "这个菜很好吃。",
    "examplePinyin": "Zhège cài hěn hǎochī.",
    "exampleVi": "Món này rất ngon."
  },
  {
    "id": "yct4-kfi",
    "hanzi": "咖啡",
    "pinyin": "kā fēi",
    "meaning": "cà phê",
    "category": "do-an-va-do-uong",
    "example": "我每天早上都喝咖啡。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē kāfēi.",
    "exampleVi": "Tôi uống cà phê mỗi buổi sáng."
  },
  {
    "id": "yct4-koy",
    "hanzi": "烤鸭",
    "pinyin": "kǎo yā",
    "meaning": "vịt quay, vịt nướng; món ăn nổi tiếng của Bắc Kinh",
    "category": "do-an-va-do-uong",
    "example": "北京烤鸭很有名。",
    "examplePinyin": "Běijīng kǎoyā hěn yǒumíng.",
    "exampleVi": "Vịt quay Bắc Kinh rất nổi tiếng."
  },
  {
    "id": "yct4-kuizi",
    "hanzi": "筷子",
    "pinyin": "kuài zi",
    "meaning": "đũa",
    "category": "do-an-va-do-uong",
    "example": "中国人用筷子吃饭。",
    "examplePinyin": "Zhōngguó rén yòng kuàizi chīfàn.",
    "exampleVi": "Người Trung Quốc dùng đũa để ăn cơm."
  },
  {
    "id": "yct4-l",
    "hanzi": "辣",
    "pinyin": "là",
    "meaning": "cay",
    "category": "do-an-va-do-uong",
    "example": "这个菜太辣了。",
    "examplePinyin": "zhè ge cài tài là le.",
    "exampleVi": "Món này cay quá."
  },
  {
    "id": "yct4-l-li",
    "hanzi": "梨",
    "pinyin": "lí",
    "meaning": "quả lê",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃苹果和梨。",
    "examplePinyin": "wǒ xǐ huan chī píng guǒ hé lí.",
    "exampleVi": "Tôi thích ăn táo và lê."
  },
  {
    "id": "yct4-mfn",
    "hanzi": "米饭",
    "pinyin": "mǐ fàn",
    "meaning": "cơm (gạo)",
    "category": "do-an-va-do-uong",
    "example": "我吃米饭",
    "examplePinyin": "Wǒ chī mǐfàn",
    "exampleVi": "Tôi ăn cơm"
  },
  {
    "id": "yct4-minbo",
    "hanzi": "面包",
    "pinyin": "miàn bāo",
    "meaning": "bánh mì",
    "category": "do-an-va-do-uong",
    "example": "我吃面包",
    "examplePinyin": "Wǒ chī miànbāo",
    "exampleVi": "Tôi ăn bánh mì"
  },
  {
    "id": "yct4-mintio",
    "hanzi": "面条",
    "pinyin": "miàn tiáo",
    "meaning": "mì (sợi)",
    "category": "do-an-va-do-uong",
    "example": "我吃面条",
    "examplePinyin": "Wǒ chī miàntiáo",
    "exampleVi": "Tôi ăn mì"
  },
  {
    "id": "yct4-nini",
    "hanzi": "牛奶",
    "pinyin": "niú nǎi",
    "meaning": "sữa (bò)",
    "category": "do-an-va-do-uong",
    "example": "我每天早上都喝牛奶。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu hē niúnǎi.",
    "exampleVi": "Tôi uống sữa mỗi buổi sáng."
  },
  {
    "id": "yct4-pji",
    "hanzi": "啤酒",
    "pinyin": "pí jiǔ",
    "meaning": "bia",
    "category": "do-an-va-do-uong",
    "example": "夏天喝啤酒很舒服。",
    "examplePinyin": "Xiàtiān hē píjiǔ hěn shūfu.",
    "exampleVi": "Mùa hè uống bia rất thoải mái."
  },
  {
    "id": "yct4-pnggu",
    "hanzi": "苹果",
    "pinyin": "píng guǒ",
    "meaning": "quả táo",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃苹果。",
    "examplePinyin": "Wǒ xǐhuān chī píngguǒ.",
    "exampleVi": "Tôi thích ăn táo."
  },
  {
    "id": "yct4-ptao",
    "hanzi": "葡萄",
    "pinyin": "pú tao",
    "meaning": "nho (từ mượn tiếng Ba Tư cổ)",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃葡萄。",
    "examplePinyin": "Wǒ xǐhuān chī pútao.",
    "exampleVi": "Tôi thích ăn nho."
  },
  {
    "id": "yct4-qiokl",
    "hanzi": "巧克力",
    "pinyin": "qiǎo kè lì",
    "meaning": "sô cô la",
    "category": "do-an-va-do-uong",
    "example": "我很喜欢吃巧克力。",
    "examplePinyin": "wǒ hěn xǐ huan chī qiǎo kè lì.",
    "exampleVi": "Tôi rất thích ăn sô cô la."
  },
  {
    "id": "yct4-shugu",
    "hanzi": "水果",
    "pinyin": "shuǐ guǒ",
    "meaning": "trái cây, hoa quả",
    "category": "do-an-va-do-uong",
    "example": "我喜欢吃水果",
    "examplePinyin": "Wǒ xǐhuan chī shuǐguǒ",
    "exampleVi": "Tôi thích ăn trái cây"
  },
  {
    "id": "yct4-tng",
    "hanzi": "糖",
    "pinyin": "táng",
    "meaning": "đường, kẹo",
    "category": "do-an-va-do-uong",
    "example": "咖啡里不要放糖。",
    "examplePinyin": "kā fēi lǐ bù yào fàng táng.",
    "exampleVi": "Đừng cho đường vào cà phê."
  },
  {
    "id": "yct4-tng-tang",
    "hanzi": "汤",
    "pinyin": "tāng",
    "meaning": "canh, súp",
    "category": "do-an-va-do-uong",
    "example": "我想喝一碗鸡蛋汤。",
    "examplePinyin": "wǒ xiǎng hē yī wǎn jī dàn tāng.",
    "exampleVi": "Tôi muốn ăn một bát canh trứng."
  },
  {
    "id": "yct4-tin",
    "hanzi": "甜",
    "pinyin": "tián",
    "meaning": "ngọt",
    "category": "do-an-va-do-uong",
    "example": "这个西瓜很甜。",
    "examplePinyin": "zhè ge xī guā hěn tián.",
    "exampleVi": "Quả dưa hấu này rất ngọt."
  },
  {
    "id": "yct4-xgu",
    "hanzi": "西瓜",
    "pinyin": "xī guā",
    "meaning": "dưa hấu",
    "category": "do-an-va-do-uong",
    "example": "夏天吃西瓜很解渴。",
    "examplePinyin": "Xiàtiān chī xīguā hěn jiěkě.",
    "exampleVi": "Mùa hè ăn dưa hấu rất giải khát."
  },
  {
    "id": "yct4-xhngsh",
    "hanzi": "西红柿",
    "pinyin": "xī hóng shì",
    "meaning": "cà chua",
    "category": "do-an-va-do-uong",
    "example": "西红柿炒鸡蛋很好吃。",
    "examplePinyin": "Xīhóngshì chǎo jīdàn hěn hǎochī.",
    "exampleVi": "Cà chua xào trứng rất ngon."
  },
  {
    "id": "yct4-xingjio",
    "hanzi": "香蕉",
    "pinyin": "xiāng jiāo",
    "meaning": "chuối",
    "category": "do-an-va-do-uong",
    "example": "我最喜欢吃的水果是香蕉。",
    "examplePinyin": "Wǒ zuì xǐhuan chī de shuǐguǒ shì xiāngjiāo.",
    "exampleVi": "Loại trái cây tôi thích ăn nhất là chuối."
  },
  {
    "id": "yct4-yngru",
    "hanzi": "羊肉",
    "pinyin": "yáng ròu",
    "meaning": "thịt cừu",
    "category": "do-an-va-do-uong",
    "example": "羊肉火锅很好吃。",
    "examplePinyin": "Yángròu huǒguō hěn hǎochī.",
    "exampleVi": "Lẩu cừu rất ngon."
  },
  {
    "id": "yct4-ynlio",
    "hanzi": "饮料",
    "pinyin": "yǐn liào",
    "meaning": "đồ uống: các loại thức uống (nước ngọt, nước trái cây, trà, v.v.); bao gồm cả đồ uống có cồn và không cồn, nhưng thường hiểu là đồ uống không cồn.",
    "category": "do-an-va-do-uong",
    "example": "超市里有很多种饮料可以选择",
    "examplePinyin": "Chāoshì lǐ yǒu hěn duō zhǒng yǐnliào kěyǐ xuǎnzé",
    "exampleVi": "Trong siêu thị có rất nhiều loại đồ uống để lựa chọn"
  },
  {
    "id": "yct4-fwyun",
    "hanzi": "服务员",
    "pinyin": "fúwùyuán",
    "meaning": "nhân viên phục vụ, phục vụ viên",
    "category": "do-an-va-do-uong",
    "example": "服务员来了",
    "examplePinyin": "Fúwùyuán lái le",
    "exampleVi": "Nhân viên phục vụ đến rồi"
  },
  {
    "id": "yct4-y",
    "hanzi": "阿姨",
    "pinyin": "ā yí",
    "meaning": "dì",
    "category": "gia-dinh",
    "example": "阿姨，请问洗手间在哪里？",
    "examplePinyin": "ā yí, qǐng wèn xǐ shǒu jiān zài nǎ lǐ?",
    "exampleVi": "Cô ơi, cho cháu hỏi nhà vệ sinh ở đâu ạ?"
  },
  {
    "id": "yct4-bba",
    "hanzi": "爸爸",
    "pinyin": "bà ba",
    "meaning": "bố, cha",
    "category": "gia-dinh",
    "example": "这是我爸爸",
    "examplePinyin": "Zhè shì wǒ bàba",
    "exampleVi": "Đây là bố tôi"
  },
  {
    "id": "yct4-ddi",
    "hanzi": "弟弟",
    "pinyin": "dì di",
    "meaning": "em trai",
    "category": "gia-dinh",
    "example": "这是我弟弟",
    "examplePinyin": "Zhè shì wǒ dìdi",
    "exampleVi": "Đây là em trai tôi"
  },
  {
    "id": "yct4-rzi",
    "hanzi": "儿子",
    "pinyin": "ér zi",
    "meaning": "con trai",
    "category": "gia-dinh",
    "example": "我儿子今年五岁。",
    "examplePinyin": "Wǒ érzi jīnnián wǔ suì.",
    "exampleVi": "Con trai tôi năm nay năm tuổi."
  },
  {
    "id": "yct4-gge",
    "hanzi": "哥哥",
    "pinyin": "gē ge",
    "meaning": "anh trai",
    "category": "gia-dinh",
    "example": "我哥哥比我大五岁。",
    "examplePinyin": "Wǒ gēge bǐ wǒ dà wǔ suì.",
    "exampleVi": "Anh trai tôi lớn hơn tôi năm tuổi."
  },
  {
    "id": "yct4-hizi",
    "hanzi": "孩子",
    "pinyin": "hái zi",
    "meaning": "đứa trẻ, trẻ em",
    "category": "gia-dinh",
    "example": "他们有一个孩子",
    "examplePinyin": "Tāmen yǒu yī gè háizi",
    "exampleVi": "Họ có một đứa con"
  },
  {
    "id": "yct4-jijie",
    "hanzi": "姐姐",
    "pinyin": "jiě jie",
    "meaning": "chị gái",
    "category": "gia-dinh",
    "example": "这是我姐姐",
    "examplePinyin": "Zhè shì wǒ jiějie",
    "exampleVi": "Đây là chị gái tôi"
  },
  {
    "id": "yct4-mma",
    "hanzi": "妈妈",
    "pinyin": "mā ma",
    "meaning": "mẹ",
    "category": "gia-dinh",
    "example": "我妈妈是老师。",
    "examplePinyin": "Wǒ māma shì lǎoshī.",
    "exampleVi": "Mẹ tôi là giáo viên."
  },
  {
    "id": "yct4-nr",
    "hanzi": "女儿",
    "pinyin": "nǚ'ér",
    "meaning": "con gái",
    "category": "gia-dinh",
    "example": "这是我女儿",
    "examplePinyin": "Zhè shì wǒ nǚ'ér",
    "exampleVi": "Đây là con gái tôi"
  },
  {
    "id": "yct4-qzi",
    "hanzi": "妻子",
    "pinyin": "qī zi",
    "meaning": "vợ",
    "category": "gia-dinh",
    "example": "这是我的妻子。",
    "examplePinyin": "Zhè shì wǒ de qīzi.",
    "exampleVi": "Đây là vợ tôi."
  },
  {
    "id": "yct4-shshu",
    "hanzi": "叔叔",
    "pinyin": "shū shu",
    "meaning": "chú",
    "category": "gia-dinh",
    "example": "叔叔给了我一本书。",
    "examplePinyin": "shū shu gěi le wǒ yī běn shū.",
    "exampleVi": "Chú cho tôi một quyển sách."
  },
  {
    "id": "yct4-snzi",
    "hanzi": "孙子",
    "pinyin": "sūn zi",
    "meaning": "cháu trai",
    "category": "gia-dinh",
    "example": "我的孙子已经上小学了。",
    "examplePinyin": "Wǒ de sūnzi yǐjīng shàng xiǎoxué le.",
    "exampleVi": "Cháu trai tôi đã vào tiểu học."
  },
  {
    "id": "yct4-yye",
    "hanzi": "爷爷",
    "pinyin": "yé ye",
    "meaning": "ông nội",
    "category": "gia-dinh",
    "example": "这是我爷爷",
    "examplePinyin": "Zhè shì wǒ yéye",
    "exampleVi": "Đây là ông nội tôi"
  },
  {
    "id": "yct4-zhngfu",
    "hanzi": "丈夫",
    "pinyin": "zhàng fu",
    "meaning": "chồng",
    "category": "gia-dinh",
    "example": "她丈夫是医生。",
    "examplePinyin": "tā zhàng fu shì yī shēng.",
    "exampleVi": "Chồng cô ấy là bác sĩ."
  },
  {
    "id": "yct4-mimei",
    "hanzi": "妹妹",
    "pinyin": "mèi mei",
    "meaning": "em gái",
    "category": "gia-dinh",
    "example": "这是我妹妹",
    "examplePinyin": "Zhè shì wǒ mèimei",
    "exampleVi": "Đây là em gái tôi"
  },
  {
    "id": "yct4-ninai",
    "hanzi": "奶奶",
    "pinyin": "nǎi nai",
    "meaning": "bà nội",
    "category": "gia-dinh",
    "example": "奶奶对我很好",
    "examplePinyin": "Nǎinai duì wǒ hěn hǎo",
    "exampleVi": "Bà nội rất tốt với tôi"
  },
  {
    "id": "yct4-ji",
    "hanzi": "家",
    "pinyin": "jiā",
    "meaning": "gia đình",
    "category": "dem-tu",
    "example": "我爱我家",
    "examplePinyin": "wǒ ài wǒ jiā",
    "exampleVi": "Tôi yêu gia đình tôi"
  },
  {
    "id": "yct4-bngxing",
    "hanzi": "冰箱",
    "pinyin": "bīng xiāng",
    "meaning": "tủ lạnh",
    "category": "nha-va-cuoc-song",
    "example": "冰箱里有饮料。",
    "examplePinyin": "Bīngxiāng lǐ yǒu yǐnliào.",
    "exampleVi": "Trong tủ lạnh có đồ uống."
  },
  {
    "id": "yct4-chfng",
    "hanzi": "厨房",
    "pinyin": "chú fáng",
    "meaning": "nhà bếp là căn phòng dùng để nấu nướng và chuẩn bị thức ăn.",
    "category": "nha-va-cuoc-song",
    "example": "妈妈在厨房做饭",
    "examplePinyin": "Māma zài chúfáng zuò fàn",
    "exampleVi": "Mẹ đang nấu ăn trong bếp"
  },
  {
    "id": "yct4-chung",
    "hanzi": "床",
    "pinyin": "chuáng",
    "meaning": "giường (nơi ngủ)",
    "category": "nha-va-cuoc-song",
    "example": "我躺在床上",
    "examplePinyin": "Wǒ tǎng zài chuángshang",
    "exampleVi": "Tôi nằm trên giường"
  },
  {
    "id": "yct4-chunghu",
    "hanzi": "窗户",
    "pinyin": "chuāng hu",
    "meaning": "cửa sổ",
    "category": "nha-va-cuoc-song",
    "example": "请打开窗户。",
    "examplePinyin": "Qǐng dǎkāi chuānghù.",
    "exampleVi": "Hãy mở cửa sổ."
  },
  {
    "id": "yct4-dng",
    "hanzi": "灯",
    "pinyin": "dēng",
    "meaning": "đèn",
    "category": "nha-va-cuoc-song",
    "example": "请开灯。",
    "examplePinyin": "qǐng kāi dēng.",
    "exampleVi": "Vui lòng bật đèn."
  },
  {
    "id": "yct4-dindng",
    "hanzi": "电灯",
    "pinyin": "diàn dēng",
    "meaning": "đèn điện, đèn bóng đèn",
    "category": "nha-va-cuoc-song",
    "example": "请打开电灯。",
    "examplePinyin": "Qǐng dǎkāi diàndēng.",
    "exampleVi": "Vui lòng bật đèn."
  },
  {
    "id": "yct4-dint",
    "hanzi": "电梯",
    "pinyin": "diàn tī",
    "meaning": "thang máy",
    "category": "nha-va-cuoc-song",
    "example": "电梯坏了，我们得走楼梯。",
    "examplePinyin": "diàn tī huài le, wǒ men děi zǒu lóu tī.",
    "exampleVi": "Thang máy hỏng rồi, chúng ta phải đi cầu thang."
  },
  {
    "id": "yct4-fngjin",
    "hanzi": "房间",
    "pinyin": "fáng jiān",
    "meaning": "phòng (nhà)",
    "category": "nha-va-cuoc-song",
    "example": "这是我的房间",
    "examplePinyin": "Zhè shì wǒ de fángjiān",
    "exampleVi": "Đây là phòng của tôi"
  },
  {
    "id": "yct4-kngtio",
    "hanzi": "空调",
    "pinyin": "kōng tiáo",
    "meaning": "máy điều hòa không khí; điều chỉnh nhiệt độ",
    "category": "nha-va-cuoc-song",
    "example": "夏天需要开空调。",
    "examplePinyin": "Xiàtiān xūyào kāi kōngtiáo.",
    "exampleVi": "Mùa hè cần bật điều hòa."
  },
  {
    "id": "yct4-mnku",
    "hanzi": "门口",
    "pinyin": "mén kǒu",
    "meaning": "lối vào, cửa",
    "category": "nha-va-cuoc-song",
    "example": "在门口等你",
    "examplePinyin": "zài ménkǒu děng nǐ",
    "exampleVi": "đợi bạn ở cửa"
  },
  {
    "id": "yct4-shf",
    "hanzi": "沙发",
    "pinyin": "shā fā",
    "meaning": "ghế sofa",
    "category": "nha-va-cuoc-song",
    "example": "他坐在沙发上看电视。",
    "examplePinyin": "tā zuò zài shā fā shàng kàn diàn shì.",
    "exampleVi": "Anh ấy ngồi trên ghế sofa xem ti vi."
  },
  {
    "id": "yct4-xshujin",
    "hanzi": "洗手间",
    "pinyin": "xǐ shǒu jiān",
    "meaning": "nhà vệ sinh",
    "category": "nha-va-cuoc-song",
    "example": "请问，洗手间在哪里？",
    "examplePinyin": "Qǐngwèn, xǐshǒujiān zài nǎli?",
    "exampleVi": "Xin hỏi, nhà vệ sinh ở đâu?"
  },
  {
    "id": "yct4-xnglixing",
    "hanzi": "行李箱",
    "pinyin": "xíng li xiāng",
    "meaning": "vali hay cốp xe là hộp đựng đồ dùng khi đi du lịch hoặc đi xa, thường có bánh xe để kéo đi.",
    "category": "nha-va-cuoc-song",
    "example": "我要买一个行李箱",
    "examplePinyin": "Wǒ yào mǎi yī gè xínglǐxiāng",
    "exampleVi": "Tôi muốn mua một cái vali"
  },
  {
    "id": "yct4-yzi",
    "hanzi": "椅子",
    "pinyin": "yǐ zi",
    "meaning": "ghế",
    "category": "nha-va-cuoc-song",
    "example": "请坐在这把椅子上。",
    "examplePinyin": "qǐng zuò zài zhè bǎ yǐ zi shàng.",
    "exampleVi": "Vui lòng ngồi trên cái ghế này."
  },
  {
    "id": "yct4-by",
    "hanzi": "毕业",
    "pinyin": "bì yè",
    "meaning": "tốt nghiệp, ra trường",
    "category": "hoc",
    "example": "我今年大学毕业。",
    "examplePinyin": "Wǒ jīnnián dàxué bìyè.",
    "exampleVi": "Tôi tốt nghiệp đại học năm nay."
  },
  {
    "id": "yct4-chzhng",
    "hanzi": "初中",
    "pinyin": "chū zhōng",
    "meaning": "trường trung học cơ sở, cấp 2",
    "category": "hoc",
    "example": "我在初中学习三年。",
    "examplePinyin": "wǒ zài chū zhōng xué xí sān nián.",
    "exampleVi": "Tôi học ở cấp 2 ba năm."
  },
  {
    "id": "yct4-d",
    "hanzi": "读",
    "pinyin": "dú",
    "meaning": "đọc (sách, văn bản)",
    "category": "hoc",
    "example": "我喜欢读书",
    "examplePinyin": "Wǒ xǐhuan dúshū",
    "exampleVi": "Tôi thích đọc sách",
    "lessonNumber": 2
  },
  {
    "id": "yct4-fngji",
    "hanzi": "放假",
    "pinyin": "fàng jià",
    "meaning": "nghỉ phép",
    "category": "hoc",
    "example": "我们明天放假。",
    "examplePinyin": "Wǒmen míngtiān fàngjià.",
    "exampleVi": "Ngày mai chúng tôi được nghỉ."
  },
  {
    "id": "yct4-fx",
    "hanzi": "复习",
    "pinyin": "fù xí",
    "meaning": "ôn tập",
    "category": "hoc",
    "example": "我正在复习考试",
    "examplePinyin": "wǒ zhèng zài fù xí kǎo shì",
    "exampleVi": "Tôi đang ôn thi"
  },
  {
    "id": "yct4-hnji",
    "hanzi": "寒假",
    "pinyin": "hán jià",
    "meaning": "kỳ nghỉ đông, nghỉ đông",
    "category": "hoc",
    "example": "寒假快到了。",
    "examplePinyin": "Hánjià kuài dào le.",
    "exampleVi": "Kỳ nghỉ đông sắp đến."
  },
  {
    "id": "yct4-hny",
    "hanzi": "汉语",
    "pinyin": "hàn yǔ",
    "meaning": "tiếng Trung (ngôn ngữ)",
    "category": "hoc",
    "example": "我在学习汉语",
    "examplePinyin": "Wǒ zài xuéxí Hànyǔ",
    "exampleVi": "Tôi đang học tiếng Trung"
  },
  {
    "id": "yct4-hibn",
    "hanzi": "黑板",
    "pinyin": "hēi bǎn",
    "meaning": "bảng đen",
    "category": "hoc",
    "example": "看黑板",
    "examplePinyin": "kàn hēi bǎn",
    "exampleVi": "Nhìn bảng đen"
  },
  {
    "id": "yct4-jio",
    "hanzi": "教",
    "pinyin": "jiāo",
    "meaning": "giảng dạy, dạy",
    "category": "hoc",
    "example": "教中文",
    "examplePinyin": "Jiāo zhōng wén",
    "exampleVi": "Dạy tiếng Trung"
  },
  {
    "id": "yct4-jiosh",
    "hanzi": "教室",
    "pinyin": "jiào shì",
    "meaning": "lớp học",
    "category": "hoc",
    "example": "我们在教室上课",
    "examplePinyin": "wǒ men zài jiào shì shàng kè",
    "exampleVi": "Chúng tôi học trong lớp học",
    "lessonNumber": 6
  },
  {
    "id": "yct4-kosh",
    "hanzi": "考试",
    "pinyin": "kǎo shì",
    "meaning": "thi, kỳ thi",
    "category": "hoc",
    "example": "明天有考试",
    "examplePinyin": "Míngtiān yǒu kǎoshì",
    "exampleVi": "Ngày mai có thi"
  },
  {
    "id": "yct4-xiozhng",
    "hanzi": "校长",
    "pinyin": "xiào zhǎng",
    "meaning": "hiệu trưởng",
    "category": "hoc",
    "example": "校长在讲话",
    "examplePinyin": "xiào zhǎng zài jiǎng huà",
    "exampleVi": "Hiệu trưởng đang phát biểu"
  },
  {
    "id": "yct4-xuxio",
    "hanzi": "学校",
    "pinyin": "xué xiào",
    "meaning": "trường học, nơi dạy và học; trường (như tổ chức giáo dục)",
    "category": "hoc",
    "example": "他是学校的老师。",
    "examplePinyin": "Tā shì xuéxiào de lǎoshī.",
    "exampleVi": "Anh ấy là giáo viên của trường."
  },
  {
    "id": "yct4-xioyun",
    "hanzi": "校园",
    "pinyin": "xiào yuán",
    "meaning": "khuôn viên trường",
    "category": "hoc",
    "example": "校园很美",
    "examplePinyin": "xiào yuán hěn měi",
    "exampleVi": "Khuôn viên trường rất đẹp"
  },
  {
    "id": "yct4-chngj",
    "hanzi": "成绩",
    "pinyin": "chéng jì",
    "meaning": "thành tích; điểm số",
    "category": "hoc",
    "example": "考试成绩很好",
    "examplePinyin": "kǎo shì chéng jì hěn hǎo",
    "exampleVi": "Điểm thi rất tốt"
  },
  {
    "id": "yct4-zuy",
    "hanzi": "作业",
    "pinyin": "zuò yè",
    "meaning": "bài tập",
    "category": "hoc",
    "example": "今天的作业很多",
    "examplePinyin": "jīn tiān de zuò yè hěn duō",
    "exampleVi": "Bài tập hôm nay rất nhiều"
  },
  {
    "id": "yct4-xux",
    "hanzi": "学习",
    "pinyin": "xué xí",
    "meaning": "học, học tập",
    "category": "hoc",
    "example": "我在学习中文",
    "examplePinyin": "Wǒ zài xuéxí Zhōngwén",
    "exampleVi": "Tôi đang học tiếng Trung"
  },
  {
    "id": "yct4-xushng",
    "hanzi": "学生",
    "pinyin": "xué shēng",
    "meaning": "học sinh, sinh viên",
    "category": "hoc",
    "example": "我是学生",
    "examplePinyin": "Wǒ shì xuéshēng",
    "exampleVi": "Tôi là học sinh"
  },
  {
    "id": "yct4-wnt",
    "hanzi": "问题",
    "pinyin": "wèn tí",
    "meaning": "vấn đề, câu hỏi",
    "category": "hoc",
    "example": "我有一个问题",
    "examplePinyin": "wǒ yǒu yī gè wèn tí",
    "exampleVi": "Tôi có một câu hỏi"
  },
  {
    "id": "yct4-tngxu",
    "hanzi": "同学",
    "pinyin": "tóng xué",
    "meaning": "bạn học",
    "category": "hoc",
    "example": "她是我的同学。",
    "examplePinyin": "Tā shì wǒ de tóngxué.",
    "exampleVi": "Cô ấy là bạn học của tôi."
  },
  {
    "id": "yct4-t",
    "hanzi": "题",
    "pinyin": "tí",
    "meaning": "đề bài; câu hỏi",
    "category": "hoc",
    "example": "这道题很难",
    "examplePinyin": "zhè dào tí hěn nán",
    "exampleVi": "Câu hỏi này rất khó",
    "lessonNumber": 2
  },
  {
    "id": "yct4-shxu",
    "hanzi": "数学",
    "pinyin": "shù xué",
    "meaning": "toán học là ngành khoa học nghiên cứu về số, cấu trúc, không gian và biến đổi thông qua lý luận và logic hình thức.",
    "category": "hoc",
    "example": "我数学不太好",
    "examplePinyin": "Wǒ shùxué bù tài hǎo",
    "exampleVi": "Toán của tôi không quá tốt"
  },
  {
    "id": "yct4-shji",
    "hanzi": "暑假",
    "pinyin": "shǔ jià",
    "meaning": "kỳ nghỉ hè",
    "category": "hoc",
    "example": "暑假你打算去哪儿玩？",
    "examplePinyin": "shǔ jià nǐ dǎ suàn qù nǎr wán?",
    "exampleVi": "Kỳ nghỉ hè bạn định đi đâu chơi?"
  },
  {
    "id": "yct4-shbo",
    "hanzi": "书包",
    "pinyin": "shū bāo",
    "meaning": "cặp sách",
    "category": "hoc",
    "example": "我的书包很重。",
    "examplePinyin": "Wǒ de shūbāo hěn zhòng.",
    "exampleVi": "Cặp sách của tôi rất nặng."
  },
  {
    "id": "yct4-sh",
    "hanzi": "书",
    "pinyin": "shū",
    "meaning": "sách, văn bản, thư",
    "category": "hoc",
    "example": "这是一本书",
    "examplePinyin": "Zhè shì yì běn shū",
    "exampleVi": "Đây là một quyển sách"
  },
  {
    "id": "yct4-ninj",
    "hanzi": "年级",
    "pinyin": "nián jí",
    "meaning": "lớp",
    "category": "hoc",
    "example": "我上二年级",
    "examplePinyin": "wǒ shàng èr nián jí",
    "exampleVi": "Tôi học lớp hai"
  },
  {
    "id": "yct4-linx",
    "hanzi": "练习",
    "pinyin": "liàn xí",
    "meaning": "luyện tập",
    "category": "hoc",
    "example": "我每天练习汉语",
    "examplePinyin": "wǒ měi tiān liàn xí hàn yǔ",
    "exampleVi": "Tôi mỗi ngày luyện tập tiếng Trung"
  },
  {
    "id": "yct4-losh",
    "hanzi": "老师",
    "pinyin": "lǎo shī",
    "meaning": "giáo viên",
    "category": "hoc",
    "example": "她是我的中文老师。",
    "examplePinyin": "Tā shì wǒ de Zhōngwén lǎoshī.",
    "exampleVi": "Cô ấy là giáo viên tiếng Trung của tôi."
  },
  {
    "id": "yct4-k-ke",
    "hanzi": "课",
    "pinyin": "kè",
    "meaning": "bài học, lớp học",
    "category": "hoc",
    "example": "上课",
    "examplePinyin": "Shàng kè",
    "exampleVi": "Vào lớp"
  },
  {
    "id": "yct4-bn",
    "hanzi": "班",
    "pinyin": "bān",
    "meaning": "ca làm việc, lớp học",
    "category": "cong-viec",
    "example": "我上早班",
    "examplePinyin": "Wǒ shàng zǎobān",
    "exampleVi": "Tôi làm ca sáng"
  },
  {
    "id": "yct4-bnf",
    "hanzi": "办法",
    "pinyin": "bàn fǎ",
    "meaning": "cách",
    "category": "cong-viec",
    "example": "我没办法了。",
    "examplePinyin": "wǒ méi bàn fǎ le.",
    "exampleVi": "Tôi không còn cách nào."
  },
  {
    "id": "yct4-bngngsh",
    "hanzi": "办公室",
    "pinyin": "bàn gōng shì",
    "meaning": "văn phòng",
    "category": "cong-viec",
    "example": "我在办公室工作",
    "examplePinyin": "wǒ zài bàn gōng shì gōng zuò",
    "exampleVi": "Tôi làm việc ở văn phòng"
  },
  {
    "id": "yct4-gngs",
    "hanzi": "公司",
    "pinyin": "gōng sī",
    "meaning": "công ty",
    "category": "cong-viec",
    "example": "我在一家公司工作",
    "examplePinyin": "wǒ zài yī jiā gōng sī gōng zuò",
    "exampleVi": "Tôi làm việc ở một công ty"
  },
  {
    "id": "yct4-huy",
    "hanzi": "会议",
    "pinyin": "huì yì",
    "meaning": "hội nghị, cuộc họp",
    "category": "cong-viec",
    "example": "我们明天下午有个会议。",
    "examplePinyin": "Wǒmen míngtiān xiàwǔ yǒu gè huìyì.",
    "exampleVi": "Ngày mai chiều chúng tôi có cuộc họp."
  },
  {
    "id": "yct4-jngl",
    "hanzi": "经理",
    "pinyin": "jīng lǐ",
    "meaning": "giám đốc",
    "category": "cong-viec",
    "example": "他是公司经理",
    "examplePinyin": "tā shì gōng sī jīng lǐ",
    "exampleVi": "Anh ấy là giám đốc công ty"
  },
  {
    "id": "yct4-kihu",
    "hanzi": "开会",
    "pinyin": "kāi huì",
    "meaning": "họp, họp hành",
    "category": "cong-viec",
    "example": "我们在开会",
    "examplePinyin": "Wǒmen zài kāihuì",
    "exampleVi": "Chúng tôi đang họp"
  },
  {
    "id": "yct4-nl",
    "hanzi": "努力",
    "pinyin": "nǔ lì",
    "meaning": "cố gắng",
    "category": "cong-viec",
    "example": "我会努力学习的",
    "examplePinyin": "wǒ huì nǔ lì xué xí de",
    "exampleVi": "Tôi sẽ cố gắng học tập"
  },
  {
    "id": "yct4-tngsh",
    "hanzi": "同事",
    "pinyin": "tóng shì",
    "meaning": "đồng nghiệp",
    "category": "cong-viec",
    "example": "他是我的同事",
    "examplePinyin": "tā shì wǒ de tóng shì",
    "exampleVi": "Anh ấy là đồng nghiệp của tôi"
  },
  {
    "id": "yct4-wn",
    "hanzi": "完",
    "pinyin": "wán",
    "meaning": "hoàn thành",
    "category": "cong-viec",
    "example": "做完了",
    "examplePinyin": "zuò wán le",
    "exampleVi": "Đã làm xong",
    "lessonNumber": 3
  },
  {
    "id": "yct4-wnchng",
    "hanzi": "完成",
    "pinyin": "wán chéng",
    "meaning": "hoàn thành",
    "category": "cong-viec",
    "example": "我完成了作业",
    "examplePinyin": "wǒ wán chéng le zuò yè",
    "exampleVi": "Tôi đã hoàn thành bài tập về nhà"
  },
  {
    "id": "yct4-jngch",
    "hanzi": "警察",
    "pinyin": "jǐng chá",
    "meaning": "cảnh sát",
    "category": "cong-viec",
    "example": "警察正在抓小偷。",
    "examplePinyin": "Jǐngchá zhèngzài zhuā xiǎotōu.",
    "exampleVi": "Cảnh sát đang bắt trộm."
  },
  {
    "id": "yct4-iho",
    "hanzi": "爱好",
    "pinyin": "ài hào",
    "meaning": "sở thích (điều mình thích và thường làm)",
    "category": "ngay-le-va-giai-tri",
    "example": "我的爱好是听音乐",
    "examplePinyin": "Wǒ de àihào shì tīng yīnyuè",
    "exampleVi": "Sở thích của tôi là nghe nhạc"
  },
  {
    "id": "yct4-tngngqn",
    "hanzi": "弹钢琴",
    "pinyin": "tán gāng qín",
    "meaning": "chơi piano",
    "category": "ngay-le-va-giai-tri",
    "example": "我会弹钢琴。",
    "examplePinyin": "Wǒ huì tán gāngqín.",
    "exampleVi": "Tôi biết chơi piano."
  },
  {
    "id": "yct4-hu",
    "hanzi": "画",
    "pinyin": "huà",
    "meaning": "bức tranh",
    "category": "ngay-le-va-giai-tri",
    "example": "墙上有一幅画",
    "examplePinyin": "qiáng shàng yǒu yī fú huà",
    "exampleVi": "Trên tường có một bức tranh"
  },
  {
    "id": "yct4-lyu",
    "hanzi": "旅游",
    "pinyin": "lǚ yóu",
    "meaning": "du lịch",
    "category": "ngay-le-va-giai-tri",
    "example": "我喜欢旅游",
    "examplePinyin": "wǒ xǐ huan lǚ yóu",
    "exampleVi": "Tôi thích du lịch"
  },
  {
    "id": "yct4-pshn",
    "hanzi": "爬山",
    "pinyin": "pá shān",
    "meaning": "leo núi",
    "category": "ngay-le-va-giai-tri",
    "example": "我们周末去爬山",
    "examplePinyin": "wǒ men zhōu mò qù pá shān",
    "exampleVi": "Cuối tuần chúng tôi đi leo núi"
  },
  {
    "id": "yct4-tiow",
    "hanzi": "跳舞",
    "pinyin": "tiào wǔ",
    "meaning": "nhảy múa, khiêu vũ; di chuyển cơ thể theo nhịp điệu âm nhạc",
    "category": "ngay-le-va-giai-tri",
    "example": "我喜欢跳舞,特别是交际舞。",
    "examplePinyin": "Wǒ xǐhuan tiàowǔ, tèbié shì jiāojìwǔ.",
    "exampleVi": "Tôi thích khiêu vũ, đặc biệt là nhảy giao tiếp."
  },
  {
    "id": "yct4-wn-wan",
    "hanzi": "玩",
    "pinyin": "wán",
    "meaning": "chơi, chơi đùa; đi chơi",
    "category": "ngay-le-va-giai-tri",
    "example": "孩子们在玩",
    "examplePinyin": "Háizimen zài wán",
    "exampleVi": "Đứa trẻ đang chơi"
  },
  {
    "id": "yct4-wnj",
    "hanzi": "玩具",
    "pinyin": "wán jù",
    "meaning": "đồ chơi",
    "category": "ngay-le-va-giai-tri",
    "example": "这些玩具都是我弟弟的。",
    "examplePinyin": "zhè xiē wán jù dōu shì wǒ dì di de.",
    "exampleVi": "Những đồ chơi này đều là của em trai tôi."
  },
  {
    "id": "yct4-jir",
    "hanzi": "节日",
    "pinyin": "jié rì",
    "meaning": "lễ hội",
    "category": "ngay-le-va-giai-tri",
    "example": "春节是重要节日",
    "examplePinyin": "chūn jié shì zhòng yào jié rì",
    "exampleVi": "Tết Nguyên Đán là lễ hội quan trọng"
  },
  {
    "id": "yct4-lw",
    "hanzi": "礼物",
    "pinyin": "lǐ wù",
    "meaning": "quà tặng",
    "category": "ngay-le-va-giai-tri",
    "example": "这是我送给你的礼物",
    "examplePinyin": "zhè shì wǒ sòng gěi nǐ de lǐ wù",
    "exampleVi": "Đây là quà tôi tặng bạn"
  },
  {
    "id": "yct4-zh",
    "hanzi": "祝",
    "pinyin": "zhù",
    "meaning": "chúc, cầu mong",
    "category": "ngay-le-va-giai-tri",
    "example": "祝你生日快乐！",
    "examplePinyin": "Zhù nǐ shēngrì kuàilè!",
    "exampleVi": "Chúc bạn sinh nhật vui vẻ!"
  },
  {
    "id": "yct4-zhh",
    "hanzi": "祝贺",
    "pinyin": "zhù hè",
    "meaning": "chúc mừng, chúc tụng",
    "category": "ngay-le-va-giai-tri",
    "example": "我祝贺你成功！",
    "examplePinyin": "Wǒ zhùhè nǐ chénggōng!",
    "exampleVi": "Tôi chúc mừng bạn thành công!"
  },
  {
    "id": "yct4-ynyu",
    "hanzi": "音乐",
    "pinyin": "yīn yuè",
    "meaning": "âm nhạc",
    "category": "ngay-le-va-giai-tri",
    "example": "我喜欢听音乐",
    "examplePinyin": "wǒ xǐ huan tīng yīn yuè",
    "exampleVi": "Tôi thích nghe nhạc"
  },
  {
    "id": "yct4-yux",
    "hanzi": "游戏",
    "pinyin": "yóu xì",
    "meaning": "trò chơi",
    "category": "ngay-le-va-giai-tri",
    "example": "孩子们在院子里做游戏。",
    "examplePinyin": "Háizimen zài yuànzi lǐ zuò yóuxì.",
    "exampleVi": "Đứa trẻ đang chơi trò chơi trong sân."
  },
  {
    "id": "yct4-zhoxing",
    "hanzi": "照相",
    "pinyin": "zhào xiàng",
    "meaning": "chụp ảnh",
    "category": "ngay-le-va-giai-tri",
    "example": "我们去照相吧",
    "examplePinyin": "wǒ men qù zhào xiàng ba",
    "exampleVi": "Chúng tôi đi chụp ảnh nhé"
  },
  {
    "id": "yct4-bngmng",
    "hanzi": "帮忙",
    "pinyin": "bāng máng",
    "meaning": "giúp đỡ",
    "category": "giao-tiep-va-tuong-tac",
    "example": "请帮忙",
    "examplePinyin": "Qǐng bāngmáng",
    "exampleVi": "Xin hãy giúp đỡ"
  },
  {
    "id": "yct4-bngzh",
    "hanzi": "帮助",
    "pinyin": "bāng zhù",
    "meaning": "giúp đỡ, tương trợ",
    "category": "giao-tiep-va-tuong-tac",
    "example": "谢谢你帮助我",
    "examplePinyin": "xiè xie nǐ bāng zhù wǒ",
    "exampleVi": "Cảm ơn bạn đã giúp đỡ tôi"
  },
  {
    "id": "yct4-gunxi",
    "hanzi": "关系",
    "pinyin": "guān xi",
    "meaning": "quan hệ, mối quan hệ",
    "category": "giao-tiep-va-tuong-tac",
    "example": "他们之间的关系很好。",
    "examplePinyin": "Tāmen zhījiān de guānxì hěn hǎo.",
    "exampleVi": "Mối quan hệ giữa họ rất tốt."
  },
  {
    "id": "yct4-hud",
    "hanzi": "回答",
    "pinyin": "huí dá",
    "meaning": "trả lời",
    "category": "giao-tiep-va-tuong-tac",
    "example": "请回答问题",
    "examplePinyin": "Qǐng huídá wèntí",
    "exampleVi": "Xin hãy trả lời câu hỏi"
  },
  {
    "id": "yct4-jinmin",
    "hanzi": "见面",
    "pinyin": "jiàn miàn",
    "meaning": "gặp mặt, gặp nhau (trực tiếp)",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我们明天见面吧",
    "examplePinyin": "Wǒmen míngtiān jiànmiàn ba",
    "exampleVi": "Ngày mai chúng ta gặp nhau nhé"
  },
  {
    "id": "yct4-linx-lianxi",
    "hanzi": "联系",
    "pinyin": "lián xì",
    "meaning": "liên lạc, liên hệ",
    "category": "giao-tiep-va-tuong-tac",
    "example": "请通过电话跟我联系。",
    "examplePinyin": "Qǐng tōngguò diànhuà gēn wǒ liánxì.",
    "exampleVi": "Vui lòng liên lạc với tôi qua điện thoại."
  },
  {
    "id": "yct4-toln",
    "hanzi": "讨论",
    "pinyin": "tǎo lùn",
    "meaning": "thảo luận",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我们讨论这个问题",
    "examplePinyin": "wǒ men tǎo lùn zhè ge wèn tí",
    "exampleVi": "Chúng tôi thảo luận vấn đề này"
  },
  {
    "id": "yct4-zhog",
    "hanzi": "照顾",
    "pinyin": "zhào gù",
    "meaning": "chăm sóc",
    "category": "giao-tiep-va-tuong-tac",
    "example": "请照顾好自己",
    "examplePinyin": "qǐng zhào gù hǎo zì jǐ",
    "exampleVi": "Hãy chăm sóc tốt bản thân mình"
  },
  {
    "id": "yct4-tngy",
    "hanzi": "同意",
    "pinyin": "tóng yì",
    "meaning": "đồng ý, tán thành; có cùng ý kiến hoặc quan điểm với người khác",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我同意你的看法。",
    "examplePinyin": "Wǒ tóngyì nǐ de kànfǎ.",
    "exampleVi": "Tôi đồng ý với quan điểm của bạn."
  },
  {
    "id": "yct4-shx",
    "hanzi": "熟悉",
    "pinyin": "shú xī",
    "meaning": "quen thuộc",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我对这个地方很熟悉。",
    "examplePinyin": "wǒ duì zhè ge dì fang hěn shú xī.",
    "exampleVi": "Tôi rất quen thuộc với nơi này."
  },
  {
    "id": "yct4-liotin",
    "hanzi": "聊天",
    "pinyin": "liáo tiān",
    "meaning": "trò chuyện; tám chuyện; nói chuyện phiếm",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我们经常聊天。",
    "examplePinyin": "Wǒmen jīngcháng liáotiān.",
    "exampleVi": "Chúng tôi thường xuyên trò chuyện."
  },
  {
    "id": "yct4-jihn",
    "hanzi": "结婚",
    "pinyin": "jié hūn",
    "meaning": "kết hôn, lấy vợ/chồng",
    "category": "giao-tiep-va-tuong-tac",
    "example": "他们决定明年结婚。",
    "examplePinyin": "Tāmen juédìng míngnián jiéhūn.",
    "exampleVi": "Họ quyết định năm sau kết hôn."
  },
  {
    "id": "yct4-hxing",
    "hanzi": "互相",
    "pinyin": "hù xiāng",
    "meaning": "lẫn nhau, qua lại",
    "category": "giao-tiep-va-tuong-tac",
    "example": "我们应该互相帮助，互相学习。",
    "examplePinyin": "Wǒmen yīnggāi hùxiāng bāngzhù, hùxiāng xuéxí.",
    "exampleVi": "Chúng ta nên giúp đỡ lẫn nhau, học hỏi lẫn nhau."
  },
  {
    "id": "yct4-xioxn",
    "hanzi": "小心",
    "pinyin": "xiǎo xīn",
    "meaning": "cẩn thận",
    "category": "phep-lich-su",
    "example": "小心一点",
    "examplePinyin": "xiǎo xīn yī diǎn",
    "exampleVi": "Cẩn thận một chút"
  },
  {
    "id": "yct4-dro",
    "hanzi": "打扰",
    "pinyin": "dǎ rǎo",
    "meaning": "làm phiền, quấy rầy: gây gián đoạn hoặc bất tiện cho người khác; thường dùng trong câu xin lỗi hoặc xin phép lịch sự.",
    "category": "phep-lich-su",
    "example": "对不起，打扰你一下",
    "examplePinyin": "Duìbuqǐ, dǎrǎo nǐ yīxià",
    "exampleVi": "Xin lỗi, làm phiền bạn một chút"
  },
  {
    "id": "yct4-gunxn",
    "hanzi": "关心",
    "pinyin": "guān xīn",
    "meaning": "quan tâm",
    "category": "phep-lich-su",
    "example": "妈妈很关心我的学习",
    "examplePinyin": "mā ma hěn guān xīn wǒ de xué xí",
    "exampleVi": "Mẹ rất quan tâm đến việc học của tôi"
  },
  {
    "id": "yct4-hunyng",
    "hanzi": "欢迎",
    "pinyin": "huān yíng",
    "meaning": "hoan nghênh",
    "category": "phep-lich-su",
    "example": "欢迎来到中国！",
    "examplePinyin": "huān yíng lái dào zhōng guó!",
    "exampleVi": "Hoan nghênh đến Trung Quốc!"
  },
  {
    "id": "yct4-bozh",
    "hanzi": "报纸",
    "pinyin": "bào zhǐ",
    "meaning": "báo",
    "category": "thong-tin-va-phuong-tien",
    "example": "我每天早上都看报纸。",
    "examplePinyin": "wǒ měi tiān zǎo shang dōu kàn bào zhǐ.",
    "exampleVi": "Tôi mỗi sáng đều đọc báo."
  },
  {
    "id": "yct4-cdin",
    "hanzi": "词典",
    "pinyin": "cí diǎn",
    "meaning": "từ điển",
    "category": "thong-tin-va-phuong-tien",
    "example": "查词典",
    "examplePinyin": "chá cí diǎn",
    "exampleVi": "Tra từ điển"
  },
  {
    "id": "yct4-cy",
    "hanzi": "词语",
    "pinyin": "cí yǔ",
    "meaning": "từ ngữ",
    "category": "thong-tin-va-phuong-tien",
    "example": "学习常用词语",
    "examplePinyin": "xué xí cháng yòng cí yǔ",
    "exampleVi": "Học các từ ngữ thường dùng"
  },
  {
    "id": "yct4-dzh",
    "hanzi": "地址",
    "pinyin": "dì zhǐ",
    "meaning": "địa chỉ",
    "category": "thong-tin-va-phuong-tien",
    "example": "请把你的地址写在这里。",
    "examplePinyin": "qǐng bǎ nǐ de dì zhǐ xiě zài zhè li.",
    "exampleVi": "Vui lòng viết địa chỉ của bạn vào đây."
  },
  {
    "id": "yct4-dinzyujin",
    "hanzi": "电子邮件",
    "pinyin": "diàn zǐ yóu jiàn",
    "meaning": "email, thư điện tử",
    "category": "thong-tin-va-phuong-tien",
    "example": "请给我发一封电子邮件。",
    "examplePinyin": "Qǐng gěi wǒ fā yī fēng diànzǐ yóujiàn.",
    "exampleVi": "Vui lòng gửi cho tôi một email."
  },
  {
    "id": "yct4-hom",
    "hanzi": "号码",
    "pinyin": "hào mǎ",
    "meaning": "Số",
    "category": "thong-tin-va-phuong-tien",
    "example": "请告诉我你的电话号码。",
    "examplePinyin": "Qǐng gàosù wǒ nǐ de diànhuà hàomǎ.",
    "exampleVi": "Hãy cho tôi biết số điện thoại của bạn."
  },
  {
    "id": "yct4-jim",
    "hanzi": "节目",
    "pinyin": "jié mù",
    "meaning": "chương trình",
    "category": "thong-tin-va-phuong-tien",
    "example": "这个节目很有意思",
    "examplePinyin": "zhè ge jié mù hěn yǒu yì si",
    "exampleVi": "Chương trình này rất thú vị"
  },
  {
    "id": "yct4-hzho",
    "hanzi": "护照",
    "pinyin": "hù zhào",
    "meaning": "hộ chiếu",
    "category": "thong-tin-va-phuong-tien",
    "example": "我需要一本护照",
    "examplePinyin": "wǒ xū yào yī běn hù zhào",
    "exampleVi": "Tôi cần một hộ chiếu"
  },
  {
    "id": "yct4-jinch",
    "hanzi": "检查",
    "pinyin": "jiǎn chá",
    "meaning": "kiểm tra",
    "category": "thong-tin-va-phuong-tien",
    "example": "请检查作业",
    "examplePinyin": "qǐng jiǎn chá zuò yè",
    "exampleVi": "Vui lòng kiểm tra bài tập"
  },
  {
    "id": "yct4-ptnghu",
    "hanzi": "普通话",
    "pinyin": "pǔ tōng huà",
    "meaning": "tiếng phổ thông",
    "category": "thong-tin-va-phuong-tien",
    "example": "我说普通话",
    "examplePinyin": "wǒ shuō pǔ tōng huà",
    "exampleVi": "Tôi nói tiếng phổ thông"
  },
  {
    "id": "yct4-xnwn",
    "hanzi": "新闻",
    "pinyin": "xīn wén",
    "meaning": "tin tức",
    "category": "thong-tin-va-phuong-tien",
    "example": "我每天都看新闻",
    "examplePinyin": "wǒ měi tiān dōu kàn xīn wén",
    "exampleVi": "Tôi mỗi ngày đều xem tin tức"
  },
  {
    "id": "yct4-ysi",
    "hanzi": "意思",
    "pinyin": "yì si",
    "meaning": "ý nghĩa",
    "category": "thong-tin-va-phuong-tien",
    "example": "这个词是什么意思？",
    "examplePinyin": "zhè ge cí shì shén me yì si?",
    "exampleVi": "Từ này có ý nghĩa gì?",
    "lessonNumber": 10
  },
  {
    "id": "yct4-zzh",
    "hanzi": "杂志",
    "pinyin": "zá zhì",
    "meaning": "tạp chí; ấn phẩm định kỳ chứa nhiều bài viết, hình ảnh về các chủ đề khác nhau",
    "category": "thong-tin-va-phuong-tien",
    "example": "我喜欢看时尚杂志。",
    "examplePinyin": "Wǒ xǐhuan kàn shíshàng zázhì.",
    "exampleVi": "Tôi thích đọc tạp chí thời trang."
  },
  {
    "id": "yct4-zhshi",
    "hanzi": "知识",
    "pinyin": "zhī shi",
    "meaning": "kiến thức",
    "category": "thong-tin-va-phuong-tien",
    "example": "读书能增长知识。",
    "examplePinyin": "Dúshū néng zēngzhǎng zhīshi.",
    "exampleVi": "Đọc sách có thể tăng kiến thức."
  },
  {
    "id": "yct4-z",
    "hanzi": "字",
    "pinyin": "zì",
    "meaning": "chữ (chữ viết), ký tự, từ",
    "category": "thong-tin-va-phuong-tien",
    "example": "汉字",
    "examplePinyin": "Hànzì",
    "exampleVi": "Chữ Hán"
  },
  {
    "id": "yct4-zdin",
    "hanzi": "字典",
    "pinyin": "zì diǎn",
    "meaning": "từ điển",
    "category": "thong-tin-va-phuong-tien",
    "example": "查字典",
    "examplePinyin": "chá zì diǎn",
    "exampleVi": "Tra từ điển"
  },
  {
    "id": "yct4-bsi",
    "hanzi": "比赛",
    "pinyin": "bǐ sài",
    "meaning": "thi đấu, cuộc thi, trận đấu",
    "category": "cac-mon-the-thao",
    "example": "明天的比赛很重要。",
    "examplePinyin": "Míngtiān de bǐsài hěn zhòngyào.",
    "exampleVi": "Trận đấu ngày mai rất quan trọng."
  },
  {
    "id": "yct4-cnji",
    "hanzi": "参加",
    "pinyin": "cān jiā",
    "meaning": "tham gia",
    "category": "cac-mon-the-thao",
    "example": "我想参加这个活动",
    "examplePinyin": "wǒ xiǎng cān jiā zhè ge huó dòng",
    "exampleVi": "Tôi muốn tham gia hoạt động này"
  },
  {
    "id": "yct4-dlnqi",
    "hanzi": "打篮球",
    "pinyin": "dǎ lánqiú",
    "meaning": "chơi bóng rổ",
    "category": "cac-mon-the-thao",
    "example": "我喜欢打篮球",
    "examplePinyin": "Wǒ xǐhuān dǎ lánqiú",
    "exampleVi": "Tôi thích chơi bóng rổ"
  },
  {
    "id": "yct4-dunlin",
    "hanzi": "锻炼",
    "pinyin": "duàn liàn",
    "meaning": "tập thể dục",
    "category": "cac-mon-the-thao",
    "example": "我每天早上都锻炼身体。",
    "examplePinyin": "Wǒ měitiān zǎoshang dōu duànliàn shēntǐ.",
    "exampleVi": "Tôi đều tập thể dục vào mỗi buổi sáng."
  },
  {
    "id": "yct4-gngfu",
    "hanzi": "功夫",
    "pinyin": "gōng fu",
    "meaning": "công phu, thời gian và công sức; võ thuật Trung Hoa (kungfu)",
    "category": "cac-mon-the-thao",
    "example": "他练了很多年功夫。",
    "examplePinyin": "Tā liàn le hěnduō nián gōngfu.",
    "exampleVi": "Anh ấy đã tập võ nhiều năm."
  },
  {
    "id": "yct4-piqi",
    "hanzi": "排球",
    "pinyin": "pái qiú",
    "meaning": "bóng chuyền",
    "category": "cac-mon-the-thao",
    "example": "我们打排球吧",
    "examplePinyin": "wǒ men dǎ pái qiú ba",
    "exampleVi": "Chúng tôi chơi bóng chuyền nhé"
  },
  {
    "id": "yct4-pob",
    "hanzi": "跑步",
    "pinyin": "pǎo bù",
    "meaning": "chạy bộ",
    "category": "cac-mon-the-thao",
    "example": "我每天早上都跑步。",
    "examplePinyin": "wǒ měi tiān zǎo shang dōu pǎo bù.",
    "exampleVi": "Sáng nào tôi cũng chạy bộ."
  },
  {
    "id": "yct4-tzqi",
    "hanzi": "踢足球",
    "pinyin": "tī zúqiú",
    "meaning": "chơi bóng đá",
    "category": "cac-mon-the-thao",
    "example": "我喜欢踢足球",
    "examplePinyin": "Wǒ xǐhuān tī zúqiú",
    "exampleVi": "Tôi thích chơi bóng đá"
  },
  {
    "id": "yct4-wngqi",
    "hanzi": "网球",
    "pinyin": "wǎng qiú",
    "meaning": "quần vợt",
    "category": "cac-mon-the-thao",
    "example": "他喜欢打网球",
    "examplePinyin": "tā xǐ huan dǎ wǎng qiú",
    "exampleVi": "Anh ấy thích chơi quần vợt"
  },
  {
    "id": "yct4-yuyng",
    "hanzi": "游泳",
    "pinyin": "yóu yǒng",
    "meaning": "bơi lội",
    "category": "cac-mon-the-thao",
    "example": "夏天游泳很凉快。",
    "examplePinyin": "Xiàtiān yóuyǒng hěn liángkuai.",
    "exampleVi": "Mùa hè bơi lội rất mát."
  },
  {
    "id": "yct4-yndng",
    "hanzi": "运动",
    "pinyin": "yùn dòng",
    "meaning": "vận động, thể thao",
    "category": "cac-mon-the-thao",
    "example": "我喜欢运动",
    "examplePinyin": "wǒ xǐ huan yùn dòng",
    "exampleVi": "Tôi thích thể thao"
  },
  {
    "id": "yct4-pngpngqi",
    "hanzi": "乒乓球",
    "pinyin": "pīng pāng qiú",
    "meaning": "bóng bàn",
    "category": "cac-mon-the-thao",
    "example": "我喜欢打乒乓球。",
    "examplePinyin": "Wǒ xǐhuān dǎ pīngpāngqiú.",
    "exampleVi": "Tôi thích chơi bóng bàn."
  },
  {
    "id": "yct4-qm",
    "hanzi": "骑马",
    "pinyin": "qí mǎ",
    "meaning": "cưỡi ngựa",
    "category": "cac-mon-the-thao",
    "example": "我在草原上骑马。",
    "examplePinyin": "Wǒ zài cǎoyuán shàng qímǎ.",
    "exampleVi": "Tôi cưỡi ngựa trên đồng cỏ."
  },
  {
    "id": "yct4-ty",
    "hanzi": "体育",
    "pinyin": "tǐ yù",
    "meaning": "thể thao",
    "category": "cac-mon-the-thao",
    "example": "我们上体育课",
    "examplePinyin": "wǒ men shàng tǐ yù kè",
    "exampleVi": "Chúng tôi có lớp thể dục"
  },
  {
    "id": "yct4-tygun",
    "hanzi": "体育馆",
    "pinyin": "tǐ yù guǎn",
    "meaning": "nhà thi đấu",
    "category": "cac-mon-the-thao",
    "example": "体育馆里有很多比赛",
    "examplePinyin": "tǐ yù guǎn lǐ yǒu hěn duō bǐ sài",
    "exampleVi": "Trong nhà thi đấu có nhiều trận đấu"
  },
  {
    "id": "yct4-bi",
    "hanzi": "背",
    "pinyin": "bēi",
    "meaning": "mang trên lưng, lưng",
    "category": "suc-khoe-va-co-the",
    "example": "他背着书包",
    "examplePinyin": "tā bèi zhe shū bāo",
    "exampleVi": "Anh ấy mang ba lô trên lưng"
  },
  {
    "id": "yct4-bzi",
    "hanzi": "鼻子",
    "pinyin": "bí zi",
    "meaning": "mũi",
    "category": "suc-khoe-va-co-the",
    "example": "他的鼻子很大。",
    "examplePinyin": "Tā de bízi hěn dà.",
    "exampleVi": "Mũi của anh ấy rất to."
  },
  {
    "id": "yct4-dzi",
    "hanzi": "肚子",
    "pinyin": "dù zi",
    "meaning": "bụng",
    "category": "suc-khoe-va-co-the",
    "example": "我肚子饿了。",
    "examplePinyin": "wǒ dù zi è le.",
    "exampleVi": "Tôi đang đói bụng."
  },
  {
    "id": "yct4-rduo",
    "hanzi": "耳朵",
    "pinyin": "ěr duo",
    "meaning": "tai",
    "category": "suc-khoe-va-co-the",
    "example": "兔子有长耳朵。",
    "examplePinyin": "Tùzi yǒu cháng ěrduo.",
    "exampleVi": "Thỏ có cái tai dài."
  },
  {
    "id": "yct4-jio-jiao",
    "hanzi": "脚",
    "pinyin": "jiǎo",
    "meaning": "bàn chân",
    "category": "suc-khoe-va-co-the",
    "example": "我的脚很疼",
    "examplePinyin": "wǒ de jiǎo hěn téng",
    "exampleVi": "Bàn chân tôi rất đau"
  },
  {
    "id": "yct4-ku",
    "hanzi": "口",
    "pinyin": "kǒu",
    "meaning": "miệng; lượng từ đếm người trong gia đình (三口人)",
    "category": "dem-tu",
    "example": "张口",
    "examplePinyin": "zhāng kǒu",
    "exampleVi": "Mở miệng"
  },
  {
    "id": "yct4-lin",
    "hanzi": "脸",
    "pinyin": "liǎn",
    "meaning": "khuôn mặt",
    "category": "suc-khoe-va-co-the",
    "example": "她的脸很漂亮",
    "examplePinyin": "tā de liǎn hěn piào liang",
    "exampleVi": "Khuôn mặt cô ấy rất đẹp"
  },
  {
    "id": "yct4-tufa",
    "hanzi": "头发",
    "pinyin": "tóu fa",
    "meaning": "tóc",
    "category": "suc-khoe-va-co-the",
    "example": "她的头发很长",
    "examplePinyin": "tā de tóu fa hěn cháng",
    "exampleVi": "Tóc cô ấy rất dài"
  },
  {
    "id": "yct4-tu",
    "hanzi": "腿",
    "pinyin": "tuǐ",
    "meaning": "chân",
    "category": "suc-khoe-va-co-the",
    "example": "我的腿很酸",
    "examplePinyin": "wǒ de tuǐ hěn suān",
    "exampleVi": "Chân tôi rất đau"
  },
  {
    "id": "yct4-ynjing",
    "hanzi": "眼睛",
    "pinyin": "yǎn jing",
    "meaning": "mắt",
    "category": "suc-khoe-va-co-the",
    "example": "我眼睛很大",
    "examplePinyin": "wǒ yǎn jing hěn dà",
    "exampleVi": "Mắt tôi to"
  },
  {
    "id": "yct4-dzhn",
    "hanzi": "打针",
    "pinyin": "dǎ zhēn",
    "meaning": "tiêm",
    "category": "suc-khoe-va-co-the",
    "example": "护士给我打针。",
    "examplePinyin": "Hùshi gěi wǒ dǎzhēn.",
    "exampleVi": "Y tá tiêm cho tôi."
  },
  {
    "id": "yct4-fsho",
    "hanzi": "发烧",
    "pinyin": "fā shāo",
    "meaning": "sốt, bị sốt",
    "category": "suc-khoe-va-co-the",
    "example": "我发烧了。",
    "examplePinyin": "Wǒ fāshāo le.",
    "exampleVi": "Tôi bị sốt."
  },
  {
    "id": "yct4-gnmo",
    "hanzi": "感冒",
    "pinyin": "gǎn mào",
    "meaning": "cảm lạnh, cảm cúm",
    "category": "suc-khoe-va-co-the",
    "example": "我感冒了，头痛发热。",
    "examplePinyin": "Wǒ gǎnmào le, tóu tòng fā rè.",
    "exampleVi": "Tôi bị cảm, đau đầu sốt.",
    "lessonNumber": 4
  },
  {
    "id": "yct4-hshi",
    "hanzi": "护士",
    "pinyin": "hù shi",
    "meaning": "y tá",
    "category": "suc-khoe-va-co-the",
    "example": "她是医院的护士。",
    "examplePinyin": "Tā shì yīyuàn de hùshi.",
    "exampleVi": "Cô ấy là y tá bệnh viện."
  },
  {
    "id": "yct4-jinkng",
    "hanzi": "健康",
    "pinyin": "jiàn kāng",
    "meaning": "khỏe mạnh",
    "category": "suc-khoe-va-co-the",
    "example": "祝你健康",
    "examplePinyin": "zhù nǐ jiàn kāng",
    "exampleVi": "Chúc bạn khỏe mạnh"
  },
  {
    "id": "yct4-lihn",
    "hanzi": "流汗",
    "pinyin": "liú hàn",
    "meaning": "đổ mồ hôi",
    "category": "suc-khoe-va-co-the",
    "example": "天气很热，我一直在流汗。",
    "examplePinyin": "Tiānqì hěn rè, wǒ yīzhí zài liúhàn.",
    "exampleVi": "Thời tiết rất nóng, tôi cứ đổ mồ hôi liên tục."
  },
  {
    "id": "yct4-shfu",
    "hanzi": "舒服",
    "pinyin": "shū fu",
    "meaning": "thoải mái",
    "category": "suc-khoe-va-co-the",
    "example": "这个椅子很舒服",
    "examplePinyin": "zhè ge yǐ zi hěn shū fu",
    "exampleVi": "Cái ghế này rất thoải mái",
    "lessonNumber": 4
  },
  {
    "id": "yct4-tng-teng",
    "hanzi": "疼",
    "pinyin": "téng",
    "meaning": "đau, nhức",
    "category": "suc-khoe-va-co-the",
    "example": "我头疼",
    "examplePinyin": "wǒ tóu téng",
    "exampleVi": "Tôi đau đầu",
    "lessonNumber": 4
  },
  {
    "id": "yct4-yo",
    "hanzi": "药",
    "pinyin": "yào",
    "meaning": "thuốc",
    "category": "suc-khoe-va-co-the",
    "example": "吃药了吗",
    "examplePinyin": "chī yào le ma",
    "exampleVi": "Đã uống thuốc chưa",
    "lessonNumber": 4
  },
  {
    "id": "yct4-biosh",
    "hanzi": "表示",
    "pinyin": "biǎo shì",
    "meaning": "bày tỏ, biểu thị, cho thấy",
    "category": "tu-duy",
    "example": "他表示感谢。",
    "examplePinyin": "tā biǎo shì gǎn xiè.",
    "exampleVi": "Anh ấy bày tỏ lòng biết ơn."
  },
  {
    "id": "yct4-ci-cai",
    "hanzi": "猜",
    "pinyin": "cāi",
    "meaning": "đoán",
    "category": "tu-duy",
    "example": "你猜我今年多大？",
    "examplePinyin": "nǐ cāi wǒ jīn nián duō dà?",
    "exampleVi": "Bạn đoán xem năm nay tôi bao nhiêu tuổi?"
  },
  {
    "id": "yct4-chxin",
    "hanzi": "出现",
    "pinyin": "chū xiàn",
    "meaning": "xuất hiện",
    "category": "tu-duy",
    "example": "问题出现了",
    "examplePinyin": "wèn tí chū xiàn le",
    "exampleVi": "Vấn đề đã xuất hiện"
  },
  {
    "id": "yct4-dsun",
    "hanzi": "打算",
    "pinyin": "dǎ suàn",
    "meaning": "kế hoạch",
    "category": "tu-duy",
    "example": "我打算去中国",
    "examplePinyin": "wǒ dǎ suàn qù zhōng guó",
    "exampleVi": "Tôi dự định đi Trung Quốc"
  },
  {
    "id": "yct4-dng-dong",
    "hanzi": "懂",
    "pinyin": "dǒng",
    "meaning": "hiểu",
    "category": "tu-duy",
    "example": "我懂了",
    "examplePinyin": "wǒ dǒng le",
    "exampleVi": "Tôi hiểu rồi",
    "lessonNumber": 2
  },
  {
    "id": "yct4-fxin",
    "hanzi": "发现",
    "pinyin": "fā xiàn",
    "meaning": "phát hiện",
    "category": "tu-duy",
    "example": "我发现了一个错误",
    "examplePinyin": "wǒ fā xiàn le yī gè cuò wù",
    "exampleVi": "Tôi đã phát hiện một lỗi"
  },
  {
    "id": "yct4-jde",
    "hanzi": "记得",
    "pinyin": "jì de",
    "meaning": "nhớ, không quên",
    "category": "tu-duy",
    "example": "我记得你",
    "examplePinyin": "Wǒ jì de nǐ",
    "exampleVi": "Tôi nhớ bạn"
  },
  {
    "id": "yct4-jiju",
    "hanzi": "解决",
    "pinyin": "jiě jué",
    "meaning": "giải quyết, xử lý vấn đề",
    "category": "tu-duy",
    "example": "这个问题很难解决。",
    "examplePinyin": "zhè ge wèn tí hěn nán jiě jué.",
    "exampleVi": "Vấn đề này rất khó giải quyết."
  },
  {
    "id": "yct4-judng",
    "hanzi": "决定",
    "pinyin": "jué dìng",
    "meaning": "quyết định, quyết đoán",
    "category": "tu-duy",
    "example": "我决定明天去北京。",
    "examplePinyin": "wǒ jué dìng míng tiān qù běi jīng.",
    "exampleVi": "Tôi quyết định ngày mai đi Bắc Kinh."
  },
  {
    "id": "yct4-lioji",
    "hanzi": "了解",
    "pinyin": "liǎo jiě",
    "meaning": "hiểu rõ",
    "category": "tu-duy",
    "example": "我想多了解一下中国文化。",
    "examplePinyin": "wǒ xiǎng duō liǎo jiě yī xià zhōng guó wén huà.",
    "exampleVi": "Tôi muốn tìm hiểu thêm về văn hóa Trung Quốc."
  },
  {
    "id": "yct4-mngbai",
    "hanzi": "明白",
    "pinyin": "míng bai",
    "meaning": "hiểu, rõ ràng",
    "category": "tu-duy",
    "example": "我明白了",
    "examplePinyin": "Wǒ míng bai le",
    "exampleVi": "Tôi hiểu rồi"
  },
  {
    "id": "yct4-rnwi",
    "hanzi": "认为",
    "pinyin": "rèn wéi",
    "meaning": "cho rằng, nhận định",
    "category": "tu-duy",
    "example": "我认为这是对的",
    "examplePinyin": "wǒ rèn wéi zhè shì duì de",
    "exampleVi": "Tôi cho rằng điều này là đúng"
  },
  {
    "id": "yct4-xing",
    "hanzi": "想",
    "pinyin": "xiǎng",
    "meaning": "muốn (trợ động từ); nghĩ, suy nghĩ; nhớ",
    "category": "tu-duy",
    "example": "我想去中国",
    "examplePinyin": "Wǒ xiǎng qù Zhōngguó",
    "exampleVi": "Tôi muốn đi Trung Quốc"
  },
  {
    "id": "yct4-ywi",
    "hanzi": "以为",
    "pinyin": "yǐ wéi",
    "meaning": "nghĩ rằng",
    "category": "tu-duy",
    "example": "我以为你知道",
    "examplePinyin": "wǒ yǐ wéi nǐ zhī dào",
    "exampleVi": "Tôi nghĩ rằng bạn biết rồi"
  },
  {
    "id": "yct4-zhy",
    "hanzi": "注意",
    "pinyin": "zhù yì",
    "meaning": "chú ý, để ý, quan tâm",
    "category": "tu-duy",
    "example": "请注意听老师讲课。",
    "examplePinyin": "Qǐng zhùyì tīng lǎoshī jiǎngkè.",
    "exampleVi": "Vui lòng chú ý nghe thầy giáo giảng bài."
  },
  {
    "id": "yct4-dnxn",
    "hanzi": "担心",
    "pinyin": "dān xīn",
    "meaning": "lo lắng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我很担心他的健康。",
    "examplePinyin": "Wǒ hěn dānxīn tā de jiànkāng.",
    "exampleVi": "Tôi rất lo lắng cho sức khỏe của anh ấy."
  },
  {
    "id": "yct4-hip",
    "hanzi": "害怕",
    "pinyin": "hài pà",
    "meaning": "sợ",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我不害怕困难，我只怕放弃。",
    "examplePinyin": "wǒ bù hài pà kùn nan, wǒ zhǐ pà fàng qì.",
    "exampleVi": "Tôi không sợ khó khăn, tôi chỉ sợ bỏ cuộc."
  },
  {
    "id": "yct4-jnzhng",
    "hanzi": "紧张",
    "pinyin": "jǐn zhāng",
    "meaning": "căng thẳng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "明天要考试，我感到很紧张。",
    "examplePinyin": "míng tiān yào kǎo shì, wǒ gǎn dào hěn jǐn zhāng.",
    "exampleVi": "Mai thi rồi, tôi cảm thấy rất căng thẳng."
  },
  {
    "id": "yct4-k-ku",
    "hanzi": "哭",
    "pinyin": "kū",
    "meaning": "khóc",
    "category": "tinh-cam-va-cam-xuc",
    "example": "婴儿在哭。",
    "examplePinyin": "yīng ér zài kū.",
    "exampleVi": "Em bé đang khóc."
  },
  {
    "id": "yct4-kuil",
    "hanzi": "快乐",
    "pinyin": "kuài lè",
    "meaning": "vui vẻ",
    "category": "tinh-cam-va-cam-xuc",
    "example": "祝你们生日快乐！",
    "examplePinyin": "zhù nǐ men shēng rì kuài lè!",
    "exampleVi": "Chúc các bạn sinh nhật vui vẻ!"
  },
  {
    "id": "yct4-nngu",
    "hanzi": "难过",
    "pinyin": "nán guò",
    "meaning": "buồn",
    "category": "tinh-cam-va-cam-xuc",
    "example": "听到这个消息我很难过。",
    "examplePinyin": "tīng dào zhè ge xiāo xi wǒ hěn nán guò.",
    "exampleVi": "Nghe tin này tôi rất buồn."
  },
  {
    "id": "yct4-shngq",
    "hanzi": "生气",
    "pinyin": "shēng qì",
    "meaning": "tức giận, nổi giận (phổ biến); sinh khí (ít dùng)",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我生气了",
    "examplePinyin": "Wǒ shēngqì le",
    "exampleVi": "Tôi đã tức giận"
  },
  {
    "id": "yct4-xwng",
    "hanzi": "希望",
    "pinyin": "xī wàng",
    "meaning": "hy vọng, mong muốn",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我希望明年能去中国。",
    "examplePinyin": "Wǒ xīwàng míngnián néng qù Zhōngguó.",
    "exampleVi": "Tôi hy vọng năm sau có thể đi Trung Quốc."
  },
  {
    "id": "yct4-xingxn",
    "hanzi": "相信",
    "pinyin": "xiāng xìn",
    "meaning": "tin tưởng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我相信你",
    "examplePinyin": "wǒ xiāng xìn nǐ",
    "exampleVi": "Tôi tin tưởng bạn"
  },
  {
    "id": "yct4-xngq",
    "hanzi": "兴趣",
    "pinyin": "xìng qù",
    "meaning": "sở thích là điều mà ai đó thích làm, quan tâm hoặc muốn tìm hiểu thêm.",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我对音乐很感兴趣",
    "examplePinyin": "Wǒ duì yīnyuè hěn gǎn xìngqù",
    "exampleVi": "Tôi rất thích âm nhạc"
  },
  {
    "id": "yct4-fngxn",
    "hanzi": "放心",
    "pinyin": "fàng xīn",
    "meaning": "an tâm",
    "category": "tinh-cam-va-cam-xuc",
    "example": "请放心，我会照顾好自己。",
    "examplePinyin": "qǐng fàng xīn, wǒ huì zhào gù hǎo zì jǐ.",
    "exampleVi": "Vui lòng an tâm, tôi sẽ chăm sóc tốt bản thân."
  },
  {
    "id": "yct4-gnxngq",
    "hanzi": "感兴趣",
    "pinyin": "gǎn xìng qù",
    "meaning": "quan tâm đến",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我对中国文化很感兴趣。",
    "examplePinyin": "Wǒ duì Zhōngguó wénhuà hěn gǎn xìngqù.",
    "exampleVi": "Tôi rất thích thú với văn hóa Trung Quốc."
  },
  {
    "id": "yct4-goxng",
    "hanzi": "高兴",
    "pinyin": "gāo xìng",
    "meaning": "vui, vui vẻ",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我很高兴",
    "examplePinyin": "Wǒ hěn gāoxìng",
    "exampleVi": "Tôi rất vui"
  },
  {
    "id": "yct4-mny",
    "hanzi": "满意",
    "pinyin": "mǎn yì",
    "meaning": "hài lòng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我对这个结果很满意。",
    "examplePinyin": "wǒ duì zhè ge jié guǒ hěn mǎn yì.",
    "exampleVi": "Tôi rất hài lòng với kết quả này."
  },
  {
    "id": "yct4-jude",
    "hanzi": "觉得",
    "pinyin": "jué de",
    "meaning": "cảm thấy, nghĩ, cho rằng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我觉得今天很冷。",
    "examplePinyin": "Wǒ juéde jīntiān hěn lěng.",
    "exampleVi": "Tôi cảm thấy hôm nay rất lạnh."
  },
  {
    "id": "yct4-toyn",
    "hanzi": "讨厌",
    "pinyin": "tǎo yàn",
    "meaning": "chán ghét",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我很讨厌下雨天。",
    "examplePinyin": "Wǒ hěn tǎoyàn xiàyǔtiān.",
    "exampleVi": "Tôi rất ghét những ngày mưa."
  },
  {
    "id": "yct4-wngj",
    "hanzi": "忘记",
    "pinyin": "wàng jì",
    "meaning": "quên",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我忘记带钥匙了",
    "examplePinyin": "Wǒ wàng jì dài yào shi le",
    "exampleVi": "Tôi quên mang chìa khóa rồi"
  },
  {
    "id": "yct4-xnqng",
    "hanzi": "心情",
    "pinyin": "xīn qíng",
    "meaning": "tâm trạng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我今天心情很好",
    "examplePinyin": "wǒ jīn tiān xīn qíng hěn hǎo",
    "exampleVi": "Hôm nay tâm trạng tôi rất tốt"
  },
  {
    "id": "yct4-xngf",
    "hanzi": "幸福",
    "pinyin": "xìng fú",
    "meaning": "hạnh phúc",
    "category": "tinh-cam-va-cam-xuc",
    "example": "祝你和家人幸福。",
    "examplePinyin": "Zhù nǐ hé jiārén xìngfú.",
    "exampleVi": "Chúc bạn và gia đình hạnh phúc."
  },
  {
    "id": "yct4-yuny",
    "hanzi": "愿意",
    "pinyin": "yuàn yì",
    "meaning": "sẵn lòng, nguyện ý; mong muốn, ước gì",
    "category": "tinh-cam-va-cam-xuc",
    "example": "我很愿意帮助你。",
    "examplePinyin": "Wǒ hěn yuànyì bāngzhù nǐ.",
    "exampleVi": "Tôi rất sẵn lòng giúp đỡ bạn."
  },
  {
    "id": "yct4-zhoj",
    "hanzi": "着急",
    "pinyin": "zháo jí",
    "meaning": "lo lắng, sốt ruột, nôn nóng",
    "category": "tinh-cam-va-cam-xuc",
    "example": "别着急，慢慢来。",
    "examplePinyin": "Bié zháojí, mànman lái.",
    "exampleVi": "Đừng nôn nóng, từ từ."
  },
  {
    "id": "yct4-zhum",
    "hanzi": "周末",
    "pinyin": "zhōu mò",
    "meaning": "cuối tuần",
    "category": "thoi-gian",
    "example": "周末你做什么",
    "examplePinyin": "zhōu mò nǐ zuò shén me",
    "exampleVi": "Cuối tuần bạn làm gì"
  },
  {
    "id": "yct4-ji-jiu",
    "hanzi": "久",
    "pinyin": "jiǔ",
    "meaning": "lâu, lâu dài; đã lâu, từ lâu. Là tính từ chỉ thời gian kéo dài, hoặc dùng để hỏi về thời gian.",
    "category": "thoi-gian",
    "example": "好久不见",
    "examplePinyin": "Hǎojiǔ bújiàn",
    "exampleVi": "Lâu rồi không gặp"
  },
  {
    "id": "yct4-gngci",
    "hanzi": "刚才",
    "pinyin": "gāng cái",
    "meaning": "vừa rồi",
    "category": "thoi-gian",
    "example": "他刚才来过电话。",
    "examplePinyin": "tā gāng cái lái guò diàn huà.",
    "exampleVi": "Anh ấy vừa gọi điện đến."
  },
  {
    "id": "yct4-zujn",
    "hanzi": "最近",
    "pinyin": "zuì jìn",
    "meaning": "gần đây",
    "category": "thoi-gian",
    "example": "你最近怎么样？",
    "examplePinyin": "nǐ zuì jìn zěn me yàng?",
    "exampleVi": "Dạo này bạn thế nào?"
  },
  {
    "id": "yct4-guq",
    "hanzi": "过去",
    "pinyin": "guò qù",
    "meaning": "trong quá khứ",
    "category": "thoi-gian",
    "example": "过去的事情就让它过去吧。",
    "examplePinyin": "guò qù de shì qing jiù ràng tā guò qù ba.",
    "exampleVi": "Việc quá khứ cứ để nó qua đi."
  },
  {
    "id": "yct4-jingli",
    "hanzi": "将来",
    "pinyin": "jiāng lái",
    "meaning": "tương lai",
    "category": "thoi-gian",
    "example": "你将来想做什么工作？",
    "examplePinyin": "Nǐ jiānglái xiǎng zuò shénme gōngzuò?",
    "exampleVi": "Tương lai bạn muốn làm công việc gì?"
  },
  {
    "id": "yct4-k-ke-2",
    "hanzi": "刻",
    "pinyin": "kè",
    "meaning": "một khắc (15 phút), khắc",
    "category": "words-ii",
    "example": "三点一刻",
    "examplePinyin": "sān diǎn yī kè",
    "exampleVi": "Ba giờ mười lăm phút"
  },
  {
    "id": "yct4-yhur",
    "hanzi": "一会{儿}",
    "pinyin": "yī huìr",
    "meaning": "một lát, một chút; trong chốc lát",
    "category": "thoi-gian",
    "example": "我一会就来",
    "examplePinyin": "Wǒ yīhuì jiù lái",
    "exampleVi": "Tôi sẽ đến ngay trong một lát"
  },
  {
    "id": "yct4-yjng",
    "hanzi": "已经",
    "pinyin": "yǐ jīng",
    "meaning": "đã",
    "category": "thoi-gian",
    "example": "我已经吃饭了",
    "examplePinyin": "wǒ yǐ jīng chī fàn le",
    "exampleVi": "Tôi đã ăn cơm rồi"
  },
  {
    "id": "yct4-co",
    "hanzi": "草",
    "pinyin": "cǎo",
    "meaning": "cỏ",
    "category": "thien-nhien",
    "example": "地上有很多草",
    "examplePinyin": "dì shàng yǒu hěn duō cǎo",
    "exampleVi": "Trên đất có nhiều cỏ"
  },
  {
    "id": "yct4-cod",
    "hanzi": "草地",
    "pinyin": "cǎo dì",
    "meaning": "bãi cỏ",
    "category": "thien-nhien",
    "example": "我们在草地上休息",
    "examplePinyin": "wǒ men zài cǎo dì shàng xiū xi",
    "exampleVi": "Chúng ta nghỉ ngơi trên bãi cỏ"
  },
  {
    "id": "yct4-chngzi",
    "hanzi": "虫子",
    "pinyin": "chóng zi",
    "meaning": "sâu bọ",
    "category": "thien-nhien",
    "example": "树上有很多虫子。",
    "examplePinyin": "shù shàng yǒu hěn duō chóng zi.",
    "exampleVi": "Trên cây có rất nhiều sâu."
  },
  {
    "id": "yct4-dxing",
    "hanzi": "大象",
    "pinyin": "dà xiàng",
    "meaning": "con voi",
    "category": "thien-nhien",
    "example": "孩子们在动物园看到了大象。",
    "examplePinyin": "Háizimen zài dòngwùyuán kàndàole dàxiàng.",
    "exampleVi": "Trẻ em đã thấy voi ở sở thú."
  },
  {
    "id": "yct4-y-yu",
    "hanzi": "鱼",
    "pinyin": "yú",
    "meaning": "cá",
    "category": "thien-nhien",
    "example": "水里有鱼",
    "examplePinyin": "shuǐ lǐ yǒu yú",
    "exampleVi": "Trong nước có cá",
    "lessonNumber": 5
  },
  {
    "id": "yct4-dngw",
    "hanzi": "动物",
    "pinyin": "dòng wù",
    "meaning": "động vật",
    "category": "thien-nhien",
    "example": "我喜欢动物",
    "examplePinyin": "wǒ xǐ huan dòng wù",
    "exampleVi": "Tôi thích động vật"
  },
  {
    "id": "yct4-gu",
    "hanzi": "狗",
    "pinyin": "gǒu",
    "meaning": "con chó",
    "category": "thien-nhien",
    "example": "这是我的狗",
    "examplePinyin": "zhè shì wǒ de gǒu",
    "exampleVi": "Đây là con chó của tôi"
  },
  {
    "id": "yct4-gufng",
    "hanzi": "刮风",
    "pinyin": "guā fēng",
    "meaning": "gió thổi",
    "category": "thien-nhien",
    "example": "外面在刮风。",
    "examplePinyin": "Wàimiàn zài guāfēng.",
    "exampleVi": "Bên ngoài đang gió."
  },
  {
    "id": "yct4-h",
    "hanzi": "河",
    "pinyin": "hé",
    "meaning": "sông",
    "category": "thien-nhien",
    "example": "河很长",
    "examplePinyin": "hé hěn cháng",
    "exampleVi": "Dòng sông rất dài"
  },
  {
    "id": "yct4-huzi",
    "hanzi": "猴子",
    "pinyin": "hóu zi",
    "meaning": "khỉ",
    "category": "thien-nhien",
    "example": "猴子在树上跳来跳去。",
    "examplePinyin": "Hóuzi zài shùshàng tiàoláitiàoqù.",
    "exampleVi": "Khỉ đang nhảy qua nhảy lại trên cây."
  },
  {
    "id": "yct4-hdi",
    "hanzi": "蝴蝶",
    "pinyin": "hú dié",
    "meaning": "con bướm",
    "category": "thien-nhien",
    "example": "一只美丽的蝴蝶停在花朵上。",
    "examplePinyin": "yì zhī měi lì de hú dié tíng zài huā duǒ shàng.",
    "exampleVi": "Một chú bướm xinh đẹp đậu trên đóa hoa."
  },
  {
    "id": "yct4-hu-hua",
    "hanzi": "花",
    "pinyin": "huā",
    "meaning": "bông hoa",
    "category": "thien-nhien",
    "example": "这朵花很漂亮",
    "examplePinyin": "Zhè duǒ huā hěn piào liang",
    "exampleVi": "Bông hoa này rất đẹp"
  },
  {
    "id": "yct4-xngxing",
    "hanzi": "星星",
    "pinyin": "xīng xing",
    "meaning": "ngôi sao",
    "category": "thien-nhien",
    "example": "天上有星星",
    "examplePinyin": "tiān shàng yǒu xīng xing",
    "exampleVi": "Trên trời có ngôi sao"
  },
  {
    "id": "yct4-hunjng",
    "hanzi": "环境",
    "pinyin": "huán jìng",
    "meaning": "môi trường",
    "category": "thien-nhien",
    "example": "保护环境是每个人的责任。",
    "examplePinyin": "Bǎohù huánjìng shì měi gèrén de zérèn.",
    "exampleVi": "Bảo vệ môi trường là trách nhiệm của mỗi người."
  },
  {
    "id": "yct4-loh",
    "hanzi": "老虎",
    "pinyin": "lǎohǔ",
    "meaning": "con hổ, hổ",
    "category": "thien-nhien",
    "example": "动物园有老虎",
    "examplePinyin": "Dòngwùyuán yǒu lǎohǔ",
    "exampleVi": "Sở thú có hổ"
  },
  {
    "id": "yct4-m",
    "hanzi": "马",
    "pinyin": "mǎ",
    "meaning": "ngựa",
    "category": "thien-nhien",
    "example": "这匹马跑得很快。",
    "examplePinyin": "Zhè pǐ mǎ pǎo de hěn kuài.",
    "exampleVi": "Con ngựa này chạy rất nhanh."
  },
  {
    "id": "yct4-mo",
    "hanzi": "猫",
    "pinyin": "māo",
    "meaning": "con mèo",
    "category": "thien-nhien",
    "example": "猫很可爱",
    "examplePinyin": "māo hěn kě ài",
    "exampleVi": "Con mèo rất đáng yêu"
  },
  {
    "id": "yct4-miguhu",
    "hanzi": "玫瑰花",
    "pinyin": "méiguīhuā",
    "meaning": "bông hồng, hoa hồng",
    "category": "thien-nhien",
    "example": "这是一朵玫瑰花",
    "examplePinyin": "Zhè shì yī duǒ méiguīhuā",
    "exampleVi": "Đây là một bông hồng"
  },
  {
    "id": "yct4-nio",
    "hanzi": "鸟",
    "pinyin": "niǎo",
    "meaning": "chim",
    "category": "thien-nhien",
    "example": "树上有鸟",
    "examplePinyin": "shù shàng yǒu niǎo",
    "exampleVi": "Trên cây có chim"
  },
  {
    "id": "yct4-sh-shu",
    "hanzi": "树",
    "pinyin": "shù",
    "meaning": "cây (cây cối)",
    "category": "thien-nhien",
    "example": "这棵树很高",
    "examplePinyin": "Zhè kē shù hěn gāo",
    "exampleVi": "Cây này rất cao"
  },
  {
    "id": "yct4-shu",
    "hanzi": "水",
    "pinyin": "shuǐ",
    "meaning": "nước (danh từ)",
    "category": "thien-nhien",
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct4-tiyng",
    "hanzi": "太阳",
    "pinyin": "tài yáng",
    "meaning": "mặt trời",
    "category": "thien-nhien",
    "example": "太阳升起",
    "examplePinyin": "tài yáng shēng qǐ",
    "exampleVi": "Mặt trời mọc"
  },
  {
    "id": "yct4-to",
    "hanzi": "桃",
    "pinyin": "táo",
    "meaning": "đào",
    "category": "thien-nhien",
    "example": "春天的公园里桃花都开了",
    "examplePinyin": "chūn tiān de gōng yuán lǐ táo huā dōu kāi le",
    "exampleVi": "Mùa xuân đến, hoa đào trong công viên đều đã nở"
  },
  {
    "id": "yct4-tzi",
    "hanzi": "兔子",
    "pinyin": "tù zi",
    "meaning": "thỏ",
    "category": "thien-nhien",
    "example": "兔子很可爱。",
    "examplePinyin": "Tùzi hěn kě'ài.",
    "exampleVi": "Thỏ rất dễ thương."
  },
  {
    "id": "yct4-yuling",
    "hanzi": "月亮",
    "pinyin": "yuè liàng",
    "meaning": "mặt trăng",
    "category": "thien-nhien",
    "example": "月亮圆圆的",
    "examplePinyin": "yuè liàng yuán yuán de",
    "exampleVi": "Mặt trăng tròn trịa"
  },
  {
    "id": "yct4-xingmo",
    "hanzi": "熊猫",
    "pinyin": "xióng māo",
    "meaning": "gấu trúc",
    "category": "thien-nhien",
    "example": "熊猫是中国的国宝。",
    "examplePinyin": "Xióngmāo shì Zhōngguó de guóbǎo.",
    "exampleVi": "Gấu trúc là quốc bảo của Trung Quốc."
  },
  {
    "id": "yct4-xixu",
    "hanzi": "下雪",
    "pinyin": "xià xuě",
    "meaning": "tuyết rơi",
    "category": "thoi-tiet",
    "example": "外面下雪了",
    "examplePinyin": "wài miàn xià xuě le",
    "exampleVi": "Bên ngoài đang có tuyết rơi"
  },
  {
    "id": "yct4-xu",
    "hanzi": "雪",
    "pinyin": "xuě",
    "meaning": "tuyết",
    "category": "thoi-tiet",
    "example": "下雪了",
    "examplePinyin": "xià xuě le",
    "exampleVi": "Có tuyết rơi rồi"
  },
  {
    "id": "yct4-yn",
    "hanzi": "云",
    "pinyin": "yún",
    "meaning": "mây",
    "category": "thoi-tiet",
    "example": "天上有云",
    "examplePinyin": "tiān shàng yǒu yún",
    "exampleVi": "Trên trời có mây"
  },
  {
    "id": "yct4-chn",
    "hanzi": "春",
    "pinyin": "chūn",
    "meaning": "mùa xuân",
    "category": "thoi-tiet",
    "example": "春天来了，花都开了。",
    "examplePinyin": "chūn tiān lái le, huā dōu kāi le.",
    "exampleVi": "Mùa xuân đến rồi, hoa đều nở cả."
  },
  {
    "id": "yct4-chnj",
    "hanzi": "春季",
    "pinyin": "chūn jì",
    "meaning": "mùa xuân",
    "category": "thoi-tiet",
    "example": "春季常常下雨。",
    "examplePinyin": "chūn jì cháng cháng xià yǔ.",
    "exampleVi": "Mùa xuân trời hay mưa."
  },
  {
    "id": "yct4-dng-dong-2",
    "hanzi": "冬",
    "pinyin": "dōng",
    "meaning": "mùa đông",
    "category": "thoi-tiet",
    "example": "这里冬天不太冷。",
    "examplePinyin": "zhè li dōng tiān bù tài lěng.",
    "exampleVi": "Mùa đông ở đây không lạnh lắm."
  },
  {
    "id": "yct4-jji",
    "hanzi": "季节",
    "pinyin": "jì jié",
    "meaning": "mùa",
    "category": "thoi-tiet",
    "example": "你最喜欢哪个季节？",
    "examplePinyin": "nǐ zuì xǐ huan nǎ ge jì jié?",
    "exampleVi": "Bạn thích mùa nào nhất?"
  },
  {
    "id": "yct4-lingkuai",
    "hanzi": "凉快",
    "pinyin": "liáng kuai",
    "meaning": "mát mẻ",
    "category": "thoi-tiet",
    "example": "今天很凉快",
    "examplePinyin": "jīn tiān hěn liáng kuai",
    "exampleVi": "Hôm nay rất mát mẻ"
  },
  {
    "id": "yct4-nunhuo",
    "hanzi": "暖和",
    "pinyin": "nuǎn huo",
    "meaning": "ấm áp, ấm; dễ chịu",
    "category": "thoi-tiet",
    "example": "今天天气很暖和。",
    "examplePinyin": "jīn tiān tiān qì hěn nuǎn huo.",
    "exampleVi": "Hôm nay trời rất ấm áp."
  },
  {
    "id": "yct4-qng",
    "hanzi": "晴",
    "pinyin": "qíng",
    "meaning": "nắng, trong",
    "category": "thoi-tiet",
    "example": "今天很晴",
    "examplePinyin": "jīn tiān hěn qíng",
    "exampleVi": "Hôm nay trời tạnh nắng"
  },
  {
    "id": "yct4-yn-yin",
    "hanzi": "阴",
    "pinyin": "yīn",
    "meaning": "u ám",
    "category": "thoi-tiet",
    "example": "今天天阴",
    "examplePinyin": "jīn tiān tiān yīn",
    "exampleVi": "Hôm nay trời âm u"
  },
  {
    "id": "yct4-qi",
    "hanzi": "秋",
    "pinyin": "qiū",
    "meaning": "mùa thu",
    "category": "thoi-tiet",
    "example": "秋天的天气很舒服。",
    "examplePinyin": "qiū tiān de tiān qì hěn shū fu.",
    "exampleVi": "Thời tiết mùa thu rất dễ chịu."
  },
  {
    "id": "yct4-xi",
    "hanzi": "夏",
    "pinyin": "xià",
    "meaning": "mùa hè",
    "category": "thoi-tiet",
    "example": "夏天我常常去游泳。",
    "examplePinyin": "xià tiān wǒ cháng cháng qù yóu yǒng.",
    "exampleVi": "Mùa hè tôi thường đi bơi."
  },
  {
    "id": "yct4-bngun",
    "hanzi": "宾馆",
    "pinyin": "bīn guǎn",
    "meaning": "khách sạn, nhà nghỉ",
    "category": "noi",
    "example": "我们住在附近的宾馆。",
    "examplePinyin": "Wǒmen zhù zài fùjìn de bīnguǎn.",
    "exampleVi": "Chúng tôi ở tại khách sạn gần đây."
  },
  {
    "id": "yct4-chosh",
    "hanzi": "超市",
    "pinyin": "chāo shì",
    "meaning": "siêu thị",
    "category": "noi",
    "example": "我们去超市买东西",
    "examplePinyin": "wǒ men qù chāo shì mǎi dōng xi",
    "exampleVi": "Chúng tôi đi siêu thị mua đồ"
  },
  {
    "id": "yct4-chngsh",
    "hanzi": "城市",
    "pinyin": "chéng shì",
    "meaning": "thành phố",
    "category": "noi",
    "example": "大城市生活很方便。",
    "examplePinyin": "Dà chéngshì shēnghuó hěn fāngbiàn.",
    "exampleVi": "Cuộc sống ở thành phố lớn rất tiện lợi."
  },
  {
    "id": "yct4-dngwyun",
    "hanzi": "动物园",
    "pinyin": "dòng wù yuán",
    "meaning": "sở thú",
    "category": "noi",
    "example": "孩子们喜欢去动物园",
    "examplePinyin": "hái zi men xǐ huan qù dòng wù yuán",
    "exampleVi": "Trẻ em thích đi sở thú",
    "lessonNumber": 7
  },
  {
    "id": "yct4-fngun",
    "hanzi": "饭馆",
    "pinyin": "fàn guǎn",
    "meaning": "nhà hàng",
    "category": "noi",
    "example": "我们去饭馆吃饭吧",
    "examplePinyin": "wǒ men qù fàn guǎn chī fàn ba",
    "exampleVi": "Chúng ta đi nhà hàng ăn cơm đi"
  },
  {
    "id": "yct4-gngyun",
    "hanzi": "公园",
    "pinyin": "gōng yuán",
    "meaning": "công viên",
    "category": "noi",
    "example": "我们在公园散步",
    "examplePinyin": "wǒ men zài gōng yuán sàn bù",
    "exampleVi": "Chúng tôi đi dạo ở công viên"
  },
  {
    "id": "yct4-huyun",
    "hanzi": "花园",
    "pinyin": "huā yuán",
    "meaning": "vườn hoa",
    "category": "noi",
    "example": "我喜欢在花园里喝茶",
    "examplePinyin": "wǒ xǐ huan zài huā yuán lǐ hē chá",
    "exampleVi": "Tôi thích uống trà trong vườn hoa"
  },
  {
    "id": "yct4-jido",
    "hanzi": "街道",
    "pinyin": "jiē dào",
    "meaning": "đường phố",
    "category": "noi",
    "example": "这条街道很热闹。",
    "examplePinyin": "Zhè tiáo jiēdào hěn rènao.",
    "exampleVi": "Con phố này rất nhộn nhịp."
  },
  {
    "id": "yct4-qio",
    "hanzi": "桥",
    "pinyin": "qiáo",
    "meaning": "cầu",
    "category": "noi",
    "example": "河上有一座桥。",
    "examplePinyin": "Hé shàng yǒu yī zuò qiáo.",
    "exampleVi": "Trên sông có một cây cầu."
  },
  {
    "id": "yct4-shngdin",
    "hanzi": "商店",
    "pinyin": "shāng diàn",
    "meaning": "cửa hàng",
    "category": "noi",
    "example": "去商店",
    "examplePinyin": "qù shāngdiàn",
    "exampleVi": "đi cửa hàng"
  },
  {
    "id": "yct4-tshgun",
    "hanzi": "图书馆",
    "pinyin": "tú shū guǎn",
    "meaning": "thư viện",
    "category": "noi",
    "example": "我去图书馆看书。",
    "examplePinyin": "Wǒ qù túshūguǎn kànshū.",
    "exampleVi": "Tôi đi thư viện đọc sách."
  },
  {
    "id": "yct4-yyun",
    "hanzi": "医院",
    "pinyin": "yī yuàn",
    "meaning": "bệnh viện",
    "category": "noi",
    "example": "我去了医院",
    "examplePinyin": "Wǒ qù le yīyuàn",
    "exampleVi": "Tôi đã đến bệnh viện"
  },
  {
    "id": "yct4-ynhng",
    "hanzi": "银行",
    "pinyin": "yín háng",
    "meaning": "ngân hàng là tổ chức tài chính cung cấp các dịch vụ như gửi tiết kiệm, cho vay, chuyển tiền và các giao dịch tài chính khác.",
    "category": "noi",
    "example": "银行在哪儿？",
    "examplePinyin": "Yínháng zài nǎr?",
    "exampleVi": "Ngân hàng ở đâu?"
  },
  {
    "id": "yct4-doch",
    "hanzi": "到处",
    "pinyin": "dào chù",
    "meaning": "khắp nơi",
    "category": "noi",
    "example": "到处都是花",
    "examplePinyin": "dào chù dōu shì huā",
    "exampleVi": "Khắp nơi đều là hoa"
  },
  {
    "id": "yct4-dfang",
    "hanzi": "地方",
    "pinyin": "dì fang",
    "meaning": "nơi, chỗ",
    "category": "noi",
    "example": "这是什么地方？",
    "examplePinyin": "Zhè shì shénme dìfāng?",
    "exampleVi": "Đây là nơi nào?"
  },
  {
    "id": "yct4-fjn",
    "hanzi": "附近",
    "pinyin": "fù jìn",
    "meaning": "gần đây, ở gần, lân cận",
    "category": "noi",
    "example": "学校附近有很多商店。",
    "examplePinyin": "Xuéxiào fùjìn yǒu hěn duō shāngdiàn.",
    "exampleVi": "Gần trường học có nhiều cửa hàng."
  },
  {
    "id": "yct4-jn",
    "hanzi": "近",
    "pinyin": "jìn",
    "meaning": "gần",
    "category": "noi",
    "example": "我家很近",
    "examplePinyin": "wǒ jiā hěn jìn",
    "exampleVi": "Nhà tôi rất gần",
    "lessonNumber": 7
  },
  {
    "id": "yct4-lmin",
    "hanzi": "里面",
    "pinyin": "lǐ miàn",
    "meaning": "bên trong",
    "category": "noi",
    "example": "房间里面有三个人。",
    "examplePinyin": "Fángjiān lǐmiàn yǒu sān gè rén.",
    "exampleVi": "Trong phòng có ba người."
  },
  {
    "id": "yct4-qinmin",
    "hanzi": "前面",
    "pinyin": "qián miàn",
    "meaning": "phía trước; phần đầu, phần trước; tương lai",
    "category": "noi",
    "example": "前面就是银行。",
    "examplePinyin": "Qiánmiàn jiùshì yínháng.",
    "exampleVi": "Phía trước chính là ngân hàng."
  },
  {
    "id": "yct4-wimin",
    "hanzi": "外面",
    "pinyin": "wài miàn",
    "meaning": "bên ngoài, ngoài trời; nước ngoài",
    "category": "noi",
    "example": "外面下雨了。",
    "examplePinyin": "Wàimian xiàyǔ le.",
    "exampleVi": "Ở bên ngoài trời đang mưa."
  },
  {
    "id": "yct4-zhngjin",
    "hanzi": "中间",
    "pinyin": "zhōng jiān",
    "meaning": "ở giữa, trung gian",
    "category": "noi",
    "example": "我坐在两个人中间",
    "examplePinyin": "Wǒ zuò zài liǎng gè rén zhōngjiān",
    "exampleVi": "Tôi ngồi giữa hai người"
  },
  {
    "id": "yct4-zhr",
    "hanzi": "这{儿}",
    "pinyin": "zhèr",
    "meaning": "ở đây, nơi này; chỗ này (phương ngữ Bắc Kinh với erhua 儿化)",
    "category": "noi",
    "example": "我这儿有好吃的。",
    "examplePinyin": "Wǒ zhèr yǒu hǎochī de.",
    "exampleVi": "Ở đây tôi có đồ ăn ngon."
  },
  {
    "id": "yct4-nr-na{er}",
    "hanzi": "那{儿}",
    "pinyin": "nàr",
    "meaning": "ở đó, chỗ đó; đại từ chỉ nơi ở xa người nói",
    "category": "noi",
    "example": "书在那儿。",
    "examplePinyin": "Shū zài nàr.",
    "exampleVi": "Quyển sách ở đó."
  },
  {
    "id": "yct4-bn-ban",
    "hanzi": "搬",
    "pinyin": "bān",
    "meaning": "chuyển, di chuyển; dọn (nhà); khiêng, vác",
    "category": "giao-thong-va-giao-thong",
    "example": "我们下个月搬家。",
    "examplePinyin": "Wǒmen xià gè yuè bānjiā.",
    "exampleVi": "Tháng sau chúng tôi chuyển nhà."
  },
  {
    "id": "yct4-chzhn",
    "hanzi": "车站",
    "pinyin": "chē zhàn",
    "meaning": "bến xe, nhà ga, trạm xe",
    "category": "giao-thong-va-giao-thong",
    "example": "车站在哪里？",
    "examplePinyin": "Chēzhàn zài nǎlǐ?",
    "exampleVi": "Trạm xe ở đâu?",
    "lessonNumber": 7
  },
  {
    "id": "yct4-chzch",
    "hanzi": "出租车",
    "pinyin": "chū zū chē",
    "meaning": "taxi",
    "category": "giao-thong-va-giao-thong",
    "example": "我叫了一辆出租车",
    "examplePinyin": "wǒ jiào le yī liàng chū zū chē",
    "exampleVi": "Tôi gọi một chiếc taxi"
  },
  {
    "id": "yct4-chun",
    "hanzi": "船",
    "pinyin": "chuán",
    "meaning": "thuyền, tàu",
    "category": "giao-thong-va-giao-thong",
    "example": "湖面上有很多小船。",
    "examplePinyin": "hú miàn shàng yǒu hěn duō xiǎo chuán.",
    "exampleVi": "Trên mặt hồ có rất nhiều thuyền nhỏ."
  },
  {
    "id": "yct4-dti",
    "hanzi": "地铁",
    "pinyin": "dì tiě",
    "meaning": "tàu điện ngầm",
    "category": "giao-thong-va-giao-thong",
    "example": "坐地铁",
    "examplePinyin": "zuò dì tiě",
    "exampleVi": "Đi tàu điện ngầm"
  },
  {
    "id": "yct4-fij",
    "hanzi": "飞机",
    "pinyin": "fēi jī",
    "meaning": "máy bay",
    "category": "giao-thong-va-giao-thong",
    "example": "坐飞机去",
    "examplePinyin": "Zuò fēijī qù",
    "exampleVi": "Đi máy bay",
    "lessonNumber": 9
  },
  {
    "id": "yct4-gnggngqch",
    "hanzi": "公共汽车",
    "pinyin": "gōng gòng qì chē",
    "meaning": "xe buýt",
    "category": "giao-thong-va-giao-thong",
    "example": "我每天坐公共汽车上班",
    "examplePinyin": "wǒ měi tiān zuò gōng gòng qì chē shàng bān",
    "exampleVi": "Tôi hàng ngày ngồi xe buýt đi làm",
    "lessonNumber": 7
  },
  {
    "id": "yct4-huch",
    "hanzi": "火车",
    "pinyin": "huǒ chē",
    "meaning": "tàu hỏa, tàu lửa",
    "category": "giao-thong-va-giao-thong",
    "example": "坐火车去北京",
    "examplePinyin": "Zuò huǒchē qù Běijīng",
    "exampleVi": "Đi tàu hỏa đến Bắc Kinh"
  },
  {
    "id": "yct4-huchzhn",
    "hanzi": "火车站",
    "pinyin": "huǒ chē zhàn",
    "meaning": "ga xe lửa, nhà ga; nơi tàu hỏa dừng và đón trả khách",
    "category": "giao-thong-va-giao-thong",
    "example": "火车站离这里很远。",
    "examplePinyin": "Huǒchēzhàn lí zhèlǐ hěn yuǎn.",
    "exampleVi": "Ga xe lửa cách đây rất xa."
  },
  {
    "id": "yct4-jchng",
    "hanzi": "机场",
    "pinyin": "jī chǎng",
    "meaning": "sân bay",
    "category": "giao-thong-va-giao-thong",
    "example": "我们去机场送朋友。",
    "examplePinyin": "Wǒmen qù jīchǎng sòng péngyǒu.",
    "exampleVi": "Chúng tôi ra sân bay tiễn bạn."
  },
  {
    "id": "yct4-ml",
    "hanzi": "迷路",
    "pinyin": "mí lù",
    "meaning": "lạc đường",
    "category": "giao-thong-va-giao-thong",
    "example": "我在城市里迷路了。",
    "examplePinyin": "Wǒ zài chéngshì lǐ mílù le.",
    "exampleVi": "Tôi bị lạc trong thành phố."
  },
  {
    "id": "yct4-q",
    "hanzi": "去",
    "pinyin": "qù",
    "meaning": "đi (động từ di chuyển)",
    "category": "giao-thong-va-giao-thong",
    "example": "我去学校",
    "examplePinyin": "Wǒ qù xuéxiào",
    "exampleVi": "Tôi đi trường"
  },
  {
    "id": "yct4-sj",
    "hanzi": "司机",
    "pinyin": "sī jī",
    "meaning": "tài xế",
    "category": "giao-thong-va-giao-thong",
    "example": "他是出租车司机",
    "examplePinyin": "tā shì chū zū chē sī jī",
    "exampleVi": "Anh ấy là tài xế taxi"
  },
  {
    "id": "yct4-zhn",
    "hanzi": "站",
    "pinyin": "zhàn",
    "meaning": "đứng",
    "category": "dong-tu-toi",
    "example": "请站起来。",
    "examplePinyin": "qǐng zhàn qǐ lái.",
    "exampleVi": "Vui lòng đứng dậy."
  },
  {
    "id": "yct4-zu",
    "hanzi": "走",
    "pinyin": "zǒu",
    "meaning": "đi bộ, đi",
    "category": "giao-thong-va-giao-thong",
    "example": "我走去学校",
    "examplePinyin": "Wǒ zǒu qù xué xiào",
    "exampleVi": "Tôi đi bộ đến trường",
    "lessonNumber": 6
  },
  {
    "id": "yct4-ch-chu",
    "hanzi": "出",
    "pinyin": "chū",
    "meaning": "ra, đi ra",
    "category": "giao-thong-va-giao-thong",
    "example": "出去",
    "examplePinyin": "Chū qù",
    "exampleVi": "Bước ra ngoài"
  },
  {
    "id": "yct4-chf",
    "hanzi": "出发",
    "pinyin": "chū fā",
    "meaning": "khởi hành, xuất phát",
    "category": "giao-thong-va-giao-thong",
    "example": "我们明天一早就出发去北京。",
    "examplePinyin": "wǒ men míng tiān yī zǎo jiù chū fā qù běi jīng.",
    "exampleVi": "Sáng sớm mai chúng tôi sẽ xuất phát đi Bắc Kinh."
  },
  {
    "id": "yct4-do",
    "hanzi": "到",
    "pinyin": "dào",
    "meaning": "đến, tới",
    "category": "giao-thong-va-giao-thong",
    "example": "我到了",
    "examplePinyin": "Wǒ dào le",
    "exampleVi": "Tôi đã đến nơi"
  },
  {
    "id": "yct4-gu-guo",
    "hanzi": "过",
    "pinyin": "guò",
    "meaning": "qua, đi qua; trải qua, ăn (lễ, sinh nhật); trợ từ chỉ kinh nghiệm: đã từng (去过)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我吃过饭了",
    "examplePinyin": "wǒ chī guò fàn le",
    "exampleVi": "Tôi đã ăn rồi",
    "lessonNumber": 6
  },
  {
    "id": "yct4-hu-hui",
    "hanzi": "回",
    "pinyin": "huí",
    "meaning": "trở về",
    "category": "giao-thong-va-giao-thong",
    "example": "我回家了",
    "examplePinyin": "wǒ huí jiā le",
    "exampleVi": "Tôi về nhà rồi"
  },
  {
    "id": "yct4-jn-jin",
    "hanzi": "进",
    "pinyin": "jìn",
    "meaning": "vào, tiến lên",
    "category": "giao-thong-va-giao-thong",
    "example": "进去",
    "examplePinyin": "Jìn qù",
    "exampleVi": "Bước vào bên trong",
    "lessonNumber": 5
  },
  {
    "id": "yct4-li",
    "hanzi": "来",
    "pinyin": "lái",
    "meaning": "đến, tới, đến nơi",
    "category": "giao-thong-va-giao-thong",
    "example": "他来了",
    "examplePinyin": "Tā lái le",
    "exampleVi": "Anh ấy đã đến"
  },
  {
    "id": "yct4-lidej",
    "hanzi": "来得及",
    "pinyin": "lái de jí",
    "meaning": "kịp, còn kịp, kịp thời",
    "category": "giao-thong-va-giao-thong",
    "example": "还来得及",
    "examplePinyin": "hái láidejí",
    "exampleVi": "vẫn còn kịp"
  },
  {
    "id": "yct4-lki",
    "hanzi": "离开",
    "pinyin": "lí kāi",
    "meaning": "rời khỏi",
    "category": "giao-thong-va-giao-thong",
    "example": "我明天要离开这个城市。",
    "examplePinyin": "wǒ míng tiān yào lí kāi zhè ge chéng shì.",
    "exampleVi": "Ngày mai tôi phải rời khỏi thành phố này."
  },
  {
    "id": "yct4-l-lu",
    "hanzi": "路",
    "pinyin": "lù",
    "meaning": "đường, lối đi",
    "category": "giao-thong-va-giao-thong",
    "example": "走路",
    "examplePinyin": "Zǒu lù",
    "exampleVi": "Đi bộ, đi đường",
    "lessonNumber": 7
  },
  {
    "id": "yct4-q-qi",
    "hanzi": "骑",
    "pinyin": "qí",
    "meaning": "cưỡi",
    "category": "giao-thong-va-giao-thong",
    "example": "我会骑自行车",
    "examplePinyin": "wǒ huì qí zì xíng chē",
    "exampleVi": "Tôi biết cưỡi xe đạp"
  },
  {
    "id": "yct4-snb",
    "hanzi": "散步",
    "pinyin": "sàn bù",
    "meaning": "đi dạo, tản bộ",
    "category": "giao-thong-va-giao-thong",
    "example": "晚饭后，我们去公园散步。",
    "examplePinyin": "Wǎnfàn hòu, wǒmen qù gōngyuán sànbù.",
    "exampleVi": "Sau bữa tối, chúng ta đi dạo ở công viên."
  },
  {
    "id": "yct4-tng-ting",
    "hanzi": "停",
    "pinyin": "tíng",
    "meaning": "dừng; đậu xe",
    "category": "giao-thong-va-giao-thong",
    "example": "车停了",
    "examplePinyin": "chē tíng le",
    "exampleVi": "Xe đã dừng lại"
  },
  {
    "id": "yct4-zxngch",
    "hanzi": "自行车",
    "pinyin": "zì xíng chē",
    "meaning": "xe đạp",
    "category": "giao-thong-va-giao-thong",
    "example": "我骑自行车上班",
    "examplePinyin": "wǒ qí zì xíng chē shàng bān",
    "exampleVi": "Tôi đạp xe đi làm"
  },
  {
    "id": "yct4-shupioyun",
    "hanzi": "售票员",
    "pinyin": "shòu piào yuán",
    "meaning": "nhân viên bán vé, người soát vé",
    "category": "giao-thong-va-giao-thong",
    "example": "售票员在哪里？",
    "examplePinyin": "Shòupiàoyuán zài nǎlǐ?",
    "exampleVi": "Nhân viên bán vé ở đâu?"
  },
  {
    "id": "yct4-a",
    "hanzi": "啊",
    "pinyin": "a",
    "meaning": "trợ từ ngữ khí cuối câu: à, nhé, nhỉ; ồ, a (thán từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "是啊",
    "examplePinyin": "shì a",
    "exampleVi": "Vậy ạ/đúng vậy"
  },
  {
    "id": "yct4-b",
    "hanzi": "把",
    "pinyin": "bǎ",
    "meaning": "cầm, nắm; giới từ đưa tân ngữ lên trước động từ (câu chữ 把); lượng từ cho vật có cán (ghế, dao, ô)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请把门关上。",
    "examplePinyin": "Qǐng bǎ mén guān shàng.",
    "exampleVi": "Xin hãy đóng cửa."
  },
  {
    "id": "yct4-bi-bei",
    "hanzi": "被",
    "pinyin": "bèi",
    "meaning": "bị, được (giới từ đánh dấu câu bị động); chăn (被子)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我的自行车被人骑走了。",
    "examplePinyin": "wǒ de zì xíng chē bèi rén qí zǒu le.",
    "exampleVi": "Xe đạp của tôi bị người ta đi mất rồi."
  },
  {
    "id": "yct4-b-bi",
    "hanzi": "比",
    "pinyin": "bǐ",
    "meaning": "so sánh, so",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你比我高",
    "examplePinyin": "Nǐ bǐ wǒ gāo",
    "exampleVi": "Bạn cao hơn tôi"
  },
  {
    "id": "yct4-cng",
    "hanzi": "从",
    "pinyin": "cóng",
    "meaning": "từ, theo",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我从中国来",
    "examplePinyin": "Wǒ cóng Zhōngguó lái",
    "exampleVi": "Tôi đến từ Trung Quốc"
  },
  {
    "id": "yct4-di",
    "hanzi": "得",
    "pinyin": "děi",
    "meaning": "phải, cần (khẩu ngữ)",
    "category": "dong-tu-toi",
    "example": "我得到了好消息",
    "examplePinyin": "wǒ dé dào le hǎo xiāo xi",
    "exampleVi": "Tôi đã nhận được tin tốt"
  },
  {
    "id": "yct4-dushao",
    "hanzi": "多少",
    "pinyin": "duō shao",
    "meaning": "bao nhiêu",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你有多少钱？",
    "examplePinyin": "Nǐ yǒu duōshǎo qián?",
    "exampleVi": "Bạn có bao nhiêu tiền?"
  },
  {
    "id": "yct4-gn",
    "hanzi": "跟",
    "pinyin": "gēn",
    "meaning": "với; theo",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我跟妈妈一起去商店。",
    "examplePinyin": "wǒ gēn mā ma yī qǐ qù shāng diàn.",
    "exampleVi": "Tôi cùng mẹ đi cửa hàng."
  },
  {
    "id": "yct4-gnj",
    "hanzi": "根据",
    "pinyin": "gēn jù",
    "meaning": "dựa vào, theo, căn cứ vào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "根据天气预报，明天会下雨。",
    "examplePinyin": "Gēnjù tiānqì yùbào, míngtiān huì xiàyǔ.",
    "exampleVi": "Theo dự báo thời tiết, ngày mai sẽ mưa."
  },
  {
    "id": "yct4-gng",
    "hanzi": "更",
    "pinyin": "gèng",
    "meaning": "hơn",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "今天更冷",
    "examplePinyin": "jīn tiān gèng lěng",
    "exampleVi": "Hôm nay lạnh hơn"
  },
  {
    "id": "yct4-guny",
    "hanzi": "关于",
    "pinyin": "guān yú",
    "meaning": "về, liên quan đến",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "关于这个问题，我们再讨论一下吧。",
    "examplePinyin": "Guānyú zhège wèntí, wǒmen zài tǎolùn yīxià ba.",
    "exampleVi": "Về vấn đề này, chúng ta hãy thảo luận thêm nhé."
  },
  {
    "id": "yct4-h-ha",
    "hanzi": "哈",
    "pinyin": "hā",
    "meaning": "ha (tiếng cười)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "听到这个笑话，大家忍不住哈哈大笑。",
    "examplePinyin": "tīng dào zhè ge xiào hua, dà jiā rěn bu zhù hā hā dà xiào.",
    "exampleVi": "Nghe xong câu chuyện cười này, mọi người không nhịn được cười ha ha."
  },
  {
    "id": "yct4-hi",
    "hanzi": "嘿",
    "pinyin": "hēi",
    "meaning": "này (thán từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "嘿，你来了",
    "examplePinyin": "Hēi, nǐ lái le",
    "exampleVi": "Này, bạn đến rồi"
  },
  {
    "id": "yct4-hu-hou",
    "hanzi": "后",
    "pinyin": "hòu",
    "meaning": "sau, phía sau",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请往后走",
    "examplePinyin": "Qǐng wǎng hòu zǒu",
    "exampleVi": "Xin hãy đi về phía sau",
    "lessonNumber": 6
  },
  {
    "id": "yct4-hish",
    "hanzi": "还是",
    "pinyin": "hái shì",
    "meaning": "vẫn, vẫn còn; hay là (trong câu hỏi lựa chọn)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你喜欢咖啡还是茶？",
    "examplePinyin": "Nǐ xǐhuan kāfēi háishì chá?",
    "exampleVi": "Bạn thích cà phê hay trà?"
  },
  {
    "id": "yct4-j",
    "hanzi": "几",
    "pinyin": "jǐ",
    "meaning": "mấy, bao nhiêu (hỏi số lượng nhỏ); vài",
    "category": "so-luong-va-do-luong",
    "example": "你多大？我二十几岁",
    "examplePinyin": "Nǐ duō dà? Wǒ èrshí jǐ suì",
    "exampleVi": "Bạn bao nhiêu tuổi? Tôi hai mươi mấy tuổi"
  },
  {
    "id": "yct4-jnggu",
    "hanzi": "经过",
    "pinyin": "jīng guò",
    "meaning": "đi qua",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我经过那家店",
    "examplePinyin": "wǒ jīng guò nà jiā diàn",
    "exampleVi": "Tôi đi qua cửa hàng đó"
  },
  {
    "id": "yct4-l-li-2",
    "hanzi": "离",
    "pinyin": "lí",
    "meaning": "cách (chỉ khoảng cách không gian, thời gian); rời xa",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我家离学校很远",
    "examplePinyin": "wǒ jiā lí xué xiào hěn yuǎn",
    "exampleVi": "Nhà tôi cách trường rất xa"
  },
  {
    "id": "yct4-ma",
    "hanzi": "吗",
    "pinyin": "ma",
    "meaning": "trợ từ nghi vấn cuối câu: … không?, … phải không?",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你好吗？",
    "examplePinyin": "Nǐ hǎo ma?",
    "exampleVi": "Bạn khỏe không?"
  },
  {
    "id": "yct4-n",
    "hanzi": "哪",
    "pinyin": "nǎ",
    "meaning": "đại từ hỏi: nào, ở đâu, cái nào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你是哪国人？",
    "examplePinyin": "Nǐ shì nǎ guó rén?",
    "exampleVi": "Bạn là người nước nào?"
  },
  {
    "id": "yct4-ne",
    "hanzi": "呢",
    "pinyin": "ne",
    "meaning": "trợ từ cuối câu: … thì sao?, … nhỉ? (hỏi tiếp, hỏi lại); biểu thị hành động đang tiếp diễn",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你呢",
    "examplePinyin": "Nǐ ne",
    "exampleVi": "Còn bạn thì sao"
  },
  {
    "id": "yct4-shnme",
    "hanzi": "什么",
    "pinyin": "shén me",
    "meaning": "gì, cái gì",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "这是什么？",
    "examplePinyin": "Zhè shì shénme?",
    "exampleVi": "Đây là cái gì?"
  },
  {
    "id": "yct4-wi",
    "hanzi": "为",
    "pinyin": "wéi",
    "meaning": "làm, là, trở thành; bị (为…所…)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "为人民服务",
    "examplePinyin": "wéi rén mín fú wù",
    "exampleVi": "Phục vụ nhân dân"
  },
  {
    "id": "yct4-wln",
    "hanzi": "无论",
    "pinyin": "wú lùn",
    "meaning": "bất kể, bất luận, dù cho",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "无论天气好坏，他都去跑步。",
    "examplePinyin": "Wúlùn tiānqì hǎohuài, tā dōu qù pǎobù.",
    "exampleVi": "Bất kể thời tiết tốt xấu, anh ấy đều đi chạy bộ."
  },
  {
    "id": "yct4-yu",
    "hanzi": "又",
    "pinyin": "yòu",
    "meaning": "lại, lại nữa; vừa… vừa…",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "他又来了",
    "examplePinyin": "tā yòu lái le",
    "exampleVi": "Anh ấy lại đến rồi"
  },
  {
    "id": "yct4-znme",
    "hanzi": "怎么",
    "pinyin": "zěn me",
    "meaning": "thế nào, như thế nào; sao, tại sao",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你怎么去？",
    "examplePinyin": "Nǐ zěnme qù?",
    "exampleVi": "Bạn đi thế nào?"
  },
  {
    "id": "yct4-znmeyng",
    "hanzi": "怎么样",
    "pinyin": "zěn me yàng",
    "meaning": "Thế nào",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你怎么样",
    "examplePinyin": "nǐ zěn me yàng",
    "exampleVi": "Bạn thế nào"
  },
  {
    "id": "yct4-sh-shi",
    "hanzi": "是",
    "pinyin": "shì",
    "meaning": "là (hệ từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我是学生",
    "examplePinyin": "Wǒ shì xuésheng",
    "exampleVi": "Tôi là học sinh"
  },
  {
    "id": "yct4-shi",
    "hanzi": "谁",
    "pinyin": "shéi",
    "meaning": "ai (đại từ hỏi người)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你是谁？",
    "examplePinyin": "Nǐ shì shéi?",
    "exampleVi": "Bạn là ai?"
  },
  {
    "id": "yct4-wile",
    "hanzi": "为了",
    "pinyin": "wèi le",
    "meaning": "để - chỉ mục đích hoặc lý do của một hành động.",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "为了学习汉语，我来中国",
    "examplePinyin": "Wèile xuéxí Hànyǔ, wǒ lái Zhōngguó",
    "exampleVi": "Để học tiếng Trung, tôi đến Trung Quốc"
  },
  {
    "id": "yct4-wishnme",
    "hanzi": "为什么",
    "pinyin": "wèi shén me",
    "meaning": "tại sao",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你为什么来",
    "examplePinyin": "nǐ wèi shén me lái",
    "exampleVi": "Tại sao bạn đến",
    "lessonNumber": 10
  },
  {
    "id": "yct4-yuliyu",
    "hanzi": "越来越",
    "pinyin": "yuè lái yuè",
    "meaning": "càng ngày càng",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "天气越来越冷",
    "examplePinyin": "tiān qì yuè lái yuè lěng",
    "exampleVi": "Thời tiết càng ngày càng lạnh"
  },
  {
    "id": "yct4-zhyo",
    "hanzi": "只要",
    "pinyin": "zhǐ yào",
    "meaning": "miễn là",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "只要你来就好",
    "examplePinyin": "zhǐ yào nǐ lái jiù hǎo",
    "exampleVi": "Miễn là bạn đến là tốt"
  },
  {
    "id": "yct4-sh-shi-2",
    "hanzi": "使",
    "pinyin": "shǐ",
    "meaning": "khiến, làm cho, sử dụng",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "这个消息使大家都很高兴。",
    "examplePinyin": "Zhège xiāoxi shǐ dàjiā dōu hěn gāoxìng.",
    "exampleVi": "Tin này khiến ai cũng vui."
  },
  {
    "id": "yct4-xing-xiang",
    "hanzi": "向",
    "pinyin": "xiàng",
    "meaning": "hướng về",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "他向我点头",
    "examplePinyin": "tā xiàng wǒ diǎn tóu",
    "exampleVi": "Anh ấy gật đầu với tôi"
  },
  {
    "id": "yct4-zi",
    "hanzi": "再",
    "pinyin": "zài",
    "meaning": "lại, nữa, thêm lần nữa",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "再见",
    "examplePinyin": "Zài jiàn",
    "exampleVi": "Tạm biệt (gặp lại)"
  },
  {
    "id": "yct4-byb",
    "hanzi": "比一比",
    "pinyin": "bǐ yī bǐ",
    "meaning": "so sánh, so sánh (vếng)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我们比一比谁高",
    "examplePinyin": "Wǒmen bǐ-yī bǐ shéi gāo",
    "exampleVi": "Chúng ta so sánh xem ai cao hơn"
  },
  {
    "id": "yct4-nr-na{er}-2",
    "hanzi": "哪{儿}",
    "pinyin": "nǎr",
    "meaning": "Ở đâu, nơi nào; (hỏi vị trí)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你去哪儿？",
    "examplePinyin": "Nǐ qù nǎr?",
    "exampleVi": "Bạn đi đâu?"
  },
  {
    "id": "yct4-bjio",
    "hanzi": "比较",
    "pinyin": "bǐ jiào",
    "meaning": "so sánh, tương đối",
    "category": "pho-tu",
    "example": "这两本书，哪一本比较好？",
    "examplePinyin": "Zhè liǎng běn shū, nǎ yī běn bǐjiào hǎo?",
    "exampleVi": "Hai quyển sách này, quyển nào tốt hơn?"
  },
  {
    "id": "yct4-bx",
    "hanzi": "必须",
    "pinyin": "bì xū",
    "meaning": "phải",
    "category": "pho-tu",
    "example": "你必须去",
    "examplePinyin": "nǐ bì xū qù",
    "exampleVi": "Bạn phải đi"
  },
  {
    "id": "yct4-ci-cai-2",
    "hanzi": "才",
    "pinyin": "cái",
    "meaning": "chỉ; mới",
    "category": "pho-tu",
    "example": "我才来",
    "examplePinyin": "wǒ cái lái",
    "exampleVi": "Tôi mới đến"
  },
  {
    "id": "yct4-dgi",
    "hanzi": "大概",
    "pinyin": "dà gài",
    "meaning": "khoảng, chừng, đại khái, có lẽ",
    "category": "pho-tu",
    "example": "现在是大概下午三点左右。",
    "examplePinyin": "Xiànzài shì dàgài xiàwǔ sān diǎn zuǒyòu.",
    "exampleVi": "Bây giờ là khoảng ba giờ chiều."
  },
  {
    "id": "yct4-dume",
    "hanzi": "多么",
    "pinyin": "duō me",
    "meaning": "đến mức nào, làm sao",
    "category": "pho-tu",
    "example": "多么漂亮的风景",
    "examplePinyin": "duō me piào liang de fēng jǐng",
    "exampleVi": "Cảnh đẹp biết mấy"
  },
  {
    "id": "yct4-fichng",
    "hanzi": "非常",
    "pinyin": "fēi cháng",
    "meaning": "cực kỳ, rất",
    "category": "pho-tu",
    "example": "这本书非常好。",
    "examplePinyin": "Zhè běn shū fēicháng hǎo.",
    "exampleVi": "Quyển sách này rất hay."
  },
  {
    "id": "yct4-hoxing",
    "hanzi": "好像",
    "pinyin": "hǎo xiàng",
    "meaning": "dường như; hình như",
    "category": "pho-tu",
    "example": "好像下雨了",
    "examplePinyin": "hǎo xiàng xià yǔ le",
    "exampleVi": "Hình như trời mưa rồi"
  },
  {
    "id": "yct4-hn",
    "hanzi": "很",
    "pinyin": "hěn",
    "meaning": "rất, lắm (phó từ tăng cường)",
    "category": "pho-tu",
    "example": "很好",
    "examplePinyin": "hěn hǎo",
    "exampleVi": "Rất tốt / Rất tốt"
  },
  {
    "id": "yct4-j-ji",
    "hanzi": "极",
    "pinyin": "jí",
    "meaning": "cực kỳ",
    "category": "pho-tu",
    "example": "这个电影好看极了。",
    "examplePinyin": "zhè ge diàn yǐng hǎo kàn jí le.",
    "exampleVi": "Bộ phim này hay cực kỳ."
  },
  {
    "id": "yct4-jh",
    "hanzi": "几乎",
    "pinyin": "jī hū",
    "meaning": "hầu như",
    "category": "pho-tu",
    "example": "他几乎每天都去跑步。",
    "examplePinyin": "tā jī hū měi tiān dōu qù pǎo bù.",
    "exampleVi": "Hầu như ngày nào anh ấy cũng đi chạy bộ."
  },
  {
    "id": "yct4-y-ye",
    "hanzi": "也",
    "pinyin": "yě",
    "meaning": "cũng (phó từ)",
    "category": "pho-tu",
    "example": "我也是",
    "examplePinyin": "Wǒ yě shì",
    "exampleVi": "Tôi cũng là"
  },
  {
    "id": "yct4-ydinr",
    "hanzi": "一点{儿}",
    "pinyin": "yī diǎnr",
    "meaning": "một chút, một ít; dùng để chỉ số lượng nhỏ hoặc khoảng thời gian ngắn",
    "category": "pho-tu",
    "example": "我有一点儿饿。",
    "examplePinyin": "Wǒ yǒu yīdiǎnr è.",
    "exampleVi": "Tôi hơi đói một chút."
  },
  {
    "id": "yct4-ydng",
    "hanzi": "一定",
    "pinyin": "yī dìng",
    "meaning": "nhất định",
    "category": "pho-tu",
    "example": "我一定去",
    "examplePinyin": "wǒ yī dìng qù",
    "exampleVi": "Tôi nhất định sẽ đi"
  },
  {
    "id": "yct4-yq",
    "hanzi": "一起",
    "pinyin": "yī qǐ",
    "meaning": "chung với nhau",
    "category": "pho-tu",
    "example": "我们一起去",
    "examplePinyin": "Wǒmen yīqǐ qù",
    "exampleVi": "Chúng tôi đi cùng nhau"
  },
  {
    "id": "yct4-yzh",
    "hanzi": "一直",
    "pinyin": "yī zhí",
    "meaning": "thẳng",
    "category": "pho-tu",
    "example": "一直往前走",
    "examplePinyin": "yī zhí wǎng qián zǒu",
    "exampleVi": "Đi thẳng về phía trước"
  },
  {
    "id": "yct4-zhnsh",
    "hanzi": "准时",
    "pinyin": "zhǔn shí",
    "meaning": "đúng giờ",
    "category": "pho-tu",
    "example": "会议准时开始。",
    "examplePinyin": "Huìyì zhǔnshí kāishǐ.",
    "exampleVi": "Cuộc họp bắt đầu đúng giờ."
  },
  {
    "id": "yct4-zngsh",
    "hanzi": "总是",
    "pinyin": "zǒng shì",
    "meaning": "luôn luôn",
    "category": "pho-tu",
    "example": "他总是很努力工作。",
    "examplePinyin": "Tā zǒngshì hěn nǔlì gōngzuò.",
    "exampleVi": "Anh ấy luôn luôn làm việc chăm chỉ."
  },
  {
    "id": "yct4-zu-zui",
    "hanzi": "最",
    "pinyin": "zuì",
    "meaning": "nhất, cực kỳ, nhất",
    "category": "pho-tu",
    "example": "最好",
    "examplePinyin": "Zuì hǎo",
    "exampleVi": "Tốt nhất"
  },
  {
    "id": "yct4-zh-zhi",
    "hanzi": "只",
    "pinyin": "zhī",
    "meaning": "con, chiếc (lượng từ cho động vật, đồ vật đi theo cặp)",
    "category": "dem-tu",
    "example": "我只说一次",
    "examplePinyin": "wǒ zhǐ shuō yī cì",
    "exampleVi": "Tôi chỉ nói một lần"
  },
  {
    "id": "yct4-zhn-zhen",
    "hanzi": "真",
    "pinyin": "zhēn",
    "meaning": "thật, thật sự",
    "category": "pho-tu",
    "example": "真的",
    "examplePinyin": "Zhēn de",
    "exampleVi": "Thật sự, thật"
  },
  {
    "id": "yct4-yyng",
    "hanzi": "一样",
    "pinyin": "yī yàng",
    "meaning": "giống nhau",
    "category": "pho-tu",
    "example": "我们一样",
    "examplePinyin": "Wǒmen yīyàng",
    "exampleVi": "Chúng tôi giống nhau"
  },
  {
    "id": "yct4-yxir",
    "hanzi": "一下{儿}",
    "pinyin": "yī xiàr",
    "meaning": "một chút, một lúc; dùng sau động từ để chỉ thời gian ngắn hoặc một lần",
    "category": "pho-tu",
    "example": "等一下",
    "examplePinyin": "děng yīxià",
    "exampleVi": "đợi một chút"
  },
  {
    "id": "yct4-yqin",
    "hanzi": "以前",
    "pinyin": "yǐ qián",
    "meaning": "trước đây",
    "category": "pho-tu",
    "example": "以前我住在这里",
    "examplePinyin": "yǐ qián wǒ zhù zài zhè li",
    "exampleVi": "Trước đây tôi sống ở đây"
  },
  {
    "id": "yct4-yhu",
    "hanzi": "以后",
    "pinyin": "yǐ hòu",
    "meaning": "sau này",
    "category": "pho-tu",
    "example": "以后我们还是朋友",
    "examplePinyin": "yǐ hòu wǒ men hái shi péng you",
    "exampleVi": "Sau này chúng ta vẫn là bạn"
  },
  {
    "id": "yct4-ybn",
    "hanzi": "一般",
    "pinyin": "yī bān",
    "meaning": "thông thường",
    "category": "pho-tu",
    "example": "一般情况",
    "examplePinyin": "yī bān qíng kuàng",
    "exampleVi": "Tình huống thông thường"
  },
  {
    "id": "yct4-xng",
    "hanzi": "行",
    "pinyin": "xíng",
    "meaning": "được, ổn; đi; hàng, dãy",
    "category": "pho-tu",
    "example": "他一个人去不行",
    "examplePinyin": "Tā yī gè rén qù bú xíng",
    "exampleVi": "Anh ấy đi một mình không được"
  },
  {
    "id": "yct4-trn",
    "hanzi": "突然",
    "pinyin": "tū rán",
    "meaning": "đột nhiên",
    "category": "pho-tu",
    "example": "突然下雨了，我们快跑吧。",
    "examplePinyin": "Tūrán xiàyǔ le, wǒmen kuài pǎo ba.",
    "exampleVi": "Trời mưa đột ngột, chúng ta chạy nhanh đi."
  },
  {
    "id": "yct4-tbi",
    "hanzi": "特别",
    "pinyin": "tè bié",
    "meaning": "đặc biệt",
    "category": "pho-tu",
    "example": "今天特别冷",
    "examplePinyin": "jīn tiān tè bié lěng",
    "exampleVi": "Hôm nay đặc biệt lạnh"
  },
  {
    "id": "yct4-ti",
    "hanzi": "太",
    "pinyin": "tài",
    "meaning": "quá, quá mức, rất, cực kỳ",
    "category": "pho-tu",
    "example": "太好了",
    "examplePinyin": "Tài hǎo le",
    "exampleVi": "Tốt quá, tốt lắm"
  },
  {
    "id": "yct4-mshng",
    "hanzi": "马上",
    "pinyin": "mǎ shàng",
    "meaning": "ngay lập tức, ngay",
    "category": "pho-tu",
    "example": "我马上来",
    "examplePinyin": "Wǒ mǎshàng lái",
    "exampleVi": "Tôi đến ngay"
  },
  {
    "id": "yct4-mhu",
    "hanzi": "马虎",
    "pinyin": "mǎ hu",
    "meaning": "qua loa, cẩu thả, không cẩn thận",
    "category": "pho-tu",
    "example": "他做事很马虎。",
    "examplePinyin": "Tā zuòshì hěn mǎhu.",
    "exampleVi": "Anh ấy làm việc rất hư cấu."
  },
  {
    "id": "yct4-ky",
    "hanzi": "可以",
    "pinyin": "kě yǐ",
    "meaning": "có thể",
    "category": "pho-tu",
    "example": "我可以进去吗",
    "examplePinyin": "wǒ kě yǐ jìn qù ma",
    "exampleVi": "Tôi có thể vào không"
  },
  {
    "id": "yct4-knng",
    "hanzi": "可能",
    "pinyin": "kě néng",
    "meaning": "có thể",
    "category": "pho-tu",
    "example": "明天可能下雨",
    "examplePinyin": "míng tiān kě néng xià yǔ",
    "exampleVi": "Ngày mai có thể mưa"
  },
  {
    "id": "yct4-jngchng",
    "hanzi": "经常",
    "pinyin": "jīng cháng",
    "meaning": "thường xuyên",
    "category": "pho-tu",
    "example": "我经常去图书馆。",
    "examplePinyin": "wǒ jīng cháng qù tú shū guǎn.",
    "exampleVi": "Tôi thường xuyên đi thư viện."
  },
  {
    "id": "yct4-dji",
    "hanzi": "大家",
    "pinyin": "dà jiā",
    "meaning": "mọi người",
    "category": "dai-tu",
    "example": "大家好",
    "examplePinyin": "dà jiā hǎo",
    "exampleVi": "Chào mọi người"
  },
  {
    "id": "yct4-du",
    "hanzi": "都",
    "pinyin": "dōu",
    "meaning": "đều, tất cả, toàn bộ",
    "category": "dai-tu",
    "example": "我们都喜欢中文",
    "examplePinyin": "Wǒmen dōu xǐhuan Zhōngwén",
    "exampleVi": "Chúng tôi đều thích tiếng Trung"
  },
  {
    "id": "yct4-li-lia",
    "hanzi": "俩",
    "pinyin": "liǎ",
    "meaning": "hai người, cả hai, cặp đôi",
    "category": "dai-tu",
    "example": "咱们俩去吃饭吧。",
    "examplePinyin": "Zánmen liǎ qù chīfàn ba.",
    "exampleVi": "Hai mình đi ăn cơm đi."
  },
  {
    "id": "yct4-ling",
    "hanzi": "两",
    "pinyin": "liǎng",
    "meaning": "hai",
    "category": "dai-tu",
    "example": "我有两本书",
    "examplePinyin": "wǒ yǒu liǎng běn shū",
    "exampleVi": "Tôi có hai cuốn sách"
  },
  {
    "id": "yct4-mi",
    "hanzi": "每",
    "pinyin": "měi",
    "meaning": "mỗi; từng; mỗi một",
    "category": "dai-tu",
    "example": "我每天早上都跑步。",
    "examplePinyin": "Wǒ měitiān zǎoshàng dōu pǎobù.",
    "exampleVi": "Tôi đều chạy bộ mỗi sáng."
  },
  {
    "id": "yct4-n-na",
    "hanzi": "那",
    "pinyin": "nà",
    "meaning": "đó",
    "category": "dai-tu",
    "example": "那是谁",
    "examplePinyin": "nà shì shuí",
    "exampleVi": "Đó là ai"
  },
  {
    "id": "yct4-n-ni",
    "hanzi": "你",
    "pinyin": "nǐ",
    "meaning": "bạn, ông/bà/nàng/cậu (đại từ ngôi thứ hai)",
    "category": "dai-tu",
    "example": "你好",
    "examplePinyin": "Nǐ hǎo",
    "exampleVi": "Xin chào / Chào bạn"
  },
  {
    "id": "yct4-nn",
    "hanzi": "您",
    "pinyin": "nín",
    "meaning": "ông, bà, anh, chị (ngôi thứ hai, cách xưng kính trọng)",
    "category": "dai-tu",
    "example": "您好",
    "examplePinyin": "Nín hǎo",
    "exampleVi": "Ngài/Ông/Bà khỏe (xưng hô lịch sự)"
  },
  {
    "id": "yct4-qt",
    "hanzi": "其他",
    "pinyin": "qí tā",
    "meaning": "khác",
    "category": "dai-tu",
    "example": "其他人",
    "examplePinyin": "qí tā rén",
    "exampleVi": "những người khác"
  },
  {
    "id": "yct4-t-ta",
    "hanzi": "他",
    "pinyin": "tā",
    "meaning": "anh ấy, hắn ấy (đại từ ngôi thứ ba nam)",
    "category": "dai-tu",
    "example": "他是我的哥哥",
    "examplePinyin": "Tā shì wǒ de gēge",
    "exampleVi": "Anh ấy là anh trai của tôi"
  },
  {
    "id": "yct4-t-ta-2",
    "hanzi": "她",
    "pinyin": "tā",
    "meaning": "cô ấy, chị ấy, bà ấy (đại từ ngôi thứ ba nữ)",
    "category": "dai-tu",
    "example": "她是我妹妹",
    "examplePinyin": "Tā shì wǒ mèimei",
    "exampleVi": "Cô ấy là em gái của tôi"
  },
  {
    "id": "yct4-t-ta-3",
    "hanzi": "它",
    "pinyin": "tā",
    "meaning": "nó",
    "category": "dai-tu",
    "example": "它是我的狗",
    "examplePinyin": "tā shì wǒ de gǒu",
    "exampleVi": "Nó là con chó của tôi",
    "lessonNumber": 5
  },
  {
    "id": "yct4-w",
    "hanzi": "我",
    "pinyin": "wǒ",
    "meaning": "tôi, tao, mình (đại từ ngôi thứ nhất)",
    "category": "dai-tu",
    "example": "我是中国人",
    "examplePinyin": "Wǒ shì Zhōngguó rén",
    "exampleVi": "Tôi là người Trung Quốc"
  },
  {
    "id": "yct4-wmen",
    "hanzi": "我们",
    "pinyin": "wǒ men",
    "meaning": "chúng tôi, chúng ta",
    "category": "dai-tu",
    "example": "我们是学生。",
    "examplePinyin": "Wǒmen shì xuésheng.",
    "exampleVi": "Chúng tôi là sinh viên."
  },
  {
    "id": "yct4-xi-xie",
    "hanzi": "些",
    "pinyin": "xiē",
    "meaning": "một vài, một chút (lượng từ chỉ số lượng không xác định)",
    "category": "dai-tu",
    "example": "我想吃些水果。",
    "examplePinyin": "Wǒ xiǎng chī xiē shuǐguǒ.",
    "exampleVi": "Tôi muốn ăn một chút trái cây."
  },
  {
    "id": "yct4-zh-zhe",
    "hanzi": "这",
    "pinyin": "zhè",
    "meaning": "này, cái này, đây (đại từ chỉ định gần)",
    "category": "dai-tu",
    "example": "这是我的书",
    "examplePinyin": "Zhè shì wǒ de shū",
    "exampleVi": "Đây là sách của tôi"
  },
  {
    "id": "yct4-zj",
    "hanzi": "自己",
    "pinyin": "zì jǐ",
    "meaning": "bản thân",
    "category": "dai-tu",
    "example": "我自己来",
    "examplePinyin": "wǒ zì jǐ lái",
    "exampleVi": "Tôi tự làm"
  },
  {
    "id": "yct4-bn-ben",
    "hanzi": "本",
    "pinyin": "běn",
    "meaning": "quyển, cuốn (lượng từ cho sách vở); gốc, vốn",
    "category": "dem-tu",
    "example": "一本书",
    "examplePinyin": "yì běn shū",
    "exampleVi": "Một quyển sách"
  },
  {
    "id": "yct4-cng-ceng",
    "hanzi": "层",
    "pinyin": "céng",
    "meaning": "tầng",
    "category": "dem-tu",
    "example": "这栋楼有十层",
    "examplePinyin": "zhè dòng lóu yǒu shí céng",
    "exampleVi": "Tòa nhà này có mười tầng"
  },
  {
    "id": "yct4-c",
    "hanzi": "次",
    "pinyin": "cì",
    "meaning": "lần, thứ tự",
    "category": "dem-tu",
    "example": "第一次",
    "examplePinyin": "Dì yī cì",
    "exampleVi": "Lần thứ nhất",
    "lessonNumber": 9
  },
  {
    "id": "yct4-dun",
    "hanzi": "段",
    "pinyin": "duàn",
    "meaning": "đoạn, khúc; quãng, khoảng; phân đoạn, phần. Dùng làm danh từ chỉ phần chia hoặc làm lượng từ cho vật dài, thời gian.",
    "category": "dem-tu",
    "example": "这一段路很长",
    "examplePinyin": "Zhè yī duàn lù hěn cháng",
    "exampleVi": "Đoạn đường này rất dài"
  },
  {
    "id": "yct4-g",
    "hanzi": "个",
    "pinyin": "gè",
    "meaning": "cái, con, quả (lượng từ phổ biến nhất)",
    "category": "dem-tu",
    "example": "一个人",
    "examplePinyin": "yī gè rén",
    "exampleVi": "Một người"
  },
  {
    "id": "yct4-jin",
    "hanzi": "件",
    "pinyin": "jiàn",
    "meaning": "cái, chiếc",
    "category": "dem-tu",
    "example": "一件衣服",
    "examplePinyin": "yī jiàn yī fu",
    "exampleVi": "Một cái áo",
    "lessonNumber": 11
  },
  {
    "id": "yct4-kui",
    "hanzi": "块",
    "pinyin": "kuài",
    "meaning": "miếng, khối, cục (lượng từ) hoặc đồng nhân dân tệ",
    "category": "dem-tu",
    "example": "一块钱",
    "examplePinyin": "yí kuài qián",
    "exampleVi": "một đồng (tiền)"
  },
  {
    "id": "yct4-yun",
    "hanzi": "元",
    "pinyin": "yuán",
    "meaning": "nhân dân tệ, đồng (tiền)",
    "category": "dem-tu",
    "example": "一元",
    "examplePinyin": "Yī yuán",
    "exampleVi": "Một yuan, một đồng TQ"
  },
  {
    "id": "yct4-zu-zuo",
    "hanzi": "座",
    "pinyin": "zuò",
    "meaning": "tòa, ngọn (lượng từ cho nhà, núi, cầu); chỗ ngồi",
    "category": "dem-tu",
    "example": "一座大山",
    "examplePinyin": "yī zuò dà shān",
    "exampleVi": "Một ngọn núi lớn"
  },
  {
    "id": "yct4-ling-liang",
    "hanzi": "辆",
    "pinyin": "liàng",
    "meaning": "chiếc",
    "category": "dem-tu",
    "example": "一辆车",
    "examplePinyin": "yī liàng chē",
    "exampleVi": "Một chiếc xe"
  },
  {
    "id": "yct4-lu",
    "hanzi": "楼",
    "pinyin": "lóu",
    "meaning": "tòa nhà, tầng",
    "category": "dem-tu",
    "example": "楼房",
    "examplePinyin": "Lóu fáng",
    "exampleVi": "Nhà cao tầng"
  },
  {
    "id": "yct4-shung",
    "hanzi": "双",
    "pinyin": "shuāng",
    "meaning": "đôi; cặp; hai",
    "category": "dem-tu",
    "example": "我买了一双新鞋。",
    "examplePinyin": "Wǒ mǎi le yì shuāng xīn xié.",
    "exampleVi": "Tôi mua một đôi giày mới."
  },
  {
    "id": "yct4-tio",
    "hanzi": "条",
    "pinyin": "tiáo",
    "meaning": "lượng từ cho vật dài (cá, đường, quần); điều, khoản",
    "category": "dem-tu",
    "example": "一条路",
    "examplePinyin": "yī tiáo lù",
    "exampleVi": "Một con đường",
    "lessonNumber": 7
  },
  {
    "id": "yct4-wn-wan-2",
    "hanzi": "碗",
    "pinyin": "wǎn",
    "meaning": "cái bát",
    "category": "dem-tu",
    "example": "给我一碗饭",
    "examplePinyin": "gěi wǒ yī wǎn fàn",
    "exampleVi": "Cho tôi một bát cơm"
  },
  {
    "id": "yct4-wi-wei",
    "hanzi": "位",
    "pinyin": "wèi",
    "meaning": "vị",
    "category": "dem-tu",
    "example": "这五位客人",
    "examplePinyin": "zhè wǔ wèi kè rén",
    "exampleVi": "Năm vị khách này"
  },
  {
    "id": "yct4-xing-xiang-2",
    "hanzi": "响",
    "pinyin": "xiǎng",
    "meaning": "phát ra âm thanh",
    "category": "dem-tu",
    "example": "电话响了。",
    "examplePinyin": "diàn huà xiǎng le.",
    "exampleVi": "Điện thoại reo."
  },
  {
    "id": "yct4-y-ye-2",
    "hanzi": "页",
    "pinyin": "yè",
    "meaning": "trang (sách, giấy)",
    "category": "dem-tu",
    "example": "第一页",
    "examplePinyin": "Dì yī yè",
    "exampleVi": "Trang thứ nhất"
  },
  {
    "id": "yct4-zhng",
    "hanzi": "张",
    "pinyin": "zhāng",
    "meaning": "tờ, tấm, chiếc (lượng từ cho vật phẳng như giấy, bàn, giường); mở, giương ra",
    "category": "dem-tu",
    "example": "我买了一张桌子。",
    "examplePinyin": "Wǒ mǎi le yì zhāng zhuōzi.",
    "exampleVi": "Tôi mua một cái bàn."
  },
  {
    "id": "yct4-zhng-zhong",
    "hanzi": "种",
    "pinyin": "zhǒng",
    "meaning": "loại, giống, chủng loại",
    "category": "dem-tu",
    "example": "这种水果我从来没吃过。",
    "examplePinyin": "Zhè zhǒng shuǐguǒ wǒ cónglái méi chīguo.",
    "exampleVi": "Loại quả này tôi chưa từng ăn."
  },
  {
    "id": "yct4-dngxi",
    "hanzi": "东西",
    "pinyin": "dōng xi",
    "meaning": "đồ đạc, vật",
    "category": "danh-tu",
    "example": "买很多东西",
    "examplePinyin": "Mǎi hěn duō dōngxi",
    "exampleVi": "Mua nhiều đồ"
  },
  {
    "id": "yct4-hzi",
    "hanzi": "盒子",
    "pinyin": "hé zi",
    "meaning": "hộp",
    "category": "danh-tu",
    "example": "把这个盒子给我。",
    "examplePinyin": "Bǎ zhège hézi gěi wǒ.",
    "exampleVi": "Đưa cái hộp này cho tôi."
  },
  {
    "id": "yct4-jio-jiao-2",
    "hanzi": "角",
    "pinyin": "jiǎo",
    "meaning": "góc",
    "category": "danh-tu",
    "example": "桌子有四个角。",
    "examplePinyin": "zhuō zi yǒu sì gè jiǎo.",
    "exampleVi": "Cái bàn có bốn góc."
  },
  {
    "id": "yct4-jzi",
    "hanzi": "句子",
    "pinyin": "jù zi",
    "meaning": "câu",
    "category": "danh-tu",
    "example": "请造一个句子",
    "examplePinyin": "qǐng zào yī gè jù zi",
    "exampleVi": "Vui lòng đặt một câu"
  },
  {
    "id": "yct4-lsh",
    "hanzi": "历史",
    "pinyin": "lì shǐ",
    "meaning": "lịch sử; quá khứ",
    "category": "danh-tu",
    "example": "中国有五千年的历史。",
    "examplePinyin": "Zhōngguó yǒu wǔqiān nián de lìshǐ.",
    "exampleVi": "Trung Quốc có năm nghìn năm lịch sử."
  },
  {
    "id": "yct4-wixin",
    "hanzi": "危险",
    "pinyin": "wēi xiǎn",
    "meaning": "nguy hiểm",
    "category": "danh-tu",
    "example": "这里很危险，不要靠近。",
    "examplePinyin": "zhè li hěn wēi xiǎn, bù yào kào jìn.",
    "exampleVi": "Nơi này rất nguy hiểm, đừng lại gần."
  },
  {
    "id": "yct4-xn",
    "hanzi": "信",
    "pinyin": "xìn",
    "meaning": "thư từ",
    "category": "danh-tu",
    "example": "我收到了一封信",
    "examplePinyin": "wǒ shōu dào le yī fēng xìn",
    "exampleVi": "Tôi đã nhận được một bức thư"
  },
  {
    "id": "yct4-yoqi",
    "hanzi": "要求",
    "pinyin": "yāo qiú",
    "meaning": "yêu cầu",
    "category": "danh-tu",
    "example": "老师要求我们按时交作业",
    "examplePinyin": "lǎo shī yāo qiú wǒ men àn shí jiāo zuò yè",
    "exampleVi": "Thầy giáo yêu cầu chúng ta nộp bài đúng giờ"
  },
  {
    "id": "yct4-zuyng",
    "hanzi": "作用",
    "pinyin": "zuò yòng",
    "meaning": "tác dụng",
    "category": "danh-tu",
    "example": "这个药有很好的作用。",
    "examplePinyin": "zhè ge yào yǒu hěn hǎo de zuò yòng.",
    "exampleVi": "Thuốc này có tác dụng rất tốt."
  },
  {
    "id": "yct4-zhoxingj",
    "hanzi": "照相机",
    "pinyin": "zhào xiàng jī",
    "meaning": "máy ảnh là thiết bị dùng để chụp ảnh, ghi lại hình ảnh vật thể qua ống kính.",
    "category": "danh-tu",
    "example": "我买了一台照相机",
    "examplePinyin": "Wǒ mǎile yī tái zhàoxiàngjī",
    "exampleVi": "Tôi mua một cái máy ảnh"
  },
  {
    "id": "yct4-binhu",
    "hanzi": "变化",
    "pinyin": "biàn huà",
    "meaning": "thay đổi, biến đổi",
    "category": "danh-tu",
    "example": "这几年家乡的变化很大。",
    "examplePinyin": "Zhè jǐ nián jiāxiāng de biànhuà hěn dà.",
    "exampleVi": "Vài năm qua quê hương thay đổi rất lớn."
  },
  {
    "id": "yct4-nqun",
    "hanzi": "安全",
    "pinyin": "ān quán",
    "meaning": "an toàn",
    "category": "danh-tu",
    "example": "请注意安全。",
    "examplePinyin": "qǐng zhù yì ān quán.",
    "exampleVi": "Vui lòng chú ý an toàn."
  },
  {
    "id": "yct4-qinb",
    "hanzi": "铅笔",
    "pinyin": "qiān bǐ",
    "meaning": "bút chì",
    "category": "danh-tu",
    "example": "我需要一支铅笔。",
    "examplePinyin": "Wǒ xūyào yī zhī qiānbǐ.",
    "exampleVi": "Tôi cần một cây bút chì."
  },
  {
    "id": "yct4-shngyn",
    "hanzi": "声音",
    "pinyin": "shēng yīn",
    "meaning": "âm thanh",
    "category": "danh-tu",
    "example": "她的声音很好听。",
    "examplePinyin": "tā de shēng yīn hěn hǎo tīng.",
    "exampleVi": "Giọng nói của cô ấy rất dễ nghe."
  },
  {
    "id": "yct4-shqing",
    "hanzi": "事情",
    "pinyin": "shì qing",
    "meaning": "việc",
    "category": "danh-tu",
    "example": "我有重要的事情要告诉你。",
    "examplePinyin": "wǒ yǒu zhòng yào de shì qing yào gào su nǐ.",
    "exampleVi": "Tôi có việc quan trọng muốn nói cho bạn biết.",
    "lessonNumber": 10
  },
  {
    "id": "yct4-shupng",
    "hanzi": "水平",
    "pinyin": "shuǐ píng",
    "meaning": "mức độ; tiêu chuẩn",
    "category": "danh-tu",
    "example": "英语水平很高",
    "examplePinyin": "yīng yǔ shuǐ píng hěn gāo",
    "exampleVi": "Trình độ tiếng Anh rất cao"
  },
  {
    "id": "yct4-wnhu",
    "hanzi": "文化",
    "pinyin": "wén huà",
    "meaning": "văn hóa; giáo dục, trình độ",
    "category": "danh-tu",
    "example": "中国有五千年的文化。",
    "examplePinyin": "Zhōngguó yǒu wǔqiān nián de wénhuà.",
    "exampleVi": "Trung Quốc có năm nghìn năm văn hóa."
  },
  {
    "id": "yct4-xnfng",
    "hanzi": "信封",
    "pinyin": "xìn fēng",
    "meaning": "phong bì",
    "category": "danh-tu",
    "example": "请把信装进信封里。",
    "examplePinyin": "qǐng bǎ xìn zhuāng jìn xìn fēng lǐ.",
    "exampleVi": "Hãy bỏ thư vào phong bì."
  },
  {
    "id": "yct4-yoshi",
    "hanzi": "钥匙",
    "pinyin": "yào shi",
    "meaning": "chìa khóa",
    "category": "danh-tu",
    "example": "我的钥匙丢了。",
    "examplePinyin": "Wǒ de yàoshi diū le.",
    "exampleVi": "Chìa khóa của tôi bị mất."
  },
  {
    "id": "yct4-zhopin",
    "hanzi": "照片",
    "pinyin": "zhào piàn",
    "meaning": "bức ảnh",
    "category": "danh-tu",
    "example": "这张照片很漂亮",
    "examplePinyin": "zhè zhāng zhào piàn hěn piào liang",
    "exampleVi": "Bức ảnh này rất đẹp"
  },
  {
    "id": "yct4-ch-cha",
    "hanzi": "差",
    "pinyin": "chà",
    "meaning": "kém, thiếu, chưa đủ; chênh lệch",
    "category": "danh-tu",
    "example": "这两个很不一样，差很多",
    "examplePinyin": "Zhè liǎng gè hěn bù yīyàng, chà hěnduō",
    "exampleVi": "Hai cái này rất khác, khác nhiều"
  },
  {
    "id": "yct4-jhu",
    "hanzi": "机会",
    "pinyin": "jī huì",
    "meaning": "cơ hội",
    "category": "danh-tu",
    "example": "这是一个很好的机会",
    "examplePinyin": "zhè shì yī gè hěn hǎo de jī huì",
    "exampleVi": "Đây là một cơ hội rất tốt"
  },
  {
    "id": "yct4-yngxing",
    "hanzi": "影响",
    "pinyin": "yǐng xiǎng",
    "meaning": "ảnh hưởng",
    "category": "danh-tu",
    "example": "对我影响很大",
    "examplePinyin": "duì wǒ yǐng xiǎng hěn dà",
    "exampleVi": "Ảnh hưởng lớn đến tôi"
  },
  {
    "id": "yct4-bi-bai",
    "hanzi": "百",
    "pinyin": "bǎi",
    "meaning": "trăm",
    "category": "so-luong-va-do-luong",
    "example": "一百",
    "examplePinyin": "Yī bǎi",
    "exampleVi": "Một trăm",
    "lessonNumber": 1
  },
  {
    "id": "yct4-bn-ban-2",
    "hanzi": "半",
    "pinyin": "bàn",
    "meaning": "nửa, một nửa",
    "category": "so-luong-va-do-luong",
    "example": "半小时",
    "examplePinyin": "Bàn xiǎo shí",
    "exampleVi": "Nửa giờ, 30 phút",
    "lessonNumber": 2
  },
  {
    "id": "yct4-du-duo",
    "hanzi": "多",
    "pinyin": "duō",
    "meaning": "nhiều",
    "category": "so-luong-va-do-luong",
    "example": "很多人",
    "examplePinyin": "hěn duō rén",
    "exampleVi": "Nhiều người"
  },
  {
    "id": "yct4-gngjn",
    "hanzi": "公斤",
    "pinyin": "gōng jīn",
    "meaning": "kilôgam (kg), cân",
    "category": "so-luong-va-do-luong",
    "example": "一公斤苹果",
    "examplePinyin": "yī gōng jīn píng guǒ",
    "exampleVi": "Một ki-lô-gam táo"
  },
  {
    "id": "yct4-gngl",
    "hanzi": "公里",
    "pinyin": "gōng lǐ",
    "meaning": "kilômét (km), cây số",
    "category": "so-luong-va-do-luong",
    "example": "学校离家五公里",
    "examplePinyin": "xué xiào lí jiā wǔ gōng lǐ",
    "exampleVi": "Trường học cách nhà năm ki-lô-mét"
  },
  {
    "id": "yct4-gu-gou",
    "hanzi": "够",
    "pinyin": "gòu",
    "meaning": "đủ",
    "category": "so-luong-va-do-luong",
    "example": "钱不够",
    "examplePinyin": "qián bù gòu",
    "exampleVi": "Tiền không đủ"
  },
  {
    "id": "yct4-m-mi",
    "hanzi": "米",
    "pinyin": "mǐ",
    "meaning": "gạo; mét",
    "category": "so-luong-va-do-luong",
    "example": "三米长",
    "examplePinyin": "sān mǐ cháng",
    "exampleVi": "Dài ba mét"
  },
  {
    "id": "yct4-qin",
    "hanzi": "千",
    "pinyin": "qiān",
    "meaning": "Ngàn",
    "category": "so-luong-va-do-luong",
    "example": "一千人",
    "examplePinyin": "yī qiān rén",
    "exampleVi": "Một nghìn người",
    "lessonNumber": 1
  },
  {
    "id": "yct4-sho",
    "hanzi": "少",
    "pinyin": "shǎo",
    "meaning": "ít, thiếu, ít hơn",
    "category": "so-luong-va-do-luong",
    "example": "人很少",
    "examplePinyin": "Rén hěn shǎo",
    "exampleVi": "Người rất ít",
    "lessonNumber": 1
  },
  {
    "id": "yct4-wn-wan-3",
    "hanzi": "万",
    "pinyin": "wàn",
    "meaning": "vạn, mười nghìn",
    "category": "so-luong-va-do-luong",
    "example": "一万人",
    "examplePinyin": "yī wàn rén",
    "exampleVi": "mười vạn người"
  },
  {
    "id": "yct4-ygng",
    "hanzi": "一共",
    "pinyin": "yī gòng",
    "meaning": "tổng cộng",
    "category": "so-luong-va-do-luong",
    "example": "一共三个人",
    "examplePinyin": "yī gòng sān gè rén",
    "exampleVi": "Tổng cộng ba người"
  },
  {
    "id": "yct4-yu-yue",
    "hanzi": "越",
    "pinyin": "yuè",
    "meaning": "vượt quá",
    "category": "so-luong-va-do-luong",
    "example": "越来越好",
    "examplePinyin": "yuè lái yuè hǎo",
    "exampleVi": "Càng ngày càng tốt"
  },
  {
    "id": "yct4-lng",
    "hanzi": "零",
    "pinyin": "líng",
    "meaning": "không, con số không",
    "category": "so-luong-va-do-luong",
    "example": "零度",
    "examplePinyin": "líng dù",
    "exampleVi": "không độ",
    "lessonNumber": 1
  },
  {
    "id": "yct4-y-yi",
    "hanzi": "一",
    "pinyin": "yī",
    "meaning": "một (số)",
    "category": "so-luong-va-do-luong",
    "example": "我有一个妹妹",
    "examplePinyin": "Wǒ yǒu yī gè mèimei",
    "exampleVi": "Tôi có một người em gái"
  },
  {
    "id": "yct4-r",
    "hanzi": "二",
    "pinyin": "èr",
    "meaning": "hai (số)",
    "category": "so-luong-va-do-luong",
    "example": "二年级",
    "examplePinyin": "èr niánjí",
    "exampleVi": "Lớp hai"
  },
  {
    "id": "yct4-sn",
    "hanzi": "三",
    "pinyin": "sān",
    "meaning": "ba (số)",
    "category": "so-luong-va-do-luong",
    "example": "我有三个哥哥",
    "examplePinyin": "Wǒ yǒu sān gè gēge",
    "exampleVi": "Tôi có ba người anh trai"
  },
  {
    "id": "yct4-s",
    "hanzi": "四",
    "pinyin": "sì",
    "meaning": "bốn (số)",
    "category": "so-luong-va-do-luong",
    "example": "四个人",
    "examplePinyin": "sì gè rén",
    "exampleVi": "Bốn người"
  },
  {
    "id": "yct4-w-wu",
    "hanzi": "五",
    "pinyin": "wǔ",
    "meaning": "năm (số)",
    "category": "so-luong-va-do-luong",
    "example": "五个人",
    "examplePinyin": "wǔ gè rén",
    "exampleVi": "Năm người"
  },
  {
    "id": "yct4-li-liu",
    "hanzi": "六",
    "pinyin": "liù",
    "meaning": "sáu (số)",
    "category": "so-luong-va-do-luong",
    "example": "六个苹果",
    "examplePinyin": "liù gè píngguǒ",
    "exampleVi": "Sáu quả táo"
  },
  {
    "id": "yct4-q-qi-2",
    "hanzi": "七",
    "pinyin": "qī",
    "meaning": "bảy (số)",
    "category": "so-luong-va-do-luong",
    "example": "这家书店每个星期七天都正常营业。",
    "examplePinyin": "zhè jiā shū diàn měi gè xīng qī qī tiān dōu zhèng cháng yíng yè.",
    "exampleVi": "Nhà sách này mở cửa hoạt động bình thường cả bảy ngày mỗi tuần."
  },
  {
    "id": "yct4-b-ba",
    "hanzi": "八",
    "pinyin": "bā",
    "meaning": "tám (số)",
    "category": "so-luong-va-do-luong",
    "example": "八个人",
    "examplePinyin": "bā gè rén",
    "exampleVi": "Tám người"
  },
  {
    "id": "yct4-ji-jiu-2",
    "hanzi": "九",
    "pinyin": "jiǔ",
    "meaning": "chín (số)",
    "category": "so-luong-va-do-luong",
    "example": "九点钟",
    "examplePinyin": "jiǔ diǎn zhōng",
    "exampleVi": "Chín giờ"
  },
  {
    "id": "yct4-sh-shi-3",
    "hanzi": "十",
    "pinyin": "shí",
    "meaning": "mười (số)",
    "category": "so-luong-va-do-luong",
    "example": "我十岁",
    "examplePinyin": "Wǒ shí suì",
    "exampleVi": "Tôi mười tuổi"
  },
  {
    "id": "yct4-bifng",
    "hanzi": "北方",
    "pinyin": "běi fāng",
    "meaning": "phía Bắc",
    "category": "dia-ly",
    "example": "北方很冷",
    "examplePinyin": "běi fāng hěn lěng",
    "exampleVi": "Phía Bắc rất lạnh"
  },
  {
    "id": "yct4-dt",
    "hanzi": "地图",
    "pinyin": "dì tú",
    "meaning": "bản đồ",
    "category": "dia-ly",
    "example": "我需要一张地图",
    "examplePinyin": "Wǒ xū yào yī zhāng dì tú",
    "exampleVi": "Tôi cần một bản đồ"
  },
  {
    "id": "yct4-guji",
    "hanzi": "国家",
    "pinyin": "guó jiā",
    "meaning": "quốc gia, nhà nước",
    "category": "dia-ly",
    "example": "我爱我的国家",
    "examplePinyin": "Wǒ ài wǒ de guójiā",
    "exampleVi": "Tôi yêu đất nước tôi"
  },
  {
    "id": "yct4-shnghi",
    "hanzi": "上海",
    "pinyin": "Shàng hǎi",
    "meaning": "Thượng Hải",
    "category": "dia-ly",
    "example": "上海是中国的经济中心。",
    "examplePinyin": "Shànghǎi shì Zhōngguó de jīngjì zhōngxīn.",
    "exampleVi": "Thượng Hải là trung tâm kinh tế của Trung Quốc."
  },
  {
    "id": "yct4-dhi",
    "hanzi": "大海",
    "pinyin": "dà hǎi",
    "meaning": "biển, đại dương",
    "category": "dia-ly",
    "example": "我爱大海",
    "examplePinyin": "wǒ ài dà hǎi",
    "exampleVi": "Tôi yêu biển cả"
  },
  {
    "id": "yct4-dng-dong-3",
    "hanzi": "东",
    "pinyin": "dōng",
    "meaning": "phía đông",
    "category": "dia-ly",
    "example": "东边",
    "examplePinyin": "dōngbiān",
    "exampleVi": "phía đông, bên phía đông"
  },
  {
    "id": "yct4-nn-nan",
    "hanzi": "南",
    "pinyin": "nán",
    "meaning": "phía nam",
    "category": "dia-ly",
    "example": "南方",
    "examplePinyin": "Nánfāng",
    "exampleVi": "phương nam, miền nam"
  },
  {
    "id": "yct4-x",
    "hanzi": "西",
    "pinyin": "xī",
    "meaning": "tây; phương tây; phía tây",
    "category": "dia-ly",
    "example": "向西走",
    "examplePinyin": "Xiàng xī zǒu",
    "exampleVi": "Đi về phía tây"
  },
  {
    "id": "yct4-shji-shijie",
    "hanzi": "世界",
    "pinyin": "shì jiè",
    "meaning": "thế giới",
    "category": "dia-ly",
    "example": "我想去世界各地旅游。",
    "examplePinyin": "Wǒ xiǎng qù shìjiè gèdì lǚyóu.",
    "exampleVi": "Tôi muốn du lịch khắp thế giới."
  },
  {
    "id": "yct4-d-di",
    "hanzi": "地",
    "pinyin": "dì",
    "meaning": "đất, mặt đất; (trợ từ) chỉ trạng thái/phương thức",
    "category": "dia-ly",
    "example": "我在地上",
    "examplePinyin": "Wǒ zài dì shàng",
    "exampleVi": "Tôi ở trên mặt đất"
  },
  {
    "id": "yct4-i",
    "hanzi": "矮",
    "pinyin": "ǎi",
    "meaning": "thấp",
    "category": "tinh-tu",
    "example": "我弟弟比我矮。",
    "examplePinyin": "wǒ dì di bǐ wǒ ǎi.",
    "exampleVi": "Em trai tôi thấp hơn tôi."
  },
  {
    "id": "yct4-njng",
    "hanzi": "安静",
    "pinyin": "ān jìng",
    "meaning": "yên tĩnh",
    "category": "tinh-tu",
    "example": "图书馆里很安静。",
    "examplePinyin": "tú shū guǎn lǐ hěn ān jìng.",
    "exampleVi": "Trong thư viện rất yên tĩnh."
  },
  {
    "id": "yct4-pinyi",
    "hanzi": "便宜",
    "pinyin": "pián yi",
    "meaning": "rẻ",
    "category": "tinh-tu",
    "example": "这家店的东西很便宜。",
    "examplePinyin": "zhè jiā diàn de dōng xi hěn pián yi.",
    "exampleVi": "Đồ vật ở cửa hàng này rất rẻ."
  },
  {
    "id": "yct4-zhng-zhang",
    "hanzi": "长",
    "pinyin": "zhǎng",
    "meaning": "lớn lên, mọc, phát triển",
    "category": "dong-tu-toi",
    "example": "他的头发很长",
    "examplePinyin": "tā de tóu fa hěn cháng",
    "exampleVi": "Tóc anh ấy rất dài",
    "lessonNumber": 11
  },
  {
    "id": "yct4-d-da",
    "hanzi": "大",
    "pinyin": "dà",
    "meaning": "to, lớn (tính từ)",
    "category": "tinh-tu",
    "example": "很大",
    "examplePinyin": "hěn dà",
    "exampleVi": "Rất to"
  },
  {
    "id": "yct4-d-di-2",
    "hanzi": "低",
    "pinyin": "dī",
    "meaning": "thấp",
    "category": "tinh-tu",
    "example": "气温很低",
    "examplePinyin": "qì wēn hěn dī",
    "exampleVi": "Nhiệt độ rất thấp"
  },
  {
    "id": "yct4-dy",
    "hanzi": "第一",
    "pinyin": "dì yī",
    "meaning": "đầu tiên; thứ nhất",
    "category": "tinh-tu",
    "example": "我是第一个到的。",
    "examplePinyin": "Wǒ shì dì-yī gè dào de.",
    "exampleVi": "Tôi là người đầu tiên đến."
  },
  {
    "id": "yct4-dun-duan",
    "hanzi": "短",
    "pinyin": "duǎn",
    "meaning": "ngắn",
    "category": "tinh-tu",
    "example": "时间太短了",
    "examplePinyin": "shí jiān tài duǎn le",
    "exampleVi": "Thời gian quá ngắn"
  },
  {
    "id": "yct4-fngbin",
    "hanzi": "方便",
    "pinyin": "fāng biàn",
    "meaning": "thuận tiện",
    "category": "tinh-tu",
    "example": "很方便",
    "examplePinyin": "hěn fāng biàn",
    "exampleVi": "Rất thuận tiện"
  },
  {
    "id": "yct4-gnjng",
    "hanzi": "干净",
    "pinyin": "gān jìng",
    "meaning": "sạch sẽ",
    "category": "tinh-tu",
    "example": "这个房间很干净。",
    "examplePinyin": "Zhège fángjiān hěn gānjìng.",
    "exampleVi": "Căn phòng này rất sạch sẽ."
  },
  {
    "id": "yct4-yumng",
    "hanzi": "有名",
    "pinyin": "yǒu míng",
    "meaning": "nổi tiếng",
    "category": "tinh-tu",
    "example": "北京烤鸭很有名。",
    "examplePinyin": "Běijīng kǎoyā hěn yǒumíng.",
    "exampleVi": "Vịt quay Bắc Kinh rất nổi tiếng."
  },
  {
    "id": "yct4-zhngyo",
    "hanzi": "重要",
    "pinyin": "zhòng yào",
    "meaning": "quan trọng",
    "category": "tinh-tu",
    "example": "这件事很重要",
    "examplePinyin": "Zhè jiàn shì hěn zhòngyào",
    "exampleVi": "Việc này rất quan trọng"
  },
  {
    "id": "yct4-go",
    "hanzi": "高",
    "pinyin": "gāo",
    "meaning": "cao (tính từ)",
    "category": "tinh-tu",
    "example": "很高",
    "examplePinyin": "hěn gāo",
    "exampleVi": "Rất cao"
  },
  {
    "id": "yct4-gu-gui",
    "hanzi": "贵",
    "pinyin": "guì",
    "meaning": "đắt, quý",
    "category": "tinh-tu",
    "example": "很贵",
    "examplePinyin": "Hěn guì",
    "exampleVi": "Rất đắt"
  },
  {
    "id": "yct4-ho",
    "hanzi": "好",
    "pinyin": "hǎo",
    "meaning": "tốt",
    "category": "tinh-tu",
    "example": "这是好书",
    "examplePinyin": "zhè shì hǎo shū",
    "exampleVi": "Đây là quyển sách tốt"
  },
  {
    "id": "yct4-hsh",
    "hanzi": "合适",
    "pinyin": "hé shì",
    "meaning": "phù hợp",
    "category": "tinh-tu",
    "example": "这件衣服很合适",
    "examplePinyin": "zhè jiàn yī fu hěn hé shì",
    "exampleVi": "Cái quần áo này rất vừa"
  },
  {
    "id": "yct4-jindn",
    "hanzi": "简单",
    "pinyin": "jiǎn dān",
    "meaning": "đơn giản, giản dị; dễ dàng",
    "category": "tinh-tu",
    "example": "这个问题很简单。",
    "examplePinyin": "zhè ge wèn tí hěn jiǎn dān.",
    "exampleVi": "Vấn đề này rất đơn giản."
  },
  {
    "id": "yct4-ji-jiu-3",
    "hanzi": "旧",
    "pinyin": "jiù",
    "meaning": "cũ; cũ kỹ; đã qua",
    "category": "tinh-tu",
    "example": "这件衣服太旧了，我买件新的。",
    "examplePinyin": "Zhè jiàn yīfu tài jiù le, wǒ mǎi jiàn xīn de.",
    "exampleVi": "Cái áo này quá cũ rồi, tôi mua cái mới."
  },
  {
    "id": "yct4-ki",
    "hanzi": "可爱",
    "pinyin": "kě'ài",
    "meaning": "đáng yêu",
    "category": "tinh-tu",
    "example": "你的妹妹真可爱",
    "examplePinyin": "nǐ de mèi mei zhēn kě ài",
    "exampleVi": "Em gái cậu thật đáng yêu",
    "lessonNumber": 11
  },
  {
    "id": "yct4-kui-kuai",
    "hanzi": "快",
    "pinyin": "kuài",
    "meaning": "nhanh, nhanh",
    "category": "tinh-tu",
    "example": "请快一点",
    "examplePinyin": "Qǐng kuài yīdiǎn",
    "exampleVi": "Xin nhanh một chút"
  },
  {
    "id": "yct4-lo",
    "hanzi": "老",
    "pinyin": "lǎo",
    "meaning": "già",
    "category": "tinh-tu",
    "example": "他老了",
    "examplePinyin": "tā lǎo le",
    "exampleVi": "Ông ấy đã già"
  },
  {
    "id": "yct4-lhai",
    "hanzi": "厉害",
    "pinyin": "lì hai",
    "meaning": "ngầu, lợi hại, ghê gớm",
    "category": "tinh-tu",
    "example": "他真厉害，什么都会。",
    "examplePinyin": "Tā zhēn lìhai, shénme dōu huì.",
    "exampleVi": "Anh ấy thật lợi hại, gì cũng biết."
  },
  {
    "id": "yct4-mn",
    "hanzi": "慢",
    "pinyin": "màn",
    "meaning": "chậm",
    "category": "tinh-tu",
    "example": "慢慢走",
    "examplePinyin": "Màn màn zǒu",
    "exampleVi": "Đi chậm rãi",
    "lessonNumber": 8
  },
  {
    "id": "yct4-zhyo-zhuyao",
    "hanzi": "主要",
    "pinyin": "zhǔ yào",
    "meaning": "chính",
    "category": "tinh-tu",
    "example": "这是主要原因",
    "examplePinyin": "zhè shì zhǔ yào yuán yīn",
    "exampleVi": "Đây là nguyên nhân chính"
  },
  {
    "id": "yct4-nn-nan-2",
    "hanzi": "难",
    "pinyin": "nán",
    "meaning": "khó, gian nan",
    "category": "tinh-tu",
    "example": "很难",
    "examplePinyin": "Hěn nán",
    "exampleVi": "Rất khó",
    "lessonNumber": 2
  },
  {
    "id": "yct4-qgui",
    "hanzi": "奇怪",
    "pinyin": "qí guài",
    "meaning": "lạ thường, kỳ lạ",
    "category": "tinh-tu",
    "example": "这件事情很奇怪。",
    "examplePinyin": "Zhè jiàn shìqíng hěn qíguài.",
    "exampleVi": "Việc này rất lạ thường."
  },
  {
    "id": "yct4-qngchu",
    "hanzi": "清楚",
    "pinyin": "qīng chu",
    "meaning": "thanh sở, rõ ràng",
    "category": "tinh-tu",
    "example": "说清楚",
    "examplePinyin": "shuō qīng chu",
    "exampleVi": "Nói cho rõ ràng"
  },
  {
    "id": "yct4-rngy",
    "hanzi": "容易",
    "pinyin": "róng yì",
    "meaning": "dễ, dễ dàng; dễ bị",
    "category": "tinh-tu",
    "example": "这个问题很容易回答。",
    "examplePinyin": "zhè ge wèn tí hěn róng yì huí dá.",
    "exampleVi": "Câu hỏi này rất dễ trả lời."
  },
  {
    "id": "yct4-shubulio",
    "hanzi": "受不了",
    "pinyin": "shòu bu liǎo",
    "meaning": "không chịu nổi, không chịu được, quá sức",
    "category": "tinh-tu",
    "example": "我受不了这么热。",
    "examplePinyin": "Wǒ shòubùliǎo zhème rè.",
    "exampleVi": "Tôi không chịu nổi nóng như thế này."
  },
  {
    "id": "yct4-xingtng",
    "hanzi": "相同",
    "pinyin": "xiāng tóng",
    "meaning": "giống nhau",
    "category": "tinh-tu",
    "example": "我们的意见相同",
    "examplePinyin": "wǒ men de yì jiàn xiāng tóng",
    "exampleVi": "Ý kiến của chúng ta giống nhau"
  },
  {
    "id": "yct4-xio",
    "hanzi": "小",
    "pinyin": "xiǎo",
    "meaning": "nhỏ",
    "category": "tinh-tu",
    "example": "这是一个小问题",
    "examplePinyin": "zhè shì yī gè xiǎo wèn tí",
    "exampleVi": "Đây là một vấn đề nhỏ"
  },
  {
    "id": "yct4-xn-xin",
    "hanzi": "新",
    "pinyin": "xīn",
    "meaning": "mới",
    "category": "tinh-tu",
    "example": "新朋友",
    "examplePinyin": "Xīn péng yǒu",
    "exampleVi": "Bạn mới"
  },
  {
    "id": "yct4-xnxin",
    "hanzi": "新鲜",
    "pinyin": "xīn xiān",
    "meaning": "tươi",
    "category": "tinh-tu",
    "example": "这些苹果很新鲜。",
    "examplePinyin": "zhè xiē píng guǒ hěn xīn xiān.",
    "exampleVi": "Những quả táo này rất tươi."
  },
  {
    "id": "yct4-yun-yuan",
    "hanzi": "圆",
    "pinyin": "yuán",
    "meaning": "tròn, hình tròn",
    "category": "tinh-tu",
    "example": "桌子是圆的",
    "examplePinyin": "Zhuōzi shì yuán de",
    "exampleVi": "Cái bàn hình tròn"
  },
  {
    "id": "yct4-bdn",
    "hanzi": "不但",
    "pinyin": "bù dàn",
    "meaning": "không chỉ",
    "category": "thu-tu-trinh-bay",
    "example": "不但聪明，而且努力",
    "examplePinyin": "bù dàn cōng ming, ér qiě nǔ lì",
    "exampleVi": "Không chỉ thông minh mà còn chăm chỉ"
  },
  {
    "id": "yct4-chle",
    "hanzi": "除了",
    "pinyin": "chú le",
    "meaning": "ngoài ra, trừ ra",
    "category": "thu-tu-trinh-bay",
    "example": "除了中文，我还会说英文。",
    "examplePinyin": "Chúle Zhōngwén, wǒ hái huì shuō Yīngwén.",
    "exampleVi": "Ngoài tiếng Trung, tôi còn biết nói tiếng Anh."
  },
  {
    "id": "yct4-dnsh",
    "hanzi": "但是",
    "pinyin": "dàn shì",
    "meaning": "nhưng",
    "category": "thu-tu-trinh-bay",
    "example": "我想去，但是没时间",
    "examplePinyin": "wǒ xiǎng qù, dàn shì méi shí jiān",
    "exampleVi": "Tôi muốn đi, nhưng không có thời gian"
  },
  {
    "id": "yct4-dngrn",
    "hanzi": "当然",
    "pinyin": "dāng rán",
    "meaning": "tất nhiên, đương nhiên",
    "category": "thu-tu-trinh-bay",
    "example": "你当然可以参加这个活动。",
    "examplePinyin": "Nǐ dāngrán kěyǐ cānjiā zhège huódòng.",
    "exampleVi": "Bạn tất nhiên có thể tham gia hoạt động này."
  },
  {
    "id": "yct4-rqi",
    "hanzi": "而且",
    "pinyin": "ér qiě",
    "meaning": "ngoài ra",
    "category": "thu-tu-trinh-bay",
    "example": "这件衣服便宜，而且很好看",
    "examplePinyin": "zhè jiàn yī fu pián yi, ér qiě hěn hǎo kàn",
    "exampleVi": "Cái áo này rẻ, hơn nữa lại rất đẹp"
  },
  {
    "id": "yct4-huzh",
    "hanzi": "或者",
    "pinyin": "huò zhě",
    "meaning": "hoặc",
    "category": "thu-tu-trinh-bay",
    "example": "你可以喝茶或者咖啡",
    "examplePinyin": "nǐ kě yǐ hē chá huò zhě kā fēi",
    "exampleVi": "Bạn có thể uống trà hoặc cà phê"
  },
  {
    "id": "yct4-xin",
    "hanzi": "先",
    "pinyin": "xiān",
    "meaning": "trước, trước tiên",
    "category": "thu-tu-trinh-bay",
    "example": "我先去",
    "examplePinyin": "Wǒ xiān qù",
    "exampleVi": "Tôi đi trước"
  },
  {
    "id": "yct4-ynwi",
    "hanzi": "因为",
    "pinyin": "yīn wèi",
    "meaning": "bởi vì",
    "category": "thu-tu-trinh-bay",
    "example": "因为生病，所以没来上班",
    "examplePinyin": "yīn wèi shēng bìng, suǒ yǐ méi lái shàng bān",
    "exampleVi": "Vì ốm nên không đến làm việc"
  },
  {
    "id": "yct4-lngwi",
    "hanzi": "另外",
    "pinyin": "lìng wài",
    "meaning": "ngoài ra; thêm nữa; riêng khác",
    "category": "thu-tu-trinh-bay",
    "example": "另外，我还有一个问题。",
    "examplePinyin": "Lìngwài, wǒ hái yǒu yí gè wèntí.",
    "exampleVi": "Ngoài ra, tôi còn có một câu hỏi nữa."
  },
  {
    "id": "yct4-qsh",
    "hanzi": "其实",
    "pinyin": "qí shí",
    "meaning": "kỳ thực; thực ra; trên thực tế",
    "category": "thu-tu-trinh-bay",
    "example": "其实我不同意你的看法。",
    "examplePinyin": "qí shí wǒ bù tóng yì nǐ de kàn fǎ.",
    "exampleVi": "Thực ra tôi không đồng ý với quan điểm của bạn."
  },
  {
    "id": "yct4-rnhu",
    "hanzi": "然后",
    "pinyin": "rán hòu",
    "meaning": "sau đó",
    "category": "thu-tu-trinh-bay",
    "example": "先吃饭，然后走",
    "examplePinyin": "xiān chī fàn, rán hòu zǒu",
    "exampleVi": "Ăn cơm trước, sau đó đi"
  },
  {
    "id": "yct4-rgu",
    "hanzi": "如果",
    "pinyin": "rú guǒ",
    "meaning": "nếu",
    "category": "thu-tu-trinh-bay",
    "example": "如果明天不下雨，我们就去",
    "examplePinyin": "rú guǒ míng tiān bù xià yǔ, wǒ men jiù qù",
    "exampleVi": "Nếu mai không mưa, chúng ta sẽ đi"
  },
  {
    "id": "yct4-surn",
    "hanzi": "虽然",
    "pinyin": "suī rán",
    "meaning": "mặc dù",
    "category": "thu-tu-trinh-bay",
    "example": "虽然下雨，但还是来了",
    "examplePinyin": "suī rán xià yǔ, dàn hái shi lái le",
    "exampleVi": "Mặc dù mưa, nhưng vẫn đến"
  },
  {
    "id": "yct4-ybin",
    "hanzi": "一边",
    "pinyin": "yī biān",
    "meaning": "một bên; một phía; vừa... vừa... (làm đồng thời hai việc)",
    "category": "thu-tu-trinh-bay",
    "example": "请坐在一边",
    "examplePinyin": "Qǐng zuò zài yībiān",
    "exampleVi": "Mời ngồi ở một bên"
  },
  {
    "id": "yct4-zhngy",
    "hanzi": "终于",
    "pinyin": "zhōng yú",
    "meaning": "cuối cùng, rốt cuộc",
    "category": "thu-tu-trinh-bay",
    "example": "我们终于找到了答案。",
    "examplePinyin": "Wǒmen zhōngyú zhǎodào le dá'àn.",
    "exampleVi": "Chúng tôi cuối cùng cũng đã tìm ra câu trả lời."
  },
  {
    "id": "yct4-suy",
    "hanzi": "所以",
    "pinyin": "suǒ yǐ",
    "meaning": "vì vậy",
    "category": "thu-tu-trinh-bay",
    "example": "因为下雨，所以没去",
    "examplePinyin": "yīn wèi xià yǔ, suǒ yǐ méi qù",
    "exampleVi": "Vì trời mưa nên không đi"
  },
  {
    "id": "yct4-chnshn",
    "hanzi": "衬衫",
    "pinyin": "chèn shān",
    "meaning": "áo sơ mi",
    "category": "quan-ao-va-phu-kien",
    "example": "他穿着一件白衬衫。",
    "examplePinyin": "tā chuān zhe yī jiàn bái chèn shān.",
    "exampleVi": "Anh ấy mặc một chiếc áo sơ mi trắng."
  },
  {
    "id": "yct4-kzi",
    "hanzi": "裤子",
    "pinyin": "kù zi",
    "meaning": "quần",
    "category": "quan-ao-va-phu-kien",
    "example": "这条裤子很合适",
    "examplePinyin": "zhè tiáo kù zi hěn hé shì",
    "exampleVi": "Cái quần này rất vừa",
    "lessonNumber": 11
  },
  {
    "id": "yct4-mozi",
    "hanzi": "帽子",
    "pinyin": "mào zi",
    "meaning": "mũ",
    "category": "quan-ao-va-phu-kien",
    "example": "请戴上帽子，外面很冷。",
    "examplePinyin": "Qǐng dài shàng màozi, wàimiàn hěn lěng.",
    "exampleVi": "Hãy đội mũ lên, bên ngoài rất lạnh."
  },
  {
    "id": "yct4-qnzi",
    "hanzi": "裙子",
    "pinyin": "qún zi",
    "meaning": "váy (váy phụ nữ)",
    "category": "quan-ao-va-phu-kien",
    "example": "她今天穿了一条红裙子。",
    "examplePinyin": "tā jīn tiān chuān le yī tiáo hóng qún zi.",
    "exampleVi": "Hôm nay cô ấy mặc một chiếc váy đỏ.",
    "lessonNumber": 11
  },
  {
    "id": "yct4-sn-san",
    "hanzi": "伞",
    "pinyin": "sǎn",
    "meaning": "cái ô",
    "category": "quan-ao-va-phu-kien",
    "example": "外面下雨了，别忘了带伞。",
    "examplePinyin": "wài miàn xià yǔ le, bié wàng le dài sǎn.",
    "exampleVi": "Bên ngoài mưa rồi, đừng quên mang ô."
  },
  {
    "id": "yct4-shubio",
    "hanzi": "手表",
    "pinyin": "shǒu biǎo",
    "meaning": "đồng hồ đeo tay",
    "category": "quan-ao-va-phu-kien",
    "example": "我有一块新手表",
    "examplePinyin": "wǒ yǒu yī kuài xīn shǒu biǎo",
    "exampleVi": "Tôi có một chiếc đồng hồ đeo tay mới"
  },
  {
    "id": "yct4-xi-xie-2",
    "hanzi": "鞋",
    "pinyin": "xié",
    "meaning": "giày",
    "category": "quan-ao-va-phu-kien",
    "example": "我买了一双新鞋",
    "examplePinyin": "wǒ mǎi le yī shuāng xīn xié",
    "exampleVi": "Tôi mua một đôi giày mới"
  },
  {
    "id": "yct4-ynjng",
    "hanzi": "眼镜",
    "pinyin": "yǎn jìng",
    "meaning": "kính (mắt)",
    "category": "quan-ao-va-phu-kien",
    "example": "我的眼镜找不到了。",
    "examplePinyin": "wǒ de yǎn jìng zhǎo bu dào le.",
    "exampleVi": "Tôi không tìm thấy kính của mình nữa."
  },
  {
    "id": "yct4-hi-hei",
    "hanzi": "黑",
    "pinyin": "hēi",
    "meaning": "đen",
    "category": "quan-ao-va-phu-kien",
    "example": "他的头发是黑色的",
    "examplePinyin": "tā de tóu fa shì hēi sè de",
    "exampleVi": "Tóc anh ấy màu đen",
    "lessonNumber": 11
  },
  {
    "id": "yct4-bi-bai-2",
    "hanzi": "白",
    "pinyin": "bái",
    "meaning": "trắng",
    "category": "quan-ao-va-phu-kien",
    "example": "白天",
    "examplePinyin": "Bái tiān",
    "exampleVi": "Ban ngày",
    "lessonNumber": 11
  },
  {
    "id": "yct4-hng",
    "hanzi": "红",
    "pinyin": "hóng",
    "meaning": "màu đỏ",
    "category": "quan-ao-va-phu-kien",
    "example": "我喜欢红色",
    "examplePinyin": "wǒ xǐ huan hóng sè",
    "exampleVi": "Tôi thích màu đỏ"
  },
  {
    "id": "yct4-hung",
    "hanzi": "黄",
    "pinyin": "huáng",
    "meaning": "vàng (màu)",
    "category": "quan-ao-va-phu-kien",
    "example": "这是黄色的",
    "examplePinyin": "zhè shì huáng sè de",
    "exampleVi": "Đây là màu vàng"
  },
  {
    "id": "yct4-ln",
    "hanzi": "蓝",
    "pinyin": "lán",
    "meaning": "xanh da trời",
    "category": "quan-ao-va-phu-kien",
    "example": "天空是蓝色的",
    "examplePinyin": "tiān kōng shì lán sè de",
    "exampleVi": "Bầu trời màu xanh",
    "lessonNumber": 8
  },
  {
    "id": "yct4-l-lv",
    "hanzi": "绿",
    "pinyin": "lǜ",
    "meaning": "màu xanh lá",
    "category": "quan-ao-va-phu-kien",
    "example": "树叶是绿色的",
    "examplePinyin": "shù yè shì lǜ sè de",
    "exampleVi": "Lá cây có màu xanh"
  },
  {
    "id": "yct4-yns",
    "hanzi": "颜色",
    "pinyin": "yán sè",
    "meaning": "màu sắc",
    "category": "quan-ao-va-phu-kien",
    "example": "这衣服颜色很好看",
    "examplePinyin": "zhè yī fu yán sè hěn hǎo kàn",
    "exampleVi": "Cái áo này màu đẹp"
  },
  {
    "id": "yct4-ysn",
    "hanzi": "雨伞",
    "pinyin": "yǔ sǎn",
    "meaning": "cái ô, ô",
    "category": "quan-ao-va-phu-kien",
    "example": "我带雨伞",
    "examplePinyin": "Wǒ dài yǔ sǎn",
    "exampleVi": "Tôi mang theo ô",
    "lessonNumber": 8
  },
  {
    "id": "yct4-krn",
    "hanzi": "客人",
    "pinyin": "kè rén",
    "meaning": "khách hàng",
    "category": "mo-ta-con-nguoi",
    "example": "店里有很多客人",
    "examplePinyin": "diàn lǐ yǒu hěn duō kè rén",
    "exampleVi": "Tiệm có rất nhiều khách"
  },
  {
    "id": "yct4-lnj",
    "hanzi": "邻居",
    "pinyin": "lín jū",
    "meaning": "hàng xóm",
    "category": "mo-ta-con-nguoi",
    "example": "我的邻居很友好。",
    "examplePinyin": "Wǒ de línjū hěn yǒuhǎo.",
    "exampleVi": "Hàng xóm của tôi rất thân thiện."
  },
  {
    "id": "yct4-ninqng",
    "hanzi": "年轻",
    "pinyin": "nián qīng",
    "meaning": "trẻ",
    "category": "mo-ta-con-nguoi",
    "example": "她很年轻",
    "examplePinyin": "tā hěn nián qīng",
    "exampleVi": "Cô ấy rất trẻ"
  },
  {
    "id": "yct4-n-nv",
    "hanzi": "女",
    "pinyin": "nǚ",
    "meaning": "phụ nữ, con gái",
    "category": "mo-ta-con-nguoi",
    "example": "她是女学生",
    "examplePinyin": "Tā shì nǚ xuéshēng",
    "exampleVi": "Cô ấy là học sinh nữ"
  },
  {
    "id": "yct4-shnghu",
    "hanzi": "生活",
    "pinyin": "shēng huó",
    "meaning": "cuộc sống",
    "category": "mo-ta-con-nguoi",
    "example": "我们的生活越来越好",
    "examplePinyin": "wǒ men de shēng huó yuè lái yuè hǎo",
    "exampleVi": "Cuộc sống của chúng tôi ngày càng tốt đẹp hơn"
  },
  {
    "id": "yct4-lmo",
    "hanzi": "礼貌",
    "pinyin": "lǐ mào",
    "meaning": "lịch sự; phép lịch sự",
    "category": "mo-ta-con-nguoi",
    "example": "说话要客气，这是一种礼貌。",
    "examplePinyin": "shuō huà yào kè qi, zhè shì yì zhǒng lǐ mào.",
    "exampleVi": "Nói chuyện phải khách sáo, đây là một kiểu lịch sự."
  },
  {
    "id": "yct4-zhnggurn",
    "hanzi": "中国人",
    "pinyin": "zhōng guó rén",
    "meaning": "Người Trung Quốc, người nước Trung Hoa",
    "category": "mo-ta-con-nguoi",
    "example": "他是中国人。",
    "examplePinyin": "Tā shì Zhōngguórén.",
    "exampleVi": "Anh ấy là người Trung Quốc."
  },
  {
    "id": "yct4-birn",
    "hanzi": "别人",
    "pinyin": "bié rén",
    "meaning": "người khác, người ngoài",
    "category": "mo-ta-con-nguoi",
    "example": "不要嘲笑别人",
    "examplePinyin": "Bú yào cháo xiào bié rén",
    "exampleVi": "Đừng cười chê người khác"
  },
  {
    "id": "yct4-cngming",
    "hanzi": "聪明",
    "pinyin": "cōng ming",
    "meaning": "thông minh - có trí tuệ tốt, hiểu nhanh, học giỏi.",
    "category": "mo-ta-con-nguoi",
    "example": "他很聪明",
    "examplePinyin": "Tā hěn cōngmíng",
    "exampleVi": "Anh ấy rất thông minh"
  },
  {
    "id": "yct4-png",
    "hanzi": "胖",
    "pinyin": "pàng",
    "meaning": "béo, mập",
    "category": "mo-ta-con-nguoi",
    "example": "他很胖",
    "examplePinyin": "Tā hěn pàng",
    "exampleVi": "Anh ấy rất mập"
  },
  {
    "id": "yct4-pioliang",
    "hanzi": "漂亮",
    "pinyin": "piào liang",
    "meaning": "đẹp",
    "category": "mo-ta-con-nguoi",
    "example": "她很漂亮",
    "examplePinyin": "tā hěn piào liang",
    "exampleVi": "Cô ấy rất đẹp"
  },
  {
    "id": "yct4-rqng",
    "hanzi": "热情",
    "pinyin": "rè qíng",
    "meaning": "nhiệt tình",
    "category": "mo-ta-con-nguoi",
    "example": "他对我很热情",
    "examplePinyin": "tā duì wǒ hěn rè qíng",
    "exampleVi": "Anh ấy rất nhiệt tình với tôi"
  },
  {
    "id": "yct4-rnzhn",
    "hanzi": "认真",
    "pinyin": "rèn zhēn",
    "meaning": "nghiêm túc, kỹ càng, có trách nhiệm",
    "category": "mo-ta-con-nguoi",
    "example": "他工作很认真",
    "examplePinyin": "Tā gōngzuò hěn rènzhēn",
    "exampleVi": "Anh ấy làm việc rất nghiêm túc"
  },
  {
    "id": "yct4-shu-shou",
    "hanzi": "瘦",
    "pinyin": "shòu",
    "meaning": "gầy, gầy",
    "category": "mo-ta-con-nguoi",
    "example": "他很瘦",
    "examplePinyin": "Tā hěn shòu",
    "exampleVi": "Anh ấy rất gầy"
  },
  {
    "id": "yct4-xgun",
    "hanzi": "习惯",
    "pinyin": "xí guàn",
    "meaning": "thói quen",
    "category": "mo-ta-con-nguoi",
    "example": "早起是个好习惯",
    "examplePinyin": "zǎo qǐ shì gè hǎo xí guàn",
    "exampleVi": "Dậy sớm là một thói quen tốt"
  },
  {
    "id": "yct4-xng-xing",
    "hanzi": "姓",
    "pinyin": "xìng",
    "meaning": "họ",
    "category": "mo-ta-con-nguoi",
    "example": "你姓什么",
    "examplePinyin": "nǐ xìng shén me",
    "exampleVi": "Bạn họ gì"
  },
  {
    "id": "yct4-ynggn",
    "hanzi": "勇敢",
    "pinyin": "yǒng gǎn",
    "meaning": "dũng cảm",
    "category": "mo-ta-con-nguoi",
    "example": "他是一个勇敢的人。",
    "examplePinyin": "Tā shì yīgè yǒnggǎn de rén.",
    "exampleVi": "Anh ấy là một người dũng cảm."
  },
  {
    "id": "yct4-gzi",
    "hanzi": "个子",
    "pinyin": "gè zi",
    "meaning": "chiều cao",
    "category": "mo-ta-con-nguoi",
    "example": "他个子很高",
    "examplePinyin": "tā gè zi hěn gāo",
    "exampleVi": "Anh ấy cao lớn"
  },
  {
    "id": "yct4-i-ai",
    "hanzi": "爱",
    "pinyin": "ài",
    "meaning": "yêu, thích (động từ)",
    "category": "dong-tu-toi",
    "example": "我爱妈妈",
    "examplePinyin": "Wǒ ài māma",
    "exampleVi": "Tôi yêu mẹ"
  },
  {
    "id": "yct4-bo-bao",
    "hanzi": "包",
    "pinyin": "bāo",
    "meaning": "cái bao, túi, gói",
    "category": "dong-tu-toi",
    "example": "给我一个包",
    "examplePinyin": "Gěi wǒ yī gè bāo",
    "exampleVi": "Cho tôi một cái bao"
  },
  {
    "id": "yct4-bioyn",
    "hanzi": "表演",
    "pinyin": "biǎo yǎn",
    "meaning": "biểu diễn",
    "category": "dong-tu-toi",
    "example": "孩子们在舞台上表演舞蹈。",
    "examplePinyin": "Háizimen zài wǔtái shàng biǎoyǎn wǔdǎo.",
    "exampleVi": "Các em bé đang biểu diễn múa trên sân khấu."
  },
  {
    "id": "yct4-cngun",
    "hanzi": "参观",
    "pinyin": "cān guān",
    "meaning": "tham quan",
    "category": "dong-tu-toi",
    "example": "我们去参观博物馆",
    "examplePinyin": "wǒ men qù cān guān bó wù guǎn",
    "exampleVi": "Chúng tôi đi tham quan bảo tàng"
  },
  {
    "id": "yct4-chdo",
    "hanzi": "迟到",
    "pinyin": "chí dào",
    "meaning": "đến muộn",
    "category": "dong-tu-toi",
    "example": "对不起，我迟到了。",
    "examplePinyin": "Duìbuqǐ, wǒ chídào le.",
    "exampleVi": "Xin lỗi, tôi đến muộn.",
    "lessonNumber": 8
  },
  {
    "id": "yct4-di-dai",
    "hanzi": "带",
    "pinyin": "dài",
    "meaning": "mang; mang theo",
    "category": "dong-tu-toi",
    "example": "请带身份证",
    "examplePinyin": "qǐng dài shēn fèn zhèng",
    "exampleVi": "Vui lòng mang theo thẻ căn cước"
  },
  {
    "id": "yct4-di-diu",
    "hanzi": "丢",
    "pinyin": "diū",
    "meaning": "đánh rơi, để mất, để lạc",
    "category": "dong-tu-toi",
    "example": "我的钱包丢了",
    "examplePinyin": "Wǒ de qiánbāo diū le",
    "exampleVi": "Ví của tôi bị mất rơi"
  },
  {
    "id": "yct4-dng-dong-4",
    "hanzi": "冻",
    "pinyin": "dòng",
    "meaning": "đông lạnh",
    "category": "dong-tu-toi",
    "example": "天气太冷了，河水都冻上了。",
    "examplePinyin": "tiān qì tài lěng le, hé shuǐ dōu dòng shàng le.",
    "exampleVi": "Thời tiết lạnh quá, nước sông đều đông lại rồi."
  },
  {
    "id": "yct4-fng",
    "hanzi": "放",
    "pinyin": "fàng",
    "meaning": "đặt, để, thả",
    "category": "dong-tu-toi",
    "example": "把书放在桌子上",
    "examplePinyin": "Bǎ shū fàng zài zhuōzi shàng",
    "exampleVi": "Đặt sách lên bàn"
  },
  {
    "id": "yct4-fn",
    "hanzi": "分",
    "pinyin": "fēn",
    "meaning": "phút; xu (1/100 tệ); điểm số; chia, phân chia",
    "category": "dong-tu-toi",
    "example": "现在三点十分",
    "examplePinyin": "Xiànzài sān diǎn shí fēn",
    "exampleVi": "Bây giờ là 3 giờ 10 phút"
  },
  {
    "id": "yct4-qli",
    "hanzi": "起来",
    "pinyin": "qǐ lái",
    "meaning": "đứng lên, dậy (phương hướng); bắt đầu (trợ từ động từ)",
    "category": "dong-tu-toi",
    "example": "请站起来",
    "examplePinyin": "Qǐng zhàn qǐ lái",
    "exampleVi": "Làm ơn đứng lên"
  },
  {
    "id": "yct4-yo-yao",
    "hanzi": "要",
    "pinyin": "yào",
    "meaning": "muốn",
    "category": "dong-tu-toi",
    "example": "我要一杯咖啡。",
    "examplePinyin": "wǒ yào yī bēi kā fēi.",
    "exampleVi": "Tôi muốn một cốc cà phê."
  },
  {
    "id": "yct4-zh-zhu",
    "hanzi": "住",
    "pinyin": "zhù",
    "meaning": "ở, cư trú, dừng lại",
    "category": "dong-tu-toi",
    "example": "我住在北京",
    "examplePinyin": "Wǒ zhù zài Běijīng",
    "exampleVi": "Tôi ở tại Bắc Kinh"
  },
  {
    "id": "yct4-yng",
    "hanzi": "用",
    "pinyin": "yòng",
    "meaning": "dùng, sử dụng",
    "category": "dong-tu-toi",
    "example": "我用电脑",
    "examplePinyin": "Wǒ yòng diànnǎo",
    "exampleVi": "Tôi dùng máy tính"
  },
  {
    "id": "yct4-jing",
    "hanzi": "讲",
    "pinyin": "jiǎng",
    "meaning": "nói, kể, giảng",
    "category": "dong-tu-toi",
    "example": "老师在讲课",
    "examplePinyin": "lǎo shī zài jiǎng kè",
    "exampleVi": "Thầy giáo đang giảng bài"
  },
  {
    "id": "yct4-jinch-jianchi",
    "hanzi": "坚持",
    "pinyin": "jiān chí",
    "meaning": "kiên trì, kiên quyết",
    "category": "dong-tu-toi",
    "example": "我们要坚持学习。",
    "examplePinyin": "wǒ men yào jiān chí xué xí.",
    "exampleVi": "Chúng ta phải kiên trì học tập."
  },
  {
    "id": "yct4-jin-jian",
    "hanzi": "溅",
    "pinyin": "jiàn",
    "meaning": "rắc, bắn",
    "category": "dong-tu-toi",
    "example": "汽车开过去，水溅了我一身。",
    "examplePinyin": "qì chē kāi guò qù, shuǐ jiàn le wǒ yī shēn.",
    "exampleVi": "Ô tô chạy qua, nước bắn lên khắp người tôi."
  },
  {
    "id": "yct4-ji-jia",
    "hanzi": "加",
    "pinyin": "jiā",
    "meaning": "cộng; thêm vào",
    "category": "dong-tu-toi",
    "example": "二加三等于五。",
    "examplePinyin": "èr jiā sān děng yú wǔ.",
    "exampleVi": "Hai cộng ba bằng năm."
  },
  {
    "id": "yct4-hun",
    "hanzi": "换",
    "pinyin": "huàn",
    "meaning": "đổi",
    "category": "dong-tu-toi",
    "example": "我想换一件衣服",
    "examplePinyin": "wǒ xiǎng huàn yī jiàn yī fu",
    "exampleVi": "Tôi muốn đổi một chiếc áo"
  },
  {
    "id": "yct4-gun",
    "hanzi": "关",
    "pinyin": "guān",
    "meaning": "đóng, tắt",
    "category": "dong-tu-toi",
    "example": "关门",
    "examplePinyin": "Guān mén",
    "exampleVi": "Đóng cửa",
    "lessonNumber": 3
  },
  {
    "id": "yct4-gn-gan",
    "hanzi": "敢",
    "pinyin": "gǎn",
    "meaning": "dám, gan dạ",
    "category": "dong-tu-toi",
    "example": "你敢去吗？",
    "examplePinyin": "nǐ gǎn qù ma?",
    "exampleVi": "Bạn dám đi không?"
  },
  {
    "id": "yct4-ji-jie",
    "hanzi": "接",
    "pinyin": "jiē",
    "meaning": "đón, tiếp đón; nối tiếp, tiếp theo; tiếp nhận; liền kề, tiếp xúc. Là động từ thường dùng trong văn nói và văn viết để chỉ việc đón tiếp hoặc nối tiếp nhau.",
    "category": "words-ii",
    "example": "请接电话",
    "examplePinyin": "Qǐng jiē diànhuà",
    "exampleVi": "Làm ơn nghe điện thoại"
  },
  {
    "id": "yct4-jxng",
    "hanzi": "举行",
    "pinyin": "jǔ xíng",
    "meaning": "tổ chức",
    "category": "words-ii",
    "example": "我们在学校举行会议",
    "examplePinyin": "wǒ men zài xué xiào jǔ xíng huì yì",
    "exampleVi": "Chúng tôi tổ chức cuộc họp ở trường"
  },
  {
    "id": "yct4-ki-kai",
    "hanzi": "开",
    "pinyin": "kāi",
    "meaning": "mở ra, bật; nở (hoa); bắt đầu; nấu sôi. Động từ chỉ hành động mở hoặc khởi sự.",
    "category": "words-ii",
    "example": "请开门",
    "examplePinyin": "Qǐng kāimén",
    "exampleVi": "Làm ơn mở cửa",
    "lessonNumber": 7
  },
  {
    "id": "yct4-kn",
    "hanzi": "看",
    "pinyin": "kàn",
    "meaning": "nhìn, xem (động từ)",
    "category": "words-ii",
    "example": "我看书",
    "examplePinyin": "Wǒ kàn shū",
    "exampleVi": "Tôi đọc sách"
  },
  {
    "id": "yct4-mi-mai",
    "hanzi": "卖",
    "pinyin": "mài",
    "meaning": "bán",
    "category": "words-ii",
    "example": "这家店卖水果",
    "examplePinyin": "zhè jiā diàn mài shuǐ guǒ",
    "exampleVi": "Cửa hàng này bán trái cây",
    "lessonNumber": 3
  },
  {
    "id": "yct4-nng",
    "hanzi": "能",
    "pinyin": "néng",
    "meaning": "có thể, năng lực, khả năng",
    "category": "words-ii",
    "example": "我能去",
    "examplePinyin": "Wǒ néng qù",
    "exampleVi": "Tôi có thể đi"
  },
  {
    "id": "yct4-pidu",
    "hanzi": "排队",
    "pinyin": "pái duì",
    "meaning": "xếp hàng",
    "category": "words-ii",
    "example": "请在这里排队",
    "examplePinyin": "qǐng zài zhè li pái duì",
    "exampleVi": "Vui lòng xếp hàng ở đây"
  },
  {
    "id": "yct4-rng",
    "hanzi": "让",
    "pinyin": "ràng",
    "meaning": "nhường, cho phép, mời",
    "category": "words-ii",
    "example": "请让我先走",
    "examplePinyin": "qǐng ràng wǒ xiān zǒu",
    "exampleVi": "Mời để tôi đi trước"
  },
  {
    "id": "yct4-tng-ting-2",
    "hanzi": "听",
    "pinyin": "tīng",
    "meaning": "nghe, lắng nghe",
    "category": "words-ii",
    "example": "我在听音乐",
    "examplePinyin": "Wǒ zài tīng yīnyuè",
    "exampleVi": "Tôi đang nghe nhạc"
  },
  {
    "id": "yct4-xyo",
    "hanzi": "需要",
    "pinyin": "xū yào",
    "meaning": "cần, cần thiết",
    "category": "words-ii",
    "example": "我需要你的帮助。",
    "examplePinyin": "wǒ xū yào nǐ de bāng zhù.",
    "exampleVi": "Tôi cần sự giúp đỡ của bạn."
  },
  {
    "id": "yct4-zhdo",
    "hanzi": "知道",
    "pinyin": "zhī dào",
    "meaning": "biết",
    "category": "words-ii",
    "example": "我知道了",
    "examplePinyin": "Wǒ zhīdào le",
    "exampleVi": "Tôi đã biết rồi"
  },
  {
    "id": "yct4-ydo",
    "hanzi": "遇到",
    "pinyin": "yù dào",
    "meaning": "gặp phải",
    "category": "words-ii",
    "example": "我在路上遇到了老同学。",
    "examplePinyin": "wǒ zài lù shàng yù dào le lǎo tóng xué.",
    "exampleVi": "Tôi gặp bạn học cũ trên đường."
  },
  {
    "id": "yct4-xunz",
    "hanzi": "选择",
    "pinyin": "xuǎn zé",
    "meaning": "chọn; lựa chọn",
    "category": "words-ii",
    "example": "你可以选择你喜欢的颜色。",
    "examplePinyin": "nǐ kě yǐ xuǎn zé nǐ xǐ huan de yán sè.",
    "exampleVi": "Bạn có thể chọn màu mình thích."
  },
  {
    "id": "yct4-tgo",
    "hanzi": "提高",
    "pinyin": "tí gāo",
    "meaning": "tăng; nâng cao",
    "category": "words-ii",
    "example": "提高水平",
    "examplePinyin": "tí gāo shuǐ píng",
    "exampleVi": "Nâng cao trình độ"
  },
  {
    "id": "yct4-jish",
    "hanzi": "结束",
    "pinyin": "jié shù",
    "meaning": "kết thúc",
    "category": "words-ii",
    "example": "会议已经结束了。",
    "examplePinyin": "huì yì yǐ jīng jié shù le.",
    "exampleVi": "Cuộc họp đã kết thúc rồi."
  },
  {
    "id": "yct4-kish",
    "hanzi": "开始",
    "pinyin": "kāi shǐ",
    "meaning": "bắt đầu, khởi đầu; điểm khởi đầu của một hành động, sự kiện hoặc quá trình",
    "category": "words-ii",
    "example": "电影开始了。",
    "examplePinyin": "Diànyǐng kāishǐ le.",
    "exampleVi": "Bộ phim đã bắt đầu."
  },
  {
    "id": "yct4-zhnbi",
    "hanzi": "准备",
    "pinyin": "zhǔn bèi",
    "meaning": "chuẩn bị, dự định, sắp sửa",
    "category": "words-ii",
    "example": "我们正在准备考试。",
    "examplePinyin": "wǒ men zhèng zài zhǔn bèi kǎo shì.",
    "exampleVi": "Chúng tôi đang chuẩn bị cho kỳ thi."
  },
  {
    "id": "yct4-yu-you",
    "hanzi": "有",
    "pinyin": "yǒu",
    "meaning": "có (động từ)",
    "category": "words-ii",
    "example": "我有哥哥",
    "examplePinyin": "Wǒ yǒu gēge",
    "exampleVi": "Tôi có anh trai"
  },
  {
    "id": "yct4-ynggi",
    "hanzi": "应该",
    "pinyin": "yīng gāi",
    "meaning": "nên",
    "category": "words-ii",
    "example": "你应该多喝水",
    "examplePinyin": "nǐ yīng gāi duō hē shuǐ",
    "exampleVi": "Bạn nên uống nhiều nước"
  },
  {
    "id": "yct4-xi-xie-3",
    "hanzi": "写",
    "pinyin": "xiě",
    "meaning": "viết, chép (văn bản, chữ)",
    "category": "words-ii",
    "example": "我会写汉字",
    "examplePinyin": "Wǒ huì xiě Hànzì",
    "exampleVi": "Tôi biết viết chữ Hán"
  },
  {
    "id": "yct4-ji-jie-2",
    "hanzi": "借",
    "pinyin": "jiè",
    "meaning": "vay, mượn",
    "category": "words-ii",
    "example": "我可以借你的笔吗",
    "examplePinyin": "wǒ kě yǐ jiè nǐ de bǐ ma",
    "exampleVi": "Tôi có thể mượn bút của bạn được không"
  },
  {
    "id": "yct4-dso",
    "hanzi": "打扫",
    "pinyin": "dǎ sǎo",
    "meaning": "quét dọn",
    "category": "dong-tu-ho-gia-dinh",
    "example": "周末我在家打扫房间。",
    "examplePinyin": "zhōu mò wǒ zài jiā dǎ sǎo fáng jiān.",
    "exampleVi": "Cuối tuần tôi ở nhà dọn dẹp phòng."
  },
  {
    "id": "yct4-di-dai-2",
    "hanzi": "戴",
    "pinyin": "dài",
    "meaning": "đeo",
    "category": "dong-tu-ho-gia-dinh",
    "example": "外面很冷，戴上帽子吧。",
    "examplePinyin": "wài miàn hěn lěng, dài shàng mào zi ba.",
    "exampleVi": "Bên ngoài rất lạnh, đội mũ vào đi."
  },
  {
    "id": "yct4-gu-gua",
    "hanzi": "挂",
    "pinyin": "guà",
    "meaning": "treo, mắc",
    "category": "dong-tu-ho-gia-dinh",
    "example": "请把衣服挂在衣架上。",
    "examplePinyin": "qǐng bǎ yī fu guà zài yī jià shàng.",
    "exampleVi": "Hãy treo áo lên giá treo quần áo."
  },
  {
    "id": "yct4-h-he",
    "hanzi": "喝",
    "pinyin": "hē",
    "meaning": "uống (động từ)",
    "category": "dong-tu-ho-gia-dinh",
    "example": "我喝水",
    "examplePinyin": "Wǒ hē shuǐ",
    "exampleVi": "Tôi uống nước"
  },
  {
    "id": "yct4-ch-chi",
    "hanzi": "吃",
    "pinyin": "chī",
    "meaning": "ăn (động từ)",
    "category": "dong-tu-ho-gia-dinh",
    "example": "我吃苹果",
    "examplePinyin": "Wǒ chī píngguǒ",
    "exampleVi": "Tôi ăn táo"
  },
  {
    "id": "yct4-p",
    "hanzi": "破",
    "pinyin": "pò",
    "meaning": "vỡ, rách; phá, đập; vượt qua (kỷ lục)",
    "category": "dong-tu-ho-gia-dinh",
    "example": "杯子破了。",
    "examplePinyin": "bēi zi pò le.",
    "exampleVi": "Cái ly đã vỡ."
  },
  {
    "id": "yct4-shuy",
    "hanzi": "刷牙",
    "pinyin": "shuā yá",
    "meaning": "đánh răng",
    "category": "dong-tu-ho-gia-dinh",
    "example": "我每天早晚都刷牙。",
    "examplePinyin": "wǒ měi tiān zǎo wǎn dōu shuā yá.",
    "exampleVi": "Sáng và tối nào tôi cũng đánh răng."
  },
  {
    "id": "yct4-tng-tang-2",
    "hanzi": "躺",
    "pinyin": "tǎng",
    "meaning": "nằm, nằm xuống, nghỉ ngơi",
    "category": "dong-tu-ho-gia-dinh",
    "example": "他躺在床上看书。",
    "examplePinyin": "Tā tǎng zài chuángshàng kànshū.",
    "exampleVi": "Anh ấy nằm trên giường đọc sách."
  },
  {
    "id": "yct4-tu-tuo",
    "hanzi": "脱",
    "pinyin": "tuō",
    "meaning": "cởi",
    "category": "dong-tu-ho-gia-dinh",
    "example": "进门以前请脱鞋。",
    "examplePinyin": "jìn mén yǐ qián qǐng tuō xié.",
    "exampleVi": "Xin hãy cởi giày trước khi vào nhà."
  },
  {
    "id": "yct4-xzo",
    "hanzi": "洗澡",
    "pinyin": "xǐ zǎo",
    "meaning": "tắm",
    "category": "dong-tu-ho-gia-dinh",
    "example": "我每天晚上洗澡",
    "examplePinyin": "wǒ měi tiān wǎn shang xǐ zǎo",
    "exampleVi": "Tôi tắm mỗi tối",
    "lessonNumber": 5
  },
  {
    "id": "yct4-xng-xing-2",
    "hanzi": "醒",
    "pinyin": "xǐng",
    "meaning": "tỉnh giấc",
    "category": "dong-tu-ho-gia-dinh",
    "example": "我早上六点就醒了。",
    "examplePinyin": "wǒ zǎo shang liù diǎn jiù xǐng le.",
    "exampleVi": "Sáu giờ sáng tôi đã tỉnh dậy rồi."
  },
  {
    "id": "yct4-shuj",
    "hanzi": "手机",
    "pinyin": "shǒu jī",
    "meaning": "điện thoại di động, điện thoại cầm tay",
    "category": "thong-tin-va-phuong-tien",
    "example": "我的手机没电了",
    "examplePinyin": "Wǒ de shǒujī méidiàn le",
    "exampleVi": "Điện thoại của tôi hết pin rồi",
    "lessonNumber": 1
  },
  {
    "id": "yct4-dinno",
    "hanzi": "电脑",
    "pinyin": "diàn nǎo",
    "meaning": "máy tính (điện não)",
    "category": "nha-va-cuoc-song",
    "example": "我用电脑工作",
    "examplePinyin": "Wǒ yòng diànnǎo gōngzuò",
    "exampleVi": "Tôi dùng máy tính để làm việc",
    "lessonNumber": 1
  },
  {
    "id": "yct4-shngwng",
    "hanzi": "上网",
    "pinyin": "shàng wǎng",
    "meaning": "lướt web, lên mạng (sử dụng Internet)",
    "category": "ngay-le-va-giai-tri",
    "example": "我在上网",
    "examplePinyin": "Wǒ zài shàngwǎng",
    "exampleVi": "Tôi đang lướt web",
    "lessonNumber": 1
  },
  {
    "id": "yct4-shjin",
    "hanzi": "时间",
    "pinyin": "shí jiān",
    "meaning": "thời gian",
    "category": "thoi-gian",
    "example": "我没有时间",
    "examplePinyin": "Wǒ méiyǒu shíjiān",
    "exampleVi": "Tôi không có thời gian",
    "lessonNumber": 2
  },
  {
    "id": "yct4-xiosh",
    "hanzi": "小时",
    "pinyin": "xiǎo shí",
    "meaning": "giờ",
    "category": "thoi-gian",
    "example": "我学了三个小时中文",
    "examplePinyin": "Wǒ xué le sān gè xiǎoshí Zhōngwén",
    "exampleVi": "Tôi đã học tiếng Trung 3 tiếng",
    "lessonNumber": 2
  },
  {
    "id": "yct4-mn-men",
    "hanzi": "门",
    "pinyin": "mén",
    "meaning": "cửa, cổng",
    "category": "nha-va-cuoc-song",
    "example": "请关门",
    "examplePinyin": "Qǐng guān mén",
    "exampleVi": "Làm ơn đóng cửa",
    "lessonNumber": 3
  },
  {
    "id": "yct4-zhngw",
    "hanzi": "中午",
    "pinyin": "zhōng wǔ",
    "meaning": "buổi trưa",
    "category": "thoi-gian",
    "example": "我中午吃饭",
    "examplePinyin": "Wǒ zhōngwǔ chīfàn",
    "exampleVi": "Tôi ăn trưa",
    "lessonNumber": 3
  },
  {
    "id": "yct4-ji-jiu-4",
    "hanzi": "就",
    "pinyin": "jiù",
    "meaning": "thì, liền, bèn; ngay lập tức; đã là (nhấn mạnh)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我就去",
    "examplePinyin": "Wǒ jiù qù",
    "exampleVi": "Tôi đi ngay/đâu phải đi",
    "lessonNumber": 3
  },
  {
    "id": "yct4-shnt",
    "hanzi": "身体",
    "pinyin": "shēn tǐ",
    "meaning": "cơ thể, thân thể",
    "category": "suc-khoe-va-co-the",
    "example": "要注意身体健康",
    "examplePinyin": "Yào zhù yì shēn tǐ jiàn kāng",
    "exampleVi": "Cần chú ý đến sức khỏe cơ thể",
    "lessonNumber": 4
  },
  {
    "id": "yct4-shngbng",
    "hanzi": "生病",
    "pinyin": "shēng bìng",
    "meaning": "bị ốm, mắc bệnh",
    "category": "suc-khoe-va-co-the",
    "example": "他生病了",
    "examplePinyin": "Tā shēngbìng le",
    "exampleVi": "Anh ấy bị ốm rồi",
    "lessonNumber": 4
  },
  {
    "id": "yct4-xixi",
    "hanzi": "休息",
    "pinyin": "xiū xi",
    "meaning": "nghỉ ngơi, tạm dừng hoạt động để lấy lại sức",
    "category": "ngay-le-va-giai-tri",
    "example": "我累了,想休息一下",
    "examplePinyin": "Wǒ lèile, xiǎng xiūxi yíxià",
    "exampleVi": "Tôi mệt rồi, muốn nghỉ ngơi một chút",
    "lessonNumber": 4
  },
  {
    "id": "yct4-ydinr-yidianer",
    "hanzi": "一点儿",
    "pinyin": "yì diǎnr",
    "meaning": "một chút, một ít",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "我会说一点儿汉语。",
    "examplePinyin": "wǒ huì shuō yī diǎnr hàn yǔ.",
    "exampleVi": "Tôi biết nói một chút tiếng Trung.",
    "lessonNumber": 4
  },
  {
    "id": "yct4-qin-qian",
    "hanzi": "前",
    "pinyin": "qián",
    "meaning": "trước, phía trước",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "请往前走",
    "examplePinyin": "Qǐng wǎng qián zǒu",
    "exampleVi": "Xin hãy đi về phía trước",
    "lessonNumber": 6
  },
  {
    "id": "yct4-zu-zuo-2",
    "hanzi": "左",
    "pinyin": "zuǒ",
    "meaning": "bên trái",
    "category": "tinh-tu",
    "example": "请向左转",
    "examplePinyin": "Qǐng xiàng zuǒ zhuǎn",
    "exampleVi": "Xin hãy rẽ trái",
    "lessonNumber": 6
  },
  {
    "id": "yct4-yu-you-2",
    "hanzi": "右",
    "pinyin": "yòu",
    "meaning": "phải (bên phải, hướng phải)",
    "category": "tinh-tu",
    "example": "向右转",
    "examplePinyin": "Xiàng yòu zhuǎn",
    "exampleVi": "Quẹo phải",
    "lessonNumber": 6
  },
  {
    "id": "yct4-du-dui",
    "hanzi": "对",
    "pinyin": "duì",
    "meaning": "đúng; đối với, với (giới từ); đôi (lượng từ)",
    "category": "cac-tu-chuc-nang-va-cau-hoi",
    "example": "你说得对",
    "examplePinyin": "Nǐ shuō de duì",
    "exampleVi": "Bạn nói đúng",
    "lessonNumber": 7
  },
  {
    "id": "yct4-yun-yuan-2",
    "hanzi": "远",
    "pinyin": "yuǎn",
    "meaning": "xa, xa xôi",
    "category": "noi",
    "example": "我家很远",
    "examplePinyin": "Wǒ jiā hěn yuǎn",
    "exampleVi": "Nhà tôi rất xa",
    "lessonNumber": 7
  },
  {
    "id": "yct4-pngbin",
    "hanzi": "旁边",
    "pinyin": "páng biān",
    "meaning": "bên cạnh",
    "category": "noi",
    "example": "我站在他旁边",
    "examplePinyin": "Wǒ zhàn zài tā pángbiān",
    "exampleVi": "Tôi đứng bên cạnh anh ấy",
    "lessonNumber": 7
  },
  {
    "id": "yct4-n-na-2",
    "hanzi": "拿",
    "pinyin": "ná",
    "meaning": "lấy, cầm, nắm",
    "category": "dong-tu-toi",
    "example": "请拿一本书",
    "examplePinyin": "Qǐng ná yī běn shū",
    "exampleVi": "Làm ơn lấy một cuốn sách",
    "lessonNumber": 8
  },
  {
    "id": "yct4-hui",
    "hanzi": "坏",
    "pinyin": "huài",
    "meaning": "xấu, hỏng",
    "category": "tinh-tu",
    "example": "这个坏了",
    "examplePinyin": "Zhège huài le",
    "exampleVi": "Cái này đã hỏng",
    "lessonNumber": 8
  },
  {
    "id": "yct4-li-lei",
    "hanzi": "累",
    "pinyin": "lèi",
    "meaning": "mệt, mệt mỏi",
    "category": "hoc",
    "example": "我很累",
    "examplePinyin": "Wǒ hěn lèi",
    "exampleVi": "Tôi rất mệt",
    "lessonNumber": 9
  },
  {
    "id": "yct4-shhou",
    "hanzi": "时候",
    "pinyin": "shí hou",
    "meaning": "lúc, thời điểm",
    "category": "thoi-gian",
    "example": "我小时候喜欢游泳",
    "examplePinyin": "Wǒ xiǎoshíhou xǐhuān yóuyǒng",
    "exampleVi": "Lúc nhỏ tôi thích bơi lội",
    "lessonNumber": 9
  },
  {
    "id": "yct4-qnin",
    "hanzi": "去年",
    "pinyin": "qù nián",
    "meaning": "năm ngoái",
    "category": "thoi-gian",
    "example": "我去年去了中国",
    "examplePinyin": "Wǒ qùnián qùle Zhōngguó",
    "exampleVi": "Năm ngoái tôi đã đi Trung Quốc",
    "lessonNumber": 9
  },
  {
    "id": "yct4-dinyng",
    "hanzi": "电影",
    "pinyin": "diàn yǐng",
    "meaning": "phim, phim ảnh (chương trình điện ảnh)",
    "category": "ngay-le-va-giai-tri",
    "example": "我看了一部电影",
    "examplePinyin": "Wǒ kànle yī bù diànyǐng",
    "exampleVi": "Tôi đã xem một bộ phim",
    "lessonNumber": 10
  },
  {
    "id": "yct4-mng",
    "hanzi": "忙",
    "pinyin": "máng",
    "meaning": "bận, bận rộn",
    "category": "tinh-tu",
    "example": "我很忙",
    "examplePinyin": "Wǒ hěn máng",
    "exampleVi": "Tôi rất bận",
    "lessonNumber": 10
  },
  {
    "id": "yct4-chshng",
    "hanzi": "出生",
    "pinyin": "chū shēng",
    "meaning": "sinh ra",
    "category": "gia-dinh",
    "example": "我出生在北京",
    "examplePinyin": "wǒ chū shēng zài běi jīng",
    "exampleVi": "Tôi sinh ra ở Bắc Kinh",
    "lessonNumber": 11
  }
];

export function toVocabularyWord4(word: YctWord): VocabularyWord {
  return {
    id: word.id,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    meaning: word.meaning,
    sinoVietnamese: "",
    partOfSpeech: "yct4",
    hskLevel: "HSK3",
    exampleSentence: {
      chinese: word.example,
      pinyin: word.examplePinyin,
      vietnamese: word.exampleVi,
    },
  };
}

const STORAGE_KEY_YCT4 = "hanyu.yct4.progress.v1";

export interface Yct4Progress {
  learnedWordIds: string[];
  quizzesPassed: number;
  bestQuizScore: number;
  xp: number;
}

export function getYct4Progress(): Yct4Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_YCT4);
    if (!raw) {
      return {
        learnedWordIds: [],
        quizzesPassed: 0,
        bestQuizScore: 0,
        xp: 0,
      };
    }
    return JSON.parse(raw) as Yct4Progress;
  } catch {
    return {
      learnedWordIds: [],
      quizzesPassed: 0,
      bestQuizScore: 0,
      xp: 0,
    };
  }
}

export function saveYct4Progress(progress: Yct4Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY_YCT4, JSON.stringify(progress));
  } catch {
    // ignore
  }
}

export function toggleLearnedWord4(wordId: string): Yct4Progress {
  const current = getYct4Progress();
  const exists = current.learnedWordIds.includes(wordId);
  const nextLearned = exists
    ? current.learnedWordIds.filter((id) => id !== wordId)
    : [...current.learnedWordIds, wordId];

  const xpGain = exists ? 0 : 5;
  const earnedXp = exists
    ? 0
    : awardXp(`yct:4:word:${encodeURIComponent(wordId)}`, "yct", xpGain);
  const updated: Yct4Progress = {
    ...current,
    learnedWordIds: nextLearned,
    xp: current.xp + earnedXp,
  };
  saveYct4Progress(updated);
  return updated;
}

export function recordQuizCompletion4(
  score: number,
  total: number
): { progress: Yct4Progress; earnedXp: number } {
  const current = getYct4Progress();
  const reward = total > 0 ? Math.round((score / total) * 30) : 0;
  const earnedXp = reward > 0 ? awardDailyXp("yct:4:quiz", "yct", reward) : 0;
  const updated: Yct4Progress = {
    ...current,
    quizzesPassed: current.quizzesPassed + 1,
    bestQuizScore: Math.max(current.bestQuizScore, score),
    xp: current.xp + earnedXp,
  };
  saveYct4Progress(updated);
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

export function generateYct4Quiz(
  count = 10,
  filter?: { category?: Yct4CategoryId; lessonNumber?: number }
): YctQuizQuestion[] {
  let pool = YCT4_WORDS;
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

    const distractors = YCT4_WORDS.filter((w) => w.id !== word.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    if (type === "meaning") {
      const correct = word.meaning;
      const options = [correct, ...distractors.map((d) => d.meaning)].sort(
        () => Math.random() - 0.5
      );
      return {
        id: `q4-${word.id}-${idx}`,
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
        id: `q4-${word.id}-${idx}`,
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
        id: `q4-${word.id}-${idx}`,
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

const CATEGORY_EMOJIS_4: Record<string, string> = {
  "do-an-va-do-uong": "🍜",
  "gia-dinh": "👨‍👩‍👧",
  "nha-va-cuoc-song": "🏡",
  "hoc": "📚",
  "cong-viec": "💼",
  "ngay-le-va-giai-tri": "🎉",
  "giao-tiep-va-tuong-tac": "🤝",
  "phep-lich-su": "🙏",
  "thong-tin-va-phuong-tien": "📱",
  "cac-mon-the-thao": "⚽",
  "suc-khoe-va-co-the": "💪",
  "tu-duy": "💡",
  "tinh-cam-va-cam-xuc": "😊",
  "thoi-gian": "⏰",
  "thien-nhien": "🌿",
  "thoi-tiet": "⛅",
  "noi": "📍",
  "giao-thong-va-giao-thong": "🚗",
  "cac-tu-chuc-nang-va-cau-hoi": "❓",
  "pho-tu": "⚡",
  "dai-tu": "🙋‍♂️",
  "dem-tu": "🔢",
  "danh-tu": "📦",
  "so-luong-va-do-luong": "📏",
  "dia-ly": "🌏",
  "tinh-tu": "🎨",
  "thu-tu-trinh-bay": "🔗",
  "quan-ao-va-phu-kien": "👕",
  "mo-ta-con-nguoi": "👥",
  "dong-tu-toi": "🏃",
  "words-ii": "🎯",
  "dong-tu-ho-gia-dinh": "🧹",
};

export const WORD_EMOJIS_4: Record<string, string> = {
};

export function getWordEmoji4(word: YctWord): string {
  return WORD_EMOJIS_4[word.id] || CATEGORY_EMOJIS_4[word.category] || "✨";
}
