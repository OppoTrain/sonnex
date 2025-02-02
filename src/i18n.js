import i18n from "i18next";
import { useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(useTranslation)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
