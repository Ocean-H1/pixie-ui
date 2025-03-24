# Rate 评分

评分组件，对事物进行评级操作展示。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基本用法

最简单的用法。

```tsx
import React from 'react';
import { Rate } from '@pixie-ui/core';

export default () => <Rate defaultValue={2.5} />;
```

### 半星

支持选择半星。

```tsx
import React from 'react';
import { Rate } from '@pixie-ui/core';

export default () => <Rate allowHalf defaultValue={2.5} />;
```

### 文案展现

给评分组件加上文案展示。

```tsx
import React, { useState } from 'react';
import { Rate } from '@pixie-ui/core';

const desc = ['很糟糕', '糟糕', '一般', '好', '很好'];

export default () => {
  const [value, setValue] = useState(3);
  
  return (
    <div>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span style={{ marginLeft: 10 }}>{desc[value - 1]}</span> : ''}
    </div>
  );
};
```

### 只读

只读，无法进行交互。

```tsx
import React from 'react';
import { Rate } from '@pixie-ui/core';

export default () => <Rate disabled defaultValue={2} />;
```

### 清除

支持允许或者禁用清除。

```tsx
import React from 'react';
import { Rate } from '@pixie-ui/core';

export default () => (
  <div>
    <Rate defaultValue={3} />
    <br />
    <Rate allowClear={false} defaultValue={3} />
  </div>
);
```

### 自定义字符

可以使用自定义字符。

```tsx
import React from 'react';
import { Rate, Icon } from '@pixie-ui/core';

export default () => (
  <div>
    <Rate character={<Icon icon="mdi:heart" />} defaultValue={2} />
    <br />
    <Rate character="A" allowHalf defaultValue={2.5} />
    <br />
    <Rate character="好" defaultValue={3} />
  </div>
);
```

### 其他字符

可以将星星替换为其他字符，比如表情符号。

```tsx
import React from 'react';
import { Rate, Icon } from '@pixie-ui/core';

export default () => (
  <div>
    <Rate character={<Icon icon="mdi:emoticon" />} defaultValue={2} />
    <br />
    <Rate character={<Icon icon="mdi:thumb-up" />} allowHalf defaultValue={2.5} />
  </div>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| autoFocus | 自动获取焦点 | `boolean` | `false` |
| character | 自定义字符 | `ReactNode \| (RateProps) => ReactNode` | `<Icon icon="material-symbols:star" />` |
| className | 自定义样式类名 | `string` | - |
| count | star 总数 | `number` | `5` |
| defaultValue | 默认值 | `number` | `0` |
| disabled | 只读，无法进行交互 | `boolean` | `false` |
| keyboard | 支持使用键盘操作 | `boolean` | `true` |
| style | 自定义样式对象 | `CSSProperties` | - |
| tooltips | 自定义每项的提示信息 | `string[]` | - |
| value | 当前数，受控值 | `number` | - |
| onBlur | 失去焦点时的回调 | `function()` | - |
| onChange | 选择时的回调 | `function(value: number)` | - |
| onFocus | 获取焦点时的回调 | `function()` | - |
| onHoverChange | 鼠标经过时数值变化的回调 | `function(value: number)` | - |
| onKeyDown | 按键回调 | `function(event)` | - | 