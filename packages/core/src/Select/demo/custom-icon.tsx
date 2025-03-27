import React from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Select
        prefix={<span>🍎</span>}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' }
        ]}
        placeholder="自定义前缀"
      />
      
      <Select
        suffixIcon={<span>⬇️</span>}
        options={[
          { value: 'apple', label: '苹果' },
          { value: 'orange', label: '橙子' },
          { value: 'banana', label: '香蕉' }
        ]}
        placeholder="自定义后缀"
      />
    </div>
  );
};

export default App; 