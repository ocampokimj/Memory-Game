import React, { useEffect } from "react";
import Card from "./Card";
import "/Users/kjocampo/Desktop/Javascript/memory-game-2/memory-game/src/css/CardContainer.css";

const CardContainer = (props) => {
  // const { score, highScore, handleGameLogic, setScore } = props;
  const { shuffleCards, cards, score, highScore, handleChoice } = props;

  useEffect(() => {
    shuffleCards();
  }, [score, highScore]); //loads the cards on window load (componentDidMount) & only loads if score or highscore gets updated

  return (
    <div className="card-container">
      {cards.map((card) => (
        <Card
          key={card.key}
          card={card}
          shuffleCards={shuffleCards}
          handleChoice={handleChoice}
          score={score}
        />
      ))}
    </div>
  );
};

export default CardContainer;
