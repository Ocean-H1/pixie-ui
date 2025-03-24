# Flex 弹性布局

Flex 布局组件提供了一种灵活的方式来布置子元素，使您可以轻松地创建各种布局结构。

## 何时使用

- 当您需要水平或垂直排列元素时
- 当您需要控制元素之间的间距时
- 当您需要灵活调整元素的对齐方式时
- 当您需要响应式布局时

## 代码演示

### 基本用法

使用 Flex 组件可以轻松创建水平布局。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <Flex gap="middle">
    <Button>按钮 1</Button>
    <Button>按钮 2</Button>
    <Button>按钮 3</Button>
  </Flex>
);
```

### 垂直布局

设置 `vertical` 属性可以创建垂直布局。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <Flex vertical gap="middle">
    <Button>按钮 1</Button>
    <Button>按钮 2</Button>
    <Button>按钮 3</Button>
  </Flex>
);
```

### 对齐方式

使用 `justify` 和 `align` 属性控制子元素的对齐方式。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <div style={{ width: '100%' }}>
    <h4>主轴对齐</h4>
    <Flex justify="space-between" style={{ marginBottom: '16px' }}>
      <Button>左对齐</Button>
      <Button>右对齐</Button>
    </Flex>
    
    <h4>交叉轴对齐</h4>
    <Flex align="center" style={{ height: '100px', border: '1px dashed #ccc' }}>
      <Button>居中对齐</Button>
    </Flex>
  </div>
);
```

### 间距大小

使用 `gap` 属性设置元素之间的间距。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <div>
    <Flex gap="small" style={{ marginBottom: '16px' }}>
      <Button>小间距</Button>
      <Button>小间距</Button>
      <Button>小间距</Button>
    </Flex>
    
    <Flex gap="middle" style={{ marginBottom: '16px' }}>
      <Button>中间距</Button>
      <Button>中间距</Button>
      <Button>中间距</Button>
    </Flex>
    
    <Flex gap="large">
      <Button>大间距</Button>
      <Button>大间距</Button>
      <Button>大间距</Button>
    </Flex>
  </div>
);
```

### 自动换行

使用 `wrap` 属性控制元素的换行行为。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <Flex wrap gap="small" style={{ width: '300px', border: '1px dashed #ccc', padding: '8px' }}>
    {Array.from({ length: 10 }).map((_, index) => (
      <Button key={index} style={{ margin: '4px 0' }}>按钮 {index + 1}</Button>
    ))}
  </Flex>
);
```

### 嵌套布局

Flex 组件可以嵌套使用来创建复杂的布局。

```tsx
import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

export default () => (
  <Flex gap="large">
    <Flex vertical gap="small">
      <Button variant="secondary">左上</Button>
      <Button variant="secondary">左下</Button>
    </Flex>
    <Flex vertical gap="small">
      <Button>右上</Button>
      <Button>右下</Button>
    </Flex>
  </Flex>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| vertical | flex 主轴的方向是否垂直，使用 flex-direction: column | `boolean` | `false` |
| justify | 设置元素在主轴方向上的对齐方式 | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly' \| 'normal'` | `'normal'` |
| align | 设置元素在交叉轴方向上的对齐方式 | `'flex-start' \| 'flex-end' \| 'center' \| 'baseline' \| 'stretch' \| 'normal'` | `'normal'` |
| wrap | 设置元素单行显示还是多行显示 | `'nowrap' \| 'wrap' \| 'wrap-reverse' \| boolean` | `false` |
| gap | 设置网格之间的间隙 | `'small' \| 'middle' \| 'large' \| string \| number` | - |
| flex | flex CSS 简写属性 | `string \| number` | - |
| component | 自定义元素类型 | `React.ElementType` | `'div'` |

此外，Flex 组件还支持所有原生的 div 属性。 