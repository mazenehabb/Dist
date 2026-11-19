import { Outlet } from "react-router-dom";
import { RouteTransition } from "@/components/animations/RouteTransition";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FastContactPill } from "@/components/shared/FastContactPill";
import { useLocale } from "@/hooks/useLocale";

export function SiteLayout() {
  const { t } = useLocale();
  return (
    <div className="app-shell">
      <SmoothScroll />
      <ScrollProgress />
      <RouteTransition />
      <a className="skip-link" href="#main">{t("skipToContent")}</a>
      <SiteHeader />
      <main id="main"><Outlet /></main>
      <SiteFooter />
      <FastContactPill />
    </div>
  );
}
