import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import InfoRow from "./InfoRow";
import axios1 from "../api/axios1";

const RisksUI = ({ biomarker }) => {
  console.log("risk ui, ", biomarker);
  const [loading, setLoading] = useState(true);
  const [bioMarkerInfoData, setBioMarkerInfoData] = React.useState({});
  const [bioMarkerGraphData, setBioMarkerGraphData] = React.useState({});
  const [bioMarkerDescData, setBioMarkerDescData] = React.useState("");

  const fetchBioMarkerInfo = async (biomarkerName) => {
    try {
      // setLoading(true);
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
        // setLoading(false);
      }
      // setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  const fetchBioMarkerDesc = async (biomarkerName) => {
    try {
      // setLoading(true);
      console.log("inside fetch biomarkers desc");
      const bioMarkerDescResponse = await axios1.get(
        `/generate_content/16/${biomarkerName}/about`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("response data:", bioMarkerDescResponse.data);
      if (bioMarkerDescResponse.data !== null) {
        setBioMarkerDescData(bioMarkerDescResponse.data);
        console.log("setted current biomarkers data:", bioMarkerDescData);
        // setLoading(false);
      }
      // setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  const fetchGraphData = async (biomarkerName) => {
    try {
      // setLoading(true);
      console.log("inside fetch biomarkers graph");
      const bioMarkerGraphResponse = await axios1.get(
        `/get_excel_data_LineChart/16/${biomarkerName}`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("graph response data:", bioMarkerGraphResponse.data);
      if (bioMarkerGraphResponse.data !== null) {
        setBioMarkerGraphData(bioMarkerGraphResponse.data);
        console.log("setted current biomarkers data:", bioMarkerGraphData);
        // setLoading(false);
      }
      // setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBioMarkerInfo(biomarker);
    fetchBioMarkerDesc(biomarker);
    fetchGraphData(biomarker);
    setLoading(false);
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
            <strong>{biomarker}</strong>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <LineChart graphData={bioMarkerGraphData}/>
              <div
                style={{
                  // border: "1px solid black",
                  padding: "5px",
                  height: "200px",
                }}
              >
                <strong>About {biomarker}</strong>
                <p>{bioMarkerDescData}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default RisksUI;
