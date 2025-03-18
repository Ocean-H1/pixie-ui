# 快速上手

本节将介绍如何在项目中使用 Pixie UI 组件库。

## 安装

```bash
# 使用 npm
npm install @pixie-ui/core

# 使用 yarn
yarn add @pixie-ui/core

# 使用 pnpm
pnpm add @pixie-ui/core
```

## 使用

### 完整引入

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import * as PixieUI from '@pixie-ui/core';

const App = () => (
  <div>
    <PixieUI.Button>按钮</PixieUI.Button>
    <PixieUI.Input placeholder="请输入内容" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

### 按需引入

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from '@pixie-ui/core';

const App = () => (
  <div>
    <Button>按钮</Button>
    <Input placeholder="请输入内容" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## 示例

下面是一个简单的示例，展示了如何使用 Pixie UI 的按钮组件：

```tsx
import React from 'react';
import { Button } from '@pixie-ui/core';

const App = () => (
  <div>
    <Button variant="primary">主要按钮</Button>
    <Button variant="secondary">次要按钮</Button>
    <Button variant="text">文本按钮</Button>
    <Button disabled>禁用按钮</Button>
  </div>
);

export default App;
``` 