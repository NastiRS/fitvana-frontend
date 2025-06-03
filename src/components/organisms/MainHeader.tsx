import Link from 'next/link'
import Image from 'next/image'
import { Search, User, ShoppingCart } from 'lucide-react'
import Logo from '@/components/atoms/Logo'
import LogoText from '@/components/atoms/LogoText'

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-4 md:px-10 py-3">
      <div className="flex items-center gap-4 text-foreground">
        <div className="size-4">
          <Logo />
        </div>
        <LogoText />
      </div>
      <div className="flex flex-1 justify-end gap-4 md:gap-8">
        <div className="hidden md:flex items-center gap-4 md:gap-9">
          <Link className="text-foreground text-sm font-medium leading-normal" href="/posts">
            Inicio
          </Link>
          <Link className="text-foreground text-sm font-medium leading-normal" href="/share-story">
            Compartir
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
        </div>
        <div className="flex gap-2">
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-secondary text-secondary-foreground gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-secondary text-secondary-foreground gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            aria-label="Mi cuenta"
          >
            <User size={20} />
          </button>
        </div>
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 hidden md:block"
          style={{
            backgroundImage: `url('https://randomuser.me/api/portraits/women/33.jpg')`
          }}
        ></div>
      </div>
    </header>
  )
} 