import React from 'react';
import { Typography } from '@pixie-ui/core';

const { Title } = Typography;

const App: React.FC = () => (
  <>
    <Title level={1}>h1. 一级标题</Title>
    <Title level={2}>h2. 二级标题</Title>
    <Title level={3}>h3. 三级标题</Title>
    <Title level={4}>h4. 四级标题</Title>
    <Title level={5}>h5. 五级标题</Title>
  </>
);

export default App; 