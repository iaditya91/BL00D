import React, { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import axios1 from "./api/axios1";
import TopBar from "./TopBar";

function Recomendations() {
  const [recommendationData, setRecommendationData] = useState([]);
  const [loading, setLoading] = useState(true);
  const hasMounted = useRef(false);

  const fetchData = async (fileId, queryPrompt) => {
    try {
      setLoading(true);
      console.log("inside fetch data", fileId, queryPrompt);
      const healthRecomResponse = await axios1.get(
        `/generate_text/${fileId}/${queryPrompt}`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("response data:", healthRecomResponse.data);
      if (healthRecomResponse.data !== null) {
        setRecommendationData(healthRecomResponse.data);
        console.log("setted page data:", recommendationData);
        setLoading(false); // Set loading to false when API call succeeds
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Set loading to false even if API call fails
    }
  };

  useEffect(() => {
    console.log("inside useeffect");
    fetchData("16", "healthdatarecommendations");
    hasMounted.current = true;
  }, []);

  return (
    <>
      <TopBar />
      <Button
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "47px",
          top: "80px",
          left: "116px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
        onClick={(e) => {
          e.preventDefault();
          fetchData("16", "healthdatarecommendations");
        }}
      >
        HEALTH DATA RECOMENDATIONS
      </Button>

      <Button
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "47px",
          top: "80px",
          left: "510px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
        onClick={(e) => {
          e.preventDefault();
          fetchData("16", "fooddietprecautions");
        }}
      >
        FOOD & DIETRY PRECAUTIONS
      </Button>

      <Button
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "47px",
          top: "80px",
          left: "958px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
        onClick={(e) => {
          e.preventDefault();
          fetchData("16", "fooddietprecautions");
        }}
      >
        RECOMMENDED DOCTORS
      </Button>

      <div
        style={{
          position: "absolute",
          width: "1183px",
          height: "546px",
          top: "171px",
          left: "104px",
          textAlign: "center",
          alignContent: "center",
          textTransform: "uppercase",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {recommendationData.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Recomendations;
