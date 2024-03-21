import {Property} from "../types/Property.ts";


export interface Filters {
    cities: string[];
    types: string[];
    priceRange: [number, number];
}

export interface PropertiesState {
    properties: Property[];
    currentProperty: Property | null;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    isLoading: boolean;
    error: string | null;
    filters: Filters;
    filteredProperties: Property[];
    fetchProperties: () => Promise<void>;
    fetchPropertyById: (id: string) => Promise<void>;
    resetFilters: () => void;
    setFilter: (filter: Partial<Filters>) => void;
}
