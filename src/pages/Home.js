import React from "react";
import Main from "./Main";

export default function Home() {
  return (
    <div>
      <main className="main">
        <h3 className="main-title">
          Learn what items can be composted or recycled!{" "}
        </h3>
        <p className="main-body-content">
          Use the search bar to type in the item you want to dispose of, and
          we'll tell you where it goes.
        </p>
      </main>
      <Main />
    </div>
  );
}
