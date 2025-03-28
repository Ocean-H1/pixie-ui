import React from 'react';
import { Watermark } from '@pixie-ui/core';

const App: React.FC = () => (
  <Watermark content="Pixie UI">
    <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '18px' }}>基础文字水印示例</p>
    </div>
  </Watermark>
);

export default App; 