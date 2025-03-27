import React from 'react';
import { Card } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ background: '#f0f2f5', padding: '20px' }}>
    <Card 
      title="无边框卡片" 
      variant="borderless"
    >
      <p>在背景色上使用无边框卡片</p>
    </Card>
  </div>
);

export default App;