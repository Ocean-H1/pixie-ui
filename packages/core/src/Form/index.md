# Form 表单

表单是用来收集、校验和提交数据的组件。

## 何时使用

当需要用户填写信息并提交时，使用表单组件。

## 代码演示

### 基础表单

最基础的表单用法，包含各种表单控件。

<code src="./demo/basic.tsx"></code>

### 表单验证

支持多种验证规则，包括必填、正则表达式、自定义验证函数等。

<code src="./demo/validation.tsx"></code>

### 表单布局

支持三种布局方式：垂直布局、水平布局和内联布局。

<code src="./demo/layout.tsx"></code>

### 自定义表单项

FormItem 可以灵活地包装任何类型的自定义组件。

<code src="./demo/custom.tsx"></code>

### 动态表单项

使用 FormList 可以实现动态增减表单项。

<code src="./demo/formlist.tsx"></code>

### 表单联动

通过 onChange 事件可以实现表单项之间的联动。

<code src="./demo/linked.tsx"></code>

## API

### Form

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| initialValues | 表单初始值 | `Record<string, any>` | `{}` |
| layout | 表单布局 | `'horizontal' \| 'vertical' \| 'inline'` | `'vertical'` |
| onSubmit | 表单提交回调 | `(values: Record<string, any>) => void` | - |
| onError | 表单验证失败回调 | `(errors: Record<string, string[]>) => void` | - |
| onChange | 表单值变化回调 | `(values: Record<string, any>) => void` | - |
| children | 子元素 | `ReactNode` | - |

### FormItem

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| label | 标签文本 | `string` | - |
| rules | 验证规则 | `FormRule[]` | `[]` |
| required | 是否必填 | `boolean` | `false` |
| children | 子渲染函数 | `(props: FormItemRenderProps) => React.ReactNode` | - |

### FormList

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 字段名 | `string` | - |
| children | 子渲染函数 | `(fields: FormListField[], operations: FormListOperations) => React.ReactNode` | - |

### FormRule

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| required | 是否必填 | `boolean` | `false` |
| message | 错误信息 | `string` | - |
| min | 最小值/长度 | `number` | - |
| max | 最大值/长度 | `number` | - |
| pattern | 正则表达式 | `RegExp` | - |
| validator | 自定义验证函数 | `(value: any, formValues: Record<string, any>) => boolean \| Promise<boolean>` | - | 