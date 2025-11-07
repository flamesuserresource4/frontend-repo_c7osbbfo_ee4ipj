import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, User, Wrench } from 'lucide-react'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-2 text-sm font-medium transition ${
        isActive ? 'text-emerald-500' : 'text-neutral-400 hover:text-white'
      }`
    }
  >
    {children}
  </NavLink>
)

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-neutral-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/20" />
          <span className="text-sm font-semibold tracking-tight text-white">InfiniStore</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/produtos">Produtos</NavItem>
          <NavItem to="/conta">Área do Cliente</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/produtos" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:brightness-110">
            <ShoppingBag className="h-4 w-4" /> Ver produtos
          </Link>
          <Link to="/conta" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
            <User className="h-4 w-4" /> Entrar
          </Link>
          <Link to="/admin" className="hidden items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 md:inline-flex">
            <Wrench className="h-4 w-4" /> Admin
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
