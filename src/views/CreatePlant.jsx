import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css"

export default function CreatePlant() {

  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

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

  function createHandler(e) {
    e.preventDefault();

    const highestId =
      plants.length > 0
        ? Math.max(...plants.map(p => p.id))
        : -1;

    const newPlant = {
      id: highestId + 1,
      commonName,
      scientificName,
      light,
      watering,
      soil,
      level
    };

    setPlants([...plants, newPlant]);
    navigate("/myplants");
  }

  return (
      <div className="form-card">

    <h2>Create New Plant 🪴 </h2>
<form onSubmit={createHandler} className="plant-form">

  <div className="form-row">
    <label> Common Name 🌼:</label>
    <input onChange={e => setCommonName(e.target.value)} required />
  </div>

  <div className="form-row">
    <label>Scientific Name 🔬:</label>
    <input onChange={e => setScientificName(e.target.value)} required />
  </div>

  <div className="form-row">
    <label> Light ☀️:</label>
    <input onChange={e => setLight(e.target.value)} required />
  </div>

  <div className="form-row">
    <label> Watering 💧:</label>
    <input onChange={e => setWatering(e.target.value)} required />
  </div>

  <div className="form-row">
    <label> Soil 🌱:</label>
    <input onChange={e => setSoil(e.target.value)} required />
  </div>

  <div className="form-row">
    <label> Difficulty 📊:</label>
    <input onChange={e => setLevel(e.target.value)} required />
  </div>

  <button className="primary-btn">Create Plant</button>

</form>
    </div>
  );
}