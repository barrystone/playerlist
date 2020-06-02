import React from "react";

const Card = ({ player }) => {
  return (
    <div
      className={
        "tc dib br3 pa3 ma2 grow bw2 shadow-5" +
        (player.Unsearched ? "" : " bg-light-gray")
      }
      style={{ width: "216px", height: "230px" }}
    >
      <img src={player.PhotoUrl} alt="photo" />
      <div className=" mr1 ml1">
        <h3 className="tc">
          {player.FirstName}&nbsp;{player.LastName}
        </h3>
        <h4>
          {player.Position}&nbsp;&nbsp;{player.Jersey}
        </h4>
      </div>
    </div>
  );
};

export default Card;
