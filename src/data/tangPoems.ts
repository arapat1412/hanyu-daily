import { awardXp } from "../lib/hsk";

export interface TangPoemLine {
  chinese: string;
  pinyin: string;
  sinoVietnamese: string;
  literal: string;
}

export interface TangPoemItem {
  id: string;
  title: string;
  pinyinTitle: string;
  sinoTitle: string;
  author: string;
  authorDynasty: string;
  form: 'Ngũ ngôn tuyệt cú' | 'Thất ngôn tuyệt cú' | 'Ngũ ngôn luật thi' | 'Thất ngôn luật thi';
  tags: string[];
  lines: TangPoemLine[];
  poeticTranslation: string;
  poeticTranslator: string;
  background: string;
  appreciation: string;
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const POEM_FORMS = [
  { id: 'all', label: 'Tất cả thể thơ' },
  { id: 'ngu-ngon-tuyet-cu', label: 'Ngũ ngôn tuyệt cú' },
  { id: 'that-ngon-tuyet-cu', label: 'Thất ngôn tuyệt cú' },
  { id: 'ngu-ngon-luat-thi', label: 'Ngũ ngôn luật thi' },
  { id: 'that-ngon-luat-thi', label: 'Thất ngôn luật thi' },
] as const;

export const FAMOUS_AUTHORS = [
  'Tất cả tác giả',
  'Lý Bạch (李白)',
  'Đỗ Phủ (杜甫)',
  'Mạnh Hạo Nhiên (孟浩然)',
  'Vương Duy (王维)',
  'Vương Chi Hoán (王之涣)',
  'Trương Kế (张继)',
  'Thôi Hiệu (崔颢)',
  'Vương Xương Linh (王昌龄)',
  'Hạ Tri Chương (贺知章)',
  'Lý Thân (李绅)',
  'Vương Hàn (王翰)',
  'Giả Đảo (贾岛)',
  'Liễu Tông Nguyên (柳宗元)',
  'Bạch Cư Dị (白居易)',
  'Lý Đoan (李端)',
] as const;

export const TANG_POEMS: TangPoemItem[] = [
  {
    id: 'jing-ye-si',
    title: '静夜思',
    pinyinTitle: 'Jìng Yè Sī',
    sinoTitle: 'Tĩnh Dạ Tứ',
    author: 'Lý Bạch (李白)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Nhớ quê hương', 'Ngắm trăng', 'Kinh điển'],
    lines: [
      { chinese: '床前明月光', pinyin: 'Chuáng qián míng yuè guāng', sinoVietnamese: 'Sàng tiền minh nguyệt quang', literal: 'Ánh trăng vằng vặc rọi trước giường nằm' },
      { chinese: '疑是地上霜', pinyin: 'Yí shì dì shàng shuāng', sinoVietnamese: 'Nghi thị địa thượng sương', literal: 'Ngỡ như là sương trắng phủ trên mặt đất' },
      { chinese: '举头望明月', pinyin: 'Jǔ tóu wàng míng yuè', sinoVietnamese: 'Cử đầu vọng minh nguyệt', literal: 'Ngẩng đầu lên trông vầng trăng sáng' },
      { chinese: '低头思故乡', pinyin: 'Dī tóu sī gù xiāng', sinoVietnamese: 'Đê đầu tư cố hương', literal: 'Cúi đầu xuống nhớ da diết quê nhà' },
    ],
    poeticTranslation: `Đầu giường ánh trăng rọi,
Ngỡ mặt đất phủ sương.
Ngẩng đầu nhìn trăng sáng,
Cúi đầu nhớ cố hương.`,
    poeticTranslator: 'Bản dịch thơ Tương Như',
    background: 'Năm 726 (thời vua Đường Huyền Tông), thi tiên Lý Bạch khi ấy khoảng 26 tuổi đang trọ tại một lữ quán ở Dương Châu trong tiết thu lạnh giá. Xa quê hương ngàn dặm, đêm khuya chợt tỉnh giấc nhìn thấy ánh trăng thu chiếu rọi qua song cửa sổ, nỗi nhớ nhà dâng trào đã thôi thúc ông sáng tác nên bài thơ bất hủ này.',
    appreciation: 'Bài thơ chỉ vỏn vẹn 20 chữ nhưng ngôn từ mộc mạc, cô đọng đến tột cùng. Hai cử chỉ đối lập "Cử đầu" (ngẩng đầu) và "Đê đầu" (cúi đầu) đã lột tả trọn vẹn nỗi cô đơn và tình hoài hương da diết của người lữ khách phương xa. Đây là bài thơ được truyền tụng rộng rãi nhất trong kho tàng văn học phương Đông.',
    quiz: {
      question: 'Trong bài thơ "Tĩnh Dạ Tứ", thi sĩ Lý Bạch đã ví ánh trăng sáng trước giường giống như điều gì?',
      options: [
        'Giọt nước mắt người lữ thứ',
        'Lớp sương trắng phủ trên mặt đất',
        'Tấm lụa trắng trải dài',
        'Ánh đèn dầu le lói'
      ],
      correctIndex: 1,
      explanation: 'Câu thơ "疑是地上霜" (Nghi thị địa thượng sương) diễn tả ánh trăng mùa thu sáng lạnh ngỡ như một lớp sương trắng phủ trên mặt đất.'
    }
  },
  {
    id: 'chun-xiao',
    title: '春晓',
    pinyinTitle: 'Chūn Xiǎo',
    sinoTitle: 'Xuân Hiểu',
    author: 'Mạnh Hạo Nhiên (孟浩然)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Thiên nhiên', 'Mùa xuân', 'Kinh điển'],
    lines: [
      { chinese: '春眠不觉晓', pinyin: 'Chūn mián bù jué xiǎo', sinoVietnamese: 'Xuân miên bất giác hiểu', literal: 'Giấc ngủ ngày xuân say nồng chẳng hay trời đã rạng' },
      { chinese: '处处闻啼鸟', pinyin: 'Chù chù wén tí niǎo', sinoVietnamese: 'Xứ xứ văn đề điểu', literal: 'Khắp nơi nơi văng vẳng tiếng chim ríu rít hót' },
      { chinese: '夜来风雨声', pinyin: 'Yè lái fēng yǔ shēng', sinoVietnamese: 'Dạ lai phong vũ thanh', literal: 'Chợt nhớ đêm qua tiếng gió mưa rào rạt kéo đến' },
      { chinese: '花落知多少', pinyin: 'Huā luò zhī duō shǎo', sinoVietnamese: 'Hoa lạc tri đa thiểu', literal: 'Chẳng biết hoa cỏ ngoài vườn đã rụng rơi biết bao nhiêu?' },
    ],
    poeticTranslation: `Giấc xuân say chẳng biết trời mai,
Khắp nơi ríu rít tiếng chim hoài.
Đêm qua nghe tiếng mưa cùng gió,
Hoa rụng vương đầy biết mấy ai?`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Mạnh Hạo Nhiên sáng tác bài thơ này khi ông lui về ẩn cư tại ngọn núi Lộc Môn (tỉnh Hồ Bắc). Một buổi sớm mùa xuân êm đềm, sau đêm mưa rào, ông thức dậy và cảm nhận trọn vẹn vẻ đẹp tươi mới của đất trời.',
    appreciation: 'Bài thơ không trực tiếp miêu tả cảnh xuân mà nắm bắt linh hồn mùa xuân qua âm thanh: tiếng chim ca líu lo chào ngày mới và dư âm tiếng mưa gió đêm qua. Tình yêu thiên nhiên tha thiết hòa cùng chút tiếc nuối bâng khuâng cho những cánh hoa rơi tạo nên dư vị sâu lắng.',
    quiz: {
      question: 'Câu thơ "处处闻啼鸟" (Xứ xứ văn đề điểu) miêu tả âm thanh gì của buổi sớm mùa xuân?',
      options: [
        'Tiếng nước suối róc rách chảy',
        'Tiếng chim hót ríu rít khắp nơi',
        'Tiếng gió thổi xào xạc cành cây',
        'Tiếng bước chân người đi chợ sớm'
      ],
      correctIndex: 1,
      explanation: '"闻" (văn) là nghe thấy, "啼鸟" (đề điểu) là chim hót; câu thơ diễn tả âm thanh rộn rã của đàn chim chào bình minh.'
    }
  },
  {
    id: 'feng-qiao-ye-bo',
    title: '枫桥夜泊',
    pinyinTitle: 'Fēng Qiáo Yè Bó',
    sinoTitle: 'Phong Kiều Dạ Bạc',
    author: 'Trương Kế (张继)',
    authorDynasty: 'Trung Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Lữ thứ', 'Chùa chiền', 'Sầu muộn'],
    lines: [
      { chinese: '月落乌啼霜满天', pinyin: 'Yuè luò wū tí shuāng mǎn tiān', sinoVietnamese: 'Nguyệt lạc ô đề sương mãn thiên', literal: 'Trăng đã lặn, tiếng quạ kêu sương, hơi sương lạnh bao phủ đầy trời' },
      { chinese: '江枫渔火对愁眠', pinyin: 'Jiāng fēng yú huǒ duì chóu mián', sinoVietnamese: 'Giang phong ngư hỏa đối sầu miên', literal: 'Cây phong bến sông và ngọn lửa thuyền chài đối diện với giấc ngủ trĩu nặng âu sầu' },
      { chinese: '姑苏城外寒山寺', pinyin: 'Gū sū chéng wài Hán shān sì', sinoVietnamese: 'Cô Tô thành ngoại Hàn Sơn tự', literal: 'Ngoài thành Cô Tô có ngôi chùa Hàn Sơn cổ kính' },
      { chinese: '夜半钟声到客船', pinyin: 'Yè bàn zhōng shēng dào kè chuán', sinoVietnamese: 'Dạ bán chung thanh đáo khách thuyền', literal: 'Tiếng chuông chùa ngân vang lúc nửa đêm truyền đến tận mạn thuyền của khách lữ hành' },
    ],
    poeticTranslation: `Trăng tà tiếng quạ kêu sương,
Lửa chài cây bến sầu vương giấc hồ.
Thuyền ai đậu bến Cô Tô,
Nửa đêm nghe tiếng chuông chùa Hàn Sơn.`,
    poeticTranslator: 'Bản dịch thơ Tản Đà',
    background: 'Sau biến loạn An Sử (An Lộc Sơn), Trương Kế phiêu bạt về phương Nam lánh nạn. Một đêm thu trăng muộn, con thuyền của ông ghé đỗ bên bến Phong Kiều, gần thành Cô Tô (nay là Tô Châu, Giang Tô). Cảnh vật tịch liêu nơi đất khách đã khơi dậy nỗi sầu thiên cổ.',
    appreciation: 'Bài thơ là một tuyệt tác thi họa tương thông. Cảnh vật tĩnh mịch bỗng bừng tỉnh bởi âm thanh tiếng chuông nửa đêm từ chùa Hàn Sơn ngân vang trên mặt nước, tạo nên sự giao thoa kỳ diệu giữa không gian, thời gian và tâm trạng cô quạnh của kẻ tha hương.',
    quiz: {
      question: 'Ngôi chùa nổi tiếng nào được nhắc tới trong bài thơ "Phong Kiều Dạ Bạc"?',
      options: [
        'Thiếu Lâm Tự',
        'Hàn Sơn Tự (chùa Hàn Sơn)',
        'Bạch Mã Tự',
        'Đại Nhạn Tháp'
      ],
      correctIndex: 1,
      explanation: 'Câu thơ kinh điển "姑苏城外寒山寺" (Ngoài thành Cô Tô có chùa Hàn Sơn) đã đưa chùa Hàn Sơn ở Tô Châu trở thành một biểu tượng thi ca bất hủ.'
    }
  },
  {
    id: 'huang-he-lou',
    title: '黄鹤楼',
    pinyinTitle: 'Huáng Hè Lóu',
    sinoTitle: 'Hoàng Hạc Lâu',
    author: 'Thôi Hiệu (崔颢)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn luật thi',
    tags: ['Thắng cảnh', 'Hoài cổ', 'Đỉnh cao Đường thi'],
    lines: [
      { chinese: '昔人已乘黄鹤去', pinyin: 'Xī rén yǐ chéng huáng hè qù', sinoVietnamese: 'Tích nhân dĩ thừa hoàng hạc khứ', literal: 'Người xưa nay đã cưỡi hạc vàng bay đi mất' },
      { chinese: '此地空余黄鹤楼', pinyin: 'Cǐ dì kōng yú huáng hè lóu', sinoVietnamese: 'Thử địa không dư Hoàng Hạc lâu', literal: 'Nơi chốn này chỉ còn trơ trọi lại lầu Hoàng Hạc' },
      { chinese: '黄鹤一去不复返', pinyin: 'Huáng hè yí qù bú fù fǎn', sinoVietnamese: 'Hoàng hạc nhất khứ bất phục phản', literal: 'Hạc vàng một khi bay đi thì chẳng bao giờ quay trở lại' },
      { chinese: '白云千载空悠悠', pinyin: 'Bái yún qiān zǎi kōng yōu yōu', sinoVietnamese: 'Bạch vân thiên tái không du du', literal: 'Chỉ có mây trắng nghìn năm qua vẫn lững lờ trôi vô định' },
      { chinese: '晴川历历汉阳树', pinyin: 'Qíng chuān lì lì Hàn yáng shù', sinoVietnamese: 'Tình xuyên lịch lịch Hán Dương thụ', literal: 'Dưới ánh nắng chan hòa, sông Hán soi rõ từng hàng cây Hán Dương xanh ngắt' },
      { chinese: '芳草萋萋鹦鹉洲', pinyin: 'Fāng cǎo qī qī Yīng wǔ zhōu', sinoVietnamese: 'Phương thảo thê thê Anh Vũ châu', literal: 'Cỏ thơm mơn mởn tươi tốt phủ khắp bãi cát Anh Vũ' },
      { chinese: '日暮乡关何处是', pinyin: 'Rì mù xiāng guān hé chù shì', sinoVietnamese: 'Nhật mộ hương quan hà xứ thị', literal: 'Chiều tà buông xuống, bóng quê hương nay ở chốn nào?' },
      { chinese: '烟波江上使人愁', pinyin: 'Yān bō jiāng shàng shǐ rén chóu', sinoVietnamese: 'Yên ba giang thượng sử nhân sầu', literal: 'Khói sóng mịt mùng trên mặt sông dâng trào nỗi sầu khôn nguôi.' },
    ],
    poeticTranslation: `Hạc vàng ai cưỡi đi đâu,
Mà nay để lại một lầu hạc trơ?
Hạc vàng đi mất từ xưa,
Nghìn năm mây trắng bây giờ còn bay.
Hán Dương sông tạnh cây bày,
Bãi thơm Anh Vũ cỏ dày xanh non.
Hoàng hôn quê mẹ đâu còn,
Khói lam sóng biếc cho buồn lòng ai?`,
    poeticTranslator: 'Bản dịch thơ Tản Đà',
    background: 'Thôi Hiệu lên chơi lầu Hoàng Hạc (Vũ Xương, Hồ Bắc), đứng trước danh thắng nghìn năm ngắm nhìn mây trời sông nước mà viết nên bài thơ này. Tương truyền khi Lý Bạch lên lầu Hoàng Hạc định làm thơ, đọc được bài của Thôi Hiệu liền than rằng: "Trước mắt có cảnh không tả được, bởi Thôi Hiệu đã đề thơ ở trên rồi!" và buông bút.',
    appreciation: 'Bài thơ mở đầu bằng ảo mộng bay bổng của thần tiên, tiếp nối bằng hiện thực sông núi rực rỡ buổi tạnh trời, và kết lại bằng nỗi buồn cô quạnh mênh mông trước khói sóng hoàng hôn. Nhà phê bình Nghiêm Vũ đời Tống tôn xưng đây là bài thơ thất ngôn luật đệ nhất thời Đường.',
    quiz: {
      question: 'Thi tiên Lý Bạch sau khi đọc bài thơ "Hoàng Hạc Lâu" của Thôi Hiệu đã có phản ứng gì?',
      options: [
        'Chỉ trích bài thơ viết chưa đúng luật',
        'Khen ngợi hết lời và chịu gác bút không làm thơ về lầu Hoàng Hạc nữa',
        'Viết một bài khác để so tài cao thấp',
        'Xóa bài thơ của Thôi Hiệu khỏi vách đá'
      ],
      correctIndex: 1,
      explanation: 'Lý Bạch tâm phục khẩu phục thốt lên: "Nhãn tiền hữu cảnh đạo bất đắc, Thôi Hiệu đề thi tại thượng đầu" (Trước mắt có cảnh chẳng tả được, vì Thôi Hiệu đã đề thơ ở trên đầu) rồi gác bút từ biệt.'
    }
  },
  {
    id: 'song-meng-hao-ran',
    title: '黄鹤楼送孟浩然之广陵',
    pinyinTitle: 'Huáng Hè Lóu Sòng Mèng Hào Rán Zhī Guǎng Líng',
    sinoTitle: 'Hoàng Hạc Lâu Tống Mạnh Hạo Nhiên Chi Quảng Lăng',
    author: 'Lý Bạch (李白)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Tiễn bạn', 'Tình bạn', 'Trường Giang'],
    lines: [
      { chinese: '故人西辞黄鹤楼', pinyin: 'Gù rén xī cí Huáng hè lóu', sinoVietnamese: 'Cố nhân tây từ Hoàng Hạc lâu', literal: 'Bạn cũ giã từ lầu Hoàng Hạc ở phía tây' },
      { chinese: '烟花三月下扬州', pinyin: 'Yān huā sān yuè xià Yáng zhōu', sinoVietnamese: 'Yên hoa tam nguyệt hạ Dương Châu', literal: 'Giữa tháng ba mùa hoa khói rực rỡ xuôi dòng về Dương Châu' },
      { chinese: '孤帆远影碧空尽', pinyin: 'Gū fān yuǎn yǐng bì kōng jìn', sinoVietnamese: 'Cô phàm viễn ảnh bích không tận', literal: 'Bóng cánh buồm lẻ loi xa dần rồi mất hút giữa bầu trời xanh biếc' },
      { chinese: '唯见长江天际流', pinyin: 'Wéi jiàn Cháng jiāng tiān jì liú', sinoVietnamese: 'Duy kiến Trường Giang thiên tế lưu', literal: 'Chỉ còn thấy dòng Trường Giang cuồn cuộn chảy xiết tới chân trời.' },
    ],
    poeticTranslation: `Bạn từ lầu Hạc xuôi về đông,
Tháng ba hoa khói tới Dương Châu.
Bóng buồm xa hút ngút trời xanh,
Chỉ thấy Trường Giang chảy tới chân trời.`,
    poeticTranslator: 'Bản dịch thơ Ngô Tất Tố',
    background: 'Mạnh Hạo Nhiên là đàn anh đồng thời là người bạn tri kỷ mà Lý Bạch vô cùng kính trọng. Mùa xuân năm 730, khi Mạnh Hạo Nhiên chia tay Lý Bạch tại lầu Hoàng Hạc để xuôi thuyền về phương nam tới chốn phồn hoa Dương Châu, Lý Bạch đã lưu luyến tiễn bạn và viết bài thơ tuyệt bút này.',
    appreciation: 'Không một lời than vãn bi lụy, cảnh chia tay diễn ra giữa mùa xuân rực rỡ "tháng ba hoa khói". Hai câu sau chuyển tải tình bạn sâu sắc tuyệt đỉnh: người ở lại dõi mắt theo cánh buồm bạn nhỏ dần đến khi tan biến vào trời xanh, tình cảm mênh mông vô tận như sóng nước Trường Giang.',
    quiz: {
      question: 'Cụm từ "烟花三月" (Yên hoa tam nguyệt) trong bài thơ diễn tả điều gì?',
      options: [
        'Pháo hoa bắn rực rỡ vào ban đêm',
        'Tháng ba mùa xuân cỏ cây hoa lá tốt tươi như khói sương bảng lảng',
        'Khói lửa chiến tranh tháng ba',
        'Lễ hội thả hoa đăng trên sông'
      ],
      correctIndex: 1,
      explanation: '"Yên hoa tam nguyệt" là hình ảnh mùa xuân tháng ba ấm áp, hoa lá nở rộ bảng lảng như khói sương, báo hiệu sức sống ngập tràn.'
    }
  },
  {
    id: 'wang-lu-shan-pu-bu',
    title: '望庐山瀑布',
    pinyinTitle: 'Wàng Lú Shān Pù Bù',
    sinoTitle: 'Vọng Lư Sơn Bộc Bố',
    author: 'Lý Bạch (李白)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Kỳ quan', 'Thiên nhiên', 'Hùng vĩ'],
    lines: [
      { chinese: '日照香炉生紫烟', pinyin: 'Rì zhào Xiāng lú shēng zǐ yān', sinoVietnamese: 'Nhật chiếu Hương Lô sinh tử yên', literal: 'Mặt trời chiếu rọi đỉnh núi Hương Lô bốc lên làn khói tía huyền ảo' },
      { chinese: '遥看瀑布挂前川', pinyin: 'Yáo kàn pù bù guà qián chuān', sinoVietnamese: 'Yao khán bộc bố quải tiền xuyên', literal: 'Từ xa ngắm nhìn dòng thác đổ như dải lụa treo lơ lửng trước dòng sông' },
      { chinese: '飞流直下三千尺', pinyin: 'Fēi liú zhí xià sān qiān chǐ', sinoVietnamese: 'Phi lưu trực hạ tam thiên xích', literal: 'Dòng nước bay thẳng đứng xuống ba ngàn thước' },
      { chinese: '疑是银河落九天', pinyin: 'Yí shì yín hé luò jiǔ tiān', sinoVietnamese: 'Nghi thị Ngân Hà lạc cửu thiên', literal: 'Ngỡ như là dải Ngân Hà từ chín tầng mây tuôn rơi xuống trần gian.' },
    ],
    poeticTranslation: `Nắng rọi Hương Lô khói tía bay,
Xa trông dòng thác trước sông này.
Nước bay thẳng xuống ba ngàn thước,
Ngỡ dải Ngân Hà tuột chín mây.`,
    poeticTranslator: 'Bản dịch thơ Tương Như',
    background: 'Lý Bạch du ngoạn tới dãy Lư Sơn hùng vĩ (tỉnh Giang Tây), đứng trước thác nước Hương Lô cuồn cuộn như bay từ lưng trời đổ xuống. Trí tưởng tượng siêu phàm của thi tiên đã hóa thân thành một trong những áng thơ miêu tả phong cảnh kỳ vĩ nhất lịch sử.',
    appreciation: 'Thủ pháp phóng đại tài tình "Phi lưu trực hạ tam thiên xích" kết hợp với liên tưởng lãng mạn vô song "Nghi thị Ngân Hà lạc cửu thiên" đã tôn vinh sức mạnh tráng lệ của thiên nhiên. Đại văn hào Tô Đông Pha sau này tấm tắc khen ngợi đây là bài vịnh thác Lư Sơn kiệt xuất ngàn đời.',
    quiz: {
      question: 'Thi tiên Lý Bạch đã so sánh dòng thác Lư Sơn đổ từ trên cao xuống giống như điều gì?',
      options: [
        'Một bức rèm nhung trắng',
        'Dải Ngân Hà từ chín tầng mây tuôn rơi xuống trần gian',
        'Con rồng bạc đang uốn lượn',
        'Bờm của đàn ngựa trắng tung bay'
      ],
      correctIndex: 1,
      explanation: 'Câu kết "疑是银河落九天" (Nghi thị Ngân Hà lạc cửu thiên) là đỉnh cao tưởng tượng lãng mạn: thác nước như dải Ngân Hà trên trời cao đổ xuống.'
    }
  },
  {
    id: 'deng-guan-que-lou',
    title: '登鹳雀楼',
    pinyinTitle: 'Dēng Guàn Què Lóu',
    sinoTitle: 'Đăng Quán Tước Lâu',
    author: 'Vương Chi Hoán (王之涣)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Chí khí', 'Triết lý', 'Kinh điển'],
    lines: [
      { chinese: '白日依山尽', pinyin: 'Bái rì yī shān jìn', sinoVietnamese: 'Bạch nhật y sơn tận', literal: 'Mặt trời rực rỡ lặn dần khuất sau dãy núi xa' },
      { chinese: '黄河入海流', pinyin: 'Huáng hé rù hǎi liú', sinoVietnamese: 'Hoàng Hà nhập hải lưu', literal: 'Dòng sông Hoàng Hà cuồn cuộn chảy xiết về phía biển cả' },
      { chinese: '欲穷千里目', pinyin: 'Yù qióng qiān lǐ mù', sinoVietnamese: 'Dục cùng thiên lý mục', literal: 'Nếu muốn phóng tầm mắt ngắm trọn vẹn nghìn dặm cảnh sắc' },
      { chinese: '更上一层楼', pinyin: 'Gèng shàng yì céng lóu', sinoVietnamese: 'Canh thượng nhất tầng lâu', literal: 'Thì hãy bước chân lên thêm một tầng lầu nữa!' },
    ],
    poeticTranslation: `Mặt trời khuất bóng sau non,
Hoàng Hà cuộn sóng đổ dồn biển khơi.
Muốn nhìn nghìn dặm xa vời,
Lên thêm tầng nữa ngắm trời bao la.`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Lầu Quán Tước nằm bên bờ sông Hoàng Hà (thuộc Vĩnh Tế, Sơn Tây ngày nay), là một trong tứ đại danh lâu phương Bắc. Thi nhân Vương Chi Hoán leo lên lầu trong một buổi chiều hoàng hôn ráng vàng tráng lệ.',
    appreciation: 'Chỉ 20 chữ nhưng cấu trúc hoàn hảo tuyệt đối: hai câu đầu là phong cảnh trời đất non sông hùng vĩ, hai câu sau nâng tầm thành triết lý nhân sinh bất hủ. Muốn có tầm nhìn cao rộng thì phải không ngừng vươn lên nỗ lực cao hơn. Câu "Canh thượng nhất tầng lâu" đã trở thành châm ngôn tiến thủ nổi tiếng của người Á Đông.',
    quiz: {
      question: 'Câu thơ "更上一层楼" (Canh thượng nhất tầng lâu) mang ý nghĩa triết lý gì trong cuộc sống?',
      options: [
        'Cần xây dựng nhà cửa cao tầng kiên cố',
        'Muốn đạt thành tựu cao hơn, mở rộng tầm nhìn thì phải không ngừng nỗ lực tiến lên',
        'Nên đứng trên cao để tránh lũ lụt',
        'Ngắm hoàng hôn từ tầng cao sẽ đẹp hơn'
      ],
      correctIndex: 1,
      explanation: 'Câu nói khuyên con người không thỏa mãn với vị trí hiện tại, muốn thấy tầm nhìn xa hơn nghìn dặm thì phải leo lên nấc thang cao hơn.'
    }
  },
  {
    id: 'chun-wang',
    title: '春望',
    pinyinTitle: 'Chūn Wàng',
    sinoTitle: 'Xuân Vọng',
    author: 'Đỗ Phủ (杜甫)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn luật thi',
    tags: ['Yêu nước', 'Chiến tranh', 'Thi Thánh'],
    lines: [
      { chinese: '国破山河在', pinyin: 'Guó pò shān hé zài', sinoVietnamese: 'Quốc phá sơn hà tại', literal: 'Nước nhà tan nát, chỉ có non sông sông núi là còn trơ lại' },
      { chinese: '城春草木深', pinyin: 'Chéng chūn cǎo mù shēn', sinoVietnamese: 'Thành xuân thảo mộc thâm', literal: 'Thành Trường An sang xuân, cỏ cây mọc hoang dại um tùm' },
      { chinese: '感时花溅泪', pinyin: 'Gǎn shí huā jiàn lèi', sinoVietnamese: 'Cảm thời hoa tiễn lệ', literal: 'Xót xa trước thời cuộc loạn lạc, nhìn hoa nở mà rơi lệ' },
      { chinese: '恨别鸟惊心', pinyin: 'Hèn bié niǎo jīng xīn', sinoVietnamese: 'Hận biệt điểu kinh tâm', literal: 'Đau đớn cảnh sinh ly tử biệt, nghe tiếng chim kêu mà giật mình kinh hãi' },
      { chinese: '烽火连三月', pinyin: 'Fēng huǒ lián sān yuè', sinoVietnamese: 'Phong hỏa liên tam nguyệt', literal: 'Khói lửa chiến tranh liên miên suốt ba tháng trời' },
      { chinese: '家书抵万金', pinyin: 'Jiā shū dǐ wàn jīn', sinoVietnamese: 'Gia thư để vạn kim', literal: 'Một phong thư gia đình lúc này quý giá tựa muôn lạng vàng' },
      { chinese: '白头搔更短', pinyin: 'Bái tóu sāo gèng duǎn', sinoVietnamese: 'Bạch đầu thao canh đoản', literal: 'Mái đầu bạc càng gãi càng rụng thưa thớt ngắn dần' },
      { chinese: '浑欲不胜簪', pinyin: 'Hún yù bú shèng zān', sinoVietnamese: 'Hồn dục bất thắng trâm', literal: 'Dường như không còn đủ dày để cài vừa chiếc trâm cài tóc.' },
    ],
    poeticTranslation: `Nước mất non sông trơ,
Thành xuân cỏ tốt bời.
Cảm thời hoa rỏ lệ,
Xót biệt nhói lòng người.
Khói lửa ba tháng chửa,
Thư nhà vạn nén thơi.
Đầu bạc gãi càng rụng,
E chẳng cắm trâm rồi!`,
    poeticTranslator: 'Bản dịch thơ Tản Đà',
    background: 'Năm 757, quân phiến loạn An Lộc Sơn chiếm đóng kinh đô Trường An. Thi thánh Đỗ Phủ bị giam lỏng trong thành phố tan hoang, xa cách vợ con không rõ sống chết. Đứng trước cảnh mùa xuân về trên kinh thành đổ nát, lòng yêu nước và thương dân đã tuôn chảy thành thi phẩm bi tráng.',
    appreciation: 'Đỗ Phủ được tôn xưng là "Thi sử" (Nhà thơ ghi lại lịch sử) chính nhờ những tác phẩm như Xuân Vọng. Câu đối "Phong hỏa liên tam nguyệt / Gia thư để vạn kim" (Khói lửa liền ba tháng / Thư nhà đáng vạn vàng) đã trở thành chân lý muôn đời cho nỗi đau phân ly thời tao loạn.',
    quiz: {
      question: 'Câu thơ "家书抵万金" (Gia thư để vạn kim) của Đỗ Phủ thể hiện điều gì?',
      options: [
        'Thư từ thời xưa được viết bằng giấy dát vàng đắt đỏ',
        'Trong thời buổi chiến tranh loạn lạc, một lá thư thăm hỏi của người thân quý giá tựa muôn lạng vàng',
        'Muốn gửi thư đi xa phải trả cước phí rất cao',
        'Gia đình gửi vàng bạc qua đường bưu điện'
      ],
      correctIndex: 1,
      explanation: 'Trong khói lửa chiến tranh chia cắt, biết được người thân trong gia đình vẫn còn sống bình an quý giá hơn bất kỳ của cải châu báu nào.'
    }
  },
  {
    id: 'xiang-si',
    title: '相思',
    pinyinTitle: 'Xiāng Sī',
    sinoTitle: 'Tương Tư',
    author: 'Vương Duy (王维)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Tình yêu', 'Tình bạn', 'Thi Phật'],
    lines: [
      { chinese: '红豆生南国', pinyin: 'Hóng dòu shēng nán guó', sinoVietnamese: 'Hồng đậu sinh nam quốc', literal: 'Hạt đậu đỏ sinh sôi nảy nở ở phương nam' },
      { chinese: '春来发几枝', pinyin: 'Chūn lái fā jǐ zhī', sinoVietnamese: 'Xuân lai phát kỷ chi', literal: 'Mùa xuân ấm áp về đâm chồi nảy lộc được mấy cành?' },
      { chinese: '愿君多采撷', pinyin: 'Yuàn jūn duō cǎi xié', sinoVietnamese: 'Nguyện quân đa thái hiệt', literal: 'Mong người hãy hái thật nhiều hạt đậu đỏ ấy' },
      { chinese: '此物最相思', pinyin: 'Cǐ wù zuì xiāng sī', sinoVietnamese: 'Thử vật tối tương tư', literal: 'Bởi vì giống quả này là biểu tượng nồng nàn nhất của nỗi nhớ nhung.' },
    ],
    poeticTranslation: `Đậu đỏ sinh nước nam,
Xuân về trổ mấy nhành?
Mong anh hái thật nhiều,
Vật ấy đậm tương tư.`,
    poeticTranslator: 'Bản dịch thơ khuyết danh',
    background: 'Thi Phật Vương Duy sáng tác bài thơ này gửi tặng người bạn nhạc sĩ tài hoa Lý Quy Niên. Ở Trung Quốc, quả hồng đậu (hạt đậu đỏ tình yêu) từ xưa đã gắn liền với sự tích người phụ nữ khóc nhớ chồng đi lính đến chảy máu mắt biến thành hạt đậu đỏ, trở thành biểu tượng của sự thủy chung son sắt.',
    appreciation: 'Bài thơ dùng ngôn ngữ giản dị, mượn hình ảnh hạt đậu đỏ phương nam để gửi gắm tình cảm nhớ thương sâu lắng. Nhờ bài thơ này, cụm từ "hồng đậu" đã vĩnh viễn trở thành tên gọi thi vị của tình yêu và sự gắn kết tâm giao trong văn hóa phương Đông.',
    quiz: {
      question: 'Trong văn hóa truyền thống Trung Hoa, "红豆" (hồng đậu - hạt đậu đỏ) là vật phẩm tượng trưng cho điều gì?',
      options: [
        'Sự trường thọ và giàu sang',
        'Nỗi nhớ nhung, tình yêu và tình cảm thủy chung son sắt',
        'Sự kiên cường bất khuất trong quân ngũ',
        'Mùa màng bội thu'
      ],
      correctIndex: 1,
      explanation: 'Hồng đậu còn được gọi là "Tương tư tử" (hạt tương tư), biểu tượng cho tình yêu sâu đậm và sự nhớ nhung khôn nguôi.'
    }
  },
  {
    id: 'hui-xiang-ou-shu',
    title: '回乡偶书',
    pinyinTitle: 'Huí Xiāng Ǒu Shū',
    sinoTitle: 'Hồi Hương Ngẫu Thư',
    author: 'Hạ Tri Chương (贺知章)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Cố hương', 'Thời gian', 'Xúc động'],
    lines: [
      { chinese: '少小离家老大回', pinyin: 'Shào xiǎo lí jiā lǎo dà huí', sinoVietnamese: 'Thiếu tiểu ly gia lão đại hồi', literal: 'Thuở trẻ thơ rời xa nhà, đến khi già nua tóc bạc mới trở về' },
      { chinese: '乡音无改鬓毛衰', pinyin: 'Xiāng yīn wú gǎi bìn máo cuī', sinoVietnamese: 'Hương âm vô cải bấn mao thôi', literal: 'Giọng nói quê hương vẫn không đổi, nhưng tóc mai đã thưa rụng phai màu' },
      { chinese: '儿童相见不相识', pinyin: 'Ér tóng xiāng jiàn bù xiāng shí', sinoVietnamese: 'Nhi đồng tương kiến bất tương thức', literal: 'Trẻ con trong làng nhìn thấy người già lạ mặt chẳng nhận ra ai' },
      { chinese: '笑问客从何处来', pinyin: 'Xiào wèn kè cóng hé chù lái', sinoVietnamese: 'Tiếu vấn khách tòng hà xứ lai', literal: 'Hồn nhiên mỉm cười cất tiếng hỏi: "Ông khách này từ phương nào tới chơi?".' },
    ],
    poeticTranslation: `Trẻ đi, già mới trở về,
Giọng quê không đổi, tóc thề đã phai.
Trẻ con gặp, chẳng biết ai,
Cười ran, hỏi: "Khách chốn đoài nào sang?".`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Hạ Tri Chương đỗ tiến sĩ và làm quan lớn tại kinh đô hơn 50 năm. Năm 86 tuổi, ông từ quan trở về quê cũ tại Cối Kê (Chiết Giang). Rời quê khi còn là thanh niên trai tráng, trở về quê đã là cụ già râu tóc bạc phơ, bước chân vào đầu làng gặp bọn trẻ con không hề hay biết đã hỏi ông là khách từ đâu đến.',
    appreciation: 'Bài thơ vừa hài hước vừa xót xa. Câu hỏi ngây thơ của con trẻ "Khách từ đâu lại?" như mũi kim châm vào trái tim người lữ khách: Trở về chính ngôi làng chôn nhau cắt rốn của mình mà lại bị coi là một "người khách lạ". Thời gian trôi đi tàn nhẫn, cảnh còn người mất, lắng đọng triết lý vô thường của kiếp nhân sinh.',
    quiz: {
      question: 'Tại sao lũ trẻ trong làng lại hỏi thi sĩ Hạ Tri Chương là "Khách từ đâu đến"?',
      options: [
        'Vì ông mặc trang phục của quan lại triều đình',
        'Vì ông xa quê hơn 50 năm, lũ trẻ sinh sau đẻ muộn không thể nhận ra ông',
        'Vì ông nói bằng tiếng địa phương khác',
        'Vì ông không mang theo quà cho trẻ nhỏ'
      ],
      correctIndex: 1,
      explanation: 'Xa nhà từ thuở thiếu thời đến khi già yếu mới trở về, thế hệ trẻ con trong làng không ai biết ông là ai nên ngây thơ tưởng ông là khách phương xa đến.'
    }
  },
  {
    id: 'min-nong',
    title: '悯农',
    pinyinTitle: 'Mǐn Nóng',
    sinoTitle: 'Mẫn Nông',
    author: 'Lý Thân (李绅)',
    authorDynasty: 'Trung Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Thương nông dân', 'Trân quý lương thực', 'Giáo dục'],
    lines: [
      { chinese: '锄禾日当午', pinyin: 'Chú hé rì dāng wǔ', sinoVietnamese: 'Trừ hòa nhật đương ngọ', literal: 'Cặm cụi cuốc cỏ dưới gốc lúa giữa buổi trưa đứng bóng nắng gay gắt' },
      { chinese: '汗滴禾下土', pinyin: 'Hàn dích hòa hạ thổ', sinoVietnamese: 'Hãn tích hòa hạ thổ', literal: 'Mồ hôi nhỏ từng giọt ròng ròng xuống lòng đất dưới chân luống lúa' },
      { chinese: '谁知盘中餐', pinyin: 'Shuí zhī pán zhōng cān', sinoVietnamese: 'Thùy tri bàn trung xan', literal: 'Có ai biết được rằng bát cơm thơm dẻo trong mâm ăn' },
      { chinese: '粒粒皆辛苦', pinyin: 'Lì lì jiē xīn kǔ', sinoVietnamese: 'Lạp lạp giai tân khổ', literal: 'Mỗi một hạt gạo đều là kết tinh của bao nỗi đắng cay nhọc nhằn.' },
    ],
    poeticTranslation: `Cày đồng đang buổi ban trưa,
Mồ hôi thánh thót như mưa ruộng cày.
Ai ơi bưng bát cơm đầy,
Dẻo thơm một hạt đắng cay muôn phần!`,
    poeticTranslator: 'Bản dịch thơ dân gian phỏng dịch',
    background: 'Lý Thân xuất thân trong gia đình bần hàn, thấu hiểu sâu sắc nỗi thống khổ của người nông dân lao động chân lấm tay bùn. Chứng kiến cảnh người dân đổ mồ hôi sôi nước mắt trên đồng ruộng mà vẫn không đủ ăn, ông đã viết chùm thơ "Mẫn Nông" (Thương người làm nông) chứa chan tinh thần nhân đạo.',
    appreciation: 'Hai câu đầu vẽ nên bức tranh lao động chân thực đến xót xa. Hai câu sau là lời răn dạy thấu tình đạt lý về giá trị của sức lao động và sự trân quý từng hạt lương thực. Bài thơ đã trở thành bài học vỡ lòng kinh điển cho trẻ em phương Đông suốt hàng trăm năm qua.',
    quiz: {
      question: 'Thông điệp nhân văn sâu sắc mà bài thơ "Mẫn Nông" truyền tải là gì?',
      options: [
        'Nên làm nông vào buổi sáng sớm để tránh nắng',
        'Biết ơn công sức lao động của người nông dân và trân quý từng hạt gạo',
        'Cần mở rộng diện tích trồng lúa gạo',
        'Giá gạo trên thị trường quá đắt đỏ'
      ],
      correctIndex: 1,
      explanation: 'Bài thơ nhắc nhở con người luôn biết ơn sự lao động nhọc nhằn của người nông dân, không được lãng phí cơm gạo thức ăn.'
    }
  },
  {
    id: 'fu-rong-lou-song-xin-jian',
    title: '芙蓉楼送辛渐',
    pinyinTitle: 'Fú Róng Lóu Sòng Xīn Jiàn',
    sinoTitle: 'Phù Dung Lâu Tống Tân Tiệm',
    author: 'Vương Xương Linh (王昌龄)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Tiễn bạn', 'Phẩm giá', 'Kinh điển'],
    lines: [
      { chinese: '寒雨连江夜入吴', pinyin: 'Hán yǔ lián jiāng yè rù Wú', sinoVietnamese: 'Hàn vũ liên giang dạ nhập Ngô', literal: 'Mưa lạnh dầm dề nối liền mặt sông, trong đêm tối kéo sang đất Ngô' },
      { chinese: '平明送客楚山孤', pinyin: 'Píng míng sòng kè Chǔ shān gū', sinoVietnamese: 'Bình minh tống khách Sở sơn cô', literal: 'Sáng sớm tiễn đưa bạn lên đường, bóng núi non nước Sở trơ trọi cô đơn' },
      { chinese: '洛阳亲友如相问', pinyin: 'Luò yáng qīn yǒu rú xiāng wèn', sinoVietnamese: 'Lạc Dương thân hữu như tương vấn', literal: 'Nếu người thân và bạn bè ở Lạc Dương có hỏi thăm đến ta' },
      { chinese: '一片冰心在玉壶', pinyin: 'Yí piàn bīng xīn zài yù hú', sinoVietnamese: 'Nhất phiến băng tâm tại ngọc hồ', literal: 'Thì hãy nói: Một tấm lòng trong như băng giá vẫn sáng ngời trong chiếc bình ngọc.' },
    ],
    poeticTranslation: `Mưa lạnh đêm qua trút đất Ngô,
Sáng nay tiễn khách Sở non trơ.
Lạc Dương bằng hữu ai thăm hỏi,
Một mảnh băng tâm ngọc chứa vừa!`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Vương Xương Linh bị gièm pha giáng chức làm Huyện thừa Giang Ninh. Khi người bạn Tân Tiệm chuẩn bị rời Giang Nam quay về kinh đô Lạc Dương, thi nhân tiễn bạn tại lầu Phù Dung bên bờ sông Trường Giang.',
    appreciation: 'Hình tượng "Nhất phiến băng tâm tại ngọc hồ" (Một mảnh lòng băng trong bình ngọc) là một trong những thi ảnh trác tuyệt nhất văn học cổ điển phương Đông, tượng trưng cho tâm hồn thanh cao, trong sạch, không màng danh lợi, không bao giờ bị vấy bẩn bởi chốn quan trường hiểm độc.',
    quiz: {
      question: 'Cụm từ "一片冰心在玉壶" (Nhất phiến băng tâm tại ngọc hồ) dùng để khẳng định điều gì?',
      options: [
        'Thời tiết mùa đông vô cùng băng giá',
        'Tâm hồn trong sạch, phẩm giá thanh cao không bị vẩn đục',
        'Chiếc bình ngọc đựng nước đá quý giá',
        'Nỗi sợ hãi trước thời tiết buốt lạnh'
      ],
      correctIndex: 1,
      explanation: '"Băng tâm" (trái tim trong suốt như băng) đặt trong "ngọc hồ" (bình ngọc) là biểu tượng bất hủ của lòng dạ trong sạch và phẩm giá thanh cao.'
    }
  },
  {
    id: 'zao-fa-bai-di-cheng',
    title: '早发白帝城',
    pinyinTitle: 'Zǎo Fā Bái Dì Chéng',
    sinoTitle: 'Tảo Phát Bạch Đế Thành',
    author: 'Lý Bạch (李白)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Du ngoạn', 'Trường Giang', 'Nhẹ nhõm'],
    lines: [
      { chinese: '朝辞白帝彩云间', pinyin: 'Zhāo cí Bái Dì cǎi yún jiān', sinoVietnamese: 'Triêu từ Bạch Đế thái vân gian', literal: 'Sáng sớm từ biệt thành Bạch Đế ẩn hiện giữa tầng mây ngũ sắc' },
      { chinese: '千里江陵一日还', pinyin: 'Qiān lǐ Jiāng líng yí rì huán', sinoVietnamese: 'Thiên lý Giang Lăng nhất nhật hoàn', literal: 'Ngàn dặm đường tới Giang Lăng xuôi thuyền chỉ một ngày là tới nơi' },
      { chinese: '两岸猿声啼不住', pinyin: 'Liǎng àn yuán shēng tí bú zhù', sinoVietnamese: 'Lưỡng ngạn viên thanh đề bất trụ', literal: 'Tiếng vượn kêu râm ran hai bên bờ sông văng vẳng không dứt' },
      { chinese: '轻舟已过万重山', pinyin: 'Qīng zhōu yǐ guò wàn chóng shān', sinoVietnamese: 'Khinh chu dĩ quá vạn trùng sơn', literal: 'Thì con thuyền nhẹ lướt đã vượt qua muôn ngọn núi trập trùng.' },
    ],
    poeticTranslation: `Sáng rời Bạch Đế mây vương,
Giang Lăng ngàn dặm một đường về xuôi.
Vượn kêu đôi mé không nguôi,
Thuyền con đã vượt muôn đồi non xa.`,
    poeticTranslator: 'Bản dịch thơ Tản Đà',
    background: 'Năm 759, Lý Bạch bị lưu đày đến Dạ Lang vì liên lụy vụ án Vĩnh Vương Lý Lân. Khi thuyền tới thành Bạch Đế (Tứ Xuyên), ông bất ngờ nhận được chiếu đại xá của triều đình. Mừng rỡ khôn xiết, thi nhân lập tức giong buồm quay về Giang Lăng và viết nên áng thơ trác tuyệt này.',
    appreciation: 'Bài thơ toát lên niềm vui sướng giải thoát tột cùng. Tiết tấu thơ nhanh, thanh thoát như cánh buồm lướt gió. Câu kết "Khinh chu dĩ quá vạn trùng sơn" (Thuyền nhẹ đã qua muôn trùng núi) đã trở thành hình tượng kinh điển cho sự vượt qua mọi nghịch cảnh để đi tới bến bờ bình an.',
    quiz: {
      question: 'Tại sao tâm trạng của thi tiên Lý Bạch trong bài thơ "Tảo Phát Bạch Đế Thành" lại vui tươi, phấn chấn như vậy?',
      options: [
        'Vì ông trúng thưởng lớn ở sòng bạc',
        'Vì đang trên đường đi đày thì nhận được chiếu xá tội tha bổng của triều đình',
        'Vì vừa cưới được người vợ hiền',
        'Vì bắt được nhiều cá trên sông Trường Giang'
      ],
      correctIndex: 1,
      explanation: 'Sau chuỗi ngày u ám đi đày, tin đại xá bất ngờ đến tại Bạch Đế đã trút bỏ gánh nặng ngàn cân trong lòng thi nhân.'
    }
  },
  {
    id: 'liang-zhou-ci',
    title: '凉州词',
    pinyinTitle: 'Liáng Zhōu Cí',
    sinoTitle: 'Lương Châu Từ',
    author: 'Vương Hàn (王翰)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Biên tái', 'Rượu ngon', 'Hào sảng'],
    lines: [
      { chinese: '葡萄美酒夜光杯', pinyin: 'Pú táo měi jiǔ yè guāng bēi', sinoVietnamese: 'Bồ đào mỹ tửu dạ quang bôi', literal: 'Rượu bồ đào thơm ngon sóng sánh trong chén dạ quang phát sáng' },
      { chinese: '欲饮琵琶马上催', pinyin: 'Yù yǐn pí pa mǎ shàng cuī', sinoVietnamese: 'Dục ẩm tỳ bà mã thượng thôi', literal: 'Vừa muốn cạn chén thì tiếng đàn tỳ bà trên lưng ngựa đã giục giã quân sĩ lên đường' },
      { chinese: '醉卧沙场君莫笑', pinyin: 'Zuì wò shā chǎng jūn mò xiào', sinoVietnamese: 'Túy ngọa sa trường quân mạc tiếu', literal: 'Say nằm lăn trên bãi cát sa trường xin người chớ cười chê' },
      { chinese: '古来征战几人回', pinyin: 'Gǔ lái zhēng zhàn jǐ rén huí', sinoVietnamese: 'Cổ lai chinh chiến kỷ nhân hồi', literal: 'Bởi từ xưa đến nay, kẻ đi đánh giặc nơi biên ải có mấy người sống sót trở về?' },
    ],
    poeticTranslation: `Bồ đào rượu ngát chén lưu ly,
Toan nhắp tỳ bà giục vó phi.
Say khướt sa trường xin chớ giễu,
Xưa nay chinh chiến mấy ai về?`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Thuộc dòng thơ Biên tái thịnh Đường, bài thơ ghi lại bữa tiệc rượu tiễn biệt của các tướng sĩ vùng Lương Châu trước giờ xung trận nơi sa trường sinh tử khốc liệt.',
    appreciation: 'Bài thơ vừa bi tráng vừa hào hùng phóng khoáng. Trước cái chết cận kề, người lính không hề run sợ bi lụy mà nâng chén rượu ngon hết mình với cuộc sống. "Cổ lai chinh chiến kỷ nhân hồi" là lời cảm thán nghìn đời xót xa cho thân phận người lính chinh phu thời phong kiến.',
    quiz: {
      question: 'Câu thơ "古来征战几人回" (Cổ lai chinh chiến kỷ nhân hồi) mang ý nghĩa gì?',
      options: [
        'Khen ngợi chiến thắng vẻ vang của đoàn quân',
        'Cảm thán sự tàn khốc của chiến tranh: xưa nay ra trận có mấy ai sống sót trở về',
        'Hối thúc tướng sĩ đầu hàng quân địch',
        'Kêu gọi người dân cùng đi lính'
      ],
      correctIndex: 1,
      explanation: 'Câu thơ đúc kết hiện thực đau thương nơi biên ải: hiểm nguy bom đạn khiến rất ít người lính may mắn sống sót hồi hương.'
    }
  },
  {
    id: 'lu-chai',
    title: '鹿柴',
    pinyinTitle: 'Lù Chái',
    sinoTitle: 'Lộc Trại',
    author: 'Vương Duy (王维)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Thiền vị', 'Thiên nhiên', 'Thanh tịnh'],
    lines: [
      { chinese: '空山不见人', pinyin: 'Kōng shān bú jiàn rén', sinoVietnamese: 'Không sơn bất kiến nhân', literal: 'Ngọn núi vắng lặng hoang vu chẳng thấy bóng người' },
      { chinese: '但闻人语响', pinyin: 'Dàn wén rén yǔ xiǎng', sinoVietnamese: 'Đãn văn nhân ngữ hưởng', literal: 'Chỉ nghe thấy tiếng nói chuyện của ai đó vọng lại từ xa' },
      { chinese: '返景入深林', pinyin: 'Fǎn yǐng rù shēn lín', sinoVietnamese: 'Phản ảnh nhập thâm lâm', literal: 'Ánh nắng chiều tà phản chiếu xuyên sâu vào chốn rừng già rậm rạp' },
      { chinese: '复照青苔上', pinyin: 'Fù zhào qīng tái shàng', sinoVietnamese: 'Phục chiếu thanh đài thượng', literal: 'Lại rọi sáng lung linh lên những thảm rêu xanh ngắt.' },
    ],
    poeticTranslation: `Rừng vắng không bóng người,
Vẳng nghe tiếng nói thôi.
Nắng chiều xuyên rừng thẳm,
Lấp lánh thảm rêu tươi.`,
    poeticTranslator: 'Bản dịch thơ phỏng dịch',
    background: 'Vương Duy khi lui về biệt phủ ở Lam Điền, ngày ngày vui thú điền viên thiền định giữa thiên nhiên. "Lộc Trại" là một trong hai mươi bài thơ thuộc chùm "Võng Xuyên tập" bất hủ của ông.',
    appreciation: 'Được mệnh danh là "Thi trung hữu họa, họa trung hữu thi" (Trong thơ có họa, trong họa có thơ), Vương Duy dùng thủ pháp "lấy động tả tĩnh" bậc thầy. Tiếng người vọng lại càng làm nổi bật sự thanh vắng của núi rừng; vệt nắng chiều rọi trên rêu xanh gợi cảm giác thoát tục, an nhiên của cõi Thiền.',
    quiz: {
      question: 'Thủ pháp nghệ thuật độc đáo được Vương Duy sử dụng trong hai câu đầu bài thơ "Lộc Trại" là gì?',
      options: [
        'Phóng đại ước lệ',
        'Lấy động tả tĩnh (dùng tiếng người vọng từ xa để làm nổi bật sự tĩnh mịch của núi rừng)',
        'Nhân hóa đồ vật',
        'Điển tích điển cố'
      ],
      correctIndex: 1,
      explanation: 'Tiếng nói thoảng qua trong rừng càng làm sâu sắc thêm không gian tĩnh lặng, cô tịch của chốn rừng thiền.'
    }
  },
  {
    id: 'niao-ming-jian',
    title: '鸟鸣涧',
    pinyinTitle: 'Niǎo Míng Jiàn',
    sinoTitle: 'Điểu Minh Giản',
    author: 'Vương Duy (王维)',
    authorDynasty: 'Thịnh Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Đêm xuân', 'Thiền vị', 'Thanh tao'],
    lines: [
      { chinese: '人闲桂花落', pinyin: 'Rén xián guì huā luò', sinoVietnamese: 'Nhân nhàn quế hoa lạc', literal: 'Lòng người nhàn nhã thanh thản, nghe cả tiếng hoa quế khe khẽ rụng rơi' },
      { chinese: '夜静春山空', pinyin: 'Yè jìng chūn shān kōng', sinoVietnamese: 'Dạ tĩnh xuân sơn không', literal: 'Màn đêm thanh tĩnh khiến ngọn núi mùa xuân dường như trống không tịch mịch' },
      { chinese: '月出惊山鸟', pinyin: 'Yuè chū jīng shān niǎo', sinoVietnamese: 'Nguyệt xuất kinh sơn điểu', literal: 'Vầng trăng nhô lên tỏa sáng khiến đàn chim núi giật mình' },
      { chinese: '时鸣春涧中', pinyin: 'Shí míng chūn jiàn zhōng', sinoVietnamese: 'Thời minh xuân giản trung', literal: 'Thỉnh thoảng cất tiếng kêu ríu ran vang vọng giữa khe suối mùa xuân.' },
    ],
    poeticTranslation: `Người nhàn hoa quế rụng,
Đêm tĩnh núi xuân không.
Trăng lên kinh chim núi,
Vang tiếng giữa khe trong.`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Vương Duy đi thăm người bạn Hoàng Phủ Nhạc tại trang viên Nhược Gia khê. Trong đêm xuân trăng sáng tĩnh mịch, thi nhân đã ghi lại khoảnh khắc thanh khiết tuyệt mỹ của tạo vật.',
    appreciation: 'Hoa quế rất nhỏ, rơi nhẹ không tiếng động, vậy mà thi nhân "nghe" thấy, chứng tỏ tâm hồn ông đã lắng đọng hoàn toàn. Trăng sáng làm chim núi bừng tỉnh cất tiếng hót, âm thanh ấy như giọt nước rơi vào mặt hồ phẳng lặng, đưa người đọc vào cõi thiền thanh tịnh tuyệt đối.',
    quiz: {
      question: 'Chi tiết "nghe hoa quế rụng" trong câu thơ đầu thể hiện điều gì ở tâm trạng người thi nhân?',
      options: [
        'Tâm hồn vô cùng thư thái, nhàn tịnh đến mức cảm nhận được sự chuyển động tinh vi nhất của tự nhiên',
        'Thi nhân đang buồn ngủ muốn đi ngủ',
        'Vườn quế đang bị gió to bão lớn',
        'Thi nhân đang đợi bạn đến chơi'
      ],
      correctIndex: 0,
      explanation: 'Chữ "nhàn" (闲) thể hiện tâm cảnh an định, hòa nhập trọn vẹn vào cõi hư vô tĩnh tại của thiên nhiên.'
    }
  },
  {
    id: 'deng-gao',
    title: '登高',
    pinyinTitle: 'Dēng Gāo',
    sinoTitle: 'Đăng Cao',
    author: 'Đỗ Phủ (杜甫)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn luật thi',
    tags: ['Đỉnh cao thất ngôn', 'Thu cảm', 'Tráng lệ'],
    lines: [
      { chinese: '风急天高猿啸哀', pinyin: 'Fēng jí tiān gāo yuán xiào āi', sinoVietnamese: 'Phong cấp thiên cao viên khiếu ai', literal: 'Gió thổi dữ dội, trời cao lồng lộng, tiếng vượn hú ai oán bi thương' },
      { chinese: '渚清沙白鸟飞回', pinyin: 'Zhǔ qīng shā bái niǎo fēi huí', sinoVietnamese: 'Chử thanh sa bạch điểu phi hồi', literal: 'Bến nước trong veo, bãi cát trắng phau, cánh chim bay lượn vòng quay lại' },
      { chinese: '无边落木萧萧下', pinyin: 'Wú biān luò mù xiāo xiāo xià', sinoVietnamese: 'Vô biên lạc mộc tiêu tiêu hạ', literal: 'Cây rừng rụng lá xào xạc rơi xuống bạt ngàn không bờ bến' },
      { chinese: '不尽长江滚滚来', pinyin: 'Bú jìn Cháng jiāng gǔn gǔn lái', sinoVietnamese: 'Bất tận Trường Giang cuồn cuộn lai', literal: 'Dòng sông Trường Giang cuồn cuộn sóng trào chảy xiết khôn cùng' },
      { chinese: '万里悲秋常作客', pinyin: 'Wàn lǐ bēi qiū cháng zuò kè', sinoVietnamese: 'Vạn lý bi thu thường tác khách', literal: 'Muôn dặm xa xôi đau xót cảnh mùa thu, thường làm thân khách tha hương' },
      { chinese: '百年多病独登台', pinyin: 'Bǎi nián duō bìng dú dēng tái', sinoVietnamese: 'Bách niên đa bệnh độc đăng đài', literal: 'Một đời trăm năm nhiều bệnh tật, nay một mình leo lên đài ngắm cảnh' },
      { chinese: '艰难苦恨繁霜鬓', pinyin: 'Jiān nán kǔ hèn fán shuāng bìn', sinoVietnamese: 'Gian nan khổ hận phiền sương bấn', literal: 'Cuộc sống gian nan cay đắng hận nỗi tóc mai đã hoa râm điểm sương' },
      { chinese: '潦倒新停浊酒杯', pinyin: 'Liáo dǎo xīn tíng zhuó jiǔ bēi', sinoVietnamese: 'Liêu đảo tân đình trọc tửu bôi', literal: 'Thân hình lận đận, nay lại vừa phải kiêng ngừng uống chén rượu đục.' },
    ],
    poeticTranslation: `Gió lộng trời cao vượn hú sầu,
Bến trong cát trắng lượn chim âu.
Ngút ngàn lá rụng xôn xao đổ,
Cuồn cuộn Trường Giang cuộn sóng dâu.
Muôn dặm thu sầu thân khách trọ,
Một đời lắm bệnh bước lên lầu.
Gian nan cay đắng đầu phai bạc,
Lận đận vừa ngưng chén rượu nâu.`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Mùa thu năm 767 tại Quỳ Châu (Tứ Xuyên), vào ngày Tết Trùng Cửu (9/9), Đỗ Phủ lúc này đã già yếu, mang nhiều tật bệnh, một mình leo lên đài cao ngắm nhìn cảnh trời thu bao la và viết nên tác phẩm được xưng tụng là "Đệ nhất thất ngôn luật thi cổ kim".',
    appreciation: 'Toàn bài 8 câu thì cả 8 câu đều đối nhau tuyệt hảo (câu nào cũng là câu đối). Cảnh tượng "Vô biên lạc mộc tiêu tiêu hạ / Bất tận Trường Giang cuồn cuộn lai" mở ra không gian vũ trụ vô cùng vô tận, đối lập với sự nhỏ bé, hữu hạn và đau thương của kiếp người giữa thời loạn lạc.',
    quiz: {
      question: 'Bài thơ "Đăng Cao" của Đỗ Phủ được giới phê bình thi ca cổ điển tôn xưng là gì?',
      options: [
        'Bài thơ ngắn nhất thời Đường',
        'Đệ nhất thất ngôn luật thi cổ kim (Bài thơ 7 chữ 8 câu hay nhất xưa nay)',
        'Bài thơ vui tươi nhất của Đỗ Phủ',
        'Bài thơ có nhiều nhân vật nhất'
      ],
      correctIndex: 1,
      explanation: 'Các nhà phê bình đời Minh và Thanh đều đồng thuận tôn vinh "Đăng Cao" là đỉnh cao tuyệt đối của thể thơ thất ngôn bát cú.'
    }
  },
  {
    id: 'wang-tian-men-shan',
    title: '望天门山',
    pinyinTitle: 'Wàng Tiān Mén Shān',
    sinoTitle: 'Vọng Thiên Môn Sơn',
    author: 'Lý Bạch (李白)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Thiên nhiên', 'Hùng vĩ', 'Trường Giang'],
    lines: [
      { chinese: '天门中断楚江开', pinyin: 'Tiān mén zhōng duàn Chǔ jiāng kāi', sinoVietnamese: 'Thiên Môn gián đoạn Sở giang khai', literal: 'Dãy Thiên Môn như bị chẻ đôi nhường lối cho dòng Sở giang chảy qua' },
      { chinese: '碧水东流至此回', pinyin: 'Bì shuǐ dōng liú zhì cǐ huí', sinoVietnamese: 'Bích thủy đông lưu chí thử hồi', literal: 'Dòng nước biếc chảy về đông tới đây xoáy cuộn chuyển hướng' },
      { chinese: '两岸青山相对出', pinyin: 'Liǎng àn qīng shān xiāng duì chū', sinoVietnamese: 'Lưỡng ngạn thanh sơn tương đối xuất', literal: 'Hai bờ núi xanh sừng sững như nghênh đón nhau cùng hiện ra' },
      { chinese: '孤帆一片日边来', pinyin: 'Gū fān yí piàn rì biān lái', sinoVietnamese: 'Cô phàm nhất phiến nhật biên lai', literal: 'Một cánh buồm lẻ loi từ phía vầng mặt trời xa xa lướt sóng tiến lại.' },
    ],
    poeticTranslation: `Thiên Môn xẻ lối mở dòng trôi,
Nước biếc xuôi đông cuộn sóng hồi.
Hai mé non xanh nghênh đối mặt,
Cánh buồm đơn độc cạnh mặt trời.`,
    poeticTranslator: 'Bản dịch thơ phỏng dịch',
    background: 'Năm 725, Lý Bạch rời quê nhà Tứ Xuyên đi chu du thiên hạ, ngồi thuyền xuôi dòng Trường Giang qua hẻm núi Thiên Môn (An Huy). Khí thế hùng vĩ của đất trời đã khơi gợi niềm cảm hứng hào sảng của chàng thi sĩ trẻ.',
    appreciation: 'Sức sống và sự chuyển động là linh hồn của bài thơ. Hai bờ núi như có sinh mệnh tự nghênh đón nhau mở ra, và hình ảnh kết "Cô phàm nhất phiến nhật biên lai" (Một cánh buồm từ phía mặt trời lại) toát lên phong thái kiêu hãnh, tự tin đón nhận tương lai của thi tiên Lý Bạch.',
    quiz: {
      question: 'Hình ảnh "cánh buồm đơn độc từ phía mặt trời lướt tới" ở câu kết gợi cảm xúc gì?',
      options: [
        'Sự cô đơn, buồn tủi và tuyệt vọng',
        'Vẻ đẹp hùng vĩ, phóng khoáng và niềm tin phơi phới hướng về tương lai rộng mở',
        'Nỗi nhớ người yêu da diết',
        'Sự mệt mỏi sau chuyến đi dài'
      ],
      correctIndex: 1,
      explanation: 'Hình ảnh cánh buồm rẽ sóng từ chân trời mặt trời mọc phản ánh khí phách tuổi trẻ đầy hào khí của Lý Bạch.'
    }
  },
  {
    id: 'chu-sai',
    title: '出塞',
    pinyinTitle: 'Chū Sài',
    sinoTitle: 'Xuất Tái',
    author: 'Vương Xương Linh (王昌龄)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Biên tái', 'Yêu nước', 'Hùng tráng'],
    lines: [
      { chinese: '秦时明月汉时关', pinyin: 'Qín shí míng yuè Hàn shí guān', sinoVietnamese: 'Tần thời minh nguyệt Hán thời quan', literal: 'Vầng trăng vằng vặc từ thời nhà Tần soi xuống cửa ải biên cương thời nhà Hán' },
      { chinese: '万里长征人未还', pinyin: 'Wàn lǐ cháng zhēng rén wèi huán', sinoVietnamese: 'Vạn lý trường chinh nhân vị hoàn', literal: 'Kẻ đi chinh chiến vạn dặm xa xôi vẫn chưa thấy ngày trở về' },
      { chinese: '但使龙城飞将在', pinyin: 'Dàn shǐ Lóng chéng fēi jiàng zài', sinoVietnamese: 'Đãn sử Long thành phi tướng tại', literal: 'Giá như nay còn vị "Phi tướng quân" Lý Quảng trấn giữ thành Long' },
      { chinese: '不教胡马度阴山', pinyin: 'Bù jiào Hú mǎ dù Yīn shān', sinoVietnamese: 'Bất giáo Hồ mã độ Âm Sơn', literal: 'Thì quyết không để cho đàn ngựa giặc Hồ vượt qua dãy Âm Sơn xâm phạm bờ cõi!' },
    ],
    poeticTranslation: `Trăng Tần soi tỏ ải quan Hán,
Vạn dặm người đi chửa thấy về.
Ước có tướng tài như họ Lý,
Ngựa Hồ không bước tới bờ đê!`,
    poeticTranslator: 'Bản dịch thơ Tương Như',
    background: 'Vương Xương Linh được tôn là "Thất ngôn tuyệt cú thánh thủ". Đi thị sát miền biên ải Tây Bắc, chứng kiến sự khổ ải của lính thú và sự kém cỏi của các tướng lĩnh bất tài thời bấy giờ, ông đã viết nên tác phẩm được ca tụng là bài tuyệt cú số một đời Đường.',
    appreciation: 'Câu mở đầu "Tần thời minh nguyệt Hán thời quan" kết nối ngàn năm lịch sử chỉ trong 7 chữ. Tác giả mượn hình tượng danh tướng Lý Quảng (Phi tướng quân) thời Hán để gửi gắm khát vọng về hòa bình, mong có bậc lương tướng kiệt xuất bảo vệ giang sơn cho nhân dân an cư lạc nghiệp.',
    quiz: {
      question: '"Phi tướng" (飞将) được nhắc tới trong bài thơ là vị danh tướng nào trong lịch sử?',
      options: [
        'Quan Vũ thời Tam Quốc',
        'Lý Quảng thời Tây Hán',
        'Nhạc Phi thời Nam Tống',
        'Bạch Khởi thời Chiến Quốc'
      ],
      correctIndex: 1,
      explanation: 'Phi tướng quân Lý Quảng thời Tây Hán từng khiến quân Hung Nô khiếp vía kinh hồn không dám tiến vào biên ải suốt nhiều năm.'
    }
  },
  {
    id: 'xun-yin-zhe-bu-yu',
    title: '寻隐者不遇',
    pinyinTitle: 'Xún Yǐn Zhě Bú Yù',
    sinoTitle: 'Tầm Ẩn Giả Bất Ngộ',
    author: 'Giả Đảo (贾岛)',
    authorDynasty: 'Trung Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Ẩn sĩ', 'Núi non', 'Thanh tao'],
    lines: [
      { chinese: '松下问童子', pinyin: 'Sōng xià wèn tóng zǐ', sinoVietnamese: 'Tùng hạ vấn đồng tử', literal: 'Dưới gốc cây tùng cất tiếng hỏi chú tiểu đồng' },
      { chinese: '言师采药去', pinyin: 'Yán shī cǎi yào qù', sinoVietnamese: 'Ngôn sư thái dược khứ', literal: 'Chú thưa rằng thầy đã lên núi hái thuốc từ sớm' },
      { chinese: '只在此山中', pinyin: 'Zhǐ zài cǐ shān zhōng', sinoVietnamese: 'Chỉ tại thử sơn trung', literal: 'Thầy chỉ loanh quanh đâu đây trong ngọn núi này thôi' },
      { chinese: '云深不知处', pinyin: 'Yún shēn bù zhī chù', sinoVietnamese: 'Vân thâm bất tri xứ', literal: 'Nhưng mây mù dày đặc quá chẳng biết cụ thể ở chốn nào.' },
    ],
    poeticTranslation: `Dưới tùng hỏi chú đồng con,
Thưa rằng: "Thầy hái thuốc non bên đồi.
Chỉ loanh quanh núi này thôi,
Mây sâu mịt mịt chẳng nơi đâu tìm!".`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Thi nhân Giả Đảo vượt ngàn dặm núi non đi tìm gặp một vị cao nhân ẩn dật, nhưng đến nơi thì không gặp được người.',
    appreciation: 'Toàn bài là một màn đối đáp súc tích không hề có một chữ thừa. Không gặp được người nhưng hình bóng thanh cao, thoát tục của vị ẩn sĩ hái thuốc giữa mây mù non cao lại hiện lên sống động hơn bao giờ hết. Mây mù dày đặc cũng chính là biểu tượng cho cảnh giới siêu phàm của bậc chân nhân.',
    quiz: {
      question: 'Khi khách đến tìm, chú tiểu đồng cho biết sư phụ đang ở đâu?',
      options: [
        'Đã về quê thăm người thân',
        'Đang ở trong ngọn núi này hái thuốc nhưng mây mù quá dày không rõ chốn nào',
        'Đang ngủ trưa trong túp lều tranh',
        'Đang ngồi câu cá bên dòng suối'
      ],
      correctIndex: 1,
      explanation: 'Câu "Chỉ tại thử sơn trung / Vân thâm bất tri xứ" diễn tả vị ẩn sĩ đang ở trong núi mây ngút ngàn hái thuốc lá cây.'
    }
  },
  {
    id: 'jiu-yue-jiu-ri-yi-shan-dong-xiong-di',
    title: '九月九日忆山东兄弟',
    pinyinTitle: 'Jiǔ Yuè Jiǔ Rì Yì Shān Dōng Xiōng Dì',
    sinoTitle: 'Cửu Nguyệt Cửu Nhật Ức Sơn Đông Huynh Đệ',
    author: 'Vương Duy (王维)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn tuyệt cú',
    tags: ['Tết Trùng Cửu', 'Tình thân', 'Nhớ quê'],
    lines: [
      { chinese: '独在异乡为异客', pinyin: 'Dú zài yì xiāng wéi yì kè', sinoVietnamese: 'Độc tại dị hương vi dị khách', literal: 'Một mình nơi đất khách quê người làm thân lữ thứ bơ vơ' },
      { chinese: '每逢佳节倍思亲', pinyin: 'Měi féng jiā jié bèi sī qīn', sinoVietnamese: 'Mỗi phùng giai tiết bội tư thân', literal: 'Mỗi khi gặp dịp lễ tết lại nhân đôi nỗi nhớ thương gia đình người thân' },
      { chinese: '遥知兄弟登高处', pinyin: 'Yáo zhī xiōng dì dēng gāo chù', sinoVietnamese: 'Dao tri huynh đệ đăng cao xứ', literal: 'Từ phương xa biết rằng các anh em đang cùng nhau leo lên đỉnh núi cao' },
      { chinese: '遍插茱萸少一人', pinyin: 'Biàn chā zhū yú shǎo yì rén', sinoVietnamese: 'Biến sáp thù du thiểu nhất nhân', literal: 'Ai nấy đều cài nhánh thù du lên áo, chỉ thiếu mất một người là ta.' },
    ],
    poeticTranslation: `Đơn độc tha hương thân khách trọ,
Mỗi mùa lễ tết nhớ người thân.
Phương xa huynh đệ trèo non ngắm,
Cài nhánh thù du thiếu một phần!`,
    poeticTranslator: 'Bản dịch thơ phỏng dịch',
    background: 'Vương Duy sáng tác bài thơ này khi mới 17 tuổi, lúc ông rời quê nhà bôn ba một mình tại kinh đô Trường An vào đúng dịp Tết Trùng Cửu (mùng 9 tháng 9 âm lịch).',
    appreciation: 'Câu thơ "Mỗi phùng giai tiết bội tư thân" (Mỗi độ tết đến lại nhân đôi nỗi nhớ người thân) đã trở thành tiếng lòng chung của muôn triệu người con xa xứ suốt hơn nghìn năm qua. Tác giả tưởng tượng cảnh anh em ở quê nhà cài nhánh thù du nhớ đến mình, một cách thể hiện tình cảm tinh tế vô song.',
    quiz: {
      question: 'Thành ngữ / câu nói nào bắt nguồn từ bài thơ này được dùng phổ biến mỗi khi lễ tết đến?',
      options: [
        'Vô biên lạc mộc tiêu tiêu hạ',
        'Mỗi phùng giai tiết bội tư thân (Mỗi dịp lễ tết lại nhân đôi nỗi nhớ gia đình)',
        'Đầu giường ánh trăng rọi',
        'Thuyền nhẹ đã qua muôn trùng núi'
      ],
      correctIndex: 1,
      explanation: '"Mỗi phùng giai tiết bội tư thân" là câu nói nổi tiếng nhất của những người con xa quê mỗi dịp tết sum vầy.'
    }
  },
  {
    id: 'jiang-xue',
    title: '江雪',
    pinyinTitle: 'Jiāng Xuě',
    sinoTitle: 'Giang Tuyết',
    author: 'Liễu Tông Nguyên (柳宗元)',
    authorDynasty: 'Trung Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Tuyết trắng', 'Khí phách', 'Tịch liêu'],
    lines: [
      { chinese: '千山鸟飞绝', pinyin: 'Qiān shān niǎo fēi jué', sinoVietnamese: 'Thiên sơn điểu phi tuyệt', literal: 'Ngàn ngọn núi tuyết phủ trắng xóa, bóng chim bay đã dứt hẳn' },
      { chinese: '万径人踪灭', pinyin: 'Wàn jìng rén zōng miè', sinoVietnamese: 'Vạn kính nhân tung diệt', literal: 'Muôn nẻo đường đi dấu chân người qua lại đều tiêu biến mất' },
      { chinese: '孤舟蓑笠翁', pinyin: 'Gū zhōu suō lì wēng', sinoVietnamese: 'Cô chu thoa lạp ông', literal: 'Trên chiếc thuyền con cô độc, có ông lão mặc áo tơi đội nón lá' },
      { chinese: '独钓寒江雪', pinyin: 'Dú diào hán jiāng xuě', sinoVietnamese: 'Độc điếu hàn giang tuyết', literal: 'Một mình buông cần câu giữa làn tuyết rơi lạnh giá trên dòng sông.' },
    ],
    poeticTranslation: `Nghìn non bóng chim bặt,
Muôn nẻo vết chân không.
Thuyền côi ông nón lá,
Một dải tuyết buông cần.`,
    poeticTranslator: 'Bản dịch thơ Trần Trọng San',
    background: 'Sau khi cuộc cải cách chính trị thất bại, Liễu Tông Nguyên bị biếm chức đày tới vùng Vĩnh Châu xa xôi hoang vu hẻo lánh. Trong nghịch cảnh cô độc và buốt giá, ông đã vẽ nên bức tranh thủy mặc độc nhất vô nhị này.',
    appreciation: 'Không gian mở ra vô cùng rộng lớn, hoang sơ và lạnh giá tột độ ("điểu phi tuyệt", "nhân tung diệt"). Thế nhưng giữa sự băng giá ngút ngàn ấy lại nổi bật lên hình tượng ông lão câu cá kiên định, ngạo nghễ, tượng trưng cho nhân cách thanh cao, kiên trinh bất khuất của nhà thơ trước bão giông cuộc đời.',
    quiz: {
      question: 'Hình tượng "ông lão mặc áo tơi một mình buông câu giữa trời tuyết lạnh" tượng trưng cho điều gì?',
      options: [
        'Một người đánh cá nghèo đói thiếu ăn',
        'Khí phách kiên cường, cô ngạo, không chịu khuất phục trước nghịch cảnh cuộc đời',
        'Thói quen câu cá giải trí mùa đông',
        'Sự buông xuôi đầu hàng số phận'
      ],
      correctIndex: 1,
      explanation: 'Hình tượng lão ngư câu tuyết đại diện cho bản lĩnh cứng cỏi và tâm hồn trong sạch của Liễu Tông Nguyên dù bị đày ải nơi hoang dã.'
    }
  },
  {
    id: 'wen-liu-shi-jiu',
    title: '问刘十九',
    pinyinTitle: 'Wèn Liú Shí Jiǔ',
    sinoTitle: 'Vấn Lưu Thập Cửu',
    author: 'Bạch Cư Dị (白居易)',
    authorDynasty: 'Trung Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Mời bạn', 'Uống rượu', 'Ấm áp'],
    lines: [
      { chinese: '绿蚁新醅酒', pinyin: 'Lǜ yǐ xīn pēi jiǔ', sinoVietnamese: 'Lục nghĩ tân bôi tửu', literal: 'Rượu nếp mới cất nổi bọt sủi tăm xanh như đàn kiến nhỏ' },
      { chinese: '红泥小火炉', pinyin: 'Hóng ní xiǎo huǒ lú', sinoVietnamese: 'Hồng nê tiểu hỏa lô', literal: 'Bếp than lò đất đỏ đượm hồng hơi ấm tỏa ra' },
      { chinese: '晚来天欲雪', pinyin: 'Wǎn lái tiān yù xuě', sinoVietnamese: 'Vãn lai thiên dục tuyết', literal: 'Chiều tà buông xuống, trời như sắp đổ cơn mưa tuyết trắng' },
      { chinese: '能饮一杯无', pinyin: 'Néng yǐn yì bēi wú', sinoVietnamese: 'Năng ẩm nhất bôi vô', literal: 'Liệu người bạn thân có thể ghé qua cùng ta uống một chén rượu ấm không?' },
    ],
    poeticTranslation: `Rượu mới sủi tăm xanh,
Lò than đất đỏ quanh.
Chiều buông trời sắp tuyết,
Cạn chén được không anh?`,
    poeticTranslator: 'Bản dịch thơ phỏng dịch',
    background: 'Bạch Cư Dị khi nhậm chức Tư mã tại Giang Châu, có một người bạn thân là Lưu Thập Cửu. Vào một buổi chiều mùa đông gió lạnh tuyết rơi mịt mùng, thi nhân đã viết bài thơ ngắn gửi gắm lời mời bạn chân thành và ấm cúng.',
    appreciation: 'Bài thơ tràn ngập sự ấm áp tình người giữa ngày đông giá rét. Màu xanh của bọt rượu, màu đỏ hồng của lò than rực sáng xua tan cái lạnh giá của tuyết chiều. Câu kết hỏi nhẹ tênh "Năng ẩm nhất bôi vô?" (Uống một chén được chăng?) chứa chan tình tri kỷ mộc mạc, gần gũi.',
    quiz: {
      question: 'Hình ảnh nào trong bài thơ mang lại cảm giác ấm cúng xua tan cái lạnh mùa đông?',
      options: [
        'Tiếng đàn tỳ bà giục giã',
        'Lò than đỏ bằng đất hồng và bình rượu nếp mới ủ',
        'Cánh buồm trắng trên sông',
        'Vầng trăng lạnh buốt đầu giường'
      ],
      correctIndex: 1,
      explanation: 'Hình ảnh "Hồng nê tiểu hỏa lô" (lò than đất hồng) bên bình rượu mới tạo cảm giác sum họp, ấm lòng giữa gió tuyết chiều đông.'
    }
  },
  {
    id: 'deng-yue-yang-lou',
    title: '登岳阳楼',
    pinyinTitle: 'Dēng Yuè Yáng Lóu',
    sinoTitle: 'Đăng Nhạc Dương Lâu',
    author: 'Đỗ Phủ (杜甫)',
    authorDynasty: 'Thịnh Đường',
    form: 'Thất ngôn luật thi',
    tags: ['Động Đình hồ', 'Ưu quốc ưu dân', 'Hùng vĩ'],
    lines: [
      { chinese: '昔闻洞庭水', pinyin: 'Xī wén Dòng tíng shuǐ', sinoVietnamese: 'Tích văn Động Đình thủy', literal: 'Thuở xưa từng nghe danh hồ Động Đình mênh mông sông nước' },
      { chinese: '今上岳阳楼', pinyin: 'Jīn shàng Yuè yáng lóu', sinoVietnamese: 'Kim thướng Nhạc Dương lâu', literal: 'Nay tuổi già mới có dịp bước chân lên lầu Nhạc Dương' },
      { chinese: '吴楚东南坼', pinyin: 'Wú Chǔ dōng nán chè', sinoVietnamese: 'Ngô Sở đông nam sách', literal: 'Đất nước Ngô và Sở bị hồ lớn chia đôi về hai ngả đông nam' },
      { chinese: '乾坤日夜浮', pinyin: 'Qián kūn rì yè fú', sinoVietnamese: 'Càn khôn nhật dạ phù', literal: 'Cả trời đất vũ trụ dường như ngày đêm đang bồng bềnh trôi trên sóng nước' },
      { chinese: '亲朋无一字', pinyin: 'Qīn péng wú yí zì', sinoVietnamese: 'Thân bằng vô nhất tự', literal: 'Người thân bạn bè không lấy một phong thư thăm hỏi' },
      { chinese: '老病有孤舟', pinyin: 'Lǎo bìng yǒu gū zhōu', sinoVietnamese: 'Lão bệnh hữu cô chu', literal: 'Tuổi già bệnh tật triền miên chỉ nương tựa vào con thuyền con lẻ loi' },
      { chinese: '戎马关山北', pinyin: 'Róng mǎ guān shān běi', sinoVietnamese: 'Nhung mã quan sơn bắc', literal: 'Khói lửa chiến tranh binh đao vẫn đang hoành hành nơi phía bắc cửa ải' },
      { chinese: '凭轩涕泗流', pinyin: 'Píng xuān tì sì liú', sinoVietnamese: 'Bằng hiên thế tứ lưu', literal: 'Tựa vào lan can lầu gác mà nước mắt xót thương dân chúng tuôn trào ròng ròng.' },
    ],
    poeticTranslation: `Động Đình nghe tiếng đã lâu,
Nay lên ngắm cảnh đỉnh lầu Nhạc Dương.
Đất trời Ngô Sở đôi phương,
Ngày đêm vũ trụ dập dường sóng xô.
Bạn bè thư chẳng thấy tơ,
Thân già đau yếu thuyền côi dãi dầu.
Quan sơn ngựa giặc xâu xé,
Tựa hiên nước mắt đẫm đầm chứa chan!`,
    poeticTranslator: 'Bản dịch thơ Tản Đà',
    background: 'Năm 768, Đỗ Phủ rời Tứ Xuyên trôi dạt đến Nhạc Dương (Hồ Nam). Dù thân mang trọng bệnh, lưu lạc không nơi nương tựa, nhưng khi đứng trên lầu Nhạc Dương trông ra hồ Động Đình, tấm lòng ông vẫn hướng trọn về vận mệnh đất nước đang chìm trong binh đao.',
    appreciation: 'Đỗ Phủ mở rộng tầm vóc của bài thơ từ hồ Động Đình rộng lớn ("Càn khôn nhật dạ phù") đến nỗi đau tột cùng của muôn dân bá tánh ("Bằng hiên thế tứ lưu"). Đây là tấm lòng bác ái vĩ đại của bậc Thi Thánh suốt đời đau nỗi đau của nhân loại.',
    quiz: {
      question: 'Tại sao khi đứng trên lầu Nhạc Dương ngắm cảnh đẹp, Đỗ Phủ lại rơi nước mắt ("Bằng hiên thế tứ lưu")?',
      options: [
        'Vì gió lạnh thổi vào mắt cay xè',
        'Vì đau xót khi nghĩ đến cảnh chiến tranh loạn lạc phía bắc giang sơn và nỗi thống khổ của nhân dân',
        'Vì nhớ nhà không có tiền mua vé tàu về',
        'Vì lầu Nhạc Dương xây quá cao'
      ],
      correctIndex: 1,
      explanation: 'Tấm lòng "Ưu quốc ưu dân" (lo cho nước, thương cho dân) là cốt cách cao đẹp nhất trong thơ văn của Thi Thánh Đỗ Phủ.'
    }
  },
  {
    id: 'ting-dan-gu-zheng',
    title: '听弹古筝',
    pinyinTitle: 'Tīng Tán Gǔ Zhēng',
    sinoTitle: 'Thính Đạn Cổ Tranh',
    author: 'Lý Đoan (李端)',
    authorDynasty: 'Trung Đường',
    form: 'Ngũ ngôn tuyệt cú',
    tags: ['Âm nhạc', 'Ý nhị', 'Duyên dáng'],
    lines: [
      { chinese: '鸣筝金粟柱', pinyin: 'Míng zhēng jīn sù zhù', sinoVietnamese: 'Minh tranh kim túc trụ', literal: 'Đàn tranh cất tiếng reo, trục đàn dát hạt vàng óng ánh' },
      { chinese: '素手玉房前', pinyin: 'Sù shǒu yù fáng qián', sinoVietnamese: 'Tố thủ ngọc phòng tiền', literal: 'Bàn tay trắng muốt mềm mại gảy đàn trước căn phòng ngọc' },
      { chinese: '欲得周郎顾', pinyin: 'Yù dé Zhōu láng gù', sinoVietnamese: 'Dục đắc Chu lang cố', literal: 'Vì muốn được chàng Chu Du tài hoa ngoái lại nhìn mình' },
      { chinese: '时时误拂弦', pinyin: 'Shí shí wù fú xián', sinoVietnamese: 'Thời thời ngộ phất huyền', literal: 'Nên thỉnh thoảng cố tình gảy chệch một cung đàn.' },
    ],
    poeticTranslation: `Đàn tranh dát trụ hạt vàng,
Tay ngà dạo phím rộn ràng phòng châu.
Muốn chàng Chu đoái mắt sầu,
Cố tình gảy nhầm vài câu dạo đàn.`,
    poeticTranslator: 'Bản dịch thơ phỏng dịch',
    background: 'Lý Đoan là một trong "Đại Lịch thập tài tử" thời Trung Đường. Bài thơ mượn điển tích Tam Quốc: Danh tướng Chu Du (Chu Lang) là bậc thầy âm luật, hễ ai gảy đàn sai nốt nhạc dù đang uống say chàng cũng lập tức quay đầu lại nhìn ("Khúc hữu ngộ, Chu Lang cố").',
    appreciation: 'Một bài thơ duyên dáng và dí dỏm bậc nhất. Người con gái chơi đàn không phải vì tay nghề vụng về mà gảy sai, mà là cái "sai có chủ đích" đầy e ấp và thông minh để thu hút ánh nhìn của người trong mộng. Nét tâm lý tinh tế ấy đã làm say lòng độc giả ngàn đời.',
    quiz: {
      question: 'Tại sao người thiếu nữ trong bài thơ lại "thỉnh thoảng gảy sai cung đàn"?',
      options: [
        'Vì mới học đàn nên tay nghề còn non nớt',
        'Vì muốn người nghe tài hoa như Chu Du chú ý ngoái nhìn lại mình',
        'Vì dây đàn bị đứt',
        'Vì căn phòng quá tối không nhìn rõ phím đàn'
      ],
      correctIndex: 1,
      explanation: 'Một cử chỉ tinh nghịch, duyên dáng mượn điển tích Chu Du sành âm nhạc để đổi lấy ánh mắt của người thương.'
    }
  }
];

