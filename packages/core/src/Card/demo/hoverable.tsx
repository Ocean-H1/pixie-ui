import React from 'react';
import { Card } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Card title="可悬浮卡片" hoverable>
      <p>鼠标移过时会有浮起效果</p>
    </Card>
    <Card title="可悬浮无边框卡片" variant="borderless" hoverable style={{ background: '#f0f2f5' }}>
      <p>无边框卡片也可以有悬浮效果</p>
    </Card>
  </div>
);

export default App;