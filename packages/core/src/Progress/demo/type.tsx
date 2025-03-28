import React from 'react';
import { Progress, Space } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>线性进度条</h4>
      <Progress percent={70} />
    </div>
    
    <div>
      <h4>环形进度条</h4>
      <Progress type="circle" percent={75} />
    </div>
    
    <div>
      <h4>仪表盘进度条</h4>
      <Progress type="dashboard" percent={80} />
    </div>
  </Space>
);

export default App; 