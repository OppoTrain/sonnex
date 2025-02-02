//import i18n from "i18next";
//import { useTranslation } from "react-i18next";
import i18n from 'https://cdn.jsdelivr.net/npm/i18n@0.15.1/+esm'
import reactI18next from 'https://cdn.jsdelivr.net/npm/react-i18next@15.4.0/+esm'
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(reactI18next)
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
