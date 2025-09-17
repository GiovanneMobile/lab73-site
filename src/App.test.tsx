import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders header logo', () => {
  render(<App />);
  // Target the h1 in header specifically
  const logoElement = screen.getByRole('heading', { level: 1, name: /LAB 73/i });
  expect(logoElement).toBeInTheDocument();
});

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { level: 1, name: /Professional Music Recording Studio/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders main navigation buttons', () => {
  render(<App />);
  // Get all buttons and check that navigation buttons exist
  const allButtons = screen.getAllByRole('button');
  const buttonTexts = allButtons.map(button => button.textContent);
  
  expect(buttonTexts).toContain('Home');
  expect(buttonTexts).toContain('Services');
  expect(buttonTexts).toContain('About');
  expect(buttonTexts).toContain('Contact');
});

test('renders about section content', () => {
  render(<App />);
  const aboutHeading = screen.getByRole('heading', { level: 2, name: /About Lab 73/i });
  const tagline = screen.getByText(/Where Music Meets Innovation/i);
  
  expect(aboutHeading).toBeInTheDocument();
  expect(tagline).toBeInTheDocument();
});

test('renders call to action button', () => {
  render(<App />);
  const bookSessionButton = screen.getByRole('button', { name: /Book a Session/i });
  expect(bookSessionButton).toBeInTheDocument();
});

test('renders services section', () => {
  render(<App />);
  const servicesHeading = screen.getByRole('heading', { level: 2, name: /Our Services/i });
  expect(servicesHeading).toBeInTheDocument();
});

test('renders contact section', () => {
  render(<App />);
  const contactHeading = screen.getByRole('heading', { level: 2, name: /Get In Touch/i });
  expect(contactHeading).toBeInTheDocument();
});
