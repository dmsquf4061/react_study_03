import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SeriesImg1 from '/public/resource/series/img1.webp'
import SeriesImg2 from '/public/resource/series/img2.jpg'
import SeriesImg3 from '/public/resource/series/img3.jpg'

function SeriesPage() {
  return (
    <section className="flex flex-col justify-center w-full h-[380px] md:h-[1000px] gap-10 md:gap-15">
        <div className="flex flex-col gap-1 md:gap-8">
            <h1 className="text-white font-bold text-xl md:text-5xl">티빙 오리지널 시리즈</h1>
            <div className="flex flex-col text-white text-xs md:text-2xl gap-1">
                <span>오직 티빙에서만 만날 수 있는</span>
                <span>오리지널 콘텐츠를 감상해 보세요.</span>
            </div>
        </div>
        <Swiper className='w-xs md:w-full bg-white flex items-center rounded-2xl md:rounded-none'
            spaceBetween={0}
            slidesPerView={3}
            breakpoints={{

            0: {
            slidesPerView: 1,   
            spaceBetween: 0,
            },

            768: {
            slidesPerView: 3,   
            spaceBetween: 0,
            }
        }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={SeriesImg2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={SeriesImg1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={SeriesImg3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={SeriesImg1} alt="" />
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default SeriesPage