import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { CountriesDropdown } from './CountriesDropdown.tsx'

vi.mock('../../../hooks/useCountries/useCountries', () => ({
    useCountries: () => ({
        countries: [
            { countryName: 'United States' },
            { countryName: 'Canada' },
            { countryName: 'Mexico' },
            { countryName: 'Cyprus' }
        ],
        loading: false,
        error: null
    })
}))

describe('CountriesDropdown Component', () => {
    it('renders without crashing', () => {
        render(<CountriesDropdown />)
        expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('displays icon ArrowDropDownIcon ', () => {
        render(<CountriesDropdown />)
        expect(screen.getByTestId('ArrowDropDownIcon')).toBeInTheDocument()
    })

    it('displays all country options when not loading or in error state', async () => {
        render(<CountriesDropdown />)
        const combobox = screen.getByRole('combobox')
        await userEvent.click(combobox)
        expect(await screen.findByText('Canada')).toBeInTheDocument()
        expect(await screen.findByText('Cyprus')).toBeInTheDocument()
        expect(await screen.findByText('Mexico')).toBeInTheDocument()
        expect(await screen.findByText('United States')).toBeInTheDocument()
    })

    it('should handle selection of a country', async () => {
        render(<CountriesDropdown />)
        await userEvent.click(screen.getByRole('combobox')) // Open the dropdown
        await userEvent.click(screen.getByText('Canada'))
        expect(screen.getByRole('combobox')).toHaveTextContent('Canada')
    })
})
