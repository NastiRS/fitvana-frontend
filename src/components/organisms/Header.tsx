"use client"

import { User } from "lucide-react"
import LogoText from "@/components/atoms/LogoText"
import NavLink from "@/components/atoms/NavLink"

const navigationItems = [
  { href: '/', label: 'Inicio' },
  { href: '/articulos', label: 'Artículos' },
  { href: '/rutinas', label: 'Rutinas' },
  { href: '/nutricion', label: 'Nutrición' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' }
]

export default function Header() {
  return (
    <header className="bg-gymvana-primary border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <LogoText size="lg" />
          </div>
          
          {/* Navegación */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <NavLink 
                key={item.href} 
                href={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          
          {/* Panel de Usuario */}
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full hover:bg-gymvana-accent/10 transition-colors"
              aria-label="Panel de usuario"
            >
              <User className="w-6 h-6 text-gymvana-secondary hover:text-gymvana-accent transition-colors" />
            </button>
          </div>
        </div>
        
        {/* Navegación móvil */}
        <nav className="md:hidden mt-4 flex flex-wrap gap-4">
          {navigationItems.map((item) => (
            <NavLink 
              key={item.href} 
              href={item.href}
              className="text-sm"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
} 