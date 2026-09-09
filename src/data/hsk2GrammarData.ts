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

export const HSK2_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "verbs_adjectives",
    "name": "Động từ & Tính từ",
    "icon": "⚡"
  },
  {
    "id": "complements",
    "name": "Các loại Bổ ngữ",
    "icon": "🎯"
  },
  {
    "id": "comparisons",
    "name": "Câu so sánh",
    "icon": "⚖️"
  },
  {
    "id": "particles_aspects",
    "name": "Trợ từ & Thời thể",
    "icon": "🛡️"
  },
  {
    "id": "adverbs",
    "name": "Phó từ các loại",
    "icon": "🔥"
  },
  {
    "id": "prepositions_conjunctions",
    "name": "Giới từ & Liên từ",
    "icon": "🔗"
  },
  {
    "id": "sentence_patterns",
    "name": "Cấu trúc câu đặc biệt",
    "icon": "⭐"
  },
  {
    "id": "special_expressions",
    "name": "Cách nói & Ước lượng",
    "icon": "🕒"
  },
  {
    "id": "questions_imperatives",
    "name": "Câu hỏi & Mệnh lệnh",
    "icon": "❓"
  },
  {
    "id": "pronouns_words",
    "name": "Đại từ, Lượng từ & Phương vị",
    "icon": "📍"
  }
];

