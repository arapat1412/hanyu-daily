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

export const HSK5_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "tu-loai",
    "name": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "icon": "🔤"
  },
  {
    "id": "khau-ngu",
    "name": "Khẩu ngữ & Cụm cố định",
    "icon": "💬"
  },
  {
    "id": "bo-ngu",
    "name": "Thành phần câu & Bổ ngữ",
    "icon": "🧩"
  },
  {
    "id": "loai-cau",
    "name": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "icon": "🗣️"
  },
  {
    "id": "cau-phuc",
    "name": "Câu phức & Liên từ",
    "icon": "🔗"
  }
];

export const HSK5_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk5-g-01",
    "order": 1,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Hậu tố danh từ: —头 (—tou)",
    "titleZh": "—头",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Danh từ / Động từ / Tính từ + 头 (tou)",
    "explanationVi": "Hậu tố '头' (đọc thanh nhẹ 'tou') ghép sau danh từ, tính từ hoặc động từ để cấu tạo thành danh từ chỉ vật thể (石头 - hòn đá, 木头 - khúc gỗ), phương hướng vị trí (里头 - bên trong, 外头 - bên ngoài, 前头 - phía trước) hoặc tính chất cảm xúc (苦头 - nỗi khổ, 甜头 - vị ngọt/mối lợi).",
    "tips": "Khi làm hậu tố từ loại, '头' thường đọc thanh nhẹ (thanh 0: tou). Không nhầm với danh từ độc lập 'tóu' (cái đầu).",
    "examples": [
      {
        "chinese": "那块石头上刻着一些汉字。",
        "pinyin": "Nà kuài shí tóu shàng kè zhe yī xiē hàn zì.",
        "vietnamese": "Trên phiến đá đó có khắc vài chữ Hán."
      },
      {
        "chinese": "那本书里头是不是有一封信？",
        "pinyin": "Nà běn shū lǐ tóu shì bù shì yǒu yī fēng xìn?",
        "vietnamese": "Bên trong quyển sách đó có phải có một bức thư không?"
      }
    ]
  },
  {
    "id": "hsk5-g-02",
    "order": 2,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Đại từ chỉ thị cao cấp: 彼此, 如此, 本",
    "titleZh": "彼此、如此、本",
    "grammarType": "词类",
    "categoryType": "指示代词",
    "grammarDetail": "指示代词",
    "structure": "彼此 / 如此 / 本 + Danh từ",
    "explanationVi": "'彼此' (bǐcǐ) nghĩa là 'lẫn nhau, hai bên'; '如此' (rúcǐ) mang sắc thái văn viết trang trọng thay cho '这样, 这么' (như thế, như vậy); '本' (běn) dùng trước danh từ để chỉ 'này, bản thân chúng ta' (本规定 - quy định này, 本次 - lần này, 本地 - địa phương này, 本人 - bản thân tôi).",
    "tips": "Trong thi viết HSK 5 và văn bản hành chính, dùng '如此' và '本' giúp bài viết mang đậm văn phong chuẩn mực cao cấp.",
    "examples": [
      {
        "chinese": "在日常交流中，我们应该尊重彼此。",
        "pinyin": "Zài rì cháng jiāo liú zhōng, wǒ men yīng gāi zūn zhòng bǐ cǐ.",
        "vietnamese": "Trong giao tiếp thường ngày, chúng ta nên tôn trọng lẫn nhau."
      },
      {
        "chinese": "他们已经认识很久了，对彼此的习惯非常了解。",
        "pinyin": "Tā men yǐ jīng rèn shí hěn jiǔ le, duì bǐ cǐ de xí guàn fēi cháng le jiě.",
        "vietnamese": "Họ đã quen biết rất lâu rồi, vô cùng hiểu rõ thói quen của nhau."
      },
      {
        "chinese": "这里的夏天异常炎热，年年如此。",
        "pinyin": "Zhè lǐ de xià tiān yì cháng yán rè, nián nián rú cǐ.",
        "vietnamese": "Mùa hè ở đây nóng nực bất thường, năm nào cũng như vậy."
      },
      {
        "chinese": "很多人都没有想到乡村的变化如此巨大。",
        "pinyin": "Hěn duō rén dōu méi yǒu xiǎng dào xiāng cūn de biàn huà rú cǐ jù dà.",
        "vietnamese": "Rất nhiều người không ngờ rằng sự thay đổi của làng quê lại to lớn đến như thế."
      },
      {
        "chinese": "本规定自明日起正式实施。",
        "pinyin": "Běn guī dìng zì míng rì qǐ zhèng shì shí shī.",
        "vietnamese": "Quy định này chính thức có hiệu lực từ ngày mai."
      },
      {
        "chinese": "本次列车开往北京西站。",
        "pinyin": "Běn cì liè chē kāi wǎng běi jīng xī zhàn.",
        "vietnamese": "Chuyến tàu này đi về hướng ga Bắc Kinh Tây."
      }
    ]
  },
  {
    "id": "hsk5-g-03",
    "order": 3,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Hệ thống lượng từ danh từ trung-cao cấp (册, 朵, 届, 颗, 匹, 行, 架, 群, 支, 根, 批, 束, 副, 集, 周)",
    "titleZh": "册、朵、届、颗、匹、行、架、群、支、根、批、束、副、集、周",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + Lượng từ + Danh từ",
    "explanationVi": "HSK 5 quy định hệ thống lượng từ phong phú: '册' (tập/quyển sách), '朵' (đóa/bông mây, hoa), '届' (khóa/kỳ đại hội, triển lãm), '颗' (hạt/viên sỏi, sao, răng), '匹' (con ngựa, súc vải), '行' (hàng/dòng chữ), '架' (chiếc máy bay, đàn piano), '群' (đàn/bầy người, động vật), '支' (đội ngũ, bài hát, cây bút), '根' (sợi/que đũa, gậy, dây), '批' (lô/đợt hàng, nhân viên), '束' (bó hoa, chùm sáng), '副' (bộ/đôi găng tay, mắt kính), '集' (tập phim truyền hình), '周' (vòng quay, chu kỳ).",
    "tips": "Hãy học lượng từ đi kèm danh từ cố định theo cụm để làm bài tập chọn từ điền chỗ trống phần đọc hiểu HSK 5.",
    "examples": [
      {
        "chinese": "这册历史书讲述了古代中国的发展过程。",
        "pinyin": "Zhè cè lì shǐ shū jiǎng shù le gǔ dài zhōng guó de fā zhǎn guò chéng.",
        "vietnamese": "Tập sách lịch sử này kể về quá trình phát triển của Trung Quốc cổ đại."
      },
      {
        "chinese": "第一次见面时他送给了我一朵玫瑰花。",
        "pinyin": "Dì yī cì jiàn miàn shí tā sòng gěi le wǒ yī duǒ méi guī huā.",
        "vietnamese": "Lần đầu gặp mặt, anh ấy đã tặng tôi một đóa hoa hồng."
      },
      {
        "chinese": "这届会议讨论了许多重要的话题。",
        "pinyin": "Zhè jiè huì yì tǎo lùn le xǔ duō zhòng yào de huà tí.",
        "vietnamese": "Kỳ đại hội này đã thảo luận rất nhiều chủ đề quan trọng."
      },
      {
        "chinese": "城市夜晚的天空中几乎看不到几颗星星。",
        "pinyin": "Chéng shì yè wǎn de tiān kōng zhōng jǐ hū kàn bù dào jǐ kē xīng xīng.",
        "vietnamese": "Trên bầu trời đêm ở thành phố hầu như chẳng nhìn thấy được mấy ngôi sao."
      },
      {
        "chinese": "那匹马跑得特别快，赢得了这次比赛。",
        "pinyin": "Nà pǐ mǎ pǎo dé tè bié kuài, yíng dé le zhè cì bǐ sài.",
        "vietnamese": "Con ngựa đó chạy cực kỳ nhanh, đã thắng giải trong cuộc đua lần này."
      },
      {
        "chinese": "她在表格的最后一行写上了自己的名字。",
        "pinyin": "Tā zài biǎo gé de zuì hòu yī xíng xiě shàng le zì jǐ de míng zì.",
        "vietnamese": "Cô ấy viết tên mình vào dòng cuối cùng của bảng biểu."
      },
      {
        "chinese": "那架飞机在空中飞行了很久，最终安全降落。",
        "pinyin": "Nà jià fēi jī zài kōng zhōng fēi xíng le hěn jiǔ, zuì zhōng ān quán jiàng luò.",
        "vietnamese": "Chiếc máy bay đó bay trên không trung rất lâu, cuối cùng đã hạ cánh an toàn."
      },
      {
        "chinese": "一群可爱的孩子正在舞台上表演节目。",
        "pinyin": "Yī qún kě ài de hái zi zhèng zài wǔ tái shàng biǎo yǎn jié mù.",
        "vietnamese": "Một nhóm trẻ em đáng yêu đang biểu diễn tiết mục trên sân khấu."
      },
      {
        "chinese": "这支队伍非常优秀，连续几年都获得了冠军。",
        "pinyin": "Zhè zhī duì wǔ fēi cháng yōu xiù, lián xù jǐ nián dōu huò dé le guān jūn.",
        "vietnamese": "Đội ngũ này rất xuất sắc, nhiều năm liền đều giành chức vô địch."
      },
      {
        "chinese": "他一不小心把一根筷子掉在了地上。",
        "pinyin": "Tā yī bù xiǎo xīn bǎ yī gēn kuài zi diào zài le dì shàng.",
        "vietnamese": "Anh ấy sơ ý làm rơi một chiếc đũa xuống đất."
      },
      {
        "chinese": "王经理正在培训这批新员工。",
        "pinyin": "Wáng jīng lǐ zhèng zài péi xùn zhè pī xīn yuán gōng.",
        "vietnamese": "Quản lý Vương đang huấn luyện đợt nhân viên mới này."
      },
      {
        "chinese": "为了表示对朋友的欢迎，他特意买了一束花。",
        "pinyin": "Wèi le biǎo shì duì péng yǒu de huān yíng, tā tè yì mǎi le yī shù huā.",
        "vietnamese": "Để thể hiện sự hoan nghênh bạn bè, anh ấy đã đặc biệt mua một bó hoa."
      },
      {
        "chinese": "选来选去还是这副手套戴着最舒服。",
        "pinyin": "Xuǎn lái xuǎn qù hái shì zhè fù shǒu tào dài zhe zuì shū fú.",
        "vietnamese": "Chọn đi chọn lại vẫn là đôi găng tay này đeo dễ chịu nhất."
      },
      {
        "chinese": "别看书了，打开电视，看两集电视剧吧。",
        "pinyin": "Bié kàn shū le, dǎ kāi diàn shì, kàn liǎng jí diàn shì jù ba.",
        "vietnamese": "Đừng đọc sách nữa, bật tivi lên xem hai tập phim truyền hình đi."
      },
      {
        "chinese": "地球绕太阳一周需要一年。",
        "pinyin": "Dì qiú rào tài yáng yī zhōu xū yào yī nián.",
        "vietnamese": "Trái đất quay quanh mặt trời một vòng cần một năm."
      }
    ]
  },
  {
    "id": "hsk5-g-04",
    "order": 4,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Động lượng từ: 眼 (nhìn một cái, liếc một cái)",
    "titleZh": "眼",
    "grammarType": "词类",
    "categoryType": "动量词",
    "grammarDetail": "动量词",
    "structure": "Động từ (看 / 瞧 / 瞄) + 一眼",
    "explanationVi": "'眼' làm động lượng từ lâm thời đi sau các động từ thị giác như '看', '瞅', '瞧', biểu thị hành động liếc nhìn hoặc đảo mắt qua một cái nhanh chóng.",
    "tips": "Thường dùng trong kết cấu '看了一眼' (liếc nhìn một cái). Chú ý không nhầm với danh từ '眼睛' (con mắt).",
    "examples": [
      {
        "chinese": "新娘看了一眼新郎，害羞得低下了头。",
        "pinyin": "Xīn niáng kàn le yī yǎn xīn láng, hài xiū dé dī xià le tóu.",
        "vietnamese": "Cô dâu nhìn chú rể một cái, thẹn thùng cúi đầu xuống."
      }
    ]
  },
  {
    "id": "hsk5-g-05",
    "order": 5,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ mức độ HSK 5: 过于, 相当, 较, 可, 格外, 极其",
    "titleZh": "过于、相当、较1、可2、格外、极其",
    "grammarType": "词类",
    "categoryType": "程度副词",
    "grammarDetail": "程度副词",
    "structure": "过于 / 相当 / 较 / 可 / 格外 / 极其 + Tính từ / Động từ tâm lý",
    "explanationVi": "Biểu thị các cấp độ trạng thái: '过于' (quá mức, thái quá - mang hàm ý tiêu cực); '相当' (khá là, tương đối); '较' (tương đối, so với thông thường - văn viết); '可...了' (nhấn mạnh khẩu ngữ: ...lắm đấy); '格外' (đặc biệt, phi thường - vượt trội hoàn cảnh khác); '极其' (cực kỳ, hết sức - văn viết trang trọng).",
    "tips": "'过于' thường dùng khi mức độ vượt quá giới hạn gây hại (过于紧张, 过于追求完美); còn '格外' nhấn mạnh sự nổi bật khác thường.",
    "examples": [
      {
        "chinese": "他在面试时过于紧张，连话都说不清楚了。",
        "pinyin": "Tā zài miàn shì shí guò yú jǐn zhāng, lián huà dōu shuō bù qīng chǔ le.",
        "vietnamese": "Anh ấy quá mức căng thẳng lúc phỏng vấn, đến nói cũng nói không rõ ràng."
      },
      {
        "chinese": "过于追求完美反而会让人总是对现状不满意。",
        "pinyin": "Guò yú zhuī qiú wán měi fǎn ér huì ràng rén zǒng shì duì xiàn zhuàng bù mǎn yì.",
        "vietnamese": "Quá theo đuổi sự hoàn hảo ngược lại sẽ khiến con người luôn bất mãn với hiện tại."
      },
      {
        "chinese": "这次考试的题目相当难，很多同学都没有及格。",
        "pinyin": "Zhè cì kǎo shì de tí mù xiāng dāng nán, hěn duō tóng xué dōu méi yǒu jí gé.",
        "vietnamese": "Đề thi lần này khá khó, rất nhiều bạn học đều không đạt điểm đỗ."
      },
      {
        "chinese": "他的中文水平相当不错，可以和中国人流利对话。",
        "pinyin": "Tā de zhōng wén shuǐ píng xiāng dāng bù cuò, kě yǐ hé zhōng guó rén liú lì duì huà.",
        "vietnamese": "Trình độ tiếng Trung của anh ấy khá tốt, có thể trò chuyện trôi chảy với người Trung Quốc."
      },
      {
        "chinese": "如何才能在短期内较快地提高中文水平？",
        "pinyin": "Rú hé cái néng zài duǎn qī nèi jiào kuài dì tí gāo zhōng wén shuǐ píng?",
        "vietnamese": "Làm thế nào mới có thể nâng cao trình độ tiếng Trung tương đối nhanh trong thời gian ngắn?"
      },
      {
        "chinese": "年轻人学习新事物的能力较强，能够很快适应新的环境。",
        "pinyin": "Nián qīng rén xué xí xīn shì wù de néng lì jiào qiáng, néng gòu hěn kuài shì yīng xīn de huán jìng.",
        "vietnamese": "Khả năng học hỏi điều mới của người trẻ tương đối mạnh, có thể thích nghi nhanh chóng với môi trường mới."
      },
      {
        "chinese": "那家公司今年推出的新产品可受欢迎了。",
        "pinyin": "Nà jiā gōng sī jīn nián tuī chū de xīn chǎn pǐn kě shòu huān yíng le.",
        "vietnamese": "Sản phẩm mới của công ty đó ra mắt năm nay được ưa chuộng lắm đấy."
      },
      {
        "chinese": "这部电影拍得可精彩了，你千万不能错过！",
        "pinyin": "Zhè bù diàn yǐng pāi dé kě jīng cǎi le, nǐ qiān wàn bù néng cuò guò!",
        "vietnamese": "Bộ phim này quay xuất sắc lắm đấy, bạn tuyệt đối không được bỏ lỡ!"
      },
      {
        "chinese": "这家餐厅的服务态度格外热情，常常需要提前预约。",
        "pinyin": "Zhè jiā cān tīng de fú wù tài dù gé wài rè qíng, cháng cháng xū yào tí qián yù yuē.",
        "vietnamese": "Thái độ phục vụ của nhà hàng này đặc biệt nhiệt tình, thường phải đặt bàn trước."
      },
      {
        "chinese": "国庆假期的景区格外热闹，到处都是外地来的游客。",
        "pinyin": "Guó qìng jiǎ qī de jǐng qū gé wài rè nào, dào chù dōu shì wài dì lái de yóu kè.",
        "vietnamese": "Khu danh lam thắng cảnh trong kỳ nghỉ Quốc khánh đặc biệt náo nhiệt, đâu đâu cũng là du khách từ nơi khác tới."
      },
      {
        "chinese": "那天的天气极其恶劣，我们不得不取消旅行计划。",
        "pinyin": "Nà tiān de tiān qì jí qí è liè, wǒ men bù dé bù qǔ xiāo lǚ xíng jì huà.",
        "vietnamese": "Thời tiết hôm đó cực kỳ khắc nghiệt, chúng tôi đành phải hủy bỏ kế hoạch du lịch."
      },
      {
        "chinese": "这次旅行给我留下了极其深刻的印象，尤其是当地的美食和历史。",
        "pinyin": "Zhè cì lǚ xíng gěi wǒ liú xià le jí qí shēn kè de yìn xiàng, yóu qí shì dāng dì de měi shí hé lì shǐ.",
        "vietnamese": "Chuyến du lịch lần này để lại ấn tượng cực kỳ sâu sắc cho tôi, đặc biệt là ẩm thực và lịch sử nơi đây."
      }
    ]
  },
  {
    "id": "hsk5-g-06",
    "order": 6,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ thời gian HSK 5: 时刻, 曾经, 立刻, 连忙, 始终, 早已, 即将, 急忙, 渐渐, 尽快, 早晚",
    "titleZh": "时刻、曾经、立刻、连忙、始终、早已、即将、急忙、渐渐、尽快、早晚",
    "grammarType": "词类",
    "categoryType": "时间副词",
    "grammarDetail": "时间副词",
    "structure": "Phó từ thời gian + Động từ / Cụm vị ngữ",
    "explanationVi": "Chỉ thời điểm và nhịp điệu: '时刻' (luôn luôn, mọi lúc); '曾经' (đã từng); '立刻' (lập tức); '连忙' (vội vàng làm ngay do kích thích bên ngoài); '始终' (trước sau như một, luôn luôn); '早已' (từ lâu đã); '即将' (sắp sửa - văn viết); '急忙' (hối hả, vội vã); '渐渐' (dần dần, từ từ); '尽快' (càng sớm càng tốt); '早晚' (sớm muộn gì cũng).",
    "tips": "Phân biệt '连忙' (phản xạ hành động ngay do tình huống) và '急忙' (tâm trạng nôn nóng, tất bật hối hả).",
    "examples": [
      {
        "chinese": "父母要时刻关心孩子的心理健康。",
        "pinyin": "Fù mǔ yào shí kè guān xīn hái zi de xīn lǐ jiàn kāng.",
        "vietnamese": "Cha mẹ cần luôn luôn quan tâm tới sức khỏe tâm lý của con cái."
      },
      {
        "chinese": "他提醒我旅行时一定要时刻注意自己的护照和钱包。",
        "pinyin": "Tā tí xǐng wǒ lǚ xíng shí yī dìng yào shí kè zhù yì zì jǐ de hù zhào hé qián bāo.",
        "vietnamese": "Anh ấy nhắc nhở tôi khi đi du lịch nhất định phải thường trực chú ý đến hộ chiếu và ví tiền của mình."
      },
      {
        "chinese": "她曾经当过导游，在设计旅行线路方面很有经验。",
        "pinyin": "Tā céng jīng dāng guò dǎo yóu, zài shè jì lǚ xíng xiàn lù fāng miàn hěn yǒu jīng yàn.",
        "vietnamese": "Cô ấy từng làm hướng dẫn viên du lịch, rất có kinh nghiệm trong việc thiết kế lộ trình du lịch."
      },
      {
        "chinese": "王校长去年曾经来我们学校访问过。",
        "pinyin": "Wáng xiào zhǎng qù nián céng jīng lái wǒ men xué xiào fǎng wèn guò.",
        "vietnamese": "Hiệu trưởng Vương năm ngoái đã từng đến thăm trường chúng tôi."
      },
      {
        "chinese": "为了迎接客人的到来，他一下班就立刻回家准备晚餐。",
        "pinyin": "Wèi le yíng jiē kè rén de dào lái, tā yī xià bān jiù lì kè huí jiā zhǔn bèi wǎn cān.",
        "vietnamese": "Để nghênh đón khách tới, vừa tan làm anh ấy lập tức về nhà chuẩn bị bữa tối."
      },
      {
        "chinese": "张教授刚说完，学生们就立刻认真地写起来。",
        "pinyin": "Zhāng jiào shòu gāng shuō wán, xué shēng men jiù lì kè rèn zhēn dì xiě qǐ lái.",
        "vietnamese": "Giáo sư Trương vừa nói xong, các sinh viên lập tức chăm chú viết ngay."
      },
      {
        "chinese": "妈妈连忙检查摔倒的孩子有没有受伤。",
        "pinyin": "Mā mā lián máng jiǎn chá shuāi dào de hái zi yǒu méi yǒu shòu shāng.",
        "vietnamese": "Người mẹ vội vàng kiểm tra đứa trẻ bị ngã xem có bị thương hay không."
      },
      {
        "chinese": "他连忙向交警解释自己并非故意违反交通规则。",
        "pinyin": "Tā lián máng xiàng jiāo jǐng jiě shì zì jǐ bìng fēi gù yì wéi fǎn jiāo tōng guī zé.",
        "vietnamese": "Anh ấy vội vàng giải thích với cảnh sát giao thông rằng mình không hề cố ý vi phạm luật giao thông."
      },
      {
        "chinese": "最近一年，这套教材的销量始终保持增长。",
        "pinyin": "Zuì jìn yī nián, zhè tào jiào cái de xiāo liàng shǐ zhōng bǎo chí zēng zhǎng.",
        "vietnamese": "Trong một năm gần đây, lượng tiêu thụ của bộ giáo trình này luôn luôn duy trì mức tăng trưởng."
      },
      {
        "chinese": "无论如何，亲朋好友始终是你的依靠。",
        "pinyin": "Wú lùn rú hé, qīn péng hǎo yǒu shǐ zhōng shì nǐ de yī kào.",
        "vietnamese": "Dù thế nào đi nữa, người thân và bạn bè trước sau như một vẫn là chỗ dựa của bạn."
      },
      {
        "chinese": "这里的乡村早已实现了现代化，不再是当年的样子。",
        "pinyin": "Zhè lǐ de xiāng cūn zǎo yǐ shí xiàn le xiàn dài huà, bù zài shì dāng nián de yàng zi.",
        "vietnamese": "Làng quê nơi đây từ lâu đã thực hiện hiện đại hóa, không còn là diện mạo năm xưa nữa."
      },
      {
        "chinese": "科学家早已研发出治疗这种疾病的药物。",
        "pinyin": "Kē xué jiā zǎo yǐ yán fā chū zhì liáo zhè zhǒng jí bìng de yào wù.",
        "vietnamese": "Các nhà khoa học từ lâu đã nghiên cứu chế tạo thành công loại thuốc điều trị căn bệnh này."
      },
      {
        "chinese": "明天公司即将召开新品发布会，欢迎大家参加！",
        "pinyin": "Míng tiān gōng sī jí jiāng zhào kāi xīn pǐn fā bù huì, huān yíng dà jiā cān jiā!",
        "vietnamese": "Ngày mai công ty sắp sửa tổ chức buổi họp báo ra mắt sản phẩm mới, hoan nghênh mọi người tham gia!"
      },
      {
        "chinese": "他们的婚礼即将在下个月举行。",
        "pinyin": "Tā men de hūn lǐ jí jiāng zài xià gè yuè jǔ xíng.",
        "vietnamese": "Hôn lễ của họ sắp sửa được tổ chức vào tháng sau."
      },
      {
        "chinese": "听到消息后，她急忙收拾行李赶往机场。",
        "pinyin": "Tīng dào xiāo xī hòu, tā jí máng shōu shí xíng lǐ gǎn wǎng jī chǎng.",
        "vietnamese": "Sau khi nghe tin, cô ấy vội vã thu dọn hành lý chạy gấp ra sân bay."
      },
      {
        "chinese": "车祸发生后，他急忙打电话叫救护车。",
        "pinyin": "Chē huò fā shēng hòu, tā jí máng dǎ diàn huà jiào jiù hù chē.",
        "vietnamese": "Sau khi xảy ra tai nạn giao thông, anh ấy vội vàng gọi điện thoại gọi xe cứu thương."
      },
      {
        "chinese": "计算机技术渐渐成为各行各业的关键技术。",
        "pinyin": "Jì suàn jī jì shù jiàn jiàn chéng wèi gè xíng gè yè de guān jiàn jì shù.",
        "vietnamese": "Công nghệ máy tính dần dần trở thành công nghệ then chốt của mọi ngành nghề."
      },
      {
        "chinese": "春天一到，气温就开始渐渐上升了。",
        "pinyin": "Chūn tiān yī dào, qì wēn jiù kāi shǐ jiàn jiàn shàng shēng le.",
        "vietnamese": "Mùa xuân vừa đến, nhiệt độ bắt đầu tăng dần lên."
      },
      {
        "chinese": "如果您有任何问题，请尽快联系我。",
        "pinyin": "Rú guǒ nín yǒu rèn hé wèn tí, qǐng jǐn kuài lián xì wǒ.",
        "vietnamese": "Nếu quý khách có bất kỳ thắc mắc nào, xin vui lòng liên hệ với tôi càng sớm càng tốt."
      },
      {
        "chinese": "医生建议他尽快接受手术治疗。",
        "pinyin": "Yī shēng jiàn yì tā jǐn kuài jiē shòu shǒu shù zhì liáo.",
        "vietnamese": "Bác sĩ khuyên anh ấy nên nhanh chóng tiếp nhận phẫu thuật điều trị."
      },
      {
        "chinese": "他们再这样一直吵下去，早晚会离婚的。",
        "pinyin": "Tā men zài zhè yàng yī zhí chǎo xià qù, zǎo wǎn huì lí hūn de.",
        "vietnamese": "Họ mà cứ tiếp tục cãi vã mãi như thế này thì sớm muộn gì cũng ly hôn thôi."
      },
      {
        "chinese": "父母应该明白，孩子早晚是要独立生活的。",
        "pinyin": "Fù mǔ yīng gāi míng bái, hái zi zǎo wǎn shì yào dú lì shēng huó de.",
        "vietnamese": "Cha mẹ nên hiểu rằng, con cái sớm muộn gì cũng phải sống tự lập."
      }
    ]
  },
  {
    "id": "hsk5-g-07",
    "order": 7,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ tần suất HSK 5: 老是, 通常, 时常",
    "titleZh": "老是、通常、时常",
    "grammarType": "词类",
    "categoryType": "频率副词",
    "grammarDetail": "频率副词",
    "structure": "Chủ ngữ + 老是 / 通常 / 时常 + Vị ngữ",
    "explanationVi": "'老是' (cứ luôn, suốt ngày - thường mang ý phàn nàn trong khẩu ngữ); '通常' (thông thường, theo lẽ bình thường); '时常' (thường xuyên, thường hay - tương đương với 经常).",
    "tips": "'老是' mang sắc thái tình cảm không hài lòng, trách móc (老是迟到 - suốt ngày đi trễ), tránh dùng trong ngữ cảnh ngợi khen trang trọng.",
    "examples": [
      {
        "chinese": "他最近老是熬夜，所以脸色很不好。",
        "pinyin": "Tā zuì jìn lǎo shì áo yè, suǒ yǐ liǎn sè hěn bù hǎo.",
        "vietnamese": "Dạo này anh ấy cứ hay thức khuya suốt, nên sắc mặt rất kém."
      },
      {
        "chinese": "你出门老是忘记带钥匙，这个坏习惯一定要改！",
        "pinyin": "Nǐ chū mén lǎo shì wàng jì dài yào shi, zhè gè huài xí guàn yī dìng yào gǎi!",
        "vietnamese": "Cậu ra khỏi nhà cứ luôn quên mang chìa khóa, thói xấu này nhất định phải sửa!"
      },
      {
        "chinese": "旅行社通常在寒暑假生意更好。",
        "pinyin": "Lǚ xíng shè tōng cháng zài hán shǔ jiǎ shēng yì gèng hǎo.",
        "vietnamese": "Công ty lữ hành thông thường làm ăn phát đạt hơn vào các kỳ nghỉ đông và hè."
      },
      {
        "chinese": "中国的大学通常会为学生提供更换专业的机会。",
        "pinyin": "Zhōng guó de dà xué tōng cháng huì wèi xué shēng tí gōng gèng huàn zhuān yè de jī huì.",
        "vietnamese": "Các trường đại học ở Trung Quốc thông thường sẽ tạo cơ hội chuyển ngành cho sinh viên."
      },
      {
        "chinese": "他时常下班后去公园散步，顺便放松一下心情。",
        "pinyin": "Tā shí cháng xià bān hòu qù gōng yuán sàn bù, shùn biàn fàng sōng yī xià xīn qíng.",
        "vietnamese": "Anh ấy thường hay đi dạo ở công viên sau giờ làm, nhân tiện thư giãn tinh thần."
      },
      {
        "chinese": "夫妻二人的工作都很忙，所以时常没有人做家务。",
        "pinyin": "Fū qī èr rén de gōng zuò dōu hěn máng, suǒ yǐ shí cháng méi yǒu rén zuò jiā wù.",
        "vietnamese": "Công việc của hai vợ chồng đều rất bận rộn, cho nên thường xuyên chẳng có ai làm việc nhà."
      }
    ]
  },
  {
    "id": "hsk5-g-08",
    "order": 8,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ phương thức: 尽量, 亲自",
    "titleZh": "尽量、亲自",
    "grammarType": "词类",
    "categoryType": "方式副词",
    "grammarDetail": "方式副词",
    "structure": "尽量 / 亲自 + Động từ",
    "explanationVi": "'尽量' (hết sức cố gắng, ráng hết mức trong khả năng cho phép); '亲自' (đích thân, tự mình làm mà không thông qua người khác nhằm thể hiện sự tôn trọng hoặc trực tiếp).",
    "tips": "'尽量' phát âm chuẩn là jǐnliàng (thanh 3 khi là phó từ), không đọc jìnliàng.",
    "examples": [
      {
        "chinese": "冬天尽量少吃雪糕，容易着凉。",
        "pinyin": "Dōng tiān jǐn liàng shǎo chī xuě gāo, róng yì zhe liáng.",
        "vietnamese": "Mùa đông ráng cố gắng ăn ít kem thôi, rất dễ bị nhiễm lạnh."
      },
      {
        "chinese": "请大家尽量在本周五提交论文。",
        "pinyin": "Qǐng dà jiā jǐn liàng zài běn zhōu wǔ tí jiāo lùn wén.",
        "vietnamese": "Xin mọi người cố gắng hết sức nộp luận văn vào thứ Sáu tuần này."
      },
      {
        "chinese": "公司老板亲自参与了新产品的设计与开发。",
        "pinyin": "Gōng sī lǎo bǎn qīn zì cān yǔ le xīn chǎn pǐn de shè jì yǔ kāi fā.",
        "vietnamese": "Sếp công ty đã đích thân tham gia vào khâu thiết kế và phát triển sản phẩm mới."
      },
      {
        "chinese": "这些点心是我亲自为你做的。",
        "pinyin": "Zhè xiē diǎn xīn shì wǒ qīn zì wèi nǐ zuò de.",
        "vietnamese": "Những chiếc bánh điểm tâm này là do chính tay tôi làm riêng cho bạn đấy."
      }
    ]
  },
  {
    "id": "hsk5-g-09",
    "order": 9,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ liên kết: 便 (liền, thì) và 一旦 (một khi)",
    "titleZh": "便、一旦",
    "grammarType": "词类",
    "categoryType": "关联副词",
    "grammarDetail": "关联副词",
    "structure": "一...便... / 一旦...就...",
    "explanationVi": "'便' (biàn) tương đương với '就' nhưng mang sắc thái văn viết trang nhã hơn; '一旦' (yídàn) biểu thị điều kiện giả định xảy ra trong tương lai hoặc đột ngột: 'một khi đã... thì...'.",
    "tips": "'一旦' thường đi sóng đôi với '就' ở phân câu sau và thường nói về những bước ngoặt hoặc hậu quả hệ trọng.",
    "examples": [
      {
        "chinese": "会议一结束，我便赶回公司了。",
        "pinyin": "Huì yì yī jié shù, wǒ biàn gǎn huí gōng sī le.",
        "vietnamese": "Cuộc họp vừa kết thúc là tôi liền vội vã quay về công ty."
      },
      {
        "chinese": "这个学生很聪明，一教便懂。",
        "pinyin": "Zhè gè xué shēng hěn cōng míng, yī jiào biàn dǒng.",
        "vietnamese": "Học sinh này rất thông minh, vừa dạy một cái là hiểu liền."
      },
      {
        "chinese": "一旦确定了目标，就不要放弃。",
        "pinyin": "Yī dàn què dìng le mù biāo, jiù bù yào fàng qì.",
        "vietnamese": "Một khi đã xác định mục tiêu thì chớ có bỏ cuộc."
      },
      {
        "chinese": "这次机会非常难得，一旦错过了，你会后悔的。",
        "pinyin": "Zhè cì jī huì fēi cháng nán dé, yī dàn cuò guò le, nǐ huì hòu huǐ de.",
        "vietnamese": "Cơ hội lần này rất hiếm có, một khi đã bỏ lỡ, bạn sẽ hối hận đấy."
      }
    ]
  },
  {
    "id": "hsk5-g-10",
    "order": 10,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ tình thái mô phỏng: 似乎, 仿佛",
    "titleZh": "似乎、仿佛",
    "grammarType": "词类",
    "categoryType": "情态副词",
    "grammarDetail": "情态副词",
    "structure": "似乎 / 仿佛 (+ ...似的 / 一般)",
    "explanationVi": "'似乎' và '仿佛' đều biểu thị dự đoán không chắc chắn, cảm giác dường như, tựa như, có vẻ như. Thường kết hợp với '...似的' hoặc '一般' ở cuối phân câu.",
    "tips": "'仿佛' thường dùng trong văn học miêu tả so sánh ví von hình ảnh; '似乎' phổ biến cả trong lập luận và giao tiếp đời sống.",
    "examples": [
      {
        "chinese": "他似乎在犹豫要不要接受这份新工作。",
        "pinyin": "Tā shì hū zài yóu yù yào bù yào jiē shòu zhè fèn xīn gōng zuò.",
        "vietnamese": "Anh ấy dường như đang do dự xem có nên nhận công việc mới này không."
      },
      {
        "chinese": "这家便利店似乎两周前就关门了。",
        "pinyin": "Zhè jiā biàn lì diàn shì hū liǎng zhōu qián jiù guān mén le.",
        "vietnamese": "Cửa hàng tiện lợi này dường như đã đóng cửa từ hai tuần trước rồi."
      },
      {
        "chinese": "我们仿佛在哪儿见过似的。",
        "pinyin": "Wǒ men fǎng fú zài nǎr jiàn guò shì de.",
        "vietnamese": "Chúng ta dường như đã từng gặp nhau ở đâu đó rồi thì phải."
      },
      {
        "chinese": "他俩见面不打招呼，仿佛谁也不认识谁。",
        "pinyin": "Tā liǎ jiàn miàn bù dǎ zhāo hū, fǎng fú shuí yě bù rèn shí shuí.",
        "vietnamese": "Hai người họ gặp mặt không chào nhau, cứ như thể chẳng ai quen biết ai."
      }
    ]
  },
  {
    "id": "hsk5-g-11",
    "order": 11,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ ngữ khí cao cấp: 毕竟, 居然, 反正, 根本, 果然, 简直, 绝对, 的确, 反而, 白, 刚好, 可",
    "titleZh": "毕竟、居然、反正、根本、果然、简直、绝对、的确、反而、白、刚好、可3",
    "grammarType": "词类",
    "categoryType": "语气副词",
    "grammarDetail": "语气副词",
    "structure": "Chủ ngữ + Phó từ ngữ khí + Vị ngữ",
    "explanationVi": "Chùm phó từ biểu cảm tinh tế: '毕竟' (rốt cuộc, dẫu sao thì); '居然' (thế mà, lại - bất ngờ ngoài dự tính); '反正' (đằng nào thì, dù sao thì); '根本' (căn bản, hoàn toàn); '果然' (quả nhiên - đúng như dự đoán); '简直' (quả thật, quả đúng là - cường điệu); '绝对' (tuyệt đối); '的确' (đích thực, đúng thật); '反而' (ngược lại, trái lại); '白' (uổng công, làm vô ích); '刚好' (vừa khéo, vừa vặn); '可' (nhấn mạnh ngữ khí khẳng định hoặc cảnh báo: thật là, nhất định).",
    "tips": "Đây là nhóm phó từ xuất hiện với mật độ dày đặc nhất trong đề thi HSK 5 phần đọc hiểu và sắp xếp câu.",
    "examples": [
      {
        "chinese": "毕竟他刚来公司一个月，还需要时间适应。",
        "pinyin": "Bì jìng tā gāng lái gōng sī yī gè yuè, hái xū yào shí jiān shì yīng.",
        "vietnamese": "Dẫu sao anh ấy cũng mới đến công ty một tháng, vẫn cần thời gian thích nghi."
      },
      {
        "chinese": "他毕竟是个孩子，有些错误可以被原谅。",
        "pinyin": "Tā bì jìng shì gè hái zi, yǒu xiē cuò wù kě yǐ bèi yuán liàng.",
        "vietnamese": "Nó rốt cuộc vẫn là một đứa trẻ, một vài lỗi lầm có thể tha thứ được."
      },
      {
        "chinese": "昨天我才发现新来的同事居然是我的邻居。",
        "pinyin": "Zuó tiān wǒ cái fā xiàn xīn lái de tóng shì jū rán shì wǒ de lín jū.",
        "vietnamese": "Hôm qua tôi mới phát hiện đồng nghiệp mới đến thế mà lại là hàng xóm của tôi."
      },
      {
        "chinese": "这么冷的天他居然没穿外套。",
        "pinyin": "Zhè me lěng de tiān tā jū rán méi chuān wài tào.",
        "vietnamese": "Trời lạnh thế này mà anh ấy lại chẳng thèm mặc áo khoác ngoài."
      },
      {
        "chinese": "你要去就去吧，反正我肯定不会去。",
        "pinyin": "Nǐ yào qù jiù qù ba, fǎn zhèng wǒ kěn dìng bù huì qù.",
        "vietnamese": "Cậu muốn đi thì cứ đi đi, đằng nào thì tôi chắc chắn cũng không đi đâu."
      },
      {
        "chinese": "反正我已经辞职了，今晚加班我是不会去的。",
        "pinyin": "Fǎn zhèng wǒ yǐ jīng cí zhí le, jīn wǎn jiā bān wǒ shì bù huì qù de.",
        "vietnamese": "Dù sao thì tôi cũng đã từ chức rồi, tối nay tăng ca tôi sẽ không đi đâu."
      },
      {
        "chinese": "你不用再劝他了，他根本不会听。",
        "pinyin": "Nǐ bù yòng zài quàn tā le, tā gēn běn bù huì tīng.",
        "vietnamese": "Bạn không cần khuyên anh ấy nữa đâu, anh ấy căn bản sẽ chẳng nghe đâu."
      },
      {
        "chinese": "我看根本没必要追求完美，世界上不存在完美的人和事。",
        "pinyin": "Wǒ kàn gēn běn méi bì yào zhuī qiú wán měi, shì jiè shàng bù cún zài wán měi de rén hé shì.",
        "vietnamese": "Tôi thấy hoàn toàn chẳng có gì phải truy cầu sự hoàn hảo, trên đời không tồn tại người và việc hoàn hảo."
      },
      {
        "chinese": "她果然选择了自己最喜欢的文学专业。",
        "pinyin": "Tā guǒ rán xuǎn zé le zì jǐ zuì xǐ huān de wén xué zhuān yè.",
        "vietnamese": "Cô ấy quả nhiên đã chọn chuyên ngành văn học mà mình yêu thích nhất."
      },
      {
        "chinese": "他果然没有放弃，坚持完成了比赛。",
        "pinyin": "Tā guǒ rán méi yǒu fàng qì, jiān chí wán chéng le bǐ sài.",
        "vietnamese": "Anh ấy quả nhiên không từ bỏ, kiên trì hoàn thành cuộc thi."
      },
      {
        "chinese": "这简直是在开玩笑！",
        "pinyin": "Zhè jiǎn zhí shì zài kāi wán xiào!",
        "vietnamese": "Chuyện này quả thực đúng là trò đùa!"
      },
      {
        "chinese": "画面里的竹子简直像真的一样。",
        "pinyin": "Huà miàn lǐ de zhú zi jiǎn zhí xiàng zhēn de yī yàng.",
        "vietnamese": "Cây trúc trong bức tranh quả thật giống hệt như đồ thật."
      },
      {
        "chinese": "高科技绝对会成为各行各业发展的重要因素。",
        "pinyin": "Gāo kē jì jué duì huì chéng wèi gè xíng gè yè fā zhǎn de zhòng yào yīn sù.",
        "vietnamese": "Công nghệ cao tuyệt đối sẽ trở thành nhân tố quan trọng cho sự phát triển của mọi ngành nghề."
      },
      {
        "chinese": "老张这个人绝对可靠。",
        "pinyin": "Lǎo zhāng zhè gè rén jué duì kě kào.",
        "vietnamese": "Bác Trương người này tuyệt đối đáng tin cậy."
      },
      {
        "chinese": "近年来城乡差距的确缩小了不少。",
        "pinyin": "Jìn nián lái chéng xiāng chà jù de què suō xiǎo le bù shǎo.",
        "vietnamese": "Những năm gần đây khoảng cách thành thị và nông thôn đích thực đã thu hẹp đi nhiều."
      },
      {
        "chinese": "我今天上班的确迟到了，因为路上发生了交通事故。",
        "pinyin": "Wǒ jīn tiān shàng bān de què chí dào le, yīn wèi lù shàng fā shēng le jiāo tōng shì gù.",
        "vietnamese": "Hôm nay tôi đi làm đúng thật là đã đi trễ, vì trên đường xảy ra tai nạn giao thông."
      },
      {
        "chinese": "道歉不会损害企业的形象，反而能够赢得消费者的信任。",
        "pinyin": "Dào qiàn bù huì sǔn hài qǐ yè de xíng xiàng, fǎn ér néng gòu yíng dé xiāo fèi zhě de xìn rèn.",
        "vietnamese": "Xin lỗi không làm tổn hại hình ảnh doanh nghiệp, trái lại còn giành được niềm tin của người tiêu dùng."
      },
      {
        "chinese": "我妈妈退休以后反而更忙了。",
        "pinyin": "Wǒ mā mā tuì xiū yǐ hòu fǎn ér gèng máng le.",
        "vietnamese": "Mẹ tôi sau khi nghỉ hưu ngược lại còn bận rộn hơn trước."
      },
      {
        "chinese": "不用白费力气了，结果已经无法改变了。",
        "pinyin": "Bù yòng bái fèi lì qì le, jié guǒ yǐ jīng wú fǎ gǎi biàn le.",
        "vietnamese": "Đừng uổng phí công sức nữa, kết quả đã không thể thay đổi được rồi."
      },
      {
        "chinese": "妈妈的话白说了，孩子并没有听。",
        "pinyin": "Mā mā de huà bái shuō le, hái zi bìng méi yǒu tīng.",
        "vietnamese": "Lời mẹ nói uổng công vô ích rồi, con trẻ chẳng hề nghe theo."
      },
      {
        "chinese": "今天刚好有空儿，咱们去爬山吧。",
        "pinyin": "Jīn tiān gāng hǎo yǒu kòngr, zán men qù pá shān ba.",
        "vietnamese": "Hôm nay vừa khéo có chút thời gian rảnh, chúng mình đi leo núi đi."
      },
      {
        "chinese": "我们去找他玩的时候，他刚好做完作业。",
        "pinyin": "Wǒ men qù zhǎo tā wán de shí hòu, tā gāng hǎo zuò wán zuò yè.",
        "vietnamese": "Lúc chúng tôi tìm đến rủ cậu ấy đi chơi, cậu ấy vừa vặn làm xong bài tập."
      },
      {
        "chinese": "这么难得的机会，你可不能错过啊！",
        "pinyin": "Zhè me nán dé de jī huì, nǐ kě bù néng cuò guò a!",
        "vietnamese": "Cơ hội hiếm có thế này, bạn nhất định không được bỏ lỡ đâu đấy!"
      },
      {
        "chinese": "下周就要比赛了，咱们可得抓紧时间训练。",
        "pinyin": "Xià zhōu jiù yào bǐ sài le, zán men kě dé zhuā jǐn shí jiān xùn liàn.",
        "vietnamese": "Tuần tới là thi đấu rồi, chúng ta thật sự phải tranh thủ thời gian rèn luyện thôi."
      }
    ]
  },
  {
    "id": "hsk5-g-12",
    "order": 12,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ chỉ mốc khởi điểm thời gian: 自从 (Kể từ khi...)",
    "titleZh": "自从",
    "grammarType": "词类",
    "categoryType": "引出时间、处所",
    "grammarDetail": "引出时间、处所",
    "structure": "自从 + Thời gian / Sự kiện (+ 以来 / 以后)，...",
    "explanationVi": "'自从' dùng để dẫn xuất thời điểm bắt đầu một sự việc trong quá khứ kéo dài đến hiện tại hoặc đến một thời điểm xác định. Thường đi kèm '以来' hoặc '以后'.",
    "tips": "'自从' chỉ dùng cho mốc thời gian quá khứ, không dùng cho mốc tương lai.",
    "examples": [
      {
        "chinese": "自从和丈夫离了婚，她一个人去了很多地方旅行。",
        "pinyin": "Zì cóng hé zhàng fū lí le hūn, tā yī gè rén qù le hěn duō dì fāng lǚ xíng.",
        "vietnamese": "Kể từ sau khi ly hôn với chồng, cô ấy một mình đi du lịch rất nhiều nơi."
      },
      {
        "chinese": "自从进入大学，每次与就业有关的讲座他都会参加。",
        "pinyin": "Zì cóng jìn rù dà xué, měi cì yǔ jiù yè yǒu guān de jiǎng zuò tā dōu huì cān jiā.",
        "vietnamese": "Kể từ khi vào đại học, buổi tọa đàm nào liên quan đến việc làm anh ấy cũng đều tham dự."
      }
    ]
  },
  {
    "id": "hsk5-g-13",
    "order": 13,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ phương hướng và đường đi: 朝 (về hướng), 沿/沿着 (dọc theo, men theo)",
    "titleZh": "朝、沿（着）",
    "grammarType": "词类",
    "categoryType": "引出方向、路径",
    "grammarDetail": "引出方向、路径",
    "structure": "朝 + Phương hướng + Động từ / 沿着 + Tuyến đường / Con đường + Động từ",
    "explanationVi": "'朝' (cháo) chỉ hướng mục tiêu của hành động (朝东走 - đi về hướng đông, 朝南飞 - bay về hướng nam); '沿着' (yánzhe) chỉ quỹ đạo chuyển động dọc theo một tuyến đường, bờ tường hoặc hướng tư duy (沿着这个思路).",
    "tips": "Khác với '向', '朝' không đi trước một số động từ trừu tượng như 向...学习 (không nói 朝...学习).",
    "examples": [
      {
        "chinese": "沿着这条路朝东走就是我们今晚要住的酒店。",
        "pinyin": "Yán zhe zhè tiáo lù cháo dōng zǒu jiù shì wǒ men jīn wǎn yào zhù de jiǔ diàn.",
        "vietnamese": "Men theo con đường này đi về hướng đông chính là khách sạn tối nay chúng ta ở."
      },
      {
        "chinese": "冬天许多鸟都会朝南方温暖的地方飞去。",
        "pinyin": "Dōng tiān xǔ duō niǎo dōu huì cháo nán fāng wēn nuǎn de dì fāng fēi qù.",
        "vietnamese": "Mùa đông rất nhiều loài chim đều bay về hướng phương nam ấm áp."
      },
      {
        "chinese": "沿着这条高速公路一直开，就能到达那座城市。",
        "pinyin": "Yán zhe zhè tiáo gāo sù gōng lù yī zhí kāi, jiù néng dào dá nà zuò chéng shì.",
        "vietnamese": "Cứ lái thẳng theo tuyến đường cao tốc này là có thể đến được thành phố đó."
      },
      {
        "chinese": "老人沿着墙边种了很多花。",
        "pinyin": "Lǎo rén yán zhe qiáng biān zhǒng le hěn duō huā.",
        "vietnamese": "Cụ già trồng rất nhiều hoa dọc theo chân tường."
      },
      {
        "chinese": "你沿着这个思路进行下去，就能找到解决问题的方法。",
        "pinyin": "Nǐ yán zhe zhè gè sī lù jìn xíng xià qù, jiù néng zhǎo dào jiě jué wèn tí de fāng fǎ.",
        "vietnamese": "Bạn cứ bám theo hướng suy nghĩ này tiếp tục đi, sẽ tìm ra phương pháp giải quyết vấn đề."
      }
    ]
  },
  {
    "id": "hsk5-g-14",
    "order": 14,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ dẫn xuất đối tượng: 替 (thay), 同 (cùng/với), 较 (so với)",
    "titleZh": "替、同1、较2",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "替 + Ai + Động từ / 同 + Ai + Động từ / 较 + Đối tượng so sánh",
    "explanationVi": "'替' biểu thị hành động thay thế ai hoặc vì lợi ích của ai; '同' dẫn xuất đối tượng cùng tham gia (tương đương 跟, 和); '较' dùng trong văn viết so sánh độ chênh lệch (较去年 - so với năm ngoái).",
    "tips": "'较' khi làm giới từ có nghĩa là 'so với' (较去年增长), khác với phó từ '较' mang nghĩa 'tương đối' (较高, 较快).",
    "examples": [
      {
        "chinese": "希望这次采访能替我们宣传一下公司的新产品。",
        "pinyin": "Xī wàng zhè cì cǎi fǎng néng tì wǒ men xuān chuán yī xià gōng sī de xīn chǎn pǐn.",
        "vietnamese": "Hi vọng buổi phỏng vấn lần này có thể thay chúng tôi quảng bá sản phẩm mới của công ty."
      },
      {
        "chinese": "我出差期间，同事替我照顾我的宠物。",
        "pinyin": "Wǒ chū chà qī jiān, tóng shì tì wǒ zhào gù wǒ de chǒng wù.",
        "vietnamese": "Trong thời gian tôi đi công tác, đồng nghiệp thay tôi chăm sóc thú cưng."
      },
      {
        "chinese": "汉语同其他语言一样，有很多独特的表达方式。",
        "pinyin": "Hàn yǔ tóng qí tā yǔ yán yī yàng, yǒu hěn duō dú tè de biǎo dá fāng shì.",
        "vietnamese": "Tiếng Hán cũng giống như các ngôn ngữ khác, có rất nhiều cách diễn đạt độc đáo."
      },
      {
        "chinese": "这件事我得同父母谈谈，看看他们同意不同意。",
        "pinyin": "Zhè jiàn shì wǒ dé tóng fù mǔ tán tán, kàn kàn tā men tóng yì bù tóng yì.",
        "vietnamese": "Chuyện này con phải nói chuyện với bố mẹ, xem bố mẹ có đồng ý hay không."
      },
      {
        "chinese": "今年的放假时间较去年稍有变化。",
        "pinyin": "Jīn nián de fàng jiǎ shí jiān jiào qù nián shāo yǒu biàn huà.",
        "vietnamese": "Thời gian nghỉ lễ năm nay so với năm ngoái có đôi chút thay đổi."
      },
      {
        "chinese": "本月产品销量较上月增长百分之十五。",
        "pinyin": "Běn yuè chǎn pǐn xiāo liàng jiào shàng yuè zēng zhǎng bǎi fēn zhī shí wǔ.",
        "vietnamese": "Sản lượng tiêu thụ sản phẩm tháng này so với tháng trước tăng 15%."
      }
    ]
  },
  {
    "id": "hsk5-g-15",
    "order": 15,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ căn cứ, bằng chứng: 凭 (Dựa vào, nhờ vào)",
    "titleZh": "凭",
    "grammarType": "词类",
    "categoryType": "引出凭借、依据",
    "grammarDetail": "引出凭借、依据",
    "structure": "凭 + Bằng chứng / Năng lực / Giấy tờ + Vị ngữ",
    "explanationVi": "'凭' (píng) dẫn xuất căn cứ, bằng cấp, vé vào cổng, hoặc năng lực, tư cách để thực hiện một việc nào đó ('凭票入场' - vào cổng bằng vé, '凭这部电影' - nhờ vào bộ phim này).",
    "tips": "'凭什么' là câu khẩu ngữ chất vấn rất phổ biến: 'Dựa vào cái gì chứ?!'.",
    "examples": [
      {
        "chinese": "她凭这部电影成为了今年的最佳导演。",
        "pinyin": "Tā píng zhè bù diàn yǐng chéng wèi le jīn nián de zuì jiā dǎo yǎn.",
        "vietnamese": "Cô ấy nhờ vào bộ phim này mà trở thành đạo diễn xuất sắc nhất năm nay."
      },
      {
        "chinese": "凭这张票，你可以免费参观这场展览。",
        "pinyin": "Píng zhè zhāng piào, nǐ kě yǐ miǎn fèi cān guān zhè chǎng zhǎn lǎn.",
        "vietnamese": "Dựa vào tấm vé này, bạn có thể tham quan miễn phí buổi triển lãm này."
      }
    ]
  },
  {
    "id": "hsk5-g-16",
    "order": 16,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ dẫn xuất nguồn tin: 据 (Căn cứ vào, theo như...)",
    "titleZh": "据",
    "grammarType": "词类",
    "categoryType": "引出凭借、依据",
    "grammarDetail": "引出凭借、依据",
    "structure": "据 + Nguồn tin / Số liệu / Người quan sát，...",
    "explanationVi": "'据' (jù) thường đứng đầu câu để trích dẫn nguồn số liệu, thông tin hoặc quan sát chủ quan (据报道 - theo báo cáo, 据统计 - theo thống kê, 据我所知 - theo tôi được biết, 据我观察 - theo tôi quan sát).",
    "tips": "'据' mang tính văn viết cao, giúp câu trích dẫn dữ liệu mang tính khách quan khoa học.",
    "examples": [
      {
        "chinese": "据我们掌握的数据，这个地区的石油资源十分丰富。",
        "pinyin": "Jù wǒ men zhǎng wò de shù jù, zhè gè dì qū de shí yóu zī yuán shí fēn fēng fù.",
        "vietnamese": "Căn cứ vào số liệu chúng tôi nắm giữ, tài nguyên dầu mỏ của khu vực này vô cùng phong phú."
      },
      {
        "chinese": "据我观察，这个问题不难解决。",
        "pinyin": "Jù wǒ guān chá, zhè gè wèn tí bù nán jiě jué.",
        "vietnamese": "Theo như tôi quan sát, vấn đề này không hề khó giải quyết."
      }
    ]
  },
  {
    "id": "hsk5-g-17",
    "order": 17,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ dẫn xuất căn cứ pháp lý, nguyên tắc: 依据 (Dựa theo, căn cứ vào)",
    "titleZh": "依据",
    "grammarType": "词类",
    "categoryType": "引出凭借、依据",
    "grammarDetail": "引出凭借、依据",
    "structure": "依据 + Tiêu chuẩn / Quy định / Nhu cầu + Động từ",
    "explanationVi": "'依据' làm giới từ dùng để nêu chuẩn mực, quy tắc, pháp luật hoặc nhu cầu thực tế làm điểm tựa cho hành vi hoặc quyết định.",
    "tips": "'依据' vừa là danh từ (bằng chứng, căn cứ: 毫无依据), vừa là giới từ (căn cứ theo: 依据法律).",
    "examples": [
      {
        "chinese": "法律的修改应当依据社会现实。",
        "pinyin": "Fǎ lǜ de xiū gǎi yīng dāng yī jù shè huì xiàn shí.",
        "vietnamese": "Việc sửa đổi pháp luật nên căn cứ theo hiện thực xã hội."
      },
      {
        "chinese": "企业要依据消费者的需求研发新产品。",
        "pinyin": "Qǐ yè yào yī jù xiāo fèi zhě de xū qiú yán fā xīn chǎn pǐn.",
        "vietnamese": "Doanh nghiệp cần phải dựa theo nhu cầu của người tiêu dùng để nghiên cứu phát triển sản phẩm mới."
      }
    ]
  },
  {
    "id": "hsk5-g-18",
    "order": 18,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Liên từ kết nối từ ngữ: 以及 (cũng như), 同 (và, cùng)",
    "titleZh": "以及、同2",
    "grammarType": "词类",
    "categoryType": "连接词或词组",
    "grammarDetail": "连接词或词组",
    "structure": "A、B 以及 C / A 同 B",
    "explanationVi": "'以及' dùng để nối các danh từ hoặc ngữ danh từ đẳng lập, thường đặt trước thành phần cuối cùng được liệt kê và thành phần sau '以及' thường giữ vai trò thứ yếu hoặc bổ sung; '同' dùng như liên từ nối danh từ tương đương '和, 与'.",
    "tips": "'以及' không dùng để nối hai phân câu độc lập hay động từ chính mang tính độc lập hoàn toàn.",
    "examples": [
      {
        "chinese": "他负责项目的设计、执行以及最终的总结工作。",
        "pinyin": "Tā fù zé xiàng mù de shè jì, zhí xíng yǐ jí zuì zhōng de zǒng jié gōng zuò.",
        "vietnamese": "Anh ấy phụ trách công tác thiết kế, triển khai cũng như tổng kết sau cùng của dự án."
      },
      {
        "chinese": "我对这本书的内容以及作者还不太了解，你能介绍一下吗？",
        "pinyin": "Wǒ duì zhè běn shū de nèi róng yǐ jí zuò zhě hái bù tài le jiě, nǐ néng jiè shào yī xià ma?",
        "vietnamese": "Tôi vẫn chưa hiểu rõ lắm về nội dung cũng như tác giả của cuốn sách này, bạn có thể giới thiệu một chút không?"
      },
      {
        "chinese": "你同新来的同事一起去吧，顺便给他介绍一下公司的情况。",
        "pinyin": "Nǐ tóng xīn lái de tóng shì yī qǐ qù ba, shùn biàn gěi tā jiè shào yī xià gōng sī de qíng kuàng.",
        "vietnamese": "Cậu cùng đi với đồng nghiệp mới đến đi, tiện thể giới thiệu tình hình công ty cho anh ấy."
      },
      {
        "chinese": "这项比赛要求孩子同家长一起参加。",
        "pinyin": "Zhè xiàng bǐ sài yào qiú hái zi tóng jiā zhǎng yī qǐ cān jiā.",
        "vietnamese": "Cuộc thi này yêu cầu trẻ em cùng tham gia với phụ huynh."
      }
    ]
  },
  {
    "id": "hsk5-g-19",
    "order": 19,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Liên từ nối phân câu logic: 从而, 可见, 假如, 总之",
    "titleZh": "从而、可见、假如、总之",
    "grammarType": "词类",
    "categoryType": "连接分句或句子",
    "grammarDetail": "连接分句或句子",
    "structure": "Phân câu 1，从而 / 可见 / 假如 / 总之 + Phân câu 2",
    "explanationVi": "'从而' (từ đó, qua đó dẫn đến kết quả tiếp theo); '可见' (có thể thấy, chứng tỏ - rút ra kết luận logic từ tiền đề trước); '假如' (giả sử, nếu như); '总之' (tóm lại, nói tóm lại - khái quát hóa toàn bộ ý trước).",
    "tips": "'从而' chỉ dùng khi vế trước là phương thức/nguyên nhân và vế sau là kết quả tất nhiên của phương thức đó.",
    "examples": [
      {
        "chinese": "学校更新了教学设备，从而为学生提供了更好的学习环境。",
        "pinyin": "Xué xiào gèng xīn le jiào xué shè bèi, cóng ér wèi xué shēng tí gōng le gèng hǎo de xué xí huán jìng.",
        "vietnamese": "Nhà trường đã nâng cấp trang thiết bị giảng dạy, từ đó mang đến môi trường học tập tốt hơn cho học sinh."
      },
      {
        "chinese": "这次合作让我们加深了对彼此的了解，从而建立了深厚的友谊。",
        "pinyin": "Zhè cì hé zuò ràng wǒ men jiā shēn le duì bǐ cǐ de le jiě, cóng ér jiàn lì le shēn hòu de yǒu yì.",
        "vietnamese": "Lần hợp tác này giúp chúng tôi hiểu sâu hơn về nhau, nhờ đó xây dựng nên tình bạn bền chặt."
      },
      {
        "chinese": "他每天都工作到很晚，可见他十分热爱这份工作。",
        "pinyin": "Tā měi tiān dōu gōng zuò dào hěn wǎn, kě jiàn tā shí fēn rè ài zhè fèn gōng zuò.",
        "vietnamese": "Anh ấy ngày nào cũng làm việc đến rất muộn, có thể thấy anh ấy vô cùng yêu thích công việc này."
      },
      {
        "chinese": "他的演讲得到了热烈的掌声，可见大家都很支持他的观点。",
        "pinyin": "Tā de yǎn jiǎng dé dào le rè liè de zhǎng shēng, kě jiàn dà jiā dōu hěn zhī chí tā de guān diǎn.",
        "vietnamese": "Bài diễn thuyết của anh ấy nhận được tràng pháo tay nhiệt liệt, chứng tỏ mọi người đều rất ủng hộ quan điểm của anh ấy."
      },
      {
        "chinese": "假如让我重新选择，我还是会选择医学专业。",
        "pinyin": "Jiǎ rú ràng wǒ zhòng xīn xuǎn zé, wǒ hái shì huì xuǎn zé yī xué zhuān yè.",
        "vietnamese": "Giả sử cho tôi lựa chọn lại, tôi vẫn sẽ chọn chuyên ngành y học."
      },
      {
        "chinese": "假如你有机会出国旅行，你最想去哪个国家？",
        "pinyin": "Jiǎ rú nǐ yǒu jī huì chū guó lǚ xíng, nǐ zuì xiǎng qù nǎ gè guó jiā?",
        "vietnamese": "Giả sử bạn có cơ hội đi du lịch nước ngoài, bạn muốn đến quốc gia nào nhất?"
      },
      {
        "chinese": "一个人在国外生活，要自己照顾自己，还要学习当地的语言和文化，总之，挺不容易的。",
        "pinyin": "Yī gè rén zài guó wài shēng huó, yào zì jǐ zhào gù zì jǐ, hái yào xué xí dāng dì de yǔ yán hé wén huà, zǒng zhī, tǐng bù róng yì de.",
        "vietnamese": "Một mình sống ở nước ngoài, phải tự chăm sóc bản thân, lại còn phải học ngôn ngữ và văn hóa bản địa, tóm lại là rất không dễ dàng."
      },
      {
        "chinese": "你同意也好，不同意也好，总之，我一定要去北京。",
        "pinyin": "Nǐ tóng yì yě hǎo, bù tóng yì yě hǎo, zǒng zhī, wǒ yī dìng yào qù běi jīng.",
        "vietnamese": "Cậu đồng ý cũng được, không đồng ý cũng được, tóm lại tôi nhất định phải đi Bắc Kinh."
      }
    ]
  },
  {
    "id": "hsk5-g-20",
    "order": 20,
    "category": "tu-loai",
    "categoryName": "Từ loại & Hình vị (Phó từ, Giới từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Trợ từ so sánh ví von: 似的 (Tựa như... vậy)",
    "titleZh": "似的",
    "grammarType": "词类",
    "categoryType": "其他助词",
    "grammarDetail": "其他助词",
    "structure": "像 / 跟...似的",
    "explanationVi": "'似的' (shìde) là trợ từ đặt ở cuối cụm từ hoặc phân câu sau '像...' hoặc '仿佛...', biểu thị sự so sánh ví von hoặc cảm giác tương tự.",
    "tips": "Lưu ý chữ '似' ở đây đọc là 'shì', không đọc là 'sì'.",
    "examples": [
      {
        "chinese": "她笑得像个孩子似的。",
        "pinyin": "Tā xiào dé xiàng gè hái zi shì de.",
        "vietnamese": "Cô ấy cười tít mắt hệt như một đứa trẻ con vậy."
      },
      {
        "chinese": "他们讨论得很激烈，像是要吵起来似的。",
        "pinyin": "Tā men tǎo lùn dé hěn jī liè, xiàng shì yào chǎo qǐ lái shì de.",
        "vietnamese": "Họ tranh luận dữ dội, trông cứ như thể sắp sửa cãi nhau đến nơi vậy."
      }
    ]
  },
  {
    "id": "hsk5-g-21",
    "order": 21,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ lặp lại: A来A去 (Hành động qua lại nhiều lần)",
    "titleZh": "A来A去",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "A 来 A 去 (Động từ A đơn âm tiết)",
    "explanationVi": "Cấu trúc 4 chữ dùng động từ đơn âm tiết 'A' để diễn tả hành động lặp đi lặp lại nhiều lần, dây dưa hoặc chuyển động qua lại giữa các địa điểm/suy nghĩ (想来想去 - nghĩ đi nghĩ lại, 走来走去 - đi đi lại lại, 飞来飞去 - bay qua bay lại, 争来争去 - tranh cãi qua lại).",
    "tips": "Động từ A phải là động từ đơn âm tiết (想, 走, 飞, 跑, 挑, 选...).",
    "examples": [
      {
        "chinese": "我们争来争去，还是没找到最佳方案。",
        "pinyin": "Wǒ men zhēng lái zhēng qù, hái shì méi zhǎo dào zuì jiā fāng àn.",
        "vietnamese": "Chúng tôi tranh cãi qua lại, rốt cuộc vẫn chưa tìm ra phương án tối ưu."
      },
      {
        "chinese": "他工作很忙，经常在国内外飞来飞去。",
        "pinyin": "Tā gōng zuò hěn máng, jīng cháng zài guó nèi wài fēi lái fēi qù.",
        "vietnamese": "Công việc của anh ấy rất bận, thường xuyên bay đi bay lại khắp trong và ngoài nước."
      },
      {
        "chinese": "我想来想去，决定先不告诉她这个坏消息。",
        "pinyin": "Wǒ xiǎng lái xiǎng qù, jué dìng xiān bù gào sù tā zhè gè huài xiāo xī.",
        "vietnamese": "Tôi suy đi tính lại, quyết định tạm thời không báo cho cô ấy tin dữ này."
      }
    ]
  },
  {
    "id": "hsk5-g-22",
    "order": 22,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ trạng thái tiếp diễn: A着A着 (Đang làm dở thì...)",
    "titleZh": "A着A着",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "A 着 A 着 + Kết quả đột ngột / Sự kiện mới",
    "explanationVi": "Biểu thị hành động A đang diễn ra liên tục thì đột nhiên có một tình huống hoặc trạng thái mới xuất hiện ngoài ý muốn (走着走着迷路了 - đang đi thì phát hiện lạc đường, 聊着聊着睡着了 - đang nói chuyện thì ngủ quên mất).",
    "tips": "Vế sau luôn diễn tả kết quả hoặc trạng thái phát sinh bất ngờ trong quá trình của A.",
    "examples": [
      {
        "chinese": "我今天太困了，写着写着作业就睡着了。",
        "pinyin": "Wǒ jīn tiān tài kùn le, xiě zhe xiě zhe zuò yè jiù shuì zhe le.",
        "vietnamese": "Hôm nay tôi buồn ngủ quá, đang viết bài tập dở thì lăn ra ngủ quên mất."
      },
      {
        "chinese": "他走着走着，突然发现自己迷路了。",
        "pinyin": "Tā zǒu zhe zǒu zhe, tū rán fā xiàn zì jǐ mí lù le.",
        "vietnamese": "Anh ấy đang đi bỗng nhiên phát hiện ra mình đã bị lạc đường."
      }
    ]
  },
  {
    "id": "hsk5-g-23",
    "order": 23,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ phủ định song hành: 没A没B (Không kể, không biết...)",
    "titleZh": "没A没B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "没 A 没 B",
    "explanationVi": "Thành ngữ khẩu ngữ biểu thị tính chất thiếu chừng mực, không có giới hạn hoặc không biết phép tắc: '没日没夜' (ngày đêm không nghỉ, quên ăn quên ngủ), '没大没小' (không biết lớn bé, hỗn xược), '没完没了' (bất tận, không dứt).",
    "tips": "Là các thành ngữ khẩu ngữ rất sinh động, thường dùng để phê bình hoặc cường điệu mức độ.",
    "examples": [
      {
        "chinese": "你这样没日没夜地工作，身体早晚会出问题的。",
        "pinyin": "Nǐ zhè yàng méi rì méi yè dì gōng zuò, shēn tǐ zǎo wǎn huì chū wèn tí de.",
        "vietnamese": "Cậu cứ làm việc không kể ngày đêm như thế, sức khỏe sớm muộn gì cũng sinh chuyện thôi."
      },
      {
        "chinese": "这孩子说话没大没小，父母必须要好好教育。",
        "pinyin": "Zhè hái zi shuō huà méi dà méi xiǎo, fù mǔ bì xū yào hǎo hǎo jiào yù.",
        "vietnamese": "Đứa bé này ăn nói không biết lớn bé, cha mẹ nhất định phải dạy bảo cho đàng hoàng."
      }
    ]
  },
  {
    "id": "hsk5-g-24",
    "order": 24,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ quyết đoán dứt khoát: 说A就A (Nói là làm ngay)",
    "titleZh": "说A就A",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "说 A 就 A",
    "explanationVi": "Biểu thị sự quyết đoán, nhanh chóng, hành động diễn ra tức thì sau lời nói hoặc ý nghĩ mà không hề chần chừ do dự ('说走就走的旅行' - chuyến đi xách ba lô lên và đi ngay, '说干就干' - nói là bắt tay làm ngay).",
    "tips": "'说走就走' là cụm từ thời thượng cực kỳ nổi tiếng trong giới trẻ Trung Quốc khi nói về du lịch tự do.",
    "examples": [
      {
        "chinese": "越来越多的年轻人选择说走就走的旅行。",
        "pinyin": "Yuè lái yuè duō de nián qīng rén xuǎn zé shuō zǒu jiù zǒu de lǚ xíng.",
        "vietnamese": "Ngày càng nhiều bạn trẻ chọn những chuyến đi xách ba lô lên và đi ngay."
      },
      {
        "chinese": "他总是说干就干，从不浪费时间。",
        "pinyin": "Tā zǒng shì shuō gàn jiù gàn, cóng bù làng fèi shí jiān.",
        "vietnamese": "Anh ấy luôn nói là làm liền, không bao giờ lãng phí thời gian."
      }
    ]
  },
  {
    "id": "hsk5-g-25",
    "order": 25,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm khẩu ngữ đặc biệt: 不得了 (Vô cùng / Nguy to rồi)",
    "titleZh": "不得了",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "Tính từ + 得不得了 / 不得了了，...",
    "explanationVi": "Có hai cách dùng chính: 1) Làm bổ ngữ mức độ đứng sau tính từ mang nghĩa 'cực kỳ, vô cùng' (好得不得了, 忙得不得了); 2) Đứng đầu câu làm từ cảm thán báo hiệu sự việc nghiêm trọng 'Nguy to rồi!, Hỏng rồi!' (不得了了，着火了!).",
    "tips": "Chú ý ngữ cảnh: khi làm bổ ngữ có thể mang nghĩa khen hoặc chê; khi đứng độc lập đầu câu luôn báo hiệu sự cố.",
    "examples": [
      {
        "chinese": "他最近的表现好得不得了，老师都说他进步很大。",
        "pinyin": "Tā zuì jìn de biǎo xiàn hǎo dé bù dé le, lǎo shī dōu shuō tā jìn bù hěn dà.",
        "vietnamese": "Biểu hiện dạo này của cậu ấy tốt vô cùng, giáo viên đều khen cậu ấy tiến bộ rất lớn."
      },
      {
        "chinese": "不得了了，厨房着火了！",
        "pinyin": "Bù dé le le, chú fáng zhe huǒ le!",
        "vietnamese": "Nguy to rồi, nhà bếp bị cháy rồi!"
      }
    ]
  },
  {
    "id": "hsk5-g-26",
    "order": 26,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm khẩu ngữ: 用不着 (Không cần thiết, không đáng)",
    "titleZh": "用不着",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "用不着 + Động từ / Danh từ",
    "explanationVi": "Là bổ ngữ khả năng cố định mang nghĩa 'không cần thiết, chẳng việc gì phải...' (tương đương 不用, 没必要). Thường dùng để an ủi, khuyên can hoặc từ chối sự giúp đỡ.",
    "tips": "Dạng khẳng định tương ứng là '用得着' (có cần đến, có ích vào việc gì).",
    "examples": [
      {
        "chinese": "这点儿小病，用不着去医院。",
        "pinyin": "Zhè diǎn ér xiǎo bìng, yòng bù zhe qù yī yuàn.",
        "vietnamese": "Chút bệnh vặt này không cần phải đến bệnh viện đâu."
      },
      {
        "chinese": "这件事用不着大家都来帮忙，我自己就能完成。",
        "pinyin": "Zhè jiàn shì yòng bù zhe dà jiā dōu lái bāng máng, wǒ zì jǐ jiù néng wán chéng.",
        "vietnamese": "Việc này không cần tất cả mọi người cùng đến giúp đâu, một mình tôi cũng có thể hoàn thành."
      },
      {
        "chinese": "我们还有时间，你现在用不着着急。",
        "pinyin": "Wǒ men hái yǒu shí jiān, nǐ xiàn zài yòng bù zhe zhe jí.",
        "vietnamese": "Chúng ta vẫn còn thời gian, lúc này bạn không cần phải sốt ruột."
      }
    ]
  },
  {
    "id": "hsk5-g-27",
    "order": 27,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc quan điểm, góc nhìn: 从……来看 (Nhìn từ góc độ... mà xét)",
    "titleZh": "从……来看",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "从 + Góc độ / Tiêu chí / Dữ liệu + 来看，...",
    "explanationVi": "Đưa ra căn cứ, tiêu chuẩn hoặc góc độ nhận định nhằm đánh giá một sự việc (从这次考试成绩来看 - nhìn từ điểm thi lần này mà xét, 从长远来看 - nhìn về lâu về dài).",
    "tips": "Là cấu trúc 'vàng' mở đầu phân tích trong bài viết nghị luận HSK 5 và HSK 6.",
    "examples": [
      {
        "chinese": "从这次的考试成绩来看，大家都付出了很多努力。",
        "pinyin": "Cóng zhè cì de kǎo shì chéng jì lái kàn, dà jiā dōu fù chū le hěn duō nǔ lì.",
        "vietnamese": "Xem xét từ thành tích thi lần này, mọi người đều đã bỏ ra rất nhiều nỗ lực."
      },
      {
        "chinese": "从长远来看，掌握一门外语对个人发展很有帮助。",
        "pinyin": "Cóng zhǎng yuǎn lái kàn, zhǎng wò yī mén wài yǔ duì gè rén fā zhǎn hěn yǒu bāng zhù.",
        "vietnamese": "Nhìn về lâu về dài, nắm vững một ngoại ngữ rất có ích cho sự phát triển của cá nhân."
      }
    ]
  },
  {
    "id": "hsk5-g-28",
    "order": 28,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc phân hóa đa dạng: A的A，B的B (Kẻ thì làm A, người thì làm B)",
    "titleZh": "A的A，B的B",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "A 的 A，B 的 B",
    "explanationVi": "Dùng để miêu tả cảnh tượng sinh động nơi có nhiều người/vật đang làm các hành động khác nhau hoặc có các tính chất tương phản cùng tồn tại (跑的跑，跳的跳 - đứa thì chạy đứa thì nhảy; 大的大，小的小 - cái thì to cái thì nhỏ).",
    "tips": "A và B có thể là động từ hành động hoặc tính từ tương phản.",
    "examples": [
      {
        "chinese": "这些汉字写得大的大、小的小，一点儿也不整齐。",
        "pinyin": "Zhè xiē hàn zì xiě dé dà de dà, xiǎo de xiǎo, yìdiǎnr yě bù zhěng qí.",
        "vietnamese": "Mấy chữ Hán này viết chữ thì to chữ thì nhỏ, chẳng đều đặn ngay ngắn chút nào."
      },
      {
        "chinese": "广场上孩子们跑的跑，跳的跳，热闹极了。",
        "pinyin": "Guǎng chǎng shàng hái zi men pǎo de pǎo, tiào de tiào, rè nào jí le.",
        "vietnamese": "Trên quảng trường lũ trẻ đứa thì chạy đứa thì nhảy, náo nhiệt vô cùng."
      }
    ]
  },
  {
    "id": "hsk5-g-29",
    "order": 29,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc khoảng thời gian: （自）……以来 (Kể từ... đến nay)",
    "titleZh": "（自）……以来",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "（自）+ Mốc sự kiện / Thời gian + 以来，...",
    "explanationVi": "Dùng trong văn viết để biểu thị suốt một khoảng thời gian liên tục tính từ một mốc thời điểm hoặc sự kiện trọng đại trong quá khứ cho tới thời điểm nói.",
    "tips": "'自' có thể lược bỏ, chỉ giữ lại '...以来' (ví dụ: 去世以来, 长期以来, 改革开放以来).",
    "examples": [
      {
        "chinese": "自改革开放以来，中国社会发生了巨大的改变。",
        "pinyin": "Zì gǎi gé kāi fàng yǐ lái, zhōng guó shè huì fā shēng le jù dà de gǎi biàn.",
        "vietnamese": "Kể từ khi cải cách mở cửa đến nay, xã hội Trung Quốc đã diễn ra những biến đổi to lớn."
      },
      {
        "chinese": "外公去世以来，我时常梦到他。",
        "pinyin": "Wài gōng qù shì yǐ lái, wǒ shí cháng mèng dào tā.",
        "vietnamese": "Kể từ ngày ông ngoại qua đời, tôi thường xuyên mơ thấy ông."
      }
    ]
  },
  {
    "id": "hsk5-g-30",
    "order": 30,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc thành phần cấu tạo: 由……组成 (Do... hợp thành / gồm có)",
    "titleZh": "由……组成",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 由 + Thành phần / Số lượng + 组成",
    "explanationVi": "Dùng để giải thích cơ cấu tổ chức, nội dung bài học hoặc các bộ phận hợp thành của một chỉnh thể lớn.",
    "tips": "Tránh nhầm với cấu trúc bị động; '由' ở đây mang nghĩa 'do... cấu thành' chứ không biểu thị bị tác động thiệt hại.",
    "examples": [
      {
        "chinese": "本课程由理论学习和实践操作两部分内容组成。",
        "pinyin": "Běn kè chéng yóu lǐ lùn xué xí hé shí jiàn cāo zuò liǎng bù fēn nèi róng zǔ chéng.",
        "vietnamese": "Khóa học này bao gồm hai phần nội dung: học lý thuyết và thao tác thực hành cấu thành nên."
      },
      {
        "chinese": "项目团队由三位工程师组成。",
        "pinyin": "Xiàng mù tuán duì yóu sān wèi gōng chéng shī zǔ chéng.",
        "vietnamese": "Đội ngũ dự án do ba kỹ sư hợp thành."
      }
    ]
  },
  {
    "id": "hsk5-g-31",
    "order": 31,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc tình thế tiến thoái lưỡng nan: X也不是，Y也不是 (Làm X cũng dở mà làm Y cũng không xong)",
    "titleZh": "X也不是，Y也不是",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 也不是，Y 也不是",
    "explanationVi": "Miêu tả tình cảnh khó xử, bối rối không biết lựa chọn thế nào cho ổn thỏa, làm cách nào cũng thấy sai hoặc không tiện (坐也不是，站也不是 - ngồi không xong mà đứng cũng chẳng yên; 走也不是，留也不是 - đi không xong mà ở cũng không ổn).",
    "tips": "X và Y thường là cặp hành động đối lập hoặc tương phản nhau trong cùng một bối cảnh.",
    "examples": [
      {
        "chinese": "马上就要面试了，他紧张得坐也不是，站也不是。",
        "pinyin": "Mǎ shàng jiù yào miàn shì le, tā jǐn zhāng dé zuò yě bù shì, zhàn yě bù shì.",
        "vietnamese": "Sắp phỏng vấn đến nơi rồi, anh ấy căng thẳng đến mức ngồi cũng không xong mà đứng cũng chẳng yên."
      },
      {
        "chinese": "公司已经三个月没有发工资了，他走也不是，留也不是，不知道怎么办好。",
        "pinyin": "Gōng sī yǐ jīng sān gè yuè méi yǒu fā gōng zī le, tā zǒu yě bù shì, liú yě bù shì, bù zhī dào zěn me bàn hǎo.",
        "vietnamese": "Công ty đã ba tháng không trả lương, anh ấy đi cũng dở mà ở lại cũng không xong, chẳng biết phải làm sao."
      }
    ]
  },
  {
    "id": "hsk5-g-32",
    "order": 32,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc bất lực: X也X不得，Y也Y不得 (X cũng không được, Y cũng chẳng xong)",
    "titleZh": "X也X不得，Y也Y不得",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 也 X 不得，Y 也 Y 不得",
    "explanationVi": "Bổ ngữ khả năng '不得' lặp lại hai lần diễn tả trạng thái hoàn toàn bất lực trước một đối tượng hoặc tình huống trớ trêu (打也打不得，说也说不得; 哭也哭不得，笑也笑不得).",
    "tips": "Thường biểu lộ cảm xúc dở khóc dở cười hoặc đau đầu bất lực trước con cái/hoàn cảnh khó xử.",
    "examples": [
      {
        "chinese": "对这个孩子他实在没办法，打也打不得，说也说不得。",
        "pinyin": "Duì zhè gè hái zi tā shí zài méi bàn fǎ, dǎ yě dǎ bù dé, shuō yě shuō bù dé.",
        "vietnamese": "Đối với đứa trẻ này anh ấy thực sự hết cách, đánh cũng không được mà mắng mỏ cũng chẳng xong."
      },
      {
        "chinese": "听到消息后，她哭也哭不得，笑也笑不得。",
        "pinyin": "Tīng dào xiāo xī hòu, tā kū yě kū bù dé, xiào yě xiào bù dé.",
        "vietnamese": "Sau khi nghe tin tức, cô ấy dở khóc dở cười, khóc không được mà cười cũng không xong."
      }
    ]
  },
  {
    "id": "hsk5-g-33",
    "order": 33,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc định mệnh chấp nhận: X是它，Y也是它 (Dù X hay Y thì cũng đành chấp nhận nó)",
    "titleZh": "X是它，Y也是它",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 是它，Y 也是它",
    "explanationVi": "Biểu thị thái độ kiên định chấp nhận kết quả, bất kể là tốt hay xấu, thành công hay thất bại thì cũng không thể thay đổi đối tượng hoặc quyết định đó.",
    "tips": "Mang sắc thái dứt khoát không hối tiếc (好是它，坏也是它; 成功是它，失败也是它).",
    "examples": [
      {
        "chinese": "好是它，坏也是它，你没有别的选择。",
        "pinyin": "Hǎo shì tā, huài yě shì tā, nǐ méi yǒu bié de xuǎn zé.",
        "vietnamese": "Dù tốt hay xấu cũng chỉ có nó thôi, bạn không có sự lựa chọn nào khác đâu."
      },
      {
        "chinese": "成功是它，失败也是它，这个决定我绝对不后悔。",
        "pinyin": "Chéng gōng shì tā, shī bài yě shì tā, zhè gè jué dìng wǒ jué duì bù hòu huǐ.",
        "vietnamese": "Thành công hay thất bại cũng là vì quyết định này, tôi tuyệt đối không hề hối hận."
      }
    ]
  },
  {
    "id": "hsk5-g-34",
    "order": 34,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc tận dụng trạng thái sẵn có: X着也是X着 (Đằng nào cũng đang... thì cứ...)",
    "titleZh": "X着也是X着",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 着也是 X 着，(不如 / 要不)...",
    "explanationVi": "Biểu thị trạng thái X đang diễn ra sẵn mà không làm gì khác thì rất lãng phí, nên nhân tiện làm việc gì đó có ích (闲着也是闲着 - đằng nào cũng đang rảnh rỗi; 放着也是放着 - đằng nào đồ cũng đang để không).",
    "tips": "Động từ X thường là các trạng thái như '闲' (rảnh), '放' (để đó), '坐' (ngồi đó).",
    "examples": [
      {
        "chinese": "闲着也是闲着，明天我准备把车库打扫一遍。",
        "pinyin": "Xián zhe yě shì xián zhe, míng tiān wǒ zhǔn bèi bǎ chē kù dǎ sǎo yī biàn.",
        "vietnamese": "Đằng nào cũng đang rảnh rỗi, ngày mai tôi dự định dọn dẹp gara một lượt."
      },
      {
        "chinese": "那辆旧车你很少开，放着也是放着，要不卖了吧。",
        "pinyin": "Nà liàng jiù chē nǐ hěn shǎo kāi, fàng zhe yě shì fàng zhe, yào bù mài le ba.",
        "vietnamese": "Chiếc xe cũ kia bạn ít khi lái, để đấy cũng chỉ thêm chật, hay là bán đi cho rồi."
      }
    ]
  },
  {
    "id": "hsk5-g-35",
    "order": 35,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ chốt lại: 不管怎样说 / 不管怎么说 (Dù sao đi nữa, dù nói thế nào chăng nữa)",
    "titleZh": "不管怎样说",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "不管怎样说 / 不管怎么说，...",
    "explanationVi": "Dùng để gác lại những tranh luận hoặc chi tiết rườm rà trước đó nhằm nhấn mạnh vào một nguyên tắc, chân lý cốt lõi hoặc kết luận quan trọng nhất.",
    "tips": "Tương đương với '无论如何' nhưng mang đậm phong cách khẩu ngữ tự nhiên.",
    "examples": [
      {
        "chinese": "不管怎么说，健康才是最重要的，要注意身体。",
        "pinyin": "Bù guǎn zěn me shuō, jiàn kāng cái shì zuì zhòng yào de, yào zhù yì shēn tǐ.",
        "vietnamese": "Dù sao đi nữa thì sức khỏe mới là quan trọng nhất, phải chú ý giữ gìn thân thể."
      },
      {
        "chinese": "不管怎么说，用打骂的方法教育孩子是不对的。",
        "pinyin": "Bù guǎn zěn me shuō, yòng dǎ mà de fāng fǎ jiào yù hái zi shì bù duì de.",
        "vietnamese": "Dù nói thế nào đi chăng nữa, dùng đòn roi la mắng để dạy dỗ con cái là sai trái."
      }
    ]
  },
  {
    "id": "hsk5-g-36",
    "order": 36,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Thán từ khen ngợi/kinh ngạc: 真有你/他/她的 (Khá khen cho... thật đấy!)",
    "titleZh": "真有你/他/她的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "真有 + 你 / 他 / 她的",
    "explanationVi": "Khẩu ngữ biểu thị sự kinh ngạc, thán phục (hoặc đôi khi châm biếm nhẹ) trước bản lĩnh, sự gan dạ hoặc hành vi phi thường của ai đó.",
    "tips": "Có thể mang nghĩa tán dương nể phục thật lòng hoặc trêu đùa sự 'liều lĩnh/bá đạo' của đối phương.",
    "examples": [
      {
        "chinese": "真有你的，这么难的题目都做对了！",
        "pinyin": "Zhēn yǒu nǐ de, zhè me nán de tí mù dōu zuò duì le!",
        "vietnamese": "Khá khen cho bạn thật đấy, đề khó thế này mà cũng giải đúng được!"
      },
      {
        "chinese": "真有他的，一个人爬上了这么高的山！",
        "pinyin": "Zhēn yǒu tā de, yī gè rén pá shàng le zhè me gāo de shān!",
        "vietnamese": "Anh ấy giỏi thật đấy chứ, một mình leo lên ngọn núi cao ngất ngưởng như vậy!"
      },
      {
        "chinese": "真有她的，在这么吵的地方都能睡着！",
        "pinyin": "Zhēn yǒu tā de, zài zhè me chǎo de dì fāng dōu néng shuì zhe!",
        "vietnamese": "Cô nàng cừ thật đấy, ở nơi ồn ào như thế này mà cũng ngủ say được!"
      }
    ]
  },
  {
    "id": "hsk5-g-37",
    "order": 37,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ trách móc ngăn chặn: X什么X (X cái gì mà X!)",
    "titleZh": "X什么X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ X + 什么 + Động từ X",
    "explanationVi": "Khẩu ngữ gay gắt hoặc suồng sã dùng để ngăn cản người khác tiếp tục hành động vô bổ, ồn ào hoặc không đúng lúc (吵什么吵 - ồn ào cái gì mà ồn; 玩什么玩 - chơi cái gì mà chơi; 哭什么哭 - khóc lóc cái gì mà khóc).",
    "tips": "Động từ X phải là cùng một động từ đơn âm tiết, thể hiện sự bức xúc hoặc răn đe.",
    "examples": [
      {
        "chinese": "吵什么吵，公共场所禁止大声说话！",
        "pinyin": "Chǎo shén me chǎo, gōng gòng chǎng suǒ jìn zhǐ dà shēng shuō huà!",
        "vietnamese": "Ồn ào cái gì mà ồn ào, nơi công cộng cấm nói to tiếng!"
      },
      {
        "chinese": "玩什么玩，作业还没写完呢！",
        "pinyin": "Wán shén me wán, zuò yè hái méi xiě wán ne!",
        "vietnamese": "Chơi bời cái nỗi gì, bài tập còn chưa làm xong đâu đấy!"
      }
    ]
  },
  {
    "id": "hsk5-g-38",
    "order": 38,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ gạt đi sự khách sáo: 什么X不X（的） (...với chả không... cái gì chứ)",
    "titleZh": "什么X不X（的）",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "什么 + X + 不 + X (的)，...",
    "explanationVi": "Dùng để gạt bỏ sự khách sáo, áy náy hoặc sự phân biệt rạch ròi của đối phương, thể hiện mối quan hệ thân thiết không cần câu nệ (什么谢不谢的 - cảm ơn với chả không cảm ơn gì; 什么麻烦不麻烦的 - phiền phức với chả không phiền phức).",
    "tips": "Rất hữu ích khi đáp lại lời cảm ơn hoặc xin lỗi của bạn bè thân thiết để tạo không khí thoải mái.",
    "examples": [
      {
        "chinese": "什么谢不谢的，我们之间不用这么客气。",
        "pinyin": "Shén me xiè bù xiè de, wǒ men zhī jiān bù yòng zhè me kè qì.",
        "vietnamese": "Cảm ơn với chả không cảm ơn cái gì chứ, giữa chúng ta đâu cần khách sáo thế."
      },
      {
        "chinese": "什么麻烦不麻烦的，朋友之间互相帮忙是应该的。",
        "pinyin": "Shén me má fán bù má fán de, péng yǒu zhī jiān hù xiāng bāng máng shì yīng gāi de.",
        "vietnamese": "Phiền phức với chả không phiền phức, bạn bè giúp đỡ lẫn nhau là lẽ đương nhiên."
      }
    ]
  },
  {
    "id": "hsk5-g-39",
    "order": 39,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ cơ hội không nên bỏ lỡ: 不X白不X (Không làm X thì uổng phí)",
    "titleZh": "不X白不X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "不 + X + 白 + 不 + X",
    "explanationVi": "Hàm ý rằng cơ hội này là miễn phí hoặc quá hời, nếu không làm/không tận dụng thì bản thân sẽ chịu thiệt thòi uổng phí (不吃白不吃 - không ăn thì phí của trời; 不买白不买 - không mua thì thiệt; 不看白不看 - không xem thì uổng).",
    "tips": "'白' ở đây mang nghĩa là làm mà không mất tiền hoặc không tốn phí.",
    "examples": [
      {
        "chinese": "音乐会的门票是客户赠送的，咱们不听白不听。",
        "pinyin": "Yīn lè huì de mén piào shì kè hù zèng sòng de, zán men bù tīng bái bù tīng.",
        "vietnamese": "Vé xem hòa nhạc là khách hàng tặng, chúng mình không đi nghe thì phí của trời."
      },
      {
        "chinese": "这件衣服难得打折，不买白不买。",
        "pinyin": "Zhè jiàn yī fú nán dé dǎ zhé, bù mǎi bái bù mǎi.",
        "vietnamese": "Chiếc áo này hiếm khi giảm giá, không mua thì uổng phí."
      }
    ]
  },
  {
    "id": "hsk5-g-40",
    "order": 40,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc kết cục lặp lại: X来X去，都是/就是…… (Làm X mãi rốt cuộc cũng chỉ là...)",
    "titleZh": "X来X去，都是/就是……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 来 X 去，都是 / 就是 + Kết quả",
    "explanationVi": "Diễn tả hành động diễn ra nhiều lần, kéo dài suốt một quá trình nhưng kết quả thu lại chẳng có gì mới mẻ hoặc vẫn giậm chân tại chỗ.",
    "tips": "Thường mang sắc thái mệt mỏi, bất lực hoặc ngán ngẩm trước sự bế tắc.",
    "examples": [
      {
        "chinese": "听来听去，都是一些差不多的意见。",
        "pinyin": "Tīng lái tīng qù, dōu shì yī xiē chà bù duō de yì jiàn.",
        "vietnamese": "Nghe đi nghe lại, toàn là mấy ý kiến na ná như nhau."
      },
      {
        "chinese": "大家商量来商量去，就是想不出什么好办法。",
        "pinyin": "Dà jiā shāng liàng lái shāng liàng qù, jiù shì xiǎng bù chū shén me hǎo bàn fǎ.",
        "vietnamese": "Mọi người bàn tới bàn lui, mãi vẫn không nghĩ ra được cách nào hay."
      }
    ]
  },
  {
    "id": "hsk5-g-41",
    "order": 41,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc áp đặt ý chí: 动词+什么（就）是什么 (Bảo sao thì nghe vậy / Muốn sao được vậy)",
    "titleZh": "动词+什么（就）是什么",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ + 什么 + (就) + 是什么",
    "explanationVi": "Biểu thị sự phục tùng tuyệt đối (người khác bảo sao nghe vậy: 说什么就是什么) hoặc cảnh báo rằng không thể tự tiện muốn làm gì thì làm theo ý thích chủ quan (想什么就是什么).",
    "tips": "Thường dùng trong văn cảnh giáo dục gia đình hoặc tuân thủ kỷ luật cơ quan.",
    "examples": [
      {
        "chinese": "孩子长大了，不像以前，父母说什么就是什么。",
        "pinyin": "Hái zi zhǎng dà le, bù xiàng yǐ qián, fù mǔ shuō shén me jiù shì shén me.",
        "vietnamese": "Con cái lớn rồi, không giống như ngày xưa bố mẹ bảo sao thì nghe vậy nữa."
      },
      {
        "chinese": "工作要按照公司的规定执行，不能你想什么就是什么。",
        "pinyin": "Gōng zuò yào àn zhào gōng sī de guī dìng zhí xíng, bù néng nǐ xiǎng shén me jiù shì shén me.",
        "vietnamese": "Công việc phải thực hiện theo quy định của công ty, không thể nào bạn muốn thế nào là cứ thế được."
      }
    ]
  },
  {
    "id": "hsk5-g-42",
    "order": 42,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Thứ tự sắp xếp nhiều trạng ngữ trong câu (多项状语)",
    "titleZh": "多项状语",
    "grammarType": "句子成分",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + [Mục đích] + [Thời gian] + [Địa điểm] + [Phương thức/Tình thái] + Động từ",
    "explanationVi": "Khi một câu có nhiều trạng ngữ đi kèm động từ, trật tự chuẩn mực thường là: 1) Mục đích (为了...) -> 2) Thời gian (每天早上, 昨天晚上) -> 3) Đối tượng/Địa điểm (在公园里, 在图书馆) -> 4) Phương thức/Tình thái (认真地, 慢慢地) -> Động từ chính.",
    "tips": "Đây là dạng bẫy trật tự từ cực kỳ thường gặp trong bài thi sắp xếp câu HSK 5.",
    "examples": [
      {
        "chinese": "他为了锻炼身体每天早上在公园里跑步。",
        "pinyin": "Tā wèi le duàn liàn shēn tǐ měi tiān zǎo shàng zài gōng yuán lǐ pǎo bù.",
        "vietnamese": "Để rèn luyện sức khỏe, mỗi sáng anh ấy đều chạy bộ trong công viên."
      },
      {
        "chinese": "他昨天晚上一个人在图书馆认真地复习了三个小时。",
        "pinyin": "Tā zuó tiān wǎn shàng yī gè rén zài tú shū guǎn rèn zhēn dì fù xí le sān gè xiǎo shí.",
        "vietnamese": "Tối hôm qua anh ấy đã một mình chăm chỉ ôn bài suốt ba tiếng đồng hồ trong thư viện."
      }
    ]
  },
  {
    "id": "hsk5-g-43",
    "order": 43,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Bổ ngữ khả năng cấm đoán/đánh giá: 动词+得/不得",
    "titleZh": "动词+得/不得",
    "grammarType": "句子成分",
    "categoryType": "可能补语2",
    "grammarDetail": "可能补语2",
    "structure": "Động từ + 得 / 不得",
    "explanationVi": "'不得' đứng sau động từ biểu thị việc đó tuyệt đối không được phép làm vì hậu quả nghiêm trọng hoặc không thể chấp nhận được (开不得玩笑 - không thể đùa được; 急不得 - không thể nóng vội được). Ngược lại, '得' biểu thị được phép hoặc khả thi.",
    "tips": "'不得' trong ngữ cảnh này mang hàm nghĩa răn đe, cảnh báo luân lý hoặc an toàn sức khỏe.",
    "examples": [
      {
        "chinese": "伤害人的玩笑可开不得。",
        "pinyin": "Shāng hài rén de wán xiào kě kāi bù dé.",
        "vietnamese": "Những trò đùa gây tổn thương người khác tuyệt đối không được đùa đâu nhé."
      },
      {
        "chinese": "这院是出得还是出不得，得先问问医生的建议。",
        "pinyin": "Zhè yuàn shì chū dé hái shì chū bù dé, dé xiān wèn wèn yī shēng de jiàn yì.",
        "vietnamese": "Viện này có xuất viện được hay không được, phải hỏi trước ý kiến của bác sĩ đã."
      },
      {
        "chinese": "写论文这件事情急不得，你得多看多想。",
        "pinyin": "Xiě lùn wén zhè jiàn shì qíng jí bù dé, nǐ dé duō kàn duō xiǎng.",
        "vietnamese": "Chuyện viết luận văn không thể nóng vội được, bạn phải đọc nhiều và suy ngẫm nhiều."
      }
    ]
  },
  {
    "id": "hsk5-g-44",
    "order": 44,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Bổ ngữ mức độ cực điểm: 形容词/心理动词+得+不得了",
    "titleZh": "形容词/心理动词+得+不得了",
    "grammarType": "句子成分",
    "categoryType": "程度补语2",
    "grammarDetail": "程度补语2",
    "structure": "Tính từ / Động từ tâm lý + 得不得了",
    "explanationVi": "Đứng sau tính từ hoặc động từ tâm lý biểu thị mức độ cực độ, tột cùng, không gì sánh bằng (激动得不得了 - xúc động khôn xiết; 担心得不得了 - lo lắng tột cùng; 高兴得不得了 - vui mừng khôn xiết).",
    "tips": "Tương đương với '...极了' hoặc '非常非常...' nhưng mang màu sắc biểu cảm nói khẩu ngữ mạnh mẽ hơn.",
    "examples": [
      {
        "chinese": "收到大学的录取通知书，她激动得不得了。",
        "pinyin": "Shōu dào dà xué de lù qǔ tōng zhī shū, tā jī dòng dé bù dé le.",
        "vietnamese": "Nhận được giấy báo trúng tuyển đại học, cô ấy xúc động vô cùng."
      },
      {
        "chinese": "听到父亲被送去急诊的消息，她担心得不得了。",
        "pinyin": "Tīng dào fù qīn bèi sòng qù jí zhěn de xiāo xī, tā dān xīn dé bù dé le.",
        "vietnamese": "Nghe tin cha bị đưa đi cấp cứu, cô ấy lo lắng khôn xiết."
      }
    ]
  },
  {
    "id": "hsk5-g-45",
    "order": 45,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Ý nghĩa phái sinh của bổ ngữ xu hướng: 下来, 下去, 起来, 过来, 过去",
    "titleZh": "趋向补语的引申用法：表示状态意义：动词/形容词+下来/下去/起来/过来/过去",
    "grammarType": "句子成分",
    "categoryType": "趋向补语3",
    "grammarDetail": "趋向补语3",
    "structure": "Động từ / Tính từ + 下来 / 下去 / 起来 / 过来 / 过去",
    "explanationVi": "Chuyển từ nghĩa phương hướng sang nghĩa trạng thái: 1) '下来': chuyển động từ động sang tĩnh, từ nhanh sang chậm (平静下来); 2) '下去': sự tiếp diễn tiếp tục trong tương lai (坚持下去); 3) '起来': bắt đầu và phân tán/thu gom lại (收拾起来, 唱起来); 4) '过来': phục hồi trạng thái tốt bình thường từ trạng thái tiêu cực (醒过来 - tỉnh lại); 5) '过去': mất đi tri giác bình thường sang trạng thái tiêu cực (晕过去 - ngất đi, 睡过去 - ngủ thiếp đi).",
    "tips": "Đặc biệt chú ý cặp đối lập '醒过来' (tỉnh lại - tích cực) và '晕过去' (ngất đi - tiêu cực).",
    "examples": [
      {
        "chinese": "听着窗外的雨声，我的心慢慢地平静下来了。",
        "pinyin": "Tīng zhe chuāng wài de yǔ shēng, wǒ de xīn màn màn dì píng jìng xià lái le.",
        "vietnamese": "Lắng nghe tiếng mưa ngoài cửa sổ, lòng tôi từ từ lắng dịu bình yên trở lại."
      },
      {
        "chinese": "不知道是什么原因，他的声音渐渐低了下去。",
        "pinyin": "Bù zhī dào shì shén me yuán yīn, tā de shēng yīn jiàn jiàn dī le xià qù.",
        "vietnamese": "Không rõ là vì nguyên nhân gì, giọng nói của anh ấy dần dần trầm nhỏ hẳn đi."
      },
      {
        "chinese": "该睡觉了，快把你的玩具收拾起来。",
        "pinyin": "Gāi shuì jué le, kuài bǎ nǐ de wán jù shōu shí qǐ lái.",
        "vietnamese": "Đến giờ ngủ rồi, mau thu dọn đồ chơi của con gọn gàng vào đi."
      },
      {
        "chinese": "在医生们的努力下，病人终于醒过来了。",
        "pinyin": "Zài yī shēng men de nǔ lì xià, bìng rén zhōng yú xǐng guò lái le.",
        "vietnamese": "Dưới sự nỗ lực của các bác sĩ, bệnh nhân cuối cùng đã tỉnh táo trở lại."
      },
      {
        "chinese": "经过一天的长途旅行，大家都很累，一上车就纷纷睡过去了。",
        "pinyin": "Jīng guò yī tiān de zhǎng tú lǚ xíng, dà jiā dōu hěn lèi, yī shàng chē jiù fēn fēn shuì guò qù le.",
        "vietnamese": "Sau một ngày du lịch đường dài, ai nấy đều thấm mệt, vừa lên xe là lục tục ngủ thiếp đi."
      }
    ]
  },
  {
    "id": "hsk5-g-46",
    "order": 46,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Bổ ngữ trạng thái dạng cụm động từ: 动词/形容词+得+动词短语",
    "titleZh": "动词/形容词+得+动词短语",
    "grammarType": "句子成分",
    "categoryType": "状态补语2",
    "grammarDetail": "状态补语2",
    "structure": "Động từ / Tính từ + 得 + Cụm động từ kết quả",
    "explanationVi": "Phần sau chữ '得' là một cụm động từ đóng vai trò miêu tả mức độ hoặc hệ quả dẫn đến của hành động/tính từ trước đó (玩儿得忘了时间 - chơi đến quên cả giờ giấc; 紧张得说不出话 - căng thẳng đến không nói nên lời).",
    "tips": "Luôn dùng trợ từ kết cấu '得' để kết nối giữa động từ/tính từ và cụm miêu tả trạng thái.",
    "examples": [
      {
        "chinese": "孩子们玩儿得忘了时间，直到天黑才回家。",
        "pinyin": "Hái zi men wánr dé wàng le shí jiān, zhí dào tiān hēi cái huí jiā.",
        "vietnamese": "Lũ trẻ chơi đùa đến mức quên cả thời gian, mãi tới lúc trời tối mịt mới chịu về nhà."
      },
      {
        "chinese": "面对自己喜欢的明星，他紧张得说不出话。",
        "pinyin": "Miàn duì zì jǐ xǐ huān de míng xīng, tā jǐn zhāng dé shuō bù chū huà.",
        "vietnamese": "Đối diện với ngôi sao thần tượng mà mình yêu thích, anh ấy căng thẳng đến nỗi không thốt nên lời."
      }
    ]
  },
  {
    "id": "hsk5-g-47",
    "order": 47,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Bổ ngữ trạng thái dạng cụm chủ vị: 动词/形容词+得+主谓短语",
    "titleZh": "动词/形容词+得+主谓短语",
    "grammarType": "句子成分",
    "categoryType": "状态补语2",
    "grammarDetail": "状态补语2",
    "structure": "Động từ / Tính từ + 得 + [Chủ ngữ nhỏ + Vị ngữ nhỏ]",
    "explanationVi": "Bổ ngữ đứng sau '得' là một cụm chủ-vị hoàn chỉnh biểu thị mức độ tác động ảnh hưởng tới đối tượng khác (跑得全身是汗 - chạy đến mức toàn thân đầy mồ hôi; 热得大家都不想出门 - nóng đến mức ai nấy đều không muốn ra ngoài).",
    "tips": "Nhận biết cụm chủ vị sau '得': có chủ ngữ nhỏ riêng (全身, 大家) và vị ngữ riêng.",
    "examples": [
      {
        "chinese": "他跑得全身是汗，终于按时到了公司。",
        "pinyin": "Tā pǎo dé quán shēn shì hàn, zhōng yú àn shí dào le gōng sī.",
        "vietnamese": "Anh ấy chạy đến mức cả người đầm đìa mồ hôi, cuối cùng cũng tới công ty đúng giờ."
      },
      {
        "chinese": "天气热得大家都不想出门。",
        "pinyin": "Tiān qì rè dé dà jiā dōu bù xiǎng chū mén.",
        "vietnamese": "Thời tiết oi bức đến độ ai nấy đều chẳng buồn bước chân ra đường."
      }
    ]
  },
  {
    "id": "hsk5-g-48",
    "order": 48,
    "category": "bo-ngu",
    "categoryName": "Thành phần câu & Bổ ngữ",
    "categoryIcon": "🧩",
    "titleVi": "Bổ ngữ trạng thái dạng thành ngữ/cụm cố định: 动词/形容词+得+固定短语",
    "titleZh": "动词/形容词+得+固定短语",
    "grammarType": "句子成分",
    "categoryType": "状态补语2",
    "grammarDetail": "状态补语2",
    "structure": "Động từ / Tính từ + 得 + Thành ngữ 4 chữ / Cụm từ cố định",
    "explanationVi": "Sử dụng thành ngữ bốn chữ sinh động sau chữ '得' để hình tượng hóa trạng thái cơ thể hoặc cảm xúc (跑得上气不接下气 - chạy thở không ra hơi; 累得满头大汗 - mệt toát mồ hôi đầm đìa).",
    "tips": "Sử dụng thành ngữ làm bổ ngữ trạng thái là tiêu chí chấm điểm rất cao trong phần thi viết luận HSK 5.",
    "examples": [
      {
        "chinese": "快上课了，他跑得上气不接下气。",
        "pinyin": "Kuài shàng kè le, tā pǎo dé shàng qì bù jiē xià qì.",
        "vietnamese": "Sắp vào học rồi, cậu ấy chạy đến mức thở không ra hơi."
      },
      {
        "chinese": "为了准备年夜饭，她累得满头大汗。",
        "pinyin": "Wèi le zhǔn bèi nián yè fàn, tā lèi dé mǎn tóu dà hàn.",
        "vietnamese": "Để chuẩn bị mâm cơm tất niên, bà ấy mệt đến mức mồ hôi nhễ nhại đầy đầu."
      }
    ]
  },
  {
    "id": "hsk5-g-49",
    "order": 49,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu chữ 有 biểu thị sự tồn tại trừu tượng: 主语+有+着+宾语",
    "titleZh": "表示存在、具有：主语+有+着+宾语",
    "grammarType": "句子的类型",
    "categoryType": "“有”字句3",
    "grammarDetail": "“有”字句3",
    "structure": "Chủ ngữ + 有着 + Tân ngữ trừu tượng",
    "explanationVi": "Dùng '有着' để biểu thị chủ ngữ đang sở hữu, dung chứa hoặc duy trì một thuộc tính, quan hệ hoặc tình cảm trừu tượng dài lâu (有着深厚的友谊, 有着很深的矛盾, 有着悠久的历史).",
    "tips": "'有着' chỉ đi với các danh từ trừu tượng (lịch sử, văn hóa, quan hệ, mâu thuẫn), không dùng với đồ vật cụ thể.",
    "examples": [
      {
        "chinese": "尽管是兄弟，但是他们心里有着很深的矛盾。",
        "pinyin": "Jǐn guǎn shì xiōng dì, dàn shì tā men xīn lǐ yǒu zhe hěn shēn de máo dùn.",
        "vietnamese": "Dù là anh em ruột thịt, nhưng trong lòng họ lại tồn tại mâu thuẫn rất sâu sắc."
      },
      {
        "chinese": "两国之间有着长期友好的关系。",
        "pinyin": "Liǎng guó zhī jiān yǒu zhe zhǎng qī yǒu hǎo de guān xì.",
        "vietnamese": "Giữa hai quốc gia luôn duy trì mối quan hệ hữu nghị lâu dài."
      }
    ]
  },
  {
    "id": "hsk5-g-50",
    "order": 50,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu chữ 有 biểu thị sự bám dính/tồn tại bề mặt: 主语+动词+有+宾语",
    "titleZh": "表示附着：主语+动词+有+宾语",
    "grammarType": "句子的类型",
    "categoryType": "“有”字句3",
    "grammarDetail": "“有”字句3",
    "structure": "Nơi chốn / Bề mặt + Động từ (写 / 挂 / 刻 / 印) + 有 + Tân ngữ",
    "explanationVi": "Sau các động từ tạo tác hoặc đính gắn như '写', '挂', '刻', '印' thêm '有' để miêu tả trạng thái một vật đang tồn tại bám dính trên bề mặt vật khác (墙上挂有牌子 - trên tường có treo tấm biển; 第一页写有名字 - trang đầu có ghi tên tác giả).",
    "tips": "Ý nghĩa tương tự '挂着', '写着' nhưng mang sắc thái văn viết miêu tả trang trọng hơn.",
    "examples": [
      {
        "chinese": "门关着，墙上挂有“暂停营业”的牌子。",
        "pinyin": "Mén guān zhe, qiáng shàng guà yǒu \"zàn tíng yíng yè\" de pái zi.",
        "vietnamese": "Cửa đóng kín, trên tường có treo tấm biển 'Tạm dừng kinh doanh'."
      },
      {
        "chinese": "这本书的第一页写有作者的名字。",
        "pinyin": "Zhè běn shū de dì yī yè xiě yǒu zuò zhě de míng zì.",
        "vietnamese": "Trang đầu tiên của cuốn sách này có ghi tên tác giả."
      }
    ]
  },
  {
    "id": "hsk5-g-51",
    "order": 51,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu chữ 把 động tác chớp nhoáng: 主语+把+宾语+一+动词",
    "titleZh": "主语+把+宾语+一+动词",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句3",
    "grammarDetail": "“把”字句3",
    "structure": "Chủ ngữ + 把 + Tân ngữ + 一 + Động từ đơn âm tiết",
    "explanationVi": "Thêm số từ '一' trước động từ trong câu chữ 把 để diễn tả động tác diễn ra cực kỳ nhanh gọn, dứt khoát và thường kéo theo hành động kế tiếp ngay lập tức (把书包一扔 - vứt toẹt cặp xuống; 把任务一说 - vừa phổ biến xong nhiệm vụ).",
    "tips": "Động từ phải là đơn âm tiết (扔, 推, 说, 看, 放...).",
    "examples": [
      {
        "chinese": "孩子把书包一扔，坐在地上哭了起来。",
        "pinyin": "Hái zi bǎ shū bāo yī rēng, zuò zài dì shàng kū le qǐ lái.",
        "vietnamese": "Đứa bé vứt toẹt cặp sách xuống, ngồi phịch trên sàn òa khóc."
      },
      {
        "chinese": "经理把任务一说，员工们就开始干活了。",
        "pinyin": "Jīng lǐ bǎ rèn wù yī shuō, yuán gōng men jiù kāi shǐ gàn huó le.",
        "vietnamese": "Quản lý vừa phổ biến xong nhiệm vụ một cái là các nhân viên bắt tay vào làm việc ngay."
      }
    ]
  },
  {
    "id": "hsk5-g-52",
    "order": 52,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu chữ 把 có hai tân ngữ (Chuyển đổi tài sản): 把+宾语1+动词+宾语2",
    "titleZh": "主语+把+宾语1+动词+宾语2",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句3",
    "grammarDetail": "“把”字句3",
    "structure": "Chủ ngữ + 把 + Tân ngữ 1 (Tài sản/Tiền bạc) + Động từ + Tân ngữ 2 (Mục đích/Người nhận)",
    "explanationVi": "Dùng câu chữ 把 khi tiêu tốn hoặc chuyển đổi toàn bộ một nguồn lực/tiền của sang vật khác hoặc người khác ('把存款都买车了' - đem hết tiền tiết kiệm mua xe rồi; '把生活费借朋友了' - đem tiền sinh hoạt cho bạn vay mất rồi).",
    "tips": "Động từ biểu thị việc xử lý hoặc chuyển giao quyền sở hữu tài sản.",
    "examples": [
      {
        "chinese": "他把存款都买车了。",
        "pinyin": "Tā bǎ cún kuǎn dōu mǎi chē le.",
        "vietnamese": "Anh ấy đem toàn bộ tiền tiết kiệm đi mua ô tô mất rồi."
      },
      {
        "chinese": "我把父母给的生活费借朋友了。",
        "pinyin": "Wǒ bǎ fù mǔ gěi de shēng huó fèi jiè péng yǒu le.",
        "vietnamese": "Tôi lỡ đem tiền sinh hoạt phí bố mẹ cho cho bạn bè vay mất rồi."
      }
    ]
  },
  {
    "id": "hsk5-g-53",
    "order": 53,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu liên động biểu thị quan hệ nhân quả, chuyển ngoặt, điều kiện",
    "titleZh": "前后两个动词性词语具有因果、转折、条件关系",
    "grammarType": "句子的类型",
    "categoryType": "连动句3",
    "grammarDetail": "连动句3",
    "structure": "Động từ ngữ 1 + Động từ ngữ 2",
    "explanationVi": "Hai cụm động từ đi liền nhau không có liên từ nối nhưng giữa chúng hàm chứa quan hệ nội tại: 1) Nhân quả: 生病住院 (vì ốm nên nhập viện); 2) Chuyển ngoặt: 开会忘了带资料 (đi họp mà lại quên mang tài liệu); 3) Điều kiện: 制定方案应对风险 (đặt kế hoạch để đối phó rủi ro).",
    "tips": "Cần phân biệt ý nghĩa logic giữa hai hành động khi dịch và phân tích ngữ pháp.",
    "examples": [
      {
        "chinese": "她丈夫生病住院了。（因果）",
        "pinyin": "Tā zhàng fū shēng bìng zhù yuàn le. (yīn guǒ)",
        "vietnamese": "Chồng cô ấy bị ốm phải nhập viện rồi. (Quan hệ nhân quả)"
      },
      {
        "chinese": "王经理开会忘了带会议资料。（转折）",
        "pinyin": "Wáng jīng lǐ kāi huì wàng le dài huì yì zī liào. (zhuǎn zhé)",
        "vietnamese": "Giám đốc Vương đi họp mà quên mang tài liệu cuộc họp. (Quan hệ chuyển ngoặt)"
      },
      {
        "chinese": "面对快速变化的形势，我们应该尽快制定方案应对风险。（条件）",
        "pinyin": "Miàn duì kuài sù biàn huà de xíng shì, wǒ men yīng gāi jǐn kuài zhì dìng fāng àn yīng duì fēng xiǎn. (tiáo jiàn)",
        "vietnamese": "Trước tình hình biến đổi nhanh chóng, chúng ta nên mau chóng xây dựng phương án để ứng phó rủi ro. (Quan hệ điều kiện)"
      }
    ]
  },
  {
    "id": "hsk5-g-54",
    "order": 54,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu so sánh chênh lệch trực tiếp: A+形容词+B+数量补语",
    "titleZh": "A+形容词+B+数量补语",
    "grammarType": "句子的类型",
    "categoryType": "比较句4",
    "grammarDetail": "比较句4",
    "structure": "A + Tính từ (高 / 大 / 重 / 早 / 晚) + B + Bổ ngữ số lượng",
    "explanationVi": "Mẫu câu so sánh khẩu ngữ không cần dùng chữ '比', đặt trực tiếp tính từ trước đối tượng so sánh B kèm lượng chênh lệch ở sau (他高我一头 - anh ấy cao hơn tôi một cái đầu; 姐姐重我两公斤 - chị nặng hơn tôi 2kg; 哥哥早我两年上学 - anh đi học trước tôi 2 năm).",
    "tips": "Là cấu trúc so sánh khẩu ngữ cực kỳ phổ biến trong đời sống, không được thêm '比' vào giữa.",
    "examples": [
      {
        "chinese": "他高我一头。",
        "pinyin": "Tā gāo wǒ yī tóu.",
        "vietnamese": "Cậu ấy cao hơn tôi hẳn một cái đầu."
      },
      {
        "chinese": "姐姐重我两公斤。",
        "pinyin": "Jiě jiě zhòng wǒ liǎng gōng jīn.",
        "vietnamese": "Chị gái nặng hơn tôi hai ki-lô-gam."
      },
      {
        "chinese": "哥哥早我两年上学。",
        "pinyin": "Gē gē zǎo wǒ liǎng nián shàng xué.",
        "vietnamese": "Anh trai đi học sớm hơn tôi hai năm."
      }
    ]
  },
  {
    "id": "hsk5-g-55",
    "order": 55,
    "category": "loai-cau",
    "categoryName": "Mẫu câu đặc biệt (把, 被, 有, So sánh)",
    "categoryIcon": "🗣️",
    "titleVi": "Câu bị động tăng cường ngữ khí: 被/叫/让+宾语+给+动词",
    "titleZh": "主语+被/叫/让+宾语+给+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "被动句3",
    "grammarDetail": "被动句3",
    "structure": "Chủ ngữ + 被 / 叫 / 让 + Tác nhân + 给 + Động từ + Bổ ngữ",
    "explanationVi": "Thêm trợ từ '给' ngay trước động từ chính trong câu bị động nhằm tăng cường ngữ khí nhấn mạnh việc chủ ngữ phải gánh chịu một kết quả không như mong đợi hoặc tổn thất ngoài ý muốn (被他给洗坏了 - bị anh ta giặt làm cho hỏng bét; 叫风给吹跑了 - bị gió thổi bay mất).",
    "tips": "Chữ '给' ở đây là hư từ tăng cường ngữ khí, không mang nghĩa thực tế là 'cho/tặng'.",
    "examples": [
      {
        "chinese": "我新买的衣服被他给洗坏了。",
        "pinyin": "Wǒ xīn mǎi de yī fú bèi tā gěi xǐ huài le.",
        "vietnamese": "Bộ quần áo tôi mới mua bị anh ấy giặt cho hỏng bét rồi."
      },
      {
        "chinese": "她的帽子叫风给吹跑了。",
        "pinyin": "Tā de mào zi jiào fēng gěi chuī pǎo le.",
        "vietnamese": "Chiếc mũ của cô ấy bị gió thổi bay mất rồi."
      },
      {
        "chinese": "对不起，这些资料让我给搞乱了。",
        "pinyin": "Duì bù qǐ, zhè xiē zī liào ràng wǒ gěi gǎo luàn le.",
        "vietnamese": "Xin lỗi nhé, đống tài liệu này bị tôi làm cho lộn xộn hết cả lên rồi."
      }
    ]
  },
  {
    "id": "hsk5-g-56",
    "order": 56,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức thừa tiếp: ……，便…… (Xong là liền...)",
    "titleZh": "……，便……",
    "grammarType": "句子的类型",
    "categoryType": "承接复句",
    "grammarDetail": "承接复句",
    "structure": "Phân câu 1，(Chủ ngữ) + 便 + Phân câu 2",
    "explanationVi": "Biểu thị sự việc ở phân câu sau diễn ra nối tiếp ngay sau sự việc ở phân câu trước mà không có sự trì hoãn (viết tắt hoặc biến thể văn nhã của 就).",
    "tips": "Thường dùng trong văn kể chuyện hoặc tường thuật diễn biến sự kiện.",
    "examples": [
      {
        "chinese": "领导还没讲完，他便提前离开了。",
        "pinyin": "Lǐng dǎo hái méi jiǎng wán, tā biàn tí qián lí kāi le.",
        "vietnamese": "Lãnh đạo còn chưa phát biểu xong, anh ấy đã vội rời đi trước rồi."
      },
      {
        "chinese": "他看我心情不好，便陪我聊了半天。",
        "pinyin": "Tā kàn wǒ xīn qíng bù hǎo, biàn péi wǒ liáo le bàn tiān.",
        "vietnamese": "Anh ấy thấy tâm trạng tôi không vui, bèn ngồi trò chuyện cùng tôi suốt cả buổi."
      },
      {
        "chinese": "我写完作业便和朋友一起出去玩儿了。",
        "pinyin": "Wǒ xiě wán zuò yè biàn hé péng yǒu yī qǐ chū qù wánr le.",
        "vietnamese": "Tôi làm xong bài tập liền cùng bạn bè rủ nhau ra ngoài đi chơi."
      }
    ]
  },
  {
    "id": "hsk5-g-57",
    "order": 57,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chọn lựa: 或是……，或是…… (Hoặc là... hoặc là...)",
    "titleZh": "或是……，或是……",
    "grammarType": "句子的类型",
    "categoryType": "选择复句",
    "grammarDetail": "选择复句",
    "structure": "或是 + Lựa chọn A，或是 + Lựa chọn B",
    "explanationVi": "Dùng trong văn viết thay cho '或者...或者...', biểu thị sự lựa chọn không bắt buộc giữa hai hay nhiều khả năng được liệt kê.",
    "tips": "Thường dùng trong các câu trần thuật nêu thói quen hoặc phương án khả thi.",
    "examples": [
      {
        "chinese": "晚餐我或是吃面条儿，或是喝粥。",
        "pinyin": "Wǎn cān wǒ huò shì chī miàn tiáo ér, huò shì hē zhōu.",
        "vietnamese": "Bữa tối tôi hoặc là ăn mì sợi, hoặc là húp chút cháo."
      },
      {
        "chinese": "假期他或是去海边度假，或是去爬山。",
        "pinyin": "Jiǎ qī tā huò shì qù hǎi biān dù jiǎ, huò shì qù pá shān.",
        "vietnamese": "Kỳ nghỉ anh ấy hoặc là đi biển nghỉ dưỡng, hoặc là đi leo núi."
      }
    ]
  },
  {
    "id": "hsk5-g-58",
    "order": 58,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết điều kiện: 一旦……，就…… (Một khi... thì...)",
    "titleZh": "一旦……，就……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "一旦 + Điều kiện / Sự việc phát sinh，就 + Kết quả / Hành động tất yếu",
    "explanationVi": "Biểu thị giả định nếu một điều kiện nào đó xảy ra (thường là sự kiện có tính bước ngoặt hoặc nghiêm trọng) thì kết quả tương ứng nhất định sẽ xuất hiện.",
    "tips": "Thường dùng để cảnh báo hậu quả của các thói quen xấu hoặc nhắc nhở không bỏ lỡ cơ hội.",
    "examples": [
      {
        "chinese": "一旦养成坏习惯，就很难改变。",
        "pinyin": "Yī dàn yǎng chéng huài xí guàn, jiù hěn nán gǎi biàn.",
        "vietnamese": "Một khi đã hình thành thói quen xấu thì sẽ rất khó thay đổi."
      },
      {
        "chinese": "孩子一旦发烧，就赶快送去医院。",
        "pinyin": "Hái zi yī dàn fā shāo, jiù gǎn kuài sòng qù yī yuàn.",
        "vietnamese": "Đứa bé hễ mà sốt một cái là phải mau chóng đưa đến bệnh viện ngay."
      }
    ]
  },
  {
    "id": "hsk5-g-59",
    "order": 59,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết văn viết: 假如……，（就）…… (Giả sử... thì...)",
    "titleZh": "假如……，（就）……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "假如 + Giả thuyết，(就) + Hệ quả",
    "explanationVi": "'假如' (jiǎrú) là liên từ giả thiết trang trọng tương đương với '如果, 要是', dùng nhiều trong văn viết, nghị luận hoặc đặt câu hỏi suy tưởng.",
    "tips": "Trong thi viết HSK 5, thay '如果' bằng '假如' giúp bài luận có giọng văn trưởng thành hơn.",
    "examples": [
      {
        "chinese": "假如他们也同意，我们就按照计划开展工作。",
        "pinyin": "Jiǎ rú tā men yě tóng yì, wǒ men jiù àn zhào jì huà kāi zhǎn gōng zuò.",
        "vietnamese": "Giả sử họ cũng đồng ý, chúng ta sẽ bắt tay triển khai công việc theo đúng kế hoạch."
      },
      {
        "chinese": "假如有一天你当了校长，你会制定什么规则？",
        "pinyin": "Jiǎ rú yǒu yī tiān nǐ dāng le xiào zhǎng, nǐ huì zhì dìng shén me guī zé?",
        "vietnamese": "Giả sử một ngày nào đó bạn làm hiệu trưởng, bạn sẽ ban hành những nội quy gì?"
      }
    ]
  },
  {
    "id": "hsk5-g-60",
    "order": 60,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết tình huống bất trắc: 万一……，（就）…… (Vạn nhất, lỡ như... thì...)",
    "titleZh": "万一……，（就）……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "万一 + Tình huống rủi ro ngoài ý muốn，(就) + Biện pháp ứng phó",
    "explanationVi": "'万一' nhấn mạnh giả thuyết về một sự việc có xác suất xảy ra cực kỳ nhỏ nhưng hậu quả lại tiêu cực hoặc hệ trọng, đòi hỏi phải dự phòng trước.",
    "tips": "Có thể đứng trước chủ ngữ hoặc sau chủ ngữ của vế điều kiện.",
    "examples": [
      {
        "chinese": "万一他不配合，我们就要想其他办法。",
        "pinyin": "Wàn yī tā bù pèi hé, wǒ men jiù yào xiǎng qí tā bàn fǎ.",
        "vietnamese": "Vạn nhất anh ta không chịu phối hợp, chúng ta sẽ phải tính phương án khác."
      },
      {
        "chinese": "万一失败了，你考虑过后果吗？",
        "pinyin": "Wàn yī shī bài le, nǐ kǎo lǜ guò hòu guǒ ma?",
        "vietnamese": "Lỡ may thất bại, bạn đã từng nghĩ tới hậu quả chưa?"
      }
    ]
  },
  {
    "id": "hsk5-g-61",
    "order": 61,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết phản đề: ……，要不然/不然…… (Bằng không, nếu không thì...)",
    "titleZh": "……，要不然/不然……",
    "grammarType": "句子的类型",
    "categoryType": "假设复句",
    "grammarDetail": "假设复句",
    "structure": "Hành động / Yêu cầu，要不然 / 不然 + Hậu quả xấu xảy ra",
    "explanationVi": "Vế trước đưa ra lời khuyên hoặc điều kiện cần thiết, vế sau dùng '要不然' hoặc '不然' dẫn xuất hậu quả tiêu cực sẽ xảy ra nếu không thực hiện điều ở vế trước.",
    "tips": "'不然' tương đương với '否则', mang tính khẩu ngữ thân mật hơn.",
    "examples": [
      {
        "chinese": "公司需要敢想敢干的年轻人，要不然就很难有发展。",
        "pinyin": "Gōng sī xū yào gǎn xiǎng gǎn gàn de nián qīng rén, yào bù rán jiù hěn nán yǒu fā zhǎn.",
        "vietnamese": "Công ty cần những người trẻ dám nghĩ dám làm, bằng không thì sẽ rất khó có bước phát triển."
      },
      {
        "chinese": "还好我反应快，不然孩子就摔倒了。",
        "pinyin": "Hái hǎo wǒ fǎn yīng kuài, bù rán hái zi jiù shuāi dào le.",
        "vietnamese": "Cũng may tôi phản xạ nhanh, nếu không thì đứa nhỏ đã ngã rồi."
      }
    ]
  },
  {
    "id": "hsk5-g-62",
    "order": 62,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả văn viết: ……，因而…… (Do đó, vì thế mà...)",
    "titleZh": "……，因而……",
    "grammarType": "句子的类型",
    "categoryType": "因果复句",
    "grammarDetail": "因果复句",
    "structure": "Nguyên nhân / Tiền đề，因而 + Kết quả tất yếu",
    "explanationVi": "'因而' là liên từ nhân quả văn viết cao cấp (kết hợp ý nghĩa của 因 - vì thế và 而 - mà thành), đặt ở đầu phân câu sau để biểu thị kết quả nảy sinh tự nhiên từ phân câu trước.",
    "tips": "Khác với '所以', '因而' chỉ đứng ở phân câu chỉ kết quả, không đi chung với '因为' ở vế trước.",
    "examples": [
      {
        "chinese": "她上课坚持认真听讲，因而成绩始终非常优秀。",
        "pinyin": "Tā shàng kè jiān chí rèn zhēn tīng jiǎng, yīn ér chéng jì shǐ zhōng fēi cháng yōu xiù.",
        "vietnamese": "Cô ấy luôn kiên trì chăm chú nghe giảng trên lớp, do đó thành tích trước sau vẫn vô cùng xuất sắc."
      },
      {
        "chinese": "我和他认识很多年了，因而很了解他的性格。",
        "pinyin": "Wǒ hé tā rèn shí hěn duō nián le, yīn ér hěn le jiě tā de xìng gé.",
        "vietnamese": "Tôi và anh ấy quen biết nhau đã bao nhiêu năm, thành thử rất thấu hiểu tính cách của anh ấy."
      }
    ]
  },
  {
    "id": "hsk5-g-63",
    "order": 63,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả suy luận: ……，可见…… (Đủ thấy, có thể thấy...)",
    "titleZh": "……，可见……",
    "grammarType": "句子的类型",
    "categoryType": "因果复句",
    "grammarDetail": "因果复句",
    "structure": "Hiện tượng thực tế / Dữ liệu，可见 + Nhận định suy luận",
    "explanationVi": "'可见' đứng ở vế sau dựa trên cơ sở sự thật hiển nhiên ở vế trước để rút ra kết luận, đánh giá hoặc phán đoán logic xác thực.",
    "tips": "Là từ nối suy luận rất hay dùng trong các bài đọc hiểu nghị luận HSK 5.",
    "examples": [
      {
        "chinese": "这个项目完成得如此顺利，可见团队的合作非常有效。",
        "pinyin": "Zhè gè xiàng mù wán chéng dé rú cǐ shùn lì, kě jiàn tuán duì de hé zuò fēi cháng yǒu xiào.",
        "vietnamese": "Dự án này hoàn thành thuận lợi đến như vậy, có thể thấy sự hợp tác của toàn đội ngũ vô cùng hiệu quả."
      },
      {
        "chinese": "他每天都在图书馆学习，可见他对考试非常重视。",
        "pinyin": "Tā měi tiān dōu zài tú shū guǎn xué xí, kě jiàn tā duì kǎo shì fēi cháng zhòng shì.",
        "vietnamese": "Ngày nào cậu ấy cũng vùi đầu học ở thư viện, đủ thấy cậu ấy coi trọng kỳ thi đến mức nào."
      }
    ]
  },
  {
    "id": "hsk5-g-64",
    "order": 64,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ cực hạn: 哪怕……，也…… (Cho dù... đi chăng nữa thì cũng...)",
    "titleZh": "哪怕……，也……",
    "grammarType": "句子的类型",
    "categoryType": "让步复句",
    "grammarDetail": "让步复句",
    "structure": "哪怕 + Tình huống giả định cực đoan nhất，也 + Quyết tâm / Sự thật không đổi",
    "explanationVi": "'哪怕' biểu thị nhượng bộ với mức độ giả định cao nhất hoặc khắc nghiệt nhất, nhưng quyết tâm hoặc kết quả ở vế sau vẫn không hề lung lay thay đổi.",
    "tips": "Mạnh hơn '即使'; thường dùng để bộc lộ ý chí kiên định vượt qua thử thách.",
    "examples": [
      {
        "chinese": "哪怕时间再紧张，也要按时完成任务。",
        "pinyin": "Nǎ pà shí jiān zài jǐn zhāng, yě yào àn shí wán chéng rèn wù.",
        "vietnamese": "Cho dù thời gian có gấp gáp đến đâu đi nữa, cũng phải hoàn thành nhiệm vụ đúng hạn."
      },
      {
        "chinese": "哪怕租金继续提高，也仍然有很多人愿意住在这里。",
        "pinyin": "Nǎ pà zū jīn jì xù tí gāo, yě réng rán yǒu hěn duō rén yuàn yì zhù zài zhè lǐ.",
        "vietnamese": "Dẫu cho tiền thuê nhà có tiếp tục tăng cao, vẫn có rất nhiều người sẵn sàng sống ở đây."
      }
    ]
  },
  {
    "id": "hsk5-g-65",
    "order": 65,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến phản tác dụng: 不但不/不但没有……，反而…… (Chẳng những không... trái lại còn...)",
    "titleZh": "不但不/不但没有……，反而……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "Chủ ngữ + 不但不 / 不但没有 + Kết quả mong muốn，反而 + Kết quả tồi tệ hơn",
    "explanationVi": "Diễn tả sự việc chẳng những không đạt được trạng thái mong đợi ban đầu, mà ngược lại còn phát triển theo chiều hướng hoàn toàn trái ngược hoặc tồi tệ hơn.",
    "tips": "Là mẫu câu kết hợp giữa ý tăng tiến và chuyển ngoặt bất ngờ, tần suất xuất hiện rất cao trong HSK 5.",
    "examples": [
      {
        "chinese": "他不但不改正错误，反而继续犯更大的错误。",
        "pinyin": "Tā bù dàn bù gǎi zhèng cuò wù, fǎn ér jì xù fàn gèng dà de cuò wù.",
        "vietnamese": "Hắn ta chẳng những không sửa chữa lỗi lầm, ngược lại còn tiếp tục phạm sai lầm nghiêm trọng hơn."
      },
      {
        "chinese": "你这样做不但没有解决问题，反而增加了新问题。",
        "pinyin": "Nǐ zhè yàng zuò bù dàn méi yǒu jiě jué wèn tí, fǎn ér zēng jiā le xīn wèn tí.",
        "vietnamese": "Bạn làm như thế chẳng những không giải quyết được vấn đề, trái lại còn nảy sinh thêm nhiều rắc rối mới."
      },
      {
        "chinese": "火不但没有灭，反而越来越大了。",
        "pinyin": "Huǒ bù dàn méi yǒu miè, fǎn ér yuè lái yuè dà le.",
        "vietnamese": "Ngọn lửa chẳng những không dập tắt được, mà trái lại ngày một bùng cháy lớn hơn."
      }
    ]
  },
  {
    "id": "hsk5-g-66",
    "order": 66,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến bổ sung: 不是……，还/还是…… (Không chỉ... mà còn...)",
    "titleZh": "不是……，还/还是……",
    "grammarType": "句子的类型",
    "categoryType": "递进复句",
    "grammarDetail": "递进复句",
    "structure": "不是 + Điều kiện đơn lẻ + 就可以，还 / 还是 + Điều kiện bổ sung cần thiết",
    "explanationVi": "Nhấn mạnh rằng chỉ có yếu tố thứ nhất thôi là chưa đủ, mà nhất thiết phải bổ sung thêm hành động hoặc điều kiện quan trọng ở phân câu sau.",
    "tips": "Tránh nhầm với '不是...而是...' (phủ định A để khẳng định B).",
    "examples": [
      {
        "chinese": "不是光有目标就可以，还要行动起来。",
        "pinyin": "Bù shì guāng yǒu mù biāo jiù kě yǐ, hái yào xíng dòng qǐ lái.",
        "vietnamese": "Không phải chỉ cần có mục tiêu là xong, mà còn phải bắt tay vào hành động thực tế nữa."
      },
      {
        "chinese": "这个问题不是我一个人就能解决的，还是需要大家积极配合。",
        "pinyin": "Zhè gè wèn tí bù shì wǒ yī gè rén jiù néng jiě jué de, hái shì xū yào dà jiā jī jí pèi hé.",
        "vietnamese": "Vấn đề này không phải một mình tôi là có thể giải quyết xong, mà vẫn cần mọi người tích cực phối hợp cùng."
      }
    ]
  },
  {
    "id": "hsk5-g-67",
    "order": 67,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức mục đích: ……，为的是…… (...cốt là để / với mục đích...)",
    "titleZh": "……，为的是……",
    "grammarType": "句子的类型",
    "categoryType": "目的复句",
    "grammarDetail": "目的复句",
    "structure": "Hành động nỗ lực，为的是 + Mục đích hướng tới",
    "explanationVi": "Vế trước nêu hành động, vế sau dùng '为的是' để giải thích rõ ràng mục đích cao đẹp hoặc lý tưởng đằng sau sự nỗ lực đó.",
    "tips": "'为的是' thường đứng ở đầu phân câu thứ hai để nhấn mạnh động cơ hành động.",
    "examples": [
      {
        "chinese": "他每天早起锻炼，为的是保持健康。",
        "pinyin": "Tā měi tiān zǎo qǐ duàn liàn, wèi de shì bǎo chí jiàn kāng.",
        "vietnamese": "Anh ấy ngày nào cũng dậy sớm rèn luyện thể thao, cốt là để giữ gìn sức khỏe."
      },
      {
        "chinese": "她每天都练习中文，为的是将来能够来中国留学。",
        "pinyin": "Tā měi tiān dōu liàn xí zhōng wén, wèi de shì jiāng lái néng gòu lái zhōng guó liú xué.",
        "vietnamese": "Cô ấy ngày ngày đều luyện tập tiếng Trung, mục đích là để mai sau có thể sang Trung Quốc du học."
      }
    ]
  },
  {
    "id": "hsk5-g-68",
    "order": 68,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức rút gọn phủ định kép: 没有……就没有…… (Không có... thì sẽ không có...)",
    "titleZh": "没有……就没有……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "没有 A 就没有 B",
    "explanationVi": "Sử dụng hai lần phủ định '没有' trong câu rút gọn để khẳng định tuyệt đối vai trò quyết định, tiền đề tiên quyết của A đối với sự tồn tại hoặc thành công của B.",
    "tips": "Mẫu câu chân lý đúc kết kinh nghiệm sống rất giàu sức thuyết phục (没有汗水就没有收获).",
    "examples": [
      {
        "chinese": "没有老师的努力付出就没有我们今天的成绩。",
        "pinyin": "Méi yǒu lǎo shī de nǔ lì fù chū jiù méi yǒu wǒ men jīn tiān de chéng jì.",
        "vietnamese": "Không có sự tận tụy cống hiến của các thầy cô thì sẽ không có được thành tích ngày hôm nay của chúng em."
      },
      {
        "chinese": "没有汗水就没有收获。",
        "pinyin": "Méi yǒu hàn shuǐ jiù méi yǒu shōu huò.",
        "vietnamese": "Không có mồ hôi công sức thì sẽ không có gặt hái thành quả."
      }
    ]
  },
  {
    "id": "hsk5-g-69",
    "order": 69,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức rút gọn quy luật: 不……不…… (Không... thì không...)",
    "titleZh": "不……不……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "不 + Hành động A + 不 + Kết quả B",
    "explanationVi": "Biểu thị quan hệ nhân quả logic tất yếu thông qua cặp từ phủ định: 'không trải nghiệm qua thì không thể biết được' (不尝不知道), hoặc 'không xử lý thì sẽ dẫn đến hậu quả' (不修不安全).",
    "tips": "Câu nói ngắn gọn, đanh thép, mang đậm phong vị tục ngữ khẩu ngữ.",
    "examples": [
      {
        "chinese": "不尝不知道，这种水果的味道果然很独特。",
        "pinyin": "Bù cháng bù zhī dào, zhè zhǒng shuǐ guǒ de wèi dào guǒ rán hěn dú tè.",
        "vietnamese": "Không nếm thử thì không biết, hương vị của loại trái cây này quả nhiên rất độc đáo."
      },
      {
        "chinese": "毛病虽然不大，但还是应该修理一下，不修不安全。",
        "pinyin": "Máo bìng suī rán bù dà, dàn hái shì yīng gāi xiū lǐ yī xià, bù xiū bù ān quán.",
        "vietnamese": "Trục trặc tuy không lớn, nhưng vẫn nên sửa chữa một chút, không sửa thì không an toàn."
      }
    ]
  },
  {
    "id": "hsk5-g-70",
    "order": 70,
    "category": "cau-phuc",
    "categoryName": "Câu phức & Liên từ",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức rút gọn nhượng bộ: 再……也…… (Dù có... đến mấy cũng...)",
    "titleZh": "再……也……",
    "grammarType": "句子的类型",
    "categoryType": "紧缩复句",
    "grammarDetail": "紧缩复句",
    "structure": "再 + Tính từ / Động từ + 也 + Vị ngữ",
    "explanationVi": "'再' đặt trước tính từ hoặc động từ biểu thị mức độ cực hạn, phối hợp với '也' ở vế sau để khẳng định tính chất vững vàng, không bao giờ thay đổi.",
    "tips": "Thường dùng trong các câu châm ngôn cổ vũ tinh thần: '困难再大也要坚持下去' (Khó khăn có lớn mấy cũng phải kiên trì).",
    "examples": [
      {
        "chinese": "这首歌再听多少遍也不会烦。",
        "pinyin": "Zhè shǒu gē zài tīng duō shǎo biàn yě bù huì fán.",
        "vietnamese": "Bài hát này dẫu nghe đi nghe lại bao nhiêu lần đi chăng nữa cũng chẳng thấy chán."
      },
      {
        "chinese": "困难再大也要坚持下去。",
        "pinyin": "Kùn nán zài dà yě yào jiān chí xià qù.",
        "vietnamese": "Khó khăn có to lớn đến mấy cũng nhất định phải kiên trì tới cùng."
      }
    ]
  }
];
