import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageMotion } from "@/components/animations/PageMotion";
import { useLocale } from "@/hooks/useLocale";
import { usePageMetadata } from "@/components/shared/Metadata";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  const { t } = useLocale();
  usePageMetadata(`${t("notFound.eyebrow")} | DIST`, t("notFound.copy"));
  return <PageMotion><section className="article-status not-found"><span className="eyebrow eyebrow--gold">{t("notFound.eyebrow")}</span><h1>{t("notFound.title")}</h1><p>{t("notFound.copy")}</p><Button asChild><Link to="/">{t("backHome")}<ArrowUpRight aria-hidden="true" className="directional-icon" size={17} /></Link></Button></section></PageMotion>;
}
