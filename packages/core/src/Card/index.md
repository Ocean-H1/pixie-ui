# Card 卡片

卡片容器，用于承载文字、列表、图片、段落等内容。

## 何时使用

- 需要展示信息内容时使用。
- 需要对信息进行分组和分类展示时使用。
- 需要一个容器来承载相关元素时使用。

## 代码演示

### 基础卡片

包含标题、内容、操作区域的经典卡片。

<code src="./demo/basic.tsx"></code>

### 无边框卡片

在灰色背景上使用的无边框卡片。

<code src="./demo/borderless.tsx"></code>

### 简洁卡片

只包含内容区域的简洁卡片。

<code src="./demo/simple.tsx"></code>

### 悬浮效果卡片

鼠标移过时会浮起的卡片。
<code src="./demo/hoverable.tsx"></code>

### 预加载卡片

数据读入前显示加载状态的卡片。
<code src="./demo/loading.tsx"></code>

### 卡片尺寸

卡片有大、小两种尺寸。
<code src="./demo/size.tsx"></code>

### 卡片封面

可以添加封面的卡片。
<code src="./demo/cover.tsx"></code>

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