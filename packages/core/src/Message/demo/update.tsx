import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  const key = 'updatable';

  const openMessage = () => {
    Message.loading('加载中...', 0);
    
    // 模拟5秒后更新消息
    setTimeout(() => {
      Message.success('加载成功！');
    }, 2000);
  };

  const updateMessage = () => {
    Message.open({
      key,
      content: '加载中...',
      type: 'loading',
      duration: 0,
    });

    // 模拟更新同一个消息
    setTimeout(() => {
      Message.open({
        key,
        content: '第一步完成',
        type: 'info',
        duration: 2,
      });
    }, 1000);

    setTimeout(() => {
      Message.open({
        key,
        content: '操作成功完成！',
        type: 'success',
        duration: 2,
      });
    }, 3000);
  };

  return (
    <Space>
      <Button onClick={openMessage}>打开并自动更新消息</Button>
      <Button onClick={updateMessage}>使用key更新同一消息</Button>
    </Space>
  );
};

export default App; 