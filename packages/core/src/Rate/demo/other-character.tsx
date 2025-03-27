import React from 'react';
import { Rate, Icon } from '@pixie-ui/core';

const App: React.FC = () => (
  <div>
    <Rate character={<Icon icon="mdi:emoticon" />} defaultValue={2} />
    <br />
    <Rate character={<Icon icon="mdi:thumb-up" />} allowHalf defaultValue={2.5} />
  </div>
);

export default App; 