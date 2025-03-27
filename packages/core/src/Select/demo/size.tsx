import React from 'react';
import { Select } from '@pixie-ui/core';

const options = [
  { value: 'apple', label: '苹果' },
  { value: 'orange', label: '橙子' },
  { value: 'banana', label: '香蕉' }
];

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Select size="small" options={options} placeholder="小尺寸" />
    <Select size="medium" options={options} placeholder="中尺寸" />
    <Select size="large" options={options} placeholder="大尺寸" />
  </div>
);

export default App; 