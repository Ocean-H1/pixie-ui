import React from 'react';
import { Space, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <div style={{ marginBottom: 16 }}>
      <Space size="small">
        <Button>小间距</Button>
        <Button>小间距</Button>
        <Button>小间距</Button>
      </Space>
    </div>
    <div style={{ marginBottom: 16 }}>
      <Space size="middle">
        <Button>中等间距</Button>
        <Button>中等间距</Button>
        <Button>中等间距</Button>
      </Space>
    </div>
    <div style={{ marginBottom: 16 }}>
      <Space size="large">
        <Button>大间距</Button>
        <Button>大间距</Button>
        <Button>大间距</Button>
      </Space>
    </div>
    <div>
      <Space size={30}>
        <Button>自定义间距</Button>
        <Button>自定义间距</Button>
        <Button>自定义间距</Button>
      </Space>
    </div>
  </div>
);

export default App; 