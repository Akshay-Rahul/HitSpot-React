import React from "react";
import logo from "../../assets/logo.png";

function Home({ regAim, highScore }) {
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
    </div>
  );
}

export default Home;
