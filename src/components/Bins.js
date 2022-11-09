import React from "react";

export default function Bins({ result }) {
  function activateCategory(input) {
    console.log(input);
    return input;
  }
  return (
    <div className="bins-wrapper">
      <div
        className={`bin-item-wrapper${
          activateCategory(result.type) === "compost" ? "-active" : ""
        }`}
      >
        <h3 className="bin-title">COMPOST</h3>
        <img
          className="bin-img"
          src="https://recollect-images.global.ssl.fastly.net/api/image/200/recology.greenbin.svg"
          alt="compost bin"
        ></img>
      </div>
      <div
        className={`bin-item-wrapper${
          activateCategory(result.type) === "recycle" ? "-active" : ""
        }`}
      >
        <h3 className="bin-title">RECYCLING</h3>
        <img
          className="bin-img"
          src="https://recollect-images.global.ssl.fastly.net/api/image/200/recology.bluebin.svg"
          alt="recycle bin"
        ></img>
      </div>
      <div
        className={`bin-item-wrapper${
          activateCategory(result.type) === "landfill" ? "-active" : ""
        }`}
      >
        <h3 className="bin-title">LANDFILL</h3>
        <img
          className="bin-img"
          src="https://recollect-images.global.ssl.fastly.net/api/image/200/recology.blackbin.svg"
          alt="landfill bin"
        ></img>
      </div>
      <div
        className={`bin-item-wrapper${
          activateCategory(result.type) === "other" ? "-active" : ""
        }`}
      >
        <h3 className="bin-title">OTHER</h3>
        <img
          className="bin-img"
          src="https://recollect-images.global.ssl.fastly.net/api/image/200/recology.otherbin.svg"
          alt="other bin"
        ></img>
      </div>
    </div>
  );
}
