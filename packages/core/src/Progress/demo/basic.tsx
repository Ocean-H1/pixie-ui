import React from 'react';
import { Progress } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <Progress percent={30} />
    <br />
    <Progress percent={50} />
    <br />
    <Progress percent={70} />
    <br />
    <Progress percent={100} />
  </div>
);

export default App; 