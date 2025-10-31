
import {Youtube, Instagram, Twitter, Facebook} from 'lucide-react'

function Footer() {
  return (
    <footer className="w-full flex flex-col px-3 md:px-18 gap-4 md:gap-8 pt-5 md:pt-10 pb-10 md:pb-15 border-t border-stone-800">
        {/* 버튼 그룹 영역 */}
        <div className="flex w-full h-full items-center justify-between">
            {/* 버튼 그룹 영역 */}
            <div className="flex flex-wrap items-center gap-2 md:gap-8 w-[50%]">
                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    고객센터
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    이용약관
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    개인정보처리방침
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    청소년 보호정책
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    법적고지
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    이벤트
                </button>

                <button className='text-[9px] md:text-lg font-medium text-stone-400 hover:text-white'>
                    인재채용
                </button>
            </div>       
            {/* 바로가기 그룹 영역 */}
            <div className="flex items-center gap-2 md:gap-5">
                <button className='flex text-[9px] md:text-lg text-stone-400 gap-2 md:gap-5 hover:text-white'>
                    브랜드 바로가기 <span>+</span><span className='text-stone-600'>｜</span>
                </button>

                <button className='flex text-[9px] md:text-lg text-stone-400 gap-2 md:gap-5 hover:text-white'>
                    그룹 계열사 바로가기 <span>+</span> 
                </button>
            </div>
        </div>
        {/* 사업자 정보 */}
        <div className='flex flex-col font-medium text-[9px] md:text-lg text-stone-500 gap-1 w-full items-start'>
            <p className='flex flex-wrap text-left'><span>대표이사 : 최주희 사업자정보확인 </span><span>사업자등록번호 : 188-88-01893 </span><span>통신판매신고번호 : 2020-서울마포-3641호</span></p>
            <p className='flex flex-wrap text-left'><span>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동) </span><span>호스팅사업자 : 아마존웹서비시즈코리아 유한책임회사</span></p>
            <p className='flex flex-wrap text-left'><span>고객센터 (평일 09시~18시/공휴일 휴무) 챗봇/채팅 상담 1:1게시판 문의 대표메일 : tving@cj.net </span><span>유료 ARS : 1670-1525 (음성/메시지 안내)</span></p>
            <p className='flex flex-wrap text-left'><span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780 </span><span>Mnet 고객센터(방송편성문의) : 1855-1631</span></p>
        </div>
        {/* 소셜미디어 버튼 영역 */}
        <div className="flex items-center gap-2">
            <a href="/" className='flex w-[30px] h-[30px] md:w-[50px] md:h-[50px] items-center justify-center text-stone-500 bg-stone-900 rounded-full'>
                <Youtube />
            </a>
            <a href="/" className='flex w-[30px] h-[30px] md:w-[50px] md:h-[50px] items-center justify-center text-stone-500 bg-stone-900 rounded-full'>
                <Instagram />
            </a>
            <a href="/" className='flex w-[30px] h-[30px] md:w-[50px] md:h-[50px] items-center justify-center text-stone-500 bg-stone-900 rounded-full'>
                <Twitter />
            </a>
            <a href="/" className='flex w-[30px] h-[30px] md:w-[50px] md:h-[50px] items-center justify-center text-stone-500 bg-stone-900 rounded-full'>
                <Facebook />
            </a>
        </div>
        <div className='font-medium text-[9px] md:text-lg text-stone-500 items-start text-left'>© TVING Corp. ALL RIGHTS RESERVED</div>
    </footer>
  )
}

export default Footer