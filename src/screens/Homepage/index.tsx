import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      setSearchTerm(ev.currentTarget.value);
      ev.currentTarget.value = '';
    }
  };

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

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
      <RecipesList />
    </>
  );
};

export default Homepage;
