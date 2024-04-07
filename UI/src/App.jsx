import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recomendations from "./Recomendations";
import Reference from "./Reference/Reference";
import Home from "./Home";
import Analysis from "./Analysis/Analysis";
import SegmentedLine from "./Analysis/SegmentedLine";
import BiomarkerChart from "./claud_files/BiomarkerChart";
import Dashboard from "./claud_files/Dashboard";
import LatestBorderline from "./claud_files/LatestBorderline";
import analysispage from "./claud_files/analysispage";
import RecommendationsPage from "./claud_files/RecommendationsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/"  Component={Home} />  */}
        {/* <Route path="/recomendations" Component={Recomendations} />
        <Route path="/reference" Component={Reference} />
        <Route path="/analysis" Component={Analysis} />
        <Route path="/segmentLine" Component={SegmentedLine} /> */}
        <Route path="/recomendations" Component={RecommendationsPage} />
        <Route path="/reference" Component={Reference} />
        <Route path="/analysis" Component={analysispage} />
        <Route path="/" Component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default App;
