import React from "react";
import CustomLink from "./CustomLink";

export default function Navbar({ toggle }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <CustomLink toggle={toggle} to="/home">
          Home
        </CustomLink>
        <CustomLink toggle={toggle} to="/search">
          Search
        </CustomLink>
        <CustomLink toggle={toggle} to="/guides">
          Guides
        </CustomLink>
        <CustomLink toggle={toggle} to="/learn">
          Learn More
        </CustomLink>
        <CustomLink toggle={toggle} to="/contact">
          Contact
        </CustomLink>
      </ul>
    </nav>
  );
}
