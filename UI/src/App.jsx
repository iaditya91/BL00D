import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recomendations from "./Recomendations";
import Reference from "./Reference/Reference";
import Home from "./Home";
import Analysis from "./Analysis/Analysis";
import SegmentedLine from "./Analysis/SegmentedLine";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="/recomendations" Component={Recomendations} />
        <Route path="/reference" Component={Reference} />
        <Route path="/analysis" Component={Analysis} />
        <Route path="/segmentLine" Component={SegmentedLine} />
        <Route path="/trail" Component={Navbar} />
      </Routes>
    </Router>
  );
}

export default App;
