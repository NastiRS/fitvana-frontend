export type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: 'ejercicio' | 'nutricion' | 'rutinas' | 'lifestyle';
  tags: string[];
  imageUrl?: string;
  slug: string;
  readTime: number; // en minutos
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export type PostCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export type PostPreview = Pick<
  Post, 
  'id' | 'title' | 'excerpt' | 'author' | 'publishedAt' | 'category' | 'imageUrl' | 'slug' | 'readTime'
>

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
} 