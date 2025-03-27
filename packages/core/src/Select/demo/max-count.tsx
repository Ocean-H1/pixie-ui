import React from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => {
  return (
    <Select
      mode="multiple"
      maxCount={3}
      options={[
        { value: 'apple', label: '苹果' },
        { value: 'orange', label: '橙子' },
        { value: 'banana', label: '香蕉' },
        { value: 'grape', label: '葡萄' },
        { value: 'watermelon', label: '西瓜' },
        { value: 'peach', label: '桃子' }
      ]}
      placeholder="最多选择3项"
    />
  );
};

export default App; 