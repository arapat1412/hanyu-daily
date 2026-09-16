import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Music,
  Sparkles,
  Search,
  Play,
  Clock,
  Mic2,
  Compass,
  Headphones,
  BookOpen,
  Layers,
  Heart,
  Flame,
} from 'lucide-react';
import { getAllSongs } from '../data/songsCatalog';
import { getOptimizedSongImage, getSongThumbnail } from '../lib/song-media';

export const SongsHubPage: React.FC = () => {
  const songs = useMemo(() => getAllSongs(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả thể loại' },
    { id: 'thieu-nhi', label: 'Thiếu nhi & Vui nhộn (YCT)' },
    { id: 'kinh-dien', label: 'Nhạc phim & Kinh điển' },
    { id: 'hot-douyin', label: 'Hot Douyin & Giới trẻ' },
    { id: 'pop-ballad', label: 'Pop & Trữ tình sâu lắng' },
  ];

  const difficulties = [
    { id: 'all', label: 'Mọi cấp độ' },
    { id: 'Dễ', label: 'Cơ bản (HSK 1-2)' },
    { id: 'Trung bình', label: 'Trung cấp (HSK 3-4)' },
  ];

  const filteredSongs = useMemo(() => {
    return songs.filter((song) => {
      const matchCategory = selectedCategory === 'all' || song.category === selectedCategory;
      const matchDifficulty = selectedDifficulty === 'all' || song.difficulty === selectedDifficulty;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        song.titleZh.toLowerCase().includes(q) ||
        song.titlePy.toLowerCase().includes(q) ||
        song.titleVi.toLowerCase().includes(q) ||
        song.artist.toLowerCase().includes(q) ||
        song.description.toLowerCase().includes(q);

      return matchCategory && matchDifficulty && matchSearch;
    });
  }, [songs, selectedCategory, selectedDifficulty, searchQuery]);

  const featuredSong = useMemo(() => songs.find((s) => s.isFeatured) || songs[0], [songs]);

  return (
    <div className="min-h-screen bg-cream/70 pb-24 sm:pb-20 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-3.5 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800/80 mb-3">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
          <span>/</span>
          <span className="text-teal-900 font-bold">Mở rộng</span>
          <span>/</span>
          <span className="text-slate-500">Bài hát tiếng Trung</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-800 text-xs font-bold tracking-wide uppercase shadow-2xs mb-2">
              <Music className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
              <span>Góc Âm Nhạc & Lời Bài Hát · 听歌学汉语</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-2.5">
              <span>Học tiếng Trung qua Bài hát</span>
              <span className="text-xl sm:text-2xl">🎵</span>
            </h1>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Tắm mình trong những giai điệu Hoa ngữ ngọt ngào. Lời bài hát song ngữ Hán - Pinyin - Việt chạy theo nhịp điệu, bấm từng chữ nghe phát âm chuẩn và tích lũy từ vựng đời sống tự nhiên.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center">
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Kho nhạc</div>
              <div className="text-sm sm:text-lg font-black text-pink-600">{songs.length} bài hát</div>
            </div>
            <div className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center">
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Tính năng</div>
              <div className="text-sm sm:text-lg font-black text-teal-700">Karaoke & Từ vựng</div>
            </div>
          </div>
        </div>

        {/* ================= FEATURED SONG HERO BANNER ================= */}
        {featuredSong && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500/10 via-rose-50 to-amber-50/60 border border-pink-200/90 shadow-sm mb-8 sm:mb-10">
            {/* Background Decorative Graphic */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden sm:flex items-center justify-center font-hanzi text-[240px] font-black select-none text-pink-950">
              歌
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-5 sm:p-7 md:p-8 items-center">
              {/* Cover Image / Disc Art */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group w-40 xs:w-48 sm:w-56 md:w-60 aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white transform transition-transform duration-300 hover:scale-[1.03]">
                  <img
                    src={getOptimizedSongImage(featuredSong.coverImage)}
                    alt={featuredSong.titleVi}
                    className="w-full h-full object-cover"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-black text-pink-700 flex items-center gap-1 shadow-xs">
                    <Sparkles className="w-3 h-3 text-pink-500" />
                    <span>Nổi bật nhất</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                    <span className="text-xs font-bold truncate">{featuredSong.artist}</span>
                    <span className="text-[10.5px] bg-black/50 px-2 py-0.5 rounded-md font-mono">
                      {featuredSong.readingDuration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Information & Actions */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-800 text-[11px] font-bold border border-pink-200">
                      {featuredSong.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 text-[11px] font-bold border border-teal-200">
                      Trình độ: {featuredSong.hskLevel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 text-[11px] font-bold border border-amber-200">
                      {featuredSong.lineCount} câu hát kèm từ vựng
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                    {featuredSong.titleZh}
                  </h2>
                  <div className="text-sm sm:text-base font-bold text-pink-700 mt-0.5 font-sans">
                    {featuredSong.titlePy} · {featuredSong.titleVi}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Trình bày: <span className="text-slate-800 font-semibold">{featuredSong.artist}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {featuredSong.description}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to={`/am-nhac/${featuredSong.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-98 no-underline"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Bắt đầu nghe & học hát ngay</span>
                  </Link>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium px-3 py-2 bg-white/60 rounded-xl border border-slate-200/60">
                    <Headphones className="w-3.5 h-3.5 text-pink-600" />
                    <span>Lời chạy karaoke đồng bộ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SEARCH & CATEGORY FILTERS ================= */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm bài hát, ca sĩ, chữ Hán, Pinyin..."
              className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-500 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded-full hover:bg-slate-100"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Difficulty Chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 border-t border-slate-200/60">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Độ khó:
            </span>
            {difficulties.map((diff) => (
              <button
                key={diff.id}
                type="button"
                onClick={() => setSelectedDifficulty(diff.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedDifficulty === diff.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-200/80'
                }`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SONGS LIST GRID ================= */}
        {filteredSongs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-slate-300 p-8">
            <Music className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">Không tìm thấy bài hát phù hợp</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-sm mx-auto">
              Hãy thử tìm với từ khóa khác hoặc bấm nút "Tất cả thể loại" để khám phá thêm.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="mt-4 px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold rounded-xl transition-colors"
            >
              Xem lại tất cả bài hát
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredSongs.map((song) => (
              <Link
                key={song.id}
                to={`/am-nhac/${song.id}`}
                className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/80 hover:border-pink-300 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 no-underline text-inherit"
              >
                {/* Card Top / Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={getSongThumbnail(song.coverImage)}
                    alt={song.titleVi}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-xs text-white text-[10.5px] font-bold">
                      {song.categoryLabel.split('·')[0].trim()}
                    </span>
                  </div>

                  {/* Level Pill */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="px-2 py-0.5 rounded-lg bg-pink-500 text-white text-[10.5px] font-black shadow-xs">
                      {song.hskLevel}
                    </span>
                  </div>

                  {/* Play Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-2xs">
                    <div className="w-12 h-12 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration on bottom right */}
                  <div className="absolute bottom-2.5 right-2.5 text-[10.5px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{song.readingDuration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                      {song.titleZh}
                    </h3>
                    <div className="text-xs font-bold text-pink-700 mt-0.5 line-clamp-1">
                      {song.titlePy}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5 line-clamp-1">
                      {song.titleVi}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-1">
                      Ca sĩ: <span className="text-slate-700 font-medium">{song.artist}</span>
                    </p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {song.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-slate-600">
                      <Mic2 className="w-3.5 h-3.5 text-pink-500" />
                      <span>{song.lineCount} câu hát</span>
                    </span>
                    <span className="font-bold text-pink-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      <span>Nghe ngay</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Feature Suggestion Bottom Card */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-teal-900 to-indigo-950 text-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 text-white text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Gợi ý bài hát yêu thích</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black mb-2">
              Bạn muốn học thêm bài hát tiếng Trung nào?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Bạn yêu thích ca khúc nào trong phim, nhạc Douyin hay nhạc thiếu nhi vui nhộn? Hãy gửi gợi ý cho cô Kim Chi để ban biên tập tiếp tục bổ sung thêm nhiều bài hát hay vào Tủ nhạc nhé!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SongsHubPage;
