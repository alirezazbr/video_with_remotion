import React from 'react';
import { Sequence } from 'remotion';
import styled from 'styled-components';
import Logo from './logo';

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: '#1111';
`;

const CenteredContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CodeOneLogo = () => {

  return (
    <BackgroundContainer>
      <Sequence from={0} durationInFrames={Infinity}> 
        <CenteredContainer>
          <Logo />
        </CenteredContainer>
      </Sequence>
    </BackgroundContainer>
  )
};

export default CodeOneLogo;
