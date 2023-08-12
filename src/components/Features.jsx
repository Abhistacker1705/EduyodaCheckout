import React from "react";
import {featureList} from "../utils/featureList";

const Features = () => {
  return (
    <section className="features-container">
      <h1 className="feature-heading">
        Access curreny courses worth ₹ <span id="strike-through">18,500</span>{" "}
        at just <span id="blue-span">₹ 99</span> per year!
      </h1>
      {featureList.map((feature) => (
        <div key={feature.icon} className="feature-icon-and-desc">
          <img src={feature.icon} width="40px" height="40px" />
          {feature.desc}
        </div>
      ))}
    </section>
  );
};

export default Features;
