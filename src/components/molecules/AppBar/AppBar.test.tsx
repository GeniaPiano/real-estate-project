import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { AppBar } from './AppBar';
import { MemoryRouter } from 'react-router-dom';
import { it, describe, vi } from 'vitest';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual<never>('react-router-dom');
    return {
        // @ts-ignore
        ...actual,
        useNavigate: vi.fn(),
    };
});
describe('AppBar Component', () => {
    it('renders AppBar with logo and navigation links', () => {
        render(
            <MemoryRouter>
                <AppBar />
            </MemoryRouter>
        );

        screen.debug();
        expect(screen.getByText('Real Estate')).toBeInTheDocument();
    });
});
