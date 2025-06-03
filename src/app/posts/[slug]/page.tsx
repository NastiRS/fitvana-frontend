import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import MainLayout from '@/components/layouts/MainLayout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

type PostPageParams = {
  params: {
    slug: string
  }
}

// Datos de ejemplo para un artículo
const post = {
  title: 'Guía definitiva para montar un gimnasio en casa',
  author: 'Alex Turner',
  publishedAt: '2024-01-15',
  imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop&crop=center',
  content: [
    {
      type: 'paragraph',
      text: 'Crear un gimnasio en casa puede cambiar radicalmente tu rutina de fitness. Ofrece comodidad, flexibilidad y privacidad, permitiéndote entrenar según tu propio horario sin necesidad de una membresía de gimnasio. Esta guía te ayudará a crear un gimnasio en casa que se adapte a tus necesidades y presupuesto.'
    },
    {
      type: 'heading',
      text: 'Planificando tu espacio'
    },
    {
      type: 'paragraph',
      text: 'Antes de comprar cualquier equipo, evalúa el espacio disponible. Considera factores como tamaño, suelo, ventilación e iluminación. Un garaje, una habitación libre o incluso una esquina de tu sala de estar puede transformarse en un área funcional de entrenamiento. Asegúrate de que haya suficiente espacio para moverte y colocar el equipamiento.'
    },
    {
      type: 'heading',
      text: 'Equipamiento esencial'
    },
    {
      type: 'paragraph',
      text: 'Comienza con lo básico y añade gradualmente más equipamiento a medida que tu nivel de fitness progresa y tu presupuesto lo permite. Los elementos clave incluyen: mancuernas ajustables, bandas de resistencia, esterilla de yoga, pelota de estabilidad, cuerda para saltar, barra de dominadas, banco.'
    },
    {
      type: 'heading',
      text: 'Montando tu gimnasio'
    },
    {
      type: 'paragraph',
      text: 'Organiza tu equipamiento de manera lógica, asegurando un acceso fácil y seguro. Coloca los elementos más pesados en el suelo y los más ligeros en estanterías o soportes. Considera añadir espejos para monitorizar tu forma y carteles motivacionales para mantenerte inspirado. La iluminación y ventilación adecuadas son cruciales para un ambiente de entrenamiento cómodo.'
    },
    {
      type: 'heading',
      text: 'Mantenimiento y seguridad'
    },
    {
      type: 'paragraph',
      text: 'Limpia regularmente tu equipamiento y área de entrenamiento para prevenir la acumulación de sudor y bacterias. Inspecciona el equipamiento para detectar desgaste y reemplaza cualquier elemento dañado. Siempre calienta antes de comenzar tu entrenamiento y enfría después. Utiliza la forma correcta para evitar lesiones y consulta a un profesional de la salud antes de comenzar cualquier programa nuevo de fitness.'
    }
  ],
  comments: [
    {
      id: '1',
      author: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      publishedAt: '2024-01-13',
      content: '¡Gran artículo! He estado pensando en montar un gimnasio en casa, y esta guía es increíblemente útil. ¡Gracias por los consejos detallados!'
    },
    {
      id: '2',
      author: 'Mark Davis',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      publishedAt: '2024-01-08',
      content: 'Ya tengo un gimnasio en casa, pero encontré algunas ideas nuevas aquí. Especialmente los consejos sobre planificación del espacio y mantenimiento. ¡Bien hecho!'
    }
  ]
}

export default function PostPage({ params }: PostPageParams) {
  // En una aplicación real, aquí se obtendría el post según el slug
  // const { slug } = params;
  
  return (
    <MainLayout>
      <h2 className="text-foreground tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
        {post.title}
      </h2>
      <p className="text-muted-foreground text-sm font-normal leading-normal pb-3 pt-1 px-4">
        Por {post.author} | Publicado el {formatDate(post.publishedAt)}
      </p>
      
      <div className="flex w-full grow bg-background @container py-3">
        <div className="w-full gap-1 overflow-hidden bg-background @[480px]:gap-2 aspect-[3/2] flex relative">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Contenido del artículo */}
      {post.content.map((section, index) => {
        if (section.type === 'heading') {
          return (
            <h3 key={index} className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              {section.text}
            </h3>
          )
        } else {
          return (
            <p key={index} className="text-foreground text-base font-normal leading-normal pb-3 pt-1 px-4">
              {section.text}
            </p>
          )
        }
      })}
      
      {/* Sección de comentarios */}
      <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Comentarios
      </h2>
      
      {post.comments.map((comment) => (
        <div key={comment.id} className="flex w-full flex-row items-start justify-start gap-3 p-4">
          <Avatar className="size-10">
            <AvatarImage src={comment.avatar} alt={comment.author} />
            <AvatarFallback>{comment.author[0]}</AvatarFallback>
          </Avatar>
          <div className="flex h-full flex-1 flex-col items-start justify-start">
            <div className="flex w-full flex-row items-start justify-start gap-x-3">
              <p className="text-foreground text-sm font-bold leading-normal tracking-[0.015em]">
                {comment.author}
              </p>
              <p className="text-muted-foreground text-sm font-normal leading-normal">
                {formatDate(comment.publishedAt, true)}
              </p>
            </div>
            <p className="text-foreground text-sm font-normal leading-normal">
              {comment.content}
            </p>
          </div>
        </div>
      ))}
      
      {/* Formulario de comentarios */}
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <Textarea 
            placeholder="Añadir un comentario..." 
            className="min-h-36 resize-none"
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <Button className="rounded-full">
          Publicar comentario
        </Button>
      </div>
    </MainLayout>
  )
} 