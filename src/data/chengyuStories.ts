import { awardXp } from "../lib/hsk";

export interface ChengyuQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ChengyuStoryItem {
  id: string;
  hanzi: string;
  pinyin: string;
  sinoVietnamese: string;
  category: 'ngu-ngon' | 'chien-quoc' | 'y-chi' | 'nhan-sinh';
  categoryLabel: string;
  hskLevel: string;
  literalMeaning: string;
  figurativeMeaning: string;
  origin: string;
  story: string;
  moralLesson: string;
  example: {
    chinese: string;
    pinyin: string;
    vietnamese: string;
  };
  quiz: ChengyuQuiz;
}

export const CHENGYU_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'ngu-ngon', label: 'Ngụ ngôn trí tuệ' },
  { id: 'chien-quoc', label: 'Chiến quốc mưu lược' },
  { id: 'y-chi', label: 'Ý chí & Nghị lực' },
  { id: 'nhan-sinh', label: 'Nhân sinh & Xử thế' },
] as const;

export const CHENGYU_STORIES: ChengyuStoryItem[] = [
  {
    id: 'shou-zhu-dai-tu',
    hanzi: '守株待兔',
    pinyin: 'shǒu zhū dài tù',
    sinoVietnamese: 'Thủ chu đãi thố',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 4',
    literalMeaning: 'Ôm gốc cây đợi thỏ.',
    figurativeMeaning: 'Chỉ kẻ lười biếng, chỉ mong chờ vào may mắn ngẫu nhiên mà không chịu nỗ lực phấn đấu; hoặc bảo thủ, khư khư giữ kinh nghiệm cũ lỗi thời.',
    origin: 'Hàn Phi Tử - Ngũ Đố (韩非子·五蠹)',
    story: `Thời Xuân Thu Chiến Quốc, tại nước Tống có một người nông dân đang cày ruộng. Bỗng nhiên từ trong rừng có một con thỏ hoang chạy thục mạng, không may đâm đầu vào gốc cây to bên bờ ruộng mà gãy cổ chết. Người nông dân mừng rỡ, nhặt con thỏ về làm bữa thịt no nê mà không tốn chút công sức nào.

Từ ngày hôm đó, anh ta vứt bỏ cả cày bừa, ngày ngày chỉ ngồi bên gốc cây đó đợi có con thỏ khác đâm đầu vào để nhặt. Ruộng đồng dần cỏ mọc um tùm, hoa màu héo úa, nhưng chẳng còn con thỏ nào chạy đến nữa. Cả nước Tống ai nấy đều cười chê anh ta là kẻ ngu xuẩn.`,
    moralLesson: 'Thành công không bao giờ đến từ sự trông chờ may mắn ngẫu nhiên. Muốn có thành quả thì phải kiên trì lao động thực tế và biết thích ứng với sự thay đổi của hoàn cảnh.',
    example: {
      chinese: '要想取得好成绩，必须努力学习，决不能守株待兔。',
      pinyin: 'Yào xiǎng qǔdé hǎo chéngjì, bìxū nǔlì xuéxí, jué bù néng shǒuzhūdàitù.',
      vietnamese: 'Muốn đạt thành tích tốt thì phải chăm chỉ học tập, tuyệt đối không thể ôm cây đợi thỏ.'
    },
    quiz: {
      question: 'Thành ngữ "守株待兔" thường dùng để phê phán kiểu người như thế nào?',
      options: [
        'Người quá tham lam, vơ vét của công',
        'Người chỉ trông chờ vận may ngẫu nhiên, không chịu làm việc thực tế',
        'Người quá nhút nhát, sợ hãi khó khăn',
        'Người nóng vội đốt cháy giai đoạn'
      ],
      correctIndex: 1,
      explanation: '"守株待兔" phê phán những kẻ ỷ lại vào may mắn ngẫu nhiên, không chịu bỏ công sức lao động chân chính.'
    }
  },
  {
    id: 'sai-weng-shi-ma',
    hanzi: '塞翁失马',
    pinyin: 'sài wēng shī mǎ',
    sinoVietnamese: 'Tái ông thất mã',
    category: 'nhan-sinh',
    categoryLabel: 'Nhân sinh & Xử thế',
    hskLevel: 'HSK 5',
    literalMeaning: 'Ông già ở vùng biên ải mất ngựa.',
    figurativeMeaning: 'Họa và phúc trên đời thường nương tựa và chuyển hóa lẫn nhau; gặp chuyện xui xẻo chưa chắc đã là hại, gặp chuyện may mắn chưa chắc đã là phúc.',
    origin: 'Hoài Nam Tử - Nhân gian huấn (淮南子·人间训)',
    story: `Xưa kia gần biên giới phía bắc có một ông lão rất giỏi nuôi ngựa. Một hôm, con ngựa quý của ông đột nhiên chạy sang nước láng giềng. Hàng xóm láng giềng đến chia buồn, ông chỉ cười: "Mất ngựa biết đâu lại là điều phúc?".

Vài tháng sau, con ngựa cũ không những tự quay về mà còn dẫn theo một con ngựa tuấn mã khác của nước địch. Mọi người đến chúc mừng, ông lại trầm ngâm: "Có thêm ngựa chưa chắc đã là điềm may". Quả nhiên, người con trai của ông vì ham cưỡi ngựa quý mà ngã gãy chân, thành người tàn tật. Hàng xóm lại đến an ủi, ông bình thản nói: "Gãy chân biết đâu lại là chuyện tốt".

Một năm sau, giặc ngoại xâm tràn vào cướp bóc, toàn bộ thanh niên trai tráng trong làng đều bị bắt đi tòng quân và mười người chết đến chín. Riêng con trai ông nhờ gãy chân mà được miễn quân dịch, nhờ đó hai cha con đều được bình an sống sót qua khói lửa chiến tranh.`,
    moralLesson: 'Đứng trước biến cố của cuộc đời, hãy giữ tâm thái an nhiên, lạc quan. Trong cái rủi luôn tiềm ẩn cơ hội, và trong sự đắc ý cần cẩn trọng rủi ro.',
    example: {
      chinese: '塞翁失马，焉知非福。这次考试虽然失利，但也让他发现了自己的薄弱环节。',
      pinyin: 'Sàiwēngshīmǎ, yān zhī fēi fú. Zhè cì kǎoshì suīrán shīlì, dàn yě ràng tā fāxiàn le zìjǐ de bóruò huánjié.',
      vietnamese: 'Tái ông mất ngựa, hoạ phúc khôn lường. Kỳ thi này dù kết quả chưa tốt nhưng cũng giúp bạn ấy nhận ra điểm yếu của mình.'
    },
    quiz: {
      question: 'Ý nghĩa triết lý cốt lõi của câu chuyện "塞翁失马" là gì?',
      options: [
        'Nuôi ngựa quý là điều nguy hiểm',
        'Chiến tranh sẽ lấy đi sinh mạng của thanh niên',
        'Họa và phúc trên đời có thể chuyển hóa lẫn nhau, nên giữ tâm thái bình thản',
        'Cần xây dựng hàng rào thật chắc để ngựa không chạy mất'
      ],
      correctIndex: 2,
      explanation: 'Câu chuyện nhắc nhở rằng phúc họa khôn lường, điều tưởng chừng là bất hạnh đôi khi lại đem đến cơ may cứu mạng.'
    }
  },
  {
    id: 'hu-jia-hu-wei',
    hanzi: '狐假虎威',
    pinyin: 'hú jiǎ hǔ wēi',
    sinoVietnamese: 'Hồ giả hổ uy',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 4',
    literalMeaning: 'Cáo mượn uy thế của hổ.',
    figurativeMeaning: 'Dựa dẫm vào quyền thế, uy danh của người khác để thị uy, hù dọa và ức hiếp những người xung quanh.',
    origin: 'Chiến Quốc Sách - Sở sách nhất (战国策·楚策一)',
    story: `Một con hổ đói bắt được một con cáo trong rừng. Trong lúc nguy cấp, con cáo khôn ngoan lớn tiếng quát: "Ngươi không dám ăn thịt ta đâu! Trời đã phái ta làm chúa tể muôn loài. Nếu ngươi ăn thịt ta là trái mệnh trời!".

Hổ nghe vậy lấy làm nghi hoặc. Cáo bèn bảo: "Nếu ngươi không tin, hãy đi sau lưng ta, xem muôn thú nhìn thấy ta có sợ hãi chạy tán loạn không!". Hổ bèn đồng ý đi sau cáo. Quả nhiên đi đến đâu, hươu nai thỏ sóc đều hốt hoảng tháo chạy trối chết. Con hổ ngờ nghệch không biết rằng muôn thú thực ra đang sợ chính mình, mà cứ đinh ninh cáo thực sự là chúa tể có uy quyền ghê gớm.`,
    moralLesson: 'Cảnh giác với những kẻ mượn danh thế lực phía sau để bắt nạt người khác, đồng thời cần có con mắt tinh tường để nhận ra bản chất thực sự của sự việc.',
    example: {
      chinese: '他只是仗着总经理的后台在公司里狐假虎威罢了。',
      pinyin: 'Tā zhǐshì zhàng zhe zǒngjīnglǐ de hòutái zài gōngsī lǐ hújiǎhǔwēi bàle.',
      vietnamese: 'Hắn ta chỉ cậy vào chỗ dựa của tổng giám đốc mà làm trò cáo mượn oai hùm trong công ty thôi.'
    },
    quiz: {
      question: 'Trong thành ngữ "狐假虎威", chữ "假" (jiǎ) có nghĩa là gì?',
      options: [
        'Giả dối, không có thật',
        'Kỳ nghỉ, ngày nghỉ lễ',
        'Mượn, nhờ cậy vào',
        'Giá tiền, chi phí'
      ],
      correctIndex: 2,
      explanation: 'Chữ "假" ở đây đọc là jiǎ với nghĩa cổ là "mượn, nương nhờ" (借), mượn uy danh của hổ.'
    }
  },
  {
    id: 'hua-she-tian-zu',
    hanzi: '画蛇添足',
    pinyin: 'huà shé tiān zú',
    sinoVietnamese: 'Họa xà thiêm túc',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 4',
    literalMeaning: 'Vẽ rắn thêm chân.',
    figurativeMeaning: 'Làm những việc thừa thãi, không cần thiết khiến cho công việc chẳng những không tốt lên mà còn hỏng bét.',
    origin: 'Chiến Quốc Sách - Tề sách nhị (战国策·齐策二)',
    story: `Thời Chiến Quốc tại nước Sở, có một gia đình quý tộc sau khi cúng tế ban thưởng cho những người hầu một bình rượu quý. Rượu thì ngon nhưng chỉ có một bình, chia nhau thì mỗi người không đủ một hớp, mà cho một người thì vừa vặn.

Mấy người hầu bàn nhau: "Chúng ta cùng vẽ rắn trên mặt đất, ai vẽ xong trước thì được uống cả bình rượu!". Có một người vẽ rất nhanh, vừa quẹt vài đường đã xong con rắn. Anh ta cầm bình rượu lên định uống, thấy những người khác còn chưa vẽ xong liền đắc chí vẽ thêm bốn cái chân cho con rắn.

Đúng lúc đó, người thứ hai vẽ xong liền giật lấy bình rượu và nói: "Rắn vốn dĩ không có chân, ngươi vẽ thêm chân vào thì đâu còn là rắn nữa!". Nói rồi người thứ hai ngửa cổ uống cạn bình rượu, còn kẻ vẽ thêm chân chỉ biết tiếc nuối ngậm ngùi.`,
    moralLesson: 'Làm việc gì cũng cần biết điểm dừng thích hợp, đúng trọng tâm. Làm việc thừa thãi không những vô ích mà còn tự tước đoạt thành quả của chính mình.',
    example: {
      chinese: '这篇文章原本写得很好，最后一段完全是画蛇添足。',
      pinyin: 'Zhè piān wénzhāng yuánběn xiě de hěn hǎo, zuìhòu yí duàn wánquán shì huàshétiānzú.',
      vietnamese: 'Bài văn này ban đầu viết rất hay, đoạn kết hoàn toàn là vẽ rắn thêm chân.'
    },
    quiz: {
      question: 'Hậu quả của người vẽ chân cho rắn trong câu chuyện là gì?',
      options: [
        'Được khen ngợi vì sáng tạo độc đáo',
        'Bị mất phần thưởng bình rượu ngon vào tay người khác',
        'Bị chủ nhà phạt đánh đòn',
        'Rắn sống lại và cắn vào tay anh ta'
      ],
      correctIndex: 1,
      explanation: 'Vì làm việc thừa thãi vẽ thêm chân cho rắn, anh ta đã đánh mất chiến thắng và bình rượu quý vào tay người kế tiếp.'
    }
  },
  {
    id: 'wo-xin-chang-dan',
    hanzi: '卧薪尝胆',
    pinyin: 'wò xīn cháng dǎn',
    sinoVietnamese: 'Ngọa tân thường đàm (đảm)',
    category: 'chien-quoc',
    categoryLabel: 'Chiến quốc mưu lược',
    hskLevel: 'HSK 5',
    literalMeaning: 'Nằm trên đống củi gai, nếm mật đắng.',
    figurativeMeaning: 'Khắc cốt ghi tâm mối thù hoặc mục tiêu lớn, chịu đựng gian khổ đắng cay để tôi luyện ý chí phục thù và vươn tới thành công.',
    origin: 'Sử Ký - Việt Vương Câu Tiễn thế gia (史记·越王勾践世家)',
    story: `Thời Xuân Thu, nước Việt bị nước Ngô đánh bại thảm hại. Vua nước Việt là Câu Tiễn bị bắt làm tù binh, phải sang Ngô hầu hạ vua Ngô Phù Sai suốt ba năm trong cảnh nhục nhã ê chề. Câu Tiễn giả vờ cung kính, chịu đủ mọi tủi nhục để giữ lấy mạng sống, cuối cùng được tha cho về nước.

Trở về Việt quốc, để không bao giờ quên nỗi nhục mất nước, Câu Tiễn không ngủ trên đệm gấm mà trải củi gai ra nằm. Trong phòng ông treo một túi mật lợn đắng nghét, mỗi bữa ăn và sáng sớm thức dậy đều liếm một ngụm mật để nhắc nhở bản thân: "Ngươi đã quên nỗi nhục ở Cối Kê rồi sao?".

Suốt hai mươi năm ròng rã cùng dân cày cấy, chiêu hiền đãi sĩ và rèn luyện quân sĩ, nước Việt ngày càng hùng mạnh. Cuối cùng Câu Tiễn đem quân tiêu diệt nước Ngô, trả được mối thù xưa và trở thành vị bá chủ lẫy lừng cuối cùng thời Xuân Thu.`,
    moralLesson: 'Nghị lực kiên cường và tinh thần nhẫn nhục chịu đựng là phẩm chất vàng của người làm nên việc lớn. Nghịch cảnh hôm nay là chất xúc tác cho đỉnh cao ngày mai.',
    example: {
      chinese: '经过三年卧薪尝胆的刻苦复习，他终于考上了理想的大学。',
      pinyin: 'Jīngguò sān nián wòxīnchángdǎn de kèkǔ fùxí, tā zhōngyú kǎoshàng le lǐxiǎng de dàxué.',
      vietnamese: 'Trải qua ba năm nằm gai nếm mật ôn luyện khổ cực, bạn ấy cuối cùng đã thi đỗ vào trường đại học mơ ước.'
    },
    quiz: {
      question: 'Nhân vật lịch sử gắn liền với điển tích "卧薪尝胆" là ai?',
      options: [
        'Tần Thủy Hoàng',
        'Việt Vương Câu Tiễn',
        'Hạng Vũ',
        'Gia Cát Lượng'
      ],
      correctIndex: 1,
      explanation: 'Việt Vương Câu Tiễn đã nằm trên củi gai và nếm mật đắng suốt 20 năm để rèn ý chí phục thù nước Ngô.'
    }
  },
  {
    id: 'yu-gong-yi-shan',
    hanzi: '愚公移山',
    pinyin: 'yú gōng yí shān',
    sinoVietnamese: 'Ngu Công di sơn',
    category: 'y-chi',
    categoryLabel: 'Ý chí & Nghị lực',
    hskLevel: 'HSK 4',
    literalMeaning: 'Ông lão Ngu Công dời núi.',
    figurativeMeaning: 'Ý chí kiên định sắt đá, không quản gian nan cực nhọc, bền bỉ đến cùng ắt sẽ khắc phục được trở ngại lớn nhất.',
    origin: 'Liệt Tử - Thang Vấn (列子·汤问)',
    story: `Thuở xưa có một cụ già gần 90 tuổi tên là Ngu Công. Trước cửa nhà cụ có hai ngọn núi khổng lồ chắn lối đi là Thái Hành và Vương Ốc, khiến việc đi lại vô cùng trắc trở. Ngu Công bèn họp cả gia đình lại, quyết định cùng nhau bạt núi san đường.

Cả nhà già trẻ cùng nhau đào đất chuyển đá, gánh ra tận biển Bột Hải đổ. Một người hàng xóm tên Trí Sưu thấy vậy cười chê: "Ông già lụ khụ thế này, một ngọn cỏ còn nhổ không xong thì làm sao dời nổi hai quả núi lớn?".

Ngu Công ngẩng cao đầu đáp: "Dù ta có chết thì còn con ta, con ta chết còn có cháu ta, con con cháu cháu đời đời nối tiếp không dứt; còn ngọn núi này sẽ không cao thêm được nữa, lo gì không san phẳng!". Tấm lòng kiên trinh của Ngu Công làm động đến Thiên Đế, Thượng Đế liền sai hai vị thần lực lưỡng xuống cõng hai quả núi dời đi nơi khác.`,
    moralLesson: 'Chỉ cần có quyết tâm bền bỉ và không lùi bước trước khó khăn thì dù việc lớn đến đâu cũng có thể hoàn thành.',
    example: {
      chinese: '只要我们发扬愚公移山的精神，就一定能够攻克这个科研难题。',
      pinyin: 'Zhǐyào wǒmen fāyáng Yúgōngyíshān de jīngshén, jiù yídìng nénggòu gōngkè zhège kēyán nántí.',
      vietnamese: 'Chỉ cần chúng ta phát huy tinh thần Ngu Công dời núi thì nhất định sẽ chinh phục được bài toán nghiên cứu hóc búa này.'
    },
    quiz: {
      question: 'Câu trả lời của Ngu Công khi bị cười chê thể hiện triết lý gì?',
      options: [
        'Con người có thể nhờ thần linh giúp đỡ bất cứ lúc nào',
        'Ý chí kiên định và sự tiếp nối bền bỉ giữa các thế hệ sẽ vượt qua mọi trở ngại',
        'Núi đá sẽ tự biến mất theo thời gian',
        'Người già nên ở nhà nghỉ ngơi không nên làm việc nặng'
      ],
      correctIndex: 1,
      explanation: 'Ngu Công tin rằng sức người tiếp nối đời đời là vô hạn, trong khi ngọn núi là hữu hạn, thể hiện tinh thần kiên trì bất khuất.'
    }
  },
  {
    id: 'ba-miao-zhu-zhang',
    hanzi: '拔苗助长',
    pinyin: 'bá miáo zhù zhǎng',
    sinoVietnamese: 'Bạt miêu trợ trưởng',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 5',
    literalMeaning: 'Kéo cây mạ lên để giúp nó nhanh lớn.',
    figurativeMeaning: 'Nóng vội muốn thấy kết quả ngay, làm trái quy luật phát triển tự nhiên dẫn đến thất bại và hủy hoại sự việc.',
    origin: 'Mạnh Tử - Công Tôn Sửu thượng (孟子·公孙丑上)',
    story: `Thời Chiến Quốc, một người nông dân nước Tống luôn cảm thấy lúa mạ nhà mình mọc quá chậm chạp. Ngày nào anh ta cũng ra đồng đo từng cây rồi sốt ruột thở vắn than dài.

Một hôm, anh ta nảy ra một "sáng kiến": đi dọc từng luống cày và túm lấy từng ngọn mạ kéo nhếch lên một đoạn. Làm quần quật cả ngày mệt đứt hơi, anh ta về nhà hồ hởi khoe với vợ con: "Hôm nay ta mệt quá, nhưng nhờ công sức của ta mà toàn bộ lúa trên đồng đều đã cao hơn một đoạn rõ rệt!".

Người con trai nghe thấy bất an, vội vàng chạy ra đồng xem sao. Than ôi, toàn bộ cây mạ vì bị đứt rễ khỏi lòng đất nên dưới ánh nắng gay gắt đều đã khô héo rũ rượi và chết sạch.`,
    moralLesson: 'Mọi sự vật đều phát triển theo quy luật khách quan. Nóng vội đốt cháy giai đoạn sẽ chỉ rước lấy kết cục thảm hại.',
    example: {
      chinese: '教育孩子要尊重成长规律，揠苗助长只会适得其反。',
      pinyin: 'Jiàoyù háizi yào zūnzhòng chéngzhǎng guīlǜ, yàmiáozhùzhǎng zhǐ huì shìdéqífǎn.',
      vietnamese: 'Giáo dục con trẻ phải tôn trọng quy luật phát triển, kéo mạ giúp lớn chỉ khiến phản tác dụng.'
    },
    quiz: {
      question: 'Tại sao ruộng mạ của người nông dân lại bị héo chết?',
      options: [
        'Vì bị sâu bọ cắn phá',
        'Vì bị hạn hán thiếu nước tưới',
        'Vì bị kéo lên làm đứt rễ tiếp xúc với đất',
        'Vì người con ra đồng giẫm nát'
      ],
      correctIndex: 2,
      explanation: 'Vì muốn cây lớn nhanh mà người nông dân đã kéo bật rễ mạ lên, khiến cây không hút được chất dinh dưỡng và khô héo.'
    }
  },
  {
    id: 'yan-er-dao-ling',
    hanzi: '掩耳盗铃',
    pinyin: 'yǎn ěr dào líng',
    sinoVietnamese: 'Yểm nhĩ đạo linh',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 5',
    literalMeaning: 'Bịt tai đi trộm chuông.',
    figurativeMeaning: 'Tự lừa dối chính mình; nghĩ rằng mình không thấy, không nghe thì người khác cũng chẳng hề hay biết.',
    origin: 'Lã Thị Xuân Thu - Tự tri (吕氏春秋·自知)',
    story: `Thời Xuân Thu, khi nhà họ Phạm bị suy sụp, có một tên trộm lẻn vào sân nhà tìm đồ quý. Hắn phát hiện một chiếc chuông đồng lớn chạm khắc hoa văn tinh xảo. Hắn mừng thầm muốn vác về, nhưng chiếc chuông quá nặng không nhấc nổi.

Hắn bèn lấy một cây búa tạ to định đập vỡ chiếc chuông thành từng mảnh nhỏ để dễ mang đi. Vừa vung búa đập một nhát: "Keng!" — chiếc chuông phát ra âm thanh vang dội rền vang khắp ngõ xóm.

Tên trộm hoảng hốt sợ người ngoài nghe thấy bắt quả tang. Hắn liền nghĩ ra một cách "thông minh": lấy giẻ nhét thật chặt hai lỗ tai của mình lại! Hắn tự nhủ: "Tai ta bịt kín rồi thì chẳng nghe thấy gì nữa, vậy thì thiên hạ cũng chẳng ai nghe thấy đâu!". Hắn thản nhiên vung búa đập tiếp, tiếng chuông vang xa khiến dân làng kéo đến tóm gọn hắn tại trận.`,
    moralLesson: 'Chân lý và sự thật khách quan luôn tồn tại dù ta có cố tình phớt lờ nó hay không. Tự lừa mình dối người chỉ là hành vi ngu ngốc nhất.',
    example: {
      chinese: '把问题隐瞒起来不解决，无异于掩耳盗铃。',
      pinyin: 'Bǎ wèntí yǐnmán qǐlái bù jiějué, wúyìyú yǎn’ěrdàolíng.',
      vietnamese: 'Che giấu vấn đề mà không giải quyết thì chẳng khác nào bịt tai trộm chuông.'
    },
    quiz: {
      question: 'Sai lầm ngớ ngẩn nhất của tên trộm trong câu chuyện là gì?',
      options: [
        'Chọn chiếc chuông đồng quá nặng',
        'Mang nhầm chiếc búa quá nhỏ',
        'Tưởng rằng bịt tai mình thì người khác cũng không nghe thấy tiếng chuông',
        'Không rủ thêm đồng bọn đi cùng'
      ],
      correctIndex: 2,
      explanation: 'Tên trộm ngây thơ cho rằng tai mình không nghe thấy âm thanh thì người xung quanh cũng sẽ không nghe thấy.'
    }
  },
  {
    id: 'mang-ren-mo-xiang',
    hanzi: '盲人摸象',
    pinyin: 'máng rén mō xiàng',
    sinoVietnamese: 'Manh nhân mạc tượng',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 5',
    literalMeaning: 'Người mù sờ voi.',
    figurativeMeaning: 'Nhìn nhận sự vật một cách phiến diện, lấy bộ phận cục bộ thay thế cho tổng thể toàn diện rồi tranh cãi vô bổ.',
    origin: 'Đại Bát Niết Bàn Kinh (大般涅槃经)',
    story: `Một vị quốc vương ra lệnh dẫn một con voi khổng lồ đến và mời sáu người khiếm thị từ nhỏ đến để "xem" voi là con vật như thế nào.

Người thứ nhất sờ vào ngà voi liền nói: "Voi giống hệt một củ cà rốt khổng lồ rắn chắc!". Người thứ hai sờ trúng tai voi cãi lại: "Sai rồi, con voi giống hệt chiếc quạt nan!". Người thứ ba sờ vào chân voi phản bác: "Hai người đều bậy cả, voi rõ ràng là một chiếc cột nhà tròn xoe!". Người thứ tư sờ vào bụng voi bảo: "Nó là một bức tường dày!". Người thứ năm sờ vào đuôi voi kêu lên: "Voi giống hệt một sợi dây thừng!". Người cuối cùng sờ trúng vòi voi thì khẳng định voi đích thị là một con mãng xà to.

Sáu người ai cũng đinh ninh mình đúng, cãi nhau đỏ mặt tía tai suýt nữa xông vào đánh nhau, khiến nhà vua và quần thần cười không ngớt.`,
    moralLesson: 'Muốn hiểu thấu một vấn đề, phải quan sát toàn diện nhiều góc độ. Đừng vội phán xét khi chỉ mới nhìn thấy một mảnh ghép nhỏ của bức tranh.',
    example: {
      chinese: '看事情要看全面，不能盲人摸象，只看到片面就下结论。',
      pinyin: 'Kàn shìqing yào kàn quánmiàn, bù néng mángrénmōxiàng, zhǐ kàndào piànmiàn jiù xià jiélùn.',
      vietnamese: 'Nhìn nhận sự việc cần bao quát toàn diện, không thể như thầy bói xem voi chỉ thấy một mặt đã vội kết luận.'
    },
    quiz: {
      question: 'Thành ngữ "盲人摸象" khuyên chúng ta điều gì khi đánh giá sự việc?',
      options: [
        'Nên lắng nghe người lớn tuổi',
        'Phải quan sát toàn diện, tránh phiến diện cục bộ',
        'Nên đi sở thú thường xuyên hơn',
        'Không nên tranh luận với người khác'
      ],
      correctIndex: 1,
      explanation: 'Thành ngữ nhắc nhở tránh cách nhìn nhận phiến diện, cắt xén, cần có cái nhìn tổng thể toàn diện khách quan.'
    }
  },
  {
    id: 'jing-di-zhi-wa',
    hanzi: '井底之蛙',
    pinyin: 'jǐng dǐ zhī wā',
    sinoVietnamese: 'Tỉnh để chi oa',
    category: 'ngu-ngon',
    categoryLabel: 'Ngụ ngôn trí tuệ',
    hskLevel: 'HSK 4',
    literalMeaning: 'Con ếch dưới đáy giếng.',
    figurativeMeaning: 'Chỉ những kẻ tầm nhìn hạn hẹp, hiểu biết nông cạn nhưng lại tự cao tự đại, coi trời bằng vung.',
    origin: 'Trang Tử - Thu Thủy (庄子·秋水)',
    story: `Có một con ếch sống lâu năm trong một cái giếng cạn bỏ hoang. Nó sung sướng nhảy nhót trong lòng giếng, mệt thì nằm nghỉ trong khe gạch, ngước mắt lên thấy bầu trời tròn bằng cái vung nồi. Nó tự mãn nghĩ rằng mình là chúa tể một cõi hạnh phúc nhất thế gian.

Một hôm, có một con rùa lớn từ biển Đông bò ngang qua miệng giếng. Ếch bèn huênh hoang khoe khoang cuộc sống tuyệt vời dưới đáy giếng và mời rùa nhảy xuống chơi.

Rùa biển thử bước chân vào nhưng chân chưa lọt đã kẹt cứng. Rùa lùi lại và kể cho ếch nghe về biển Đông: "Biển lớn nghìn dặm không kể xiết, sâu muôn trượng không đo nổi. Dù gặp hạn hán ngàn năm nước cũng không cạn bớt, lũ lụt vạn năm nước cũng không dâng đầy. Đó mới là niềm vui vô tận của chốn đại dương!". Con ếch nghe xong ngẩn ngơ chết lặng, bấy giờ mới biết thế giới bên ngoài bao la vô tận đến nhường nào.`,
    moralLesson: 'Thế giới bao la rộng lớn, tri thức là biển cả vô bờ. Hãy luôn giữ tinh thần khiêm nhường học hỏi, đừng tự giam mình trong cái giếng hạn hẹp của sự tự mãn.',
    example: {
      chinese: '出国留学后，他才发现自己以前不过是井底之蛙。',
      pinyin: 'Chūguó liúxué hòu, tā cái fāxiàn zìjǐ yǐqián búguò shì jǐngdǐzhīwā.',
      vietnamese: 'Sau khi đi du học, bạn ấy mới nhận ra bản thân trước kia chẳng qua chỉ là ếch ngồi đáy giếng.'
    },
    quiz: {
      question: 'Sau khi nghe rùa biển miêu tả về biển Đông, con ếch có phản ứng gì?',
      options: [
        'Vui mừng nhảy ra ngoài ngay lập tức',
        'Tức giận đuổi rùa biển đi',
        'Kinh ngạc sững sờ, nhận ra sự nhỏ bé hạn hẹp của mình',
        'Không tin và tiếp tục cười nhạo rùa biển'
      ],
      correctIndex: 2,
      explanation: 'Ếch bàng hoàng nhận ra bấy lâu nay tầm nhìn của mình quá đỗi chật hẹp trước sự hùng vĩ bao la của đại dương.'
    }
  },
  {
    id: 'wang-mei-zhi-ke',
    hanzi: '望梅止渴',
    pinyin: 'wàng méi zhǐ kě',
    sinoVietnamese: 'Vọng mai chỉ khát',
    category: 'chien-quoc',
    categoryLabel: 'Chiến quốc mưu lược',
    hskLevel: 'HSK 5',
    literalMeaning: 'Trông thấy quả mơ chua mà đỡ khát nước.',
    figurativeMeaning: 'Dùng ảo tưởng hoặc lời động viên tinh thần để an ủi bản thân hoặc khích lệ người khác vượt qua hoàn cảnh ngặt nghèo trước mắt.',
    origin: 'Thế Thuyết Tân Ngữ - Giả quyệt (世说新语·假谲)',
    story: `Thời Tam Quốc, Tào Tháo dẫn quân đi viễn chinh qua một vùng đồng bằng cằn cỗi nắng như thiêu như đốt. Binh lính hành quân nhiều ngày đã cạn kiệt nguồn nước dự trữ, ai nấy cổ họng khô khốc, mệt lả không thể bước tiếp, nguy cơ toàn quân tan rã.

Tào Tháo thấy vậy liền phi ngựa lên gò đất cao, đưa roi chỉ về phía trước dõng dạc hô lớn: "Các binh sĩ, phía trước không xa có một rừng mơ bạt ngàn, quả mơ to tròn mọng nước, chua ngọt vô cùng, tha hồ hái ăn giải khát!".

Quân sĩ nghe thấy chữ "mơ chua", trong miệng ai nấy đều tự động ứa nước miếng ra, tinh thần phấn chấn hẳn lên, quên đi cơn khát khô cháy cổ họng. Nhờ vậy, đoàn quân dốc toàn lực tiến về phía trước và chẳng mấy chốc đã tìm thấy một con suối nước trong lành.`,
    moralLesson: 'Sức mạnh tinh thần và nghệ thuật khích lệ tâm lý có thể tạo ra động lực phi thường giúp con người vượt qua nghịch cảnh tăm tối nhất.',
    example: {
      chinese: '虽然现在买不起房子，但看看房产宣传册也算望梅止渴吧。',
      pinyin: 'Suīrán xiànzài mǎi bù qǐ fángzi, dàn kànkan fángchǎn xuānchuáncè yě suàn wàngméizhǐkě ba.',
      vietnamese: 'Dẫu bây giờ chưa đủ tiền mua nhà, nhưng ngắm tờ rơi giới thiệu cũng coi như ngắm mơ đỡ khát vậy.'
    },
    quiz: {
      question: 'Tào Tháo đã dùng mưu lược gì để giúp quân lính tiếp tục hành quân?',
      options: [
        'Ra lệnh xử phạt binh lính đi chậm',
        'Nói dối phía trước có rừng mơ chua mọng nước để kích thích tuyến nước bọt của quân sĩ',
        'Đào giếng ngay giữa sa mạc',
        'Cho quân lính quay về doanh trại'
      ],
      correctIndex: 1,
      explanation: 'Tào Tháo đã khéo léo dùng tâm lý học: gợi nhớ quả mơ chua làm quân lính tự ứa nước bọt, giảm cảm giác khát khô để tiếp tục bước.'
    }
  },
  {
    id: 'po-fu-chen-zhou',
    hanzi: '破釜沉舟',
    pinyin: 'pò fǔ chén zhōu',
    sinoVietnamese: 'Phá phủ trầm châu',
    category: 'chien-quoc',
    categoryLabel: 'Chiến quốc mưu lược',
    hskLevel: 'HSK 5',
    literalMeaning: 'Đập vỡ nồi niêu, đánh chìm thuyền bè.',
    figurativeMeaning: 'Quyết tâm đến cùng, cắt đứt mọi đường lui để dốc toàn lực chiến đấu một trận sống mái giành thắng lợi vẻ vang.',
    origin: 'Sử Ký - Hạng Vũ bản kỷ (史记·项羽本纪)',
    story: `Cuối đời nhà Tần, tướng Tần là Chương Hàm vây hãm Cự Lộc vô cùng nguy cấp. Tây Sở Bá Vương Hạng Vũ dẫn quân cứu viện. Sau khi đưa quân vượt qua sông Chương Thủy, Hạng Vũ lập tức hạ lệnh: đánh chìm toàn bộ thuyền bè, đập vỡ hết nồi niêu xoong chảo, đốt sạch các lều trại và mỗi người chỉ được phát lương khô ăn trong ba ngày.

Hạng Vũ tuyên bố với ba quân: "Chúng ta không còn thuyền để quay về, không còn nồi để nấu cơm! Chỉ có tiến lên đánh bại quân Tần mới có đường sống, bằng không tất cả sẽ bỏ mạng tại đây!".

Binh sĩ thấy không còn đường lui, ai nấy dũng cảm phi thường, lấy một địch mười. Quân Sở hăng máu xung trận, chín lần giao chiến đều toàn thắng vang dội, tiêu diệt hoàn toàn quân chủ lực nhà Tần trong trận Cự Lộc chấn động lịch sử.`,
    moralLesson: 'Khi bị dồn vào chân tường không còn đường lui, ý chí sinh tồn và sự quyết tử sẽ bộc phát sức mạnh tiềm tàng vô địch.',
    example: {
      chinese: '为了这次创业，他卖掉了所有资产，抱定了破釜沉舟的决心。',
      pinyin: 'Wèile zhè cì chuàngyè, tā màidiào le suǒyǒu zīchǎn, bàodìng le pòfǔchénzhōu de juéxīn.',
      vietnamese: 'Để khởi nghiệp lần này, anh ấy đã bán sạch tài sản, ôm vững quyết tâm đập nồi dìm thuyền.'
    },
    quiz: {
      question: 'Hành động "đập vỡ nồi niêu, đánh chìm thuyền bè" của Hạng Vũ mang mục đích gì?',
      options: [
        'Tiêu hủy quân trang cho nhẹ người khi hành quân',
        'Cắt đứt mọi đường lui, khơi dậy tinh thần quyết tử của binh sĩ',
        'Bảo đảm bí mật quân sự trước quân Tần',
        'Tiết kiệm lương thực dự trữ'
      ],
      correctIndex: 1,
      explanation: 'Hạng Vũ muốn binh sĩ hiểu rõ rằng chỉ có chiến thắng mới sống sót trở về, từ đó phát huy dũng khí phi thường.'
    }
  },
  {
    id: 'si-mian-chu-ge',
    hanzi: '四面楚歌',
    pinyin: 'sì miàn chǔ gē',
    sinoVietnamese: 'Tứ diện Sở ca',
    category: 'chien-quoc',
    categoryLabel: 'Chiến quốc mưu lược',
    hskLevel: 'HSK 5',
    literalMeaning: 'Bốn bề vang lên khúc ca nước Sở.',
    figurativeMeaning: 'Rơi vào hoàn cảnh bốn bề thọ địch, cô lập không nơi nương tựa, tuyệt vọng cùng đường.',
    origin: 'Sử Ký - Hạng Vũ bản kỷ (史记·项羽本纪)',
    story: `Thời Hán Sở tranh hùng, quân Hán do Lưu Bang và Hàn Tín chỉ huy đã bao vây chặt chẽ quân đội Tây Sở của Hạng Vũ tại Cai Hạ. Quân Sở lúc này lương thực cạn kiệt, binh lính thương vong vô số, sĩ khí rệu rã.

Để triệt tiêu hoàn toàn ý chí chiến đấu của đối phương, trong đêm tối tĩnh mịch, Trương Lương đã bày kế cho quân Hán đồng loạt cất cao những bài dân ca êm dịu, da diết của quê hương nước Sở.

Tiếng hát quê hương vang vọng bốn bề khiến Hạng Vũ giật mình kinh hãi: "Chẳng lẽ Lưu Bang đã chiếm trọn đất Sở rồi sao? Sao quân Hán lại có nhiều người Sở đến thế?". Toàn bộ quân lính Sở nghe tiếng ca đều xúc động rơi nước mắt nhớ cha mẹ vợ con, lũ lượt bỏ trốn trong đêm. Hạng Vũ tuyệt vọng uống chén rượu biệt ly cùng Ngu Cơ rồi dẫn tàn quân phá vây tự vẫn bên bờ sông Ô Giang.`,
    moralLesson: 'Chiến tranh tâm lý và sự đoàn kết lòng người có sức công phá mãnh liệt hơn ngàn vạn mũi gươm giáo.',
    example: {
      chinese: '公司面临多家巨头的联合打压，已经陷入了四面楚歌的境地。',
      pinyin: 'Gōngsī miànlín duō jiā jùtóu de liánhé dǎyā, yǐjīng xiànrù le sìmiànchǔgē de jìngdì.',
      vietnamese: 'Công ty đang đứng trước sự chèn ép của hàng loạt ông lớn, đã rơi vào thế bốn bề thọ địch.'
    },
    quiz: {
      question: 'Quân Hán cất tiếng hát điệu ca nước Sở nhằm mục đích gì?',
      options: [
        'Ăn mừng chiến thắng trước ngày quyết chiến',
        'Đánh vào tâm lý nhớ quê nhà, làm tan rã ý chí chiến đấu của quân Sở',
        'Mời gọi quân Sở sang tham dự tiệc hòa bình',
        'Báo hiệu giờ tấn công cho các cánh quân'
      ],
      correctIndex: 1,
      explanation: 'Khúc hát quê hương da diết đã chạm vào nỗi nhớ nhà của quân Sở, khiến họ tan vỡ tinh thần chiến đấu và bỏ trốn.'
    }
  },
  {
    id: 'tie-chu-cheng-zhen',
    hanzi: '铁杵成针',
    pinyin: 'tiě chǔ chéng zhēn',
    sinoVietnamese: 'Thiết chử thành châm',
    category: 'y-chi',
    categoryLabel: 'Ý chí & Nghị lực',
    hskLevel: 'HSK 4',
    literalMeaning: 'Thanh sắt mài thành cây kim.',
    figurativeMeaning: 'Chỉ cần kiên trì, nhẫn nại và không ngừng nỗ lực thì việc khó khăn đến đâu cũng sẽ gặt hái thành công ("Có công mài sắt có ngày nên kim").',
    origin: 'Phương Dư Thắng Lãm - Mi Châu (方舆胜览·眉州)',
    story: `Thi tiên Lý Bạch thuở nhỏ rất thông minh nhưng lại ham chơi, lười biếng, thường xuyên trốn học đi dạo chơi ngoài đồng.

Một hôm, Lý Bạch đang thơ thẩn bên bờ suối thì nhìn thấy một bà lão tóc bạc phơ đang cặm cụi mài một thanh xà beng sắt to tướng trên một tảng đá lớn ven suối. Cậu bé lấy làm lạ bèn bước lại gần hỏi: "Bà ơi, bà mài thanh sắt to này để làm gì vậy ạ?".

Bà lão ngước lên hiền từ mỉm cười đáp: "Bà mài thanh sắt này để làm thành cây kim may áo!". Lý Bạch bật cười: "Thanh sắt to thế này, biết bao giờ mới mài thành cây kim nhỏ xíu được?". Bà lão kiên định bảo: "Mỗi ngày bà mài một chút thì thanh sắt sẽ mòn đi một chút. Bà mài không ngừng nghỉ thì sợ gì không có ngày thành kim!".

Lời nói giản dị của bà lão như hồi chuông thức tỉnh Lý Bạch. Cậu xấu hổ trở về trường, miệt mài dùi mài kinh sử và sau này trở thành một trong những nhà thơ vĩ đại nhất trong lịch sử Trung Hoa.`,
    moralLesson: 'Không có con đường tắt dẫn đến vinh quang. Sự kiên trì bền bỉ mỗi ngày là chìa khóa duy nhất biến những điều bất khả thi thành hiện thực.',
    example: {
      chinese: '只要有铁杵磨成针的毅力，任何外语都是能够学好的。',
      pinyin: 'Zhǐyào yǒu tiěchǔmóchéngzhēn de yìlì, rènhé wàiyǔ dōu shì nénggòu xué hǎo de.',
      vietnamese: 'Chỉ cần có nghị lực mài sắt nên kim thì bất kỳ ngoại ngữ nào cũng có thể học giỏi.'
    },
    quiz: {
      question: 'Nhân vật văn học nổi tiếng nào đã được thức tỉnh từ câu chuyện mài sắt thành kim?',
      options: [
        'Đỗ Phủ',
        'Lý Bạch',
        'Bạch Cư Dị',
        'Tô Đông Pha'
      ],
      correctIndex: 1,
      explanation: 'Thi tiên Lý Bạch thời niên thiếu sau khi chứng kiến bà lão mài sắt đã thức tỉnh và dốc lòng học tập.'
    }
  },
  {
    id: 'chi-zhi-yi-heng',
    hanzi: '持之以恒',
    pinyin: 'chí zhī yǐ héng',
    sinoVietnamese: 'Trì chi dĩ hằng',
    category: 'y-chi',
    categoryLabel: 'Ý chí & Nghị lực',
    hskLevel: 'HSK 4',
    literalMeaning: 'Nắm giữ lấy một cách bền bỉ lâu dài.',
    figurativeMeaning: 'Kiên trì đến cùng, duy trì sự nỗ lực không ngừng nghỉ và không bỏ cuộc giữa chừng.',
    origin: 'Tăng Quốc Phiên gia thư (曾国藩家书)',
    story: `Danh thần Tăng Quốc Phiên thời nhà Thanh thuở nhỏ tư chất không hề thông minh đĩnh ngộ, thậm chí học hành còn chậm hơn bạn bè đồng trang lứa. Có một câu chuyện kể rằng, một đêm nọ Tăng Quốc Phiên ngồi học bài thơ chỉ vỏn vẹn vài chục chữ, đọc đi đọc lại cả trăm lần mà vẫn chưa thuộc lòng.

Lúc ấy có một tên trộm đang nấp trên xà nhà đợi cậu ngủ để nhảy xuống ăn trộm đồ. Tên trộm đợi mãi, đợi mãi đến nửa đêm mà Tăng Quốc Phiên vẫn ngồi lẩm bẩm đọc bài. Quá tức giận vì mất thời gian, tên trộm nhảy bổ xuống sàn quát lớn: "Tư chất chậm chạp thế này thì đọc sách làm trò trống gì!". Nói rồi tên trộm đọc làu làu bài thơ một mạch rồi khinh bỉ bỏ đi.

Tăng Quốc Phiên không hề nản lòng trước sự chế giễu đó, trái lại càng nhận thức rõ hơn về sự cần cù bù thông minh. Ông kiên trì học tập suốt đời theo phương châm "Mỗi ngày tiến một bước, ngày nào cũng giữ vững nếp đó". Nhờ tinh thần "trì chi dĩ hằng" phi thường, ông đã trở thành một vị đại thần lỗi lạc bậc nhất thời cận đại.`,
    moralLesson: 'Thiên tài chỉ là 1% cảm hứng, 99% còn lại là mồ hôi công sức. Kiên trì bền bỉ là phẩm chất quan trọng hơn cả trí thông minh bẩm sinh.',
    example: {
      chinese: '学习中文需要持之以恒，每天练习半小时胜过周末突击一天。',
      pinyin: 'Xuéxí zhōngwén xūyào chízhīyǐhéng, měitiān liànxí bàn xiǎoshí shèngguò zhōumò tūjī yì tiān.',
      vietnamese: 'Học tiếng Trung cần kiên trì bền bỉ, mỗi ngày luyện 30 phút tốt hơn nhiều việc dồn lại học một ngày cuối tuần.'
    },
    quiz: {
      question: 'Phẩm chất nào được nhấn mạnh qua thành ngữ "持之以恒"?',
      options: [
        'Sự nhanh nhạy, cơ hội',
        'Lòng kiên trì bền bỉ, không bỏ cuộc',
        'Sự giàu sang phú quý',
        'Tính toán mưu mẹo khôn khéo'
      ],
      correctIndex: 1,
      explanation: '"持之以恒" nhấn mạnh vào tính kiên trì, duy trì đều đặn hành động tích cực cho đến khi đạt kết quả.'
    }
  },
  {
    id: 'wen-gu-zhi-xin',
    hanzi: '温故知新',
    pinyin: 'wēn gù zhī xīn',
    sinoVietnamese: 'Ôn cố tri tân',
    category: 'nhan-sinh',
    categoryLabel: 'Nhân sinh & Xử thế',
    hskLevel: 'HSK 4',
    literalMeaning: 'Ôn lại điều cũ để thấu hiểu điều mới.',
    figurativeMeaning: 'Thường xuyên ôn tập những kiến thức và bài học trong quá khứ, từ đó đúc kết và mở mang thêm những hiểu biết và nhận thức mới mẻ.',
    origin: 'Luận Ngữ - Vi Chính (论语·为政)',
    story: `Khổng Tử từng dạy học trò rằng: "Ôn cố nhi tri tân, khả dĩ vi sư hĩ" (Ôn lại cái cũ mà nhận biết được cái mới, thì có thể làm thầy người khác vậy).

Theo quan điểm Nho gia, tri thức không phải là thứ học vẹt một lần là xong. Khi chúng ta đọc lại một cuốn sách cũ sau vài năm trải nghiệm đời sống, chúng ta sẽ nhìn thấy những tầng ý nghĩa sâu xa mà trước đây ta chưa từng chạm tới.

Quá trình ôn tập không đơn thuần là lặp lại máy móc, mà là sự lắng đọng, liên kết giữa kinh nghiệm cũ và thử thách mới, biến kiến thức vay mượn thành trí tuệ nội tại của chính mình.`,
    moralLesson: 'Học tập là một vòng xoắn ốc đi lên. Đừng coi thường những kiến thức căn bản đã học; ôn lại cái cũ chính là bệ phóng vững chắc nhất để tiếp thu những điều tân tiến.',
    example: {
      chinese: '复习不是简单的重复，我们要做到温故知新。',
      pinyin: 'Fùxí bú shì jiǎndān de chóngfù, wǒmen yào zuòdào wēngùzhīxīn.',
      vietnamese: 'Ôn tập không phải là lặp lại đơn thuần, chúng ta cần đạt tới mức ôn cũ hiểu mới.'
    },
    quiz: {
      question: 'Thành ngữ "温故知新" bắt nguồn từ tác phẩm kinh điển nào?',
      options: [
        'Đạo Đức Kinh',
        'Luận Ngữ của Khổng Tử',
        'Binh Pháp Tôn Tử',
        'Kinh Thi'
      ],
      correctIndex: 1,
      explanation: 'Câu nói trích từ thiên Vi Chính trong sách Luận Ngữ, ghi lại lời răn dạy của Vạn Thế Sư Biểu Khổng Tử.'
    }
  },
  {
    id: 'qian-yi-mo-hua',
    hanzi: '潜移默化',
    pinyin: 'qián yí mò huà',
    sinoVietnamese: 'Tiềm di mặc hóa',
    category: 'nhan-sinh',
    categoryLabel: 'Nhân sinh & Xử thế',
    hskLevel: 'HSK 5',
    literalMeaning: 'Lặng lẽ chuyển dời, thầm lặng biến đổi.',
    figurativeMeaning: 'Sự tác động, cảm hóa sâu sắc và tự nhiên của môi trường, văn hóa hoặc tính cách lâu ngày khiến con người thay đổi mà không hề hay biết.',
    origin: 'Bắc Tề Thư - Nhan Chi Thôi truyện (北齐书·颜之推传)',
    story: `Học giả Nhan Chi Thôi nổi tiếng thời Bắc Tề từng dạy con cháu trong cuốn gia huấn kinh điển: Con người sinh ra chịu ảnh hưởng cực kỳ lớn từ môi trường xung quanh. Giống như việc đi trong sương sớm, tuy không thấy mưa rơi ướt áo nhưng đi lâu thì áo tự nhiên thấm đẫm hơi sương lạnh.

Nếu chúng ta thường xuyên ở gần những người đoan chính, ham học hỏi và trung hậu, thì những cử chỉ, lời ăn tiếng nói tốt đẹp của họ sẽ thấm dần vào tiềm thức của ta như mưa dầm thấm đất.

Ngược lại, nếu kết giao với những kẻ buông tuồng, lười biếng thì tâm tính cũng dần bị hoen ố lúc nào không hay. Đó chính là sức mạnh thầm lặng của "tiềm di mặc hóa".`,
    moralLesson: 'Hãy cẩn trọng lựa chọn môi trường sống, bạn bè và nguồn thông tin ta tiếp nhận hàng ngày, vì chúng đang âm thầm định hình nhân cách và tương lai của bạn.',
    example: {
      chinese: '阅读优秀的中英文经典名著，能够潜移默化地提升一个人的修养。',
      pinyin: 'Yuèdú yōuxiù de zhōng-yīngwén jīngdiǎn míngzhù, nénggòu qiányímòhuà de tíshēng yí gè rén de xiūyǎng.',
      vietnamese: 'Đọc những danh tác kinh điển ưu tú có thể bồi dưỡng và nâng tầm phẩm giá của con người một cách thầm lặng.'
    },
    quiz: {
      question: 'Thành ngữ "潜移默化" diễn tả kiểu ảnh hưởng như thế nào?',
      options: [
        'Ảnh hưởng dữ dội, tức thời bằng bạo lực',
        'Ảnh hưởng thầm lặng, từ từ ngấm sâu mà bản thân khó nhận biết',
        'Ảnh hưởng giả tạo, không có thật',
        'Ảnh hưởng chỉ diễn ra trong giấc mơ'
      ],
      correctIndex: 1,
      explanation: '"潜" là ngầm ẩn, "默" là im lặng; câu này chỉ sự biến chuyển âm thầm, ngấm dần theo thời gian.'
    }
  },
  {
    id: 'xun-xu-jian-jin',
    hanzi: '循序渐进',
    pinyin: 'xún xù jiàn jìn',
    sinoVietnamese: 'Tuần tự tiệm tiến',
    category: 'nhan-sinh',
    categoryLabel: 'Nhân sinh & Xử thế',
    hskLevel: 'HSK 4',
    literalMeaning: 'Lần theo thứ tự mà tiến lên từng bước.',
    figurativeMeaning: 'Học tập hoặc làm việc phải có kế hoạch bài bản, tiến từng bước vững chắc từ dễ đến khó, không nóng vội đốt cháy giai đoạn.',
    origin: 'Chu Tử Ngữ Loại (朱子语类)',
    story: `Đại triết gia Chu Hi đời Tống khi đàm đạo với các môn sinh về phương pháp học tập đã đúc kết: "Người học sách phải tuần tự tiệm tiến, đọc kỹ tinh tường".

Ông ví việc học tập như việc leo lên một ngọn núi cao ngàn trượng: Muốn lên đến đỉnh non cao thì phải bắt đầu từ bậc thềm thấp nhất dưới chân núi. Người nào mới leo được ba bước đã muốn nhảy vọt lên đỉnh thì ắt sẽ hụt chân ngã gãy xương.

Người học từ vựng và ngữ pháp cũng vậy, nắm chắc từng chữ căn bản, luyện chuẩn từng thanh điệu rồi mới đọc đoạn văn dài. Từng bước vững vàng là con đường nhanh nhất để tới đích.`,
    moralLesson: 'Đừng sốt ruột vì những bước đi nhỏ bé ban đầu. Tích lũy đều đặn theo lộ trình khoa học sẽ tạo nên bước nhảy vọt vĩ đại.',
    example: {
      chinese: '学习汉语一定要循序渐进，打牢拼音和汉字基础。',
      pinyin: 'Xuéxí hànyǔ yídìng yào xúnxùjiànjìn, dǎ láo pīnyīn hé hànzì jīchǔ.',
      vietnamese: 'Học tiếng Hán nhất định phải tuần tự từng bước, đặt nền móng thật vững về bính âm và chữ Hán.'
    },
    quiz: {
      question: 'Phương châm học tập nào đúng với tinh thần "循序渐进"?',
      options: [
        'Học ngày học đêm không cần ngủ',
        'Đi từng bước chắc chắn từ dễ đến khó theo lộ trình bài bản',
        'Bỏ qua kiến thức cơ bản để học thẳng nội dung nâng cao',
        'Chỉ học những gì mình thích'
      ],
      correctIndex: 1,
      explanation: '"循序渐进" khuyên chúng ta tuân thủ quy trình, đi từng bước từ cơ bản đến chuyên sâu.'
    }
  },
  {
    id: 'yin-shui-si-yuan',
    hanzi: '饮水思源',
    pinyin: 'yǐn shuǐ sī yuán',
    sinoVietnamese: 'Ẩm thủy tư nguyên',
    category: 'nhan-sinh',
    categoryLabel: 'Nhân sinh & Xử thế',
    hskLevel: 'HSK 4',
    literalMeaning: 'Uống nước nhớ nguồn.',
    figurativeMeaning: 'Khi được hưởng thụ thành quả hạnh phúc, phải luôn ghi nhớ công ơn của những người đã vun đắp, hy sinh gây dựng nền tảng ban đầu.',
    origin: 'Dữu Tín - Trưng Điệu khúc (庾信·征调曲)',
    story: `Văn nhân nổi tiếng Dữu Tín thời Nam Bắc Triều trong bài từ bất hủ đã viết câu: "Lạc kỳ hoa giả phán kỳ thực, ẩm kỳ lưu giả hoài kỳ nguyên" (Người vui vì hoa thì mong ngóng quả ngọt, kẻ uống nước dưới dòng thì nhớ thương đến nguồn suối trên cao).

Truyền thống Á Đông từ ngàn đời luôn coi trọng đạo lý tri ân báo ân. Dù một người có bay cao bay xa đến chân trời góc bể, làm quan to hay doanh nhân phát đạt thì cũng không bao giờ được phép lãng quên mảnh đất quê hương, công ơn dưỡng dục sinh thành của cha mẹ và sự chỉ bảo ân cần của người thầy.`,
    moralLesson: 'Lòng biết ơn là cội nguồn của mọi đạo đức cao đẹp. Người biết tri ân luôn nhận được sự tin yêu và chúc phúc của muôn người.',
    example: {
      chinese: '我们在享受幸福生活的同时，要饮水思源，感谢先辈的奉献。',
      pinyin: 'Wǒmen zài xiǎngshòu xìngfú shēnghuó de tóngshí, yào yǐnshuǐsīyuán, gǎnxiè xiānbèi de fèngxiàn.',
      vietnamese: 'Trong khi tận hưởng cuộc sống hạnh phúc, chúng ta phải uống nước nhớ nguồn, cảm tạ sự hy sinh cống hiến của tiền nhân.'
    },
    quiz: {
      question: 'Thành ngữ tiếng Việt tương đương với "饮水思源" là gì?',
      options: [
        'Có công mài sắt có ngày nên kim',
        'Uống nước nhớ nguồn',
        'Nằm gai nếm mật',
        'Cáo mượn oai hùm'
      ],
      correctIndex: 1,
      explanation: '"饮水思源" nghĩa đen là uống nước nhớ nguồn suối, tương đồng hoàn toàn với câu tục ngữ "Uống nước nhớ nguồn" của Việt Nam.'
    }
  },
  {
    id: 'zi-qiang-bu-xi',
    hanzi: '自强不息',
    pinyin: 'zì qiáng bù xī',
    sinoVietnamese: 'Tự cường bất tức',
    category: 'y-chi',
    categoryLabel: 'Ý chí & Nghị lực',
    hskLevel: 'HSK 5',
    literalMeaning: 'Tự lực phấn đấu không ngừng nghỉ.',
    figurativeMeaning: 'Luôn giữ tinh thần chủ động vươn lên, tự hoàn thiện bản thân, không chịu khuất phục trước số phận hay dựa dẫm vào người khác.',
    origin: 'Kinh Dịch - Tượng truyện (易经·象传)',
    story: `Kinh Dịch có câu danh ngôn bất hủ: "Thiên hành kiện, quân tử dĩ tự cường bất tức" (Trời đất vận hành mạnh mẽ không ngừng nghỉ, người quân tử noi theo đó mà tự lực vươn lên không lúc nào ngơi nghỉ).

Mặt trời mỗi ngày mọc ở đằng đông lặn ở đằng tây, bốn mùa xuân hạ thu đông luân chuyển tuần hoàn không bao giờ chậm trễ trễ nải một giây phút nào. Đạo trời đã như thế, con người sống giữa trời đất cũng phải noi theo sự bền bỉ của vũ trụ.

Dù sinh ra trong nghèo khó hay gặp muôn vàn nghịch cảnh, người có chí khí vẫn luôn tự thắp sáng ngọn đuốc của chính mình, lấy sự rèn luyện làm niềm vui, không kêu ca oán thán. Đây chính là tinh thần cốt lõi đã nuôi dưỡng nền văn minh Á Đông suốt mấy ngàn năm lịch sử.`,
    moralLesson: 'Điểm tựa vững chãi nhất trong cuộc đời chính là bản thân mình. Hãy sống và học tập với ngọn lửa nhiệt huyết không bao giờ tắt.',
    example: {
      chinese: '历经无数挫折，他凭借自强不息的毅力最终创立了自己的科技公司。',
      pinyin: 'Lìjīng wúshù cuòzhé, tā píngjiè zìqiángbùxī de yìlì zuìzhōng chuànglì le zìjǐ de kējì gōngsī.',
      vietnamese: 'Trải qua vô vàn trắc trở, anh ấy đã dựa vào nghị lực tự cường bất tức để thành lập công ty công nghệ của riêng mình.'
    },
    quiz: {
      question: 'Câu châm ngôn của Đại học Thanh Hoa (Tsinghua) lấy từ thành ngữ nào sau đây?',
      options: [
        '自强不息，厚德载物 (Tự cường bất tức, hậu đức tải vật)',
        '持之以恒，学无止境',
        '温故知新，循序渐进',
        '饮水思源，爱国奉献'
      ],
      correctIndex: 0,
      explanation: 'Khẩu hiệu nổi tiếng của Đại học Thanh Hoa chính là "自强不息，厚德载物", bắt nguồn từ quẻ Càn và Khôn trong Kinh Dịch.'
    }
  }
];

