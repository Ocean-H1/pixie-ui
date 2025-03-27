import React, { useState } from 'react';
import { Drawer } from '@pixie-ui/core';
import { Button } from '@pixie-ui/core';
import { Space } from '@pixie-ui/core';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<'default' | 'large'>('default');

  const showDrawer = (drawerSize: 'default' | 'large') => {
    setSize(drawerSize);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Space size="middle">
      <Button variant="primary" onClick={() => showDrawer('default')}>
        默认大小
      </Button>
      <Button variant="primary" onClick={() => showDrawer('large')}>
        较大尺寸
      </Button>
      <Drawer
        title={`${size === 'default' ? '默认' : '较大'}尺寸抽屉`}
        size={size}
        open={open}
        onClose={onClose}
      >
        <p>抽屉组件提供了两种预设尺寸：</p>
        <ul>
          <li>default: 宽度/高度为 378px</li>
          <li>large: 宽度/高度为 736px</li>
        </ul>
        <p>当前抽屉使用"{size === 'default' ? '默认' : '较大'}"尺寸。</p>
      </Drawer>
    </Space>
  );
};

export default App; 