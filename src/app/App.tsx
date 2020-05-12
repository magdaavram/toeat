import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Homepage from './screens/Homepage';
import RecipeView from './screens/ViewRecipe';
import AddEditRecipeView from './screens/AddEditRecipe';

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
        {/*<Homepage />*/}
        {/*<RecipeView />*/}
        <AddEditRecipeView />
      </Main>
    </Container>
  );
};

export default App;
