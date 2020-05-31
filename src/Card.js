import React from "react";

const Card = ({ data }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={data.image} alt="photo" />
      <div>
        <h2>Name:&nbsp;{data.name}</h2>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
