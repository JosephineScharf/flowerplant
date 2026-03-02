export default function Home() {

  //  Plant data
  const plantGuides = [
    {
      commonName: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      light: "Low to bright indirect light",
      watering: "Every 2-3 weeks",
      soil: "Well-draining cactus mix",
      level: "Beginner"
    },
    {
      commonName: "Spider Plant",
      scientificName: "Chlorophytum comosum",
      light: "Bright indirect sunlight",
      watering: "Every 1-2 weeks",
      soil: "Well-draining potting mix",
      level: "Intermediate"
    },
    {
      commonName: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      light: "Bright indirect light (6+ hrs)",
      watering: "When top soil is dry",
      soil: "Peat-based mix with perlite",
      level: "Expert"
    }
  ];

// Display
  return (
    <div>
      <h2>Welcome to FlowerPlant 🌱</h2>
      <p>
        Explore plant care guides and learn how to keep
        your plants healthy and thriving.
      </p>

      <h3>Plant Care Basics</h3>

      {plantGuides.map((plant, index) => (
        <div key={index}>
          <h4>{plant.commonName}</h4>
          <p>Scientific: {plant.scientificName}</p>
          <p>Light: {plant.light}</p>
          <p>Watering: {plant.watering}</p>
          <p>Soil: {plant.soil}</p>
          <p>Difficulty: {plant.level}</p>
        </div>
      ))}
    </div>
  );
}