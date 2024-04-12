import React, { useState, useEffect } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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

// // BiomarkerChart component
// function BiomarkerChart() {
//   const [selectedBiomarker, setSelectedBiomarker] = useState('HCT');
//   const [biomarkerData, setBiomarkerData] = useState([]);

//   useEffect(() => {
//     fetchBiomarkerData();
//   }, [selectedBiomarker]);

//   const fetchBiomarkerData = async () => {
//     try {
//       const response = await axios.get(`/api/biomarkers/${selectedBiomarker}`);
//       setBiomarkerData(response.data);
//     } catch (error) {
//       console.error('Error fetching biomarker data:', error);
//     }
//   };

//   const handleBiomarkerChange = (event) => {
//     setSelectedBiomarker(event.target.value);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-2xl font-bold">Risks</h2>
//         <select className="border p-2" value={selectedBiomarker} onChange={handleBiomarkerChange}>
//           <option value="HCT">HCT</option>
//           {/* Add other biomarker options */}
//         </select>
//       </div>
//       <div className="bg-gray-100 p-4 rounded">
//         <LineChart width={500} height={300} data={biomarkerData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis domain={[35, 50]} ticks={[35, 37.2, 40.9, 44.83, 48, 52, 57, 60.07]} />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
//         </LineChart>
//       </div>
//       <div className="mt-4 flex justify-between">
//         <p className="text-gray-600">
//           {selectedBiomarker} is a biomarker that measures...
//         </p>
//         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
//           more
//         </button>
//       </div>
//     </div>
//   );
// }

// // LatestBorderline component
// function LatestBorderline() {
//   const [latestBorderline, setLatestBorderline] = useState(null);

//   useEffect(() => {
//     fetchLatestBorderline();
//   }, []);

//   const fetchLatestBorderline = async () => {
//     try {
//       const response = await axios.get('/api/latest-borderline');
//       setLatestBorderline(response.data);
//     } catch (error) {
//       console.error('Error fetching latest borderline:', error);
//     }
//   };

//   if (!latestBorderline) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Latest Borderline</h2>
//       <div className="bg-gray-100 p-4 rounded">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="text-sm text-gray-500">{latestBorderline.biomarker}</div>
//             <div className="text-xl font-bold">{latestBorderline.value} g/dL</div>
//           </div>
//           <div className="text-sm text-gray-500">
//             Normal range {latestBorderline.normalRange.min} - {latestBorderline.normalRange.max} g/dL
//           </div>
//         </div>
//         <div className="mt-4">
//           {/* Add borderline indicator component here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// // App component
// function analysispage() {
//   return (
//     <div className="bg-white min-h-screen">
//       <Navbar />
//       <main className="container mx-auto p-4">
//         <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4">
//           SELECT BIOMARKER FOR ANALYSIS
//         </button>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <BiomarkerChart />
//           <LatestBorderline />
//         </div>
//       </main>
//     </div>
//   );
// }

// export default analysispage;

// const COLORS = ['#0088FE', '#FF8042'];

// const BloodReportAnalytics = () => {
//   const [biomarkerData, setBiomarkerData] = useState([]);
//   const [pieData, setPieData] = useState([]);

//   useEffect(() => {
//     fetchBiomarkerData();
//   }, []);

//   const fetchBiomarkerData = async () => {
//     try {
//       const response = await axios.get('/api/biomarkers');
//       const data = response.data;
//       setBiomarkerData(data);

//       // Calculate the pie data based on the fetched biomarker data
//       const safeCount = data.filter(marker => marker.isSafe).length;
//       const outOfRangeCount = data.length - safeCount;
//       setPieData([
//         { name: 'Safe', value: safeCount },
//         { name: 'Out of Range', value: outOfRangeCount },
//       ]);
//     } catch (error) {
//       console.error('Error fetching biomarker data:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-8">Blood Report Analytics</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Biomarker Trend</h2>
//           <div className="bg-white shadow-md rounded-md p-4">
//             <LineChart width={500} height={300} data={biomarkerData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
//             </LineChart>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
//           <div className="bg-white shadow-md rounded-md p-4">
//             <PieChart width={400} height={400}>
//               <Pie
//                 data={pieData}
//                 cx={200}
//                 cy={200}
//                 labelLine={false}
//                 outerRadius={80}
//                 fill="#8884d8"
//                 dataKey="value"
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BloodReportAnalytics;

// const COLORS = ['#0088FE', '#FF8042'];

// const BloodReportAnalytics = () => {
//   const [biomarkerData, setBiomarkerData] = useState([]);
//   const [pieData, setPieData] = useState([]);

//   useEffect(() => {
//     fetchBiomarkerData();
//   }, []);

//   const fetchBiomarkerData = async () => {
//     try {
//       const response = await axios.get('/api/biomarkers');
//       const data = response.data;
//       setBiomarkerData(data);

//       // Calculate the pie data based on the fetched biomarker data
//       const safeCount = data.filter(marker => marker.isSafe).length;
//       const outOfRangeCount = data.length - safeCount;
//       setPieData([
//         { name: 'Safe', value: safeCount },
//         { name: 'Out of Range', value: outOfRangeCount },
//       ]);
//     } catch (error) {
//       console.error('Error fetching biomarker data:', error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-8">Blood Report Analytics</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Trend</h2>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <LineChart width={500} height={300} data={biomarkerData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
//               </LineChart>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <PieChart width={400} height={400}>
//                 <Pie
//                   data={pieData}
//                   cx={200}
//                   cy={200}
//                   labelLine={false}
//                   outerRadius={80}
//                   fill="#8884d8"
//                   dataKey="value"
//                 >
//                   {pieData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BloodReportAnalytics;

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
    // fetchBiomarkers();
    fetchBioMarkersFromExcel();
    // fetchPieChartData();
  }, []);

  useEffect(() => {
    if (selectedBiomarker) {
      console.log("fetching line chart data for ", selectedBiomarker);
      fetchLineChartData(selectedBiomarker);
    }
  }, [selectedBiomarker]);

  const fetchPieChartData = async () => {
    try {
      const response = await axios1.get("/api/biomarkers/pie-chart");
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
      setLineData(response.data);
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
