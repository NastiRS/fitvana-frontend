import { Post, PostPreview } from "@/types/post.types"

const API_BASE_URL = "https://680518c5ca467c15be683cd3.mockapi.io/api/blog"

export async function fetchPosts(): Promise<PostPreview[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.status}`)
    }
    
    const posts: Post[] = await response.json()
    const post = posts.find(p => p.slug === slug)
    
    return post || null
  } catch (error) {
    console.error("Error fetching post by slug:", error)
    return null
  }
}

export async function fetchPostsByCategory(category: string): Promise<PostPreview[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`)
    
    if (!response.ok) {
      throw new Error(`Error fetching posts by category: ${response.status}`)
    }
    
    const posts: Post[] = await response.json()
    const filteredPosts = posts.filter(p => p.category === category && p.isPublished)
    
    return filteredPosts.map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      author: post.author,
      publishedAt: post.publishedAt,
      category: post.category,
      imageUrl: post.imageUrl,
      slug: post.slug,
      readTime: post.readTime
    }))
  } catch (error) {
    console.error("Error fetching posts by category:", error)
    return []
  }
} 