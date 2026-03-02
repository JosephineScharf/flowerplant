import Header from "./components/Header";
import Footer from "./components/Footer";
import MyPlants from "./views/MyPlants";
import CreatePlant from "./views/CreatePlant";
import UpdatePlant from "./views/UpdatePlant";
import About from "./views/About";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myplants" element={<MyPlants />} />
          <Route path="/create" element={<CreatePlant />} />
          <Route path="/update/:id" element={<UpdatePlant />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}