import React, { useState } from 'react';
import { Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModal1Open(true)} style={{ marginRight: 16 }}>
        居中显示对话框
      </Button>
      <Button variant="primary" onClick={() => setModal2Open(true)}>
        自定义位置
      </Button>
      <Modal
        title="居中对话框"
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>使用 centered 属性将对话框垂直居中显示</p>
      </Modal>
      <Modal
        title="自定义位置对话框"
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        style={{ top: '20px' }}
      >
        <p>使用 style.top 设置对话框位置</p>
      </Modal>
    </>
  );
};

export default App; 