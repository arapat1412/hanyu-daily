import React, { useState, useCallback } from 'react';
import { Volume2, Sparkles } from 'lucide-react';
import { speakChinese } from '../lib/hsk';

interface Particle {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const PHRASES = [
  { chinese: '你好', pinyin: 'nǐ hǎo', vi: 'Xin chào bạn nhé!', icon: '👋' },
  { chinese: '加油', pinyin: 'jiā yóu', vi: 'Cố lên học tập nhé!', icon: '💪' },
  { chinese: '真棒', pinyin: 'zhēn bàng', vi: 'Bạn học giỏi quá đi!', icon: '⭐' },
  { chinese: '谢谢', pinyin: 'xiè xie', vi: 'Cảm ơn bạn nhiều nha!', icon: '❤️' },
  { chinese: '天天向上', pinyin: 'tiān tiān xiàng shàng', vi: 'Mỗi ngày một tiến bộ!', icon: '🚀' },
  { chinese: '我爱中文', pinyin: 'wǒ ài zhōng wén', vi: 'Tôi yêu tiếng Trung!', icon: '✨' },
  { chinese: '吃竹子', pinyin: 'chī zhú zi', vi: 'Ăn trúc no nê nè!', icon: '🎋' },
];

const EMOJIS = ['❤️', '✨', '🎋', '⭐', '🐼', '🌸'];

export const PandaWalking: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isHappy, setIsHappy] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  const currentPhrase = PHRASES[phraseIndex];

  const handleInteract = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();

    // 1. Phát âm chuẩn tiếng Trung
    setIsSpeaking(true);
    speakChinese(currentPhrase.chinese, () => setIsSpeaking(false));
    setTimeout(() => setIsSpeaking(false), 1200);

    // 2. Chuyển câu tiếp theo
    setPhraseIndex((prev) => (prev + 1) % PHRASES.length);

    // 3. Hiệu ứng nhảy vui sướng (Happy bounce)
    setIsHappy(true);
    setTimeout(() => setIsHappy(false), 600);

    // 4. Tăng lượt tương tác
    setClickCount((prev) => prev + 1);

    // 5. Bắn hạt cảm xúc bay lên (Particle burst)
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX + (Math.random() * 40 - 20),
      y: clickY + (Math.random() * 20 - 10),
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.find((np) => np.id === p.id)));
    }, 850);
  }, [currentPhrase]);

  return (
    <div 
      className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-20 select-none h-32 sm:h-36 flex items-end"
      aria-hidden="true"
    >
      {/* Khung di chuyển thong thả ngang qua màn hình */}
      <div 
        className="animate-panda-walk inline-flex items-end pointer-events-auto cursor-pointer group relative pb-1 sm:pb-1.5"
        onClick={handleInteract}
        title="Nhấn vào mình để nghe phát âm & đổi câu khác nhé! 🐼"
      >
        {/* Hạt cảm xúc bay lên khi click */}
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute pointer-events-none text-base z-30 animate-float-up-fade"
            style={{ left: `${p.x}px`, top: `${p.y}px` }}
          >
            {p.emoji}
          </span>
        ))}

        {/* Hộp thoại tương tác thông minh (chỉ hiển thị khi hover hoặc click, không có bóng mờ đen) */}
        <div className={`absolute bottom-full mb-1 left-1/2 -translate-x-1/2 transition-all duration-300 z-30 pointer-events-none whitespace-nowrap ${
          (isHappy || isSpeaking)
            ? 'scale-105 opacity-100 -translate-y-1'
            : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-1'
        }`}>
          <div className="bg-white px-3.5 py-1.5 rounded-2xl border border-pink-300 text-slate-800 text-xs flex items-center gap-2">
            <span className="text-sm">{currentPhrase.icon}</span>
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-black text-rose-600 text-sm">{currentPhrase.chinese}</span>
                <span className="font-mono text-[10px] text-slate-500 font-semibold">{currentPhrase.pinyin}</span>
                <Volume2 className={`w-3 h-3 text-sky-600 ${isSpeaking ? 'animate-bounce text-pink-500' : ''}`} />
              </div>
              <span className="text-[10px] text-slate-600 font-medium mt-0.5">{currentPhrase.vi}</span>
            </div>
            {clickCount > 0 && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-pink-100 text-pink-600 ml-1">
                ❤️ {clickCount}
              </span>
            )}
          </div>
          {/* Mũi tên chỉ xuống dưới không bóng */}
          <div className="w-2.5 h-2.5 bg-white border-r border-b border-pink-300 rotate-45 mx-auto -mt-1.5" />
        </div>

        {/* Đồ họa Vector SVG Gấu trúc to tròn đáng yêu kéo xe chữ */}
        <svg
          viewBox="0 -6 270 80"
          className={`w-[270px] sm:w-[300px] h-[78px] sm:h-[86px] overflow-visible transition-transform duration-300 ${
            isHappy ? 'scale-105 -translate-y-1' : ''
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ======================================================== */}
          {/* 1. XE KÉO CHỮ TIẾNG TRUNG (Giữ nguyên khung gốc ban đầu) */}
          {/* ======================================================== */}
          <g className="animate-cart-bounce">

            {/* Nhánh lá trúc xanh may mắn 🎋 */}
            <path
              d="M 28 26 C 24 16 16 14 12 16 C 14 22 22 24 28 26 Z"
              fill="#22C55E"
            />
            <path
              d="M 29 24 C 32 14 40 12 43 14 C 40 20 33 22 29 24 Z"
              fill="#16A34A"
            />
            <line x1="28" y1="26" x2="24" y2="34" stroke="#15803D" strokeWidth="1.5" />

            {/* Thùng xe kéo viền hồng đào */}
            <rect
              x="18"
              y="23"
              width="100"
              height="38"
              rx="10"
              fill="#FFF1F2"
              stroke="#FDA4AF"
              strokeWidth="2"
            />
            {/* Nền trong thùng xe */}
            <rect
              x="22"
              y="27"
              width="92"
              height="30"
              rx="7"
              fill="white"
              fillOpacity="0.88"
              stroke="#FECDD3"
              strokeWidth="1"
            />

            {/* CHỮ TIẾNG TRUNG THAY ĐỔI ĐỘNG KHI TƯƠNG TÁC */}
            <text
              x="68"
              y="45"
              textAnchor="middle"
              fontFamily="'Noto Serif SC', serif"
              fontWeight="900"
              fontSize={currentPhrase.chinese.length > 3 ? "16" : "21"}
              fill="#E11D48"
              className="select-none tracking-wider transition-all duration-300"
            >
              {currentPhrase.chinese}
            </text>

            {/* PHIÊN ÂM PINYIN */}
            <text
              x="68"
              y="54"
              textAnchor="middle"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize={currentPhrase.pinyin.length > 12 ? "7" : "8.5"}
              fill="#BE123C"
              letterSpacing="0.5px"
              className="select-none"
            >
              {currentPhrase.pinyin}
            </text>

            {/* Trái tim trang trí nhỏ ở góc xe */}
            <path
              d="M 103 31 C 103 29 101 28 99.5 29 C 98 28 96 29 96 31 C 96 33.5 99.5 35.5 99.5 35.5 C 99.5 35.5 103 33.5 103 31 Z"
              fill="#F43F5E"
            />

            {/* Bánh xe trái quay tròn */}
            <g className="animate-wheel-spin" style={{ transformOrigin: '38px 63px' }}>
              <circle cx="38" cy="63" r="9" fill="#1E293B" />
              <circle cx="38" cy="63" r="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="38" cy="63" r="2.5" fill="#F43F5E" />
              <line x1="38" y1="57" x2="38" y2="69" stroke="#94A3B8" strokeWidth="1" />
              <line x1="32" y1="63" x2="44" y2="63" stroke="#94A3B8" strokeWidth="1" />
            </g>

            {/* Bánh xe phải quay tròn */}
            <g className="animate-wheel-spin" style={{ transformOrigin: '98px 63px' }}>
              <circle cx="98" cy="63" r="9" fill="#1E293B" />
              <circle cx="98" cy="63" r="6" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle cx="98" cy="63" r="2.5" fill="#F43F5E" />
              <line x1="98" y1="57" x2="98" y2="69" stroke="#94A3B8" strokeWidth="1" />
              <line x1="92" y1="63" x2="104" y2="63" stroke="#94A3B8" strokeWidth="1" />
            </g>
          </g>

          {/* ======================================================== */}
          {/* 2. DÂY KÉO XE NỐI VÀO TAY GẤU TRÚC */}
          {/* ======================================================== */}
          <path
            d="M 118 42 Q 140 50 161 38"
            stroke="#F43F5E"
            strokeWidth="2.5"
            strokeDasharray="4 2"
            strokeLinecap="round"
          />
          <circle cx="140" cy="46" r="2.5" fill="#FB7185" />

          {/* ======================================================== */}
          {/* 3. CHÚ GẤU TRÚC ĐÁNG YÊU (To hơn, mập mạp và rõ nét) */}
          {/* ======================================================== */}
          <g transform="translate(216, 67) scale(1.22) translate(-216, -67)">
            <g className="animate-panda-waddle" style={{ transformOrigin: '216px 50px' }}>
              {/* Chân sau */}
              <g className="animate-panda-leg-l" style={{ transformOrigin: '194px 54px' }}>
                <rect x="189" y="52" width="11" height="17" rx="5.5" fill="#1E293B" />
                <ellipse cx="194.5" cy="67" rx="5.5" ry="3" fill="#0F172A" />
              </g>

              {/* Chân trước */}
              <g className="animate-panda-leg-r" style={{ transformOrigin: '222px 54px' }}>
                <rect x="217" y="52" width="11" height="17" rx="5.5" fill="#1E293B" />
                <ellipse cx="222.5" cy="67" rx="5.5" ry="3" fill="#0F172A" />
              </g>

              {/* Đuôi gấu */}
              <circle cx="184" cy="46" r="5" fill="#1E293B" />

              {/* Thân hình mũm mĩm (trắng thuần khiết, không viền) */}
              <ellipse cx="204" cy="46" rx="21" ry="17" fill="white" />
              {/* Mảng áo vai đen */}
              <path
                d="M 188 36 C 184 49 224 49 220 36 C 214 33 194 33 188 36 Z"
                fill="#1E293B"
              />

              {/* Cánh tay kéo dây thừng */}
              <path
                d="M 200 40 Q 182 38 171 43"
                stroke="#1E293B"
                strokeWidth="6.5"
                strokeLinecap="round"
              />
              {/* Bàn tay gấu nắm dây */}
              <circle cx="171" cy="43" r="4.5" fill="#1E293B" />

              {/* Đầu gấu trúc */}
              {/* Tai trái */}
              <circle cx="210" cy="16" r="7" fill="#1E293B" />
              <circle cx="210" cy="16" r="3.5" fill="#FDA4AF" opacity="0.8" />

              {/* Tai phải */}
              <circle cx="230" cy="17" r="7" fill="#1E293B" />
              <circle cx="230" cy="17" r="3.5" fill="#FDA4AF" opacity="0.8" />

              {/* Khuôn mặt tròn trĩnh (trắng thuần khiết, không viền) */}
              <circle cx="221" cy="28" r="14.5" fill="white" />

              {/* Vết đen mắt gấu trúc */}
              <ellipse
                cx="216"
                cy="27"
                rx="4.5"
                ry="5.5"
                transform="rotate(-15 216 27)"
                fill="#1E293B"
              />
              <ellipse
                cx="228"
                cy="28"
                rx="4.5"
                ry="5.5"
                transform="rotate(15 228 28)"
                fill="#1E293B"
              />

              {/* Mắt long lanh */}
              <circle cx="217" cy="26" r="1.5" fill="white" />
              <circle cx="229" cy="27" r="1.5" fill="white" />
              <circle cx="215.5" cy="28" r="0.7" fill="white" />
              <circle cx="227.5" cy="29" r="0.7" fill="white" />

              {/* Má hồng phúng phính */}
              <circle cx="212" cy="33" r="3.2" fill="#FDA4AF" opacity={isHappy ? "0.95" : "0.7"} />
              <circle cx="232" cy="34" r="3.2" fill="#FDA4AF" opacity={isHappy ? "0.95" : "0.7"} />

              {/* Mũi đen nhỏ */}
              <ellipse cx="222" cy="32" rx="2.5" ry="1.8" fill="#1E293B" />

              {/* Nụ cười ngọt ngào */}
              <path
                d={isHappy ? "M 219 34 Q 222 38 225 34" : "M 220 34.5 Q 222 36.5 224 34.5"}
                stroke="#1E293B"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PandaWalking;
