import styled from 'styled-components';
import Button from '../index';

const DeleteButton = styled(Button)`
  width: 30px;
  height: 30px;
  color: var(--color--light-purple);
  background-color: rgba(74, 78, 105, 0.1);

  align-self: center;
  font-size: var(--font-size--regular);
  border-radius: 9px;

  &:hover {
    color: var(--color--beige);
    background-color: rgba(110, 37, 52, 0.5);
  }
`;

export default DeleteButton;
