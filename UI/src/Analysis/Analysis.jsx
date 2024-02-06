import React, { useState } from "react";
import Button from "@mui/material/Button";
import LineChart from "./LineChart";
import InfoRow from "./InfoRow";

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
          height: "1050px",
          top: "24px",
          left: "720px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        <h2>Risks</h2>
        <InfoRow
                name="Total Cholesterol"
                desc="total cholestrol"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
        <strong>Creatinine</strong>

        <div style={{ display: "flex" }}>
          <LineChart />
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              height: "200px",
            }}
          >
            <strong>About Creatimine</strong>
            <p>something about something</p>
          </div>
        </div>
        <InfoRow
                name="Creatinine"
                desc="creatinine"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
        <strong>Vitamin D</strong>
        <div style={{ display: "flex" }}>
          <LineChart />
          <div
            style={{
              border: "1px solid black",
              padding: "5px",
              height: "200px",
            }}
          >
            <strong>About Creatimine</strong>
            <p>something about something</p>
          </div>
        </div>
        <InfoRow
                name="Vitamin D"
                desc="vitamin d"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
        <div>
          <h3>Latest Borderline</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "40px", paddingBottom: "5px" }}>
              <InfoRow
                name="Total Cholesterol"
                desc="total cholestrol"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
            </div>
            <div style={{ height: "40px", paddingTop: "20px", paddingBottom: "5px" }}>
            <InfoRow
                name="Cortisol AM"
                desc="Cortisol am"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analysis;
