import React from "react";
import "./PizzaItem.css";

function PizzaItem({ pizzas }) {
  return (
    <div className="pizzaItem-container">
      <table>
        <thead>
          <tr>
            <th>Topping</th>
            <th>Size</th>
            <th>Vegetarian?</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((pizza) => (
            <tr key={pizza.id}>
              <td>{pizza.toppings}</td>
              <td>{pizza.size}</td>
              <td>{pizza.vegetarian}</td>
              <td>
                <button className="btn btn-secondary edit-button">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      ;
    </div>
  );
}

export default PizzaItem;
