import React from "react";

function StartScreen({ onStart }) {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url('/backgroound.jpg')`, // 오타 아님. 실제 파일명 기준!
      }}
    >
      <div className="w-full max-w-[375px] px-4 flex flex-col items-center text-white text-center font-[Pretendard]">
        <img
          src="/matchup CI.png"
          alt="매치업 로고"
          className="w-20 mb-6"
        />

        <p className="text-base font-medium mb-1">
          가장 빠른 사람은 누구?!
        </p>

        <h1 className="text-2xl md:text-3xl font-extrabold mb-6">
          축구공 연타 대결 ⚽
        </h1>

        <button onClick={onStart}>
          <img
            src="/soccerball.png"
            alt="축구공"
            className="w-40 h-40 hover:scale-105 active:scale-95 transition-transform duration-200"
          />
        </button>

        <p className="text-base font-medium mt-6">
          공을 누르면 시작해요!
        </p>
      </div>
    </div>
  );
}

export default StartScreen;
