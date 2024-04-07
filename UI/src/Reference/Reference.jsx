import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import RBCInsights from './RBCInsights';
import RBCReferenceRangeAnalysis from "./RBCReferenceRangeAnalysis";
import axios from '../api/axios1';
import { useNavigate } from "react-router-dom";
import TopBar from '../TopBar';
import Navbar from '../claud_files/Navbar';

function Reference() {
  
  const [selectedReference, setSelectedReference] = useState("");

  const handleInsightsStateChange = (reference) => {
    // Update the parent state when child state changes
    setSelectedReference(reference);
  };


  return (
    <>
    <Navbar/>
    <>
      {selectedReference &&
      <div
        style={{
          position: "absolute",
          width: "364px",
          height: "760px",
          top: "150px",
          left: "18px",
        }}
      >
        <RBCInsights reference={selectedReference}/>
      </div> }

      <div
        style={{
          position: "absolute",
          width: "1000px",
          height: "795px",
          top: "60px",
          left: "370px",
        }}
      >
        <RBCReferenceRangeAnalysis onInsightsStateChange={handleInsightsStateChange}/>
      </div>
    </>
    </>
  );
}

export default Reference;
