import type { Post } from "@/types/content";
import { PostCard } from "@/components/shared/PostCard";
import { useLocale } from "@/hooks/useLocale";

export function PostGrid({ posts, onTagSelect }: { posts: Post[]; onTagSelect?: (tag: string) => void }) {
  return (
    <div className="post-grid" data-reveal-group>
      {posts.map((post, index) => <PostCard key={post.id} index={index} onTagSelect={onTagSelect} post={post} featured={post.featured} />)}
    </div>
  );
}

export function PostGridSkeleton({ count = 3 }: { count?: number }) {
  const { t } = useLocale();
  return (
    <div aria-label={t("loadingStories")} className="post-grid" role="status">
      {Array.from({ length: count }, (_, index) => <div className="post-skeleton" key={index}><span /><i /><b /><em /></div>)}
    </div>
  );
}
