// src/data/hsk1GrammarData.ts
// Dữ liệu giải thích ngữ pháp HSK 1 chuẩn New HSK 3.0 (70 điểm ngữ pháp)
// Đầy đủ tiêu đề tiếng Việt, công thức cấu trúc, phân loại, giải thích chi tiết, mẹo ghi nhớ và câu ví dụ có Pinyin + Dịch nghĩa.

export interface GrammarExample {
  chinese: string;
  pinyin: string;
  vietnamese: string;
}

export interface EnrichedGrammarPoint {
  id: string;
  order: number;
  category: string;
  categoryName: string;
  categoryIcon: string;
  titleVi: string;
  titleZh: string;
  grammarType: string;
  categoryType: string;
  grammarDetail: string;
  structure: string;
  explanationVi: string;
  tips?: string;
  examples: GrammarExample[];
}

export interface GrammarCategory {
  id: string;
  name: string;
  icon: string;
}

export const HSK1_GRAMMAR_CATEGORIES = [
  { id: 'all', name: 'Tất cả (70)', icon: '🌟' },
  { id: 'verbs', name: 'Động từ & Năng nguyện', icon: '⚡' },
  { id: 'special_patterns', name: 'Cấu trúc câu đặc biệt', icon: '⭐' },
  { id: 'questions', name: 'Các loại câu hỏi', icon: '❓' },
  { id: 'particles_aspects', name: 'Trợ từ & Thời thể', icon: '🎯' },
  { id: 'adverbs', name: 'Phó từ các loại', icon: '🔥' },
  { id: 'pronouns', name: 'Đại từ xưng hô & Chỉ thị', icon: '👤' },
  { id: 'numbers_measures', name: 'Số từ & Lượng từ', icon: '🔢' },
  { id: 'prep_conj', name: 'Giới từ & Liên từ', icon: '🔗' },
  { id: 'sentence_types', name: 'Các kiểu câu cơ bản', icon: '📐' },
  { id: 'phrases_elements', name: 'Cụm từ & Bổ ngữ', icon: '🧩' },
  { id: 'practical_expressions', name: 'Cách nói thực tế', icon: '🕒' },
  { id: 'words', name: 'Tiền tố, Hậu tố & Phương vị', icon: '📍' }
];

