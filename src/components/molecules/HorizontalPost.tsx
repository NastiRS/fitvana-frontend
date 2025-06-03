import Image from 'next/image'
import Link from 'next/link'

type HorizontalPostProps = {
  title: string
  excerpt: string
  slug: string
  imageUrl: string
}

export default function HorizontalPost({ title, excerpt, slug, imageUrl }: HorizontalPostProps) {
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <Link href={`/posts/${slug}`}>
            <p className="text-foreground text-base font-bold leading-tight hover:text-primary transition-colors">
              {title}
            </p>
          </Link>
          <p className="text-muted-foreground text-sm font-normal leading-normal">
            {excerpt}
          </p>
        </div>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
} 