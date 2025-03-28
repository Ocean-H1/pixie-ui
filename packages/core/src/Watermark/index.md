# Watermark 水印

为页面添加水印效果。

## 何时使用

- 需要在页面上添加浮水印标识版权或敏感信息时；
- 适用于防止信息盗用，标识用户身份或页面来源。

## 代码演示

### 基础用法

为页面的某个区域添加文字水印。

<code src="./demo/basic.tsx"></code>

### 多行文字水印

使用字符串数组设置多行文字水印。

<code src="./demo/multiple-line.tsx"></code>

### 图片水印

使用图片作为水印。

<code src="./demo/image.tsx"></code>

### 水印传导

通过 inherit 属性控制水印是否传导到Modal、Drawer等弹出组件。

<code src="./demo/inherit.tsx"></code>

### 自定义设置

自定义水印的宽高、旋转角度、间距、透明度和字体设置等。

<code src="./demo/custom.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度，content 的默认值为自身的宽度 | `number` | `120` |
| height | 水印的高度，content 的默认值为自身的高度 | `number` | `64` |
| inherit | 是否将水印传导给弹出组件如 Modal、Drawer | `boolean` | `true` |
| rotate | 水印绘制时，旋转的角度，单位 ° | `number` | `-22` |
| zIndex | 追加的水印元素的 z-index | `number` | `9` |
| image | 图片源，建议导出 2 倍或 3 倍图，优先级高 (支持 base64 格式) | `string` | - |
| content | 水印文字内容 | `string \| string[]` | - |
| font | 文字样式 | `Font` | - |
| gap | 水印之间的间距 | `[number, number]` | `[100, 100]` |
| offset | 水印距离容器左上角的偏移量，默认为 gap/2 | `[number, number]` | `[gap[0]/2, gap[1]/2]` |

### Font

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 字体颜色 | `string` | `rgba(0,0,0,.15)` |
| fontSize | 字体大小 | `number` | `16` |
| fontWeight | 字体粗细 | `'normal' \| 'light' \| 'weight' \| number` | `'normal'` |
| fontFamily | 字体类型 | `string` | `'sans-serif'` |
| fontStyle | 字体样式 | `'none' \| 'normal' \| 'italic' \| 'oblique'` | `'normal'` |
| textAlign | 指定文本对齐方向 | `CanvasTextAlign` | `'center'` | 