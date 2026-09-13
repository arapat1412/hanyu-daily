import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, BookOpen, PenTool, CheckCircle2, 
  ArrowRight, Search, Flame, Zap, Award
} from 'lucide-react';
import { HSK_LEVELS } from '../data/hskLevels';
import { HskCard } from '../components/HskCard';
import { SAMPLE_VOCABULARY } from '../data/sampleVocab';
import { FlashcardModal } from '../components/FlashcardModal';
import { HanziStrokeModal } from '../components/HanziStrokeModal';
import { VocabularyWord } from '../types';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [flashcardOpen, setFlashcardOpen] = useState(false);
  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);

  const allWords = Object.values(SAMPLE_VOCABULARY).flat();
  const searchResults = searchQuery.trim()
    ? allWords.filter(w => 
        w.hanzi.includes(searchQuery) ||
        w.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.meaning.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-page pb-14">
      {/* 1. Compact Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2C5670] to-[#17303F] text-white pt-6 pb-9 sm:pt-8 sm:pb-11">
        {/* Subtle Watermark */}
        <div className="absolute right-[-10px] bottom-[-25px] font-display text-[180px] font-black text-white/[0.03] select-none pointer-events-none">
          学
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-200 text-[11px] font-semibold mb-2.5 backdrop-blur-xs shadow-xs">
              <Sparkles className="w-3 h-3 text-gold" />
              <span>Chuẩn khung New HSK 3.0 & Ôn thi CSCA mới nhất</span>
            </div>

            {/* Headline */}
            <div className="font-display text-2xl sm:text-3xl lg:text-[34px] font-black tracking-tight leading-snug mb-2">
              泡菜学汉语 — Học Mỗi Ngày
            </div>
            
            <p className="text-xs sm:text-[13.5px] text-white/80 font-normal leading-relaxed mb-4 max-w-xl">
              Nền tảng học tiếng Trung trực tuyến tinh gọn dành cho người Việt. Bứt phá từ <strong className="text-white">HSK 1</strong> đến <strong className="text-white">HSK 7–9</strong> qua phương pháp ôn luyện phản xạ và hệ thống bài học chuẩn hóa.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Link
                to="/hsk/hsk1"
                className="px-4 py-2 rounded-xl bg-gold hover:bg-gold-dark text-ink font-bold text-xs shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
              >
                <span>Bắt đầu với HSK 1</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <button
                onClick={() => setFlashcardOpen(true)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 backdrop-blur-xs"
              >
                <span>⚡ Ôn Flashcard nhanh</span>
              </button>
            </div>

            {/* Quick Search Input */}
            <div className="relative max-w-lg">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/50" />
                <input
                  type="text"
                  placeholder="Tra cứu từ vựng tiếng Trung, pinyin hoặc nghĩa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 text-xs focus:outline-none focus:ring-1.5 focus:ring-gold/50 focus:bg-white/15 backdrop-blur-xs transition-all shadow-xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-white/60 hover:text-white"
                  >
                    Xóa
                  </button>
                )}
              </div>

              {/* Quick Search Dropdown */}
              {searchQuery.trim() && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-white text-ink rounded-2xl shadow-xl border border-line p-2 max-h-64 overflow-y-auto z-30 animate-fadeIn text-xs">
                  <div className="text-[10px] font-semibold text-muted px-2 py-1 uppercase tracking-wider">
                    Kết quả tìm kiếm ({searchResults.length})
                  </div>
                  {searchResults.length > 0 ? (
                    searchResults.map((word) => (
                      <div
                        key={word.id}
                        className="flex items-center justify-between p-2 hover:bg-cream rounded-xl cursor-pointer transition-colors"
                        onClick={() => {
                          setStrokeWord(word);
                          setSearchQuery('');
                        }}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-hanzi text-lg font-black text-brand">{word.hanzi}</span>
                          <div>
                            <span className="font-mono text-[11px] font-bold text-ink">{word.pinyin}</span>
                            <span className="text-[11px] text-ink-2 ml-1.5">— {word.meaning}</span>
                          </div>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-md bg-tint text-brand font-semibold">
                          Tập viết
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-muted text-center py-3">
                      Không tìm thấy từ vựng phù hợp với "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compact Daily Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="bg-white p-3.5 rounded-2xl border border-line shadow-xs hover:shadow-sm transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 text-xl shadow-inner flex-shrink-0">
              🔥
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-ink font-mono">5 Ngày</div>
              <div className="text-[11px] text-muted">Chuỗi học liên tiếp</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-line shadow-xs hover:shadow-sm transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl shadow-inner flex-shrink-0">
              ⚡
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-ink font-mono">120 XP</div>
              <div className="text-[11px] text-muted">Điểm kinh nghiệm</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-line shadow-xs hover:shadow-sm transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl shadow-inner flex-shrink-0">
              📚
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-ink font-mono">11.000</div>
              <div className="text-[11px] text-muted">Từ vựng HSK 3.0</div>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-line shadow-xs hover:shadow-sm transition-shadow flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-xl shadow-inner flex-shrink-0">
              🎯
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-ink font-mono">Top 8%</div>
              <div className="text-[11px] text-muted">Bảng xếp hạng tuần</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main HSK Roadmap Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-brand font-bold text-[11px] uppercase tracking-wider mb-0.5">
              <BookOpen className="w-3.5 h-3.5" /> Lộ trình bài bản
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
              Các Cấp Độ New HSK 3.0
            </h2>
          </div>
          <p className="text-xs text-ink-2 max-w-md">
            Học chuẩn theo từng cấp bậc từ Sơ cấp đến Bậc thầy, phân bổ từ vựng và ngữ pháp khoa học theo tiêu chuẩn HSK mới.
          </p>
        </div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {HSK_LEVELS.map((level) => (
            <HskCard key={level.id} level={level} />
          ))}
        </div>
      </section>

      {/* 4. Interactive Learning Tools Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-gradient-to-r from-[#2C5670]/10 via-cream to-[#D4A017]/10 rounded-3xl p-6 sm:p-7 border border-line">
          <div className="text-center max-w-xl mx-auto mb-7">
            <span className="px-2.5 py-0.5 rounded-full bg-brand/10 text-brand text-[11px] font-bold uppercase tracking-wider">
              Tính năng nổi bật
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-ink mt-1.5 mb-2">
              Phương Pháp Học Trực Quan & Ghi Nhớ Sâu
            </h2>
            <p className="text-xs text-ink-2">
              Kết hợp công nghệ hiện đại giúp học tiếng Trung nhẹ nhàng, viết chữ Hán đúng thứ tự nét và phản xạ tự nhiên.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {/* Tool 1: Flashcard SRS */}
            <div className="bg-white p-5 rounded-2xl border border-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl mb-3.5 shadow-2xs">
                  🃏
                </div>
                <h3 className="font-display text-base font-bold text-ink mb-1.5">
                  Flashcard Lật Thẻ Thông Minh
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed mb-4">
                  Thuật toán lặp lại ngắt quãng (Spaced Repetition) ưu tiên từ vựng hay quên, ghi nhớ mặt chữ và pinyin cực nhanh.
                </p>
              </div>
              <button
                onClick={() => setFlashcardOpen(true)}
                className="w-full py-2.5 rounded-xl bg-tint text-brand hover:bg-brand hover:text-white font-bold text-xs transition-colors"
              >
                Thử lật thẻ ngay →
              </button>
            </div>

            {/* Tool 2: Hanzi Stroke Writer */}
            <div className="bg-white p-5 rounded-2xl border border-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-red-100 text-red-700 flex items-center justify-center text-xl mb-3.5 shadow-2xs">
                  ✍️
                </div>
                <h3 className="font-display text-base font-bold text-ink mb-1.5">
                  Tập Viết Chữ Hán Ô Kẻ Mễ
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed mb-4">
                  Mô phỏng sinh động từng nét bút thuận trên ô chữ Mễ (米字格), hỗ trợ chế độ tự viết và chấm điểm độ chính xác.
                </p>
              </div>
              <button
                onClick={() => setStrokeWord(SAMPLE_VOCABULARY.hsk1[0])}
                className="w-full py-2.5 rounded-xl bg-tint text-brand hover:bg-brand hover:text-white font-bold text-xs transition-colors"
              >
                Mở ô tập viết →
              </button>
            </div>

            {/* Tool 3: HSK 7-9 & CSCA */}
            <div className="bg-white p-5 rounded-2xl border border-line shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl mb-3.5 shadow-2xs">
                  🏛️
                </div>
                <h3 className="font-display text-base font-bold text-ink mb-1.5">
                  Chuyên Đề Thành Ngữ & Định Thức
                </h3>
                <p className="text-xs text-ink-2 leading-relaxed mb-4">
                  Dành riêng cho ôn luyện HSK 7–9 và kỳ thi học bổng CSCA. Bồi dưỡng khả năng dịch thuật chuyên sâu và văn hóa lịch sử.
                </p>
              </div>
              <Link
                to="/hsk79"
                className="w-full py-2.5 rounded-xl bg-tint text-brand hover:bg-brand hover:text-white font-bold text-xs text-center transition-colors block"
              >
                Khám phá HSK 7–9 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <FlashcardModal
        isOpen={flashcardOpen}
        onClose={() => setFlashcardOpen(false)}
        words={SAMPLE_VOCABULARY.hsk1}
        title="Ôn tập Từ vựng HSK 1"
      />

      <HanziStrokeModal
        isOpen={!!strokeWord}
        onClose={() => setStrokeWord(null)}
        word={strokeWord}
      />
    </div>
  );
};
