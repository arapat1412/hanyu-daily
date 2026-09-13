import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Flame, 
  Trophy, 
  PenTool, 
  Coffee, 
  Layers, 
  MessageSquare,
  Award,
  ChevronRight,
  Compass,
  CheckCircle2,
  Zap,
  BellRing,
  CalendarClock
} from 'lucide-react';
import { BobaTeaModal } from '../components/BobaTeaModal';
import {
  useProgress,
  fetchWordsByIds,
  getDueSrsWordIds,
  getSrsSummary,
} from '../lib/hsk';
import { submitFeedback, useAuth, useLeaderboard } from '../lib/auth';
import { calculateProgressStats } from '../lib/progress-stats';
import { VocabularyModal, type VocabularyTab } from '../components/VocabularyModal';
import { FlashcardModal } from '../components/FlashcardModal';
import { HanziStrokeModal } from '../components/HanziStrokeModal';
import { SentenceScrambleModal } from '../components/SentenceScrambleModal';
import { WordMatchGameModal } from '../components/WordMatchGameModal';
import { SAMPLE_VOCABULARY } from '../data/sampleVocab';
import type { VocabularyWord } from '../types';
import { PandaWalking } from '../components/PandaWalking';

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? '?';
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const FLOATING_HANZI = [
  // Cánh trái (vùng xanh trời - thoáng rộng ngoài lề chữ)
  { char: '学', left: '2%', top: '16%', size: 'text-6xl sm:text-7xl', color: '#0284C7', opacity: 0.08, anim: 'animate-float-slow', delay: '0s' },
  { char: '博', left: '7%', top: '56%', size: 'text-7xl sm:text-8xl', color: '#0369A1', opacity: 0.07, anim: 'animate-float-medium', delay: '1.5s' },
  { char: '知', left: '14%', top: '12%', size: 'text-5xl sm:text-6xl', color: '#0EA5E9', opacity: 0.08, anim: 'animate-float-gentle', delay: '3.2s' },
  { char: '文', left: '20%', top: '64%', size: 'text-6xl sm:text-7xl', color: '#0284C7', opacity: 0.06, anim: 'animate-float-slow', delay: '2.1s' },

  // Mép trên ngoài tầm đọc của tiêu đề
  { char: '书', left: '36%', top: '-4%', size: 'text-6xl sm:text-7xl', color: '#38BDF8', opacity: 0.05, anim: 'animate-float-gentle', delay: '4s' },
  { char: '道', left: '64%', top: '-4%', size: 'text-6xl sm:text-7xl', color: '#818CF8', opacity: 0.05, anim: 'animate-float-medium', delay: '2.8s' },

  // Cánh phải (vùng hồng phấn - thoáng rộng ngoài lề thẻ)
  { char: '雅', left: '77%', top: '15%', size: 'text-6xl sm:text-7xl', color: '#DB2777', opacity: 0.08, anim: 'animate-float-slow', delay: '2.5s' },
  { char: '恒', left: '83%', top: '60%', size: 'text-6xl sm:text-7xl', color: '#E11D48', opacity: 0.07, anim: 'animate-float-medium', delay: '3.6s' },
  { char: '习', left: '90%', top: '12%', size: 'text-7xl sm:text-8xl', color: '#EC4899', opacity: 0.08, anim: 'animate-float-slow', delay: '1.2s' },
  { char: '智', left: '96%', top: '56%', size: 'text-5xl sm:text-6xl', color: '#F43F5E', opacity: 0.07, anim: 'animate-float-gentle', delay: '2.2s' },
];

