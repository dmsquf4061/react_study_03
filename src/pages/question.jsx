import { ChevronDown } from 'lucide-react';


function QuestionPage() {
  return (
    <section className="flex flex-col w-full gap-15 items-center pt-30 pb-30">
        <div className="flex flex-col gap-8 items-center">
            <h1 className="text-white font-bold text-5xl">자주 찾는 질문</h1>
        </div>
        <div className="w-full p-20">
            <div className="">
                <div className="flex justify-between items-center h-25">
                    <div className='text-white text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                    <div className='text-stone-500'>
                        <ChevronDown size={36} />
                    </div>
                </div>
                <div className='text-left text-stone-500 hidden'>
                    티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                </div>
            </div>
            <div className="border-t border-stone-800">
                <div className="flex justify-between items-center h-25">
                    <div className='text-white text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                    <div className='text-stone-500'>
                        <ChevronDown size={36} />
                    </div>
                </div>
                <div className='text-left text-stone-500 hidden'>
                    티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                </div>
            </div>
            <div className="border-t border-stone-800">
                <div className="flex justify-between items-center h-25">
                    <div className='text-white text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                    <div className='text-stone-500'>
                        <ChevronDown size={36} />
                    </div>
                </div>
                <div className='text-left text-stone-500 hidden'>
                    티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                </div>
            </div>
            <div className="border-t border-stone-800">
                <div className="flex justify-between items-center h-25">
                    <div className='text-white text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                    <div className='text-stone-500'>
                        <ChevronDown size={36} />
                    </div>
                </div>
                <div className='text-left text-stone-500 hidden'>
                    티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                </div>
            </div>
        </div>
        <div className="w-full h-20 max-w-lg">
            <button className="w-full h-full px-3 py-2 font-bold text-2xl bg-white rounded-sm text-black transition-colors">
                쿠폰 등록하기
            </button>
        </div>
    </section>
  )
}

export default QuestionPage