import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Button } from '@pixie-ui/core';

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const App:React.FC = () => (
  <Container>
    <Tooltip title="这是默认颜色" placement="top">
      <Button>默认</Button>
    </Tooltip>
    <Tooltip title="这是自定义颜色" color="#2db7f5" placement="top">
      <Button>蓝色</Button>
    </Tooltip>
    <Tooltip title="这是自定义颜色" color="#87d068" placement="top">
      <Button>绿色</Button>
    </Tooltip>
    <Tooltip title="这是自定义颜色" color="#ff5500" placement="top">
      <Button>红色</Button>
    </Tooltip>
    <Tooltip title="这是自定义颜色" color="#722ed1" placement="top">
      <Button>紫色</Button>
    </Tooltip>
  </Container>
); 

export default App;