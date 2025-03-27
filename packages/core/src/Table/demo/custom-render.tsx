import React from 'react';
import { Table, Button } from '@pixie-ui/core';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const dataSource: DataType[] = [
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
    render: (age: number) => <span style={{ color: age > 30 ? '#d32f2f' : '#2e7d32' }}>{age}</span>,
  },
  {
    key: 'address',
    title: '住址',
  },
  {
    key: 'tags',
    title: '标签',
    render: (tags: string[]) => (
      <div style={{ display: 'flex', gap: '4px' }}>
        {tags.map((tag: string) => (
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
    render: (_: unknown, record: DataType) => (
      <Button size="small" variant="text" onClick={() => alert(`查看 ${record.name} 的信息`)}>
        查看
      </Button>
    ),
  },
];

const App: React.FC = () => (
  <Table dataSource={dataSource} columns={columns} />
);

export default App; 