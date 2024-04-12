import React, { useState, useEffect } from "react";
import axios1 from "../api/axios1";
import Navbar from "./Navbar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { triggerGet } from "../api/axiosFunctions";


const COLORS = ["#0088FE", "#FF8042"];

const BloodReportAnalytics = () => {
  const [bioMarkersList, setBioMarkersList] = useState([]);
  const [selectedBiomarker, setSelectedBiomarker] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);

  const fetchBioMarkersFromExcel = async () => {
    try {
      const bioMarkersListResponse = await triggerGet(
        "/get_excel_data_biomarkers/16"
      );
      console.log("response data:", bioMarkersListResponse.data);
      setBioMarkersList(bioMarkersListResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBioMarkersFromExcel();
  }, []);

  useEffect(() => {
    if (selectedBiomarker) {
      console.log("fetching line chart data & pie chart data for ", selectedBiomarker);
      fetchLineChartData(selectedBiomarker);
      fetchPieChartData(selectedBiomarker);
    }
  }, [selectedBiomarker]);

  const fetchPieChartData = async (biomarkerId) => {
    try {
      const response = await triggerGet(`/api/biomarkers/pie-chart/${biomarkerId}`);
      setPieData(response.data);
    } catch (error) {
      console.error("Error fetching pie chart data:", error);
    }
  };

  const fetchLineChartData = async (biomarkerId) => {
    try {
      const response = await triggerGet(
        `/get_excel_data_LineChart/16/${biomarkerId}`
      );
      if (response.data !== null) {
        const { date, values } = response.data;
        const parsedLineData = date.map((d, i) => ({
          name: d,
          value: values[i],
        }));
        setLineData(parsedLineData);
      }
    } catch (error) {
      console.error("Error fetching line chart data:", error);
    }
  };

  const handleBiomarkerChange = (event) => {
    const selectedId = event.target.value;
    const selectedBiomarker = bioMarkersList.find(
      (biomarker) => biomarker === selectedId
    );
    setSelectedBiomarker(selectedBiomarker);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        {/* <h1 className="text-3xl font-bold mb-8">Blood Report Analytics</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Biomarker Trend</h2>
            <div className="mb-4">
              <label htmlFor="biomarker-select" className="block mb-2">
                Select Biomarker:
              </label>
              <select
                id="biomarker-select"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedBiomarker || ""}
                onChange={handleBiomarkerChange}
              >
                {bioMarkersList &&
                  bioMarkersList.length > 0 &&
                  bioMarkersList.map((biomarker, index) => (
                    <option key={index} value={biomarker}>
                      {biomarker}
                    </option>
                  ))}
              </select>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <LineChart width={500} height={300} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
            <div className="bg-white shadow-md rounded-md p-4">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieData}
                  cx={200}
                  cy={200}
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodReportAnalytics;
