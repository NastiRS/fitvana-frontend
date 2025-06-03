import MainLayout from '@/components/layouts/MainLayout'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ShareStoryPage() {
  return (
    <MainLayout>
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h2 className="text-foreground tracking-light text-[32px] font-bold leading-tight min-w-72">
          Comparte tu historia
        </h2>
      </div>
      
      <div className="flex max-w-[600px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-foreground text-base font-medium leading-normal pb-2">Título</p>
          <Input 
            placeholder="Escribe el título de tu historia"
            className="h-14 placeholder:text-muted-foreground" 
          />
        </label>
      </div>
      
      <div className="flex max-w-[600px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-foreground text-base font-medium leading-normal pb-2">Tu historia</p>
          <Textarea 
            placeholder="Escribe tu historia aquí..."
            className="min-h-36 resize-none placeholder:text-muted-foreground" 
          />
        </label>
      </div>
      
      <div className="flex max-w-[600px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-foreground text-base font-medium leading-normal pb-2">Categoría</p>
          <Select>
            <SelectTrigger className="h-14">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fitness">Fitness</SelectItem>
              <SelectItem value="nutrition">Nutrición</SelectItem>
              <SelectItem value="mindfulness">Mindfulness</SelectItem>
              <SelectItem value="weightloss">Pérdida de peso</SelectItem>
              <SelectItem value="strength">Entrenamiento de fuerza</SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      
      <div className="flex max-w-[600px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-foreground text-base font-medium leading-normal pb-2">Etiquetas</p>
          <Select>
            <SelectTrigger className="h-14">
              <SelectValue placeholder="Selecciona etiquetas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="motivation">Motivación</SelectItem>
              <SelectItem value="transformation">Transformación</SelectItem>
              <SelectItem value="tips">Consejos</SelectItem>
              <SelectItem value="challenge">Desafío</SelectItem>
              <SelectItem value="success">Éxito</SelectItem>
            </SelectContent>
          </Select>
        </label>
      </div>
      
      <div className="flex px-4 py-3 justify-end max-w-[600px]">
        <Button className="rounded-xl">
          Enviar historia
        </Button>
      </div>
    </MainLayout>
  )
} 