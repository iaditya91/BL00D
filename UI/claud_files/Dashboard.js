import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
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
              <input id="blood-report-input" type="file" className="hidden" />
              <span className="ml-4 text-gray-500">No file chosen</span>
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