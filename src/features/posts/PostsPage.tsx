import { ArrowDownWideNarrow, LoaderCircle, Search, SlidersHorizontal, X } from "lucide-react";
import { useDeferredValue, useState } from "react";
import { PageMotion } from "@/components/animations/PageMotion";
import { LoadError } from "@/components/shared/LoadError";
import { PostGrid, PostGridSkeleton } from "@/components/shared/PostGrid";
import { Button } from "@/components/ui/button";
import { useAllPostTags } from "@/hooks/useAllPostTags";
import { useCategories, usePosts } from "@/hooks/usePosts";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";

export function PostsPage() {
  const { locale, t } = useLocale();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const deferredSearch = useDeferredValue(search);
  const postsQuery = usePosts({ query: deferredSearch, category, tag, locale });
  const categoriesQuery = useCategories();
  const tagsQuery = useAllPostTags(locale);
  const posts = postsQuery.data?.pages.flatMap((page) => page.items) ?? [];
  const total = postsQuery.data?.pages[0]?.total ?? 0;
  usePageMetadata(t("insights.pageTitle"), t("insights.intro"));

  const clearFilters = () => { setSearch(""); setCategory(""); setTag(""); };

  return (
    <PageMotion>
      <div className="insights-page">
        <section className="page-hero page-hero--paper mx-auto w-full max-w-7xl px-6">
          <div className="page-hero__meta"><span className="eyebrow eyebrow--gold">{t("insights.eyebrow")}</span><span className="mono">DIST / 03</span></div>
          <h1 data-reveal>{t("insights.title")}</h1>
          <p className="page-hero__intro" data-reveal>{t("insights.intro")}</p>
          <div className="insights-hero__annotation"><span className="insights-hero__annotation-dot" /><span>{locale === "ar" ? "مشروعات · أنظمة · ثقافة" : "Projects · Systems · Culture"}</span></div>
        </section>

        <section className="insights-browser section-pad">
          <div className="section-shell mx-auto w-full max-w-7xl px-6">
            <div className="insights-toolbar" data-reveal>
              <label className="search-field"><Search aria-hidden="true" size={18} /><span className="sr-only">{t("insights.searchLabel")}</span><input aria-label={t("insights.searchLabel")} onChange={(event) => setSearch(event.target.value)} placeholder={t("insights.searchPlaceholder")} type="search" value={search} /><span className="search-field__slash">/</span></label>
              <div className="insights-toolbar__count"><SlidersHorizontal aria-hidden="true" size={15} /><span>{t("insights.resultCount", { count: total })}</span></div>
            </div>

            <div className="filter-group" data-reveal>
              <span className="filter-group__label">{t("insights.filtersLabel")}</span>
              <div aria-label={t("insights.filtersLabel")} className="filter-chips" role="group">
                <button aria-pressed={category === ""} className={!category ? "filter-chip filter-chip--active" : "filter-chip"} onClick={() => setCategory("")} type="button">{t("insights.allTopics")}</button>
                {categoriesQuery.data?.map((item) => <button aria-pressed={category === item.slug} className={category === item.slug ? "filter-chip filter-chip--active" : "filter-chip"} key={item.slug} onClick={() => setCategory(category === item.slug ? "" : item.slug)} type="button">{item.label[locale]}</button>)}
              </div>
            </div>

            {tagsQuery.data && tagsQuery.data.length > 0 && <div className="filter-group filter-group--tags" data-reveal><span className="filter-group__label">{locale === "ar" ? "الوسوم" : "Tags"}</span><div aria-label={locale === "ar" ? "تصفية حسب الوسم" : "Filter by tag"} className="filter-chips" role="group">{tagsQuery.data.map((item) => <button aria-pressed={tag === item} className={tag === item ? "filter-chip filter-chip--tag filter-chip--active" : "filter-chip filter-chip--tag"} key={item} onClick={() => setTag(tag === item ? "" : item)} type="button">{item}</button>)}</div></div>}

            {(search || category || tag) && <button className="clear-filter" onClick={clearFilters} type="button"><X aria-hidden="true" size={14} />{t("insights.clearFilters")}</button>}

            {postsQuery.isError ? <LoadError action={t("insights.retry")} onRetry={() => void postsQuery.refetch()} title={t("insights.errorTitle")} /> : postsQuery.isPending ? <PostGridSkeleton /> : posts.length > 0 ? <>
              <PostGrid onTagSelect={setTag} posts={posts} />
              {postsQuery.hasNextPage && <div className="load-more-wrap"><Button disabled={postsQuery.isFetchingNextPage} onClick={() => void postsQuery.fetchNextPage()} variant="secondary">{postsQuery.isFetchingNextPage ? <LoaderCircle aria-hidden="true" className="spin" size={16} /> : <ArrowDownWideNarrow aria-hidden="true" size={16} />}{t("insights.loadMore")}</Button></div>}
            </> : <div className="empty-state"><span>00 / {locale === "ar" ? "لا نتائج" : "NO RESULTS"}</span><h2>{t("insights.emptyTitle")}</h2><p>{t("insights.emptyCopy")}</p><Button onClick={clearFilters} variant="ghost">{t("insights.clearFilters")}</Button></div>}
          </div>
        </section>
      </div>
    </PageMotion>
  );
}
