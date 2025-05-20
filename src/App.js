import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [screen, setScreen] = useState("start");
  const [count, setCount] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5);
  const [score, setScore] = useState(0);

  // 1) 카운트다운 로직
  useEffect(() => {
    if (screen === "countdown" && count > 0) {
      const t = setTimeout(() => setCount(c => c - 1), 1000);
      return () => clearTimeout(t);
    }
    if (screen === "countdown" && count === 0) {
      setScreen("game");
      setTimeLeft(5);
    }
  }, [screen, count]);

  // 2) 게임 타이머 로직
  useEffect(() => {
    if (screen === "game" && timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(t);
    }
    if (screen === "game" && timeLeft === 0) {
      setScreen("result");
    }
  }, [screen, timeLeft]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fff",
      }}
    >
      {/* 전체 배경 + 오버레이 */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
            url(${process.env.PUBLIC_URL}/background.jpg)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* 375px 폭 고정 컨테이너, 내부 여백은 StartScreen이 처리 */}
        <div
          style={{
            width: "100%",
            maxWidth: "375px",
            height: "100%",
            position: "relative",
          }}
        >
          <StartScreen
            screen={screen}
            count={count}
            timeLeft={timeLeft}
            score={score}
            setScreen={setScreen}
            setCount={setCount}
            setScore={setScore}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
