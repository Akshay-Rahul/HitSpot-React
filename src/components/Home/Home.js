import React from "react";
import logo from "../../assets/logo.png";

const footerStyle = {
  marginTop: "auto",
  backgroundColor: "#f8f9fa",
  padding: "10px 0",
  textAlign: "center",
};

const containerStyle = {
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
};

function Home({ regAim, highScore }) {
  return (
    <div style={containerStyle}>
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
      </div>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2024 Yaska</p>
      </footer>
    </div>
  );
}

export default Home;
