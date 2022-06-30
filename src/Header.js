import React from "react";
import "/Users/kjocampo/Desktop/Javascript/memory-game-2/memory-game/src/css/Header.css";

const Header = (props) => {
  const { score, highScore } = props;
  return (
    <div className="header-container">
      <div className="logo"> MEMORY GAME.</div>
      <div className="current-score">{score}</div>
      <div className="high-score">High Score: {highScore}</div>
    </div>
  );
};

export default Header;
