import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { HSK_LEVELS } from "../data/hskLevels";
import {
  manifest,
  isVocabularyGroupLevel,
  useProgress,
} from "../lib/hsk";
import { SourceNote } from "../components/HskLearning";

const LEVEL_CONFIG: Record<string, {
  cardBg: string;
  cardBorder: string;
  badgeBg: string;
  progressBg: string;
  hanzi: string;
  hanziColor: string;
  tag: string;
  desc: string;
  activeColor: string;
}> = {
  hsk1: {
    cardBg: "bg-gradient-to-br from-white via-sky-50/40 to-sky-100/50",
    cardBorder: "border-sky-200/90 hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/10",
    badgeBg: "bg-sky-600 text-white",
    progressBg: "bg-sky-500",
    hanzi: "一",
    hanziColor: "text-sky-600/15",
    tag: "Nhập môn",
    desc: "Làm quen bảng chữ Hán, phát âm chuẩn và các câu giao tiếp sinh hoạt cơ bản.",
    activeColor: "bg-gradient-to-br from-white via-sky-50/60 to-sky-100/70 border-sky-400 ring-2 ring-sky-500 shadow-md shadow-sky-500/15",
  },
  hsk2: {
    cardBg: "bg-gradient-to-br from-white via-cyan-50/40 to-cyan-100/50",
    cardBorder: "border-cyan-200/90 hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/10",
    badgeBg: "bg-cyan-600 text-white",
    progressBg: "bg-cyan-500",
    hanzi: "二",
    hanziColor: "text-cyan-600/15",
    tag: "Sơ cấp",
    desc: "Mở rộng vốn từ vựng quen thuộc hằng ngày và ngữ pháp đàm thoại thường dùng.",
    activeColor: "bg-gradient-to-br from-white via-cyan-50/60 to-cyan-100/70 border-cyan-400 ring-2 ring-cyan-500 shadow-md shadow-cyan-500/15",
  },
  hsk3: {
    cardBg: "bg-gradient-to-br from-white via-emerald-50/40 to-emerald-100/50",
    cardBorder: "border-emerald-200/90 hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-500/10",
    badgeBg: "bg-emerald-600 text-white",
    progressBg: "bg-emerald-500",
    hanzi: "三",
    hanziColor: "text-emerald-600/15",
    tag: "Giao tiếp",
    desc: "Tự tin giao tiếp mạch lạc trong học tập, công việc và du lịch thực tế.",
    activeColor: "bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/70 border-emerald-400 ring-2 ring-emerald-500 shadow-md shadow-emerald-500/15",
  },
  hsk4: {
    cardBg: "bg-gradient-to-br from-white via-amber-50/40 to-amber-100/50",
    cardBorder: "border-amber-200/90 hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/10",
    badgeBg: "bg-amber-600 text-white",
    progressBg: "bg-amber-500",
    hanzi: "四",
    hanziColor: "text-amber-600/15",
    tag: "Trung cấp 1",
    desc: "Thảo luận các chủ đề đa dạng, diễn đạt quan điểm và ngữ nghĩa trôi chảy.",
    activeColor: "bg-gradient-to-br from-white via-amber-50/60 to-amber-100/70 border-amber-400 ring-2 ring-amber-500 shadow-md shadow-amber-500/15",
  },
  hsk5: {
    cardBg: "bg-gradient-to-br from-white via-pink-50/40 to-pink-100/50",
    cardBorder: "border-pink-200/90 hover:border-pink-400 hover:shadow-md hover:shadow-pink-500/10",
    badgeBg: "bg-pink-600 text-white",
    progressBg: "bg-pink-500",
    hanzi: "五",
    hanziColor: "text-pink-600/15",
    tag: "Trung cấp 2",
    desc: "Đọc hiểu báo chí, xem phim ảnh và thuyết trình tiếng Trung tự nhiên.",
    activeColor: "bg-gradient-to-br from-white via-pink-50/60 to-pink-100/70 border-pink-400 ring-2 ring-pink-500 shadow-md shadow-pink-500/15",
  },
  hsk6: {
    cardBg: "bg-gradient-to-br from-white via-purple-50/40 to-purple-100/50",
    cardBorder: "border-purple-200/90 hover:border-purple-400 hover:shadow-md hover:shadow-purple-500/10",
    badgeBg: "bg-purple-600 text-white",
    progressBg: "bg-purple-500",
    hanzi: "六",
    hanziColor: "text-purple-600/15",
    tag: "Thành thạo",
    desc: "Phản xạ chuẩn xác, nắm vững cấu trúc văn phong học thuật chuyên sâu.",
    activeColor: "bg-gradient-to-br from-white via-purple-50/60 to-purple-100/70 border-purple-400 ring-2 ring-purple-500 shadow-md shadow-purple-500/15",
  },
  "hsk7-9": {
    cardBg: "bg-gradient-to-br from-white via-indigo-50/40 to-indigo-100/50",
    cardBorder: "border-indigo-200/90 hover:border-indigo-400 hover:shadow-md hover:shadow-indigo-500/10",
    badgeBg: "bg-indigo-600 text-white",
    progressBg: "bg-indigo-500",
    hanzi: "高",
    hanziColor: "text-indigo-600/15",
    tag: "Học thuật cao cấp",
    desc: "Dành cho nghiên cứu sinh, dịch thuật chuyên nghiệp và xin học bổng toàn phần.",
    activeColor: "bg-gradient-to-br from-white via-indigo-50/60 to-indigo-100/70 border-indigo-400 ring-2 ring-indigo-500 shadow-md shadow-indigo-500/15",
  },
};

