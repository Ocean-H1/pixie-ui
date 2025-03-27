import React from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => (
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

export default App; 