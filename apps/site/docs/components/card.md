# Card 卡片

卡片容器，用于承载文字、列表、图片、段落等内容。

## 何时使用

- 需要展示信息内容时使用。
- 需要对信息进行分组和分类展示时使用。
- 需要一个容器来承载相关元素时使用。

## 代码演示

### 基础卡片

包含标题、内容、操作区域的经典卡片。

```tsx
import React from 'react';
import { Card, Button } from '@pixie-ui/core';

export default () => (
  <Card 
    title="卡片标题" 
    extra={<a href="#">更多</a>}
    actions={[
      <Button key="1" variant="text" size="small">操作一</Button>,
      <Button key="2" variant="text" size="small">操作二</Button>
    ]}
  >
    <p>卡片内容</p>
    <p>这是一个基础卡片示例</p>
  </Card>
);
```

### 无边框卡片

在灰色背景上使用的无边框卡片。

```tsx
import React from 'react';
import { Card } from '@pixie-ui/core';

export default () => (
  <div style={{ background: '#f0f2f5', padding: '20px' }}>
    <Card 
      title="无边框卡片" 
      variant="borderless"
    >
      <p>在背景色上使用无边框卡片</p>
    </Card>
  </div>
);
```

### 简洁卡片

只包含内容区域的简洁卡片。

```tsx
import React from 'react';
import { Card } from '@pixie-ui/core';

export default () => (
  <Card>
    <p>只包含内容区域的简洁卡片</p>
    <p>适合用于简单内容的展示</p>
  </Card>
);
```

### 悬浮效果卡片

鼠标移过时会浮起的卡片。

```tsx
import React from 'react';
import { Card } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Card title="可悬浮卡片" hoverable>
      <p>鼠标移过时会有浮起效果</p>
    </Card>
    <Card title="可悬浮无边框卡片" variant="borderless" hoverable style={{ background: '#f0f2f5' }}>
      <p>无边框卡片也可以有悬浮效果</p>
    </Card>
  </div>
);
```

### 预加载卡片

数据读入前显示加载状态的卡片。

```tsx
import React, { useState, useEffect } from 'react';
import { Card, Button } from '@pixie-ui/core';

export default () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
      <Card loading={loading} title="数据加载中">
        <p>卡片内容</p>
        <p>加载完成后显示的内容</p>
      </Card>
      <div style={{ marginTop: '16px' }}>
        <Button onClick={() => setLoading(!loading)}>
          {loading ? '停止加载' : '开始加载'}
        </Button>
      </div>
    </div>
  );
};
```

### 卡片尺寸

卡片有大、小两种尺寸。

```tsx
import React from 'react';
import { Card } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Card title="默认尺寸" style={{ width: 300 }}>
      <p>默认尺寸的卡片</p>
    </Card>
    <Card title="小尺寸" size="small" style={{ width: 300 }}>
      <p>小尺寸的卡片</p>
    </Card>
  </div>
);
```

### 卡片封面

可以添加封面的卡片。

```tsx
import React from 'react';
import { Card } from '@pixie-ui/core';

export default () => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={
      <img
        alt="示例图片"
        src="https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/bg-js.png"
      />
    }
    title="封面卡片"
  >
    <p>卡片可以设置封面</p>
    <p>适合用于图文信息展示</p>
  </Card>
);
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| actions | 卡片操作组，位置在卡片底部 | Array\<ReactNode> | - |
| variant | 形态变体 | 'outlined' \| 'borderless' | 'outlined' |
| cover | 卡片封面 | ReactNode | - |
| extra | 卡片右上角的操作区域 | ReactNode | - |
| hoverable | 鼠标移过时可浮起 | boolean | false |
| loading | 当卡片内容还在加载中时，可以用 loading 展示一个占位 | boolean | false |
| size | card 的尺寸 | 'default' \| 'small' | 'default' |
| title | 卡片标题 | ReactNode | - |
| type | 卡片类型，可设置为 inner 或 不设置 | string | - |
| classNames | 配置卡片内置模块的 className | Record<SemanticDOM, string> | - |
| styles | 配置卡片内置模块的 style | Record<SemanticDOM, CSSProperties> | - |
| onTabChange | 页签切换的回调 | (key: string) => void | - | 