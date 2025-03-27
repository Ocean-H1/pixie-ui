import React from 'react';
import { Input } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input error placeholder="错误状态" />
    <Input error errorMessage="请输入正确的内容" placeholder="错误状态带提示" />
  </div>
); 

export default App;