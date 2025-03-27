import React, { useState } from 'react';
import { Select } from '@pixie-ui/core';

const App: React.FC = () => {
  const [options, setOptions] = useState<Array<{ value: string; label: string }>>([]);
  const [loading, setLoading] = useState(false);
  
  // 处理搜索
  const handleSearch = (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }
    
    setLoading(true);
    
    // 模拟API请求
    setTimeout(() => {
      setLoading(false);
      setOptions([
        { value: `${value}_1`, label: `${value} 1` },
        { value: `${value}_2`, label: `${value} 2` },
        { value: `${value}_3`, label: `${value} 3` },
      ]);
    }, 500);
  };
  
  return (
    <Select
      showSearch
      loading={loading}
      options={options}
      filterOption={false}
      onSearch={handleSearch}
      placeholder="输入关键词搜索"
      notFoundContent={loading ? '加载中...' : '无匹配结果'}
    />
  );
};

export default App; 