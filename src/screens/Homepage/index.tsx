import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Recipe, { IRecipe } from 'api/Recipe';
import Search from 'components/Search';
import Filters from 'components/Filters';
import RecipesList from 'components/RecipesList';

const ResultText = styled.span`
  display: inline-block;
  width: 70%;
  margin-top: 27px;
  font-size: var(--font-size--large);
  font-family: 'Roboto Medium';
  color: var(--color--medium-purple);
`;

const Homepage = () => {
  const api = new Recipe();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [page, setPage] = useState(1);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setPage(page + 1);
  };

  const loadRecipes = () => {
    const newRecipes = api.getRecipes(page, 6, searchTerm);

    if (newRecipes.length === 0) {
      return;
    }

    setRecipes((existingRecipes) => [...existingRecipes, ...newRecipes]);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  };

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      if (ev.currentTarget.value === searchTerm) {
        ev.currentTarget.value = '';
        return;
      }

      setPage(1);
      setRecipes([]);
      setSearchTerm(ev.currentTarget.value);
      ev.currentTarget.value = '';
    }
  };

  useEffect(loadRecipes, [searchTerm, page]);

  return (
    <>
      <Search
        handleClick={(ev) => {
          ev.preventDefault();
          console.log('pressed search');
        }}
        handleKeyPress={handleSearch}
      />
      <Filters />
      {searchTerm && <ResultText>Results for: "{searchTerm}"</ResultText>}
      <RecipesList recipes={recipes} />
    </>
  );
};

export default Homepage;
