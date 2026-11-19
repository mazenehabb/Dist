import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Locale } from "@/types/content";

export function useLocale() {
  const { i18n, t } = useTranslation();
  const locale: Locale = i18n.resolvedLanguage === "ar" ? "ar" : "en";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    window.localStorage.setItem("dist-locale", nextLocale);
    void i18n.changeLanguage(nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  return { locale, setLocale, t };
}
