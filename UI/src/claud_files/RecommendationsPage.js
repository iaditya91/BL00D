import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import AuthContext from './Authentication/AuthProvider';
import { triggerGet, triggerPost, triggerGetWithAuth } from "../api/axiosFunctions";


function Recommendations() {
  const { auth } = useContext(AuthContext);
  const [selectedSection, setSelectedSection] = useState('');
  const [sectionData, setSectionData] = useState(null);
  const {access_token} = auth;
  console.log("auth in recommendations: ", auth);

  const handleSectionClick = async (section) => {
    setSelectedSection(section);
    try {
      console.log("auth: ", auth);
      const response = await triggerGetWithAuth(`/generate_text/${section}`,  access_token);
      setSectionData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setSectionData(null);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <button
            className={`bg-blue-500 text-white p-1 rounded-lg ${
              selectedSection === 'healthDataRecommendations' ? 'bg-blue-600' : ''
            }`}
            onClick={(e) => handleSectionClick('healthdatarecommendations')}
          >
            <h2 className="text-m font-bold mb-4">HEALTH DATA RECOMENDATIONS</h2>
          </button>
          <button
            className={`bg-green-500 text-white p-1 rounded-lg ${
              selectedSection === 'foodAndDietaryPrecautions' ? 'bg-green-600' : ''
            }`}
            onClick={(e) => handleSectionClick('fooddietprecautions')}
          >
            <h2 className="text-m font-bold mb-4">FOOD & DIETRY PRECAUTIONS</h2>
          </button>
          <button
            className={`bg-blue-500 text-white p-1 rounded-lg ${
              selectedSection === 'recommendedDoctors' ? 'bg-blue-600' : ''
            }`}
            onClick={(e) => handleSectionClick('recommendedDoctors')}
          >
            <h2 className="text-m font-bold mb-4">RECOMMENDED DOCTORS</h2>
          </button>
        </div>
        {sectionData && (
          <div className="mt-8">
            <pre className="whitespace-pre-wrap">{sectionData && sectionData.length>0 && sectionData.map((point, index) => {
              return <p key={index}>{point}</p>;
            })}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default Recommendations;