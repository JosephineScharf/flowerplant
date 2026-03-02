import { Link } from "react-router-dom";
import "./PlantItem.css";

export default function PlantItem({ plant, deleteHandler }) {
  return (
    <div className="plant-card">

      <div className="card-content">
        <h3>{plant.commonName}</h3>

        <p><em>{plant.scientificName}</em></p>
        <p>Light: {plant.light}</p>
        <p>Watering: {plant.watering}</p>
        <p>Soil: {plant.soil}</p>

        <span className="badge">{plant.level}</span>
      </div>

      <div className="card-buttons">
        <Link to={`/update/${plant.id}`}>
          <button className="update-btn">Update</button>
        </Link>

        <button
          className="delete-btn"
          onClick={() => deleteHandler(plant.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}