import React, {useState}from 'react';
import './App.css';
import { CountryCard} from './components/CountryCard';
import { CountryCardSection } from './components/CountryCardSection';
import SearchBar from './components/SearchBar'

function App() {
  const [cambio,setCambio]=useState(false);
  const [value,setValue]=useState("");
  console.log(value===" " && cambio)
  let countrySection= value===" " && cambio ? <CountryCardSection paises={value} /> : <div/>
  return (
    <div className="App-content" style={{ transform: !(value===" " && cambio) ? "scale(2)": "scale(1)" }}>
      <SearchBar setValue={setValue} setCambio={setCambio}></SearchBar>
      {countrySection}
    </div>
  );
}

export default App;
