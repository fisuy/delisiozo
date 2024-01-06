import React from "react";
import "./main.css";
import Hero from "../Hero";
import Delizioso from "../Delizioso/delizioso";
import Popular from "../Popular/popular";
import Reserve from "../Reserve/reserve";
import Shef from "../Shef/shef";
import Basicpagination from "../BasicPagination/basicpagination";
import Customer from "../Customer/customer";
import Monday from "../Monday/monday";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Delizioso />
      <Popular />
      <Basicpagination />
      <Reserve />
      <Shef />
      <Customer />
      <Monday />
    </main>
  );
};

export default Main;
