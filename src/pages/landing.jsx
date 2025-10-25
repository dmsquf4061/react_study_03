function LandingPage() {
  return (
    <main className="w-full">
        <section className="relative flex flex-col w-full items-center">
            {/* 메인 히어로 백그라운드 */}
            <div className="absolute top-0 left-0 w-full max-h-[80vh] overflow-hidden">
                <div className="z-10 absolute top-0 left-0 flex flex-col w-full h-full items-center justify-center">
                    {/* 메인히어로 이미지 */}
                    <div className="w-full mb-9 max-w-md">
                        <img src="/resource/mainhero/mainhero_text.png" alt="메인 히어로 이미지" />
                    </div>
                    {/* 지금 보러가기 */}
                    <div className="w-full h-16 max-w-md">
                        <button className="w-full h-full px-3 py-2 font-bold text-2xl bg-red-400 hover:bg-red-600 rounded-sm text-white transition-colors">
                            지금 보러가기
                        </button>
                    </div>
                </div>   
                <div className="z-1 absolute top-0 left-0 w-full h-full bg-black/50 bg-blur-sm"></div>
                <img src="/resource/mainhero/mainhero_bg.png" alt="메인 히어로 백그라운드" className="w-full"/>
            </div> 
        </section>
    </main>
  )
}

export default LandingPage