import React, { useState } from "react";
import Button from "@mui/material/Button";
import RBCInsights from './RBCInsights';
import RBCReferenceRangeAnalysis from "./RBCReferenceRangeAnalysis";

function Reference() {

  return (
    <>
      <Button
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "47px",
          top: "21px",
          left: "148px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
      >
        REFERENCE RANGES
      </Button>

      <div
        style={{
          position: "absolute",
          width: "364px",
          height: "750px",
          top: "79px",
          left: "148px",
          border: "1px solid black"
        }}
      >
        <RBCInsights/>
      </div>

      <div
        style={{
          position: "absolute",
          width: "762px",
          height: "636px",
          top: "79px",
          left: "551px",
          border: "1px solid black"
        }}
      >
        <RBCReferenceRangeAnalysis/>
      </div>
    </>
  );
}

export default Reference;
