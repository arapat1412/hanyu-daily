import React from 'react';
import { X } from 'lucide-react';
import type { VocabularyWord } from '../types';
import { useModalFocus } from './HskLearning';
import { SentenceScramblePractice } from './SentenceScramblePractice';

interface SentenceScrambleModalProps {
  isOpen: boolean;
  onClose: () => void;
  words: VocabularyWord[];
  title?: string;
}

export const SentenceScrambleModal: React.FC<SentenceScrambleModalProps> = ({
  isOpen,
  onClose,
  words,
  title = 'Sắp xếp câu tiếng Trung',
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
        className="max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl outline-none pb-[calc(env(safe-area-inset-bottom,0px)+12px)] flex flex-col border border-line"
      >
        <div className="flex items-center justify-between border-b border-line bg-cream/70 px-5 py-4 sm:px-6 shrink-0">
          <div>
            <h2 className="font-bold text-ink text-lg sm:text-xl">{title}</h2>
            <p className="text-xs text-muted">
              Lắp ghép các mảnh từ theo đúng trật tự ngữ pháp
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng cửa sổ"
            className="rounded-full p-2 text-muted hover:bg-slate-200/60 hover:text-ink transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          <SentenceScramblePractice
            words={words}
            onExit={onClose}
          />
        </div>
      </div>
    </div>
  );
};
