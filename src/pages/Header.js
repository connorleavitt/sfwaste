import React from "react";
import Navbar from "../components/Navbar";

// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">SF Waste App</h1>
      <Navbar />
    </header>
  );
}
