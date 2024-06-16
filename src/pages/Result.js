import React from "react";

function Result({ score }) {
  const averageKillPerSecond = (score / 15).toFixed(2);

  // Determine aim quality based on score
  let aimQuality;
  if (score >= 10) {
    aimQuality = <span style={{ color: "green" }}>Excellent</span>;
  } else if (score >= 8) {
    aimQuality = <span style={{ color: "green" }}>Very Good</span>;
  } else if (score >= 6) {
    aimQuality = <span style={{ color: "orange" }}>Good</span>;
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
