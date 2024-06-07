import React, { useState } from "react";
import "./AddPizzaForm.css";

function AddPizzaForm() {
  const [formData, setFormData] = useState({
    toppings: "",
    size: "",
    vegetarian: "",
  });

  const handleToppingsChange = (e) => {
    setFormData({
      ...formData,
      toppings: e.target.value,
    });
  };

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };

  const handleVegetarianChange = (e) => {
    setFormData({
      ...formData,
      vegetarian: e.target.value,
    });
  };

  const [pizzas, setPizzas] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPizzas([...pizzas, formData]);
    setFormData({
      toppings: "",
      size: "",
      vegetarian: "",
    });
  };

  return (
    <div className="pizzaForm-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={formData.toppings}
          placeholder="Enter pizza name"
          onChange={handleToppingsChange}
          required
        />
        <select
          id="pizzaSize"
          name="pizzaSize"
          value={formData.size}
          onChange={handleSizeChange}
          required
        >
          <option value="" selected disabled hidden>
            Choose size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
        <div className="form-check">
          <label htmlFor="vegetarian">
            <input
              type="radio"
              id="vegetarian"
              name="isVegetarian"
              value="vegetarian"
              checked={formData.vegetarian === "vegetarian"}
              onChange={handleVegetarianChange}
              required
            />
            &nbsp; Vegetarian
          </label>
          <br />
          <label htmlFor="non-vegetarian">
            <input
              type="radio"
              id="non-vegetarian"
              name="isVegetarian"
              value="non-vegetarian"
              checked={formData.vegetarian === "non-vegetarian"}
              onChange={handleVegetarianChange}
              required
            />
            &nbsp; Non Vegetarian
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div className="pizzas">
        {pizzas.map((pizza, index) => (
          <p key={index}>
            <strong>Toppings: </strong>
            {pizza.toppings}
            <br />
            <strong>Size: </strong>
            {pizza.size}
            <br />
            <strong>Vegetarian: </strong>
            {pizza.vegetarian}
          </p>
        ))}
      </div>
    </div>
  );
}

export default AddPizzaForm;
