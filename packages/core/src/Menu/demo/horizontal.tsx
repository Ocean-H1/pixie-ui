import React from 'react';
import { Menu, MenuItem } from '@pixie-ui/core';

const App: React.FC = () => (
  <Menu mode="horizontal" defaultSelectedKey="1">
    <MenuItem id="1" key="1">首页</MenuItem>
    <MenuItem id="2" key="2">产品</MenuItem>
    <MenuItem id="3" key="3">博客</MenuItem>
    <MenuItem id="4" key="4">关于我们</MenuItem>
  </Menu>
);

export default App; 