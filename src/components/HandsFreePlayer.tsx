import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize2,
  Minimize2,
  X,
  Volume2,
  Repeat,
  Shuffle,
  List,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { useHandsFreePlayer, type PlaybackSpeed, type IntervalDelay, type PlaybackMode } from '../lib/hands-free-context';
import { speakChinese } from '../lib/hsk';

export const HandsFreePlayer: React.FC = () => {
  const {
    isOpen,
    isExpanded,
    isPlaying,
    title,
    words,
    currentIndex,
    currentWord,
    mode,
    speed,
    intervalDelay,
    isLoop,
    isShuffle,
    step,
    hasVietnameseVoice,
    togglePlay,
    nextWord,
    prevWord,
    jumpToWord,
    setSpeed,
    setIntervalDelay,
    setMode,
    toggleLoop,
    toggleShuffle,
    openExpanded,
    closeExpanded,
    closePlayer,
  } = useHandsFreePlayer();

  const [showPlaylist, setShowPlaylist] = useState(false);

  if (!isOpen || !currentWord) {
    return null;
  }

  // Helper text for current playback step
  const getStepStatusText = () => {
    switch (step) {
      case 'speaking_zh':
        return 'Đang phát tiếng Trung 🔊';
      case 'pause_zh':
        return 'Khoảng nghỉ nhớ nghĩa 💭';
      case 'speaking_vi':
        return 'Đang đọc nghĩa tiếng Việt 🇻🇳';
      case 'pause_next':
        return 'Chuyển sang từ tiếp theo ⏳';
      default:
        return isPlaying ? 'Đang phát...' : 'Tạm dừng';
    }
  };

  // 1. MINI-PLAYER BAR (Floating above bottom navigation)
  if (!isExpanded) {
    return (
      <aside
        aria-label="Trình phát âm thanh rảnh tay"
        className="fixed bottom-18 md:bottom-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-xl bg-[#17303F]/95 text-white backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/15 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 flex items-center justify-between gap-2 sm:gap-3 select-none animate-in slide-in-from-bottom-4 duration-200"
      >
        {/* Left: Word details (clickable to open full view) */}
        <div
          onClick={openExpanded}
          className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer group pr-1"
          title="Bấm để mở rộng màn hình học chữ lớn"
        >
          {/* Animated soundwave / indicator */}
          <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            {isPlaying ? (
              <span className="flex items-end justify-center gap-0.5 h-3.5 w-3.5">
                <span className="w-0.5 bg-amber-300 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-0.5 bg-amber-300 rounded-full animate-[pulse_0.5s_ease-in-out_infinite] h-2" />
                <span className="w-0.5 bg-amber-300 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-3.5" />
              </span>
            ) : (
              <Volume2 className="w-4 h-4 text-white/60" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="font-hanzi text-lg sm:text-xl font-black text-white group-hover:text-amber-300 transition-colors truncate">
                {currentWord.hanzi}
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold text-amber-400 truncate">
                {currentWord.pinyin}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-white/75 truncate leading-tight">
              {currentWord.meaning || 'Chưa có nghĩa'}
            </p>
          </div>

          {/* Word Index Pill */}
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-lg bg-white/10 text-[10.5px] font-mono font-medium text-white/70 shrink-0">
            {currentIndex + 1}/{words.length}
          </span>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Prev Word */}
          <button
            type="button"
            onClick={prevWord}
            aria-label="Từ trước"
            className="p-1.5 sm:p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Play / Pause button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Tạm dừng' : 'Phát tiếp'}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-stone-900 shadow-md active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5 fill-stone-900 stroke-none" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-stone-900 stroke-none ml-0.5" />
            )}
          </button>

          {/* Next Word */}
          <button
            type="button"
            onClick={nextWord}
            aria-label="Từ tiếp theo"
            className="p-1.5 sm:p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          {/* Expand Button */}
          <button
            type="button"
            onClick={openExpanded}
            aria-label="Xem toàn màn hình"
            className="p-1.5 sm:p-2 text-white/70 hover:text-white rounded-xl hover:bg-white/10 active:scale-90 transition-all cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Close Button */}
          <button
            type="button"
            onClick={closePlayer}
            aria-label="Đóng trình phát"
            className="p-1.5 sm:p-2 text-white/50 hover:text-white rounded-xl hover:bg-white/10 active:scale-90 transition-all cursor-pointer ml-0.5"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </aside>
    );
  }

  // 2. EXPANDED VIEW (Focus Modal with Giant Hanzi & Full Controls)
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Trình phát âm thanh rảnh tay chế độ tập trung"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div
        className="relative w-full max-w-lg bg-gradient-to-b from-[#1E3A4C] via-[#17303F] to-[#0F202B] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5 shrink-0">
          <div className="min-w-0 pr-2">
            <h3 className="font-bold text-sm text-white truncate">{title}</h3>
            <p className="text-[11px] text-amber-300 font-mono">
              Từ {currentIndex + 1} / {words.length} từ
            </p>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {/* Toggle Playlist Drawer */}
            <button
              type="button"
              onClick={() => setShowPlaylist((prev) => !prev)}
              aria-label="Danh sách bài học"
              className={`p-2 rounded-xl border transition-colors ${
                showPlaylist
                  ? 'bg-amber-400 text-stone-900 border-amber-300'
                  : 'bg-white/10 text-white/80 border-white/10 hover:bg-white/15'
              }`}
              title="Danh sách từ vựng"
            >
              <List className="w-4 h-4" />
            </button>

            {/* Minimize */}
            <button
              type="button"
              onClick={closeExpanded}
              aria-label="Thu nhỏ"
              className="p-2 text-white/70 hover:text-white rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              title="Thu nhỏ thành thanh nổi"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={closePlayer}
              aria-label="Đóng"
              className="p-2 text-white/70 hover:text-white rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              title="Dừng và đóng"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Center Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col items-center justify-center text-center space-y-4 momentum-scroll">
          {/* Playlist Drawer (if open) */}
          {showPlaylist ? (
            <div className="w-full space-y-2 text-left animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
                  Danh sách từ trong bài ({words.length})
                </span>
                <button
                  onClick={() => setShowPlaylist(false)}
                  className="text-xs text-amber-300 hover:underline flex items-center gap-1"
                >
                  <ChevronDown className="w-3.5 h-3.5" /> Thu lại
                </button>
              </div>
              <div className="space-y-1.5 max-h-72 overflow-y-auto pr-1">
                {words.map((w, idx) => {
                  const isSelected = idx === currentIndex;
                  return (
                    <div
                      key={w.id || idx}
                      onClick={() => {
                        jumpToWord(idx);
                        setShowPlaylist(false);
                      }}
                      className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-amber-400 text-stone-900 font-bold'
                          : 'bg-white/5 hover:bg-white/10 text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-mono text-xs opacity-70 w-5 text-right shrink-0">
                          {idx + 1}
                        </span>
                        <span className="font-hanzi text-lg">{w.hanzi}</span>
                        <span className={`font-mono text-xs ${isSelected ? 'text-stone-800' : 'text-amber-300'}`}>
                          {w.pinyin}
                        </span>
                        <span className="text-xs truncate opacity-80">
                          {w.meaning}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-900 text-amber-300 font-bold shrink-0">
                          Đang nghe
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <>
              {/* Level Tag & Status */}
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-semibold text-stone-300 uppercase tracking-wider border border-white/10">
                  {currentWord.hskLevel ? currentWord.hskLevel.toUpperCase() : 'HSK'}
                </span>
                <span className="text-xs text-amber-300 font-medium animate-pulse">
                  {getStepStatusText()}
                </span>
              </div>

              {/* Giant Hanzi */}
              <div className="relative group select-all my-2">
                <h1 className="font-hanzi text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-wider drop-shadow-md">
                  {currentWord.hanzi}
                </h1>
              </div>

              {/* Pinyin */}
              <div className="font-mono text-2xl sm:text-3xl font-bold text-amber-400 tracking-wide">
                {currentWord.pinyin}
              </div>

              {/* Sino-Vietnamese (Âm Hán Việt) */}
              {currentWord.sinoVietnamese && (
                <div className="text-xs font-semibold text-white/70 uppercase tracking-widest">
                  Hán Việt: <span className="text-white">{currentWord.sinoVietnamese}</span>
                </div>
              )}

              {/* Vietnamese Meaning */}
              <div className="text-lg sm:text-xl font-bold text-white max-w-md px-2 leading-snug">
                {currentWord.meaning || 'Chưa có nghĩa'}
              </div>

              {/* Example Sentence (if available) */}
              {currentWord.exampleSentence && (
                <div className="w-full mt-3 p-3.5 rounded-2xl bg-white/8 border border-white/10 text-left">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-hanzi text-base font-bold text-white">
                      {currentWord.exampleSentence.chinese}
                    </p>
                    <button
                      type="button"
                      onClick={() => speakChinese(currentWord.exampleSentence!.chinese)}
                      className="p-1 rounded-lg hover:bg-white/15 text-amber-300 transition-colors shrink-0"
                      title="Nghe câu ví dụ"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="font-mono text-xs text-amber-300/90 mt-0.5">
                    {currentWord.exampleSentence.pinyin}
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    {currentWord.exampleSentence.vietnamese}
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer: Controls & Settings */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-white/5 shrink-0 space-y-3.5">
          {/* Primary Controls: Shuffle, Prev, Play/Pause, Next, Loop */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Shuffle */}
            <button
              type="button"
              onClick={toggleShuffle}
              aria-label="Xáo trộn ngẫu nhiên"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isShuffle
                  ? 'bg-amber-400 text-stone-900 border-amber-300 font-bold'
                  : 'text-white/60 hover:text-white border-transparent hover:bg-white/10'
              }`}
              title={isShuffle ? 'Đang bật xáo trộn' : 'Bật xáo trộn ngẫu nhiên'}
            >
              <Shuffle className="w-4 h-4" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prevWord}
              aria-label="Từ trước"
              className="p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Main Play / Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Tạm dừng' : 'Phát'}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-200 hover:scale-105 active:scale-95 text-stone-900 shadow-xl transition-all flex items-center justify-center cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-stone-900 stroke-none" />
              ) : (
                <Play className="w-6 h-6 fill-stone-900 stroke-none ml-1" />
              )}
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={nextWord}
              aria-label="Từ sau"
              className="p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all cursor-pointer"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Loop */}
            <button
              type="button"
              onClick={toggleLoop}
              aria-label="Lặp lại danh sách"
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                isLoop
                  ? 'bg-amber-400 text-stone-900 border-amber-300 font-bold'
                  : 'text-white/60 hover:text-white border-transparent hover:bg-white/10'
              }`}
              title={isLoop ? 'Đang lặp lại toàn bộ' : 'Tắt lặp lại'}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Secondary Settings: Mode, Speed, Delay */}
          <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            {/* Playback Mode */}
            <div className="flex items-center gap-1 bg-white/8 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setMode('zh_vi')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  mode === 'zh_vi'
                    ? 'bg-amber-400 text-stone-900 shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Phát tiếng Trung rồi đọc nghĩa tiếng Việt"
              >
                Trung - Việt
              </button>
              <button
                type="button"
                onClick={() => setMode('zh_only')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all ${
                  mode === 'zh_only'
                    ? 'bg-amber-400 text-stone-900 shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
                title="Chỉ phát âm tiếng Trung (lặp lại 2 lần)"
              >
                Chỉ tiếng Trung
              </button>
            </div>

            {/* Speed Pills */}
            <div className="flex items-center gap-1 bg-white/8 p-1 rounded-xl border border-white/10">
              {([0.75, 0.9, 1.0] as PlaybackSpeed[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSpeed(s)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    speed === s
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>

            {/* Delay Pills */}
            <div className="flex items-center gap-1 bg-white/8 p-1 rounded-xl border border-white/10">
              <span className="text-[10px] text-white/50 pl-1.5 font-medium">Nghỉ:</span>
              {([1000, 2000, 3000] as IntervalDelay[]).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setIntervalDelay(d)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    intervalDelay === d
                      ? 'bg-white text-stone-900 shadow-xs'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {d / 1000}s
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
