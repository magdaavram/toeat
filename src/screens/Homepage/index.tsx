import React from 'react';
import Search from 'components/Search';
import Filters from 'components/Filters';
import RecipesList from 'components/RecipesList';

const Homepage = () => {
  return (
    <>
      <Search />
      <Filters />
      <RecipesList />
    </>
  );
};

export default Homepage;
