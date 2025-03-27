# Tooltip 文字提示

简单的文字提示气泡框。

## 何时使用

- 鼠标移入或聚焦元素，弹出简单的文字提示气泡框。
- 用户鼠标悬停、聚焦或点击某个元素时，显示相关提示信息。

## 代码演示

### 基本用法

最简单的用法，鼠标移入显示提示，移出消失。

<code src="./demo/basic.tsx"></code>

### 位置

位置有 12 个方向。

<code src="./demo/placement.tsx"></code>

### 自定义颜色

可以自定义提示的颜色。

<code src="./demo/color.tsx"></code>

### 触发方式

鼠标移入、聚焦、点击或右键点击触发。

<code src="./demo/trigger.tsx"></code>

### 箭头指向

设置了 `arrow` 属性后，可以自定义是否显示箭头以及箭头是否指向目标元素中心。

<code src="./demo/arrow.tsx"></code>

### 精确定位

使用 `align` 属性可以精确控制气泡框的位置。

<code src="./demo/align.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 该值将合并到 placement 的配置中，用于精确控制气泡位置 | { offsetX?: number, offsetY?: number, targetOffset?: number, points?: [string, string] } | - |
| arrow | 修改箭头的显示状态以及修改箭头是否指向目标元素中心 | boolean \| { pointAtCenter: boolean } | true |
| autoAdjustOverflow | 气泡被遮挡时自动调整位置 | boolean | true |
| color | 背景颜色 | string | - |
| defaultOpen | 默认是否显隐 | boolean | false |
| destroyTooltipOnHide | 关闭后是否销毁 Tooltip | boolean | false |
| fresh | 默认情况下，Tooltip 在关闭时会缓存内容。设置该属性后会始终保持更新 | boolean | false |
| getPopupContainer | 浮层渲染父节点，默认渲染到 body 上 | (triggerNode: HTMLElement) => HTMLElement | () => document.body |
| mouseEnterDelay | 鼠标移入后延时多少才显示 Tooltip，单位：秒 | number | 0.1 |
| mouseLeaveDelay | 鼠标移出后延时多少才隐藏 Tooltip，单位：秒 | number | 0.1 |
| placement | 气泡框位置，可选 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom | string | top |
| trigger | 触发行为，可选 hover \| focus \| click \| contextMenu，可使用数组设置多个触发行为 | string \| string[] | hover |
| open | 用于手动控制浮层显隐 | boolean | false |
| zIndex | 设置 Tooltip 的 z-index | number | - |
| onOpenChange | 显示隐藏的回调 | (open: boolean) => void | - |
</rewritten_file> 