import React from 'react';
import { Typography, Space } from '@pixie-ui/core';

const { Text } = Typography;

const App: React.FC = () => (
  <Space direction="vertical">
    <Text>默认文本</Text>
    <Text type="secondary">次要文本</Text>
    <Text type="success">成功文本</Text>
    <Text type="warning">警告文本</Text>
    <Text type="danger">危险文本</Text>
    <Text disabled>禁用文本</Text>
    <Text mark>标记文本</Text>
    <Text code>代码文本</Text>
    <Text keyboard>键盘文本</Text>
    <Text underline>下划线文本</Text>
    <Text delete>删除线文本</Text>
    <Text strong>加粗文本</Text>
    <Text italic>斜体文本</Text>
    <Text copyable>可复制文本</Text>
    <Text ellipsis style={{ width: '100px' }}>
      这是一段很长的文本，会自动省略显示
    </Text>
  </Space>
);

export default App; 