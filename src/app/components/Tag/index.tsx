import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  name: string;
  active: boolean;
}

const TagContainer = styled.div((props: Props) => ({
  display: 'inline-block',
  margin: '0 0 12px 12px',
  padding: '6px 12px 6px 12px',
  borderRadius: '9px',
  backgroundColor: props.active ? 'rgba(110, 37, 52, 0.7)' : 'rgba(110, 37, 52, 0.3)',
  color: 'var(--color--beige)',
  fontSize: 'var(--font-size--small)',
  cursor: 'pointer',
}));

const Tag = (props: Props) => {
  return (
    <TagContainer {...props} onClick={() => console.log(`pressed ${props.name}`)}>
      <span>{props.name}</span>
    </TagContainer>
  );
};

export default Tag;
