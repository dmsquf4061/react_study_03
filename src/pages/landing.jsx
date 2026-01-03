import { useState, useEffect } from "react";

import Gnb from '../components/common/gnb';
import MainSection from '../components/pages/landing/section/main';
import SeriesSection from '../components/pages/landing/section/series';
import ContentSection from '../components/pages/landing/section/content';
import VideoSection from '../components/pages/landing/section/video';
import CtaSection from '../components/pages/landing/section/cta';
import QnaSection from '../components/pages/landing/section/qna'
import Footer from '../components/common/footer';
import CouponModal from '../components/pages/landing/coupon/couponModal';

function LandingPage() {
  const [valid, setValid] = useState(false);
  const [couponValue, setCouponValue] = useState('');
  const [modalClose, setModalClose] = useState(true);

  const handleCoupon = (e) => {
    setCouponValue(e.target.value);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modalWrapper') {
      console.log('모달입니다');
      setModalClose(true);
    }
  };

  // 모달을 닫기만 하는 기능
  const handleClose = (e) => {
    setModalClose(true);
  };

  // 모달을 열기만 하는 기능
  const handleOpen = (e) => {
    setModalClose(false);
  };

  useEffect(() => {
    if (couponValue.length >= 10) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [couponValue]);


  return (
    <div className={`flex flex-col w-full bg-black ${!modalClose ? 'h-screen overflow-hidden' : 'h-full'}`}>
      {/* 헤더 */}
      <Gnb />

      {/* 본문 섹션 */}
      <MainSection />

      {/* 시리즈 섹션 */}
      <SeriesSection />

      {/* 콘텐츠 섹션 */}
      <ContentSection />

      {/* 비디오 섹션 */}
      <VideoSection />

      {/* 티빙 로그인 섹션 */}
      <CtaSection />

      {/* QNA 섹션 */}
      <QnaSection handleOpen={handleOpen} />

      {/* 풋터 */}
      <Footer />

      {/* 쿠폰 모달 */}
      <CouponModal 
        couponValue={couponValue}
        valid={valid}
        modalClose={modalClose}
        handleCoupon={handleCoupon}
        handleOutsideClick={handleOutsideClick}
        handleClose={handleClose}
      />
    </div>
  )
}

export default LandingPage;