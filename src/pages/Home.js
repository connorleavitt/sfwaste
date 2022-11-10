import React from "react";
import WhatBinImage from "../assets/img/WhatBinImage.png";
import GuideImage from "../assets/img/GuideImage.png";

export default function Home() {
  return (
    <div>
      <main className="main">
        <div className="main-hero">
          <div className="main-hero-content-wrapper">
            <img
              src="https://www.recology.com/wp-content/uploads/2016/04/RECOLOGY.COM-HOMEPAGE-6-1.jpg"
              alt="recology hero"
              className="main-hero-img"
            ></img>
            <h2 className="main-hero-title">
              Learn how to properly dispose of your waste!
            </h2>
            <p className="main-hero-body-content">San Franciso (Recology)</p>
          </div>
        </div>
        <div className="main-info">
          <div className="main-info-content-wrapper">
            <div className="main-info-top-content-wrapper">
              <h2 className="main-info-title">
                Compost, Recycling, Landfill or Other
              </h2>
              <h3 className="main-info-subtitle">What are my options?</h3>
              <p className="main-info-body-content">
                Learn what items can be composted or recycled with the SFWaste
                web app! Discover what the city of San Francisco (Recology)
                allows you to compost and recycle. Check with your local
                Recology center for more information.
                <br></br>
                <br></br>
                The environmental impacts of our society's waste play a huge
                part on our planet's health. Waste in incinerators and landfills
                create greenhouse gas emissions. Composting and recycling are an
                effective way to reduce greenhouse gasses, require little or no
                investment and are accessible, easy actions for everyone.
                <sup>1</sup>
              </p>
            </div>
            <hr className="info-break top"></hr>
            <div className="info-dropdown-container">
              <img
                src="https://www.recology.com/wp-content/uploads/2016/10/CompostBin.jpg"
                alt="compost bin"
              ></img>
              <div className="info-dropdown-content-container">
                <h4 className="info-title compost-title">COMPOST</h4>
                <p>
                  Food scraps, soiled paper, & yard trimmings go in the compost
                  cart - this includes anything from coffee grounds and napkins,
                  to spoiled foods and peels.
                </p>
              </div>

              <img
                src="https://www.recology.com/wp-content/uploads/2016/10/RecycleBin.jpg"
                alt="recycle bin"
              ></img>
              <div className="info-dropdown-content-container">
                <h4 className="info-title recycle-title">RECYCLE</h4>
                <p>
                  Paper, cardboard, glass bottles, aluminum/tin cans, hard
                  plastics, bundled plastic bags & thin (film) plastics go into
                  the recyclables cart.
                </p>
              </div>

              <img
                src="https://www.recology.com/wp-content/uploads/2016/10/LandfillBin.jpg"
                alt="landfill bin"
              ></img>
              <div className="info-dropdown-content-container">
                <h4 className="info-title">LANDFILL</h4>
                <p>
                  What is trash? Not much! Cat litter, ceramics, & broken glass
                  to name a few. The fewer of these items placed in the landfill
                  cart the better.
                </p>
              </div>
            </div>
            <hr className="info-break top"></hr>
          </div>
        </div>

        <div className="main-search-container">
          <h4 className="main-search-subtitle">Search Tool</h4>
          <p className="main-search-body-content">
            The <strong>"What Bin?" Search Tool</strong> can be used to find out
            which item can be thrown away in which bin.
            <br></br>
            <br></br>
            It will give you the bin type (compost, recycle, landfill or other),
            general description and related items.
          </p>
          <img
            className="main-search-image"
            src={WhatBinImage}
            alt="what bin"
          ></img>
        </div>
        <hr className="info-break hr-main"></hr>

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

        <hr className="info-break"></hr>

        <div className="main-learn-container">
          <h4 className="main-learn-subtitle">Learn More!</h4>
          <p className="main-learn-body-content">
            Check out the Learn More section to view videos and read more
            information on composting, recycling and more.
          </p>
        </div>

        <div className="footnotes-container">
          <p className="footnote-content">
            <sup>1</sup> Environmental Benefits of Recycling and Composting,
            <a href="https://eurekarecycling.org/wp-content/uploads/2019/08/composting_factsheet_0.pdf">
              https://eurekarecycling.org/wp-content/uploads/2019/08/composting_factsheet_0.pdf
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
