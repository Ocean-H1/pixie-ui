import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';
import { Space } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="primary" onClick={showDrawer}>
        打开带页脚的抽屉
      </Button>
      <Drawer
        title="带页脚的抽屉"
        open={open}
        onClose={onClose}
        footer={
          <Space size="middle">
            <Button variant="text" onClick={onClose}>
              取消
            </Button>
            <Button variant="primary" onClick={onClose}>
              确定
            </Button>
          </Space>
        }
      >
        <p>抽屉可以设置自定义页脚，通常用于放置操作按钮。</p>
        <p>你可以根据需要自定义页脚内容，比如添加按钮、文本或其他组件。</p>
      </Drawer>
    </>
  );
};

export default App; 