import React, { useState } from 'react';
import { X, Heart, Copy, Check, Sparkles, QrCode } from 'lucide-react';

interface BobaTeaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BobaTeaModal: React.FC<BobaTeaModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = (text = '0328480588') => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden border border-line animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header decoration */}
        <div className="bg-gradient-to-r from-[#5C3E0A] via-[#8A5F18] to-brand p-5 sm:p-6 text-white text-center relative shrink-0">
          <button 
            onClick={onClose}
            aria-label="Đóng"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/15 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 mx-auto mb-2.5 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-inner">
            🧋
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 tracking-wide">
            Mời cô giáo một ly trà sữa
          </h3>
          <p className="text-white/85 text-xs">
            Tiếp thêm năng lượng cho hành trình học tiếng Trung mỗi ngày
          </p>
        </div>

        {/* Body content (scrollable) */}
        <div className="p-5 sm:p-6 space-y-4 overflow-y-auto scrollbar-thin">
          <p className="text-ink-2 text-[13px] sm:text-sm leading-relaxed bg-[#FBF9F5] p-3.5 rounded-2xl border border-[#EEE3D2]">
            Nếu <span className="font-semibold text-brand">Hanyu Daily</span> giúp ích cho việc học của bạn, bạn có thể mời cô một ly trà sữa để tiếp thêm động lực duy trì website và cập nhật thêm nhiều nội dung mới nhé 💙
          </p>

          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE3] rounded-2xl border border-[#E8DFD0] shadow-xs">
            <div className="relative group overflow-hidden rounded-2xl border-2 border-white shadow-md bg-white p-2.5">
              <img
                src="/qr.png"
                alt="Mã VietQR MB Bank - Nguyễn Thị Kim Chi"
                className="w-52 sm:w-60 h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
            <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-[#8A6A1E]">
              <QrCode className="w-3.5 h-3.5 text-brand" />
              <span>Quét mã VietQR chuyển khoản nhanh</span>
            </div>
          </div>

          {/* Bank Info Card */}
          <div className="bg-cream rounded-2xl p-4 border border-line/80 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-muted font-medium">
              <span>NGÂN HÀNG QUÂN ĐỘI (MB BANK)</span>
              <span className="flex items-center gap-1 text-gold font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Ủng hộ cô
              </span>
            </div>
            
            <div className="flex items-center justify-between bg-white px-3.5 py-2.5 rounded-xl border border-line">
              <div>
                <div className="text-[11px] text-muted">Số tài khoản / SĐT:</div>
                <div className="font-mono text-base font-bold text-ink tracking-wider">0328 480 588</div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy('0328480588')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-brand/10 hover:bg-brand/15 text-brand rounded-xl text-xs font-semibold transition-colors active:scale-95"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Đã chép' : 'Sao chép'}
              </button>
            </div>

            <div className="text-xs text-ink-2 flex flex-col sm:flex-row sm:justify-between gap-1 pt-0.5">
              <span>Chủ TK: <strong className="text-ink">NGUYỄN THỊ KIM CHI</strong></span>
              <span>Nội dung: <strong className="text-brand">Tra sua + Tên bạn</strong></span>
            </div>
          </div>

          <p className="text-center text-[11.5px] italic text-[#8A6A1E] font-medium">
            Hoàn toàn tự nguyện nha • Chúc bạn học tiếng Trung thật vui và tiến bộ!
          </p>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 bg-brand hover:bg-brand-dark text-white rounded-2xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
          >
            <Heart className="w-4 h-4 text-red-300 fill-red-300" />
            Cảm ơn bạn rất nhiều!
          </button>
        </div>
      </div>
    </div>
  );
};
