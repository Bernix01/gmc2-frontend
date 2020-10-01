import React from "react"
import * as api from "../resources/api"
import { CountryCard } from "./CountryCard";
export function CountryCardSection({paises}){

    let productos=  api.getFood(paises);
    return <div>{_obtenerListaProductos(productos)}</div>;
}

function _obtenerListaProductos(productos){
    let list_card=[] 

    for (let pais in productos){
        
        let lista=[]
        for (let indice=0;indice<4;indice++){
            let objetoProductos={}
            let producto=productos[indice]
            objetoProductos.name=producto["product_name"]
            objetoProductos.nova_group=producto["nova_group"]
            objetoProductos.image=producto["image_url"]
            lista.push(objetoProductos)
        }
        list_card.push(
            <CountryCard pais={pais} productos={lista}/>
        )
    }
    return list_card;

}