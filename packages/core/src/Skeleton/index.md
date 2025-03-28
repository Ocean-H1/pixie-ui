# Skeleton 骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 图片或内容较多的列表/卡片中。
- 只在第一次加载数据的时候使用。
- 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

## 代码演示

### 基础用法

最简单的骨架屏效果。

<code src="./demo/basic.tsx"></code>

### 复杂组合

更复杂的组合。

<code src="./demo/complex.tsx"></code>

### 动画效果

显示动画效果。

<code src="./demo/active.tsx"></code>

### 包含子组件

包含子组件的加载占位图。

<code src="./demo/children.tsx"></code>

### 圆角风格

设置圆角风格。

<code src="./demo/round.tsx"></code>

## API

### Skeleton

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | `boolean` | `false` |
| avatar | 是否显示头像占位图 | `boolean \| SkeletonAvatarProps` | `false` |
| loading | 为 true 时，显示占位图。反之则直接展示子组件 | `boolean` | - |
| paragraph | 是否显示段落占位图 | `boolean \| SkeletonParagraphProps` | `true` |
| round | 为 true 时，段落和标题显示圆角 | `boolean` | `false` |
| title | 是否显示标题占位图 | `boolean \| SkeletonTitleProps` | `true` |

### SkeletonAvatarProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| shape | 头像形状 | `'circle' \| 'square'` | `'circle'` |
| size | 头像大小 | `string \| number` | `'32px'` |

### SkeletonTitleProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 标题宽度 | `string \| number` | `'40%'` |
| height | 标题高度 | `string \| number` | `'16px'` |

### SkeletonParagraphProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 段落行数 | `number` | `3` |
| width | 段落宽度，若为数组时则为对应的每行宽度，反之则是最后一行宽度 | `string \| number \| string[] \| number[]` | - |
| height | 段落高度 | `string \| number` | `'16px'` | 