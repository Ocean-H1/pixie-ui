import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <Flex wrap gap="small" style={{ width: '300px', border: '1px dashed #ccc', padding: '8px' }}>
    {Array.from({ length: 10 }).map((_, index) => (
      <Button key={index} style={{ margin: '4px 0' }}>按钮 {index + 1}</Button>
    ))}
  </Flex>
); 

export default App;