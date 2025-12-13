import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react";

function LoginTwo() {


  const [valid, setValid] = useState(false);
  const [idValue, setIdValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('valid', valid);
  }, [valid]);

  const loginBtn = async () => {
    setIsLoading(true);
  };
  const handleId = (event) => {
    setIdValue(event.target.value);
  };

  useEffect(() => {
    console.log(`현재 id : ${idValue}`);
    console.log(`현재 pw : ${passwordValue}`);
    if (idValue && passwordValue) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [idValue, passwordValue]);

  const handlePassword = (event) => {
    setPasswordValue(event.target.value);
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
          className={`flex w-full text-center items-center justify-center ${valid
            ? 'bg-red-400 hover:bg-red-500 text-white cursor-pointer'
            : 'bg-stone-100/30 text-stone-400 !cursor-default'
            } p-2 rounded-lg font-bold py-5 px-5`}
          disabled={!valid}
          onClick={loginBtn}
        >
          {isLoading ? <LoaderCircle className='animate-spin' /> : '로그인하기'}
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

export default LoginTwo;