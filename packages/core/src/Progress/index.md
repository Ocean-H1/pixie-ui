# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

### 基本用法

标准的进度条。

<code src="./demo/basic.tsx"></code>

### 进度条类型

进度条有三种类型：line、circle和dashboard。

<code src="./demo/type.tsx"></code>

### 小型进度条

适合放在较狭窄的区域内。

<code src="./demo/small.tsx"></code>

### 自定义颜色和进度显示

可以自定义进度条的颜色和进度显示内容。

<code src="./demo/custom.tsx"></code>

### 动态展示

展示动态变化的效果。

<code src="./demo/dynamic.tsx"></code>

### 成功、异常、不同状态

可以展示成功、异常、正常等不同状态。

<code src="./demo/status.tsx"></code>

### 分段进度条

通过 `success` 属性可以展示分段进度条。

<code src="./demo/segment.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| format | 内容的模板函数 | `(percent, successPercent) => ReactNode` | `(percent) => percent + '%'` |
| percent | 百分比 | `number` | `0` |
| showInfo | 是否显示进度数值或状态图标 | `boolean` | `true` |
| status | 状态，可选：success exception normal active(仅限 line) | `string` | - |
| strokeColor | 进度条的色彩 | `string` | - |
| strokeLinecap | 进度条的样式 | `'round' \| 'butt' \| 'square'` | `'round'` |
| success | 成功进度条相关配置 | `{ percent: number, strokeColor: string }` | - |
| trailColor | 未完成的分段的颜色 | `string` | - |
| type | 类型，可选 line circle dashboard | `string` | `'line'` |
| size | 进度条的尺寸 | `'small' \| 'default' \| number \| [number \| string, number] \| { width: number, height: number }` | `'default'` | 