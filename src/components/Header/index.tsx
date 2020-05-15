import React from 'react';
import styled from 'styled-components';
import { Router } from 'react-router-dom';
import history from 'services/history';
import LogoIcon from 'assets/icons/Logo';
import TopControls from 'components/TopControls';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <Container>
    <Router history={history}>
      <Link to="/">
        <LogoIcon />
      </Link>
    </Router>

    <TopControls />
  </Container>
);

export default Header;
