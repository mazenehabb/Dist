import type {
  Category,
  PaginatedResult,
  PaginationOptions,
  Post,
  PostFilters,
} from "@/types/content";
import type { PostRepository } from "@/repositories/interfaces/PostRepository";
import { categories, posts } from "./mockData";

function paginate<T>(items: T[], page = 1, pageSize = 6): PaginatedResult<T> {
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * pageSize;
  return {
    items: items.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total: items.length,
    hasMore: start + pageSize < items.length,
  };
}

function selectPosts(filters: PostFilters = {}): Post[] {
  const locale = filters.locale ?? "en";
  const query = filters.query?.trim().toLocaleLowerCase(locale);
  return posts.filter((post) => {
    if (post.status !== "published") return false;
    if (filters.category && post.category.slug !== filters.category) return false;
    if (filters.tag && !post.tags[locale].some((tag) => tag.toLocaleLowerCase(locale) === filters.tag?.toLocaleLowerCase(locale))) return false;
    if (!query) return true;
    const haystack = [
      post.title[locale],
      post.excerpt[locale],
      post.category.label[locale],
      ...post.tags[locale],
    ].join(" ").toLocaleLowerCase(locale);
    return haystack.includes(query);
  });
}

export class MockPostRepository implements PostRepository {
  async getPosts(options: PaginationOptions = {}) {
    return paginate(selectPosts(options), options.page, options.pageSize);
  }

  async getPostBySlug(slug: string) {
    return posts.find((post) => post.slug === slug && post.status === "published") ?? null;
  }

  async getFeaturedPosts() {
    return posts.filter((post) => post.featured && post.status === "published");
  }

  async getCategories(): Promise<Category[]> {
    return categories;
  }

  async searchPosts(query: string, options: Omit<PaginationOptions, "query"> = {}) {
    return paginate(selectPosts({ ...options, query }), options.page, options.pageSize);
  }

  async filterPosts(filters: PostFilters, options: Omit<PaginationOptions, "category" | "query"> = {}) {
    return paginate(selectPosts({ ...filters, ...options }), options.page, options.pageSize);
  }
}
