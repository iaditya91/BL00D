// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recomendations from './Recomendations';
import Home from './Home';
// import Home from './Home';


function App() {
  return (
<Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/recomendations" exact component={Recomendations} />
        </Switch>
        </Router>
  );
}

export default App;
