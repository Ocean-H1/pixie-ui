import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  const showMessage = () => {
    Message.info('默认 3 秒后自动关闭');
  };

  const showLongMessage = () => {
    Message.success('这条消息将在 10 秒后关闭', 10);
  };

  const showPersistentMessage = () => {
    Message.warning('这条消息不会自动关闭，需要手动关闭', 0);
  };

  return (
    <Space>
      <Button onClick={showMessage}>默认时长</Button>
      <Button onClick={showLongMessage}>10 秒</Button>
      <Button onClick={showPersistentMessage}>不自动关闭</Button>
    </Space>
  );
};

export default App; 