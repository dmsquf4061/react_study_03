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

function ContentPage() {
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

            {/* 첫 번째 슬라이드 */}
            <div className="relative flex h-[65px] md:h-[300px] w-full overflow-hidden">
                <ul className="flex absolute animate-infiniteSlideOriginal">
                <li className="flex gap-2 md:gap-4">
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg1} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg2} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg3} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg4} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg5} alt="" />
                    </div>
                </li>

                {/* 복제본 */}
                <li className="flex gap-2 md:gap-4">
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg1} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg2} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg3} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg4} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg5} alt="" />
                    </div>
                </li>
                </ul>
            </div>

            {/* 두 번째 슬라이드 */}
            <div className="relative flex h-[65px] md:h-[300px] w-full overflow-hidden">
                <ul className="flex absolute animate-infiniteSlideCopy">
                <li className="flex gap-2 md:gap-4">
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg6} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg7} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg8} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg9} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg10} alt="" />
                    </div>
                </li>

                {/* 복제본 */}
                <li className="flex gap-2 md:gap-4">
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg6} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg7} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg8} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg9} alt="" />
                    </div>
                    <div className="rounded-sm md:rounded-lg overflow-hidden">
                    <img src={ContentImg10} alt="" />
                    </div>
                </li>
    </ul>
            </div>

        </div>

    </section>
  )
}

export default ContentPage