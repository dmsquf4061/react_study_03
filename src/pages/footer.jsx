import viteLogo from '/vite.svg'

function FootergPage() {
  return (
    <footer className="w-full flex flex-col">
        {/* 버튼 그룹 영역 */}
        <div className="flex w-full h-full items-center justify-between px-6">
            {/* 버튼 그룹 영역 */}
            <div className="flex items-center gap-2">
                <button className='px-3 py-2 font-bold bg-red-400 hover:bg-red-500 rounded-lg text-white transition-colors'>
                    고객센터
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    이용약관
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    개인정보처리방침
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    청소년 보호정책
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    법적고지
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    이벤트
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    인재채용
                </button>
            </div>       
            {/* 바로가기 그룹 영역 */}
            <div className="flex items-center gap-2">
                <button className='px-3 py-2 font-bold bg-red-400 hover:bg-red-500 rounded-lg text-white transition-colors'>
                    브랜드 바로가기 + 
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    그룹 계열사 바로가기 +
                </button>
            </div>
        </div>
        <pre>대표이사 : 최주희 사업자정보확인 사업자등록번호 : 188-88-01893 통신판매신고번호 : 2020-서울마포-3641호
사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동) 호스팅사업자 : 아마존웹서비시즈코리아 유한책임회사
고객센터 (평일 09시~18시/공휴일 휴무) 챗봇/채팅 상담 1:1게시판 문의 대표메일 : tving@cj.net 유료 ARS : 1670-1525 (음성/메시지 안내)
ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780 Mnet 고객센터(방송편성문의) : 1855-1631
        </pre>
        {/* 소셜미디어 버튼 영역 */}
        <div className="flex items-center gap-2">
            <a href="/" className='flex items-center'>
                <img src={viteLogo} alt="로고" />
            </a>
            <a href="/" className='flex items-center'>
                <img src={viteLogo} alt="로고" />
            </a>
            <a href="/" className='flex items-center'>
                <img src={viteLogo} alt="로고" />
            </a>
            <a href="/" className='flex items-center'>
                <img src={viteLogo} alt="로고" />
            </a>
        </div>
    </footer>
  )
}

export default FootergPage