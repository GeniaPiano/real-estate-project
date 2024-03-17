import "@testing-library/jest-dom";
import { it, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe('App Component', () => {
    it('renders HomePage component for root route', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
    it('renders AccountPage component for /account route', () => {
        render(
            <MemoryRouter initialEntries={['/account']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('account-page')).toBeInTheDocument();
    });

    it('renders PostAddPage component for /post-ad route', () => {
        render(
            <MemoryRouter initialEntries={['/post-ad']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByTestId('post-add-page')).toBeInTheDocument();
    });
});
