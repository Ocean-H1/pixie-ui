import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  const success = () => {
    Message
      .loading('执行中...', 2.5)
      .then(() => Message.success('加载完成', 2.5))
      .then(() => Message.info('处理完成', 2.5));
  };

  const error = () => {
    Message
      .loading('执行中...', 1)
      .then(() => Message.error('出现错误，请重试'));
  };

  return (
    <Space>
      <Button onClick={success}>执行成功顺序</Button>
      <Button onClick={error}>执行失败顺序</Button>
    </Space>
  );
};

export default App; 