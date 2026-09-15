import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Sparkles,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Heart,
  Volume2,
  HelpCircle,
  Compass,
} from 'lucide-react';
import { getAllStories, getStoryProgress, Story } from '../data/storiesData';

export const StoriesPage: React.FC = () => {
  const stories = useMemo(() => getAllStories(), []);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tất cả thể loại' },
    { id: 'dong-vat', label: 'Thiếu nhi & Động vật' },
    { id: 'doi-song', label: 'Kỹ năng & Thói quen' },
    { id: 'ngu-ngon', label: 'Truyện ngụ ngôn & Trí tuệ' },
  ];

  const levels = [
    { id: 'all', label: 'Mọi cấp độ' },
    { id: 'Dễ', label: 'Cơ bản (YCT 1-2)' },
    { id: 'Trung bình', label: 'Trung cấp (YCT 3-4)' },
  ];

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      const matchCategory = selectedCategory === 'all' || story.category === selectedCategory;
      const matchLevel = selectedLevel === 'all' || story.levelBadge === selectedLevel;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        story.titleZh.toLowerCase().includes(q) ||
        story.titlePy.toLowerCase().includes(q) ||
        story.titleVi.toLowerCase().includes(q) ||
        story.summary.toLowerCase().includes(q) ||
        story.tags.some((t) => t.toLowerCase().includes(q));

      return matchCategory && matchLevel && matchSearch;
    });
  }, [stories, selectedCategory, selectedLevel, searchQuery]);

  const featuredStory = useMemo(() => stories.find((s) => s.isFeatured) || stories[0], [stories]);
  const featuredProgress = useMemo(() => getStoryProgress(featuredStory.id), [featuredStory]);

  return (
    <div className="min-h-screen bg-cream/70 pb-24 sm:pb-20 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl px-3.5 sm:px-6">
        
        {/* Breadcrumb & Subtitle */}
        <div className="flex items-center gap-2 text-xs font-semibold text-teal-800/80 mb-3">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
          <span>/</span>
          <span className="text-teal-900 font-bold">Mở rộng</span>
          <span>/</span>
          <span className="text-slate-500">Tủ truyện</span>
        </div>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-2xs mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Tủ Sách Thiếu Nhi & Song Ngữ · 绘本馆</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Tủ truyện tiếng Trung
            </h1>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">
              Thưởng thức những mẩu chuyện tranh sinh động song ngữ Hán - Việt, rèn luyện kỹ năng đọc tự nhiên, phát âm bản xứ và mở rộng vốn từ qua từng bức tranh ấm áp.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center">
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Kho truyện</div>
              <div className="text-sm sm:text-lg font-black text-teal-700">{stories.length} bộ truyện</div>
            </div>
            <div className="flex-1 sm:flex-initial px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs text-center">
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Định dạng</div>
              <div className="text-sm sm:text-lg font-black text-amber-600">Tranh & Audio</div>
            </div>
          </div>
        </div>

        {/* ================= FEATURED HERO STORY BANNER ================= */}
        {featuredStory && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-50/90 via-emerald-50/60 to-amber-50/50 border border-teal-200/80 shadow-sm mb-8 sm:mb-10">
            {/* Background Decorative Graphic */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden sm:flex items-center justify-center font-hanzi text-[200px] font-black select-none text-teal-950">
              乐
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 p-4.5 sm:p-6 md:p-8 items-center">
              {/* Cover Image / Visual */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group w-36 xs:w-44 sm:w-52 md:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-3 sm:border-4 border-white transform transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={featuredStory.coverImage}
                    alt={featuredStory.titleVi}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2.5 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 text-center">
                    <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-400 text-slate-950 text-[10.5px] sm:text-xs font-black rounded-lg shadow-sm">
                      {featuredStory.totalPages} trang tranh minh họa
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Details */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10.5px] sm:text-xs tracking-wider uppercase shadow-xs">
                      ⭐ Truyện mới nhất
                    </span>
                    <span className="px-2 py-0.5 sm:px-2.5 rounded-full bg-teal-100/90 border border-teal-300/60 text-teal-900 text-[10.5px] sm:text-xs font-bold">
                      {featuredStory.level}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{featuredStory.readingMinutes} phút đọc</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 flex flex-wrap items-baseline gap-2 sm:gap-3">
                    <span className="font-hanzi text-2xl sm:text-3xl md:text-4xl text-teal-900 font-bold">{featuredStory.titleZh}</span>
                    <span className="text-base sm:text-lg md:text-xl font-bold text-slate-700">· {featuredStory.titleVi}</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-teal-700 font-mono font-semibold mt-0.5">{featuredStory.titlePy}</p>

                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl line-clamp-3">
                    {featuredStory.summary}
                  </p>

                  {/* Moral takeaway */}
                  <div className="mt-3 p-2.5 sm:p-3 rounded-xl bg-white/90 border border-teal-200/80 shadow-2xs flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 shrink-0 mt-0.5 fill-rose-500/20" />
                    <span>
                      <strong className="text-slate-900 font-bold">Bài học ý nghĩa: </strong>
                      {featuredStory.moralLesson}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="mt-2.5 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                    {featuredStory.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-teal-100/60 border border-teal-200/70 text-[10.5px] sm:text-[11px] text-teal-800 font-semibold"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 pt-1">
                  <Link
                    to={`/tu-truyen/${featuredStory.id}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all no-underline w-full sm:w-auto"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{featuredProgress.completed ? 'Đọc lại truyện' : 'Bắt đầu đọc truyện'}</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>

                  <div className="flex items-center justify-between sm:justify-start gap-3">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                      <Volume2 className="w-4 h-4 text-amber-600" />
                      <span>Có giọng đọc AI & Pinyin</span>
                    </div>

                    {featuredProgress.completed && (
                      <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-emerald-800 font-bold bg-emerald-100/80 px-2.5 py-1 rounded-lg border border-emerald-300/80 shadow-2xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Đã hoàn thành</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= FILTER & SEARCH BAR ================= */}
        <div className="bg-white rounded-2xl p-3.5 sm:p-4.5 border border-slate-200/80 shadow-xs mb-6 sm:mb-8 space-y-3.5">
          {/* Top Row: Search Input + Level Filter */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tên truyện, chữ Hán, ý nghĩa..."
                className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-600 transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer px-1 py-0.5"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Level Filter (Pills) */}
            <div className="flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
              <span className="text-xs font-bold text-slate-400 shrink-0 mr-1 hidden md:inline">Cấp độ:</span>
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  type="button"
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLevel === lvl.id
                      ? 'bg-amber-500 text-slate-950 shadow-2xs font-black'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Category Filter (Pills) */}
          <div className="border-t border-slate-100 pt-3 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-400 shrink-0 mr-1">Thể loại:</span>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-teal-700 text-white shadow-2xs font-black'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Clear filters if active */}
            {(selectedCategory !== 'all' || selectedLevel !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSearchQuery('');
                }}
                className="text-xs text-teal-700 hover:text-teal-900 hover:underline font-bold whitespace-nowrap ml-auto cursor-pointer"
              >
                Đặt lại bộ lọc
              </button>
            )}
          </div>
        </div>

        {/* ================= STORIES GRID ================= */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-700" />
              <span>Danh mục truyện đọc ({filteredStories.length})</span>
            </h2>
            <span className="text-xs text-slate-500">Mở rộng không giới hạn</span>
          </div>

          {filteredStories.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-700 font-bold">Không tìm thấy truyện phù hợp</p>
              <p className="text-xs text-slate-500 mt-1">Thử thay đổi từ khóa tìm kiếm hoặc bỏ bớt bộ lọc.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
                className="mt-3 px-4 py-1.5 rounded-xl bg-teal-700 text-white text-xs font-bold hover:bg-teal-800"
              >
                Xem tất cả
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredStories.map((story) => {
                const prog = getStoryProgress(story.id);

                return (
                  <Link
                    key={story.id}
                    to={`/tu-truyen/${story.id}`}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-teal-400 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.99] touch-manipulation flex flex-col no-underline text-inherit"
                  >
                    {/* Cover Aspect Ratio Card */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <img
                        src={story.coverImage}
                        alt={story.titleVi}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      {/* Level and Category Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-lg bg-black/60 text-white text-[11px] font-bold backdrop-blur-xs">
                          {story.level}
                        </span>
                        {story.isFeatured && (
                          <span className="px-2 py-0.5 rounded-lg bg-amber-400 text-slate-950 text-[10.5px] font-black shadow-xs">
                            MỚI
                          </span>
                        )}
                      </div>

                      {/* Reading Time Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-white/80 text-slate-800 text-[11px] font-semibold backdrop-blur-xs">
                          <Clock className="w-3 h-3 text-slate-600" />
                          <span>{story.readingMinutes}p</span>
                        </span>
                      </div>

                      {/* Title Overlay at bottom of image */}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="font-hanzi text-2xl font-black text-amber-300 group-hover:text-amber-200 transition-colors">
                          {story.titleZh}
                        </div>
                        <div className="text-xs font-mono text-slate-200 opacity-90">{story.titlePy}</div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h3 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors line-clamp-1">
                            {story.titleVi}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                          {story.summary}
                        </p>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {story.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Progress & Card Footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                          <Layers className="w-3.5 h-3.5 text-slate-400" />
                          <span>{story.totalPages} trang tranh</span>
                        </div>

                        {prog.completed ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Đã đọc</span>
                          </span>
                        ) : prog.currentPage > 1 ? (
                          <span className="text-amber-600 font-bold">
                            Trang {prog.currentPage}/{story.totalPages}
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-teal-700 font-bold group-hover:translate-x-0.5 transition-transform">
                            <span>Khám phá</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* ================= BENEFIT & COMING SOON CALLOUT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Card 1: Phương pháp đọc truyện */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200/80 shadow-2xs">
            <div className="flex items-center gap-2.5 text-amber-900 font-black text-sm mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Phương pháp học tiếng Trung qua truyện tranh</span>
            </div>
            <p className="text-xs text-amber-950/80 leading-relaxed mb-3">
              Đọc tranh minh họa kết hợp song ngữ giúp người học liên kết trực tiếp ngữ cảnh hình ảnh với từ vựng, ghi nhớ chữ Hán một cách tự nhiên mà không cần nhồi nhét máy móc.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-amber-200/60 text-center">
              <div className="bg-white/70 p-2 rounded-xl">
                <div className="text-base font-black text-amber-900">100%</div>
                <div className="text-[10px] text-amber-800">Tranh vẽ sống động</div>
              </div>
              <div className="bg-white/70 p-2 rounded-xl">
                <div className="text-base font-black text-amber-900">Audio</div>
                <div className="text-[10px] text-amber-800">Phát âm bản xứ</div>
              </div>
              <div className="bg-white/70 p-2 rounded-xl">
                <div className="text-base font-black text-amber-900">+XP</div>
                <div className="text-[10px] text-amber-800">Quiz tích lũy điểm</div>
              </div>
            </div>
          </div>

          {/* Card 2: Đóng góp & Mở rộng thêm truyện */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-sky-50/60 border border-teal-200/80 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-teal-900 font-black text-sm mb-2">
                <HelpCircle className="w-4 h-4 text-teal-600" />
                <span>Không ngừng cập nhật thêm truyện mới</span>
              </div>
              <p className="text-xs text-teal-950/80 leading-relaxed">
                Hệ sinh thái Tủ truyện được thiết kế mở để liên tục nạp thêm các tác phẩm truyện tranh kinh điển, truyện đồng thoại và câu chuyện nhân văn mới mỗi tuần.
              </p>
            </div>
            <div className="pt-3 mt-2 border-t border-teal-200/60 flex items-center justify-between text-xs text-teal-900">
              <span className="font-semibold">Bạn muốn đóng góp thêm câu chuyện?</span>
              <Link
                to="/giao-vien"
                className="font-bold text-teal-800 hover:underline inline-flex items-center gap-1"
              >
                <span>Liên hệ cô Kim Chi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoriesPage;
