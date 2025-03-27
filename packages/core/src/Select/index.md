# Select 选择器

下拉选择器，提供单选、多选、搜索等功能。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。
- 当选项过多时，建议使用 Select 进行选择。

## 代码演示

### 基本使用

基本使用方式。

<code src="./demo/basic.tsx"></code>

### 不同尺寸

选择器有三种尺寸：大、中、小。

<code src="./demo/size.tsx"></code>

### 禁用状态

选择器的禁用状态。

<code src="./demo/disabled.tsx"></code>

### 可清除

带清除按钮的选择器。

<code src="./demo/clear.tsx"></code>

### 加载状态

选择器的加载状态。

<code src="./demo/loading.tsx"></code>

### 支持搜索

支持搜索选项的选择器。

<code src="./demo/search.tsx"></code>

### 自定义搜索逻辑

自定义搜索逻辑的选择器。

<code src="./demo/custom-search.tsx"></code>

### 远程搜索

从服务端搜索数据的选择器。

<code src="./demo/remote-search.tsx"></code>

### 多选模式

支持多选的选择器。

<code src="./demo/multiple.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 选择器大小 | `'small' \| 'medium' \| 'large'` | `'medium'` |
| mode | 设置 Select 的模式为多选或标签 | `'multiple' \| 'tags'` | - |
| value | 选中时的值 | `string \| number \| string[] \| number[] \| LabeledValue \| LabeledValue[]` | - |
| defaultValue | 指定默认选中的条目 | `string \| number \| string[] \| number[] \| LabeledValue \| LabeledValue[]` | - |
| defaultOpen | 是否默认展开下拉菜单 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| allowClear | 自定义清除按钮 | `boolean \| { clearIcon?: ReactNode }` | `false` |
| options | 选项数据 | `SelectOption[]` | `[]` |
| open | 是否展开下拉菜单 | `boolean` | - |
| placement | 下拉框弹出位置 | `'bottomLeft' \| 'bottomRight' \| 'topLeft' \| 'topRight'` | `'bottomLeft'` |
| loading | 加载中状态 | `boolean` | `false` |
| showSearch | 是否可以搜索 | `boolean` | 单选为`false`，多选为`true` |
| status | 设置校验状态 | `'error' \| 'warning'` | - |
| prefix | 自定义前缀 | `ReactNode` | - |
| suffixIcon | 自定义的选择框后缀图标 | `ReactNode` | - |
| removeIcon | 自定义的多选框清除图标 | `ReactNode` | - |
| placeholder | 选择框默认文本 | `string` | `'请选择'` |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | `boolean` | `true` |
| autoClearSearchValue | 是否在选中项后清空搜索框 | `boolean` | `true` |
| popupClassName | 下拉菜单的 className | `string` | - |
| dropdownStyle | 下拉菜单的 style | `CSSProperties` | - |
| dropdownRender | 自定义下拉框内容 | `(originNode: ReactNode) => ReactNode` | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽 | `boolean \| number` | `true` |
| searchValue | 控制搜索文本 | `string` | - |
| maxTagCount | 最多显示多少个 tag | `number \| 'responsive'` | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | `ReactNode \| ((omittedValues: SelectValue[]) => ReactNode)` | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | `number` | - |
| virtual | 设置 false 关闭虚拟滚动 | `boolean` | `true` |
| maxCount | 最多可以选择的数量，仅在 multiple/tags 模式有效 | `number` | - |
| notFoundContent | 当下拉列表为空时显示的内容 | `ReactNode` | `'无匹配结果'` |
| filterOption | 是否根据输入项进行筛选 | `boolean \| ((inputValue: string, option: SelectOption) => boolean)` | `true` |
| filterSort | 搜索时对筛选结果项的排序函数 | `(optionA: SelectOption, optionB: SelectOption, info: { searchValue: string }) => number` | - |
| optionFilterProp | 搜索时过滤对应的 option 属性 | `string` | `'value'` |
| optionLabelProp | 回填到选择框的 Option 的属性值 | `string` | `'label'` |
| optionRender | 自定义渲染下拉选项 | `(option: SelectOption, info: { index: number }) => React.ReactNode` | - |
| listHeight | 设置弹窗滚动高度 | `number` | `256` |
| getPopupContainer | 菜单渲染父节点 | `(triggerNode: HTMLElement) => HTMLElement` | `() => document.body` |
| labelInValue | 是否把每个选项的 label 包装到 value 中 | `boolean` | `false` |
| onChange | 选中 option 时调用 | `(value: SelectValue, option: SelectOption \| SelectOption[]) => void` | - |
| onBlur | 失去焦点时回调 | `() => void` | - |
| onFocus | 获得焦点时回调 | `(e: React.FocusEvent) => void` | - |
| onClear | 清除内容时回调 | `() => void` | - |
| onInputKeyDown | 按键按下时回调 | `(e: React.KeyboardEvent) => void` | - |
| onSearch | 文本框值变化时回调 | `(value: string) => void` | - |
| onSelect | 被选中时调用 | `(value: string \| number \| LabeledValue, option: SelectOption) => void` | - |
| onDeselect | 取消选中时调用 | `(value: string \| number \| LabeledValue) => void` | - |
| onDropdownVisibleChange | 展开下拉菜单的回调 | `(open: boolean) => void` | - |
| onPopupScroll | 下拉列表滚动时的回调 | `(e: React.UIEvent<HTMLDivElement>) => void` | - |
| labelRender | 自定义当前选中的 label 内容渲染 | `(props: LabeledValue) => ReactNode` | - |
| tagRender | 自定义 tag 内容渲染 | `(props: { label: ReactNode; value: string \| number; closable: boolean; onClose: (e: React.MouseEvent) => void }) => ReactNode` | - |
| tokenSeparators | 自动分词的分隔符 | `string[]` | - | 