import { HskLevel } from "../types";
import manifest from "./hsk-manifest.json";

export const HSK_LEVELS: HskLevel[] = [
  {
    id: "hsk1",
    code: "hsk1",
    name: "HSK 1",
    title: "Sơ cấp Khởi động",
    levelNum: 1,
    badgeColor: "#A9780B",
    badgeBg: "#FFF8E6",
    accentColor: "#D4A017",
    description:
      "Nền tảng căn bản, ngữ âm Pinyin, các mẫu câu chào hỏi, giao tiếp thường nhật cơ bản.",
    recommendedTime: "1 – 2 tháng",
  },
  {
    id: "hsk2",
    code: "hsk2",
    name: "HSK 2",
    title: "Sơ cấp Giao tiếp",
    levelNum: 2,
    badgeColor: "#DE6E1C",
    badgeBg: "#FFF3E0",
    accentColor: "#DE6E1C",
    description:
      "Diễn đạt các chủ đề quen thuộc hàng ngày: mua sắm, thời tiết, sở thích, chỉ đường.",
    recommendedTime: "2 – 3 tháng",
  },
  {
    id: "hsk3",
    code: "hsk3",
    name: "HSK 3",
    title: "Trung cấp Cơ sở",
    levelNum: 3,
    badgeColor: "#D8402F",
    badgeBg: "#FBEAEA",
    accentColor: "#D8402F",
    description:
      "Giao tiếp trôi chảy trong công việc, học tập, du lịch. Tự tin diễn đạt ý kiến cá nhân.",
    recommendedTime: "3 – 4 tháng",
  },
  {
    id: "hsk4",
    code: "hsk4",
    name: "HSK 4",
    title: "Trung cấp Nâng cao",
    levelNum: 4,
    badgeColor: "#0E6E58",
    badgeBg: "#EAF7EF",
    accentColor: "#0E6E58",
    description:
      "Thảo luận các chủ đề sâu rộng, đọc báo chí và xem phim tiếng Trung cơ bản không cần phụ đề.",
    recommendedTime: "4 – 6 tháng",
  },
  {
    id: "hsk5",
    code: "hsk5",
    name: "HSK 5",
    title: "Cao cấp Học thuật",
    levelNum: 5,
    badgeColor: "#2B5AA6",
    badgeBg: "#DCEEFB",
    accentColor: "#2B5AA6",
    description:
      "Đọc hiểu báo chí, tạp chí, thưởng thức văn học và thuyết trình các vấn đề chuyên môn.",
    recommendedTime: "6 – 8 tháng",
  },
  {
    id: "hsk6",
    code: "hsk6",
    name: "HSK 6",
    title: "Bậc thầy Thành thạo",
    levelNum: 6,
    badgeColor: "#63409C",
    badgeBg: "#F1EAF6",
    accentColor: "#63409C",
    description:
      "Hiểu dễ dàng mọi thông tin bằng lời nói hoặc văn bản tiếng Trung, diễn đạt tự nhiên như người bản xứ.",
    recommendedTime: "8 – 12 tháng",
  },
  {
    id: "hsk79",
    code: "hsk7-9",
    name: "HSK 7–9",
    title: "Chuyên gia & Dịch thuật",
    levelNum: "7-9",
    badgeColor: "#141A38",
    badgeBg: "#E9F1F5",
    accentColor: "#2C5670",
    description:
      "Khóa học toàn diện cao cấp: Ôn luyện Thành ngữ (成语), Cấu trúc định thức (定式), Kỹ năng biên phiên dịch và Lịch sử văn hóa.",
    recommendedTime: "12+ tháng",
  },
].map((level) => ({
  ...level,
  ...manifest.levels[level.code as keyof typeof manifest.levels],
  progressPercent: 0,
}));
