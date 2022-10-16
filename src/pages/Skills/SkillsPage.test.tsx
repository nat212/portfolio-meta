import { describe, it, expect } from 'vitest'
import { render } from '@tests/utils'
import SkillsPage from './SkillsPage'

describe('Skills Page', () => {
  it('should render', () => {
    expect(() => render(<SkillsPage />)).not.toThrow()
  })
})
