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

  // START
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
        {/* 안내 텍스트 */}
        <div
          style={{ marginTop: 100, textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
        >
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
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter =
              "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter =
              "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter =
              "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter =
              "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
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

  // COUNTDOWN
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

  // GAME
  if (screen === "game") {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {/* 진행바 */}
        <div
          style={{
            width: "90%",
            height: 12,
            background: "rgba(255,255,255,0.3)",
            borderRadius: 6,
            overflow: "hidden",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #A4FD46, #FE96C5)",
              animation: "progress 5s linear forwards",
            }}
          />
        </div>

        {/* 연타용 축구공 (중앙) */}
        <img
          src={`${PUB}/soccerball.png`}
          alt="클릭공"
          onClick={() => setScore((s) => s + 1)}
          style={{
            width: "60%",
            maxWidth: 200,
            aspectRatio: "1 / 1",
            objectFit: "contain",
            cursor: "pointer",
            filter: "drop-shadow(0 8px 12px rgba(0,0,0,0.5))",
            transition: "transform 0.1s ease, filter 0.2s ease",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter =
              "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter =
              "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = "scale(0.93)";
            e.currentTarget.style.filter =
              "drop-shadow(0 4px 6px rgba(0,0,0,0.7))";
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter =
              "drop-shadow(0 8px 12px rgba(0,0,0,0.5))";
          }}
        />
      </div>
    );
  }

  // RESULT OVERLAY
  if (screen === "resultOverlay") {
    return (
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            게임 끝!
          </h1>
        </div>
      </div>
    );
  }

  // RESULT DETAIL
  if (screen === "resultDetail") {
    return (
      <div
        style={{
          width: "100%",
          padding: "24px 16px",
          boxSizing: "border-box",
          textAlign: "center",
          color: "#FFFFFF",
        }}
      >
        <p style={{ fontSize: 14, marginBottom: 8 }}>나의 점수는 …</p>
        <p style={{ fontSize: 36, fontWeight: "bold", margin: "4px 0" }}>
          {score}회
        </p>
        <p style={{ fontSize: 14, marginBottom: 16 }}>혹시 … 손흥민 …?</p>
        <button
          onClick={() => {
            setScreen("start");
            setCount(5);
            setScore(0);
          }}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "#A4FD46",
            color: "#000000",
            border: "none",
            borderRadius: 9999,
            fontSize: 16,
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          다시하기 ↻
        </button>
      </div>
    );
  }

  return null;
}
