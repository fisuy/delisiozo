import React from "react";
import "./foter.css";

const Foter = () => {
  return (
    <div className="foter">
      <div className="log">
        <div className="B">
          <span>D</span>
        </div>
        <div className="deliz">
          <p>
            Delizi<span>oso</span>
          </p>
        </div>
        <h6>
          Viverra gravida morbi egestas facilisis tortor netus non duis tempor.
        </h6>
        <div className="logs">
          <img src="../../../public/twitter.svg" />
          <img src="../../../public/Instagram.svg" />
          <img src="../../../public/Facebook.svg" />
        </div>
      </div>
      <div className="page">
        <div className="q">
          <p>Page</p>
        </div>
        <a href="">Home</a>
        <a href="">Menu</a>
        <a href="" className="a">
          Order online
        </a>
        <a href="">Catering</a>
        <a href="">Reservation</a>
      </div>
      <div className="Information">
        <p>Information</p>
        <a href="">About us</a>
        <a href="">Testimonial</a>
        <a href="">Event</a>
      </div>
      <div className="Get-in-touch">
        <p>Get in touch</p>
        <a href="">3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</a>
        <a href="">delizioso@gmail.com</a>
        <a href="">+123 4567 8901</a>
      </div>
    </div>
  );
};

export default Foter;
