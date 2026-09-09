import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { HskLevel } from '../types';
import { isVocabularyGroupLevel, useProgress } from '../lib/hsk';

interface HskCardProps {
  level: HskLevel;
}

export const HskCard: React.FC<HskCardProps> = ({ level }) => {
  const vocabularyGroups = isVocabularyGroupLevel(level.code);
  const progress = useProgress();
  const count = Object.entries(progress.lessons).filter(([id, entry]) => id.startsWith(`${level.code}-`) && entry.completed).length;
  const percent = Math.round(count / level.lessonsCount * 100);
  return (
    <div className="group relative bg-white rounded-2xl p-4 sm:p-5 border border-line hover:border-brand/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-0.5">
      {/* Top Tag & Level Badge */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div 
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-bold"
            style={{ 
              backgroundColor: level.badgeBg, 
              color: level.badgeColor,
              border: `1px solid ${level.badgeColor}33`
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: level.badgeColor }} />
            <span>{level.name}</span>
          </div>

          <span className="text-[10.5px] text-muted font-medium bg-track/60 px-2 py-0.5 rounded-full">
            {level.recommendedTime}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-1 group-hover:text-brand transition-colors">
          {level.title}
        </h3>
        <p className="text-[11.5px] text-ink-2/80 leading-relaxed mb-3 line-clamp-2">
          {level.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 bg-[#F9FBFC] rounded-xl border border-line/60 mb-3 text-center">
          <div>
            <div className="text-sm font-bold text-ink font-mono">{level.vocabCount}</div>
            <div className="text-[10px] text-muted font-medium">Từ vựng</div>
          </div>
          <div className="border-x border-line/70">
            <div className="text-sm font-bold text-ink font-mono">{level.grammarCount}</div>
            <div className="text-[10px] text-muted font-medium">Ngữ pháp</div>
          </div>
          <div>
            <div className="text-sm font-bold text-ink font-mono">{level.lessonsCount}</div>
            <div className="text-[10px] text-muted font-medium">{vocabularyGroups ? "Mục từ" : "Bài học"}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1 mb-3.5">
          <div className="flex items-center justify-between text-[10.5px] font-medium">
            <span className="text-ink-2 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Tiến độ học
            </span>
            <span className="text-brand font-bold">{percent}%</span>
          </div>
          <div className="w-full h-1.5 bg-track rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${percent}%`,
                backgroundColor: level.badgeColor,
              }}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 border-t border-line/60 flex items-center gap-1.5">
        <Link
          to={`/hsk/${level.code}/vocab`}
          className="flex-1 text-center py-1.5 px-2 rounded-xl text-[11.5px] font-semibold text-ink-2 bg-tint/60 hover:bg-tint hover:text-brand transition-colors border border-brand/10"
        >
          Từ vựng
        </Link>
        <Link
          to={`/hsk/${level.code}/grammar`}
          className="flex-1 text-center py-1.5 px-2 rounded-xl text-[11.5px] font-semibold text-ink-2 bg-cream hover:bg-[#EAF1F5] hover:text-brand transition-colors border border-line"
        >
          Ngữ pháp
        </Link>
        <Link
          to={`/hsk/${level.code}`}
          className="p-1.5 rounded-xl text-white transition-all shadow-xs hover:scale-105 active:scale-95 flex items-center justify-center"
          style={{ backgroundColor: level.badgeColor }}
          title="Vào học"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
