import React from 'react';
import { Card, Button } from '@pixie-ui/core';

const App: React.FC = () => (
  <Card
    title="卡片标题"
    extra={<a href="#">更多</a>}
    actions={[
      <Button key="1" variant="text" size="small">
        操作一
      </Button>,
      <Button key="2" variant="text" size="small">
        操作二
      </Button>,
    ]}
  >
    <p>卡片内容</p>
    <p>这是一个基础卡片示例</p>
  </Card>
);

export default App;
