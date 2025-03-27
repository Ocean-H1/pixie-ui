# Space 间距

设置组件之间的间距。

## 何时使用

- 避免组件紧贴在一起，拉开统一的空间。
- 适合行内元素的水平间距。
- 可以设置各种水平对齐方式。
- 适用于多个元素排列成行或列时，希望这些元素之间保持均匀的间距。

## 代码演示

### 基本用法

相邻组件水平间距。

<code src="./demo/basic.tsx"></code>

### 垂直间距

相邻组件垂直间距。

<code src="./demo/vertical.tsx"></code>

### 间距大小

间距预设大小：`small`、`middle`、`large` 和自定义 px 数值。

<code src="./demo/size.tsx"></code>

### 对齐方式

设置不同的对齐方式。

<code src="./demo/align.tsx"></code>

### 自动换行

设置自动换行。

<code src="./demo/wrap.tsx"></code>

### 分隔符

相邻组件分隔符。

<code src="./demo/split.tsx"></code>

### 组合使用

组合使用间距组件。

<code src="./demo/combine.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| align | 对齐方式 | `'start' \| 'end' \| 'center' \| 'baseline'` | - |
| direction | 间距方向 | `'vertical' \| 'horizontal'` | `'horizontal'` |
| size | 间距大小 | `'small' \| 'middle' \| 'large' \| number \| [number, number]` | `'small'` |
| split | 设置分隔符 | `ReactNode` | - |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |
| classNames | 语义化 className | `Record<'item', string>` | - |
| styles | 语义化 style | `Record<'item', CSSProperties>` | - |

此外，Space 组件还支持所有原生的 div 属性。 