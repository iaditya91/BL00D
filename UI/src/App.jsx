import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recomendations from "./Recomendations";
import Reference from "./Reference/Reference";
import Home from "./Home";
import Analysis from "./Analysis/Analysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="/recomendations" Component={Recomendations} />
        <Route path="/reference" Component={Reference} />
        <Route path="/analysis" Component={Analysis} />
      </Routes>
    </Router>
  );
}

export default App;
