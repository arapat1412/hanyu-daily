import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Users,
  Compass,
} from 'lucide-react';
import { BOYA1_STATS } from '../data/boya1Data';
import { BOYA2_STATS } from '../data/boya2Data';
import { YCT1_WORDS } from '../data/yct1Data';
import { YCT2_WORDS } from '../data/yct2Data';

export const CurriculumHubPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-20 selection:bg-sky-200 selection:text-sky-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 pt-6">

        {/* Nút quay lại trang chủ */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors mb-5 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Trang chủ</span>
        </Link>

        {/* 1. Header Banner */}
        <header
          className="relative mb-10 overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-lg shadow-slate-900/5 border border-slate-200/60"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 45%, #0369A1 100%)',
          }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-sky-200 text-xs font-bold mb-3 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Hệ Thống Tủ Sách Giáo Trình Chuẩn Hóa</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
              Chọn Bộ Giáo Trình Học Tập
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              Lựa chọn bộ giáo trình phù hợp theo độ tuổi và mục tiêu học tập: Giáo trình Hán ngữ Boya chuẩn Đại học Bắc Kinh hoặc Giáo trình Thiếu nhi YCT sinh động.
            </p>
          </div>
        </header>

        {/* 2. Hai bộ giáo trình lớn: Boya & YCT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Card 1: Boya */}
          <Link
            to="/boya"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 no-underline"
          >
            {/* Chữ Hán mờ đằng sau */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -bottom-5 select-none font-serif text-[150px] font-black leading-none text-sky-600/10 transition-transform duration-300 group-hover:scale-105"
            >
              博
            </span>

            <div className="relative z-10">
              {/* Badge row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3.5 py-1 text-xs font-extrabold text-white shadow-xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>NGƯỜI LỚN & SINH VIÊN</span>
                </span>
                <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-lg border border-sky-200">
                  9 Tập · 4 Cấp độ
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                Hán Ngữ Boya
              </h2>
              <div className="font-hanzi text-xs font-bold text-sky-700 mt-1">
                博雅汉语 · Chuẩn Đại Học Bắc Kinh
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bộ giáo trình kinh điển, phân cấp khoa học từ Sơ cấp đến Trung cấp. Tập trung phản xạ giao tiếp thực tế, từ vựng chuẩn hóa và bài tập tương tác toàn diện.
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sơ cấp 1 & Sơ cấp 2 đã số hóa trọn bộ</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{(BOYA1_STATS.totalWords + BOYA2_STATS.totalWords).toLocaleString('vi-VN')} từ vựng audio bản xứ & bút thuận</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flashcard thông minh & trắc nghiệm tự luyện</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 mt-8 pt-4 border-t border-sky-200/70 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-700 group-hover:text-sky-800">
                Xem 4 cấp độ Boya
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 text-white px-4 py-2 text-xs font-bold shadow-xs group-hover:bg-sky-700 transition-colors">
                <span>Vào Tủ Sách Boya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

          {/* Card 2: YCT */}
          <Link
            to="/yct"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/40 to-orange-100/50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 no-underline"
          >
            {/* Chữ Hán mờ đằng sau */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 -bottom-5 select-none font-hanzi text-[150px] font-black leading-none text-amber-600/10 transition-transform duration-300 group-hover:scale-105"
            >
              幼
            </span>

            <div className="relative z-10">
              {/* Badge row */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-600 px-3.5 py-1 text-xs font-extrabold text-white shadow-xs">
                  <span>🐼</span>
                  <span>THIẾU NHI & TIỂU HỌC</span>
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  6 Cấp độ · YCT 1 – 6
                </span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                Thiếu Nhi YCT
              </h2>
              <div className="font-hanzi text-xs font-bold text-amber-700 mt-1">
                少儿汉语考试 · Youth Chinese Test
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chương trình chuẩn quốc tế dành riêng cho trẻ em và học sinh tiểu học. Học qua hình ảnh minh họa sinh động, trò chơi ghép từ 30s, thẻ phát âm và trọn bộ PDF giáo trình.
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>YCT 1 & 2 sẵn sàng học ngay ({YCT1_WORDS.length + YCT2_WORDS.length} từ cốt lõi)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trò chơi ghép từ 30s & Đố vui tích điểm sao</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trọn bộ PDF Sách bài học & Bài tập YCT 1 đến 4</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 mt-8 pt-4 border-t border-amber-200/70 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700 group-hover:text-amber-800">
                Xem 6 quyển YCT 1 – 6
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl bg-amber-600 text-white px-4 py-2 text-xs font-bold shadow-xs group-hover:bg-amber-700 transition-colors">
                <span>Vào Tủ Sách YCT</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </Link>

        </div>

      </div>
    </div>
  );
};
