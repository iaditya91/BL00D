import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import RBCInsights from './RBCInsights';
import RBCReferenceRangeAnalysis from "./RBCReferenceRangeAnalysis";
import axios from '../api/axios1';
import { useNavigate } from "react-router-dom";
import TopBar from '../TopBar';

function Reference() {
  
  const [selectedReference, setSelectedReference] = useState("");

  const handleInsightsStateChange = (reference) => {
    // Update the parent state when child state changes
    setSelectedReference(reference);
  };


  return (
    <>
    <TopBar/>
    <>
      {selectedReference &&
      <div
        style={{
          position: "absolute",
          width: "364px",
          height: "760px",
          top: "150px",
          left: "148px",
        }}
      >
        <RBCInsights reference={selectedReference}/>
      </div> }

      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "795px",
          top: "79px",
          left: "700px",
        }}
      >
        <RBCReferenceRangeAnalysis onInsightsStateChange={handleInsightsStateChange}/>
      </div>
    </>
    </>
  );
}

export default Reference;
