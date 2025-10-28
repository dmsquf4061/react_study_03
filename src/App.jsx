import reactLogo from './assets/react.svg'
import './App.css'

import Gnb from './components/common/gnb';
import LandingPage from './pages/landing';
import SeriesPage from './pages/series';
import ContentPage from './pages/content';
import VideoPage from './pages/video';
import LoginPage from './pages/login';
import QuestionPage from './pages/question'
import FootergPage from './pages/footer';

function App() {
  return (
    <div className="flex flex-col w-full h-full bg-black">
      {/* 헤더 */}
      <Gnb />

      {/* 본문 */}
      <LandingPage />

      {/* 시리즈 */}
      <SeriesPage />

      {/* 콘텐츠 */}
      <ContentPage />

      {/* 비디오 */}
      <VideoPage />

      {/* 티빙 로그인 */}
      <LoginPage />

      {/* 쿠폰 등록하기 */}
      <QuestionPage />

      {/* 풋터 */}
      <FootergPage />
    </div>
  )
}

export default App
