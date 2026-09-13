import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { CHENGYU_STORIES, getChengyuProgress } from "../data/chengyuStories";
import { TANG_POEMS, getPoetryProgress } from "../data/tangPoems";
import { YCT1_WORDS, getYctProgress } from "../data/yct1Data";

export const DiscoverPage: React.FC = () => {
  // 1. Calculate chengyu idioms stats
  const chengyuStats = useMemo(() => {
    const prog = getChengyuProgress();
    const readCount = prog.readIds.length;
    const quizCount = prog.quizPassedIds.length;
    const total = CHENGYU_STORIES.length;
    const percent = total > 0 ? Math.round((readCount / total) * 100) : 0;
    return { readCount, quizCount, total, percent, xp: prog.xp };
  }, []);

  // 2. Calculate tang poetry stats
  const poetryStats = useMemo(() => {
    const prog = getPoetryProgress();
    const readCount = prog.readIds.length;
    const quizCount = prog.quizPassedIds.length;
    const total = TANG_POEMS.length;
    const percent = total > 0 ? Math.round((readCount / total) * 100) : 0;
    return { readCount, quizCount, total, percent, xp: prog.xp };
  }, []);

  // 3. Calculate YCT stats
  const yctStats = useMemo(() => {
    const prog = getYctProgress();
    const learnedCount = prog.learnedWordIds.length;
    const total = YCT1_WORDS.length;
    const percent = total > 0 ? Math.round((learnedCount / total) * 100) : 0;
    return { learnedCount, total, percent, xp: prog.xp };
  }, []);

  return (
    <div className="min-h-screen bg-cream pb-24 selection:bg-brand/20 selection:text-brand-dark">
      {/* Top Header Container */}
      <div className="mx-auto max-w-[1240px] px-4 pt-7 sm:px-7">
        {/* Page Title & Subtitle */}
        <div className="flex flex-col gap-1.5">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span>Học Qua Trò Chơi & Thi Họa · 边学边玩</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">Khám phá</h1>
          <p className="text-[13.5px] leading-relaxed text-[#8A7A5C] sm:text-sm">
            Nâng cao kiến thức qua thành ngữ ngụ ngôn, thi ca Đường thi và giáo trình thiếu nhi tương tác sinh động.
          </p>
        </div>

        {/* ================= FEATURED HUBS GRID ================= */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 2. ĐIỂN CỐ & THÀNH NGỮ TRUNG HOA */}
          <Link
            to="/kham-pha/thanh-ngu-dien-co"
            className="group relative flex min-h-[250px] flex-col gap-3.5 overflow-hidden rounded-[24px] px-6 py-6 text-white no-underline shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
            style={{
              background: "linear-gradient(150deg,#7C2D37 0%,#5B1B25 55%,#3D0F18 100%)",
              boxShadow: "0 12px 32px rgba(61,15,24,.35)",
            }}
          >
            {/* Giant Chinese Character Watermark */}
            <span
              className="pointer-events-none absolute right-[-14px] bottom-[-34px] select-none font-hanzi text-[150px] font-black leading-[0.8] transition-transform duration-500 group-hover:scale-105"
              style={{ color: "rgba(255,255,255,.09)" }}
            >
              典
            </span>

            {/* Badge pill */}
            <div className="relative flex items-center gap-2">
              <span
                className="w-fit rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-[0.08em] shadow-xs"
                style={{ color: "#7C2D37", background: "#FDF2F4" }}
              >
                成语 · 20 ĐIỂN TÍCH
              </span>
              {chengyuStats.xp > 0 && (
                <span className="flex items-center gap-1 rounded-full bg-amber-400/20 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-300">
                  <Zap className="h-3 w-3 fill-amber-300" />
                  {chengyuStats.xp} XP
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="relative">
              <div className="font-hanzi text-xl font-black leading-tight text-white">
                Điển Cố & Thành Ngữ
              </div>
              <div className="mt-1.5 text-xs font-bold" style={{ color: "#FAD2D8" }}>
                中华成语故事与智慧
              </div>
            </div>

            {/* Progress indicator if player started */}
            {chengyuStats.readCount > 0 ? (
              <div className="relative max-w-xs">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Tiến độ học tập</span>
                  <span className="font-mono font-bold text-amber-300">
                    {chengyuStats.readCount}/{chengyuStats.total} ({chengyuStats.percent}%)
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${chengyuStats.percent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="relative text-xs text-rose-100/80">
                Ôm cây đợi thỏ, Tái ông thất mã, Cáo mượn oai hùm...
              </div>
            )}

            {/* Bottom CTA Row */}
            <div className="relative mt-auto flex items-end justify-between gap-2 pt-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-[12px] px-4 py-2 text-[12.5px] font-extrabold whitespace-nowrap shadow-md transition-all group-hover:bg-amber-300"
                style={{ background: "#F0C64C", color: "#40300A" }}
              >
                <span>{chengyuStats.readCount > 0 ? "▶ Tiếp tục" : "▶ Khám phá"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>

              <span className="text-[11px] font-medium whitespace-nowrap text-white/85">
                ✨ Điển tích & Quiz
              </span>
            </div>
          </Link>

          {/* 3. 300 BÀI THƠ ĐƯỜNG BẤT HỦ */}
          <Link
            to="/kham-pha/tho-duong"
            className="group relative flex min-h-[250px] flex-col gap-3.5 overflow-hidden rounded-[24px] px-6 py-6 text-white no-underline shadow-xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
            style={{
              background: "linear-gradient(150deg,#1B4D3E 0%,#13382D 55%,#0B241C 100%)",
              boxShadow: "0 12px 32px rgba(11,36,28,.35)",
            }}
          >
            {/* Giant Chinese Character Watermark */}
            <span
              className="pointer-events-none absolute right-[-14px] bottom-[-34px] select-none font-hanzi text-[150px] font-black leading-[0.8] transition-transform duration-500 group-hover:scale-105"
              style={{ color: "rgba(255,255,255,.09)" }}
            >
              诗
            </span>

            {/* Badge pill */}
            <div className="relative flex items-center gap-2">
              <span
                className="w-fit rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-[0.08em] shadow-xs"
                style={{ color: "#0B241C", background: "#E8F6F1" }}
              >
                唐诗 · 25 BÀI TINH HOA
              </span>
              {poetryStats.xp > 0 && (
                <span className="flex items-center gap-1 rounded-full bg-amber-400/20 px-2.5 py-1 text-[11px] font-mono font-bold text-amber-300">
                  <Zap className="h-3 w-3 fill-amber-300" />
                  {poetryStats.xp} XP
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="relative">
              <div className="font-hanzi text-xl font-black leading-tight text-white">
                Đường Thi Tuyển Tập
              </div>
              <div className="mt-1.5 text-xs font-bold" style={{ color: "#C6EBDD" }}>
                唐诗精选 · Tuyển trích 300 Bài Thơ Đường
              </div>
            </div>

            {/* Progress indicator if player started */}
            {poetryStats.readCount > 0 ? (
              <div className="relative max-w-xs">
                <div className="flex items-center justify-between text-[11px] text-white/80">
                  <span>Tiến độ ngâm thơ</span>
                  <span className="font-mono font-bold text-amber-300">
                    {poetryStats.readCount}/{poetryStats.total} ({poetryStats.percent}%)
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-amber-400 transition-all duration-500"
                    style={{ width: `${poetryStats.percent}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="relative text-xs text-emerald-100/80">
                Tĩnh dạ tứ, Xuân hiểu, Phong Kiều dạ bạc, Hoàng Hạc lâu...
              </div>
            )}

            {/* Bottom CTA Row */}
            <div className="relative mt-auto flex items-end justify-between gap-2 pt-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-[12px] px-4 py-2 text-[12.5px] font-extrabold whitespace-nowrap shadow-md transition-all group-hover:bg-amber-300"
                style={{ background: "#F0C64C", color: "#40300A" }}
              >
                <span>{poetryStats.readCount > 0 ? "▶ Tiếp tục" : "▶ Khám phá"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>

              <span className="text-[11px] font-medium whitespace-nowrap text-white/85">
                🌸 Thi họa & Dịch thơ
              </span>
            </div>
          </Link>
        </div>

        {/* ================= GÓC THIẾU NHI · GIÁO TRÌNH CHO TRẺ EM ================= */}
        <div className="mt-10">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-700">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                <span>Dành Riêng Cho Các Bạn Nhỏ · 少儿汉语</span>
              </div>
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl mt-1">
                Giáo Trình Tiếng Trung Thiếu Nhi · YCT
              </h2>
              <p className="text-xs sm:text-[13.5px] text-[#8A7A5C] mt-0.5">
                Chương trình chuẩn quốc tế Youth Chinese Test (YCT) với hình minh họa hoạt hình trực quan, flashcard phát âm, trò chơi và trọn bộ PDF giáo trình.
              </p>
            </div>
          </div>

          {/* Featured Kid Hero Card */}
          <Link
            to="/kham-pha/yct"
            className="group relative flex flex-col lg:flex-row items-stretch justify-between gap-6 overflow-hidden rounded-[28px] p-6 sm:p-8 text-white no-underline shadow-xl transition-all duration-300 hover:scale-[1.006] hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#D97706 0%,#EA580C 45%,#C2410C 80%,#9A3412 100%)",
              boxShadow: "0 12px 36px rgba(194,65,12,.3)",
            }}
          >
            {/* Giant Watermark Character */}
            <span
              className="pointer-events-none absolute right-[-20px] bottom-[-45px] select-none font-hanzi text-[180px] sm:text-[220px] font-black leading-[0.8] transition-transform duration-500 group-hover:scale-105"
              style={{ color: "rgba(255,255,255,.08)" }}
            >
              幼
            </span>

            {/* Left Column: Info & Highlights */}
            <div className="relative z-10 flex flex-1 flex-col justify-between gap-4">
              <div>
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="w-fit rounded-full px-3.5 py-1.5 text-[11px] font-extrabold tracking-[0.08em] shadow-xs"
                    style={{ color: "#9A3412", background: "#FFF7ED" }}
                  >
                    少儿 · GIÁO TRÌNH CHO TRẺ EM
                  </span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                    🐼 YCT 1 · 80 Từ Cốt Lõi
                  </span>
                  {yctStats.xp > 0 && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-300/30 px-3 py-1 text-[11px] font-mono font-bold text-amber-200">
                      <Zap className="h-3 w-3 fill-amber-200" />
                      {yctStats.xp} XP
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="mt-3.5 font-display text-2xl sm:text-3xl font-black text-white">
                  Góc Thiếu Nhi · Giáo Trình Chuẩn YCT 1
                </h3>
                <div className="mt-1 text-xs sm:text-sm font-bold text-amber-100/90">
                  YCT 标准教程 1 · Khóa học tiếng Trung đầu đời sinh động cho thiếu nhi
                </div>

                <p className="mt-2.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-orange-50/95 font-medium">
                  Thiết kế đặc biệt dành riêng cho trẻ em và học sinh tiểu học: hình ảnh hoạt hình minh họa mờ trực quan cho từng từ, thẻ lật phát âm chuẩn, trò chơi ghép từ 30s, thử thách xếp câu và tải trọn bộ PDF sách giáo trình chuẩn.
                </p>

                {/* Feature Pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                    🎨 Tranh hoạt hình minh họa từng từ
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                    🔊 Flashcard phát âm & tập viết chữ
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                    🎮 Nối từ & Trắc nghiệm vui nhộn
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-xs">
                    📥 Tải miễn phí PDF sách giáo trình
                  </span>
                </div>
              </div>

              {/* Progress Bar (if started) */}
              {yctStats.learnedCount > 0 && (
                <div className="max-w-md">
                  <div className="flex items-center justify-between text-[11px] text-white/90">
                    <span>Tiến độ học từ vựng</span>
                    <span className="font-mono font-bold text-amber-200">
                      {yctStats.learnedCount}/{yctStats.total} ({yctStats.percent}%)
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-black/20">
                    <div
                      className="h-full rounded-full bg-amber-300 transition-all duration-500"
                      style={{ width: `${yctStats.percent}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Interactive Word Preview / Action Box */}
            <div className="relative z-10 flex flex-col justify-between sm:items-end lg:w-72 shrink-0 gap-4 border-t lg:border-t-0 lg:border-l border-white/20 pt-4 lg:pt-0 lg:pl-6">
              {/* Sample word bubbles */}
              <div className="hidden sm:flex flex-wrap lg:flex-col gap-2 w-full">
                <div className="flex items-center justify-between rounded-2xl bg-white/15 px-3.5 py-2 backdrop-blur-xs text-xs">
                  <span className="font-hanzi text-base font-bold text-white">你好 Nǐ hǎo</span>
                  <span className="text-amber-100 font-medium">Xin chào 👋</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/15 px-3.5 py-2 backdrop-blur-xs text-xs">
                  <span className="font-hanzi text-base font-bold text-white">爸爸 Bàba</span>
                  <span className="text-amber-100 font-medium">Bố 👨</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/15 px-3.5 py-2 backdrop-blur-xs text-xs">
                  <span className="font-hanzi text-base font-bold text-white">苹果 Píngguǒ</span>
                  <span className="text-amber-100 font-medium">Quả táo 🍎</span>
                </div>
              </div>

              {/* Big Action Button */}
              <div className="w-full mt-auto pt-2">
                <span
                  className="flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-black shadow-lg transition-all duration-300 group-hover:bg-amber-300 group-hover:shadow-amber-500/30 group-hover:scale-[1.02]"
                  style={{ background: "#F0C64C", color: "#40300A" }}
                >
                  <span>{yctStats.learnedCount > 0 ? "Tiếp Tục Học YCT 1" : "Vào Khám Phá & Học Ngay"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="mt-2 text-center text-[11px] font-medium text-white/80">
                  🐼 Gấu trúc Pipi cùng bé học mỗi ngày
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
