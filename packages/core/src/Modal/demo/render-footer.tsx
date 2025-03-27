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
        渲染函数自定义页脚
      </Button>
      <Modal
        title="渲染函数自定义页脚"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={({ originOkBtn, originCancelBtn }) => (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="text" onClick={() => console.log('额外操作')}>
              额外操作
            </Button>
            <div>
              {originCancelBtn}
              {originOkBtn}
            </div>
          </div>
        )}
      >
        <p>使用渲染函数自定义页脚内容</p>
      </Modal>
    </>
  );
};

export default App; 