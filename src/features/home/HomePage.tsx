import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMotion } from "@/components/animations/PageMotion";
import { CinematicHero } from "./CinematicHero";
import { BrandTicker } from "@/components/animations/BrandTicker";
import { MethodologyJourney } from "@/components/animations/MethodologyJourney";
import { QualityManifesto } from "@/components/animations/QualityManifesto";
import { CorporateSectors } from "./CorporateSectors";
import { CompanyProfileShowcase } from "./CompanyProfileShowcase";
import { FacilityAuditEstimator } from "./FacilityAuditEstimator";
import { PostCard } from "@/components/shared/PostCard";
import { PostGridSkeleton } from "@/components/shared/PostGrid";
import { LoadError } from "@/components/shared/LoadError";
import { Button } from "@/components/ui/button";
import { services } from "@/data/siteContent";
import { useFeaturedPosts, usePosts } from "@/hooks/usePosts";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";

export function HomePage() {
  const { locale, t } = useLocale();
  const featuredQuery = useFeaturedPosts();
  const recentQuery = usePosts({ query: "", category: "", tag: "", locale });
  const featured = featuredQuery.data?.[0];
  const recent = recentQuery.data?.pages[0]?.items.slice(0, 3) ?? [];

  usePageMetadata(t("home.pageTitle"), t("home.heroCopy"));

  return (
    <PageMotion>
      <div className="home-page">
        {/* 1. Cinematic Pinned Hero with 3D Scattered Letters & Central Seal Morph */}
        <CinematicHero />

        {/* 2. Infinite Continuous Marquee Ticker */}
        <BrandTicker variant="dark" />

        {/* 3. Route-Style Methodology Journey with Sticky Companion & Animated Timeline Line */}
        <MethodologyJourney />

        {/* 4. Route-Style Quality Manifesto with Scrubbed Clip-Path Word Reveal & Stamp */}
        <QualityManifesto />

        {/* 5. Services Section */}
        <section className="services-section section-pad" data-scroll-stage>
          <div className="section-shell mx-auto w-full max-w-7xl px-6">
            <div className="split-heading" data-reveal>
              <div>
                <span className="eyebrow eyebrow--gold">
                  {t("home.servicesKicker")}
                </span>
                <h2>{t("home.servicesTitle")}</h2>
              </div>
              <Link className="text-link" to="/services">
                {t("learnMore")}
                <ArrowUpRight
                  aria-hidden="true"
                  className="directional-icon"
                  size={16}
                />
              </Link>
            </div>
            <div className="service-preview-list" data-reveal-group>
              {services.slice(0, 4).map((service) => (
                <Link
                  className="service-preview"
                  data-reveal
                  data-tilt
                  key={service.id}
                  to="/services"
                >
                  <span className="service-preview__num">{service.number}</span>
                  <span className="service-preview__title">
                    {service.title[locale]}
                  </span>
                  <span className="service-preview__copy">
                    {service.description[locale]}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="directional-icon service-preview__arrow"
                    size={20}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Corporate Sectors & Industries Hub (Merge-Style Specialized Sectors) */}
        <CorporateSectors />

        {/* 7. Gold Reverse Ticker */}
        <BrandTicker direction="reverse" variant="gold" />

        {/* 8. Official Company Profile Showcase & Credentials Dossier (15-Page Dossier) */}
        <CompanyProfileShowcase />

        {/* 9. Interactive Facility Audit Scope & Roadmap Estimator */}
        <FacilityAuditEstimator />

        {/* 10. Journal / Articles Section */}
        <section className="journal-section section-pad">
          <div className="section-shell mx-auto w-full max-w-7xl px-6">
            <div className="split-heading" data-reveal>
              <div>
                <span className="eyebrow eyebrow--gold">
                  {t("home.journalKicker")}
                </span>
                <h2>{t("home.journalTitle")}</h2>
              </div>
              <Link className="text-link" to="/insights">
                {t("viewAll")}
                <ArrowUpRight
                  aria-hidden="true"
                  className="directional-icon"
                  size={16}
                />
              </Link>
            </div>
            {featuredQuery.isError ? (
              <LoadError
                action={t("common.retry")}
                onRetry={() => void featuredQuery.refetch()}
                title={t("common.error")}
              />
            ) : featured ? (
              <div className="home-featured">
                <span className="home-featured__label">
                  {t("home.featuredLabel")}
                </span>
                <PostCard featured index={0} post={featured} />
              </div>
            ) : (
              <PostGridSkeleton count={1} />
            )}
            {recentQuery.isError ? (
              <LoadError
                action={t("common.retry")}
                onRetry={() => void recentQuery.refetch()}
                title={t("common.error")}
              />
            ) : recentQuery.isPending ? (
              <PostGridSkeleton />
            ) : (
              <div className="post-grid post-grid--home" data-reveal-group>
                {recent
                  .filter((post) => post.id !== featured?.id)
                  .slice(0, 2)
                  .map((post, index) => (
                    <PostCard index={index + 1} key={post.id} post={post} />
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* 9. Contact Band */}
        <section className="contact-band">
          <div className="contact-band__inner mx-auto flex w-full max-w-7xl items-end justify-between px-6">
            <div data-reveal>
              <span className="eyebrow eyebrow--light">
                {locale === "ar" ? "حوار جديد" : "A new conversation"}
              </span>
              <h2>{t("home.contactTitle")}</h2>
              <p>{t("home.contactCopy")}</p>
            </div>
            <Button asChild data-magnetic size="default" variant="secondary">
              <Link to="/contact">
                {t("home.contactCta")}
                <ArrowUpRight
                  aria-hidden="true"
                  className="directional-icon"
                  size={17}
                />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </PageMotion>
  );
}
