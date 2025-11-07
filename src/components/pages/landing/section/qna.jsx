import { ChevronDown, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const qnaData = [
        {
        title : '[기타] 티빙 고객센터 챗봇 및 실시간 채팅 상담 이용하기',
        desc : '티빙 AI 챗봇이 새롭게 오픈했어요! 365일 24시간, 언제든 셀프로 궁금한 점을 쉽고 빠르게 해결해 보세요. 챗봇만으로 해결이 어려운 경우에는 채팅 상담사에게 문의해 주세요.'},
        {
        title : '[회원] 티빙 회원가입 방법이 궁금해요.',
        desc : 'TVING 회원가입은 TVING 계정, SNS 연동 계정, CJ ONE 통합 계정으로 가입이 가능합니다. * SNS 연동 계정 종류 : Facebook, Naver, Kakao, Apple'
        },
        {
        title : '[로그인] 티빙 로그인 방법이 궁금해요.',
        desc : 'TVING WEB과 APP은 아래와 같은 방법으로 로그인이 가능합니다.'
        },
        {
        title : '[로그인] 자동 로그아우수이 되었는데, 제 계정을 모르겠어요.',
        desc : 'APP과 PC WEB 계정 선택 화면에서 최근에 마지막으로 로그인하신 계정을 확인하실 수 있습니다. 최근 로그인하신 계정을 선택하여 주시고, 혹시라도 일치하는 회원정보가 없다는 알림 메시지가 나온다면 아래 사항을 확인하여 주세요.'
        },
        {
        title : '[로그인] 이용권이 있는 계정이 무엇인지 찾고 싶어요.',
        desc : '유료 가입한 계정을 찾고 싶을 때, 아래 방법으로 계정을 찾으신 후 계정 유형을 선택하여 로그인하여 주시기 바랍니다.'
        },
        {
        title : '[로그인] 로그인이 안될 때 고객문의를 남길 수 있는 방법이 있나요?',
        desc : '로그인이 되지 않으시는 경우 아래 티빙 대표메일로 이메일 문의를 남겨주시면 확인 후 답볍드리겠습니다.'
        },
        {
        title : '[계정] 타인과 계정을 공유할 수 있나요?',
        desc : '티빙 계정은 티빙 이용약관에 따라, 본인 외 제 3자가 이용할 수 없는 것을 원칙으로 합니다. 2025년 4월 2일부터 시행되는 계정 공유 정책에 따라 회원님과 함께 거주하는 동일가구 구성원에 한하여 회원님의 계정으로 티빙 서비스 이용이 허옹됩니다. 만약, 가구 구성원이 아닌 경우 본인의 계정으로 가입하여 이용하셔야 합니다.'
        },
        {
        title : '[계정] 동일 가구 구성원과 계정 공유하여 사용하려면 어떻게 하나요?',
        desc : '2025년 4월 2일부터 시행되는 계정 공유 정책에 따라 회원님과 함께 거주하는 동일가구 구성원에 한하여 회원님의 계정으로 티빙 서비스 이용이 허용됩니다. 동일 가구 구성원의 경우 티빙 동일가구에 포함된 기기로 서비스 이용할 수 있습니다.'
        },
    ];

function QnaSection() {    

    // 첫번째
    // const [qnatoggle, setQnatoggle] = useState(null);

    // console.log ('호출됨?');

    // const toggleQna = (index) => {
    //     console.log ('index?' , index);
    //     setQnatoggle(index);
    // }
    
    // useEffect(() => {
    //     console.log ('변경됨?' , qnatoggle);
    // }, [qnatoggle]);

    // 두번째
    const [qnatoggle, setQnatoggle] = useState([false, false, false, false, false, false, false, false]);
    
    console.log ('호출됨?');

    const toggleQna = (index) => {
        console.log ('index?' , index);
        setQnatoggle((prev) => {
            return prev.map((i, idx) => {
                if (index == idx) {
                    return !i;
                } else {
                    return i;
                }
            })
        });
    };

    useEffect(() => {
        console.log ('변경됨?' , qnatoggle);
    }, [qnatoggle]);
    

    return (
        <section className="flex flex-col justify-center w-full h-auto gap-8 md:gap-15 items-center">
            {/* 타이틀 */}
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-white font-bold text-xl md:text-5xl">자주 찾는 질문</h1>
            </div>

            {/* qna 목록 */}
            <div className="w-full p-3 md:p-20">
                {/* 여기서 반복문 */}
                {
                    qnaData.map((i, index) => {
                        return (
                            <div key={i.title + '_' + index}>
                                {/* 제목 title */}
                                <div className="flex justify-between items-center h-14 md:h-25">
                                    <div className='text-stone-200 text-[10px] md:text-3xl'>{i.title}</div>
                                    <button className='flex text-stone-600 w-[15px] md:w-[35px] hover:text-stone-100' onClick={() => toggleQna(index)}>
                                        {
                                            // qnatoggle === index ? <ChevronUp size={36} /> : <ChevronDown className="text-white" size={36} />
                                            qnatoggle[index] ? <ChevronUp size={36} /> : <ChevronDown className="text-white" size={36} />
                                        }
                                    </button>
                                </div>
                                {/* 설명 desc */}
                                <div className={`text-[8px] md:text-xl text-left text-stone-500 pb-4 md:pb-6 ${qnatoggle[index] ? '' : 'hidden'}`}>
                                    {i.desc}
                                </div>
                            </div>
                        );

                    })
                }
            </div>

            {/* 쿠폰 등록 버튼 */}
            <div className="w-full h-10 md:h-20 max-w-[200px] md:max-w-lg md:mt-5 mb-10 md:mb-20">
                <button className="w-full h-full px-3 py-2 font-bold text-[11px] md:text-2xl bg-white rounded-sm text-black transition-colors hover:bg-stone-300">
                    쿠폰 등록하기
                </button>
            </div>
        </section>
    )
}

export default QnaSection