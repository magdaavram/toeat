import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IRecipe } from 'api/Recipe';
import API from 'api';
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

const EmptyList = styled.div`
  padding-top: 54px;
  color: var(--color--light-purple);
  text-align: center;
  font-size: var(--font-size--large);
`;

const Homepage = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

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
    API.Recipe
      .getRecipes(page, 6, searchTerm)
      .then((newRecipes) => {
        if (newRecipes.length > 0) {
          setRecipes((existingRecipes) => [...existingRecipes, ...newRecipes]);
        }
      })
      .catch((err) => setError(err));

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

        {recipes.length > 0 ? (
          <RecipesList recipes={recipes} />
        ) : (
          <EmptyList>No recipes found</EmptyList>
        )}
      </RecipesContainer>
    </>
  );
};

export default Homepage;
