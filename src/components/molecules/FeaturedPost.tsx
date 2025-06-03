import Image from 'next/image'
import Link from 'next/link'

type FeaturedPostProps = {
  title: string
  excerpt: string
  category: string
  slug: string
  imageUrl: string
}

export default function FeaturedPost({ title, excerpt, category, slug, imageUrl }: FeaturedPostProps) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl relative @xl:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4 @xl:w-1/2">
          <p className="text-muted-foreground text-sm font-normal leading-normal">{category}</p>
          <Link href={`/posts/${slug}`}>
            <p className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">
              {title}
            </p>
          </Link>
          <div className="flex items-end gap-3 justify-between">
            <p className="text-muted-foreground text-base font-normal leading-normal">{excerpt}</p>
          </div>
        </div>
      </div>
    </div>
  )
} 