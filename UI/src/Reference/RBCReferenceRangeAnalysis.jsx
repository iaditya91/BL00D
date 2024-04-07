import React, { useState, useEffect } from "react";
import SegmentedBarChart from "./SegmentedBarChart";
import { Button } from "@mui/material";
import axios from "../api/axios1";

function RBCReferenceRangeAnalysis({onInsightsStateChange}) {
  const [refDataList, setRefDataList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedReference, setSelectedReference] = useState("");

  const handleInsightsChange = (reference) => {
    setSelectedReference(reference);
    // Call the callback function passed from the parent
    onInsightsStateChange(reference);
  };

  const fetchRefRangeData = async (pageNumber) => {
    try {
      setLoading(true);
      console.log("inside fetch data");
      const response = await axios.get(
        `/get_excel_data_biomarkerslist/16/${pageNumber}`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      if (response.data !== null) {
        console.log("response data:", response.data);
        setRefDataList(response.data);
        // setPageCount(pageNumber);
        setLoading(false); // Set loading to false when API call succeeds
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if API call fails
    }
  };

  const handleLeftButton = () => {
    if (pageCount !== 0) {
      setPageCount(pageCount - 1);
    }
  };

  const handleRightButton = () => {
    setPageCount(pageCount + 1);
  };

  useEffect(() => {
    fetchRefRangeData(pageCount);
  }, [pageCount]); // Empty dependency array ensures effect runs only once

  useEffect(() => {
    fetchRefRangeData(0);
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div style={{ padding: "15px 25px" }}>
            <h2 style={{ textAlign: "center" }}>
              RBC Reference Range Analysis
            </h2>
            {refDataList &&
              refDataList.length > 0 &&
              refDataList.map((reference, index) => {
                return (
                  <div key={index}>
                    <SegmentedBarChart
                      name={reference.name}
                      value={reference.value}
                      units={reference.units}
                      first={index === 0 ? true : false}
                      referenceValues={reference.referenceValues}
                      onInsightsStateChange={handleInsightsChange}
                    />
                    <br />
                  </div>
                );
              })}
          </div>
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              left: "40%",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <Button
              variant="contained"
              style={{ backgroundColor: "grey", height: "25px" }}
              onClick={() => handleLeftButton()}
            >
              Left
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "grey", height: "25px" }}
              onClick={() => handleRightButton()}
            >
              Right
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default RBCReferenceRangeAnalysis;