import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <nav className="bg-white py-4 px-8 flex justify-between items-center shadow">
      <div className="text-lg font-semibold">Health Tracker</div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-500 hover:text-gray-700">
          Support
        </a>
        <div className="relative">
          <div
            className="text-gray-500 flex items-center space-x-2 hover:text-gray-700 cursor-pointer"
            onClick={toggleDropdown}
          >
            <span>My Account</span>
            <div className="flex flex-col space-y-1">
              <div className="w-3 h-1 bg-gray-500 rounded"></div>
              <div className="w-3 h-1 bg-gray-500 rounded"></div>
              <div className="w-3 h-1 bg-gray-500 rounded"></div>
            </div>
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-48 z-10">
              <a href="/reference" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Biomarkers Analysis
              </a>
              <a href="/analysis" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Biomarker Visuals
              </a>
              <a href="/recomendations" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Diet Recommendations
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;