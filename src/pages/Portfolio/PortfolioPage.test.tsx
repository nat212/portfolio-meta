import { render } from '@tests/utils'
import { expect, it, describe } from 'vitest'
import PortfolioPage from './PortfolioPage'

describe('Portfolio Page', () => {
  it('should render', () => {
    expect(() => render(<PortfolioPage />)).not.toThrow()
  })
})
