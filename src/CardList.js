import React from "react";
import Card from "./Card";

const CardList = ({ roster }) => {
  return (
    <div>
      {roster.map((player, i) => (
        <Card data={player} key={i} />
      ))}
    </div>
  );
};

export default CardList;
