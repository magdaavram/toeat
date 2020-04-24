import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchInput from './components/SearchInput';
import Filters from './components/Filters';

const ContentWrapper = styled.div`
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
    <ContentWrapper>
      <Header />
      <Main>
        <SearchInput />
        <Filters />
      </Main>
    </ContentWrapper>
  );
};

export default App;
