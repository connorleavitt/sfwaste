import React from "react";
import CustomLink from "../components/CustomLink";

export default function Navbar(props) {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/search">Search</CustomLink>
        <CustomLink to="/guides">Guides</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}
