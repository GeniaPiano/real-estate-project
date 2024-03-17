import "@testing-library/jest-dom";
import {it, vi} from 'vitest';
import {MemoryRouter, useNavigate} from 'react-router-dom'
import {render, screen} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
// export {userEvent} from '@testing-library/user-event';

vi.mock('react-router-dom', async () => {
    const originalModule = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
    return {
        ...originalModule,
        useNavigate: vi.fn(),
    };
});
import {TitleHeader} from "./TitleHeader.tsx";

describe('TitlePage Component', () => {
    let navigateMock: ReturnType<typeof useNavigate>;
    beforeEach(() => {
        // @ts-ignore
        navigateMock = vi.fn();
        vi.mocked(useNavigate).mockImplementation(() => navigateMock);
    });

    it("renders title", () => {
        render(
            <MemoryRouter>
                <TitleHeader title='test'/>
            </MemoryRouter>
        )
        expect(screen.getByText("test")).toBeInTheDocument()
    })

    it('should display only the title when backToHomePage is false', () => {
        const title = 'Sample Title';
        render(
            <MemoryRouter>
                <TitleHeader title={title} backToHomePage={false}/>
            </MemoryRouter>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText('Back to list')).not.toBeInTheDocument();
    });

    it('should display the title and a back button when backToHomePage is true', async () => {
        const title = 'Sample Title';
        render(
            <MemoryRouter>
                <TitleHeader title={title} backToHomePage/>
            </MemoryRouter>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Back to list'})).toBeInTheDocument();

    });

    it('displays only the title when backToHomePage is false', () => {
        const title = 'Sample Title';
        render(
            <MemoryRouter>
                <TitleHeader title={title} backToHomePage={false}/>
            </MemoryRouter>
        );
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.queryByText('Back to list')).not.toBeInTheDocument();
    });

    it('displays the title and a back button when backToHomePage is true', () => {
        const title = 'Sample Title';
        render(
            <MemoryRouter>
                <TitleHeader title={title} backToHomePage/>
            </MemoryRouter>
        );

        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Back to list'})).toBeInTheDocument();
    });

    it('navigates to the home page when the back button is clicked', async () => {
        const navigate = useNavigate();
        const title = 'Sample Title';
        render(
            <MemoryRouter initialEntries={['/']}>
                <TitleHeader title={title} backToHomePage/>
            </MemoryRouter>
        );

        await userEvent.click(screen.getByRole('button', {name: 'Back to list'}));
        expect(navigate).toHaveBeenCalledWith('/');
    });

});





