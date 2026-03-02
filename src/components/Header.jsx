import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">

      <div className="logo-section">
        <img src="/logo.svg" alt="FlowerPlant logo" />
        <h2>FlowerPlant</h2>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/myplants">My Plants</Link>
        <Link to="/about">About</Link>
      </nav>

    </header>
  );
}