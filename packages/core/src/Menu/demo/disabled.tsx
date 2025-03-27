import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

const App: React.FC = () => (
  <Menu defaultSelectedKey="1">
    <MenuItem id="1" key="1">正常菜单项</MenuItem>
    <MenuItem id="2" key="2" disabled>禁用菜单项</MenuItem>
    <SubMenu id="sub1" key="sub1" title="正常子菜单">
      <MenuItem id="3" key="3">选项1</MenuItem>
      <MenuItem id="4" key="4">选项2</MenuItem>
    </SubMenu>
    <SubMenu id="sub2" key="sub2" disabled title="禁用子菜单">
      <MenuItem id="5" key="5">选项3</MenuItem>
      <MenuItem id="6" key="6">选项4</MenuItem>
    </SubMenu>
  </Menu>
);

export default App; 