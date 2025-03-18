# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型

按钮有三种类型：主按钮、次按钮、文本按钮。

```tsx
import React from 'react';
import { Button } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button variant="primary">主按钮</Button>
    <Button variant="secondary">次按钮</Button>
    <Button variant="text">文本按钮</Button>
  </div>
);
```

### 按钮尺寸

按钮有三种尺寸：大、中、小。

```tsx
import React from 'react';
import { Button } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Button size="small">小按钮</Button>
    <Button size="medium">中按钮</Button>
    <Button size="large">大按钮</Button>
  </div>
);
```

### 禁用状态

按钮的禁用状态。

```tsx
import React from 'react';
import { Button } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button disabled variant="primary">禁用主按钮</Button>
    <Button disabled variant="secondary">禁用次按钮</Button>
    <Button disabled variant="text">禁用文本按钮</Button>
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | `'primary' \| 'secondary' \| 'text'` | `'primary'` |
| size | 按钮大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 按钮内容 | `React.ReactNode` | - |
| onClick | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | 