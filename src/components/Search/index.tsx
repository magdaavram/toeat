import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import Input from 'components/Input';

interface IProps {
  handleClick: () => void;
}

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

const Search = (props: IProps) => (
  <Container>
    <SearchInput placeholder={"Find recipes by ingredients or name..."}/>

    <SearchButton
      onClick={props.handleClick}
      hasIcon={true}
      icon={"search"}
      iconWidth={"30px"}
      iconHeight={"30px"}
    />
  </Container>
);

export default Search;
