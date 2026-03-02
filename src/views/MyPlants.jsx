import { useState, useEffect } from "react";
import PlantList from "../components/PlantList";
import SearchField from "../components/SearchField";

export default function MyPlants() {

  const [plants, setPlants] = useState(() => {
    const saved = localStorage.getItem("plants");
    return saved ? JSON.parse(saved) : [];
  });

  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    localStorage.setItem("plants", JSON.stringify(plants));
  }, [plants]);

  const filteredPlants = plants.filter(plant =>
    plant.commonName.toLowerCase().includes(filterText.toLowerCase())
  );

  function handleInput(e) {
    setFilterText(e.target.value);
  }

  return (
    <>
      <SearchField handleInput={handleInput} filter={filterText}/>
      <PlantList plants={filteredPlants} setPlants={setPlants}/>
    </>
  );
}