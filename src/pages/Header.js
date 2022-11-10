import React, { useState } from "react";
import Navbar from "../components/Navbar";

// import { Link } from "react-router-dom";

export default function Header({ toggle }) {
  console.log(toggle);
  return (
    <header className="header">
      <h1 className="header-title">SF WASTE</h1>
      <button
        onClick={toggle}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <Navbar toggle={toggle} />
    </header>
  );
}
