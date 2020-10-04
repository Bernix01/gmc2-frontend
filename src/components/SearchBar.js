import React, { useState } from 'react';
import {AutoComplete, Input, Tooltip} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
import * as selector from '../resources/api';



let paises=selector.loadCountries();
let paisT = "";

function SearchBar({setValue,setCambio,cambio}) {
  const [options, setOptions] = useState([]); 
  const [val,setVal]=useState("")
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
    setVal(value)
    setOptions(opciones);


  }
return (
  <section >
    <div style={{ transform: val === "" || !cambio ? "scale(2)" : "scale(1)" }}> 
      <div style={{color:"#000000"}}>Travel, Eat, Stay</div>
      <div >
        <AutoComplete 
        
          options={options}
          onSearch={handleSearch}
          onChange={(val) => {
            setVal(val);
          }}
          onSelect={(val) => setVal(val)}
        >
          <Input
            placeholder="Type Countries"
            style={{ width: 500,background:"#f7e9e9" }}
            suffix={
              <Tooltip>
                <ArrowRightOutlined
                  onClick={() => {
                    setValue(val);
                    setCambio(true);
                  }}
                />
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