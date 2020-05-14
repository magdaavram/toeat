import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Routes from 'routes';
import { Router } from 'react-router-dom';
import history from 'services/history';

const Container = styled.div`
  padding: 45px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 126px;
`;

const App = () => {
  return (
    <Container>
      <Router history={history}>
        <Header />
        <Main id="main">
          <Routes />
        </Main>
      </Router>
    </Container>
  );
};

export default App;
