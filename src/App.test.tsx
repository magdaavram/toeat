import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

test('renders recommended ingredients', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Recommended ingredients/i);

  expect(linkElement).toBeInTheDocument();
});
