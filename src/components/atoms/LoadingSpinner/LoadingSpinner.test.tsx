import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';
import { messages } from './messages';
import { it } from 'vitest';
describe('LoadingSpinner Component', () => {
    it('renders a loading spinner and displays the loading message', () => {
        render(<LoadingSpinner />);
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument();
        const loadingMessage = screen.getByText(messages.loading);
        expect(loadingMessage).toBeInTheDocument();
    });

    it('is visible to the user', () => {
        render(<LoadingSpinner />);
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeVisible();
    })
});
