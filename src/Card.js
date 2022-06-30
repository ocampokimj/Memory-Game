import React from "react";
import "/Users/kjocampo/Desktop/Javascript/memory-game-2/memory-game/src/css/Card.css";

const Card = (props) => {
  const { card, handleChoice } = props;

  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <button className="card-button" onClick={handleClick} key={card.key}>
        <img src={card.avatar} alt={card.className} className="img" />
        {/* <figcaption className="card-name">{card.name}</figcaption> */}
      </button>
    </div>
  );
};

export default Card;
