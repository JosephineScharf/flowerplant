import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>FlowerPlant</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/myplants">My Plants</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}