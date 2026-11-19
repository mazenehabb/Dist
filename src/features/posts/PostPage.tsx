import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock3, Share2 } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PageMotion } from "@/components/animations/PageMotion";
import { ArticleBody } from "@/components/shared/ArticleBody";
import { LoadError } from "@/components/shared/LoadError";
import { PostCard } from "@/components/shared/PostCard";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/useLocale";
import { usePost, useRelatedPosts } from "@/hooks/usePosts";
import { usePageMetadata } from "@/components/shared/Metadata";

function ArticleSkeleton() {
  const { t } = useLocale();
  return <div aria-label={t("loadingArticle")} className="article-loading" role="status"><span /><i /><i /><i /></div>;
}

export function PostPage() {
  const { slug = "" } = useParams();
  const { locale, t } = useLocale();
  const postQuery = usePost(slug);
  const post = postQuery.data;
  const relatedQuery = useRelatedPosts(slug, locale);
  const [shared, setShared] = useState(false);
  const title = post?.seo[locale].title ?? `DIST | ${t("insights.eyebrow")}`;
  const description = post?.seo[locale].description ?? t("insights.intro");
  usePageMetadata(title, description, post?.coverImage.src);

  const share = async () => {
    if (!post) return;
    const shareData = { title: post.title[locale], text: post.excerpt[locale], url: window.location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* A cancelled native share is not an error state. */ }
      return;
    }
    try {
      await navigator.clipboard.writeText(shareData.url);
      setShared(true);
      window.setTimeout(() => setShared(false), 2400);
    } catch {
      window.prompt(post.title[locale], shareData.url);
    }
  };

  if (postQuery.isPending) return <PageMotion><ArticleSkeleton /></PageMotion>;
  if (postQuery.isError) return <PageMotion><div className="article-status"><LoadError action={t("common.retry")} onRetry={() => void postQuery.refetch()} title={t("common.error")} /></div></PageMotion>;
  if (!post) return <PageMotion><div className="article-status"><span className="eyebrow eyebrow--gold">404</span><h1>{t("notFound.title")}</h1><p>{t("notFound.copy")}</p><Button asChild><Link to="/insights">{t("article.back")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={17} /></Link></Button></div></PageMotion>;

  const formattedDate = post.publishedAt ? new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(new Date(post.publishedAt)) : t("article.noDate");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.seo[locale].description,
    image: new URL(post.coverImage.src, window.location.origin).href,
    author: { "@type": "Organization", name: "DIST" },
    publisher: { "@type": "Organization", name: "DIST" },
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
  };

  return (
    <PageMotion>
      <article className="article-page">
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <header className="article-header mx-auto w-full max-w-7xl px-6">
          <div className="article-header__top"><Link className="back-link" to="/insights"><ArrowLeft aria-hidden="true" className="directional-icon" size={16} />{t("article.back")}</Link><span className="mono">{post.id.toUpperCase()} / DIST JOURNAL</span></div>
          <div className="article-header__main">
            <div className="article-header__category"><span className="eyebrow eyebrow--gold">{post.category.label[locale]}</span><i />{post.tags[locale].map((tag) => <span className="article-tag" key={tag}>{tag}</span>)}</div>
            <h1 data-reveal>{post.title[locale]}</h1>
            <p className="article-header__excerpt" data-reveal>{post.excerpt[locale]}</p>
            <div className="article-meta" data-reveal><span><span className="article-meta__author">D</span><span>{t("article.by")} <strong>{post.author[locale]}</strong></span></span><span><CalendarDays aria-hidden="true" size={15} />{formattedDate}</span><span><Clock3 aria-hidden="true" size={15} />{t("article.reading", { count: post.readingMinutes[locale] })}</span><Button onClick={() => void share()} size="small" variant="ghost">{shared ? <Check aria-hidden="true" size={15} /> : <Share2 aria-hidden="true" size={15} />}{shared ? t("article.copied") : t("article.share")}</Button></div>
            {locale !== post.sourceLocale && <p className="translation-note">{t("article.translationNote")}</p>}
          </div>
          <figure className="article-cover" data-reveal><img alt={post.coverImage.alt[locale]} data-image-reveal fetchPriority="high" src={post.coverImage.src} /><figcaption><span>{post.category.label[locale]}</span><span>{post.id.toUpperCase()}</span></figcaption></figure>
        </header>

        <div className="article-main mx-auto grid w-full max-w-7xl grid-cols-1 px-6 lg:grid-cols-[.45fr_1.1fr_.45fr]">
          <aside className="article-aside"><span className="eyebrow eyebrow--gold">DIST / JOURNAL</span><span className="article-aside__line" /><span>{t("article.reading", { count: post.readingMinutes[locale] })}</span></aside>
          <div className="article-content"><ArticleBody blocks={post.content[locale]} locale={locale} /><div className="article-content__author"><span>D</span><p><strong>{post.author[locale]}</strong><small>{t("footerTagline")}</small></p></div></div>
          <div className="article-share-rail"><Button onClick={() => void share()} size="icon" variant="secondary" aria-label={t("article.share")}><Share2 aria-hidden="true" size={17} /></Button><span>{t("article.share")}</span></div>
        </div>

        {post.images.length > 1 && <section className="article-gallery mx-auto w-full max-w-7xl px-6"><div className="article-gallery__heading"><span className="eyebrow eyebrow--gold">{locale === "ar" ? "من المشروع" : "From the project"}</span><span className="mono">{String(post.images.length - 1).padStart(2, "0")} / IMAGES</span></div><div className="article-gallery__grid" data-reveal-group>{post.images.slice(1).map((image) => <figure key={image.src}><img alt={image.alt[locale]} loading="lazy" src={image.src} /><figcaption>{image.alt[locale]}</figcaption></figure>)}</div></section>}

        {relatedQuery.data && relatedQuery.data.length > 0 && <section className="related-section section-pad"><div className="section-shell mx-auto w-full max-w-7xl px-6"><div className="split-heading"><div><span className="eyebrow eyebrow--gold">{t("article.related")}</span><h2>{t("article.relatedCopy")}</h2></div><Link className="text-link" to="/insights">{t("viewAll")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={16} /></Link></div><div className="post-grid" data-reveal-group>{relatedQuery.data.map((item, index) => <PostCard index={index} key={item.id} post={item} />)}</div></div></section>}
      </article>
    </PageMotion>
  );
}
