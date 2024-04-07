import React, { useState } from "react";
import RBCGauge from "./RBCGaugle";

function RBCInsights({reference}) {


  return (
    <>
      <div style={{ fontFamily: "areal, sans-serif" }}>
        <h2 style={{ textAlign: "center" }}>RBC Insights</h2>
        <RBCGauge />
        <div style={{ padding: "0px 20px" }}>
          <p>
            <strong>Suboptimal Blood Oxygen Delivery</strong> is Highly Likely
            (98%)
          </p>
          {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <p style={{ padding: "0px 5px" }}>
              <strong>RBC Size:</strong> <br />
              Microcytic (Small)
            </p>
            <p style={{  padding: "0px 5px" }}>
              <strong>RBC Color:</strong> <br />
              Hypochromic <br />
              (Pale)
            </p>
          </div> */}
          <p style={{ border: "1px solid black", padding: "0px 5px" }}>
            <strong>Nutrient Insufficiency</strong> is Likely
          </p>
          <div style={{ border: "1px solid black", padding: "0px 5px" }}>
            <p>
              <strong>Possible Root Causes:</strong>
            </p>
            <p>• Iron Insufficiency Possibly Caused by</p>
            <ul>
              <li>Copper Insufficiency</li>
              <li>
                Stomach Acid Insufficiency Possibly Causing Iron Insufficiency
              </li>
              <li>Vitamin C Insufficiency</li>
            </ul>
            <p>
              • Zinc Insufficiency Possibly Causing Stomach Acid Insufficiency
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RBCInsights;
