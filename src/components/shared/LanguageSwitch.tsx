import { Languages } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";

export function LanguageSwitch({ onSwitch }: { onSwitch?: () => void }) {
  const { locale, setLocale, t } = useLocale();
  const nextLocale = locale === "en" ? "ar" : "en";

  return (
    <button
      aria-label={locale === "en" ? t("switchToArabic") : t("switchToEnglish")}
      className="language-switch"
      onClick={() => { setLocale(nextLocale); onSwitch?.(); }}
      type="button"
    >
      <Languages aria-hidden="true" size={16} strokeWidth={1.6} />
      <span>{t("language")}</span>
    </button>
  );
}
