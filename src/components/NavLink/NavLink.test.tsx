import { renderWithRouter, screen } from '@tests/utils'
import { describe, it } from 'vitest'
import NavLink from './NavLink'

describe('NavLink comopnent', () => {
  it('should render successfully', () => {
    expect(() => renderWithRouter(<NavLink to="/" />)).not.toThrow()
  })

  it('should set appropriate classes', () => {
    renderWithRouter(<NavLink to="/" />)
    const link = screen.getByRole('link')
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('tab', 'tab-lg')
  })
})
