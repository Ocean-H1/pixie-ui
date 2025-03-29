import React, { createContext } from 'react';
import { Button, Space, Message } from '@pixie-ui/core';

// 创建一个上下文
const Context = createContext('默认值');

const ContextMessage: React.FC = () => {
  // 使用useMessage创建实例
  const [messageApi, contextHolder] = Message.useMessage!();

  // 在上下文中显示消息
  const showMessage = () => {
    messageApi.info('这是一条消息');
  };

  // 显示不同类型的消息
  const showSuccess = () => {
    messageApi.success('操作成功');
  };

  const showError = () => {
    messageApi.error('操作失败');
  };

  const showWarning = () => {
    messageApi.warning('警告信息');
  };

  return (
    <Context.Provider value="Pixie UI Context">
      {/* 注入contextHolder到子组件中 */}
      {contextHolder}
      
      <Space>
        <Button onClick={showMessage}>显示消息（Info）</Button>
        <Button onClick={showSuccess}>显示成功消息</Button>
        <Button onClick={showError}>显示错误消息</Button>
        <Button onClick={showWarning}>显示警告消息</Button>
        
        {/* 这个组件可以读取到Context的值 */}
        <ContextReader />
      </Space>
    </Context.Provider>
  );
};

// 读取上下文的组件
const ContextReader: React.FC = () => {
  // 使用useMessage创建实例
  const [messageApi, contextHolder] = Message.useMessage!();
  
  // 从上下文中读取值并显示
  const contextValue = React.useContext(Context);
  const readContext = () => {
    // 从上下文中获取值
    messageApi.info(`从Context中读取的值: ${contextValue}`);
  };
  
  return (
    <>
      {contextHolder}
      <Button onClick={readContext}>读取Context值</Button>
    </>
  );
};

export default ContextMessage; 