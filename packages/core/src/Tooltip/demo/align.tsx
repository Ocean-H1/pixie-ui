import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Button } from '@pixie-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const App:React.FC = () => (
  <Container>
    <Row>
      <Tooltip 
        title="默认位置的提示" 
        placement="top"
      >
        <Button>默认对齐</Button>
      </Tooltip>
      
      <Tooltip 
        title="向右偏移10px的提示" 
        placement="top"
        align={{ offsetX: 10 }}
      >
        <Button>水平偏移</Button>
      </Tooltip>
      
      <Tooltip 
        title="向下偏移5px的提示" 
        placement="top"
        align={{ offsetY: 5 }}
      >
        <Button>垂直偏移</Button>
      </Tooltip>
    </Row>
    
    <Row>
      <Tooltip 
        title="目标偏移的提示" 
        placement="top"
        align={{ targetOffset: 20 }}
      >
        <Button>目标偏移</Button>
      </Tooltip>
      
      <Tooltip 
        title="组合偏移效果" 
        placement="top"
        align={{ 
          offsetX: 15, 
          offsetY: -5, 
          targetOffset: 10 
        }}
      >
        <Button>组合偏移</Button>
      </Tooltip>
    </Row>
  </Container>
); 

export default App;