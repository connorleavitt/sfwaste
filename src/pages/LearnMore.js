import React from "react";

export default function LearnMore() {
  return (
    <main className="main">
      <h2 className="learn-header-title">Learn More</h2>

      <div className="learn-main-container">
        <div className="learn-compost-content-wrapper">
          <h3 className="learn-main-title">Compost</h3>
          <h4 className="learn-info-subtitle">Why Compost?</h4>
          <p className="learn-info-body-content">
            About a third of the food produced around the world goes to waste,
            and much of it ends up in landfills—where it becomes a source of
            methane, a greenhouse gas 25 times more potent than carbon dioxide.
            Eliminating waste is the ultimate solution, but some will always
            remain. For that there is a solution that nearly anyone can do:
            composting.<sup>1</sup>
          </p>
          <h4 className="learn-info-subtitle">What is Compost?</h4>
          <p>
            Composting is the natural process of recycling organic matter, such
            as leaves and food scraps, into a valuable fertilizer that can
            enrich soil and plants. Anything that grows decomposes eventually;
            composting simply speeds up the process by providing an ideal
            environment for bacteria, fungi, and other decomposing organisms
            (such as worms, sowbugs, and nematodes) to do their work. The
            resulting decomposed matter, which often ends up looking like
            fertile garden soil, is called compost. Fondly referred to by
            farmers as “black gold,” compost is rich in nutrients and can be
            used for gardening, horticulture, and agriculture.
          </p>
          <h4 className="learn-info-subtitle">Benefits of Composting</h4>
          <ul className="learn-benefits-list">
            <li className="learn-benefits-list-item">
              Reduces the Waste Stream
            </li>
            <li className="learn-benefits-list-item">
              Cuts Methane Emissions From Landfills
            </li>
            <li className="learn-benefits-list-item">
              Improves Soil Health and Lessens Erosion
            </li>
            <li className="learn-benefits-list-item">Conserves Water</li>
            <li className="learn-benefits-list-item">
              Reduces Personal Food Waste
            </li>
            <li className="learn-benefits-list-item">
              and more... <sup>2</sup>
            </li>
          </ul>
        </div>
      </div>
      <div className="learn-main-container">
        <div className="learn-recycle-content-wrapper">
          <h3 className="learn-main-title">Recycle</h3>
          <h4 className="learn-info-subtitle">Why Recycle?</h4>
          <p className="learn-info-body-content">
            Recycling is the process of collecting and processing materials that
            would otherwise be thrown away as trash and turning them into new
            products. Recycling can benefit your community and the environment.
          </p>
          <h4 className="learn-info-subtitle">Benefits of Recycling</h4>
          <ul className="learn-benefits-list">
            <li className="learn-benefits-list-item">
              Reduces the amount of waste sent to landfills and incinerators
            </li>
            <li className="learn-benefits-list-item">
              Conserves natural resources such as timber, water and minerals
            </li>
            <li className="learn-benefits-list-item">
              Increases economic security by tapping a domestic source of
              materials
            </li>
            <li className="learn-benefits-list-item">
              Prevents pollution by reducing the need to collect new raw
              materials
            </li>
            <li className="learn-benefits-list-item">Saves energy</li>
            <li className="learn-benefits-list-item">
              Supports American manufacturing and conserves valuable resources
            </li>
            <li className="learn-benefits-list-item">
              Helps create jobs in the recycling and manufacturing industries in
              the United States
            </li>
            <li className="learn-benefits-list-item">
              and more... <sup>3</sup>
            </li>
          </ul>
        </div>
      </div>
      <div className="footnotes-container">
        <p className="footnote-content">
          <sup>1</sup> How to compost—and why it's good for the environment,
          <a href="https://www.nationalgeographic.com/environment/article/how-to-compost">
            https://www.nationalgeographic.com/environment/article/how-to-compost
          </a>
        </p>
        <p className="footnote-content">
          <sup>2</sup> Composting 101,
          <a href="https://www.nrdc.org/stories/composting-101">
            https://www.nrdc.org/stories/composting-101
          </a>
        </p>
        <p className="footnote-content">
          <sup>3</sup> Reducing the Impact of Wasted Food by Feeding the Soil
          and Composting,
          <a href="https://www.epa.gov/recycle/recycling-basics">
            https://www.epa.gov/recycle/recycling-basics
          </a>
        </p>
      </div>
    </main>
  );
}
