# pixie-ui
轻量开箱即用的UI组件库

## 特性

- 🚀 **轻量**：体积小，加载快
- 📦 **开箱即用**：预设样式，即插即用
- 🎨 **可定制**：支持主题定制
- 📱 **响应式**：适配不同屏幕尺寸
- 🔧 **TypeScript**：完整的类型定义
- 🧩 **模块化**：支持按需引入
- 🌐 **国际化**：支持多语言

## 技术栈

- React
- TypeScript
- Emotion (CSS-in-JS)
- Pnpm + Turborepo (Monorepo)
- Jest (单元测试)
- Dumi (文档生成)

## 项目结构

```
pixie-ui/
├── apps/                # 应用
│   └── site/ 
│───────└── docs         # 组件相关文档 (dumi)
├── examples/            # 示例
│   └── basic/           # 基础示例
├── packages/            # 包
│   ├── core/            # 核心组件
│   ├── hooks/           # 钩子函数
│   ├── theme/           # 主题系统
│   └── utils/           # 工具函数
├── .husky/              # Git Hooks配置
├── .eslintrc.js         # ESLint 配置
├── .prettierrc          # Prettier 配置
├── .stylelintrc.js      # Stylelint 配置
├── .lintstagedrc        # Lint-staged 配置
├── jest.config.js       # Jest 配置
├── package.json         # 项目配置
├── pnpm-workspace.yaml  # PNPM 工作区配置
├── tsconfig.json        # TypeScript 配置
└── turbo.json           # Turborepo 配置
```

## 安装

```bash
# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 启动文档站点
pnpm --filter @pixie-ui/site dev

# 启动示例应用
pnpm --filter @pixie-ui/example-basic dev

# 运行测试
pnpm test

# 运行 lint
pnpm lint
```

## 使用

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input, Table } from '@pixie-ui/core';
import { ThemeProvider } from '@pixie-ui/theme';

const App = () => (
  <ThemeProvider>
    <div>
      <Button variant="primary">按钮</Button>
      <Input placeholder="请输入内容" />
      <Table dataSource={[...]} columns={[...]} />
    </div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## 开发

1. 克隆仓库
   ```bash
   git clone https://github.com/your-username/pixie-ui.git
   cd pixie-ui
   ```

2. 安装依赖
   ```bash
   pnpm install
   ```

3. 启动开发环境
   ```bash
   # 启动文档站点
   pnpm --filter @pixie-ui/site dev
   
   # 启动示例应用
   pnpm --filter @pixie-ui/example-basic dev
   ```

4. 构建
   ```bash
   pnpm build
   ```

## 贡献

欢迎贡献代码，提交 issue 或 pull request。

## 许可证

MIT
