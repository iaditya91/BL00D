import React, { useState, useEffect } from "react";
import LineChart from "./LineChart";
import InfoRow from "./InfoRow";
import TopBar from "../TopBar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios1 from "../api/axios1";

function Analysis() {
  const [selectedBiomarker, setSelectedBiomarker] = React.useState(null);
  const [currentBiomarkers, setCurrentBiomarkers] = React.useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [bioMarkerLoading, setBioMarkerLoading] = useState(true);

  const handleSelectBioMarkerChange = (event) => {
    setSelectedBiomarker(event.target.value);
  };

  const fetchBioMarkersFromExcel = async () => {
    try {
      console.log("inside fetch biomarkers");
      const bioMarkersResponse = await axios1.get(
        `/generate_text/get_excel_data_biomarkers/16`,
        {
          headers: {
            "Content-Type": "application/json", // Example of another header
            Accept: "*/*",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      console.log("response data:", bioMarkersResponse.data);
      if (bioMarkersResponse.data !== null) {
        setCurrentBiomarkers(bioMarkersResponse.data);
        console.log("setted current biomarkers data:", currentBiomarkers);
        pageLoading(false); // Set loading to false when API call succeeds
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      //setLoading(false); // Set loading to false even if API call fails
    }
  };

  useEffect(() => {
    fetchBioMarkersFromExcel();
  }, []);

  const selectBioMarkerUI = () => {
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            SELECT BIOMARKER FOR ANALYSIS
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedBiomarker}
            onChange={handleSelectBioMarkerChange}
          >
            <MenuItem value={10}>Total Cholesterol</MenuItem>
            <MenuItem value={20}>Creatinine</MenuItem>
            <MenuItem value={30}>Vitamin D</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  };

  const risksUI = (selectedBiomarker) => {
    return (
      <>
        <h2>Risks</h2>
        <InfoRow
          name="Total Cholesterol"
          desc="total cholestrol"
          normalRange={[100, 200]}
          value="210"
          units="mg/dl"
          lineValues={[
            [200, "green"],
            [279, "yellow"],
            [315, "red"],
          ]}
        />
        <div
          style={{padding: '5px 0px'}}>
          <strong>Creatinine</strong>

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
    );
  };

  const borderLineUI = (selectedBiomarker) => {
    return (
      <>
        <div>
          <h3>Latest Borderline</h3>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ height: "40px", paddingBottom: "5px" }}>
              <InfoRow
                name="Total Cholesterol"
                desc="total cholestrol"
                normalRange={[100, 200]}
                value="210"
                units="mg/dl"
                lineValues={[
                  [200, "green"],
                  [279, "yellow"],
                  [315, "red"],
                ]}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <TopBar />
      <div
        variant="contained"
        style={{
          position: "absolute",
          width: "328px",
          height: "55px",
          top: "90px",
          left: "116px",
          border: "1px",
          backgroundColor: "#27AE60",
        }}
      >
        {selectBioMarkerUI()}
      </div>
      {/* <div
        className="lineChart1"
        style={{
          position: "absolute",
          width: "588px",
          height: "314px",
          top: "230px",
          left: "102px",
        }}
      >
        <LineChart />
      </div> */}
     { selectedBiomarker &&
      <div
        className="risks"
        style={{
          position: "absolute",
          width: "850px",
          height: "590px",
          top: "85px",
          left: "720px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        {risksUI(selectedBiomarker)}
        {borderLineUI(selectedBiomarker)}
      </div>
}
    </>
  );
}

export default Analysis;
