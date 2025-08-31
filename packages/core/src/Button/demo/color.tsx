import React from 'react';
import { Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    {/* 预定义颜色 */}
    <Button variant="error">危险按钮</Button>
    <Button variant="warning">警告按钮</Button>
    <Button variant="success">成功按钮</Button>
    <Button variant="info">信息按钮</Button>
    
    {/* 自定义颜色 */}
    <Button variant="#ff6b6b">红色按钮</Button>
    <Button variant="#4ecdc4">青色按钮</Button>
    <Button variant="#45b7d1">蓝色按钮</Button>
    <Button variant="#96ceb4">绿色按钮</Button>
    <Button variant="#feca57">黄色按钮</Button>
    <Button variant="#ff9ff3">粉色按钮</Button>
    <Button variant="#54a0ff">天蓝色按钮</Button>
    <Button variant="#5f27cd">紫色按钮</Button>
  </div>
);

export default App;
