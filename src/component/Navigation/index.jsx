import React from "react";
import "./navigation.css";
import Button from "../Button";
import Logo from "../logo";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Logo />
      <ul className="ul">
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="">Menu</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Order online</a>
        </li>
        <li>
          <a href="">Reservation</a>
        </li>
        <li>
          <a href="">Contact us</a>
        </li>
      </ul>
      <Button item={5} />
    </nav>
  );
};

export default Navigation;
