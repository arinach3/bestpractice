import React from 'react';
import { render, screen } from '@testing-library/react';
import 'react-router-dom';
import '@testing-library/jest-dom';
import SideBar from '../RecipeBook/SideBar.jsx';




// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>,
  useParams: () => ({ id: '1' })
}));

// Mock recipes
jest.mock('./Recipes', () => [
  { id: '1', title: 'Pasta Carbonara' },
  { id: '2', title: 'Chicken Tikka' }
]);

describe('SideBar', () => {
  
  test('renders without crashing', () => {
    render(<SideBar />);
  });

  test('displays correct title', () => {
    const { getByText } = render(<SideBar />);
    expect(getByText('Choose a recipe')).toBeInTheDocument();
  })
})