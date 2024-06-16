import React, { useEffect, useState } from "react";
import gunFire from "../assets/9mm.mp3";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import Timer from "../components/ScoreCard/Timer";
import TargetRegAim from "../components/Target/TargetRegAim";
import Result from "./Result";

function RegAim({ goHome, updateHighScore }) {
  const [score, setScore] = useState(0);

  const fire = () => {
    new Audio(gunFire).play();
    setScore(score + 1); // Increment score on each click
  };

  const [countdown, setCountdown] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  // Effect to handle countdown and game over logic
  useEffect(() => {
    if (countdown === 0) {
      setGameOver(true);
    } else {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // Effect to update high score in localStorage when score changes
  useEffect(() => {
    const storedHighScore = localStorage.getItem("highScore");
    const currentHighScore = storedHighScore ? parseInt(storedHighScore) : 0;
    if (score > currentHighScore) {
      updateHighScore(score); // Update high score in App.js
    }
  }, [score, updateHighScore]);

  return (
    <>
      {gameOver ? (
        <Result score={score} goHome={goHome} />
      ) : (
        <div className="container" onClick={fire}>
          <ScoreCard score={score} />
          <Timer timer={countdown} />
          <TargetRegAim score={score} setScore={setScore} />
        </div>
      )}
    </>
  );
}

export default RegAim;
