import { useState, useEffect } from "react";

function Login() {
  // 1단계 아이디/패스워드에 입력된 값이 유효한지 체크할 수 있어야함
  // 그러려면 각 Input에 입력된 값들이, 변경될 때마다 실시간으로 저장되어, 유효성 검사를 해야함
  // 유효성 검사는 코드에서 우리의 로직으로 해야되니까, 그럼 각각에 입력된 값을 코드레벨에서 처리하는 과정이 필요함.
  // 근데 기존 Input은 입력을 아무리해도, 코드로 받아올 수 없었음.
  // 그래서, useState, useEffect(그리고 핸들러들까지)를 통해, 각각에 입력된 값을 뽑아내는 작업을 하기 위한 과정이 피룡함.

  // 2단계
  // 위에서 뽑은 각각의 값을 유효성검사처리해서.
  // 최종적으로 모두 유효한지 확인해서 valid 상태에서 true / false로 저장함.
  // 그리고, 그 결과에 따라 로그인버튼을 최종적으로 활성화 / 비활성화 함.

  const [valid, setValid] = useState(false);
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  useEffect(() => {
    console.log('valid', valid);
  }, [valid]);

  // 아이디 핸들러
  const handleId = (e) => {
    console.log(e.target.value);

    // 내가 입력한 값이 저장되는
    setIdValue(e.target.value);
  };

  // 비밀번호 핸들러
  const handlePassword = (e) => {
    console.log(e.target.value);

    // 내가 입력한 값이 저장되는
    setPasswordValue(e.target.value);
  };

  // 전체 유효성 검사 결과
  useEffect(() => {
    // 유효성 총 결과
    //console.log('와 입력됐다 뭔지몰라도...');

    if (idValue !== '' && passwordValue !== '') {
      // 유효성이 통과
      setValid(true);
    } else {
      // 유효성이 미통과
      setValid(false);
    }
  }, [idValue, passwordValue]);

  const loginBtn = () => {
    
  if (idValue === "1111") {
    return alert("접근금지되었습니다."); 
  }

  alert(`${idValue}님 환영합니다`);
};
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md">
        <div className="text-white text-2xl font-bold mb-6">TVING ID 로그인</div>

        {/* 아이디 블록 */}
        <div className="mb-4">
          <label className="block text-stone-300 mb-2" htmlFor="username"></label>
          <input
            id="username"
            type="text"
            placeholder="아이디"
            value={idValue}
            onChange={handleId}
            className="w-full py-5 px-5 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          />
        </div>

        {/* 패스워드 블록 */}
        <div className="mb-4">
          <label className="block text-stone-300 mb-2" htmlFor="password"></label>
          <input
            id="password"
            type="text"
            placeholder="비밀번호"
            value={passwordValue}
            onChange={handlePassword}
            className="w-full py-5 px-5 rounded-lg bg-stone-900 text-white focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
          />
        </div>

        <div className="flex flex-col items-center justify-between mb-6 text-stone-300 text-sm">
          <label className="flex items-center gap-2 w-full cursor-pointer">
            <input type="checkbox" className="accent-stone-600" />
            자동 로그인
          </label>
        </div>

        {/* 로그인하기 버튼 */}
        <button
          className={`w-full ${
            valid
              ? 'bg-red-400 hover:bg-red-500 text-white cursor-pointer'
              : 'bg-stone-100/30 text-stone-400 !cursor-default'
          } p-2 rounded-lg font-bold py-5 px-5`}
          disabled={!valid}
          onClick={loginBtn}
        >
          로그인하기
        </button>

        <div className="flex justify-around text-stone-300 text-sm mt-10">
          <a href="#" className="hover:underline border-r border-stone-400 px-9">아이디 찾기</a>
          <a href="#" className="hover:underline border-r border-stone-400 px-9">비밀번호 찾기</a>
          <a href="#" className="hover:underline px-9">회원가입</a>
        </div>
      </div>
    </div>
  );
}

export default Login;