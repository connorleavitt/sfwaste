import React from "react";
import WhatBinImage from "../assets/img/WhatBinImage.png";
import GuideImage from "../assets/img/GuideImage.png";

export default function Home() {
  return (
    <div>
      <main className="main">
        <div className="main-hero">
          <div className="main-hero-content-wrapper">
            <h2 className="main-home-title">
              How should you REALLY be disposing of that item?
            </h2>
            <p className="main-home-body-content">
              Learn what items can be composted or recycled! Discover what the
              city of San Franciso (Recology) allows you to compost and recycle.
              Check with your local Recology center for more information.
            </p>
          </div>
        </div>

        <div className="main-search-container">
          <h4 className="main-search-subtitle">Search Tool</h4>
          <p className="main-search-body-content">
            The "What Bin?" Search Tool can be used to find out which item can
            be thrown away in which bin. It will give you the bin type (compost,
            recycle, landfill or other), general description and related items.
          </p>
          <img className="search-image" src={WhatBinImage} alt="what bin"></img>
        </div>
        <div className="main-guides-container">
          <h4 className="main-guides-subtitle">Printable Guides and Signage</h4>
          <p className="main-guides-body-content">
            Use the guides section to find and download compost, recycling,
            landfill and more informational guides. Every category has various
            PDF files for posters, flyers, and more. They provide helpful photos
            to show what can and can't go in that respective bin. You can also
            create your own sign with the "Sign Maker" link if you desire
            something more specific!
          </p>
          <img
            className="main-guides-image"
            src={GuideImage}
            alt="guides"
          ></img>
        </div>
      </main>
    </div>
  );
}
