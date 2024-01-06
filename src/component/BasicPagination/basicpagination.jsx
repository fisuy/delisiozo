import React from "react";
import "./basicpagintaion.css";
import image from "../../../public/Rectangle 8.svg";

const Basicpagination = () => {
  return (
    <div className="pagination">
      <img src={image} />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <p>...</p>
      <img src="../../../public/Rectangle 9.svg" />
    </div>
  );
};

export default Basicpagination;
