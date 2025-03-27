import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ width: '100%' }}>
    <h4>主轴对齐</h4>
    <Flex justify="space-between" style={{ marginBottom: '16px' }}>
      <Button>左对齐</Button>
      <Button>右对齐</Button>
    </Flex>
    
    <h4>交叉轴对齐</h4>
    <Flex align="center" style={{ height: '100px', border: '1px dashed #ccc' }}>
      <Button>居中对齐</Button>
    </Flex>
  </div>
); 

export default App;