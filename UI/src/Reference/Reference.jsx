import React, { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import RBCInsights from './RBCInsights';
import RBCReferenceRangeAnalysis from "./RBCReferenceRangeAnalysis";
import axios from '../api/axios1';
import { useNavigate } from "react-router-dom";

function Reference() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/get_excel_data/8', {
          headers: {
            'Content-Type': 'application/json', // Example of another header
            'Accept': '*/*',
            'ngrok-skip-browser-warning': 'true' 
          }
        });
        console.log('response data:', response.data);
        setData(response.data);
        setLoading(false); // Set loading to false when API call succeeds
      } catch (error) {
        console.error('Error fetching data:', error);
        //setLoading(false); // Set loading to false even if API call fails
      }
    };

    fetchData();

    // Cleanup function to cancel ongoing requests, if any (optional)
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // Empty dependency array ensures effect runs only once


  return (
    <>
    {loading ? (
        <div>Loading spinner...</div>
      ) :  (
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
          width: "762px",
          height: "780px",
          top: "79px",
          left: "551px",
          border: "1px solid black"
        }}
      >
        <RBCReferenceRangeAnalysis/>
      </div>
    </>)}
    </>
  );
}

export default Reference;
