import React from "react";
import "./popular.css";
import image from "../../../public/spagethi.svg";
import MenuCard from "../MenuCard";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Our popular menu</h1>
      <nav className="navbar">
        <ul className="al">
          <li>
            <a className="active" href="#">
              All catagory
            </a>
          </li>
          <li>
            <a href="">Dinner</a>
          </li>
          <li>
            <a href="">Lunch</a>
          </li>
          <li>
            <a href="">Dessert</a>
          </li>
          <li>
            <a href="">Reservation</a>
          </li>
          <li>
            <a href="">Drink</a>
          </li>
        </ul>
      </nav>
      <div className="spaghetti-menu">
        <MenuCard image={image} title="Spaghetti" price={12.05} />
        <MenuCard
          image="../../../public/SAC.svg"
          title="Gnocchi"
          price={12.05}
        />
        <MenuCard
          image="../../../public/DUSBERE.svg"
          title="Rovioli"
          price={12.05}
        />
        <MenuCard
          image="../../../public/MAKARON.svg"
          title="PenneAlla Vodak"
          price={12.05}
        />
        <MenuCard
          image="../../../public/DUGU.svg"
          title="Risoto"
          price={12.05}
        />
        <MenuCard
          image="../../../public/PIDZA.svg"
          title="Splitza Signature"
          price={12.05}
        />
      </div>
    </div>
  );
};

export default Popular;
