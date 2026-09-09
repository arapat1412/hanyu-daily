import { Link } from "react-router-dom";
import { HSK_LEVELS } from "../data/hskLevels";
import {
  manifest,
  enrichment,
  isVocabularyGroupLevel,
  useProgress,
} from "../lib/hsk";
import { SourceNote } from "../components/HskLearning";

const groups = [
  { title: "Sơ cấp", codes: ["hsk1", "hsk2", "hsk3"] },
  { title: "Trung cấp", codes: ["hsk4", "hsk5", "hsk6"] },
  { title: "Cao cấp", codes: ["hsk7-9"] },
];
const gradients = [
  ["#F0C349", "#D9971A"],
  ["#EC9A3A", "#DE6E1C"],
  ["#EA6A5A", "#D8402F"],
  ["#22A085", "#0E6E58"],
  ["#4A7ED0", "#2B5AA6"],
  ["#8A66C9", "#63409C"],
  ["#2A3768", "#141A38"],
];
const watermarks = ["一", "二", "三", "四", "五", "六", "高"];
export function HskPage() {
  const progress = useProgress();
  return (
    <div className="min-h-screen bg-page pb-16">
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-6 sm:px-5">
        <Link
          to="/"
          className="mb-4 inline-block text-[13px] font-semibold text-ink-2 hover:text-brand"
        >
          ← Trang chủ
        </Link>
        <header className="relative mb-7 overflow-hidden rounded-[22px] bg-gradient-to-br from-gold to-gold-dark px-6 py-7 text-white shadow-sm sm:px-8">
          <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 font-hanzi text-[160px] font-black text-white/10">
            汉语
          </span>
          <div className="relative grid items-center gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/85">
                汉语 · Nền tảng Hán ngữ
              </p>
              <h1 className="text-[32px] font-bold leading-tight">HSK 3.0</h1>
              <p className="mt-2 max-w-[460px] text-sm leading-relaxed text-white/90">
                Lộ trình 9 cấp HSK — từ vựng, ngữ pháp, flashcard và luyện tập.
                Học từng bài, nhớ từng từ mỗi ngày.
              </p>
            </div>
            <div className="flex gap-2.5">
              {[
                [manifest.totalWords.toLocaleString("vi-VN"), "tổng từ vựng"],
                [manifest.totalLessons, "bài và mục"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="min-w-[92px] rounded-2xl bg-white/15 px-4 py-3 text-center"
                >
                  <strong className="block text-2xl">{value}</strong>
                  <span className="text-[10.5px] text-white/85">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-white/70 px-4 py-3 text-xs text-muted">
          <span>
            Đề cương 2026 · HSK 1–3 theo bài · HSK 4–9 theo mục 10 từ
          </span>
          <span>Tiến độ được lưu trên thiết bị của bạn</span>
        </div>
        <p className="mb-6 text-xs leading-relaxed text-muted">
          Đủ {enrichment.totalMeanings.toLocaleString("vi-VN")}/
          {manifest.totalWords.toLocaleString("vi-VN")} mục có nghĩa Việt ·{" "}
          {enrichment.totalHanviet.toLocaleString("vi-VN")} âm Hán Việt tham
          khảo. {enrichment.totalReviewedMeanings} trường hợp đặc biệt đã được
          đối chiếu; hiện không còn mục thiếu nghĩa.
        </p>
        {groups.map((group) => (
          <section key={group.title} className="mb-7">
            <div className="mb-3.5 flex items-center gap-3">
              <h2 className="border-l-4 border-gold pl-3 text-[19px] font-bold">
                {group.title}
              </h2>
              <span className="h-px flex-1 bg-line" />
              <span className="font-bold text-gold">〜</span>
            </div>
            <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {HSK_LEVELS.filter((level) =>
                group.codes.includes(level.code),
              ).map((level) => {
                const index = HSK_LEVELS.indexOf(level);
                const vocabularyGroups = isVocabularyGroupLevel(level.code);
                const done = Object.entries(progress.lessons).filter(
                  ([id, value]) =>
                    id.startsWith(`${level.code}-`) && value.completed,
                ).length;
                const percent = Math.round((done / level.lessonsCount) * 100);
                return (
                  <Link
                    key={level.code}
                    to={`/hsk/${level.code}`}
                    className="relative flex min-h-[155px] flex-col overflow-hidden rounded-2xl px-5 py-5 text-white shadow-sm transition-all hover:scale-[1.01] hover:shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${gradients[index][0]}, ${gradients[index][1]})`,
                    }}
                  >
                    <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 font-hanzi text-[90px] font-black text-white/15">
                      {watermarks[index]}
                    </span>
                    <div className="relative mb-3 flex items-center justify-between gap-2">
                      <h3 className="text-xl font-bold">{level.name}</h3>
                      {done > 0 && (
                        <span className="rounded-full bg-white/20 px-2 py-1 text-[11px] font-bold">
                          {done === level.lessonsCount
                            ? "✓ Hoàn thành"
                            : "▶ Đang học"}
                        </span>
                      )}
                    </div>
                    <p className="relative text-xs text-white/90">
                      {level.lessonsCount} {vocabularyGroups ? "mục" : "bài"} ·{" "}
                      {level.vocabCount.toLocaleString("vi-VN")} từ
                    </p>
                    {done > 0 && (
                      <div className="relative mt-3">
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/25">
                          <div
                            className="h-full bg-white"
                            style={{ width: `${percent}%` }}
                          />
                        </div>
                        <p className="mt-1 text-[11px]">
                          {done}/{level.lessonsCount}{" "}
                          {vocabularyGroups ? "mục" : "bài"}
                        </p>
                      </div>
                    )}
                    <span className="relative mt-auto self-end pt-4 text-xs font-semibold text-white/85">
                      Vào học →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
        <SourceNote />
      </div>
    </div>
  );
}
