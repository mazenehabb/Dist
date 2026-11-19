import { Link } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  const { t } = useLocale();
  return (
    <Link aria-label={t("logoHome")} className={`brand${inverse ? " brand--inverse" : ""}`} to="/">
      <img alt="" className="brand__seal" height="54" src="/images/logo.jpg" width="54" />
      <span className="brand__copy">
        <strong>DIST</strong>
        <span>{t("footerTagline")}</span>
      </span>
    </Link>
  );
}
