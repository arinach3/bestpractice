import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import SideBar from './SideBar';

// Mock the recipes data
jest.mock('./Recipes', () => [
  { id: '1', title: 'Recipe 1' },
  { id: '2', title: 'Recipe 2' }
]);

describe('SideBar', () => {
  const renderWithRouter = (initialEntries = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <SideBar />
      </MemoryRouter>
    );
  };

  test('renders sidebar with recipes', () => {
    renderWithRouter();
    expect(screen.getByText('Choose a recipe')).toBeInTheDocument();
    expect(screen.getByText('Recipe 1')).toBeInTheDocument();
    expect(screen.getByText('Recipe 2')).toBeInTheDocument();
  });

  test('highlights selected recipe', () => {
    renderWithRouter(['/recipes/1']);
    const selectedItem = screen.getByText('Recipe 1').closest('li');
    expect(selectedItem).toHaveClass('selected');
  });

  test('creates correct links', () => {
    renderWithRouter();
    const link = screen.getByText('Recipe 1').closest('a');
    expect(link).toHaveAttribute('href', '/recipes/1');
  });
});