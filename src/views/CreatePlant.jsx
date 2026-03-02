import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePlant() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    commonName: "",
    scientificName: "",
    light: "",
    watering: "",
    soil: "",
    level: "Beginner"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const plants = JSON.parse(localStorage.getItem("plants")) || [];
    plants.push(formData);
    localStorage.setItem("plants", JSON.stringify(plants));

    navigate("/myplants");
  };

  return (
    <div className="form-card">

      <h2>Create Your Own Plant Card</h2>

      <form className="plant-form" onSubmit={handleSubmit}>

        <div className="form-row">
          <label>Common Name 🌱</label>
          <input
            type="text"
            name="commonName"
            value={formData.commonName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Scientific Name 🪏</label>
          <input
            type="text"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Light ☀️</label>
          <input
            type="text"
            name="light"
            value={formData.light}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Watering 💧</label>
          <input
            type="text"
            name="watering"
            value={formData.watering}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Soil 🪴</label>
          <input
            type="text"
            name="soil"
            value={formData.soil}
            onChange={handleChange}
            required
          />
        </div>

        {/* 🔥 DROPDOWN THAT MATCHES YOUR LAYOUT */}
        <div className="form-row">
          <label>Level ♟️</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>

        <button className="primary-btn" type="submit">
          Save Plant
        </button>

      </form>
    </div>
  );
}