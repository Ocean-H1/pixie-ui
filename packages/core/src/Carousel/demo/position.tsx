import React, { useState } from 'react';
import { Carousel } from '../Carousel';
import { Button } from '../../Button';
import styled from '@emotion/styled';

const ContentBox = styled.div`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: #364d79;
`;

const ContainerBox = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
`;

type DotPosition = 'top' | 'bottom' | 'left' | 'right';

const App: React.FC = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('bottom');

  const handlePositionChange = (position: DotPosition) => {
    setDotPosition(position);
  };

  return (
    <>
      <ContainerBox>
        <Button 
          variant={dotPosition === 'top' ? 'primary' : 'secondary'} 
          onClick={() => handlePositionChange('top')}
        >
          Top
        </Button>
        <Button 
          variant={dotPosition === 'bottom' ? 'primary' : 'secondary'} 
          onClick={() => handlePositionChange('bottom')}
        >
          Bottom
        </Button>
        <Button 
          variant={dotPosition === 'left' ? 'primary' : 'secondary'} 
          onClick={() => handlePositionChange('left')}
        >
          Left
        </Button>
        <Button 
          variant={dotPosition === 'right' ? 'primary' : 'secondary'} 
          onClick={() => handlePositionChange('right')}
        >
          Right
        </Button>
      </ContainerBox>
      <Carousel dotPosition={dotPosition}>
        <ContentBox>1</ContentBox>
        <ContentBox>2</ContentBox>
        <ContentBox>3</ContentBox>
        <ContentBox>4</ContentBox>
      </Carousel>
    </>
  );
};

export default App; 