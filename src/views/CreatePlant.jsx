import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={createHandler}>
      <input placeholder="Common Name" onChange={e => setCommonName(e.target.value)} required/>
      <input placeholder="Scientific Name" onChange={e => setScientificName(e.target.value)} required/>
      <input placeholder="Light" onChange={e => setLight(e.target.value)} required/>
      <input placeholder="Watering" onChange={e => setWatering(e.target.value)} required/>
      <input placeholder="Soil" onChange={e => setSoil(e.target.value)} required/>
      <input placeholder="Level" onChange={e => setLevel(e.target.value)} required/>

      <button>Create Plant</button>
    </form>
  );
}