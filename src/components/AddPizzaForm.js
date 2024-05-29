import React from "react";
import "./AddPizzaForm.css";

function AddPizzaForm() {
  return (
    <div className="pizzaForm-container">
      <form>
        <input type="text" placeholder="Enter pizza name" />
        <select id="pizzaSize" name="pizzaSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div class="form-check">
          <input
            type="radio"
            id="vegetarian"
            name="isVegetarian"
            value="vegetarian"
          />
          &nbsp;
          <label for="vegetarian">Vegetarian</label>
          <br />
          <input
            type="radio"
            id="non-vegetarian"
            name="isVegetarian"
            value="non-vegetarian"
          />
          &nbsp;
          <label for="non-vegetarian">Non Vegetarian</label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default AddPizzaForm;
