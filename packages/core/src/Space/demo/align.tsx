import React from 'react';
import { Space, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div className="demo">
    <div style={{ marginBottom: 16 }}>
      <Space align="start">
        <Button>对齐顶部 (start)</Button>
        <span style={{ padding: '30px 0', background: '#f5f5f5' }}>
          对齐方式演示
        </span>
        <Button>对齐顶部 (start)</Button>
      </Space>
    </div>
    <div style={{ marginBottom: 16 }}>
      <Space align="center">
        <Button>居中对齐 (center)</Button>
        <span style={{ padding: '30px 0', background: '#f5f5f5' }}>
          对齐方式演示
        </span>
        <Button>居中对齐 (center)</Button>
      </Space>
    </div>
    <div>
      <Space align="end">
        <Button>对齐底部 (end)</Button>
        <span style={{ padding: '30px 0', background: '#f5f5f5' }}>
          对齐方式演示
        </span>
        <Button>对齐底部 (end)</Button>
      </Space>
    </div>
  </div>
);

export default App; 