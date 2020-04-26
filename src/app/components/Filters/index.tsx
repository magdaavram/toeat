import React, { useEffect, useState } from 'react';
import Tag from '../Tag';
import styled from 'styled-components';
import getRecommendedFilters, { IFilter } from '../../api/filters';

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
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    setFilters(getRecommendedFilters());
  }, []);

  const filtersList = filters.map((filter: IFilter, index) => (
    <Tag
      name={filter.name}
      active={filter.active}
      key={`filter-${index}`}
      onClick={() => console.log(`pressed ${filter.name}`)}
    />
  ));

  return (
    <Container>
      <Header>Recommended ingredients</Header>
      <TagContainer>{filtersList}</TagContainer>
    </Container>
  );
};

export default Filters;
