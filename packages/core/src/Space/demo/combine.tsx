import React from 'react';
import { Space, Button, Card, Flex } from '@pixie-ui/core';

const App: React.FC = () => (
  <Space direction="vertical" size="large">
    <Card title="水平间距">
      <Space>
        <Button>按钮 1</Button>
        <Button>按钮 2</Button>
        <Button>按钮 3</Button>
      </Space>
    </Card>
    <Card title="垂直间距">
      <Space direction="vertical">
        <Space split="|">
          <span>分隔符 1</span>
          <span>分隔符 2</span>
          <span>分隔符 3</span>
        </Space>
        <Flex gap="small">
          <Button>Flex 按钮 1</Button>
          <Button>Flex 按钮 2</Button>
        </Flex>
        <Space size="large">
          <Button>大间距按钮 1</Button>
          <Button>大间距按钮 2</Button>
        </Space>
      </Space>
    </Card>
  </Space>
);

export default App; 