import React from 'react';
import { Rate } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <Rate defaultValue={3} />
    <br />
    <Rate allowClear={false} defaultValue={3} />
  </div>
);

export default App; 