export const HSK1_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk1-g-01",
    "order": 1,
    "category": "words",
    "categoryName": "Tiền tố & Hậu tố",
    "categoryIcon": "🧩",
    "titleVi": "Tiền tố: 小- (Xiǎo-) & 第- (Dì-)",
    "titleZh": "小—、第—",
    "grammarType": "语素",
    "categoryType": "前缀",
    "grammarDetail": "",
    "structure": "小 + Họ/Tên (thân mật) | 第 + Số từ (thứ tự)",
    "explanationVi": "Tiền tố đứng trước một từ để tạo thành từ mới mang sắc thái riêng:\n• '小-' (tiểu): Đặt trước họ hoặc tên của người ít tuổi hơn để gọi thân mật, gần gũi (như 小高 - Tiểu Cao, 小王 - Tiểu Vương).\n• '第-' (đệ): Đặt trước số đếm để tạo thành số thứ tự (như 第一课 - bài thứ nhất, 第二 - thứ hai).",
    "tips": "'第' chỉ dùng khi nói về thứ hạng hoặc số thứ tự, không dùng để đếm số lượng.",
    "examples": [
      {
        "chinese": "小高去哪儿了？",
        "pinyin": "Xiǎo gāo qù nǎr le?",
        "vietnamese": "Tiểu Cao đi đâu rồi?"
      },
      {
        "chinese": "今天我们学习第一课。",
        "pinyin": "Jīn tiān wǒ men xué xí dì yī kè.",
        "vietnamese": "Hôm nay chúng ta học bài thứ nhất (Bài 1)."
      }
    ]
  },
  {
    "id": "hsk1-g-02",
    "order": 2,
    "category": "words",
    "categoryName": "Tiền tố & Hậu tố",
    "categoryIcon": "🧩",
    "titleVi": "Hậu tố: -们 (-men) & -边 (-bian)",
    "titleZh": "—们、—边",
    "grammarType": "语素",
    "categoryType": "后缀",
    "grammarDetail": "",
    "structure": "Đại từ / Danh từ chỉ người + 们 | Danh từ phương vị + 边",
    "explanationVi": "Hậu tố đứng sau từ gốc để bổ sung ý nghĩa:\n• '-们': Đứng sau danh từ hoặc đại từ chỉ người để biểu thị số nhiều (như 同学们 - các bạn học sinh, 你们 - các bạn, 我们 - chúng tôi).\n• '-边': Đứng sau các từ chỉ phương hướng để tạo thành danh từ chỉ vị trí (như 里边 - bên trong, 外边 - bên ngoài, 后边 - phía sau).",
    "tips": "Khi danh từ đã có số từ đi kèm (ví dụ: 三个学生), tuyệt đối KHÔNG thêm 们.",
    "examples": [
      {
        "chinese": "同学们，你们好！",
        "pinyin": "Tóng xué men, nǐ men hǎo!",
        "vietnamese": "Chào các bạn học sinh!"
      },
      {
        "chinese": "学校里边有超市。",
        "pinyin": "Xué xiào lǐ biān yǒu chāo shì.",
        "vietnamese": "Bên trong trường học có siêu thị."
      },
      {
        "chinese": "外边正在下雨呢。",
        "pinyin": "Wài biān zhèng zài xià yǔ ne.",
        "vietnamese": "Bên ngoài trời đang mưa đấy."
      },
      {
        "chinese": "电影院在医院的后边。",
        "pinyin": "Diàn yǐng yuàn zài yī yuàn de hòu biān.",
        "vietnamese": "Rạp chiếu phim ở phía sau bệnh viện."
      }
    ]
  },
  {
    "id": "hsk1-g-03",
    "order": 3,
    "category": "words",
    "categoryName": "Danh từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Danh từ chỉ phương vị (Trên, Dưới, Trong, Ngoài, Trước, Sau)",
    "titleZh": "上、下、里、外、前、后",
    "grammarType": "词类",
    "categoryType": "名词",
    "grammarDetail": "方位名词",
    "structure": "Danh từ nơi chốn/vật thể + 上 / 下 / 里 / 外 / 前 / 后",
    "explanationVi": "Các từ chỉ phương hướng, vị trí cơ bản trong tiếng Trung:\n• 上 (shàng): Trên\n• 下 (xià): Dưới\n• 里 (lǐ): Trong\n• 外 (wài): Ngoài\n• 前 (qián): Trước\n• 后 (hòu): Sau\nThường đứng ngay sau danh từ để tạo thành cụm từ chỉ vị trí nơi chốn cụ thể.",
    "tips": "Tên quốc gia hoặc địa danh riêng (như Trung Quốc, Bắc Kinh) khi làm nơi chốn thì không cần thêm 里 (nói 在中国, không nói 在中国里).",
    "examples": [
      {
        "chinese": "桌子上有几本书？",
        "pinyin": "Zhuō zi shàng yǒu jǐ běn shū?",
        "vietnamese": "Trên bàn có mấy quyển sách?"
      },
      {
        "chinese": "书店里的人很多。",
        "pinyin": "Shū diàn lǐ de rén hěn duō.",
        "vietnamese": "Người ở trong hiệu sách rất đông."
      },
      {
        "chinese": "他们都在国外。",
        "pinyin": "Tā men dōu zài guó wài.",
        "vietnamese": "Họ đều đang ở nước ngoài."
      }
    ]
  },
  {
    "id": "hsk1-g-04",
    "order": 4,
    "category": "verbs",
    "categoryName": "Động từ năng nguyện",
    "categoryIcon": "⚡",
    "titleVi": "Động từ năng nguyện: 会 (huì) & 能 (néng) - Biểu thị khả năng",
    "titleZh": "会、能",
    "grammarType": "词类",
    "categoryType": "动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + 会 / 能 + Động từ + (Tân ngữ)",
    "explanationVi": "• '会' (huì): Biết làm việc gì đó thông qua học tập, rèn luyện (như 会说中文 - biết nói tiếng Trung, 会开车 - biết lái xe).\n• '能' (néng): Có khả năng làm việc gì đó do điều kiện sức khỏe, hoàn cảnh hoặc năng lực cho phép (như 能来上课 - có thể đến lớp).",
    "tips": "Phủ định dùng '不会' (không biết làm) hoặc '不能' (không thể làm được do hoàn cảnh hoặc bị cấm).",
    "examples": [
      {
        "chinese": "我会说中文。",
        "pinyin": "Wǒ huì shuō zhōng wén.",
        "vietnamese": "Tôi biết nói tiếng Trung."
      },
      {
        "chinese": "他不会开车。",
        "pinyin": "Tā bù huì kāi chē.",
        "vietnamese": "Anh ấy không biết lái xe ô tô."
      },
      {
        "chinese": "你明天能不能去？",
        "pinyin": "Nǐ míng tiān néng bù néng qù?",
        "vietnamese": "Ngày mai bạn có thể đi được không?"
      },
      {
        "chinese": "她生病了，不能来上课。",
        "pinyin": "Tā shēng bìng le, bù néng lái shàng kè.",
        "vietnamese": "Cô ấy bị ốm rồi, không thể đến lớp học."
      }
    ]
  },
  {
    "id": "hsk1-g-05",
    "order": 5,
    "category": "verbs",
    "categoryName": "Động từ năng nguyện",
    "categoryIcon": "⚡",
    "titleVi": "Động từ năng nguyện: 想 (xiǎng) & 要 (yào) - Mong muốn & Ý định",
    "titleZh": "想、要",
    "grammarType": "词类",
    "categoryType": "动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + 想 / 要 + Động từ + (Tân ngữ)",
    "explanationVi": "• '想' (xiǎng): Biểu thị mong muốn, nguyện vọng trong suy nghĩ mang tính nhẹ nhàng ('muốn / thích').\n• '要' (yào): Biểu thị ý định dứt khoát, quyết tâm sẽ thực hiện hoặc chuẩn bị làm ('muốn / cần / chuẩn bị').",
    "tips": "Phủ định của cả hai trường hợp biểu thị không muốn đều dùng '不想' (không dùng 不要 vì 不要 thường mang nghĩa là 'đừng').",
    "examples": [
      {
        "chinese": "我想买一些水果。",
        "pinyin": "Wǒ xiǎng mǎi yī xiē shuǐ guǒ.",
        "vietnamese": "Tôi muốn mua một ít hoa quả."
      },
      {
        "chinese": "你想喝茶吗？",
        "pinyin": "Nǐ xiǎng hē chá ma?",
        "vietnamese": "Bạn có muốn uống trà không?"
      },
      {
        "chinese": "他们要去书店。",
        "pinyin": "Tā men yào qù shū diàn.",
        "vietnamese": "Họ muốn / chuẩn bị đi hiệu sách."
      },
      {
        "chinese": "我要学习汉语。",
        "pinyin": "Wǒ yào xué xí hàn yǔ.",
        "vietnamese": "Tôi muốn học tiếng Hán."
      }
    ]
  },
  {
    "id": "hsk1-g-06",
    "order": 6,
    "category": "verbs",
    "categoryName": "Động từ năng nguyện",
    "categoryIcon": "⚡",
    "titleVi": "Động từ năng nguyện: 可以 (kěyǐ) - Sự cho phép & Có thể",
    "titleZh": "可以",
    "grammarType": "词类",
    "categoryType": "动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + 可以 + Động từ + (Tân ngữ)",
    "explanationVi": "Dùng để biểu thị sự cho phép, đồng ý hoặc hỏi xin phép người khác thực hiện một hành động nào đó ('được phép / có thể').",
    "tips": "Thể phủ định '不可以' mang ý nghĩa nghiêm cấm, không được phép làm (như 这儿不可以吃东西 - Ở đây không được phép ăn đồ).",
    "examples": [
      {
        "chinese": "这儿不可以吃东西。",
        "pinyin": "Zhèr bù kě yǐ chī dōng xī.",
        "vietnamese": "Ở đây không được phép ăn đồ ăn."
      },
      {
        "chinese": "我可以问一个问题吗？",
        "pinyin": "Wǒ kě yǐ wèn yī gè wèn tí ma?",
        "vietnamese": "Tôi có thể hỏi một câu hỏi được không?"
      }
    ]
  },
  {
    "id": "hsk1-g-07",
    "order": 7,
    "category": "verbs",
    "categoryName": "Từ loại & Động từ",
    "categoryIcon": "✂️",
    "titleVi": "Động từ ly hợp (Động từ tách rời thường gặp)",
    "titleZh": "看病、睡觉、说话、上课、下课、上班、下班、生病",
    "grammarType": "词类",
    "categoryType": "动词",
    "grammarDetail": "离合词",
    "structure": "V + Thành phần xen giữa + O (hoặc V + 了 + O)",
    "explanationVi": "Động từ ly hợp là các từ gồm 2 âm tiết có kết cấu Động từ + Tân ngữ (như 看病, 睡觉, 说话, 上课, 下课, 上班, 下班, 生病).\nĐặc điểm: Có thể tách rời ra để chèn các thành phần phụ như '了' hoặc từ chỉ số lượng vào giữa (như 睡了一觉, 上了中文课).",
    "tips": "Không được mang tân ngữ trực tiếp phía sau động từ ly hợp (không nói: 见面你, mà phải nói 跟你见面).",
    "examples": [
      {
        "chinese": "他去医院看病了。",
        "pinyin": "Tā qù yī yuàn kàn bìng le.",
        "vietnamese": "Anh ấy đến bệnh viện khám bệnh rồi."
      },
      {
        "chinese": "我想睡一觉，休息一下（儿）。",
        "pinyin": "Wǒ xiǎng shuì yī jué, xiū xī yī xià (ér).",
        "vietnamese": "Tôi muốn ngủ một giấc, nghỉ ngơi một chút."
      },
      {
        "chinese": "上课不要说话。",
        "pinyin": "Shàng kè bù yào shuō huà.",
        "vietnamese": "Trong giờ học đừng nói chuyện riêng."
      },
      {
        "chinese": "今天我上中文课。",
        "pinyin": "Jīn tiān wǒ shàng zhōng wén kè.",
        "vietnamese": "Hôm nay tôi có tiết học tiếng Trung."
      },
      {
        "chinese": "我下了课要去食堂。",
        "pinyin": "Wǒ xià le kè yào qù shí táng.",
        "vietnamese": "Tôi tan học xong sẽ đến nhà ăn."
      },
      {
        "chinese": "下了班你做什么？",
        "pinyin": "Xià le bān nǐ zuò shén me?",
        "vietnamese": "Tan làm xong bạn làm gì?"
      },
      {
        "chinese": "她昨天生病了。",
        "pinyin": "Tā zuó tiān shēng bìng le.",
        "vietnamese": "Hôm qua cô ấy bị ốm."
      }
    ]
  },
  {
    "id": "hsk1-g-08",
    "order": 8,
    "category": "pronouns",
    "categoryName": "Đại từ nghi vấn",
    "categoryIcon": "❓",
    "titleVi": "Các đại từ nghi vấn cơ bản (谁, 什么, 哪, 哪儿, 几...)",
    "titleZh": "多、多少、几、哪、哪儿、哪里、哪些、什么、谁、怎么、怎么样",
    "grammarType": "词类",
    "categoryType": "代词",
    "grammarDetail": "疑问代词",
    "structure": "Đặt đại từ nghi vấn vào đúng vị trí của thông tin cần hỏi",
    "explanationVi": "Trong tiếng Trung, câu hỏi dùng đại từ nghi vấn giữ nguyên trật tự từ của câu khẳng định:\n• 什么 (shénme): Cái gì\n• 谁 (shéi/shuí): Ai\n• 哪 (nǎ): Nào | 哪儿 / 哪里 (nǎr/nǎlǐ): Ở đâu\n• 几 (jǐ) / 多少 (duōshao): Mấy / Bao nhiêu\n• 怎么 (zěnme): Làm sao, thế nào (hỏi cách thức)\n• 怎么样 (zěnmeyàng): Thế nào (hỏi tính chất, tình hình, ý kiến)",
    "tips": "Câu đã có đại từ nghi vấn thì tuyệt đối KHÔNG thêm trợ từ 吗 ở cuối câu nữa.",
    "examples": [
      {
        "chinese": "你弟弟多大？",
        "pinyin": "Nǐ dì dì duō dà?",
        "vietnamese": "Em trai của bạn bao nhiêu tuổi?"
      },
      {
        "chinese": "这件衣服多少钱？",
        "pinyin": "Zhè jiàn yī fú duō shǎo qián?",
        "vietnamese": "Bộ quần áo này bao nhiêu tiền?"
      },
      {
        "chinese": "现在几点？",
        "pinyin": "Xiàn zài jǐ diǎn?",
        "vietnamese": "Bây giờ là mấy giờ?"
      },
      {
        "chinese": "她是哪国人？",
        "pinyin": "Tā shì nǎ guó rén?",
        "vietnamese": "Cô ấy là người nước nào?"
      },
      {
        "chinese": "你去哪儿？",
        "pinyin": "Nǐ qù nǎr?",
        "vietnamese": "Bạn đi đâu đấy?"
      },
      {
        "chinese": "你住在哪里？",
        "pinyin": "Nǐ zhù zài nǎ lǐ?",
        "vietnamese": "Bạn sống ở đâu?"
      },
      {
        "chinese": "哪些是汉语书？",
        "pinyin": "Nǎ xiē shì hàn yǔ shū?",
        "vietnamese": "Những quyển nào là sách tiếng Trung?"
      },
      {
        "chinese": "那是什么？",
        "pinyin": "Nà shì shén me?",
        "vietnamese": "Đó là cái gì?"
      },
      {
        "chinese": "那个人是谁？",
        "pinyin": "Nà gè rén shì shuí?",
        "vietnamese": "Người kia là ai?"
      },
      {
        "chinese": "你怎么去学校？",
        "pinyin": "Nǐ zěn me qù xué xiào?",
        "vietnamese": "Bạn đi đến trường bằng phương tiện gì?"
      },
      {
        "chinese": "明天天气怎么样？",
        "pinyin": "Míng tiān tiān qì zěn me yàng?",
        "vietnamese": "Thời tiết ngày mai thế nào?"
      }
    ]
  },
  {
    "id": "hsk1-g-09",
    "order": 9,
    "category": "pronouns",
    "categoryName": "Đại từ nhân xưng",
    "categoryIcon": "👤",
    "titleVi": "Đại từ nhân xưng (我, 你, 您, 他, 她, 它, 我们...)",
    "titleZh": "我、你、您、他、她、我们、你们、他们、她们、它、它们、大家",
    "grammarType": "词类",
    "categoryType": "代词",
    "grammarDetail": "人称代词",
    "structure": "Đại từ số ít + 们 = Đại từ số nhiều",
    "explanationVi": "Hệ thống đại từ xưng hô trong tiếng Trung:\n• Ngôi thứ 1: 我 (tôi) → 我们 (chúng tôi)\n• Ngôi thứ 2: 你 (bạn) / 您 (ngài - kính trọng) → 你们 (các bạn)\n• Ngôi thứ 3: 他 (anh ấy) / 她 (cô ấy) / 它 (nó - đồ vật/động vật) → 他们/她们/它们 (họ, chúng nó)\n• Mở rộng: 大家 (dàjiā - mọi người).",
    "tips": "'您' là cách gọi tôn kính người lớn tuổi hoặc bề trên, bản thân '您' không kết hợp với '们'.",
    "examples": [
      {
        "chinese": "我是学生。",
        "pinyin": "Wǒ shì xué shēng.",
        "vietnamese": "Tôi là học sinh."
      },
      {
        "chinese": "你是哪国人？",
        "pinyin": "Nǐ shì nǎ guó rén?",
        "vietnamese": "Bạn là người nước nào?"
      },
      {
        "chinese": "老师，您好！",
        "pinyin": "Lǎo shī, nín hǎo!",
        "vietnamese": "Em chào thầy/cô ạ!"
      },
      {
        "chinese": "他会开车吗？",
        "pinyin": "Tā huì kāi chē ma?",
        "vietnamese": "Anh ấy có biết lái xe không?"
      },
      {
        "chinese": "她是不是老师？",
        "pinyin": "Tā shì bù shì lǎo shī?",
        "vietnamese": "Cô ấy có phải là giáo viên không?"
      },
      {
        "chinese": "我们都是大学生。",
        "pinyin": "Wǒ men dōu shì dà xué shēng.",
        "vietnamese": "Chúng tôi đều là sinh viên đại học."
      },
      {
        "chinese": "你们是学生吗？",
        "pinyin": "Nǐ men shì xué shēng ma?",
        "vietnamese": "Các bạn có phải là học sinh không?"
      },
      {
        "chinese": "他们去哪儿了？",
        "pinyin": "Tā men qù nǎr le?",
        "vietnamese": "Họ đã đi đâu rồi?"
      },
      {
        "chinese": "她们都是我的朋友。",
        "pinyin": "Tā men dōu shì wǒ de péng yǒu.",
        "vietnamese": "Họ đều là bạn bè của tôi."
      },
      {
        "chinese": "你看，它正在吃饭呢。",
        "pinyin": "Nǐ kàn, tā zhèng zài chī fàn ne.",
        "vietnamese": "Bạn nhìn kìa, nó đang ăn cơm đấy."
      },
      {
        "chinese": "这些小狗真漂亮，它们叫什么名字？",
        "pinyin": "Zhè xiē xiǎo gǒu zhēn piāo liàng, tā men jiào shén me míng zì?",
        "vietnamese": "Những chú cún này thật đẹp, chúng tên là gì vậy?"
      },
      {
        "chinese": "大家都喜欢学习汉语。",
        "pinyin": "Dà jiā dōu xǐ huān xué xí hàn yǔ.",
        "vietnamese": "Mọi người đều thích học tiếng Trung."
      }
    ]
  },
  {
    "id": "hsk1-g-10",
    "order": 10,
    "category": "pronouns",
    "categoryName": "Đại từ chỉ thị",
    "categoryIcon": "👉",
    "titleVi": "Đại từ chỉ thị (这, 那, 这儿, 那儿, 这个, 那个...)",
    "titleZh": "这、那、这儿、那儿、这里、那里、这些、那些、有的、这个、那个、有些",
    "grammarType": "词类",
    "categoryType": "代词",
    "grammarDetail": "指示代词",
    "structure": "这 / 那 + Lượng từ + Danh từ | 这儿 / 那儿 (nơi chốn)",
    "explanationVi": "Dùng để chỉ định người, vật hoặc nơi chốn:\n• '这' (zhè) / '这里' / '这儿' (zhèr): Đây, ở đây (ở gần người nói).\n• '那' (nà) / '那里' / '那儿' (nàr): Đó, đằng kia, ở kia (ở xa người nói).\n• Số nhiều: 这些 (những cái này), 那些 (những cái kia).\n• Phân loại: 有的 (có người/vật), 有些 (một số).",
    "tips": "Trước danh từ số ít, '这' và '那' thường đi kèm lượng từ 个 (这个, 那个).",
    "examples": [
      {
        "chinese": "这是谁的书？",
        "pinyin": "Zhè shì shuí de shū?",
        "vietnamese": "Đây là sách của ai?"
      },
      {
        "chinese": "那个手机多少钱？",
        "pinyin": "Nà gè shǒu jī duō shǎo qián?",
        "vietnamese": "Chiếc điện thoại kia bao nhiêu tiền?"
      },
      {
        "chinese": "我在这儿学习中文。",
        "pinyin": "Wǒ zài zhèr xué xí zhōng wén.",
        "vietnamese": "Tôi học tiếng Trung ở đây."
      },
      {
        "chinese": "那儿有一家书店。",
        "pinyin": "Nàr yǒu yī jiā shū diàn.",
        "vietnamese": "Đằng kia có một hiệu sách."
      },
      {
        "chinese": "这里是我的家。",
        "pinyin": "Zhè lǐ shì wǒ de jiā.",
        "vietnamese": "Đây là nhà của tôi."
      },
      {
        "chinese": "那里有一家饭店。",
        "pinyin": "Nà lǐ yǒu yī jiā fàn diàn.",
        "vietnamese": "Đằng kia có một nhà hàng."
      },
      {
        "chinese": "这些是老师的书。",
        "pinyin": "Zhè xiē shì lǎo shī de shū.",
        "vietnamese": "Những thứ này là sách của thầy giáo."
      },
      {
        "chinese": "我不认识那些人。",
        "pinyin": "Wǒ bù rèn shí nà xiē rén.",
        "vietnamese": "Tôi không quen biết những người kia."
      },
      {
        "chinese": "到了饭店，大家有的想吃米饭，有的想吃面条。",
        "pinyin": "Dào le fàn diàn, dà jiā yǒu de xiǎng chī mǐ fàn, yǒu de xiǎng chī miàn tiáo.",
        "vietnamese": "Đến nhà hàng, mọi người có người muốn ăn cơm, có người lại muốn ăn mì."
      },
      {
        "chinese": "这个杯子多少钱？",
        "pinyin": "Zhè gè bēi zi duō shǎo qián?",
        "vietnamese": "Chiếc cốc này bao nhiêu tiền?"
      },
      {
        "chinese": "她在那个房间。",
        "pinyin": "Tā zài nà gè fáng jiān.",
        "vietnamese": "Cô ấy ở trong căn phòng kia."
      },
      {
        "chinese": "有些学生不在学校住。",
        "pinyin": "Yǒu xiē xué shēng bù zài xué xiào zhù.",
        "vietnamese": "Có một số học sinh không ở trong trường."
      }
    ]
  },
  {
    "id": "hsk1-g-11",
    "order": 11,
    "category": "numbers_measures",
    "categoryName": "Số từ & Lượng từ",
    "categoryIcon": "🔢",
    "titleVi": "Số từ cơ bản (0 - 10, Hàng trăm 百, Hàng nghìn 千, Nửa 半)",
    "titleZh": "一、二/两、三、四、五、六、七、八、九、零、十、百、半、千",
    "grammarType": "词类",
    "categoryType": "数词",
    "grammarDetail": "",
    "structure": "Số đếm tiếng Trung: 一, 二/两, 三, 四, 五... 十, 百, 千",
    "explanationVi": "Cách đếm số và đọc số hàng chục, hàng trăm, hàng nghìn trong tiếng Trung:\n• Số lẻ ở giữa dùng '零' (như 一百零六: 106).\n• Số lượng '2' đứng trước lượng từ dùng '两' (liǎng) thay vì '二' (èr) (như 两个人: 2 người, 两百: 200).\n• '半' (bàn): Một nửa (như 九点半: 9 giờ rưỡi; 半个小时: nửa tiếng).",
    "tips": "Nhớ dùng '两' khi chỉ số lượng trước lượng từ, chỉ dùng '二' khi đếm số thứ tự hoặc số điện thoại.",
    "examples": [
      {
        "chinese": "一个、两百、五十八、一百零六、两千三百五十、九点半、半个小时",
        "pinyin": "Yī gè, liǎng bǎi, wǔ shí bā, yī bǎi líng liù, liǎng qiān sān bǎi wǔ shí, jiǔ diǎn bàn, bàn gè xiǎo shí",
        "vietnamese": "1 cái, 200, 58, 106, 2350, 9 giờ rưỡi, nửa tiếng đồng hồ"
      }
    ]
  },
  {
    "id": "hsk1-g-12",
    "order": 12,
    "category": "numbers_measures",
    "categoryName": "Số từ & Lượng từ",
    "categoryIcon": "📦",
    "titleVi": "Danh lượng từ chuyên dụng (本, 个, 家, 口, 块, 件, 只, 元)",
    "titleZh": "专用名量词：本、个、家、口、块、件、只、元",
    "grammarType": "词类",
    "categoryType": "量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + Lượng từ + Danh từ",
    "explanationVi": "Trong tiếng Trung, giữa số từ và danh từ bắt buộc phải có lượng từ tương ứng:\n• 个 (gè): Lượng từ chung phổ biến nhất (cái, người).\n• 本 (běn): Dùng cho sách vở, tạp chí.\n• 家 (jiā): Dùng cho quán xá, công ty, cửa hàng.\n• 口 (kǒu): Dùng cho số nhân khẩu trong gia đình.\n• 块 (kuài) / 元 (yuán): Lượng từ tiền tệ (đồng/tệ).\n• 件 (jiàn): Dùng cho quần áo, sự việc.\n• 只 (zhī): Dùng cho con vật nhỏ (chó, mèo...).",
    "tips": "Không được nói '一书', bắt buộc phải nói '一本书'.",
    "examples": [
      {
        "chinese": "这本书是中文书。",
        "pinyin": "Zhè běn shū shì zhōng wén shū.",
        "vietnamese": "Quyển sách này là sách tiếng Trung."
      },
      {
        "chinese": "我吃了两个包子。",
        "pinyin": "Wǒ chī le liǎng gè bāo zi.",
        "vietnamese": "Tôi đã ăn hai chiếc bánh bao."
      },
      {
        "chinese": "前边有一家书店。",
        "pinyin": "Qián biān yǒu yī jiā shū diàn.",
        "vietnamese": "Phía trước có một hiệu sách."
      },
      {
        "chinese": "你家有几口人？",
        "pinyin": "Nǐ jiā yǒu jǐ kǒu rén?",
        "vietnamese": "Nhà bạn có mấy người?"
      },
      {
        "chinese": "我有十块钱。",
        "pinyin": "Wǒ yǒu shí kuài qián.",
        "vietnamese": "Tôi có mười đồng."
      },
      {
        "chinese": "这只小猫真漂亮。",
        "pinyin": "Zhè zhǐ xiǎo māo zhēn piāo liàng.",
        "vietnamese": "Chú mèo con này thật xinh đẹp."
      },
      {
        "chinese": "这件衣服三百元。",
        "pinyin": "Zhè jiàn yī fú sān bǎi yuán.",
        "vietnamese": "Bộ quần áo này giá ba trăm tệ."
      }
    ]
  },
  {
    "id": "hsk1-g-13",
    "order": 13,
    "category": "numbers_measures",
    "categoryName": "Số từ & Lượng từ",
    "categoryIcon": "☕",
    "titleVi": "Lượng từ mượn dùng: 杯 (bēi - cốc, ly, tách)",
    "titleZh": "借用名量词：杯",
    "grammarType": "词类",
    "categoryType": "量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 杯 + Danh từ chất lỏng (trà, nước, cà phê...)",
    "explanationVi": "Danh từ chỉ đồ chứa '杯' (cốc/tách) được mượn làm lượng từ để đong đếm chất lỏng (như 一杯茶: một tách trà; 一杯水: một cốc nước).",
    "tips": "Thường dùng trong các câu giao tiếp mời nước, mời trà lịch sự (喝杯茶吧).",
    "examples": [
      {
        "chinese": "喝杯茶吧。",
        "pinyin": "Hē bēi chá ba.",
        "vietnamese": "Uống một tách trà nhé."
      }
    ]
  },
  {
    "id": "hsk1-g-14",
    "order": 14,
    "category": "numbers_measures",
    "categoryName": "Thời gian & Tuổi tác",
    "categoryIcon": "🕒",
    "titleVi": "Lượng từ thời gian & tuổi tác (日, 号, 岁, 点, 分, 年, 天)",
    "titleZh": "日、号、岁、点、分、年、天",
    "grammarType": "词类",
    "categoryType": "量词",
    "grammarDetail": "时量词",
    "structure": "Số từ + 年 / 天 / 岁 / 点 / 分",
    "explanationVi": "Các từ đong đếm thời gian và lứa tuổi:\n• 日 (rì) / 号 (hào): Ngày trong tháng (như 九月十五号).\n• 岁 (suì): Tuổi (như 二十岁: 20 tuổi).\n• 点 (diǎn): Giờ | 分 (fēn): Phút (như 三点十分: 3 giờ 10 phút).\n• 年 (nián): Năm | 天 (tiān): Ngày (như 三天: 3 ngày; 一年: 1 năm).",
    "tips": "年 và 天 bản thân đã là lượng từ, nên đứng ngay sau số từ mà không cần thêm 个 (nói 三天, không nói 三个天).",
    "examples": [
      {
        "chinese": "今天几月几日（号）？",
        "pinyin": "Jīn tiān jǐ yuè jǐ rì (hào)?",
        "vietnamese": "Hôm nay là ngày mấy tháng mấy?"
      },
      {
        "chinese": "她今年几岁？",
        "pinyin": "Tā jīn nián jǐ suì?",
        "vietnamese": "Năm nay cô ấy mấy tuổi?"
      },
      {
        "chinese": "现在八点二十分。",
        "pinyin": "Xiàn zài bā diǎn èr shí fēn.",
        "vietnamese": "Bây giờ là 8 giờ 20 phút."
      },
      {
        "chinese": "一年有十二个月。",
        "pinyin": "Yī nián yǒu shí èr gè yuè.",
        "vietnamese": "Một năm có 12 tháng."
      },
      {
        "chinese": "你一天学习几个汉字？",
        "pinyin": "Nǐ yī tiān xué xí jǐ gè hàn zì?",
        "vietnamese": "Một ngày bạn học mấy chữ Hán?"
      }
    ]
  },
  {
    "id": "hsk1-g-15",
    "order": 15,
    "category": "adverbs",
    "categoryName": "Phó từ chỉ mức độ",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ mức độ: 非常, 很, 太, 真, 有点儿",
    "titleZh": "非常、很、太、真、有（一）点儿",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "程度副词",
    "structure": "Phó từ mức độ + Tính từ (hoặc Động từ tâm lý)",
    "explanationVi": "Dùng để bổ nghĩa mức độ cho tính từ hoặc động từ tâm lý:\n• 很 (hěn): Rất (thường đi kèm tính từ để tạo câu hoàn chỉnh).\n• 非常 (fēicháng): Vô cùng, hết sức.\n• 太……了 (tài...le): Quá... rồi (thường dùng trong câu cảm thán).\n• 真 (zhēn): Thật là, quả là.\n• 有点儿 (yǒudiǎnr): Hơi, có chút (thường mang sắc thái tiêu cực, không hài lòng).",
    "tips": "Phân biệt: '有点儿 + Tính từ' (hơi rộng - tiêu cực), còn 'Tính từ + 一点儿' (rộng hơn một chút - so sánh).",
    "examples": [
      {
        "chinese": "我非常喜欢学中文。",
        "pinyin": "Wǒ fēi cháng xǐ huān xué zhōng wén.",
        "vietnamese": "Tôi vô cùng thích học tiếng Trung."
      },
      {
        "chinese": "这里的水果很便宜。",
        "pinyin": "Zhè lǐ de shuǐ guǒ hěn biàn yí.",
        "vietnamese": "Hoa quả ở đây rất rẻ."
      },
      {
        "chinese": "房间里太热了。",
        "pinyin": "Fáng jiān lǐ tài rè le.",
        "vietnamese": "Trong phòng nóng quá."
      },
      {
        "chinese": "这儿的菜真好吃。",
        "pinyin": "Zhèr de cài zhēn hǎo chī.",
        "vietnamese": "Đồ ăn ở đây thật ngon."
      },
      {
        "chinese": "今天天气有点儿冷。",
        "pinyin": "Jīn tiān tiān qì yǒu diǎn ér lěng.",
        "vietnamese": "Thời tiết hôm nay hơi lạnh một chút."
      }
    ]
  },
  {
    "id": "hsk1-g-16",
    "order": 16,
    "category": "adverbs",
    "categoryName": "Phó từ chỉ phạm vi",
    "categoryIcon": "🌐",
    "titleVi": "Phó từ phạm vi: 都 (dōu - Đều, tất cả)",
    "titleZh": "都1",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "范围副词",
    "structure": "Chủ ngữ (số nhiều) + 都 + Động từ / Tính từ",
    "explanationVi": "Phó từ '都' đứng trước động từ/tính từ để tổng kết toàn bộ các đối tượng được nhắc đến ở chủ ngữ mang tính chất hoặc hành động đó ('đều').",
    "tips": "Khi phủ định: '都不' = Đều không (hoàn toàn không); '不都' = Không đều (phủ định một phần).",
    "examples": [
      {
        "chinese": "我们都学习汉语。",
        "pinyin": "Wǒ men dōu xué xí hàn yǔ.",
        "vietnamese": "Chúng tôi đều học tiếng Trung."
      },
      {
        "chinese": "他们都是中国学生。",
        "pinyin": "Tā men dōu shì zhōng guó xué shēng.",
        "vietnamese": "Họ đều là học sinh Trung Quốc."
      }
    ]
  },
  {
    "id": "hsk1-g-17",
    "order": 17,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian",
    "categoryIcon": "⏳",
    "titleVi": "Phó từ thời gian: 在 / 正在 (zhèngzài - Đang)",
    "titleZh": "在、正在",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "时间副词",
    "structure": "Chủ ngữ + 在 / 正在 + Động từ + (Tân ngữ)",
    "explanationVi": "Dùng trước động từ để biểu thị hành động đang diễn ra tại thời điểm nói ('đang làm gì'). Có thể dùng 在, 正 hoặc 正在.",
    "tips": "Phủ định của hành động đang tiếp diễn dùng '没 (在)' chứ không dùng '不'.",
    "examples": [
      {
        "chinese": "他们在做什么？",
        "pinyin": "Tā men zài zuò shén me?",
        "vietnamese": "Họ đang làm gì thế?"
      },
      {
        "chinese": "学生们正在上课。",
        "pinyin": "Xué shēng men zhèng zài shàng kè.",
        "vietnamese": "Các bạn học sinh đang trong giờ học."
      }
    ]
  },
  {
    "id": "hsk1-g-18",
    "order": 18,
    "category": "adverbs",
    "categoryName": "Phó từ tần suất",
    "categoryIcon": "🔁",
    "titleVi": "Phó từ tần suất: 再 (zài - Lại, nữa)",
    "titleZh": "再1",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "频率副词",
    "structure": "再 + Động từ",
    "explanationVi": "Biểu thị một hành động sẽ lặp lại hoặc tiếp tục trong tương lai (hoặc chưa xảy ra) ('lại, nữa, thêm'). Ví dụ: 再见 (hẹn gặp lại), 再买一本 (mua thêm một quyển).",
    "tips": "Phân biệt '再' (hành động lặp lại chưa xảy ra) với '又' (hành động lặp lại đã xảy ra rồi).",
    "examples": [
      {
        "chinese": "我想再买一本。",
        "pinyin": "Wǒ xiǎng zài mǎi yī běn.",
        "vietnamese": "Tôi muốn mua thêm một quyển nữa."
      },
      {
        "chinese": "我再问一个问题，可以吗？",
        "pinyin": "Wǒ zài wèn yī gè wèn tí, kě yǐ ma?",
        "vietnamese": "Tôi hỏi thêm một câu nữa có được không?"
      }
    ]
  },
  {
    "id": "hsk1-g-19",
    "order": 19,
    "category": "adverbs",
    "categoryName": "Phó từ liên kết",
    "categoryIcon": "🔗",
    "titleVi": "Phó từ liên kết: 也 (yě - cũng) & 还 (hái - còn, lại còn)",
    "titleZh": "还1、也",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "关联副词",
    "structure": "Chủ ngữ + 也 / 还 + V / Adj",
    "explanationVi": "• 也 (yě): Biểu thị sự tương đồng ('cũng'), đứng trước động từ/tính từ.\n• 还 (hái): Biểu thị sự bổ sung, tăng tiến ('còn, thêm vào đó, vẫn còn').",
    "tips": "Trong câu có cả '也' và '都' thì '也' luôn đứng trước '都' (nói 也都, không nói 都不).",
    "examples": [
      {
        "chinese": "我想吃面条儿，还想吃包子。",
        "pinyin": "Wǒ xiǎng chī miàn tiáo ér, hái xiǎng chī bāo zi.",
        "vietnamese": "Tôi muốn ăn mì, còn muốn ăn cả bánh bao nữa."
      },
      {
        "chinese": "我有两个姐姐，还有一个哥哥。",
        "pinyin": "Wǒ yǒu liǎng gè jiě jiě, hái yǒu yī gè gē gē.",
        "vietnamese": "Tôi có hai người chị gái, và còn có một người anh trai."
      },
      {
        "chinese": "他是学生，我也是学生。",
        "pinyin": "Tā shì xué shēng, wǒ yě shì xué shēng.",
        "vietnamese": "Anh ấy là học sinh, tôi cũng là học sinh."
      },
      {
        "chinese": "我学习汉语，我弟弟也学习汉语。",
        "pinyin": "Wǒ xué xí hàn yǔ, wǒ dì dì yě xué xí hàn yǔ.",
        "vietnamese": "Tôi học tiếng Hán, em trai tôi cũng học tiếng Hán."
      }
    ]
  },
  {
    "id": "hsk1-g-20",
    "order": 20,
    "category": "adverbs",
    "categoryName": "Phó từ phủ định",
    "categoryIcon": "🚫",
    "titleVi": "Phó từ phủ định: 不 (bù), 没/没有 (méi), 不要 (bú yào)",
    "titleZh": "不、没（有）、不要",
    "grammarType": "词类",
    "categoryType": "副词",
    "grammarDetail": "否定副词",
    "structure": "不 / 没(有) / 不要 + Động từ / Tính từ",
    "explanationVi": "• 不 (bù): Phủ định hiện tại, tương lai, thói quen hoặc tính chất ('không').\n• 没 / 没有 (méi): Phủ định hành động đã xảy ra hoặc phủ định sự sở hữu ('chưa / không có').\n• 不要 (bú yào): Khuyên can, yêu cầu người khác không làm gì ('đừng').",
    "tips": "Tuyệt đối không dùng '不' trước 有 (không có '不有', chỉ có '没有').",
    "examples": [
      {
        "chinese": "她不是老师。",
        "pinyin": "Tā bù shì lǎo shī.",
        "vietnamese": "Cô ấy không phải là giáo viên."
      },
      {
        "chinese": "我没看电视。",
        "pinyin": "Wǒ méi kàn diàn shì.",
        "vietnamese": "Tôi chưa / không xem tivi."
      },
      {
        "chinese": "她去超市了，我没有去。",
        "pinyin": "Tā qù chāo shì le, wǒ méi yǒu qù.",
        "vietnamese": "Cô ấy đi siêu thị rồi, tôi không đi."
      },
      {
        "chinese": "请大家不要说话。",
        "pinyin": "Qǐng dà jiā bù yào shuō huà.",
        "vietnamese": "Xin mọi người đừng nói chuyện."
      }
    ]
  },
  {
    "id": "hsk1-g-21",
    "order": 21,
    "category": "prep_conj",
    "categoryName": "Giới từ",
    "categoryIcon": "📍",
    "titleVi": "Giới từ chỉ nơi chốn / thời gian: 在 (zài - Ở, tại)",
    "titleZh": "在",
    "grammarType": "词类",
    "categoryType": "介词",
    "grammarDetail": "引出时间、处所",
    "structure": "Chủ ngữ + 在 + Nơi chốn + Động từ",
    "explanationVi": "Giới từ '在' kết hợp với từ chỉ nơi chốn đứng trước động từ để chỉ ra địa điểm nơi hành động diễn ra ('làm gì ở đâu').",
    "tips": "Trật tự tiếng Trung ngược với tiếng Việt: Tiếng Trung là [Ở đâu rồi mới Làm gì] (在中国工作, chứ không nói 工作在中国).",
    "examples": [
      {
        "chinese": "我想在中国工作。",
        "pinyin": "Wǒ xiǎng zài zhōng guó gōng zuò.",
        "vietnamese": "Tôi muốn làm việc tại Trung Quốc."
      },
      {
        "chinese": "你在哪儿学习中文？",
        "pinyin": "Nǐ zài nǎr xué xí zhōng wén?",
        "vietnamese": "Bạn học tiếng Trung ở đâu?"
      }
    ]
  },
  {
    "id": "hsk1-g-22",
    "order": 22,
    "category": "prep_conj",
    "categoryName": "Giới từ",
    "categoryIcon": "🤝",
    "titleVi": "Giới từ chỉ đối tượng: 和 (hàn/hé - cùng với) & 对 (duì - đối với)",
    "titleZh": "和1、对",
    "grammarType": "词类",
    "categoryType": "介词",
    "grammarDetail": "引出对象",
    "structure": "Chủ ngữ + 和 + Ai đó + Động từ | Chủ ngữ + 对 + Đối tượng + Động từ",
    "explanationVi": "• '和' làm giới từ: Dẫn ra đối tượng cùng tham gia hành động ('cùng với ai làm gì').\n• '对' làm giới từ: Dẫn ra đối tượng mà hành động hoặc thái độ hướng đến ('đối với ai nói gì / cư xử thế nào').",
    "tips": "Cụm giới tân luôn đứng TRƯỚC động từ chính trong câu.",
    "examples": [
      {
        "chinese": "我没和她一起去超市。",
        "pinyin": "Wǒ méi hé tā yī qǐ qù chāo shì.",
        "vietnamese": "Tôi không đi siêu thị cùng với cô ấy."
      },
      {
        "chinese": "我对老师说“谢谢”。",
        "pinyin": "Wǒ duì lǎo shī shuō \"xiè xiè\" .",
        "vietnamese": "Tôi nói 'cảm ơn' với thầy giáo."
      }
    ]
  },
  {
    "id": "hsk1-g-23",
    "order": 23,
    "category": "prep_conj",
    "categoryName": "Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ kết nối: 和 (hé - Và, cùng)",
    "titleZh": "和2",
    "grammarType": "词类",
    "categoryType": "连词",
    "grammarDetail": "连接词语或短语",
    "structure": "Từ/Cụm từ 1 + 和 + Từ/Cụm từ 2",
    "explanationVi": "Liên từ '和' dùng để nối hai từ hoặc cụm từ có mối quan hệ đẳng lập ngang hàng với nhau (danh từ với danh từ, đại từ với đại từ).",
    "tips": "'和' KHÔNG dùng để nối hai mệnh đề hoặc hai câu độc lập với nhau (tiếng Trung dùng dấu phẩy hoặc liên từ khác).",
    "examples": [
      {
        "chinese": "我和姐姐都喜欢唱歌。",
        "pinyin": "Wǒ hé jiě jiě dōu xǐ huān chàng gē.",
        "vietnamese": "Tôi và chị gái đều thích ca hát."
      },
      {
        "chinese": "今天和明天都下雨。",
        "pinyin": "Jīn tiān hé míng tiān dōu xià yǔ.",
        "vietnamese": "Hôm nay và ngày mai trời đều mưa."
      }
    ]
  },
  {
    "id": "hsk1-g-24",
    "order": 24,
    "category": "particles_aspects",
    "categoryName": "Trợ từ kết cấu",
    "categoryIcon": "🎯",
    "titleVi": "Trợ từ kết cấu: 的 (de - Của / Định ngữ)",
    "titleZh": "的1",
    "grammarType": "词类",
    "categoryType": "助词",
    "grammarDetail": "结构助词",
    "structure": "Định ngữ (Người/Tính chất) + 的 + Trung tâm ngữ (Danh từ)",
    "explanationVi": "Trợ từ kết cấu '的' liên kết thành phần bổ nghĩa đứng trước với danh từ đứng sau:\n• Biểu thị sở hữu: 'của' (như 我的手机 - điện thoại của tôi).\n• Biểu thị tính chất, đặc điểm miêu tả (như 我的好朋友 - người bạn tốt của tôi).",
    "tips": "Khi biểu thị quan hệ thân thuộc trong gia đình (như bố, mẹ) hoặc cơ quan, trường học, có thể lược bỏ '的' (như 我爸爸, 我学校).",
    "examples": [
      {
        "chinese": "这是你的手机吗？",
        "pinyin": "Zhè shì nǐ de shǒu jī ma?",
        "vietnamese": "Đây có phải là điện thoại của bạn không?"
      },
      {
        "chinese": "她是我的好朋友。",
        "pinyin": "Tā shì wǒ de hǎo péng yǒu.",
        "vietnamese": "Cô ấy là bạn tốt của tôi."
      }
    ]
  },
  {
    "id": "hsk1-g-25",
    "order": 25,
    "category": "particles_aspects",
    "categoryName": "Trợ từ động thái",
    "categoryIcon": "🏁",
    "titleVi": "Trợ từ động thái: 了1 (le - Biểu thị hành động đã hoàn thành)",
    "titleZh": "了1",
    "grammarType": "词类",
    "categoryType": "助词",
    "grammarDetail": "动态助词",
    "structure": "Động từ + 了 + (Số lượng) + Tân ngữ",
    "explanationVi": "Đứng ngay sau động từ để biểu thị hành động đó đã được thực hiện, hoàn tất ('đã làm xong'). Thường đi kèm với số lượng từ chỉ rõ kết quả.",
    "tips": "Phủ định của hành động hoàn thành dùng '没 + Động từ' và bỏ '了' đi.",
    "examples": [
      {
        "chinese": "今天我们学了十个汉字。",
        "pinyin": "Jīn tiān wǒ men xué le shí gè hàn zì.",
        "vietnamese": "Hôm nay chúng tôi đã học mười chữ Hán."
      },
      {
        "chinese": "我买了一些苹果。",
        "pinyin": "Wǒ mǎi le yī xiē píng guǒ.",
        "vietnamese": "Tôi đã mua một ít táo."
      }
    ]
  },
  {
    "id": "hsk1-g-26",
    "order": 26,
    "category": "particles_aspects",
    "categoryName": "Trợ từ ngữ khí",
    "categoryIcon": "💬",
    "titleVi": "Trợ từ ngữ khí cuối câu: 吗, 吧, 呢, 了",
    "titleZh": "吧1、了2 、吗、呢1、呢2、呢3",
    "grammarType": "词类",
    "categoryType": "助词",
    "grammarDetail": "语气助词",
    "structure": "Câu trần thuật + 吗 / 吧 / 呢 / 了",
    "explanationVi": "Đứng ở cuối câu để biểu thị thái độ, ngữ khí của người nói:\n• 吗 (ma): Hỏi đúng sai (như 你喜欢喝茶吗?)\n• 吧 (ba): Đề nghị, rủ rê, khuyên nhủ ('nhé, đi, thôi' - như 我们走吧)\n• 呢 (ne): Hỏi tỉnh lược ('còn... thì sao?'), hoặc nhấn mạnh hành động đang diễn ra\n• 了 (le): Biểu thị trạng thái mới xuất hiện, sự thay đổi tình huống ('rồi').",
    "tips": "Trợ từ ngữ khí luôn đứng ở vị trí cuối cùng của toàn bộ câu.",
    "examples": [
      {
        "chinese": "我们走吧。",
        "pinyin": "Wǒ men zǒu ba.",
        "vietnamese": "Chúng ta đi thôi nào."
      },
      {
        "chinese": "八点了，起床吧。",
        "pinyin": "Bā diǎn le, qǐ chuáng ba.",
        "vietnamese": "Tám giờ rồi, dậy thôi nào."
      },
      {
        "chinese": "她病了，在家休息呢。",
        "pinyin": "Tā bìng le, zài jiā xiū xī ne.",
        "vietnamese": "Cô ấy bị ốm rồi, đang nghỉ ngơi ở nhà."
      },
      {
        "chinese": "他是中国人吗？",
        "pinyin": "Tā shì zhōng guó rén ma?",
        "vietnamese": "Anh ấy có phải là người Trung Quốc không?"
      },
      {
        "chinese": "这个电影好看吗？",
        "pinyin": "Zhè gè diàn yǐng hǎo kàn ma?",
        "vietnamese": "Bộ phim này có hay không?"
      },
      {
        "chinese": "她正在学习呢。",
        "pinyin": "Tā zhèng zài xué xí ne.",
        "vietnamese": "Cô ấy đang học bài đấy."
      },
      {
        "chinese": "我是中国人，你呢？",
        "pinyin": "Wǒ shì zhōng guó rén, nǐ ne?",
        "vietnamese": "Tôi là người Trung Quốc, còn bạn thì sao?"
      },
      {
        "chinese": "A：你的手机呢？",
        "pinyin": "A: nǐ de shǒu jī ne?",
        "vietnamese": "A: Điện thoại của bạn đâu rồi nhỉ?"
      },
      {
        "chinese": "B：我的手机在房间里。",
        "pinyin": "B: wǒ de shǒu jī zài fáng jiān lǐ.",
        "vietnamese": "B: Điện thoại của tôi ở trong phòng."
      }
    ]
  },
  {
    "id": "hsk1-g-27",
    "order": 27,
    "category": "words",
    "categoryName": "Thán từ",
    "categoryIcon": "📞",
    "titleVi": "Thán từ: 喂 (wèi / wéi - A-lô, này)",
    "titleZh": "喂",
    "grammarType": "词类",
    "categoryType": "叹词",
    "grammarDetail": "",
    "structure": "喂，……",
    "explanationVi": "Dùng độc lập ở đầu câu để gọi người khác hoặc nghe điện thoại:\n• Khi nghe điện thoại thường phát âm thanh 2 (wéi): 'A-lô?'.\n• Khi dùng để gọi ai đó thường phát âm thanh 4 (wèi): 'Này!'.",
    "tips": "Đây là thán từ giao tiếp hàng ngày cực kỳ phổ biến trong đời sống Trung Quốc.",
    "examples": [
      {
        "chinese": "喂，请问，李老师在吗？",
        "pinyin": "Wèi, qǐng wèn, lǐ lǎo shī zài ma?",
        "vietnamese": "A lô, xin hỏi thầy Lý có ở đó không ạ?"
      },
      {
        "chinese": "喂，你去哪儿？",
        "pinyin": "Wèi, nǐ qù nǎr?",
        "vietnamese": "Này, bạn đi đâu đấy?"
      }
    ]
  },
  {
    "id": "hsk1-g-28",
    "order": 28,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🧩",
    "titleVi": "Cụm từ liên hợp (Đẳng lập ngang hàng)",
    "titleZh": "联合短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "基本结构类型",
    "structure": "A + B (hoặc A + 和 + B)",
    "explanationVi": "Cụm từ gồm hai hoặc nhiều thành phần có cùng từ loại và địa vị ngữ pháp bình đẳng ghép lại với nhau (như 哥哥姐姐: anh chị; 今天和明天: hôm nay và ngày mai; 有没有: có hay không).",
    "tips": "Các thành phần có thể đi liền nhau hoặc nối bằng liên từ 和.",
    "examples": [
      {
        "chinese": "哥哥姐姐、今天和明天、有没有",
        "pinyin": "Gē gē jiě jiě, jīn tiān hé míng tiān, yǒu méi yǒu",
        "vietnamese": "Anh trai và chị gái; hôm nay và ngày mai; có hay không có"
      }
    ]
  },
  {
    "id": "hsk1-g-29",
    "order": 29,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🧩",
    "titleVi": "Cụm từ chính phụ (Bổ nghĩa + Thành phần chính)",
    "titleZh": "偏正短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "基本结构类型",
    "structure": "Thành phần phụ (bổ nghĩa) + Thành phần chính",
    "explanationVi": "Gồm thành phần bổ nghĩa đứng trước làm rõ nghĩa cho từ chính đứng sau:\n• Định ngữ + Trung tâm ngữ: 好朋友 (bạn tốt), 我的书包 (cặp của tôi).\n• Trạng ngữ + Trung tâm ngữ: 很喜欢 (rất thích).",
    "tips": "Quy tắc bất di bất dịch của tiếng Trung: Thành phần tu sức, bổ nghĩa luôn đứng TRƯỚC từ được bổ nghĩa.",
    "examples": [
      {
        "chinese": "好朋友、我的书包、很喜欢",
        "pinyin": "Hǎo péng yǒu, wǒ de shū bāo, hěn xǐ huān",
        "vietnamese": "Bạn tốt; cặp sách của tôi; rất thích"
      }
    ]
  },
  {
    "id": "hsk1-g-30",
    "order": 30,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🧩",
    "titleVi": "Cụm từ động tân (Động từ + Tân ngữ)",
    "titleZh": "动宾短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "基本结构类型",
    "structure": "Động từ + Danh từ tân ngữ",
    "explanationVi": "Kết cấu phổ biến nhất diễn tả hành động tác động lên đối tượng cụ thể: 买东西 (mua đồ), 回学校 (về trường học), 去公司 (đến công ty).",
    "tips": "Rất nhiều động từ 2 âm tiết trong tiếng Trung thực chất là một cụm động tân (như 吃饭, 唱歌, 睡觉).",
    "examples": [
      {
        "chinese": "买东西、回学校、去公司",
        "pinyin": "Mǎi dōng xī, huí xué xiào, qù gōng sī",
        "vietnamese": "Mua đồ; về trường học; đến công ty"
      }
    ]
  },
  {
    "id": "hsk1-g-31",
    "order": 31,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🧩",
    "titleVi": "Cụm từ chủ vị (Chủ ngữ + Vị ngữ)",
    "titleZh": "主谓短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "基本结构类型",
    "structure": "Chủ thể + Hành động / Trạng thái",
    "explanationVi": "Cụm từ có cấu trúc như một câu nhỏ gồm Chủ ngữ và Vị ngữ (như 我们学习: chúng tôi học tập; 孩子高兴: đứa trẻ vui vẻ; 房间很大: phòng rất rộng). Có thể làm thành phần trong câu lớn hơn.",
    "tips": "Cụm chủ vị có thể đứng làm chủ ngữ, tân ngữ hoặc vị ngữ của một câu lớn.",
    "examples": [
      {
        "chinese": "我们学习、孩子高兴、房间很大",
        "pinyin": "Wǒ men xué xí, hái zi gāo xīng, fáng jiān hěn dà",
        "vietnamese": "Chúng tôi học tập; đứa trẻ vui vẻ; căn phòng rất lớn"
      }
    ]
  },
  {
    "id": "hsk1-g-32",
    "order": 32,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🔢",
    "titleVi": "Cụm từ số lượng (Số từ + Lượng từ)",
    "titleZh": "数量短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Số từ + Lượng từ",
    "explanationVi": "Sự kết hợp giữa số từ và lượng từ để định lượng sự vật (như 一杯: một ly; 两个: hai cái). Cụm này thường đứng trước danh từ làm định ngữ.",
    "tips": "Khi số từ là '1', trong một số ngữ cảnh khẩu ngữ có thể lược bỏ số 1 (như 喝杯茶 = 喝一杯茶).",
    "examples": [
      {
        "chinese": "一杯、两个",
        "pinyin": "Yī bēi, liǎng gè",
        "vietnamese": "Một ly (cốc); hai cái"
      }
    ]
  },
  {
    "id": "hsk1-g-33",
    "order": 33,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "📍",
    "titleVi": "Cụm giới tân (Giới từ + Tân ngữ)",
    "titleZh": "介宾短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Giới từ (在, 对, 和...) + Danh từ",
    "explanationVi": "Giới từ kết hợp với danh từ phía sau tạo thành cụm giới tân (như 在学校: ở trường; 对老师: với thầy giáo; 和朋友: cùng bạn bè). Cụm này chủ yếu làm trạng ngữ trong câu.",
    "tips": "Cụm giới tân thường đứng trước động từ để bổ nghĩa cho hành động.",
    "examples": [
      {
        "chinese": "在学校（学习）、对老师（说）、和朋友（说汉语）",
        "pinyin": "Zài xué xiào (xué xí), duì lǎo shī (shuō), hé péng yǒu (shuō hàn yǔ)",
        "vietnamese": "Học tập ở trường; nói với thầy giáo; nói tiếng Trung cùng bạn bè"
      }
    ]
  },
  {
    "id": "hsk1-g-34",
    "order": 34,
    "category": "phrases_elements",
    "categoryName": "Cấu trúc cụm từ",
    "categoryIcon": "🗺️",
    "titleVi": "Cụm từ phương vị (Danh từ + Từ chỉ phương vị)",
    "titleZh": "方位短语",
    "grammarType": "短语",
    "categoryType": "结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Danh từ + 上 / 下 / 里 / 外 / 前 / 后 / 边",
    "explanationVi": "Kết hợp một danh từ với từ chỉ phương vị để xác định không gian cụ thể (như 桌子上: trên bàn; 饭店里: trong nhà hàng; 椅子下边: dưới ghế).",
    "tips": "Cụm từ phương vị hoạt động ngữ pháp như một danh từ chỉ địa điểm nơi chốn.",
    "examples": [
      {
        "chinese": "桌子上、饭店里、椅子下边",
        "pinyin": "Zhuō zi shàng, fàn diàn lǐ, yǐ zi xià biān",
        "vietnamese": "Trên bàn; trong nhà hàng; phía dưới ghế"
      }
    ]
  },
  {
    "id": "hsk1-g-35",
    "order": 35,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Chủ ngữ trong câu tiếng Trung (Danh từ, Đại từ, Cụm từ)",
    "titleZh": "名词、代词或名词性短语作主语",
    "grammarType": "句子成分",
    "categoryType": "主语",
    "grammarDetail": "",
    "structure": "Chủ ngữ (Người/Sự vật được nói tới) + Vị ngữ",
    "explanationVi": "Chủ ngữ là thành phần đứng đầu câu chỉ người, sự vật hoặc hiện tượng được miêu tả, trần thuật:\n• Danh từ làm chủ ngữ: 电影很好看 (Phim rất hay).\n• Đại từ làm chủ ngữ: 她是老师 (Cô ấy là giáo viên).\n• Cụm từ làm chủ ngữ: 学习汉语很有意思 (Học tiếng Trung rất thú vị).",
    "tips": "Trong tiếng Trung, chủ ngữ thường là thông tin đã biết (xác định).",
    "examples": [
      {
        "chinese": "电影很好看。",
        "pinyin": "Diàn yǐng hěn hǎo kàn.",
        "vietnamese": "Bộ phim rất hay."
      },
      {
        "chinese": "她是老师。",
        "pinyin": "Tā shì lǎo shī.",
        "vietnamese": "Cô ấy là giáo viên."
      },
      {
        "chinese": "这本书多少钱？",
        "pinyin": "Zhè běn shū duō shǎo qián?",
        "vietnamese": "Quyển sách này bao nhiêu tiền?"
      }
    ]
  },
  {
    "id": "hsk1-g-36",
    "order": 36,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Vị ngữ là danh từ, số từ, thời gian (Không dùng 是)",
    "titleZh": "名词、代词、数词或数量短语作谓语",
    "grammarType": "句子成分",
    "categoryType": "谓语",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Thời gian / Ngày tháng / Tuổi tác / Giá cả",
    "explanationVi": "Trong câu diễn tả ngày tháng, thứ, thời gian, tuổi tác hoặc giá cả, vị ngữ có thể trực tiếp là một danh từ hoặc cụm số lượng mà KHÔNG cần dùng động từ '是':\n• 明天星期三 (Ngày mai thứ Tư).\n• 我今年二十岁 (Năm nay tôi 20 tuổi).\n• 苹果五块钱一斤 (Táo 5 đồng một cân).",
    "tips": "Khi phủ định thì bắt buộc phải thêm '不是' (như 明天不是星期三).",
    "examples": [
      {
        "chinese": "明天星期三。",
        "pinyin": "Míng tiān xīng qī sān.",
        "vietnamese": "Ngày mai là thứ Tư."
      },
      {
        "chinese": "那个饭店怎么样？",
        "pinyin": "Nà gè fàn diàn zěn me yàng?",
        "vietnamese": "Nhà hàng đó như thế nào?"
      },
      {
        "chinese": "我今年十二，我哥哥十五。",
        "pinyin": "Wǒ jīn nián shí èr, wǒ gē gē shí wǔ.",
        "vietnamese": "Năm nay tôi 12 tuổi, anh trai tôi 15 tuổi."
      },
      {
        "chinese": "这本书二十八块。",
        "pinyin": "Zhè běn shū èr shí bā kuài.",
        "vietnamese": "Quyển sách này giá 28 đồng."
      }
    ]
  },
  {
    "id": "hsk1-g-37",
    "order": 37,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Vị ngữ là động từ hoặc tính từ",
    "titleZh": "动词或动词性短语、形容词或形容词性短语作谓语",
    "grammarType": "句子成分",
    "categoryType": "谓语",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Động từ (vị ngữ động từ) | Chủ ngữ + Phó từ + Tính từ (vị ngữ tính từ)",
    "explanationVi": "Thành phần cốt lõi diễn đạt hành động hoặc trạng thái của chủ ngữ:\n• Vị ngữ động từ: 老师来了 (Thầy giáo đến rồi).\n• Vị ngữ tính từ: 今天很冷 (Hôm nay rất lạnh).",
    "tips": "Trong câu vị ngữ tính từ, tuyệt đối không dùng động từ '是' trước tính từ (không nói 今天是冷, mà nói 今天很冷).",
    "examples": [
      {
        "chinese": "老师来了。",
        "pinyin": "Lǎo shī lái le.",
        "vietnamese": "Thầy giáo đã đến rồi."
      },
      {
        "chinese": "哥哥去学校了。",
        "pinyin": "Gē gē qù xué xiào le.",
        "vietnamese": "Anh trai đã đến trường rồi."
      },
      {
        "chinese": "我的房间不大。",
        "pinyin": "Wǒ de fáng jiān bù dà.",
        "vietnamese": "Căn phòng của tôi không lớn."
      },
      {
        "chinese": "这个菜很好吃。",
        "pinyin": "Zhè gè cài hěn hǎo chī.",
        "vietnamese": "Món ăn này rất ngon."
      }
    ]
  },
  {
    "id": "hsk1-g-38",
    "order": 38,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Tân ngữ trong câu (Đối tượng tiếp nhận hành động)",
    "titleZh": "名词、代词或名词性短语作宾语",
    "grammarType": "句子成分",
    "categoryType": "宾语",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Động từ + Tân ngữ",
    "explanationVi": "Tân ngữ đứng sau động từ để biểu thị đối tượng chịu sự tác động của hành vi, động tác (như 我喝茶: tôi uống trà; 明天我去找你: ngày mai tôi tìm bạn).",
    "tips": "Tân ngữ có thể là danh từ, đại từ, hoặc cả một cụm động tân/cụm chủ vị.",
    "examples": [
      {
        "chinese": "我喝茶。",
        "pinyin": "Wǒ hē chá.",
        "vietnamese": "Tôi uống trà."
      },
      {
        "chinese": "明天我去找你。",
        "pinyin": "Míng tiān wǒ qù zhǎo nǐ.",
        "vietnamese": "Ngày mai tôi sẽ đến tìm bạn."
      },
      {
        "chinese": "我吃了二十个饺子。",
        "pinyin": "Wǒ chī le èr shí gè jiǎo zi.",
        "vietnamese": "Tôi đã ăn 20 cái sủi cảo."
      }
    ]
  },
  {
    "id": "hsk1-g-39",
    "order": 39,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Định ngữ trong câu (Thành phần bổ nghĩa cho Danh từ)",
    "titleZh": "名词性词语、形容词性短语、数量短语作定语",
    "grammarType": "句子成分",
    "categoryType": "定语",
    "grammarDetail": "",
    "structure": "Định ngữ + (的) + Danh từ trung tâm",
    "explanationVi": "Định ngữ đứng trước danh từ để hạn định hoặc miêu tả tính chất cho danh từ đó. Có thể là danh từ, tính từ, đại từ hoặc cụm từ (như 中文歌: bài hát tiếng Trung; 我的中文老师: thầy giáo tiếng Trung của tôi; 新买的衣服: quần áo mới mua).",
    "tips": "Nếu định ngữ là cụm động từ hoặc tính từ phức tạp, bắt buộc phải có trợ từ '的'.",
    "examples": [
      {
        "chinese": "她不会唱中文歌。",
        "pinyin": "Tā bù huì chàng zhōng wén gē.",
        "vietnamese": "Cô ấy không biết hát bài hát tiếng Trung."
      },
      {
        "chinese": "我的中文老师是中国人。",
        "pinyin": "Wǒ de zhōng wén lǎo shī shì zhōng guó rén.",
        "vietnamese": "Thầy giáo dạy tiếng Trung của tôi là người Trung Quốc."
      },
      {
        "chinese": "我想买便宜的手机。",
        "pinyin": "Wǒ xiǎng mǎi biàn yí de shǒu jī.",
        "vietnamese": "Tôi muốn mua điện thoại giá rẻ."
      },
      {
        "chinese": "桌子下边有一只小狗。",
        "pinyin": "Zhuō zi xià biān yǒu yī zhǐ xiǎo gǒu.",
        "vietnamese": "Dưới gầm bàn có một chú cún con."
      }
    ]
  },
  {
    "id": "hsk1-g-40",
    "order": 40,
    "category": "phrases_elements",
    "categoryName": "Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Trạng ngữ trong câu (Thời gian, Nơi chốn, Phương thức, Mức độ)",
    "titleZh": "副词、形容词作状语\r\n表示时间、处所的词语作状语",
    "grammarType": "句子成分",
    "categoryType": "状语",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Trạng ngữ (Thời gian/Nơi chốn/Phó từ) + Vị ngữ",
    "explanationVi": "Trạng ngữ đứng trước vị ngữ để nói rõ thời gian, địa điểm, cách thức hoặc mức độ diễn ra của hành động (như 我们明天去北京 - Chúng tôi ngày mai đi Bắc Kinh; 他在家看书 - Cậu ấy ở nhà đọc sách).",
    "tips": "Trạng ngữ chỉ thời gian có thể đứng trước hoặc ngay sau chủ ngữ, nhưng trạng ngữ chỉ nơi chốn luôn đứng sau chủ ngữ.",
    "examples": [
      {
        "chinese": "他们都是中国学生。",
        "pinyin": "Tā men dōu shì zhōng guó xué shēng.",
        "vietnamese": "Họ đều là học sinh Trung Quốc."
      },
      {
        "chinese": "你多吃一点儿。",
        "pinyin": "Nǐ duō chī yìdiǎnr.",
        "vietnamese": "Bạn ăn nhiều thêm một chút nhé."
      },
      {
        "chinese": "我们十二点下课。",
        "pinyin": "Wǒ men shí èr diǎn xià kè.",
        "vietnamese": "Chúng tôi 12 giờ tan học."
      },
      {
        "chinese": "我妈妈在医院工作。",
        "pinyin": "Wǒ mā mā zài yī yuàn gōng zuò.",
        "vietnamese": "Mẹ tôi làm việc ở bệnh viện."
      }
    ]
  },
  {
    "id": "hsk1-g-41",
    "order": 41,
    "category": "phrases_elements",
    "categoryName": "Bổ ngữ",
    "categoryIcon": "⏱️",
    "titleVi": "Bổ ngữ số lượng: Động từ + 一下 (yíxià - một lát, một chút)",
    "titleZh": "动词+动量补语",
    "grammarType": "句子成分",
    "categoryType": "补语",
    "grammarDetail": "数量补语1",
    "structure": "Động từ + 一下(儿)",
    "explanationVi": "Đứng ngay sau động từ để biểu thị hành động diễn ra trong thời gian rất ngắn, làm thử việc gì, hoặc làm cho ngữ khí câu trở nên nhẹ nhàng, lịch sự hơn (như 休息一下: nghỉ một lát; 请问一下: xin hỏi một chút).",
    "tips": "Mang sắc thái tương tự như hình thức lặp lại của động từ (休息一下 = 休息休息).",
    "examples": [
      {
        "chinese": "休息一下吧。",
        "pinyin": "Xiū xī yī xià ba.",
        "vietnamese": "Nghỉ ngơi một lát đi nào."
      },
      {
        "chinese": "请问一下，医院在哪儿？",
        "pinyin": "Qǐng wèn yī xià, yī yuàn zài nǎr?",
        "vietnamese": "Cho tôi hỏi một chút, bệnh viện ở đâu ạ?"
      },
      {
        "chinese": "我想看一下那件衣服。",
        "pinyin": "Wǒ xiǎng kàn yī xià nà jiàn yī fú.",
        "vietnamese": "Tôi muốn xem thử bộ quần áo kia một chút."
      },
      {
        "chinese": "请写一下你的名字。",
        "pinyin": "Qǐng xiě yī xià nǐ de míng zì.",
        "vietnamese": "Xin vui lòng viết tên của bạn một chút."
      }
    ]
  },
  {
    "id": "hsk1-g-42",
    "order": 42,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "📐",
    "titleVi": "Câu vị ngữ động từ (Chủ ngữ + Động từ + Tân ngữ)",
    "titleZh": "主谓句1：动词谓语句",
    "grammarType": "句子的类型",
    "categoryType": "句型",
    "grammarDetail": "单句",
    "structure": "S + V + O | Phủ định: S + 不/没 + V + O",
    "explanationVi": "Kiểu câu đơn phổ biến nhất trong tiếng Trung, dùng để diễn đạt hành vi, động tác của chủ thể (như 我买了一个面包: Tôi đã mua một chiếc bánh mì; 他今天不休息: Hôm nay anh ấy không nghỉ ngơi).",
    "tips": "Trật tự câu cơ bản giống tiếng Việt: Chủ ngữ - Động từ - Tân ngữ.",
    "examples": [
      {
        "chinese": "我买了一个面包。",
        "pinyin": "Wǒ mǎi le yī gè miàn bāo.",
        "vietnamese": "Tôi đã mua một chiếc bánh mì."
      },
      {
        "chinese": "他今天不休息。",
        "pinyin": "Tā jīn tiān bù xiū xī.",
        "vietnamese": "Hôm nay anh ấy không nghỉ ngơi."
      }
    ]
  },
  {
    "id": "hsk1-g-43",
    "order": 43,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "📐",
    "titleVi": "Câu vị ngữ tính từ (Chủ ngữ + Phó từ mức độ + Tính từ)",
    "titleZh": "主谓句2：形容词谓语句",
    "grammarType": "句子的类型",
    "categoryType": "句型",
    "grammarDetail": "单句",
    "structure": "Chủ ngữ + 很 / 非常 / 真 + Tính từ",
    "explanationVi": "Câu dùng tính từ làm vị ngữ để miêu tả hình dáng, tính chất, trạng thái của người hoặc vật. Giữa chủ ngữ và tính từ thường đi kèm phó từ mức độ như '很' để câu được cân đối, tự nhiên.",
    "tips": "Từ '很' trong câu vị ngữ tính từ đôi khi chỉ mang tính đệm ngữ pháp, không nhất thiết dịch là 'rất'.",
    "examples": [
      {
        "chinese": "今天天气很热。",
        "pinyin": "Jīn tiān tiān qì hěn rè.",
        "vietnamese": "Hôm nay thời tiết rất nóng."
      },
      {
        "chinese": "你女儿真漂亮！",
        "pinyin": "Nǐ nǚ ér zhēn piāo liàng!",
        "vietnamese": "Con gái của bạn thật là xinh đẹp!"
      }
    ]
  },
  {
    "id": "hsk1-g-44",
    "order": 44,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "📐",
    "titleVi": "Câu vị ngữ danh từ (Ngày tháng, Thứ, Giờ giấc)",
    "titleZh": "主谓句3：名词谓语句",
    "grammarType": "句子的类型",
    "categoryType": "句型",
    "grammarDetail": "单句",
    "structure": "Chủ ngữ + Danh từ / Cụm từ chỉ thời gian",
    "explanationVi": "Kiểu câu ngắn gọn trực tiếp dùng danh từ chỉ thời gian làm vị ngữ (như 今天星期一 - Hôm nay thứ Hai; 现在十二点半 - Bây giờ 12 giờ rưỡi).",
    "tips": "Không cần động từ '是' ở câu khẳng định, nhưng câu phủ định bắt buộc phải dùng '不是'.",
    "examples": [
      {
        "chinese": "今天星期一。",
        "pinyin": "Jīn tiān xīng qī yī.",
        "vietnamese": "Hôm nay là thứ Hai."
      },
      {
        "chinese": "现在十二点半。",
        "pinyin": "Xiàn zài shí èr diǎn bàn.",
        "vietnamese": "Bây giờ là mười hai giờ rưỡi."
      }
    ]
  },
  {
    "id": "hsk1-g-45",
    "order": 45,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "📐",
    "titleVi": "Câu không có chủ ngữ (Hiện tượng tự nhiên, Câu xã giao)",
    "titleZh": "非主谓句",
    "grammarType": "句子的类型",
    "categoryType": "句型",
    "grammarDetail": "单句",
    "structure": "Động từ / Cụm từ độc lập (Không có chủ ngữ)",
    "explanationVi": "Câu không cần chủ ngữ để diễn tả hiện tượng tự nhiên hoặc các câu giao tiếp cố định (như 下雨了: Mưa rồi; 对不起: Xin lỗi; 刮风了: Gió nổi rồi).",
    "tips": "Rất phổ biến trong đời sống khi chủ ngữ đã quá rõ ràng hoặc là hiện tượng tự nhiên khách quan.",
    "examples": [
      {
        "chinese": "对不起！",
        "pinyin": "Duì bù qǐ!",
        "vietnamese": "Xin lỗi!"
      },
      {
        "chinese": "下雨了。",
        "pinyin": "Xià yǔ le.",
        "vietnamese": "Trời mưa rồi."
      }
    ]
  },
  {
    "id": "hsk1-g-46",
    "order": 46,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "📐",
    "titleVi": "Câu trần thuật (Câu khẳng định & Câu phủ định)",
    "titleZh": "陈述句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "陈述句",
    "structure": "Khẳng định: S + V/Adj + O | Phủ định: S + 不/没 + V/Adj + O",
    "explanationVi": "Dùng để kể lại, trình bày một sự việc hoặc quan điểm khách quan. Dạng khẳng định dùng cấu trúc thông thường, dạng phủ định dùng phó từ '不' hoặc '没'.",
    "tips": "Cuối câu trần thuật luôn dùng dấu chấm câu chữ Hán (。).",
    "examples": [
      {
        "chinese": "她是我的朋友。",
        "pinyin": "Tā shì wǒ de péng yǒu.",
        "vietnamese": "Cô ấy là bạn của tôi."
      },
      {
        "chinese": "我不想吃面条儿。",
        "pinyin": "Wǒ bù xiǎng chī miàn tiáo ér.",
        "vietnamese": "Tôi không muốn ăn mì sợi."
      }
    ]
  },
  {
    "id": "hsk1-g-47",
    "order": 47,
    "category": "questions",
    "categoryName": "Các loại câu hỏi",
    "categoryIcon": "❓",
    "titleVi": "Câu hỏi đúng sai với trợ từ nghi vấn 吗 (ma)",
    "titleZh": "是非问句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "疑问句",
    "structure": "Câu trần thuật + 吗？",
    "explanationVi": "Cách đặt câu hỏi Có/Không (Yes/No Question) cơ bản nhất: Chỉ cần lấy một câu khẳng định hoặc phủ định hoàn chỉnh rồi thêm trợ từ '吗' vào cuối câu (như 他是中国人吗? - Anh ấy có phải là người Trung Quốc không?).",
    "tips": "Trả lời: Khẳng định dùng '是/对' hoặc lặp lại động từ; Phủ định dùng '不是' hoặc '没/不 + Động từ'.",
    "examples": [
      {
        "chinese": "他是中国人吗？",
        "pinyin": "Tā shì zhōng guó rén ma?",
        "vietnamese": "Anh ấy có phải là người Trung Quốc không?"
      }
    ]
  },
  {
    "id": "hsk1-g-48",
    "order": 48,
    "category": "questions",
    "categoryName": "Các loại câu hỏi",
    "categoryIcon": "❓",
    "titleVi": "Câu hỏi đặc biệt dùng đại từ nghi vấn (谁, 什么, 哪国人...)",
    "titleZh": "特指问句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "疑问句",
    "structure": "Thay đại từ nghi vấn vào đúng vị trí của thông tin cần hỏi",
    "explanationVi": "Dùng để hỏi thông tin cụ thể (ai, cái gì, ở đâu, người nước nào...). Vị trí từ trong câu hỏi giống hệt câu trả lời (như 他是哪国人? → 他是中国人).",
    "tips": "Tuyệt đối không được thêm trợ từ 吗 vào cuối câu hỏi đã có đại từ nghi vấn.",
    "examples": [
      {
        "chinese": "他是哪国人？",
        "pinyin": "Tā shì nǎ guó rén?",
        "vietnamese": "Anh ấy là người nước nào?"
      }
    ]
  },
  {
    "id": "hsk1-g-49",
    "order": 49,
    "category": "questions",
    "categoryName": "Các loại câu hỏi",
    "categoryIcon": "❓",
    "titleVi": "Câu hỏi chính phản (V + 不 + V / A + 不 + A)",
    "titleZh": "正反问句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "疑问句",
    "structure": "Động từ + 不/没 + Động từ | Tính từ + 不 + Tính từ",
    "explanationVi": "Hình thức ghép dạng khẳng định và phủ định của vị ngữ lại với nhau để tạo thành câu hỏi lựa chọn 'có... hay không' (như 你想不想学中文? - Bạn có muốn học tiếng Trung không?; 这件衣服贵不贵? - Áo này đắt không?).",
    "tips": "Câu hỏi chính phản đã có sẵn ý nghi vấn nên KHÔNG dùng thêm 吗 ở cuối câu.",
    "examples": [
      {
        "chinese": "你想不想学中文？",
        "pinyin": "Nǐ xiǎng bù xiǎng xué zhōng wén?",
        "vietnamese": "Bạn có muốn học tiếng Trung hay không?"
      },
      {
        "chinese": "你吃没吃晚饭？",
        "pinyin": "Nǐ chī méi chī wǎn fàn?",
        "vietnamese": "Bạn đã ăn bữa tối hay chưa?"
      },
      {
        "chinese": "同学们都来了没有？",
        "pinyin": "Tóng xué men dōu lái le méi yǒu?",
        "vietnamese": "Các bạn học sinh đã đến hết chưa?"
      },
      {
        "chinese": "今天冷不冷？",
        "pinyin": "Jīn tiān lěng bù lěng?",
        "vietnamese": "Hôm nay có lạnh không?"
      }
    ]
  },
  {
    "id": "hsk1-g-50",
    "order": 50,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "🙏",
    "titleVi": "Câu cầu khiến (Nhờ vả, khuyên bảo với 请, 吧, 不要)",
    "titleZh": "祈使句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "祈使句",
    "structure": "请 + S + V | V + 吧 | 不要 + V",
    "explanationVi": "Dùng để yêu cầu, khuyên bảo, mời mọc hoặc ra lệnh:\n• Lịch sự: Thêm '请' (như 您请坐: Mời ngài ngồi).\n• Rủ rê, đề nghị thân mật: Thêm '吧' (như 走吧: Đi thôi!).\n• Ngăn cấm, khuyên can: Dùng '不要' (như 请不要说话: Xin đừng nói chuyện).",
    "tips": "Dùng '请' ở đầu câu giúp câu nói trở nên vô cùng lịch thiệp và tôn trọng người nghe.",
    "examples": [
      {
        "chinese": "您请坐。",
        "pinyin": "Nín qǐng zuò.",
        "vietnamese": "Mời ngài ngồi ạ."
      },
      {
        "chinese": "走吧！",
        "pinyin": "Zǒu ba!",
        "vietnamese": "Đi thôi nào!"
      },
      {
        "chinese": "请大家不要说话！",
        "pinyin": "Qǐng dà jiā bù yào shuō huà!",
        "vietnamese": "Xin mọi người đừng nói chuyện!"
      }
    ]
  },
  {
    "id": "hsk1-g-51",
    "order": 51,
    "category": "sentence_types",
    "categoryName": "Các kiểu câu đơn",
    "categoryIcon": "❗",
    "titleVi": "Câu cảm thán: 太……了 (Quá...) & 真……啊 (Thật là...)",
    "titleZh": "感叹句",
    "grammarType": "句子的类型",
    "categoryType": "句类",
    "grammarDetail": "感叹句",
    "structure": "太 + Tính từ + 了！ | 真 + Tính từ + (啊)！",
    "explanationVi": "Dùng để bộc lộ cảm xúc khen ngợi, ngạc nhiên, thán phục hoặc than phiền:\n• 太……了: Biểu thị mức độ cực cao (như 太贵了: Đắt quá đi mất!).\n• 真……啊: Biểu thị cảm xúc chân thành (như 今天真冷啊: Hôm nay trời thật là lạnh!).",
    "tips": "Cuối câu cảm thán thường dùng dấu chấm than (!).",
    "examples": [
      {
        "chinese": "今天真冷啊！",
        "pinyin": "Jīn tiān zhēn lěng a!",
        "vietnamese": "Hôm nay trời thật là lạnh quá!"
      },
      {
        "chinese": "太贵了！",
        "pinyin": "Tài guì le!",
        "vietnamese": "Đắt quá đi mất!"
      }
    ]
  },
  {
    "id": "hsk1-g-52",
    "order": 52,
    "category": "special_patterns",
    "categoryName": "Cấu trúc câu chữ",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ 是: Phán đoán, định danh (A 是 B)",
    "titleZh": "表示等同或类属",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "“是”字句1",
    "structure": "Chủ ngữ + 是 + Tân ngữ | Phủ định: 主语 + 不是 + 宾语",
    "explanationVi": "Động từ hệ từ '是' dùng để biểu thị sự phán đoán, phân loại hoặc tương đương ('A là B') (như 我哥哥是大学生: Anh trai tôi là sinh viên; 她是不是老师?: Cô ấy có phải là giáo viên không?).",
    "tips": "Không dùng '是' trước tính từ đơn thuần (không nói 我是好, phải nói 我很好).",
    "examples": [
      {
        "chinese": "我哥哥是大学生。",
        "pinyin": "Wǒ gē gē shì dà xué shēng.",
        "vietnamese": "Anh trai tôi là sinh viên đại học."
      }
    ]
  },
  {
    "id": "hsk1-g-53",
    "order": 53,
    "category": "special_patterns",
    "categoryName": "Cấu trúc câu chữ",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ 有: Biểu thị sự sở hữu (Có / Không có)",
    "titleZh": "表示领有",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "“有”字句1",
    "structure": "Chủ ngữ + 有 + Tân ngữ | Phủ định: 主语 + 没有 + 宾语",
    "explanationVi": "Động từ '有' dùng để biểu thị mối quan hệ sở hữu ('ai có cái gì') (như 我有哥哥，没有姐姐: Tôi có anh trai, không có chị gái).",
    "tips": "Phủ định của '有' chỉ có thể là '没有' (không bao giờ có 不有).",
    "examples": [
      {
        "chinese": "我有哥哥，没有姐姐。",
        "pinyin": "Wǒ yǒu gē gē, méi yǒu jiě jiě.",
        "vietnamese": "Tôi có anh trai, không có chị gái."
      }
    ]
  },
  {
    "id": "hsk1-g-54",
    "order": 54,
    "category": "special_patterns",
    "categoryName": "Câu tồn hiện",
    "categoryIcon": "🏢",
    "titleVi": "Câu tồn hiện với 是 (Nơi chốn + 是 + Sự vật xác định)",
    "titleZh": "所处+是+名词",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "存现句1",
    "structure": "Từ chỉ nơi chốn + 是 + Danh từ",
    "explanationVi": "Dùng để nói rõ tại một địa điểm nào đó chính là sự vật gì (khẳng định địa điểm duy nhất hoặc xác định) (như 前边是电影院: Phía trước là rạp chiếu phim; 超市后边是一家饭店: Sau siêu thị là một nhà hàng).",
    "tips": "Chủ ngữ của câu tồn hiện bắt buộc phải là một từ/cụm từ chỉ địa điểm, nơi chốn.",
    "examples": [
      {
        "chinese": "前边是不是电影院？",
        "pinyin": "Qián biān shì bù shì diàn yǐng yuàn?",
        "vietnamese": "Phía trước có phải là rạp chiếu phim không?"
      },
      {
        "chinese": "超市后边是一家饭店。",
        "pinyin": "Chāo shì hòu biān shì yī jiā fàn diàn.",
        "vietnamese": "Phía sau siêu thị là một nhà hàng."
      }
    ]
  },
  {
    "id": "hsk1-g-55",
    "order": 55,
    "category": "special_patterns",
    "categoryName": "Câu tồn hiện",
    "categoryIcon": "🏡",
    "titleVi": "Câu tồn hiện với 有 (Nơi chốn + 有 + Số lượng + Sự vật)",
    "titleZh": "处所+有+数量短语+名词",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "存现句1",
    "structure": "Từ chỉ nơi chốn + 有 + (Số từ + Lượng từ) + Danh từ",
    "explanationVi": "Dùng để miêu tả sự tồn tại của người hoặc sự vật tại một địa điểm nhất định ('Ở đâu có cái gì') (như 学校外边有一家书店: Bên ngoài trường có một hiệu sách; 桌子上有一本中文书: Trên bàn có một quyển sách tiếng Trung).",
    "tips": "Khác với câu chữ 有 sở hữu (ai có cái gì), câu tồn hiện nhấn mạnh sự tồn tại ở một không gian địa điểm.",
    "examples": [
      {
        "chinese": "学校外边有一家书店。",
        "pinyin": "Xué xiào wài biān yǒu yī jiā shū diàn.",
        "vietnamese": "Bên ngoài trường học có một hiệu sách."
      },
      {
        "chinese": "桌子上有一本中文书。",
        "pinyin": "Zhuō zi shàng yǒu yī běn zhōng wén shū.",
        "vietnamese": "Trên bàn có một quyển sách tiếng Trung."
      }
    ]
  },
  {
    "id": "hsk1-g-56",
    "order": 56,
    "category": "special_patterns",
    "categoryName": "Câu liên động",
    "categoryIcon": "🎯",
    "titleVi": "Câu liên động 1: Hành động mục đích (Đi đâu để làm gì)",
    "titleZh": "前后动作先后发生，后一动作是前一动作的目的",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "连动句1",
    "structure": "Chủ ngữ + 去/来 + Địa điểm + Động từ 2 (Mục đích)",
    "explanationVi": "Câu có hai hành động liên tiếp diễn ra, trong đó hành động thứ hai là mục đích của hành động thứ nhất (như 我来中国学汉语: Tôi đến Trung Quốc để học tiếng Hán; 晚上我们去电影院看电影: Tối nay chúng tôi đến rạp để xem phim).",
    "tips": "Động từ đầu tiên thường là 来 (đến), 去 (đi), 到 (đến).",
    "examples": [
      {
        "chinese": "我来中国学汉语。",
        "pinyin": "Wǒ lái zhōng guó xué hàn yǔ.",
        "vietnamese": "Tôi đến Trung Quốc để học tiếng Hán."
      },
      {
        "chinese": "晚上我们去电影院看电影。",
        "pinyin": "Wǎn shàng wǒ men qù diàn yǐng yuàn kàn diàn yǐng.",
        "vietnamese": "Tối nay chúng tôi đến rạp chiếu phim để xem phim."
      }
    ]
  },
  {
    "id": "hsk1-g-57",
    "order": 57,
    "category": "special_patterns",
    "categoryName": "Câu liên động",
    "categoryIcon": "🚗",
    "titleVi": "Câu liên động 2: Hành động phương thức (Làm gì bằng cách nào)",
    "titleZh": "前一动作是后一动作的方式",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "连动句1",
    "structure": "Chủ ngữ + 坐/开/骑... (Phương thức) + Động từ 2",
    "explanationVi": "Hành động thứ nhất diễn tả phương tiện hoặc phương thức để thực hiện hành động thứ hai (như 我坐飞机去上海: Tôi đi Thượng Hải bằng máy bay; 爸爸每天开车上班: Bố lái xe đi làm mỗi ngày).",
    "tips": "Phương tiện di chuyển luôn được nói trước hành động đích đến (ngược lại với tiếng Việt: đi Thượng Hải bằng máy bay).",
    "examples": [
      {
        "chinese": "我坐飞机去上海。",
        "pinyin": "Wǒ zuò fēi jī qù shàng hǎi.",
        "vietnamese": "Tôi đi Thượng Hải bằng máy bay."
      },
      {
        "chinese": "爸爸每天开车上班。",
        "pinyin": "Bà bà měi tiān kāi chē shàng bān.",
        "vietnamese": "Bố lái xe ô tô đi làm mỗi ngày."
      }
    ]
  },
  {
    "id": "hsk1-g-58",
    "order": 58,
    "category": "special_patterns",
    "categoryName": "Câu đặc biệt",
    "categoryIcon": "🎁",
    "titleVi": "Câu hai tân ngữ (Chủ ngữ + Động từ + Tân ngữ gián tiếp + Tân ngữ trực tiếp)",
    "titleZh": "主语+动词+宾语1+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "特殊句型",
    "grammarDetail": "双宾语句1",
    "structure": "Chủ ngữ + 给 / 问 / 教... + Người (O1) + Vật/Việc (O2)",
    "explanationVi": "Một số động từ có thể mang liền hai tân ngữ: Tân ngữ 1 chỉ người nhận (gián tiếp), Tân ngữ 2 chỉ sự vật được chuyển giao (trực tiếp) (như 老师给我一本书: Thầy giáo cho tôi một quyển sách; 我问你一个问题: Tôi hỏi bạn một câu hỏi).",
    "tips": "Người nhận luôn đứng trước vật được cho/tặng/hỏi.",
    "examples": [
      {
        "chinese": "老师给我一本书。",
        "pinyin": "Lǎo shī gěi wǒ yī běn shū.",
        "vietnamese": "Thầy giáo cho tôi một quyển sách."
      },
      {
        "chinese": "我问你一个问题。",
        "pinyin": "Wǒ wèn nǐ yī gè wèn tí.",
        "vietnamese": "Tôi hỏi bạn một câu hỏi."
      }
    ]
  },
  {
    "id": "hsk1-g-59",
    "order": 59,
    "category": "sentence_types",
    "categoryName": "Câu phức",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức không dùng từ nối (Hai phân câu liên hệ ý nghĩa)",
    "titleZh": "不用关联词语的复句",
    "grammarType": "句子的类型",
    "categoryType": "复句",
    "grammarDetail": "不用关联词语的复句",
    "structure": "Phân câu 1，Phân câu 2",
    "explanationVi": "Hai phân câu đặt cạnh nhau, ngăn cách bằng dấu phẩy mà không cần dùng liên từ nối, người nghe vẫn hiểu được mối quan hệ logic qua ngữ cảnh (như 这是我哥哥，他学习中文; 外面冷，多穿衣服: Bên ngoài lạnh, mặc thêm nhiều áo vào).",
    "tips": "Cách diễn đạt này rất phổ biến trong khẩu ngữ tiếng Trung hàng ngày.",
    "examples": [
      {
        "chinese": "这是我哥哥，他学习中文。",
        "pinyin": "Zhè shì wǒ gē gē, tā xué xí zhōng wén.",
        "vietnamese": "Đây là anh trai tôi, anh ấy học tiếng Trung."
      },
      {
        "chinese": "我有一个姐姐，没有妹妹。",
        "pinyin": "Wǒ yǒu yī gè jiě jiě, méi yǒu mèi mèi.",
        "vietnamese": "Tôi có một người chị gái, không có em gái."
      },
      {
        "chinese": "她今天生病了，不能上课。",
        "pinyin": "Tā jīn tiān shēng bìng le, bù néng shàng kè.",
        "vietnamese": "Hôm nay cô ấy bị ốm rồi, không thể đi học."
      },
      {
        "chinese": "上午去，下午去？你说。",
        "pinyin": "Shàng wǔ qù, xià wǔ qù? nǐ shuō.",
        "vietnamese": "Đi buổi sáng hay đi buổi chiều? Bạn nói xem."
      }
    ]
  },
  {
    "id": "hsk1-g-60",
    "order": 60,
    "category": "sentence_types",
    "categoryName": "Câu phức",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức đẳng lập với 也 (……，也……)",
    "titleZh": "……，也……",
    "grammarType": "句子的类型",
    "categoryType": "复句",
    "grammarDetail": "并列复句",
    "structure": "Mệnh đề 1，Mệnh đề 2 + 也 + V/Adj",
    "explanationVi": "Dùng để biểu thị hai sự việc hoặc hai đối tượng có cùng chung một tính chất, hành động tương đồng ('cũng') (như 我喜欢唱歌，我弟弟也喜欢唱歌: Tôi thích hát, em trai tôi cũng thích hát; 饺子很好吃，也很便宜: Sủi cảo rất ngon, cũng rất rẻ).",
    "tips": "Phó từ '也' đứng ngay sau chủ ngữ của phân câu thứ hai và trước động từ/tính từ.",
    "examples": [
      {
        "chinese": "我喜欢唱歌，我弟弟也喜欢唱歌。",
        "pinyin": "Wǒ xǐ huān chàng gē, wǒ dì dì yě xǐ huān chàng gē.",
        "vietnamese": "Tôi thích ca hát, em trai tôi cũng thích ca hát."
      },
      {
        "chinese": "这家饭店的饺子很好吃，也很便宜。",
        "pinyin": "Zhè jiā fàn diàn de jiǎo zi hěn hǎo chī, yě hěn biàn yí.",
        "vietnamese": "Sủi cảo của nhà hàng này rất ngon, cũng rất rẻ."
      }
    ]
  },
  {
    "id": "hsk1-g-61",
    "order": 61,
    "category": "sentence_types",
    "categoryName": "Câu phức",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến với 还 (……，还……)",
    "titleZh": "……，还……",
    "grammarType": "句子的类型",
    "categoryType": "复句",
    "grammarDetail": "并列复句",
    "structure": "Mệnh đề 1，(Mệnh đề 2) + 还 + V/Adj",
    "explanationVi": "Biểu thị mức độ tăng tiến hoặc bổ sung thêm thông tin ('lại còn, thêm vào đó') (như 这个房间很大，还很漂亮: Căn phòng này rất rộng, lại còn rất đẹp nữa; 我会说英语，还会说汉语: Tôi biết nói tiếng Anh, lại còn biết nói cả tiếng Hán).",
    "tips": "'还' nhấn mạnh thông tin được thêm vào ngoài những gì đã nêu ở phân câu trước.",
    "examples": [
      {
        "chinese": "这个房间很大，还很漂亮。",
        "pinyin": "Zhè gè fáng jiān hěn dà, hái hěn piāo liàng.",
        "vietnamese": "Căn phòng này rất rộng, lại còn rất đẹp nữa."
      },
      {
        "chinese": "我会说英语，还会说汉语。",
        "pinyin": "Wǒ huì shuō yīng yǔ, hái huì shuō hàn yǔ.",
        "vietnamese": "Tôi biết nói tiếng Anh, lại còn biết nói cả tiếng Hán nữa."
      }
    ]
  },
  {
    "id": "hsk1-g-62",
    "order": 62,
    "category": "particles_aspects",
    "categoryName": "Thời thể của động tác",
    "categoryIcon": "🏁",
    "titleVi": "Thể hoàn thành với trợ từ động thái 了1 (V + 了)",
    "titleZh": "用动态助词“了1”表示",
    "grammarType": "动作的态",
    "categoryType": "",
    "grammarDetail": "完成态",
    "structure": "Động từ + 了 + Số lượng + Danh từ",
    "explanationVi": "Dùng '了1' đặt ngay sau động từ để biểu thị hành động đã hoàn tất trong thực tế, thường có tân ngữ mang số lượng cụ thể (như 你学了多少个汉字?: Bạn đã học bao nhiêu chữ Hán rồi?; 我买了一些苹果: Tôi đã mua một ít táo).",
    "tips": "Khi không có tân ngữ hoặc tân ngữ đơn giản, thường đi kèm với 了2 ở cuối câu.",
    "examples": [
      {
        "chinese": "你学了多少个汉字？",
        "pinyin": "Nǐ xué le duō shǎo gè hàn zì?",
        "vietnamese": "Bạn đã học được bao nhiêu chữ Hán rồi?"
      },
      {
        "chinese": "我买了一些苹果。",
        "pinyin": "Wǒ mǎi le yī xiē píng guǒ.",
        "vietnamese": "Tôi đã mua một ít táo."
      }
    ]
  },
  {
    "id": "hsk1-g-63",
    "order": 63,
    "category": "particles_aspects",
    "categoryName": "Thời thể của động tác",
    "categoryIcon": "🔄",
    "titleVi": "Thể biến đổi trạng thái với trợ từ ngữ khí 了2 (Cuối câu)",
    "titleZh": "用语气助词“了2”表示",
    "grammarType": "动作的态",
    "categoryType": "",
    "grammarDetail": "变化态",
    "structure": "Câu / Tình huống mới + 了",
    "explanationVi": "Đặt ở cuối câu để biểu thị một tình huống mới đã xuất hiện, có sự thay đổi so với trước đây ('đã... rồi') (như 八点了，起床吧: Tám giờ rồi, dậy thôi; 她病了: Cô ấy bị ốm rồi).",
    "tips": "Khác với 了1 (chỉ hành động đã làm xong), 了2 biểu thị tình hình đã đổi khác (như 天气冷了: Trời đã trở lạnh rồi).",
    "examples": [
      {
        "chinese": "八点了，起床吧。",
        "pinyin": "Bā diǎn le, qǐ chuáng ba.",
        "vietnamese": "Tám giờ rồi, dậy thôi nào."
      },
      {
        "chinese": "她病了，在家休息呢。",
        "pinyin": "Tā bìng le, zài jiā xiū xī ne.",
        "vietnamese": "Cô ấy bị ốm rồi, đang nghỉ ngơi ở nhà."
      }
    ]
  },
  {
    "id": "hsk1-g-64",
    "order": 64,
    "category": "particles_aspects",
    "categoryName": "Thời thể của động tác",
    "categoryIcon": "⏳",
    "titleVi": "Thể đang tiếp diễn: 在 / 正在 + Động từ",
    "titleZh": "……在/正在+动词",
    "grammarType": "动作的态",
    "categoryType": "",
    "grammarDetail": "进行态",
    "structure": "Chủ ngữ + 在 / 正在 + Động từ + (Tân ngữ)",
    "explanationVi": "Dùng phó từ '在' hoặc '正在' trước động từ để biểu thị hành động đang diễn ra tại một thời điểm nhất định ('đang làm gì') (như 同学们正在上课: Các bạn học sinh đang trong giờ học).",
    "tips": "'正在' nhấn mạnh thời điểm chính xác hành động đang xảy ra, '在' nhấn mạnh trạng thái tiếp diễn.",
    "examples": [
      {
        "chinese": "同学们在/正在上课。",
        "pinyin": "Tóng xué men zài / zhèng zài shàng kè.",
        "vietnamese": "Các bạn học sinh đang trong giờ học."
      }
    ]
  },
  {
    "id": "hsk1-g-65",
    "order": 65,
    "category": "particles_aspects",
    "categoryName": "Thời thể của động tác",
    "categoryIcon": "⏳",
    "titleVi": "Thể đang tiếp diễn kết hợp: 在/正在 + Động từ + 呢",
    "titleZh": "……在/正在+动词……+呢",
    "grammarType": "动作的态",
    "categoryType": "",
    "grammarDetail": "进行态",
    "structure": "Chủ ngữ + 在 / 正在 + Động từ + 呢",
    "explanationVi": "Sự kết hợp giữa phó từ '在/正在' ở trước và trợ từ ngữ khí '呢' ở cuối câu giúp câu mang ngữ khí đàm thoại sinh động, biểu thị hành động đang diễn ra một cách mạnh mẽ (như 王老师正在打电话呢: Thầy Vương đang gọi điện thoại đấy).",
    "tips": "Có thể dùng cả cặp '正在……呢' hoặc chỉ dùng một trong hai từ.",
    "examples": [
      {
        "chinese": "王老师在/正在打电话呢。",
        "pinyin": "Wáng lǎo shī zài / zhèng zài dǎ diàn huà ne.",
        "vietnamese": "Thầy Vương đang gọi điện thoại đấy."
      }
    ]
  },
  {
    "id": "hsk1-g-66",
    "order": 66,
    "category": "particles_aspects",
    "categoryName": "Thời thể của động tác",
    "categoryIcon": "⏳",
    "titleVi": "Thể đang tiếp diễn rút gọn: Động từ + 呢 (ở cuối câu)",
    "titleZh": "……呢",
    "grammarType": "动作的态",
    "categoryType": "",
    "grammarDetail": "进行态",
    "structure": "Chủ ngữ + Động từ + (Tân ngữ) + 呢",
    "explanationVi": "Chỉ cần dùng trợ từ ngữ khí '呢' ở cuối câu để báo hiệu hành động đang diễn ra, thường dùng trong câu đáp lại câu hỏi hoặc câu giải thích (như 我没看电视，学习呢: Tôi không xem tivi đâu, đang học bài đấy chứ).",
    "tips": "Cách nói khẩu ngữ rất tự nhiên, ngắn gọn và thân mật của người bản xứ.",
    "examples": [
      {
        "chinese": "我没看电视，学习呢。",
        "pinyin": "Wǒ méi kàn diàn shì, xué xí ne.",
        "vietnamese": "Tôi không xem tivi đâu, đang học bài đấy chứ."
      }
    ]
  },
  {
    "id": "hsk1-g-67",
    "order": 67,
    "category": "practical_expressions",
    "categoryName": "Cách nói thực tế",
    "categoryIcon": "💰",
    "titleVi": "Cách biểu đạt số tiền và giá cả (块, 元, 毛, 角, 分)",
    "titleZh": "钱数表示法",
    "grammarType": "特殊表达法",
    "categoryType": "数的表达法",
    "grammarDetail": "",
    "structure": "Số từ + 块 / 元 (đồng) + Số từ + 毛 / 角 (hào)",
    "explanationVi": "Cách nói tiền tệ trong tiếng Trung:\n• Khẩu ngữ dùng: 块 (kuài - đồng), 毛 (máo - hào), 分 (fēn - xu).\n• Văn viết dùng: 元 (yuán), 角 (jiǎo), 分 (fēn).\nVí dụ: 这本书二十四块 (Quyển sách này 24 đồng/tệ); 包子三块一个 (Bánh bao 3 đồng một cái).",
    "tips": "Khi số tiền là số chẵn, cuối câu có thể thêm từ '钱' (như 二十四块钱).",
    "examples": [
      {
        "chinese": "这本书二十四块（钱）。",
        "pinyin": "Zhè běn shū èr shí sì kuài (qián).",
        "vietnamese": "Quyển sách này giá 24 đồng (tệ)."
      },
      {
        "chinese": "包子三块（钱）一个。",
        "pinyin": "Bāo zi sān kuài (qián) yī gè.",
        "vietnamese": "Bánh bao 3 đồng một chiếc."
      }
    ]
  },
  {
    "id": "hsk1-g-68",
    "order": 68,
    "category": "practical_expressions",
    "categoryName": "Cách nói thực tế",
    "categoryIcon": "🥇",
    "titleVi": "Cách biểu đạt số thứ tự (第 + Số từ: 第一, 第二...)",
    "titleZh": "序数表达法1：第+数词",
    "grammarType": "特殊表达法",
    "categoryType": "数的表达法",
    "grammarDetail": "",
    "structure": "第 + Số từ + (Lượng từ) + Danh từ",
    "explanationVi": "Để biến số đếm thành số thứ tự, chỉ cần thêm chữ '第' (dì) vào phía trước:\n• 第一 (dì-yī): Thứ nhất, đầu tiên\n• 第二 (dì-èr): Thứ hai\n• 第一课 (dì-yī kè): Bài số 1\n• 第一本书 (dì-yī běn shū): Quyển sách đầu tiên.",
    "tips": "Phân biệt: '两个' (2 cái - số lượng) khác hoàn toàn với '第二个' (cái thứ 2 - thứ tự).",
    "examples": [
      {
        "chinese": "今天我们学习第六课。",
        "pinyin": "Jīn tiān wǒ men xué xí dì liù kè.",
        "vietnamese": "Hôm nay chúng ta học bài thứ sáu (Bài 6)."
      },
      {
        "chinese": "第一本是我的书，第二本是她的书。",
        "pinyin": "Dì yī běn shì wǒ de shū, dì èr běn shì tā de shū.",
        "vietnamese": "Quyển thứ nhất là sách của tôi, quyển thứ hai là sách của cô ấy."
      }
    ]
  },
  {
    "id": "hsk1-g-69",
    "order": 69,
    "category": "practical_expressions",
    "categoryName": "Cách nói thực tế",
    "categoryIcon": "📅",
    "titleVi": "Cách nói ngày, tháng, năm và thứ trong tuần",
    "titleZh": "年、月、日、星期表示法",
    "grammarType": "特殊表达法",
    "categoryType": "时间表示法",
    "grammarDetail": "",
    "structure": "Năm + 月 (Tháng) + 日/号 (Ngày) + 星期 (Thứ)",
    "explanationVi": "Quy tắc thời gian tiếng Trung luôn đi từ LỚN ĐẾN NHỎ (Năm → Tháng → Ngày → Thứ):\n• Năm: Đọc từng con số một + 年 (như 2022年 đọc là èr líng èr èr nián).\n• Tháng: Số 1 đến 12 + 月 (như 九月: tháng 9).\n• Ngày: Khẩu ngữ dùng 号, văn viết dùng 日 (như 十五号: ngày 15).\n• Thứ: 星期 + 1 đến 6 (Thứ 2 là 星期一... Chủ nhật là 星期天/星期日).",
    "tips": "Lưu ý: Tiếng Trung '星期一' là Thứ Hai trong tiếng Việt (số lệch 1 đơn vị).",
    "examples": [
      {
        "chinese": "2022年2月4日",
        "pinyin": "2 0 2 2 nián 2 yuè 4 rì",
        "vietnamese": "Ngày 4 tháng 2 năm 2022"
      },
      {
        "chinese": "九月十五号、五月一日",
        "pinyin": "Jiǔ yuè shí wǔ hào, wǔ yuè yī rì",
        "vietnamese": "Ngày 15 tháng 9; ngày 1 tháng 5"
      },
      {
        "chinese": "星期一、星期二、星期三、星期四、星期五、星期六、星期日/星期天",
        "pinyin": "Xīng qī yī, xīng qī èr, xīng qī sān, xīng qī sì, xīng qī wǔ, xīng qī liù, xīng qī rì / xīng qī tiān",
        "vietnamese": "Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật"
      }
    ]
  },
  {
    "id": "hsk1-g-70",
    "order": 70,
    "category": "practical_expressions",
    "categoryName": "Cách nói thực tế",
    "categoryIcon": "⏰",
    "titleVi": "Cách biểu đạt giờ giấc (Giờ, Phút, Rưỡi: 点, 分, 半)",
    "titleZh": "钟点表示法",
    "grammarType": "特殊表达法",
    "categoryType": "时间表示法",
    "grammarDetail": "",
    "structure": "Số giờ + 点 (Giờ) + (Số phút + 分) | Số giờ + 点半 (Giờ rưỡi)",
    "explanationVi": "Cách nói giờ phút trong tiếng Trung:\n• Giờ đúng: Số + 点 (như 两点: 2 giờ đúng - chú ý dùng 两点 không dùng 二点).\n• Giờ phút: Giờ + 点 + Phút + 分 (như 九点二十: 9 giờ 20 phút).\n• Giờ rưỡi: Giờ + 点半 (như 十点半: 10 giờ rưỡi).\n• Số phút lẻ nhỏ hơn 10 thì chèn thêm '零' (như 七点零五: 7 giờ 05 phút).",
    "tips": "Nhớ dùng '两点' cho 2 giờ, tuyệt đối không nói '二点'.",
    "examples": [
      {
        "chinese": "两点、七点零五、九点二十（分）、十点半",
        "pinyin": "Liǎng diǎn, qī diǎn líng wǔ, jiǔ diǎn èr shí (fēn), shí diǎn bàn",
        "vietnamese": "2 giờ đúng; 7 giờ 5 phút; 9 giờ 20 phút; 10 giờ rưỡi"
      }
    ]
  }
];
