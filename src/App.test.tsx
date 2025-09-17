import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lab 73 studio site', () => {
  render(<App />);
  const heroTitle = screen.getByRole('heading', { name: 'Professional Music Recording Studio' });
  expect(heroTitle).toBeInTheDocument();
});
