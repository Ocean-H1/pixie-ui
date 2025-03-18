# Table 表格

表格用于展示大量结构化数据。

## 何时使用

- 当有大量结构化数据需要展示时；
- 当需要对数据进行排序、筛选、分页、自定义操作等复杂行为时。

## 代码演示

### 基本使用

简单的表格展示，最基本的用法。

```tsx
import React from 'react';
import { Table } from '@pixie-ui/core';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市朝阳区',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
  },
];

const columns = [
  {
    key: 'name',
    title: '姓名',
    width: '30%',
  },
  {
    key: 'age',
    title: '年龄',
    width: '20%',
  },
  {
    key: 'address',
    title: '住址',
    width: '50%',
  },
];

export default () => (
  <Table dataSource={dataSource} columns={columns} />
);
```

### 带边框和斑马纹

设置 `bordered` 和 `striped` 属性。

```tsx
import React from 'react';
import { Table } from '@pixie-ui/core';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市朝阳区',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
  },
  {
    key: '4',
    name: '赵六',
    age: 35,
    address: '深圳市南山区',
  },
];

const columns = [
  {
    key: 'name',
    title: '姓名',
    width: '30%',
  },
  {
    key: 'age',
    title: '年龄',
    width: '20%',
  },
  {
    key: 'address',
    title: '住址',
    width: '50%',
  },
];

export default () => (
  <Table 
    dataSource={dataSource} 
    columns={columns} 
    bordered={true}
    striped={true}
  />
);
```

### 表格尺寸

三种不同尺寸的表格。

```tsx
import React, { useState } from 'react';
import { Table, Button } from '@pixie-ui/core';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市朝阳区',
  },
];

const columns = [
  {
    key: 'name',
    title: '姓名',
  },
  {
    key: 'age',
    title: '年龄',
  },
  {
    key: 'address',
    title: '住址',
  },
];

export default () => {
  const [size, setSize] = useState('medium');
  
  return (
    <div>
      <div style={{ marginBottom: '16px' }}>
        <Button 
          variant={size === 'small' ? 'primary' : 'secondary'} 
          onClick={() => setSize('small')}
          style={{ marginRight: '8px' }}
        >
          小
        </Button>
        <Button 
          variant={size === 'medium' ? 'primary' : 'secondary'} 
          onClick={() => setSize('medium')}
          style={{ marginRight: '8px' }}
        >
          中
        </Button>
        <Button 
          variant={size === 'large' ? 'primary' : 'secondary'} 
          onClick={() => setSize('large')}
        >
          大
        </Button>
      </div>
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        size={size}
        bordered
      />
    </div>
  );
};
```

### 自定义单元格渲染

使用 `render` 函数定制单元格内容。

```tsx
import React from 'react';
import { Table, Button } from '@pixie-ui/core';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市浦东新区',
    tags: ['开发', '设计'],
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市朝阳区',
    tags: ['市场', '销售'],
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
    tags: ['测试', '运维'],
  },
];

const columns = [
  {
    key: 'name',
    title: '姓名',
  },
  {
    key: 'age',
    title: '年龄',
    render: (age) => <span style={{ color: age > 30 ? '#d32f2f' : '#2e7d32' }}>{age}</span>,
  },
  {
    key: 'address',
    title: '住址',
  },
  {
    key: 'tags',
    title: '标签',
    render: (tags) => (
      <div style={{ display: 'flex', gap: '4px' }}>
        {tags.map((tag) => (
          <span 
            key={tag} 
            style={{ 
              background: '#f5f5f5', 
              padding: '2px 8px', 
              borderRadius: '4px',
              fontSize: '12px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    ),
  },
  {
    key: 'action',
    title: '操作',
    render: (_, record) => (
      <Button size="small" variant="text" onClick={() => alert(`查看 ${record.name} 的信息`)}>
        查看
      </Button>
    ),
  },
];

export default () => (
  <Table dataSource={dataSource} columns={columns} />
);
```

### 行点击事件

通过 `onRowClick` 监听行点击事件。

```tsx
import React from 'react';
import { Table } from '@pixie-ui/core';

const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '上海市浦东新区',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '北京市朝阳区',
  },
  {
    key: '3',
    name: '王五',
    age: 28,
    address: '广州市天河区',
  },
];

const columns = [
  {
    key: 'name',
    title: '姓名',
  },
  {
    key: 'age',
    title: '年龄',
  },
  {
    key: 'address',
    title: '住址',
  },
];

export default () => (
  <Table 
    dataSource={dataSource} 
    columns={columns} 
    onRowClick={(record, index) => {
      alert(`点击了第 ${index + 1} 行: ${record.name}`);
    }}
  />
);
```

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