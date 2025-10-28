import viteLogo from '/vite.svg'
import {Youtube, Instagram, Twitter, Facebook} from 'lucide-react'

function FootergPage() {
  return (
    <footer className="w-full flex flex-col px-18 gap-8 pt-10 pb-15 border-t border-stone-800">
        {/* 버튼 그룹 영역 */}
        <div className="flex w-full h-full items-center justify-between">
            {/* 버튼 그룹 영역 */}
            <div className="flex items-center gap-8">
                <button className='text-lg font-medium text-stone-400'>
                    고객센터
                </button>

                <button className='text-lg font-medium text-stone-400'>
                    이용약관
                </button>

                <button className='text-lg font-bold text-stone-400'>
                    개인정보처리방침
                </button>

                <button className='text-lg font-medium text-stone-400'>
                    청소년 보호정책
                </button>

                <button className='text-lg font-medium text-stone-400'>
                    법적고지
                </button>

                <button className='text-lg font-medium text-stone-400'>
                    이벤트
                </button>

                <button className='text-lg font-medium text-stone-400'>
                    인재채용
                </button>
            </div>       
            {/* 바로가기 그룹 영역 */}
            <div className="flex items-center gap-5">
                <button className='flex text-lg text-stone-400 gap-5'>
                    브랜드 바로가기 <span>+</span><span className='text-stone-600'>｜</span>
                </button>

                <button className='flex text-lg text-stone-400 gap-5'>
                    그룹 계열사 바로가기 <span>+</span> 
                </button>
            </div>
        </div>
        {/* 사업자 정보 */}
        <div className='flex flex-col font-medium text-lg text-stone-500 gap-1 w-full items-start'>
            <span>대표이사 : 최주희 사업자정보확인 사업자등록번호 : 188-88-01893 통신판매신고번호 : 2020-서울마포-3641호</span>
            <span>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동) 호스팅사업자 : 아마존웹서비시즈코리아 유한책임회사</span>
            <span>고객센터 (평일 09시~18시/공휴일 휴무) 챗봇/채팅 상담 1:1게시판 문의 대표메일 : tving@cj.net 유료 ARS : 1670-1525 (음성/메시지 안내)</span>
            <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780 Mnet 고객센터(방송편성문의) : 1855-1631</span>
        </div>
        {/* 소셜미디어 버튼 영역 */}
        <div className="flex items-center gap-2">
            <a href="/" className='flex items-center text-stone-500 bg-stone-900 p-2 rounded-full'>
                <Youtube size={42} />
            </a>
            <a href="/" className='flex items-center text-stone-500 bg-stone-900 p-2 rounded-full'>
                <Instagram size={36} />
            </a>
            <a href="/" className='flex items-center text-stone-500 bg-stone-900 p-2 rounded-full'>
                <Twitter size={36} />
            </a>
            <a href="/" className='flex items-center text-stone-500 bg-stone-900 p-2 rounded-full'>
                <Facebook size={36} />
            </a>
        </div>
        <div className='font-medium text-lg text-stone-500 items-start'>© TVING Corp. ALL RIGHTS RESERVED</div>
    </footer>
  )
}

export default FootergPage