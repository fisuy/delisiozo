import React from "react";

const MenuCard = ({ image, title, price }) => {
  return (
    <div className="spaghetti">
      <img src={image} />
      <h2>{title}</h2>
      <div className="spagheti-ulduz">
        <img src="../../../public/spagethi-ulduz.svg" alt="" />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
        consequat mi eget auctor aliquam, diam.
      </p>
      <div className="order-b">
        <h3>${price}</h3>
        <a href="">Order now</a>
      </div>
    </div>
  );
};

export default MenuCard;
