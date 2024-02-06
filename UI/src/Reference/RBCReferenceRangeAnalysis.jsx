import React, { useState } from "react";
import SegmentedBarChart from "./SegmentedBarChart";

function RBCReferenceRangeAnalysis() {
  return (
    <>
      <div style={{ padding: "15px 25px" }}>
        <h2 style={{ textAlign: "center" }}>RBC Reference Range Analysis</h2>
        <SegmentedBarChart
          name="RBC"
          value={4.94}
          units="m/mlC"
          first={true}
          key={1}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="HGB"
          value={3.94}
          units="g/dL"
          first={false}
          key={2}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="HCT"
          value={4.04}
          key={3}
          units="%"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="MCV"
          value={5.94}
          key={4}
          units="fL"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="MCH"
          key={5}
          value={4.54}
          units="pg"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="MCHC"
          key={6}
          value={5.94}
          units="g/dL"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="RDW"
          value={3.94}
          key={7}
          units="%"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="CRC"
          value={4.94}
          key={8}
          units="%"
          first={false}
          range={[
            [3.35, "red", "Alarm"],
            [3.72, "orange", "<Lab"],
            [4.09, "yellow", "Lab"],
            [4.46, "green", "Optimal"],
            [4.83, "green", "Optimal"],
            [5.2, "yellow", "Lab"],
            [5.57, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[2.98, 5.94]}
        />
        <br />
        <SegmentedBarChart
          name="RPI"
          value={1.22}
          units=""
          key={9}
          first={false}
          range={[
            [0.25, "red", "Alarm"],
            [0.5, "orange", "<Lab"],
            [1, "yellow", "Lab"],
            [1.5, "green", "Optimal"],
            [2, "green", "Optimal"],
            [3, "yellow", "Lab"],
            [5, "orange", ">Lab"],
            ["", "red", "Alarm"],
          ]}
          finalrange={[0.25, 6]}
        />
        <br />
      </div>
    </>
  );
}

export default RBCReferenceRangeAnalysis;
