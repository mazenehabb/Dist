import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navigation } from "@/data/navigation";
import { useLocale } from "@/hooks/useLocale";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <Logo />
        <button
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav aria-label={t("navigationLabel")} className={`main-nav${menuOpen ? " main-nav--open" : ""}`} id="primary-navigation">
          <div className="main-nav__links">
            {navigation.map((item) => (
              <NavLink
                end={item.to === "/"}
                key={item.to}
                onClick={() => setMenuOpen(false)}
                to={item.to}
              >
                {t(item.key)}
              </NavLink>
            ))}
          </div>
          <div className="main-nav__actions">
            <LanguageSwitch onSwitch={() => setMenuOpen(false)} />
            <Button asChild size="small" variant="primary">
              <NavLink onClick={() => setMenuOpen(false)} to="/contact">{t("home.contactCta")}</NavLink>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
