import React from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

const App: React.FC = () => {
  // 模拟异步操作
  const simulateAjax = (success = true): Promise<void> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve();
        } else {
          reject(new Error('请求失败'));
        }
      }, 2000);
    });
  };

  const handleSuccess = () => {
    const key = 'updatable';
    
    // 使用 key 属性来唯一标识消息
    Message.open({
      key,
      content: '正在处理请求...',
      type: 'loading',
      duration: 0 // 不自动关闭
    });
    
    simulateAjax()
      .then(() => {
        // 使用相同的 key 更新消息
        Message.open({
          key,
          content: '请求成功！',
          type: 'success',
          duration: 2
        });
      })
      .catch(() => {
        // 使用相同的 key 更新消息
        Message.open({
          key,
          content: '请求失败，请重试！',
          type: 'error',
          duration: 2
        });
      });
  };

  const handleError = () => {
    const key = 'updatable-error';
    
    // 使用 key 属性来唯一标识消息
    Message.open({
      key,
      content: '正在处理请求...',
      type: 'loading',
      duration: 0 // 不自动关闭
    });
    
    simulateAjax(false)
      .then(() => {
        // 使用相同的 key 更新消息
        Message.open({
          key,
          content: '请求成功！',
          type: 'success',
          duration: 2
        });
      })
      .catch(() => {
        // 使用相同的 key 更新消息
        Message.open({
          key,
          content: '请求失败，请重试！',
          type: 'error',
          duration: 2
        });
      });
  };

  return (
    <Space>
      <Button onClick={handleSuccess}>提交请求（成功）</Button>
      <Button onClick={handleError}>提交请求（失败）</Button>
    </Space>
  );
};

export default App; 