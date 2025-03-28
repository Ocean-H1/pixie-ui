import React from 'react';
import { Typography } from '@pixie-ui/core';

const { Title, Paragraph, Text } = Typography;

const App: React.FC = () => (
  <>
    <Title>标题</Title>
    <Paragraph>
      这是一个段落。这是一个段落。这是一个段落。这是一个段落。这是一个段落。
      这是一个段落。这是一个段落。这是一个段落。这是一个段落。这是一个段落。
    </Paragraph>
    <Paragraph>
      这是另一个段落。这是另一个段落。这是另一个段落。这是另一个段落。这是另一个段落。
      这是另一个段落。这是另一个段落。这是另一个段落。这是另一个段落。这是另一个段落。
    </Paragraph>
    <Text>文本</Text>
  </>
);

export default App; 