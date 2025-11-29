import ContentImg1 from '/public/resource/content/img1.webp'
import ContentImg2 from '/public/resource/content/img2.webp'
import ContentImg3 from '/public/resource/content/img3.webp'
import ContentImg4 from '/public/resource/content/img4.webp'
import ContentImg5 from '/public/resource/content/img5.webp'
import ContentImg6 from '/public/resource/content/img6.webp'
import ContentImg7 from '/public/resource/content/img7.webp'
import ContentImg8 from '/public/resource/content/img8.webp'
import ContentImg9 from '/public/resource/content/img9.webp'
import ContentImg10 from '/public/resource/content/img10.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ContentSection() {

  const slides = [
    [ContentImg1, ContentImg2, ContentImg3, ContentImg4, ContentImg5],
    [ContentImg6, ContentImg7, ContentImg8, ContentImg9, ContentImg10]
  ];

  return (
    <section className="flex flex-col justify-center w-full h-[380px] md:h-[1000px] gap-10 md:gap-15">

      <div className="flex flex-col gap-1 md:gap-8">
        <h1 className="text-white font-bold text-xl md:text-5xl">요즘 뜨는 모든 콘텐츠</h1>
        <div className="flex flex-col text-white text-xs md:text-2xl gap-1">
          <span>tvN·JTBC·Mnet 프로그램, 영화,</span>
          <span>해외 시리즈, 애니메이션, 스포츠</span>
        </div>
      </div>

      <div className="flex flex-col">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          slidesPerView={1}
          allowTouchMove={false} // 끌어서 넘기기 방지
          className="w-xs md:w-full bg-white flex items-center rounded-2xl md:rounded-none"
        >
          {slides.map((imgSet, i) => (
            <SwiperSlide key={i}>
              <div className="relative flex h-[65px] md:h-[300px] w-full overflow-hidden">

                <ul className="flex gap-2 md:gap-4">
                  {imgSet.map((img, idx) => (
                    <li key={idx} className="rounded-sm md:rounded-lg overflow-hidden">
                      <img src={img} alt="" />
                    </li>
                  ))}
                </ul>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default ContentSection;
