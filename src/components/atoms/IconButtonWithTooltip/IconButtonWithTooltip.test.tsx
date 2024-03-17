import "@testing-library/jest-dom";
import {render, screen, fireEvent} from '@testing-library/react';
import InfoIcon from '@mui/icons-material/Info';
import {IconButtonWithTooltip} from "./IconButtonWithToolitp.tsx";
import {it, vi} from 'vitest';

describe('IconButtonWithTooltip Component', () => {
    const mockHandleClick = vi.fn()

    it('renders IconButtonWithTooltip with provided icon and tooltip', async() => {
        render(
            <IconButtonWithTooltip
                icon={<InfoIcon/>}
                title="Tooltip text"
                ariaLabel="info"
                handleClick={mockHandleClick}
            />
        );
        const iconButton = screen.getByTestId('InfoIcon');
        fireEvent.mouseOver(iconButton);
        const tooltip = await screen.findByText('Tooltip text');
        expect(tooltip).toBeInTheDocument();
    });

    it('calls handleClick when the IconButton is clicked', () => {
        render(
            <IconButtonWithTooltip
                icon={<InfoIcon/>}
                title="Tooltip text"
                ariaLabel="info"
                handleClick={mockHandleClick}
            />
        );
        const iconButton = screen.getByRole('button', {name: 'info'});
        fireEvent.click(iconButton);
        expect(mockHandleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when the disabled prop is true', () => {
        render(
            <IconButtonWithTooltip
                icon={<InfoIcon/>}
                title="Tooltip text"
                ariaLabel="info"
                disabled={true}
                handleClick={mockHandleClick}
            />
        );
        const iconButton = screen.getByRole('button', {name: 'info'});
        expect(iconButton).toBeDisabled();
    });

});
