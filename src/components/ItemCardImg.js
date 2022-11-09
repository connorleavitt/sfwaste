import React from "react";

export default function ItemCardImg({ src, hidden, alt }) {
  return (
    <div className="item-card--unsplash-img-container">
      <img
        className="item-card--unsplash-img"
        src={src}
        alt={alt}
        hidden={hidden}
      ></img>
    </div>
  );
}
