import React from 'react';
import './App.css';
import { CountryCardSection } from './components/CountryCardSection';
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className="App-content">
      <SearchBar></SearchBar>
      <CountryCardSection paises={"Ecuador,Colombia"}/>

    </div>
  );
}

export default App;
