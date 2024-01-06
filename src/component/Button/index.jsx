import React from "react";
import { IoCartOutline } from "react-icons/io5";
import "./button.css";

const Button = (props) => {
  return (
    <div className="button">
      <div className="cart">
        <IoCartOutline size={24} />
        <span className="dot">
          <span className="number">{props.item}</span>
        </span>
      </div>
      <div className="log">
        <button>
          Log <span>in</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