export const DashboardPage: React.FC = () => {
  const progress = useProgress();
  const { user } = useAuth();
  const [leaderboardTab, setLeaderboardTab] = useState<'weekly' | 'overall'>('weekly');
  const { users: leaderboardUsers } = useLeaderboard({ period: leaderboardTab, limit: 3 });

  const completedCount = Object.values(progress.lessons).filter((l) => l.completed).length;
  const stats = useMemo(() => calculateProgressStats(progress), [progress]);
  const dueSrsWordIds = useMemo(() => getDueSrsWordIds(progress), [progress.srs]);
  const srsSummary = useMemo(() => getSrsSummary(progress), [progress.srs]);

  // Modals state
  const [vocabModalOpen, setVocabModalOpen] = useState(false);
  const [vocabTab, setVocabTab] = useState<VocabularyTab>('bookmarks');

  const [flashcardOpen, setFlashcardOpen] = useState(false);
  const [flashcardWords, setFlashcardWords] = useState<VocabularyWord[]>([]);
  const [flashcardLoading, setFlashcardLoading] = useState(false);
  const [flashcardTitle, setFlashcardTitle] = useState('Ôn tập Từ vựng Phản xạ');

  const [strokeWord, setStrokeWord] = useState<VocabularyWord | null>(null);
  const [bobaOpen, setBobaOpen] = useState(false);

  const [scrambleOpen, setScrambleOpen] = useState(false);
  const [scrambleWords, setScrambleWords] = useState<VocabularyWord[]>([]);
  const [scrambleLoading, setScrambleLoading] = useState(false);

  const [matchOpen, setMatchOpen] = useState(false);
  const [matchWords, setMatchWords] = useState<VocabularyWord[]>([]);
  const [matchLoading, setMatchLoading] = useState(false);

  // Feedback state
  const [feedback, setFeedback] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState<string | null>(null);
  const [feedbackSending, setFeedbackSending] = useState(false);

  const leaderboardRows = leaderboardUsers
    .map((item) => ({
      ...item,
      stars: leaderboardTab === 'weekly' ? item.weeklyXp : item.xp,
      avatar: item.avatarUrl || null,
    }))
    .sort((first, second) => first.rank - second.rank);

  const handleOpenVocab = (tab: VocabularyTab) => {
    setVocabTab(tab);
    setVocabModalOpen(true);
  };

  const handleStartFlashcard = async () => {
    setFlashcardTitle('Ôn tập Từ vựng Phản xạ');
    if (progress.bookmarks.length === 0) {
      setFlashcardWords(SAMPLE_VOCABULARY.hsk1 || []);
      setFlashcardOpen(true);
      return;
    }
    setFlashcardLoading(true);
    try {
      const words = await fetchWordsByIds(progress.bookmarks);
      setFlashcardWords(words.length > 0 ? words : SAMPLE_VOCABULARY.hsk1 || []);
      setFlashcardOpen(true);
    } catch {
      setFlashcardWords(SAMPLE_VOCABULARY.hsk1 || []);
      setFlashcardOpen(true);
    } finally {
      setFlashcardLoading(false);
    }
  };

  const handleStartDueReview = async () => {
    if (dueSrsWordIds.length === 0) return;
    setFlashcardLoading(true);
    try {
      const words = await fetchWordsByIds(dueSrsWordIds);
      setFlashcardWords(words);
      setFlashcardTitle(`Ôn tập SRS hôm nay · ${words.length} từ`);
      setFlashcardOpen(true);
    } catch {
      setFlashcardWords([]);
      setFlashcardTitle('Ôn tập SRS hôm nay');
      setFlashcardOpen(true);
    } finally {
      setFlashcardLoading(false);
    }
  };

  const handleStartSentenceScramble = async () => {
    if (progress.bookmarks.length === 0) {
      setScrambleWords(SAMPLE_VOCABULARY.hsk1 || []);
      setScrambleOpen(true);
      return;
    }
    setScrambleLoading(true);
    try {
      const words = await fetchWordsByIds(progress.bookmarks);
      setScrambleWords(words.length > 0 ? words : SAMPLE_VOCABULARY.hsk1 || []);
      setScrambleOpen(true);
    } catch {
      setScrambleWords(SAMPLE_VOCABULARY.hsk1 || []);
      setScrambleOpen(true);
    } finally {
      setScrambleLoading(false);
    }
  };

  const handleStartWordMatch = async () => {
    if (progress.bookmarks.length === 0) {
      setMatchWords(SAMPLE_VOCABULARY.hsk1 || []);
      setMatchOpen(true);
      return;
    }
    setMatchLoading(true);
    try {
      const words = await fetchWordsByIds(progress.bookmarks);
      setMatchWords(words.length >= 5 ? words : SAMPLE_VOCABULARY.hsk1 || []);
      setMatchOpen(true);
    } catch {
      setMatchWords(SAMPLE_VOCABULARY.hsk1 || []);
      setMatchOpen(true);
    } finally {
      setMatchLoading(false);
    }
  };

  const handleStartHanziPractice = () => {
    const sampleWord = SAMPLE_VOCABULARY.hsk1?.[1] || {
      id: 'hsk1-sample',
      hanzi: '爱',
      pinyin: 'ài',
      sinoVietnamese: 'Ái',
      partOfSpeech: 'Động từ',
      hskLevel: 'hsk1',
      unit: 1,
      meaning: 'Yêu, quý mến',
      exampleSentence: {
        chinese: '我爱学习中文。',
        pinyin: 'Wǒ ài xuéxí zhōngwén.',
        vietnamese: 'Tôi yêu thích việc học tiếng Trung.'
      }
    };
    setStrokeWord(sampleWord);
  };

  const handleSendFeedback = async () => {
    if (!feedback.trim()) return;
    setFeedbackSending(true);
    try {
      await submitFeedback(feedback);
      setFeedbackStatus('Đã gửi! Cảm ơn bạn 💌');
      setFeedback('');
      setTimeout(() => setFeedbackStatus(null), 3000);
    } catch {
      setFeedbackStatus('Chưa gửi được, bạn thử lại sau nhé.');
    } finally {
      setFeedbackSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 pb-20">
      
      {/* 1. Header tinh tế, ấm áp & nổi bật với dải màu Aurora mềm mại */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#E0F2FE]/95 via-[#F8FAFC]/90 to-[#FCE7F3]/95 border-b border-sky-200/60 pt-8 pb-40 sm:pt-10 sm:pb-36 shadow-xs">
        {/* Decorative ambient glowing orbs tạo chiều sâu và sắc thái ấm cúng */}
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-pink-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/40 rounded-full blur-2xl pointer-events-none" />

        {/* Chữ Hán bay lượn nghệ thuật ở hậu cảnh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          {FLOATING_HANZI.map((item, idx) => (
            <span
              key={idx}
              aria-hidden="true"
              className={`absolute font-serif font-black leading-none ${item.size} ${item.anim}`}
              style={{
                left: item.left,
                top: item.top,
                color: item.color,
                opacity: item.opacity,
                animationDelay: item.delay,
              }}
            >
              {item.char}
            </span>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Lời chào & Định hướng */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-sky-300/70 text-slate-800 text-xs font-bold mb-2.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                <span>Học viện Hanyu Daily · Chuẩn New HSK 3.0 & Boya</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-black text-slate-900 tracking-tight leading-snug">
                Chào {user?.name || 'bạn'}, hôm nay chúng ta cùng học nhé!
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg font-medium">
                Duy trì thói quen học mỗi ngày để xây dựng phản xạ giao tiếp tự nhiên và ghi nhớ chữ Hán dài hạn.
              </p>
            </div>

            {/* 3 Thẻ chỉ số thiết kế kính mờ nổi bật (Glassmorphic Cards) */}
            <div className="flex items-center gap-3 sm:gap-3.5 flex-wrap">
              
              {/* Streak */}
              <div className="flex items-center gap-3 px-4.5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-md shadow-sky-950/5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 fill-amber-500" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono leading-none">
                    {stats.streak} ngày
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Chuỗi liên tục
                  </div>
                </div>
              </div>

              {/* Completed Lessons */}
              <div className="flex items-center gap-3 px-4.5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-md shadow-sky-950/5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono leading-none">
                    {completedCount} bài
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Đã hoàn thành
                  </div>
                </div>
              </div>

              {/* Known Words */}
              <div className="flex items-center gap-3 px-4.5 py-3 rounded-2xl bg-white/95 backdrop-blur-md border border-white/90 shadow-md shadow-sky-950/5 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono leading-none">
                    {progress.known.length} từ
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Đã ghi nhớ
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Chú gấu trúc hoạt hình kéo xe chữ 你好 (Nǐ hǎo) */}
        <PandaWalking />
      </section>

      {/* 2. Thân trang: Bố cục 2 cột cân đối & hiện đại */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-7">

        {/* ========================================================
            FLAGSHIP HERO SPOTLIGHT: CÔ NGUYỄN THỊ KIM CHI
            (Tone xanh nhẹ thanh lịch kết hợp ánh hồng mềm mại, cuốn hút)
        ======================================================== */}
        <section 
          className="relative overflow-hidden rounded-3xl text-white p-6 sm:p-8 lg:p-9 shadow-xl shadow-pink-500/10 mb-8 border border-pink-200/40"
          style={{
            background: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 28%, #7DD3FC 52%, #F9A8D4 78%, #F472B6 100%)'
          }}
        >
          {/* Subtle decorative glowing orbs: Ánh hồng dịu ngọt & xanh nhẹ mát lành */}
          <div className="absolute -top-16 -right-16 w-80 h-80 bg-pink-300/45 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 right-1/4 w-72 h-72 bg-rose-300/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            
            {/* Cột trái: Thông tin chuyên môn, thành tựu & nút đăng ký */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/25 border border-white/40 text-white text-xs font-bold mb-3 backdrop-blur-md shadow-xs">
                <Award className="w-4 h-4 text-pink-200" />
                <span>Biên soạn & Cố vấn Chuyên môn Hanyu Daily</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white mb-3 drop-shadow-sm leading-tight">
                Cô Nguyễn Thị Kim Chi
              </h2>

              {/* 3 Huy hiệu nổi bật */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-xs">
                  🎓 Cử nhân Xuất sắc ĐH Hùng Vương
                </span>
                <span className="inline-flex items-center gap-1 px-3.5 py-1 rounded-xl bg-gradient-to-r from-sky-100 to-pink-100 text-sky-950 text-xs font-black shadow-xs border border-white/70 backdrop-blur-xs">
                  🏆 Chứng chỉ HSK 6
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-xl bg-white/20 border border-white/30 text-white text-xs font-semibold backdrop-blur-xs">
                  ✍️ Biên soạn 100% học liệu
                </span>
              </div>

              <p className="text-white/95 text-xs sm:text-sm leading-relaxed max-w-2xl mb-6">
                Toàn bộ bài giảng, hệ thống từ vựng New HSK 3.0 và giáo trình Boya do cô trực tiếp biên tập và giảng dạy — đồng hành cùng bạn bứt phá tiếng Trung từ con số 0 đến thành thạo phản xạ tự nhiên.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  to="/khoa-hoc"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-pink-50 text-sky-950 hover:text-pink-700 font-black text-xs sm:text-sm shadow-xl shadow-sky-950/15 hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-pink-500" />
                  <span>Đăng ký khóa học cùng cô</span>
                  <ArrowRight className="w-4 h-4 text-pink-500" />
                </Link>

                <Link
                  to="/giao-vien"
                  className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white border border-white/40 font-bold text-xs sm:text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95"
                >
                  <span>Giới thiệu chi tiết</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Cột phải: Ảnh chân dung nổi bật có vòng bo sáng ánh hồng */}
            <div className="relative shrink-0">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl overflow-hidden ring-4 ring-pink-200/90 shadow-[0_0_45px_rgba(244,114,182,0.4)]">
                <img
                  src="/kimchi.png"
                  alt="Cô Nguyễn Thị Kim Chi"
                  className="w-full h-full object-cover object-[50%_20%]"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-300 text-white px-3 py-1 rounded-full text-xs font-black shadow-lg border-2 border-white flex items-center gap-1">
                <span>✓</span>
                <span>Giảng viên HSK 6</span>
              </div>
            </div>

          </div>
        </section>

        <section className={`relative mb-8 overflow-hidden rounded-3xl border p-5 sm:p-6 shadow-sm ${
          srsSummary.dueToday > 0
            ? 'border-amber-200 bg-gradient-to-r from-amber-50 via-white to-sky-50'
            : 'border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-sky-50'
        }`}>
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3.5">
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                srsSummary.dueToday > 0
                  ? 'bg-amber-100 text-amber-700'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {srsSummary.dueToday > 0 ? <BellRing className="h-5 w-5" /> : <CheckCircle2 className="h-5 w-5" />}
              </div>
              <div>
                <h2 className="font-display text-base font-black text-slate-900 sm:text-lg">
                  {srsSummary.dueToday > 0
                    ? `🔔 Hôm nay bạn có ${srsSummary.dueToday} từ cần ôn tập theo chu kỳ`
                    : '🎉 Tuyệt vời! Bạn đã hoàn thành toàn bộ từ vựng cần ôn hôm nay.'}
                </h2>
                <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {srsSummary.dueToday > 0
                    ? 'Ôn tập đúng thời điểm vàng giúp từ vựng khắc sâu vào trí nhớ dài hạn.'
                    : 'Hãy học bài mới hoặc quay lại vào ngày mai!'}
                </p>
                <div className="mt-2 flex items-center gap-3 text-[11px] font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1"><CalendarClock className="h-3.5 w-3.5" /> Đang học: {srsSummary.learning}</span>
                  <span>Ghi nhớ sâu: {srsSummary.mastered}</span>
                </div>
              </div>
            </div>
            {srsSummary.dueToday > 0 && (
              <button
                type="button"
                onClick={() => void handleStartDueReview()}
                disabled={flashcardLoading}
                className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-xs font-black text-white shadow-md shadow-amber-500/20 transition hover:from-amber-600 hover:to-orange-600 active:scale-95 disabled:opacity-60"
              >
                <BellRing className="h-4 w-4" />
                {flashcardLoading ? 'Đang tải...' : `Ôn tập ngay (${srsSummary.dueToday} từ)`}
              </button>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          
          {/* CỘT TRÁI (8 cột): Khối học chính & Lộ trình */}
          <div className="lg:col-span-8 flex flex-col gap-7">

            {/* Bài học tiếp theo (Thiết kế phong cách Luminous Modern Card) */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
              {/* Quầng sáng ambient hài hòa cùng tone xanh - hồng */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 right-1/3 w-64 h-64 bg-pink-100/45 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200/80 text-sky-700 text-xs font-bold shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                    <span>Bài học tiếp theo của bạn</span>
                  </div>

                  <Link 
                    to="/hsk" 
                    className="text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors flex items-center gap-1"
                  >
                    <span>Tất cả bài học</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-1">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 mb-1.5 tracking-tight">
                      HSK 1 · Bài 1: 你好! (Xin chào)
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
                      Làm quen với đại từ nhân xưng, hệ thống thanh điệu cơ bản và 12 từ vựng thông dụng nhất.
                    </p>
                  </div>

                  <Link
                    to="/lesson/hsk1-1/list"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-pink-500 hover:from-sky-600 hover:to-pink-600 text-white font-black text-sm shadow-md shadow-sky-500/20 hover:shadow-lg transition-all shrink-0 hover:scale-[1.02] active:scale-98"
                  >
                    <span>Vào học ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Lộ trình học tập đa chiều */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-600" />
                  <h2 className="font-display text-lg font-bold text-slate-900">
                    Lộ trình học tập
                  </h2>
                </div>
                <Link to="/hsk" className="text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors">
                  Khám phá toàn bộ →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Track 1: New HSK 3.0 (Tone Xanh da trời) */}
                <Link
                  to="/hsk"
                  className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-sky-300 hover:shadow-sky-500/5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200/70 text-sky-600 font-display text-xl font-bold flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      汉
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-sky-600 transition-colors">
                      New HSK 3.0
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      9 cấp bậc tiêu chuẩn mới với 11.000 từ vựng và ngữ pháp.
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                    <span>9 cấp độ</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

                {/* Track 2: Boya (Tone Hồng phấn tươi tắn) */}
                <Link
                  to="/boya"
                  className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-pink-300 hover:shadow-pink-500/5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-pink-50 border border-pink-200/70 text-pink-600 font-display text-xl font-bold flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      博
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-pink-600 transition-colors">
                      Hán ngữ Boya
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Giáo trình ĐH Bắc Kinh kinh điển, chuẩn giao tiếp thực tế.
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 group-hover:text-pink-600 transition-colors flex items-center justify-between">
                    <span>Sơ cấp 1 & 2</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

                {/* Track 3: HSK 7-9 & CSCA (Tone Lam tím học thuật) */}
                <Link
                  to="/hsk/hsk7-9"
                  className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-xs hover:shadow-md hover:border-indigo-300 hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200/70 text-indigo-600 font-display text-xl font-bold flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      顶
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                      HSK 7–9 & CSCA
                    </div>
                    <div className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Dành cho ôn thi xin học bổng và dịch thuật chuyên ngành.
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-slate-700 group-hover:text-indigo-600 transition-colors flex items-center justify-between">
                    <span>Học thuật cao cấp</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>

              </div>
            </div>

            {/* Khám phá & Trò chơi Văn hóa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/kham-pha/van-hoa-trung-quoc"
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-pink-300 hover:shadow-pink-500/5 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                  🏛️
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-0.5">
                    Trò chơi học tập
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-pink-600 transition-colors">
                    1000 Câu hỏi Văn hóa
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    Trắc nghiệm lịch sử, phong tục, địa lý
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/kham-pha/thanh-ngu-dien-co"
                className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 hover:shadow-sky-500/5 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform">
                  📜
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-0.5">
                    Kho tàng tri thức
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Thành ngữ & Thơ Đường
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">
                    Điển tích thành ngữ và thi ca kinh điển
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          {/* CỘT PHẢI (4 cột): Sổ tay từ vựng + Bảng xếp hạng + Trà sữa */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Sổ tay từ vựng */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Sổ tay từ vựng
                  </h3>
                  <div className="text-xs text-slate-500">Ôn tập theo Spaced Repetition</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenVocab('bookmarks')}
                  className="text-xs font-semibold text-sky-600 hover:text-sky-700 cursor-pointer transition-colors"
                >
                  Xem tất cả →
                </button>
              </div>

              {/* 3 Thẻ số liệu */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <button
                  type="button"
                  onClick={() => handleOpenVocab('bookmarks')}
                  className="p-3 rounded-2xl bg-sky-50/50 hover:bg-sky-50 border border-sky-200/70 transition-all text-center cursor-pointer group"
                >
                  <div className="text-[11px] text-sky-700 font-bold">Đã lưu</div>
                  <div className="font-mono text-lg font-black text-sky-950 mt-0.5">
                    {progress.bookmarks.length}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenVocab('mistakes')}
                  className="p-3 rounded-2xl bg-rose-50/50 hover:bg-rose-50 border border-rose-200/70 transition-all text-center cursor-pointer group"
                >
                  <div className="text-[11px] text-rose-700 font-bold">Cần ôn</div>
                  <div className="font-mono text-lg font-black text-rose-950 mt-0.5">
                    {progress.mistakes.length}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenVocab('known')}
                  className="p-3 rounded-2xl bg-emerald-50/50 hover:bg-emerald-50 border border-emerald-200/70 transition-all text-center cursor-pointer group"
                >
                  <div className="text-[11px] text-emerald-700 font-bold">Đã nhớ</div>
                  <div className="font-mono text-lg font-black text-emerald-950 mt-0.5">
                    {progress.known.length}
                  </div>
                </button>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleStartFlashcard}
                  disabled={flashcardLoading}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-sky-600 to-pink-500 hover:from-sky-600 hover:to-pink-600 text-white font-black text-xs transition-all active:scale-98 cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-500/15 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{flashcardLoading ? 'Đang tải...' : 'Ôn Flashcard ngay'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleStartHanziPractice}
                  className="w-full py-2.5 rounded-2xl bg-slate-50 hover:bg-pink-50/60 text-slate-700 hover:text-pink-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-200/80 hover:border-pink-200"
                >
                  <PenTool className="w-3.5 h-3.5 text-pink-500" />
                  <span>Tập viết chữ Hán ô Mễ</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-0.5">
                  <button
                    type="button"
                    onClick={handleStartWordMatch}
                    disabled={matchLoading}
                    className="py-2.5 px-3 rounded-2xl bg-amber-50 hover:bg-amber-100/70 text-amber-900 font-bold text-xs transition-all active:scale-98 cursor-pointer border border-amber-200/80 flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    <span>{matchLoading ? 'Đang tải...' : 'Nối từ 30s'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleStartSentenceScramble}
                    disabled={scrambleLoading}
                    className="py-2.5 px-3 rounded-2xl bg-sky-50 hover:bg-sky-100/70 text-sky-900 font-bold text-xs transition-all active:scale-98 cursor-pointer border border-sky-200/80 flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    <span>{scrambleLoading ? 'Đang tải...' : 'Sắp xếp câu'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bảng xếp hạng tuần / chung */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-slate-900">Bảng vàng vinh danh</h3>
                    <div className="text-[11px] text-slate-500">Học viên tích cực nhất</div>
                  </div>
                </div>

                <div className="flex rounded-xl bg-slate-100 p-0.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setLeaderboardTab('weekly')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      leaderboardTab === 'weekly' ? 'bg-white font-bold text-slate-950 shadow-2xs' : 'text-slate-500'
                    }`}
                  >
                    Tuần
                  </button>
                  <button
                    type="button"
                    onClick={() => setLeaderboardTab('overall')}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      leaderboardTab === 'overall' ? 'bg-white font-bold text-slate-950 shadow-2xs' : 'text-slate-500'
                    }`}
                  >
                    Chung
                  </button>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {leaderboardRows.map((item, idx) => (
                  <li 
                    key={item.id} 
                    className={`flex items-center gap-3 p-2 rounded-xl transition-colors ${
                      idx === 0 
                        ? 'bg-amber-50/50 border border-amber-200/60' 
                        : 'hover:bg-slate-50'
                    }`}
                  >
                    <span className={`w-5 text-center font-bold font-mono text-sm ${
                      idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-slate-400' : idx === 2 ? 'text-amber-700' : 'text-slate-400'
                    }`}>
                      {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                    </span>
                    {item.avatar ? (
                      <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover border border-slate-200" />
                    ) : (
                      <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                        {getInitials(item.name)}
                      </span>
                    )}
                    <span className="flex-1 truncate font-medium text-xs text-slate-800">
                      {item.name}
                    </span>
                    <span className="font-bold text-xs text-amber-600 font-mono">
                      {item.stars} ⭐
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/xep-hang"
                className="block text-center py-2.5 rounded-2xl bg-slate-50 hover:bg-sky-50/60 hover:text-sky-700 hover:border-sky-200 text-xs font-bold text-slate-600 transition-colors border border-slate-200/70"
              >
                Xem chi tiết bảng xếp hạng →
              </Link>
            </div>

            {/* Mời trà sữa ấm cúng */}
            <div className="p-4.5 rounded-3xl bg-gradient-to-br from-pink-50/80 via-rose-50/50 to-amber-50/60 border border-pink-200/70 flex items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3 min-w-0">
                <img src="/tra-sua-icon.png" alt="Trà sữa" className="w-11 h-11 object-contain shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900">Mời cô giáo một ly trà sữa</div>
                  <div className="text-[11px] text-pink-900/70 truncate">Ủng hộ máy chủ duy trì web</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setBobaOpen(true)}
                className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs hover:shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-1"
              >
                <span>Mời</span>
                <span>🧋</span>
              </button>
            </div>

            {/* Góp ý & Báo lỗi */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-2">
                <MessageSquare className="w-3.5 h-3.5 text-slate-500" />
                <span>Góp ý & Báo lỗi</span>
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Lời nhắn gửi đến đội ngũ phát triển..."
                rows={2}
                className="w-full resize-none rounded-xl border border-slate-200 p-2.5 text-xs text-slate-800 focus:outline-none focus:border-slate-400 transition-colors mb-2"
              />
              {feedbackStatus && (
                <div className="text-[11px] text-teal-700 font-medium mb-1.5">{feedbackStatus}</div>
              )}
              <button
                type="button"
                disabled={!feedback.trim() || feedbackSending}
                onClick={() => void handleSendFeedback()}
                className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs disabled:opacity-40 cursor-pointer transition-colors"
              >
                {feedbackSending ? 'Đang gửi...' : 'Gửi lời nhắn'}
              </button>
            </div>

          </div>

        </div>
      </main>

      {/* Modals */}
      <VocabularyModal
        isOpen={vocabModalOpen}
        onClose={() => setVocabModalOpen(false)}
        initialTab={vocabTab}
      />

      <FlashcardModal
        isOpen={flashcardOpen}
        onClose={() => setFlashcardOpen(false)}
        words={flashcardWords}
        title={flashcardTitle}
      />

      <HanziStrokeModal
        isOpen={!!strokeWord}
        onClose={() => setStrokeWord(null)}
        word={strokeWord}
      />

      <BobaTeaModal
        isOpen={bobaOpen}
        onClose={() => setBobaOpen(false)}
      />

      <SentenceScrambleModal
        isOpen={scrambleOpen}
        onClose={() => setScrambleOpen(false)}
        words={scrambleWords}
      />

      <WordMatchGameModal
        isOpen={matchOpen}
        onClose={() => setMatchOpen(false)}
        words={matchWords}
      />

    </div>
  );
};

export default DashboardPage;
