import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';


function QnaSection() {
    const [desc, setDesc] = useState('close');

    const toggleDesc = () => {
        console.log ('이놈은 토글Desc 함수');
        if (desc == 'close') {
            setDesc('open');
        } else {
            setDesc ('close');
        }
    }

    useEffect(() => {
        console.log ('desc 변경됨');
        console.log (desc);
    }, [desc]);

    return (
        <section className="flex flex-col w-full gap-8 md:gap-15 items-center pt-30 pb-10 md:pb-30">
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-white font-bold text-xl md:text-5xl">자주 찾는 질문</h1>
            </div>
            <div className="w-full p-3 md:p-20">
                <div>
                    <div className="flex justify-between items-center h-14 md:h-25">
                        <div className='text-stone-200 text-[10px] md:text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                        <button className='flex text-stone-600 w-[15px] md:w-[35px]' onClick={toggleDesc}>
                            {
                                desc === 'close' ? <ChevronDown size={36} /> : <ChevronUp size={36} />
                            }
                        </button>
                    </div>
                    <div className={`text-[10px] md:text-2xl text-left text-stone-500 pb-4 md:pb-6 ${desc == 'close' ? 'hidden' : ''}`}>
                        티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                    </div>
                </div>
                <div className="border-t border-stone-800">
                    <div className="flex justify-between items-center h-14 md:h-25">
                        <div className='text-stone-200 text-[10px] md:text-3xl'>[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기</div>
                        <button className='flex text-stone-600 w-[15px] md:w-[35px]' onClick={toggleDesc}>
                            {
                                desc === 'close' ? <ChevronDown size={36} /> : <ChevronUp size={36} />
                            }
                        </button>
                    </div>
                    <div className={`text-[10px] md:text-2xl text-left text-stone-500 pb-4 md:pb-6 ${desc == 'close' ? 'hidden' : ''}`}>
                        티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기
                    </div>
                </div>
            </div>
            <div className="w-full h-10 md:h-20 max-w-lg px-3">
                <button className="w-full h-full px-3 py-2 font-bold text-[11px] md:text-2xl bg-white rounded-sm text-black transition-colors hover:bg-stone-300">
                    쿠폰 등록하기
                </button>
            </div>
        </section>
    )
}

export default QnaSection