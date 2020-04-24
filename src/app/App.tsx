import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import SearchInput from './components/SearchInput';

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
      </Main>
    </ContentWrapper>
  );
};

export default App;
