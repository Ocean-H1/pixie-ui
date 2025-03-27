---
title: Drawer 抽屉
group:
  title: 反馈
  order: 4
toc: content
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 何时使用

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。
- 当需要在当前任务流中插入临时任务时使用。

## 代码演示

<code src="./demo/basic.tsx">基础抽屉</code>
<code src="./demo/placement.tsx">自定义位置</code>
<code src="./demo/size.tsx">预设大小</code>
<code src="./demo/footer.tsx">带页脚的抽屉</code>
<code src="./demo/multi-layer.tsx">多层抽屉</code>
<code src="./demo/form.tsx">表单在抽屉内</code>
<code src="./demo/custom-content.tsx">自定义渲染内容</code>

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoFocus | 抽屉展开后是否将焦点切换至其 DOM 节点 | boolean | true | - |
| afterOpenChange | 切换抽屉时动画结束后的回调 | function(open) | - | - |
| className | Drawer 容器外层 className 设置 | string | - | - |
| classNames | 语义化结构 className | Record<SemanticDOM, string> | - | - |
| closeIcon | 自定义关闭图标 | ReactNode | `<Icon icon="mdi:close" />` | - |
| destroyOnClose | 关闭时销毁 Drawer 里的子元素 | boolean | false | - |
| extra | 抽屉右上角的操作区域 | ReactNode | - | - |
| footer | 抽屉的页脚 | ReactNode | - | - |
| forceRender | 预渲染 Drawer 内元素 | boolean | false | - |
| getContainer | 指定 Drawer 挂载的节点，并在容器内展现，false 为挂载在当前位置 | HTMLElement \| () => HTMLElement \| string \| false | body | - |
| height | 高度，在 placement 为 top 或 bottom 时使用 | string \| number | 378 | - |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true | - |
| mask | 是否展示遮罩 | boolean | true | - |
| maskClosable | 点击蒙层是否允许关闭 | boolean | true | - |
| placement | 抽屉的方向 | top \| right \| bottom \| left | right | - |
| push | 用于设置多层 Drawer 的推动行为 | boolean \| { distance: string \| number } | { distance: 180 } | - |
| rootStyle | 可用于设置 Drawer 最外层容器的样式 | CSSProperties | - | - |
| size | 预设抽屉宽度（或高度） | 'default' \| 'large' | 'default' | - |
| style | 设计 Drawer 容器样式 | CSSProperties | - | - |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | - |
| title | 标题 | ReactNode | - | - |
| loading | 显示骨架屏 | boolean | false | - |
| open | Drawer 是否可见 | boolean | - | - |
| width | 宽度，在 placement 为 left 或 right 时使用 | string \| number | 378 | - |
| zIndex | 设置 Drawer 的 z-index | number | 1000 | - |
| onClose | 点击遮罩层或左上角叉或取消按钮的回调 | function(e) | - | - |
| drawerRender | 自定义渲染抽屉 | (node: ReactNode) => ReactNode | - | - |

## SemanticDOM 类型

```typescript
export type SemanticDOM =
  | 'root'
  | 'body'
  | 'header'
  | 'content'
  | 'footer'
  | 'mask'
  | 'wrapper';
``` 