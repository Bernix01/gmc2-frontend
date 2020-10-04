import React, {useState}from 'react';
import './App.css';
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
    >
      <section className="App-content">
        <SearchBar setValue={setValue} setCambio={setCambio} cambio={cambio}></SearchBar>
        {countrySection}
      </section>
    </div>
  );
}

export default App;
