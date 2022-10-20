import NavLink from '@components/NavLink/NavLink'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <>
      <header className="p-4">
        <nav className="tabs justify-center">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="flex flex-col items-stretch justify-start mt-10 mx-4 md:w-1/2 md:mx-auto gap-8">
        <Outlet />
      </main>
    </>
  )
}
