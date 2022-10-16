import { NavLink } from 'react-router-dom'

interface NavLinkProps {
  to: string
  children?: React.ReactNode
}

export default function ({ to, children }: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) => `tab tab-lg ${isActive ? 'tab-active' : ''}`}
      to={to}>
      {children}
    </NavLink>
  )
}
