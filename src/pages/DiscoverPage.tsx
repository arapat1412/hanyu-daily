import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Zap } from "lucide-react";
import { CHENGYU_STORIES, getChengyuProgress } from "../data/chengyuStories";
import { TANG_POEMS, getPoetryProgress } from "../data/tangPoems";

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
            Nâng cao kiến thức và vốn từ qua kho tàng điển cố thành ngữ và tuyển tập thơ Đường bất hủ.
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
      </div>
    </div>
  );
};

