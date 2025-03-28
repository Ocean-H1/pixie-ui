import React from 'react';
import { Skeleton } from '@pixie-ui/core';

const App: React.FC = () => (
  <>
    <Skeleton active />
    <br />
    <Skeleton active avatar paragraph={{ rows: 4 }} />
  </>
);

export default App; 