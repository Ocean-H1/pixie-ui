import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState<string | undefined>(undefined);
  const [openKeys, setOpenKeys] = useState<string[]>(['sub1']);

  const handleSelect = (key: string) => {
    setSelectedKey(key);
    console.log('选中:', key);
  };

  const handleOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
    console.log('展开的子菜单:', keys);
  };

  return (
    <div style={{ width: 256 }}>
      <Menu
        mode="vertical"
        selectedKey={selectedKey}
        openKeys={openKeys}
        onSelect={handleSelect}
        onOpenChange={handleOpenChange}
      >
        <MenuItem id="1" key="1">首页</MenuItem>
        <SubMenu id="sub1" key="sub1" title="产品管理">
          <MenuItem id="2" key="2">产品列表</MenuItem>
          <MenuItem id="3" key="3">产品分类</MenuItem>
          <MenuItem id="4" key="4">产品标签</MenuItem>
        </SubMenu>
        <SubMenu id="sub2" key="sub2" title="用户管理">
          <MenuItem id="5" key="5">用户列表</MenuItem>
          <MenuItem id="6" key="6">用户权限</MenuItem>
        </SubMenu>
        <MenuItem id="7" key="7">系统设置</MenuItem>
      </Menu>
    </div>
  );
};

export default App; 