import { useLocale } from "@/hooks/useLocale";

interface BrandTickerProps {
  variant?: "dark" | "gold" | "paper";
  direction?: "normal" | "reverse";
}

export function BrandTicker({ variant = "dark", direction = "normal" }: BrandTickerProps) {
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  const phrases = isRtl
    ? [
        "معايير عملية موثوقة",
        "سلامة الغذاء بلا تهاون",
        "تأهيل معتمد FSSC 22000 & BRCGS",
        "تدريب ميداني مستمر لفرق الإنتاج",
        "أنظمة جودة متكاملة FSMS & QMS",
        "تطابق كامل مع معايير NFSA",
        "ريادة وتميز منذ 2019",
      ]
    : [
        "PRACTICAL COMPLIANCE",
        "ZERO OUTBREAK RISK",
        "FSSC 22000 & BRCGS QUALIFIED",
        "CONTINUOUS FLOOR-LEVEL TRAINING",
        "INTEGRATED FSMS & QMS SYSTEMS",
        "FULL NFSA CODEX CONFORMITY",
        "EXCELLENCE EST. 2019",
      ];

  const content = phrases.join(" ✻ ") + " ✻ ";

  return (
    <div
      aria-hidden="true"
      className={`brand-ticker brand-ticker--${variant} ${direction === "reverse" ? "brand-ticker--reverse" : ""}`}
    >
      <div className="brand-ticker__track">
        <span className="brand-ticker__text">{content}</span>
        <span className="brand-ticker__text">{content}</span>
        <span className="brand-ticker__text">{content}</span>
      </div>
    </div>
  );
}
