import React from 'react';
import Tag from '../Tag';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  margin: 18px;
  background-color: rgba(201, 173, 167, 0.3);
  padding: 18px;
  border-radius: 12px;
`;

const Header = styled.h3`
  padding: 0;
  margin: 0 0 18px 0;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const TagContainer = styled.div`
  flex: flex wrap;
`;

const Filters = () => {
  return (
    <Container>
      <Header>Recommended ingredients</Header>
      <TagContainer>
        <Tag name={'tomatoes'} active={true} />
        <Tag name={'potatoes'} active={false} />
        <Tag name={'garlic'} active={true} />
        <Tag name={'spinach'} active={false} />
      </TagContainer>
    </Container>
  );
};

export default Filters;
