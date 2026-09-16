export interface SongWordToken {
  c: string; // Chữ Hán hoặc cụm từ
  p?: string; // Pinyin
  meaning?: string; // Nghĩa tiếng Việt ngắn gọn
  hanviet?: string; // Âm Hán Việt
}

export interface SongVocabItem {
  word: string;
  pinyin: string;
  hanviet: string;
  meaning: string;
  hskLevel?: string;
  exampleSentence?: string;
}

export interface SongLine {
  id: string;
  startTime: number; // Giây bắt đầu câu hát
  endTime: number;   // Giây kết thúc câu hát
  zh: string;        // Câu chữ Hán
  py: string;        // Pinyin đầy đủ có dấu thanh
  vi: string;        // Lời dịch tiếng Việt mượt mà
  tokens?: SongWordToken[]; // Từng chữ/cụm chữ để học sinh bấm vào nghe phát âm chậm
  vocab?: SongVocabItem[];  // Danh sách từ mới trọng tâm trong câu
  grammarNote?: string;     // Điểm ngữ pháp đáng chú ý
}

export interface Song {
  id: string;
  titleZh: string;
  titlePy: string;
  titleVi: string;
  artist: string;
  coverImage: string;
  audioUrl?: string;     // Link file mp3 trực tiếp (nếu có)
  youtubeEmbedUrl?: string; // Link embed video YouTube (nếu có)
  category: 'thieu-nhi' | 'kinh-dien' | 'hot-douyin' | 'pop-ballad';
  categoryLabel: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Nâng cao';
  hskLevel: string;
  duration: number; // Thời lượng tổng tính bằng giây
  readingDuration: string; // Ví dụ "3:15"
  description: string;
  culturalNote?: string;
  isFeatured?: boolean;
  lines: SongLine[];
}

