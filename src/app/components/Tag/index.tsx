import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

const tagProps: Props = {
  active: true,
};

const StyledTag = styled.div((props: Props) => ({
  display: 'inline-block',
  marginRight: '18px',
  padding: '6px 12px 6px 12px',
  borderRadius: '9px',
  backgroundColor: props.active ? 'rgba(110, 37, 52, 0.7)' : 'rgba(110, 37, 52, 0.3)',
  color: 'var(--color--beige)',
  fontSize: 'var(--font-size--small)',
  cursor: 'pointer',
}));

const Tag = () => {
  return (
    <>
      <StyledTag {...tagProps} onClick={() => console.log('pressed tomatoes')}>
        <span>tomatoes</span>
      </StyledTag>

      <StyledTag onClick={() => console.log('pressed potatoes')}>
        <span>potatoes</span>
      </StyledTag>

      <StyledTag {...tagProps} onClick={() => console.log('pressed garlic')}>
        <span>garlic</span>
      </StyledTag>

      <StyledTag onClick={() => console.log('pressed spinach')}>
        <span>spinach</span>
      </StyledTag>
    </>
  );
};

export default Tag;
