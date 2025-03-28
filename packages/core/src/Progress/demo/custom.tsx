import React from 'react';
import { Progress, Space } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <div>
      <h4>自定义颜色</h4>
      <Progress percent={30} strokeColor="#ff4d4f" />
      <Progress percent={50} strokeColor="#1890ff" />
      <Progress percent={70} strokeColor="#52c41a" />
    </div>
    
    <div>
      <h4>自定义格式</h4>
      <Progress 
        percent={75} 
        type="circle" 
        format={(percent) => `${percent} 天`} 
      />
      <Progress 
        percent={88} 
        type="circle" 
        format={(percent) => `${Math.round(percent / 10)} 步`} 
      />
    </div>
    
    <div>
      <h4>自定义线宽</h4>
      <Progress percent={30} size={{ width: 300, height: 12 }} />
      <Progress percent={70} size={[200, 10]} />
    </div>
  </Space>
);

export default App; 