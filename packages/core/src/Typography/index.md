# Typography 排版

文本的基本格式。

## 何时使用

- 当需要展示标题、段落、列表内容时使用。
- 当需要一列基于文本的基础操作时，如：拷贝、省略、可编辑。

## 代码演示

### 基本使用

展示不同排版元素的基本样式。

<code src="./demo/basic.tsx"></code>

### 标题组件

展示不同级别的标题。

<code src="./demo/title.tsx"></code>

### 文本组件

展示不同样式的文本。

<code src="./demo/text.tsx"></code>

### 段落组件

展示不同样式的段落。

<code src="./demo/paragraph.tsx"></code>

## API

### Typography.Text

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 添加代码样式 | `boolean` | `false` |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | `boolean \| copyable` | `false` |
| delete | 添加删除线样式 | `boolean` | `false` |
| disabled | 禁用文本 | `boolean` | `false` |
| editable | 是否可编辑，为对象时可对编辑进行控制 | `boolean \| editable` | `false` |
| ellipsis | 自动溢出省略 | `boolean \| Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>` | `false` |
| keyboard | 添加键盘样式 | `boolean` | `false` |
| mark | 添加标记样式 | `boolean` | `false` |
| onClick | 点击 Text 时的回调 | `(event) => void` | - |
| strong | 是否加粗 | `boolean` | `false` |
| italic | 是否斜体 | `boolean` | `false` |
| type | 文本类型 | `secondary \| success \| warning \| danger` | - |
| underline | 添加下划线样式 | `boolean` | `false` |

### Typography.Title

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 添加代码样式 | `boolean` | `false` |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | `boolean \| copyable` | `false` |
| delete | 添加删除线样式 | `boolean` | `false` |
| disabled | 禁用文本 | `boolean` | `false` |
| editable | 是否可编辑，为对象时可对编辑进行控制 | `boolean \| editable` | `false` |
| ellipsis | 自动溢出省略 | `boolean \| Omit<ellipsis, 'expandable' \| 'rows' \| 'onExpand'>` | `false` |
| level | 重要程度，相当于 `h1`、`h2`、`h3`、`h4`、`h5` | `1 \| 2 \| 3 \| 4 \| 5` | `1` |
| mark | 添加标记样式 | `boolean` | `false` |
| onClick | 点击 Title 时的回调 | `(event) => void` | - |
| underline | 添加下划线样式 | `boolean` | `false` |

### Typography.Paragraph

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| code | 添加代码样式 | `boolean` | `false` |
| copyable | 是否可拷贝，为对象时可进行各种自定义 | `boolean \| copyable` | `false` |
| delete | 添加删除线样式 | `boolean` | `false` |
| disabled | 禁用文本 | `boolean` | `false` |
| editable | 是否可编辑，为对象时可对编辑进行控制 | `boolean \| editable` | `false` |
| ellipsis | 自动溢出省略 | `boolean \| ellipsis` | `false` |
| mark | 添加标记样式 | `boolean` | `false` |
| onClick | 点击 Paragraph 时的回调 | `(event) => void` | - |
| strong | 是否加粗 | `boolean` | `false` |
| italic | 是否斜体 | `boolean` | `false` |
| underline | 添加下划线样式 | `boolean` | `false` |

### copyable

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 拷贝的文本 | `string` | - |
| onCopy | 拷贝成功的回调函数 | `() => void` | - |
| icon | 自定义拷贝图标 | `ReactNode` | - |
| iconMarginLeft | 图标与文字间距 | `string` | `'4px'` |

### ellipsis

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 最多显示的行数 | `number` | - |
| expandable | 是否可展开 | `boolean` | - |
| suffix | 自定义省略内容后缀 | `string` | - |
| symbol | 自定义展开描述 | `ReactNode` | - |
| tooltip | 省略时，是否显示 tooltip | `boolean \| ReactNode` | - |
| onExpand | 点击展开时的回调 | `(event) => void` | - | 