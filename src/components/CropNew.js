import React, { useState } from "react";

function CropNew({ onCreate }) {
  const [cropData, setCropData] = useState({ name: "", description: "", quantity: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCropData({ ...cropData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/crops", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cropData),
      });
      const data = await response.json();
      onCreate(data);
      setCropData({ name: "", description: "", quantity: 0 });
    } catch (error) {
      console.error("Error creating crop:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={cropData.name} onChange={handleInputChange} />
      <input type="text" name="description" value={cropData.description} onChange={handleInputChange} />
      <input type="number" name="quantity" value={cropData.quantity} onChange={handleInputChange} />
      <button type="submit">Create Crop</button>
    </form>
  );
}

export default CropNew;
