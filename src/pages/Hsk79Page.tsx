import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, Sparkles, BookOpen, Volume2, ArrowLeft, 
  Search, Compass, Feather, History, FileText, CheckCircle2 
} from 'lucide-react';
import { SAMPLE_CHENGYU } from '../data/chengyuData';
import { ChengyuItem } from '../types';
import { speakChinese } from '../lib/hsk';

export const Hsk79Page: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chengyu' | 'dingshi' | 'translate' | 'history'>('chengyu');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSpeak = (text: string) => {
    speakChinese(text);
  };

  const filteredChengyu = SAMPLE_CHENGYU.filter(item => 
    item.hanzi.includes(searchQuery) ||
    item.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.sinoVietnamese.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.figurativeMeaning.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-page pb-20">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#141A38] via-[#1E2749] to-[#2C5670] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link
            to="/hsk"
            className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white mb-4 px-3 py-1 rounded-full bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Trở về danh sách HSK
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chương Trình Chuyên Sâu HSK 7–9 Toàn Diện</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Khóa Ôn Luyện HSK 7–9 & Dịch Thuật
            </h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Dành cho học viên trình độ Cao cấp & Chuyên gia. Tinh hoa ngữ văn Trung Hoa với hơn 5.600 từ vựng học thuật, hệ thống Thành ngữ (成语), Định thức cố định (定式) và kỹ năng dịch thuật báo chí, kinh tế, xã hội.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/15">
            <button
              onClick={() => setActiveTab('chengyu')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'chengyu'
                  ? 'bg-gold text-ink shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Feather className="w-4 h-4" />
              <span>Thành ngữ 4 chữ (成语)</span>
            </button>
            <button
              onClick={() => setActiveTab('dingshi')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'dingshi'
                  ? 'bg-gold text-ink shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Cấu trúc Định thức (定式)</span>
            </button>
            <button
              onClick={() => setActiveTab('translate')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'translate'
                  ? 'bg-gold text-ink shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Luyện Dịch Thuật</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-gold text-ink shadow-md font-extrabold'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Lịch sử & Văn hóa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {activeTab === 'chengyu' && (
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white p-4 rounded-3xl border border-line shadow-card flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                <input
                  type="text"
                  placeholder="Tra cứu thành ngữ, âm Hán Việt hoặc ý nghĩa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-2xl border border-line bg-page/50 text-xs focus:outline-none focus:border-brand"
                />
              </div>
              <div className="text-xs text-muted font-medium">
                Hiển thị {filteredChengyu.length} thành ngữ tiêu biểu
              </div>
            </div>

            {/* Chengyu Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChengyu.map((cy) => (
                <div 
                  key={cy.id}
                  className="bg-white rounded-3xl p-6 border border-line hover:border-brand/40 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-hanzi text-3xl font-black text-[#141A38] tracking-widest">
                            {cy.hanzi}
                          </span>
                          <button
                            onClick={() => handleSpeak(cy.hanzi)}
                            className="p-2 rounded-xl text-brand bg-tint/60 hover:bg-tint transition-colors"
                            title="Nghe phát âm"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="text-xs font-mono font-bold text-brand mt-1">
                          {cy.pinyin} • <span className="font-sans font-semibold text-ink-2">Hán Việt: {cy.sinoVietnamese}</span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
                        HSK 7–9
                      </span>
                    </div>

                    {/* Meanings */}
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-ink-2 bg-cream p-3 rounded-2xl border border-line/60">
                        <strong className="text-ink">Nghĩa đen:</strong> {cy.literalMeaning}
                      </div>
                      <div className="text-sm font-semibold text-ink leading-relaxed">
                        <strong className="text-brand">Hàm nghĩa:</strong> {cy.figurativeMeaning}
                      </div>
                      {cy.origin && (
                        <div className="text-xs text-muted italic">
                          📚 Xuất xứ: {cy.origin}
                        </div>
                      )}
                    </div>

                    {/* Example sentence */}
                    <div className="p-4 bg-[#FAFBFD] rounded-2xl border border-line space-y-1.5">
                      <div className="text-[11px] font-bold text-muted uppercase tracking-wider">
                        Ví dụ thực tế:
                      </div>
                      <div className="font-hanzi text-sm text-ink font-medium">
                        {cy.example.chinese}
                      </div>
                      <div className="text-xs font-mono text-brand">
                        {cy.example.pinyin}
                      </div>
                      <div className="text-xs text-ink-2">
                        {cy.example.vietnamese}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'dingshi' && (
          <div className="bg-white p-8 rounded-3xl border border-line shadow-card text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-tint rounded-3xl flex items-center justify-center text-3xl">
              📑
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">
              Hệ Thống Định Thức Cố Định (定式)
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 max-w-xl mx-auto leading-relaxed">
              Các cụm cấu trúc ngữ pháp cố định thường xuất hiện trong đề thi đọc hiểu và bài luận HSK 7-9 (ví dụ: 不仅...反而..., 所谓...无非是..., 鉴于...特此...).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left pt-4">
              <div className="p-4 rounded-2xl bg-page border border-line">
                <div className="font-hanzi font-bold text-ink">鉴于……，特此……</div>
                <div className="text-xs text-brand font-mono">jiànyú..., tètǐ...</div>
                <div className="text-xs text-ink-2 mt-1">Xét thấy / Căn cứ vào..., nay đặc biệt...</div>
              </div>
              <div className="p-4 rounded-2xl bg-page border border-line">
                <div className="font-hanzi font-bold text-ink">与其说……，不如说……</div>
                <div className="text-xs text-brand font-mono">yǔqí shuō..., bùrú shuō...</div>
                <div className="text-xs text-ink-2 mt-1">Nói là A thì đúng hơn là nói B...</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'translate' && (
          <div className="bg-white p-8 rounded-3xl border border-line shadow-card text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-tint rounded-3xl flex items-center justify-center text-3xl">
              🔄
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">
              Luyện Biên Dịch Báo Chí & Học Thuật
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 max-w-xl mx-auto leading-relaxed">
              Rèn luyện kỹ năng dịch song ngữ Trung - Việt theo phương châm "Tín - Đạt - Nhã", bao quát các chủ đề kinh tế vĩ mô, công nghệ, ngoại giao và đời sống xã hội.
            </p>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white p-8 rounded-3xl border border-line shadow-card text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-tint rounded-3xl flex items-center justify-center text-3xl">
              🏛️
            </div>
            <h3 className="font-display text-2xl font-bold text-ink">
              Chuyên Khảo Lịch Sử & Văn Hóa Trung Hoa
            </h3>
            <p className="text-xs sm:text-sm text-ink-2 max-w-xl mx-auto leading-relaxed">
              Cung cấp bối cảnh lịch sử, triết học cổ đại (Nho giáo, Đạo giáo) và phong tục tập quán giúp bạn hiểu trọn vẹn tầng sâu ý nghĩa của ngôn ngữ.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
