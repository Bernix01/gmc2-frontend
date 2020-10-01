import React, { useState } from 'react';
import {AutoComplete, Input, Tooltip} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
import * as selector from '../resources/selector';



let paises=selector.loadCountries();
let paisT = "";
function SearchBar() {
  const [options, setOptions] = useState([]); 
  const handleSearch=(value)=>{
    let opciones=[]
    if (value !== "") {
      for (let indice in paises) {
        let pais = paises[indice];
        if (pais.toLowerCase().startsWith(value.toLowerCase())) {
          paisT=""
          paisT=paisT.concat(pais)
          opciones.push({ value: pais });
        }else if(value.indexOf(",")!==-1){
          let arrSplit=value.split(",");
          let valor =arrSplit[arrSplit.length-1]
          if (pais.toLowerCase().startsWith(valor.toLowerCase())) {
            opciones.push({ value: paisT.concat(",").concat(pais) });
            paisT=value.substring(0,value.lastIndexOf(","))
          }

        }
      }
    }
    setOptions(opciones);


  }
return (
  <section >
    <div style={{ transform: "scale(2)" }}>
      Travel, Eat, Stay
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
    </div>
  </section>
);
}
export default SearchBar;