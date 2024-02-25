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
import RisksUI from "./RisksUI";
import BorderLineUI from "./BorderLineUI";

function Analysis() {
  const [selectedBiomarker, setSelectedBiomarker] = React.useState("");
  const [currentBiomarkers, setCurrentBiomarkers] = React.useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [bioMarkerLoading, setBioMarkerLoading] = useState(true);

  const handleSelectBioMarkerChange = (event) => {
    setSelectedBiomarker(event.target.value);
  };

  const fetchBioMarkersFromExcel = async () => {
    try {
      console.log("inside fetch biomarkers");
      const bioMarkersResponse = await axios1.get(
        `/get_excel_data_biomarkers/16`,
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
        setPageLoading(false); // Set loading to false when API call succeeds
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
            {currentBiomarkers && currentBiomarkers.length>0 && currentBiomarkers.map((biomarker, index) => (
              <MenuItem key={index} value={biomarker}>
                {biomarker}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
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

      {selectedBiomarker && (
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
          {<RisksUI biomarker = {selectedBiomarker}/>}
          {<BorderLineUI biomarker= {selectedBiomarker}/>}
        </div>
      )}
    </>
  );
}

export default Analysis;
