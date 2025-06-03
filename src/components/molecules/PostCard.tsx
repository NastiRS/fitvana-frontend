import Image from "next/image"
import Link from "next/link"
import { Clock, User } from "lucide-react"
import { PostPreview } from "@/types/post.types"
import { cn } from "@/lib/utils"

type PostCardProps = {
  post: PostPreview;
  className?: string;
  variant?: 'default' | 'featured' | 'horizontal';
}

export default function PostCard({ post, className, variant = 'default' }: PostCardProps) {
  const categoryColors = {
    ejercicio: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    nutricion: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    rutinas: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    lifestyle: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
  }

  if (variant === 'featured') {
    return (
      <article className={cn(
        "group bg-card rounded-xl overflow-hidden flex flex-col",
        "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        className
      )}>
        <Link href={`/posts/${post.slug}`} className="flex flex-col md:flex-row w-full h-full">
          {post.imageUrl && (
            <div className="w-full md:w-1/2 relative aspect-video">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <div className="flex w-full md:w-1/2 min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 md:px-4">
            <span className="text-muted-foreground text-sm font-normal">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            
            <h3 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-gymvana-accent transition-colors">
              {post.title}
            </h3>
            
            <div className="flex items-end gap-3 justify-between">
              <p className="text-muted-foreground text-base font-normal">
                {post.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  if (variant === 'horizontal') {
    return (
      <article className={cn(
        "group p-4 rounded-xl",
        "hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}>
        <Link href={`/posts/${post.slug}`} className="flex items-stretch justify-between gap-4 rounded-xl">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <h3 className="text-foreground text-base font-bold leading-tight group-hover:text-gymvana-accent transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm font-normal">
              {post.excerpt}
            </p>
          </div>
          
          {post.imageUrl && (
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 relative">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}
        </Link>
      </article>
    )
  }

  return (
    <article className={cn(
      "group bg-card border border-border rounded-lg overflow-hidden",
      "hover:shadow-xl hover:-translate-y-1 hover:border-gymvana-accent/50 transition-all duration-300",
      className
    )}>
      <Link href={`/posts/${post.slug}`}>
        {post.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
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