export const SONGS_DATA: Song[] = [
  {
    id: 'giay-tiep-theo',
    titleZh: '下一秒',
    titlePy: 'Xià Yì Miǎo',
    titleVi: 'Giây Tiếp Theo (OST Yêu Em Từ Cái Nhìn Đầu Tiên)',
    artist: 'Trương Bích Thần (张碧晨 - Zhang Bichen)',
    coverImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
    audioUrl: '/songs/giaytieptheo.mp3',
    category: 'kinh-dien',
    categoryLabel: 'Nhạc Phim & Lãng Mạn · 影视金曲',
    difficulty: 'Dễ',
    hskLevel: 'HSK 1-3',
    duration: 28,
    readingDuration: '0:28',
    description: 'Bản nhạc phim OST kinh điển trong bộ phim truyền hình nổi tiếng "Yêu em từ cái nhìn đầu tiên" (微微一笑很倾城). Giai điệu piano trong sáng, ngọt ngào cùng giọng hát ấm áp đầy cảm xúc của Trương Bích Thần.',
    culturalNote: 'Ca khúc do nhạc sĩ Uông Tô Lang (汪苏泷) sáng tác riêng cho bộ phim "Yêu em từ cái nhìn đầu tiên", gắn liền với mối tình học đường tuyệt đẹp của Tiêu Nại và Bối Vi Vi, trở thành bài hát tỏ tình quốc dân được giới trẻ châu Á yêu thích.',
    isFeatured: true,
    lines: [
      {
        id: 'xym-1',
        startTime: 0,
        endTime: 9.2,
        zh: '好想能看到你嘴角微笑',
        py: 'Hǎo xiǎng néng kàndào nǐ zuǐjiǎo wēixiào',
        vi: 'Rất mong có thể nhìn thấy nụ cười mỉm nơi khóe môi anh',
        tokens: [
          { c: '好想', p: 'hǎo xiǎng', meaning: 'rất muốn, rất mong', hanviet: 'hảo tưởng' },
          { c: '能', p: 'néng', meaning: 'có thể', hanviet: 'năng' },
          { c: '看到', p: 'kàn dào', meaning: 'nhìn thấy', hanviet: 'khán đáo' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '嘴角', p: 'zuǐ jiǎo', meaning: 'khóe miệng, khóe môi', hanviet: 'chuỷ giác' },
          { c: '微笑', p: 'wēi xiào', meaning: 'mỉm cười, nụ cười', hanviet: 'vi tiếu' }
        ],
        vocab: [
          { word: '嘴角', pinyin: 'zuǐjiǎo', hanviet: 'chuỷ giác', meaning: 'Khóe môi, khóe miệng', hskLevel: 'HSK 4' },
          { word: '微笑', pinyin: 'wēixiào', hanviet: 'vi tiếu', meaning: 'Mỉm cười, nụ cười hiền', hskLevel: 'HSK 3' },
          { word: '看到', pinyin: 'kàndào', hanviet: 'khán đáo', meaning: 'Nhìn thấy, trông thấy', hskLevel: 'HSK 1' }
        ],
        grammarNote: 'Cấu trúc biểu đạt cảm xúc: "好想 + Động từ": Diễn tả nỗi khao khát, mong mỏi tha thiết được làm một việc gì đó.'
      },
      {
        id: 'xym-2',
        startTime: 9.3,
        endTime: 15.3,
        zh: '最好在下一秒',
        py: 'Zuìhǎo zài xià yì miǎo',
        vi: 'Tốt nhất là ngay trong giây tiếp theo',
        tokens: [
          { c: '最好', p: 'zuì hǎo', meaning: 'tốt nhất là', hanviet: 'tối hảo' },
          { c: '在', p: 'zài', meaning: 'ở, ngay trong', hanviet: 'tại' },
          { c: '下一秒', p: 'xià yì miǎo', meaning: 'giây tiếp theo', hanviet: 'hạ nhất miểu' }
        ],
        vocab: [
          { word: '最好', pinyin: 'zuìhǎo', hanviet: 'tối hảo', meaning: 'Tốt nhất là, nên chăng', hskLevel: 'HSK 3' },
          { word: '秒', pinyin: 'miǎo', hanviet: 'miểu', meaning: 'Giây (đơn vị đo thời gian)', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Phó từ "最好": Dùng ở đầu câu để đề xuất hoặc mong ước viễn cảnh lý tưởng nhất (tốt hơn hết là...).'
      },
      {
        id: 'xym-3',
        startTime: 15.4,
        endTime: 22.2,
        zh: '好想能听到你轻声歌唱',
        py: 'Hǎo xiǎng néng tīngdào nǐ qīngshēng gēchàng',
        vi: 'Rất mong có thể lắng nghe anh khẽ cất tiếng ca',
        tokens: [
          { c: '好想', p: 'hǎo xiǎng', meaning: 'rất mong', hanviet: 'hảo tưởng' },
          { c: '能', p: 'néng', meaning: 'có thể', hanviet: 'năng' },
          { c: '听到', p: 'tīng dào', meaning: 'nghe thấy', hanviet: 'thính đáo' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '轻声', p: 'qīng shēng', meaning: 'khẽ giọng, thì thầm nhẹ nhàng', hanviet: 'khinh thanh' },
          { c: '歌唱', p: 'gē chàng', meaning: 'ca hát, hát', hanviet: 'ca xướng' }
        ],
        vocab: [
          { word: '听到', pinyin: 'tīngdào', hanviet: 'thính đáo', meaning: 'Nghe thấy (kết quả)', hskLevel: 'HSK 1' },
          { word: '轻声', pinyin: 'qīngshēng', hanviet: 'khinh thanh', meaning: 'Nhỏ giọng, khẽ khàng, dịu dàng', hskLevel: 'HSK 4' },
          { word: '歌唱', pinyin: 'gēchàng', hanviet: 'ca xướng', meaning: 'Ca hát, cất tiếng hát', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Từ ghép miêu tả âm điệu "轻声": Diễn tả giọng hát hoặc lời nói nhỏ nhẹ, êm đềm, chất chứa yêu thương.'
      },
      {
        id: 'xym-4',
        startTime: 22.3,
        endTime: 28.35,
        zh: '最好在下一秒',
        py: 'Zuìhǎo zài xià yì miǎo',
        vi: 'Tốt nhất là ngay trong giây tiếp theo này',
        tokens: [
          { c: '最好', p: 'zuì hǎo', meaning: 'tốt nhất', hanviet: 'tối hảo' },
          { c: '在', p: 'zài', meaning: 'ngay trong', hanviet: 'tại' },
          { c: '下一秒', p: 'xià yì miǎo', meaning: 'giây tiếp theo', hanviet: 'hạ nhất miểu' }
        ],
        vocab: [
          { word: '最好', pinyin: 'zuìhǎo', hanviet: 'tối hảo', meaning: 'Tốt nhất', hskLevel: 'HSK 3' },
          { word: '下', pinyin: 'xià', hanviet: 'hạ', meaning: 'Tiếp theo, sau', hskLevel: 'HSK 1' }
        ],
        grammarNote: 'Sự lặp lại câu điệp khúc "最好在下一秒" thể hiện tâm trạng nôn nóng, ngọt ngào không muốn chờ đợi thêm một khoảnh khắc nào.'
      }
    ]
  },
  {
    id: 'thich-a-tu',
    titleZh: '喜欢',
    titlePy: 'Xǐhuan',
    titleVi: 'Thích (Đoạn điệp khúc nổi tiếng)',
    artist: 'A Tứ (阿肆 - A Si)',
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
    audioUrl: '/songs/xihuan-a-si.mp3',
    category: 'hot-douyin',
    categoryLabel: 'Hot Douyin / Giới Trẻ · 流行网络',
    difficulty: 'Trung bình',
    hskLevel: 'HSK 3-5',
    duration: 26,
    readingDuration: '0:26',
    description: 'Bản hit Indie Pop đình đám gây bão trên mạng xã hội của A Tứ. Ca từ độc đáo, giàu chất thơ và đậm chất đời sống: một trái tim có thể kiên cường trước mọi sóng gió cuộc đời nhưng lại hoàn toàn tan chảy trước tình cảm dành cho người mình yêu.',
    culturalNote: 'Bài hát ra mắt cuối năm 2017 và nhanh chóng tạo nên trào lưu lớn trên Douyin & TikTok. Câu hát "扛住了柴米油盐的麻烦，却扛不住对你的喜欢" đã trở thành câu nói tỏ tình kinh điển của giới trẻ Hoa ngữ.',
    isFeatured: true,
    lines: [
      {
        id: 'xh-1',
        startTime: 0,
        endTime: 4.3,
        zh: '无时无刻',
        py: 'Wú shí wú kè',
        vi: 'Từng giây từng phút, không lúc nào nguôi',
        tokens: [
          { c: '无时无刻', p: 'wú shí wú kè', meaning: 'mọi lúc mọi nơi, từng giây từng phút', hanviet: 'vô thời vô khắc' }
        ],
        vocab: [
          { word: '无时无刻', pinyin: 'wú shí wú kè', hanviet: 'vô thời vô khắc', meaning: 'Mọi lúc mọi nơi, từng giây từng phút (thành ngữ)', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Thành ngữ "无时无刻" thường dùng để nhấn mạnh tâm trí luôn luôn nghĩ về điều gì đó, không một phút giây nào ngơi nghỉ.'
      },
      {
        id: 'xh-2',
        startTime: 4.4,
        endTime: 10.3,
        zh: '像是一首无法停止单曲循环的无名歌',
        py: 'Xiàng shì yì shǒu wúfǎ tíngzhǐ dānqǔ xúnhuán de wúmíng gē',
        vi: 'Tựa như một khúc ca không tên cứ lặp đi lặp lại mãi chẳng thể ngừng',
        tokens: [
          { c: '像是', p: 'xiàng shì', meaning: 'tựa như, giống như', hanviet: 'tượng thị' },
          { c: '一首', p: 'yì shǒu', meaning: 'một bài (lượng từ bài hát)', hanviet: 'nhất thủ' },
          { c: '无法', p: 'wú fǎ', meaning: 'không thể nào', hanviet: 'vô pháp' },
          { c: '停止', p: 'tíng zhǐ', meaning: 'dừng lại, ngừng', hanviet: 'đình chỉ' },
          { c: '单曲循环', p: 'dān qǔ xún huán', meaning: 'lặp đi lặp lại một bài hát', hanviet: 'đơn khúc tuần hoàn' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '无名歌', p: 'wú míng gē', meaning: 'khúc ca không tên', hanviet: 'vô danh ca' }
        ],
        vocab: [
          { word: '无法', pinyin: 'wúfǎ', hanviet: 'vô pháp', meaning: 'Không có cách nào, không thể', hskLevel: 'HSK 4' },
          { word: '停止', pinyin: 'tíngzhǐ', hanviet: 'đình chỉ', meaning: 'Ngừng lại, dừng hẳn', hskLevel: 'HSK 4' },
          { word: '循环', pinyin: 'xúnhuán', hanviet: 'tuần hoàn', meaning: 'Vòng lặp, tuần hoàn', hskLevel: 'HSK 5' },
          { word: '单曲循环', pinyin: 'dānqǔ xúnhuán', hanviet: 'đơn khúc tuần hoàn', meaning: 'Chế độ lặp đi lặp lại một bài hát', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Cấu trúc so sánh ẩn dụ: "像是... 的..." (Tựa như là...). Lượng từ của bài hát là "首" (shǒu).'
      },
      {
        id: 'xh-3',
        startTime: 10.4,
        endTime: 14.1,
        zh: '扛住了柴米油盐的麻烦',
        py: 'Káng zhù le chái mǐ yóu yán de máfan',
        vi: 'Gánh chịu nổi bao phiền toái củi gạo dầu muối của đời thường',
        tokens: [
          { c: '扛住了', p: 'káng zhù le', meaning: 'gánh vác được, chịu đựng nổi', hanviet: 'khang trụ liễu' },
          { c: '柴米油盐', p: 'chái mǐ yóu yán', meaning: 'củi gạo dầu muối (cơm áo gạo tiền)', hanviet: 'sài mễ du diêm' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '麻烦', p: 'má fan', meaning: 'phiền phức, rắc rối', hanviet: 'ma phiền' }
        ],
        vocab: [
          { word: '扛', pinyin: 'káng', hanviet: 'khang', meaning: 'Gánh vác, chống đỡ, chịu đựng', hskLevel: 'HSK 4' },
          { word: '柴米油盐', pinyin: 'chái mǐ yóu yán', hanviet: 'sài mễ du diêm', meaning: 'Củi gạo dầu muối (thành ngữ chỉ cuộc sống mưu sinh thường nhật)', hskLevel: 'HSK 5' },
          { word: '麻烦', pinyin: 'máfan', hanviet: 'ma phiền', meaning: 'Phiền phức, rắc rối', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Bổ ngữ kết quả: "扛" (gánh) + "住" (chắc, vững) = 扛住 (chống đỡ nổi, chịu đựng được).'
      },
      {
        id: 'xh-4',
        startTime: 14.2,
        endTime: 18.0,
        zh: '扛住了朋友聚会的调侃',
        py: 'Káng zhù le péngyou jùhuì de tiáokǎn',
        vi: 'Chống đỡ nổi những lời trêu đùa trong buổi tụ họp bạn bè',
        tokens: [
          { c: '扛住了', p: 'káng zhù le', meaning: 'chống đỡ nổi', hanviet: 'khang trụ liễu' },
          { c: '朋友', p: 'péng you', meaning: 'bạn bè', hanviet: 'bằng hữu' },
          { c: '聚会', p: 'jù huì', meaning: 'tụ họp, gặp mặt', hanviet: 'tụ hội' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '调侃', p: 'tiáo kǎn', meaning: 'trêu chọc, giễu vui', hanviet: 'điều khản' }
        ],
        vocab: [
          { word: '聚会', pinyin: 'jùhuì', hanviet: 'tụ hội', meaning: 'Buổi họp mặt, tụ tập liên hoan', hskLevel: 'HSK 4' },
          { word: '调侃', pinyin: 'tiáokǎn', hanviet: 'điều khản', meaning: 'Trêu chọc, chế giễu hài hước, trêu đùa', hskLevel: 'HSK 5' }
        ]
      },
      {
        id: 'xh-5',
        startTime: 18.1,
        endTime: 21.9,
        zh: '扛住了世俗生活的刁难',
        py: 'Káng zhù le shìsú shēnghuó de diāonàn',
        vi: 'Vượt qua được sự làm khó, trắc trở của cuộc sống thế tục',
        tokens: [
          { c: '扛住了', p: 'káng zhù le', meaning: 'chống chọi được', hanviet: 'khang trụ liễu' },
          { c: '世俗', p: 'shì sú', meaning: 'thế tục, đời thường', hanviet: 'thế tục' },
          { c: '生活', p: 'shēng huó', meaning: 'cuộc sống', hanviet: 'sinh hoạt' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '刁难', p: 'diāo nàn', meaning: 'gây khó dễ, làm khó', hanviet: 'điêu nan' }
        ],
        vocab: [
          { word: '世俗', pinyin: 'shìsú', hanviet: 'thế tục', meaning: 'Thế tục, trần tục, quan niệm thông thường', hskLevel: 'HSK 5' },
          { word: '生活', pinyin: 'shēnghuó', hanviet: 'sinh hoạt', meaning: 'Cuộc sống, đời sống', hskLevel: 'HSK 2' },
          { word: '刁难', pinyin: 'diāonàn', hanviet: 'điêu nan', meaning: 'Làm khó dễ, cố tình gây trắc trở', hskLevel: 'HSK 5' }
        ]
      },
      {
        id: 'xh-6',
        startTime: 22.0,
        endTime: 25.86,
        zh: '却扛不住对你的喜欢',
        py: 'Què káng bú zhù duì nǐ de xǐhuan',
        vi: 'Nhưng lại chẳng thể nào chống cự nổi tình cảm thích anh',
        tokens: [
          { c: '却', p: 'què', meaning: 'nhưng, lại', hanviet: 'khước' },
          { c: '扛不住', p: 'káng bú zhù', meaning: 'không chống đỡ nổi', hanviet: 'khang bất trụ' },
          { c: '对你的', p: 'duì nǐ de', meaning: 'dành cho anh', hanviet: 'đối nhĩ đích' },
          { c: '喜欢', p: 'xǐ huan', meaning: 'sự yêu thích, thích', hanviet: 'hỉ hoan' }
        ],
        vocab: [
          { word: '却', pinyin: 'què', hanviet: 'khước', meaning: 'Lại, nhưng (liên từ chuyển ý)', hskLevel: 'HSK 3' },
          { word: '扛不住', pinyin: 'káng bú zhù', hanviet: 'khang bất trụ', meaning: 'Không chịu nổi, bất lực không kháng cự được', hskLevel: 'HSK 4' },
          { word: '喜欢', pinyin: 'xǐhuan', hanviet: 'hỉ hoan', meaning: 'Thích, yêu mến', hskLevel: 'HSK 1' }
        ],
        grammarNote: 'Cấu trúc tương phản: "扛住了 A... 却扛不住 B..." (Chống chọi được tất cả phong ba bão táp, nhưng lại gục ngã trước tình cảm chân thành).'
      }
    ]
  },
  {
    id: 'yueliang-daibiao-wo-de-xin',
    titleZh: '月亮代表我的心',
    titlePy: 'Yuèliang Dàibiǎo Wǒ de Xīn',
    titleVi: 'Ánh Trăng Nói Hộ Lòng Tôi',
    artist: 'Đặng Lệ Quân (邓丽君 - Teresa Teng)',
    coverImage: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=800&auto=format&fit=crop',
    audioUrl: '/songs/anhtrangnoiholongtoi.mp3',
    category: 'kinh-dien',
    categoryLabel: 'Nhạc Kinh Điển · 经典老歌',
    difficulty: 'Dễ',
    hskLevel: 'HSK 1-2',
    duration: 50,
    readingDuration: '0:50',
    description: 'Bản tình ca bất hủ của nền âm nhạc Hoa ngữ, giai điệu êm ái, lời ca mộc mạc giàu chất thơ, cực kỳ thích hợp cho người mới học tiếng Trung làm quen với ngữ điệu nhẹ nhàng và tình cảm.',
    culturalNote: 'Ra đời vào thập niên 1970 và nổi tiếng toàn cầu qua tiếng hát Đặng Lệ Quân. Hình ảnh ánh trăng (月亮) trong văn hóa Trung Hoa tượng trưng cho sự đoàn tụ, chân thành và vĩnh hằng.',
    isFeatured: true,
    lines: [
      {
        id: 'line-1',
        startTime: 0,
        endTime: 6.2,
        zh: '你问我爱你有多深',
        py: 'Nǐ wèn wǒ ài nǐ yǒu duō shēn',
        vi: 'Anh hỏi em yêu anh sâu đậm dường nào',
        tokens: [
          { c: '你', p: 'nǐ', meaning: 'bạn, anh', hanviet: 'nhĩ' },
          { c: '问', p: 'wèn', meaning: 'hỏi', hanviet: 'vấn' },
          { c: '我', p: 'wǒ', meaning: 'tôi, em', hanviet: 'ngã' },
          { c: '爱', p: 'ài', meaning: 'yêu', hanviet: 'ái' },
          { c: '你', p: 'nǐ', meaning: 'bạn, anh', hanviet: 'nhĩ' },
          { c: '有', p: 'yǒu', meaning: 'có', hanviet: 'hữu' },
          { c: '多', p: 'duō', meaning: 'bao nhiêu, biết bao', hanviet: 'đa' },
          { c: '深', p: 'shēn', meaning: 'sâu, đậm sâu', hanviet: 'thâm' }
        ],
        vocab: [
          { word: '问', pinyin: 'wèn', hanviet: 'vấn', meaning: 'Hỏi, chất vấn', hskLevel: 'HSK 1' },
          { word: '有多深', pinyin: 'yǒu duō shēn', hanviet: 'hữu đa thâm', meaning: 'Sâu đậm biết nhường nào', hskLevel: 'HSK 2' }
        ],
        grammarNote: 'Cấu trúc "多 + Tính từ?" (多深 / 多大 / 多高) dùng để hỏi hoặc cảm thán về mức độ, độ sâu, độ rộng.'
      },
      {
        id: 'line-2',
        startTime: 6.3,
        endTime: 12.2,
        zh: '我爱你有几分',
        py: 'Wǒ ài nǐ yǒu jǐ fēn',
        vi: 'Em yêu anh được mấy phần sâu nặng',
        tokens: [
          { c: '我', p: 'wǒ', meaning: 'tôi, em', hanviet: 'ngã' },
          { c: '爱', p: 'ài', meaning: 'yêu', hanviet: 'ái' },
          { c: '你', p: 'nǐ', meaning: 'bạn, anh', hanviet: 'nhĩ' },
          { c: '有', p: 'yǒu', meaning: 'có', hanviet: 'hữu' },
          { c: '几分', p: 'jǐ fēn', meaning: 'mấy phần', hanviet: 'kỷ phân' }
        ],
        vocab: [
          { word: '几分', pinyin: 'jǐ fēn', hanviet: 'kỷ phân', meaning: 'Mấy phần, một chút (đo lường mức độ tình cảm)', hskLevel: 'HSK 2' }
        ]
      },
      {
        id: 'line-3',
        startTime: 12.3,
        endTime: 18.5,
        zh: '我的情也真，我的爱也真',
        py: 'Wǒ de qíng yě zhēn, wǒ de ài yě zhēn',
        vi: 'Tình cảm của em là chân thật, tình yêu của em cũng thật lòng',
        tokens: [
          { c: '我', p: 'wǒ', meaning: 'tôi', hanviet: 'ngã' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '情', p: 'qíng', meaning: 'tình cảm', hanviet: 'tình' },
          { c: '也', p: 'yě', meaning: 'cũng', hanviet: 'dã' },
          { c: '真', p: 'zhēn', meaning: 'thật, chân thật', hanviet: 'chân' },
          { c: '，', p: '' },
          { c: '我的', p: 'wǒ de', meaning: 'của em', hanviet: 'ngã đích' },
          { c: '爱', p: 'ài', meaning: 'tình yêu', hanviet: 'ái' },
          { c: '也真', p: 'yě zhēn', meaning: 'cũng chân thành', hanviet: 'dã chân' }
        ],
        vocab: [
          { word: '情', pinyin: 'qíng', hanviet: 'tình', meaning: 'Tình cảm, ân tình', hskLevel: 'HSK 3' },
          { word: '真', pinyin: 'zhēn', hanviet: 'chân', meaning: 'Thật, chân thật, thành thật', hskLevel: 'HSK 2' }
        ]
      },
      {
        id: 'line-4',
        startTime: 18.6,
        endTime: 24.8,
        zh: '月亮代表我的心',
        py: 'Yuèliang dàibiǎo wǒ de xīn',
        vi: 'Vầng trăng kia sẽ nói thay hộ lòng em',
        tokens: [
          { c: '月亮', p: 'yuè liang', meaning: 'mặt trăng', hanviet: 'nguyệt lượng' },
          { c: '代表', p: 'dài biǎo', meaning: 'đại diện, thay mặt', hanviet: 'đại biểu' },
          { c: '我的', p: 'wǒ de', meaning: 'của em', hanviet: 'ngã đích' },
          { c: '心', p: 'xīn', meaning: 'trái tim, tấm lòng', hanviet: 'tâm' }
        ],
        vocab: [
          { word: '月亮', pinyin: 'yuèliang', hanviet: 'nguyệt lượng', meaning: 'Mặt trăng, ánh trăng', hskLevel: 'HSK 1' },
          { word: '代表', pinyin: 'dàibiǎo', hanviet: 'đại biểu', meaning: 'Đại diện, thay mặt, biểu thị', hskLevel: 'HSK 3' },
          { word: '心', pinyin: 'xīn', hanviet: 'tâm', meaning: 'Trái tim, tấm lòng', hskLevel: 'HSK 2' }
        ],
        grammarNote: 'Động từ "代表" dùng trong nghĩa ẩn dụ: làm nhân chứng, đại diện cho tình cảm vô bờ bến.'
      },
      {
        id: 'line-5',
        startTime: 24.9,
        endTime: 31.0,
        zh: '你问我爱你有多深',
        py: 'Nǐ wèn wǒ ài nǐ yǒu duō shēn',
        vi: 'Anh hỏi em yêu anh sâu đậm dường nào',
        tokens: [
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '问', p: 'wèn', meaning: 'hỏi', hanviet: 'vấn' },
          { c: '我', p: 'wǒ', meaning: 'em', hanviet: 'ngã' },
          { c: '爱', p: 'ài', meaning: 'yêu', hanviet: 'ái' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '有', p: 'yǒu', meaning: 'có', hanviet: 'hữu' },
          { c: '多深', p: 'duō shēn', meaning: 'sâu đậm dường bao', hanviet: 'đa thâm' }
        ]
      },
      {
        id: 'line-6',
        startTime: 31.1,
        endTime: 37.2,
        zh: '我爱你有几分',
        py: 'Wǒ ài nǐ yǒu jǐ fēn',
        vi: 'Em yêu anh được mấy phần đậm sâu',
        tokens: [
          { c: '我', p: 'wǒ', meaning: 'em', hanviet: 'ngã' },
          { c: '爱', p: 'ài', meaning: 'yêu', hanviet: 'ái' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '有', p: 'yǒu', meaning: 'có', hanviet: 'hữu' },
          { c: '几分', p: 'jǐ fēn', meaning: 'mấy phần', hanviet: 'kỷ phân' }
        ]
      },
      {
        id: 'line-7',
        startTime: 37.3,
        endTime: 43.5,
        zh: '我的情不移，我的爱不变',
        py: 'Wǒ de qíng bù yí, wǒ de ài bù biàn',
        vi: 'Tình cảm của em không đổi dời, tình yêu của em chẳng nhạt phai',
        tokens: [
          { c: '我的', p: 'wǒ de', meaning: 'của em', hanviet: 'ngã đích' },
          { c: '情', p: 'qíng', meaning: 'tình', hanviet: 'tình' },
          { c: '不移', p: 'bù yí', meaning: 'không xê dịch, không đổi', hanviet: 'bất di' },
          { c: '，', p: '' },
          { c: '我的', p: 'wǒ de', meaning: 'của em', hanviet: 'ngã đích' },
          { c: '爱', p: 'ài', meaning: 'tình yêu', hanviet: 'ái' },
          { c: '不变', p: 'bù biàn', meaning: 'không thay đổi', hanviet: 'bất biến' }
        ],
        vocab: [
          { word: '不移', pinyin: 'bù yí', hanviet: 'bất di', meaning: 'Không dời đổi, kiên định', hskLevel: 'HSK 4' },
          { word: '不变', pinyin: 'bù biàn', hanviet: 'bất biến', meaning: 'Không thay đổi, bền vững', hskLevel: 'HSK 3' }
        ]
      },
      {
        id: 'line-8',
        startTime: 43.6,
        endTime: 49.76,
        zh: '月亮代表我的心',
        py: 'Yuèliang dàibiǎo wǒ de xīn',
        vi: 'Ánh trăng sáng kia sẽ chứng giám lòng em',
        tokens: [
          { c: '月亮', p: 'yuè liang', meaning: 'vầng trăng', hanviet: 'nguyệt lượng' },
          { c: '代表', p: 'dài biǎo', meaning: 'nói hộ, thay lời', hanviet: 'đại biểu' },
          { c: '我的', p: 'wǒ de', meaning: 'của em', hanviet: 'ngã đích' },
          { c: '心', p: 'xīn', meaning: 'trái tim', hanviet: 'tâm' }
        ]
      }
    ]
  },
  {
    id: 'goi-gon-hoi-uc',
    titleZh: '把回忆拼好给你',
    titlePy: 'Bǎ Huíyì Pīn Hǎo Gěi Nǐ',
    titleVi: 'Gói Gọn Hồi Ức Trao Anh',
    artist: 'Vương Nhị Lãng · Zyboy忠宇',
    coverImage: '/songs/goigonhoiuc.v1.webp',
    audioUrl: '/songs/goigonhoiuc.mp3',
    category: 'hot-douyin',
    categoryLabel: 'Hot Douyin / Giới Trẻ · 流行网络',
    difficulty: 'Trung bình',
    hskLevel: 'HSK 3-5',
    duration: 40,
    readingDuration: '0:40',
    description: 'Bản hit ballad & rap melody đình đám càn quét khắp mạng xã hội Douyin và TikTok. Giai điệu hoài niệm sâu lắng đan xen giữa những tiếc nuối và sự dịu dàng buông tay, chúc người kia một đời bình an sau những tổn thương tuổi trẻ.',
    culturalNote: 'Ca khúc "把回忆拼好给你" (Gói Gọn Hồi Ức Trao Cho Anh) chuyển thể lời Hoa từ bản nhạc Nhật Bản kinh điển. Ca từ đầy chất thơ với những hình ảnh ẩn dụ sâu sắc như "每一场风景都是我们爱的证明" (Mỗi cảnh sắc từng đi qua đều là minh chứng cho tình yêu) và "祝你余生动听" (Chúc quãng đời còn lại của bạn luôn vang vọng những thanh âm tươi đẹp) đã trở thành câu chúc chia tay văn minh, thấu hiểu và xúc động bậc nhất của giới trẻ Hoa ngữ.',
    isFeatured: true,
    lines: [
      {
        id: 'gghu-1',
        startTime: 0,
        endTime: 4.2,
        zh: '为何一切变得如此，无法回到过去',
        py: 'Wèihé yíqiè biàn de rúcǐ, wúfǎ huí dào guòqù',
        vi: 'Vì sao tất cả lại trở nên như thế, chẳng thể nào quay trở về quá khứ',
        tokens: [
          { c: '为何', p: 'wèi hé', meaning: 'vì sao, cớ sao', hanviet: 'vị hà' },
          { c: '一切', p: 'yí qiè', meaning: 'tất cả, mọi thứ', hanviet: 'nhất thiết' },
          { c: '变得', p: 'biàn de', meaning: 'trở nên, biến thành', hanviet: 'biến đắc' },
          { c: '如此', p: 'rú cǐ', meaning: 'như thế này', hanviet: 'như thử' },
          { c: '，', p: '' },
          { c: '无法', p: 'wú fǎ', meaning: 'không thể nào', hanviet: 'vô pháp' },
          { c: '回到', p: 'huí dào', meaning: 'quay về, trở lại', hanviet: 'hồi đáo' },
          { c: '过去', p: 'guò qù', meaning: 'quá khứ', hanviet: 'quá khứ' }
        ],
        vocab: [
          { word: '为何', pinyin: 'wèihé', hanviet: 'vị hà', meaning: 'Vì sao, tại sao (trang trọng hơn 为什么)', hskLevel: 'HSK 4' },
          { word: '如此', pinyin: 'rúcǐ', hanviet: 'như thử', meaning: 'Như thế này, dường này', hskLevel: 'HSK 4' },
          { word: '无法', pinyin: 'wúfǎ', hanviet: 'vô pháp', meaning: 'Không có cách nào, không thể', hskLevel: 'HSK 4' },
          { word: '过去', pinyin: 'guòqù', hanviet: 'quá khứ', meaning: 'Quá khứ, thời gian đã qua', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Từ nghi vấn "为何" (wèihé) đồng nghĩa với "为什么", thường dùng trong ngữ cảnh biểu cảm, thơ ca và âm nhạc.'
      },
      {
        id: 'gghu-2',
        startTime: 4.3,
        endTime: 7.6,
        zh: '但我仍愿意感谢你给过我爱情',
        py: 'Dàn wǒ réng yuànyì gǎnxiè nǐ gěiguò wǒ àiqíng',
        vi: 'Nhưng em vẫn nguyện lòng cảm ơn anh vì đã từng trao em tình yêu',
        tokens: [
          { c: '但', p: 'dàn', meaning: 'nhưng', hanviet: 'đãn' },
          { c: '我', p: 'wǒ', meaning: 'em, tôi', hanviet: 'ngã' },
          { c: '仍', p: 'réng', meaning: 'vẫn, vẫn cứ', hanviet: 'nhưng' },
          { c: '愿意', p: 'yuàn yì', meaning: 'bằng lòng, nguyện ý', hanviet: 'nguyện ý' },
          { c: '感谢', p: 'gǎn xiè', meaning: 'cảm ơn, cảm kích', hanviet: 'cảm tạ' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '给过', p: 'gěi guò', meaning: 'đã từng cho', hanviet: 'cấp quá' },
          { c: '我', p: 'wǒ', meaning: 'em', hanviet: 'ngã' },
          { c: '爱情', p: 'ài qíng', meaning: 'tình yêu', hanviet: 'ái tình' }
        ],
        vocab: [
          { word: '仍', pinyin: 'réng', hanviet: 'nhưng', meaning: 'Vẫn, vẫn cứ (viết tắt của 仍然)', hskLevel: 'HSK 4' },
          { word: '愿意', pinyin: 'yuànyì', hanviet: 'nguyện ý', meaning: 'Bằng lòng, sẵn lòng, nguyện ý', hskLevel: 'HSK 3' },
          { word: '感谢', pinyin: 'gǎnxiè', hanviet: 'cảm tạ', meaning: 'Cảm ơn, cảm kích chân thành', hskLevel: 'HSK 3' },
          { word: '爱情', pinyin: 'àiqíng', hanviet: 'ái tình', meaning: 'Tình yêu đôi lứa', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Trợ từ động thái "过" sau động từ "给过": Diễn tả hành động hoặc trải nghiệm đã từng xảy ra trong quá khứ.'
      },
      {
        id: 'gghu-3',
        startTime: 7.7,
        endTime: 12.0,
        zh: '每一场风景都是我们爱的证明',
        py: 'Měi yī chǎng fēngjǐng dōu shì wǒmen ài de zhèngmíng',
        vi: 'Từng khung cảnh đi qua đều là minh chứng cho tình yêu của chúng ta',
        tokens: [
          { c: '每', p: 'měi', meaning: 'mỗi, từng', hanviet: 'mỗi' },
          { c: '一场', p: 'yì chǎng', meaning: 'một cảnh, một chuyến', hanviet: 'nhất tràng' },
          { c: '风景', p: 'fēng jǐng', meaning: 'phong cảnh, cảnh sắc', hanviet: 'phong cảnh' },
          { c: '都', p: 'dōu', meaning: 'đều', hanviet: 'đô' },
          { c: '是', p: 'shì', meaning: 'là', hanviet: 'thị' },
          { c: '我们', p: 'wǒ men', meaning: 'chúng ta', hanviet: 'ngã môn' },
          { c: '爱的', p: 'ài de', meaning: 'của tình yêu', hanviet: 'ái đích' },
          { c: '证明', p: 'zhèng míng', meaning: 'minh chứng, bằng chứng', hanviet: 'chứng minh' }
        ],
        vocab: [
          { word: '风景', pinyin: 'fēngjǐng', hanviet: 'phong cảnh', meaning: 'Phong cảnh, cảnh đẹp', hskLevel: 'HSK 3' },
          { word: '证明', pinyin: 'zhèngmíng', hanviet: 'chứng minh', meaning: 'Chứng minh, minh chứng', hskLevel: 'HSK 4' },
          { word: '一场', pinyin: 'yì chǎng', hanviet: 'nhất tràng', meaning: 'Một hồi, một chuyến (lượng từ trải nghiệm)', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Cấu trúc nhấn mạnh: "每... 都..." (Mỗi một... đều là...). Lượng từ "场" (chǎng) kết hợp giàu hình tượng với "风景".'
      },
      {
        id: 'gghu-4',
        startTime: 12.1,
        endTime: 17.5,
        zh: '就算如今天各一方，祝你余生动听啊',
        py: 'Jiùsuàn rújīn tiāngèyīfāng, zhù nǐ yúshēng dòngtīng a',
        vi: 'Cho dù giờ đây mỗi người một phương, chúc quãng đời còn lại của anh luôn êm đềm vang vọng',
        tokens: [
          { c: '就算', p: 'jiù suàn', meaning: 'cho dù, dẫu rằng', hanviet: 'tựu toán' },
          { c: '如今', p: 'rú jīn', meaning: 'giờ đây, hiện tại', hanviet: 'như kim' },
          { c: '天各一方', p: 'tiān gè yì fāng', meaning: 'mỗi người một phương', hanviet: 'thiên các nhất phương' },
          { c: '，', p: '' },
          { c: '祝你', p: 'zhù nǐ', meaning: 'chúc anh', hanviet: 'chúc nhĩ' },
          { c: '余生', p: 'yú shēng', meaning: 'quãng đời còn lại', hanviet: 'dư sinh' },
          { c: '动听', p: 'dòng tīng', meaning: 'êm tai, du dương tốt lành', hanviet: 'động thính' },
          { c: '啊', p: 'a', meaning: 'nhé, a', hanviet: 'a' }
        ],
        vocab: [
          { word: '就算', pinyin: 'jiùsuàn', hanviet: 'tựu toán', meaning: 'Cho dù, ngay cả khi (liên từ giả thiết)', hskLevel: 'HSK 4' },
          { word: '如今', pinyin: 'rújīn', hanviet: 'như kim', meaning: 'Hiện nay, ngày nay, giờ đây', hskLevel: 'HSK 4' },
          { word: '天各一方', pinyin: 'tiān gè yì fāng', hanviet: 'thiên các nhất phương', meaning: 'Mỗi người một phương trời cách biệt (thành ngữ)', hskLevel: 'HSK 5' },
          { word: '余生', pinyin: 'yúshēng', hanviet: 'dư sinh', meaning: 'Quãng đời còn lại, phần đời về sau', hskLevel: 'HSK 5' },
          { word: '动听', pinyin: 'dòngtīng', hanviet: 'động thính', meaning: 'Du dương, êm dịu, hay ho đẹp đẽ', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Thành ngữ "天各一方" chỉ sự xa cách muôn trùng. Câu chúc "祝你余生动听" mang ý chúc đối phương sau này luôn hạnh phúc và an vui.'
      },
      {
        id: 'gghu-5',
        startTime: 17.6,
        endTime: 22.0,
        zh: '你对我说的情话像转瞬即逝的烟花',
        py: 'Nǐ duì wǒ shuō de qínghuà xiàng zhuǎnshùnjíshì de yānhuā',
        vi: 'Những lời ngọt ngào anh nói với em tựa như pháo hoa vụt sáng thoáng qua',
        tokens: [
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '对我说', p: 'duì wǒ shuō', meaning: 'nói với em', hanviet: 'đối ngã thuyết' },
          { c: '的', p: 'de', meaning: 'mà', hanviet: 'đích' },
          { c: '情话', p: 'qíng huà', meaning: 'lời yêu thương, lời tình tự', hanviet: 'tình thoại' },
          { c: '像', p: 'xiàng', meaning: 'giống như, tựa như', hanviet: 'tượng' },
          { c: '转瞬即逝', p: 'zhuǎn shùn jí shì', meaning: 'chớp mắt đã tan biến', hanviet: 'chuyển thuấn tức thệ' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '烟花', p: 'yān huā', meaning: 'pháo hoa', hanviet: 'yên hoa' }
        ],
        vocab: [
          { word: '情话', pinyin: 'qínghuà', hanviet: 'tình thoại', meaning: 'Lời đường mật, lời yêu thương', hskLevel: 'HSK 4' },
          { word: '转瞬即逝', pinyin: 'zhuǎn shùn jí shì', hanviet: 'chuyển thuấn tức thệ', meaning: 'Thoáng chốc vụt tan biến (thành ngữ)', hskLevel: 'HSK 6' },
          { word: '烟花', pinyin: 'yānhuā', hanviet: 'yên hoa', meaning: 'Pháo hoa, pháo bông', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Thành ngữ "转瞬即逝" miêu tả những khoảnh khắc lộng lẫy nhưng chỉ tồn tại trong chớp mắt.'
      },
      {
        id: 'gghu-6',
        startTime: 22.1,
        endTime: 26.5,
        zh: '只停在绽放一刹那，我却已无法自拔',
        py: 'Zhǐ tíng zài zhànfàng yí chànà, wǒ què yǐ wúfǎ zìbá',
        vi: 'Chỉ đọng lại trong khoảnh khắc bung nở, nhưng em đã lún sâu chẳng thể dứt ra',
        tokens: [
          { c: '只', p: 'zhǐ', meaning: 'chỉ', hanviet: 'chỉ' },
          { c: '停在', p: 'tíng zài', meaning: 'dừng lại ở', hanviet: 'đình tại' },
          { c: '绽放', p: 'zhàn fàng', meaning: 'nở rộ, bung nở', hanviet: 'trán phóng' },
          { c: '一刹那', p: 'yí chà nà', meaning: 'trong chớp mắt', hanviet: 'nhất sát na' },
          { c: '，', p: '' },
          { c: '我', p: 'wǒ', meaning: 'em', hanviet: 'ngã' },
          { c: '却', p: 'què', meaning: 'nhưng, lại', hanviet: 'khước' },
          { c: '已', p: 'yǐ', meaning: 'đã', hanviet: 'dĩ' },
          { c: '无法自拔', p: 'wú fǎ zì bá', meaning: 'không thể dứt ra được', hanviet: 'vô pháp tự bạt' }
        ],
        vocab: [
          { word: '绽放', pinyin: 'zhànfàng', hanviet: 'trán phóng', meaning: 'Bung nở, rực sáng', hskLevel: 'HSK 5' },
          { word: '一刹那', pinyin: 'yí chà nà', hanviet: 'nhất sát na', meaning: 'Trong một khoảnh khắc ngắn ngủi', hskLevel: 'HSK 5' },
          { word: '无法自拔', pinyin: 'wú fǎ zì bá', hanviet: 'vô pháp tự bạt', meaning: 'Chìm đắm không thể dứt ra nổi (thành ngữ)', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Thành ngữ "无法自拔" (vô pháp tự bạt) dùng để diễn tả sự say đắm, chìm đắm sâu sắc trong chuyện tình cảm.'
      },
      {
        id: 'gghu-7',
        startTime: 26.6,
        endTime: 32.0,
        zh: '我们的爱总有时差，也为你骗自己放下',
        py: 'Wǒmen de ài zǒng yǒu shíchā, yě wèi nǐ piàn zìjǐ fàngxià',
        vi: 'Tình yêu của chúng mình luôn có độ lệch giờ, cũng vì anh mà em tự dối lòng buông tay',
        tokens: [
          { c: '我们', p: 'wǒ men', meaning: 'chúng ta', hanviet: 'ngã môn' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '爱', p: 'ài', meaning: 'tình yêu', hanviet: 'ái' },
          { c: '总有', p: 'zǒng yǒu', meaning: 'luôn có', hanviet: 'tổng hữu' },
          { c: '时差', p: 'shí chā', meaning: 'lệch múi giờ', hanviet: 'thời sai' },
          { c: '，', p: '' },
          { c: '也', p: 'yě', meaning: 'cũng', hanviet: 'dã' },
          { c: '为你', p: 'wèi nǐ', meaning: 'vì anh', hanviet: 'vị nhĩ' },
          { c: '骗自己', p: 'piàn zì jǐ', meaning: 'tự lừa dối bản thân', hanviet: 'phiến tự kỷ' },
          { c: '放下', p: 'fàng xià', meaning: 'buông bỏ', hanviet: 'phóng hạ' }
        ],
        vocab: [
          { word: '时差', pinyin: 'shíchā', hanviet: 'thời sai', meaning: 'Độ lệch múi giờ; không cùng nhịp cảm xúc', hskLevel: 'HSK 4' },
          { word: '骗', pinyin: 'piàn', hanviet: 'phiến', meaning: 'Lừa dối, gạt gẫm', hskLevel: 'HSK 3' },
          { word: '放下', pinyin: 'fàngxià', hanviet: 'phóng hạ', meaning: 'Buông xuống, buông bỏ chấp niệm', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Hình ảnh ẩn dụ "时差" (độ lệch múi giờ) ví von việc hai người bước vào mối quan hệ không đồng điệu về thời điểm và tâm lý.'
      },
      {
        id: 'gghu-8',
        startTime: 32.1,
        endTime: 40.0,
        zh: '爱炙热的你却忘了爱自己',
        py: 'Ài zhìrè de nǐ què wàng le ài zìjǐ',
        vi: 'Yêu một người nồng nhiệt là anh, mà lại quên mất phải yêu lấy chính bản thân mình',
        tokens: [
          { c: '爱', p: 'ài', meaning: 'yêu', hanviet: 'ái' },
          { c: '炙热', p: 'zhì rè', meaning: 'nồng nhiệt, rực cháy', hanviet: 'chích nhiệt' },
          { c: '的', p: 'de', meaning: 'đích', hanviet: 'đích' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '却', p: 'què', meaning: 'lại', hanviet: 'khước' },
          { c: '忘了', p: 'wàng le', meaning: 'quên mất', hanviet: 'vong liễu' },
          { c: '爱自己', p: 'ài zì jǐ', meaning: 'yêu chính mình', hanviet: 'ái tự kỷ' }
        ],
        vocab: [
          { word: '炙热', pinyin: 'zhìrè', hanviet: 'chích nhiệt', meaning: 'Nóng rực, nồng nhiệt mãnh liệt', hskLevel: 'HSK 5' },
          { word: '忘了', pinyin: 'wàng le', hanviet: 'vong liễu', meaning: 'Quên mất', hskLevel: 'HSK 2' },
          { word: '自己', pinyin: 'zìjǐ', hanviet: 'tự kỷ', meaning: 'Bản thân, chính mình', hskLevel: 'HSK 2' }
        ],
        grammarNote: 'Sự đối xứng ý nghĩa: "爱炙热的你" (yêu anh tha thiết) đối lập với "忘了爱自己" (quên yêu chính mình), thể hiện sự chiêm nghiệm sâu sắc.'
      }
    ]
  },
  {
    id: 'bat-cong',
    titleZh: '偏向',
    titlePy: 'Piānxiàng',
    titleVi: 'Bất Công / Thiên Vị',
    artist: 'Trần Tử Tình (陈子晴 - Chen Ziqing)',
    coverImage: '/songs/batcong.v1.webp',
    audioUrl: '/songs/batcong.mp3',
    category: 'hot-douyin',
    categoryLabel: 'Hot Douyin / Giới Trẻ · 流行网络',
    difficulty: 'Trung bình',
    hskLevel: 'HSK 3-5',
    duration: 21,
    readingDuration: '0:21',
    description: 'Bản hit Douyin triệu view đầy cảm xúc của Trần Tử Tình. Ca từ gai góc và chân thực bộc bạch nỗi uất ức trước sự bất công, thiên vị trong tình yêu, nơi một người luôn phải nhẫn nhịn trước những sắc nhọn và so đo tính toán của người kia.',
    culturalNote: 'Ca khúc "偏向" (Bất Công / Thiên Vị) do nhạc sĩ Chu Nhân viết lời, được giới trẻ Trung Quốc và Việt Nam đặc biệt yêu thích bởi ca từ chạm trúng tâm lý tổn thương khi đối phương không còn đặt mình ở vị trí ưu tiên. Các thành ngữ như "两败俱伤" (lưỡng bại câu thương), "斤斤计较" (so đo tính toán) cùng từ lóng "丧" (chán chường, xuống tinh thần) xuất hiện tự nhiên và giàu sức gợi cảm.',
    isFeatured: true,
    lines: [
      {
        id: 'bc-1',
        startTime: 0,
        endTime: 3.2,
        zh: '为何会两败俱伤',
        py: 'Wèihé huì liǎngbàijùshāng',
        vi: 'Cớ sao lại để cả hai cùng chịu tổn thương thế này',
        tokens: [
          { c: '为何', p: 'wèi hé', meaning: 'vì sao, cớ sao', hanviet: 'vị hà' },
          { c: '会', p: 'huì', meaning: 'lại, có thể', hanviet: 'hội' },
          { c: '两败俱伤', p: 'liǎng bài jù shāng', meaning: 'đôi bên cùng tổn thương', hanviet: 'lưỡng bại câu thương' }
        ],
        vocab: [
          { word: '为何', pinyin: 'wèihé', hanviet: 'vị hà', meaning: 'Vì sao, cớ sao (trang trọng)', hskLevel: 'HSK 4' },
          { word: '两败俱伤', pinyin: 'liǎngbàijùshāng', hanviet: 'lưỡng bại câu thương', meaning: 'Đôi bên cùng thiệt hại, cùng chịu tổn thương (thành ngữ)', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Thành ngữ "两败俱伤" (lưỡng bại câu thương) miêu tả kết cục khi hai bên tranh chấp gay gắt dẫn đến cả hai đều chịu tổn thất nặng nề.'
      },
      {
        id: 'bc-2',
        startTime: 3.3,
        endTime: 6.8,
        zh: '我嫌弃你的偏向',
        py: 'Wǒ xiánqì nǐ de piānxiàng',
        vi: 'Em chán ghét sự thiên vị bất công của anh',
        tokens: [
          { c: '我', p: 'wǒ', meaning: 'tôi, em', hanviet: 'ngã' },
          { c: '嫌弃', p: 'xián qì', meaning: 'chán ghét, ghét bỏ', hanviet: 'hiềm khí' },
          { c: '你的', p: 'nǐ de', meaning: 'của anh', hanviet: 'nhĩ đích' },
          { c: '偏向', p: 'piān xiàng', meaning: 'thiên vị, bất công', hanviet: 'thiên hướng' }
        ],
        vocab: [
          { word: '嫌弃', pinyin: 'xiánqì', hanviet: 'hiềm khí', meaning: 'Chán ghét, chê bai, ruồng rẫy', hskLevel: 'HSK 5' },
          { word: '偏向', pinyin: 'piānxiàng', hanviet: 'thiên hướng', meaning: 'Thiên vị, đối xử thiên lệch, bất công', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Động từ "嫌弃" (xiánqì) biểu đạt thái độ bức xúc, thất vọng sâu sắc đối với cách cư xử không công bằng của đối phương.'
      },
      {
        id: 'bc-3',
        startTime: 6.9,
        endTime: 10.3,
        zh: '会让我觉得有点丧',
        py: 'Huì ràng wǒ juéde yǒudiǎn sàng',
        vi: 'Khiến em cảm thấy có chút buồn bã chán chường',
        tokens: [
          { c: '会', p: 'huì', meaning: 'sẽ, làm cho', hanviet: 'hội' },
          { c: '让我', p: 'ràng wǒ', meaning: 'khiến em, làm cho em', hanviet: 'nhượng ngã' },
          { c: '觉得', p: 'jué de', meaning: 'cảm thấy', hanviet: 'giác đắc' },
          { c: '有点', p: 'yǒu diǎn', meaning: 'có chút, hơi', hanviet: 'hữu điểm' },
          { c: '丧', p: 'sàng', meaning: 'buồn chán, mất tinh thần', hanviet: 'táng' }
        ],
        vocab: [
          { word: '觉得', pinyin: 'juéde', hanviet: 'giác đắc', meaning: 'Cảm thấy, thấy rằng', hskLevel: 'HSK 2' },
          { word: '有点', pinyin: 'yǒudiǎn', hanviet: 'hữu điểm', meaning: 'Hơi, có chút (thường trước cảm xúc tiêu cực)', hskLevel: 'HSK 2' },
          { word: '丧', pinyin: 'sàng', hanviet: 'táng', meaning: 'Buồn bã, ủ rũ, mất hết năng lượng (từ lóng hot trend)', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Từ "丧" (văn hóa "丧文化" trên mạng xã hội Trung Quốc) dùng như một tính từ chỉ tâm trạng chán chường, mệt mỏi, bất lực.'
      },
      {
        id: 'bc-4',
        startTime: 10.4,
        endTime: 14.5,
        zh: '避开你流露出的锋芒',
        py: 'Bìkāi nǐ liúlù chū de fēngmáng',
        vi: 'Tránh né đi những sắc nhọn gai góc mà anh để lộ ra',
        tokens: [
          { c: '避开', p: 'bì kāi', meaning: 'tránh né, né tránh', hanviet: 'tị khai' },
          { c: '你', p: 'nǐ', meaning: 'anh', hanviet: 'nhĩ' },
          { c: '流露出', p: 'liú lù chū', meaning: 'để lộ ra, bộc lộ ra', hanviet: 'lưu lộ xuất' },
          { c: '的', p: 'de', meaning: 'của, mà', hanviet: 'đích' },
          { c: '锋芒', p: 'fēng máng', meaning: 'mũi nhọn, sự sắc nhọn gai góc', hanviet: 'phong mang' }
        ],
        vocab: [
          { word: '避开', pinyin: 'bìkāi', hanviet: 'tị khai', meaning: 'Tránh né, lánh xa', hskLevel: 'HSK 4' },
          { word: '流露', pinyin: 'liúlù', hanviet: 'lưu lộ', meaning: 'Để lộ ra, bộc lộ cảm xúc vô tình', hskLevel: 'HSK 5' },
          { word: '锋芒', pinyin: 'fēngmáng', hanviet: 'phong mang', meaning: 'Mũi nhọn, sự sắc sảo gai góc gây tổn thương', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Hình ảnh ẩn dụ: "锋芒" (mũi nhọn sắc bén) tượng trưng cho những lời lẽ đả kích, thái độ cay nghiệt gây sát thương tinh thần.'
      },
      {
        id: 'bc-5',
        startTime: 14.6,
        endTime: 20.8,
        zh: '别跟我斤斤计较，算旧账',
        py: 'Bié gēn wǒ jīnjīnjìjiào, suàn jiùzhàng',
        vi: 'Xin đừng so đo từng li từng tí, rồi lại lôi chuyện cũ ra tính toán với em',
        tokens: [
          { c: '别', p: 'bié', meaning: 'đừng', hanviet: 'biệt' },
          { c: '跟我', p: 'gēn wǒ', meaning: 'với em', hanviet: 'căn ngã' },
          { c: '斤斤计较', p: 'jīn jīn jì jiào', meaning: 'tính toán chi li, so đo từng tí', hanviet: 'cân cân kế giác' },
          { c: '，', p: '' },
          { c: '算', p: 'suàn', meaning: 'tính, tính toán', hanviet: 'toán' },
          { c: '旧账', p: 'jiù zhàng', meaning: 'nợ cũ, chuyện cũ quá khứ', hanviet: 'cựu trướng' }
        ],
        vocab: [
          { word: '斤斤计较', pinyin: 'jīnjīnjìjiào', hanviet: 'cân cân kế giác', meaning: 'So đo từng li từng tí, tính toán vụn vặt (thành ngữ)', hskLevel: 'HSK 5' },
          { word: '旧账', pinyin: 'jiùzhàng', hanviet: 'cựu trướng', meaning: 'Nợ cũ, chuyện quá khứ chưa giải quyết', hskLevel: 'HSK 4' },
          { word: '别', pinyin: 'bié', hanviet: 'biệt', meaning: 'Đừng, không được (phó từ mệnh lệnh)', hskLevel: 'HSK 2' }
        ],
        grammarNote: 'Thành ngữ "斤斤计较" (so đo từng lạng) kết hợp cùng cụm từ đời sống "算旧账" (lôi nợ cũ ra tính) phản ánh những mâu thuẫn vụn vặt làm phai nhạt tình cảm.'
      }
    ]
  },
  {
    id: 'day-bien',
    titleZh: '海底',
    titlePy: 'Hǎidǐ',
    titleVi: 'Đáy Biển',
    artist: 'Nhất Chi Lưu Liên (一支榴莲 - Yizhi Liulian)',
    coverImage: '/songs/daybien.v1.webp',
    audioUrl: '/songs/daybien.mp3',
    category: 'pop-ballad',
    categoryLabel: 'Pop & Trữ Tình Sâu Lắng · 流行抒情',
    difficulty: 'Trung bình',
    hskLevel: 'HSK 3-5',
    duration: 50,
    readingDuration: '0:50',
    description: 'Bản ballad huyền thoại chạm tới hàng trăm triệu trái tim người yêu nhạc Hoa. Giai điệu u buồn, sâu lắng tựa tiếng thì thầm dưới đáy đại dương, vẽ nên sự cô đơn tột cùng và nỗi khát khao được sưởi ấm, chở che giữa dòng đời lạnh lẽo.',
    culturalNote: 'Ca khúc "海底" (Đáy Biển) do nữ nhạc sĩ 一支榴莲 sáng tác năm 2020, tạo nên hiện tượng văn hóa lớn trên toàn cõi mạng xã hội châu Á. Bài hát là tiếng lòng đầy trăn trở về sức khỏe tinh thần và căn bệnh trầm cảm của người trẻ giữa xã hội hiện đại. Hình ảnh "ánh trăng vương vãi thành vảy cá trên mặt biển" (铺成大海的鳞) hay "sóng biển muốn đẩy bạn quay trở về" (试图推你回去) giàu tính biểu tượng nhân văn, nhắc nhở xã hội biết lắng nghe và dang tay xoa dịu những tâm hồn tổn thương.',
    isFeatured: true,
    lines: [
      {
        id: 'db-1',
        startTime: 0,
        endTime: 8.2,
        zh: '散落的月光穿过了云',
        py: 'Sànluò de yuèguāng chuānguò le yún',
        vi: 'Ánh trăng vương vãi xuyên qua từng tầng mây',
        tokens: [
          { c: '散落', p: 'sàn luò', meaning: 'vương vãi, rơi rớt', hanviet: 'tán lạc' },
          { c: '的', p: 'de', meaning: 'của', hanviet: 'đích' },
          { c: '月光', p: 'yuè guāng', meaning: 'ánh trăng', hanviet: 'nguyệt quang' },
          { c: '穿过了', p: 'chuān guò le', meaning: 'xuyên qua', hanviet: 'xuyên quá liễu' },
          { c: '云', p: 'yún', meaning: 'mây, tầng mây', hanviet: 'vân' }
        ],
        vocab: [
          { word: '散落', pinyin: 'sànluò', hanviet: 'tán lạc', meaning: 'Vương vãi, rơi rớt rải rác', hskLevel: 'HSK 5' },
          { word: '月光', pinyin: 'yuèguāng', hanviet: 'nguyệt quang', meaning: 'Ánh trăng', hskLevel: 'HSK 3' },
          { word: '穿过', pinyin: 'chuānguò', hanviet: 'xuyên quá', meaning: 'Xuyên qua, vượt qua', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Động từ kết hợp trợ từ "穿过了" diễn tả ánh trăng chiếu rọi, xuyên thấu qua màn mây đêm tối.'
      },
      {
        id: 'db-2',
        startTime: 8.3,
        endTime: 15.4,
        zh: '躲着人群，铺成大海的鳞',
        py: 'Duǒ zhe rénqún, pūchéng dàhǎi de lín',
        vi: 'Lẩn tránh dòng người đông đúc, rải thành từng lớp vảy lấp lánh trên mặt biển',
        tokens: [
          { c: '躲着', p: 'duǒ zhe', meaning: 'lẩn tránh, trốn', hanviet: 'đóa trước' },
          { c: '人群', p: 'rén qún', meaning: 'dòng người, đám đông', hanviet: 'nhân quần' },
          { c: '，', p: '' },
          { c: '铺成', p: 'pū chéng', meaning: 'trải thành, rải thành', hanviet: 'phô thành' },
          { c: '大海的', p: 'dà hǎi de', meaning: 'của biển cả', hanviet: 'đại hải đích' },
          { c: '鳞', p: 'lín', meaning: 'vảy (vảy cá lấp lánh)', hanviet: 'lân' }
        ],
        vocab: [
          { word: '躲', pinyin: 'duǒ', hanviet: 'đóa', meaning: 'Trốn tránh, lẩn tránh', hskLevel: 'HSK 4' },
          { word: '人群', pinyin: 'rénqún', hanviet: 'nhân quần', meaning: 'Đám đông, dòng người', hskLevel: 'HSK 4' },
          { word: '铺', pinyin: 'pū', hanviet: 'phô', meaning: 'Trải ra, giăng ra', hskLevel: 'HSK 4' },
          { word: '鳞', pinyin: 'lín', hanviet: 'lân', meaning: 'Vảy (vảy cá, lân phiến)', hskLevel: 'HSK 6' }
        ],
        grammarNote: 'Trợ từ trạng thái "着" (躲着 - né tránh) kết hợp bổ ngữ kết quả "成" (铺成 - trải thành lớp vảy lấp lánh).'
      },
      {
        id: 'db-3',
        startTime: 15.5,
        endTime: 21.0,
        zh: '海浪打湿白裙，试图推你回去',
        py: 'Hǎilàng dǎshī báiqún, shìtú tuī nǐ huíqù',
        vi: 'Sóng biển làm ướt đẫm vạt váy trắng, như cố gắng đẩy bạn quay trở về bờ',
        tokens: [
          { c: '海浪', p: 'hǎi làng', meaning: 'sóng biển', hanviet: 'hải lãng' },
          { c: '打湿', p: 'dǎ shī', meaning: 'làm ướt đẫm', hanviet: 'đả thấp' },
          { c: '白裙', p: 'bái qún', meaning: 'váy trắng', hanviet: 'bạch quần' },
          { c: '，', p: '' },
          { c: '试图', p: 'shì tú', meaning: 'toan tính, cố gắng thử', hanviet: 'thí đồ' },
          { c: '推你', p: 'tuī nǐ', meaning: 'đẩy bạn', hanviet: 'thôi nhĩ' },
          { c: '回去', p: 'huí qù', meaning: 'quay về bờ', hanviet: 'hồi khứ' }
        ],
        vocab: [
          { word: '海浪', pinyin: 'hǎilàng', hanviet: 'hải lãng', meaning: 'Sóng biển', hskLevel: 'HSK 4' },
          { word: '试图', pinyin: 'shìtú', hanviet: 'thí đồ', meaning: 'Cố gắng, mưu toan thử làm', hskLevel: 'HSK 5' },
          { word: '推', pinyin: 'tuī', hanviet: 'thôi', meaning: 'Đẩy, xô', hskLevel: 'HSK 3' }
        ],
        grammarNote: 'Bổ ngữ kết quả "打湿" (làm ướt). Hình ảnh nhân hóa: sóng biển như người bạn xót xa muốn đẩy người tuyệt vọng trở lại trần gian.'
      },
      {
        id: 'db-4',
        startTime: 21.1,
        endTime: 26.5,
        zh: '海浪清洗血迹，妄想温暖你',
        py: 'Hǎilàng qīngxǐ xuèjì, wàngxiǎng wēnnuǎn nǐ',
        vi: 'Sóng biển gột rửa những vết thương, hão huyền mong sưởi ấm cho bạn',
        tokens: [
          { c: '海浪', p: 'hǎi làng', meaning: 'sóng biển', hanviet: 'hải lãng' },
          { c: '清洗', p: 'qīng xǐ', meaning: 'gột rửa, rửa sạch', hanviet: 'thanh tẩy' },
          { c: '血迹', p: 'xuè jì', meaning: 'vết máu, vết thương', hanviet: 'huyết tích' },
          { c: '，', p: '' },
          { c: '妄想', p: 'wàng xiǎng', meaning: 'hão huyền, mong ước viển vông', hanviet: 'vọng tưởng' },
          { c: '温暖你', p: 'wēn nuǎn nǐ', meaning: 'sưởi ấm bạn', hanviet: 'ôn noãn nhĩ' }
        ],
        vocab: [
          { word: '清洗', pinyin: 'qīngxǐ', hanviet: 'thanh tẩy', meaning: 'Tắm rửa, gột rửa sạch sẽ', hskLevel: 'HSK 5' },
          { word: '血迹', pinyin: 'xuèjì', hanviet: 'huyết tích', meaning: 'Vết máu, dấu vết tổn thương', hskLevel: 'HSK 5' },
          { word: '妄想', pinyin: 'wàngxiǎng', hanviet: 'vọng tưởng', meaning: 'Ảo tưởng, mong muốn bất khả thi', hskLevel: 'HSK 5' },
          { word: '温暖', pinyin: 'wēnnuǎn', hanviet: 'ôn noãn', meaning: 'Ấm áp; sưởi ấm', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Động từ "妄想" biểu thị sự bất lực đau đớn: nước biển lạnh lẽo làm sao có thể sưởi ấm được một trái tim đã giá băng.'
      },
      {
        id: 'db-5',
        startTime: 26.6,
        endTime: 32.5,
        zh: '灵魂没入寂静，无人将你吵醒',
        py: 'Línghún mòrù jìjìng, wúrén jiāng nǐ chǎoxǐng',
        vi: 'Linh hồn chìm sâu vào cõi tĩnh mịch, chẳng còn ai đánh thức bạn dậy nữa',
        tokens: [
          { c: '灵魂', p: 'líng hún', meaning: 'linh hồn, tâm hồn', hanviet: 'linh hồn' },
          { c: '没入', p: 'mò rù', meaning: 'chìm đắm vào, lặn sâu vào', hanviet: 'mộc nhập' },
          { c: '寂静', p: 'jì jìng', meaning: 'tĩnh mịch, vắng lặng', hanviet: 'tịch tĩnh' },
          { c: '，', p: '' },
          { c: '无人', p: 'wú rén', meaning: 'không có ai', hanviet: 'vô nhân' },
          { c: '将你', p: 'jiāng nǐ', meaning: 'đem bạn, làm cho bạn', hanviet: 'tương nhĩ' },
          { c: '吵醒', p: 'chǎo xǐng', meaning: 'đánh thức ồn ào', hanviet: 'sao tỉnh' }
        ],
        vocab: [
          { word: '灵魂', pinyin: 'línghún', hanviet: 'linh hồn', meaning: 'Linh hồn, tâm hồn', hskLevel: 'HSK 5' },
          { word: '寂静', pinyin: 'jìjìng', hanviet: 'tịch tĩnh', meaning: 'Tĩnh mịch, yên lặng như tờ', hskLevel: 'HSK 5' },
          { word: '吵醒', pinyin: 'chǎoxǐng', hanviet: 'sao tỉnh', meaning: 'Làm ồn làm thức giấc', hskLevel: 'HSK 4' }
        ],
        grammarNote: 'Giới từ "将" (jiāng) dùng tương đương chữ "把" trong văn viết trang trọng: "无人将你吵醒" (không còn ai đánh thức bạn).'
      },
      {
        id: 'db-6',
        startTime: 32.6,
        endTime: 39.5,
        zh: '你喜欢海风咸咸的气息，踩着湿湿的沙砾',
        py: 'Nǐ xǐhuan hǎifēng xiánxián de qìxī, cǎizhe shīshī de shālì',
        vi: 'Bạn từng yêu thích hương vị mằn mặn của gió biển, từng bước chân trần dẫm lên bờ cát ẩm ướt',
        tokens: [
          { c: '你喜欢', p: 'nǐ xǐ huan', meaning: 'bạn yêu thích', hanviet: 'nhĩ hỉ hoan' },
          { c: '海风', p: 'hǎi fēng', meaning: 'gió biển', hanviet: 'hải phong' },
          { c: '咸咸的', p: 'xián xián de', meaning: 'mằn mặn', hanviet: 'hàm hàm đích' },
          { c: '气息', p: 'qì xī', meaning: 'hơi thở, hương vị', hanviet: 'khí tức' },
          { c: '，', p: '' },
          { c: '踩着', p: 'cǎi zhe', meaning: 'dẫm lên, bước trên', hanviet: 'thải trước' },
          { c: '湿湿的', p: 'shī shī de', meaning: 'ẩm ướt, ươn ướt', hanviet: 'thấp thấp đích' },
          { c: '沙砾', p: 'shā lì', meaning: 'hạt cát, bãi cát', hanviet: 'sa lịch' }
        ],
        vocab: [
          { word: '咸', pinyin: 'xián', hanviet: 'hàm', meaning: 'Mặn (vị giác)', hskLevel: 'HSK 3' },
          { word: '气息', pinyin: 'qìxī', hanviet: 'khí tức', meaning: 'Hơi thở, mùi hương, phong vị', hskLevel: 'HSK 5' },
          { word: '踩', pinyin: 'cǎi', hanviet: 'thải', meaning: 'Dẫm, đạp lên', hskLevel: 'HSK 4' },
          { word: '沙砾', pinyin: 'shālì', hanviet: 'sa lịch', meaning: 'Cát sỏi, hạt cát nhỏ', hskLevel: 'HSK 6' }
        ],
        grammarNote: 'Hình thức lặp lại tính từ AA: "咸咸的" (mằn mặn), "湿湿的" (ươn ướt) tạo cảm giác êm dịu, gợi nhớ ký ức êm đềm.'
      },
      {
        id: 'db-7',
        startTime: 39.6,
        endTime: 44.5,
        zh: '你说人们的骨灰应该撒进海里',
        py: 'Nǐ shuō rénmen de gǔhuī yīnggāi sǎ jìn hǎilǐ',
        vi: 'Bạn từng nói tro tàn của con người nên được rải xuống lòng biển khơi',
        tokens: [
          { c: '你说', p: 'nǐ shuō', meaning: 'bạn nói', hanviet: 'nhĩ thuyết' },
          { c: '人们的', p: 'rén men de', meaning: 'của con người', hanviet: 'nhân môn đích' },
          { c: '骨灰', p: 'gǔ huī', meaning: 'tro cốt, tro tàn', hanviet: 'cốt hôi' },
          { c: '应该', p: 'yīng gāi', meaning: 'nên, phải', hanviet: 'ưng cai' },
          { c: '撒进', p: 'sǎ jìn', meaning: 'rải vào, gieo vào', hanviet: 'tát tiến' },
          { c: '海里', p: 'hǎi lǐ', meaning: 'trong biển', hanviet: 'hải lý' }
        ],
        vocab: [
          { word: '骨灰', pinyin: 'gǔhuī', hanviet: 'cốt hôi', meaning: 'Tro cốt sau hỏa táng', hskLevel: 'HSK 6' },
          { word: '应该', pinyin: 'yīnggāi', hanviet: 'ưng cai', meaning: 'Nên, cần phải', hskLevel: 'HSK 2' },
          { word: '撒', pinyin: 'sǎ', hanviet: 'tát', meaning: 'Rải, rắc, gieo vãi', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Động từ kết hợp phương vị từ: "撒进海里" (rải vào lòng biển), gửi gắm ước nguyện tan biến hòa vào thiên nhiên tự do.'
      },
      {
        id: 'db-8',
        startTime: 44.6,
        endTime: 50.0,
        zh: '你问我死后会去哪里，有没有人爱你',
        py: 'Nǐ wèn wǒ sǐhòu huì qù nǎlǐ, yǒu méiyǒu rén ài nǐ',
        vi: 'Bạn hỏi tôi sau khi giã từ nhân thế sẽ đi về đâu, liệu có còn ai thật lòng yêu thương bạn',
        tokens: [
          { c: '你问我', p: 'nǐ wèn wǒ', meaning: 'bạn hỏi tôi', hanviet: 'nhĩ vấn ngã' },
          { c: '死后', p: 'sǐ hòu', meaning: 'sau khi chết', hanviet: 'tử hậu' },
          { c: '会去哪里', p: 'huì qù nǎ lǐ', meaning: 'sẽ đi về đâu', hanviet: 'hội khứ na lý' },
          { c: '，', p: '' },
          { c: '有没有', p: 'yǒu méi yǒu', meaning: 'có hay không', hanviet: 'hữu một hữu' },
          { c: '人爱你', p: 'rén ài nǐ', meaning: 'người yêu bạn', hanviet: 'nhân ái nhĩ' }
        ],
        vocab: [
          { word: '死', pinyin: 'sǐ', hanviet: 'tử', meaning: 'Chết, qua đời', hskLevel: 'HSK 3' },
          { word: '哪里', pinyin: 'nǎlǐ', hanviet: 'na lý', meaning: 'Nơi nào, đâu', hskLevel: 'HSK 1' },
          { word: '爱', pinyin: 'ài', hanviet: 'ái', meaning: 'Yêu, thương', hskLevel: 'HSK 1' }
        ],
        grammarNote: 'Câu hỏi tu từ chính phản "有没有...": Câu kết chứa đựng nỗi đau đáu tột cùng về sự thấu hiểu và tình yêu thương của kiếp người.'
      }
    ]
  },
  {
    id: 'bich-thuong-quan',
    titleZh: '壁上观',
    titlePy: 'Bì Shàng Guān',
    titleVi: 'Bích Thượng Quan (Đứng Ngoài Quan Sát · Black Myth: Wukong BGM)',
    artist: 'Trương Hiểu Hàm · Nhất Khỏa Tiểu Thông (张晓涵 · 一棵小葱)',
    coverImage: '/songs/bichthuongquan.v1.webp',
    audioUrl: '/songs/bichthuongquan.mp3',
    duration: 30,
    readingDuration: '0:30',
    category: 'hot-douyin',
    categoryLabel: 'Hot Douyin / Giới Trẻ · 流行网络',
    difficulty: 'Nâng cao',
    hskLevel: 'HSK 4-6',
    description: 'Ca khúc cổ phong kết hợp kinh kịch đình đám bậc nhất, trở thành hiện tượng văn hóa toàn cầu gắn liền với siêu phẩm game "Hắc Thần Thoại: Ngộ Không" (Black Myth: Wukong). Ca từ nhuốm màu huyền sử Đôn Hoàng, trầm luân thế sự và bàng quan đứng nhìn cõi hồng trần.',
    culturalNote: 'Bài hát lấy cảm hứng sâu sắc từ nghệ thuật bích họa Đôn Hoàng (Mạc Cao Quật) và thời kỳ thịnh Đường rực rỡ. Sau khi tựa game bom tấn "Hắc Thần Thoại: Ngộ Không" (Black Myth: Wukong) ra mắt, "Bích Thượng Quan" đã trở thành hiện tượng văn hóa lan tỏa mạnh mẽ trên toàn cầu. Giai điệu kinh kịch huyền bí cùng ca từ mang đậm tính định mệnh, trầm luân và bàng quan trước cõi hồng trần đã được đông đảo cộng đồng sử dụng làm bản nhạc nền biểu tượng cho nhân vật Tề Thiên Đại Thánh / Thiên Mệnh Nhân.',
    lines: [
      {
        id: 'btq-1',
        startTime: 0.0,
        endTime: 6.2,
        zh: '雪浸染万千华光钟声塑佛龛',
        py: 'Xuě jìnrǎn wànqiān huáguāng zhōngshēng sù fókān',
        vi: 'Tuyết nhuộm đẫm ngàn vạn hào quang rực rỡ, tiếng chuông chùa tạc nên bức tượng trong khám thờ Phật',
        tokens: [
          { c: '雪', p: 'xuě', meaning: 'tuyết', hanviet: 'tuyết' },
          { c: '浸染', p: 'jìn rǎn', meaning: 'nhuộm đẫm, thấm đẫm', hanviet: 'tẩm nhiễm' },
          { c: '万千', p: 'wàn qiān', meaning: 'muôn vàn, ngàn vạn', hanviet: 'vạn thiên' },
          { c: '华光', p: 'huá guāng', meaning: 'hào quang, ánh sáng lộng lẫy', hanviet: 'hoa quang' },
          { c: '钟声', p: 'zhōng shēng', meaning: 'tiếng chuông chùa', hanviet: 'chung thanh' },
          { c: '塑', p: 'sù', meaning: 'tạc, đúc, nặn tượng', hanviet: 'tố' },
          { c: '佛龛', p: 'fó kān', meaning: 'khám thờ Phật, hốc đá thờ Phật', hanviet: 'phật khảm' }
        ],
        vocab: [
          { word: '雪', pinyin: 'xuě', hanviet: 'tuyết', meaning: 'Tuyết rơi', hskLevel: 'HSK 3' },
          { word: '浸染', pinyin: 'jìnrǎn', hanviet: 'tẩm nhiễm', meaning: 'Thấm nhuần, nhuộm đẫm, lan tỏa dần', hskLevel: 'HSK 6' },
          { word: '万千', pinyin: 'wànqiān', hanviet: 'vạn thiên', meaning: 'Vô vàn, muôn vàn, ngàn trùng', hskLevel: 'HSK 5' },
          { word: '华光', pinyin: 'huáguāng', hanviet: 'hoa quang', meaning: 'Ánh hào quang rạng rỡ, lộng lẫy', hskLevel: 'HSK 6' },
          { word: '钟声', pinyin: 'zhōngshēng', hanviet: 'chung thanh', meaning: 'Tiếng chuông sớm tối nơi cửa Phật', hskLevel: 'HSK 4' },
          { word: '塑', pinyin: 'sù', hanviet: 'tố', meaning: 'Tạo hình, nặn, đúc nên (tượng)', hskLevel: 'HSK 5' },
          { word: '佛龛', pinyin: 'fókān', hanviet: 'phật khảm', meaning: 'Khám thờ tượng Phật trong chùa hoặc vách đá', hskLevel: 'HSK 6' }
        ],
        grammarNote: 'Động từ mang tính nghệ thuật điêu khắc "塑" (sù): Tiếng chuông chùa vô hình nhưng được nhân hóa như đôi bàn tay hữu hình tạc nên khám thờ Phật.'
      },
      {
        id: 'btq-2',
        startTime: 6.3,
        endTime: 12.0,
        zh: '此去蒙尘饮乐宴',
        py: 'Cǐ qù méngchén yǐn lè yàn',
        vi: 'Chuyến đi này phủ đầy bụi trần gian, nâng chén say trong yến tiệc hoan lạc',
        tokens: [
          { c: '此去', p: 'cǐ qù', meaning: 'chuyến đi này, dạo ấy bước đi', hanviet: 'thử khứ' },
          { c: '蒙尘', p: 'méng chén', meaning: 'phủ bụi trần, dính phong trần', hanviet: 'mông trần' },
          { c: '饮', p: 'yǐn', meaning: 'uống rượu, nâng chén', hanviet: 'ẩm' },
          { c: '乐宴', p: 'lè yàn', meaning: 'yến tiệc vui vẻ, hoan lạc', hanviet: 'lạc yến' }
        ],
        vocab: [
          { word: '此去', pinyin: 'cǐqù', hanviet: 'thử khứ', meaning: 'Chuyến đi lần này, từ đây về sau', hskLevel: 'HSK 5' },
          { word: '蒙尘', pinyin: 'méngchén', hanviet: 'mông trần', meaning: 'Phủ bụi mờ, chịu cảnh phong trần lưu lạc', hskLevel: 'HSK 6' },
          { word: '饮', pinyin: 'yǐn', hanviet: 'ẩm', meaning: 'Uống rượu, ẩm thực', hskLevel: 'HSK 4' },
          { word: '乐', pinyin: 'lè', hanviet: 'lạc', meaning: 'Vui vẻ, hoan hỷ', hskLevel: 'HSK 2' },
          { word: '宴', pinyin: 'yàn', hanviet: 'yến', meaning: 'Bữa tiệc, yến tiệc cung đình', hskLevel: 'HSK 5' }
        ],
        grammarNote: 'Thành ngữ văn học "蒙尘" (méngchén): Nghĩa gốc là bị bụi đất che phủ, nghĩa bóng chỉ việc thân chinh lưu lạc, trải qua thăng trầm gió bụi trần gian.'
      },
      {
        id: 'btq-3',
        startTime: 12.1,
        endTime: 19.4,
        zh: '朱颜改怎不见窟画昔日璀璨',
        py: 'Zhūyán gǎi zěn bùjiàn kūhuà xīrì cuǐcàn',
        vi: 'Hồng nhan đổi thay, cớ sao chẳng còn thấy lại vẻ rực rỡ thuở xưa nơi bích họa hang đá',
        tokens: [
          { c: '朱颜改', p: 'zhū yán gǎi', meaning: 'má hồng đổi thay, nét thanh xuân tàn phai', hanviet: 'chu nhan cải' },
          { c: '怎', p: 'zěn', meaning: 'cớ sao, sao lại', hanviet: 'chẩm' },
          { c: '不见', p: 'bù jiàn', meaning: 'chẳng thấy, không còn thấy', hanviet: 'bất kiến' },
          { c: '窟画', p: 'kū huà', meaning: 'bích họa trong hang đá Đôn Hoàng', hanviet: 'khốc họa' },
          { c: '昔日', p: 'xī rì', meaning: 'ngày xưa, thuở trước', hanviet: 'tích nhật' },
          { c: '璀璨', p: 'cuǐ càn', meaning: 'lộng lẫy, rực rỡ chói lòa', hanviet: 'thôi xán' }
        ],
        vocab: [
          { word: '朱颜', pinyin: 'zhūyán', hanviet: 'chu nhan', meaning: 'Gương mặt hồng hào, nét đẹp thanh xuân của tuổi trẻ', hskLevel: 'HSK 6' },
          { word: '改', pinyin: 'gǎi', hanviet: 'cải', meaning: 'Thay đổi, biến đổi', hskLevel: 'HSK 3' },
          { word: '怎', pinyin: 'zěn', hanviet: 'chẩm', meaning: 'Sao, vì sao, cớ chi', hskLevel: 'HSK 4' },
          { word: '窟画', pinyin: 'kūhuà', hanviet: 'khốc họa', meaning: 'Tranh vẽ trên vách hang đá cổ tích', hskLevel: 'HSK 6' },
          { word: '昔日', pinyin: 'xīrì', hanviet: 'tích nhật', meaning: 'Ngày trước, những ngày đã qua', hskLevel: 'HSK 5' },
          { word: '璀璨', pinyin: 'cuǐcàn', hanviet: 'thôi xán', meaning: 'Sáng rực rỡ, lấp lánh chói lọi', hskLevel: 'HSK 6' }
        ],
        grammarNote: 'Điển cố "朱颜改" (zhū yán gǎi) mượn từ thi phẩm trứ danh của Lý Dục: "雕栏玉砌应犹在，只是朱颜改", đối lập bi tráng giữa thời gian vô tình và nghệ thuật bất tử.'
      },
      {
        id: 'btq-4',
        startTime: 19.5,
        endTime: 29.6,
        zh: '却醒来作壁上观',
        py: 'Què xǐng lái zuò bì shàng guān',
        vi: 'Nhưng rồi bừng tỉnh giấc mộng, chỉ biết đứng ngoài lặng nhìn thế sự nổi trôi',
        tokens: [
          { c: '却', p: 'què', meaning: 'nhưng, lại', hanviet: 'khước' },
          { c: '醒来', p: 'xǐng lái', meaning: 'tỉnh dậy, thức tỉnh', hanviet: 'tỉnh lai' },
          { c: '作壁上观', p: 'zuò bì shàng guān', meaning: 'đứng trên thành quan sát, khoanh tay đứng nhìn thế sự', hanviet: 'tác bích thượng quan' }
        ],
        vocab: [
          { word: '却', pinyin: 'què', hanviet: 'khước', meaning: 'Nhưng, vậy mà, lại (liên từ chuyển ý)', hskLevel: 'HSK 4' },
          { word: '醒', pinyin: 'xǐng', hanviet: 'tỉnh', meaning: 'Tỉnh ngủ, thức dậy, giác ngộ', hskLevel: 'HSK 4' },
          { word: '作壁上观', pinyin: 'zuò bì shàng guān', hanviet: 'tác bích thượng quan', meaning: 'Thành ngữ: Khoanh tay đứng nhìn, bàng quan không can dự vào thị phi', hskLevel: 'HSK 6' }
        ],
        grammarNote: 'Thành ngữ "作壁上观" xuất xứ từ 《Sử Ký - Hạng Vũ Bản Kỷ》, chỉ thái độ bàng quan, trầm mặc đứng ngoài guồng quay được mất của thế gian.'
      }
    ]
  }
];

export function getSongById(id: string): Song | undefined {
  return SONGS_DATA.find((s) => s.id === id);
}
