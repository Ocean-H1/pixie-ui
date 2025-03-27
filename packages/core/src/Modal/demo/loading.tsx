import React, { useState } from 'react';
import { Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const showModal = () => {
    setOpen(true);
    // 模拟2秒后加载完成
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleOk = () => {
    setOpen(false);
    // 重置加载状态，以便下次打开时仍显示加载状态
    setLoading(true);
  };

  const handleCancel = () => {
    setOpen(false);
    // 重置加载状态，以便下次打开时仍显示加载状态
    setLoading(true);
  };

  return (
    <>
      <Button variant="primary" onClick={showModal}>
        显示加载状态
      </Button>
      <Modal
        title="加载中..."
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        loading={loading}
      >
        <p>这里是内容区域，当前正在加载中...</p>
      </Modal>
    </>
  );
};

export default App; 