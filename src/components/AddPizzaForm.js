import React from "react";
import "./AddPizzaForm.css";

function AddPizzaForm() {
  return (
    <div className="pizzaForm-container">
      <form>
        <input type="text" placeholder="Enter pizza name" />
        <select id="fruits" name="fruits">
          <option value="apple">Small</option>
          <option value="banana">Medium</option>
          <option value="cherry">Large</option>
        </select>
        <div class="form-check">
          <input
            type="radio"
            id="vegetarian"
            name="isVegetarian"
            value="vegetarian"
          />
          <label for="vegetarian">Vegetarian</label>
          <br />
          <input
            type="radio"
            id="non-vegetarian"
            name="isVegetarian"
            value="non-vegetarian"
          />
          <label for="non-vegetarian">Non Vegetarian</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddPizzaForm;
