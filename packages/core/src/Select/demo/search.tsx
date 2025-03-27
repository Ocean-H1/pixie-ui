import React from 'react';
import { Select } from '@pixie-ui/core';

const fruitOptions = [
  { value: 'apple', label: '苹果' },
  { value: 'orange', label: '橙子' },
  { value: 'banana', label: '香蕉' },
  { value: 'grape', label: '葡萄' },
  { value: 'watermelon', label: '西瓜' },
  { value: 'peach', label: '桃子' }
];

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <p>单选模式：</p>
    <Select
      showSearch
      options={fruitOptions}
      placeholder="可搜索"
    />
    
    <p>多选模式：</p>
    <Select
      mode="multiple"
      showSearch
      options={fruitOptions}
      placeholder="多选且可搜索"
    />
  </div>
);

export default App; 