import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios1 from "./api/axios1";
import TopBar from "./TopBar";

function Recomendations() {
  const [recommendationData, setRecommendationData] = useState([
    "1. endurance: something about endurance",
  ]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (fileId, queryPrompt) => {
    try {
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
      //setLoading(false); // Set loading to false even if API call fails
    }
  };

  useEffect(() => {
    fetchData("16", "healthdatarecommendations");
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
                {/* Display your data here */}
                <p>{item}</p>
              </div>
            ))}
          </div>
        )}

        {/* {loading ? (
        <div>Loading spinner...</div>
      ) : (
        {data && data.length > 0 ? (
          data.map((data, index) => {
            <p key={index}>{data}</p>;
          })
        ) 
        } */}
        {/* <h4 style={{margin: "7px 0px 0px 0px"}}>Endurance:</h4>     
Ferritin, Iron Serum, Hematocrit, and RBC levels are within the normal range, suggesting good endurance.
Ensure a balanced diet with sufficient iron-rich foods to maintain these levels.

 <h4 style={{margin: "7px 0px 0px 0px"}}>Heart Health:</h4> 
Cholesterol levels are generally within the normal range.
Maintain a heart-healthy diet, low in saturated fats and cholesterol.
Regular physical activity is important for overall cardiovascular health.

<h4 style={{margin: "7px 0px 0px 0px"}}>Inflammation:</h4>
WBC count is within the normal range.
Monitor and manage inflammation by maintaining a healthy lifestyle, including regular exercise, a balanced diet, and stress management.

<h4 style={{margin: "7px 0px 0px 0px"}}>Metabolism:</h4>
Glucose and Hemoglobin A1C levels are within the normal range.
Continue to monitor blood glucose levels, maintain a healthy diet, and engage in regular physical activity.

<h4 style={{margin: "7px 0px 0px 0px"}}>Recovery:</h4>
Albumin levels are within the  normal range, indicating good recovery.
Adequate hydration and a balanced diet are crucial for recovery.

<h4 style={{margin: "7px 0px 0px 0px"}}>Liver Function:</h4>
ALT levels are within the normal range.
Limit alcohol intake, maintain a healthy weight, and consider liver-friendly foods.

<h4 style={{margin: "7px 0px 0px 0px"}}>Electrolytes:</h4>
Sodium and potassium levels are within the normal range.
Ensure a balanced intake of electrolyte-rich foods and stay hydrated.

<h4 style={{margin: "7px 0px 0px 0px"}}>Thyroid Function:</h4>
Thyroid-related markers (T3 Total Serum, Thyroid Stimulating Hormone) are within the normal range.
Regular monitoring and consultation with an endocrinologist are advisable.

<h4 style={{margin: "7px 0px 0px 0px"}}>Kidney Function:</h4>
Creatinine levels are within the normal range.
Stay hydrated and maintain a healthy lifestyle to support kidney function.

<h4 style={{margin: "7px 0px 0px 0px"}}>Overall:</h4>
Consider a well-balanced diet rich in fruits, vegetables, lean proteins, and whole grains.
Engage in regular physical activity.
Manage stress through relaxation techniques. */}
      </div>
    </>
  );
}

export default Recomendations;
