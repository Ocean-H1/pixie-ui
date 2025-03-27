import React from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => (
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

export default App; 