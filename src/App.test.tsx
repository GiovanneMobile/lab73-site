import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Book a Session button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book a Session/i);
  expect(linkElement).toBeInTheDocument();
});
