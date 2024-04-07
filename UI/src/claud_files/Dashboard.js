// import React, { useState } from "react";
// import Navbar from './Navbar';
// import { useNavigate } from "react-router-dom";
// import axios from "../api/axios1";
// import { Input } from "@mui/material";

// // const Dashboard = () => {
// //   const [file, setFile] = useState(null);
// //   const navigate = useNavigate();

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleUpload = async () => {
// //     // if (!file) {
// //     //   alert('Please select a file to upload.');
// //     //   return;
// //     // }

// //     try {
// //       const formData = new FormData();
// //       formData.append('file', file);

// //       // Example POST request using axios to upload file
// //       const response = await axios.post('/upload_excel', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });

// //       console.log('File uploaded successfully:', response.data);
// //       navigate("/reference");
// //     } catch (error) {
// //       console.error('Error uploading file:', error);
// //     }
// //   };

// //   return (
// //     <div className="bg-gray-100 min-h-screen flex flex-col">
// //       <Navbar />
// //       <main className="flex-grow flex flex-col justify-center items-center p-8">
// //         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
// //           <div className="mt-8">
// //             <label htmlFor="blood-report" className="block text-gray-700 font-semibold mb-2">
// //               Upload Blood Report
// //             </label>
// //             <div className="flex items-center justify-center bg-gray-100 rounded-md py-4">
// //               <label
// //                 htmlFor="blood-report-input"
// //                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
// //               >
// //                 Choose File
// //               </label>
// //               <input onClick={handleFileChange} id="blood-report-input" type="file" className="hidden" />
// //               <span className="ml-4 text-gray-500">No file chosen</span>
// //             </div>
// //           </div>
// //           <div className="mt-8">
// //             <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
// //               Integrate Health Apps
// //             </button>
// //           </div>
// //           <div className="mt-4">
// //             <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
// //               Select Medical Care
// //             </button>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// const Dashboard = () => {
//   const [fileName, setFileName] = useState('');

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);
//     } else {
//       setFileName('');
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow flex flex-col justify-center items-center p-8">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <div className="mt-8">
//             <label htmlFor="blood-report" className="block text-gray-700 font-semibold mb-2">
//               Upload Blood Report
//             </label>
//             <div className="flex items-center justify-center bg-gray-100 rounded-md py-4">
//               <label
//                 htmlFor="blood-report-input"
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
//               >
//                 Choose File
//               </label>
//               <input
//                 id="blood-report-input"
//                 type="file"
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//               <span className="ml-4 text-gray-500">
//                 {fileName ? 'File uploaded' : 'No file chosen'}
//               </span>
//             </div>
//           </div>
//           <div className="mt-8">
//             <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
//               Integrate Health Apps
//             </button>
//           </div>
//           <div className="mt-4">
//             <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
//               Select Medical Care
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="mt-8">
            <label htmlFor="blood-report" className="block text-gray-700 font-semibold mb-2">
              Upload Blood Report
            </label>
            <div className="flex items-center justify-center bg-gray-100 rounded-md py-4">
              <label
                htmlFor="blood-report-input"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
              >
                Choose File
              </label>
              <input
                id="blood-report-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="ml-4 text-gray-500">
                {fileName ? 'File uploaded' : 'No file chosen'}
              </span>
            </div>
          </div>
          <div className="mt-8">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
              Integrate Health Apps
            </button>
          </div>
          <div className="mt-4">
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
              Select Medical Care
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;