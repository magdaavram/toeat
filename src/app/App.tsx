import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
// import Search from './components/Search';
// import Filters from './components/Filters';
// import RecipesList from './components/RecipesList';
// import RecipeView from './components/RecipeView';
import AddEditRecipeView from './components/AddEditRecipeView';

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
        {/*<Search />*/}
        {/*<Filters />*/}
        {/*<RecipesList />*/}
        {/*<RecipeView />*/}
        <AddEditRecipeView />
      </Main>
    </Container>
  );
};

export default App;
