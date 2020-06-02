import React from "react";
import Card from "./Card";

const CardList = ({ roster }) => {
  return (
    <div className="flex flex-wrap ml4">
      {roster.map((player, i) => (
        <Card player={player} key={i} />
      ))}
    </div>
  );
};

export default CardList;
