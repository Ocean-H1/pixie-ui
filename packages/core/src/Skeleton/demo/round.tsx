import React from 'react';
import { Skeleton } from '@pixie-ui/core';

const App: React.FC = () => (
  <>
    <Skeleton round />
    <br />
    <Skeleton avatar round paragraph={{ rows: 4 }} />
    <br />
    <Skeleton avatar active round paragraph={{ rows: 4 }} />
  </>
);

export default App; 