import React, { useState } from 'react';
import { Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        打开对话框
      </Button>
      <Modal
        title="基础对话框"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>这是一个基础的对话框示例</p>
        <p>你可以在这里放置任何内容</p>
      </Modal>
    </>
  );
};

export default App; 