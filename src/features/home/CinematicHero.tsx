import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Award } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function CinematicHero() {
  const { locale, t } = useLocale();
  const isRtl = locale === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const copyColRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lettersStageRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  // Letter refs
  const letterDRef = useRef<HTMLDivElement>(null);
  const letterIRef = useRef<HTMLDivElement>(null);
  const letterSRef = useRef<HTMLDivElement>(null);
  const letterTRef = useRef<HTMLDivElement>(null);

  // Gateway / Portal refs
  const sealRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const gatewayCopyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) return;

      const container = containerRef.current;
      const pin = pinRef.current;
      if (!container || !pin) return;

      const copyCol = copyColRef.current;
      const card = cardRef.current;
      const lettersStage = lettersStageRef.current;
      const letterD = letterDRef.current;
      const letterI = letterIRef.current;
      const letterS = letterSRef.current;
      const letterT = letterTRef.current;
      const seal = sealRef.current;
      const halo = haloRef.current;
      const gatewayCopy = gatewayCopyRef.current;
      const scrollCue = scrollCueRef.current;

      const dirMult = isRtl ? -1 : 1;

      // Master ScrollTrigger timeline pinned across scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "hero-cinematic",
          trigger: container,
          start: "top top",
          end: "+=220%",
          pin: pin,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1 (0 -> 0.3):
      // Copy column on the start side and the floating card fade out smoothly
      tl.to(
        copyCol,
        {
          y: -60,
          scale: 0.94,
          autoAlpha: 0,
          filter: "blur(6px)",
          ease: "power2.inOut",
          duration: 0.32,
        },
        0,
      )
        .to(
          card,
          {
            y: -70,
            autoAlpha: 0,
            filter: "blur(8px)",
            ease: "power2.inOut",
            duration: 0.28,
          },
          0,
        )
        .to(
          scrollCue,
          {
            autoAlpha: 0,
            y: 20,
            duration: 0.16,
            ease: "power1.out",
          },
          0,
        );

      // Transition the letters container from its side position to the exact viewport center
      if (lettersStage) {
        tl.to(
          lettersStage,
          {
            xPercent: isRtl ? 26 : -26, // shifts from the visual column towards center
            yPercent: -10,
            scale: 1.15,
            ease: "power2.inOut",
            duration: 0.38,
          },
          0.05,
        );
      }

      // Phase 2 (0.28 -> 0.75):
      // Letters I, S, T scatter away into 3D space with rotation, blur, and opacity
      if (letterI) {
        tl.to(
          letterI,
          {
            xPercent: 180 * dirMult,
            yPercent: -140,
            rotationX: -40,
            rotationY: 50 * dirMult,
            rotationZ: 25 * dirMult,
            scale: 0.5,
            autoAlpha: 0,
            filter: "blur(16px)",
            ease: "power1.inOut",
            duration: 0.5,
          },
          0.25,
        );
      }

      if (letterS) {
        tl.to(
          letterS,
          {
            xPercent: -170 * dirMult,
            yPercent: 150,
            rotationX: 45,
            rotationY: -40 * dirMult,
            rotationZ: -25 * dirMult,
            scale: 0.5,
            autoAlpha: 0,
            filter: "blur(16px)",
            ease: "power1.inOut",
            duration: 0.5,
          },
          0.25,
        );
      }

      if (letterT) {
        tl.to(
          letterT,
          {
            xPercent: 260 * dirMult,
            yPercent: 90,
            rotationX: -25,
            rotationY: 60 * dirMult,
            rotationZ: 35 * dirMult,
            scale: 0.45,
            autoAlpha: 0,
            filter: "blur(16px)",
            ease: "power1.inOut",
            duration: 0.5,
          },
          0.26,
        );
      }

      // Letter D (Focal anchor) locks into center stage, scales up
      if (letterD) {
        tl.to(
          letterD,
          {
            xPercent: isRtl ? 150 : -150, // brings D from its spot in the 4-letter row to dead center
            yPercent: 0,
            scale: 1.35,
            ease: "power2.inOut",
            duration: 0.58,
          },
          0.22,
        );
      }

      // Phase 3 (0.45 -> 0.85):
      // The Golden Circular Seal Logo illuminates in the center of Letter D
      if (seal) {
        tl.fromTo(
          seal,
          {
            autoAlpha: 0,
            scale: 0.45,
            rotation: -25 * dirMult,
          },
          {
            autoAlpha: 1,
            scale: 1,
            rotation: 0,
            ease: "power2.out",
            duration: 0.42,
          },
          0.44,
        );
      }

      // Expanding Golden Halo around the centered seal
      if (halo) {
        tl.fromTo(
          halo,
          {
            scale: 0.4,
            autoAlpha: 0,
          },
          {
            scale: 1.6,
            autoAlpha: 0.9,
            ease: "power2.out",
            duration: 0.48,
          },
          0.46,
        );
      }

      // Phase 4 (0.6 -> 1.0):
      // Gateway chapter content ascends around the centered Seal
      if (gatewayCopy) {
        tl.fromTo(
          gatewayCopy,
          {
            y: 60,
            autoAlpha: 0,
            filter: "blur(8px)",
          },
          {
            y: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            duration: 0.42,
          },
          0.58,
        );
      }
    },
    { scope: containerRef, dependencies: [isRtl] },
  );

  return (
    <div className="hero-cinematic" ref={containerRef}>
      <div className="hero-cinematic__pin" ref={pinRef}>
        {/* Ambient atmospheric lighting */}
        <div aria-hidden="true" className="cinematic-atmosphere">
          <div className="cinematic-halo" ref={haloRef} />
          <div className="cinematic-beam" />
          <div className="cinematic-floor" />
          <div className="cinematic-grid-plane" />
        </div>

        {/* Hero Main Layout: Distinct 2-column structure with ZERO overlap */}
        <div className="cinematic-stage">
          {/* Column 1: Editorial Heading & CTAs (Completely unblocked) */}
          <div className="cinematic-stage__copy" ref={copyColRef}>
            <div className="cinematic-kicker">
              <span className="cinematic-kicker__dot" />
              <span className="eyebrow eyebrow--gold">
                {isRtl ? "سلامة الغذاء · أنظمة الجودة · الاستشارات المعتمدة" : "FOOD SAFETY · QUALITY SYSTEMS · COMPLIANCE"}
              </span>
              <span className="cinematic-kicker__rule" />
              <span className="mono">EST. 2019</span>
            </div>

            <h1 className="cinematic-title">
              {isRtl ? (
                <>
                  معايير عملية <em>لمن يصنعون الغذاء</em>
                </>
              ) : (
                <>
                  Practical Standards <em>For Those Who Make Food</em>
                </>
              )}
            </h1>

            <p className="cinematic-intro">
              {isRtl
                ? "تساعد ديست المنشآت الغذائية على ترسيخ ممارسات الجودة والسلامة من واقع صالة الإنتاج إلى أعلى الاعتمادات العالمية المعتمدة."
                : "DIST partners with food manufacturers to transform complex compliance into dependable, floor-tested daily practices."}
            </p>

            <div className="cinematic-actions">
              <Button asChild className="button--primary cinematic-btn" variant="primary">
                <Link to="/services">
                  {t("home.heroCta")}
                  <ArrowRight aria-hidden="true" className="directional-icon" size={17} />
                </Link>
              </Button>
              <Link className="text-link text-link--light" to="/about">
                {isRtl ? "عن منهج ديست" : "About Our Approach"}
                <ArrowUpRight aria-hidden="true" className="directional-icon" size={16} />
              </Link>
            </div>

            {/* Quick credibility tags */}
            <div className="cinematic-trust-tags">
              <span>
                <Award size={14} className="text-gold" />
                {isRtl ? "40+ بروتوكول سلامة ونظافة" : "40+ Hygiene Protocols"}
              </span>
              <span>
                <ShieldCheck size={14} className="text-gold" />
                {isRtl ? "تأهيل معتمد FSSC & BRCGS" : "FSSC & BRCGS Qualified"}
              </span>
            </div>
          </div>

          {/* Column 2: The Visual Art Zone (Hosts the 3D DIST Letters & Audit Card) */}
          <div className="cinematic-stage__visual">
            {/* 3D Letters Row Docked in Visual Half */}
            <div aria-hidden="true" className="cinematic-letters-dock" ref={lettersStageRef}>
              {/* LETTER D (THE FOCAL CENTERPIECE) */}
              <div className="letter-block letter-block--d" ref={letterDRef}>
                <span className="letter-block__glyph">D</span>
                <div className="letter-block__caption">
                  <span className="mono">01</span>
                  <span>{isRtl ? "تطوير" : "Dev"}</span>
                </div>

                {/* Embedded Golden Seal Logo that reveals and expands on scroll */}
                <div className="cinematic-seal" ref={sealRef}>
                  <div className="cinematic-seal__ring cinematic-seal__ring--outer" />
                  <div className="cinematic-seal__ring cinematic-seal__ring--inner" />
                  <img
                    alt="DIST Seal Logo"
                    className="cinematic-seal__img"
                    height="115"
                    src="/images/logo.jpg"
                    width="115"
                  />
                  <span className="cinematic-seal__badge">
                    <Sparkles size={13} />
                    <span>EST. 2019</span>
                  </span>
                </div>
              </div>

              {/* LETTER I */}
              <div className="letter-block letter-block--i" ref={letterIRef}>
                <span className="letter-block__glyph">I</span>
                <div className="letter-block__caption">
                  <span className="mono">02</span>
                  <span>{isRtl ? "تكامل" : "Int"}</span>
                </div>
              </div>

              {/* LETTER S */}
              <div className="letter-block letter-block--s" ref={letterSRef}>
                <span className="letter-block__glyph">S</span>
                <div className="letter-block__caption">
                  <span className="mono">03</span>
                  <span>{isRtl ? "أنظمة" : "Sys"}</span>
                </div>
              </div>

              {/* LETTER T */}
              <div className="letter-block letter-block--t" ref={letterTRef}>
                <span className="letter-block__glyph">T</span>
                <div className="letter-block__caption">
                  <span className="mono">04</span>
                  <span>{isRtl ? "تدريب" : "Train"}</span>
                </div>
              </div>
            </div>

            {/* Ambient Inspection Glass Card nestled neatly beneath the letter dock */}
            <div className="cinematic-card" ref={cardRef}>
              <div className="cinematic-card__media">
                <img
                  alt={isRtl ? "فريق ديست في موقع فحص وتأهيل" : "DIST team in audit verification"}
                  className="cinematic-card__photo"
                  fetchPriority="high"
                  src="/images/posts/post3/1.jpg"
                />
                <div className="cinematic-card__veil" />
                <span className="cinematic-card__tag">
                  <ShieldCheck size={14} />
                  <span>FSSC 22000 & GFSI</span>
                </span>
              </div>
              <div className="cinematic-card__body">
                <div className="cinematic-card__meta">
                  <span className="mono">QUALIFICATION</span>
                  <span>{isRtl ? "تأهيل مصانع الأغذية" : "Facility Qualification"}</span>
                </div>
                <p className="cinematic-card__quote">
                  {isRtl
                    ? "«التحقق الواقعي في خطوط الإنتاج هو أساس الاعتماد الحقيقي.»"
                    : "“Real verification on the production line is the foundation of true compliance.”"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Gateway / Portal Chapter (Revealed around the centered DIST seal) */}
        <div className="cinematic-gateway" ref={gatewayCopyRef}>
          <div className="cinematic-gateway__inner">
            <span className="eyebrow eyebrow--gold">
              {isRtl ? "01 / 04 · المنهجية المتكاملة" : "01 / 04 · THE INTEGRATED APPROACH"}
            </span>

            <h2 className="cinematic-gateway__title">
              {isRtl ? "من الفحص والتدقيق إلى الممارسة اليومية" : "From Rigorous Audit to Everyday Line Practice"}
            </h2>

            <p className="cinematic-gateway__lead">
              {isRtl
                ? "حلول شاملة تغطي تحليل المخاطر، صياغة المعايير، وتأهيل الكوادر الفنية بما يتطابق مع متطلبات الهيئة القومية لسلامة الغذاء والمواصفات الدولية."
                : "End-to-end consulting encompassing HACCP, TACCP, ISO 22000, and BRCGS certification with actionable, floor-level execution."}
            </p>

            <div className="cinematic-gateway__pillars">
              <span className="cinematic-pillar">
                <CheckCircle2 size={15} />
                <span>HACCP & ISO 22000</span>
              </span>
              <span className="cinematic-pillar">
                <CheckCircle2 size={15} />
                <span>FSSC 22000 V6.0</span>
              </span>
              <span className="cinematic-pillar">
                <CheckCircle2 size={15} />
                <span>BRCGS Issue 9</span>
              </span>
              <span className="cinematic-pillar">
                <CheckCircle2 size={15} />
                <span>NFSA Compliance</span>
              </span>
            </div>

            <div className="cinematic-gateway__cta">
              <a className="button button--secondary button--small" href="#approach">
                <span>{isRtl ? "استكشف تفاصيل النهج" : "Explore Methodology"}</span>
                <ArrowDown aria-hidden="true" size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Cue Prompt */}
        <div className="cinematic-scroll-cue" ref={scrollCueRef}>
          <a href="#approach">
            <span className="cinematic-scroll-cue__mouse">
              <span className="cinematic-scroll-cue__wheel" />
            </span>
            <span>{isRtl ? "مرر للاستكشاف" : "SCROLL TO EXPLORE"}</span>
            <ArrowDown aria-hidden="true" size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
