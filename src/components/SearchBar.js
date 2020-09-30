import React from 'react';
import {Input, Tooltip} from 'antd'
import {ArrowRightOutlined} from '@ant-design/icons'
function SearchBar() {
return (
  <section>
    <text>Travel, Eat, Stay</text>
    <div>
      <Input
        placeholder="Type Countries"
        style={{ width: 500 }}
        suffix={
          <Tooltip>
            <ArrowRightOutlined />
          </Tooltip>
        }
      />
    </div>
  </section>
  
);
}
export default SearchBar;