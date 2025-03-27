import React from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => (
  <Select
    showSearch
    filterOption={(input, option) => {
      if (!option || !option.label) return false;
      return (
        option.label.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
        option.value.toString().toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    }}
    options={[
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橙子' },
      { value: 'banana', label: '香蕉' },
      { value: 'grape', label: '葡萄' },
      { value: 'watermelon', label: '西瓜' },
      { value: 'peach', label: '桃子' }
    ]}
    placeholder="自定义搜索逻辑"
  />
);

export default App; 