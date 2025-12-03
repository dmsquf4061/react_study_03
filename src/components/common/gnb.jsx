import TvingLogo from '/tving_logo.png'

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Gnb() {
    // 로그인 버튼
    const [login, setLogin] = useState('로그인');
    const navigate = useNavigate();

    const LoginBtn = () => {
        console.log('로그인버튼 눌렸음')
        //if (confirm('진짜로 구독해제할까요?')) navigate('/login');
        navigate('/login')
    };

    useEffect (() => {
        console.log ('변경됨');
        console.log (login);
    }, [login]);

    // 가입 버튼
    const SignUpBtn = () => {
        console.log ('클릭됨');
        alert('가입 하시오');
    };

    // 이벤트 버튼
    const EventBtn = () => {
        navigate('/event');
    };
  return (
    <header className="sticky md-fixed top-0 left-0 z-20 w-full h-11 md:h-26 bg-black/90 bg-blur-sm">
        <div className="flex w-full h-full items-center justify-between pl-2 px-3 md:px-17">
            {/* 로고 영역 */}
            <div>
                <a href="/" className='flex items-center gap-2 w-21 md:w-41'>
                    <img src={TvingLogo} alt="로고" />
                    {/* <h1 className='hidden md:block text-2xl text-white'>VITE</h1> */}
                </a>
            </div>
            {/* 버튼 그룹 영역 */}
            <div className="flex items-center gap-1 md:gap-4">
                <button className='px-2 py-1 md:;px-3 md:py-2 text-[8px] md:text-lg font-bold bg-red-500 hover:bg-red-600 rounded-lg text-white transition-colors' onClick={SignUpBtn}>
                    지금 가입
                </button>

                <button className='px-2 py-1 md:px-3 md:py-2 text-[8px] md:text-lg font-bold rounded-lg hover:bg-stone-400 text-stone-200 transition-colors' onClick={LoginBtn}>
                    로그인
                </button>

                <button className='px-2 py-1 md:px-3 md:py-2 text-[8px] md:text-lg font-bold rounded-lg hover:bg-stone-400 text-stone-200 transition-colors' onClick={EventBtn}>
                    이벤트
                </button>
            </div>
        </div>
    </header>
  )
}

export default Gnb