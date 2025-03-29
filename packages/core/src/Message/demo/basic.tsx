import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  const showMessage = (type: 'success' | 'error' | 'info' | 'warning') => {
    Message[type](`这是一条${type === 'success' ? '成功' : type === 'error' ? '错误' : type === 'warning' ? '警告' : '信息'}提示`);
  };

  return (
    <Space>
      <Button onClick={() => showMessage('success')}>成功提示</Button>
      <Button onClick={() => showMessage('error')}>错误提示</Button>
      <Button onClick={() => showMessage('warning')}>警告提示</Button>
      <Button onClick={() => showMessage('info')}>信息提示</Button>
    </Space>
  );
};

export default App; 