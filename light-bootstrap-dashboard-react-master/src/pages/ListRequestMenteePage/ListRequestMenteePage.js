import { Divider, Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;

const onSearch = (value) => console.log(value); // tìm các request đã gửi của mentee
const App = () => (
  <>
    <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      style={{
        width: 1100,
      }}
      onSearch={onSearch}
    />
    </Space>
    <Divider />
    <p>
      component 2
    </p>
    <Divider dashed />
    <p>
      component 3
    </p>
  </>
);
export default App;