import { useRef } from "react";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactDetails } from "@/data/siteContent";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";
import { Logo } from "@/components/shared/Logo";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SiteFooter() {
  const { locale, t } = useLocale();
  const isRtl = locale === "ar";
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) return;

      const footer = footerRef.current;
      const wordmark = wordmarkRef.current;
      if (!footer || !wordmark) return;

      // Monumental footer wordmark rising parallax with subtle 3D tilt
      gsap.fromTo(
        wordmark,
        {
          yPercent: 35,
          rotation: isRtl ? 3 : -3,
          opacity: 0.15,
        },
        {
          yPercent: 0,
          rotation: 0,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 0.8,
          },
        },
      );
    },
    { scope: footerRef, dependencies: [isRtl] },
  );

  return (
    <footer className="site-footer" ref={footerRef}>
      <div className="site-footer__top mx-auto grid w-full max-w-7xl px-6">
        <div className="site-footer__brand">
          <Logo inverse />
          <p>{t("footerNote")}</p>
          <div className="site-footer__accreditation">
            <span>
              <ShieldCheck size={14} className="text-gold" />
              {isRtl ? "استشارات واعتمادات سلامة الغذاء والجودة" : "Food Safety & Quality Consulting"}
            </span>
          </div>
        </div>

        <div className="site-footer__nav">
          <span className="eyebrow eyebrow--light">{t("footerNavigate")}</span>
          {navigation.map((item) => (
            <Link key={item.to} to={item.to}>
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="site-footer__contact">
          <span className="eyebrow eyebrow--light">{t("footerReach")}</span>
          <a href={`mailto:${contactDetails.email}`}>
            <Mail aria-hidden="true" size={15} />
            {contactDetails.email}
          </a>
          <a href={`tel:${contactDetails.phones[0].replaceAll(" ", "")}`}>
            <Phone aria-hidden="true" size={15} />
            {contactDetails.phones[0]}
          </a>
          <span>
            <MapPin aria-hidden="true" size={15} />
            {locale === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
          </span>
        </div>

        <Link className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to="/">
          {t("backToTop")} <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </div>

      {/* Monumental Footer Wordmark (Route-style scrubbed architectural branding) */}
      <div aria-hidden="true" className="footer-wordmark-container">
        <div className="footer-giant-word" ref={wordmarkRef}>
          <span>D</span>
          <span>I</span>
          <span>S</span>
          <span>T</span>
        </div>
      </div>

      <div className="site-footer__bottom mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <span>© {new Date().getFullYear()} DIST — Integrated Systems & Training</span>
        <span>{t("footerTagline")}</span>
      </div>
    </footer>
  );
}
