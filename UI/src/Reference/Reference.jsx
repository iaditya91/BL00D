import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import RBCInsights from './RBCInsights';
import RBCReferenceRangeAnalysis from "./RBCReferenceRangeAnalysis";
import axios from '../api/axios1';
import { useNavigate } from "react-router-dom";
import TopBar from '../TopBar';

function Reference() {


  return (
    <>
    <TopBar/>
    <>

      <div
        style={{
          position: "absolute",
          width: "364px",
          height: "760px",
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
          width: "1000px",
          height: "795px",
          top: "79px",
          left: "600px",
          border: "1px solid black"
        }}
      >
        <RBCReferenceRangeAnalysis/>
      </div>
    </>
    </>
  );
}

export default Reference;
