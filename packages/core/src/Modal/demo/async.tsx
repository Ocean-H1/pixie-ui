import React, { useState } from 'react';
import { Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        打开异步关闭对话框
      </Button>
      <Modal
        title="异步关闭"
        open={open}
        confirmLoading={confirmLoading}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>点击确定按钮后，对话框将在2秒后关闭</p>
      </Modal>
    </>
  );
};

export default App; 