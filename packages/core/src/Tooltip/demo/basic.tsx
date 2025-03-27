import React from 'react';
import { Tooltip, Button } from '@pixie-ui/core';

const App:React.FC = () => (
  <Tooltip title="这是一个提示文本">
    <Button>鼠标移入查看提示</Button>
  </Tooltip>
); 

export default App;