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
  }
];

export function getSongById(id: string): Song | undefined {
  return SONGS_DATA.find((s) => s.id === id);
}
