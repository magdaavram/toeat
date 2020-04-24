import React from 'react';
import Tag from '../Tag';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 70%;
  margin: 18px;
  background-color: rgba(201, 173, 167, 0.3);
  padding: 18px;
  border-radius: 12px;
`;

const StyledHeader = styled.h3`
  padding: 0;
  margin: 0 0 18px 0;
  color: var(--color--light-purple);
  font-size: var(--font-size--large);
`;

const Filters = () => {
  return (
    <StyledWrapper>
      <StyledHeader>Recommended ingredients</StyledHeader>
      <div>
        <Tag />
      </div>
    </StyledWrapper>
  );
};

export default Filters;
