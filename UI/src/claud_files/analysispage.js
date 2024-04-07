import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import Navbar from './Navbar';

// Navbar component
// function Navbar() {
//   return (
//     <nav className="bg-green-500 text-white py-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-2xl font-bold">BLOOD</div>
//         <ul className="flex space-x-4">
//           <li><a href="/" className="hover:text-gray-200">Home</a></li>
//           <li><a href="/support" className="hover:text-gray-200">Support</a></li>
//           <li><a href="/account" className="hover:text-gray-200">My Account</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// BiomarkerChart component
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

// LatestBorderline component
function LatestBorderline() {
  const [latestBorderline, setLatestBorderline] = useState(null);

  useEffect(() => {
    fetchLatestBorderline();
  }, []);

  const fetchLatestBorderline = async () => {
    try {
      const response = await axios.get('/api/latest-borderline');
      setLatestBorderline(response.data);
    } catch (error) {
      console.error('Error fetching latest borderline:', error);
    }
  };

  if (!latestBorderline) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Latest Borderline</h2>
      <div className="bg-gray-100 p-4 rounded">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{latestBorderline.biomarker}</div>
            <div className="text-xl font-bold">{latestBorderline.value} g/dL</div>
          </div>
          <div className="text-sm text-gray-500">
            Normal range {latestBorderline.normalRange.min} - {latestBorderline.normalRange.max} g/dL
          </div>
        </div>
        <div className="mt-4">
          {/* Add borderline indicator component here */}
        </div>
      </div>
    </div>
  );
}

// App component
function analysispage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
          SELECT BIOMARKER FOR ANALYSIS
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BiomarkerChart />
          <LatestBorderline />
        </div>
      </main>
    </div>
  );
}

export default analysispage;