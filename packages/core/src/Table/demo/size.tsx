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

const App: React.FC = () => {
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
  
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

export default App; 