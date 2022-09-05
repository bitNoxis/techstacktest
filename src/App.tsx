import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchAppBar from "./Appbar";
import FoodAnzeige from "./FoodAnzeige";
import NewFood from "./NewFood";

function App() {
  return (
    <div className="App">
      <SearchAppBar/>
        <NewFood/>
    </div>
  );
}

export default App;
