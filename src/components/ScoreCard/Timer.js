import React from "react";
import "../../App.css";

// Inline styles for the timer component
const TimerWrapperStyle = {
  position: "absolute",
  top: "20px", // Distance from the top edge of the screen
  left: "60%", // Adjusted to be slightly more to the right of center
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

const TimerLabelStyle = {
  fontSize: "0.9rem", // Slightly smaller for a modern feel
  fontWeight: "bold", // Bold for emphasis
  letterSpacing: "0.1em", // Spacing between letters for readability
  textTransform: "uppercase", // Uppercase for a modern look
};

const TimerValueStyle = {
  fontSize: "2rem", // Larger for emphasis
  fontWeight: "bold", // Bold for emphasis
};

function Timer({ timer }) {
  return (
    <div style={TimerWrapperStyle}>
      <div>
        <div style={TimerLabelStyle}>TIMER</div>
        <div style={TimerValueStyle}>{timer}</div>
      </div>
    </div>
  );
}

export default Timer;
