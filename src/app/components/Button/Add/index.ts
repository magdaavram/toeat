import styled from 'styled-components';
import Button from '../index';

const AddButton = styled(Button)`
  width: 40px;
  height: 40px;
  background-color: var(--color--medium-purple);
  font-family: Roboto Regular;
  font-size: var(--font-size--xlarge);
  color: var(--color--beige);
  padding: 0;
  border-radius: 50%;
  margin-top: 9px;

  &:hover {
    opacity: 0.9;
  }
`;

export default AddButton;
