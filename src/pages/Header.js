import React from "react";
import Navbar from "./Navbar";

// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header-title">What Goes Where?</h1>
      <Navbar />
    </header>
  );
}
