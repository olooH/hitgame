import React, { useState, useEffect } from "react";
import StartScreen from "./components/StartScreen";

function App() {
  const [screen, setScreen] = useState("start"); // start → countdown → game → resultOverlay → resultDetail
  const [count, setCount] = useState(5);
  const [timeLeft, setTimeLeft] = useState(5);
  const [score, setScore] = useState(0);

  // 1) 카운트다운
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

  // 2) 게임 타이머 → ResultOverlay → ResultDetail
  useEffect(() => {
    if (screen === "game" && timeLeft > 0) {
      const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(t);
    }
    if (screen === "game" && timeLeft === 0) {
      setScreen("resultOverlay");
      // 1.5초 뒤 상세 결과로 이동
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
      {/* 모바일 프레임 */}
      <div
        style={{
          width: "100%",
          maxWidth: "375px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* 콘텐츠 영역: game/countdown 은 overflow hidden, detail 은 auto */}
        <div
          style={{
            flex: 1,
            overflow: isDetail ? "auto" : "hidden",
          }}
        >
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

        {/* 결과 상세에서만 푸터 노출 */}
        {isDetail && (
          <footer
            style={{
              flex: 0,
              background: "#f2f2f2",
              padding: "16px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "24px",
                marginBottom: "16px",
              }}
            >
              <button style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>💬</button>
              <button style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer" }}>🔗</button>
            </div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#333", margin: "8px 0 4px" }}>
              NO.1 풋살/축구 어플리케이션
            </p>
            <p style={{ textAlign: "center", fontSize: 16, fontWeight: 700, margin: "0 0 16px" }}>
              매치업 다운로드하기
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "16px" }}>
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
