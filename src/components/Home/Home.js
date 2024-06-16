import React from "react";
import logo from "../../assets/logo.png";

function Home({ regAim, highScore }) {
  const footerStyle = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    padding: "10px 0",
  };

  return (
    <div className="container">
      <div className="home-container">
        <img src={logo} alt="Logo" />
        <div>
          <p className="start-button">Previous High Score: {highScore}</p>
        </div>
        <button className="start-button" onClick={regAim}>
          Regular Aim
          <div className="start-button-helper-text">(Click LMB to shoot)</div>
        </button>
      </div>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Yaska</p>
      </footer>
    </div>
  );
}

export default Home;
