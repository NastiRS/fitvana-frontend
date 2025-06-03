import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AccountPage() {
  return (
    <MainLayout>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h2 className="text-foreground tracking-light text-[32px] font-bold leading-tight min-w-72">
          Configuración de cuenta
        </h2>
      </div>
      
      <div className="pb-3">
        <Tabs defaultValue="profile" className="w-full">
          <div className="flex border-b border-border px-4 gap-8">
            <TabsList className="bg-transparent">
              <TabsTrigger 
                value="profile" 
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-b-transparent pb-[13px] pt-4 rounded-none border-b-[3px]"
              >
                Perfil
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-b-transparent pb-[13px] pt-4 rounded-none border-b-[3px]"
              >
                Configuración
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-b-transparent pb-[13px] pt-4 rounded-none border-b-[3px]"
              >
                Notificaciones
              </TabsTrigger>
              <TabsTrigger 
                value="billing" 
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=inactive]:text-muted-foreground data-[state=inactive]:border-b-transparent pb-[13px] pt-4 rounded-none border-b-[3px]"
              >
                Facturación
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="profile" className="pt-4">
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Información personal
            </h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-foreground text-base font-medium leading-normal pb-2">Nombre</p>
                <Input 
                  className="h-14" 
                  defaultValue="Sophia Carter"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-foreground text-base font-medium leading-normal pb-2">Email</p>
                <Input 
                  className="h-14" 
                  defaultValue="sophia.carter@example.com"
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-foreground text-base font-medium leading-normal pb-2">Teléfono</p>
                <Input 
                  className="h-14" 
                  defaultValue="+34 123 456 789"
                />
              </label>
            </div>
            
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Foto de perfil
            </h2>
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                <div className="flex gap-4">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 relative"
                  >
                    <Image 
                      src="https://randomuser.me/api/portraits/women/33.jpg"
                      alt="Foto de perfil"
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em]">Sophia Carter</p>
                    <p className="text-muted-foreground text-base font-normal leading-normal">Entusiasta del fitness</p>
                  </div>
                </div>
                <Button 
                  variant="secondary"
                  className="w-full max-w-[480px] @[480px]:w-auto h-10"
                >
                  Subir nueva foto
                </Button>
              </div>
            </div>
            
            <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Biografía
            </h2>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-foreground text-base font-medium leading-normal pb-2">Biografía</p>
                <Textarea 
                  className="min-h-36 resize-none" 
                  defaultValue="Apasionada del fitness y la vida saludable. Entreno regularmente y me encanta compartir mis experiencias con la comunidad. Siempre buscando nuevos retos y formas de mejorar."
                />
              </label>
            </div>
            
            <div className="flex px-4 py-3 justify-end">
              <Button className="rounded-full">
                Guardar cambios
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="p-4">
              <p className="text-muted-foreground">
                Contenido de configuración
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <div className="p-4">
              <p className="text-muted-foreground">
                Contenido de notificaciones
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="billing">
            <div className="p-4">
              <p className="text-muted-foreground">
                Contenido de facturación
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
} 