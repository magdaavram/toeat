import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Routes from 'routes';
import { Router } from 'react-router-dom';
import history from 'services/history';
import RecipeContext from './RecipeContext';

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
  const [id, setId] = useState('');
  const handleIdChange = (id: string) => setId(id);

  return (
    <Container>
      <Router history={history}>
        <RecipeContext.Provider value={{ id: id, setId: handleIdChange }}>
          <Header />
        </RecipeContext.Provider>

        <Main>
          <RecipeContext.Provider value={{ id: id, setId: handleIdChange }}>
            <Routes />
          </RecipeContext.Provider>
        </Main>
      </Router>
    </Container>
  );
};

export default App;
