import { cleanup, render } from '@testing-library/react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })

export const renderWithRouter = (ui: React.ReactElement, options = {}) => {
    const router = createBrowserRouter([
        { path: '/', element: ui },
    ])
    return customRender(<RouterProvider router={router} />, options)
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
