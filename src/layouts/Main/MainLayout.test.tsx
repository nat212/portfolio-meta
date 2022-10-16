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
})
