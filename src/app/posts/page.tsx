import Image from 'next/image'
import Link from 'next/link'
import MainLayout from '@/components/layouts/MainLayout'
import FeaturedPost from '@/components/molecules/FeaturedPost'
import HorizontalPost from '@/components/molecules/HorizontalPost'

// Datos de ejemplo
const featuredPosts = [
  {
    id: '1',
    title: 'Guía definitiva para el entrenamiento de fuerza',
    excerpt: 'Aprende los mejores ejercicios y técnicas para desarrollar fuerza y músculo de manera efectiva.',
    category: 'Fitness',
    slug: 'guia-entrenamiento-fuerza',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '2',
    title: 'Alimenta tu cuerpo: Un plan nutricional completo',
    excerpt: 'Descubre los nutrientes esenciales y estrategias dietéticas para una salud y rendimiento óptimos.',
    category: 'Nutrición',
    slug: 'plan-nutricional-completo',
    imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '3',
    title: 'Mindfulness y meditación para aliviar el estrés',
    excerpt: 'Explora técnicas de mindfulness para reducir el estrés y mejorar el bienestar mental.',
    category: 'Vida saludable',
    slug: 'mindfulness-meditacion-estres',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop&crop=center'
  }
]

const latestPosts = [
  {
    id: '4',
    title: 'Los beneficios del yoga para la flexibilidad y el equilibrio',
    excerpt: 'Mejora tu flexibilidad y equilibrio con estas posturas de yoga.',
    slug: 'beneficios-yoga-flexibilidad',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '5',
    title: 'Eligiendo la ropa deportiva adecuada',
    excerpt: 'Prendas y accesorios esenciales para tu entrenamiento.',
    slug: 'ropa-deportiva-adecuada',
    imageUrl: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '6',
    title: 'Construyendo hábitos saludables duraderos',
    excerpt: 'Estrategias para crear y mantener rutinas saludables.',
    slug: 'habitos-saludables-duraderos',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '7',
    title: 'Técnicas de relajación para mejorar el sueño',
    excerpt: 'Consejos para desconectar y mejorar tu calidad de sueño.',
    slug: 'tecnicas-relajacion-sueno',
    imageUrl: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?w=800&h=600&fit=crop&crop=center'
  },
  {
    id: '8',
    title: 'La filosofía del fitness: Un enfoque holístico',
    excerpt: 'Comprendiendo los aspectos mentales y emocionales del fitness.',
    slug: 'filosofia-fitness-enfoque-holistico',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center'
  }
]

export default function BlogPage() {
  return (
    <MainLayout>
      {/* Banner principal */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div
            className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-background @[480px]:rounded-xl min-h-80"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=900&fit=crop&crop=center')`
            }}
          >
            <div className="flex p-4">
              <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                Eleva tu experiencia fitness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de artículos destacados */}
      <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Artículos destacados
      </h2>
      
      <div className="space-y-0">
        {featuredPosts.map((post) => (
          <FeaturedPost 
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            category={post.category}
            slug={post.slug}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>

      {/* Sección de artículos recientes */}
      <h2 className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Artículos recientes
      </h2>
      
      <div className="space-y-0">
        {latestPosts.map((post) => (
          <HorizontalPost 
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            slug={post.slug}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </MainLayout>
  )
} 