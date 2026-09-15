import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RouteMetadata } from './components/RouteMetadata';
import { PwaInstallPrompt } from './components/PwaInstallPrompt';
import { MobileBottomNav } from './components/MobileBottomNav';
import { useGlobalSearch } from './lib/search';
import { HandsFreePlayerProvider } from './lib/hands-free-context';
import { HandsFreePlayer } from './components/HandsFreePlayer';
import { VisitorTracker } from './components/VisitorTracker';
import { IpAccessGuard } from './components/IpAccessGuard';

const GlobalSearchModal = lazy(() => import('./components/GlobalSearchModal').then((module) => ({ default: module.GlobalSearchModal })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then((module) => ({ default: module.DashboardPage })));
const HskPage = lazy(() => import('./pages/HskPage').then((module) => ({ default: module.HskPage })));
const BoyaHubPage = lazy(() => import('./pages/BoyaHubPage').then((module) => ({ default: module.BoyaHubPage })));
const BoyaPage = lazy(() => import('./pages/BoyaPage').then((module) => ({ default: module.BoyaPage })));
const HskLevelPage = lazy(() => import('./pages/HskLevelPage').then((module) => ({ default: module.HskLevelPage })));
const LessonPage = lazy(() => import('./pages/LessonPage').then((module) => ({ default: module.LessonPage })));
const Hsk79Page = lazy(() => import('./pages/Hsk79Page').then((module) => ({ default: module.Hsk79Page })));
const CscaPage = lazy(() => import('./pages/CscaPage').then((module) => ({ default: module.CscaPage })));
const CoursesPage = lazy(() => import('./pages/CoursesPage').then((module) => ({ default: module.CoursesPage })));
const CurriculumHubPage = lazy(() => import('./pages/CurriculumHubPage').then((module) => ({ default: module.CurriculumHubPage })));
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage').then((module) => ({ default: module.LeaderboardPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then((module) => ({ default: module.LoginPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then((module) => ({ default: module.RegisterPage })));
const TeacherPage = lazy(() => import('./pages/TeacherPage').then((module) => ({ default: module.TeacherPage })));
const MePage = lazy(() => import('./pages/MePage').then((module) => ({ default: module.MePage })));
const YctSeriesHubPage = lazy(() => import('./pages/YctSeriesHubPage').then((module) => ({ default: module.YctSeriesHubPage })));
const YctHubPage = lazy(() => import('./pages/YctHubPage').then((module) => ({ default: module.YctHubPage })));
const TermsPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.PrivacyPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then((module) => ({ default: module.AdminPage })));
const StoriesPage = lazy(() => import('./pages/StoriesPage').then((module) => ({ default: module.StoriesPage })));
const StoryReaderPage = lazy(() => import('./pages/StoryReaderPage').then((module) => ({ default: module.StoryReaderPage })));

// Auto scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function RouteLoading() {
  return <div className="mx-auto min-h-[45vh] max-w-5xl px-6 py-16 text-center text-sm text-muted">Đang tải nội dung…</div>;
}

export const App: React.FC = () => {
  const { isOpen: searchOpen, close: closeSearch } = useGlobalSearch();

  return (
    <BrowserRouter>
      <HandsFreePlayerProvider>
        <ScrollToTop />
        <VisitorTracker />
        <RouteMetadata />
        <IpAccessGuard>
        <div className="flex flex-col min-h-screen bg-cream w-full overflow-x-clip">
          <Navbar />
          <main className="flex-1 pb-16 md:pb-0">
            <Suspense fallback={<RouteLoading />}>
            <Routes>
              {/* Trang chủ / Bảng điều khiển */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              
              {/* Lộ trình HSK */}
              <Route path="/hsk" element={<HskPage />} />
              <Route path="/hsk/:code" element={<HskLevelPage />} />
              <Route path="/hsk/:code/:tab" element={<HskLevelPage />} />
              <Route path="/lesson/:lessonId/:mode" element={<LessonPage />} />
              <Route path="/lesson/:lessonId" element={<LessonPage />} />

              {/* Hệ thống Giáo trình Chuẩn (Boya & YCT) */}
              <Route path="/giao-trinh" element={<CurriculumHubPage />} />

              {/* Giáo trình Hán ngữ Boya */}
              <Route path="/boya" element={<BoyaHubPage />} />
              <Route path="/boya/so-cap-1" element={<BoyaPage />} />
              <Route path="/boya/so-cap-1/:lessonId" element={<BoyaPage />} />
              <Route path="/boya/so-cap-2" element={<BoyaPage />} />
              <Route path="/boya/so-cap-2/:lessonId" element={<BoyaPage />} />
              <Route path="/boya/:lessonId" element={<BoyaPage />} />
              
              {/* Specialized Courses & Pages */}
              <Route path="/khoa-hoc" element={<CoursesPage />} />
              <Route path="/giao-vien" element={<TeacherPage />} />
              <Route path="/hsk79" element={<Navigate to="/hsk/hsk7-9" replace />} />
              <Route path="/hsk79/*" element={<Hsk79Page />} />
              <Route path="/csca" element={<CscaPage />} />
              {/* Giáo trình Tiếng Trung Thiếu Nhi YCT */}
              <Route path="/yct" element={<YctSeriesHubPage />} />
              <Route path="/yct/:level" element={<YctHubPage />} />
              <Route path="/yct/:level/:tab" element={<YctHubPage />} />
              <Route path="/kham-pha/yct" element={<Navigate to="/yct" replace />} />
              <Route path="/kham-pha/yct/:tab" element={<Navigate to="/yct" replace />} />

              {/* Tủ truyện tiếng Trung & Khám phá mở rộng */}
              <Route path="/tu-truyen" element={<StoriesPage />} />
              <Route path="/tu-truyen/:id" element={<StoryReaderPage />} />
              <Route path="/mo-rong" element={<Navigate to="/tu-truyen" replace />} />
              <Route path="/mo-rong/tu-truyen" element={<Navigate to="/tu-truyen" replace />} />
              <Route path="/xep-hang" element={<LeaderboardPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/me" element={<MePage />} />
              <Route path="/dieu-khoan" element={<TermsPage />} />
              <Route path="/chinh-sach-bao-mat" element={<PrivacyPage />} />
              <Route path="/admin" element={<AdminPage />} />
              
              {/* Fallback to Dashboard */}
              <Route path="*" element={<DashboardPage />} />
            </Routes>
            </Suspense>
          </main>
          <Footer />
          <PwaInstallPrompt />
          <MobileBottomNav />
          <HandsFreePlayer />
          {searchOpen && (
            <Suspense fallback={null}>
              <GlobalSearchModal isOpen={searchOpen} onClose={closeSearch} />
            </Suspense>
          )}
        </div>
        </IpAccessGuard>
      </HandsFreePlayerProvider>
    </BrowserRouter>
  );
};

export default App;
