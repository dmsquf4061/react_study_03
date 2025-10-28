import TvingLogo from '/tving_logo.png'

function Gnb() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-26 bg-black/90 bg-blur-sm">
        <div className="flex w-full h-full items-center justify-between px-17">
            {/* 로고 영역 */}
            <div>
                <a href="/" className='flex items-center gap-2 w-41 h-20'>
                    <img src={TvingLogo} alt="로고" />
                    {/* <h1 className='hidden md:block text-2xl text-white'>VITE</h1> */}
                </a>
            </div>
            {/* 버튼 그룹 영역 */}
            <div className="flex items-center gap-4">
                <button className='px-3 py-2 text-lg font-bold bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors'>
                    지금 가입
                </button>

                <button className='px-3 py-2 text-lg font-bold rounded-lg hover:bg-stone-400 text-stone-200 transition-colors'>
                    로그인
                </button>

                <button className='px-3 py-2 text-lg font-bold rounded-lg hover:bg-stone-400 text-stone-200 transition-colors'>
                    이벤트
                </button>
            </div>
        </div>
    </header>
  )
}

export default Gnb