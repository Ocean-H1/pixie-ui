import React from 'react';
import { Watermark } from '@pixie-ui/core';

const App: React.FC = () => (
  <Watermark content={['Pixie UI', '多行水印示例', '版权所有']}>
    <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '18px' }}>多行文字水印示例</p>
    </div>
  </Watermark>
);

export default App; 