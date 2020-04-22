import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const ContentWrapper = styled.div`
  padding: 45px;
`;

const Main = styled.div`
  margin-top: 90px;
`;

const App = () => {
  return (
    <ContentWrapper>
      <Header />
      <Main >
        <p>This is just the beginning.</p>
      </Main>
    </ContentWrapper>
  );
}

export default App;
