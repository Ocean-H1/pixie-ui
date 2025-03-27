# Icon 图标

语义化的矢量图形，基于 [Iconify](https://iconify.design/) 实现。

## 何时使用

需要使用图标表达语义时。

## 代码演示

### 基本用法

使用 `<Icon />` 组件，指定图标对应的 `icon` 属性。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon icon="mdi:home" />
    <Icon icon="mdi:account" />
    <Icon icon="mdi:bell" />
    <Icon icon="mdi:settings" />
    <Icon icon="mdi:heart" />
  </div>
);
```

### 图标尺寸

使用 `size` 属性设置图标大小，内置 `small`、`medium`、`large` 三种尺寸，也可以直接传入数字。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon icon="mdi:home" size="small" />
    <Icon icon="mdi:home" size="medium" />
    <Icon icon="mdi:home" size="large" />
    <Icon icon="mdi:home" size={36} />
  </div>
);
```

### 图标颜色

使用 `color` 属性设置图标颜色。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon icon="mdi:home" color="red" />
    <Icon icon="mdi:home" color="green" />
    <Icon icon="mdi:home" color="blue" />
    <Icon icon="mdi:home" color="#f50" />
  </div>
);
```

### 图标旋转与翻转

使用 `rotate`、`horizontalFlip` 和 `verticalFlip` 属性设置图标的旋转和翻转。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon icon="mdi:arrow-right" />
    <Icon icon="mdi:arrow-right" rotate={90} />
    <Icon icon="mdi:arrow-right" rotate={180} />
    <Icon icon="mdi:arrow-right" rotate={270} />
    <Icon icon="mdi:arrow-right" horizontalFlip />
    <Icon icon="mdi:arrow-right" verticalFlip />
  </div>
);
```

### 内联使用

使用 `inline` 属性可以使图标在文本中对齐。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div>
    <p>这是一段文本，带有一个<Icon icon="mdi:home" inline />图标，图标与文本对齐。</p>
    <p>这是另一段文本，带有一个<Icon icon="mdi:bell" color="red" inline />警告图标。</p>
  </div>
);
```

### 可点击图标

给图标添加 `onClick` 事件，使其可点击。

```tsx
import React from 'react';
import { Icon } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Icon 
      icon="mdi:thumb-up" 
      size="large" 
      onClick={() => alert('点赞成功！')} 
      style={{ cursor: 'pointer' }} 
    />
    <Icon 
      icon="mdi:share" 
      size="large" 
      onClick={() => alert('分享成功！')} 
      style={{ cursor: 'pointer' }} 
    />
  </div>
);
```

## 从 Iconify 获取图标

Pixie UI 的图标基于 [Iconify](https://iconify.design/) 实现，你可以在 [Iconify 图标库](https://icon-sets.iconify.design/) 中查找图标，找到喜欢的图标后，复制其名称（例如 `mdi:home`）即可在组件中使用。

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名称，来自 Iconify 图标库 | `string` | - |
| size | 图标大小 | `'small' \| 'medium' \| 'large' \| number` | `'medium'` |
| color | 图标颜色 | `string` | - |
| rotate | 旋转角度 | `number` | - |
| horizontalFlip | 水平翻转 | `boolean` | `false` |
| verticalFlip | 垂直翻转 | `boolean` | `false` |
| className | 自定义类名 | `string` | - |
| style | 自定义样式 | `React.CSSProperties` | - |
| inline | 内联模式，兼容文本 | `boolean` | `false` |
| onClick | 点击事件 | `React.MouseEventHandler<HTMLDivElement>` | - | 