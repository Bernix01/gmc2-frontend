import { Card, Space } from "antd";


export function CountryCard(pais,productos){
    return (
      <div className="site-card-border-less-wrapper">
        <Card title={pais} bordered={false} style={{ width: 300 }}>
          {productos.map((producto) => (
            <p>
              <div className="space-align-block">
                <Space align="center">
                  <img src={producto.image} height={50}/>
                  {producto.name}
                  <img src={producto.grupo} height={50}/>
                </Space>
              </div>
            </p>
          ))}
        </Card>
      </div>
    );
}