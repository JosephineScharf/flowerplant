import { useState, useEffect } from "react";
import PlantList from "../components/PlantList";
import SearchField from "../components/SearchField";
import { Link } from "react-router-dom";
import "./MyPlants.css";

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
    <div className="plants-container">

      <div className="plants-header">

  <h2>My Plant Collection</h2>

  <div className="header-actions">
   <Link to="/create" className="primary-btn">
  + Create New Plant
</Link>
  </div>

</div>

      <SearchField handleInput={handleInput} filter={filterText}/>

      {filteredPlants.length > 0 ? (
        <PlantList plants={filteredPlants} setPlants={setPlants}/>
      ) : (
        <div className="empty-state">
          <h3>No plants yet 🌱</h3>
          <p>Create your first plant guide!</p>
        </div>
      )}

    </div>
  );
}