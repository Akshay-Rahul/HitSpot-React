import React from "react";
import "../../App.css";

// Inline styles for the score component
const ScoreWrapperStyle = {
  position: "absolute",
  top: "20px", // Distance from the top edge of the screen
  left: "40%", // Adjusted to be slightly left of center
  transform: "translateX(-50%)", // Center horizontally after left positioning
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "150px", // Width of the rectangular box
  height: "80px", // Height of the rectangular box
  backgroundColor: "rgba(51, 51, 51, 0.7)", // Transparent background (adjust alpha channel as needed)
  color: "#FFFFFF", // White color for the text
  fontFamily: "Arial, sans-serif", // Clean font similar to Aimlabs
  textAlign: "center",

  // Border properties added
  border: "2px solid #FFFFFF", // White border with 2px thickness
  borderRadius: "8px", // Rounded corners for a softer look
  padding: "8px", // Padding inside the border
};

const ScoreLabelStyle = {
  fontSize: "0.9rem", // Slightly smaller for a modern feel
  fontWeight: "bold", // Bold for emphasis
  letterSpacing: "0.1em", // Spacing between letters for readability
  textTransform: "uppercase", // Uppercase for a modern look
};

const ScoreValueStyle = {
  fontSize: "2rem", // Larger for emphasis
  fontWeight: "bold", // Bold for emphasis
};

function ScoreCard({ score }) {
  return (
    <div style={ScoreWrapperStyle}>
      <div>
        <div style={ScoreLabelStyle}>SCORE</div>
        <div style={ScoreValueStyle}>{score}</div>
      </div>
    </div>
  );
}

export default ScoreCard;
