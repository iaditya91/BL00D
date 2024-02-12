import React, { useState } from "react";
import SegmentedBarChart from "./SegmentedBarChart";
import { Button } from "@mui/material";

function RBCReferenceRangeAnalysis() {
  return (
    <>
      <div style={{ padding: "15px 25px" }}>
        <h2 style={{ textAlign: "center" }}>RBC Reference Range Analysis</h2>
        <SegmentedBarChart
          name="RBC"
          value={3.20}
          units="m/mlC"
          first={true}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
         <br />
        <SegmentedBarChart
          name="HGB"
          value={3.94}
          units="g/dL"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="HCT"
          value={4.04}
          units="%"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="MCV"
          value={5.94}
          units="fL"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="MCH"
          value={4.54}
          units="pg"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="MCHC"
          value={5.94}
          units="g/dL"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="RDW"
          value={3.94}
          units="%"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="CRC"
          value={1.4}
          units="%"
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        <SegmentedBarChart
          name="RPI"
          value={3.22}
          units=""
          first={false}
          referenceValues= {[
            { id: "alarm-one", color: "red", min: 0, max: 3.35 },
            { id: "lab-one", color: "orange", min: 3.35, max: 3.72 },
            { id: "lab-two", color: "yellow", min: 3.72, max: 4.09 },
            { id: "optimal", color: "green", min: 4.09, max: 4.83 },
            { id: "lab-three", color: "yellow", min: 4.83, max: 5.2 },
            { id: "lab-four", color: "orange", min: 5.2, max: 5.57 },
            { id: "alarm-two", color: "red", min: 5.7, max: 6.07 },
          ]}
        />
        <br />
        
      </div>
      <div style={{position: 'relative', display: 'flex', flexDirection: 'row', left: '40%', justifyContent: 'space-between', width: '20%'}}
      >
              <Button variant="contained" style={{backgroundColor: 'grey', height: '25px'}}>Left</Button>
              <Button variant="contained" style={{backgroundColor: 'grey', height: '25px'}}>Right</Button>
      </div>
    </>
  );
}

export default RBCReferenceRangeAnalysis;
