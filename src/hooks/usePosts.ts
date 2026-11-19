import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { postRepository } from "@/repositories/postRepository";
import type { Locale } from "@/types/content";

const PAGE_SIZE = 3;

export function usePosts(filters: { query: string; category: string; tag: string; locale: Locale }) {
  return useInfiniteQuery({
    queryKey: ["posts", filters],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      const options = { ...filters, page: pageParam, pageSize: PAGE_SIZE };
      if (filters.query.trim()) return postRepository.searchPosts(filters.query, { ...options, category: filters.category || undefined, tag: filters.tag || undefined });
      if (filters.category || filters.tag) return postRepository.filterPosts({ category: filters.category || undefined, tag: filters.tag || undefined, locale: filters.locale }, { page: pageParam, pageSize: PAGE_SIZE });
      return postRepository.getPosts(options);
    },
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.page + 1 : undefined),
  });
}

export function useFeaturedPosts() {
  return useQuery({ queryKey: ["featured-posts"], queryFn: () => postRepository.getFeaturedPosts() });
}

export function usePost(slug: string) {
  return useQuery({ queryKey: ["post", slug], queryFn: () => postRepository.getPostBySlug(slug), enabled: Boolean(slug) });
}

export function useCategories() {
  return useQuery({ queryKey: ["post-categories"], queryFn: () => postRepository.getCategories() });
}

export function useRelatedPosts(slug: string, locale: Locale) {
  return useQuery({
    queryKey: ["related-posts", slug, locale],
    queryFn: async () => {
      const result = await postRepository.getPosts({ page: 1, pageSize: 8, locale });
      return result.items.filter((post) => post.slug !== slug).slice(0, 2);
    },
    enabled: Boolean(slug),
  });
}
