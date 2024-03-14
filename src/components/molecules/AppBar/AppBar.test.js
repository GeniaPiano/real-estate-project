import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppBar from './AppBar'

const Wrapper = ({ children }) => <Router>{children}</Router>

describe('AppBar', () => {
  test('renders AppBar component', () => {
    render(<AppBar />, { wrapper: Wrapper })
    expect(screen.getByText('Real estate')).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

})