import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SeriesPage() {
  return (
    <section className="flex flex-col w-full gap-15">
        <div className="flex flex-col gap-8">
            <h1 className="text-white font-bold text-5xl">티빙 오리지널 시리즈</h1>
            <div className="flex flex-col text-white text-2xl gap-1">
                <span>오직 티빙에서만 만날 수 있는</span>
                <span>오리지널 콘텐츠를 감상해 보세요.</span>
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

export default SeriesPage