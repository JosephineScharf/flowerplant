import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

  // Load existing plant data into form
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

    setPlants(
      plants.map(p =>
        p.id === Number(id) ? updatedPlant : p
      )
    );

    navigate("/myplants");
  }

  return (
    <form onSubmit={updateHandler}>
      <h2>Update Plant</h2>

      <input
        value={commonName}
        onChange={e => setCommonName(e.target.value)}
        required
      />

      <input
        value={scientificName}
        onChange={e => setScientificName(e.target.value)}
        required
      />

      <input
        value={light}
        onChange={e => setLight(e.target.value)}
        required
      />

      <input
        value={watering}
        onChange={e => setWatering(e.target.value)}
        required
      />

      <input
        value={soil}
        onChange={e => setSoil(e.target.value)}
        required
      />

      <input
        value={level}
        onChange={e => setLevel(e.target.value)}
        required
      />

      <button>Update Plant</button>
    </form>
  );
}