const groups = [
  { 
    title: "Nền tảng", 
    range: "Cấp 1 – 3",
    subtitle: "Cấp 1 – 3: Nền tảng phát âm, từ vựng và câu đàm thoại", 
    codes: ["hsk1", "hsk2", "hsk3"] 
  },
  { 
    title: "Giao tiếp", 
    range: "Cấp 4 – 6",
    subtitle: "Cấp 4 – 6: Phản xạ giao tiếp tự nhiên và ngữ pháp nâng cao", 
    codes: ["hsk4", "hsk5", "hsk6"] 
  },
  { 
    title: "Nâng cao", 
    range: "Cấp 7 – 9",
    subtitle: "Cấp 7 – 9: Học thuật chuyên sâu, biên phiên dịch và nghiên cứu", 
    codes: ["hsk7-9"] 
  },
];

export function HskPage() {
  const progress = useProgress();

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">
        
        {/* Nút quay lại trang chủ */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors mb-5 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Trang chủ</span>
        </Link>

        {/* 1. Header Banner phong cách Luminous Gradient đậm đà & có chiều sâu */}
        <header 
          className="relative mb-8 overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-lg shadow-sky-950/10 border border-sky-400/30"
          style={{
            background: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 30%, #38BDF8 58%, #F472B6 100%)'
          }}
        >
          {/* Ambient orbs */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/40 text-white text-xs font-bold mb-3 backdrop-blur-md shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-200" />
                <span>Lộ trình Chuẩn New HSK 3.0 · Khung Năng Lực Quốc Tế</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-snug drop-shadow-xs">
                Chinh phục New HSK 3.0
              </h1>
              <p className="mt-2 max-w-xl text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
                Lộ trình 9 cấp độ toàn diện từ vựng, ngữ pháp và bài luyện phản xạ — học từng bài, ghi nhớ dài hạn.
              </p>
            </div>

            {/* 2 Thẻ chỉ số nổi kính mờ sang trọng */}
            <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-sky-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    {manifest.totalWords.toLocaleString("vi-VN")}
                  </div>
                  <div className="text-[11px] text-white/85 font-semibold mt-1">
                    Tổng từ vựng
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl bg-white/20 border border-white/30 backdrop-blur-md shadow-md shadow-sky-950/10">
                <div className="w-10 h-10 rounded-xl bg-white/25 text-white flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-black text-white font-mono leading-none">
                    {manifest.totalLessons}
                  </div>
                  <div className="text-[11px] text-white/85 font-semibold mt-1">
                    Bài & chuyên đề
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Thanh thông báo gọn gàng, súc tích */}
        <div className="mb-7 flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">Đề cương New HSK 3.0 chuẩn hóa</span>
            <span className="text-slate-300">|</span>
            <span>HSK 1–3 theo bài học · HSK 4–9 theo cụm 10 từ</span>
          </div>
          <span className="font-medium text-slate-400">
            Tiến độ được tự động lưu trên thiết bị
          </span>
        </div>

        {/* 3. Danh sách các nhóm cấp độ (Sơ cấp, Trung cấp, Cao cấp) */}
        <div className="space-y-8">
          {groups.map((group) => (
            <section key={group.title}>
              
              {/* Tiêu đề nhóm */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-4 pb-2.5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {group.title}
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700">
                    {group.range}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {group.subtitle}
                </span>
              </div>

              {/* Lưới các thẻ cấp độ */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {HSK_LEVELS.filter((level) =>
                  group.codes.includes(level.code),
                ).map((level) => {
                  const config = LEVEL_CONFIG[level.code] || LEVEL_CONFIG.hsk1;
                  const vocabularyGroups = isVocabularyGroupLevel(level.code);
                  const done = Object.entries(progress.lessons).filter(
                    ([id, value]) =>
                      id.startsWith(`${level.code}-`) && value.completed,
                  ).length;
                  const percent = Math.round((done / level.lessonsCount) * 100);
                  const isCompleted = done === level.lessonsCount && done > 0;
                  const isStarted = done > 0 && !isCompleted;

                  return (
                    <Link
                      key={level.code}
                      to={`/hsk/${level.code}`}
                      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 border transition-all ${
                        isStarted 
                          ? config.activeColor 
                          : `${config.cardBg} ${config.cardBorder} shadow-xs hover:shadow-md hover:-translate-y-0.5`
                      }`}
                    >
                      {/* Chữ Hán mờ đại diện đằng sau */}
                      <span 
                        aria-hidden="true" 
                        className={`pointer-events-none absolute -right-2 -bottom-3 select-none font-serif text-[100px] sm:text-[110px] font-black leading-none transition-transform duration-300 group-hover:scale-105 ${config.hanziColor}`}
                      >
                        {config.hanzi}
                      </span>

                      {/* Nội dung nổi bên trên chữ mờ */}
                      <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                          {/* Header thẻ: Badge cấp độ + Trạng thái */}
                          <div className="flex items-center justify-between gap-2 mb-2.5">
                            <div className="flex items-center gap-2">
                              <span className={`inline-flex items-center justify-center font-display text-xs font-black px-2.5 py-1 rounded-xl shadow-xs tracking-wide ${config.badgeBg}`}>
                                {level.name}
                              </span>
                              <span className="text-xs font-semibold text-slate-700">
                                {config.tag}
                              </span>
                            </div>

                            {isCompleted ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Hoàn thành</span>
                              </span>
                            ) : isStarted ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-[11px] font-bold border border-sky-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-sky-600 animate-pulse" />
                                <span>Đang học {percent}%</span>
                              </span>
                            ) : (
                              <span className="text-[11px] font-medium text-slate-400">
                                Chưa bắt đầu
                              </span>
                            )}
                          </div>

                          {/* Mô tả súc tích cấp độ */}
                          <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                            {config.desc}
                          </p>
                        </div>

                        {/* Footer thẻ: Thông số + Tiến độ + Nút hành động */}
                        <div className="pt-3 border-t border-slate-200/80">
                          {isStarted && (
                            <div className="mb-3">
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
                                <div
                                  className={`h-full rounded-full transition-all duration-500 ${config.progressBg}`}
                                  style={{ width: `${percent}%` }}
                                />
                              </div>
                              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1 font-medium">
                                <span>Đã học {done}/{level.lessonsCount} {vocabularyGroups ? "mục" : "bài"}</span>
                                <span className="font-bold text-sky-700">{percent}%</span>
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-semibold text-slate-700">
                              {level.lessonsCount} {vocabularyGroups ? "mục" : "bài"} · {level.vocabCount.toLocaleString("vi-VN")} từ
                            </span>

                            {isCompleted ? (
                              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-xs group-hover:bg-emerald-700 transition-all">
                                <span>Ôn tập</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            ) : isStarted ? (
                              <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl ${config.badgeBg} font-bold text-xs shadow-xs group-hover:brightness-110 transition-all`}>
                                <span>Tiếp tục</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-800 text-white font-bold text-xs shadow-xs group-hover:bg-sky-600 transition-all">
                                <span>Học ngay</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Nguồn dữ liệu & bản quyền */}
        <SourceNote />

      </div>
    </div>
  );
}
