import "@testing-library/jest-dom";
import { describe, it, expect, vi } from 'vitest';
import { render, screen} from '@testing-library/react';
import {Pagination} from "./Pagination.tsx";

const total = 50;
const perPage = 10;
const currentPage = 1;
const totalPages = Math.ceil(total / perPage);
describe('Pagination Component', () => {
    it('renders the correct number of page buttons based on total and perPage', () => {
        render(
            <Pagination
                total={total}
                perPage={perPage}
                currentPage={currentPage}
                onPageChange={vi.fn()}
            />
        );
        const pageButtons = screen.getAllByRole('button');
        expect(pageButtons.length).toBe(totalPages + 2);
    });
    it('disables the previous button on the first page', () => {
        render(
            <Pagination
                total={total}
                perPage={perPage}
                currentPage={1}
                onPageChange={vi.fn()}
            />
        );
       const previousButton = screen.getByTestId('Previous page');
       expect(previousButton).toBeDisabled();
    });

});
