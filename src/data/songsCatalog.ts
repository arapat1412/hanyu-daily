export interface SongSummary {
  id: string;
  titleZh: string;
  titlePy: string;
  titleVi: string;
  artist: string;
  coverImage: string;
  category: 'thieu-nhi' | 'kinh-dien' | 'hot-douyin' | 'pop-ballad';
  categoryLabel: string;
  difficulty: 'Dễ' | 'Trung bình' | 'Nâng cao';
  hskLevel: string;
  readingDuration: string;
  description: string;
  lineCount: number;
  isFeatured?: boolean;
}

const SONG_CATALOG: SongSummary[] = [
  {
    id: 'giay-tiep-theo',
    titleZh: '下一秒',
    titlePy: 'Xià Yì Miǎo',
    titleVi: 'Giây Tiếp Theo (OST Yêu Em Từ Cái Nhìn Đầu Tiên)',
    artist: 'Trương Bích Thần (张碧晨 - Zhang Bichen)',
    coverImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
    category: 'kinh-dien',
    categoryLabel: 'Nhạc Phim & Lãng Mạn · 影视金曲',
    difficulty: 'Dễ',
    hskLevel: 'HSK 1-3',
    readingDuration: '0:28',
    description: 'Bản nhạc phim OST kinh điển trong bộ phim truyền hình nổi tiếng "Yêu em từ cái nhìn đầu tiên" (微微一笑很倾城). Giai điệu piano trong sáng, ngọt ngào cùng giọng hát ấm áp đầy cảm xúc của Trương Bích Thần.',
    lineCount: 4,
    isFeatured: true,
  },
  {
    id: 'thich-a-tu',
    titleZh: '喜欢',
    titlePy: 'Xǐhuan',
    titleVi: 'Thích (Đoạn điệp khúc nổi tiếng)',
    artist: 'A Tứ (阿肆 - A Si)',
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop',
    category: 'hot-douyin',
    categoryLabel: 'Hot Douyin / Giới Trẻ · 流行网络',
    difficulty: 'Trung bình',
    hskLevel: 'HSK 3-5',
    readingDuration: '0:26',
    description: 'Bản hit Indie Pop đình đám gây bão trên mạng xã hội của A Tứ. Ca từ độc đáo, giàu chất thơ và đậm chất đời sống: một trái tim có thể kiên cường trước mọi sóng gió cuộc đời nhưng lại hoàn toàn tan chảy trước tình cảm dành cho người mình yêu.',
    lineCount: 6,
    isFeatured: true,
  },
  {
    id: 'yueliang-daibiao-wo-de-xin',
    titleZh: '月亮代表我的心',
    titlePy: 'Yuèliang Dàibiǎo Wǒ de Xīn',
    titleVi: 'Ánh Trăng Nói Hộ Lòng Tôi',
    artist: 'Đặng Lệ Quân (邓丽君 - Teresa Teng)',
    coverImage: 'https://images.unsplash.com/photo-1532767153582-b1a0e5145009?q=80&w=800&auto=format&fit=crop',
    category: 'kinh-dien',
    categoryLabel: 'Nhạc Kinh Điển · 经典老歌',
    difficulty: 'Dễ',
    hskLevel: 'HSK 1-2',
    readingDuration: '0:50',
    description: 'Bản tình ca bất hủ của nền âm nhạc Hoa ngữ, giai điệu êm ái, lời ca mộc mạc giàu chất thơ, cực kỳ thích hợp cho người mới học tiếng Trung làm quen với ngữ điệu nhẹ nhàng và tình cảm.',
    lineCount: 8,
    isFeatured: true,
  },
];

export function getAllSongs(): SongSummary[] {
  return SONG_CATALOG;
}
