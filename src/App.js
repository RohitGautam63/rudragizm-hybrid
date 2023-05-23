import "./styles.css";
import NavScrollExample from "./Components/NavScrollExample";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
