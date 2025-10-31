import TvingLogoW from '/tving_logo_w.svg'

function CtaSection() {
  return (
    <section className="flex flex-col w-full pt-15 md:pt-30">
        <div className="flex flex-col gap-1 md:gap-8 items-center">
            <div className="w-[100px] md:w-xs">
                <img className="w-full" src={TvingLogoW} alt="로고" />
            </div>
            <h1 className="text-white font-bold text-xl md:text-5xl">지금 시작해보세요</h1>
            <div className="w-full h-10 md:h-20 max-w-[200px] md:max-w-lg mt-5">
                <button className="w-full h-full px-3 py-2 font-bold text-[11px] md:text-2xl bg-red-500 hover:bg-red-600 rounded-sm text-white transition-colors">
                    티빙 로그인
                </button>
            </div>
        </div>
    </section>
  )
}

export default CtaSection