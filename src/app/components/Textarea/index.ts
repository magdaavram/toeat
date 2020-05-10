import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  resize: vertical;
  border: 2px solid var(--color--light-purple);
  border-radius: 9px;
  background-color: rgba(74, 78, 105, 0.1);
  outline: none;
  padding: 9px 12px;
  font-size: var(--font-size--regular);
  font-family: 'Roboto Regular';
  color: var(--color--dark-purple);

  &:focus {
    outline: none;
  }
`;

export default Textarea;
