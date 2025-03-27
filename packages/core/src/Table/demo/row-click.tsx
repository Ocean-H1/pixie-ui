import React from 'react';
import { Table } from '@pixie-ui/core';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const dataSource: DataType[] = [
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

const App: React.FC = () => (
  <Table 
    dataSource={dataSource} 
    columns={columns} 
    onRowClick={(record: DataType, index: number) => {
      alert(`点击了第 ${index + 1} 行: ${record.name}`);
    }}
  />
);

export default App; 