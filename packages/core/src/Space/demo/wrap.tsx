import React from 'react';
import { Space, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space wrap style={{ width: '300px', border: '1px solid #d9d9d9', padding: 8 }}>
    {Array.from({ length: 12 }).map((_, index) => (
      <Button key={index}>按钮 {index + 1}</Button>
    ))}
  </Space>
);

export default App; 