import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";

function Recommendations() {
  const [selectedSection, setSelectedSection] = useState('');
  const [sectionData, setSectionData] = useState(null);
  const [fileId, setFileId] = useState('');
  const [biomarker, setBiomarker] = useState('');

  const handleSectionClick = async (section) => {
    setSelectedSection(section);
    try {
      const response = await axios.get(`/generate_content/${fileId}/${biomarker}/${section}`);
      setSectionData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSectionData(null);
    }
  };

  const handleFileIdChange = (event) => {
    setFileId(event.target.value);
  };

  const handleBiomarkerChange = (event) => {
    setBiomarker(event.target.value);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="File ID"
            value={fileId}
            onChange={handleFileIdChange}
            className="border border-gray-300 rounded px-4 py-2 mr-4"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <button
            className={`bg-blue-500 text-white p-1 rounded-lg ${
              selectedSection === 'healthDataRecommendations' ? 'bg-blue-600' : ''
            }`}
            onClick={() => handleSectionClick('healthDataRecommendations')}
          >
            <h2 className="text-m font-bold mb-4">HEALTH DATA RECOMENDATIONS</h2>
          </button>
          <button
            className={`bg-green-500 text-white p-1 rounded-lg ${
              selectedSection === 'foodAndDietaryPrecautions' ? 'bg-green-600' : ''
            }`}
            onClick={() => handleSectionClick('foodAndDietaryPrecautions')}
          >
            <h2 className="text-m font-bold mb-4">FOOD & DIETRY PRECAUTIONS</h2>
          </button>
          <button
            className={`bg-blue-500 text-white p-1 rounded-lg ${
              selectedSection === 'recommendedDoctors' ? 'bg-blue-600' : ''
            }`}
            onClick={() => handleSectionClick('recommendedDoctors')}
          >
            <h2 className="text-m font-bold mb-4">RECOMMENDED DOCTORS</h2>
          </button>
        </div>
        {sectionData && (
          <div className="mt-8">
            <h3 className="text-m font-bold mb-4">{selectedSection}</h3>
            <pre className="whitespace-pre-wrap">{sectionData}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default Recommendations;