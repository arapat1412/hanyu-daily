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

export const HSK3_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "ba_bei_sentences",
    "name": "Câu chữ 把 & Câu bị động 被",
    "icon": "⭐"
  },
  {
    "id": "complements_advanced",
    "name": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "icon": "🎯"
  },
  {
    "id": "compound_sentences",
    "name": "Câu phức & Liên từ nối",
    "icon": "🔗"
  },
  {
    "id": "comparisons_advanced",
    "name": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "icon": "⚖️"
  },
  {
    "id": "special_patterns",
    "name": "Cấu trúc đặc biệt & Câu tồn hiện",
    "icon": "🌟"
  },
  {
    "id": "modal_verbs_separable",
    "name": "Động từ năng nguyện & Ly hợp",
    "icon": "⚡"
  },
  {
    "id": "adverbs_modalities",
    "name": "Phó từ các loại",
    "icon": "🔥"
  },
  {
    "id": "prepositions",
    "name": "Giới từ phương hướng & đối tượng",
    "icon": "🛡️"
  },
  {
    "id": "pronouns_measures",
    "name": "Đại từ, Lượng từ & Số từ",
    "icon": "🔢"
  },
  {
    "id": "word_building",
    "name": "Cấu tạo từ & Thành phần câu",
    "icon": "🏗️"
  }
];

