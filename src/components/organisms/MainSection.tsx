import PostCard from "@/components/molecules/PostCard"
import { PostPreview } from "@/types/post.types"

// Posts de placeholder con más ejemplos
const placeholderPosts: PostPreview[] = [
  {
    id: '1',
    title: 'Los mejores ejercicios para desarrollar fuerza funcional',
    excerpt: 'Descubre qué ejercicios te ayudarán a desarrollar fuerza que puedas aplicar en tu vida diaria, mejorando tu calidad de vida y rendimiento.',
    author: 'Carlos Fitness',
    publishedAt: '2024-01-15',
    category: 'ejercicio',
    slug: 'ejercicios-fuerza-funcional',
    readTime: 8,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '2',
    title: 'Nutrición pre y post entrenamiento: Guía completa',
    excerpt: 'Todo lo que necesitas saber sobre qué comer antes y después de entrenar para maximizar tus resultados y recuperación.',
    author: 'María Nutrición',
    publishedAt: '2024-01-12',
    category: 'nutricion',
    slug: 'nutricion-pre-post-entrenamiento',
    readTime: 12,
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '3',
    title: 'Rutina de cuerpo completo para principiantes',
    excerpt: 'Una rutina diseñada específicamente para quienes están comenzando su journey fitness. Simple, efectiva y progresiva.',
    author: 'Ana Training',
    publishedAt: '2024-01-10',
    category: 'rutinas',
    slug: 'rutina-cuerpo-completo-principiantes',
    readTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '4',
    title: 'Los beneficios del yoga para la flexibilidad y el equilibrio',
    excerpt: 'Mejora tu flexibilidad y equilibrio con estas posturas de yoga esenciales para cualquier nivel.',
    author: 'Laura Yoga',
    publishedAt: '2024-01-08',
    category: 'ejercicio',
    slug: 'beneficios-yoga-flexibilidad-equilibrio',
    readTime: 7,
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '5',
    title: 'Eligiendo la ropa deportiva adecuada',
    excerpt: 'Prendas y accesorios esenciales para optimizar tu rendimiento durante los entrenamientos.',
    author: 'David Style',
    publishedAt: '2024-01-05',
    category: 'lifestyle',
    slug: 'ropa-deportiva-adecuada',
    readTime: 5,
    imageUrl: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '6',
    title: 'Construyendo hábitos saludables duraderos',
    excerpt: 'Estrategias para crear y mantener rutinas saludables que perdurarán a lo largo del tiempo.',
    author: 'Isabel Hábitos',
    publishedAt: '2024-01-02',
    category: 'lifestyle',
    slug: 'habitos-saludables-duraderos',
    readTime: 9,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '7',
    title: 'Técnicas de relajación para mejorar el sueño',
    excerpt: 'Consejos para desconectar y mejorar la calidad de tu descanso nocturno.',
    author: 'Sara Wellness',
    publishedAt: '2023-12-28',
    category: 'lifestyle',
    slug: 'tecnicas-relajacion-mejorar-sueno',
    readTime: 6,
    imageUrl: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '8',
    title: 'La filosofía del fitness: Un enfoque holístico',
    excerpt: 'Comprende los aspectos mentales y emocionales del fitness para un bienestar integral.',
    author: 'Miguel Mente',
    publishedAt: '2023-12-25',
    category: 'lifestyle',
    slug: 'filosofia-fitness-enfoque-holistico',
    readTime: 11,
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  }
]

export default function MainSection() {
  // Dividir los posts para diferentes secciones
  const featuredPosts = placeholderPosts.slice(0, 3);
  const latestPosts = placeholderPosts.slice(3);

  return (
    <main className="container mx-auto px-4 md:px-40 py-8">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto">
        {/* Sección destacada */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gymvana-primary @[480px]:rounded-xl min-h-80"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${placeholderPosts[0].imageUrl}")`
              }}
            >
              <div className="flex p-4">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight">Mejora tu entrenamiento con Gymvana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de artículos destacados */}
        <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Artículos destacados</h2>
        
        <div className="space-y-0">
          {featuredPosts.map((post) => (
            <div key={post.id} className="p-4 @container">
              <PostCard post={post} variant="featured" />
            </div>
          ))}
        </div>

        {/* Sección de artículos recientes */}
        <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Artículos recientes</h2>
        
        <div className="space-y-0">
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} variant="horizontal" />
          ))}
        </div>
      </div>
    </main>
  )
} 