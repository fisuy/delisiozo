import React from "react";
import "./shef.css";
import image from "../../../public/Group 9.svg";
import CARD from "../Card/card";
const Shef = () => {
  return (
    <div className="shef">
      <h1>Our greatest chef</h1>
      <div className="center">
        <CARD image={image} title={"Betran Komar"} paragraph={"Head chef"} />
        <CARD
          image="../../../public/Group 8.svg"
          title={"Ferry Sauwi"}
          paragraph={"Chef"}
        />
        <CARD
          image="../../../public/Group 10.svg"
          title={"Iswan Dracho"}
          paragraph={"Chef"}
        />
      </div>
      <button>View all</button>
    </div>
  );
};

export default Shef;
