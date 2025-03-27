import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <Flex gap="small" style={{ marginBottom: '16px' }}>
      <Button>小间距</Button>
      <Button>小间距</Button>
      <Button>小间距</Button>
    </Flex>
    
    <Flex gap="middle" style={{ marginBottom: '16px' }}>
      <Button>中间距</Button>
      <Button>中间距</Button>
      <Button>中间距</Button>
    </Flex>
    
    <Flex gap="large">
      <Button>大间距</Button>
      <Button>大间距</Button>
      <Button>大间距</Button>
    </Flex>
  </div>
); 

export default App;