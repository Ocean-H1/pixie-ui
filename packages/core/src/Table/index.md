# Table 表格

表格用于展示大量结构化数据。

## 何时使用

- 当有大量结构化数据需要展示时；
- 当需要对数据进行排序、筛选、分页、自定义操作等复杂行为时。

## 代码演示

### 基本使用

简单的表格展示，最基本的用法。

<code src="./demo/basic.tsx"></code>

### 带边框和斑马纹

设置 `bordered` 和 `striped` 属性。

<code src="./demo/bordered-striped.tsx"></code>

### 表格尺寸

三种不同尺寸的表格。

<code src="./demo/size.tsx"></code>

### 自定义单元格渲染

使用 `render` 函数定制单元格内容。

<code src="./demo/custom-render.tsx"></code>

### 行点击事件

通过 `onRowClick` 监听行点击事件。

<code src="./demo/row-click.tsx"></code>

## API

### Table

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| dataSource | 数据源 | `T[]` | `[]` |
| columns | 表格列配置 | `TableColumn<T>[]` | `[]` |
| bordered | 是否显示边框 | `boolean` | `true` |
| size | 表格尺寸 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| scroll | 表格是否可滚动 | `{ x?: number \| string, y?: number \| string }` | - |
| emptyText | 空数据时显示的内容 | `ReactNode` | `'暂无数据'` |
| onRowClick | 行点击事件 | `(record: T, index: number) => void` | - |
| headerRowClassName | 表头行类名 | `string` | - |
| rowClassName | 表格行类名 | `string \| ((record: T, index: number) => string)` | - |
| striped | 是否显示斑马纹 | `boolean` | `false` |

### TableColumn

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| key | 列的唯一标识 | `string` | - |
| title | 列标题 | `ReactNode` | - |
| width | 列宽度 | `string \| number` | - |
| render | 自定义渲染函数 | `(value: any, record: T, index: number) => ReactNode` | - |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` | 