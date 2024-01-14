import React, { useState } from "react";
import RBCReferenceLines from "./RBCReferenceLines";

function RBCReferenceRangeAnalysis() {
  return (
    <>
      <div style={{border: "1px solid black", padding: "15px 25px"}}>
        <h2 style={{textAlign:"center"}}>RBC Reference Range Analysis</h2>
        <RBCReferenceLines
          name="RBC"
          value="3.95"
          units="m/mlC"
        />
        <br/>
                <RBCReferenceLines
          name="HGB"
          value="3.95"
          units="m/mlC"
        />  <br/>
                <RBCReferenceLines
          name="HCT"
          value="3.95"
          units="m/mlC"
        /> <br/>
                <RBCReferenceLines
          name="MCV"
          value="3.95"
          units="m/mlC"
        /> <br/>
                <RBCReferenceLines
          name="MCH"
          value="3.95"
          units="m/mlC"
        /> <br/>
                <RBCReferenceLines
          name="MCHC"
          value="3.95"
          units="m/mlC"
        /> <br/>
                <RBCReferenceLines
          name="RDW"
          value="3.95"
          units="m/mlC"
        /> <br/>
          <RBCReferenceLines
          name="CRC"
          value="3.95"
          units="m/mlC"
        /> <br/>
                <RBCReferenceLines
          name="RPI"
          value="3.95"
          units="m/mlC"
        /> 
      </div>
    </>
  );
}

export default RBCReferenceRangeAnalysis;
