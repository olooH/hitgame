import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [screen, setScreen] = useState("start"); // start → countdown → game → resultOverlay → resultDetail
  const [count, setCount] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5);
  const [score, setScore] = useState(0);

  // 카운트다운 (start → countdown)
  useEffect(() => {
    if (screen === "countdown" && count > 0) {
      const timer = setTimeout(() => setCount(c => c - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (screen === "countdown" && count === 0) {
      setScreen("game");
      setTimeLeft(5);
    }
  }, [screen, count]);

  // 게임 진행 및 종료 오버레이 → 상세 결과
  useEffect(() => {
    if (screen === "game" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (screen === "game" && timeLeft === 0) {
      setScreen("resultOverlay");
      setTimeout(() => setScreen("resultDetail"), 1500);
    }
  }, [screen, timeLeft]);

  const isDetail = screen === "resultDetail";

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "375px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            overflow: isDetail ? "auto" : "hidden",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/background.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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

        {isDetail && (
          <footer
            style={{
              background: "#f2f2f2",
              padding: 16,
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 16 }}>
              <button style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>💬</button>
              <button style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>🔗</button>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#333", margin: "8px 0 4px" }}>
              NO.1 풋살/축구 어플리케이션
            </p>
            <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, margin: "0 0 16px" }}>
              매치업 다운로드하기
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 16 }}>
              <img src={`${process.env.PUBLIC_URL}/google-play.png`} alt="Google Play" style={{ height: 40 }} />
              <img src={`${process.env.PUBLIC_URL}/app-store.png`} alt="App Store" style={{ height: 40 }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="매치업 로고" style={{ height: 24 }} />
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}

export default App;
