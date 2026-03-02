import "./About.css";
import about1 from "../assets/aboutus1.avif";
import about2 from "../assets/aboutus2.jpg";
import about3 from "../assets/aboutus3.avif";

export default function About() {
  return (
    <div className="content">
      <section className="about">
        <h2 className="about-title">About FlowerPlant 🪴</h2>
        <div className="about-row">
          <div className="about-text">
            <h3>Our Vision 👀</h3>
            <p>
              At FlowerPlant we believe that everyone should feel confident
              growing plants. Whether you're just starting out or already
              passionate about greenery, our goal is to make plant care simple
              and enjoyable.
            </p>
          </div>
          <div className="about-img">
            <img src={about1} alt="plant care" />
          </div>
        </div>
        <div className="about-row reverse">
          <div className="about-text">
            <h3>Our Mission 💡</h3>
            <p>
              We provide accessible plant care guides, tools and inspiration to
              help you keep your indoor plants healthy and thriving in everyday
              environments.
            </p>
          </div>
          <div className="about-img">
            <img src={about2} alt="watering plants" />
          </div>
        </div>
        <div className="about-row">
          <div className="about-text">
            <h3>Our Purpose 🪽</h3>
            <p>
              By encouraging people to grow plants at home, we hope to promote
              sustainability, mindfulness and a deeper connection to nature.
            </p>
          </div>
          <div className="about-img">
            <img src={about3} alt="indoor gardening" />
          </div>
        </div>
      </section>
    </div>
  );
}