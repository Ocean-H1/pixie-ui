import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';
import { Space } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<'top' | 'right' | 'bottom' | 'left'>('right');

  const showDrawer = (position: 'top' | 'right' | 'bottom' | 'left') => {
    setPlacement(position);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Space direction="vertical" size="middle">
      <Space size="middle">
        <Button variant="primary" onClick={() => showDrawer('top')}>
          从上方打开
        </Button>
        <Button variant="primary" onClick={() => showDrawer('right')}>
          从右侧打开
        </Button>
      </Space>
      <Space size="middle">
        <Button variant="primary" onClick={() => showDrawer('bottom')}>
          从下方打开
        </Button>
        <Button variant="primary" onClick={() => showDrawer('left')}>
          从左侧打开
        </Button>
      </Space>
      <Drawer
        title={`${placement === 'top' ? '上' : placement === 'right' ? '右' : placement === 'bottom' ? '下' : '左'}侧抽屉`}
        placement={placement}
        open={open}
        onClose={onClose}
      >
        <p>根据不同的业务需求，抽屉可以从不同方向弹出。</p>
        <p>当前抽屉从{placement === 'top' ? '上' : placement === 'right' ? '右' : placement === 'bottom' ? '下' : '左'}侧弹出。</p>
      </Drawer>
    </Space>
  );
};

export default App; 