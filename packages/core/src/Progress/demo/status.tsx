import React from 'react';
import { Progress, Space } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>线性进度条状态</h4>
      <Progress percent={30} />
      <Progress percent={70} status="exception" />
      <Progress percent={100} status="success" />
      <Progress percent={50} status="active" />
    </div>
    
    <div>
      <h4>环形进度条状态</h4>
      <Space size="middle">
        <Progress type="circle" percent={30} />
        <Progress type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} status="success" />
      </Space>
    </div>
    
    <div>
      <h4>仪表盘进度条状态</h4>
      <Space size="middle">
        <Progress type="dashboard" percent={30} />
        <Progress type="dashboard" percent={70} status="exception" />
        <Progress type="dashboard" percent={100} status="success" />
      </Space>
    </div>
  </Space>
);

export default App; 