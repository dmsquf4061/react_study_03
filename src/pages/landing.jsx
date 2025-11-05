function LandingPage() {
  return (
    <main className="w-full h-[350px] md:h-[1000px]">
        <section className="relative flex flex-col w-full items-center">
            {/* 메인 히어로 백그라운드 */}
            <div className="w-full max-h-[80vh] overflow-hidden">
                <div className="z-10 absolute top-0 left-0 flex flex-col w-full h-full items-center justify-center gap-4">
                    {/* 메인히어로 이미지 */}
                    <div className="w-full mb-2 md:mb-9 max-w-[200px] md:max-w-sm">
                        <img src="/resource/mainhero/mainhero_text.png" alt="메인 히어로 이미지" />
                    </div>
                    {/* 지금 보러가기 */}
                    <div className="w-full h-10 md:h-20 max-w-[200px] md:max-w-lg">
                        <button className="w-full h-full px-3 py-2 font-bold text-[11px] md:text-2xl bg-red-500 hover:bg-red-600 rounded-sm text-white transition-colors">
                            지금 보러가기
                        </button>
                    </div>
                </div>   
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/80 to-black/100 z-[1]"></div>
                <img src="/resource/mainhero/mainhero_bg.png" alt="메인 히어로 백그라운드" className="w-full"/>
            </div> 
        </section>
    </main>
  )
}

export default LandingPage