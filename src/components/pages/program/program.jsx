import { useState } from "react";
import { Play, Plus, Home, Search, Tv, Film, User, Clock, Settings } from "lucide-react";
import ProgramLogo from '/public/resource/program/tving.png';
import ProgramImg0 from '/public/resource/program/img0.webp';

function Program() {
  const programList = [
    { id: 1, title: "유미의 세포들 2", images: "./public/resource/program/img00.webp" },
    { id: 2, title: "술꾼도시여자들", images: "./public/resource/program/img1.webp" },
    { id: 3, title: "우리들의 블루스", images: "./public/resource/program/img2.webp" },
    { id: 4, title: "나의 아저씨", images: "./public/resource/program/img3.webp" },
    { id: 5, title: "잠", images: "./public/resource/program/img4.webp" },
    { id: 6, title: "응답하라 1988", images: "./public/resource/program/img5.webp" },
    { id: 7, title: "냉장고를 부탁해", images: "./public/resource/program/img6.webp" },
    { id: 8, title: "도깨비", images: "./public/resource/program/img7.webp" },
    { id: 9, title: "나는 SOLO, 그 후 사랑은 계속된다", images: "./public/resource/program/img8.webp" },
    { id: 10, title: "콩콩팡팡", images: "./public/resource/program/img9.webp" },
  ];

  const menuList = [
    { id: 'search', icon: <Search /> },
    { id: 'home', icon: <Home /> },
    { id: 'tv', icon: <Tv /> },
    { id: 'film', icon: <Film /> },
    { id: 'clock', icon: <Clock /> },
  ];

  const [activeMenu, setActiveMenu] = useState('home');

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      
      {/* 왼쪽 사이드바 */}
      <aside className="fixed left-0 top-0 z-50 flex flex-col items-center w-16 h-full bg-black border-r border-stone-800">
        {/* 로고 */}
        <div className="absolute top-6 w-full h-12 overflow-hidden p-3">
          <img
            src={ProgramLogo}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* 메뉴 */}
        <div className="flex justify-center flex-col w-full h-full gap-4">
          {menuList.map((menu) => (
            <button
              onClick={() => setActiveMenu(menu.id)}
              className="relative w-full h-12 flex items-center justify-center group"
            >
              {/* 활성 표시 바 */}
              {activeMenu === menu.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-full bg-red-500 rounded-full" />
              )}

              {/* 아이콘 */}
              <span
                className={`z-10 transition-colors
                  ${activeMenu === menu.id
                    ? 'text-white'
                    : 'text-stone-500 group-hover:text-white'}
                `}
              >
                {menu.icon}
              </span>
            </button>

          ))}
        </div>

        {/* 하단 설정 */}
        <div className="absolute bottom-6 w-full">
          <button
              onClick={() => setActiveMenu('settings')}
              className="relative w-full h-12 flex items-center justify-center group"
            >
              {/* 활성 표시 바 */}
              {activeMenu === 'settings' && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-full bg-red-500 rounded-full" />
              )}
            <span
                className={`z-10 transition-colors
                  ${activeMenu === 'settings'
                    ? 'text-white'
                    : 'text-stone-500 group-hover:text-white'}
                `}
              >
                <Settings />
              </span>
            
          </button>
        </div>
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="flex flex-col ml-16 w-full overflow-x-hidden gap-12">
        {/* 히어로 영역 */}
        <section className="relative w-full h-[600px] flex">
          {/* 좌측 텍스트 */}
          <div className="z-10 w-[40%] px-16 flex flex-col justify-center gap-7 text-left">
            <div className="flex items-center h-4 gap-1">
              <img
                  src={ProgramLogo}
                  alt="logo"
                  className="h-full c"
                />
                <p className="text-2xl font-bold">ORIGINAL</p>
            </div>
            <h1 className="text-7xl font-bold">유미의 세포들 2</h1>
            <div className="">
              <p className="text-stone-600 max-w-xl">
                드라마 ｜ 2022 ｜ 시즌 2개
              </p>
              <p className="text-stone-500 max-w-xl mt-2 leading-[28px]">
                세포들과 함께 먹고 사랑하고 성장하는 평범한 유미의 이야기.
                새로운 일과 사랑을 통해 변화하고 성장하는 유미의 이야기가 다시 시작된다.
              </p>
            </div>
            {/* <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded font-bold">
                <Play size={18} />
                재생
              </button>

              <button className="flex items-center gap-2 bg-stone-700 px-6 py-3 rounded">
                <Plus size={18} />
                찜하기
              </button>
            </div> */}
          </div>

          {/* 우측 이미지 */}
          <div className="absolute top-0 right-0 w-[60%] h-full">
            <img
              src={ProgramImg0}
              alt="유미의 세포들2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/0 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-transparent" />
          </div>
        </section>

        {/* 하단 프로그램 리스트 */}
        {/* 인기 프로그램 */}
        <section className="relative px-10 h-auto">
          <h2 className="text-xl font-bold mb-4 text-left">인기 프로그램</h2>

          <ul className="flex gap-4 overflow-x-auto">
            {programList.map((item) => (
              <li
                key={item.id}
                className="min-w-[180px] w-[300px] cursor-pointer relative"
              >
                <div className="w-full rounded-lg overflow-hidden">  
                  <img
                      src={item.images}
                      alt={item.title}
                      className="object-contain hover:scale-105 transition"
                    /> 
                </div>   
                <p className="text-8xl absolute z-10 top-2 left-4 font-bold italic skew-x-[-10deg] drop-shadow-2xl">{item.id}</p> 
              </li>
            ))}
          </ul>
        </section>
        {/* 티빙님이 시청중인 콘텐츠 */}
        <section className="relative px-10 h-auto">
          <h2 className="text-xl font-bold mb-4 text-left">티빙님이 시청중인 콘텐츠</h2>

          <ul className="flex gap-4 overflow-x-auto">
            {programList.map((item) => (
              <li
                key={item.id}
                className="min-w-[180px] w-[300px] cursor-pointer relative"
              >
                <div className="w-full rounded-lg overflow-hidden">  
                  <img
                      src={item.images}
                      alt={item.title}
                      className="object-contain hover:scale-105 transition"
                    /> 
                </div>   
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Program;
