import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

export default function UpdatePlant() {

  const { id } = useParams();

  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const plant = plants.find(p => p.id === Number(id));

  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [light, setLight] = useState("");
  const [watering, setWatering] = useState("");
  const [soil, setSoil] = useState("");
  const [level, setLevel] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  useEffect(() => {
    if (plant) {
      setCommonName(plant.commonName);
      setScientificName(plant.scientificName);
      setLight(plant.light);
      setWatering(plant.watering);
      setSoil(plant.soil);
      setLevel(plant.level);
    }
  }, [plant]);

  function updateHandler(e) {
    e.preventDefault();

    const updatedPlant = {
      id: Number(id),
      commonName,
      scientificName,
      light,
      watering,
      soil,
      level
    };

    setPlants(plants.map(p =>
      p.id === Number(id) ? updatedPlant : p
    ));

    navigate("/myplants");
  }

  return (
    <div className="form-card">
      <h2>Update Plant ✏️</h2>

      <form onSubmit={updateHandler} className="plant-form">

        <div className="form-row">
          <label>Common Name 🌼</label>
          <input value={commonName} onChange={e => setCommonName(e.target.value)} required/>
        </div>

        <div className="form-row">
          <label>Scientific Name 🔬</label>
          <input value={scientificName} onChange={e => setScientificName(e.target.value)} required/>
        </div>

        <div className="form-row">
          <label>Light ☀️</label>
          <input value={light} onChange={e => setLight(e.target.value)} required/>
        </div>

        <div className="form-row">
          <label>Watering 💧</label>
          <input value={watering} onChange={e => setWatering(e.target.value)} required/>
        </div>

        <div className="form-row">
          <label>Soil 🌱</label>
          <input value={soil} onChange={e => setSoil(e.target.value)} required/>
        </div>

        <div className="form-row">
          <label>Difficulty 📊</label>
          <input value={level} onChange={e => setLevel(e.target.value)} required/>
        </div>

        <button className="primary-btn">Update Plant</button>

      </form>
    </div>
  );
}