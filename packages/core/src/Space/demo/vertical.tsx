import React from 'react';
import { Space, Button, Card } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical">
    <Card title="卡片标题" style={{ width: 300 }}>卡片内容</Card>
    <Button>按钮</Button>
    <span>文本</span>
  </Space>
);

export default App; 