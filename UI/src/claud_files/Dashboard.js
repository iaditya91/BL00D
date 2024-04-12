import React, { useState } from "react";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import axios from "../api/axios1";
import { Input } from "@mui/material";
import Button from "@mui/material/Button";


// Adding user feedback feature --try this code segment

const Dashboard = () => {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setUploadStatus('uploading');

      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/upload_excel', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('File uploaded successfully:', response.data);
      setUploadStatus('success');

      // Delay navigation to allow the success message to be displayed
      setTimeout(() => {
        navigate("/reference");
      }, 1500);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('error');
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
              <label htmlFor="blood-report-input" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                Choose File
              </label>
              <input id="blood-report-input" type="file" className="hidden" onChange={handleFileChange} />
              <span className="ml-4 text-gray-500">
                {fileName ? `${fileName} uploaded` : 'No file chosen'}
              </span>
              <span className="ml-4 text-gray-500">
                <button
                  className="w-full bg-blue-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={handleUpload}
                  disabled={uploadStatus === 'uploading'}
                >
                  {uploadStatus === 'uploading' ? 'Uploading...' : 'Submit'}
                </button>
              </span>
            </div>
            {uploadStatus === 'success' && (
              <p className="mt-4 text-green-500">File uploaded successfully!</p>
            )}
            {uploadStatus === 'error' && (
              <p className="mt-4 text-red-500">Error uploading file. Please try again.</p>
            )}
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



// const Dashboard = () => {
//   const [fileName, setFileName] = useState('');
//   const [file, setFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState(null);
//   const navigate = useNavigate();

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);
//     } else {
//       setFileName('');
//     }
//     setFile(event.target.files[0]);
//   };

//   // const handleUpload = async () => {
//   //   try {
//   //     setUploadStatus('uploading');
//   //     const formData = new FormData();
//   //     formData.append('file', file);
//   //     const response = await axios.post('/upload_file', formData, {
//   //       headers: {
//   //         'Content-Type': 'multipart/form-data'
//   //       }
//   //     });
//   //     console.log('File uploaded successfully:', response.data);
//   //     setUploadStatus('success');
//   //     // Delay navigation to allow the success message to be displayed
//   //     setTimeout(() => {
//   //       navigate("/analysispage");
//   //     }, 1500);
//   //   } catch (error) {
//   //     console.error('Error uploading file:', error);
//   //     setUploadStatus('error');
//   //   }
//   // };
//   const handleUpload = async () => {
//     try {
//       setUploadStatus('uploading');
//       const formData = new FormData();
//       formData.append('file', file);
//       const response = await axios.post('/upload_file', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('File uploaded successfully:', response.data);
//       setUploadStatus('success');
//       setTimeout(() => {
//         navigate("/analysispage");
//       }, 1500);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setUploadStatus('error');
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
//               <label htmlFor="blood-report-input" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer">
//                 Choose File
//               </label>
//               <input id="blood-report-input" type="file" className="hidden" onChange={handleFileChange} />
//               <span className="ml-4 text-gray-500">
//                 {fileName ? `${fileName} uploaded` : 'No file chosen'}
//               </span>
//               <span className="ml-4 text-gray-500">
//                 <button
//                   className="w-full bg-blue-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded"
//                   onClick={handleUpload}
//                   disabled={uploadStatus === 'uploading'}
//                 >
//                   {uploadStatus === 'uploading' ? 'Uploading...' : 'Submit'}
//                 </button>
//               </span>
//             </div>
//             {uploadStatus === 'success' && (
//               <p className="mt-4 text-green-500">File uploaded successfully!</p>
//             )}
//             {uploadStatus === 'error' && (
//               <p className="mt-4 text-red-500">Error uploading file. Please try again.</p>
//             )}
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