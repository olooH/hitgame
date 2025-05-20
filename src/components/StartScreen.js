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
  // ===== START 화면 =====
  if (screen === "start") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          color: "#fff",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        {/* 로고 */}
        <img
          src={`${process.env.PUBLIC_URL}/logo.png`}
          alt="로고"
          style={{
            position: "absolute",
            top: 24,
            left: "50%",
            transform: "translateX(-50%)",
            width: 96,
          }}
        />

        <p style={{ marginTop: 120, fontSize: 14 }}>가장 빠른 사람은 누구?!</p>
        <h1 style={{ fontSize: 24, fontWeight: "bold", margin: "4px 0" }}>
          축구공 연타 대결 ⚽
        </h1>

        <img
          src={`${process.env.PUBLIC_URL}/soccerball.png`}
          alt="축구공"
          onClick={() => setScreen("countdown")}
          style={{
            marginTop: 40,
            width: "60%",
            maxWidth: 180,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            cursor: "pointer",
          }}
        />

        <p style={{ marginTop: 24, fontSize: 14 }}>공을 누르면 시작해요!</p>
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
          color: "#fff",
          fontSize: 72,
          fontWeight: "bold",
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
          color: "#fff",
          paddingTop: 24,
          boxSizing: "border-box",
        }}
      >
        {/* 진행바 */}
        <div
          style={{
            width: "80%",
            height: 8,
            background: "rgba(255,255,255,0.3)",
            margin: "0 auto 16px",
            borderRadius: 4,
          }}
        >
          <div
            style={{
              width: `${(timeLeft / 5) * 100}%`,
              height: "100%",
              background: "#4ade80",
              borderRadius: 4,
              transition: "width 0.2s linear",
            }}
          />
        </div>

        <img
          src="/soccerball.png"
          alt="클릭공"
          onClick={() => setScore((s) => s + 1)}
          style={{
            width: "60%",
            maxWidth: 180,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            cursor: "pointer",
            transition: "transform 0.1s",
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
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
        color: "#fff",
        paddingTop: 24,
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
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
          background: "#fff",
          color: "#000",
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
