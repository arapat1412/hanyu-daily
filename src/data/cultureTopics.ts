export interface CultureTopic {
  num: number;
  slug: string;
  dataFile: string;
  storageKey: string;
  zh: string;
  py: string;
  title: string;
  glyph: string;
  grad: string;
  ring: string;
  shadow: string;
  soft: string;
  totalLessons: number;
  maxXp: number;
}

export const CULTURE_TOPICS: CultureTopic[] = [
  {
    num: 1,
    slug: "lich-su",
    dataFile: "/hoc-va-choi/game-lichsu-data.json",
    storageKey: "meiday.game.lichsu.v2",
    zh: "历史常识",
    py: "lìshǐ chángshí",
    title: "Lịch sử Trung Quốc",
    glyph: "史",
    grad: "linear-gradient(150deg,#3A2249 0%,#5B3A6E 62%,#8A5FA3 100%)",
    ring: "rgba(206,164,232,.35)",
    shadow: "0 12px 32px rgba(58,34,73,.45)",
    soft: "#E3CFF0",
    totalLessons: 200,
    maxXp: 4000,
  },
  {
    num: 2,
    slug: "van-hoc",
    dataFile: "/hoc-va-choi/game-vanhoc-data.json",
    storageKey: "meiday.game.vanhoc.v1",
    zh: "文学常识",
    py: "wénxué chángshí",
    title: "Văn học Trung Quốc",
    glyph: "文",
    grad: "linear-gradient(150deg,#1F2E4A 0%,#2E4470 62%,#4E72AE 100%)",
    ring: "rgba(150,186,236,.35)",
    shadow: "0 12px 32px rgba(31,46,74,.45)",
    soft: "#C7D8F0",
    totalLessons: 200,
    maxXp: 4000,
  },
  {
    num: 3,
    slug: "van-hoa",
    dataFile: "/hoc-va-choi/game-vanhoa-data.json",
    storageKey: "meiday.game.vanhoa.v1",
    zh: "传统文化常识",
    py: "chuántǒng wénhuà",
    title: "Văn hóa truyền thống",
    glyph: "礼",
    grad: "linear-gradient(150deg,#5E2E1E 0%,#8C4A32 62%,#C4784F 100%)",
    ring: "rgba(240,196,164,.35)",
    shadow: "0 12px 32px rgba(94,46,30,.45)",
    soft: "#F0D2BE",
    totalLessons: 171,
    maxXp: 3420,
  },
  {
    num: 4,
    slug: "nghe-thuat",
    dataFile: "/hoc-va-choi/game-nghethuat-data.json",
    storageKey: "meiday.game.nghethuat.v1",
    zh: "艺术常识",
    py: "yìshù chángshí",
    title: "Nghệ thuật Trung Hoa",
    glyph: "艺",
    grad: "linear-gradient(150deg,#0F4741 0%,#1E6B63 62%,#3E9C8F 100%)",
    ring: "rgba(160,220,208,.35)",
    shadow: "0 12px 32px rgba(15,71,65,.45)",
    soft: "#BFDED8",
    totalLessons: 118,
    maxXp: 2360,
  },
  {
    num: 5,
    slug: "khoa-hoc",
    dataFile: "/hoc-va-choi/game-khoahoc-data.json",
    storageKey: "meiday.game.khoahoc.v1",
    zh: "科技教育常识",
    py: "kējì jiàoyù",
    title: "Khoa học và Giáo dục",
    glyph: "科",
    grad: "linear-gradient(150deg,#31204D 0%,#4A3070 62%,#A481C9 100%)",
    ring: "rgba(196,168,232,.35)",
    shadow: "0 12px 32px rgba(74,48,112,.45)",
    soft: "#DCCFEE",
    totalLessons: 69,
    maxXp: 1380,
  },
  {
    num: 6,
    slug: "thien-van",
    dataFile: "/hoc-va-choi/game-thienvan-data.json",
    storageKey: "meiday.game.thienvan.v1",
    zh: "天文地理常识",
    py: "tiānwén dìlǐ",
    title: "Thiên văn Địa lý",
    glyph: "天",
    grad: "linear-gradient(150deg,#0B2C40 0%,#1B4D6B 62%,#4E97C4 100%)",
    ring: "rgba(150,204,232,.35)",
    shadow: "0 12px 32px rgba(11,44,64,.45)",
    soft: "#BFDCEB",
    totalLessons: 144,
    maxXp: 2880,
  },
  {
    num: 7,
    slug: "doi-song",
    dataFile: "/hoc-va-choi/game-doisong-data.json",
    storageKey: "meiday.game.doisong.v1",
    zh: "中国国情常识",
    py: "zhōngguó guóqíng",
    title: "Trung Quốc hiện đại",
    glyph: "国",
    grad: "linear-gradient(150deg,#6A1723 0%,#9B2C3D 62%,#D06B78 100%)",
    ring: "rgba(232,168,178,.35)",
    shadow: "0 12px 32px rgba(106,23,35,.45)",
    soft: "#EFC9CE",
    totalLessons: 95,
    maxXp: 1900,
  },
];

export function getTopicBySlug(slug: string): CultureTopic | undefined {
  return CULTURE_TOPICS.find((t) => t.slug === slug);
}

export function getTopicProgress(storageKey: string): { doneCount: number; xp: number; weeklyXp: number } {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const weekStart = Date.now() - 7 * 24 * 60 * 60 * 1000;
    const xpLog = raw.xpLog && typeof raw.xpLog === "object" ? raw.xpLog : {};
    const xpDates = raw.xpDates && typeof raw.xpDates === "object" ? raw.xpDates : {};
    const weeklyXp = Object.entries(xpLog).reduce((sum, [key, amount]) => {
      const earnedAt = Date.parse(typeof xpDates[key] === "string" ? xpDates[key] : "");
      return sum + (
        typeof amount === "number" && amount > 0 && Number.isFinite(earnedAt) && earnedAt >= weekStart
          ? amount
          : 0
      );
    }, 0);
    return {
      doneCount: Object.values(raw.done || {}).filter(Boolean).length,
      xp: typeof raw.xp === "number" ? raw.xp : 0,
      weeklyXp,
    };
  } catch {
    return { doneCount: 0, xp: 0, weeklyXp: 0 };
  }
}
