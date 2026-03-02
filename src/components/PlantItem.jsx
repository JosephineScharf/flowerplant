import { Link } from "react-router-dom";

export default function PlantItem({ plant, deleteHandler }) {
  return (
    <div>
      <h3>{plant.commonName}</h3>
      <p>Scientific: {plant.scientificName}</p>
      <p>Light: {plant.light}</p>
      <p>Watering: {plant.watering}</p>
      <p>Soil: {plant.soil}</p>
      <p>Level: {plant.level}</p>

      <Link to={`/update/${plant.id}`}>Update</Link>
      <button onClick={() => deleteHandler(plant.id)}>
        Delete
      </button>
    </div>
  );
}