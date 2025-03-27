import React from 'react';
import { Card } from '@pixie-ui/core';

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={
      <img
        alt="示例图片"
        src="https://fastly.jsdelivr.net/gh/Ocean-H1/blog_image_bed/bg-js.png"
      />
    }
    title="封面卡片"
  >
    <p>卡片可以设置封面</p>
    <p>适合用于图文信息展示</p>
  </Card>
);

export default App;