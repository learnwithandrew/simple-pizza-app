import React, { useState } from "react";

function Trial() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });

  const handleUsernameChange = (e) => {
    setFormData({
      ...formData,
      username: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };

  const handleAgeChange = (e) => {
    setFormData({
      ...formData,
      age: e.target.value,
    });
  };
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]);
    setFormData({
      username: "",
      email: "",
      age: "",
    });
  };

  return (
    <div className="trial">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={formData.username}
          onChange={handleUsernameChange}
        />
        <input
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        <input
          type="number"
          placeholder="age"
          value={formData.age}
          onChange={handleAgeChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <h1>My items are:</h1>
      {items.map((item, index) => (
        <p key={index}>
          <strong>Username: </strong>
          {item.username}
          <br />
          <strong>Email: </strong> {item.email}
          <br />
          <strong>Age: </strong> {item.age}
        </p>
      ))}
    </div>
  );
}

export default Trial;
