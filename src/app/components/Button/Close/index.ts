import styled from 'styled-components';
import Button from '../index';

const CloseButton = styled(Button)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 27px;
  right: 27px;
  font-size: var(--font-size--regular);
  font-family: 'Roboto Regular';
  color: var(--color--light-purple);
  background-color: rgb(242, 233, 228, 0.4);
  border-radius: 3px;

  &:hover {
    color: var(--color--medium-purple);
  }
`;

export default CloseButton;
