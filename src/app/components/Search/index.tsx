import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../assets/icons/Search';
import Button from '../Button';
import Input from '../Input';

const Container = styled.div`
  display: flex;
  width: 70%;
  max-width: 1000px;
  height: 54px;
`;

const SearchInput = styled(Input)`
  height: 100%;
  border-width: 3px;
  border-radius: 12px;
  padding: 0 54px 0 18px;
`;

const SearchButton = styled(Button)`
  width: 30px;
  height: 30px;
  margin: auto 0;
  margin-left: -45px;
  opacity: 0.6;
`;

const Search = () => (
  <Container>
    <SearchInput placeholder={'Find recipes by ingredients or name...'} />
    <SearchButton onClick={() => console.log('pressed search')}>
      <SearchIcon />
    </SearchButton>
  </Container>
);

export default Search;
