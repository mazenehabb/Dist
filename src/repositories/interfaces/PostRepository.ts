import type {
  Category,
  PaginatedResult,
  PaginationOptions,
  Post,
  PostFilters,
} from "@/types/content";

export interface PostRepository {
  getPosts(options?: PaginationOptions): Promise<PaginatedResult<Post>>;
  getPostBySlug(slug: string): Promise<Post | null>;
  getFeaturedPosts(): Promise<Post[]>;
  getCategories(): Promise<Category[]>;
  searchPosts(query: string, options?: Omit<PaginationOptions, "query">): Promise<PaginatedResult<Post>>;
  filterPosts(filters: PostFilters, options?: Omit<PaginationOptions, "category" | "query">): Promise<PaginatedResult<Post>>;
}
