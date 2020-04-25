import React from 'react';
import styled from 'styled-components';
import LogoIcon from '../../assets/icons/Logo';
import TopControls from '../TopControls';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <a href="/#" onClick={() => console.log('pressed logo')}>
      <LogoIcon />
    </a>
    <TopControls />
  </Container>
);

export default Header;
