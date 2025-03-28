import React, { useState } from 'react';
import { Watermark, Modal, Button } from '@pixie-ui/core';

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inherit, setInherit] = useState(true);

  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <label style={{ marginRight: '12px' }}>
          <input 
            type="checkbox" 
            checked={inherit} 
            onChange={(e) => setInherit(e.target.checked)} 
          />
          启用水印传导
        </label>
        <Button 
          variant="primary" 
          onClick={() => setModalOpen(true)}
        >
          打开Modal
        </Button>
      </div>

      <Watermark 
        content={['Pixie UI', '水印传导示例']} 
        inherit={inherit}
      >
        <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed #ccc' }}>
          <p style={{ fontSize: '16px' }}>容器区域带有水印</p>
        </div>
      </Watermark>

      <Modal
        title="水印传导示例"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
      >
        <div style={{ padding: '24px' }}>
          <p>Modal内容区域{inherit ? '带有' : '不带'}水印</p>
          <p>可以通过勾选"启用水印传导"选项来控制</p>
        </div>
      </Modal>
    </div>
  );
};

export default App; 