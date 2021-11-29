import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Shows Header', () => {
  render(<App />);
  const header = screen.getByText('Tickets in Account');
  expect(header).toBeInTheDocument();
});
