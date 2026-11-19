import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function QualityManifesto() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const sectionRef = useRef<HTMLElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const words = isRtl
    ? [
        { num: "01", word: "التقييم الميداني", lead: "Hazard Analysis & Audit" },
        { num: "02", word: "التأهيل المعتمد", lead: "FSSC & BRCGS Systems" },
        { num: "03", word: "الممارسة اليومية", lead: "Continuous Floor Compliance" },
      ]
    : [
        { num: "01", word: "ASSESSMENT", lead: "Rigorous Floor Inspection" },
        { num: "02", word: "QUALIFICATION", lead: "Global GFSI Benchmarks" },
        { num: "03", word: "EXCELLENCE", lead: "Reliable Daily Operations" },
      ];

  useGSAP(
    () => {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) return;

      const section = sectionRef.current;
      if (!section) return;

      // Word fills: ClipPath reveal on scroll scrub
      const wordFills = gsap.utils.toArray<HTMLElement>(".manifesto-word__fill", section);
      wordFills.forEach((fill) => {
        const parent = fill.closest(".manifesto-word");
        if (!parent) return;

        gsap.fromTo(
          fill,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            ease: "none",
            scrollTrigger: {
              trigger: parent,
              start: "top 80%",
              end: "top 40%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      // Stamp elastic drop-in
      if (stampRef.current) {
        gsap.fromTo(
          stampRef.current,
          { scale: 0.4, rotation: isRtl ? -25 : 25, autoAlpha: 0 },
          {
            scale: 1,
            rotation: isRtl ? 6 : -6,
            autoAlpha: 1,
            duration: 0.85,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: section,
              start: "top 65%",
              once: true,
            },
          },
        );
      }

      // Ambient blueprint card parallax
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { y: 40, rotation: isRtl ? 2 : -2 },
          {
            y: -30,
            rotation: isRtl ? -2 : 2,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          },
        );
      }
    },
    { scope: sectionRef, dependencies: [isRtl] },
  );

  return (
    <section className="quality-manifesto section-pad" ref={sectionRef}>
      <div className="section-shell mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Column: Words with Scroll-Scrubbed Fill */}
        <div className="manifesto-content">
          <div className="manifesto-topline">
            <span className="eyebrow eyebrow--gold">
              {isRtl ? "ميثاق الجودة والسلامة · DIST" : "THE DIST QUALITY MANIFESTO"}
            </span>
            <span className="mono">FOUNDED 2019</span>
          </div>

          <h2 className="manifesto-heading">
            {isRtl ? "ثلاث ركائز لا تقبل المساومة" : "Three Non-Negotiable Pillars"}
          </h2>

          <div className="manifesto-words">
            {words.map(({ num, word, lead }) => (
              <div className="manifesto-word" key={num}>
                <div className="manifesto-word__meta">
                  <span className="mono">{num}</span>
                  <small>{lead}</small>
                </div>
                <div className="manifesto-word__text">
                  <span className="manifesto-word__outline">{word}</span>
                  <span className="manifesto-word__fill">{word}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Audit Blueprint & Seal Stamp */}
        <div className="manifesto-visual">
          <div className="manifesto-blueprint" ref={cardRef}>
            <div className="manifesto-blueprint__grid" />
            <div className="manifesto-blueprint__header">
              <span className="mono">STANDARDS BLUEPRINT / DIST-FSMS</span>
              <span className="status-dot" />
            </div>

            <div className="manifesto-blueprint__body">
              <h3>{isRtl ? "التأهيل الشامل لمنظومة التصنيع" : "Holistic Facility Qualification"}</h3>
              <p>
                {isRtl
                  ? "تغطية معايير الهاسب (HACCP) وتحليل المخاطر البيولوجية والكيميائية (TACCP/VACCP) وتأهيل متطلبات هيئة سلامة الغذاء (NFSA)."
                  : "Covering HACCP, TACCP/VACCP risk frameworks, pathogen environmental monitoring, and Codex Alimentarius protocols."}
              </p>

              <ul className="manifesto-blueprint__list">
                <li>
                  <Check size={14} className="text-gold" />
                  <span>{isRtl ? "فحص خطوط الإنتاج والبيئة المحيطة" : "Line layout & pathogen monitoring"}</span>
                </li>
                <li>
                  <Check size={14} className="text-gold" />
                  <span>{isRtl ? "تأهيل وتدريب المشغلين والفرق الفنية" : "Floor team training & verification"}</span>
                </li>
                <li>
                  <Check size={14} className="text-gold" />
                  <span>{isRtl ? "اعتماد ISO 22000 و FSSC 22000 و BRCGS" : "ISO 22000, FSSC 22000, BRCGS"}</span>
                </li>
              </ul>
            </div>

            {/* Elastic Stamp Badge */}
            <div className="manifesto-stamp" ref={stampRef}>
              <div className="manifesto-stamp__inner">
                <ShieldCheck size={20} />
                <strong>VERIFIED</strong>
                <small>DIST COMPLIANCE</small>
                <Sparkles size={11} className="manifesto-stamp__sparkle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
