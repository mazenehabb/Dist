import { ArrowUpRight, BadgeCheck, ClipboardCheck, Factory, GraduationCap, Megaphone, ShieldCheck, Microscope } from "lucide-react";
import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { PageMotion } from "@/components/animations/PageMotion";
import { BrandTicker } from "@/components/animations/BrandTicker";
import { Button } from "@/components/ui/button";
import { services, sectors, standards, trainingTopics } from "@/data/siteContent";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";

const serviceIcons: Record<(typeof services)[number]["icon"], ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  shield: ShieldCheck,
  clipboard: ClipboardCheck,
  microscope: Microscope,
  factory: Factory,
  graduation: GraduationCap,
  megaphone: Megaphone,
};

export function ServicesPage() {
  const { locale, t } = useLocale();
  usePageMetadata(t("services.pageTitle"), t("services.intro"));

  return (
    <PageMotion>
      <div className="services-page">
        <section className="page-hero page-hero--paper mx-auto w-full max-w-7xl px-6">
          <div className="page-hero__meta"><span className="eyebrow eyebrow--gold">{t("services.eyebrow")}</span><span className="mono">DIST / 02</span></div>
          <h1 data-reveal>{t("services.title")}</h1>
          <p className="page-hero__intro" data-reveal>{t("services.intro")}</p>
          <div className="page-hero__aside"><span>{t("services.scopeLabel")}</span><i /><span>FSMS / QMS</span></div>
        </section>

        <section className="service-catalog section-pad">
          <div className="section-shell mx-auto w-full max-w-7xl px-6">
            <div className="catalog-topline" data-reveal><span className="eyebrow eyebrow--gold">01 — {String(services.length).padStart(2, "0")}</span><span className="catalog-topline__text">{locale === "ar" ? "مجالات الدعم" : "Areas of support"}</span></div>
            <div className="catalog-grid" data-reveal-group>
              {services.map((service) => {
                const Icon = serviceIcons[service.icon];
                return <article className={`catalog-item catalog-item--${service.id}`} data-reveal key={service.id}><div className="catalog-item__top"><span>{service.number}</span><Icon aria-hidden="true" size={24} strokeWidth={1.45} /></div><h2>{service.title[locale]}</h2><p>{service.description[locale]}</p><ul>{service.items[locale].map((item) => <li key={item}>{item}</li>)}</ul></article>;
              })}
            </div>
          </div>
        </section>

        <BrandTicker variant="dark" />

        <section className="standards-section">
          <div className="standards-section__inner mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[.72fr_1.28fr]">
            <div className="standards-section__copy" data-reveal><span className="eyebrow eyebrow--light">{t("services.standardsLabel")}</span><h2>{locale === "ar" ? "نبدأ من معيار واضح." : "Start with a clear standard."}</h2><p>{t("services.systemsCopy")}</p><BadgeCheck aria-hidden="true" size={34} strokeWidth={1.2} /></div>
            <div className="standards-cloud" data-reveal>{standards[locale].map((standard, index) => <span className={index % 4 === 0 ? "standard standard--accent" : "standard"} key={standard}>{standard}</span>)}</div>
          </div>
        </section>

        <section className="training-section section-pad">
          <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="training-photo" data-reveal><img alt={locale === "ar" ? "عاملون في منشأة لإنتاج الأغذية" : "Food production staff in a processing area"} data-image-reveal data-parallax loading="lazy" src="/images/posts/post3/2.jpg" /><span className="training-photo__caption"><GraduationCap aria-hidden="true" size={17} />{t("services.trainingTitle")}</span></div>
            <div className="training-copy" data-reveal><span className="eyebrow eyebrow--gold">{t("services.trainingList")}</span><h2>{t("services.trainingTitle")}</h2><p>{t("services.trainingCopy")}</p><div className="training-topics">{trainingTopics[locale].map((topic, index) => <div key={topic}><span>0{index + 1}</span>{topic}</div>)}</div></div>
          </div>
        </section>

        <section className="sectors-band section-pad">
          <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-[.75fr_1.25fr]">
            <div data-reveal><span className="eyebrow eyebrow--gold">{t("services.sectorsTitle")}</span><p>{t("services.sectorsCopy")}</p></div>
            <div className="sector-chip-list" data-reveal-group>{sectors[locale].map((sector, index) => <span key={sector}><i>0{index + 1}</i>{sector}</span>)}</div>
          </div>
        </section>

        <section className="service-cta">
          <div className="service-cta__inner mx-auto flex w-full max-w-7xl items-center justify-between px-6">
            <div data-reveal><span className="eyebrow eyebrow--light">{locale === "ar" ? "نتحدث عن احتياجاتك" : "A conversation about your needs"}</span><h2>{t("services.ctaTitle")}</h2><p>{t("services.ctaCopy")}</p></div>
            <Button asChild size="default" variant="secondary"><Link to="/contact">{t("services.cta")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={17} /></Link></Button>
          </div>
        </section>
      </div>
    </PageMotion>
  );
}
