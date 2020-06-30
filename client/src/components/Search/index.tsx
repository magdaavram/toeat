import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';

interface IProps {
  handleSearch: (term: string) => void;
}

const Form = styled.form`
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
  margin-left: -50px;
  opacity: 0.6;
`;

const Search = (props: IProps) => {
  const handleSearch = (e: any) => {
    const [input] = e.target.children;

    props.handleSearch(input.value);
    input.value = '';

    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSearch}>
      <SearchInput type="search" placeholder={'Find recipes by ingredients or name...'} />
      <SearchButton type="submit" hasIcon={true} icon={'search'} iconWidth={27} iconHeight={27} />
    </Form>
  );
};

export default Search;
