import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { filterRecipes } from "../RecipeBook/Search.jsx"



describe('filterRecipes', () => {
  const recipes = [
    { title: 'Pancakes' },
    { title: 'Creampuffs' },
    { title: 'Salad' }
  ];

  test('returns all recipes when search term is empty', () => {
    const result = filterRecipes(recipes, '');
    expect(result).toEqual(recipes);
  });

  test('return pancakes when search for pan', () => {
    const result = filterRecipes(recipes, 'pan');
    expect(result).toEqual([{ title: "Pancakes"}]);
  })

  test('return no recipes when search for hamburger', () => {
    const result = filterRecipes(recipes, 'hamburger');
    expect(result).toEqual([]);
  })
})
