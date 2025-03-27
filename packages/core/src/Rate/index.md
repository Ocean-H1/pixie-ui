# Rate 评分

评分组件，对事物进行评级操作展示。

## 何时使用

- 对评价进行展示。
- 对事物进行快速的评级操作。

## 代码演示

### 基本用法

最简单的用法。

<code src="./demo/basic.tsx"></code>

### 半星

支持选择半星。

<code src="./demo/half.tsx"></code>

### 文案展现

给评分组件加上文案展示。

<code src="./demo/text.tsx"></code>

### 只读

只读，无法进行交互。

<code src="./demo/disabled.tsx"></code>

### 清除

支持允许或者禁用清除。

<code src="./demo/clear.tsx"></code>

### 自定义字符

可以使用自定义字符。

<code src="./demo/character.tsx"></code>

### 其他字符

可以将星星替换为其他字符，比如表情符号。

<code src="./demo/other-character.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| allowHalf | 是否允许半选 | `boolean` | `false` |
| autoFocus | 自动获取焦点 | `boolean` | `false` |
| character | 自定义字符 | `ReactNode \| (RateProps) => ReactNode` | `<Icon icon="material-symbols:star" />` |
| className | 自定义样式类名 | `string` | - |
| count | star 总数 | `number` | `5` |
| defaultValue | 默认值 | `number` | `0` |
| disabled | 只读，无法进行交互 | `boolean` | `false` |
| keyboard | 支持使用键盘操作 | `boolean` | `true` |
| style | 自定义样式对象 | `CSSProperties` | - |
| tooltips | 自定义每项的提示信息 | `string[]` | - |
| value | 当前数，受控值 | `number` | - |
| onBlur | 失去焦点时的回调 | `function()` | - |
| onChange | 选择时的回调 | `function(value: number)` | - |
| onFocus | 获取焦点时的回调 | `function()` | - |
| onHoverChange | 鼠标经过时数值变化的回调 | `function(value: number)` | - |
| onKeyDown | 按键回调 | `function(event)` | - | 