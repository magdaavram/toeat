import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Search from './components/Search';
import Filters from './components/Filters';

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
      <Header />
      <Main>
        <Search />
        <Filters />
      </Main>
    </Container>
  );
};

export default App;
