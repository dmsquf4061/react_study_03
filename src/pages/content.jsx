import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function ContentPage() {
  return (
    <section className="flex flex-col w-full gap-15 pt-30">
        <div className="flex flex-col gap-8">
            <h1 className="text-white font-bold text-5xl">요즘 뜨는 모든 콘텐츠</h1>
            <div className="flex flex-col text-white text-2xl gap-1">
                <span>tvN·JTBC·Mnet 프로그램, 영화,</span>
                <span>해외 시리즈, 애니메이션, 스포츠</span>
            </div>
        </div>
        <Swiper className='w-full h-120 bg-white flex items-center'
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    </section>
  )
}

export default ContentPage