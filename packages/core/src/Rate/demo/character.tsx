import React from 'react';
import { Rate, Icon } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <Rate character={<Icon icon="mdi:heart" />} defaultValue={2} />
    <br />
    <Rate character="A" allowHalf defaultValue={2.5} />
    <br />
    <Rate character="好" defaultValue={3} />
  </div>
);

export default App; 