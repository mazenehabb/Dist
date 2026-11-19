import { useQuery } from "@tanstack/react-query";
import { postRepository } from "@/repositories/postRepository";
import type { Locale } from "@/types/content";

export function useAllPostTags(locale: Locale) {
  return useQuery({
    queryKey: ["post-tags", locale],
    queryFn: async () => {
      const page = await postRepository.getPosts({ page: 1, pageSize: 100, locale });
      return [...new Set(page.items.flatMap((post) => post.tags[locale]))];
    },
  });
}
