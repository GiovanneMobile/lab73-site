import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lab 73 under construction site', () => {
  render(<App />);
  
  // Test for the Lab 73 logo in the header
  const logoTitle = screen.getByRole('heading', { name: 'Lab 73' });
  expect(logoTitle).toBeInTheDocument();
  
  // Test for Portuguese under construction title (default language)
  const constructionTitle = screen.getByRole('heading', { name: 'Site em Construção' });
  expect(constructionTitle).toBeInTheDocument();
  
  // Test that contact section is present and functional
  const contactTitle = screen.getByRole('heading', { name: 'Entre em Contato' });
  expect(contactTitle).toBeInTheDocument();
  
  // Test that contact form is present
  const submitButton = screen.getByRole('button', { name: 'Enviar Mensagem' });
  expect(submitButton).toBeInTheDocument();
});
