import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 2px solid var(--color--light-purple);
  border-radius: 9px;
  background-color: rgba(74, 78, 105, 0.1);
  outline: none;
  padding: 0 12px;
  font-size: var(--font-size--regular);
  color: var(--color--dark-purple);

  &:focus {
    outline: none;
  }
`;

export default Input;
