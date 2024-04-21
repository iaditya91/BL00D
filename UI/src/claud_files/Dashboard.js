import React, { useState, useEffect, useContext } from "react";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import AuthContext from './Authentication/AuthProvider';
import { FaUser } from "react-icons/fa";
import { triggerGetWithAuth, triggerPostFormWithAuth, triggerPostWithAuth } from "../api/axiosFunctions";

const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user details from the server
    const fetchUserDetails = async () => {
      try {
        const response = await triggerGetWithAuth("/api/user", auth.access_token);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, []);

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
      const response = await triggerPostFormWithAuth('/api/upload_excel', formData, auth.access_token);
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
          {user && (
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-500 rounded-full p-4">
                  <FaUser className="text-white text-4xl" />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <div>
                    <p className="text-gray-600 font-bold">Age</p>
                    <p className="text-gray-800">{user.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold">Gender</p>
                    <p className="text-gray-800">{user.gender}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                <button className="w-full bg-blue-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded" onClick={handleUpload} disabled={uploadStatus === 'uploading'}>
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