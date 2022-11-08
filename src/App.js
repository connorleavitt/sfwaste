import "./App.css";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import Videos from "./pages/Videos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/search" element={<Main />}></Route>
          <Route path="/guides" element={<Guides />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
