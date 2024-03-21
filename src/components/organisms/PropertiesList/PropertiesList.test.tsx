import "@testing-library/jest-dom";
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import { usePropertiesStore } from "../../../stores/usePropertiesStore";
import {PropertiesList} from "./ProperstiesList.tsx";

const mockProperties = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Property ${index + 1}`,
    city: `City ${index + 1}`,
    price: 100000 + (index * 1000), // Increment price for variety
    images: [`url${index + 1}`],
    description: `Description ${index + 1}`,
    type: `Type ${index + 1}`,
}));
vi.mock("../../../stores/usePropertiesStore", () => ({
    usePropertiesStore: vi.fn(() => ({
        properties: mockProperties,
        fetchProperties: vi.fn(),
        isLoading: false,
        error: null,
        filteredProperties: mockProperties,
    })),
}));

describe('PropertiesList Component', () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

   it("displays a loading indicator when properties are being fetched", () => {
        // @ts-ignore
        usePropertiesStore.mockReturnValue({
            properties: [],
            fetchProperties: vi.fn(),
            isLoading: true,
            filteredProperties: [],
        });

        render(
            <MemoryRouter>
                <PropertiesList />
            </MemoryRouter>
        );
        expect(screen.getByText("loading...")).toBeInTheDocument();
       });
    });
