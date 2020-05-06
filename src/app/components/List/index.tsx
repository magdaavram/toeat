import React from 'react';
import styled from 'styled-components';

type Mapper = (item: any) => string;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 9px;
  border-bottom: 2px solid rgba(154, 140, 152, 0.2);

  &:before {
    content: '\\25CF';
    color: var(--color--burgundy);
    font-size: var(--font-size--small);
    opacity: 0.8;
    margin-right: 9px;
    padding-bottom: 3px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const List = ({ items, renderItem }: { items: any[]; renderItem: Mapper }) => {
  return (
    <ListContainer>
      {items.map((item: any, index: number) => (
        <Item key={`item-${index}`}>{renderItem(item)}</Item>
      ))}
    </ListContainer>
  );
};

export default List;
