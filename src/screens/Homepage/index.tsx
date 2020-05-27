import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Recipe, { IRecipe } from 'api/Recipe';
import Search from 'components/Search';
import RecommendedFilters from 'components/Filters/Recommended';
import Filters from 'components/Filters';
import RecipesList from 'components/RecipesList';

const RecipesContainer = styled.div`
  width: 70%;
  max-width: 1000px;
  margin-top: 18px;
`;

const ResultText = styled.span`
  display: inline-block;
  margin-top: 27px;
  font-size: var(--font-size--large);
  font-family: 'Roboto Medium';
  color: var(--color--medium-purple);
`;

const Homepage = () => {
  const api = new Recipe();
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(loadRecipes, [searchTerm, page]);

  const handleSearch = (terms: string) => {
    if (terms === searchTerm) {
      return;
    }

    setPage(1);
    setRecipes([]);
    setSearchTerm(terms);
  };

  return (
    <>
      <Search handleSearch={handleSearch} />
      <RecommendedFilters />
      <RecipesContainer>
        <Filters />
        {searchTerm && <ResultText>Results for: "{searchTerm}"</ResultText>}
        <RecipesList recipes={recipes} />
      </RecipesContainer>
    </>
  );
};

export default Homepage;
