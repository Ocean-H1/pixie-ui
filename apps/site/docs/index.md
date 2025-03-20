---
hero:
  title: Pixie UI
  description: 轻量级、开箱即用的 React 组件库
  actions:
    - text: 快速上手
      link: /guide/getting-started
    - text: 组件列表
      link: /components/button
features:
  - title: 轻量易用
    emoji: 🚀
    description: 体积小，加载快，简单易上手
  - title: TypeScript
    emoji: 🔧
    description: 使用 TypeScript 开发，提供完整的类型定义
  - title: 可定制主题
    emoji: 🎨
    description: 支持主题定制，满足不同设计需求
  - title: 响应式设计
    emoji: 📱
    description: 自适应不同屏幕尺寸，提供一致的用户体验
  - title: 开箱即用
    emoji: 📦
    description: 预设样式，即插即用，快速构建应用
  - title: 模块化
    emoji: 🧩
    description: 支持按需引入，减少打包体积
---

## Pixie UI 是什么？

Pixie UI 是一个现代化的 React 组件库，专注于提供美观、易用、高效的用户界面组件。无论是快速搭建企业级应用，还是构建个人项目，Pixie UI 都能满足您的需求。

## 安装

```bash
# 使用 npm
npm install @pixie-ui/core

# 使用 yarn
yarn add @pixie-ui/core

# 使用 pnpm
pnpm add @pixie-ui/core
```

## 基本使用

```tsx
import React from 'react';
import { Button, Input } from '@pixie-ui/core';

const App = () => (
  <div>
    <Button variant="primary">点击我</Button>
    <Input placeholder="请输入内容" />
  </div>
);

export default App;
```

## 组件速览

Pixie UI 提供了丰富的组件，包括但不限于：

- **通用组件**：Button（按钮）、Icon（图标）等
- **布局组件**：Grid（栅格）、Layout（布局）等
- **导航组件**：Menu（菜单）、Pagination（分页）等
- **数据录入组件**：Form（表单）、Input（输入框）等
- **数据展示组件**：Table（表格）、Card（卡片）等
- **反馈组件**：Modal（模态框）、Message（消息）等

## 贡献指南

我们非常欢迎您为 Pixie UI 贡献代码。如果您发现了任何问题或有任何建议，请在 GitHub 上提交 Issue 或 Pull Request。

## 技术支持

如果您在使用过程中遇到任何问题，可以通过以下方式获取帮助：
- 在 GitHub 上提交 [Issue](https://github.com/yourusername/pixie-ui/issues)
- 加入我们的社区交流群

## 许可证

Pixie UI 使用 [MIT 许可证](https://opensource.org/licenses/MIT)。
