import React from 'react';
import { Progress, Space } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>分段进度条</h4>
      <Progress 
        percent={60} 
        success={{ percent: 30, strokeColor: '#52c41a' }} 
      />
      <Progress 
        percent={80} 
        success={{ percent: 40, strokeColor: '#1890ff' }} 
        strokeColor="#faad14"
      />
    </div>
    
    <div>
      <h4>分段环形进度条</h4>
      <Space size="middle">
        <Progress 
          type="circle" 
          percent={75} 
          success={{ percent: 45, strokeColor: '#52c41a' }} 
        />
        <Progress 
          type="circle" 
          percent={90} 
          success={{ percent: 35, strokeColor: '#1890ff' }} 
          strokeColor="#faad14"
        />
      </Space>
    </div>
    
    <div>
      <h4>分段仪表盘</h4>
      <Space size="middle">
        <Progress 
          type="dashboard" 
          percent={80} 
          success={{ percent: 50, strokeColor: '#52c41a' }} 
        />
      </Space>
    </div>
  </Space>
);

export default App; 