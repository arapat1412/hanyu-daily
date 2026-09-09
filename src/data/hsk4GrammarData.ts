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

export const HSK4_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "ba_bei_sentences",
    "name": "Câu chữ 把 & Bị động (叫/让/被)",
    "icon": "⭐"
  },
  {
    "id": "compound_sentences",
    "name": "Hệ thống câu phức liên từ",
    "icon": "🔗"
  },
  {
    "id": "comparisons",
    "name": "Câu so sánh (不如, 相比)",
    "icon": "⚖️"
  },
  {
    "id": "complements",
    "name": "Bổ ngữ khả năng & Mức độ (死了, 不了)",
    "icon": "🎯"
  },
  {
    "id": "special_patterns",
    "name": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "icon": "🌟"
  },
  {
    "id": "rhetorical_pivotal",
    "name": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "icon": "❓"
  },
  {
    "id": "adverbs",
    "name": "Phó từ thời gian, mức độ, ngữ khí",
    "icon": "🔥"
  },
  {
    "id": "prepositions",
    "name": "Giới từ căn cứ, thời gian, đối tượng",
    "icon": "🛡️"
  },
  {
    "id": "pronouns_measures",
    "name": "Đại từ, Lượng từ & Số từ",
    "icon": "🔢"
  },
  {
    "id": "phrases_idioms",
    "name": "Cụm 4 chữ & Cấu trúc số lượng",
    "icon": "🏗️"
  }
];

