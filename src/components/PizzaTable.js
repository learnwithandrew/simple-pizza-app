import React from "react";
import "./PizzaTable.css";
import PizzaItem from "./PizzaItem";
import { pizzaData } from "../Data";

function PizzaTable() {
  return (
    <div className="pizzaTable-container">
      <PizzaItem pizzas={pizzaData} />
    </div>
  );
}

export default PizzaTable;
