export interface StorySummary {
  id: string;
  titleZh: string;
  titlePy: string;
  titleVi: string;
  coverImage: string;
  level: string;
  levelBadge: 'Dễ' | 'Trung bình' | 'Nâng cao';
  tags: string[];
  category: 'dong-vat' | 'ngu-ngon' | 'doi-song' | 'tinh-ban';
  categoryLabel: string;
  totalPages: number;
  readingMinutes: number;
  summary: string;
  moralLesson: string;
  isFeatured?: boolean;
}

const STORY_CATALOG: StorySummary[] = [
  {
    id: 'bu-tinghua-de-xiaogou',
    titleZh: '不听话的小狗',
    titlePy: 'Bù Tīnghuà de Xiǎogǒu',
    titleVi: 'Chú Chó Con Không Nghe Lời',
    coverImage: '/stories/bu-tinghua-de-xiaogou/page-1.png',
    level: 'YCT 2-3 · Cơ bản',
    levelBadge: 'Dễ',
    tags: ['Động vật', 'Kỹ năng sống', 'Nghe lời cha mẹ', 'Thói quen tốt', 'Tranh minh họa màu'],
    category: 'doi-song',
    categoryLabel: 'Kỹ năng & Thói quen tốt',
    totalPages: 6,
    readingMinutes: 3,
    isFeatured: true,
    summary: 'Câu chuyện giáo dục gần gũi về chú chó nhỏ Đang Đang tính tình bướng bỉnh, luôn làm ngược lại lời khuyên bảo của cha mẹ. Vì không chịu nghe lời đi ngủ trưa mà trốn đi đạp xe bị ngã đau đầu gối, rồi lại không kìm được tay cậy vảy vết thương, để lại bài học sâu sắc cho các bạn nhỏ về việc biết lắng nghe lời cha mẹ.',
    moralLesson: 'Cha mẹ luôn là người yêu thương và cho chúng ta những lời khuyên bảo đúng đắn nhất. Các bạn nhỏ cần biết vâng lời cha mẹ, từ bỏ tính ngang bướng để tránh những chấn thương và hậu quả đáng tiếc cho bản thân.',
  },
  {
    id: 'xiao-houzi-xia-shan',
    titleZh: '小猴子下山',
    titlePy: 'Xiǎo Hóuzi Xià Shān',
    titleVi: 'Chú Khỉ Con Xuống Núi',
    coverImage: '/stories/xiao-houzi-xia-shan/page-1.png',
    level: 'YCT 1-2 · Cơ bản',
    levelBadge: 'Dễ',
    tags: ['Ngụ ngôn', 'Kinh điển', 'Kiên định', 'Chăm chỉ', 'Tranh minh họa màu'],
    category: 'ngu-ngon',
    categoryLabel: 'Truyện ngụ ngôn & Trí tuệ',
    totalPages: 5,
    readingMinutes: 3,
    summary: 'Câu chuyện ngụ ngôn dân gian kinh điển về chú khỉ con háo hức xuống núi: thấy bắp ngô thì bẻ ngô, thấy đào to thì vứt ngô hái đào, thấy dưa hấu thì bỏ đào hái dưa, rồi lại mải mê đuổi theo chú thỏ trắng để rồi cuối cùng phải ra về với hai bàn tay trắng.',
    moralLesson: 'Làm việc gì cũng cần phải có mục tiêu kiên định, chuyên tâm một lòng một dạ (一心一意). Đứng núi này trông núi nọ, ba lòng hai ý (三心二意) thì cuối cùng sẽ chẳng thu hoạch được bất cứ thành quả nào.',
  },
  {
    id: 'xiao-xiongmao-xue-paidui',
    titleZh: '不排队的小熊猫',
    titlePy: 'Bù Páiduì de Xiǎo Xióngmāo',
    titleVi: 'Gấu Trúc Nhỏ Không Xếp Hàng',
    coverImage: '/stories/xiao-xiongmao-xue-paidui/page-1.png',
    level: 'YCT 1-2 · Cơ bản',
    levelBadge: 'Dễ',
    tags: ['Động vật', 'Kỹ năng sống', 'Xếp hàng', 'Chia sẻ', 'Tranh minh họa màu'],
    category: 'doi-song',
    categoryLabel: 'Kỹ năng & Thói quen tốt',
    totalPages: 4,
    readingMinutes: 3,
    summary: 'Câu chuyện sinh động và mang tính giáo dục cao về chú gấu trúc nhỏ tính tình bướng bỉnh, thích tranh giành đồ chơi và không chịu xếp hàng. Sau khi bị bạn bè xa lánh và tự làm mình bị ngã đau, gấu trúc đã nhận ra bài học quý giá về việc biết chờ đợi đến lượt và chia sẻ niềm vui.',
    moralLesson: 'Khi chơi cùng bạn bè, chúng ta cần biết xếp hàng, tuân thủ lượt chơi và nhường nhịn lẫn nhau. Tranh giành, xô đẩy chỉ làm bạn bè buồn bã rời đi và chính mình cũng chẳng thể có được niềm vui trọn vẹn.',
  },
  {
    id: 'san-ge-heshang',
    titleZh: '三个和尚',
    titlePy: 'Sān Gè Héshang',
    titleVi: 'Ba Nhà Sư',
    coverImage: '/stories/san-ge-heshang/page-1.png',
    level: 'YCT 2-3 · HSK 2-3',
    levelBadge: 'Trung bình',
    tags: ['Ngụ ngôn', 'Kinh điển', 'Đoàn kết', 'Hợp tác', 'Tranh minh họa màu'],
    category: 'ngu-ngon',
    categoryLabel: 'Truyện ngụ ngôn & Trí tuệ',
    totalPages: 4,
    readingMinutes: 3,
    summary: 'Câu chuyện ngụ ngôn dân gian kinh điển về ba nhà sư trong ngôi miếu nhỏ: một người thì gánh nước, hai người thì khiêng nước, đến ba người thì đùn đẩy không ai chịu gánh nước, cho đến khi trận hỏa hoạn bất ngờ giúp họ thức tỉnh về giá trị của sự đồng lòng hợp tác.',
    moralLesson: 'Tục ngữ có câu: "Một nhà sư gánh nước uống, hai nhà sư khiêng nước uống, ba nhà sư không có nước uống". Tinh thần trách nhiệm, tinh thần tập thể và sự đoàn kết sẻ chia là chìa khóa để cùng nhau vượt qua mọi thử thách trong cuộc sống.',
  },
  {
    id: 'aoye-de-xiaozhu',
    titleZh: '熬夜的小猪',
    titlePy: 'Áoyè de Xiǎozhū',
    titleVi: 'Chú Heo Thức Khuya',
    coverImage: '/stories/aoye-de-xiaozhu/page-1.png',
    level: 'YCT 2-3 · HSK 2',
    levelBadge: 'Dễ',
    tags: ['Động vật', 'Thói quen tốt', 'Sức khỏe', 'Tranh minh họa màu'],
    category: 'doi-song',
    categoryLabel: 'Kỹ năng & Thói quen tốt',
    totalPages: 5,
    readingMinutes: 3,
    summary: 'Câu chuyện giáo dục gần gũi về chú lợn Đô Đô mải mê xem ti-vi và ăn vặt thâu đêm, dẫn tới cơ thể mệt mỏi, uể oải và bài học quý giá về tầm quan trọng của việc ngủ sớm dậy sớm.',
    moralLesson: 'Ngủ sớm dậy sớm và sinh hoạt điều độ là chìa khóa vàng cho một cơ thể khỏe khoắn và tinh thần minh mẫn. Hãy biết quý trọng giấc ngủ để mỗi ngày mới đều tràn ngập niềm vui và năng lượng!',
  },
  {
    id: 'kuaile-de-xiaogou',
    titleZh: '快乐的小狗',
    titlePy: 'Kuàilè de Xiǎogǒu',
    titleVi: 'Chú Cún Vui Vẻ',
    coverImage: '/stories/kuaile-de-xiaogou/page-1.png',
    level: 'YCT 1-2 · HSK 1-2',
    levelBadge: 'Dễ',
    tags: ['Động vật', 'Tình bạn', 'Ấm áp', 'Tranh minh họa màu'],
    category: 'dong-vat',
    categoryLabel: 'Thiếu nhi & Động vật',
    totalPages: 5,
    readingMinutes: 3,
    summary: 'Câu chuyện ấm áp về chú cún Lạc Lạc (乐乐) đáng yêu luôn đem lại tiếng cười cho cả làng, giúp đỡ chú chim sẻ nhỏ bị thương và bài học giản dị về niềm hạnh phúc đích thực.',
    moralLesson: 'Hạnh phúc không nằm ở việc ta sở hữu bao nhiêu, mà nằm ở chỗ trong trái tim ta đã ấp ủ được bao nhiêu điều ấm áp nhỏ bé và sự sẻ chia chân thành.',
  },
];

export function getAllStories(): StorySummary[] {
  return STORY_CATALOG;
}
