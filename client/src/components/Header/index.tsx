import React from 'react';
import styled from 'styled-components';
import LogoIcon from 'assets/icons/Logo';
import TopControls from 'components/TopControls';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <Link to="/">
      <LogoIcon />
    </Link>
    <TopControls />
  </Container>
);

export default Header;
