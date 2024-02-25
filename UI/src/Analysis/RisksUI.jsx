import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import InfoRow from "./InfoRow";
import axios1 from "../api/axios1";

const RisksUI = ({ biomarker }) => {
  console.log("risk ui, ", biomarker);
  const [loading, setLoading] = useState(true);
  const [bioMarkerInfoData, setBioMarkerInfoData] = React.useState({});

  const fetchBioMarkerInfo = async (biomarkerName) => {
    try {
      setLoading(true);
      console.log("inside fetch biomarkers");
      const bioMarkerInfoResponse = await axios1.get(
        `/get_biomarker_info/16/${biomarkerName}`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("response data:", bioMarkerInfoResponse.data);
      if (bioMarkerInfoResponse.data !== null) {
        setBioMarkerInfoData(bioMarkerInfoResponse.data);
        console.log("setted current biomarkers data:", bioMarkerInfoData);
        setLoading(false);
      }
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBioMarkerInfo(biomarker);
    console.log("in useeffect: ", bioMarkerInfoData);
  }, [biomarker]);

  return (
    <>
      {loading && Object.keys(bioMarkerInfoData).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Risks</h2>
          {Object.keys(bioMarkerInfoData).length !== 0 && (
            <InfoRow
              name={bioMarkerInfoData.biomarker_name}
              desc={bioMarkerInfoData.biomarker_name}
              normalRange={bioMarkerInfoData.normal_range}
              value={bioMarkerInfoData.value}
              units={bioMarkerInfoData.units}
              lineValues={bioMarkerInfoData.referenceValues}
            />
          )}

          <div style={{ padding: "5px 0px" }}>
            <strong>cholestrol</strong>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <LineChart />
              <div
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  height: "200px",
                }}
              >
                <strong>About Creatimine</strong>
                <p>something about something</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RisksUI;
