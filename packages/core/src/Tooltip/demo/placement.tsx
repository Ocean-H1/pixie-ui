import React from 'react';
import styled from '@emotion/styled';
import { Tooltip, Button } from '@pixie-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 8px;
`;

const App:React.FC = () => (
  <Container>
    <Row>
      <Tooltip placement="topLeft" title="提示文本">
        <Button>上左</Button>
      </Tooltip>
      <Tooltip placement="top" title="提示文本">
        <Button>上</Button>
      </Tooltip>
      <Tooltip placement="topRight" title="提示文本">
        <Button>上右</Button>
      </Tooltip>
    </Row>
    <Row>
      <Tooltip placement="leftTop" title="提示文本">
        <Button>左上</Button>
      </Tooltip>
      <Tooltip placement="rightTop" title="提示文本">
        <Button>右上</Button>
      </Tooltip>
    </Row>
    <Row>
      <Tooltip placement="left" title="提示文本">
        <Button>左</Button>
      </Tooltip>
      <Tooltip placement="right" title="提示文本">
        <Button>右</Button>
      </Tooltip>
    </Row>
    <Row>
      <Tooltip placement="leftBottom" title="提示文本">
        <Button>左下</Button>
      </Tooltip>
      <Tooltip placement="rightBottom" title="提示文本">
        <Button>右下</Button>
      </Tooltip>
    </Row>
    <Row>
      <Tooltip placement="bottomLeft" title="提示文本">
        <Button>下左</Button>
      </Tooltip>
      <Tooltip placement="bottom" title="提示文本">
        <Button>下</Button>
      </Tooltip>
      <Tooltip placement="bottomRight" title="提示文本">
        <Button>下右</Button>
      </Tooltip>
    </Row>
  </Container>
); 

export default App;