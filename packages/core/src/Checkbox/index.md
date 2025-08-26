# Checkbox 多选框

用于在一组可选项中进行多选。

## 何时使用

- 在一组选项中进行多选。
- 用于开关类场景，或与 `CheckboxGroup` 搭配批量选择。

## 代码演示

### 基本使用

最基础的用法。

<code src="./demo/basic.tsx"></code>

### 受控用法

通过 `checked` 与 `onChange` 完全受控。

<code src="./demo/controlled.tsx"></code>

### 半选状态

通过 `indeterminate` 设置样式上的半选状态（不影响原生 `checked`）。

<code src="./demo/indeterminate.tsx"></code>

### 禁用状态

禁用单个复选框。

<code src="./demo/disabled.tsx"></code>

### 组合使用（基本）

使用 `CheckboxGroup` 快速渲染一组选项。

<code src="./demo/group-basic.tsx"></code>

### 组合使用（受控）

受控管理选中值集合。

<code src="./demo/group-controlled.tsx"></code>

### 组合使用（整组禁用）

禁用整组。

<code src="./demo/group-disabled.tsx"></code>

### 与 Form 联动（单个）

在表单中使用单个 Checkbox，受控绑定布尔值。

<code src="./demo/form-basic.tsx"></code>

### 与 Form 联动（组合）

在表单中使用 CheckboxGroup，受控绑定数组。

<code src="./demo/form-group.tsx"></code>

## API

### Checkbox

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| autoFocus | 自动获取焦点 | `boolean` | `false` |
| checked | 指定当前是否选中（受控） | `boolean` | `false` |
| defaultChecked | 初始是否选中（非受控） | `boolean` | `false` |
| disabled | 失效状态 | `boolean` | `false` |
| indeterminate | 半选，仅样式控制 | `boolean` | `false` |
| onChange | 变化时回调 | `(e: CheckboxChangeEvent) => void` | - |
| onBlur | 失去焦点时的回调 | `() => void` | - |
| onFocus | 获得焦点时的回调 | `() => void` | - |

### Checkbox.Group

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认选中的选项 | `(string \\| number \\| boolean)[]` | `[]` |
| disabled | 整组失效 | `boolean` | `false` |
| name | 组内所有 input 的 `name` | `string` | - |
| options | 指定可选项 | `string[] \\| number[] \\| { label: React.ReactNode; value: string \\| number \\| boolean; disabled?: boolean; title?: string; className?: string; style?: React.CSSProperties }[]` | `[]` |
| value | 指定选中的选项（受控） | `(string \\| number \\| boolean)[]` | `[]` |
| title | 选项的 title | `string` | - |
| className | 选项的类名 | `string` | - |
| style | 选项的样式 | `React.CSSProperties` | - |
| onChange | 变化时回调 | `(checkedValue: T[]) => void` | - |
