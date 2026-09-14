import React from 'react';
import { X, Zap } from 'lucide-react';
import type { VocabularyWord } from '../types';
import { useModalFocus } from './HskLearning';
import { WordMatchGame } from './WordMatchGame';

interface WordMatchGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: VocabularyWord[];
  title?: string;
  onComplete?: (stats: { matchedPairs: number; points: number; maxStreak: number }) => void;
  recordVocabularyProgress?: boolean;
}

export const WordMatchGameModal: React.FC<WordMatchGameModalProps> = ({
  isOpen,
  onClose,
  words,
  title = 'Nối từ phản xạ 30 giây',
  onComplete,
  recordVocabularyProgress = true,
}) => {
  const ref = useModalFocus(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm animate-fadeIn">
      <div
        ref={ref}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[94dvh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl outline-none pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex flex-col border border-line"
      >
        <div className="flex items-center justify-between border-b border-line bg-cream/70 px-5 py-4 sm:px-6 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <Zap className="h-5 w-5 fill-white" />
            </div>
            <div>
              <h2 className="font-bold text-ink text-lg sm:text-xl">{title}</h2>
              <p className="text-xs text-muted">
                Ghép nhanh chữ Hán và nghĩa tương ứng trong 30 giây
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng trò chơi"
            className="rounded-full p-2 text-muted hover:bg-slate-200/60 hover:text-ink transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <WordMatchGame
            words={words}
            onComplete={onComplete}
            onExit={onClose}
            recordVocabularyProgress={recordVocabularyProgress}
          />
        </div>
      </div>
    </div>
  );
};
