import React , {useEffect,useState} from 'react';
import { Card, Space, Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

let useProducts = (setProducts, country) => {
  useEffect(() => {
    fetch(`https://world.openfoodfacts.org/country/${country}.json`)
      .then(function (resultado) {
        return resultado.json();
      })
      .then(function (objeto) {
        setProducts(objeto.products);
      });
  }, [country]);
};

function _getCleanProducts(productos){
  let cont=0
  let clean_products=[]
  while(clean_products.length<3 &&cont<productos.length){
    let producto=productos[cont]
    let imagen = producto["image_url"];
    let name = producto.product_name;
    let nova_group=producto.nova_group;
    if(imagen && name && nova_group){
      clean_products.push(producto)
    }
    cont++;
  }
  return clean_products
}

export function CountryCard({pais }){
  const [products,setProducts]= useState([])
  useProducts(setProducts,pais);
  var producto = products.length==0 ? (
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: 24 }}></LoadingOutlined>}
    ></Spin>
  ) : (
    _getCleanProducts(products).map((producto) => {
      let imagen = producto["image_url"]
        ? producto["image_url"]
        : "https://i.postimg.cc/jqzkmB2H/shop-01.jpg";
        console.log(producto)
      return (
        <p>
          <Card>
            <div className="space-align-block">
              <Space align="center" >
                <img src={imagen} height={50} />
                {producto.product_name}
                {producto.nova_group && (
                  <img
                    src={`https://static.openfoodfacts.org/images/misc/nova-group-${producto.nova_group}.svg`}
                    height={50}
                  />
                )}
              </Space>
            </div>
          </Card>
        </p>
      );
    })
  );
    return (
      <div className="site-card-border-less-wrapper">
        <Card title={pais} bordered={false} style={{ width: 300 }}>
          {producto
             }
        </Card>
      </div>
    );
}
