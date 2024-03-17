import "@testing-library/jest-dom";
import { describe, it, expect, vi} from 'vitest';
import { render, screen} from '@testing-library/react';
import {FilterProperties} from "./FilterProperties.tsx";
import {usePropertiesStore} from "../../../stores/usePropertiesStore.ts";
vi.mock('../../../stores/usePropertiesStore', () => ({
    usePropertiesStore: vi.fn(),
}));

const mockSetFilter = vi.fn();
const mockResetFilters = vi.fn();
describe('Filter Properties component', () => {
    beforeEach(() => {

    // @ts-ignore
        usePropertiesStore.mockImplementation(() => ({
            properties: [
                { id: '1', city: 'Warszawa', type: 'Apartment', price: 500000 },
                { id: '2', city: 'Katowice', type: 'House', price: 780000 },
                { id: '3', city: 'Kraków', type: 'House', price: 350000 },
                { id: '4', city: 'Poznań', type: 'Studio', price: 850000 },
                { id: '5', city: 'Gdańsk', type: 'House', price: 150000 },
            ],
            setFilter: mockSetFilter,
            resetFilters: mockResetFilters,
        }));
    });

    it('renders the search input', () => {
        render(<FilterProperties />);
        expect(screen.getByText('Filter and sort')).toBeInTheDocument();
    });

});