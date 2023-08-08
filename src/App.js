import React, { useEffect, useState } from "react";
import axios from "axios";
import CropEdit from "./components/CropEdit";
import CropNew from "./components/CropNew";
import CropDelete from "./components/CropDelete";

function App() {
  const [crops, setCrops] = useState([]);
  const [editingCrop, setEditingCrop] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://13.48.126.151:3000/", {
          headers: { Accept: "application/json" },
        });
        console.log("Data fetched:", response.data);
        setCrops(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleCreate = (newCrop) => {
    console.log("New crop created:", newCrop);
    setCrops((prevCrops) => [...prevCrops, newCrop]);
  };
  

  const handleEdit = (updatedCrop) => {
    const updatedCrops = crops.map((crop) => (crop.id === updatedCrop.id ? updatedCrop : crop));
    setCrops(updatedCrops);
    setEditingCrop(null);
  };

  const handleDelete = (deletedCropId) => {
    setCrops(crops.filter((crop) => crop.id !== deletedCropId));
  };

  return (
    <div>
      <h2>Crop React Client</h2>
      <CropNew onCreate={handleCreate} />
      <CropDelete crops={crops} onEdit={setEditingCrop} onDelete={handleDelete} />
      {editingCrop && (
        <CropEdit crop={editingCrop} onUpdate={handleEdit} onCancel={() => setEditingCrop(null)} />
      )}
    </div>
  );
}

export default App;
