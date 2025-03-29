import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  const setTopPosition = (top: number) => {
    Message.config({
      top,
    });
    Message.info(`消息显示在距离顶部 ${top}px 的位置`);
  };

  return (
    <Space>
      <Button onClick={() => setTopPosition(8)}>默认位置（顶部8px）</Button>
      <Button onClick={() => setTopPosition(100)}>居中位置（顶部100px）</Button>
      <Button onClick={() => setTopPosition(200)}>底部位置（顶部200px）</Button>
    </Space>
  );
};

export default App; 