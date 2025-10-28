import TvingLogoW from '/tving_logo_w.svg'

function LoginPage() {
  return (
    <section className="flex flex-col w-full gap-15 pt-30">
        <div className="flex flex-col gap-8 items-center">
            <div className=''>
                <img src={TvingLogoW} alt="로고" />
            </div>
            <h1 className="text-white font-bold text-5xl">지금 시작해보세요</h1>
            <div className="w-full h-20 max-w-lg">
                <button className="w-full h-full px-3 py-2 font-bold text-2xl bg-red-500 hover:bg-red-600 rounded-sm text-white transition-colors">
                    티빙 로그인
                </button>
            </div>
        </div>
    </section>
  )
}

export default LoginPage