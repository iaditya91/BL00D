import React, { useState } from 'react';
import axios from 'axios';

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
      <nav className="bg-green-500 text-white py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">BLOOD</div>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-200">Home</a></li>
            <li><a href="/support" className="hover:text-gray-200">Support</a></li>
            <li><a href="/account" className="hover:text-gray-200">My Account</a></li>
          </ul>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        <div className="mb-8">
          <input
            type="text"
            placeholder="File ID"
            value={fileId}
            onChange={handleFileIdChange}
            className="border border-gray-300 rounded px-4 py-2 mr-4"
          />
          <input
            type="text"
            placeholder="Biomarker"
            value={biomarker}
            onChange={handleBiomarkerChange}
            className="border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <button
            className={`bg-green-500 text-white p-8 rounded-lg ${
              selectedSection === 'healthDataRecommendations' ? 'bg-green-600' : ''
            }`}
            onClick={() => handleSectionClick('healthDataRecommendations')}
          >
            <h2 className="text-2xl font-bold mb-4">HEALTH DATA RECOMENDATIONS</h2>
          </button>
          <button
            className={`bg-blue-500 text-white p-8 rounded-lg ${
              selectedSection === 'foodAndDietaryPrecautions' ? 'bg-blue-600' : ''
            }`}
            onClick={() => handleSectionClick('foodAndDietaryPrecautions')}
          >
            <h2 className="text-2xl font-bold mb-4">FOOD & DIETRY PRECAUTIONS</h2>
          </button>
          <button
            className={`bg-purple-500 text-white p-8 rounded-lg ${
              selectedSection === 'recommendedDoctors' ? 'bg-purple-600' : ''
            }`}
            onClick={() => handleSectionClick('recommendedDoctors')}
          >
            <h2 className="text-2xl font-bold mb-4">RECOMMENDED DOCTORS</h2>
          </button>
        </div>
        {sectionData && (
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">{selectedSection}</h3>
            <pre className="whitespace-pre-wrap">{sectionData}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default Recommendations;