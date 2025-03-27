import React from 'react';
import { Flex, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <Flex gap="large">
    <Flex vertical gap="small">
      <Button variant="secondary">左上</Button>
      <Button variant="secondary">左下</Button>
    </Flex>
    <Flex vertical gap="small">
      <Button>右上</Button>
      <Button>右下</Button>
    </Flex>
  </Flex>
); 

export default App;