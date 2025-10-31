
import './App.css'

import Gnb from './components/common/gnb';
import LandingPage from './pages/landing';
import SeriesPage from './components/pages/landing/section/series';
import ContentPage from './components/pages/landing/section/content';
import VideoSection from './components/pages/landing/section/video';
import CtaSection from './components/pages/landing/section/cta';
import QnaSection from './components/pages/landing/section/qna'
import Footer from './components/common/footer';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* 헤더 */}
      <Gnb />

      {/* 본문 */}
      <LandingPage />
s
      {/* 시리즈 */}
      <SeriesPage />

      {/* 콘텐츠 */}
      <ContentPage />

      {/* 비디오 */}
      <VideoSection />

      {/* 티빙 로그인 */}
      <CtaSection />

      {/* 쿠폰 등록하기 */}
      <QnaSection />

      {/* 풋터 */}
      <Footer />
    </div>
  )
}

export default App
