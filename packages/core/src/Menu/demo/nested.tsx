import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
    <Menu defaultSelectedKey="1">
      <SubMenu id="sub1" key="sub1" title="导航三 - 子菜单">
        <MenuItem id="3" key="3">选项1</MenuItem>
        <MenuItem id="4" key="4">选项2</MenuItem>
        <MenuItem id="5" key="5">选项3</MenuItem>
      </SubMenu>
      <SubMenu id="sub2" key="sub2" title="导航四 - 子菜单">
        <MenuItem id="6" key="6">选项4</MenuItem>
        <MenuItem id="7" key="7">选项5</MenuItem>
        <MenuItem id="8" key="8">选项6</MenuItem>
      </SubMenu>
    </Menu>
    <Menu defaultSelectedKey="1" mode="horizontal">
      <SubMenu id="sub1" key="sub1" title="导航三 - 子菜单">
        <MenuItem id="3" key="3">选项1</MenuItem>
        <MenuItem id="4" key="4">选项2</MenuItem>
        <MenuItem id="5" key="5">选项3</MenuItem>
      </SubMenu>
      <SubMenu id="sub2" key="sub2" title="导航四 - 子菜单">
        <MenuItem id="6" key="6">选项4</MenuItem>
        <MenuItem id="7" key="7">选项5</MenuItem>
        <MenuItem id="8" key="8">选项6</MenuItem>
      </SubMenu>
    </Menu>
  </div>
);

export default App; 