export const HSK3_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk3-g-01",
    "order": 1,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Tiền tố thân mật / thâm niên: 老- (Lǎo-)",
    "titleZh": "老—",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "老 + Họ (xưng hô thân mật) | 老 + Đại từ / Số từ",
    "explanationVi": "Tiền tố '老-' đứng trước họ của người quen thân, đồng nghiệp có tuổi tác hoặc thâm niên lớn hơn để gọi một cách gần gũi, tôn trọng (như 老李 - Lão Lý, 老王 - Lão Vương, 老张 - Lão Trương).",
    "tips": "Khác với '小-' (dành cho người ít tuổi hơn), '老-' dùng cho người ngang tuổi hoặc nhiều tuổi hơn.",
    "examples": [
      {
        "chinese": "这家饭店的经理老李是我的朋友。",
        "pinyin": "Zhè jiā fàn diàn de jīng lǐ lǎo lǐ shì wǒ de péng yǒu.",
        "vietnamese": "Giám đốc Lão Lý của nhà hàng này là bạn tôi."
      }
    ]
  },
  {
    "id": "hsk3-g-02",
    "order": 2,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Hậu tố danh từ hoá: -家, -子, -员",
    "titleZh": "—家、—子、—员",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Gốc từ + 家 (chuyên gia/nghệ sĩ) / 子 (sự vật) / 员 (thành viên/nhân viên)",
    "explanationVi": "Các hậu tố cấu tạo danh từ rất phổ biến:\n• -家: Chỉ người có chuyên môn sâu, nghệ sĩ (画家 - họa sĩ, 科学家 - nhà khoa học).\n• -子: Hậu tố tạo danh từ cụ thể (屋子 - căn phòng, 椅子 - cái ghế, 儿子 - con trai).\n• -员: Chỉ thành viên trong tổ chức, người làm nghề (运动员 - vận động viên, 服务员 - nhân viên phục vụ).",
    "tips": "Chữ '子' khi làm hậu tố luôn đọc thanh nhẹ (zi).",
    "examples": [
      {
        "chinese": "你听说过这个画家吗？",
        "pinyin": "Nǐ tīng shuō guò zhè gè huà jiā ma?",
        "vietnamese": "Bạn đã từng nghe nói về họa sĩ này chưa?"
      },
      {
        "chinese": "屋子有点儿小，可是很干净。",
        "pinyin": "Wū zi yǒu diǎn ér xiǎo, kě shì hěn gàn jìng.",
        "vietnamese": "Căn phòng hơi nhỏ một chút, nhưng rất sạch sẽ."
      },
      {
        "chinese": "她以前是一名羽毛球运动员。",
        "pinyin": "Tā yǐ qián shì yī míng yǔ máo qiú yùn dòng yuán.",
        "vietnamese": "Cô ấy trước đây từng là một vận động viên cầu lông."
      }
    ]
  },
  {
    "id": "hsk3-g-03",
    "order": 3,
    "category": "prepositions",
    "categoryName": "Giới từ & Phương vị",
    "categoryIcon": "🛡️",
    "titleVi": "Phương vị từ Bốn phương: Đông, Tây, Nam, Bắc (东, 西, 南, 北)",
    "titleZh": "东、南、西、北、北方、东方、南方、西方、中间",
    "grammarType": "词类",
    "categoryType": "方位名词",
    "grammarDetail": "方位名词",
    "structure": "东 (Đông), 南 (Nam), 西 (Tây), 北 (Bắc) | + 方 (vùng/miền) | 中间 (ở giữa)",
    "explanationVi": "Hệ thống từ chỉ phương hướng địa lý: 东方 (phương Đông), 西方 (phương Tây), 南方 (miền Nam), 北方 (miền Bắc) và vị trí ở giữa: 中间 (zhōngjiān).",
    "tips": "Người Trung Quốc thường gọi thứ tự là 'Đông Nam Tây Bắc' (东南西北).",
    "examples": [
      {
        "chinese": "我听说北方的冬天很冷。",
        "pinyin": "Wǒ tīng shuō běi fāng de dōng tiān hěn lěng.",
        "vietnamese": "Tôi nghe nói mùa đông ở miền bắc rất lạnh."
      },
      {
        "chinese": "中国的北方和南方我都去过。",
        "pinyin": "Zhōng guó de běi fāng hé nán fāng wǒ dōu qù guò.",
        "vietnamese": "Cả miền bắc lẫn miền nam Trung Quốc tôi đều từng đi qua rồi."
      },
      {
        "chinese": "你们两个人中间的那个人是谁？",
        "pinyin": "Nǐ men liǎng gè rén zhōng jiān de nà gè rén shì shuí?",
        "vietnamese": "Người đứng ở giữa hai bạn là ai vậy?"
      },
      {
        "chinese": "东方人和西方人的生活习惯不太一样。",
        "pinyin": "Dōng fāng rén hé xī fāng rén de shēng huó xí guàn bù tài yī yàng.",
        "vietnamese": "Thói quen sinh hoạt của người phương Đông và người phương Tây không giống nhau lắm."
      }
    ]
  },
  {
    "id": "hsk3-g-04",
    "order": 4,
    "category": "modal_verbs_separable",
    "categoryName": "Động từ năng nguyện & Ly hợp",
    "categoryIcon": "⚡",
    "titleVi": "Động từ năng nguyện nâng cao: 需要, 该, 应该, 愿意, 得",
    "titleZh": "需要、该、应该、愿意、得",
    "grammarType": "词类",
    "categoryType": "能愿动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + 需要 / 应该 / 该 / 愿意 / 得 (děi) + Động từ",
    "explanationVi": "• 需要 (xūyào): Cần, có nhu cầu cần làm.\n• 应该 (yīnggāi) / 该: Nên, cần phải (bổn phận, trách nhiệm lý lẽ).\n• 愿意 (yuànyì): Sẵn lòng, bằng lòng, tình nguyện.\n• 得 (děi): Phải (bắt buộc do tình thế, hoàn cảnh).",
    "tips": "Chú ý phát âm: Chữ '得' khi mang nghĩa 'phải' đọc là 'děi', không đọc là 'de'.",
    "examples": [
      {
        "chinese": "从这儿过去，大概需要多长时间？",
        "pinyin": "Cóng zhèr guò qù, dà gài xū yào duō zhǎng shí jiān?",
        "vietnamese": "Từ đây đi sang đó, đại khái mất khoảng bao lâu thời gian?"
      },
      {
        "chinese": "医生说我感冒了，需要吃药。",
        "pinyin": "Yī shēng shuō wǒ gǎn mào le, xū yào chī yào.",
        "vietnamese": "Bác sĩ nói tôi bị cảm rồi, cần phải uống thuốc."
      },
      {
        "chinese": "已经十一点了，你该睡觉了。",
        "pinyin": "Yǐ jīng shí yī diǎn le, nǐ gāi shuì jué le.",
        "vietnamese": "Đã 11 giờ rồi, bạn nên đi ngủ thôi."
      },
      {
        "chinese": "你学了一天了，该休息休息了。",
        "pinyin": "Nǐ xué le yī tiān le, gāi xiū xī xiū xī le.",
        "vietnamese": "Bạn học cả ngày rồi, nên nghỉ ngơi một chút đi."
      },
      {
        "chinese": "我们应该多练习说中文。",
        "pinyin": "Wǒ men yīng gāi duō liàn xí shuō zhōng wén.",
        "vietnamese": "Chúng ta nên luyện nói tiếng Trung nhiều hơn."
      },
      {
        "chinese": "我要去动物园，应该怎么坐车呢？",
        "pinyin": "Wǒ yào qù dòng wù yuán, yīng gāi zěn me zuò chē ne?",
        "vietnamese": "Tôi muốn đi sở thú, nên bắt xe như thế nào nhỉ?"
      },
      {
        "chinese": "你愿意帮我学习汉语吗？",
        "pinyin": "Nǐ yuàn yì bāng wǒ xué xí hàn yǔ ma?",
        "vietnamese": "Bạn có sẵn lòng giúp tôi học tiếng Hán không?"
      },
      {
        "chinese": "我很愿意参加这次汉语比赛。",
        "pinyin": "Wǒ hěn yuàn yì cān jiā zhè cì hàn yǔ bǐ sài.",
        "vietnamese": "Tôi rất sẵn lòng tham gia cuộc thi tiếng Hán lần này."
      },
      {
        "chinese": "要上课了，咱们得快点儿走。",
        "pinyin": "Yào shàng kè le, zán men dé kuài diǎn ér zǒu.",
        "vietnamese": "Sắp vào lớp rồi, chúng ta phải đi nhanh hơn một chút."
      },
      {
        "chinese": "我明天有考试，今天得认真复习。",
        "pinyin": "Wǒ míng tiān yǒu kǎo shì, jīn tiān dé rèn zhēn fù xí.",
        "vietnamese": "Ngày mai tôi có bài thi, hôm nay phải ôn tập thật nghiêm túc."
      }
    ]
  },
  {
    "id": "hsk3-g-05",
    "order": 5,
    "category": "modal_verbs_separable",
    "categoryName": "Động từ năng nguyện & Ly hợp",
    "categoryIcon": "⚡",
    "titleVi": "Từ ly hợp động tân: 放假, 见面, 结婚, 洗澡",
    "titleZh": "动宾式离合词：放假、见面、结婚、洗澡",
    "grammarType": "词类",
    "categoryType": "离合词",
    "grammarDetail": "离合词",
    "structure": "Động từ + Thành phần xen giữa (trợ từ 了/过, số lượng, thời lượng) + Danh từ",
    "explanationVi": "Là các từ có cấu trúc Động từ + Tân ngữ. Khi thêm các thành phần phụ, bắt buộc phải chèn vào giữa:\n• 放假 -> 放了假\n• 见面 -> 见了面 / 见个面\n• 结婚 -> 结了婚\n• 洗澡 -> 洗个澡 / 洗了一次澡",
    "tips": "Tuyệt đối không nói '见面他', mà phải nói '跟他见面'.",
    "examples": [
      {
        "chinese": "我放了假就准备去旅游。",
        "pinyin": "Wǒ fàng le jiǎ jiù zhǔn bèi qù lǚ yóu.",
        "vietnamese": "Tôi vừa được nghỉ lễ là chuẩn bị đi du lịch ngay."
      },
      {
        "chinese": "我们已经很长时间没见过面了。",
        "pinyin": "Wǒ men yǐ jīng hěn zhǎng shí jiān méi jiàn guò miàn le.",
        "vietnamese": "Chúng tôi đã rất lâu rồi chưa gặp mặt nhau."
      },
      {
        "chinese": "结了婚以后，你还打算工作吗？",
        "pinyin": "Jié le hūn yǐ hòu, nǐ hái dǎ suàn gōng zuò ma?",
        "vietnamese": "Sau khi kết hôn rồi, bạn còn định đi làm nữa không?"
      },
      {
        "chinese": "你先去洗个澡，休息一会儿。",
        "pinyin": "Nǐ xiān qù xǐ gè zǎo, xiū xī yī huì ér.",
        "vietnamese": "Bạn đi tắm một cái trước đi, rồi nghỉ ngơi một lát."
      }
    ]
  },
  {
    "id": "hsk3-g-06",
    "order": 6,
    "category": "modal_verbs_separable",
    "categoryName": "Động từ năng nguyện & Ly hợp",
    "categoryIcon": "⚡",
    "titleVi": "Từ ly hợp động bổ: 打开, 看见, 离开, 完成, 分开",
    "titleZh": "动补式离合词：打开、看见、离开、完成、分开",
    "grammarType": "词类",
    "categoryType": "离合词",
    "grammarDetail": "离合词",
    "structure": "Động từ + 得 / 不 + Bổ ngữ (Khả năng)",
    "explanationVi": "Các từ gồm động từ kết hợp với bổ ngữ. Khi biểu đạt khả năng có thể hoặc không thể thực hiện, chèn '得' hoặc '不' vào giữa:\n• 打开 -> 打得开 / 打不开 (mở được / không mở được)\n• 看见 -> 看得见 / 看不见 (nhìn thấy / không nhìn thấy)\n• 离开 -> 离得开 / 离不开 (rời xa được / không dứt ra được)\n• 完成 -> 完得成 / 完不成 (hoàn thành được / không xong được)\n• 分开 -> 分得开 / 分不开 (tách rời được / không tách rời được)",
    "tips": "Đây là dạng thức biểu đạt khả năng cực kỳ phổ biến trong đời sống.",
    "examples": [
      {
        "chinese": "我打不开这瓶水，你能帮帮我吗？",
        "pinyin": "Wǒ dǎ bù kāi zhè píng shuǐ, nǐ néng bāng bāng wǒ ma?",
        "vietnamese": "Tôi không mở được nắp chai nước này, bạn có thể giúp tôi được không?"
      },
      {
        "chinese": "黑板上的字你看得见吗？",
        "pinyin": "Hēi bǎn shàng de zì nǐ kàn dé jiàn ma?",
        "vietnamese": "Chữ trên bảng đen bạn có nhìn thấy rõ không?"
      },
      {
        "chinese": "他已经离不开这个地方了。",
        "pinyin": "Tā yǐ jīng lí bù kāi zhè gè dì fāng le.",
        "vietnamese": "Anh ấy đã không thể rời xa nơi này được nữa rồi."
      },
      {
        "chinese": "今天的作业我可能完不成了。",
        "pinyin": "Jīn tiān de zuò yè wǒ kě néng wán bù chéng le.",
        "vietnamese": "Bài tập hôm nay có lẽ tôi không thể hoàn thành nổi rồi."
      },
      {
        "chinese": "我的中文越来越好，跟老师的帮助是分不开的。",
        "pinyin": "Wǒ de zhōng wén yuè lái yuè hǎo, gēn lǎo shī de bāng zhù shì fēn bù kāi de.",
        "vietnamese": "Tiếng Trung của tôi ngày càng giỏi hơn, gắn liền không thể tách rời với sự giúp đỡ của thầy cô."
      }
    ]
  },
  {
    "id": "hsk3-g-07",
    "order": 7,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ & Đại từ",
    "categoryIcon": "🔥",
    "titleVi": "Đại từ nghi vấn cách thức & tính chất: 怎样 (Zěnyàng - Như thế nào / Ra sao)",
    "titleZh": "怎样",
    "grammarType": "词类",
    "categoryType": "疑问代词",
    "grammarDetail": "疑问代词",
    "structure": "怎样 + Động từ (Làm thế nào?) | Chủ ngữ + 是怎样一个人 / 事情? (Là người/việc ra sao?)",
    "explanationVi": "• 怎样 + Động từ: Hỏi về phương thức, cách thức tiến hành hành vi (tương đương với 怎么 + Động từ nhưng mang sắc thái trang trọng hơn).\n• Hỏi về tính chất, phẩm chất của người hoặc sự vật ('như thế nào', 'ra làm sao').",
    "tips": "'怎样' có văn phong viết và lịch thiệp hơn so với '怎么样'.",
    "examples": [
      {
        "chinese": "怎样才能学好中文呢？",
        "pinyin": "Zěn yàng cái néng xué hǎo zhōng wén ne?",
        "vietnamese": "Làm thế nào mới có thể học giỏi tiếng Trung đây?"
      },
      {
        "chinese": "他是怎样一个人？",
        "pinyin": "Tā shì zěn yàng yī gè rén?",
        "vietnamese": "Anh ấy là một người như thế nào?"
      }
    ]
  },
  {
    "id": "hsk3-g-08",
    "order": 8,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Đại từ phi nghi vấn - Cách dùng bất kỳ (任指: Bất cứ ai / ở đâu / cái gì cũng...)",
    "titleZh": "疑问代词的非疑问用法：任指用法：①疑问代词+都……    ②疑问代词+疑问代词",
    "grammarType": "词类",
    "categoryType": "疑问代词",
    "grammarDetail": "疑问代词",
    "structure": "Đại từ nghi vấn (谁 / 哪儿 / 什么) + 都 / 也 + Động từ | 谁...谁就... / 想吃什么就吃什么",
    "explanationVi": "Dùng đại từ nghi vấn nhưng không để hỏi, mà để chỉ tất cả mọi đối tượng không loại trừ ai:\n1. 任指 với 都/也: 谁都可以 (ai cũng được); 哪儿都没去 (chẳng đi đâu cả).\n2. Điệp đại từ nghi vấn: 谁感兴趣谁就去 (ai thích thì người đó đi); 想吃什么就吃什么 (muốn ăn gì thì ăn nấy).",
    "tips": "Cấu trúc 'Ai... thì người đó...' thể hiện sự tự do, tùy ý lựa chọn của đối tượng.",
    "examples": [
      {
        "chinese": "这次旅行谁都可以参加。",
        "pinyin": "Zhè cì lǚ xíng shuí dōu kě yǐ cān jiā.",
        "vietnamese": "Chuyến du lịch lần này bất kỳ ai cũng đều có thể tham gia."
      },
      {
        "chinese": "我最近感冒了，哪儿都没去。",
        "pinyin": "Wǒ zuì jìn gǎn mào le, nǎr dōu méi qù.",
        "vietnamese": "Dạo này tôi bị cảm, chẳng đi đâu cả."
      },
      {
        "chinese": "谁感兴趣谁就去参加。",
        "pinyin": "Shuí gǎn xīng qù shuí jiù qù cān jiā.",
        "vietnamese": "Ai có hứng thú thì người đó đi tham gia."
      },
      {
        "chinese": "你想吃什么就点什么吧。",
        "pinyin": "Nǐ xiǎng chī shén me jiù diǎn shén me ba.",
        "vietnamese": "Bạn muốn ăn cái gì thì cứ gọi món đó đi nhé."
      }
    ]
  },
  {
    "id": "hsk3-g-09",
    "order": 9,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Đại từ phi nghi vấn - Cách dùng không xác định (不定指: Nào đó / Gì đó)",
    "titleZh": "疑问代词的非疑问用法：不定指用法",
    "grammarType": "词类",
    "categoryType": "疑问代词",
    "grammarDetail": "疑问代词",
    "structure": "Động từ + (点儿) 什么 (cái gì đó) | 哪儿 (nơi nào đó) | 谁 (ai đó) | 哪天 (hôm nào đó)",
    "explanationVi": "Dùng đại từ nghi vấn để chỉ một người, sự vật, thời gian hay địa điểm chưa rõ ràng hoặc không muốn/không cần nói cụ thể ra (như 吃点儿什么 - ăn chút gì đó; 哪天一起去 - hôm nào đó cùng đi; 见过谁 - gặp ai đó).",
    "tips": "Tương đương với 'something, someone, somewhere' trong tiếng Anh.",
    "examples": [
      {
        "chinese": "我好像在哪儿见过她。",
        "pinyin": "Wǒ hǎo xiàng zài nǎr jiàn guò tā.",
        "vietnamese": "Hình như tôi đã từng gặp cô ấy ở đâu đó rồi."
      },
      {
        "chinese": "你先吃点儿什么再走吧。",
        "pinyin": "Nǐ xiān chī diǎn ér shén me zài zǒu ba.",
        "vietnamese": "Bạn ăn chút gì đó đi rồi hãy đi."
      },
      {
        "chinese": "我下周搬家，想请谁来帮帮忙。",
        "pinyin": "Wǒ xià zhōu bān jiā, xiǎng qǐng shuí lái bāng bāng máng.",
        "vietnamese": "Tuần sau tôi chuyển nhà, muốn nhờ ai đó đến giúp một tay."
      },
      {
        "chinese": "咱们哪天一起去踢足球吧。",
        "pinyin": "Zán men nǎ tiān yī qǐ qù tī zú qiú ba.",
        "vietnamese": "Hôm nào đó chúng mình cùng nhau đi đá bóng nhé."
      }
    ]
  },
  {
    "id": "hsk3-g-10",
    "order": 10,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Đại từ nhân xưng: 别人 (Người khác) & 咱们 (Chúng mình / Chúng ta)",
    "titleZh": "别人、咱们",
    "grammarType": "词类",
    "categoryType": "人称代词",
    "grammarDetail": "人称代词",
    "structure": "别人 (người khác) | 咱们 (bao gồm cả người nghe)",
    "explanationVi": "• 别人 (biéren): Chỉ người khác ngoài bản thân và người đối thoại.\n• 咱们 (zánmen): 'Chúng mình', 'chúng ta' — bao hàm CẢ người nói VÀ người nghe (khác với 我们 đôi khi chỉ nhóm người nói không bao gồm người nghe).",
    "tips": "Dùng '咱们' tạo cảm giác vô cùng thân thiết, kéo gần khoảng cách.",
    "examples": [
      {
        "chinese": "我不太清楚，你问问别人吧。",
        "pinyin": "Wǒ bù tài qīng chǔ, nǐ wèn wèn bié rén ba.",
        "vietnamese": "Tôi không rõ lắm, bạn hỏi thử người khác xem sao."
      },
      {
        "chinese": "别人能学好，我也一定能学好。",
        "pinyin": "Bié rén néng xué hǎo, wǒ yě yī dìng néng xué hǎo.",
        "vietnamese": "Người khác học giỏi được thì tôi nhất định cũng sẽ học giỏi được."
      },
      {
        "chinese": "咱们明天一起去动物园，怎么样？",
        "pinyin": "Zán men míng tiān yī qǐ qù dòng wù yuán, zěn me yàng?",
        "vietnamese": "Ngày mai chúng mình cùng đi sở thú nhé, thấy thế nào?"
      },
      {
        "chinese": "要迟到了，咱们快走吧。",
        "pinyin": "Yào chí dào le, zán men kuài zǒu ba.",
        "vietnamese": "Sắp muộn giờ rồi, chúng mình mau đi thôi."
      }
    ]
  },
  {
    "id": "hsk3-g-11",
    "order": 11,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Đại từ chỉ thị phân biệt: 别的 & 其他 (Cái khác, người khác)",
    "titleZh": "别的、其他",
    "grammarType": "词类",
    "categoryType": "指示代词",
    "grammarDetail": "指示代词",
    "structure": "别的 / 其他 + Danh từ | 别的 (đứng một mình làm đại từ)",
    "explanationVi": "Dùng để chỉ đối tượng khác ngoài phạm vi đã nhắc đến (như 别的城市 - thành phố khác; 别的国家 - quốc gia khác; 其他同学 - các bạn học khác; 其他爱好 - sở thích khác).",
    "tips": "'其他' trang trọng hơn '别的' và có thể dùng cho cả người lẫn sự vật.",
    "examples": [
      {
        "chinese": "除了北京，你还去过别的城市吗？",
        "pinyin": "Chú le běi jīng, nǐ hái qù guò bié de chéng shì ma?",
        "vietnamese": "Ngoài Bắc Kinh ra, bạn còn từng đi thành phố nào khác không?"
      },
      {
        "chinese": "我喜欢学习别的国家的语言和文化。",
        "pinyin": "Wǒ xǐ huān xué xí bié de guó jiā de yǔ yán hé wén huà.",
        "vietnamese": "Tôi thích tìm hiểu ngôn ngữ và văn hóa của các quốc gia khác."
      },
      {
        "chinese": "其他同学都回国了，只有我还在中国。",
        "pinyin": "Qí tā tóng xué dōu huí guó le, zhǐ yǒu wǒ hái zài zhōng guó.",
        "vietnamese": "Các bạn học khác đều đã về nước cả rồi, chỉ có tôi vẫn còn ở lại Trung Quốc."
      },
      {
        "chinese": "除了看足球比赛，你还有其他爱好吗？",
        "pinyin": "Chú le kàn zú qiú bǐ sài, nǐ hái yǒu qí tā ài hǎo ma?",
        "vietnamese": "Ngoài xem bóng đá ra, bạn còn có sở thích nào khác không?"
      }
    ]
  },
  {
    "id": "hsk3-g-12",
    "order": 12,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Hệ thống Lượng từ danh từ HSK 3: 把, 双, 张, 种, 层, 辆, 节, 所, 班, 段...",
    "titleZh": "专用名量词：把、双、张、种、层、封、页、辆、节、所、班、段、头、句公斤、斤、角、毛、刻、米",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + Lượng từ + Danh từ",
    "explanationVi": "Bảng lượng từ phong phú của HSK 3:\n• 把 (cái ô, dao, ghế có tay vịn)\n• 双 (đôi giày, đũa)\n• 张 (tờ giấy, bức ảnh, cái bàn)\n• 种 (loại, chủng loại hoa quả, người)\n• 层 (tầng lầu)\n• 封 (lá thư)\n• 页 (trang sách)\n• 辆 (chiếc xe)\n• 节 (tiết học)\n• 所 (ngôi trường, bệnh viện)\n• 班 (chuyến xe, ca làm)\n• 段 (đoạn văn, đoạn đường)\n• 头 (con bò, con lợn)\n• 句 (câu nói)\n• 斤/公斤 (cân/ký)\n• 角/毛 (hào), 刻 (15 phút), 米 (mét).",
    "tips": "Việc dùng đúng lượng từ chuyên dụng là thước đo độ chuẩn xác của tiếng Trung trung cấp.",
    "examples": [
      {
        "chinese": "下雨了，记得带一把伞。",
        "pinyin": "Xià yǔ le, jì dé dài yī bǎ sǎn.",
        "vietnamese": "Trời mưa rồi, nhớ mang theo một chiếc ô."
      },
      {
        "chinese": "我在网上买了两双鞋。",
        "pinyin": "Wǒ zài wǎng shàng mǎi le liǎng shuāng xié.",
        "vietnamese": "Tôi đã mua hai đôi giày trên mạng."
      },
      {
        "chinese": "桌子上放着几张照片。",
        "pinyin": "Zhuō zi shàng fàng zhe jǐ zhāng zhào piàn.",
        "vietnamese": "Trên bàn đang để mấy tấm ảnh."
      },
      {
        "chinese": "这里有多少种水果？",
        "pinyin": "Zhè lǐ yǒu duō shǎo zhǒng shuǐ guǒ?",
        "vietnamese": "Ở đây có bao nhiêu loại hoa quả?"
      },
      {
        "chinese": "我们的教室在四层。",
        "pinyin": "Wǒ men de jiào shì zài sì céng.",
        "vietnamese": "Lớp học của chúng tôi ở tầng bốn."
      },
      {
        "chinese": "我想给我的爸爸妈妈写一封信。",
        "pinyin": "Wǒ xiǎng gěi wǒ de bà bà mā mā xiě yī fēng xìn.",
        "vietnamese": "Tôi muốn viết một lá thư gửi cho bố mẹ tôi."
      },
      {
        "chinese": "请大家打开书，第五页。",
        "pinyin": "Qǐng dà jiā dǎ kāi shū, dì wǔ yè.",
        "vietnamese": "Mời mọi người mở sách ra, trang số 5."
      },
      {
        "chinese": "那辆黑色的自行车是我的。",
        "pinyin": "Nà liàng hēi sè de zì xíng chē shì wǒ de.",
        "vietnamese": "Chiếc xe đạp màu đen đằng kia là của tôi."
      },
      {
        "chinese": "我每周都有一节中文课。",
        "pinyin": "Wǒ měi zhōu dōu yǒu yī jié zhōng wén kè.",
        "vietnamese": "Mỗi tuần tôi đều có một tiết học tiếng Trung."
      },
      {
        "chinese": "这个城市一共有三所大学。",
        "pinyin": "Zhè gè chéng shì yī gòng yǒu sān suǒ dà xué.",
        "vietnamese": "Thành phố này có tổng cộng 3 trường đại học."
      },
      {
        "chinese": "咱们坐下一班地铁走吧。",
        "pinyin": "Zán men zuò xià yī bān dì tiě zǒu ba.",
        "vietnamese": "Chúng mình đón chuyến tàu điện ngầm kế tiếp để đi nhé."
      },
      {
        "chinese": "请大家用这些词写一段话。",
        "pinyin": "Qǐng dà jiā yòng zhè xiē cí xiě yī duàn huà.",
        "vietnamese": "Mời mọi người dùng các từ này để viết thành một đoạn văn."
      },
      {
        "chinese": "爷爷家里养了十几头牛。",
        "pinyin": "Yé yé jiā lǐ yǎng le shí jǐ tóu niú.",
        "vietnamese": "Nhà ông nội nuôi mười mấy con bò."
      },
      {
        "chinese": "这句话是什么意思？",
        "pinyin": "Zhè jù huà shì shén me yì sī?",
        "vietnamese": "Câu nói này có nghĩa là gì?"
      },
      {
        "chinese": "苹果多少钱一斤/公斤？",
        "pinyin": "Píng guǒ duō shǎo qián yī jīn / gōng jīn?",
        "vietnamese": "Táo bao nhiêu tiền một cân (nửa ký / 1 ký)?"
      },
      {
        "chinese": "这些一共八块五角（毛）钱。",
        "pinyin": "Zhè xiē yī gòng bā kuài wǔ jiǎo (máo) qián.",
        "vietnamese": "Số này tổng cộng 8 tệ 5 hào (8.5 tệ)."
      },
      {
        "chinese": "现在八点一刻。",
        "pinyin": "Xiàn zài bā diǎn yī kè.",
        "vietnamese": "Bây giờ là 8 giờ 15 phút (8 giờ 1 khắc)."
      },
      {
        "chinese": "我哥哥身高一米八五。",
        "pinyin": "Wǒ gē gē shēn gāo yī mǐ bā wǔ.",
        "vietnamese": "Anh trai tôi cao 1 mét 85."
      }
    ]
  },
  {
    "id": "hsk3-g-13",
    "order": 13,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Lượng từ mượn từ đồ đựng: 碗 (Bát) & 盘 (Đĩa)",
    "titleZh": "借用名量词：碗、盘",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 碗 / 盘 + Món ăn",
    "explanationVi": "Mượn danh từ chỉ đồ đựng trong ăn uống để làm lượng từ đong đếm (như 一碗面条 - một bát mì; 一碗米饭 - một bát cơm; 一盘饺子 - một đĩa sủi cảo).",
    "tips": "Tương tự như 一杯水 (một ly nước), 一瓶可乐 (một chai coca).",
    "examples": [
      {
        "chinese": "我要一碗面条和一碗米饭。",
        "pinyin": "Wǒ yào yī wǎn miàn tiáo hé yī wǎn mǐ fàn.",
        "vietnamese": "Cho tôi một bát mì và một bát cơm trắng."
      },
      {
        "chinese": "中午我在食堂吃了一盘饺子。",
        "pinyin": "Zhōng wǔ wǒ zài shí táng chī le yī pán jiǎo zi.",
        "vietnamese": "Buổi trưa tôi đã ăn một đĩa sủi cảo ở nhà ăn."
      }
    ]
  },
  {
    "id": "hsk3-g-14",
    "order": 14,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Động lượng từ biểu thị số lần / lượt: 口, 回, 遍, 声",
    "titleZh": "口、回、遍、声",
    "grammarType": "词类",
    "categoryType": "动量词",
    "grammarDetail": "动量词",
    "structure": "Động từ + Số từ + 口 / 回 / 遍 / 声",
    "explanationVi": "• 口 (kǒu): Hớp, ngụm, miếng (喝了一口茶 - uống một ngụm trà).\n• 回 (huí): Hồi, bận, lần (好几回 - mấy bận rồi).\n• 遍 (biàn): Lượt, lần (nhấn mạnh quá trình từ đầu đến cuối: 读一遍 - đọc hết một lượt).\n• 声 (shēng): Tiếng (说了一声 - cất một tiếng cảm ơn).",
    "tips": "Phân biệt: '次' là số lần thông thường; '遍' là làm trọn vẹn từ đầu đến cuối (như đọc sách, xem phim).",
    "examples": [
      {
        "chinese": "他喝了一口茶，然后开始工作。",
        "pinyin": "Tā hē le yī kǒu chá, rán hòu kāi shǐ gōng zuò.",
        "vietnamese": "Anh ấy uống một ngụm trà, sau đó bắt đầu làm việc."
      },
      {
        "chinese": "我已经说过好几回了，但他还是不记得。",
        "pinyin": "Wǒ yǐ jīng shuō guò hǎo jǐ huí le, dàn tā hái shì bù jì dé.",
        "vietnamese": "Tôi đã nói mấy bận rồi, nhưng anh ấy vẫn không nhớ."
      },
      {
        "chinese": "对不起，我没听懂，请再说一遍。",
        "pinyin": "Duì bù qǐ, wǒ méi tīng dǒng, qǐng zài shuō yī biàn.",
        "vietnamese": "Xin lỗi, tôi nghe chưa hiểu, xin hãy nói lại một lần nữa."
      },
      {
        "chinese": "她跟我说了一声“谢谢”就走了。",
        "pinyin": "Tā gēn wǒ shuō le yī shēng \"xiè xiè\" jiù zǒu le.",
        "vietnamese": "Cô ấy nói với tôi một tiếng 'cảm ơn' rồi rời đi."
      }
    ]
  },
  {
    "id": "hsk3-g-15",
    "order": 15,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Trùng điệp lượng từ biểu thị 'Mỗi một / Từng cái một': 个个, 张张",
    "titleZh": "个个、张张",
    "grammarType": "词类",
    "categoryType": "量词重叠",
    "grammarDetail": "量词重叠",
    "structure": "Lượng từ lặp lại (个个 / 张张 / 件件) + 都 + Tính từ",
    "explanationVi": "Lặp lại lượng từ mang ý nghĩa 'mỗi một', 'tất cả không sót cái nào' và phía sau bắt buộc đi kèm với phó từ '都' (như 苹果个个都很大 - quả táo nào quả nấy đều to; 张张都很漂亮 - bức nào cũng đều đẹp).",
    "tips": "Nhấn mạnh tính toàn thể và chất lượng đồng đều.",
    "examples": [
      {
        "chinese": "这些苹果个个都很大。",
        "pinyin": "Zhè xiē píng guǒ gè gè dōu hěn dà.",
        "vietnamese": "Những quả táo này quả nào quả nấy đều rất to."
      },
      {
        "chinese": "他画的画，张张都很漂亮。",
        "pinyin": "Tā huà de huà, zhāng zhāng dōu hěn piāo liàng.",
        "vietnamese": "Những bức tranh anh ấy vẽ, bức nào bức nấy đều rất đẹp."
      }
    ]
  },
  {
    "id": "hsk3-g-16",
    "order": 16,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ mức độ phong phú: 比较, 更, 特别, 挺, 有些, 越, 极",
    "titleZh": "比较、还3、更、特别、挺、有些、越、极",
    "grammarType": "词类",
    "categoryType": "程度副词",
    "grammarDetail": "程度副词",
    "structure": "比较 / 更 / 特别 / 挺 / 极 + Tính từ (+ 极了 / 得很)",
    "explanationVi": "• 比较 (bǐjiào): Tương đối, khá là.\n• 更 (gèng): Càng, hơn nữa (so sánh tăng tiến).\n• 特别 (tèbié): Đặc biệt, vô cùng.\n• 挺 (tǐng): Khá là (挺...的).\n• 有些 (yǒuxiē): Hơi hơi, có phần (thường mang cảm xúc tiêu cực).\n• 越 (yuè): Càng (越来越).\n• 极 (jí): Cực kỳ (极有兴趣, 极少).",
    "tips": "'有些' thường đi với từ mang nghĩa không mong muốn (như 有些着急, 有些累).",
    "examples": [
      {
        "chinese": "这本书的内容比较简单，我读得很快。",
        "pinyin": "Zhè běn shū de nèi róng bǐ jiào jiǎn dān, wǒ dú dé hěn kuài.",
        "vietnamese": "Nội dung cuốn sách này tương đối đơn giản, tôi đọc rất nhanh."
      },
      {
        "chinese": "外面太热了，屋子里还凉快一些。",
        "pinyin": "Wài miàn tài rè le, wū zi lǐ hái liáng kuài yī xiē.",
        "vietnamese": "Bên ngoài nóng quá, trong phòng còn mát mẻ hơn một chút."
      },
      {
        "chinese": "搬家以后，我们的生活更方便了。",
        "pinyin": "Bān jiā yǐ hòu, wǒ men de shēng huó gèng fāng biàn le.",
        "vietnamese": "Sau khi chuyển nhà, cuộc sống của chúng tôi càng thuận tiện hơn."
      },
      {
        "chinese": "我弟弟特别喜欢看足球比赛。",
        "pinyin": "Wǒ dì dì tè bié xǐ huān kàn zú qiú bǐ sài.",
        "vietnamese": "Em trai tôi đặc biệt thích xem các trận thi đấu bóng đá."
      },
      {
        "chinese": "多穿点儿衣服，外面挺冷的。",
        "pinyin": "Duō chuān diǎn ér yī fú, wài miàn tǐng lěng de.",
        "vietnamese": "Mặc thêm chút áo ấm đi, bên ngoài khá là lạnh đấy."
      },
      {
        "chinese": "孩子这么晚还没回来，妈妈心里有些着急。",
        "pinyin": "Hái zi zhè me wǎn hái méi huí lái, mā mā xīn lǐ yǒu xiē zhe jí.",
        "vietnamese": "Con cái muộn thế này chưa về, trong lòng người mẹ có phần lo lắng."
      },
      {
        "chinese": "冬天快要到了，天气越来越冷了。",
        "pinyin": "Dōng tiān kuài yào dào le, tiān qì yuè lái yuè lěng le.",
        "vietnamese": "Mùa đông sắp đến rồi, thời tiết ngày càng lạnh hơn."
      },
      {
        "chinese": "我对中国历史极有兴趣。",
        "pinyin": "Wǒ duì zhōng guó lì shǐ jí yǒu xīng qù.",
        "vietnamese": "Tôi cực kỳ có hứng thú với lịch sử Trung Quốc."
      },
      {
        "chinese": "他工作特别忙，周末极少休息。",
        "pinyin": "Tā gōng zuò tè bié máng, zhōu mò jí shǎo xiū xī.",
        "vietnamese": "Anh ấy công việc đặc biệt bận rộn, cuối tuần cực kỳ hiếm khi nghỉ ngơi."
      }
    ]
  },
  {
    "id": "hsk3-g-17",
    "order": 17,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phạm vi: 就, 一块儿, 一共, 只, 到处, 只是",
    "titleZh": "就3、一块儿、一共、只、到处、只是",
    "grammarType": "词类",
    "categoryType": "范围副词",
    "grammarDetail": "范围副词",
    "structure": "Phó từ phạm vi + Động từ / Số từ",
    "explanationVi": "• 就 / 只: Chỉ, duy nhất (我就要两斤; 只有一个).\n• 一块儿: Cùng nhau (bằng với 一起).\n• 一共: Tổng cộng (一共多少钱).\n• 到处: Khắp nơi, nơi nơi (到处都是).\n• 只是: Chỉ là, chẳng qua là (只是笑了笑).",
    "tips": "'到处都是 + Danh từ' là cách nói thông dụng miêu tả sự xuất hiện tràn ngập ở mọi nơi.",
    "examples": [
      {
        "chinese": "我就要两斤苹果，不要别的。",
        "pinyin": "Wǒ jiù yào liǎng jīn píng guǒ, bù yào bié de.",
        "vietnamese": "Tôi chỉ lấy hai cân táo thôi, không lấy gì khác nữa."
      },
      {
        "chinese": "办公室里就张老师一个人。",
        "pinyin": "Bàn gōng shì lǐ jiù zhāng lǎo shī yī gè rén.",
        "vietnamese": "Trong văn phòng chỉ có duy nhất một mình thầy Trương."
      },
      {
        "chinese": "你跟我一块儿去图书馆，好吗？",
        "pinyin": "Nǐ gēn wǒ yī kuài ér qù tú shū guǎn, hǎo ma?",
        "vietnamese": "Bạn cùng đi thư viện với tôi nhé, được không?"
      },
      {
        "chinese": "我们经常一块儿踢足球。",
        "pinyin": "Wǒ men jīng cháng yī kuài ér tī zú qiú.",
        "vietnamese": "Chúng tôi thường xuyên cùng nhau đi đá bóng."
      },
      {
        "chinese": "你们班一共有多少留学生？",
        "pinyin": "Nǐ men bān yī gòng yǒu duō shǎo liú xué shēng?",
        "vietnamese": "Lớp các bạn có tổng cộng bao nhiêu lưu học sinh?"
      },
      {
        "chinese": "这些水果一共多少钱？",
        "pinyin": "Zhè xiē shuǐ guǒ yī gòng duō shǎo qián?",
        "vietnamese": "Số hoa quả này tổng cộng bao nhiêu tiền?"
      },
      {
        "chinese": "我只有一个哥哥，没有弟弟妹妹。",
        "pinyin": "Wǒ zhǐ yǒu yī gè gē gē, méi yǒu dì dì mèi mèi.",
        "vietnamese": "Tôi chỉ có một người anh trai, không có em trai hay em gái."
      },
      {
        "chinese": "她只说了自己的名字，没说别的。",
        "pinyin": "Tā zhǐ shuō le zì jǐ de míng zì, méi shuō bié de.",
        "vietnamese": "Cô ấy chỉ nói tên của mình, không nói thêm gì khác."
      },
      {
        "chinese": "公园里到处都是锻炼身体的老人。",
        "pinyin": "Gōng yuán lǐ dào chù dōu shì duàn liàn shēn tǐ de lǎo rén.",
        "vietnamese": "Trong công viên khắp nơi đều là người già đang tập luyện thể dục."
      },
      {
        "chinese": "她只是笑了笑，一句话也没说。",
        "pinyin": "Tā zhǐ shì xiào le xiào, yī jù huà yě méi shuō.",
        "vietnamese": "Cô ấy chỉ cười mỉm một cái, một câu cũng không nói."
      }
    ]
  },
  {
    "id": "hsk3-g-18",
    "order": 18,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ thời gian & Trình tự: 才, 马上, 先, 一会儿, 刚, 刚刚, 一直",
    "titleZh": "才1、马上、先、一会儿、刚、刚刚、一直",
    "grammarType": "词类",
    "categoryType": "时间副词",
    "grammarDetail": "时间副词",
    "structure": "Chủ ngữ + Phó từ thời gian + Động từ",
    "explanationVi": "• 才: Vừa mới (thời gian ngắn: 他才到家).\n• 马上: Ngay lập tức (马上来).\n• 先: Trước hết (先...然后再...).\n• 一会儿: Một lát, lúc thì... (一会儿阴，一会儿晴).\n• 刚 / 刚刚: Vừa mới xảy ra cách đây chốc lát.\n• 一直: Suốt, liên tục không ngừng (一直住在北京; 一直在下雨).",
    "tips": "Phân biệt '刚' (phó từ, đứng sau chủ ngữ) với '刚才' (danh từ thời gian, có thể đứng trước chủ ngữ).",
    "examples": [
      {
        "chinese": "他才到家，还没有吃饭呢。",
        "pinyin": "Tā cái dào jiā, hái méi yǒu chī fàn ne.",
        "vietnamese": "Anh ấy vừa mới về tới nhà, vẫn còn chưa kịp ăn cơm."
      },
      {
        "chinese": "我才搬来北京，还不太习惯这里的生活",
        "pinyin": "Wǒ cái bān lái běi jīng, hái bù tài xí guàn zhè lǐ de shēng huó",
        "vietnamese": "Tôi mới chuyển đến Bắc Kinh, vẫn chưa quen lắm với cuộc sống ở đây."
      },
      {
        "chinese": "请等一下，我马上来。",
        "pinyin": "Qǐng děng yī xià, wǒ mǎ shàng lái.",
        "vietnamese": "Xin đợi một lát, tôi sẽ tới ngay lập tức."
      },
      {
        "chinese": "接了电话，她马上就跑出去了。",
        "pinyin": "Jiē le diàn huà, tā mǎ shàng jiù pǎo chū qù le.",
        "vietnamese": "Vừa nhận điện thoại xong, cô ấy liền chạy vụt ra ngoài ngay."
      },
      {
        "chinese": "你先走吧，我还有工作要做。",
        "pinyin": "Nǐ xiān zǒu ba, wǒ hái yǒu gōng zuò yào zuò.",
        "vietnamese": "Bạn đi trước đi, tôi vẫn còn việc phải làm."
      },
      {
        "chinese": "我想先洗个澡，然后再写作业。",
        "pinyin": "Wǒ xiǎng xiān xǐ gè zǎo, rán hòu zài xiě zuò yè.",
        "vietnamese": "Tôi muốn đi tắm trước, sau đó mới làm bài tập về nhà."
      },
      {
        "chinese": "最近天气变化很快，一会儿阴，一会儿晴。",
        "pinyin": "Zuì jìn tiān qì biàn huà hěn kuài, yī huì ér yīn, yī huì ér qíng.",
        "vietnamese": "Dạo này thời tiết thay đổi rất nhanh, lúc thì râm lúc thì hửng nắng."
      },
      {
        "chinese": "他刚开始学汉语，说得还不太好。",
        "pinyin": "Tā gāng kāi shǐ xué hàn yǔ, shuō dé hái bù tài hǎo.",
        "vietnamese": "Cậu ấy vừa mới bắt đầu học tiếng Hán, nói vẫn chưa được tốt lắm."
      },
      {
        "chinese": "报纸是早上刚送来的。",
        "pinyin": "Bào zhǐ shì zǎo shàng gāng sòng lái de.",
        "vietnamese": "Tờ báo là vừa mới được giao tới vào sáng nay."
      },
      {
        "chinese": "刚刚还是晴天，怎么突然下雨了？",
        "pinyin": "Gāng gāng hái shì qíng tiān, zěn me tū rán xià yǔ le?",
        "vietnamese": "Vừa nãy trời vẫn còn nắng ráo, sao đột nhiên lại đổ mưa rồi?"
      },
      {
        "chinese": "他不在，刚刚出去。",
        "pinyin": "Tā bù zài, gāng gāng chū qù.",
        "vietnamese": "Anh ấy không có ở đây, vừa mới đi ra ngoài."
      },
      {
        "chinese": "我一直都住在北京。",
        "pinyin": "Wǒ yī zhí dōu zhù zài běi jīng.",
        "vietnamese": "Tôi xưa nay vẫn luôn sinh sống tại Bắc Kinh."
      },
      {
        "chinese": "别出去了，外面一直在下雨。",
        "pinyin": "Bié chū qù le, wài miàn yī zhí zài xià yǔ.",
        "vietnamese": "Đừng ra ngoài nữa, bên ngoài trời vẫn đang mưa suốt đấy."
      }
    ]
  },
  {
    "id": "hsk3-g-19",
    "order": 19,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ tần suất: 总, 总是, 又, 常常",
    "titleZh": "总、总是、又、常常",
    "grammarType": "词类",
    "categoryType": "频率副词",
    "grammarDetail": "频率副词",
    "structure": "Chủ ngữ + 总是 / 又 / 常常 + Động từ",
    "explanationVi": "• 总是 / 总: Luôn luôn, lúc nào cũng vậy (thói quen bất biến).\n• 又: Lại (hành động đã lặp lại trong quá khứ: 又看了一遍).\n• 常常: Thường hay (tần suất đều đặn).",
    "tips": "Nhớ kỹ: '又' dùng cho hành động ĐÃ lặp lại, còn '再' dùng cho hành động CHƯA lặp lại.",
    "examples": [
      {
        "chinese": "一到冬天，孩子就总生病。",
        "pinyin": "Yī dào dōng tiān, hái zi jiù zǒng shēng bìng.",
        "vietnamese": "Cứ hễ đến mùa đông là đứa trẻ lại luôn bị ốm."
      },
      {
        "chinese": "上学的时候，我总是让爸爸开车送我。",
        "pinyin": "Shàng xué de shí hòu, wǒ zǒng shì ràng bà bà kāi chē sòng wǒ.",
        "vietnamese": "Hồi còn đi học, tôi luôn nhờ bố lái xe đưa đón tôi."
      },
      {
        "chinese": "那个电影太有意思了，我昨天又看了一遍。",
        "pinyin": "Nà gè diàn yǐng tài yǒu yì sī le, wǒ zuó tiān yòu kàn le yī biàn.",
        "vietnamese": "Bộ phim đó quá hay, hôm qua tôi lại xem lại thêm một lần nữa."
      },
      {
        "chinese": "下课以后，我常常去体育馆打篮球。",
        "pinyin": "Xià kè yǐ hòu, wǒ cháng cháng qù tǐ yù guǎn dǎ lán qiú.",
        "vietnamese": "Sau giờ học, tôi thường hay đến nhà thi đấu chơi bóng rổ."
      }
    ]
  },
  {
    "id": "hsk3-g-20",
    "order": 20,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc song hành hai hành động: 一边……一边…… (Vừa... vừa...)",
    "titleZh": "一边",
    "grammarType": "词类",
    "categoryType": "关联副词",
    "grammarDetail": "关联副词",
    "structure": "Chủ ngữ + 一边 + Hành động 1, + 一边 + Hành động 2",
    "explanationVi": "Biểu thị hai hành động cùng được tiến hành đồng thời song song trong cùng một khoảng thời gian (như 一边工作一边学习 - vừa làm vừa học; 一边跑步一边听音乐 - vừa chạy vừa nghe nhạc).",
    "tips": "Hai hành động này phải thuộc loại có thể diễn ra đồng thời được.",
    "examples": [
      {
        "chinese": "孩子们高兴地一边唱歌一边跳舞。",
        "pinyin": "Hái zi men gāo xīng dì yī biān chàng gē yī biān tiào wǔ.",
        "vietnamese": "Lũ trẻ vui vẻ vừa hát vừa khiêu vũ."
      },
      {
        "chinese": "我想找一个工作，一边工作一边学习。",
        "pinyin": "Wǒ xiǎng zhǎo yī gè gōng zuò, yī biān gōng zuò yī biān xué xí.",
        "vietnamese": "Tôi muốn tìm một công việc để vừa làm vừa học."
      }
    ]
  },
  {
    "id": "hsk3-g-21",
    "order": 21,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phương thái & suy đoán: 大概, 必须, 差不多, 一定, 好像, 几乎",
    "titleZh": "大概、必须、差不多、一定、好像、几乎",
    "grammarType": "词类",
    "categoryType": "情态副词",
    "grammarDetail": "情态副词",
    "structure": "Chủ ngữ + Phó từ tình thái + Vị ngữ",
    "explanationVi": "• 大概: Đại khái, có lẽ (ước lượng khoảng chừng).\n• 必须: Bắt buộc phải.\n• 差不多: Xấp xỉ, suýt soát (gần như nhau).\n• 一定: Nhất định, chắc chắn.\n• 好像: Dường như, hình như.\n• 几乎: Hầu như, suýt nữa.",
    "tips": "'不一定' nghĩa là chưa chắc, không nhất thiết.",
    "examples": [
      {
        "chinese": "他大概已经回家了。",
        "pinyin": "Tā dà gài yǐ jīng huí jiā le.",
        "vietnamese": "Có lẽ anh ấy đã về nhà rồi."
      },
      {
        "chinese": "你们学校大概有多少留学生？",
        "pinyin": "Nǐ men xué xiào dà gài yǒu duō shǎo liú xué shēng?",
        "vietnamese": "Trường của các bạn đại khái có khoảng bao nhiêu lưu học sinh?"
      },
      {
        "chinese": "我必须做完才能下班。",
        "pinyin": "Wǒ bì xū zuò wán cái néng xià bān.",
        "vietnamese": "Tôi bắt buộc phải làm cho xong thì mới được tan làm."
      },
      {
        "chinese": "老师要求我们必须每天复习。",
        "pinyin": "Lǎo shī yào qiú wǒ men bì xū měi tiān fù xí.",
        "vietnamese": "Thầy giáo yêu cầu chúng tôi bắt buộc phải ôn bài mỗi ngày."
      },
      {
        "chinese": "我学习中文差不多三年了。",
        "pinyin": "Wǒ xué xí zhōng wén chà bù duō sān nián le.",
        "vietnamese": "Tôi học tiếng Trung xấp xỉ gần 3 năm rồi."
      },
      {
        "chinese": "我跟哥哥差不多高。",
        "pinyin": "Wǒ gēn gē gē chà bù duō gāo.",
        "vietnamese": "Tôi cao xấp xỉ gần bằng anh trai tôi."
      },
      {
        "chinese": "放心，我一定不会迟到。",
        "pinyin": "Fàng xīn, wǒ yī dìng bù huì chí dào.",
        "vietnamese": "Yên tâm đi, tôi nhất định sẽ không đến muộn đâu."
      },
      {
        "chinese": "我明天不一定有时间。",
        "pinyin": "Wǒ míng tiān bù yī dìng yǒu shí jiān.",
        "vietnamese": "Ngày mai chưa chắc tôi đã có thời gian."
      },
      {
        "chinese": "她好像没有明白我的意思。",
        "pinyin": "Tā hǎo xiàng méi yǒu míng bái wǒ de yì sī.",
        "vietnamese": "Hình như cô ấy vẫn chưa hiểu được ý của tôi."
      },
      {
        "chinese": "我好像在哪里见过她。",
        "pinyin": "Wǒ hǎo xiàng zài nǎ lǐ jiàn guò tā.",
        "vietnamese": "Tôi dường như đã từng gặp cô ấy ở đâu đó rồi."
      },
      {
        "chinese": "他几乎每天都去图书馆学习。",
        "pinyin": "Tā jǐ hū měi tiān dōu qù tú shū guǎn xué xí.",
        "vietnamese": "Anh ấy hầu như ngày nào cũng đến thư viện học tập."
      },
      {
        "chinese": "他太忙了，几乎没有时间休息。",
        "pinyin": "Tā tài máng le, jǐ hū méi yǒu shí jiān xiū xī.",
        "vietnamese": "Anh ấy bận rộn quá, hầu như không có chút thời gian nào để nghỉ ngơi."
      }
    ]
  },
  {
    "id": "hsk3-g-22",
    "order": 22,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ ngữ khí sâu sắc: 当然, 其实, 终于, 才, 就",
    "titleZh": "当然、其实、终于、才2、才3、就4",
    "grammarType": "词类",
    "categoryType": "语气副词",
    "grammarDetail": "语气副词",
    "structure": "Phó từ ngữ khí + Vị ngữ / Đầu câu",
    "explanationVi": "• 当然: Đương nhiên, tất nhiên.\n• 其实: Thực ra, kỳ thực (sự thật khác với tưởng tượng ban đầu).\n• 终于: Cuối cùng, rốt cuộc (sau nhiều nỗ lực hoặc chờ đợi lâu).\n• 才: Mới (nhấn mạnh trễ, khó khăn, hoặc số lượng ít ỏi).\n• 就: Đã, liền (nhấn mạnh sớm, nhanh chóng, dễ dàng).",
    "tips": "Cặp đôi tương phản '才' (muộn/khó/ít) vs '就' (sớm/nhanh/nhiều) là điểm ngữ pháp vàng của HSK 3.",
    "examples": [
      {
        "chinese": "我当然愿意帮助你。",
        "pinyin": "Wǒ dāng rán yuàn yì bāng zhù nǐ.",
        "vietnamese": "Tôi đương nhiên là sẵn lòng giúp đỡ bạn rồi."
      },
      {
        "chinese": "当然没问题，欢迎你参加。",
        "pinyin": "Dāng rán méi wèn tí, huān yíng nǐ cān jiā.",
        "vietnamese": "Đương nhiên không thành vấn đề, rất hoan nghênh bạn tham gia."
      },
      {
        "chinese": "这个问题其实不难。",
        "pinyin": "Zhè gè wèn tí qí shí bù nán.",
        "vietnamese": "Vấn đề này thực ra không hề khó."
      },
      {
        "chinese": "我以为他回国了，其实他一直在中国。",
        "pinyin": "Wǒ yǐ wèi tā huí guó le, qí shí tā yī zhí zài zhōng guó.",
        "vietnamese": "Tôi ngỡ anh ấy đã về nước rồi, thực ra anh ấy vẫn luôn ở Trung Quốc."
      },
      {
        "chinese": "经过一年多的努力，工作终于完成了。",
        "pinyin": "Jīng guò yī nián duō de nǔ lì, gōng zuò zhōng yú wán chéng le.",
        "vietnamese": "Trải qua hơn một năm nỗ lực, công việc cuối cùng cũng đã hoàn thành."
      },
      {
        "chinese": "考试终于都结束了，我太开心了。",
        "pinyin": "Kǎo shì zhōng yú dōu jié shù le, wǒ tài kāi xīn le.",
        "vietnamese": "Kỳ thi rốt cuộc cũng kết thúc hết rồi, tôi vui sướng quá."
      },
      {
        "chinese": "课文有点儿难，我读了三遍才2明白。",
        "pinyin": "Kè wén yǒu diǎn ér nán, wǒ dú le sān biàn cái 2 míng bái.",
        "vietnamese": "Bài khóa hơi khó, tôi đọc đến ba lần mới hiểu ra."
      },
      {
        "chinese": "这些旧书才3卖了二十多块钱。",
        "pinyin": "Zhè xiē jiù shū cái 3 mài le èr shí duō kuài qián.",
        "vietnamese": "Chỗ sách cũ này mà chỉ bán được có hơn hai mươi tệ thôi."
      },
      {
        "chinese": "她今天六点半就起床了。",
        "pinyin": "Tā jīn tiān liù diǎn bàn jiù qǐ chuáng le.",
        "vietnamese": "Hôm nay mới sáu rưỡi sáng cô ấy đã dậy rồi."
      },
      {
        "chinese": "这个句子不难，我听一遍就懂了。",
        "pinyin": "Zhè gè jù zi bù nán, wǒ tīng yī biàn jiù dǒng le.",
        "vietnamese": "Câu này không khó, tôi nghe qua một lần là hiểu ngay."
      }
    ]
  },
  {
    "id": "hsk3-g-23",
    "order": 23,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ các loại",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phủ định sự cần thiết: 不必 & 不用 (Không cần phải...)",
    "titleZh": "不必、不用",
    "grammarType": "词类",
    "categoryType": "否定副词",
    "grammarDetail": "否定副词",
    "structure": "不必 / 不用 + Động từ / Cụm động từ",
    "explanationVi": "Biểu thị sự việc là không cần thiết, không cần phải mất công làm (như 不必去车站 - không cần phải ra bến; 不用担心 - không cần lo lắng).",
    "tips": "Khẩu ngữ thường nói '不用', văn viết hay dùng '不必'.",
    "examples": [
      {
        "chinese": "你可以用手机买票，不必去车站，非常方便。",
        "pinyin": "Nǐ kě yǐ yòng shǒu jī mǎi piào, bù bì qù chē zhàn, fēi cháng fāng biàn.",
        "vietnamese": "Bạn có thể dùng điện thoại để mua vé, không cần phải ra bến xe, cực kỳ thuận tiện."
      },
      {
        "chinese": "不用担心，我们帮你一起准备。",
        "pinyin": "Bù yòng dān xīn, wǒ men bāng nǐ yī qǐ zhǔn bèi.",
        "vietnamese": "Không cần lo lắng đâu, chúng mình sẽ giúp bạn cùng chuẩn bị."
      }
    ]
  },
  {
    "id": "hsk3-g-24",
    "order": 24,
    "category": "prepositions",
    "categoryName": "Giới từ phương hướng & đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ đối tượng: 为 (Vì/Cho), 向 (Đối với/Tới), 关于 (Về vấn đề)",
    "titleZh": "为1、向1、关于",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "为 + Ai đó + Làm gì | 向 + Ai đó + Xin phép/Học tập | 关于 + Nội dung, ...",
    "explanationVi": "• 为 (wèi): Cho, vì đối tượng (为你做的蛋糕 - bánh làm cho bạn; 为比赛准备).\n• 向 (xiàng): Hướng tới đối tượng (向老师请假 - xin phép thầy; 向她学习 - noi gương cô ấy).\n• 关于 (guānyú): Về, liên quan đến vấn đề nào đó (đứng đầu câu: 关于这个问题...).",
    "tips": "Cụm '关于...' thường đứng ở đầu câu làm trạng ngữ chỉ phạm vi đề tài.",
    "examples": [
      {
        "chinese": "生日快乐，这是我为你做的蛋糕。",
        "pinyin": "Shēng rì kuài lè, zhè shì wǒ wèi nǐ zuò de dàn gāo.",
        "vietnamese": "Sinh nhật vui vẻ, đây là chiếc bánh kem tôi tự tay làm riêng cho bạn."
      },
      {
        "chinese": "大家为这次比赛做了很多准备。",
        "pinyin": "Dà jiā wèi zhè cì bǐ sài zuò le hěn duō zhǔn bèi.",
        "vietnamese": "Mọi người đã làm rất nhiều sự chuẩn bị cho cuộc thi lần này."
      },
      {
        "chinese": "如果你不能去上课，应该向老师请假。",
        "pinyin": "Rú guǒ nǐ bù néng qù shàng kè, yīng gāi xiàng lǎo shī qǐng jiǎ.",
        "vietnamese": "Nếu bạn không thể đến lớp học, bạn nên xin phép thầy giáo."
      },
      {
        "chinese": "老师让我们向她学习。",
        "pinyin": "Lǎo shī ràng wǒ men xiàng tā xué xí.",
        "vietnamese": "Thầy giáo bảo chúng tôi hãy noi gương học tập cô ấy."
      },
      {
        "chinese": "关于这个问题，我们还需要认真讨论。",
        "pinyin": "Guān yú zhè gè wèn tí, wǒ men hái xū yào rèn zhēn tǎo lùn.",
        "vietnamese": "Về vấn đề này, chúng ta vẫn cần phải thảo luận kỹ càng."
      },
      {
        "chinese": "关于比赛的时间，我明天一定告诉大家。",
        "pinyin": "Guān yú bǐ sài de shí jiān, wǒ míng tiān yī dìng gào sù dà jiā.",
        "vietnamese": "Về thời gian diễn ra cuộc thi, ngày mai tôi nhất định sẽ thông báo cho mọi người."
      }
    ]
  },
  {
    "id": "hsk3-g-25",
    "order": 25,
    "category": "prepositions",
    "categoryName": "Giới từ phương hướng & đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ dẫn hướng dịch chuyển: 向 (Xiàng - Về hướng, về phía)",
    "titleZh": "向2",
    "grammarType": "词类",
    "categoryType": "引出方向、路径",
    "grammarDetail": "引出方向、路径",
    "structure": "向 + Phương hướng / Địa điểm + Động từ di chuyển (走, 看, 跑)",
    "explanationVi": "Biểu thị hướng vận động di chuyển của hành động (như 向门口走去 - bước về phía cửa; 看向前边 - nhìn về phía trước).",
    "tips": "Có thể dùng tương đương với '往', nhưng '向' văn phong trang nhã và phong phú hơn.",
    "examples": [
      {
        "chinese": "他向门口走去，好像准备离开。",
        "pinyin": "Tā xiàng mén kǒu zǒu qù, hǎo xiàng zhǔn bèi lí kāi.",
        "vietnamese": "Anh ấy bước về phía cửa ra vào, hình như chuẩn bị rời đi."
      },
      {
        "chinese": "老师让大家看向前边。",
        "pinyin": "Lǎo shī ràng dà jiā kàn xiàng qián biān.",
        "vietnamese": "Thầy giáo bảo mọi người hãy nhìn hướng về phía trước."
      }
    ]
  },
  {
    "id": "hsk3-g-26",
    "order": 26,
    "category": "prepositions",
    "categoryName": "Giới từ phương hướng & đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ mục đích & nguyên nhân: 为了 & 为 (Để / Vì...)",
    "titleZh": "为了、为2",
    "grammarType": "词类",
    "categoryType": "引出目的、原因",
    "grammarDetail": "引出目的、原因",
    "structure": "为了 + Mục đích, Chủ ngữ + Hành động | 为 + Nguyên nhân + Cảm thấy...",
    "explanationVi": "• 为了 (wèile): Dẫn ra mục đích hướng tới (thường đứng ở đầu vế câu: 为了身体健康 - để cho sức khỏe; 为了考上大学).\n• 为 (wèi): Biểu thị nguyên nhân sinh ra cảm xúc hoặc hành động (为好成绩感到高兴; 为考试做准备).",
    "tips": "'为了' nhấn mạnh mục đích hướng đến trong tương lai, '因为' nhấn mạnh nguyên nhân đã có trong quá khứ.",
    "examples": [
      {
        "chinese": "为了身体健康，我们应该坚持锻炼。",
        "pinyin": "Wèi le shēn tǐ jiàn kāng, wǒ men yīng gāi jiān chí duàn liàn.",
        "vietnamese": "Để có được sức khỏe tốt, chúng ta nên kiên trì rèn luyện thân thể."
      },
      {
        "chinese": "妈妈经常为了工作睡得很晚。",
        "pinyin": "Mā mā jīng cháng wèi le gōng zuò shuì dé hěn wǎn.",
        "vietnamese": "Mẹ thường xuyên vì công việc bận rộn mà ngủ rất muộn."
      },
      {
        "chinese": "大家都为我的好成绩感到高兴。",
        "pinyin": "Dà jiā dōu wèi wǒ de hǎo chéng jì gǎn dào gāo xīng.",
        "vietnamese": "Mọi người đều cảm thấy vui mừng trước thành tích học tập tốt của tôi."
      },
      {
        "chinese": "同学们都在为下个星期的考试做准备。",
        "pinyin": "Tóng xué men dōu zài wèi xià gè xīng qī de kǎo shì zuò zhǔn bèi.",
        "vietnamese": "Các bạn học sinh đều đang tích cực chuẩn bị cho kỳ thi tuần sau."
      }
    ]
  },
  {
    "id": "hsk3-g-27",
    "order": 27,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Giới từ dẫn xuất đối tượng: 把 (Tác động) & 被 (Bị / Được tác động)",
    "titleZh": "把、被",
    "grammarType": "词类",
    "categoryType": "引出施事、受事",
    "grammarDetail": "引出施事、受事",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ... | Chủ ngữ + 被 + (Tác nhân) + Động từ...",
    "explanationVi": "Hai giới từ đặc trưng hàng đầu của ngữ pháp tiếng Trung:\n• 把: Đưa đối tượng chịu tác động lên trước để xử lý (你把箱子放这儿).\n• 被: Dẫn ra đối tượng gây ra tác động trong câu bị động (自行车被朋友借走了).",
    "tips": "Đây là bước chuyển từ câu đơn sang cấu trúc biến đổi tân ngữ trung cấp.",
    "examples": [
      {
        "chinese": "你把箱子放在这儿吧。",
        "pinyin": "Nǐ bǎ xiāng zi fàng zài zhèr ba.",
        "vietnamese": "Bạn đem chiếc rương đặt ở đây đi."
      },
      {
        "chinese": "我的自行车被朋友借走了。",
        "pinyin": "Wǒ de zì xíng chē bèi péng yǒu jiè zǒu le.",
        "vietnamese": "Chiếc xe đạp của tôi đã bị bạn mượn mang đi mất rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-28",
    "order": 28,
    "category": "prepositions",
    "categoryName": "Giới từ phương hướng & đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ căn cứ, bằng chứng: 根据 (Gēnjù - Căn cứ vào, dựa theo)",
    "titleZh": "根据",
    "grammarType": "词类",
    "categoryType": "引出凭借、依据",
    "grammarDetail": "引出凭借、依据",
    "structure": "根据 + Danh từ (yêu cầu / sở thích / tình hình), Chủ ngữ + Vị ngữ",
    "explanationVi": "Dùng để nêu ra căn cứ, cơ sở hoặc tiền đề làm tiêu chuẩn để đưa ra phán đoán hay hành động (như 根据兴趣 - căn cứ vào sở thích; 根据要求 - căn cứ vào yêu cầu).",
    "tips": "'根据' có thể làm giới từ (căn cứ vào) hoặc danh từ (chứng cứ, căn cứ).",
    "examples": [
      {
        "chinese": "大家可以根据兴趣选择自己喜欢的运动。",
        "pinyin": "Dà jiā kě yǐ gēn jù xīng qù xuǎn zé zì jǐ xǐ huān de yùn dòng.",
        "vietnamese": "Mọi người có thể căn cứ theo sở thích để lựa chọn môn thể thao mình yêu thích."
      },
      {
        "chinese": "根据要求，我们必须参加明天的会议。",
        "pinyin": "Gēn jù yào qiú, wǒ men bì xū cān jiā míng tiān de huì yì.",
        "vietnamese": "Căn cứ theo yêu cầu, chúng ta bắt buộc phải tham gia cuộc họp ngày mai."
      }
    ]
  },
  {
    "id": "hsk3-g-29",
    "order": 29,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ lựa chọn trong câu trần thuật: 或 & 或者 (Huò, Huòzhě - Hoặc, hoặc là)",
    "titleZh": "或、或者",
    "grammarType": "词类",
    "categoryType": "连接词或者短语",
    "grammarDetail": "连接词或者短语",
    "structure": "Phương án A + 或 / 或者 + Phương án B",
    "explanationVi": "Dùng để liên kết hai hay nhiều phương án lựa chọn trong CÂU TRẦN THUẬT khẳng định (như 喝茶或者咖啡都可以; 打车或者坐地铁去).",
    "tips": "Quy tắc cốt tử: '或者' chỉ dùng trong câu trần thuật; trong câu hỏi lựa chọn bắt buộc dùng '还是'.",
    "examples": [
      {
        "chinese": "我喝茶或/或者咖啡都可以。",
        "pinyin": "Wǒ hē chá huò / huò zhě kā fēi dōu kě yǐ.",
        "vietnamese": "Tôi uống trà hoặc cà phê đều được cả."
      },
      {
        "chinese": "我们可以打车或/或者坐地铁去。",
        "pinyin": "Wǒ men kě yǐ dǎ chē huò / huò zhě zuò dì tiě qù.",
        "vietnamese": "Chúng ta có thể bắt taxi hoặc đi tàu điện ngầm đến đó."
      }
    ]
  },
  {
    "id": "hsk3-g-30",
    "order": 30,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Hệ thống Liên từ nối vế câu HSK 3: 只有, 只要, 不但, 而且, 如果, 可是, 然后",
    "titleZh": "只有、只要、不但、而且、如果、可1、可是、然后",
    "grammarType": "词类",
    "categoryType": "连接分句或句子",
    "grammarDetail": "连接分句或句子",
    "structure": "Liên từ 1 + Vế câu 1, + Liên từ 2 + Vế câu 2",
    "explanationVi": "Các cặp liên từ quan trọng bậc nhất:\n• 只有...才...: Chỉ có... mới...\n• 只要...就...: Chỉ cần... thì...\n• 不但...而且...: Không những... mà còn...\n• 如果...就...: Nếu... thì...\n• 可 / 可是: Nhưng, thế nhưng\n• 先...然后...: Trước tiên... sau đó...",
    "tips": "Nắm vững toàn bộ các cặp liên từ này giúp người học tự tin viết và nói các câu phức chuẩn xác.",
    "examples": [
      {
        "chinese": "只有大家一起想办法，才能解决这个问题。",
        "pinyin": "Zhǐ yǒu dà jiā yī qǐ xiǎng bàn fǎ, cái néng jiě jué zhè gè wèn tí.",
        "vietnamese": "Chỉ có khi mọi người cùng nhau nghĩ cách thì mới có thể giải quyết được vấn đề này."
      },
      {
        "chinese": "只要你想学，就一定能学好。",
        "pinyin": "Zhǐ yào nǐ xiǎng xué, jiù yī dìng néng xué hǎo.",
        "vietnamese": "Chỉ cần bạn có lòng muốn học, thì nhất định sẽ học giỏi được."
      },
      {
        "chinese": "我不但学习了中文，而且认识了很多新朋友。",
        "pinyin": "Wǒ bù dàn xué xí le zhōng wén, ér qiě rèn shí le hěn duō xīn péng yǒu.",
        "vietnamese": "Tôi không những đã học được tiếng Trung, mà còn làm quen được với rất nhiều bạn mới."
      },
      {
        "chinese": "如果你有时间，我想请你参加我的生日晚会。",
        "pinyin": "Rú guǒ nǐ yǒu shí jiān, wǒ xiǎng qǐng nǐ cān jiā wǒ de shēng rì wǎn huì.",
        "vietnamese": "Nếu bạn có thời gian, tôi muốn mời bạn đến dự buổi tiệc sinh nhật của tôi."
      },
      {
        "chinese": "她特别想来中国看看，可一直没有合适的机会。",
        "pinyin": "Tā tè bié xiǎng lái zhōng guó kàn kàn, kě yī zhí méi yǒu hé shì de jī huì.",
        "vietnamese": "Cô ấy đặc biệt muốn đến Trung Quốc một chuyến, nhưng cứ mãi chưa có cơ hội thích hợp."
      },
      {
        "chinese": "我很早就到了机场，可是没想到飞机晚点了。",
        "pinyin": "Wǒ hěn zǎo jiù dào le jī chǎng, kě shì méi xiǎng dào fēi jī wǎn diǎn le.",
        "vietnamese": "Tôi đã đến sân bay từ rất sớm, thế nhưng không ngờ máy bay lại bị hoãn chuyến."
      },
      {
        "chinese": "你先去那边买票，然后过来找我。",
        "pinyin": "Nǐ xiān qù nà biān mǎi piào, rán hòu guò lái zhǎo wǒ.",
        "vietnamese": "Bạn qua đằng kia mua vé trước đi, sau đó hãy quay lại đây tìm tôi."
      }
    ]
  },
  {
    "id": "hsk3-g-31",
    "order": 31,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Trợ từ giả thiết điều kiện: ……的话 (De huà - Nếu như...)",
    "titleZh": "的话",
    "grammarType": "词类",
    "categoryType": "其他助词",
    "grammarDetail": "其他助词",
    "structure": "(如果 / 要是) + Vế điều kiện + 的话，……就……",
    "explanationVi": "Đặt ở cuối vế câu giả định để biểu thị ý 'nếu như...', 'trong trường hợp...' (như 你喜欢的话 - nếu bạn thích; 下雨的话 - nếu trời mưa).",
    "tips": "Có thể đứng một mình ở cuối vế 1 hoặc kết hợp với '如果' ở đầu vế để tạo thành '如果...的话'.",
    "examples": [
      {
        "chinese": "你喜欢的话，就送给你吧。",
        "pinyin": "Nǐ xǐ huān de huà, jiù sòng gěi nǐ ba.",
        "vietnamese": "Nếu bạn thích thì tặng luôn cho bạn đấy."
      },
      {
        "chinese": "如果明天下雨的话，我们就不去爬山了。",
        "pinyin": "Rú guǒ míng tiān xià yǔ de huà, wǒ men jiù bù qù pá shān le.",
        "vietnamese": "Nếu ngày mai mà trời mưa thì chúng mình sẽ không đi leo núi nữa."
      }
    ]
  },
  {
    "id": "hsk3-g-32",
    "order": 32,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Cụm từ đồng vị (Chỉ cùng một đối tượng)",
    "titleZh": "同位短语",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Danh từ 1 + Danh từ 2 / Đại từ (cùng chỉ một người / vật)",
    "explanationVi": "Hai từ hoặc cụm từ đứng liền nhau, cùng chỉ chung về một đối tượng nhằm làm rõ hoặc nhấn mạnh thân phận, chức danh (như 首都北京 - thủ đô Bắc Kinh; 她一个人 - một mình cô ấy; 我们学生 - học sinh chúng tôi).",
    "tips": "Giữa hai thành phần đồng vị tuyệt đối không chèn chữ '的'.",
    "examples": [
      {
        "chinese": "首都北京、她一个人、我们学生",
        "pinyin": "Shǒu dōu běi jīng, tā yī gè rén, wǒ men xué shēng",
        "vietnamese": "Thủ đô Bắc Kinh, một mình cô ấy, học sinh chúng tôi."
      }
    ]
  },
  {
    "id": "hsk3-g-33",
    "order": 33,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Cụm động bổ nâng cao: 极了, 坏了, 看不懂, 写得完",
    "titleZh": "动补短语2",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "Động từ / Tính từ + 极了 / 坏了 | Động từ + 得 / 不 + Bổ ngữ",
    "explanationVi": "Bao gồm cả bổ ngữ mức độ cao (漂亮极了 - đẹp cực kỳ; 累坏了 - mệt đứt hơi) và bổ ngữ khả năng (看不懂 - nhìn không hiểu; 写得完 - viết xong được).",
    "tips": "'坏了' sau tính từ mang nghĩa mức độ cực độ (như 累坏了, 饿坏了, 吓坏了).",
    "examples": [
      {
        "chinese": "漂亮极了、累坏了、看不懂、写得完",
        "pinyin": "Piāo liàng jí le, lèi huài le, kàn bù dǒng, xiě dé wán",
        "vietnamese": "Đẹp cực kỳ, mệt đứt hơi, nhìn không hiểu, viết cho xong hết."
      }
    ]
  },
  {
    "id": "hsk3-g-34",
    "order": 34,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Trùng điệp Số lượng từ làm trạng ngữ: 一步一步, 一句一句",
    "titleZh": "数量重叠：数词+量词+数词+量词",
    "grammarType": "短语",
    "categoryType": "其他结构类型",
    "grammarDetail": "其他结构类型",
    "structure": "一 + Lượng từ + 一 + Lượng từ + 地 + Động từ",
    "explanationVi": "Lặp lại kết cấu số lượng từ làm trạng ngữ để biểu thị hành động được thực hiện từng bước, từng đơn vị một cách tuần tự, kiên trì, tỉ mỉ (như 一步一步地做 - làm từng bước một; 一句一句地教 - dạy từng câu một).",
    "tips": "Phía sau thường dùng trợ từ trạng ngữ '地' (de).",
    "examples": [
      {
        "chinese": "工作要一步一步地做。",
        "pinyin": "Gōng zuò yào yī bù yī bù dì zuò.",
        "vietnamese": "Công việc cần phải làm từng bước từng bước một cách cẩn thận."
      },
      {
        "chinese": "老师一句一句地教我们读课文。",
        "pinyin": "Lǎo shī yī jù yī jù dì jiào wǒ men dú kè wén.",
        "vietnamese": "Thầy giáo dạy chúng tôi đọc bài khóa từng câu từng câu một."
      }
    ]
  },
  {
    "id": "hsk3-g-35",
    "order": 35,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Cụm từ bốn chữ đối xứng: 不 A 不 B (Không... cũng chẳng...)",
    "titleZh": "不A 不 B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "不 + Tính từ 1 + 不 + Tính từ 2 (trái nghĩa hoặc bổ sung)",
    "explanationVi": "Cụm từ bốn chữ đối xứng biểu thị trạng thái ở mức độ vừa phải, hoàn hảo, trung dung (như 不大不小 - không to không nhỏ, rất vừa; 不冷不热 - không lạnh không nóng, dễ chịu).",
    "tips": "A và B thường là hai tính từ đối lập nhau biểu thị sự cân đối hoàn mỹ.",
    "examples": [
      {
        "chinese": "这件衣服不大不小，特别合适。",
        "pinyin": "Zhè jiàn yī fú bù dà bù xiǎo, tè bié hé shì.",
        "vietnamese": "Bộ quần áo này không to cũng không nhỏ, vừa vặn vô cùng."
      },
      {
        "chinese": "最近天气不冷不热，很舒服。",
        "pinyin": "Zuì jìn tiān qì bù lěng bù rè, hěn shū fú.",
        "vietnamese": "Thời tiết dạo này không lạnh cũng không nóng, rất dễ chịu."
      }
    ]
  },
  {
    "id": "hsk3-g-36",
    "order": 36,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cụm từ thời gian chớp nhoáng: 不一会儿 (Bù yíhuìr - Chẳng mấy chốc)",
    "titleZh": "不一会儿",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "不一会儿，Chủ ngữ + 就 + Vị ngữ",
    "explanationVi": "Dùng ở đầu câu hoặc trước vị ngữ để biểu thị khoảng thời gian trôi qua rất nhanh, chẳng mấy chốc sau sự việc tiếp theo đã xuất hiện (như 不一会儿，张校长就来了 - chẳng mấy chốc hiệu trưởng đã đến).",
    "tips": "Có thể thay bằng '没多久' hoặc '过了一会儿'.",
    "examples": [
      {
        "chinese": "不一会儿，张校长就来了。",
        "pinyin": "Bù yī huì ér, zhāng xiào zhǎng jiù lái le.",
        "vietnamese": "Chẳng mấy chốc sau, hiệu trưởng Trương đã bước tới."
      },
      {
        "chinese": "时间不一会儿就过去了。",
        "pinyin": "Shí jiān bù yī huì ér jiù guò qù le.",
        "vietnamese": "Thời gian thoắt một cái đã trôi qua mất rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-37",
    "order": 37,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Thành phần chêm xen nhận định: 看来 (Kànlai - Xem ra, xem chừng)",
    "titleZh": "看来",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "看来 + Mệnh đề phán đoán, đánh giá",
    "explanationVi": "Đứng ở đầu câu để đưa ra nhận xét, đánh giá hoặc suy đoán dựa trên tình hình thực tế đang diễn ra trước mắt (như 看来咱们只能走楼梯了 - xem ra chúng mình chỉ có thể đi thang bộ thôi; 看来他今天不会来了).",
    "tips": "Mang sắc thái phán đoán khách quan dựa trên chứng cớ cụ thể.",
    "examples": [
      {
        "chinese": "电梯坏了，看来咱们只能走楼梯了。",
        "pinyin": "Diàn tī huài le, kàn lái zán men zhǐ néng zǒu lóu tī le.",
        "vietnamese": "Thang máy hỏng rồi, xem ra chúng mình chỉ có thể đi cầu thang bộ thôi."
      },
      {
        "chinese": "这么晚了，看来他今天不会来了。",
        "pinyin": "Zhè me wǎn le, kàn lái tā jīn tiān bù huì lái le.",
        "vietnamese": "Muộn thế này rồi, xem chừng hôm nay anh ấy sẽ không đến đâu."
      }
    ]
  },
  {
    "id": "hsk3-g-38",
    "order": 38,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Khung biểu đạt quan điểm cá nhân: 在……看来 (Theo quan điểm của...)",
    "titleZh": "在……看来",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "在 + Đối tượng + 看来，Mệnh đề nhận định",
    "explanationVi": "Dùng để nêu rõ lập trường, cách nhìn nhận, quan điểm của một cá nhân hay tập thể nào đó (như 在我看来 - theo tôi thấy; 在同事们看来 - dưới con mắt của đồng nghiệp).",
    "tips": "Cách biểu đạt rất trang trọng, đắt giá khi viết luận hoặc tranh biện.",
    "examples": [
      {
        "chinese": "在同事们看来，她对工作非常认真。",
        "pinyin": "Zài tóng shì men kàn lái, tā duì gōng zuò fēi cháng rèn zhēn.",
        "vietnamese": "Dưới con mắt của các đồng nghiệp, cô ấy đối với công việc vô cùng tận tâm."
      },
      {
        "chinese": "在我看来，坚持读书是一种很好的习惯。",
        "pinyin": "Zài wǒ kàn lái, jiān chí dú shū shì yī zhǒng hěn hǎo de xí guàn.",
        "vietnamese": "Theo quan điểm của tôi, kiên trì đọc sách là một thói quen rất tốt."
      }
    ]
  },
  {
    "id": "hsk3-g-39",
    "order": 39,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "Cụm tăng tiến theo thời gian: 越来越…… (Ngày càng...)",
    "titleZh": "越来越",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + 越来越 + Tính từ / Động từ tâm lý",
    "explanationVi": "Biểu thị mức độ của sự vật hoặc tâm lý biến đổi tăng dần theo bước chuyển của thời gian (như 越来越冷 - ngày càng lạnh; 越来越多 - ngày càng nhiều; 越来越习惯 - ngày càng quen dần).",
    "tips": "Sau '越来越' KHÔNG ĐƯỢC dùng thêm các phó từ mức độ như 很, 非常, 太.",
    "examples": [
      {
        "chinese": "听说学习中文的年轻人越来越多。",
        "pinyin": "Tīng shuō xué xí zhōng wén de nián qīng rén yuè lái yuè duō.",
        "vietnamese": "Nghe nói số người trẻ học tiếng Trung ngày càng nhiều hơn."
      },
      {
        "chinese": "我越来越习惯这里的生活了。",
        "pinyin": "Wǒ yuè lái yuè xí guàn zhè lǐ de shēng huó le.",
        "vietnamese": "Tôi ngày càng quen dần với nếp sống ở nơi đây."
      }
    ]
  },
  {
    "id": "hsk3-g-40",
    "order": 40,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Đánh giá qua ấn tượng thị giác: 看起来 (Kàn qǐlái - Trông có vẻ...)",
    "titleZh": "看起来",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + 看起来 + Tính từ / Cụm tính từ",
    "explanationVi": "Đưa ra đánh giá, nhận xét sơ bộ dựa trên diện mạo bên ngoài nhìn thấy bằng mắt (như 看起来很好吃 - trông có vẻ ngon; 看起来很年轻 - trông có vẻ còn rất trẻ).",
    "tips": "Tương đương với 'looks like / seems' trong tiếng Anh.",
    "examples": [
      {
        "chinese": "这些菜看起来都很好吃。",
        "pinyin": "Zhè xiē cài kàn qǐ lái dōu hěn hǎo chī.",
        "vietnamese": "Mấy món ăn này trông có vẻ đều rất ngon miệng."
      },
      {
        "chinese": "那个新来的老师看起来很年轻。",
        "pinyin": "Nà gè xīn lái de lǎo shī kàn qǐ lái hěn nián qīng.",
        "vietnamese": "Thầy giáo mới chuyển đến trông có vẻ còn rất trẻ."
      }
    ]
  },
  {
    "id": "hsk3-g-41",
    "order": 41,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Đánh giá qua diện mạo bên ngoài: 看上去 (Kàn shangqu - Nhìn bề ngoài...)",
    "titleZh": "看上去",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + 看上去 + Tính từ / Mệnh đề",
    "explanationVi": "Gần nghĩa với '看起来', dùng để nhận định về vẻ ngoài hoặc cảm giác ban đầu khi tiếp xúc (như 看上去很难，其实很简单 - nhìn bề ngoài tưởng khó mà thực ra rất dễ; 看上去不像五十岁 - nhìn không giống 50 tuổi).",
    "tips": "Thường hay dùng phối hợp với vế sau chuyển ngoặt (其实...).",
    "examples": [
      {
        "chinese": "这道题看上去很难，其实很简单。",
        "pinyin": "Zhè dào tí kàn shàng qù hěn nán, qí shí hěn jiǎn dān.",
        "vietnamese": "Đề bài này nhìn lướt qua thì tưởng khó, thực ra lại rất đơn giản."
      },
      {
        "chinese": "她看上去不像五十多岁的人。",
        "pinyin": "Tā kàn shàng qù bù xiàng wǔ shí duō suì de rén.",
        "vietnamese": "Cô ấy nhìn bề ngoài trông chẳng giống người ngoài năm mươi tuổi chút nào."
      }
    ]
  },
  {
    "id": "hsk3-g-42",
    "order": 42,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cụm từ chuyển ý phổ quát: 一般来说 (Yìbān lái shuō - Thông thường mà nói)",
    "titleZh": "一般来说",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "一般来说，Chủ ngữ + Vị ngữ",
    "explanationVi": "Đặt ở đầu câu để phát biểu một quy luật chung, một sự thật phổ biến áp dụng cho phần lớn các trường hợp thông thường (như 一般来说，早上锻炼身体比较好; 学习外语需要多练习).",
    "tips": "Dùng mở đầu khi trình bày quan điểm mang tính quy luật khoa học.",
    "examples": [
      {
        "chinese": "一般来说，早上锻炼身体比较好。",
        "pinyin": "Yī bān lái shuō, zǎo shàng duàn liàn shēn tǐ bǐ jiào hǎo.",
        "vietnamese": "Nói chung thông thường, tập thể dục vào buổi sáng là tốt hơn cả."
      },
      {
        "chinese": "一般来说，学习外语需要多练习。",
        "pinyin": "Yī bān lái shuō, xué xí wài yǔ xū yào duō liàn xí.",
        "vietnamese": "Thông thường mà nói, học ngoại ngữ đòi hỏi phải luyện tập thật nhiều."
      }
    ]
  },
  {
    "id": "hsk3-g-43",
    "order": 43,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cụm từ khẩu ngữ đánh giá thấp: 不怎么样 (Chẳng ra làm sao / Không hay lắm)",
    "titleZh": "不怎么样",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ / Vị ngữ + 不怎么样",
    "explanationVi": "Dùng trong khẩu ngữ để chê hoặc nhận xét một người, sự việc hay thành tích nào đó ở mức tầm thường, không đạt yêu cầu, chẳng ra làm sao (như 照得不怎么样 - chụp không đẹp lắm; 成绩不怎么样 - thành tích chẳng ra sao).",
    "tips": "Một cách từ chối hoặc đánh giá khéo léo mang tính phê bình nhẹ nhàng.",
    "examples": [
      {
        "chinese": "我觉得这些照片照得不怎么样。",
        "pinyin": "Wǒ jué dé zhè xiē zhào piàn zhào dé bù zěn me yàng.",
        "vietnamese": "Tôi thấy những tấm ảnh này chụp chẳng ra làm sao cả."
      },
      {
        "chinese": "虽然考试前我复习了很长时间，但是成绩不怎么样。",
        "pinyin": "Suī rán kǎo shì qián wǒ fù xí le hěn zhǎng shí jiān, dàn shì chéng jì bù zěn me yàng.",
        "vietnamese": "Tuy trước kỳ thi tôi đã ôn tập rất lâu, nhưng kết quả thi chẳng được như ý."
      }
    ]
  },
  {
    "id": "hsk3-g-44",
    "order": 44,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc loại trừ & bổ sung: 除了……（以外），……还/也/都……",
    "titleZh": "除了 ……（以外），……还/也/都……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "除了 A (以外)，……还 / 也 B (Bổ sung thêm) | 除了 A (以外)，……都 B (Loại trừ duy nhất)",
    "explanationVi": "• Mang nghĩa bổ sung (Ngoài A ra còn có B): 除了看新闻，还可以在网上买东西.\n• Mang nghĩa loại trừ (Trừ A ra, tất cả đều...): 除了北京，别的城市都没去过.",
    "tips": "Xem phó từ ở vế sau để xác định nghĩa: có '还/也' là bổ sung; có '都/全' là loại trừ.",
    "examples": [
      {
        "chinese": "除了看新闻（以外），人们还/也可以在网上看电影、买东西。",
        "pinyin": "Chú le kàn xīn wén (yǐ wài), rén men hái / yě kě yǐ zài wǎng shàng kàn diàn yǐng, mǎi dōng xī.",
        "vietnamese": "Ngoài việc đọc tin tức ra, mọi người còn có thể xem phim, mua sắm trên mạng."
      },
      {
        "chinese": "除了北京（以外），别的城市我都没去过。",
        "pinyin": "Chú le běi jīng (yǐ wài), bié de chéng shì wǒ dōu méi qù guò.",
        "vietnamese": "Ngoại trừ Bắc Kinh ra, các thành phố khác tôi đều chưa từng đặt chân tới."
      }
    ]
  },
  {
    "id": "hsk3-g-45",
    "order": 45,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Mốc thời gian khởi điểm liên tục: 从……起 (Kể từ... trở đi)",
    "titleZh": "从……起",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "从 + Mốc thời gian + 起，Chủ ngữ + Vị ngữ",
    "explanationVi": "Biểu thị sự việc, trạng thái bắt đầu hình thành và tiếp tục duy trì kể từ một thời điểm nhất định trong quá khứ hoặc hiện tại (như 从那天起 - kể từ ngày ấy; 从现在起 - kể từ lúc này trở đi).",
    "tips": "Tương đương với '从...开始'.",
    "examples": [
      {
        "chinese": "从那天起，我们就变成了好朋友。",
        "pinyin": "Cóng nà tiān qǐ, wǒ men jiù biàn chéng le hǎo péng yǒu.",
        "vietnamese": "Kể từ ngày hôm đó trở đi, chúng tôi đã trở thành bạn tốt của nhau."
      },
      {
        "chinese": "从现在起，我一定要努力学习。",
        "pinyin": "Cóng xiàn zài qǐ, wǒ yī dìng yào nǔ lì xué xí.",
        "vietnamese": "Kể từ lúc này trở đi, tôi nhất định sẽ nỗ lực học tập thật chăm chỉ."
      }
    ]
  },
  {
    "id": "hsk3-g-46",
    "order": 46,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Khung quy chiếu đối tượng: 对……来说 (Đối với... mà nói)",
    "titleZh": "对……来说",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "对 + Đối tượng (người/vật) + 来说，Mệnh đề nhận định",
    "explanationVi": "Dùng để giới thiệu góc nhìn, mức độ ảnh hưởng hoặc ý nghĩa của một vấn đề đối với một đối tượng cụ thể (như 对他来说 - đối với anh ấy; 对我来说 - đối với tôi).",
    "tips": "Cấu trúc thông dụng nhất khi bắt đầu diễn đạt cảm nhận cá nhân.",
    "examples": [
      {
        "chinese": "对他来说，这个机会非常重要。",
        "pinyin": "Duì tā lái shuō, zhè gè jī huì fēi cháng zhòng yào.",
        "vietnamese": "Đối với anh ấy, cơ hội lần này có ý nghĩa vô cùng quan trọng."
      },
      {
        "chinese": "对我来说，学习汉语很有意思。",
        "pinyin": "Duì wǒ lái shuō, xué xí hàn yǔ hěn yǒu yì sī.",
        "vietnamese": "Đối với cá nhân tôi, việc học tiếng Hán là rất thú vị."
      }
    ]
  },
  {
    "id": "hsk3-g-47",
    "order": 47,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc phủ định hoàn toàn: 一……也 / 都不 / 没…… (Một chút cũng không)",
    "titleZh": "一……也/都+不/没……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 一 + Lượng từ + Danh từ + 也 / 都 + 不 / 没 + Động từ",
    "explanationVi": "Dùng để nhấn mạnh sự phủ định tuyệt đối 100%, không hề có lấy một ngoại lệ nhỏ nhất (như 一句汉语也不会说 - một câu tiếng Hán cũng không biết nói; 一个都没去过 - một nơi cũng chưa từng đi).",
    "tips": "Nếu tân ngữ không đếm được, dùng '一点儿' (ví dụ: 一点儿钱也没有).",
    "examples": [
      {
        "chinese": "来中国以前，我一句汉语也不会说。",
        "pinyin": "Lái zhōng guó yǐ qián, wǒ yī jù hàn yǔ yě bù huì shuō.",
        "vietnamese": "Trước khi đến Trung Quốc, tôi một câu tiếng Hán cũng không biết nói."
      },
      {
        "chinese": "你说的这些地方我一个都没去过。",
        "pinyin": "Nǐ shuō de zhè xiē dì fāng wǒ yī gè dōu méi qù guò.",
        "vietnamese": "Những địa danh bạn vừa kể, tôi chưa từng đi qua một nơi nào cả."
      }
    ]
  },
  {
    "id": "hsk3-g-48",
    "order": 48,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc phủ định tính chất tuyệt đối: 一点儿也不 / 没……",
    "titleZh": "一点儿也不",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 一点儿也 + 不 / 没 + Tính từ / Động từ tâm lý",
    "explanationVi": "Nhấn mạnh mức độ của tính chất hoặc cảm xúc hoàn toàn bằng 0, không hề có chút nào (như 一点儿也不着急 - chẳng sốt ruột chút nào; 一点儿也不冷 - một chút cũng không lạnh).",
    "tips": "Có thể thay '也' bằng '都' (一点儿都不冷).",
    "examples": [
      {
        "chinese": "快要考试了，你怎么一点儿也不着急？",
        "pinyin": "Kuài yào kǎo shì le, nǐ zěn me yìdiǎnr yě bù zhe jí?",
        "vietnamese": "Sắp thi đến nơi rồi, sao bạn lại chẳng có vẻ sốt ruột chút nào thế?"
      },
      {
        "chinese": "今天天气很好，一点儿也不冷。",
        "pinyin": "Jīn tiān tiān qì hěn hǎo, yìdiǎnr yě bù lěng.",
        "vietnamese": "Hôm nay thời tiết rất đẹp, một chút cũng chẳng lạnh."
      }
    ]
  },
  {
    "id": "hsk3-g-49",
    "order": 49,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "Cấu trúc tương quan tăng tiến: 越……越…… (Càng... càng...)",
    "titleZh": "越……越……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "越 + Điều kiện A + 越 + Kết quả B (hoặc: 越 A 越好: càng A càng tốt)",
    "explanationVi": "Biểu thị mức độ của vế sau biến đổi tỷ lệ thuận tương ứng với sự biến đổi mức độ của vế trước (như 越多越好 - càng nhiều càng tốt; 休息得越多，好得越快 - nghỉ càng nhiều khỏi càng mau).",
    "tips": "Đây là mẫu câu so sánh tỷ lệ thuận kinh điển trong tiếng Trung.",
    "examples": [
      {
        "chinese": "我想认识中国朋友，越多越好。",
        "pinyin": "Wǒ xiǎng rèn shí zhōng guó péng yǒu, yuè duō yuè hǎo.",
        "vietnamese": "Tôi muốn làm quen với các bạn Trung Quốc, càng đông thì càng tốt."
      },
      {
        "chinese": "医生让我多休息，休息得越多，好得越快。",
        "pinyin": "Yī shēng ràng wǒ duō xiū xī, xiū xī dé yuè duō, hǎo dé yuè kuài.",
        "vietnamese": "Bác sĩ khuyên tôi nên nghỉ ngơi nhiều, nghỉ càng nhiều thì bệnh khỏi càng mau."
      }
    ]
  },
  {
    "id": "hsk3-g-50",
    "order": 50,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Biểu thị thời điểm trước & sau sự việc: （在）……以前 / 以后 / 前 / 后",
    "titleZh": "（在）……以前/以后/前/后",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "(在) + Hành động / Mốc thời gian + 以前 / 以后 / 前 / 后",
    "explanationVi": "Xác định thời điểm trước hoặc sau khi một sự việc nào đó xảy ra:\n• 以前 / 前: Trước khi (考试以前, 睡觉前).\n• 以后 / 后: Sau khi (来到中国以后, 放学后).",
    "tips": "Chú ý trật tự từ: Tiếng Việt nói 'Trước khi thi', tiếng Trung bắt buộc đảo: '考试 + 以前'.",
    "examples": [
      {
        "chinese": "考试以前，你一定要认真复习。",
        "pinyin": "Kǎo shì yǐ qián, nǐ yī dìng yào rèn zhēn fù xí.",
        "vietnamese": "Trước khi thi cử, bạn nhất định phải ôn tập thật kỹ lưỡng."
      },
      {
        "chinese": "来到中国以后，我慢慢习惯了这里的生活。",
        "pinyin": "Lái dào zhōng guó yǐ hòu, wǒ màn màn xí guàn le zhè lǐ de shēng huó.",
        "vietnamese": "Sau khi đặt chân tới Trung Quốc, tôi dần dần thích nghi với cuộc sống nơi đây."
      },
      {
        "chinese": "睡觉前别忘记吃药。",
        "pinyin": "Shuì jué qián bié wàng jì chī yào.",
        "vietnamese": "Trước khi đi ngủ chớ quên uống thuốc nhé."
      },
      {
        "chinese": "放学后，我要参加留学生篮球比赛。",
        "pinyin": "Fàng xué hòu, wǒ yào cān jiā liú xué shēng lán qiú bǐ sài.",
        "vietnamese": "Sau khi tan học, tôi sẽ tham gia giải đấu bóng rổ của lưu học sinh."
      },
      {
        "chinese": "在离开中国以前，我一定要去长城看看。",
        "pinyin": "Zài lí kāi zhōng guó yǐ qián, wǒ yī dìng yào qù zhǎng chéng kàn kàn.",
        "vietnamese": "Trước khi rời khỏi Trung Quốc, tôi nhất định phải đến Vạn Lý Trường Thành tham quan một chuyến."
      }
    ]
  },
  {
    "id": "hsk3-g-51",
    "order": 51,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc phản bác, gạt đi: X 什么（啊） (Gì mà... cơ chứ!)",
    "titleZh": "X什么(啊)",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tính từ / Động từ + 什么（啊）！",
    "explanationVi": "Dùng trong khẩu ngữ để phản bác lại nhận định của đối phương, biểu thị ý không đồng tình, coi nhẹ hoặc gạt đi (như 难过什么啊 - buồn bã nỗi gì chứ!; 方便什么啊 - tiện lợi gì đâu cơ chứ!).",
    "tips": "Mang sắc thái cảm xúc thân mật, cởi mở giữa bạn bè.",
    "examples": [
      {
        "chinese": "难过什么啊，你的成绩不是挺好的吗？",
        "pinyin": "Nán guò shén me a, nǐ de chéng jì bù shì tǐng hǎo de ma?",
        "vietnamese": "Buồn bã nỗi gì chứ, thành tích của bạn chẳng phải khá tốt rồi sao?"
      },
      {
        "chinese": "方便什么啊，附近一个超市都没有。",
        "pinyin": "Fāng biàn shén me a, fù jìn yī gè chāo shì dōu méi yǒu.",
        "vietnamese": "Tiện lợi nỗi gì chứ, xung quanh đây đến một cái siêu thị cũng chẳng có."
      }
    ]
  },
  {
    "id": "hsk3-g-52",
    "order": 52,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc đến lúc phải làm việc gì: 该……了 (Đến lúc... rồi)",
    "titleZh": "该……了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "该 + Động từ / Hành động + 了",
    "explanationVi": "Nhắc nhở hoặc tự nhận thức rằng đã đến thời điểm thích hợp hoặc cần thiết phải tiến hành hành động (như 该上课了 - đến giờ vào lớp rồi; 该复习了 - phải ôn tập thôi).",
    "tips": "Có thể thêm '应该' hoặc '该...了' đều được.",
    "examples": [
      {
        "chinese": "八点了，该上课了。",
        "pinyin": "Bā diǎn le, gāi shàng kè le.",
        "vietnamese": "Tám giờ rồi, đến giờ phải vào lớp rồi."
      },
      {
        "chinese": "下周要考试，我该复习了。",
        "pinyin": "Xià zhōu yào kǎo shì, wǒ gāi fù xí le.",
        "vietnamese": "Tuần sau sắp thi rồi, tôi phải bắt tay vào ôn bài thôi."
      }
    ]
  },
  {
    "id": "hsk3-g-53",
    "order": 53,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Khung định vị phạm vi & điều kiện: 在……上 / 下 / 中",
    "titleZh": "在……上/下/中",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "在 + Lĩnh vực + 上 | 在 + Sự giúp đỡ/tác động + 下 | 在 + Quá trình/sự kiện + 中",
    "explanationVi": "• 在...上: Về phương diện, lĩnh vực (在学习上 - về mặt học tập).\n• 在...下: Dưới sự tác động, ảnh hưởng (在父母的影响下 - dưới sự ảnh hưởng của cha mẹ).\n• 在...中: Trong quá trình, trong sự kiện (在这次比赛中 - trong cuộc thi này).",
    "tips": "Cụm khung giới từ này tạo nên văn phong hành văn rất học thuật và chuẩn mực.",
    "examples": [
      {
        "chinese": "在学习上，老师和同学给了我许多帮助。",
        "pinyin": "Zài xué xí shàng, lǎo shī hé tóng xué gěi le wǒ xǔ duō bāng zhù.",
        "vietnamese": "Về mặt học tập, thầy cô và bạn bè đã giúp đỡ tôi rất nhiều."
      },
      {
        "chinese": "在父母的影响下，我从小就对中文很感兴趣。",
        "pinyin": "Zài fù mǔ de yǐng xiǎng xià, wǒ cóng xiǎo jiù duì zhōng wén hěn gǎn xīng qù.",
        "vietnamese": "Dưới sự ảnh hưởng của cha mẹ, từ nhỏ tôi đã rất có hứng thú với tiếng Trung."
      },
      {
        "chinese": "在这次比赛中，我认识了一些新朋友。",
        "pinyin": "Zài zhè cì bǐ sài zhōng, wǒ rèn shí le yī xiē xīn péng yǒu.",
        "vietnamese": "Trong cuộc thi lần này, tôi đã quen biết thêm được một số người bạn mới."
      }
    ]
  },
  {
    "id": "hsk3-g-54",
    "order": 54,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Chủ ngữ là Động từ hoặc Tính từ (Hành vi/Trạng thái làm chủ thể)",
    "titleZh": "动词或动词性短语、形容词或形容词性短语作主语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Cụm Động từ / Cụm Tính từ + Vị ngữ đánh giá",
    "explanationVi": "Đưa trực tiếp một hành vi hoặc một tính chất lên làm chủ ngữ của câu để đưa ra nhận xét, đánh giá về hành vi đó (như 哭没有用 - khóc lóc chẳng có ích gì; 多穿一点儿比较好 - mặc ấm thêm chút thì tốt hơn; 太胖了不好 - béo quá không tốt).",
    "tips": "Không cần thêm từ nối nào, vị ngữ phía sau thường là các cụm nhận xét.",
    "examples": [
      {
        "chinese": "哭没有用。",
        "pinyin": "Kū méi yǒu yòng.",
        "vietnamese": "Khóc lóc chẳng có ích lợi gì đâu."
      },
      {
        "chinese": "多穿一点儿比较好。",
        "pinyin": "Duō chuān yìdiǎnr bǐ jiào hǎo.",
        "vietnamese": "Mặc ấm thêm một chút thì tốt hơn."
      },
      {
        "chinese": "太胖了不好，太瘦了也不好。",
        "pinyin": "Tài pàng le bù hǎo, tài shòu le yě bù hǎo.",
        "vietnamese": "Béo quá thì không tốt, mà gầy quá cũng chẳng tốt."
      }
    ]
  },
  {
    "id": "hsk3-g-55",
    "order": 55,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Chủ ngữ là Cụm chủ vị (Một mệnh đề làm chủ thể)",
    "titleZh": "主谓短语作主语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "[Chủ ngữ nhỏ + Vị ngữ nhỏ] + Vị ngữ lớn của cả câu",
    "explanationVi": "Cả một cụm chủ - vị hoàn chỉnh đóng vai trò làm chủ ngữ cho câu lớn (như 你来也可以 - việc bạn đến cũng được; 身体健康最重要 - thân thể khỏe mạnh là điều quan trọng nhất).",
    "tips": "Cấu trúc giúp cô đọng toàn bộ một sự việc thành một chủ thể luận bàn.",
    "examples": [
      {
        "chinese": "你来也可以。",
        "pinyin": "Nǐ lái yě kě yǐ.",
        "vietnamese": "Bạn đến đây cũng được thôi."
      },
      {
        "chinese": "身体健康最重要。",
        "pinyin": "Shēn tǐ jiàn kāng zuì zhòng yào.",
        "vietnamese": "Thân thể khỏe mạnh là điều quan trọng nhất."
      }
    ]
  },
  {
    "id": "hsk3-g-56",
    "order": 56,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Định ngữ nhiều tầng phức hợp (多项定语)",
    "titleZh": "多项定语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Sở hữu/Thời gian + Chỉ định/Số lượng + Cụm Động từ + Tính từ + Danh từ trung tâm",
    "explanationVi": "Một danh từ được bổ nghĩa bởi nhiều tầng định ngữ cùng lúc (như 我昨天新买的那条黑色的裤子 - chiếc quần màu đen tôi mới mua hôm qua; 穿着蓝衬衫的短头发高个子的老人).",
    "tips": "Thứ tự sắp xếp chuẩn: Từ sở hữu/thời gian -> Cụm chỉ thị/số lượng -> Cụm động từ/mô tả -> Tính từ -> Danh từ.",
    "examples": [
      {
        "chinese": "我昨天新买的那条黑色的裤子你放在哪儿了？",
        "pinyin": "Wǒ zuó tiān xīn mǎi de nà tiáo hēi sè de kù zi nǐ fàng zài nǎr le?",
        "vietnamese": "Chiếc quần màu đen mới mua hôm qua của tôi bạn đã để ở đâu rồi?"
      },
      {
        "chinese": "前面那个穿着蓝衬衫的短头发高个子的老人就是我的中文老师。",
        "pinyin": "Qián miàn nà gè chuān zhe lán chèn shān de duǎn tóu fā gāo gè zi de lǎo rén jiù shì wǒ de zhōng wén lǎo shī.",
        "vietnamese": "Cụ già vóc dáng cao ráo, tóc ngắn đang mặc chiếc áo sơ mi xanh phía trước chính là thầy giáo tiếng Trung của tôi."
      }
    ]
  },
  {
    "id": "hsk3-g-57",
    "order": 57,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ kết quả nâng cao: 动词 + 到, 住, 走, 上",
    "titleZh": "动词+到/住/走/上",
    "grammarType": "句子成分",
    "categoryType": "结果补语2",
    "grammarDetail": "结果补语2",
    "structure": "Động từ + 到 (đạt được/đến) / 住 (chặt, chắc) / 走 (rời đi) / 上 (khép lại, dính)",
    "explanationVi": "Biểu thị kết quả đạt được sau hành động:\n• 买到: mua được\n• 记住: ghi nhớ chắc\n• 骑走: đạp xe đi mất\n• 关上: đóng, tắt khép lại (关上电脑 - tắt máy tính).",
    "tips": "Mỗi bổ ngữ kết quả đều mang một nét nghĩa đặc trưng về sự biến đổi trạng thái của vật.",
    "examples": [
      {
        "chinese": "火车票你买到了没有？",
        "pinyin": "Huǒ chē piào nǐ mǎi dào le méi yǒu?",
        "vietnamese": "Vé tàu hỏa bạn đã mua được chưa?"
      },
      {
        "chinese": "老师说的话我都记住了。",
        "pinyin": "Lǎo shī shuō de huà wǒ dōu jì zhù le.",
        "vietnamese": "Những lời thầy giáo căn dặn tôi đều đã ghi nhớ kỹ trong lòng."
      },
      {
        "chinese": "我的自行车让朋友骑走了。",
        "pinyin": "Wǒ de zì xíng chē ràng péng yǒu qí zǒu le.",
        "vietnamese": "Chiếc xe đạp của tôi bị người bạn đạp đi mất rồi."
      },
      {
        "chinese": "下班的时候，别忘了关上电脑。",
        "pinyin": "Xià bān de shí hòu, bié wàng le guān shàng diàn nǎo.",
        "vietnamese": "Lúc tan sở ra về, đừng quên tắt máy vi tính nhé."
      }
    ]
  },
  {
    "id": "hsk3-g-58",
    "order": 58,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Kết quả (出, 起, 下)",
    "titleZh": "趋向补语的引申用法：表示结果意义：动词+出/起/下",
    "grammarType": "句子成分",
    "categoryType": "趋向补语2",
    "grammarDetail": "趋向补语2",
    "structure": "Động từ + 出 (nghĩ ra, nhận ra) / 起 (nhớ ra) / 下 (ghi lại, lưu lại)",
    "explanationVi": "Bổ ngữ xu hướng không chỉ chỉ phương hướng mà còn chỉ kết quả trừu tượng:\n• 想出: nghĩ ra (ý tưởng)\n• 想起: nhớ lại, sực nhớ ra (kỷ niệm, tên)\n• 写下: ghi lại, chép lại xuống giấy.",
    "tips": "Phân biệt: '想出' là sáng tạo ra cái mới; '想起' là nhớ lại cái trong quá khứ.",
    "examples": [
      {
        "chinese": "我们终于想出了一个好办法。",
        "pinyin": "Wǒ men zhōng yú xiǎng chū le yī gè hǎo bàn fǎ.",
        "vietnamese": "Cuối cùng chúng tôi cũng đã nghĩ ra được một cách hay."
      },
      {
        "chinese": "你想起她的名字了没有？",
        "pinyin": "Nǐ xiǎng qǐ tā de míng zì le méi yǒu?",
        "vietnamese": "Bạn đã nhớ lại được tên của cô ấy hay chưa?"
      },
      {
        "chinese": "请在这儿写下您的电话。",
        "pinyin": "Qǐng zài zhèr xiě xià nín de diàn huà.",
        "vietnamese": "Xin hãy viết lại số điện thoại của quý khách vào đây."
      }
    ]
  },
  {
    "id": "hsk3-g-59",
    "order": 59,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Bắt đầu (上, 起来)",
    "titleZh": "趋向补语的引申用法：表示动作行为的开始：动词+上/起来",
    "grammarType": "句子成分",
    "categoryType": "趋向补语2",
    "grammarDetail": "趋向补语2",
    "structure": "Động từ + 上 (bắt đầu tham gia / đạt được việc) | Động từ + 起来 (bắt đầu và tiếp diễn)",
    "explanationVi": "• 吃上饭 / 玩上游戏: Đã bắt đầu được hưởng, được làm việc gì đó sau thời gian chờ đợi.\n• 聊起来 / 哭起来: Bắt đầu bộc phát hành động và có xu hướng tiếp diễn liên tục.",
    "tips": "'动词 + 起来' tương đương với 'bắt đầu... lên'.",
    "examples": [
      {
        "chinese": "饿了一天，我们终于吃上饭了。",
        "pinyin": "È le yī tiān, wǒ men zhōng yú chī shàng fàn le.",
        "vietnamese": "Đói lả cả ngày, cuối cùng chúng tôi cũng được ăn bữa cơm rồi."
      },
      {
        "chinese": "儿子刚到家就玩上了电脑游戏。",
        "pinyin": "Ér zi gāng dào jiā jiù wán shàng le diàn nǎo yóu xì.",
        "vietnamese": "Con trai vừa về đến nhà là bắt đầu cắm cúi chơi trò chơi điện tử ngay."
      },
      {
        "chinese": "他们一见面就聊起来了。",
        "pinyin": "Tā men yī jiàn miàn jiù liáo qǐ lái le.",
        "vietnamese": "Họ vừa mới gặp nhau là đã trò chuyện rôm rả ngay tức thì."
      },
      {
        "chinese": "妈妈一出门，孩子就哭起来了。",
        "pinyin": "Mā mā yī chū mén, hái zi jiù kū qǐ lái le.",
        "vietnamese": "Mẹ vừa bước chân ra khỏi cửa là đứa bé liền òa khóc lên."
      }
    ]
  },
  {
    "id": "hsk3-g-60",
    "order": 60,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Nghĩa chuyển tiếp của Bổ ngữ xu hướng: Duy trì (下去 & 下来)",
    "titleZh": "趋向补语的引申用法：表示动作行为的持续：动词+下去/下来",
    "grammarType": "句子成分",
    "categoryType": "趋向补语2",
    "grammarDetail": "趋向补语2",
    "structure": "Động từ + 下去 (tiếp tục trong tương lai) | Động từ + 下来 (duy trì từ quá khứ đến nay)",
    "explanationVi": "• 坚持下去 / 学下去: Tiếp tục hành động hướng về tương lai ('làm tiếp tục đi').\n• 坚持下来 / 记录下来: Hành động đã duy trì thành công từ trước tới hiện tại ('đã giữ vững được').",
    "tips": "'下去' hướng tới tương lai; '下来' hướng về hiện tại từ quá khứ.",
    "examples": [
      {
        "chinese": "虽然学习汉语不容易，但是我一定会坚持下去。",
        "pinyin": "Suī rán xué xí hàn yǔ bù róng yì, dàn shì wǒ yī dìng huì jiān chí xià qù.",
        "vietnamese": "Tuy học tiếng Hán không hề dễ dàng, nhưng tôi nhất định sẽ kiên trì đến cùng."
      },
      {
        "chinese": "在老师的帮助下，我一定可以学下去。",
        "pinyin": "Zài lǎo shī de bāng zhù xià, wǒ yī dìng kě yǐ xué xià qù.",
        "vietnamese": "Dưới sự giúp đỡ tận tình của thầy cô, tôi nhất định có thể tiếp tục học tập tốt."
      },
      {
        "chinese": "在过去的一年里，我把每天练习汉字的习惯坚持下来了。",
        "pinyin": "Zài guò qù de yī nián lǐ, wǒ bǎ měi tiān liàn xí hàn zì de xí guàn jiān chí xià lái le.",
        "vietnamese": "Trong suốt một năm qua, tôi đã duy trì giữ vững được thói quen luyện viết chữ Hán mỗi ngày."
      },
      {
        "chinese": "这三天玩下来太累了，我得好好休息休息。",
        "pinyin": "Zhè sān tiān wán xià lái tài lèi le, wǒ dé hǎo hǎo xiū xī xiū xī.",
        "vietnamese": "Trải qua 3 ngày đi chơi vừa rồi mệt quá chừng, tôi phải nghỉ ngơi cho thật đã."
      }
    ]
  },
  {
    "id": "hsk3-g-61",
    "order": 61,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ khả năng cơ bản: 动词 + 得 / 不 + Bổ ngữ",
    "titleZh": "动词+得/不+动词/形容词",
    "grammarType": "句子成分",
    "categoryType": "可能补语1",
    "grammarDetail": "可能补语1",
    "structure": "Khẳng định: Động từ + 得 + Bổ ngữ | Phủ định: Động từ + 不 + Bổ ngữ | Nghi vấn: ...得...吗 / ...得...不...?",
    "explanationVi": "Biểu thị năng lực hoặc điều kiện chủ quan/khách quan có cho phép thực hiện được kết quả đó hay không:\n• 听得懂 / 听不懂 (nghe có hiểu được không)\n• 看得清楚 / 看不清楚 (nhìn rõ / không rõ).",
    "tips": "Dạng phủ định của bổ ngữ khả năng (V + 不 + C) dùng cực kỳ nhiều trong giao tiếp hàng ngày.",
    "examples": [
      {
        "chinese": "老师说的话你听得懂吗？",
        "pinyin": "Lǎo shī shuō de huà nǐ tīng dé dǒng ma?",
        "vietnamese": "Lời giảng của thầy giáo bạn có nghe hiểu được không?"
      },
      {
        "chinese": "黑板上的字太小，我看不清楚。",
        "pinyin": "Hēi bǎn shàng de zì tài xiǎo, wǒ kàn bù qīng chǔ.",
        "vietnamese": "Chữ viết trên bảng bé quá, tôi nhìn không rõ được."
      }
    ]
  },
  {
    "id": "hsk3-g-62",
    "order": 62,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ mức độ: Tính từ + 得很 (Rất... lắm / Hết sức...)",
    "titleZh": "形容词+得很",
    "grammarType": "句子成分",
    "categoryType": "程度补语1",
    "grammarDetail": "程度补语1",
    "structure": "Tính từ + 得很",
    "explanationVi": "Đứng sau tính từ để biểu thị mức độ cực kỳ cao mang tính khẩu ngữ sinh động (như 好得很 - tốt lắm; 凉快得很 - mát mẻ vô cùng).",
    "tips": "Tương đương với '非常 + Tính từ' nhưng đặt sau tính từ.",
    "examples": [
      {
        "chinese": "这里的环境好得很。",
        "pinyin": "Zhè lǐ de huán jìng hǎo dé hěn.",
        "vietnamese": "Môi trường sống ở nơi đây tốt lắm luôn."
      },
      {
        "chinese": "这儿从早到晚都有风，凉快得很。",
        "pinyin": "Zhèr cóng zǎo dào wǎn dōu yǒu fēng, liáng kuài dé hěn.",
        "vietnamese": "Ở chỗ này từ sáng tới tối lúc nào cũng có gió, mát mẻ vô cùng."
      }
    ]
  },
  {
    "id": "hsk3-g-63",
    "order": 63,
    "category": "complements_advanced",
    "categoryName": "Bổ ngữ nâng cao (Khả năng/Kết quả/Xu hướng)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ mức độ tột cùng: 极了 & 坏了 (Cực độ)",
    "titleZh": "形容词/动词+极了/坏了",
    "grammarType": "句子成分",
    "categoryType": "程度补语1",
    "grammarDetail": "程度补语1",
    "structure": "Tính từ / Động từ tâm lý + 极了 (cực kỳ tốt/vui) | Tính từ tiêu cực + 坏了 (đến mức hỏng cả người)",
    "explanationVi": "• 极了: Đạt đến đỉnh cao tột độ (高兴极了 - vui sướng tột cùng).\n• 坏了: Mức độ xấu hoặc mệt mỏi đạt tới đỉnh điểm (累坏了 - mệt lử; 饿坏了 - đói rã rời).",
    "tips": "Bổ ngữ '坏了' thường dùng cho các trạng thái kiệt sức hoặc khó chịu.",
    "examples": [
      {
        "chinese": "看见考试成绩的时候，我高兴极了。",
        "pinyin": "Kàn jiàn kǎo shì chéng jì de shí hòu, wǒ gāo xīng jí le.",
        "vietnamese": "Khi nhìn thấy bảng điểm bài thi, tôi sung sướng vô cùng."
      },
      {
        "chinese": "爬山回来，大家都累坏了。",
        "pinyin": "Pá shān huí lái, dà jiā dōu lèi huài le.",
        "vietnamese": "Leo núi trở về, mọi người ai nấy đều mệt đứt cả hơi."
      }
    ]
  },
  {
    "id": "hsk3-g-64",
    "order": 64,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Khoảng thời gian cách biệt kể từ khi sự việc kết thúc",
    "titleZh": "表示动作结束到某个时间点的间隔时间",
    "grammarType": "句子成分",
    "categoryType": "数量补语3",
    "grammarDetail": "数量补语3",
    "structure": "Sự việc / Mốc kết thúc + 已经 + Khoảng thời gian + 了",
    "explanationVi": "Biểu thị khoảng cách thời gian từ lúc một sự việc bắt đầu hoặc kết thúc cho tới thời điểm hiện tại (như 开学已经两个星期了 - khai giảng đã được 2 tuần rồi; 过去五年了 - đã trôi qua 5 năm rồi).",
    "tips": "Chữ '了' ở cuối câu mang ý nhấn mạnh thời gian đã tích lũy đến nay.",
    "examples": [
      {
        "chinese": "开学已经两个星期了。",
        "pinyin": "Kāi xué yǐ jīng liǎng gè xīng qī le.",
        "vietnamese": "Năm học mới đã khai giảng được 2 tuần nay rồi."
      },
      {
        "chinese": "这件事已经过去五年了。",
        "pinyin": "Zhè jiàn shì yǐ jīng guò qù wǔ nián le.",
        "vietnamese": "Chuyện đó đến nay đã trôi qua được 5 năm trời rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-65",
    "order": 65,
    "category": "adverbs_modalities",
    "categoryName": "Phó từ & Đại từ",
    "categoryIcon": "🔥",
    "titleVi": "Câu hỏi đặc biệt: “怎样 + Động từ” (Hỏi phương thức làm thế nào)",
    "titleZh": "“怎样+动词”的特指问句",
    "grammarType": "句子的类型",
    "categoryType": "疑问句",
    "grammarDetail": "疑问句",
    "structure": "怎样 + 才能 + Động từ? | Chủ ngữ + 是怎样 + Động từ + 的?",
    "explanationVi": "Dùng để hỏi về cách thức, phương pháp tiến hành một công việc nào đó (như 怎样才能学好汉语 - làm thế nào mới học giỏi tiếng Hán; 是怎样过新年的 - đón Tết như thế nào).",
    "tips": "Mang tính tìm tòi giải pháp, phương hướng hành động cụ thể.",
    "examples": [
      {
        "chinese": "怎样才能学好汉语呢？",
        "pinyin": "Zěn yàng cái néng xué hǎo hàn yǔ ne?",
        "vietnamese": "Làm thế nào mới có thể học giỏi tiếng Hán đây?"
      },
      {
        "chinese": "中国人是怎样过新年的？",
        "pinyin": "Zhōng guó rén shì zěn yàng guò xīn nián de?",
        "vietnamese": "Người Trung Quốc đón mừng Tết năm mới như thế nào?"
      }
    ]
  },
  {
    "id": "hsk3-g-66",
    "order": 66,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phản vấn nhấn mạnh sự thật hiển nhiên: 不是……吗？",
    "titleZh": "用反问句表示强调：不是……吗？",
    "grammarType": "句子的类型",
    "categoryType": "反问句1",
    "grammarDetail": "反问句1",
    "structure": "Chủ ngữ + 不是 + Vị ngữ / Sự thật + 吗？",
    "explanationVi": "Dùng hình thức câu hỏi ngược lại để khẳng định chắc nịch một sự thật mà người nghe vốn dĩ đã biết hoặc đáng lẽ phải biết (như 你不是写完作业了吗？ - chẳng phải bạn đã làm xong rồi sao?; 考试不是下周吗？).",
    "tips": "Người nói không cần câu trả lời mà nhằm nhắc nhở hoặc ngạc nhiên.",
    "examples": [
      {
        "chinese": "你不是写完作业了吗？",
        "pinyin": "Nǐ bù shì xiě wán zuò yè le ma?",
        "vietnamese": "Chẳng phải bạn đã làm xong bài tập về nhà rồi sao?"
      },
      {
        "chinese": "考试不是下个星期一吗？",
        "pinyin": "Kǎo shì bù shì xià gè xīng qī yī ma?",
        "vietnamese": "Kỳ thi chẳng phải là vào thứ Hai tuần sau đó sao?"
      }
    ]
  },
  {
    "id": "hsk3-g-67",
    "order": 67,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” đưa đối tượng vào vị trí / nơi chốn: 在 / 到 + Chỗ",
    "titleZh": "主语+把+宾语+动词+在/到+处所",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句1",
    "grammarDetail": "“把”字句1",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + 在 / 到 + Nơi chốn",
    "explanationVi": "Biểu thị việc xử lý, tác động lên tân ngữ khiến cho tân ngữ di chuyển đến hoặc lưu lại ở một địa điểm nào đó (như 把箱子放在这儿 - đặt vali ở đây; 把桌子搬到外边 - khiêng bàn ra ngoài).",
    "tips": "Động từ theo sau thường là 放, 搬, 送, 带, 寄.",
    "examples": [
      {
        "chinese": "你把箱子放在这儿吧。",
        "pinyin": "Nǐ bǎ xiāng zi fàng zài zhèr ba.",
        "vietnamese": "Bạn đem chiếc rương đặt ở đây đi."
      },
      {
        "chinese": "我们把桌子搬到教室外边了。",
        "pinyin": "Wǒ men bǎ zhuō zi bān dào jiào shì wài biān le.",
        "vietnamese": "Chúng tôi đã khiêng chiếc bàn chuyển ra bên ngoài phòng học rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-68",
    "order": 68,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” chuyển giao đồ vật cho đối tượng: 动词（+给）+ Người",
    "titleZh": "主语+把+宾语1+动词（+给）+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句1",
    "grammarDetail": "“把”字句1",
    "structure": "Chủ ngữ + 把 + Vật (Tân ngữ 1) + Động từ (+ 给) + Người nhận (Tân ngữ 2)",
    "explanationVi": "Biểu thị tác động làm chuyển giao quyền sở hữu hoặc vị trí của đồ vật cho một người khác (như 把礼物送给老师 - đem quà tặng thầy giáo; 把书借给我 - đem sách cho tôi mượn).",
    "tips": "Động từ thường dùng: 送, 借, 还, 交, 卖.",
    "examples": [
      {
        "chinese": "我们把礼物送给老师了。",
        "pinyin": "Wǒ men bǎ lǐ wù sòng gěi lǎo shī le.",
        "vietnamese": "Chúng tôi đã trao tặng món quà cho thầy giáo rồi."
      },
      {
        "chinese": "他把那本书借给我了。",
        "pinyin": "Tā bǎ nà běn shū jiè gěi wǒ le.",
        "vietnamese": "Anh ấy đã cho tôi mượn cuốn sách đó rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-69",
    "order": 69,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” kèm các loại Bổ ngữ (Kết quả, Xu hướng, Trạng thái)",
    "titleZh": "主语+把+宾语+动词+结果补语/趋向补语/状态补语",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句1",
    "grammarDetail": "“把”字句1",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ (好 / 完 / 进去 / 得干干净净)",
    "explanationVi": "Tác động lên sự vật khiến cho sự vật đạt tới một kết quả cụ thể, thay đổi xu hướng hoặc đạt đến một trạng thái nhất định (như 把晚饭准备好 - chuẩn bị xong cơm tối; 把桌子搬进去 - khiêng bàn vào trong; 洗得干干净净 - giặt sạch tinh tươm).",
    "tips": "Trong câu chữ 把, động từ không bao giờ đứng đơn độc trơ trọi một mình mà luôn phải có thành phần phụ phía sau.",
    "examples": [
      {
        "chinese": "我已经把晚饭准备好了。",
        "pinyin": "Wǒ yǐ jīng bǎ wǎn fàn zhǔn bèi hǎo le.",
        "vietnamese": "Tôi đã chuẩn bị xong xuôi bữa cơm tối rồi."
      },
      {
        "chinese": "咱们把这些桌子搬进去吧。",
        "pinyin": "Zán men bǎ zhè xiē zhuō zi bān jìn qù ba.",
        "vietnamese": "Chúng mình hãy khiêng mớ bàn này dời vào bên trong đi."
      },
      {
        "chinese": "妈妈把衣服洗得干干净净。",
        "pinyin": "Mā mā bǎ yī fú xǐ dé gàn gàn jìng jìng.",
        "vietnamese": "Mẹ đã giặt giũ đống quần áo sạch bong tinh tươm."
      }
    ]
  },
  {
    "id": "hsk3-g-70",
    "order": 70,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Câu bị động có nêu tác nhân gây ra: 主语 + 被 + Kẻ gây ra + Động từ",
    "titleZh": "主语+被+宾语+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "被动句1",
    "grammarDetail": "被动句1",
    "structure": "Chủ ngữ (vật bị tác động) + 被 + Tác nhân (người gây ra) + Động từ + Thành phần khác",
    "explanationVi": "Biểu thị chủ ngữ chịu sự tác động hoặc ảnh hưởng (thường là không mong muốn) từ một tác nhân cụ thể (như 词典被朋友借走了 - từ điển bị bạn mượn mất; 水果被谁吃了 - hoa quả bị ai ăn mất).",
    "tips": "Trong khẩu ngữ, '被' có thể được thay thế bằng '叫' hoặc '让'.",
    "examples": [
      {
        "chinese": "我的词典被朋友借走了。",
        "pinyin": "Wǒ de cí diǎn bèi péng yǒu jiè zǒu le.",
        "vietnamese": "Cuốn từ điển của tôi đã bị người bạn mượn mất rồi."
      },
      {
        "chinese": "冰箱里的水果被谁吃了？",
        "pinyin": "Bīng xiāng lǐ de shuǐ guǒ bèi shuí chī le?",
        "vietnamese": "Số hoa quả để trong tủ lạnh đã bị ai ăn mất rồi?"
      }
    ]
  },
  {
    "id": "hsk3-g-71",
    "order": 71,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Câu bị động 被",
    "categoryIcon": "⭐",
    "titleVi": "Câu bị động ẩn tác nhân: 主语 + 被 + Động từ + Thành phần khác",
    "titleZh": "主语+被+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "被动句1",
    "grammarDetail": "被动句1",
    "structure": "Chủ ngữ + 被 + Động từ + Thành phần khác (Bổ ngữ / 了)",
    "explanationVi": "Dùng khi không biết tác nhân gây ra là ai, hoặc không cần thiết/không muốn nhắc đến kẻ gây ra hành vi (như 作业被拿走了 - bài tập bị lấy đi mất rồi; 病人被送到医院了 - bệnh nhân đã được đưa vào viện).",
    "tips": "Tập trung hoàn toàn sự chú ý vào kết quả xử lý của chủ ngữ.",
    "examples": [
      {
        "chinese": "桌子上的作业被拿走了。",
        "pinyin": "Zhuō zi shàng de zuò yè bèi ná zǒu le.",
        "vietnamese": "Tập bài tập trên bàn đã bị cầm đi mất rồi."
      },
      {
        "chinese": "病人已经被送到医院了。",
        "pinyin": "Bìng rén yǐ jīng bèi sòng dào yī yuàn le.",
        "vietnamese": "Bệnh nhân đã được đưa chuyển tới bệnh viện kịp thời rồi."
      }
    ]
  },
  {
    "id": "hsk3-g-72",
    "order": 72,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Phương thức kèm theo của hành động: 动词 1 + 着 + 动词 2",
    "titleZh": "“着”表示动作的伴随：动词1+着+动词2",
    "grammarType": "句子的类型",
    "categoryType": "连动句2",
    "grammarDetail": "连动句2",
    "structure": "Chủ ngữ + Động từ 1 + 着 + Động từ 2 (+ Tân ngữ)",
    "explanationVi": "Động tác thứ nhất (mang '着') đóng vai trò làm trạng thái, tư thế hoặc phương thức đệm để thực hiện động tác thứ hai (như 笑着回答 - mỉm cười trả lời; 听着音乐做运动 - vừa nghe nhạc vừa tập thể thao).",
    "tips": "Động tác 1 là trạng thái kèm theo, động tác 2 là động tác chính.",
    "examples": [
      {
        "chinese": "老师总是笑着回答大家的问题。",
        "pinyin": "Lǎo shī zǒng shì xiào zhe huí dá dà jiā de wèn tí.",
        "vietnamese": "Thầy giáo lúc nào cũng mỉm cười tươi tắn giải đáp các câu hỏi của mọi người."
      },
      {
        "chinese": "我喜欢听着音乐做运动。",
        "pinyin": "Wǒ xǐ huān tīng zhe yīn lè zuò yùn dòng.",
        "vietnamese": "Tôi thích vừa lắng nghe âm nhạc vừa rèn luyện thể thao."
      }
    ]
  },
  {
    "id": "hsk3-g-73",
    "order": 73,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "So sánh tăng bậc hơn nữa: A 比 B + 更 / 还 + Tính từ",
    "titleZh": "A比B+更/还+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句2",
    "grammarDetail": "比较句2",
    "structure": "A + 比 + B + 更 / 还 + Tính từ",
    "explanationVi": "Dùng khi bản thân B vốn dĩ đã có tính chất đó ở mức độ cao rồi, nhưng A thậm chí còn vượt trội hơn B một bậc nữa (như 比我更好 - thậm chí còn giỏi hơn cả tôi; 今天比昨天还冷 - hôm nay còn rét hơn cả hôm qua).",
    "tips": "Tuyệt đối không dùng '很' hay '非常' trong câu so sánh này.",
    "examples": [
      {
        "chinese": "她的汉语比我更好。",
        "pinyin": "Tā de hàn yǔ bǐ wǒ gèng hǎo.",
        "vietnamese": "Tiếng Hán của cô ấy thậm chí còn giỏi hơn cả tôi."
      },
      {
        "chinese": "今天比昨天还冷。",
        "pinyin": "Jīn tiān bǐ zuó tiān hái lěng.",
        "vietnamese": "Hôm nay trời còn buốt lạnh hơn cả ngày hôm qua."
      }
    ]
  },
  {
    "id": "hsk3-g-74",
    "order": 74,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "Câu so sánh bằng: A 跟 B 一样 (A giống như B)",
    "titleZh": "A跟B一样",
    "grammarType": "句子的类型",
    "categoryType": "比较句2",
    "grammarDetail": "比较句2",
    "structure": "A + 跟 / 和 + B + 一样 | Phủ định: A 跟 / 和 + B + 不一样",
    "explanationVi": "So sánh khẳng định hai đối tượng hoàn toàn tương đồng, giống hệt nhau về bản chất hoặc chủng loại (như 爱好跟他一样 - sở thích giống anh ấy; 买的新手机跟我的一样 - điện thoại mua giống hệt tôi).",
    "tips": "Dạng phủ định chỉ cần thêm '不' trước '一样' (A 跟 B 不一样).",
    "examples": [
      {
        "chinese": "我的爱好跟他一样。",
        "pinyin": "Wǒ de ài hǎo gēn tā yī yàng.",
        "vietnamese": "Sở thích của tôi hoàn toàn giống như anh ấy."
      },
      {
        "chinese": "他买的新手机跟我的一样。",
        "pinyin": "Tā mǎi de xīn shǒu jī gēn wǒ de yī yàng.",
        "vietnamese": "Chiếc điện thoại mới anh ấy mua giống y hệt như của tôi."
      }
    ]
  },
  {
    "id": "hsk3-g-75",
    "order": 75,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "So sánh bằng về một tính chất cụ thể: A 跟 B 一样 + Tính từ",
    "titleZh": "A跟B一样+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句2",
    "grammarDetail": "比较句2",
    "structure": "A + 跟 / 和 + B + 一样 + Tính từ",
    "explanationVi": "So sánh hai đối tượng ngang bằng nhau về một đặc điểm, tính chất cụ thể nào đó (như 跟坐公交车一样方便 - tiện lợi y như đi xe buýt; 跟那个房间一样大 - rộng rãi y chang phòng kia).",
    "tips": "Nếu phủ định thường chuyển sang dùng 'A 没有 B (那么) + Tính từ'.",
    "examples": [
      {
        "chinese": "坐地铁跟坐公交车一样方便。",
        "pinyin": "Zuò dì tiě gēn zuò gōng jiāo chē yī yàng fāng biàn.",
        "vietnamese": "Đi tàu điện ngầm cũng thuận tiện y như đi xe buýt vậy."
      },
      {
        "chinese": "这个房间跟那个房间一样大。",
        "pinyin": "Zhè gè fáng jiān gēn nà gè fáng jiān yī yàng dà.",
        "vietnamese": "Căn phòng này cũng rộng rãi y chang như căn phòng đằng kia."
      }
    ]
  },
  {
    "id": "hsk3-g-76",
    "order": 76,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "So sánh phủ định không vượt trội: A 不比 B + Tính từ",
    "titleZh": "A不比B+形容词",
    "grammarType": "句子的类型",
    "categoryType": "比较句2",
    "grammarDetail": "比较句2",
    "structure": "A + 不比 + B + Tính từ",
    "explanationVi": "Dùng để phản bác lại nhận định rằng A vượt trội hơn B, khẳng định A chỉ ngang bằng hoặc thậm chí kém hơn B ('A chẳng... hơn B là bao') (như 不比那张好看 - chẳng đẹp hơn bức kia đâu; 不比他高 - không cao hơn anh ấy).",
    "tips": "Mang sắc thái tranh biện, phản bác ý kiến trước đó.",
    "examples": [
      {
        "chinese": "这张画不比那张好看。",
        "pinyin": "Zhè zhāng huà bù bǐ nà zhāng hǎo kàn.",
        "vietnamese": "Bức tranh này cũng chẳng đẹp hơn bức tranh kia đâu."
      },
      {
        "chinese": "我的汉语水平不比他高。",
        "pinyin": "Wǒ de hàn yǔ shuǐ píng bù bǐ tā gāo.",
        "vietnamese": "Trình độ tiếng Hán của tôi cũng chẳng cao hơn anh ấy là bao."
      }
    ]
  },
  {
    "id": "hsk3-g-77",
    "order": 77,
    "category": "comparisons_advanced",
    "categoryName": "Câu so sánh nâng cao (跟...一样, 越...越)",
    "categoryIcon": "⚖️",
    "titleVi": "So sánh chênh lệch thời gian & số lượng hành vi",
    "titleZh": "A比B+多/少/早/晚+动词+数量短语",
    "grammarType": "句子的类型",
    "categoryType": "比较句2",
    "grammarDetail": "比较句2",
    "structure": "A + 比 + B + 多 / 少 / 早 / 晚 + Động từ + Cụm số lượng",
    "explanationVi": "Biểu thị sự chênh lệch cụ thể về thời gian sớm/muộn hoặc số lượng nhiều/ít trong việc thực hiện một hành động (như 早到十分钟 - đến sớm hơn 10 phút; 多吃了三个饺子 - ăn nhiều hơn 3 cái sủi cảo).",
    "tips": "Trật tự từ bắt buộc: 多/少/早/晚 đứng TRƯỚC động từ, cụm số lượng đứng SAU động từ.",
    "examples": [
      {
        "chinese": "我比他早到十分钟。",
        "pinyin": "Wǒ bǐ tā zǎo dào shí fēn zhōng.",
        "vietnamese": "Tôi đến sớm hơn anh ấy mười phút."
      },
      {
        "chinese": "哥哥比弟弟多吃了三个饺子。",
        "pinyin": "Gē gē bǐ dì dì duō chī le sān gè jiǎo zi.",
        "vietnamese": "Anh trai đã ăn nhiều hơn em trai ba cái sủi cảo."
      }
    ]
  },
  {
    "id": "hsk3-g-78",
    "order": 78,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Câu tồn hiện chỉ sự xuất hiện: 处所 + 动词 + 趋向/结果 + 了 + Người/Vật",
    "titleZh": "表示出现：处所词+动词+趋向补语/结果补语+动态助词（了）+数量短语+人/物",
    "grammarType": "句子的类型",
    "categoryType": "存现句3",
    "grammarDetail": "存现句3",
    "structure": "Từ chỉ nơi chốn + Động từ + Bổ ngữ (来 / 进 / 过) + 了 + Số lượng + Người / Vật xuất hiện",
    "explanationVi": "Miêu tả tại một không gian địa điểm bất ngờ xuất hiện thêm một người hay sự vật mới (như 开过来一辆出租车 - chạy tới một chiếc taxi; 搬来了一家人 - dọn đến một gia đình; 走进来几个学生 - bước vào mấy học sinh).",
    "tips": "Người hoặc vật xuất hiện luôn là danh từ không xác định (có số từ như 一辆, 一家, 几个).",
    "examples": [
      {
        "chinese": "前边开过来一辆出租车。",
        "pinyin": "Qián biān kāi guò lái yī liàng chū zū chē.",
        "vietnamese": "Phía trước đang có một chiếc xe taxi chạy tới."
      },
      {
        "chinese": "楼上搬来了一家人。",
        "pinyin": "Lóu shàng bān lái le yī jiā rén.",
        "vietnamese": "Ở tầng trên vừa mới dọn đến một hộ gia đình."
      },
      {
        "chinese": "校门外走进来几个学生。",
        "pinyin": "Xiào mén wài zǒu jìn lái jǐ gè xué shēng.",
        "vietnamese": "Từ ngoài cổng trường vừa có mấy bạn học sinh bước vào."
      }
    ]
  },
  {
    "id": "hsk3-g-79",
    "order": 79,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Câu tồn hiện chỉ sự biến mất: 处所 + 动词 + 结果 + 了 + Người/Vật",
    "titleZh": "表示消失：处所词+动词+结果补语+动态助词（了）+数量短语+人/物",
    "grammarType": "句子的类型",
    "categoryType": "存现句3",
    "grammarDetail": "存现句3",
    "structure": "Từ chỉ nơi chốn + Động từ + 走 / 丢 / 掉 + 了 + Số lượng + Người / Vật biến mất",
    "explanationVi": "Miêu tả sự vật hoặc động vật rời khỏi hoặc biến mất khỏi một địa điểm nhất định (như 树上飞走了三只小鸟 - trên cây bay đi mất 3 chú chim; 跑丢了一只羊 - chạy lạc mất một con cừu).",
    "tips": "Tương tự như câu chỉ xuất hiện, nhưng biểu thị sự mất mát, giảm đi.",
    "examples": [
      {
        "chinese": "树上飞走了三只小鸟。",
        "pinyin": "Shù shàng fēi zǒu le sān zhǐ xiǎo niǎo.",
        "vietnamese": "Trên cành cây đã bay vút đi mất ba chú chim non."
      },
      {
        "chinese": "他家里跑丢了一只羊。",
        "pinyin": "Tā jiā lǐ pǎo diū le yī zhǐ yáng.",
        "vietnamese": "Nhà anh ấy bị chạy lạc mất một con cừu."
      }
    ]
  },
  {
    "id": "hsk3-g-80",
    "order": 80,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Câu tồn hiện",
    "categoryIcon": "🌟",
    "titleVi": "Câu chữ “是……的” khẳng định quan điểm, thái độ đánh giá",
    "titleZh": "强调说话人的看法或态度",
    "grammarType": "句子的类型",
    "categoryType": "“是……的”句2",
    "grammarDetail": "“是……的”句2",
    "structure": "Chủ ngữ + 是 + [Cụm tính từ / Đánh giá nhận định] + 的",
    "explanationVi": "Dùng cấu trúc '是...的' để nhấn mạnh sự khẳng định chắc nịch về quan điểm, nhận định hoặc thái độ của người nói đối với một việc (như 其实是很简单的 - thực ra là rất đơn giản; 是很有帮助的 - là rất có ích).",
    "tips": "Làm tăng tính thuyết phục và khẳng định cho lời nói.",
    "examples": [
      {
        "chinese": "这个问题其实是很简单的。",
        "pinyin": "Zhè gè wèn tí qí shí shì hěn jiǎn dān de.",
        "vietnamese": "Vấn đề này trên thực tế là hết sức đơn giản."
      },
      {
        "chinese": "多写多练对学习汉字是很有帮助的。",
        "pinyin": "Duō xiě duō liàn duì xué xí hàn zì shì hěn yǒu bāng zhù de.",
        "vietnamese": "Viết nhiều luyện nhiều là việc mang lại sự trợ giúp rất lớn cho việc học chữ Hán."
      }
    ]
  },
  {
    "id": "hsk3-g-81",
    "order": 81,
    "category": "word_building",
    "categoryName": "Cấu tạo từ & Thành phần câu",
    "categoryIcon": "🏗️",
    "titleVi": "Câu trùng động (Lặp lại động từ khi có tân ngữ & bổ ngữ)",
    "titleZh": "主语+动词+宾语+动词+补语",
    "grammarType": "句子的类型",
    "categoryType": "重动句",
    "grammarDetail": "重动句",
    "structure": "Chủ ngữ + Động từ + Tân ngữ + Động từ + 得 / 了 + Bổ ngữ",
    "explanationVi": "Khi động từ vừa có tân ngữ vừa phải mang bổ ngữ thời lượng hoặc bổ ngữ trạng thái, bắt buộc phải lặp lại động từ một lần nữa trước bổ ngữ (như 打篮球打了一个下午 - chơi bóng rổ chơi suốt buổi chiều; 上课上得怎么样 - học học thấy thế nào).",
    "tips": "Quy tắc: Động từ lặp lại lần 2 mới là động từ gắn kết với Bổ ngữ.",
    "examples": [
      {
        "chinese": "我们昨天打篮球打了一个下午。",
        "pinyin": "Wǒ men zuó tiān dǎ lán qiú dǎ le yī gè xià wǔ.",
        "vietnamese": "Hôm qua chúng tôi đã chơi bóng rổ suốt cả một buổi chiều."
      },
      {
        "chinese": "你今天上课上得怎么样？",
        "pinyin": "Nǐ jīn tiān shàng kè shàng dé zěn me yàng?",
        "vietnamese": "Hôm nay bạn học tiết học trên lớp thấy thế nào?"
      }
    ]
  },
  {
    "id": "hsk3-g-82",
    "order": 82,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tiếp nối trình tự: 先……，再 / 然后…… (Trước hết... rồi...)",
    "titleZh": "先……，再/然后……",
    "grammarType": "句子的类型",
    "categoryType": "承接复句",
    "grammarDetail": "承接复句",
    "structure": "Chủ ngữ + 先 + Hành động 1, + 再 / 然后 + Hành động 2",
    "explanationVi": "Sắp xếp hai hay nhiều hành động theo đúng trình tự thời gian trước sau (như 先买门票，再来找我 - mua vé trước rồi quay lại tìm tôi; 先吃饭，然后休息 - ăn cơm trước rồi sau đó nghỉ).",
    "tips": "'再' nhấn mạnh làm xong 1 mới làm 2; '然后' chỉ việc kế tiếp theo sau.",
    "examples": [
      {
        "chinese": "你先去买门票，再来这里找我。",
        "pinyin": "Nǐ xiān qù mǎi mén piào, zài lái zhè lǐ zhǎo wǒ.",
        "vietnamese": "Bạn đi mua vé vào cửa trước đi, rồi hãy quay lại đây tìm tôi."
      },
      {
        "chinese": "我想先吃饭，然后回房间休息。",
        "pinyin": "Wǒ xiǎng xiān chī fàn, rán hòu huí fáng jiān xiū xī.",
        "vietnamese": "Tôi muốn ăn cơm trước, rồi sau đó trở về phòng nghỉ ngơi."
      }
    ]
  },
  {
    "id": "hsk3-g-83",
    "order": 83,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức liệt kê lựa chọn: 或者……，或者…… (Hoặc là... hoặc là...)",
    "titleZh": "或者……，或者……",
    "grammarType": "句子的类型",
    "categoryType": "选择复句",
    "grammarDetail": "选择复句",
    "structure": "Chủ ngữ + 或者 + Phương án 1, + 或者 + Phương án 2",
    "explanationVi": "Dùng trong câu khẳng định trần thuật để biểu thị hai khả năng hoặc hai hành động có thể luân phiên xảy ra (như 或者踢足球，或者打篮球; 或者回家过节，或者出门旅游).",
    "tips": "Chỉ dùng trong câu trần thuật biểu thị thói quen hoặc kế hoạch.",
    "examples": [
      {
        "chinese": "每周末，我们或者踢足球，或者打篮球。",
        "pinyin": "Měi zhōu mò, wǒ men huò zhě tī zú qiú, huò zhě dǎ lán qiú.",
        "vietnamese": "Mỗi dịp cuối tuần, chúng tôi hoặc là đi đá bóng, hoặc là đi chơi bóng rổ."
      },
      {
        "chinese": "春节的时候，人们或者回家过节，或者出门旅游。",
        "pinyin": "Chūn jié de shí hòu, rén men huò zhě huí jiā guò jié, huò zhě chū mén lǚ yóu.",
        "vietnamese": "Vào dịp Tết, người ta hoặc là về quê ăn Tết, hoặc là ra ngoài đi du lịch."
      }
    ]
  },
  {
    "id": "hsk3-g-84",
    "order": 84,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức luân phiên thay đổi trạng thái: 一会儿……，一会儿……",
    "titleZh": "一会儿……，一会儿……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "Chủ ngữ + 一会儿 + Trạng thái 1, + 一会儿 + Trạng thái 2",
    "explanationVi": "Biểu thị hai hành động hoặc hai trạng thái thay đổi luân phiên nhau rất nhanh chóng, thất thường (như 一会儿进来，一会儿出去 - lúc thì vào lúc lại ra; 一会儿冷，一会儿热 - lúc thì lạnh lúc lại nóng).",
    "tips": "Diễn tả sự bận rộn, không ổn định hoặc thất thường của thời tiết/tính khí.",
    "examples": [
      {
        "chinese": "他一会儿进来，一会儿出去，忙得很。",
        "pinyin": "Tā yī huì ér jìn lái, yī huì ér chū qù, máng dé hěn.",
        "vietnamese": "Anh ấy khi thì bước vào, lúc lại chạy ra, bận túi bụi cả lên."
      },
      {
        "chinese": "最近的天气一会儿冷，一会儿热。",
        "pinyin": "Zuì jìn de tiān qì yī huì ér lěng, yī huì ér rè.",
        "vietnamese": "Thời tiết dạo này lúc thì rét run, lúc lại nóng nực thất thường."
      }
    ]
  },
  {
    "id": "hsk3-g-85",
    "order": 85,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức song hành hai phẩm chất: 又……，又…… (Vừa... lại vừa...)",
    "titleZh": "又……，又……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "Chủ ngữ + 又 + Tính từ / Động từ 1, + 又 + Tính từ / Động từ 2",
    "explanationVi": "Cùng lúc mang hai đặc điểm, tính chất tồn tại song song (như 又便宜又好看 - vừa rẻ lại vừa đẹp; 又高又漂亮 - vừa cao ráo lại vừa xinh đẹp).",
    "tips": "Hai tính từ được nối phải cùng mang sắc thái tích cực hoặc cùng tiêu cực.",
    "examples": [
      {
        "chinese": "这件衣服又便宜又好看。",
        "pinyin": "Zhè jiàn yī fú yòu biàn yí yòu hǎo kàn.",
        "vietnamese": "Bộ đồ này vừa rẻ tiền lại vừa đẹp mắt."
      },
      {
        "chinese": "那个又高又漂亮的女孩儿是谁？",
        "pinyin": "Nà gè yòu gāo yòu piāo liàng de nǚ hái ér shì shuí?",
        "vietnamese": "Cô gái vừa cao ráo lại vừa xinh xắn đằng kia là ai vậy?"
      }
    ]
  },
  {
    "id": "hsk3-g-86",
    "order": 86,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức đồng thời hai hành vi: 一边……，一边…… (Vừa làm A vừa làm B)",
    "titleZh": "一边……，一边……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "Chủ ngữ + 一边 + Động từ 1, + 一边 + Động từ 2",
    "explanationVi": "Hai hành động độc lập được chủ thể thực hiện cùng một lúc trong sự phối hợp nhịp nhàng (như 一边工作一边学中文; 一边跑步一边听音乐).",
    "tips": "Thường áp dụng cho một hành động chính kết hợp một hành động thư giãn/thói quen.",
    "examples": [
      {
        "chinese": "他一边工作，一边学习中文。",
        "pinyin": "Tā yī biān gōng zuò, yī biān xué xí zhōng wén.",
        "vietnamese": "Anh ấy vừa làm việc lại vừa chăm chỉ học tiếng Trung."
      },
      {
        "chinese": "我喜欢一边跑步，一边听音乐。",
        "pinyin": "Wǒ xǐ huān yī biān pǎo bù, yī biān tīng yīn lè.",
        "vietnamese": "Tôi thích vừa chạy bộ vừa thưởng thức âm nhạc."
      }
    ]
  },
  {
    "id": "hsk3-g-87",
    "order": 87,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến: 不但……，而且…… (Không những... mà còn...)",
    "titleZh": "不但……，而且……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "不但 + Vế 1, + 而且 + (也/还) + Vế 2",
    "explanationVi": "Vế sau tăng thêm một bậc về mức độ, phạm vi hoặc ý nghĩa so với vế trước (như 不但我学，而且弟弟也学; 不但会打，而且打得很好).",
    "tips": "Nếu hai vế cùng một chủ ngữ, chủ ngữ đứng trước '不但'; nếu hai vế khác chủ ngữ, '不但' đứng trước chủ ngữ 1.",
    "examples": [
      {
        "chinese": "不但我学习中文，而且我的弟弟也学习中文。",
        "pinyin": "Bù dàn wǒ xué xí zhōng wén, ér qiě wǒ de dì dì yě xué xí zhōng wén.",
        "vietnamese": "Không những bản thân tôi học tiếng Trung, mà ngay cả em trai tôi cũng học tiếng Trung."
      },
      {
        "chinese": "我哥哥不但会打篮球，而且打得很好。",
        "pinyin": "Wǒ gē gē bù dàn huì dǎ lán qiú, ér qiě dǎ dé hěn hǎo.",
        "vietnamese": "Anh trai tôi không những biết chơi bóng rổ, mà còn chơi rất điêu luyện."
      }
    ]
  },
  {
    "id": "hsk3-g-88",
    "order": 88,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chuyển ngoặt: 虽然……，可是…… (Tuy... thế nhưng...)",
    "titleZh": "虽然……，可是……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "虽然 + Vế nhượng bộ, + 可是 / 但是 + Vế chuyển ngoặt",
    "explanationVi": "Thừa nhận sự thật ở vế đầu nhưng chuyển sang một ý nghĩa đối lập, tích cực ở vế sau (như 虽然不大，可是很干净 - tuy không lớn nhưng rất sạch sẽ; 虽然很冷，可是坚持锻炼).",
    "tips": "'可是' khẩu ngữ và nhẹ nhàng hơn so với '但是'.",
    "examples": [
      {
        "chinese": "房间虽然不大，可是很干净。",
        "pinyin": "Fáng jiān suī rán bù dà, kě shì hěn gàn jìng.",
        "vietnamese": "Căn phòng tuy không lớn, nhưng lại rất sạch sẽ ngăn nắp."
      },
      {
        "chinese": "虽然天气很冷，可是他还是坚持每天锻炼。",
        "pinyin": "Suī rán tiān qì hěn lěng, kě shì tā hái shì jiān chí měi tiān duàn liàn.",
        "vietnamese": "Mặc dù thời tiết rất giá buốt, thế nhưng anh ấy vẫn kiên trì rèn luyện thân thể mỗi ngày."
      }
    ]
  },
  {
    "id": "hsk3-g-89",
    "order": 89,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết điều kiện: 如果……，就…… (Nếu... thì...)",
    "titleZh": "如果……，就……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "如果 + Vế giả định, + (Chủ ngữ) + 就 + Vế kết quả",
    "explanationVi": "Nêu ra một điều kiện giả định ở vế đầu, nếu điều kiện đó xảy ra thì sẽ dẫn tới hành động hoặc kết quả ở vế sau (như 如果不下雨，我们就去爬山; 如果需要帮忙，就打电话).",
    "tips": "'如果' có thể đứng trước hoặc đứng sau chủ ngữ của vế đầu.",
    "examples": [
      {
        "chinese": "如果明天不下雨，我们就去爬山。",
        "pinyin": "Rú guǒ míng tiān bù xià yǔ, wǒ men jiù qù pá shān.",
        "vietnamese": "Nếu ngày mai trời không mưa, chúng mình sẽ rủ nhau đi leo núi."
      },
      {
        "chinese": "如果你需要帮忙，就给我打电话。",
        "pinyin": "Rú guǒ nǐ xū yào bāng máng, jiù gěi wǒ dǎ diàn huà.",
        "vietnamese": "Nếu bạn cần sự giúp đỡ, hãy cứ gọi điện thoại cho tôi nhé."
      }
    ]
  },
  {
    "id": "hsk3-g-90",
    "order": 90,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện khẩu ngữ: ……的话，就…… (Nếu mà... thì...)",
    "titleZh": "……的话，就……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "Vế điều kiện + 的话，(Chủ ngữ) + 就 + Vế kết quả",
    "explanationVi": "Rất phổ biến trong khẩu ngữ hàng ngày để nêu điều kiện giả định một cách tự nhiên, ngắn gọn (như 有时间的话，就一起去吧; 满意的话，咱们就买).",
    "tips": "Thường lược bỏ chữ '如果' mà chỉ cần giữ lại '...的话'.",
    "examples": [
      {
        "chinese": "你有时间的话，就一起去吧。",
        "pinyin": "Nǐ yǒu shí jiān de huà, jiù yī qǐ qù ba.",
        "vietnamese": "Nếu bạn có thời gian rảnh rỗi thì cùng đi chung cho vui nhé."
      },
      {
        "chinese": "你觉得满意的话，咱们就买。",
        "pinyin": "Nǐ jué dé mǎn yì de huà, zán men jiù mǎi.",
        "vietnamese": "Nếu bạn cảm thấy ưng ý vừa lòng thì chúng mình mua luôn."
      }
    ]
  },
  {
    "id": "hsk3-g-91",
    "order": 91,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện duy nhất: 只有……，才…… (Chỉ có... mới...)",
    "titleZh": "只有……，才……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "只有 + Điều kiện duy nhất, + (Chủ ngữ) + 才 + Đạt kết quả",
    "explanationVi": "Khẳng định điều kiện ở vế trước là điều kiện DUY NHẤT VÀ BẮT BUỘC để có thể đạt được kết quả ở vế sau (như 只有努力，才能得到好成绩; 只有多听多说，水平才能提高).",
    "tips": "Nhớ công thức: '只有' luôn đi đôi với '才'.",
    "examples": [
      {
        "chinese": "只有努力学习，才能得到好成绩。",
        "pinyin": "Zhǐ yǒu nǔ lì xué xí, cái néng dé dào hǎo chéng jì.",
        "vietnamese": "Chỉ có nỗ lực học hành chăm chỉ thì mới có thể đạt được thành tích tốt."
      },
      {
        "chinese": "只有多听、多说、多看，你的中文水平才能提高。",
        "pinyin": "Zhǐ yǒu duō tīng, duō shuō, duō kàn, nǐ de zhōng wén shuǐ píng cái néng tí gāo.",
        "vietnamese": "Chỉ có nghe nhiều, nói nhiều và đọc nhiều thì trình độ tiếng Trung của bạn mới có thể tiến bộ."
      }
    ]
  },
  {
    "id": "hsk3-g-92",
    "order": 92,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện đầy đủ: 只要……，就…… (Chỉ cần... là...)",
    "titleZh": "只要……，就……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "只要 + Điều kiện cần có, + (Chủ ngữ) + 就 + ắt có kết quả",
    "explanationVi": "Khẳng định chỉ cần đáp ứng được điều kiện ở vế trước là đủ để dẫn đến kết quả ở vế sau một cách dễ dàng, chắc chắn (như 只要坚持，就一定能学好; 只要你同意，就这么决定).",
    "tips": "Phân biệt: '只要...就...' (chỉ cần là đủ); '只有...才...' (chỉ có điều kiện duy nhất này mới được).",
    "examples": [
      {
        "chinese": "只要你坚持学习，就一定能学好。",
        "pinyin": "Zhǐ yào nǐ jiān chí xué xí, jiù yī dìng néng xué hǎo.",
        "vietnamese": "Chỉ cần bạn kiên trì theo đuổi việc học, nhất định bạn sẽ học rất giỏi."
      },
      {
        "chinese": "只要你同意，我们就这么决定了。",
        "pinyin": "Zhǐ yào nǐ tóng yì, wǒ men jiù zhè me jué dìng le.",
        "vietnamese": "Chỉ cần bạn gật đầu đồng ý là chúng ta cứ quyết định như vậy nhé."
      }
    ]
  },
  {
    "id": "hsk3-g-93",
    "order": 93,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chỉ mục đích: 为了……，…… (Để... nên...)",
    "titleZh": "为了……，……",
    "grammarType": "句子的类型",
    "categoryType": "目的复句",
    "grammarDetail": "目的复句",
    "structure": "为了 + Mục đích lớn lao, + Chủ ngữ + Thực hiện hành động",
    "explanationVi": "Đặt mục đích cần hướng tới lên đầu câu, vế sau nêu rõ những nỗ lực hoặc phương tiện hành động để hiện thực hóa mục đích đó (như 为了考上大学，每天努力学习; 为了早点到家，打算坐飞机).",
    "tips": "Mục đích luôn đứng ở đầu câu, trước chủ ngữ chính.",
    "examples": [
      {
        "chinese": "为了考上大学，她每天努力学习。",
        "pinyin": "Wèi le kǎo shàng dà xué, tā měi tiān nǔ lì xué xí.",
        "vietnamese": "Để thi đỗ vào trường đại học, ngày nào cô ấy cũng ra sức dùi mài kinh sử."
      },
      {
        "chinese": "为了早点儿到家，我打算坐飞机。",
        "pinyin": "Wèi le zǎodiǎnr dào jiā, wǒ dǎ suàn zuò fēi jī.",
        "vietnamese": "Để có thể về tới nhà sớm hơn một chút, tôi dự định đi bằng máy bay."
      }
    ]
  },
  {
    "id": "hsk3-g-94",
    "order": 94,
    "category": "compound_sentences",
    "categoryName": "Câu phức & Liên từ nối",
    "categoryIcon": "🔗",
    "titleVi": "Câu rút gọn liên kết nhanh: ……了……（就）…… (Xong là... liền)",
    "titleZh": "……了……（就）……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "Chủ ngữ + Động từ 1 + 了 + (Tân ngữ 1) + (就) + Động từ 2",
    "explanationVi": "Rút ngắn cấu trúc câu để biểu thị hành động thứ hai nối tiếp ngay sau khi hoàn tất hành động thứ nhất (như 吃了药就好多了 - uống thuốc xong là đỡ ngay; 下了课就去图书馆 - tan học là đến thư viện).",
    "tips": "Tương tự như '先...再...' nhưng súc tích và dứt khoát hơn.",
    "examples": [
      {
        "chinese": "他吃了药就好多了。",
        "pinyin": "Tā chī le yào jiù hǎo duō le.",
        "vietnamese": "Anh ấy uống thuốc xong là cảm thấy đỡ hơn rất nhiều rồi."
      },
      {
        "chinese": "我打算下了课就去图书馆。",
        "pinyin": "Wǒ dǎ suàn xià le kè jiù qù tú shū guǎn.",
        "vietnamese": "Tôi định tan học xong một cái là đến thư viện ngay."
      }
    ]
  },
  {
    "id": "hsk3-g-95",
    "order": 95,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Ước lượng bằng phó từ “大概”: Đại khái, khoảng chừng",
    "titleZh": "概数表达法2：用“大概”表示概数",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "大概 + Khoảng thời gian / Số lượng tiền bạc / Số người",
    "explanationVi": "Dùng '大概' để ước tính con số hoặc thời gian một cách phỏng đoán, không cần số liệu chính xác tuyệt đối (như 大概多长时间 - khoảng bao lâu; 大概五十块 - khoảng chừng 50 tệ).",
    "tips": "Có thể đứng trước hoặc sau chủ ngữ.",
    "examples": [
      {
        "chinese": "你大概多长时间能到？",
        "pinyin": "Nǐ dà gài duō zhǎng shí jiān néng dào?",
        "vietnamese": "Bạn đại khái khoảng bao lâu nữa thì có thể đến nơi?"
      },
      {
        "chinese": "这些水果大概五十块钱。",
        "pinyin": "Zhè xiē shuǐ guǒ dà gài wǔ shí kuài qián.",
        "vietnamese": "Chỗ hoa quả này đại khái khoảng chừng năm mươi tệ."
      }
    ]
  },
  {
    "id": "hsk3-g-96",
    "order": 96,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Ước lượng bằng hai số liền kề: 七八, 十五六 (Khoảng 7-8, 15-16)",
    "titleZh": "概数表达法2：相邻数词连用表示概数",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ A + Số từ B (liền kề tăng dần) + Lượng từ + Danh từ",
    "explanationVi": "Đặt hai số tự nhiên liền kề nhau để biểu thị một khoảng số lượng ước chừng (như 七八个学生 - khoảng 7 đến 8 học sinh; 十五六分钟 - khoảng 15 đến 16 phút; 三四天 - khoảng 3-4 ngày).",
    "tips": "Hai số ghép lại phải là số liền kề theo thứ tự nhỏ đến lớn (như 二三, 七八, 八九; không được nhảy số như 三五).",
    "examples": [
      {
        "chinese": "教室里来了七八个学生。",
        "pinyin": "Jiào shì lǐ lái le qī bā gè xué shēng.",
        "vietnamese": "Trong phòng học đã có khoảng bảy tám bạn học sinh bước tới."
      },
      {
        "chinese": "从我家到学校，走路需要十五六分钟。",
        "pinyin": "Cóng wǒ jiā dào xué xiào, zǒu lù xū yào shí wǔ liù fēn zhōng.",
        "vietnamese": "Từ nhà tôi đến trường học, đi bộ mất khoảng mười lăm mười sáu phút."
      }
    ]
  }
];
