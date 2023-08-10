import React, { useState } from "react";
import axios from "axios";

function CropEdit({ crop, onUpdate }) {
  const [editedCrop, setEditedCrop] = useState({ ...crop });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCrop({ ...editedCrop, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://13.48.126.151:3000/crops/${crop.id}`, editedCrop);
      onUpdate(response.data);
    } catch (error) {
      console.error("Error editing crop:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={editedCrop.name} onChange={handleInputChange} />
      <input type="text" name="description" value={editedCrop.description} onChange={handleInputChange} />
      <input type="number" name="quantity" value={editedCrop.quantity} onChange={handleInputChange} />
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default CropEdit;
