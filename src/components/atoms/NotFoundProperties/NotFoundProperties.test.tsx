import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { NotFoundProperties } from './NotFoundProperties';
import { it, describe } from 'vitest';
describe('NotFoundProperties Component', () => {
    const message = "No properties found";

    it('renders the NotFoundProperties component with a message', () => {
        render(<NotFoundProperties message={message} />);
        const messageElement = screen.getByText(message);
        expect(messageElement).toBeInTheDocument();
    });

    it('is visible to the user with the correct message', () => {
        render(<NotFoundProperties message={message} />);
        const messageElement = screen.getByText(message);
        expect(messageElement).toBeVisible();
    });

    it('displays the message with correct styling', () => {
        render(<NotFoundProperties message={message} />);
        const messageElement = screen.getByText(message);
        expect(messageElement).toHaveStyle('textAlign: center');
    });

    it('uses the correct text from props', () => {
        render(<NotFoundProperties message={message} />);
        const messageElement = screen.getByText(message);
        expect(messageElement.textContent).toBe(message);
    });
 });
