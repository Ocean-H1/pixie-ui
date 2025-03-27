import React, { useState } from 'react';
import { Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        自定义页脚按钮
      </Button>
      <Modal
        title="自定义页脚"
        open={open}
        footer={[
          <Button key="back" variant="text" onClick={handleCancel}>
            返回
          </Button>,
          <Button key="submit" variant="primary" onClick={handleOk}>
            提交
          </Button>,
          <Button
            key="link"
            variant="secondary"
            onClick={() => {
              console.log('点击了自定义按钮');
            }}
          >
            自定义按钮
          </Button>,
        ]}
      >
        <p>这是一个自定义页脚的对话框</p>
      </Modal>
    </>
  );
};

export default App; 