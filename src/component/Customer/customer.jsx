import React from "react";
import "./customer.css";
import Slider from "../Slider/slider";

const Customer = () => {
  return (
    <div className="customer">
      <div className="center-customer">
        <h1>Our customers say</h1>
        <img src="../../../public/Ellipse 22.svg" />
        <h2>Starla Virgoun</h2>
        <h3>Financial advisor</h3>
        <div className="vergul">
          <div className="vergul-1">
            <img src="../../../public/vergul-1.svg" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </p>
          <div className="vergul-2">
            <img src="../../../public/vergul-2.svg" />
          </div>
        </div>
      </div>
      <div className="ellips-1">
        <img src="../../../public/ellips-1.svg" />
      </div>
      <div className="ellips-2">
        <img src="../../../public/ellips-2.svg" />
      </div>
      <div className="ellips-3">
        <img src="../../../public/Ellips-3.svg" />
      </div>
      <div className="ellips-4">
        <img src="../../../public/ellips-4.svg" />
      </div>
      <div className="ellips-5">
        <img src="../../../public/Ellips-5.svg" />
      </div>
      <div className="ellips-6">
        <img src="../../../public/Ellips-6.svg" />
      </div>
      <div className="ellips-7">
        <img src="../../../public/Ellips-7.svg" />
      </div>
      <div className="ellips-8">
        <img src="../../../public/ellips-2.svg" />
      </div>
      <div className="ellips-9">
        <img src="../../../public/Ellips-8.svg" />
      </div>
      <Slider />
    </div>
  );
};

export default Customer;
