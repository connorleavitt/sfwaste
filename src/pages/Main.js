import React from "react";
import Search from "../components/Search";

export default function Main() {
  return (
    <main className="main main-search">
      <h3 className="main-title main-search-title">"What Bin?" Search Tool</h3>
      <p className="main-body-content main-search-content">
        Use the search bar to type in the item you want to dispose of, and we'll
        tell you where it goes.
      </p>
      <Search />
    </main>
  );
}
