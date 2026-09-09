import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, CheckCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';

export const CscaPage: React.FC = () => {
  const subjects = [
    { id: 'math', title: 'Toán học (数学)', questions: 40, time: '60 phút', icon: '📐' },
    { id: 'physics', title: 'Vật lý (物理)', questions: 35, time: '60 phút', icon: '⚡' },
    { id: 'chemistry', title: 'Hóa học (化学)', questions: 35, time: '60 phút', icon: '🧪' },
    { id: 'chinese', title: 'Tiếng Trung Chuyên sâu (中文)', questions: 50, time: '90 phút', icon: '📖' },
  ];

  return (
    <div className="min-h-screen bg-page pb-20">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#17303F] to-[#2C5670] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold-light text-xs font-semibold mb-3 border border-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kỳ thi Tiêu chuẩn Học bổng Chính phủ Trung Quốc</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white mb-3">
            Luyện Thi Học Bổng CSCA (CSC Exam)
          </h1>
          <p className="text-sm text-white/80 max-w-2xl leading-relaxed">
            Ngân hàng câu hỏi trắc nghiệm và đề thi mô phỏng chính xác chuẩn CSCA cho các môn Toán, Lý, Hóa bằng tiếng Trung và phần Ngôn ngữ chuyên ngành.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl p-6 border border-line shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-tint flex items-center justify-center text-2xl mb-4">
                  {s.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-ink mb-1">
                  {s.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-muted mt-2">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> {s.questions} câu
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand" /> {s.time}
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full py-2.5 rounded-2xl bg-tint hover:bg-brand hover:text-white text-brand font-bold text-xs transition-colors flex items-center justify-center gap-2">
                <span>Vào thi thử</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
