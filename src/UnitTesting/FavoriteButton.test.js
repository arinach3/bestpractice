import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoriteButton from '../RecipeBook/FavoriteButton';

const getStoredFavorites = () => {
  const raw = localStorage.getItem('favorites');
  return raw ? JSON.parse(raw) : [];
};

beforeAll(() => {
  if (typeof global.localStorage === 'undefined') {
    let store = {};
    global.localStorage = {
      getItem: (key) => (key in store ? store[key] : null),
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      removeItem: (key) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
  }
});

beforeEach(() => {
  localStorage.clear();
});

test('initially shows "Add to favorites" when not in localStorage', () => {
  render(<FavoriteButton recipeId="pancakes" />);
  const button = screen.getByRole('button', { name: /add to favorites/i });
  expect(button).toBeInTheDocument();
  expect(getStoredFavorites()).toEqual([]);
});

test('clicking adds to favorites and updates label', () => {
  render(<FavoriteButton recipeId="pancakes" />);
  const button = screen.getByRole('button', { name: /add to favorites/i });

  fireEvent.click(button);

  expect(button).toHaveTextContent(/remove from favorites/i);
  expect(getStoredFavorites()).toContain('pancakes');
});

test('clicking again removes from favorites', () => {
  localStorage.setItem('favorites', JSON.stringify(['pancakes']));
  render(<FavoriteButton recipeId="pancakes" />);
  const button = screen.getByRole('button', { name: /remove from favorites/i });

  fireEvent.click(button);

  expect(button).toHaveTextContent(/add to favorites/i);
  expect(getStoredFavorites()).not.toContain('pancakes');
});