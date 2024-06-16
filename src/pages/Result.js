import React from "react";

function Result({ score }) {
  const averageKillPerSecond = (score / 15).toFixed(2);
  let aimQuality;
  if (score >= 20) {
    aimQuality = <span style={{ color: "green" }}>God</span>;
  } else if (score >= 15) {
    aimQuality = <span style={{ color: "green" }}>Very Good</span>;
  } else if (score >= 10) {
    aimQuality = <span style={{ color: "orange" }}>Not Good Enough</span>;
  } else {
    aimQuality = <span style={{ color: "red" }}>Needs Improvement</span>;
  }

  return (
    <div className="result-container">
      <div>Your Score is {score}</div>
      <div>Average kills per second: {averageKillPerSecond}</div>
      <div>Your aim quality is {aimQuality}</div>
      <div>Accuracy: {(score / 20 * 100).toFixed(1)}%</div>
      <button
        className="start-button"
        onClick={() => window.location.reload(true)}
      >
        Go to home
      </button>
    </div>
  );
}

export default Result;
