# Menu 菜单

菜单是一种允许用户从一组选项中进行选择的界面元素。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 特别说明

菜单项和子菜单需要同时设置 `id` 和 `key` 属性：
- `id` 属性用于内部标识选中的项和展开的子菜单
- `key` 属性是 React 需要的，用于列表渲染的优化

通常情况下，可以让 `id` 和 `key` 的值保持一致，以简化代码。

## 代码演示

### 基本用法

最简单的菜单使用。

```tsx
import React from 'react';
import { Menu, MenuItem } from '@pixie-ui/core';

export default () => (
  <Menu defaultSelectedKey="1">
    <MenuItem id="1" key="1">菜单项一</MenuItem>
    <MenuItem id="2" key="2">菜单项二</MenuItem>
    <MenuItem id="3" key="3">菜单项三</MenuItem>
  </Menu>
);
```

### 水平菜单

水平的顶部导航菜单。

```tsx
import React from 'react';
import { Menu, MenuItem } from '@pixie-ui/core';

export default () => (
  <Menu mode="horizontal" defaultSelectedKey="1">
    <MenuItem id="1" key="1">首页</MenuItem>
    <MenuItem id="2" key="2">产品</MenuItem>
    <MenuItem id="3" key="3">博客</MenuItem>
    <MenuItem id="4" key="4">关于我们</MenuItem>
  </Menu>
);
```

### 嵌套菜单

菜单可以包含子菜单，在垂直模式下点击展开，在水平模式下鼠标悬停展开。

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => (
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
```

### 垂直菜单与子菜单

使用垂直菜单和子菜单实现侧边导航菜单。

```tsx
import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const handleSelect = (key) => {
    setSelectedKey(key);
    console.log('选中:', key);
  };

  const handleOpenChange = (keys) => {
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
```

### 禁用菜单项

禁用特定的菜单项或子菜单。

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => (
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
```

## API

### Menu

| 参数               | 说明                               | 类型                         | 默认值       |
| ------------------ | ---------------------------------- | ---------------------------- | ------------ |
| mode               | 菜单类型，垂直或水平               | `'vertical' \| 'horizontal'` | `'vertical'` |
| defaultSelectedKey | 初始选中的菜单项 key               | `string`                     | -            |
| selectedKey        | 当前选中的菜单项 key（受控）       | `string`                     | -            |
| defaultOpenKeys    | 初始展开的 SubMenu 的 keys         | `string[]`                   | `[]`         |
| openKeys           | 当前展开的 SubMenu 的 keys（受控） | `string[]`                   | -            |
| onSelect           | 选择菜单项时的回调                 | `(key: string) => void`      | -            |
| onOpenChange       | 展开/收起子菜单时的回调            | `(keys: string[]) => void`   | -            |
| children           | 菜单内容                           | `React.ReactNode`            | -            |

### MenuItem

| 参数      | 说明                  | 类型                  | 默认值  |
| --------- | --------------------- | --------------------- | ------- |
| id        | 唯一标识符            | `string`              | -       |
| key       | React 需要的 key 属性 | `string`              | -       |
| disabled  | 是否禁用              | `boolean`             | `false` |
| style     | 自定义样式            | `React.CSSProperties` | -       |
| className | 自定义 className      | `string`              | -       |
| children  | 菜单项内容            | `React.ReactNode`     | -       |

### SubMenu

| 参数      | 说明                  | 类型                  | 默认值  |
| --------- | --------------------- | --------------------- | ------- |
| id        | 唯一标识符            | `string`              | -       |
| key       | React 需要的 key 属性 | `string`              | -       |
| title     | 子菜单标题            | `React.ReactNode`     | -       |
| disabled  | 是否禁用              | `boolean`             | `false` |
| style     | 自定义样式            | `React.CSSProperties` | -       |
| className | 自定义 className      | `string`              | -       |
| children  | 子菜单内容            | `React.ReactNode`     | -       |