export const HSK4_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk4-g-01",
    "order": 1,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Động từ năng nguyện: 敢 (Gǎn - Dám làm gì)",
    "titleZh": "敢",
    "grammarType": "词类",
    "categoryType": "能愿动词",
    "grammarDetail": "能愿动词",
    "structure": "Chủ ngữ + (不) 敢 + Động từ | 敢不敢...?",
    "explanationVi": "Biểu thị sự dũng cảm, có đủ can đảm hoặc gan dạ để tiến hành một hành vi nào đó (tương đương với từ 'dám' trong tiếng Việt). Dạng câu hỏi chính phản dùng '敢不敢'.",
    "tips": "Phủ định là '不敢' (không dám). Chú ý phân biệt với '能' (có thể/có khả năng) và '会' (biết làm qua học tập).",
    "examples": [
      {
        "chinese": "我刚学会开车，不敢开得很快。",
        "pinyin": "Wǒ gāng xué huì kāi chē, bù gǎn kāi dé hěn kuài.",
        "vietnamese": "Tôi vừa mới học lái xe, không dám lái quá nhanh."
      },
      {
        "chinese": "你敢不敢跟我比一比，谁的力气大？",
        "pinyin": "Nǐ gǎn bù gǎn gēn wǒ bǐ yī bǐ, shuí de lì qì dà?",
        "vietnamese": "Bạn có dám thi đấu với tôi xem sức ai lớn hơn không?"
      }
    ]
  },
  {
    "id": "hsk4-g-02",
    "order": 2,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Đại từ chỉ thị & Phân phối: 各, 各位, 各种, 任何, 此",
    "titleZh": "各、各位、各种、任何、此",
    "grammarType": "词类",
    "categoryType": "指示代词",
    "grammarDetail": "指示代词",
    "structure": "各 + Lượng từ / Danh từ (từng/mỗi) | 任何 + Danh từ (bất kỳ) | 此 + Danh từ (này/đây)",
    "explanationVi": "• 各 / 各位 / 各种: Biểu thị từng cá thể riêng biệt trong một tổng thể (các vị, các loại, mỗi nơi).\n• 任何 (rènhé): Bất kỳ người hoặc sự vật nào, mang tính phổ quát không giới hạn.\n• 此 (cǐ): Văn viết chỉ 'này', 'đây' (tương đương với 这, ví dụ: 此处, 此时, 由此).",
    "tips": "'此' là từ mang đậm sắc thái văn viết (thư diện ngữ).",
    "examples": [
      {
        "chinese": "对于这个问题，同学们各有各的看法。",
        "pinyin": "Duì yú zhè gè wèn tí, tóng xué men gè yǒu gè de kàn fǎ.",
        "vietnamese": "Đối với vấn đề này, các bạn học sinh mỗi người đều có quan điểm riêng."
      },
      {
        "chinese": "节日期间，各地举行了丰富的庆祝活动。",
        "pinyin": "Jié rì qī jiān, gè dì jǔ xíng le fēng fù de qìng zhù huó dòng.",
        "vietnamese": "Trong dịp lễ, khắp các nơi đều tổ chức các hoạt động chào mừng phong phú."
      },
      {
        "chinese": "各位同学，请大家安静一下。",
        "pinyin": "Gè wèi tóng xué, qǐng dà jiā ān jìng yī xià.",
        "vietnamese": "Thưa các bạn học sinh, xin mọi người hãy giữ trật tự một chút."
      },
      {
        "chinese": "欢迎各位报名参加这次运动会。",
        "pinyin": "Huān yíng gè wèi bào míng cān jiā zhè cì yùn dòng huì.",
        "vietnamese": "Hoan nghênh các vị đăng ký tham gia đại hội thể thao lần này."
      },
      {
        "chinese": "南方各种花都开了，可是北方还比较冷。",
        "pinyin": "Nán fāng gè zhǒng huā dōu kāi le, kě shì běi fāng hái bǐ jiào lěng.",
        "vietnamese": "Ở miền nam các loài hoa đều đã nở rộ, thế nhưng ở miền bắc vẫn còn khá lạnh."
      },
      {
        "chinese": "商场、超市总是通过各种方式吸引顾客。",
        "pinyin": "Shāng chǎng, chāo shì zǒng shì tōng guò gè zhǒng fāng shì xī yǐn gù kè.",
        "vietnamese": "Trung tâm thương mại và siêu thị luôn thu hút khách hàng thông qua nhiều phương thức khác nhau."
      },
      {
        "chinese": "你遇到任何困难都可以联系我。",
        "pinyin": "Nǐ yù dào rèn hé kùn nán dōu kě yǐ lián xì wǒ.",
        "vietnamese": "Bạn gặp bất kỳ khó khăn nào cũng đều có thể liên hệ với tôi."
      },
      {
        "chinese": "在中国，几乎任何一家商店都可以使用手机支付。",
        "pinyin": "Zài zhōng guó, jǐ hū rèn hé yī jiā shāng diàn dōu kě yǐ shǐ yòng shǒu jī zhī fù.",
        "vietnamese": "Ở Trung Quốc, hầu như bất kỳ cửa hàng nào cũng đều có thể thanh toán bằng điện thoại."
      },
      {
        "chinese": "此处不能扔垃圾，请扔到垃圾桶里。",
        "pinyin": "Cǐ chù bù néng rēng lā jī, qǐng rēng dào lā jī tǒng lǐ.",
        "vietnamese": "此处不能扔垃圾，请扔到垃圾桶里。"
      },
      {
        "chinese": "对于此事，你的父母有什么意见？",
        "pinyin": "Duì yú cǐ shì, nǐ de fù mǔ yǒu shén me yì jiàn?",
        "vietnamese": "对于此事，你的父母有什么意见？"
      }
    ]
  },
  {
    "id": "hsk4-g-03",
    "order": 3,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Lượng từ danh từ chuyên dụng: 打, 袋, 棵, 台, 幅",
    "titleZh": "专用名量词：打、袋、棵、台、幅",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 打 / 袋 / 棵 / 台 / 幅 + Danh từ",
    "explanationVi": "• 打 (dá): Tá (12 cái: trứng gà, khăn mặt).\n• 袋 (dài): Túi, bao (gạo, sữa tươi, rác).\n• 棵 (kē): Cây cối thực vật (cây to, cây cỏ).\n• 台 (tái): Máy móc, thiết bị điện tử (máy tính, máy móc, ti vi).\n• 幅 (fú): Bức tranh, cuộn vải nghệ thuật (tranh thủy mặc, tác phẩm vẽ).",
    "tips": "Phân biệt '棵' (cây cối thực vật) với '颗' (vật tròn nhỏ như ngôi sao, hạt ngọc, răng, tim).",
    "examples": [
      {
        "chinese": "昨晚老张买了一打啤酒。",
        "pinyin": "Zuó wǎn lǎo zhāng mǎi le yī dǎ pí jiǔ.",
        "vietnamese": "昨晚老张买了一打啤酒。"
      },
      {
        "chinese": "我买了一打鸡蛋，准备做蛋糕。",
        "pinyin": "Wǒ mǎi le yī dǎ jī dàn, zhǔn bèi zuò dàn gāo.",
        "vietnamese": "我买了一打鸡蛋，准备做蛋糕。"
      },
      {
        "chinese": "我这儿有一袋方便面，你要不要吃？",
        "pinyin": "Wǒ zhèr yǒu yī dài fāng biàn miàn, nǐ yào bù yào chī?",
        "vietnamese": "我这儿有一袋方便面，你要不要吃？"
      },
      {
        "chinese": "妈妈从市场买回来好几袋水果。",
        "pinyin": "Mā mā cóng shì chǎng mǎi huí lái hǎo jǐ dài shuǐ guǒ.",
        "vietnamese": "妈妈从市场买回来好几袋水果。"
      },
      {
        "chinese": "我家院子里种着两棵苹果树。",
        "pinyin": "Wǒ jiā yuàn zi lǐ zhǒng zhe liǎng kē píng guǒ shù.",
        "vietnamese": "我家院子里种着两棵苹果树。"
      },
      {
        "chinese": "小猫爬上了路边的一棵大树。",
        "pinyin": "Xiǎo māo pá shàng le lù biān de yī kē dà shù.",
        "vietnamese": "小猫爬上了路边的一棵大树。"
      },
      {
        "chinese": "这台空调太旧了，没办法修。",
        "pinyin": "Zhè tái kōng diào tài jiù le, méi bàn fǎ xiū.",
        "vietnamese": "这台空调太旧了，没办法修。"
      },
      {
        "chinese": "搬家时，我把家里那台冰箱卖了。",
        "pinyin": "Bān jiā shí, wǒ bǎ jiā lǐ nà tái bīng xiāng mài le.",
        "vietnamese": "搬家时，我把家里那台冰箱卖了。"
      },
      {
        "chinese": "您能介绍一下这幅画吗？",
        "pinyin": "Nín néng jiè shào yī xià zhè fú huà ma?",
        "vietnamese": "您能介绍一下这幅画吗？"
      },
      {
        "chinese": "张老师，我想请您给我写一幅字。",
        "pinyin": "Zhāng lǎo shī, wǒ xiǎng qǐng nín gěi wǒ xiě yī fú zì.",
        "vietnamese": "张老师，我想请您给我写一幅字。"
      }
    ]
  },
  {
    "id": "hsk4-g-04",
    "order": 4,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Lượng từ mượn từ danh từ: 脸, 手, 盒, 屋子, 桌子",
    "titleZh": "借用名量词：脸、手、盒、屋子、桌子",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "满 / 一 + 脸 / 手 / 盒 / 屋子 / 桌子 (+ Danh từ)",
    "explanationVi": "Mượn các danh từ chỉ bộ phận cơ thể hoặc không gian để làm lượng từ gợi hình sống động:\n• 满脸 (đầy mặt mồ hôi, nét mặt tươi rói)\n• 一手 (một tay chữ đẹp, tay nghề nấu ăn)\n• 一盒 (một hộp bút chì, dâu tây)\n• 满屋子 (đầy cả gian phòng)\n• 一桌子 (đầy một bàn tiệc thịnh soạn).",
    "tips": "Tăng cường tính biểu cảm và miêu tả cụ thể cho câu văn.",
    "examples": [
      {
        "chinese": "她拿着礼物，一脸兴奋地跑了进来。",
        "pinyin": "Tā ná zhe lǐ wù, yī liǎn xīng fèn dì pǎo le jìn lái.",
        "vietnamese": "她拿着礼物，一脸兴奋地跑了进来。"
      },
      {
        "chinese": "小明见到了自己喜欢的作家，满脸高兴。",
        "pinyin": "Xiǎo míng jiàn dào le zì jǐ xǐ huān de zuò jiā, mǎn liǎn gāo xīng.",
        "vietnamese": "小明见到了自己喜欢的作家，满脸高兴。"
      },
      {
        "chinese": "我不知道从哪儿弄了一手油。",
        "pinyin": "Wǒ bù zhī dào cóng nǎr nòng le yī shǒu yóu.",
        "vietnamese": "我不知道从哪儿弄了一手油。"
      },
      {
        "chinese": "他从小练习书法，写得一手好字。",
        "pinyin": "Tā cóng xiǎo liàn xí shū fǎ, xiě dé yī shǒu hǎo zì.",
        "vietnamese": "他从小练习书法，写得一手好字。"
      },
      {
        "chinese": "我从国外买回来一盒巧克力。",
        "pinyin": "Wǒ cóng guó wài mǎi huí lái yī hé qiǎo kè lì.",
        "vietnamese": "我从国外买回来一盒巧克力。"
      },
      {
        "chinese": "老师让我们准备一盒画笔。",
        "pinyin": "Lǎo shī ràng wǒ men zhǔn bèi yī hé huà bǐ.",
        "vietnamese": "老师让我们准备一盒画笔。"
      },
      {
        "chinese": "我非常喜欢读书，家里有一屋子的书。",
        "pinyin": "Wǒ fēi cháng xǐ huān dú shū, jiā lǐ yǒu yī wū zi de shū.",
        "vietnamese": "我非常喜欢读书，家里有一屋子的书。"
      },
      {
        "chinese": "我有一屋子的衣服，你随便选。",
        "pinyin": "Wǒ yǒu yī wū zi de yī fú, nǐ suí biàn xuǎn.",
        "vietnamese": "我有一屋子的衣服，你随便选。"
      },
      {
        "chinese": "听到这个消息，一桌子的人都很开心。",
        "pinyin": "Tīng dào zhè gè xiāo xī, yī zhuō zi de rén dōu hěn kāi xīn.",
        "vietnamese": "听到这个消息，一桌子的人都很开心。"
      },
      {
        "chinese": "我每次回家，父母都会准备一桌子饭菜。",
        "pinyin": "Wǒ měi cì huí jiā, fù mǔ dōu huì zhǔn bèi yī zhuō zi fàn cài.",
        "vietnamese": "我每次回家，父母都会准备一桌子饭菜。"
      }
    ]
  },
  {
    "id": "hsk4-g-05",
    "order": 5,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Động lượng từ biểu thị tính chất: 场, 顿, 趟",
    "titleZh": "场、顿、趟",
    "grammarType": "词类",
    "categoryType": "动量词",
    "grammarDetail": "动量词",
    "structure": "Động từ + 一 + 场 / 顿 / 趟",
    "explanationVi": "• 场 (cháng/chǎng): Trận, cơn (mưa, bóng đá, ốm, kịch nghệ).\n• 顿 (dùn): Bữa, chập, trận (bữa ăn, trận phê bình, mắng mỏ).\n• 趟 (tàng): Chuyến, lượt đi và về (chạy một chuyến đến siêu thị/đại sứ quán).",
    "tips": "'趟' nhấn mạnh hành trình đi đến một nơi nào đó rồi quay về.",
    "examples": [
      {
        "chinese": "大卫参加了一场文化活动，体验了美食和音乐。",
        "pinyin": "Dà wèi cān jiā le yī chǎng wén huà huó dòng, tǐ yàn le měi shí hé yīn lè.",
        "vietnamese": "大卫参加了一场文化活动，体验了美食和音乐。"
      },
      {
        "chinese": "同学们都想在中国观看一场京剧演出。",
        "pinyin": "Tóng xué men dōu xiǎng zài zhōng guó guān kàn yī chǎng jīng jù yǎn chū.",
        "vietnamese": "同学们都想在中国观看一场京剧演出。"
      },
      {
        "chinese": "周末咱们去饭馆好好吃一顿，怎么样？",
        "pinyin": "Zhōu mò zán men qù fàn guǎn hǎo hǎo chī yī dùn, zěn me yàng?",
        "vietnamese": "周末咱们去饭馆好好吃一顿，怎么样？"
      },
      {
        "chinese": "中秋节我们一起吃了一顿饭。",
        "pinyin": "Zhōng qiū jié wǒ men yī qǐ chī le yī dùn fàn.",
        "vietnamese": "中秋节我们一起吃了一顿饭。"
      },
      {
        "chinese": "我假期打算回一趟家，看看父母。",
        "pinyin": "Wǒ jiǎ qī dǎ suàn huí yī tàng jiā, kàn kàn fù mǔ.",
        "vietnamese": "我假期打算回一趟家，看看父母。"
      },
      {
        "chinese": "我刚才去了一趟办公室，没看见王老师。",
        "pinyin": "Wǒ gāng cái qù le yī tàng bàn gōng shì, méi kàn jiàn wáng lǎo shī.",
        "vietnamese": "我刚才去了一趟办公室，没看见王老师。"
      }
    ]
  },
  {
    "id": "hsk4-g-06",
    "order": 6,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ mức độ phong phú: 十分, 更加, 稍微, 尤其, 多么",
    "titleZh": "十分、更加、稍、稍微、尤其、多么",
    "grammarType": "词类",
    "categoryType": "程度副词",
    "grammarDetail": "程度副词",
    "structure": "十分 / 更加 / 稍微 / 尤其 + Tính từ / Động từ tâm lý | 多么 + Tính từ + 啊！",
    "explanationVi": "• 十分 (shífēn): Vô cùng, hết sức (mức độ 10/10, trang trọng hơn 很).\n• 更加 (gèngjiā): Càng thêm, ngày một hơn (so sánh tăng tiến mạnh).\n• 稍微 (shāowēi): Hơi hơi, một chút xíu.\n• 尤其 (yóuqí): Đặc biệt là, nhất là (nổi bật trong các đối tượng).\n• 多么 (duōme): Biết bao, dường nào (trong câu cảm thán).",
    "tips": "'稍微' thường đi kèm với '一点儿' hoặc '一些' ở phía sau tính từ.",
    "examples": [
      {
        "chinese": "她十分激动地对我们表示感谢。",
        "pinyin": "Tā shí fēn jī dòng dì duì wǒ men biǎo shì gǎn xiè.",
        "vietnamese": "她十分激动地对我们表示感谢。"
      },
      {
        "chinese": "那位导游对游客十分热情。",
        "pinyin": "Nà wèi dǎo yóu duì yóu kè shí fēn rè qíng.",
        "vietnamese": "那位导游对游客十分热情。"
      },
      {
        "chinese": "随着互联网的发展，网上购物变得更加方便了。",
        "pinyin": "Suí zhe hù lián wǎng de fā zhǎn, wǎng shàng gòu wù biàn dé gèng jiā fāng biàn le.",
        "vietnamese": "随着互联网的发展，网上购物变得更加方便了。"
      },
      {
        "chinese": "读完这本书，他对中国历史更加感兴趣了。",
        "pinyin": "Dú wán zhè běn shū, tā duì zhōng guó lì shǐ gèng jiā gǎn xīng qù le.",
        "vietnamese": "读完这本书，他对中国历史更加感兴趣了。"
      },
      {
        "chinese": "请您在这儿稍等一下，王经理马上就到。",
        "pinyin": "Qǐng nín zài zhèr shāo děng yī xià, wáng jīng lǐ mǎ shàng jiù dào.",
        "vietnamese": "请您在这儿稍等一下，王经理马上就到。"
      },
      {
        "chinese": "对于这个词，两本词典的解释稍有不同。",
        "pinyin": "Duì yú zhè gè cí, liǎng běn cí diǎn de jiě shì shāo yǒu bù tóng.",
        "vietnamese": "对于这个词，两本词典的解释稍有不同。"
      },
      {
        "chinese": "如果裙子的颜色稍微浅一点儿，那就更好了。",
        "pinyin": "Rú guǒ qún zi de yán sè shāo wēi qiǎn yìdiǎnr, nà jiù gèng hǎo le.",
        "vietnamese": "如果裙子的颜色稍微浅一点儿，那就更好了。"
      },
      {
        "chinese": "你能不能把字写得稍微大一些？",
        "pinyin": "Nǐ néng bù néng bǎ zì xiě dé shāo wēi dà yī xiē?",
        "vietnamese": "你能不能把字写得稍微大一些？"
      },
      {
        "chinese": "人与人之间，尤其是父母和孩子之间，相互理解是很重要的。",
        "pinyin": "Rén yǔ rén zhī jiān, yóu qí shì fù mǔ hé hái zi zhī jiān, xiāng hù lǐ jiě shì hěn zhòng yào de.",
        "vietnamese": "人与人之间，尤其是父母和孩子之间，相互理解是很重要的。"
      },
      {
        "chinese": "刚开始，我对这里的生活很不适应，尤其不习惯吃中国菜。",
        "pinyin": "Gāng kāi shǐ, wǒ duì zhè lǐ de shēng huó hěn bù shì yīng, yóu qí bù xí guàn chī zhōng guó cài.",
        "vietnamese": "刚开始，我对这里的生活很不适应，尤其不习惯吃中国菜。"
      },
      {
        "chinese": "你听，她唱得多么好听啊！",
        "pinyin": "Nǐ tīng, tā chàng dé duō me hǎo tīng a!",
        "vietnamese": "你听，她唱得多么好听啊！"
      },
      {
        "chinese": "成为母亲以后，我才明白教育孩子有多么不容易。",
        "pinyin": "Chéng wèi mǔ qīn yǐ hòu, wǒ cái míng bái jiào yù hái zi yǒu duō me bù róng yì.",
        "vietnamese": "成为母亲以后，我才明白教育孩子有多么不容易。"
      }
    ]
  },
  {
    "id": "hsk4-g-07",
    "order": 7,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phạm vi: 共, 全, 光, 仅, 仅仅, 至少",
    "titleZh": "共、全、光、仅、仅仅、至少",
    "grammarType": "词类",
    "categoryType": "范围副词",
    "grammarDetail": "范围副词",
    "structure": "共 / 全 / 光 / 仅 / 至少 + Số lượng / Động từ",
    "explanationVi": "• 共: Tổng cộng (viết tắt của 一共).\n• 全: Toàn thể, toàn bộ (全校, 全家).\n• 光: Chỉ, mỗi (khẩu ngữ mang sắc thái phàn nàn: 光顾着玩儿).\n• 仅 / 仅仅: Vẻn vẹn, chỉ có (trang trọng hơn 只).\n• 至少: Ít nhất, tối thiểu.",
    "tips": "'光' trong khẩu ngữ tương đương với '只'.",
    "examples": [
      {
        "chinese": "上一年大学，学费和生活费共需多少钱？",
        "pinyin": "Shàng yī nián dà xué, xué fèi hé shēng huó fèi gòng xū duō shǎo qián?",
        "vietnamese": "上一年大学，学费和生活费共需多少钱？"
      },
      {
        "chinese": "中国人习惯一家人共吃一桌菜。",
        "pinyin": "Zhōng guó rén xí guàn yī jiā rén gòng chī yī zhuō cài.",
        "vietnamese": "中国人习惯一家人共吃一桌菜。"
      },
      {
        "chinese": "昨天学习的生词和语法我已经全记住了。",
        "pinyin": "Zuó tiān xué xí de shēng cí hé yǔ fǎ wǒ yǐ jīng quán jì zhù le.",
        "vietnamese": "昨天学习的生词和语法我已经全记住了。"
      },
      {
        "chinese": "全班同学都报名参加了这次的运动会。",
        "pinyin": "Quán bān tóng xué dōu bào míng cān jiā le zhè cì de yùn dòng huì.",
        "vietnamese": "全班同学都报名参加了这次的运动会。"
      },
      {
        "chinese": "光这一间教室，他就打扫了一整天。",
        "pinyin": "Guāng zhè yī jiān jiào shì, tā jiù dǎ sǎo le yī zhěng tiān.",
        "vietnamese": "光这一间教室，他就打扫了一整天。"
      },
      {
        "chinese": "你不能光练口语，不练汉字，这样你的中文水平很难提高。",
        "pinyin": "Nǐ bù néng guāng liàn kǒu yǔ, bù liàn hàn zì, zhè yàng nǐ de zhōng wén shuǐ píng hěn nán tí gāo.",
        "vietnamese": "你不能光练口语，不练汉字，这样你的中文水平很难提高。"
      },
      {
        "chinese": "这个公园平时不开，仅在周末开放。",
        "pinyin": "Zhè gè gōng yuán píng shí bù kāi, jǐn zài zhōu mò kāi fàng.",
        "vietnamese": "这个公园平时不开，仅在周末开放。"
      },
      {
        "chinese": "他仅用一年多的时间就学完了高中所有的课程。",
        "pinyin": "Tā jǐn yòng yī nián duō de shí jiān jiù xué wán le gāo zhōng suǒ yǒu de kè chéng.",
        "vietnamese": "他仅用一年多的时间就学完了高中所有的课程。"
      },
      {
        "chinese": "她仅仅去过一次，就深深地爱上了那里。",
        "pinyin": "Tā jǐn jǐn qù guò yī cì, jiù shēn shēn dì ài shàng le nà lǐ.",
        "vietnamese": "她仅仅去过一次，就深深地爱上了那里。"
      },
      {
        "chinese": "你想学好中文，仅仅有想法是不够的，必须努力学习。",
        "pinyin": "Nǐ xiǎng xué hǎo zhōng wén, jǐn jǐn yǒu xiǎng fǎ shì bù gòu de, bì xū nǔ lì xué xí.",
        "vietnamese": "你想学好中文，仅仅有想法是不够的，必须努力学习。"
      },
      {
        "chinese": "你们两个人一起去，遇到问题至少能商量一下。",
        "pinyin": "Nǐ men liǎng gè rén yī qǐ qù, yù dào wèn tí zhì shǎo néng shāng liàng yī xià.",
        "vietnamese": "你们两个人一起去，遇到问题至少能商量一下。"
      },
      {
        "chinese": "那里的景点很多，都参观完至少要三天的时间。",
        "pinyin": "Nà lǐ de jǐng diǎn hěn duō, dōu cān guān wán zhì shǎo yào sān tiān de shí jiān.",
        "vietnamese": "那里的景点很多，都参观完至少要三天的时间。"
      }
    ]
  },
  {
    "id": "hsk4-g-08",
    "order": 8,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ thời gian trung cấp: 按时, 从来, 赶紧, 赶快, 已, 忽然, 将, 本来",
    "titleZh": "按时、从来、赶紧、赶快、已、忽然、将、将要、从、本来",
    "grammarType": "词类",
    "categoryType": "时间副词",
    "grammarDetail": "时间副词",
    "structure": "Chủ ngữ + Phó từ thời gian + Động từ",
    "explanationVi": "• 按时: Đúng giờ, đúng hẹn.\n• 从来: Từ trước tới nay (thường đi với phủ định: 从来不 / 从来没).\n• 赶紧 / 赶快: Mau chóng, khẩn trương.\n• 已: Đã (viết tắt trang trọng của 已经).\n• 忽然: Đột nhiên, bất thình lình.\n• 将 / 将要: Sẽ, sắp sửa (văn viết).\n• 本来: Vốn dĩ, ban đầu.",
    "tips": "Phân biệt '本来' (vốn dĩ lúc đầu là vậy) với '原来' (hóa ra là vậy sau khi vỡ lẽ).",
    "examples": [
      {
        "chinese": "时间很紧张，但我们必须按时完成任务。",
        "pinyin": "Shí jiān hěn jǐn zhāng, dàn wǒ men bì xū àn shí wán chéng rèn wù.",
        "vietnamese": "时间很紧张，但我们必须按时完成任务。"
      },
      {
        "chinese": "医生让我回家按时吃药，多喝热水。",
        "pinyin": "Yī shēng ràng wǒ huí jiā àn shí chī yào, duō hē rè shuǐ.",
        "vietnamese": "医生让我回家按时吃药，多喝热水。"
      },
      {
        "chinese": "我从来没有离开过家乡，父母不放心我一个人出国留学。",
        "pinyin": "Wǒ cóng lái méi yǒu lí kāi guò jiā xiāng, fù mǔ bù fàng xīn wǒ yī gè rén chū guó liú xué.",
        "vietnamese": "我从来没有离开过家乡，父母不放心我一个人出国留学。"
      },
      {
        "chinese": "我常常吃饺子，可是从来不知道饺子是怎么做的。",
        "pinyin": "Wǒ cháng cháng chī jiǎo zi, kě shì cóng lái bù zhī dào jiǎo zi shì zěn me zuò de.",
        "vietnamese": "我常常吃饺子，可是从来不知道饺子是怎么做的。"
      },
      {
        "chinese": "服务员见到我们，赶紧跑过来，热情地说“欢迎”。",
        "pinyin": "Fú wù yuán jiàn dào wǒ men, gǎn jǐn pǎo guò lái, rè qíng dì shuō \"huān yíng\" .",
        "vietnamese": "服务员见到我们，赶紧跑过来，热情地说“欢迎”。"
      },
      {
        "chinese": "这儿的风景太漂亮了，我得赶紧拍几张照片。",
        "pinyin": "Zhèr de fēng jǐng tài piāo liàng le, wǒ dé gǎn jǐn pāi jǐ zhāng zhào piàn.",
        "vietnamese": "这儿的风景太漂亮了，我得赶紧拍几张照片。"
      },
      {
        "chinese": "咱们赶快往前走，大家都在前面等着呢。",
        "pinyin": "Zán men gǎn kuài wǎng qián zǒu, dà jiā dōu zài qián miàn děng zhe ne.",
        "vietnamese": "咱们赶快往前走，大家都在前面等着呢。"
      },
      {
        "chinese": "你现在赶快叫一辆出租车，马上出发。",
        "pinyin": "Nǐ xiàn zài gǎn kuài jiào yī liàng chū zū chē, mǎ shàng chū fā.",
        "vietnamese": "你现在赶快叫一辆出租车，马上出发。"
      },
      {
        "chinese": "到今年十月，公司的收入已超过去年。",
        "pinyin": "Dào jīn nián shí yuè, gōng sī de shōu rù yǐ chāo guò qù nián.",
        "vietnamese": "到今年十月，公司的收入已超过去年。"
      },
      {
        "chinese": "他的父亲已有五十多岁，两个姐姐也都已结婚了。",
        "pinyin": "Tā de fù qīn yǐ yǒu wǔ shí duō suì, liǎng gè jiě jiě yě dōu yǐ jié hūn le.",
        "vietnamese": "他的父亲已有五十多岁，两个姐姐也都已结婚了。"
      },
      {
        "chinese": "看着儿子努力学习的样子，我忽然觉得他长大了。",
        "pinyin": "Kàn zhe ér zi nǔ lì xué xí de yàng zi, wǒ hū rán jué dé tā zhǎng dà le.",
        "vietnamese": "看着儿子努力学习的样子，我忽然觉得他长大了。"
      },
      {
        "chinese": "忽然，我听到一个声音说“小伙子，等一等”。",
        "pinyin": "Hū rán, wǒ tīng dào yī gè shēng yīn shuō \"xiǎo huǒ zi, děng yī děng\" .",
        "vietnamese": "忽然，我听到一个声音说“小伙子，等一等”。"
      },
      {
        "chinese": "比赛一结束，他就将自己获奖的消息告诉了父母。",
        "pinyin": "Bǐ sài yī jié shù, tā jiù jiāng zì jǐ huò jiǎng de xiāo xī gào sù le fù mǔ.",
        "vietnamese": "比赛一结束，他就将自己获奖的消息告诉了父母。"
      },
      {
        "chinese": "如果孩子学到自己感兴趣的知识，他的能力将得到更好的发展。",
        "pinyin": "Rú guǒ hái zi xué dào zì jǐ gǎn xīng qù de zhī shí, tā de néng lì jiāng dé dào gèng hǎo de fā zhǎn.",
        "vietnamese": "如果孩子学到自己感兴趣的知识，他的能力将得到更好的发展。"
      },
      {
        "chinese": "根据计划，公司下周将要推出新产品。",
        "pinyin": "Gēn jù jì huà, gōng sī xià zhōu jiāng yào tuī chū xīn chǎn pǐn.",
        "vietnamese": "根据计划，公司下周将要推出新产品。"
      },
      {
        "chinese": "学校最近将要安排我们到南方进行调查研究。",
        "pinyin": "Xué xiào zuì jìn jiāng yào ān pái wǒ men dào nán fāng jìn xíng diào chá yán jiū.",
        "vietnamese": "学校最近将要安排我们到南方进行调查研究。"
      },
      {
        "chinese": "我从没有听说过这个消息。",
        "pinyin": "Wǒ cóng méi yǒu tīng shuō guò zhè gè xiāo xī.",
        "vietnamese": "我从没有听说过这个消息。"
      },
      {
        "chinese": "父母总是鼓励我，从不批评我。",
        "pinyin": "Fù mǔ zǒng shì gǔ lì wǒ, cóng bù pī píng wǒ.",
        "vietnamese": "父母总是鼓励我，从不批评我。"
      },
      {
        "chinese": "我本来计划学习一年中文就回国工作，现在我想继续学下去。",
        "pinyin": "Wǒ běn lái jì huà xué xí yī nián zhōng wén jiù huí guó gōng zuò, xiàn zài wǒ xiǎng jì xù xué xià qù.",
        "vietnamese": "我本来计划学习一年中文就回国工作，现在我想继续学下去。"
      },
      {
        "chinese": "我本来以为父母会反对我留在中国，没想到他们竟然这么支持。",
        "pinyin": "Wǒ běn lái yǐ wèi fù mǔ huì fǎn duì wǒ liú zài zhōng guó, méi xiǎng dào tā men jìng rán zhè me zhī chí.",
        "vietnamese": "我本来以为父母会反对我留在中国，没想到他们竟然这么支持。"
      }
    ]
  },
  {
    "id": "hsk4-g-09",
    "order": 9,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ tần suất: 重新, 往往, 偶尔, 再次, 老",
    "titleZh": "重新、往往、偶尔、再次、老",
    "grammarType": "词类",
    "categoryType": "频率副词",
    "grammarDetail": "频率副词",
    "structure": "Chủ ngữ + 重新 / 往往 / 偶尔 / 再次 / 老 + Động từ",
    "explanationVi": "• 重新 (chóngxīn): Làm lại từ đầu một việc gì đó.\n• 往往 (wǎngwǎng): Thường hay (quy luật thường xảy ra trong điều kiện nhất định).\n• 偶尔 (ǒu'ěr): Thỉnh thoảng, hiếm khi (tần suất thấp).\n• 再次: Một lần nữa (trang trọng).\n• 老: Cứ luôn, hoài (khẩu ngữ, sắc thái không bằng lòng: 老是忘带钥匙).",
    "tips": "Phân biệt '往往' (chỉ quy luật trong quá khứ/hiện tại) với '经常' (có thể dùng cho tương lai và câu phủ định).",
    "examples": [
      {
        "chinese": "我们需要重新安排会议时间。",
        "pinyin": "Wǒ men xū yào zhòng xīn ān pái huì yì shí jiān.",
        "vietnamese": "我们需要重新安排会议时间。"
      },
      {
        "chinese": "这个问题，您能不能重新考虑一下？",
        "pinyin": "Zhè gè wèn tí, nín néng bù néng zhòng xīn kǎo lǜ yī xià?",
        "vietnamese": "这个问题，您能不能重新考虑一下？"
      },
      {
        "chinese": "其实，一些看起来很小的事情往往会影响人的一生。",
        "pinyin": "Qí shí, yī xiē kàn qǐ lái hěn xiǎo de shì qíng wǎng wǎng huì yǐng xiǎng rén de yī shēng.",
        "vietnamese": "其实，一些看起来很小的事情往往会影响人的一生。"
      },
      {
        "chinese": "这两个词意思差不多，如果不知道它们的区别，往往容易用错。",
        "pinyin": "Zhè liǎng gè cí yì sī chà bù duō, rú guǒ bù zhī dào tā men de qū bié, wǎng wǎng róng yì yòng cuò.",
        "vietnamese": "这两个词意思差不多，如果不知道它们的区别，往往容易用错。"
      },
      {
        "chinese": "他平时工作很忙，回家以后看看书、上上网，偶尔运动一下，就睡觉了。",
        "pinyin": "Tā píng shí gōng zuò hěn máng, huí jiā yǐ hòu kàn kàn shū, shàng shàng wǎng, ǒu ěr yùn dòng yī xià, jiù shuì jué le.",
        "vietnamese": "他平时工作很忙，回家以后看看书、上上网，偶尔运动一下，就睡觉了。"
      },
      {
        "chinese": "我们偶尔会一起出去玩儿，有时候看电影，有时候踢足球。",
        "pinyin": "Wǒ men ǒu ěr huì yī qǐ chū qù wánr, yǒu shí hòu kàn diàn yǐng, yǒu shí hòu tī zú qiú.",
        "vietnamese": "我们偶尔会一起出去玩儿，有时候看电影，有时候踢足球。"
      },
      {
        "chinese": "老师再次提醒同学们考试以前一定要认真复习。",
        "pinyin": "Lǎo shī zài cì tí xǐng tóng xué men kǎo shì yǐ qián yī dìng yào rèn zhēn fù xí.",
        "vietnamese": "老师再次提醒同学们考试以前一定要认真复习。"
      },
      {
        "chinese": "再次回到童年时生活的地方，我感到既熟悉又感动。",
        "pinyin": "Zài cì huí dào tóng nián shí shēng huó de dì fāng, wǒ gǎn dào jì shú xī yòu gǎn dòng.",
        "vietnamese": "再次回到童年时生活的地方，我感到既熟悉又感动。"
      },
      {
        "chinese": "他老说要跟同学们多交流，可是从来不参加班级活动。",
        "pinyin": "Tā lǎo shuō yào gēn tóng xué men duō jiāo liú, kě shì cóng lái bù cān jiā bān jí huó dòng.",
        "vietnamese": "他老说要跟同学们多交流，可是从来不参加班级活动。"
      },
      {
        "chinese": "大家的工作都很忙，你老想让别人照顾你，是不可能的。",
        "pinyin": "Dà jiā de gōng zuò dōu hěn máng, nǐ lǎo xiǎng ràng bié rén zhào gù nǐ, shì bù kě néng de.",
        "vietnamese": "大家的工作都很忙，你老想让别人照顾你，是不可能的。"
      }
    ]
  },
  {
    "id": "hsk4-g-10",
    "order": 10,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ phương thức: 故意, 互相, 相互 (Cố tình & Lẫn nhau)",
    "titleZh": "故意、互相、相互",
    "grammarType": "词类",
    "categoryType": "方式副词",
    "grammarDetail": "方式副词",
    "structure": "故意 + Động từ (cố tình làm gì) | 互相 / 相互 + Động từ (làm gì lẫn nhau)",
    "explanationVi": "• 故意 (gùyì): Cố ý, cố tình (có chủ đích từ trước).\n• 互相 / 相互: Qua lại lẫn nhau giữa hai hay nhiều đối tượng (như 互相帮助 - giúp đỡ lẫn nhau; 相互影响 - tác động lẫn nhau).",
    "tips": "'互相' thường bổ nghĩa cho động từ song âm tiết.",
    "examples": [
      {
        "chinese": "真对不起，我不是故意的，你千万别生气。",
        "pinyin": "Zhēn duì bù qǐ, wǒ bù shì gù yì de, nǐ qiān wàn bié shēng qì.",
        "vietnamese": "真对不起，我不是故意的，你千万别生气。"
      },
      {
        "chinese": "他故意提高声音，好让大家都能听见。",
        "pinyin": "Tā gù yì tí gāo shēng yīn, hǎo ràng dà jiā dōu néng tīng jiàn.",
        "vietnamese": "他故意提高声音，好让大家都能听见。"
      },
      {
        "chinese": "我想练习中文，咱们互相学习，互相帮助，怎么样？",
        "pinyin": "Wǒ xiǎng liàn xí zhōng wén, zán men hù xiāng xué xí, hù xiāng bāng zhù, zěn me yàng?",
        "vietnamese": "我想练习中文，咱们互相学习，互相帮助，怎么样？"
      },
      {
        "chinese": "大家都是同学，应该互相关心，互相照顾。",
        "pinyin": "Dà jiā dōu shì tóng xué, yīng gāi hù xiāng guān xīn, hù xiāng zhào gù.",
        "vietnamese": "大家都是同学，应该互相关心，互相照顾。"
      },
      {
        "chinese": "国家之间应该相互尊重，相互交流，共同发展。",
        "pinyin": "Guó jiā zhī jiān yīng gāi xiāng hù zūn zhòng, xiāng hù jiāo liú, gòng tóng fā zhǎn.",
        "vietnamese": "国家之间应该相互尊重，相互交流，共同发展。"
      },
      {
        "chinese": "随着信息技术的发展，不同语言的相互影响越来越普遍。",
        "pinyin": "Suí zhe xìn xī jì shù de fā zhǎn, bù tóng yǔ yán de xiāng hù yǐng xiǎng yuè lái yuè pǔ biàn.",
        "vietnamese": "随着信息技术的发展，不同语言的相互影响越来越普遍。"
      }
    ]
  },
  {
    "id": "hsk4-g-11",
    "order": 11,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ liên kết chuyển ngoặt: 却 (Què - Lại, thế mà lại)",
    "titleZh": "却",
    "grammarType": "词类",
    "categoryType": "关联副词",
    "grammarDetail": "关联副词",
    "structure": "Chủ ngữ + 却 + Vị ngữ (Đứng SAU chủ ngữ, TRƯỚC động từ)",
    "explanationVi": "Biểu thị sự chuyển biến đối lập, trái ngược với điều bình thường hoặc mong đợi ('thế mà lại', 'lại'). Thường đi sau các liên từ 虽然, 尽管.",
    "tips": "Vị trí chuẩn xác: '却' là phó từ nên BẮT BUỘC đứng sau chủ ngữ (không thể đứng đầu câu như 但是).",
    "examples": [
      {
        "chinese": "有些打折的商品尽管便宜，质量却不能让人满意。",
        "pinyin": "Yǒu xiē dǎ zhé de shāng pǐn jǐn guǎn biàn yí, zhì liàng què bù néng ràng rén mǎn yì.",
        "vietnamese": "有些打折的商品尽管便宜，质量却不能让人满意。"
      },
      {
        "chinese": "她长得很像她的姐姐，但两个人的性格却完全不同。",
        "pinyin": "Tā zhǎng dé hěn xiàng tā de jiě jiě, dàn liǎng gè rén de xìng gé què wán quán bù tóng.",
        "vietnamese": "她长得很像她的姐姐，但两个人的性格却完全不同。"
      }
    ]
  },
  {
    "id": "hsk4-g-12",
    "order": 12,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ tình thái suy đoán: 也许 & 恐怕 (Có lẽ & E rằng)",
    "titleZh": "也许、恐怕",
    "grammarType": "词类",
    "categoryType": "情态副词",
    "grammarDetail": "情态副词",
    "structure": "也许 / 恐怕 + Mệnh đề phán đoán",
    "explanationVi": "• 也许 (yěxǔ): Có lẽ, có thể (suy đoán khách quan, trung tính).\n• 恐怕 (kǒngpà): E rằng, sợ rằng (suy đoán về một kết quả không mong muốn hoặc từ chối khéo léo).",
    "tips": "'恐怕' luôn mang sắc thái lo ngại hoặc ái ngại.",
    "examples": [
      {
        "chinese": "你可以加一点儿糖，味道也许不错。",
        "pinyin": "Nǐ kě yǐ jiā yìdiǎnr táng, wèi dào yě xǔ bù cuò.",
        "vietnamese": "你可以加一点儿糖，味道也许不错。"
      },
      {
        "chinese": "现在不愿意花时间练习写汉字，你将来也许会后悔的。",
        "pinyin": "Xiàn zài bù yuàn yì huā shí jiān liàn xí xiě hàn zì, nǐ jiāng lái yě xǔ huì hòu huǐ de.",
        "vietnamese": "现在不愿意花时间练习写汉字，你将来也许会后悔的。"
      },
      {
        "chinese": "我感觉头疼，还有点儿咳嗽，恐怕是感冒了。",
        "pinyin": "Wǒ gǎn jué tóu téng, hái yǒu diǎn ér ké sòu, kǒng pà shì gǎn mào le.",
        "vietnamese": "我感觉头疼，还有点儿咳嗽，恐怕是感冒了。"
      },
      {
        "chinese": "年底是公司最忙的时候，你想休假恐怕不行。",
        "pinyin": "Nián dǐ shì gōng sī zuì máng de shí hòu, nǐ xiǎng xiū jiǎ kǒng pà bù xíng.",
        "vietnamese": "年底是公司最忙的时候，你想休假恐怕不行。"
      }
    ]
  },
  {
    "id": "hsk4-g-13",
    "order": 13,
    "category": "adverbs",
    "categoryName": "Phó từ thời gian, mức độ, ngữ khí",
    "categoryIcon": "🔥",
    "titleVi": "Phó từ ngữ khí phong phú: 并, 竟然, 究竟, 到底, 难道, 千万, 确实, 只好, 差点儿",
    "titleZh": "才4、就5、并1、还4、竟然、究竟、正好、到底、难道、千万、确实、只好、差（一）点儿",
    "grammarType": "词类",
    "categoryType": "语气副词",
    "grammarDetail": "语气副词",
    "structure": "Chủ ngữ + Phó từ ngữ khí + Vị ngữ",
    "explanationVi": "Hệ thống phó từ sắc thái biểu cảm cao cấp:\n• 并不/没: Thực ra không hề (nhấn mạnh phủ định)\n• 竟然: Ngờ đâu, lại có thể (bất ngờ ngoài dự tính)\n• 究竟 / 到底: Rốt cuộc là (dò hỏi đến cùng)\n• 难道: Chẳng lẽ (trong câu phản vấn)\n• 千万: Tuyệt đối, nhất thiết (dặn dò tha thiết)\n• 确实: Quả thực, đúng là\n• 只好: Đành phải\n• 差点儿: Suýt chút nữa.",
    "tips": "Sử dụng thành thạo các phó từ ngữ khí này là bước nhảy vọt về khẩu ngữ tự nhiên.",
    "examples": [
      {
        "chinese": "昨天那场比赛才精彩呢！",
        "pinyin": "Zuó tiān nà chǎng bǐ sài cái jīng cǎi ne!",
        "vietnamese": "昨天那场比赛才精彩呢！"
      },
      {
        "chinese": "他总是迟到，我才不相信他今天能准时来。",
        "pinyin": "Tā zǒng shì chí dào, wǒ cái bù xiāng xìn tā jīn tiān néng zhǔn shí lái.",
        "vietnamese": "他总是迟到，我才不相信他今天能准时来。"
      },
      {
        "chinese": "我就知道他肯定会答应的。",
        "pinyin": "Wǒ jiù zhī dào tā kěn dìng huì dá yīng de.",
        "vietnamese": "我就知道他肯定会答应的。"
      },
      {
        "chinese": "我就不信我考不上大学。",
        "pinyin": "Wǒ jiù bù xìn wǒ kǎo bù shàng dà xué.",
        "vietnamese": "我就不信我考不上大学。"
      },
      {
        "chinese": "她并不相信我说的话。",
        "pinyin": "Tā bìng bù xiāng xìn wǒ shuō de huà.",
        "vietnamese": "她并不相信我说的话。"
      },
      {
        "chinese": "我以为考试很简单，其实并没有那么简单。",
        "pinyin": "Wǒ yǐ wèi kǎo shì hěn jiǎn dān, qí shí bìng méi yǒu nà me jiǎn dān.",
        "vietnamese": "我以为考试很简单，其实并没有那么简单。"
      },
      {
        "chinese": "没想到他的中文说得还真不错。",
        "pinyin": "Méi xiǎng dào tā de zhōng wén shuō dé hái zhēn bù cuò.",
        "vietnamese": "没想到他的中文说得还真不错。"
      },
      {
        "chinese": "老张还真厉害，这么快就把问题解决了。",
        "pinyin": "Lǎo zhāng hái zhēn lì hài, zhè me kuài jiù bǎ wèn tí jiě jué le.",
        "vietnamese": "老张还真厉害，这么快就把问题解决了。"
      },
      {
        "chinese": "他竟然在那么短的时间内完成了这么复杂的工作，太厉害了。",
        "pinyin": "Tā jìng rán zài nà me duǎn de shí jiān nèi wán chéng le zhè me fù zá de gōng zuò, tài lì hài le.",
        "vietnamese": "他竟然在那么短的时间内完成了这么复杂的工作，太厉害了。"
      },
      {
        "chinese": "昨天天气还很暖和，没想到今天竟然下雪了。",
        "pinyin": "Zuó tiān tiān qì hái hěn nuǎn hé, méi xiǎng dào jīn tiān jìng rán xià xuě le.",
        "vietnamese": "昨天天气还很暖和，没想到今天竟然下雪了。"
      },
      {
        "chinese": "他究竟是不是真的喜欢我，我还是有些怀疑。",
        "pinyin": "Tā jiū jìng shì bù shì zhēn de xǐ huān wǒ, wǒ hái shì yǒu xiē huái yí.",
        "vietnamese": "他究竟是不是真的喜欢我，我还是有些怀疑。"
      },
      {
        "chinese": "我很想知道汉字究竟是怎么产生的。",
        "pinyin": "Wǒ hěn xiǎng zhī dào hàn zì jiū jìng shì zěn me chǎn shēng de.",
        "vietnamese": "我很想知道汉字究竟是怎么产生的。"
      },
      {
        "chinese": "我明天下午正好有时间，可以帮你一起搬家。",
        "pinyin": "Wǒ míng tiān xià wǔ zhèng hǎo yǒu shí jiān, kě yǐ bāng nǐ yī qǐ bān jiā.",
        "vietnamese": "我明天下午正好有时间，可以帮你一起搬家。"
      },
      {
        "chinese": "上个月我借了一本书，今天正好一个月了，你帮我还回去吧。",
        "pinyin": "Shàng gè yuè wǒ jiè le yī běn shū, jīn tiān zhèng hǎo yī gè yuè le, nǐ bāng wǒ hái huí qù ba.",
        "vietnamese": "上个月我借了一本书，今天正好一个月了，你帮我还回去吧。"
      },
      {
        "chinese": "明天就是最后一天了，你到底想不想报名？",
        "pinyin": "Míng tiān jiù shì zuì hòu yī tiān le, nǐ dào dǐ xiǎng bù xiǎng bào míng?",
        "vietnamese": "明天就是最后一天了，你到底想不想报名？"
      },
      {
        "chinese": "昨天的比赛你看了吗？他们队到底赢了没有？",
        "pinyin": "Zuó tiān de bǐ sài nǐ kàn le ma? tā men duì dào dǐ yíng le méi yǒu?",
        "vietnamese": "昨天的比赛你看了吗？他们队到底赢了没有？"
      },
      {
        "chinese": "难道你不知道坐飞机需要带护照吗？",
        "pinyin": "Nán dào nǐ bù zhī dào zuò fēi jī xū yào dài hù zhào ma?",
        "vietnamese": "难道你不知道坐飞机需要带护照吗？"
      },
      {
        "chinese": "你难道不认为网上购物更方便吗？",
        "pinyin": "Nǐ nán dào bù rèn wèi wǎng shàng gòu wù gèng fāng biàn ma?",
        "vietnamese": "你难道不认为网上购物更方便吗？"
      },
      {
        "chinese": "你把地址写在这儿，千万别写错了。",
        "pinyin": "Nǐ bǎ dì zhǐ xiě zài zhèr, qiān wàn bié xiě cuò le.",
        "vietnamese": "你把地址写在这儿，千万别写错了。"
      },
      {
        "chinese": "路上人多车也多，骑车时千万要小心。",
        "pinyin": "Lù shàng rén duō chē yě duō, qí chē shí qiān wàn yào xiǎo xīn.",
        "vietnamese": "路上人多车也多，骑车时千万要小心。"
      },
      {
        "chinese": "昨天晚上的京剧演出确实精彩。",
        "pinyin": "Zuó tiān wǎn shàng de jīng jù yǎn chū què shí jīng cǎi.",
        "vietnamese": "昨天晚上的京剧演出确实精彩。"
      },
      {
        "chinese": "跟过去相比，这里确实发生了巨大的变化。",
        "pinyin": "Gēn guò qù xiāng bǐ, zhè lǐ què shí fā shēng le jù dà de biàn huà.",
        "vietnamese": "跟过去相比，这里确实发生了巨大的变化。"
      },
      {
        "chinese": "电梯坏了，我们只好走楼梯上去。",
        "pinyin": "Diàn tī huài le, wǒ men zhǐ hǎo zǒu lóu tī shàng qù.",
        "vietnamese": "电梯坏了，我们只好走楼梯上去。"
      },
      {
        "chinese": "因为没买到火车票，我假期只好留在学校。",
        "pinyin": "Yīn wèi méi mǎi dào huǒ chē piào, wǒ jiǎ qī zhǐ hǎo liú zài xué xiào.",
        "vietnamese": "因为没买到火车票，我假期只好留在学校。"
      },
      {
        "chinese": "出门的时候太着急，我差（一）点儿忘带手机。",
        "pinyin": "Chū mén de shí hòu tài zhe jí, wǒ chà (yī) diǎn ér wàng dài shǒu jī.",
        "vietnamese": "出门的时候太着急，我差（一）点儿忘带手机。"
      },
      {
        "chinese": "我早上七点半才起床，差（一）点儿没迟到。",
        "pinyin": "Wǒ zǎo shàng qī diǎn bàn cái qǐ chuáng, chà (yī) diǎn ér méi chí dào.",
        "vietnamese": "我早上七点半才起床，差（一）点儿没迟到。"
      }
    ]
  },
  {
    "id": "hsk4-g-14",
    "order": 14,
    "category": "prepositions",
    "categoryName": "Giới từ căn cứ, thời gian, đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ thời gian, không gian: 自, 当, 由, 随着, 等",
    "titleZh": "自、当、由1、随着、等1",
    "grammarType": "词类",
    "categoryType": "引出时间、处所",
    "grammarDetail": "引出时间、处所",
    "structure": "自 (từ) | 当 (vào lúc) | 由 (khởi hành từ) | 随着 (cùng với sự...) | 等 (đợi đến khi)",
    "explanationVi": "• 自: Từ (văn viết: 自去年毕业 - kể từ khi tốt nghiệp).\n• 当: Khi, vào lúc (当遇到危险时 - khi gặp nguy hiểm).\n• 由: Khởi điểm hành trình (由北京出发 - xuất phát từ Bắc Kinh).\n• 随着: Đi đôi với, cùng với sự biến đổi (随着经济的发展).\n• 等: Đợi đến khi (等他到了 - đợi anh ấy đến).",
    "tips": "'随着...' là cấu trúc mở đầu cực kỳ đắt giá trong văn nghị luận.",
    "examples": [
      {
        "chinese": "自1978年以来，中国发生了很大的变化。",
        "pinyin": "Zì 1 9 7 8 nián yǐ lái, zhōng guó fā shēng le hěn dà de biàn huà.",
        "vietnamese": "自1978年以来，中国发生了很大的变化。"
      },
      {
        "chinese": "我们自北京出发，开车往南走，来到了上海。",
        "pinyin": "Wǒ men zì běi jīng chū fā, kāi chē wǎng nán zǒu, lái dào le shàng hǎi.",
        "vietnamese": "我们自北京出发，开车往南走，来到了上海。"
      },
      {
        "chinese": "当遇到困难时，先冷静地想一想。",
        "pinyin": "Dāng yù dào kùn nán shí, xiān lěng jìng dì xiǎng yī xiǎng.",
        "vietnamese": "当遇到困难时，先冷静地想一想。"
      },
      {
        "chinese": "当听到放假的消息时，同学们都非常高兴。",
        "pinyin": "Dāng tīng dào fàng jiǎ de xiāo xī shí, tóng xué men dōu fēi cháng gāo xīng.",
        "vietnamese": "当听到放假的消息时，同学们都非常高兴。"
      },
      {
        "chinese": "各位乘客，由北京飞往上海的航班就要起飞了。",
        "pinyin": "Gè wèi chéng kè, yóu běi jīng fēi wǎng shàng hǎi de háng bān jiù yào qǐ fēi le.",
        "vietnamese": "各位乘客，由北京飞往上海的航班就要起飞了。"
      },
      {
        "chinese": "学校决定由下个月开始每周增加一节中文课。",
        "pinyin": "Xué xiào jué dìng yóu xià gè yuè kāi shǐ měi zhōu zēng jiā yī jié zhōng wén kè.",
        "vietnamese": "学校决定由下个月开始每周增加一节中文课。"
      },
      {
        "chinese": "随着生活水平的提高，人们对食品健康的要求越来越高。",
        "pinyin": "Suí zhe shēng huó shuǐ píng de tí gāo, rén men duì shí pǐn jiàn kāng de yào qiú yuè lái yuè gāo.",
        "vietnamese": "随着生活水平的提高，人们对食品健康的要求越来越高。"
      },
      {
        "chinese": "随着春天的到来，天气一天比一天暖和了。",
        "pinyin": "Suí zhe chūn tiān de dào lái, tiān qì yī tiān bǐ yī tiān nuǎn hé le.",
        "vietnamese": "随着春天的到来，天气一天比一天暖和了。"
      },
      {
        "chinese": "等我写完作业，咱们一起去踢足球。",
        "pinyin": "Děng wǒ xiě wán zuò yè, zán men yī qǐ qù tī zú qiú.",
        "vietnamese": "等我写完作业，咱们一起去踢足球。"
      },
      {
        "chinese": "等我们赶到车站，火车已经开走了。",
        "pinyin": "Děng wǒ men gǎn dào chē zhàn, huǒ chē yǐ jīng kāi zǒu le.",
        "vietnamese": "等我们赶到车站，火车已经开走了。"
      }
    ]
  },
  {
    "id": "hsk4-g-15",
    "order": 15,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Giới từ dẫn xuất tân ngữ & tác nhân: 将, 由, 叫, 让",
    "titleZh": "将、由2、叫、让",
    "grammarType": "词类",
    "categoryType": "引出施事、受事",
    "grammarDetail": "引出施事、受事",
    "structure": "Chủ ngữ + 将 + Tân ngữ + Động từ (như 把) | 由 + Người chịu trách nhiệm | 叫/让 (bị/được)",
    "explanationVi": "• 将 (jiāng): Trong văn viết thay thế cho chữ '把' (学校将举办比赛).\n• 由 (yóu): Chỉ người phụ trách thực hiện (由学生会负责).\n• 叫 / 让: Dùng trong câu bị động khẩu ngữ thay cho chữ '被' (叫小偷偷走了).",
    "tips": "Nhớ rằng '将' vừa là phó từ thời gian (sẽ) vừa là giới từ xử lý (bằng với 把).",
    "examples": [
      {
        "chinese": "离开教室时，请将垃圾带走，并将门窗关好。",
        "pinyin": "Lí kāi jiào shì shí, qǐng jiāng lā jī dài zǒu, bìng jiāng mén chuāng guān hǎo.",
        "vietnamese": "离开教室时，请将垃圾带走，并将门窗关好。"
      },
      {
        "chinese": "根据规定，禁止将食物带入图书馆。",
        "pinyin": "Gēn jù guī dìng, jìn zhǐ jiāng shí wù dài rù tú shū guǎn.",
        "vietnamese": "根据规定，禁止将食物带入图书馆。"
      },
      {
        "chinese": "这些商品的质量问题应该由工厂负责。",
        "pinyin": "Zhè xiē shāng pǐn de zhì liàng wèn tí yīng gāi yóu gōng chǎng fù zé.",
        "vietnamese": "这些商品的质量问题应该由工厂负责。"
      },
      {
        "chinese": "我只是提供一些建议，到底怎么做由你决定。",
        "pinyin": "Wǒ zhǐ shì tí gōng yī xiē jiàn yì, dào dǐ zěn me zuò yóu nǐ jué dìng.",
        "vietnamese": "我只是提供一些建议，到底怎么做由你决定。"
      },
      {
        "chinese": "我刚才放在桌上的那些文件叫谁拿走了？",
        "pinyin": "Wǒ gāng cái fàng zài zhuō shàng de nà xiē wén jiàn jiào shuí ná zǒu le?",
        "vietnamese": "我刚才放在桌上的那些文件叫谁拿走了？"
      },
      {
        "chinese": "我本来想去图书馆借书，可是学生证让我弄丢了。",
        "pinyin": "Wǒ běn lái xiǎng qù tú shū guǎn jiè shū, kě shì xué shēng zhèng ràng wǒ nòng diū le.",
        "vietnamese": "我本来想去图书馆借书，可是学生证让我弄丢了。"
      }
    ]
  },
  {
    "id": "hsk4-g-16",
    "order": 16,
    "category": "prepositions",
    "categoryName": "Giới từ căn cứ, thời gian, đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ chỉ nguyên nhân: 由于 (Yóuyú - Do, bởi vì)",
    "titleZh": "由于1",
    "grammarType": "词类",
    "categoryType": "引出原因",
    "grammarDetail": "引出原因",
    "structure": "由于 + Nguyên nhân (thường là danh từ hoặc mệnh đề), Vế kết quả",
    "explanationVi": "Dẫn ra nguyên nhân hoặc lý do khách quan dẫn tới một tình huống (như 由于天气原因 - do thời tiết; 由于长期坚持 - nhờ kiên trì lâu dài).",
    "tips": "Trang trọng hơn '因为' và hay dùng trong văn bản, thông báo.",
    "examples": [
      {
        "chinese": "由于上次失败的经历，她对自己失去了信心。",
        "pinyin": "Yóu yú shàng cì shī bài de jīng lì, tā duì zì jǐ shī qù le xìn xīn.",
        "vietnamese": "由于上次失败的经历，她对自己失去了信心。"
      },
      {
        "chinese": "由于工作的原因，我一年内搬了好几次家。",
        "pinyin": "Yóu yú gōng zuò de yuán yīn, wǒ yī nián nèi bān le hǎo jǐ cì jiā.",
        "vietnamese": "由于工作的原因，我一年内搬了好几次家。"
      }
    ]
  },
  {
    "id": "hsk4-g-17",
    "order": 17,
    "category": "prepositions",
    "categoryName": "Giới từ căn cứ, thời gian, đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ chỉ đối tượng liên quan: 对于 & 与 (Đối với & Cùng với)",
    "titleZh": "对于、与1",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "对于 + Đối tượng, Chủ ngữ + Nhận định | 与 + Đối tượng + So sánh/Quan hệ",
    "explanationVi": "• 对于: Đối với vấn đề, người hoặc sự việc (thường đứng ở đầu câu: 对于初学者来说).\n• 与: Văn viết của '和', '跟' (与去年相比 - so với năm ngoái; 与各国朋友 - cùng bạn bè các nước).",
    "tips": "Tăng độ học thuật và chuẩn mực cho văn phong.",
    "examples": [
      {
        "chinese": "对于任何一种语言，文字的出现都是十分重要的。",
        "pinyin": "Duì yú rèn hé yī zhǒng yǔ yán, wén zì de chū xiàn dōu shì shí fēn zhòng yào de.",
        "vietnamese": "对于任何一种语言，文字的出现都是十分重要的。"
      },
      {
        "chinese": "对于学习成绩优秀的同学，学校每年都会提供奖学金。",
        "pinyin": "Duì yú xué xí chéng jì yōu xiù de tóng xué, xué xiào měi nián dōu huì tí gōng jiǎng xué jīn.",
        "vietnamese": "对于学习成绩优秀的同学，学校每年都会提供奖学金。"
      },
      {
        "chinese": "你放心，我们会与你共同解决这个问题。",
        "pinyin": "Nǐ fàng xīn, wǒ men huì yǔ nǐ gòng tóng jiě jué zhè gè wèn tí.",
        "vietnamese": "你放心，我们会与你共同解决这个问题。"
      },
      {
        "chinese": "这件事我没与任何人交流过。",
        "pinyin": "Zhè jiàn shì wǒ méi yǔ rèn hé rén jiāo liú guò.",
        "vietnamese": "这件事我没与任何人交流过。"
      }
    ]
  },
  {
    "id": "hsk4-g-18",
    "order": 18,
    "category": "prepositions",
    "categoryName": "Giới từ căn cứ, thời gian, đối tượng",
    "categoryIcon": "🛡️",
    "titleVi": "Giới từ vai trò & căn cứ: 作为, 按, 按照",
    "titleZh": "作为、按、按照",
    "grammarType": "词类",
    "categoryType": "引出凭借、依据",
    "grammarDetail": "引出凭借、依据",
    "structure": "作为 + Thân phận/Tư cách | 按 / 按照 + Quy định/Yêu cầu + Động từ",
    "explanationVi": "• 作为: Với tư cách là, đóng vai trò là (作为一名学生).\n• 按: Theo, dựa vào (按时, 按重量).\n• 按照: Căn cứ theo, chiểu theo (按照规定, 按照说明书).",
    "tips": "'按照' nhấn mạnh việc tuân thủ triệt để theo tiêu chuẩn, quy chế đã có.",
    "examples": [
      {
        "chinese": "作为生活在中国的外国人，我很想了解中国人的生活习惯。",
        "pinyin": "Zuò wèi shēng huó zài zhōng guó de wài guó rén, wǒ hěn xiǎng le jiě zhōng guó rén de shēng huó xí guàn.",
        "vietnamese": "作为生活在中国的外国人，我很想了解中国人的生活习惯。"
      },
      {
        "chinese": "作为首都，北京的发展比一般的城市更快，工作机会更多。",
        "pinyin": "Zuò wèi shǒu dōu, běi jīng de fā zhǎn bǐ yī bān de chéng shì gèng kuài, gōng zuò jī huì gèng duō.",
        "vietnamese": "作为首都，北京的发展比一般的城市更快，工作机会更多。"
      },
      {
        "chinese": "你应该按医生说的方法坚持锻炼。",
        "pinyin": "Nǐ yīng gāi àn yī shēng shuō de fāng fǎ jiān chí duàn liàn.",
        "vietnamese": "你应该按医生说的方法坚持锻炼。"
      },
      {
        "chinese": "这里租房子比较方便，房租可以按月付，也可以按天付。",
        "pinyin": "Zhè lǐ zū fáng zi bǐ jiào fāng biàn, fáng zū kě yǐ àn yuè fù, yě kě yǐ àn tiān fù.",
        "vietnamese": "这里租房子比较方便，房租可以按月付，也可以按天付。"
      },
      {
        "chinese": "按照北方人的习惯，过年一般要吃饺子。",
        "pinyin": "Àn zhào běi fāng rén de xí guàn, guò nián yī bān yào chī jiǎo zi.",
        "vietnamese": "按照北方人的习惯，过年一般要吃饺子。"
      },
      {
        "chinese": "我们已经按照计划完成了全部工作。",
        "pinyin": "Wǒ men yǐ jīng àn zhào jì huà wán chéng le quán bù gōng zuò.",
        "vietnamese": "我们已经按照计划完成了全部工作。"
      }
    ]
  },
  {
    "id": "hsk4-g-19",
    "order": 19,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ nối đẳng lập văn viết: 并, 而, 与",
    "titleZh": "并2、而1、与2",
    "grammarType": "词类",
    "categoryType": "连接词或词组",
    "grammarDetail": "连接词或词组",
    "structure": "Từ 1 + 并 / 而 / 与 + Từ 2",
    "explanationVi": "• 并: Và, đồng thời (thường nối hai động từ cùng hướng: 讨论并批准 - thảo luận và phê chuẩn).\n• 而: Nối hai tính từ bổ sung hoặc đối lập (便宜而美味 - rẻ mà ngon; 坚固而轻便).\n• 与: Và (văn viết nối hai danh từ: 老师与学生).",
    "tips": "Giúp tránh lặp lại từ '和' quá nhiều trong câu văn trang trọng.",
    "examples": [
      {
        "chinese": "学校同意并支持学生们的想法。",
        "pinyin": "Xué xiào tóng yì bìng zhī chí xué shēng men de xiǎng fǎ.",
        "vietnamese": "学校同意并支持学生们的想法。"
      },
      {
        "chinese": "公司讨论并通过了这项计划。",
        "pinyin": "Gōng sī tǎo lùn bìng tōng guò le zhè xiàng jì huà.",
        "vietnamese": "公司讨论并通过了这项计划。"
      },
      {
        "chinese": "这里的人民热情而友好。",
        "pinyin": "Zhè lǐ de rén mín rè qíng ér yǒu hǎo.",
        "vietnamese": "这里的人民热情而友好。"
      },
      {
        "chinese": "她工作起来积极而努力。",
        "pinyin": "Tā gōng zuò qǐ lái jī jí ér nǔ lì.",
        "vietnamese": "她工作起来积极而努力。"
      },
      {
        "chinese": "学校与家庭对孩子的影响同样重要。",
        "pinyin": "Xué xiào yǔ jiā tíng duì hái zi de yǐng xiǎng tóng yàng zhòng yào.",
        "vietnamese": "学校与家庭对孩子的影响同样重要。"
      },
      {
        "chinese": "课程目标是帮助学生提高阅读能力与听说能力。",
        "pinyin": "Kè chéng mù biāo shì bāng zhù xué shēng tí gāo yuè dú néng lì yǔ tīng shuō néng lì.",
        "vietnamese": "课程目标是帮助学生提高阅读能力与听说能力。"
      }
    ]
  },
  {
    "id": "hsk4-g-20",
    "order": 20,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ nối phân câu HSK 4 (Phần 1): 此外, 而, 既然, 甚至, 不过, 并且",
    "titleZh": "此外、而2、既然、甚至、不过、并且",
    "grammarType": "词类",
    "categoryType": "连接分句或句子",
    "grammarDetail": "连接分句或句子",
    "structure": "Vế 1, + 此外 / 而 / 既然 / 甚至 / 不过 / 并且 + Vế 2",
    "explanationVi": "• 此外: Ngoài ra, bên cạnh đó.\n• 而: Mà lại, ngược lại (chỉ sự đối chiếu đối lập).\n• 既然...就...: Đã... thì...\n• 甚至: Thậm chí, ngay cả (mức độ tăng tiến tột cùng).\n• 不过: Có điều là, chỉ có điều (chuyển ngoặt nhẹ nhàng).\n• 并且: Hơn nữa, đồng thời còn.",
    "tips": "Nắm chắc các liên từ này giúp bạn liên kết đoạn văn mạch lạc, chặt chẽ.",
    "examples": [
      {
        "chinese": "我每天要上两节中文课，此外一周还要参加一次文化活动。",
        "pinyin": "Wǒ měi tiān yào shàng liǎng jié zhōng wén kè, cǐ wài yī zhōu hái yào cān jiā yī cì wén huà huó dòng.",
        "vietnamese": "我每天要上两节中文课，此外一周还要参加一次文化活动。"
      },
      {
        "chinese": "我来中国是想提高自己的汉语水平，此外还想学习中国文化。",
        "pinyin": "Wǒ lái zhōng guó shì xiǎng tí gāo zì jǐ de hàn yǔ shuǐ píng, cǐ wài hái xiǎng xué xí zhōng guó wén huà.",
        "vietnamese": "我来中国是想提高自己的汉语水平，此外还想学习中国文化。"
      },
      {
        "chinese": "冬天的时候，北方下雪比较多，而南方下雪比较少。",
        "pinyin": "Dōng tiān de shí hòu, běi fāng xià xuě bǐ jiào duō, ér nán fāng xià xuě bǐ jiào shǎo.",
        "vietnamese": "冬天的时候，北方下雪比较多，而南方下雪比较少。"
      },
      {
        "chinese": "他们兄弟的性格完全不同，哥哥喜欢热闹，而弟弟喜欢安静。",
        "pinyin": "Tā men xiōng dì de xìng gé wán quán bù tóng, gē gē xǐ huān rè nào, ér dì dì xǐ huān ān jìng.",
        "vietnamese": "他们兄弟的性格完全不同，哥哥喜欢热闹，而弟弟喜欢安静。"
      },
      {
        "chinese": "你说得对，既然来了中国，就要学习一些中国的文化。",
        "pinyin": "Nǐ shuō dé duì, jì rán lái le zhōng guó, jiù yào xué xí yī xiē zhōng guó de wén huà.",
        "vietnamese": "你说得对，既然来了中国，就要学习一些中国的文化。"
      },
      {
        "chinese": "既然你决定应聘那份工作，就应该认真准备面试。",
        "pinyin": "Jì rán nǐ jué dìng yīng pìn nà fèn gōng zuò, jiù yīng gāi rèn zhēn zhǔn bèi miàn shì.",
        "vietnamese": "既然你决定应聘那份工作，就应该认真准备面试。"
      },
      {
        "chinese": "活动还没开始，教室里就坐满了人，甚至还有人站在后面。",
        "pinyin": "Huó dòng hái méi kāi shǐ, jiào shì lǐ jiù zuò mǎn le rén, shèn zhì hái yǒu rén zhàn zài hòu miàn.",
        "vietnamese": "活动还没开始，教室里就坐满了人，甚至还有人站在后面。"
      },
      {
        "chinese": "他最近工作很忙，有时候甚至连吃饭的时间都没有。",
        "pinyin": "Tā zuì jìn gōng zuò hěn máng, yǒu shí hòu shèn zhì lián chī fàn de shí jiān dōu méi yǒu.",
        "vietnamese": "他最近工作很忙，有时候甚至连吃饭的时间都没有。"
      },
      {
        "chinese": "我姐姐还没有结婚，不过已经有男朋友了。",
        "pinyin": "Wǒ jiě jiě hái méi yǒu jié hūn, bù guò yǐ jīng yǒu nán péng yǒu le.",
        "vietnamese": "我姐姐还没有结婚，不过已经有男朋友了。"
      },
      {
        "chinese": "那家公司的地址我也不知道，不过我可以上网帮你查查。",
        "pinyin": "Nà jiā gōng sī de dì zhǐ wǒ yě bù zhī dào, bù guò wǒ kě yǐ shàng wǎng bāng nǐ chá chá.",
        "vietnamese": "那家公司的地址我也不知道，不过我可以上网帮你查查。"
      },
      {
        "chinese": "从那天开始，我就跟着老师学习中国功夫，并且一直坚持到现在。",
        "pinyin": "Cóng nà tiān kāi shǐ, wǒ jiù gēn zhe lǎo shī xué xí zhōng guó gōng fū, bìng qiě yī zhí jiān chí dào xiàn zài.",
        "vietnamese": "从那天开始，我就跟着老师学习中国功夫，并且一直坚持到现在。"
      },
      {
        "chinese": "她打算在中国学习中文，并且还想申请读研究生。",
        "pinyin": "Tā dǎ suàn zài zhōng guó xué xí zhōng wén, bìng qiě hái xiǎng shēn qǐng dú yán jiū shēng.",
        "vietnamese": "她打算在中国学习中文，并且还想申请读研究生。"
      }
    ]
  },
  {
    "id": "hsk4-g-21",
    "order": 21,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ nối phân câu HSK 4 (Phần 2): 不光, 不仅, 另外, 要是, 因此, 加上",
    "titleZh": "不光、不仅、另外、要是、因此、由于2、加上",
    "grammarType": "词类",
    "categoryType": "连接分句或句子",
    "grammarDetail": "连接分句或句子",
    "structure": "Vế 1, + Liên từ nối + Vế 2",
    "explanationVi": "• 不光 / 不仅: Không chỉ, chẳng những (không chỉ A mà còn B).\n• 另外: Ngoài ra, thêm vào đó.\n• 要是: Nếu như (khẩu ngữ của 如果).\n• 因此: Vì thế, do đó (kết quả tất yếu).\n• 加上: Cộng thêm vào đó, kết hợp thêm lý do.",
    "tips": "'加上' thường dùng để bổ sung thêm một yếu tố làm tăng thêm mức độ của kết quả.",
    "examples": [
      {
        "chinese": "我不光要学习中文，还要学习中国的历史和文化。",
        "pinyin": "Wǒ bù guāng yào xué xí zhōng wén, hái yào xué xí zhōng guó de lì shǐ hé wén huà.",
        "vietnamese": "我不光要学习中文，还要学习中国的历史和文化。"
      },
      {
        "chinese": "学校周围不光环境好，交通也很方便。",
        "pinyin": "Xué xiào zhōu wéi bù guāng huán jìng hǎo, jiāo tōng yě hěn fāng biàn.",
        "vietnamese": "学校周围不光环境好，交通也很方便。"
      },
      {
        "chinese": "我弟弟不仅学习成绩好，而且性格也很好。",
        "pinyin": "Wǒ dì dì bù jǐn xué xí chéng jì hǎo, ér qiě xìng gé yě hěn hǎo.",
        "vietnamese": "我弟弟不仅学习成绩好，而且性格也很好。"
      },
      {
        "chinese": "骑自行车旅行不仅便宜，还能锻炼身体。",
        "pinyin": "Qí zì xíng chē lǚ xíng bù jǐn biàn yí, hái néng duàn liàn shēn tǐ.",
        "vietnamese": "骑自行车旅行不仅便宜，还能锻炼身体。"
      },
      {
        "chinese": "我大学学的是广告专业，另外还有三年工作经验。",
        "pinyin": "Wǒ dà xué xué de shì guǎng gào zhuān yè, lìng wài hái yǒu sān nián gōng zuò jīng yàn.",
        "vietnamese": "我大学学的是广告专业，另外还有三年工作经验。"
      },
      {
        "chinese": "这些商品质量不错，另外价格也比较便宜。",
        "pinyin": "Zhè xiē shāng pǐn zhì liàng bù cuò, lìng wài jià gé yě bǐ jiào biàn yí.",
        "vietnamese": "这些商品质量不错，另外价格也比较便宜。"
      },
      {
        "chinese": "要是你也觉得满意，咱们就买吧。",
        "pinyin": "Yào shì nǐ yě jué dé mǎn yì, zán men jiù mǎi ba.",
        "vietnamese": "要是你也觉得满意，咱们就买吧。"
      },
      {
        "chinese": "要是天气不好，明天的活动就取消。",
        "pinyin": "Yào shì tiān qì bù hǎo, míng tiān de huó dòng jiù qǔ xiāo.",
        "vietnamese": "要是天气不好，明天的活动就取消。"
      },
      {
        "chinese": "买汽车的人越来越多，因此堵车成为了城市交通的大问题。",
        "pinyin": "Mǎi qì chē de rén yuè lái yuè duō, yīn cǐ dǔ chē chéng wèi le chéng shì jiāo tōng de dà wèn tí.",
        "vietnamese": "买汽车的人越来越多，因此堵车成为了城市交通的大问题。"
      },
      {
        "chinese": "她在中国生活过，因此对中国文化有一些了解。",
        "pinyin": "Tā zài zhōng guó shēng huó guò, yīn cǐ duì zhōng guó wén huà yǒu yī xiē le jiě.",
        "vietnamese": "她在中国生活过，因此对中国文化有一些了解。"
      },
      {
        "chinese": "由于去晚了，前面没有座位了，我只好坐在最后一排。",
        "pinyin": "Yóu yú qù wǎn le, qián miàn méi yǒu zuò wèi le, wǒ zhǐ hǎo zuò zài zuì hòu yī pái.",
        "vietnamese": "由于去晚了，前面没有座位了，我只好坐在最后一排。"
      },
      {
        "chinese": "由于天气原因，我们的航班被取消了。",
        "pinyin": "Yóu yú tiān qì yuán yīn, wǒ men de háng bān bèi qǔ xiāo le.",
        "vietnamese": "由于天气原因，我们的航班被取消了。"
      },
      {
        "chinese": "我爸爸平时工作很忙，加上经常出差，有时候一周也见不到他。",
        "pinyin": "Wǒ bà bà píng shí gōng zuò hěn máng, jiā shàng jīng cháng chū chà, yǒu shí hòu yī zhōu yě jiàn bù dào tā.",
        "vietnamese": "我爸爸平时工作很忙，加上经常出差，有时候一周也见不到他。"
      },
      {
        "chinese": "景区实在太大了，加上天气这么热，走了半天，我们又累又渴。",
        "pinyin": "Jǐng qū shí zài tài dà le, jiā shàng tiān qì zhè me rè, zǒu le bàn tiān, wǒ men yòu lèi yòu kě.",
        "vietnamese": "景区实在太大了，加上天气这么热，走了半天，我们又累又渴。"
      }
    ]
  },
  {
    "id": "hsk4-g-22",
    "order": 22,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Trợ từ ngữ pháp đặc biệt: 等, 者, 之, 就是",
    "titleZh": "等2、者、之、就是",
    "grammarType": "词类",
    "categoryType": "其他助词",
    "grammarDetail": "其他助词",
    "structure": "Danh từ + 等 (vân vân) | Động từ/Tính từ + 者 (người mà...) | A 之 B (của) | ...就是...",
    "explanationVi": "• 等: Vân vân, các loại (sau liệt kê).\n• 者 (zhě): Đại từ hóa chỉ người thực hiện (胜利者 - người chiến thắng; 有志者).\n• 之 (zhī): Tương đương '的' trong văn ngôn (三分之一 - một phần ba; 重中之重).\n• 就是: Chính là, biểu thị định nghĩa hoặc nhấn mạnh.",
    "tips": "'之' xuất hiện rất nhiều trong thành ngữ, phân số và các cụm từ trang trọng.",
    "examples": [
      {
        "chinese": "我会说英语、汉语、法语等很多种语言。",
        "pinyin": "Wǒ huì shuō yīng yǔ, hàn yǔ, fǎ yǔ děng hěn duō zhǒng yǔ yán.",
        "vietnamese": "我会说英语、汉语、法语等很多种语言。"
      },
      {
        "chinese": "你最好提前上网了解一下那里的天气、交通、景点等方面的信息。",
        "pinyin": "Nǐ zuì hǎo tí qián shàng wǎng le jiě yī xià nà lǐ de tiān qì, jiāo tōng, jǐng diǎn děng fāng miàn de xìn xī.",
        "vietnamese": "你最好提前上网了解一下那里的天气、交通、景点等方面的信息。"
      },
      {
        "chinese": "根据学校的规定，迟到十分钟以上者不允许参加考试。",
        "pinyin": "Gēn jù xué xiào de guī dìng, chí dào shí fēn zhōng yǐ shàng zhě bù yǔn xǔ cān jiā kǎo shì.",
        "vietnamese": "根据学校的规定，迟到十分钟以上者不允许参加考试。"
      },
      {
        "chinese": "申请参加会议者，请将您的个人信息发送到此邮箱。",
        "pinyin": "Shēn qǐng cān jiā huì yì zhě, qǐng jiāng nín de gè rén xìn xī fā sòng dào cǐ yóu xiāng.",
        "vietnamese": "申请参加会议者，请将您的个人信息发送到此邮箱。"
      },
      {
        "chinese": "其实，来中国留学一开始并不在我的计划之内。",
        "pinyin": "Qí shí, lái zhōng guó liú xué yī kāi shǐ bìng bù zài wǒ de jì huà zhī nèi.",
        "vietnamese": "其实，来中国留学一开始并不在我的计划之内。"
      },
      {
        "chinese": "我希望在提高中文水平的基础之上，能够学习一些专业知识。",
        "pinyin": "Wǒ xī wàng zài tí gāo zhōng wén shuǐ píng de jī chǔ zhī shàng, néng gòu xué xí yī xiē zhuān yè zhī shí.",
        "vietnamese": "我希望在提高中文水平的基础之上，能够学习一些专业知识。"
      },
      {
        "chinese": "我们明天一定完成任务，您放心就是了。",
        "pinyin": "Wǒ men míng tiān yī dìng wán chéng rèn wù, nín fàng xīn jiù shì le.",
        "vietnamese": "我们明天一定完成任务，您放心就是了。"
      },
      {
        "chinese": "我开车去学校接你，你在门口等我就是了。",
        "pinyin": "Wǒ kāi chē qù xué xiào jiē nǐ, nǐ zài mén kǒu děng wǒ jiù shì le.",
        "vietnamese": "我开车去学校接你，你在门口等我就是了。"
      }
    ]
  },
  {
    "id": "hsk4-g-23",
    "order": 23,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Thán từ cảm thán & Đồng thuận: 啊 (À/Ôi) & 嗯 (Ừ/Vâng)",
    "titleZh": "啊、嗯",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Đứng ở đầu câu giao tiếp",
    "explanationVi": "• 啊 (à/ā): Biểu thị bừng hiểu, ngạc nhiên, cảm thán hoặc khen ngợi (啊，真新鲜！).\n• 嗯 (èn/ńg): Biểu thị sự đồng ý, tiếp nhận thông tin hoặc gật đầu ưng thuận.",
    "tips": "Thán từ phản ánh tự nhiên ngữ điệu sống động của người bản xứ.",
    "examples": [
      {
        "chinese": "啊，原来是这么一回事！",
        "pinyin": "A, yuán lái shì zhè me yī huí shì!",
        "vietnamese": "啊，原来是这么一回事！"
      },
      {
        "chinese": "啊，这么多人排队！",
        "pinyin": "A, zhè me duō rén pái duì!",
        "vietnamese": "啊，这么多人排队！"
      },
      {
        "chinese": "A：八点出发来得及吗？",
        "pinyin": "A: bā diǎn chū fā lái dé jí ma?",
        "vietnamese": "A：八点出发来得及吗？"
      },
      {
        "chinese": "B：嗯，应该来得及。",
        "pinyin": "B: ń, yīng gāi lái dé jí.",
        "vietnamese": "B：嗯，应该来得及。"
      }
    ]
  },
  {
    "id": "hsk4-g-24",
    "order": 24,
    "category": "phrases_idioms",
    "categoryName": "Cụm 4 chữ & Cấu trúc số lượng",
    "categoryIcon": "🏗️",
    "titleVi": "Cấu trúc mở rộng số lượng: Số từ + Tính từ + Lượng từ",
    "titleZh": "数词+形容词+量词",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "一 + 大 / 小 + Lượng từ + Danh từ",
    "explanationVi": "Chèn tính từ (thường là 大 hoặc 小) vào giữa số từ và lượng từ để tăng cường tính miêu tả kích thước, quy mô của sự vật (như 一大包 - một bọc to tướng; 一小盒 - một chiếc hộp bé xíu).",
    "tips": "Cách nói này sinh động hơn nhiều so với việc chỉ dùng lượng từ đơn thuần.",
    "examples": [
      {
        "chinese": "奶奶把一小盒巧克力装进了孙子的书包里。",
        "pinyin": "Nǎi nǎi bǎ yī xiǎo hé qiǎo kè lì zhuāng jìn le sūn zi de shū bāo lǐ.",
        "vietnamese": "奶奶把一小盒巧克力装进了孙子的书包里。"
      },
      {
        "chinese": "回国前，我给父母买了两大包中国茶作为礼物。",
        "pinyin": "Huí guó qián, wǒ gěi fù mǔ mǎi le liǎng dà bāo zhōng guó chá zuò wèi lǐ wù.",
        "vietnamese": "回国前，我给父母买了两大包中国茶作为礼物。"
      }
    ]
  },
  {
    "id": "hsk4-g-25",
    "order": 25,
    "category": "phrases_idioms",
    "categoryName": "Cụm 4 chữ & Cấu trúc số lượng",
    "categoryIcon": "🏗️",
    "titleVi": "Cụm bốn chữ khuôn mẫu: 一 A 一 B (一清二楚, 一模一样)",
    "titleZh": "一A一B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "一 + Từ A + 一/二 + Từ B",
    "explanationVi": "Thành ngữ và cụm 4 chữ cố định mang tính cô đọng cao:\n• 一清二楚: Rõ ràng rành mạch, rành rẽ từ đầu đến cuối.\n• 一模一样: Giống nhau y như đúc, không sai một ly.",
    "tips": "Dùng thành ngữ này giúp câu nói trở nên sang trọng và ấn tượng.",
    "examples": [
      {
        "chinese": "她说话的声音不大，但是一字一句说得很清楚。",
        "pinyin": "Tā shuō huà de shēng yīn bù dà, dàn shì yī zì yī jù shuō dé hěn qīng chǔ.",
        "vietnamese": "她说话的声音不大，但是一字一句说得很清楚。"
      },
      {
        "chinese": "这会儿路上堵车，一来一回至少需要两个小时。",
        "pinyin": "Zhè huì ér lù shàng dǔ chē, yī lái yī huí zhì shǎo xū yào liǎng gè xiǎo shí.",
        "vietnamese": "这会儿路上堵车，一来一回至少需要两个小时。"
      }
    ]
  },
  {
    "id": "hsk4-g-26",
    "order": 26,
    "category": "phrases_idioms",
    "categoryName": "Cụm 4 chữ & Cấu trúc số lượng",
    "categoryIcon": "🏗️",
    "titleVi": "Cụm bốn chữ phủ định kép: 无 A 无 B (无忧无虑, 无穷无尽)",
    "titleZh": "无A无B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "无 + Yếu tố A + 无 + Yếu tố B",
    "explanationVi": "Biểu thị trạng thái hoàn toàn không có, thoát khỏi sự ràng buộc:\n• 无忧无虑: Vô tư lự, không chút lo nghĩ muộn phiền.\n• 无穷无尽: Vô cùng vô tận, bất tận không bao giờ dứt.",
    "tips": "'无' mang nghĩa là không có (tương đương với 没有).",
    "examples": [
      {
        "chinese": "我无儿无女，一人吃饱全家不饿。",
        "pinyin": "Wǒ wú ér wú nǚ, yī rén chī bǎo quán jiā bù è.",
        "vietnamese": "我无儿无女，一人吃饱全家不饿。"
      },
      {
        "chinese": "母亲无日无夜地照顾着生病的孩子。",
        "pinyin": "Mǔ qīn wú rì wú yè dì zhào gù zhe shēng bìng de hái zi.",
        "vietnamese": "母亲无日无夜地照顾着生病的孩子。"
      }
    ]
  },
  {
    "id": "hsk4-g-27",
    "order": 27,
    "category": "phrases_idioms",
    "categoryName": "Cụm 4 chữ & Cấu trúc số lượng",
    "categoryIcon": "🏗️",
    "titleVi": "Cụm bốn chữ khẳng định sóng đôi: 有 A 有 B (有声有色, 有利有弊)",
    "titleZh": "有A有B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "有 + Yếu tố A + 有 + Yếu tố B",
    "explanationVi": "Biểu thị sự đầy đủ, phong phú về hai khía cạnh cùng tồn tại:\n• 有声有色: Sinh động, hấp dẫn, rôm rả đầy màu sắc.\n• 有利有弊: Có lợi mà cũng có hại (mặt tích cực và tiêu cực song hành).",
    "tips": "Cách dùng rất phổ biến khi phân tích vấn đề hai mặt trong bài thi viết.",
    "examples": [
      {
        "chinese": "下课了，同学们有说有笑地走出了教室。",
        "pinyin": "Xià kè le, tóng xué men yǒu shuō yǒu xiào dì zǒu chū le jiào shì.",
        "vietnamese": "下课了，同学们有说有笑地走出了教室。"
      },
      {
        "chinese": "这部作品的每个人物都写得有血有肉。",
        "pinyin": "Zhè bù zuò pǐn de měi gè rén wù dōu xiě dé yǒu xuè yǒu ròu.",
        "vietnamese": "这部作品的每个人物都写得有血有肉。"
      }
    ]
  },
  {
    "id": "hsk4-g-28",
    "order": 28,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cụm thời gian kịp hay không kịp: 来得及 & 来不及",
    "titleZh": "来得及/来不及",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + (还) 来得及 / 来不及 (+ Động từ)",
    "explanationVi": "• 来得及: Vẫn còn kịp thời gian để làm việc gì đó.\n• 来不及: Không kịp nữa rồi, thời gian quá gấp gáp.",
    "tips": "Hai cụm này có cấu trúc tương tự bổ ngữ khả năng nhưng đã trở thành cụm từ cố định.",
    "examples": [
      {
        "chinese": "我这两天很忙，没来得及考虑这个问题。",
        "pinyin": "Wǒ zhè liǎng tiān hěn máng, méi lái dé jí kǎo lǜ zhè gè wèn tí.",
        "vietnamese": "我这两天很忙，没来得及考虑这个问题。"
      },
      {
        "chinese": "我想参加明天的比赛，现在报名来得及吗？",
        "pinyin": "Wǒ xiǎng cān jiā míng tiān de bǐ sài, xiàn zài bào míng lái dé jí ma?",
        "vietnamese": "我想参加明天的比赛，现在报名来得及吗？"
      },
      {
        "chinese": "我发现这个问题时已经太晚了，来不及做出任何改变。",
        "pinyin": "Wǒ fā xiàn zhè gè wèn tí shí yǐ jīng tài wǎn le, lái bù jí zuò chū rèn hé gǎi biàn.",
        "vietnamese": "我发现这个问题时已经太晚了，来不及做出任何改变。"
      },
      {
        "chinese": "飞机就要起飞了，你得快一点儿，否则就来不及了。",
        "pinyin": "Fēi jī jiù yào qǐ fēi le, nǐ dé kuài yìdiǎnr, fǒu zé jiù lái bù jí le.",
        "vietnamese": "飞机就要起飞了，你得快一点儿，否则就来不及了。"
      }
    ]
  },
  {
    "id": "hsk4-g-29",
    "order": 29,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cụm khẩu ngữ nhiều vô kể: 有的是 (Thiếu gì / Đầy ra đấy)",
    "titleZh": "有的是",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + 有的是 + Danh từ / Thời gian",
    "explanationVi": "Biểu thị số lượng vô cùng phong phú, dồi dào, không hề thiếu thốn (như 有的是时间 - thừa thời gian; 衣服有的是 - quần áo đầy ra đấy).",
    "tips": "Mang khẩu khí thoải mái, tự tin, khuyên người nghe không cần lo lắng.",
    "examples": [
      {
        "chinese": "一次失败并不可怕，以后有的是机会。",
        "pinyin": "Yī cì shī bài bìng bù kě pà, yǐ hòu yǒu de shì jī huì.",
        "vietnamese": "一次失败并不可怕，以后有的是机会。"
      },
      {
        "chinese": "这种水果我的家乡有的是。",
        "pinyin": "Zhè zhǒng shuǐ guǒ wǒ de jiā xiāng yǒu de shì.",
        "vietnamese": "这种水果我的家乡有的是。"
      }
    ]
  },
  {
    "id": "hsk4-g-30",
    "order": 30,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cụm khẩu ngữ suy đoán không chừng: 说不定 (Chưa biết chừng / Có khi)",
    "titleZh": "说不定",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "说不定 + Mệnh đề phán đoán khả năng",
    "explanationVi": "Biểu thị sự việc rất có khả năng sẽ xảy ra dù chưa ai dám khẳng định tuyệt đối (như 说不定待会儿下雨 - chưa biết chừng lát nữa mưa; 说不定就在抽屉里 - khéo ở trong ngăn kéo).",
    "tips": "Tương đương với '也许' nhưng mang phong vị khẩu ngữ tự nhiên hơn.",
    "examples": [
      {
        "chinese": "客人来不来还说不定。",
        "pinyin": "Kè rén lái bù lái hái shuō bù dìng.",
        "vietnamese": "客人来不来还说不定。"
      },
      {
        "chinese": "说不定路上堵车，再等一会儿吧。",
        "pinyin": "Shuō bù dìng lù shàng dǔ chē, zài děng yī huì ér ba.",
        "vietnamese": "说不定路上堵车，再等一会儿吧。"
      }
    ]
  },
  {
    "id": "hsk4-g-31",
    "order": 31,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cụm khẩu ngữ không... cho lắm: 不怎么",
    "titleZh": "不怎么",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Chủ ngữ + 不怎么 + Tính từ / Động từ tâm lý",
    "explanationVi": "Dùng để biểu thị mức độ không cao lắm, nói giảm nói tránh để giữ phép lịch sự (như 不怎么舒服 - không được khỏe cho lắm; 不怎么地道 - không chuẩn vị lắm).",
    "tips": "Nhẹ nhàng hơn so với cách nói phủ định thẳng thừng '不太'.",
    "examples": [
      {
        "chinese": "她从来都不怎么关心别人的看法。",
        "pinyin": "Tā cóng lái dōu bù zěn me guān xīn bié rén de kàn fǎ.",
        "vietnamese": "她从来都不怎么关心别人的看法。"
      },
      {
        "chinese": "从检查结果来看，他受的伤不怎么严重。",
        "pinyin": "Cóng jiǎn chá jié guǒ lái kàn, tā shòu de shāng bù zěn me yán zhòng.",
        "vietnamese": "从检查结果来看，他受的伤不怎么严重。"
      }
    ]
  },
  {
    "id": "hsk4-g-32",
    "order": 32,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cụm từ giải thích nghĩa rõ hơn: 就是说 / 这就是说 (Nói cách khác là)",
    "titleZh": "就是说/这就是说",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Mệnh đề 1，这就是说 / 就是说 + Mệnh đề giải thích hệ quả",
    "explanationVi": "Dùng để diễn giải lại nội dung vừa nêu bằng một cách hiểu khác dễ hiểu hơn hoặc rút ra kết luận logic từ vế trước.",
    "tips": "Rất hữu ích khi cần tóm lược ý hoặc kết luận luận điểm.",
    "examples": [
      {
        "chinese": "他们没有直接拒绝你，而是让你回来等消息，就是说，你还有机会，千万不要放弃。",
        "pinyin": "Tā men méi yǒu zhí jiē jù jué nǐ, ér shì ràng nǐ huí lái děng xiāo xī, jiù shì shuō, nǐ hái yǒu jī huì, qiān wàn bù yào fàng qì.",
        "vietnamese": "他们没有直接拒绝你，而是让你回来等消息，就是说，你还有机会，千万不要放弃。"
      },
      {
        "chinese": "他总是为自己的错误找各种原因，这就是说，他是一个不愿意负责任的人。",
        "pinyin": "Tā zǒng shì wèi zì jǐ de cuò wù zhǎo gè zhǒng yuán yīn, zhè jiù shì shuō, tā shì yī gè bù yuàn yì fù zé rèn de rén.",
        "vietnamese": "他总是为自己的错误找各种原因，这就是说，他是一个不愿意负责任的人。"
      }
    ]
  },
  {
    "id": "hsk4-g-33",
    "order": 33,
    "category": "comparisons",
    "categoryName": "Câu so sánh (不如, 相比)",
    "categoryIcon": "⚖️",
    "titleVi": "Cấu trúc tăng tiến từng bước: 一 + Lượng từ + 比 + 一 + Lượng từ",
    "titleZh": "一+量词+比+一+量词",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "一 + Lượng từ + 比 + 一 + Lượng từ + Tính từ (一年比一年好, 一天比一天快)",
    "explanationVi": "Biểu thị sự biến đổi tăng dần về mức độ qua từng chu kỳ thời gian hoặc từng đơn vị sự vật ('cái sau hơn cái trước', 'ngày một... hơn').",
    "tips": "Thường dùng: 一年比一年, 一天比一天, 一代比一代.",
    "examples": [
      {
        "chinese": "他的表演一次比一次精彩。",
        "pinyin": "Tā de biǎo yǎn yī cì bǐ yī cì jīng cǎi.",
        "vietnamese": "他的表演一次比一次精彩。"
      },
      {
        "chinese": "最近天气一天比一天暖和。",
        "pinyin": "Zuì jìn tiān qì yī tiān bǐ yī tiān nuǎn hé.",
        "vietnamese": "最近天气一天比一天暖和。"
      }
    ]
  },
  {
    "id": "hsk4-g-34",
    "order": 34,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Khung phạm vi lĩnh vực: 在……方面 (Về phương diện...)",
    "titleZh": "在……方面",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "在 + Lĩnh vực / Đề tài + 方面，Chủ ngữ + Vị ngữ",
    "explanationVi": "Xác định rõ ràng phạm vi, khía cạnh mà chủ ngữ phát huy tài năng hoặc sự việc diễn ra (như 在编程方面 - về mặt lập trình; 在文化教育方面).",
    "tips": "Cách diễn đạt vô cùng phổ biến trong văn phong công sở và học thuật.",
    "examples": [
      {
        "chinese": "在教育孩子方面，张老师有丰富的经验。",
        "pinyin": "Zài jiào yù hái zi fāng miàn, zhāng lǎo shī yǒu fēng fù de jīng yàn.",
        "vietnamese": "在教育孩子方面，张老师有丰富的经验。"
      },
      {
        "chinese": "在生活方面，他还不太习惯。",
        "pinyin": "Zài shēng huó fāng miàn, tā hái bù tài xí guàn.",
        "vietnamese": "在生活方面，他还不太习惯。"
      }
    ]
  },
  {
    "id": "hsk4-g-35",
    "order": 35,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc mức độ khẩu ngữ: 够……的 (Đủ... rồi đấy / Khá là...)",
    "titleZh": "够……的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "(可) 真够 + Tính từ + 的！",
    "explanationVi": "Dùng trong khẩu ngữ để nhấn mạnh mức độ đã đạt tới mức đáng kể, thường kèm theo sự cảm thán (như 够累的 - đủ mệt đứt hơi; 够受的 - đủ khổ sở).",
    "tips": "Thường dùng cho các cảm giác mệt mỏi, vất vả, khó chịu.",
    "examples": [
      {
        "chinese": "这个房间真够大的，估计能住七八个人。",
        "pinyin": "Zhè gè fáng jiān zhēn gòu dà de, gū jì néng zhù qī bā gè rén.",
        "vietnamese": "这个房间真够大的，估计能住七八个人。"
      },
      {
        "chinese": "你男朋友真够浪漫的，每天都给你送一枝花。",
        "pinyin": "Nǐ nán péng yǒu zhēn gòu làng màn de, měi tiān dōu gěi nǐ sòng yī zhī huā.",
        "vietnamese": "你男朋友真够浪漫的，每天都给你送一枝花。"
      }
    ]
  },
  {
    "id": "hsk4-g-36",
    "order": 36,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc nêu ví dụ điển hình: 拿……来说 (Lấy... làm ví dụ mà nói)",
    "titleZh": "拿……来说",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Luận điểm khái quát，拿 + Ví dụ cụ thể + 来说，Mô tả chi tiết",
    "explanationVi": "Dẫn ra một ví dụ cụ thể, tiêu biểu nhất để chứng minh cho nhận định phổ quát vừa nêu ở vế trước (như 拿深圳来说 - lấy Thâm Quyến làm ví dụ).",
    "tips": "Tương đương với '以...为例' trong văn viết.",
    "examples": [
      {
        "chinese": "中国各地的生活习惯各不相同，拿吃饭来说，南方人一般喜欢吃米饭，而北方人爱吃面条、馒头等面食。",
        "pinyin": "Zhōng guó gè dì de shēng huó xí guàn gè bù xiāng tóng, ná chī fàn lái shuō, nán fāng rén yī bān xǐ huān chī mǐ fàn, ér běi fāng rén ài chī miàn tiáo, mán tóu děng miàn shí.",
        "vietnamese": "中国各地的生活习惯各不相同，拿吃饭来说，南方人一般喜欢吃米饭，而北方人爱吃面条、馒头等面食。"
      },
      {
        "chinese": "科技改变了人类的生活，拿交通来说，高铁的出现使人们的日常出行更快、更方便了。",
        "pinyin": "Kē jì gǎi biàn le rén lèi de shēng huó, ná jiāo tōng lái shuō, gāo tiě de chū xiàn shǐ rén men de rì cháng chū xíng gèng kuài, gèng fāng biàn le.",
        "vietnamese": "科技改变了人类的生活，拿交通来说，高铁的出现使人们的日常出行更快、更方便了。"
      }
    ]
  },
  {
    "id": "hsk4-g-37",
    "order": 37,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc chấm dứt dứt khoát: 再也不 / 没…… (Không bao giờ... nữa)",
    "titleZh": "再也不/没……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 再也不 / 没 + Động từ + 了",
    "explanationVi": "Nhấn mạnh quyết tâm hoặc sự thật rằng một hành vi sẽ không bao giờ còn tái diễn thêm một lần nào nữa trong tương lai (như 再也不敢粗心了; 再也没见过他).",
    "tips": "Dùng '不' cho tương lai và '没' cho thực tế từ quá khứ đến nay.",
    "examples": [
      {
        "chinese": "我保证今后再也不迟到了。",
        "pinyin": "Wǒ bǎo zhèng jīn hòu zài yě bù chí dào le.",
        "vietnamese": "我保证今后再也不迟到了。"
      },
      {
        "chinese": "大学毕业以后，我再也没见过他。",
        "pinyin": "Dà xué bì yè yǐ hòu, wǒ zài yě méi jiàn guò tā.",
        "vietnamese": "大学毕业以后，我再也没见过他。"
      }
    ]
  },
  {
    "id": "hsk4-g-38",
    "order": 38,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc bế tắc bất khả: 怎么都 / 也 + 不 / 没…… (Làm cách nào cũng không)",
    "titleZh": "怎么都/也+不/没……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 怎么也 / 都 + 不 / 没 + Động từ",
    "explanationVi": "Biểu thị dù đã dùng hết mọi cách thức, nỗ lực nhưng vẫn hoàn toàn không thể làm được hoặc không đạt được kết quả (như 怎么想也想不起来; 怎么都不肯答应).",
    "tips": "Nhấn mạnh sự bất lực hoặc sự kiên quyết từ chối của chủ thể.",
    "examples": [
      {
        "chinese": "他们跑了好几家医院，怎么也没查出孩子生病的原因。",
        "pinyin": "Tā men pǎo le hǎo jǐ jiā yī yuàn, zěn me yě méi chá chū hái zi shēng bìng de yuán yīn.",
        "vietnamese": "他们跑了好几家医院，怎么也没查出孩子生病的原因。"
      },
      {
        "chinese": "尽管每天细心照顾，可阳台上的花怎么都不开。",
        "pinyin": "Jǐn guǎn měi tiān xì xīn zhào gù, kě yáng tái shàng de huā zěn me dōu bù kāi.",
        "vietnamese": "尽管每天细心照顾，可阳台上的花怎么都不开。"
      }
    ]
  },
  {
    "id": "hsk4-g-39",
    "order": 39,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc mục đích hướng tới: 为了……而…… (Vì... mà...)",
    "titleZh": "为了……而……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 为了 + Mục đích cao cả + 而 + Hành động nỗ lực",
    "explanationVi": "Liên kết chặt chẽ giữa mục đích lý tưởng và hành động phấn đấu cụ thể (như 为了追求真理而奉献 - vì mưu cầu chân lý mà cống hiến; 为了眼前利益而牺牲).",
    "tips": "Thường dùng trong các phát biểu trang trọng, khẩu hiệu, lý tưởng sống.",
    "examples": [
      {
        "chinese": "为了梦想而努力的人值得我们学习。",
        "pinyin": "Wèi le mèng xiǎng ér nǔ lì de rén zhí dé wǒ men xué xí.",
        "vietnamese": "为了梦想而努力的人值得我们学习。"
      },
      {
        "chinese": "我们减少使用塑料袋，是为了保护环境而改变习惯。",
        "pinyin": "Wǒ men jiǎn shǎo shǐ yòng sù liào dài, shì wèi le bǎo hù huán jìng ér gǎi biàn xí guàn.",
        "vietnamese": "我们减少使用塑料袋，是为了保护环境而改变习惯。"
      }
    ]
  },
  {
    "id": "hsk4-g-40",
    "order": 40,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc chừng nào hay chừng nấy: 动词 + 一X是一X",
    "titleZh": "动词+一X是一X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "能 + Động từ + 一 + Lượng từ + 是一 + Lượng từ (能省一分是一分, 能学一点是一点)",
    "explanationVi": "Biểu thị thái độ tích cực gom góp, làm được chừng nào quý chừng nấy, dù ít ỏi cũng không bỏ phí.",
    "tips": "Rất phổ biến trong khẩu ngữ thể hiện lối sống cần kiệm, hiếu học.",
    "examples": [
      {
        "chinese": "虽然日子过得很难，但也不能过一天是一天。",
        "pinyin": "Suī rán rì zi guò dé hěn nán, dàn yě bù néng guò yī tiān shì yī tiān.",
        "vietnamese": "虽然日子过得很难，但也不能过一天是一天。"
      },
      {
        "chinese": "要学的内容实在太多了，学一点儿是一点儿吧。",
        "pinyin": "Yào xué de nèi róng shí zài tài duō le, xué yìdiǎnr shì yìdiǎnr ba.",
        "vietnamese": "要学的内容实在太多了，学一点儿是一点儿吧。"
      }
    ]
  },
  {
    "id": "hsk4-g-41",
    "order": 41,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc coi nhẹ sự việc: （没）有什么（好）X的 (Chẳng có gì đáng...)",
    "titleZh": "（没）有什么（好）X的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "没什么好 + Động từ + 的 (没什么好感谢的, 没有什么大惊小怪的)",
    "explanationVi": "Dùng để an ủi hoặc gạt đi, khẳng định sự việc là bình thường, không có gì to tát đáng phải bận tâm hay lo lắng.",
    "tips": "Cách trả lời lịch sự khi được cảm ơn hoặc khuyên nhủ bạn bè.",
    "examples": [
      {
        "chinese": "想好了就直接做，有什么好害怕的。",
        "pinyin": "Xiǎng hǎo le jiù zhí jiē zuò, yǒu shén me hǎo hài pà de.",
        "vietnamese": "想好了就直接做，有什么好害怕的。"
      },
      {
        "chinese": "只是一次考试没考好，没有什么好难过的。",
        "pinyin": "Zhǐ shì yī cì kǎo shì méi kǎo hǎo, méi yǒu shén me hǎo nán guò de.",
        "vietnamese": "只是一次考试没考好，没有什么好难过的。"
      }
    ]
  },
  {
    "id": "hsk4-g-42",
    "order": 42,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc rạch ròi phân minh: X 是 X，Y 是 Y (Việc nào ra việc nấy)",
    "titleZh": "X是X，Y是Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Khái niệm A + 是 + A，Khái niệm B + 是 + B",
    "explanationVi": "Khẳng định hai phạm trù, hai sự việc là hoàn toàn tách biệt độc lập, không được phép nhập nhằng, lẫn lộn làm một (như 工作是工作，生活是生活; 公是公，私是私).",
    "tips": "Nguyên tắc sống văn minh, chuyên nghiệp.",
    "examples": [
      {
        "chinese": "他是他，我是我，我们的意见不一样。",
        "pinyin": "Tā shì tā, wǒ shì wǒ, wǒ men de yì jiàn bù yī yàng.",
        "vietnamese": "他是他，我是我，我们的意见不一样。"
      },
      {
        "chinese": "工作是工作，家庭是家庭，不要用工作的方式解决家里的问题。",
        "pinyin": "Gōng zuò shì gōng zuò, jiā tíng shì jiā tíng, bù yào yòng gōng zuò de fāng shì jiě jué jiā lǐ de wèn tí.",
        "vietnamese": "工作是工作，家庭是家庭，不要用工作的方式解决家里的问题。"
      }
    ]
  },
  {
    "id": "hsk4-g-43",
    "order": 43,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc bắt buộc bất kể ý muốn: X 也得 X，不 X 也得 X",
    "titleZh": "X也得X，不X也得X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + Muốn/Thích + 也得 + Động từ，Không muốn + 也得 + Động từ",
    "explanationVi": "Nhấn mạnh tính cưỡng chế, bắt buộc phải thi hành của quy định hoặc hoàn cảnh, không có chỗ cho việc lựa chọn theo ý thích cá nhân.",
    "tips": "Mang ngữ khí kiên quyết, dứt khoát.",
    "examples": [
      {
        "chinese": "这场会议很重要，你去也得去，不去也得去。",
        "pinyin": "Zhè chǎng huì yì hěn zhòng yào, nǐ qù yě dé qù, bù qù yě dé qù.",
        "vietnamese": "这场会议很重要，你去也得去，不去也得去。"
      },
      {
        "chinese": "结果改变不了了，你接受也得接受，不接受也得接受。",
        "pinyin": "Jié guǒ gǎi biàn bù le le, nǐ jiē shòu yě dé jiē shòu, bù jiē shòu yě dé jiē shòu.",
        "vietnamese": "结果改变不了了，你接受也得接受，不接受也得接受。"
      }
    ]
  },
  {
    "id": "hsk4-g-44",
    "order": 44,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc đơn giản hóa giải pháp: X 就是了 (Cứ... là được rồi)",
    "titleZh": "X就是了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ / Cụm động từ + 就是了",
    "explanationVi": "Khuyên bảo đối phương cứ yên tâm làm theo đúng cách đó là ổn thỏa, không cần phải đắn đo suy nghĩ phức tạp thêm (như 听他的就是了; 按照步骤操作就是了).",
    "tips": "Làm cho giải pháp trở nên đơn giản, giải tỏa căng thẳng.",
    "examples": [
      {
        "chinese": "别浪费时间了，有什么想法说就是了。",
        "pinyin": "Bié làng fèi shí jiān le, yǒu shén me xiǎng fǎ shuō jiù shì le.",
        "vietnamese": "别浪费时间了，有什么想法说就是了。"
      },
      {
        "chinese": "你不要生气，下次別答应他就是了。",
        "pinyin": "Nǐ bù yào shēng qì, xià cì bié dá yīng tā jiù shì le.",
        "vietnamese": "你不要生气，下次別答应他就是了。"
      }
    ]
  },
  {
    "id": "hsk4-g-45",
    "order": 45,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc mỉa mai, phê phán: 还 X 呢 (Thế mà cũng đòi...)",
    "titleZh": "还X呢",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Mệnh đề chê trách + 还 + Danh từ / Động từ + 呢！",
    "explanationVi": "Dùng trong khẩu ngữ để châm biếm, phê phán sự bất nhất giữa lời nói và việc làm hoặc giữa thân phận và năng lực thực tế (như 还大学生呢！; 还减肥呢！).",
    "tips": "Mang sắc thái mỉa mai, trêu đùa hoặc phàn nàn rõ rệt.",
    "examples": [
      {
        "chinese": "还国际公司呢，服务质量这么差。",
        "pinyin": "Hái guó jì gōng sī ne, fú wù zhì liàng zhè me chà.",
        "vietnamese": "还国际公司呢，服务质量这么差。"
      },
      {
        "chinese": "还中文专业的呢，中文说得还不如我。",
        "pinyin": "Hái zhōng wén zhuān yè de ne, zhōng wén shuō dé hái bù rú wǒ.",
        "vietnamese": "还中文专业的呢，中文说得还不如我。"
      }
    ]
  },
  {
    "id": "hsk4-g-46",
    "order": 46,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc việc ai nấy làm: 你 X 你的吧 (Bạn cứ làm việc của bạn đi)",
    "titleZh": "你X你的吧",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Đại từ + Động từ + Đại từ 的吧 (你做你的吧, 你复习你的吧)",
    "explanationVi": "Bảo người đối thoại cứ tiếp tục chuyên tâm làm việc của riêng họ, không cần bận tâm hay phân tâm vì người khác.",
    "tips": "Thể hiện sự tôn trọng không gian làm việc của nhau.",
    "examples": [
      {
        "chinese": "我不饿，你吃你的吧，不用等我。",
        "pinyin": "Wǒ bù è, nǐ chī nǐ de ba, bù yòng děng wǒ.",
        "vietnamese": "我不饿，你吃你的吧，不用等我。"
      },
      {
        "chinese": "没有什么重要的事，你忙你的吧。",
        "pinyin": "Méi yǒu shén me zhòng yào de shì, nǐ máng nǐ de ba.",
        "vietnamese": "没有什么重要的事，你忙你的吧。"
      }
    ]
  },
  {
    "id": "hsk4-g-47",
    "order": 47,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc tuân lệnh răm rắp: 让/叫你 X 你就 X",
    "titleZh": "让/叫你X你就X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "让 / 叫你 + Động từ + 你就 + Động từ (+ 吧)！",
    "explanationVi": "Khuyên nhủ hoặc yêu cầu người nghe cứ ngoan ngoãn chấp nhận hoặc làm theo lời dặn, đừng từ chối hay suy nghĩ nhiều (như 让你拿着你就拿着).",
    "tips": "Rất phổ biến khi người thân, bạn bè ép nhận quà hoặc khuyên nghỉ ngơi.",
    "examples": [
      {
        "chinese": "老师让你多练你就多练，肯定没坏处。",
        "pinyin": "Lǎo shī ràng nǐ duō liàn nǐ jiù duō liàn, kěn dìng méi huài chù.",
        "vietnamese": "老师让你多练你就多练，肯定没坏处。"
      },
      {
        "chinese": "叫你拿着你就拿着，不用跟我客气。",
        "pinyin": "Jiào nǐ ná zhe nǐ jiù ná zhe, bù yòng gēn wǒ kè qì.",
        "vietnamese": "叫你拿着你就拿着，不用跟我客气。"
      }
    ]
  },
  {
    "id": "hsk4-g-48",
    "order": 48,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc nỗ lực bằng mọi giá: 说什么 / 怎么（着）也得 X",
    "titleZh": "说什么/怎么（着）也得X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "说什么 / 怎么着 + 也得 + Động từ",
    "explanationVi": "Biểu thị quyết tâm dù có khó khăn hay bận rộn đến mức độ nào đi nữa thì tối thiểu cũng phải thực hiện cho bằng được hành động đó.",
    "tips": "Thể hiện lòng thành ý hoặc trách nhiệm bắt buộc phải chu toàn.",
    "examples": [
      {
        "chinese": "他受伤了，我说什么也得去看看他。",
        "pinyin": "Tā shòu shāng le, wǒ shuō shén me yě dé qù kàn kàn tā.",
        "vietnamese": "他受伤了，我说什么也得去看看他。"
      },
      {
        "chinese": "快要迟到了，说什么也得走了。",
        "pinyin": "Kuài yào chí dào le, shuō shén me yě dé zǒu le.",
        "vietnamese": "快要迟到了，说什么也得走了。"
      },
      {
        "chinese": "这么有用的技术，我怎么（着）也得学。",
        "pinyin": "Zhè me yǒu yòng de jì shù, wǒ zěn me (zhe) yě dé xué.",
        "vietnamese": "这么有用的技术，我怎么（着）也得学。"
      }
    ]
  },
  {
    "id": "hsk4-g-49",
    "order": 49,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc nhượng bộ chấp nhận nhược điểm: X 就 X（点儿）吧",
    "titleZh": "X就X（点儿）吧",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tính từ + 就 + Tính từ + (点儿) 吧，只要 / 能……就行",
    "explanationVi": "Thừa nhận và chấp nhận một khuyết điểm nhỏ nào đó (như đắt một chút, phiền một chút) để đổi lấy ưu điểm lớn hơn đáng giá hơn (như 贵就贵点儿吧).",
    "tips": "Vế sau luôn đi kèm điều kiện chấp nhận được (只要...就好).",
    "examples": [
      {
        "chinese": "买就买（点儿）吧，也不太贵。",
        "pinyin": "Mǎi jiù mǎi (diǎn ér) ba, yě bù tài guì.",
        "vietnamese": "买就买（点儿）吧，也不太贵。"
      },
      {
        "chinese": "慢就慢（点儿）吧，能做完就行。",
        "pinyin": "Màn jiù màn (diǎn ér) ba, néng zuò wán jiù xíng.",
        "vietnamese": "慢就慢（点儿）吧，能做完就行。"
      }
    ]
  },
  {
    "id": "hsk4-g-50",
    "order": 50,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Cấu trúc công nhận sự thật trước khi chuyển ý: X 是 X",
    "titleZh": "X是X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tính từ + 是 + Tính từ，不过 / 但是 + Vế sau",
    "explanationVi": "Công nhận tính chất đó là có thật (như cũ thì cũ thật, xa thì xa thật), nhưng phía sau sẽ chuyển ngoặt sang mặt tích cực khác (như 旧是旧，可骑起来挺快).",
    "tips": "Cách hành văn khách quan, đa chiều.",
    "examples": [
      {
        "chinese": "我们讨论是讨论了，可是大家各有各的想法。",
        "pinyin": "Wǒ men tǎo lùn shì tǎo lùn le, kě shì dà jiā gè yǒu gè de xiǎng fǎ.",
        "vietnamese": "我们讨论是讨论了，可是大家各有各的想法。"
      },
      {
        "chinese": "留学生活累是累，不过我们学到了很多知识。",
        "pinyin": "Liú xué shēng huó lèi shì lèi, bù guò wǒ men xué dào le hěn duō zhī shí.",
        "vietnamese": "留学生活累是累，不过我们学到了很多知识。"
      }
    ]
  },
  {
    "id": "hsk4-g-51",
    "order": 51,
    "category": "complements",
    "categoryName": "Bổ ngữ khả năng & Mức độ (死了, 不了)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ mức độ cực độ: 死了 & 厉害 (Đến chết đi được & Dữ dội)",
    "titleZh": "形容词/心理动词+死了/厉害",
    "grammarType": "句子成分",
    "categoryType": "程度补语2",
    "grammarDetail": "程度补语2",
    "structure": "Tính từ / Động từ tâm lý + 死了 | Tính từ / Động từ + 得厉害",
    "explanationVi": "• 死了: Khẩu ngữ biểu thị mức độ đạt đến cực hạn không chịu nổi (脚疼死了, 乐死了).\n• 得厉害: Biểu thị mức độ nghiêm trọng, dữ dội của trạng thái (疼得厉害, 热得厉害).",
    "tips": "'死了' không chỉ dùng cho cảm xúc tiêu cực mà còn dùng cho cả niềm vui (乐死了, 高兴死了).",
    "examples": [
      {
        "chinese": "面试的时候，我心里紧张死了。",
        "pinyin": "Miàn shì de shí hòu, wǒ xīn lǐ jǐn zhāng sǐ le.",
        "vietnamese": "面试的时候，我心里紧张死了。"
      },
      {
        "chinese": "不知道从哪儿来的声音，吵死了。",
        "pinyin": "Bù zhī dào cóng nǎr lái de shēng yīn, chǎo sǐ le.",
        "vietnamese": "不知道从哪儿来的声音，吵死了。"
      },
      {
        "chinese": "吃完冰激凌，我突然牙疼得厉害。",
        "pinyin": "Chī wán bīng jī líng, wǒ tū rán yá téng dé lì hài.",
        "vietnamese": "吃完冰激凌，我突然牙疼得厉害。"
      },
      {
        "chinese": "我们这儿有个同学病得很厉害，请你们赶快来看看。",
        "pinyin": "Wǒ men zhèr yǒu gè tóng xué bìng dé hěn lì hài, qǐng nǐ men gǎn kuài lái kàn kàn.",
        "vietnamese": "我们这儿有个同学病得很厉害，请你们赶快来看看。"
      }
    ]
  },
  {
    "id": "hsk4-g-52",
    "order": 52,
    "category": "complements",
    "categoryName": "Bổ ngữ khả năng & Mức độ (死了, 不了)",
    "categoryIcon": "🎯",
    "titleVi": "Bổ ngữ khả năng hoàn tất & chịu đựng: 动词 + 得 / 不 + 了(liǎo)",
    "titleZh": "动词+得/不+了",
    "grammarType": "句子成分",
    "categoryType": "可能补语2",
    "grammarDetail": "可能补语2",
    "structure": "Động từ + 得了 (có thể kham nổi) | Động từ + 不了 (không thể kham nổi)",
    "explanationVi": "Biểu thị hành động có khả năng diễn ra, hoàn tất, chứa đựng hết hoặc chịu đựng nổi hay không:\n• 吃不了: không ăn hết nổi\n• 去不了: không đi được\n• 受不了: không chịu đựng nổi.",
    "tips": "Chữ '了' ở đây là động từ cổ, bắt buộc phát âm là 'liǎo', tuyệt đối không đọc là 'le'.",
    "examples": [
      {
        "chinese": "你点了这么多菜，咱们两个人吃得了吗？",
        "pinyin": "Nǐ diǎn le zhè me duō cài, zán men liǎng gè rén chī dé le ma?",
        "vietnamese": "你点了这么多菜，咱们两个人吃得了吗？"
      },
      {
        "chinese": "我帮你一起做，下班之前肯定完成得了。",
        "pinyin": "Wǒ bāng nǐ yī qǐ zuò, xià bān zhī qián kěn dìng wán chéng dé le.",
        "vietnamese": "我帮你一起做，下班之前肯定完成得了。"
      },
      {
        "chinese": "行李太重了，我一个人拿不了。",
        "pinyin": "Xíng lǐ tài zhòng le, wǒ yī gè rén ná bù le.",
        "vietnamese": "行李太重了，我一个人拿不了。"
      },
      {
        "chinese": "明天的比赛他参加不了。",
        "pinyin": "Míng tiān de bǐ sài tā cān jiā bù le.",
        "vietnamese": "明天的比赛他参加不了。"
      }
    ]
  },
  {
    "id": "hsk4-g-53",
    "order": 53,
    "category": "rhetorical_pivotal",
    "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "categoryIcon": "❓",
    "titleVi": "Câu phản vấn tăng cường ngữ khí chất vấn: 难道……吗？",
    "titleZh": "难道……吗？",
    "grammarType": "句子的类型",
    "categoryType": "反问句2",
    "grammarDetail": "反问句2",
    "structure": "难道 + Chủ ngữ + Vị ngữ + 吗 / 呢？",
    "explanationVi": "Đặt '难道' ở đầu câu hoặc sau chủ ngữ để tạo câu hỏi ngược lại đầy tính chất vấn, khẳng định sự việc là phi lý hoặc không thể chấp nhận được (như 难道你打算放弃吗？).",
    "tips": "Giúp ngữ khí phản bác trở nên vô cùng sắc bén và thuyết phục.",
    "examples": [
      {
        "chinese": "作为学生，难道学习不是最重要的事情吗？",
        "pinyin": "Zuò wèi xué shēng, nán dào xué xí bù shì zuì zhòng yào de shì qíng ma?",
        "vietnamese": "作为学生，难道学习不是最重要的事情吗？"
      },
      {
        "chinese": "工作出了问题，你难道不应该负责吗？",
        "pinyin": "Gōng zuò chū le wèn tí, nǐ nán dào bù yīng gāi fù zé ma?",
        "vietnamese": "工作出了问题，你难道不应该负责吗？"
      }
    ]
  },
  {
    "id": "hsk4-g-54",
    "order": 54,
    "category": "rhetorical_pivotal",
    "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "categoryIcon": "❓",
    "titleVi": "Câu phản vấn dùng đại từ nghi vấn (谁, 哪里, 什么)",
    "titleZh": "由疑问代词构成的反问句",
    "grammarType": "句子的类型",
    "categoryType": "反问句2",
    "grammarDetail": "反问句2",
    "structure": "谁能不... (ai mà chẳng...) | 哪里知道... (biết làm sao được) | 还有什么好... (còn gì mà...)",
    "explanationVi": "Dùng đại từ nghi vấn nhưng không để hỏi, mà để khẳng định ngược lại một chân lý rành rành (như 谁能不重视呢？ - ai mà chẳng coi trọng; 还有什么好争论的 - còn gì để tranh cãi nữa).",
    "tips": "Hình thức nghi vấn nhưng mang giá trị khẳng định tuyệt đối.",
    "examples": [
      {
        "chinese": "这么有名的作家，谁不认识他？",
        "pinyin": "Zhè me yǒu míng de zuò jiā, shuí bù rèn shí tā?",
        "vietnamese": "这么有名的作家，谁不认识他？"
      },
      {
        "chinese": "他去哪儿从来不说，我怎么会知道呢？",
        "pinyin": "Tā qù nǎr cóng lái bù shuō, wǒ zěn me huì zhī dào ne?",
        "vietnamese": "他去哪儿从来不说，我怎么会知道呢？"
      },
      {
        "chinese": "事情这么多，我哪儿有时间出去旅游啊？",
        "pinyin": "Shì qíng zhè me duō, wǒ nǎr yǒu shí jiān chū qù lǚ yóu a?",
        "vietnamese": "事情这么多，我哪儿有时间出去旅游啊？"
      }
    ]
  },
  {
    "id": "hsk4-g-55",
    "order": 55,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” với động từ trùng điệp: 把 + Tân ngữ + 动词（+一/了）+动词",
    "titleZh": "主语+把+宾语+动词（+一/了）+动词",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句2",
    "grammarDetail": "“把”字句2",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + (一/了) + Động từ",
    "explanationVi": "Tác động xử lý lên tân ngữ trong một khoảng thời gian ngắn hoặc làm thử nghiệm nhẹ nhàng (như 把窗户开一开 - mở hé cửa sổ một chút; 把生词读一读 - đọc qua từ mới; 把苹果擦了擦 - lau quả táo).",
    "tips": "Làm cho ngữ khí mệnh lệnh trở nên mềm mỏng, tự nhiên.",
    "examples": [
      {
        "chinese": "你再把那件衣服洗一洗。",
        "pinyin": "Nǐ zài bǎ nà jiàn yī fú xǐ yī xǐ.",
        "vietnamese": "你再把那件衣服洗一洗。"
      },
      {
        "chinese": "你把窗户擦一擦，我把地板扫一扫",
        "pinyin": "Nǐ bǎ chuāng hù cā yī cā, wǒ bǎ dì bǎn sǎo yī sǎo",
        "vietnamese": "你把窗户擦一擦，我把地板扫一扫"
      },
      {
        "chinese": "他把钱算了算，又取了一点儿出来。",
        "pinyin": "Tā bǎ qián suàn le suàn, yòu qǔ le yìdiǎnr chū lái.",
        "vietnamese": "他把钱算了算，又取了一点儿出来。"
      }
    ]
  },
  {
    "id": "hsk4-g-56",
    "order": 56,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” kết hợp trợ từ động thái “了”: Hoàn tất xử lý",
    "titleZh": "主语+把+宾语+动词+了",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句2",
    "grammarDetail": "“把”字句2",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + 了",
    "explanationVi": "Nhấn mạnh hành vi xử lý tác động lên tân ngữ đã được tiến hành xong xuôi trọn vẹn (như 把作业交了 - đã nộp bài tập rồi; 把西瓜切了 - đã bổ dưa hấu rồi).",
    "tips": "Động từ đi kèm phải là động từ đơn âm tiết có tác động cụ thể.",
    "examples": [
      {
        "chinese": "我把银行卡密码忘了。",
        "pinyin": "Wǒ bǎ yín xíng kǎ mì mǎ wàng le.",
        "vietnamese": "我把银行卡密码忘了。"
      },
      {
        "chinese": "他把新买的手机丢了。",
        "pinyin": "Tā bǎ xīn mǎi de shǒu jī diū le.",
        "vietnamese": "他把新买的手机丢了。"
      }
    ]
  },
  {
    "id": "hsk4-g-57",
    "order": 57,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” kèm bổ ngữ động lượng & thời lượng",
    "titleZh": "主语+把+宾语+动词+动量补语/时量补语",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句2",
    "grammarDetail": "“把”字句2",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Động từ + Bổ ngữ (两遍 / 半个小时)",
    "explanationVi": "Nói rõ số lần tác động hoặc khoảng thời gian mà hành động xử lý tân ngữ đó đã diễn ra (như 把文章看两遍 - đọc bài viết hai lượt; 把语法讲了半个小时 - giảng ngữ pháp suốt nửa tiếng).",
    "tips": "Tân ngữ luôn đặt trước động từ, bổ ngữ số lượng luôn đặt sau động từ.",
    "examples": [
      {
        "chinese": "因为不收拾房间，妈妈把他批评了一顿。",
        "pinyin": "Yīn wèi bù shōu shí fáng jiān, mā mā bǎ tā pī píng le yī dùn.",
        "vietnamese": "因为不收拾房间，妈妈把他批评了一顿。"
      },
      {
        "chinese": "同学们把课文读了两遍。",
        "pinyin": "Tóng xué men bǎ kè wén dú le liǎng biàn.",
        "vietnamese": "同学们把课文读了两遍。"
      },
      {
        "chinese": "他把这个问题认真地考虑了好几天。",
        "pinyin": "Tā bǎ zhè gè wèn tí rèn zhēn dì kǎo lǜ le hǎo jǐ tiān.",
        "vietnamese": "他把这个问题认真地考虑了好几天。"
      }
    ]
  },
  {
    "id": "hsk4-g-58",
    "order": 58,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Câu chữ “把” có trạng ngữ phương thức đứng trước động từ",
    "titleZh": "主语+把+宾语+状语+动词",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句2",
    "grammarDetail": "“把”字句2",
    "structure": "Chủ ngữ + 把 + Tân ngữ + Trạng ngữ (认真 / 彻底 / 仔细) + Động từ",
    "explanationVi": "Chèn trạng ngữ miêu tả thái độ, cách thức hoặc mức độ kỹ càng ngay trước động từ chính (như 把问题认真讨论一下; 把房间彻底打扫一遍).",
    "tips": "Giúp câu chữ 把 miêu tả quá trình thực hiện một cách tỉ mỉ, chi tiết.",
    "examples": [
      {
        "chinese": "你别把垃圾往地上扔。",
        "pinyin": "Nǐ bié bǎ lā jī wǎng dì shàng rēng.",
        "vietnamese": "你别把垃圾往地上扔。"
      },
      {
        "chinese": "请大家把说明书认真读一读。",
        "pinyin": "Qǐng dà jiā bǎ shuō míng shū rèn zhēn dú yī dú.",
        "vietnamese": "请大家把说明书认真读一读。"
      }
    ]
  },
  {
    "id": "hsk4-g-59",
    "order": 59,
    "category": "ba_bei_sentences",
    "categoryName": "Câu chữ 把 & Bị động (叫/让/被)",
    "categoryIcon": "⭐",
    "titleVi": "Câu bị động khẩu ngữ dùng “叫” & “让”",
    "titleZh": "主语+叫/让+宾语+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "被动句2",
    "grammarDetail": "被动句2",
    "structure": "Chủ ngữ + 叫 / 让 + Người gây ra + (给) + Động từ + Thành phần khác",
    "explanationVi": "Trong giao tiếp khẩu ngữ thân mật hàng ngày, người Trung Quốc rất hay dùng '叫' hoặc '让' để thay thế cho '被' trong câu bị động (như 蛋糕叫弟弟吃了; 那封信让他给弄坏了).",
    "tips": "Khác với '被', sau '叫' hoặc '让' BẮT BUỘC phải có tác nhân cụ thể, không được để trống.",
    "examples": [
      {
        "chinese": "我的自行车让朋友借去了。",
        "pinyin": "Wǒ de zì xíng chē ràng péng yǒu jiè qù le.",
        "vietnamese": "我的自行车让朋友借去了。"
      },
      {
        "chinese": "相机叫谁拿走了？",
        "pinyin": "Xiāng jī jiào shuí ná zǒu le?",
        "vietnamese": "相机叫谁拿走了？"
      }
    ]
  },
  {
    "id": "hsk4-g-60",
    "order": 60,
    "category": "rhetorical_pivotal",
    "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "categoryIcon": "❓",
    "titleVi": "Câu kiêm ngữ biểu thị thái độ khen chê: 表扬 & 批评",
    "titleZh": "表爱憎义：主语+表扬/批评+宾语1+动词+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "兼语句2",
    "grammarDetail": "兼语句2",
    "structure": "Chủ ngữ + 表扬 / 批评 / 佩服 / 夸奖 + Tân ngữ 1 (Kiêm ngữ) + Hành vi",
    "explanationVi": "Động từ thứ nhất là động từ biểu lộ cảm xúc khen ngợi hoặc khiển trách, vế sau nói rõ lý do hoặc hành vi cụ thể (như 表扬他拾金不昧; 批评他经常旷课; 佩服他坚强).",
    "tips": "Một cấu trúc câu kiêm ngữ giàu tính giáo dục và nhận xét đạo đức.",
    "examples": [
      {
        "chinese": "老师表扬我取得了好成绩。",
        "pinyin": "Lǎo shī biǎo yáng wǒ qǔ dé le hǎo chéng jì.",
        "vietnamese": "老师表扬我取得了好成绩。"
      },
      {
        "chinese": "警察表扬那个小伙子帮助了别人。",
        "pinyin": "Jǐng chá biǎo yáng nà gè xiǎo huǒ zi bāng zhù le bié rén.",
        "vietnamese": "警察表扬那个小伙子帮助了别人。"
      },
      {
        "chinese": "妈妈总是批评我不收拾房间。",
        "pinyin": "Mā mā zǒng shì pī píng wǒ bù shōu shí fáng jiān.",
        "vietnamese": "妈妈总是批评我不收拾房间。"
      },
      {
        "chinese": "经理批评我没带会议资料。",
        "pinyin": "Jīng lǐ pī píng wǒ méi dài huì yì zī liào.",
        "vietnamese": "经理批评我没带会议资料。"
      }
    ]
  },
  {
    "id": "hsk4-g-61",
    "order": 61,
    "category": "rhetorical_pivotal",
    "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "categoryIcon": "❓",
    "titleVi": "Câu kiêm ngữ tôn xưng & bầu chọn: 选 / 认 / 公认",
    "titleZh": "表称谓或认定义：主语+收/选+宾语1+做/当/为+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "兼语句2",
    "grammarDetail": "兼语句2",
    "structure": "Chủ ngữ + 选 / 收 / 公认 + Tân ngữ 1 + 做 / 当 / 为 + Chức vụ / Danh hiệu",
    "explanationVi": "Biểu thị sự bầu chọn, công nhận hoặc tiếp nhận ai đó giữ một vai trò, thân phận hay danh hiệu mới (như 选他当班长 - bầu cậu ấy làm lớp trưởng; 收他做助手 - nhận làm trợ lý; 公认为最优秀).",
    "tips": "Thường dùng trong môi trường đoàn thể, tổ chức, nhà trường.",
    "examples": [
      {
        "chinese": "同学们选我做小组长。",
        "pinyin": "Tóng xué men xuǎn wǒ zuò xiǎo zǔ zhǎng.",
        "vietnamese": "同学们选我做小组长。"
      },
      {
        "chinese": "大家想选他当队长。",
        "pinyin": "Dà jiā xiǎng xuǎn tā dāng duì zhǎng.",
        "vietnamese": "大家想选他当队长。"
      },
      {
        "chinese": "张教授同意收我为学生。",
        "pinyin": "Zhāng jiào shòu tóng yì shōu wǒ wèi xué shēng.",
        "vietnamese": "张教授同意收我为学生。"
      }
    ]
  },
  {
    "id": "hsk4-g-62",
    "order": 62,
    "category": "rhetorical_pivotal",
    "categoryName": "Câu phản vấn & Kiêm ngữ (难道, 使/让)",
    "categoryIcon": "❓",
    "titleVi": "Câu kiêm ngữ biểu thị quan hệ nguyên nhân - kết quả: 使 & 让",
    "titleZh": "表致使：主语+使/让+人称代词+动词短语",
    "grammarType": "句子的类型",
    "categoryType": "兼语句2",
    "grammarDetail": "兼语句2",
    "structure": "Sự việc / Hoàn cảnh (Chủ ngữ) + 使 / 让 + Con người + Cảm thấy / Hành động",
    "explanationVi": "Chủ ngữ thường là một sự việc, tình huống khách quan tác động làm biến đổi tâm lý, tình cảm hoặc gây ra kết quả đối với con người (như 大雨使交通瘫痪 - mưa to khiến giao thông tê liệt; 热情让我感到温暖).",
    "tips": "'使' trang trọng hơn '让' và thường xuất hiện trong các bài văn nghị luận.",
    "examples": [
      {
        "chinese": "这件事使我改变了对她的印象。",
        "pinyin": "Zhè jiàn shì shǐ wǒ gǎi biàn le duì tā de yìn xiàng.",
        "vietnamese": "这件事使我改变了对她的印象。"
      },
      {
        "chinese": "那些美好的回忆让我永远难忘。",
        "pinyin": "Nà xiē měi hǎo de huí yì ràng wǒ yǒng yuǎn nán wàng.",
        "vietnamese": "那些美好的回忆让我永远难忘。"
      }
    ]
  },
  {
    "id": "hsk4-g-63",
    "order": 63,
    "category": "comparisons",
    "categoryName": "Câu so sánh (不如, 相比)",
    "categoryIcon": "⚖️",
    "titleVi": "Câu so sánh không bằng: A 不如 B（+ Tính từ）",
    "titleZh": "A不如B（+形容词）",
    "grammarType": "句子的类型",
    "categoryType": "比较句3",
    "grammarDetail": "比较句3",
    "structure": "A + 不如 + B (+ Tính từ / Cụm động từ)",
    "explanationVi": "Biểu thị đối tượng A thua kém, không bằng đối tượng B về một mặt nào đó (như 坐车不如走路快 - đi xe không nhanh bằng đi bộ; 口语不如听力突出).",
    "tips": "Có thể dùng độc lập: 'A 不如 B' (A không tốt/hay bằng B).",
    "examples": [
      {
        "chinese": "现在堵车，打车不如坐地铁快。",
        "pinyin": "Xiàn zài dǔ chē, dǎ chē bù rú zuò dì tiě kuài.",
        "vietnamese": "现在堵车，打车不如坐地铁快。"
      },
      {
        "chinese": "我觉得玩游戏不如看小说有意思。",
        "pinyin": "Wǒ jué dé wán yóu xì bù rú kàn xiǎo shuō yǒu yì sī.",
        "vietnamese": "我觉得玩游戏不如看小说有意思。"
      }
    ]
  },
  {
    "id": "hsk4-g-64",
    "order": 64,
    "category": "comparisons",
    "categoryName": "Câu so sánh (不如, 相比)",
    "categoryIcon": "⚖️",
    "titleVi": "Cấu trúc đối chiếu so sánh: 跟……相比 (So với... thì...)",
    "titleZh": "跟……相比",
    "grammarType": "句子的类型",
    "categoryType": "比较句3",
    "grammarDetail": "比较句3",
    "structure": "跟 / 与 + Đối tượng so sánh + 相比，Chủ ngữ + Vị ngữ nhận xét",
    "explanationVi": "Đặt ở đầu câu để tạo sự đối chiếu rõ nét giữa hiện tại với quá khứ hoặc giữa hai chủ thể (như 跟过去相比 - so với trước đây; 跟同龄人相比).",
    "tips": "Cấu trúc kinh điển trong các bài văn phân tích số liệu và biến đổi xã hội.",
    "examples": [
      {
        "chinese": "跟线下购物相比，上网买东西更符合年轻人的习惯。",
        "pinyin": "Gēn xiàn xià gòu wù xiāng bǐ, shàng wǎng mǎi dōng xī gèng fú hé nián qīng rén de xí guàn.",
        "vietnamese": "跟线下购物相比，上网买东西更符合年轻人的习惯。"
      },
      {
        "chinese": "跟其他公司相比，我们的产品不但便宜，而且服务也好。",
        "pinyin": "Gēn qí tā gōng sī xiāng bǐ, wǒ men de chǎn pǐn bù dàn biàn yí, ér qiě fú wù yě hǎo.",
        "vietnamese": "跟其他公司相比，我们的产品不但便宜，而且服务也好。"
      }
    ]
  },
  {
    "id": "hsk4-g-65",
    "order": 65,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Câu phủ định kép nhấn mạnh: 不得不 & 没有人不知",
    "titleZh": "用双重否定表示强调",
    "grammarType": "句子的类型",
    "categoryType": "双重否定句",
    "grammarDetail": "双重否定句",
    "structure": "Chủ ngữ + 不得不 + Động từ (buộc phải) | 没有人 + 不 + Động từ (ai ai cũng)",
    "explanationVi": "Sử dụng hai từ phủ định đi liền nhau để tạo ra ý nghĩa khẳng định mạnh mẽ, trang trọng và dứt khoát hơn nhiều so với câu khẳng định bình thường (như 不得不承认 - buộc phải thừa nhận; 没有人不知道 - không ai là không biết).",
    "tips": "Khẳng định bằng hai lần phủ định tạo sức nặng ghê gớm cho luận điểm.",
    "examples": [
      {
        "chinese": "没有学生不喜欢放假。",
        "pinyin": "Méi yǒu xué shēng bù xǐ huān fàng jiǎ.",
        "vietnamese": "没有学生不喜欢放假。"
      },
      {
        "chinese": "这么重要的内容老师不可能没讲过。",
        "pinyin": "Zhè me zhòng yào de nèi róng lǎo shī bù kě néng méi jiǎng guò.",
        "vietnamese": "这么重要的内容老师不可能没讲过。"
      }
    ]
  },
  {
    "id": "hsk4-g-66",
    "order": 66,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức bác bỏ - khẳng định: 不是……，而是…… (Không phải... mà là...)",
    "titleZh": "不是……，而是……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "Chủ ngữ + 不是 + Khái niệm sai lệch, + 而是 + Bản chất đúng đắn",
    "explanationVi": "Bác bỏ một cách dứt khoát phỏng đoán hoặc quan niệm sai lầm ở vế đầu, đồng thời khẳng định bản chất sự thật chính xác ở vế sau (như 不是能力不够，而是太轻敌; 不是追求名利，而是充实).",
    "tips": "Dùng rất đắc địa khi giải thích sự hiểu lầm hoặc làm rõ nguyên nhân.",
    "examples": [
      {
        "chinese": "他不是不想帮忙，而是确实没时间。",
        "pinyin": "Tā bù shì bù xiǎng bāng máng, ér shì què shí méi shí jiān.",
        "vietnamese": "他不是不想帮忙，而是确实没时间。"
      },
      {
        "chinese": "我不是不爱喝咖啡，而是担心晚上睡不着。",
        "pinyin": "Wǒ bù shì bù ài hē kā fēi, ér shì dān xīn wǎn shàng shuì bù zhe.",
        "vietnamese": "我不是不爱喝咖啡，而是担心晚上睡不着。"
      }
    ]
  },
  {
    "id": "hsk4-g-67",
    "order": 67,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức song hành phẩm chất: 既……，又/也…… (Vừa... lại vừa...)",
    "titleZh": "既……，又/也……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "Chủ ngữ + 既 + Tính từ / Động từ 1, + 又 / 也 + Tính từ / Động từ 2",
    "explanationVi": "Khẳng định chủ thể đồng thời sở hữu hai phẩm chất, năng lực hoặc đặc tính tốt đẹp cùng một lúc (như 既坚固又轻便 - vừa vững chắc vừa nhẹ; 既喜欢文学，也热爱科技).",
    "tips": "'既...又...' mang văn phong trang nhã và chuẩn mực hơn '又...又...'.",
    "examples": [
      {
        "chinese": "这个牌子的奶茶既好喝，又健康。",
        "pinyin": "Zhè gè pái zi de nǎi chá jì hǎo hē, yòu jiàn kāng.",
        "vietnamese": "这个牌子的奶茶既好喝，又健康。"
      },
      {
        "chinese": "我每天骑自行车上学，这样既能锻炼身体，也对环境保护有帮助。",
        "pinyin": "Wǒ měi tiān qí zì xíng chē shàng xué, zhè yàng jì néng duàn liàn shēn tǐ, yě duì huán jìng bǎo hù yǒu bāng zhù.",
        "vietnamese": "我每天骑自行车上学，这样既能锻炼身体，也对环境保护有帮助。"
      }
    ]
  },
  {
    "id": "hsk4-g-68",
    "order": 68,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức phân tích hai mặt: 一方面……，另一方面……",
    "titleZh": "一方面……，另一方面……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "一方面 + Khía cạnh 1, + 另一方面 + Khía cạnh 2",
    "explanationVi": "Dùng để phân tích một vấn đề dưới hai góc nhìn bổ trợ nhau một cách toàn diện, khách quan (như 一方面增加收入，另一方面促进交流).",
    "tips": "Cấu trúc chuẩn mực hàng đầu trong các bài luận văn, thuyết trình.",
    "examples": [
      {
        "chinese": "参加文化活动一方面可以增长知识，另一方面可以认识新的朋友。",
        "pinyin": "Cān jiā wén huà huó dòng yī fāng miàn kě yǐ zēng zhǎng zhī shí, lìng yī fāng miàn kě yǐ rèn shí xīn de péng yǒu.",
        "vietnamese": "参加文化活动一方面可以增长知识，另一方面可以认识新的朋友。"
      },
      {
        "chinese": "想要解决大城市堵车的问题，一方面要提高公共交通服务质量，另一方面要让人们养成绿色出行的习惯。",
        "pinyin": "Xiǎng yào jiě jué dà chéng shì dǔ chē de wèn tí, yī fāng miàn yào tí gāo gōng gòng jiāo tōng fú wù zhì liàng, lìng yī fāng miàn yào ràng rén men yǎng chéng lǜ sè chū xíng de xí guàn.",
        "vietnamese": "想要解决大城市堵车的问题，一方面要提高公共交通服务质量，另一方面要让人们养成绿色出行的习惯。"
      }
    ]
  },
  {
    "id": "hsk4-g-69",
    "order": 69,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức trình tự thứ bậc: 首先……，其次…… (Trước hết... kế đến...)",
    "titleZh": "首先……，其次……",
    "grammarType": "句子的类型",
    "categoryType": "承接复句",
    "grammarDetail": "承接复句",
    "structure": "首先 + Luận điểm / Việc 1, + 其次 + Luận điểm / Việc 2",
    "explanationVi": "Sắp xếp các lý lẽ hoặc các bước tiến hành theo thứ tự ưu tiên quan trọng (như 首先查明原因，其次制定方案; 首先专业对口，其次英语流利).",
    "tips": "Nhấn mạnh tính thứ bậc ưu tiên hơn là trình tự thời gian thuần túy.",
    "examples": [
      {
        "chinese": "选择职业的时候，应该首先了解自己的性格、能力，其次再考虑工资、收入等方面的问题。",
        "pinyin": "Xuǎn zé zhí yè de shí hòu, yīng gāi shǒu xiān le jiě zì jǐ de xìng gé, néng lì, qí cì zài kǎo lǜ gōng zī, shōu rù děng fāng miàn de wèn tí.",
        "vietnamese": "选择职业的时候，应该首先了解自己的性格、能力，其次再考虑工资、收入等方面的问题。"
      },
      {
        "chinese": "我学汉语首先是因为对中国文化感兴趣，其次是为了获得更多的工作机会。",
        "pinyin": "Wǒ xué hàn yǔ shǒu xiān shì yīn wèi duì zhōng guó wén huà gǎn xīng qù, qí cì shì wèi le huò dé gèng duō de gōng zuò jī huì.",
        "vietnamese": "我学汉语首先是因为对中国文化感兴趣，其次是为了获得更多的工作机会。"
      }
    ]
  },
  {
    "id": "hsk4-g-70",
    "order": 70,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức trình tự thời gian thao tác: 首先……，然后……",
    "titleZh": "首先……，然后……",
    "grammarType": "句子的类型",
    "categoryType": "承接复句",
    "grammarDetail": "承接复句",
    "structure": "首先 + Bước 1, + 然后 + Bước 2",
    "explanationVi": "Miêu tả các bước tiến hành một quy trình hoặc một kế hoạch hành động theo dòng thời gian trước sau (như 首先准备好仪器，然后操作; 首先确定路线，然后订酒店).",
    "tips": "Áp dụng khi hướng dẫn nấu ăn, làm thí nghiệm, vận hành máy móc.",
    "examples": [
      {
        "chinese": "首先要找到一个合适的目标，然后坚持学习，这样才能学好中文。",
        "pinyin": "Shǒu xiān yào zhǎo dào yī gè hé shì de mù biāo, rán hòu jiān chí xué xí, zhè yàng cái néng xué hǎo zhōng wén.",
        "vietnamese": "首先要找到一个合适的目标，然后坚持学习，这样才能学好中文。"
      },
      {
        "chinese": "校长首先对同学们表示欢迎，然后介绍了学校的一些基本情况。",
        "pinyin": "Xiào zhǎng shǒu xiān duì tóng xué men biǎo shì huān yíng, rán hòu jiè shào le xué xiào de yī xiē jī běn qíng kuàng.",
        "vietnamese": "校长首先对同学们表示欢迎，然后介绍了学校的一些基本情况。"
      }
    ]
  },
  {
    "id": "hsk4-g-71",
    "order": 71,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức hệ quả logic tất yếu: ……，于是…… (Thế là, do đó liền...)",
    "titleZh": "……，于是……",
    "grammarType": "句子的类型",
    "categoryType": "承接复句",
    "grammarDetail": "承接复句",
    "structure": "Tình huống ở vế 1, + 于是 + Hành động phản ứng ở vế 2",
    "explanationVi": "Biểu thị hành động ở vế sau phát sinh một cách nhanh chóng, tự nhiên như một phản ứng tất yếu trước tình huống nảy sinh ở vế trước (như 觉得很有道理，于是改变计划; 天黑了，于是决定收工).",
    "tips": "Khác với '所以' (thuần túy suy luận), '于是' nhấn mạnh hành động tiếp nối theo sau.",
    "examples": [
      {
        "chinese": "人们喜欢一边喝咖啡，一边聊天儿，于是城市里的咖啡馆越来越多。",
        "pinyin": "Rén men xǐ huān yī biān hē kā fēi, yī biān liáo tiān ér, yú shì chéng shì lǐ de kā fēi guǎn yuè lái yuè duō.",
        "vietnamese": "人们喜欢一边喝咖啡，一边聊天儿，于是城市里的咖啡馆越来越多。"
      },
      {
        "chinese": "大家不断地鼓励我，于是我决定报名参加这个比赛。",
        "pinyin": "Dà jiā bù duàn dì gǔ lì wǒ, yú shì wǒ jué dìng bào míng cān jiā zhè gè bǐ sài.",
        "vietnamese": "大家不断地鼓励我，于是我决定报名参加这个比赛。"
      }
    ]
  },
  {
    "id": "hsk4-g-72",
    "order": 72,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến tột cùng: ……, 甚至…… (...thậm chí...)",
    "titleZh": "……,甚至……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "Vế thông thường, + 甚至 (连) + Chi tiết cực đoan + 也 / 都 + Vị ngữ",
    "explanationVi": "Đưa ra một ví dụ hoặc một chi tiết ở mức độ cực đoan vượt xa mức bình thường để làm nổi bật mức độ sâu sắc của vế trước (như 连室友都很少说话，甚至连吃饭都在看书).",
    "tips": "Làm tăng tính thuyết phục và hình tượng cho lời kể.",
    "examples": [
      {
        "chinese": "为了锻炼身体，我一有空就去健身房，甚至专门请了一个健身教练。",
        "pinyin": "Wèi le duàn liàn shēn tǐ, wǒ yī yǒu kōng jiù qù jiàn shēn fáng, shèn zhì zhuān mén qǐng le yī gè jiàn shēn jiào liàn.",
        "vietnamese": "为了锻炼身体，我一有空就去健身房，甚至专门请了一个健身教练。"
      },
      {
        "chinese": "收到大学的入学通知，我高兴极了，甚至觉得自己是世界上最幸福的人。",
        "pinyin": "Shōu dào dà xué de rù xué tōng zhī, wǒ gāo xīng jí le, shèn zhì jué dé zì jǐ shì shì jiè shàng zuì xìng fú de rén.",
        "vietnamese": "收到大学的入学通知，我高兴极了，甚至觉得自己是世界上最幸福的人。"
      }
    ]
  },
  {
    "id": "hsk4-g-73",
    "order": 73,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến toàn diện: 不仅 / 不光……，还 / 而且……",
    "titleZh": "不仅/不光……，还/而且……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "不仅 / 不光 + Vế 1, + 还 / 而且 + Vế 2",
    "explanationVi": "Không những có được điều kiện 1, mà còn đạt thêm được cả điều kiện 2 cao hơn (như 不仅精通外语，而且在计算机领域颇有建树; 不仅开阔视野，还增进团队精神).",
    "tips": "'不仅' mang sắc thái văn viết trang nhã hơn '不光'.",
    "examples": [
      {
        "chinese": "我们学习生词，不仅要理解词语的意思，而且应该知道怎么使用。",
        "pinyin": "Wǒ men xué xí shēng cí, bù jǐn yào lǐ jiě cí yǔ de yì sī, ér qiě yīng gāi zhī dào zěn me shǐ yòng.",
        "vietnamese": "我们学习生词，不仅要理解词语的意思，而且应该知道怎么使用。"
      },
      {
        "chinese": "这里不光有美丽的风景，还有各种少见的动物、植物。",
        "pinyin": "Zhè lǐ bù guāng yǒu měi lì de fēng jǐng, hái yǒu gè zhǒng shǎo jiàn de dòng wù, zhí wù.",
        "vietnamese": "这里不光有美丽的风景，还有各种少见的动物、植物。"
      }
    ]
  },
  {
    "id": "hsk4-g-74",
    "order": 74,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức bổ sung thông tin: ……，并且…… (...hơn nữa còn...)",
    "titleZh": "……，并且……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "Vế hành động 1, + 并且 + Vế hành động / kết quả 2",
    "explanationVi": "Liên kết hai hành động hoặc hai kết quả tích cực song hành nhằm tăng thêm thông tin khẳng định (như 按时完成，并且质量达标; 得到赞同，并且全校推广).",
    "tips": "'并且' nối tiếp hành động có quan hệ bổ sung tương hỗ.",
    "examples": [
      {
        "chinese": "经过四年的努力，他终于顺利毕业，并且有了一家自己的公司。",
        "pinyin": "Jīng guò sì nián de nǔ lì, tā zhōng yú shùn lì bì yè, bìng qiě yǒu le yī jiā zì jǐ de gōng sī.",
        "vietnamese": "经过四年的努力，他终于顺利毕业，并且有了一家自己的公司。"
      },
      {
        "chinese": "随着经济的发展，人们的生活水平提高了，并且对健康和生活质量的要求也越来越高。",
        "pinyin": "Suí zhe jīng jì de fā zhǎn, rén men de shēng huó shuǐ píng tí gāo le, bìng qiě duì jiàn kāng hé shēng huó zhì liàng de yào qiú yě yuè lái yuè gāo.",
        "vietnamese": "随着经济的发展，人们的生活水平提高了，并且对健康和生活质量的要求也越来越高。"
      }
    ]
  },
  {
    "id": "hsk4-g-75",
    "order": 75,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức so sánh đòn bẩy: 连……也/都……，……更……",
    "titleZh": "连……也/都……，……更……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "连 + Đối tượng tiêu biểu/mạnh mẽ + 也/都 + Vị ngữ，(Chủ thể yếu hơn) + 就更……了",
    "explanationVi": "Lấy đối tượng có ưu thế vượt trội ra làm đòn bẩy; nếu đối tượng đó còn không làm nổi thì đối tượng yếu kém hơn hiển nhiên càng không thể làm nổi (như 连专家都没把握，普通人就更难了).",
    "tips": "Cách lập luận tương phản cực kỳ đanh thép.",
    "examples": [
      {
        "chinese": "我有时候连老师说的话也听不懂，听广播就更难了。",
        "pinyin": "Wǒ yǒu shí hòu lián lǎo shī shuō de huà yě tīng bù dǒng, tīng guǎng bō jiù gèng nán le.",
        "vietnamese": "我有时候连老师说的话也听不懂，听广播就更难了。"
      },
      {
        "chinese": "受伤以后，他连走路都困难，踢足球更不可能了。",
        "pinyin": "Shòu shāng yǐ hòu, tā lián zǒu lù dōu kùn nán, tī zú qiú gèng bù kě néng le.",
        "vietnamese": "受伤以后，他连走路都困难，踢足球更不可能了。"
      }
    ]
  },
  {
    "id": "hsk4-g-76",
    "order": 76,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức lựa chọn loại trừ duy nhất: 不是……，就是……",
    "titleZh": "不是……，就是……",
    "grammarType": "句子的类型",
    "categoryType": "选择复句",
    "grammarDetail": "选择复句",
    "structure": "Chủ ngữ + 不是 + Phương án A, + 就是 + Phương án B",
    "explanationVi": "Khẳng định tình huống chỉ có thể rơi vào MỘT TRONG HAI khả năng A hoặc B, không có khả năng thứ ba nào khác (như 不是在看书，就是在睡觉; 不是叹气就是抱怨).",
    "tips": "Thường dùng để miêu tả các thói quen bất biến, đơn điệu lặp đi lặp lại.",
    "examples": [
      {
        "chinese": "毕业以后，同学们不是留在中国继续学习，就是回国工作。",
        "pinyin": "Bì yè yǐ hòu, tóng xué men bù shì liú zài zhōng guó jì xù xué xí, jiù shì huí guó gōng zuò.",
        "vietnamese": "毕业以后，同学们不是留在中国继续学习，就是回国工作。"
      },
      {
        "chinese": "周末他不是在游泳馆游泳，就是在篮球场打篮球。",
        "pinyin": "Zhōu mò tā bù shì zài yóu yǒng guǎn yóu yǒng, jiù shì zài lán qiú chǎng dǎ lán qiú.",
        "vietnamese": "周末他不是在游泳馆游泳，就是在篮球场打篮球。"
      }
    ]
  },
  {
    "id": "hsk4-g-77",
    "order": 77,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ đối lập mạnh: 尽管……，但是 / 可是……",
    "titleZh": "尽管……，但是/可是……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "尽管 + Hoàn cảnh khó khăn thực tế, + 但是 / 可是 + Tinh thần / Kết quả",
    "explanationVi": "Thừa nhận hoàn cảnh khách quan đầy chông gai trở ngại ở vế đầu, nhưng khẳng định ý chí kiên định hoặc kết quả tích cực ở vế sau (như 尽管任务艰巨，但是依然充满信心; 尽管下大雪，依然坐满学生).",
    "tips": "'尽管' mang sắc thái nhượng bộ mạnh mẽ hơn '虽然'.",
    "examples": [
      {
        "chinese": "尽管收入不高，但是我对这份工作很满意。",
        "pinyin": "Jǐn guǎn shōu rù bù gāo, dàn shì wǒ duì zhè fèn gōng zuò hěn mǎn yì.",
        "vietnamese": "尽管收入不高，但是我对这份工作很满意。"
      },
      {
        "chinese": "尽管已经很晚了，可是她仍然在学习。",
        "pinyin": "Jǐn guǎn yǐ jīng hěn wǎn le, kě shì tā réng rán zài xué xí.",
        "vietnamese": "尽管已经很晚了，可是她仍然在学习。"
      }
    ]
  },
  {
    "id": "hsk4-g-78",
    "order": 78,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chuyển ngoặt trang trọng: ……，然而…… (Tuy nhiên, thế nhưng)",
    "titleZh": "……，然而……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "Vế nhận định ban đầu, + 然而 + Vế thực tế chuyển biến",
    "explanationVi": "Từ nối chuyển ngoặt mang văn phong học thuật, trang trọng đỉnh cao (tương đương với 'however / yet' trong tiếng Anh), biểu thị sự thật xảy ra trái ngược với dự đoán (như 以为万无一失，然而意外还是发生了).",
    "tips": "Chỉ dùng trong văn viết hoặc diễn thuyết trang trọng.",
    "examples": [
      {
        "chinese": "我知道那部电影很有意思，然而太忙了，一直没时间看。",
        "pinyin": "Wǒ zhī dào nà bù diàn yǐng hěn yǒu yì sī, rán ér tài máng le, yī zhí méi shí jiān kàn.",
        "vietnamese": "我知道那部电影很有意思，然而太忙了，一直没时间看。"
      },
      {
        "chinese": "她以为能轻松通过考试，然而成绩却不太好。",
        "pinyin": "Tā yǐ wèi néng qīng sōng tōng guò kǎo shì, rán ér chéng jì què bù tài hǎo.",
        "vietnamese": "她以为能轻松通过考试，然而成绩却不太好。"
      }
    ]
  },
  {
    "id": "hsk4-g-79",
    "order": 79,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chuyển ngoặt nhẹ nhàng: ……，不过…… (Có điều là, chỉ là)",
    "titleZh": "……，不过……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "Vế khen ngợi / đồng tình, + 不过 + Chi tiết hạn chế nhỏ",
    "explanationVi": "Chuyển ý một cách mềm mại, khéo léo sau khi đã ghi nhận các mặt tốt ở vế trước (như 办法不错，不过实施起来有阻力; 电影很感人，不过结局有点悲伤).",
    "tips": "Giúp việc đưa ra lời nhận xét phản biện không bị gay gắt.",
    "examples": [
      {
        "chinese": "我很想参加你的生日晚会，不过我明天有考试，得好好复习。",
        "pinyin": "Wǒ hěn xiǎng cān jiā nǐ de shēng rì wǎn huì, bù guò wǒ míng tiān yǒu kǎo shì, dé hǎo hǎo fù xí.",
        "vietnamese": "我很想参加你的生日晚会，不过我明天有考试，得好好复习。"
      },
      {
        "chinese": "他只学了三个月中文，不过已经说得不错了。",
        "pinyin": "Tā zhǐ xué le sān gè yuè zhōng wén, bù guò yǐ jīng shuō dé bù cuò le.",
        "vietnamese": "他只学了三个月中文，不过已经说得不错了。"
      }
    ]
  },
  {
    "id": "hsk4-g-80",
    "order": 80,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Nhượng bộ rồi chuyển ý: ……X 是 X，就是 / 不过……",
    "titleZh": "……X是X，就是/不过……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "Tính từ + 是 + Tính từ，就是 / 不过 + Điểm yếu",
    "explanationVi": "Thừa nhận mặt tốt của đối tượng trước rồi mới nhẹ nhàng chỉ ra điểm hạn chế nhỏ còn tồn tại (như 暖和是暖和，不过洗起来麻烦; 好是好，就是服务态度差).",
    "tips": "Khẩu ngữ giao tiếp hết sức lịch thiệp và tinh tế.",
    "examples": [
      {
        "chinese": "这些衣服便宜是便宜，就是感觉质量不太好。",
        "pinyin": "Zhè xiē yī fú biàn yí shì biàn yí, jiù shì gǎn jué zhì liàng bù tài hǎo.",
        "vietnamese": "这些衣服便宜是便宜，就是感觉质量不太好。"
      },
      {
        "chinese": "小张这个人聪明是聪明，不过有时候比较懒。",
        "pinyin": "Xiǎo zhāng zhè gè rén cōng míng shì cōng míng, bù guò yǒu shí hòu bǐ jiào lǎn.",
        "vietnamese": "小张这个人聪明是聪明，不过有时候比较懒。"
      }
    ]
  },
  {
    "id": "hsk4-g-81",
    "order": 81,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức cảnh báo hậu quả: ……，否则…… (Nếu không thì...)",
    "titleZh": "……，否则……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "Yêu cầu / Hành động bắt buộc, + 否则 + Hậu quả xấu phát sinh",
    "explanationVi": "Nêu rõ mệnh lệnh hoặc việc cần làm ngay ở vế trước, và cảnh báo hậu quả bất lợi sẽ xảy ra nếu không thực hiện ở vế sau (như 马上出发，否则赶不上; 保管好发票，否则无法退换).",
    "tips": "Tương đương với '不然' nhưng trang trọng hơn.",
    "examples": [
      {
        "chinese": "你下了飞机记得给妈妈打个电话，否则她会一直担心你。",
        "pinyin": "Nǐ xià le fēi jī jì dé gěi mā mā dǎ gè diàn huà, fǒu zé tā huì yī zhí dān xīn nǐ.",
        "vietnamese": "你下了飞机记得给妈妈打个电话，否则她会一直担心你。"
      },
      {
        "chinese": "课后一定要经常复习，否则很快就会忘记。",
        "pinyin": "Kè hòu yī dìng yào jīng cháng fù xí, fǒu zé hěn kuài jiù huì wàng jì.",
        "vietnamese": "课后一定要经常复习，否则很快就会忘记。"
      }
    ]
  },
  {
    "id": "hsk4-g-82",
    "order": 82,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết điều kiện khẩu ngữ: 要是……，就……",
    "titleZh": "要是……，就……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "要是 + Vế giả định, + (Chủ ngữ) + 就 + Vế kết quả",
    "explanationVi": "Dùng trong khẩu ngữ hàng ngày để đặt ra tình huống giả định (như 要是你有空，我们就逛街; 要是遇到生词，就可以查词典).",
    "tips": "Mang giọng điệu thân mật hơn hẳn so với '如果'.",
    "examples": [
      {
        "chinese": "你要是想取得成功，就必须坚持到底。",
        "pinyin": "Nǐ yào shì xiǎng qǔ dé chéng gōng, jiù bì xū jiān chí dào dǐ.",
        "vietnamese": "你要是想取得成功，就必须坚持到底。"
      },
      {
        "chinese": "要是人人都能节约用水，地球的环境就能得到更好的保护。",
        "pinyin": "Yào shì rén rén dōu néng jié yuē yòng shuǐ, dì qiú de huán jìng jiù néng dé dào gèng hǎo de bǎo hù.",
        "vietnamese": "要是人人都能节约用水，地球的环境就能得到更好的保护。"
      }
    ]
  },
  {
    "id": "hsk4-g-83",
    "order": 83,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết ba vế hoàn chỉnh: 要是……，（就）……，否则……",
    "titleZh": "要是……，（就）……，否则……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "要是 + Điều kiện tốt, + 就 + Đạt kết quả, + 否则 + Hậu quả xấu",
    "explanationVi": "Cấu trúc câu phức ba vế hoàn chỉnh: vừa nêu điều kiện thuận lợi, vừa chỉ ra lợi ích đạt được, vừa cảnh báo hệ quả nếu không đáp ứng điều kiện đó.",
    "tips": "Cấu trúc lập luận rất chặt chẽ, thuyết phục.",
    "examples": [
      {
        "chinese": "要是你打算假期去旅游，就提前上网订票，否则到时候就买不到了。",
        "pinyin": "Yào shì nǐ dǎ suàn jiǎ qī qù lǚ yóu, jiù tí qián shàng wǎng dìng piào, fǒu zé dào shí hòu jiù mǎi bù dào le.",
        "vietnamese": "要是你打算假期去旅游，就提前上网订票，否则到时候就买不到了。"
      },
      {
        "chinese": "要是你不常穿，最好就不要买，否则买了也是浪费。",
        "pinyin": "Yào shì nǐ bù cháng chuān, zuì hǎo jiù bù yào mǎi, fǒu zé mǎi le yě shì làng fèi.",
        "vietnamese": "要是你不常穿，最好就不要买，否则买了也是浪费。"
      }
    ]
  },
  {
    "id": "hsk4-g-84",
    "order": 84,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức vô điều kiện: 不管……，都 / 也…… (Bất kể... đều...)",
    "titleZh": "不管……，都/也……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "不管 + Điều kiện phức tạp / Dù thế nào, + (Chủ ngữ) + 都 / 也 + Kiên định kết quả",
    "explanationVi": "Khẳng định kết quả hoặc ý chí hành động hoàn toàn không bị lay chuyển bởi bất kỳ hoàn cảnh khó khăn nào (như 不管风吹雨打，都日夜守卫; 不管多曲折，也绝不放弃).",
    "tips": "Sau '不管' thường là từ nghi vấn hoặc cụm từ đối lập.",
    "examples": [
      {
        "chinese": "不管在什么地方，说话、办事都要有礼貌。",
        "pinyin": "Bù guǎn zài shén me dì fāng, shuō huà, bàn shì dōu yào yǒu lǐ mào.",
        "vietnamese": "不管在什么地方，说话、办事都要有礼貌。"
      },
      {
        "chinese": "不管别人怎么说，我也不会改变主意。",
        "pinyin": "Bù guǎn bié rén zěn me shuō, wǒ yě bù huì gǎi biàn zhǔ yì.",
        "vietnamese": "不管别人怎么说，我也不会改变主意。"
      }
    ]
  },
  {
    "id": "hsk4-g-85",
    "order": 85,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức vô điều kiện trang trọng: 无论……，都 / 也……",
    "titleZh": "无论……，都/也……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "无论 + Tình huống biến đổi, + 都 / 也 + Vị ngữ",
    "explanationVi": "Phiên bản văn viết trang nhã, hùng hồn của '不管' (như 无论遇到什么风浪，都要走下去; 无论身在何方，都思念亲人).",
    "tips": "Thường dùng trong các tác phẩm văn học, bài phát biểu quan trọng.",
    "examples": [
      {
        "chinese": "无论在多么紧张的情况下，他都表现得非常冷静。",
        "pinyin": "Wú lùn zài duō me jǐn zhāng de qíng kuàng xià, tā dōu biǎo xiàn dé fēi cháng lěng jìng.",
        "vietnamese": "无论在多么紧张的情况下，他都表现得非常冷静。"
      },
      {
        "chinese": "无论遇到多大的困难，我们也不应该随便放弃。",
        "pinyin": "Wú lùn yù dào duō dà de kùn nán, wǒ men yě bù yīng gāi suí biàn fàng qì.",
        "vietnamese": "无论遇到多大的困难，我们也不应该随便放弃。"
      }
    ]
  },
  {
    "id": "hsk4-g-86",
    "order": 86,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả tiền đề: 既然……，就…… (Đã... thì...)",
    "titleZh": "既然……，就……",
    "grammarType": "句子的类型",
    "categoryType": "因果复句",
    "grammarDetail": "因果复句",
    "structure": "既然 + Sự thật / Tiền đề đã xảy ra, + 就 + Quyết định hành động",
    "explanationVi": "Dựa trên một sự thật hiển nhiên hoặc một cam kết đã có từ trước để đưa ra hành động hoặc quyết định tất yếu tiếp theo (như 既然大家推选你，你就挑起重担; 既然承诺，就守信用).",
    "tips": "Nhấn mạnh tinh thần trách nhiệm trước một việc đã an bài.",
    "examples": [
      {
        "chinese": "既然你这么喜欢小孩儿，毕业以后就当老师吧。",
        "pinyin": "Jì rán nǐ zhè me xǐ huān xiǎo hái ér, bì yè yǐ hòu jiù dāng lǎo shī ba.",
        "vietnamese": "既然你这么喜欢小孩儿，毕业以后就当老师吧。"
      },
      {
        "chinese": "既然来了，就进屋喝杯茶吧。",
        "pinyin": "Jì rán lái le, jiù jìn wū hē bēi chá ba.",
        "vietnamese": "既然来了，就进屋喝杯茶吧。"
      }
    ]
  },
  {
    "id": "hsk4-g-87",
    "order": 87,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả văn bản: （由于）……，因此…… (Do... vì vậy...)",
    "titleZh": "（由于）……，因此……",
    "grammarType": "句子的类型",
    "categoryType": "因果复句",
    "grammarDetail": "因果复句",
    "structure": "(由于) + Nguyên nhân khách quan, + 因此 + Kết quả phát sinh",
    "explanationVi": "Cặp liên từ chỉ quan hệ nhân quả trang trọng bậc nhất trong văn nghị luận, báo chí (như 由于前期准备充分，因此谈判顺利; 缺乏锻炼，因此跑几步就喘).",
    "tips": "Thay thế xuất sắc cho cặp '因为...所以...' trong các bài thi viết HSK.",
    "examples": [
      {
        "chinese": "由于您没带护照，因此不能办理银行卡。",
        "pinyin": "Yóu yú nín méi dài hù zhào, yīn cǐ bù néng bàn lǐ yín xíng kǎ.",
        "vietnamese": "由于您没带护照，因此不能办理银行卡。"
      },
      {
        "chinese": "我对京剧很感兴趣，因此报名参加了这次活动。",
        "pinyin": "Wǒ duì jīng jù hěn gǎn xīng qù, yīn cǐ bào míng cān jiā le zhè cì huó dòng.",
        "vietnamese": "我对京剧很感兴趣，因此报名参加了这次活动。"
      }
    ]
  },
  {
    "id": "hsk4-g-88",
    "order": 88,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chỉ mục đích tiện bề: ……，好…… (...để có thể...)",
    "titleZh": "……，好……",
    "grammarType": "句子的类型",
    "categoryType": "目的复句",
    "grammarDetail": "目的复句",
    "structure": "Hành động chuẩn bị ở vế 1, + 好 + Tiện bề thực hiện mục đích ở vế 2",
    "explanationVi": "Từ '好' đứng đầu vế thứ hai để chỉ mục đích tạo điều kiện thuận lợi, dễ dàng cho việc thực hiện hành động theo sau (như 留详细地址，好方便寄材料; 早点去排队，好买到前排票).",
    "tips": "Tương đương với 'để tiện cho việc...' trong tiếng Việt.",
    "examples": [
      {
        "chinese": "我每天都给父母打电话，好让他们放心。",
        "pinyin": "Wǒ měi tiān dōu gěi fù mǔ dǎ diàn huà, hǎo ràng tā men fàng xīn.",
        "vietnamese": "我每天都给父母打电话，好让他们放心。"
      },
      {
        "chinese": "我们应该多鼓励他，好让他有信心。",
        "pinyin": "Wǒ men yīng gāi duō gǔ lì tā, hǎo ràng tā yǒu xìn xīn.",
        "vietnamese": "我们应该多鼓励他，好让他有信心。"
      }
    ]
  },
  {
    "id": "hsk4-g-89",
    "order": 89,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ giả định: 即使……，也…… (Cho dù... cũng...)",
    "titleZh": "即使……，也……",
    "grammarType": "句子的类型",
    "categoryType": "让步复句",
    "grammarDetail": "让步复句",
    "structure": "即使 + Giả định khó khăn tột cùng, + 也 + Vẫn kiên định làm",
    "explanationVi": "Giả thiết một tình huống ở mức độ xấu nhất, ngặt nghèo nhất, nhưng khẳng định kết quả hoặc thái độ vẫn tuyệt đối không thay đổi (như 即使遇到天大困难，也要保持乐观; 即使工作忙，也要陪孩子).",
    "tips": "'即使' đặt ra tình huống giả định chưa chắc xảy ra (khác với 虽然 nói về sự thật).",
    "examples": [
      {
        "chinese": "你即使干到明天早上，恐怕也干不完。",
        "pinyin": "Nǐ jí shǐ gàn dào míng tiān zǎo shàng, kǒng pà yě gàn bù wán.",
        "vietnamese": "你即使干到明天早上，恐怕也干不完。"
      },
      {
        "chinese": "即使工作再忙，也要常回家看看父母。",
        "pinyin": "Jí shǐ gōng zuò zài máng, yě yào cháng huí jiā kàn kàn fù mǔ.",
        "vietnamese": "即使工作再忙，也要常回家看看父母。"
      }
    ]
  },
  {
    "id": "hsk4-g-90",
    "order": 90,
    "category": "compound_sentences",
    "categoryName": "Hệ thống câu phức liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ khẩu ngữ: 就是……，也…… (Dù là... cũng...)",
    "titleZh": "就是……，也……",
    "grammarType": "句子的类型",
    "categoryType": "让步复句",
    "grammarDetail": "让步复句",
    "structure": "就是 + Tình huống khắc nghiệt, + 也 + Vẫn thực hiện",
    "explanationVi": "Là dạng khẩu ngữ thân thuộc tương đương với '即使...也...' (như 就是下大雨，也照常举行; 就是天塌下来，也有高个子顶着).",
    "tips": "Mang ngữ khí hào sảng, trấn an người đối thoại.",
    "examples": [
      {
        "chinese": "我今天晚上就是不睡觉，也必须解决这个问题。",
        "pinyin": "Wǒ jīn tiān wǎn shàng jiù shì bù shuì jué, yě bì xū jiě jué zhè gè wèn tí.",
        "vietnamese": "我今天晚上就是不睡觉，也必须解决这个问题。"
      },
      {
        "chinese": "你就是不同意，我也不会改变自己的决定。",
        "pinyin": "Nǐ jiù shì bù tóng yì, wǒ yě bù huì gǎi biàn zì jǐ de jué dìng.",
        "vietnamese": "你就是不同意，我也不会改变自己的决定。"
      }
    ]
  },
  {
    "id": "hsk4-g-91",
    "order": 91,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Câu rút gọn không từ nối (紧缩复句 - Ngắn gọn dứt khoát)",
    "titleZh": "无标记",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "Hai vế câu ngắn ghép trực tiếp không cần liên từ rườm rà",
    "explanationVi": "Các cấu trúc câu ghép cực ngắn nhưng biểu đạt trọn vẹn mối quan hệ nhân quả hoặc điều kiện một cách súc tích (như 想吃什么就买什么; 不问不知道，一问吓一跳; 有话直说).",
    "tips": "Đỉnh cao của khẩu ngữ tự nhiên, nói gãy gọn như người bản xứ.",
    "examples": [
      {
        "chinese": "你着急你先走吧。",
        "pinyin": "Nǐ zhe jí nǐ xiān zǒu ba.",
        "vietnamese": "你着急你先走吧。"
      },
      {
        "chinese": "站得高看得远。",
        "pinyin": "Zhàn dé gāo kàn dé yuǎn.",
        "vietnamese": "站得高看得远。"
      },
      {
        "chinese": "他同意我不同意。",
        "pinyin": "Tā tóng yì wǒ bù tóng yì.",
        "vietnamese": "他同意我不同意。"
      }
    ]
  },
  {
    "id": "hsk4-g-92",
    "order": 92,
    "category": "special_patterns",
    "categoryName": "Cấu trúc đặc biệt & Khẩu ngữ cố định",
    "categoryIcon": "🌟",
    "titleVi": "Câu rút gọn phủ định - khẳng định: 不……也…… (Không... cũng...)",
    "titleZh": "不……也……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "不 + Động từ 1 + 也 + Động từ 2 / Hiểu rõ",
    "explanationVi": "Biểu thị sự việc đã quá rõ ràng hiển nhiên đến mức dù không cần làm hành động 1 thì kết quả 2 vẫn xảy ra (như 你不说我也猜得到; 不上报也瞒不住了).",
    "tips": "Nhấn mạnh tính tất yếu không thể che giấu.",
    "examples": [
      {
        "chinese": "今晚我不睡觉也要把作业写完。",
        "pinyin": "Jīn wǎn wǒ bù shuì jué yě yào bǎ zuò yè xiě wán.",
        "vietnamese": "今晚我不睡觉也要把作业写完。"
      },
      {
        "chinese": "你不喜欢做也得做。",
        "pinyin": "Nǐ bù xǐ huān zuò yě dé zuò.",
        "vietnamese": "你不喜欢做也得做。"
      }
    ]
  },
  {
    "id": "hsk4-g-93",
    "order": 93,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Ước lượng số lượng xấp xỉ bằng “来”: 数词 + 来 + 量词",
    "titleZh": "概数表示法3：数词+来+量词",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số từ tròn (hoặc chục) + 来 + Lượng từ + Danh từ",
    "explanationVi": "Đặt '来' sau số từ (thường là 10, 20, 50, 100...) để biểu thị số lượng xấp xỉ tròm trèm trên dưới con số đó (như 五十来岁 - tròm trèm 50 tuổi; 百来个学生 - khoảng trăm học sinh; 十来米 - khoảng chừng 10 mét).",
    "tips": "Khác với '多' (chỉ lớn hơn), '来' chỉ khoảng chừng xấp xỉ cận kề (có thể hơn hoặc kém một chút).",
    "examples": [
      {
        "chinese": "我们的宿舍楼有三百来间房。",
        "pinyin": "Wǒ men de sù shě lóu yǒu sān bǎi lái jiān fáng.",
        "vietnamese": "我们的宿舍楼有三百来间房。"
      },
      {
        "chinese": "书架上放着一百来本书。",
        "pinyin": "Shū jià shàng fàng zhe yī bǎi lái běn shū.",
        "vietnamese": "书架上放着一百来本书。"
      },
      {
        "chinese": "这条大鱼估计有十来斤重。",
        "pinyin": "Zhè tiáo dà yú gū jì yǒu shí lái jīn zhòng.",
        "vietnamese": "这条大鱼估计有十来斤重。"
      }
    ]
  },
  {
    "id": "hsk4-g-94",
    "order": 94,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Ước lượng số lượng bằng: 大约, 左右, 前后 (Khoảng chừng, xấp xỉ)",
    "titleZh": "用“大约、左右、前后”表示概数",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "大约 + Số từ | Số từ + 左右 (trên dưới) | Mốc thời gian + 前后 (khoảng ngày đó)",
    "explanationVi": "• 大约: Khoảng chừng (đứng trước số từ: 大约四个小时).\n• 左右: Trên dưới, khoảng (đứng sau cụm số lượng: 五百人左右).\n• 前后: Khoảng, xấp xỉ (đứng sau mốc ngày tháng: 九月一日前后).",
    "tips": "Cách dùng cực kỳ phổ biến trong đời sống và văn bản thống kê.",
    "examples": [
      {
        "chinese": "客人大约下午两点到公司参观。",
        "pinyin": "Kè rén dà yuē xià wǔ liǎng diǎn dào gōng sī cān guān.",
        "vietnamese": "客人大约下午两点到公司参观。"
      },
      {
        "chinese": "我的中文老师四十岁左右。",
        "pinyin": "Wǒ de zhōng wén lǎo shī sì shí suì zuǒ yòu.",
        "vietnamese": "我的中文老师四十岁左右。"
      },
      {
        "chinese": "春节前后，很多商场有打折活动。",
        "pinyin": "Chūn jié qián hòu, hěn duō shāng chǎng yǒu dǎ zhé huó dòng.",
        "vietnamese": "春节前后，很多商场有打折活动。"
      }
    ]
  },
  {
    "id": "hsk4-g-95",
    "order": 95,
    "category": "pronouns_measures",
    "categoryName": "Đại từ, Lượng từ & Số từ",
    "categoryIcon": "🔢",
    "titleVi": "Biểu đạt toán học: Số thập phân, Phân số, Phần trăm, Số lần gấp",
    "titleZh": "小数、分数、百分数、倍数的表示法",
    "grammarType": "特殊表达法",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Số thập phân: A 点 B | Phân số: B 分之 A | Phần trăm: 百分之 X | Gấp bội: X 倍",
    "explanationVi": "• Số thập phân: 三十六点五 (36.5).\n• Phân số: Ba phần hai nói là '三分之二' (2/3) — mẫu số đọc trước '分之', tử số đọc sau.\n• Phần trăm: 百分之九十八 (98%), 百分之七十一 (71%).\n• Tăng gấp bội: 增长了一倍 (tăng gấp đôi).",
    "tips": "Quy tắc vàng phân số: Đọc MẪU SỐ trước, rồi đến '分之', rồi mới đọc TỬ SỐ.",
    "examples": [
      {
        "chinese": "零点五、三分之一、百分之二十、两倍",
        "pinyin": "Líng diǎn wǔ, sān fēn zhī yī, bǎi fēn zhī èr shí, liǎng bèi",
        "vietnamese": "零点五、三分之一、百分之二十、两倍"
      },
      {
        "chinese": "老师听写了二十个汉字，每个汉字零点五分，一共十分。",
        "pinyin": "Lǎo shī tīng xiě le èr shí gè hàn zì, měi gè hàn zì líng diǎn wǔ fēn, yī gòng shí fēn.",
        "vietnamese": "老师听写了二十个汉字，每个汉字零点五分，一共十分。"
      },
      {
        "chinese": "我们班有三分之一的同学没去过长城。",
        "pinyin": "Wǒ men bān yǒu sān fēn zhī yī de tóng xué méi qù guò zhǎng chéng.",
        "vietnamese": "我们班有三分之一的同学没去过长城。"
      },
      {
        "chinese": "跟去年相比，今年游客的数量减少了百分之二十。",
        "pinyin": "Gēn qù nián xiāng bǐ, jīn nián yóu kè de shù liàng jiǎn shǎo le bǎi fēn zhī èr shí.",
        "vietnamese": "跟去年相比，今年游客的数量减少了百分之二十。"
      },
      {
        "chinese": "我的收入比去年提高了两倍。",
        "pinyin": "Wǒ de shōu rù bǐ qù nián tí gāo le liǎng bèi.",
        "vietnamese": "我的收入比去年提高了两倍。"
      }
    ]
  }
];
