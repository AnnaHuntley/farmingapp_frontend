import React from "react";
import axios from "axios";

function CropDelete({ crops, onEdit, onDelete }) {
  const handleDelete = async (cropId) => {
    try {
      await axios.delete(`http://13.48.126.151:3000/crops/${cropId}`);
      onDelete(cropId);
    } catch (error) {
      console.error("Error deleting crop:", error);
    }
  };

  return (
    <ul>
      {crops.map((crop) => (
        <li key={crop.id}>
          <strong>Name:</strong> {crop.name}<br />
          <strong>Description:</strong> {crop.description}<br />
          <strong>Quantity:</strong> {crop.quantity}
          <button onClick={() => onEdit(crop)}>Edit</button>
          <button onClick={() => handleDelete(crop.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default CropDelete;
