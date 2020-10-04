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

export function CountryCard({pais }){
  const [products,setProducts]= useState([])
  useProducts(setProducts,pais);
  var producto = products.length==0 ? (
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: 24 }}></LoadingOutlined>}
    ></Spin>
  ) : (
    products.slice(0, 3).map((producto) => {
      return (
        <p>
          <Card>
            <div className="space-align-block">
              <Space align="center">
                <img src={producto["image_url"]} height={50} />
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