export const HSK2_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk2-g-01",
    "order": 1,
    "category": "pronouns_words",
    "categoryName": "Phương vị từ & Hậu tố",
    "categoryIcon": "📍",
    "titleVi": "Hậu tố phương vị: 面 (Miàn - Phía / Mặt)",
    "titleZh": "面",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Danh từ / Từ chỉ phương hướng + 面 (miàn)",
    "explanationVi": "Từ '面' (diện/mặt) đứng sau các từ chỉ phương hướng hoặc danh từ để tạo thành từ chỉ phương vị hoàn chỉnh (ví dụ: 前面 - phía trước, 后面 - phía sau, 里面 - bên trong, 外面 - bên ngoài, 上面 - phía trên, 下面 - phía dưới).",
    "tips": "Có thể dùng thay thế cho '边' (biān) như 前边, 后边 trong khẩu ngữ thường ngày.",
    "examples": [
      {
        "chinese": "我想坐在教室前面。",
        "pinyin": "Wǒ xiǎng zuò zài jiào shì qián miàn.",
        "vietnamese": "Tôi muốn ngồi ở phía trước lớp học."
      },
      {
        "chinese": "你的书包里面有什么？",
        "pinyin": "Nǐ de shū bāo lǐ miàn yǒu shén me?",
        "vietnamese": "Bên trong cặp sách của bạn có cái gì?"
      },
      {
        "chinese": "学校后面有一家超市。",
        "pinyin": "Xué xiào hòu miàn yǒu yī jiā chāo shì.",
        "vietnamese": "Phía sau trường học có một siêu thị."
      }
    ]
  },
  {
    "id": "hsk2-g-02",
    "order": 2,
    "category": "pronouns_words",
    "categoryName": "Phương vị từ & Hậu tố",
    "categoryIcon": "📍",
    "titleVi": "Phương vị từ Trái - Phải: 左 (Zuǒ) & 右 (Yòu)",
    "titleZh": "左、右",
    "grammarType": "词类",
    "categoryType": "方位名词",
    "grammarDetail": "方位名词",
    "structure": "左边 (zuǒbian - bên trái) | 右边 (yòubian - bên phải)",
    "explanationVi": "Biểu thị vị trí phương hướng bên trái (左 / 左边) hoặc bên phải (右 / 右边). Khi bổ nghĩa cho danh từ cần thêm 的 hoặc ghép trực tiếp: 左边那件 (chiếc bên trái kia).",
    "tips": "Nhớ quy tắc: Nam tả nữ hữu (男左女右 - nán zuǒ nǚ yòu).",
    "examples": [
      {
        "chinese": "左边那件多少钱？",
        "pinyin": "Zuǒ biān nà jiàn duō shǎo qián?",
        "vietnamese": "Chiếc áo bên trái kia bao nhiêu tiền?"
      },
      {
        "chinese": "你右边那个人是谁？",
        "pinyin": "Nǐ yòu biān nà gè rén shì shuí?",
        "vietnamese": "Người ở bên phải bạn là ai vậy?"
      }
    ]
  },
  {
    "id": "hsk2-g-03",
    "order": 3,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Trùng điệp Động từ: AA, A一A, A了A, ABAB",
    "titleZh": "AA、A一A、A了A、ABAB",
    "grammarType": "词类",
    "categoryType": "动词重叠",
    "grammarDetail": "动词重叠",
    "structure": "Đơn âm: AA / A一A / A了A (看看, 看一看, 看了看) | Song âm: ABAB (休息休息, 运动运动)",
    "explanationVi": "Lặp lại động từ nhằm biểu thị:\n1. Hành động diễn ra trong thời gian ngắn ngủi.\n2. Thử làm một việc gì đó (làm thử xem sao).\n3. Làm cho ngữ khí câu trở nên nhẹ nhàng, thân mật, tự nhiên hơn.",
    "tips": "Động từ ly hợp (như 游泳, 跳舞) khi trùng điệp chỉ lặp lại chữ đầu: AAB (游游泳, 跳跳舞, 跑跑步).",
    "examples": [
      {
        "chinese": "那本书能给我看看吗？",
        "pinyin": "Nà běn shū néng gěi wǒ kàn kàn ma?",
        "vietnamese": "Quyển sách đó có thể cho tôi xem một chút được không?"
      },
      {
        "chinese": "请大家说一说自己的爱好。",
        "pinyin": "Qǐng dà jiā shuō yī shuō zì jǐ de ài hǎo.",
        "vietnamese": "Mời mọi người nói một chút về sở thích của bản thân."
      },
      {
        "chinese": "我尝了尝，觉得很好吃。",
        "pinyin": "Wǒ cháng le cháng, jué dé hěn hǎo chī.",
        "vietnamese": "Tôi nếm thử một chút, thấy rất ngon."
      },
      {
        "chinese": "喝杯茶，休息休息吧。",
        "pinyin": "Hē bēi chá, xiū xī xiū xī ba.",
        "vietnamese": "Uống ly trà, nghỉ ngơi một chút đi nào."
      }
    ]
  },
  {
    "id": "hsk2-g-04",
    "order": 4,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Động từ năng nguyện: 可能 (Kěnéng - Có lẽ, có thể)",
    "titleZh": "可能",
    "grammarType": "词类",
    "categoryType": "能愿动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + 可能 + Vị ngữ (Động từ / Tính từ)",
    "explanationVi": "Biểu thị sự suy đoán, ước chừng về khả năng xảy ra của một sự việc nào đó (tương đương với 'có lẽ', 'có thể' trong tiếng Việt).",
    "tips": "'可能' có thể đứng trước chủ ngữ hoặc đứng sau chủ ngữ trước động từ.",
    "examples": [
      {
        "chinese": "她可能回家了。",
        "pinyin": "Tā kě néng huí jiā le.",
        "vietnamese": "Có lẽ cô ấy đã về nhà rồi."
      },
      {
        "chinese": "小猫可能在房间里。",
        "pinyin": "Xiǎo māo kě néng zài fáng jiān lǐ.",
        "vietnamese": "Chú mèo con có thể đang ở trong phòng."
      }
    ]
  },
  {
    "id": "hsk2-g-05",
    "order": 5,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Từ ly hợp thông dụng: 帮忙, 游泳, 跳舞, 跑步",
    "titleZh": "帮忙、游泳、跳舞、跑步",
    "grammarType": "词类",
    "categoryType": "离合词",
    "grammarDetail": "离合词",
    "structure": "Động từ (A) + Tân ngữ (B) -> A + Thành phần khác + B",
    "explanationVi": "Từ ly hợp là kết cấu Động từ + Tân ngữ gắn kết. Khi cần chèn bổ ngữ, số lượng từ hoặc lặp lại động từ, phải chèn vào GIỮA hai từ đó:\n• 帮忙 -> 帮个忙 / 帮我一个忙 (không nói 帮忙我)\n• 游泳 -> 游了三次泳 / 游游泳\n• 跳舞 -> 跳了一会儿舞 / 跳跳舞\n• 跑步 -> 跑跑步",
    "tips": "Quy tắc vàng: Tuyệt đối không đem tân ngữ đặt phía sau từ ly hợp (sai: 帮忙我; đúng: 帮我的忙 / 帮我一个忙).",
    "examples": [
      {
        "chinese": "你能帮我一个忙吗？",
        "pinyin": "Nǐ néng bāng wǒ yī gè máng ma?",
        "vietnamese": "Bạn có thể giúp tôi một việc được không?"
      },
      {
        "chinese": "晚上一起去游游泳，运动一下吧。",
        "pinyin": "Wǎn shàng yī qǐ qù yóu yóu yǒng, yùn dòng yī xià ba.",
        "vietnamese": "Buổi tối cùng nhau đi bơi một chút, vận động chút đi."
      },
      {
        "chinese": "星期六的晚上，我喜欢和朋友们一起唱唱歌，跳跳舞。",
        "pinyin": "Xīng qī liù de wǎn shàng, wǒ xǐ huān hé péng yǒu men yī qǐ chàng chàng gē, tiào tiào wǔ.",
        "vietnamese": "Tối thứ Bảy, tôi thích cùng bạn bè hát hò, khiêu vũ."
      },
      {
        "chinese": "有时间你可以去外面跑跑步。",
        "pinyin": "Yǒu shí jiān nǐ kě yǐ qù wài miàn pǎo pǎo bù.",
        "vietnamese": "Khi rảnh bạn có thể ra ngoài chạy bộ một chút."
      }
    ]
  },
  {
    "id": "hsk2-g-06",
    "order": 6,
    "category": "questions_imperatives",
    "categoryName": "Câu hỏi & Mệnh lệnh",
    "categoryIcon": "❓",
    "titleVi": "Đại từ nghi vấn hỏi nguyên nhân: 为什么 (Wèishénme - Tại sao, vì sao)",
    "titleZh": "为什么",
    "grammarType": "词类",
    "categoryType": "疑问代词",
    "grammarDetail": "疑问代词",
    "structure": "Chủ ngữ + 为什么 + Vị ngữ? (hoặc: 为什么 + Chủ ngữ + Vị ngữ?)",
    "explanationVi": "Dùng để hỏi về nguyên nhân, lý do của một hành động, sự việc hoặc trạng thái. Trả lời thường dùng liên từ 因为... (Bởi vì...).",
    "tips": "'为什么' có thể đứng trước hoặc sau chủ ngữ.",
    "examples": [
      {
        "chinese": "他昨天为什么没来上课？",
        "pinyin": "Tā zuó tiān wèi shén me méi lái shàng kè?",
        "vietnamese": "Hôm qua vì sao anh ấy không đến lớp học?"
      },
      {
        "chinese": "你为什么想学中文？",
        "pinyin": "Nǐ wèi shén me xiǎng xué zhōng wén?",
        "vietnamese": "Tại sao bạn lại muốn học tiếng Trung?"
      }
    ]
  },
  {
    "id": "hsk2-g-07",
    "order": 7,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Đại từ phản thân: 自己 (Zìjǐ - Tự mình, bản thân)",
    "titleZh": "自己",
    "grammarType": "词类",
    "categoryType": "人称代词",
    "grammarDetail": "人称代词",
    "structure": "Đại từ/Danh từ + 自己 | 自己 + Động từ",
    "explanationVi": "Biểu thị tự chính mình thực hiện hành động mà không cần sự trợ giúp của người khác (như 我自己去 - tự tôi đi; 自己的爱好 - sở thích của chính bản thân).",
    "tips": "Có thể đứng một mình làm chủ ngữ/tân ngữ, hoặc đứng ngay sau đại từ nhân xưng (我自己, 你自己, 他自己) để nhấn mạnh.",
    "examples": [
      {
        "chinese": "下午我有事，你自己去，可以吗？",
        "pinyin": "Xià wǔ wǒ yǒu shì, nǐ zì jǐ qù, kě yǐ ma?",
        "vietnamese": "Chiều nay tôi có việc, bạn tự mình đi có được không?"
      }
    ]
  },
  {
    "id": "hsk2-g-08",
    "order": 8,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Đại từ chỉ thị & phân phối: 那么, 那样, 这么, 这样, 每",
    "titleZh": "那么、那样、这么、这样、每",
    "grammarType": "词类",
    "categoryType": "指示代词",
    "grammarDetail": "指示代词",
    "structure": "这么 / 那么 + Tính từ/Động từ | 这样 / 那样 + Động từ/Danh từ | 每 + Lượng từ + Danh từ",
    "explanationVi": "• 这么/这样: Chỉ mức độ/cách thức gần người nói ('như thế này', 'đến mức này').\n• 那么/那样: Chỉ mức độ/cách thức xa người nói ('như thế kia', 'đến mức đó').\n• 每: Biểu thị tính phân phối từng cá thể ('mỗi...'), phía sau thường đi kèm phó từ 都.",
    "tips": "Câu có '每' thì vị ngữ thường có phó từ '都' (ví dụ: 他每天都去跑步).",
    "examples": [
      {
        "chinese": "他为什么学得那么好？",
        "pinyin": "Tā wèi shén me xué dé nà me hǎo?",
        "vietnamese": "Tại sao cậu ấy lại học giỏi đến thế?"
      },
      {
        "chinese": "那样的事情经常有。",
        "pinyin": "Nà yàng de shì qíng jīng cháng yǒu.",
        "vietnamese": "Những chuyện như thế thường xuyên xảy ra."
      },
      {
        "chinese": "这么多人，我们明天再来吧。",
        "pinyin": "Zhè me duō rén, wǒ men míng tiān zài lái ba.",
        "vietnamese": "Đông người như thế này, ngày mai chúng ta hãy quay lại nhé."
      },
      {
        "chinese": "这个字这样写，对吗？",
        "pinyin": "Zhè gè zì zhè yàng xiě, duì ma?",
        "vietnamese": "Chữ này viết như thế này, đúng không?"
      },
      {
        "chinese": "你每天怎么去学校？",
        "pinyin": "Nǐ měi tiān zěn me qù xué xiào?",
        "vietnamese": "Mỗi ngày bạn đến trường bằng cách nào?"
      }
    ]
  },
  {
    "id": "hsk2-g-09",
    "order": 9,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Trùng điệp Tính từ: AA & AABB (Miêu tả sinh động)",
    "titleZh": "AA、AABB",
    "grammarType": "词类",
    "categoryType": "形容词重叠",
    "grammarDetail": "形容词重叠",
    "structure": "Đơn âm: AA (高高, 大大) | Song âm: AABB (高高兴兴, 漂漂亮亮)",
    "explanationVi": "Lặp lại tính từ nhằm tăng cường sắc thái miêu tả sinh động, gợi hình và biểu thị sự trìu mến, tích cực. Thường dùng làm định ngữ (kèm 的) hoặc trạng ngữ (kèm 地).",
    "tips": "Khi tính từ đã trùng điệp thì KHÔNG dùng kèm các phó từ mức độ như 很, 非常, 太.",
    "examples": [
      {
        "chinese": "她高高的个子，大大的眼睛，非常漂亮。",
        "pinyin": "Tā gāo gāo de gè zi, dà dà de yǎn jīng, fēi cháng piāo liàng.",
        "vietnamese": "Cô ấy dáng người cao ráo, đôi mắt to tròn, rất xinh đẹp."
      },
      {
        "chinese": "大家高高兴兴地回家了。",
        "pinyin": "Dà jiā gāo gāo xīng xīng dì huí jiā le.",
        "vietnamese": "Mọi người vui vẻ, hớn hở trở về nhà."
      }
    ]
  },
  {
    "id": "hsk2-g-10",
    "order": 10,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Số đếm hàng Vạn (万) & Cách biểu đạt số lượng: 好多, 多",
    "titleZh": "万、好多、多",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ + 万 (wàn = 10.000) | 好多 + Danh từ (rất nhiều) | Số từ + 多 (hơn/ngoài...)",
    "explanationVi": "• 万 (vạn): Đơn vị 10.000 trong tiếng Trung (ví dụ 两万 = 20.000; 五万零八百 = 50.800).\n• 好多: Khẩu ngữ chỉ số lượng rất nhiều (好多人, 好多东西).\n• 多: Đứng sau số từ để biểu thị số lượng lẻ, số dư (hơn/ngoài).",
    "tips": "Tiếng Trung phân tách hàng đơn vị theo 4 chữ số (vạn = 10^4), khác với tiếng Việt phân tách theo 3 chữ số (nghìn = 10^3).",
    "examples": [
      {
        "chinese": "两万三千、五万零八百、好多东西、好多人、二十多年、五十多人",
        "pinyin": "Liǎng wàn sān qiān, wǔ wàn líng bā bǎi, hǎo duō dōng xī, hǎo duō rén, èr shí duō nián, wǔ shí duō rén",
        "vietnamese": "23.000, 50.800, rất nhiều đồ, rất nhiều người, hơn 20 năm, hơn 50 người."
      }
    ]
  },
  {
    "id": "hsk2-g-11",
    "order": 11,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Lượng từ chuyên dụng: 条, 位, 间, 名",
    "titleZh": "专用名量词：条、位、间、名",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 条 / 位 / 间 / 名 + Danh từ",
    "explanationVi": "• 条 (tiáo): Dùng cho vật dài, uốn lượn (cá, đường sá, sông, quần dài: 一条裤子, 一条鱼).\n• 位 (wèi): Lượng từ kính trọng dành cho người (一位老师, 一位客人).\n• 间 (jiān): Dùng cho phòng ốc, gian nhà (一间教室, 一间房间).\n• 名 (míng): Dùng cho người trong ngữ cảnh trang trọng/nghề nghiệp (一名学生, 一名医生).",
    "tips": "Dùng '位' thay cho '个' khi muốn thể hiện thái độ lịch sự, tôn kính với đối phương.",
    "examples": [
      {
        "chinese": "一条裤子、一位老师、一间教室、一名学生",
        "pinyin": "Yī tiáo kù zi, yī wèi lǎo shī, yī jiān jiào shì, yī míng xué shēng",
        "vietnamese": "Một chiếc quần dài, một vị giáo viên, một phòng học, một học sinh."
      }
    ]
  },
  {
    "id": "hsk2-g-12",
    "order": 12,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Lượng từ mượn từ danh từ: 包 (Bāo - Gói, túi, bọc)",
    "titleZh": "借用名量词：包",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 包 + Danh từ",
    "explanationVi": "Mượn danh từ chỉ đồ đựng/bao gói để làm lượng từ chứa đựng đồ vật bên trong (như 一包衣服 - một bọc quần áo; 一包书 - một túi sách; 一包茶 - một gói trà).",
    "tips": "Đây là hiện tượng chuyển loại danh từ thành lượng từ lâm thời rất phổ biến.",
    "examples": [
      {
        "chinese": "一包衣服、一包书",
        "pinyin": "Yī bāo yī fú, yī bāo shū",
        "vietnamese": "Một bọc quần áo, một túi sách."
      }
    ]
  },
  {
    "id": "hsk2-g-13",
    "order": 13,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Động lượng từ biểu thị số lần: 次 (Cì - Lần)",
    "titleZh": "次",
    "grammarType": "词类",
    "categoryType": "动量词",
    "grammarDetail": "动量词",
    "structure": "Động từ + (Số từ) + 次",
    "explanationVi": "'次' là động lượng từ dùng để đếm số lần phát sinh hoặc hoàn thành của một động tác, hành vi (như 去一次 - đi một lần; 看过两次 - đã xem hai lần).",
    "tips": "Nếu tân ngữ là đại từ chỉ người thì số lần đứng sau tân ngữ (như 找过他两次).",
    "examples": [
      {
        "chinese": "去一次、看一次",
        "pinyin": "Qù yī cì, kàn yī cì",
        "vietnamese": "Đi một lần, xem một lần."
      }
    ]
  },
  {
    "id": "hsk2-g-14",
    "order": 14,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ mức độ: 多, 好, 最 (Cảm thán & So sánh nhất)",
    "titleZh": "多、好、最",
    "grammarType": "词类",
    "categoryType": "程度副词",
    "grammarDetail": "程度副词",
    "structure": "多 + Tính từ + 啊！ (Thật là... biết bao) | 好 + Tính từ + 啊！ (Quá chừng) | 最 + Tính từ/Động từ (Nhất)",
    "explanationVi": "• 多 / 好: Đứng trước tính từ trong câu cảm thán biểu thị mức độ cao (多可爱啊 - đáng yêu biết bao; 好大啊 - to quá chừng).\n• 最: Biểu thị mức độ cao nhất trong tất cả (最喜欢 - thích nhất; 最好 - tốt nhất).",
    "tips": "'好' trong khẩu ngữ miền Bắc Trung Quốc thường được dùng thay thế cho '很' với ngữ khí cảm thán.",
    "examples": [
      {
        "chinese": "这只小狗多可爱啊！",
        "pinyin": "Zhè zhǐ xiǎo gǒu duō kě ài a!",
        "vietnamese": "Chú cún con này thật là đáng yêu biết bao!"
      },
      {
        "chinese": "这个教室好大啊！",
        "pinyin": "Zhè gè jiào shì hǎo dà a!",
        "vietnamese": "Phòng học này rộng quá chừng!"
      },
      {
        "chinese": "我最喜欢打篮球。",
        "pinyin": "Wǒ zuì xǐ huān dǎ lán qiú.",
        "vietnamese": "Tôi thích chơi bóng rổ nhất."
      }
    ]
  },
  {
    "id": "hsk2-g-15",
    "order": 15,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phạm vi cùng nhau: 一起 (Yìqǐ)",
    "titleZh": "一起",
    "grammarType": "词类",
    "categoryType": "范围副词",
    "grammarDetail": "范围副词",
    "structure": "Chủ ngữ + (跟/和 + Ai đó) + 一起 + Động từ",
    "explanationVi": "Biểu thị các chủ thể cùng nhau tiến hành hoặc tham gia vào một hoạt động nào đó trong cùng một không gian, thời gian.",
    "tips": "Thường đi kèm với liên từ '和' hoặc '跟' (ví dụ: 我跟你一起去).",
    "examples": [
      {
        "chinese": "晚上我们一起吃饭吧。",
        "pinyin": "Wǎn shàng wǒ men yī qǐ chī fàn ba.",
        "vietnamese": "Tối nay chúng mình cùng nhau ăn cơm nhé."
      },
      {
        "chinese": "一起去看电影，怎么样？",
        "pinyin": "Yī qǐ qù kàn diàn yǐng, zěn me yàng?",
        "vietnamese": "Cùng nhau đi xem phim nhé, thấy thế nào?"
      }
    ]
  },
  {
    "id": "hsk2-g-16",
    "order": 16,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ thời gian: 还, 已经, 有时, 快, 快要, 正",
    "titleZh": "还2、已经、有时（候）、快、快要、正",
    "grammarType": "词类",
    "categoryType": "时间副词",
    "grammarDetail": "时间副词",
    "structure": "Chủ ngữ + 已经 / 还 / 快要 / 正 + Vị ngữ",
    "explanationVi": "• 已经: Đã (sự việc đã hoàn tất, thường đi kèm 了).\n• 还: Vẫn, còn (hành động, trạng thái tiếp tục duy trì).\n• 有时（候）: Thỉnh thoảng, có lúc.\n• 快 / 快要: Sắp (sự việc sắp sửa diễn ra, thường đi với ...了).\n• 正: Đang (hành động đang diễn ra tại thời điểm nói, thường đi với ...呢).",
    "tips": "Nếu có mốc thời gian cụ thể trong câu thì dùng '就要...了' chứ không dùng '快要...了'.",
    "examples": [
      {
        "chinese": "他还没有起床呢。",
        "pinyin": "Tā hái méi yǒu qǐ chuáng ne.",
        "vietnamese": "Cậu ấy vẫn còn chưa ngủ dậy nữa."
      },
      {
        "chinese": "张老师已经下班了。",
        "pinyin": "Zhāng lǎo shī yǐ jīng xià bān le.",
        "vietnamese": "Thầy Trương đã tan làm rồi."
      },
      {
        "chinese": "我有时（候）去超市买东西。",
        "pinyin": "Wǒ yǒu shí (hòu) qù chāo shì mǎi dōng xī.",
        "vietnamese": "Tôi thỉnh thoảng đi siêu thị mua đồ."
      },
      {
        "chinese": "下雨了，快回家吧。",
        "pinyin": "Xià yǔ le, kuài huí jiā ba.",
        "vietnamese": "Trời mưa rồi, mau về nhà đi thôi."
      },
      {
        "chinese": "新年快要到了。",
        "pinyin": "Xīn nián kuài yào dào le.",
        "vietnamese": "Năm mới sắp đến rồi."
      },
      {
        "chinese": "我出来的时候，他正睡觉呢。",
        "pinyin": "Wǒ chū lái de shí hòu, tā zhèng shuì jué ne.",
        "vietnamese": "Lúc tôi ra ngoài, anh ấy đang ngủ say."
      }
    ]
  },
  {
    "id": "hsk2-g-17",
    "order": 17,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ tần suất: 常 & 经常 (Cháng, Jīngcháng - Thường xuyên)",
    "titleZh": "常、经常",
    "grammarType": "词类",
    "categoryType": "频率副词",
    "grammarDetail": "频率副词",
    "structure": "Chủ ngữ + (不) 常 / 经常 + Động từ",
    "explanationVi": "Biểu thị hành động có tần suất xảy ra nhiều lần. Dạng phủ định dùng '不常' (không thường xuyên) hoặc '不经常'.",
    "tips": "Phủ định chỉ dùng '不常', hầu như không nói '没常'.",
    "examples": [
      {
        "chinese": "我不常坐地铁。",
        "pinyin": "Wǒ bù cháng zuò dì tiě.",
        "vietnamese": "Tôi không thường đi tàu điện ngầm."
      },
      {
        "chinese": "你经常上网买东西吗？",
        "pinyin": "Nǐ jīng cháng shàng wǎng mǎi dōng xī ma?",
        "vietnamese": "Bạn có thường xuyên mua hàng qua mạng không?"
      }
    ]
  },
  {
    "id": "hsk2-g-18",
    "order": 18,
    "category": "questions_imperatives",
    "categoryName": "Câu hỏi & Mệnh lệnh",
    "categoryIcon": "❓",
    "titleVi": "Phó từ phủ định mệnh lệnh: 别 (Bié - Đừng...)",
    "titleZh": "别",
    "grammarType": "词类",
    "categoryType": "否定副词",
    "grammarDetail": "否定副词",
    "structure": "别 + Động từ / Tính từ (+ 了)！",
    "explanationVi": "Dùng trong câu cầu khiến, mệnh lệnh mang sắc thái khuyên ngăn, ngăn cấm ai đó không được làm một việc gì (tương đương 'đừng...', 'không được...').",
    "tips": "Cuối câu có thể thêm '了' biểu thị sự khuyên ngăn chấm dứt hành động đang diễn ra (như 别看了 - đừng xem nữa).",
    "examples": [
      {
        "chinese": "下雨了，别出去了。",
        "pinyin": "Xià yǔ le, bié chū qù le.",
        "vietnamese": "Trời đang mưa, đừng ra ngoài nữa nhé."
      },
      {
        "chinese": "别忘了，明天有考试。",
        "pinyin": "Bié wàng le, míng tiān yǒu kǎo shì.",
        "vietnamese": "Đừng quên đấy nhé, ngày mai có buổi thi cử."
      }
    ]
  },
  {
    "id": "hsk2-g-19",
    "order": 19,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ liên kết: 再 (Zài - Mới / Lại) & 就 (Jiù - Liền / Thì)",
    "titleZh": "再2、就1",
    "grammarType": "词类",
    "categoryType": "关联副词",
    "grammarDetail": "关联副词",
    "structure": "先... 再... (Trước hết... rồi mới...) | 一... 就... / 因为... 就... (Vừa... là liền...)",
    "explanationVi": "• 再: Biểu thị một hành động khác diễn ra sau khi hoàn thành hành động trước ('làm xong cái này rồi mới làm cái kia').\n• 就: Biểu thị sự việc nối tiếp diễn ra nhanh chóng, thuận lợi hoặc là kết quả tự nhiên của vế trước.",
    "tips": "Phân biệt '再' (hành động chưa xảy ra trong tương lai) với '又' (hành động đã lặp lại trong quá khứ).",
    "examples": [
      {
        "chinese": "我先休息一会儿再工作。",
        "pinyin": "Wǒ xiān xiū xī yī huì ér zài gōng zuò.",
        "vietnamese": "Tôi nghỉ ngơi một lát trước rồi mới làm việc tiếp."
      },
      {
        "chinese": "你洗完手再吃水果。",
        "pinyin": "Nǐ xǐ wán shǒu zài chī shuǐ guǒ.",
        "vietnamese": "Bạn rửa tay xong rồi hãy ăn hoa quả."
      },
      {
        "chinese": "因为身体不舒服，我就没去上课。",
        "pinyin": "Yīn wèi shēn tǐ bù shū fú, wǒ jiù méi qù shàng kè.",
        "vietnamese": "Vì cơ thể không khỏe, nên tôi đã không đi học."
      },
      {
        "chinese": "他一到北京就去了长城。",
        "pinyin": "Tā yī dào běi jīng jiù qù le zhǎng chéng.",
        "vietnamese": "Anh ấy vừa đến Bắc Kinh là đã đi thăm Vạn Lý Trường Thành rồi."
      }
    ]
  },
  {
    "id": "hsk2-g-20",
    "order": 20,
    "category": "adverbs",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ ngữ khí: 都, 就, 还是",
    "titleZh": "都2、就2、还是1",
    "grammarType": "词类",
    "categoryType": "语气副词",
    "grammarDetail": "语气副词",
    "structure": "都...了 (Đã... rồi) | 就 + V (Ngay/chính là) | 还是...吧 (Tốt nhất là...)",
    "explanationVi": "• 都: Đứng trước số từ/thời gian với nghĩa nhấn mạnh 'đã... rồi mà' (都十二点了).\n• 就: Nhấn mạnh sự khẳng định, cự ly gần hoặc dứt khoát ('ngay tại', 'chính là').\n• 还是: Biểu thị sự lựa chọn sau khi cân nhắc thấy phương án này tốt hơn cả.",
    "tips": "'还是' ở đây mang sắc thái đưa ra lời khuyên tế nhị, hữu ích.",
    "examples": [
      {
        "chinese": "都十二点了，快睡觉吧。",
        "pinyin": "Dōu shí èr diǎn le, kuài shuì jué ba.",
        "vietnamese": "Đã 12 giờ đêm rồi, mau đi ngủ thôi."
      },
      {
        "chinese": "车站就在那个饭馆旁边。",
        "pinyin": "Chē zhàn jiù zài nà gè fàn guǎn páng biān.",
        "vietnamese": "Bến xe buýt ở ngay cạnh nhà hàng đó."
      },
      {
        "chinese": "就买这件白色的吧。",
        "pinyin": "Jiù mǎi zhè jiàn bái sè de ba.",
        "vietnamese": "Vậy thì mua chiếc màu trắng này đi."
      },
      {
        "chinese": "外边很冷，还是多穿一点儿吧。",
        "pinyin": "Wài biān hěn lěng, hái shì duō chuān yìdiǎnr ba.",
        "vietnamese": "Bên ngoài trời rất lạnh, hay là mặc thêm chút áo ấm đi."
      }
    ]
  },
  {
    "id": "hsk2-g-21",
    "order": 21,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ điểm khởi đầu: 从 (Cóng - Từ...)",
    "titleZh": "从1",
    "grammarType": "词类",
    "categoryType": "引出时间、处所",
    "grammarDetail": "引出时间、处所",
    "structure": "从 + Thời gian / Địa điểm + 到 + Thời gian / Địa điểm",
    "explanationVi": "Giới từ '从' dùng để dẫn xuất thời gian bắt đầu hoặc điểm xuất phát của không gian (tương đương với từ 'từ' trong tiếng Việt).",
    "tips": "Cấu trúc kinh điển: 从...到... (Từ... đến...).",
    "examples": [
      {
        "chinese": "我们从八点到十二点上课。",
        "pinyin": "Wǒ men cóng bā diǎn dào shí èr diǎn shàng kè.",
        "vietnamese": "Chúng tôi học từ 8 giờ đến 12 giờ."
      },
      {
        "chinese": "你从哪儿来？",
        "pinyin": "Nǐ cóng nǎr lái?",
        "vietnamese": "Bạn đến từ đâu?"
      }
    ]
  },
  {
    "id": "hsk2-g-22",
    "order": 22,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ phương hướng: 往 (Wǎng - Về phía, hướng về)",
    "titleZh": "往",
    "grammarType": "词类",
    "categoryType": "引出方向、路径",
    "grammarDetail": "引出方向、路径",
    "structure": "往 + Phương hướng / Nơi chốn + Động từ",
    "explanationVi": "Dùng để dẫn xuất phương hướng vận động của động tác (như 往前走 - đi về phía trước; 往下看 - nhìn xuống dưới).",
    "tips": "Động từ theo sau '往' thường là các động từ chỉ sự di chuyển như 走, 开, 看, 飞.",
    "examples": [
      {
        "chinese": "你从这儿往前走。",
        "pinyin": "Nǐ cóng zhèr wǎng qián zǒu.",
        "vietnamese": "Bạn đi thẳng về phía trước từ chỗ này."
      },
      {
        "chinese": "从这儿往下看，真漂亮啊！",
        "pinyin": "Cóng zhèr wǎng xià kàn, zhēn piāo liàng a!",
        "vietnamese": "Từ đây nhìn xuống dưới, đẹp thật đấy!"
      }
    ]
  },
  {
    "id": "hsk2-g-23",
    "order": 23,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ lộ trình đi qua: 从 (Cóng - Qua, từ...)",
    "titleZh": "从2",
    "grammarType": "词类",
    "categoryType": "引出方向、路径",
    "grammarDetail": "引出方向、路径",
    "structure": "从 + Lối đi / Nơi chốn + Động từ di chuyển",
    "explanationVi": "Dùng để biểu thị địa điểm hoặc đường đi mà hành động băng qua hay xuyên qua (như 从后门进去 - đi vào từ cửa sau; 从学校门口过 - đi ngang qua cổng trường).",
    "tips": "Lưu ý vị trí cụm giới từ '从 + địa điểm' luôn đặt TRƯỚC động từ.",
    "examples": [
      {
        "chinese": "这路公交车不从学校门口过。",
        "pinyin": "Zhè lù gōng jiāo chē bù cóng xué xiào mén kǒu guò.",
        "vietnamese": "Tuyến xe buýt này không chạy qua trước cổng trường."
      },
      {
        "chinese": "前门没开，咱们从后门进去吧。",
        "pinyin": "Qián mén méi kāi, zán men cóng hòu mén jìn qù ba.",
        "vietnamese": "Cửa trước chưa mở, chúng ta đi vào từ cửa sau nhé."
      }
    ]
  },
  {
    "id": "hsk2-g-24",
    "order": 24,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ đối tượng tiếp nhận: 给 (Gěi - Cho, đối với)",
    "titleZh": "给",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "Chủ ngữ + 给 + Đối tượng + Động từ",
    "explanationVi": "Dùng để giới thiệu đối tượng hướng tới hoặc đối tượng thụ hưởng của hành động (như 给爸爸妈妈打电话 - gọi điện cho bố mẹ; 给老师买咖啡 - mua cà phê cho thầy).",
    "tips": "Trong tiếng Việt nói 'Gọi điện CHO ai', tiếng Trung bắt buộc đảo giới từ lên trước: '给 ai 打电话'.",
    "examples": [
      {
        "chinese": "我经常给爸爸妈妈打电话。",
        "pinyin": "Wǒ jīng cháng gěi bà bà mā mā dǎ diàn huà.",
        "vietnamese": "Tôi thường xuyên gọi điện thoại cho bố mẹ."
      },
      {
        "chinese": "我给老师买了一杯咖啡。",
        "pinyin": "Wǒ gěi lǎo shī mǎi le yī bēi kā fēi.",
        "vietnamese": "Tôi mua cho thầy giáo một tách cà phê."
      }
    ]
  },
  {
    "id": "hsk2-g-25",
    "order": 25,
    "category": "comparisons",
    "categoryName": "Câu so sánh",
    "categoryIcon": "⚖️",
    "titleVi": "Giới từ so sánh: 比 (Bǐ - Hơn, so với)",
    "titleZh": "比",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "A + 比 + B + Tính từ",
    "explanationVi": "Dùng để so sánh giữa hai đối tượng A và B về một tính chất, đặc điểm nào đó, trong đó A vượt trội hơn B.",
    "tips": "Trong câu chữ 比, trước tính từ KHÔNG được dùng các phó từ mức độ như 很, 非常, 太.",
    "examples": [
      {
        "chinese": "今天比昨天热。",
        "pinyin": "Jīn tiān bǐ zuó tiān rè.",
        "vietnamese": "Hôm nay nóng hơn hôm qua."
      },
      {
        "chinese": "我觉得红色的比黑色的好看。",
        "pinyin": "Wǒ jué dé hóng sè de bǐ hēi sè de hǎo kàn.",
        "vietnamese": "Tôi thấy chiếc màu đỏ đẹp hơn chiếc màu đen."
      }
    ]
  },
  {
    "id": "hsk2-g-26",
    "order": 26,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ cùng đối tượng: 跟 (Gēn - Cùng với, đối với)",
    "titleZh": "跟1",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "Chủ ngữ + 跟 + Đối tượng + Động từ",
    "explanationVi": "Dùng để dẫn ra đối tượng cùng tham gia hoặc đối tượng tiếp nhận hành động (như 跟我说说 - nói cho tôi nghe; 跟他见了一次 - đã gặp anh ấy một lần).",
    "tips": "Có thể thay thế tương đương bằng '和' (hé) hoặc '同' (tóng).",
    "examples": [
      {
        "chinese": "跟我说说你的爱好吧。",
        "pinyin": "Gēn wǒ shuō shuō nǐ de ài hǎo ba.",
        "vietnamese": "Kể cho tôi nghe về sở thích của bạn đi nào."
      },
      {
        "chinese": "我跟他见过一次。",
        "pinyin": "Wǒ gēn tā jiàn guò yī cì.",
        "vietnamese": "Tôi từng gặp mặt anh ấy một lần."
      }
    ]
  },
  {
    "id": "hsk2-g-27",
    "order": 27,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Giới từ nguyên nhân: 因为 (Yīnwèi - Bởi vì, do)",
    "titleZh": "因为1",
    "grammarType": "词类",
    "categoryType": "引出原因",
    "grammarDetail": "引出原因",
    "structure": "因为 + Danh từ / Sự việc, Chủ ngữ + Vị ngữ",
    "explanationVi": "Dùng ở đầu câu hoặc trước vị ngữ để nêu rõ nguyên nhân, lý do dẫn đến kết quả ở vế sau (như 因为中国电影... - do phim ảnh Trung Quốc...).",
    "tips": "Khi nối cả câu hoàn chỉnh thì thường dùng cặp liên từ '因为...，所以...'.",
    "examples": [
      {
        "chinese": "因为中国电影，我开始学习中文。",
        "pinyin": "Yīn wèi zhōng guó diàn yǐng, wǒ kāi shǐ xué xí zhōng wén.",
        "vietnamese": "Chính vì phim ảnh Trung Quốc, tôi bắt đầu học tiếng Trung."
      }
    ]
  },
  {
    "id": "hsk2-g-28",
    "order": 28,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ nối từ ngữ: 跟 (Gēn - Và, cùng)",
    "titleZh": "跟2",
    "grammarType": "词类",
    "categoryType": "连接词或短语",
    "grammarDetail": "连接词或短语",
    "structure": "Thành phần A + 跟 + Thành phần B",
    "explanationVi": "Dùng làm liên từ để liên kết hai danh từ, đại từ hoặc cụm từ có quan hệ đẳng lập ngang hàng (như 爸爸跟妈妈 - bố và mẹ; 我跟哥哥 - tôi và anh trai).",
    "tips": "Khác với giới từ, liên từ '跟' có thể đổi chỗ hai thành phần A và B mà nghĩa câu không đổi.",
    "examples": [
      {
        "chinese": "爸爸跟妈妈都不在家。",
        "pinyin": "Bà bà gēn mā mā dōu bù zài jiā.",
        "vietnamese": "Cả bố và mẹ đều không có ở nhà."
      },
      {
        "chinese": "我跟哥哥都在中国上学。",
        "pinyin": "Wǒ gēn gē gē dōu zài zhōng guó shàng xué.",
        "vietnamese": "Tôi và anh trai đều đang đi học tại Trung Quốc."
      }
    ]
  },
  {
    "id": "hsk2-g-29",
    "order": 29,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Các liên từ nối câu: 但, 但是, 那, 虽然, 还是, 因为, 所以",
    "titleZh": "但、但是、那、虽然、还是2、因为2、所以",
    "grammarType": "词类",
    "categoryType": "连接分句或者句子",
    "grammarDetail": "连接分句或者句子",
    "structure": "Vế câu 1, + Liên từ + Vế câu 2",
    "explanationVi": "Hệ thống liên từ liên kết các vế câu:\n• 但 / 但是: Nhưng, thế nhưng (chuyển ngoặt).\n• 那: Vậy thì, thế thì (tiếp nối điều kiện).\n• 虽然...但是...: Tuy... nhưng... (nhượng bộ).\n• 还是: Hay là (lựa chọn trong câu hỏi).\n• 因为...所以...: Bởi vì... cho nên... (nguyên nhân - kết quả).",
    "tips": "Nắm vững các cặp liên từ này là chìa khóa để ghép các câu đơn thành câu phức mạch lạc.",
    "examples": [
      {
        "chinese": "这家饭馆的菜很好吃，但/但是有点儿贵。",
        "pinyin": "Zhè jiā fàn guǎn de cài hěn hǎo chī, dàn / dàn shì yǒu diǎn ér guì.",
        "vietnamese": "Món ăn ở nhà hàng này rất ngon, nhưng hơi đắt một chút."
      },
      {
        "chinese": "你不舒服，那就别去了。",
        "pinyin": "Nǐ bù shū fú, nà jiù bié qù le.",
        "vietnamese": "Bạn không khỏe, vậy thì đừng đi nữa nhé."
      },
      {
        "chinese": "手机虽然不大，但/但是能帮我们做很多事。",
        "pinyin": "Shǒu jī suī rán bù dà, dàn / dàn shì néng bāng wǒ men zuò hěn duō shì.",
        "vietnamese": "Điện thoại tuy nhỏ bé, nhưng có thể giúp chúng ta làm rất nhiều việc."
      },
      {
        "chinese": "你想喝茶还是喝咖啡？",
        "pinyin": "Nǐ xiǎng hē chá hái shì hē kā fēi?",
        "vietnamese": "Bạn muốn uống trà hay là uống cà phê?"
      },
      {
        "chinese": "因为我最近每天看手机，所以眼睛有点儿不舒服。",
        "pinyin": "Yīn wèi wǒ zuì jìn měi tiān kàn shǒu jī, suǒ yǐ yǎn jīng yǒu diǎn ér bù shū fú.",
        "vietnamese": "Bởi vì dạo này ngày nào tôi cũng nhìn điện thoại, nên mắt hơi khó chịu."
      }
    ]
  },
  {
    "id": "hsk2-g-30",
    "order": 30,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Trợ từ kết cấu: 得 (Bổ ngữ) & 地 (Trạng ngữ)",
    "titleZh": "得、地",
    "grammarType": "词类",
    "categoryType": "结构助词",
    "grammarDetail": "结构助词",
    "structure": "Động từ + 得 + Bổ ngữ trạng thái / mức độ | Trạng ngữ (Tính từ) + 地 + Động từ",
    "explanationVi": "• 得 (de): Đứng sau động từ để nối với thành phần bổ ngữ miêu tả trình độ, mức độ thực hiện hành vi (như 说得很好 - nói rất hay).\n• 地 (de): Đứng sau tính từ làm trạng ngữ để bổ nghĩa cho động từ đứng sau (như 高兴地唱歌 - vui vẻ hát).",
    "tips": "Phân biệt bộ ba: '的' (trước danh từ), '地' (trước động từ), '得' (sau động từ).",
    "examples": [
      {
        "chinese": "他汉语说得很好。",
        "pinyin": "Tā hàn yǔ shuō dé hěn hǎo.",
        "vietnamese": "Anh ấy nói tiếng Trung rất giỏi."
      },
      {
        "chinese": "大家正在高兴地唱歌。",
        "pinyin": "Dà jiā zhèng zài gāo xīng dì chàng gē.",
        "vietnamese": "Mọi người đang vui vẻ, hăng say hát hò."
      }
    ]
  },
  {
    "id": "hsk2-g-31",
    "order": 31,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Trợ từ động thái biểu thị kinh nghiệm: 过 (Guò - Đã từng)",
    "titleZh": "过",
    "grammarType": "词类",
    "categoryType": "动态助词",
    "grammarDetail": "动态助词",
    "structure": "Chủ ngữ + Động từ + 过 (+ Tân ngữ) | Phủ định: 没(有) + Động từ + 过",
    "explanationVi": "Đứng ngay sau động từ để nhấn mạnh một hành động, sự việc đã từng diễn ra và kết thúc trong quá khứ như một trải nghiệm cá nhân (như 学过中文 - từng học tiếng Trung; 没去过北京 - chưa từng đi Bắc Kinh).",
    "tips": "Dạng phủ định bắt buộc dùng '没(有)', tuyệt đối không dùng '不'.",
    "examples": [
      {
        "chinese": "你学过中文吗？",
        "pinyin": "Nǐ xué guò zhōng wén ma?",
        "vietnamese": "Bạn từng học qua tiếng Trung chưa?"
      },
      {
        "chinese": "我没去过北京。",
        "pinyin": "Wǒ méi qù guò běi jīng.",
        "vietnamese": "Tôi chưa từng đi Bắc Kinh bao giờ."
      }
    ]
  },
  {
    "id": "hsk2-g-32",
    "order": 32,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Trợ từ động thái biểu thị trạng thái duy trì: 着 (Zhe - Đang)",
    "titleZh": "着",
    "grammarType": "词类",
    "categoryType": "动态助词",
    "grammarDetail": "动态助词",
    "structure": "Động từ + 着 (+ Tân ngữ)",
    "explanationVi": "Đứng sau động từ để biểu thị trạng thái tĩnh của sự vật đang tiếp tục duy trì (như 穿着黑裤子 - đang mặc quần đen; 门开着 - cửa đang mở) hoặc hành động đang diễn ra làm nền cho hành động khác (唱着歌，跳着舞).",
    "tips": "Khác với '正在' (hành động đang cử động), '着' nhấn mạnh trạng thái duy trì của kết quả hành động.",
    "examples": [
      {
        "chinese": "他穿着一条黑色的裤子。",
        "pinyin": "Tā chuān zhe yī tiáo hēi sè de kù zi.",
        "vietnamese": "Anh ấy đang mặc một chiếc quần màu đen."
      },
      {
        "chinese": "教室的门开着。",
        "pinyin": "Jiào shì de mén kāi zhe.",
        "vietnamese": "Cửa phòng học đang mở."
      },
      {
        "chinese": "他们唱着歌，跳着舞，非常高兴。",
        "pinyin": "Tā men chàng zhe gē, tiào zhe wǔ, fēi cháng gāo xīng.",
        "vietnamese": "Họ vừa hát vừa khiêu vũ, vô cùng vui vẻ."
      }
    ]
  },
  {
    "id": "hsk2-g-33",
    "order": 33,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Trợ từ ngữ khí cuối câu: 呢, 吧, 的, 啊",
    "titleZh": "呢4、吧2、的2、啊1",
    "grammarType": "词类",
    "categoryType": "语气助词",
    "grammarDetail": "语气助词",
    "structure": "Cuối câu trần thuật hoặc câu hỏi",
    "explanationVi": "• 呢: Tăng cường ngữ khí dò hỏi, hỏi vặn, tò mò (她怎么不在家呢？).\n• 吧: Biểu thị phỏng đoán có căn cứ hoặc đề nghị nhẹ nhàng (这是你的手机吧？).\n• 的: Khẳng định sự việc chắc chắn đã diễn ra trong quá khứ (我是去年来的).\n• 啊: Bộc lộ cảm xúc khen ngợi, ngạc nhiên, cảm thán (说得真好啊！).",
    "tips": "Trợ từ ngữ khí luôn đọc thanh nhẹ (nhẹ và ngắn).",
    "examples": [
      {
        "chinese": "她怎么不在家呢？",
        "pinyin": "Tā zěn me bù zài jiā ne?",
        "vietnamese": "Sao cô ấy lại không có ở nhà nhỉ?"
      },
      {
        "chinese": "明天你想去哪儿呢？",
        "pinyin": "Míng tiān nǐ xiǎng qù nǎr ne?",
        "vietnamese": "Ngày mai bạn muốn đi đâu thế?"
      },
      {
        "chinese": "这是你的手机吧？",
        "pinyin": "Zhè shì nǐ de shǒu jī ba?",
        "vietnamese": "Đây là điện thoại của bạn đúng không?"
      },
      {
        "chinese": "这么晚了，超市已经关门了吧？",
        "pinyin": "Zhè me wǎn le, chāo shì yǐ jīng guān mén le ba?",
        "vietnamese": "Muộn thế này rồi, chắc siêu thị đã đóng cửa rồi nhỉ?"
      },
      {
        "chinese": "我是去年九月来中国的。",
        "pinyin": "Wǒ shì qù nián jiǔ yuè lái zhōng guó de.",
        "vietnamese": "Tôi đến Trung Quốc vào tháng 9 năm ngoái."
      },
      {
        "chinese": "我们是在北京认识的。",
        "pinyin": "Wǒ men shì zài běi jīng rèn shí de.",
        "vietnamese": "Chúng tôi quen biết nhau tại Bắc Kinh."
      },
      {
        "chinese": "他们是坐飞机去上海的。",
        "pinyin": "Tā men shì zuò fēi jī qù shàng hǎi de.",
        "vietnamese": "Họ đến Thượng Hải bằng máy bay."
      },
      {
        "chinese": "今天的晚饭是我做的。",
        "pinyin": "Jīn tiān de wǎn fàn shì wǒ zuò de.",
        "vietnamese": "Bữa tối hôm nay do tôi tự tay nấu."
      },
      {
        "chinese": "你汉语说得真好啊！",
        "pinyin": "Nǐ hàn yǔ shuō dé zhēn hǎo a!",
        "vietnamese": "Bạn nói tiếng Trung tốt thật đấy!"
      }
    ]
  },
  {
    "id": "hsk2-g-34",
    "order": 34,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Cụm động bổ cơ bản (Động từ + Bổ ngữ)",
    "titleZh": "动补短语1",
    "grammarType": "短语",
    "categoryType": "基本结构类型",
    "grammarDetail": "基本结构类型",
    "structure": "Động từ + Bổ ngữ (kết quả / xu hướng / trạng thái / số lượng)",
    "explanationVi": "Là cụm từ gồm động từ đi kèm với thành phần bổ ngữ phía sau để nói rõ kết quả (听懂 - nghe hiểu), hướng di chuyển (回去 - đi về), trình độ (跑得很快 - chạy rất nhanh) hoặc thời lượng (等一下 - chờ một lát).",
    "tips": "Đây là kết cấu ngữ pháp đặc trưng và vô cùng quan trọng của tiếng Trung.",
    "examples": [
      {
        "chinese": "听懂、回去、跑得很快、等一下",
        "pinyin": "Tīng dǒng, huí qù, pǎo dé hěn kuài, děng yī xià",
        "vietnamese": "Nghe hiểu, trở về, chạy rất nhanh, chờ một lát."
      }
    ]
  },
  {
    "id": "hsk2-g-35",
    "order": 35,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Cụm từ chữ “的” danh từ hóa (的字短语)",
    "titleZh": "“的”字短语",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Đại từ / Danh từ / Tính từ / Động từ + 的",
    "explanationVi": "Khi thêm '的' vào sau một từ hoặc cụm từ, nó sẽ biến cụm đó thành danh từ chỉ người hoặc vật đã được ngầm hiểu trong ngữ cảnh (như 老师的 - cái của thầy giáo; 白色的 - chiếc màu trắng; 便宜的 - loại rẻ; 妈妈做的 - món mẹ nấu).",
    "tips": "Giúp câu nói ngắn gọn, tránh phải lặp lại danh từ trung tâm nhiều lần.",
    "examples": [
      {
        "chinese": "老师的、白色的、便宜的、妈妈做的",
        "pinyin": "Lǎo shī de, bái sè de, biàn yí de, mā mā zuò de",
        "vietnamese": "Của thầy giáo, cái màu trắng, loại giá rẻ, đồ mẹ nấu."
      }
    ]
  },
  {
    "id": "hsk2-g-36",
    "order": 36,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Cụm liên động (Liên tiếp các động tác)",
    "titleZh": "连谓短语",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Chủ ngữ + Động từ 1 + (Tân ngữ 1) + Động từ 2 + (Tân ngữ 2)",
    "explanationVi": "Hai hoặc nhiều động từ cùng đi với một chủ ngữ, biểu thị hành động diễn ra liên tiếp theo thời gian hoặc động tác thứ nhất là phương thức/mục đích của động tác thứ hai (như 来上课 - đến để học; 去上海旅游 - đi Thượng Hải du lịch; 坐地铁去学校 - đi tàu điện ngầm đến trường).",
    "tips": "Không cần dùng từ nối giữa hai động từ.",
    "examples": [
      {
        "chinese": "来上课、去上海旅游、坐地铁去学校",
        "pinyin": "Lái shàng kè, qù shàng hǎi lǚ yóu, zuò dì tiě qù xué xiào",
        "vietnamese": "Đến lớp học, đi Thượng Hải du lịch, đi tàu điện ngầm đến trường."
      }
    ]
  },
  {
    "id": "hsk2-g-37",
    "order": 37,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Cụm kiêm ngữ (Tân ngữ của V1 là Chủ ngữ của V2)",
    "titleZh": "兼语短语",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Chủ ngữ + V1 (请/叫/让) + Tân ngữ (Kiêm ngữ) + V2",
    "explanationVi": "Từ đứng ở giữa vừa làm tân ngữ cho động từ thứ nhất, vừa làm chủ ngữ thực hiện động từ thứ hai (như 请他来 - mời anh ấy đến; 叫朋友帮忙 - nhờ bạn giúp; 让妈妈洗衣服 - để mẹ giặt đồ).",
    "tips": "V1 thường là các động từ sai khiến, nhờ vả như 请, 叫, 让.",
    "examples": [
      {
        "chinese": "请他来、叫朋友帮忙、让妈妈洗衣服",
        "pinyin": "Qǐng tā lái, jiào péng yǒu bāng máng, ràng mā mā xǐ yī fú",
        "vietnamese": "Mời anh ấy đến, nhờ bạn giúp đỡ, để mẹ giặt quần áo."
      }
    ]
  },
  {
    "id": "hsk2-g-38",
    "order": 38,
    "category": "pronouns_words",
    "categoryName": "Đại từ, Lượng từ & Phương vị",
    "categoryIcon": "📍",
    "titleVi": "Cụm danh từ mở rộng (Định ngữ + Danh từ)",
    "titleZh": "名词性短语",
    "grammarType": "短语",
    "categoryType": "名词性短语",
    "grammarDetail": "名词性短语",
    "structure": "Định ngữ (Tính từ / Sở hữu / Số lượng) + Danh từ trung tâm",
    "explanationVi": "Tập hợp các cụm danh từ phong phú biểu đạt khái niệm rõ ràng trong giao tiếp (như 新电脑 - máy tính mới; 老师的书 - sách của thầy; 火车票 - vé tàu hỏa; 一个男孩 - một cậu bé).",
    "tips": "Trong tiếng Trung, mọi thành phần bổ nghĩa cho danh từ đều phải đứng TRƯỚC danh từ.",
    "examples": [
      {
        "chinese": "新电脑、老师的书、火车票、一个男孩、两条、这间",
        "pinyin": "Xīn diàn nǎo, lǎo shī de shū, huǒ chē piào, yī gè nán hái, liǎng tiáo, zhè jiān",
        "vietnamese": "Máy tính mới, sách của thầy giáo, vé tàu hỏa, một cậu bé, hai sợi/chiếc, căn phòng này."
      }
    ]
  },
  {
    "id": "hsk2-g-39",
    "order": 39,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Cụm động từ mở rộng (Phó từ / Giới từ + Động từ + Tân ngữ)",
    "titleZh": "动词性短语",
    "grammarType": "短语",
    "categoryType": "动词性短语",
    "grammarDetail": "动词性短语",
    "structure": "Trạng ngữ + Động từ + Tân ngữ / Bổ ngữ",
    "explanationVi": "Cụm từ biểu đạt hoạt động hoàn chỉnh (như 写汉字 - viết chữ Hán; 经常上网 - thường xuyên lướt mạng; 可以进去 - có thể đi vào; 听懂 - nghe hiểu).",
    "tips": "Đây là khối xây dựng cơ bản để cấu thành các câu vị ngữ động từ.",
    "examples": [
      {
        "chinese": "写汉字、听懂、回去、经常上网、可以进去",
        "pinyin": "Xiě hàn zì, tīng dǒng, huí qù, jīng cháng shàng wǎng, kě yǐ jìn qù",
        "vietnamese": "Viết chữ Hán, nghe hiểu, trở về, thường xuyên lên mạng, có thể đi vào."
      }
    ]
  },
  {
    "id": "hsk2-g-40",
    "order": 40,
    "category": "verbs_adjectives",
    "categoryName": "Động từ & Tính từ",
    "categoryIcon": "⚡",
    "titleVi": "Cụm tính từ mở rộng (Phó từ mức độ + Tính từ)",
    "titleZh": "形容词性短语",
    "grammarType": "短语",
    "categoryType": "形容词性短语",
    "grammarDetail": "形容词性短语",
    "structure": "Phó từ mức độ (很, 非常, 太) + Tính từ (+ 一点儿)",
    "explanationVi": "Miêu tả trạng thái, cảm xúc hoặc đặc tính với mức độ cụ thể (như 很累 - rất mệt; 非常忙 - vô cùng bận; 慢一点儿 - chậm hơn một chút).",
    "tips": "Khi làm vị ngữ trong câu khẳng định thông thường, trước tính từ luôn cần phó từ như '很'.",
    "examples": [
      {
        "chinese": "很累、非常忙、慢一点儿",
        "pinyin": "Hěn lèi, fēi cháng máng, màn yìdiǎnr",
        "vietnamese": "Rất mệt, cực kỳ bận rộn, chậm hơn một chút."
      }
    ]
  },
  {
    "id": "hsk2-g-41",
    "order": 41,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Cụm từ liệt kê không hết: 什么的 (Shénme de - ...vân vân)",
    "titleZh": "什么的",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "A、B + 什么的",
    "explanationVi": "Đặt ở cuối chuỗi liệt kê các danh từ hoặc hành động để biểu thị ý 'vân vân', 'các thứ tương tự' trong khẩu ngữ thân mật.",
    "tips": "Tương đương với '等等' (děngděng) nhưng mang phong cách khẩu ngữ tự nhiên hơn.",
    "examples": [
      {
        "chinese": "他喜欢唱歌、跳舞什么的。",
        "pinyin": "Tā xǐ huān chàng gē, tiào wǔ shén me de.",
        "vietnamese": "Anh ấy thích ca hát, khiêu vũ vân vân."
      },
      {
        "chinese": "足球、篮球什么的，我都喜欢。",
        "pinyin": "Zú qiú, lán qiú shén me de, wǒ dōu xǐ huān.",
        "vietnamese": "Bóng đá, bóng rổ các kiểu, tôi đều thích cả."
      }
    ]
  },
  {
    "id": "hsk2-g-42",
    "order": 42,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Cấu trúc gợi ý lựa chọn tối ưu: 还是……吧 (Háishi... ba - Hay là... đi)",
    "titleZh": "还是……吧",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 还是 + Hành động + 吧",
    "explanationVi": "Dùng để đưa ra lời khuyên, đề xuất hoặc phương án sau khi suy xét, so sánh với các phương án khác (như 还是你点吧 - hay là bạn gọi món đi; 还是去医院看看吧 - tốt nhất là nên đi bệnh viện khám).",
    "tips": "Ngữ khí rất nhẹ nhàng, lịch sự và mang tính xây dựng cao.",
    "examples": [
      {
        "chinese": "这些菜我都没吃过，还是你点吧。",
        "pinyin": "Zhè xiē cài wǒ dōu méi chī guò, hái shì nǐ diǎn ba.",
        "vietnamese": "Những món này tôi đều chưa từng ăn qua, hay là bạn gọi món đi."
      },
      {
        "chinese": "你还是去医院看看吧。",
        "pinyin": "Nǐ hái shì qù yī yuàn kàn kàn ba.",
        "vietnamese": "Tốt nhất là bạn nên đi bệnh viện khám thử xem."
      }
    ]
  },
  {
    "id": "hsk2-g-43",
    "order": 43,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Cấu trúc sắp xảy ra hành động: 要 / 快要 / 就要……了 (Sắp... rồi)",
    "titleZh": "要/快要/就要……了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 要 / 快要 / 就要 + Động từ + 了",
    "explanationVi": "Biểu thị một hành động hoặc tình huống sắp sửa xảy ra trong một tương lai rất gần (như 电影要开始了 - phim sắp chiếu rồi; 我们快要开学了 - chúng tôi sắp vào năm học mới; 下星期就要考试了).",
    "tips": "Nếu trong câu có trạng ngữ thời gian cụ thể (như 下星期, 明天, 八点) thì bắt buộc dùng '就要...了', KHÔNG dùng '快要...了'.",
    "examples": [
      {
        "chinese": "电影要开始了。",
        "pinyin": "Diàn yǐng yào kāi shǐ le.",
        "vietnamese": "Phim sắp bắt đầu chiếu rồi."
      },
      {
        "chinese": "我们快要开学了。",
        "pinyin": "Wǒ men kuài yào kāi xué le.",
        "vietnamese": "Chúng tôi sắp khai giảng vào năm học mới rồi."
      },
      {
        "chinese": "下星期就要考试了。",
        "pinyin": "Xià xīng qī jiù yào kǎo shì le.",
        "vietnamese": "Tuần sau là chuẩn bị thi rồi đấy."
      }
    ]
  },
  {
    "id": "hsk2-g-44",
    "order": 44,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Cấu trúc nhấn mạnh thời gian/sự việc: 都……了 (Đã... rồi mà)",
    "titleZh": "都……了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "都 + Thời gian / Mức độ + 了 (+ Hành động khuyên can)",
    "explanationVi": "Dùng để nhấn mạnh thời gian đã quá muộn, hoặc tình hình đã đến mức độ nào đó, thường mang sắc thái giục giã, nhắc nhở hoặc ngạc nhiên (như 都这么晚了 - đã muộn thế này rồi; 都十一点了 - đã 11 giờ rồi).",
    "tips": "Vế sau thường đi kèm câu mệnh lệnh hoặc câu hỏi tu từ.",
    "examples": [
      {
        "chinese": "都这么晚了，你怎么还不睡觉？",
        "pinyin": "Dōu zhè me wǎn le, nǐ zěn me hái bù shuì jué?",
        "vietnamese": "Đã muộn thế này rồi, sao bạn vẫn còn chưa đi ngủ?"
      },
      {
        "chinese": "都十一点了，别看电视了。",
        "pinyin": "Dōu shí yī diǎn le, bié kàn diàn shì le.",
        "vietnamese": "Đã 11 giờ rồi, đừng xem ti vi nữa."
      }
    ]
  },
  {
    "id": "hsk2-g-45",
    "order": 45,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu có chủ ngữ chịu tác động (Chủ ngữ tiếp nhận / 受事主语)",
    "titleZh": "受事主语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Đối tượng chịu tác động (Tân ngữ) + (Chủ ngữ thực hiện) + Động từ + Thành phần khác",
    "explanationVi": "Đưa đối tượng tiếp nhận hành động (vốn là tân ngữ) lên đầu câu làm chủ ngữ để nhấn mạnh kết quả hoặc trạng thái xử lý của đối tượng đó (như 水果都吃完了 - hoa quả ăn hết rồi; 那本书我看过了 - cuốn sách đó tôi xem rồi).",
    "tips": "Đây là dạng câu bị động tự nhiên không cần dùng chữ '被'.",
    "examples": [
      {
        "chinese": "水果都吃完了。",
        "pinyin": "Shuǐ guǒ dōu chī wán le.",
        "vietnamese": "Hoa quả đều đã ăn hết sạch rồi."
      },
      {
        "chinese": "那本书我看过了。",
        "pinyin": "Nà běn shū wǒ kàn guò le.",
        "vietnamese": "Quyển sách đó tôi đã đọc qua rồi."
      }
    ]
  },
  {
    "id": "hsk2-g-46",
    "order": 46,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu vị ngữ cụm danh từ (Tuổi tác, quê quán, ngoại hình)",
    "titleZh": "名词性短语作谓语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Cụm danh từ / Cụm số lượng (không cần '是')",
    "explanationVi": "Dùng cụm danh từ hoặc số lượng làm vị ngữ trực tiếp để miêu tả quê quán, tuổi tác, ngoại hình, thời gian hoặc giá cả mà không cần dùng động từ '是' (như 王老师上海人 - Thầy Vương người Thượng Hải; 四十多岁 - ngoài 40 tuổi).",
    "tips": "Thường dùng trong khẩu ngữ khi nói ngắn gọn về thông tin cá nhân.",
    "examples": [
      {
        "chinese": "她高个子、大眼睛，很漂亮。",
        "pinyin": "Tā gāo gè zi, dà yǎn jīng, hěn piāo liàng.",
        "vietnamese": "Cô ấy dáng người cao ráo, mắt to tròn, rất xinh đẹp."
      },
      {
        "chinese": "王老师上海人，四十多岁。",
        "pinyin": "Wáng lǎo shī shàng hǎi rén, sì shí duō suì.",
        "vietnamese": "Thầy Vương là người Thượng Hải, ngoài bốn mươi tuổi."
      }
    ]
  },
  {
    "id": "hsk2-g-47",
    "order": 47,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Định ngữ là Cụm động từ hoặc Cụm chủ vị",
    "titleZh": "动词或动词性短语、主谓短语作定语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Cụm Động từ / Cụm Chủ vị + 的 + Danh từ trung tâm",
    "explanationVi": "Dùng cả một hành động hoặc một mệnh đề chủ vị đứng trước '的' để bổ nghĩa làm rõ cho danh từ theo sau (như 那个唱歌的女孩儿 - cô bé đang hát kia; 我学习汉语的学校 - ngôi trường mà tôi học tiếng Trung; 电影开始的时间 - thời gian phim bắt đầu chiếu).",
    "tips": "Quy tắc dịch tiếng Việt: Dịch danh từ sau chữ '的' trước, rồi mới dịch vế hành động bổ nghĩa.",
    "examples": [
      {
        "chinese": "那个唱歌的女孩儿是谁？",
        "pinyin": "Nà gè chàng gē de nǚ hái ér shì shuí?",
        "vietnamese": "Bé gái đang hát đằng kia là ai vậy?"
      },
      {
        "chinese": "这就是儿子我学习汉语的学校。",
        "pinyin": "Zhè jiù shì ér zi wǒ xué xí hàn yǔ de xué xiào.",
        "vietnamese": "Đây chính là ngôi trường mà tôi học tiếng Trung."
      },
      {
        "chinese": "我还不知道电影开始的时间。",
        "pinyin": "Wǒ hái bù zhī dào diàn yǐng kāi shǐ de shí jiān.",
        "vietnamese": "Tôi vẫn chưa biết thời gian bộ phim bắt đầu chiếu."
      }
    ]
  },
  {
    "id": "hsk2-g-48",
    "order": 48,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ kết quả: 错, 懂, 好, 会, 完 (Làm sai, hiểu, xong, biết, hết)",
    "titleZh": "动词+错/懂/好/会/完",
    "grammarType": "句子成分",
    "categoryType": "结果补语1",
    "grammarDetail": "结果补语1",
    "structure": "Động từ + 错 / 懂 / 好 / 会 / 完 (+ 了)",
    "explanationVi": "Đứng ngay sát sau động từ để biểu thị kết quả trực tiếp của hành động:\n• 写错: viết sai\n• 听懂: nghe hiểu\n• 洗好: giặt xong xuôi tốt đẹp\n• 学会: học đã nắm vững / biết làm\n• 做完: làm xong hết sạch",
    "tips": "Phủ định dùng '没(有) + Động từ + Bổ ngữ' (không có '了'), ví dụ: 我没做完.",
    "examples": [
      {
        "chinese": "这个字你写错了。",
        "pinyin": "Zhè gè zì nǐ xiě cuò le.",
        "vietnamese": "Chữ này bạn viết sai rồi."
      },
      {
        "chinese": "老师的话你听懂了吗？",
        "pinyin": "Lǎo shī de huà nǐ tīng dǒng le ma?",
        "vietnamese": "Lời của thầy giáo bạn đã nghe hiểu chưa?"
      },
      {
        "chinese": "衣服已经洗好了。",
        "pinyin": "Yī fú yǐ jīng xǐ hǎo le.",
        "vietnamese": "Quần áo đã được giặt xong xuôi rồi."
      },
      {
        "chinese": "我学会游泳了。",
        "pinyin": "Wǒ xué huì yóu yǒng le.",
        "vietnamese": "Tôi đã học biết bơi rồi."
      },
      {
        "chinese": "题太多了，我没做完。",
        "pinyin": "Tí tài duō le, wǒ méi zuò wán.",
        "vietnamese": "Bài tập nhiều quá, tôi vẫn chưa làm xong hết."
      }
    ]
  },
  {
    "id": "hsk2-g-49",
    "order": 49,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ xu hướng đơn giản: 动词 + 来 / 去 (Hướng về / Rời xa)",
    "titleZh": "简单趋向补语的趋向意义用法：动词+来/去",
    "grammarType": "句子成分",
    "categoryType": "趋向补语1",
    "grammarDetail": "趋向补语1",
    "structure": "Động từ + 来 (hướng về phía người nói) | Động từ + 去 (rời xa người nói)",
    "explanationVi": "Dùng '来' khi hướng chuyển động tiến lại gần vị trí của người nói (như 上来 - đi lên đây), dùng '去' khi hướng chuyển động rời xa vị trí người nói (như 回去 - quay trở về bên đó).",
    "tips": "Điểm mấu chốt để chọn '来' hay '去' hoàn toàn phụ thuộc vào vị trí hiện tại của người đang nói.",
    "examples": [
      {
        "chinese": "你上来吧，我在楼上等你。",
        "pinyin": "Nǐ shàng lái ba, wǒ zài lóu shàng děng nǐ.",
        "vietnamese": "Bạn đi lên đây đi, tôi đang đợi bạn ở trên lầu."
      },
      {
        "chinese": "太晚了，你快回去吧。",
        "pinyin": "Tài wǎn le, nǐ kuài huí qù ba.",
        "vietnamese": "Muộn quá rồi, bạn mau quay về đi thôi."
      }
    ]
  },
  {
    "id": "hsk2-g-50",
    "order": 50,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ xu hướng đơn giản: 上, 下, 进, 出, 过, 回",
    "titleZh": "简单趋向补语的趋向意义用法：动词+上/下/进/出/过/回",
    "grammarType": "句子成分",
    "categoryType": "趋向补语1",
    "grammarDetail": "趋向补语1",
    "structure": "Động từ + 上 / 下 / 进 / 出 / 过 / 回 (+ Nơi chốn / Tân ngữ)",
    "explanationVi": "Biểu thị phương hướng dịch chuyển cụ thể trong không gian:\n• 飞上 (bay lên)\n• 跑下 (chạy xuống)\n• 走进 (bước vào)\n• 拿出 (lấy ra)\n• 走回 (đi bộ về)",
    "tips": "Nếu tân ngữ là địa điểm nơi chốn, địa điểm phải đứng TRỰC TIẾP sau các bổ ngữ này (như 跑下楼, 走进教室).",
    "examples": [
      {
        "chinese": "飞机飞上天了。",
        "pinyin": "Fēi jī fēi shàng tiān le.",
        "vietnamese": "Máy bay đã bay vút lên bầu trời."
      },
      {
        "chinese": "弟弟跑下楼了。",
        "pinyin": "Dì dì pǎo xià lóu le.",
        "vietnamese": "Em trai đã chạy tót xuống dưới lầu."
      },
      {
        "chinese": "老师走进办公室了。",
        "pinyin": "Lǎo shī zǒu jìn bàn gōng shì le.",
        "vietnamese": "Thầy giáo đã bước vào văn phòng làm việc."
      },
      {
        "chinese": "他从包里拿出一本书。",
        "pinyin": "Tā cóng bāo lǐ ná chū yī běn shū.",
        "vietnamese": "Anh ấy lấy ra một quyển sách từ trong túi xách."
      },
      {
        "chinese": "我们一起走回学校吧。",
        "pinyin": "Wǒ men yī qǐ zǒu huí xué xiào ba.",
        "vietnamese": "Chúng ta cùng nhau đi bộ quay về trường nhé."
      }
    ]
  },
  {
    "id": "hsk2-g-51",
    "order": 51,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ xu hướng phức (Động từ + 出来, 进去, 起来, 下来...)",
    "titleZh": "复合趋向补语的趋向意义用法：动词+出来/出去/过来/过去/回来/回去/进来/进去/起来/上来/上去/下来/下去",
    "grammarType": "句子成分",
    "categoryType": "趋向补语1",
    "grammarDetail": "趋向补语1",
    "structure": "Động từ + 出来 / 出去 / 过来 / 过去 / 回来 / 回去 / 进来 / 进去 / 起来 / 上来 / 上去 / 下来 / 下去",
    "explanationVi": "Kết hợp giữa động từ chỉ hướng (上, 下, 进, 出, 回, 过, 起) với '来/去' để biểu thị phương hướng di chuyển chi tiết và toàn diện trong không gian:\n• 拿出来: cầm lấy ra đây\n• 买回来: mua mang về đây\n• 站起来: đứng bật dậy\n• 送上去: mang gửi lên trên kia",
    "tips": "Nếu có tân ngữ chỉ địa điểm thì bắt buộc chèn vào giữa: 'Động từ + 进/出/上/下... + Địa điểm + 来/去' (ví dụ: 走进教室来).",
    "examples": [
      {
        "chinese": "车开过来了，大家快上车。",
        "pinyin": "Chē kāi guò lái le, dà jiā kuài shàng chē.",
        "vietnamese": "Xe đã chạy đến nơi rồi, mọi người mau lên xe đi."
      },
      {
        "chinese": "她在那边等着呢，咱们走过去吧。",
        "pinyin": "Tā zài nà biān děng zhe ne, zán men zǒu guò qù ba.",
        "vietnamese": "Cô ấy đang đợi ở đằng kia đấy, chúng mình cùng bước qua đó đi."
      },
      {
        "chinese": "他从书包里拿出来一本中文书。",
        "pinyin": "Tā cóng shū bāo lǐ ná chū lái yī běn zhōng wén shū.",
        "vietnamese": "Cậu ấy lấy ra từ trong cặp một cuốn sách tiếng Trung."
      },
      {
        "chinese": "妈妈从超市买回来一些水果。",
        "pinyin": "Mā mā cóng chāo shì mǎi huí lái yī xiē shuǐ guǒ.",
        "vietnamese": "Mẹ đã mua mang về một ít hoa quả từ siêu thị."
      },
      {
        "chinese": "王老师我走进教室来了。",
        "pinyin": "Wáng lǎo shī wǒ zǒu jìn jiào shì lái le.",
        "vietnamese": "Thầy giáo Vương đã bước vào trong lớp học rồi."
      },
      {
        "chinese": "咱们的车能开进学校去吗？",
        "pinyin": "Zán men de chē néng kāi jìn xué xiào qù ma?",
        "vietnamese": "Xe của chúng mình có thể lái chạy vào trong trường được không?"
      },
      {
        "chinese": "你可以站起来吗？",
        "pinyin": "Nǐ kě yǐ zhàn qǐ lái ma?",
        "vietnamese": "Bạn có thể đứng dậy một chút được không?"
      },
      {
        "chinese": "他们怎么还没有走上来？",
        "pinyin": "Tā men zěn me hái méi yǒu zǒu shàng lái?",
        "vietnamese": "Sao bọn họ vẫn còn chưa đi bộ lên đến đây nhỉ?"
      },
      {
        "chinese": "你在楼上等我，我给你送上去。",
        "pinyin": "Nǐ zài lóu shàng děng wǒ, wǒ gěi nǐ sòng shàng qù.",
        "vietnamese": "Bạn ở trên lầu đợi tôi nhé, tôi sẽ mang gửi lên cho bạn."
      },
      {
        "chinese": "他们从山上走下来了。",
        "pinyin": "Tā men cóng shān shàng zǒu xià lái le.",
        "vietnamese": "Họ đã đi bộ từ trên núi xuống dưới đây rồi."
      },
      {
        "chinese": "这些东西你帮我拿下去吧。",
        "pinyin": "Zhè xiē dōng xī nǐ bāng wǒ ná xià qù ba.",
        "vietnamese": "Mớ đồ này bạn giúp tôi cầm mang xuống dưới nhé."
      }
    ]
  },
  {
    "id": "hsk2-g-52",
    "order": 52,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ trạng thái: 动词 + 得 + Cụm tính từ (Đánh giá mức độ)",
    "titleZh": "动词+得+形容词性短语",
    "grammarType": "句子成分",
    "categoryType": "状态补语1",
    "grammarDetail": "状态补语1",
    "structure": "Động từ + 得 + Phó từ mức độ + Tính từ",
    "explanationVi": "Đứng sau động từ để miêu tả, nhận xét hoặc đánh giá về kết quả, trạng thái hay trình độ thực hiện của động tác (như 玩儿得很高兴 - chơi rất vui; 打得很好 - đánh bóng rất cừ).",
    "tips": "Nếu động từ có mang tân ngữ, phải lặp lại động từ trước '得': 'Động từ + Tân ngữ + Động từ + 得 + Tính từ' (ví dụ: 他打篮球打得很好).",
    "examples": [
      {
        "chinese": "大家玩儿得很高兴。",
        "pinyin": "Dà jiā wánr dé hěn gāo xīng.",
        "vietnamese": "Mọi người chơi đùa vô cùng vui vẻ."
      },
      {
        "chinese": "他篮球打得很好。",
        "pinyin": "Tā lán qiú dǎ dé hěn hǎo.",
        "vietnamese": "Anh ấy chơi bóng rổ rất giỏi."
      }
    ]
  },
  {
    "id": "hsk2-g-53",
    "order": 53,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ thời lượng: Khoảng thời gian hành động kéo dài",
    "titleZh": "表示动作持续的时间",
    "grammarType": "句子成分",
    "categoryType": "数量补语2",
    "grammarDetail": "数量补语2",
    "structure": "Chủ ngữ + Động từ + 了 + Khoảng thời gian (+ 了)",
    "explanationVi": "Biểu thị một hành động kéo dài trong bao lâu (như 学了两年 - đã học 2 năm; 等了一个多小时 - đợi hơn 1 tiếng; 看了一晚上 - xem suốt cả tối).",
    "tips": "Nếu cuối câu có thêm '了' (như 学了两年了) nghĩa là hành động vẫn đang tiếp tục diễn ra ở hiện tại.",
    "examples": [
      {
        "chinese": "我学了两年中文了。",
        "pinyin": "Wǒ xué le liǎng nián zhōng wén le.",
        "vietnamese": "Tôi đã học tiếng Trung được hai năm nay rồi."
      },
      {
        "chinese": "我等了她一个多小时。",
        "pinyin": "Wǒ děng le tā yī gè duō xiǎo shí.",
        "vietnamese": "Tôi đã đứng đợi cô ấy hơn một tiếng đồng hồ."
      },
      {
        "chinese": "他们昨天看了一晚上的电视。",
        "pinyin": "Tā men zuó tiān kàn le yī wǎn shàng de diàn shì.",
        "vietnamese": "Hôm qua họ đã ngồi xem tivi suốt cả buổi tối."
      }
    ]
  },
  {
    "id": "hsk2-g-54",
    "order": 54,
    "category": "complements",
    "categoryName": "Các loại Bổ ngữ",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ số lượng sau tính từ: Mức độ chênh lệch",
    "titleZh": "形容词+数量补语",
    "grammarType": "句子成分",
    "categoryType": "数量补语2",
    "grammarDetail": "数量补语2",
    "structure": "Tính từ + Bổ ngữ số lượng (一些 / 一点儿 / Con số cụ thể)",
    "explanationVi": "Đứng sau tính từ để chỉ rõ mức độ hoặc số lượng chênh lệch (như 快一些 - nhanh hơn một chút; 大两岁 - lớn hơn hai tuổi).",
    "tips": "Thường được dùng trong các mẫu câu so sánh với '比'.",
    "examples": [
      {
        "chinese": "坐地铁比坐公交车快一些。",
        "pinyin": "Zuò dì tiě bǐ zuò gōng jiāo chē kuài yī xiē.",
        "vietnamese": "Đi tàu điện ngầm nhanh hơn đi xe buýt một chút."
      },
      {
        "chinese": "我哥哥比我大两岁。",
        "pinyin": "Wǒ gē gē bǐ wǒ dà liǎng suì.",
        "vietnamese": "Anh trai lớn hơn tôi hai tuổi."
      }
    ]
  },
  {
    "id": "hsk2-g-55",
    "order": 55,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu vị ngữ chủ vị (Chủ ngữ lớn + Vị ngữ là cụm Chủ vị)",
    "titleZh": "主谓句4：主谓谓语句",
    "grammarType": "句子的类型",
    "categoryType": "单句",
    "grammarDetail": "单句",
    "structure": "Chủ ngữ lớn + [Chủ ngữ nhỏ + Vị ngữ nhỏ]",
    "explanationVi": "Thành phần vị ngữ của câu là cả một cụm chủ - vị. Thường dùng khi chủ ngữ nhỏ là một bộ phận, thuộc tính của chủ ngữ lớn (như 她个子很高 - cô ấy dáng người rất cao; 这件事我知道 - việc này tôi biết).",
    "tips": "Giúp câu văn tự nhiên, tránh dùng quá nhiều trợ từ sở hữu '的'.",
    "examples": [
      {
        "chinese": "她个子很高。",
        "pinyin": "Tā gè zi hěn gāo.",
        "vietnamese": "Cô ấy vóc dáng rất cao ráo."
      },
      {
        "chinese": "这件事我知道。",
        "pinyin": "Zhè jiàn shì wǒ zhī dào.",
        "vietnamese": "Chuyện này tôi biết rất rõ."
      }
    ]
  },
  {
    "id": "hsk2-g-56",
    "order": 56,
    "category": "questions_imperatives",
    "categoryName": "Câu hỏi & Mệnh lệnh",
    "categoryIcon": "❓",
    "titleVi": "Câu hỏi lựa chọn với “还是” (Háishi - Hay là...)",
    "titleZh": "用“还是”连接的选择问句",
    "grammarType": "句子的类型",
    "categoryType": "疑问句",
    "grammarDetail": "疑问句",
    "structure": "Vế A + 还是 + Vế B? (hoặc: 是 A 还是 B?)",
    "explanationVi": "Đưa ra hai hay nhiều phương án để người nghe lựa chọn một trong số đó (như 是我自己去，还是你跟我一起去？; 你喜欢打篮球，还是喜欢踢足球？).",
    "tips": "Trong câu hỏi lựa chọn CHỈ dùng '还是', KHÔNG được dùng '或者' (vì 或者 chỉ dùng trong câu trần thuật khẳng định).",
    "examples": [
      {
        "chinese": "是我自己去，还是你跟我一起去？",
        "pinyin": "Shì wǒ zì jǐ qù, hái shì nǐ gēn wǒ yī qǐ qù?",
        "vietnamese": "Là tự tôi đi, hay là bạn đi cùng với tôi?"
      },
      {
        "chinese": "你喜欢打篮球，还是喜欢踢足球？",
        "pinyin": "Nǐ xǐ huān dǎ lán qiú, hái shì xǐ huān tī zú qiú?",
        "vietnamese": "Bạn thích chơi bóng rổ, hay là thích đá bóng?"
      }
    ]
  },
  {
    "id": "hsk2-g-57",
    "order": 57,
    "category": "questions_imperatives",
    "categoryName": "Câu hỏi & Mệnh lệnh",
    "categoryIcon": "❓",
    "titleVi": "Câu cầu khiến khuyên ngăn với “别” (Bié - Đừng...)",
    "titleZh": "用“别”的祈使句",
    "grammarType": "句子的类型",
    "categoryType": "祈使句",
    "grammarDetail": "祈使句",
    "structure": "别 + Động từ / Cụm động từ (+ 了)！",
    "explanationVi": "Dùng để khuyên bảo, can ngăn đối phương không làm việc gì đó vì điều đó không có lợi hoặc không cần thiết (như 别出去了 - đừng ra ngoài nữa; 别忘了 - đừng quên nhé).",
    "tips": "Có thể thay bằng '不要' với sắc thái tương đương.",
    "examples": [
      {
        "chinese": "下雨了，别出去了。",
        "pinyin": "Xià yǔ le, bié chū qù le.",
        "vietnamese": "Trời đang mưa, đừng ra ngoài nữa nhé."
      },
      {
        "chinese": "别忘了，明天有考试。",
        "pinyin": "Bié wàng le, míng tiān yǒu kǎo shì.",
        "vietnamese": "Đừng quên đấy nhé, ngày mai có buổi thi cử."
      }
    ]
  },
  {
    "id": "hsk2-g-58",
    "order": 58,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “是” miêu tả đặc điểm, thuộc tính: ……是……的",
    "titleZh": "表示说明或特征",
    "grammarType": "句子的类型",
    "categoryType": "“是”字句2",
    "grammarDetail": "“是”字句2",
    "structure": "Chủ ngữ + 是 + Tính từ + 的",
    "explanationVi": "Dùng để giải thích, miêu tả tính chất hoặc trạng thái vốn có của sự vật (như 那件衣服是新的 - chiếc áo đó là đồ mới; 这个手机是坏的 - điện thoại này bị hỏng rồi).",
    "tips": "Chữ '的' ở cuối câu có vai trò danh từ hóa thuộc tính.",
    "examples": [
      {
        "chinese": "那件衣服是新的。",
        "pinyin": "Nà jiàn yī fú shì xīn de.",
        "vietnamese": "Chiếc áo đó là đồ mới tinh."
      },
      {
        "chinese": "这个手机是坏的，不能用。",
        "pinyin": "Zhè gè shǒu jī shì huài de, bù néng yòng.",
        "vietnamese": "Chiếc điện thoại này bị hỏng rồi, không dùng được nữa."
      }
    ]
  },
  {
    "id": "hsk2-g-59",
    "order": 59,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “有” biểu thị đạt đến mức độ / số lượng",
    "titleZh": "表示达到",
    "grammarType": "句子的类型",
    "categoryType": "“有”字句2",
    "grammarDetail": "“有”字句2",
    "structure": "Chủ ngữ + 有 + Số lượng / Mức độ + (Tính từ)?",
    "explanationVi": "Dùng '有' để biểu thị sự ước chừng, phỏng đoán xem đối tượng đã đạt tới một mức độ, kích thước hoặc số lượng nào đó chưa (như 王老师有三十岁吗？; 有一百块钱吗？).",
    "tips": "Dạng phủ định là '没有', mang nghĩa chưa đạt đến mức đó.",
    "examples": [
      {
        "chinese": "王老师有三十岁吗？",
        "pinyin": "Wáng lǎo shī yǒu sān shí suì ma?",
        "vietnamese": "Thầy Vương liệu đã đến 30 tuổi chưa?"
      },
      {
        "chinese": "这些水果有一百块钱吗？",
        "pinyin": "Zhè xiē shuǐ guǒ yǒu yī bǎi kuài qián ma?",
        "vietnamese": "Số hoa quả này có đến 100 tệ không?"
      }
    ]
  },
  {
    "id": "hsk2-g-60",
    "order": 60,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu tồn hiện trạng thái tĩnh: 处所 + 动词 + 着 + Danh từ",
    "titleZh": "处所+动词+着(+数量短语)+名词",
    "grammarType": "句子的类型",
    "categoryType": "存现句2",
    "grammarDetail": "存现句2",
    "structure": "Từ chỉ nơi chốn + Động từ + 着 + (Số lượng từ) + Danh từ",
    "explanationVi": "Biểu thị ở một địa điểm nào đó đang tồn tại một sự vật hoặc người ở trạng thái tĩnh nhất định (như 门口站着一个人 - trước cửa đang có một người đứng; 教室里坐着十几个学生 - trong lớp đang có mười mấy học sinh ngồi).",
    "tips": "Danh từ sau động từ thường là đối tượng phiếm chỉ (chưa xác định), không dùng đại từ cụ thể như 他 hay 我的书.",
    "examples": [
      {
        "chinese": "门口站着一个人。",
        "pinyin": "Mén kǒu zhàn zhe yī gè rén.",
        "vietnamese": "Ở trước cửa đang có một người đứng đó."
      },
      {
        "chinese": "教室里坐着十几个学生。",
        "pinyin": "Jiào shì lǐ zuò zhe shí jǐ gè xué shēng.",
        "vietnamese": "Trong phòng học đang có mười mấy bạn học sinh ngồi."
      }
    ]
  },
  {
    "id": "hsk2-g-61",
    "order": 61,
    "category": "comparisons",
    "categoryName": "Câu so sánh",
    "categoryIcon": "⚖️",
    "titleVi": "Câu so sánh hơn cơ bản: A 比 B + Tính từ",
    "titleZh": "A比B+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句1",
    "grammarDetail": "比较句1",
    "structure": "A + 比 + B + Tính từ",
    "explanationVi": "Mẫu câu so sánh hơn cơ bản nhất trong tiếng Trung để khẳng định đối tượng A vượt trội hơn đối tượng B về một tính chất (như 姐姐比我高 - chị gái cao hơn tôi; 公交车比地铁便宜 - xe buýt rẻ hơn tàu điện ngầm).",
    "tips": "Tuyệt đối không chèn '很', '非常' trước tính từ so sánh.",
    "examples": [
      {
        "chinese": "姐姐比我高。",
        "pinyin": "Jiě jiě bǐ wǒ gāo.",
        "vietnamese": "Chị gái cao hơn tôi."
      },
      {
        "chinese": "公交车比地铁便宜。",
        "pinyin": "Gōng jiāo chē bǐ dì tiě biàn yí.",
        "vietnamese": "Xe buýt rẻ hơn tàu điện ngầm."
      }
    ]
  },
  {
    "id": "hsk2-g-62",
    "order": 62,
    "category": "comparisons",
    "categoryName": "Câu so sánh",
    "categoryIcon": "⚖️",
    "titleVi": "Câu so sánh hơn kèm mức độ chênh lệch: 一点儿, 得多, 多了, Số lượng",
    "titleZh": "A比B+形容词+数量补语/程度补语",
    "grammarType": "句子的类型",
    "categoryType": "比较句1",
    "grammarDetail": "比较句1",
    "structure": "A + 比 + B + Tính từ + (一点儿 / 得多 / 多了 / Số lượng cụ thể)",
    "explanationVi": "Nói rõ mức độ chênh lệch giữa hai đối tượng:\n• Chênh lệch ít: Tính từ + 一点儿 / 一些 (贵一点儿)\n• Chênh lệch nhiều: Tính từ + 得多 / 多了 (冷多了, 高得多)\n• Chênh lệch cụ thể: Tính từ + Số từ + Lượng từ (大两岁).",
    "tips": "Thành phần biểu thị mức độ chênh lệch luôn phải đặt SAU tính từ.",
    "examples": [
      {
        "chinese": "哥哥比我大两岁。",
        "pinyin": "Gē gē bǐ wǒ dà liǎng suì.",
        "vietnamese": "Anh trai lớn hơn tôi hai tuổi."
      },
      {
        "chinese": "咖啡比奶茶贵一点儿。",
        "pinyin": "Kā fēi bǐ nǎi chá guì yìdiǎnr.",
        "vietnamese": "Cà phê đắt hơn trà sữa một chút."
      },
      {
        "chinese": "今天比昨天冷多了。",
        "pinyin": "Jīn tiān bǐ zuó tiān lěng duō le.",
        "vietnamese": "Hôm nay lạnh hơn hôm qua nhiều lắm."
      },
      {
        "chinese": "姐姐的个子比妹妹高得多。",
        "pinyin": "Jiě jiě de gè zi bǐ mèi mèi gāo dé duō.",
        "vietnamese": "Chiều cao của chị gái cao hơn em gái rất nhiều."
      }
    ]
  },
  {
    "id": "hsk2-g-63",
    "order": 63,
    "category": "comparisons",
    "categoryName": "Câu so sánh",
    "categoryIcon": "⚖️",
    "titleVi": "Câu so sánh bằng & không bằng: A 有 / 没有 B + (那么) + Tính từ",
    "titleZh": "A有/没有B（+这么/那么）+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句1",
    "grammarDetail": "比较句1",
    "structure": "A + 有 / 没有 + B + (这么 / 那么) + Tính từ",
    "explanationVi": "• A 有 B + Tính từ: A đạt đến mức độ bằng như B (dùng trong câu hỏi hoặc giả định: 你有他高吗？).\n• A 没有 B + Tính từ: A không bằng B (dạng phủ định so sánh thông dụng nhất: 今天没有昨天冷; 我的汉语没有你好).",
    "tips": "'A 没有 B + Tính từ' dùng phổ biến hơn nhiều so với 'A 不比 B + Tính từ'.",
    "examples": [
      {
        "chinese": "你有他高吗？",
        "pinyin": "Nǐ yǒu tā gāo ma?",
        "vietnamese": "Bạn có cao bằng anh ấy không?"
      },
      {
        "chinese": "今天没有昨天（那么）冷。",
        "pinyin": "Jīn tiān méi yǒu zuó tiān (nà me) lěng.",
        "vietnamese": "Hôm nay không lạnh bằng hôm qua."
      },
      {
        "chinese": "我的汉语没有你（这么）好。",
        "pinyin": "Wǒ de hàn yǔ méi yǒu nǐ (zhè me) hǎo.",
        "vietnamese": "Tiếng Trung của tôi không được giỏi như bạn."
      }
    ]
  },
  {
    "id": "hsk2-g-64",
    "order": 64,
    "category": "comparisons",
    "categoryName": "Câu so sánh",
    "categoryIcon": "⚖️",
    "titleVi": "So sánh kết quả / trình độ động tác với Bổ ngữ trạng thái",
    "titleZh": "A比B+动词+得+形容词/A+动词+得+比+B+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句1",
    "grammarDetail": "比较句1",
    "structure": "A + 比 + B + Động từ + 得 + Tính từ (hoặc: A + Động từ + 得 + 比 + B + Tính từ)",
    "explanationVi": "Dùng để so sánh xem ai thực hiện hành động tốt hơn, nhanh hơn hoặc khéo hơn (như 她比我说得好 - cô ấy nói hay hơn tôi; 我跑得比弟弟快 - tôi chạy nhanh hơn em trai).",
    "tips": "Cả hai vị trí đặt '比 B' (trước động từ hoặc sau chữ 得) đều hoàn toàn chính xác.",
    "examples": [
      {
        "chinese": "她比我说得好。",
        "pinyin": "Tā bǐ wǒ shuō dé hǎo.",
        "vietnamese": "Cô ấy nói tốt hơn tôi."
      },
      {
        "chinese": "我跑得比弟弟快。",
        "pinyin": "Wǒ pǎo dé bǐ dì dì kuài.",
        "vietnamese": "Tôi chạy nhanh hơn em trai."
      }
    ]
  },
  {
    "id": "hsk2-g-65",
    "order": 65,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Cấu trúc nhấn mạnh quá khứ: 是……的 (Thời gian, Địa điểm, Cách thức)",
    "titleZh": "强调时间、地点、方式、动作者",
    "grammarType": "句子的类型",
    "categoryType": "“是……的”句1",
    "grammarDetail": "“是……的”句1",
    "structure": "Chủ ngữ + 是 + [Thời gian / Địa điểm / Phương thức / Người thực hiện] + Động từ + 的",
    "explanationVi": "Khi hành động chắc chắn ĐÃ XẢY RA trong quá khứ, cấu trúc '是...的' dùng để nhấn mạnh chi tiết thời gian (我是去年来的), địa điểm (我们是在北京认识的), cách thức di chuyển (他们是坐飞机去的) hoặc người thực hiện (晚饭是我做的).",
    "tips": "Trong câu khẳng định có thể lược bỏ chữ '是', nhưng chữ '的' ở cuối câu bắt buộc phải giữ lại.",
    "examples": [
      {
        "chinese": "我是去年九月来中国的。",
        "pinyin": "Wǒ shì qù nián jiǔ yuè lái zhōng guó de.",
        "vietnamese": "Tôi đến Trung Quốc vào tháng 9 năm ngoái."
      },
      {
        "chinese": "我们是在北京认识的。",
        "pinyin": "Wǒ men shì zài běi jīng rèn shí de.",
        "vietnamese": "Chúng tôi quen biết nhau tại Bắc Kinh."
      },
      {
        "chinese": "他们是坐飞机去上海的。",
        "pinyin": "Tā men shì zuò fēi jī qù shàng hǎi de.",
        "vietnamese": "Họ đến Thượng Hải bằng máy bay."
      },
      {
        "chinese": "今天的晚饭是我做的。",
        "pinyin": "Jīn tiān de wǎn fàn shì wǒ zuò de.",
        "vietnamese": "Bữa tối hôm nay do tôi tự tay nấu."
      }
    ]
  },
  {
    "id": "hsk2-g-66",
    "order": 66,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu kiêm ngữ sai khiến: 请, 叫, 让 (Mời, bảo, để/cho phép)",
    "titleZh": "表使令：主语+请/叫/让……+宾语1+动词+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "兼语句1",
    "grammarDetail": "兼语句1",
    "structure": "Chủ ngữ + 请 / 叫 / 让 + Người nhận lệnh + Làm việc gì",
    "explanationVi": "Biểu thị yêu cầu, ra lệnh hoặc cho phép người khác làm việc gì:\n• 请: mời, nhờ (lịch sự)\n• 叫: bảo, kêu (thân mật hàng ngày)\n• 让: để cho, bảo, nhường (cho phép hoặc giao việc).",
    "tips": "Dạng phủ định là đặt '不' hoặc '没' trước '请/叫/让' (như 妈妈没让我去).",
    "examples": [
      {
        "chinese": "妈妈叫我去超市买水果。",
        "pinyin": "Mā mā jiào wǒ qù chāo shì mǎi shuǐ guǒ.",
        "vietnamese": "Mẹ bảo tôi đi siêu thị mua hoa quả."
      },
      {
        "chinese": "我想请老师教我中文。",
        "pinyin": "Wǒ xiǎng qǐng lǎo shī jiào wǒ zhōng wén.",
        "vietnamese": "Tôi muốn mời thầy giáo dạy tiếng Trung cho tôi."
      },
      {
        "chinese": "老师让我们介绍一下自己的爱好。",
        "pinyin": "Lǎo shī ràng wǒ men jiè shào yī xià zì jǐ de ài hǎo.",
        "vietnamese": "Thầy giáo bảo chúng tôi giới thiệu đôi nét về sở thích của mình."
      }
    ]
  },
  {
    "id": "hsk2-g-67",
    "order": 67,
    "category": "sentence_patterns",
    "categoryName": "Cấu trúc câu đặc biệt",
    "categoryIcon": "⭐",
    "titleVi": "Câu hai tân ngữ với “给”: 送给, 借给, 卖给...",
    "titleZh": "主语+动词+给+宾语1+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "双宾语句2",
    "grammarDetail": "双宾语句2",
    "structure": "Chủ ngữ + Động từ (+ 给) + Tân ngữ 1 (Người) + Tân ngữ 2 (Vật)",
    "explanationVi": "Động từ mang hai tân ngữ cùng lúc: Tân ngữ 1 chỉ người tiếp nhận (tân ngữ gián tiếp) đứng trước, Tân ngữ 2 chỉ đồ vật chuyển giao (tân ngữ trực tiếp) đứng sau (như 送给我一个新手机 - tặng cho tôi một điện thoại mới; 卖给我一本书 - bán cho tôi một cuốn sách).",
    "tips": "Các động từ thường gặp: 给, 送给, 借给, 还给, 卖给, 递给.",
    "examples": [
      {
        "chinese": "爸爸送给我一个新手机。",
        "pinyin": "Bà bà sòng gěi wǒ yī gè xīn shǒu jī.",
        "vietnamese": "Bố tặng cho tôi một chiếc điện thoại mới."
      },
      {
        "chinese": "他卖给我一本中文书。",
        "pinyin": "Tā mài gěi wǒ yī běn zhōng wén shū.",
        "vietnamese": "Anh ấy bán lại cho tôi một quyển sách tiếng Trung."
      }
    ]
  },
  {
    "id": "hsk2-g-68",
    "order": 68,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức lựa chọn: （是）……，还是……",
    "titleZh": "（是）……，还是……",
    "grammarType": "句子的类型",
    "categoryType": "选择复句",
    "grammarDetail": "选择复句",
    "structure": "Chủ ngữ + (是) + Phương án A, + 还是 + Phương án B?",
    "explanationVi": "Liên kết hai vế câu để hỏi người đối thoại lựa chọn phương án nào (như 你是喝茶，还是喝咖啡？; 你喜欢白色的，还是黑色的？).",
    "tips": "Chữ '是' ở vế trước có thể lược bỏ.",
    "examples": [
      {
        "chinese": "你（是）喝茶，还是喝咖啡？",
        "pinyin": "Nǐ (shì) hē chá, hái shì hē kā fēi?",
        "vietnamese": "Bạn uống trà, hay là uống cà phê?"
      },
      {
        "chinese": "你（是）喜欢白色的，还是黑色的？",
        "pinyin": "Nǐ (shì) xǐ huān bái sè de, hái shì hēi sè de?",
        "vietnamese": "Bạn thích màu trắng, hay là màu đen?"
      }
    ]
  },
  {
    "id": "hsk2-g-69",
    "order": 69,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ: 虽然……，但是…… (Tuy... nhưng...)",
    "titleZh": "虽然……，但是……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "虽然 + Vế 1 (thừa nhận sự thật), + 但是 / 可是 + Vế 2 (chuyển ngoặt)",
    "explanationVi": "Biểu thị quan hệ nhượng bộ và đối lập, vế sau chuyển ngoặt ý nghĩa so với vế trước (như 虽然学习时间不长，但是说得很好 - tuy học chưa lâu nhưng nói rất tốt; 学汉语虽然难，但是很有意思).",
    "tips": "'虽然' có thể đứng trước hoặc đứng sau chủ ngữ của vế đầu.",
    "examples": [
      {
        "chinese": "虽然学习的时间不长，但是他汉语说得很好。",
        "pinyin": "Suī rán xué xí de shí jiān bù zhǎng, dàn shì tā hàn yǔ shuō dé hěn hǎo.",
        "vietnamese": "Tuy thời gian học không dài, nhưng anh ấy nói tiếng Trung rất tốt."
      },
      {
        "chinese": "学汉语虽然难，但是很有意思。",
        "pinyin": "Xué hàn yǔ suī rán nán, dàn shì hěn yǒu yì sī.",
        "vietnamese": "Học tiếng Trung tuy khó, nhưng rất thú vị."
      }
    ]
  },
  {
    "id": "hsk2-g-70",
    "order": 70,
    "category": "prepositions_conjunctions",
    "categoryName": "Giới từ & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả: 因为……，所以…… (Bởi vì... cho nên...)",
    "titleZh": "因为……，所以……",
    "grammarType": "句子的类型",
    "categoryType": "因果复句",
    "grammarDetail": "因果复句",
    "structure": "因为 + Vế nguyên nhân, + 所以 + Vế kết quả",
    "explanationVi": "Cặp liên từ nối vế chỉ nguyên nhân, lý do với vế chỉ kết quả phát sinh từ nguyên nhân đó (như 因为机票太贵了，所以我坐火车去; 因为爸爸在中国工作，所以我来这儿学中文).",
    "tips": "Trong khẩu ngữ, đôi khi có thể lược bớt '因为' hoặc '所以' mà nghĩa câu vẫn trọn vẹn.",
    "examples": [
      {
        "chinese": "因为机票太贵了，所以我准备坐火车去。",
        "pinyin": "Yīn wèi jī piào tài guì le, suǒ yǐ wǒ zhǔn bèi zuò huǒ chē qù.",
        "vietnamese": "Bởi vì vé máy bay đắt quá, nên tôi chuẩn bị đi bằng tàu hỏa."
      },
      {
        "chinese": "因为我爸爸在中国工作，所以我来这儿学习中文。",
        "pinyin": "Yīn wèi wǒ bà bà zài zhōng guó gōng zuò, suǒ yǐ wǒ lái zhèr xué xí zhōng wén.",
        "vietnamese": "Bởi vì bố tôi làm việc ở Trung Quốc, nên tôi đến đây để học tiếng Trung."
      }
    ]
  },
  {
    "id": "hsk2-g-71",
    "order": 71,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Cấu trúc hành động liên tiếp: 一……就…… (Vừa... liền / Hễ... là...)",
    "titleZh": "一……就……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "Chủ ngữ + 一 + Hành động 1 + 就 + Hành động 2",
    "explanationVi": "Biểu thị hai hành động xảy ra liên tiếp nhau rất nhanh trong thời gian ('vừa làm xong 1 là làm ngay 2'), hoặc hễ có điều kiện 1 xảy ra thì ắt dẫn đến kết quả 2 (như 一下课就去打球 - vừa tan học là đi chơi bóng ngay; 一到商场就想买东西 - hễ đến siêu thị là muốn mua sắm).",
    "tips": "Nếu hai hành động do hai chủ ngữ khác nhau thực hiện, '一' đứng sau chủ ngữ 1 và '就' đứng sau chủ ngữ 2.",
    "examples": [
      {
        "chinese": "他一下课就去打篮球了。",
        "pinyin": "Tā yī xià kè jiù qù dǎ lán qiú le.",
        "vietnamese": "Anh ấy vừa tan học là đi chơi bóng rổ ngay."
      },
      {
        "chinese": "我一到商场就想买东西。",
        "pinyin": "Wǒ yī dào shāng chǎng jiù xiǎng mǎi dōng xī.",
        "vietnamese": "Tôi hễ cứ đến trung tâm thương mại là lại muốn mua sắm."
      }
    ]
  },
  {
    "id": "hsk2-g-72",
    "order": 72,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Trạng thái tĩnh duy trì: 动词 + 着 (Đang ở trạng thái...)",
    "titleZh": "动词+着：表示状态的持续",
    "grammarType": "动作的态",
    "categoryType": "持续态",
    "grammarDetail": "持续态",
    "structure": "Chủ ngữ + Động từ + 着",
    "explanationVi": "Nhấn mạnh trạng thái tĩnh của người hoặc vật đang duy trì liên tục kết quả của một tư thế/hành động trước đó (như 门开着 - cửa đang mở; 别站着 - đừng đứng thế).",
    "tips": "Khác với hành vi đang cử động, ở đây không có sự biến đổi vị trí.",
    "examples": [
      {
        "chinese": "门开着，你进去吧。",
        "pinyin": "Mén kāi zhe, nǐ jìn qù ba.",
        "vietnamese": "Cửa đang mở đấy, bạn vào đi."
      },
      {
        "chinese": "别站着，快请坐。",
        "pinyin": "Bié zhàn zhe, kuài qǐng zuò.",
        "vietnamese": "Đừng đứng thế, mau mời ngồi."
      }
    ]
  },
  {
    "id": "hsk2-g-73",
    "order": 73,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Hành động đang tiếp diễn: 正 / 正在 + 动词 + 着……呢",
    "titleZh": "动词+着：表示动作的持续",
    "grammarType": "动作的态",
    "categoryType": "持续态",
    "grammarDetail": "持续态",
    "structure": "Chủ ngữ + 正 / 正在 + Động từ + 着 (+ Tân ngữ) + 呢",
    "explanationVi": "Phối hợp giữa phó từ '正/正在' và trợ từ '着...呢' để nhấn mạnh hành động đang trong quá trình tiến hành sôi nổi tại thời điểm nói (như 正吃着饭呢 - đang ăn cơm; 正上着课呢 - đang có tiết học).",
    "tips": "Cấu trúc này làm tăng tính sinh động và ngữ cảm của câu nói.",
    "examples": [
      {
        "chinese": "他们正吃着饭呢。",
        "pinyin": "Tā men zhèng chī zhe fàn ne.",
        "vietnamese": "Họ đang ăn cơm."
      },
      {
        "chinese": "教室里正上着课呢。",
        "pinyin": "Jiào shì lǐ zhèng shàng zhe kè ne.",
        "vietnamese": "Trong lớp học đang có giờ học."
      }
    ]
  },
  {
    "id": "hsk2-g-74",
    "order": 74,
    "category": "particles_aspects",
    "categoryName": "Trợ từ & Thời thể",
    "categoryIcon": "🛡️",
    "titleVi": "Kinh nghiệm từng trải: 动词 + 过 (Đã từng... qua)",
    "titleZh": "用动态助词“过”表示",
    "grammarType": "动作的态",
    "categoryType": "经历态",
    "grammarDetail": "经历态",
    "structure": "Chủ ngữ + Động từ + 过 + Tân ngữ",
    "explanationVi": "Biểu thị một hành vi hoặc kinh nghiệm nào đó đã từng được trải nghiệm qua trong quá khứ (như 学过中文 - từng học tiếng Trung; 没去过北京 - chưa từng đến Bắc Kinh).",
    "tips": "Tương đương với từ 'từng / đã từng' trong tiếng Việt.",
    "examples": [
      {
        "chinese": "你学过中文吗？",
        "pinyin": "Nǐ xué guò zhōng wén ma?",
        "vietnamese": "Bạn từng học qua tiếng Trung chưa?"
      },
      {
        "chinese": "我没去过北京。",
        "pinyin": "Wǒ méi qù guò běi jīng.",
        "vietnamese": "Tôi chưa từng đi Bắc Kinh bao giờ."
      }
    ]
  },
  {
    "id": "hsk2-g-75",
    "order": 75,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Số thứ tự trực tiếp không dùng '第': Số từ + Lượng từ",
    "titleZh": "序数表示法2：数词+量词",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ + Lượng từ (Tầng, Phòng, Tuyến đường, Năm, Tháng)",
    "explanationVi": "Trong tiếng Trung, rất nhiều trường hợp biểu thị thứ tự chỉ cần dùng trực tiếp Số từ + Lượng từ mà không cần thêm tiền tố '第' (như 三楼 - tầng 3; 304路 - tuyến xe buýt 304; 二月 - tháng 2; 2026年 - năm 2026).",
    "tips": "Phân biệt: 三楼 (tầng 3 - thứ tự) khác với 三层楼 (toà nhà có 3 tầng - số lượng).",
    "examples": [
      {
        "chinese": "我的房间在三楼。",
        "pinyin": "Wǒ de fáng jiān zài sān lóu.",
        "vietnamese": "Phòng của tôi ở trên tầng 3."
      },
      {
        "chinese": "你可以坐304路公交车。",
        "pinyin": "Nǐ kě yǐ zuò 3 0 4 lù gōng jiāo chē.",
        "vietnamese": "Bạn có thể đi tuyến xe buýt số 304."
      }
    ]
  },
  {
    "id": "hsk2-g-76",
    "order": 76,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Ước lượng số lượng bằng “几”: Vài, mấy (Dưới 10)",
    "titleZh": "概数表达法1：用“几”表示概数",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "几 + Lượng từ + Danh từ | Mười mấy: 十几 | Mấy chục: 几十 | Mấy trăm: 几百",
    "explanationVi": "Dùng '几' để biểu thị một số lượng ước chừng không xác định, thường là con số nhỏ dưới 10 (như 这几件衣服 - mấy bộ quần áo này; 几百名学生 - vài trăm sinh viên).",
    "tips": "Phân biệt: 十几个 (11 đến 19 cái) khác với 几十个 (vài chục cái).",
    "examples": [
      {
        "chinese": "这几件衣服你帮我洗一下。",
        "pinyin": "Zhè jǐ jiàn yī fú nǐ bāng wǒ xǐ yī xià.",
        "vietnamese": "Mấy bộ quần áo này bạn giúp tôi giặt giùm một chút."
      },
      {
        "chinese": "我们学校有几百名外国学生。",
        "pinyin": "Wǒ men xué xiào yǒu jǐ bǎi míng wài guó xué shēng.",
        "vietnamese": "Trường chúng tôi có vài trăm sinh viên nước ngoài."
      }
    ]
  },
  {
    "id": "hsk2-g-77",
    "order": 77,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Ước lượng với số tròn chục: Số từ + 多 + Lượng từ",
    "titleZh": "概数表达法1：数词+多+量词",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ tròn chục (10, 20, 100, 1000...) + 多 + Lượng từ + Danh từ",
    "explanationVi": "Khi số từ là số tròn chục, tròn trăm trở lên (có tận cùng là 0), chữ '多' bắt buộc đặt TRƯỚC lượng từ để biểu thị số lẻ thêm vào (như 二十多个学生 - hơn 20 học sinh, khoảng 21-29; 五千多块钱 - hơn 5.000 tệ).",
    "tips": "Quy tắc cốt lõi: Số tròn chục -> '多' đứng TRƯỚC lượng từ.",
    "examples": [
      {
        "chinese": "教室里有二十多个学生。",
        "pinyin": "Jiào shì lǐ yǒu èr shí duō gè xué shēng.",
        "vietnamese": "Trong phòng học có hơn 20 học sinh."
      },
      {
        "chinese": "那个手机五千多块钱。",
        "pinyin": "Nà gè shǒu jī wǔ qiān duō kuài qián.",
        "vietnamese": "Chiếc điện thoại đó hơn 5.000 tệ."
      }
    ]
  },
  {
    "id": "hsk2-g-78",
    "order": 78,
    "category": "special_expressions",
    "categoryName": "Cách nói & Ước lượng",
    "categoryIcon": "🕒",
    "titleVi": "Ước lượng với số lẻ / thời gian: Số từ + Lượng từ + 多",
    "titleZh": "概数表达法1：数词+量词+多",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ (dưới 10 hoặc không tròn) + Lượng từ + 多 (+ Danh từ)",
    "explanationVi": "Khi số từ là số lẻ dưới 10 hoặc có đơn vị đo lường phân chia nhỏ hơn, chữ '多' đặt SAU lượng từ để biểu thị phần dư lẻ nhỏ hơn đơn vị đó (như 三年多 - hơn 3 năm, tức 3 năm mấy tháng; 六岁多 - hơn 6 tuổi, tức 6 tuổi mấy tháng).",
    "tips": "Quy tắc cốt lõi: Số không tròn hoặc thời lượng -> '多' đứng SAU lượng từ.",
    "examples": [
      {
        "chinese": "我来中国已经三年多了。",
        "pinyin": "Wǒ lái zhōng guó yǐ jīng sān nián duō le.",
        "vietnamese": "Tôi đã đến Trung Quốc được hơn ba năm nay rồi."
      },
      {
        "chinese": "王老师的儿子今年六岁多了。",
        "pinyin": "Wáng lǎo shī de ér zi jīn nián liù suì duō le.",
        "vietnamese": "Con trai của thầy Vương năm nay hơn sáu tuổi rồi."
      }
    ]
  }
];
