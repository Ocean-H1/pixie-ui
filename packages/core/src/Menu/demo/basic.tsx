import React from 'react';
import { Menu, MenuItem } from '@pixie-ui/core';

const App: React.FC = () => (
  <Menu defaultSelectedKey="1">
    <MenuItem id="1" key="1">菜单项一</MenuItem>
    <MenuItem id="2" key="2">菜单项二</MenuItem>
    <MenuItem id="3" key="3">菜单项三</MenuItem>
  </Menu>
);

export default App; 