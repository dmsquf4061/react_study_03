
import './App.css'

import Gnb from './components/common/gnb';
import LandingPage from './pages/landing';
import SeriesPage from './components/pages/landing/section/series';
import ContentPage from './components/pages/landing/section/content';
import VideoSection from './components/pages/landing/section/video';
import CtaSection from './components/pages/landing/section/cta';
import QnaSection from './components/pages/landing/section/qna'
import Footer from './components/common/footer';

import { useEffect, useState } from 'react'; 

function App() {
  // const [box, setBox] = useState("red-900");
  // const [text, setText] = useState("레드");

  // const boxButton = () => {
  //   console.log("클릭됨");

  //   if (box === "red-900") {
  //     setText("스톤");
  //     setBox("stone-500");   
  //   } else {
  //     setText("레드");
  //     setBox("red-900");    
  //   }
  // };

  // useEffect(() => {
  //   console.log("클릭 두번 됨");
  // }, [box]);


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
      <VideoSection />

      {/* 티빙 로그인 */}
      <CtaSection />

      {/* 쿠폰 등록하기 */}
      <QnaSection />

      {/* 풋터 */}
      <Footer />

      {/* <div
        className={`w-[400px] h-[400px] rounded-sm bg-${box} cursor-pointer`}
        onClick={boxButton}
      >
        {text}
      </div> */}
    </div>
  )
}

export default App
