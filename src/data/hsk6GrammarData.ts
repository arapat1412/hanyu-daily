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

export const HSK6_GRAMMAR_CATEGORIES: GrammarCategory[] = [
  {
    "id": "all",
    "name": "Tất cả",
    "icon": "📚"
  },
  {
    "id": "cau-tu",
    "name": "Tiền tố & Hậu tố cấu từ (语素)",
    "icon": "🔬"
  },
  {
    "id": "tu-loai",
    "name": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "icon": "🔤"
  },
  {
    "id": "khau-ngu",
    "name": "Khẩu ngữ & Cụm cố định",
    "icon": "💬"
  },
  {
    "id": "cau-phuc",
    "name": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "icon": "🔗"
  }
];

export const HSK6_ENRICHED_GRAMMAR: EnrichedGrammarPoint[] = [
  {
    "id": "hsk6-g-01",
    "order": 1,
    "category": "cau-tu",
    "categoryName": "Tiền tố & Hậu tố cấu từ (语素)",
    "categoryIcon": "🔬",
    "titleVi": "Các tiền tố cấu từ cao cấp: 超—, 多—, 反—, 无—, 亚—, 准—",
    "titleZh": "超—、多—、反—、无—、亚—、准—",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Tiền tố + Từ căn (Danh từ / Tính từ / Động từ)",
    "explanationVi": "Hệ thống tiền tố tạo từ phái sinh hiện đại trong HSK 6: 1) '超—': siêu, vượt quá (超水平 - vượt phong độ, 超音速 - siêu âm thanh); 2) '多—': đa, nhiều khía cạnh (多层次 - đa tầng lớp, 多媒体 - đa phương tiện); 3) '反—': phản, ngược lại, chống (反作用 - phản tác dụng, 反方向); 4) '无—': vô, không có (无病毒 - không có virus, 无条件 - vô điều kiện); 5) '亚—': á, thứ cận, thứ cấp (亚中心 - trung tâm phụ/á trung tâm, 亚健康 - bán khỏe mạnh/tiền bệnh lý); 6) '准—': chuẩn bị thành, tương lai (准媳妇 - con dâu tương lai, 准妈妈 - người sắp làm mẹ).",
    "tips": "Nắm vững các tiền tố này giúp bạn đoán nghĩa của hàng trăm từ mới chuyên ngành xuất hiện trong phần Đọc hiểu HSK 6.",
    "examples": [
      {
        "chinese": "没想到他竟然超水平发挥，最终赢得了这场比赛。",
        "pinyin": "Méi xiǎng dào tā jìng rán chāo shuǐ píng fā huī, zuì zhōng yíng dé le zhè chǎng bǐ sài.",
        "vietnamese": "Không ngờ cậu ấy lại phát huy vượt bậc phong độ, cuối cùng đã giành chiến thắng trong trận đấu này."
      },
      {
        "chinese": "这位演员的表演总能展现出多层次的人物心理。",
        "pinyin": "Zhè wèi yǎn yuán de biǎo yǎn zǒng néng zhǎn xiàn chū duō céng cì de rén wù xīn lǐ.",
        "vietnamese": "Diễn xuất của diễn viên này luôn có thể lột tả được tâm lý nhân vật đa tầng lớp."
      },
      {
        "chinese": "父母过分关注孩子的一举一动，会对孩子的成长起到反作用。",
        "pinyin": "Fù mǔ guò fēn guān zhù hái zi de yī jǔ yī dòng, huì duì hái zi de chéng zhǎng qǐ dào fǎn zuò yòng.",
        "vietnamese": "Cha mẹ quá mức để ý từng cử chỉ hành động của con cái sẽ gây tác dụng ngược đối với sự trưởng thành của trẻ."
      },
      {
        "chinese": "公司所有电脑系统都经过了严格的安全检查，确保无病毒运行。",
        "pinyin": "Gōng sī suǒ yǒu diàn nǎo xì tǒng dōu jīng guò le yán gé de ān quán jiǎn chá, què bǎo wú bìng dú yùn xíng.",
        "vietnamese": "Toàn bộ hệ thống máy tính của công ty đều đã qua kiểm tra an ninh nghiêm ngặt, đảm bảo vận hành không có virus."
      },
      {
        "chinese": "新开发的商业区已经成为了城市亚中心，发展潜力巨大。",
        "pinyin": "Xīn kāi fā de shāng yè qū yǐ jīng chéng wèi le chéng shì yà zhōng xīn, fā zhǎn qián lì jù dà.",
        "vietnamese": "Khu thương mại mới phát triển đã trở thành trung tâm phụ của thành phố, tiềm năng phát triển vô cùng to lớn."
      },
      {
        "chinese": "小张和女朋友小李已经订婚了，小李现在是张家的准媳妇。",
        "pinyin": "Xiǎo zhāng hé nǚ péng yǒu xiǎo lǐ yǐ jīng dìng hūn le, xiǎo lǐ xiàn zài shì zhāng jiā de zhǔn xí fù.",
        "vietnamese": "Tiểu Trương và bạn gái Tiểu Lý đã đính hôn rồi, Tiểu Lý giờ đây là nàng dâu tương lai của nhà họ Trương."
      }
    ]
  },
  {
    "id": "hsk6-g-02",
    "order": 2,
    "category": "cau-tu",
    "categoryName": "Tiền tố & Hậu tố cấu từ (语素)",
    "categoryIcon": "🔬",
    "titleVi": "Các hậu tố cấu từ cao cấp: —化, —式, —型, —性",
    "titleZh": "—化、—式、—型、—性",
    "grammarType": "语素",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Từ căn + —化 / —式 / —型 / —性",
    "explanationVi": "Bốn hậu tố biến đổi từ loại và tạo thuật ngữ khoa học: 1) '—化': ...hóa, quá trình biến đổi (数字化 - số hóa, 现代化 - hiện đại hóa); 2) '—式': kiểu, dạng, phong cách (专题式 - theo chuyên đề, 开放式 - dạng mở); 3) '—型': mẫu mã, mô hình, chủng loại (观赏型 - hệ cảnh quan, 经济型 - loại tiết kiệm); 4) '—性': tính, thuộc tính trừu tượng (便捷性 - tính tiện lợi, 可能性 - tính khả thi, 创造性 - tính sáng tạo).",
    "tips": "Từ gắn hậu tố '—化' thường trở thành động từ hoặc danh từ chỉ quá trình; '—性' cấu tạo nên danh từ trừu tượng.",
    "examples": [
      {
        "chinese": "随着科技的发展，人们迎来了数字化时代。",
        "pinyin": "Suí zhe kē jì de fā zhǎn, rén men yíng lái le shù zì huà shí dài.",
        "vietnamese": "Cùng với sự phát triển của công nghệ, con người đã đón chào thời đại số hóa."
      },
      {
        "chinese": "本课程采用专题式的教学方法，每课介绍一个专题。",
        "pinyin": "Běn kè chéng cǎi yòng zhuān tí shì de jiào xué fāng fǎ, měi kè jiè shào yī gè zhuān tí.",
        "vietnamese": "Khóa học này áp dụng phương pháp giảng dạy theo dạng chuyên đề, mỗi bài giới thiệu một chuyên đề."
      },
      {
        "chinese": "这种鱼是观赏型的，很多人把它们当做宠物。",
        "pinyin": "Zhè zhǒng yú shì guān shǎng xíng de, hěn duō rén bǎ tā men dāng zuò chǒng wù.",
        "vietnamese": "Loài cá này thuộc kiểu hình làm cảnh, rất nhiều người nuôi chúng như thú cưng."
      },
      {
        "chinese": "这款产品具备很好的便捷性，使用十分方便。",
        "pinyin": "Zhè kuǎn chǎn pǐn jù bèi hěn hǎo de biàn jié xìng, shǐ yòng shí fēn fāng biàn.",
        "vietnamese": "Dòng sản phẩm này sở hữu tính tiện lợi rất cao, sử dụng vô cùng dễ dàng."
      }
    ]
  },
  {
    "id": "hsk6-g-03",
    "order": 3,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Đại từ nhân xưng phiếm chỉ và ngôi thứ ba: 人家 (rénjia)",
    "titleZh": "人家",
    "grammarType": "词类",
    "categoryType": "人称代词",
    "grammarDetail": "人称代词",
    "structure": "人家 (Đại từ chỉ người khác / người ta / bản thân người nói)",
    "explanationVi": "'人家' có 3 sắc thái sử dụng: 1) Chỉ người khác nói chung đối lập với bản thân (这是人家的东西 - đồ của người khác); 2) Chỉ người cụ thể vừa được nhắc tới với sự tôn trọng (老张来帮忙，感谢人家); 3) Khẩu ngữ thân mật phụ nữ tự xưng bản thân mình ('Người ta/Em': 人家想去嘛).",
    "tips": "Cần căn cứ vào ngữ cảnh giao tiếp để xác định '人家' đang nói về người thứ ba hay đang hờn dỗi tự xưng.",
    "examples": [
      {
        "chinese": "这是人家的东西，咱们不能随便拿。",
        "pinyin": "Zhè shì rén jiā de dōng xī, zán men bù néng suí biàn ná.",
        "vietnamese": "Đây là đồ đạc của người ta, chúng mình không được tùy tiện lấy đâu."
      },
      {
        "chinese": "今天多亏了老张来帮忙，我们得好好感谢人家。",
        "pinyin": "Jīn tiān duō kuī le lǎo zhāng lái bāng máng, wǒ men dé hǎo hǎo gǎn xiè rén jiā.",
        "vietnamese": "Hôm nay may nhờ có bác Trương tới giúp, chúng ta phải cảm ơn người ta cho đàng hoàng."
      }
    ]
  },
  {
    "id": "hsk6-g-04",
    "order": 4,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Chùm lượng từ chuyên dụng cao cấp: 串, 滴, 枝, 扇, 卷",
    "titleZh": "专用名量词：串、滴、枝、扇、卷1、卷2",
    "grammarType": "词类",
    "categoryType": "名量词",
    "grammarDetail": "名量词",
    "structure": "Số từ + 串 / 滴 / 枝 / 扇 / 卷 + Danh từ",
    "explanationVi": "Lượng từ miêu tả hình tượng tinh tế: '串' (chuỗi, chùm: 项链, 葡萄); '滴' (giọt chất lỏng: 水, 醋, 汗); '枝' (cành, nhánh có thân dài: 玫瑰花, 笔); '扇' (cánh cửa, cửa sổ: 一扇窗, 一扇门); '卷' (juǎn: cuộn băng dính, cuộn len) hoặc '卷' (juàn: quyển/tập trong bộ sách đồ sộ: 上卷, 第一卷).",
    "tips": "Chú ý chữ '卷' có 2 âm đọc và ý nghĩa khác nhau: juǎn (cuộn vật liệu uốn cong) và juàn (tập sách danh tác).",
    "examples": [
      {
        "chinese": "这串项链是丈夫送给我的订婚礼物。",
        "pinyin": "Zhè chuàn xiàng liàn shì zhàng fū sòng gěi wǒ de dìng hūn lǐ wù.",
        "vietnamese": "Chuỗi dây chuyền này là món quà đính hôn chồng tặng cho tôi."
      },
      {
        "chinese": "你试试往碗里加几滴醋，说不定味道会更好。",
        "pinyin": "Nǐ shì shì wǎng wǎn lǐ jiā jǐ dī cù, shuō bù dìng wèi dào huì gèng hǎo.",
        "vietnamese": "Bạn thử nhỏ vài giọt giấm vào bát xem, biết đâu vị lại ngon hơn đấy."
      },
      {
        "chinese": "下班回家的路上，妈妈买了几枝玫瑰花。",
        "pinyin": "Xià bān huí jiā de lù shàng, mā mā mǎi le jǐ zhī méi guī huā.",
        "vietnamese": "Trên đường tan làm về nhà, mẹ đã mua vài cành hoa hồng."
      },
      {
        "chinese": "听了他的话，我心里就像打开了一扇窗，突然亮了。",
        "pinyin": "Tīng le tā de huà, wǒ xīn lǐ jiù xiàng dǎ kāi le yī shàn chuāng, tū rán liàng le.",
        "vietnamese": "Nghe lời anh ấy nói, trong lòng tôi như vừa mở ra một cánh cửa sổ, bỗng chốc bừng sáng."
      },
      {
        "chinese": "你把桌子上那卷胶带递给我一下。",
        "pinyin": "Nǐ bǎ zhuō zi shàng nà juǎn jiāo dài dì gěi wǒ yī xià.",
        "vietnamese": "Cậu đưa giúp tôi cuộn băng dính trên bàn với."
      },
      {
        "chinese": "这套书分为上、中、下三卷。",
        "pinyin": "Zhè tào shū fēn wèi shàng, zhōng, xià sān juǎn.",
        "vietnamese": "Bộ sách này được chia thành ba tập: thượng, trung và hạ."
      }
    ]
  },
  {
    "id": "hsk6-g-05",
    "order": 5,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Động lượng từ biểu thị quá trình nỗ lực: 番 (fān)",
    "titleZh": "番",
    "grammarType": "词类",
    "categoryType": "动量词",
    "grammarDetail": "动量词",
    "structure": "Động từ / 经过 + 一番 + Danh từ trừu tượng / Hành động",
    "explanationVi": "'番' biểu thị một lượt quá trình hành động tiêu tốn nhiều thời gian, công sức, tranh luận hoặc suy ngẫm sâu sắc (经过一番争论 - qua một hồi tranh luận gay gắt; 下了一番功夫 - bỏ ra một phen công sức).",
    "tips": "Thường đi trong cụm '一番' kết hợp với các danh từ chỉ sự nỗ lực, đắn đo hoặc đấu tranh tư tưởng.",
    "examples": [
      {
        "chinese": "经过一番激烈的争论，我们最终达成了一致。",
        "pinyin": "Jīng guò yī fān jī liè de zhēng lùn, wǒ men zuì zhōng dá chéng le yī zhì.",
        "vietnamese": "Trải qua một hồi tranh luận gay gắt, chúng tôi cuối cùng cũng đã đạt được sự thống nhất."
      }
    ]
  },
  {
    "id": "hsk6-g-06",
    "order": 6,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ mức độ HSK 6: 特, 异常, 较为",
    "titleZh": "特、异常、较为",
    "grammarType": "词类",
    "categoryType": "程度副词",
    "grammarDetail": "程度副词",
    "structure": "特 / 异常 / 较为 + Tính từ / Động từ tâm lý",
    "explanationVi": "'特' là khẩu ngữ rút gọn của 特别 mang nghĩa 'cực kỳ, rất' (特羡慕, 特有意思); '异常' biểu thị mức độ cao bất thường vượt xa quy luật thông thường (异常便捷, 异常炎热); '较为' là biến thể văn viết trang nhã của 比较 (khá là, tương đối: 较为客观, 较为合理).",
    "tips": "Trong đề thi HSK 6, '较为' và '异常' xuất hiện rất nhiều trong bài báo khoa học và phóng sự văn xuôi.",
    "examples": [
      {
        "chinese": "听说我获得了奖学金，同学们都特羡慕。",
        "pinyin": "Tīng shuō wǒ huò dé le jiǎng xué jīn, tóng xué men dōu tè xiàn mù.",
        "vietnamese": "Nghe tin tôi nhận được học bổng, các bạn học đều cực kỳ ngưỡng mộ."
      },
      {
        "chinese": "相声是一种幽默的艺术，特有意思。",
        "pinyin": "Xiāng shēng shì yī zhǒng yōu mò de yì shù, tè yǒu yì sī.",
        "vietnamese": "Tấu nói là một môn nghệ thuật hài hước, đặc biệt thú vị."
      },
      {
        "chinese": "改进后的仪器操作异常便捷。",
        "pinyin": "Gǎi jìn hòu de yí qì cāo zuò yì cháng biàn jié.",
        "vietnamese": "Thiết bị sau khi cải tiến thao tác hết sức tiện lợi."
      },
      {
        "chinese": "今年夏天异常炎热。",
        "pinyin": "Jīn nián xià tiān yì cháng yán rè.",
        "vietnamese": "Mùa hè năm nay nóng nực khác thường."
      },
      {
        "chinese": "这本小说较为客观地反映了当时的社会现实。",
        "pinyin": "Zhè běn xiǎo shuō jiào wèi kè guān dì fǎn yìng le dāng shí de shè huì xiàn shí.",
        "vietnamese": "Cuốn tiểu thuyết này đã phản ánh khá khách quan hiện thực xã hội thời bấy giờ."
      },
      {
        "chinese": "专家们一致认为这项研究的设计较为合理。",
        "pinyin": "Zhuān jiā men yī zhì rèn wèi zhè xiàng yán jiū de shè jì jiào wèi hé lǐ.",
        "vietnamese": "Các chuyên gia nhất trí cho rằng thiết kế của công trình nghiên cứu này tương đối hợp lý."
      }
    ]
  },
  {
    "id": "hsk6-g-07",
    "order": 7,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ phạm vi bao quát: 净, 一同, 大都",
    "titleZh": "净、一同、大都",
    "grammarType": "词类",
    "categoryType": "范围副词",
    "grammarDetail": "范围副词",
    "structure": "净 / 一同 / 大都 + Vị ngữ",
    "explanationVi": "'净' (jìng) mang nghĩa khẩu ngữ 'toàn là, chỉ mải mê làm một việc duy nhất' (净忙着说话, 净是外文书); '一同' mang sắc thái văn viết thay cho 一起 (cùng nhau); '大都' biểu thị phần lớn, tuyệt đại đa số (đại bộ phận: 大都是居民, 大都选择).",
    "tips": "'净' khi đứng trước động từ chỉ sự miệt mài quá đà bỏ quên việc khác; đứng trước danh từ chỉ toàn bộ không gian chứa đầy đồ vật đó.",
    "examples": [
      {
        "chinese": "我们净忙着说话，甚至忘了给客人倒茶。",
        "pinyin": "Wǒ men jìng máng zhe shuō huà, shèn zhì wàng le gěi kè rén dào chá.",
        "vietnamese": "Chúng tôi mải miết mải nói chuyện suốt, đến nỗi quên cả rót trà cho khách."
      },
      {
        "chinese": "那位老师的书房里净是外文书。",
        "pinyin": "Nà wèi lǎo shī de shū fáng lǐ jìng shì wài wén shū.",
        "vietnamese": "Trong phòng sách của thầy giáo kia toàn là sách tiếng nước ngoài."
      },
      {
        "chinese": "我明天在大厅等你，咱们一同出发。",
        "pinyin": "Wǒ míng tiān zài dà tīng děng nǐ, zán men yī tóng chū fā.",
        "vietnamese": "Ngày mai tôi đợi bạn ở sảnh, chúng mình cùng nhau xuất phát."
      },
      {
        "chinese": "人们聚集在广场上，一同迎接新年的到来。",
        "pinyin": "Rén men jù jí zài guǎng chǎng shàng, yī tóng yíng jiē xīn nián de dào lái.",
        "vietnamese": "Mọi người tụ tập trên quảng trường, cùng nhau đón chào năm mới đến."
      },
      {
        "chinese": "公园里散步的老年人大都是附近的居民。",
        "pinyin": "Gōng yuán lǐ sàn bù de lǎo nián rén dà dōu shì fù jìn de jū mín.",
        "vietnamese": "Các cụ già đi dạo trong công viên phần lớn đều là cư dân sống gần đó."
      },
      {
        "chinese": "假期时，这里的人们大都选择去海边度假。",
        "pinyin": "Jiǎ qī shí, zhè lǐ de rén men dà dōu xuǎn zé qù hǎi biān dù jiǎ.",
        "vietnamese": "Vào kỳ nghỉ, người dân nơi đây hầu hết đều chọn đi biển nghỉ dưỡng."
      }
    ]
  },
  {
    "id": "hsk6-g-08",
    "order": 8,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ thời gian HSK 6: 一时, 不时, 仍旧, 依旧, 一向",
    "titleZh": "一时、不时、仍旧、依旧、一向",
    "grammarType": "词类",
    "categoryType": "时间副词",
    "grammarDetail": "时间副词",
    "structure": "Phó từ thời gian + Động từ / Tính từ",
    "explanationVi": "Nhóm phó từ thời gian tinh tế: '一时' (trong chốc lát, nhất thời bối rối); '不时' (chốc chốc lại, thỉnh thoảng); '仍旧' (vẫn cứ, vẫn như cũ dù có trở ngại); '依旧' (trước sau y nguyên không hề thay đổi vẻ ngoài/bản chất); '一向' (từ xưa đến nay luôn giữ thói quen/tính cách bền vững).",
    "tips": "Phân biệt '依旧' (vẫn vẹn nguyên diện mạo/tình cảm như xưa) và '仍旧' (vẫn tiếp tục tiến hành dù gặp khó khăn).",
    "examples": [
      {
        "chinese": "他一时紧张，忘记要说什么了。",
        "pinyin": "Tā yī shí jǐn zhāng, wàng jì yào shuō shén me le.",
        "vietnamese": "Anh ấy nhất thời căng thẳng, quên khuấy mất định nói điều gì."
      },
      {
        "chinese": "面对眼前的比赛结果，人们一时难以接受。",
        "pinyin": "Miàn duì yǎn qián de bǐ sài jié guǒ, rén men yī shí nán yǐ jiē shòu.",
        "vietnamese": "Đối diện với kết quả trận đấu trước mắt, mọi người trong chốc lát khó lòng chấp nhận nổi."
      },
      {
        "chinese": "她不时看看手机，等待着朋友的消息。",
        "pinyin": "Tā bù shí kàn kàn shǒu jī, děng dài zhe péng yǒu de xiāo xī.",
        "vietnamese": "Cô ấy thỉnh thoảng lại nhìn vào điện thoại, thấp thỏm chờ tin nhắn của bạn bè."
      },
      {
        "chinese": "隔壁房间不时传来一阵笑声。",
        "pinyin": "Gé bì fáng jiān bù shí chuán lái yī zhèn xiào shēng.",
        "vietnamese": "Phòng bên cạnh chốc chốc lại truyền tới một tràng cười."
      },
      {
        "chinese": "实验失败了，但他们没有放弃，仍旧坚持干下去。",
        "pinyin": "Shí yàn shī bài le, dàn tā men méi yǒu fàng qì, réng jiù jiān chí gàn xià qù.",
        "vietnamese": "Thí nghiệm thất bại rồi, nhưng họ không hề bỏ cuộc mà vẫn tiếp tục kiên trì làm tiếp."
      },
      {
        "chinese": "他很努力地练习发音，但仍旧说得不太标准。",
        "pinyin": "Tā hěn nǔ lì dì liàn xí fā yīn, dàn réng jiù shuō dé bù tài biāo zhǔn.",
        "vietnamese": "Cậu ấy rất nỗ lực luyện phát âm, nhưng nói ra vẫn chưa được chuẩn cho lắm."
      },
      {
        "chinese": "他们带着孩子又跑了几家医院，但依旧没有得到明确的诊断。",
        "pinyin": "Tā men dài zhe hái zi yòu pǎo le jǐ jiā yī yuàn, dàn yī jiù méi yǒu dé dào míng què de zhěn duàn.",
        "vietnamese": "Họ dẫn con chạy thêm mấy bệnh viện nữa, nhưng vẫn như cũ chưa nhận được chẩn đoán rõ ràng."
      },
      {
        "chinese": "二十多年过去了，她依旧那么美丽动人。",
        "pinyin": "Èr shí duō nián guò qù le, tā yī jiù nà me měi lì dòng rén.",
        "vietnamese": "Hơn hai mươi năm trôi qua rồi, cô ấy vẫn cứ kiều diễm say đắm lòng người như xưa."
      },
      {
        "chinese": "作为老师，她一向严格要求自己的学生。",
        "pinyin": "Zuò wèi lǎo shī, tā yī xiàng yán gé yào qiú zì jǐ de xué shēng.",
        "vietnamese": "Với tư cách là giáo viên, cô ấy từ trước đến nay luôn yêu cầu nghiêm khắc đối với học trò của mình."
      },
      {
        "chinese": "他一向喜欢跟朋友开玩笑。",
        "pinyin": "Tā yī xiàng xǐ huān gēn péng yǒu kāi wán xiào.",
        "vietnamese": "Anh ấy trước giờ luôn thích trêu đùa với bạn bè."
      }
    ]
  },
  {
    "id": "hsk6-g-09",
    "order": 9,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ tần suất nhấn mạnh: 一再 (năm lần bảy lượt), 再三 (đắn đo suy tính mãi)",
    "titleZh": "一再、再三",
    "grammarType": "词类",
    "categoryType": "频率副词",
    "grammarDetail": "频率副词",
    "structure": "一再 / 再三 + Động từ",
    "explanationVi": "'一再' biểu thị hành vi hoặc lời nhắc nhở diễn ra nhiều lần không ngừng (一再强调 - liên tục nhấn mạnh, 一再提醒); '再三' nhấn mạnh sự cân nhắc, đắn đo kỹ lưỡng nhiều lượt trước khi quyết định (再三考虑, 再三解释).",
    "tips": "'再三' chỉ đi với các động từ suy nghĩ hoặc diễn giải giải thích (考虑, 斟酌, 解释), không đi với các động từ biến đổi tự nhiên.",
    "examples": [
      {
        "chinese": "出发前老师一再提醒大家带上护照，可我还是忘了。",
        "pinyin": "Chū fā qián lǎo shī yī zài tí xǐng dà jiā dài shàng hù zhào, kě wǒ hái shì wàng le.",
        "vietnamese": "Trước khi xuất phát thầy giáo năm lần bảy lượt dặn mọi người mang theo hộ chiếu, vậy mà tôi vẫn quên mất."
      },
      {
        "chinese": "王经理一再强调这个项目对于公司至关重要。",
        "pinyin": "Wáng jīng lǐ yī zài qiáng diào zhè gè xiàng mù duì yú gōng sī zhì guān zhòng yào.",
        "vietnamese": "Giám đốc Vương liên tục nhấn mạnh dự án này có ý nghĩa sống còn đối với công ty."
      },
      {
        "chinese": "他再三考虑要不要放弃工作的机会。",
        "pinyin": "Tā zài sān kǎo lǜ yào bù yào fàng qì gōng zuò de jī huì.",
        "vietnamese": "Anh ấy suy tính đắn đo mãi xem có nên từ bỏ cơ hội việc làm hay không."
      },
      {
        "chinese": "小张再三向领导解释他上班迟到的原因。",
        "pinyin": "Xiǎo zhāng zài sān xiàng lǐng dǎo jiě shì tā shàng bān chí dào de yuán yīn.",
        "vietnamese": "Tiểu Trương hết lần này đến lần khác giải thích với lãnh đạo nguyên do mình đi làm trễ."
      }
    ]
  },
  {
    "id": "hsk6-g-10",
    "order": 10,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ phương thức tinh tế: 不禁, 赶忙, 特地, 特意, 偷偷",
    "titleZh": "不禁、赶忙、特地、特意、偷偷",
    "grammarType": "词类",
    "categoryType": "方式副词",
    "grammarDetail": "方式副词",
    "structure": "Phó từ phương thức + Động từ",
    "explanationVi": "'不禁' (bất giác, không kìm nén được cảm xúc nảy sinh tự nhiên); '赶忙' (lật đật, vội vã hành động ngay); '特地' và '特意' (đặc biệt dành riêng tâm huyết/công sức để làm việc gì cho ai đó); '偷偷' (lén lút, vụng trộm làm mà không để người khác hay biết).",
    "tips": "'不禁' luôn đi với các phản ứng cảm xúc hoặc động tác cơ thể vô thức (不禁鼓掌, 不禁流泪, 不禁凉了).",
    "examples": [
      {
        "chinese": "听到这可怕的消息，我的心不禁凉了。",
        "pinyin": "Tīng dào zhè kě pà de xiāo xī, wǒ de xīn bù jìn liáng le.",
        "vietnamese": "Nghe thấy hung tin đáng sợ này, lòng tôi bất giác nguội ngắt."
      },
      {
        "chinese": "听完她的演讲，大家不禁鼓起掌来。",
        "pinyin": "Tīng wán tā de yǎn jiǎng, dà jiā bù jìn gǔ qǐ zhǎng lái.",
        "vietnamese": "Nghe xong bài diễn thuyết của cô ấy, mọi người không kìm được đồng loạt vỗ tay."
      },
      {
        "chinese": "上课铃一响，学生们就赶忙跑回了教室。",
        "pinyin": "Shàng kè líng yī xiǎng, xué shēng men jiù gǎn máng pǎo huí le jiào shì.",
        "vietnamese": "Chuông vào lớp vừa reo, học sinh liền lật đật chạy ùa về phòng học."
      },
      {
        "chinese": "听到有人求助，他赶忙过去帮忙。",
        "pinyin": "Tīng dào yǒu rén qiú zhù, tā gǎn máng guò qù bāng máng.",
        "vietnamese": "Nghe thấy có người cầu cứu, anh ấy vội vàng chạy qua giúp đỡ ngay."
      },
      {
        "chinese": "回国当天，朋友特地开车把我送到了机场。",
        "pinyin": "Huí guó dāng tiān, péng yǒu tè dì kāi chē bǎ wǒ sòng dào le jī chǎng.",
        "vietnamese": "Hôm tôi về nước, bạn bè đã cất công lái xe đưa tôi ra tận sân bay."
      },
      {
        "chinese": "为了掌握实际情况，政府特地组织专家团队到当地开展调查。",
        "pinyin": "Wèi le zhǎng wò shí jì qíng kuàng, zhèng fǔ tè dì zǔ zhī zhuān jiā tuán duì dào dāng dì kāi zhǎn diào chá.",
        "vietnamese": "Để nắm bắt tình hình thực tế, chính quyền đã đặc biệt thành lập đoàn chuyên gia đến địa phương điều tra."
      },
      {
        "chinese": "这些书是我特意请朋友从国外买回来的。",
        "pinyin": "Zhè xiē shū shì wǒ tè yì qǐng péng yǒu cóng guó wài mǎi huí lái de.",
        "vietnamese": "Những cuốn sách này là do tôi cố ý nhờ bạn mua từ nước ngoài mang về đấy."
      },
      {
        "chinese": "我特意为您准备了一份礼物，请您一定收下。",
        "pinyin": "Wǒ tè yì wèi nín zhǔn bèi le yī fèn lǐ wù, qǐng nín yī dìng shōu xià.",
        "vietnamese": "Tôi đã đặc biệt chuẩn bị một món quà dành riêng cho ngài, xin ngài nhất định nhận cho."
      },
      {
        "chinese": "小女孩偷偷把糖装进了口袋。",
        "pinyin": "Xiǎo nǚ hái tōu tōu bǎ táng zhuāng jìn le kǒu dài.",
        "vietnamese": "Bé gái lén lút nhét chiếc kẹo vào túi áo."
      },
      {
        "chinese": "他偷偷把那件事告诉了老师。",
        "pinyin": "Tā tōu tōu bǎ nà jiàn shì gào sù le lǎo shī.",
        "vietnamese": "Cậu ấy lén mách chuyện đó cho thầy giáo biết."
      }
    ]
  },
  {
    "id": "hsk6-g-11",
    "order": 11,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ phủ định dự đoán: 未必 (Chưa hẳn, chưa chắc đã)",
    "titleZh": "未必",
    "grammarType": "词类",
    "categoryType": "否定副词",
    "grammarDetail": "否定副词",
    "structure": "未必 + Động từ / Tính từ",
    "explanationVi": "'未必' (wèibì) là phó từ phủ định mang nghĩa 'không nhất thiết, chưa chắc đã' (bằng 不一定). Thường dùng để phản bác ý kiến phiến diện hoặc biểu thị sự khiêm tốn, hoài nghi khoa học.",
    "tips": "Câu khẩu ngữ cửa miệng: '那也未必' (Điều đó cũng chưa hẳn thế đâu!).",
    "examples": [
      {
        "chinese": "她最近工作很忙，未必有时间回老家。",
        "pinyin": "Tā zuì jìn gōng zuò hěn máng, wèi bì yǒu shí jiān huí lǎo jiā.",
        "vietnamese": "Dạo này cô ấy công việc bận rộn, chưa chắc đã có thời gian về quê."
      },
      {
        "chinese": "有钱就一定会幸福吗？那也未必。",
        "pinyin": "Yǒu qián jiù yī dìng huì xìng fú ma? nà yě wèi bì.",
        "vietnamese": "Có tiền thì nhất định sẽ hạnh phúc sao? Điều đó cũng chưa hẳn đâu."
      }
    ]
  },
  {
    "id": "hsk6-g-12",
    "order": 12,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Phó từ ngữ khí HSK 6: 恰好, 倒是, 干脆, 明明, 总算",
    "titleZh": "恰好、倒是、干脆、明明、总算",
    "grammarType": "词类",
    "categoryType": "语气副词",
    "grammarDetail": "语气副词",
    "structure": "Phó từ ngữ khí + Vị ngữ",
    "explanationVi": "'恰好' (vừa khéo, trùng hợp ngẫu nhiên đúng lúc); '倒是' (ngược lại thì... / kể ra thì... - biểu thị chuyển ngoặt nhượng bộ hoặc ngạc nhiên); '干脆' (dứt khoát, thẳng thắn làm ngay cho xong); '明明' (rõ rành rành, sự thật hiển nhiên mà còn ngụy biện); '总算' (cuối cùng rốt cuộc cũng... sau bao đợi chờ vất vả).",
    "tips": "'明明' luôn mang ngữ khí bất bình, chất vấn hoặc phản bác sự dối trá.",
    "examples": [
      {
        "chinese": "婚礼那天恰好是新娘的生日。",
        "pinyin": "Hūn lǐ nà tiān qià hǎo shì xīn niáng de shēng rì.",
        "vietnamese": "Ngày cưới hôm đó vừa đúng vào ngày sinh nhật của cô dâu."
      },
      {
        "chinese": "下周六我恰好有时间，咱们可以一起去爬山。",
        "pinyin": "Xià zhōu liù wǒ qià hǎo yǒu shí jiān, zán men kě yǐ yī qǐ qù pá shān.",
        "vietnamese": "Thứ Bảy tuần tới tôi vừa khéo có thời gian rảnh, chúng mình có thể cùng nhau đi leo núi."
      },
      {
        "chinese": "你计划得倒是很好，可是你能做到吗？",
        "pinyin": "Nǐ jì huà dé dào shì hěn hǎo, kě shì nǐ néng zuò dào ma?",
        "vietnamese": "Kế hoạch của cậu nghe chừng thì hay đấy, nhưng cậu có thực hiện nổi không?"
      },
      {
        "chinese": "这部漫画的内容一般，绘画风格倒是生动有趣。",
        "pinyin": "Zhè bù màn huà de nèi róng yī bān, huì huà fēng gé dào shì shēng dòng yǒu qù.",
        "vietnamese": "Nội dung cuốn truyện tranh này bình thường thôi, nhưng phong cách vẽ thì quả thật sinh động thú vị."
      },
      {
        "chinese": "既然双方不愿意合作，干脆就不要浪费时间再谈了。",
        "pinyin": "Jì rán shuāng fāng bù yuàn yì hé zuò, gàn cuì jiù bù yào làng fèi shí jiān zài tán le.",
        "vietnamese": "Một khi hai bên đã không muốn hợp tác thì dứt khoát khỏi cần tốn thời gian đàm phán thêm nữa."
      },
      {
        "chinese": "你今天这么累，干脆早点休息，明天再工作吧！",
        "pinyin": "Nǐ jīn tiān zhè me lèi, gàn cuì zǎo diǎn xiū xī, míng tiān zài gōng zuò ba!",
        "vietnamese": "Hôm nay bạn mệt mỏi như thế, dứt khoát chi bằng nghỉ ngơi sớm đi, mai hãy làm tiếp!"
      },
      {
        "chinese": "你明明不胖，为什么总嫌自己胖呢？",
        "pinyin": "Nǐ míng míng bù pàng, wèi shén me zǒng xián zì jǐ pàng ne?",
        "vietnamese": "Cậu rõ ràng không hề béo, sao cứ luôn miệng chê mình mập thế?"
      },
      {
        "chinese": "明明是他做错了事，凭什么让我向他道歉？",
        "pinyin": "Míng míng shì tā zuò cuò le shì, píng shén me ràng wǒ xiàng tā dào qiàn?",
        "vietnamese": "Rõ ràng là anh ta làm sai chuyện, dựa vào đâu mà bắt tôi phải xin lỗi anh ta chứ?"
      },
      {
        "chinese": "我们在路边等了很久，总算有位好心的司机让我们搭车回到了学校。",
        "pinyin": "Wǒ men zài lù biān děng le hěn jiǔ, zǒng suàn yǒu wèi hǎo xīn de sī jī ràng wǒ men dā chē huí dào le xué xiào.",
        "vietnamese": "Chúng tôi chờ bên vệ đường rất lâu, rốt cuộc cũng có một bác tài tốt bụng cho quá giang về trường."
      },
      {
        "chinese": "连着下了一周小雨，今天总算迎来了一个晴天。",
        "pinyin": "Lián zhe xià le yī zhōu xiǎo yǔ, jīn tiān zǒng suàn yíng lái le yī gè qíng tiān.",
        "vietnamese": "Mưa phùn rả rích suốt cả tuần liền, hôm nay cuối cùng cũng đón được một ngày nắng ráo."
      }
    ]
  },
  {
    "id": "hsk6-g-13",
    "order": 13,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ văn ngôn: 于 (Vào lúc, ở tại)",
    "titleZh": "于",
    "grammarType": "词类",
    "categoryType": "引出时间、处所",
    "grammarDetail": "引出时间、处所",
    "structure": "Động từ + 于 + Thời gian / Địa điểm  HOẶC  于 + Thời gian + Động từ",
    "explanationVi": "'于' (yú) là giới từ gốc Hán cổ cực kỳ quan trọng trong văn bản chính luận HSK 6, tương đương với '在' chỉ thời gian hoặc nơi chốn phát sinh (成立于1950年 - thành lập vào năm 1950, 于上月离京 - rời kinh đô vào tháng trước).",
    "tips": "Có thể đứng trước động từ hoặc đứng sau động từ làm bổ ngữ kết quả (毕业于, 发生于, 位于).",
    "examples": [
      {
        "chinese": "这所学校成立于1950年。",
        "pinyin": "Zhè suǒ xué xiào chéng lì yú 1 9 5 0 nián.",
        "vietnamese": "Ngôi trường này được thành lập vào năm 1950."
      },
      {
        "chinese": "他已于上月离京。",
        "pinyin": "Tā yǐ yú shàng yuè lí jīng.",
        "vietnamese": "Anh ấy đã rời Bắc Kinh vào tháng trước."
      }
    ]
  },
  {
    "id": "hsk6-g-14",
    "order": 14,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ chuyển đổi chủ đề: 至于 (Còn về, còn như...)",
    "titleZh": "至于",
    "grammarType": "词类",
    "categoryType": "引出对象",
    "grammarDetail": "引出对象",
    "structure": "Phân câu 1，至于 + Đối tượng mới / Chủ đề phụ，...",
    "explanationVi": "'至于' đứng đầu phân câu sau để chuyển mạch câu chuyện sang một đối tượng hoặc chủ đề khác có liên quan nhưng cần tách riêng để làm rõ thêm.",
    "tips": "Tránh nhầm với cấu trúc phủ định '不至于' (không đến mức...).",
    "examples": [
      {
        "chinese": "刚来中国时，我既听不懂也说不清楚，至于写作和阅读，就更不行了。",
        "pinyin": "Gāng lái zhōng guó shí, wǒ jì tīng bù dǒng yě shuō bù qīng chǔ, zhì yú xiě zuò hé yuè dú, jiù gèng bù xíng le.",
        "vietnamese": "Hồi mới sang Trung Quốc, tôi vừa nghe không hiểu vừa nói chẳng rõ, còn như viết lách và đọc hiểu thì lại càng tệ hơn."
      },
      {
        "chinese": "新产品已经开始生产了，至于销售时间和价格，现在还不能确定。",
        "pinyin": "Xīn chǎn pǐn yǐ jīng kāi shǐ shēng chǎn le, zhì yú xiāo shòu shí jiān hé jià gé, xiàn zài hái bù néng què dìng.",
        "vietnamese": "Sản phẩm mới đã bắt đầu đưa vào sản xuất, còn về thời điểm mở bán và giá cả thì hiện vẫn chưa thể ấn định."
      }
    ]
  },
  {
    "id": "hsk6-g-15",
    "order": 15,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ nguyên nhân văn viết: 因 (Do, vì...)",
    "titleZh": "因",
    "grammarType": "词类",
    "categoryType": "引出目的、原因",
    "grammarDetail": "引出目的、原因",
    "structure": "因 + Nguyên nhân + 而 + Kết quả",
    "explanationVi": "'因' là thể rút gọn văn ngôn của 因为, thường dùng trong thông báo ngắn gọn, công văn hoặc văn phong tin tức (因天气原因 - do lý do thời tiết; 因迟到而错过 - vì trễ mà bỏ lỡ).",
    "tips": "Thường đi kèm kết cấu '因...而...' để nối nguyên nhân và kết quả cô đọng.",
    "examples": [
      {
        "chinese": "因天气原因，运动会延期至周六举行。",
        "pinyin": "Yīn tiān qì yuán yīn, yùn dòng huì yán qī zhì zhōu liù jǔ xíng.",
        "vietnamese": "Do nguyên nhân thời tiết, đại hội thể thao hoãn lại đến thứ Bảy tổ chức."
      },
      {
        "chinese": "他因迟到而错过了这次面试。",
        "pinyin": "Tā yīn chí dào ér cuò guò le zhè cì miàn shì.",
        "vietnamese": "Anh ấy vì đến muộn mà đã bỏ lỡ buổi phỏng vấn lần này."
      }
    ]
  },
  {
    "id": "hsk6-g-16",
    "order": 16,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Giới từ ngoại trừ: 除……（以外/外） (Ngoài... ra)",
    "titleZh": "除",
    "grammarType": "词类",
    "categoryType": "表示排除",
    "grammarDetail": "表示排除",
    "structure": "除 + Thành phần ngoại trừ + （以外 / 外），...",
    "explanationVi": "'除' là thể rút gọn của 除了, đứng trước danh từ để biểu thị sự loại trừ hoặc ngoại lệ trong quy tắc quản lý (除特殊情况外 - trừ trường hợp đặc biệt ra; 除申请表以外 - ngoài đơn đăng ký ra).",
    "tips": "Rất phổ biến trong các bảng nội quy, thông cáo hành chính và hợp đồng kinh tế.",
    "examples": [
      {
        "chinese": "除特殊情况外，不得随意离开工作岗位。",
        "pinyin": "Chú tè shū qíng kuàng wài, bù dé suí yì lí kāi gōng zuò gǎng wèi.",
        "vietnamese": "Trừ trường hợp đặc biệt ra, không được tùy tiện rời bỏ vị trí công tác."
      },
      {
        "chinese": "除申请表以外，申请人还应提交一份个人简历。",
        "pinyin": "Chú shēn qǐng biǎo yǐ wài, shēn qǐng rén hái yīng tí jiāo yī fèn gè rén jiǎn lì.",
        "vietnamese": "Ngoài đơn đăng ký ra, người nộp đơn còn cần phải nộp kèm một bản sơ yếu lý lịch cá nhân."
      }
    ]
  },
  {
    "id": "hsk6-g-17",
    "order": 17,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Liên từ chuyển ngoặt bất ngờ: 不料 (Chẳng ngờ, nào ngờ)",
    "titleZh": "不料",
    "grammarType": "词类",
    "categoryType": "连接分句或句子",
    "grammarDetail": "连接分句或句子",
    "structure": "Ý định ban đầu，不料 + Biến cố đột ngột xảy ra",
    "explanationVi": "'不料' (búliào) biểu thị một sự việc đột ngột phát sinh hoàn toàn nằm ngoài dự liệu ban đầu, khiến kế hoạch bị đảo lộn (tương đương 没想到, 谁知).",
    "tips": "Chỉ dùng cho các biến cố bất ngờ xảy ra trong quá khứ, không dùng cho sự việc chắc chắn.",
    "examples": [
      {
        "chinese": "我本来打算在房间看书，不料突然停电了，我只好去图书馆。",
        "pinyin": "Wǒ běn lái dǎ suàn zài fáng jiān kàn shū, bù liào tū rán tíng diàn le, wǒ zhǐ hǎo qù tú shū guǎn.",
        "vietnamese": "Tôi vốn định ở trong phòng đọc sách, chẳng ngờ bỗng dưng cúp điện, tôi đành phải sang thư viện."
      },
      {
        "chinese": "我以为两个孩子能一起好好玩儿，不料他俩刚一见面就吵起来了。",
        "pinyin": "Wǒ yǐ wèi liǎng gè hái zi néng yī qǐ hǎo hǎo wánr, bù liào tā liǎ gāng yī jiàn miàn jiù chǎo qǐ lái le.",
        "vietnamese": "Tôi cứ ngỡ hai đứa trẻ có thể chơi ngoan cùng nhau, nào ngờ chúng vừa chạm mặt là đã cãi nhau ỏm tỏi."
      }
    ]
  },
  {
    "id": "hsk6-g-18",
    "order": 18,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Trợ từ kết cấu cao cấp: 所 (Được, mà)",
    "titleZh": "所",
    "grammarType": "词类",
    "categoryType": "结构助词",
    "grammarDetail": "结构助词",
    "structure": "所 + Động từ + 的 + Danh từ",
    "explanationVi": "'所' (suǒ) đứng trước động từ cập vật để nhấn mạnh đối tượng tiếp nhận hành động, biến cụm động từ thành định ngữ bổ nghĩa cho danh từ sau '的' (所熟悉的故事 - câu chuyện mà mọi người quen thuộc; 所了解的情况 - tình hình mà bạn nắm bắt).",
    "tips": "Động từ sau '所' bắt buộc phải là động từ cập vật (có tân ngữ).",
    "examples": [
      {
        "chinese": "这部电影是根据人们所熟悉的故事改编的。",
        "pinyin": "Zhè bù diàn yǐng shì gēn jù rén men suǒ shú xī de gù shì gǎi biān de.",
        "vietnamese": "Bộ phim này được cải biên dựa trên câu chuyện mà mọi người đều vốn rất quen thuộc."
      },
      {
        "chinese": "你所了解的情况只是一小部分。",
        "pinyin": "Nǐ suǒ le jiě de qíng kuàng zhǐ shì yī xiǎo bù fēn.",
        "vietnamese": "Những tình hình mà bạn nắm bắt được chỉ là một phần nhỏ mà thôi."
      }
    ]
  },
  {
    "id": "hsk6-g-19",
    "order": 19,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Trợ từ ngữ khí: 啦 (nhe, nhé), 嘛 (chứ, mà)",
    "titleZh": "啦、嘛",
    "grammarType": "词类",
    "categoryType": "语气助词",
    "grammarDetail": "语气助词",
    "structure": "Cuối câu + 啦 / 嘛",
    "explanationVi": "'啦' (la) là sự hợp âm của '了' và '啊', biểu thị sự vui mừng, hoàn thành dứt khoát hoặc nhắc nhở thân thiện; '嘛' (ma) dùng khi nêu lên chân lý hiển nhiên ai cũng phải hiểu, hoặc dùng để khuyên nhủ, làm dịu không khí căng thẳng (开玩笑嘛).",
    "tips": "'嘛' thanh nhẹ đọc nhẹ nhàng, biểu lộ thái độ phân trần lý lẽ một cách tự nhiên.",
    "examples": [
      {
        "chinese": "我昨天就已经把作业交给老师啦！",
        "pinyin": "Wǒ zuó tiān jiù yǐ jīng bǎ zuò yè jiāo gěi lǎo shī la!",
        "vietnamese": "Hôm qua tớ đã nộp bài tập cho thầy giáo rồi mà nhe!"
      },
      {
        "chinese": "这些文件对于公司至关重要，你可千万别弄丢啦！",
        "pinyin": "Zhè xiē wén jiàn duì yú gōng sī zhì guān zhòng yào, nǐ kě qiān wàn bié nòng diū la!",
        "vietnamese": "Các tài liệu này cực kỳ quan trọng đối với công ty, cậu tuyệt đối đừng làm mất đấy nhé!"
      },
      {
        "chinese": "我只是开个玩笑，你不要太认真嘛。",
        "pinyin": "Wǒ zhǐ shì kāi gè wán xiào, nǐ bù yào tài rèn zhēn ma.",
        "vietnamese": "Tôi chỉ đùa tí thôi, bạn đừng quá nghiêm trọng hóa vấn đề thế chứ."
      },
      {
        "chinese": "要是觉得累了，就走慢一点儿嘛。",
        "pinyin": "Yào shì jué dé lèi le, jiù zǒu màn yìdiǎnr ma.",
        "vietnamese": "Nếu thấy mệt thì cứ đi chậm lại một chút đi nào."
      }
    ]
  },
  {
    "id": "hsk6-g-20",
    "order": 20,
    "category": "tu-loai",
    "categoryName": "Từ loại (Phó từ, Giới từ, Trợ từ...)",
    "categoryIcon": "🔤",
    "titleVi": "Trợ từ liệt kê chấp nhận: 也好 (Cũng được / Dù là... hay...)",
    "titleZh": "也好",
    "grammarType": "词类",
    "categoryType": "其他助词",
    "grammarDetail": "其他助词",
    "structure": "Sự việc + 也好 / A 也好，B 也好，...",
    "explanationVi": "Có hai nghĩa: 1) Đứng sau một sự việc biểu thị thái độ bằng lòng, chấp nhận tình huống đó là điều tốt (不回来也好 - không về cũng tốt); 2) Đi cặp 'A也好，B也好' biểu thị bao quát toàn bộ, bất kể là A hay B thì kết luận vẫn đúng.",
    "tips": "Thường dùng để thể hiện tâm thái cởi mở, không thành kiến trước các phương án.",
    "examples": [
      {
        "chinese": "孩子们假期不回来也好，我可以好好休息休息了。",
        "pinyin": "Hái zi men jiǎ qī bù huí lái yě hǎo, wǒ kě yǐ hǎo hǎo xiū xī xiū xī le.",
        "vietnamese": "Con cái nghỉ lễ không về cũng tốt, tôi có thể tranh thủ nghỉ ngơi dưỡng sức một chút."
      },
      {
        "chinese": "手机也好，电脑也好，长时间使用都会造成眼睛疲劳。",
        "pinyin": "Shǒu jī yě hǎo, diàn nǎo yě hǎo, zhǎng shí jiān shǐ yòng dōu huì zào chéng yǎn jīng pí láo.",
        "vietnamese": "Bất kể là điện thoại hay máy tính, sử dụng trong thời gian dài đều sẽ gây mỏi mắt."
      }
    ]
  },
  {
    "id": "hsk6-g-21",
    "order": 21,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ phiếm chỉ linh tinh: A这A那 (Làm việc nọ việc kia không dứt)",
    "titleZh": "A这A那",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "A 这 A 那 (A là động từ)",
    "explanationVi": "Biểu thị hành vi lặp lại liên tục nhắm vào nhiều đối tượng vụn vặt khác nhau: '问这问那' (hỏi này hỏi nọ), '想这想那' (nghĩ ngợi lung tung, lo bò trắng răng), '挑这挑那' (kén cá chọn canh).",
    "tips": "Thường mang hàm ý nói về sự tò mò của trẻ nhỏ hoặc tâm lý do dự không quyết đoán.",
    "examples": [
      {
        "chinese": "小孩子总是喜欢拉着父母问这问那。",
        "pinyin": "Xiǎo hái zi zǒng shì xǐ huān lā zhe fù mǔ wèn zhè wèn nà.",
        "vietnamese": "Trẻ con lúc nào cũng thích túm lấy bố mẹ hỏi này hỏi nọ."
      },
      {
        "chinese": "既然决定了就大胆去做吧，不要总是想这想那。",
        "pinyin": "Jì rán jué dìng le jiù dà dǎn qù zuò ba, bù yào zǒng shì xiǎng zhè xiǎng nà.",
        "vietnamese": "Một khi đã quyết định thì hãy mạnh dạn làm đi, đừng có tối ngày nghĩ đông nghĩ tây mãi thế."
      }
    ]
  },
  {
    "id": "hsk6-g-22",
    "order": 22,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm 4 chữ cân nhắc kỹ lưỡng: 左A右B (Cân nhắc đắn đo tứ bề)",
    "titleZh": "左A右B",
    "grammarType": "短语",
    "categoryType": "四字格",
    "grammarDetail": "四字格",
    "structure": "左 A 右 B",
    "explanationVi": "Thành ngữ 4 chữ miêu tả việc suy xét hoặc lựa chọn từ nhiều góc độ phức tạp: '左思右想' (nghĩ tới nghĩ lui, đắn đo trằn trọc), '左挑右选' (chọn lên chọn xuống rất kỹ).",
    "tips": "Là các thành ngữ cố định kinh điển miêu tả tâm lý phân vân, đắn đo.",
    "examples": [
      {
        "chinese": "天还没亮，他就醒了，躺在床上左思右想，怎么也睡不着。",
        "pinyin": "Tiān hái méi liàng, tā jiù xǐng le, tǎng zài chuáng shàng zuǒ sī yòu xiǎng, zěn me yě shuì bù zhe.",
        "vietnamese": "Trời còn chưa sáng anh ấy đã thức giấc, nằm trên giường trằn trọc nghĩ tới nghĩ lui, làm sao cũng chẳng ngủ lại được."
      },
      {
        "chinese": "她在商场里左挑右选，始终没买到一件满意的衣服。",
        "pinyin": "Tā zài shāng chǎng lǐ zuǒ tiāo yòu xuǎn, shǐ zhōng méi mǎi dào yī jiàn mǎn yì de yī fú.",
        "vietnamese": "Cô ấy ở trong trung tâm thương mại lựa lên chọn xuống, rốt cuộc vẫn chưa mua được bộ quần áo ưng ý."
      }
    ]
  },
  {
    "id": "hsk6-g-23",
    "order": 23,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cụm khẩu ngữ vất vả mới đạt được: 好（不）容易 (Khó khăn lắm mới...)",
    "titleZh": "好（不）容易",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "好不容易 / 好容易 + 才 + Động từ",
    "explanationVi": "Cả hai hình thức '好容易' và '好不容易' đều mang cùng một ý nghĩa: 'rất khó khăn, tốn bao nhiêu công sức trắc trở mãi mới hoàn thành được'.",
    "tips": "Đây là hiện tượng ngữ pháp đặc biệt của tiếng Hán: dạng khẳng định và phủ định đều mang cùng nghĩa tích cực là 'vất vả lắm mới làm được'.",
    "examples": [
      {
        "chinese": "我好不容易才获得这次面试机会，一定不会轻易放弃。",
        "pinyin": "Wǒ hǎo bù róng yì cái huò dé zhè cì miàn shì jī huì, yī dìng bù huì qīng yì fàng qì.",
        "vietnamese": "Tôi khó khăn lắm mới giành được cơ hội phỏng vấn lần này, nhất định sẽ không dễ dàng từ bỏ."
      },
      {
        "chinese": "假期好不容易可以休息一下，你怎么还要去公司加班？",
        "pinyin": "Jiǎ qī hǎo bù róng yì kě yǐ xiū xī yī xià, nǐ zěn me hái yào qù gōng sī jiā bān?",
        "vietnamese": "Kỳ nghỉ vất vả lắm mới được nghỉ ngơi một chút, sao cậu lại còn đến công ty tăng ca?"
      }
    ]
  },
  {
    "id": "hsk6-g-24",
    "order": 24,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ đồng tình nhượng bộ: 那倒（也）是 (Kể ra thì cũng đúng)",
    "titleZh": "那倒（也）是",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "那倒（也）是",
    "explanationVi": "Dùng để thừa nhận lý lẽ hoặc góc nhìn hợp lý trong lời nói của người đối thoại, dù ban đầu mình có thể có suy nghĩ khác (Kể ra thì cũng phải, âu đó cũng là điều hay).",
    "tips": "Giúp cuộc giao tiếp trở nên uyển chuyển, thể hiện sự lắng nghe và thấu hiểu quan điểm của người khác.",
    "examples": [
      {
        "chinese": "假如去那家公司工作能为你提供更多的发展空间，那倒也是个不错的选择。",
        "pinyin": "Jiǎ rú qù nà jiā gōng sī gōng zuò néng wèi nǐ tí gōng gèng duō de fā zhǎn kōng jiān, nà dào yě shì gè bù cuò de xuǎn zé.",
        "vietnamese": "Nếu như sang làm việc ở công ty đó có thể mở ra thêm nhiều không gian phát triển cho bạn, thì đó âu cũng là một sự lựa chọn không tồi."
      },
      {
        "chinese": "要是你能从失败中吸取教训，那倒也是件值得高兴的事。",
        "pinyin": "Yào shì nǐ néng cóng shī bài zhōng xī qǔ jiào xùn, nà dào yě shì jiàn zhí dé gāo xīng de shì.",
        "vietnamese": "Nếu cậu có thể rút ra bài học từ thất bại, thì âu đó cũng là một điều đáng mừng."
      }
    ]
  },
  {
    "id": "hsk6-g-25",
    "order": 25,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ bỏ qua, gạt đi: 算了 (Thôi vậy, bỏ đi cho rồi)",
    "titleZh": "算了",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "算了 / Động từ + 算了",
    "explanationVi": "Biểu thị sự nhượng bộ, không truy cứu thêm nữa, hoặc quyết định từ bỏ một việc vì cảm thấy không còn giá trị hay cơ hội (扔掉算了 - vứt đi cho rồi; 算了，别再想了 - thôi bỏ đi đừng nghĩ nữa).",
    "tips": "Mang sắc thái buông bỏ dứt khoát hoặc bất đắc dĩ chấp nhận thực tại.",
    "examples": [
      {
        "chinese": "这些旧衣服扔掉算了，反正也不会再穿了。",
        "pinyin": "Zhè xiē jiù yī fú rēng diào suàn le, fǎn zhèng yě bù huì zài chuān le.",
        "vietnamese": "Đống quần áo cũ này vứt phéng đi cho xong, đằng nào cũng chẳng mặc lại nữa."
      },
      {
        "chinese": "雪下得这么大，估计不会有客人来了，干脆早点儿关门算了。",
        "pinyin": "Xuě xià dé zhè me dà, gū jì bù huì yǒu kè rén lái le, gàn cuì zǎodiǎnr guān mén suàn le.",
        "vietnamese": "Tuyết rơi dày thế này ước chừng chẳng có khách tới đâu, chi bằng dẹp tiệm đóng cửa sớm cho rảnh nợ."
      }
    ]
  },
  {
    "id": "hsk6-g-26",
    "order": 26,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ kết thúc, chốt hạ: 得了 (Thôi đi / Cho xong chuyện)",
    "titleZh": "得了",
    "grammarType": "短语",
    "categoryType": "其他",
    "grammarDetail": "其他",
    "structure": "得了，... / Động từ + 得了",
    "explanationVi": "Có hai cách dùng khẩu ngữ: 1) Đứng đầu câu để cắt ngang lời phàn nàn 'Thôi đi, đừng nói nữa!' (得了，别再想了); 2) Đứng cuối câu sau động từ để chốt giải pháp nhanh gọn '...cho xong chuyện' (送给你得了 - tặng luôn cho cậu cho rồi).",
    "tips": "'得了' phát âm là déliǎo khi dùng với nghĩa này, mang phong cách khẩu ngữ miền Bắc Trung Quốc rất đặc trưng.",
    "examples": [
      {
        "chinese": "得了，别再想了，结果不可能改变了。",
        "pinyin": "Dé le, bié zài xiǎng le, jié guǒ bù kě néng gǎi biàn le.",
        "vietnamese": "Thôi đi, đừng nghĩ ngợi vẩn vơ nữa, kết quả không thể thay đổi được đâu."
      },
      {
        "chinese": "你这么喜欢这本书，干脆送给你得了。",
        "pinyin": "Nǐ zhè me xǐ huān zhè běn shū, gàn cuì sòng gěi nǐ dé le.",
        "vietnamese": "Cậu thích cuốn sách này như vậy, chi bằng tặng luôn cho cậu cho rồi."
      }
    ]
  },
  {
    "id": "hsk6-g-27",
    "order": 27,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc hành động đồng loạt chen chúc: A一+量词，B一+量词",
    "titleZh": "A一+量词，B一+量词",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "A 一 [Lượng từ]，B 一 [Lượng từ]地 + Động từ",
    "explanationVi": "Miêu tả cảnh tượng nhiều đối tượng cùng tham gia phát biểu hoặc hành động liên tục xen kẽ nhau: '左一句、右一句' (người một câu kẻ một câu dồn dập); '你一言，我一语' (anh một câu tôi một lời rôm rả).",
    "tips": "Thường làm trạng ngữ miêu tả không khí thảo luận bàn tán sôi nổi.",
    "examples": [
      {
        "chinese": "我们左一句、右一句地安慰，她才终于不哭了。",
        "pinyin": "Wǒ men zuǒ yī jù, yòu yī jù dì ān wèi, tā cái zhōng yú bù kū le.",
        "vietnamese": "Chúng tôi đứa một câu người một câu ra sức an ủi, cô ấy mới rốt cuộc ngừng khóc."
      },
      {
        "chinese": "大家你一言，我一语，很快就商量出了解决的办法。",
        "pinyin": "Dà jiā nǐ yī yán, wǒ yī yǔ, hěn kuài jiù shāng liàng chū le jiě jué de bàn fǎ.",
        "vietnamese": "Mọi người anh một câu tôi một lời, rất nhanh đã bàn bạc ra được cách giải quyết."
      }
    ]
  },
  {
    "id": "hsk6-g-28",
    "order": 28,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc bừa bãi lộn xộn: 东一A，西一A (Góc này một tí, chỗ kia một cái)",
    "titleZh": "东一A，西一A",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "东 一 [Lượng từ/Động từ]，西 一 [Lượng từ/Động từ]",
    "explanationVi": "Miêu tả đồ đạc vứt bừa bãi khắp nơi không có trật tự (东一件，西一件), hoặc hành động ngẫu hứng tản mạn không theo hệ thống bài bản (东一本，西一本).",
    "tips": "Dùng hình ảnh 'đông-tây' để biểu thị sự phân tán, mất phương hướng và thiếu ngăn nắp.",
    "examples": [
      {
        "chinese": "房间里的衣服东一件，西一件，扔得哪儿都是。",
        "pinyin": "Fáng jiān lǐ de yī fú dōng yī jiàn, xī yī jiàn, rēng dé nǎr dōu shì.",
        "vietnamese": "Quần áo trong phòng chiếc thì vứt góc này cái thì quăng góc nọ, quăng bừa bãi khắp mọi nơi."
      },
      {
        "chinese": "最近他东一本，西一本地看了不少书。",
        "pinyin": "Zuì jìn tā dōng yī běn, xī yī běn dì kàn le bù shǎo shū.",
        "vietnamese": "Dạo này anh ấy vớ được quyển nào đọc quyển nấy, đọc qua không ít sách."
      }
    ]
  },
  {
    "id": "hsk6-g-29",
    "order": 29,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc giới hạn mốc: 到……为止 (Cho đến... mới thôi / Tính đến nay)",
    "titleZh": "到……为止",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "到 + Thời gian / Tình trạng + 为止",
    "explanationVi": "Xác định điểm dừng hoặc ranh giới cuối cùng của một quá trình: '到目前为止' (tính đến thời điểm hiện tại); '一直到客户满意为止' (mãi cho đến khi khách hàng hài lòng mới thôi).",
    "tips": "'到目前为止' là cụm liên kết cực kỳ phổ biến trong các báo cáo tiến độ công việc.",
    "examples": [
      {
        "chinese": "到目前为止，双方已经达成了初步的合作。",
        "pinyin": "Dào mù qián wèi zhǐ, shuāng fāng yǐ jīng dá chéng le chū bù de hé zuò.",
        "vietnamese": "Tính đến thời điểm hiện tại, hai bên đã đạt được thỏa thuận hợp tác bước đầu."
      },
      {
        "chinese": "他把产品设计改了很多遍，一直到客户满意为止。",
        "pinyin": "Tā bǎ chǎn pǐn shè jì gǎi le hěn duō biàn, yī zhí dào kè hù mǎn yì wèi zhǐ.",
        "vietnamese": "Anh ấy sửa đổi thiết kế sản phẩm rất nhiều lần, mãi cho đến khi khách hàng hài lòng mới thôi."
      }
    ]
  },
  {
    "id": "hsk6-g-30",
    "order": 30,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ bức xúc bị liên lụy: X到Y头上来了 (Làm càn đến tận đầu ai)",
    "titleZh": "X到Y头上来了",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "Động từ xấu (骗 / 赖 / 怪 / 欺负) + 到 + Ai + 头上来了",
    "explanationVi": "Khẩu ngữ biểu thị sự phẫn nộ cùng cực khi bị kẻ xấu ức hiếp, lừa đảo, hoặc bị người khác đổ vấy oan uổng trách nhiệm lên đầu mình (骗到我头上来了 - lừa gạt đến tận đầu tôi; 怪到我头上来了 - đổ vấy tội lên đầu tôi).",
    "tips": "Động từ luôn là hành vi tiêu cực, thể hiện thái độ không chịu để người khác bắt nạt.",
    "examples": [
      {
        "chinese": "我把你当作好朋友，没想到你竟然骗到我头上来了。",
        "pinyin": "Wǒ bǎ nǐ dāng zuò hǎo péng yǒu, méi xiǎng dào nǐ jìng rán piàn dào wǒ tóu shàng lái le.",
        "vietnamese": "Tôi coi cậu là bạn tốt, không ngờ cậu dám lừa gạt đến tận đầu tôi!"
      },
      {
        "chinese": "问题不是我造成的，怎么怪到我头上来了？",
        "pinyin": "Wèn tí bù shì wǒ zào chéng de, zěn me guài dào wǒ tóu shàng lái le?",
        "vietnamese": "Rắc rối đâu phải do tôi gây ra, sao lại đổ vấy trách nhiệm lên đầu tôi thế chứ?"
      }
    ]
  },
  {
    "id": "hsk6-g-31",
    "order": 31,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc so sánh trải nghiệm: 不X不……，一X…… (Chưa thử thì chưa hay, vừa thử mới biết)",
    "titleZh": "不X不……，一X……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "不 [Động từ] 不 [Trạng thái]，一 [Động từ] (才) [Phát hiện mới]",
    "explanationVi": "Cấu trúc khẩu ngữ nêu bật sự tương phản giữa lúc chưa trải nghiệm và khi vừa mới bắt tay vào làm, giúp nhận ra chân lý hoặc sự thú vị bất ngờ (不学不知道，一学才知道; 不尝不知道，一尝就喜欢上了).",
    "tips": "Cách diễn đạt rất dí dỏm, kích thích tính tò mò khám phá của người nghe.",
    "examples": [
      {
        "chinese": "不学不知道，一学才知道汉字如此有魅力。",
        "pinyin": "Bù xué bù zhī dào, yī xué cái zhī dào hàn zì rú cǐ yǒu mèi lì.",
        "vietnamese": "Không học thì không biết, vừa học mới hay chữ Hán lại có sức quyến rũ đến như thế."
      },
      {
        "chinese": "这茶不尝不知道，一尝就喜欢上了。",
        "pinyin": "Zhè chá bù cháng bù zhī dào, yī cháng jiù xǐ huān shàng le.",
        "vietnamese": "Chén trà này không nếm thử thì không biết, vừa nhấp một ngụm là đã mê ngay."
      }
    ]
  },
  {
    "id": "hsk6-g-32",
    "order": 32,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ trách mắng gay gắt: 好你个X (Hay cho cái đồ... nhà ngươi!)",
    "titleZh": "好你个X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "好你个 + Tên / Danh xưng trách cứ",
    "explanationVi": "Thán từ vạch mặt hoặc mắng mỏ khi phát hiện ra đối phương làm điều sai trái, nói xấu sau lưng hoặc lừa dối mình (好你个老张 - hay cho lão Trương nhà anh nhé; 好你个骗子 - hay cho tên lừa đảo nhà ngươi).",
    "tips": "Mang ngữ khí nửa giận dữ nửa bất ngờ khi phát hiện sự thật.",
    "examples": [
      {
        "chinese": "好你个老张，原来是你在背后说我坏话！",
        "pinyin": "Hǎo nǐ gè lǎo zhāng, yuán lái shì nǐ zài bèi hòu shuō wǒ huài huà!",
        "vietnamese": "Hay cho lão Trương nhà anh nhé, hóa ra là anh nói xấu sau lưng tôi!"
      },
      {
        "chinese": "好你个骗子，赶紧把钱还给我，否则我就报警。",
        "pinyin": "Hǎo nǐ gè piàn zi, gǎn jǐn bǎ qián hái gěi wǒ, fǒu zé wǒ jiù bào jǐng.",
        "vietnamese": "Hay cho tên lừa đảo nhà ngươi, mau trả tiền lại cho ta, bằng không ta sẽ báo cảnh sát."
      }
    ]
  },
  {
    "id": "hsk6-g-33",
    "order": 33,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ than phiền trớ trêu: 早（也）不X，晚（也）不X (Sớm chẳng làm, muộn không làm, đúng lúc này mới...)",
    "titleZh": "早（也）不X，晚（也）不X",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "早 (也) 不 X，晚 (也) 不 X，偏偏...",
    "explanationVi": "Phàn nàn về sự xuất hiện không đúng lúc, trớ trêu của một hành động hay thời tiết khiến kế hoạch của người nói bị xáo trộn (早不来，晚不来，正要出门你来了; 早也不下雨，晚也不下雨，刚一开始就下).",
    "tips": "Thường đi kèm cảm giác dở khóc dở cười trước sự trùng hợp oái oăm.",
    "examples": [
      {
        "chinese": "早不来，晚不来，我正要出门你来了。",
        "pinyin": "Zǎo bù lái, wǎn bù lái, wǒ zhèng yào chū mén nǐ lái le.",
        "vietnamese": "Sớm không đến, muộn chẳng đến, đúng lúc tôi đang sửa soạn ra ngoài thì cậu lại mò tới."
      },
      {
        "chinese": "早也不下雨，晚也不下雨，比赛刚一开始就下起来了。",
        "pinyin": "Zǎo yě bù xià yǔ, wǎn yě bù xià yǔ, bǐ sài gāng yī kāi shǐ jiù xià qǐ lái le.",
        "vietnamese": "Sớm không mưa, muộn chẳng mưa, trận đấu vừa mới bắt đầu thì trời lại đổ mưa rào."
      }
    ]
  },
  {
    "id": "hsk6-g-34",
    "order": 34,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ nhận xét trạng thái ai đó: 看/瞧+把+宾语+X得 (Trông người ta... kìa!)",
    "titleZh": "看/瞧+把+宾语（施事）+X得",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "看 / 瞧 + 把 + Ai + Tính từ / Động từ + 得 + Bổ ngữ",
    "explanationVi": "Hướng sự chú ý của người nghe vào trạng thái cảm xúc tột cùng hoặc hình ảnh buồn cười/xúc động của đối tượng (瞧把他兴奋得 - xem kìa trông anh ấy hào hứng chưa; 看把你笑得 - xem cậu cười kìa).",
    "tips": "Cấu trúc kết hợp giữa chữ 把 và bổ ngữ trạng thái 得, rất giàu tính khẩu ngữ đời sống.",
    "examples": [
      {
        "chinese": "瞧把他兴奋得，简直像个孩子一样。",
        "pinyin": "Qiáo bǎ tā xīng fèn dé, jiǎn zhí xiàng gè hái zi yī yàng.",
        "vietnamese": "Xem kìa, trông anh ấy phấn khích đến mức quả thật chẳng khác gì một đứa con nít."
      },
      {
        "chinese": "看把你笑得，腰都直不起来了。",
        "pinyin": "Kàn bǎ nǐ xiào dé, yāo dōu zhí bù qǐ lái le.",
        "vietnamese": "Xem cậu cười kìa, cười đến mức không gập nổi cả lưng lại rồi."
      }
    ]
  },
  {
    "id": "hsk6-g-35",
    "order": 35,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc lãng phí trớ trêu: 放着X不Y (Bỏ mặc điều tốt lại đi làm điều dở)",
    "titleZh": "放着X不Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "放着 + Lợi thế / Trách nhiệm + 不 + Tận dụng / Gánh vác",
    "explanationVi": "Chỉ trích hoặc khó hiểu trước hành vi bỏ phí nguồn lực sẵn có để chạy đi làm việc khác vô lý (放着自己的车不开 - xe mình không lái đi mượn xe người khác; 放着孩子不管 - bỏ mặc con cái không trông nom).",
    "tips": "Biểu thị sự trách móc việc không biết quý trọng những gì mình đang có.",
    "examples": [
      {
        "chinese": "你为什么放着自己的车不开，跑去借别人的车？",
        "pinyin": "Nǐ wèi shén me fàng zhe zì jǐ de chē bù kāi, pǎo qù jiè bié rén de chē?",
        "vietnamese": "Tại sao anh lại bỏ mặc xe của mình không lái, chạy đi mượn xe của người khác?"
      },
      {
        "chinese": "他放着孩子不管，整天跑出去玩儿。",
        "pinyin": "Tā fàng zhe hái zi bù guǎn, zhěng tiān pǎo chū qù wánr.",
        "vietnamese": "Anh ta bỏ mặc con cái không ngó ngàng, suốt ngày chỉ biết chạy ra ngoài đàn đúm chơi bời."
      }
    ]
  },
  {
    "id": "hsk6-g-36",
    "order": 36,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ khuyên can buông bỏ: X了就X了，（没）有…… (Đã qua rồi thì thôi, có gì đâu mà...)",
    "titleZh": "X了就X了，（没）有……",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 了就 X 了，(没) 有什么好 [Buồn / Tiếc / Lo] 的",
    "explanationVi": "Dùng để an ủi người khác gác lại chuyện đã rồi, đừng tiếc nuối hay lo lắng vô ích (走了就走了 - đi thì cũng đi rồi; 丢了就丢了 - mất thì cũng mất rồi).",
    "tips": "X là động từ diễn tả sự việc đã thành dĩ vãng không thể cứu vãn.",
    "examples": [
      {
        "chinese": "他已经是大人了，走了就走了，有什么好担心的？",
        "pinyin": "Tā yǐ jīng shì dà rén le, zǒu le jiù zǒu le, yǒu shén me hǎo dān xīn de?",
        "vietnamese": "Nó đã là người lớn rồi, đi thì đi thôi, có gì đáng phải lo lắng đâu chứ?"
      },
      {
        "chinese": "东西丢了就丢了，没有什么好可惜的。",
        "pinyin": "Dōng xī diū le jiù diū le, méi yǒu shén me hǎo kě xī de.",
        "vietnamese": "Đồ vật mất thì cũng mất rồi, chẳng có gì phải tiếc nuối cả."
      }
    ]
  },
  {
    "id": "hsk6-g-37",
    "order": 37,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ kén chọn quá mức: 这/那也不X，那/这也不Y (Cái này cũng chê, cái kia cũng không ưng)",
    "titleZh": "这/那也不X，那/这也不Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "这 / 那 也不 X，那 / 这 也不 Y",
    "explanationVi": "Phê bình thái độ khó tính, kén cá chọn canh, cho phương án nào cũng lắc đầu từ chối (这也不好吃，那也不好吃; 那也不喜欢，这也不满意).",
    "tips": "Thường dùng khi bực mình vì người khác không chịu hợp tác hoặc quá đòi hỏi.",
    "examples": [
      {
        "chinese": "这也不好吃，那也不好吃，你干脆饿着吧。",
        "pinyin": "Zhè yě bù hǎo chī, nà yě bù hǎo chī, nǐ gàn cuì è zhe ba.",
        "vietnamese": "Cái này cũng chê dở, cái kia cũng chê không ngon, vậy cậu dứt khoát nhịn đói luôn đi."
      },
      {
        "chinese": "那也不喜欢，这也不满意，你到底想找什么样的工作？",
        "pinyin": "Nà yě bù xǐ huān, zhè yě bù mǎn yì, nǐ dào dǐ xiǎng zhǎo shén me yàng de gōng zuò?",
        "vietnamese": "Cái đó cũng không ưng, việc này cũng bất mãn, rốt cuộc cậu muốn tìm công việc như thế nào?"
      }
    ]
  },
  {
    "id": "hsk6-g-38",
    "order": 38,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Cấu trúc tách bạch rạch ròi: X归X，Y归Y (Chuyện nào ra chuyện đó / Dù gì thì gì)",
    "titleZh": "X归X，Y归Y",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "X 归 X，Y 归 Y",
    "explanationVi": "Có 2 nghĩa: 1) Tách bạch hai việc riêng biệt không được đánh đồng (计划归计划，行动归行动 - kế hoạch ra kế hoạch, hành động ra hành động); 2) Dù có hành động răn đe thì bản chất tình cảm vẫn không đổi (打归打，骂归骂，父母永远最疼你).",
    "tips": "Giúp luận điểm rành mạch, không bị cảm xúc chi phối khi phân tích vấn đề.",
    "examples": [
      {
        "chinese": "打归打，骂归骂，父母永远是最疼你的人。",
        "pinyin": "Dǎ guī dǎ, mà guī mà, fù mǔ yǒng yuǎn shì zuì téng nǐ de rén.",
        "vietnamese": "Đánh thì đánh, mắng thì mắng, cha mẹ vĩnh viễn vẫn là những người thương yêu con nhất."
      },
      {
        "chinese": "计划归计划，行动归行动，二者并不完全一样。",
        "pinyin": "Jì huà guī jì huà, xíng dòng guī xíng dòng, èr zhě bìng bù wán quán yī yàng.",
        "vietnamese": "Kế hoạch là chuyện kế hoạch, hành động là việc hành động, hai điều đó không hoàn toàn đồng nhất."
      }
    ]
  },
  {
    "id": "hsk6-g-39",
    "order": 39,
    "category": "khau-ngu",
    "categoryName": "Khẩu ngữ & Cụm cố định",
    "categoryIcon": "💬",
    "titleVi": "Khẩu ngữ trêu chọc trạng thái: 看你X的/瞧他X的 (Xem cái vẻ... kìa!)",
    "titleZh": "看你X的/瞧他X的",
    "grammarType": "固定格式",
    "categoryType": "",
    "grammarDetail": "",
    "structure": "看你 X 的 / 瞧他 X 的",
    "explanationVi": "Khẩu ngữ trêu đùa hoặc châm biếm nhẹ nhàng trạng thái cảm xúc lộ rõ ra ngoài mặt của ai đó (看你吓的 - xem cậu bị dọa sợ kìa; 瞧他得意的 - xem bộ dạng đắc chí của hắn kìa).",
    "tips": "X thường là tính từ chỉ cảm xúc (吓, 得意, 乐, 慌, 愁...).",
    "examples": [
      {
        "chinese": "我跟你开玩笑呢！看你吓的！",
        "pinyin": "Wǒ gēn nǐ kāi wán xiào ne! kàn nǐ xià de!",
        "vietnamese": "Tôi đang đùa với bạn thôi mà! Xem bạn bị dọa sợ kìa!"
      },
      {
        "chinese": "不就是得了奖学金吗？瞧他得意的！",
        "pinyin": "Bù jiù shì dé le jiǎng xué jīn ma? qiáo tā dé yì de!",
        "vietnamese": "Chẳng qua chỉ là giành được chút học bổng thôi mà? Xem bộ dạng đắc ý của hắn kìa!"
      }
    ]
  },
  {
    "id": "hsk6-g-40",
    "order": 40,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Bổ ngữ mức độ thấu triệt: 动词/形容词+透+了",
    "titleZh": "动词/形容词+透+了",
    "grammarType": "句子成分",
    "categoryType": "程度补语3",
    "grammarDetail": "程度补语3",
    "structure": "Động từ tâm lý / Tính từ + 透 + 了",
    "explanationVi": "'透' (tòu) làm bổ ngữ biểu thị mức độ cực sâu sắc, ngấm sâu vào bản chất hoặc thấu suốt (恨透了 - căm ghét tận xương tủy; 淋透了 - ướt sũng thấu vào tận trong da thịt; 摸透了 - nắm bắt thấu đáo).",
    "tips": "Khác với '极了', '透' mang hàm nghĩa mức độ thấu qua bề mặt vào sâu bên trong nội tâm hoặc vật thể.",
    "examples": [
      {
        "chinese": "我恨透了那些不诚信的商家。",
        "pinyin": "Wǒ hèn tòu le nà xiē bù chéng xìn de shāng jiā.",
        "vietnamese": "Tôi căm ghét đến tận xương tủy những phường thương lái gian dối làm ăn phi pháp."
      },
      {
        "chinese": "大雨把他身上的衣服全都淋透了。",
        "pinyin": "Dà yǔ bǎ tā shēn shàng de yī fú quán dōu lín tòu le.",
        "vietnamese": "Cơn mưa to dầm ướt sũng toàn bộ quần áo trên người anh ấy."
      }
    ]
  },
  {
    "id": "hsk6-g-41",
    "order": 41,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu chữ 把 có chủ ngữ phi sinh vật: 主语（非生物体）+把+宾语+动词",
    "titleZh": "主语（非生物体）+把+宾语+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句4",
    "grammarDetail": "“把”字句4",
    "structure": "Chủ ngữ (Hiện tượng tự nhiên / Âm thanh) + 把 + Đối tượng chịu tác động + Động từ + Bổ ngữ",
    "explanationVi": "Trong văn miêu tả cao cấp HSK 6, chủ ngữ của câu chữ 把 không nhất thiết phải là con người có ý chí mà có thể là ánh nắng, âm thanh, cơn gió làm biến đổi cảnh vật (阳光把大地染成了红色; 音乐声把游客都吸引过去了).",
    "tips": "Mẫu câu văn học nhân cách hóa thiên nhiên rất nghệ thuật và giàu cảm xúc.",
    "examples": [
      {
        "chinese": "阳光把大地染成了红色。",
        "pinyin": "Yáng guāng bǎ dà dì rǎn chéng le hóng sè.",
        "vietnamese": "Ánh nắng nhuộm đỏ rực cả mặt đất bao la."
      },
      {
        "chinese": "音乐声把游客都吸引过去了。",
        "pinyin": "Yīn lè shēng bǎ yóu kè dōu xī yǐn guò qù le.",
        "vietnamese": "Tiếng nhạc du dương đã thu hút tất cả du khách đổ dồn về phía đó."
      }
    ]
  },
  {
    "id": "hsk6-g-42",
    "order": 42,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu chữ 把 có tân ngữ là tác nhân chịu khổ: 主语+把+宾语（施事）+动词",
    "titleZh": "主语+把+宾语（施事）+动词+其他成分",
    "grammarType": "句子的类型",
    "categoryType": "“把”字句4",
    "grammarDetail": "“把”字句4",
    "structure": "Chủ ngữ (Nguyên nhân / Người gây chuyện) + 把 + Người chịu cảm xúc + Động từ tâm lý + Bổ ngữ",
    "explanationVi": "Chủ ngữ gây ra tác động khiến người ở vị trí tân ngữ phải rơi vào trạng thái tâm lý mãnh liệt (孩子把妈妈气得睡不着觉 - con làm mẹ tức không ngủ được; 故事把大家感动哭了 - câu chuyện làm mọi người xúc động phát khóc).",
    "tips": "Tân ngữ là người gánh chịu trạng thái tâm lý do chủ ngữ tạo nên.",
    "examples": [
      {
        "chinese": "孩子把妈妈气得睡不着觉。",
        "pinyin": "Hái zi bǎ mā mā qì dé shuì bù zhe jué.",
        "vietnamese": "Đứa con làm cho mẹ tức giận đến mức mất ăn mất ngủ."
      },
      {
        "chinese": "她讲述的故事把大家感动哭了。",
        "pinyin": "Tā jiǎng shù de gù shì bǎ dà jiā gǎn dòng kū le.",
        "vietnamese": "Câu chuyện do cô ấy kể lại đã khiến cho mọi người xúc động rơi nước mắt."
      }
    ]
  },
  {
    "id": "hsk6-g-43",
    "order": 43,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức lặp lại trạng thái luân phiên: 一时……一时…… (Lúc thì... lúc thì...)",
    "titleZh": "一时……一时……",
    "grammarType": "句子的类型",
    "categoryType": "并列复句",
    "grammarDetail": "并列复句",
    "structure": "一时 + Trạng thái A，一时 + Trạng thái B",
    "explanationVi": "Diễn tả sự thay đổi chớp nhoáng, biến chuyển liên tục qua lại giữa hai trạng thái trái ngược nhau trong khoảng thời gian ngắn (一时上升一时下降; 一时冷一时热).",
    "tips": "Tương đương với '一会儿...一会儿...' nhưng mang màu sắc văn phong viết trang nhã hơn.",
    "examples": [
      {
        "chinese": "最近产品价格不太稳定，一时上升一时下降。",
        "pinyin": "Zuì jìn chǎn pǐn jià gé bù tài wěn dìng, yī shí shàng shēng yī shí xià jiàng.",
        "vietnamese": "Dạo này giá cả sản phẩm không được ổn định, lúc thì tăng lúc thì lại giảm."
      },
      {
        "chinese": "这段时间天气变化快，一时冷一时热。",
        "pinyin": "Zhè duàn shí jiān tiān qì biàn huà kuài, yī shí lěng yī shí rè.",
        "vietnamese": "Khoảng thời gian này thời tiết thay đổi chóng mặt, lúc thì rét lúc lại oi nồng."
      }
    ]
  },
  {
    "id": "hsk6-g-44",
    "order": 44,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức lựa chọn loại trừ dứt khoát: 要么……，要么…… (Hoặc là... hoặc là...)",
    "titleZh": "要么……，要么……",
    "grammarType": "句子的类型",
    "categoryType": "选择复句",
    "grammarDetail": "选择复句",
    "structure": "要么 + Lựa chọn A，要么 + Lựa chọn B",
    "explanationVi": "Biểu thị sự lựa chọn loại trừ lẫn nhau giữa hai phương án khả dĩ, bắt buộc phải chọn một trong hai chứ không thể cùng tồn tại (要么点外卖，要么自己做; 要么太咸，要么太辣).",
    "tips": "'要么' mang tính dứt khoát hơn '或者', thường dùng khi chỉ có đúng 2 lối thoát duy nhất.",
    "examples": [
      {
        "chinese": "我平常要么点外卖，要么自己做，很少去食堂吃。",
        "pinyin": "Wǒ píng cháng yào me diǎn wài mài, yào me zì jǐ zuò, hěn shǎo qù shí táng chī.",
        "vietnamese": "Ngày thường tôi hoặc là gọi đồ ăn ngoài, hoặc là tự nấu nướng, rất ít khi ra căng tin ăn."
      },
      {
        "chinese": "那家饭馆的菜要么太咸，要么太辣，我都不爱吃。",
        "pinyin": "Nà jiā fàn guǎn de cài yào me tài xián, yào me tài là, wǒ dōu bù ài chī.",
        "vietnamese": "Món ăn ở quán cơm đó hoặc là quá mặn, hoặc là quá cay, tôi đều chẳng thích ăn chút nào."
      }
    ]
  },
  {
    "id": "hsk6-g-45",
    "order": 45,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức chuyển ngoặt cô đọng: 虽……，但/可/却/也…… (Tuy... nhưng...)",
    "titleZh": "虽……，但/可/却/也……",
    "grammarType": "句子的类型",
    "categoryType": "转折复句",
    "grammarDetail": "转折复句",
    "structure": "虽 + Nhượng bộ，但 / 可 / 却 / 也 + Chuyển ngoặt",
    "explanationVi": "'虽' là thể rút gọn văn ngôn của 虽然, giúp câu văn gọn gàng, súc tích và uyển chuyển (虽未取得胜利，但收获了经验; 这道题虽有难度，可做出来的同学不少; 文章虽短，读后却充满力量).",
    "tips": "Rất được ưa chuộng trong các bài bình luận xã hội, giúp câu văn cô đọng mang phong vị cổ điển.",
    "examples": [
      {
        "chinese": "比赛虽未取得胜利，但我们收获了宝贵的经验。",
        "pinyin": "Bǐ sài suī wèi qǔ dé shèng lì, dàn wǒ men shōu huò le bǎo guì de jīng yàn.",
        "vietnamese": "Cuộc thi tuy chưa giành được thắng lợi, nhưng chúng tôi đã gặt hái được những kinh nghiệm vô giá."
      },
      {
        "chinese": "这道题虽有难度，可做出来的同学不在少数。",
        "pinyin": "Zhè dào tí suī yǒu nán dù, kě zuò chū lái de tóng xué bù zài shǎo shù.",
        "vietnamese": "Bài toán này tuy có độ khó nhất định, song số học sinh giải ra được lại không hề ít."
      },
      {
        "chinese": "文章虽短，读后却使人充满力量。",
        "pinyin": "Wén zhāng suī duǎn, dú hòu què shǐ rén chōng mǎn lì liàng.",
        "vietnamese": "Bài văn tuy ngắn ngủi, nhưng đọc xong lại khiến người ta tràn trề sức mạnh."
      },
      {
        "chinese": "她心里虽不喜欢，也坚持来上班了。",
        "pinyin": "Tā xīn lǐ suī bù xǐ huān, yě jiān chí lái shàng bān le.",
        "vietnamese": "Trong lòng cô ấy tuy chẳng mấy thích thú, nhưng vẫn kiên trì đi làm."
      }
    ]
  },
  {
    "id": "hsk6-g-46",
    "order": 46,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện toàn thể: 凡是……，都…… (Hễ phàm là... thì đều...)",
    "titleZh": "凡是……，都……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "凡是 + Đối tượng bao quát，都 + Quy tắc áp dụng",
    "explanationVi": "'凡是' (fánshì) mang nghĩa bao hàm tuyệt đối tất cả mọi trường hợp nằm trong phạm vi được nêu ra, không có bất kỳ ngoại lệ nào (凡是有机会都争取; 凡是错误的行为都应该纠正).",
    "tips": "Vế sau bắt buộc phải có phó từ '都' hoặc '总' để đáp lại tính toàn thể của '凡是'.",
    "examples": [
      {
        "chinese": "凡是有机会，他都会积极争取。",
        "pinyin": "Fán shì yǒu jī huì, tā dōu huì jī jí zhēng qǔ.",
        "vietnamese": "Hễ phàm có cơ hội là anh ấy đều sẽ tích cực tranh thủ."
      },
      {
        "chinese": "凡是错误的行为，我们都应该纠正。",
        "pinyin": "Fán shì cuò wù de xíng wèi, wǒ men dōu yīng gāi jiū zhèng.",
        "vietnamese": "Hễ phàm là hành vi sai trái, chúng ta đều phải kiên quyết uốn nắn sửa đổi."
      }
    ]
  },
  {
    "id": "hsk6-g-47",
    "order": 47,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện duy nhất: 除非……，才…… (Chỉ trừ phi... mới...)",
    "titleZh": "除非……，才……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "除非 + Điều kiện duy nhất bắt buộc，才 + Kết quả mong muốn",
    "explanationVi": "'除非' nêu ra điều kiện duy nhất để sự việc có thể xảy ra, ngoài điều kiện đó ra thì không có cách nào khác đạt được mục tiêu.",
    "tips": "Đi cùng với '才', nhấn mạnh tính tất yếu duy nhất của điều kiện.",
    "examples": [
      {
        "chinese": "除非你亲自邀请，他才有可能同意参加。",
        "pinyin": "Chú fēi nǐ qīn zì yāo qǐng, tā cái yǒu kě néng tóng yì cān jiā.",
        "vietnamese": "Trừ phi đích thân bạn mở lời mời, anh ấy mới có khả năng đồng ý tham dự."
      },
      {
        "chinese": "除非是紧急情况，我才会向他求助。",
        "pinyin": "Chú fēi shì jǐn jí qíng kuàng, wǒ cái huì xiàng tā qiú zhù.",
        "vietnamese": "Chỉ trừ khi rơi vào tình thế khẩn cấp, tôi mới tìm đến anh ấy nhờ giúp đỡ."
      }
    ]
  },
  {
    "id": "hsk6-g-48",
    "order": 48,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức điều kiện loại trừ cảnh báo: 除非……，否则/不然…… (Trừ phi... bằng không thì...)",
    "titleZh": "除非……，否则/不然……",
    "grammarType": "句子的类型",
    "categoryType": "条件复句",
    "grammarDetail": "条件复句",
    "structure": "除非 + Điều kiện cần sửa đổi，否则 / 不然 + Hậu quả dứt khoát",
    "explanationVi": "Nêu điều kiện bắt buộc đối phương phải thực hiện, nếu không tuân thủ thì hậu quả ở vế sau là chắc chắn sẽ xảy ra (除非他道歉，否则我不会原谅).",
    "tips": "Mang ngữ khí kiên quyết không nhượng bộ trong đàm phán hoặc nguyên tắc cá nhân.",
    "examples": [
      {
        "chinese": "除非他承认错误并向我道歉，否则我不会原谅他。",
        "pinyin": "Chú fēi tā chéng rèn cuò wù bìng xiàng wǒ dào qiàn, fǒu zé wǒ bù huì yuán liàng tā.",
        "vietnamese": "Trừ phi anh ta nhận lỗi và xin lỗi tôi, bằng không tôi sẽ không tha thứ cho anh ta đâu."
      },
      {
        "chinese": "除非你说清楚是什么事情，不然我不可能同意帮忙。",
        "pinyin": "Chú fēi nǐ shuō qīng chǔ shì shén me shì qíng, bù rán wǒ bù kě néng tóng yì bāng máng.",
        "vietnamese": "Trừ phi bạn nói rõ rốt cuộc là có chuyện gì, nếu không tôi không thể nhận lời giúp."
      }
    ]
  },
  {
    "id": "hsk6-g-49",
    "order": 49,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức nhượng bộ văn viết: 就算……，也…… (Dẫu cho, cho dù... thì cũng...)",
    "titleZh": "就算……，也……",
    "grammarType": "句子的类型",
    "categoryType": "让步复句",
    "grammarDetail": "让步复句",
    "structure": "就算 + Giả định khó khăn nhất，也 + Quyết tâm không đổi",
    "explanationVi": "'就算' (jiùsuàn) tương đương với '哪怕, 即使', giả thiết một tình huống cực đoan hoặc điều kiện bất lợi nhất nhưng khẳng định lập trường hoặc nguyên tắc xử sự ở vế sau vẫn vững vàng.",
    "tips": "Rất thông dụng cả trong đời sống lẫn văn xuôi biểu cảm.",
    "examples": [
      {
        "chinese": "就算再累，我也要坚持完成任务。",
        "pinyin": "Jiù suàn zài lèi, wǒ yě yào jiān chí wán chéng rèn wù.",
        "vietnamese": "Cho dù có mệt mỏi đến đâu đi nữa, tôi cũng phải kiên quyết hoàn thành nhiệm vụ."
      },
      {
        "chinese": "就算他做错了，你也要注意教育方法。",
        "pinyin": "Jiù suàn tā zuò cuò le, nǐ yě yào zhù yì jiào yù fāng fǎ.",
        "vietnamese": "Dẫu cho cậu ấy có làm sai, bạn cũng cần phải chú ý đến phương pháp dạy bảo."
      }
    ]
  },
  {
    "id": "hsk6-g-50",
    "order": 50,
    "category": "cau-phuc",
    "categoryName": "Mẫu câu đặc biệt & Câu phức cao cấp",
    "categoryIcon": "🔗",
    "titleVi": "Câu phức mục đích trang trọng: ……，以便…… (Để, nhằm để... tiện bề...)",
    "titleZh": "……，以便……",
    "grammarType": "句子的类型",
    "categoryType": "目的复句",
    "grammarDetail": "目的复句",
    "structure": "Biện pháp hành động，以便 + Mục đích / Sự thuận tiện tiếp theo",
    "explanationVi": "'以便' (yǐbiàn) là liên từ mục đích cao cấp trong văn bản hành chính, pháp luật hoặc thư từ thương mại, dẫn xuất mục đích tạo điều kiện thuận lợi cho các bước tiếp theo (留联系方式以便日后联系; 调整时间以便乘客乘坐).",
    "tips": "Là từ nối không thể thiếu trong thư tín thương mại và các thông cáo công cộng chuẩn mực HSK 6.",
    "examples": [
      {
        "chinese": "请留下您的联系方式，以便日后联系。",
        "pinyin": "Qǐng liú xià nín de lián xì fāng shì, yǐ biàn rì hòu lián xì.",
        "vietnamese": "Xin vui lòng để lại phương thức liên lạc của quý khách để tiện việc liên hệ về sau."
      },
      {
        "chinese": "当地政府计划调整地铁的发车时间，以便更多的乘客能够乘坐公共交通。",
        "pinyin": "Dāng dì zhèng fǔ jì huà diào zhěng dì tiě de fā chē shí jiān, yǐ biàn gèng duō de chéng kè néng gòu chéng zuò gōng gòng jiāo tōng.",
        "vietnamese": "Chính quyền sở tại dự kiến điều chỉnh lịch xuất bến của tàu điện ngầm nhằm để nhiều hành khách hơn có thể tiếp cận phương tiện giao thông công cộng."
      }
    ]
  }
];