// Local storage progress helper for Chengyu Stories
const CHENGYU_STORAGE_KEY = 'hanyu_chengyu_progress';

export interface ChengyuUserProgress {
  readIds: string[];
  quizPassedIds: string[];
  xp: number;
}

export function getChengyuProgress(): ChengyuUserProgress {
  try {
    const raw = localStorage.getItem(CHENGYU_STORAGE_KEY);
    if (!raw) return { readIds: [], quizPassedIds: [], xp: 0 };
    return JSON.parse(raw);
  } catch {
    return { readIds: [], quizPassedIds: [], xp: 0 };
  }
}

export function markStoryAsRead(storyId: string): ChengyuUserProgress {
  const current = getChengyuProgress();
  if (!current.readIds.includes(storyId)) {
    current.readIds.push(storyId);
    try {
      localStorage.setItem(CHENGYU_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Cannot save chengyu read status', e);
    }
  }
  return current;
}

export function recordQuizPass(storyId: string, xpReward = 10): { progress: ChengyuUserProgress; justEarned: boolean } {
  const current = getChengyuProgress();
  let justEarned = false;
  if (!current.quizPassedIds.includes(storyId)) {
    current.quizPassedIds.push(storyId);
    current.xp += xpReward;
    if (!current.readIds.includes(storyId)) {
      current.readIds.push(storyId);
    }
    justEarned = awardXp(`chengyu:quiz:${storyId}`, "chengyu", xpReward) > 0;
    try {
      localStorage.setItem(CHENGYU_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Cannot save quiz pass status', e);
    }
  }
  return { progress: current, justEarned };
}
