import React, { useState } from 'react';
import {AutoComplete, Input, Tooltip} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
import loadCountries from '../resources/selector';

let paises=loadCountries();
let paisT = "";
function SearchBar() {
  const [options, setOptions] = useState([]); 
  const handleSearch=(value)=>{
    let opciones=[]
    if (value != "") {
      for (let indice in paises) {
        let pais = paises[indice];
        if (pais.startsWith(value)) {
          paisT=""
          paisT=paisT.concat(pais)
          opciones.push({ value: pais });
        }else if(value.indexOf(",")!==-1){
          let arrSplit=value.split(",");
          let valor =arrSplit[arrSplit.length-1]
          console.log(value)
          if (pais.startsWith(valor) ) {
            opciones.push({ value: paisT.concat(",").concat(pais) });
            paisT=value.substring(0,value.lastIndexOf(","))
          }

        }
      }
    }
    console.log(opciones)
    setOptions(opciones);


  }
return (
  <section>
    <text>Travel, Eat, Stay</text>
    <div>
      <AutoComplete options={options} onSearch={handleSearch}>
        <Input
          placeholder="Type Countries"
          style={{ width: 500 }}
          suffix={
            <Tooltip>
              <ArrowRightOutlined />
            </Tooltip>
          }
        />
      </AutoComplete>
    </div>
  </section>
);
}
export default SearchBar;