import PlantItem from "./PlantItem";

export default function PlantList({ plants, setPlants }) {

  function deletePlantHandler(id) {
    const confirmDelete = window.confirm("Delete plant?");
    if (confirmDelete) {
      setPlants(plants.filter(p => p.id !== id));
    }
  }

  return (
    <div>
      {plants.map(plant => (
        <PlantItem
          key={plant.id}
          plant={plant}
          deleteHandler={deletePlantHandler}
        />
      ))}
    </div>
  );
}