import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, BookOpen, Coffee, Globe, Shield } from 'lucide-react';
import { BobaTeaModal } from './BobaTeaModal';

export const Footer: React.FC = () => {
  const [bobaOpen, setBobaOpen] = useState(false);

  return (
    <>
      <footer className="bg-brand-dark text-white/80 border-t border-brand-light/30 pt-12 pb-24 md:pb-8 mt-16 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            {/* Column 1: Brand & Motto */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex items-center justify-center flex-shrink-0 bg-white/10">
                  <img src="/gautruc.png" alt="Hanyu Daily" className="w-full h-full object-cover scale-[1.38]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Hanyu Daily</div>
                  <div className="text-xs text-white/60">泡菜学汉语 — Kim Chi học tiếng Trung</div>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Hệ thống học tiếng Trung New HSK 3.0 trực quan, giúp bạn chinh phục Hán tự, ngữ pháp và giao tiếp mỗi ngày một cách tự nhiên và bền bỉ.
              </p>
              <div className="text-xs text-white/80 space-y-1.5 pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-amber-300 font-bold">Hotline:</span>
                  <a href="tel:0328480588" className="hover:text-white transition-colors font-medium">0328 480 588</a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-300 font-bold">Zalo:</span>
                  <a href="https://zalo.me/0772550044" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">0772 550 044</a>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="font-hanzi text-sm text-amber-200 font-semibold mb-1">
                  千里之行，始于足下。
                </div>
                <div className="text-[11px] text-white/60 italic">
                  Hành trình vạn dặm bắt đầu từ một bước chân.
                </div>
              </div>
            </div>

            {/* Column 2: HSK Roadmap */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-gold" /> Lộ trình HSK 3.0
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li><Link to="/hsk/hsk1" className="hover:text-white transition-colors">HSK 1 — Sơ cấp khởi động</Link></li>
                <li><Link to="/hsk/hsk2" className="hover:text-white transition-colors">HSK 2 — Sơ cấp giao tiếp</Link></li>
                <li><Link to="/hsk/hsk3" className="hover:text-white transition-colors">HSK 3 — Trung cấp cơ sở</Link></li>
                <li><Link to="/hsk/hsk4" className="hover:text-white transition-colors">HSK 4 — Trung cấp nâng cao</Link></li>
                <li><Link to="/hsk/hsk5" className="hover:text-white transition-colors">HSK 5 & HSK 6 — Bậc thầy</Link></li>
                <li><Link to="/hsk79" className="hover:text-white transition-colors font-medium text-amber-200">HSK 7–9 Toàn diện (Mới)</Link></li>
              </ul>
            </div>

            {/* Column 3: Features */}
            <div>
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Tính năng học tập
              </h4>
              <ul className="space-y-2 text-xs text-white/70">
                <li><span className="cursor-pointer hover:text-white">Lật thẻ Flashcard thông minh</span></li>
                <li><span className="cursor-pointer hover:text-white">Tập viết chữ Hán nét thuận (米字格)</span></li>
                <li><span className="cursor-pointer hover:text-white">Tra cứu Thành ngữ (成语) & Định thức</span></li>
                <li><span className="cursor-pointer hover:text-white">Luyện nghe và hội thoại phản xạ</span></li>
                <li><span className="cursor-pointer hover:text-white">Luyện đề thi học bổng CSCA</span></li>
                <li><Link to="/xep-hang" className="hover:text-white">Bảng xếp hạng thi đua</Link></li>
              </ul>
            </div>

            {/* Column 4: Donate & Support */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-amber-400" /> Tiếp lửa cho cô
              </h4>
              <p className="text-xs text-white/70 leading-relaxed">
                Mỗi ly trà sữa của bạn là nguồn động viên to lớn để cô duy trì máy chủ và phát triển thêm bài học miễn phí!
              </p>
              <button
                onClick={() => setBobaOpen(true)}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-semibold rounded-2xl text-xs transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>🧋</span>
                <span>Mời cô một ly trà sữa</span>
              </button>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <div>
              © 2026 <span className="text-white/80 font-medium">Hanyu Daily</span> (泡菜学汉语). Mọi quyền được bảo lưu.
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dieu-khoan" className="hover:text-white">Điều khoản dịch vụ</Link>
              <Link to="/chinh-sach-bao-mat" className="hover:text-white">Chính sách bảo mật</Link>
              <span className="flex items-center gap-1 text-white/70">
                Làm với <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> dành cho người học tiếng Trung
              </span>
            </div>
          </div>
        </div>
      </footer>

      <BobaTeaModal isOpen={bobaOpen} onClose={() => setBobaOpen(false)} />
    </>
  );
};
