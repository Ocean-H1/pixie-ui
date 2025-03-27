import React from 'react';
import { Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button variant="primary">主按钮</Button>
    <Button variant="secondary">次按钮</Button>
    <Button variant="text">文本按钮</Button>
  </div>
); 

export default App;