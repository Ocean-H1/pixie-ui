import React from 'react';
import { Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button disabled variant="primary">禁用主按钮</Button>
    <Button disabled variant="secondary">禁用次按钮</Button>
    <Button disabled variant="text">禁用文本按钮</Button>
  </div>
); 

export default App;