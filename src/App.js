import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import LearnMore from "./pages/LearnMore";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  function handleNavClick() {
    setNavToggle((current) => !current);
  }
  return (
    <div className={navToggle ? "nav-open App" : "App"}>
      <Header toggle={handleNavClick} />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<Main />}></Route>
          <Route path="/guides" element={<Guides />}></Route>
          <Route path="/learn" element={<LearnMore />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
