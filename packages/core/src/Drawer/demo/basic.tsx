import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';

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
        打开抽屉
      </Button>
      <Drawer 
        title="基础抽屉" 
        open={open} 
        onClose={onClose}
      >
        <p>这是一个基础抽屉示例。</p>
        <p>你可以在这里放置任何内容，比如表单、列表或者其他组件。</p>
      </Drawer>
    </>
  );
};

export default App; 