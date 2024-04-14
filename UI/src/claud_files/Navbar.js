import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
    <nav className="bg-white py-4 px-8 flex justify-between items-center shadow">
      <div className="text-lg font-semibold">
      <a href="/">
          Blood App
        </a>
        </div>
      <div className="flex items-center space-x-4">
        <a href="/accountdetails" className="text-gray-500 hover:text-gray-700">
          My Account
        </a>
        <a href="/supportpage" className="text-gray-500 hover:text-gray-700">
          Support
        </a>
        <a href="/signin" className="text-gray-500 hover:text-gray-700">
          Logout
        </a>
        <div className="relative">
          <div
            className="text-gray-500 flex items-center space-x-2 hover:text-gray-700 cursor-pointer"
            onClick={toggleDropdown}
          >
            
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


/// for adding the report page


// import React, { useState } from 'react';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleDownloadReport = async () => {
//     const pages = [
//       { path: '/', selector: '#home-page' },
//       { path: '/supportpage', selector: '#support-page' },
//       { path: '/accountdetails', selector: '#account-details-page' },
//       { path: '/reference', selector: '#reference-page' },
//       { path: '/analysis', selector: '#analysis-page' },
//       { path: '/recomendations', selector: '#recommendations-page' },
//     ];

//     const pdf = new jsPDF();

//     for (const page of pages) {
//       const response = await fetch(page.path);
//       const html = await response.text();
//       const tempDiv = document.createElement('div');
//       tempDiv.innerHTML = html;

//       const content = tempDiv.querySelector(page.selector);
//       if (content) {
//         const canvas = await html2canvas(content);
//         const imgData = canvas.toDataURL('image/png');
//         pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
//         pdf.addPage();
//       }
//     }

//     pdf.save('blood-app-report.pdf');
//   };

//   return (
//     <>
//       <nav className="bg-white py-4 px-8 flex justify-between items-center shadow">
//         <div className="text-lg font-semibold">
//           <a href="/"> Blood App </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <button
//             onClick={handleDownloadReport}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             Download Report
//           </button>
//           <a href="/supportpage" className="text-gray-500 hover:text-gray-700">
//             Support
//           </a>
//           <a href="/accountdetails" className="text-gray-500 hover:text-gray-700">
//             My Account
//           </a>
//           <a href="/signin" className="text-gray-500 hover:text-gray-700">
//             Logout
//           </a>
//           <div className="relative">
//             <div
//               className="text-gray-500 flex items-center space-x-2 hover:text-gray-700 cursor-pointer"
//               onClick={toggleDropdown}
//             >
//               <div className="flex flex-col space-y-1">
//                 <div className="w-3 h-1 bg-gray-500 rounded"></div>
//                 <div className="w-3 h-1 bg-gray-500 rounded"></div>
//                 <div className="w-3 h-1 bg-gray-500 rounded"></div>
//               </div>
//             </div>
//             {isDropdownOpen && (
//               <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md py-2 w-48 z-10">
//                 <a
//                   href="/reference"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Biomarkers Analysis
//                 </a>
//                 <a
//                   href="/analysis"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Biomarker Visuals
//                 </a>
//                 <a
//                   href="/recomendations"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Diet Recommendations
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


/////////add this to every page

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div id="home-page">
//       <h1>Welcome to the Blood App</h1>
//       <p>This is the home page content.</p>
//     </div>
//   );
// };

// export default HomePage;

// Repeat the same pattern for the other page components (SupportPage, AccountDetailsPage, ReferencePage, AnalysisPage, RecommendationsPage) by wrapping their content with a unique ID selector.