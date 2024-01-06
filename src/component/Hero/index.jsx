import React from "react";
import image from "../../../public/Illustration.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <button className="restaurant">Restauran</button>
        <h1>Italian Cuisine</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
          senectus dictum arcu sit tristique donec eget.
        </p>
        <div className="button-2">
          <button>Order now</button>
          <button>Reservation</button>
        </div>
      </div>
      <div className="right-hero">
        <img src={image} />
      </div>
    </div>
  );
};

export default Hero;
