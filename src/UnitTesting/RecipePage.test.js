import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Favorites from '../RecipeBook/Favorites.jsx';

const getStoredFavorites = () => {
  const raw = localStorage.getItem('favorites');
  return raw ? JSON.parse(raw) : [];
};

beforeEach(() => {
  localStorage.clear();
});

test('initially shows "Favorite" when recipe is not favorited', () => {
  render(<Favorites recipeId="pancakes" />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent(/favorite/i);
  expect(getStoredFavorites()).toEqual([]);
});

test('clicking the button adds to favorites and updates text', () => {
  render(<Favorites recipeId="pancakes" />);
  const button = screen.getByRole('button');

  // Click to favorite
  fireEvent.click(button);

  expect(button).toHaveTextContent(/unfavorite/i);
  expect(getStoredFavorites()).toContain('pancakes');
});

test('clicking again removes from favorites and toggles back', () => {
  localStorage.setItem('favorites', JSON.stringify(['pancakes']));
  render(<Favorites recipeId="pancakes" />);
  const button = screen.getByRole('button');

  expect(button).toHaveTextContent(/unfavorite/i);
  expect(getStoredFavorites()).toContain('pancakes');

  fireEvent.click(button);

  expect(button).toHaveTextContent(/favorite/i);
  expect(getStoredFavorites()).not.toContain('pancakes');
});