import React from 'react';
import { Input } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input size="small" placeholder="小尺寸" />
    <Input size="medium" placeholder="中尺寸" />
    <Input size="large" placeholder="大尺寸" />
  </div>
); 

export default App;