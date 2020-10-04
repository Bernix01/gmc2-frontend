import React, {useState}from 'react';
import './App.css';
import { CountryCard} from './components/CountryCard';
import { CountryCardSection } from './components/CountryCardSection';
import SearchBar from './components/SearchBar'

function App() {
  const [cambio,setCambio]=useState(false);
  const [value,setValue]=useState("");
  console.log(value==="" )
  let countrySection= value!=="" && cambio ? <CountryCardSection paises={value} /> : <div/>
  return (
    <div
      className="App"
      style={{ transform: value === "" || !cambio ? "scale(2)" : "scale(1)" }}
    >
      <section className="App-content">
        <SearchBar setValue={setValue} setCambio={setCambio}></SearchBar>
        <br />
        <br />

        {countrySection}
      </section>
    </div>
  );
}

export default App;
