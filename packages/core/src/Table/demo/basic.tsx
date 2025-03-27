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

const App: React.FC = () => (
  <Table dataSource={dataSource} columns={columns} />
);

export default App; 