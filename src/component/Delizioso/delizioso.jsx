import React from "react";
import "./delizioso.css";
import image from "../../../public/Picture(1).svg";

const Delizioso = () => {
  return (
    <div className="delizioso">
      <div className="left-delizi">
        <img src={image} />
      </div>
      <div className="right-delizi">
        <h1>
          Welcome to <span>delizioso</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
          ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec
          quam
        </p>
        <button>See our menu</button>
      </div>
    </div>
  );
};

export default Delizioso;
