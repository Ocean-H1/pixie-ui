import React from 'react';
import { Skeleton } from '@pixie-ui/core';

const App: React.FC = () => (
  <>
    <Skeleton avatar />
    <br />
    <Skeleton avatar paragraph={{ rows: 4 }} />
  </>
);

export default App; 