import React, { useState } from 'react';
import { Rate } from '@pixie-ui/core';

const desc = ['很糟糕', '糟糕', '一般', '好', '很好'];

const App: React.FC = () => {
  const [value, setValue] = useState(3);
  
  return (
    <div>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span style={{ marginLeft: 10 }}>{desc[value - 1]}</span> : ''}
    </div>
  );
};

export default App; 