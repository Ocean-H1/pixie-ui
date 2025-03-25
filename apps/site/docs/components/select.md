# Select 选择器

下拉选择器，提供单选、多选、搜索等功能。

## 何时使用

- 弹出一个下拉菜单给用户选择操作，用于代替原生的选择器。
- 当选项少时（少于 5 项），建议直接将选项平铺，使用 Radio 是更好的选择。
- 当选项过多时，建议使用 Select 进行选择。

## 代码演示

### 基本使用

基本使用方式。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' }
    ]}
    placeholder="请选择水果"
  />
);
```

### 不同尺寸

选择器有三种尺寸：大、中、小。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

const options = [
  { value: 'apple', label: '苹果' },
  { value: 'orange', label: '橙子' },
  { value: 'banana', label: '香蕉' }
];

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select size="small" options={options} placeholder="小尺寸" />
    <Select size="medium" options={options} placeholder="中尺寸" />
    <Select size="large" options={options} placeholder="大尺寸" />
  </div>
);
```

### 禁用状态

选择器的禁用状态。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    disabled
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' }
    ]}
    placeholder="禁用状态"
  />
);
```

### 可清除

带清除按钮的选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    allowClear
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' }
    ]}
    placeholder="可清除"
  />
);
```

### 加载状态

选择器的加载状态。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    loading
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' }
    ]}
    placeholder="加载中"
  />
);
```

### 支持搜索

支持搜索选项的选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    showSearch
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' },
      { value: 'grape', label: '葡萄' },
      { value: 'watermelon', label: '西瓜' },
      { value: 'peach', label: '桃子' }
    ]}
    placeholder="可搜索"
  />
);
```

### 自定义搜索逻辑

自定义搜索逻辑的选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    showSearch
    filterOption={(input, option) => 
      option.label.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
      option.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' },
      { value: 'grape', label: '葡萄' },
      { value: 'watermelon', label: '西瓜' },
      { value: 'peach', label: '桃子' }
    ]}
    placeholder="自定义搜索逻辑"
  />
);
```

### 远程搜索

从服务端搜索数据的选择器。

```tsx
import React, { useState, useEffect } from 'react';
import { Select } from '@pixie-ui/core';

export default () => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  
  // 模拟远程搜索
  useEffect(() => {
    if (!searchValue) {
      setOptions([]);
      return;
    }
    
    setLoading(true);
    
    // 模拟API请求
    const timeout = setTimeout(() => {
      setLoading(false);
      setOptions([
        { value: `${searchValue}_1`, label: `${searchValue} 1` },
        { value: `${searchValue}_2`, label: `${searchValue} 2` },
        { value: `${searchValue}_3`, label: `${searchValue} 3` },
      ]);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, [searchValue]);
  
  return (
    <Select
      showSearch
      loading={loading}
      options={options}
      filterOption={false}
      onSearch={setSearchValue}
      placeholder="输入关键词搜索"
    />
  );
};
```

### 多选模式

支持多选的选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    mode="multiple"
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' },
      { value: 'grape', label: '葡萄' },
      { value: 'watermelon', label: '西瓜' },
      { value: 'peach', label: '桃子' }
    ]}
    placeholder="多选模式"
  />
);
```

### 限制最大选中数量

限制最大选中数量的多选选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <Select
    mode="multiple"
    maxCount={3}
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' },
      { value: 'grape', label: '葡萄' },
      { value: 'watermelon', label: '西瓜' },
      { value: 'peach', label: '桃子' }
    ]}
    placeholder="最多选择3项"
  />
);
```

### 自定义前缀和后缀图标

带有自定义前缀和后缀图标的选择器。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select
      prefix={<span style={{ color: 'blue' }}>●</span>}
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="自定义前缀"
    />
    
    <Select
      suffixIcon={<span style={{ color: 'red' }}>▼</span>}
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="自定义后缀"
    />
  </div>
);
```

### 自定义弹出位置

可以通过 placement 手动指定弹出的位置。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select
      placement="bottomLeft"
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="底部左对齐"
    />
    
    <Select
      placement="bottomRight"
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="底部右对齐"
    />
    
    <Select
      placement="topLeft"
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="顶部左对齐"
    />
    
    <Select
      placement="topRight"
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' }
      ]}
      placeholder="顶部右对齐"
    />
  </div>
);
```

### 虚拟滚动

对于大量数据，使用虚拟滚动进行优化。

```tsx
import React from 'react';
import { Select } from '@pixie-ui/core';

// 生成1000个选项
const options = Array.from({ length: 1000 }, (_, i) => ({
  value: `item-${i}`,
  label: `选项 ${i}`
}));

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select
      options={options}
      placeholder="默认开启虚拟滚动"
    />
    
    <Select
      virtual={false}
      options={options}
      placeholder="关闭虚拟滚动"
    />
  </div>
);
```

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
| optionLabelProp | 回填到选择框的 Option 的属性值 | `string` | `'children'` |
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
| tagRender | 自定义 tag 内容渲染 | `(props: { label: ReactNode; value: string \| number; closable: boolean; onClose: () => void }) => ReactNode` | - |
| tokenSeparators | 自动分词的分隔符 | `string[]` | - | 