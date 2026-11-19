import { ArrowDownLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import type { Post } from "@/types/content";
import { useLocale } from "@/hooks/useLocale";

export function PostCard({ post, featured = false, index = 0, onTagSelect }: { post: Post; featured?: boolean; index?: number; onTagSelect?: (tag: string) => void }) {
  const { locale, t } = useLocale();
  const Arrow = locale === "ar" ? ArrowDownLeft : ArrowUpRight;

  return (
    <article className={`post-card${featured ? " post-card--featured" : ""}`} data-reveal data-tilt>
      <Link aria-label={`${post.title[locale]} — ${t("readMore")}`} className="post-card__image-link" to={`/insights/${post.slug}`}>
        <div className="post-card__image-wrap" data-image-reveal>
          <img
            alt={post.coverImage.alt[locale]}
            className="post-card__image"
            decoding="async"
            height="900"
            loading={index < 2 ? "eager" : "lazy"}
            src={post.coverImage.src}
            width="1200"
          />
          <span className="post-card__index">{String(index + 1).padStart(2, "0")}</span>
          {featured && <span className="post-card__featured">{t("home.featuredTag")}</span>}
        </div>
      </Link>
      <div className="post-card__content">
        <div className="post-card__meta">
          <span>{post.category.label[locale]}</span>
          <span className="post-card__meta-dot" />
          <span><CalendarDays aria-hidden="true" size={13} />{post.publishedAt ? new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(new Date(post.publishedAt)) : t("insights.noDate")}</span>
        </div>
        <h3><Link to={`/insights/${post.slug}`}>{post.title[locale]}</Link></h3>
        <p>{post.excerpt[locale]}</p>
        <div className="post-card__tags">
          {post.tags[locale].map((tag) => onTagSelect
            ? <button key={tag} onClick={() => onTagSelect(tag)} type="button">{tag}</button>
            : <span key={tag}>{tag}</span>)}
        </div>
        <div className="post-card__foot">
          <span><Clock3 aria-hidden="true" size={14} />{t("article.reading", { count: post.readingMinutes[locale] })}</span>
          <Link aria-label={`${t("readMore")}: ${post.title[locale]}`} className="post-card__arrow" to={`/insights/${post.slug}`}><Arrow aria-hidden="true" size={18} /></Link>
        </div>
      </div>
    </article>
  );
}
