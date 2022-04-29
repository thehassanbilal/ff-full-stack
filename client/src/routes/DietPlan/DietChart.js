/** @format */

import React from "react";
import dietPlanChart from "../../assets/dietplan/Canvas.png";
import "../DietPlan/dietplan.css";

function DietChart() {
  return (
    <>
      <div className="background">
        <h1 className="pricingSection-heading">Diet Plan</h1>
        <div className="pricingSection-title">
          <p className="pricingSection-title-firstHalf">Our</p>
          <p className="pricingSection-title-secondHalf">Special Plans</p>
        </div>
        <img src={dietPlanChart} alt="not found" className="dietImage" />
      </div>
    </>
  );
}

export default DietChart;
