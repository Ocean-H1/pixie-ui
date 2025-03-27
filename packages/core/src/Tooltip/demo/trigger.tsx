import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Button } from '@pixie-ui/core';

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const App:React.FC = () => (
  <Container>
    <Tooltip title="鼠标移入触发" placement="top" trigger="hover">
      <Button>移入</Button>
    </Tooltip>
    <Tooltip title="聚焦触发" placement="top" trigger="focus">
      <Button>聚焦</Button>
    </Tooltip>
    <Tooltip title="点击触发" placement="top" trigger="click">
      <Button>点击</Button>
    </Tooltip>
    <Tooltip title="右键点击触发" placement="top" trigger="contextMenu">
      <Button>右键</Button>
    </Tooltip>
    <Tooltip
      title="多种方式触发"
      placement="top"
      trigger={['hover', 'focus']}
    >
      <Button>多种方式</Button>
    </Tooltip>
  </Container>
); 

export default App;