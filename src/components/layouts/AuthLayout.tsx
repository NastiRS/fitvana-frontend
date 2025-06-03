import Link from 'next/link'
import { ReactNode } from 'react'
import Logo from '@/components/atoms/Logo'
import LogoText from '@/components/atoms/LogoText'

type AuthLayoutProps = {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background dark">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-10 py-3">
          <div className="flex items-center gap-4 text-foreground">
            <div className="size-4">
              <Logo />
            </div>
            <LogoText />
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-foreground text-sm font-medium leading-normal" href="/posts">
                Inicio
              </Link>
              <Link className="text-foreground text-sm font-medium leading-normal" href="/workouts">
                Entrenamientos
              </Link>
              <Link className="text-foreground text-sm font-medium leading-normal" href="/nutrition">
                Nutrición
              </Link>
              <Link className="text-foreground text-sm font-medium leading-normal" href="/community">
                Comunidad
              </Link>
              <Link className="text-foreground text-sm font-medium leading-normal" href="/shop">
                Tienda
              </Link>
            </div>
            <Link 
              href={title.includes('cuenta') ? '/login' : '/signup'}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">
                {title.includes('cuenta') ? 'Iniciar Sesión' : 'Crear Cuenta'}
              </span>
            </Link>
          </div>
        </header>
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5 flex-1">
            <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground text-sm font-normal leading-normal pb-3 pt-0 px-4 text-center">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 