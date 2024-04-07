import Navbar from './Navbar';

// function BiomarkerChart() {
//   return (
//     <div>
//       <Navbar/>
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-bold">Risks</h2>
//         <select className="border p-2">
//           <option>HCT</option>
//           {/* Add other biomarker options */}
//         </select>
//       </div>
//       <div className="bg-gray-100 p-4">
//         {/* Add chart component here */}
//       </div>
//       <p className="mt-4">HCT is a biomarker that measures the percentage of red blood cells in the blood, indicating the oxygen-carrying capacity and overall health of an individual.</p>
//     </div>
//   );
// }

// export default BiomarkerChart;

import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

function BiomarkerChart() {
  const [selectedBiomarker, setSelectedBiomarker] = useState('HCT');
  const [biomarkerData, setBiomarkerData] = useState([]);

  useEffect(() => {
    fetchBiomarkerData();
  }, [selectedBiomarker]);

  const fetchBiomarkerData = async () => {
    try {
      const response = await axios.get(`/api/biomarkers/${selectedBiomarker}`);
      setBiomarkerData(response.data);
    } catch (error) {
      console.error('Error fetching biomarker data:', error);
    }
  };

  const handleBiomarkerChange = (event) => {
    setSelectedBiomarker(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Risks</h2>
        <select className="border p-2" value={selectedBiomarker} onChange={handleBiomarkerChange}>
          <option value="HCT">HCT</option>
          {/* Add other biomarker options */}
        </select>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <LineChart width={500} height={300} data={biomarkerData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[35, 50]} ticks={[35, 37.2, 40.9, 44.83, 48, 52, 57, 60.07]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
      <div className="mt-4 flex justify-between">
        <p className="text-gray-600">
          {selectedBiomarker} is a biomarker that measures...
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          more
        </button>
      </div>
    </div>
  );
}

export default BiomarkerChart;


// In this updated code:
// - The `useState` hook is used to manage the selected biomarker (`selectedBiomarker`) and the fetched biomarker data (`biomarkerData`).
// - The `useEffect` hook is used to fetch the biomarker data from the backend API whenever the selected biomarker changes.
// - The `fetchBiomarkerData` function uses `axios` to make an HTTP GET request to the backend API endpoint `/api/biomarkers/${selectedBiomarker}` to fetch the data for the selected biomarker.
// - The fetched data is stored in the `biomarkerData` state variable using the `setBiomarkerData` function.
// - The `handleBiomarkerChange` function is called when the user selects a different biomarker from the dropdown, updating the `selectedBiomarker` state.
// - The chart is updated automatically when the `biomarkerData` state changes.
// - The biomarker description below the chart is updated based on the selected biomarker.

// Note: Make sure to have the `axios` library installed (`npm install axios` or `yarn add axios`) and replace `/api/biomarkers/${selectedBiomarker}` with your actual backend API endpoint for fetching biomarker data.

// Remember to handle any errors that may occur during the API request and update the chart and biomarker description based on the fetched data.