import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./locales/ar";
import { en } from "./locales/en";

const savedLocale = typeof window !== "undefined" ? window.localStorage.getItem("dist-locale") : null;

if (typeof document !== "undefined") {
  const initialLocale = savedLocale === "ar" ? "ar" : "en";
  document.documentElement.lang = initialLocale;
  document.documentElement.dir = initialLocale === "ar" ? "rtl" : "ltr";
}

void i18n.use(initReactI18next).init({
  resources: { en, ar },
  lng: savedLocale === "ar" ? "ar" : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  returnNull: false,
});

export default i18n;
