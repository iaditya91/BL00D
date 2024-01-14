import React, { useState } from "react";
import Button from "@mui/material/Button";
import LineChart from "./LineChart";

function Analysis() {
  return (
    <>
      <Button
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "47px",
          top: "40px",
          left: "116px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
      >
        SELECT BIOMARKER FOR ANALYSIS
      </Button>
      <div
        className="lineChart1"
        style={{
          position: "absolute",
          width: "588px",
          height: "314px",
          top: "146px",
          left: "102px",
        }}
      >
        <LineChart />
      </div>

      <div
        className="lineChart2"
        style={{
          position: "absolute",
          width: "702px",
          height: "899px",
          top: "24px",
          left: "720px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <h2>Risks</h2>
        <strong>Creatinine</strong>

        <div style={{ display: "flex" }}>
          <LineChart />
          <div style={{border: "1px solid black", padding: "5px", height: "200px"}}>
            <strong>About Creatimine</strong>
            <p>something about something</p>
          </div>
        </div>
        <strong>Vitamin D</strong>
        <div style={{ display: "flex" }}>
          <LineChart />
          <div style={{border: "1px solid black", padding: "5px", height: "200px"}}>
            <strong>About Creatimine</strong>
            <p>something about something</p>
          </div>
        </div>
        <div>
          <h3>Latest Borderline</h3>
          <div style={{display:"flex", flexDirection: "column"}}>
            <div style={{height: "40px", paddingBottom: "5px"}}>Total Cholesterol</div>
            <div style={{height: "40px", paddingBottom: "5px"}}>Cortisol AM</div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Analysis;
