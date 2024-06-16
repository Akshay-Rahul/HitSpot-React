import React, { useState } from "react";
import Home from "./components/Home/Home";
import RegAim from "./pages/RegAim";
import Result from "./pages/Result";

function App() {
  const [screen, setScreen] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const storedHighScore = localStorage.getItem("highScore");
    return storedHighScore ? parseInt(storedHighScore) : 0;
  });

  const regAim = () => setScreen(1);
  const goHome = () => setScreen(0);

  const updateHighScore = (newHighScore) => {
    setHighScore(newHighScore);
    localStorage.setItem("highScore", newHighScore.toString());
  };

  return (
    <div>
      {screen === 0 && <Home regAim={regAim} highScore={highScore} />}
      {screen === 1 && <RegAim goHome={goHome} updateHighScore={updateHighScore} />}
      {screen === 2 && <Result score={highScore} goHome={goHome} />}
    </div>
  );
}

export default App;
