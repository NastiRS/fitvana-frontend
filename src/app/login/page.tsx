import Link from 'next/link'
import AuthLayout from '@/components/layouts/AuthLayout'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
  return (
    <AuthLayout title="Iniciar sesión en Gymvana">
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 mx-auto">
        <label className="flex flex-col min-w-40 flex-1">
          <Input 
            placeholder="Usuario" 
            className="h-14 placeholder:text-muted-foreground" 
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 mx-auto">
        <label className="flex flex-col min-w-40 flex-1">
          <Input 
            type="password"
            placeholder="Contraseña" 
            className="h-14 placeholder:text-muted-foreground" 
          />
        </label>
      </div>
      <p className="text-muted-foreground text-sm font-normal leading-normal pb-3 pt-1 px-4 mx-auto max-w-[480px]">
        <Link href="/forgot-password" className="hover:underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </p>
      <div className="flex px-4 py-3 mx-auto max-w-[480px]">
        <Button className="flex-1 h-12 rounded-full">
          Iniciar sesión
        </Button>
      </div>
      <p className="text-muted-foreground text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
        ¿No tienes una cuenta? <Link href="/signup" className="hover:underline">Crear cuenta</Link>
      </p>
    </AuthLayout>
  )
} 