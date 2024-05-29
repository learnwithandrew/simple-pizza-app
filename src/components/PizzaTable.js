import React from "react";
import "./PizzaTable.css";

function PizzaTable() {
  return (
    <div className="pizzaTable-container">
      <table>
        <tr>
          <th>Topping</th>
          <th>Size</th>
          <th>Vegetarian?</th>
          <th>Edit</th>
        </tr>
        <tr>
          <td>Plain pizza</td>
          <td>small</td>
          <td>Yes</td>
          <td>
            <button className="btn btn-secondary edit-button">Edit</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default PizzaTable;
