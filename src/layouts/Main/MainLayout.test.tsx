import { renderWithRouter, screen } from '@tests/utils'
import { describe, expect, it } from 'vitest'
import MainLayout from './MainLayout'

describe('Main Layout', () => {
  it('should render succesfully', () => {
    expect(() => renderWithRouter(<MainLayout />)).not.toThrow()
  })

  it('should render the navbar', () => {
    renderWithRouter(<MainLayout />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render all appropriate links', () => {
    renderWithRouter(<MainLayout />)
    const links = ['About', 'Experience', 'Portfolio', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })
})
