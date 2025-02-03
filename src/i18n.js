import i18n from "i18next";
//import { initReactI18next } from 'react-i18next';
import { initReactI18next } from "../node_modules/react-i18next"
//import i18n from 'https://cdn.jsdelivr.net/npm/i18n@0.15.1/+esm'
//import { useTranslation } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";


import en from "./locales/en.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
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
