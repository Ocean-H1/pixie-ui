import React from 'react';
import { Carousel } from '../Carousel';
import styled from '@emotion/styled';

const ContentBox = styled.div`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

const App: React.FC = () => (
  <Carousel autoplay>
    <ContentBox>1</ContentBox>
    <ContentBox>2</ContentBox>
    <ContentBox>3</ContentBox>
    <ContentBox>4</ContentBox>
  </Carousel>
);

export default App; 