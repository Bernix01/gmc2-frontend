import React from "react"
import { CountryCard } from "./CountryCard";
import { Row,Col} from 'antd';

export function CountryCardSection({paises}){
    let products=_obtenerListaProductos(paises)
    return (
      <div className="site-card-wrapper">
        <Row gutter={16} style={{marginTop:"10px"}}>{products}</Row>
      </div>
    );
}

function _obtenerListaProductos(paises){
    let list_card=[]
    let listPaises=paises.split(",")
    for (const pais of listPaises){
        list_card.push(<Col>
        <CountryCard pais={pais}  />
        </Col>);
    }
    return list_card;

}