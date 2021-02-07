import React from "react";
import axios from "axios";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App HW week 4
        </h1>
        <Weather/>
      </header>
      <footer>
        <a
          href="https://github.com/JuKad/vanilla-weather-app"
          className="bottom"
        >
          Open-source code by Juliana Kadlecova
        </a>
      </footer>
    </div>
  );
}

export default App;
