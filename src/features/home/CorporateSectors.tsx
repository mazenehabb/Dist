import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Beef, 
  Milk, 
  Wheat, 
  Apple, 
  Package, 
  UtensilsCrossed, 
  ArrowUpRight, 
  CheckCircle2 
} from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

interface SectorData {
  id: string;
  icon: typeof Beef;
  enTitle: string;
  arTitle: string;
  enDesc: string;
  arDesc: string;
  standards: string[];
  scope: { en: string; ar: string };
}

const SECTOR_ITEMS: SectorData[] = [
  {
    id: "meat-poultry",
    icon: Beef,
    enTitle: "Meat, Poultry & Seafood",
    arTitle: "مصانع اللحوم والدواجن والأسماك",
    enDesc: "Rigorous pathogen environmental monitoring, cold chain validation, and HACCP plans tailored for raw and processed proteins.",
    arDesc: "رصد بيئي دقيق لمسببات الأمراض، التحقق من سلاسل التبريد، وخطط هاسب مخصصة لمصانع اللحوم والدواجن والأسماك.",
    standards: ["FSSC 22000", "HACCP", "BRCGS", "Halal"],
    scope: { en: "Slaughterhouses, Processing & Freezing", ar: "المجازر، مصانع التجهيز، وخطوط التجميد" },
  },
  {
    id: "dairy-beverage",
    icon: Milk,
    enTitle: "Dairy, Juices & Beverages",
    arTitle: "الألبان والعصائر والمشروبات",
    enDesc: "Pasteurization & thermal process validation, CIP sanitation verification, and aseptic packaging line qualification.",
    arDesc: "التحقق من المعاملات الحرارية والبسترة، كفاءة دورات الغسيل المكاني (CIP)، وتأهيل خطوط التعبئة المعقمة.",
    standards: ["ISO 22000", "FSSC 22000", "Codex", "NFSA"],
    scope: { en: "UHT Lines, Cheese & Fermented Dairy", ar: "خطوط المعقم، الأجبان، والألبان المتخمرة" },
  },
  {
    id: "bakery-milling",
    icon: Wheat,
    enTitle: "Bakery, Milling & Confectionery",
    arTitle: "المخابز والمطاحن والحلويات",
    enDesc: "Allergen matrix management, foreign material prevention (sieving, magnets, X-ray), and moisture/water-activity controls.",
    arDesc: "إدارة مصفوفة مسببات الحساسية، مكافحة الأجسام الغريبة (المناخل، المغناطيس، كواشف المعادن)، وضبط النشاط المائي.",
    standards: ["BRCGS Food", "AIB", "FSSC 22000"],
    scope: { en: "Industrial Bakeries, Mills & Chocolate", ar: "المخابز الآلية، المطاحن، ومصانع الشوكولاتة" },
  },
  {
    id: "produce-packhouse",
    icon: Apple,
    enTitle: "Fresh Produce & Export Packhouses",
    arTitle: "الحاصلات الزراعية ومحطات التعبئة",
    enDesc: "Post-harvest hygiene, pesticide residue controls, GlobalG.A.P. audits, and export market compliance for EU/UK and Gulf.",
    arDesc: "معاملات ما بعد الحصاد، تتبع متبقيات المبيدات، تدقيق GlobalG.A.P.، ومطابقة اشتراطات التصدير لأوروبا والخليج.",
    standards: ["GLOBALG.A.P.", "BRCGS", "SMETA / SEDEX"],
    scope: { en: "Export Sorting Lines & Cold Stores", ar: "محطات الفرز، التعبئة، وثلاجات الحفظ" },
  },
  {
    id: "packaging",
    icon: Package,
    enTitle: "Food Contact Packaging & Materials",
    arTitle: "مواد التعبئة والتغليف الملامسة للغذاء",
    enDesc: "Migration testing protocols, cleanroom air quality, and BRCGS Packaging & HARA risk analysis for packaging manufacturers.",
    arDesc: "بروتوكولات فحص انتقال المواد، بيئة التصنيع النظيفة، وتحليل مخاطر HARA لمعايير BRCGS لمواد التغليف.",
    standards: ["BRCGS Packaging", "ISO 9001", "FSSC 22000"],
    scope: { en: "Flexible Films, Plastics & Corrugated", ar: "البلاستيك، الرقائق المرنة، والكرتون المضلع" },
  },
  {
    id: "horeca",
    icon: UtensilsCrossed,
    enTitle: "Catering, Food Chains & Central Kitchens",
    arTitle: "المطابخ المركزية وسلاسل الأغذية",
    enDesc: "Supplier qualification, cross-contamination prevention, food handler hygiene, and Yum! Brands / fast-food brand compliance.",
    arDesc: "تقييم الموردين، منع التلوث المتبادل، نظافة متداولي الأغذية، وتأهيل سلاسل المطاعم العالمية ومعايير Yum! Brands.",
    standards: ["HACCP", "ISO 22000", "Yum! Audit", "NFSA"],
    scope: { en: "Central Kitchens, QSR Chains & Catering", ar: "المطابخ المركزية، الفنادق، وسلاسل الوجبات" },
  },
];

