import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, CheckCircle2, ShieldCheck, ClipboardCheck, GraduationCap, Microscope } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function MethodologyJourney() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLImageElement>(null);

  const steps = isRtl
    ? [
        {
          num: "01",
          label: "التقييم وتحليل الفجوات",
          title: "فحص ميداني شامل وتحديد نقاط الخطر",
          text: "فحص شامل لصالة الإنتاج، تدقيق بيئي للميكروبات، وتحديد دقيق لنقاط التحكم الحرجة (CCPs) وفق معايير الهاسب وكودكس.",
          metric: "100%",
          metricLabel: "تغطية ميدانية شاملة",
          icon: Microscope,
          benefits: [
            ["تحليل المخاطر الشامل", "HACCP, TACCP, VACCP"],
            ["تقييم اشتراطات سلامة الغذاء", "NFSA & Codex Compliance"],
          ],
        },
        {
          num: "02",
          label: "صياغة وتأهيل النظام",
          title: "بناء وثائق وإجراءات تناسب واقع منشأتك",
          text: "تصميم أنظمة الجودة وسلامة الغذاء (FSMS) لتكون عملية وسهلة التطبيق وليست مجرد ملفات ورقية، مع مطابقة متطلبات FSSC 22000 وBRCGS.",
          metric: "V6.0",
          metricLabel: "أحدث إصدارات المعايير",
          icon: ClipboardCheck,
          benefits: [
            ["تأهيل منظومات الإدارة", "ISO 22000 & FSSC 22000"],
            ["معايير سلاسل الإمداد العالمية", "BRCGS & GlobalG.A.P."],
          ],
        },
        {
          num: "03",
          label: "التدريب الميداني والتمكين",
          title: "تحويل المعرفة إلى سلوك يومي لكل عامل",
          text: "ورش عمل تدريبية موجهة لمشغلي خطوط الإنتاج ومشرفي الجودة، لترسيخ ممارسات التصنيع الجيد (GMP) والنظافة الشخصية في كل وردية.",
          metric: "+40",
          metricLabel: "بروتوكول سلامة ونظافة",
          icon: GraduationCap,
          benefits: [
            ["تدريب تفاعلي في المصنع", "Hands-on Floor Workshops"],
            ["بناء ثقافة سلامة الغذاء", "Food Safety Culture"],
          ],
        },
        {
          num: "04",
          label: "المراجعة والجاهزية الدائمة",
          title: "مراجعات دورية وجاهزية تامة للتفتيش",
          text: "تدقيق دوري من طرف ثالث يحاكي التفتيش الرسمي لهيئة سلامة الغذاء والجهات المانحة للاعتماد، مع متابعة خطط التصحيح المستمرة.",
          metric: "0",
          metricLabel: "مخاطر مفاجئة أثناء التفتيش",
          icon: ShieldCheck,
          benefits: [
            ["تدقيق طرف ثالث استباقي", "Third-Party Mock Audits"],
            ["جاهزية مستمرة للعملاء والتصدير", "Audit-Ready Every Day"],
          ],
        },
      ]
    : [
        {
          num: "01",
          label: "Assessment & Gap Analysis",
          title: "Rigorous Floor Inspection & Risk Pinpointing",
          text: "Thorough production audit, pathogen environmental evaluation, and accurate critical control point (CCP) mapping aligned with Codex.",
          metric: "100%",
          metricLabel: "Full Floor Verification",
          icon: Microscope,
          benefits: [
            ["Comprehensive Risk Analysis", "HACCP, TACCP, VACCP"],
            ["Statutory Food Authority Check", "NFSA & Codex Alignment"],
          ],
        },
        {
          num: "02",
          label: "System Design & Qualification",
          title: "Practical Management Built for Operations",
          text: "Engineering FSMS & QMS systems that enhance operational rhythm rather than burden it, adhering to FSSC 22000 and BRCGS benchmarks.",
          metric: "V6.0",
          metricLabel: "Latest Benchmark Standards",
          icon: ClipboardCheck,
          benefits: [
            ["Management Systems", "ISO 22000 & FSSC 22000"],
            ["Global Export Benchmarks", "BRCGS & GlobalG.A.P."],
          ],
        },
        {
          num: "03",
          label: "Floor Training & Empowerment",
          title: "Turning Compliance into Everyday Habits",
          text: "Interactive plant-floor training for operators and supervisors, ensuring Good Manufacturing Practice (GMP) is lived across every shift.",
          metric: "+40",
          metricLabel: "Custom Hygiene Modules",
          icon: GraduationCap,
          benefits: [
            ["On-Site Floor Training", "Hands-on Floor Workshops"],
            ["Culture Building", "Food Safety Culture Maturity"],
          ],
        },
        {
          num: "04",
          label: "Continuous Audit Readiness",
          title: "Regular Audits & Total Inspection Confidence",
          text: "Independent mock audits replicating official food authority and certification body scrutiny, keeping facilities audit-ready year-round.",
          metric: "ZERO",
          metricLabel: "Surprises on Official Audits",
          icon: ShieldCheck,
          benefits: [
            ["Rigorous Mock Auditing", "Third-Party Rigor"],
            ["Continuous Readiness", "Audit-Ready Every Day"],
          ],
        },
      ];

  const currentFact = steps[activeStep];

  useGSAP(
    () => {
      const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (motionQuery.matches) return;

      const container = containerRef.current;
      if (!container) return;

      // 1. Chapters step tracking on scroll
      const chapters = gsap.utils.toArray<HTMLElement>(".journey-chapter", container);
      chapters.forEach((chapter, index) => {
        ScrollTrigger.create({
          trigger: chapter,
          start: "top 55%",
          end: "bottom 55%",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      // 2. Vertical timeline progress line fill
      if (lineFillRef.current) {
        gsap.fromTo(
          lineFillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".journey-chapters",
              start: "top 60%",
              end: "bottom 60%",
              scrub: 0.3,
            },
          },
        );
      }

      // 3. Rotating emblem symbol
      if (symbolRef.current) {
        gsap.fromTo(
          symbolRef.current,
          { rotation: isRtl ? 16 : -16, y: 15 },
          {
            rotation: isRtl ? -16 : 16,
            y: -15,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          },
        );
      }
    },
    { scope: containerRef, dependencies: [isRtl] },
  );

  return (
    <section className="methodology-journey section-pad" id="approach" ref={containerRef}>
      <div className="section-shell mx-auto w-full max-w-7xl px-6">
        {/* Top Meta Line */}
        <div className="journey-topline">
          <span className="eyebrow eyebrow--gold">
            {isRtl ? "منهجية العمل المتكاملة · مسار ديست" : "THE DIST METHODOLOGY · YOUR JOURNEY"}
          </span>
          <span className="mono">04 PHASES / ZERO COMPROMISE</span>
        </div>

        {/* Two-Column Journey Layout with Sticky Companion */}
        <div className="journey-layout">
          {/* Sticky Companion Sidebar */}
          <aside className="journey-companion">
            <div className="journey-companion__sticky">
              <span className="eyebrow eyebrow--gold">
                {isRtl ? "مسار التأهيل والاعتماد" : "THE INTEGRATED PATHWAY"}
              </span>

              <h2 className="journey-companion__title">
                {isRtl ? "من الفحص والتقييم إلى الممارسة اليومية" : "From Initial Audit To Everyday Practice"}
              </h2>

              <p className="journey-companion__desc">
                {isRtl
                  ? "نرافقك خطوة بخطوة من دراسة واقع خطوط الإنتاج حتى الحصول على الاعتماد وترسيخ ثقافة السلامة المستدامة."
                  : "We partner with your team across every milestone—from plant gap analysis to final certification and beyond."}
              </p>

              {/* Interactive Fact Display that morphs with active step */}
              <div className="journey-map-card">
                <div className="journey-map-card__top">
                  <span className="mono">{isRtl ? "المرحلة الحالية" : "ACTIVE STAGE"}</span>
                  <span className="mono journey-counter">0{activeStep + 1} / 04</span>
                </div>

                <div className="journey-map-card__emblem-wrap">
                  <img
                    alt="DIST Seal"
                    className="journey-map-symbol"
                    height="76"
                    ref={symbolRef}
                    src="/images/logo.jpg"
                    width="76"
                  />
                </div>

                <div className="journey-map-card__metric" key={activeStep}>
                  <strong className="mono">{currentFact.metric}</strong>
                  <span>{currentFact.metricLabel}</span>
                </div>

                {/* Step indicators */}
                <div className="journey-map-stops">
                  {steps.map((st, idx) => (
                    <a
                      aria-current={activeStep === idx ? "step" : undefined}
                      className={idx <= activeStep ? "is-reached" : ""}
                      href={`#journey-stage-${idx}`}
                      key={st.num}
                    >
                      <span className="mono">{st.num}</span>
                    </a>
                  ))}
                </div>

                <p className="journey-map-caption">{currentFact.label}</p>
              </div>

              <div className="journey-companion__cta">
                <a className="button button--primary button--small" href="/services">
                  <span>{isRtl ? "اكتشف جميع الخدمات" : "View All Services"}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </aside>

          {/* Chapters Column with Vertical Animated Fill Line */}
          <div className="journey-chapters">
            {/* The Animated Line */}
            <div aria-hidden="true" className="journey-line">
              <div className="journey-line-fill" ref={lineFillRef} />
            </div>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = idx === activeStep;

              return (
                <article
                  className={`journey-chapter ${isCurrent ? "is-current" : ""}`}
                  id={`journey-stage-${idx}`}
                  key={step.num}
                >
                  <span aria-hidden="true" className="journey-chapter-dot">
                    <Icon size={14} />
                  </span>

                  <div className="journey-chapter-top">
                    <span className="mono">{step.num} / 04</span>
                    <span className="journey-chapter-tag">{step.label}</span>
                  </div>

                  <h3 className="journey-chapter-title">{step.title}</h3>
                  <p className="journey-chapter-lead">{step.text}</p>

                  <div className="journey-chapter-benefits">
                    {step.benefits.map(([heading, sub]) => (
                      <div className="journey-benefit" key={heading}>
                        <span aria-hidden="true" className="journey-benefit-mark">
                          <CheckCircle2 size={16} />
                        </span>
                        <div>
                          <h4>{heading}</h4>
                          <p>{sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
