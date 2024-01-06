import React from "react";

const CARD = ({ image, title, paragraph }) => {
  return (
    <div className="shef-center">
      <img src={image} />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default CARD;
