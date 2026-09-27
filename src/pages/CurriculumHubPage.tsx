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
  Star,
} from 'lucide-react';
import { BOYA1_STATS } from '../data/boya1Data';
import { BOYA2_STATS } from '../data/boya2Data';
import { YCT1_WORDS } from '../data/yct1Data';
import { YCT2_WORDS } from '../data/yct2Data';
import { YCT3_WORDS } from '../data/yct3Data';

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
          className="relative mb-10 overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-lg shadow-sky-950/10 border border-sky-300/30"
          style={{
            background: 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 32%, #38BDF8 56%, #F59E0B 82%, #FB923C 92%, #FDBA74 100%)',
          }}
        >
          {/* Ambient Glow */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-orange-300/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold mb-3 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Hệ Thống Tủ Sách Giáo Trình Chuẩn Hóa</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug drop-shadow-xs">
              Chọn Bộ Giáo Trình Học Tập
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-white/95 leading-relaxed font-medium drop-shadow-2xs">
              Lựa chọn bộ giáo trình phù hợp theo độ tuổi và mục tiêu học tập: Giáo trình Hán ngữ Boya chuẩn Đại học Bắc Kinh hoặc Giáo trình Thiếu nhi YCT sinh động.
            </p>
          </div>
        </header>

        {/* 2. Hai bộ giáo trình lớn: Boya & YCT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* Card 1: Boya */}
          <Link
            to="/boya"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-200/80 bg-gradient-to-br from-white via-sky-50/40 to-sky-100/50 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-xl hover:shadow-sky-500/10 no-underline"
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
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-600 px-3.5 py-1 text-xs font-extrabold text-white shadow-xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>NGƯỜI LỚN & SINH VIÊN</span>
                </span>
                <span className="text-xs font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-lg border border-sky-200">
                  9 Tập · 4 Cấp độ
                </span>
              </div>

              {/* Sân khấu trưng bày bìa sách 3D Boya */}
              <div className="relative my-4 py-4 px-3 rounded-2xl bg-gradient-to-b from-sky-100/60 via-white/50 to-sky-50/30 border border-sky-100/90 flex items-center justify-center overflow-hidden shadow-inner">
                {/* Ánh sáng nền spotlight */}
                <div className="pointer-events-none absolute -top-8 w-44 h-44 bg-sky-400/25 rounded-full blur-2xl" />
                <div className="pointer-events-none absolute -bottom-6 w-52 h-20 bg-sky-300/20 rounded-full blur-xl" />

                {/* Container sách 3D */}
                <div className="relative z-10 flex items-end justify-center gap-3 sm:gap-4.5 pt-2 pb-1">
                  
                  {/* Bìa Boya Sơ cấp 1 */}
                  <div className="relative flex flex-col items-center transition-all duration-300 transform -rotate-2 group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:scale-105">
                    <div className="relative w-24 sm:w-28 md:w-30 aspect-[3/4.3] rounded-xl overflow-hidden shadow-lg shadow-sky-950/20 ring-1 ring-black/10 bg-white">
                      <img
                        src="/boyasocap1.png"
                        alt="Giáo trình Hán ngữ Boya Sơ cấp 1"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {/* Hiệu ứng gáy sách 3D */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 sm:w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                    </div>
                    {/* Shadow chân sách */}
                    <div className="w-4/5 h-1.5 bg-slate-900/15 blur-xs rounded-full mt-1.5" />
                    {/* Nhãn tập */}
                    <span className="mt-1 text-[10.5px] font-bold text-sky-900 bg-white/95 px-2 py-0.5 rounded-md shadow-2xs border border-sky-200/80">
                      Sơ cấp 1
                    </span>
                  </div>

                  {/* Bìa Boya Sơ cấp 2 */}
                  <div className="relative flex flex-col items-center transition-all duration-300 transform rotate-2 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:scale-105">
                    <div className="relative w-24 sm:w-28 md:w-30 aspect-[3/4.3] rounded-xl overflow-hidden shadow-lg shadow-sky-950/20 ring-1 ring-black/10 bg-white">
                      <img
                        src="/boyasocap2.png"
                        alt="Giáo trình Hán ngữ Boya Sơ cấp 2"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {/* Hiệu ứng gáy sách 3D */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 sm:w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                    </div>
                    {/* Shadow chân sách */}
                    <div className="w-4/5 h-1.5 bg-slate-900/15 blur-xs rounded-full mt-1.5" />
                    {/* Nhãn tập */}
                    <span className="mt-1 text-[10.5px] font-bold text-sky-900 bg-white/95 px-2 py-0.5 rounded-md shadow-2xs border border-sky-200/80">
                      Sơ cấp 2
                    </span>
                  </div>

                  {/* Gợi ý tập Trung cấp tiếp nối (hiển thị trên màn hình rộng) */}
                  <div className="hidden sm:flex relative flex-col items-center opacity-70 transition-all duration-300 transform rotate-5 -translate-x-1 group-hover:opacity-90 group-hover:translate-x-0 group-hover:-translate-y-1">
                    <div className="relative w-18 sm:w-20 aspect-[3/4.3] rounded-lg overflow-hidden shadow-md ring-1 ring-black/10 bg-white filter saturate-90">
                      <img
                        src="/boyatrungcap1.png"
                        alt="Boya Trung cấp"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/30 via-white/10 to-transparent" />
                      <div className="absolute inset-0 bg-sky-950/25 flex items-center justify-center">
                        <span className="text-[9px] font-extrabold text-white bg-slate-900/85 px-1.5 py-0.5 rounded backdrop-blur-xs">
                          +7 Tập
                        </span>
                      </div>
                    </div>
                    <div className="w-4/5 h-1.5 bg-slate-900/10 blur-xs rounded-full mt-1.5" />
                    <span className="mt-1 text-[10px] font-semibold text-slate-500">
                      Trung cấp
                    </span>
                  </div>

                </div>
              </div>

              {/* Title & Hanzi */}
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
              <div className="mt-4 space-y-2">
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
            <div className="relative z-10 mt-6 pt-4 border-t border-sky-200/70 flex items-center justify-between">
              <span className="text-xs font-bold text-sky-700 group-hover:text-sky-800 transition-colors">
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
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-200/80 bg-gradient-to-br from-white via-amber-50/40 to-orange-100/50 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 no-underline"
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
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-600 px-3.5 py-1 text-xs font-extrabold text-white shadow-xs">
                  <span>🐼</span>
                  <span>THIẾU NHI & TIỂU HỌC</span>
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-lg border border-amber-200">
                  6 Cấp độ · YCT 1 – 6
                </span>
              </div>

              {/* Sân khấu trưng bày bìa sách 3D YCT */}
              <div className="relative my-4 py-4 px-3 rounded-2xl bg-gradient-to-b from-amber-100/60 via-white/50 to-orange-50/30 border border-amber-100/90 flex items-center justify-center overflow-hidden shadow-inner">
                {/* Ánh sáng nền spotlight ấm áp */}
                <div className="pointer-events-none absolute -top-8 w-44 h-44 bg-amber-400/25 rounded-full blur-2xl" />
                <div className="pointer-events-none absolute -bottom-6 w-52 h-20 bg-orange-300/20 rounded-full blur-xl" />

                {/* Container sách 3D */}
                <div className="relative z-10 flex items-end justify-center gap-2.5 sm:gap-3.5 pt-2 pb-1">

                  {/* Bìa YCT 1 */}
                  <div className="relative flex flex-col items-center transition-all duration-300 transform -rotate-3 group-hover:-translate-y-2 group-hover:-rotate-4 group-hover:scale-105">
                    <div className="relative w-22 sm:w-26 md:w-28 aspect-[3/4] rounded-xl overflow-hidden shadow-lg shadow-amber-950/20 ring-1 ring-black/10 bg-white">
                      <img
                        src="/yct1.png"
                        alt="Giáo trình YCT Cấp 1"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {/* Hiệu ứng gáy sách 3D */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                    </div>
                    {/* Shadow chân sách */}
                    <div className="w-4/5 h-1.5 bg-slate-900/15 blur-xs rounded-full mt-1.5" />
                    {/* Nhãn tập */}
                    <span className="mt-1 text-[10.5px] font-bold text-amber-950 bg-white/95 px-2 py-0.5 rounded-md shadow-2xs border border-amber-200/80">
                      YCT 1
                    </span>
                  </div>

                  {/* Bìa YCT 2 (Trọng tâm) */}
                  <div className="relative flex flex-col items-center transition-all duration-300 transform scale-105 z-10 group-hover:-translate-y-2.5 group-hover:scale-110">
                    <div className="relative w-24 sm:w-28 md:w-30 aspect-[3/4] rounded-xl overflow-hidden shadow-xl shadow-amber-950/25 ring-2 ring-amber-400/70 bg-white">
                      <img
                        src="/yct2.png"
                        alt="Giáo trình YCT Cấp 2"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {/* Hiệu ứng gáy sách 3D */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 sm:w-3 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                    </div>
                    {/* Shadow chân sách */}
                    <div className="w-4/5 h-1.5 bg-slate-900/20 blur-xs rounded-full mt-1.5" />
                    {/* Nhãn tập nổi bật */}
                    <span className="mt-1 text-[10.5px] font-black text-amber-950 bg-amber-200/95 px-2.5 py-0.5 rounded-md shadow-2xs border border-amber-300 flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-600" />
                      <span>YCT 2</span>
                    </span>
                  </div>

                  {/* Bìa YCT 3 */}
                  <div className="relative flex flex-col items-center transition-all duration-300 transform rotate-3 group-hover:-translate-y-2 group-hover:rotate-4 group-hover:scale-105">
                    <div className="relative w-22 sm:w-26 md:w-28 aspect-[3/4] rounded-xl overflow-hidden shadow-lg shadow-amber-950/20 ring-1 ring-black/10 bg-white">
                      <img
                        src="/yct3.png"
                        alt="Giáo trình YCT Cấp 3"
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                      {/* Hiệu ứng gáy sách 3D */}
                      <div className="pointer-events-none absolute inset-y-0 left-0 w-2.5 bg-gradient-to-r from-black/25 via-white/10 to-transparent" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
                    </div>
                    {/* Shadow chân sách */}
                    <div className="w-4/5 h-1.5 bg-slate-900/15 blur-xs rounded-full mt-1.5" />
                    {/* Nhãn tập */}
                    <span className="mt-1 text-[10.5px] font-bold text-amber-950 bg-white/95 px-2 py-0.5 rounded-md shadow-2xs border border-amber-200/80">
                      YCT 3
                    </span>
                  </div>

                </div>
              </div>

              {/* Title & Hanzi */}
              <h2 className="font-display text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                Thiếu Nhi YCT
              </h2>
              <div className="font-hanzi text-xs font-bold text-amber-700 mt-1">
                少儿汉语考试 · Youth Chinese Test
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chương trình chuẩn quốc tế dành riêng cho trẻ em và học sinh tiểu học. Học qua hình ảnh minh họa sinh động, trò chơi ghép từ 60s, thẻ phát âm và trọn bộ PDF giáo trình.
              </p>

              {/* Highlights */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>YCT 1, 2 & 3 sẵn sàng học ngay ({YCT1_WORDS.length + YCT2_WORDS.length + YCT3_WORDS.length} từ cốt lõi)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trò chơi ghép từ 60s & Đố vui tích điểm sao</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Trọn bộ PDF Sách bài học & Bài tập YCT 1 đến 4</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="relative z-10 mt-6 pt-4 border-t border-amber-200/70 flex items-center justify-between">
              <span className="text-xs font-bold text-amber-700 group-hover:text-amber-800 transition-colors">
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
