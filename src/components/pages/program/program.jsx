import { Play, Plus, Home, Search, Tv, Film, User, Clock } from "lucide-react";

function Program() {
  const programList = [
    { id: 1, title: "유미의 세포들 2", images: "/images/1.jpg" },
    { id: 2, title: "술꾼도시여자들", images: "/images/2.jpg" },
    { id: 3, title: "우리들의 블루스", images: "/images/3.jpg" },
    { id: 4, title: "나의 아저씨", images: "/images/4.jpg" },
    { id: 5, title: "잠", images: "/images/5.jpg" },
  ];

  return (
    <div className="flex w-full min-h-screen bg-black text-white">
      
      {/* 왼쪽 사이드바 */}
      <aside className="fixed justify-center left-0 top-0 z-50 flex flex-col items-center w-16 h-full bg-black border-r border-stone-800 py-6 gap-6 cursor-pointer">
        <Search />
        <Home />
        <Tv />
        <Film />
        <Clock />
        <User />
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="ml-16 w-full">
        {/* 히어로 영역 */}
        <section className="relative w-full h-[50vh] flex">
          {/* 좌측 텍스트 */}
          <div className="z-10 w-full px-16 flex flex-col justify-center gap-6 text-left">
            <h1 className="text-5xl font-bold">유미의 세포들 2</h1>
            <div className="">
              <p className="text-stone-300 max-w-xl">
                드라마 ｜ 2022 ｜ 시즌 2개
              </p>
              <p className="text-stone-300 max-w-xl mt-2">
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
          <div className="absolute top-0 right-0 w-full h-full">
            <img
              src="/images/#.jpg"
              alt="유미의 세포들2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
          </div>
        </section>

        {/* 하단 프로그램 리스트 */}
        <section className="px-10 h-[50vh]">
          <h2 className="text-xl font-bold mb-4 text-left">인기 프로그램</h2>

          <ul className="flex gap-4 overflow-x-auto">
            {programList.map((item) => (
              <li
                key={item.id}
                className="min-w-[180px] cursor-pointer"
              >
                <img
                  src={item.images}
                  alt={item.title}
                  className="rounded-lg hover:scale-105 transition"
                />
                <p className="mt-2 text-sm">{item.title}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Program;
