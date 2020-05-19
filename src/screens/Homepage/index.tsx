import React from 'react';
import Search from 'components/Search';
import Filters from 'components/Filters';
import RecipesList from 'components/RecipesList';

const Homepage = () => {
  return (
    <>
      <Search handleClick={() => console.log('pressed search')} />
      <Filters />
      <RecipesList />
    </>
  );
};

export default Homepage;