export function CorporateSectors() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="corporate-sectors section-pad">
      <div className="section-shell mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <div className="corporate-sectors__head">
          <div>
            <span className="eyebrow eyebrow--gold">
              {isRtl ? "القطاعات والصناعات المشمولة · DIST SECTORS" : "OPERATIONAL INDUSTRIES & SECTORS"}
            </span>
            <h2 className="corporate-sectors__title">
              {isRtl ? "خبرة قطاعية متخصصة لكل خط إنتاج" : "Specialized Expertise For Every Processing Line"}
            </h2>
          </div>
          <p className="corporate-sectors__intro">
            {isRtl
              ? "لا نطبق قوالب جاهزة؛ بل نصمم منظومات سلامة الغذاء والجودة بما يلائم المخاطر الحيوية والكيميائية والفيزيائية الخاصة بكل قطاع تصنيعي."
              : "We don't apply generic templates. Our consulting adapts directly to the specific microbiological, chemical, and physical risk profiles of your facility."}
          </p>
        </div>

        {/* 6-Card High Contrast Corporate Grid */}
        <div className="corporate-sectors__grid">
          {SECTOR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredId === item.id;

            return (
              <div
                className={`corporate-sector-card ${isHovered ? "is-hovered" : ""}`}
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="corporate-sector-card__top">
                  <div className="corporate-sector-card__icon-wrap">
                    <Icon size={26} strokeWidth={1.4} />
                  </div>
                  <span className="corporate-sector-card__scope">
                    {isRtl ? item.scope.ar : item.scope.en}
                  </span>
                </div>

                <h3 className="corporate-sector-card__name">
                  {isRtl ? item.arTitle : item.enTitle}
                </h3>

                <p className="corporate-sector-card__desc">
                  {isRtl ? item.arDesc : item.enDesc}
                </p>

                {/* Standards Badges */}
                <div className="corporate-sector-card__standards">
                  {item.standards.map((std) => (
                    <span className="corporate-std-chip" key={std}>
                      <CheckCircle2 size={12} className="text-gold" />
                      <span>{std}</span>
                    </span>
                  ))}
                </div>

                <div className="corporate-sector-card__foot">
                  <Link className="corporate-sector-card__link" to="/services">
                    <span>{isRtl ? "استكشف خدمات القطاع" : "Sector Solutions"}</span>
                    <ArrowUpRight size={15} className="directional-icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Bottom Line */}
        <div className="corporate-sectors__bottom">
          <div className="corporate-sectors__stat">
            <strong>100%</strong>
            <span>{isRtl ? "مطابقة لاشتراطات الهيئة القومية لسلامة الغذاء (NFSA)" : "Full NFSA Statutory Compliance"}</span>
          </div>
          <div className="corporate-sectors__stat-divider" />
          <div className="corporate-sectors__stat">
            <strong>+40</strong>
            <span>{isRtl ? "ملصق وتطبيق توعوي معتمد لبيئات العمل" : "Floor Hygiene & GMP Awareness Frameworks"}</span>
          </div>
          <div className="corporate-sectors__stat-divider" />
          <div className="corporate-sectors__stat">
            <strong>GFSI</strong>
            <span>{isRtl ? "تأهيل كامل لمعايير FSSC 22000 و BRCGS و GlobalG.A.P." : "Benchmarked to Global GFSI Schemes"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
