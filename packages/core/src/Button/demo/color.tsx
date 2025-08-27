import React from 'react';
import { Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    {/* 预定义颜色 */}
    <Button color="danger">危险按钮</Button>
    <Button color="warning">警告按钮</Button>
    <Button color="success">成功按钮</Button>
    <Button color="info">信息按钮</Button>
    
    {/* 自定义颜色 */}
    <Button color="#ff6b6b">红色按钮</Button>
    <Button color="#4ecdc4">青色按钮</Button>
    <Button color="#45b7d1">蓝色按钮</Button>
    <Button color="#96ceb4">绿色按钮</Button>
    <Button color="#feca57">黄色按钮</Button>
    <Button color="#ff9ff3">粉色按钮</Button>
    <Button color="#54a0ff">天蓝色按钮</Button>
    <Button color="#5f27cd">紫色按钮</Button>
  </div>
);

export default App;
