// App.js
import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import Countdown from "./components/Countdown";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [screen, setScreen] = useState("start"); // start → countdown → game → result
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-green-50 flex justify-center items-center">
      {screen === "start" && <StartScreen onStart={() => setScreen("countdown")} />}
      {screen === "countdown" && (
        <Countdown
          onFinish={() => setScreen("game")}
        />
      )}
      {screen === "game" && (
        <GameScreen
          onFinish={(finalScore) => {
            setScore(finalScore);
            setScreen("result");
          }}
        />
      )}
      {screen === "result" && (
        <ResultScreen
          score={score}
          onRetry={() => {
            setScore(0);
            setScreen("countdown");
          }}
        />
      )}
    </div>
  );
}

export default App;
