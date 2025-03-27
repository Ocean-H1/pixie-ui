import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Button } from '@pixie-ui/core';

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const App: React.FC = () => (
  <Container>
    <Tooltip title="默认有箭头" placement="top">
      <Button>默认</Button>
    </Tooltip>
    <Tooltip title="无箭头" placement="top" arrow={false}>
      <Button>无箭头</Button>
    </Tooltip>
    <Tooltip title="箭头指向中心" placement="top" arrow={{ pointAtCenter: true }}>
      <Button>指向中心</Button>
    </Tooltip>
  </Container>
);

export default App;