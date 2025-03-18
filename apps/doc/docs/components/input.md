# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

### 基本使用

基本使用方式。

```tsx
import React from 'react';
import { Input } from '@pixie-ui/core';

export default () => (
  <Input placeholder="请输入内容" />
);
```

### 不同尺寸

输入框有三种尺寸：大、中、小。

```tsx
import React from 'react';
import { Input } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input size="small" placeholder="小尺寸" />
    <Input size="medium" placeholder="中尺寸" />
    <Input size="large" placeholder="大尺寸" />
  </div>
);
```

### 错误状态

输入框的错误状态。

```tsx
import React from 'react';
import { Input } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input error placeholder="错误状态" />
    <Input error errorMessage="请输入正确的内容" placeholder="错误状态带提示" />
  </div>
);
```

### 禁用状态

输入框的禁用状态。

```tsx
import React from 'react';
import { Input } from '@pixie-ui/core';

export default () => (
  <Input disabled placeholder="禁用状态" />
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 输入框大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| error | 是否为错误状态 | `boolean` | `false` |
| errorMessage | 错误提示信息 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | - |
| value | 输入框内容 | `string` | - |
| onChange | 输入框内容变化时的回调 | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - |
``` 