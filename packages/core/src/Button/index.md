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

### 禁用状态

按钮的禁用状态。

<code src="./demo/disabled.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | `'primary' \| 'secondary' \| 'text'` | `'primary'` |
| size | 按钮大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 按钮内容 | `React.ReactNode` | - |
| onClick | 点击按钮时的回调 | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - |