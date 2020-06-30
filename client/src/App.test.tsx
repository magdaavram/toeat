import React from 'react';
import { render } from 'react-dom';
import App from 'App';
import { create } from 'react-test-renderer';

it('should render app without crashing', () => {
  const container = document.createElement('div');

  render(<App />, container);
});

it('should render app correctly', () => {
  const tree = create(<App />);

  expect(tree.toJSON()).toMatchSnapshot();
});
