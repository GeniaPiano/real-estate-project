import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import { PropertiesList } from './ProperstiesList.jsx'
import { usePropertiesStore } from '../../../stores/usePropertiesStore'

// Mock the usePropertiesStore hook
jest.mock('../../../stores/usePropertiesStore', () => ({
  usePropertiesStore: jest.fn(),
}));

// Mock the useNavigate hook
jest.mock('react-router', () => ({
  useNavigate: jest.fn(),
}));

describe('PropertiesList', () => {
  it('renders loading spinner when fetching properties', async () => {
    usePropertiesStore.mockImplementation(() => ({
      properties: [],
      fetchProperties: jest.fn(),
      isLoading: true,
      filteredProperties: [],
    }));

    render(<PropertiesList />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders properties when data is fetched', async () => {
    const mockProperties = [
      { id: 1, name: 'Property 1', city: 'City 1', price: '1000', images: ['url1'], description: 'Description 1' },
  
    ];

    usePropertiesStore.mockImplementation(() => ({
      properties: mockProperties,
      fetchProperties: jest.fn(),
      isLoading: false,
      filteredProperties: mockProperties,
    }));

    render(<PropertiesList />);

    await waitFor(() => {
      expect(screen.getByText('Property 1')).toBeInTheDocument();
      expect(screen.getByText('City 1')).toBeInTheDocument();
      expect(screen.getByText('1000 PLN')).toBeInTheDocument();
    });
  });

  // Add more tests as needed to cover different scenarios and interactions
});
