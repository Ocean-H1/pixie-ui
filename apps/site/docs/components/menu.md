# Menu 菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

### 顶部导航

水平的顶部导航菜单。

```tsx
import React from 'react';
import { Menu, MenuItem } from '@pixie-ui/core';

export default () => (
  <Menu mode="horizontal" defaultSelectedKeys={['2']}>
    <MenuItem key="1">首页</MenuItem>
    <MenuItem key="2">产品</MenuItem>
    <MenuItem key="3">博客</MenuItem>
    <MenuItem key="4">关于我们</MenuItem>
  </Menu>
);
```

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => (
  <div style={{ width: 256 }}>
    <Menu 
      mode="vertical" 
      defaultSelectedKeys={['1']} 
      defaultOpenKeys={['sub1']}
    >
      <MenuItem key="1">首页</MenuItem>
      <SubMenu key="sub1" title="产品">
        <MenuItem key="5">产品1</MenuItem>
        <MenuItem key="6">产品2</MenuItem>
        <MenuItem key="7">产品3</MenuItem>
      </SubMenu>
      <SubMenu key="sub2" title="博客">
        <MenuItem key="8">技术</MenuItem>
        <MenuItem key="9">设计</MenuItem>
      </SubMenu>
      <MenuItem key="4">关于我们</MenuItem>
    </Menu>
  </div>
);
```

### 带图标的菜单

菜单项和子菜单可以设置图标。

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

// 模拟图标组件
const HomeIcon = () => <span style={{ fontSize: '16px', marginRight: '8px' }}>🏠</span>;
const ProductIcon = () => <span style={{ fontSize: '16px', marginRight: '8px' }}>📦</span>;
const BlogIcon = () => <span style={{ fontSize: '16px', marginRight: '8px' }}>📝</span>;
const AboutIcon = () => <span style={{ fontSize: '16px', marginRight: '8px' }}>ℹ️</span>;

export default () => (
  <div style={{ width: 256 }}>
    <Menu mode="vertical" defaultSelectedKeys={['1']}>
      <MenuItem key="1" icon={<HomeIcon />}>首页</MenuItem>
      <SubMenu key="sub1" title="产品" icon={<ProductIcon />}>
        <MenuItem key="5">产品1</MenuItem>
        <MenuItem key="6">产品2</MenuItem>
        <MenuItem key="7">产品3</MenuItem>
      </SubMenu>
      <SubMenu key="sub2" title="博客" icon={<BlogIcon />}>
        <MenuItem key="8">技术</MenuItem>
        <MenuItem key="9">设计</MenuItem>
      </SubMenu>
      <MenuItem key="4" icon={<AboutIcon />}>关于我们</MenuItem>
    </Menu>
  </div>
);
```

### 折叠菜单

可收起的侧边栏菜单，需要配合 Layout 使用。

```tsx
import React, { useState } from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div>
      <button 
        onClick={() => setCollapsed(!collapsed)} 
        style={{ marginBottom: '16px' }}
      >
        {collapsed ? '展开' : '收起'}
      </button>
      <div style={{ width: collapsed ? 80 : 256, transition: 'width 0.3s' }}>
        <Menu 
          mode="vertical" 
          defaultSelectedKeys={['1']} 
          defaultOpenKeys={collapsed ? [] : ['sub1']}
          collapsed={collapsed}
        >
          <MenuItem key="1">首页</MenuItem>
          <SubMenu key="sub1" title="产品">
            <MenuItem key="5">产品1</MenuItem>
            <MenuItem key="6">产品2</MenuItem>
            <MenuItem key="7">产品3</MenuItem>
          </SubMenu>
          <MenuItem key="4">关于我们</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
```

### 响应式收缩

在小屏幕下会自动收缩。

```tsx
import React from 'react';
import { Menu, MenuItem, SubMenu } from '@pixie-ui/core';

export default () => (
  <div style={{ width: '100%' }}>
    <Menu 
      mode="vertical" 
      defaultSelectedKeys={['1']} 
      defaultOpenKeys={['sub1']}
      breakpoint="md"
    >
      <MenuItem key="1">首页</MenuItem>
      <SubMenu key="sub1" title="产品">
        <MenuItem key="5">产品1</MenuItem>
        <MenuItem key="6">产品2</MenuItem>
        <MenuItem key="7">产品3</MenuItem>
      </SubMenu>
      <SubMenu key="sub2" title="博客">
        <MenuItem key="8">技术</MenuItem>
        <MenuItem key="9">设计</MenuItem>
      </SubMenu>
      <MenuItem key="4">关于我们</MenuItem>
    </Menu>
    <div style={{ marginTop: '16px', color: '#999' }}>
      调整浏览器窗口大小来查看响应式效果
    </div>
  </div>
);
```

## API

### Menu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 菜单类型 | `'vertical' \| 'horizontal'` | `'vertical'` |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | `string[]` | `[]` |
| selectedKeys | 选中的菜单项 key 数组（受控） | `string[]` | - |
| defaultOpenKeys | 初始展开的子菜单 key 数组 | `string[]` | `[]` |
| openKeys | 展开的子菜单 key 数组（受控） | `string[]` | - |
| collapsed | 菜单是否收起状态 | `boolean` | `false` |
| onCollapse | 菜单收起状态改变时的回调 | `(collapsed: boolean) => void` | - |
| onSelect | 选择菜单项时的回调 | `(key: string) => void` | - |
| onOpenChange | 展开/关闭子菜单时的回调 | `(key: string) => void` | - |
| breakpoint | 响应式布局断点，窗口宽度小于此值时菜单自动收起 | `number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | - |
| children | 子元素 | `React.ReactNode` | - |

### MenuItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 菜单项唯一标识 | `string` | - |
| icon | 菜单项图标 | `React.ReactNode` | - |
| disabled | 菜单项是否禁用 | `boolean` | `false` |
| onClick | 点击菜单项时的回调 | `() => void` | - |
| children | 子元素 | `React.ReactNode` | - |

### SubMenu

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 子菜单唯一标识 | `string` | - |
| title | 子菜单标题 | `React.ReactNode` | - |
| icon | 子菜单图标 | `React.ReactNode` | - |
| disabled | 子菜单是否禁用 | `boolean` | `false` |
| children | 子菜单内容 | `React.ReactNode` | - | 