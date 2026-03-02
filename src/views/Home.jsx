import "./Home.css";
import snakeImg from "../assets/snake.jpg";
import spiderImg from "../assets/spider.jpg";
import ficusImg from "../assets/ficus.jpg";



export default function Home() {



  const plantGuides = [
    {
      image: snakeImg,
      commonName: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      light: "Low to bright indirect light",
      watering: "Every 2-3 weeks",
      soil: "Well-draining cactus mix",
      level: "Beginner"
    },
    {
      image: spiderImg,
      commonName: "Spider Plant",
      scientificName: "Chlorophytum comosum",
      light: "Bright indirect sunlight",
      watering: "Every 1-2 weeks",
      soil: "Well-draining potting mix",
      level: "Intermediate"
    },
    {
      image: ficusImg,
      commonName: "Fiddle Leaf Fig",
      scientificName: "Ficus lyrata",
      light: "Bright indirect light (6+ hrs)",
      watering: "When top soil is dry",
      soil: "Peat-based mix with perlite",
      level: "Expert"
    }
  ];


  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>Welcome to FlowerPlant 🌱</h1>
          <p>Learn how to care for your plants</p>
        </div>
      </div>
      <div className="content">
        <section className="home-intro">
         
           <p> Explore plant care guides and learn how to keep your plants healthy and thriving. </p>
            <p> Get information on plants and save your own plant details.</p>
          
        </section>
        <h3 className="plant-basics">Plant Care Basics</h3>
        <div className="cards-section">
          <div className="plant-grid">
            {plantGuides.map((plant, index) => (
              <div className="plant-card" key={index}>
                <img src={plant.image} alt={plant.commonName} />
                <div className="plant-info">
                  <h4>{plant.commonName}</h4>
                  <p><em>{plant.scientificName}</em></p>
                  <p>Light: {plant.light}</p>
                  <p>Watering: {plant.watering}</p>
                  <p>Soil: {plant.soil}</p>
                  <span className="badge">{plant.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}