// Local storage progress helper for Tang Poems
const POETRY_STORAGE_KEY = 'hanyu_poetry_progress';

export interface PoetryUserProgress {
  readIds: string[];
  quizPassedIds: string[];
  xp: number;
}

export function getPoetryProgress(): PoetryUserProgress {
  try {
    const raw = localStorage.getItem(POETRY_STORAGE_KEY);
    if (!raw) return { readIds: [], quizPassedIds: [], xp: 0 };
    return JSON.parse(raw);
  } catch {
    return { readIds: [], quizPassedIds: [], xp: 0 };
  }
}

export function markPoemAsRead(poemId: string): PoetryUserProgress {
  const current = getPoetryProgress();
  if (!current.readIds.includes(poemId)) {
    current.readIds.push(poemId);
    try {
      localStorage.setItem(POETRY_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Cannot save poem read status', e);
    }
  }
  return current;
}

export function recordPoemQuizPass(poemId: string, xpReward = 10): { progress: PoetryUserProgress; justEarned: boolean } {
  const current = getPoetryProgress();
  let justEarned = false;
  if (!current.quizPassedIds.includes(poemId)) {
    current.quizPassedIds.push(poemId);
    current.xp += xpReward;
    if (!current.readIds.includes(poemId)) {
      current.readIds.push(poemId);
    }
    justEarned = awardXp(`poetry:quiz:${poemId}`, "poetry", xpReward) > 0;
    try {
      localStorage.setItem(POETRY_STORAGE_KEY, JSON.stringify(current));
    } catch (e) {
      console.warn('Cannot save poem quiz pass status', e);
    }
  }
  return { progress: current, justEarned };
}
