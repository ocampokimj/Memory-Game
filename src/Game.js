import React, { useState } from "react";
import "./css/Header.css";
import Header from "./Header";
import "/Users/kjocampo/Desktop/Javascript/memory-game-2/memory-game/src/css/Game.css";
import CardContainer from "./CardContainer";
import uniqid from "uniqid";

const cardsArr = [
  { avatar: require("./images/ald1.jpeg"), name: "gon", key: uniqid() },
  { avatar: require("./images/ald2.jpeg"), name: "killua", key: uniqid() },
  { avatar: require("./images/ald3.jpeg"), name: "hisoka", key: uniqid() },
  { avatar: require("./images/ald4.jpeg"), name: "gon", key: uniqid() },
  { avatar: require("./images/ald5.jpeg"), name: "killua", key: uniqid() },
  { avatar: require("./images/ald6.jpeg"), name: "hisoka", key: uniqid() },
  { avatar: require("./images/ald7.jpeg"), name: "gon", key: uniqid() },
  { avatar: require("./images/ald8.jpeg"), name: "killua", key: uniqid() },
  { avatar: require("./images/ald9.jpeg"), name: "hisoka", key: uniqid() },
  { avatar: require("./images/ald10.jpeg"), name: "gon", key: uniqid() },
  { avatar: require("./images/ald11.jpeg"), name: "killua", key: uniqid() },
  { avatar: require("./images/ald12.jpeg"), name: "hisoka", key: uniqid() },
  { avatar: require("./images/ald13.jpeg"), name: "gon", key: uniqid() },
  { avatar: require("./images/ald14.jpeg"), name: "killua", key: uniqid() },
  { avatar: require("./images/ald15.jpeg"), name: "hisoka", key: uniqid() },
];

const Game = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedImg, setClickedImg] = useState([]);

  const shuffleCards = () => {
    let shuffledCards = [...cardsArr];

    for (let i = shuffledCards.length - 1; i > 0; i--) {
      let randomPosition = Math.floor(Math.random() * (i + 1));
      let temp = shuffledCards[i];
      // swap elements
      shuffledCards[i] = shuffledCards[randomPosition];
      shuffledCards[randomPosition] = temp;
    }
    setCards(shuffledCards);
  };

  const restartGame = () => {
    setScore(0);
    setClickedImg([]);
  };

  const handleChoice = (card) => {
    if (!clickedImg.includes(card.key)) {
      setScore(score + 1);
      shuffleCards();
      if (score === 8) {
        setScore(0);
      }
      console.log(score);
    } else {
      console.log("game over");
      //game over => add a game over function modal
      if (score > highScore) {
        setHighScore(score);
      }

      restartGame();
    }

    clickedImg.push(card.key); //pushes the key to compare later.
  };

  return (
    <div className="game">
      <div className="left-section">
        <Header score={score} highScore={highScore} />
      </div>
      <div className="right-section">
        {/* <div className="title">Memory Game.</div> */}
        <CardContainer
          shuffleCards={shuffleCards}
          cards={cards}
          handleChoice={handleChoice}
        />
      </div>
    </div>
  );
};

export default Game;
