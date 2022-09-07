import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from "./Appbar";
import FoodAnzeige from "./FoodAnzeige";
import Food from "./Food";

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
        <Food/>
    </div>
  );
}

export default App;
