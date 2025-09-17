import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lab 73 studio site', () => {
  render(<App />);
  // Test for Portuguese title (default language)
  const heroTitle = screen.getByRole('heading', { name: 'Estúdio Profissional de Gravação Musical' });
  expect(heroTitle).toBeInTheDocument();
  
  // Test that language selector is present
  const brazilFlag = screen.getByRole('button', { name: 'Alterar idioma para Português' });
  const usFlag = screen.getByRole('button', { name: 'Change language to English' });
  expect(brazilFlag).toBeInTheDocument();
  expect(usFlag).toBeInTheDocument();
});
