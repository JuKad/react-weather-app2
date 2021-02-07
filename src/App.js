import React from "react";
import axios from 'axios';
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App +
        </h1>
        <Weather city="Paris"/>
      </header>
    </div>
  );
}

export default App;
