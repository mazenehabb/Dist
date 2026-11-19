import { api } from "@/lib/api";
import type {
  Category,
  PaginatedResult,
  PaginationOptions,
  Post,
  PostFilters,
} from "@/types/content";
import type { PostRepository } from "@/repositories/interfaces/PostRepository";

export class ApiPostRepository implements PostRepository {
  async getPosts(options: PaginationOptions = {}) {
    const { data } = await api.get<PaginatedResult<Post>>("/posts", { params: options });
    return data;
  }

  async getPostBySlug(slug: string) {
    const { data } = await api.get<Post | null>(`/posts/${encodeURIComponent(slug)}`);
    return data;
  }

  async getFeaturedPosts() {
    const { data } = await api.get<Post[]>("/posts/featured");
    return data;
  }

  async getCategories() {
    const { data } = await api.get<Category[]>("/posts/categories");
    return data;
  }

  async searchPosts(query: string, options: Omit<PaginationOptions, "query"> = {}) {
    const { data } = await api.get<PaginatedResult<Post>>("/posts/search", {
      params: { ...options, query },
    });
    return data;
  }

  async filterPosts(filters: PostFilters, options: Omit<PaginationOptions, "category" | "query"> = {}) {
    const { data } = await api.get<PaginatedResult<Post>>("/posts", {
      params: { ...filters, ...options },
    });
    return data;
  }
}
