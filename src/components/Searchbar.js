import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export default function Searchbar({ findSearchInput, findImg }) {
  const query = useRef();

  const handleSearchClick = () => {
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
  };

  const handleDeleteClick = () => {
    query.current.value = "";
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(query.current.value);
    findSearchInput(query.current.value.toLowerCase());
    findImg(query.current.value.toLowerCase());
  };

  function focus() {
    query.current.focus();
  }

  return (
    <div onClick={focus} className="searchbar-wrapper">
      <button className="searchbar-btn" onClick={handleSearchClick}>
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
      </button>
      <form onSubmit={handleSearchSubmit}>
        <label>
          <input
            ref={query}
            type="search"
            id="search"
            placeholder="Enter Item"
          />
        </label>
      </form>
      <button className="searchbar-delete-btn" onClick={handleDeleteClick}>
        <FontAwesomeIcon icon="fa-solid fa-x" />{" "}
      </button>
    </div>
  );
}
