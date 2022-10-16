import { Outlet } from 'react-router'
import NavLink from '@components/NavLink/NavLink'

export default function MainLayout() {
  return (
    <>
      <header>
        <nav className="tabs justify-center">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
