import { ArrowUpRight, Eye, Focus, HeartHandshake, RefreshCw, UsersRound } from "lucide-react";
import { PageMotion } from "@/components/animations/PageMotion";
import { BrandTicker } from "@/components/animations/BrandTicker";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { companyFacts } from "@/data/siteContent";

const values = [
  { key: "Visible", icon: Eye },
  { key: "Decisive", icon: Focus },
  { key: "Relevant", icon: HeartHandshake },
  { key: "Responsive", icon: RefreshCw },
] as const;

export function AboutPage() {
  const { locale, t } = useLocale();
  usePageMetadata(t("about.pageTitle"), t("about.intro"));

  return (
    <PageMotion>
      <div className="about-page">
        <section className="page-hero page-hero--paper mx-auto w-full max-w-7xl px-6">
          <div className="page-hero__meta"><span className="eyebrow eyebrow--gold">{t("about.eyebrow")}</span><span className="mono">DIST / 01</span></div>
          <h1 data-reveal>{t("about.title")}</h1>
          <p className="page-hero__intro" data-reveal>{t("about.intro")}</p>
        </section>

        <BrandTicker variant="paper" />

        <section className="facts-band">
          <div className="facts-band__inner mx-auto grid w-full max-w-7xl grid-cols-1 px-6 sm:grid-cols-3">
            {[{ label: t("about.founded"), value: companyFacts[locale].established }, { label: t("about.focus"), value: companyFacts[locale].focus }, { label: t("about.reach"), value: companyFacts[locale].reach }].map((fact, index) => <div className="fact" data-reveal key={fact.label}><span className="fact__index">0{index + 1}</span><span className="eyebrow">{fact.label}</span><strong>{fact.value}</strong></div>)}
          </div>
        </section>

        <section className="mission-section section-pad">
          <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 gap-0 px-6 md:grid-cols-2">
            <article className="mission-card mission-card--gold" data-reveal><span className="mission-card__mark">01</span><span className="eyebrow">{t("about.missionLabel")}</span><h2>{t("about.mission")}</h2></article>
            <article className="mission-card mission-card--ink" data-reveal><span className="mission-card__mark">02</span><span className="eyebrow eyebrow--light">{t("about.visionLabel")}</span><h2>{t("about.vision")}</h2></article>
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="section-shell mx-auto w-full max-w-7xl px-6">
            <div className="values-heading" data-reveal><span className="eyebrow eyebrow--gold">{t("about.valuesLabel")}</span><h2>{locale === "ar" ? "ما يوجّه طريقتنا في العمل." : "The principles behind the work."}</h2></div>
            <div className="values-list" data-reveal-group>{values.map(({ key, icon: Icon }, index) => <article className="value-row" data-reveal key={key}><span className="value-row__index">0{index + 1}</span><Icon aria-hidden="true" className="value-row__icon" size={23} strokeWidth={1.5} /><h3>{t(`about.value${key}`)}</h3><p>{t(`about.value${key}Copy`)}</p></article>)}</div>
          </div>
        </section>

        <section className="people-section section-pad">
          <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.08fr_.92fr]">
            <figure className="people-photo" data-reveal><img alt={locale === "ar" ? "فريق مجتمع حول طاولة اجتماع" : "A team gathered around a meeting table"} data-image-reveal data-parallax loading="lazy" src="/images/posts/post4/2.jpg" /><figcaption><span>03 / DIST</span><span>{t("about.sourceLabel")}</span></figcaption></figure>
            <div className="people-copy" data-reveal><span className="eyebrow eyebrow--gold">{t("about.peopleKicker")}</span><h2>{t("about.peopleTitle")}</h2><p>{t("about.peopleCopy")}</p><Button asChild variant="ghost"><Link to="/contact">{t("home.contactCta")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={17} /></Link></Button><UsersRound aria-hidden="true" className="people-copy__icon" size={33} strokeWidth={1.15} /></div>
          </div>
        </section>
      </div>
    </PageMotion>
  );
}
