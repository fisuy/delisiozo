import React from "react";
import "./monday.css";

const Monday = () => {
  return (
    <div className="monday-sunday">
      <img src="../../../public/monday.svg" />
      <div className="sunday">
        <h1>we are open from</h1>
        <h2>Monday-Sunday</h2>
        <h3>Launch : Mon-Sun : 11:00am-02:00pm</h3>
        <h3>Dinner : sunday : 04:00pm-08:00pm</h3>
        <h4>04:00pm-09:00pm</h4>
        <div className="sunday-2">
          <button>Order now</button>
          <button>Reservation</button>
        </div>
      </div>
    </div>
  );
};

export default Monday;
