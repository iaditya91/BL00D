

// //Excellent job Developer CREDITS :  UMAMAHESWAR EDARA

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
  Sector,
  ResponsiveContainer,
} from "recharts";
import { triggerGet } from "../api/axiosFunctions";

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        <p className="label">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Value ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const BloodReportAnalytics = () => {
  const [bioMarkersList, setBioMarkersList] = useState([]);
  const [selectedBiomarker, setSelectedBiomarker] = useState(null);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

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

  const fetchAvailableDates = async () => {
    try {
      const response = await triggerGet(`/get_available_dates/16/dates`);
      setAvailableDates(response.data);
    } catch (error) {
      console.error("Error fetching available dates:", error);
    }
  };

  useEffect(() => {
    fetchBioMarkersFromExcel();
    fetchAvailableDates();
  }, []);

  useEffect(() => {
    if (selectedBiomarker) {
      console.log("fetching line chart data & pie chart data for ", selectedBiomarker);
      fetchLineChartData(selectedBiomarker);
      fetchPieChartData(selectedBiomarker, selectedDate);
    }
  }, [selectedBiomarker, selectedDate]);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);

    // Fetch pie chart data for the selected date
    fetchPieChartData(selectedBiomarker, selectedDate);
  };

  const fetchLineChartData = async (biomarkerId) => {
    try {
      const response = await triggerGet(
        `/get_excel_data_LineChart/16/${biomarkerId}`
      );
      if (response.data !== null) {
        const { dates, values } = response.data;
        const parsedLineData = dates.map((d, i) => ({
          name: d,
          value: values[i],
        }));
        setLineData(parsedLineData);
      }
    } catch (error) {
      console.error("Error fetching line chart data:", error);
    }
  };

  const fetchPieChartData = async (biomarkerId, date) => {
    try {
      const response = await triggerGet(`/get_excel_data_pie/16/${date}`);
      const {
        below_range_biomarkers,
        within_range_biomarkers,
        above_range_biomarkers,
      } = response.data;

      const pieChartData = [
        {
          name: "Below Range",
          value: below_range_biomarkers.length,
        },
        {
          name: "Within Range",
          value: within_range_biomarkers.length,
        },
        {
          name: "Above Range",
          value: above_range_biomarkers.length,
        },
      ];

      setPieData(pieChartData);
    } catch (error) {
      console.error("Error fetching pie chart data:", error);
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
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
            <div className="mb-4">
              <label htmlFor="date-select" className="block mb-2">
                Select Date:
              </label>
              <select
                id="date-select"
                className="w-full p-2 border border-gray-300 rounded"
                value={selectedDate || ""}
                onChange={handleDateChange}
              >
                <option value="">Select a date</option>
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-white shadow-md rounded-md p-4">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    onMouseEnter={(_, index) => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke={
                          hoverIndex === index
                            ? "#fff"
                            : COLORS[index % COLORS.length]
                        }
                        strokeWidth={4}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ strokeDasharray: "3 3" }}
                    wrapperStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "8px",
                      padding: "8px",
                    }}
                  />
                  <Legend
                    payload={pieData.map((entry, index) => ({
                      id: entry.name,
                      type: "square",
                      value: `${entry.name} (${entry.value})`,
                      color: COLORS[index % COLORS.length],
                      inactive: index !== activeIndex && activeIndex !== null,
                    }))}
                    wrapperStyle={{ padding: "8px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BloodReportAnalytics
// 3D rendering  export default BloodReportAnalytics;

// import React, { useState, useEffect } from "react";
// import axios1 from "../api/axios1";
// import Navbar from "./Navbar";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   Sector,
//   ResponsiveContainer,
// } from "recharts";
// import { triggerGet } from "../api/axiosFunctions";

// const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         className="custom-tooltip"
//         style={{
//           backgroundColor: "#fff",
//           border: "1px solid #ccc",
//           padding: "8px",
//           borderRadius: "4px",
//         }}
//       >
//         <p className="label">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
//       </div>
//     );
//   }

//   return null;
// };

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`Value ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// const BloodReportAnalytics = () => {
//   const [bioMarkersList, setBioMarkersList] = useState([]);
//   const [selectedBiomarker, setSelectedBiomarker] = useState(null);
//   const [pieData, setPieData] = useState([]);
//   const [lineData, setLineData] = useState([]);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const fetchBioMarkersFromExcel = async () => {
//     try {
//       const bioMarkersListResponse = await triggerGet(
//         "/get_excel_data_biomarkers/16"
//       );
//       console.log("response data:", bioMarkersListResponse.data);
//       setBioMarkersList(bioMarkersListResponse.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchAvailableDates = async () => {
//     try {
//       const response = await triggerGet(`/get_available_dates/16/dates`);
//       setAvailableDates(response.data);
//     } catch (error) {
//       console.error("Error fetching available dates:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBioMarkersFromExcel();
//     fetchAvailableDates();
//   }, []);

//   useEffect(() => {
//     if (selectedBiomarker) {
//       console.log("fetching line chart data & pie chart data for ", selectedBiomarker);
//       fetchLineChartData(selectedBiomarker);
//       fetchPieChartData(selectedBiomarker, selectedDate);
//     }
//   }, [selectedBiomarker, selectedDate]);

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);

//     // Fetch pie chart data for the selected date
//     fetchPieChartData(selectedBiomarker, selectedDate);
//   };

//   const fetchLineChartData = async (biomarkerId) => {
//     try {
//       const response = await triggerGet(
//         `/get_excel_data_LineChart/16/${biomarkerId}`
//       );
//       if (response.data !== null) {
//         const { dates, values } = response.data;
//         const parsedLineData = dates.map((d, i) => ({
//           name: d,
//           value: values[i],
//         }));
//         setLineData(parsedLineData);
//       }
//     } catch (error) {
//       console.error("Error fetching line chart data:", error);
//     }
//   };

//   const fetchPieChartData = async (biomarkerId, date) => {
//     try {
//       const response = await triggerGet(`/get_excel_data_pie/16/${date}`);
//       const {
//         below_range_biomarkers,
//         within_range_biomarkers,
//         above_range_biomarkers,
//       } = response.data;

//       const pieChartData = [
//         {
//           name: "Below Range",
//           value: below_range_biomarkers.length,
//         },
//         {
//           name: "Within Range",
//           value: within_range_biomarkers.length,
//         },
//         {
//           name: "Above Range",
//           value: above_range_biomarkers.length,
//         },
//       ];

//       setPieData(pieChartData);
//     } catch (error) {
//       console.error("Error fetching pie chart data:", error);
//     }
//   };

//   const handleBiomarkerChange = (event) => {
//     const selectedId = event.target.value;
//     const selectedBiomarker = bioMarkersList.find(
//       (biomarker) => biomarker === selectedId
//     );
//     setSelectedBiomarker(selectedBiomarker);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Trend</h2>
//             <div className="mb-4">
//               <label htmlFor="biomarker-select" className="block mb-2">
//                 Select Biomarker:
//               </label>
//               <select
//                 id="biomarker-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedBiomarker || ""}
//                 onChange={handleBiomarkerChange}
//               >
//                 {bioMarkersList &&
//                   bioMarkersList.length > 0 &&
//                   bioMarkersList.map((biomarker, index) => (
//                     <option key={index} value={biomarker}>
//                       {biomarker}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <ResponsiveContainer width="100%" height={400}>
//                 <LineChart data={lineData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#8884d8"
//                     strokeWidth={2}
//                     dot={{ r: 5 }}
//                     activeDot={{ r: 8 }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
//             <div className="mb-4">
//               <label htmlFor="date-select" className="block mb-2">
//                 Select Date:
//               </label>
//               <select
//                 id="date-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedDate || ""}
//                 onChange={handleDateChange}
//               >
//                 <option value="">Select a date</option>
//                 {availableDates.map((date, index) => (
//                   <option key={index} value={date}>
//                     {date}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <ResponsiveContainer width="100%" height={400}>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={120}
//                     fill="#8884d8"
//                     dataKey="value"
//                     activeIndex={activeIndex}
//                     activeShape={renderActiveShape}
//                     onMouseEnter={(_, index) => setHoverIndex(index)}
//                     onMouseLeave={() => setHoverIndex(null)}
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={COLORS[index % COLORS.length]}
//                         stroke={
//                           hoverIndex === index
//                             ? "#fff"
//                             : COLORS[index % COLORS.length]
//                         }
//                         strokeWidth={4}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip
//                     content={<CustomTooltip />}
//                     cursor={{ strokeDasharray: "3 3" }}
//                     wrapperStyle={{
//                       backgroundColor: "rgba(255, 255, 255, 0.8)",
//                       borderRadius: "8px",
//                       padding: "8px",
//                     }}
//                   />
//                   <Legend
//                     payload={pieData.map((entry, index) => ({
//                       id: entry.name,
//                       type: "square",
//                       value: `${entry.name} (${entry.value})`,
//                       color: COLORS[index % COLORS.length],
//                       inactive: index !== activeIndex && activeIndex !== null,
//                     }))}
//                     wrapperStyle={{ padding: "8px" }}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

////////////////////////////////////////////////////////////////////////////////////////////3D SUEDO Feel export default BloodReportAnalytics;
// import React, { useState, useEffect } from "react";
// import axios1 from "../api/axios1";
// import Navbar from "./Navbar";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   Sector,
//   ResponsiveContainer,
//   Area,
// } from "recharts";
// import { triggerGet } from "../api/axiosFunctions";

// const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         className="custom-tooltip"
//         style={{
//           backgroundColor: "#fff",
//           border: "1px solid #ccc",
//           padding: "8px",
//           borderRadius: "4px",
//         }}
//       >
//         <p className="label">{`${payload[0].payload.name} : ${payload[0].value}`}</p>
//       </div>
//     );
//   }

//   return null;
// };

// const renderActiveShape = (props) => {
//   const RADIAN = Math.PI / 180;
//   const {
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     percent,
//     value,
//   } = props;
//   const sin = Math.sin(-RADIAN * midAngle);
//   const cos = Math.cos(-RADIAN * midAngle);
//   const sx = cx + (outerRadius + 10) * cos;
//   const sy = cy + (outerRadius + 10) * sin;
//   const mx = cx + (outerRadius + 30) * cos;
//   const my = cy + (outerRadius + 30) * sin;
//   const ex = mx + (cos >= 0 ? 1 : -1) * 22;
//   const ey = my;
//   const textAnchor = cos >= 0 ? "start" : "end";

//   return (
//     <g>
//       <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
//         {payload.name}
//       </text>
//       <Sector
//         cx={cx}
//         cy={cy}
//         innerRadius={innerRadius}
//         outerRadius={outerRadius}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         fill={fill}
//       />
//       <Sector
//         cx={cx}
//         cy={cy}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         innerRadius={outerRadius + 6}
//         outerRadius={outerRadius + 10}
//         fill={fill}
//       />
//       <path
//         d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
//         stroke={fill}
//         fill="none"
//       />
//       <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         textAnchor={textAnchor}
//         fill="#333"
//       >{`Value ${value}`}</text>
//       <text
//         x={ex + (cos >= 0 ? 1 : -1) * 12}
//         y={ey}
//         dy={18}
//         textAnchor={textAnchor}
//         fill="#999"
//       >
//         {`(Rate ${(percent * 100).toFixed(2)}%)`}
//       </text>
//     </g>
//   );
// };

// const BloodReportAnalytics = () => {
//   const [bioMarkersList, setBioMarkersList] = useState([]);
//   const [selectedBiomarker, setSelectedBiomarker] = useState(null);
//   const [pieData, setPieData] = useState([]);
//   const [lineData, setLineData] = useState([]);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [hoverIndex, setHoverIndex] = useState(null);

//   const fetchBioMarkersFromExcel = async () => {
//     try {
//       const bioMarkersListResponse = await triggerGet(
//         "/get_excel_data_biomarkers/16"
//       );
//       console.log("response data:", bioMarkersListResponse.data);
//       setBioMarkersList(bioMarkersListResponse.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchAvailableDates = async () => {
//     try {
//       const response = await triggerGet(`/get_available_dates/16/dates`);
//       setAvailableDates(response.data);
//     } catch (error) {
//       console.error("Error fetching available dates:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBioMarkersFromExcel();
//     fetchAvailableDates();
//   }, []);

//   useEffect(() => {
//     if (selectedBiomarker) {
//       console.log("fetching line chart data & pie chart data for ", selectedBiomarker);
//       fetchLineChartData(selectedBiomarker);
//       fetchPieChartData(selectedBiomarker, selectedDate);
//     }
//   }, [selectedBiomarker, selectedDate]);

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);

//     // Fetch pie chart data for the selected date
//     fetchPieChartData(selectedBiomarker, selectedDate);
//   };

//   const fetchLineChartData = async (biomarkerId) => {
//     try {
//       const response = await triggerGet(
//         `/get_excel_data_LineChart/16/${biomarkerId}`
//       );
//       if (response.data !== null) {
//         const { dates, values } = response.data;
//         const parsedLineData = dates.map((d, i) => ({
//           name: d,
//           value: values[i],
//         }));
//         setLineData(parsedLineData);
//       }
//     } catch (error) {
//       console.error("Error fetching line chart data:", error);
//     }
//   };

//   const fetchPieChartData = async (biomarkerId, date) => {
//     try {
//       const response = await triggerGet(`/get_excel_data_pie/16/${date}`);
//       const {
//         below_range_biomarkers,
//         within_range_biomarkers,
//         above_range_biomarkers,
//       } = response.data;

//       const pieChartData = [
//         {
//           name: "Below Range",
//           value: below_range_biomarkers.length,
//         },
//         {
//           name: "Within Range",
//           value: within_range_biomarkers.length,
//         },
//         {
//           name: "Above Range",
//           value: above_range_biomarkers.length,
//         },
//       ];

//       setPieData(pieChartData);
//     } catch (error) {
//       console.error("Error fetching pie chart data:", error);
//     }
//   };

//   const handleBiomarkerChange = (event) => {
//     const selectedId = event.target.value;
//     const selectedBiomarker = bioMarkersList.find(
//       (biomarker) => biomarker === selectedId
//     );
//     setSelectedBiomarker(selectedBiomarker);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Trend</h2>
//             <div className="mb-4">
//               <label htmlFor="biomarker-select" className="block mb-2">
//                 Select Biomarker:
//               </label>
//               <select
//                 id="biomarker-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedBiomarker || ""}
//                 onChange={handleBiomarkerChange}
//               >
//                 {bioMarkersList &&
//                   bioMarkersList.length > 0 &&
//                   bioMarkersList.map((biomarker, index) => (
//                     <option key={index} value={biomarker}>
//                       {biomarker}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <ResponsiveContainer width="100%" height={400}>
//                 <LineChart data={lineData}>
//                   <defs>
//                     <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//                       <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//                     </linearGradient>
//                   </defs>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke="url(#colorValue)"
//                     strokeWidth={2}
//                     dot={{ r: 5 }}
//                     activeDot={{ r: 8 }}
//                   />
//                   <Area
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#8884d8"
//                     fillOpacity={1}
//                     fill="url(#colorValue)"
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
//             <div className="mb-4">
//               <label htmlFor="date-select" className="block mb-2">
//                 Select Date:
//               </label>
//               <select
//                 id="date-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedDate || ""}
//                 onChange={handleDateChange}
//               >
//                 <option value="">Select a date</option>
//                 {availableDates.map((date, index) => (
//                   <option key={index} value={date}>
//                     {date}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <ResponsiveContainer width="100%" height={400}>
//                 <PieChart>
//                   <Pie
//                     data={pieData}
//                     cx="50%"
//                     cy="50%"
//                     labelLine={false}
//                     outerRadius={120}
//                     fill="#8884d8"
//                     dataKey="value"
//                     activeIndex={activeIndex}
//                     activeShape={renderActiveShape}
//                     onMouseEnter={(_, index) => setHoverIndex(index)}
//                     onMouseLeave={() => setHoverIndex(null)}
//                   >
//                     {pieData.map((entry, index) => (
//                       <Cell
//                         key={`cell-${index}`}
//                         fill={COLORS[index % COLORS.length]}
//                         stroke={
//                           hoverIndex === index
//                             ? "#fff"
//                             : COLORS[index % COLORS.length]
//                         }
//                         strokeWidth={4}
//                       />
//                     ))}
//                   </Pie>
//                   <Tooltip
//                     content={<CustomTooltip />}
//                     cursor={{ strokeDasharray: "3 3" }}
//                     wrapperStyle={{
//                       backgroundColor: "rgba(255, 255, 255, 0.8)",
//                       borderRadius: "8px",
//                       padding: "8px",
//                     }}
//                   />
//                   <Legend
//                     payload={pieData.map((entry, index) => ({
//                       id: entry.name,
//                       type: "square",
//                       value: `${entry.name} (${entry.value})`,
//                       color: COLORS[index % COLORS.length],
//                       inactive: index !== activeIndex && activeIndex !== null,
//                     }))}
//                     wrapperStyle={{ padding: "8px" }}
//                   />
//                 </PieChart>
//               </ResponsiveContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// 3D PieChart3D WITH export default BloodReportAnalytics;

// import React, { useState, useEffect } from "react";
// import axios1 from "../api/axios1";
// import Navbar from "./Navbar";
// import { Canvas } from "@react-three/fiber";
// import { PieChart3D } from "./PieChart3D";
// import { triggerGet } from "../api/axiosFunctions";

// const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

// const BloodReportAnalytics = () => {
//   const [bioMarkersList, setBioMarkersList] = useState([]);
//   const [selectedBiomarker, setSelectedBiomarker] = useState(null);
//   const [pieData, setPieData] = useState([]);
//   const [availableDates, setAvailableDates] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(null);

//   const fetchBioMarkersFromExcel = async () => {
//     try {
//       const bioMarkersListResponse = await triggerGet(
//         "/get_excel_data_biomarkers/16"
//       );
//       console.log("response data:", bioMarkersListResponse.data);
//       setBioMarkersList(bioMarkersListResponse.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const fetchAvailableDates = async () => {
//     try {
//       const response = await triggerGet(`/get_available_dates/16/dates`);
//       setAvailableDates(response.data);
//     } catch (error) {
//       console.error("Error fetching available dates:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBioMarkersFromExcel();
//     fetchAvailableDates();
//   }, []);

//   useEffect(() => {
//     if (selectedBiomarker) {
//       console.log("fetching pie chart data for ", selectedBiomarker);
//       fetchPieChartData(selectedBiomarker, selectedDate);
//     }
//   }, [selectedBiomarker, selectedDate]);

//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value;
//     setSelectedDate(selectedDate);

//     // Fetch pie chart data for the selected date
//     fetchPieChartData(selectedBiomarker, selectedDate);
//   };

//   const fetchPieChartData = async (biomarkerId, date) => {
//     try {
//       const response = await triggerGet(`/get_excel_data_pie/16/${date}`);
//       const {
//         below_range_biomarkers,
//         within_range_biomarkers,
//         above_range_biomarkers,
//       } = response.data;

//       const pieChartData = [
//         {
//           name: "Below Range",
//           value: below_range_biomarkers.length,
//           color: COLORS[0],
//         },
//         {
//           name: "Within Range",
//           value: within_range_biomarkers.length,
//           color: COLORS[1],
//         },
//         {
//           name: "Above Range",
//           value: above_range_biomarkers.length,
//           color: COLORS[2],
//         },
//       ];

//       setPieData(pieChartData);
//     } catch (error) {
//       console.error("Error fetching pie chart data:", error);
//     }
//   };

//   const handleBiomarkerChange = (event) => {
//     const selectedId = event.target.value;
//     const selectedBiomarker = bioMarkersList.find(
//       (biomarker) => biomarker === selectedId
//     );
//     setSelectedBiomarker(selectedBiomarker);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Biomarker Range</h2>
//             <div className="mb-4">
//               <label htmlFor="biomarker-select" className="block mb-2">
//                 Select Biomarker:
//               </label>
//               <select
//                 id="biomarker-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedBiomarker || ""}
//                 onChange={handleBiomarkerChange}
//               >
//                 {bioMarkersList &&
//                   bioMarkersList.length > 0 &&
//                   bioMarkersList.map((biomarker, index) => (
//                     <option key={index} value={biomarker}>
//                       {biomarker}
//                     </option>
//                   ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="date-select" className="block mb-2">
//                 Select Date:
//               </label>
//               <select
//                 id="date-select"
//                 className="w-full p-2 border border-gray-300 rounded"
//                 value={selectedDate || ""}
//                 onChange={handleDateChange}
//               >
//                 <option value="">Select a date</option>
//                 {availableDates.map((date, index) => (
//                   <option key={index} value={date}>
//                     {date}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="bg-white shadow-md rounded-md p-4">
//               <Canvas>
//                 <PieChart3D data={pieData} />
//               </Canvas>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BloodReportAnalytics;