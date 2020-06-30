import styled from 'styled-components';
import Button from 'components/Button/index';

const ActionButton = styled(Button)`
  width: auto;
  height: 40px;
  margin-left: 9px;
  background-color: var(--color--medium-purple);
  color: var(--color--beige);
  border-radius: 9px;
  padding: 0 18px;
  font-family: 'Roboto Regular';
  font-size: var(--font-size--regular);

  &:hover {
    opacity: 0.9;
  }
`;

export default ActionButton;
