# Copilot 指南 — pixie-ui

目的：帮助 AI 编程代理快速在此 monorepo 中完成常见任务（构建、调试、修改组件、发布）。内容基于仓库可见文件与现有惯例。

快速命令（在仓库根目录）：

- 安装依赖：`pnpm install` （见 `package.json` 的 `packageManager`）
- 构建所有包：`pnpm build`（调用 `turbo run build`）
- 本地开发站点：`pnpm --filter @pixie-ui/site dev`
- 启动示例：`pnpm --filter @pixie-ui/example-basic dev`
- 运行类型检查：`pnpm run tsc`（`tsc --noEmit`）
- 运行测试：`pnpm test`（由 `turbo` 协调各包）
- 发布：使用 `changeset` 流程（见 `pnpm run release`）

重要目录与架构要点：

- 单体仓库（pnpm + Turborepo）：包位于 `packages/*`，应用位于 `apps/*`，示例在 `examples/*`。
  - 参考：[pnpm-workspace.yaml](pnpm-workspace.yaml)
- 文档站点：`apps/site`（Dumi），文档与 demo 靠每个组件下的 `index.md` 与 `demo/` 目录驱动。
  - 参考： [apps/site](apps/site/package.json)
- 组件包：例如 `packages/core` 下每个组件目录通常包含 `Component.tsx`、`index.md`（文档）、`index.ts`（导出）、`demo/`（示例）。
  - 示例： [packages/core/Button/Button.tsx](packages/core/Button/Button.tsx) 和 [packages/core/Button/index.md](packages/core/Button/index.md)

构建与打包细节：

- 各包使用 `tsup`（查看 `tsup.config.ts`），构建由根 `turbo` 脚本编排（`pnpm build` -> `turbo run build`）。
- 类型检查在 CI/本地通过 `tsc --noEmit` 强制执行（`pnpm run tsc`）。
- 发布使用 `@changesets/cli`：先 `changeset` 创建变更集，再 `changeset version` 与 `changeset publish`（`pnpm run release`）。

测试与质量保证：

- Jest + Testing Library：单元测试配置在仓库根（`jest.config.js`），测试用例分布在各包 `src` 下。
- Lint/格式：`eslint`、`prettier` 与 `stylelint`，脚本入口在根 `package.json` 的 `lint` 与 `format`。

样式与主题：

- 采用 Emotion 作为 CSS-in-JS（见 `packages/theme`），主题入口为 `ThemeProvider`。
  - 参考： [packages/theme/src/ThemeProvider.tsx](packages/theme/src/ThemeProvider.tsx)

代码与发布约定（可被机器人遵循）：

- 导出约定：每个包通过 `index.ts` 做默认导出，修改组件时务必保持相同的导出符号。
- 文档约定：组件的 README/文档以 `index.md` 放在组件目录，Dumi 会自动收集展示 demo。
- Demo 约定：组件目录下 `demo/` 包含示例文件，文档站点引用它们作为示例代码。

集成点与常见任务示例：

- 修改某个组件（例如 Button）：
  1. 编辑 [packages/core/Button/Button.tsx](packages/core/Button/Button.tsx)
  2. 更新导出若需要：`packages/core/Button/index.ts`
  3. 更新文档示例：`packages/core/Button/index.md` 或 `demo/`
  4. 本地验证：`pnpm --filter @pixie-ui/site dev` 在浏览器查看文档站点

- 添加新包：遵循现有 `packages/*` 模板，确保 `package.json`、`tsup` 配置与 `index.ts` 导出正确，随后 `pnpm build` 与 changeset 流程。

注意事项（针对自动化代理）：

- Node 与 pnpm 版本要求：仓库声明 `node >=18.0.0`，`packageManager` 为 `pnpm@8.6.10`。请在做更改前确保运行环境匹配。
- 不要修改 `turbo.json` 或 workflow 配置，除非明确需要；CI 依赖这些文件的约定。
- 仅在本地验证后提交 changeset；发布需要人工/CI 授权推送。

如果你需要我把部分自动化脚本（例如 `pnpm --filter ... dev` 的组合命令）补充到 README 或添加 CI 注释，我可以继续改写并提交变更。请告知希望补强的区域。

CI/CD: 发布到 npm（GitHub Actions 示例）

- 概要：仓库使用 `@changesets/cli` 管理版本与发布。CI 需完成：安装依赖、类型检查、构建、并运行 `changeset publish` 将包发布到 npm。
- 必要 secrets：
  - `NPM_TOKEN`：用于 `changeset publish` 登录到 npm。
  - `GITHUB_TOKEN`：用于推送版本变更和创建 release（Actions 提供，默认就有）。
- 推荐触发：仅在主分支合并或手动触发时执行（例如 `on: push.branches: [main]` 与 `workflow_dispatch`）。

- 细节与注意事项：
  - `pnpm run release` 在 `package.json` 中调用了 `changeset publish`，它会读取仓库内的 changesets（`.changeset/`）并发布对应包。
  - 发布前请确保 team 的流程：开发者在变更代码后运行 `pnpm changeset` 生成变更集（并提交到分支），合并 PR 后 CI 会在 `main` 分支上进行发布。
  - 若需要在 CI 中先执行 `changeset version` 来更新 package.json 与生成 changelog，再手动审核并推送变更，请使用脚本分两步：`pnpm run version-packages`（即 `changeset version`）并将变更提交回仓库（需 `GITHUB_TOKEN` 写权限）。
  - 发布可能会创建 GitHub Release，确保 `GITHUB_TOKEN` 有足够权限或在 Actions 设置中配置额外权限。

- 本地回放与调试：
  - 生成变更集并本地模拟发布流程：

```bash
pnpm changeset
pnpm run version-packages   # 更新版本与 changelog（可在 PR 中查看）
pnpm run tsc
pnpm build
# 手动或 CI 下运行：
NPM_TOKEN=xxxxx pnpm run release
```