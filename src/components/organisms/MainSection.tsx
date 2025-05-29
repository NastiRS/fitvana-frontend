import PostCard from "@/components/molecules/PostCard"
import { PostPreview } from "@/types/post.types"

// Posts de placeholder
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
  }
]

export default function MainSection() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Columna Principal (col-span-9) */}
        <section className="lg:col-span-9">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Últimos Posts
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {placeholderPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            
            {/* Placeholder para más posts */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 animate-pulse"
                >
                  <div className="h-32 bg-muted rounded mb-4"></div>
                  <div className="h-4 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3 mb-4"></div>
                  <div className="h-3 bg-muted rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Columna Secundaria (col-span-3) */}
        <aside className="lg:col-span-3">
          <div className="sticky top-24">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Contenido Destacado
            </h3>
            
            {/* Placeholder para anuncios */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-medium text-gymvana-accent mb-2">
                  🔥 Rutina del Mes
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Descubre nuestra rutina especialmente diseñada para este mes
                </p>
                <div className="h-24 bg-muted rounded mb-3"></div>
                <button className="w-full bg-gymvana-accent text-white px-4 py-2 rounded font-medium hover:bg-gymvana-accent/90 transition-colors">
                  Ver Rutina
                </button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-medium text-gymvana-accent mb-2">
                  📊 Calculadora IMC
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Calcula tu índice de masa corporal
                </p>
                <div className="h-16 bg-muted rounded mb-3"></div>
                <button className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded font-medium hover:bg-secondary/90 transition-colors">
                  Calcular
                </button>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-medium text-gymvana-accent mb-2">
                  💡 Tip del Día
                </h4>
                <p className="text-sm text-muted-foreground">
                  &ldquo;El descanso es tan importante como el entrenamiento. Asegúrate de dormir 7-8 horas diarias para una óptima recuperación.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
} 