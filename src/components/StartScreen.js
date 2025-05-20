import React from "react";

export default function StartScreen({
  screen,
  count,
  timeLeft,
  score,
  setScreen,
  setCount,
  setScore,
}) {
  const PUB = process.env.PUBLIC_URL;

  // ===== START 화면 =====
  if (screen === "start") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          textAlign: "center",
          color: "#FFFFFF",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        {/* 로고 */}
        <img
          src={`${PUB}/logo.png`}
          alt="매치업 로고"
          style={{
            position: "absolute",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: 100,
          }}
        />

        {/* 텍스트 */}
        <div style={{ marginTop: 140, textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
          <p style={{ fontSize: 14, lineHeight: 1.2 }}>
            가장 빠른 사람은 누구?!
          </p>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "8px 0" }}>
            축구공 연타 대결 <span role="img">⚽</span>
          </h1>
        </div>

        {/* 축구공 버튼 */}
        <img
          src={`${PUB}/soccerball.png`}
          alt="축구공"
          onClick={() => setScreen("countdown")}
          style={{
            marginTop: 32,
            width: "60%",
            maxWidth: 200,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            cursor: "pointer",
            filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.5))",
            transition: "transform 0.1s ease, filter 0.2s ease",
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter = "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
          onTouchStart={e => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter = "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onTouchEnd={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
        />

        {/* 안내문 */}
        <p
          style={{
            marginTop: 28,
            fontSize: 14,
            textShadow: "0 1px 2px rgba(0,0,0,0.6)",
          }}
        >
          공을 누르면 시작해요!
        </p>
      </div>
    );
  }

  // ===== COUNTDOWN 화면 =====
  if (screen === "countdown") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          fontSize: 72,
          fontWeight: "bold",
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        {count}
      </div>
    );
  }

  // ===== GAME 화면 =====
  if (screen === "game") {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          color: "#FFFFFF",
          paddingTop: 24,
          boxSizing: "border-box",
        }}
      >
        {/* 부드러운 진행바 */}
        <div
          style={{
            width: "80%",
            height: 8,
            background: "rgba(255,255,255,0.3)",
            margin: "0 auto 16px",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              background: "#4ade80",
              animation: "progress 5s linear forwards",
            }}
          />
        </div>

        {/* 연타용 축구공 */}
        <img
          src={`${PUB}/soccerball.png`}
          alt="클릭공"
          onClick={() => setScore(s => s + 1)}
          style={{
            width: "60%",
            maxWidth: 200,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            cursor: "pointer",
            filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.5))",
            transition: "transform 0.1s ease, filter 0.2s ease",
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter = "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
          onTouchStart={e => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter = "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onTouchEnd={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
        />

        <p style={{ marginTop: 16, fontSize: 18 }}>클릭 수: {score}</p>
      </div>
    );
  }

  // ===== RESULT 화면 =====
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        color: "#FFFFFF",
        paddingTop: 24,
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 16,
          textShadow: "0 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        게임 끝!
      </h1>
      <p style={{ fontSize: 36, fontWeight: "bold" }}>{score}회</p>
      <p style={{ marginTop: 8, fontSize: 14 }}>혹시... 손흥민...?</p>
      <button
        onClick={() => {
          setScreen("start");
          setCount(5);
          setScore(0);
        }}
        style={{
          marginTop: 24,
          padding: "8px 24px",
          background: "#FFFFFF",
          color: "#000000",
          border: "none",
          borderRadius: 9999,
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        다시하기 ↻
      </button>
    </div>
  );
}
