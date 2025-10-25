import viteLogo from '/vite.svg'

function Gnb() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full h-23 bg-black/90 bg-blur-sm">
        <div className="flex w-full h-full items-center justify-between px-6">
            {/* 로고 영역 */}
            <div>
                <a href="/" className='flex items-center gap-2'>
                    <img src={viteLogo} alt="로고" />
                    <h1 className='hidden md:block text-2xl text-white'>VITE</h1>
                </a>
            </div>
            {/* 버튼 그룹 영역 */}
            <div className="flex items-center gap-2">
                <button className='px-3 py-2 font-bold bg-red-400 hover:bg-red-500 rounded-lg text-white transition-colors'>
                    지금 가입
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    로그인
                </button>

                <button className='px-3 py-2 font-bold rounded-lg hover:bg-slate-500 text-white transition-colors'>
                    이벤트
                </button>
            </div>
        </div>
    </header>
  )
}

export default Gnb