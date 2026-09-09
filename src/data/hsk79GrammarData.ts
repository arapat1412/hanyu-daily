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

export const HSK79_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "cau-tu-tu-loai",
    "name": "Hình vị & Từ loại cao cấp",
    "icon": "🔬"
  },
  {
    "id": "cu-phap-4-chu",
    "name": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "icon": "💬"
  },
  {
    "id": "cau-truc-co-dinh",
    "name": "Cấu trúc cố định & Khẩu ngữ",
    "icon": "⚡"
  },
  {
    "id": "cau-phuc-da-tang",
    "name": "Câu so sánh & Câu phức đa tầng",
    "icon": "🔗"
  },
  {
    "id": "mach-lac-van-ban",
    "name": "Đoạn văn & Quần câu (句群)",
    "icon": "📑"
  }
];

export const HSK79_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk79-g-01",
    "order": 1,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Tiền tố cấu từ cao cấp: 后— (hậu-), 亲— (thân-)",
    "titleZh": "后—、亲—",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "后 / 亲 + Danh từ / Động từ",
    "explanationVi": "Hai tiền tố cao cấp trong HSK 7-9: 1) '后—' (hậu-) biểu thị giai đoạn hoặc thời kỳ sau một sự kiện, trào lưu hoặc sự cố lớn (后奥运时代 - thời kỳ hậu Olympic, 后疫情时代 - thời kỳ hậu đại dịch, 后现代 - hậu hiện đại); 2) '亲—' (thân-) biểu thị tự tay mình, trực tiếp có mặt làm hành động thể hiện tình cảm, sự gần gũi hoặc trách nhiệm cao (亲手 - đích thân ra tay, 亲眼 - tận mắt, 亲笔 - đích thân chấp bút, 亲历 - trực tiếp trải qua).",
    "tips": "Thường gặp trong các văn bản thời sự, kinh tế và chính trị để chỉ bối cảnh chuyển tiếp hoặc hành động trực tiếp của lãnh đạo.",
    "examples": [
      {
        "chinese": "奥运场馆开工之前，就要考虑到后奥运时代的需求。",
        "pinyin": "Ào yùn chǎng guǎn kāi gōng zhī qián, jiù yào kǎo lǜ dào hòu ào yùn shí dài de xū qiú.",
        "vietnamese": "Trước khi khởi công các nhà thi đấu Olympic, đã phải tính đến nhu cầu sử dụng của thời kỳ hậu Olympic."
      },
      {
        "chinese": "市长对老人们嘘寒问暖，并亲手将慰问品送到老人手中。",
        "pinyin": "Shì zhǎng duì lǎo rén men xū hán wèn nuǎn, bìng qīn shǒu jiāng wèi wèn pǐn sòng dào lǎo rén shǒu zhōng.",
        "vietnamese": "Thị trưởng ân cần thăm hỏi các cụ già, và đích thân trao tận tay những phần quà thăm hỏi cho các cụ."
      }
    ]
  },
  {
    "id": "hsk79-g-02",
    "order": 2,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Các hậu tố định danh & tính chất chuyên ngành: —观, —鬼, —界, —然, —坛, —为, —制",
    "titleZh": "—观、—鬼、—界、—然、—坛、—为、—制",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Từ căn + 观 / 鬼 / 界 / 然 / 坛 / 为 / 制",
    "explanationVi": "Bảy hậu tố định danh trình độ cao: 1) '—观': quan niệm, nhân sinh quan (价值观 - giá trị quan, 消费观, 审美观); 2) '—鬼': kẻ có tính cách/thói quen xấu đặc trưng (小气鬼 - kẻ bủn xỉn, 捣蛋鬼, 贪吃鬼); 3) '—界': giới, lĩnh vực hoạt động (学术界 - giới học thuật, 产业界, 演艺界); 4) '—然': hậu tố tính từ/phó từ cổ biểu thị trạng thái (安然 - bình an yên ổn, 偶然, 坦然); 5) '—坛': vũ đài, diễn đàn nghệ thuật/thể thao (体坛 - làng thể thao, 文坛, 乐坛); 6) '—为': được coi là, được tán thành rộng rãi (广为 - được rộng rãi...: 广为称赞, 广为流传); 7) '—制': chế độ, hệ thống tổ chức (公有制 - chế độ công hữu, 会员制, 责任制).",
    "tips": "Nắm vững các hậu tố này là chìa khóa đọc hiểu nhanh các thuật ngữ trừu tượng trong văn bản học thuật và báo chí chính luận HSK 7-9.",
    "examples": [
      {
        "chinese": "新时代农民的价值观、消费观、审美观都和以往有了很大的不同。",
        "pinyin": "Xīn shí dài nóng mín de jià zhí guān, xiāo fèi guān, shěn měi guān dōu hé yǐ wǎng yǒu le hěn dà de bù tóng.",
        "vietnamese": "Giá trị quan, quan niệm tiêu dùng và gu thẩm mỹ của người nông dân thời đại mới đều đã có sự khác biệt rất lớn so với trước kia."
      },
      {
        "chinese": "只给孩子花钱却不花时间陪伴孩子的家长同样是小气鬼。",
        "pinyin": "Zhǐ gěi hái zi huā qián què bù huā shí jiān péi bàn hái zi de jiā zhǎng tóng yàng shì xiǎo qì guǐ.",
        "vietnamese": "Những bậc cha mẹ chỉ chịu chi tiền mà không dành thời gian ở bên con cái thì cũng là những kẻ keo kiệt bủn xỉn mà thôi."
      },
      {
        "chinese": "我的导师在学术界和产业界都享有崇高的声望。",
        "pinyin": "Wǒ de dǎo shī zài xué shù jiè hé chǎn yè jiè dōu xiǎng yǒu chóng gāo de shēng wàng.",
        "vietnamese": "Người thầy hướng dẫn của tôi được hưởng uy tín vô cùng cao trọng ở cả giới học thuật lẫn giới công nghiệp."
      },
      {
        "chinese": "经过七个小时的飞行，我终于在异国安然落地。",
        "pinyin": "Jīng guò qī gè xiǎo shí de fēi xíng, wǒ zhōng yú zài yì guó ān rán luò dì.",
        "vietnamese": "Trải qua 7 giờ đồng hồ bay, cuối cùng tôi đã hạ cánh an toàn bình yên nơi đất khách quê người."
      },
      {
        "chinese": "今年的“体坛风云人物”颁奖仪式特别隆重。",
        "pinyin": "Jīn nián de \"tǐ tán fēng yún rén wù\" bān jiǎng yí shì tè bié lóng zhòng.",
        "vietnamese": "Lễ trao giải 'Nhân vật tiêu biểu làng thể thao' năm nay diễn ra đặc biệt long trọng."
      },
      {
        "chinese": "本公司的产品多年来广为消费者称赞。",
        "pinyin": "Běn gōng sī de chǎn pǐn duō nián lái guǎng wèi xiāo fèi zhě chēng zàn.",
        "vietnamese": "Sản phẩm của công ty chúng tôi suốt nhiều năm qua được đông đảo người tiêu dùng hết lời khen ngợi."
      },
      {
        "chinese": "以公有制为主体、多种所有制经济共同发展,是中国现阶段的基本经济制度。",
        "pinyin": "Yǐ gōng yǒu zhì wèi zhǔ tǐ, duō zhǒng suǒ yǒu zhì jīng jì gòng tóng fā zhǎn, shì zhōng guó xiàn jiē duàn de jī běn jīng jì zhì dù.",
        "vietnamese": "Lấy chế độ công hữu làm chủ thể, nhiều thành phần kinh tế cùng phát triển là chế độ kinh tế cơ bản trong giai đoạn hiện nay của Trung Quốc."
      }
    ]
  },
  {
    "id": "hsk79-g-03",
    "order": 3,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm từ loại chính luận đặc biệt: 巴不得, 并非, 除外, 犯不着, 犯得着, 恨不得, 可否, 可谓, 免不了, 所谓, 有所, 予以",
    "titleZh": "巴不得、并非、除外、犯不着、犯得着、恨不得、可否、可谓、免不了、所谓、有所、予以",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Từ loại chính luận / thành ngữ ngữ pháp + Vị ngữ",
    "explanationVi": "Nhóm từ vựng - ngữ pháp cao cấp có tần suất xuất hiện cực cao: '巴不得' / '恨不得' (chỉ mong sao, thèm muốn tột cùng); '并非' (tuyệt nhiên không phải là - phủ định dứt khoát); '除外' (ngoại trừ... ra); '犯不着' / '犯得着' (không đáng / có đáng hay không - biểu thị sự cân nhắc thiệt hơn); '可否' (có thể được chăng - thỉnh thị ý kiến trang trọng); '可谓' (quả thực có thể gọi là); '免不了' (khó tránh khỏi); '所谓' (cái gọi là); '有所' (có phần, có sự... - 有所提高, 有所顾虑); '予以' (tiến hành, dành cho... - 予以批评, 予以支持).",
    "tips": "Đây là cốt lõi của văn phong công văn, xã luận và tranh biện tri thức trong kỳ thi HSK 7-9.",
    "examples": [
      {
        "chinese": "他巴不得早点儿退休，好能到处游山玩水。",
        "pinyin": "Tā bā bù dé zǎodiǎnr tuì xiū, hǎo néng dào chù yóu shān wán shuǐ.",
        "vietnamese": "Ông ấy chỉ mong sao được nghỉ hưu sớm một chút, để có thể đi chu du thưởng ngoạn non nước khắp nơi."
      },
      {
        "chinese": "在外漂泊多年的游子归心似箭，巴不得一步跨进家门。",
        "pinyin": "Zài wài piāo pō duō nián de yóu zi guī xīn shì jiàn, bā bù dé yī bù kuà jìn jiā mén.",
        "vietnamese": "Người con xa xứ phiêu bạt nhiều năm lòng dạ nóng như lửa đốt, chỉ mong sao một bước nhảy ngay vào đến cửa nhà."
      },
      {
        "chinese": "一种艺术风格的形成并非一蹴而就，必须经历一个渐进发展的过程。",
        "pinyin": "Yī zhǒng yì shù fēng gé de xíng chéng bìng fēi yī cù ér jiù, bì xū jīng lì yī gè jiàn jìn fā zhǎn de guò chéng.",
        "vietnamese": "Sự hình thành của một phong cách nghệ thuật tuyệt nhiên không thể một bước là xong, mà phải trải qua một quá trình phát triển tiệm tiến lâu dài."
      },
      {
        "chinese": "你之所以落选，并非你不优秀，而是你的风格和他们的需求不完全匹配。",
        "pinyin": "Nǐ zhī suǒ yǐ luò xuǎn, bìng fēi nǐ bù yōu xiù, ér shì nǐ de fēng gé hé tā men de xū qiú bù wán quán pǐ pèi.",
        "vietnamese": "Sở dĩ bạn không trúng tuyển tuyệt đối không phải vì bạn kém cỏi, mà là phong cách của bạn không hoàn toàn khớp với nhu cầu của họ."
      },
      {
        "chinese": "八折优惠仅限周一至周五使用，法定节假日除外。",
        "pinyin": "Bā zhé yōu huì jǐn xiàn zhōu yī zhì zhōu wǔ shǐ yòng, fǎ dìng jié jiǎ rì chú wài.",
        "vietnamese": "Ưu đãi giảm giá 20% chỉ áp dụng từ thứ Hai đến thứ Sáu, ngoại trừ các ngày nghỉ lễ theo luật định."
      },
      {
        "chinese": "在场各位皆是西装革履，只有一人除外，穿着十分随意。",
        "pinyin": "Zài chǎng gè wèi jiē shì xī zhuāng gé lǚ, zhǐ yǒu yī rén chú wài, chuān zhe shí fēn suí yì.",
        "vietnamese": "Những người có mặt tại hội trường ai nấy đều âu phục chỉnh tề, chỉ duy nhất một người ngoại lệ, ăn mặc vô cùng tùy ý."
      },
      {
        "chinese": "他是个啥也不懂的毛头小子，你犯不着跟他一般见识。",
        "pinyin": "Tā shì gè shá yě bù dǒng de máo tóu xiǎo zi, nǐ fàn bù zhe gēn tā yī bān jiàn shí.",
        "vietnamese": "Nó chỉ là thằng nhóc miệng còn hôi sữa chẳng biết gì, bạn việc gì phải chấp nhặt so đo với nó làm chi."
      },
      {
        "chinese": "你们俩打小就认识，为了这么点儿小事闹翻，犯不着。",
        "pinyin": "Nǐ men liǎ dǎ xiǎo jiù rèn shí, wèi le zhè me diǎn ér xiǎo shì nào fān, fàn bù zhe.",
        "vietnamese": "Hai đứa quen biết nhau từ tấm bé, vì chút chuyện cỏn con này mà cãi cọ trở mặt thì thật chẳng đáng chút nào."
      },
      {
        "chinese": "现在是公司发展的关键时期，你犯得着为这些小事分心吗？",
        "pinyin": "Xiàn zài shì gōng sī fā zhǎn de guān jiàn shí qī, nǐ fàn dé zhe wèi zhè xiē xiǎo shì fēn xīn ma?",
        "vietnamese": "Hiện tại đang là giai đoạn then chốt cho sự phát triển của công ty, bạn có đáng phải bận lòng phân tâm vì mấy chuyện vụn vặt này không?"
      },
      {
        "chinese": "人家好心好意给你提些意见，你这么激动，犯得着吗？",
        "pinyin": "Rén jiā hǎo xīn hǎo yì gěi nǐ tí xiē yì jiàn, nǐ zhè me jī dòng, fàn dé zhe ma?",
        "vietnamese": "Người ta có lòng tốt góp ý cho bạn, bạn kích động giãy nảy lên như vậy liệu có đáng hay không?"
      },
      {
        "chinese": "一开始项目推动得非常缓慢，我们恨不得24小时都在工作。",
        "pinyin": "Yī kāi shǐ xiàng mù tuī dòng dé fēi cháng huǎn màn, wǒ men hèn bù dé 2 4 xiǎo shí dōu zài gōng zuò.",
        "vietnamese": "Thời gian đầu dự án triển khai vô cùng chậm chạp, chúng tôi thèm muốn đến mức chỉ ước một ngày có thể làm việc cả 24 tiếng đồng hồ."
      },
      {
        "chinese": "大家的学习热情很高，恨不得一下子把所有的先进技术都学到手。",
        "pinyin": "Dà jiā de xué xí rè qíng hěn gāo, hèn bù dé yī xià zi bǎ suǒ yǒu de xiān jìn jì shù dōu xué dào shǒu.",
        "vietnamese": "Tinh thần học hỏi của mọi người rất cao, ai nấy đều nóng lòng muốn một phát học hết sạch toàn bộ công nghệ tiên tiến vào tay."
      },
      {
        "chinese": "此事可否容我思索几日，再行答复？",
        "pinyin": "Cǐ shì kě fǒu róng wǒ sī suǒ jǐ rì, zài xíng dá fù?",
        "vietnamese": "Chuyện này liệu có thể cho phép tôi suy nghĩ vài hôm rồi mới hồi đáp được chăng?"
      },
      {
        "chinese": "关于先生会上所言，学生尚有不明之处，可否向先生进一步请教？",
        "pinyin": "Guān yú xiān shēng huì shàng suǒ yán, xué shēng shàng yǒu bù míng zhī chù, kě fǒu xiàng xiān shēng jìn yī bù qǐng jiào?",
        "vietnamese": "Về những điều thầy phát biểu trong cuộc họp, học trò vẫn còn chỗ chưa thấu suốt, liệu có thể thỉnh giáo thầy sâu hơn được chăng?"
      },
      {
        "chinese": "我申请与其当面对质，不知可否？",
        "pinyin": "Wǒ shēn qǐng yǔ qí dāng miàn duì zhì, bù zhī kě fǒu?",
        "vietnamese": "Tôi xin phép được đối chất trực tiếp với anh ta, không rõ liệu có được chấp thuận chăng?"
      },
      {
        "chinese": "王安忆对上海人的观察和描写非常细腻，可谓“入木三分”。",
        "pinyin": "Wáng ān yì duì shàng hǎi rén de guān chá hé miáo xiě fēi cháng xì nì, kě wèi \"rù mù sān fēn\" .",
        "vietnamese": "Sự quan sát và ngòi bút miêu tả của Vương An Ức về con người Thượng Hải vô cùng tinh tế, quả đúng là đạt tới độ 'sâu sắc lạ thường'."
      },
      {
        "chinese": "《昆虫记》知识性、趣味性、哲理性兼具，真可谓是科学与艺术相结合的典范。",
        "pinyin": "«kūn chóng jì» zhī shí xìng, qù wèi xìng, zhé lǐ xìng jiān jù, zhēn kě wèi shì kē xué yǔ yì shù xiāng jié hé de diǎn fàn.",
        "vietnamese": "Tác phẩm 'Côn trùng ký' hội tụ đủ cả tính tri thức, tính thú vị lẫn tính triết lý, quả thật xứng danh là hình mẫu kết hợp mẫu mực giữa khoa học và nghệ thuật."
      },
      {
        "chinese": "在成长的道路上，免不了会遇到各种各样的问题。",
        "pinyin": "Zài chéng zhǎng de dào lù shàng, miǎn bù le huì yù dào gè zhǒng gè yàng de wèn tí.",
        "vietnamese": "Trên con đường trưởng thành, khó tránh khỏi việc sẽ phải đối mặt với muôn vàn vấn đề trắc trở khác nhau."
      },
      {
        "chinese": "这件事要是让他知道，一顿数落是免不了的。",
        "pinyin": "Zhè jiàn shì yào shì ràng tā zhī dào, yī dùn shù luò shì miǎn bù le de.",
        "vietnamese": "Chuyện này nếu để ông ấy biết được, thì một trận la mắng trách móc là điều khó mà tránh khỏi."
      },
      {
        "chinese": "所谓难得糊涂，并非是对生活的无奈妥协，而是一种张弛有度的处世之道。",
        "pinyin": "Suǒ wèi nán dé hú tú, bìng fēi shì duì shēng huó de wú nài tuǒ xié, ér shì yī zhǒng zhāng chí yǒu dù de chù shì zhī dào.",
        "vietnamese": "Cái gọi là 'khó được hồ đồ' tuyệt nhiên không phải là sự thỏa hiệp bất lực trước cuộc đời, mà là một thuật đối nhân xử thế biết co biết duỗi."
      },
      {
        "chinese": "这家公司所谓的产品升级，不过是给商品换了一个更华丽的包装。",
        "pinyin": "Zhè jiā gōng sī suǒ wèi de chǎn pǐn shēng jí, bù guò shì gěi shāng pǐn huàn le yī gè gèng huá lì de bāo zhuāng.",
        "vietnamese": "Cái gọi là 'nâng cấp sản phẩm' của công ty này chẳng qua chỉ là khoác cho món hàng một lớp bao bì lộng lẫy hơn mà thôi."
      },
      {
        "chinese": "引进先进技术与优化管理流程后，各部门工作效率均有所提高。",
        "pinyin": "Yǐn jìn xiān jìn jì shù yǔ yōu huà guǎn lǐ liú chéng hòu, gè bù mén gōng zuò xiào lǜ jūn yǒu suǒ tí gāo.",
        "vietnamese": "Sau khi du nhập kỹ thuật tiên tiến và tối ưu hóa quy trình quản lý, hiệu suất làm việc của các phòng ban đều có phần được nâng cao."
      },
      {
        "chinese": "倘若事态紧急，无暇向上请示，你大可自行决断，不必有所顾虑。",
        "pinyin": "Tǎng ruò shì tài jǐn jí, wú xiá xiàng shàng qǐng shì, nǐ dà kě zì xíng jué duàn, bù bì yǒu suǒ gù lǜ.",
        "vietnamese": "Nếu như tình thế khẩn cấp không kịp xin chỉ thị cấp trên, bạn hoàn toàn có thể tự mình quyết đoán, không cần phải mang nỗi âu lo gì."
      },
      {
        "chinese": "限于作者水平，如有不当之处还望专家予以批评指正。",
        "pinyin": "Xiàn yú zuò zhě shuǐ píng, rú yǒu bù dāng zhī chù hái wàng zhuān jiā yǔ yǐ pī píng zhǐ zhèng.",
        "vietnamese": "Do trình độ của tác giả còn hạn chế, nếu có chỗ nào chưa thỏa đáng, kính mong các chuyên gia tận tình chỉ giáo và phê bình sửa chữa cho."
      },
      {
        "chinese": "对于原告提出的高昂赔付要求，法院并未予以支持。",
        "pinyin": "Duì yú yuán gào tí chū de gāo áng péi fù yào qiú, fǎ yuàn bìng wèi yǔ yǐ zhī chí.",
        "vietnamese": "Đối với yêu cầu đòi bồi thường với số tiền quá cao do nguyên đơn đưa ra, tòa án đã không chấp nhận phán quyết ủng hộ."
      }
    ]
  },
  {
    "id": "hsk79-g-04",
    "order": 4,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Đại từ nhân xưng sở hữu thể chế: 我 (Tôi / Bên chúng tôi, trường chúng tôi)",
    "titleZh": "我",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "人称代词",
    "structure": "我 + Cơ quan / Tổ chức / Trường học (我校 / 我司 / 我国 / 我部)",
    "explanationVi": "Trong văn bản công văn, phát biểu chính thức hoặc thư tín thương mại, '我' không chỉ là đại từ nhân xưng ngôi thứ nhất cá nhân mà được dùng làm tiền tố đại diện cho cả tập thể, tổ chức của mình (我校 - trường chúng tôi; 我公司 / 我司 - công ty chúng tôi; 我国 - đất nước chúng tôi).",
    "tips": "Mang sắc thái trang trọng, tự hào và chuẩn mực ngoại giao công sở.",
    "examples": [
      {
        "chinese": "我校教育质量上乘，办学几十年间为国家培养、输送了大批优秀人才。",
        "pinyin": "Wǒ xiào jiào yù zhì liàng shàng chéng, bàn xué jǐ shí nián jiān wèi guó jiā péi yǎng, shū sòng le dà pī yōu xiù rén cái.",
        "vietnamese": "Trường chúng tôi chất lượng giáo dục hàng đầu, trong suốt mấy chục năm hoạt động đã đào tạo và cung cấp cho đất nước vô số nhân tài kiệt xuất."
      },
      {
        "chinese": "我公司始终秉持“以客户为中心”的理念，致力于为客户提供最优质的服务。",
        "pinyin": "Wǒ gōng sī shǐ zhōng bǐng chí \"yǐ kè hù wèi zhōng xīn\" de lǐ niàn, zhì lì yú wèi kè hù tí gōng zuì yōu zhì de fú wù.",
        "vietnamese": "Công ty chúng tôi trước sau luôn kiên trì giữ vững quan điểm 'lấy khách hàng làm trung tâm', dốc toàn lực đem lại dịch vụ tối ưu nhất cho quý khách."
      }
    ]
  },
  {
    "id": "hsk79-g-05",
    "order": 5,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Đại từ chỉ thị văn ngôn & công văn: 彼 (bỉ - kia/người kia), 这么着 (thế này), 兹 (tư - nay/đây)",
    "titleZh": "彼、这么着、兹",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "指示代词",
    "structure": "彼 / 这么着 / 兹 + Danh từ / Vị ngữ",
    "explanationVi": "'彼' (bǐ) chỉ đối phương hoặc thời điểm xa xưa ('彼时' - lúc ấy, thời ấy; '此...非彼...' - cái này không phải cái kia; '知己知彼' - biết mình biết người); '这么着' (zhèmezhe) là khẩu ngữ: 'làm như thế này, thế này đi'; '兹' (zī) là từ mở đầu công văn thông cáo pháp lý: 'nay, nay có' ('兹证明' - nay chứng nhận rằng; '兹有' - nay có).",
    "tips": "'兹证明' là câu mở đầu bất hủ trong mọi loại giấy chứng nhận công tác, chứng nhận cư trú văn bản tiếng Trung.",
    "examples": [
      {
        "chinese": "“古典小说”鼎盛于明清时期，彼时涌现了如四大名著等众多经典之作。",
        "pinyin": "\"gǔ diǎn xiǎo shuō\" dǐng shèng yú míng qīng shí qī, bǐ shí yǒng xiàn le rú sì dà míng zhù děng zhòng duō jīng diǎn zhī zuò.",
        "vietnamese": "Thể loại 'Tiểu thuyết cổ điển' phát triển rực rỡ nhất vào thời Minh - Thanh, thời bấy giờ đã xuất hiện hàng loạt danh tác kinh điển như Tứ đại kỳ thư."
      },
      {
        "chinese": "提起朝阳，人们往往会想到北京的朝阳区。然而我们今日前往参观的此“朝阳”非彼“朝阳”，乃是被誉为“三燕古都”的辽宁省朝阳市。",
        "pinyin": "Tí qǐ cháo yáng, rén men wǎng wǎng huì xiǎng dào běi jīng de cháo yáng qū. rán ér wǒ men jīn rì qián wǎng cān guān de cǐ \"cháo yáng\" fēi bǐ \"cháo yáng\" , nǎi shì bèi yù wèi \"sān yàn gǔ dōu\" de liáo níng shěng cháo yáng shì.",
        "vietnamese": "Nhắc tới Triều Dương, người ta thường liên tưởng ngay đến quận Triều Dương ở Bắc Kinh. Thế nhưng địa danh 'Triều Dương' hôm nay chúng ta ghé thăm không phải là 'Triều Dương' kia, mà chính là thành phố Triều Dương thuộc tỉnh Liêu Ninh - nơi từng được xưng tụng là Cố đô Tam Yến."
      },
      {
        "chinese": "在商务谈判中，应尽量做到知己知彼，这样才能争取到最大的利益。",
        "pinyin": "Zài shāng wù tán pàn zhōng, yīng jǐn liàng zuò dào zhī jǐ zhī bǐ, zhè yàng cái néng zhēng qǔ dào zuì dà de lì yì.",
        "vietnamese": "Trong đàm phán thương mại, nên cố gắng hết sức làm sao để 'biết người biết ta', có như vậy mới tranh thủ được nguồn lợi ích to lớn nhất."
      },
      {
        "chinese": "你们觉得这么着好就这么办，不必再来问我的意见了。",
        "pinyin": "Nǐ men jué dé zhè me zhe hǎo jiù zhè me bàn, bù bì zài lái wèn wǒ de yì jiàn le.",
        "vietnamese": "Các bạn thấy làm thế này ổn thì cứ triển khai như thế đi, không cần phải hỏi lại ý kiến của tôi nữa đâu."
      },
      {
        "chinese": "那地方你人生地不熟的，这么着吧，我陪你一起去看看。",
        "pinyin": "Nà dì fāng nǐ rén shēng dì bù shú de, zhè me zhe ba, wǒ péi nǐ yī qǐ qù kàn kàn.",
        "vietnamese": "Nơi đó bạn đất khách quê người lạ nước lạ cái, hay là thế này đi, tôi cùng đi với bạn tới xem thử."
      },
      {
        "chinese": "兹证明李莉女士系本单位正式员工，已连续在本单位工作十年。",
        "pinyin": "Zī zhèng míng lǐ lì nǚ shì xì běn dān wèi zhèng shì yuán gōng, yǐ lián xù zài běn dān wèi gōng zuò shí nián.",
        "vietnamese": "Nay xin chứng nhận bà Lý Lợi là nhân viên chính thức của đơn vị chúng tôi, đã công tác liên tục tại cơ quan tròn mười năm."
      },
      {
        "chinese": "受有关机构委托，兹有以下标的拟予以转让，现公告如下，欢迎合格投标人参加该项目投标。",
        "pinyin": "Shòu yǒu guān jī gòu wěi tuō, zī yǒu yǐ xià biāo de nǐ yǔ yǐ zhuǎn ràng, xiàn gōng gào rú xià, huān yíng hé gé tóu biāo rén cān jiā gāi xiàng mù tóu biāo.",
        "vietnamese": "Nhận ủy thác từ cơ quan hữu quan, nay có danh mục tài sản dưới đây dự kiến chuyển nhượng, trân trọng thông báo như sau, hoan nghênh các bên dự thầu đủ điều kiện nộp hồ sơ đấu thầu dự án."
      }
    ]
  },
  {
    "id": "hsk79-g-06",
    "order": 6,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Đại từ nghi vấn văn ngôn & khẩu ngữ: 何 (hà - cái gì/ở đâu/sao), 怎么着 (thế nào/ra sao)",
    "titleZh": "何、怎么着",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "疑问代词",
    "structure": "何 + Danh từ / Động từ  ||  怎么着 (cuối câu / làm vị ngữ)",
    "explanationVi": "'何' (hé) là đại từ nghi vấn gốc Hán cổ tương đương 什么, 为什么, 哪里 ('何时' - khi nào, '何地' - nơi đâu, '何在' - ở chỗ nào, '因何' - vì sao); '怎么着' (zěnmezhe) là đại từ nghi vấn khẩu ngữ dùng để hỏi cách xử lý hoặc phỏng đoán tình huống mơ hồ (làm sao đây / hay là ra sao).",
    "tips": "'何' thường dùng tạo câu hỏi tu từ đầy sức gợi cảm trong văn chương nghị luận.",
    "examples": [
      {
        "chinese": "历史学家的任务之一是在浩瀚的史料中挖掘出何时、何地发生了何种事件。",
        "pinyin": "Lì shǐ xué jiā de rèn wù zhī yī shì zài hào hàn de shǐ liào zhōng wā jué chū hé shí, hé dì fā shēng le hé zhǒng shì jiàn.",
        "vietnamese": "Một trong những sứ mệnh của các nhà sử học là khai quật trong biển tư liệu mênh mông để tìm ra vào lúc nào, tại nơi đâu đã phát sinh biến cố gì."
      },
      {
        "chinese": "这座滨江小城魅力何在？因何引得诸多文人骚客留下脍炙人口的名篇？",
        "pinyin": "Zhè zuò bīn jiāng xiǎo chéng mèi lì hé zài? yīn hé yǐn dé zhū duō wén rén sāo kè liú xià kuài zhì rén kǒu de míng piān?",
        "vietnamese": "Sức quyến rũ của thành phố nhỏ ven sông này nằm ở chỗ nào? Vì cớ gì lại thu hút biết bao tao nhân mặc khách lưu lại những áng thơ văn truyền tụng muôn đời?"
      },
      {
        "chinese": "他夜里翻来覆去地想着这件事，可是还是不知道该怎么着才好。",
        "pinyin": "Tā yè lǐ fān lái fù qù dì xiǎng zhe zhè jiàn shì, kě shì hái shì bù zhī dào gāi zěn me zhe cái hǎo.",
        "vietnamese": "Đêm nằm trằn trọc lật qua lật lại suy nghĩ về chuyện này, nhưng anh ấy vẫn chẳng biết rốt cuộc phải xử trí làm sao cho ổn thỏa."
      },
      {
        "chinese": "你说她半天在那儿一声不吭，是生气了还是怎么着？",
        "pinyin": "Nǐ shuō tā bàn tiān zài nàr yī shēng bù kēng, shì shēng qì le hái shì zěn me zhe?",
        "vietnamese": "Bạn xem cô ấy ngồi đực ra đó suốt cả buổi chẳng nói chẳng rằng, là đang giận dỗi hay là làm sao thế nhỉ?"
      }
    ]
  },
  {
    "id": "hsk79-g-07",
    "order": 7,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Đại từ số lượng ước đoán: 若干 (ruògān - một số, vài, đôi ba)",
    "titleZh": "若干",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "数量代词",
    "structure": "若干 + Lượng từ / Danh từ  ||  Danh từ + 若干",
    "explanationVi": "'若干' là đại từ số lượng không xác định mang màu sắc văn viết trang trọng, biểu thị một số lượng nhất định (nhiều hơn một) hoặc dùng trong câu hỏi khảo sát thống kê.",
    "tips": "Có thể đứng trước danh từ (若干优秀歌手) hoặc đứng sau danh từ trong danh mục liệt kê (随笔若干).",
    "examples": [
      {
        "chinese": "经过初赛、复赛和决赛，大赛产生了“十佳歌手”和若干“优秀歌手”。",
        "pinyin": "Jīng guò chū sài, fù sài hé jué sài, dà sài chǎn shēng le \"shí jiā gē shǒu\" hé ruò gàn \"yōu xiù gē shǒu\" .",
        "vietnamese": "Trải qua các vòng sơ khảo, bán kết và chung kết, hội thi đã chọn ra 'Mười ca sĩ xuất sắc nhất' cùng một số giải thưởng 'Ca sĩ triển vọng'."
      },
      {
        "chinese": "她一生著有长篇小说七部，另有中短篇小说、散文、诗歌、随笔若干。",
        "pinyin": "Tā yī shēng zhù yǒu zhǎng piān xiǎo shuō qī bù, lìng yǒu zhōng duǎn piān xiǎo shuō, sàn wén, shī gē, suí bǐ ruò gàn.",
        "vietnamese": "Cả cuộc đời bà đã trước tác 7 bộ tiểu thuyết dài tập, bên cạnh đó còn có một số truyện ngắn, tản văn, thi ca và tùy bút khác."
      }
    ]
  },
  {
    "id": "hsk79-g-08",
    "order": 8,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Hệ thống lượng từ danh từ chuyên biệt HSK 7-9: 重, 截, 缕, 码, 枚, 摊, 丸, 则, 幢, 宗",
    "titleZh": "重、截、缕、码、枚、摊、丸、则、幢、宗",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "名量词",
    "structure": "Số từ + Lượng từ chuyên dụng + Danh từ",
    "explanationVi": "Các lượng từ tinh tế: 1) '重' (chóng): lớp, tầng mâu thuẫn/khó khăn (多重原因, 重重困难); 2) '截' (jié): khúc, đoạn (一截木头, 凉了半截); 3) '缕' (lǚ): lọn tóc, luồng hương/khói (一缕秀发, 缕缕清香); 4) '码' (mǎ): chuyện, sự vụ (两码事, 一码归一码); 5) '枚' (méi): huân chương, đồng xu, con dấu (一枚硬币, 五枚奖章); 6) '摊' (tān): đống việc bừa bộn (一摊事); 7) '丸' (wán): viên hoàn thuốc đông y (一丸药, 每次六丸); 8) '则' (zé): mẩu tin tức, câu chuyện ngụ ngôn/điển cố (一则新闻, 20则典故); 9) '幢' (zhuàng): tòa nhà, dãy nhà (一幢教学楼, 宿舍三幢); 10) '宗' (zōng): vụ án, mối làm ăn lớn (一宗案件, 一宗生意).",
    "tips": "Thành ngữ '一码归一码' (chuyện nào ra chuyện đó) là cụm từ vàng trong giao tiếp công việc.",
    "examples": [
      {
        "chinese": "该项目的延期是由多重原因所导致的，包括预算不足、人员短缺等。",
        "pinyin": "Gāi xiàng mù de yán qī shì yóu duō zhòng yuán yīn suǒ dǎo zhì de, bāo kuò yù suàn bù zú, rén yuán duǎn quē děng.",
        "vietnamese": "Việc dự án này bị chậm tiến độ là do nhiều tầng nguyên nhân gây nên, bao gồm ngân sách eo hẹp và nhân sự thiếu hụt."
      },
      {
        "chinese": "她们团队克服重重困难和阻碍，出色地完成了艰巨的任务。",
        "pinyin": "Tā men tuán duì kè fú zhòng zhòng kùn nán hé zǔ ài, chū sè dì wán chéng le jiān jù de rèn wù.",
        "vietnamese": "Đội ngũ của các cô ấy đã vượt qua muôn trùng gian nan trắc trở, hoàn thành xuất sắc nhiệm vụ vô cùng nặng nề."
      },
      {
        "chinese": "他想找一截木头做个镇纸。",
        "pinyin": "Tā xiǎng zhǎo yī jié mù tóu zuò gè zhèn zhǐ.",
        "vietnamese": "Anh ấy muốn tìm một khúc gỗ để đẽo thành chiếc chặn giấy."
      },
      {
        "chinese": "他看到这里简陋的生活环境，心里顿时凉了半截。",
        "pinyin": "Tā kàn dào zhè lǐ jiǎn lòu de shēng huó huán jìng, xīn lǐ dùn shí liáng le bàn jié.",
        "vietnamese": "Nhìn thấy hoàn cảnh sinh hoạt tồi tàn nơi đây, lòng anh ấy bỗng chốc nguội lạnh đi mất một nửa."
      },
      {
        "chinese": "迎面走来一个身着白色T恤的女学生，白皙的额头上垂落着一缕秀发。",
        "pinyin": "Yíng miàn zǒu lái yī gè shēn zhe bái sè T xù de nǚ xué shēng, bái xī de é tóu shàng chuí luò zhe yī lǚ xiù fā.",
        "vietnamese": "Đi đón đầu là một nữ sinh mặc chiếc áo phông trắng, trên vầng trán trắng ngần buông lơi một lọn tóc mượt mà."
      },
      {
        "chinese": "忽地起了一阵微风，送来缕缕清香，将所有的烦恼瞬间驱散。",
        "pinyin": "Hū dì qǐ le yī zhèn wēi fēng, sòng lái lǚ lǚ qīng xiāng, jiāng suǒ yǒu de fán nǎo shùn jiān qū sàn.",
        "vietnamese": "Chợt một làn gió nhẹ thoảng qua, đưa tới từng luồng hương thơm thoang thoảng, xua tan biến mọi nỗi ưu phiền trong chốc lát."
      },
      {
        "chinese": "科研和科普是两码事。杰出的科学家未必能写出好的科普作品，优秀的科普作家也不一定能做好科研工作。",
        "pinyin": "Kē yán hé kē pǔ shì liǎng mǎ shì. jié chū de kē xué jiā wèi bì néng xiě chū hǎo de kē pǔ zuò pǐn, yōu xiù de kē pǔ zuò jiā yě bù yī dìng néng zuò hǎo kē yán gōng zuò.",
        "vietnamese": "Nghiên cứu khoa học và phổ biến kiến thức khoa học là hai chuyện hoàn toàn khác nhau. Nhà khoa học kiệt xuất chưa chắc đã viết nên tác phẩm phổ biến hay, và tác giả viết sách khoa học đại chúng cừ khôi cũng chưa hẳn đã làm tốt công tác nghiên cứu chuyên sâu."
      },
      {
        "chinese": "虽然你们私交很好，但工作上的事情还是应该一码归一码，公事公办。",
        "pinyin": "Suī rán nǐ men sī jiāo hěn hǎo, dàn gōng zuò shàng de shì qíng hái shì yīng gāi yī mǎ guī yī mǎ, gōng shì gōng bàn.",
        "vietnamese": "Tuy quan hệ tình cảm riêng của hai người rất khăng khít, nhưng việc công thì chuyện nào ra chuyện nấy, cứ theo phép công mà làm."
      },
      {
        "chinese": "权利与义务犹如一枚硬币的两面，相互依存，密不可分。",
        "pinyin": "Quán lì yǔ yì wù yóu rú yī méi yìng bì de liǎng miàn, xiāng hù yī cún, mì bù kě fēn.",
        "vietnamese": "Quyền lợi và nghĩa vụ tựa như hai mặt của cùng một đồng xu, nương tựa lẫn nhau và gắn bó không thể tách rời."
      },
      {
        "chinese": "他工作非常出色，十年里共获得五枚奖章。",
        "pinyin": "Tā gōng zuò fēi cháng chū sè, shí nián lǐ gòng huò dé wǔ méi jiǎng zhāng.",
        "vietnamese": "Anh ấy cống hiến công tác vô cùng xuất sắc, trong suốt mười năm đã vinh dự đoạt được 5 tấm huân chương."
      },
      {
        "chinese": "苏州有一对老夫妻，子女们平日里各为自己的一摊事忙活，只有节假日才有机会团聚。",
        "pinyin": "Sū zhōu yǒu yī duì lǎo fū qī, zi nǚ men píng rì lǐ gè wèi zì jǐ de yī tān shì máng huó, zhǐ yǒu jié jiǎ rì cái yǒu jī huì tuán jù.",
        "vietnamese": "Ở Tô Châu có một đôi vợ chồng già, con cái ngày thường ai nấy đều túi bụi với mớ việc riêng của mình, chỉ có dịp lễ tết mới có dịp quây quần đoàn tụ."
      },
      {
        "chinese": "公司的事已经让他焦头烂额，家中还另有一摊，他感到身心俱疲。",
        "pinyin": "Gōng sī de shì yǐ jīng ràng tā jiāo tóu làn é, jiā zhōng hái lìng yǒu yī tān, tā gǎn dào shēn xīn jù pí.",
        "vietnamese": "Chuyện ở cơ quan đã khiến anh ấy sứt đầu mẻ trán, trong nhà lại bề bộn thêm một đống việc khác, khiến anh cảm thấy kiệt quệ cả thể xác lẫn tinh thần."
      },
      {
        "chinese": "要制成一丸药，需用上三十多种原料并经过多道工序。",
        "pinyin": "Yào zhì chéng yī wán yào, xū yòng shàng sān shí duō zhǒng yuán liào bìng jīng guò duō dào gōng xù.",
        "vietnamese": "Muốn luyện thành một viên hoàn thuốc này, cần phải dùng tới hơn 30 loại dược liệu và trải qua nhiều công đoạn chế biến nghiêm ngặt."
      },
      {
        "chinese": "这个药每日三次，每次六丸，餐后半小时服用。",
        "pinyin": "Zhè gè yào měi rì sān cì, měi cì liù wán, cān hòu bàn xiǎo shí fú yòng.",
        "vietnamese": "Thuốc này mỗi ngày uống 3 lần, mỗi lần 6 viên hoàn, uống sau bữa ăn nửa tiếng."
      },
      {
        "chinese": "今天《人民日报》上刊登的一则新闻，令我大吃一惊。",
        "pinyin": "Jīn tiān «rén mín rì bào» shàng kān dēng de yī zé xīn wén, lìng wǒ dà chī yī jīng.",
        "vietnamese": "Mẩu tin tức đăng trên tờ 'Nhân Dân Nhật Báo' hôm nay đã khiến tôi vô cùng kinh ngạc."
      },
      {
        "chinese": "在不到两小时的演讲过程中，他至少引用了20则古代典故。",
        "pinyin": "Zài bù dào liǎng xiǎo shí de yǎn jiǎng guò chéng zhōng, tā zhì shǎo yǐn yòng le 2 0 zé gǔ dài diǎn gù.",
        "vietnamese": "Trong suốt bài diễn thuyết chưa đầy hai tiếng đồng hồ, ông ấy đã trích dẫn ít nhất 20 mẩu điển cố cổ xưa."
      },
      {
        "chinese": "历经一年，长乐村建成了一幢两层高的标准化教学楼。",
        "pinyin": "Lì jīng yī nián, zhǎng lè cūn jiàn chéng le yī chuáng liǎng céng gāo de biāo zhǔn huà jiào xué lóu.",
        "vietnamese": "Trải qua một năm ròng rã, thôn Trường Lạc đã dựng nên một tòa nhà học tập hai tầng đạt chuẩn hóa."
      },
      {
        "chinese": "医院今年新建职工宿舍三幢，医技大楼两幢。",
        "pinyin": "Yī yuàn jīn nián xīn jiàn zhí gōng sù shě sān chuáng, yī jì dà lóu liǎng chuáng.",
        "vietnamese": "Bệnh viện năm nay xây mới 3 tòa nhà ký túc xá cho cán bộ công nhân viên và 2 tòa nhà kỹ thuật y tế."
      },
      {
        "chinese": "法官必须具有超乎寻常的耐心和细心，才能办好每一宗案件。",
        "pinyin": "Fǎ guān bì xū jù yǒu chāo hū xún cháng de nài xīn hé xì xīn, cái néng bàn hǎo měi yī zōng àn jiàn.",
        "vietnamese": "Thẩm phán nhất định phải có lòng kiên nhẫn và sự cẩn trọng phi thường thì mới có thể xét xử trọn vẹn từng vụ án một."
      },
      {
        "chinese": "他匆匆赶往机场，准备飞去香港谈宗生意。",
        "pinyin": "Tā cōng cōng gǎn wǎng jī chǎng, zhǔn bèi fēi qù xiāng gǎng tán zōng shēng yì.",
        "vietnamese": "Anh ấy hối hả chạy ra sân bay, chuẩn bị bay sang Hồng Kông để bàn thảo một thương vụ làm ăn lớn."
      }
    ]
  },
  {
    "id": "hsk79-g-09",
    "order": 9,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Động lượng từ khẩu ngữ trách móc: 通 (tòng - một hồi, một chập)",
    "titleZh": "通",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "动量词",
    "structure": "Động từ (批评 / 训 / 骂) + 一通 / 好一通",
    "explanationVi": "'通' (thanh 4: tòng) làm động lượng từ diễn tả hành động kéo dài liên tục suốt một khoảng thời gian, thường dùng với các động từ mắng mỏ, phê bình hoặc thuyết giáo (好一通批评 - phê bình cho một hồi; 训了一通 - mắng cho một trận).",
    "tips": "Thường đi kèm phó từ '好一通' hoặc '狠狠...了一通' để nhấn mạnh mức độ gay gắt.",
    "examples": [
      {
        "chinese": "了解了我的饮食习惯以后，那位医生将我好一通批评，说我没有管住嘴。",
        "pinyin": "Le jiě le wǒ de yǐn shí xí guàn yǐ hòu, nà wèi yī shēng jiāng wǒ hǎo yī tōng pī píng, shuō wǒ méi yǒu guǎn zhù zuǐ.",
        "vietnamese": "Sau khi nắm rõ thói quen ăn uống của tôi, vị bác sĩ đó đã phê bình tôi một hồi ra trò, bảo tôi không biết kiêng khem giữ mồm giữ miệng."
      },
      {
        "chinese": "因为他的失误，公司利益受到了重大损失，老板把他狠狠训了一通。",
        "pinyin": "Yīn wèi tā de shī wù, gōng sī lì yì shòu dào le zhòng dà sǔn shī, lǎo bǎn bǎ tā hěn hěn xùn le yī tōng.",
        "vietnamese": "Bởi sai sót của anh ta khiến lợi ích của công ty bị tổn thất nặng nề, sếp đã mắng cho anh ta một trận tơi bời."
      }
    ]
  },
  {
    "id": "hsk79-g-10",
    "order": 10,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Lượng từ phức hợp thống kê: 人次 (réncì - lượt người)",
    "titleZh": "人次",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "复合量词",
    "structure": "Số lượng + 人次",
    "explanationVi": "'人次' là lượng từ phức hợp kết hợp giữa 'người' (nhân) và 'lượt' (thứ), dùng trong báo cáo số liệu kinh tế, du lịch, thư viện để tính tổng số lượt người tham gia (dù một người có thể tham gia nhiều lần).",
    "tips": "Rất phổ biến trong biểu đồ và đề thi viết luận phân tích dữ liệu thống kê HSK 7-9.",
    "examples": [
      {
        "chinese": "旅游大数据显示，今年一季度辽宁省共接待游客1.71亿人次，同比增长68.2%。",
        "pinyin": "Lǚ yóu dà shù jù xiǎn shì, jīn nián yī jì dù liáo níng shěng gòng jiē dài yóu kè 1. 7 1 yì rén cì, tóng bǐ zēng zhǎng 6 8. 2 %.",
        "vietnamese": "Dữ liệu du lịch lớn cho thấy, quý một năm nay tỉnh Liêu Ninh đã đón tiếp tổng cộng 171 triệu lượt khách du lịch, tăng trưởng 68,2% so với cùng kỳ năm ngoái."
      },
      {
        "chinese": "各大图书馆的古旧书刊，因近年借阅人次大幅增加，损坏非常严重。",
        "pinyin": "Gè dà tú shū guǎn de gǔ jiù shū kān, yīn jìn nián jiè yuè rén cì dà fú zēng jiā, sǔn huài fēi cháng yán zhòng.",
        "vietnamese": "Sách báo tài liệu cổ tại các thư viện lớn, do những năm gần đây lượt người tới mượn đọc tăng vọt, nên tình trạng hư hại diễn ra hết sức nghiêm trọng."
      }
    ]
  },
  {
    "id": "hsk79-g-11",
    "order": 11,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ mức độ văn ngôn & nghị luận: 大为, 分外, 何等, 极度, 极力, 略, 略微, 颇, 稍稍, 万分, 微, 尤为, 愈加, 越发",
    "titleZh": "大为、分外、何等、极度、极力、略、略微、颇、稍稍、万分、微、尤为、愈加、越发",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "程度副词",
    "structure": "Phó từ mức độ + Tính từ / Động từ tâm lý",
    "explanationVi": "Hệ thống phó từ sắc thái biểu cảm cao cấp: '大为' (hết sức, rất đỗi - 大为惊叹, 大为不满); '分外' (đặc biệt khác thường - 分外小心, 分外高大); '何等' (biết bao, dường nào - 何等幸运); '极度' (cực độ - 极度紧张); '极力' (hết sức ra sức - 极力反对); '略' / '略微' (hơi, đôi chút - 略高于, 略知一二); '颇' (khá là, rất - 颇感兴趣, 颇受青睐); '稍稍' (hơi chút, tạm chút - 稍稍歇息); '万分' (muôn phần, vô vàn - 万分感激, 激动万分); '微' (hơi, he hé - 面色微红, 微张着嘴); '尤为' (càng thêm đặc biệt - 尤为突出, 尤为引人注目); '愈加' / '越发' (càng ngày càng - 愈加成熟, 越发强烈).",
    "tips": "Là kho vũ khí từ vựng cốt lõi giúp bài văn HSK 7-9 đạt chuẩn mực hành văn học thuật xuất sắc.",
    "examples": [
      {
        "chinese": "当他们第一次品尝这道精致的菜肴时，大为惊叹，味蕾感到前所未有的满足。",
        "pinyin": "Dāng tā men dì yī cì pǐn cháng zhè dào jīng zhì de cài yáo shí, dà wèi jīng tàn, wèi lěi gǎn dào qián suǒ wèi yǒu de mǎn zú.",
        "vietnamese": "Khi lần đầu nếm thử món ăn tinh xảo này, họ đã vô cùng kinh ngạc thán phục, vị giác đón nhận sự thỏa mãn chưa từng có."
      },
      {
        "chinese": "该歌手的演唱会门票，每张均以高价售出，但其表演水平并不高，观众看后大为不满。",
        "pinyin": "Gāi gē shǒu de yǎn chàng huì mén piào, měi zhāng jūn yǐ gāo jià shòu chū, dàn qí biǎo yǎn shuǐ píng bìng bù gāo, guān zhòng kàn hòu dà wèi bù mǎn.",
        "vietnamese": "Vé xem đêm nhạc của ca sĩ đó chiếc nào cũng bán với giá cắt cổ, nhưng trình độ biểu diễn lại chẳng ra sao, khán giả xem xong đều hết sức bất mãn."
      },
      {
        "chinese": "与高手过招时须分外小心，万不可轻举妄动。",
        "pinyin": "Yǔ gāo shǒu guò zhāo shí xū fēn wài xiǎo xīn, wàn bù kě qīng jǔ wàng dòng.",
        "vietnamese": "Khi giao đấu với các bậc cao thủ cần phải đặc biệt cẩn trọng, tuyệt đối không được khinh suất manh động."
      },
      {
        "chinese": "由于周边建筑都比较低矮，这座大楼显得分外高大。",
        "pinyin": "Yóu yú zhōu biān jiàn zhù dōu bǐ jiào dī ǎi, zhè zuò dà lóu xiǎn dé fēn wài gāo dà.",
        "vietnamese": "Do các công trình xung quanh đều khá thấp bé, nên tòa cao ốc này trông nổi bật lên sừng sững khác thường."
      },
      {
        "chinese": "拥有一双发现美的眼睛，在平淡生活中捕捉到一点一滴的美好，是何等幸运！",
        "pinyin": "Yōng yǒu yī shuāng fā xiàn měi de yǎn jīng, zài píng dàn shēng huó zhōng bǔ zhuō dào yī diǎn yī dī de měi hǎo, shì hé děng xìng yùn!",
        "vietnamese": "Sở hữu một đôi mắt biết nhìn ra cái đẹp, nắm bắt từng chút điều tươi đẹp trong cuộc sống bình dị, điều đó mới may mắn biết bao!"
      },
      {
        "chinese": "在地形条件复杂的地区修筑一条长距离的铁路，不仅需攻克技术难题，而且投资巨大、耗时耗力，是何等地不容易啊！",
        "pinyin": "Zài dì xíng tiáo jiàn fù zá de dì qū xiū zhù yī tiáo zhǎng jù lí de tiě lù, bù jǐn xū gōng kè jì shù nán tí, ér qiě tóu zī jù dà, hào shí hào lì, shì hé děng dì bù róng yì a!",
        "vietnamese": "Việc thi công một tuyến đường sắt đường dài tại khu vực có địa hình hiểm trở phức tạp, chẳng những phải đột phá các nút thắt kỹ thuật mà vốn đầu tư lại khổng lồ, hao tài tốn lực, quả thực là gian nan biết nhường nào!"
      },
      {
        "chinese": "即使在极度困难的条件下，他仍执着地追求着自己的艺术理想。",
        "pinyin": "Jí shǐ zài jí dù kùn nán de tiáo jiàn xià, tā réng zhí zhe dì zhuī qiú zhe zì jǐ de yì shù lǐ xiǎng.",
        "vietnamese": "Ngay cả trong hoàn cảnh cùng cực gian truân, anh ấy vẫn kiên định theo đuổi lý tưởng nghệ thuật của riêng mình."
      },
      {
        "chinese": "他这段时间一直极度紧张和焦虑，现在终于放松下来了。",
        "pinyin": "Tā zhè duàn shí jiān yī zhí jí dù jǐn zhāng hé jiāo lǜ, xiàn zài zhōng yú fàng sōng xià lái le.",
        "vietnamese": "Khoảng thời gian này anh ấy luôn trong trạng thái cực kỳ căng thẳng và lo âu, giờ đây cuối cùng cũng đã thả lỏng được tinh thần."
      },
      {
        "chinese": "在会议上，他提出的解决方案大家都表示赞成，只有副总经理一个人极力反对。",
        "pinyin": "Zài huì yì shàng, tā tí chū de jiě jué fāng àn dà jiā dōu biǎo shì zàn chéng, zhǐ yǒu fù zǒng jīng lǐ yī gè rén jí lì fǎn duì.",
        "vietnamese": "Tại cuộc họp, phương án giải quyết do anh ấy đề xuất ai nấy đều tán thành, duy chỉ có mình phó tổng giám đốc là ra sức kịch liệt phản đối."
      },
      {
        "chinese": "他极力想忍住，但疼痛还是使他叫出声来。",
        "pinyin": "Tā jí lì xiǎng rěn zhù, dàn téng tòng hái shì shǐ tā jiào chū shēng lái.",
        "vietnamese": "Anh ấy đã gắng hết sức kìm nén, nhưng cơn đau đớn vẫn khiến anh phải bật thốt lên thành tiếng."
      },
      {
        "chinese": "今年这套试卷注重考查学生灵活运用语言知识的能力，整体难度略高于历年考题。",
        "pinyin": "Jīn nián zhè tào shì juǎn zhù zhòng kǎo chá xué shēng líng huó yùn yòng yǔ yán zhī shí de néng lì, zhěng tǐ nán dù lüè gāo yú lì nián kǎo tí.",
        "vietnamese": "Đề thi năm nay chú trọng kiểm tra năng lực vận dụng linh hoạt kiến thức ngôn ngữ của học sinh, độ khó tổng thể hơi cao hơn một chút so với đề thi các năm trước."
      },
      {
        "chinese": "主人的审美意趣如何，从其所着的衣饰和家中的陈设，便可略知一二。",
        "pinyin": "Zhǔ rén de shěn měi yì qù rú hé, cóng qí suǒ zhe de yī shì hé jiā zhōng de chén shè, biàn kě lüè zhī yī èr.",
        "vietnamese": "Gu thẩm mỹ của gia chủ thế nào, chỉ cần nhìn qua trang phục họ mặc và cách bày biện trong nhà là có thể hiểu được đôi phần."
      },
      {
        "chinese": "他脸上挂着浅浅笑意，听到问题后总会先略微思考一下，再不紧不慢地作答。",
        "pinyin": "Tā liǎn shàng guà zhe qiǎn qiǎn xiào yì, tīng dào wèn tí hòu zǒng huì xiān lüè wēi sī kǎo yī xià, zài bù jǐn bù màn dì zuò dá.",
        "vietnamese": "Trên gương mặt anh ấy nở nụ cười nhẹ, khi nghe câu hỏi luôn trầm ngâm suy nghĩ một lát rồi mới thong thả trả lời."
      },
      {
        "chinese": "志愿者的热情如融融阳光，为这略微有些寒冷的清晨带来了暖意。",
        "pinyin": "Zhì yuàn zhě de rè qíng rú róng róng yáng guāng, wèi zhè lüè wēi yǒu xiē hán lěng de qīng chén dài lái le nuǎn yì.",
        "vietnamese": "Sự nhiệt tình của các tình nguyện viên tựa như ánh nắng ấm áp chan hòa, xua tan cái se lạnh của buổi sớm mai."
      },
      {
        "chinese": "林青自幼对木雕颇感兴趣，六岁起即拜当地的匠人为师，潜心学习雕刻技艺。",
        "pinyin": "Lín qīng zì yòu duì mù diāo pǒ gǎn xīng qù, liù suì qǐ jí bài dāng dì de jiàng rén wèi shī, qián xīn xué xí diāo kè jì yì.",
        "vietnamese": "Lâm Thanh từ nhỏ đã khá hứng thú với nghệ thuật chạm khắc gỗ, từ 6 tuổi đã bái nghệ nhân địa phương làm thầy, dốc lòng dùi mài kỹ nghệ điêu khắc."
      },
      {
        "chinese": "城市民宿往往隐于闹市，因其风格独特，活动自由，如今颇受顾客青睐。",
        "pinyin": "Chéng shì mín sù wǎng wǎng yǐn yú nào shì, yīn qí fēng gé dú tè, huó dòng zì yóu, rú jīn pǒ shòu gù kè qīng lài.",
        "vietnamese": "Các homestay trong đô thị thường ẩn mình giữa phố xá sầm uất, nhờ phong cách độc đáo và sinh hoạt tự do nên ngày nay rất được khách hàng ưa chuộng săn đón."
      },
      {
        "chinese": "他顾不上长途飞行的疲惫，稍稍歇息后就马不停蹄地与客户商讨合作事宜。",
        "pinyin": "Tā gù bù shàng zhǎng tú fēi xíng de pí bèi, shāo shāo xiē xī hòu jiù mǎ bù tíng tí dì yǔ kè hù shāng tǎo hé zuò shì yí.",
        "vietnamese": "Anh ấy chẳng màng tới sự mệt mỏi sau chuyến bay dài, chỉ chợp mắt nghỉ ngơi đôi chút rồi lại hối hả bàn bạc chuyện hợp tác với khách hàng."
      },
      {
        "chinese": "她坐在那里，低头摆弄着衣角，稍稍有些拘谨。",
        "pinyin": "Tā zuò zài nà lǐ, dī tóu bǎi nòng zhe yī jiǎo, shāo shāo yǒu xiē jū jǐn.",
        "vietnamese": "Cô ấy ngồi ở đó, cúi đầu mân mê vạt áo, vẻ mặt thoáng chút e thẹn ngượng ngùng."
      },
      {
        "chinese": "按照赵医生的手术治疗方案，患者最后转危为安，家属对其万分感激。",
        "pinyin": "Àn zhào zhào yī shēng de shǒu shù zhì liáo fāng àn, huàn zhě zuì hòu zhuǎn wēi wèi ān, jiā shǔ duì qí wàn fēn gǎn jī.",
        "vietnamese": "Theo phác đồ phẫu thuật của bác sĩ Triệu, bệnh nhân cuối cùng đã qua cơn nguy kịch, người nhà vô cùng cảm kích biết ơn ông."
      },
      {
        "chinese": "学生们平时只在银幕上见过周老师，现在有幸现场得见其“庐山真面目”，个个激动万分。",
        "pinyin": "Xué shēng men píng shí zhǐ zài yín mù shàng jiàn guò zhōu lǎo shī, xiàn zài yǒu xìng xiàn chǎng dé jiàn qí \"lú shān zhēn miàn mù\" , gè gè jī dòng wàn fēn.",
        "vietnamese": "Các học sinh ngày thường chỉ thấy thầy Chu qua màn ảnh, nay may mắn được tận mắt chiêm ngưỡng diện mạo đích thực của thầy tại hội trường, ai nấy đều xúc động khôn xiết."
      },
      {
        "chinese": "谈及自己的远大理想，他有点儿激动，面色微红，声音也有点儿颤抖。",
        "pinyin": "Tán jí zì jǐ de yuǎn dà lǐ xiǎng, tā yǒu diǎn ér jī dòng, miàn sè wēi hóng, shēng yīn yě yǒu diǎn ér chàn dǒu.",
        "vietnamese": "Khi nhắc tới lý tưởng cao xa của mình, anh ấy có phần xúc động, nét mặt hơi ửng hồng, giọng nói cũng thoáng chút run run."
      },
      {
        "chinese": "听了我的话，他微张着嘴，好像想说点儿什么，但最终还是什么也没说。",
        "pinyin": "Tīng le wǒ de huà, tā wēi zhāng zhe zuǐ, hǎo xiàng xiǎng shuō diǎn ér shén me, dàn zuì zhōng hái shì shén me yě méi shuō.",
        "vietnamese": "Nghe xong lời tôi nói, anh ấy hơi hé miệng như muốn phân trần điều gì, nhưng rốt cuộc vẫn lặng thinh không nói."
      },
      {
        "chinese": "这次比赛中，9号选手的表现尤为突出，给评委和观众都留下了深刻的印象。",
        "pinyin": "Zhè cì bǐ sài zhōng, 9 hào xuǎn shǒu de biǎo xiàn yóu wèi tū chū, gěi píng wěi hé guān zhòng dōu liú xià le shēn kè de yìn xiàng.",
        "vietnamese": "Trong cuộc thi lần này, màn thể hiện của thí sinh số 9 đặc biệt nổi bật xuất sắc, để lại ấn tượng sâu đậm cho cả ban giám khảo lẫn khán giả."
      },
      {
        "chinese": "在三星堆考古新成果中，尤为引人注目的是一座通高近70厘米的大口尊。",
        "pinyin": "Zài sān xīng duī kǎo gǔ xīn chéng guǒ zhōng, yóu wèi yǐn rén zhù mù de shì yī zuò tōng gāo jìn 7 0 lí mǐ de dà kǒu zūn.",
        "vietnamese": "Trong các thành tựu khảo cổ mới tại di chỉ Tam Tinh Đôi, nổi bật thu hút sự chú ý nhất là một chiếc bình tôn miệng rộng cao gần 70 cm."
      },
      {
        "chinese": "近年来，两国战略沟通合作日益密切，兄弟情谊愈加深厚。",
        "pinyin": "Jìn nián lái, liǎng guó zhàn lüè gōu tōng hé zuò rì yì mì qiè, xiōng dì qíng yì yù jiā shēn hòu.",
        "vietnamese": "Những năm gần đây, quan hệ trao đổi hợp tác chiến lược giữa hai nước ngày càng mật thiết, tình hữu nghị anh em càng thêm sâu sắc bền chặt."
      },
      {
        "chinese": "随着阅读的增多，书慧愈加不满足于安居于室，渴望去见识外面的世界。",
        "pinyin": "Suí zhe yuè dú de zēng duō, shū huì yù jiā bù mǎn zú yú ān jū yú shì, kě wàng qù jiàn shí wài miàn de shì jiè.",
        "vietnamese": "Cùng với vốn đọc sách ngày một phong phú, Thư Tuệ càng thêm không cam chịu cảnh an phận thủ thường ru rú trong nhà, mà khao khát được bước ra khám phá thế giới bên ngoài."
      },
      {
        "chinese": "经过数百次的舞台历练，他的演技越发纯熟。",
        "pinyin": "Jīng guò shù bǎi cì de wǔ tái lì liàn, tā de yǎn jì yuè fā chún shú.",
        "vietnamese": "Trải qua hàng trăm lần trui rèn trên sân khấu, diễn xuất của anh ấy ngày càng điêu luyện chín muồi."
      },
      {
        "chinese": "缠绵的雨丝，飘洒在青石小巷，越发让人觉得诗意。",
        "pinyin": "Chán mián de yǔ sī, piāo sǎ zài qīng shí xiǎo xiàng, yuè fā ràng rén jué dé shī yì.",
        "vietnamese": "Những sợi mưa giăng giăng vương vấn buông rơi xuống con ngõ nhỏ lát đá xanh, càng khiến lòng người ngập tràn chất thơ."
      }
    ]
  },
  {
    "id": "hsk79-g-12",
    "order": 12,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ phạm vi bao quát & loại trừ: 大体, 概, 皆, 尽, 均, 通通, 统统, 唯, 唯独, 唯有, 无非, 一概",
    "titleZh": "大体、概、皆、尽、均、通通、统统、唯、唯独、唯有、无非、一概",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "范围副词",
    "structure": "Chủ ngữ + Phó từ phạm vi + Vị ngữ",
    "explanationVi": "Các phó từ phạm vi văn ngôn và pháp lý: '大体' (đại thể, nhìn chung); '概' / '一概' (tất cả, hoàn toàn không phân biệt - 一概不知, 一概作废); '皆' / '均' (đều là, đều - 皆大欢喜, 均有所提高); '尽' (toàn bộ, hết thảy - 尽显, 尽是); '通通' / '统统' (tuốt tuồn tuột, toàn bộ - khẩu ngữ và văn viết); '唯' / '唯独' / '唯有' (chỉ có duy nhất, riêng chỉ có - 唯独他没来, 唯有一试); '无非' (chẳng qua chỉ là - 无非是为了).",
    "tips": "'皆', '均' thay cho '都' trong văn chính luận tạo giọng điệu trang trọng, đĩnh đạc.",
    "examples": [
      {
        "chinese": "他的身体已经大体恢复了，我觉得可以进行一些基础性训练了。",
        "pinyin": "Tā de shēn tǐ yǐ jīng dà tǐ huī fù le, wǒ jué dé kě yǐ jìn xíng yī xiē jī chǔ xìng xùn liàn le.",
        "vietnamese": "Sức khỏe của anh ấy đại thể đã bình phục rồi, tôi thấy có thể bắt đầu tập một số bài rèn luyện cơ bản."
      },
      {
        "chinese": "同类企业中，设备或许大体相似，但是生产效能可能相差悬殊。",
        "pinyin": "Tóng lèi qǐ yè zhōng, shè bèi huò xǔ dà tǐ xiāng shì, dàn shì shēng chǎn xiào néng kě néng xiāng chà xuán shū.",
        "vietnamese": "Giữa các doanh nghiệp cùng ngành, trang thiết bị máy móc có thể đại khái tương tự nhau, nhưng hiệu suất sản xuất có thể chênh lệch một trời một vực."
      },
      {
        "chinese": "游客因擅自参加高危活动所造成的人身和财产损失，本旅行社概不负责。",
        "pinyin": "Yóu kè yīn shàn zì cān jiā gāo wēi huó dòng suǒ zào chéng de rén shēn hé cái chǎn sǔn shī, běn lǚ xíng shè gài bù fù zé.",
        "vietnamese": "Những thiệt hại về người và của do du khách tự ý tham gia các hoạt động mạo hiểm nguy hiểm gây ra, công ty du lịch chúng tôi hoàn toàn không chịu trách nhiệm."
      },
      {
        "chinese": "凡成大事者，必定有坚韧不拔的意志。古今中外，概莫能外。",
        "pinyin": "Fán chéng dà shì zhě, bì dìng yǒu jiān rèn bù bá de yì zhì. gǔ jīn zhōng wài, gài mò néng wài.",
        "vietnamese": "Phàm những bậc làm nên việc lớn nhất định phải có ý chí kiên định sắt đá. Từ xưa chí kim, từ đông sang tây, không một ai là ngoại lệ cả."
      },
      {
        "chinese": "这部剧除男女主角之外，其他演员皆一人分饰数角，但每个人物特点鲜明，并不会让观众混淆。",
        "pinyin": "Zhè bù jù chú nán nǚ zhǔ jiǎo zhī wài, qí tā yǎn yuán jiē yī rén fēn shì shù jiǎo, dàn měi gè rén wù tè diǎn xiān míng, bìng bù huì ràng guān zhòng hùn xiáo.",
        "vietnamese": "Vở kịch này ngoại trừ cặp đôi nam nữ chính ra, các diễn viên khác đều một người đóng nhiều vai, nhưng mỗi nhân vật đều mang cá tính rõ rệt, không hề khiến khán giả bị nhầm lẫn."
      },
      {
        "chinese": "中国瓷器之所以享誉世界，皆因其实用与审美并存。",
        "pinyin": "Zhōng guó cí qì zhī suǒ yǐ xiǎng yù shì jiè, jiē yīn qí shí yòng yǔ shěn měi bìng cún.",
        "vietnamese": "Gốm sứ Trung Hoa sở dĩ nức tiếng khắp thế giới, thảy đều nhờ vào sự song hành hài hòa giữa công năng thực dụng và vẻ đẹp thẩm mỹ."
      },
      {
        "chinese": "荆门为荆楚文化发祥地之一，文化底蕴深厚，历史古迹遍地皆是。",
        "pinyin": "Jīng mén wèi jīng chǔ wén huà fā xiáng dì zhī yī, wén huà dǐ yùn shēn hòu, lì shǐ gǔ jì biàn dì jiē shì.",
        "vietnamese": "Kinh Môn là một trong những cái nôi phát tích của văn hóa Kinh Sở, bề dày văn hóa sâu rộng, di tích lịch sử đâu đâu cũng có."
      },
      {
        "chinese": "从广州塔顶楼俯瞰，羊城璀璨的夜景尽收眼底。",
        "pinyin": "Cóng guǎng zhōu tǎ dǐng lóu fǔ kàn, yáng chéng cuǐ càn de yè jǐng jǐn shōu yǎn dǐ.",
        "vietnamese": "Từ tầng cao nhất của tháp Quảng Châu phóng tầm mắt ngắm nhìn, cảnh đêm rực rỡ hoa lệ của thành Dương Thành thu trọn vào đáy mắt."
      },
      {
        "chinese": "村落被青山绿水环绕，尽是些古朴的瓦房和雅致的石桥，没有丝毫现代化的气息，却添了几分宁静与幽然。",
        "pinyin": "Cūn luò bèi qīng shān lǜ shuǐ huán rào, jǐn shì xiē gǔ pǔ de wǎ fáng hé yǎ zhì de shí qiáo, méi yǒu sī háo xiàn dài huà de qì xī, què tiān le jǐ fēn níng jìng yǔ yōu rán.",
        "vietnamese": "Ngôi làng được non xanh nước biếc ôm ấp bao bọc, toàn là những mái nhà ngói cổ kính và cây cầu đá thanh tao, không chút hơi thở hiện đại, nhưng lại tăng thêm vài phần tĩnh lặng thanh nhã."
      },
      {
        "chinese": "在有关部门的大力监管下，存在环境安全隐患的酒店、餐厅等均已完成整改。",
        "pinyin": "Zài yǒu guān bù mén de dà lì jiān guǎn xià, cún zài huán jìng ān quán yǐn huàn de jiǔ diàn, cān tīng děng jūn yǐ wán chéng zhěng gǎi.",
        "vietnamese": "Dưới sự kiểm tra giám sát gắt gao của các cơ quan chức năng, những khách sạn, nhà hàng tiềm ẩn nguy cơ mất an toàn môi trường đều đã hoàn thành việc chấn chỉnh sửa đổi."
      },
      {
        "chinese": "市场上某些特殊商品不宜标价的，均须经当地价格主管部门核准。",
        "pinyin": "Shì chǎng shàng mǒu xiē tè shū shāng pǐn bù yí biāo jià de, jūn xū jīng dāng dì jià gé zhǔ guǎn bù mén hé zhǔn.",
        "vietnamese": "Một số mặt hàng đặc thù trên thị trường không tiện niêm yết giá công khai thì thảy đều phải qua cơ quan quản lý giá cả địa phương thẩm định phê duyệt."
      },
      {
        "chinese": "那一大堆坏了的电器，他只用了一个晚上的时间，就通通修理好了。",
        "pinyin": "Nà yī dà duī huài le de diàn qì, tā zhǐ yòng le yī gè wǎn shàng de shí jiān, jiù tōng tōng xiū lǐ hǎo le.",
        "vietnamese": "Cả một đống đồ điện hỏng hóc kia, anh ấy chỉ dùng vỏn vẹn một buổi tối là đã sửa xong tuốt tuồn tuột."
      },
      {
        "chinese": "这些事情你通通不要管，你只负责技术革新。",
        "pinyin": "Zhè xiē shì qíng nǐ tōng tōng bù yào guǎn, nǐ zhǐ fù zé jì shù gé xīn.",
        "vietnamese": "Mấy chuyện linh tinh này cậu tuốt tuồn tuột đừng bận tâm, cậu chỉ cần tập trung phụ trách đổi mới kỹ thuật thôi."
      },
      {
        "chinese": "她对年轻后辈毫无保留，将自己多年来的经验教训统统分享给了大家。",
        "pinyin": "Tā duì nián qīng hòu bèi háo wú bǎo liú, jiāng zì jǐ duō nián lái de jīng yàn jiào xùn tǒng tǒng fēn xiǎng gěi le dà jiā.",
        "vietnamese": "Cô ấy đối với thế hệ đàn em đi sau không hề giấu giếm chút ngón nghề nào, đem toàn bộ những kinh nghiệm xương máu đúc kết bao năm sẻ chia hết cho mọi người."
      },
      {
        "chinese": "他现在是一切为了孩子，什么升职发财换大房子，他统统不去想了。",
        "pinyin": "Tā xiàn zài shì yī qiè wèi le hái zi, shén me shēng zhí fā cái huàn dà fáng zi, tā tǒng tǒng bù qù xiǎng le.",
        "vietnamese": "Bây giờ anh ấy một lòng một dạ chỉ vì con cái, ba cái chuyện thăng quan phát tài đổi nhà to anh ấy gạt sạch ra khỏi đầu không thèm nghĩ tới."
      },
      {
        "chinese": "现在很多孩子都有“唯我为大”的思维方式，这跟父母的过分溺爱有密切的关系。",
        "pinyin": "Xiàn zài hěn duō hái zi dōu yǒu \"wéi wǒ wèi dà\" de sī wéi fāng shì, zhè gēn fù mǔ de guò fēn nì ài yǒu mì qiè de guān xì.",
        "vietnamese": "Ngày nay rất nhiều đứa trẻ mang tư duy 'ta là rốn của vũ trụ', điều này có mối liên hệ mật thiết với sự nuông chiều quá mức của cha mẹ."
      },
      {
        "chinese": "修身之道不唯阅读，品茶、闲谈、对弈、抚琴、练武、游历山水均可养性。",
        "pinyin": "Xiū shēn zhī dào bù wéi yuè dú, pǐn chá, xián tán, duì yì, fǔ qín, liàn wǔ, yóu lì shān shuǐ jūn kě yǎng xìng.",
        "vietnamese": "Đạo tu thân không chỉ có mỗi đọc sách, việc thưởng trà, đàm đạo, chơi cờ, gảy đàn, luyện võ, du ngoạn non nước thảy đều có thể dưỡng tâm bồi tính."
      },
      {
        "chinese": "那么多同他一起备考的考生都放弃了，唯独他一个人坚持了下来。",
        "pinyin": "Nà me duō tóng tā yī qǐ bèi kǎo de kǎo shēng dōu fàng qì le, wéi dú tā yī gè rén jiān chí le xià lái.",
        "vietnamese": "Bao nhiêu thí sinh cùng ôn thi với anh ấy đều đã bỏ cuộc giữa chừng, duy chỉ có mình anh là kiên trì trụ lại tới cùng."
      },
      {
        "chinese": "人的眼睛，能洞察他人，观测周遭的事物，唯独无法窥见自己的真容。",
        "pinyin": "Rén de yǎn jīng, néng dòng chá tā rén, guān cè zhōu zāo de shì wù, wéi dú wú fǎ kuī jiàn zì jǐ de zhēn róng.",
        "vietnamese": "Đôi mắt con người có thể nhìn thấu thiên hạ, quan sát vạn vật xung quanh, duy chỉ có chân dung đích thực của chính mình là không thể tự soi thấy."
      },
      {
        "chinese": "我们村上了岁数的老人几乎都不会用智能手机，唯有老村长是个例外。",
        "pinyin": "Wǒ men cūn shàng le suì shù de lǎo rén jǐ hū dōu bù huì yòng zhì néng shǒu jī, wéi yǒu lǎo cūn zhǎng shì gè lì wài.",
        "vietnamese": "Các cụ cao niên trong làng chúng tôi hầu như chẳng ai biết xài điện thoại thông minh, duy chỉ có cụ trưởng thôn là một ngoại lệ hiếm hoi."
      },
      {
        "chinese": "在全球化的激烈竞争中，唯有持续创新才能立于不败之地。",
        "pinyin": "Zài quán qiú huà de jī liè jìng zhēng zhōng, wéi yǒu chí xù chuàng xīn cái néng lì yú bù bài zhī dì.",
        "vietnamese": "Trong cuộc cạnh tranh khốc liệt của toàn cầu hóa, chỉ có con đường không ngừng đổi mới sáng tạo mới có thể đứng vững bất bại."
      },
      {
        "chinese": "综合来看，外语学习的动机无非两种：融合型动机和工具型动机。",
        "pinyin": "Zōng hé lái kàn, wài yǔ xué xí de dòng jī wú fēi liǎng zhǒng: róng hé xíng dòng jī hé gōng jù xíng dòng jī.",
        "vietnamese": "Nhìn nhận một cách tổng thể, động lực học ngoại ngữ chẳng qua cũng chỉ có hai loại: động lực hòa nhập văn hóa và động lực công cụ thực dụng."
      },
      {
        "chinese": "邻居跟我偶然碰见时会闲聊几句，说的无非是些家长里短的事情。",
        "pinyin": "Lín jū gēn wǒ ǒu rán pèng jiàn shí huì xián liáo jǐ jù, shuō de wú fēi shì xiē jiā zhǎng lǐ duǎn de shì qíng.",
        "vietnamese": "Hàng xóm khi tình cờ chạm mặt tôi cũng trò chuyện dăm ba câu, nói qua nói lại chẳng qua cũng chỉ quanh quẩn mấy chuyện vụn vặt gia đình."
      },
      {
        "chinese": "国务院明确规定，我国的“驰名商标”工作一概由国家商标局负责。",
        "pinyin": "Guó wù yuàn míng què guī dìng, wǒ guó de \"chí míng shāng biāo\" gōng zuò yī gài yóu guó jiā shāng biāo jú fù zé.",
        "vietnamese": "Quốc vụ viện quy định rõ ràng rằng, công tác quản lý 'Nhãn hiệu nổi tiếng' của nước ta hoàn toàn do Cục Nhãn hiệu Quốc gia thống nhất phụ trách."
      },
      {
        "chinese": "小夫妻俩决定婚礼一切从简，只摆几桌酒席，婚车和接亲环节一概取消。",
        "pinyin": "Xiǎo fū qī liǎ jué dìng hūn lǐ yī qiè cóng jiǎn, zhǐ bǎi jǐ zhuō jiǔ xí, hūn chē hé jiē qīn huán jié yī gài qǔ xiāo.",
        "vietnamese": "Đôi vợ chồng trẻ quyết định hôn lễ mọi thứ làm giản tiện, chỉ bày biện vài mâm cỗ ấm cúng, còn xe hoa rước dâu và các thủ tục rườm rà thì hủy bỏ toàn bộ."
      }
    ]
  },
  {
    "id": "hsk79-g-13",
    "order": 13,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ thời gian văn bản & pháp lý: 姑且, 即, 即时, 届时, 尽早, 就此, 历来, 尚, 随即, 向来, 一经, 暂且, 早日",
    "titleZh": "姑且、即、即时、届时、尽早、就此、历来、尚、随即、向来、一经、暂且、早日",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "时间副词",
    "structure": "Phó từ thời gian + Động từ",
    "explanationVi": "Chỉ nhịp điệu và tiến trình thời gian chuẩn xác: '姑且' / '暂且' (tạm thời, tạm gác lại); '即' (liền, lập tức); '即时' (ngay tức khắc, theo thời gian thực); '届时' (đến thời điểm đó - dùng hẹn ngày); '尽早' (càng sớm càng tốt); '就此' (từ đây, nhân đây mà dừng/kết thúc); '历来' / '向来' (từ xưa đến nay); '尚' (vẫn còn, chưa - 尚不明确, 尚有); '随即' (ngay sau đó); '一经' (một khi đã qua bước kiểm tra/phê duyệt... thì - 一经发现, 一经查实); '早日' (sớm - chúc sớm bình phục: 早日康复).",
    "tips": "'届时' và '一经' là hai từ chìa khóa trong thông báo hành chính và thư mời dự hội nghị.",
    "examples": [
      {
        "chinese": "出于保护当事人的考虑，我们隐去了其真实姓名，姑且以“张某”代称。",
        "pinyin": "Chū yú bǎo hù dāng shì rén de kǎo lǜ, wǒ men yǐn qù le qí zhēn shí xìng míng, gū qiě yǐ \"zhāng mǒu\" dài chēng.",
        "vietnamese": "Xuất phát từ việc bảo vệ đương sự, chúng tôi đã giấu kín danh tính thật, tạm thời gọi bằng cái tên 'Trương mỗ'."
      },
      {
        "chinese": "我给您简单分析一下吧，您姑且一听，要是不对，权当我没说。",
        "pinyin": "Wǒ gěi nín jiǎn dān fēn xī yī xià ba, nín gū qiě yī tīng, yào shì bù duì, quán dāng wǒ méi shuō.",
        "vietnamese": "Để tôi phân tích sơ qua giúp bác nhé, bác tạm lắng tai nghe thử, nếu không đúng thì coi như tôi chưa từng nói gì."
      },
      {
        "chinese": "“蜜月游”愈发流行，不少年轻人办完酒席即启程旅行。",
        "pinyin": "\"mì yuè yóu\" yù fā liú xíng, bù shǎo nián qīng rén bàn wán jiǔ xí jí qǐ chéng lǚ xíng.",
        "vietnamese": "Trào lưu 'Du lịch trăng mật' ngày càng thịnh hành, không ít bạn trẻ tiệc cưới vừa tàn là lập tức xách ba lô lên đường du ngoạn."
      },
      {
        "chinese": "在4G峰值速度下，下载一部1GB大小的高清电影需要1分钟左右，而在5G条件下只需几秒即可。",
        "pinyin": "Zài 4 G fēng zhí sù dù xià, xià zài yī bù 1 G B dà xiǎo de gāo qīng diàn yǐng xū yào 1 fēn zhōng zuǒ yòu, ér zài 5 G tiáo jiàn xià zhǐ xū jǐ miǎo jí kě.",
        "vietnamese": "Ở tốc độ đỉnh của mạng 4G, tải một bộ phim độ nét cao dung lượng 1GB mất khoảng 1 phút, thế nhưng sang mạng 5G chỉ cần vài giây là xong ngay."
      },
      {
        "chinese": "气象局在暴雨来临前，通过网络、电视、广播等多种媒介，即时发布有关暴雨的预警信号。",
        "pinyin": "Qì xiàng jú zài bào yǔ lái lín qián, tōng guò wǎng luò, diàn shì, guǎng bō děng duō zhǒng méi jiè, jí shí fā bù yǒu guān bào yǔ de yù jǐng xìn hào.",
        "vietnamese": "Cục khí tượng trước khi mưa bão ập tới đã thông qua mạng internet, truyền hình, phát thanh để lập tức phát đi các tín hiệu cảnh báo giông bão theo thời gian thực."
      },
      {
        "chinese": "在智慧课堂中，李老师通过平板电脑向学生发布任务，根据平台精准反馈的学情即时进行教学调整。",
        "pinyin": "Zài zhì huì kè táng zhōng, lǐ lǎo shī tōng guò píng bǎn diàn nǎo xiàng xué shēng fā bù rèn wù, gēn jù píng tái jīng zhǔn fǎn kuì de xué qíng jí shí jìn xíng jiào xué diào zhěng.",
        "vietnamese": "Trong lớp học thông minh, thầy Lý giao bài tập cho học sinh qua máy tính bảng, căn cứ theo dữ liệu phản hồi chuẩn xác trên hệ thống để kịp thời điều chỉnh việc giảng dạy ngay tức khắc."
      },
      {
        "chinese": "本协议在履行过程中，如若发生未曾约定的情况，届时由双方共同友好商定。",
        "pinyin": "Běn xié yì zài lǚ xíng guò chéng zhōng, rú ruò fā shēng wèi céng yuē dìng de qíng kuàng, jiè shí yóu shuāng fāng gòng tóng yǒu hǎo shāng dìng.",
        "vietnamese": "Trong quá trình thực hiện bản thỏa thuận này, nếu phát sinh tình huống chưa được quy định trước, đến lúc đó đôi bên sẽ cùng hữu nghị bàn thảo định đoạt."
      },
      {
        "chinese": "大会将于9月10日至18日在北京举行，届时将会有近800名国外代表与会。",
        "pinyin": "Dà huì jiāng yú 9 yuè 1 0 rì zhì 1 8 rì zài běi jīng jǔ xíng, jiè shí jiāng huì yǒu jìn 8 0 0 míng guó wài dài biǎo yǔ huì.",
        "vietnamese": "Đại hội sẽ được tổ chức từ ngày 10 đến 18 tháng 9 tại Bắc Kinh, đến thời điểm đó sẽ có gần 800 đại biểu nước ngoài tới tham dự."
      },
      {
        "chinese": "家长应尽早让孩子参与家务劳动，培养他们的责任感和自理能力。",
        "pinyin": "Jiā zhǎng yīng jǐn zǎo ràng hái zi cān yǔ jiā wù láo dòng, péi yǎng tā men de zé rèn gǎn hé zì lǐ néng lì.",
        "vietnamese": "Các bậc phụ huynh nên sớm để con cái tham gia vào công việc nhà, bồi dưỡng cho trẻ tinh thần trách nhiệm và năng lực tự lập."
      },
      {
        "chinese": "外出旅行应提前确定行程并尽早预约购票，以防票量不足或票价上涨。",
        "pinyin": "Wài chū lǚ xíng yīng tí qián què dìng xíng chéng bìng jǐn zǎo yù yuē gòu piào, yǐ fáng piào liàng bù zú huò piào jià shàng zhǎng.",
        "vietnamese": "Đi du lịch xa nên chốt lịch trình từ trước và đặt mua vé càng sớm càng tốt để phòng trường hợp cháy vé hoặc giá vé tăng cao."
      },
      {
        "chinese": "相聚的时光总是短暂的，丰盛的晚餐过后大家就此告别。",
        "pinyin": "Xiāng jù de shí guāng zǒng shì duǎn zàn de, fēng shèng de wǎn cān guò hòu dà jiā jiù cǐ gào bié.",
        "vietnamese": "Khoảnh khắc hội ngộ sum vầy lúc nào cũng ngắn ngủi, sau bữa tối thịnh soạn mọi người nhân đây nói lời chia tay tạm biệt."
      },
      {
        "chinese": "虽然油气勘探工作屡遭失败，但是地质学家们并未就此止步，反倒越挫越勇。",
        "pinyin": "Suī rán yóu qì kān tàn gōng zuò lǚ zāo shī bài, dàn shì dì zhì xué jiā men bìng wèi jiù cǐ zhǐ bù, fǎn dào yuè cuò yuè yǒng.",
        "vietnamese": "Tuy công tác thăm dò dầu khí liên tục thất bại, nhưng các nhà địa chất học không hề dừng bước tại đây, trái lại càng vấp ngã càng thêm kiên cường."
      },
      {
        "chinese": "“绿肥红瘦”四字是李清照《如梦令》一词的点睛之笔，历来为世人所称道。",
        "pinyin": "\"lǜ féi hóng shòu\" sì zì shì lǐ qīng zhào «rú mèng lìng» yī cí de diǎn jīng zhī bǐ, lì lái wèi shì rén suǒ chēng dào.",
        "vietnamese": "Bốn chữ 'lục phì hồng sấu' (lá xanh đẫy đà hoa hồng tàn tạ) là nét chấm phá đắt giá trong bài từ 'Như Mộng Lệnh' của Lý Thanh Chiếu, xưa nay luôn được người đời hết lời ca tụng."
      },
      {
        "chinese": "苏州历来是经济富饶的鱼米之乡，与杭州齐名，并称“苏杭”。",
        "pinyin": "Sū zhōu lì lái shì jīng jì fù ráo de yú mǐ zhī xiāng, yǔ háng zhōu qí míng, bìng chēng \"sū háng\" .",
        "vietnamese": "Tô Châu từ xưa đến nay vốn là vùng đất trù phú màu mỡ ngập tràn cá tôm lúa gạo, sánh ngang với Hàng Châu và được gọi chung là 'Tô - Hàng'."
      },
      {
        "chinese": "当时我年纪尚幼，许多事情已然模糊不清，但故乡染满绿的庭院，是记忆深处永远的乡愁。",
        "pinyin": "Dāng shí wǒ nián jì shàng yòu, xǔ duō shì qíng yǐ rán mó hú bù qīng, dàn gù xiāng rǎn mǎn lǜ de tíng yuàn, shì jì yì shēn chù yǒng yuǎn de xiāng chóu.",
        "vietnamese": "Hồi đó tôi tuổi còn thơ dại, nhiều chuyện xưa nay đã phai nhòa mông lung, nhưng khu vườn ngập tràn sắc xanh nơi quê nhà mãi là nỗi nhớ cố hương da diết sâu thẳm trong ký ức."
      },
      {
        "chinese": "截至目前，搜救工作尚未发现幸存人员，事故原因尚待调查。",
        "pinyin": "Jié zhì mù qián, sōu jiù gōng zuò shàng wèi fā xiàn xìng cún rén yuán, shì gù yuán yīn shàng dài diào chá.",
        "vietnamese": "Tính đến thời điểm hiện tại, công tác tìm kiếm cứu nạn vẫn chưa phát hiện người sống sót, nguyên nhân tai nạn vẫn còn đang chờ điều tra làm rõ."
      },
      {
        "chinese": "她犹豫了一下，随即拿起了电话，把这件事报告给总经理。",
        "pinyin": "Tā yóu yù le yī xià, suí jí ná qǐ le diàn huà, bǎ zhè jiàn shì bào gào gěi zǒng jīng lǐ.",
        "vietnamese": "Cô ấy ngập ngừng đôi chút, ngay sau đó nhấc điện thoại lên báo cáo sự việc cho tổng giám đốc."
      },
      {
        "chinese": "我听闻临近扬州的泰州，早茶亦颇有特色，随即驱车从扬州前往泰州。",
        "pinyin": "Wǒ tīng wén lín jìn yáng zhōu de tài zhōu, zǎo chá yì pǒ yǒu tè sè, suí jí qū chē cóng yáng zhōu qián wǎng tài zhōu.",
        "vietnamese": "Tôi nghe nói thành phố Thái Châu nằm sát nách Dương Châu cũng có món trà sớm rất độc đáo, liền ngay lập tức lái xe từ Dương Châu sang Thái Châu thưởng thức."
      },
      {
        "chinese": "孙老板向来一言九鼎，因此在商界信誉很高。",
        "pinyin": "Sūn lǎo bǎn xiàng lái yī yán jiǔ dǐng, yīn cǐ zài shāng jiè xìn yù hěn gāo.",
        "vietnamese": "Ông chủ Tôn từ xưa đến nay nói một là một nói hai là hai, lời nói nặng tựa cửu đỉnh, vì thế trên thương trường uy tín vô cùng cao trọng."
      },
      {
        "chinese": "他深居简出，向来不喜与外界交往。",
        "pinyin": "Tā shēn jū jiǎn chū, xiàng lái bù xǐ yǔ wài jiè jiāo wǎng.",
        "vietnamese": "Ông ấy sống ẩn dật khép kín, từ trước tới giờ vốn không thích giao thiệp với thế giới bên ngoài."
      },
      {
        "chinese": "绿色农场种植出的果蔬天然无公害，一经上市便供不应求。",
        "pinyin": "Lǜ sè nóng chǎng zhǒng zhí chū de guǒ shū tiān rán wú gōng hài, yī jīng shàng shì biàn gōng bù yīng qiú.",
        "vietnamese": "Rau củ quả do nông trường xanh canh tác hoàn toàn tự nhiên không độc hại, vừa mới tung ra thị trường một cái là đã cháy hàng cung không đủ cầu."
      },
      {
        "chinese": "《红楼梦》这部经典名著又要翻拍的消息一经发布，即引起社会热议。",
        "pinyin": "«hóng lóu mèng» zhè bù jīng diǎn míng zhù yòu yào fān pāi de xiāo xī yī jīng fā bù, jí yǐn qǐ shè huì rè yì.",
        "vietnamese": "Tin tức bộ danh tác kinh điển 'Hồng Lâu Mộng' sắp sửa được bấm máy làm lại vừa mới phát đi một cái là lập tức làm xôn xao dư luận xã hội."
      },
      {
        "chinese": "鉴于此问题情况复杂、涉及面广，本文限于篇幅，暂且不做讨论。",
        "pinyin": "Jiàn yú cǐ wèn tí qíng kuàng fù zá, shè jí miàn guǎng, běn wén xiàn yú piān fú, zàn qiě bù zuò tǎo lùn.",
        "vietnamese": "Xét thấy vấn đề này tình hình phức tạp lại dính líu đến diện rộng, bài viết này do khuôn khổ dung lượng có hạn nên tạm thời không đi sâu bàn luận."
      },
      {
        "chinese": "任务推进遇到瓶颈时，不妨暂且搁置细节问题，集中精力解决主要问题。",
        "pinyin": "Rèn wù tuī jìn yù dào píng jǐng shí, bù fáng zàn qiě gē zhì xì jié wèn tí, jí zhōng jīng lì jiě jué zhǔ yào wèn tí.",
        "vietnamese": "Khi tiến độ công việc gặp phải nút thắt cổ chai, chi bằng hãy tạm gác các chi tiết vụn vặt sang một bên để dồn toàn lực tháo gỡ vấn đề mấu chốt nhất."
      },
      {
        "chinese": "我们期待她的新作早日问世，并且预祝她在文学创作上取得更大的成功。",
        "pinyin": "Wǒ men qī dài tā de xīn zuò zǎo rì wèn shì, bìng qiě yù zhù tā zài wén xué chuàng zuò shàng qǔ dé gèng dà de chéng gōng.",
        "vietnamese": "Chúng tôi vô cùng mong đợi tác phẩm mới của cô ấy sớm ngày ra mắt công chúng, đồng thời chúc cô gặt hái được những thành tựu rực rỡ hơn nữa trên văn đàn."
      },
      {
        "chinese": "孩子们自发来到病房里看望老师，感谢老师的辛勤付出并祝愿老师早日康复。",
        "pinyin": "Hái zi men zì fā lái dào bìng fáng lǐ kàn wàng lǎo shī, gǎn xiè lǎo shī de xīn qín fù chū bìng zhù yuàn lǎo shī zǎo rì kāng fù.",
        "vietnamese": "Lũ trẻ đã tự rủ nhau đến tận phòng bệnh thăm cô giáo, bày tỏ lòng biết ơn trước sự tận tụy của cô và chúc cô sớm ngày bình phục khỏe mạnh."
      }
    ]
  },
  {
    "id": "hsk79-g-14",
    "order": 14,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ tần suất & tiếp diễn cao cấp: 连连, 屡次, 屡屡, 频, 时而, 时时, 相继, 一个劲（儿）, 一连, 再度",
    "titleZh": "连连、屡次、屡屡、频、时而、时时、相继、一个劲（儿）、一连、再度",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "频率副词",
    "structure": "Phó từ tần suất + Động từ",
    "explanationVi": "Mô tả tần suất và nhịp độ lặp lại: '连连' (liên hồi, không ngớt - 连连称赞, 连连点头); '屡次' / '屡屡' (năm lần bảy lượt, liên tiếp diễn ra); '频' (thường xuyên, dồn dập - 频发, 频出); '时而' (lúc thì - 時而...時而...); '时时' (luôn luôn, từng giờ từng phút); '相继' (lần lượt tiếp bước nhau - 相继出台, 相继考入); '一个劲（儿）' (khẩu ngữ: cứ cắm đầu miệt mài làm suốt); '一连' (liền tù tì mấy ngày/lần); '再度' (lại một lần nữa - 再度夺冠).",
    "tips": "Phân biệt '屡次' (nhấn mạnh số lần lặp lại nhiều) và '相继' (nhấn mạnh tính kế tiếp nhau của các sự kiện).",
    "examples": [
      {
        "chinese": "这家店的饭菜不但量大实惠，而且色香味俱全，每一个来吃的人都连连称赞。",
        "pinyin": "Zhè jiā diàn de fàn cài bù dàn liàng dà shí huì, ér qiě sè xiāng wèi jù quán, měi yī gè lái chī de rén dōu lián lián chēng zàn.",
        "vietnamese": "Cơm canh quán này chẳng những đĩa đầy ụ giá cả phải chăng, mà sắc hương vị đều trọn vẹn, bất cứ ai từng tới ăn cũng đều tấm tắc khen ngợi không ngớt."
      },
      {
        "chinese": "杂技艺术节上，各地顶尖的杂技演员各显身手，引得现场惊呼不断、掌声连连。",
        "pinyin": "Zá jì yì shù jié shàng, gè dì dǐng jiān de zá jì yǎn yuán gè xiǎn shēn shǒu, yǐn dé xiàn chǎng jīng hū bù duàn, zhǎng shēng lián lián.",
        "vietnamese": "Tại lễ hội nghệ thuật xiếc, các nghệ sĩ xiếc đỉnh cao khắp nơi đua nhau trổ tài xuất chúng, khiến cả hội trường ồ lên kinh ngạc không ngớt và vỗ tay rào rào liên hồi."
      },
      {
        "chinese": "嘉宾因说话屡次被主持人打断，已面露愠色。",
        "pinyin": "Jiā bīn yīn shuō huà lǚ cì bèi zhǔ chí rén dǎ duàn, yǐ miàn lù yùn sè.",
        "vietnamese": "Vị khách mời do lời nói năm lần bảy lượt bị MC cắt ngang nên trên gương mặt đã thoáng lộ rõ vẻ tức giận bực bội."
      },
      {
        "chinese": "他的电影作品受到海内外市场的欢迎，屡次获得国际影展奖项。",
        "pinyin": "Tā de diàn yǐng zuò pǐn shòu dào hǎi nèi wài shì chǎng de huān yíng, lǚ cì huò dé guó jì yǐng zhǎn jiǎng xiàng.",
        "vietnamese": "Các tác phẩm điện ảnh của ông được thị trường trong và ngoài nước đón nhận nồng nhiệt, liên tục ẵm các giải thưởng lớn tại các liên hoan phim quốc tế."
      },
      {
        "chinese": "凭借着高超的技艺和精巧的构思，民间艺术家的作品在国内外赛事中屡屡获奖。",
        "pinyin": "Píng jiè zhe gāo chāo de jì yì hé jīng qiǎo de gòu sī, mín jiān yì shù jiā de zuò pǐn zài guó nèi wài sài shì zhōng lǚ lǚ huò jiǎng.",
        "vietnamese": "Nhờ kỹ nghệ siêu phàm và ý tưởng bài trí tài hoa, tác phẩm của nghệ nhân dân gian này liên tiếp rinh về giải thưởng tại các cuộc thi trong và ngoài nước."
      },
      {
        "chinese": "这一服装品牌将非遗元素融入现代设计，屡屡在时装周上惊艳亮相。",
        "pinyin": "Zhè yī fú zhuāng pǐn pái jiāng fēi yí yuán sù róng rù xiàn dài shè jì, lǚ lǚ zài shí zhuāng zhōu shàng jīng yàn liàng xiāng.",
        "vietnamese": "Thương hiệu thời trang này đã khéo léo lồng ghép các yếu tố di sản phi vật thể vào thiết kế đương đại, liên tục tạo nên những màn xuất hiện mãn nhãn tại các tuần lễ thời trang."
      },
      {
        "chinese": "近年来，我院师生在各类学科竞赛中屡获佳绩，捷报频传。",
        "pinyin": "Jìn nián lái, wǒ yuàn shī shēng zài gè lèi xué kē jìng sài zhōng lǚ huò jiā jì, jié bào pín chuán.",
        "vietnamese": "Những năm gần đây, thầy trò học viện chúng tôi liên tục gặt hái thành tích vang dội tại các kỳ thi học thuật, tin báo thắng trận bay về dồn dập."
      },
      {
        "chinese": "这里以前是沙尘暴频发的地区，通过植树造林、补绿复绿，现已成为国家级生态文明示范区。",
        "pinyin": "Zhè lǐ yǐ qián shì shā chén bào pín fā de dì qū, tōng guò zhí shù zào lín, bǔ lǜ fù lǜ, xiàn yǐ chéng wèi guó jiā jí shēng tài wén míng shì fàn qū.",
        "vietnamese": "Nơi đây trước kia vốn là điểm nóng thường xuyên bùng phát bão cát, nhờ nỗ lực trồng cây gây rừng phủ xanh đất trống, nay đã vươn mình trở thành khu văn minh sinh thái kiểu mẫu cấp quốc gia."
      },
      {
        "chinese": "天空布满阴云，时而落下几滴雨，未带来一丝凉爽，却闷得让人喘不过气来。",
        "pinyin": "Tiān kōng bù mǎn yīn yún, shí ér luò xià jǐ dī yǔ, wèi dài lái yī sī liáng shuǎng, què mèn dé ràng rén chuǎn bù guò qì lái.",
        "vietnamese": "Bầu trời giăng kín mây xám xịt, chốc chốc lại lất phất rơi vài hạt mưa, chẳng đem lại chút mát mẻ nào mà lại oi nồng đến mức khiến người ta nghẹt thở."
      },
      {
        "chinese": "他凝神望着前方连绵的青山，时而眉头微蹙，时而喜上眉梢，不知思绪飘到了何方。",
        "pinyin": "Tā níng shén wàng zhe qián fāng lián mián de qīng shān, shí ér méi tóu wēi cù, shí ér xǐ shàng méi shāo, bù zhī sī xù piāo dào le hé fāng.",
        "vietnamese": "Anh ấy chăm chú ngắm nhìn rặng núi xanh biếc trập trùng phía trước, lúc thì khẽ chau mày đăm chiêu, lúc lại rạng rỡ niềm vui nơi khóe mắt, chẳng rõ dòng suy nghĩ đã trôi dạt tới phương trời nào."
      },
      {
        "chinese": "对这些好心人的善举，受帮助者时时感念于心，希望有朝一日能回报恩人。",
        "pinyin": "Duì zhè xiē hǎo xīn rén de shàn jǔ, shòu bāng zhù zhě shí shí gǎn niàn yú xīn, xī wàng yǒu cháo yī rì néng huí bào ēn rén.",
        "vietnamese": "Trước nghĩa cử cao đẹp của những tấm lòng vàng, người được cưu mang luôn luôn khắc cốt ghi tâm, mong sao có một ngày được đền đáp ơn sâu nghĩa nặng."
      },
      {
        "chinese": "工作中他是严师，教学一丝不苟；生活中他又像个老父亲，时时关心我们的身心健康。",
        "pinyin": "Gōng zuò zhōng tā shì yán shī, jiào xué yī sī bù gǒu; shēng huó zhōng tā yòu xiàng gè lǎo fù qīn, shí shí guān xīn wǒ men de shēn xīn jiàn kāng.",
        "vietnamese": "Trong công việc thầy là một người thầy nghiêm khắc dạy dỗ đâu ra đấy; còn ngoài đời thường thầy lại như người cha già, luôn luôn ân cần hỏi han sức khỏe thể chất lẫn tinh thần của chúng tôi."
      },
      {
        "chinese": "如果员工相继辞职，老板必须予以重视，找寻员工流失的真正原因。",
        "pinyin": "Rú guǒ yuán gōng xiāng jì cí zhí, lǎo bǎn bì xū yǔ yǐ zhòng shì, zhǎo xún yuán gōng liú shī de zhēn zhèng yuán yīn.",
        "vietnamese": "Nếu nhân viên cứ lần lượt nối gót nhau nộp đơn xin thôi việc, ông chủ nhất định phải hết sức lưu tâm, tìm cho ra cội nguồn thực sự của việc chảy máu chất xám."
      },
      {
        "chinese": "金秋九月，北京戏剧舞台异彩纷呈，相继展演了精品剧目114部。",
        "pinyin": "Jīn qiū jiǔ yuè, běi jīng xì jù wǔ tái yì cǎi fēn chéng, xiāng jì zhǎn yǎn le jīng pǐn jù mù 1 1 4 bù.",
        "vietnamese": "Mùa thu tháng Chín, sân khấu kịch Bắc Kinh rực rỡ sắc màu, đã lần lượt công diễn 114 vở kịch kinh điển xuất sắc."
      },
      {
        "chinese": "大嫂在旁边一个劲使眼色，示意哥哥不要再说下去了。",
        "pinyin": "Dà sǎo zài páng biān yī gè jìn shǐ yǎn sè, shì yì gē gē bù yào zài shuō xià qù le.",
        "vietnamese": "Chị dâu đứng bên cạnh cứ liên tục nháy mắt ra hiệu, bảo anh trai đừng có bốc đồng nói thêm lời nào nữa."
      },
      {
        "chinese": "孩子不能一个劲儿地闷头苦学，适当的休闲和锻炼都是很有必要的。",
        "pinyin": "Hái zi bù néng yī gè jìnr dì mèn tóu kǔ xué, shì dāng de xiū xián hé duàn liàn dōu shì hěn yǒu bì yào de.",
        "vietnamese": "Trẻ con không thể cứ cắm đầu cắm cổ học vùi học dập suốt ngày, việc thư giãn hợp lý và rèn luyện thể chất là hết sức cần thiết."
      },
      {
        "chinese": "为了尽快研制出特效药，他常常在实验室里一连奋战十几个小时。",
        "pinyin": "Wèi le jǐn kuài yán zhì chū tè xiào yào, tā cháng cháng zài shí yàn shì lǐ yī lián fèn zhàn shí jǐ gè xiǎo shí.",
        "vietnamese": "Để mau chóng điều chế thành công loại thuốc đặc trị, anh ấy thường xuyên ở lì trong phòng thí nghiệm quần quật chiến đấu liền mười mấy tiếng đồng hồ."
      },
      {
        "chinese": "大水靠在沙发上，一连打了好几个哈欠，困得睁不开眼。",
        "pinyin": "Dà shuǐ kào zài shā fā shàng, yī lián dǎ le hǎo jǐ gè hā qiàn, kùn dé zhēng bù kāi yǎn.",
        "vietnamese": "Đại Thủy ngả lưng vào ghế sofa, ngáp liền một hơi mấy cái dài, buồn ngủ díu cả hai mắt lại."
      },
      {
        "chinese": "时隔12年，中国队再度捧起冠军奖杯。",
        "pinyin": "Shí gé 1 2 nián, zhōng guó duì zài dù pěng qǐ guān jūn jiǎng bēi.",
        "vietnamese": "Cách biệt tròn 12 năm đằng đẵng, đội tuyển Trung Quốc lại một lần nữa giơ cao chiếc cúp vô địch danh giá."
      },
      {
        "chinese": "由于身体抱恙，她一度放弃歌唱事业。后来在家人的支持下，她再度鼓起勇气，站上舞台。",
        "pinyin": "Yóu yú shēn tǐ bào yàng, tā yī dù fàng qì gē chàng shì yè. hòu lái zài jiā rén de zhī chí xià, tā zài dù gǔ qǐ yǒng qì, zhàn shàng wǔ tái.",
        "vietnamese": "Do sức khỏe giảm sút vì bạo bệnh, cô ấy từng có lúc phải từ bỏ sự nghiệp ca hát. Về sau nhờ sự tiếp sức của gia đình, cô đã lại một lần nữa lấy hết dũng khí bước lên ánh đèn sân khấu."
      }
    ]
  },
  {
    "id": "hsk79-g-15",
    "order": 15,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ phương thức & hành động chuẩn mực HSK 7-9 (36 từ)",
    "titleZh": "按理、按说、百般、不由得、趁机、趁早、大肆、断然、公然、火速、截然、竭力、尽情、就近、刻意、拼命、强行、任意、日趋、如期、擅自、私自、特此、瞎、一并、一举、一手、毅然、有意、照常、照例、照样、执意、骤然、逐一、专程",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "方式副词",
    "structure": "Phó từ phương thức + Động từ",
    "explanationVi": "Hệ thống phó từ phương thức miêu tả hành vi cực kỳ phong phú và tinh tế: '按理' / '按说' (theo lý lẽ/thông thường mà nói); '百般' (trăm phương ngàn kế, hết mực cưng chiều/mài giũa); '不由得' (bất giác, không kìm được); '趁机' / '趁早' (nhân cơ hội / nhân lúc còn sớm); '大肆' (thẳng tay, ra sức bừa bãi); '断然' (dứt khoát, kiên quyết); '公然' (công khai, ngang nhiên); '火速' (hỏa tốc, khẩn cấp); '截然' (hoàn toàn tách biệt - 截然相反); '竭力' (dốc hết sức lực); '尽情' (thỏa thích, hết mình); '就近' (tiện thể gần đó); '刻意' (cố tình, dụng tâm); '拼命' (liều mạng, bạt mạng); '强行' (cưỡng chế, ép buộc); '任意' (tùy tiện, tùy ý); '日趋' (ngày một có xu hướng); '如期' (đúng kỳ hạn); '擅自' / '私自' (tự tiện, lén lút làm trái phép); '特此' (nay đặc biệt... - dùng trong công văn: 特此通知); '瞎' (bừa bãi, mù quáng); '一并' (nhân tiện cùng lúc - gộp chung); '一举' (một cú, một phen thắng lợi); '一手' (tự tay mình gây ra/gây dựng); '毅然' (kiên quyết, dứt khoát hy sinh); '有意' (cố ý, có ý định); '照常' / '照例' / '照样' (như thường lệ, vẫn y như cũ); '执意' (khăng khăng, cố chấp); '骤然' (đột ngột, bất thình lình); '逐一' (từng cái một, lần lượt); '专程' (cất công lặn lội vì một mục đích).",
    "tips": "Đây là nhóm từ xuất hiện với mật độ cao nhất trong các bài văn xuôi nghệ thuật và bài luận nghị luận xã hội HSK 7-9.",
    "examples": [
      {
        "chinese": "按理，一到广州我就应该即刻去拜访先生，不料因行程繁忙到最后也未能成行。",
        "pinyin": "Àn lǐ, yī dào guǎng zhōu wǒ jiù yīng gāi jí kè qù bài fǎng xiān shēng, bù liào yīn xíng chéng fán máng dào zuì hòu yě wèi néng chéng xíng.",
        "vietnamese": "Theo lẽ thường, vừa đặt chân đến Quảng Châu là tôi phải lập tức tới bái kiến thầy, chẳng ngờ do lịch trình quá bận rộn nên mãi tới tận phút chót vẫn không thể lên đường ghé thăm."
      },
      {
        "chinese": "你出现了这个失误，按理该扣一个月的工资，但看在你平时工作还算认真的份上，公司决定给你机会将功补过。",
        "pinyin": "Nǐ chū xiàn le zhè gè shī wù, àn lǐ gāi kòu yī gè yuè de gōng zī, dàn kàn zài nǐ píng shí gōng zuò hái suàn rèn zhēn de fèn shàng, gōng sī jué dìng gěi nǐ jī huì jiāng gōng bǔ guò.",
        "vietnamese": "Bạn đã để xảy ra sơ suất này, theo lẽ đáng ra phải trừ một tháng lương, nhưng nể tình ngày thường bạn làm việc khá chăm chỉ, công ty quyết định cho bạn cơ hội lập công chuộc tội."
      },
      {
        "chinese": "按说，以方平的能力完全可以在大城市里立足，可他为了方便照顾父母，毅然选择回乡工作。",
        "pinyin": "Àn shuō, yǐ fāng píng de néng lì wán quán kě yǐ zài dà chéng shì lǐ lì zú, kě tā wèi le fāng biàn zhào gù fù mǔ, yì rán xuǎn zé huí xiāng gōng zuò.",
        "vietnamese": "Theo lý mà nói, với năng lực của Phương Bình hoàn toàn có thể lập nghiệp đứng vững ở các thành phố lớn, nhưng để tiện bề chăm sóc bố mẹ, anh ấy đã kiên quyết chọn về quê làm việc."
      },
      {
        "chinese": "年轻人的私事，按说我不该多问，可是既然影响到了工作，我就不能不问一问了。",
        "pinyin": "Nián qīng rén de sī shì, àn shuō wǒ bù gāi duō wèn, kě shì jì rán yǐng xiǎng dào le gōng zuò, wǒ jiù bù néng bù wèn yī wèn le.",
        "vietnamese": "Chuyện đời tư của người trẻ, theo lý lẽ thì tôi không nên can thiệp hỏi han nhiều, nhưng một khi đã ảnh hưởng trực tiếp tới công việc chung thì tôi buộc lòng phải lên tiếng nhắc nhở."
      },
      {
        "chinese": "养护工人对园内种植的一草一木百般呵护，定时浇水、悉心修剪。",
        "pinyin": "Yǎng hù gōng rén duì yuán nèi zhǒng zhí de yī cǎo yī mù bǎi bān hē hù, dìng shí jiāo shuǐ, xī xīn xiū jiǎn.",
        "vietnamese": "Những người công nhân chăm sóc vườn tược hết mực nâng niu từng nhành cây ngọn cỏ trong khuôn viên, đúng giờ tưới nước và cẩn thận tỉa cành."
      },
      {
        "chinese": "这部作品经过了作者的反复斟酌、百般打磨，一经发表便好评如潮。",
        "pinyin": "Zhè bù zuò pǐn jīng guò le zuò zhě de fǎn fù zhēn zhuó, bǎi bān dǎ mó, yī jīng fā biǎo biàn hǎo píng rú cháo.",
        "vietnamese": "Tác phẩm này đã trải qua muôn phen đắn đo cân nhắc và gọt giũa trăm bề của tác giả, vừa mới phát hành đã lập tức đón nhận cơn mưa lời khen từ công chúng."
      },
      {
        "chinese": "看见前面登场的选手纷纷取得了较高的得分，即将表演的白兰不由得紧张了起来。",
        "pinyin": "Kàn jiàn qián miàn dēng chǎng de xuǎn shǒu fēn fēn qǔ dé le jiào gāo de dé fēn, jí jiāng biǎo yǎn de bái lán bù yóu dé jǐn zhāng le qǐ lái.",
        "vietnamese": "Thấy các thí sinh bước lên sân khấu trước đó đều liên tiếp đạt điểm số rất cao, Bạch Lan chuẩn bị biểu diễn bất giác cảm thấy vô cùng hồi hộp căng thẳng."
      },
      {
        "chinese": "看到新戏排练终于有了进展，导演不由得松了口气。",
        "pinyin": "Kàn dào xīn xì pái liàn zhōng yú yǒu le jìn zhǎn, dǎo yǎn bù yóu dé sōng le kǒu qì.",
        "vietnamese": "Nhìn thấy việc tập dượt vở kịch mới cuối cùng cũng có được bước tiến triển, vị đạo diễn bất giác thở phào nhẹ nhõm."
      },
      {
        "chinese": "对方球员心情焦躁，失误明显增多，黑龙江队趁机将比分反超。",
        "pinyin": "Duì fāng qiú yuán xīn qíng jiāo zào, shī wù míng xiǎn zēng duō, hēi lóng jiāng duì chèn jī jiāng bǐ fēn fǎn chāo.",
        "vietnamese": "Các cầu thủ đội bạn tâm lý nóng vội bồn chồn, sai lầm lộ rõ tăng lên, đội Hắc Long Giang nhân cơ hội đó đã vươn lên dẫn ngược điểm số."
      },
      {
        "chinese": "全套课程系统讲授了深度学习的常用算法，并非无良商家在人工智能风口趁机推出的“割韭菜”产品。",
        "pinyin": "Quán tào kè chéng xì tǒng jiǎng shòu le shēn dù xué xí de cháng yòng suàn fǎ, bìng fēi wú liáng shāng jiā zài rén gōng zhì néng fēng kǒu chèn jī tuī chū de \"gē jiǔ cài\" chǎn pǐn.",
        "vietnamese": "Toàn bộ khóa học giảng dạy một cách có hệ thống các thuật toán học sâu thông dụng, tuyệt nhiên không phải là loại sản phẩm trục lợi lừa đảo do những thương gia bất chính nhân làn sóng trí tuệ nhân tạo tung ra."
      },
      {
        "chinese": "8号球员好像不在状态，刚才又受了伤，趁早把他换下来，以免影响比赛结果。",
        "pinyin": "8 hào qiú yuán hǎo xiàng bù zài zhuàng tài, gāng cái yòu shòu le shāng, chèn zǎo bǎ tā huàn xià lái, yǐ miǎn yǐng xiǎng bǐ sài jié guǒ.",
        "vietnamese": "Cầu thủ số 8 dường như đang không có được phong độ tốt, vừa nãy lại dính chấn thương, chi bằng nhân lúc sớm hãy thay cậu ấy ra để tránh ảnh hưởng tới cục diện trận đấu."
      },
      {
        "chinese": "你想靠炒股票赚钱？趁早打消这个念头儿吧，你别听人忽悠，炒股的人没有几个赚钱的。",
        "pinyin": "Nǐ xiǎng kào chǎo gǔ piào zhuàn qián? chèn zǎo dǎ xiāo zhè gè niàn tóur ba, nǐ bié tīng rén hū yōu, chǎo gǔ de rén méi yǒu jǐ gè zhuàn qián de.",
        "vietnamese": "Cậu muốn kiếm tiền bằng việc chơi chứng khoán sao? Mau sớm dẹp ngay cái ý định viển vông đó đi, đừng nghe người ta vẽ hươu vẽ vượn, người đầu tư cổ phiếu chẳng mấy ai kiếm được đồng lời đâu."
      },
      {
        "chinese": "他在饭桌上大肆吹嘘自己的财富和人脉，试图建立起一个成功人士的形象。",
        "pinyin": "Tā zài fàn zhuō shàng dà sì chuī xū zì jǐ de cái fù hé rén mài, shì tú jiàn lì qǐ yī gè chéng gōng rén shì de xíng xiàng.",
        "vietnamese": "Hắn ta trên bàn ăn ra sức huênh hoang khoác lác về khối tài sản và những mối quan hệ rộng lớn của mình hòng tạo dựng hình ảnh một người đàn ông thành đạt."
      },
      {
        "chinese": "夏季是害虫大肆为害的时节，为保障群众身心健康，服务团队对重点区域进行了全方位的科学消杀。",
        "pinyin": "Xià jì shì hài chóng dà sì wèi hài de shí jié, wèi bǎo zhàng qún zhòng shēn xīn jiàn kāng, fú wù tuán duì duì zhòng diǎn qū yù jìn xíng le quán fāng wèi de kē xué xiāo shā.",
        "vietnamese": "Mùa hè là thời điểm sâu bệnh hoành hành tác oai tác quái, để bảo đảm an toàn sức khỏe cho người dân, đội ngũ phục vụ đã tiến hành phun thuốc khử khuẩn khoa học toàn diện tại các vùng trọng điểm."
      },
      {
        "chinese": "对于贵方提出的无理要求，我方断然拒绝。",
        "pinyin": "Duì yú guì fāng tí chū de wú lǐ yào qiú, wǒ fāng duàn rán jù jué.",
        "vietnamese": "Đối với những yêu sách vô lý do quý vị đưa ra, phía chúng tôi kiên quyết từ chối một cách dứt khoát."
      },
      {
        "chinese": "举办一场国际展览会，断然不可能仅凭一己之力完成，需各方精诚合作、共同努力。",
        "pinyin": "Jǔ bàn yī chǎng guó jì zhǎn lǎn huì, duàn rán bù kě néng jǐn píng yī jǐ zhī lì wán chéng, xū gè fāng jīng chéng hé zuò, gòng tóng nǔ lì.",
        "vietnamese": "Việc tổ chức một hội chợ triển lãm quốc tế dứt khoát không thể nào chỉ trông chờ vào sức lực đơn độc của một cá nhân, mà đòi hỏi các bên phải chân thành hợp tác và dốc lòng chung tay."
      },
      {
        "chinese": "被告公然违反法律规定，散布谣言，严重损害了原告的商业信誉。",
        "pinyin": "Bèi gào gōng rán wéi fǎn fǎ lǜ guī dìng, sàn bù yáo yán, yán zhòng sǔn hài le yuán gào de shāng yè xìn yù.",
        "vietnamese": "Bị cáo đã ngang nhiên vi phạm các quy định của pháp luật, tung tin đồn thất thiệt, gây tổn hại nghiêm trọng tới uy tín thương mại của nguyên đơn."
      },
      {
        "chinese": "他在训练时公然顶撞主教练，受到严肃批评是理所当然的。",
        "pinyin": "Tā zài xùn liàn shí gōng rán dǐng zhuàng zhǔ jiào liàn, shòu dào yán sù pī píng shì lǐ suǒ dāng rán de.",
        "vietnamese": "Cậu ta trong buổi tập dám công khai chống đối cãi lại huấn luyện viên trưởng, việc bị phê bình nghiêm khắc kiểm điểm là lẽ đương nhiên."
      },
      {
        "chinese": "地震发生后，他主动终止休假，火速归队，毅然投身抢险救灾第一线。",
        "pinyin": "Dì zhèn fā shēng hòu, tā zhǔ dòng zhōng zhǐ xiū jiǎ, huǒ sù guī duì, yì rán tóu shēn qiǎng xiǎn jiù zāi dì yī xiàn.",
        "vietnamese": "Sau khi trận động đất xảy ra, anh ấy đã chủ động chấm dứt kỳ nghỉ phép, hỏa tốc trở về đơn vị và kiên quyết lao ngay vào tuyến đầu cứu hộ cứu nạn."
      },
      {
        "chinese": "高速公路上一辆大货车轮胎起火亟需救援，高速交警接警后，火速派附近警力和119消防车前往现场救援。",
        "pinyin": "Gāo sù gōng lù shàng yī liàng dà huò chē lún tāi qǐ huǒ jí xū jiù yuán, gāo sù jiāo jǐng jiē jǐng hòu, huǒ sù pài fù jìn jǐng lì hé 1 1 9 xiāo fáng chē qián wǎng xiàn chǎng jiù yuán.",
        "vietnamese": "Trên đường cao tốc có một chiếc xe tải lớn bốc cháy lốp xe đang nguy cấp cần ứng cứu, lực lượng cảnh sát giao thông sau khi nhận tin báo đã hỏa tốc điều động lực lượng cảnh sát gần nhất cùng xe chữa cháy 119 tức tốc tới hiện trường giải cứu."
      },
      {
        "chinese": "他们俩虽是双胞胎，性格却截然相反。",
        "pinyin": "Tā men liǎ suī shì shuāng bāo tāi, xìng gé què jié rán xiāng fǎn.",
        "vietnamese": "Hai đứa bọn họ tuy là anh em sinh đôi cùng một bọc, nhưng tính cách thì lại hoàn toàn trái ngược nhau một trời một vực."
      },
      {
        "chinese": "供给和需求好比一枚硬币的两面，无法截然分开。",
        "pinyin": "Gōng gěi hé xū qiú hǎo bǐ yī méi yìng bì de liǎng miàn, wú fǎ jié rán fēn kāi.",
        "vietnamese": "Cung và cầu hệt như hai mặt của cùng một đồng tiền, tuyệt đối không thể nào tách bạch ra làm đôi."
      },
      {
        "chinese": "匠人们非常注重技法的精湛，竭力使自己的作品成为流传千古的艺术精品。",
        "pinyin": "Jiàng rén men fēi cháng zhù zhòng jì fǎ de jīng zhàn, jié lì shǐ zì jǐ de zuò pǐn chéng wèi liú chuán qiān gǔ de yì shù jīng pǐn.",
        "vietnamese": "Những người thợ thủ công hết sức chú trọng sự tinh xảo điêu luyện của kỹ pháp, dốc cạn tâm huyết để tác phẩm của mình trở thành kiệt tác nghệ thuật lưu danh thiên cổ."
      },
      {
        "chinese": "但凡旅客有需求，小到一针一线，大到轮椅担架，铁路工作人员都会竭力满足。",
        "pinyin": "Dàn fán lǚ kè yǒu xū qiú, xiǎo dào yī zhēn yī xiàn, dà dào lún yǐ dān jià, tiě lù gōng zuò rén yuán dōu huì jié lì mǎn zú.",
        "vietnamese": "Phàm hễ hành khách có nhu cầu, nhỏ từ chiếc kim sợi chỉ cho đến to như xe lăn cáng cứu thương, nhân viên ngành đường sắt đều dốc lòng phục vụ chu đáo."
      },
      {
        "chinese": "游客们迫不及待地躺在草地上尽情呼吸新鲜的空气，享受灿烂的阳光。",
        "pinyin": "Yóu kè men pò bù jí dài dì tǎng zài cǎo dì shàng jǐn qíng hū xī xīn xiān de kōng qì, xiǎng shòu càn làn de yáng guāng.",
        "vietnamese": "Các du khách háo hức ngả lưng trên thảm cỏ xanh mướt, thỏa sức hít thở bầu không khí trong lành và tận hưởng ánh nắng vàng rực rỡ."
      },
      {
        "chinese": "在壬寅虎年来临之际，各地人民以丰富多彩的活动，尽情表达了他们的喜悦之情和对新一年的美好憧憬。",
        "pinyin": "Zài rén yín hǔ nián lái lín zhī jì, gè dì rén mín yǐ fēng fù duō cǎi de huó dòng, jǐn qíng biǎo dá le tā men de xǐ yuè zhī qíng hé duì xīn yī nián de měi hǎo chōng jǐng.",
        "vietnamese": "Nhân dịp Tết Nhâm Dần cận kề, nhân dân khắp nơi thông qua các hoạt động muôn màu muôn vẻ đã thỏa lòng bày tỏ niềm hân hoan cùng niềm ước vọng tươi đẹp về một năm mới an khang."
      },
      {
        "chinese": "所谓“就近入学”，一般是按照户口所在地去附近的学校登记入学。",
        "pinyin": "Suǒ wèi \"jiù jìn rù xué\" , yī bān shì àn zhào hù kǒu suǒ zài dì qù fù jìn de xué xiào dēng jì rù xué.",
        "vietnamese": "Cái gọi là 'nhập học theo tuyến gần nhà' thông thường là căn cứ theo nơi đăng ký hộ khẩu để ghi danh học tại ngôi trường gần nhất."
      },
      {
        "chinese": "过去驾驶证补换需前往车管所办理，现在在网上提交信息后即可就近领取。",
        "pinyin": "Guò qù jià shǐ zhèng bǔ huàn xū qián wǎng chē guǎn suǒ bàn lǐ, xiàn zài zài wǎng shàng tí jiāo xìn xī hòu jí kě jiù jìn lǐng qǔ.",
        "vietnamese": "Trước đây việc cấp đổi giấy phép lái xe phải trực tiếp đến sở quản lý xe, ngày nay sau khi nộp thông tin trực tuyến là có thể tới điểm gần nhất nhận bằng."
      },
      {
        "chinese": "他在演讲中幽默的插话并非一时兴起，而是刻意为之，以赢得观众的好感。",
        "pinyin": "Tā zài yǎn jiǎng zhōng yōu mò de chā huà bìng fēi yī shí xīng qǐ, ér shì kè yì wèi zhī, yǐ yíng dé guān zhòng de hǎo gǎn.",
        "vietnamese": "Những câu đùa hóm hỉnh xen ngang trong bài diễn thuyết của ông không phải là ngẫu hứng nhất thời, mà là sự tính toán cố ý có chủ đích nhằm chiếm trọn cảm tình của cử tọa."
      },
      {
        "chinese": "研究者在选择研究课题时，不能刻意去赶时髦，盲目跟风，而应结合自己的知识结构和研究兴趣。",
        "pinyin": "Yán jiū zhě zài xuǎn zé yán jiū kè tí shí, bù néng kè yì qù gǎn shí máo, máng mù gēn fēng, ér yīng jié hé zì jǐ de zhī shí jié gòu hé yán jiū xīng qù.",
        "vietnamese": "Người làm nghiên cứu khi lựa chọn đề tài không được cố tình chạy theo trào lưu đua đòi mù quáng, mà cần căn cứ vào nền tảng tri thức và niềm đam mê nghiên cứu của bản thân."
      },
      {
        "chinese": "你别这么拼命地工作，要注意身体啊！",
        "pinyin": "Nǐ bié zhè me pīn mìng dì gōng zuò, yào zhù yì shēn tǐ a!",
        "vietnamese": "Bạn đừng có làm việc bạt mạng thâu đêm suốt sáng như thế, phải chú ý giữ gìn sức khỏe chứ!"
      },
      {
        "chinese": "现场所有的粉丝们都在拼命鼓掌、尖叫，气氛热烈极了！",
        "pinyin": "Xiàn chǎng suǒ yǒu de fěn sī men dōu zài pīn mìng gǔ zhǎng, jiān jiào, qì fēn rè liè jí le!",
        "vietnamese": "Toàn thể người hâm mộ có mặt tại hiện trường đều ra sức vỗ tay reo hò, bầu không khí náo nhiệt đến tột cùng!"
      },
      {
        "chinese": "当电梯关门时，不可强行挤入，以免发生危险。",
        "pinyin": "Dāng diàn tī guān mén shí, bù kě qiáng xíng jǐ rù, yǐ miǎn fā shēng wēi xiǎn.",
        "vietnamese": "Khi thang máy đang khép cửa, tuyệt đối không được cố tình chen lấn lách vào để tránh xảy ra tai nạn nguy hiểm."
      },
      {
        "chinese": "不要直接使用电源开关键强行关机，这样易造成系统文件损坏或丢失。",
        "pinyin": "Bù yào zhí jiē shǐ yòng diàn yuán kāi guān jiàn qiáng xíng guān jī, zhè yàng yì zào chéng xì tǒng wén jiàn sǔn huài huò diū shī.",
        "vietnamese": "Không nên tắt nóng máy tính bằng nút nguồn cưỡng chế, làm như vậy rất dễ gây hỏng hóc hoặc mất mát các tệp tin hệ thống."
      },
      {
        "chinese": "理发师的手艺高超，顾客可从色板上任意挑选造型，也可带图或口头描述，只有你想不到，没有她做不到。",
        "pinyin": "Lǐ fā shī de shǒu yì gāo chāo, gù kè kě cóng sè bǎn shàng rèn yì tiāo xuǎn zào xíng, yě kě dài tú huò kǒu tóu miáo shù, zhǐ yǒu nǐ xiǎng bù dào, méi yǒu tā zuò bù dào.",
        "vietnamese": "Tay nghề của người thợ cắt tóc vô cùng điêu luyện, khách hàng có thể tùy ý chọn kiểu trên bảng mẫu hoặc mang ảnh tới mô tả, chỉ sợ bạn không nghĩ ra chứ không có gì cô ấy không làm được."
      },
      {
        "chinese": "历史就是历史，谁都不能任意修改。",
        "pinyin": "Lì shǐ jiù shì lì shǐ, shuí dōu bù néng rèn yì xiū gǎi.",
        "vietnamese": "Lịch sử chính là lịch sử, không một ai có quyền tùy tiện bóp méo sửa đổi."
      },
      {
        "chinese": "两宋时期，海外贸易得到了空前发展，海商队伍不断壮大，侨居外商也日趋增多。",
        "pinyin": "Liǎng sòng shí qī, hǎi wài mào yì dé dào le kōng qián fā zhǎn, hǎi shāng duì wǔ bù duàn zhuàng dà, qiáo jū wài shāng yě rì qū zēng duō.",
        "vietnamese": "Dưới thời Lưỡng Tống, thương mại vượt biển đã đạt được bước phát triển chưa từng có, đội ngũ thương nhân đường biển không ngừng lớn mạnh, lượng ngoại thương kiều cư cũng ngày một gia tăng."
      },
      {
        "chinese": "智能手机市场现已日趋饱和，如何稳中求变，成了各大厂商首要解决的问题。",
        "pinyin": "Zhì néng shǒu jī shì chǎng xiàn yǐ rì qū bǎo hé, rú hé wěn zhōng qiú biàn, chéng le gè dà chǎng shāng shǒu yào jiě jué de wèn tí.",
        "vietnamese": "Thị trường điện thoại thông minh hiện nay đã dần tiến tới ngưỡng bão hòa, làm thế nào để giữ vững thế đứng và đột phá đổi mới đã trở thành bài toán sinh tử hàng đầu của các hãng công nghệ."
      },
      {
        "chinese": "虽然时间紧迫，工作量浩繁，工人们终于克服种种困难，如期完成了任务。",
        "pinyin": "Suī rán shí jiān jǐn pò, gōng zuò liàng hào fán, gōng rén men zhōng yú kè fú zhǒng zhǒng kùn nán, rú qī wán chéng le rèn wù.",
        "vietnamese": "Tuy thời gian gấp gáp, khối lượng công việc khổng lồ, nhưng những người công nhân rốt cuộc đã đạp bằng mọi gian khó, hoàn thành nhiệm vụ đúng kỳ hạn."
      },
      {
        "chinese": "为确保活动如期举行，主办方积极协调各方资源，及时解决潜在问题。",
        "pinyin": "Wèi què bǎo huó dòng rú qī jǔ xíng, zhǔ bàn fāng jī jí xié diào gè fāng zī yuán, jí shí jiě jué qián zài wèn tí.",
        "vietnamese": "Để bảo đảm sự kiện diễn ra đúng kế hoạch đã định, ban tổ chức đã tích cực điều phối mọi nguồn lực và kịp thời tháo gỡ các khúc mắc phát sinh."
      },
      {
        "chinese": "为避免员工擅自离职给公司带来麻烦和损失，用人单位可在劳动合同中提前注明相关条款。",
        "pinyin": "Wèi bì miǎn yuán gōng shàn zì lí zhí gěi gōng sī dài lái má fán hé sǔn shī, yòng rén dān wèi kě zài láo dòng hé tóng zhōng tí qián zhù míng xiāng guān tiáo kuǎn.",
        "vietnamese": "Để ngăn ngừa việc nhân viên tự ý bỏ việc gây xáo trộn và thiệt hại cho doanh nghiệp, đơn vị sử dụng lao động có thể ghi rõ các điều khoản ràng buộc trong hợp đồng."
      },
      {
        "chinese": "未经商标注册人许可，任何组织和个人均不得擅自将该商标用于同类商品上。",
        "pinyin": "Wèi jīng shāng biāo zhù cè rén xǔ kě, rèn hé zǔ zhī hé gè rén jūn bù dé shàn zì jiāng gāi shāng biāo yòng yú tóng lèi shāng pǐn shàng.",
        "vietnamese": "Nếu chưa có sự chấp thuận của chủ sở hữu nhãn hiệu, bất kỳ tổ chức hay cá nhân nào cũng không được tự tiện sử dụng nhãn hiệu đó cho các mặt hàng cùng loại."
      },
      {
        "chinese": "行程中请务必听从导游安排，如私自离团，产生的一切后果均须自行承担。",
        "pinyin": "Xíng chéng zhōng qǐng wù bì tīng cóng dǎo yóu ān pái, rú sī zì lí tuán, chǎn shēng de yī qiè hòu guǒ jūn xū zì xíng chéng dān.",
        "vietnamese": "Trong suốt chuyến đi xin vui lòng tuyệt đối tuân thủ hướng dẫn của hướng dẫn viên, nếu tự ý tách đoàn, mọi hậu quả phát sinh đương sự phải tự chịu trách nhiệm."
      },
      {
        "chinese": "文物购销统一由文物部门负责，国内外人士不得私自进行买卖。",
        "pinyin": "Wén wù gòu xiāo tǒng yī yóu wén wù bù mén fù zé, guó nèi wài rén shì bù dé sī zì jìn xíng mǎi mài.",
        "vietnamese": "Việc mua bán cổ vật được thống nhất giao cho cơ quan bảo tồn di sản quản lý, các cá nhân trong và ngoài nước tuyệt đối không được tự ý giao dịch ngầm."
      },
      {
        "chinese": "贵公司为我们提供了极大的帮助，特此表示感谢。",
        "pinyin": "Guì gōng sī wèi wǒ men tí gōng le jí dà de bāng zhù, tè cǐ biǎo shì gǎn xiè.",
        "vietnamese": "Quý công ty đã dành cho chúng tôi sự hỗ trợ vô cùng to lớn, nay xin gửi lời cảm ơn trân trọng sâu sắc nhất."
      },
      {
        "chinese": "与会人员往返旅费自理，会议期间食宿由主办方承担。特此通知。",
        "pinyin": "Yǔ huì rén yuán wǎng fǎn lǚ fèi zì lǐ, huì yì qī jiān shí sù yóu zhǔ bàn fāng chéng dān. tè cǐ tōng zhī.",
        "vietnamese": "Đại biểu tham dự tự chi trả chi phí đi lại, ăn ở trong thời gian hội nghị do ban tổ chức đài thọ. Trân trọng thông báo."
      },
      {
        "chinese": "不明白的不要瞎做，不该说的不要瞎说。",
        "pinyin": "Bù míng bái de bù yào xiā zuò, bù gāi shuō de bù yào xiā shuō.",
        "vietnamese": "Điều gì chưa hiểu rõ thì đừng làm bừa làm ẩu, điều gì không nên nói thì chớ có nói nhăng nói cuội."
      },
      {
        "chinese": "努力先要找准方向，否则累得半死却只是原地打转，瞎忙一通。",
        "pinyin": "Nǔ lì xiān yào zhǎo zhǔn fāng xiàng, fǒu zé lèi dé bàn sǐ què zhǐ shì yuán dì dǎ zhuǎn, xiā máng yī tōng.",
        "vietnamese": "Nỗ lực trước hết phải định đúng phương hướng, bằng không mệt đứt hơi mà chỉ giậm chân tại chỗ, bận rộn vô ích chẳng ra trò trống gì."
      },
      {
        "chinese": "为了给山区的孩子们更多的帮助，志愿者回信时还一并寄去了衣服和图书。",
        "pinyin": "Wèi le gěi shān qū de hái zi men gèng duō de bāng zhù, zhì yuàn zhě huí xìn shí hái yī bìng jì qù le yī fú hé tú shū.",
        "vietnamese": "Để giúp đỡ các em nhỏ vùng cao nhiều hơn, các tình nguyện viên khi gửi thư phản hồi đã tiện thể gửi kèm theo cả quần áo và sách truyện."
      },
      {
        "chinese": "关心支持我的朋友太多，无法一一列举，在此一并致谢。",
        "pinyin": "Guān xīn zhī chí wǒ de péng yǒu tài duō, wú fǎ yī yī liè jǔ, zài cǐ yī bìng zhì xiè.",
        "vietnamese": "Những người bạn luôn quan tâm ủng hộ tôi quá nhiều không thể kể xiết từng người, xin được mượn nơi này gửi lời tri ân chân thành tới tất cả mọi người."
      },
      {
        "chinese": "新技术的引入，一举解决了公司长期以来成本过高、产能不足等多项难题。",
        "pinyin": "Xīn jì shù de yǐn rù, yī jǔ jiě jué le gōng sī zhǎng qī yǐ lái chéng běn guò gāo, chǎn néng bù zú děng duō xiàng nán tí.",
        "vietnamese": "Việc ứng dụng công nghệ mới đã một phát giải quyết dứt điểm hàng loạt vấn đề nan giải bấy lâu của công ty như chi phí quá đắt đỏ và công suất trì trệ."
      },
      {
        "chinese": "在奥运会乒乓球男子团体决赛中，三名中国选手团结一致，一举夺冠。",
        "pinyin": "Zài ào yùn huì pīng pāng qiú nán zi tuán tǐ jué sài zhōng, sān míng zhōng guó xuǎn shǒu tuán jié yī zhì, yī jǔ duó guān.",
        "vietnamese": "Trong trận chung kết đồng đội nam bóng bàn Olympic, ba tay vợt Trung Quốc đã đồng lòng đoàn kết, xuất sắc giành trọn ngôi vô địch."
      },
      {
        "chinese": "有些家庭条件好的孩子之所以会养成一些不良习惯，完全是父母一手造成的。",
        "pinyin": "Yǒu xiē jiā tíng tiáo jiàn hǎo de hái zi zhī suǒ yǐ huì yǎng chéng yī xiē bù liáng xí guàn, wán quán shì fù mǔ yī shǒu zào chéng de.",
        "vietnamese": "Một số đứa trẻ nhà có điều kiện sở dĩ hình thành những thói hư tật xấu hoàn toàn là do chính tay cha mẹ chúng nuông chiều mà nên."
      },
      {
        "chinese": "为了照顾生病的妻子和年幼的孩子，他关了自己一手创办的工作室，专心守着家人。",
        "pinyin": "Wèi le zhào gù shēng bìng de qī zi hé nián yòu de hái zi, tā guān le zì jǐ yī shǒu chuàng bàn de gōng zuò shì, zhuān xīn shǒu zhe jiā rén.",
        "vietnamese": "Để chăm sóc người vợ ốm đau và đứa con thơ dại, anh ấy đã đóng cửa studio do chính tay mình gầy dựng bấy lâu để toàn tâm toàn ý ở bên gia đình."
      },
      {
        "chinese": "山区孩子对知识的渴求深深打动了他，他毅然决定扎根于此，帮助孩子们圆梦大学。",
        "pinyin": "Shān qū hái zi duì zhī shí de kě qiú shēn shēn dǎ dòng le tā, tā yì rán jué dìng zhā gēn yú cǐ, bāng zhù hái zi men yuán mèng dà xué.",
        "vietnamese": "Khát khao tri thức cháy bỏng của những đứa trẻ vùng cao đã lay động sâu sắc trái tim anh, anh kiên quyết dấn thân cắm rễ tại nơi đây để chắp cánh ước mơ giảng đường cho các em."
      },
      {
        "chinese": "他取得博士学位后，毅然放弃了国外良好的工作条件和优厚的物质待遇，回到了祖国的怀抱。",
        "pinyin": "Tā qǔ dé bó shì xué wèi hòu, yì rán fàng qì le guó wài liáng hǎo de gōng zuò tiáo jiàn hé yōu hòu de wù zhì dài yù, huí dào le zǔ guó de huái bào.",
        "vietnamese": "Sau khi lấy bằng tiến sĩ, anh ấy đã kiên quyết từ bỏ môi trường làm việc lý tưởng và mức đãi ngộ hậu hĩnh ở nước ngoài để trở về cống hiến cho quê hương đất mẹ."
      },
      {
        "chinese": "说到精彩之处，他有意不往下讲，吊足了大家的胃口。",
        "pinyin": "Shuō dào jīng cǎi zhī chù, tā yǒu yì bù wǎng xià jiǎng, diào zú le dà jiā de wèi kǒu.",
        "vietnamese": "Đang nói tới đoạn cao trào hấp dẫn nhất, ông ấy cố ý ngừng bặt không kể tiếp, khiến mọi người tò mò háo hức đến nghẹt thở."
      },
      {
        "chinese": "我但凡提出一点儿想法，他就急于反驳，似乎有意跟我过不去。",
        "pinyin": "Wǒ dàn fán tí chū yìdiǎnr xiǎng fǎ, tā jiù jí yú fǎn bó, shì hū yǒu yì gēn wǒ guò bù qù.",
        "vietnamese": "Phàm hễ tôi đưa ra chút ý kiến nào là anh ta liền vội vã phản bác, cứ như thể cố tình gây sự làm khó tôi vậy."
      },
      {
        "chinese": "尽管一周以来连续阴雨，但施工仍照常进行。",
        "pinyin": "Jǐn guǎn yī zhōu yǐ lái lián xù yīn yǔ, dàn shī gōng réng zhào cháng jìn xíng.",
        "vietnamese": "Mặc cho suốt cả tuần mưa dầm dề rả rích, công trường thi công vẫn được tiến hành đều đặn như thường lệ."
      },
      {
        "chinese": "虽然她已小有名气，但仍照常在剧场认真演出，打磨演技。",
        "pinyin": "Suī rán tā yǐ xiǎo yǒu míng qì, dàn réng zhào cháng zài jù chǎng rèn zhēn yǎn chū, dǎ mó yǎn jì.",
        "vietnamese": "Tuy cô ấy đã có chút tên tuổi, nhưng vẫn như thường lệ nghiêm túc đứng trên sân khấu kịch để mài giũa diễn xuất."
      },
      {
        "chinese": "这周末店里的生意比较忙，老郭没有照例休假，而是到店帮忙接待顾客。",
        "pinyin": "Zhè zhōu mò diàn lǐ de shēng yì bǐ jiào máng, lǎo guō méi yǒu zhào lì xiū jiǎ, ér shì dào diàn bāng máng jiē dài gù kè.",
        "vietnamese": "Cuối tuần này quán xá khá đông khách, bác Quách không nghỉ phép như lệ thường mà tới quán phụ giúp đón tiếp khách hàng."
      },
      {
        "chinese": "新品宣发照例应由市场营销部负责，然而因时间紧迫，其他部门也参与了策划。",
        "pinyin": "Xīn pǐn xuān fā zhào lì yīng yóu shì chǎng yíng xiāo bù fù zé, rán ér yīn shí jiān jǐn pò, qí tā bù mén yě cān yǔ le cè huà.",
        "vietnamese": "Việc quảng bá ra mắt sản phẩm mới theo lệ thường phải do phòng Marketing chủ trì, song do thời gian quá gấp rút nên các phòng ban khác cũng cùng xắn tay vào lên kế hoạch."
      },
      {
        "chinese": "他年近80照样身板硬朗，精力和体力不输年轻人。",
        "pinyin": "Tā nián jìn 8 0 zhào yàng shēn bǎn yìng lǎng, jīng lì hé tǐ lì bù shū nián qīng rén.",
        "vietnamese": "Cụ ấy dù đã cận kề tuổi bát tuần mà vóc dáng vẫn dẻo dai vạm vỡ, tinh lực và thể lực chẳng hề thua kém bất kỳ thanh niên trai tráng nào."
      },
      {
        "chinese": "叶老师并未计较我之前的顶撞，照样对我倾囊相授。",
        "pinyin": "Yè lǎo shī bìng wèi jì jiào wǒ zhī qián de dǐng zhuàng, zhào yàng duì wǒ qīng náng xiāng shòu.",
        "vietnamese": "Thầy Diệp chẳng hề để bụng lời lẽ chống đối trước đây của tôi, vẫn y như trước dốc hết vốn liếng sở học truyền dạy tận tình cho tôi."
      },
      {
        "chinese": "我和他多年未见，本想留他多住几天，可他执意不肯，说是家中有事。",
        "pinyin": "Wǒ hé tā duō nián wèi jiàn, běn xiǎng liú tā duō zhù jǐ tiān, kě tā zhí yì bù kěn, shuō shì jiā zhōng yǒu shì.",
        "vietnamese": "Tôi và anh ấy bao năm không gặp, vốn muốn giữ anh ở lại chơi thêm vài hôm, nhưng anh cứ khăng khăng không chịu, bảo là trong nhà có việc gấp."
      },
      {
        "chinese": "她不顾家人、朋友的劝说，病还没好就执意回到工作岗位。",
        "pinyin": "Tā bù gù jiā rén, péng yǒu de quàn shuō, bìng hái méi hǎo jiù zhí yì huí dào gōng zuò gǎng wèi.",
        "vietnamese": "Mặc cho người thân bạn bè hết lời khuyên can, cơn bệnh chưa dứt hẳn mà cô ấy đã nhất quyết quay lại vị trí công tác."
      },
      {
        "chinese": "一夜狂风暴雨过后，气温骤然下降了十几度。",
        "pinyin": "Yī yè kuáng fēng bào yǔ guò hòu, qì wēn zhòu rán xià jiàng le shí jǐ dù.",
        "vietnamese": "Sau một đêm mưa bão gầm rú cuồng phong, nhiệt độ bỗng chốc tụt dốc không phanh hơn mười độ C."
      },
      {
        "chinese": "鱼相继在水中跃起，原本平静的湖面，骤然起了波澜。",
        "pinyin": "Yú xiāng jì zài shuǐ zhōng yuè qǐ, yuán běn píng jìng de hú miàn, zhòu rán qǐ le bō lán.",
        "vietnamese": "Từng đàn cá nối đuôi nhau quẫy mình tung tăng dưới nước, mặt hồ vốn đang phẳng lặng như gương bỗng chốc dậy sóng lăn tăn."
      },
      {
        "chinese": "大幕拉开，节目主持人走上舞台，他首先感谢了观众的到来，然后逐一介绍在场嘉宾。",
        "pinyin": "Dà mù lā kāi, jié mù zhǔ chí rén zǒu shàng wǔ tái, tā shǒu xiān gǎn xiè le guān zhòng de dào lái, rán hòu zhú yī jiè shào zài chǎng jiā bīn.",
        "vietnamese": "Màn nhung hé mở, người dẫn chương trình bước ra sân khấu, trước tiên gửi lời cảm ơn khán giả đã tới dự, sau đó lần lượt giới thiệu từng vị khách quý có mặt."
      },
      {
        "chinese": "考生入场后对号入座，将准考证和有效身份证件放在桌子右上角，以备监考员逐一核查。",
        "pinyin": "Kǎo shēng rù chǎng hòu duì hào rù zuò, jiāng zhǔn kǎo zhèng hé yǒu xiào shēn fèn zhèng jiàn fàng zài zhuō zi yòu shàng jiǎo, yǐ bèi jiān kǎo yuán zhú yī hé chá.",
        "vietnamese": "Thí sinh sau khi vào phòng thi ngồi đúng số báo danh, đặt thẻ dự thi và giấy tờ tùy thân hợp lệ lên góc phải bàn để giám thị lần lượt đối chiếu kiểm tra."
      },
      {
        "chinese": "为了吃到最鲜美的河豚，远在新疆的刘先生跨越三千多公里专程来到扬中。",
        "pinyin": "Wèi le chī dào zuì xiān měi de hé tún, yuǎn zài xīn jiāng de liú xiān shēng kuà yuè sān qiān duō gōng lǐ zhuān chéng lái dào yáng zhōng.",
        "vietnamese": "Để được thưởng thức món cá nóc tươi ngon nhất, ông Lưu ở tận Tân Cương xa xôi đã vượt hơn 3.000 cây số cất công lặn lội đến Dương Trung."
      },
      {
        "chinese": "有一年，我专程去南京拜访了恩师，导师已年逾古稀，但依然精神矍铄。",
        "pinyin": "Yǒu yī nián, wǒ zhuān chéng qù nán jīng bài fǎng le ēn shī, dǎo shī yǐ nián yú gǔ xī, dàn yī rán jīng shén jué shuò.",
        "vietnamese": "Có một năm nọ, tôi đã lặn lội vào tận Nam Kinh thăm lại người thầy đáng kính, người nay đã ngoài thất tuần nhưng tinh thần vẫn quắc thước minh mẫn lạ thường."
      }
    ]
  },
  {
    "id": "hsk79-g-16",
    "order": 16,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Chùm phó từ phủ định văn ngôn & trang trọng: 不见得, 绝不, 无从, 无须, 无可, 勿",
    "titleZh": "不见得、绝不、无从、无须、无可、勿",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "否定副词",
    "structure": "Phó từ phủ định + Vị ngữ",
    "explanationVi": "Phủ định đa tầng nấc mang tính học thuật: '不见得' (chưa chắc đã); '绝不' (tuyệt đối không); '无从' (không có cách nào, không biết bắt đầu từ đâu - 无从说起, 无从得知); '无须' (không cần thiết phải - bằng 不必); '无可' (không thể nào... nổi - 无可指摘, 无可奉告); '勿' (chớ, đừng - văn ngôn pháp lý: 切勿, 请勿, 勿念).",
    "tips": "Cụm '无可奉告' (miễn bình luận/không có gì để thông báo) là câu nói kinh điển trong phỏng vấn báo chí và ngoại giao.",
    "examples": [
      {
        "chinese": "文学上的分类只反映文学作品的特点而非价值的高低，通俗小说不见得不高雅，不见得不严肃，而那些所谓的非通俗小说，也并非都是精品。",
        "pinyin": "Wén xué shàng de fēn lèi zhǐ fǎn yìng wén xué zuò pǐn de tè diǎn ér fēi jià zhí de gāo dī, tōng sú xiǎo shuō bù jiàn dé bù gāo yǎ, bù jiàn dé bù yán sù, ér nà xiē suǒ wèi de fēi tōng sú xiǎo shuō, yě bìng fēi dōu shì jīng pǐn.",
        "vietnamese": "Sự phân loại trong văn học chỉ phản ánh đặc trưng của tác phẩm chứ không quyết định đẳng cấp giá trị cao thấp: tiểu thuyết đại chúng chưa chắc đã không thanh nhã, chưa chắc đã thiếu đứng đắn; còn những tác phẩm được dán mác tinh hoa thì cũng đâu phải cuốn nào cũng là kiệt tác."
      },
      {
        "chinese": "这件事非常麻烦，你就是让比我厉害十倍的人去办，也不见得能办成。",
        "pinyin": "Zhè jiàn shì fēi cháng má fán, nǐ jiù shì ràng bǐ wǒ lì hài shí bèi de rén qù bàn, yě bù jiàn dé néng bàn chéng.",
        "vietnamese": "Việc này vô cùng rắc rối, bạn có cậy nhờ người giỏi gấp mười lần tôi đi xử lý thì cũng chưa chắc đã làm nên chuyện đâu."
      },
      {
        "chinese": "年轻人绝不应为了攀比和享乐而过度消费，甚至背上难以偿还的债务。",
        "pinyin": "Nián qīng rén jué bù yīng wèi le pān bǐ hé xiǎng lè ér guò dù xiāo fèi, shèn zhì bèi shàng nán yǐ cháng hái de zhài wù.",
        "vietnamese": "Giới trẻ tuyệt đối không nên vì tâm lý đua đòi và hưởng thụ nhất thời mà tiêu xài hoang phí, để rồi gánh trên vai những khoản nợ nần không thể gượng dậy nổi."
      },
      {
        "chinese": "他那么聪明的人，绝不会干这种傻事。",
        "pinyin": "Tā nà me cōng míng de rén, jué bù huì gàn zhè zhǒng shǎ shì.",
        "vietnamese": "Một người thông minh sáng dạ như anh ấy tuyệt đối sẽ chẳng bao giờ làm cái trò ngốc nghếch dại dột đó đâu."
      },
      {
        "chinese": "即将告别学生时代，我心有千言反而无从说起。",
        "pinyin": "Jí jiāng gào bié xué shēng shí dài, wǒ xīn yǒu qiān yán fǎn ér wú cóng shuō qǐ.",
        "vietnamese": "Giây phút sắp sửa chia tay giảng đường thời cắp sách, lòng tôi trào dâng muôn vàn tâm sự mà lại chẳng biết mở lời bắt đầu từ đâu."
      },
      {
        "chinese": "此次会议内容严格保密，外界对其无从得知。",
        "pinyin": "Cǐ cì huì yì nèi róng yán gé bǎo mì, wài jiè duì qí wú cóng dé zhī.",
        "vietnamese": "Nội dung cuộc họp lần này được bảo mật tuyệt đối, dư luận bên ngoài hoàn toàn không có cách nào nắm bắt thông tin."
      },
      {
        "chinese": "她满墙贴的都是舞台上演奏的照片，音乐对她的重要性无须多言。",
        "pinyin": "Tā mǎn qiáng tiē de dōu shì wǔ tái shàng yǎn zòu de zhào piàn, yīn lè duì tā de zhòng yào xìng wú xū duō yán.",
        "vietnamese": "Bức tường phòng cô ấy dán kín những bức ảnh biểu diễn trên sân khấu, tầm quan trọng của âm nhạc đối với đời cô thiết nghĩ không cần phải nói thêm lời nào nữa."
      },
      {
        "chinese": "“往者不可谏，来者犹可追”，无须为过去的失误而懊悔，重要的是把握现在，展望未来。",
        "pinyin": "\"wǎng zhě bù kě jiàn, lái zhě yóu kě zhuī\" , wú xū wèi guò qù de shī wù ér ào huǐ, zhòng yào de shì bǎ wò xiàn zài, zhǎn wàng wèi lái.",
        "vietnamese": "'Chuyện đã qua không thể vãn hồi, việc tương lai vẫn còn có thể đuổi kịp', không việc gì phải gặm nhấm ân hận vì những sai lầm trong quá khứ, điều cốt yếu là nắm chắc hiện tại và vững tin hướng tới tương lai."
      },
      {
        "chinese": "她的演唱技巧卓越且感情真挚，让台下评委们无可指摘。",
        "pinyin": "Tā de yǎn chàng jì qiǎo zhuó yuè qiě gǎn qíng zhēn zhì, ràng tái xià píng wěi men wú kě zhǐ zhāi.",
        "vietnamese": "Kỹ thuật thanh nhạc xuất chúng cùng cảm xúc dạt dào chân thành của cô khiến toàn bộ ban giám khảo bên dưới hoàn toàn không thể chê trách hay bắt bẻ vào đâu được."
      },
      {
        "chinese": "当被问及该片是否以悲剧结尾，女主表示已签署保密协议，对此无可奉告。",
        "pinyin": "Dāng bèi wèn jí gāi piàn shì fǒu yǐ bēi jù jié wěi, nǚ zhǔ biǎo shì yǐ qiān shǔ bǎo mì xié yì, duì cǐ wú kě fèng gào.",
        "vietnamese": "Khi được gặng hỏi liệu bộ phim có khép lại bằng một kết thúc bi kịch hay không, nữ diễn viên chính cho hay mình đã ký cam kết bảo mật nên về việc này xin miễn bình luận."
      },
      {
        "chinese": "女儿春节在外未能回家，询问父母近况，二老回复说：“一切平安，勿念。”",
        "pinyin": "Nǚ ér chūn jié zài wài wèi néng huí jiā, xún wèn fù mǔ jìn kuàng, èr lǎo huí fù shuō: \"yī qiè píng ān, wù niàn.\"",
        "vietnamese": "Con gái dịp tết bận việc phương xa không thể về sum họp, nhắn tin hỏi thăm tình hình bố mẹ, hai cụ nhắn lại ngắn gọn: 'Mọi sự đều bình yên, con chớ bận lòng'."
      },
      {
        "chinese": "室内若发生煤气泄漏，应立即打开门窗通风，切勿使用明火。",
        "pinyin": "Shì nèi ruò fā shēng méi qì xiè lòu, yīng lì jí dǎ kāi mén chuāng tōng fēng, qiè wù shǐ yòng míng huǒ.",
        "vietnamese": "Trong phòng nếu phát hiện rò rỉ khí gas, cần lập tức mở toang các cửa sổ cho thông thoáng, tuyệt đối chớ có sử dụng lửa ngọn."
      }
    ]
  },
  {
    "id": "hsk79-g-17",
    "order": 17,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Hệ thống phó từ ngữ khí biểu cảm & phản biện tri thức HSK 7-9 (33 từ)",
    "titleZh": "必定、必将、不妨、不免、反倒、非得、分明、怪不得、果真、好在、何必、竟、愣、莫非、难怪、宁可、宁愿、碰巧、偏偏、恰巧、切、情愿、势必、索性、万万、未免、务必、幸好、幸亏、终究、何不、何尝、何苦",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "语气副词",
    "structure": "Chủ ngữ + Phó từ ngữ khí + Vị ngữ",
    "explanationVi": "Chùm phó từ biểu cảm và lập luận sắc bén: '必定' / '必将' (nhất định, tất sẽ); '不妨' (thiết nghĩ cũng chẳng sao, thử xem sao); '不免' (khó tránh khỏi); '反倒' (trái lại còn); '非得...不可' (nhất định phải... mới chịu); '分明' (rõ rành rành); '怪不得' / '难怪' (thảo nào, hèn chi); '果真' (quả nhiên); '好在' / '幸好' / '幸亏' (may mà, may nhờ có); '何必' / '何苦' (hà tất, việc gì phải khổ sở vậy); '竟' / '愣' (thế mà, vậy mà - ngoài sức tưởng tượng); '莫非' (chẳng lẽ, hay là); '宁可' / '宁愿' / '情愿' (thà rằng, thà là); '碰巧' / '恰巧' (vừa khéo, tình cờ trùng hợp); '偏偏' (oái oăm thay, cứ nhất quyết); '切' (nhất thiết phải - 切记, 切不可); '势必' (tất yếu sẽ dẫn đến); '索性' (dứt khoát, chi bằng); '万万' (vạn lần tuyệt đối không - 万万不可); '未免' (e rằng hơi quá, khó tránh); '务必' (nhất định phải); '终究' (rốt cuộc trước sau vẫn); '何不' (sao không); '何尝' (nào có phải, dễ gì đã).",
    "tips": "Nắm vững nhóm từ này giúp bài luận phân tích luận điểm đạt độ đanh thép, tinh tế và giàu cảm xúc trí tuệ.",
    "examples": [
      {
        "chinese": "快乐的人，必定是对生活有深刻洞察力的人，必定是内心富于诗意的人。",
        "pinyin": "Kuài lè de rén, bì dìng shì duì shēng huó yǒu shēn kè dòng chá lì de rén, bì dìng shì nèi xīn fù yú shī yì de rén.",
        "vietnamese": "Một con người luôn vui tươi nhất định phải là người có cái nhìn thấu suốt sâu sắc về cuộc đời, và ắt hẳn phải mang trong mình một tâm hồn giàu chất thơ."
      },
      {
        "chinese": "以你的资质，假以时日必定会“青出于蓝而胜于蓝”。",
        "pinyin": "Yǐ nǐ de zī zhì, jiǎ yǐ shí rì bì dìng huì \"qīng chū yú lán ér shèng yú lán\" .",
        "vietnamese": "Với tố chất thông minh của bạn, chỉ cần cho thêm thời gian thì nhất định sẽ 'trò giỏi hơn thầy, hậu sinh khả úy'."
      },
      {
        "chinese": "诚信经营方能行稳致远，投机取巧必将自取灭亡。",
        "pinyin": "Chéng xìn jīng yíng fāng néng xíng wěn zhì yuǎn, tóu jī qǔ qiǎo bì jiāng zì qǔ miè wáng.",
        "vietnamese": "Kinh doanh giữ trọn chữ tín mới có thể đứng vững đi xa, còn mưu mô trục lợi tắt lối ắt sẽ tự chuốc lấy diệt vong."
      },
      {
        "chinese": "这次友好访问，必将使两国关系上升到一个新的阶段。",
        "pinyin": "Zhè cì yǒu hǎo fǎng wèn, bì jiāng shǐ liǎng guó guān xì shàng shēng dào yī gè xīn de jiē duàn.",
        "vietnamese": "Chuyến thăm hữu nghị lần này tất yếu sẽ đưa quan hệ bang giao giữa hai quốc gia bước lên một tầm cao mới."
      },
      {
        "chinese": "投资者须细细分析股票走势。若一时无把握，出手不妨“慢一拍”。",
        "pinyin": "Tóu zī zhě xū xì xì fēn xī gǔ piào zǒu shì. ruò yī shí wú bǎ wò, chū shǒu bù fáng \"màn yī pāi\" .",
        "vietnamese": "Nhà đầu tư cần phải phân tích tỉ mỉ chiều hướng dao động của cổ phiếu. Nếu nhất thời chưa nắm chắc phần thắng, khi xuống tiền chi bằng cứ 'chậm lại một nhịp' xem sao."
      },
      {
        "chinese": "巧用果蔬饰家居，可拥有回味无穷的诗情画意，有兴趣的不妨一试。",
        "pinyin": "Qiǎo yòng guǒ shū shì jiā jū, kě yōng yǒu huí wèi wú qióng de shī qíng huà yì, yǒu xīng qù de bù fáng yī shì.",
        "vietnamese": "Khéo léo tận dụng hoa quả củ quả để bài trí tổ ấm có thể mang lại chất thơ ý họa dư vị vô cùng, ai có hứng thú thiết nghĩ cũng nên thử một phen."
      },
      {
        "chinese": "眼看着周围的同事朋友升职发财，佳佳不免跟丈夫多唠叨了几句。",
        "pinyin": "Yǎn kàn zhe zhōu wéi de tóng shì péng yǒu shēng zhí fā cái, jiā jiā bù miǎn gēn zhàng fū duō láo dāo le jǐ jù.",
        "vietnamese": "Nhìn bạn bè đồng nghiệp xung quanh thăng quan tiến chức phát tài, Giai Giai khó tránh khỏi việc cằn nhằn đôi câu với chồng."
      },
      {
        "chinese": "每逢下雨天，她就不免想起一桩伤心的往事。",
        "pinyin": "Měi féng xià yǔ tiān, tā jiù bù miǎn xiǎng qǐ yī zhuāng shāng xīn de wǎng shì.",
        "vietnamese": "Mỗi độ trời đổ mưa rào, lòng cô lại không khỏi bùi ngùi nhớ về một chuyện buồn ngày cũ."
      },
      {
        "chinese": "我让他走慢点儿，等等我，他反倒加快了脚步。",
        "pinyin": "Wǒ ràng tā zǒu màn diǎn ér, děng děng wǒ, tā fǎn dào jiā kuài le jiǎo bù.",
        "vietnamese": "Tôi bảo anh ấy bước chậm lại một chút để chờ tôi với, anh ta ngược lại còn rảo bước nhanh hơn."
      },
      {
        "chinese": "他出身于一个医学世家，却对行医丝毫不感兴趣，反倒对绘画情有独钟。",
        "pinyin": "Tā chū shēn yú yī gè yī xué shì jiā, què duì xíng yī sī háo bù gǎn xīng qù, fǎn dào duì huì huà qíng yǒu dú zhōng.",
        "vietnamese": "Anh ấy xuất thân từ một dòng dõi danh y thế gia, vậy mà chẳng mảy may hứng thú với nghề bốc thuốc, trái lại chỉ say mê đắm đuối với hội họa."
      },
      {
        "chinese": "这事儿没必要非得今天就定，你再回去好好考虑一下。",
        "pinyin": "Zhè shì ér méi bì yào fēi dé jīn tiān jiù dìng, nǐ zài huí qù hǎo hǎo kǎo lǜ yī xià.",
        "vietnamese": "Chuyện này không cần thiết cứ nhất quyết phải chốt ngay trong ngày hôm nay đâu, bạn cứ về nhà suy nghĩ lại cho thật chín chắn."
      },
      {
        "chinese": "要想练就一手好的毛笔字，非得花十年甚至数十年功夫不可。",
        "pinyin": "Yào xiǎng liàn jiù yī shǒu hǎo de máo bǐ zì, fēi dé huā shí nián shèn zhì shù shí nián gōng fū bù kě.",
        "vietnamese": "Muốn rèn nên những nét chữ thư pháp tuyệt bút, nhất định phải khổ luyện mười năm thậm chí hàng mấy chục năm ròng mới thành."
      },
      {
        "chinese": "我分明看见他从办公室拿走了一份文件，可他就是不承认。",
        "pinyin": "Wǒ fēn míng kàn jiàn tā cóng bàn gōng shì ná zǒu le yī fèn wén jiàn, kě tā jiù shì bù chéng rèn.",
        "vietnamese": "Tôi rõ rành rành tận mắt thấy anh ta lấy đi một tập tài liệu từ văn phòng, vậy mà anh ta sống chết không chịu nhận."
      },
      {
        "chinese": "平坦宽阔的水泥路，稳重气派的小洋房，四周群山环绕，溪水潺潺。这哪里还是一个贫穷落后的小村庄，分明是一个世外桃源！",
        "pinyin": "Píng tǎn kuān kuò de shuǐ ní lù, wěn zhòng qì pài de xiǎo yáng fáng, sì zhōu qún shān huán rào, xī shuǐ chán chán. zhè nǎ lǐ hái shì yī gè pín qióng luò hòu de xiǎo cūn zhuāng, fēn míng shì yī gè shì wài táo yuán!",
        "vietnamese": "Con đường bê tông thênh thang phẳng phiu, những căn biệt thự mini bề thế khang trang, bốn bề núi non ôm ấp suối chảy róc rách. Đây đâu còn là một ngôi làng nghèo nàn lạc hậu nữa, rõ ràng là chốn bồng lai tiên cảnh trần gian!"
      },
      {
        "chinese": "他真是个精明能干的小伙子，怪不得厂长这么器重他。",
        "pinyin": "Tā zhēn shì gè jīng míng néng gàn de xiǎo huǒ zi, guài bù dé chǎng zhǎng zhè me qì zhòng tā.",
        "vietnamese": "Cậu ấy đúng là một chàng trai tháo vát cơ trí, hèn chi giám đốc nhà máy lại coi trọng cậu ta đến thế."
      },
      {
        "chinese": "——你听说了吗？小李当上部门经理了！",
        "pinyin": "— — nǐ tīng shuō le ma? xiǎo lǐ dāng shàng bù mén jīng lǐ le!",
        "vietnamese": "—— Cậu đã nghe tin gì chưa? Tiểu Lý được thăng chức làm trưởng phòng rồi đấy!"
      },
      {
        "chinese": "——怪不得！我说他今天怎么突然说要请客了呢。",
        "pinyin": "— — guài bù dé! wǒ shuō tā jīn tiān zěn me tū rán shuō yào qǐng kè le ne.",
        "vietnamese": "—— Thảo nào! Tớ bảo sao hôm nay hắn ta tự nhiên lại hào phóng đòi khao cơ chứ."
      },
      {
        "chinese": "他非常热情地让我尝尝这道菜，说这是这家店的招牌，我一吃，果真不错。",
        "pinyin": "Tā fēi cháng rè qíng dì ràng wǒ cháng cháng zhè dào cài, shuō zhè shì zhè jiā diàn de zhāo pái, wǒ yī chī, guǒ zhēn bù cuò.",
        "vietnamese": "Anh ấy vô cùng niềm nở mời tôi nếm thử món này, bảo đây là món tủ trứ danh của quán, tôi vừa nhấm nháp một miếng, quả nhiên ngon tuyệt cú mèo."
      },
      {
        "chinese": "九寨沟的风景果真名不虚传，如人间仙境一般。",
        "pinyin": "Jiǔ zhài gōu de fēng jǐng guǒ zhēn míng bù xū chuán, rú rén jiān xiān jìng yī bān.",
        "vietnamese": "Cảnh sắc Cửu Trại Câu quả nhiên danh bất hư truyền, hệt như chốn bồng lai tiên cảnh giữa cõi phàm trần."
      },
      {
        "chinese": "见到她的第一眼，我就觉得她是一个有故事的人。果真，这位看似柔弱的女性承受了许多不为人知的困苦与艰辛。",
        "pinyin": "Jiàn dào tā de dì yī yǎn, wǒ jiù jué dé tā shì yī gè yǒu gù shì de rén. guǒ zhēn, zhè wèi kàn shì róu ruò de nǚ xìng chéng shòu le xǔ duō bù wèi rén zhī de kùn kǔ yǔ jiān xīn.",
        "vietnamese": "Ngay từ ánh nhìn đầu tiên, tôi đã cảm nhận cô ấy là một người chất chứa nhiều tâm sự. Quả đúng như vậy, người phụ nữ trông có vẻ mảnh mai yếu đuối này đã phải gánh gồng bao nỗi đắng cay gian truân mà chẳng ai thấu tỏ."
      },
      {
        "chinese": "北京的胡同多得出奇，而且样子大同小异，穿梭其中极易迷路。好在北京人热心，问路时总能得到帮助。",
        "pinyin": "Běi jīng de hú tóng duō dé chū qí, ér qiě yàng zi dà tóng xiǎo yì, chuān suō qí zhōng jí yì mí lù. hǎo zài běi jīng rén rè xīn, wèn lù shí zǒng néng dé dào bāng zhù.",
        "vietnamese": "Ngõ ngách hẻm phố ở Bắc Kinh nhiều đến kỳ lạ, vả lại dáng dấp na ná giống nhau, luồn lách bên trong rất dễ lạc lối. May sao người Bắc Kinh rất nhiệt tình, hễ hỏi đường là luôn được chỉ bảo tận tình."
      },
      {
        "chinese": "这部电影的动作设计复杂且全部实地取景，好在他凭借多年的武术功底，成功完成了拍摄任务。",
        "pinyin": "Zhè bù diàn yǐng de dòng zuò shè jì fù zá qiě quán bù shí dì qǔ jǐng, hǎo zài tā píng jiè duō nián de wǔ shù gōng dǐ, chéng gōng wán chéng le pāi shè rèn wù.",
        "vietnamese": "Bộ phim này các pha hành động thiết kế cực kỳ phức tạp lại quay ngoại cảnh thực tế toàn bộ, may nhờ anh ấy có căn cơ võ thuật nhiều năm nên đã hoàn thành xuất sắc cảnh quay."
      },
      {
        "chinese": "清者自清，你自己是清白的，何必跟误会你的人解释那么多。",
        "pinyin": "Qīng zhě zì qīng, nǐ zì jǐ shì qīng bái de, hé bì gēn wù huì nǐ de rén jiě shì nà me duō.",
        "vietnamese": "Người ngay thẳng tự khắc thanh cao trong sạch, bản thân bạn không thẹn với lòng thì hà tất phải tốn hơi phân trần với những kẻ hiểu lầm mình."
      },
      {
        "chinese": "你为了满足自己的虚荣心，花这么多钱打肿脸充胖子，何必呢？",
        "pinyin": "Nǐ wèi le mǎn zú zì jǐ de xū róng xīn, huā zhè me duō qián dǎ zhǒng liǎn chōng pàng zi, hé bì ne?",
        "vietnamese": "Cậu vì muốn thỏa mãn thói hư vinh hão huyền mà vung tiền quá trán để cố làm ra vẻ sang giàu, việc gì phải khổ thế cơ chứ?"
      },
      {
        "chinese": "整场比赛的战术执行得几乎无懈可击，对手在我方的猛烈进攻和严密防守下竟一分未得。",
        "pinyin": "Zhěng chǎng bǐ sài de zhàn shù zhí xíng dé jǐ hū wú xiè kě jī, duì shǒu zài wǒ fāng de měng liè jìn gōng hé yán mì fáng shǒu xià jìng yī fēn wèi dé.",
        "vietnamese": "Chiến thuật của toàn trận đấu được triển khai hoàn hảo không một vết xước, đối thủ dưới sức ép tấn công vũ bão và phòng ngự kín kẽ của chúng ta vậy mà chẳng ghi nổi dù chỉ một điểm danh dự."
      },
      {
        "chinese": "张校长的家离学校只有两公里，但是她长期住在学校，最长的一次竟有半年没回过家。",
        "pinyin": "Zhāng xiào zhǎng de jiā lí xué xiào zhǐ yǒu liǎng gōng lǐ, dàn shì tā zhǎng qī zhù zài xué xiào, zuì zhǎng de yī cì jìng yǒu bàn nián méi huí guò jiā.",
        "vietnamese": "Nhà của cô hiệu trưởng Trương chỉ cách trường có 2 cây số, vậy mà cô thường xuyên cắm trại ăn ngủ tại trường, đợt lâu nhất thế mà tròn nửa năm không hề bước chân về nhà."
      },
      {
        "chinese": "事情明明就是他做的，可他愣不承认。",
        "pinyin": "Shì qíng míng míng jiù shì tā zuò de, kě tā lèng bù chéng rèn.",
        "vietnamese": "Chuyện rõ mười mươi là do hắn ta làm, vậy mà hắn cứ trơ tráo nhất quyết không chịu nhận tội."
      },
      {
        "chinese": "出身贫寒的他，白手起家，愣是将一个小小的餐馆做成了全国连锁的品牌。",
        "pinyin": "Chū shēn pín hán de tā, bái shǒu qǐ jiā, lèng shì jiāng yī gè xiǎo xiǎo de cān guǎn zuò chéng le quán guó lián suǒ de pǐn pái.",
        "vietnamese": "Xuất thân từ bần hàn cơ cực, hai bàn tay trắng dựng nghiệp, anh ấy thế mà đã biến một quán ăn nhỏ xíu thành một chuỗi thương hiệu nhượng quyền phủ sóng toàn quốc."
      },
      {
        "chinese": "他这人一向无事不登三宝殿，今天忽然登门拜访，莫非有什么棘手的事相求？",
        "pinyin": "Tā zhè rén yī xiàng wú shì bù dēng sān bǎo diàn, jīn tiān hū rán dēng mén bài fǎng, mò fēi yǒu shén me jí shǒu de shì xiāng qiú?",
        "vietnamese": "Con người anh ta vốn xưa nay không có việc thì chẳng bao giờ ghé chân, hôm nay bỗng dưng đến gõ cửa bái phỏng, chẳng lẽ lại có chuyện gai góc gì muốn nhờ vả chăng?"
      },
      {
        "chinese": "望着孩子们拿到爱心图书时激动的神情，我心中涌起了强烈的幸福和满足，莫非这就是所谓的“赠人玫瑰，手有余香”？",
        "pinyin": "Wàng zhe hái zi men ná dào ài xīn tú shū shí jī dòng de shén qíng, wǒ xīn zhōng yǒng qǐ le qiáng liè de xìng fú hé mǎn zú, mò fēi zhè jiù shì suǒ wèi de \"zèng rén méi guī, shǒu yǒu yú xiāng\" ?",
        "vietnamese": "Nhìn vẻ mặt rạng rỡ xúc động của lũ trẻ khi nhận được những cuốn sách yêu thương, trong lòng tôi dâng lên niềm hạnh phúc ngập tràn, chẳng lẽ đây chính là điều mà người ta vẫn nói: 'Tặng người hoa hồng, tay lưu hương thơm'?"
      },
      {
        "chinese": "物美价廉的菜品，清爽整洁的装修，热情周到的服务，难怪这家店的生意越来越红火。",
        "pinyin": "Wù měi jià lián de cài pǐn, qīng shuǎng zhěng jié de zhuāng xiū, rè qíng zhōu dào de fú wù, nán guài zhè jiā diàn de shēng yì yuè lái yuè hóng huǒ.",
        "vietnamese": "Món ăn ngon bổ rẻ, không gian bài trí thoáng đãng sạch sẽ, phong cách phục vụ ân cần chu đáo, hèn chi quán ăn này làm ăn ngày một phát đạt hưng thịnh."
      },
      {
        "chinese": "置身湟川三峡，你可以同时欣赏到险峻雄伟的悬崖绝壁和深邃秀美的青山碧水，难怪这里被誉为“岭南诗画走廊”。",
        "pinyin": "Zhì shēn huáng chuān sān xiá, nǐ kě yǐ tóng shí xīn shǎng dào xiǎn jùn xióng wěi de xuán yá jué bì hé shēn suì xiù měi de qīng shān bì shuǐ, nán guài zhè lǐ bèi yù wèi \"lǐng nán shī huà zǒu láng\" .",
        "vietnamese": "Đặt chân đến Tam Hiệp Hoàng Xuyên, bạn có thể đồng thời chiêm ngưỡng những vách đá dựng đứng hiểm trở hùng vĩ cùng non xanh nước biếc sâu thẳm hữu tình, hèn chi nơi đây được ngợi ca là 'Hành lang thơ họa Lĩnh Nam'."
      },
      {
        "chinese": "为了抓住这个宝贵的工作机会，他宁可每天双城通勤。",
        "pinyin": "Wèi le zhuā zhù zhè gè bǎo guì de gōng zuò jī huì, tā níng kě měi tiān shuāng chéng tōng qín.",
        "vietnamese": "Để nắm bắt cơ hội việc làm vô giá này, anh ấy thà chấp nhận mỗi ngày đi đi về về vất vả giữa hai thành phố."
      },
      {
        "chinese": "母亲望着怀中脸烧得通红的孩子，心疼不已，宁可病都生在自己身上。",
        "pinyin": "Mǔ qīn wàng zhe huái zhōng liǎn shāo dé tōng hóng de hái zi, xīn téng bù yǐ, níng kě bìng dōu shēng zài zì jǐ shēn shàng.",
        "vietnamese": "Người mẹ ôm đứa con mặt mày sốt đỏ bừng trong lòng mà đứt từng khúc ruột, thà ước sao mọi đau đớn bệnh tật cứ trút hết lên tấm thân mình."
      },
      {
        "chinese": "如果贵公司无法保证按时交付，我们宁愿放弃此次合作。",
        "pinyin": "Rú guǒ guì gōng sī wú fǎ bǎo zhèng àn shí jiāo fù, wǒ men níng yuàn fàng qì cǐ cì hé zuò.",
        "vietnamese": "Nếu như quý công ty không thể cam kết bàn giao đúng tiến độ, chúng tôi thà hủy bỏ thương vụ hợp tác lần này."
      },
      {
        "chinese": "每当攻克一个技术难题后，他不喜和别人一起庆功，宁愿一个人暗自回味。",
        "pinyin": "Měi dāng gōng kè yī gè jì shù nán tí hòu, tā bù xǐ hé bié rén yī qǐ qìng gōng, níng yuàn yī gè rén àn zì huí wèi.",
        "vietnamese": "Mỗi khi chinh phục được một nút thắt kỹ thuật hóc búa, anh ấy không thích chè chén ăn mừng cùng đám đông, mà thà một mình lặng lẽ chiêm nghiệm niềm vui sâu lắng."
      },
      {
        "chinese": "我那时正为找房子发愁，碰巧有个同学租的两居室空出了一个房间，我就搬过去住了。",
        "pinyin": "Wǒ nà shí zhèng wèi zhǎo fáng zi fā chóu, pèng qiǎo yǒu gè tóng xué zū de liǎng jū shì kōng chū le yī gè fáng jiān, wǒ jiù bān guò qù zhù le.",
        "vietnamese": "Hồi đó tôi đang đau đầu vì chuyện tìm thuê nhà, vừa khéo có một người bạn cùng lớp thuê căn hộ hai phòng ngủ bị trống một phòng, thế là tôi dọn sang ở luôn."
      },
      {
        "chinese": "我刚买完东西准备回家，碰巧在商场门口遇见了多年不见的同窗，我们便去小酌了几杯，谈谈各自的经历。",
        "pinyin": "Wǒ gāng mǎi wán dōng xī zhǔn bèi huí jiā, pèng qiǎo zài shāng chǎng mén kǒu yù jiàn le duō nián bù jiàn de tóng chuāng, wǒ men biàn qù xiǎo zhuó le jǐ bēi, tán tán gè zì de jīng lì.",
        "vietnamese": "Tôi vừa sắm đồ xong chuẩn bị về nhà thì tình cờ chạm mặt người bạn học cũ bao năm không gặp ngay trước cửa trung tâm thương mại, thế là hai đứa rủ nhau đi nhâm nhi vài chén hàn huyên sự đời."
      },
      {
        "chinese": "台风早不来，晚不来，偏偏赶在这个时候来！航班取消了，我的旅游计划全泡汤了。",
        "pinyin": "Tái fēng zǎo bù lái, wǎn bù lái, piān piān gǎn zài zhè gè shí hòu lái! háng bān qǔ xiāo le, wǒ de lǚ yóu jì huà quán pào tāng le.",
        "vietnamese": "Cơn bão sớm chẳng đổ bộ, muộn không ập tới, cứ oái oăm đè đúng lúc này mà quét qua! Chuyến bay bị hủy, toàn bộ kế hoạch du lịch của tôi coi như tan thành mây khói."
      },
      {
        "chinese": "欣赏风景一般是用眼睛看，但东湖的设计者却偏偏要你用耳朵听景、用鼻子闻景。",
        "pinyin": "Xīn shǎng fēng jǐng yī bān shì yòng yǎn jīng kàn, dàn dōng hú de shè jì zhě què piān piān yào nǐ yòng ěr duǒ tīng jǐng, yòng bí zi wén jǐng.",
        "vietnamese": "Thưởng ngoạn cảnh sắc thông thường là dùng mắt ngắm, nhưng người thiết kế Đông Hồ lại cứ nhất quyết muốn bạn dùng đôi tai để lắng nghe và dùng khứu giác để hít hà phong cảnh."
      },
      {
        "chinese": "吃饭时有可口的餐食，睡觉时有香软的床榻，逛街时恰巧听到钟爱的乐曲，这些瞬间都足以让我感受到生活的美好。",
        "pinyin": "Chī fàn shí yǒu kě kǒu de cān shí, shuì jué shí yǒu xiāng ruǎn de chuáng tà, guàng jiē shí qià qiǎo tīng dào zhōng ài de lè qū, zhè xiē shùn jiān dōu zú yǐ ràng wǒ gǎn shòu dào shēng huó de měi hǎo.",
        "vietnamese": "Khi dùng bữa có đồ ăn hợp khẩu vị, lúc đi ngủ có chăn êm nệm ấm, khi dạo phố tình cờ nghe được khúc nhạc mình yêu thích, những khoảnh khắc ấy đã đủ khiến tôi cảm nhận được sự ngọt ngào của cuộc sống."
      },
      {
        "chinese": "因为“鱼”恰巧跟“余”字同音，所以年夜饭饭桌上一定有鱼，是希望“年年有余”的意思。",
        "pinyin": "Yīn wèi \"yú\" qià qiǎo gēn \"yú\" zì tóng yīn, suǒ yǐ nián yè fàn fàn zhuō shàng yī dìng yǒu yú, shì xī wàng \"nián nián yǒu yú\" de yì sī.",
        "vietnamese": "Vì chữ 'ngư' (cá) vừa khéo đồng âm với chữ 'dư' (dư dả), cho nên trên mâm cơm tất niên dứt khoát phải có món cá, ngụ ý cầu chúc 'năm năm có dư'."
      },
      {
        "chinese": "雪山海拔较高，游览过程中易产生高原反应，切记根据自身情况量力而行。",
        "pinyin": "Xuě shān hǎi bá jiào gāo, yóu lǎn guò chéng zhōng yì chǎn shēng gāo yuán fǎn yīng, qiè jì gēn jù zì shēn qíng kuàng liàng lì ér xíng.",
        "vietnamese": "Núi tuyết có độ cao lớn so với mặt nước biển, trong quá trình tham quan rất dễ bị sốc độ cao, nhất thiết phải lượng sức mình tùy theo thể trạng cá nhân."
      },
      {
        "chinese": "家中常用药应少而精，切不可盲目囤积大量药品，避免过期造成浪费。",
        "pinyin": "Jiā zhōng cháng yòng yào yīng shǎo ér jīng, qiè bù kě máng mù dùn jī dà liàng yào pǐn, bì miǎn guò qī zào chéng làng fèi.",
        "vietnamese": "Tủ thuốc gia đình chỉ nên trữ gọn và tinh, tuyệt đối chớ có tích trữ bừa bãi số lượng lớn thuốc men để tránh hết hạn gây lãng phí tốn kém."
      },
      {
        "chinese": "这家火锅店口碑极好，很多顾客情愿排队等一两个小时，也要在这里吃。",
        "pinyin": "Zhè jiā huǒ guō diàn kǒu bēi jí hǎo, hěn duō gù kè qíng yuàn pái duì děng yī liǎng gè xiǎo shí, yě yào zài zhè lǐ chī.",
        "vietnamese": "Quán lẩu này danh tiếng lẫy lừng, rất nhiều thực khách thà chịu khó xếp hàng ròng rã suốt một hai tiếng đồng hồ cũng quyết ăn cho bằng được."
      },
      {
        "chinese": "很多商家其实并不情愿动辄促销，但看到竞品价格一再跳水，自己也只能被迫参与价格战。",
        "pinyin": "Hěn duō shāng jiā qí shí bìng bù qíng yuàn dòng zhé cù xiāo, dàn kàn dào jìng pǐn jià gé yī zài tiào shuǐ, zì jǐ yě zhǐ néng bèi pò cān yǔ jià gé zhàn.",
        "vietnamese": "Nhiều chủ tiệm thực lòng chẳng hề muốn hơi một tí là tung khuyến mãi giảm giá, nhưng nhìn giá đối thủ liên tục lao dốc, bản thân đành cắn răng bị cuốn vào cuộc chiến phá giá."
      },
      {
        "chinese": "如果这则新闻的真实性得到确认，势必引起全社会的强烈反响。",
        "pinyin": "Rú guǒ zhè zé xīn wén de zhēn shí xìng dé dào què rèn, shì bì yǐn qǐ quán shè huì de qiáng liè fǎn xiǎng.",
        "vietnamese": "Nếu như tính xác thực của bản tin này được kiểm chứng, tất yếu sẽ dấy lên làn sóng phản ứng dữ dội trong toàn xã hội."
      },
      {
        "chinese": "如果这个关键技术问题得不到解决，公司的竞争力势必会受到影响。",
        "pinyin": "Rú guǒ zhè gè guān jiàn jì shù wèn tí dé bù dào jiě jué, gōng sī de jìng zhēng lì shì bì huì shòu dào yǐng xiǎng.",
        "vietnamese": "Nếu như nút thắt kỹ thuật then chốt này không được tháo gỡ dứt điểm, sức cạnh tranh của công ty tất yếu sẽ bị giáng một đòn nặng nề."
      },
      {
        "chinese": "前往景区的路上已堵得水泄不通，我们索性直接下车步行。",
        "pinyin": "Qián wǎng jǐng qū de lù shàng yǐ dǔ dé shuǐ xiè bù tōng, wǒ men suǒ xìng zhí jiē xià chē bù xíng.",
        "vietnamese": "Đường tiến vào khu danh thắng đã tắc nghẽn kẹt cứng như nêm, chúng tôi dứt khoát nhảy luôn xuống xe đi bộ cho nhanh."
      },
      {
        "chinese": "他考了几次都没通过，索性不考了。",
        "pinyin": "Tā kǎo le jǐ cì dōu méi tōng guò, suǒ xìng bù kǎo le.",
        "vietnamese": "Cậu ấy thi mấy lần liền đều trượt vỏ chuối, đâm ra nản lòng dứt khoát chẳng thèm thi thố gì nữa."
      },
      {
        "chinese": "我们为了这次竞赛准备了很长时间，可万万没有想到，组委会突然宣布比赛取消，而且没给出合理解释。",
        "pinyin": "Wǒ men wèi le zhè cì jìng sài zhǔn bèi le hěn zhǎng shí jiān, kě wàn wàn méi yǒu xiǎng dào, zǔ wěi huì tū rán xuān bù bǐ sài qǔ xiāo, ér qiě méi gěi chū hé lǐ jiě shì.",
        "vietnamese": "Chúng tôi đã dồn bao tâm sức chuẩn bị cho hội thi lần này suốt một thời gian dài, thế nhưng muôn vạn lần không ngờ tới là ban tổ chức lại đùng một cái thông báo hủy giải mà chẳng buồn đưa ra lời giải thích thỏa đáng."
      },
      {
        "chinese": "事实表明，代言人与品牌的匹配程度对商品销售有着重要影响，企业万万不可轻视。",
        "pinyin": "Shì shí biǎo míng, dài yán rén yǔ pǐn pái de pǐ pèi chéng dù duì shāng pǐn xiāo shòu yǒu zhe zhòng yào yǐng xiǎng, qǐ yè wàn wàn bù kě qīng shì.",
        "vietnamese": "Thực tiễn đã chứng minh rằng mức độ tương thích giữa đại sứ hình ảnh và thương hiệu có tác động sống còn tới doanh số sản phẩm, doanh nghiệp muôn vàn chớ nên xem nhẹ."
      },
      {
        "chinese": "文章本身不好，安上一个好题目也无济于事；但文章好而题目不好，就未免令人惋惜了。",
        "pinyin": "Wén zhāng běn shēn bù hǎo, ān shàng yī gè hǎo tí mù yě wú jì yú shì; dàn wén zhāng hǎo ér tí mù bù hǎo, jiù wèi miǎn lìng rén wǎn xī le.",
        "vietnamese": "Bản thân bài viết đã dở tệ thì có đặt một cái tít kêu như chuông cũng chẳng ích gì; thế nhưng bài viết xuất sắc mà tiêu đề lại nhạt nhòa thì e rằng thật đáng tiếc nuối biết bao."
      },
      {
        "chinese": "没有取得理想结果，他未免有些沮丧，此时最需要的是鼓励和安慰。",
        "pinyin": "Méi yǒu qǔ dé lǐ xiǎng jié guǒ, tā wèi miǎn yǒu xiē jǔ sàng, cǐ shí zuì xū yào de shì gǔ lì hé ān wèi.",
        "vietnamese": "Không đạt được kết quả như kỳ vọng, anh ấy khó tránh khỏi cảm giác chán nản muộn phiền, lúc này điều cần thiết nhất là những lời động viên và an ủi vỗ về."
      },
      {
        "chinese": "演出期间，请各位观众务必将手机调至静音，以免影响他人。",
        "pinyin": "Yǎn chū qī jiān, qǐng gè wèi guān zhòng wù bì jiāng shǒu jī diào zhì jìng yīn, yǐ miǎn yǐng xiǎng tā rén.",
        "vietnamese": "Trong suốt buổi biểu diễn, kính đề nghị quý khán giả nhất định phải chuyển điện thoại sang chế độ rung hoặc im lặng để tránh làm phiền tới người xung quanh."
      },
      {
        "chinese": "因活动现场座位有限，请务必提前报名，额满即止。",
        "pinyin": "Yīn huó dòng xiàn chǎng zuò wèi yǒu xiàn, qǐng wù bì tí qián bào míng, é mǎn jí zhǐ.",
        "vietnamese": "Do số lượng chỗ ngồi tại hội trường có hạn, kính mong quý vị nhất thiết phải đăng ký trước, đủ số lượng ban tổ chức sẽ khóa sổ."
      },
      {
        "chinese": "他急忙把生病的孩子送去医院治疗，医生检查后说：“这孩子幸好送得及时，迟一点就没救了。”",
        "pinyin": "Tā jí máng bǎ shēng bìng de hái zi sòng qù yī yuàn zhì liáo, yī shēng jiǎn chá hòu shuō: \"zhè hái zi xìng hǎo sòng dé jí shí, chí yī diǎn jiù méi jiù le.\"",
        "vietnamese": "Anh ấy hối hả đưa đứa trẻ ốm nặng tới bệnh viện cấp cứu, bác sĩ khám xong liền bảo: 'Đứa nhỏ này may mà đưa tới kịp thời, chỉ chậm chút nữa thôi là vô phương cứu chữa'."
      },
      {
        "chinese": "我听见他的话后，吃惊地朝四周看了看，幸好附近无人，这才放了心。",
        "pinyin": "Wǒ tīng jiàn tā de huà hòu, chī jīng dì cháo sì zhōu kàn le kàn, xìng hǎo fù jìn wú rén, zhè cái fàng le xīn.",
        "vietnamese": "Nghe lời anh ấy nói, tôi giật mình đưa mắt đảo quanh bốn phía, may nhờ xung quanh không có bóng người, lúc ấy mới thở phào trút bỏ nỗi lo."
      },
      {
        "chinese": "今天的活动我幸亏没去凑热闹，去了也是人挤人，什么也看不见。",
        "pinyin": "Jīn tiān de huó dòng wǒ xìng kuī méi qù còu rè nào, qù le yě shì rén jǐ rén, shén me yě kàn bù jiàn.",
        "vietnamese": "Sự kiện hôm nay may phước là tôi không đi chen lấn hóng hớt, có đi thì cũng người nêm như cối xay, chẳng xem được trò trống gì."
      },
      {
        "chinese": "刘女士不小心把手提包落在了出租车上，幸亏遇到林师傅这样拾金不昧的司机，主动把包交还给了她。",
        "pinyin": "Liú nǚ shì bù xiǎo xīn bǎ shǒu tí bāo luò zài le chū zū chē shàng, xìng kuī yù dào lín shī fù zhè yàng shí jīn bù mèi de sī jī, zhǔ dòng bǎ bāo jiāo hái gěi le tā.",
        "vietnamese": "Chị Lưu sơ ý bỏ quên túi xách trên xe taxi, may phước gặp được người tài xế thật thà tốt bụng như bác Lâm, đã chủ động liên hệ trao trả lại nguyên vẹn chiếc túi cho chị."
      },
      {
        "chinese": "乌云遮不住太阳，正义终究会战胜邪恶。",
        "pinyin": "Wū yún zhē bù zhù tài yáng, zhèng yì zhōng jiū huì zhàn shèng xié è.",
        "vietnamese": "Mây đen không thể che nổi ánh mặt trời chói lọi, chính nghĩa rốt cuộc trước sau vẫn sẽ chiến thắng tà ác."
      },
      {
        "chinese": "漂泊的游子，无论在外如何坚强，回到家也终究是个孩子。",
        "pinyin": "Piāo pō de yóu zi, wú lùn zài wài rú hé jiān qiáng, huí dào jiā yě zhōng jiū shì gè hái zi.",
        "vietnamese": "Những đứa con tha hương cầu thực, dẫu bươn chải ngoài đời kiên cường bản lĩnh đến đâu, khi trở về bên mái ấm gia đình rốt cuộc vẫn chỉ là một đứa trẻ thơ."
      },
      {
        "chinese": "我要去海南旅游了，你最近不也休假吗，何不一起去？",
        "pinyin": "Wǒ yào qù hǎi nán lǚ yóu le, nǐ zuì jìn bù yě xiū jiǎ ma, hé bù yī qǐ qù?",
        "vietnamese": "Tớ chuẩn bị đi du lịch đảo Hải Nam đây, dạo này cậu cũng đang nghỉ phép đó thôi, sao chúng mình không cùng đi cho vui?"
      },
      {
        "chinese": "在这样一个大城市的小区，雨后还能听到蛙声，真的令人欣喜。我们何不把新居叫做“听蛙楼”？",
        "pinyin": "Zài zhè yàng yī gè dà chéng shì de xiǎo qū, yǔ hòu hái néng tīng dào wā shēng, zhēn de lìng rén xīn xǐ. wǒ men hé bù bǎ xīn jū jiào zuò \"tīng wā lóu\" ?",
        "vietnamese": "Giữa khu chung cư của một đại đô thị phồn hoa như thế này mà sau cơn mưa vẫn lắng nghe được tiếng ếch kêu râm ran, thật khiến lòng người ngập tràn thi vị. Sao chúng ta không đặt tên cho tổ ấm mới này là 'Thính Oa Lâu'?"
      },
      {
        "chinese": "她一向被众星捧月，何尝受过这样的冷遇，心中气愤不已。",
        "pinyin": "Tā yī xiàng bèi zhòng xīng pěng yuè, hé cháng shòu guò zhè yàng de lěng yù, xīn zhōng qì fèn bù yǐ.",
        "vietnamese": "Cô ấy từ xưa tới nay luôn được người đời tung hô chiều chuộng như sao vây quanh trăng, nào đã từng nếm qua sự ghẻ lạnh hờ hững như thế này bao giờ, đâm ra trong lòng tức tối không thôi."
      },
      {
        "chinese": "在逆境下不气馁、不后悔，这才是强者该有的逻辑。体育比赛是这样，其他事情何尝不也是如此呢？",
        "pinyin": "Zài nì jìng xià bù qì něi, bù hòu huǐ, zhè cái shì qiáng zhě gāi yǒu de luó jí. tǐ yù bǐ sài shì zhè yàng, qí tā shì qíng hé cháng bù yě shì rú cǐ ne?",
        "vietnamese": "Trước nghịch cảnh không nản lòng thoái chí, không ân hận thở than, đó mới chính là bản lĩnh đích thực của bậc cường giả. Thi đấu thể thao là như thế, và vạn sự trên đời nào có khác gì đâu?"
      },
      {
        "chinese": "你60岁的人了，每个月好几千的退休金，何苦再出来打零工？",
        "pinyin": "Nǐ 6 0 suì de rén le, měi gè yuè hǎo jǐ qiān de tuì xiū jīn, hé kǔ zài chū lái dǎ líng gōng?",
        "vietnamese": "Bác đã ngoài 60 tuổi rồi, mỗi tháng đều đặn nhận mấy nghìn tệ lương hưu, hà tất việc gì phải cực thân ra ngoài làm thêm làm mướn nữa làm chi?"
      },
      {
        "chinese": "小张刚毕业，社会经验不足，犯点错误也难免，你何苦为难她呢？",
        "pinyin": "Xiǎo zhāng gāng bì yè, shè huì jīng yàn bù zú, fàn diǎn cuò wù yě nán miǎn, nǐ hé kǔ wèi nán tā ne?",
        "vietnamese": "Tiểu Trương mới ra trường va vấp xã hội chưa nhiều, phạm chút lỗi lầm cũng là điều khó tránh, cậu việc gì phải làm khó con bé đến mức ấy chứ?"
      }
    ]
  },
  {
    "id": "hsk79-g-18",
    "order": 18,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Phó từ phán đoán khẳng định văn ngôn: 乃 (nǎi - chính là, quả là)",
    "titleZh": "乃",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "判断副词",
    "structure": "Chủ ngữ + 乃 + Danh từ / Cụm vị ngữ",
    "explanationVi": "'乃' (nǎi) là hư từ gốc Hán cổ thay thế cho '是' (chính là, quả đúng là) hoặc dùng làm đại từ 'đó là'. Thường dùng trong các câu đúc kết mang tính châm ngôn, ca ngợi nghệ thuật hoặc câu khẩu ngữ quen thuộc ('真乃佳作' - quả là tuyệt tác; '此乃天机' - đây là thiên cơ).",
    "tips": "Xuất hiện nhiều trong các câu trích dẫn văn học cổ, lời bình phẩm thư họa và ngữ cảnh đối thoại uyên thâm.",
    "examples": [
      {
        "chinese": "该片剧情严谨，全员演技在线，真乃一部不可多得的佳作。",
        "pinyin": "Gāi piàn jù qíng yán jǐn, quán yuán yǎn jì zài xiàn, zhēn nǎi yī bù bù kě duō dé de jiā zuò.",
        "vietnamese": "Cốt truyện của bộ phim này vô cùng chặt chẽ, toàn bộ dàn diễn viên đều diễn xuất đỉnh cao, quả thực xứng danh là một tuyệt phẩm hiếm có khó tìm."
      },
      {
        "chinese": "我问他是怎么知道的，他神秘地说：“此乃天机，不可泄露。”",
        "pinyin": "Wǒ wèn tā shì zěn me zhī dào de, tā shén mì dì shuō: \"cǐ nǎi tiān jī, bù kě xiè lù.\"",
        "vietnamese": "Tôi gặng hỏi làm sao anh ta biết được tin ấy, anh ta làm vẻ huyền bí cười bảo: 'Đây chính là thiên cơ, không thể tiết lộ'."
      }
    ]
  },
  {
    "id": "hsk79-g-19",
    "order": 19,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Giới từ khẩu ngữ khởi điểm không gian & thời gian: 打 (dǎ - từ, kể từ)",
    "titleZh": "打",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "引出时间、处所",
    "structure": "打 + Mốc thời gian / Nơi chốn + Động từ",
    "explanationVi": "'打' làm giới từ tương đương với '从' (từ, xuất phát từ), mang đậm sắc thái khẩu ngữ miền Bắc và phương ngữ đời sống ('打这天起' - kể từ ngày này trở đi; '打皇宫里流出来' - từ trong hoàng cung tuồn ra).",
    "tips": "Tránh nhầm với động từ 'đánh' (打); khi làm giới từ, sau '打' luôn là danh từ thời gian hoặc địa điểm.",
    "examples": [
      {
        "chinese": "打这天起，小赵替父亲担起了全家的重担。",
        "pinyin": "Dǎ zhè tiān qǐ, xiǎo zhào tì fù qīn dān qǐ le quán jiā de zhòng dān.",
        "vietnamese": "Kể từ ngày hôm ấy trở đi, Tiểu Triệu đã thay cha gánh vác toàn bộ gánh nặng mưu sinh của cả gia đình."
      },
      {
        "chinese": "他悄声说这可是件宝贝，打皇宫里流出来的。",
        "pinyin": "Tā qiāo shēng shuō zhè kě shì jiàn bǎo bèi, dǎ huáng gōng lǐ liú chū lái de.",
        "vietnamese": "Hắn ta hạ giọng thì thầm bảo đây đích thị là món bảo vật gia truyền, tuồn từ tận trong hoàng cung ra ngoài đấy."
      }
    ]
  },
  {
    "id": "hsk79-g-20",
    "order": 20,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Giới từ dẫn xuất bối cảnh & chủ đề: 当着 (trước mặt), 就 (về, đối với)",
    "titleZh": "当着、就6",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "引出对象",
    "structure": "当着 + Ai / Mọi người + Động từ  ||  就 + Vấn đề / Chủ đề + Động từ thảo luận",
    "explanationVi": "'当着' (dāngzhe) biểu thị hành động diễn ra công khai ngay trước mặt đối phương hoặc chốn đông người; '就' làm giới từ tương đương '关于, 对于' dẫn xuất chủ đề, tranh chấp hoặc đề tài thảo luận trong hội nghị cấp cao.",
    "tips": "Trong văn bản ngoại giao: '就...交换了意见' (đã trao đổi ý kiến về vấn đề...).",
    "examples": [
      {
        "chinese": "当着这么多人，那人只好把话咽了下去。",
        "pinyin": "Dāng zhe zhè me duō rén, nà rén zhǐ hǎo bǎ huà yàn le xià qù.",
        "vietnamese": "Trước mặt bao nhiêu con người đang chăm chú nhìn vào, người nọ đành nuốt ngược lời định nói vào trong họng."
      },
      {
        "chinese": "大家聊得正高兴，她却当着大家的面掉下泪来。",
        "pinyin": "Dà jiā liáo dé zhèng gāo xīng, tā què dāng zhe dà jiā de miàn diào xià lèi lái.",
        "vietnamese": "Mọi người đang trò chuyện vui vẻ rôm rả, thế mà cô ấy lại rơi nước mắt ngay trước mặt bàn dân thiên hạ."
      },
      {
        "chinese": "论坛期间，各国专家就共同感兴趣的专题进行了探讨和交流。",
        "pinyin": "Lùn tán qī jiān, gè guó zhuān jiā jiù gòng tóng gǎn xīng qù de zhuān tí jìn xíng le tàn tǎo hé jiāo liú.",
        "vietnamese": "Trong thời gian diễn ra diễn đàn, các chuyên gia từ nhiều nước đã tiến hành trao đổi và thảo luận sâu rộng về những chuyên đề cùng quan tâm."
      },
      {
        "chinese": "就离婚后的财产分割问题，双方产生了激烈的争论。",
        "pinyin": "Jiù lí hūn hòu de cái chǎn fēn gē wèn tí, shuāng fāng chǎn shēng le jī liè de zhēng lùn.",
        "vietnamese": "Xung quanh vấn đề phân chia tài sản sau khi ly hôn, đôi bên đã nảy sinh cuộc tranh cãi vô cùng gay gắt."
      }
    ]
  },
  {
    "id": "hsk79-g-21",
    "order": 21,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Hệ thống giới từ căn cứ pháp lý & tiến trình: 本着, 基于, 鉴于, 经, 依",
    "titleZh": "本着、基于、鉴于1、经、依",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "引出凭借、依据",
    "structure": "本着 / 基于 / 鉴于 / 经 / 依 + Căn cứ / Nguyên tắc + Vị ngữ",
    "explanationVi": "Chùm giới từ căn cứ hành chính: '本着' (dựa trên tinh thần/nguyên tắc); '基于' (dựa trên cơ sở thực tiễn/sự kiện có thật); '鉴于' (xét thấy tình hình/xét đến thành tích); '经' (qua quá trình điều tra/nghiên cứu/phê chuẩn: 经批准, 经研究, 经诊治); '依' (theo, căn cứ vào ý kiến: 依我看 - theo tôi thấy).",
    "tips": "Mở đầu các quyết định khen thưởng, kỷ luật, bổ nhiệm công chức luôn bắt đầu bằng '鉴于...' hoặc '经研究决定...'.",
    "examples": [
      {
        "chinese": "我们本着“友谊第一，比赛第二”的精神，充分享受比赛的乐趣。",
        "pinyin": "Wǒ men běn zhe \"yǒu yì dì yī, bǐ sài dì èr\" de jīng shén, chōng fēn xiǎng shòu bǐ sài de lè qù.",
        "vietnamese": "Chúng tôi trên tinh thần 'hữu nghị là trên hết, thi đấu là thứ hai' đã tận hưởng trọn vẹn niềm vui của cuộc tranh tài."
      },
      {
        "chinese": "虽然我和小孙素日关系更近，但本着实事求是的态度，我还是把票投给了小魏。",
        "pinyin": "Suī rán wǒ hé xiǎo sūn sù rì guān xì gèng jìn, dàn běn zhe shí shì qiú shì de tài dù, wǒ hái shì bǎ piào tóu gěi le xiǎo wèi.",
        "vietnamese": "Tuy thường ngày tôi và Tiểu Tôn có mối quan hệ thân thiết hơn, nhưng trên tinh thần khách quan tôn trọng thực tế, tôi vẫn bỏ lá phiếu bầu cho Tiểu Ngụy."
      },
      {
        "chinese": "基于调研的结果，我们精准定位了产品的目标市场。",
        "pinyin": "Jī yú diào yán de jié guǒ, wǒ men jīng zhǔn dìng wèi le chǎn pǐn de mù biāo shì chǎng.",
        "vietnamese": "Dựa trên các kết quả khảo sát thực địa, chúng tôi đã định vị chuẩn xác phân khúc thị trường mục tiêu cho sản phẩm."
      },
      {
        "chinese": "这部电影是基于真实事件改编而成的。",
        "pinyin": "Zhè bù diàn yǐng shì jī yú zhēn shí shì jiàn gǎi biān ér chéng de.",
        "vietnamese": "Bộ phim điện ảnh này được phóng tác và cải biên dựa trên những sự kiện có thật trong đời thực."
      },
      {
        "chinese": "鉴于你在此次项目中的突出表现，公司决定对你予以嘉奖。",
        "pinyin": "Jiàn yú nǐ zài cǐ cì xiàng mù zhōng de tū chū biǎo xiàn, gōng sī jué dìng duì nǐ yǔ yǐ jiā jiǎng.",
        "vietnamese": "Xét thấy những cống hiến và màn thể hiện xuất sắc của bạn trong dự án lần này, ban giám đốc công ty quyết định trao tặng bằng khen và phần thưởng cho bạn."
      },
      {
        "chinese": "鉴于市场需求和用户偏好的不断变化，产品设计应适时转变策略，适应市场发展。",
        "pinyin": "Jiàn yú shì chǎng xū qiú hé yòng hù piān hǎo de bù duàn biàn huà, chǎn pǐn shè jì yīng shì shí zhuǎn biàn cè lüè, shì yīng shì chǎng fā zhǎn.",
        "vietnamese": "Xét đến nhu cầu thị trường và thị hiếu người dùng không ngừng biến đổi, việc thiết kế sản phẩm cần kịp thời chuyển dịch chiến lược để thích ứng với xu thế."
      },
      {
        "chinese": "决议成文程序严格，须经全体会议或代表大会讨论通过才能生效。",
        "pinyin": "Jué yì chéng wén chéng xù yán gé, xū jīng quán tǐ huì yì huò dài biǎo dà huì tǎo lùn tōng guò cái néng shēng xiào.",
        "vietnamese": "Quy trình ban hành nghị quyết được thực hiện hết sức nghiêm ngặt, bắt buộc phải qua phiên họp toàn thể hoặc đại hội đại biểu thảo luận thông qua thì mới có hiệu lực thi hành."
      },
      {
        "chinese": "经医生细心诊治，哥哥身体状况日渐好转，已经可以自行下床行走了。",
        "pinyin": "Jīng yī shēng xì xīn zhěn zhì, gē gē shēn tǐ zhuàng kuàng rì jiàn hǎo zhuǎn, yǐ jīng kě yǐ zì xíng xià chuáng xíng zǒu le.",
        "vietnamese": "Qua bàn tay chẩn trị tận tình của các bác sĩ, tình trạng sức khỏe của anh trai ngày một khởi sắc, nay đã có thể tự mình xuống giường tản bộ."
      },
      {
        "chinese": "经研究，公司决定把这一重要的新款产品交由你全权负责。",
        "pinyin": "Jīng yán jiū, gōng sī jué dìng bǎ zhè yī zhòng yào de xīn kuǎn chǎn pǐn jiāo yóu nǐ quán quán fù zé.",
        "vietnamese": "Sau khi nghiên cứu kỹ lưỡng, ban lãnh đạo công ty quyết định giao toàn quyền phụ trách dòng sản phẩm mới quan trọng này cho bạn."
      },
      {
        "chinese": "一些无良的鉴定专家不依市场价值而是依主观价值评定东西等级的行为，严重扰乱了市场秩序。",
        "pinyin": "Yī xiē wú liáng de jiàn dìng zhuān jiā bù yī shì chǎng jià zhí ér shì yī zhǔ guān jià zhí píng dìng dōng xī děng jí de xíng wèi, yán zhòng rǎo luàn le shì chǎng zhì xù.",
        "vietnamese": "Hành vi của một số chuyên gia giám định vô lương tâm không dựa theo giá trị thị trường mà lại dựa vào cảm tính chủ quan để định cấp bậc món đồ đã làm lũng đoạn nghiêm trọng trật tự thị trường."
      },
      {
        "chinese": "依我看，你在这件事的处理上有失公允。",
        "pinyin": "Yī wǒ kàn, nǐ zài zhè jiàn shì de chù lǐ shàng yǒu shī gōng yǔn.",
        "vietnamese": "Theo như tôi thấy, trong cách xử lý việc này bạn đã có phần thiếu công tâm thỏa đáng."
      }
    ]
  },
  {
    "id": "hsk79-g-22",
    "order": 22,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Liên từ nối phân câu giả thiết, bổ sung & dự phòng: 况且, 免得, 若, 倘若, 以防, 鉴于",
    "titleZh": "鉴于2、况且、免得、若、倘若、以防",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "连接分句或句子",
    "structure": "Phân câu 1，况且 / 免得 / 若 / 倘若 / 以防 / 鉴于 + Phân câu 2",
    "explanationVi": "Liên từ liên kết phân câu logic: '鉴于' (xét thấy lý do ở vế trước); '况且' (hơn nữa, vả lại - bổ sung thêm một lý do có sức nặng); '免得' (để tránh, kẻo lại sinh chuyện); '若' / '倘若' (nếu, giả sử như - văn viết thanh tao); '以防' (nhằm đề phòng, phòng ngừa rủi ro xấu).",
    "tips": "'以防' thường đứng trước kết quả tiêu cực tiềm ẩn (以防上当受骗 - để tránh bị lừa).",
    "examples": [
      {
        "chinese": "鉴于近期设备故障频发，技术部门决定对相关设备进行全面维护。",
        "pinyin": "Jiàn yú jìn qī shè bèi gù zhàng pín fā, jì shù bù mén jué dìng duì xiāng guān shè bèi jìn xíng quán miàn wéi hù.",
        "vietnamese": "Xét thấy thời gian gần đây máy móc liên tục xảy ra sự cố hỏng hóc, phòng kỹ thuật đã quyết định tiến hành bảo dưỡng toàn diện các trang thiết bị liên quan."
      },
      {
        "chinese": "鉴于被告人严某主动上缴违法所得，认罪态度良好，可酌情从轻处罚。",
        "pinyin": "Jiàn yú bèi gào rén yán mǒu zhǔ dòng shàng jiǎo wéi fǎ suǒ dé, rèn zuì tài dù liáng hǎo, kě zhuó qíng cóng qīng chù fá.",
        "vietnamese": "Xét thấy bị cáo Nghiêm mỗ đã chủ động nộp lại toàn bộ số tiền phi pháp thu lợi bất chính, thái độ nhận tội thành khẩn, nên có thể châm chước giảm nhẹ hình phạt."
      },
      {
        "chinese": "你们的方案非常详细，况且已经得到了业内专家的肯定，相信实施起来不会有什么问题。",
        "pinyin": "Nǐ men de fāng àn fēi cháng xiáng xì, kuàng qiě yǐ jīng dé dào le yè nèi zhuān jiā de kěn dìng, xiāng xìn shí shī qǐ lái bù huì yǒu shén me wèn tí.",
        "vietnamese": "Phương án của các bạn vô cùng chi tiết, vả lại đã nhận được sự thẩm định đồng thuận của các chuyên gia đầu ngành, tin rằng khi triển khai thực tế sẽ không gặp trở ngại gì."
      },
      {
        "chinese": "要告别近二十年的舞台生涯，她真的十分不舍，况且，隔行如隔山，不跳舞她又能改行做些什么呢？",
        "pinyin": "Yào gào bié jìn èr shí nián de wǔ tái shēng yá, tā zhēn de shí fēn bù shě, kuàng qiě, gé xíng rú gé shān, bù tiào wǔ tā yòu néng gǎi xíng zuò xiē shén me ne?",
        "vietnamese": "Phải giã từ sự nghiệp múa trên sân khấu gần 20 năm gắn bó, lòng cô thực sự muôn phần luyến tiếc, vả lại cách ngành như cách núi, nếu không múa nữa thì cô biết đổi nghề làm gì đây?"
      },
      {
        "chinese": "有缘无缘不可强求，免得徒增烦恼。",
        "pinyin": "Yǒu yuán wú yuán bù kě qiáng qiú, miǎn dé tú zēng fán nǎo.",
        "vietnamese": "Duyên đến duyên đi là lẽ tự nhiên không thể cưỡng cầu, buông bỏ cho thanh thản để tránh chuốc thêm muộn phiền sầu não."
      },
      {
        "chinese": "去往一个陌生的国家或地区，须了解当地的治安环境、文化禁忌，免得招来麻烦。",
        "pinyin": "Qù wǎng yī gè mò shēng de guó jiā huò dì qū, xū le jiě dāng dì de zhì ān huán jìng, wén huà jìn jì, miǎn dé zhāo lái má fán.",
        "vietnamese": "Đặt chân đến một quốc gia hay vùng miền xa lạ, cần phải tìm hiểu kỹ tình hình an ninh và các điều kiêng kỵ văn hóa bản địa, kẻo lại rước họa vào thân."
      },
      {
        "chinese": "事情要是能顺利解决最好，若不行，就得另寻其他门路了。",
        "pinyin": "Shì qíng yào shì néng shùn lì jiě jué zuì hǎo, ruò bù xíng, jiù dé lìng xún qí tā mén lù le.",
        "vietnamese": "Sự việc nếu giải quyết êm xuôi được là tốt nhất, bằng như không xong, ta buộc phải tính kế tìm cửa khác."
      },
      {
        "chinese": "若是购买的产品有任何质量问题，消费者可在七天之内无理由退换。",
        "pinyin": "Ruò shì gòu mǎi de chǎn pǐn yǒu rèn hé zhì liàng wèn tí, xiāo fèi zhě kě zài qī tiān zhī nèi wú lǐ yóu tuì huàn.",
        "vietnamese": "Nếu như sản phẩm mua về có bất kỳ lỗi chất lượng nào, người tiêu dùng hoàn toàn có quyền đổi trả vô điều kiện trong vòng 7 ngày."
      },
      {
        "chinese": "倘若一开始她就懂得精打细算，日子也不会过得这么捉襟见肘了。",
        "pinyin": "Tǎng ruò yī kāi shǐ tā jiù dǒng dé jīng dǎ xì suàn, rì zi yě bù huì guò dé zhè me zhuō jīn jiàn zhǒu le.",
        "vietnamese": "Nếu như ngay từ đầu cô ấy biết chi tiêu vén khéo căn cơ, cuộc sống gia đình đâu đến nỗi rơi vào cảnh giật gấu vá vai túng quẫn thế này."
      },
      {
        "chinese": "我现在已经不想再听你说什么豪言壮语了。倘若五年后你能混出点名堂，就当我今日有眼不识泰山。",
        "pinyin": "Wǒ xiàn zài yǐ jīng bù xiǎng zài tīng nǐ shuō shén me háo yán zhuàng yǔ le. tǎng ruò wǔ nián hòu nǐ néng hùn chū diǎn míng táng, jiù dāng wǒ jīn rì yǒu yǎn bù shí tài shān.",
        "vietnamese": "Giờ đây tôi chẳng còn hứng thú nghe những lời đao to búa lớn của anh nữa. Nếu như 5 năm sau anh có thể làm nên công trạng rạng danh, thì coi như hôm nay mắt tôi có tròng mà như mù không thấy thái sơn."
      },
      {
        "chinese": "切莫轻易向陌生人转账汇款，以防上当受骗。",
        "pinyin": "Qiè mò qīng yì xiàng mò shēng rén zhuǎn zhàng huì kuǎn, yǐ fáng shàng dāng shòu piàn.",
        "vietnamese": "Tuyệt đối chớ có nhẹ dạ chuyển khoản tiền bạc cho người lạ, nhằm đề phòng bị sập bẫy lừa đảo."
      },
      {
        "chinese": "这次安全事故造成的惨烈后果，希望各位引以为戒，以防类似的悲剧再度发生。",
        "pinyin": "Zhè cì ān quán shì gù zào chéng de cǎn liè hòu guǒ, xī wàng gè wèi yǐn yǐ wèi jiè, yǐ fáng lèi shì de bēi jù zài dù fā shēng.",
        "vietnamese": "Hậu quả thảm khốc do vụ tai nạn lao động lần này gây ra, mong toàn thể mọi người lấy đó làm bài học răn mình để ngăn ngừa thảm kịch tương tự tái diễn."
      }
    ]
  },
  {
    "id": "hsk79-g-23",
    "order": 23,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Liên từ tăng tiến & song hành trang trọng: 加之, 乃至, 且",
    "titleZh": "加之、乃至、且",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "连接词或词组以及分句或句子",
    "structure": "A，加之 B，使得...  ||  A，乃至 B  ||  A 且 B",
    "explanationVi": "'加之' (thêm vào đó, cộng thêm - nêu lý do phụ trợ đẩy nhanh kết quả); '乃至' (cho đến, thậm chí đến mức - nối các vế tăng tiến theo cấp số nhân: 数月乃至一年); '且' (và, hơn nữa - nối hai tính từ hoặc phân câu pháp lý: 吊销驾照且终身禁驾).",
    "tips": "'乃至' biểu thị mức độ cực hạn cao hơn nhiều so với '甚至'.",
    "examples": [
      {
        "chinese": "空气湿闷，加之窗外嘈杂不已，使得她彻夜未眠。",
        "pinyin": "Kōng qì shī mèn, jiā zhī chuāng wài cáo zá bù yǐ, shǐ dé tā chè yè wèi mián.",
        "vietnamese": "Không khí oi bức ngột ngạt, cộng thêm tiếng ồn ào inh ỏi ngoài cửa sổ, khiến cô ấy trằn trọc suốt đêm không chợp mắt nổi."
      },
      {
        "chinese": "他出众的能力加之丰富的工作经验是他职位迅速晋升的关键所在。",
        "pinyin": "Tā chū zhòng de néng lì jiā zhī fēng fù de gōng zuò jīng yàn shì tā zhí wèi xùn sù jìn shēng de guān jiàn suǒ zài.",
        "vietnamese": "Năng lực xuất chúng cộng thêm bề dày kinh nghiệm thực chiến chính là chìa khóa vàng giúp anh thăng tiến thần tốc trong sự nghiệp."
      },
      {
        "chinese": "这件衣服的刺绣工艺异常复杂，单是绣一朵花就需要花费数月乃至一年的时间。",
        "pinyin": "Zhè jiàn yī fú de cì xiù gōng yì yì cháng fù zá, dān shì xiù yī duǒ huā jiù xū yào huā fèi shù yuè nǎi zhì yī nián de shí jiān.",
        "vietnamese": "Kỹ thuật thêu thùa trên chiếc áo này vô cùng cầu kỳ tinh xảo, chỉ riêng thêu một đóa hoa thôi đã ngốn mất vài tháng trời thậm chí cả năm ròng."
      },
      {
        "chinese": "我被他对文学的热爱和执着深深地打动了，乃至我回去之后还不能平静。",
        "pinyin": "Wǒ bèi tā duì wén xué de rè ài hé zhí zhe shēn shēn dì dǎ dòng le, nǎi zhì wǒ huí qù zhī hòu hái bù néng píng jìng.",
        "vietnamese": "Tôi bị lòng đam mê và sự kiên trì cháy bỏng của ông dành cho văn chương làm lay động sâu sắc, đến mức sau khi trở về nhà tâm trí tôi vẫn bồi hồi khôn nguôi."
      },
      {
        "chinese": "受欢迎且传播力强的文章，在选题策划方面一定高出一筹。",
        "pinyin": "Shòu huān yíng qiě chuán bō lì qiáng de wén zhāng, zài xuǎn tí cè huà fāng miàn yī dìng gāo chū yī chóu.",
        "vietnamese": "Một bài viết vừa được công chúng đón nhận nồng nhiệt lại vừa có sức lan tỏa mạnh mẽ thì chắc chắn khâu lên ý tưởng chọn đề tài phải cao tay hơn hẳn một bậc."
      },
      {
        "chinese": "醉酒驾车造成他人死亡的驾驶员被当场吊销驾照，且终身不予重新申请。",
        "pinyin": "Zuì jiǔ jià chē zào chéng tā rén sǐ wáng de jià shǐ yuán bèi dāng chǎng diào xiāo jià zhào, qiě zhōng shēn bù yǔ zhòng xīn shēn qǐng.",
        "vietnamese": "Tài xế say rượu lái xe làm chết người bị tước bằng lái ngay tại chỗ, hơn nữa còn bị cấm vĩnh viễn không bao giờ được cấp lại bằng."
      }
    ]
  },
  {
    "id": "hsk79-g-24",
    "order": 24,
    "category": "cau-tu-tu-loai",
    "categoryName": "Hình vị & Từ loại cao cấp",
    "categoryIcon": "🔬",
    "titleVi": "Trợ từ ngữ khí văn ngôn cổ điển: 罢了, 也罢, 矣",
    "titleZh": "罢了、也罢、矣",
    "grammarType": "词类",
    "categoryType": "",
    "grammarDetail": "语气助词",
    "structure": "Cuối câu + 罢了 / 也罢 / 矣",
    "explanationVi": "Trợ từ sắc thái biểu cảm đậm chất Hán học: '罢了' (mà thôi, chẳng qua chỉ là); '也罢' (cũng được, đành vậy / A也好B也罢); '矣' (yǐ - trợ từ cảm thán văn ngôn tương đương 了: '足矣' - đủ rồi vậy; '仰慕久矣' - ngưỡng mộ đã lâu năm vậy).",
    "tips": "Câu danh ngôn kết thúc bằng '足矣' (được một tri kỷ trên đời thế là đủ mãn nguyện rồi).",
    "examples": [
      {
        "chinese": "他很谦虚地将自己的成功归结为运气好罢了。",
        "pinyin": "Tā hěn qiān xū dì jiāng zì jǐ de chéng gōng guī jié wèi yùn qì hǎo bà le.",
        "vietnamese": "Anh ấy rất đỗi khiêm nhường khi chỉ quy kết mọi thắng lợi của mình là nhờ may mắn mà thôi."
      },
      {
        "chinese": "那些我们一度以为难以承受的挫折，终将会变成人生宝贵的经历，只是时间的问题罢了。",
        "pinyin": "Nà xiē wǒ men yī dù yǐ wèi nán yǐ chéng shòu de cuò zhé, zhōng jiāng huì biàn chéng rén shēng bǎo guì de jīng lì, zhǐ shì shí jiān de wèn tí bà le.",
        "vietnamese": "Những trắc trở gian nan mà ta từng ngỡ rằng không thể nào gánh vác nổi, rồi đây sẽ hóa thành vốn sống vô giá của một đời người, âu cũng chỉ là vấn đề thời gian mà thôi."
      },
      {
        "chinese": "这件事你答应也好，不答应也罢，我都铁了心要去做。",
        "pinyin": "Zhè jiàn shì nǐ dá yīng yě hǎo, bù dá yīng yě bà, wǒ dōu tiě le xīn yào qù zuò.",
        "vietnamese": "Chuyện này bạn có gật đầu đồng ý hay lắc đầu phản đối chăng nữa, tôi cũng đã sắt đá hạ quyết tâm làm cho bằng được."
      },
      {
        "chinese": "那些为迎合市场而推出的快餐读物，不看也罢。",
        "pinyin": "Nà xiē wèi yíng hé shì chǎng ér tuī chū de kuài cān dú wù, bù kàn yě bà.",
        "vietnamese": "Mấy thứ ấn phẩm đọc nhanh mì ăn liền chỉ nhằm mưu toan chiều chuộng thị hiếu tầm thường kia, không đọc cũng chẳng tiếc."
      },
      {
        "chinese": "朋友在精不在多，人生得一知己足矣。",
        "pinyin": "Péng yǒu zài jīng bù zài duō, rén shēng dé yī zhī jǐ zú yǐ.",
        "vietnamese": "Bạn bè quý ở sự chân tình chứ đâu cần số lượng, đời người chỉ cần tìm được một tri kỷ tâm giao thế là đủ mãn nguyện lắm rồi."
      },
      {
        "chinese": "作为一个摄影爱好者，我对这位国际知名的摄影大师仰慕久矣。",
        "pinyin": "Zuò wèi yī gè shè yǐng ài hǎo zhě, wǒ duì zhè wèi guó jì zhī míng de shè yǐng dà shī yǎng mù jiǔ yǐ.",
        "vietnamese": "Với tư cách là một người say mê nghệ thuật nhiếp ảnh, lòng tôi đã hướng về ngưỡng mộ vị đại sư danh tiếng lẫy lừng thế giới này từ thuở nào rồi vậy."
      }
    ]
  },
  {
    "id": "hsk79-g-25",
    "order": 25,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ bất cần/tùy ý: 爱A不A (thích A thì A không thích thì thôi)",
    "titleZh": "爱A不A",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "爱 + Động từ + 不 + Động từ (爱吃不吃, 爱理不理, 爱看不看)",
    "explanationVi": "Khuôn mẫu khẩu ngữ 4 chữ biểu thị thái độ mặc kệ, bất cần hoặc hoàn toàn tôn trọng sự tự do của đối phương: 'ai muốn làm thì làm, không làm thì tùy/thôi'. Thường dùng để chỉ thái độ lạnh nhạt, bất hợp tác hoặc bất cần đời của người nói hoặc đối tượng được miêu tả.",
    "tips": "Mang sắc thái biểu cảm cao trong văn nói đời thường và kịch bản phim ảnh.",
    "examples": [
      {
        "chinese": "团购的产品价格十分优惠，可商家对待使用团购券的客人却很不热情，总摆出一副爱吃不吃、爱住不住、爱买不买的姿态。",
        "pinyin": "Tuán gòu de chǎn pǐn jià gé shí fēn yōu huì, kě shāng jiā duì dài shǐ yòng tuán gòu quàn de kè rén què hěn bù rè qíng, zǒng bǎi chū yī fù ài chī bù chī, ài zhù bù zhù, ài mǎi bù mǎi de zī tài.",
        "vietnamese": "Sản phẩm mua chung theo nhóm tuy giá rất ưu đãi, thế nhưng bên bán lại tỏ thái độ hết sức lạnh nhạt với khách dùng phiếu giảm giá, lúc nào cũng trưng ra bộ mặt thích ăn thì ăn không thích thì thôi, thích ở thì ở không thích thì thôi, thích mua thì mua không mua thì xéo."
      },
      {
        "chinese": "他这个人干什么都我行我素，穿衣打扮更是特立独行，一副“你爱看不看，反正我的事你管不着”的态度。",
        "pinyin": "Tā zhè gè rén gàn shén me dōu wǒ xíng wǒ sù, chuān yī dǎ bàn gèng shì tè lì dú xíng, yī fù \"nǐ ài kàn bù kàn, fǎn zhèng wǒ de shì nǐ guǎn bù zhe\" de tài dù.",
        "vietnamese": "Cái tính anh này làm gì cũng khăng khăng theo ý mình, ăn mặc diện mạo lại càng dị biệt khác người, mang bộ mặt kiểu 'cậu thích nhìn thì nhìn không thích thì thôi, tóm lại chuyện của tôi chẳng mượn cậu quản'."
      }
    ]
  },
  {
    "id": "hsk79-g-26",
    "order": 26,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ lưỡng diện/mập mờ: 半A半B (nửa A nửa B)",
    "titleZh": "半A半B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "半 + Tính từ/Động từ + 半 + Tính từ/Động từ (半睡半醒, 半真半假, 半推半就)",
    "explanationVi": "Khuôn mẫu 4 chữ diễn tả trạng thái lửng lơ ở giữa, nửa nọ nửa kia, không hoàn toàn nghiêng hẳn về trạng thái nào (半睡半醒 - nửa tỉnh nửa mê, 半真半假 - nửa thật nửa giả, 半信半疑 - nửa tin nửa ngờ).",
    "tips": "Hai thành phần A và B thường là cặp từ tương phản hoặc bổ sung cho nhau.",
    "examples": [
      {
        "chinese": "我这两天工作压力比较大，晚上一直半睡半醒，第二天精神很差。",
        "pinyin": "Wǒ zhè liǎng tiān gōng zuò yā lì bǐ jiào dà, wǎn shàng yī zhí bàn shuì bàn xǐng, dì èr tiān jīng shén hěn chà.",
        "vietnamese": "Hai hôm nay áp lực công việc của tôi khá lớn, buổi tối cứ chập chờn nửa tỉnh nửa mê, sang hôm sau tinh thần rất uể oải."
      },
      {
        "chinese": "他提供的信息半真半假，我们不能完全信任他。",
        "pinyin": "Tā tí gōng de xìn xī bàn zhēn bàn jiǎ, wǒ men bù néng wán quán xìn rèn tā.",
        "vietnamese": "Thông tin anh ta cung cấp nửa thực nửa hư, chúng ta không thể nào hoàn toàn tin tưởng anh ta được."
      }
    ]
  },
  {
    "id": "hsk79-g-27",
    "order": 27,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ trung hòa/vừa phải: 不A不B (không A cũng chẳng B)",
    "titleZh": "不A不B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "不 + Tính từ 1 + 不 + Tính từ 2 (不好不坏, 不冷不热, 不大不小)",
    "explanationVi": "Khuôn mẫu biểu thị trạng thái ở mức trung bình, vừa phải, không thiên lệch về cực đoan nào ('不好不坏' - tàm tạm, '不卑不亢' - không tự ti cũng không kiêu ngạo, '不急不躁' - bình thản ung dung). Hoặc biểu thị sự kiên định cùng lúc phủ định 2 hành vi ('不吃不喝' - không ăn không uống).",
    "tips": "Được dùng rất linh hoạt cả trong khẩu ngữ miêu tả lẫn văn nghị luận.",
    "examples": [
      {
        "chinese": "我开服装店到今天正好一个月，生意不好不坏。",
        "pinyin": "Wǒ kāi fú zhuāng diàn dào jīn tiān zhèng hǎo yī gè yuè, shēng yì bù hǎo bù huài.",
        "vietnamese": "Tôi mở tiệm quần áo đến hôm nay vừa tròn một tháng, việc buôn bán tàm tạm không tốt cũng chẳng xấu."
      },
      {
        "chinese": "1000万，对绝大多数人来说是一个天文数字。如果一个人年入10万，他需要不吃不喝100年才能攒够1000万。",
        "pinyin": "1 0 0 0 wàn, duì jué dà duō shù rén lái shuō shì yī gè tiān wén shù zì. rú guǒ yī gè rén nián rù 1 0 wàn, tā xū yào bù chī bù hē 1 0 0 nián cái néng zǎn gòu 1 0 0 0 wàn.",
        "vietnamese": "10 triệu tệ đối với đại đa số mọi người là một con số thiên văn. Nếu một người mỗi năm kiếm được 100 ngàn tệ, thì anh ta phải nhịn ăn nhịn uống suốt 100 năm mới gom đủ 10 triệu."
      }
    ]
  },
  {
    "id": "hsk79-g-28",
    "order": 28,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ chuyển tiếp bất ngờ: 不A而B (chẳng A mà lại B)",
    "titleZh": "不A而B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "不 + Động từ 1 + 而 + Động từ 2 (不辞而别, 不治而愈, 不约而同)",
    "explanationVi": "Khuôn mẫu thành ngữ Hán cổ mang tính quy phạm cao: 'chưa từng trải qua hành động A mà kết quả B đã diễn ra' ('不辞而别' - không từ mà biệt, '不治而愈' - không chữa mà tự khỏi, '不胫而走' - không cánh mà bay, '不劳而获' - không làm mà hưởng).",
    "tips": "Toàn bộ là các thành ngữ trình độ cao cốt lõi trong đề thi HSK 7-9.",
    "examples": [
      {
        "chinese": "这名教授在职称晋升后，不顾尚未履行完毕的人事合同，连招呼都不打，直接不辞而别。",
        "pinyin": "Zhè míng jiào shòu zài zhí chēng jìn shēng hòu, bù gù shàng wèi lǚ xíng wán bì de rén shì hé tóng, lián zhāo hū dōu bù dǎ, zhí jiē bù cí ér bié.",
        "vietnamese": "Vị giáo sư này sau khi được thăng cấp học hàm, bất chấp hợp đồng nhân sự vẫn chưa hoàn thành nghĩa vụ, thậm chí một lời chào cũng không thèm đánh tiếng mà đùng đùng không từ mà biệt."
      },
      {
        "chinese": "有研究表明，长期坚持有氧运动的人心肺功能会得到明显提升，一些疾病也会不治而愈。",
        "pinyin": "Yǒu yán jiū biǎo míng, zhǎng qī jiān chí yǒu yǎng yùn dòng de rén xīn fèi gōng néng huì dé dào míng xiǎn tí shēng, yī xiē jí bìng yě huì bù zhì ér yù.",
        "vietnamese": "Nghiên cứu chỉ ra rằng người kiên trì tập thể dục nhịp điệu thời gian dài chức năng tim phổi sẽ được cải thiện rõ rệt, một số căn bệnh cũng không cần chữa mà tự khỏi."
      }
    ]
  },
  {
    "id": "hsk79-g-29",
    "order": 29,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ tản mạn/chắp vá: 东A西B (đông A tây B)",
    "titleZh": "东A西B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "东 + Động từ/Danh từ + 西 + Động từ/Danh từ (东奔西走, 东拼西凑, 东张西望)",
    "explanationVi": "Khuôn mẫu dùng hai phương hướng 'Đông - Tây' biểu thị hành động diễn ra khắp nơi, phân tán, bôn ba vất vả hoặc thu gom chắp vá từ nhiều nguồn ('东奔西走' - chạy vạy ngược xuôi, '东拼西凑' - chắp vá gom góp khắp chốn, '东张西望' - nhìn đông ngó tây).",
    "tips": "Hình ảnh hóa tính chất phân tán và sự vất vả của đối tượng.",
    "examples": [
      {
        "chinese": "这几个月我不停地东奔西走，几乎参访了集团下面所有的分公司，足以说明我一直关注集团的发展。",
        "pinyin": "Zhè jǐ gè yuè wǒ bù tíng dì dōng bēn xī zǒu, jǐ hū cān fǎng le jí tuán xià miàn suǒ yǒu de fēn gōng sī, zú yǐ shuō míng wǒ yī zhí guān zhù jí tuán de fā zhǎn.",
        "vietnamese": "Mấy tháng nay tôi không ngừng bôn ba ngược xuôi khắp nơi, đã thị sát hầu như toàn bộ các công ty con trực thuộc tập đoàn, đủ để thấy tôi luôn dõi theo từng bước tiến của tập đoàn."
      },
      {
        "chinese": "她东拼西凑了3万多元钱，但是离治病所需的高额费用还是远远不够的。",
        "pinyin": "Tā dōng pīn xī còu le 3 wàn duō yuán qián, dàn shì lí zhì bìng suǒ xū de gāo é fèi yòng hái shì yuǎn yuǎn bù gòu de.",
        "vietnamese": "Cô ấy chạy vạy chắp vá ngược xuôi gom góp được hơn 3 vạn tệ, nhưng so với khoản viện phí khổng lồ để chữa bệnh thì vẫn còn thiếu một khoảng xa."
      }
    ]
  },
  {
    "id": "hsk79-g-30",
    "order": 30,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ phủ định tuyệt đối: 非A非B (chẳng phải A cũng chẳng phải B)",
    "titleZh": "非A非B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "非 + Danh từ/Tính từ 1 + 非 + Danh từ/Tính từ 2 (非亲非故, 非驴非马, 非真非假)",
    "explanationVi": "'非' mang nghĩa phủ định cổ ('không phải'). Khuôn mẫu dùng để nhấn mạnh tính chất hoàn toàn độc lập, tách biệt hoặc trạng thái kỳ lạ khó định danh ('非亲非故' - không thân chẳng thích, không họ không hàng; '非真非假' - thực hư lẫn lộn).",
    "tips": "Thường dùng trong các trường hợp cảm thán trước sự giúp đỡ chí tình của người xa lạ.",
    "examples": [
      {
        "chinese": "我跟他非亲非故，但是他却为了我的事四处奔波，感动得我不知说什么好。",
        "pinyin": "Wǒ gēn tā fēi qīn fēi gù, dàn shì tā què wèi le wǒ de shì sì chù bēn bō, gǎn dòng dé wǒ bù zhī shuō shén me hǎo.",
        "vietnamese": "Tôi với anh ấy chẳng họ chẳng hàng, không thân chẳng thích, thế mà anh ấy lại vì chuyện của tôi mà chạy vạy khắp nơi, khiến tôi xúc động không biết phải nói sao cho xiết."
      },
      {
        "chinese": "这些非真非假的传说故事，吊足了一众游客的胃口，也给第二天的行程增添了几分神秘色彩。",
        "pinyin": "Zhè xiē fēi zhēn fēi jiǎ de chuán shuō gù shì, diào zú le yī zhòng yóu kè de wèi kǒu, yě gěi dì èr tiān de xíng chéng zēng tiān le jǐ fēn shén mì sè cǎi.",
        "vietnamese": "Những câu chuyện truyền thuyết nửa thực nửa hư này đã kích thích tột cùng trí tò mò của đoàn du khách, đồng thời điểm thêm vài phần huyền bí cho hành trình ngày hôm sau."
      }
    ]
  },
  {
    "id": "hsk79-g-31",
    "order": 31,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ biến hóa thoắt chuyển: 忽A忽B (thoắt A thoắt B)",
    "titleZh": "忽A忽B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "忽 + Phương vị/Tính từ 1 + 忽 + Phương vị/Tính từ 2 (忽上忽下, 忽左忽右, 忽隐忽现)",
    "explanationVi": "Biểu thị trạng thái hoặc phương hướng biến hóa cực kỳ mau lẹ, luân phiên thay đổi khôn lường ('忽上忽下' - thoắt lên thoắt xuống, '忽左忽右' - lúc rẽ trái khi quẹo phải, '忽隐忽现' - thoắt ẩn thoắt hiện, '忽 lạnh 忽 nóng' - lúc nóng lúc lạnh).",
    "tips": "Dùng miêu tả địa hình trắc trở, thời tiết bất thường hoặc tâm trạng bất an.",
    "examples": [
      {
        "chinese": "那条盘山公路很险，一个接一个的急转弯。汽车开着像是扭秧歌，忽上忽下，忽左忽右。",
        "pinyin": "Nà tiáo pán shān gōng lù hěn xiǎn, yī gè jiē yī gè de jí zhuǎn wān. qì chē kāi zhe xiàng shì niǔ yāng gē, hū shàng hū xià, hū zuǒ hū yòu.",
        "vietnamese": "Đoạn đường đèo quanh núi đó rất hiểm trở, hết khúc cua tay áo này lại đến khúc cua gấp khác. Xe ô tô chạy cứ như đang múa điệu Ương Ca, thoắt lên thoắt xuống, khi lắc sang trái lúc đảo sang phải."
      },
      {
        "chinese": "羊群在草丛中忽隐忽现。一只细长的牧羊犬忙不迭地穿梭其中。",
        "pinyin": "Yáng qún zài cǎo cóng zhōng hū yǐn hū xiàn. yī zhǐ xì zhǎng de mù yáng quǎn máng bù dié dì chuān suō qí zhōng.",
        "vietnamese": "Đàn cừu giữa bụi cỏ thoắt ẩn thoắt hiện. Một chú chó chăn cừu thân hình thon dài thoăn thoắt thoi đưa qua lại giữa bầy."
      }
    ]
  },
  {
    "id": "hsk79-g-32",
    "order": 32,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ lựa chọn/đa dạng: 或A或B (hoặc A hoặc B)",
    "titleZh": "或A或B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "或 + Động từ/Tính từ 1 + 或 + Động từ/Tính từ 2 (或坐或立, 或躺或坐, 或炖或炒)",
    "explanationVi": "Khuôn mẫu trang trọng biểu thị các cá thể trong tập thể mang trạng thái/hành vi đa dạng khác nhau, hoặc một đối tượng có thể áp dụng luân phiên nhiều phương thức khác nhau ('或坐或立' - người ngồi kẻ đứng, '或长或短' - lúc dài lúc ngắn, '或明或暗' - khi tỏ khi mờ).",
    "tips": "Thường gặp trong miêu tả cảnh tượng đám đông hoặc phương pháp chế biến, trình bày nghệ thuật.",
    "examples": [
      {
        "chinese": "酒吧里的客人手里端着酒杯，或坐或立，姿态各异。",
        "pinyin": "Jiǔ ba lǐ de kè rén shǒu lǐ duān zhe jiǔ bēi, huò zuò huò lì, zī tài gè yì.",
        "vietnamese": "Thực khách trong quán bar tay nâng ly rượu, người thì ngồi kẻ thì đứng, muôn hình vạn trạng."
      },
      {
        "chinese": "夜深了，可她或躺或坐，一直难以入睡。她生平第一次有这种牵肠挂肚的感觉。",
        "pinyin": "Yè shēn le, kě tā huò tǎng huò zuò, yī zhí nán yǐ rù shuì. tā shēng píng dì yī cì yǒu zhè zhǒng qiān cháng guà dù de gǎn jué.",
        "vietnamese": "Đêm đã về khuya, nhưng cô ấy khi nằm lúc ngồi, mãi vẫn trằn trọc khó chợp mắt. Đây là lần đầu tiên trong đời cô nếm trải cảm giác ruột gan bồn chồn lo lắng khôn nguôi như thế."
      },
      {
        "chinese": "她做的豆腐，或炖或炒，总是色白味醇。乡亲们头一次吃到这么好的豆腐，都夸她手艺好。",
        "pinyin": "Tā zuò de dòu fǔ, huò dùn huò chǎo, zǒng shì sè bái wèi chún. xiāng qīn men tóu yī cì chī dào zhè me hǎo de dòu fǔ, dōu kuā tā shǒu yì hǎo.",
        "vietnamese": "Đậu phụ do cô ấy làm ra, dù đem hầm hay xào, bao giờ cũng trắng ngần đậm vị. Bà con chòm xóm lần đầu được nếm món đậu ngon đến vậy, ai nấy đều tấm tắc khen tài nghệ của cô."
      }
    ]
  },
  {
    "id": "hsk79-g-33",
    "order": 33,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ phẩm chất song hành: 可A可B (vừa đáng A vừa đáng B / có thể A có thể B)",
    "titleZh": "可A可B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "可 + Tính từ/Động từ 1 + 可 + Tính từ/Động từ 2 (可敬可亲, 可歌可泣, 可长可短)",
    "explanationVi": "1) Kết hợp với tính từ/động từ biểu thị 2 phẩm chất cao quý song hành cùng tồn tại ('可敬可亲' - vừa đáng kính vừa đáng mến, '可歌可泣' - đáng ca ngợi và cảm động rơi lệ); 2) Biểu thị sự linh hoạt không bó buộc ('可长可短' - dài ngắn tùy ý, '可大可小' - to nhỏ linh hoạt).",
    "tips": "Dùng nhiều trong văn luận tán dương anh hùng hoặc quy phạm viết lách.",
    "examples": [
      {
        "chinese": "小婉对这位天才同事，没有半点嫉妒，而是一开始就由衷地欣赏她，并真心地关爱她，完全像一位可敬可亲大姐姐。",
        "pinyin": "Xiǎo wǎn duì zhè wèi tiān cái tóng shì, méi yǒu bàn diǎn jí dù, ér shì yī kāi shǐ jiù yóu zhōng dì xīn shǎng tā, bìng zhēn xīn dì guān ài tā, wán quán xiàng yī wèi kě jìng kě qīn dà jiě jiě.",
        "vietnamese": "Tiểu Uyển đối với người đồng nghiệp thiên tài này chẳng hề có chút ghen tị nào, mà ngay từ đầu đã xuất phát từ đáy lòng ngưỡng mộ và chân thành bảo bọc cô ấy, chẳng khác nào một người chị cả vừa đáng kính lại vừa đáng mến."
      },
      {
        "chinese": "读书笔记要精炼，要根据实际的阅读进度，总结概括，并体现所思所想。篇幅可长可短，决不写空话、假话、应付的话。",
        "pinyin": "Dú shū bǐ jì yào jīng liàn, yào gēn jù shí jì de yuè dú jìn dù, zǒng jié gài kuò, bìng tǐ xiàn suǒ sī suǒ xiǎng. piān fú kě zhǎng kě duǎn, jué bù xiě kōng huà, jiǎ huà, yīng fù de huà.",
        "vietnamese": "Ghi chép đọc sách phải cô đọng súc tích, cần bám sát tiến độ đọc thực tế để đúc kết khái quát và thể hiện những trăn trở nghĩ suy của bản thân. Dung lượng có thể dài hoặc ngắn, tuyệt đối không viết lời sáo rỗng, dối trá hay đối phó."
      }
    ]
  },
  {
    "id": "hsk79-g-34",
    "order": 34,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ đồng thời/bao trùm: 连A带B (cả A lẫn B, vừa A vừa B)",
    "titleZh": "连A带B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "连 + Động từ/Danh từ 1 + 带 + Động từ/Danh từ 2 (连说带笑, 连人带车, 连滚带爬)",
    "explanationVi": "Biểu thị hai hành động diễn ra song song cùng một lúc ('连说带笑' - vừa nói vừa cười rôm rả, '连跑带跳'), hoặc biểu thị sự việc bao trùm toàn bộ cả chủ thể lẫn vật đi kèm mà không ngoại trừ ('连人带车' - cả người lẫn xe).",
    "tips": "Mang tính khẩu ngữ sinh động và sức gợi hình cực mạnh.",
    "examples": [
      {
        "chinese": "一群年轻人连说带笑地迎面走来，整个街道顿时充满了欢声笑语。",
        "pinyin": "Yī qún nián qīng rén lián shuō dài xiào dì yíng miàn zǒu lái, zhěng gè jiē dào dùn shí chōng mǎn le huān shēng xiào yǔ.",
        "vietnamese": "Một nhóm bạn trẻ vừa nói vừa cười rôm rả đi tới, cả con phố tức thì tràn ngập tiếng cười nói hân hoan."
      },
      {
        "chinese": "昨晚有人在江边骑行，结果连人带车落入江中，至今生死不明。",
        "pinyin": "Zuó wǎn yǒu rén zài jiāng biān qí xíng, jié guǒ lián rén dài chē luò rù jiāng zhōng, zhì jīn shēng sǐ bù míng.",
        "vietnamese": "Tối qua có người đạp xe ven bờ sông, không may cả người lẫn xe rơi tọt xuống dòng nước, đến nay vẫn bặt vô âm tín chưa rõ sống chết."
      }
    ]
  },
  {
    "id": "hsk79-g-35",
    "order": 35,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ hỗn độn/quanh co: 七A八B (bảy A tám B)",
    "titleZh": "七A八B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "七 + Động từ/Tính từ 1 + 八 + Động từ/Tính từ 2 (七拐八绕, 七零八落, 乱七八糟)",
    "explanationVi": "Các con số 'thất (7) - bát (8)' trong tiếng Hán dùng để phóng đại trạng thái cực kỳ lộn xộn, rải rác, quanh co gập ghềnh ('七拐八绕' - ngoằn ngoèo rẽ ngang rẽ dọc, '七零八落' - tan tác mỗi nơi một mảnh, '乱七八糟' - tanh bành bừa bãi).",
    "tips": "Thường mang sắc thái tiêu cực hoặc miêu tả sự rối ren, hỗn loạn.",
    "examples": [
      {
        "chinese": "司机对这里的道路不太熟悉，竟七拐八绕地把车开到了海边，现在陷在烂泥里出不来了。",
        "pinyin": "Sī jī duì zhè lǐ de dào lù bù tài shú xī, jìng qī guǎi bā rào dì bǎ chē kāi dào le hǎi biān, xiàn zài xiàn zài làn ní lǐ chū bù lái le.",
        "vietnamese": "Tài xế không mấy quen đường sá nơi đây, thế nào mà chạy vòng vo ngoằn ngoèo rẽ ngang rẽ dọc đưa xe thẳng ra bờ biển, giờ thì lún ngập trong bùn lầy không nhấc bánh ra nổi."
      },
      {
        "chinese": "乐乐是个十足的捣蛋鬼，常常把家里的玩具拆得七零八落的，用画笔把墙上涂得乱七八糟。",
        "pinyin": "Lè lè shì gè shí zú de dǎo dàn guǐ, cháng cháng bǎ jiā lǐ de wán jù chāi dé qī líng bā luò de, yòng huà bǐ bǎ qiáng shàng tú dé luàn qī bā zāo.",
        "vietnamese": "Bé Lạc Lạc đích thị là một đứa trẻ nghịch ngợm hết thuốc chữa, thường xuyên tháo tung đồ chơi trong nhà tan tành tơi tả mỗi nơi một mảnh, rồi cầm bút màu vẽ bậy lên tường tanh bành lộn xộn."
      }
    ]
  },
  {
    "id": "hsk79-g-36",
    "order": 36,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ biến động luân phiên: 时A时B (khi A khi B, lúc vầy lúc khác)",
    "titleZh": "时A时B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "时 + Tính từ/Động từ 1 + 时 + Tính từ/Động từ 2 (时好时坏, 时隐时现, 时高时低)",
    "explanationVi": "Biểu thị trạng thái không ổn định, lúc thế này lúc thế khác trong một khoảng thời gian nhất định ('时好时坏' - lúc tốt lúc xấu, chập chờn thất thường; '时隐时现' - lúc ẩn lúc hiện; '时起时伏' - lúc bổng lúc trầm).",
    "tips": "Tương đương với '忽...忽...' nhưng nhịp điệu diễn biến có phần chậm và đều đặn hơn.",
    "examples": [
      {
        "chinese": "他最近身体时好时坏，但只要他还撑得住，他一定会来参加我们的婚礼的。",
        "pinyin": "Tā zuì jìn shēn tǐ shí hǎo shí huài, dàn zhǐ yào tā hái chēng dé zhù, tā yī dìng huì lái cān jiā wǒ men de hūn lǐ de.",
        "vietnamese": "Dạo này sức khỏe của ông ấy khi khỏe khi yếu thất thường, nhưng chỉ cần còn gượng được, nhất định ông sẽ đến dự đám cưới của chúng mình."
      },
      {
        "chinese": "雨停了，天上的云渐渐散了，天边有道彩虹时隐时现。",
        "pinyin": "Yǔ tíng le, tiān shàng de yún jiàn jiàn sàn le, tiān biān yǒu dào cǎi hóng shí yǐn shí xiàn.",
        "vietnamese": "Mưa tạnh rồi, mây trên trời dần tan biến, nơi chân trời có một dải cầu vồng lúc ẩn lúc hiện."
      }
    ]
  },
  {
    "id": "hsk79-g-37",
    "order": 37,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ phủ định tuyệt đối hóa: 无A不B (không A nào là không B)",
    "titleZh": "无A不B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "无 + Danh từ 1 + 不 + Động từ/Tính từ 2 (无话不谈, 无人不知, 无微不至)",
    "explanationVi": "Hình thức phủ định kép mang ý nghĩa khẳng định tuyệt đối 100%: 'không có bất kỳ đối tượng nào mà lại không...' ('无话不谈' - chuyện gì cũng tâm sự, '无人不知' - thiên hạ không ai không biết, '无微不至' - chu đáo tỉ mỉ đến từng chân tơ kẽ tóc, '无恶不作' - điều ác nào cũng làm).",
    "tips": "Rất thường gặp trong việc ca ngợi tài năng, tình bạn hoặc mức độ nổi tiếng.",
    "examples": [
      {
        "chinese": "短短几天，我们就成了无话不谈的好友，一想到就要分开了，不免觉得伤感。",
        "pinyin": "Duǎn duǎn jǐ tiān, wǒ men jiù chéng le wú huà bù tán de hǎo yǒu, yī xiǎng dào jiù yào fēn kāi le, bù miǎn jué dé shāng gǎn.",
        "vietnamese": "Chỉ trong vài ngày ngắn ngủi, chúng tôi đã trở thành tri kỷ không chuyện gì là không tâm sự, nghĩ đến lúc sắp phải chia tay lòng không khỏi dâng lên niềm xao xuyến."
      },
      {
        "chinese": "这所无人不知的重点初中的家长可谓卧虎藏龙，基本上都是知名学者、政府高官、企业高管等有着较高社会地位的人。",
        "pinyin": "Zhè suǒ wú rén bù zhī de zhòng diǎn chū zhōng de jiā zhǎng kě wèi wò hǔ cáng lóng, jī běn shàng dōu shì zhī míng xué zhě, zhèng fǔ gāo guān, qǐ yè gāo guǎn děng yǒu zhe jiào gāo shè huì dì wèi de rén.",
        "vietnamese": "Phụ huynh của ngôi trường THCS trọng điểm không ai không biết này quả thực là ngọa hổ tàng long, cơ bản đều là học giả lừng danh, quan chức chính phủ cấp cao, lãnh đạo doanh nghiệp hàng đầu có vị thế xã hội đáng nể."
      }
    ]
  },
  {
    "id": "hsk79-g-38",
    "order": 38,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ bất lực/thiếu thốn: 无A可B (không có A để mà B)",
    "titleZh": "无A可B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "无 + Danh từ + 可 + Động từ (无处可去, 无事可做, 无话可说, 无家可归)",
    "explanationVi": "Biểu thị hoàn cảnh bế tắc, thiếu thốn điều kiện cần thiết dẫn đến không có khả năng thực hiện hành động ('无处可去' - không có chốn nương thân/nơi đi, '无事可做' - rảnh rỗi không có việc làm, '无话可说' - cạn lời không còn gì để nói, '无家可归' - vô gia cư).",
    "tips": "Biểu đạt tâm trạng lạc lõng, bất lực hoặc hoàn cảnh khó khăn.",
    "examples": [
      {
        "chinese": "工作地点离城里很远，休息时无处可去，他只得靠钓鱼聊以解闷。",
        "pinyin": "Gōng zuò dì diǎn lí chéng lǐ hěn yuǎn, xiū xī shí wú chù kě qù, tā zhǐ dé kào diào yú liáo yǐ jiě mèn.",
        "vietnamese": "Nơi làm việc nằm cách rất xa thành phố, những lúc nghỉ ngơi không có nơi nào để đi, anh ấy đành phải câu cá cho khuây khỏa nỗi buồn."
      },
      {
        "chinese": "到了淡季，公司业务很少，大部员工无事可做，只能拿底薪。",
        "pinyin": "Dào le dàn jì, gōng sī yè wù hěn shǎo, dà bù yuán gōng wú shì kě zuò, zhǐ néng ná dǐ xīn.",
        "vietnamese": "Đến mùa thấp điểm, nghiệp vụ công ty rất ít, phần lớn nhân viên không có việc gì làm, đành chỉ nhận lương cơ bản."
      }
    ]
  },
  {
    "id": "hsk79-g-39",
    "order": 39,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Khuôn mẫu 4 chữ độc lập/tự túc: 自A自B (tự A tự B)",
    "titleZh": "自A自B",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "四字格",
    "structure": "自 + Động từ 1 + 自 + Động từ 2 (自编自导, 自称自赞, 自言自语, 自作自受)",
    "explanationVi": "Biểu thị hai hành động liên quan mật thiết đều do chính một người độc lập đảm đương thực hiện từ đầu đến cuối ('自编自导' - tự viết kịch bản tự đạo diễn, '自言自语' - tự nói một mình, '自作自受' - tự làm tự chịu, '自吹自擂' - tự thổi còi tự đánh trống/tự khoe khoang).",
    "tips": "Có thể mang sắc thái trung tính (tài năng tự thân) hoặc mỉa mai châm biếm tùy ngữ cảnh.",
    "examples": [
      {
        "chinese": "这位导演，早年在外国留过学，编剧功底了得，今天这戏，就是他自编自导的。",
        "pinyin": "Zhè wèi dǎo yǎn, zǎo nián zài wài guó liú guò xué, biān jù gōng dǐ le dé, jīn tiān zhè xì, jiù shì tā zì biān zì dǎo de.",
        "vietnamese": "Vị đạo diễn này thời trẻ từng đi du học nước ngoài, tay nghề biên kịch rất cừ khôi, vở kịch hôm nay chính là do đích thân ông vừa viết kịch bản vừa làm đạo diễn."
      },
      {
        "chinese": "他开心极了，直夸我干得好，并自称自赞，说自己眼光独到。",
        "pinyin": "Tā kāi xīn jí le, zhí kuā wǒ gàn dé hǎo, bìng zì chēng zì zàn, shuō zì jǐ yǎn guāng dú dào.",
        "vietnamese": "Anh ấy sướng rơn cả người, cứ luôn mồm khen tôi làm tốt lắm, lại còn tự thổi phồng khen ngợi bản thân, bảo rằng mắt nhìn người của mình quả là độc nhất vô nhị."
      }
    ]
  },
  {
    "id": "hsk79-g-40",
    "order": 40,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn chia sẻ chân thành: 不瞒你说 (chẳng giấu gì bạn)",
    "titleZh": "不瞒你说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "不瞒你说 / 不瞒您说 ， Phân câu",
    "explanationVi": "Cụm từ liên kết dùng ở đầu câu giao tiếp khẩu ngữ biểu thị người nói chuẩn bị bộc bạch một sự thật riêng tư, một bí mật hoặc suy nghĩ thầm kín mà trước đó chưa từng thổ lộ: 'chẳng giấu gì bác / thành thật tâm sự với bạn'.",
    "tips": "Tạo cầu nối thân thiện, xóa bỏ khoảng cách tâm lý và gia tăng mức độ tin cậy trong đối thoại.",
    "examples": [
      {
        "chinese": "你这一番言论真令我醍醐灌顶，不瞒你说，我虽虚长你几岁，见解却远不如你。",
        "pinyin": "Nǐ zhè yī fān yán lùn zhēn lìng wǒ tí hú guàn dǐng, bù mán nǐ shuō, wǒ suī xū zhǎng nǐ jǐ suì, jiàn jiě què yuǎn bù rú nǐ.",
        "vietnamese": "Những lời luận bàn vừa rồi của bạn quả thực khiến tôi như được khai sáng mở mang đầu óc, chẳng giấu gì bạn, tôi tuy lớn hơn bạn vài tuổi nhưng kiến giải thì thua xa bạn."
      },
      {
        "chinese": "老刘，不瞒你说，那次去你家吃饭，我到得早，你不在屋子里，桌上放着白菜炖五花肉，我就恨不得先吃两块解解馋。",
        "pinyin": "Lǎo liú, bù mán nǐ shuō, nà cì qù nǐ jiā chī fàn, wǒ dào dé zǎo, nǐ bù zài wū zi lǐ, zhuō shàng fàng zhe bái cài dùn wǔ huā ròu, wǒ jiù hèn bù dé xiān chī liǎng kuài jiě jiě chán.",
        "vietnamese": "Bác Lưu à, chẳng giấu gì bác, lần đó sang nhà bác ăn cơm em tới hơi sớm, bác chưa về phòng mà trên bàn lại bày đĩa thịt ba chỉ hầm cải thảo thơm nức, em chỉ thòm thèm muốn bốc vụng hai miếng ăn trước cho đỡ thèm."
      }
    ]
  },
  {
    "id": "hsk79-g-41",
    "order": 41,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn phản bác/ngắt lời: 不是 (ơ hay / này chứ / khoan đã)",
    "titleZh": "不是",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "不是， Phân câu thắc mắc / phản bác",
    "explanationVi": "Trong khẩu ngữ đương đại, '不是' đứng riêng ở đầu câu làm dấu hiệu diễn ngôn ngắt lời hoặc phản ứng trước một phát ngôn vô lý, khó hiểu của đối phương: 'Ơ hay, này chứ, khoan đã nào...'. Biểu thị sự kinh ngạc, không đồng tình hoặc phàn nàn.",
    "tips": "Cực kỳ phổ biến trong đời sống hàng ngày của người bản ngữ Bắc Kinh và giới trẻ Trung Quốc.",
    "examples": [
      {
        "chinese": "你们俩有话好好说，别斤斤计较，各自让一步，这事儿不就过去了？",
        "pinyin": "Nǐ men liǎ yǒu huà hǎo hǎo shuō, bié jīn jīn jì jiào, gè zì ràng yī bù, zhè shì ér bù jiù guò qù le?",
        "vietnamese": "Hai cậu có gì thì bình tĩnh ngồi nói chuyện với nhau, đừng có so đo từng li từng tí, mỗi người lùi một bước chẳng phải êm thấm chuyện rồi sao?"
      },
      {
        "chinese": "——不是，我俩吵架你瞎掺和什么？",
        "pinyin": "— — bù shì, wǒ liǎ chǎo jià nǐ xiā càn hé shén me?",
        "vietnamese": "— Này chứ, hai đứa tôi cãi nhau thì cậu xen vào làm trò gì thế hả?"
      },
      {
        "chinese": "我们现在去吃自助餐怎么样？",
        "pinyin": "Wǒ men xiàn zài qù chī zì zhù cān zěn me yàng?",
        "vietnamese": "Giờ tụi mình đi ăn buffet thế nào?"
      },
      {
        "chinese": "——不是，你下午两点才吃过饭，现在还不到三个小时，这么快就又饿了？",
        "pinyin": "— — bù shì, nǐ xià wǔ liǎng diǎn cái chī guò fàn, xiàn zài hái bù dào sān gè xiǎo shí, zhè me kuài jiù yòu è le?",
        "vietnamese": "— Ơ hay, hai giờ chiều cậu mới vừa ăn xong, giờ chưa đầy ba tiếng đồng hồ mà đã đói lại nhanh thế à?"
      }
    ]
  },
  {
    "id": "hsk79-g-42",
    "order": 42,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn phê bình thiện chí: 不是我说你 (không phải tôi muốn nói/trách cậu đâu)",
    "titleZh": "不是我说你",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "不是我说你 ， Phân câu phê bình / góp ý",
    "explanationVi": "Lời rào đón tâm lý quen thuộc trước khi đưa ra lời phê bình, góp ý hoặc chê trách thẳng thắn đối với người quen thân: 'Không phải tôi muốn trách cậu đâu, nhưng...'. Mục đích làm giảm bớt tính xung đột trực tiếp.",
    "tips": "Dùng giữa bạn bè, người thân hoặc cấp trên thân tình chỉ bảo cấp dưới.",
    "examples": [
      {
        "chinese": "不是我说你，你真是一点儿事都不懂。你既然求他帮忙，为什么姿态不放低点儿？",
        "pinyin": "Bù shì wǒ shuō nǐ, nǐ zhēn shì yìdiǎnr shì dōu bù dǒng. nǐ jì rán qiú tā bāng máng, wèi shén me zī tài bù fàng dī diǎn ér?",
        "vietnamese": "Không phải tôi muốn nói đâu, chứ cậu thật chẳng hiểu chuyện đời chút nào cả. Đã là đi cậy nhờ người ta giúp đỡ, sao cái tôi không biết hạ thấp xuống một chút?"
      },
      {
        "chinese": "哥们儿，不是我说你，你还是社会经验不够啊。这件事搞成这样，说明你和上司的关系实在不怎么样。",
        "pinyin": "Gē men ér, bù shì wǒ shuō nǐ, nǐ hái shì shè huì jīng yàn bù gòu a. zhè jiàn shì gǎo chéng zhè yàng, shuō míng nǐ hé shàng sī de guān xì shí zài bù zěn me yàng.",
        "vietnamese": "Này người anh em, không phải tôi chê trách cậu đâu, nhưng cậu vẫn còn non kinh nghiệm sống lắm. Chuyện bung bét ra nông nỗi này chứng tỏ mối quan hệ giữa cậu với sếp chẳng ra đâu vào đâu cả."
      }
    ]
  },
  {
    "id": "hsk79-g-43",
    "order": 43,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn chuyển hướng tư duy: 反过来（说） (nói ngược lại, nhìn từ chiều nghịch)",
    "titleZh": "反过来（说）",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Phân câu 1 ； 反过来（说）， Phân câu 2",
    "explanationVi": "Thành phần liên kết tư duy biện chứng trong văn nghị luận: dùng để đổi góc nhìn 180 độ xem xét mối quan hệ tác động qua lại của sự vật: 'ngược lại mà nói', 'nhìn từ chiều nghịch lại'.",
    "tips": "Thường xuyên xuất hiện trong các bài viết nghị luận triết học, kinh tế học và xã hội học.",
    "examples": [
      {
        "chinese": "人的素质是人进行社会实践的产物，反过来，人的素质同样也会影响社会实践。",
        "pinyin": "Rén de sù zhì shì rén jìn xíng shè huì shí jiàn de chǎn wù, fǎn guò lái, rén de sù zhì tóng yàng yě huì yǐng xiǎng shè huì shí jiàn.",
        "vietnamese": "Phẩm chất của con người là sản vật đúc kết từ quá trình thực tiễn xã hội; và ngược lại, phẩm chất con người cũng sẽ tác động sâu sắc đến chính thực tiễn xã hội."
      },
      {
        "chinese": "一个国家的教育发展水平取决于其经济、政治的发展程度；反过来说，它的经济和政治的发展程度，同样受到教育发展水平的深刻影响。",
        "pinyin": "Yī gè guó jiā de jiào yù fā zhǎn shuǐ píng qǔ jué yú qí jīng jì, zhèng zhì de fā zhǎn chéng dù; fǎn guò lái shuō, tā de jīng jì hé zhèng zhì de fā zhǎn chéng dù, tóng yàng shòu dào jiào yù fā zhǎn shuǐ píng de shēn kè yǐng xiǎng.",
        "vietnamese": "Mức độ phát triển giáo dục của một quốc gia tùy thuộc vào trình độ phát triển kinh tế và chính trị; ngược lại mà nói, trình độ kinh tế và chính trị của quốc gia đó cũng chịu ảnh hưởng sâu sắc từ chất lượng nền giáo dục."
      }
    ]
  },
  {
    "id": "hsk79-g-44",
    "order": 44,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn thâu tóm luận điểm: 概括来说 (khái quát mà nói, tóm lược lại)",
    "titleZh": "概括来说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "概括来说 / 概括地讲 ， Phân câu tổng kết",
    "explanationVi": "Dùng để gom các luận cứ chi tiết, dài dòng thành các ý chính cốt lõi, thường đi kèm các số thứ tự phân mục (第一... 第二...): 'khái quát mà nói', 'tóm gọn lại'.",
    "tips": "Cấu trúc kinh điển trong phần thân bài hoặc kết bài của bài thi viết HSK 7-9.",
    "examples": [
      {
        "chinese": "我看过陈刚写的诗，概括来说，给我留下了这样两点印象：第一，他的诗可谓大气磅礴；第二，他古典诗词方面的修养非常高。",
        "pinyin": "Wǒ kàn guò chén gāng xiě de shī, gài kuò lái shuō, gěi wǒ liú xià le zhè yàng liǎng diǎn yìn xiàng: dì yī, tā de shī kě wèi dà qì bàng bó; dì èr, tā gǔ diǎn shī cí fāng miàn de xiū yǎng fēi cháng gāo.",
        "vietnamese": "Tôi đã đọc thơ Trần Cương viết, tóm lược lại cho tôi hai ấn tượng sâu sắc: thứ nhất, thơ của anh ấy quả thực hào hùng khoáng đạt; thứ hai, vốn tu dưỡng thơ từ cổ điển của anh ấy vô cùng uyên bác."
      },
      {
        "chinese": "《体育课程标准》为体育课堂提供了课程评价的相关要求。概括来说，相关要求涵盖对学生的学习、教师的教学和课程的建设等多个方面。",
        "pinyin": "«tǐ yù kè chéng biāo zhǔn» wèi tǐ yù kè táng tí gōng le kè chéng píng jià de xiāng guān yào qiú. gài kuò lái shuō, xiāng guān yào qiú hán gài duì xué shēng de xué xí, jiào shī de jiào xué hé kè chéng de jiàn shè děng duō gè fāng miàn.",
        "vietnamese": "'Chuẩn chương trình Giáo dục thể chất' đã đề ra các tiêu chí đánh giá môn học trong giờ thể dục. Khái quát lại, các yêu cầu này bao trùm nhiều phương diện như quá trình học của học sinh, công tác giảng dạy của giáo viên và việc xây dựng chương trình."
      }
    ]
  },
  {
    "id": "hsk79-g-45",
    "order": 45,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn truy nguyên bản chất: 归根到底 (quy cho cùng, suy đến cùng)",
    "titleZh": "归根到底",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Phân câu 1 ， 归根到底 ， Phân câu 2",
    "explanationVi": "Thành ngữ ngữ pháp đóng vai trò trạng ngữ / liên từ nhấn mạnh việc gạt bỏ mọi hiện tượng bề ngoài để chỉ ra nguyên nhân gốc rễ, bản chất sâu xa nhất của vấn đề: 'quy cho cùng', 'suy đến cội nguồn'.",
    "tips": "Từ khóa vàng để khẳng định luận điểm chủ chốt mang tính quyết định.",
    "examples": [
      {
        "chinese": "我所做的一切，归根到底，不还是为了你吗？",
        "pinyin": "Wǒ suǒ zuò de yī qiè, guī gēn dào dǐ, bù hái shì wèi le nǐ ma?",
        "vietnamese": "Tất cả những gì anh làm, suy cho cùng chẳng phải cũng chỉ vì em hay sao?"
      },
      {
        "chinese": "企业竞争，是技术、产品的竞争，归根到底是人才的竞争。",
        "pinyin": "Qǐ yè jìng zhēng, shì jì shù, chǎn pǐn de jìng zhēng, guī gēn dào dǐ shì rén cái de jìng zhēng.",
        "vietnamese": "Sự cạnh tranh giữa các doanh nghiệp bề ngoài là cạnh tranh về công nghệ và sản phẩm, nhưng quy cho cùng cốt lõi vẫn là cuộc cạnh tranh về nhân tài."
      }
    ]
  },
  {
    "id": "hsk79-g-46",
    "order": 46,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn thừa nhận nhượng bộ: 话是这么说 (nói thì nói vậy)",
    "titleZh": "话是这么说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "话是这么说 ， 但是 / 可是 Phân câu thực tế",
    "explanationVi": "Dùng để thừa nhận lý lẽ hoặc lời khuyên của người khác là đúng về mặt lý thuyết, nhưng ngay sau đó đưa ra khó khăn, sự e ngại hoặc thực tế khách quan đối lập: 'nói thì đúng là thế, cơ mà...'.",
    "tips": "Kỹ thuật nhượng bộ mềm dẻo giúp bài viết hoặc câu nói trở nên khách quan và sâu sắc.",
    "examples": [
      {
        "chinese": "他问同事怕不怕，他们总是说：“这有什么好怕的？”话是这么说，但他依然有些恐惧。但怕也没有用，因为活是要干的，你怕不怕都得干！",
        "pinyin": "Tā wèn tóng shì pà bù pà, tā men zǒng shì shuō: \"zhè yǒu shén me hǎo pà de?\" huà shì zhè me shuō, dàn tā yī rán yǒu xiē kǒng jù. dàn pà yě méi yǒu yòng, yīn wèi huó shì yào gàn de, nǐ pà bù pà dōu dé gàn!",
        "vietnamese": "Anh ấy hỏi các đồng nghiệp có sợ không, họ luôn miệng bảo: 'Có gì đâu mà phải sợ?'. Nói thì nói vậy, chứ trong lòng anh vẫn còn chút sợ hãi hoang mang. Nhưng có sợ cũng vô ích, bởi việc thì vẫn phải làm, sợ hay không sợ đều phải bắt tay vào làm!"
      },
      {
        "chinese": "如果一个人的事业能够被社会所认可，那么这种感受是超越物质的。话是这么说，但谁不想拥有好的物质条件呢？",
        "pinyin": "Rú guǒ yī gè rén de shì yè néng gòu bèi shè huì suǒ rèn kě, nà me zhè zhǒng gǎn shòu shì chāo yuè wù zhì de. huà shì zhè me shuō, dàn shuí bù xiǎng yōng yǒu hǎo de wù zhì tiáo jiàn ne?",
        "vietnamese": "Nếu sự nghiệp của một người được xã hội ghi nhận và tôn vinh, thì cảm giác đó quả thực vượt lên trên mọi giá trị vật chất. Nói thì nói vậy, chứ ai mà chẳng khao khát có được điều kiện vật chất đủ đầy sung túc?"
      }
    ]
  },
  {
    "id": "hsk79-g-47",
    "order": 47,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn lật lại vấn đề: 话（又）说回来 (cơ mà nói đi thì cũng phải nói lại)",
    "titleZh": "话（又）说回来",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "话（又）说回来 ， Phân câu bổ sung",
    "explanationVi": "Dấu hiệu diễn ngôn dùng để bổ sung một góc nhìn khác nhằm giữ thế cân bằng toàn diện, tránh rơi vào phiến diện cực đoan: 'cơ mà nói đi thì cũng phải nói lại', 'xét cho cùng thì ngược lại'.",
    "tips": "Rất hay dùng trong văn đàm thoại và phân tích đa chiều.",
    "examples": [
      {
        "chinese": "现在很多公交车驾驶座旁安装了包围门，保证司机专注开车。话说回来，司机安全驾驶，乘客才能安全到站。",
        "pinyin": "Xiàn zài hěn duō gōng jiāo chē jià shǐ zuò páng ān zhuāng le bāo wéi mén, bǎo zhèng sī jī zhuān zhù kāi chē. huà shuō huí lái, sī jī ān quán jià shǐ, chéng kè cái néng ān quán dào zhàn.",
        "vietnamese": "Hiện nay rất nhiều xe buýt đã lắp cửa cabin bao quanh ghế lái để đảm bảo tài xế tập trung lái xe. Nói đi cũng phải nói lại, tài xế lái xe an toàn thì hành khách mới có thể bình an tới bến."
      },
      {
        "chinese": "我一定得去问问，她这本书是在哪淘来的？不过话又说回来了，打听出来了又怎么样？反正已经被她买走了。",
        "pinyin": "Wǒ yī dìng dé qù wèn wèn, tā zhè běn shū shì zài nǎ táo lái de? bù guò huà yòu shuō huí lái le, dǎ tīng chū lái le yòu zěn me yàng? fǎn zhèng yǐ jīng bèi tā mǎi zǒu le.",
        "vietnamese": "Tôi nhất định phải sang hỏi cô ấy xem quyển sách này săn lùng ở đâu ra. Cơ mà nói đi thì cũng phải nói lại, dò la ra thì đã sao nào? Dù gì sách cũng đã bị cô ấy rinh về mất rồi."
      }
    ]
  },
  {
    "id": "hsk79-g-48",
    "order": 48,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn diễn giải tường minh: 换句话说 (nói cách khác)",
    "titleZh": "换句话说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Phân câu 1 。 换句话说 ， Phân câu 2 giải thích",
    "explanationVi": "Dùng để trình bày lại một nhận định trừu tượng hoặc phức tạp bằng một cách diễn đạt đơn giản hơn, dễ hiểu hơn, hoặc nhấn mạnh bản chất cốt lõi: 'nói cách khác', 'đổi lại cách nói dễ hiểu hơn'.",
    "tips": "Giúp người đọc/người nghe nắm bắt ngay thông điệp chính mà không bị lạc trong thuật ngữ.",
    "examples": [
      {
        "chinese": "喀什绝大多数人口是维吾尔族，汉族仅占10%。换句话说，10个人里只有一个是汉族人。",
        "pinyin": "Kā shén jué dà duō shù rén kǒu shì wéi wú ěr zú, hàn zú jǐn zhàn 1 0 %. huàn jù huà shuō, 1 0 gè rén lǐ zhǐ yǒu yī gè shì hàn zú rén.",
        "vietnamese": "Kashgar có đại đa số dân cư là người Duy Ngô Nhĩ, người Hán chỉ chiếm 10%. Nói cách khác, cứ 10 người thì chỉ có một người là dân tộc Hán."
      },
      {
        "chinese": "读书固然范围要广博，但是也要有所选择，不能什么都读。换句话说，不仅要多读书，还要读好书。",
        "pinyin": "Dú shū gù rán fàn wéi yào guǎng bó, dàn shì yě yào yǒu suǒ xuǎn zé, bù néng shén me dōu dú. huàn jù huà shuō, bù jǐn yào duō dú shū, hái yào dú hǎo shū.",
        "vietnamese": "Đọc sách dẫu phạm vi cần sâu rộng, nhưng cũng phải biết chọn lọc, không thể vớ gì đọc nấy. Nói cách khác, chẳng những cần đọc nhiều sách, mà còn phải đọc sách hay."
      }
    ]
  },
  {
    "id": "hsk79-g-49",
    "order": 49,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn đúc kết súc tích: 简（而）言之 (vắn tắt lại, nói tóm lại)",
    "titleZh": "简（而）言之",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "简（而）言之 ， Kết luận / Tóm lược",
    "explanationVi": "Rút ngắn tối đa những nội dung phân tích dài dòng trước đó thành một câu đúc kết súc tích, cô đọng nhất: 'vắn tắt lại', 'nói một cách ngắn gọn'.",
    "tips": "Văn phong học thuật và báo chí rất ưa chuộng cấu trúc này.",
    "examples": [
      {
        "chinese": "你要问我过年的感受，简言之：热热闹闹、忙忙碌碌、吃吃喝喝、嘻嘻哈哈罢了。",
        "pinyin": "Nǐ yào wèn wǒ guò nián de gǎn shòu, jiǎn yán zhī: rè rè nào nào, máng máng lù lù, chī chī hē hē, xī xī hā hā bà le.",
        "vietnamese": "Nếu bạn hỏi tôi cảm giác ăn Tết thế nào, nói vắn tắt lại thì: rộn rã tưng bừng, tất bật hối hả, ăn uống say sưa, cười đùa rôm rả thế thôi."
      },
      {
        "chinese": "电影艺术的教育作用，在于将人物的境遇、所作的斗争以及内心活动、思想感情传递给观众并为其所理解，从而激起共情。简而言之，就是能否动之以情。",
        "pinyin": "Diàn yǐng yì shù de jiào yù zuò yòng, zài yú jiāng rén wù de jìng yù, suǒ zuò de dòu zhēng yǐ jí nèi xīn huó dòng, sī xiǎng gǎn qíng chuán dì gěi guān zhòng bìng wèi qí suǒ lǐ jiě, cóng ér jī qǐ gòng qíng. jiǎn ér yán zhī, jiù shì néng fǒu dòng zhī yǐ qíng.",
        "vietnamese": "Tác dụng giáo dục của nghệ thuật điện ảnh nằm ở việc truyền tải hoàn cảnh của nhân vật, sự đấu tranh cùng những hoạt động nội tâm và tình cảm tư tưởng tới khán giả để họ thấu cảm, từ đó khơi dậy sự đồng điệu. Nói một cách ngắn gọn, mấu chốt là có lay động được lòng người hay không."
      }
    ]
  },
  {
    "id": "hsk79-g-50",
    "order": 50,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn đồng tình tuyệt đối: 可不（是嘛） (chứ còn gì nữa, đúng quá rồi còn gì)",
    "titleZh": "可不（是嘛）",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "A: ... B: 可不 / 可不是嘛 ， Phân câu",
    "explanationVi": "Khẩu ngữ biểu thị sự tán thành 100% với quan điểm vừa nêu của đối phương, khẳng định điều đó là hiển nhiên đúng: 'chứ còn gì nữa', 'chuẩn không cần chỉnh'.",
    "tips": "Thường có ngữ khí vui vẻ, hào hứng hòa hợp giữa hai người giao tiếp.",
    "examples": [
      {
        "chinese": "“北京的雪总是静悄悄地飘下来，不会有一点声音。只有第二天早上睡醒了去开门，才知道昨天晚上下雪了。”一个道地的北京口音回应说：“可不，北京连雪也文明。”",
        "pinyin": "\"běi jīng de xuě zǒng shì jìng qiāo qiāo dì piāo xià lái, bù huì yǒu yī diǎn shēng yīn. zhǐ yǒu dì èr tiān zǎo shàng shuì xǐng le qù kāi mén, cái zhī dào zuó tiān wǎn shàng xià xuě le.\" yī gè dào dì de běi jīng kǒu yīn huí yīng shuō: \"kě bù, běi jīng lián xuě yě wén míng.\"",
        "vietnamese": "'Tuyết Bắc Kinh bao giờ cũng lặng lẽ buông rơi, không hề phát ra một tiếng động nhỏ. Chỉ sáng hôm sau ngủ dậy mở cửa bước ra mới hay đêm qua tuyết đã rơi rồi.' Một người mang giọng Bắc Kinh đặc sệt đáp lại: 'Chứ còn gì nữa, ngay cả tuyết ở Bắc Kinh cũng có văn hóa văn minh mà.'"
      },
      {
        "chinese": "刘全指着铁子说：“要不是蔬菜大棚，铁子还是贫困户哩！”铁子不好意思地笑了：“可不是嘛！”",
        "pinyin": "Liú quán zhǐ zhe tiě zi shuō: \"yào bù shì shū cài dà péng, tiě zi hái shì pín kùn hù lī!\" tiě zi bù hǎo yì sī dì xiào le: \"kě bù shì ma!\"",
        "vietnamese": "Lưu Toàn chỉ tay vào Thiết Tử nói: 'Nếu không nhờ có nhà kính trồng rau thì Thiết Tử nhà ta vẫn còn nằm trong diện hộ nghèo ấy chứ!' Thiết Tử gãi đầu ngượng ngùng cười: 'Chứ lại không à!'"
      }
    ]
  },
  {
    "id": "hsk79-g-51",
    "order": 51,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn bộc bạch thẳng thắn: 老实说 (thành thật mà nói, thú thật)",
    "titleZh": "老实说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "老实说 ， Phân câu nhận xét thật",
    "explanationVi": "Dùng khi người nói muốn bày tỏ cảm nghĩ chân thật nhất của bản thân, dù điều đó có thể làm đối phương phật lòng hoặc hơi ngượng ngùng: 'thành thật mà nói', 'thú thật lòng mình'.",
    "tips": "Thể hiện sự chân thành, không vòng vo né tránh.",
    "examples": [
      {
        "chinese": "老实说，我对你太失望了。",
        "pinyin": "Lǎo shí shuō, wǒ duì nǐ tài shī wàng le.",
        "vietnamese": "Thành thật mà nói, tôi quá thất vọng về cậu rồi."
      },
      {
        "chinese": "我和我老公现在的状态是，只要我不主动和他说话，他也绝不会找我说话，老实说，有时候我觉得这样也挺好的，默契就行。",
        "pinyin": "Wǒ hé wǒ lǎo gōng xiàn zài de zhuàng tài shì, zhǐ yào wǒ bù zhǔ dòng hé tā shuō huà, tā yě jué bù huì zhǎo wǒ shuō huà, lǎo shí shuō, yǒu shí hòu wǒ jué dé zhè yàng yě tǐng hǎo de, mò qì jiù xíng.",
        "vietnamese": "Tình trạng hiện tại giữa tôi và chồng là chỉ cần tôi không chủ động mở lời, anh ấy cũng tuyệt đối không tìm tôi bắt chuyện; thú thật đôi khi tôi thấy thế này cũng hay, hai bên ngầm hiểu ý nhau là được."
      }
    ]
  },
  {
    "id": "hsk79-g-52",
    "order": 52,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn phát hiện bất ngờ: （你）还别说 (công nhận thật đấy, chớ có coi thường)",
    "titleZh": "（你）还别说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "（你）还别说 ， Phân câu nhận xét",
    "explanationVi": "Khẩu ngữ biểu thị sau khi trực tiếp thử nghiệm hoặc chứng kiến, bản thân mới nhận ra điều người khác nói là hoàn toàn chuẩn xác, vượt ngoài kỳ vọng ban đầu: 'công nhận thật đấy', 'cậu đừng có xem thường nhé'.",
    "tips": "Dùng khi ngạc nhiên trước công dụng kỳ diệu của đồ vật hoặc sự biến chuyển tích cực của sự việc.",
    "examples": [
      {
        "chinese": "我的朋友给我介绍了一位知名造型师。还别说，经他这么一打扮，我感觉整个人年轻了10岁。",
        "pinyin": "Wǒ de péng yǒu gěi wǒ jiè shào le yī wèi zhī míng zào xíng shī. hái bié shuō, jīng tā zhè me yī dǎ bàn, wǒ gǎn jué zhěng gè rén nián qīng le 1 0 suì.",
        "vietnamese": "Bạn tôi giới thiệu cho một nhà tạo mẫu tóc trứ danh. Mà công nhận thật đấy, qua tay anh ấy tân trang lại một cái là tôi thấy cả người trẻ ra đến chục tuổi."
      },
      {
        "chinese": "我当年一咬牙，花了三个月的工资买了这台洗衣机，你还别说，贵有贵的道理，这么多年它没出现过一次质量问题。",
        "pinyin": "Wǒ dāng nián yī yǎo yá, huā le sān gè yuè de gōng zī mǎi le zhè tái xǐ yī jī, nǐ hái bié shuō, guì yǒu guì de dào lǐ, zhè me duō nián tā méi chū xiàn guò yī cì zhì liàng wèn tí.",
        "vietnamese": "Hồi đó tôi cắn răng bỏ ra ba tháng tiền lương mua chiếc máy giặt này, cậu chớ có coi thường nhé, đắt xắt ra miếng đấy, bao nhiêu năm trời nó chưa từng hỏng hóc hay lỗi kỹ thuật một lần nào."
      }
    ]
  },
  {
    "id": "hsk79-g-53",
    "order": 53,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn quở trách/xót xa: 你看你 (xem cậu kìa, xem bản thân kìa)",
    "titleZh": "你看你",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "你看你 ， Phân câu phàn nàn / xót xa",
    "explanationVi": "Khẩu ngữ dùng khi hướng ánh nhìn và sự chú ý vào đối phương để tỏ ý trách móc nhẹ nhàng, hoặc bày tỏ sự xót xa, thương cảm trước tình trạng hiện tại của họ: 'Xem cậu kìa...', 'Bác xem bác kìa...'.",
    "tips": "Ngữ điệu có thể là trách cứ khi con cái làm sai hoặc yêu thương khi thấy người thân hao gầy vất vả.",
    "examples": [
      {
        "chinese": "孩子考试不及格，千万别这样训斥孩子：“你看你，就考这么点分。你看那谁谁谁，人家怎么就能考那么高的分呢？”",
        "pinyin": "Hái zi kǎo shì bù jí gé, qiān wàn bié zhè yàng xùn chì hái zi: \"nǐ kàn nǐ, jiù kǎo zhè me diǎn fēn. nǐ kàn nà shuí shuí shuí, rén jiā zěn me jiù néng kǎo nà me gāo de fēn ne?\"",
        "vietnamese": "Con cái thi không đạt điểm yêu cầu, ngàn vạn lần chớ có mắng mỏ con kiểu: 'Xem con kìa, thi được có chừng này điểm. Nhìn con nhà người ta xem, sao người ta lại đạt điểm cao chót vót thế kia?'"
      },
      {
        "chinese": "小娟啊！别人减肥，你可不能减啊！你看你，本来就瘦，再减的话都没人形了！",
        "pinyin": "Xiǎo juān a! bié rén jiǎn féi, nǐ kě bù néng jiǎn a! nǐ kàn nǐ, běn lái jiù shòu, zài jiǎn de huà dōu méi rén xíng le!",
        "vietnamese": "Tiểu Quyên ơi! Người khác giảm cân chứ cháu tuyệt đối không được giảm đâu đấy! Xem cháu kìa, vốn đã gầy gò thế kia, giảm thêm nữa là người ngợm chẳng ra hình thù gì đâu!"
      }
    ]
  },
  {
    "id": "hsk79-g-54",
    "order": 54,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn xua tan khách sáo/hiểu lầm: 说到哪儿去了 (nói đi đâu thế, vẽ chuyện/nghĩ đi đâu)",
    "titleZh": "说到哪儿去了",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "说到哪儿去了 / 看你想到哪儿去了 ， Phân câu đính chính",
    "explanationVi": "Dùng để xua tan lời cảm ơn khách sáo quá mức của bạn bè người thân (nhắc nhở tình cảm gia đình/bạn bè không cần câu nệ), hoặc bác bỏ lập tức một sự suy đoán sai lệch, gán ghép vô căn cứ của đối phương: 'Nói đi đâu thế!', 'Nghĩ đi đâu xa xôi vậy!'.",
    "tips": "Giúp bầu không khí đàm thoại trở nên gần gũi và hóa giải những ngượng ngùng.",
    "examples": [
      {
        "chinese": "你说到哪儿去了，我才不会对他产生任何好感！",
        "pinyin": "Nǐ shuō dào nǎr qù le, wǒ cái bù huì duì tā chǎn shēng rèn hé hǎo gǎn!",
        "vietnamese": "Cậu nói đi đâu đấy, tôi còn lâu mới có chút cảm tình nào với anh ta nhé!"
      },
      {
        "chinese": "姐姐，看你说到哪儿去了，这么见外，我们是一家人，我怎么会不尽全力帮你呢？",
        "pinyin": "Jiě jiě, kàn nǐ shuō dào nǎr qù le, zhè me jiàn wài, wǒ men shì yī jiā rén, wǒ zěn me huì bù jǐn quán lì bāng nǐ ne?",
        "vietnamese": "Chị ơi, xem kìa chị lại nói đi đâu xa xôi rồi, khách sáo thế làm gì, chị em mình là người một nhà, sao em lại không dốc hết sức giúp chị chứ?"
      }
    ]
  },
  {
    "id": "hsk79-g-55",
    "order": 55,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn cam đoan chân thật: 说真的 (nói thật lòng đấy, nghiêm túc mà nói)",
    "titleZh": "说真的",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "说真的 ， Phân câu giãi bày",
    "explanationVi": "Nhấn mạnh lời nói tiếp theo là hoàn toàn nghiêm túc, phát xuất từ sâu thẳm tâm can chứ không hề có chút đùa cợt hay đãi bôi xã giao nào: 'nói thật lòng đấy', 'nghiêm túc mà nói'.",
    "tips": "Thường dùng trong các cuộc trò chuyện sâu sắc lắng đọng giữa bạn bè hoặc khi giải quyết khúc mắc tình cảm.",
    "examples": [
      {
        "chinese": "说真的，老张，我真怕他！不但我怕，别人也都怕他。他要是来了，我可是一句话都说不出来。",
        "pinyin": "Shuō zhēn de, lǎo zhāng, wǒ zhēn pà tā! bù dàn wǒ pà, bié rén yě dōu pà tā. tā yào shì lái le, wǒ kě shì yī jù huà dōu shuō bù chū lái.",
        "vietnamese": "Nói thật lòng đấy bác Trương ạ, em sợ ông ấy một phép! Chẳng riêng gì em mà ai nấy đều sợ ông ấy. Ông ấy mà bước vào là em cấm có mở mồm nói nổi nửa câu."
      },
      {
        "chinese": "娜娜心平气和地说：“说真的，晓东，你过得好还是不好，对我已经无所谓了。我现在看到你，心里完全没有波澜。你放心吧，我不恨你，你不用抱歉。”",
        "pinyin": "Nà nà xīn píng qì hé dì shuō: \"shuō zhēn de, xiǎo dōng, nǐ guò dé hǎo hái shì bù hǎo, duì wǒ yǐ jīng wú suǒ wèi le. wǒ xiàn zài kàn dào nǐ, xīn lǐ wán quán méi yǒu bō lán. nǐ fàng xīn ba, wǒ bù hèn nǐ, nǐ bù yòng bào qiàn.\"",
        "vietnamese": "Na Na bình thản nói: 'Nói thật lòng nhé Hiểu Đông, anh sống tốt hay không tốt giờ đối với em chẳng còn quan trọng nữa. Em giờ nhìn thấy anh lòng không một chút gợn sóng. Anh yên tâm đi, em không hề oán hận anh, anh không cần phải thấy có lỗi đâu.'"
      }
    ]
  },
  {
    "id": "hsk79-g-56",
    "order": 56,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn giả định nhượng bộ: 退一步说 (lùi một bước mà nói, giả dụ chấp nhận)",
    "titleZh": "退一步说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Phân câu 1 。 退一步说 ， Phân câu 2",
    "explanationVi": "Thủ pháp tranh biện logic cực mạnh: ngay cả khi chấp nhận nhượng bộ một bước (thừa nhận khả năng tình huống xấu nhất hoặc kịch bản đối phương nêu xảy ra), thì kết luận chính vẫn không hề thay đổi: 'lùi một bước mà nói', 'giả dụ cho là như vậy đi chăng nữa'.",
    "tips": "Vũ khí sắc bén trong các bài văn nghị luận bác bỏ luận điểm đối phương.",
    "examples": [
      {
        "chinese": "向一个根本不喜欢数学的人解释为何迷上数学，这几乎不可能。退一步说，他甚至不能向自己解释清楚。",
        "pinyin": "Xiàng yī gè gēn běn bù xǐ huān shù xué de rén jiě shì wèi hé mí shàng shù xué, zhè jǐ hū bù kě néng. tuì yī bù shuō, tā shèn zhì bù néng xiàng zì jǐ jiě shì qīng chǔ.",
        "vietnamese": "Đi giải thích cho một người vốn ghét cay ghét đắng môn toán hiểu tại sao mình lại say mê toán học, điều đó gần như là không tưởng. Lùi một bước mà nói, thậm chí chính anh ta cũng chẳng thể tự giải thích nổi cho bản thân."
      },
      {
        "chinese": "且不说在近几年内，本省电力紧缺的局面不可能有根本性的改观，退一步说，即使电力紧缺得到基本缓解，小火电仍然有其不可替代之处。",
        "pinyin": "Qiě bù shuō zài jìn jǐ nián nèi, běn shěng diàn lì jǐn quē de jú miàn bù kě néng yǒu gēn běn xìng de gǎi guān, tuì yī bù shuō, jí shǐ diàn lì jǐn quē dé dào jī běn huǎn jiě, xiǎo huǒ diàn réng rán yǒu qí bù kě tì dài zhī chù.",
        "vietnamese": "Còn chưa bàn tới việc trong vài năm gần đây tình trạng khan hiếm điện năng của tỉnh nhà khó lòng xoay chuyển căn bản; lùi một bước mà nói, cho dẫu sự thiếu hụt điện có được xoa dịu đôi phần, thì các nhà máy nhiệt điện nhỏ vẫn có vai trò không thể thay thế."
      }
    ]
  },
  {
    "id": "hsk79-g-57",
    "order": 57,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn quả quyết bất chấp: 无论如何 (dù thế nào đi nữa, bất luận ra sao)",
    "titleZh": "无论如何",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "无论如何 ， Chủ ngữ + Phải / Quyết tâm...",
    "explanationVi": "Biểu thị sự kiên định sắt đá, trong bất kỳ hoàn cảnh nào, dù gặp phải khó khăn trở ngại gì thì quyết tâm hoặc hành động cũng nhất định phải thực hiện bằng được: 'dù thế nào đi nữa', 'bất luận ra sao'.",
    "tips": "Tăng cường tối đa ngữ khí khẳng định và sự quyết tâm của người nói.",
    "examples": [
      {
        "chinese": "无论如何，我得去打听打听，她这衣服到底从哪买的？",
        "pinyin": "Wú lùn rú hé, wǒ dé qù dǎ tīng dǎ tīng, tā zhè yī fú dào dǐ cóng nǎ mǎi de?",
        "vietnamese": "Dù thế nào đi chăng nữa, tôi cũng phải đi dò hỏi cho bằng được bộ váy này rốt cuộc cô ấy mua ở đâu ra?"
      },
      {
        "chinese": "追逐梦想的过程必然是艰辛的，但无论如何，你都要坚持下去。",
        "pinyin": "Zhuī zhú mèng xiǎng de guò chéng bì rán shì jiān xīn de, dàn wú lùn rú hé, nǐ dōu yào jiān chí xià qù.",
        "vietnamese": "Chặng đường theo đuổi ước mơ ắt hẳn đầy chông gai trắc trở, nhưng dù trong bất kỳ hoàn cảnh nào, bạn cũng phải cắn răng kiên trì đến cùng."
      }
    ]
  },
  {
    "id": "hsk79-g-58",
    "order": 58,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn đưa ra chủ kiến: 要（让）我说 (nếu để tôi nói, theo ý kiến tôi)",
    "titleZh": "要（让）我说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "要我说 / 要让我说 ， Phân câu đánh giá",
    "explanationVi": "Dùng khi người nói chủ động đưa ra nhận định, đánh giá thẳng thắn mang tính cá nhân về một vấn đề đang tranh luận: 'nếu để tôi nói', 'theo ý tôi thấy thì'.",
    "tips": "Mang khẩu khí tự tin, bộc trực trong văn nói.",
    "examples": [
      {
        "chinese": "你不能只看别人对你热不热情，先得想想自己应该怎么做。要我说呀，你还老觉得自己是个知识分子，身份与众不同。",
        "pinyin": "Nǐ bù néng zhǐ kàn bié rén duì nǐ rè bù rè qíng, xiān dé xiǎng xiǎng zì jǐ yīng gāi zěn me zuò. yào wǒ shuō ya, nǐ hái lǎo jué dé zì jǐ shì gè zhī shí fēn zi, shēn fèn yǔ zhòng bù tóng.",
        "vietnamese": "Cậu không thể cứ chăm chăm nhìn xem người ta có niềm nở với mình hay không, mà trước hết phải suy ngẫm xem bản thân nên làm thế nào. Nếu để tôi nói thẳng nhé, cậu vẫn cứ tự huyễn hoặc mình là tầng lớp trí thức, thân phận cao quý hơn người khác."
      },
      {
        "chinese": "我是没看出来他的书法好在哪里，妙在哪里。要让我说，不同就不同在他是个作家，而不是普通人。",
        "pinyin": "Wǒ shì méi kàn chū lái tā de shū fǎ hǎo zài nǎ lǐ, miào zài nǎ lǐ. yào ràng wǒ shuō, bù tóng jiù bù tóng zài tā shì gè zuò jiā, ér bù shì pǔ tōng rén.",
        "vietnamese": "Tôi chẳng nhìn ra thư pháp của ông ấy hay ở điểm nào, thần thái ở chỗ nào. Nếu để tôi nói thì điểm khác biệt duy nhất là ở chỗ ông ấy mang danh nhà văn chứ không phải thứ dân bình thường."
      }
    ]
  },
  {
    "id": "hsk79-g-59",
    "order": 59,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn dẫn chứng nhãn tiền: 这不 (đấy thấy chưa / chẳng phải sao)",
    "titleZh": "这不",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Phân câu tiền đề 。 这不 ， Minh chứng cụ thể trước mắt",
    "explanationVi": "Dấu hiệu diễn ngôn trỏ trực tiếp vào một sự thật khách quan hiển hiện ngay trước mắt để làm bằng chứng xác thực củng cố cho lời vừa nói trước đó: 'Đấy thấy chưa!', 'Chẳng phải sao!'.",
    "tips": "Rất đặc sắc trong văn kể chuyện và khẩu ngữ sinh hoạt hàng ngày.",
    "examples": [
      {
        "chinese": "那些小伙子经常过来帮我在院子里干活，遇着墙坏了就重新垒。这不，院子的东墙就是他们不久前新垒的。",
        "pinyin": "Nà xiē xiǎo huǒ zi jīng cháng guò lái bāng wǒ zài yuàn zi lǐ gàn huó, yù zhe qiáng huài le jiù zhòng xīn lěi. zhè bù, yuàn zi de dōng qiáng jiù shì tā men bù jiǔ qián xīn lěi de.",
        "vietnamese": "Mấy cậu thanh niên đó thường qua đây đỡ đần tôi làm việc trong sân vườn, hễ thấy tường nứt đổ là xây lại liền. Đấy thấy chưa, bức tường phía đông ngoài sân chính là do mấy đứa nó vừa mới xây lại cách đây ít lâu đấy."
      },
      {
        "chinese": "节日到了，我想给他们改善改善伙食。他俩是滕州的，这不，我准备了大葱、煎饼，还有一大盘肉。",
        "pinyin": "Jié rì dào le, wǒ xiǎng gěi tā men gǎi shàn gǎi shàn huǒ shí. tā liǎ shì téng zhōu de, zhè bù, wǒ zhǔn bèi le dà cōng, jiān bǐng, hái yǒu yī dà pán ròu.",
        "vietnamese": "Dịp lễ đến rồi, tôi muốn cải thiện bữa ăn tươm tất cho tụi nó. Hai đứa vốn là dân Đằng Châu, đấy thấy không, tôi đã chuẩn bị sẵn hành hoa, bánh tráng nướng cùng một đĩa thịt to tướng."
      }
    ]
  },
  {
    "id": "hsk79-g-60",
    "order": 60,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn hệ quả tự nhiên: 这样一来 (như vậy thì, thế là, do đó)",
    "titleZh": "这样一来",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "Tiền đề hành động 。 这样一来 ， Kết quả / Tình thế sinh ra",
    "explanationVi": "Dùng để kết nối sự việc, chỉ ra hệ quả hoặc tình thế mới nảy sinh một cách trực tiếp từ hành động hay quyết định được nêu ở câu trước: 'như vậy thì', 'thế là', 'làm như vậy sẽ dẫn tới'.",
    "tips": "Có thể dẫn ra kết quả tích cực hoặc rủi ro tiêu cực tùy thuộc vào tiền đề.",
    "examples": [
      {
        "chinese": "他在屋后的空地上饲养了一群小鸡。这样一来，等小鸡长大后，他就有鸡蛋和鸡肉可吃了。",
        "pinyin": "Tā zài wū hòu de kōng dì shàng sì yǎng le yī qún xiǎo jī. zhè yàng yī lái, děng xiǎo jī zhǎng dà hòu, tā jiù yǒu jī dàn hé jī ròu kě chī le.",
        "vietnamese": "Ông ấy nuôi một đàn gà con ở mảnh đất trống sau nhà. Như vậy thì, đợi lũ gà lớn khôn là ông vừa có trứng gà tươi lại vừa có thịt gà ngon để ăn."
      },
      {
        "chinese": "这些猎犬虽然个个经验丰富、身手矫健，但是对主人却不够信任。这样一来，整个队伍在捕猎时的战斗力并不高。",
        "pinyin": "Zhè xiē liè quǎn suī rán gè gè jīng yàn fēng fù, shēn shǒu jiǎo jiàn, dàn shì duì zhǔ rén què bù gòu xìn rèn. zhè yàng yī lái, zhěng gè duì wǔ zài bǔ liè shí de zhàn dòu lì bìng bù gāo.",
        "vietnamese": "Những chú chó săn này tuy con nào con nấy dày dạn kinh nghiệm, thân thủ nhanh thoăn thoắt, nhưng lại thiếu đi sự tin tưởng đối với chủ nhân. Như vậy thì, cả đội săn khi vào trận sức chiến đấu không hề cao."
      }
    ]
  },
  {
    "id": "hsk79-g-61",
    "order": 61,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn phàn nàn/than phiền: 真是的 (thật là... / thật hết chỗ nói)",
    "titleZh": "真是的",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "真是的 ， Phân câu phàn nàn / Hoặc đặt ở cuối câu ！",
    "explanationVi": "Cụm từ cảm thán khẩu ngữ dùng để bày tỏ sự bất mãn, phàn nàn hoặc trách móc nhẹ nhàng trước hành vi vụng về, vô tâm hoặc phiền toái của người khác (hoặc chính mình): 'Thật là...', 'Thật hết chỗ nói!'.",
    "tips": "Sắc thái biểu cảm trách móc thường không nặng nề hằn học mà mang tính than thở đời thường.",
    "examples": [
      {
        "chinese": "他在我睡熟的时候偷偷跑了。真是的，我怎么会一点儿动静都没听到，睡得这么沉呢？",
        "pinyin": "Tā zài wǒ shuì shú de shí hòu tōu tōu pǎo le. zhēn shì de, wǒ zěn me huì yìdiǎnr dòng jìng dōu méi tīng dào, shuì dé zhè me chén ne?",
        "vietnamese": "Hắn ta nhân lúc tôi ngủ say như chết đã lén lút chuồn mất. Thật là bực mình, sao tôi lại chẳng nghe thấy chút động tĩnh nào, lại có thể ngủ say đến mức đó chứ?"
      },
      {
        "chinese": "这点儿小事你竟然能唠叨两个多小时，真是的！",
        "pinyin": "Zhè diǎn ér xiǎo shì nǐ jìng rán néng láo dāo liǎng gè duō xiǎo shí, zhēn shì de!",
        "vietnamese": "Có chút chuyện cỏn con thế này mà cậu cũng lải nhải cằn nhằn suốt hơn hai tiếng đồng hồ được, thật hết chỗ nói!"
      }
    ]
  },
  {
    "id": "hsk79-g-62",
    "order": 62,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn tổng luận khoa học: 综上所述 (tóm lại những điều trên, tổng hợp lại)",
    "titleZh": "综上所述",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "综上所述 ， Luận điểm cốt lõi / Đánh giá tổng thể",
    "explanationVi": "Cụm từ liên kết chuẩn mực cao cấp trong văn bản học thuật, báo cáo kinh tế và luận văn chính luận: dùng ở đầu đoạn kết để thâu tóm toàn bộ các luận cứ, số liệu đã phân tích bên trên nhằm rút ra kết luận mang tính định hướng: 'tóm lại những điều trên', 'tổng hợp lại toàn bộ'.",
    "tips": "Đỉnh cao của văn phong chính quy và nghiên cứu khoa học trong HSK 7-9.",
    "examples": [
      {
        "chinese": "生态经济学认为，一切经济活动都是在一定的生态经济系统中进行的。它是由生态系统和经济系统两个子系统有机结合形成的。经济活动不单在经济系统中进行，同时也在生态系统中运行。也就是说，同时要受经济规律和生态规律的双重制约。有的地区比其他地区发展得好、前景也更广阔，关键就在于主政者能够不但遵循商业经营规律，同时也满足生态平衡的自然规律要求。综上所述，创造经济效益、增强地区的竞争力与可持续发展密不可分，关键之处是人类是否在合理地利用资源、是否在改善和保护环境。",
        "pinyin": "Shēng tài jīng jì xué rèn wèi, yī qiè jīng jì huó dòng dōu shì zài yī dìng de shēng tài jīng jì xì tǒng zhōng jìn xíng de. tā shì yóu shēng tài xì tǒng hé jīng jì xì tǒng liǎng gè zi xì tǒng yǒu jī jié hé xíng chéng de. jīng jì huó dòng bù dān zài jīng jì xì tǒng zhōng jìn xíng, tóng shí yě zài shēng tài xì tǒng zhōng yùn xíng. yě jiù shì shuō, tóng shí yào shòu jīng jì guī lǜ hé shēng tài guī lǜ de shuāng zhòng zhì yuē. yǒu de dì qū bǐ qí tā dì qū fā zhǎn dé hǎo, qián jǐng yě gèng guǎng kuò, guān jiàn jiù zài yú zhǔ zhèng zhě néng gòu bù dàn zūn xún shāng yè jīng yíng guī lǜ, tóng shí yě mǎn zú shēng tài píng héng de zì rán guī lǜ yào qiú. zōng shàng suǒ shù, chuàng zào jīng jì xiào yì, zēng qiáng dì qū de jìng zhēng lì yǔ kě chí xù fā zhǎn mì bù kě fēn, guān jiàn zhī chù shì rén lèi shì fǒu zài hé lǐ dì lì yòng zī yuán, shì fǒu zài gǎi shàn hé bǎo hù huán jìng.",
        "vietnamese": "Kinh tế học sinh thái cho rằng mọi hoạt động kinh tế đều diễn ra trong một hệ thống kinh tế sinh thái nhất định, được hình thành bởi sự kết hợp hữu cơ giữa hai phân hệ sinh thái và kinh tế. Hoạt động kinh tế không chỉ vận hành trong hệ thống kinh tế mà còn vận hành trong cả hệ sinh thái, chịu sự ràng buộc kép của cả quy luật kinh tế lẫn quy luật tự nhiên. Một số địa phương phát triển vượt trội và có triển vọng xán lạn hơn các nơi khác, mấu chốt là nhờ các nhà hoạch định chính sách chẳng những tuân thủ quy luật kinh doanh thương mại mà còn đáp ứng nghiêm ngặt quy luật cân bằng sinh thái. Tóm lại những điều trên, việc tạo ra hiệu quả kinh tế và gia tăng năng lực cạnh tranh gắn liền mật thiết với sự phát triển bền vững, mà nhân tố cốt lõi là con người có sử dụng tài nguyên một cách hợp lý và có cải thiện, bảo vệ môi trường hay không."
      },
      {
        "chinese": "在这两天的赛场上，对面实力强大，调兵遣将游刃有余，相比起来，我们在女子项目上可与之匹敌，男双也有机会，但男单相对处于弱势。综上所述，赢下对方的困难不小，可他们碰见我们，心里未必就不发怵。",
        "pinyin": "Zài zhè liǎng tiān de sài chǎng shàng, duì miàn shí lì qiáng dà, diào bīng qiǎn jiāng yóu rèn yǒu yú, xiāng bǐ qǐ lái, wǒ men zài nǚ zi xiàng mù shàng kě yǔ zhī pǐ dí, nán shuāng yě yǒu jī huì, dàn nán dān xiāng duì chù yú ruò shì. zōng shàng suǒ shù, yíng xià duì fāng de kùn nán bù xiǎo, kě tā men pèng jiàn wǒ men, xīn lǐ wèi bì jiù bù fā chù.",
        "vietnamese": "Trên đấu trường hai ngày qua, đối phương sở hữu thực lực hùng hậu, điều binh khiển tướng vô cùng điêu luyện, so lại thì chúng ta ở nội dung nữ có thể tranh tài sòng phẳng, đôi nam cũng có cơ hội, duy chỉ có đơn nam tương đối thất thế. Tóm lại những điều trên, đánh bại được đối thủ là thách thức không hề nhỏ, nhưng khi chạm trán chúng ta thì chưa chắc trong lòng họ đã không run sợ."
      }
    ]
  },
  {
    "id": "hsk79-g-63",
    "order": 63,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn bao quát đại thể: 总的来说 (nhìn chung mà nói, tổng thể lại)",
    "titleZh": "总的来说",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "总的来说 / 总的看 ， Phân câu đánh giá bao quát",
    "explanationVi": "Dùng để đưa ra nhận xét, đánh giá chung mang tính bao quát đối với toàn bộ tình hình, sau khi đã cân nhắc cả mặt tích cực lẫn mặt hạn chế: 'nhìn chung mà nói', 'tổng thể lại'.",
    "tips": "Giúp lời nhận định trở nên công tâm, toàn diện và có sức thuyết phục.",
    "examples": [
      {
        "chinese": "法制组调查组赴广东省多地，对招商引资工作进行了深入调研。总的来说，工作取得了不小的成就，但也暴露出了若干具体问题。",
        "pinyin": "Fǎ zhì zǔ diào chá zǔ fù guǎng dōng shěng duō dì, duì zhāo shāng yǐn zī gōng zuò jìn xíng le shēn rù diào yán. zǒng de lái shuō, gōng zuò qǔ dé le bù xiǎo de chéng jiù, dàn yě bào lù chū le ruò gàn jù tǐ wèn tí.",
        "vietnamese": "Tổ điều tra thuộc Ban Pháp chế đã tới nhiều địa phương của tỉnh Quảng Đông tiến hành khảo sát chuyên sâu về công tác thu hút vốn đầu tư. Nhìn chung mà nói, công tác đã gặt hái được những thành tựu không nhỏ, song cũng bộc lộ ra một số vấn đề cụ thể."
      },
      {
        "chinese": "他虽然性子急，有时说话有点儿伤人，但总的来说，他是个善良、真诚的人，关键时刻，总能给予我最及时的帮助。",
        "pinyin": "Tā suī rán xìng zi jí, yǒu shí shuō huà yǒu diǎn ér shāng rén, dàn zǒng de lái shuō, tā shì gè shàn liáng, zhēn chéng de rén, guān jiàn shí kè, zǒng néng gěi yǔ wǒ zuì jí shí de bāng zhù.",
        "vietnamese": "Anh ấy tuy tính tình nóng nảy, đôi lúc ăn nói có phần làm tổn thương người khác, nhưng nhìn chung mà nói, anh ấy là một người lương thiện và chân thành, những lúc then chốt bao giờ cũng dang tay giúp đỡ tôi kịp thời nhất."
      }
    ]
  },
  {
    "id": "hsk79-g-64",
    "order": 64,
    "category": "cu-phap-4-chu",
    "categoryName": "Cụm 4 chữ & Dấu hiệu diễn ngôn",
    "categoryIcon": "💬",
    "titleVi": "Dấu hiệu diễn ngôn quy nạp tối hậu: 总而言之 (tóm lại, tựu trung lại)",
    "titleZh": "总而言之",
    "grammarType": "短语",
    "categoryType": "",
    "grammarDetail": "其他（话语标记）",
    "structure": "总而言之 ， Kết luận tối hậu",
    "explanationVi": "Cụm từ đúc kết mang tính quy nạp cổ điển trang trọng, dùng khi muốn khép lại toàn bộ bài viết hay cuộc đàm luận bằng một nguyên lý hoặc thông điệp then chốt nhất: 'tóm lại', 'tựu trung lại', 'tóm một câu là'.",
    "tips": "Thường có sức nặng kết luận cao hơn và cô đọng hơn '总的来说'.",
    "examples": [
      {
        "chinese": "现在这个时代，你不但可以进行传统的阅读自学，还可以在网络上参加正规大学开设的慕课，学习之后甚至能获得学分认定。总而言之，一个有志于学习的人，肯定能够找到适合自己的学习之路，从而走上精彩的人生之路。",
        "pinyin": "Xiàn zài zhè gè shí dài, nǐ bù dàn kě yǐ jìn xíng chuán tǒng de yuè dú zì xué, hái kě yǐ zài wǎng luò shàng cān jiā zhèng guī dà xué kāi shè de mù kè, xué xí zhī hòu shèn zhì néng huò dé xué fēn rèn dìng. zǒng ér yán zhī, yī gè yǒu zhì yú xué xí de rén, kěn dìng néng gòu zhǎo dào shì hé zì jǐ de xué xí zhī lù, cóng ér zǒu shàng jīng cǎi de rén shēng zhī lù.",
        "vietnamese": "Thời đại ngày nay, bạn chẳng những có thể tự học qua sách vở truyền thống, mà còn có thể tham gia các khóa học trực tuyến MOOC do các trường đại học chính quy giảng dạy trên mạng, sau khi hoàn thành thậm chí còn được công nhận tín chỉ. Tóm lại, một người có chí tiến thủ hiếu học nhất định sẽ tìm ra con đường học tập phù hợp nhất cho mình, từ đó bước đi trên một chặng đường đời xán lạn rực rỡ."
      },
      {
        "chinese": "鲁迅早就主张用“拿来主义”对待他国的科学文化。他主张“拿来”以后，再区别好坏，或用或弃，总而言之，为我所用。",
        "pinyin": "Lǔ xùn zǎo jiù zhǔ zhāng yòng \"ná lái zhǔ yì\" duì dài tā guó de kē xué wén huà. tā zhǔ zhāng \"ná lái\" yǐ hòu, zài qū bié hǎo huài, huò yòng huò qì, zǒng ér yán zhī, wèi wǒ suǒ yòng.",
        "vietnamese": "Lỗ Tấn từ sớm đã chủ trương áp dụng 'chủ nghĩa tiếp thu' đối với nền văn hóa khoa học của các quốc gia khác. Ông chủ trương 'tiếp thu lấy' trước, rồi sau đó mới phân định tốt xấu, hoặc giữ lại dùng hoặc lược bỏ đi, tựu trung lại đều là biến chúng thành thứ phục vụ cho ta."
      }
    ]
  },
  {
    "id": "hsk79-g-65",
    "order": 65,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc cố định bi đát/cùng cực: X到这个地步/份上 (X đến mức độ/nước này)",
    "titleZh": "X到这个地步/份上",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Sự việc / Lời nói + 闹 / 搞 / 说 + 到这个地步 / 份上",
    "explanationVi": "Biểu thị sự việc hoặc mối quan hệ đã diễn biến xấu đi đến đỉnh điểm, không còn đường cứu vãn hoặc lời nói đã phơi bày cạn kiệt không còn gì để giấu giếm: 'đến mức độ này', 'đến nước này rồi'.",
    "tips": "Thường đi kèm các động từ như '闹' (làm ầm lên), '说到' (nói đến), '走到' (đi đến).",
    "examples": [
      {
        "chinese": "他的出发点是好的，只是没想到事情会闹到这个地步。",
        "pinyin": "Tā de chū fā diǎn shì hǎo de, zhǐ shì méi xiǎng dào shì qíng huì nào dào zhè gè dì bù.",
        "vietnamese": "Xuất phát điểm của anh ấy vốn tốt đẹp, chỉ là không ngờ sự việc lại ầm ĩ đến mức độ này."
      },
      {
        "chinese": "她是铁了心要走，话说到这个份上了，再挽留也就没什么意思。",
        "pinyin": "Tā shì tiě le xīn yào zǒu, huà shuō dào zhè gè fèn shàng le, zài wǎn liú yě jiù méi shén me yì sī.",
        "vietnamese": "Cô ấy đã sắt đá một lòng muốn dứt áo ra đi, lời lẽ đã nói đến nước này rồi thì có níu kéo thêm cũng chẳng còn ý nghĩa gì nữa."
      }
    ]
  },
  {
    "id": "hsk79-g-66",
    "order": 66,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Bổ ngữ mức độ tột cùng khẩu ngữ: X得要命/要死 (X muốn chết / đến chết được)",
    "titleZh": "X得要命/要死",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tính từ / Tâm lý + 得要命 / 得要死",
    "explanationVi": "Bổ ngữ trình độ khẩu ngữ diễn tả trạng thái, cảm giác cơ thể hoặc tâm lý đã đạt đến mức cực hạn không chịu nổi: 'lạnh muốn chết' (冷得要死), 'thích đến mê mệt' (喜欢得要命), 'đau muốn chết' (疼得要命).",
    "tips": "Mang cảm xúc cực kỳ mạnh mẽ, chỉ dùng trong khẩu ngữ thân mật.",
    "examples": [
      {
        "chinese": "他对他那一对双胞胎儿女，喜欢得要命。",
        "pinyin": "Tā duì tā nà yī duì shuāng bāo tāi ér nǚ, xǐ huān dé yào mìng.",
        "vietnamese": "Anh ấy đối với cặp con sinh đôi của mình cưng nựng yêu thích đến chết đi được."
      },
      {
        "chinese": "今年福州破天荒下起了雪，天气冷得要死。幸亏家里提前装了地暖。",
        "pinyin": "Jīn nián fú zhōu pò tiān huāng xià qǐ le xuě, tiān qì lěng dé yào sǐ. xìng kuī jiā lǐ tí qián zhuāng le dì nuǎn.",
        "vietnamese": "Năm nay Phúc Châu hiếm hoi phá lệ đổ tuyết, thời tiết rét buốt đến muốn chết. May sao trong nhà đã sớm lắp hệ thống sưởi sàn."
      }
    ]
  },
  {
    "id": "hsk79-g-67",
    "order": 67,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc cố định phủ định dứt khoát: X都不/没X (X cũng không thèm X)",
    "titleZh": "X都不/没X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "连 + Động từ + 都不 / 没 + Động từ (连看都不看, 提都没提过)",
    "explanationVi": "Lặp lại động từ với phó từ phủ định '都不' hoặc '没' để nhấn mạnh hành động tối thiểu nhất cũng hoàn toàn không buồn thực hiện: 'nghe cũng chẳng buồn nghe' (听都不听), 'nhắc cũng chưa từng nhắc' (提都没提).",
    "tips": "Nhấn mạnh thái độ thờ ơ, lạnh lùng hoặc sự lãng quên triệt để.",
    "examples": [
      {
        "chinese": "儿子再次打来电话，可他连听都不听就直接把电话挂掉，然后把话筒放在一边，这样他儿子就再也打不进来了。",
        "pinyin": "Ér zi zài cì dǎ lái diàn huà, kě tā lián tīng dōu bù tīng jiù zhí jiē bǎ diàn huà guà diào, rán hòu bǎ huà tǒng fàng zài yī biān, zhè yàng tā ér zi jiù zài yě dǎ bù jìn lái le.",
        "vietnamese": "Người con trai lại gọi điện tới, thế nhưng ông ngay cả nghe cũng không buồn nghe mà dập máy cái rụp, rồi đặt ống nghe sang một bên để con trai không thể nào gọi vào được nữa."
      },
      {
        "chinese": "我敢断定，你托他办的这件事，他在老板面前提都没提过。",
        "pinyin": "Wǒ gǎn duàn dìng, nǐ tuō tā bàn de zhè jiàn shì, tā zài lǎo bǎn miàn qián tí dōu méi tí guò.",
        "vietnamese": "Tôi dám chắc như đinh đóng cột rằng, việc cậu cậy nhờ anh ta giúp, trước mặt sếp anh ta đến một chữ cũng chưa từng đả động tới."
      }
    ]
  },
  {
    "id": "hsk79-g-68",
    "order": 68,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc cố định quả quyết tới bến: X就X个Y (đã X thì X cho thật Y)",
    "titleZh": "X就X个Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ 1 + 就 + Động từ 1 + 个 + Tính từ (玩就玩个痛快, 去就去个好饭店)",
    "explanationVi": "Thể hiện sự hào phóng, quyết đoán và chịu chơi: 'một khi đã làm việc gì thì phải làm cho thật trọn vẹn, thỏa mãn và chất lượng nhất': 'đã chơi thì chơi cho đã đời' (玩就玩个痛快).",
    "tips": "Ngữ khí khẳng định, hào sảng và quyết liệt.",
    "examples": [
      {
        "chinese": "玩就玩个痛快，反正明天还是假期。",
        "pinyin": "Wán jiù wán gè tòng kuài, fǎn zhèng míng tiān hái shì jiǎ qī.",
        "vietnamese": "Đã chơi thì chơi cho đã đời thỏa thích, dù sao ngày mai vẫn còn là ngày nghỉ mà."
      },
      {
        "chinese": "今天我请客，你不用心疼钱，咱去就去个好点儿的饭店。",
        "pinyin": "Jīn tiān wǒ qǐng kè, nǐ bù yòng xīn téng qián, zán qù jiù qù gè hǎo diǎn ér de fàn diàn.",
        "vietnamese": "Hôm nay tôi bao chầu này, cậu không cần phải xót tiền, chúng mình đã đi thì đến hẳn nhà hàng xịn sò đàng hoàng."
      }
    ]
  },
  {
    "id": "hsk79-g-69",
    "order": 69,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc lặp luân phiên dày vò: X了Y，Y了X (hết X lại Y, lặp đi lặp lại không dứt)",
    "titleZh": "X了Y，Y了X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ 1 + 了 + Động từ 2 ， Động từ 2 + 了 + Động từ 1 (吃了吐，吐了吃 / 睡了醒，醒了睡)",
    "explanationVi": "Diễn tả hai hành vi đối lập hoặc liên tiếp cứ luân phiên xoay vòng lặp đi lặp lại nhiều lần, thường gây ra cảm giác mệt mỏi, bất an hoặc dày vò: 'vừa ăn vào lại nôn ra' (吃了吐，吐了吃), 'chợp mắt lại tỉnh' (睡了醒，醒了睡).",
    "tips": "Rất giàu tính hình tượng và cảm xúc nội tâm.",
    "examples": [
      {
        "chinese": "在海上生活可不是件简单的事。这几天，我们晕船晕得吃了吐，吐了吃，一点儿胃口都没有。",
        "pinyin": "Zài hǎi shàng shēng huó kě bù shì jiàn jiǎn dān de shì. zhè jǐ tiān, wǒ men yūn chuán yūn dé chī le tǔ, tǔ le chī, yìdiǎnr wèi kǒu dōu méi yǒu.",
        "vietnamese": "Cuộc sống lênh đênh trên biển quả thực không hề đơn giản chút nào. Mấy ngày nay, chúng tôi say sóng đến mức vừa ăn vào lại nôn ra, nôn xong lại ráng ăn, chẳng còn chút cảm giác ngon miệng nào."
      },
      {
        "chinese": "昨天晚上我睡了醒，醒了睡，心里十分烦躁，总觉得我们的秘密被泄露了。",
        "pinyin": "Zuó tiān wǎn shàng wǒ shuì le xǐng, xǐng le shuì, xīn lǐ shí fēn fán zào, zǒng jué dé wǒ men de mì mì bèi xiè lù le.",
        "vietnamese": "Đêm qua tôi cứ chợp mắt rồi lại tỉnh, tỉnh dậy rồi lại thiếp đi, trong lòng bồn chồn bứt rứt vô cùng, cứ nơm nớp lo sợ bí mật của chúng tôi đã bị lộ."
      }
    ]
  },
  {
    "id": "hsk79-g-70",
    "order": 70,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc liên từ bất chấp phân định: X也好，Y也罢 (dù là X hay là Y, bất kể X hay Y)",
    "titleZh": "X也好，Y也罢",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Vế A + 也好 ， Vế B + 也罢 ， Phân câu quyết định",
    "explanationVi": "Đưa ra hai trường hợp đối lập hoặc bổ sung để biểu thị thái độ không quan tâm, gác lại sự phán xét của người khác và khẳng định lập trường không đổi: 'tin cũng được mà không tin cũng chẳng sao', 'khen cũng tốt mà chê cũng mặc'.",
    "tips": "Tương đương với '无论是...还是...', nhưng mang sắc thái văn phong tự tại, phóng khoáng hơn.",
    "examples": [
      {
        "chinese": "你相信也好，不相信也罢，反正我没有在背后说过你的坏话。",
        "pinyin": "Nǐ xiāng xìn yě hǎo, bù xiāng xìn yě bà, fǎn zhèng wǒ méi yǒu zài bèi hòu shuō guò nǐ de huài huà.",
        "vietnamese": "Bạn có tin cũng được, không tin cũng mặc, tóm lại tôi chưa từng nói xấu sau lưng bạn bao giờ."
      },
      {
        "chinese": "不论别人说我幼稚也好，不成熟也罢，我都会坚持自己的原则。",
        "pinyin": "Bù lùn bié rén shuō wǒ yòu zhì yě hǎo, bù chéng shú yě bà, wǒ dōu huì jiān chí zì jǐ de yuán zé.",
        "vietnamese": "Bất luận người đời bảo tôi ấu trĩ hay chê tôi chưa chín chắn, tôi vẫn sẽ kiên định giữ vững nguyên tắc sống của mình."
      }
    ]
  },
  {
    "id": "hsk79-g-71",
    "order": 71,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc cảm thán tột bực: 别提（有）多+形容词+了 (khỏi phải nói... biết chừng nào)",
    "titleZh": "别提（有）多+形容词+了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "别提（有）多 + Tính từ + 了 ！",
    "explanationVi": "Cấu trúc khẩu ngữ biểu cảm cao biểu thị mức độ tính chất cao đến mức ngôn từ không thể diễn tả xiết: 'khỏi phải nói đau lòng biết chừng nào' (别提多伤心了), 'kỳ diệu không sao tả xiết' (别提有多奇妙了).",
    "tips": "Thường đứng ở cuối câu cảm thán trong văn đàm thoại hoặc nhật ký tự sự.",
    "examples": [
      {
        "chinese": "她这次考试没考好，整整哭了一天，别提多伤心了。",
        "pinyin": "Tā zhè cì kǎo shì méi kǎo hǎo, zhěng zhěng kū le yī tiān, bié tí duō shāng xīn le.",
        "vietnamese": "Lần này thi cử không làm tốt, cô ấy khóc ròng rã suốt cả ngày trời, khỏi phải nói đau lòng buồn bã biết chừng nào."
      },
      {
        "chinese": "我和爸爸昨天第一次坐了过山车，那种体验，别提有多奇妙了。",
        "pinyin": "Wǒ hé bà bà zuó tiān dì yī cì zuò le guò shān chē, nà zhǒng tǐ yàn, bié tí yǒu duō qí miào le.",
        "vietnamese": "Tôi với bố hôm qua lần đầu tiên được đi tàu lượn siêu tốc, trải nghiệm cảm giác ấy quả thật kỳ thú không sao kể xiết."
      }
    ]
  },
  {
    "id": "hsk79-g-72",
    "order": 72,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc so sánh ngang ngửa cao cấp: 不亚于…… (không hề thua kém gì, chẳng kém cạnh)",
    "titleZh": "不亚于……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + （丝毫不 / 绝不） 亚于 + Đối tượng so sánh",
    "explanationVi": "'亚于' vốn là kết cấu giới từ Hán cổ nghĩa là 'kém hơn'. '不亚于' phủ định nghĩa là không hề thua kém, trình độ hoặc khí thế hoàn toàn sánh ngang với đối tượng đối sánh: 'khí thế không kém cạnh Vạn Lý Trường Thành Bát Đạt Lĩnh', 'am hiểu không thua hướng dẫn viên chuyên nghiệp'.",
    "tips": "Văn phong trang nhã, giàu sức thuyết phục trong văn miêu tả và bình luận.",
    "examples": [
      {
        "chinese": "站在慕田峪长城的高处看去，只见长城宛如一条曲折蜿蜒的巨龙，气势丝毫不亚于八达岭长城。",
        "pinyin": "Zhàn zài mù tián yù zhǎng chéng de gāo chù kàn qù, zhǐ jiàn zhǎng chéng wǎn rú yī tiáo qū zhé wān yán de jù lóng, qì shì sī háo bù yà yú bā dá lǐng zhǎng chéng.",
        "vietnamese": "Đứng từ trên đỉnh cao Vạn Lý Trường Thành đoạn Mộ Điền Dục phóng tầm mắt nhìn ra, chỉ thấy Trường Thành tựa như con rồng khổng lồ uốn lượn quanh co, khí thế hào hùng chẳng hề thua kém Bát Đạt Lĩnh chút nào."
      },
      {
        "chinese": "她一说起家乡便打开了话匣子，那骄傲的神情透出对家乡无比的热爱。她对每一处名胜的了解程度不亚于一个专业导游。",
        "pinyin": "Tā yī shuō qǐ jiā xiāng biàn dǎ kāi le huà xiá zi, nà jiāo ào de shén qíng tòu chū duì jiā xiāng wú bǐ de rè ài. tā duì měi yī chù míng shèng de le jiě chéng dù bù yà yú yī gè zhuān yè dǎo yóu.",
        "vietnamese": "Cô ấy hễ nhắc tới quê hương là bắt đầu mở máy nói liến thoắng, nét mặt tự hào toát lên tình yêu quê hương tha thiết khôn cùng. Mức độ am hiểu của cô về từng danh lam thắng cảnh chẳng hề thua kém một hướng dẫn viên chuyên nghiệp."
      }
    ]
  },
  {
    "id": "hsk79-g-73",
    "order": 73,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc bối rối bất lực: 不知X是/才好 (chẳng biết X thế nào cho phải/mới được)",
    "titleZh": "不知X是/才好",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "不知 + 如何 / 怎么办 + 是好 / 才好",
    "explanationVi": "Diễn tả tâm trạng bối rối, hoang mang, mất phương hướng khi đột ngột gặp sự cố hoặc biến cố bất ngờ mà không có sẵn giải pháp: 'chẳng biết làm sao cho phải' (不知如何是好 / 不知怎么办才好).",
    "tips": "'不知如何是好' mang hơi hướng văn viết/thành ngữ; '不知怎么办才好' phổ biến trong khẩu ngữ.",
    "examples": [
      {
        "chinese": "很多年轻人工作上有闯劲，但比较毛躁，遭遇挫折时，总不知如何是好。",
        "pinyin": "Hěn duō nián qīng rén gōng zuò shàng yǒu chuǎng jìn, dàn bǐ jiào máo zào, zāo yù cuò zhé shí, zǒng bù zhī rú hé shì hǎo.",
        "vietnamese": "Nhiều bạn trẻ trong công việc rất có chí xông pha nhưng tính khí lại hấp tấp bốc đồng, khi vấp phải trắc trở thường lúng túng chẳng biết làm thế nào cho phải."
      },
      {
        "chinese": "她告诉我她和男友分手了，很痛苦。可我真的不知怎么办才好，只能不停地安慰她。",
        "pinyin": "Tā gào sù wǒ tā hé nán yǒu fēn shǒu le, hěn tòng kǔ. kě wǒ zhēn de bù zhī zěn me bàn cái hǎo, zhǐ néng bù tíng dì ān wèi tā.",
        "vietnamese": "Cô ấy tâm sự rằng mình đã chia tay bạn trai và đang rất suy sụp. Thế nhưng tôi thực lòng chẳng biết phải làm sao mới giúp được, chỉ đành hết lời an ủi động viên cô."
      }
    ]
  },
  {
    "id": "hsk79-g-74",
    "order": 74,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phàn nàn tần suất vô cớ: 动不动就…… (hở một tí là, động một chút là)",
    "titleZh": "动不动就……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 动不动就 + Hành động / Phản ứng tiêu cực",
    "explanationVi": "Diễn tả một hành vi tiêu cực hoặc phản ứng thái quá xảy ra quá thường xuyên vì những lý do vụn vặt không đáng có, kèm theo sự phàn nàn, khó chịu của người nói: 'hở một tí là gọi điện', 'động một tí là cáu gắt/bóp méo lời nói'.",
    "tips": "Bao hàm sự chê trách và bất mãn của người nói.",
    "examples": [
      {
        "chinese": "那姑娘动不动就给他打电话，弄得别人都以为他们是恋爱关系。",
        "pinyin": "Nà gū niáng dòng bù dòng jiù gěi tā dǎ diàn huà, nòng dé bié rén dōu yǐ wèi tā men shì liàn ài guān xì.",
        "vietnamese": "Cô gái đó hở một tí là gọi điện thoại cho anh ấy, làm cho mọi người xung quanh ai cũng tưởng hai đứa đang hẹn hò yêu đương."
      },
      {
        "chinese": "“我根本没有说过那些话！”王静的脸沉了下来，“你怎么动不动就歪曲我？”",
        "pinyin": "\"wǒ gēn běn méi yǒu shuō guò nà xiē huà!\" wáng jìng de liǎn chén le xià lái, \"nǐ zěn me dòng bù dòng jiù wāi qū wǒ?\"",
        "vietnamese": "'Tôi chưa từng nói những lời như thế bao giờ!' Sắc mặt Vương Tĩnh sa sầm xuống, 'Sao cậu cứ động một tí là bóp méo lời tôi thế hả?'"
      }
    ]
  },
  {
    "id": "hsk79-g-75",
    "order": 75,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc chuốc lấy hậu quả xấu: 动词+得个…… (chuốc lấy kết cục..., mang lấy tiếng...)",
    "titleZh": "动词+得个……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ + 得个 + Danh từ / Kết quả xấu (落得个..., 闹得个...)",
    "explanationVi": "Đi sau các động từ như '落' (rơi vào), '闹' (gây ra), '搞' (làm thành) để dẫn ra một kết cục thảm hại, tai tiếng hoặc mất mát nặng nề do sai lầm của bản thân: 'chuốc lấy tiếng xấu là bội tín' (落得个没有诚信的名声), 'gây nên kết cục trắng tay' (闹得个血本无归).",
    "tips": "Thường gặp trong các câu chuyện đúc kết bài học đắt giá về đạo đức hoặc kinh doanh.",
    "examples": [
      {
        "chinese": "小黄怎么也不会想到，这份就业协议把自己送上了法庭，赔了2万元“违约金”不说，还落得个“没有诚信”的名声。",
        "pinyin": "Xiǎo huáng zěn me yě bù huì xiǎng dào, zhè fèn jiù yè xié yì bǎ zì jǐ sòng shàng le fǎ tíng, péi le 2 wàn yuán \"wéi yuē jīn\" bù shuō, hái luò dé gè \"méi yǒu chéng xìn\" de míng shēng.",
        "vietnamese": "Tiểu Hoàng nằm mơ cũng không ngờ rằng, bản hợp đồng tuyển dụng này lại đẩy mình ra tòa, chẳng những phải bồi thường 2 vạn tệ tiền vi phạm hợp đồng, mà còn chuốc lấy cái danh mang tiếng là kẻ bội tín bất trung."
      },
      {
        "chinese": "他也曾在股市搏杀，企图大赚一笔，结果闹得个血本无归，连房子都卖了。",
        "pinyin": "Tā yě céng zài gǔ shì bó shā, qǐ tú dà zhuàn yī bǐ, jié guǒ nào dé gè xuè běn wú guī, lián fáng zi dōu mài le.",
        "vietnamese": "Anh ta cũng từng lăn xả trên thị trường chứng khoán nuôi mộng kiếm bộn tiền, rốt cuộc chuốc lấy kết cục trắng tay tán gia bại sản, đến cả căn nhà cũng phải bán xới."
      }
    ]
  },
  {
    "id": "hsk79-g-76",
    "order": 76,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc thỏa thê hành vi khẩu ngữ: 动词+个X (làm một trận cho X, làm cái gì mà X)",
    "titleZh": "动词+个X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ + 个 + Tính từ / Nghi vấn (喝个痛快, 玩个底朝天, 玩个什么劲儿)",
    "explanationVi": "'个' đóng vai trò trợ từ bổ ngữ làm câu nói thêm sinh động: 1) Diễn tả hành động diễn ra thỏa thích, triệt để đến cùng ('喝个痛快' - uống một trận cho đã); 2) Dùng trong câu hỏi tu từ phản bác sự vô bổ ('玩个什么劲儿' - chơi bời có tích sự gì).",
    "tips": "Sắc thái khẩu ngữ cực kỳ sống động và giàu nhạc điệu.",
    "examples": [
      {
        "chinese": "你来我家，我一定用珍藏多年的好酒招待你，让你喝个痛快。",
        "pinyin": "Nǐ lái wǒ jiā, wǒ yī dìng yòng zhēn cáng duō nián de hǎo jiǔ zhāo dài nǐ, ràng nǐ hē gè tòng kuài.",
        "vietnamese": "Cậu đến nhà tôi chơi, tôi nhất định sẽ đem bình rượu quý ủ bao năm ra thết đãi, để cậu uống một chầu cho thật đã đời."
      },
      {
        "chinese": "你下班之后就回家不行吗？天天在外面玩个什么劲儿？",
        "pinyin": "Nǐ xià bān zhī hòu jiù huí jiā bù xíng ma? tiān tiān zài wài miàn wán gè shén me jìnr?",
        "vietnamese": "Tan làm cậu về thẳng nhà không được hay sao? Ngày nào cũng la cà đàn đúm bên ngoài thì có cái tích sự gì chứ?"
      }
    ]
  },
  {
    "id": "hsk79-g-77",
    "order": 77,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc rạch ròi/tự nhiên: 该X（就）X，该Y（就）Y (cần X thì cứ X, cần Y thì cứ Y)",
    "titleZh": "该X（就）X，该Y（就）Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "该 + Động từ 1 + （就） + Động từ 1 ， 该 + Động từ 2 + （就） + Động từ 2",
    "explanationVi": "Biểu thị sự rạch ròi, việc nào ra việc đó, hoặc khuyên người khác hãy giữ thái độ lạc quan, sinh hoạt bình thường đúng quy luật mà không cần lo nghĩ quá nhiều: 'cần ăn thì cứ ăn, cần uống thì cứ uống' (该吃吃，该喝喝), 'học ra học, chơi ra chơi' (该学就学，该玩就玩).",
    "tips": "Phương châm sống tích cực, giải tỏa căng thẳng tâm lý.",
    "examples": [
      {
        "chinese": "遇事别多想，该吃吃，该喝喝，天塌不下来。",
        "pinyin": "Yù shì bié duō xiǎng, gāi chī chī, gāi hē hē, tiān tā bù xià lái.",
        "vietnamese": "Gặp chuyện chớ có nghĩ ngợi lung tung, ăn thì cứ ăn, uống thì cứ uống, trời chẳng sập xuống được đâu."
      },
      {
        "chinese": "到了高三下学期，就该放下所有负担，调整好心态，该学就学，该玩就玩。",
        "pinyin": "Dào le gāo sān xià xué qī, jiù gāi fàng xià suǒ yǒu fù dān, diào zhěng hǎo xīn tài, gāi xué jiù xué, gāi wán jiù wán.",
        "vietnamese": "Bước sang học kỳ hai năm lớp 12, nên trút bỏ mọi gánh nặng tâm lý, điều chỉnh tâm thế thật tốt, học thì học cho ra học, chơi thì chơi cho ra chơi."
      }
    ]
  },
  {
    "id": "hsk79-g-78",
    "order": 78,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phản vấn tiếc nuối: 何至于…… (làm sao đến nỗi, việc gì mà đến mức)",
    "titleZh": "何至于……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "何至于 + Hậu quả tiêu cực",
    "explanationVi": "Phó từ phản vấn cổ '何' kết hợp với giới từ '至于' biểu thị sự tiếc nuối sâu sắc hoặc khẳng định tình hình vốn dĩ không đáng bị đẩy đến bước đường tồi tệ như vậy: 'làm sao đến nỗi phải tới làm phiền bác', 'sự việc làm sao đến mức không thể vãn hồi'.",
    "tips": "Mang hàm ý: nếu trước đó có giải pháp tốt hơn hoặc nghe lời khuyên thì đã không ra nông nỗi này.",
    "examples": [
      {
        "chinese": "要是我能想到别的办法，何至于来叨扰您呢？",
        "pinyin": "Yào shì wǒ néng xiǎng dào bié de bàn fǎ, hé zhì yú lái dāo rǎo nín ne?",
        "vietnamese": "Nếu như tôi mà nghĩ ra được cách nào khác, thì làm sao đến nỗi phải tới đây làm phiền bác chứ?"
      },
      {
        "chinese": "我后悔没有听从他的忠告——要不然，事情何至于变得如此不可收拾！",
        "pinyin": "Wǒ hòu huǐ méi yǒu tīng cóng tā de zhōng gào — — yào bù rán, shì qíng hé zhì yú biàn dé rú cǐ bù kě shōu shí!",
        "vietnamese": "Tôi ân hận vì đã không nghe theo lời khuyên can của anh ấy — nếu không thì sự tình làm sao đến nỗi trở nên tanh bành không thể cứu vãn như bây giờ!"
      }
    ]
  },
  {
    "id": "hsk79-g-79",
    "order": 79,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc thứ bậc chuẩn xác: 仅次于X (chỉ đứng sau X, xếp thứ hai sau X)",
    "titleZh": "仅次于X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ + 仅次于 + Đối tượng đứng đầu",
    "explanationVi": "Dùng để xác định vị trí xếp hạng thứ hai ngay sau vị trí quán quân/đứng đầu: 'địa vị chỉ xếp sau chủ tịch', 'diện tích gieo trồng chỉ đứng sau lúa mì'.",
    "tips": "Rất phổ biến trong văn bản báo cáo kinh tế, thống kê địa lý và giới thiệu nhân sự.",
    "examples": [
      {
        "chinese": "在这家私营企业中，他的地位仅次于董事长。",
        "pinyin": "Zài zhè jiā sī yíng qǐ yè zhōng, tā de dì wèi jǐn cì yú dǒng shì zhǎng.",
        "vietnamese": "Tại doanh nghiệp tư nhân này, địa vị quyền lực của ông ấy chỉ đứng sau mỗi chủ tịch hội đồng quản trị."
      },
      {
        "chinese": "水稻是世界上分布最广泛的粮食作物之一，其种植面积仅次于小麦。",
        "pinyin": "Shuǐ dào shì shì jiè shàng fēn bù zuì guǎng fàn de liáng shí zuò wù zhī yī, qí zhǒng zhí miàn jī jǐn cì yú xiǎo mài.",
        "vietnamese": "Lúa nước là một trong những cây lương thực phân bố rộng rãi nhất hành tinh, diện tích gieo trồng chỉ xếp sau mỗi lúa mì."
      }
    ]
  },
  {
    "id": "hsk79-g-80",
    "order": 80,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc thỉnh cầu tình cảm: 看在X的面子上 (nể mặt X, nể tình X)",
    "titleZh": "看在X的面子上",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "看在 + Người / Mối quan hệ + 的面子上 / 份上 ， Phân câu nhượng bộ",
    "explanationVi": "Cấu trúc ngoại giao tình cảm đặc thù của văn hóa Trung Hoa: vì coi trọng thể diện, tình nghĩa hoặc sự tôn trọng đối với người thứ ba mà chấp nhận bỏ qua lỗi lầm, nhượng bộ hoặc giúp đỡ: 'nể mặt bạn tôi mới bỏ qua cho hắn', 'nể tình con trẻ'.",
    "tips": "Gắn liền với văn hóa 'thể diện' (面子) trong giao tiếp ứng xử của người Trung Quốc.",
    "examples": [
      {
        "chinese": "我今天之所以放他一马，完全是看在你的面子上。",
        "pinyin": "Wǒ jīn tiān zhī suǒ yǐ fàng tā yī mǎ, wán quán shì kàn zài nǐ de miàn zi shàng.",
        "vietnamese": "Hôm nay tôi sở dĩ tha cho hắn một con đường sống hoàn toàn là nể nang thể diện của bạn đấy."
      },
      {
        "chinese": "你别那么固执了，看在孩子的面子上，就来一趟吧。",
        "pinyin": "Nǐ bié nà me gù zhí le, kàn zài hái zi de miàn zi shàng, jiù lái yī tàng ba.",
        "vietnamese": "Cậu đừng có bướng bỉnh thế nữa, nể tình đứa nhỏ thì cất công qua đây một chuyến đi."
      }
    ]
  },
  {
    "id": "hsk79-g-81",
    "order": 81,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc chê bai nhạt nhẽo: 没什么+动词+头儿 (chẳng có gì đáng để..., chẳng có gì thú vị)",
    "titleZh": "没什么+动词+头儿",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "没什么 + Động từ + 头儿 (没什么看头儿, 没什么吃头儿, 没什么搞头儿)",
    "explanationVi": "'头儿' làm hậu tố chỉ giá trị, sự thú vị hoặc ý nghĩa của hành động. '没什么+V+头儿' nghĩa là điều đó vô vị, không có gì hấp dẫn đáng để thưởng thức hay theo đuổi: 'chẳng có gì đáng ăn' (没什么吃头儿), 'chẳng có gì đáng xem' (没什么看头儿).",
    "tips": "Hương vị khẩu ngữ Bắc Kinh đậm đà, dùng biểu thị sự thất vọng hoặc xem nhẹ.",
    "examples": [
      {
        "chinese": "我觉得高档饭店的菜真没什么吃头儿，还是路边地道的土菜馆吃着过瘾。",
        "pinyin": "Wǒ jué dé gāo dàng fàn diàn de cài zhēn méi shén me chī tóur, hái shì lù biān dì dào de tǔ cài guǎn chī zhe guò yǐn.",
        "vietnamese": "Tôi thấy món ăn ở mấy nhà hàng sang trọng quả thực chẳng có gì đáng để ăn, vẫn cứ là mấy quán ăn dân dã vỉa hè ăn mới thấy đã miệng khoái khẩu."
      },
      {
        "chinese": "春晚小品少了原来那些老面孔，还真是没什么看头儿。",
        "pinyin": "Chūn wǎn xiǎo pǐn shǎo le yuán lái nà xiē lǎo miàn kǒng, hái zhēn shì méi shén me kàn tóur.",
        "vietnamese": "Tiểu phẩm hài đêm hội Xuân vắng bóng những gương mặt gạo cội thân quen dạo trước, đúng là xem chẳng còn chút hứng thú nào."
      }
    ]
  },
  {
    "id": "hsk79-g-82",
    "order": 82,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc gạt bỏ phiền toái: 没什么好+动词+的 (chẳng có gì để mà..., không đáng để...)",
    "titleZh": "没什么好+动词+的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "没什么好 + Động từ + 的 (没什么好说的, 没什么好纠结的, 没什么好担心的)",
    "explanationVi": "Dùng để dập tắt sự lo lắng, do dự hoặc cắt đứt cuộc tranh cãi: khẳng định sự việc hoàn toàn bình thường, không đáng bận tâm, hoặc giữa hai bên không còn điều gì để đàm phán: 'không có gì để nói' (没什么好说的), 'không có gì phải đắn đo' (没什么好纠结的).",
    "tips": "Giúp giải tỏa tâm lý dằn vặt hoặc thể hiện sự dứt khoát trong ứng xử.",
    "examples": [
      {
        "chinese": "你别再解释了，我跟你没什么好说的。",
        "pinyin": "Nǐ bié zài jiě shì le, wǒ gēn nǐ méi shén me hǎo shuō de.",
        "vietnamese": "Cậu đừng giải thích thanh minh thêm nữa, giữa tôi với cậu chẳng có gì để nói với nhau đâu."
      },
      {
        "chinese": "这事儿已经过去了，没什么好纠结的，人得往前看。",
        "pinyin": "Zhè shì ér yǐ jīng guò qù le, méi shén me hǎo jiū jié de, rén dé wǎng qián kàn.",
        "vietnamese": "Chuyện đó cũng đã trôi qua rồi, chẳng có gì phải dằn vặt băn khoăn nữa cả, con người ta phải biết hướng về phía trước."
      }
    ]
  },
  {
    "id": "hsk79-g-83",
    "order": 83,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc tôn vinh tột đỉnh: 莫过于…… (không gì bằng..., không đâu vượt qua được...)",
    "titleZh": "莫过于……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tính chất / Hiện tượng + 最... + 莫过于 + Đối tượng đỉnh cao",
    "explanationVi": "Cấu trúc văn ngôn trang trọng biểu thị đối tượng được nêu là điển hình nhất, vượt trội nhất, không ai hoặc không cái gì có thể sánh bằng: 'nơi dày đặc nhất không đâu bằng vách đá này', 'núi lửa gây chú ý nhất không đâu khác ngoài...'.",
    "tips": "Khẳng định tuyệt đối vị trí số một mang sắc thái văn phong tao nhã.",
    "examples": [
      {
        "chinese": "登山的游客可以欣赏到众多书画名家留下的石刻题词。石刻题词最密集地方，莫过于我们现在看到的这处崖壁了。",
        "pinyin": "Dēng shān de yóu kè kě yǐ xīn shǎng dào zhòng duō shū huà míng jiā liú xià de shí kè tí cí. shí kè tí cí zuì mì jí dì fāng, mò guò yú wǒ men xiàn zài kàn dào de zhè chù yá bì le.",
        "vietnamese": "Du khách leo núi có thể chiêm ngưỡng rất nhiều văn bia khắc đá do các danh gia thư họa để lại. Nơi lưu giữ các bài khắc đá dày đặc nhất không đâu vượt qua được vách đá mà chúng ta đang chiêm ngưỡng đây."
      },
      {
        "chinese": "近些年，在全球范围内引发最多关注的火山，莫过于2010年3月20日开始大规模喷发的冰岛南部的埃亚菲亚德拉火山了。",
        "pinyin": "Jìn xiē nián, zài quán qiú fàn wéi nèi yǐn fā zuì duō guān zhù de huǒ shān, mò guò yú 2 0 1 0 nián 3 yuè 2 0 rì kāi shǐ dà guī mó pēn fā de bīng dǎo nán bù de āi yà fēi yà dé lā huǒ shān le.",
        "vietnamese": "Những năm gần đây, ngọn núi lửa thu hút sự chú ý lớn nhất trên phạm vi toàn cầu không gì khác ngoài núi lửa Eyjafjallajökull ở miền nam Iceland bắt đầu phun trào dữ dội vào ngày 20 tháng 3 năm 2010."
      }
    ]
  },
  {
    "id": "hsk79-g-84",
    "order": 84,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phàn nàn ngỡ ngàng khẩu ngữ: 你说你一个X，…… (nói xem cậu đường đường là một X mà...)",
    "titleZh": "你说你一个X，……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "你说你一个 + Thân phận / Đặc điểm + ， + Phân câu trách móc / thắc mắc",
    "explanationVi": "Lời mở đầu trong khẩu ngữ biểu thị sự khó hiểu, trách móc hoặc xót xa khi thấy đối phương có thân phận hoặc điều kiện như thế mà lại hành động kỳ quặc, dại dột hoặc không tương xứng: 'đường đường là người lớn mà ăn nói chẳng rõ ràng', 'thân gái yếu đuối chạy tới đây làm gì'.",
    "tips": "Tăng cường tính chân thật và biểu cảm mạnh mẽ trong các đoạn hội thoại giao tiếp.",
    "examples": [
      {
        "chinese": "你说你一个20多岁的成年人，又不是小孩子，怎么连话都说不清楚呢？",
        "pinyin": "Nǐ shuō nǐ yī gè 2 0 duō suì de chéng nián rén, yòu bù shì xiǎo hái zi, zěn me lián huà dōu shuō bù qīng chǔ ne?",
        "vietnamese": "Cậu xem cậu kìa, đường đường là người lớn đã ngoài đôi mươi chứ có phải con nít lên ba đâu, sao đến câu ăn tiếng nói cũng chẳng diễn đạt cho gãy gọn thế hả?"
      },
      {
        "chinese": "你说你一个弱女子，一个人跑到这儿来干什么？人生地不熟的。",
        "pinyin": "Nǐ shuō nǐ yī gè ruò nǚ zi, yī gè rén pǎo dào zhèr lái gàn shén me? rén shēng dì bù shú de.",
        "vietnamese": "Xem em kìa, thân gái dặm trường liễu yếu đào tơ, một thân một mình lặn lội tới đây làm gì cơ chứ? Đất khách quê người lạ nước lạ cái."
      }
    ]
  },
  {
    "id": "hsk79-g-85",
    "order": 85,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc liệt kê xem nhẹ khẩu ngữ: 什么A的B的 (nào là A nào là B, ba cái thứ A với B)",
    "titleZh": "什么A的B的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "什么 + Từ 1 + 的 + Từ 2 + 的",
    "explanationVi": "Dùng để liệt kê gộp các sự vật, tính chất cùng loại, thường mang sắc thái gạt phăng đi, xem nhẹ hoặc chỉ sự bộn bề phiền toái: 'chuyện vui chuyện buồn' (什么好的坏的), 'thật với chả giả' (什么真的假的).",
    "tips": "Mang ngữ khí phủ định hoặc xem thường tính quan trọng của đối tượng.",
    "examples": [
      {
        "chinese": "你知道我的难言之隐，我不能和任何人说明我们的关系。所以什么好的坏的我都要憋在心里，默默承受。",
        "pinyin": "Nǐ zhī dào wǒ de nán yán zhī yǐn, wǒ bù néng hé rèn hé rén shuō míng wǒ men de guān xì. suǒ yǐ shén me hǎo de huài de wǒ dōu yào biē zài xīn lǐ, mò mò chéng shòu.",
        "vietnamese": "Anh hiểu nỗi niềm khó nói của em mà, em không thể công khai mối quan hệ của chúng ta với bất kỳ ai. Cho nên bất kể chuyện vui chuyện buồn em đều phải nuốt nghẹn vào lòng, âm thầm cắn răng chịu đựng."
      },
      {
        "chinese": "听说小林和小王要结婚了，是真的吗？",
        "pinyin": "Tīng shuō xiǎo lín hé xiǎo wáng yào jié hūn le, shì zhēn de ma?",
        "vietnamese": "Nghe nói Tiểu Lâm với Tiểu Vương sắp cưới nhau rồi, có thật không vậy?"
      },
      {
        "chinese": "——什么真的假的？！他俩结婚的日子早就定了，请帖也都发出去了。",
        "pinyin": "— — shén me zhēn de jiǎ de?! tā liǎ jié hūn de rì zi zǎo jiù dìng le, qǐng tiē yě dōu fā chū qù le.",
        "vietnamese": "— Gì mà thật với giả chứ?! Ngày cưới của hai đứa nó định xong xuôi từ lâu rồi, thiệp mời cũng đã phát đi hết cả rồi kìa."
      }
    ]
  },
  {
    "id": "hsk79-g-86",
    "order": 86,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc tùy cơ ứng biến: 视……而定 (tùy thuộc vào... mà quyết định)",
    "titleZh": "视……而定",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "视 + Đối tượng / Điều kiện + 而定",
    "explanationVi": "'视' nghĩa là căn cứ vào, xem xét. Cấu trúc biểu thị sự linh hoạt, quyết định cuối cùng phụ thuộc hoàn toàn vào tình hình, điều kiện hoặc tiêu chuẩn thực tế: 'tùy thuộc vào thu nhập gia đình mà ấn định', 'tùy cơ ứng biến theo tình huống'.",
    "tips": "Ngôn ngữ văn bản pháp lý, quy chế công sở và kế hoạch hành động.",
    "examples": [
      {
        "chinese": "这项低保补助金，是为低收入家庭发放的。补助金额每家从500到3500元不等，视家庭收入而定。",
        "pinyin": "Zhè xiàng dī bǎo bǔ zhù jīn, shì wèi dī shōu rù jiā tíng fā fàng de. bǔ zhù jīn é měi jiā cóng 5 0 0 dào 3 5 0 0 yuán bù děng, shì jiā tíng shōu rù ér dìng.",
        "vietnamese": "Khoản trợ cấp an sinh này được giải ngân cho các hộ gia đình có thu nhập thấp. Mức trợ cấp mỗi hộ dao động từ 500 đến 3500 tệ, tùy thuộc vào mức thu nhập cụ thể của từng gia đình mà quyết định."
      },
      {
        "chinese": "领导进行调研的方式有多种，可以明察，可以暗访，可以召开小型座谈会，还可以针对性地个别谈话。该用什么方式，应视情况而定。",
        "pinyin": "Lǐng dǎo jìn xíng diào yán de fāng shì yǒu duō zhǒng, kě yǐ míng chá, kě yǐ àn fǎng, kě yǐ zhào kāi xiǎo xíng zuò tán huì, hái kě yǐ zhēn duì xìng dì gè bié tán huà. gāi yòng shén me fāng shì, yīng shì qíng kuàng ér dìng.",
        "vietnamese": "Phương thức khảo sát của lãnh đạo rất đa dạng, có thể kiểm tra công khai, có thể bí mật thị sát, có thể triệu tập tọa đàm quy mô nhỏ, hoặc cũng có thể trò chuyện riêng có định hướng. Cần áp dụng phương thức nào nên tùy cơ ứng biến dựa trên tình hình thực tế."
      }
    ]
  },
  {
    "id": "hsk79-g-87",
    "order": 87,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phản vấn phủ định bất khả: 谈何…… (làm sao mà bàn tới, nói gì đến chuyện)",
    "titleZh": "谈何……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Điều kiện bất lợi 。 谈何 + Mục tiêu / Lý tưởng + ！/ ？",
    "explanationVi": "Cấu trúc phản vấn văn ngôn sắc sảo: trong điều kiện khó khăn thiếu thốn như vậy thì làm sao có thể nói đến chuyện thực hiện mục tiêu xa vời: 'làm sao nói đến giáo dục tố chất', 'công nghiệp làm sao bàn đến chuyện hưng thịnh'.",
    "tips": "Tương đương với '怎么谈得上...', thường dùng để chỉ ra sự bất hợp lý giữa thực tế và khẩu hiệu.",
    "examples": [
      {
        "chinese": "十几年前，该县共有20余所小学，其中多半学校的校舍残破，教学设施老旧。这种情况下，谈何“素质教育”？",
        "pinyin": "Shí jǐ nián qián, gāi xiàn gòng yǒu 2 0 yú suǒ xiǎo xué, qí zhōng duō bàn xué xiào de xiào shě cán pò, jiào xué shè shī lǎo jiù. zhè zhǒng qíng kuàng xià, tán hé \"sù zhì jiào yù\" ?",
        "vietnamese": "Mười mấy năm trước, toàn huyện có hơn 20 trường tiểu học, trong đó quá nửa trường sở phòng học dột nát xuống cấp, trang thiết bị dạy học lạc hậu rệu rã. Trong hoàn cảnh như thế thì làm sao nói đến chuyện 'giáo dục toàn diện' được chứ?"
      },
      {
        "chinese": "消费能力不足，工业产品就卖不出去。产品市场惨淡，工业谈何兴旺！",
        "pinyin": "Xiāo fèi néng lì bù zú, gōng yè chǎn pǐn jiù mài bù chū qù. chǎn pǐn shì chǎng cǎn dàn, gōng yè tán hé xīng wàng!",
        "vietnamese": "Sức mua của người tiêu dùng suy kiệt thì sản phẩm công nghiệp ắt ế ẩm không bán được. Thị trường tiêu thụ ảm đạm đìu hiu như thế thì công nghiệp làm sao bàn đến chuyện hưng thịnh cho đặng!"
      }
    ]
  },
  {
    "id": "hsk79-g-88",
    "order": 88,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc giới hạn thu hẹp: 无非/不过/只是……罢了/而已 (chẳng qua chỉ là... mà thôi)",
    "titleZh": "无非/不过/只是……罢了/而已",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "无非 / 不过 / 只是 + Nội dung bình thường + 罢了 / 而已",
    "explanationVi": "Kết hợp phó từ giới hạn ở vế trước với trợ từ ngữ khí ở cuối câu để hạ thấp mức độ, xem nhẹ tính nghiêm trọng hoặc khẳng định sự việc chỉ dừng lại ở phạm vi rất bình thường: 'chẳng qua chỉ có chút khôn vặt', 'chỉ tốn hơn 200 đô mà thôi'.",
    "tips": "Có tác dụng trấn an, khiêm tốn hoặc phản bác sự cường điệu hóa.",
    "examples": [
      {
        "chinese": "他无非有些小聪明罢了，离天才还差得远呢！",
        "pinyin": "Tā wú fēi yǒu xiē xiǎo cōng míng bà le, lí tiān cái hái chà dé yuǎn ne!",
        "vietnamese": "Hắn ta chẳng qua chỉ có chút khôn vặt vớ vẩn mà thôi, so với bậc thiên tài thì còn cách xa ngàn dặm!"
      },
      {
        "chinese": "这里的海鲜大餐物美价廉，人均花费不过二百多港币而已。",
        "pinyin": "Zhè lǐ de hǎi xiān dà cān wù měi jià lián, rén jūn huā fèi bù guò èr bǎi duō gǎng bì ér yǐ.",
        "vietnamese": "Bữa tiệc hải sản thịnh soạn ở đây ngon bổ rẻ bất ngờ, tính theo đầu người chi phí chẳng qua cũng chỉ hơn 200 đô la Hồng Kông mà thôi."
      },
      {
        "chinese": "我从来不觉得自己胖，我只是不瘦而已。",
        "pinyin": "Wǒ cóng lái bù jué dé zì jǐ pàng, wǒ zhǐ shì bù shòu ér yǐ.",
        "vietnamese": "Tôi chưa bao giờ nghĩ mình béo cả, tôi chẳng qua chỉ là không được gầy mà thôi."
      }
    ]
  },
  {
    "id": "hsk79-g-89",
    "order": 89,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc chính luận tận tâm: 想X之所想，急X之所急 (lo điều X nghĩ, sốt sắng điều X lo)",
    "titleZh": "想X之所想，急X之所急",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "想 + Đối tượng + 之所想 ， 急 + Đối tượng + 之所急",
    "explanationVi": "Cấu trúc thành ngữ chính luận chuẩn mực cao: đặt mình vào vị trí của đối tượng để thấu hiểu tâm tư và khẩn trương giải quyết những khó khăn bức thiết nhất của họ: 'lo nghĩ điều nhân dân nghĩ, sốt sắng trước nỗi lo của nhân dân', 'hết lòng vì người khởi nghiệp'.",
    "tips": "Khẩu hiệu hành động kinh điển của lãnh đạo và cơ quan phục vụ công.",
    "examples": [
      {
        "chinese": "领导干部不能有私心杂念，要全心全意为人民服务，想人民之所想，急人民之所急。",
        "pinyin": "Lǐng dǎo gàn bù bù néng yǒu sī xīn zá niàn, yào quán xīn quán yì wèi rén mín fú wù, xiǎng rén mín zhī suǒ xiǎng, jí rén mín zhī suǒ jí.",
        "vietnamese": "Cán bộ lãnh đạo tuyệt đối không được có tư tưởng vụ lợi cá nhân, phải toàn tâm toàn ý phục vụ nhân dân, luôn lo nghĩ những điều nhân dân đau đáu và sốt sắng giải quyết những việc nhân dân đang nóng lòng cần kíp."
      },
      {
        "chinese": "创业指导专家服务团成立一年来，想创业者之所想，急创业者之所急，是创业者的最佳智囊团。",
        "pinyin": "Chuàng yè zhǐ dǎo zhuān jiā fú wù tuán chéng lì yī nián lái, xiǎng chuàng yè zhě zhī suǒ xiǎng, jí chuàng yè zhě zhī suǒ jí, shì chuàng yè zhě de zuì jiā zhì náng tuán.",
        "vietnamese": "Đoàn chuyên gia tư vấn khởi nghiệp thành lập tròn một năm qua, luôn đau đáu nỗi lo của người khởi nghiệp và sốt sắng trước những nan đề của họ, xứng đáng là kho tàng trí tuệ đắc lực nhất cho cộng đồng khởi nghiệp."
      }
    ]
  },
  {
    "id": "hsk79-g-90",
    "order": 90,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc ngoại giao nghi lễ: 向……致以…… (gửi tới... lời...)",
    "titleZh": "向……致以……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "向 + Đối tượng tiếp nhận + 致以 + Lời chúc / Lời thăm hỏi / Lòng biết ơn",
    "explanationVi": "Kết cấu giới từ chỉ hướng biểu thị nghi lễ ngoại giao, thư từ trang trọng hoặc phát biểu chúc mừng: 'gửi tới quý độc giả lời thăm hỏi chân thành nhất', 'gửi tới lưu học sinh lời chúc phúc ngày lễ'.",
    "tips": "Cụm từ cố định chuẩn mực trong các bài diễn văn, thư ngỏ và chúc mừng ngoại giao.",
    "examples": [
      {
        "chinese": "我们谨此向广大读者致以最诚挚的问候，感谢大家在过去的一年里对本刊的支持、鼓励和批评。",
        "pinyin": "Wǒ men jǐn cǐ xiàng guǎng dà dú zhě zhì yǐ zuì chéng zhì de wèn hòu, gǎn xiè dà jiā zài guò qù de yī nián lǐ duì běn kān de zhī chí, gǔ lì hé pī píng.",
        "vietnamese": "Chúng tôi xin trân trọng gửi tới đông đảo quý độc giả lời chào thăm hỏi chân thành sâu sắc nhất, cảm ơn sự ủng hộ, khích lệ và những góp ý quý báu của quý vị dành cho tòa soạn trong suốt năm qua."
      },
      {
        "chinese": "我满怀喜悦，用中文向留学生们致以节日的祝福。",
        "pinyin": "Wǒ mǎn huái xǐ yuè, yòng zhōng wén xiàng liú xué shēng men zhì yǐ jié rì de zhù fú.",
        "vietnamese": "Tôi ngập tràn niềm hân hoan, dùng tiếng Trung gửi tới các bạn du học sinh những lời chúc phúc tốt đẹp nhất nhân dịp ngày lễ."
      }
    ]
  },
  {
    "id": "hsk79-g-91",
    "order": 91,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc đối xứng tuyệt đối (đủ đầy hoặc thiếu thốn): 要X有/没X，要Y有/没Y",
    "titleZh": "要X有/没X，要Y有/没Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "要 + Điều kiện 1 + 有/没 + Điều kiện 1 ， 要 + Điều kiện 2 + 有/没 + Điều kiện 2",
    "explanationVi": "1) Khẳng định sự hoàn hảo toàn diện, muốn gì có nấy ('要能力有能力，要资历有资历' - năng lực có năng lực, thâm niên có thâm niên; '要援兵有援兵' - cần viện binh có viện binh); 2) Ngược lại, biểu thị sự thiếu thốn bi đát, cái gì cũng không có ('要长相没长相，要身材没身材' - nhan sắc không có, vóc dáng cũng không).",
    "tips": "Cực kỳ cân đối về mặt ngữ âm, mang tính khoa trương nhấn mạnh cao.",
    "examples": [
      {
        "chinese": "我要长相没长相，要身材没身材，怎么可能当明星？",
        "pinyin": "Wǒ yào zhǎng xiāng méi zhǎng xiāng, yào shēn cái méi shēn cái, zěn me kě néng dāng míng xīng?",
        "vietnamese": "Tôi bảo nhan sắc chẳng có nhan sắc, bảo vóc dáng chẳng có vóc dáng, làm sao có cửa trở thành ngôi sao nổi tiếng được chứ?"
      },
      {
        "chinese": "我们返回的时候要机票没机票，要火车票没火车票，只好跟人拼车回来。",
        "pinyin": "Wǒ men fǎn huí de shí hòu yào jī piào méi jī piào, yào huǒ chē piào méi huǒ chē piào, zhǐ hǎo gēn rén pīn chē huí lái.",
        "vietnamese": "Lúc tụi tôi về lại vé máy bay chẳng có vé máy bay, vé tàu hỏa chẳng có vé tàu hỏa, đành phải đi chung xe ghép với người ta về."
      },
      {
        "chinese": "老张要能力有能力，要资历有资历，早就应该当经理了。",
        "pinyin": "Lǎo zhāng yào néng lì yǒu néng lì, yào zī lì yǒu zī lì, zǎo jiù yīng gāi dāng jīng lǐ le.",
        "vietnamese": "Bác Trương bảo năng lực có năng lực, bảo thâm niên có thâm niên, lẽ ra đã phải lên chức giám đốc từ lâu rồi mới phải."
      },
      {
        "chinese": "你的部队一定要坚守阵地，把敌人反击下去，要援兵有援兵，要弹药有弹药。",
        "pinyin": "Nǐ de bù duì yī dìng yào jiān shǒu zhèn dì, bǎ dí rén fǎn jī xià qù, yào yuán bīng yǒu yuán bīng, yào dàn yào yǒu dàn yào.",
        "vietnamese": "Đơn vị của anh nhất định phải kiên cường giữ vững trận địa, đánh tan các đợt phản kích của quân địch; cần viện binh sẽ có viện binh, cần đạn dược sẽ có đạn dược."
      }
    ]
  },
  {
    "id": "hsk79-g-92",
    "order": 92,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc nhân quả liên đới: 因……而…… (bởi vì... mà dẫn đến...)",
    "titleZh": "因……而……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "因 + Nguyên nhân / Hành động + 而 + Kết quả / Thay đổi",
    "explanationVi": "Cấu trúc nhân quả cô đọng trong văn ngôn và chính luận: liên kết nguyên nhân với hệ quả trực tiếp: 'vì một phút bốc đồng mà phạm sai lầm' (因一时冲动而犯下大错), 'thay đổi tùy theo từng người' (因人而异).",
    "tips": "Rất ngắn gọn, súc tích và mang tính học thuật cao.",
    "examples": [
      {
        "chinese": "看到其他人的结局，俞经理十分庆幸自己没有因一时冲动而犯下大错。",
        "pinyin": "Kàn dào qí tā rén de jié jú, yú jīng lǐ shí fēn qìng xìng zì jǐ méi yǒu yīn yī shí chōng dòng ér fàn xià dà cuò.",
        "vietnamese": "Nhìn thấy kết cục của những người khác, Giám đốc Du vô cùng may mắn vì bản thân đã không vì một phút bốc đồng nhất thời mà phạm phải sai lầm tày trời."
      },
      {
        "chinese": "教师为每个学生制定的学习计划应因人而异。",
        "pinyin": "Jiào shī wèi měi gè xué shēng zhì dìng de xué xí jì huà yīng yīn rén ér yì.",
        "vietnamese": "Kế hoạch học tập do giáo viên xây dựng cho từng học sinh nên linh hoạt thay đổi tùy theo đặc điểm riêng của từng cá nhân."
      }
    ]
  },
  {
    "id": "hsk79-g-93",
    "order": 93,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phản vấn bác bỏ: 有何X (có gì là X đâu, có gì X)",
    "titleZh": "有何X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "有何 + Danh từ / Tính từ + ？/ ！ (有何不可, 有何乐趣, 有何难处)",
    "explanationVi": "'何' là đại từ nghi vấn cổ ('cái gì'). '有何不可' nghĩa là 'có gì là không được chứ' (hoàn toàn được); '有何乐趣' nghĩa là 'có thú vui gì đâu' (chẳng có thú vị gì cả). Dùng để củng cố lập luận bác bỏ.",
    "tips": "Tăng cường sức nặng tranh luận và ngữ khí khẳng định trong văn nghị luận.",
    "examples": [
      {
        "chinese": "政府若仅靠当地力量不能让群众脱贫致富，引入外部资源有何不可？",
        "pinyin": "Zhèng fǔ ruò jǐn kào dāng dì lì liàng bù néng ràng qún zhòng tuō pín zhì fù, yǐn rù wài bù zī yuán yǒu hé bù kě?",
        "vietnamese": "Chính quyền nếu chỉ dựa vào nguồn lực nội tại địa phương mà không thể giúp quần chúng thoát nghèo vươn lên làm giàu, thì việc huy động nguồn lực bên ngoài có gì là không thể cơ chứ?"
      },
      {
        "chinese": "我是真不明白，你这样只知道拼命赚钱，生活究竟有何乐趣？",
        "pinyin": "Wǒ shì zhēn bù míng bái, nǐ zhè yàng zhǐ zhī dào pīn mìng zhuàn qián, shēng huó jiū jìng yǒu hé lè qù?",
        "vietnamese": "Tôi thật lòng không tài nào hiểu nổi, cậu cứ cắm đầu cắm cổ bán mạng kiếm tiền như vậy thì cuộc sống rốt cuộc có thú vui gì chứ?"
      }
    ]
  },
  {
    "id": "hsk79-g-94",
    "order": 94,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc phản vấn chê bai khẩu ngữ: 有什么+动词+头儿 (có gì mà... chứ)",
    "titleZh": "有什么+动词+头儿",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "有什么 + Động từ + 头儿 + ？ (有什么看头, 有什么吃头)",
    "explanationVi": "Dạng câu hỏi phản vấn của cấu trúc '没什么+V+头儿': mang ý chê bai, xem thường đối tượng là nhảm nhí vô bổ, không đáng để bận tâm hay tốn thời gian: 'trận đấu này có gì đáng xem chứ', 'đồ ăn này có gì mà ăn'.",
    "tips": "Thể hiện thái độ hoài nghi hoặc coi thường của người nói.",
    "examples": [
      {
        "chinese": "这不就是一场校际篮球联赛吗，有什么看头？",
        "pinyin": "Zhè bù jiù shì yī chǎng xiào jì lán qiú lián sài ma, yǒu shén me kàn tóu?",
        "vietnamese": "Đây chẳng phải chỉ là một trận bóng rổ giao hữu giữa các trường thôi sao, có cái gì đáng để xem chứ?"
      },
      {
        "chinese": "我是不明白，这些垃圾食品，油腻至极，有什么吃头？",
        "pinyin": "Wǒ shì bù míng bái, zhè xiē lā jī shí pǐn, yóu nì zhì jí, yǒu shén me chī tóu?",
        "vietnamese": "Tôi thật không hiểu nổi, mấy cái đồ ăn vặt rác rưởi này ngấy mỡ ngập họng, có cái tích sự gì mà ăn cơ chứ?"
      }
    ]
  },
  {
    "id": "hsk79-g-95",
    "order": 95,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc trạng ngữ kiêm nhiệm thời gian: （在）……之余 (vào những lúc rảnh rỗi sau khi...)",
    "titleZh": "（在）……之余",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "（在） + Công việc / Trạng thái + 之余 ， Phân câu hành động khác",
    "explanationVi": "Giới từ chỉ thời gian rảnh rỗi ngoài giờ làm việc chính, hoặc trạng thái cảm xúc đọng lại sau một sự kiện lớn: 'tranh thủ lúc rảnh sau giờ làm' (在工作之余), 'sau những tràng cười vỡ bụng' (在捧腹大笑之余).",
    "tips": "Thường dùng để nói về sở thích cá nhân, việc học thêm hoặc những chiêm nghiệm sâu lắng.",
    "examples": [
      {
        "chinese": "他职位提升后，工作日益繁忙，只能在工作之余发表一些作品。",
        "pinyin": "Tā zhí wèi tí shēng hòu, gōng zuò rì yì fán máng, zhǐ néng zài gōng zuò zhī yú fā biǎo yī xiē zuò pǐn.",
        "vietnamese": "Sau khi được cất nhắc lên chức vụ mới, công việc ngày một bộn bề bận rộn, ông chỉ có thể tranh thủ vào những lúc rảnh rỗi sau giờ làm việc để công bố một số tác phẩm."
      },
      {
        "chinese": "这本书收录了很多幽默、滑稽的故事，不过倘若能在捧腹大笑之余回味一番，便可发现这些故事背后也蕴含着深刻的哲理。",
        "pinyin": "Zhè běn shū shōu lù le hěn duō yōu mò, huá jī de gù shì, bù guò tǎng ruò néng zài pěng fù dà xiào zhī yú huí wèi yī fān, biàn kě fā xiàn zhè xiē gù shì bèi hòu yě yùn hán zhe shēn kè de zhé lǐ.",
        "vietnamese": "Cuốn sách này tuyển tập nhiều mẩu chuyện hài hước hóm hỉnh, thế nhưng nếu sau những tràng cười vỡ bụng ta lắng lòng ngẫm nghĩ lại, sẽ nhận ra ẩn sau những câu chuyện ấy là những triết lý nhân sinh vô cùng sâu sắc."
      }
    ]
  },
  {
    "id": "hsk79-g-96",
    "order": 96,
    "category": "cau-truc-co-dinh",
    "categoryName": "Cấu trúc cố định & Khẩu ngữ",
    "categoryIcon": "⚡",
    "titleVi": "Cấu trúc chúc mừng dịp lễ hội trọng thể: 值此……之际，…… (nhân dịp..., nhân thời khắc...)",
    "titleZh": "值此……之际，……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "值此 + Dịp lễ / Thời điểm quan trọng + 之际 ， Lời chúc mừng / Cảm tạ",
    "explanationVi": "'值此...之际' là mẫu câu mở đầu chuẩn mực cao nhất trong các thông điệp chúc mừng, thư tín thương mại ngoại giao: 'nhân dịp tết đến xuân về' (值此新春佳节之际), 'nhân dịp ngày Nhà giáo tới gần' (值此教师节来临之际).",
    "tips": "Trang trọng, ấm áp và thể hiện sự tôn kính cao nhất đối với đối tác, khách hàng hoặc thầy cô.",
    "examples": [
      {
        "chinese": "值此新春佳节之际，衷心感谢您对本公司一直以来的关心和支持！",
        "pinyin": "Zhí cǐ xīn chūn jiā jié zhī jì, zhōng xīn gǎn xiè nín duì běn gōng sī yī zhí yǐ lái de guān xīn hé zhī chí!",
        "vietnamese": "Nhân dịp tết đến xuân về, chúng tôi xin bày tỏ lòng cảm ơn chân thành và sâu sắc nhất trước sự quan tâm, đồng hành và ủng hộ của quý khách dành cho công ty trong suốt thời gian qua!"
      },
      {
        "chinese": "值此教师节来临之际，祝我校全体老师身体健康，阖家幸福！",
        "pinyin": "Zhí cǐ jiào shī jié lái lín zhī jì, zhù wǒ xiào quán tǐ lǎo shī shēn tǐ jiàn kāng, hé jiā xìng fú!",
        "vietnamese": "Nhân dịp ngày Nhà giáo đến gần, xin kính chúc toàn thể các thầy cô giáo trường ta dồi dào sức khỏe, gia đình an khang hạnh phúc!"
      }
    ]
  },
  {
    "id": "hsk79-g-97",
    "order": 97,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc so sánh hơn văn ngôn/khẩu ngữ: A+形容词+于/过+B (A hơn B)",
    "titleZh": "A+形容词+于/过+B",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "比较句5",
    "structure": "A + Tính từ + 于 / 过 + B (优于, 胜于, 高于, 强过, 大过)",
    "explanationVi": "1) 'Tính từ + 于 + B' là kết cấu so sánh hơn trong văn ngôn học thuật và chính luận: 'tốt hơn/vượt trội hơn' (优于), 'thắng thế/quan trọng hơn' (胜于), 'cao hơn' (高于); 2) 'Tính từ + 过 + B' là dạng so sánh hơn sinh động trong khẩu ngữ: 'giỏi hơn' (强过), 'cao hơn' (高过).",
    "tips": "Giúp bài viết đạt sắc thái trang nhã, tránh lặp lại đơn điệu từ '比'.",
    "examples": [
      {
        "chinese": "新型钛合金门窗不仅美观大方，而且在使用寿命方面也远远优于铁窗和铝合金门窗。",
        "pinyin": "Xīn xíng tài hé jīn mén chuāng bù jǐn měi guān dà fāng, ér qiě zài shǐ yòng shòu mìng fāng miàn yě yuǎn yuǎn yōu yú tiě chuāng hé lǚ hé jīn mén chuāng.",
        "vietnamese": "Cửa sổ và cửa đi bằng hợp kim titan kiểu mới chẳng những trang nhã đẹp mắt, mà về tuổi thọ sử dụng cũng vượt trội xa so với cửa sắt và cửa nhôm thông thường."
      },
      {
        "chinese": "对她这种锦衣玉食的富家小姐而言，面子往往胜于一切。",
        "pinyin": "Duì tā zhè zhǒng jǐn yī yù shí de fù jiā xiǎo jiě ér yán, miàn zi wǎng wǎng shèng yú yī qiè.",
        "vietnamese": "Đối với một tiểu thư khuê các sống trong nhung lụa ngọc ngà như cô ấy, thể diện sĩ diện thường thắng thế hơn mọi thứ trên đời."
      },
      {
        "chinese": "我可不相信这世界上还有厨艺高过您的人。",
        "pinyin": "Wǒ kě bù xiāng xìn zhè shì jiè shàng hái yǒu chú yì gāo guò nín de rén.",
        "vietnamese": "Con không tin trên cõi đời này còn có ai tay nghề nấu nướng cao hơn bác đâu."
      },
      {
        "chinese": "你争气点，强过你的两个哥哥，不要让那些没安好心的人笑话了。",
        "pinyin": "Nǐ zhēng qì diǎn, qiáng guò nǐ de liǎng gè gē gē, bù yào ràng nà xiē méi ān hǎo xīn de rén xiào huà le.",
        "vietnamese": "Con ráng mà có chí tiến thủ, giỏi giang hơn hai người anh trai của con, đừng để mấy kẻ có bụng dạ xấu xa kia cười vào mũi."
      }
    ]
  },
  {
    "id": "hsk79-g-98",
    "order": 98,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc liên kết liệt kê đa nguyên nhân: 一来……，二来……，三来……",
    "titleZh": "一来……，二来……，三来……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "并列复句",
    "structure": "Phân câu kết luận ， 一来 + Lý do 1 ， 二来 + Lý do 2 ， 三来 + Lý do 3",
    "explanationVi": "Dùng để phân tích rành mạch các nguyên nhân hoặc động cơ dẫn đến một hành vi hay quyết định: 'thứ nhất là..., thứ hai là..., thứ ba là...'. Thường xuất hiện trong lời giải thích, phân bua hoặc cân nhắc tâm lý.",
    "tips": "Có thể dùng hai vế (一来...，二来...) hoặc ba vế tăng dần tính thuyết phục.",
    "examples": [
      {
        "chinese": "他虽然在犹豫，但现在还不会和她说分手，一来于心不忍，二来谈了这么多年多少也习惯了，三来怕别人议论。",
        "pinyin": "Tā suī rán zài yóu yù, dàn xiàn zài hái bù huì hé tā shuō fēn shǒu, yī lái yú xīn bù rěn, èr lái tán le zhè me duō nián duō shǎo yě xí guàn le, sān lái pà bié rén yì lùn.",
        "vietnamese": "Anh ấy tuy đang đắn đo do dự, nhưng lúc này chưa nói lời chia tay với cô, thứ nhất là lòng không nỡ, thứ hai là yêu nhau bao năm qua phần nào cũng thành thói quen, thứ ba là ngại miệng lưỡi thế gian bàn tán."
      },
      {
        "chinese": "他对王经理有相当的敬意，一来因为是自己的顶头上司，二来因为经理对于相关业务确实是烂熟于心，三来因为经理虽沉默寡言但又善于处理人际关系。",
        "pinyin": "Tā duì wáng jīng lǐ yǒu xiāng dāng de jìng yì, yī lái yīn wèi shì zì jǐ de dǐng tóu shàng sī, èr lái yīn wèi jīng lǐ duì yú xiāng guān yè wù què shí shì làn shú yú xīn, sān lái yīn wèi jīng lǐ suī chén mò guǎ yán dàn yòu shàn yú chù lǐ rén jì guān xì.",
        "vietnamese": "Anh ấy dành sự kính trọng đáng kể đối với Giám đốc Vương, thứ nhất vì đây là sếp trực tiếp của mình, thứ hai vì Giám đốc thực sự nắm nghiệp vụ chuyên môn vững như lòng bàn tay, thứ ba vì dẫu kiệm lời nhưng Giám đốc lại rất khéo léo trong đối nhân xử thế."
      }
    ]
  },
  {
    "id": "hsk79-g-99",
    "order": 99,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc liệt kê văn bản chính luận: 一则……，二则……，三则……",
    "titleZh": "一则……，二则……，三则……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "并列复句",
    "structure": "Luận điểm 。 一则 + Khía cạnh 1 ， 二则 + Khía cạnh 2 ， 三则 + Khía cạnh 3",
    "explanationVi": "Cấu trúc liệt kê mang sắc thái văn viết trang trọng, hàn lâm hơn '一来...二来...': 'một là..., hai là..., ba là...'. Chuyên dùng trong các bài báo cáo, phân tích ưu nhược điểm của chính sách hoặc phương án thực thi.",
    "tips": "Thường thấy trong phân tích khoa học, kinh tế học và xã luận.",
    "examples": [
      {
        "chinese": "这种药品一则价格高昂，二则产量较少，三则副作用明显，因此难以推广。",
        "pinyin": "Zhè zhǒng yào pǐn yī zé jià gé gāo áng, èr zé chǎn liàng jiào shǎo, sān zé fù zuò yòng míng xiǎn, yīn cǐ nán yǐ tuī guǎng.",
        "vietnamese": "Loại dược phẩm này một là giá thành đắt đỏ, hai là sản lượng khan hiếm, ba là tác dụng phụ rõ rệt, do đó rất khó nhân rộng phổ biến."
      },
      {
        "chinese": "排练时需要的演员比实际演出的时候要多一些，一则考察演员的表现，不合适的话就换掉；二则可以相互提出意见，完善表演；三则不上场的演员也可以做一些剧务工作。",
        "pinyin": "Pái liàn shí xū yào de yǎn yuán bǐ shí jì yǎn chū de shí hòu yào duō yī xiē, yī zé kǎo chá yǎn yuán de biǎo xiàn, bù hé shì de huà jiù huàn diào; èr zé kě yǐ xiāng hù tí chū yì jiàn, wán shàn biǎo yǎn; sān zé bù shàng chǎng de yǎn yuán yě kě yǐ zuò yī xiē jù wù gōng zuò.",
        "vietnamese": "Khi tập dượt số lượng diễn viên cần nhiều hơn so với lúc diễn thực tế, một là để sát hạch phong độ của diễn viên, nếu không hợp vai thì thay người; hai là để đôi bên cùng góp ý hoàn thiện lối diễn xuất; ba là những diễn viên chưa lên sàn cũng có thể phụ trách khâu hậu cần sân khấu."
      }
    ]
  },
  {
    "id": "hsk79-g-100",
    "order": 100,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc định nghĩa & tường giải thuật ngữ: 所谓……，就是……",
    "titleZh": "所谓……，就是……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "解说复句",
    "structure": "所谓 + Thuật ngữ / Khái niệm ， 就是 + Nội dung định nghĩa / bản chất",
    "explanationVi": "Khuôn mẫu kinh điển mở đầu phần giải thích, định nghĩa một khái niệm mới hoặc đưa ra cách hiểu chuyên sâu về một thuật ngữ trừu tượng: 'cái gọi là..., chính là...'.",
    "tips": "Cấu trúc vàng để viết câu mở đoạn trong phần thi nghị luận giải thích thuật ngữ.",
    "examples": [
      {
        "chinese": "所谓绒面涂料，就是视觉效果一流，又不会引发眩晕，触感柔软而有弹性的新型装饰材料。",
        "pinyin": "Suǒ wèi róng miàn tú liào, jiù shì shì jué xiào guǒ yī liú, yòu bù huì yǐn fā xuàn yūn, chù gǎn róu ruǎn ér yǒu dàn xìng de xīn xíng zhuāng shì cái liào.",
        "vietnamese": "Cái gọi là sơn phủ mặt nhung, chính là loại vật liệu trang trí kiểu mới có hiệu ứng thị giác đỉnh cao, không gây hoa mắt chóng mặt, sờ vào lại mềm mại và đàn hồi êm ái."
      },
      {
        "chinese": "企业管理者要为企业的发展提供催化剂。所谓催化剂，就是能为企业发展提供助力的一切行为，包括设立清晰目标、调动员工自主性和创造性，以及提供充分的资源等。",
        "pinyin": "Qǐ yè guǎn lǐ zhě yào wèi qǐ yè de fā zhǎn tí gōng cuī huà jì. suǒ wèi cuī huà jì, jiù shì néng wèi qǐ yè fā zhǎn tí gōng zhù lì de yī qiè xíng wèi, bāo kuò shè lì qīng xī mù biāo, diào dòng yuán gōng zì zhǔ xìng hé chuàng zào xìng, yǐ jí tí gōng chōng fēn de zī yuán děng.",
        "vietnamese": "Nhà quản trị doanh nghiệp cần cung cấp chất xúc tác cho sự phát triển của công ty. Cái gọi là chất xúc tác, chính là toàn bộ các hành vi tiếp sức cho đà tăng trưởng của doanh nghiệp, bao gồm việc vạch ra mục tiêu rõ ràng, khơi dậy tính tự chủ và sức sáng tạo của nhân viên, cũng như cung ứng nguồn lực đầy đủ."
      }
    ]
  },
  {
    "id": "hsk79-g-101",
    "order": 101,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc liên từ lựa chọn song song: 或……，或…… (hoặc là..., hoặc là...)",
    "titleZh": "或……，或……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "选择复句",
    "structure": "或（是） + Khả năng 1 ， 或（是） + Khả năng 2",
    "explanationVi": "Dùng để liên kết các khả năng, tình huống giả định hoặc con đường lựa chọn khác nhau mà chủ thể có thể gặp phải: 'hoặc là chìm nổi gian truân, hoặc là thuận buồm xuôi gió'; 'hoặc là bị ốm, hoặc là nhà có việc'.",
    "tips": "Tương đương với '或者...或者...', nhưng súc tích và giàu nhạc điệu hơn.",
    "examples": [
      {
        "chinese": "这一辈子，或饱经挫折，或一帆风顺。受挫折的，心性会得到磨炼，总是处于顺境的，往往思想单纯。",
        "pinyin": "Zhè yī bèi zi, huò bǎo jīng cuò zhé, huò yī fān fēng shùn. shòu cuò zhé de, xīn xìng huì dé dào mó liàn, zǒng shì chù yú shùn jìng de, wǎng wǎng sī xiǎng dān chún.",
        "vietnamese": "Cả đời người này, hoặc là nếm trải đủ đường gian truân trắc trở, hoặc là thuận buồm xuôi gió êm đềm. Người trải qua sóng gió trắc trở thì tâm tính được tôi luyện sắt đá, còn kẻ luôn sống trong nhung lụa bình an thì suy nghĩ thường đơn thuần ngây thơ."
      },
      {
        "chinese": "那个工人，或是生病了，或是家里头有事，反正今天来不了了。",
        "pinyin": "Nà gè gōng rén, huò shì shēng bìng le, huò shì jiā lǐ tóu yǒu shì, fǎn zhèng jīn tiān lái bù le le.",
        "vietnamese": "Người công nhân kia, hoặc là ốm đau ngã bệnh, hoặc là trong nhà có việc bận, tóm lại hôm nay không thể đến được rồi."
      }
    ]
  },
  {
    "id": "hsk79-g-102",
    "order": 102,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc lựa chọn kiên quyết: 宁可/宁愿……，也不…… (thà rằng..., chứ không chịu...)",
    "titleZh": "宁可/宁愿……，也不……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "选择复句",
    "structure": "宁可 / 宁愿 + Lựa chọn chấp nhận thiệt thòi ， 也不 + Điều dứt khoát cự tuyệt",
    "explanationVi": "Biểu thị sự lựa chọn có ý thức và dũng cảm: thà chấp nhận hy sinh, vất vả hoặc thiệt thòi ở vế 1, chứ kiên quyết không làm điều trái với lương tâm, nguyên tắc hoặc mục tiêu cao cả ở vế 2: 'thà lợi nhuận ít chứ không quên tôn chỉ', 'thà sống kham khổ chứ không bỏ đam mê'.",
    "tips": "Thể hiện nhân cách cao đẹp, lập trường kiên định và ý chí sắt đá.",
    "examples": [
      {
        "chinese": "今年上半年，门店营业额有二百五十万元之多，但利润仅一万多元，公司经理说：“我们宁可利润少一些，也不能忘掉服务消费者的宗旨。”",
        "pinyin": "Jīn nián shàng bàn nián, mén diàn yíng yè é yǒu èr bǎi wǔ shí wàn yuán zhī duō, dàn lì rùn jǐn yī wàn duō yuán, gōng sī jīng lǐ shuō: \"wǒ men níng kě lì rùn shǎo yī xiē, yě bù néng wàng diào fú wù xiāo fèi zhě de zōng zhǐ.\"",
        "vietnamese": "Nửa đầu năm nay, doanh thu chuỗi cửa hàng lên tới 2,5 triệu tệ, thế nhưng lợi nhuận ròng chỉ vỏn vẹn hơn một vạn tệ, giám đốc công ty chia sẻ: 'Chúng tôi thà chấp nhận lợi nhuận mỏng một chút, chứ tuyệt đối không bao giờ được lãng quên tôn chỉ phục vụ người tiêu dùng.'"
      },
      {
        "chinese": "这批有志于交响乐艺术的音乐家始终以发展中国高水平的交响乐为己任。他们宁愿生活艰苦些，也不愿放弃自己热爱的事业。",
        "pinyin": "Zhè pī yǒu zhì yú jiāo xiǎng lè yì shù de yīn lè jiā shǐ zhōng yǐ fā zhǎn zhōng guó gāo shuǐ píng de jiāo xiǎng lè wèi jǐ rèn. tā men níng yuàn shēng huó jiān kǔ xiē, yě bù yuàn fàng qì zì jǐ rè ài de shì yè.",
        "vietnamese": "Nhóm nhạc sĩ tâm huyết với nghệ thuật giao hưởng này luôn coi việc phát triển nền nhạc giao hưởng đỉnh cao của Trung Quốc là sứ mệnh thiêng liêng của đời mình. Họ thà chịu cảnh sinh hoạt đạm bạc kham khổ chứ dứt khoát không cam lòng từ bỏ sự nghiệp mà mình hằng tha thiết nâng niu."
      }
    ]
  },
  {
    "id": "hsk79-g-103",
    "order": 103,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc lựa chọn bài trừ: 与其……，宁愿/宁可…… (thay vì..., thà rằng...)",
    "titleZh": "与其……，宁愿/宁可……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "选择复句",
    "structure": "与其 + Phương án từ bỏ ， 宁愿 / 宁可 + Phương án chủ động chọn",
    "explanationVi": "So sánh hai phương án để dứt khoát bài trừ phương án tiêu cực, bị động ở vế '与其', chủ động chọn giải pháp tích cực hơn ở vế '宁愿/宁可': 'thay vì ngồi đây đoán già đoán non, thà tôi đến hỏi trực tiếp cho xong'.",
    "tips": "Ngữ khí dứt khoát, chủ động và mang tính giải quyết vấn đề.",
    "examples": [
      {
        "chinese": "与其在这里胡思乱想，我宁愿当面去问个清楚。",
        "pinyin": "Yǔ qí zài zhè lǐ hú sī luàn xiǎng, wǒ níng yuàn dāng miàn qù wèn gè qīng chǔ.",
        "vietnamese": "Thay vì ngồi đây suy diễn lung tung vẩn vơ, tôi thà đích thân đến gặp mặt hỏi cho ra ngô ra khoai còn hơn."
      },
      {
        "chinese": "与其跟这些毫无责任心的人一组，我宁可一个人做这个小组作业。",
        "pinyin": "Yǔ qí gēn zhè xiē háo wú zé rèn xīn de rén yī zǔ, wǒ níng kě yī gè rén zuò zhè gè xiǎo zǔ zuò yè.",
        "vietnamese": "Thay vì phải chung nhóm với những kẻ vô trách nhiệm này, tôi thà tự mình gánh trọn bài tập nhóm một mình còn hơn."
      }
    ]
  },
  {
    "id": "hsk79-g-104",
    "order": 104,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc nhượng bộ ngầm: X（倒）是X（了），…… (X thì đúng là X thật, nhưng...)",
    "titleZh": "X（倒）是X（了），……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "转折复句",
    "structure": "Tính từ / Động từ + （倒）是 + Tính từ / Động từ + （了） ， Nhưng / Tuy nhiên...",
    "explanationVi": "Lặp lại từ ngữ với phó từ ngữ khí '倒/是' để thừa nhận một phần sự thật ở vế trước, nhưng vế sau lập tức đưa ra sự chuyển hướng, hạn chế hoặc khó khăn đi kèm: 'ngon thì đúng là ngon thật, cơ mà cay quá', 'đi thì cũng đã đi rồi, cơ mà...'.",
    "tips": "Tạo sự chuyển ý tự nhiên, khách quan và sâu sắc trong nhận xét.",
    "examples": [
      {
        "chinese": "重庆火锅好吃是好吃，不过对于吃不惯麻辣味的人来说，恐怕会难以入口。",
        "pinyin": "Zhòng qìng huǒ guō hǎo chī shì hǎo chī, bù guò duì yú chī bù guàn má là wèi de rén lái shuō, kǒng pà huì nán yǐ rù kǒu.",
        "vietnamese": "Lẩu Trùng Khánh ngon thì đúng là ngon thật đấy, thế nhưng đối với những ai chưa quen ăn cay tê thì e rằng rất khó nuốt trôi."
      },
      {
        "chinese": "上周的大型相亲会，他迫于父母的压力，去倒是去了，但若是让他在相亲会上勇敢地表达自己，追求心上人，确实是难为他了。",
        "pinyin": "Shàng zhōu de dà xíng xiāng qīn huì, tā pò yú fù mǔ de yā lì, qù dào shì qù le, dàn ruò shì ràng tā zài xiāng qīn huì shàng yǒng gǎn dì biǎo dá zì jǐ, zhuī qiú xīn shàng rén, què shí shì nán wèi tā le.",
        "vietnamese": "Buổi gặp mặt hẹn hò mai mối quy mô lớn tuần trước, dưới sức ép của bố mẹ thì anh ấy đi thì cũng đã đi rồi đấy, cơ mà nếu bắt anh phải dũng cảm bộc bạch bản thân để theo đuổi người trong mộng tại sự kiện thì quả thực là làm khó anh quá."
      }
    ]
  },
  {
    "id": "hsk79-g-105",
    "order": 105,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc cảnh báo trông mặt mà bắt hình dong: 别看……，…… (đừng thấy... mà coi thường)",
    "titleZh": "别看……，……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "转折复句",
    "structure": "别看 + Hiện tượng bề ngoài / Điểm yếu ， Phân câu thực lực / Bản chất đáng nể",
    "explanationVi": "Khẩu ngữ dùng để nhắc nhở người khác chớ nên đánh giá thấp đối tượng chỉ dựa trên vẻ bề ngoài hoặc tuổi tác: 'đừng thấy tuổi nhỏ, chí lớn lắm đấy', 'đừng thấy ngoài mặt bất cần, trong lòng để ý lắm'.",
    "tips": "Tương đương với '虽然...但是...', nhưng mang tính khẩu ngữ đàm thoại tự nhiên hơn.",
    "examples": [
      {
        "chinese": "别看年龄小，他的志向可很大呢！",
        "pinyin": "Bié kàn nián líng xiǎo, tā de zhì xiàng kě hěn dà ne!",
        "vietnamese": "Đừng thấy tuổi tác còn nhỏ mà coi thường, chí hướng của cậu bé lớn lao lắm đấy nhé!"
      },
      {
        "chinese": "别看小王一天到晚看上去什么都不在乎的样子，其实他是个特别在意别人看法的人。",
        "pinyin": "Bié kàn xiǎo wáng yī tiān dào wǎn kàn shàng qù shén me dōu bù zài hū de yàng zi, qí shí tā shì gè tè bié zài yì bié rén kàn fǎ de rén.",
        "vietnamese": "Đừng thấy Tiểu Vương suốt ngày làm ra vẻ bất cần đời cái gì cũng không màng, kỳ thực cậu ấy là người cực kỳ để tâm đến ánh nhìn và đánh giá của thiên hạ."
      }
    ]
  },
  {
    "id": "hsk79-g-106",
    "order": 106,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc nhượng bộ chuyển ngoặt mềm: 虽说……，但/可…… (dẫu nói là..., nhưng mà...)",
    "titleZh": "虽说……，但/可……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "转折复句",
    "structure": "虽说 + Hiện tượng thừa nhận ， 但 / 可 / 仍然 + Thực tế đối lập",
    "explanationVi": "Dạng nhượng bộ khẩu ngữ của '虽然...但是...': 'dẫu nói là sức khỏe không tốt, nhưng không từ bỏ lý tưởng', 'dẫu nói kiếm tiền triệu mỗi tranh, nhưng cũng không gánh nổi con tiêu xài'.",
    "tips": "Dùng nhiều trong văn tự sự và văn phong đàm luận đời thường.",
    "examples": [
      {
        "chinese": "虽说我的身体不好，但我并不会放弃一直以来的理想。",
        "pinyin": "Suī shuō wǒ de shēn tǐ bù hǎo, dàn wǒ bìng bù huì fàng qì yī zhí yǐ lái de lǐ xiǎng.",
        "vietnamese": "Dẫu nói là thể trạng sức khỏe của tôi không được tốt, thế nhưng tôi tuyệt nhiên không bao giờ từ bỏ lý tưởng bấy lâu nay của mình."
      },
      {
        "chinese": "虽说这位著名画家的一幅画就可赚上百万，可仍然架不住儿子这样挥霍。",
        "pinyin": "Suī shuō zhè wèi zhù míng huà jiā de yī fú huà jiù kě zhuàn shàng bǎi wàn, kě réng rán jià bù zhù ér zi zhè yàng huī huò.",
        "vietnamese": "Dẫu nói là mỗi bức họa của danh họa này có thể kiếm về tiền triệu tệ, cơ mà cũng không thể nào gánh nổi thói tiêu pha phá của vô độ của cậu quý tử."
      }
    ]
  },
  {
    "id": "hsk79-g-107",
    "order": 107,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc điều kiện toàn thể: 无论……与否，都…… (bất luận... hay không, đều...)",
    "titleZh": "无论……与否，都……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "条件复句",
    "structure": "无论 + Hành động / Tính chất + 与否 ， 都 + Kết quả bất biến",
    "explanationVi": "'与否' (yǔ fǒu) là hình thức chính phản văn ngôn ('có hay không'). Cấu trúc biểu thị kết quả ở vế sau hoàn toàn không phụ thuộc vào việc điều kiện ở vế trước xảy ra hay không: 'bất luận bạn đồng ý hay không, anh ấy vẫn làm'.",
    "tips": "Mang sắc thái trang trọng, chuẩn mực pháp lý và chính luận.",
    "examples": [
      {
        "chinese": "无论你同意与否，他都会按自己的计划去处理这件事的。",
        "pinyin": "Wú lùn nǐ tóng yì yǔ fǒu, tā dōu huì àn zì jǐ de jì huà qù chù lǐ zhè jiàn shì de.",
        "vietnamese": "Bất luận bạn có tán đồng hay không, anh ấy vẫn sẽ xử lý sự việc này theo đúng kế hoạch của riêng mình."
      },
      {
        "chinese": "所有的工作人员，无论工作成绩优异与否，都是能领到高额奖金的。",
        "pinyin": "Suǒ yǒu de gōng zuò rén yuán, wú lùn gōng zuò chéng jì yōu yì yǔ fǒu, dōu shì néng lǐng dào gāo é jiǎng jīn de.",
        "vietnamese": "Toàn thể nhân viên làm việc, bất luận thành tích công tác xuất sắc hay bình thường, thảy đều có thể nhận được khoản tiền thưởng hậu hĩnh."
      }
    ]
  },
  {
    "id": "hsk79-g-108",
    "order": 108,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc quy phạm điều lệ: 凡……（者），均（可）…… (phàm là... đều có thể...)",
    "titleZh": "凡……（者），均（可）……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "条件复句",
    "structure": "凡 + Đối tượng / Điều kiện + （者） ， 均（可） + Quyền lợi / Quy định",
    "explanationVi": "Mẫu câu quy phạm cổ điển trong thông báo, điều lệ và hợp đồng: '凡' nghĩa là phàm, tất cả; '均' nghĩa là đều. 'Phàm những ai đạt giải đều được cấp giấy chứng nhận', 'Phàm đơn vị hợp tác đều có thể...'.",
    "tips": "Ngôn ngữ văn bản thông báo công quyền và quy chế thi đấu.",
    "examples": [
      {
        "chinese": "此次比赛设有一、二、三等奖及优秀奖。凡获奖者均颁发荣誉证书。",
        "pinyin": "Cǐ cì bǐ sài shè yǒu yī, èr, sān děng jiǎng jí yōu xiù jiǎng. fán huò jiǎng zhě jūn bān fā róng yù zhèng shū.",
        "vietnamese": "Cuộc thi lần này có các giải nhất, nhì, ba và giải khuyến khích. Phàm là thí sinh đạt giải thảy đều được trao giấy khen danh dự."
      },
      {
        "chinese": "凡来我市进行技术合作的单位，均可根据自身的资金、设备、专长等条件，进行多领域、多层次的合作。",
        "pinyin": "Fán lái wǒ shì jìn xíng jì shù hé zuò de dān wèi, jūn kě gēn jù zì shēn de zī jīn, shè bèi, zhuān zhǎng děng tiáo jiàn, jìn xíng duō lǐng yù, duō céng cì de hé zuò.",
        "vietnamese": "Phàm là các cơ quan đơn vị tới thành phố chúng tôi tiến hành hợp tác kỹ thuật thì đều có thể căn cứ vào năng lực tài chính, máy móc thiết bị, chuyên môn sở trường để triển khai hợp tác đa lĩnh vực, đa tầng nấc."
      }
    ]
  },
  {
    "id": "hsk79-g-109",
    "order": 109,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc giả thiết văn ngôn: 假若/假使……，…… (giả dụ / ví phỏng như...)",
    "titleZh": "假若/假使……，……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "假设复句",
    "structure": "假若 / 假使 + Tình huống giả định ， Kết quả tương ứng",
    "explanationVi": "Dạng văn ngôn trang nhã của liên từ giả thiết '如果/要是': đưa ra tình huống giả định chưa xảy ra hoặc giả định ngược lại với quá khứ: 'ví phỏng bạn không muốn ở nhà', 'giả sử mọi sự bắt đầu lại từ đầu'.",
    "tips": "Tăng thêm vẻ đẹp văn chương cổ điển và tính triết lý sâu sắc.",
    "examples": [
      {
        "chinese": "假若你不愿待在家里，你可以到湖边散散步，或在公园喝喝茶、下下棋。",
        "pinyin": "Jiǎ ruò nǐ bù yuàn dài zài jiā lǐ, nǐ kě yǐ dào hú biān sàn sàn bù, huò zài gōng yuán hē hē chá, xià xià qí.",
        "vietnamese": "Ví phỏng bạn không muốn ru rú trong nhà, bạn có thể ra ven hồ tản bộ, hoặc vào công viên thưởng trà, đánh cờ."
      },
      {
        "chinese": "我从来都不会后悔之前的决定，假使一切再从头来，结果也还是一样的。",
        "pinyin": "Wǒ cóng lái dōu bù huì hòu huǐ zhī qián de jué dìng, jiǎ shǐ yī qiè zài cóng tóu lái, jié guǒ yě hái shì yī yàng de.",
        "vietnamese": "Tôi trước giờ chưa bao giờ hối hận về những quyết định đã qua, giả dụ mọi sự có quay ngược lại từ đầu thì kết cục cũng vẫn sẽ như thế mà thôi."
      }
    ]
  },
  {
    "id": "hsk79-g-110",
    "order": 110,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc may mắn thoát hiểm: 幸亏/幸好……，不然/否则…… (may mà..., nếu không thì...)",
    "titleZh": "幸亏/幸好……，不然/否则……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "假设复句",
    "structure": "幸亏 / 幸好 + Yếu tố may mắn giải cứu ， 不然 / 否则 + Hậu quả xấu đã xảy ra",
    "explanationVi": "Diễn tả sự may mắn khi nhờ có sự xuất hiện kịp thời của người hoặc điều kiện ở vế 1 mà đã ngăn chặn được một hậu quả hết sức tồi tệ nêu ở vế 2: 'may mà trưa nay bạn lấy cơm giúp, nếu không thì đói meo', 'may mà bác Trương cho số điện thoại'.",
    "tips": "Thể hiện lòng cảm kích và sự thở phào nhẹ nhõm.",
    "examples": [
      {
        "chinese": "幸好你今天中午替我打了饭，不然我就只有挨饿的份了。",
        "pinyin": "Xìng hǎo nǐ jīn tiān zhōng wǔ tì wǒ dǎ le fàn, bù rán wǒ jiù zhǐ yǒu āi è de fèn le.",
        "vietnamese": "May sao trưa nay cậu lấy cơm giúp tôi, nếu không thì tôi chỉ có nước ôm bụng chịu đói meo."
      },
      {
        "chinese": "幸亏老张告诉了我哥哥的电话号码，否则我就真没法跟哥哥联系了。",
        "pinyin": "Xìng kuī lǎo zhāng gào sù le wǒ gē gē de diàn huà hào mǎ, fǒu zé wǒ jiù zhēn méi fǎ gēn gē gē lián xì le.",
        "vietnamese": "May nhờ bác Trương cho tôi số điện thoại của anh trai, nếu không thì tôi quả thực chẳng có cách nào liên lạc nổi với anh."
      }
    ]
  },
  {
    "id": "hsk79-g-111",
    "order": 111,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc nhượng bộ tột cùng: 纵然/纵使……，也…… (cho dẫu / dù rằng... cũng...)",
    "titleZh": "纵然/纵使……，也……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "假设复句",
    "structure": "纵然 / 纵使 + Tình huống cực đoan / Bất lợi ， 也 + Kết quả bất biến",
    "explanationVi": "Cặp liên từ nhượng bộ cao cấp bậc nhất (tương đương '即使...也...'): giả định tình huống bất lợi đã đẩy lên mức cùng cực nhất, nhưng hành động hoặc kết quả vẫn diễn ra kiên định: 'cho dẫu không ai cổ vũ, anh vẫn đoạt cúp', 'dù rằng xuất phát từ bụng tốt, cũng phải chú ý cách nói'.",
    "tips": "Mang âm hưởng hào sảng, bi tráng và tính nghệ thuật văn chương cao.",
    "examples": [
      {
        "chinese": "纵然无人为他加油喝彩，他最终也还是夺取了本站比赛的冠军。",
        "pinyin": "Zòng rán wú rén wèi tā jiā yóu hē cǎi, tā zuì zhōng yě hái shì duó qǔ le běn zhàn bǐ sài de guān jūn.",
        "vietnamese": "Cho dẫu chẳng một ai hò reo cổ vũ cho anh, rốt cuộc anh vẫn xuất sắc giành ngôi vị quán quân tại chặng thi đấu này."
      },
      {
        "chinese": "纵使出于好心，你也要注意沟通的方式，说话不要那么直接。",
        "pinyin": "Zòng shǐ chū yú hǎo xīn, nǐ yě yào zhù yì gōu tōng de fāng shì, shuō huà bù yào nà me zhí jiē.",
        "vietnamese": "Dù rằng xuất phát từ bụng dạ tốt, cậu cũng cần phải chú ý phương pháp giao tiếp, ăn nói chớ nên quá bộc trực sốc nổi."
      }
    ]
  },
  {
    "id": "hsk79-g-112",
    "order": 112,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc nhân quả văn ngôn cô đọng: （因）……，故…… (bởi vì..., cho nên...)",
    "titleZh": "（因）……，故……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "因果复句",
    "structure": "（因） + Căn nguyên lý do ， 故 + Hệ quả / Hành vi tất yếu",
    "explanationVi": "Kết cấu nhân quả cổ điển: '故' tương đương với '所以/因此' trong khẩu ngữ. Thường dùng trong các danh ngôn triết lý hoặc văn bản y khoa, khoa học để nêu lên quy luật tất yếu: 'nhìn thấu sự đời nên không màng tranh giành' (故不争), 'chẩn đoán khó khăn' (故明确诊断较难).",
    "tips": "Ngắn gọn, đanh thép và mang đậm phong vị cổ văn.",
    "examples": [
      {
        "chinese": "富有智慧者看得透，故不争；胸襟豁达者想得开，故不斗。",
        "pinyin": "Fù yǒu zhì huì zhě kàn dé tòu, gù bù zhēng; xiōng jīn huō dá zhě xiǎng dé kāi, gù bù dòu.",
        "vietnamese": "Bậc giàu trí tuệ nhìn thấu tỏ sự đời, cho nên không màng tranh giành; người mang lòng dạ bao dung thông thoáng, do đó chẳng thiết đấu đá."
      },
      {
        "chinese": "肺肉瘤样癌是一种罕见的肺癌，因其症状、体征缺乏特异性，常需术后活检才能确诊，故明确诊断较难。",
        "pinyin": "Fèi ròu liú yàng ái shì yī zhǒng hǎn jiàn de fèi ái, yīn qí zhèng zhuàng, tǐ zhēng quē fá tè yì xìng, cháng xū shù hòu huó jiǎn cái néng què zhěn, gù míng què zhěn duàn jiào nán.",
        "vietnamese": "Ung thư dạng sarcoma phổi là một dạng ung thư phổi hiếm gặp, do các triệu chứng và dấu hiệu lâm sàng thiếu tính đặc thù, thường phải sinh thiết sau phẫu thuật mới chẩn đoán xác định được, cho nên việc chẩn đoán dứt khoát là tương đối khó khăn."
      }
    ]
  },
  {
    "id": "hsk79-g-113",
    "order": 113,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc hệ quả thái quá: ……，以至（于）…… (..., đến nỗi / dẫn tới mức...)",
    "titleZh": "……，以至（于）……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "因果复句",
    "structure": "Nguyên nhân / Hành động mức độ cao ， 以至（于） + Hậu quả sâu rộng / thái quá",
    "explanationVi": "Chỉ ra mức độ của sự việc ở vế trước phát triển đến đỉnh điểm, dẫn tới kết quả hoặc hậu quả nghiêm trọng, ngoài dự tính ở vế sau: 'giá bị đẩy lên đến mức hơn triệu tệ', 'đến nỗi tăng thêm gánh nặng cho học sinh'.",
    "tips": "Khác với '以致' (chỉ hậu quả xấu), '以至于' có thể dùng cho cả mức độ phạm vi sâu rộng chung.",
    "examples": [
      {
        "chinese": "自从这种靶向药物问世之后，它的治疗癌症的功能被推崇到了极点，以至它在黑市上的价格被炒到了百万以上。",
        "pinyin": "Zì cóng zhè zhǒng bǎ xiàng yào wù wèn shì zhī hòu, tā de zhì liáo ái zhèng de gōng néng bèi tuī chóng dào le jí diǎn, yǐ zhì tā zài hēi shì shàng de jià gé bèi chǎo dào le bǎi wàn yǐ shàng.",
        "vietnamese": "Kể từ sau khi loại thuốc nhắm trúng đích này ra đời, công năng trị liệu ung thư của nó được tôn sùng lên tận mây xanh, đến nỗi giá bán của nó trên thị trường chợ đen bị thổi phồng lên tới hơn một triệu tệ."
      },
      {
        "chinese": "当下的素质教育实践呈现出明显的形式化特征，以至于一些学校将活动课的数量作为衡量素质教育实施的指标，反而加重了学生负担。",
        "pinyin": "Dāng xià de sù zhì jiào yù shí jiàn chéng xiàn chū míng xiǎn de xíng shì huà tè zhēng, yǐ zhì yú yī xiē xué xiào jiāng huó dòng kè de shù liàng zuò wèi héng liàng sù zhì jiào yù shí shī de zhǐ biāo, fǎn ér jiā zhòng le xué shēng fù dān.",
        "vietnamese": "Thực tiễn giáo dục toàn diện hiện nay đang bộc lộ xu hướng hình thức hóa rõ rệt, dẫn tới mức một số trường học lấy số lượng tiết ngoại khóa làm thước đo triển khai giáo dục tố chất, vô hình trung lại càng làm nặng thêm gánh nặng cho học sinh."
      }
    ]
  },
  {
    "id": "hsk79-g-114",
    "order": 114,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc so sánh bậc thang phủ định: 别说……，都/也…… (đừng nói là..., ngay cả... cũng...)",
    "titleZh": "别说……，都/也……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "递进复句",
    "structure": "别说 + Đối tượng cấp cao / Giá trị lớn ， 就是 / 连 + Đối tượng cơ bản + 都 / 也 + Phủ định",
    "explanationVi": "Dùng để nhấn mạnh sự bất khả: ngay cả đối tượng dễ dàng/nhỏ bé hơn còn không làm nổi hoặc đối tượng trình độ cao hơn còn chào thua, huống chi là trường hợp thông thường: 'đừng nói sinh viên, nghiên cứu sinh đọc còn thấy vất vả', 'đừng nói 10 vạn, một vạn giờ cũng không có'.",
    "tips": "Tăng cường tối đa ngữ khí phủ định tuyệt đối.",
    "examples": [
      {
        "chinese": "这本书别说本科生了，研究生读起来都费劲。",
        "pinyin": "Zhè běn shū bié shuō běn kē shēng le, yán jiū shēng dú qǐ lái dōu fèi jìn.",
        "vietnamese": "Quyển sách này đừng nói là sinh viên đại học, ngay cả học viên cao học đọc vào cũng thấy trầy da tróc vảy."
      },
      {
        "chinese": "他现在没有收入来源，别说10万，就是一万块现在也拿不出。",
        "pinyin": "Tā xiàn zài méi yǒu shōu rù lái yuán, bié shuō 1 0 wàn, jiù shì yī wàn kuài xiàn zài yě ná bù chū.",
        "vietnamese": "Hiện giờ anh ta chẳng có nguồn thu nhập nào, đừng nói là 10 vạn, đến cả một vạn tệ lúc này anh ta cũng không móc đâu ra."
      }
    ]
  },
  {
    "id": "hsk79-g-115",
    "order": 115,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc phàn nàn chồng chất: ……不说，还…… (chưa kể..., lại còn...)",
    "titleZh": "……不说，还……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "递进复句",
    "structure": "Điều tiêu cực 1 + 不说 ， 还 + Điều tiêu cực 2 nặng nề hơn",
    "explanationVi": "Diễn tả sự bức xúc trước những tác hại hoặc phiền phức dồn dập kéo tới: 'điều thứ nhất đã đủ bực mình rồi, điều thứ hai lại càng quá quắt hơn': 'ăn nhờ ở đậu nhà tôi chưa kể, lại còn phá phách', 'mất tiền chưa kể, lại còn rước bực vào người'.",
    "tips": "Đậm đà khẩu ngữ phê bình, tố cáo và phàn nàn đời sống.",
    "examples": [
      {
        "chinese": "你们在我家住着白吃白喝不说，还给我添乱。",
        "pinyin": "Nǐ men zài wǒ jiā zhù zhe bái chī bái hē bù shuō, hái gěi wǒ tiān luàn.",
        "vietnamese": "Các người ăn nhờ ở đậu nhà tôi ăn uống chùa chùi mép chưa tính, lại còn bày trò quấy nhiễu gây thêm phiền phức cho tôi nữa."
      },
      {
        "chinese": "消费者最怕的就是上当受骗，买到假冒伪劣商品，钱花了不说，还弄了一肚子气。",
        "pinyin": "Xiāo fèi zhě zuì pà de jiù shì shàng dāng shòu piàn, mǎi dào jiǎ mào wěi liè shāng pǐn, qián huā le bù shuō, hái nòng le yī dù zi qì.",
        "vietnamese": "Người tiêu dùng sợ nhất là bị sập bẫy lừa đảo, rước phải hàng giả hàng nhái kém chất lượng, tiền mất tật mang chưa kể, lại còn ôm trọn một bụng tức tối bực mình."
      }
    ]
  },
  {
    "id": "hsk79-g-116",
    "order": 116,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc so sánh tăng tiến cực đoan: 连……都……，更不用说……了",
    "titleZh": "连……都……，更不用说……了",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "递进复句",
    "structure": "连 + Đối tượng có ưu thế + 都 + Bất lực ， 更不用说 + Đối tượng bình thường + 了",
    "explanationVi": "Đưa đối tượng có năng lực cao nhất ra làm chuẩn đối sánh để chứng minh đối tượng thấp hơn hoàn toàn không có khả năng thực hiện: 'ngay cả thầy giáo còn nghĩ nửa ngày, huống chi học sinh', 'đến lời xin lỗi còn không chịu nói, huống chi bồi thường'.",
    "tips": "Lập luận logic chặt chẽ, không thể chối cãi.",
    "examples": [
      {
        "chinese": "这道题的解法连老师都得想半天，更不用说学生了。",
        "pinyin": "Zhè dào tí de jiě fǎ lián lǎo shī dōu dé xiǎng bàn tiān, gèng bù yòng shuō xué shēng le.",
        "vietnamese": "Cách giải bài toán hóc búa này ngay cả thầy giáo cũng phải vò đầu bứt tai suy nghĩ nửa ngày trời, huống chi nói gì đến học trò."
      },
      {
        "chinese": "他连简单的道歉都不肯，更不用说做出什么补偿了。",
        "pinyin": "Tā lián jiǎn dān de dào qiàn dōu bù kěn, gèng bù yòng shuō zuò chū shén me bǔ cháng le.",
        "vietnamese": "Hắn ta ngay cả một lời xin lỗi đơn giản còn chẳng chịu mở mồm, huống chi bàn đến chuyện bồi thường thiệt hại."
      }
    ]
  },
  {
    "id": "hsk79-g-117",
    "order": 117,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc phản vấn tăng tiến văn ngôn: ……尚且……，（更）何况……",
    "titleZh": "……尚且……，（更）何况……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "递进复句",
    "structure": "A + 尚且 + Trạng thái / Khó khăn ， （更）何况 + B + 呢 / ？",
    "explanationVi": "'尚且' (còn... thay) là liên từ văn ngôn đưa ra sự thật khó chấp nhận ở đối tượng có ưu thế, từ đó suy ra đối tượng yếu thế hơn càng không thể: 'người lớn xem còn chưa thích hợp thay, huống chi là trẻ em', 'cỏ dại mọc còn khó khăn, huống chi phát triển nông nghiệp'.",
    "tips": "Một trong những mẫu câu phản vấn đắt giá nhất trong bài thi viết HSK cấp cao.",
    "examples": [
      {
        "chinese": "这样的影视作品，成人尚且不宜观看，何况是涉世未深的孩子。",
        "pinyin": "Zhè yàng de yǐng shì zuò pǐn, chéng rén shàng qiě bù yí guān kàn, hé kuàng shì shè shì wèi shēn de hái zi.",
        "vietnamese": "Tác phẩm phim ảnh thế này người lớn xem còn chưa phù hợp thay, huống chi là những đứa trẻ còn non nớt chưa va vấp trường đời."
      },
      {
        "chinese": "高海拔地区土壤贫瘠、气候恶劣，野草生长尚且困难，更何况发展大规模农业？",
        "pinyin": "Gāo hǎi bá dì qū tǔ rǎng pín jí, qì hòu è liè, yě cǎo shēng zhǎng shàng qiě kùn nán, gèng hé kuàng fā zhǎn dà guī mó nóng yè?",
        "vietnamese": "Vùng đất cao nguyên thổ nhưỡng bạc màu, khí hậu khắc nghiệt, cỏ dại mọc lên còn gian nan trầy trật thay, huống chi nói đến chuyện phát triển nền nông nghiệp quy mô lớn?"
      }
    ]
  },
  {
    "id": "hsk79-g-118",
    "order": 118,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc bổ sung hiển nhiên: ……，更不用说……了 (..., càng không cần nói tới...)",
    "titleZh": "……，更不用说……了",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "递进复句",
    "structure": "Phân câu tiền đề ， 更不用说 / 更何谈 + Đối tượng mức cao hơn + 了",
    "explanationVi": "Dùng ở cuối câu để khẳng định tính chất hiển nhiên của một sự việc ở bậc cao hơn sau khi đã chứng minh điều kiện ở bậc thấp hơn: 'người lớn nghe to còn hỏng tai, càng không cần nói đến trẻ sơ sinh', 'chợp mắt còn khó khăn, huống hồ nói tới ngủ say'.",
    "tips": "Thường đi kèm các dẫn chứng thực tế xác thực.",
    "examples": [
      {
        "chinese": "听音乐如果音量过大，对成人的听力都会造成损伤，更不用说对婴幼儿了。所以，让婴幼儿听音乐时，音量要控制适当。",
        "pinyin": "Tīng yīn lè rú guǒ yīn liàng guò dà, duì chéng rén de tīng lì dōu huì zào chéng sǔn shāng, gèng bù yòng shuō duì yīng yòu ér le. suǒ yǐ, ràng yīng yòu ér tīng yīn lè shí, yīn liàng yào kòng zhì shì dāng.",
        "vietnamese": "Nghe nhạc nếu mở âm lượng quá lớn sẽ gây tổn hại thính lực ngay cả đối với người lớn, càng không cần phải nói đến trẻ sơ sinh và trẻ nhỏ. Vì vậy, khi cho trẻ nhỏ nghe nhạc cần kiểm soát âm lượng ở mức vừa phải hợp lý."
      },
      {
        "chinese": "虽说“豪华型”大客车带有卧铺，但路况不好，一路颠簸。坐在这种车上，想打个盹常常都不容易，更不用说睡个安稳觉了。",
        "pinyin": "Suī shuō \"háo huá xíng\" dà kè chē dài yǒu wò pù, dàn lù kuàng bù hǎo, yī lù diān bǒ. zuò zài zhè zhǒng chē shàng, xiǎng dǎ gè dǔn cháng cháng dōu bù róng yì, gèng bù yòng shuō shuì gè ān wěn jué le.",
        "vietnamese": "Dẫu nói là xe khách 'hạng sang' có giường nằm, thế nhưng đường sá gập ghềnh hiểm trở xóc nảy cả chuyến đi. Ngồi trên xe ấy muốn chợp mắt một lát đã là chuyện chẳng dễ dàng gì, huống hồ nói tới chuyện đánh một giấc ngủ say êm ái."
      }
    ]
  },
  {
    "id": "hsk79-g-119",
    "order": 119,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc mục đích phòng ngừa: 为（了）……起见，…… (để cho..., để đảm bảo...)",
    "titleZh": "为（了）……起见，……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "目的复句",
    "structure": "为（了） + An toàn / Tiện lợi / Thận trọng + 起见 ， Biện pháp thực thi",
    "explanationVi": "Thành ngữ ngữ pháp chỉ mục đích phòng ngừa rủi ro hoặc bảo đảm tiêu chuẩn: 'để đảm bảo an toàn' (为安全起见), 'để chắc ăn/bảo hiểm' (为了保险起见), 'để tiện cho việc tra cứu' (为便于查找起见).",
    "tips": "Chuẩn mực hành chính, y tế và kỹ thuật quy chuẩn.",
    "examples": [
      {
        "chinese": "超强台风将在浦东登陆，为安全起见，长三角地区部分列车会临时停运。",
        "pinyin": "Chāo qiáng tái fēng jiāng zài pǔ dōng dēng lù, wèi ān quán qǐ jiàn, zhǎng sān jiǎo dì qū bù fēn liè chē huì lín shí tíng yùn.",
        "vietnamese": "Siêu bão sắp đổ bộ vào Phố Đông, để đảm bảo an toàn tuyệt đối, một số chuyến tàu hỏa khu vực đồng bằng Trường Giang sẽ tạm thời ngừng chạy."
      },
      {
        "chinese": "医生说他手术恢复得很好，但为了保险起见，还是需要留院观察一段时间。",
        "pinyin": "Yī shēng shuō tā shǒu shù huī fù dé hěn hǎo, dàn wèi le bǎo xiǎn qǐ jiàn, hái shì xū yào liú yuàn guān chá yī duàn shí jiān.",
        "vietnamese": "Bác sĩ cho biết ca mổ của anh bình phục rất khả quan, nhưng để nắm chắc ăn an toàn thì vẫn cần phải ở lại bệnh viện theo dõi thêm một thời gian."
      }
    ]
  },
  {
    "id": "hsk79-g-120",
    "order": 120,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc mục đích chính sách/hành động: ……，以…… (..., nhằm để / để mà...)",
    "titleZh": "……，以……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "目的复句",
    "structure": "Biện pháp / Quyết sách ， 以 + Mục tiêu vĩ mô hướng tới",
    "explanationVi": "Liên từ mục đích trang trọng cổ điển nối mệnh đề hành động với mục tiêu chiến lược: 'nhằm đạt được', 'để thực hiện': 'triển khai kế hoạch tăng tốc băng thông rộng nhằm bắt kịp chuẩn quốc tế', 'bảo đảm kinh phí dồi dào nhằm giúp đỡ các nước đang phát triển'.",
    "tips": "Từ khóa bắt buộc trong các văn kiện chính sách nhà nước và nghị quyết quốc tế.",
    "examples": [
      {
        "chinese": "在广泛听取各方意见之后，工信部决定实施宽带提速计划，以实现上网速度与国际平均水平接轨。",
        "pinyin": "Zài guǎng fàn tīng qǔ gè fāng yì jiàn zhī hòu, gōng xìn bù jué dìng shí shī kuān dài tí sù jì huà, yǐ shí xiàn shàng wǎng sù dù yǔ guó jì píng jūn shuǐ píng jiē guǐ.",
        "vietnamese": "Sau khi lắng nghe rộng rãi ý kiến đóng góp từ các bên, Bộ Công nghiệp và Công nghệ thông tin quyết định triển khai đề án tăng tốc băng thông rộng, nhằm đưa tốc độ truy cập internet trong nước tiệm cận với mặt bằng chung quốc tế."
      },
      {
        "chinese": "世界卫生组织呼吁成员国加强合作，完善监督机制，保证有充裕的资金，以帮助广大发展中国家。",
        "pinyin": "Shì jiè wèi shēng zǔ zhī hū xū chéng yuán guó jiā qiáng hé zuò, wán shàn jiān dū jī zhì, bǎo zhèng yǒu chōng yù de zī jīn, yǐ bāng zhù guǎng dà fā zhǎn zhōng guó jiā.",
        "vietnamese": "Tổ chức Y tế Thế giới kêu gọi các quốc gia thành viên siết chặt hợp tác, hoàn thiện cơ chế giám sát và bảo đảm nguồn ngân sách dồi dào, nhằm tiếp sức tương trợ cho đông đảo các nước đang phát triển."
      }
    ]
  },
  {
    "id": "hsk79-g-121",
    "order": 121,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc điều kiện bắt buộc bướng bỉnh: 非得……才…… (nhất định phải... mới chịu)",
    "titleZh": "非得……才……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "紧缩复句",
    "structure": "非得 + Điều kiện cực đoan / Hậu quả ， 才 + Chấp nhận / Dừng lại",
    "explanationVi": "Diễn tả tính bướng bỉnh, ngoan cố của chủ thể hoặc tình thế bức bách: nhất quyết phải chạm tới giới hạn tột cùng mới chịu thức tỉnh hoặc dừng hành vi: 'nhất định phải gây ra đại họa mới chịu ăn năn', 'nhất định phải đòi bằng được đồ chơi mới nín'.",
    "tips": "Mang sắc thái trách móc nghiêm khắc hoặc chê cười thói nhõng nhẽo.",
    "examples": [
      {
        "chinese": "为什么我事先对你百般劝说都没有用，非得酿成大错你才肯反思？",
        "pinyin": "Wèi shén me wǒ shì xiān duì nǐ bǎi bān quàn shuō dōu méi yǒu yòng, fēi dé niàng chéng dà cuò nǐ cái kěn fǎn sī?",
        "vietnamese": "Tại sao từ trước tôi đã hết lời khuyên can trăm đường mà cậu chẳng chịu nghe, nhất định phải để gây ra họa lớn tày đình cậu mới chịu ăn năn hối lỗi sao?"
      },
      {
        "chinese": "若是家长不给买玩具，“小皇帝”便会大哭大闹，非得把玩具弄到手才罢休。",
        "pinyin": "Ruò shì jiā zhǎng bù gěi mǎi wán jù, \"xiǎo huáng dì\" biàn huì dà kū dà nào, fēi dé bǎ wán jù nòng dào shǒu cái bà xiū.",
        "vietnamese": "Hễ cha mẹ mà không chịu mua đồ chơi cho là 'ông trời con' lập tức giãy nảy khóc lóc ăn vạ, nhất quyết phải đòi bằng được món đồ chơi cầm trên tay mới chịu thôi."
      }
    ]
  },
  {
    "id": "hsk79-g-122",
    "order": 122,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Cấu trúc điều kiện vô điều kiện bất khả: 任……也…… (bất kể... cũng không thể...)",
    "titleZh": "任……也……",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "紧缩复句",
    "structure": "任 + Ai / Điều gì + 也 + Không thể xoay chuyển",
    "explanationVi": "'任' biểu thị sự bất lực trước hoàn cảnh tuyệt đối: bất luận là ai tới can thiệp hay bất kỳ điều gì tác động cũng đều hoàn toàn vô hiệu: 'con bé mà khóc thì bất kể ai dỗ cũng không nín', 'bất kể chuyện vui gì cũng không làm anh vui lên được'.",
    "tips": "Nhấn mạnh tâm trạng bế tắc cực độ hoặc tính cách quật cường.",
    "examples": [
      {
        "chinese": "他的小女儿要是哭起来，任谁也哄不好。",
        "pinyin": "Tā de xiǎo nǚ ér yào shì kū qǐ lái, rèn shuí yě hǒng bù hǎo.",
        "vietnamese": "Cô con gái út của anh ấy mà một khi đã cất tiếng khóc hờn thì bất kể ai dỗ dành cũng chịu thua không nín."
      },
      {
        "chinese": "他的心情低落到了极点，似乎任什么事也不能让他开心一点。",
        "pinyin": "Tā de xīn qíng dī luò dào le jí diǎn, shì hū rèn shén me shì yě bù néng ràng tā kāi xīn yī diǎn.",
        "vietnamese": "Tâm trạng anh ấy chùng xuống buồn bã đến tột cùng, dường như bất kể chuyện vui vẻ nào trên đời cũng chẳng thể khiến anh hé môi mỉm cười được đôi chút."
      }
    ]
  },
  {
    "id": "hsk79-g-123",
    "order": 123,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức đẳng lập đa tầng (多重并列复句)",
    "titleZh": "多重并列复句",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Phân câu 1 ； Phân câu 2 ； Phân câu 3 （Song song bình đẳng）",
    "explanationVi": "Câu phức chứa nhiều tầng phân câu có quan hệ bình đẳng song song, liên kết với nhau bằng dấu chấm phẩy ';' hoặc các cấu trúc sóng đôi, không phân biệt chính phụ: ví dụ trình bày các giai đoạn học tập âm nhạc song hành, hoặc ba khía cạnh giáo dục con cái tự do.",
    "tips": "Thường có cấu trúc đối ngẫu nhịp nhàng, tạo âm điệu uyển chuyển hào sảng cho bài văn.",
    "examples": [
      {
        "chinese": "我8岁开始学拉二胡，现已达到第七级了；11岁开始学弹钢琴，现已通过第八级的考试。",
        "pinyin": "Wǒ 8 suì kāi shǐ xué lā èr hú, xiàn yǐ dá dào dì qī jí le; 1 1 suì kāi shǐ xué dàn gāng qín, xiàn yǐ tōng guò dì bā jí de kǎo shì.",
        "vietnamese": "Tôi 8 tuổi bắt đầu học kéo đàn nhị, nay đã đạt tới cấp độ 7; 11 tuổi bắt đầu học đánh dương cầm, hiện tại đã thi đỗ chứng chỉ cấp độ 8."
      },
      {
        "chinese": "我在孩子的成长过程中，给予他充分的自由。我不逼他学奥数，除非他自己愿意学；不逼他音乐考级，只求培养些许乐感；不逼他学外语，只为他提供开口讲外语的机会。",
        "pinyin": "Wǒ zài hái zi de chéng zhǎng guò chéng zhōng, gěi yǔ tā chōng fēn de zì yóu. wǒ bù bī tā xué ào shù, chú fēi tā zì jǐ yuàn yì xué; bù bī tā yīn lè kǎo jí, zhǐ qiú péi yǎng xiē xǔ lè gǎn; bù bī tā xué wài yǔ, zhǐ wèi tā tí gōng kāi kǒu jiǎng wài yǔ de jī huì.",
        "vietnamese": "Trong suốt quá trình khôn lớn của con, tôi trao cho con sự tự do trọn vẹn. Tôi không ép con học toán nâng cao trừ phi chính con muốn học; không ép con thi lấy chứng chỉ âm nhạc mà chỉ cốt bồi dưỡng chút cảm thụ âm nhạc; không ép con cày cuốc ngoại ngữ mà chỉ tạo môi trường cho con có cơ hội tự tin mở lời giao tiếp."
      }
    ]
  },
  {
    "id": "hsk79-g-124",
    "order": 124,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chuyển ngoặt đa tầng (多重转折复句)",
    "titleZh": "多重转折复句",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Vế thuận 1 + Nhưng vế 2 + Cơ mà vế 3 （Chuyển hướng liên tiếp）",
    "explanationVi": "Câu phức lồng ghép nhiều tầng chuyển ý đối lập nhau: một mặt thừa nhận khó khăn ban đầu, mặt khác khẳng định thành quả, đồng thời bổ sung thêm một khía cạnh chuyển ngoặt khác về mặt nhận thức tâm lý.",
    "tips": "Giúp biểu đạt những tư duy phức tạp, những uẩn khúc nội tâm nhiều tầng nấc.",
    "examples": [
      {
        "chinese": "今年虽然因为气温低，西瓜上市的时间推迟了，但总产量同比增长了近二成。",
        "pinyin": "Jīn nián suī rán yīn wèi qì wēn dī, xī guā shàng shì de shí jiān tuī chí le, dàn zǒng chǎn liàng tóng bǐ zēng zhǎng le jìn èr chéng.",
        "vietnamese": "Năm nay tuy do nền nhiệt độ thấp khiến mùa dưa hấu tung ra thị trường bị chậm lại, thế nhưng tổng sản lượng thu hoạch vẫn tăng trưởng gần 20% so với cùng kỳ năm trước."
      },
      {
        "chinese": "我清楚地记得那天她戴的是一枚钻戒，虽然她后来坚决否认，说她戴的只不过是枚普通金戒指，而且她发给我的照片也证实了这一点，可我还是不愿意承认我记错了。",
        "pinyin": "Wǒ qīng chǔ dì jì dé nà tiān tā dài de shì yī méi zuān jiè, suī rán tā hòu lái jiān jué fǒu rèn, shuō tā dài de zhǐ bù guò shì méi pǔ tōng jīn jiè zhǐ, ér qiě tā fā gěi wǒ de zhào piàn yě zhèng shí le zhè yī diǎn, kě wǒ hái shì bù yuàn yì chéng rèn wǒ jì cuò le.",
        "vietnamese": "Tôi nhớ như in hôm đó cô ấy đeo chiếc nhẫn kim cương lấp lánh, dẫu về sau cô ấy khăng khăng phủ nhận rằng chiếc nhẫn cô đeo chỉ là nhẫn vàng bình thường và bức ảnh cô gửi sang cũng xác thực điều đó, cơ mà tôi vẫn không cam lòng thừa nhận là trí nhớ mình bị nhầm lẫn."
      }
    ]
  },
  {
    "id": "hsk79-g-125",
    "order": 125,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức giả thiết đa tầng (多重假设复句)",
    "titleZh": "多重假设复句",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Nếu (Điều kiện 1 + Điều kiện 2 + Điều kiện 3) thì Kết quả",
    "explanationVi": "Câu phức lồng ghép nhiều điều kiện giả định bổ trợ cho nhau (vừa nỗ lực, vừa có tài năng, lại thêm may mắn) trước khi dẫn ra kết luận tất yếu: 'thì nhất định sẽ thành công'.",
    "tips": "Yêu cầu sự phối hợp chặt chẽ giữa các liên từ '如果... 而且... 再加上... 就...'",
    "examples": [
      {
        "chinese": "如果你足够努力，而且有一定的天赋，再加上一点点好运气，就一定能通过这次考试。",
        "pinyin": "Rú guǒ nǐ zú gòu nǔ lì, ér qiě yǒu yī dìng de tiān fù, zài jiā shàng yī diǎn diǎn hǎo yùn qì, jiù yī dìng néng tōng guò zhè cì kǎo shì.",
        "vietnamese": "Nếu như bạn đủ chăm chỉ nỗ lực, lại sở hữu một chút năng khiếu thiên bẩm, cộng thêm một chút may mắn mỉm cười, thì chắc chắn sẽ vượt qua kỳ thi sát hạch lần này."
      },
      {
        "chinese": "要是房子没有其他问题，只是因为租金高而迟迟租不出去，你就要考虑降一部分租金试试了。",
        "pinyin": "Yào shì fáng zi méi yǒu qí tā wèn tí, zhǐ shì yīn wèi zū jīn gāo ér chí chí zū bù chū qù, nǐ jiù yào kǎo lǜ jiàng yī bù fēn zū jīn shì shì le.",
        "vietnamese": "Nếu căn nhà chẳng vướng mắc vấn đề gì khác mà chỉ vì giá thuê quá cao dẫn tới mãi vẫn chưa tìm được người thuê, thì bạn nên cân nhắc giảm bớt một phần tiền thuê xem sao."
      }
    ]
  },
  {
    "id": "hsk79-g-126",
    "order": 126,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhân quả đa tầng (多重因果复句)",
    "titleZh": "多重因果复句",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Bởi vì A nên B ； Do B nên dẫn tới C （Nhân quả liên hoàn）",
    "explanationVi": "Câu phức liên kết chuỗi nhân quả mắt xích: nguyên nhân A tạo ra hệ quả B, và hệ quả B trở thành tiền đề nguyên nhân sản sinh ra kết cục C; hoặc giải thích nguyên nhân bằng một kết cấu tăng tiến bên trong.",
    "tips": "Cốt lõi trong các bài luận giải thích cơ chế kinh tế và phân tích hiện tượng lịch sử.",
    "examples": [
      {
        "chinese": "由于奥运会足球比赛一开始只面向准业余选手，所以它的水平不能与世界杯相比。于是在1930年乌拉圭举办第一届世界杯后，奥运会足球比赛就退居到次要位置。",
        "pinyin": "Yóu yú ào yùn huì zú qiú bǐ sài yī kāi shǐ zhǐ miàn xiàng zhǔn yè yú xuǎn shǒu, suǒ yǐ tā de shuǐ píng bù néng yǔ shì jiè bēi xiāng bǐ. yú shì zài 1 9 3 0 nián wū lā guī jǔ bàn dì yī jiè shì jiè bēi hòu, ào yùn huì zú qiú bǐ sài jiù tuì jū dào cì yào wèi zhì.",
        "vietnamese": "Do giải bóng đá Thế vận hội Olympic ban đầu chỉ dành cho các cầu thủ bán chuyên nghiệp, vì thế trình độ chuyên môn không thể sánh ngang với World Cup. Cho nên sau khi Uruguay đăng cai kỳ World Cup đầu tiên vào năm 1930, bóng đá Olympic đã lui dần về vị trí thứ yếu."
      },
      {
        "chinese": "他非常热衷于人体研究，因为在研究中不但可以获得新知识，而且还能对自己的身体状况有更深入的了解。",
        "pinyin": "Tā fēi cháng rè zhōng yú rén tǐ yán jiū, yīn wèi zài yán jiū zhōng bù dàn kě yǐ huò dé xīn zhī shí, ér qiě hái néng duì zì jǐ de shēn tǐ zhuàng kuàng yǒu gèng shēn rù de le jiě.",
        "vietnamese": "Ông ấy vô cùng say mê công trình nghiên cứu cơ thể người, bởi lẽ trong quá trình nghiên cứu chẳng những có thể tiếp thu thêm nhiều tri thức mới, mà còn thấu hiểu sâu sắc và toàn diện hơn về chính tình trạng sức khỏe của bản thân."
      }
    ]
  },
  {
    "id": "hsk79-g-127",
    "order": 127,
    "category": "cau-phuc-da-tang",
    "categoryName": "Câu so sánh & Câu phức đa tầng",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức tăng tiến đa tầng (多重递进复句)",
    "titleZh": "多重递进复句",
    "grammarType": "句子的类型",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Không những A mà còn B ， Thậm chí còn C",
    "explanationVi": "Câu phức đẩy mức độ của phẩm chất hoặc lợi ích lên theo từng bậc thang liên tiếp: 'không những... mà còn... thậm chí còn...': biết thổi sáo -> thổi hay -> tự làm được sáo; thử thách nhân viên -> chiều lòng chủ tịch -> không làm mất lòng sếp.",
    "tips": "Tạo sức lôi cuốn mạnh mẽ và sự thuyết phục toàn diện cho luận điểm.",
    "examples": [
      {
        "chinese": "他不但会吹笛子，而且吹得还挺好，甚至还会做笛子呢！",
        "pinyin": "Tā bù dàn huì chuī dí zi, ér qiě chuī dé hái tǐng hǎo, shèn zhì hái huì zuò dí zi ne!",
        "vietnamese": "Cậu ấy chẳng những biết thổi sáo trúc, mà thổi lại còn rất điêu luyện, thậm chí còn biết tự tay chế tác ra những cây sáo trúc nữa cơ đấy!"
      },
      {
        "chinese": "这个项目不如交给小张负责，这样既能考验小张的能力，又能满足董事长的要求，而且还可以不得罪总经理。",
        "pinyin": "Zhè gè xiàng mù bù rú jiāo gěi xiǎo zhāng fù zé, zhè yàng jì néng kǎo yàn xiǎo zhāng de néng lì, yòu néng mǎn zú dǒng shì zhǎng de yào qiú, ér qiě hái kě yǐ bù dé zuì zǒng jīng lǐ.",
        "vietnamese": "Dự án này chi bằng giao cho Tiểu Trương đảm nhiệm, làm như vậy vừa có thể khảo nghiệm năng lực của Tiểu Trương, lại vừa đáp ứng trọn vẹn yêu cầu của Chủ tịch, mà hơn hết còn không làm phật lòng Tổng giám đốc."
      }
    ]
  },
  {
    "id": "hsk79-g-128",
    "order": 128,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu theo trật tự thời gian (时间顺序句群)",
    "titleZh": "时间顺序",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Giai đoạn 1 -> Giai đoạn 2 -> Giai đoạn 3 -> Kết quả",
    "explanationVi": "Nhóm câu (句群 - Cú quần) liên kết chặt chẽ với nhau theo dòng chảy tuyến tính của thời gian: quy trình từng bước nấu ăn, các bước thực thi đề án cải cách doanh nghiệp từ điều tra, tái cơ cấu cho đến ngày thu quả ngọt có lãi.",
    "tips": "Sử dụng các từ nối thời gian: '首先... 接着... 经过... 最终...' để mạch văn thông suốt.",
    "examples": [
      {
        "chinese": "豆腐皮包肉的制作程序如下：取豆腐皮一袋用温水泡软，切成两个饺子皮大小的方块备用。将肉末用姜末、葱花、盐、味精、鸡蛋和好，再将几只冬菇泡软、切碎，放入肉末中拌匀。",
        "pinyin": "Dòu fǔ pí bāo ròu de zhì zuò chéng xù rú xià: qǔ dòu fǔ pí yī dài yòng wēn shuǐ pào ruǎn, qiè chéng liǎng gè jiǎo zi pí dà xiǎo de fāng kuài bèi yòng. jiāng ròu mò yòng jiāng mò, cōng huā, yán, wèi jīng, jī dàn hé hǎo, zài jiāng jǐ zhǐ dōng gū pào ruǎn, qiè suì, fàng rù ròu mò zhōng bàn yún.",
        "vietnamese": "Quy trình chế biến món váng đậu cuộn thịt như sau: Lấy một túi váng đậu ngâm nước ấm cho mềm ra, cắt thành từng miếng vuông cỡ bằng hai vỏ bánh chẻo để sẵn. Đem thịt băm ướp đều với gừng băm, hành hoa, muối, mì chính và trứng gà, kế đó lấy vài tai nấm hương ngâm nở, băm nhỏ rồi trút vào tô thịt băm trộn đều tay."
      },
      {
        "chinese": "在广泛调研的基础上，有关部门合并了一些高度类似的企业，停办一些消耗高、污染重、利润低的企业。经过调整以后，不少厂很快扭亏为盈。",
        "pinyin": "Zài guǎng fàn diào yán de jī chǔ shàng, yǒu guān bù mén hé bìng le yī xiē gāo dù lèi shì de qǐ yè, tíng bàn yī xiē xiāo hào gāo, wū rǎn zhòng, lì rùn dī de qǐ yè. jīng guò diào zhěng yǐ hòu, bù shǎo chǎng hěn kuài niǔ kuī wèi yíng.",
        "vietnamese": "Trên nền tảng khảo sát sâu rộng, các cơ quan hữu quan đã tiến hành sáp nhập các doanh nghiệp có tính chất tương đồng cao, đồng thời cho dừng hoạt động các cơ sở tiêu hao nhiều năng lượng, gây ô nhiễm nặng và lợi nhuận thấp. Trải qua đợt tái cơ cấu này, không ít nhà máy đã nhanh chóng chuyển từ thua lỗ sang kinh doanh có lãi."
      }
    ]
  },
  {
    "id": "hsk79-g-129",
    "order": 129,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu theo trật tự không gian (空间顺序句群)",
    "titleZh": "空间顺序",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Trung tâm -> Bên trái -> Bên phải -> Phía sau",
    "explanationVi": "Nhóm câu sắp xếp theo điểm nhìn thị giác và phương vị địa lý: miêu tả cảnh quan sông nước đập Tam Hiệp (bên trái, bên phải) hoặc bố cục khu triển lãm (trục chính, bắc, nam, phía sau lưng).",
    "tips": "Các từ chỉ phương vị '左边... 右边... 背后... 东侧...' đóng vai trò cột mốc định vị không gian.",
    "examples": [
      {
        "chinese": "20年前的长江中堡岛已不复存在。现在，在它的左边，大坝已矗立在波涛之中，左岸厂房坝、电厂、泄洪坝等已相继建成。在它的右边，三期工程的主体项目——右岸电厂正夜以继日地工作着。",
        "pinyin": "2 0 nián qián de zhǎng jiāng zhōng bǎo dǎo yǐ bù fù cún zài. xiàn zài, zài tā de zuǒ biān, dà bà yǐ chù lì zài bō tāo zhī zhōng, zuǒ àn chǎng fáng bà, diàn chǎng, xiè hóng bà děng yǐ xiāng jì jiàn chéng. zài tā de yòu biān, sān qī gōng chéng de zhǔ tǐ xiàng mù — — yòu àn diàn chǎng zhèng yè yǐ jì rì dì gōng zuò zhe.",
        "vietnamese": "Đảo Trung Bảo trên sông Trường Giang của 20 năm về trước nay đã không còn nữa. Giờ đây, ở phía bên trái của đảo, con đập khổng lồ sừng sững uy nghiêm giữa làn sóng nước cuồn cuộn, tổ hợp nhà máy bờ trái, trạm phát điện và đập xả lũ đã lần lượt hoàn thành. Còn ở phía bên phải, hạng mục trọng điểm của công trình giai đoạn ba — nhà máy điện bờ phải — đang ngày đêm vận hành không ngơi nghỉ."
      },
      {
        "chinese": "站在广场的中心位置，向东望去，1号展馆坐落于馆区主轴线上。其南北分别为2、3号展馆。三个展馆从远处看排成一条线，十分整齐。绕过三馆，背后是4、5号展馆，分别位于2、3号馆的东侧，两馆皆为东西走向，共同构成环湖之势。",
        "pinyin": "Zhàn zài guǎng chǎng de zhōng xīn wèi zhì, xiàng dōng wàng qù, 1 hào zhǎn guǎn zuò luò yú guǎn qū zhǔ zhóu xiàn shàng. qí nán běi fēn bié wèi 2, 3 hào zhǎn guǎn. sān gè zhǎn guǎn cóng yuǎn chù kàn pái chéng yī tiáo xiàn, shí fēn zhěng qí. rào guò sān guǎn, bèi hòu shì 4, 5 hào zhǎn guǎn, fēn bié wèi yú 2, 3 hào guǎn de dōng cè, liǎng guǎn jiē wèi dōng xī zǒu xiàng, gòng tóng gòu chéng huán hú zhī shì.",
        "vietnamese": "Đứng từ vị trí trung tâm của quảng trường phóng tầm mắt về hướng đông, nhà triển lãm số 1 tọa lạc ngay trên trục chính của khuôn viên. Phía bắc và phía nam của nó lần lượt là nhà triển lãm số 2 và số 3. Ba tòa triển lãm nhìn từ xa xếp thành một hàng thẳng tắp vô cùng ngay ngắn. Đi vòng qua ba tòa nhà này, phía sau lưng là nhà triển lãm số 4 và số 5, lần lượt nằm ở bờ đông của nhà số 2 và số 3, cả hai đều trải dài theo hướng đông tây, cùng tạo nên thế uốn lượn ôm trọn lấy lòng hồ."
      }
    ]
  },
  {
    "id": "hsk79-g-130",
    "order": 130,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu theo trật tự logic biện chứng (逻辑顺序句群)",
    "titleZh": "逻辑顺序",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Luận điểm tổng quát -> Khía cạnh A -> Khía cạnh B -> Ưu/Nhược",
    "explanationVi": "Nhóm câu triển khai theo quy luật logic tư duy: từ hiện tượng tổng quát đến phân tích nguyên nhân hai mặt (một mặt thiên nhiên, một mặt con người), hoặc đối chiếu toàn diện giữa ưu điểm và nhược điểm của cơ chế.",
    "tips": "Dùng cặp liên từ logic: '一方面... 另一方面...', '优点是... 缺点是...'.",
    "examples": [
      {
        "chinese": "全球变暖是自然因素和人为因素共同作用的结果。一方面，近年来超强的厄尔尼诺现象显著升高了海水温度，使得大洋上空温度偏高。另一方面，人类活动，如大规模的工业排放和森林采伐，是更主要的原因。",
        "pinyin": "Quán qiú biàn nuǎn shì zì rán yīn sù hé rén wèi yīn sù gòng tóng zuò yòng de jié guǒ. yī fāng miàn, jìn nián lái chāo qiáng de è ěr ní nuò xiàn xiàng xiǎn zhù shēng gāo le hǎi shuǐ wēn dù, shǐ dé dà yáng shàng kōng wēn dù piān gāo. lìng yī fāng miàn, rén lèi huó dòng, rú dà guī mó de gōng yè pái fàng hé sēn lín cǎi fá, shì gèng zhǔ yào de yuán yīn.",
        "vietnamese": "Hiện tượng nóng lên toàn cầu là hệ quả từ sự tác động cộng hưởng của cả yếu tố tự nhiên lẫn con người. Một mặt, hiện tượng El Nino cực đoan trong những năm gần đây đã làm nhiệt độ nước biển tăng mạnh rõ rệt, khiến bầu khí quyển phía trên đại dương luôn ở mức nhiệt cao. Mặt khác, các hoạt động của con người như phát thải công nghiệp quy mô lớn và nạn chặt phá rừng bừa bãi mới là nguyên nhân then chốt hơn cả."
      },
      {
        "chinese": "该体制的优点是灾害响应速度快，处理突发情况效率高；缺点是不利于整合地方力量，也不利于平日村民自救意识的提高。",
        "pinyin": "Gāi tǐ zhì de yōu diǎn shì zāi hài xiǎng yīng sù dù kuài, chù lǐ tū fā qíng kuàng xiào lǜ gāo; quē diǎn shì bù lì yú zhěng hé dì fāng lì liàng, yě bù lì yú píng rì cūn mín zì jiù yì shí de tí gāo.",
        "vietnamese": "Ưu điểm của cơ chế này là tốc độ phản ứng trước thảm họa thiên tai rất mau lẹ, hiệu suất xử lý các tình huống khẩn cấp bất ngờ rất cao; song nhược điểm là không có lợi cho việc quy tụ sức mạnh cơ sở địa phương, cũng như chưa thúc đẩy được ý thức tự cứu hộ phòng ngừa hàng ngày của người dân trong thôn."
      }
    ]
  },
  {
    "id": "hsk79-g-131",
    "order": 131,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu triển khai chủ đề liên hoàn (话题延伸句群)",
    "titleZh": "话题延伸",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ đề A -> Mở rộng khía cạnh địa lý -> Mở rộng đặc tính sinh thái",
    "explanationVi": "Kỹ thuật kết nối văn bản bậc cao: giữ nguyên chủ đề trung tâm xuyên suốt nhiều câu (dùng ký hiệu đồng sở chỉ Øi để chỉ chủ ngữ đã được duy trì) và lần lượt mở rộng ra các phân nhánh thông tin mới về phân bố, sinh thái hoặc định nghĩa khoa học.",
    "tips": "Tạo nên tính gắn kết ngữ nghĩa sâu sắc (semantic coherence) cho đoạn văn học thuật.",
    "examples": [
      {
        "chinese": "甘草i于亚欧大陆的中国北部、蒙古、俄罗斯西伯利亚地区、哈萨克斯坦、巴基斯坦等地都有分布，Øi在中国具体分布于东北、华北、西北等地。甘草i喜光照充足、干燥少雨、冬夏分明以及昼夜温差大的环境，甘草i具有喜光、耐旱、耐热、耐寒及耐盐碱等特性。",
        "pinyin": "Gān cǎo i yú yà ōu dà lù de zhōng guó běi bù, méng gǔ, é luó sī xī bó lì yà dì qū, hā sà kè sī tǎn, bā jī sī tǎn děng dì dōu yǒu fēn bù, Ø i zài zhōng guó jù tǐ fēn bù yú dōng běi, huá běi, xī běi děng dì. gān cǎo i xǐ guāng zhào chōng zú, gàn zào shǎo yǔ, dōng xià fēn míng yǐ jí zhòu yè wēn chà dà de huán jìng, gān cǎo i jù yǒu xǐ guāng, nài hàn, nài rè, nài hán jí nài yán jiǎn děng tè xìng.",
        "vietnamese": "Cây cam thảo phân bố rộng khắp đại lục Á - Âu tại miền bắc Trung Quốc, Mông Cổ, vùng Siberia của Nga, Kazakhstan, Pakistan; riêng tại Trung Quốc phân bố chủ yếu ở vùng Đông Bắc, Hoa Bắc và Tây Bắc. Cam thảo ưa thích môi trường ngập tràn ánh nắng, khô ráo ít mưa, bốn mùa đông hè rõ rệt và biên độ nhiệt ngày đêm chênh lệch lớn; loài cây này sở hữu các đặc tính quý như ưa sáng, chịu hạn, chịu nhiệt, chịu rét và kháng đất phèn mặn cực tốt."
      },
      {
        "chinese": "人工智能i是新一轮科技革命和产业变革的重要驱动力量，Øi是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。",
        "pinyin": "Rén gōng zhì néng i shì xīn yī lún kē jì gé mìng hé chǎn yè biàn gé de zhòng yào qū dòng lì liàng, Ø i shì yán jiū, kāi fā yòng yú mó nǐ, yán shēn hé kuò zhǎn rén de zhì néng de lǐ lùn, fāng fǎ, jì shù jí yīng yòng xì tǒng de yī mén xīn de jì shù kē xué.",
        "vietnamese": "Trí tuệ nhân tạo (AI) là động lực then chốt thúc đẩy làn sóng cách mạng khoa học công nghệ và đổi mới công nghiệp thế hệ mới; đây là một môn khoa học kỹ thuật hiện đại chuyên nghiên cứu, phát triển các lý thuyết, phương pháp, kỹ thuật và hệ thống ứng dụng nhằm mô phỏng, mở rộng và phát triển trí thông minh của con người."
      }
    ]
  },
  {
    "id": "hsk79-g-132",
    "order": 132,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu chuyển đổi chủ đề mượt mà (话题转换句群)",
    "titleZh": "话题转换",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Bàn về chủ đề A 。 至于 / 谈到 主 đề B ， Phân câu",
    "explanationVi": "Kỹ thuật chuyển mạch thảo luận sang một khía cạnh mới bằng các từ đánh dấu chủ đề như '至于...' (còn về...): từ việc sáng tác nghệ thuật chuyển sang vị trí treo tranh; từ tốc độ ghi đĩa chuyển sang giá thành.",
    "tips": "Giúp việc chuyển ý giữa các đoạn không bị gãy vụn mà tự nhiên, uyển chuyển.",
    "examples": [
      {
        "chinese": "我在创作这幅作品时，是希望能够依靠背影去反映出人物的情绪和精神状态。至于这件作品的展出位置，在规划展厅布局时，就做了特别的安排。",
        "pinyin": "Wǒ zài chuàng zuò zhè fú zuò pǐn shí, shì xī wàng néng gòu yī kào bèi yǐng qù fǎn yìng chū rén wù de qíng xù hé jīng shén zhuàng tài. zhì yú zhè jiàn zuò pǐn de zhǎn chū wèi zhì, zài guī huà zhǎn tīng bù jú shí, jiù zuò le tè bié de ān pái.",
        "vietnamese": "Khi sáng tác tác phẩm này, tôi mang theo kỳ vọng có thể dựa vào bóng lưng để khắc họa tâm trạng và thế giới tinh thần của nhân vật. Còn về vị trí trưng bày của tác phẩm, ngay khi lên phương án bố cục phòng triển lãm, chúng tôi đã có sự sắp đặt vô cùng đặc biệt."
      },
      {
        "chinese": "我刻录光盘的速度都是软件默认的，如果自己去调高速度的话光盘容易报废。（至于）价钱嘛，买的比较多的话就一元一张盘。",
        "pinyin": "Wǒ kè lù guāng pán de sù dù dōu shì ruǎn jiàn mò rèn de, rú guǒ zì jǐ qù diào gāo sù dù de huà guāng pán róng yì bào fèi. (zhì yú) jià qián ma, mǎi de bǐ jiào duō de huà jiù yī yuán yī zhāng pán.",
        "vietnamese": "Tốc độ ghi đĩa của tôi hoàn toàn để theo mặc định của phần mềm, nếu tự ý chỉnh tốc độ cao quá thì đĩa rất dễ bị hỏng hóc biến thành phế liệu. Còn về giá cả, nếu mua số lượng nhiều thì chỉ một tệ một chiếc đĩa."
      }
    ]
  },
  {
    "id": "hsk79-g-133",
    "order": 133,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu lược bỏ chủ ngữ thừa kế phía trước (承前省略句群)",
    "titleZh": "承前省略",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Chủ ngữ A + Hành động 1 ， 【Ø】 + Hành động 2 ， 【Ø】 + Hành động 3",
    "explanationVi": "Hiện tượng văn phạm đặc thù của tiếng Hán: một khi chủ ngữ đã được xác lập ở câu đầu, các câu sau liên tiếp lược bỏ chủ ngữ mà người đọc vẫn hiểu rõ ràng mạch lạc hành động do ai thực hiện (bà nội lấy sổ tiết kiệm, bế tôi, ra ngân hàng; chính phủ cung cấp hàng cứu trợ, cử đội cứu nạn).",
    "tips": "Làm cho nhịp điệu văn bản trở nên dồn dập, liền mạch, tránh lặp từ thô kệch.",
    "examples": [
      {
        "chinese": "我奶奶虽然没有文化，【】做事却十分干脆，【】听了这话便找出存折，【】抱着我便径直走出家门去银行取钱。",
        "pinyin": "Wǒ nǎi nǎi suī rán méi yǒu wén huà, [] zuò shì què shí fēn gàn cuì, [] tīng le zhè huà biàn zhǎo chū cún zhé, [] bào zhe wǒ biàn jìng zhí zǒu chū jiā mén qù yín xíng qǔ qián.",
        "vietnamese": "Bà nội tôi dẫu không biết chữ, [bà] làm việc lại vô cùng dứt khoát quyết đoán, [bà] nghe thấy lời đó liền tìm ngay cuốn sổ tiết kiệm, [bà] bế xốc tôi vào lòng rồi đi thẳng một mạch ra khỏi nhà tới ngân hàng rút tiền."
      },
      {
        "chinese": "中国政府秉承“以人为本”的精神，【】根据被援助国要求和国际社会的呼吁，【】及时提供了救灾物资、救援队和医疗队，【】尽力提供现汇资金援助，【】积极参与了国际合作的重大紧急救援任务。",
        "pinyin": "Zhōng guó zhèng fǔ bǐng chéng \"yǐ rén wèi běn\" de jīng shén, [] gēn jù bèi yuán zhù guó yào qiú hé guó jì shè huì de hū xū, [] jí shí tí gōng le jiù zāi wù zī, jiù yuán duì hé yī liáo duì, [] jǐn lì tí gōng xiàn huì zī jīn yuán zhù, [] jī jí cān yǔ le guó jì hé zuò de zhòng dà jǐn jí jiù yuán rèn wù.",
        "vietnamese": "Chính phủ Trung Quốc phát huy tinh thần 'lấy con người làm gốc', [chính phủ] căn cứ theo yêu cầu của nước thụ viện và lời kêu gọi từ cộng đồng quốc tế, [chính phủ] đã kịp thời cung ứng hàng cứu trợ, cử đội cứu nạn và y tế tới hiện trường, [chính phủ] dốc sức viện trợ tài chính bằng tiền mặt, [chính phủ] tích cực tham gia vào các sứ mệnh cứu hộ khẩn cấp trọng đại của hợp tác quốc tế."
      }
    ]
  },
  {
    "id": "hsk79-g-134",
    "order": 134,
    "category": "mach-lac-van-ban",
    "categoryName": "Đoạn văn & Quần câu (句群)",
    "categoryIcon": "📑",
    "titleVi": "Quần câu lược bỏ chủ ngữ dự báo theo vế sau (蒙后省略句群)",
    "titleZh": "蒙后省略",
    "grammarType": "语段（句群）",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Mặc dù 【Ø】... ， Nhưng 【Chủ ngữ A】... （Chủ ngữ xuất hiện ở vế sau）",
    "explanationVi": "Kỹ thuật cú pháp cao cấp: chủ ngữ của toàn đoạn được tạm giấu đi ở vế phụ nhượng bộ/điều kiện mở đầu, và chỉ chính thức xuất hiện ở vế chính phía sau nhằm tạo điểm nhấn và sức lôi cuốn cho câu văn: 'Mặc dù [Uông Xương Tự] chưa từng có cơ hội... nhưng Uông Xương Tự luôn sẵn sàng'.",
    "tips": "Đỉnh cao của sự tinh tế trong cú pháp và nghệ thuật hành văn tiếng Trung HSK 7-9.",
    "examples": [
      {
        "chinese": "虽然【】没有得到为国家献身的机会，但也一直做好了准备；如果到了那一天，汪昌绪绝对丝毫不会犹豫。",
        "pinyin": "Suī rán [] méi yǒu dé dào wèi guó jiā xiàn shēn de jī huì, dàn yě yī zhí zuò hǎo le zhǔn bèi; rú guǒ dào le nà yī tiān, wāng chāng xù jué duì sī háo bù huì yóu yù.",
        "vietnamese": "Mặc dù [Uông Xương Tự] chưa từng có cơ hội xả thân vì tổ quốc, nhưng ông cũng luôn chuẩn bị sẵn tâm thế sẵn sàng; nếu ngày đó thực sự xảy đến, Uông Xương Tự tuyệt đối sẽ không một mảy may do dự."
      },
      {
        "chinese": "无论【】平时工作多忙，【】回家多晚，王和平都会非常认真地检查孩子的作业。",
        "pinyin": "Wú lùn [] píng shí gōng zuò duō máng, [] huí jiā duō wǎn, wáng hé píng dōu huì fēi cháng rèn zhēn dì jiǎn chá hái zi de zuò yè.",
        "vietnamese": "Bất luận [Vương Hòa Bình] ngày thường công việc bận rộn đến đâu, [Vương Hòa Bình] về nhà muộn thế nào, Vương Hòa Bình cũng đều vô cùng nghiêm túc kiểm tra tỉ mỉ bài tập về nhà của con."
      }
    ]
  }
];
