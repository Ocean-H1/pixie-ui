import React from 'react';
import { Progress, Space } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>小型线性进度条</h4>
      <Progress percent={30} size="small" />
      <Progress percent={50} size="small" />
      <Progress percent={70} size="small" />
    </div>
    
    <div>
      <h4>小型环形进度条</h4>
      <Space size="middle">
        <Progress type="circle" percent={30} size="small" />
        <Progress type="circle" percent={70} size="small" />
      </Space>
    </div>
    
    <div>
      <h4>小型仪表盘进度条</h4>
      <Space size="middle">
        <Progress type="dashboard" percent={30} size="small" />
        <Progress type="dashboard" percent={70} size="small" />
      </Space>
    </div>
  </Space>
);

export default App; 