import React from 'react';
import styled from 'styled-components';
import OPath from './oPath';

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Logo = () => {

  return (
    <LogoContainer>
      <OPath transformY={0} />
    </LogoContainer>
  )
};

export default Logo;
