import React from 'react';
import { Card } from '@pixie-ui/core';

const App: React.FC = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Card title="默认尺寸" style={{ width: 300 }}>
      <p>默认尺寸的卡片</p>
    </Card>
    <Card title="小尺寸" size="small" style={{ width: 300 }}>
      <p>小尺寸的卡片</p>
    </Card>
  </div>
);

export default App;