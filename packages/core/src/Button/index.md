# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码演示

### 按钮类型

按钮有三种类型：主按钮、次按钮、文本按钮。

<code src="./demo/type.tsx"></code>

### 按钮尺寸

按钮有三种尺寸：大、中、小。

<code src="./demo/size.tsx"></code>

### 自定义颜色

可以通过 `color` 属性自定义按钮的背景颜色。支持预定义颜色和自定义颜色值。

<code src="./demo/color.tsx"></code>

### 禁用状态

按钮的禁用状态。

<code src="./demo/disabled.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | `'primary' \| 'secondary' \| 'text'` | `'primary'` |
| size | 按钮大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| color | 自定义背景颜色 | `'danger' \| 'warning' \| 'success' \| 'info' \| string` | - |
| children | 按钮内容 | `React.ReactNode` | - |
| onClick | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - |

### color 属性说明

`color` 属性支持以下值：

- **预定义颜色**：
  - `'danger'` - 危险色（红色）
  - `'warning'` - 警告色（橙色）
  - `'success'` - 成功色（绿色）
  - `'info'` - 信息色（青色）

- **自定义颜色**：任何有效的 CSS 颜色值，如 `'#ff6b6b'`、`'rgb(255, 107, 107)'`、`'red'` 等