import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"
import { PostPreview } from "@/types/post.types"
import { cn } from "@/lib/utils"

type PostCardProps = {
  post: PostPreview;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  const categoryColors = {
    ejercicio: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    nutricion: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    rutinas: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    lifestyle: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  }

  return (
    <article className={cn(
      "group bg-card border border-border rounded-lg overflow-hidden",
      "hover:shadow-lg transition-all duration-300 hover:border-gymvana-accent/50",
      className
    )}>
      <Link href={`/posts/${post.slug}`}>
        {post.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-full",
              categoryColors[post.category]
            )}>
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            
            <div className="flex items-center text-muted-foreground text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {post.readTime} min
            </div>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-gymvana-accent transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {post.author}
            </div>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
} 