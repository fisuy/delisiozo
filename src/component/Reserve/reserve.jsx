import React from "react";
import "./reserve.css";
import image from "../../../public/daire-img.svg";

const Reserve = () => {
  return (
    <div className="reserve">
      <div className="top-img">
        <img src="./../../../public/daire-top-img.svg" />
      </div>
      <div className="table">
        <div className="left-reserve">
          <img src={image} />
        </div>
        <div className="right-reserve">
          <h1>
            Let's reserve<span> a table</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <button>Reservation</button>
        </div>
      </div>
      <div className="bottom-img">
        <img src="./../../../public/daire-bottom-img.svg" />
      </div>
    </div>
  );
};

export default Reserve;
