import React, { useState } from 'react';
import { Modal, Button, Icon } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        自定义关闭图标
      </Button>
      <Modal
        title="自定义关闭图标"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        closeIcon={<Icon icon="mdi:window-close" color="#ff4d4f" />}
      >
        <p>这个对话框使用了自定义的关闭图标</p>
      </Modal>
    </>
  );
};

export default App; 